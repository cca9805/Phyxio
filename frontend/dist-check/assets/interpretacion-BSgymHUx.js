const e=`version: 5
id: flujo-en-tuberias-interp
leaf_id: flujo-en-tuberias
scope: local
nombre:
  es: Análisis de Pérdidas y Caudal en Tuberías
  en: Pipe Flow and Pressure Drop Analysis

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
      es: Resumen del Sistema Hidráulico
      en: Hydraulic System Summary
  physical_reading:
    title:
      es: Lectura Física de las Pérdidas
      en: Physical Reading of Losses
  coherence:
    title:
      es: Coherencia y Consistencia
      en: Coherence and Consistency
  model_validity:
    title:
      es: Validez del Modelo Darcy-Weisbach
      en: Darcy-Weisbach Model Validity
  graph_reading:
    title:
      es: Análisis Gráfico de Gradiente
      en: Graphical Gradient Analysis
  likely_errors:
    title:
      es: Errores Conceptuales Detectados
      en: Detected Conceptual Errors
  next_step:
    title:
      es: Progresión Técnica
      en: Technical Progression

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [dp, f, Q, v, L, D, rho, mu, Re, A]
  formulas: [caudal_tubo, dp_tubo, area_circular]

targets:
  dp:
    summary_rules:
      - id: dp-loss-val
        when: dp > 0
        status: success
        text:
          es: "La caída de presión [[dp]] resume la pérdida de energía mecánica alcanzada por el fluido al vencer la resistencia viscosa."
          en: "The pressure drop [[dp]] resumes the mechanical energy loss reached by the fluid by overcoming viscous resistance."
    physical_reading_rules:
      - id: dp-friction-meaning
        when: dp > 50000
        status: warning
        text:
          es: "Una caída mayor a 0.5 bar indica un rozamiento significativo; el fluido está convirtiendo mucha presión en calor residual."
          en: "A drop greater than 0.5 bar indicates significant friction; the fluid is converting much pressure into waste heat."
      - id: dp-low-friction
        when: dp <= 50000
        status: success
        text:
          es: "La pérdida de carga es moderada, lo que sugiere un diseño eficiente o una longitud [[L]] corta."
          en: "The head loss is moderate, suggesting an efficient design or a short length [[L]]."
    coherence_rules:
      - id: dp-pos-check
        when: dp > 0
        status: success
        text:
          es: "Es coherente que [[dp]] sea positiva, indicando disipación irreversible de energía."
          en: "It is coherent that [[dp]] is positive, indicating irreversible energy dissipation."
    model_validity_rules:
      - id: dp-cavitation-risk
        when: dp > 200000
        status: warning
        text:
          es: "Atención: Caídas de presión extremas pueden provocar cavitación si la presión absoluta cae por debajo de la de vapor."
          en: "Attention: Extreme pressure drops can cause cavitation if absolute pressure falls below vapor pressure."
    graph_rules:
      - id: dp-graph-trend
        when: dp > 0
        status: success
        text:
          es: "Se visualiza como el gradiente de color en la tubería y la pendiente en el gráfico L-dp."
          en: "It is visualized as the color gradient in the pipe and the slope in the L-dp graph."
    likely_errors:
      - id: err-dp-neg
        when: dp < 0
        status: error
        text:
          es: "Error al suponer que la presión sube. En un tramo recto sin bomba, debes esperar que [[dp]] sea siempre positiva."
          en: "Error in assuming that pressure increases. In a straight section without a pump, you should expect [[dp]] to be always positive."
    next_step_rules:
      - id: next-dp-pump
        when: dp > 0
        status: info
        text:
          es: "Calcule la potencia de bomba necesaria para compensar esta pérdida [[dp]]."
          en: "Calculate the pump power needed to compensate for this loss [[dp]]."

  f:
    summary_rules:
      - id: f-friction-val
        when: f > 0
        status: success
        text:
          es: "El factor de fricción [[f]] cuantifica la aspereza del sistema y la resistencia viscosa."
          en: "The friction factor [[f]] quantifies the system's roughness and viscous resistance."
    physical_reading_rules:
      - id: f-turbulent-meaning
        when: f > 0.04
        status: info
        text:
          es: "Un factor elevado indica alta rugosidad relativa o una turbulencia muy desarrollada."
          en: "A high factor indicates high relative roughness or fully developed turbulence."
    coherence_rules:
      - id: f-range-check
        when: f > 0.005 and f < 0.15
        status: success
        text:
          es: "El valor de [[f]] está dentro del rango físico típico para tuberías comerciales."
          en: "The value of [[f]] is within the typical physical range for commercial pipes."
    model_validity_rules:
      - id: f-moody-valid
        when: f > 0
        status: success
        text:
          es: "Válido mientras se use el valor correspondiente al número de Reynolds [[Re]] y rugosidad correctos."
          en: "Valid as long as the value corresponding to the correct Reynolds number [[Re]] and roughness is used."
    graph_rules:
      - id: f-graph-effect
        when: f > 0
        status: success
        text:
          es: "Un aumento en [[f]] incrementa la pendiente de la caída de presión en el gráfico."
          en: "An increase in [[f]] increases the slope of the pressure drop in the graph."
    likely_errors:
      - id: err-f-laminar
        when: Re > 4000 and f == 64/Re
        status: error
        text:
          es: "Error: Usa fórmula laminar para un flujo [[Re]] turbulento."
          en: "Error: Using laminar formula for a turbulent [[Re]] flow."
    next_step_rules:
      - id: next-f-material
        when: f > 0.05
        status: info
        text:
          es: "Considere cambiar el material de la tubería por uno más liso (como PVC) para reducir [[f]]."
          en: "Consider changing the pipe material to a smoother one (like PVC) to reduce [[f]]."

  Q:
    summary_rules:
      - id: q-flow-val
        when: Q > 0
        status: success
        text:
          es: "El caudal [[Q]] es el volumen de fluido transportado por unidad de tiempo."
          en: "The flow rate [[Q]] is the volume of fluid transported per unit of time."
    physical_reading_rules:
      - id: q-continuity-meaning
        when: Q > 0
        status: success
        text:
          es: "Define la capacidad de transporte del sistema hidráulico."
          en: "Defines the transport capacity of the hydraulic system."
    coherence_rules:
      - id: q-area-v-check
        when: Q > 0
        status: success
        text:
          es: "Coherente con la relación [[Q]] = [[A]] * [[v]]."
          en: "Coherent with the relationship [[Q]] = [[A]] * [[v]]."
    model_validity_rules:
      - id: q-steady-state
        when: Q > 0
        status: success
        text:
          es: "Se asume caudal constante en régimen estacionario."
          en: "Constant flow rate is assumed in steady state."
    graph_rules:
      - id: q-graph-indicator
        when: Q > 0
        status: success
        text:
          es: "Determina la densidad de líneas de corriente en representaciones vectoriales."
          en: "Determines the density of streamlines in vector representations."
    likely_errors:
      - id: err-q-zero
        when: Q == 0
        status: info
        text:
          es: "Caudal nulo: el fluido está estático o la resistencia es infinita."
          en: "Zero flow: the fluid is static or the resistance is infinite."
    next_step_rules:
      - id: next-q-optimization
        when: Q > 0
        status: info
        text:
          es: "Verifique si el caudal satisface la demanda del proceso industrial."
          en: "Verify if the flow rate satisfies the industrial process demand."

  v:
    summary_rules:
      - id: v-velocity-val
        when: v > 0
        status: success
        text:
          es: "La velocidad media [[v]] determina la energía cinética del flujo."
          en: "The average velocity [[v]] determines the kinetic energy of the flow."
    physical_reading_rules:
      - id: v-erosion-warning
        when: v > 4
        status: warning
        text:
          es: "Velocidad elevada: riesgo de erosión prematura de las paredes del tubo."
          en: "High velocity: risk of premature erosion of the pipe walls."
      - id: v-sediment-warning
        when: v < 0.5
        status: warning
        text:
          es: "Velocidad baja: riesgo de sedimentación de partículas sólidas."
          en: "Low velocity: risk of solid particle sedimentation."
    coherence_rules:
      - id: v-pos-check
        when: v > 0
        status: success
        text:
          es: "La velocidad es consistente con la dirección del flujo."
          en: "The velocity is consistent with the flow direction."
    model_validity_rules:
      - id: v-mach-check
        when: v > 0
        status: success
        text:
          es: "Válido para flujo incompresible mientras la velocidad sea baja comparada con el sonido."
          en: "Valid for incompressible flow as long as velocity is low compared to sound."
    graph_rules:
      - id: v-profile-graph
        when: v > 0
        status: success
        text:
          es: "Define el perfil de velocidades visualizado en la sección de la tubería."
          en: "Defines the velocity profile visualized in the pipe section."
    likely_errors:
      - id: err-v-excessive
        when: v > 10
        status: warning
        text:
          es: "Atención: Velocidades muy altas suelen indicar un diámetro [[D]] insuficiente."
          en: "Attention: Very high velocities usually indicate an insufficient diameter [[D]]."
    next_step_rules:
      - id: next-v-design
        when: v > 0
        status: info
        text:
          es: "Ajuste el diámetro [[D]] para mantener la velocidad entre 1 y 2 m/s."
          en: "Adjust the diameter [[D]] to maintain velocity between 1 and 2 m/s."

  Re:
    summary_rules:
      - id: re-number-val
        when: Re > 0
        status: success
        text:
          es: "El número de Reynolds [[Re]] diagnostica el régimen de flujo."
          en: "The Reynolds number [[Re]] diagnoses the flow regime."
    physical_reading_rules:
      - id: re-turbulent
        when: Re > 4000
        status: info
        text:
          es: "Flujo Turbulento: la inercia domina sobre la viscosidad, generando remolinos."
          en: "Turbulent Flow: inertia dominates over viscosity, generating vortices."
      - id: re-laminar
        when: Re < 2300
        status: info
        text:
          es: "Flujo Laminar: las capas de fluido deslizan de forma ordenada."
          en: "Laminar Flow: fluid layers slide in an orderly fashion."
    coherence_rules:
      - id: re-calculation
        when: Re > 0
        status: success
        text:
          es: "Consistente con los valores de [[v]], [[D]], [[rho]] y [[mu]]."
          en: "Consistent with the values of [[v]], [[D]], [[rho]], and [[mu]]."
    model_validity_rules:
      - id: re-transition-zone
        when: Re >= 2300 and Re <= 4000
        status: warning
        text:
          es: "Zona de transición: el comportamiento del flujo es inestable."
          en: "Transition zone: flow behavior is unstable."
    graph_rules:
      - id: re-moody-point
        when: Re > 0
        status: success
        text:
          es: "Representa la posición horizontal en el diagrama de Moody."
          en: "Represents the horizontal position on the Moody diagram."
    likely_errors:
      - id: err-re-viscosity
        when: Re < 0.1
        status: info
        text:
          es: "Reynolds extremadamente bajo: verifique si las unidades de viscosidad [[mu]] son correctas."
          en: "Extremely low Reynolds: check if viscosity [[mu]] units are correct."
    next_step_rules:
      - id: next-re-friction
        when: Re > 0
        status: info
        text:
          es: "Use este valor para determinar el factor de fricción [[f]] adecuado."
          en: "Use this value to determine the appropriate friction factor [[f]]."

  A:
    summary_rules:
      - id: a-area-val
        when: A > 0
        status: success
        text:
          es: "El área [[A]] de la sección transversal determina la velocidad para un caudal dado."
          en: "The cross-sectional area [[A]] determines the velocity for a given flow rate."
    physical_reading_rules:
      - id: a-area-meaning
        when: A > 0
        status: success
        text:
          es: "Representa el espacio disponible para el paso del fluido."
          en: "Represents the space available for fluid passage."
    coherence_rules:
      - id: a-diameter-check
        when: A > 0
        status: success
        text:
          es: "Coherente con el diámetro [[D]] del conducto."
          en: "Coherent with the conduit diameter [[D]]."
    model_validity_rules:
      - id: a-area-const
        when: A > 0
        status: success
        text:
          es: "Se asume sección constante en este modelo de Darcy-Weisbach."
          en: "Constant section is assumed in this Darcy-Weisbach model."
    graph_rules:
      - id: a-graph-scale
        when: A > 0
        status: success
        text:
          es: "Define la escala geométrica de la tubería en el gráfico Svg."
          en: "Defines the pipe's geometric scale in the Svg graph."
    likely_errors:
      - id: err-a-units
        when: A > 100
        status: warning
        text:
          es: "Área inusualmente grande: verifique si las unidades están en metros cuadrados."
          en: "Unusually large area: check if units are in square meters."
    next_step_rules:
      - id: next-a-sizing
        when: A > 0
        status: info
        text:
          es: "Optimice el área para reducir pérdidas por fricción."
          en: "Optimize the area to reduce friction losses."

  D:
    summary_rules:
      - id: d-diameter-val
        when: D > 0
        status: success
        text:
          es: "El diámetro [[D]] es la dimensión característica del conducto circular."
          en: "The diameter [[D]] is the characteristic dimension of the circular conduit."
    physical_reading_rules:
      - id: d-size-meaning
        when: D > 0
        status: success
        text:
          es: "Define la escala del sistema de transporte de fluidos."
          en: "Defines the scale of the fluid transport system."
    coherence_rules:
      - id: d-pos-check
        when: D > 0
        status: success
        text:
          es: "El diámetro debe ser positivo y medido internamente."
          en: "The diameter must be positive and measured internally."
    model_validity_rules:
      - id: d-validity-range
        when: D > 0
        status: success
        text:
          es: "Modelo válido para tuberías de diámetro constante."
          en: "Model valid for constant diameter pipes."
    graph_rules:
      - id: d-graph-width
        when: D > 0
        status: success
        text:
          es: "Representado como el ancho del conducto en la visualización."
          en: "Represented as the conduit width in the visualization."
    likely_errors:
      - id: err-d-small
        when: D < 0.001
        status: warning
        text:
          es: "Diámetro muy pequeño: efectos de capilaridad podrían ser relevantes."
          en: "Very small diameter: capillarity effects might be relevant."
    next_step_rules:
      - id: next-d-selection
        when: D > 0
        status: info
        text:
          es: "Seleccione un diámetro comercial estándar según normas ASTM o ISO."
          en: "Select a standard commercial diameter according to ASTM or ISO standards."
`;export{e as default};
