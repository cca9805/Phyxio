# Empaquetar leaf v5 en zip

Objetivo: generar un zip final con estructura real y sin archivos parciales.

## Procedimiento

1. Validar que existen los 16 archivos obligatorios.
2. Incluir gráficos relacionados si el usuario los pidió o si forman parte del cambio.
3. No incluir cachés, `node_modules`, builds ni archivos temporales.
4. Ejecutar validador si el usuario pidió paquete final validado.
5. Crear zip conservando rutas relativas del repo.
6. Informar de validación ejecutada y estado.

## Salida

Entregar ruta del zip y resumen corto:

```text
ZIP_READY
included:
- 16 leaf files
- graph files, if any
validation: PASS/FAIL/not executed
```
