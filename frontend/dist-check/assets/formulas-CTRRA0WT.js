const e=`version: 1\r
formulas:\r
- id: aceleracion_coriolis_aplicada\r
  title:\r
    es: Aceleracion de Coriolis en aplicaciones\r
    en: Acceleration of Coriolis in Applications\r
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
    es: Relacion fisica usada en aplicaciones fisicas.\r
    en: Relacion fisica usada en aplicaciones fisicas.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - aplicaciones-fisicas\r
  interpretation_tags:\r
  - aplicaciones-fisicas\r
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
- id: fuerza_desde_aceleracion\r
  title:\r
    es: Fuerza de Coriolis desde aceleracion\r
    en: Coriolis Force from Acceleration\r
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
    es: Relacion fisica usada en aplicaciones fisicas.\r
    en: Relacion fisica usada en aplicaciones fisicas.\r
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
  - aplicaciones-fisicas\r
  interpretation_tags:\r
  - aplicaciones-fisicas\r
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
- id: desvio_lateral_aproximado\r
  title:\r
    es: Desvio lateral aproximado\r
    en: Approximate Lateral Drift\r
  equation: y = 0.5*a_cor*t^2\r
  latex: y\\approx\\frac{1}{2}a_{cor}t^2\r
  rearrangements:\r
  - target: y\r
    equation: y = 0.5*a_cor*t^2\r
    latex: y\\approx\\frac{1}{2}a_{cor}t^2\r
    constraints: []\r
  - target: a_cor\r
    equation: a_cor = 2*y/(t^2)\r
    latex: a_{cor}\\approx\\frac{2y}{t^2}\r
    constraints: []\r
  - target: t\r
    equation: t = sqrt(2*y/a_cor)\r
    latex: t\\approx\\sqrt{\\frac{2y}{a_{cor}}}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en aplicaciones fisicas.\r
    en: Relacion fisica usada en aplicaciones fisicas.\r
  constraints:\r
  - expr: t >= 0\r
    message:\r
      es: El tiempo debe ser no negativo.\r
      en: The time must be non-negative.\r
  - expr: a_cor > 0\r
    message:\r
      es: a_cor debe ser positiva para despejar t.\r
      en: a_cor must be positive to solve for t.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - aplicaciones-fisicas\r
  interpretation_tags:\r
  - aplicaciones-fisicas\r
  result_semantics:\r
    target: y\r
    meaning: Resulta util para interpretar y en el contexto del leaf.\r
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
- id: criterio_relevancia_conceptual\r
  title:\r
    es: Criterio de relevancia (conceptual)\r
    en: Relevance Criterion (conceptual)\r
  equation: a_cor = 2*omega*v_rel*sin(alpha)\r
  latex: a_{cor}=2\\omega v_{rel}\\sin\\alpha\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en aplicaciones fisicas.\r
    en: Relacion fisica usada en aplicaciones fisicas.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es un criterio de modelado por orden de magnitud, no una igualdad cerrada\r
      para un resultado unico.\r
    en: This is an order-of-magnitude modeling criterion, not a closed equation for\r
      a unique result.\r
  used_in:\r
  - aplicaciones-fisicas\r
  interpretation_tags:\r
  - aplicaciones-fisicas\r
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
`;export{e as default};
