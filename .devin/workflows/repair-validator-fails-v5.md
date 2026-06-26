# Reparar fallos de validador v5

Objetivo: corregir un leaf a partir del output real del validador sin introducir regresiones.

## Procedimiento

1. Leer el output completo del validador.
2. Identificar causa raíz, no solo el archivo mencionado.
3. Leer los archivos relacionados antes de editar:
   - YAML si el fallo es semántico.
   - Pares ES/EN si el fallo es editorial.
   - Gráficos e interpretación si el fallo afecta UI o lectura física.
4. Aplicar cambios mínimos pero completos.
5. No reducir contenido por debajo de mínimos.
6. No eliminar variables ni fórmulas para silenciar errores.
7. Ejecutar validación de la etapa afectada.
8. Ejecutar validación completa si el usuario pidió cierre.

## Salida

```text
REPAIR_REPORT
leaf: <ruta>
files_changed:
- ...
root_causes_fixed:
- ...
validation_after:
- command: ...
- status: PASS/FAIL
remaining_fails:
- ...
```

Si no puedes ejecutar el validador, dilo claramente y entrega los cambios con advertencia.
