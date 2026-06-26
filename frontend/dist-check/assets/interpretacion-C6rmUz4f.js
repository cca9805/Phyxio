const e=`version: v5
id: interpretacion_interferencia_destructiva
leaf_id: interferencia-destructiva
nombre:
  es: Interpretación de interferencia destructiva
  en: Destructive interference interpretation
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fenomenos-ondulatorios
  parent_id: interferencia
  ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-destructiva
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
    en: Interpretation
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_messages: 4
    prefer: [summary, likely_errors]
dependencies:
  formulas:
    - condicion_destructiva_camino
    - fase_destructiva
    - intensidad_interferencia_dos_ondas
  magnitudes:
    - I_resultante
    - delta_phi
    - Delta_r
    - lambda
    - m_orden
    - I1
    - I2
global_context:
  physical_domain:
    es: "Superposición coherente de ondas con fase relativa estable."
    en: "Coherent superposition of waves with stable relative phase."
  axis_convention:
    es: "La fase y la diferencia de camino se leen de forma periódica; el signo fija referencia, no intensidad negativa."
    en: "Phase and path difference are read periodically; sign sets reference, not negative intensity."
  standard_assumptions:
    - "Dos ondas coherentes de la misma frecuencia."
    - "Amplitudes o polarizaciones compatibles para interferir."
    - "Longitud de onda positiva en el medio considerado."
  standard_warnings:
    - "La cancelación completa exige amplitudes compatibles, no solo oposición de fase."
    - "Una intensidad resultante negativa indica error de cálculo o de modelo."
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
result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura gráfica
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step
targets:
  I_resultante:
    magnitude_type: intensity
    semantic_role:
      es: "Intensidad remanente que describe cuánta señal queda tras la cancelación coherente."
      en: "Remaining intensity that describes how much signal is left after coherent cancellation."
    summary_rules:
      - id: ir_summary_zero
        when: "I_resultante == 0"
        status: ok
        text:
          es: "[[I_resultante]] indica cancelación ideal: la intensidad remanente desaparece dentro del modelo coherente."
          en: "[[I_resultante]] indicates ideal cancellation: the remaining intensity vanishes within the coherent model."
      - id: ir_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I_resultante]] resume la intensidad que sobrevive después de sumar amplitudes con fase relativa."
          en: "[[I_resultante]] summarizes the intensity that survives after adding amplitudes with relative phase."
    physical_reading_rules:
      - id: ir_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[I_resultante]] baja significa que las perturbaciones llegan con signos opuestos y se compensan parcialmente."
          en: "A low [[I_resultante]] means the disturbances arrive with opposite signs and partially compensate."
    coherence_rules:
      - id: ir_coherence_negative
        when: "I_resultante < 0"
        status: error
        text:
          es: "[[I_resultante]] negativa no es física; revisa fase, unidades e intensidades individuales."
          en: "Negative [[I_resultante]] is not physical; check phase, units, and individual intensities."
      - id: ir_coherence_default
        when: "true"
        status: ok
        text:
          es: "La lectura es coherente si la intensidad disminuye cerca de la oposición de fase."
          en: "The reading is coherent if intensity decreases near phase opposition."
    model_validity_rules:
      - id: ir_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo requiere coherencia, frecuencia común y modos compatibles durante la observación."
          en: "The model requires coherence, common frequency, and compatible modes during observation."
    graph_rules:
      - id: ir_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico, [[I_resultante]] debe caer en los mínimos destructivos."
          en: "On the graph, [[I_resultante]] should fall at destructive minima."
    likely_errors:
      - id: ir_error_equal_amplitudes
        when: "true"
        status: warning
        text:
          es: "Error típico: esperar cancelación completa aunque [[I1]] y [[I2]] no sean comparables."
          en: "Typical mistake: expecting complete cancellation even when [[I1]] and [[I2]] are not comparable."
    next_step_rules:
      - id: ir_next_phase
        when: "true"
        status: ok
        text:
          es: "Relaciona [[I_resultante]] con [[delta_phi]] para decidir si el mínimo procede de fase o de amplitud."
          en: "Relate [[I_resultante]] to [[delta_phi]] to decide whether the minimum comes from phase or amplitude."

  delta_phi:
    magnitude_type: phase
    semantic_role:
      es: "Desfase que decide si la superposición reduce la intensidad."
      en: "Phase offset that decides whether superposition reduces intensity."
    summary_rules:
      - id: dp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[delta_phi]] indica la separación angular que domina la cancelación destructiva."
          en: "[[delta_phi]] indicates the angular separation that dominates destructive cancellation."
    physical_reading_rules:
      - id: dp_reading_default
        when: "true"
        status: ok
        text:
          es: "Cuando [[delta_phi]] corresponde a oposición de fase, crestas y valles llegan coordinados para compensarse."
          en: "When [[delta_phi]] corresponds to phase opposition, crests and troughs arrive coordinated to compensate."
    coherence_rules:
      - id: dp_coherence_default
        when: "true"
        status: ok
        text:
          es: "La fase es periódica; sumar ciclos completos no cambia la lectura física del mínimo."
          en: "Phase is periodic; adding whole cycles does not change the physical reading of the minimum."
    model_validity_rules:
      - id: dp_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura falla si el desfase fluctúa durante el tiempo de medida."
          en: "The reading fails if the phase offset fluctuates during the measurement time."
    graph_rules:
      - id: dp_graph_default
        when: "true"
        status: ok
        text:
          es: "En la curva fase-intensidad, los mínimos se repiten al recuperar oposición de fase."
          en: "On the phase-intensity curve, minima repeat when phase opposition returns."
    likely_errors:
      - id: dp_error_any_phase
        when: "true"
        status: warning
        text:
          es: "Error común: creer que cualquier desfase produce cancelación completa."
          en: "Common mistake: believing any phase offset produces complete cancellation."
    next_step_rules:
      - id: dp_next_path
        when: "true"
        status: ok
        text:
          es: "Convierte [[delta_phi]] en [[Delta_r]] para ubicar el mínimo en el montaje."
          en: "Convert [[delta_phi]] into [[Delta_r]] to locate the minimum in the setup."

  Delta_r:
    magnitude_type: path_difference
    semantic_role:
      es: "Diferencia geométrica que describe dónde aparece el mínimo destructivo."
      en: "Geometric difference that describes where the destructive minimum appears."
    summary_rules:
      - id: dr_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Delta_r]] describe el camino extra que depende de la geometría y desplaza los mínimos."
          en: "[[Delta_r]] describes the extra path that depends on geometry and shifts minima."
    physical_reading_rules:
      - id: dr_reading_default
        when: "true"
        status: ok
        text:
          es: "Medio ciclo adicional en [[Delta_r]] coloca una cresta frente a un valle."
          en: "A half-cycle added in [[Delta_r]] places a crest against a trough."
    coherence_rules:
      - id: dr_coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[Delta_r]] fija referencia; el mínimo depende del desajuste relativo con [[lambda]]."
          en: "The sign of [[Delta_r]] sets reference; the minimum depends on relative mismatch with [[lambda]]."
    model_validity_rules:
      - id: dr_validity_default
        when: "true"
        status: ok
        text:
          es: "En medios distintos debe usarse camino óptico, no solo distancia geométrica."
          en: "In different media, optical path must be used, not only geometric distance."
    graph_rules:
      - id: dr_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico, [[Delta_r]] marca mínimos separados por una longitud de onda."
          en: "On the graph, [[Delta_r]] marks minima separated by one wavelength."
    likely_errors:
      - id: dr_error_single_distance
        when: "true"
        status: warning
        text:
          es: "Error común: usar una distancia absoluta en vez de comparar dos recorridos."
          en: "Common mistake: using an absolute distance instead of comparing two paths."
    next_step_rules:
      - id: dr_next_lambda
        when: "true"
        status: ok
        text:
          es: "Compara [[Delta_r]] con [[lambda]] para comprobar el medio ciclo destructivo."
          en: "Compare [[Delta_r]] with [[lambda]] to check the destructive half-cycle."

  lambda:
    magnitude_type: wavelength
    semantic_role:
      es: "Escala espacial que determina la separación entre mínimos destructivos."
      en: "Spatial scale that determines the separation between destructive minima."
    summary_rules:
      - id: la_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] indica la escala que determina cada repetición del patrón destructivo."
          en: "[[lambda]] indicates the scale that determines each repetition of the destructive pattern."
    physical_reading_rules:
      - id: la_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[lambda]] mayor separa más los mínimos para la misma geometría."
          en: "A larger [[lambda]] separates minima more for the same geometry."
    coherence_rules:
      - id: la_coherence_positive
        when: "lambda <= 0"
        status: error
        text:
          es: "[[lambda]] debe ser positiva para representar una onda física."
          en: "[[lambda]] must be positive to represent a physical wave."
      - id: la_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] es coherente si corresponde al medio donde viajan las ondas."
          en: "[[lambda]] is coherent if it corresponds to the medium where the waves travel."
    model_validity_rules:
      - id: la_validity_default
        when: "true"
        status: ok
        text:
          es: "En un medio dispersivo, cambiar de frecuencia cambia también [[lambda]]."
          en: "In a dispersive medium, changing frequency also changes [[lambda]]."
    graph_rules:
      - id: la_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico, [[lambda]] estira o comprime la separación de mínimos."
          en: "On the graph, [[lambda]] stretches or compresses minimum spacing."
    likely_errors:
      - id: la_error_medium
        when: "true"
        status: warning
        text:
          es: "Error común: usar la longitud de onda en el vacío para ondas dentro de un material."
          en: "Common mistake: using vacuum wavelength for waves inside a material."
    next_step_rules:
      - id: la_next_order
        when: "true"
        status: ok
        text:
          es: "Usa [[lambda]] junto con [[m_orden]] para localizar mínimos sucesivos."
          en: "Use [[lambda]] with [[m_orden]] to locate successive minima."

  m_orden:
    magnitude_type: order
    semantic_role:
      es: "Entero que enumera los mínimos destructivos del patrón."
      en: "Integer that enumerates destructive minima in the pattern."
    summary_rules:
      - id: mo_summary_default
        when: "true"
        status: ok
        text:
          es: "[[m_orden]] describe qué mínimo destructivo se está leyendo dentro del patrón."
          en: "[[m_orden]] describes which destructive minimum is being read within the pattern."
    physical_reading_rules:
      - id: mo_reading_default
        when: "true"
        status: ok
        text:
          es: "Cambiar [[m_orden]] no cambia la física local; selecciona otra repetición espacial."
          en: "Changing [[m_orden]] does not change the local physics; it selects another spatial repetition."
    coherence_rules:
      - id: mo_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[m_orden]] debe representar una etiqueta entera, no un ajuste continuo."
          en: "[[m_orden]] must represent an integer label, not a continuous fit."
    model_validity_rules:
      - id: mo_validity_default
        when: "true"
        status: ok
        text:
          es: "En pantallas o salas finitas, algunos órdenes pueden no ser observables."
          en: "On finite screens or in rooms, some orders may not be observable."
    graph_rules:
      - id: mo_graph_default
        when: "true"
        status: ok
        text:
          es: "Los marcadores de [[m_orden]] señalan mínimos repetidos del patrón."
          en: "The [[m_orden]] markers indicate repeated minima in the pattern."
    likely_errors:
      - id: mo_error_rounding
        when: "true"
        status: warning
        text:
          es: "Error común: redondear un cociente y olvidar el medio ciclo destructivo."
          en: "Common mistake: rounding a ratio and forgetting the destructive half-cycle."
    next_step_rules:
      - id: mo_next_path
        when: "true"
        status: ok
        text:
          es: "Calcula [[Delta_r]] para confirmar si ese orden existe en el montaje."
          en: "Compute [[Delta_r]] to confirm whether that order exists in the setup."

  I1:
    magnitude_type: intensity
    semantic_role:
      es: "Primera contribución de intensidad antes de la superposición."
      en: "First intensity contribution before superposition."
    summary_rules:
      - id: i1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I1]] indica una contribución individual que depende de una fuente antes de cancelar."
          en: "[[I1]] indicates one individual contribution that depends on a source before cancellation."
    physical_reading_rules:
      - id: i1_reading_default
        when: "true"
        status: ok
        text:
          es: "Si [[I1]] domina mucho, la otra onda no puede anular toda la intensidad."
          en: "If [[I1]] strongly dominates, the other wave cannot remove all intensity."
    coherence_rules:
      - id: i1_coherence_negative
        when: "I1 < 0"
        status: error
        text:
          es: "[[I1]] no puede ser negativa."
          en: "[[I1]] cannot be negative."
      - id: i1_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[I1]] debe medirse con la misma escala que [[I2]]."
          en: "[[I1]] must be measured with the same scale as [[I2]]."
    model_validity_rules:
      - id: i1_validity_default
        when: "true"
        status: ok
        text:
          es: "La fuente asociada a [[I1]] debe mantenerse estable durante la observación."
          en: "The source associated with [[I1]] must remain stable during observation."
    graph_rules:
      - id: i1_graph_default
        when: "true"
        status: ok
        text:
          es: "Aumentar [[I1]] eleva el piso del mínimo si [[I2]] no aumenta igual."
          en: "Increasing [[I1]] raises the minimum floor if [[I2]] does not increase equally."
    likely_errors:
      - id: i1_error_final
        when: "true"
        status: warning
        text:
          es: "Error común: tratar [[I1]] como si ya fuera [[I_resultante]]."
          en: "Common mistake: treating [[I1]] as if it were already [[I_resultante]]."
    next_step_rules:
      - id: i1_next_compare
        when: "true"
        status: ok
        text:
          es: "Compara [[I1]] con [[I2]] para estimar si el mínimo puede ser profundo."
          en: "Compare [[I1]] with [[I2]] to estimate whether the minimum can be deep."

  I2:
    magnitude_type: intensity
    semantic_role:
      es: "Segunda contribución de intensidad antes de la superposición."
      en: "Second intensity contribution before superposition."
    summary_rules:
      - id: i2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I2]] indica la segunda contribución que depende del equilibrio de amplitudes."
          en: "[[I2]] indicates the second contribution that depends on amplitude balance."
    physical_reading_rules:
      - id: i2_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[I2]] comparable con [[I1]] permite mínimos más oscuros o silenciosos."
          en: "An [[I2]] comparable with [[I1]] allows darker or quieter minima."
    coherence_rules:
      - id: i2_coherence_negative
        when: "I2 < 0"
        status: error
        text:
          es: "[[I2]] no puede ser negativa."
          en: "[[I2]] cannot be negative."
      - id: i2_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[I2]] debe describir la misma frecuencia y región que [[I1]]."
          en: "[[I2]] must describe the same frequency and region as [[I1]]."
    model_validity_rules:
      - id: i2_validity_default
        when: "true"
        status: ok
        text:
          es: "La cancelación calculada pierde sentido si la segunda fuente no es coherente."
          en: "The computed cancellation loses meaning if the second source is not coherent."
    graph_rules:
      - id: i2_graph_default
        when: "true"
        status: ok
        text:
          es: "Cambiar [[I2]] modifica profundidad y contraste de los mínimos."
          en: "Changing [[I2]] modifies the depth and contrast of minima."
    likely_errors:
      - id: i2_error_zero
        when: "true"
        status: warning
        text:
          es: "Error común: esperar interferencia destructiva si una de las dos ondas no está presente."
          en: "Common mistake: expecting destructive interference if one of the two waves is absent."
    next_step_rules:
      - id: i2_next_compare
        when: "true"
        status: ok
        text:
          es: "Compara [[I2]] con [[I1]] antes de interpretar un mínimo como cancelación completa."
          en: "Compare [[I2]] with [[I1]] before interpreting a minimum as complete cancellation."
cross_checks:
  - id: intensity_nonnegative
    condition: "I_resultante >= 0"
    status: error
    text:
      es: "La intensidad resultante debe ser no negativa."
      en: "Resultant intensity must be non-negative."
error_patterns:
  - id: destructive_without_coherence
    detect_when: "true"
    text:
      es: "Sin coherencia estable, los mínimos se promedian y el patrón desaparece."
      en: "Without stable coherence, minima average out and the pattern disappears."
graph_binding:
  enabled: true
  preferred_type: Coord
  channels:
    - resultant_intensity
    - phase_slider
    - path_difference
    - wavelength_scale
mini_graph:
  enabled: true
  preferred_type: Coord
`;export{e as default};
