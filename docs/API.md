# API Reference

Base URL: `{host}/api/v1`

## Health

### `GET /health`

```json
{
  "status": "ok",
  "service": "pagina-need-for-speed-backend",
  "version": "0.1.0",
  "environment": "development",
  "timestamp": "2026-05-25T12:00:00.000Z"
}
```

## Cars

### `GET /cars?page=1&limit=20`

Respuesta paginada con `data` y `meta`.

### `GET /cars/featured`

```json
{ "data": [ /* CarDto[] */ ] }
```

### `GET /cars/:slug`

```json
{ "data": { /* CarDto */ } }
```

## News

### `GET /news`

### `GET /news/latest?limit=3`

### `GET /news/:slug`

## Leaderboard

### `GET /leaderboard`

## Garage

### `GET /garage/:userId`

Colección de coches del piloto.

## Errores

```json
{
  "error": "Car \"foo\" not found",
  "code": "CAR_NOT_FOUND"
}
```
