const e=`version: 1\r
formulas:\r
- id: p\r
  title:\r
    es: Momento lineal asociado\r
    en: Associated linear momentum\r
  equation: p = m*v\r
  latex: p = m v\r
  rearrangements:\r
  - target: p\r
    equation: p = m*v\r
    latex: p = m v\r
    constraints: []\r
  category: auxiliary\r
  relation_type: definition\r
  physical_meaning:\r
    es: Momento lineal asociado\r
    en: Associated linear momentum\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check:\r
    es: M L T^-1\r
    en: M L T^-1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - definicion-momento-angular\r
  result_semantics:\r
    target: p\r
    meaning: Resulta util para interpretar p en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: L\r
  title:\r
    es: Momento angular orbital\r
    en: Orbital angular momentum\r
  equation: L = r*p*sin(theta)\r
  latex: L = r p \\sin \\theta\r
  rearrangements:\r
  - target: L\r
    equation: L = r*p*sin(theta)\r
    latex: L = r p \\sin \\theta\r
    constraints: []\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Momento angular orbital\r
    en: Orbital angular momentum\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check:\r
    es: M L^2 T^-1\r
    en: M L^2 T^-1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - definicion-momento-angular\r
  result_semantics:\r
    target: L\r
    meaning: Resulta util para interpretar L en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: Lrot\r
  title:\r
    es: Momento angular de rotacion\r
    en: Rotational angular momentum\r
  equation: L = I*omega\r
  latex: L = I \\omega\r
  rearrangements:\r
  - target: L\r
    equation: L = I*omega\r
    latex: L = I \\omega\r
    constraints: []\r
  - target: omega\r
    equation: omega = L/I\r
    latex: \\omega = \\frac{L}{I}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Momento angular de rotacion\r
    en: Rotational angular momentum\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: &id001\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check: &id002\r
    es: M L^2 T^-1\r
    en: M L^2 T^-1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: &id003\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - definicion-momento-angular\r
  result_semantics:\r
    target: L\r
    meaning: Resulta util para interpretar L en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: tau\r
  title:\r
    es: Torque medio\r
    en: Average torque\r
  equation: tau = DeltaL/DeltaT\r
  latex: \\tau = \\frac{\\Delta L}{\\Delta t}\r
  rearrangements:\r
  - target: tau\r
    equation: tau = DeltaL/DeltaT\r
    latex: \\tau = \\frac{\\Delta L}{\\Delta t}\r
    constraints: []\r
  - target: DeltaL\r
    equation: DeltaL = tau*DeltaT\r
    latex: \\Delta L = \\tau \\Delta t\r
    constraints: []\r
  category: fundamental\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Torque medio\r
    en: Average torque\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: &id004\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check: &id005\r
    es: M L^2 T^-2\r
    en: M L^2 T^-2\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: &id006\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - definicion-momento-angular\r
  result_semantics:\r
    target: tau\r
    meaning: Resulta util para interpretar tau en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: Lrot_solve_omega\r
  title:\r
    es: Momento angular de rotacion despejada para omega\r
    en: Rotational angular momentum solved for omega\r
  equation: omega = L/I\r
  latex: \\omega = \\frac{L}{I}\r
  rearrangements:\r
  - target: omega\r
    equation: omega = L/I\r
    latex: \\omega = \\frac{L}{I}\r
    constraints: []\r
  category: derived\r
  relation_type: rearrangement\r
  physical_meaning:\r
    es: Forma despejada de Momento angular de rotacion para calcular omega.\r
    en: Rearranged form of Rotational angular momentum to calculate omega.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: *id001\r
  dimension_check: *id002\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: *id003\r
  interpretation_tags:\r
  - definicion-momento-angular\r
  result_semantics:\r
    target: omega\r
    meaning: Resulta util para interpretar omega en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: tau_solve_DeltaL\r
  title:\r
    es: Torque medio despejada para DeltaL\r
    en: Average torque solved for DeltaL\r
  equation: DeltaL = tau*DeltaT\r
  latex: \\Delta L = \\tau \\Delta t\r
  rearrangements:\r
  - target: DeltaL\r
    equation: DeltaL = tau*DeltaT\r
    latex: \\Delta L = \\tau \\Delta t\r
    constraints: []\r
  category: derived\r
  relation_type: rearrangement\r
  physical_meaning:\r
    es: Forma despejada de Torque medio para calcular DeltaL.\r
    en: Rearranged form of Average torque to calculate DeltaL.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: *id004\r
  dimension_check: *id005\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: *id006\r
  interpretation_tags:\r
  - definicion-momento-angular\r
  result_semantics:\r
    target: DeltaL\r
    meaning: Resulta util para interpretar DeltaL en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que los datos pertenezcan al dominio del modelo.\r
      en: Check that the data belong to the model domain.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
`;export{e as default};
