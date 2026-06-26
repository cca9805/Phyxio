# Guía: interpretacion.yaml

> **Qué es**: Lectura didáctica y semántica de los resultados del cálculo de un leaf.
> **Depende de**: `formulas.yaml` (para los IDs de targets) y `magnitudes.yaml` (para los símbolos usados en reglas).
> **No repite** datos de otros archivos — sincroniza `id`, `scope` y `nombre` con ellos.
>
> **Regla de oro**: Todos los campos son obligatorios en todos los leafs. No se omiten, se deshabilitan.
> - Campo aplica → `enabled: true` + datos reales y completos
> - Campo no aplica → `enabled: false` + subcampos en blanco/defaults
>
> **Prerequisito**: Antes de escribir este archivo, confirma los valores exactos de `id`, `leaf_id`, `nombre`, `scope` y `orden` consultando los otros archivos del leaf (`meta.yaml`, `formulas.yaml`, `magnitudes.yaml`).

---

## Principios

1. **Todos los campos existen siempre** — no se omiten, se deshabilitan con `enabled: false`
2. **Un único esquema** valida todos los leafs sin discriminación
3. **`status` siempre presente** en toda regla, incluyendo `physical_intuition` (`status: "info"` fijo) y `limiting_cases`
4. **IDs de targets** deben coincidir exactamente con `result_semantics.target` en `formulas.yaml`
5. **`summary_rules` usa condiciones declarativas**: para rangos o umbrales compuestos se usa `condition`, no expresiones con `and/or` en `when`.
6. **`likely_errors` describe errores conceptuales reales**: los textos deben incluir marcadores como `Confundir`, `Creer`, `Olvidar`, `Suponer` o, en inglés, `confuse`, `assume`, `forget`, `believe`.

---

## Contrato funcional de reglas

Cada regla debe tener `id`, `status`, `text.es` y `text.en`. El disparador puede declararse de dos formas:

- `when: "true"` o una condición simple de compatibilidad (`x > 0`, `x <= limite`).
- `condition:` estructurado para rangos y comparaciones que deban ser interpretables por frontend, profesor y alumno.

Forma recomendada para rangos:

```yaml
summary_rules:
  - id: rango_vigilancia
    condition:
      variable: magnitud_id
      gte: 1
      lte: 5
    status: warning
    text:
      es: La [[magnitud_id]] está en zona de vigilancia; revisa el modelo y el tiempo de uso.
      en: The [[magnitud_id]] is in a monitoring range; check the model and usage time.
```

No usar en `summary_rules`:

```yaml
when: magnitud_id >= 1 and magnitud_id <= 5
```

Los bloques `coherence_rules`, `model_validity_rules`, `likely_errors` y `next_step_rules` pueden usar `when` simple cuando represente un caso puntual, pero los rangos compuestos deben preferir `condition`.

---

<!-- EXTRACT-STRUCTURE-YAML -->
```yaml
###ESTRUCTURA COMPLETA OBLIGATORIA###
version: ""
id: ""
leaf_id: ""
nombre:
  es: ""
  en: ""
scope:
  area: ""
  bloque: ""
  subbloque: ""
  parent_id: ""
  ruta_relativa: ""
  orden: 0
output_contract:
  sections: []
  inline_mode:
    max_sections: 0
    priority: []
  extended_mode:
    show_all: false
result_blocks:
  summary:
    enabled: false
    order: 0
    title:
      es: ""
      en: ""
  physical_reading:
    enabled: false
    order: 0
    title:
      es: ""
      en: ""
  coherence:
    enabled: false
    order: 0
    title:
      es: ""
      en: ""
  model_validity:
    enabled: false
    order: 0
    title:
      es: ""
      en: ""
  graph_reading:
    enabled: false
    order: 0
    title:
      es: ""
      en: ""
  likely_errors:
    enabled: false
    order: 0
    title:
      es: ""
      en: ""
  next_step:
    enabled: false
    order: 0
    title:
      es: ""
      en: ""
ui:
  enabled: false
  display_modes:
    calculator_inline: false
    graph_inline: false
    dedicated_tab: false
    modal: false
  labels:
    es: ""
    en: ""
  priority_order: []
  inline_limits:
    max_sections: 0
    priority: []
mini_graph:
  enabled: false
  preferred_type: "none"
output_policy:
  show_summary_first: false
  max_inline_messages: 0
  show_warnings: false
  show_likely_errors: false
dependencies:
  formulas: ""
  magnitudes: ""
  requires_formulas: false
  requires_magnitudes: false
  supports_graph_binding: false
global_context:
  enabled: false
  physical_domain:
    es: ""
    en: ""
  axis_convention:
    es: ""
    en: ""
  standard_assumptions: []
  standard_warnings: []
graph_binding:
  enabled: false
  type: "none"
  channels: []
cross_checks:
  enabled: false
  checks: []
error_patterns:
  enabled: false
  patterns: []
graph_reading_policy:
  enabled: false
  primary_variable: ""
  reading_sequence: []
  key_points: []
comparative_context:
  enabled: false
  reference_values: []
  order_of_magnitude_check: false
dimensional_hint:
  enabled: false
  formula_dimensions:
    es: ""
    en: ""
  common_unit_mistakes: []
free_body_diagram_hint:
  enabled: false
  key_forces: []
  equilibrium_condition:
    es: ""
    en: ""
process_type_detection:
  enabled: false
  processes: []
wave_behavior_context:
  enabled: false
  phenomena: []
field_visualization_hint:
  enabled: false
  field_lines:
    direction_rule:
      es: ""
      en: ""
    density_meaning:
      es: ""
      en: ""
  superposition_note:
    es: ""
    en: ""
ray_tracing_hint:
  enabled: false
  construction_rays: []
  image_type_detection: []
targets:
  <target_id>:
    enabled: false
    magnitude_type: "scalar"
    semantic_role:
      es: ""
      en: ""
    summary_rules: []
    physical_reading_rules: []
    coherence_rules: []
    model_validity_rules: []
    graph_rules: []
    likely_errors: []
    next_step_rules: []
    physical_intuition: []
    limiting_cases: []
    sign_convention_reminder:
      enabled: false
      text:
        es: ""
        en: ""
      common_sign_errors: []
```

---

## Valores por defecto cuando `enabled: false`

| Tipo | Default |
|------|---------|
| String | `""` |
| Array | `[]` |
| Integer | `0` |
| Boolean | `false` |
| Selección | `"none"` |

---

## Descripción de campos

### Campos de cabecera

| Campo | Tipo | Regla |
|-------|------|-------|
| `version` | String SemVer | Exactamente `"5.0.0"` |
| `id` | String | Igual a `leaf_id` e igual a `meta.yaml.id` |
| `leaf_id` | String | Igual a `id` |
| `nombre.es/en` | String | Copiar exacto del leaf (tildes y mayúsculas incluidas) |
| `scope.area` | String | `"fisica-clasica"` \| `"fisica-moderna"` \| `"matematicas"` \| `"quimica"` \| `"biologia"` |
| `scope.bloque` | String | `"mecanica"` \| `"termodinamica"` \| `"electromagnetismo"` \| `"ondas"` \| `"optica"` |
| `scope.subbloque` | String | Depende del bloque |
| `scope.parent_id` | String | ID del nodo padre |
| `scope.ruta_relativa` | String | Path desde raíz `data_v2_i18n/` sin barra inicial |
| `scope.orden` | Integer ≥ 1 | Posición dentro del nodo padre. **Nunca 0 en archivo real.** |

---

### `output_contract`

Declara qué secciones genera este leaf y cómo se presentan en la UI.

- `sections`: Array **siempre con los 7 nombres exactos**, en este orden: `summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step`
- `inline_mode.max_sections`: Integer ≥ 1 — secciones visibles en vista compacta
- `inline_mode.priority`: Subset de los 7 nombres — cuáles mostrar primero en compacta
- `extended_mode.show_all`: Boolean — mostrar todas en vista extendida

```yaml
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
```

---

### `result_blocks`

Configura cada sección: si está activa y en qué orden aparece.

- **7 bloques fijos** siempre presentes (`enabled: false` si no aplica):
  - `summary` — resumen ejecutivo del resultado
  - `physical_reading` — qué significa físicamente el valor
  - `coherence` — verificación de rangos y unidades
  - `model_validity` — condiciones de validez del modelo físico
  - `graph_reading` — lectura del gráfico (activar si `mini_graph.enabled: true`)
  - `likely_errors` — errores frecuentes del alumno
  - `next_step` — sugerencias de siguiente paso
- Cada bloque: `enabled` (bool) + `order` (int 1–7, **único y sin huecos**) + `title` (es/en, no vacío si enabled)

```yaml
result_blocks:
  summary:
    enabled: true
    order: 1
    title: {es: "Resumen", en: "Summary"}
  graph_reading:
    enabled: true        # true porque este leaf tiene gráfico
    order: 5
    title: {es: "Lectura gráfica", en: "Graph reading"}
  model_validity:
    enabled: false       # false: modelo exacto sin límites de validez
    order: 4
    title: {es: "Validez del modelo", en: "Model validity"}
```

---

### `ui`

Controla cómo se presenta la interpretación en la interfaz.

- `display_modes.calculator_inline`: mostrar en calculadora sin navegar
- `display_modes.graph_inline`: mostrar junto al gráfico (`true` si hay gráfico)
- `display_modes.dedicated_tab`: disponible como pestaña separada
- `display_modes.modal`: mostrar en ventana modal
- `labels`: etiqueta del botón/pestaña (es/en)
- `priority_order`: los 7 nombres de bloques en orden de prioridad visual
- `inline_limits.max_sections`: máximo de bloques en modo inline
- `inline_limits.priority`: cuáles mostrar primero en inline

```yaml
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels: {es: "Interpretación física", en: "Physical interpretation"}
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_sections: 3
    priority: [summary, likely_errors, next_step]
```

---

### `mini_graph`

Declara si hay gráfico y de qué tipo.

- `enabled: true` → existen archivos en `graficos/` **y** `graph_reading_policy.enabled` debe ser `true`
- `preferred_type`: `"none"` | `"Coord"` (x-t, P-V…) | `"Svg"` (animación) | `"Dcl"` (cuerpo libre)

---

### `output_policy`

Política de presentación del feedback.

- `show_summary_first`: mostrar resumen antes que el resto
- `max_inline_messages`: Integer ≥ 1 — máximo de mensajes en vista compacta
- `show_warnings`: mostrar mensajes con `status: warning`
- `show_likely_errors`: mostrar bloque de errores comunes

---

### `dependencies`

Declara los archivos del leaf de los que depende esta interpretación.

- `formulas`: IDs de fórmulas separados por coma (copiar de `formulas.yaml`)
- `magnitudes`: IDs de magnitudes separados por coma (copiar de `magnitudes.yaml`)
- `requires_formulas`: `true` si el leaf tiene `formulas.yaml`
- `requires_magnitudes`: `true` si el leaf tiene `magnitudes.yaml`
- `supports_graph_binding`: `true` si el gráfico cambia reactivamente con los resultados

---

### `global_context`

Supuestos, convenios y advertencias que aplican a **todos** los targets del leaf.

Activar cuando el leaf tiene supuestos no triviales (gas ideal, rozamiento despreciable, campo uniforme…).

- `physical_domain`: dominio físico del leaf (es/en)
- `axis_convention`: convenio de ejes y signos (es/en)
- `standard_assumptions`: array de strings con supuestos del modelo
- `standard_warnings`: array de strings con advertencias de validez

---

### `graph_binding`

Binding reactivo entre canales del gráfico y los resultados calculados.

Activar cuando `supports_graph_binding: true`. El `type` debe coincidir con `mini_graph.preferred_type`.

- `channels`: array de IDs de canales reactivos del gráfico

---

### `cross_checks`

Validaciones cruzadas entre magnitudes del mismo leaf (ej: 1ª ley de la termodinámica, conservación de energía).

Cada check: `id` + `description` (es/en) + `condition` (expresión evaluable con magnitudes del leaf).

---

### `error_patterns`

Patrones de error de entrada que activan mensajes de ayuda antes de procesar los targets.

Cada patrón: `id` + `trigger` (condición) + `message` (es/en) + `severity`.
- `severity`: `"error"` (invalida cálculo) | `"warning"` (recuperable) | `"info"`

---

## Campos de enriquecimiento pedagógico

Todos son obligatorios en el skeleton. Se activan o desactivan según apliquen.

### `graph_reading_policy`

**Guía de lectura global del gráfico** — cómo leerlo como conjunto, no magnitud por magnitud.
(`graph_rules` dentro de `targets` interpreta cada magnitud; este campo da la secuencia de lectura global.)

**Activar cuando**: `mini_graph.enabled: true` (obligatorio si hay gráfico).

- `primary_variable`: ID de la magnitud en el eje X
- `reading_sequence`: array de strings — pasos ordenados de lectura pedagógica
- `key_points`: array de objetos `{id, condition, text(es/en)}` — puntos singulares del gráfico

```yaml
graph_reading_policy:
  enabled: true
  primary_variable: "t"
  reading_sequence:
    - "Observa la tendencia general de la curva"
    - "La pendiente en cada punto es igual a la magnitud derivada"
    - "Localiza ceros, máximos e inflexiones"
  key_points:
    - id: "zero_crossing"
      condition: "value == 0"
      text:
        es: "Cruce por cero: la magnitud cambia de signo (cambio de sentido o de fase)"
        en: "Zero crossing: magnitude changes sign (direction or phase change)"
    - id: "maximum"
      condition: "derivative == 0"
      text:
        es: "Máximo: la magnitud alcanza su valor pico; la derivada es nula"
        en: "Maximum: magnitude reaches its peak value; derivative is zero"
```

---

### `comparative_context`

**Valores de referencia del mundo real** para que el alumno juzgue si su resultado es razonable.

`coherence_rules` verifica rangos formales; este campo da perspectiva física intuitiva.

**Activar cuando**: existen valores de referencia conocidos para las magnitudes del leaf (casi siempre).

- `reference_values`: array de `{id, label(es/en), value, unit, description(es/en)}`
- `order_of_magnitude_check`: si `true`, avisa cuando el resultado difiere >2 órdenes de magnitud del valor típico

```yaml
comparative_context:
  enabled: true
  reference_values:
    - id: "walking_speed"
      label: {es: "Persona caminando", en: "Person walking"}
      value: 1.4
      unit: "m/s"
      description:
        es: "Velocidad media de marcha de un adulto"
        en: "Average adult walking speed"
    - id: "speed_of_sound"
      label: {es: "Velocidad del sonido en aire", en: "Speed of sound in air"}
      value: 343
      unit: "m/s"
      description:
        es: "Velocidad del sonido a 20°C y presión atmosférica"
        en: "Speed of sound at 20°C and atmospheric pressure"
  order_of_magnitude_check: true
```

---

### `dimensional_hint`

**Análisis dimensional de la fórmula principal** — conecta la expresión algebraica con sus dimensiones.

No verifica unidades (eso lo hace el validador), sino que refuerza el análisis dimensional como hábito.

**Activar cuando**: la fórmula tiene más de dos magnitudes o unidades derivadas (J, W, V, Pa, N…).

- `formula_dimensions`: expresión dimensional (es/en)
- `common_unit_mistakes`: array de `{mistake, correction(es/en)}`

```yaml
dimensional_hint:
  enabled: true
  formula_dimensions:
    es: "F = m·a → [kg]·[m/s²] = [kg·m/s²] = [N]"
    en: "F = m·a → [kg]·[m/s²] = [kg·m/s²] = [N]"
  common_unit_mistakes:
    - mistake: "Dar F en kg en lugar de N"
      correction:
        es: "Newton = kg·m/s². La masa en kg multiplicada por a en m/s² da Newtons, no kilogramos."
        en: "Newton = kg·m/s². Mass in kg times acceleration in m/s² gives Newtons, not kilograms."
```

---

### `free_body_diagram_hint`

**Guía de lectura del DCL** — fuerzas, direcciones y condición de equilibrio.

**Dominio**: Mecánica. **Activar cuando**: `mini_graph.preferred_type: "Dcl"`.

- `key_forces`: array de `{label(es/en), direction, symbol}`
  - `direction`: `"upward"` | `"downward"` | `"rightward"` | `"leftward"` | `"horizontal_opposing"` | `"radial_inward"` | `"radial_outward"`
- `equilibrium_condition`: objeto es/en

```yaml
free_body_diagram_hint:
  enabled: true
  key_forces:
    - label: {es: "Peso", en: "Weight"}
      direction: "downward"
      symbol: "mg"
    - label: {es: "Normal", en: "Normal force"}
      direction: "upward"
      symbol: "N"
  equilibrium_condition:
    es: "ΣF = 0. Peso y Normal se cancelan en la dirección vertical."
    en: "ΣF = 0. Weight and Normal cancel in the vertical direction."
```

---

### `process_type_detection`

**Identificación automática del proceso termodinámico** según los valores introducidos.

**Dominio**: Termodinámica exclusivamente.

- `processes`: array de `{id, condition, label(es/en), graph_shape(es/en)}`

```yaml
process_type_detection:
  enabled: true
  processes:
    - id: "isothermal"
      condition: "delta_T == 0"
      label: {es: "Proceso isotérmico (T = cte)", en: "Isothermal process (T = const)"}
      graph_shape: {es: "Hipérbola P·V = cte en diagrama P-V", en: "Hyperbola P·V = const in P-V diagram"}
    - id: "isobaric"
      condition: "delta_P == 0"
      label: {es: "Proceso isobárico (P = cte)", en: "Isobaric process (P = const)"}
      graph_shape: {es: "Línea horizontal en diagrama P-V", en: "Horizontal line in P-V diagram"}
    - id: "isochoric"
      condition: "delta_V == 0"
      label: {es: "Proceso isocórico (V = cte)", en: "Isochoric process (V = const)"}
      graph_shape: {es: "Línea vertical en diagrama P-V", en: "Vertical line in P-V diagram"}
    - id: "adiabatic"
      condition: "Q == 0"
      label: {es: "Proceso adiabático (Q = 0)", en: "Adiabatic process (Q = 0)"}
      graph_shape: {es: "Curva más pronunciada que la isoterma", en: "Steeper curve than the isotherm"}
```

---

### `wave_behavior_context`

**Fenómenos ondulatorios cualitativos** derivables del resultado numérico.

**Dominio**: Ondas (Fundamentos y Sonido).

- `phenomena`: array de `{id, condition, text(es/en)}`

```yaml
wave_behavior_context:
  enabled: true
  phenomena:
    - id: "resonance"
      condition: "f == f_natural"
      text:
        es: "Resonancia: frecuencia coincide con la natural. Sin amortiguamiento, la amplitud crece sin límite."
        en: "Resonance: frequency matches natural frequency. Without damping, amplitude grows unbounded."
    - id: "standing_wave"
      condition: "boundary == 'fixed-fixed'"
      text:
        es: "Extremos fijos: se forman ondas estacionarias. Los nodos tienen amplitud nula permanente."
        en: "Fixed ends: standing waves form. Nodes have permanently zero amplitude."
```

---

### `field_visualization_hint`

**Guía para visualizar el campo** eléctrico o magnético calculado.

**Dominio**: Electromagnetismo.

- `field_lines.direction_rule`: regla de dirección de las líneas (es/en)
- `field_lines.density_meaning`: significado de la densidad de líneas (es/en)
- `superposition_note`: principio de superposición (es/en)

```yaml
field_visualization_hint:
  enabled: true
  field_lines:
    direction_rule:
      es: "Las líneas de campo eléctrico van de cargas positivas (+) a negativas (−)"
      en: "Electric field lines go from positive (+) to negative (−) charges"
    density_meaning:
      es: "Mayor densidad de líneas = campo más intenso en esa región"
      en: "Higher line density = stronger field in that region"
  superposition_note:
    es: "El campo total es la suma vectorial de los campos de cada fuente por separado"
    en: "Total field is the vector sum of each source's field separately"
```

---

### `ray_tracing_hint`

**Guía de los 3 rayos principales** para lentes y espejos. Conecta el resultado numérico con la construcción geométrica.

**Dominio**: Óptica geométrica.

- `construction_rays`: array de `{id, text(es/en)}` — exactamente los 3 rayos canónicos
- `image_type_detection`: array de `{condition, type(es/en)}`

```yaml
ray_tracing_hint:
  enabled: true
  construction_rays:
    - id: "parallel_ray"
      text:
        es: "Rayo paralelo al eje óptico → refracta/refleja pasando por el foco imagen F'"
        en: "Ray parallel to optical axis → refracts/reflects through image focal point F'"
    - id: "focal_ray"
      text:
        es: "Rayo que pasa por el foco objeto F → sale paralelo al eje óptico"
        en: "Ray through object focal point F → exits parallel to optical axis"
    - id: "center_ray"
      text:
        es: "Rayo por el centro óptico O → continúa en línea recta sin desviarse"
        en: "Ray through optical center O → continues straight without deflection"
  image_type_detection:
    - condition: "v > 0"
      type:
        es: "Imagen real: se forma al otro lado del elemento óptico. Puede proyectarse en pantalla."
        en: "Real image: forms on the opposite side of the optical element. Can be projected on screen."
    - condition: "v < 0"
      type:
        es: "Imagen virtual: se forma en el mismo lado del objeto. No puede proyectarse en pantalla."
        en: "Virtual image: forms on the same side as the object. Cannot be projected on screen."
```

---

## Targets

Cada target representa **una magnitud calculada**. Su ID debe coincidir exactamente con `result_semantics.target` en `formulas.yaml`.

### Estructura universal de una regla

**Todos** los arrays de reglas (`summary_rules`, `physical_reading_rules`, `coherence_rules`, `model_validity_rules`, `graph_rules`, `likely_errors`, `next_step_rules`, `physical_intuition`, `limiting_cases`) usan una estructura común: `id`, `status`, `text.es`, `text.en` y un disparador.

El disparador puede ser `when` para reglas por defecto o condiciones simples, o `condition` para rangos y umbrales estructurados. En `summary_rules`, los rangos compuestos no deben escribirse como `when: "x >= a and x <= b"`; usa `condition`.

```yaml
- id: "<target_id>_<bloque>_<descriptor>"   # único en todo el archivo
  when: "true"          # "true" para regla por defecto, o expresión: "v > 0", "abs(a) < 0.01"
  status: "ok"          # "ok" | "warning" | "error" | "info"
  text:
    es: "Texto con marcadores [[simbolo]]"
    en: "Text with markers [[symbol]]"
```

```yaml
- id: "<target_id>_<bloque>_rango"
  condition:
    variable: "<target_id>"
    gte: 1
    lte: 5
  status: "warning"
  text:
    es: "Texto con marcadores [[simbolo]]"
    en: "Text with markers [[symbol]]"
```

- **`physical_intuition`**: `status` es siempre `"info"` — explica el porqué, no juzga el valor
- **`limiting_cases`**: `status` puede ser `"info"` (límite normal) o `"warning"` (el modelo falla ahí)

### Los 9 bloques por target

| Bloque | Responde a | Marcador semántico obligatorio |
|--------|-----------|-------------------------------|
| `summary_rules` | ¿Qué es este valor? | **Sí**: `indica`, `significa`, `describe`, `representa`, `resume`, `depende`, `aumenta`, `disminuye`, `balance`, `resultante` |
| `physical_reading_rules` | ¿Cómo lo interpreto en el contexto del problema? | No |
| `coherence_rules` | ¿Son coherentes las unidades y el rango? | No |
| `model_validity_rules` | ¿Bajo qué condiciones es válido el modelo? | No |
| `graph_rules` | ¿Cómo aparece esta magnitud en el gráfico? | No |
| `likely_errors` | ¿Qué errores comete el alumno con este valor? | No |
| `next_step_rules` | ¿Qué calcular a continuación? | No |
| `physical_intuition` | ¿Por qué físicamente es así? (`status: "info"` fijo) | No |
| `limiting_cases` | ¿Qué pasa cuando tiende a 0, ∞ o a un límite físico? | No |

### `sign_convention_reminder`

Objeto (no array) que recuerda el convenio de signos de esta magnitud.

**Activar cuando**: `magnitude_type: "vector"` o magnitud escalar con convenio de signo explícito (trabajo, calor, corriente...).

```yaml
sign_convention_reminder:
  enabled: true
  text:
    es: "Positivo = dirección +x (derecha). Negativo = dirección −x (izquierda). Resultado negativo NO es error."
    en: "Positive = +x direction (rightward). Negative = −x direction (leftward). Negative result is NOT an error."
  common_sign_errors:
    - "Interpretar resultado negativo como error de cálculo en lugar de dirección opuesta"
    - "Olvidar el signo al sustituir en otras fórmulas"
    - "Confundir el módulo |v| con la componente vectorial v"
```

---

## Reglas de coherencia inter-archivos

| Este archivo | Debe coincidir con |
|-------------|-------------------|
| `id` / `leaf_id` | `meta.yaml → id` |
| `scope.*` | `meta.yaml → scope.*` |
| `nombre.*` | Leaf en `phyxio-map.yaml` |
| `targets.<id>` (cada clave) | `formulas.yaml → result_semantics.target` y `rearrangements[].target` |
| Símbolos `[[x]]` en reglas | `magnitudes.yaml → id` |
| Si `mini_graph.enabled: true` | Archivo existe en `graficos/` **y** `graph_reading_policy.enabled: true` |
| Si `graph_binding.enabled: true` | Archivo existe en `graficos/` **y** `channels` no vacío |

---

## Reglas de rechazo duro

El validador rechaza el archivo si incumple alguna de estas reglas:

| Regla | Descripción |
|-------|-------------|
| **R1** | Toda regla tiene exactamente: `id` (único), `when` (no vacío), `status` (ok/warning/error/info), `text.es` y `text.en` (no vacíos) |
| **R2** | Al menos 1 regla de `summary_rules` contiene marcador semántico en `text.es` |
| **R3** | Cada target activo tiene los 9 bloques con mínimo 1 regla cada uno |
| **R4** | Todo target de `formulas.yaml` existe como clave en `targets:` |
| **R5** | `mini_graph.enabled: true` ↔ `graph_reading_policy.enabled: true` |
| **R6** | `magnitude_type: "vector"` → `sign_convention_reminder.enabled: true` |
| **R7** | Campo de dominio activo según `scope.bloque` (ver tabla de activación) |
| **R8** | `scope.orden` ≥ 1 (el valor `0` es inválido) |
| **R9** | Los 7 valores de `order` en `result_blocks` son exactamente `{1,2,3,4,5,6,7}` sin repetición |

---

## Tabla de activación por dominio

| Campo | Cine | Dina | Ondas | Termo | Elect | Óptica | Condición |
|-------|:----:|:----:|:-----:|:-----:|:-----:|:------:|-----------|
| `graph_reading_policy` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Si `mini_graph.enabled: true` |
| `comparative_context` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Si existen valores de referencia conocidos |
| `dimensional_hint` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Si la fórmula tiene unidades derivadas |
| `global_context` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Si hay supuestos no triviales |
| `free_body_diagram_hint` | 🔵 | ✅ | 🔵 | 🔵 | 🔵 | 🔵 | Solo si `preferred_type: "Dcl"` |
| `process_type_detection` | 🔵 | 🔵 | 🔵 | ✅ | 🔵 | 🔵 | Solo Termodinámica |
| `wave_behavior_context` | 🔵 | 🔵 | ✅ | 🔵 | 🔵 | 🔵 | Solo Ondas |
| `field_visualization_hint` | 🔵 | 🔵 | 🔵 | 🔵 | ✅ | 🔵 | Solo Electromagnetismo |
| `ray_tracing_hint` | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | ✅ | Solo Óptica |
| `sign_convention_reminder` (target) | ✅ | ✅ | ✅ | 🔵 | ✅ | ✅ | Si `magnitude_type: "vector"` |

✅ = `enabled: true` obligatorio | 🔵 = `enabled: false` (presente pero inactivo)

---

## Plantilla de referencia completa

> Leaf de Dinámica — Segunda Ley de Newton (magnitud `F`). Contiene **todos** los campos con valores reales. Úsala como base: sustituye los valores del leaf que vayas a crear. **Escribe siempre el archivo completo, nunca fragmentos.**

```yaml
version: "5.0.0"
id: "segunda-ley-fuerza-masa"
leaf_id: "segunda-ley-fuerza-masa"
nombre:
  es: "Segunda Ley de Newton"
  en: "Newton's Second Law"
scope:
  area: "fisica-clasica"
  bloque: "mecanica"
  subbloque: "dinamica"
  parent_id: "leyes-newton"
  ruta_relativa: "fisica-clasica/mecanica/dinamica/leyes-newton/segunda-ley-fuerza-masa"
  orden: 2
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
result_blocks:
  summary:
    enabled: true
    order: 1
    title: {es: "Resumen", en: "Summary"}
  physical_reading:
    enabled: true
    order: 2
    title: {es: "Lectura física", en: "Physical reading"}
  coherence:
    enabled: true
    order: 3
    title: {es: "Coherencia", en: "Coherence"}
  model_validity:
    enabled: true
    order: 4
    title: {es: "Validez del modelo", en: "Model validity"}
  graph_reading:
    enabled: true
    order: 5
    title: {es: "Lectura gráfica", en: "Graph reading"}
  likely_errors:
    enabled: true
    order: 6
    title: {es: "Errores comunes", en: "Common errors"}
  next_step:
    enabled: true
    order: 7
    title: {es: "Próximos pasos", en: "Next steps"}
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels: {es: "Interpretación física", en: "Physical interpretation"}
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_sections: 3
    priority: [summary, likely_errors, next_step]
mini_graph:
  enabled: true
  preferred_type: "Dcl"
output_policy:
  show_summary_first: true
  max_inline_messages: 4
  show_warnings: true
  show_likely_errors: true
dependencies:
  formulas: "newton2_force, newton2_mass, newton2_acceleration"
  magnitudes: "F, m, a"
  requires_formulas: true
  requires_magnitudes: true
  supports_graph_binding: true
global_context:
  enabled: true
  physical_domain: {es: "Dinámica newtoniana en una dimensión", en: "Newtonian dynamics in one dimension"}
  axis_convention: {es: "+x hacia la derecha, +y hacia arriba", en: "+x rightward, +y upward"}
  standard_assumptions:
    - "Masa constante"
    - "Sistema de referencia inercial"
  standard_warnings:
    - "El modelo falla a velocidades relativistas (v > 0.1·c)"
    - "No incluye efectos de rozamiento del aire"
graph_binding:
  enabled: true
  type: "Dcl"
  channels: ["force_vector", "acceleration_vector"]
cross_checks:
  enabled: false
  checks: []
error_patterns:
  enabled: true
  patterns:
    - id: "negative_mass"
      trigger: "m <= 0"
      message:
        es: "La masa debe ser un valor positivo. Revisa el valor introducido."
        en: "Mass must be a positive value. Check the input value."
      severity: "error"
graph_reading_policy:
  enabled: true
  primary_variable: "F"
  reading_sequence:
    - "Identifica todas las fuerzas sobre el cuerpo: peso, normal, tensión, fricción..."
    - "Cada flecha representa una fuerza: su longitud es proporcional a su módulo"
    - "La flecha resultante ΣF determina la dirección y sentido de la aceleración"
  key_points:
    - id: "equilibrium"
      condition: "abs(F_net) < 0.01"
      text:
        es: "ΣF ≈ 0: el cuerpo está en equilibrio. La aceleración es nula."
        en: "ΣF ≈ 0: body is in equilibrium. Acceleration is zero."
comparative_context:
  enabled: true
  reference_values:
    - id: "earth_weight_1kg"
      label: {es: "Peso de 1 kg en la Tierra", en: "Weight of 1 kg on Earth"}
      value: 9.8
      unit: "N"
      description:
        es: "Fuerza gravitatoria sobre una masa de 1 kg en superficie terrestre"
        en: "Gravitational force on 1 kg mass at Earth's surface"
    - id: "car_engine_force"
      label: {es: "Fuerza motor de un coche", en: "Car engine force"}
      value: 3000
      unit: "N"
      description:
        es: "Fuerza típica de tracción de un turismo en aceleración"
        en: "Typical traction force of a passenger car accelerating"
  order_of_magnitude_check: true
dimensional_hint:
  enabled: true
  formula_dimensions:
    es: "F = m·a → [kg]·[m/s²] = [kg·m/s²] = [N]. El Newton es la unidad de fuerza del SI."
    en: "F = m·a → [kg]·[m/s²] = [kg·m/s²] = [N]. The Newton is the SI unit of force."
  common_unit_mistakes:
    - mistake: "Dar F en kg (confundir fuerza con masa)"
      correction:
        es: "Fuerza se mide en Newtons, no en kg. 1 N = 1 kg·m/s²."
        en: "Force is measured in Newtons, not kg. 1 N = 1 kg·m/s²."
free_body_diagram_hint:
  enabled: true
  key_forces:
    - label: {es: "Peso", en: "Weight"}
      direction: "downward"
      symbol: "mg"
    - label: {es: "Normal", en: "Normal force"}
      direction: "upward"
      symbol: "N"
    - label: {es: "Fuerza aplicada", en: "Applied force"}
      direction: "rightward"
      symbol: "F"
  equilibrium_condition:
    es: "Si ΣF = 0 el cuerpo no acelera. Si ΣF ≠ 0, acelera en la dirección de la fuerza resultante."
    en: "If ΣF = 0 the body does not accelerate. If ΣF ≠ 0, it accelerates in the direction of the net force."
process_type_detection:
  enabled: false
  processes: []
wave_behavior_context:
  enabled: false
  phenomena: []
field_visualization_hint:
  enabled: false
  field_lines:
    direction_rule: {es: "", en: ""}
    density_meaning: {es: "", en: ""}
  superposition_note: {es: "", en: ""}
ray_tracing_hint:
  enabled: false
  construction_rays: []
  image_type_detection: []
targets:
  F:
    enabled: true
    magnitude_type: "vector"
    semantic_role:
      es: "Fuerza neta sobre el cuerpo en la dirección del movimiento"
      en: "Net force on the body in the direction of motion"
    summary_rules:
      - id: "F_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[F]] indica la fuerza neta resultante: es la causa directa de la aceleración del cuerpo."
          en: "[[F]] indicates the net resultant force: it is the direct cause of the body's acceleration."
      - id: "F_summary_positive"
        when: "F > 0"
        status: "ok"
        text:
          es: "[[F]] positiva: la fuerza neta actúa en la dirección +x. El cuerpo acelera hacia la derecha."
          en: "Positive [[F]]: net force acts in +x direction. Body accelerates rightward."
      - id: "F_summary_negative"
        when: "F < 0"
        status: "ok"
        text:
          es: "[[F]] negativa: la fuerza neta actúa en la dirección −x. El cuerpo acelera hacia la izquierda."
          en: "Negative [[F]]: net force acts in −x direction. Body accelerates leftward."
      - id: "F_summary_zero"
        when: "F == 0"
        status: "info"
        text:
          es: "[[F]] = 0: equilibrio. La aceleración es nula y el cuerpo mantiene su estado de movimiento."
          en: "[[F]] = 0: equilibrium. Acceleration is zero and body maintains its state of motion."
    physical_reading_rules:
      - id: "F_reading_newton2"
        when: "true"
        status: "ok"
        text:
          es: "Por la 2ª Ley: [[F]] = m·a. Una fuerza de [[F]] N sobre una masa de [[m]] kg produce [[a]] m/s²."
          en: "By Newton's 2nd Law: [[F]] = m·a. A force of [[F]] N on [[m]] kg produces [[a]] m/s²."
      - id: "F_reading_large"
        when: "abs(F) > 10000"
        status: "warning"
        text:
          es: "[[F]] muy elevada. Verifica los datos: ¿las unidades son correctas (N, kg, m/s²)?"
          en: "Very large [[F]]. Check data: are units correct (N, kg, m/s²)?"
    coherence_rules:
      - id: "F_coherence_units"
        when: "true"
        status: "ok"
        text:
          es: "Unidades correctas: [[F]] en Newtons [N] = [kg·m/s²]."
          en: "Correct units: [[F]] in Newtons [N] = [kg·m/s²]."
      - id: "F_coherence_consistent"
        when: "abs(F - m * a) < 0.001"
        status: "ok"
        text:
          es: "Verificación: F = m·a es coherente con los valores de [[m]] y [[a]]."
          en: "Check: F = m·a is consistent with the values of [[m]] and [[a]]."
    model_validity_rules:
      - id: "F_validity_classical"
        when: "true"
        status: "ok"
        text:
          es: "Modelo newtoniano válido: masa constante y velocidades no relativistas."
          en: "Valid Newtonian model: constant mass and non-relativistic velocities."
      - id: "F_validity_limit"
        when: "abs(a) > 1e6"
        status: "warning"
        text:
          es: "Aceleración muy alta. Verificar que el contexto no requiere mecánica relativista."
          en: "Very high acceleration. Verify that the context doesn't require relativistic mechanics."
    graph_rules:
      - id: "F_graph_dcl"
        when: "true"
        status: "info"
        text:
          es: "En el DCL, [[F]] aparece como una flecha en la dirección de la fuerza aplicada. Su longitud es proporcional al módulo."
          en: "In the FBD, [[F]] appears as an arrow in the direction of the applied force. Its length is proportional to the magnitude."
      - id: "F_graph_resultant"
        when: "abs(F) > 0"
        status: "info"
        text:
          es: "La flecha resultante ΣF apunta en la misma dirección que [[a]]. Si [[F]] > 0, ambas apuntan a +x."
          en: "The resultant arrow ΣF points in the same direction as [[a]]. If [[F]] > 0, both point to +x."
    likely_errors:
      - id: "F_error_sign"
        when: "F < 0"
        status: "warning"
        text:
          es: "¿Resultado negativo inesperado? El signo indica dirección, no error. Comprueba el convenio: +x hacia la derecha."
          en: "Unexpected negative result? Sign indicates direction, not error. Check convention: +x rightward."
      - id: "F_error_units_kg"
        when: "true"
        status: "info"
        text:
          es: "Error frecuente: dar el resultado en kg (masa) en lugar de N (fuerza). F = m·a da Newtons, no kilogramos."
          en: "Common mistake: giving result in kg (mass) instead of N (force). F = m·a gives Newtons, not kilograms."
    next_step_rules:
      - id: "F_next_acceleration"
        when: "true"
        status: "info"
        text:
          es: "Con [[F]] conocida, calcula la aceleración resultante: a = F/m = [[F]]/[[m]]."
          en: "With known [[F]], calculate resulting acceleration: a = F/m = [[F]]/[[m]]."
      - id: "F_next_kinematics"
        when: "abs(F) > 0"
        status: "info"
        text:
          es: "Con [[a]] obtenida, aplica las ecuaciones cinemáticas para calcular posición y velocidad en cualquier instante."
          en: "With obtained [[a]], apply kinematic equations to calculate position and velocity at any instant."
    physical_intuition:
      - id: "F_intuition_newton2"
        when: "true"
        status: "info"
        text:
          es: "La fuerza no produce velocidad, produce cambio de velocidad. Sin [[F]] neta, el movimiento no cambia (1ª Ley)."
          en: "Force doesn't produce velocity, it produces change in velocity. Without net [[F]], motion doesn't change (1st Law)."
      - id: "F_intuition_proportional"
        when: "true"
        status: "info"
        text:
          es: "Doble fuerza = doble aceleración (si la masa es constante). Mayor masa = menor aceleración para la misma fuerza."
          en: "Double force = double acceleration (constant mass). Greater mass = less acceleration for the same force."
    limiting_cases:
      - id: "F_limit_default"
        when: "true"
        status: "info"
        text:
          es: "[[F]] en rango clásico. El modelo F = m·a es completamente válido."
          en: "[[F]] in classical range. The F = m·a model is fully valid."
      - id: "F_limit_zero"
        when: "abs(F) < 0.001"
        status: "info"
        text:
          es: "[[F]] → 0: las fuerzas se equilibran. El cuerpo está en reposo o en MRU (1ª Ley de Newton)."
          en: "[[F]] → 0: forces balance out. Body is at rest or in uniform motion (Newton's 1st Law)."
      - id: "F_limit_very_large"
        when: "abs(F) > 1e8"
        status: "warning"
        text:
          es: "[[F]] extremadamente grande. Verificar datos de entrada y comprobar si la masa o la aceleración son realistas."
          en: "Extremely large [[F]]. Check input data and verify if mass or acceleration are realistic."
    sign_convention_reminder:
      enabled: true
      text:
        es: "Positivo = dirección +x (derecha/arriba según convenio). Negativo = dirección opuesta. El signo indica dirección vectorial, no error."
        en: "Positive = +x direction (right/upward per convention). Negative = opposite direction. Sign indicates vector direction, not error."
      common_sign_errors:
        - "Interpretar F negativa como error de cálculo en lugar de fuerza en dirección −x"
        - "Olvidar el signo al sustituir F en F = m·a (obtener a con signo incorrecto)"
        - "Confundir el módulo |F| con la componente vectorial F al descomponer fuerzas"
```

---

## Guía de activación por dominio

Snippets de los campos que **deben activarse** según el nodo del leaf. El resto de campos siguen el skeleton con `enabled: false`.

### Mecánica — Cinemática

```yaml
mini_graph:
  enabled: true
  preferred_type: "Coord"    # Gráficos x-t, v-t, a-t

result_blocks:
  graph_reading:
    enabled: true

ui:
  display_modes:
    graph_inline: true

global_context:
  enabled: true
  axis_convention:
    es: "Eje x: horizontal positivo a la derecha. Eje y: vertical positivo hacia arriba."
    en: "X axis: positive rightward. Y axis: positive upward."

graph_reading_policy:
  enabled: true              # Obligatorio porque mini_graph.enabled: true

targets:
  v:
    magnitude_type: "vector"
    sign_convention_reminder:
      enabled: true          # Obligatorio para vectores
```

### Mecánica — Dinámica

```yaml
mini_graph:
  enabled: true
  preferred_type: "Dcl"     # Diagrama de cuerpo libre

free_body_diagram_hint:
  enabled: true              # Obligatorio si preferred_type: "Dcl"

global_context:
  enabled: true
  axis_convention:
    es: "Sistema inercial: +x derecha, +y arriba. Aplicar al diagrama de fuerzas."
    en: "Inertial system: +x rightward, +y upward. Apply to force diagram."

targets:
  F:
    magnitude_type: "vector"
    sign_convention_reminder:
      enabled: true
```

### Termodinámica

```yaml
mini_graph:
  enabled: true
  preferred_type: "Svg"     # Diagramas P-V, T-S

result_blocks:
  model_validity:
    enabled: true            # Crítico: gas ideal tiene límites conocidos
  graph_reading:
    enabled: true

global_context:
  enabled: true
  standard_assumptions:
    - "Gas ideal (presión moderada, temperatura no muy baja)"
    - "Procesos cuasiestáticos para diagramas P-V"
  standard_warnings:
    - "El modelo de gas ideal pierde validez cerca de la condensación"

process_type_detection:
  enabled: true              # Obligatorio en Termodinámica

cross_checks:
  enabled: true
  checks:
    - id: "first_law_check"
      description: {es: "Verificación 1ª Ley", en: "1st Law check"}
      condition: "delta_U == Q - W"

graph_binding:
  enabled: true
  type: "Svg"
  channels: ["pressure", "volume", "temperature"]
```

### Ondas — Fundamentos y Sonido

```yaml
mini_graph:
  enabled: true
  preferred_type: "Svg"     # Ondas senoidales, espectros

result_blocks:
  graph_reading:
    enabled: true            # Siempre: la visualización es esencial en ondas

ui:
  display_modes:
    graph_inline: true

global_context:
  enabled: true
  axis_convention:
    es: "Eje x: dirección de propagación. Eje y: desplazamiento transversal."
    en: "X axis: propagation direction. Y axis: transversal displacement."

wave_behavior_context:
  enabled: true              # Obligatorio en Ondas

graph_binding:
  enabled: true
  type: "Svg"
  channels: ["amplitude", "frequency", "phase"]
```

### Electromagnetismo

```yaml
mini_graph:
  enabled: true
  preferred_type: "Svg"     # Líneas de campo, diagramas vectoriales

global_context:
  enabled: true
  axis_convention:
    es: "Sistema cartesiano 3D con z vertical."
    en: "3D Cartesian system with z vertical."

field_visualization_hint:
  enabled: true              # Obligatorio en Electromagnetismo

cross_checks:
  enabled: true              # Verificación de leyes de Maxwell

targets:
  E:
    magnitude_type: "vector"
    sign_convention_reminder:
      enabled: true
  B:
    magnitude_type: "vector"
    sign_convention_reminder:
      enabled: true
```

### Óptica

```yaml
mini_graph:
  enabled: true
  preferred_type: "Svg"     # Diagramas de rayos

result_blocks:
  graph_reading:
    enabled: true
  model_validity:
    enabled: true            # Óptica paraxial tiene límites

global_context:
  enabled: true
  axis_convention:
    es: "Eje óptico horizontal, positivo en dirección de propagación."
    en: "Optical axis horizontal, positive in propagation direction."
  standard_assumptions:
    - "Óptica paraxial (ángulos pequeños, sen θ ≈ θ)"
    - "Lentes delgadas"
  standard_warnings:
    - "La aproximación paraxial falla para rayos muy inclinados respecto al eje"

ray_tracing_hint:
  enabled: true              # Obligatorio en Óptica
```

### Física Moderna

```yaml
result_blocks:
  model_validity:
    enabled: true            # Siempre: los modelos clásicos fallan en ciertos regímenes

global_context:
  enabled: true
  standard_warnings:
    - "Efectos relativistas importantes cuando v > 0.1·c"
    - "La descripción clásica falla a escala atómica"

targets:
  <magnitud>:
    model_validity_rules:
      - id: "<mag>_validity_classical"
        when: "E < m_rest * c2 * 0.1"
        status: "ok"
        text:
          es: "Régimen no relativista válido. El modelo clásico es suficiente."
          en: "Non-relativistic regime valid. Classical model is sufficient."
      - id: "<mag>_validity_relativistic"
        when: "E >= m_rest * c2 * 0.1"
        status: "warning"
        text:
          es: "Energía relativista significativa. Considerar mecánica relativista."
          en: "Significant relativistic energy. Consider relativistic mechanics."
```

---

## Leafs de referencia existentes

Antes de crear un leaf nuevo, consulta estos como ejemplo real:

| Dominio | Ruta |
|---------|------|
| Mecánica (Cinemática) | `fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru/interpretacion.yaml` |
| Mecánica (Dinámica) | `fisica-clasica/mecanica/dinamica/leyes-newton/segunda-ley-fuerza-masa/interpretacion.yaml` |
| Termodinámica | `fisica-clasica/termodinamica/gases-y-modelos/gas-ideal/interpretacion.yaml` |
| Ondas | `fisica-clasica/ondas/fundamentos/ecuacion-de-onda/interpretacion.yaml` |
| Electromagnetismo | `fisica-clasica/electromagnetismo/corriente-electrica/resistencia-y-ley-de-ohm/interpretacion.yaml` |

---

## Checklist pre-entrega

- [ ] `id` = `leaf_id` = `meta.yaml.id`
- [ ] `scope.*` copiado exacto del leaf
- [ ] `scope.orden` ≥ 1 (no es 0)
- [ ] `output_contract.sections` tiene los 7 nombres exactos
- [ ] `result_blocks` tiene las 7 claves con `order` únicos {1..7}
- [ ] Cada target de `formulas.yaml` existe como clave en `targets:`
- [ ] Cada target activo tiene los 9 bloques de reglas con mínimo 1 regla cada uno
- [ ] Al menos 1 regla de `summary_rules` por target contiene marcador semántico
- [ ] Toda regla tiene `id`, `when`, `status`, `text.es`, `text.en`
- [ ] `physical_intuition` usa `status: "info"` en todas sus reglas
- [ ] Si `mini_graph.enabled: true` → `graph_reading_policy.enabled: true` y archivo en `graficos/`
- [ ] Si `magnitude_type: "vector"` → `sign_convention_reminder.enabled: true`
- [ ] Campo de dominio activo según bloque (ver tabla de activación)
- [ ] Símbolos `[[x]]` en reglas existen en `magnitudes.yaml`

```bash
python tools/validator_modular/main.py <ruta-al-leaf>
```

---

*v5.1 — Phyxio — Todos los campos obligatorios*
