import type { NewsArticleDto } from "../../src/shared/types/news.js";

export const MOCK_NEWS: NewsArticleDto[] = [
  {
    slug: "nuevo-temporada-heat",
    title: "Nueva temporada Heat disponible",
    excerpt: "Más coches, más circuitos y recompensas exclusivas.",
    content: "La temporada Heat trae contenido renovado para todos los pilotos.",
    publishedAt: "2026-05-01T10:00:00.000Z",
  },
  {
    slug: "parche-balanceo-v2",
    title: "Parche de balanceo v2",
    excerpt: "Ajustes en tiers S y S+ para competición justa.",
    content: "Se han revisado las estadísticas de aceleración y velocidad máxima.",
    publishedAt: "2026-05-10T14:30:00.000Z",
  },
];
