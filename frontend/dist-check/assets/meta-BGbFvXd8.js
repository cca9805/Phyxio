const e=`id: red-electrica\r
nombre:\r
  es: Red electrica\r
  en: Household Electrical Network\r
area: fisica-clasica\r
bloque: electromagnetismo\r
subbloque: electricidad-domestica\r
parent_id: electricidad-domestica\r
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/red-electrica\r
orden: 298100\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
  - Extracurricular\r
icon: 🧪\r
descripcion: La red doméstica es una fuente de tensión alterna prácticamente constante 230 V 50 Hz Cada receptor\r
  conectado.\r
description_en: The household network is a nearly constant AC voltage source 230 V 50 Hz Each load connected in.\r
tags:\r
  es:\r
  - red electrica\r
  - electricidad-domestica\r
  - modelo\r
  - cálculo\r
  en:\r
  - household electrical network\r
  - electricidad-domestica\r
  - model\r
  - calculation\r
prerequisitos: []\r
graficos: []\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 3\r
tiempo_estimado_min: 35\r
tipo_conceptual: concepto físico\r
pregunta_fisica_central:\r
  es: ¿Cómo distribuye la red eléctrica doméstica la energía entre los receptores y qué limita la potencia total\r
    que puede suministrar sin riesgo?\r
  en: How does the household electrical network distribute energy among loads, and what limits the total power it\r
    can safely supply?\r
idea_fisica_dominante:\r
  es: 'La red doméstica es una fuente de tensión alterna prácticamente constante (230 V / 50 Hz). Cada receptor\r
    conectado en paralelo extrae una corriente proporcional a su potencia. La suma de esas corrientes es la corriente\r
    total de línea, que no puede superar el calibre del magnetotérmico sin activar la protección. La tensión no\r
    cambia al añadir receptores; lo que cambia es la corriente total.\r
\r
    '\r
  en: 'The household network is a nearly constant AC voltage source (230 V / 50 Hz). Each load connected in parallel\r
    draws a current proportional to its power. The sum of those currents is the total line current, which cannot\r
    exceed the MCB rating without triggering protection. Voltage does not change when loads are added; what changes\r
    is the total current.\r
\r
    '\r
magnitud_dominante: I_tot\r
representacion_dominante: none\r
nucleo_operativo:\r
  magnitudes_nucleo:\r
  - V\r
  - I_tot\r
  - P_tot\r
  - I_max\r
  - margen_uso\r
  formulas_nucleo:\r
  - corriente_total\r
  - potencia_total\r
  - margen_capacidad\r
  error_conceptual_dominante:\r
    es: 'Creer que la tensión de la red disminuye cuando se conectan más receptores. La red doméstica actúa como\r
      fuente de tensión constante: al añadir receptores en paralelo la tensión permanece en 230 V y lo que aumenta\r
      es la corriente total, no la tensión.\r
\r
      '\r
    en: 'Believing that network voltage decreases when more loads are connected. The household network acts as a\r
      constant voltage source: when loads are added in parallel, voltage remains at 230 V and what increases is\r
      the total current, not the voltage.\r
\r
      '\r
  criterio_de_aplicabilidad:\r
    es: Válido para receptores resistivos (factor de potencia = 1) conectados en paralelo a la misma fase de una\r
      instalación doméstica europea estándar (230 V / 50 Hz) con impedancia de línea despreciable y sin desequilibrio\r
      de fases.\r
    en: Valid for resistive loads (power factor = 1) connected in parallel to the same phase of a standard European\r
      household installation (230 V / 50 Hz) with negligible line impedance and no phase imbalance.\r
  criterio_de_fallo_del_modelo:\r
    es: El modelo falla cuando la impedancia del cableado no es despreciable (líneas largas o de sección insuficiente),\r
      cuando los receptores son inductivos o capacitivos (factor de potencia distinto de 1), o cuando la tensión\r
      real difiere significativamente de 230 V por caída en la línea.\r
    en: The model fails when wiring impedance is not negligible (long runs or insufficient cross-section), when\r
      loads are inductive or capacitive (power factor different from 1), or when actual voltage differs significantly\r
      from 230 V due to line drop.\r
calculadora:\r
  enabled: true\r
  source: formulas.yaml\r
  primary_formula: corriente_total\r
  primary_target: I_tot\r
  secondary_targets:\r
  - P_tot\r
  - margen_uso\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretación\r
      en: Interpretation\r
  mini_graph:\r
    enabled: false\r
    preferred_type: none\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
graph_integration:\r
  enabled: false\r
  declared_graphs: []\r
  main_graph:\r
    type: none\r
    profile_id: null\r
    component_expected: null\r
    pregunta_principal:\r
      es: ''\r
      en: ''\r
  bindings:\r
    x_axis:\r
      magnitude: I_tot\r
      channel: coord_x_i_tot\r
      unit: null\r
    y_axis:\r
      magnitude: margen_uso\r
      channel: coord_y_margen_uso\r
      unit: null\r
    threshold:\r
      magnitude: I_max\r
      channel: coord_threshold_i_max\r
      unit: null\r
    derived_overlay:\r
      magnitude: P_tot\r
      channel: coord_p_tot\r
  formula_bindings:\r
    primary_curve: margen_capacidad\r
    threshold_reading: potencia_total\r
  interpretation_bindings:\r
    graph_reading_enabled: true\r
    targets:\r
    - margen_uso\r
    - P_tot\r
  calculator_sync:\r
    follow_calculator: true\r
    experimental_mode: true\r
    inputs_from_calculator:\r
    - I_tot\r
    - I_max\r
  graph_binding_required: true\r
  calculator_sync_required: true\r
  interpretation_sync_required: true\r
markdown_contract:\r
  teoria:\r
    sections_required:\r
    - '## Contexto conceptual'\r
    - '## 🟢 Nivel esencial'\r
    - '## 🔵 Nivel formal'\r
    - '## 🔴 Nivel estructural'\r
    - '## Interpretación física profunda'\r
    - '## Orden de magnitud'\r
    - '## Método de resolución personalizado'\r
    - '## Casos especiales y ejemplo extendido'\r
    - '## Preguntas reales del alumno'\r
    - '## Conexiones transversales y rutas de estudio'\r
    - '## Síntesis final'\r
    sections_required_en:\r
    - '## Conceptual context'\r
    - '## 🟢 Essential level'\r
    - '## 🔵 Formal level'\r
    - '## 🔴 Structural level'\r
    - '## Deep physical interpretation'\r
    - '## Order of magnitude'\r
    - '## Personalized resolution method'\r
    - '## Special cases and extended example'\r
    - '## Real student questions'\r
    - '## Cross-cutting connections and study paths'\r
    - '## Final synthesis'\r
  required_formula_refs:\r
    teoria.md: &id001\r
    - corriente_total\r
    - potencia_total\r
    - margen_capacidad\r
    teoria.en.md: *id001\r
    modelos.md:\r
    - corriente_total\r
    modelos.en.md:\r
    - corriente_total\r
    errores.md: &id002\r
    - corriente_total\r
    - potencia_total\r
    errores.en.md: *id002\r
    ejemplos.md: *id002\r
    ejemplos.en.md: *id002\r
    aplicaciones.md: *id002\r
    aplicaciones.en.md: *id002\r
    historia.md: []\r
    historia.en.md: []\r
  required_magnitude_refs:\r
    teoria.md: &id003\r
    - V\r
    - f\r
    - I_tot\r
    - P_tot\r
    - I_max\r
    - margen_uso\r
    teoria.en.md: *id003\r
    modelos.md: &id004\r
    - V\r
    - I_tot\r
    - P_tot\r
    - I_max\r
    - margen_uso\r
    modelos.en.md: *id004\r
    errores.md: *id004\r
    errores.en.md: *id004\r
    ejemplos.md: *id004\r
    ejemplos.en.md: *id004\r
    aplicaciones.md: *id004\r
    aplicaciones.en.md: *id004\r
    historia.md: []\r
    historia.en.md: []\r
  forbidden_markdown:\r
    manual_latex_blocks: true\r
    inline_formula_refs: true\r
    undeclared_magnitude_tooltips: true\r
    bare_equations: true\r
    latex_commands_outside_math: true\r
validation_contract:\r
  yaml_stage_must_pass:\r
  - meta_map_sync\r
  - meta_interpretacion_block\r
  - meta_operational_identity\r
  - magnitudes_formulas_targets\r
  - interpretation_dependencies\r
  - graph_binding_sync\r
  - markdown_contract_ready\r
  hard_fail_on:\r
  - duplicate_ids\r
  - missing_targets\r
  - missing_magnitudes_in_formulas\r
  - invalid_yaml_syntax\r
  - inline_formula_references\r
  - manual_latex_blocks\r
  - formula_reference_to_unknown_id\r
  - undeclared_magnitude_tooltips\r
  - aliases_for_core_magnitudes\r
  - cosmetic_interpretation\r
  - graph_channels_not_synchronized\r
`;export{e as default};
