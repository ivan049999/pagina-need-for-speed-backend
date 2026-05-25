import type { LeaderboardEntryDto } from "../../shared/types/leaderboard.js";
import * as leaderboardRepository from "./leaderboard.repository.js";

export async function getLeaderboard(): Promise<LeaderboardEntryDto[]> {
  return leaderboardRepository.findAll();
}
