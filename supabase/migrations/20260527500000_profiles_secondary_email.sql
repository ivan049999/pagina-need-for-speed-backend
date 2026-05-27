alter table public.profiles
  add column if not exists secondary_email text,
  add column if not exists secondary_email_verified boolean not null default false;
