const e=`version: 1\r
formulas:\r
- id: transformacion_aceleraciones\r
  title:\r
    es: Transformacion de aceleraciones\r
    en: Acceleration transformation\r
  equation: a_in = a_rel + a_marco\r
  latex: a_{in}=a_{rel}+a_{marco}\r
  rearrangements:\r
  - target: a_in\r
    equation: a_in = a_rel + a_marco\r
    latex: a_{in}=a_{rel}+a_{marco}\r
    constraints: []\r
  - target: a_rel\r
    equation: a_rel = a_in - a_marco\r
    latex: a_{rel}=a_{in}-a_{marco}\r
    constraints: []\r
  - target: a_marco\r
    equation: a_marco = a_in - a_rel\r
    latex: a_{marco}=a_{in}-a_{rel}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en interpretacion.\r
    en: Physical relation used in the interpretation of fictitious forces.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Aplicar solo dentro del modelo descrito.\r
      en: Apply only within the described model.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - interpretacion\r
  interpretation_tags:\r
  - interpretacion\r
  result_semantics:\r
    target: a_in\r
    meaning: Resulta util para interpretar a_in en el contexto del leaf.\r
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
- id: fuerza_ficticia_interpretacion\r
  title:\r
    es: Fuerza ficticia por interpretacion de marco\r
    en: Fictitious force from frame interpretation\r
  equation: F_fict = -m*a_marco\r
  latex: F_{fict}=-m\\,a_{marco}\r
  rearrangements:\r
  - target: F_fict\r
    equation: F_fict = -m*a_marco\r
    latex: F_{fict}=-m\\,a_{marco}\r
    constraints: []\r
  - target: a_marco\r
    equation: a_marco = -F_fict/m\r
    latex: a_{marco}=-\\frac{F_{fict}}{m}\r
    constraints: []\r
  - target: m\r
    equation: m = -F_fict/a_marco\r
    latex: m=-\\frac{F_{fict}}{a_{marco}}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en interpretacion.\r
    en: Physical relation used in the interpretation of fictitious forces.\r
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
  - interpretacion\r
  interpretation_tags:\r
  - interpretacion\r
  result_semantics:\r
    target: F_fict\r
    meaning: Resulta util para interpretar F_fict en el contexto del leaf.\r
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
- id: equivalencia_dinamica\r
  title:\r
    es: Balance dinamico en marco no inercial\r
    en: Dynamical balance in a non-inertial frame\r
  equation: F_res + F_fict = m*a_rel\r
  latex: F_{res}+F_{fict}=m\\,a_{rel}\r
  rearrangements:\r
  - target: F_res\r
    equation: F_res = m*a_rel - F_fict\r
    latex: F_{res}=m\\,a_{rel}-F_{fict}\r
    constraints: []\r
  - target: F_fict\r
    equation: F_fict = m*a_rel - F_res\r
    latex: F_{fict}=m\\,a_{rel}-F_{res}\r
    constraints: []\r
  - target: a_rel\r
    equation: a_rel = (F_res + F_fict)/m\r
    latex: a_{rel}=\\frac{F_{res}+F_{fict}}{m}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en interpretacion.\r
    en: Physical relation used in the interpretation of fictitious forces.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Aplicar solo dentro del modelo descrito.\r
      en: Apply only within the described model.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - interpretacion\r
  interpretation_tags:\r
  - interpretacion\r
  result_semantics:\r
    target: F_res\r
    meaning: Resulta util para interpretar F_res en el contexto del leaf.\r
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
- id: criterio_de_marco_conceptual\r
  title:\r
    es: Criterio de consistencia de marco (conceptual)\r
    en: Frame-consistency criterion (conceptual)\r
  equation: F_res = m*a_in\r
  latex: \\sum \\vec F_{reales}=m\\vec a_{in}\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en interpretacion.\r
    en: Physical relation used in the interpretation of fictitious forces.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Aplicar solo dentro del modelo descrito.\r
      en: Apply only within the described model.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una ecuacion vectorial general de marco inercial. Debe proyectarse por\r
      ejes para usarla en calculadora escalar.\r
    en: It is a general vector equation for an inertial frame. It must be projected\r
      onto chosen axes before it can be used in a scalar calculator.\r
  used_in:\r
  - interpretacion\r
  interpretation_tags:\r
  - interpretacion\r
  result_semantics:\r
    target: F_res\r
    meaning: Resulta util para interpretar F_res en el contexto del leaf.\r
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
