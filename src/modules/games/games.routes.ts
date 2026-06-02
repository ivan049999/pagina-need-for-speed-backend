import { Router } from "express";
import { getNfsCatalog } from "./catalog.controller.js";
import { getGamePrice } from "./pricing.controller.js";

export const gamesRouter = Router();

gamesRouter.get("/catalog", getNfsCatalog);
gamesRouter.get("/:slug/price", getGamePrice);
