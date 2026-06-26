const e=`version: 2\r
id: interpretacion-circuitos-rc\r
leaf_id: circuitos-rc\r
nombre:\r
  es: Interpretacion de circuitos rc\r
  en: Interpretation of RC circuits\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-electrica\r
  parent_id: corriente-electrica\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/circuitos-rc\r
dependencies:\r
  formulas:\r
  - tau_rc\r
  - carga\r
  - descarga\r
  - corriente_carga\r
  magnitudes:\r
  - tau\r
  - R\r
  - C\r
  - Vc\r
  - Vf\r
  - V0\r
  - I\r
  - t\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura grafica\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  tau:\r
    summary_rules:\r
    - id: tau_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La constante de tiempo resume cuan rapido o lento evoluciona el transitorio en comparacion con el tiempo de observacion.\r
        en: The time constant summarizes how fast or slow the transient evolves compared with observation time.\r
    coherence_rules:\r
    - id: tau_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser positiva y consistente con el producto de resistencia por capacitancia.\r
        en: It must be positive and consistent with resistance times capacitance.\r
    physical_reading_rules:\r
    - id: tau_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si tau es grande frente al horizonte temporal, la respuesta parece lenta y aun no alcanza equilibrio.\r
        en: If tau is large versus time horizon, the response looks slow and has not reached equilibrium.\r
    model_validity_rules:\r
    - id: tau_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La interpretacion de tau supone modelo lineal de primer orden sin efectos dinamicos adicionales dominantes.\r
        en: Interpretation of tau assumes a first-order linear model without dominant additional dynamics.\r
    graph_rules:\r
    - id: tau_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En una grafica Vc contra t, la proximidad a estado estacionario se evalua comparando t con multiples de tau.\r
        en: In a Vc versus t graph, proximity to steady state is assessed by comparing t with multiples of tau.\r
    likely_errors:\r
    - id: tau_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: tratar tau como tiempo total de carga y no como escala exponencial."\r
        en: "Common error: treating tau as full charging time instead of exponential scale."\r
    next_step_rules:\r
    - id: tau_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa tau para seleccionar puntos de muestreo y estimar rapidez de convergencia.\r
        en: Use tau to choose sampling points and estimate convergence speed.\r
  Vc:\r
    summary_rules:\r
    - id: vc_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La tension del capacitor evoluciona de forma exponencial desde su condicion inicial hacia su condicion final.\r
        en: Capacitor voltage evolves exponentially from initial to final condition.\r
    coherence_rules:\r
    - id: vc_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: En carga pasiva simple no debe superar de forma sostenida el valor final de excitacion.\r
        en: In simple passive charging, it should not sustain overshoot above final excitation.\r
    physical_reading_rules:\r
    - id: vc_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: El cambio de Vc refleja intercambio de energia entre fuente, resistencia y almacenamiento electrostatico.\r
        en: Vc change reflects energy exchange among source, resistor and electrostatic storage.\r
    model_validity_rules:\r
    - id: vc_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Valido cuando la topologia puede aproximarse por un unico polo dominante.\r
        en: Valid when topology can be approximated by a single dominant pole.\r
    graph_rules:\r
    - id: vc_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Curva creciente sugiere carga; curva decreciente sugiere descarga hacia referencia.\r
        en: Rising curve suggests charging; decaying curve suggests discharge toward reference.\r
    likely_errors:\r
    - id: vc_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: Confundir Vc instantanea con valor final y aplicar formula inadecuada para el escenario.\r
        en: Confusing instantaneous Vc with final value and applying wrong scenario formula.\r
    next_step_rules:\r
    - id: vc_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contrasta puntos medidos de Vc con la curva teorica para validar parametros equivalentes.\r
        en: Compare measured Vc points with theoretical curve to validate equivalent parameters.\r
  I:\r
    summary_rules:\r
    - id: i_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La corriente transitoria inicia en su maximo y decrece conforme el capacitor se aproxima al equilibrio.\r
        en: Transient current starts at maximum and decays as capacitor approaches equilibrium.\r
    coherence_rules:\r
    - id: i_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El valor inicial debe concordar con la ley de Ohm aplicada al instante de arranque ideal.\r
        en: Initial value must agree with Ohm law at ideal startup instant.\r
    physical_reading_rules:\r
    - id: i_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Corriente alta inicial implica mayor esfuerzo termico en resistencia durante un periodo corto.\r
        en: High initial current implies greater thermal stress on resistor over short period.\r
    model_validity_rules:\r
    - id: i_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si hay inductancia significativa, la evolucion de corriente deja de seguir el modelo RC puro.\r
        en: If inductance is significant, current evolution no longer follows pure RC model.\r
    graph_rules:\r
    - id: i_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La grafica de I contra t debe mostrar decaimiento exponencial sin oscilaciones en un RC ideal.\r
        en: I versus t graph should show exponential decay without oscillations in an ideal RC.\r
    likely_errors:\r
    - id: i_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error tipico: asumir corriente constante en todo el transitorio."\r
        en: "Typical error: assuming constant current through whole transient."\r
    next_step_rules:\r
    - id: i_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Verifica potencia inicial y energia disipada para comprobar viabilidad termica del diseno.\r
        en: Check initial power and dissipated energy to verify thermal design feasibility.\r
  R:\r
    summary_rules:\r
    - id: r_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La resistencia regula la intensidad de corriente y la rapidez del ajuste temporal.\r
        en: Resistance regulates current intensity and temporal adjustment speed.\r
    coherence_rules:\r
    - id: r_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe mantenerse positiva en el modelo pasivo lineal.\r
        en: It must remain positive in the passive linear model.\r
    physical_reading_rules:\r
    - id: r_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: A mayor resistencia, menor corriente de arranque y transitorio mas lento.\r
        en: Larger resistance means lower startup current and slower transient.\r
    model_validity_rules:\r
    - id: r_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Su valor efectivo puede desplazarse por temperatura y tolerancia.\r
        en: Its effective value may drift with temperature and tolerance.\r
    graph_rules:\r
    - id: r_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambios de resistencia alteran pendiente inicial y horizonte de convergencia.\r
        en: Resistance changes alter initial slope and convergence horizon.\r
    likely_errors:\r
    - id: r_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar kiloohmios sin convertir a ohmios."\r
        en: "Common error: using kiloohms without converting to ohms."\r
    next_step_rules:\r
    - id: r_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Ajusta R con criterio de compromiso entre rapidez y estres de corriente.\r
        en: Tune R balancing speed and current stress.\r
  C:\r
    summary_rules:\r
    - id: c_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La capacitancia determina capacidad de almacenamiento y suavizado temporal.\r
        en: Capacitance determines storage capability and temporal smoothing.\r
    coherence_rules:\r
    - id: c_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser positiva para mantener interpretacion fisica pasiva.\r
        en: It must be positive to preserve passive physical interpretation.\r
    physical_reading_rules:\r
    - id: c_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: A mayor capacitancia, mayor inercia temporal frente a cambios abruptos.\r
        en: Larger capacitance means higher temporal inertia against abrupt changes.\r
    model_validity_rules:\r
    - id: c_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Su valor efectivo puede depender de condiciones de operacion reales.\r
        en: Effective value may depend on real operating conditions.\r
    graph_rules:\r
    - id: c_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambios en C desplazan la curva sobre el eje temporal.\r
        en: Changes in C shift the curve along the time axis.\r
    likely_errors:\r
    - id: c_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar microfaradios como si fueran faradios."\r
        en: "Common error: treating microfarads as farads."\r
    next_step_rules:\r
    - id: c_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Ajusta C para equilibrar filtrado y velocidad de respuesta.\r
        en: Tune C to balance filtering and response speed.\r
  V0:\r
    summary_rules:\r
    - id: v0_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La condicion inicial fija el punto de partida del transitorio.\r
        en: Initial condition sets the transient starting point.\r
    coherence_rules:\r
    - id: v0_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser consistente con el estado previo del capacitor.\r
        en: It must be consistent with capacitor previous state.\r
    physical_reading_rules:\r
    - id: v0_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambiar V0 modifica todo el tramo inicial de la curva.\r
        en: Changing V0 modifies the whole initial curve segment.\r
    model_validity_rules:\r
    - id: v0_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Ignorar V0 invalida la seleccion correcta de escenario.\r
        en: Ignoring V0 invalidates proper scenario selection.\r
    graph_rules:\r
    - id: v0_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: V0 se observa como ordenada inicial de la trayectoria.\r
        en: V0 is read as initial ordinate of the trajectory.\r
    likely_errors:\r
    - id: v0_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: asumir V0 igual a cero sin justificarlo."\r
        en: "Common error: assuming V0 equals zero without justification."\r
    next_step_rules:\r
    - id: v0_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Verifica condicion inicial antes de sustituir ecuaciones.\r
        en: Check initial condition before substitution.\r
  Vf:\r
    summary_rules:\r
    - id: vf_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: Vf define el nivel de referencia al que tiende la respuesta.\r
        en: Vf defines the reference level approached by response.\r
    coherence_rules:\r
    - id: vf_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe alinearse con la excitacion y la polaridad de referencia.\r
        en: It must align with excitation and reference polarity.\r
    physical_reading_rules:\r
    - id: vf_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambiar Vf desplaza la asintota de la curva de estado.\r
        en: Changing Vf shifts the state-curve asymptote.\r
    model_validity_rules:\r
    - id: vf_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Su interpretacion exige fuente estable en la ventana analizada.\r
        en: Its interpretation requires a stable source in analyzed window.\r
    graph_rules:\r
    - id: vf_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Vf se interpreta como nivel limite de largo plazo.\r
        en: Vf is interpreted as long-term limit level.\r
    likely_errors:\r
    - id: vf_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: confundir Vf con valor instantaneo de salida."\r
        en: "Common error: confusing Vf with instantaneous output value."\r
    next_step_rules:\r
    - id: vf_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contrasta valor final esperado con medicion en tiempos largos.\r
        en: Compare expected final value with long-time measurements.\r
`;export{e as default};
