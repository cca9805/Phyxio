const e=`version: 1\r
formulas:\r
- id: corriente_total\r
  title:\r
    es: Corriente total de línea\r
    en: Total line current\r
  equation: I_tot = P_tot / V\r
  latex: I_{\\mathrm{tot}} = \\frac{P_{\\mathrm{tot}}}{V}\r
  variables:\r
  - P_tot\r
  - V\r
  - f\r
  rearrangements:\r
  - target: I_tot\r
    equation: I_tot = P_tot / V\r
    latex: I_{\\mathrm{tot}} = \\frac{P_{\\mathrm{tot}}}{V}\r
    constraints: []\r
  - target: P_tot\r
    equation: P_tot = I_tot * V\r
    latex: P_{\\mathrm{tot}} = I_{\\mathrm{tot}} V\r
    constraints: []\r
  category: derived\r
  relation_type: definition\r
  physical_meaning:\r
    es: Relaciona la potencia total consumida por los receptores con la corriente que debe transportar el conductor.\r
      La tensión constante de la red implica que la corriente depende linealmente de la potencia.\r
    en: Relates the total power consumed by receptors to the current the conductor must carry.\r
      The constant network voltage implies that current depends linearly on power.\r
  constraints:\r
  - expr: V > 0\r
    message:\r
      es: La tensión debe ser positiva para que la división tenga sentido físico.\r
      en: Voltage must be positive for the division to have physical meaning.\r
  validity:\r
    es: Válida para receptores resistivos en paralelo a [[V]] = 230 V, [[f]] = 50 Hz, con impedancia de línea despreciable\r
      y factor de potencia unitario.\r
    en: Valid for resistive loads in parallel at [[V]] = 230 V, [[f]] = 50 Hz, with negligible line impedance\r
      and unity power factor.\r
  dimension_check: I = (M L^2 T^-3) / (M L^2 T^-3 I^-1) = I\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - I_tot\r
  - model_validity\r
  - physical_reading\r
  result_semantics:\r
    target: I_tot\r
    meaning: Total current required by the connected load.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido físico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La gráfica debe reflejar la relación lineal entre potencia y corriente.\r
  pedagogical_triggers:\r
  - when: result_outside_expected_range\r
    message:\r
      es: Revisar si el modelo físico se está aplicando dentro de su dominio de validez.\r
      en: Check whether the physical model is being applied within its validity domain.\r
- id: potencia_total\r
  title:\r
    es: Potencia total suministrada\r
    en: Total supplied power\r
  equation: P_tot = V * I_tot\r
  latex: P_{\\mathrm{tot}} = V I_{\\mathrm{tot}}\r
  rearrangements:\r
  - target: P_tot\r
    equation: P_tot = V * I_tot\r
    latex: P_{\\mathrm{tot}} = V I_{\\mathrm{tot}}\r
    constraints: []\r
  - target: I_tot\r
    equation: I_tot = P_tot / V\r
    latex: I_{\\mathrm{tot}} = \\frac{P_{\\mathrm{tot}}}{V}\r
    constraints: []\r
  category: derived\r
  relation_type: definition\r
  physical_meaning:\r
    es: La potencia total que la red suministra a los receptores conectados. En el modelo resistivo,\r
      toda la potencia se disipa en los receptores.\r
    en: The total power the network supplies to connected receptors. In the resistive model,\r
      all power is dissipated in the receptors.\r
  constraints: []\r
  validity:\r
    es: Válida para el modelo resistivo con factor de potencia unitario.\r
    en: Valid for the resistive model with unity power factor.\r
  dimension_check: M L^2 T^-3 = (M L^2 T^-3 I^-1)(I) = M L^2 T^-3\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - P_tot\r
  - model_validity\r
  - physical_reading\r
  result_semantics:\r
    target: P_tot\r
    meaning: Total power supplied to all connected loads.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido físico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La gráfica muestra la relación entre corriente y potencia.\r
  pedagogical_triggers:\r
  - when: result_outside_expected_range\r
    message:\r
      es: Revisar si el modelo físico se está aplicando dentro de su dominio de validez.\r
      en: Check whether the physical model is being applied within its validity domain.\r
- id: margen_capacidad\r
  title:\r
    es: Margen de capacidad del circuito\r
    en: Circuit capacity margin\r
  equation: margen_uso = I_tot / I_max\r
  latex: \\eta_I = \\frac{I_{\\mathrm{tot}}}{I_{\\max}}\r
  rearrangements:\r
  - target: margen_uso\r
    equation: margen_uso = I_tot / I_max\r
    latex: \\eta_I = \\frac{I_{\\mathrm{tot}}}{I_{\\max}}\r
    constraints: []\r
  - target: I_tot\r
    equation: I_tot = margen_uso * I_max\r
    latex: I_{\\mathrm{tot}} = \\eta_I I_{\\max}\r
    constraints: []\r
  category: structural\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Indica qué fracción de la capacidad máxima del circuito está siendo utilizada. Es un índice\r
      adimensional de seguridad operativa.\r
    en: Indicates what fraction of the circuit's maximum capacity is being used. It is a dimensionless\r
      index of operational safety.\r
  constraints:\r
  - expr: I_max > 0\r
    message:\r
      es: El calibre del magnetotérmico debe ser positivo.\r
      en: The circuit breaker rating must be positive.\r
  validity:\r
    es: Válida siempre que I_max sea el calibre real del magnetotérmico de línea.\r
    en: Valid as long as I_max is the actual rating of the line MCB.\r
  dimension_check: "1 = I / I = 1"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - margen_uso\r
  - model_validity\r
  - physical_reading\r
  result_semantics:\r
    target: margen_uso\r
    meaning: Fraction of circuit capacity being used.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido físico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La gráfica muestra el margen de uso respecto al límite de protección.\r
  pedagogical_triggers:\r
  - when: result_outside_expected_range\r
    message:\r
      es: Revisar si el modelo físico se está aplicando dentro de su dominio de validez.\r
      en: Check whether the physical model is being applied within its validity domain.\r
- id: frecuencia_contexto\r
  title:\r
    es: Frecuencia de red (contexto)\r
    en: Network frequency (context)\r
  equation: f = 50 Hz\r
  latex: f = 50~\\mathrm{Hz}\r
  rearrangements: []\r
  category: contextual\r
  relation_type: definition\r
  physical_meaning:\r
    es: La frecuencia de la red eléctrica europea es 50 Hz. No interviene en los cálculos del modelo resistivo pero caracteriza el suministro.\r
    en: The European electrical network frequency is 50 Hz. It does not participate in resistive model calculations but characterizes the supply.\r
  constraints: []\r
  validity:\r
    es: Válido para instalaciones europeas estándar.\r
    en: Valid for standard European installations.\r
  dimension_check: T^-1\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es un valor constante del contexto, no una variable calculable.\r
    en: It is a constant value of the context, not a calculable variable.\r
  used_in:\r
  - teoria\r
  interpretation_tags:\r
  - f\r
  - model_validity\r
  result_semantics:\r
    target: f\r
    meaning: Network frequency for context reference.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications: []\r
  pedagogical_triggers: []\r
`;export{e as default};
