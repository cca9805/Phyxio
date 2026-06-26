# Crear archivos Markdown bilingües del leaf v5

Objetivo: crear o reparar pares `.md` y `.en.md` respetando plantilla, conteos y coherencia física.

## Fuentes locales obligatorias

```text
docsV2/plantilla_y_checklist/plantilla_v5_modular/00_reglas_generales.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/01_coherencia_y_sincronizacion.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/teoria_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/teoria_en_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/modelos_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/modelos_en_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/errores_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/errores_en_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/ejemplos_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/ejemplos_en_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/aplicaciones_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/aplicaciones_en_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/historia_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/historia_en_md.md
```

## Procedimiento

1. Leer `meta.yaml`, `magnitudes.yaml`, `formulas.yaml` e `interpretacion.yaml`.
2. Identificar pregunta física central, magnitudes dominantes y fórmulas nucleares.
3. Crear cada par bilingüe completo, no resumen.
4. Usar `{{f:id_formula}}` aislado cuando corresponda.
5. Evitar LaTeX fuera de delimitadores.
6. Cumplir estructura exacta y conteos de la plantilla local.
7. Ejecutar etapa Markdown o validador completo.
8. Reparar estructura, conteo, render y cobertura antes de entregar.

## Salida

Entregar únicamente archivos completos. Si se genera zip, conservar rutas reales del leaf.
