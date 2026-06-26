const e=`version: 5
topic:
  id: aplicaciones-ingenieriles
  title:
    es: Aplicaciones Ingenieriles de Fluidos
    en: Engineering Fluid Applications
formulas:
  - id: potencia_bomba
    title:
      es: Potencia Hidráulica Útil
      en: Useful Hydraulic Power
    equation: P_util = dp * Q
    latex: P_{util} = \\Delta p \\cdot Q
    rearrangements:
      - id: reord_dp
        target: dp
        equation: P_util / Q
        latex: \\Delta p = \\frac{P_{util}}{Q}
        descripcion:
          es: Calcula el salto de presión que puede generar una bomba de potencia conocida.
          en: Calculates the pressure jump a pump of known power can generate.
      - id: reord_Q
        target: Q
        equation: P_util / dp
        latex: Q = \\frac{P_{util}}{\\Delta p}
        descripcion:
          es: Determina el caudal máximo que puede mover el sistema ante una resistencia de presión.
          en: Determines the maximum flow rate the system can move against a pressure resistance.
    category: aplicaciones-ingenieriles
    relation_type: ley-constitutiva
    physical_meaning:
      es: La potencia es el producto de la variable de esfuerzo (presión) por la variable de flujo (caudal).
      en: Power is the product of the effort variable (pressure) by the flow variable (flow rate).
    constraints: flujo incompresible, estado estacionario
    validity:
      es: Aplicable a bombas y turbinas donde el fluido mantiene densidad constante.
      en: Applicable to pumps and turbines where the fluid maintains constant density.
    dimension_check: "[M L^2 T^-3] = [M L^-1 T^-2] * [L^3 T^-1] = [M L^2 T^-3]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [aplicaciones-ingenieriles]
    interpretation_tags: [potencia, bombeo, energia, eficiencia]
    result_semantics:
      es: Cuantifica la transferencia de energía mecánica al fluido por segundo.
      en: Quantifies the mechanical energy transfer to the fluid per second.
    domain_checks: [Q >= 0, P_util >= 0]
    coherence_checks: [dp >= 0]
    graph_implications: determina la altura del punto de operación en la curva de la bomba
    pedagogical_triggers: sistemas de riego, suministro de agua urbana
    variables_principales: [P_util, dp, Q]
    unidades_coherentes:
      es: El caudal debe estar en m³/s y la presión en Pascales para obtener vatios.
      en: Flow rate must be in m³/s and pressure in Pascals to obtain Watts.
    relevancia_didactica: 5
    difficulty_rating: 3

  - id: eficiencia
    title:
      es: Eficiencia del Sistema (Rendimiento)
      en: System Efficiency
    equation: eta = P_util / P_in
    latex: \\eta = \\frac{P_{util}}{P_{in}}
    rearrangements:
      - id: reord_P_in
        target: P_in
        equation: P_util / eta
        latex: P_{in} = \\frac{P_{util}}{\\eta}
        descripcion:
          es: Calcula el consumo total de energía necesario para obtener una potencia útil.
          en: Calculates the total energy consumption needed to obtain a useful power.
    category: aplicaciones-ingenieriles
    relation_type: definicion
    physical_meaning:
      es: Porcentaje de la energía consumida que efectivamente se aprovecha en el fluido.
      en: Percentage of consumed energy that is effectively utilized in the fluid.
    constraints: Segunda Ley de la Termodinámica (eta < 1)
    validity:
      es: Universal para cualquier dispositivo de conversión de energía.
      en: Universal for any energy conversion device.
    dimension_check: "[1] = [M L^2 T^-3] / [M L^2 T^-3] = [1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [aplicaciones-ingenieriles]
    interpretation_tags: [eficiencia, disipacion, diseño, economia]
    result_semantics:
      es: Indica la calidad del diseño y la cantidad de energía disipada como calor.
      en: Indicates design quality and the amount of energy dissipated as heat.
    domain_checks: [P_in > 0, P_util >= 0]
    coherence_checks: [eta <= 1]
    graph_implications: relaciona la potencia consumida con la potencia hidráulica entregada
    pedagogical_triggers: ahorro energético, sostenibilidad
    variables_principales: [eta, P_util, P_in]
    unidades_coherentes:
      es: Ambas potencias deben expresarse en las mismas unidades (típicamente vatios).
      en: Both powers must be expressed in the same units (typically Watts).
    relevancia_didactica: 5
    difficulty_rating: 3

ui:
  default_formula: potencia_bomba
  groups:
    - title:
        es: Potencia y Rendimiento
        en: Power and Efficiency
      items: [potencia_bomba, eficiencia]
`;export{e as default};
