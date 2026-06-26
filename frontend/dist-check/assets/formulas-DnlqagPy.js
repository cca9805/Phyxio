const e=`version: 1\r
formulas:\r
- id: fuerza_centrifuga_omega\r
  title:\r
    es: Fuerza centrifuga desde omega\r
    en: Centrifugal Force from Angular Speed\r
  equation: F_cf = m*omega^2*r\r
  latex: F_{cf}=m\\omega^2 r\r
  rearrangements:\r
  - target: F_cf\r
    equation: F_cf = m*omega^2*r\r
    latex: F_{cf}=m\\omega^2 r\r
    constraints: []\r
  - target: m\r
    equation: m = F_cf/(omega^2*r)\r
    latex: m=\\frac{F_{cf}}{\\omega^2 r}\r
    constraints: []\r
  - target: omega\r
    equation: omega = sqrt(F_cf/(m*r))\r
    latex: \\omega=\\sqrt{\\frac{F_{cf}}{m r}}\r
    constraints: []\r
  - target: r\r
    equation: r = F_cf/(m*omega^2)\r
    latex: r=\\frac{F_{cf}}{m\\omega^2}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza centrifuga.\r
    en: Relacion fisica usada en definicion fuerza centrifuga.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva.\r
      en: The mass must be positive.\r
  - expr: r > 0\r
    message:\r
      es: El radio debe ser positivo.\r
      en: The radius must be positive.\r
  - expr: omega >= 0\r
    message:\r
      es: omega no puede ser negativa en esta calculadora escalar.\r
      en: omega cannot be negative in this scalar calculator.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  interpretation_tags:\r
  - definicion-fuerza-centrifuga\r
  result_semantics:\r
    target: F_cf\r
    meaning: Resulta util para interpretar F_cf en el contexto del leaf.\r
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
- id: fuerza_centrifuga_velocidad\r
  title:\r
    es: Fuerza centrifuga desde velocidad tangencial\r
    en: Centrifugal Force from Tangential Speed\r
  equation: F_cf = m*v^2/r\r
  latex: F_{cf}=m\\frac{v^2}{r}\r
  rearrangements:\r
  - target: F_cf\r
    equation: F_cf = m*v^2/r\r
    latex: F_{cf}=m\\frac{v^2}{r}\r
    constraints: []\r
  - target: m\r
    equation: m = F_cf*r/(v^2)\r
    latex: m=\\frac{F_{cf}r}{v^2}\r
    constraints: []\r
  - target: v\r
    equation: v = sqrt(F_cf*r/m)\r
    latex: v=\\sqrt{\\frac{F_{cf}r}{m}}\r
    constraints: []\r
  - target: r\r
    equation: r = m*v^2/F_cf\r
    latex: r=\\frac{mv^2}{F_{cf}}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza centrifuga.\r
    en: Relacion fisica usada en definicion fuerza centrifuga.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva.\r
      en: The mass must be positive.\r
  - expr: r > 0\r
    message:\r
      es: El radio debe ser positivo.\r
      en: The radius must be positive.\r
  - expr: F_cf > 0\r
    message:\r
      es: F_cf debe ser positiva para despejar r.\r
      en: F_cf must be positive to solve for r.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  interpretation_tags:\r
  - definicion-fuerza-centrifuga\r
  result_semantics:\r
    target: F_cf\r
    meaning: Resulta util para interpretar F_cf en el contexto del leaf.\r
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
- id: relacion_tangencial\r
  title:\r
    es: Relacion entre velocidad y velocidad angular\r
    en: Relation Between Speed and Angular Velocity\r
  equation: v = omega*r\r
  latex: v=\\omega r\r
  rearrangements:\r
  - target: v\r
    equation: v = omega*r\r
    latex: v=\\omega r\r
    constraints: []\r
  - target: omega\r
    equation: omega = v/r\r
    latex: \\omega=\\frac{v}{r}\r
    constraints: []\r
  - target: r\r
    equation: r = v/omega\r
    latex: r=\\frac{v}{\\omega}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza centrifuga.\r
    en: Relacion fisica usada en definicion fuerza centrifuga.\r
  constraints:\r
  - expr: r > 0\r
    message:\r
      es: El radio debe ser positivo.\r
      en: The radius must be positive.\r
  - expr: omega != 0\r
    message:\r
      es: omega no puede ser 0 para despejar r.\r
      en: omega cannot be zero when solving for r.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  interpretation_tags:\r
  - definicion-fuerza-centrifuga\r
  result_semantics:\r
    target: v\r
    meaning: Resulta util para interpretar v en el contexto del leaf.\r
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
- id: aceleracion_centrifuga\r
  title:\r
    es: Aceleracion centrifuga aparente\r
    en: Apparent Centrifugal Acceleration\r
  equation: a_cf = omega^2*r\r
  latex: a_{cf}=\\omega^2 r\r
  rearrangements:\r
  - target: a_cf\r
    equation: a_cf = omega^2*r\r
    latex: a_{cf}=\\omega^2 r\r
    constraints: []\r
  - target: omega\r
    equation: omega = sqrt(a_cf/r)\r
    latex: \\omega=\\sqrt{\\frac{a_{cf}}{r}}\r
    constraints: []\r
  - target: r\r
    equation: r = a_cf/(omega^2)\r
    latex: r=\\frac{a_{cf}}{\\omega^2}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza centrifuga.\r
    en: Relacion fisica usada en definicion fuerza centrifuga.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  interpretation_tags:\r
  - definicion-fuerza-centrifuga\r
  result_semantics:\r
    target: a_cf\r
    meaning: Resulta util para interpretar a_cf en el contexto del leaf.\r
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
    es: Forma vectorial (conceptual)\r
    en: Vector Form (conceptual)\r
  equation: F_cf = m*omega^2*r\r
  latex: \\vec F_{cf}=m\\omega^2\\vec r\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en definicion fuerza centrifuga.\r
    en: Relacion fisica usada en definicion fuerza centrifuga.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: La calculadora trabaja en modulo escalar; esta expresion es vectorial y requiere\r
      geometria completa.\r
    en: This calculator works with scalar magnitudes; this expression is vectorial\r
      and requires full geometry.\r
  used_in:\r
  - definicion-fuerza-centrifuga\r
  interpretation_tags:\r
  - definicion-fuerza-centrifuga\r
  result_semantics:\r
    target: F_cf\r
    meaning: Resulta util para interpretar F_cf en el contexto del leaf.\r
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
