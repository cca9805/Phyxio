const e=`version: v5
id: ecuacion-de-onda-interpretacion
leaf_id: ecuacion-de-onda
nombre:
  es: Interpretacion de la ecuacion de onda
  en: Interpretation of the wave equation
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fundamentos
  parent_id: fundamentos
  ruta_relativa: fisica-clasica/ondas/fundamentos/ecuacion-de-onda
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
    max_sections: 2
    max_messages: 4
dependencies:
  formulas: [ecuacion_onda_1d, solucion_armonica, velocidad_fase]
  magnitudes: [y, x, t, v, A, k, omega]
global_context:
  physical_domain:
    es: Ondas lineales descritas por una relacion entre cambio temporal y curvatura espacial.
    en: Linear waves described by a relation between temporal change and spatial curvature.
  axis_convention:
    es: x mide posicion, t mide instante, y mide perturbacion local.
    en: x measures position, t measures instant, and y measures local disturbance.
  standard_assumptions:
    - es: Medio lineal, uniforme y con perturbaciones pequenas.
      en: Linear uniform medium with small disturbances.
    - es: Velocidad de propagacion estable dentro del dominio observado.
      en: Stable propagation speed within the observed domain.
  standard_warnings:
    - es: No usar la ecuacion como receta algebraica sin interpretar curvatura.
      en: Do not use the equation as an algebraic recipe without interpreting curvature.
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
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
common_rules:
  physical: &physical_rules
    - id: common_physical
      when: "true"
      status: ok
      text:
        es: "La lectura fisica depende de relacionar la forma espacial de la perturbacion con su evolucion temporal."
        en: "The physical reading depends on relating the spatial shape of the disturbance to its temporal evolution."
  coherence: &coherence_rules
    - id: common_coherence
      when: "true"
      status: ok
      text:
        es: "El resultado es coherente si conserva unidades, dominio positivo cuando corresponde y sentido fisico de propagacion."
        en: "The result is coherent if it preserves units, positive domain when required, and physical propagation meaning."
  validity: &validity_rules
    - id: common_validity
      when: "true"
      status: ok
      text:
        es: "El modelo es valido para perturbaciones pequenas y deja de valer con dispersion dominante, atenuacion intensa o no linealidad."
        en: "The model is valid for small disturbances and breaks down with dominant dispersion, intense attenuation, or nonlinearity."
  graph: &graph_rules
    - id: common_graph
      when: "true"
      status: ok
      text:
        es: "En el grafico, la curvatura de y frente a x indica donde la ecuacion exige mayor cambio temporal."
        en: "In the graph, curvature of y versus x indicates where the equation requires stronger temporal change."
  errors: &error_rules
    - id: common_error
      when: "true"
      status: warning
      text:
        es: "Error probable: confundir la ecuacion de onda con una formula de sustitucion y olvidar la curvatura espacial."
        en: "Likely mistake: confuse the wave equation with a substitution formula and forget spatial curvature."
  next: &next_rules
    - id: common_next
      when: "true"
      status: ok
      text:
        es: "Siguiente paso: identificar si el problema pide perturbacion, velocidad de fase o lectura de parametros armonicos."
        en: "Next step: identify whether the problem asks for disturbance, phase speed, or harmonic-parameter reading."
targets:
  y:
    magnitude_type: signed_disturbance
    semantic_role: { es: perturbacion que satisface la ley, en: disturbance satisfying the law }
    summary_rules:
      - id: y_summary
        when: "true"
        status: ok
        text: { es: "[[y]] describe la perturbacion resultante y depende de la posicion, del tiempo y de la forma de solucion elegida.", en: "[[y]] describes the resulting disturbance and depends on position, time, and the chosen solution shape." }
    physical_reading_rules: *physical_rules
    coherence_rules: *coherence_rules
    model_validity_rules: *validity_rules
    graph_rules: *graph_rules
    likely_errors: *error_rules
    next_step_rules: *next_rules
  v:
    magnitude_type: positive_speed
    semantic_role: { es: rapidez de propagacion, en: propagation speed }
    summary_rules:
      - id: v_summary
        when: "true"
        status: ok
        text: { es: "[[v]] indica la rapidez de avance de la fase y resume el balance entre cambio temporal y curvatura espacial.", en: "[[v]] indicates phase advance speed and summarizes the balance between temporal change and spatial curvature." }
    physical_reading_rules: *physical_rules
    coherence_rules: *coherence_rules
    model_validity_rules: *validity_rules
    graph_rules: *graph_rules
    likely_errors: *error_rules
    next_step_rules: *next_rules
  A:
    magnitude_type: nonnegative_length
    semantic_role: { es: escala de la solucion, en: solution scale }
    summary_rules:
      - id: A_summary
        when: "true"
        status: ok
        text: { es: "[[A]] indica el tamaño maximo de la solucion armonica y domina la altura visible de la perturbacion.", en: "[[A]] indicates the maximum size of the harmonic solution and dominates visible disturbance height." }
    physical_reading_rules: *physical_rules
    coherence_rules: *coherence_rules
    model_validity_rules: *validity_rules
    graph_rules: *graph_rules
    likely_errors: *error_rules
    next_step_rules: *next_rules
  k:
    magnitude_type: positive_inverse_length
    semantic_role: { es: repeticion espacial de fase, en: spatial phase repetition }
    summary_rules:
      - id: k_summary
        when: "true"
        status: ok
        text: { es: "[[k]] describe cuan comprimida esta la fase en el espacio y depende de la escala espacial de la onda.", en: "[[k]] describes how compressed phase is in space and depends on the wave spatial scale." }
    physical_reading_rules: *physical_rules
    coherence_rules: *coherence_rules
    model_validity_rules: *validity_rules
    graph_rules: *graph_rules
    likely_errors: *error_rules
    next_step_rules: *next_rules
  omega:
    magnitude_type: positive_rate
    semantic_role: { es: ritmo temporal de fase, en: temporal phase rate }
    summary_rules:
      - id: omega_summary
        when: "true"
        status: ok
        text: { es: "[[omega]] indica el ritmo temporal de fase y aumenta cuando la oscilacion cambia mas deprisa.", en: "[[omega]] indicates temporal phase rate and increases when oscillation changes faster." }
    physical_reading_rules: *physical_rules
    coherence_rules: *coherence_rules
    model_validity_rules: *validity_rules
    graph_rules: *graph_rules
    likely_errors: *error_rules
    next_step_rules: *next_rules
cross_checks:
  - id: curvature_time_balance
    text: { es: Comparar curvatura espacial con cambio temporal., en: Compare spatial curvature with temporal change. }
error_patterns:
  - id: substitution_only
    text: { es: Usar la ecuacion como sustitucion sin interpretar derivadas., en: Using the equation as substitution without interpreting derivatives. }
graph_binding:
  preferred: Coord
  targets: [y, v, A, k, omega]
mini_graph:
  enabled: true
  preferred_type: Coord
`;export{e as default};
