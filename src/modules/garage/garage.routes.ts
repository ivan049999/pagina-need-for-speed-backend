import { Router } from "express";
import { getGarageByUserId } from "./garage.controller.js";

export const garageRouter = Router();

/** Garaje del piloto (favoritos / colección) */
garageRouter.get("/:userId", getGarageByUserId);
