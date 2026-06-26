# PROMPT YAML 01 | meta.yaml

Create a downloadable YAML file named `meta.yaml`.
Generate complete `meta.yaml` for one Phyxio leaf.
Output format:
- Deliver a downloadable file; do not print the YAML content in the chat.
- The downloaded file content must be valid YAML for the requested target file.
- Do not wrap the answer in Markdown fences.
- Do not add explanations before or after the YAML inside the file.
- Do not leave placeholders, TODOs, nulls, empty strings for required text, or example ids.
- Use double quotes for strings containing [[id]], {{f:id}}, LaTeX backslashes, colons, or comparison symbols.

Canonical map context. Use these values exactly where meta.yaml requires canonical fields:
id: fenomenos-criticos
nombre: {'es': 'Fenomenos criticos', 'en': 'Critical Phenomena'}
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: transiciones-de-fase
parent_id: transiciones-de-fase
ruta_relativa: fisica-clasica/termodinamica-estadistica/transiciones-de-fase/fenomenos-criticos
orden: 276300
niveles: {'es': ['ESO', 'BACHILLERATO', 'UNIVERSIDAD', 'EXTRACURRICULAR'], 'en': ['Secondary', 'Upper Secondary', 'University', 'Extracurricular']}
icon: 🧪
graficos: ['Coord']
physical_role: {'es': 'concepto físico', 'en': 'physical concept'}

Current file, if any:
YAML_ACTUAL_INICIO
id: fenomenos-criticos
nombre:
  es: Fenomenos criticos
  en: Critical Phenomena
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: transiciones-de-fase
parent_id: transiciones-de-fase
ruta_relativa: fisica-clasica/termodinamica-estadistica/transiciones-de-fase/fenomenos-criticos
orden: 276300
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  - EXTRACURRICULAR
  en:
  - Secondary
  - Upper Secondary
  - University
  - Extracurricular
icon: 🧪
descripcion: Estudia leyes críticas cerca de la temperatura crítica.
description_en: Studies critical laws near the critical temperature.
tags:
  es:
  - fenómenos críticos
  - temperatura crítica
  - parámetro de orden
  - exponentes críticos
  - transiciones continuas
  en:
  - critical phenomena
  - critical temperature
  - order parameter
  - critical exponents
  - continuous transitions
prerequisitos:
- clasificacion-de-transiciones
graficos:
- Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 35
pregunta_fisica_central:
  es: ¿Cómo cambian el parámetro de orden, la susceptibilidad y la longitud de correlación al acercarse a la temperatura crítica?
  en: How do the order parameter, susceptibility, and correlation length change when approaching the critical temperature?
representacion_dominante: Coord
magnitud_dominante: parametro_de_orden
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: false
    inline_graph: false
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: false
    preferred_type: none
  output_policy:
    show_summary_first: true
    max_inline_messages: 2
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: false

YAML_ACTUAL_FIN

Required root fields:
id, nombre.es, nombre.en, area, bloque, subbloque, parent_id, ruta_relativa, orden, type, niveles.es, niveles.en, icon, descripcion, description_en, tags.es, tags.en, prerequisitos, graficos, physical_role.es, physical_role.en, dificultad, tiempo_estimado_min, pregunta_fisica_central.es, pregunta_fisica_central.en, representacion_dominante, magnitud_dominante, interpretacion.

Rules:
- Canonical map fields must match the map context exactly.
- type must be leaf.
- graficos must match the map exactly.
- representacion_dominante must be `Coord`.
- magnitud_dominante must be an id that will exist in magnitudes.yaml.
- descripcion and description_en must be concise, max 20 words each.
- tags must be bilingual lists with 1 to 6 useful entries per language.
- pregunta_fisica_central must be a real question in both languages.
- interpretacion.enabled should normally be true.
- interpretacion.archivo must be interpretacion.yaml.
- interpretacion.mini_graph.preferred_type must be Coord, Dcl, Svg, or none.
- Do not create central_question, summary, physical_reading, model_validity, graph_reading, likely_errors, or next_step inside meta.yaml.interpretacion.
- Those interpretive content fields belong to interpretacion.yaml, not to meta.yaml.

Required interpretacion block shape:
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    inline_calculator: false
    inline_graph: false
    dedicated_tab: true
    tab_label: {es: "Interpretación", en: "Interpretation"}
  mini_graph:
    enabled: false
    preferred_type: "none"
  output_policy:
    show_summary_first: true
    max_inline_messages: 2
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: false
