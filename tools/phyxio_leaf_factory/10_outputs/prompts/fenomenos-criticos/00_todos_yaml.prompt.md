# PROMPT MAESTRO YAML | ZIP DEL LEAF

Create a downloadable ZIP file named `fenomenos-criticos_yaml.zip` containing exactly: meta.yaml, formulas.yaml, magnitudes.yaml, graficos.yaml.
Do not return loose text files. Do not add explanations outside the ZIP.

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

Generation order inside your reasoning:
1. meta.yaml from map context.
2. formulas.yaml with full physics relations.
3. magnitudes.yaml coherent with formulas.
4. graficos.yaml coherent with meta, formulas, and magnitudes.

meta.yaml summary:
- Follow the meta.yaml prompt contract: canonical map fields, concise descriptions, central question, representacion_dominante matching the first graph type, and complete interpretacion block.
meta.yaml strict contract:
- meta.yaml must be generated first and is the identity source for the other YAML files.
- It must use the canonical map values below exactly for: id, nombre, area, bloque, subbloque, parent_id, ruta_relativa, orden, type, niveles, icon, graficos, physical_role.
- Required root fields exactly: id, nombre, area, bloque, subbloque, parent_id, ruta_relativa, orden, type, niveles, icon, descripcion, description_en, tags, prerequisitos, graficos, physical_role, dificultad, tiempo_estimado_min, pregunta_fisica_central, representacion_dominante, magnitud_dominante, interpretacion.
- Do not use aliases or alternative names: central_question is forbidden; use pregunta_fisica_central.
- dificultad must be an integer from 1 to 5, never text such as media/intermediate.
- tiempo_estimado_min must be a positive integer in minutes.
- pregunta_fisica_central must be a bilingual block with es and en, each a real question ending with ?.
- representacion_dominante must be "Coord".
- magnitud_dominante must be an actual magnitude id that will exist in magnitudes.yaml.
- descripcion and description_en must be concise, each at most 20 words.
- tags must be a bilingual block with es/en lists, 1 to 6 useful tags per language.
- prerequisitos must be a YAML list of prerequisite leaf ids or an empty list.

meta.yaml interpretacion block is configuration only, not explanatory prose:
interpretacion:
  enabled: true
  archivo: "interpretacion.yaml"
  ui:
    inline_calculator: false
    inline_graph: false
    dedicated_tab: true
    tab_label:
      es: "Interpretación"
      en: "Interpretation"
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

Forbidden direct child keys inside meta.yaml.interpretacion:
- summary
- physical_reading
- model_validity
- graph_reading
- likely_errors
- next_step
- any long explanatory content. Those belong to interpretacion.yaml.

Important distinction:
- output_policy.show_summary_first is valid and mandatory.
- The forbidden key is exactly interpretacion.summary as an explanatory block.
- Do not reject valid technical keys just because they contain the word summary.

formulas.yaml + magnitudes.yaml summary:
- Follow version 5.0.0 contracts.
- Cross-reference ids exactly between formulas.used magnitudes, result_semantics.target, magnitudes.used_in, and meta.magnitud_dominante.
- Include strong physics semantics, SI dimensions, validity limits, signs, zero behavior, and common mistakes.
formulas.yaml strict v5 contract:
- Every formula must use v5 field names exactly. Do not use legacy keys nombre, descripcion, used, limits, common_mistakes, or result_semantics.meaning/sign/unit.
- Every formula requires: id, title, equation, latex, rearrangements, category, relation_type, physical_meaning, constraints, validity, dimension_check, calculable, motivo_no_calculable, used_in, interpretation_tags, result_semantics, domain_checks, coherence_checks, graph_implications, pedagogical_triggers.
- title, physical_meaning, constraints, and validity must be bilingual blocks with es/en.
- result_semantics requires target, kind, sign_meaning.es/en, absolute_value_meaning.es/en.
- In equation and rearrangements.equation, write explicit multiplication with `*`: use `j*A`, not `jA`; use `epsilon*sigma*A*T^4`, not implicit products.
- latex may use standard typographic multiplication, but equation must remain parser-friendly ASCII.

magnitudes.yaml strict v5 contract:
- Every magnitude requires: id, symbol, nombre, descripcion, unidad_si, dimension, is_vector, components, category, physical_role, used_in, common_mistake, typical_range, sign_behavior, zero_behavior, value_nature, interpretation_role, graph_binding, pedagogical_notes.
- graph_binding is mandatory for every magnitude. Do not use graph_role.
- graph_binding.channels must be a list. Use xAxis, yAxis, parameter, constant, or none.
- pedagogical_notes is mandatory for every magnitude and must contain es/en useful explanatory text.
- nombre, descripcion, sign_behavior.meaning, zero_behavior.meaning, and pedagogical_notes must be bilingual blocks with es/en.
- If a formula uses a magnitude id, that magnitude must exist.
- If a formula id appears in used_in, that formula must exist.

Declared graph types: ['Coord']
graficos.yaml contract:
- version must be "1.0".
- leaf must be "fenomenos-criticos".
- Include only sections declared by meta.yaml/map.
- Do not include JSX, HTML, React components, or <MathInline />.
- All bilingual fields require es and en.
- agentHints and commonMistakes require at least 3 entries in es and 3 in en.
- recommendedTab must be "graficas".
- Required sections for this leaf: ['coord']

Coord required fields:
- id and graphId: "fenomenos-criticos-Coord"; type and graphType: "Coord".
- title, xAxis, yAxis, xMagnitude, yMagnitude.
- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.
- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.
- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.
- dataRange: xMin, xMax, yMin, yMax, autoScale.
- To pass graph_pfc_coherence, relation.es/en, physicalReading.es/en, and readingFocus.es/en must directly answer meta.yaml.pregunta_fisica_central.
- Reuse at least two significant terms from pregunta_fisica_central in the graph text, such as the dominant magnitude, independent variable, material/parameter, and physical dependency.
- Do not write a generic graph description disconnected from the central question.

Dcl required fields:
- id and graphId: "fenomenos-criticos-Dcl"; type and graphType: "Dcl".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.
- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.
- equilibriumState.conditionDescription.es/en is required.

Svg required fields:
- id and graphId: "fenomenos-criticos-Svg"; type and graphType: "Svg".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.
- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.

Raw current meta.yaml if present:
id: fenomenos-criticos
name: Fenomenos criticos
status: draft
nombre:
  es: Fenomenos criticos
  en: Critical Phenomena
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
graficos:
- Coord
physical_role:
  es: concepto físico
  en: physical concept
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: transiciones-de-fase

ZIP quality gate:
- Every YAML must parse with PyYAML.
- No Markdown fences inside YAML files.
- No placeholders.
- All graph sections match declared graph types.
- The files are mutually coherent enough to pass validator_modular.
