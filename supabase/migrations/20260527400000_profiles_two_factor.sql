alter table public.profiles
  add column if not exists two_factor_enabled boolean not null default false,
  add column if not exists two_factor_method text;
