-- ClearStep: cloud progress. Run once in Supabase: SQL Editor -> New query -> paste -> Run.

create table if not exists public.user_progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb  not null,
  upd        bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint user_progress_size check (pg_column_size(data) < 1000000)
);

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

-- Lets a signed-in user delete their own account (progress row is removed by the cascade).
create or replace function public.delete_my_account()
returns void language plpgsql security definer set search_path = public, auth as $$
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  delete from auth.users where id = auth.uid();
end $$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
