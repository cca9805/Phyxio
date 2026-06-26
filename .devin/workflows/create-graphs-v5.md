# Crear o integrar gráficos v5

Objetivo: crear o reparar gráficos Coord, DCL o SVG de un leaf, conectados con calculadora e interpretación.

## Fuentes locales obligatorias

```text
docsV2/plantilla_y_checklist/plantilla_v5_modular/graficos/plantilla_graficos_v5.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/graficos/graficos_generales_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/graficos/graficos_dcl_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/graficos/graficos_svg_md.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/graficos/plantilla_graph_coord_v1.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/graficos/plantilla_graph_dcl_v1.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/graficos/plantilla_graph_svg_v1.md
```

## Procedimiento

1. Leer `graficos` desde mapa y `meta.yaml`.
2. Confirmar que cada gráfico responde a la pregunta física central.
3. Reutilizar componentes compartidos existentes si los hay.
4. Conectar variables con `magnitudes.yaml` y `formulas.yaml`.
5. Conectar lectura física con `interpretacion.yaml`.
6. Asegurar UI bilingüe.
7. Registrar imports/rutas en el sistema V2 correspondiente.
8. Validar build o, como mínimo, revisar errores de import/export.

## Rechazo duro

No crear gráficos decorativos que no aporten cálculo, lectura física, experimentación o interpretación.
