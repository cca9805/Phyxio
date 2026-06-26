const n=`version: 2\r
topic:\r
  id: interruptores\r
  titulo:\r
    es: Interruptores\r
    en: Switches\r
\r
formulas:\r
  - id: corriente\r
    target: I\r
    titulo:\r
      es: Corriente de maniobra\r
      en: Switching current\r
    title:\r
      es: Corriente de maniobra\r
      en: Switching current\r
    equation: I = P / V\r
    latex: 'I = P / V'\r
    category: definicion\r
    relation_type: definicion\r
    motivo_no_calculable: ''\r
    used_in:\r
      - interruptores\r
    rearrangements:\r
      - equation: P = I * V\r
        latex: 'P = I \\\\cdot V'\r
      - equation: V = P / I\r
        latex: 'V = \\\\frac{P}{I}'\r
    physical_meaning:\r
      es: La corriente que el interruptor debe conducir es la potencia de la carga dividida entre la tension. A mayor potencia o menor tension, mayor corriente y mayor perdida resistiva.\r
      en: The current the switch must conduct is load power divided by voltage. Higher power or lower voltage means higher current and higher resistive loss.\r
    constraints:\r
      - V > 0\r
      - carga resistiva con factor de potencia unitario\r
    validity:\r
      es: Regimen permanente, carga resistiva pura, factor de potencia igual a 1.\r
      en: Steady state, purely resistive load, power factor equal to 1.\r
    dimension_check: 'W/V = A'\r
    calculable: true\r
    interpretation_tags:\r
      - corriente_maniobra\r
      - dimensionamiento\r
    domain_checks:\r
      - condition: 'I > 0'\r
        consequence:\r
          es: La corriente de maniobra es el parametro base para calcular P_on.\r
          en: The switching current is the base parameter for calculating P_on.\r
    coherence_checks:\r
      - check: 'P / V = I'\r
        note:\r
          es: Coherencia dimensional W/V = A verificada.\r
          en: Dimensional coherence W/V = A verified.\r
    graph_implications:\r
      - type: linear\r
        x: P\r
        y: I\r
        note: I crece linealmente con P a V fija.\r
    pedagogical_triggers:\r
      - trigger: 'I > 10'\r
        note:\r
          es: Con I > 10 A, verificar que el interruptor este disenado para esa corriente.\r
          en: With I > 10 A, verify the switch is rated for that current.\r
    result_semantics:\r
      target: I\r
      direction: proportional_to_P\r
      inverse_to: V\r
\r
  - id: perdida_on\r
    target: P_on\r
    operands: [I, R_on]\r
    titulo:\r
      es: Perdida resistiva en estado ON\r
      en: Resistive loss in ON state\r
    title:\r
      es: Perdida resistiva en estado ON\r
      en: Resistive loss in ON state\r
    equation: P_on = I^2 * R_on\r
    latex: 'P_on = I^2 * R_on'\r
    category: ley_joule\r
    relation_type: ley_fisica\r
    motivo_no_calculable: ''\r
    used_in:\r
      - interruptores\r
    rearrangements:\r
      - equation: R_on = P_on / I^2\r
        latex: 'R_{on} = \\\\frac{P_{on}}{I^2}'\r
      - equation: I = sqrt(P_on / R_on)\r
        latex: 'I = \\\\sqrt{\\\\frac{P_{on}}{R_{on}}}'\r
    physical_meaning:\r
      es: La potencia disipada en los contactos crece con el cuadrado de la corriente. Duplicar la corriente cuadruplica la perdida. Esta dependencia cuadratica hace que los interruptores de alta corriente sean especialmente sensibles a la calidad del contacto.\r
      en: Power dissipated in contacts grows with the square of current. Doubling current quadruples the loss. This quadratic dependence makes high-current switches especially sensitive to contact quality.\r
    constraints:\r
      - I >= 0\r
      - R_on >= 0\r
    validity:\r
      es: Regimen permanente, contacto ohmico puro. No valido para arcos ni contactos intermitentes.\r
      en: Steady state, purely ohmic contact. Not valid for arcs or intermittent contacts.\r
    dimension_check: 'A^2 * ohm = W'\r
    calculable: true\r
    interpretation_tags:\r
      - riesgo_termico\r
      - joule_localizado\r
    domain_checks:\r
      - condition: 'P_on > 5'\r
        consequence:\r
          es: P_on > 5 W indica disipacion elevada; inspeccionar el contacto.\r
          en: P_on > 5 W indicates high dissipation; inspect the contact.\r
    coherence_checks:\r
      - check: 'A^2 * ohm = W'\r
        note:\r
          es: Coherencia dimensional verificada.\r
          en: Dimensional coherence verified.\r
    graph_implications:\r
      - type: parabolic\r
        x: I\r
        y: P_on\r
        note: P_on crece como I^2 a R_on fija.\r
    pedagogical_triggers:\r
      - trigger: 'P_on > 1'\r
        note:\r
          es: Con P_on > 1 W, el calentamiento del contacto es apreciable en uso continuo.\r
          en: With P_on > 1 W, contact heating is noticeable in continuous use.\r
    result_semantics:\r
      target: P_on\r
      direction: quadratic_in_I\r
      proportional_to: R_on\r
\r
  - id: energia_on\r
    target: E_on\r
    titulo:\r
      es: Energia disipada durante la conduccion\r
      en: Energy dissipated during conduction\r
    title:\r
      es: Energia disipada durante la conduccion\r
      en: Energy dissipated during conduction\r
    equation: E_on = P_on * t_on\r
    latex: 'E_on = P_on * t_on'\r
    category: energia_acumulada\r
    relation_type: definicion\r
    motivo_no_calculable: ''\r
    used_in:\r
      - interruptores\r
    rearrangements:\r
      - equation: t_on = E_on / P_on\r
        latex: 't_{on} = \\\\frac{E_{on}}{P_{on}}'\r
      - equation: P_on = E_on / t_on\r
        latex: 'P_{on} = \\\\frac{E_{on}}{t_{on}}'\r
    physical_meaning:\r
      es: La energia total disipada en el interruptor es el producto de la potencia de perdida por el tiempo de conduccion. En interruptores de uso continuo, esta energia puede ser significativa a lo largo de dias o semanas.\r
      en: Total energy dissipated in the switch is the product of loss power and conduction time. In continuously used switches, this energy can be significant over days or weeks.\r
    constraints:\r
      - P_on >= 0\r
      - t_on >= 0\r
    validity:\r
      es: Valido cuando P_on es aproximadamente constante durante t_on.\r
      en: Valid when P_on is approximately constant during t_on.\r
    dimension_check: 'W * s = J'\r
    calculable: true\r
    interpretation_tags:\r
      - energia_acumulada\r
      - analisis_temporal\r
    domain_checks:\r
      - condition: 'E_on > 3600'\r
        consequence:\r
          es: E_on > 1 Wh indica disipacion acumulada relevante en el periodo.\r
          en: E_on > 1 Wh indicates relevant accumulated dissipation in the period.\r
    coherence_checks:\r
      - check: 'W * s = J'\r
        note:\r
          es: Coherencia dimensional verificada.\r
          en: Dimensional coherence verified.\r
    graph_implications:\r
      - type: linear\r
        x: t_on\r
        y: E_on\r
        note: E_on crece linealmente con t_on a P_on fija.\r
    pedagogical_triggers:\r
      - trigger: 't_on > 3600'\r
        note:\r
          es: Con t_on > 1 hora, calcular E_on para estimar el coste energetico de las perdidas.\r
          en: With t_on > 1 hour, calculate E_on to estimate the energy cost of losses.\r
    result_semantics:\r
      target: E_on\r
      direction: proportional_to_P_on\r
      proportional_to: t_on\r
\r
ui:\r
  default_formula: corriente\r
  groups:\r
    - title:\r
        es: Ecuaciones base\r
        en: Base equations\r
      items:\r
        - corriente\r
        - perdida_on\r
        - energia_on\r
`;export{n as default};
