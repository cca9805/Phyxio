const e=`version: 5
id: flujo-turbulento-interp
leaf_id: flujo-turbulento
scope: local
nombre:
  es: "Análisis de Flujo Turbulento"
  en: "Turbulent Flow Analysis"

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
      es: "Resumen del Resultado"
      en: "Result Summary"
  physical_reading:
    title:
      es: "Lectura Física Causal"
      en: "Causal Physical Reading"
  coherence:
    title:
      es: "Coherencia de Datos"
      en: "Data Coherence"
  model_validity:
    title:
      es: "Validez del Modelo"
      en: "Model Validity"
  graph_reading:
    title:
      es: "Análisis Gráfico"
      en: "Graph Analysis"
  likely_errors:
    title:
      es: "Errores Probables"
      en: "Likely Errors"
  next_step:
    title:
      es: "Siguiente Paso"
      en: "Next Step"

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [D, L, Re, dp, eta, f, rho, v, epsilon, nu]
  formulas: [blasius, darcy_turb, kolmogorov_length]

targets:
  dp:
    summary_rules:
      - id: dp-val
        when: dp > 0
        status: success
        text:
          es: "La caída de presión [[dp]] es de {dp} Pa, representando la energía mecánica disipada por fricción turbulenta."
          en: "The pressure drop [[dp]] is {dp} Pa, representing the mechanical energy dissipated by turbulent friction."
    physical_reading_rules:
      - id: dp-phys
        when: dp > 0
        status: success
        text:
          es: "Este valor indica que la inercia del fluido genera remolinos que roban energía cinética para convertirla en calor."
          en: "This value indicates that fluid inertia generates eddies that steal kinetic energy to convert it into heat."
    coherence_rules:
      - id: dp-coh
        when: dp > 0
        status: success
        text:
          es: "El resultado es consistente con un sistema que requiere bombeo externo para mantener el flujo."
          en: "The result is consistent with a system requiring external pumping to maintain flow."
    model_validity_rules:
      - id: dp-valid
        when: dp > 0
        status: success
        text:
          es: "Cálculo válido para régimen turbulento plenamente desarrollado según la ecuación de Darcy-Weisbach."
          en: "Calculation valid for fully developed turbulent regime according to the Darcy-Weisbach equation."
    graph_rules:
      - id: dp-graph
        when: dp > 0
        status: info
        text:
          es: "En el diagrama de Moody, este punto se sitúa en la zona de flujo turbulento, alejado de la línea de Poiseuille."
          en: "On the Moody chart, this point lies in the turbulent flow zone, away from the Poiseuille line."
    likely_errors:
      - id: dp-err
        when: dp < 0
        status: error
        text:
          es: "Error: La caída de presión no puede ser negativa en una tubería pasiva."
          en: "Error: Pressure drop cannot be negative in a passive pipe."
    next_step_rules:
      - id: dp-next
        when: dp > 0
        status: info
        text:
          es: "Compare este valor con la presión máxima que soporta el material de la tubería."
          en: "Compare this value with the maximum pressure the pipe material can withstand."

  f:
    summary_rules:
      - id: f-val
        when: f > 0
        status: success
        text:
          es: "El factor de fricción es [[f]] = {f}, el cual cuantifica la resistencia adimensional del conducto."
          en: "The friction factor is [[f]] = {f}, quantifying the dimensionless resistance of the duct."
    physical_reading_rules:
      - id: f-phys
        when: f > 0
        status: success
        text:
          es: "A diferencia del flujo laminar, este factor depende tanto del número de Reynolds [[Re]] como de la rugosidad de la pared."
          en: "Unlike laminar flow, this factor depends on both the Reynolds number [[Re]] and the wall roughness."
    coherence_rules:
      - id: f-coh
        when: f > 0.005 and f < 0.1
        status: success
        text:
          es: "Valor dentro del rango típico para tuberías comerciales (0.01 a 0.05)."
          en: "Value within the typical range for commercial pipes (0.01 to 0.05)."
    model_validity_rules:
      - id: f-valid
        when: f > 0
        status: success
        text:
          es: "Se ha utilizado la correlación de Blasius, válida para tubos lisos y Re moderados."
          en: "The Blasius correlation has been used, valid for smooth pipes and moderate Re."
    graph_rules:
      - id: f-graph
        when: f > 0
        status: info
        text:
          es: "Este valor define la posición vertical en el diagrama de Moody para el estado actual del flujo."
          en: "This value defines the vertical position on the Moody chart for the current flow state."
    likely_errors:
      - id: f-err
        when: f < 0.001
        status: warning
        text:
          es: "El factor de fricción parece demasiado bajo. Verifique si ha confundido rugosidad relativa con absoluta."
          en: "The friction factor seems too low. Check if you have confused relative roughness with absolute roughness."
    next_step_rules:
      - id: f-next
        when: f > 0
        status: info
        text:
          es: "Evalúe cómo cambiaría [[f]] si se duplica la velocidad [[v]]."
          en: "Evaluate how [[f]] would change if velocity [[v]] is doubled."

  eta:
    summary_rules:
      - id: eta-val
        when: eta > 0
        status: success
        text:
          es: "La escala de Kolmogorov [[eta]] es de {eta} m, indicando el tamaño de los remolinos más pequeños."
          en: "The Kolmogorov scale [[eta]] is {eta} m, indicating the size of the smallest eddies."
    physical_reading_rules:
      - id: eta-phys
        when: eta > 0
        status: success
        text:
          es: "En esta escala, la energía cinética se disipa finalmente en calor debido a la viscosidad del fluido."
          en: "At this scale, kinetic energy is finally dissipated into heat due to fluid viscosity."
    coherence_rules:
      - id: eta-coh
        when: eta < 1e-3
        status: success
        text:
          es: "Escala microscópica coherente con una turbulencia intensa."
          en: "Microscopic scale consistent with intense turbulence."
    model_validity_rules:
      - id: eta-valid
        when: eta > 0
        status: success
        text:
          es: "El modelo asume una cascada de energía en equilibrio estadístico."
          en: "The model assumes an energy cascade in statistical equilibrium."
    graph_rules:
      - id: eta-graph
        when: eta > 0
        status: info
        text:
          es: "Esta dimensión define el límite de resolución para capturar toda la física del flujo."
          en: "This dimension defines the resolution limit to capture all the flow physics."
    likely_errors:
      - id: eta-err
        when: eta > 0.1
        status: warning
        text:
          es: "Escala inusualmente grande; verifique la tasa de disipación [[epsilon]] o la viscosidad [[nu]]."
          en: "Unusually large scale; check the dissipation rate [[epsilon]] or viscosity [[nu]]."
    next_step_rules:
      - id: eta-next
        when: eta > 0
        status: info
        text:
          es: "Calcule el número de Reynolds local basado en esta escala."
          en: "Calculate the local Reynolds number based on this scale."

config:
  decimal_places: 4
  show_graphs: true
`;export{e as default};
