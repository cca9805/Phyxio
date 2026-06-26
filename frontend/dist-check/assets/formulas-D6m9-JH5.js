const e=`version: 1\r
formulas:\r
- id: modulo_fuerza_coriolis\r
  title:\r
    es: Modulo de la fuerza de Coriolis\r
    en: Magnitude of the Coriolis Force\r
  equation: F_cor = 2*m*omega*v_rel*sin(alpha)\r
  latex: F_{cor}=2m\\omega v_{rel}\\sin\\alpha\r
  rearrangements:\r
  - target: F_cor\r
    equation: F_cor = 2*m*omega*v_rel*sin(alpha)\r
    latex: F_{cor}=2m\\omega v_{rel}\\sin\\alpha\r
    constraints: []\r
  - target: m\r
    equation: m = F_cor/(2*omega*v_rel*sin(alpha))\r
    latex: m=\\frac{F_{cor}}{2\\omega v_{rel}\\sin\\alpha}\r
    constraints: []\r
  - target: omega\r
    equation: omega = F_cor/(2*m*v_rel*sin(alpha))\r
    latex: \\omega=\\frac{F_{cor}}{2m v_{rel}\\sin\\alpha}\r
    constraints: []\r
  - target: v_rel\r
    equation: v_rel = F_cor/(2*m*omega*sin(alpha))\r
    latex: v_{rel}=\\frac{F_{cor}}{2m\\omega\\sin\\alpha}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza coriolis.\r
    en: Relacion fisica usada en definicion fuerza coriolis.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva.\r
      en: The mass must be positive.\r
  - expr: omega >= 0\r
    message:\r
      es: omega debe ser no negativa en este modelo escalar.\r
      en: omega must be non-negative in this scalar model.\r
  - expr: v_rel >= 0\r
    message:\r
      es: v_rel debe ser no negativa en este modelo escalar.\r
      en: v_rel must be non-negative in this scalar model.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - definicion-fuerza-coriolis\r
  interpretation_tags:\r
  - definicion-fuerza-coriolis\r
  result_semantics:\r
    target: F_cor\r
    meaning: Resulta util para interpretar F_cor en el contexto del leaf.\r
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
- id: aceleracion_coriolis\r
  title:\r
    es: Aceleracion de Coriolis\r
    en: Acceleration of Coriolis\r
  equation: a_cor = 2*omega*v_rel*sin(alpha)\r
  latex: a_{cor}=2\\omega v_{rel}\\sin\\alpha\r
  rearrangements:\r
  - target: a_cor\r
    equation: a_cor = 2*omega*v_rel*sin(alpha)\r
    latex: a_{cor}=2\\omega v_{rel}\\sin\\alpha\r
    constraints: []\r
  - target: omega\r
    equation: omega = a_cor/(2*v_rel*sin(alpha))\r
    latex: \\omega=\\frac{a_{cor}}{2v_{rel}\\sin\\alpha}\r
    constraints: []\r
  - target: v_rel\r
    equation: v_rel = a_cor/(2*omega*sin(alpha))\r
    latex: v_{rel}=\\frac{a_{cor}}{2\\omega\\sin\\alpha}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza coriolis.\r
    en: Relacion fisica usada en definicion fuerza coriolis.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - definicion-fuerza-coriolis\r
  interpretation_tags:\r
  - definicion-fuerza-coriolis\r
  result_semantics:\r
    target: a_cor\r
    meaning: Resulta util para interpretar a_cor en el contexto del leaf.\r
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
- id: relacion_fuerza_aceleracion\r
  title:\r
    es: Relacion entre fuerza y aceleracion de Coriolis\r
    en: Relation Between Force and Acceleration of Coriolis\r
  equation: F_cor = m*a_cor\r
  latex: F_{cor}=m\\,a_{cor}\r
  rearrangements:\r
  - target: F_cor\r
    equation: F_cor = m*a_cor\r
    latex: F_{cor}=m\\,a_{cor}\r
    constraints: []\r
  - target: m\r
    equation: m = F_cor/a_cor\r
    latex: m=\\frac{F_{cor}}{a_{cor}}\r
    constraints: []\r
  - target: a_cor\r
    equation: a_cor = F_cor/m\r
    latex: a_{cor}=\\frac{F_{cor}}{m}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza coriolis.\r
    en: Relacion fisica usada en definicion fuerza coriolis.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva.\r
      en: The mass must be positive.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - definicion-fuerza-coriolis\r
  interpretation_tags:\r
  - definicion-fuerza-coriolis\r
  result_semantics:\r
    target: F_cor\r
    meaning: Resulta util para interpretar F_cor en el contexto del leaf.\r
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
- id: forma_vectorial_conceptual\r
  title:\r
    es: Forma vectorial de Coriolis (conceptual)\r
    en: Vector Form of Coriolis (conceptual)\r
  equation: F_cor = 2*m*omega*v_rel*sin(alpha)\r
  latex: \\vec F_{cor}=-2m(\\vec\\Omega\\times\\vec v_{rel})\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza coriolis.\r
    en: Relacion fisica usada en definicion fuerza coriolis.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: La direccion requiere producto vectorial completo. Esta calculadora trabaja\r
      con modulos escalares.\r
    en: The direction requires the full cross product. This calculator works only\r
      with scalar magnitudes.\r
  used_in:\r
  - definicion-fuerza-coriolis\r
  interpretation_tags:\r
  - definicion-fuerza-coriolis\r
  result_semantics:\r
    target: F_cor\r
    meaning: Resulta util para interpretar F_cor en el contexto del leaf.\r
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
