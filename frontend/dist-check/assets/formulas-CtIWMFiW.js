const e=`version: 1\r
formulas:\r
- id: Omega\r
  title:\r
    es: Velocidad angular de precesion\r
    en: Precession angular velocity\r
  equation: Omegap = tau/L\r
  latex: \\Omega_p = \\frac{\\tau}{L}\r
  rearrangements:\r
  - target: Omegap\r
    equation: Omegap = tau/L\r
    latex: \\Omega_p = \\frac{\\tau}{L}\r
    constraints: []\r
  - target: tau\r
    equation: tau = Omegap*L\r
    latex: \\tau = \\Omega_p L\r
    constraints: []\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Velocidad angular de precesion\r
    en: Precession angular velocity\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: &id001\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check: &id002\r
    es: T^-1\r
    en: T^-1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: &id003\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - precesion\r
  result_semantics:\r
    target: Omegap\r
    meaning: Resulta util para interpretar Omegap en el contexto del leaf.\r
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
- id: tau_g\r
  title:\r
    es: Torque gravitatorio\r
    en: Gravitational torque\r
  equation: tau = M*g*d\r
  latex: \\tau = M g d\r
  rearrangements:\r
  - target: tau\r
    equation: tau = M*g*d\r
    latex: \\tau = M g d\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Torque gravitatorio\r
    en: Gravitational torque\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check:\r
    es: M L^2 T^-2\r
    en: M L^2 T^-2\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - precesion\r
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
- id: L\r
  title:\r
    es: Momento angular de spin\r
    en: Spin angular momentum\r
  equation: L = I*omega\r
  latex: L = I \\omega\r
  rearrangements:\r
  - target: L\r
    equation: L = I*omega\r
    latex: L = I \\omega\r
    constraints: []\r
  category: auxiliary\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Momento angular de spin\r
    en: Spin angular momentum\r
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
  - precesion\r
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
- id: Omega_g\r
  title:\r
    es: Precesion gravitatoria\r
    en: Gravitational precession\r
  equation: Omegap = (M*g*d)/(I*omega)\r
  latex: \\Omega_p = \\frac{M g d}{I \\omega}\r
  rearrangements:\r
  - target: Omegap\r
    equation: Omegap = (M*g*d)/(I*omega)\r
    latex: \\Omega_p = \\frac{M g d}{I \\omega}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Precesion gravitatoria\r
    en: Gravitational precession\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check:\r
    es: T^-1\r
    en: T^-1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - precesion\r
  result_semantics:\r
    target: Omegap\r
    meaning: Resulta util para interpretar Omegap en el contexto del leaf.\r
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
- id: Tp\r
  title:\r
    es: Periodo de precesion\r
    en: Precession period\r
  equation: Tp = 2*pi/Omegap\r
  latex: T_p = \\frac{2 \\pi}{\\Omega_p}\r
  rearrangements:\r
  - target: Tp\r
    equation: Tp = 2*pi/Omegap\r
    latex: T_p = \\frac{2 \\pi}{\\Omega_p}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Periodo de precesion\r
    en: Precession period\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check:\r
    es: T\r
    en: T\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - precesion\r
  result_semantics:\r
    target: Tp\r
    meaning: Resulta util para interpretar Tp en el contexto del leaf.\r
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
- id: Omega_solve_tau\r
  title:\r
    es: Velocidad angular de precesion despejada para tau\r
    en: Precession angular velocity solved for tau\r
  equation: tau = Omegap*L\r
  latex: \\tau = \\Omega_p L\r
  rearrangements:\r
  - target: tau\r
    equation: tau = Omegap*L\r
    latex: \\tau = \\Omega_p L\r
    constraints: []\r
  category: derived\r
  relation_type: rearrangement\r
  physical_meaning:\r
    es: Forma despejada de Velocidad angular de precesion para calcular tau.\r
    en: Rearranged form of Precession angular velocity to calculate tau.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: *id001\r
  dimension_check: *id002\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: *id003\r
  interpretation_tags:\r
  - precesion\r
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
`;export{e as default};
