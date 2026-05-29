import { Router } from "express";
import { getGamePrice } from "./pricing.controller.js";

export const gamesRouter = Router();

gamesRouter.get("/:slug/price", getGamePrice);
