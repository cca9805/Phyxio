const e=`version: 1\r
formulas:\r
- id: cons\r
  title:\r
    es: Conservacion del momento angular\r
    en: Angular-momentum conservation\r
  equation: Li = Lf\r
  latex: L_i = L_f\r
  rearrangements:\r
  - target: Lf\r
    equation: Lf = Li\r
    latex: L_f = L_i\r
    constraints: []\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Conservacion del momento angular\r
    en: Angular-momentum conservation\r
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
  - conservacion-momento-angular\r
  result_semantics:\r
    target: Lf\r
    meaning: Resulta util para interpretar Lf en el contexto del leaf.\r
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
- id: Iomega\r
  title:\r
    es: Conservacion con eje fijo\r
    en: Conservation with fixed axis\r
  equation: Ii*omegai = If*omegaf\r
  latex: I_i \\omega_i = I_f \\omega_f\r
  rearrangements:\r
  - target: omegaf\r
    equation: omegaf = Ii*omegai/If\r
    latex: \\omega_f = \\frac{I_i \\omega_i}{I_f}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Conservacion con eje fijo\r
    en: Conservation with fixed axis\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: &id004\r
    es: Valida en el dominio estandar de este subtema.\r
    en: Valid in the standard domain of this topic.\r
  dimension_check: &id005\r
    es: M L^2 T^-1\r
    en: M L^2 T^-1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: &id006\r
  - theory\r
  - examples\r
  - calculator\r
  interpretation_tags:\r
  - conservacion-momento-angular\r
  result_semantics:\r
    target: omegaf\r
    meaning: Resulta util para interpretar omegaf en el contexto del leaf.\r
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
  category: auxiliary\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Torque medio\r
    en: Average torque\r
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
  - conservacion-momento-angular\r
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
- id: cons_solve_Lf\r
  title:\r
    es: Conservacion del momento angular despejada para Lf\r
    en: Angular-momentum conservation solved for Lf\r
  equation: Lf = Li\r
  latex: L_f = L_i\r
  rearrangements:\r
  - target: Lf\r
    equation: Lf = Li\r
    latex: L_f = L_i\r
    constraints: []\r
  category: derived\r
  relation_type: rearrangement\r
  physical_meaning:\r
    es: Forma despejada de Conservacion del momento angular para calcular Lf.\r
    en: Rearranged form of Angular-momentum conservation to calculate Lf.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: *id001\r
  dimension_check: *id002\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: *id003\r
  interpretation_tags:\r
  - conservacion-momento-angular\r
  result_semantics:\r
    target: Lf\r
    meaning: Resulta util para interpretar Lf en el contexto del leaf.\r
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
- id: Iomega_solve_omegaf\r
  title:\r
    es: Conservacion con eje fijo despejada para omegaf\r
    en: Conservation with fixed axis solved for omegaf\r
  equation: omegaf = Ii*omegai/If\r
  latex: \\omega_f = \\frac{I_i \\omega_i}{I_f}\r
  rearrangements:\r
  - target: omegaf\r
    equation: omegaf = Ii*omegai/If\r
    latex: \\omega_f = \\frac{I_i \\omega_i}{I_f}\r
    constraints: []\r
  category: derived\r
  relation_type: rearrangement\r
  physical_meaning:\r
    es: Forma despejada de Conservacion con eje fijo para calcular omegaf.\r
    en: Rearranged form of Conservation with fixed axis to calculate omegaf.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity: *id004\r
  dimension_check: *id005\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: *id006\r
  interpretation_tags:\r
  - conservacion-momento-angular\r
  result_semantics:\r
    target: omegaf\r
    meaning: Resulta util para interpretar omegaf en el contexto del leaf.\r
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
