const e=`version: v5
id: ondas-transversales-y-longitudinales-interpretacion
leaf_id: ondas-transversales-y-longitudinales
nombre:
  es: Interpretacion de ondas transversales y longitudinales
  en: Interpretation of transverse and longitudinal waves
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fundamentos
  parent_id: fundamentos
  ruta_relativa: fisica-clasica/ondas/fundamentos/ondas-transversales-y-longitudinales
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels: { es: Interpretacion fisica, en: Physical interpretation }
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_messages: 4
    prefer: [summary, likely_errors]
dependencies:
  formulas: [coeficiente_transversal, coeficiente_longitudinal]
  magnitudes: [A, u_perp, u_parallel, C_T, C_L]
global_context:
  physical_domain:
    es: Clasificacion de ondas segun la orientacion de la perturbacion respecto al avance.
    en: Classification of waves by disturbance orientation relative to advance.
  axis_convention:
    es: La direccion de propagacion se toma como referencia; perpendicular y paralelo se definen respecto a ella.
    en: Propagation direction is the reference; perpendicular and parallel are defined relative to it.
  standard_assumptions:
    - es: "La amplitud total es positiva y sirve como escala de comparacion."
      en: "Total amplitude is positive and serves as comparison scale."
  standard_warnings:
    - es: "Transversal no significa vertical absoluta; longitudinal no significa ausencia de transporte."
      en: "Transverse does not mean absolute vertical; longitudinal does not mean absence of transport."
result_blocks:
  summary: { enabled: true, order: 1, title: { es: Resumen, en: Summary } }
  physical_reading: { enabled: true, order: 2, title: { es: Lectura fisica, en: Physical reading } }
  coherence: { enabled: true, order: 3, title: { es: Coherencia, en: Coherence } }
  model_validity: { enabled: true, order: 4, title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { enabled: true, order: 5, title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { enabled: true, order: 6, title: { es: Errores probables, en: Likely errors } }
  next_step: { enabled: true, order: 7, title: { es: Siguiente paso, en: Next step } }
targets:
  C_T:
    magnitude_type: ratio
    semantic_role: { es: Predominio transversal de la perturbacion., en: Transverse dominance of the disturbance. }
    summary_rules:
      - id: ct_summary
        when: "true"
        status: ok
        text: { es: "[[C_T]] indica cuanto domina la componente perpendicular y describe si la onda se lee como transversal.", en: "[[C_T]] indicates how much the perpendicular component dominates and describes whether the wave reads as transverse." }
    physical_reading_rules:
      - id: ct_reading
        when: "true"
        status: ok
        text: { es: "Un [[C_T]] alto significa que la perturbacion se aleja de la direccion de avance.", en: "A high [[C_T]] means the disturbance departs from the direction of advance." }
    coherence_rules:
      - id: ct_range
        when: "C_T >= 0 && C_T <= 1"
        status: ok
        text: { es: "El indice transversal esta dentro del rango normalizado.", en: "The transverse index is within normalized range." }
      - id: ct_bad
        when: "C_T < 0 || C_T > 1"
        status: error
        text: { es: "Un indice transversal fuera del rango normalizado apunta a datos incompatibles.", en: "A transverse index outside normalized range points to incompatible data." }
    model_validity_rules:
      - id: ct_validity
        when: "true"
        status: ok
        text: { es: "La lectura vale si la direccion de propagacion esta definida antes de medir perpendicularidad.", en: "The reading is valid if propagation direction is defined before measuring perpendicularity." }
    graph_rules:
      - id: ct_graph
        when: "true"
        status: ok
        text: { es: "En Coord, [[C_T]] se asocia con oscilacion visible perpendicular al avance.", en: "In Coord, [[C_T]] is associated with visible oscillation perpendicular to advance." }
    likely_errors:
      - id: ct_error
        when: "true"
        status: warning
        text: { es: "Error probable: llamar transversal a cualquier movimiento dibujado hacia arriba.", en: "Likely error: calling any upward-drawn motion transverse." }
    next_step_rules:
      - id: ct_next
        when: "true"
        status: ok
        text: { es: "Compara [[C_T]] con [[C_L]] y revisa que ambas componentes usen la misma [[A]].", en: "Compare [[C_T]] with [[C_L]] and check that both components use the same [[A]]." }
  C_L:
    magnitude_type: ratio
    semantic_role: { es: Predominio longitudinal de la perturbacion., en: Longitudinal dominance of the disturbance. }
    summary_rules:
      - id: cl_summary
        when: "true"
        status: ok
        text: { es: "[[C_L]] indica cuanto domina la componente paralela y describe si la onda se lee como longitudinal.", en: "[[C_L]] indicates how much the parallel component dominates and describes whether the wave reads as longitudinal." }
    physical_reading_rules:
      - id: cl_reading
        when: "true"
        status: ok
        text: { es: "Un [[C_L]] alto significa que la perturbacion comprime o desplaza el medio en la direccion de avance.", en: "A high [[C_L]] means the disturbance compresses or displaces the medium along the advance direction." }
    coherence_rules:
      - id: cl_range
        when: "C_L >= 0 && C_L <= 1"
        status: ok
        text: { es: "El indice longitudinal esta dentro del rango normalizado.", en: "The longitudinal index is within normalized range." }
      - id: cl_bad
        when: "C_L < 0 || C_L > 1"
        status: error
        text: { es: "Un indice longitudinal fuera de rango apunta a componentes mal normalizadas.", en: "A longitudinal index outside range points to badly normalized components." }
    model_validity_rules:
      - id: cl_validity
        when: "true"
        status: ok
        text: { es: "La lectura vale si se identifica correctamente la compresion o desplazamiento paralelo.", en: "The reading is valid if compression or parallel displacement is correctly identified." }
    graph_rules:
      - id: cl_graph
        when: "true"
        status: ok
        text: { es: "En Svg, [[C_L]] se ve como compresiones y rarefacciones alineadas con el avance.", en: "In Svg, [[C_L]] appears as compressions and rarefactions aligned with advance." }
    likely_errors:
      - id: cl_error
        when: "true"
        status: warning
        text: { es: "Error probable: creer que longitudinal significa que no hay transporte de energia.", en: "Likely error: believing longitudinal means there is no energy transport." }
    next_step_rules:
      - id: cl_next
        when: "true"
        status: ok
        text: { es: "Contrasta [[C_L]] con [[C_T]] para decidir si el modo es puro o mixto.", en: "Contrast [[C_L]] with [[C_T]] to decide whether the mode is pure or mixed." }
  u_perp:
    magnitude_type: component
    semantic_role: { es: Componente perpendicular medida., en: Measured perpendicular component. }
    summary_rules:
      - id: up_summary
        when: "true"
        status: ok
        text: { es: "[[u_perp]] describe la parte perpendicular de la perturbacion y depende de la direccion de propagacion elegida.", en: "[[u_perp]] describes the perpendicular part of the disturbance and depends on the chosen propagation direction." }
    physical_reading_rules:
      - id: up_reading
        when: "true"
        status: ok
        text: { es: "Mayor [[u_perp]] refuerza la lectura transversal si [[A]] se mantiene comparable.", en: "Larger [[u_perp]] strengthens the transverse reading if [[A]] remains comparable." }
    coherence_rules:
      - id: up_coherence
        when: "u_perp >= 0"
        status: ok
        text: { es: "La componente perpendicular se interpreta como modulo no negativo.", en: "The perpendicular component is interpreted as a nonnegative magnitude." }
    model_validity_rules:
      - id: up_validity
        when: "true"
        status: ok
        text: { es: "Debe medirse respecto al eje de propagacion, no respecto al borde del dibujo.", en: "It must be measured relative to the propagation axis, not the page edge." }
    graph_rules:
      - id: up_graph
        when: "true"
        status: ok
        text: { es: "El grafico Coord destaca [[u_perp]] como desplazamiento normal al avance.", en: "The Coord graph highlights [[u_perp]] as displacement normal to advance." }
    likely_errors:
      - id: up_error
        when: "true"
        status: warning
        text: { es: "Error probable: usar vertical absoluta como sinonimo de perpendicular.", en: "Likely error: using absolute vertical as a synonym for perpendicular." }
    next_step_rules:
      - id: up_next
        when: "true"
        status: ok
        text: { es: "Normaliza [[u_perp]] con [[A]] para obtener [[C_T]].", en: "Normalize [[u_perp]] with [[A]] to obtain [[C_T]]." }
  u_parallel:
    magnitude_type: component
    semantic_role: { es: Componente paralela medida., en: Measured parallel component. }
    summary_rules:
      - id: ul_summary
        when: "true"
        status: ok
        text: { es: "[[u_parallel]] indica la parte paralela de la perturbacion y describe tendencia longitudinal.", en: "[[u_parallel]] indicates the parallel part of the disturbance and describes longitudinal tendency." }
    physical_reading_rules:
      - id: ul_reading
        when: "true"
        status: ok
        text: { es: "Mayor [[u_parallel]] refuerza la lectura de compresion o desplazamiento alineado.", en: "Larger [[u_parallel]] strengthens the reading of compression or aligned displacement." }
    coherence_rules:
      - id: ul_coherence
        when: "u_parallel >= 0"
        status: ok
        text: { es: "La componente paralela se interpreta como modulo no negativo.", en: "The parallel component is interpreted as a nonnegative magnitude." }
    model_validity_rules:
      - id: ul_validity
        when: "true"
        status: ok
        text: { es: "Debe representar compresion o desplazamiento en la direccion de avance.", en: "It must represent compression or displacement along the direction of advance." }
    graph_rules:
      - id: ul_graph
        when: "true"
        status: ok
        text: { es: "El Svg muestra [[u_parallel]] como acercamiento y separacion de zonas del medio.", en: "The Svg shows [[u_parallel]] as approach and separation of medium regions." }
    likely_errors:
      - id: ul_error
        when: "true"
        status: warning
        text: { es: "Error probable: no ver desplazamiento porque no aparece una cresta vertical.", en: "Likely error: not seeing displacement because no vertical crest appears." }
    next_step_rules:
      - id: ul_next
        when: "true"
        status: ok
        text: { es: "Normaliza [[u_parallel]] con [[A]] para obtener [[C_L]].", en: "Normalize [[u_parallel]] with [[A]] to obtain [[C_L]]." }
  A:
    magnitude_type: amplitude
    semantic_role: { es: Escala comun de perturbacion., en: Common disturbance scale. }
    summary_rules:
      - id: a_summary
        when: "true"
        status: ok
        text: { es: "[[A]] resume la escala total de perturbacion y permite comparar componentes transversal y longitudinal.", en: "[[A]] summarizes total disturbance scale and allows transverse and longitudinal components to be compared." }
    physical_reading_rules:
      - id: a_reading
        when: "true"
        status: ok
        text: { es: "[[A]] no decide el tipo de onda por si sola; decide la normalizacion de las componentes.", en: "[[A]] does not decide wave type alone; it sets component normalization." }
    coherence_rules:
      - id: a_positive
        when: "A > 0"
        status: ok
        text: { es: "Una amplitud positiva permite calcular indices de clasificacion.", en: "A positive amplitude allows classification indices to be calculated." }
      - id: a_bad
        when: "A <= 0"
        status: error
        text: { es: "Sin amplitud positiva no hay perturbacion clasificable.", en: "Without positive amplitude there is no classifiable disturbance." }
    model_validity_rules:
      - id: a_validity
        when: "true"
        status: ok
        text: { es: "Debe usarse la misma escala [[A]] para las dos componentes.", en: "The same [[A]] scale must be used for both components." }
    graph_rules:
      - id: a_graph
        when: "true"
        status: ok
        text: { es: "El grafico usa [[A]] como envolvente de referencia para comparar orientaciones.", en: "The graph uses [[A]] as reference envelope to compare orientations." }
    likely_errors:
      - id: a_error
        when: "true"
        status: warning
        text: { es: "Error probable: clasificar por amplitud grande o pequena en vez de por orientacion.", en: "Likely error: classifying by large or small amplitude instead of orientation." }
    next_step_rules:
      - id: a_next
        when: "true"
        status: ok
        text: { es: "Usa [[A]] para comparar [[u_perp]] y [[u_parallel]] con la misma referencia.", en: "Use [[A]] to compare [[u_perp]] and [[u_parallel]] with the same reference." }
cross_checks:
  - id: component_balance
    formula_pair: [coeficiente_transversal, coeficiente_longitudinal]
    message: { es: "Los indices deben leerse como predominio relativo, no como energia total.", en: "The indices must be read as relative dominance, not as total energy." }
error_patterns:
  - id: vertical_absolute
    detects: [u_perp, C_T]
    message: { es: "Perpendicular depende de la direccion de propagacion.", en: "Perpendicular depends on propagation direction." }
graph_binding:
  primary_graph: Coord
  secondary_graph: Svg
  targets: [C_T, C_L, u_perp, u_parallel, A]
mini_graph:
  enabled: true
  type: Coord
  target: C_T
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
