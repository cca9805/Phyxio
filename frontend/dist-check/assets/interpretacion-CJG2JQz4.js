const e=`version: v5
id: interpretacion_superposicion
leaf_id: superposicion
nombre:
  es: Interpretacion de superposicion
  en: Superposition interpretation
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fenomenos-ondulatorios
  parent_id: fenomenos-ondulatorios
  ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/superposicion
ui:
  enabled: true
  display_modes: { calculator_inline: true, graph_inline: true, dedicated_tab: true, modal: false }
  labels:
    calculator_title: { es: Calculadora de superposicion, en: Superposition calculator }
    result_title: { es: Resultado de la suma, en: Sum result }
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits: { max_messages: 3, truncate_at: 220 }
dependencies:
  formulas: [superposicion_lineal, amplitud_en_fase, intensidad_relativa]
  magnitudes: [y_resultante, y_1, y_2, A_resultante, A_1, A_2, I_relativa]
global_context:
  physical_domain:
    es: Ondas lineales que coinciden en un mismo punto del medio
    en: Linear waves meeting at the same point of the medium
  axis_convention:
    es: Perturbaciones positivas y negativas se miden respecto al equilibrio
    en: Positive and negative disturbances are measured relative to equilibrium
  standard_assumptions:
    - El medio responde linealmente
    - Las ondas se evaluan en el mismo punto e instante
    - Las perturbaciones no alteran el medio
  standard_warnings:
    - La suma correcta conserva el signo de cada perturbacion
    - La intensidad se interpreta despues de sumar amplitudes
result_blocks:
  summary: { enabled: true, order: 1, title: { es: Resumen, en: Summary } }
  physical_reading: { enabled: true, order: 2, title: { es: Lectura fisica, en: Physical reading } }
  coherence: { enabled: true, order: 3, title: { es: Coherencia, en: Coherence } }
  model_validity: { enabled: true, order: 4, title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { enabled: true, order: 5, title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { enabled: true, order: 6, title: { es: Errores probables, en: Likely errors } }
  next_step: { enabled: true, order: 7, title: { es: Siguiente paso, en: Next step } }
targets:
  y_resultante: &disturbance_target
    magnitude_type: signed_disturbance
    semantic_role:
      es: Perturbacion total que resume la suma algebraica local de las ondas.
      en: Total disturbance summarizing the local algebraic sum of the waves.
    next_step_rules:
      - { id: yr_next_amp, when: "true", status: ok, text: { es: "Compara [[y_resultante]] con [[y_1]] y [[y_2]] para decidir si hay refuerzo o cancelacion local.", en: "Compare [[y_resultante]] with [[y_1]] and [[y_2]] to decide whether there is local reinforcement or cancellation." } }
    summary_rules:
      - { id: yr_summary_default, when: "true", status: ok, text: { es: "[[y_resultante]] indica la perturbacion observable tras sumar ondas con signo; depende de [[y_1]] y [[y_2]].", en: "[[y_resultante]] indicates the observable disturbance after signed wave addition; it depends on [[y_1]] and [[y_2]]." } }
    physical_reading_rules:
      - { id: yr_reading_default, when: "true", status: ok, text: { es: "Si las perturbaciones tienen el mismo signo, la suma aumenta; si tienen signo opuesto, disminuye o cancela.", en: "If disturbances have the same sign, the sum increases; if signs are opposite, it decreases or cancels." } }
    coherence_rules:
      - { id: yr_coherence_default, when: "true", status: ok, text: { es: "La coherencia exige sumar valores instantaneos en el mismo punto, no amplitudes tomadas en momentos distintos.", en: "Coherence requires adding instantaneous values at the same point, not amplitudes taken at different instants." } }
    model_validity_rules:
      - { id: yr_validity_default, when: "true", status: ok, text: { es: "La lectura vale para medios lineales; en amplitudes grandes puede fallar por no linealidad.", en: "The reading holds for linear media; at large amplitudes it may fail through nonlinearity." } }
    graph_rules:
      - { id: yr_graph_default, when: "true", status: ok, text: { es: "En el grafico, [[y_resultante]] es la curva que queda al sumar punto a punto las dos curvas individuales.", en: "In the graph, [[y_resultante]] is the curve obtained by point-by-point addition of the two individual curves." } }
    likely_errors:
      - { id: yr_error_abs, when: "true", status: warning, text: { es: "Error comun: sumar modulos y perder cancelaciones. Conserva el signo de cada perturbacion.", en: "Common mistake: adding magnitudes and losing cancellations. Preserve each disturbance sign." } }
  y_1:
    <<: *disturbance_target
    semantic_role:
      es: Primer aporte local que participa en la suma de superposicion.
      en: First local contribution participating in the superposition sum.
  y_2:
    <<: *disturbance_target
    semantic_role:
      es: Segundo aporte local que puede reforzar o cancelar al primero.
      en: Second local contribution that can reinforce or cancel the first.
  A_resultante:
    magnitude_type: amplitude
    semantic_role:
      es: Amplitud maxima de la onda combinada cuando las ondas llegan en fase.
      en: Maximum amplitude of the combined wave when waves arrive in phase.
    next_step_rules:
      - { id: ar_next_intensity, when: "true", status: ok, text: { es: "Usa [[A_resultante]] para estimar [[I_relativa]] solo despues de confirmar que la suma de amplitudes aplica.", en: "Use [[A_resultante]] to estimate [[I_relativa]] only after confirming amplitude addition applies." } }
    summary_rules:
      - { id: ar_summary_default, when: "true", status: ok, text: { es: "[[A_resultante]] resume el refuerzo maximo posible en fase y depende de [[A_1]] y [[A_2]].", en: "[[A_resultante]] summarizes the maximum in-phase reinforcement and depends on [[A_1]] and [[A_2]]." } }
    physical_reading_rules:
      - { id: ar_reading_default, when: "true", status: ok, text: { es: "Una amplitud mayor significa oscilacion mas grande, no necesariamente energia creada globalmente.", en: "A larger amplitude means larger oscillation, not globally created energy." } }
    coherence_rules:
      - { id: ar_coherence_default, when: "true", status: ok, text: { es: "[[A_resultante]] debe ser no negativa y no debe usarse para ondas fuera de fase sin revisar fase.", en: "[[A_resultante]] must be non-negative and should not be used for out-of-phase waves without checking phase." } }
    model_validity_rules:
      - { id: ar_validity_default, when: "true", status: ok, text: { es: "La suma directa de amplitudes exige ondas en fase y medio lineal.", en: "Direct amplitude addition requires in-phase waves and a linear medium." } }
    graph_rules:
      - { id: ar_graph_default, when: "true", status: ok, text: { es: "En fase, el pico de la curva resultante alcanza la suma de los picos individuales.", en: "In phase, the resultant curve peak reaches the sum of the individual peaks." } }
    likely_errors:
      - { id: ar_error_phase, when: "true", status: warning, text: { es: "Error comun: aplicar suma directa de amplitudes aunque las ondas lleguen desfasadas.", en: "Common mistake: applying direct amplitude addition although waves arrive out of phase." } }
  A_1:
    <<: *disturbance_target
    magnitude_type: amplitude
    semantic_role:
      es: Amplitud individual de la primera onda antes de combinarla.
      en: Individual amplitude of the first wave before combination.
  A_2:
    <<: *disturbance_target
    magnitude_type: amplitude
    semantic_role:
      es: Amplitud individual de la segunda onda antes de combinarla.
      en: Individual amplitude of the second wave before combination.
  I_relativa:
    magnitude_type: relative_intensity
    semantic_role:
      es: Lectura energetica relativa asociada al cuadrado de la amplitud resultante.
      en: Relative energy reading associated with the square of resultant amplitude.
    next_step_rules:
      - { id: ir_next_pattern, when: "true", status: ok, text: { es: "Relaciona [[I_relativa]] con el patron visible y compara zonas de refuerzo y cancelacion.", en: "Relate [[I_relativa]] to the visible pattern and compare reinforcement and cancellation zones." } }
    summary_rules:
      - { id: ir_summary_default, when: "true", status: ok, text: { es: "[[I_relativa]] describe una lectura energetica relativa; aumenta mucho cuando domina [[A_resultante]].", en: "[[I_relativa]] describes a relative energy reading; it increases strongly when [[A_resultante]] dominates." } }
    physical_reading_rules:
      - { id: ir_reading_default, when: "true", status: ok, text: { es: "La intensidad relativa convierte la suma de perturbaciones en una lectura observable de brillo, sonido o energia media.", en: "Relative intensity turns disturbance addition into an observable reading of brightness, sound, or average energy." } }
    coherence_rules:
      - { id: ir_coherence_default, when: "true", status: ok, text: { es: "[[I_relativa]] debe ser no negativa porque procede de una amplitud al cuadrado.", en: "[[I_relativa]] must be non-negative because it comes from squared amplitude." } }
    model_validity_rules:
      - { id: ir_validity_default, when: "true", status: ok, text: { es: "Esta lectura es relativa y supone mismo medio, misma frecuencia y comparacion normalizada.", en: "This reading is relative and assumes same medium, same frequency, and normalized comparison." } }
    graph_rules:
      - { id: ir_graph_default, when: "true", status: ok, text: { es: "En el grafico, pequeñas diferencias de amplitud producen barras de intensidad claramente distintas.", en: "In the graph, small amplitude differences produce clearly different intensity bars." } }
    likely_errors:
      - { id: ir_error_before_sum, when: "true", status: warning, text: { es: "Error comun: calcular intensidad de cada onda y sumarla antes de sumar perturbaciones.", en: "Common mistake: calculating each wave intensity and adding it before adding disturbances." } }
cross_checks:
  - id: check_signed_sum
    description: { es: Verificar que y_resultante procede de suma algebraica., en: Verify that y_resultante comes from algebraic addition. }
    formula: "y_resultante = y_1 + y_2"
error_patterns:
  - id: err_abs_sum
    pattern: "abs_sum"
    message: { es: Suma de modulos detectada; usar suma con signo., en: Sum of magnitudes detected; use signed addition. }
graph_binding:
  enabled: true
  channels: [wave_1_curve, wave_2_curve, resultant_curve, amplitude_bar]
mini_graph: { enabled: true, preferred_type: Coord }
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode: { max_sections: 2, priority: [summary, likely_errors] }
  extended_mode: { show_all: true }
`;export{e as default};
