insert into cars (id, slug, name, description, tier, featured, image_url, top_speed, acceleration)
values
  ('car_1', 'bmw-m3-g80', 'BMW M3 G80', 'Sedán deportivo.', 'A', true, '/uploads/cars/bmw-m3.jpg', 290, 8.5),
  ('car_2', 'porsche-911-gt3', 'Porsche 911 GT3', 'Icono de pista.', 'S', true, '/uploads/cars/porsche-911.jpg', 318, 9.2)
on conflict (slug) do nothing;
