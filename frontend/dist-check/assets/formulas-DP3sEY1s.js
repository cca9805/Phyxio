const n=`version: 1\r
formulas:\r
- id: rel_l_omega
  target: momento_angular
  title:
    es: Relacion momento angular - velocidad angular (eje principal)\r
    en: Angular momentum - angular velocity relation (principal axis)\r
  equation: momento_angular = tensor_inercia * omega\r
  latex: L = I \\omega,\\ I_{xy}
  rearrangements:\r
  - target: tensor_inercia\r
    equation: tensor_inercia = momento_angular / omega\r
    latex: I = \\frac{L}{\\omega}\r
    constraints: []\r
  - target: momento_angular\r
    equation: momento_angular = tensor_inercia * omega\r
    latex: L = I \\omega\r
    constraints: []\r
  - target: omega\r
    equation: omega = momento_angular / tensor_inercia\r
    latex: \\omega = \\frac{L}{I}\r
    constraints: []\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: En eje principal, el tensor se reduce a un escalar efectivo y relaciona L\r
      con omega.\r
    en: On a principal axis, the tensor reduces to an effective scalar that relates\r
      L to omega.\r
  constraints:\r
    es: Valido en eje principal o cuando se usa el momento principal equivalente.\r
    en: Valid on a principal axis or when using the equivalent principal moment.\r
  validity:\r
    es: Dinamica rotacional de cuerpos rigidos en aproximacion escalar por eje principal.\r
    en: Rotational dynamics of rigid bodies in scalar principal-axis approximation.\r
  dimension_check: '[ML^2T^-1] = [ML^2] * [T^-1]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  interpretation_tags:\r
  - rel_l_omega\r
  - rotational_dynamics\r
  result_semantics:\r
    target: tensor_inercia\r
    meaning: Resulta util para interpretar tensor_inercia en el contexto del leaf.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
- id: energia_cinetica_tensores
  target: tensor_inercia
  title:
    es: Energia cinetica rotacional (eje principal)\r
    en: Rotational kinetic energy (principal axis)\r
  equation: E = 0.5 * tensor_inercia * omega^2\r
  latex: E = \\frac{1}{2} I \\omega^2\r
  rearrangements:\r
  - target: E\r
    equation: E = 0.5 * tensor_inercia * omega^2\r
    latex: E = \\frac{1}{2} I \\omega^2\r
    constraints: []\r
  - target: omega\r
    equation: omega = sqrt(2 * E / tensor_inercia)\r
    latex: \\omega = \\sqrt{\\frac{2E}{I}}\r
    constraints: []\r
  - target: tensor_inercia\r
    equation: tensor_inercia = 2 * E / omega^2\r
    latex: I = \\frac{2E}{\\omega^2}\r
    constraints: []\r
  category: derived\r
  relation_type: quadratic_form\r
  physical_meaning:\r
    es: Energia asociada al giro cuando se usa el momento principal equivalente.\r
    en: Energy associated with rotation when using the equivalent principal moment.\r
  constraints:\r
    es: Requiere mismo eje principal para I y omega.\r
    en: Requires the same principal axis for I and omega.\r
  validity:\r
    es: Analisis energetico de rotacion en aproximacion escalar.\r
    en: Rotational energy analysis in scalar approximation.\r
  dimension_check: '[ML^2T^-2] = [ML^2] * [T^-1]^2'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria.md\r
  - aplicaciones.md\r
  interpretation_tags:\r
  - energia_cinetica_tensores\r
  - rotational_dynamics\r
  result_semantics:\r
    target: E\r
    meaning: Resulta util para interpretar E en el contexto del leaf.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
`;export{n as default};
