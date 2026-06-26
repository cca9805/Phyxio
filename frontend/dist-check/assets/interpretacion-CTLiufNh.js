const e=`version: 1
id: interpretacion-riesgos-precauciones
leaf_id: riesgos-y-precauciones
nombre:
  es: Interpretación de riesgos y precauciones
  en: Risks and precautions interpretation
scope: interpretation_tab
dependencies:
  formulas:
    - potencia_joule
    - energia_joule
    - incremento_termico
  magnitudes:
    - I
    - R
    - P_joule
    - E_joule
    - t
    - R_th
    - DeltaT

result_blocks:
  summary:
    title:
      es: Resumen del análisis
      en: Analysis summary
    content:
      es: |
        El cálculo de [[P_joule]], [[E_joule]] y [[DeltaT]] permite cuantificar el riesgo térmico en puntos de conexión.
        La potencia disipada crece cuadráticamente con [[I]] y linealmente con [[R]]. La energía acumulada incorpora el factor temporal.
      en: |
        The calculation of [[P_joule]], [[E_joule]], and [[DeltaT]] allows quantifying thermal risk at connection points.
        Dissipated power grows quadratically with [[I]] and linearly with [[R]]. Accumulated energy incorporates the temporal factor.
  physical_reading:
    title:
      es: Lectura física
      en: Physical reading
    content:
      es: |
        Una [[P_joule]] elevada en un punto de conexión indica calentamiento local intenso. Una [[E_joule]] elevada,
        aun con [[P_joule]] moderada, revela exposición prolongada que puede degradar el material. [[DeltaT]] > 40 K
        es señal de intervención inmediata.
      en: |
        High [[P_joule]] at a connection point indicates intense local heating. High [[E_joule]], even with moderate
        [[P_joule]], reveals prolonged exposure that can degrade the material. [[DeltaT]] > 40 K is a signal for immediate intervention.
  coherence:
    title:
      es: Coherencia física
      en: Physical coherence
    content:
      es: |
        La coherencia dimensional es correcta: [[I]]²·[[R]] produce potencia, [[P_joule]]·[[t]] produce energía,
        y [[P_joule]]·[[R_th]] produce temperatura. Las magnitudes evolucionan consistentemente.
      en: |
        Dimensional coherence is correct: [[I]]²·[[R]] produces power, [[P_joule]]·[[t]] produces energy,
        and [[P_joule]]·[[R_th]] produces temperature. Magnitudes evolve consistently.
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
    content:
      es: |
        El modelo es válido para resistencias óhmicas constantes en régimen térmico estacionario.
        Falla en transitorios rápidos o cuando la resistencia eléctrica varía con la temperatura.
      en: |
        The model is valid for constant ohmic resistances in stationary thermal regime.
        Fails in rapid transients or when electrical resistance varies with temperature.
  graph_reading:
    title:
      es: Lectura gráfica
      en: Graph reading
    content:
      es: Sin gráficos declarados para este leaf.
      en: No graphs declared for this leaf.
  likely_errors:
    title:
      es: Errores típicos
      en: Common errors
    content:
      es: |
        Evaluar riesgo solo por corriente ignorando resistencia de contacto. No considerar el tiempo de exposición
        acumulado. Confundir potencia instantánea con energía acumulada. Ignorar señales tempranas de calentamiento.
      en: |
        Evaluating risk only by current ignoring contact resistance. Not considering accumulated exposure time.
        Confusing instantaneous power with accumulated energy. Ignoring early heating signals.
  next_step:
    title:
      es: Siguiente paso
      en: Next step
    content:
      es: |
        Verificar [[P_joule]] calculada contra umbrales de riesgo (5-10 W moderado, >10 W alto).
        Calcular [[E_joule]] diaria para evaluar daño acumulado. Priorizar intervenciones según [[DeltaT]] estimada.
      en: |
        Verify calculated [[P_joule]] against risk thresholds (5-10 W moderate, >10 W high).
        Calculate daily [[E_joule]] to evaluate accumulated damage. Prioritize interventions according to estimated [[DeltaT]].

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  defaults:
    show_summary_first: true
    max_inline_messages: 3

targets:
  P_joule:
    summary_rules:
      - id: summary_p_joule
        when: 'true'
        status: info
        text:
          es: La potencia térmica indica intensidad de calentamiento local.
          en: Thermal power indicates local heating intensity.
    coherence_rules:
      - id: coherence_p_joule
        when: 'true'
        status: info
        text:
          es: La dimensión es consistente con potencia eléctrica.
          en: Dimension is consistent with electrical power.
    physical_reading_rules:
      - id: physical_p_joule
        when: 'true'
        status: info
        text:
          es: Valores superiores a 5-10 W justifican intervención.
          en: Values above 5-10 W justify intervention.
    model_validity_rules:
      - id: validity_p_joule
        when: 'true'
        status: info
        text:
          es: Válido para resistencias óhmicas constantes.
          en: Valid for constant ohmic resistances.
    graph_rules:
      - id: graph_p_joule
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_p_joule
        when: 'true'
        status: warning
        text:
          es: No ignorar el factor tiempo en evaluación de riesgo.
          en: Do not ignore time factor in risk evaluation.
    next_step_rules:
      - id: next_p_joule
        when: 'true'
        status: info
        text:
          es: Comparar con umbral de riesgo y calcular energía acumulada.
          en: Compare with risk threshold and calculate accumulated energy.
  E_joule:
    summary_rules:
      - id: summary_e_joule
        when: 'true'
        status: info
        text:
          es: La energía acumulada cuantifica daño térmico total.
          en: Accumulated energy quantifies total thermal damage.
    coherence_rules:
      - id: coherence_e_joule
        when: 'true'
        status: info
        text:
          es: La dimensión es consistente con energía.
          en: Dimension is consistent with energy.
    physical_reading_rules:
      - id: physical_e_joule
        when: 'true'
        status: info
        text:
          es: Valores diarios > 100 kJ indican riesgo acumulado.
          en: Daily values > 100 kJ indicate accumulated risk.
    model_validity_rules:
      - id: validity_e_joule
        when: 'true'
        status: info
        text:
          es: Válido cuando la potencia es aproximadamente constante.
          en: Valid when power is approximately constant.
    graph_rules:
      - id: graph_e_joule
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_e_joule
        when: 'true'
        status: warning
        text:
          es: No confundir energía con potencia instantánea.
          en: Do not confuse energy with instantaneous power.
    next_step_rules:
      - id: next_e_joule
        when: 'true'
        status: info
        text:
          es: Evaluar si el riesgo acumulado justifica intervención.
          en: Evaluate if accumulated risk justifies intervention.
  DeltaT:
    summary_rules:
      - id: summary_delta_t
        when: 'true'
        status: info
        text:
          es: El incremento térmico es el indicador observable directo.
          en: Temperature rise is the direct observable indicator.
    coherence_rules:
      - id: coherence_delta_t
        when: 'true'
        status: info
        text:
          es: La dimensión es consistente con temperatura.
          en: Dimension is consistent with temperature.
    physical_reading_rules:
      - id: physical_delta_t
        when: 'true'
        status: info
        text:
          es: Valores > 40 K indican riesgo alto. Detectable al tacto.
          en: Values > 40 K indicate high risk. Detectable by touch.
    model_validity_rules:
      - id: validity_delta_t
        when: 'true'
        status: info
        text:
          es: Válido en régimen térmico estacionario.
          en: Valid in stationary thermal regime.
    graph_rules:
      - id: graph_delta_t
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_delta_t
        when: 'true'
        status: warning
        text:
          es: No ignorar incrementos térmicos moderados persistentes.
          en: Do not ignore persistent moderate temperature rises.
    next_step_rules:
      - id: next_delta_t
        when: 'true'
        status: info
        text:
          es: Si DeltaT > 40 K, intervención inmediata requerida.
          en: If DeltaT > 40 K, immediate intervention required.
  I:
    summary_rules:
      - id: summary_i
        when: 'true'
        status: info
        text:
          es: La corriente es el flujo eléctrico que desencadena el calentamiento.
          en: Current is the electrical flow that triggers heating.
    coherence_rules:
      - id: coherence_i
        when: 'true'
        status: info
        text:
          es: La dimensión es consistente con corriente eléctrica.
          en: Dimension is consistent with electric current.
    physical_reading_rules:
      - id: physical_i
        when: 'true'
        status: info
        text:
          es: El calentamiento es extremadamente sensible a variaciones de corriente.
          en: Heating is extremely sensitive to current variations.
    model_validity_rules:
      - id: validity_i
        when: 'true'
        status: info
        text:
          es: Válido para corriente continua o valor eficaz en alterna.
          en: Valid for direct current or RMS value in alternating current.
    graph_rules:
      - id: graph_i
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_i
        when: 'true'
        status: warning
        text:
          es: Ignorar picos temporales de corriente.
          en: Ignoring temporary current peaks.
    next_step_rules:
      - id: next_i
        when: 'true'
        status: info
        text:
          es: Distribuir cargas si la corriente total es alta.
          en: Distribute loads if total current is high.
  R:
    summary_rules:
      - id: summary_r
        when: 'true'
        status: info
        text:
          es: La resistencia local es el cuello de botella donde se disipa el calor.
          en: Local resistance is the bottleneck where heat is dissipated.
    coherence_rules:
      - id: coherence_r
        when: 'true'
        status: info
        text:
          es: La dimensión es consistente con resistencia eléctrica.
          en: Dimension is consistent with electrical resistance.
    physical_reading_rules:
      - id: physical_r
        when: 'true'
        status: info
        text:
          es: Un contacto degradado aumenta la resistencia drásticamente.
          en: A degraded contact increases resistance drastically.
    model_validity_rules:
      - id: validity_r
        when: 'true'
        status: info
        text:
          es: Asume que la resistencia no cambia bruscamente con la temperatura.
          en: Assumes resistance does not change abruptly with temperature.
    graph_rules:
      - id: graph_r
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_r
        when: 'true'
        status: warning
        text:
          es: Asumir que las conexiones físicas tienen resistencia nula.
          en: Assuming physical connections have zero resistance.
    next_step_rules:
      - id: next_r
        when: 'true'
        status: info
        text:
          es: Apretar conexiones o reemplazar componentes si R es alta.
          en: Tighten connections or replace components if R is high.
  t:
    summary_rules:
      - id: summary_t
        when: 'true'
        status: info
        text:
          es: El tiempo de exposición multiplica el daño térmico.
          en: Exposure time multiplies thermal damage.
    coherence_rules:
      - id: coherence_t
        when: 'true'
        status: info
        text:
          es: La dimensión es consistente con tiempo.
          en: Dimension is consistent with time.
    physical_reading_rules:
      - id: physical_t
        when: 'true'
        status: info
        text:
          es: Cargas prolongadas generan más energía térmica acumulada.
          en: Prolonged loads generate more accumulated thermal energy.
    model_validity_rules:
      - id: validity_t
        when: 'true'
        status: info
        text:
          es: Válido para estimaciones de uso diario continuado.
          en: Valid for continuous daily use estimations.
    graph_rules:
      - id: graph_t
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_t
        when: 'true'
        status: warning
        text:
          es: Subestimar el impacto del tiempo en cargas moderadas.
          en: Underestimating time impact on moderate loads.
    next_step_rules:
      - id: next_t
        when: 'true'
        status: info
        text:
          es: Reducir horas de uso continuo de equipos de alto consumo.
          en: Reduce continuous use hours of high-consumption equipment.
  R_th:
    summary_rules:
      - id: summary_r_th
        when: 'true'
        status: info
        text:
          es: Resistencia a la disipación del calor al ambiente.
          en: Resistance to heat dissipation to the environment.
    coherence_rules:
      - id: coherence_r_th
        when: 'true'
        status: info
        text:
          es: La dimensión es consistente con resistencia térmica.
          en: Dimension is consistent with thermal resistance.
    physical_reading_rules:
      - id: physical_r_th
        when: 'true'
        status: info
        text:
          es: Define cuánto se eleva la temperatura por cada vatio disipado.
          en: Defines how much temperature rises for each dissipated watt.
    model_validity_rules:
      - id: validity_r_th
        when: 'true'
        status: info
        text:
          es: Válido para convección lineal, falla en altas temperaturas.
          en: Valid for linear convection, fails at high temperatures.
    graph_rules:
      - id: graph_r_th
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_r_th
        when: 'true'
        status: warning
        text:
          es: Confundir resistencia térmica con eléctrica.
          en: Confusing thermal resistance with electrical.
    next_step_rules:
      - id: next_r_th
        when: 'true'
        status: info
        text:
          es: Mejorar la ventilación para reducir la resistencia térmica.
          en: Improve ventilation to reduce thermal resistance.
`;export{e as default};
