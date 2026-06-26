const e=`version: 2
id: interpretacion-efecto-venturi
leaf_id: efecto-venturi
nombre:
  es: "Interpretación del Efecto Venturi"
  en: "Interpretation of the Venturi Effect"
scope: null
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: aplicaciones-de-bernoulli
ruta_relativa: fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/aplicaciones-de-bernoulli/efecto-venturi
dependencies:
  formulas:
  - continuity_venturi
  - bernoulli_venturi
  - dp_venturi
  magnitudes:
  - v1
  - v2
  - A1
  - A2
  - p1
  - p2
  - rho
  - dp
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
      es: "Resumen físico"
      en: "Physical summary"
  physical_reading:
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    title:
      es: "Coherencia"
      en: "Coherence"
  model_validity:
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    title:
      es: "Lectura gráfica"
      en: "Graph reading"
  likely_errors:
    title:
      es: "Errores probables"
      en: "Likely errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next step"
targets:
  v2:
    summary_rules:
    - id: v2_summary_venturi
      when: v2 > v1
      status: ok
      text:
        es: "La velocidad aumenta en el estrechamiento para conservar el caudal."
        en: "Velocity increases in the constriction to conserve flow rate."
    coherence_rules:
    - id: v2_coherence_positive
      when: v2 < 0
      status: error
      text:
        es: "La velocidad del flujo debe ser positiva. Revisa el balance de áreas."
        en: "Flow velocity must be positive. Check the area balance."
    physical_reading_rules:
    - id: v2_reading_acceleration
      when: 'true'
      status: info
      text:
        es: "Este aumento de velocidad significa que el fluido acelera porque atraviesa un área menor."
        en: "This velocity increase means that the fluid accelerates because it crosses a smaller area."
    model_validity_rules:
    - id: v2_validity_incompressible
      when: 'true'
      status: ok
      text:
        es: "El modelo asume fluido incompresible. Si v2 se acerca a la velocidad del sonido, el modelo falla."
        en: "The model assumes incompressible fluid. If v2 approaches the speed of sound, the model fails."
    graph_rules:
    - id: v2_graph_venturi
      when: 'true'
      status: info
      text:
        es: "En la gráfica, un v2 mayor desplaza el punto hacia una mayor caída de presión."
        en: "In the graph, a higher v2 shifts the point towards a greater pressure drop."
    likely_errors:
    - id: v2_error_continuity
      when: 'true'
      status: warning
      text:
        es: "Asegúrate de no haber usado radios en lugar de áreas en la ecuación de continuidad."
        en: "Make sure you haven't used radii instead of areas in the continuity equation."
    next_step_rules:
    - id: v2_next_bernoulli
      when: 'true'
      status: info
      text:
        es: "Ahora usa v2 en la ecuación de Bernoulli para hallar la caída de presión."
        en: "Now use v2 in Bernoulli's equation to find the pressure drop."
  v1:
    summary_rules:
    - id: v1_summary_venturi
      when: 'true'
      status: info
      text:
        es: "v1 representa la velocidad del flujo antes del estrechamiento."
        en: "v1 represents the flow velocity before the constriction."
    coherence_rules:
    - id: v1_coherence_positive
      when: v1 < 0
      status: error
      text:
        es: "La velocidad de entrada debe ser positiva."
        en: "The inlet velocity must be positive."
    physical_reading_rules:
    - id: v1_reading_reference
      when: 'true'
      status: info
      text:
        es: "v1 indica el estado inicial del flujo por tanto es la referencia de energía cinética."
        en: "v1 indicates the initial state of the flow therefore it is the kinetic energy reference."
    model_validity_rules:
    - id: v1_validity_steady
      when: 'true'
      status: ok
      text:
        es: "Se asume que v1 es constante en el tiempo (régimen estacionario)."
        en: "v1 is assumed to be constant over time (steady state)."
    graph_rules:
    - id: v1_graph_venturi
      when: 'true'
      status: info
      text:
        es: "Variar v1 desplaza la curva de presión de forma parabólica."
        en: "Varying v1 shifts the pressure curve parabolically."
    likely_errors:
    - id: v1_error_measurement
      when: 'true'
      status: warning
      text:
        es: "Asegúrate de medir v1 en la sección ancha, no en la garganta."
        en: "Make sure to measure v1 in the wide section, not in the throat."
    next_step_rules:
    - id: v1_next_continuity
      when: 'true'
      status: info
      text:
        es: "Usa v1 y la relación de áreas para hallar v2."
        en: "Use v1 and the area ratio to find v2."
  p1:
    summary_rules:
    - id: p1_summary_venturi
      when: 'true'
      status: info
      text:
        es: "p1 es la presión estática en la sección ancha de la tubería."
        en: "p1 is the static pressure in the wide section of the pipe."
    coherence_rules:
    - id: p1_coherence_positive
      when: p1 < 0
      status: warning
      text:
        es: "Una presión p1 negativa (manométrica) indica vacío parcial inicial."
        en: "A negative (gauge) pressure p1 indicates an initial partial vacuum."
    physical_reading_rules:
    - id: p1_reading_potential
      when: 'true'
      status: info
      text:
        es: "La presión p1 significa energía potencial estática que se compensa con la dinámica en Bernoulli."
        en: "Pressure p1 means static potential energy that balances with dynamics in Bernoulli."
    model_validity_rules:
    - id: p1_validity_static
      when: 'true'
      status: ok
      text:
        es: "p1 debe medirse con una toma estática perpendicular al flujo."
        en: "p1 must be measured with a static tap perpendicular to the flow."
    graph_rules:
    - id: p1_graph_venturi
      when: 'true'
      status: info
      text:
        es: "p1 fija el nivel de referencia superior en la gráfica de presiones."
        en: "p1 sets the upper reference level in the pressure graph."
    likely_errors:
    - id: p1_error_total_pressure
      when: 'true'
      status: warning
      text:
        es: "No confundas la presión estática p1 con la presión total (estancamiento)."
        en: "Do not confuse static pressure p1 with total (stagnation) pressure."
    next_step_rules:
    - id: p1_next_bernoulli
      when: 'true'
      status: info
      text:
        es: "Resta p2 a p1 para obtener la caída de presión operativa."
        en: "Subtract p2 from p1 to obtain the operational pressure drop."
  p2:
    summary_rules:
    - id: p2_summary_low
      when: p2 < p1
      status: ok
      text:
        es: "Se confirma el efecto Venturi: la presión es menor en la zona de alta velocidad."
        en: "Venturi effect confirmed: pressure is lower in the high-velocity zone."
    coherence_rules:
    - id: p2_coherence_drop
      when: p2 > p1
      status: error
      text:
        es: "La presión en el estrechamiento no puede ser mayor que en la sección ancha (salvo aporte externo)."
        en: "Pressure in the constriction cannot be higher than in the wide section (unless there is external input)."
    physical_reading_rules:
    - id: p2_reading_energy
      when: 'true'
      status: info
      text:
        es: "La caída de presión depende de la aceleración porque la energía total se conserva."
        en: "The pressure drop depends on acceleration because total energy is conserved."
    model_validity_rules:
    - id: p2_validity_cavitation
      when: p2 < -90000
      status: danger
      text:
        es: "Riesgo de cavitación: la presión es tan baja que el fluido podría hervir."
        en: "Risk of cavitation: the pressure is so low that the fluid could boil."
    graph_rules:
    - id: p2_graph_reading
      when: 'true'
      status: info
      text:
        es: "La diferencia p1 - p2 es lo que se representa como Delta p en el eje vertical."
        en: "The difference p1 - p2 is what is represented as Delta p on the vertical axis."
    likely_errors:
    - id: p2_error_units
      when: 'true'
      status: warning
      text:
        es: "Revisa que todas las presiones y la densidad estén en unidades del SI (Pa y kg/m³)."
        en: "Check that all pressures and density are in SI units (Pa and kg/m³)."
    next_step_rules:
    - id: p2_next_flowmeter
      when: 'true'
      status: info
      text:
        es: "Esta presión permite calcular el caudal si el tubo se usa como medidor."
        en: "This pressure allows for flow rate calculation if the tube is used as a meter."
  dp:
    summary_rules:
    - id: dp_summary_positive
      when: dp > 0
      status: ok
      text:
        es: "La caída de presión es positiva, indicando una succión efectiva en la garganta."
        en: "The pressure drop is positive, indicating effective suction in the throat."
    coherence_rules:
    - id: dp_coherence_scaling
      when: 'true'
      status: info
      text:
        es: "Delta p debe escalar con el cuadrado de la velocidad de entrada."
        en: "Delta p should scale with the square of the inlet velocity."
    physical_reading_rules:
    - id: dp_reading_performance
      when: 'true'
      status: info
      text:
        es: "Delta p se opone a la presión de entrada porque domina el efecto de succión."
        en: "Delta p opposes the inlet pressure because the suction effect dominates."
    model_validity_rules:
    - id: dp_validity_viscosity
      when: 'true'
      status: warning
      text:
        es: "En tubos reales, la viscosidad hará que Delta p sea ligeramente mayor que el ideal."
        en: "In real tubes, viscosity will cause Delta p to be slightly higher than ideal."
    graph_rules:
    - id: dp_graph_parabolic
      when: 'true'
      status: ok
      text:
        es: "El perfil parabólico en la gráfica confirma la dependencia con v1²."
        en: "The parabolic profile in the graph confirms the dependence on v1²."
    likely_errors:
    - id: dp_error_sign
      when: dp < 0
      status: error
      text:
        es: "Una caída de presión negativa indicaría que el fluido frena, lo cual contradice el estrechamiento."
        en: "A negative pressure drop would indicate the fluid is slowing down, contradicting the constriction."
    next_step_rules:
    - id: dp_next_design
      when: 'true'
      status: info
      text:
        es: "Usa este valor para dimensionar la bomba o el sensor necesario."
        en: "Use this value to size the pump or sensor needed."
`;export{e as default};
