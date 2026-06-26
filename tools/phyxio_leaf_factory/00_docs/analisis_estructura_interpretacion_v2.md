# Guía de Migración: interpretacion.yaml → Estructura Unificada v5.1
## Estado antes/después por nodo — Phyxio

**Fecha de análisis original:** 2026-06-13  
**Fecha de actualización:** 2026-06-13 (v5.1)  
**Estado:** Documento de migración — nueva estructura en `docsV2/plantilla_v5_modular/archivos/interpretacion_yaml.md`

> **PRINCIPIO v5.1:** Todos los campos son obligatorios en todos los leafs, controlados por `enabled: true/false`.
> Los campos pedagógicos (`graph_reading_policy`, `comparative_context`, `dimensional_hint`, `free_body_diagram_hint`, `process_type_detection`, `wave_behavior_context`, `field_visualization_hint`, `ray_tracing_hint`) y los campos de target (`physical_intuition`, `limiting_cases`, `sign_convention_reminder`) están **implementados** desde v5.1.
> Ver guía completa: `docsV2/plantilla_v5_modular/archivos/interpretacion_yaml.md`

---

## Leafs Analizados (estado PRE-migración)

| # | Área | Leaf | Ruta |
|---|------|------|------|
| 1 | Cinemática | MRU | `fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru` |
| 2 | Dinámica | Fuerza Centrípeta | `fisica-clasica/mecanica/dinamica/fuerzas/fuerza-centripeta/concepto-fuerza-centripeta` |
| 3 | Ondas (Fundamentos) | Ecuación de Onda | `fisica-clasica/ondas/fundamentos/ecuacion-de-onda` |
| 4 | Termodinámica | Gas Ideal | `fisica-clasica/termodinamica/gases-y-modelos/gas-ideal` |
| 5 | Electromagnetismo | Resistencia y Ley de Ohm | `fisica-clasica/electromagnetismo/corriente-electrica/resistencia-y-ley-de-ohm` |
| 6 | Ondas (Sonido) | Naturaleza del Sonido | `fisica-clasica/ondas/sonido/naturaleza-del-sonido` |

---

## 1. Estado PRE-migración: Campos presentes por nodo

> ✅ Presente | ❌ Ausente | ⚠️ Presente con estructura incorrecta

| Campo | Cine | Dina | Ondas(F) | Termo | Elect | Ondas(S) | Estado en v5.1 |
|-------|:----:|:----:|:--------:|:-----:|:-----:|:--------:|----------------|
| `version` | ⚠️ int | ⚠️ int | ⚠️ string | ⚠️ int | ⚠️ int | ⚠️ string | **MIGRAR** → `"5.0.0"` semver |
| `id` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | OK |
| `leaf_id` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | OK |
| `nombre` (es/en) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | OK |
| `scope` | ✅ obj | ⚠️ string | ✅ obj | ✅ obj | ✅ obj | ✅ obj | Dinámica: **MIGRAR** a objeto |
| `scope.orden` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** en todos — copiar de `phyxio-map.yaml` |
| `output_contract` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | Ondas(S): **AÑADIR** |
| `result_blocks` | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ | ✅ | **COMPLETAR** los 7 bloques |
| `ui` | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ✅ | **AÑADIR/CORREGIR** en todos |
| `mini_graph` | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | **AÑADIR** con `enabled: false` donde no aplique |
| `output_policy` | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | **AÑADIR** en Cine, Dina, Elect |
| `dependencies` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | OK — verificar subcampos |
| `global_context` | ❌ | ❌ | ⚠️ | ⚠️ | ❌ | ✅ | **AÑADIR** con `enabled: false` donde no aplique |
| `graph_binding` | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | **AÑADIR** con `enabled: false` donde no aplique |
| `cross_checks` | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | **AÑADIR** con `enabled: false` donde no aplique |
| `error_patterns` | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | **AÑADIR** con `enabled: false` donde no aplique |
| `graph_reading_policy` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** en todos (obligatorio si `mini_graph.enabled: true`) |
| `comparative_context` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** en todos |
| `dimensional_hint` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** en todos |
| `free_body_diagram_hint` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** (`enabled: true` solo si DCL) |
| `process_type_detection` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** (`enabled: true` solo Termodinámica) |
| `wave_behavior_context` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** (`enabled: true` solo Ondas) |
| `field_visualization_hint` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** (`enabled: true` solo Electromagnetismo) |
| `ray_tracing_hint` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** (`enabled: true` solo Óptica) |
| `targets` (9 bloques) | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | **COMPLETAR** con `physical_intuition`, `limiting_cases`, `sign_convention_reminder` |
| `targets.sign_convention_reminder` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | **AÑADIR** en todos los targets vectoriales |

---

## 2. Pendientes de Migración por Nodo

> Todos los campos son obligatorios en v5.0. Los marcados como AÑADIR deben crearse con `enabled: false` si no aplican al leaf.

### Cinemática (MRU)
- [ ] `version` → cambiar a `"5.0.0"`
- [ ] `scope.orden` → añadir (copiar de `phyxio-map.yaml`)
- [ ] `output_contract` → verificar estructura correcta
- [ ] `result_blocks` → completar `enabled`, `order` en todos los bloques
- [ ] `ui` → añadir bloque completo (`enabled: true`)
- [ ] `mini_graph` → añadir (`enabled: true`, `preferred_type: "Coord"`)
- [ ] `output_policy` → añadir
- [ ] `global_context` → añadir (`enabled: true` — tiene convenio de ejes)
- [ ] `graph_binding` → añadir (`enabled: false`)
- [ ] `cross_checks` → añadir (`enabled: false`)
- [ ] `error_patterns` → añadir (`enabled: false`)
- [ ] `graph_reading_policy` → añadir (`enabled: true` — obligatorio, hay gráfico)
- [ ] `comparative_context` → añadir (`enabled: true` — valores de velocidad cotidianos)
- [ ] `dimensional_hint` → añadir (`enabled: true`)
- [ ] `free_body_diagram_hint` → añadir (`enabled: false`)
- [ ] `process_type_detection` → añadir (`enabled: false`)
- [ ] `wave_behavior_context` → añadir (`enabled: false`)
- [ ] `field_visualization_hint` → añadir (`enabled: false`)
- [ ] `ray_tracing_hint` → añadir (`enabled: false`)
- [ ] `targets` → añadir `magnitude_type`, `semantic_role`, completar `graph_rules`
- [ ] `targets` → añadir `physical_intuition`, `limiting_cases` en cada target
- [ ] `targets` → añadir `sign_convention_reminder` (`enabled: true` en targets vectoriales)

### Dinámica (Fuerza Centrípeta)
- [ ] `version` → cambiar a `"5.0.0"`
- [ ] `scope` → convertir de string `"leaf"` a objeto completo (**CRÍTICO**)
- [ ] `scope.orden` → añadir (copiar de `phyxio-map.yaml`)
- [ ] `result_blocks` → completar `enabled`, `order`, eliminar `type`
- [ ] `ui` → añadir bloque completo
- [ ] `mini_graph` → añadir (`enabled: true`, `preferred_type: "Dcl"`)
- [ ] `output_policy` → añadir
- [ ] `global_context` → añadir (`enabled: true` — convenio de ejes + sistema inercial)
- [ ] `graph_binding` → añadir (`enabled: false`)
- [ ] `cross_checks` → añadir (`enabled: false`)
- [ ] `error_patterns` → añadir
- [ ] `graph_reading_policy` → añadir (`enabled: true` — obligatorio, hay DCL)
- [ ] `comparative_context` → añadir (`enabled: true`)
- [ ] `dimensional_hint` → añadir (`enabled: true`)
- [ ] `free_body_diagram_hint` → añadir (`enabled: true` — **obligatorio**, hay DCL)
- [ ] `process_type_detection` → añadir (`enabled: false`)
- [ ] `wave_behavior_context` → añadir (`enabled: false`)
- [ ] `field_visualization_hint` → añadir (`enabled: false`)
- [ ] `ray_tracing_hint` → añadir (`enabled: false`)
- [ ] `targets` → añadir `magnitude_type`, `semantic_role`
- [ ] `targets` → añadir `physical_intuition`, `limiting_cases` en cada target
- [ ] `targets` → añadir `sign_convention_reminder` (`enabled: true` en targets vectoriales)

### Ondas — Ecuación de Onda
- [ ] `version` → cambiar `"v5"` a `"5.0.0"`
- [ ] `scope.orden` → añadir
- [ ] `global_context.standard_assumptions/warnings` → convertir de objetos bilingues a strings simples
- [ ] Revisar YAML anchors (`&`, `*`) — confirmar compatibilidad con parser
- [ ] `graph_reading_policy` → añadir (`enabled: true` — obligatorio, hay gráfico)
- [ ] `comparative_context` → añadir (`enabled: true`)
- [ ] `dimensional_hint` → añadir (`enabled: true`)
- [ ] `free_body_diagram_hint` → añadir (`enabled: false`)
- [ ] `process_type_detection` → añadir (`enabled: false`)
- [ ] `wave_behavior_context` → añadir (`enabled: true` — **obligatorio**, es Ondas)
- [ ] `field_visualization_hint` → añadir (`enabled: false`)
- [ ] `ray_tracing_hint` → añadir (`enabled: false`)
- [ ] `targets` → añadir `physical_intuition`, `limiting_cases`, `sign_convention_reminder` en cada target

### Termodinámica (Gas Ideal)
- [ ] `version` → cambiar a `"5.0.0"`
- [ ] `scope.orden` → añadir
- [ ] `ui.display_modes` → convertir de array a objeto de booleanos
- [ ] `ui.labels` → convertir de array de tags a objeto `es/en`
- [ ] `ui.inline_limits` → convertir de int a objeto con `max_sections`, `priority`
- [ ] `result_blocks` → completar `order` en todos los bloques
- [ ] `targets` → añadir `graph_rules` a targets que no lo tengan
- [ ] `graph_reading_policy` → añadir (`enabled: true` — obligatorio, hay diagramas P-V)
- [ ] `comparative_context` → añadir (`enabled: true`)
- [ ] `dimensional_hint` → añadir (`enabled: true`)
- [ ] `free_body_diagram_hint` → añadir (`enabled: false`)
- [ ] `process_type_detection` → añadir (`enabled: true` — **obligatorio**, es Termodinámica)
- [ ] `wave_behavior_context` → añadir (`enabled: false`)
- [ ] `field_visualization_hint` → añadir (`enabled: false`)
- [ ] `ray_tracing_hint` → añadir (`enabled: false`)
- [ ] `targets` → añadir `physical_intuition`, `limiting_cases` en cada target
- [ ] `targets` → añadir `sign_convention_reminder` (`enabled: false` en escalares puros)

### Electromagnetismo (Resistencia/Ley de Ohm)
- [ ] `version` → cambiar a `"5.0.0"`
- [ ] `scope.orden` → añadir
- [ ] `result_blocks` → completar `enabled`, `order`
- [ ] `ui` → añadir bloque completo
- [ ] `mini_graph` → añadir (`enabled: false` si no hay gráfico)
- [ ] `global_context` → añadir (`enabled: true` — sistema de referencia para corriente)
- [ ] `graph_binding` → añadir (`enabled: false`)
- [ ] `cross_checks` → añadir (`enabled: false`)
- [ ] `error_patterns` → añadir
- [ ] `graph_reading_policy` → añadir (`enabled: false` si no hay gráfico)
- [ ] `comparative_context` → añadir (`enabled: true`)
- [ ] `dimensional_hint` → añadir (`enabled: true`)
- [ ] `free_body_diagram_hint` → añadir (`enabled: false`)
- [ ] `process_type_detection` → añadir (`enabled: false`)
- [ ] `wave_behavior_context` → añadir (`enabled: false`)
- [ ] `field_visualization_hint` → añadir (`enabled: true` — **obligatorio**, es Electromagnetismo)
- [ ] `ray_tracing_hint` → añadir (`enabled: false`)
- [ ] `targets` → añadir `magnitude_type: "scalar"`, `semantic_role`, `graph_rules`
- [ ] `targets` → añadir `physical_intuition`, `limiting_cases` en cada target
- [ ] `targets` → añadir `sign_convention_reminder` (`enabled: true` en corriente/tensión con convenio)

### Ondas — Naturaleza del Sonido
- [ ] `version` → cambiar `"2.0"` a `"5.0.0"`
- [ ] `scope.orden` → añadir
- [ ] `output_contract` → añadir (**CRÍTICO** — falta completamente)
- [ ] `output_policy` → verificar
- [ ] `graph_reading_policy` → añadir (`enabled: true` si hay gráfico)
- [ ] `comparative_context` → añadir (`enabled: true` — frecuencias audibles, decibelios)
- [ ] `dimensional_hint` → añadir (`enabled: true`)
- [ ] `free_body_diagram_hint` → añadir (`enabled: false`)
- [ ] `process_type_detection` → añadir (`enabled: false`)
- [ ] `wave_behavior_context` → añadir (`enabled: true` — **obligatorio**, es Ondas)
- [ ] `field_visualization_hint` → añadir (`enabled: false`)
- [ ] `ray_tracing_hint` → añadir (`enabled: false`)
- [ ] `targets` → añadir `physical_intuition`, `limiting_cases`, `sign_convention_reminder` en cada target

---

## 3. Tabla de Correcciones por Campo

### `version`
- **Estado actual**: 3 formatos (int, `"v5"`, `"2.0"`)
- **Estado v5.0**: `"5.0.0"` en todos
- **Acción**: Sustituir en todos los 6 leafs

### `scope`
- **Estado actual**: Objeto correcto en 5 leafs, string `"leaf"` en Dinámica
- **Estado v5.1**: Objeto con `area`, `bloque`, `subbloque`, `parent_id`, `ruta_relativa`, `orden`
- **Acción**: Corregir Dinámica; añadir `orden` en todos los leafs

### `scope.orden`
- **Estado actual**: Campo ausente en todos los leafs analizados
- **Estado v5.1**: Integer ≥ 1, copiado exacto de `phyxio-map.yaml`. El valor `0` es inválido.
- **Acción**: Añadir en todos los leafs

### `result_blocks`
- **Estado actual**: Estructura incompleta — faltan `enabled`/`order` en Cine/Elect, `type` espúreo en Dina
- **Estado v5.0**: 7 bloques fijos (`summary`, `physical_reading`, `coherence`, `model_validity`, `graph_reading`, `likely_errors`, `next_step`) con `enabled`, `order`, `title`
- **Acción**: Completar Cine, Dina, Elect, Termo. Eliminar campo `type` de Dina

### `ui`
- **Estado actual**: Ausente en Cine/Dina/Elect. Estructura incorrecta en Termo (`display_modes` array → objeto, `labels` array → es/en, `inline_limits` int → objeto)
- **Estado v5.0**: Presente en todos. `display_modes` objeto booleanos, `labels` objeto es/en, `inline_limits` objeto
- **Acción**: Añadir en Cine/Dina/Elect. Corregir estructura en Termo

### `mini_graph`
- **Estado actual**: Solo en Ondas(F). Ausente en los otros 5
- **Estado v5.0**: Presente en todos. `enabled: false` donde no aplique, `preferred_type: "none"`
- **Acción**: Añadir con `enabled: false` en Cine, Dina, Termo, Elect, Ondas(S)

### `output_policy`
- **Estado actual**: Ausente en Cine, Dina, Elect
- **Estado v5.0**: Presente en todos
- **Acción**: Añadir en Cine, Dina, Elect

### `output_contract`
- **Estado actual**: Ausente en Ondas(S)
- **Estado v5.0**: Presente en todos con estructura `sections[]`, `inline_mode`, `extended_mode`
- **Acción**: Añadir en Ondas(S)

### `global_context`
- **Estado actual**: Ausente en Cine/Dina/Elect. En Ondas(F) usa objetos bilingues en `standard_assumptions`/`warnings` (incorrecto)
- **Estado v5.0**: Presente en todos. `enabled: false` donde no aplique. `standard_assumptions`/`warnings` = array de strings simples
- **Acción**: Añadir con `enabled: false` en Cine/Dina/Elect. Corregir Ondas(F) (objetos → strings)

### `graph_binding`
- **Estado actual**: Solo en Ondas(F) y Termo
- **Estado v5.0**: Presente en todos. `enabled: false` donde no aplique, `type: "none"`, `channels: []`
- **Acción**: Añadir con `enabled: false` en Cine, Dina, Elect, Ondas(S)

### `cross_checks`
- **Estado actual**: Solo en Ondas(F) y Termo
- **Estado v5.0**: Presente en todos. `enabled: false` donde no aplique, `checks: []`
- **Acción**: Añadir con `enabled: false` en Cine, Dina, Elect, Ondas(S)

### `error_patterns`
- **Estado actual**: Solo en Ondas(F) y Termo
- **Estado v5.0**: Presente en todos. `enabled: false` donde no aplique, `patterns: []`
- **Acción**: Añadir con `enabled: false` en Cine, Dina, Elect, Ondas(S)

### `targets` (7 bloques clásicos)
- **Estado actual**: Faltan `magnitude_type` y `semantic_role` en Cine/Dina/Elect. Faltan `graph_rules` en Termo/Elect
- **Estado v5.1**: Todos los targets con `magnitude_type`, `semantic_role`, y los 9 bloques de reglas
- **Acción**: Completar los campos faltantes en todos los leafs

### `targets.physical_intuition` (nuevo v5.1)
- **Estado actual**: Ausente en todos los leafs
- **Estado v5.1**: Obligatorio en todos los targets activos. Mínimo 1 regla con `when: "true"` y `status: "info"`
- **Acción**: Añadir en todos los targets de todos los leafs

### `targets.limiting_cases` (nuevo v5.1)
- **Estado actual**: Ausente en todos los leafs
- **Estado v5.1**: Obligatorio en todos los targets activos. Mínimo 1 regla fallback con `when: "true"`
- **Acción**: Añadir en todos los targets de todos los leafs

### `targets.sign_convention_reminder` (nuevo v5.1)
- **Estado actual**: Ausente en todos los leafs
- **Estado v5.1**: `enabled: true` obligatorio si `magnitude_type: "vector"` o magnitud con convenio de signo explícito
- **Acción**: Añadir en todos los targets; activar en vectores

### Campos pedagógicos de nivel leaf (nuevos v5.1)
- **Estado actual**: Ausentes en todos los leafs
- **Estado v5.1**: Todos en skeleton. Activación según tabla de dominio (ver sección 6.4)
- **Campos**: `graph_reading_policy`, `comparative_context`, `dimensional_hint`, `free_body_diagram_hint`, `process_type_detection`, `wave_behavior_context`, `field_visualization_hint`, `ray_tracing_hint`
- **Acción**: Añadir en todos los leafs con `enabled` según dominio

---

## 4. Resumen de Prioridad de Migración

| # | Corrección | Leafs afectados | Prioridad |
|---|------------|-----------------|----------|
| 1 | `scope` string → objeto | Dinámica | **CRÍTICA** |
| 2 | `version` → `"5.0.0"` | Todos (6) | **ALTA** |
| 3 | `scope.orden` añadir | Todos (6) | **ALTA** |
| 4 | `output_contract` añadir | Ondas(S) | **ALTA** |
| 5 | `result_blocks` completar | Cine, Dina, Elect, Termo | **ALTA** |
| 6 | `ui` añadir/corregir | Cine, Dina, Elect, Termo | **ALTA** |
| 7 | `output_policy` añadir | Cine, Dina, Elect | **ALTA** |
| 8 | `targets` completar 9 bloques | Todos (6) | **ALTA** |
| 9 | `targets.physical_intuition` añadir | Todos (6) | **ALTA** |
| 10 | `targets.limiting_cases` añadir | Todos (6) | **ALTA** |
| 11 | `targets.sign_convention_reminder` añadir | Todos (6) | **ALTA** |
| 12 | Campos pedagógicos leaf añadir | Todos (6) | **MEDIA** |
| 13 | `global_context` corregir/añadir | Ondas(F), Cine, Dina, Elect, Ondas(S) | **MEDIA** |
| 14 | `mini_graph` añadir | Cine, Dina, Termo, Elect, Ondas(S) | **MEDIA** |
| 15 | `graph_binding` añadir | Cine, Dina, Elect, Ondas(S) | **MEDIA** |
| 16 | `targets` metadatos añadir | Cine, Dina, Elect | **MEDIA** |
| 17 | `cross_checks` añadir | Cine, Dina, Elect, Ondas(S) | **BAJA** |
| 18 | `error_patterns` añadir | Cine, Dina, Elect, Ondas(S) | **BAJA** |

---

## 5. Estructura Definitiva v5.1 (referencia rápida)

```yaml
# ESTRUCTURA OBLIGATORIA v5.1 — TODOS LOS CAMPOS SIEMPRE PRESENTES
version: "5.0.0"
id: ""
leaf_id: ""
nombre: {es: "", en: ""}
scope:
  area: ""
  bloque: ""
  subbloque: ""
  parent_id: ""
  ruta_relativa: ""
  orden: 0           # ≥ 1 en archivo real — copiar de phyxio-map.yaml
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode: {max_sections: 2, priority: [summary, likely_errors]}
  extended_mode: {show_all: true}
result_blocks:       # 7 bloques fijos — order únicos {1..7}
  summary: {enabled: true, order: 1, title: {es: "", en: ""}}
  physical_reading: {enabled: true, order: 2, title: {es: "", en: ""}}
  coherence: {enabled: true, order: 3, title: {es: "", en: ""}}
  model_validity: {enabled: false, order: 4, title: {es: "", en: ""}}  # false si no aplica
  graph_reading: {enabled: false, order: 5, title: {es: "", en: ""}}   # false si no hay gráficos
  likely_errors: {enabled: true, order: 6, title: {es: "", en: ""}}
  next_step: {enabled: true, order: 7, title: {es: "", en: ""}}
ui:
  enabled: true
  display_modes: {calculator_inline: true, graph_inline: false, dedicated_tab: true, modal: false}
  labels: {es: "", en: ""}
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits: {max_sections: 3, priority: [summary, likely_errors, next_step]}
mini_graph: {enabled: false, preferred_type: "none"}
output_policy: {show_summary_first: true, max_inline_messages: 4, show_warnings: true, show_likely_errors: true}
dependencies: {formulas: "", magnitudes: "", requires_formulas: true, requires_magnitudes: true, supports_graph_binding: false}
global_context:
  enabled: false     # true si hay supuestos no triviales
  physical_domain: {es: "", en: ""}
  axis_convention: {es: "", en: ""}
  standard_assumptions: []
  standard_warnings: []
graph_binding: {enabled: false, type: "none", channels: []}
cross_checks: {enabled: false, checks: []}
error_patterns: {enabled: false, patterns: []}
# Campos pedagógicos — enabled según tabla de dominio (sección 6.4)
graph_reading_policy: {enabled: false, primary_variable: "", reading_sequence: [], key_points: []}
comparative_context: {enabled: false, reference_values: [], order_of_magnitude_check: false}
dimensional_hint: {enabled: false, formula_dimensions: {es: "", en: ""}, common_unit_mistakes: []}
free_body_diagram_hint: {enabled: false, key_forces: [], equilibrium_condition: {es: "", en: ""}}
process_type_detection: {enabled: false, processes: []}
wave_behavior_context: {enabled: false, phenomena: []}
field_visualization_hint:
  enabled: false
  field_lines: {direction_rule: {es: "", en: ""}, density_meaning: {es: "", en: ""}}
  superposition_note: {es: "", en: ""}
ray_tracing_hint: {enabled: false, construction_rays: [], image_type_detection: []}
targets:
  target_id:
    enabled: true
    magnitude_type: "scalar"   # scalar | vector | tensor
    semantic_role: {es: "", en: ""}
    summary_rules: []          # mínimo 1 regla when:"true" con marcador semántico
    physical_reading_rules: []
    coherence_rules: []
    model_validity_rules: []
    graph_rules: []
    likely_errors: []
    next_step_rules: []
    physical_intuition: []     # mínimo 1 regla when:"true", status:"info"
    limiting_cases: []         # mínimo 1 regla when:"true" como fallback
    sign_convention_reminder:
      enabled: false           # true si magnitude_type: "vector"
      text: {es: "", en: ""}
      common_sign_errors: []
```

**Guía completa y plantilla de referencia:** `docsV2/plantilla_v5_modular/archivos/interpretacion_yaml.md`

---

## 6. Campos Pedagógicos v5.1 (implementados)

> Estos campos ya están integrados en la estructura obligatoria desde v5.1. No son propuestas — son parte del skeleton.
> El documento de referencia con ejemplos completos es `docsV2/plantilla_v5_modular/archivos/interpretacion_yaml.md`.
>
> Premisa: casi todos los leafs tienen uno o más gráficos. Esto justifica que la interpretación visual sea un ciudadano de primera clase.

### 6.1 Campos Globales del Leaf

#### `graph_reading_policy` (implementado v5.1 — nivel leaf)
El campo `graph_rules` actual existe por target (magnitud). Pero no hay una política global de **cómo leer el gráfico como conjunto**. Propuesta:

```yaml
graph_reading_policy:
  enabled: true
  primary_variable: "t"          # Variable del eje X en el gráfico principal
  reading_sequence:              # Orden de lectura pedagógico sugerido
    - "Observa la tendencia general"
    - "Localiza los puntos singulares (máximos, ceros, inflexiones)"
    - "Relaciona la pendiente con la magnitud derivada"
  key_points:                    # Puntos clave del gráfico con interpretación
    - id: "zero_crossing"
      condition: "value == 0"
      text:
        es: "El cruce por cero indica un cambio de sentido"
        en: "Zero crossing indicates a direction change"
    - id: "maximum"
      condition: "derivative == 0 AND second_derivative < 0"
      text:
        es: "El máximo representa el punto de mayor intensidad"
        en: "Maximum represents the peak intensity point"
```

**Valor pedagógico**: Enseña a leer gráficos como herramienta, no solo a calcular. Esencial si casi todos los leafs tienen gráficos.
**Aplica en**: Todos los leafs con gráficos (prácticamente todos).

---

#### `comparative_context` (implementado v5.1 — nivel leaf)
Actualmente no hay forma de relacionar el resultado con **valores de referencia del mundo real**. Propuesta:

```yaml
comparative_context:
  enabled: true
  reference_values:
    - id: "typical_value"
      label:
        es: "Valor típico en la vida cotidiana"
        en: "Typical everyday value"
      value: 9.8
      unit: "m/s²"
      description:
        es: "Aceleración de la gravedad terrestre"
        en: "Earth's gravitational acceleration"
    - id: "extreme_value"
      label:
        es: "Valor extremo conocido"
        en: "Known extreme value"
      value: 274
      unit: "m/s²"
      description:
        es: "Aceleración superficial del Sol"
        en: "Solar surface acceleration"
  order_of_magnitude_check: true   # Avisa si el resultado difiere en >2 órdenes de magnitud
```

**Valor pedagógico**: El estudiante aprende a calibrar sus resultados contra la realidad. Muy útil para detectar errores de órdenes de magnitud.
**Aplica en**: Todos los leafs con magnitudes físicas conocidas (casi todos).

---

#### `dimensional_hint` (implementado v5.1 — nivel leaf)
Complemento ligero a `coherence_rules`. No verifica unidades (ya lo hace el validador) sino que **explica el significado dimensional**:

```yaml
dimensional_hint:
  enabled: true
  formula_dimensions:
    es: "Energía = Masa × (Longitud/Tiempo)² → [kg·m²/s²] = [J]"
    en: "Energy = Mass × (Length/Time)² → [kg·m²/s²] = [J]"
  common_unit_mistakes:
    - mistake: "Confundir J con N"
      correction:
        es: "J = N·m. El Joule incluye distancia, el Newton no."
        en: "J = N·m. Joule includes distance, Newton does not."
```

**Valor pedagógico**: El análisis dimensional es una de las habilidades más importantes en física. Refuerza sin repetir la teoría.
**Aplica en**: Todos los leafs con fórmulas compuestas.

---

### 6.2 Campos dentro de `targets`

#### `physical_intuition` (implementado v5.1 — dentro de target)
Complemento a `physical_reading_rules`. Mientras `physical_reading` describe *qué significa el valor*, `physical_intuition` responde a *¿por qué es así físicamente?*:

```yaml
physical_intuition:
  - id: "vel_intuition_inertia"
    when: "true"
    status: "info"    # siempre "info" en physical_intuition
    text:
      es: "La velocidad no cambia sola: necesita una fuerza neta. Si v es constante, la fuerza neta es cero."
      en: "Velocity doesn't change by itself: it needs a net force. If v is constant, net force is zero."
```

**Valor pedagógico**: Conecta el número con el principio físico subyacente. Diferencia entre memorizar y comprender.
**Aplica en**: Todos los targets de leafs de mecánica, electromagnetismo, termodinámica.

---

#### `limiting_cases` (implementado v5.1 — dentro de target)
Qué pasa en los extremos: cuando una magnitud tiende a 0, a infinito, o a un valor límite:

```yaml
limiting_cases:
  - id: "vel_limit_zero"
    when: "v → 0"
    status: "info"
    text:
      es: "Cuando v → 0 el objeto está en reposo. La energía cinética se hace cero."
      en: "When v → 0 the object is at rest. Kinetic energy goes to zero."
  - id: "vel_limit_c"
    when: "v → c"
    status: "warning"
    text:
      es: "Cuando v → c se requiere mecánica relativista. El modelo clásico falla."
      en: "When v → c relativistic mechanics are required. Classical model fails."
```

**Valor pedagógico**: Los casos límite son la esencia del pensamiento físico. Enseña a pensar en términos de comportamiento asintótico.
**Aplica en**: Todos los targets (siempre hay un caso límite relevante).

---

#### `sign_convention_reminder` (implementado v5.1 — dentro de target)
Específico para magnitudes vectoriales o con convenio de signo:

```yaml
sign_convention_reminder:
  enabled: true
  text:
    es: "Positivo = hacia la derecha / hacia arriba. Negativo = dirección opuesta."
    en: "Positive = rightward / upward. Negative = opposite direction."
  common_sign_errors:
    - "Olvidar que la aceleración puede ser opuesta a la velocidad"
    - "Confundir magnitud negativa con error de cálculo"
```

**Valor pedagógico**: Los errores de signo son los más frecuentes en física. Contextualizarlos en el momento del resultado los reduce.
**Aplica en**: Todos los targets de magnitudes vectoriales o con convenio de signo (velocidad, fuerza, campo eléctrico, corriente).

---

### 6.3 Campos por Dominio (implementados v5.1)

#### MECÁNICA — `free_body_diagram_hint`
```yaml
free_body_diagram_hint:
  enabled: true          # true si el leaf tiene DCL
  key_forces:
    - label: {es: "Peso", en: "Weight"}
      direction: "downward"
      symbol: "mg"
    - label: {es: "Normal", en: "Normal force"}
      direction: "upward"
      symbol: "N"
  equilibrium_condition:
    es: "Para equilibrio estático: suma de fuerzas = 0"
    en: "For static equilibrium: sum of forces = 0"
```
**Valor**: Conecta el gráfico DCL con la interpretación numérica.

---

#### TERMODINÁMICA — `process_type_detection` (implementado v5.1)
```yaml
process_type_detection:
  enabled: true
  processes:
    - id: "isothermal"
      condition: "delta_T == 0"
      label: {es: "Proceso isotérmico", en: "Isothermal process"}
      graph_shape: {es: "Hipérbola en diagrama P-V", en: "Hyperbola in P-V diagram"}
    - id: "adiabatic"
      condition: "Q == 0"
      label: {es: "Proceso adiabático", en: "Adiabatic process"}
      graph_shape: {es: "Curva más pronunciada que la isoterma", en: "Steeper curve than isotherm"}
```
**Valor**: El alumno identifica el proceso automáticamente según los datos introducidos.

---

#### ONDAS — `wave_behavior_context` (implementado v5.1)
```yaml
wave_behavior_context:
  enabled: true
  phenomena:
    - id: "interference"
      condition: "two_sources == true"
      text:
        es: "Con dos fuentes hay interferencia: constructiva si las fases coinciden"
        en: "Two sources produce interference: constructive if phases match"
    - id: "resonance"
      condition: "f == f_natural"
      text:
        es: "La frecuencia coincide con la natural: resonancia. Amplitud máxima."
        en: "Frequency matches natural frequency: resonance. Maximum amplitude."
    - id: "standing_wave"
      condition: "boundary_conditions == 'fixed'"
      text:
        es: "Con extremos fijos se forman ondas estacionarias con nodos definidos"
        en: "Fixed ends produce standing waves with defined nodes"
```
**Valor**: Las ondas tienen comportamientos cualitativos muy ricos que el número solo no transmite.

---

#### ELECTROMAGNETISMO — `field_visualization_hint` (implementado v5.1)
```yaml
field_visualization_hint:
  enabled: true
  field_lines:
    direction_rule:
      es: "Las líneas de campo van de cargas + a cargas −"
      en: "Field lines go from + charges to − charges"
    density_meaning:
      es: "Mayor densidad de líneas = mayor intensidad del campo"
      en: "Higher line density = stronger field"
  superposition_note:
    es: "El campo total es la suma vectorial de todos los campos individuales"
    en: "Total field is the vector sum of all individual fields"
```
**Valor**: Los campos son abstractos. Una guía de visualización en el momento del resultado ancla el concepto.

---

#### ÓPTICA — `ray_tracing_hint` (implementado v5.1)
```yaml
ray_tracing_hint:
  enabled: true
  construction_rays:
    - id: "parallel_ray"
      text:
        es: "Rayo paralelo al eje → pasa por el foco imagen"
        en: "Ray parallel to axis → passes through image focal point"
    - id: "focal_ray"
      text:
        es: "Rayo que pasa por el foco objeto → sale paralelo al eje"
        en: "Ray through object focal point → exits parallel to axis"
  image_type_detection:
    - condition: "image_distance > 0"
      type: {es: "Imagen real", en: "Real image"}
    - condition: "image_distance < 0"
      type: {es: "Imagen virtual", en: "Virtual image"}
```
**Valor**: El trazado de rayos es inseparable del cálculo óptico. Este campo conecta ambos.

---

### 6.4 Tabla de Aplicación por Nodo

> ✅ Obligatorio activado | 🔵 Obligatorio presente (`enabled: false`) | ❌ No aplica
> 
> Todos los campos están presentes en todos los leafs. La columna indica si debe estar `enabled: true` o `enabled: false`.

#### Campos de nivel Leaf

| Campo | Cine | Dina | Ondas(F) | Ondas(S) | Termo | Elect | Óptica | Física Mod. | Activar cuando |
|-------|:----:|:----:|:--------:|:--------:|:-----:|:-----:|:------:|:-----------:|----------------|
| `graph_reading_policy` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Siempre que haya gráfico (casi todos) |
| `comparative_context` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Siempre que existan valores de referencia conocidos |
| `dimensional_hint` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fórmulas con >2 magnitudes o unidades derivadas (J, W, V, Pa) |
| `free_body_diagram_hint` | 🔵 | ✅ | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | Solo leafs con DCL (`preferred_type: "Dcl"`) |
| `process_type_detection` | 🔵 | 🔵 | 🔵 | 🔵 | ✅ | 🔵 | 🔵 | 🔵 | Solo Termodinámica (procesos P-V-T) |
| `wave_behavior_context` | 🔵 | 🔵 | ✅ | ✅ | 🔵 | 🔵 | 🔵 | 🔵 | Ondas (frecuencia, longitud de onda, amplitud) |
| `field_visualization_hint` | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | ✅ | 🔵 | 🔵 | Electromagnetismo (campo E, B, potencial, flujo) |
| `ray_tracing_hint` | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | 🔵 | ✅ | 🔵 | Óptica geométrica (lentes, espejos, imagen) |

#### Campos dentro de `targets`

| Campo | Cine | Dina | Ondas(F) | Ondas(S) | Termo | Elect | Óptica | Física Mod. | Activar cuando |
|-------|:----:|:----:|:--------:|:--------:|:-----:|:-----:|:------:|:-----------:|----------------|
| `physical_intuition` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Todos los targets (siempre hay principio subyacente) |
| `limiting_cases` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Todos los targets (siempre hay caso límite relevante) |
| `sign_convention_reminder` | ✅ | ✅ | ✅ | ✅ | 🔵 | ✅ | ✅ | ✅ | Magnitudes vectoriales o con convenio de signo (v, F, E, B, a, corriente) |

#### Leyenda por dominio

| Nodo | Campos de dominio propios | Nota |
|------|--------------------------|------|
| **Cinemática** | `graph_reading_policy` (x-t, v-t), `sign_convention_reminder` | Eje temporal + vectores de posición/velocidad |
| **Dinámica** | `free_body_diagram_hint`, `sign_convention_reminder` | DCL obligatorio en casi todos los leafs |
| **Ondas (Fundamentos)** | `wave_behavior_context`, `graph_reading_policy` | Resonancia, estacionarias, interferencia |
| **Ondas (Sonido)** | `wave_behavior_context`, `comparative_context` | Decibelios, frecuencias audibles humanas |
| **Termodinámica** | `process_type_detection`, `dimensional_hint` | P-V-T: 4 procesos básicos con forma gráfica |
| **Electromagnetismo** | `field_visualization_hint`, `sign_convention_reminder` | Campos abstractos requieren guía visual |
| **Óptica** | `ray_tracing_hint`, `comparative_context` | 3 rayos principales + imagen real/virtual |
| **Física Moderna** | `comparative_context`, `limiting_cases` | Valores de constantes, límites relativistas/cuánticos |

---

### 6.5 Conclusión

Los campos más urgentes de implementar (aplican a casi todos los leafs):

1. **`graph_reading_policy`**: Si casi todos los leafs tienen gráficos, la interpretación del gráfico debería ser un ciudadano de primera clase, no solo `graph_rules` por magnitud.

2. **`comparative_context`**: El mayor problema de los alumnos es no saber si su resultado es razonable. Este campo lo resuelve directamente.

3. **`limiting_cases`**: Pensar en casos límite es física de verdad. No requiere muchas reglas y tiene enorme valor didáctico.

4. **`physical_intuition`**: La diferencia entre `physical_reading` (qué es el valor) y `physical_intuition` (por qué es así) es la diferencia entre recitar y comprender.

---

*Actualizado 2026-06-13 — Migración a estructura unificada v5.1. Campos pedagógicos implementados. Skeleton actualizado con 9 bloques por target y scope.orden.*
