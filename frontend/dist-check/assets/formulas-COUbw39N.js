const e=`version: 1\r
formulas:\r
- id: mcu_posicion\r
  title:\r
    es: Ecuación de posición en MCU\r
    en: Position equation in UCM\r
  equation: theta = theta_0 + omega * t\r
  latex: \\theta(t) = \\theta_0 + \\omega t\r
  rearrangements:\r
  - target: omega\r
    equation: omega = (theta - theta_0) / t\r
    latex: \\omega = \\frac{\\Delta \\theta}{t}\r
    constraints: []\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: En el movimiento uniforme, la posición angular crece linealmente con el tiempo.\r
    en: In uniform motion, the angular position increases linearly with time.\r
  constraints:\r
  - omega = constante\r
  - alpha = 0\r
  validity:\r
    es: Aplicable a sistemas con rotación estable y sin rozamiento apreciable.\r
    en: Applicable to systems with stable rotation and no appreciable friction.\r
  dimension_check: '[1] = [1] + [T^-1][T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - tocadiscos\r
  - relojes\r
  interpretation_tags:\r
  - cinematica-rotacional\r
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
- id: mcua_velocidad\r
  title:\r
    es: Ecuación de velocidad en MCUA\r
    en: Velocity equation in UACM\r
  equation: omega = omega_0 + alpha * t\r
  latex: \\omega(t) = \\omega_0 + \\alpha t\r
  rearrangements: []\r
  category: derived\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: La velocidad angular cambia proporcionalmente al tiempo bajo una aceleración constante.\r
    en: Angular velocity changes proportionally to time under constant acceleration.\r
  constraints:\r
  - alpha = constante\r
  validity:\r
    es: Motores en fase de arranque o frenado uniforme.\r
    en: Motors in starting or uniform braking phase.\r
  dimension_check: '[T^-1] = [T^-1] + [T^-2][T]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - cinematica-rotacional\r
  interpretation_tags:\r
  - cinematica-rotacional\r
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
- id: mcua_posicion\r
  title:\r
    es: Ecuación de posición en MCUA\r
    en: Position equation in UACM\r
  equation: theta = theta_0 + omega_0 * t + 0.5 * alpha * t^2\r
  latex: \\theta(t) = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: El desplazamiento angular sigue un perfil parabólico respecto al tiempo.\r
    en: Angular displacement follows a parabolic profile with respect to time.\r
  constraints:\r
  - alpha = constante\r
  validity:\r
    es: Modelo estándar para transiciones de rotación.\r
    en: Standard model for rotation transitions.\r
  dimension_check: '[1] = [1] + [T^-1][T] + [T^-2][T^2]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - cinematica-rotacional\r
  interpretation_tags:\r
  - cinematica-rotacional\r
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
- id: mcua_independiente_tiempo\r
  title:\r
    es: Ecuación independiente del tiempo\r
    en: Time-independent equation\r
  equation: omega^2 = omega_0^2 + 2 * alpha * delta_theta\r
  latex: \\omega^2 = \\omega_0^2 + 2\\alpha \\Delta \\theta\r
  rearrangements: []\r
  category: auxiliary\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: Relaciona el cambio de rapidez directamente con el espacio angular recorrido.\r
    en: Relates the change in speed directly to the angular space traveled.\r
  constraints:\r
  - alpha = constante\r
  validity:\r
    es: Útil cuando no se conoce el intervalo de tiempo.\r
    en: Useful when the time interval is unknown.\r
  dimension_check: '[T^-2] = [T^-2] + [T^-2][1]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - cinematica-rotacional\r
  interpretation_tags:\r
  - cinematica-rotacional\r
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
- id: mcua_desplazamiento_medio\r
  title:\r
    es: Desplazamiento angular mediante velocidad angular media\r
    en: Angular displacement via mean angular velocity\r
  equation: delta_theta = (omega_0 + omega) / 2 * t\r
  latex: \\Delta\\theta = \\frac{\\omega_0 + \\omega}{2}\\,t\r
  rearrangements:\r
  - target: delta_theta\r
    equation: delta_theta = (omega_0 + omega) / 2 * t\r
    latex: \\Delta\\theta = \\frac{\\omega_0 + \\omega}{2}\\,t\r
    constraints: []\r
  - target: t\r
    equation: t = 2 * delta_theta / (omega_0 + omega)\r
    latex: t = \\frac{2\\,\\Delta\\theta}{\\omega_0 + \\omega}\r
    constraints:\r
    - omega_0 + omega != 0\r
  category: auxiliary\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: En MCUA, la velocidad angular media es la semisuma de los extremos. Multiplicada por el tiempo da el desplazamiento angular, sin necesitar conocer la aceleracion explicita.\r
    en: In UACM, the mean angular velocity is the arithmetic mean of the extremes. Multiplied by time it gives the angular displacement without needing to know the acceleration explicitly.\r
  constraints:\r
  - alpha = constante\r
  - omega_0 + omega != 0\r
  validity:\r
    es: Valida unicamente bajo aceleracion angular constante.\r
    en: Valid only under constant angular acceleration.\r
  dimension_check: '[1] = [T^-1][T] = [1]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - cinematica-rotacional\r
  interpretation_tags:\r
  - cinematica-rotacional\r
  result_semantics:\r
    target: delta_theta\r
    meaning: Resulta util para calcular el desplazamiento angular cuando se conocen las velocidades angulares inicial y final pero no la aceleracion directamente.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Verifica que la aceleracion sea constante durante el intervalo analizado.\r
      en: Check that the acceleration is constant during the analyzed interval.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - El desplazamiento angular corresponde al area bajo la curva omega vs t, que en MCUA es un trapecio.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Esta ecuacion es util cuando el enunciado da omega0 y omega final sin dar alpha ni t directamente.\r
      en: This equation is useful when the problem gives omega0 and final omega without giving alpha or t directly.\r
`;export{e as default};
