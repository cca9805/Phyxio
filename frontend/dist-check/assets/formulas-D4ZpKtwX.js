const e=`version: 1\r
formulas:\r
- id: mrua_posicion\r
  title:\r
    es: Ecuación horaria de la posición\r
    en: Position-time quadratic equation\r
  equation: x = x0 + v0*t + 0.5*a*t^2\r
  latex: x = x_0 + v_0 t + \\frac{1}{2} a t^2\r
  rearrangements:\r
  - target: a\r
    latex: a = \\frac{2(x - x_0 - v_0 t)}{t^2}\r
    equation: a = 2*(x - x0 - v0*t)/t^2\r
    constraints: []\r
  - target: v0\r
    latex: v_0 = \\frac{x - x_0 - \\frac{1}{2} a t^2}{t}\r
    equation: v0 = (x - x0 - 0.5*a*t^2)/t\r
    constraints: []\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Determina la posición en función del tiempo bajo una aceleración constante.\r
    en: Determines position as a function of time under constant acceleration.\r
  constraints:\r
  - a es constante\r
  - trayectoria rectilínea\r
  validity:\r
    es: Sistemas inerciales con aceleración invariante.\r
    en: Inertial systems with invariant acceleration.\r
  dimension_check: '[L] = [L] + [L/T][T] + [L/T^2][T^2] = [L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Predicción de trayectorias aceleradas\r
  - Cálculo de distancias de frenado\r
  interpretation_tags:\r
  - mrua\r
  result_semantics:\r
    target: a\r
    meaning: Resulta util para interpretar a en el contexto del leaf.\r
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
- id: mrua_velocidad\r
  title:\r
    es: Ecuación de la velocidad\r
    en: Velocity-time equation\r
  equation: v = v0 + a*t\r
  latex: v = v_0 + a t\r
  rearrangements:\r
  - target: a\r
    latex: a = \\frac{v - v_0}{t}\r
    equation: a = (v - v0)/t\r
    constraints: []\r
  - target: t\r
    latex: t = \\frac{v - v_0}{a}\r
    equation: t = (v - v0)/a\r
    constraints: []\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Describe cómo cambia la velocidad linealmente con el tiempo.\r
    en: Describes how velocity changes linearly with time.\r
  constraints:\r
  - a es constante\r
  validity:\r
    es: Aplicable a todo régimen MRUA.\r
    en: Applicable to all UARM regimes.\r
  dimension_check: '[L/T] = [L/T] + [L/T^2][T] = [L/T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Cálculo de velocidad final\r
  - Determinación de tiempos de parada\r
  interpretation_tags:\r
  - mrua\r
  result_semantics:\r
    target: a\r
    meaning: Resulta util para interpretar a en el contexto del leaf.\r
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
- id: mrua_torricelli\r
  title:\r
    es: Ecuación de Torricelli (Independiente del tiempo)\r
    en: Torricelli's equation (Time-independent)\r
  equation: v^2 = v0^2 + 2*a*dx\r
  latex: v^2 = v_0^2 + 2 a \\Delta x\r
  rearrangements:\r
  - target: dx\r
    latex: \\Delta x = \\frac{v^2 - v_0^2}{2a}\r
    equation: dx = (v^2 - v0^2)/(2*a)\r
    constraints: []\r
  - target: a\r
    latex: a = \\frac{v^2 - v_0^2}{2 \\Delta x}\r
    equation: a = (v^2 - v0^2)/(2*dx)\r
    constraints: []\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: Relaciona velocidades y desplazamientos sin necesidad de conocer el tiempo.\r
    en: Relates velocities and displacements without needing to know the time.\r
  constraints:\r
  - a != 0 (para despejar dx o a)\r
  validity:\r
    es: Útil en análisis de frenado y colisiones.\r
    en: Useful in braking and collision analysis.\r
  dimension_check: '[L^2/T^2] = [L^2/T^2] + [L/T^2][L] = [L^2/T^2]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Cálculo de aceleración en huellas de frenado\r
  interpretation_tags:\r
  - mrua\r
  result_semantics:\r
    target: dx\r
    meaning: Resulta util para interpretar dx en el contexto del leaf.\r
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
- id: mrua_desplazamiento_medio\r
  title:\r
    es: Desplazamiento por velocidad media\r
    en: Displacement via average velocity\r
  equation: dx = ((v0 + v)/2)*t\r
  latex: \\Delta x = \\frac{v_0 + v}{2} t\r
  rearrangements:\r
  - target: t\r
    latex: t = \\frac{2 \\Delta x}{v_0 + v}\r
    equation: t = 2*dx/(v0 + v)\r
    constraints: []\r
  category: auxiliary\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Calcula el desplazamiento asumiendo que el cuerpo viaja a su velocidad promedio.\r
    en: Calculates displacement assuming the body travels at its average velocity.\r
  constraints:\r
  - aceleración constante (para que sea la media aritmética)\r
  validity:\r
    es: Simplificación cinemática para tramos uniformemente variados.\r
    en: Kinematic simplification for uniformly varied segments.\r
  dimension_check: '[L] = [L/T][T] = [L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - Comprobación rápida de coherencia gráfica\r
  interpretation_tags:\r
  - mrua\r
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
`;export{e as default};
