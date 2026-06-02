import { Router } from "express";
import { getNfsCatalog } from "./catalog.controller.js";
import { getGameDetails } from "./game-details.controller.js";
import { getGamePrice } from "./pricing.controller.js";

export const gamesRouter = Router();

gamesRouter.get("/catalog", getNfsCatalog);
gamesRouter.get("/:slug/details", getGameDetails);
gamesRouter.get("/:slug/price", getGamePrice);
