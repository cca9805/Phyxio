const e=`version: 1\r
formulas:\r
- id: fuerza_centrifuga_base\r
  title:\r
    es: Fuerza centrifuga en ejemplo base\r
    en: Centrifugal Force in Example Base\r
  equation: F_cf = m*omega^2*r\r
  latex: F_{cf}=m\\omega^2 r\r
  rearrangements:\r
  - target: F_cf\r
    equation: F_cf = m*omega^2*r\r
    latex: F_{cf}=m\\omega^2 r\r
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
    es: Relacion fisica usada en ejemplos fuerza centrifuga.\r
    en: Relacion fisica usada en ejemplos fuerza centrifuga.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  interpretation_tags:\r
  - ejemplos-fuerza-centrifuga\r
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
- id: conversion_rpm\r
  title:\r
    es: Conversion de rpm a rad/s\r
    en: Conversion from RPM to rad/s\r
  equation: omega = 2*pi*rpm/60\r
  latex: \\omega=\\frac{2\\pi\\,rpm}{60}\r
  rearrangements:\r
  - target: omega\r
    equation: omega = 2*pi*rpm/60\r
    latex: \\omega=\\frac{2\\pi\\,rpm}{60}\r
    constraints: []\r
  - target: rpm\r
    equation: rpm = 60*omega/(2*pi)\r
    latex: rpm=\\frac{60\\omega}{2\\pi}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ejemplos fuerza centrifuga.\r
    en: Relacion fisica usada en ejemplos fuerza centrifuga.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  interpretation_tags:\r
  - ejemplos-fuerza-centrifuga\r
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
- id: velocidad_tangencial\r
  title:\r
    es: Relacion tangencial para ejemplos\r
    en: Tangential Relation for Examples\r
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
    es: Relacion fisica usada en ejemplos fuerza centrifuga.\r
    en: Relacion fisica usada en ejemplos fuerza centrifuga.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  interpretation_tags:\r
  - ejemplos-fuerza-centrifuga\r
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
- id: factor_por_cambio_omega\r
  title:\r
    es: Cambio relativo de fuerza por cambio de omega\r
    en: Relative Force Change under a Change in Angular Speed\r
  equation: ratio = (omega2/omega1)^2\r
  latex: R=\\left(\\frac{\\omega_2}{\\omega_1}\\right)^2\r
  rearrangements:\r
  - target: ratio\r
    equation: ratio = (omega2/omega1)^2\r
    latex: R=\\left(\\frac{\\omega_2}{\\omega_1}\\right)^2\r
    constraints: []\r
  - target: omega2\r
    equation: omega2 = omega1*sqrt(ratio)\r
    latex: \\omega_2=\\omega_1\\sqrt{R}\r
    constraints: []\r
  - target: omega1\r
    equation: omega1 = omega2/sqrt(ratio)\r
    latex: \\omega_1=\\frac{\\omega_2}{\\sqrt{R}}\r
    constraints: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ejemplos fuerza centrifuga.\r
    en: Relacion fisica usada en ejemplos fuerza centrifuga.\r
  constraints:\r
  - expr: omega1 > 0\r
    message:\r
      es: omega1 debe ser positiva.\r
      en: Omega1 must be positive.\r
  - expr: ratio > 0\r
    message:\r
      es: La razon de fuerzas debe ser positiva.\r
      en: The force ratio must be positive.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable: null\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  interpretation_tags:\r
  - ejemplos-fuerza-centrifuga\r
  result_semantics:\r
    target: ratio\r
    meaning: Resulta util para interpretar ratio en el contexto del leaf.\r
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
- id: criterio_de_aplicacion_conceptual\r
  title:\r
    es: Criterio de marco (conceptual)\r
    en: Frame Criterion (conceptual)\r
  equation: F_cf = m*omega^2*r\r
  latex: F_{cf}=m\\omega^2 r\r
  rearrangements: []\r
  category: operative\r
  relation_type: derived_relation\r
  physical_meaning:\r
    es: Relacion fisica usada en ejemplos fuerza centrifuga.\r
    en: Relacion fisica usada en ejemplos fuerza centrifuga.\r
  constraints: Aplicar solo dentro del modelo descrito.\r
  validity:\r
    es: Valida dentro del dominio de aplicacion del modelo usado.\r
    en: Valida dentro del dominio de aplicacion del modelo usado.\r
  dimension_check: Comprobar unidades antes de interpretar.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una condicion de aplicacion del modelo, no una ecuacion numerica independiente.\r
    en: This is a condition for applying the model, not an independent numerical equation.\r
  used_in:\r
  - ejemplos-fuerza-centrifuga\r
  interpretation_tags:\r
  - ejemplos-fuerza-centrifuga\r
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
