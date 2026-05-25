import { Router } from "express";
import { carsRouter } from "../modules/cars/cars.routes.js";
import { garageRouter } from "../modules/garage/garage.routes.js";
import { healthRouter } from "../modules/health/health.routes.js";
import { leaderboardRouter } from "../modules/leaderboard/leaderboard.routes.js";
import { newsRouter } from "../modules/news/news.routes.js";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/cars", carsRouter);
apiRouter.use("/news", newsRouter);
apiRouter.use("/leaderboard", leaderboardRouter);
apiRouter.use("/garage", garageRouter);
