import type { LeaderboardEntryDto } from "../../shared/types/leaderboard.js";
import { MOCK_LEADERBOARD } from "../../../tests/fixtures/leaderboard.fixture.js";

export async function findAll(): Promise<LeaderboardEntryDto[]> {
  return MOCK_LEADERBOARD;
}
