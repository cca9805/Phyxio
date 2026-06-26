const e=`version: 5
id: plano-inclinado
nombre:
  es: Plano inclinado
  en: Inclined Plane
area: mecanica
bloque: aplicaciones
subbloque: maquinas-simples

formulas:
  - id: ley_plano_ideal
    title:
      es: Ley fundamental del plano ideal
      en: Fundamental law of the ideal plane
    equation: P = W * (h / L)
    latex: "P = W \\\\cdot \\\\frac{h}{L}"
    rearrangements:
      - target: P
        equation: P = W * (h / L)
        latex: "P = W \\\\cdot \\\\frac{h}{L}"
      - target: W
        equation: W = P * (L / h)
        latex: "W = P \\\\cdot \\\\frac{L}{h}"
      - target: h
        equation: h = (P * L) / W
        latex: "h = \\\\frac{P \\\\cdot L}{W}"
      - target: L
        equation: L = (W * h) / P
        latex: "L = \\\\frac{W \\\\cdot h}{P}"
    physical_meaning:
      es: Relaciona el esfuerzo necesario con el peso y la geometría de la rampa en ausencia de fricción.
      en: Relates the required effort to the weight and the ramp geometry in the absence of friction.
    category: "estatica"
    relation_type: "ley"
    constraints: ["P <= W", "h <= L"]
    validity:
      es: Modelo sin fricción.
      en: Frictionless model.
    dimension_check: "F = F * (L / L)"
    calculable: true
    motivo_no_calculable: null
    used_in: ["maquinas-simples", "construccion"]
    interpretation_tags: ["maquina-simple", "ventaja-mecanica", "diseño"]
    result_semantics: "fuerza"
    domain_checks:
      - condition: "L <= 0"
        severity: "error"
        message:
          es: "La longitud de la rampa debe ser positiva."
          en: "The ramp length must be positive."
    coherence_checks:
      - condition: "P > W"
        severity: "warning"
        message:
          es: "El esfuerzo es mayor que el peso; la rampa no está proporcionando ventaja mecánica."
          en: "The effort is greater than the weight; the ramp is not providing mechanical advantage."
    graph_implications:
      es: "Relación lineal entre P y la inversa de L."
      en: "Linear relationship between P and the inverse of L."
    pedagogical_triggers: ["regla_de_oro", "intercambio_fuerza_distancia"]

  - id: ventaja_mecanica_geometria
    title:
      es: Ventaja mecánica geométrica
      en: Geometric mechanical advantage
    equation: VM = L / h
    latex: "VM = \\\\frac{L}{h}"
    rearrangements:
      - target: VM
        equation: VM = L / h
        latex: "VM = \\\\frac{L}{h}"
      - target: L
        equation: L = VM * h
        latex: "L = VM \\\\cdot h"
      - target: h
        equation: h = L / VM
        latex: "h = \\\\frac{L}{VM}"
    physical_meaning:
      es: Factor de multiplicación de fuerza basado en las dimensiones de la rampa.
      en: Force multiplication factor based on ramp dimensions.
    category: "geometria"
    relation_type: "propiedad"
    constraints: ["VM >= 1"]
    validity:
      es: Independiente del rozamiento.
      en: Independent of friction.
    dimension_check: "1 = L / L"
    calculable: true
    motivo_no_calculable: null
    used_in: ["maquinas-simples"]
    interpretation_tags: ["geometria", "diseño", "eficiencia"]
    result_semantics: "ratio"
    domain_checks:
      - condition: "h > L"
        severity: "error"
        message:
          es: "Incoherencia geométrica: la altura no puede ser mayor que la hipotenusa."
          en: "Geometric inconsistency: height cannot be greater than the hypotenuse."
    coherence_checks: []
    graph_implications:
      es: "Define la pendiente de la rampa en el Svg."
      en: "Defines the ramp slope in the Svg."
    pedagogical_triggers: ["efecto_rampa"]

  - id: descomposicion_paralela
    title:
      es: Componente paralela del peso
      en: Parallel weight component
    equation: Wpar = W * sin(theta)
    latex: "W_{\\\\parallel} = W \\\\cdot \\\\sin\\\\theta"
    rearrangements:
      - target: Wpar
        equation: Wpar = W * sin(theta)
        latex: "W_{\\\\parallel} = W \\\\cdot \\\\sin\\\\theta"
      - target: W
        equation: W = Wpar / sin(theta)
        latex: "W = \\\\frac{W_{\\\\parallel}}{\\\\sin\\\\theta}"
    physical_meaning:
      es: Fuerza de gravedad que tiende a deslizar el cuerpo hacia abajo.
      en: Gravity force tending to slide the body downwards.
    category: "dinamica"
    relation_type: "componente"
    constraints: ["Wpar <= W"]
    validity:
      es: Ángulo medido respecto a la horizontal.
      en: Angle measured relative to the horizontal.
    dimension_check: "F = F * 1"
    calculable: true
    motivo_no_calculable: null
    used_in: ["dinamica", "estatica"]
    interpretation_tags: ["vectores", "gravedad", "deslizamiento"]
    result_semantics: "fuerza"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Representada por el vector azul paralelo al plano en el Dcl."
      en: "Represented by the blue vector parallel to the plane in the Dcl."
    pedagogical_triggers: ["descomposicion_vectorial"]

  - id: normal_plano
    title:
      es: Fuerza normal en plano inclinado
      en: Normal force on inclined plane
    equation: N = W * cos(theta)
    latex: "N = W \\\\cdot \\\\cos\\\\theta"
    rearrangements:
      - target: N
        equation: N = W * cos(theta)
        latex: "N = W \\\\cdot \\\\cos\\\\theta"
      - target: W
        equation: W = N / cos(theta)
        latex: "W = \\\\frac{N}{\\\\cos\\\\theta}"
    physical_meaning:
      es: Reacción de la superficie perpendicular al plano.
      en: Surface reaction perpendicular to the plane.
    category: "dinamica"
    relation_type: "reaccion"
    constraints: ["N <= W"]
    validity:
      es: Sin fuerzas externas verticales adicionales.
      en: No additional vertical external forces.
    dimension_check: "F = F * 1"
    calculable: true
    motivo_no_calculable: null
    used_in: ["dinamica", "rozamiento"]
    interpretation_tags: ["fuerzas", "contacto"]
    result_semantics: "fuerza"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Representada por el vector perpendicular a la rampa en el Dcl."
      en: "Represented by the vector perpendicular to the ramp in the Dcl."
    pedagogical_triggers: ["tercera_ley_newton"]

  - id: fuerza_rozamiento
    title:
      es: Fuerza de rozamiento dinámico
      en: Dynamic friction force
    equation: f = mu * N
    latex: "f = \\\\mu \\\\cdot N"
    rearrangements:
      - target: f
        equation: f = mu * N
        latex: "f = \\\\mu \\\\cdot N"
      - target: mu
        equation: mu = f / N
        latex: "\\\\mu = \\\\frac{f}{N}"
    physical_meaning:
      es: Fuerza de oposición al deslizamiento debida a la rugosidad.
      en: Opposition force to sliding due to roughness.
    category: "dinamica"
    relation_type: "ley_empirica"
    constraints: ["mu >= 0"]
    validity:
      es: Modelo de Coulomb.
      en: Coulomb model.
    dimension_check: "F = 1 * F"
    calculable: true
    motivo_no_calculable: null
    used_in: ["dinamica", "maquinas-reales"]
    interpretation_tags: ["rozamiento", "disipacion"]
    result_semantics: "fuerza"
    domain_checks:
      - condition: "mu < 0"
        severity: "error"
        message:
          es: "El coeficiente de rozamiento no puede ser negativo."
          en: "The friction coefficient cannot be negative."
    coherence_checks: []
    graph_implications:
      es: "Vector opuesto al vector velocidad en el Svg."
      en: "Vector opposite to the velocity vector in the Svg."
    pedagogical_triggers: ["calor_friccion"]

  - id: rendimiento_plano
    title:
      es: Eficiencia o rendimiento
      en: Efficiency
    equation: eta = (W * h) / (P * L)
    latex: "\\\\eta = \\\\frac{W \\\\cdot h}{P \\\\cdot L}"
    rearrangements:
      - target: eta
        equation: eta = (W * h) / (P * L)
        latex: "\\\\eta = \\\\frac{W \\\\cdot h}{P \\\\cdot L}"
    physical_meaning:
      es: Relación entre el trabajo útil de elevación y el trabajo total invertido.
      en: Ratio between useful lifting work and total invested work.
    category: "energia"
    relation_type: "ratio"
    constraints: ["eta <= 1"]
    validity:
      es: Balances energéticos reales.
      en: Real energy balances.
    dimension_check: "1 = (F * L) / (F * L)"
    calculable: true
    motivo_no_calculable: null
    used_in: ["maquinas-reales", "termodinamica"]
    interpretation_tags: ["energia", "eficiencia"]
    result_semantics: "ratio"
    domain_checks:
      - condition: "eta > 1"
        severity: "error"
        message:
          es: "Rendimiento imposible: viola la conservación de la energía."
          en: "Impossible efficiency: violates energy conservation."
    coherence_checks: []
    graph_implications:
      es: "Visualizado en la barra de eficiencia del simulador."
      en: "Visualized in the simulator's efficiency bar."
    pedagogical_triggers: ["perdidas_energeticas"]

  - id: relacion_h_L
    title:
      es: Relación geométrica de elevación
      en: Geometric elevation relationship
    equation: h = L * sin(theta)
    latex: "h = L \\\\cdot \\\\sin\\\\theta"
    rearrangements:
      - target: h
        equation: h = L * sin(theta)
        latex: "h = L \\\\cdot \\\\sin\\\\theta"
      - target: L
        equation: L = h / sin(theta)
        latex: "L = \\\\frac{h}{\\\\sin\\\\theta}"
    physical_meaning:
      es: Define la altura alcanzada en función de la longitud recorrida y la inclinación.
      en: Defines the height reached based on the length traveled and the inclination.
    category: "geometria"
    relation_type: "identidad"
    constraints: []
    validity:
      es: Geometría básica del triángulo rectángulo.
      en: Basic right triangle geometry.
    dimension_check: "L = L * 1"
    calculable: true
    motivo_no_calculable: null
    used_in: ["geometria", "rampas"]
    interpretation_tags: ["geometria", "rampa", "diseño"]
    result_semantics: "distancia"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Determina la altura final del bloque en el Svg."
      en: "Determines the final block height in the Svg."
    pedagogical_triggers: ["geometria_basica"]

  - id: peso_total
    title:
      es: "Peso total"
      en: "Total weight"
    equation: "W = m * g"
    latex: "W = m \\\\cdot g"
    rearrangements:
      - target: W
        equation: "W = m * g"
        latex: "W = m \\\\cdot g"
      - target: m
        equation: "m = W / g"
        latex: "m = \\\\frac{W}{g}"
    physical_meaning:
      es: "Fuerza gravitatoria que actúa sobre la masa m."
      en: "Gravitational force acting on mass m."
    category: "dinamica"
    relation_type: "causal"
    constraints: ["m >= 0"]
    validity:
      es: "Cerca de la superficie terrestre."
      en: "Near the Earth's surface."
    dimension_check: "F = M * (L/T^2)"
    calculable: true
    motivo_no_calculable: null
    used_in: ["dinamica", "gravedad"]
    interpretation_tags: ["dinamica", "gravedad"]
    result_semantics: "fuerza"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Vector vertical hacia abajo en todos los gráficos."
      en: "Vertical downward vector in all graphs."
    pedagogical_triggers: ["masa_vs_peso"]

  - id: aceleracion_rampa
    title:
      es: Aceleración en rampa real
      en: Acceleration on a real ramp
    equation: a = g * (sin(theta) - mu * cos(theta))
    latex: "a = g \\\\cdot (\\\\sin\\\\theta - \\\\mu \\\\cdot \\\\cos\\\\theta)"
    rearrangements:
      - target: a
        equation: a = g * (sin(theta) - mu * cos(theta))
        latex: "a = g \\\\cdot (\\\\sin\\\\theta - \\\\mu \\\\cdot \\\\cos\\\\theta)"
    physical_meaning:
      es: Aceleración neta considerando la gravedad y el rozamiento dinámico.
      en: Net acceleration considering gravity and dynamic friction.
    category: "dinamica"
    relation_type: "ley"
    constraints: ["a <= g"]
    validity:
      es: Solo si sin(theta) > mu * cos(theta).
      en: Only if sin(theta) > mu * cos(theta).
    dimension_check: "L T⁻² = L T⁻² * (1 - 1)"
    calculable: true
    motivo_no_calculable: null
    used_in: ["dinamica"]
    interpretation_tags: ["aceleracion", "rozamiento"]
    result_semantics: "aceleracion"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Define la curvatura del movimiento en el simulador."
      en: "Defines the motion curvature in the simulator."
    pedagogical_triggers: ["aceleracion_no_libre"]

  - id: aceleracion_galileo
    title:
      es: Aceleración ideal de Galileo
      en: Galileo's ideal acceleration
    equation: a = g * sin(theta)
    latex: "a = g \\\\cdot \\\\sin\\\\theta"
    rearrangements:
      - target: a
        equation: a = g * sin(theta)
        latex: "a = g \\\\cdot \\\\sin\\\\theta"
    physical_meaning:
      es: Aceleración de caída en un plano sin rozamiento.
      en: Fall acceleration on a frictionless plane.
    category: "dinamica"
    relation_type: "ley"
    constraints: ["a <= g"]
    validity:
      es: Modelo ideal sin rozamiento.
      en: Ideal frictionless model.
    dimension_check: "L T⁻² = L T⁻² * 1"
    calculable: true
    motivo_no_calculable: null
    used_in: ["dinamica", "historia"]
    interpretation_tags: ["galileo", "gravedad_diluida"]
    result_semantics: "aceleracion"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Aceleración constante en el simulador ideal."
      en: "Constant acceleration in the ideal simulator."
    pedagogical_triggers: ["gravedad_diluida"]

  - id: ventaja_mecanica_trig
    title:
      es: Ventaja mecánica trigonométrica
      en: Trigonometric mechanical advantage
    equation: VM = 1 / sin(theta)
    latex: "VM = \\\\frac{1}{\\\\sin\\\\theta}"
    rearrangements:
      - target: VM
        equation: VM = 1 / sin(theta)
        latex: "VM = \\\\frac{1}{\\\\sin\\\\theta}"
    physical_meaning:
      es: Ventaja mecánica expresada en función del ángulo de inclinación.
      en: Mechanical advantage expressed as a function of the inclination angle.
    category: "geometria"
    relation_type: "propiedad"
    constraints: ["VM >= 1"]
    validity:
      es: Equivalente a L/h.
      en: Equivalent to L/h.
    dimension_check: "1 = 1 / 1"
    calculable: true
    motivo_no_calculable: null
    used_in: ["maquinas-simples"]
    interpretation_tags: ["trigonometria", "diseño"]
    result_semantics: "ratio"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Relación inversa con el ángulo."
      en: "Inverse relationship with the angle."
    pedagogical_triggers: ["trigonometria_aplicada"]

  - id: condicion_deslizamiento_critico
    title:
      es: Condición de deslizamiento crítico
      en: Critical sliding condition
    equation: tan(theta) = mu
    latex: "\\\\tan\\\\theta = \\\\mu"
    rearrangements:
      - target: mu
        equation: mu = tan(theta)
        latex: "\\\\mu = \\\\tan\\\\theta"
    physical_meaning:
      es: Ángulo máximo de reposo antes del deslizamiento inminente.
      en: Maximum repose angle before imminent sliding.
    category: "estatica"
    relation_type: "limite"
    constraints: []
    validity:
      es: Punto de equilibrio estático límite.
      en: Limit static equilibrium point.
    dimension_check: "1 = 1"
    calculable: true
    motivo_no_calculable: null
    used_in: ["ingenieria", "geologia"]
    interpretation_tags: ["equilibrio", "limite"]
    result_semantics: "ratio"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Define el ángulo de reposo en el Svg."
      en: "Defines the repose angle in the Svg."
    pedagogical_triggers: ["angulo_de_reposo"]

  - id: balance_energia_rampa
    title:
      es: Balance de energía en rampa
      en: Energy balance on ramp
    equation: P * L = W * h + f * L
    latex: "P \\\\cdot L = W \\\\cdot h + f \\\\cdot L"
    rearrangements:
      - target: P
        equation: P = (W * h + f * L) / L
        latex: "P = \\\\frac{W \\\\cdot h + f \\\\cdot L}{L}"
    physical_meaning:
      es: Trabajo de entrada igual al aumento de energía potencial más el trabajo de fricción.
      en: Input work equals potential energy increase plus friction work.
    category: "energia"
    relation_type: "balance"
    constraints: []
    validity:
      es: Conservación de la energía con disipación.
      en: Energy conservation with dissipation.
    dimension_check: "F L = F L + F L"
    calculable: true
    motivo_no_calculable: null
    used_in: ["energia"]
    interpretation_tags: ["trabajo", "disipacion"]
    result_semantics: "energia"
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: "Representado en el gráfico de barras de energía."
      en: "Represented in the energy bar chart."
    pedagogical_triggers: ["conservacion_energia"]
`;export{e as default};
