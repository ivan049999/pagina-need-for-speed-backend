import { Router } from "express";
import { validate } from "../../shared/middleware/validate.js";
import { paginationSchema } from "../../shared/validators/pagination.schema.js";
import { getCarBySlug, getCars, getFeaturedCars } from "./cars.controller.js";
import { carSlugParamsSchema } from "./cars.schema.js";

export const carsRouter = Router();

carsRouter.get("/", validate(paginationSchema, "query"), getCars);
carsRouter.get("/featured", getFeaturedCars);
carsRouter.get("/:slug", validate(carSlugParamsSchema, "params"), getCarBySlug);
