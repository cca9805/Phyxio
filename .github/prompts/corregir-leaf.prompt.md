---
description: "Valida un leaf Phyxio y aplica automáticamente los fallos bloqueantes simples: {{f:id}} inline, [[id]] sin registro en magnitudes.yaml, IDs desincronizados entre YAMLs, y pregunta_fisica_central sin interrogación. Úsalo cuando quieras corregir un leaf sin revisar los errores manualmente."
name: "Corregir leaf"
argument-hint: "Ruta relativa del leaf (opcional; si se omite, se infiere del archivo activo en el editor)"
agent: "agent"
---

Corrige automáticamente los fallos bloqueantes simples de un leaf Phyxio. El resumen debe estar siempre **en español**.

## Determinar la ruta del leaf

- Si se proporcionó un argumento (`$args[0]`), úsalo directamente.
- Si no, infiere la ruta del leaf a partir del archivo activo en el editor: toma su ruta absoluta y sube directorios hasta encontrar la carpeta que contiene `meta.yaml`.

## Pasos

1. Ejecuta el validador oficial:
   ```
   python tools/phyxio_leaf_validator.py <ruta-del-leaf>
   ```

2. Clasifica los fallos en dos grupos:

   **Corregibles automáticamente** (aplica sin pedir confirmación):
   - `{{f:id}}` usado inline dentro de un párrafo → mover a línea propia con línea en blanco antes y después.
   - `[[id]]` que no existe en `magnitudes.yaml` → eliminar los corchetes dobles y dejar el texto como código inline `` `id` `` si es variable auxiliar, o añadir la entrada faltante en `magnitudes.yaml` si es una magnitud real (determina cuál caso aplica por el contexto).
   - IDs desincronizados entre `magnitudes.yaml`, `formulas.yaml` e `interpretacion.yaml` (ej. `acm` vs `a_cm`) → unificar usando el ID canónico de `magnitudes.yaml`.
   - `pregunta_fisica_central` sin signos de interrogación en `meta.yaml` → añadir `¿…?` / `…?`.

   **Requieren revisión manual** (no tocar; listar solamente):
   - Fallos de coherencia física o semántica.
   - Secciones faltantes en `.md`.
   - Problemas de bilingüismo o densidad de contenido.

3. Aplica todas las correcciones automáticas directamente sobre los archivos del leaf.

4. Vuelve a ejecutar el validador para confirmar que los fallos corregidos desaparecen:
   ```
   python tools/phyxio_leaf_validator.py <ruta-del-leaf>
   ```

## Informe final (en español)

### Correcciones aplicadas
Lista de cambios realizados, archivo por archivo.

### Fallos restantes que requieren revisión manual
Lista con archivo afectado, regla violada y sugerencia de corrección (referencia a [plantilla_v5.md](../../docsV2/plantilla_v5.md) si aplica).

### Nivel estimado tras las correcciones
