const e=`version: "1.0"
id: interpretacion-variacion-de-entropia
leaf_id: variacion-de-entropia

nombre:
  es: Interpretacion de la variacion de entropia
  en: Interpretation of entropy change

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: entropia-y-segunda-ley
  parent_id: entropia
  ruta_relativa: fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/variacion-de-entropia

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_messages: 3
    max_characters: 300
  default_formula: variacion_entropia_calentamiento

dependencies:
  formulas:
    - variacion_entropia_isotermica
    - variacion_entropia_calentamiento
    - variacion_entropia_gas_ideal
  magnitudes:
    - DeltaS
    - Q_rev
    - T
    - T_f
    - T_i
    - m
    - c_p
    - n
    - c_v
    - R
    - V_f
    - V_i

global_context:
  physical_domain:
    es: "Termodinamica clasica de equilibrio: variacion de entropia entre estados mediante camino reversible equivalente."
    en: "Classical equilibrium thermodynamics: entropy change between states through an equivalent reversible path."
  axis_convention:
    es: "En el diagrama T-S, el eje horizontal representa entropia y el eje vertical temperatura."
    en: "In the T-S diagram, the horizontal axis represents entropy and the vertical axis temperature."
  standard_assumptions:
    - "Temperaturas absolutas en kelvin."
    - "Capacidades calorificas aproximadamente constantes cuando se usa el modelo logaritmico."
    - "Gas ideal cuando se usa la expresion con volumen."
  standard_warnings:
    - "No usar Celsius dentro de cocientes o divisiones de temperatura."
    - "No confundir calor real irreversible con calor reversible equivalente."
    - "Separar por tramos si aparece un cambio de fase."

result_blocks:
  summary:
    enabled: true
    order: 1
    title: { es: Resumen, en: Summary }
  physical_reading:
    enabled: true
    order: 2
    title: { es: Lectura fisica, en: Physical reading }
  coherence:
    enabled: true
    order: 3
    title: { es: Coherencia, en: Coherence }
  model_validity:
    enabled: true
    order: 4
    title: { es: Validez del modelo, en: Model validity }
  graph_reading:
    enabled: true
    order: 5
    title: { es: Lectura grafica, en: Graph reading }
  likely_errors:
    enabled: true
    order: 6
    title: { es: Errores probables, en: Likely errors }
  next_step:
    enabled: true
    order: 7
    title: { es: Siguiente paso, en: Next step }

targets:
  DeltaS: &generic_target
    magnitude_type: scalar_signed
    semantic_role:
      es: "Magnitud que mide el cambio de dispersion energetica del sistema entre estado inicial y final."
      en: "Magnitude measuring the change in energy dispersal between initial and final states."
    summary_rules:
      - id: summary_positive
        when: "DeltaS > 0"
        status: ok
        text:
          es: "[[DeltaS]] positiva indica que el sistema gana entropia: absorbe calor, se expande o aumenta sus microestados accesibles."
          en: "Positive [[DeltaS]] means the system gains entropy: it absorbs heat, expands, or increases accessible microstates."
      - id: summary_negative
        when: "DeltaS < 0"
        status: ok
        text:
          es: "[[DeltaS]] negativa indica que el sistema pierde entropia; solo es posible si el entorno compensa el balance total."
          en: "Negative [[DeltaS]] means the system loses entropy; it is possible only if the surroundings compensate the total balance."
      - id: summary_default
        when: "true"
        status: ok
        text:
          es: "El resultado resume el cambio entrópico entre estados y debe interpretarse junto al entorno para evaluar la segunda ley."
          en: "The result summarises entropy change between states and must be read with the surroundings to assess the second law."
    physical_reading_rules:
      - id: physical_reading_causal_microstates
        when: "true"
        status: ok
        text:
          es: "La lectura fisica es causal: [[DeltaS]] aumenta porque el calor absorbido, la expansion o el aumento de temperatura abren mas microestados accesibles; disminuye cuando el sistema cede energia o se comprime."
          en: "The physical reading is causal: [[DeltaS]] increases because absorbed heat, expansion, or rising temperature open more accessible microstates; it decreases when the system releases energy or is compressed."
    coherence_rules:
      - id: coherence_sign
        when: "T_f > T_i and DeltaS < 0"
        status: warning
        text:
          es: "Si hay calentamiento y [[DeltaS]] sale negativa, revisar el orden de [[T_f]] y [[T_i]]."
          en: "If heating gives negative [[DeltaS]], check the order of [[T_f]] and [[T_i]]."
      - id: coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo debe concordar con absorcion/cesion de calor y con expansion/compresion."
          en: "The sign must agree with heat absorption/release and expansion/compression."
    model_validity_rules:
      - id: validity_temperature
        when: "T_i <= 0 or T_f <= 0"
        status: error
        text:
          es: "Las temperaturas deben estar en kelvin y ser positivas."
          en: "Temperatures must be in kelvin and positive."
      - id: validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es valido si no hay cambio de fase no tratado y si las capacidades calorificas usadas son compatibles con el rango."
          en: "The model is valid if no untreated phase change appears and the heat capacities match the range."
    graph_rules:
      - id: graph_ts
        when: "true"
        status: ok
        text:
          es: "En el diagrama T-S, [[DeltaS]] se lee como desplazamiento horizontal; el area bajo la curva representa calor reversible."
          en: "In the T-S diagram, [[DeltaS]] is read as horizontal displacement; the area under the curve represents reversible heat."
    likely_errors:
      - id: likely_errors_celsius_log_path
        when: "true"
        status: warning
        text:
          es: "Error conceptual probable: confundir Celsius con kelvin en [[T_i]] o [[T_f]], creer que el cociente puede invertirse, usar logaritmo decimal o emplear calor real irreversible en lugar de [[Q_rev]]."
          en: "Likely conceptual error: confuse Celsius with kelvin for [[T_i]] or [[T_f]], believe the ratio can be reversed, use decimal logarithm, or use actual irreversible heat instead of [[Q_rev]]."
    next_step_rules:
      - id: next_universe
        when: "true"
        status: ok
        text:
          es: "Siguiente paso: calcular la contribucion del entorno y verificar que [[DeltaS]] del universo no sea negativa."
          en: "Next step: calculate the surroundings contribution and verify that universe [[DeltaS]] is not negative."

  Q_rev:
    <<: *generic_target
    semantic_role:
      es: "Calor reversible equivalente que conecta los mismos estados."
      en: "Equivalent reversible heat connecting the same states."
  T:
    <<: *generic_target
    semantic_role:
      es: "Temperatura absoluta del proceso isotermico."
      en: "Absolute temperature of the isothermal process."
  T_f:
    <<: *generic_target
    semantic_role:
      es: "Temperatura final absoluta del sistema."
      en: "Final absolute temperature of the system."
  T_i:
    <<: *generic_target
    semantic_role:
      es: "Temperatura inicial absoluta del sistema."
      en: "Initial absolute temperature of the system."
  V_f:
    <<: *generic_target
    semantic_role:
      es: "Volumen final del gas ideal."
      en: "Final volume of the ideal gas."
  V_i:
    <<: *generic_target
    semantic_role:
      es: "Volumen inicial del gas ideal."
      en: "Initial volume of the ideal gas."

cross_checks:
  - check: sign_consistency
    description:
      es: "El signo de [[DeltaS]] debe concordar con el proceso fisico."
      en: "The sign of [[DeltaS]] must match the physical process."
  - check: temperature_units
    description:
      es: "Todas las temperaturas en kelvin."
      en: "All temperatures in kelvin."

graph_binding:
  enabled: true
  type: Coord
  axes:
    x: DeltaS
    y: T
  interpretation_link: "El desplazamiento horizontal representa la variacion de entropia."

mini_graph:
  enabled: true
  preferred_type: Coord
  axes:
    x:
      magnitude: DeltaS
      label: { es: "DeltaS (J/K)", en: "DeltaS (J/K)" }
    y:
      magnitude: T
      label: { es: "T (K)", en: "T (K)" }

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
