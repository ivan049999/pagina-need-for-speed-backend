import type { CarDto } from "../../src/shared/types/car.js";

export const MOCK_CARS: CarDto[] = [
  {
    id: "1",
    slug: "bmw-m3-g80",
    name: "BMW M3 G80",
    description: "Sedán deportivo de alto rendimiento.",
    tier: "A",
    featured: true,
    imageUrl: "/uploads/cars/bmw-m3.jpg",
    stats: { topSpeed: 290, acceleration: 8.5 },
  },
  {
    id: "2",
    slug: "porsche-911-gt3",
    name: "Porsche 911 GT3",
    description: "Icono de pista con motor atmosférico.",
    tier: "S",
    featured: true,
    imageUrl: "/uploads/cars/porsche-911.jpg",
    stats: { topSpeed: 318, acceleration: 9.2 },
  },
  {
    id: "3",
    slug: "nissan-skyline-gtr",
    name: "Nissan Skyline GT-R",
    description: "Leyenda japonesa del street racing.",
    tier: "S+",
    featured: false,
    imageUrl: "/uploads/cars/skyline.jpg",
    stats: { topSpeed: 315, acceleration: 9.0 },
  },
];
