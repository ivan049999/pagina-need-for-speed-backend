import type { CarDto } from "../../shared/types/car.js";
import { MOCK_CARS } from "../../../tests/fixtures/cars.fixture.js";

export async function findCarsByUserId(_userId: string): Promise<CarDto[]> {
  return MOCK_CARS.slice(0, 3);
}
