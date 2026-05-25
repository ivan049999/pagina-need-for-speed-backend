# pagina-need-for-speed-backend

API REST en **Node.js + Express + TypeScript** para la web Need for Speed.

Complementa el frontend [`pagina-need-for-speed-fronted`](../fronted/pagina-need-for-speed-fronted) con datos de coches, noticias, leaderboard y garaje.

## Stack

- Express 4 + TypeScript
- Prisma + PostgreSQL (Supabase compatible)
- Zod (validación)
- Vitest + Supertest

## Inicio rápido

```bash
cp .env.example .env
npm install
npm run dev
```

API en `http://localhost:4000/api/v1`

## Endpoints principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/health` | Estado del servicio |
| GET | `/api/v1/cars` | Catálogo paginado |
| GET | `/api/v1/cars/featured` | Coches destacados |
| GET | `/api/v1/cars/:slug` | Detalle de coche |
| GET | `/api/v1/news` | Todas las noticias |
| GET | `/api/v1/news/latest?limit=3` | Últimas noticias |
| GET | `/api/v1/news/:slug` | Artículo por slug |
| GET | `/api/v1/leaderboard` | Ranking de pilotos |
| GET | `/api/v1/garage/:userId` | Garaje del usuario |

## Estructura

Ver [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

## Scripts

| Comando | Uso |
|---------|-----|
| `npm run dev` | Servidor con hot-reload |
| `npm run build` | Compilar a `dist/` |
| `npm test` | Tests unitarios |
| `npm run db:migrate` | Migraciones Prisma |
