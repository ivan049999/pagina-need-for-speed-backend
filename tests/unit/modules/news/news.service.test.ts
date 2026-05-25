import { describe, expect, it } from "vitest";
import { getLatestNews } from "../../../../src/modules/news/news.service.js";

describe("news.service", () => {
  it("returns latest news with limit", async () => {
    const articles = await getLatestNews(1);
    expect(articles).toHaveLength(1);
  });
});
