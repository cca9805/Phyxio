const e=`version: 1\r
id: interpretacion-calculo-del-torque\r
leaf_id: calculo-del-torque\r
nombre:\r
  es: Interpretacion de calculo del torque\r
  en: Interpretation of torque calculation\r
scope:\r
  es: lectura numerica, coherencia fisica, validez del modelo y errores comunes de signos y unidades\r
  en: numerical reading, physical coherence, model validity, and common unit and sign errors\r
dependencies:\r
  magnitudes:\r
  - F\r
  - F_x\r
  - F_y\r
  - I\r
  - alpha\r
  - b\r
  - r\r
  - tau\r
  - tau_z\r
  - theta\r
  - x\r
  - y\r
  formulas:\r
  - segunda_ley_rotacional\r
  - torque_brazo\r
  - torque_plano\r
  - torque_por_angulo\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen\r
      en: Summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia fisica\r
      en: Physical coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura del grafico\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores comunes\r
      en: Common errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  tau:\r
    summary_rules:\r
    - id: tau_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El resultado entregado es torque neto respecto al eje elegido.\r
        en: The reported result is net torque about the chosen axis.\r
    coherence_rules:\r
    - id: tau_coherence_units\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Tau debe expresarse en N*m y con signo consistente con el convenio.\r
        en: Tau must be in N*m and keep sign consistent with convention.\r
    physical_reading_rules:\r
    - id: tau_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Mayor modulo de tau implica mayor tendencia a cambiar el estado de giro.\r
        en: Larger tau magnitude implies stronger tendency to change spin state.\r
    model_validity_rules:\r
    - id: tau_model_validity\r
      when: r >= 0\r
      status: info\r
      text:\r
        es: La lectura es valida si se definieron eje, punto y geometria de fuerza.\r
        en: Reading is valid when axis, point, and force geometry are defined.\r
    graph_rules:\r
    - id: tau_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafico, el sentido del giro debe coincidir con el signo de tau.\r
        en: On graph, rotation direction must match tau sign.\r
    likely_errors:\r
    - id: tau_error_units\r
      when: abs(tau) > 100000\r
      status: warning\r
      text:\r
        es: Posible error de unidades o conversion de distancia.\r
        en: Possible units or distance conversion error.\r
    - id: tau_error_none\r
      when: abs(tau) <= 100000\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato para tau.\r
        en: No immediate likely error detected for tau.\r
    next_step_rules:\r
    - id: tau_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta el resultado con tau por brazo y revisa coherencia de signos.\r
        en: Compare with lever-arm torque and verify sign coherence.\r
  tau_z:\r
    summary_rules:\r
    - id: tauz_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tau_z representa el momento escalar en problemas planos.\r
        en: Tau_z represents scalar moment in planar problems.\r
    coherence_rules:\r
    - id: tauz_coherence_sign\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Su signo debe respetar la regla de mano derecha en el eje z.\r
        en: Its sign should follow right-hand rule on z axis.\r
    physical_reading_rules:\r
    - id: tauz_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tau_z positivo y negativo describen sentidos opuestos de giro.\r
        en: Positive and negative tau_z describe opposite rotation senses.\r
    model_validity_rules:\r
    - id: tauz_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Valido si el sistema puede modelarse en el plano xy.\r
        en: Valid when system can be modeled in the xy plane.\r
    graph_rules:\r
    - id: tauz_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si cambian x, y, F_x o F_y, tau_z debe reflejar ese cambio.\r
        en: If x, y, F_x, or F_y change, tau_z should reflect it.\r
    likely_errors:\r
    - id: tauz_error_axis\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Error comun - cambiar orientacion del eje z a mitad del calculo.\r
        en: Common error - changing z-axis orientation mid-calculation.\r
    next_step_rules:\r
    - id: tauz_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica componentes de fuerza y coordenadas del punto de aplicacion.\r
        en: Verify force components and application-point coordinates.\r
  F:\r
    summary_rules:\r
    - id: F_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F es la intensidad de la accion externa aplicada.\r
        en: F is the intensity of the applied external action.\r
    coherence_rules:\r
    - id: F_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser coherente con r, b y theta en la formula elegida.\r
        en: It must be consistent with r, b, and theta in selected formula.\r
    physical_reading_rules:\r
    - id: F_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Incrementar F aumenta tau si la geometria se mantiene.\r
        en: Increasing F raises tau if geometry stays fixed.\r
    model_validity_rules:\r
    - id: F_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisar direccion de la fuerza para evitar proyecciones incorrectas.\r
        en: Check force direction to avoid incorrect projections.\r
    graph_rules:\r
    - id: F_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A F constante, la variacion de b o theta explica cambios en tau.\r
        en: At constant F, variations in b or theta explain tau changes.\r
    likely_errors:\r
    - id: F_error_sign\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Error comun - usar solo magnitud y perder informacion direccional.\r
        en: Common error - using only magnitude and losing directional information.\r
    next_step_rules:\r
    - id: F_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si hay dudas de direccion, descompone en F_x y F_y.\r
        en: If direction is unclear, decompose into F_x and F_y.\r
  r:\r
    summary_rules:\r
    - id: r_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: r mide la separacion entre eje de giro y punto de aplicacion.\r
        en: r measures separation between rotation axis and application point.\r
    coherence_rules:\r
    - id: r_coherence_main\r
      when: r >= 0\r
      status: ok\r
      text:\r
        es: El radio no puede ser negativo por definicion geometrica.\r
        en: Radius cannot be negative by geometric definition.\r
    physical_reading_rules:\r
    - id: r_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si r aumenta, el efecto de palanca aumenta para igual F y theta.\r
        en: If r increases, lever effect increases for same F and theta.\r
    model_validity_rules:\r
    - id: r_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Debe medirse desde el eje real, no desde un origen arbitrario.\r
        en: It must be measured from the real axis, not arbitrary origin.\r
    graph_rules:\r
    - id: r_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafico, mover el punto de aplicacion cambia r y por tanto tau.\r
        en: In graph, moving application point changes r and then tau.\r
    likely_errors:\r
    - id: r_error_wrong_reference\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Error comun - medir r con referencia incorrecta.\r
        en: Common error - measuring r with wrong reference.\r
    next_step_rules:\r
    - id: r_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba si es mas estable usar el brazo perpendicular b.\r
        en: Check whether using perpendicular arm b is more robust.\r
  b:\r
    summary_rules:\r
    - id: b_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: b es la distancia perpendicular efectiva para producir torque.\r
        en: b is the effective perpendicular distance that produces torque.\r
    coherence_rules:\r
    - id: b_coherence_main\r
      when: b >= 0\r
      status: ok\r
      text:\r
        es: b no debe ser negativa y debe ser realmente perpendicular.\r
        en: b must be non-negative and truly perpendicular.\r
    physical_reading_rules:\r
    - id: b_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Misma fuerza con mayor b produce mayor momento.\r
        en: Same force with greater b produces greater moment.\r
    model_validity_rules:\r
    - id: b_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Solo usar b si la linea de accion esta bien identificada.\r
        en: Use b only if line of action is correctly identified.\r
    graph_rules:\r
    - id: b_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Curva tau-b debe ser aproximadamente lineal para F fija.\r
        en: Tau-b curve should be approximately linear for fixed F.\r
    likely_errors:\r
    - id: b_error_confusion\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Error comun - confundir b con r sin considerar angulo.\r
        en: Common error - confusing b with r without angle consideration.\r
    next_step_rules:\r
    - id: b_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si falta b, calcula con b = r*sin(theta).\r
        en: If b is missing, compute it with b = r*sin(theta).\r
  theta:\r
    summary_rules:\r
    - id: theta_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Theta fija el factor geometrico del torque en la forma angular.\r
        en: Theta sets geometric factor of torque in angular form.\r
    coherence_rules:\r
    - id: theta_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe medirse entre r y F para usar sin(theta) correctamente.\r
        en: It must be measured between r and F to use sin(theta) correctly.\r
    physical_reading_rules:\r
    - id: theta_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Theta cercana a 90 grados maximiza el momento para r y F fijos.\r
        en: Theta near 90 degrees maximizes moment for fixed r and F.\r
    model_validity_rules:\r
    - id: theta_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Evitar mezclar grados y radianes durante sustitucion numerica.\r
        en: Avoid mixing degrees and radians during numeric substitution.\r
    graph_rules:\r
    - id: theta_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Barrer theta debe producir respuesta senoidal de tau.\r
        en: Sweeping theta should produce sinusoidal tau response.\r
    likely_errors:\r
    - id: theta_error_reference\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Error comun - tomar el angulo respecto al suelo, no respecto a r.\r
        en: Common error - taking angle from ground, not from r.\r
    next_step_rules:\r
    - id: theta_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si el angulo es incierto, cambia al metodo de brazo de palanca.\r
        en: If angle is uncertain, switch to lever-arm method.\r
  alpha:\r
    summary_rules:\r
    - id: alpha_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Alpha describe la respuesta angular ante el torque neto.\r
        en: Alpha describes angular response to net torque.\r
    coherence_rules:\r
    - id: alpha_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Con I positiva, alpha debe tener el mismo signo que tau.\r
        en: With positive I, alpha should have same sign as tau.\r
    physical_reading_rules:\r
    - id: alpha_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Mayor alpha implica cambio mas rapido de velocidad angular.\r
        en: Larger alpha means faster change in angular speed.\r
    model_validity_rules:\r
    - id: alpha_validity_main\r
      when: I > 0\r
      status: info\r
      text:\r
        es: Segunda ley rotacional exige I positiva y eje definido.\r
        en: Rotational second law requires positive I and defined axis.\r
    graph_rules:\r
    - id: alpha_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con torque constante, alpha aproximadamente constante.\r
        en: With constant torque, alpha is approximately constant.\r
    likely_errors:\r
    - id: alpha_error_confusion\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Error comun - confundir alpha con omega.\r
        en: Common error - confusing alpha with omega.\r
    next_step_rules:\r
    - id: alpha_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa alpha para estimar como evolucionara omega en el tiempo.\r
        en: Use alpha to estimate how omega evolves over time.\r
  I:\r
    summary_rules:\r
    - id: I_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I cuantifica la resistencia del cuerpo a acelerar su rotacion.\r
        en: I quantifies body resistance to rotational acceleration.\r
    coherence_rules:\r
    - id: I_coherence_main\r
      when: I > 0\r
      status: ok\r
      text:\r
        es: I positiva mantiene coherencia fisica y matematica.\r
        en: Positive I preserves physical and mathematical coherence.\r
    physical_reading_rules:\r
    - id: I_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A mayor I, menor alpha para el mismo torque aplicado.\r
        en: Greater I gives smaller alpha for the same applied torque.\r
    model_validity_rules:\r
    - id: I_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Debe corresponder al eje usado en el problema.\r
        en: It must correspond to the axis used in the problem.\r
    graph_rules:\r
    - id: I_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambios en I desplazan la pendiente alpha-tau.\r
        en: Changes in I shift alpha-tau slope.\r
    likely_errors:\r
    - id: I_error_axis\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Error comun - usar I de un eje distinto sin conversion.\r
        en: Common error - using I from a different axis without conversion.\r
    next_step_rules:\r
    - id: I_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica geometria del cuerpo para confirmar el valor de I.\r
        en: Verify body geometry to confirm I value.\r
`;export{e as default};
