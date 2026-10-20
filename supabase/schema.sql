-- ClearStep: cloud progress. Run in Supabase SQL Editor; this schema is safe to rerun.

create table if not exists public.user_progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb  not null,
  upd        bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint user_progress_size check (pg_column_size(data) < 1000000)
);

-- Recursively merge snapshots while preserving concurrent answer/test history.
-- Object fields use the snapshot with the newer client upd timestamp; arrays
-- with timestamped records are merged atomically and bounded to their app limits.
create or replace function public.cs_merge_progress_jsonb(
  old_value jsonb,
  new_value jsonb,
  field_name text,
  prefer_new boolean
)
returns jsonb
language plpgsql
immutable
set search_path = public, pg_temp
as $$
declare
  result jsonb;
begin
  if jsonb_typeof(old_value) = 'object' and jsonb_typeof(new_value) = 'object' then
    select coalesce(jsonb_object_agg(k,
      case
        when old_value -> k is null then new_value -> k
        when new_value -> k is null then old_value -> k
        else public.cs_merge_progress_jsonb(old_value -> k, new_value -> k, k, prefer_new)
      end
    ), '{}'::jsonb)
    into result
    from (
      select jsonb_object_keys(old_value) as k
      union
      select jsonb_object_keys(new_value) as k
    ) keys;
    return result;
  end if;

  if jsonb_typeof(old_value) = 'array' and jsonb_typeof(new_value) = 'array' then
    if field_name = 'a' then
      with combined as (
        select value, 0 as source from jsonb_array_elements(old_value)
        union all
        select value, 1 as source from jsonb_array_elements(new_value)
      ), deduplicated as (
        select distinct on (value ->> 'id', value ->> 'ts')
          value, (value ->> 'ts')::numeric as ts
        from combined
        where jsonb_typeof(value) = 'object' and value ? 'id' and value ? 'ts'
        order by value ->> 'id', value ->> 'ts', source desc
      ), recent as (
        select value, ts from deduplicated order by ts desc limit 2000
      )
      select coalesce(jsonb_agg(value order by ts), '[]'::jsonb) into result from recent;
      return result;
    end if;

    if exists (
      select 1 from jsonb_array_elements(old_value) x(value)
      where jsonb_typeof(value) = 'object' and value ? 'ts'
      union all
      select 1 from jsonb_array_elements(new_value) x(value)
      where jsonb_typeof(value) = 'object' and value ? 'ts'
    ) then
      with combined as (
        select value, 0 as source from jsonb_array_elements(old_value)
        union all
        select value, 1 as source from jsonb_array_elements(new_value)
      ), deduplicated as (
        select distinct on (value ->> 'ts')
          value, (value ->> 'ts')::numeric as ts
        from combined
        where jsonb_typeof(value) = 'object' and value ? 'ts'
        order by value ->> 'ts', source desc
      ), recent as (
        select value, ts from deduplicated order by ts desc limit 50
      )
      select coalesce(jsonb_agg(value order by ts), '[]'::jsonb) into result from recent;
      return result;
    end if;
  end if;

  if field_name = 'upd'
     and jsonb_typeof(old_value) = 'number'
     and jsonb_typeof(new_value) = 'number' then
    return to_jsonb(greatest((old_value #>> '{}')::numeric, (new_value #>> '{}')::numeric));
  end if;

  if prefer_new then return new_value; end if;
  return old_value;
end;
$$;

-- A single row-locking upsert prevents two devices from replacing each other's
-- distinct attempts. The caller can only write the authenticated user's row.
create or replace function public.save_my_progress(p_data jsonb)
returns jsonb
language plpgsql
security invoker
set search_path = public, auth, pg_temp
as $$
declare
  result jsonb;
  client_upd bigint;
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  if jsonb_typeof(p_data) <> 'object' or (p_data ->> 'v') is distinct from '2' then
    raise exception 'invalid progress data';
  end if;
  if pg_column_size(p_data) >= 1000000 then raise exception 'progress data too large'; end if;
  client_upd := coalesce((p_data ->> 'upd')::bigint, 0);

  insert into public.user_progress as stored (user_id, data, upd, updated_at)
  values (auth.uid(), p_data, client_upd, now())
  on conflict (user_id) do update set
    data = public.cs_merge_progress_jsonb(stored.data, excluded.data, null,
      excluded.upd >= stored.upd),
    upd = greatest(stored.upd, excluded.upd),
    updated_at = now()
  returning data into result;
  return result;
end;
$$;

alter table public.user_progress enable row level security;

-- Each signed-in user can touch only their own row. Anonymous visitors get nothing.
drop policy if exists "own row select" on public.user_progress;
drop policy if exists "own row insert" on public.user_progress;
drop policy if exists "own row update" on public.user_progress;
drop policy if exists "own row delete" on public.user_progress;

create policy "own row select" on public.user_progress for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "own row insert" on public.user_progress for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "own row update" on public.user_progress for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own row delete" on public.user_progress for delete to authenticated
  using ((select auth.uid()) = user_id);

revoke all on public.user_progress from anon;
grant select, insert, update, delete on public.user_progress to authenticated;
revoke all on function public.cs_merge_progress_jsonb(jsonb, jsonb, text, boolean) from public, anon, authenticated;
revoke all on function public.save_my_progress(jsonb) from public, anon;
grant execute on function public.cs_merge_progress_jsonb(jsonb, jsonb, text, boolean) to authenticated;
grant execute on function public.save_my_progress(jsonb) to authenticated;

-- Lets a signed-in user delete their own account (progress row is removed by the cascade).
create or replace function public.delete_my_account()
returns void language plpgsql security definer set search_path = public, auth as $$
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  delete from auth.users where id = auth.uid();
end $$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
