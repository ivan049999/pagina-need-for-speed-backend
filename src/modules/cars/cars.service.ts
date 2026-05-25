import { AppError } from "../../shared/errors/AppError.js";
import type { CarDto } from "../../shared/types/car.js";
import * as carsRepository from "./cars.repository.js";

export async function listCars(opts: { page: number; limit: number }) {
  return carsRepository.findMany(opts);
}

export async function listFeaturedCars(): Promise<CarDto[]> {
  return carsRepository.findFeatured();
}

export async function getCarBySlug(slug: string): Promise<CarDto> {
  const car = await carsRepository.findBySlug(slug);
  if (!car) throw new AppError(404, "CAR_NOT_FOUND", `Car "${slug}" not found`);
  return car;
}
