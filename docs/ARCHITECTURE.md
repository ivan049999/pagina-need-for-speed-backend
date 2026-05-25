# Arquitectura del backend

## Stack

- **Node.js 20+** + **Express 4**
- **TypeScript** (ESM, `NodeNext`)
- **Prisma** → PostgreSQL / Supabase
- **Zod** para validación de entrada

## Organización (feature-based)

Alineada con el frontend Next.js:

| Carpeta | Responsabilidad |
|---------|-----------------|
| `src/modules/<dominio>/` | Lógica por feature (cars, news, leaderboard, garage) |
| `src/shared/` | Middleware, errores, tipos, utilidades |
| `src/routes/` | Agregador de routers |
| `src/config/` | Variables de entorno |
| `prisma/` | Schema y seeds |
| `supabase/` | Migraciones SQL alternativas |
| `tests/` | Unit + integration + fixtures |

## Capas por módulo

```
modules/cars/
├── cars.routes.ts      → define rutas HTTP
├── cars.controller.ts  → req/res, sin lógica de negocio
├── cars.service.ts     → reglas de negocio
├── cars.repository.ts  → acceso a datos (Prisma)
└── cars.schema.ts      → validación Zod
```

## Flujo de una petición

```
Cliente → Express middleware → Router → Controller → Service → Repository → DB
                                                      ↓
                                              AppError → errorHandler
```

## Integración con el frontend

El front usa `NEXT_PUBLIC_API_URL` apuntando a este servidor, por ejemplo:

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

Los DTO (`CarDto`, `NewsArticleDto`, `LeaderboardEntryDto`) coinciden con los tipos del front en `src/types/`.
