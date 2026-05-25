# Contribuir

1. Crea una rama desde `main`: `feat/nombre-corto`
2. Añade tests si cambias lógica en `service` o `repository`
3. Ejecuta `npm run lint`, `npm run typecheck` y `npm test`
4. Abre PR hacia `main`

## Convenciones

- Nombres de archivos en kebab-case dentro de módulos: `cars.service.ts`
- Errores de dominio con `AppError` y códigos en `SCREAMING_SNAKE_CASE`
- Tipos compartidos con el front en `src/shared/types/`
