const n=`version: 1\r
formulas:\r
- id: segunda_ley_newton\r
  title:\r
    es: Segunda ley de Newton\r
    en: Newton's Second Law\r
  equation: F_net = m * a\r
  latex: \\vec{F} = m \\vec{a}\r
  rearrangements:\r
  - target: F_net\r
    latex: \\vec{F} = m \\vec{a}\r
    equation: F_net = m * a\r
    constraints: []\r
  - target: a\r
    latex: \\vec{a} = \\frac{\\vec{F}}{m}\r
    equation: a = F_net / m\r
    constraints: []\r
  - target: m\r
    latex: m = \\frac{||\\vec{F}||}{||\\vec{a}||}\r
    equation: m = F_net / a\r
    constraints: []\r
  category: dinamica\r
  relation_type: ley_fisica\r
  physical_meaning:\r
    es: La aceleración de un sistema es proporcional a la fuerza neta aplicada e inversamente\r
      proporcional a su masa.\r
    en: The acceleration of a system is proportional to the net force applied and\r
      inversely proportional to its mass.\r
  constraints:\r
    es: Sistema con masa constante y fuerzas definidas en un marco inercial.\r
    en: System with constant mass and forces defined in an inertial frame.\r
  validity:\r
    es: Válida en mecánica clásica para velocidades no relativistas.\r
    en: Valid in classical mechanics for non-relativistic speeds.\r
  dimension_check:\r
    lhs: M L T^-2\r
    rhs: M * L T^-2\r
    result: correcto\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - interpretacion\r
  interpretation_tags:\r
  - dinamica\r
  - relacion_causal\r
  - respuesta_del_sistema\r
  result_semantics:\r
    target: F_net\r
    meaning: Resulta util para interpretar F_net en el contexto del leaf.\r
  domain_checks:\r
  - condition: m > 0\r
    message:\r
      es: La masa debe ser positiva.\r
      en: Mass must be positive.\r
  coherence_checks:\r
  - condition: F_net == 0 and a != 0\r
    message:\r
      es: Incoherencia física, fuerza neta nula no puede producir aceleración.\r
      en: Physical inconsistency, zero net force cannot produce acceleration.\r
  - condition: abs(a) > 1000\r
    message:\r
      es: Aceleración extremadamente alta, revisar valores.\r
      en: Extremely high acceleration, check values.\r
  graph_implications:\r
  - a depende directamente de F_net\r
  - a inversamente de m\r
  pedagogical_triggers:\r
  - detect: F_net == 0\r
    message:\r
      es: Estás en equilibrio dinámico o movimiento uniforme.\r
      en: You are in dynamic equilibrium or uniform motion.\r
- id: forma_componentes\r
  title:\r
    es: Segunda ley en componentes\r
    en: Second Law in Components\r
  equation: F_x = m * a_x\r
  latex: \\sum F_x = m a_x\r
  rearrangements:\r
  - target: F_x\r
    latex: \\sum F_x = m a_x\r
    equation: F_x = m * a_x\r
    constraints: []\r
  - target: a_x\r
    latex: a_x = \\frac{\\sum F_x}{m}\r
    equation: a_x = F_x / m\r
    constraints: []\r
  - target: m\r
    latex: m = \\frac{\\sum F_x}{a_x}\r
    equation: m = F_x / a_x\r
    constraints: []\r
  category: dinamica\r
  relation_type: descomposicion\r
  physical_meaning:\r
    es: La dinámica puede analizarse separando cada eje de forma independiente.\r
    en: Dynamics can be analyzed independently along each axis.\r
  constraints:\r
    es: Sistema cartesiano definido correctamente.\r
    en: Properly defined Cartesian system.\r
  validity:\r
    es: Siempre que se mantenga coherencia de ejes.\r
    en: As long as axis consistency is maintained.\r
  dimension_check:\r
    lhs: M L T^-2\r
    rhs: M * L T^-2\r
    result: correcto\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - problemas_bidimensionales\r
  interpretation_tags:\r
  - descomposicion\r
  - analisis_vectorial\r
  result_semantics:\r
    target: F_x\r
    meaning: Resulta util para interpretar F_x en el contexto del leaf.\r
  domain_checks:\r
  - condition: m > 0\r
    message:\r
      es: Masa inválida.\r
      en: Invalid mass.\r
  coherence_checks:\r
  - condition: F_x == 0 and a_x != 0\r
    message:\r
      es: Incoherencia en el eje x.\r
      en: Inconsistency along x-axis.\r
  graph_implications:\r
  - componentes independientes\r
  pedagogical_triggers:\r
  - detect: F_x == 0\r
    message:\r
      es: No hay aceleración en el eje x.\r
      en: No acceleration along x-axis.\r
`;export{n as default};
