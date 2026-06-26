const e=`version: 1\r
formulas:\r
- id: mcua_omega_t\r
  title:\r
    es: Velocidad angular en función del tiempo\r
    en: Angular velocity as function of time\r
  equation: omega = omega_0 + alpha*t\r
  latex: \\omega = \\omega_0 + \\alpha t\r
  rearrangements:\r
  - target: omega\r
    equation: omega = omega_0 + alpha*t\r
    latex: \\omega = \\omega_0 + \\alpha t\r
    constraints: []\r
  - target: omega_0\r
    equation: omega_0 = omega - alpha*t\r
    latex: \\omega_0 = \\omega - \\alpha t\r
    constraints: []\r
  - target: alpha\r
    equation: alpha = (omega - omega_0)/t\r
    latex: \\alpha = \\frac{\\omega - \\omega_0}{t}\r
    constraints: []\r
  - target: t\r
    equation: t = (omega - omega_0)/alpha\r
    latex: t = \\frac{\\omega - \\omega_0}{\\alpha}\r
    constraints: []\r
  category: fundamental\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: Integra una aceleración angular constante en una velocidad angular que crece o decrece linealmente.\r
    en: Integrates constant angular acceleration into a linearly increasing or decreasing angular velocity.\r
  constraints:\r
  - expr: t != 0\r
    message:\r
      es: t no puede ser cero si despejas alpha o omega_0.\r
      en: t cannot be zero when solving for alpha or omega_0.\r
  validity:\r
    es: Válida en intervalos con aceleración angular constante aproximada.\r
    en: Valid in intervals where angular acceleration is approximately constant.\r
  dimension_check: T^-1 = T^-1 + (T^-2)(T)\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
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
- id: mcua_theta_t\r
  title:\r
    es: Posición angular en función del tiempo\r
    en: Angular position as function of time\r
  equation: theta = theta_0 + omega_0*t + 0.5*alpha*t^2\r
  latex: \\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2\r
  rearrangements:\r
  - target: theta\r
    equation: theta = theta_0 + omega_0*t + 0.5*alpha*t^2\r
    latex: \\theta = \\theta_0 + \\omega_0 t + \\frac{1}{2}\\alpha t^2\r
    constraints: []\r
  - target: theta_0\r
    equation: theta_0 = theta - omega_0*t - 0.5*alpha*t^2\r
    latex: \\theta_0 = \\theta - \\omega_0 t - \\frac{1}{2}\\alpha t^2\r
    constraints: []\r
  - target: omega_0\r
    equation: omega_0 = (theta - theta_0 - 0.5*alpha*t^2)/t\r
    latex: \\omega_0 = \\frac{\\theta - \\theta_0 - \\frac{1}{2}\\alpha t^2}{t}\r
    constraints: []\r
  - target: alpha\r
    equation: alpha = 2*(theta - theta_0 - omega_0*t)/(t^2)\r
    latex: \\alpha = \\frac{2(\\theta - \\theta_0 - \\omega_0 t)}{t^2}\r
    constraints: []\r
  - target: t\r
    equation: t = sqrt(2*(theta - theta_0)/alpha + (omega_0^2)/(alpha^2)) - (omega_0/alpha)\r
    latex: t = \\sqrt{\\frac{2(\\theta - \\theta_0)}{\\alpha} + \\left(\\frac{\\omega_0}{\\alpha}\\right)^2} - \\frac{\\omega_0}{\\alpha}\r
    constraints: []\r
  category: fundamental\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: 'Integra dos contribuciones: la parte proporcional al estado inicial y el término cuadrático de la aceleración.'\r
    en: 'Integrates two contributions: the initial-state term and the quadratic acceleration contribution.'\r
  constraints:\r
  - expr: t != 0\r
    message:\r
      es: t no puede ser cero si despejas omega_0 o alpha.\r
      en: t cannot be zero when solving for omega_0 or alpha.\r
  validity:\r
    es: Válida cuando \\(\\alpha\\) y \\(R\\) son aproximadamente constantes.\r
    en: Valid when \\(\\alpha\\) and \\(R\\) are approximately constant.\r
  dimension_check: 1 = 1 + (T^-1)(T) + (T^-2)(T^2)\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
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
- id: mcua_sin_t\r
  title:\r
    es: Relación sin tiempo entre velocidades y desplazamiento angular\r
    en: Time-free relation between angular speeds and angular displacement\r
  equation: omega^2 = omega_0^2 + 2*alpha*(theta - theta_0)\r
  latex: \\omega^2 = \\omega_0^2 + 2\\alpha\\left(\\theta - \\theta_0\\right)\r
  rearrangements:\r
  - target: omega\r
    equation: omega = sqrt(omega_0^2 + 2*alpha*(theta - theta_0))\r
    latex: \\omega = \\sqrt{\\omega_0^2 + 2\\alpha\\left(\\theta - \\theta_0\\right)}\r
    constraints: []\r
  - target: omega_0\r
    equation: omega_0 = sqrt(omega^2 - 2*alpha*(theta - theta_0))\r
    latex: \\omega_0 = \\sqrt{\\omega^2 - 2\\alpha\\left(\\theta - \\theta_0\\right)}\r
    constraints: []\r
  - target: alpha\r
    equation: alpha = (omega^2 - omega_0^2)/(2*(theta - theta_0))\r
    latex: \\alpha = \\frac{\\omega^2 - \\omega_0^2}{2\\left(\\theta - \\theta_0\\right)}\r
    constraints: []\r
  - target: delta_theta\r
    equation: delta_theta = (omega^2 - omega_0^2)/(2*alpha)\r
    latex: \\Delta\\theta = \\frac{\\omega^2 - \\omega_0^2}{2\\alpha}\r
    constraints: []\r
  category: derived\r
  relation_type: structural\r
  physical_meaning:\r
    es: Relaciona estados angulares inicial y final sin necesidad del tiempo explícito.\r
    en: Relates initial and final angular states without explicit time.\r
  constraints:\r
  - expr: alpha != 0\r
    message:\r
      es: alpha no puede ser cero para este despeje.\r
      en: alpha cannot be zero for this rearrangement.\r
  - expr: theta != theta_0\r
    message:\r
      es: theta y theta_0 no pueden ser idénticos si despejas alpha.\r
      en: theta and theta_0 must not be equal when solving for alpha.\r
  validity:\r
    es: Válida cuando el movimiento presenta \\(\\alpha\\) constante dentro del intervalo.\r
    en: Valid when the motion has constant alpha over the interval.\r
  dimension_check: (T^-1)^2 = (T^-1)^2 + (T^-2)(1)\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
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
- id: mcua_dtheta\r
  title:\r
    es: Desplazamiento angular\r
    en: Angular displacement\r
  equation: delta_theta = theta - theta_0\r
  latex: \\Delta\\theta = \\theta - \\theta_0\r
  rearrangements:\r
  - target: delta_theta\r
    equation: delta_theta = theta - theta_0\r
    latex: \\Delta\\theta = \\theta - \\theta_0\r
    constraints: []\r
  - target: theta\r
    equation: theta = delta_theta + theta_0\r
    latex: \\theta = \\Delta\\theta + \\theta_0\r
    constraints: []\r
  - target: theta_0\r
    equation: theta_0 = theta - delta_theta\r
    latex: \\theta_0 = \\theta - \\Delta\\theta\r
    constraints: []\r
  category: derived\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: Convierte dos estados angulares en desplazamiento angular del movimiento circular.\r
    en: Converts two angular states into displacement during a time interval.\r
  constraints:\r
  - expr: 1\r
    message:\r
      es: Relación siempre válida por definición del desplazamiento angular.\r
      en: Relation is always valid by definition of angular displacement.\r
  validity:\r
    es: Válida siempre para el movimiento circular.\r
    en: Always valid for circular motion.\r
  dimension_check: 1 = 1 - 1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: delta_theta\r
    meaning: Resulta util para interpretar delta_theta en el contexto del leaf.\r
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
- id: mcua_v_omega\r
  title:\r
    es: Velocidad lineal y velocidad angular\r
    en: Linear speed and angular speed\r
  equation: v = omega*R\r
  latex: v = \\omega R\r
  rearrangements:\r
  - target: v\r
    equation: v = omega*R\r
    latex: v = \\omega R\r
    constraints: []\r
  - target: omega\r
    equation: omega = v/R\r
    latex: \\omega = \\frac{v}{R}\r
    constraints: []\r
  - target: R\r
    equation: R = v/omega\r
    latex: R = \\frac{v}{\\omega}\r
    constraints: []\r
  category: derived\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: Conecta la tasa angular del giro con rapidez tangencial observable.\r
    en: Connects angular rate with observable tangential speed.\r
  constraints:\r
  - expr: R > 0\r
    message:\r
      es: R debe ser positivo.\r
      en: R must be positive.\r
  - expr: omega != 0\r
    message:\r
      es: omega no puede ser cero si despejas el radio por esta vía.\r
      en: omega cannot be zero when solving radius using this equation.\r
  validity:\r
    es: Válida para cualquier movimiento circular con radio constante.\r
    en: Valid for circular motion with constant radius.\r
  dimension_check: L T^-1 = (T^-1)L\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
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
- id: mcua_at\r
  title:\r
    es: Aceleración tangencial\r
    en: Tangential acceleration\r
  equation: a_t = alpha*R\r
  latex: a_t = \\alpha R\r
  rearrangements:\r
  - target: a_t\r
    equation: a_t = alpha*R\r
    latex: a_t = \\alpha R\r
    constraints: []\r
  - target: alpha\r
    equation: alpha = a_t/R\r
    latex: \\alpha = \\frac{a_t}{R}\r
    constraints: []\r
  - target: R\r
    equation: R = a_t/alpha\r
    latex: R = \\frac{a_t}{\\alpha}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Relaciona aceleración angular con variación de magnitud lineal en el borde.\r
    en: Links angular acceleration with linear speed variation at the radius.\r
  constraints:\r
  - expr: R > 0\r
    message:\r
      es: R debe ser positivo.\r
      en: R must be positive.\r
  - expr: alpha != 0\r
    message:\r
      es: alpha no puede ser cero si despejas R con esta expresión.\r
      en: alpha cannot be zero if solving for R in this expression.\r
  validity:\r
    es: Válida en MCUA y tramos con radio aproximadamente constante.\r
    en: Valid in MCUA and segments with approximately constant radius.\r
  dimension_check: L T^-2 = (T^-2)L\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
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
- id: mcua_ac\r
  title:\r
    es: Aceleración centrípeta\r
    en: Centripetal acceleration\r
  equation: a_c = omega^2*R\r
  latex: a_c = \\omega^2 R\r
  rearrangements:\r
  - target: a_c\r
    equation: a_c = omega^2*R\r
    latex: a_c = \\omega^2 R\r
    constraints: []\r
  - target: omega\r
    equation: omega = sqrt(a_c/R)\r
    latex: \\omega = \\sqrt{\\frac{a_c}{R}}\r
    constraints: []\r
  - target: R\r
    equation: R = a_c/(omega^2)\r
    latex: R = \\frac{a_c}{\\omega^2}\r
    constraints: []\r
  category: derived\r
  relation_type: structural\r
  physical_meaning:\r
    es: Expresa la aceleración centrípeta necesaria para sostener la curvatura del movimiento.\r
    en: Expresses the centripetal acceleration needed to sustain curved motion.\r
  constraints:\r
  - expr: R > 0\r
    message:\r
      es: R debe ser positiva.\r
      en: R must be positive.\r
  - expr: a_c >= 0\r
    message:\r
      es: a_c debe ser no negativa.\r
      en: a_c must be non-negative.\r
  validity:\r
    es: Válida cuando el centro y la trayectoria circular están definidos.\r
    en: Valid when center and circular trajectory are defined.\r
  dimension_check: L T^-2 = (T^-1)^2 L\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: a_c\r
    meaning: Resulta util para interpretar a_c en el contexto del leaf.\r
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
- id: mcua_delta_t_theta\r
  title:\r
    es: Velocidad angular media\r
    en: Average angular speed\r
  equation: delta_theta = omega_med * delta_t\r
  latex: \\Delta\\theta = \\omega_{\\mathrm{med}} \\Delta t\r
  rearrangements:\r
  - target: omega_med\r
    equation: omega_med = delta_theta/delta_t\r
    latex: \\omega_{\\mathrm{med}} = \\frac{\\Delta\\theta}{\\Delta t}\r
    constraints: []\r
  - target: delta_theta\r
    equation: delta_theta = omega_med*delta_t\r
    latex: \\Delta\\theta = \\omega_{\\mathrm{med}} \\Delta t\r
    constraints: []\r
  - target: delta_t\r
    equation: delta_t = delta_theta/omega_med\r
    latex: \\Delta t = \\frac{\\Delta\\theta}{\\omega_{\\mathrm{med}}}\r
    constraints: []\r
  category: derived\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Relación de promedio angular útil cuando se conoce cambio global sobre un intervalo.\r
    en: Average angular-speed relation useful when only interval change is known.\r
  constraints:\r
  - expr: delta_t > 0\r
    message:\r
      es: El intervalo de tiempo debe ser positivo.\r
      en: The time interval must be positive.\r
  - expr: omega_med != 0\r
    message:\r
      es: omega_med no puede ser cero si despejas delta_t.\r
      en: omega_med cannot be zero when solving for delta_t.\r
  validity:\r
    es: Útil para intervalos completos o medición promedio; no reemplaza detalles instantáneos.\r
    en: Useful for complete intervals or averaged data; does not replace instantaneous description.\r
  dimension_check: 1 = (T^-1)(T)\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: omega_med\r
    meaning: Resulta util para interpretar omega_med en el contexto del leaf.\r
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
- id: mcua_a_total\r
  title:\r
    es: Aceleracion total en MCUA\r
    en: Total acceleration in UACM\r
  equation: a = sqrt(a_t^2 + a_c^2)\r
  latex: a = \\sqrt{a_t^2 + a_c^2}\r
  rearrangements:\r
  - target: a\r
    equation: a = sqrt(a_t^2 + a_c^2)\r
    latex: a = \\sqrt{a_t^2 + a_c^2}\r
    constraints: []\r
  category: derived\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: En MCUA el vector aceleracion tiene dos componentes perpendiculares entre si. La tangencial at cambia la rapidez y la centripeta ac cambia la direccion. El modulo total se obtiene por Pitagoras.\r
    en: In UACM the acceleration vector has two mutually perpendicular components. The tangential at changes speed and the centripetal ac changes direction. The total magnitude follows from Pythagoras.\r
  constraints:\r
  - at = alpha * R\r
  - ac = omega^2 * R\r
  validity:\r
    es: Valida en cualquier instante del MCUA para un punto del circulo de radio R.\r
    en: Valid at any instant of UACM for a point on the circle of radius R.\r
  dimension_check: L T^-2 = sqrt((L T^-2)^2 + (L T^-2)^2)\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: a\r
    meaning: Resulta util para calcular la aceleracion total del movil en cualquier instante del MCUA.\r
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
  - La aceleracion total es maxima al inicio del movimiento si at domina y minima cuando el movil es casi circular.\r
  pedagogical_triggers:\r
  - when: 'true'\r
    message:\r
      es: Comprueba signos, unidades y significado del resultado.\r
      en: Check signs, units, and meaning of the result.\r
- id: mcua_omega_med\r
  title:\r
    es: Definición de velocidad angular media\r
    en: Average angular velocity definition\r
  equation: omega_med = (omega + omega_0)/2\r
  latex: \\omega_{\\text{med}} = \\frac{\\omega + \\omega_0}{2}\r
  rearrangements:\r
  - target: omega_med\r
    equation: omega_med = (omega + omega_0)/2\r
    latex: \\omega_{\\text{med}} = \\frac{\\omega + \\omega_0}{2}\r
    constraints: []\r
  - target: omega\r
    equation: omega = 2*omega_med - omega_0\r
    latex: \\omega = 2\\omega_{\\text{med}} - \\omega_0\r
    constraints: []\r
  - target: omega_0\r
    equation: omega_0 = 2*omega_med - omega\r
    latex: \\omega_0 = 2\\omega_{\\text{med}} - \\omega\r
    constraints: []\r
  category: fundamental\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: En MCUA, la velocidad media es exactamente el promedio de las velocidades extremas del intervalo.\r
    en: In UACM, the average velocity is exactly the average of the extreme velocities of the interval.\r
  constraints: []\r
  validity:\r
    es: Válida exclusivamente para movimientos con aceleración angular constante.\r
    en: Valid exclusively for motions with constant angular acceleration.\r
  dimension_check: T^-1 = (T^-1 + T^-1)\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: omega_med\r
    meaning: Útil para simplificar el cálculo de desplazamientos angulares.\r
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
- id: mcua_longitud_arco\r
  title:\r
    es: Longitud de arco en MCUA\r
    en: Arc length in UACM\r
  equation: s = delta_theta*R\r
  latex: s = \\Delta\\theta R\r
  rearrangements:\r
  - target: s\r
    equation: s = delta_theta*R\r
    latex: s = \\Delta\\theta R\r
    constraints: []\r
  - target: delta_theta\r
    equation: delta_theta = s/R\r
    latex: \\Delta\\theta = \\frac{s}{R}\r
    constraints: []\r
  - target: R\r
    equation: R = s/delta_theta\r
    latex: R = \\frac{s}{\\Delta\\theta}\r
    constraints: []\r
  category: derived\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: Traduce el ángulo barrido en metros reales recorridos sobre la circunferencia.\r
    en: Translates the swept angle into real meters traveled on the circumference.\r
  constraints:\r
  - expr: R > 0\r
    message:\r
      es: El radio debe ser positivo.\r
      en: The radius must be positive.\r
  - expr: delta_theta != 0\r
    message:\r
      es: El desplazamiento debe ser no nulo para despejar el radio.\r
      en: Displacement must be non-zero to solve for the radius.\r
  validity:\r
    es: Válida para cualquier tramo de trayectoria circular.\r
    en: Valid for any segment of circular trajectory.\r
  dimension_check: L = (1)L\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: s\r
    meaning: Representa la distancia física lineal "desenrollada".\r
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
- id: mcua_vueltas\r
  title:\r
    es: Número de vueltas en MCUA\r
    en: Number of revolutions in UACM\r
  equation: N = delta_theta/(2*pi)\r
  latex: N = \\frac{\\Delta\\theta}{2\\pi}\r
  rearrangements:\r
  - target: N\r
    equation: N = delta_theta/(2*pi)\r
    latex: N = \\frac{\\Delta\\theta}{2\\pi}\r
    constraints: []\r
  - target: delta_theta\r
    equation: delta_theta = N*2*pi\r
    latex: \\Delta\\theta = 2\\pi N\r
    constraints: []\r
  category: basic\r
  relation_type: geometric_interpretation\r
  physical_meaning:\r
    es: Convierte el ángulo barrido en radianes a una unidad más intuitiva como es el conteo de vueltas.\r
    en: Converts the swept angle in radians to a more intuitive unit such as turn counting.\r
  constraints: []\r
  validity:\r
    es: Siempre válida para rotaciones cíclicas.\r
    en: Always valid for cyclic rotations.\r
  dimension_check: 1 = 1 / 1\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: N\r
    meaning: Expresa el resultado en ciclos completos o parciales.\r
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
- id: mcua_delta_omega\r
  title:\r
    es: Variación de velocidad angular\r
    en: Angular velocity variation\r
  equation: omega - omega_0 = alpha*delta_t\r
  latex: \\omega - \\omega_0 = \\alpha \\Delta t\r
  rearrangements:\r
  - target: omega\r
    equation: omega = omega_0 + alpha*delta_t\r
    latex: \\omega = \\omega_0 + \\alpha \\Delta t\r
    constraints: []\r
  - target: alpha\r
    equation: alpha = (omega - omega_0)/delta_t\r
    latex: \\alpha = \\frac{\\omega - \\omega_0}{\\Delta t}\r
    constraints: []\r
  - target: delta_t\r
    equation: delta_t = (omega - omega_0)/alpha\r
    latex: \\Delta t = \\frac{\\omega - \\omega_0}{\\alpha}\r
    constraints: []\r
  category: basic\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: Describe el incremento de rapidez de giro como producto de la aceleración por el tiempo.\r
    en: Describes the rotation speed increase as the product of acceleration and time.\r
  constraints:\r
  - expr: delta_t > 0\r
    message:\r
      es: La duración debe ser positiva.\r
      en: Duration must be positive.\r
  validity:\r
    es: Válida para cualquier intervalo con aceleración constante.\r
    en: Valid for any interval with constant acceleration.\r
  dimension_check: T^-1 = (T^-2)T\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  interpretation_tags:\r
  - mcua\r
  result_semantics:\r
    target: omega\r
    meaning: Velocidad angular final tras el intervalo.\r
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
