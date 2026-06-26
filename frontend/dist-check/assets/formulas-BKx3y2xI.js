const e=`version: 1\r
formulas:\r
- id: caida_libre_posicion\r
  title:\r
    es: Ecuación horaria de la posición vertical\r
    en: Vertical position-time equation\r
  equation: y = y0 + v0*t - 0.5*g*t^2\r
  latex: y = y_0 + v_0 t - \\frac{1}{2} g t^2\r
  rearrangements:\r
  - target: v0\r
    latex: v_0 = \\frac{y - y_0 + \\frac{1}{2} g t^2}{t}\r
    equation: v0 = (y - y0 + 0.5*g*t^2)/t\r
    constraints: []\r
  - target: y0\r
    latex: y_0 = y - v_0 t + \\frac{1}{2} g t^2\r
    equation: y0 = y - v0*t + 0.5*g*t^2\r
    constraints: []\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Modela la trayectoria parabólica vertical bajo la influencia de la gravedad.\r
    en: Models the vertical parabolic trajectory under the influence of gravity.\r
  constraints:\r
  - ausencia de resistencia del aire\r
  - g constante y orientada hacia abajo\r
  validity:\r
    es: Válido cerca de la superficie terrestre para objetos con baja densidad de arrastre.\r
    en: Valid near the Earth's surface for objects with low drag density.\r
  dimension_check: '[L] = [L] + [L/T][T] - [L/T^2][T^2] = [L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Cálculo de altura máxima\r
  - Predicción de tiempo de impacto\r
  interpretation_tags:\r
  - movimiento-vertical-bajo-gravedad\r
  result_semantics:\r
    target: v0\r
    meaning: Resulta util para interpretar v0 en el contexto del leaf.\r
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
- id: caida_libre_velocidad\r
  title:\r
    es: Ecuación de velocidad vertical\r
    en: Vertical velocity-time equation\r
  equation: v = v0 - g*t\r
  latex: v = v_0 - g t\r
  rearrangements:\r
  - target: t\r
    latex: t = \\frac{v_0 - v}{g}\r
    equation: t = (v0 - v)/g\r
    constraints: []\r
  - target: v0\r
    latex: v_0 = v + g t\r
    equation: v0 = v + g*t\r
    constraints: []\r
  category: fundamental\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: Describe la reducción o aumento lineal de la velocidad debido a la gravedad.\r
    en: Describes the linear reduction or increase of velocity due to gravity.\r
  constraints:\r
  - movimiento puramente vertical\r
  validity:\r
    es: Régimen cinemático estándar de caída libre.\r
    en: Standard free-fall kinematic regime.\r
  dimension_check: '[L/T] = [L/T] - [L/T^2][T] = [L/T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Determinación de velocidad de impacto\r
  - Cálculo de tiempo de vuelo\r
  interpretation_tags:\r
  - movimiento-vertical-bajo-gravedad\r
  result_semantics:\r
    target: t\r
    meaning: Resulta util para interpretar t en el contexto del leaf.\r
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
- id: caida_libre_torricelli\r
  title:\r
    es: Ecuación de Torricelli vertical\r
    en: Vertical Torricelli's equation\r
  equation: v^2 = v0^2 - 2*g*(y - y0)\r
  latex: v^2 = v_0^2 - 2 g (y - y_0)\r
  rearrangements:\r
  - target: v\r
    latex: v = \\pm \\sqrt{v_0^2 - 2 g (y - y_0)}\r
    equation: v = sqrt(v0^2 - 2*g*(y - y0))\r
    constraints: []\r
  - target: y\r
    latex: y = y_0 + \\frac{v_0^2 - v^2}{2g}\r
    equation: y = y0 + (v0^2 - v^2)/(2*g)\r
    constraints: []\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: Relaciona el cambio de velocidad con el desplazamiento sin depender del tiempo.\r
    en: Relates velocity change with displacement without depending on time.\r
  constraints:\r
  - g != 0\r
  validity:\r
    es: Útil en problemas donde se desconoce la duración del evento.\r
    en: Useful in problems where the duration of the event is unknown.\r
  dimension_check: '[L^2/T^2] = [L^2/T^2] - [L/T^2][L] = [L^2/T^2]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Cálculo de altura máxima despejando cuando v = 0\r
  interpretation_tags:\r
  - movimiento-vertical-bajo-gravedad\r
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
- id: caida_libre_tiempo_vuelo\r
  title:\r
    es: Tiempo de impacto (desde altura y sin v0)\r
    en: Impact time (from height without v0)\r
  equation: t = sqrt(2*h/g)\r
  latex: t = \\sqrt{\\frac{2h}{g}}\r
  rearrangements:\r
  - target: h\r
    latex: h = \\frac{1}{2} g t^2\r
    equation: h = 0.5*g*t^2\r
    constraints: []\r
  category: auxiliary\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: Determina la duración de una caída libre pura desde una altura h.\r
    en: Determines the duration of a pure free fall from a height h.\r
  constraints:\r
  - v0 = 0\r
  - objeto se suelta desde el reposo\r
  validity:\r
    es: Casos de caída libre pura sin impulso inicial.\r
    en: Pure free-fall cases without initial impulse.\r
  dimension_check: '[T] = sqrt([L]/[L/T^2]) = [T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Estimación rápida de profundidad de pozos o edificios\r
  interpretation_tags:\r
  - movimiento-vertical-bajo-gravedad\r
  result_semantics:\r
    target: h\r
    meaning: Resulta util para interpretar h en el contexto del leaf.\r
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
- id: caida_libre_tiempo_subida\r
  title:\r
    es: Tiempo para alcanzar la altura maxima en lanzamiento vertical\r
    en: Time to reach maximum height in vertical launch\r
  equation: t_sub = v0 / g\r
  latex: t_{sub} = \\frac{v_0}{g}\r
  rearrangements:\r
  - target: t_sub\r
    equation: t_sub = v0 / g\r
    latex: t_{sub} = \\frac{v_0}{g}\r
    constraints: []\r
  - target: v0\r
    equation: v0 = g * t_sub\r
    latex: v_0 = g\\,t_{sub}\r
    constraints: []\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: En el punto mas alto la velocidad es cero. Despejando t de v = v0 - g*t = 0 se obtiene el instante en que el movil deja de subir.\r
    en: At the highest point the velocity is zero. Solving v = v0 - g*t = 0 gives the instant when the body stops rising.\r
  constraints:\r
  - v0 > 0 (lanzamiento hacia arriba)\r
  - g > 0\r
  validity:\r
    es: Valida para lanzamientos verticales ascendentes bajo el modelo ideal.\r
    en: Valid for upward vertical launches under the ideal model.\r
  dimension_check: '[T] = [L T^-1] / [L T^-2] = [T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Calculo de la altura maxima en lanzamientos verticales\r
  interpretation_tags:\r
  - movimiento-vertical-bajo-gravedad\r
  result_semantics:\r
    target: t_sub\r
    meaning: Resulta util para determinar cuando ocurre el apice y calcular la altura maxima.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que v0 > 0 para que el tiempo de subida sea positivo.\r
      en: Check that v0 > 0 so the rise time is positive.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - En la grafica v vs t el instante t_sub es donde la recta cruza el eje horizontal.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: El tiempo total de subida y bajada sobre el mismo punto es 2*t_sub si se lanza y aterriza a la misma altura.\r
      en: The total rise-and-fall time back to the same height is 2*t_sub when launch and landing height are equal.\r
- id: caida_libre_altura_maxima\r
  title:\r
    es: Altura maxima en lanzamiento vertical\r
    en: Maximum height in vertical launch\r
  equation: h_max = v0^2 / (2*g)\r
  latex: h_{max} = \\frac{v_0^2}{2g}\r
  rearrangements:\r
  - target: h_max\r
    equation: h_max = v0^2 / (2*g)\r
    latex: h_{max} = \\frac{v_0^2}{2g}\r
    constraints: []\r
  - target: v0\r
    equation: v0 = sqrt(2*g*h_max)\r
    latex: v_0 = \\sqrt{2g\\,h_{max}}\r
    constraints: []\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: Se obtiene evaluando y(t_sub). Expresa la distancia vertical maxima recorrida por encima del punto de lanzamiento.\r
    en: Obtained by evaluating y(t_sub). It expresses the maximum vertical distance traveled above the launch point.\r
  constraints:\r
  - v0 > 0 (lanzamiento hacia arriba)\r
  - g > 0\r
  - posicion inicial tomada como referencia (y0 = 0)\r
  validity:\r
    es: Valida bajo el modelo ideal para lanzamiento vertical con velocidad inicial positiva.\r
    en: Valid under the ideal model for vertical launch with positive initial velocity.\r
  dimension_check: '[L] = [L^2 T^-2] / [L T^-2] = [L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Determinacion de la cota maxima en lanzamientos verticales\r
  interpretation_tags:\r
  - movimiento-vertical-bajo-gravedad\r
  result_semantics:\r
    target: h_max\r
    meaning: Resulta util para calcular la altura maxima directamente sin calcular t_sub previamente.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que v0 > 0 para que h_max sea positivo.\r
      en: Check that v0 > 0 so h_max is positive.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - En la grafica y vs t h_max corresponde al maximo de la parabola.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba que no confundes h_max (altura sobre el punto de lanzamiento) con la altura total sobre el suelo si y0 > 0.\r
      en: Check you are not confusing h_max (height above launch point) with total height above ground if y0 > 0.\r
`;export{e as default};
