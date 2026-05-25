import type { CarDto } from "../../shared/types/car.js";
import type { PaginatedResponse } from "../../shared/types/api.js";
import { MOCK_CARS } from "../../../tests/fixtures/cars.fixture.js";

/** Sustituir por Prisma cuando DATABASE_URL esté configurada */
export async function findMany(opts: {
  page: number;
  limit: number;
}): Promise<PaginatedResponse<CarDto>> {
  const start = (opts.page - 1) * opts.limit;
  const data = MOCK_CARS.slice(start, start + opts.limit);
  return {
    data,
    meta: {
      page: opts.page,
      limit: opts.limit,
      total: MOCK_CARS.length,
      totalPages: Math.ceil(MOCK_CARS.length / opts.limit),
    },
  };
}

export async function findFeatured(): Promise<CarDto[]> {
  return MOCK_CARS.filter((c) => c.featured);
}

export async function findBySlug(slug: string): Promise<CarDto | null> {
  return MOCK_CARS.find((c) => c.slug === slug) ?? null;
}
