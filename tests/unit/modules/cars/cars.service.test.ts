import { describe, expect, it } from "vitest";
import { getCarBySlug } from "../../../../src/modules/cars/cars.service.js";
import { AppError } from "../../../../src/shared/errors/AppError.js";

describe("cars.service", () => {
  it("returns car by slug", async () => {
    const car = await getCarBySlug("bmw-m3-g80");
    expect(car.slug).toBe("bmw-m3-g80");
  });

  it("throws when car not found", async () => {
    await expect(getCarBySlug("no-existe")).rejects.toBeInstanceOf(AppError);
  });
});
