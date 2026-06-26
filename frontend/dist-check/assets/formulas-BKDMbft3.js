const e=`version: 1\r
formulas:\r
- id: definicion_radian\r
  title:\r
    es: Definición de Radian\r
    en: Definition of Radian\r
  equation: theta = s / R\r
  latex: \\theta = \\frac{s}{R}\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: El ángulo en radianes es la proporción entre el arco recorrido y el radio\r
      de la circunferencia.\r
    en: The angle in radians is the ratio between the traveled arc and the radius\r
      of the circle.\r
  constraints:\r
  - s y R en las mismas unidades de longitud\r
  validity:\r
    es: Universal para cualquier circunferencia.\r
    en: Universal for any circle.\r
  dimension_check: '[1] = [L] / [L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - magnitudes-angulares\r
  interpretation_tags:\r
  - magnitudes-angulares\r
  result_semantics:\r
    target: theta\r
    meaning: Resulta util para interpretar theta en el contexto del leaf.\r
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
- id: relacion_omega_periodo\r
  title:\r
    es: Relación entre velocidad angular y periodo\r
    en: Relationship between angular velocity and period\r
  equation: omega = 2 * pi / T\r
  latex: \\omega = \\frac{2\\pi}{T}\r
  rearrangements: []\r
  category: derived\r
  relation_type: definition\r
  physical_meaning:\r
    es: En una vuelta completa (2π rad), el tiempo transcurrido es exactamente el\r
      periodo.\r
    en: In one full turn (2π rad), the elapsed time is exactly the period.\r
  constraints:\r
  - solo para movimiento circular uniforme\r
  validity:\r
    es: Válida para cualquier fenómeno cíclico.\r
    en: Valid for any cyclic phenomenon.\r
  dimension_check: '[T^-1] = [1] / [T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - magnitudes-angulares\r
  interpretation_tags:\r
  - magnitudes-angulares\r
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
- id: relacion_omega_frecuencia\r
  title:\r
    es: Relación entre velocidad angular y frecuencia\r
    en: Relationship between angular velocity and frequency\r
  equation: omega = 2 * pi * f\r
  latex: \\omega = 2\\pi f\r
  rearrangements: []\r
  category: derived\r
  relation_type: definition\r
  physical_meaning:\r
    es: La velocidad angular es la frecuencia escalada por el ángulo de una revolución\r
      completa.\r
    en: Angular velocity is the frequency scaled by the angle of a complete revolution.\r
  constraints:\r
  - f en Hz (1/s)\r
  validity:\r
    es: Herramienta de conversión fundamental en ingeniería.\r
    en: Fundamental conversion tool in engineering.\r
  dimension_check: '[T^-1] = [1] * [T^-1]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - magnitudes-angulares\r
  interpretation_tags:\r
  - magnitudes-angulares\r
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
- id: relacion_f_T\r
  title:\r
    es: Relación frecuencia-periodo\r
    en: Frequency-period relationship\r
  equation: f = 1 / T\r
  latex: f = \\frac{1}{T}\r
  rearrangements: []\r
  category: auxiliary\r
  relation_type: definition\r
  physical_meaning:\r
    es: El número de vueltas por segundo es el inverso del tiempo que tarda una sola\r
      vuelta.\r
    en: The number of turns per second is the inverse of the time it takes for a single\r
      turn.\r
  constraints:\r
  - T != 0\r
  validity:\r
    es: Definición universal de frecuencia.\r
    en: Universal definition of frequency.\r
  dimension_check: '[T^-1] = 1 / [T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - magnitudes-angulares\r
  interpretation_tags:\r
  - magnitudes-angulares\r
  result_semantics:\r
    target: f\r
    meaning: Resulta util para interpretar f en el contexto del leaf.\r
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
