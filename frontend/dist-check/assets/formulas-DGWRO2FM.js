const e=`version: 1\r
formulas:\r
- id: relacion_v_omega\r
  title:\r
    es: Relación Velocidad Lineal-Angular\r
    en: Linear-Angular Velocity Relationship\r
  equation: v_t = omega * R\r
  latex: v_t = \\omega R\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: connection\r
  physical_meaning:\r
    es: La velocidad de un punto es directamente proporcional a su distancia al eje\r
      y a la rapidez de giro.\r
    en: A point's velocity is directly proportional to its distance from the axis\r
      and the rotation rate.\r
  constraints:\r
  - R perpendicular al eje\r
  validity:\r
    es: Válida para cualquier punto de un sólido rígido.\r
    en: Valid for any point on a rigid solid.\r
  dimension_check: '[LT^-1] = [T^-1][L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - relacion-lineal-angular\r
  interpretation_tags:\r
  - relacion-lineal-angular\r
  result_semantics:\r
    target: v_t\r
    meaning: Resulta util para interpretar v_t en el contexto del leaf.\r
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
- id: relacion_at_alpha\r
  title:\r
    es: Relación Aceleración Tangencial-Angular\r
    en: Tangential-Angular Acceleration Relationship\r
  equation: a_t = alpha * R\r
  latex: a_t = \\alpha R\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: connection\r
  physical_meaning:\r
    es: El cambio en la rapidez lineal es el reflejo lineal de la aceleración angular.\r
    en: The change in linear speed is the linear reflection of the angular acceleration.\r
  constraints:\r
  - alpha constante o instantanea\r
  validity:\r
    es: Solo existe si el ritmo de giro cambia.\r
    en: Only exists if the rotation rate changes.\r
  dimension_check: '[LT^-2] = [T^-2][L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - relacion-lineal-angular\r
  interpretation_tags:\r
  - relacion-lineal-angular\r
  result_semantics:\r
    target: a_t\r
    meaning: Resulta util para interpretar a_t en el contexto del leaf.\r
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
- id: aceleracion_normal\r
  title:\r
    es: Aceleración Normal (Centrípeta)\r
    en: Normal (Centripetal) Acceleration\r
  equation: a_n = omega^2 * R\r
  latex: a_n = \\omega^2 R\r
  rearrangements:
  - target: a_n
    equation: a_n = v_t^2 / R
    latex: a_n = \\frac{v_t^2}{R}
    constraints: []
  category: fundamental\r
  relation_type: geometric_constraint\r
  physical_meaning:\r
    es: Aceleración necesaria para mantener la trayectoria curva, apuntando al centro.\r
    en: Acceleration required to maintain the curved path, pointing to the center.\r
  constraints:\r
  - siempre presente si hay rotacion (omega != 0)\r
  validity:\r
    es: Crucial para el estudio de órbitas y curvas.\r
    en: Crucial for studying orbits and curves.\r
  dimension_check: '[LT^-2] = [T^-2][L] o [L^2 T^-2] / [L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - relacion-lineal-angular\r
  interpretation_tags:\r
  - relacion-lineal-angular\r
  result_semantics:\r
    target: a_n\r
    meaning: Resulta util para interpretar a_n en el contexto del leaf.\r
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
- id: aceleracion_total_modulo\r
  title:\r
    es: Módulo de la Aceleración Total\r
    en: Total Acceleration Magnitude\r
  equation: a_total = sqrt(a_t^2 + a_n^2)\r
  latex: a = \\sqrt{a_t^2 + a_n^2}\r
  rearrangements: []\r
  category: complex\r
  relation_type: vector_sum\r
  physical_meaning:\r
    es: Resultante de la aceleración intrínseca en el sistema de referencia del punto.\r
    en: Resultant of the intrinsic acceleration in the point's reference system.\r
  constraints:\r
  - componentes ortogonales\r
  validity:\r
    es: Aplicable a cualquier movimiento curvilíneo.\r
    en: Applicable to any curvilinear motion.\r
  dimension_check: '[LT^-2] = sqrt([LT^-2]^2 + [LT^-2]^2)'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - relacion-lineal-angular\r
  interpretation_tags:\r
  - relacion-lineal-angular\r
  result_semantics:\r
    target: a_total\r
    meaning: Resulta util para interpretar a_total en el contexto del leaf.\r
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
