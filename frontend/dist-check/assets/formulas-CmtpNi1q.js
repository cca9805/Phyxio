const e=`\uFEFFversion: v5\r
\r
formulas:\r
  - id: potencia_base\r
    title:\r
      es: Potencia eléctrica instantánea\r
      en: Instantaneous electric power\r
    equation: P = V * I\r
    latex: P = V I\r
    rearrangements:\r
      - target: P\r
        equation: P = V * I\r
        latex: P = V I\r
        constraints: []\r
      - target: I\r
        equation: I = P / V\r
        latex: I = \\frac{P}{V}\r
        constraints:\r
          - expr: V > 0\r
            message:\r
              es: La tensión debe ser positiva para extraer la corriente.\r
              en: Voltage must be positive to extract current.\r
      - target: V\r
        equation: V = P / I\r
        latex: V = \\frac{P}{I}\r
        constraints:\r
          - expr: I > 0\r
            message:\r
              es: La corriente debe ser positiva para extraer la tensión.\r
              en: Current must be positive to extract voltage.\r
    category: fundamental\r
    relation_type: definition\r
    physical_meaning:\r
      es: |\r
        La potencia eléctrica instantánea es el producto de la tensión aplicada por la corriente que circula.\r
        Esta es la relación fundamental que conecta las tres magnitudes básicas del análisis eléctrico.\r
      en: |\r
        Instantaneous electric power is the product of applied voltage by flowing current.\r
        This is the fundamental relationship connecting the three basic magnitudes of electrical analysis.\r
    constraints:\r
      - expr: V >= 0\r
        message:\r
          es: La tensión debe ser no negativa.\r
          en: Voltage must be non-negative.\r
      - expr: I >= 0\r
        message:\r
          es: La corriente debe ser no negativa.\r
          en: Current must be non-negative.\r
    validity:\r
      es: Válida para cualquier régimen de corriente continua o alterna (usando valores eficaces).\r
      en: Valid for any DC or AC regime (using RMS values).\r
    dimension_check: M L^2 T^-3 = (M L^2 T^-3 I^-1) * I = M L^2 T^-3\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - teoria\r
      - ejemplos\r
      - interpretacion\r
    interpretation_tags:\r
      - P\r
      - V\r
      - I\r
      - potencia-electrica\r
    result_semantics:\r
      target: P\r
      kind: scalar\r
      sign_meaning:\r
        es: Potencia positiva indica consumo de energía eléctrica; potencia negativa indicaría generación\r
        en: Positive power indicates electrical energy consumption; negative power would indicate generation\r
      absolute_value_meaning:\r
        es: Magnitud del flujo de energía eléctrica transferida por unidad de tiempo\r
        en: Magnitude of electric energy flow per unit time\r
    domain_checks:\r
      - expr: P < 10000\r
        message:\r
          es: Potencia superior a 10 kW es inusual en un único equipo doméstico (verificar unidades).\r
          en: Power above 10 kW is unusual for a single domestic appliance (verify units).\r
    coherence_checks:\r
      - expr: P >= 0\r
        message:\r
          es: La potencia debe ser positiva o cero.\r
          en: Power must be positive or zero.\r
    graph_implications:\r
      - A potencia crece linealmente con la corriente a tensión constante.\r
    pedagogical_triggers:\r
      - when: value_too_high\r
        message:\r
          es: Una potencia elevada implica alta corriente; verificar límite del cable.\r
          en: High power implies high current; verify cable limit.\r
\r
  - id: corriente_por_resistencia\r
    title:\r
      es: Corriente por ley de Ohm\r
      en: Current by Ohm's law\r
    equation: I = V / R\r
    latex: I = \\frac{V}{R}\r
    rearrangements:\r
      - target: I\r
        equation: I = V / R\r
        latex: I = \\frac{V}{R}\r
        constraints:\r
          - expr: R > 0\r
            message:\r
              es: La resistencia debe ser positiva para calcular la corriente.\r
              en: Resistance must be positive to calculate current.\r
      - target: V\r
        equation: V = I * R\r
        latex: V = I R\r
        constraints: []\r
      - target: R\r
        equation: R = V / I\r
        latex: R = \\frac{V}{I}\r
        constraints:\r
          - expr: I > 0\r
            message:\r
              es: La corriente debe ser positiva para extraer la resistencia.\r
              en: Current must be positive to extract resistance.\r
    category: fundamental\r
    relation_type: definition\r
    physical_meaning:\r
      es: |\r
        La corriente que circula por un conductor es directamente proporcional a la tensión aplicada\r
        e inversamente proporcional a la resistencia del circuito (Ley de Ohm).\r
      en: |\r
        The current flowing through a conductor is directly proportional to applied voltage\r
        and inversely proportional to circuit resistance (Ohm's Law).\r
    constraints:\r
      - expr: V >= 0\r
        message:\r
          es: La tensión debe ser no negativa.\r
          en: Voltage must be non-negative.\r
      - expr: R > 0\r
        message:\r
          es: La resistencia debe ser positiva.\r
          en: Resistance must be positive.\r
    validity:\r
      es: Válida para resistencias óhmicas lineales. No aplica a componentes no lineales (diodos, etc.).\r
      en: Valid for linear ohmic resistances. Not applicable to nonlinear components (diodes, etc.).\r
    dimension_check: I = (M L^2 T^-3 I^-1) / (M L^2 T^-3 I^-2) = I\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - teoria\r
      - ejemplos\r
      - interpretacion\r
    interpretation_tags:\r
      - I\r
      - V\r
      - R\r
      - ley-de-ohm\r
    result_semantics:\r
      target: I\r
      kind: scalar\r
      sign_meaning:\r
        es: Corriente positiva indica flujo en el sentido convencional; negativa indica sentido opuesto\r
        en: Positive current indicates flow in conventional direction; negative indicates opposite direction\r
      absolute_value_meaning:\r
        es: Magnitud del flujo de carga eléctrica por unidad de tiempo a través del conductor\r
        en: Magnitude of electric charge flow per unit time through the conductor\r
    domain_checks:\r
      - expr: I < 100\r
        message:\r
          es: Corriente superior a 100 A es inusual en instalación doméstica (posible fallo).\r
          en: Current above 100 A is unusual in domestic installation (possible fault).\r
    coherence_checks:\r
      - expr: I >= 0\r
        message:\r
          es: La corriente debe ser positiva o cero.\r
          en: Current must be positive or zero.\r
    graph_implications:\r
      - La corriente decrece hiperbólicamente al aumentar la resistencia.\r
    pedagogical_triggers:\r
      - when: value_too_high\r
        message:\r
          es: Corriente muy alta indica resistencia baja; posible cortocircuito.\r
          en: Very high current indicates low resistance; possible short circuit.\r
\r
  - id: potencia_resistiva\r
    title:\r
      es: Potencia en función de resistencia\r
      en: Power as function of resistance\r
    equation: P = V^2 / R\r
    latex: P = \\frac{V^2}{R}\r
    rearrangements:\r
      - target: P\r
        equation: P = V^2 / R\r
        latex: P = \\frac{V^2}{R}\r
        constraints:\r
          - expr: R > 0\r
            message:\r
              es: La resistencia debe ser positiva.\r
              en: Resistance must be positive.\r
      - target: R\r
        equation: R = V^2 / P\r
        latex: R = \\frac{V^2}{P}\r
        constraints:\r
          - expr: P > 0\r
            message:\r
              es: La potencia debe ser positiva para extraer la resistencia.\r
              en: Power must be positive to extract resistance.\r
    category: derived\r
    relation_type: derived\r
    physical_meaning:\r
      es: |\r
        La potencia disipada puede calcularse directamente de la tensión y la resistencia,\r
        sin necesidad de calcular primero la corriente. Muestra que a tensión fija,\r
        menor resistencia implica mayor potencia (y mayor peligro).\r
      en: |\r
        Dissipated power can be calculated directly from voltage and resistance,\r
        without first calculating current. Shows that at fixed voltage,\r
        lower resistance implies higher power (and greater danger).\r
    constraints:\r
      - expr: V >= 0\r
        message:\r
          es: La tensión debe ser no negativa.\r
          en: Voltage must be non-negative.\r
      - expr: R > 0\r
        message:\r
          es: La resistencia debe ser positiva.\r
          en: Resistance must be positive.\r
    validity:\r
      es: Válida para resistencias óhmicas a tensión constante.\r
      en: Valid for ohmic resistances at constant voltage.\r
    dimension_check: M L^2 T^-3 = (M L^2 T^-3 I^-1)^2 / (M L^2 T^-3 I^-2) = M L^2 T^-3\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - teoria\r
      - ejemplos\r
    interpretation_tags:\r
      - P\r
      - V\r
      - R\r
    result_semantics:\r
      target: P\r
      kind: scalar\r
      sign_meaning:\r
        es: Siempre positiva en resistencias (disipación); negativa no tiene sentido físico en este contexto\r
        en: Always positive in resistances (dissipation); negative has no physical meaning in this context\r
      absolute_value_meaning:\r
        es: Tasa de conversión de energía eléctrica en calor por efecto Joule\r
        en: Rate of conversion of electrical energy into heat by Joule effect\r
    domain_checks:\r
      - expr: P < 10000\r
        message:\r
          es: Potencia muy alta a tensión doméstica indica resistencia anormalmente baja.\r
          en: Very high power at domestic voltage indicates abnormally low resistance.\r
    coherence_checks:\r
      - expr: P >= 0\r
        message:\r
          es: La potencia debe ser positiva o cero.\r
          en: Power must be positive or zero.\r
    graph_implications:\r
      - La potencia decrece hiperbólicamente al aumentar la resistencia.\r
    pedagogical_triggers:\r
      - when: value_too_high\r
        message:\r
          es: Resistencia muy baja genera potencia peligrosa; revisar conexiones.\r
          en: Very low resistance generates dangerous power; check connections.\r
\r
  - id: energia\r
    title:\r
      es: Energía eléctrica consumida\r
      en: Electric energy consumed\r
    equation: E_kWh = P_kW * t_h\r
    latex: E_{kWh} = P_{kW} t_h\r
    rearrangements:\r
      - target: E_kWh\r
        equation: E_kWh = P_kW * t_h\r
        latex: E_{kWh} = P_{kW} t_h\r
        constraints: []\r
      - target: P_kW\r
        equation: P_kW = E_kWh / t_h\r
        latex: P_{kWh} = \\frac{E_{kWh}}{t_h}\r
        constraints:\r
          - expr: t_h > 0\r
            message:\r
              es: El tiempo debe ser positivo para extraer la potencia.\r
              en: Time must be positive to extract power.\r
      - target: t_h\r
        equation: t_h = E_kWh / P_kW\r
        latex: t_h = \\frac{E_{kWh}}{P_{kWh}}\r
        constraints:\r
          - expr: P_kW > 0\r
            message:\r
              es: La potencia debe ser positiva para extraer el tiempo.\r
              en: Power must be positive to extract time.\r
    category: derived\r
    relation_type: definition\r
    physical_meaning:\r
      es: |\r
        La energía consumida es el producto de la potencia (en kW) por el tiempo de uso (en horas).\r
        Resulta en kWh, la unidad de facturación eléctrica.\r
      en: |\r
        Energy consumed is the product of power (in kW) by usage time (in hours).\r
        Results in kWh, the electrical billing unit.\r
    constraints:\r
      - expr: P_kW >= 0\r
        message:\r
          es: La potencia debe ser no negativa.\r
          en: Power must be non-negative.\r
      - expr: t_h >= 0\r
        message:\r
          es: El tiempo debe ser no negativo.\r
          en: Time must be non-negative.\r
    validity:\r
      es: Válida cuando la potencia se mantiene aproximadamente constante durante el intervalo.\r
      en: Valid when power remains approximately constant during the interval.\r
    dimension_check: M L^2 T^-2 = (M L^2 T^-3) * T = M L^2 T^-2\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - teoria\r
      - ejemplos\r
    interpretation_tags:\r
      - E_kWh\r
      - P_kW\r
      - t_h\r
      - energia\r
    result_semantics:\r
      target: E_kWh\r
      kind: accumulated\r
      sign_meaning:\r
        es: Siempre positiva (energía consumida); representa acumulación temporal de potencia\r
        en: Always positive (energy consumed); represents temporal accumulation of power\r
      absolute_value_meaning:\r
        es: Cantidad total de energía eléctrica transferida durante el período de tiempo considerado\r
        en: Total amount of electrical energy transferred during the considered time period\r
    domain_checks:\r
      - expr: E_kWh < 10000\r
        message:\r
          es: Energía muy alta sugiere error de unidades o período excesivo.\r
          en: Very high energy suggests unit error or excessive period.\r
    coherence_checks:\r
      - expr: E_kWh >= 0\r
        message:\r
          es: La energía debe ser positiva o cero.\r
          en: Energy must be positive or zero.\r
    graph_implications:\r
      - La energía crece linealmente con el tiempo a potencia constante.\r
    pedagogical_triggers:\r
      - when: result_outside_expected_range\r
        message:\r
          es: Verificar que P esté en kW (no W) y t en horas (no minutos).\r
          en: Verify that P is in kW (not W) and t is in hours (not minutes).\r
\r
ui:\r
  default_formula: potencia_base\r
  groups:\r
    - title:\r
        es: Ecuaciones base\r
        en: Base equations\r
      items:\r
        - potencia_base\r
        - corriente_por_resistencia\r
        - potencia_resistiva\r
        - energia\r
`;export{e as default};
