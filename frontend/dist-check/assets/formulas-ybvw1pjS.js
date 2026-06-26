const a=`version: 1\r
formulas:\r
- id: segunda_ley_rotacion\r
  title:\r
    es: Ecuación Fundamental de la Dinámica de Rotación\r
    en: Fundamental Equation of Rotational Dynamics\r
  equation: tau_net = I * alpha\r
  latex: \\tau_{net} = I \\cdot \\alpha\r
  rearrangements:\r
  - target: alpha\r
    equation: alpha = tau_net / I\r
    latex: \\alpha = \\frac{\\tau_{net}}{I}\r
    constraints: []\r
  - target: I\r
    equation: I = tau_net / alpha\r
    latex: I = \\frac{\\tau_{net}}{\\alpha}\r
    constraints: []\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: El torque neto sobre un cuerpo rígido es proporcional a su aceleración angular;\r
      la constante de proporcionalidad es el momento de inercia.\r
    en: The net torque on a rigid body is proportional to its angular acceleration;\r
      the proportionality constant is the moment of inertia.\r
  constraints: Eje de giro fijo o que pasa por el CM; cuerpo rígido indeformable.\r
  validity:\r
    es: Válido para sólidos rígidos en rotación alrededor de un eje fijo en régimen\r
      clásico no relativista.\r
    en: Valid for rigid bodies rotating about a fixed axis in the classical non-relativistic\r
      regime.\r
  dimension_check: '[ML^2T^-2] = [ML^2] × [T^-2]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - resolución de sistemas vinculados traslación-rotación\r
  interpretation_tags:\r
  - respuesta_angular\r
  - inercia_rotacional\r
  - causa_del_giro\r
  result_semantics:\r
    target: alpha\r
    meaning: Resulta util para interpretar alpha en el contexto del leaf.\r
  domain_checks:\r
  - 'alpha > 0: aceleración angular en sentido positivo convenido'\r
  - 'alpha === 0: par neto cero o sistema en equilibrio rotacional'\r
  - 'alpha < 0 con tau_net > 0: indicio de error de signos o convenio inconsistente'\r
  coherence_checks:\r
  - 'alpha > 100 para sistemas cotidianos: verificar unidades de tau_net e I'\r
  - 'I <= 0 es imposible físicamente: error de modelo o de datos'\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - 'Si el alumno iguala tau_net = alpha omitiendo I, la dimensión delata el error:\r
    N·m ≠ rad/s²'\r
  - 'Si I es muy pequeño, alpha resultante muy grande: verificar si corresponde a\r
    la geometría del cuerpo rotante'\r
- id: vinculo_traslacion_rotacion\r
  title:\r
    es: Vínculo Cinemático Traslación-Rotación\r
    en: Translation-Rotation Kinematic Constraint\r
  equation: a = alpha * R\r
  latex: a = \\alpha \\cdot R\r
  rearrangements:\r
  - target: alpha\r
    equation: alpha = a / R\r
    latex: \\alpha = \\frac{a}{R}\r
    constraints: []\r
  - target: R\r
    equation: R = a / alpha\r
    latex: R = \\frac{a}{\\alpha}\r
    constraints: []\r
  category: structural\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: La aceleración lineal tangencial del punto de vínculo (cuerda o contacto)\r
      es el producto de la aceleración angular por el radio efectivo, bajo hipótesis\r
      de no deslizamiento.\r
    en: The linear tangential acceleration of the constraint point (rope or contact)\r
      is the product of the angular acceleration and the effective radius, under the\r
      no-slip hypothesis.\r
  constraints: Hilo inextensible y rodadura sin deslizamiento. R > 0.\r
  validity:\r
    es: Válido únicamente cuando la cuerda no patina sobre la polea o cuando el cuerpo\r
      rueda sin deslizar sobre la superficie.\r
    en: Valid only when the rope does not slip on the pulley or when the body rolls\r
      without slipping on the surface.\r
  dimension_check: '[LT^-2] = [T^-2] × [L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - acoplamiento de ecuaciones de Newton traslación y rotación\r
  interpretation_tags:\r
  - vinculo_cinematico\r
  - acoplamiento_traslacion_rotacion\r
  - no_deslizamiento\r
  result_semantics:\r
    target: alpha\r
    meaning: Resulta util para interpretar alpha en el contexto del leaf.\r
  domain_checks:\r
  - 'a === alpha * R: la identidad define el vínculo; cualquier desviación viola la\r
    hipótesis de no-deslizamiento'\r
  - R > 0 siempre; R = 0 hace el vínculo físicamente indefinido\r
  coherence_checks:\r
  - 'a > 20 en sistemas pasivos con gravedad como única fuerza motriz es sospechoso:\r
    verificar unidades'\r
  - Si a calculada no coincide con alpha * R, el vínculo está mal aplicado o hay deslizamiento\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - 'Error más frecuente: usar el diámetro en lugar del radio; el resultado dobla\r
    la aceleración'\r
  - 'Si el alumno iguala a = alpha sin multiplicar por R, la dimensión ya delata el\r
    error: m/s² ≠ rad/s²'\r
- id: energia_cinetica_total\r
  title:\r
    es: Energía Cinética Total de un Sólido Rígido\r
    en: Total Kinetic Energy of a Rigid Body\r
  equation: K = 0.5 * m * v^2 + 0.5 * I * omega^2\r
  latex: K = \\frac{1}{2}m v^2 + \\frac{1}{2}I \\omega^2\r
  rearrangements:\r
  - target: v\r
    equation: v = sqrt((2 * K - I * omega^2) / m)\r
    latex: v = \\sqrt{\\frac{2K - I\\omega^2}{m}}\r
    constraints: []\r
  - target: omega\r
    equation: omega = sqrt((2 * K - m * v^2) / I)\r
    latex: \\omega = \\sqrt{\\frac{2K - mv^2}{I}}\r
    constraints: []\r
  category: derived\r
  relation_type: definition\r
  physical_meaning:\r
    es: La energía cinética de un cuerpo que traslada y rota simultáneamente es la\r
      suma de la energía de traslación del centro de masas y la energía de rotación\r
      respecto al centro de masas.\r
    en: The kinetic energy of a body simultaneously translating and rotating is the\r
      sum of the translational kinetic energy of the center of mass and the rotational\r
      kinetic energy about the center of mass.\r
  constraints: Cuerpo rígido; v es la velocidad del CM; omega es la velocidad angular\r
    respecto al CM; I calculado respecto al CM.\r
  validity:\r
    es: Válido para cualquier movimiento plano de sólido rígido en régimen clásico.\r
      Generalización del teorema de König.\r
    en: Valid for any planar rigid body motion in the classical regime. Generalization\r
      of König's theorem.\r
  dimension_check: '[ML^2T^-2] = [M][LT^-1]^2 + [ML^2][T^-1]^2'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - balances energéticos mecánicos y verificación de consistencia de aceleraciones\r
  interpretation_tags:\r
  - particion_energetica\r
  - fraccion_rotacional\r
  - inercia_efectiva\r
  result_semantics:\r
    target: v\r
    meaning: Resulta util para interpretar v en el contexto del leaf.\r
  domain_checks:\r
  - K >= 0 siempre\r
  - 0.5 * I * omega^2 <= K siempre (componente rotacional no puede superar la total)\r
  coherence_checks:\r
  - 'K negativa es imposible: error de signo o sustitución incorrecta'\r
  - Si 0.5*I*omega^2 > K resulta, hay error en la fórmula o en los datos de v y omega\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - 'Error clásico: usar K = ½mv² olvidando el término rotacional; subestima la energía\r
    total'\r
  - 'Si K calculada supera la energía potencial inicial perdida, hay violación de\r
    la conservación energética: revisar pérdidas ignoradas'\r
`;export{a as default};
