const e=`version: 5
id: flujo-laminar-interp
leaf_id: flujo-laminar
scope: local
nombre:
  es: "Análisis de Flujo Laminar"
  en: "Laminar Flow Analysis"

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
      es: "Resumen del Régimen"
      en: "Regime Summary"
  physical_reading:
    title:
      es: "Lectura Física"
      en: "Physical Reading"
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
      es: "Análisis del Perfil"
      en: "Profile Analysis"
  likely_errors:
    title:
      es: "Alertas de Interpretación"
      en: "Interpretation Alerts"
  next_step:
    title:
      es: "Pasos Sugeridos"
      en: "Suggested Steps"

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [eta, v_max, R, L, deltaP, Q, Re, r]
  formulas: [poiseuille, v_max_def, perfil_velocidad]

targets:
  v_max:
    summary_rules:
      - id: vmax-val
        when: v_max > 0
        status: success
        text:
          es: "La velocidad máxima en el eje es [[v_max]] = {v_max} m/s, lo que indica un transporte de masa centralizado."
          en: "The maximum axial velocity is [[v_max]] = {v_max} m/s, indicating centralized mass transport."
    physical_reading_rules:
      - id: vmax-phys
        when: v_max > 0
        status: success
        text:
          es: "Esta velocidad representa el punto de menor resistencia viscosa, donde las fuerzas impulsoras del gradiente de presión superan al rozamiento interno."
          en: "This velocity represents the point of lowest viscous resistance, where the pressure gradient driving forces overcome internal friction."
    coherence_rules:
      - id: vmax-coh
        when: v_max == (deltaP * R^2) / (4 * eta * L)
        status: success
        text:
          es: "Valor coherente con la ley de Poiseuille para flujo en tuberías."
          en: "Value consistent with Poiseuille's law for pipe flow."
    model_validity_rules:
      - id: vmax-valid
        when: v_max > 0
        status: success
        text:
          es: "Válido mientras el número de Reynolds se mantenga por debajo del umbral crítico (~2300)."
          en: "Valid as long as the Reynolds number stays below the critical threshold (~2300)."
    graph_rules:
      - id: vmax-graph
        when: v_max > 0
        status: success
        text:
          es: "Se visualiza como el vértice de la parábola en el centro del conducto."
          en: "It is visualized as the vertex of the parabola in the center of the duct."
    likely_errors:
      - id: vmax-err
        when: v_max > 100
        status: warning
        text:
          es: "Velocidad inusualmente alta para un régimen laminar; verifique si el flujo es realmente laminar o si hay un error en el gradiente de presión."
          en: "Unusually high velocity for a laminar regime; verify if the flow is truly laminar or if there is an error in the pressure gradient."
    next_step_rules:
      - id: vmax-next
        when: v_max > 0
        status: info
        text:
          es: "Calcule el caudal [[Q]] integrando este perfil de velocidades."
          en: "Calculate the flow rate [[Q]] by integrating this velocity profile."

  eta:
    summary_rules:
      - id: eta-val
        when: eta > 0
        status: success
        text:
          es: "La viscosidad dinámica [[eta]] es de {eta} Pa·s, actuando como el amortiguador principal del caos turbulento."
          en: "The dynamic viscosity [[eta]] is {eta} Pa·s, acting as the main buffer against turbulent chaos."
    physical_reading_rules:
      - id: eta-phys
        when: eta > 0.1
        status: success
        text:
          es: "Fluido altamente viscoso: las láminas de fluido presentan una fuerte resistencia al deslizamiento entre ellas, dominando sobre la inercia."
          en: "Highly viscous fluid: fluid layers present strong resistance to sliding between them, dominating over inertia."
    coherence_rules:
      - id: eta-coh
        when: eta > 0
        status: success
        text:
          es: "Valor dentro del rango esperado para fluidos reales."
          en: "Value within the expected range for real fluids."
    model_validity_rules:
      - id: eta-valid
        when: eta > 0
        status: success
        text:
          es: "El modelo asume un fluido newtoniano con viscosidad constante."
          en: "The model assumes a Newtonian fluid with constant viscosity."
    graph_rules:
      - id: eta-graph
        when: eta > 0
        status: info
        text:
          es: "Un aumento en [[eta]] suaviza el gradiente de velocidad cerca de las paredes."
          en: "An increase in [[eta]] smooths the velocity gradient near the walls."
    likely_errors:
      - id: eta-err
        when: eta <= 0
        status: error
        text:
          es: "Error conceptual: La viscosidad debe ser positiva. Un valor nulo implicaría un fluido ideal donde no existe perfil parabólico."
          en: "Conceptual error: Viscosity must be positive. A zero value would imply an ideal fluid where no parabolic profile exists."
      - id: eta-const-err
        when: eta > 0
        status: warning
        text:
          es: "Recuerde que el modelo asume viscosidad constante. Si el fluido es sangre o un polímero, el perfil real podría ser diferente."
          en: "Remember the model assumes constant viscosity. If the fluid is blood or a polymer, the actual profile might be different."
    next_step_rules:
      - id: eta-next
        when: eta > 0
        status: info
        text:
          es: "Observe cómo varía [[eta]] con la temperatura en el manual de laboratorio."
          en: "Observe how [[eta]] varies with temperature in the lab manual."

  deltaP:
    summary_rules:
      - id: dp-val
        when: deltaP > 0
        status: success
        text:
          es: "La caída de presión [[deltaP]] es de {deltaP} Pa, que es el motor impulsor del flujo."
          en: "The pressure drop [[deltaP]] is {deltaP} Pa, which is the driving force of the flow."
    physical_reading_rules:
      - id: dp-phys
        when: deltaP > 0
        status: success
        text:
          es: "Este gradiente de presión realiza el trabajo necesario para vencer la fricción viscosa interna."
          en: "This pressure gradient performs the work necessary to overcome internal viscous friction."
    coherence_rules:
      - id: dp-coh
        when: deltaP > 0
        status: success
        text:
          es: "Presión positiva consistente con la dirección del flujo."
          en: "Positive pressure consistent with flow direction."
    model_validity_rules:
      - id: dp-valid
        when: deltaP > 0
        status: success
        text:
          es: "Se asume un gradiente de presión constante a lo largo de toda la tubería."
          en: "A constant pressure gradient is assumed along the entire pipe."
    graph_rules:
      - id: dp-graph
        when: deltaP > 0
        status: info
        text:
          es: "Un mayor [[deltaP]] 'estira' la parábola aumentando la velocidad máxima."
          en: "A higher [[deltaP]] 'stretches' the parabola by increasing the maximum velocity."
    likely_errors:
      - id: dp-err
        when: deltaP <= 0
        status: error
        text:
          es: "Error: Sin diferencia de presión no puede existir flujo viscoso en una tubería horizontal."
          en: "Error: Without a pressure difference, viscous flow cannot exist in a horizontal pipe."
    next_step_rules:
      - id: dp-next
        when: deltaP > 0
        status: info
        text:
          es: "Verifique si la bomba impulsora puede mantener este gradiente de presión de forma continua."
          en: "Verify if the driving pump can maintain this pressure gradient continuously."

  Q:
    summary_rules:
      - id: q-val
        when: Q > 0
        status: success
        text:
          es: "El caudal volumétrico [[Q]] es de {Q} m³/s, representando el transporte de masa neto."
          en: "The volumetric flow rate [[Q]] is {Q} m³/s, representing the net mass transport."
    physical_reading_rules:
      - id: q-phys
        when: Q > 0
        status: success
        text:
          es: "Este caudal depende fuertemente de la cuarta potencia del radio [[R]], lo que permite un control hidráulico preciso."
          en: "This flow rate depends strongly on the fourth power of the radius [[R]], allowing for precise hydraulic control."
    coherence_rules:
      - id: q-coh
        when: Q == (v_max / 2) * (3.14159 * R^2)
        status: success
        text:
          es: "El caudal coincide con la velocidad media multiplicada por la sección transversal."
          en: "The flow rate matches the average velocity multiplied by the cross section."
    model_validity_rules:
      - id: q-valid
        when: Q > 0
        status: success
        text:
          es: "Válido para conductos de sección circular constante con flujo totalmente desarrollado."
          en: "Valid for ducts of constant circular section with fully developed flow."
    graph_rules:
      - id: q-graph
        when: Q > 0
        status: info
        text:
          es: "El área bajo el perfil parabólico es proporcional al caudal total."
          en: "The area under the parabolic profile is proportional to the total flow rate."
    likely_errors:
      - id: q-err
        when: Q > 1000
        status: warning
        text:
          es: "Caudal extremadamente alto; verifique si las dimensiones del conducto son coherentes con un régimen laminar."
          en: "Extremely high flow rate; verify if the duct dimensions are consistent with a laminar regime."
    next_step_rules:
      - id: q-next
        when: Q > 0
        status: info
        text:
          es: "Determine la caída de presión [[deltaP]] necesaria para mantener este caudal."
          en: "Determine the pressure drop [[deltaP]] needed to maintain this flow rate."

  r:
    summary_rules:
      - id: r-val
        when: r >= 0
        status: success
        text:
          es: "Se analiza la velocidad en la posición radial [[r]] = {r} m."
          en: "Velocity is analyzed at radial position [[r]] = {r} m."
    physical_reading_rules:
      - id: r-phys
        when: r == 0
        status: success
        text:
          es: "Punto en el eje central: la velocidad es máxima debido a la distancia máxima respecto a las paredes frenantes."
          en: "Point at the central axis: velocity is maximum due to the maximum distance from the braking walls."
    coherence_rules:
      - id: r-coh
        when: r > R
        status: error
        text:
          es: "Error: La posición radial no puede ser mayor que el radio de la tubería."
          en: "Error: Radial position cannot be greater than the pipe radius."
    model_validity_rules:
      - id: r-valid
        when: r >= 0
        status: success
        text:
          es: "Válido para cualquier punto dentro del dominio del fluido."
          en: "Valid for any point within the fluid domain."
    graph_rules:
      - id: r-graph
        when: r >= 0
        status: info
        text:
          es: "Corresponde a la coordenada horizontal en la gráfica del perfil."
          en: "Corresponds to the horizontal coordinate in the profile plot."
    likely_errors:
      - id: r-err
        when: r < 0
        status: error
        text:
          es: "Error: El radio local debe ser una magnitud no negativa."
          en: "Error: Local radius must be a non-negative magnitude."
    next_step_rules:
      - id: r-next
        when: r >= 0
        status: info
        text:
          es: "Varíe [[r]] para observar cómo decae la velocidad al acercarse a la pared."
          en: "Vary [[r]] to observe how velocity decays when approaching the wall."

config:
  decimal_places: 4
  show_graphs: true
`;export{e as default};
