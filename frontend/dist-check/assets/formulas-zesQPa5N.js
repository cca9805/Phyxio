const e=`version: 1
topic:
  id: tornillo
  title:
    es: Tornillo
    en: Screw
formulas:
  - id: ventaja_mecanica_ideal
    title:
      es: Ventaja mecánica ideal
      en: Ideal Mechanical Advantage
    equation: ventaja_mecanica = (2*pi*r)/p
    latex: \\text{VM}_{ideal} = \\frac{2\\pi r}{p}
    rearrangements:
      - target: ventaja_mecanica
        equation: ventaja_mecanica = (2*pi*r)/p
        latex: \\text{VM}_{ideal} = \\frac{2\\pi r}{p}
      - target: r
        equation: r = (ventaja_mecanica*p)/(2*pi)
        latex: r = \\frac{\\text{VM}_{ideal} \\cdot p}{2\\pi}
      - target: p
        equation: p = (2*pi*r)/ventaja_mecanica
        latex: p = \\frac{2\\pi r}{\\text{VM}_{ideal}}
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: Amplificación teórica de fuerza basada exclusivamente en la geometría de la hélice y la palanca.
      en: Theoretical force amplification based exclusively on helix and lever geometry.
    constraints:
      - expr: p > 0
        message:
          es: El paso de rosca debe ser mayor que cero.
          en: Thread pitch must be greater than zero.
      - expr: r > 0
        message:
          es: El radio de la palanca debe ser positivo.
          en: Lever radius must be positive.
    validity:
      es: Válida para tornillos de potencia en condiciones ideales sin rozamiento.
      en: Valid for power screws under ideal conditions without friction.
    dimension_check:
      es: "[VM] = [L] / [L] = [1]"
      en: "[VM] = [L] / [L] = [1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, modelos, aplicaciones]
    interpretation_tags: [geometria, multiplicacion, ideal]
    result_semantics:
      target: ventaja_mecanica
      meaning: Factor de multiplicación de fuerza teórica.
    domain_checks: [r > 0, p > 0]
    coherence_checks: [ventaja_mecanica > 1]
    graph_implications: [lineal_con_r, hiperbolica_con_p]
    pedagogical_triggers: []

  - id: fuerza_ideal
    title:
      es: Fuerza ideal necesaria
      en: Ideal required force
    equation: F = (R*p)/(2*pi*r)
    latex: F_{ideal} = \\frac{R \\cdot p}{2\\pi r}
    rearrangements:
      - target: F
        equation: F = (R*p)/(2*pi*r)
        latex: F_{ideal} = \\frac{R \\cdot p}{2\\pi r}
      - target: R
        equation: R = (F * 2 * pi * r) / p
        latex: R = \\frac{F_{ideal} \\cdot 2\\pi r}{p}
    category: derived
    relation_type: conservation_law
    physical_meaning:
      es: Esfuerzo mínimo teórico para mover la carga axial si no existiera rozamiento.
      en: Minimum theoretical effort to move the axial load if no friction existed.
    constraints:
      - expr: eta == 1
        message:
          es: Esta fórmula solo aplica si el rendimiento es del 100%.
          en: This formula only applies if efficiency is 100%.
    validity:
      es: Modelos de referencia para comparar con sistemas reales.
      en: Reference models to compare with real systems.
    dimension_check:
      es: "[F] = ([F] * [L]) / [L] = [F]"
      en: "[F] = ([F] * [L]) / [L] = [F]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, modelos, ejemplos, aplicaciones]
    interpretation_tags: [fuerza, ideal, equilibrio]
    result_semantics:
      target: F
      meaning: Fuerza tangencial teórica de entrada.
    domain_checks: [R >= 0, r > 0, p > 0]
    coherence_checks: []
    graph_implications: [pendiente_ideal]
    pedagogical_triggers: []

  - id: eficiencia
    title:
      es: Eficiencia del mecanismo
      en: Mechanism Efficiency
    equation: eta = (R*p)/(2*pi*r*F)
    latex: \\eta = \\frac{R \\cdot p}{2\\pi r F}
    rearrangements:
      - target: eta
        equation: eta = (R*p)/(2*pi*r*F)
        latex: \\eta = \\frac{R \\cdot p}{2\\pi r F}
      - target: F
        equation: F = (R*p)/(2*pi*r*eta)
        latex: F = \\frac{R \\cdot p}{2\\pi r \\eta}
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: Relación entre el trabajo axial útil y el trabajo de entrada aplicado al sistema.
      en: Ratio between useful axial work and input work applied to the system.
    constraints:
      - expr: eta <= 1
        message:
          es: El rendimiento no puede superar el 100%.
          en: Efficiency cannot exceed 100%.
    validity:
      es: Aplicable a cualquier máquina simple con pérdidas por fricción.
      en: Applicable to any simple machine with friction losses.
    dimension_check:
      es: "[eta] = [F]*[L] / ([L]*[F]) = [1]"
      en: "[eta] = [F]*[L] / ([L]*[F]) = [1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, modelos, aplicaciones]
    interpretation_tags: [rendimiento, energia, friccion]
    result_semantics:
      target: eta
      meaning: Fracción de energía útil.
    domain_checks: [F > 0, r > 0, p > 0]
    coherence_checks: [eta >= 0]
    graph_implications: []
    pedagogical_triggers: []

  - id: fuerza_real
    title:
      es: Fuerza real de accionamiento
      en: Real driving force
    equation: F = (R*p)/(2*pi*r*eta)
    latex: F = \\frac{R \\cdot p}{2\\pi r \\eta}
    rearrangements:
      - target: F
        equation: F = (R*p)/(2*pi*r*eta)
        latex: F = \\frac{R \\cdot p}{2\\pi r \\eta}
      - target: eta
        equation: eta = (R*p)/(2*pi*r*F)
        latex: \\eta = \\frac{R \\cdot p}{2\\pi r F}
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: Fuerza necesaria para mover la carga axial considerando las pérdidas por rozamiento.
      en: Force required to move the axial load considering friction losses.
    constraints:
      - expr: eta > 0
        message:
          es: El rendimiento debe ser mayor que cero para que el sistema se mueva.
          en: Efficiency must be greater than zero for the system to move.
    validity:
      es: Sistemas reales de husillos y gatos mecánicos.
      en: Real systems of spindles and mechanical jacks.
    dimension_check:
      es: "[F] = ([F] * [L]) / ([L] * [1]) = [F]"
      en: "[F] = ([F] * [L]) / [L] * [1]) = [F]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, modelos, aplicaciones]
    interpretation_tags: [ingenieria, esfuerzo, real]
    result_semantics:
      target: F
      meaning: Fuerza tangencial real de entrada.
    domain_checks: [eta > 0, r > 0, p > 0]
    coherence_checks: [F >= fuerza_ideal]
    graph_implications: [curva_real]
    pedagogical_triggers: []

  - id: torque_real
    title:
      es: Torque real necesario
      en: Real required torque
    equation: tau = (R*p)/(2*pi*eta)
    latex: \\tau = \\frac{R \\cdot p}{2\\pi \\eta}
    rearrangements:
      - target: tau
        equation: tau = (R*p)/(2*pi*eta)
        latex: \\tau = \\frac{R \\cdot p}{2\\pi \\eta}
      - target: R
        equation: R = (tau * 2 * pi * eta) / p
        latex: R = \\frac{\\tau \\cdot 2\\pi \\eta}{p}
    category: derived
    relation_type: geometric_interpretation
    physical_meaning:
      es: Momento torsor que debe suministrar el motor o el operario para el avance.
      en: Twisting moment that the motor or operator must supply for the advance.
    constraints: []
    validity:
      es: Diseño de actuadores y motores para tornillos de potencia.
      en: Design of actuators and motors for power screws.
    dimension_check:
      es: "[tau] = [F] * [L] = [M L^2 T^-2]"
      en: "[tau] = [F] * [L] = [M L^2 T^-2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [ejemplos, aplicaciones, teoria]
    interpretation_tags: [torque, potencia, husillo]
    result_semantics:
      target: tau
      meaning: Momento torsor aplicado.
    domain_checks: [eta > 0, p > 0]
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

  - id: torque_basico
    title:
      es: Definición de torque por palanca
      en: Leverage torque definition
    equation: tau = F*r
    latex: \\tau = F \\cdot r
    rearrangements:
      - target: tau
        equation: tau = F*r
        latex: \\tau = F \\cdot r
      - target: F
        equation: F = tau / r
        latex: F = \\frac{\\tau}{r}
      - target: r
        equation: r = tau / F
        latex: r = \\frac{\\tau}{F}
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: Relación entre la fuerza aplicada y el brazo de palanca para generar un momento rotacional.
      en: Relationship between applied force and lever arm to generate a rotational moment.
    constraints:
      - expr: r > 0
        message:
          es: El radio debe ser positivo.
          en: Radius must be positive.
    validity:
      es: Mecánica clásica general.
      en: General classical mechanics.
    dimension_check:
      es: "[tau] = [F] * [L]"
      en: "[tau] = [F] * [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, aplicaciones]
    interpretation_tags: [estatica, momento]
    result_semantics:
      target: tau
      meaning: Torque resultante del esfuerzo tangencial.
    domain_checks: [F >= 0, r >= 0]
    coherence_checks: []
    graph_implications: [lineal_con_r]
    pedagogical_triggers: []

  - id: condicion_geometria
    title:
      es: Condición de geometría de hélice
      en: Helix geometry condition
    equation: p < 2*pi*r
    latex: p < 2\\pi r
    rearrangements: []
    category: structural
    relation_type: constraint
    physical_meaning:
      es: Requisito para que el tornillo tenga un ángulo de hélice funcional y no sea un cilindro liso o bloqueado.
      en: Requirement for the screw to have a functional helix angle and not be a smooth or blocked cylinder.
    constraints: []
    validity:
      es: Validez del modelo de máquina simple.
      en: Validity of the simple machine model.
    dimension_check:
      es: "[L] < [L]"
      en: "[L] < [L]"
    calculable: false
    motivo_no_calculable: "Es una condición de diseño, no un cálculo dinámico."
    used_in: [teoria, modelos, ejemplos, aplicaciones]
    interpretation_tags: [geometria, limite]
    result_semantics:
      target: null
      meaning: Validación de la topología del tornillo.
    domain_checks: []
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

  - id: error_rendimiento
    title:
      es: Error del modelo ideal
      en: Ideal model error
    equation: error_relativo = 1 - eta
    latex: \\epsilon = 1 - \\eta
    rearrangements:
      - target: error_relativo
        equation: error_relativo = 1 - eta
        latex: \\epsilon = 1 - \\eta
    category: structural
    relation_type: metamodel
    physical_meaning:
      es: Cuantificación de cuánto se aleja la realidad del modelo ideal de conservación de energía.
      en: Quantification of how far reality deviates from the ideal energy conservation model.
    constraints: []
    validity:
      es: Análisis de precisión en ingeniería.
      en: Precision analysis in engineering.
    dimension_check:
      es: "[1]"
      en: "[1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, modelos, aplicaciones]
    interpretation_tags: [error, validacion]
    result_semantics:
      target: error_relativo
      meaning: Margen de error por omitir fricción.
    domain_checks: [eta >= 0, eta <= 1]
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []

ui:
  default_formula: fuerza_real
  groups:
    - title:
        es: Geometría y ventaja
        en: Geometry and Advantage
      items:
        - ventaja_mecanica_ideal
        - eficiencia
        - condicion_geometria
    - title:
        es: Fuerzas y torque
        en: Forces and Torque
      items:
        - fuerza_real
        - fuerza_ideal
        - torque_real
        - torque_basico
    - title:
        es: Análisis de precisión
        en: Precision Analysis
      items:
        - error_rendimiento`;export{e as default};
