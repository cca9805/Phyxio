const e=`version: 5
topic:
  id: tubo-de-pitot
  title:
    es: Tubo de pitot
    en: Pitot Tube
formulas:
  - id: delta_pitot
    title:
      es: Diferencia de presión (Pitot)
      en: Pressure difference (Pitot)
    equation: dp = p_t - p
    latex: \\Delta p = p_t - p
    category: mecanica-fluidos
    relation_type: definicion
    physical_meaning:
      es: Define la presión dinámica como el exceso de la presión total sobre la estática.
      en: Defines dynamic pressure as the excess of total pressure over static pressure.
    constraints:
      es: Medidas en el mismo punto o línea de corriente.
      en: Measured at the same point or streamline.
    validity:
      es: Siempre válida para fluidos continuos.
      en: Always valid for continuous fluids.
    dimension_check: L1 = L1 (Presión)
    calculable: true
    motivo_no_calculable: ""
    used_in: [velocidad_pitot]
    interpretation_tags: [presion, estancamiento]
    result_semantics:
      es: Un valor positivo indica flujo en movimiento; cero indica reposo.
      en: A positive value indicates moving flow; zero indicates rest.
    domain_checks:
      - condition: p_t >= p
        message:
          es: La presión total no puede ser menor que la estática en condiciones normales.
          en: Total pressure cannot be less than static pressure under normal conditions.
    coherence_checks: []
    graph_implications:
      es: Determina el punto de trabajo en el eje horizontal del gráfico de Pitot.
      en: Determines the working point on the horizontal axis of the Pitot graph.
    pedagogical_triggers:
      es: ¿Qué pasaría si la sonda no está perfectamente alineada con el flujo?
      en: What would happen if the probe is not perfectly aligned with the flow?
    rearrangements:
      - target: dp
        equation: dp = p_t - p
        latex: \\Delta p = p_t - p
      - target: p_t
        equation: p_t = p + dp
        latex: p_t = p + \\Delta p
    descripcion:
      es: Relación fundamental que permite aislar la presión debida al movimiento.
      en: Fundamental relationship that allows isolating pressure due to movement.

  - id: velocidad_pitot
    title:
      es: Velocidad ideal del flujo (Pitot)
      en: Ideal flow velocity (Pitot)
    equation: v = sqrt(2 * dp / rho)
    latex: v = \\sqrt{\\frac{2\\Delta p}{\\rho}}
    category: cinematica-fluidos
    relation_type: derivacion-bernoulli
    physical_meaning:
      es: Relaciona la energía cinética del fluido con el aumento de presión en el estancamiento.
      en: Relates the kinetic energy of the fluid to the pressure increase at stagnation.
    constraints:
      es: Fluido incompresible, flujo estacionario, sin efectos viscosos significativos.
      en: Incompressible fluid, steady flow, no significant viscous effects.
    validity:
      es: Válida para Ma < 0.3 en gases; casi siempre válida en líquidos.
      en: Valid for Ma < 0.3 in gases; almost always valid in liquids.
    dimension_check: L/T = sqrt((ML-1T-2)/(ML-3)) = sqrt(L2T-2) = L/T
    calculable: true
    motivo_no_calculable: ""
    used_in: [interpretacion]
    interpretation_tags: [velocidad, bernoulli]
    result_semantics:
      es: La velocidad crece con la raíz de la presión; pequeños errores en dp se amortiguan en v.
      en: Velocity grows with the root of the pressure; small errors in dp are dampened in v.
    domain_checks:
      - condition: dp >= 0
        message:
          es: La diferencia de presión debe ser positiva para calcular una velocidad real.
          en: The pressure difference must be positive to calculate a real velocity.
      - condition: rho > 0
        message:
          es: La densidad debe ser mayor que cero.
          en: Density must be greater than zero.
    coherence_checks: []
    graph_implications:
      es: Define la forma de la curva en el gráfico de coordenadas.
      en: Defines the shape of the curve in the coordinate graph.
    pedagogical_triggers:
      es: ¿Por qué la velocidad no crece linealmente con la presión?
      en: Why does velocity not grow linearly with pressure?
    rearrangements:
      - target: v
        equation: v = sqrt(2 * dp / rho)
        latex: v = \\sqrt{\\frac{2\\Delta p}{\\rho}}
      - target: dp
        equation: dp = 0.5 * rho * v^2
        latex: \\Delta p = \\frac{1}{2}\\rho v^2
    descripcion:
      es: Ecuación operativa principal para el uso práctico de la sonda de Pitot.
      en: Main operational equation for the practical use of the Pitot probe.
ui:
  default_formula: velocidad_pitot
  groups:
    - title:
        es: Medición de velocidad
        en: Velocity measurement
      items:
        - delta_pitot
        - velocidad_pitot
`;export{e as default};
