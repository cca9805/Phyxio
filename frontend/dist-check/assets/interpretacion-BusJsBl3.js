const e=`\uFEFFversion: 2
id: interpretacion-potencia-electrica
leaf_id: potencia-electrica
nombre:
  es: Interpretacion de potencia electrica
  en: Interpretation of electric power
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: corriente-electrica
  parent_id: corriente-electrica
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/potencia-electrica
dependencies:
  formulas:
  - potencia_base
  - potencia_resistiva_corriente
  - potencia_resistiva_tension
  - energia_desde_potencia
  magnitudes:
  - P
  - V
  - I
  - R
  - E
  - t
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
result_blocks:
  summary:
    title:
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  P:
    summary_rules:
    - id: p_summary
      when: "true"
      status: info
      text:
        es: La magnitud [[P]] indica la rapidez de transferencia de [[E]] y fija exigencia termica en el componente.
        en: The quantity [[P]] indicates the transfer rate of [[E]] and sets thermal stress in the component.
    coherence_rules:
    - id: p_coherence
      when: "true"
      status: ok
      text:
        es: Debe existir consistencia entre {{ f:potencia_base }} y la lectura resistiva cuando el modelo ohmico es valido.
        en: Consistency should exist between {{ f:potencia_base }} and resistive reading when the ohmic model is valid.
    physical_reading_rules:
    - id: p_physical
      when: "true"
      status: info
      text:
        es: Aumentar [[I]] o [[V]] eleva [[P]] y puede activar sobrecalentamiento si no hay margen de disipacion.
        en: Increasing [[I]] or [[V]] raises [[P]] and may trigger overheating without dissipation margin.
    model_validity_rules:
    - id: p_validity
      when: "R > 0"
      status: ok
      text:
        es: El uso de {{ f:potencia_resistiva_corriente }} y {{ f:potencia_resistiva_tension }} requiere comportamiento resistivo dominante.
        en: Using {{ f:potencia_resistiva_corriente }} and {{ f:potencia_resistiva_tension }} requires dominant resistive behavior.
    graph_rules:
    - id: p_graph
      when: "true"
      status: info
      text:
        es: En una curva [[P]] frente a [[t]], picos altos anticipan riesgo termico aunque el promedio sea moderado.
        en: In a [[P]] versus [[t]] curve, high peaks signal thermal risk even with moderate average.
    likely_errors:
    - id: p_error
      when: "true"
      status: warning
      text:
        es: "Error frecuente: reportar potencia sin compararla con potencia nominal y margen de seguridad."
        en: "Common error: reporting power without comparing against rating and safety margin."
    next_step_rules:
    - id: p_next
      when: "true"
      status: info
      text:
        es: Contrasta [[P]] calculada con limite continuo del componente y revisa condiciones de enfriamiento.
        en: Compare computed [[P]] against component continuous limit and verify cooling conditions.

  E:
    summary_rules:
    - id: e_summary
      when: "true"
      status: info
      text:
        es: La variable [[E]] expresa acumulacion energetica durante una ventana temporal y complementa la lectura de [[P]].
        en: The variable [[E]] expresses energy accumulation over a time window and complements [[P]] reading.
    coherence_rules:
    - id: e_coherence
      when: "t > 0"
      status: ok
      text:
        es: La relacion {{ f:energia_desde_potencia }} exige tiempo positivo y unidades consistentes para evitar errores de escala.
        en: The relation {{ f:energia_desde_potencia }} requires positive time and consistent units to avoid scale errors.
    physical_reading_rules:
    - id: e_physical
      when: "true"
      status: info
      text:
        es: Igual [[E]] puede corresponder a escenarios fisicos distintos segun el perfil temporal de [[P]].
        en: Equal [[E]] may correspond to different physical scenarios depending on [[P]] time profile.
    model_validity_rules:
    - id: e_validity
      when: "true"
      status: ok
      text:
        es: Si [[P]] cambia mucho en el intervalo, usar una sola potencia media puede ocultar picos relevantes.
        en: If [[P]] varies strongly over the interval, a single average power may hide critical peaks.
    graph_rules:
    - id: e_graph
      when: "true"
      status: info
      text:
        es: El area bajo la curva [[P]] contra [[t]] representa [[E]] transferida en el intervalo.
        en: The area under the [[P]] versus [[t]] curve represents transferred [[E]] over the interval.
    likely_errors:
    - id: e_error
      when: "true"
      status: warning
      text:
        es: "Error frecuente: confundir joule con watt-hora y mezclar unidades sin conversion."
        en: "Common error: confusing joule with watt-hour and mixing units without conversion."
    next_step_rules:
    - id: e_next
      when: "true"
      status: info
      text:
        es: Descompone el intervalo en tramos si hay cambios de carga para mejorar la estimacion energetica.
        en: Split the interval into segments when load changes to improve energy estimation.
`;export{e as default};
