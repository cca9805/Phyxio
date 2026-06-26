const e=`version: v5\r
formulas:\r
  - id: potencia_joule\r
    title:\r
      es: Potencia térmica disipada\r
      en: Dissipated thermal power\r
    equation: P_joule = I^2 * R\r
    latex: P_{joule} = I^2 R\r
    rearrangements:\r
      - target: P_joule\r
        equation: P_joule = I^2 * R\r
        latex: P_{joule} = I^2 R\r
        constraints: []\r
      - target: I\r
        equation: I = sqrt(P_joule / R)\r
        latex: I = \\sqrt{\\frac{P_{joule}}{R}}\r
        constraints:\r
          - expr: R > 0\r
            message:\r
              es: La resistencia debe ser positiva para extraer la corriente.\r
              en: Resistance must be positive to extract current.\r
      - target: R\r
        equation: R = P_joule / I^2\r
        latex: R = \\frac{P_{joule}}{I^2}\r
        constraints:\r
          - expr: I != 0\r
            message:\r
              es: La corriente no puede ser cero para extraer la resistencia.\r
              en: Current cannot be zero to extract resistance.\r
    category: derived\r
    relation_type: definition\r
    physical_meaning:\r
      es: |\r
        La potencia térmica generada en un punto de resistencia eléctrica local [[R]] por el paso de corriente [[I]].\r
        Esta potencia determina el calentamiento local y es el indicador físico directo del riesgo térmico.\r
      en: |\r
        The thermal power generated at a point of local electrical resistance [[R]] by the passage of current [[I]].\r
        This power determines local heating and is the direct physical indicator of thermal risk.\r
    constraints:\r
      - expr: I >= 0\r
        message:\r
          es: La corriente debe ser no negativa (se usa valor absoluto).\r
          en: Current must be non-negative (absolute value is used).\r
      - expr: R >= 0\r
        message:\r
          es: La resistencia debe ser no negativa.\r
          en: Resistance must be non-negative.\r
    validity:\r
      es: Válida para corriente continua y resistencias óhmicas constantes. En corriente alterna, aplica al valor eficaz de corriente y resistencia equivalente.\r
      en: Valid for direct current and constant ohmic resistances. In alternating current, applies to RMS current value and equivalent resistance.\r
    dimension_check: M L^2 T^-3 = I^2 * (M L^2 T^-3 I^-2) = M L^2 T^-3\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - teoria\r
      - ejemplos\r
      - interpretacion\r
    interpretation_tags:\r
      - P_joule\r
      - thermal_risk\r
      - joule_heating\r
    result_semantics:\r
      target: P_joule\r
      meaning: Thermal power indicating local heating intensity at a connection point.\r
    domain_checks:\r
      - expr: P_joule < 1000\r
        message:\r
          es: Potencia térmica superior a 1 kW es inusual en instalación doméstica (verificar unidades).\r
          en: Thermal power above 1 kW is unusual in domestic installation (verify units).\r
    coherence_checks:\r
      - expr: P_joule >= 0\r
        message:\r
          es: La potencia térmica debe ser positiva o cero.\r
          en: Thermal power must be positive or zero.\r
    graph_implications:\r
      - La potencia térmica crece cuadráticamente con la corriente.\r
    pedagogical_triggers:\r
      - when: value_too_high\r
        message:\r
          es: Una potencia térmica elevada indica riesgo significativo de calentamiento.\r
          en: High thermal power indicates significant heating risk.\r
\r
  - id: energia_joule\r
    title:\r
      es: Energía térmica acumulada\r
      en: Accumulated thermal energy\r
    equation: E_joule = P_joule * t\r
    latex: E_{joule} = P_{joule} \\cdot t\r
    rearrangements:\r
      - target: E_joule\r
        equation: E_joule = P_joule * t\r
        latex: E_{joule} = P_{joule} t\r
        constraints: []\r
      - target: P_joule\r
        equation: P_joule = E_joule / t\r
        latex: P_{joule} = \\frac{E_{joule}}{t}\r
        constraints:\r
          - expr: t > 0\r
            message:\r
              es: El tiempo debe ser positivo para extraer la potencia.\r
              en: Time must be positive to extract power.\r
      - target: t\r
        equation: t = E_joule / P_joule\r
        latex: t = \\frac{E_{joule}}{P_{joule}}\r
        constraints:\r
          - expr: P_joule > 0\r
            message:\r
              es: La potencia térmica debe ser positiva para extraer el tiempo.\r
              en: Thermal power must be positive to extract time.\r
    category: derived\r
    relation_type: definition\r
    physical_meaning:\r
      es: |\r
        La energía térmica total acumulada durante un tiempo de exposición [[t]] a potencia constante [[P_joule]].\r
        Esta energía determina el daño térmico acumulado y debe considerarse junto con la potencia instantánea.\r
      en: |\r
        The total thermal energy accumulated during an exposure time [[t]] at constant power [[P_joule]].\r
        This energy determines accumulated thermal damage and must be considered along with instantaneous power.\r
    constraints:\r
      - expr: P_joule >= 0\r
        message:\r
          es: La potencia térmica debe ser no negativa.\r
          en: Thermal power must be non-negative.\r
      - expr: t >= 0\r
        message:\r
          es: El tiempo debe ser no negativo.\r
          en: Time must be non-negative.\r
    validity:\r
      es: Válida cuando la potencia térmica se mantiene aproximadamente constante durante el intervalo considerado.\r
      en: Valid when thermal power remains approximately constant during the considered interval.\r
    dimension_check: M L^2 T^-2 = (M L^2 T^-3) * T = M L^2 T^-2\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - teoria\r
      - ejemplos\r
      - interpretacion\r
    interpretation_tags:\r
      - E_joule\r
      - accumulated_energy\r
      - thermal_damage\r
    result_semantics:\r
      target: E_joule\r
      meaning: Accumulated thermal energy determining total heat exposure.\r
    domain_checks:\r
      - expr: E_joule < 1e9\r
        message:\r
          es: Energía térmica superior a 1 GJ es inusual (verificar unidades).\r
          en: Thermal energy above 1 GJ is unusual (verify units).\r
    coherence_checks:\r
      - expr: E_joule >= 0\r
        message:\r
          es: La energía térmica debe ser positiva o cero.\r
          en: Thermal energy must be positive or zero.\r
    graph_implications:\r
      - La energía crece linealmente con el tiempo a potencia constante.\r
    pedagogical_triggers:\r
      - when: result_outside_expected_range\r
        message:\r
          es: La energía acumulada puede ser elevada incluso con potencia moderada si el tiempo es largo.\r
          en: Accumulated energy can be high even with moderate power if time is long.\r
\r
  - id: incremento_termico\r
    title:\r
      es: Incremento de temperatura\r
      en: Temperature rise\r
    equation: DeltaT = P_joule * R_th\r
    latex: \\Delta T = P_{joule} \\cdot R_{th}\r
    rearrangements:\r
      - target: DeltaT\r
        equation: DeltaT = P_joule * R_th\r
        latex: \\Delta T = P_{joule} R_{th}\r
        constraints: []\r
      - target: P_joule\r
        equation: P_joule = DeltaT / R_th\r
        latex: P_{joule} = \\frac{\\Delta T}{R_{th}}\r
        constraints:\r
          - expr: R_th > 0\r
            message:\r
              es: La resistencia térmica debe ser positiva.\r
              en: Thermal resistance must be positive.\r
      - target: R_th\r
        equation: R_th = DeltaT / P_joule\r
        latex: R_{th} = \\frac{\\Delta T}{P_{joule}}\r
        constraints:\r
          - expr: P_joule > 0\r
            message:\r
              es: La potencia térmica debe ser positiva para extraer la resistencia térmica.\r
              en: Thermal power must be positive to extract thermal resistance.\r
    category: derived\r
    relation_type: definition\r
    physical_meaning:\r
      es: |\r
        El incremento de temperatura en un punto de conexión debido a la disipación de potencia térmica [[P_joule]]\r
        y la resistencia térmica local [[R_th]]. Es el indicador observable directo del riesgo.\r
      en: |\r
        The temperature rise at a connection point due to thermal power dissipation [[P_joule]]\r
        and local thermal resistance [[R_th]]. It is the direct observable indicator of risk.\r
    constraints:\r
      - expr: P_joule >= 0\r
        message:\r
          es: La potencia térmica debe ser no negativa.\r
          en: Thermal power must be non-negative.\r
      - expr: R_th > 0\r
        message:\r
          es: La resistencia térmica debe ser positiva.\r
          en: Thermal resistance must be positive.\r
    validity:\r
      es: |\r
        Válida en régimen térmico estacionario. En transitorios térmicos, la temperatura evoluciona\r
        con constante de tiempo térmica. La resistencia térmica depende del material y geometría.\r
      en: |\r
        Valid in stationary thermal regime. In thermal transients, temperature evolves\r
        with thermal time constant. Thermal resistance depends on material and geometry.\r
    dimension_check: K = (M L^2 T^-3) * (K / (M L^2 T^-3)) = K\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - teoria\r
      - ejemplos\r
      - interpretacion\r
    interpretation_tags:\r
      - DeltaT\r
      - temperature_rise\r
      - observable_indicator\r
    result_semantics:\r
      target: DeltaT\r
      meaning: Temperature rise above ambient as direct observable risk indicator.\r
    domain_checks:\r
      - expr: DeltaT < 200\r
        message:\r
          es: Incremento térmico superior a 200 K es inusual en instalación doméstica (verificar unidades).\r
          en: Temperature rise above 200 K is unusual in domestic installation (verify units).\r
    coherence_checks:\r
      - expr: DeltaT >= 0\r
        message:\r
          es: El incremento térmico debe ser positivo o cero.\r
          en: Temperature rise must be positive or zero.\r
    graph_implications:\r
      - El incremento térmico es proporcional a la potencia disipada.\r
    pedagogical_triggers:\r
      - when: value_too_high\r
        message:\r
          es: Un incremento térmico superior a 40-50 K justifica intervención inmediata.\r
          en: A temperature rise above 40-50 K justifies immediate intervention.\r
\r
ui:\r
  default_formula: potencia_joule\r
  groups:\r
    - title:\r
        es: Ecuaciones base\r
        en: Base equations\r
      items:\r
        - potencia_joule\r
        - energia_joule\r
        - incremento_termico\r
`;export{e as default};
