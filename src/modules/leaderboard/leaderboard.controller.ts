import type { Request, Response } from "express";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import * as leaderboardService from "./leaderboard.service.js";

export const getLeaderboard = asyncHandler(async (_req: Request, res: Response) => {
  const entries = await leaderboardService.getLeaderboard();
  res.json({ data: entries });
});
