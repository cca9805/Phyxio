# Crear bloque YAML del leaf v5

Objetivo: crear o reparar `meta.yaml`, `magnitudes.yaml`, `formulas.yaml` e `interpretacion.yaml` de un leaf.

## Entradas necesarias

- Ruta del leaf.
- Fragmento correspondiente de `phyxio-map.yaml`.
- Si existe, estado actual de los cuatro YAML.

## Fuentes locales obligatorias

```text
docsV2/plantilla_y_checklist/plantilla_v5_modular/00_reglas_generales.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/01_coherencia_y_sincronizacion.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/meta_yaml.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/magnitudes_yaml.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/formulas_yaml.md
docsV2/plantilla_y_checklist/plantilla_v5_modular/archivos/interpretacion_yaml.md
```

## Procedimiento

1. Leer el fragmento real del mapa.
2. Construir `meta.yaml` desde el mapa, sin inventar identidad.
3. Definir magnitudes físicas necesarias, sin duplicados simbólicos.
4. Definir fórmulas con despejes, restricciones, dominio, checks y `result_semantics`.
5. Cruzar todas las variables de fórmulas contra magnitudes.
6. Crear `interpretacion.yaml` con dependencias y targets reales.
7. Ejecutar validador o etapa YAML si existe.
8. Corregir hasta que la etapa YAML no tenga fails.

## Salida

Entregar los cuatro archivos completos o escribirlos directamente en el repo, según la petición del usuario.

No entregar si hay variables huérfanas, targets inexistentes o identidad no sincronizada con el mapa.
