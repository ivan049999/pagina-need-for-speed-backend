-- Fecha de nacimiento y país del registro
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS birth_date DATE,
  ADD COLUMN IF NOT EXISTS country_code TEXT;
