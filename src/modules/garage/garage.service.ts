import type { CarDto } from "../../shared/types/car.js";
import * as garageRepository from "./garage.repository.js";

export type GarageDto = {
  userId: string;
  cars: CarDto[];
};

export async function getGarage(userId: string): Promise<GarageDto> {
  const cars = await garageRepository.findCarsByUserId(userId);
  return { userId, cars };
}
