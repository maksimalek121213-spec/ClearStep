# Настройка Supabase для ClearStep

Пока вы не выполните эти шаги, вход на сайте честно показывает «Аккаунты ещё не настроены», а прогресс хранится только в браузере. Ничего не имитируется.

## 1. Создайте проект
1. Зайдите на https://supabase.com, создайте аккаунт и нажмите **New project**.
2. Запомните пароль базы (он нужен только вам, на сайт его не вставляйте).

## 2. Создайте таблицу и правила доступа
1. Откройте **SQL Editor → New query**.
2. Вставьте содержимое файла `supabase/schema.sql` и нажмите **Run**.
3. Проверьте: **Table Editor → user_progress** существует, у неё включён **RLS** (Row Level Security).

## 3. Вставьте публичные ключи в сайт
1. **Project Settings → API**. Скопируйте **Project URL** и ключ **anon public**.
2. Вставьте их в `js/config.js`:
   ```js
   window.CS_CONFIG = { SUPABASE_URL: "https://xxxx.supabase.co", SUPABASE_ANON_KEY: "..." };
   ```
3. **Никогда** не вставляйте ключ `service_role` в сайт или репозиторий. Ключ `anon` публичный по замыслу: данные защищает RLS.

## 4. Адреса сайта (обязательно)
**Authentication → URL Configuration**
- **Site URL:** `https://maksimalek121213-spec.github.io/ClearStep/`
- **Redirect URLs:** добавьте тот же адрес (с `/ClearStep/` на конце). Без этого ссылки из писем и Google вернут на неправильную страницу.

## 5. Вход по почте и паролю + ссылка на почту
**Authentication → Providers → Email**: включено.
- **Confirm email**: включите, чтобы регистрация требовала подтверждения почты.
- Magic link работает через тот же провайдер.
- Встроенная отправка писем Supabase имеет жёсткий лимит (несколько писем в час). Для реального запуска подключите свой SMTP: **Project Settings → Authentication → SMTP Settings**.

## 6. Google
1. https://console.cloud.google.com → создайте проект → **APIs & Services → OAuth consent screen** (External).
2. **Credentials → Create credentials → OAuth client ID → Web application.**
3. В **Authorized redirect URIs** вставьте адрес из Supabase: **Authentication → Providers → Google** (вида `https://xxxx.supabase.co/auth/v1/callback`).
4. Скопируйте **Client ID** и **Client secret** в Supabase (**Providers → Google → Enable**). Секрет вводится только в панели Supabase, не в код.

## 7. Проверьте вручную (я не могу сделать это за вас)
- [ ] Регистрация, письмо подтверждения, вход
- [ ] Выход и повторный вход
- [ ] Забыли пароль: письмо, форма нового пароля
- [ ] Ссылка для входа по почте
- [ ] Вход через Google
- [ ] Пройти вопросы на одном устройстве, войти с другого: прогресс на месте
- [ ] Выключить интернет: статус «Нет сети», затем «Сохранено» после возвращения
- [ ] Удаление аккаунта: пользователь и строка в `user_progress` исчезли
- [ ] Второй аккаунт не видит чужой прогресс
