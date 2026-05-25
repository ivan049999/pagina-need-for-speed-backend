import { Router } from "express";
import { getLeaderboard } from "./leaderboard.controller.js";

export const leaderboardRouter = Router();

leaderboardRouter.get("/", getLeaderboard);
