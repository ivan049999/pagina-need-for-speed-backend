-- Espejo SQL del schema Prisma (Supabase / Postgres)
create type car_tier as enum ('D', 'C', 'B', 'A', 'S', 'S+', 'X');

create table if not exists cars (
  id text primary key,
  slug text unique not null,
  name text not null,
  description text not null,
  tier car_tier not null,
  featured boolean default false,
  image_url text not null,
  top_speed int not null,
  acceleration double precision not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists news_articles (
  id text primary key,
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  published_at timestamptz not null,
  created_at timestamptz default now()
);

create table if not exists leaderboard_entries (
  id text primary key,
  rank int not null,
  pilot text not null,
  car_name text not null,
  time text not null,
  season text default '2026-s1',
  created_at timestamptz default now()
);
