# Flujo de creación de leaf (v5 - Automatizado ZIP)

## FASE 1: YAMLs Consolidados (Automático ZIP)
1. Recibir leaf_id y nombre.
2. Leer el mapa si existe.
3. Crear carpeta del leaf en pruebas.
4. Crear los 16 archivos obligatorios (skeleton).
5. Extraer estructura desde plantilla_v5_modular.
6. **Generar PROMPT MAESTRO CONSOLIDADO** (`00_todos_yaml.prompt.md`).
7. **Intervención humana mínima**: Copiar prompt → IA → Guardar ZIP `{leaf_id}_yaml.zip`.
8. **Detección automática**: Orquestador detecta el ZIP específico en `Downloads/descargas_phyxio/`.
9. **Procesamiento automático**: Extrae y copia `meta.yaml`, `formulas.yaml`, `magnitudes.yaml`, `graficos.yaml`.

## FASE 2: Interpretación
10. Sincronizar `interpretacion.yaml` desde meta/magnitudes/formulas.
11. Generar prompt interpretación.
12. Recibir respuesta de interpretación (manual o IA).
13. Escribir `interpretacion.yaml` final.

## FASE 3: Archivos Markdown (ZIP)
14. Generar prompts para archivos `.md` (modelos, base, problemas, evaluación).
15. **Intervención humana mínima**: Copiar prompts → IA → Guardar ZIP `{leaf_id}_md.zip`.
16. **Detección y procesamiento automático** del ZIP de Markdowns específico.

## FASE 4: Gráficos y Componentes (Automático)
17. Si `graficos.yaml` existe → **Generar automáticamente**:
    - Componentes Coord/Svg/Dcl (`generate_graph_component.py`)
    - Perfiles SVG si aplica (`generate_svg_profile.py`)
    - Perfiles DCL si aplica (`generate_dcl_profile.py`)
    - Actualización de `index.js` automática

## FASE 5: Validación y Reparación
18. Generar traducciones EN.
19. Ejecutar `validator_modular`.
20. Crear `report.json` y `report.md`.
21. **Reparación automática** de fails (si es posible).
22. Repetir hasta 0 fails.
23. **Promocionar** solo con comando explícito.
