# Phyxio Leaf Validator — Módulo Modular

## ¿Qué es esto?

El directorio `tools/validator_modular/` contiene la refactorización modular del validador original `tools/phyxio_leaf_validator.py`. La **funcionalidad es 100% idéntica**: mismos checks, misma puntuación, misma salida. La diferencia es arquitectónica.

### ¿Por qué existe?

El validador original es un monolito de **6.200 líneas / 269 KB**. Cuando una IA o un desarrollador necesita depurar una regla concreta (por ejemplo, la coherencia entre `formulas.yaml` e `interpretacion.yaml`), tiene que cargar todo el archivo. Con el módulo modular, puede leer solo el archivo relevante (~1-5 KB), ahorrando hasta el **99.7% de los tokens** de contexto.

---

## Uso

### Ejecutar el validador (equivalente al original)

```bash
# Validar un leaf individual
python tools/phyxio_leaf_validator_v2.py frontend/src/data_v2_i18n/<bloque>/<tema>/<leaf-id>

# Validar todos los leafs de un directorio
python tools/phyxio_leaf_validator_v2.py frontend/src/data_v2_i18n/

# Flags disponibles (idénticos al original)
python tools/phyxio_leaf_validator_v2.py <ruta> --count     # Resumen de conteo de OKs/FAILs
python tools/phyxio_leaf_validator_v2.py <ruta> --words     # Conteo de palabras por archivo
python tools/phyxio_leaf_validator_v2.py <ruta> --json      # Salida en JSON
```

> El entrypoint `phyxio_leaf_validator_v2.py` es un wrapper de 8 líneas que llama a `tools.validator_modular._core.main`. No tiene lógica propia.

### Ejecutar el original (sin cambios)

```bash
python tools/phyxio_leaf_validator.py <ruta>
```

Ambos producen el mismo resultado. El original sigue siendo válido y no ha sido modificado.

---

## Regenerar el paquete modular

Si el validador original `phyxio_leaf_validator.py` se actualiza con nuevas reglas, el paquete modular se puede regenerar con:

```bash
python tools/refactor_validator.py
```

Este script lee el monolito original, lo segmenta por funciones (preservando decoradores y líneas exactas), y escribe el paquete en `tools/validator_modular/`.

---

## Arquitectura del paquete

```
tools/
├── phyxio_leaf_validator.py        ← Monolito original (fuente de verdad, NO modificar, NO USAR)
├── phyxio_leaf_validator_v2.py     ← Entrypoint del paquete modular
├── refactor_validator.py           ← Script que regenera el paquete desde el monolito
└── validator_modular/
    ├── README.md                   ← Este archivo
    ├── 00_INDEX.md                 ← Índice completo de funciones por módulo
    ├── __init__.py                 ← Reexporta todo desde _core.py
    ├── _core.py                    ← Motor completo (generado, no editar)
    ├── constants.py                ← Reexporta constantes y patrones
    ├── utils.py                    ← Reexporta utilidades base
    ├── yaml_checks.py              ← Reexporta checks de archivos YAML
    ├── markdown_checks.py          ← Reexporta checks de archivos Markdown
    ├── graph_checks.py             ← Reexporta checks de gráficos
    ├── coherence_checks.py         ← Reexporta checks de coherencia inter-archivos
    ├── semantic_checks.py          ← Reexporta checks semánticos y didácticos
    ├── report.py                   ← Reexporta funciones de reporte y puntuación
    └── main.py                     ← Reexporta validate_leaf() y main()
```

> **Regla crítica**: los módulos temáticos (todo excepto `_core.py`) son **solo reexportaciones**. No contienen lógica. La lógica real está en `_core.py`.

---

## Descripción de cada archivo

### `_core.py`
**Motor completo del validador. Generado automáticamente.**

Contiene todas las funciones del validador original en un único espacio de nombres limpio (sin BOM, con encoding UTF-8 estándar). Es el único archivo con lógica real. Los módulos temáticos importan desde aquí.

> No editar directamente. Si necesitas modificar una regla, edita `phyxio_leaf_validator.py` y regenera con `refactor_validator.py`.

---

### `constants.py`
**Constantes globales, listas de secciones requeridas y patrones regex.**

Reexporta las constantes del preamble del validador:

- `REQUIRED_FILES` — los 16 archivos obligatorios de un leaf
- `THEORY_SECTIONS` / `THEORY_SECTIONS_EN` — encabezados exactos requeridos en `teoria.md`
- `MODELOS_SECTIONS`, `ERRORES_SECTIONS`, `HISTORIA_SECTIONS` (ES y EN)
- `EJEMPLOS_SECTIONS_ES` / `EJEMPLOS_SECTIONS_EN` — encabezados exactos de ejemplos
- `ALLOWED_DIFFS` — conjunto de símbolos permitidos que el check de símbolos no penaliza
- `MOJIBAKE_PATTERNS` — patrones regex de detección de codificación corrupta
- `LATEX_OUTSIDE_MATH_COMMANDS` — comandos LaTeX que no deben aparecer fuera de delimitadores
- `FORMULA_REFERENCE_PATTERN`, `MAGNITUDE_REFERENCE_PATTERN` — patrones de `{{f:id}}` y `[[id]]`
- Umbrales de similitud para detección de contenido clónico en aplicaciones y teoría

**Cuándo leer este archivo**: cuando necesitas saber qué encabezados son exactamente obligatorios, qué símbolos están permitidos o cómo se detecta mojibake.

---

### `utils.py`
**76 funciones de utilidad base compartidas por todos los módulos.**

Incluye:

| Función | Descripción |
|---|---|
| `CheckResult` | Dataclass de resultado de validación (`ok`, `message`, `details`) |
| `read_text(path)` | Lee un archivo en UTF-8 tolerando errores de codificación |
| `load_yaml(path)` | Carga YAML con error normalizado si el archivo es inválido |
| `count_words(text)` | Cuenta palabras Unicode (ignora LaTeX y referencias) |
| `normalize_prose_fragment(text)` | Normaliza texto para comparaciones anti-clón |
| `extract_leaf_dir(path)` | Resuelve una ruta como directorio o ZIP temporal |
| `find_leaf_dirs(path)` | Encuentra todos los directorios leaf válidos recursivamente |
| `find_workspace_root()` | Localiza la raíz del workspace Phyxio |
| `find_bare_formula_issues(text)` | Detecta fórmulas textuales sin delimitadores (`x = y·z`) |
| `find_mojibake_lines(text)` | Detecta líneas con codificación corrupta |
| `find_placeholder_lines(text)` | Detecta texto pendiente (`TODO`, `lorem ipsum`, etc.) |
| `find_theory_variety_issues(text)` | Detecta secciones demasiado similares entre sí |
| `gather_magnitude_symbols(mag_path)` | Extrae símbolos definidos en `magnitudes.yaml` |
| `_collect_magnitude_entries(path)` | Extrae lista de entradas desde `magnitudes.yaml` |
| `_collect_formula_entries(path)` | Extrae lista de entradas desde `formulas.yaml` |
| `rough_english_check(text)` | Comprueba heurísticamente si un texto está en inglés |
| `strip_js_comments(text)` | Elimina comentarios de código JS/JSX para análisis de texto |

**Cuándo leer este archivo**: cuando una función auxiliar falla o necesitas entender cómo se normalizan los textos para las comparaciones semánticas.

---

### `yaml_checks.py`
**10 funciones de validación de los 4 archivos YAML del leaf.**

| Función | Qué valida |
|---|---|
| `validate_meta(path)` | Campos obligatorios de `meta.yaml`: `id`, `titulo`, `pregunta_fisica_central`, `representacion_dominante`, `magnitud_dominante`, etc. |
| `validate_meta_against_map(path, leaf_dir)` | Coherencia de `meta.yaml` con `phyxio-map.yaml`: que `id`, `titulo` y ruta coincidan exactamente |
| `validate_magnitudes(path)` | Estructura de `magnitudes.yaml`: campos `id`, `symbol`, `unit`, `physical_role`, interpretación con `es`/`en` |
| `validate_formulas(path)` | Estructura de `formulas.yaml`: `id`, `latex`, `result_semantics`, `rearrangements`, `variables` con dimensiones |
| `validate_interpretacion(path, mag_ids, formula_ids)` | Estructura de `interpretacion.yaml`: los 7 bloques obligatorios por target, `dependencies`, `output_contract` |
| `load_official_map_data(leaf_dir)` | Carga `phyxio-map.yaml` buscando en rutas candidatas |
| `find_map_node_by_leaf_id(map_data, leaf_id)` | Busca un nodo en el mapa por su `id` |
| `derive_meta_hierarchy_from_map(node, ancestors)` | Extrae jerarquía de `phyxio-map.yaml` para comparar con `meta.yaml` |

**Cuándo leer este archivo**: cuando hay fallos en checks de tipo `meta`, `magnitudes`, `formulas`, `interpretacion` o `meta_map`.

---

### `markdown_checks.py`
**16 funciones de validación de todos los archivos Markdown del leaf.**

| Función | Qué valida |
|---|---|
| `validate_markdown_structure(path, sections, min_words, max_words)` | Estructura, conteo de palabras, secciones obligatorias, calidad de prosa (sin mojibake, sin placeholders, sin fórmulas textuales) |
| `validate_history(path, sections, min_words)` | `historia.md` / `.en.md`: secciones, longitud, que no sea cronología pura |
| `validate_ejemplos(path, lang, min_words, formula_ids)` | Encabezados exactos, longitud ≥800 palabras, sustitución numérica, apartados desarrollados, ids de fórmulas visibles |
| `validate_aplicaciones(path, lang, min_words)` | 5 aplicaciones, marcadores `Variable dominante:` / `Límite de validez:`, detección de clones |
| `validate_exact_files(leaf_dir)` | Que el leaf tenga exactamente los 16 archivos requeridos |
| `validate_mojibake_files(leaf_dir)` | Que ningún archivo contenga codificación corrupta |
| `validate_markdown_rendering_files(leaf_dir)` | Que ningún `.md` contenga fórmulas textuales ni LaTeX fuera de delimitadores |
| `validate_english_files(leaf_dir)` | Que los archivos `.en.md` estén realmente en inglés |
| `validate_latex_format(for_path)` | Que los campos `latex` de `formulas.yaml` no incluyan `\(` `\)` como delimitadores |
| `validate_magnitude_tagging(leaf_dir, mag_entries)` | Que el 70%+ de las magnitudes se usen con `[[id]]` en los `.md` |
| `validate_modelos_cuantitativo(path)` | Que `## Dominio de validez cuantitativo` contenga al menos una desigualdad, rango u orden de magnitud |
| `validate_errores_internal_structure(leaf_dir)` | Que cada error en `errores.md` tenga los 5 sub-encabezados obligatorios y mini-ejemplo de contraste |
| `validate_modelos_reinforced(leaf_dir)` | Condición cuantitativa, modelo alternativo, transición explícita y señales observables de fallo |
| `validate_historia_functional(leaf_dir)` | Que `historia.md` no sea una cronología de fechas y contenga análisis del problema físico |
| `validate_leaf_uniqueness(leaf_dir)` | Que el leaf sea distinguible de sus vecinos en el mismo módulo (detecta clones entre leafs) |

**Cuándo leer este archivo**: cuando hay fallos en checks de tipo `teoria`, `modelos`, `errores`, `ejemplos`, `aplicaciones`, `historia`, `exact_files`, `render_math`, `mojibake`, `english` o `magnitude_tagging`.

---

### `graph_checks.py`
**21 funciones de validación de gráficos SVG, DCL y Coord.**

| Función | Qué valida |
|---|---|
| `validate_graph_components(leaf_dir, meta_data)` | Que los tipos de gráfico declarados en `meta.yaml` estén registrados en `index.js` del frontend |
| `validate_graph_standard_contract(leaf_dir, meta_data)` | Que los wrappers usen las fábricas comunes (`createSvgGraph`, `createDclGraph`, `createCoordGraph`) |
| `validate_graph_shared_infrastructure(leaf_dir, meta_data)` | Que los wrappers no sean wrappers ad-hoc sino que usen la infraestructura compartida |
| `validate_graph_reuse(leaf_dir, meta_data)` | Que un profile SVG no se reutilice de otro leaf sin adaptación (`leafId` correcto) |
| `validate_graph_identity(leaf_dir, meta_data)` | Que el SVG profile declare `graph_identity` con `pregunta_principal`, `magnitud_estrella` y `tipo_lectura` |
| `validate_graph_infocards(leaf_dir, meta_data)` | Que el SVG profile declare al menos 1 `infoCard` con `key` y `label` bilingüe |
| `validate_dcl_profile_structure(leaf_dir, meta_data)` | Que el DCL profile declare `scene`, `bodies`, `vectors`, `options` e `interpretation` |
| `validate_graph_not_decorative(leaf_dir, meta_data)` | Que el gráfico responda al cálculo y no sea decorativo (reacciona a `sharedParams`) |
| `validate_graph_no_overlap(leaf_dir, meta_data)` | Que cada tipo de gráfico tenga una `magnitud_estrella` distinta (Coord≠SVG≠DCL) |
| `validate_graph_type_rules(leaf_dir, meta_data)` | Reglas específicas por tipo: ejes en Coord, tipo de animación en SVG, fuerza-ecuación en DCL |
| `validate_coord_semantic_alignment(leaf_dir, meta_data)` | Que el Coord use magnitudes de `magnitudes.yaml` y que `interpretationTarget` sea un id real |
| `validate_graph_calc_dependency(leaf_dir, meta_data)` | Que el gráfico reciba `sharedParams.__calc` y reaccione visualmente |
| `validate_graph_star_uniqueness(leaf_dir, meta_data)` | Unicidad de `magnitud_estrella` entre gráficos del mismo leaf |
| `validate_pregunta_fisica_central(leaf_dir, meta_data)` | Coherencia de `meta.yaml.pregunta_fisica_central` con `teoria.md` |
| `resolve_graph_registry(leaf_dir)` | Localiza y parsea `index.js` del frontend para verificar el registro del leaf |
| `route_graph_namespace(leaf_dir)` | Determina el namespace del leaf en el registro de gráficos |
| `check_coord_bilingual_structure(content)` | Que los textos visibles en gráficos Coord usen el helper `tt()` o capa i18n |
| `check_dcl_warning_i18n(content)` | Que los textos en DCL no sean español puro (deben ser bilingües) |

**Cuándo leer este archivo**: cuando hay fallos en checks de tipo `graphs`, `coord_semantic`, `graph_reuse`, `graph_identity`, `graph_infocards`, `dcl_profile`, `graph_decorative`, `graph_overlap`, `graph_type_rules` o `pregunta_fisica_central`.

---

### `coherence_checks.py`
**6 funciones de validación de coherencia entre archivos del leaf.**

Estas funciones son las más críticas: verifican que todos los archivos del leaf sean un sistema coherente, no piezas independientes.

| Función | Qué valida |
|---|---|
| `validate_cross_file_coherence(mag_path, for_path, interp_path)` | **Coherencia YAML total**: que los `target` de `formulas.yaml` existan en `magnitudes.yaml`, que los targets de `interpretacion.yaml` existan en `magnitudes.yaml`, que `dependencies.magnitudes` y `dependencies.formulas` usen IDs reales, que todas las fórmulas estén declaradas en `dependencies.formulas` |
| `validate_markdown_entity_sync(leaf_dir, mag_ids, formula_ids)` | **Sincronización bidireccional Markdown↔YAML**: que todo `{{f:id}}` en `.md` exista en `formulas.yaml`, que toda fórmula de `formulas.yaml` aparezca en `teoria.md`, que todo `[[id]]` en `.md` exista en `magnitudes.yaml`, que toda magnitud aparezca marcada en algún `.md` |
| `validate_symbol_consistency(mag_symbols, formula_symbols, teoria_text, ejemplos_text)` | Que todas las variables físicas usadas en `teoria.md` y `ejemplos.md` estén definidas en `magnitudes.yaml` |
| `validate_graph_leaf_coherence(leaf_dir, meta_data)` | Que la `pregunta_principal` del gráfico comparta palabras clave con la descripción del leaf |
| `validate_graph_magnitude_coherence(leaf_dir, meta_data, mag_entries)` | Que la `magnitud_estrella` del gráfico exista en `magnitudes.yaml` |
| `validate_graph_pfc_coherence(leaf_dir, meta_data)` | Que el gráfico responda visualmente a la `pregunta_fisica_central` del leaf |

> **Nota**: `validate_cross_file_coherence` es la función que garantiza que si un ID cambia en un YAML, el validador lo detecta en todos los demás. Es el corazón de la coherencia del sistema.

**Cuándo leer este archivo**: cuando hay fallos en checks de tipo `coherencia`, `markdown_entities`, `symbols`, `graph_leaf_coherence`, `graph_mag_coherence` o `graph_pfc_coherence`.

---

### `semantic_checks.py`
**7 funciones de validación semántica y didáctica.**

| Función | Qué valida |
|---|---|
| `validate_concept_coverage(leaf_dir, mag_path, for_path, interp_path)` | Que las magnitudes y fórmulas núcleo del leaf aparezcan en `teoria.md`, `ejemplos.md` e `interpretacion.yaml` |
| `validate_example_semantics(leaf_dir, mag_path, for_path, lang)` | Que `ejemplos.md` use las magnitudes núcleo en `## Resolución simbólica` y las fórmulas núcleo en `## Sustitución numérica`, con interpretación física real |
| `validate_interpretation_semantics(leaf_dir, mag_path, for_path, interp_path)` | Que `interpretacion.yaml` use magnitudes núcleo, fórmulas núcleo, y que sus textos sean causales (no descriptivos) |
| `validate_leaf_didactic_contract(leaf_dir, mag_path, for_path, interp_path)` | Que teoría, ejemplos e interpretación estén conectados y expliquen el mismo núcleo físico |
| `validate_learning_dynamics(leaf_dir, mag_path, for_path)` | Que la progresión esencial→formal→estructural sea real: esencial sin fórmulas duras, formal con matemáticas, estructural con límites |
| `validate_cognitive_load(leaf_dir, mag_path, for_path)` | Que la densidad de palabras crezca: esencial < formal < estructural, sin saturación en esencial |
| `validate_leaf_operational_identity(leaf_dir, meta_data)` | Que la `representacion_dominante` coincida con el primer gráfico declarado, y que la `magnitud_dominante` exista en `magnitudes.yaml` |

**Cuándo leer este archivo**: cuando hay fallos en checks de tipo `coverage`, `example_semantics`, `interpretation_semantics`, `didactic_contract`, `learning_dynamics`, `cognitive_load` o `leaf_identity`.

---

### `report.py`
**6 funciones de puntuación y presentación de resultados.**

| Función | Descripción |
|---|---|
| `score_results(all_results)` | Calcula la puntuación por capa (structure, content, semantic, didactic) y el `overall_score` de 0 a 5 |
| `build_audit_report(leaf_dir, all_results)` | Construye el JSON de auditoría con score, fail_summary y recommended_actions |
| `auto_fix_suggestions(all_results)` | Genera sugerencias automáticas de corrección para cada tipo de fallo |
| `print_full_report(leaf_dir, all_results)` | Imprime el reporte completo con OK/FAIL por check |
| `print_count_report(summaries)` | Imprime resumen numérico de OKs y FAILs (modo `--count`) |
| `print_words_report(leaf_dir)` | Imprime conteo de palabras por archivo (modo `--words`) |

**Cuándo leer este archivo**: cuando necesitas entender cómo se calcula la puntuación o cómo se agrupa un FAIL en una capa concreta.

---

### `main.py`
**2 funciones: el orquestador y el punto de entrada CLI.**

| Función | Descripción |
|---|---|
| `validate_leaf(leaf_dir)` | Orquesta todos los checks en orden (estructura → meta → magnitudes → fórmulas → markdown → ejemplos → aplicaciones → interpretación → coherencia → semántica → didáctica → gráficos). Devuelve `all_results`. |
| `main()` | Parsea argumentos CLI (`--count`, `--words`, `--json`, `--batch`), localiza el leaf o directorio, llama a `validate_leaf` y llama al reporte correspondiente. |

**Cuándo leer este archivo**: cuando necesitas entender el orden exacto en que se ejecutan los checks o cómo se manejan los argumentos de línea de comandos.

---

## Guía para la IA: qué leer según el fallo

| Si el fallo es... | Lee este módulo |
|---|---|
| `meta`, `meta_map` | `yaml_checks.py` |
| `magnitudes`, `formulas`, `interpretacion` | `yaml_checks.py` |
| `coherencia`, `markdown_entities`, `symbols` | `coherence_checks.py` ⭐ |
| `teoria`, `modelos`, `errores`, `historia` | `markdown_checks.py` |
| `ejemplos`, `aplicaciones` | `markdown_checks.py` |
| `exact_files`, `mojibake`, `render_math`, `english` | `markdown_checks.py` |
| `magnitude_tagging`, `latex_format` | `markdown_checks.py` |
| `graphs`, `coord_semantic`, `graph_*`, `dcl_*` | `graph_checks.py` |
| `graph_pfc_coherence`, `graph_leaf_coherence` | `coherence_checks.py` |
| `coverage`, `example_semantics`, `interpretation_semantics` | `semantic_checks.py` |
| `didactic_contract`, `learning_dynamics`, `cognitive_load` | `semantic_checks.py` |
| `leaf_identity`, `pregunta_fisica_central` | `graph_checks.py` + `semantic_checks.py` |
| Cómo se calcula la puntuación | `report.py` |
| Orden de ejecución de checks | `main.py` |
| Qué encabezados son obligatorios | `constants.py` |
| Cómo funciona una función auxiliar `_xxx` | `utils.py` |

---

## Notas de mantenimiento

- **Fuente de verdad**: `tools/phyxio_leaf_validator.py` (monolito original)
- **Para añadir una regla nueva**: editar el monolito original → ejecutar `python tools/refactor_validator.py`
- **El paquete modular NO tiene lógica propia**: cualquier edición directa a `_core.py` o a los módulos temáticos se perderá en la próxima regeneración
- **Los módulos temáticos son solo listas de importaciones**: su único valor es documentar qué funciones pertenecen a qué dominio temático
