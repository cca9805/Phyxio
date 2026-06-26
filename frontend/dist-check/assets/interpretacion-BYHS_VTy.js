const e=`version: 2\r
id: interpretacion-mcua\r
leaf_id: mcua\r
nombre:\r
  es: Interpretacion de Mcua\r
  en: Interpretation of Uniformly Accelerated Circular Motion\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cinematica\r
  parent_id: movimiento-circular\r
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-circular/mcua\r
dependencies:\r
  formulas:\r
  - mcua_omega_t\r
  - mcua_theta_t\r
  - mcua_sin_t\r
  - mcua_dtheta\r
  - mcua_v_omega\r
  - mcua_at\r
  - mcua_ac\r
  - mcua_delta_t_theta\r
  - mcua_a_total\r
  - mcua_omega_med\r
  - mcua_longitud_arco\r
  - mcua_vueltas\r
  - mcua_delta_omega\r
  magnitudes:\r
  - R\r
  - theta\r
  - theta_0\r
  - delta_theta\r
  - omega\r
  - omega_med\r
  - omega_0\r
  - alpha\r
  - t\r
  - delta_t\r
  - v\r
  - a_t\r
  - a_c\r
  - a\r
  - s\r
  - N\r
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
      es: Resumen físico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura física\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura gráfica\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  omega:\r
    summary_rules:\r
    - id: omega_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Representa el ritmo de giro instantáneo del sistema en el momento analizado.\r
        en: Represents the system's instantaneous rotation rate at the moment analyzed.\r
    coherence_rules:\r
    - id: omega_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Su valor debe cambiar linealmente con el tiempo debido a la aceleración angular.\r
        en: Its value must change linearly with time due to angular acceleration.\r
    physical_reading_rules:\r
    - id: omega_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indica cuántos radianes por segundo barre el objeto; un aumento sugiere un sistema acelerado.\r
        en: Indicates how many radians per second the object sweeps; an increase suggests an accelerated system.\r
    model_validity_rules:\r
    - id: omega_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El modelo asume que no hay fluctuaciones aleatorias en el ritmo de cambio.\r
        en: The model assumes there are no random fluctuations in the rate of change.\r
    graph_rules:\r
    - id: omega_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se visualiza como una línea recta con pendiente no nula en el diagrama omega-t.\r
        en: It is visualized as a straight line with non-zero slope in the omega-t diagram.\r
    likely_errors:\r
    - id: omega_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Asegúrate de no usar la omega inicial si el problema pide el estado final.\r
        en: Make sure not to use the initial omega if the problem asks for the final state.\r
    next_step_rules:\r
    - id: omega_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa la velocidad para determinar la aceleración centrípeta instantánea.\r
        en: Use the velocity to determine the instantaneous centripetal acceleration.\r
  alpha:\r
    summary_rules:\r
    - id: alpha_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Define la aceleración angular constante que gobierna el cambio de ritmo de giro.\r
        en: Defines the constant angular acceleration governing the rotation rate change.\r
    coherence_rules:\r
    - id: alpha_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si es positiva y coincide con el signo de la velocidad, el giro se vuelve más rápido.\r
        en: If positive and matching the velocity sign, the rotation becomes faster.\r
    physical_reading_rules:\r
    - id: alpha_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Es la causa cinemática de que el volante aumente o disminuya su rapidez de rotación.\r
        en: It is the kinematic cause for the flywheel to increase or decrease its rotation speed.\r
    model_validity_rules:\r
    - id: alpha_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El MCUA exige que esta magnitud sea estrictamente constante durante el intervalo.\r
        en: UACM requires this quantity to be strictly constant during the interval.\r
    graph_rules:\r
    - id: alpha_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Representa la pendiente constante de la gráfica de velocidad angular.\r
        en: Represents the constant slope of the angular velocity graph.\r
    likely_errors:\r
    - id: alpha_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas aceleración angular con aceleración tangencial lineal.\r
        en: Do not confuse angular acceleration with linear tangential acceleration.\r
    next_step_rules:\r
    - id: alpha_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Calcula la aceleración tangencial multiplicando por el radio.\r
        en: Calculate tangential acceleration by multiplying by the radius.\r
  theta:\r
    summary_rules:\r
    - id: theta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Posición angular final alcanzada tras el proceso acelerado.\r
        en: Final angular position reached after the accelerated process.\r
    coherence_rules:\r
    - id: theta_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mostrar una evolución parabólica respecto al tiempo.\r
        en: Must show a parabolic evolution with respect to time.\r
    physical_reading_rules:\r
    - id: theta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indica la orientación exacta del móvil en el espacio circular.\r
        en: Indicates the exact orientation of the object in circular space.\r
    model_validity_rules:\r
    - id: theta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Requiere que el ángulo se exprese en radianes para que las ecuaciones sean válidas.\r
        en: Requires the angle to be expressed in radians for the equations to be valid.\r
    graph_rules:\r
    - id: theta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se representa como una parábola (arco de curva) en la gráfica theta-t.\r
        en: It is represented as a parabola (curve arc) in the theta-t graph.\r
    likely_errors:\r
    - id: theta_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Verifica si el resultado incluye o no la posición inicial theta_0.\r
        en: Check if the result includes the initial position theta_0 or not.\r
    next_step_rules:\r
    - id: theta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Determina el número de vueltas completadas a partir de este ángulo.\r
        en: Determine the number of revolutions completed from this angle.\r
  a_c:\r
    summary_rules:\r
    - id: ac_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Aceleración centrípeta instantánea necesaria para curvar la trayectoria.\r
        en: Instantaneous centripetal acceleration needed to curve the path.\r
    coherence_rules:\r
    - id: ac_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: En MCUA, esta magnitud no es constante y aumenta si el giro se acelera.\r
        en: In UACM, this quantity is not constant and increases if the rotation accelerates.\r
    physical_reading_rules:\r
    - id: ac_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Refleja la "fuerza de giro" hacia el centro; a mayor rapidez, mayor es la curvatura forzada.\r
        en: Reflects the "rotation force" toward the center; the higher the speed, the greater the forced curvature.\r
    model_validity_rules:\r
    - id: ac_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válido para cualquier instante donde exista una velocidad angular definida.\r
        en: Valid for any instant where a defined angular velocity exists.\r
    graph_rules:\r
    - id: ac_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su evolución es cuadrática respecto a la velocidad angular.\r
        en: Its evolution is quadratic with respect to angular velocity.\r
    likely_errors:\r
    - id: ac_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No olvides que depende de la omega actual, no de la inicial.\r
        en: Do not forget that it depends on the current omega, not the initial one.\r
    next_step_rules:\r
    - id: ac_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Combínala con la aceleración tangencial para hallar la aceleración total.\r
        en: Combine it with tangential acceleration to find total acceleration.\r
  a_t:\r
    summary_rules:\r
    - id: at_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Aceleración tangencial que modifica la rapidez lineal del objeto.\r
        en: Tangential acceleration that modifies the object's linear speed.\r
    coherence_rules:\r
    - id: at_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Permanece constante en el MCUA si la aceleración angular es constante.\r
        en: Remains constant in UACM if angular acceleration is constant.\r
    physical_reading_rules:\r
    - id: at_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indica cuántos metros por segundo de rapidez se ganan o pierden cada segundo.\r
        en: Indicates how many meters per second of speed are gained or lost each second.\r
    model_validity_rules:\r
    - id: at_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Se asume que el radio de giro es invariable.\r
        en: The turning radius is assumed to be invariable.\r
    graph_rules:\r
    - id: at_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En una gráfica de rapidez vs tiempo, es la pendiente de la recta.\r
        en: In a speed vs time graph, it is the slope of the line.\r
    likely_errors:\r
    - id: at_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No la sumes aritméticamente a la aceleración centrípeta.\r
        en: Do not add it arithmetically to centripetal acceleration.\r
    next_step_rules:\r
    - id: at_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa este valor para calcular la fuerza tangencial neta en dinámica.\r
        en: Use this value to calculate net tangential force in dynamics.\r
  a:\r
    summary_rules:\r
    - id: a_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Módulo de la aceleración total resultante (vector suma de at y ac).\r
        en: Magnitude of the resulting total acceleration (vector sum of at and ac).\r
    coherence_rules:\r
    - id: a_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Siempre será mayor o igual que cualquiera de sus componentes individuales.\r
        en: It will always be greater than or equal to any of its individual components.\r
    physical_reading_rules:\r
    - id: a_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Es la aceleración neta real sentida por el móvil en su marco de referencia.\r
        en: It is the real net acceleration felt by the object in its reference frame.\r
    model_validity_rules:\r
    - id: a_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válido mientras las componentes sean perpendiculares (trayectoria circular).\r
        en: Valid as long as components are perpendicular (circular path).\r
    graph_rules:\r
    - id: a_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Representa la magnitud del vector aceleración total en el plano.\r
        en: Represents the magnitude of the total acceleration vector in the plane.\r
    likely_errors:\r
    - id: a_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: El cálculo requiere la raíz cuadrada de la suma de los cuadrados.\r
        en: Calculation requires the square root of the sum of squares.\r
    next_step_rules:\r
    - id: a_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Relaciona con la segunda ley de Newton para hallar la fuerza total.\r
        en: Relate with Newton's second law to find total force.\r
  s:\r
    summary_rules:\r
    - id: s_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Distancia lineal total recorrida sobre la curva de la circunferencia.\r
        en: Total linear distance traveled along the circumference curve.\r
    coherence_rules:\r
    - id: s_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser proporcional al ángulo barrido y al radio del círculo.\r
        en: Must be proportional to the swept angle and the circle's radius.\r
    physical_reading_rules:\r
    - id: s_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Metros acumulados de trayecto; es la "huella" física del movimiento.\r
        en: Accumulated meters of travel; it is the "physical" footprint of the motion.\r
    model_validity_rules:\r
    - id: s_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Solo válido si el móvil no retrocede ni cambia de radio.\r
        en: Only valid if the object does not go back or change radius.\r
    graph_rules:\r
    - id: s_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Crece de forma no lineal (cuadrática) en el tiempo en MCUA.\r
        en: Grows non-linearly (quadratically) in time in UACM.\r
    likely_errors:\r
    - id: s_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas la distancia curva s con el vector desplazamiento recto.\r
        en: Do not confuse curved distance s with the straight displacement vector.\r
    next_step_rules:\r
    - id: s_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa la distancia para calcular el trabajo realizado por fuerzas tangenciales.\r
        en: Use distance to calculate work done by tangential forces.\r
  N:\r
    summary_rules:\r
    - id: N_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Conteo total de vueltas o ciclos completados en el intervalo.\r
        en: Total count of turns or cycles completed in the interval.\r
    coherence_rules:\r
    - id: N_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: N es el ángulo total dividido por 2*pi.\r
        en: N is the total angle divided by 2*pi.\r
    physical_reading_rules:\r
    - id: N_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indica cuántas veces el sistema ha repetido su orientación inicial.\r
        en: Indicates how many times the system has repeated its initial orientation.\r
    model_validity_rules:\r
    - id: N_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpretación válida tanto para vueltas enteras como fracciones.\r
        en: Valid interpretation for both full turns and fractions.\r
    graph_rules:\r
    - id: N_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cuantifica la repetición cíclica del fenómeno físico.\r
        en: Quantifies the cyclic repetition of the physical phenomenon.\r
    likely_errors:\r
    - id: N_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Asegúrate de trabajar con ángulos en radianes antes de hallar N.\r
        en: Make sure to work with angles in radians before finding N.\r
    next_step_rules:\r
    - id: N_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Útil para determinar el desgaste de componentes rotativos.\r
        en: Useful for determining wear on rotating components.\r
  delta_t:\r
    summary_rules:\r
    - id: dt_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Duración del intervalo de tiempo en el que ocurre la aceleración.\r
        en: Duration of the time interval in which acceleration occurs.\r
    coherence_rules:\r
    - id: dt_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El intervalo debe ser consistente con el cambio observado en omega.\r
        en: The interval must be consistent with the change observed in omega.\r
    physical_reading_rules:\r
    - id: dt_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tiempo transcurrido; es el "escenario temporal" del suceso.\r
        en: Elapsed time; it is the "temporal setting" of the event.\r
    model_validity_rules:\r
    - id: dt_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Se asume que no hay interrupciones en el flujo del tiempo.\r
        en: It is assumed that there are no interruptions in the flow of time.\r
    graph_rules:\r
    - id: dt_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Es el ancho del intervalo en el eje horizontal de cualquier gráfica temporal.\r
        en: It is the interval width on the horizontal axis of any temporal graph.\r
    likely_errors:\r
    - id: dt_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas el intervalo dt con el instante absoluto t.\r
        en: Do not confuse the dt interval with the absolute instant t.\r
    next_step_rules:\r
    - id: dt_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Útil para calcular potencias o tasas de cambio medias.\r
        en: Useful for calculating powers or average rates of change.\r
  omega_0:\r
    summary_rules:\r
    - id: omega_0_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Estado inicial de rotación antes de que la aceleración angular surta efecto.\r
        en: Initial rotation state before angular acceleration takes effect.\r
    coherence_rules:\r
    - id: omega_0_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Marca el origen de la rampa de velocidad en el tiempo.\r
        en: Marks the origin of the velocity ramp over time.\r
    physical_reading_rules:\r
    - id: omega_0_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indica si el sistema ya estaba en movimiento o parte del reposo.\r
        en: Indicates if the system was already in motion or starts from rest.\r
    model_validity_rules:\r
    - id: omega_0_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Fundamental para definir la dirección de la aceleración (acelerado vs frenado).\r
        en: Fundamental for defining acceleration direction (speeding up vs braking).\r
    graph_rules:\r
    - id: omega_0_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Es el punto de intersección con el eje vertical en la gráfica omega-t.\r
        en: It is the intersection point with the vertical axis in the omega-t graph.\r
    likely_errors:\r
    - id: omega_0_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas la velocidad inicial con la velocidad media del tramo.\r
        en: Do not confuse initial velocity with the segment's average velocity.\r
    next_step_rules:\r
    - id: omega_0_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Combínala con alpha y t para predecir la velocidad futura.\r
        en: Combine it with alpha and t to predict future velocity.\r
  theta_0:\r
    summary_rules:\r
    - id: theta_0_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Referencia angular desde la cual se empieza a medir el desplazamiento.\r
        en: Angular reference from which displacement measurement begins.\r
    coherence_rules:\r
    - id: theta_0_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Define el "piso" inicial de la trayectoria parabólica angular.\r
        en: Defines the initial "floor" of the angular parabolic path.\r
    physical_reading_rules:\r
    - id: theta_0_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Determina la fase inicial del objeto en el círculo.\r
        en: Determines the initial phase of the object on the circle.\r
    model_validity_rules:\r
    - id: theta_0_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Su elección es arbitraria pero debe mantenerse constante en el análisis.\r
        en: Its choice is arbitrary but must remain constant during analysis.\r
    graph_rules:\r
    - id: theta_0_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Es el valor de la ordenada en el origen en la gráfica theta-t.\r
        en: It is the intercept value on the theta-t graph.\r
    likely_errors:\r
    - id: theta_0_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Ignorarla resultará en una posición angular incorrecta si no se busca solo el delta.\r
        en: Ignoring it will result in an incorrect angular position if not looking only for delta.\r
    next_step_rules:\r
    - id: theta_0_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Suma el desplazamiento calculado a este valor para hallar la posición final.\r
        en: Add calculated displacement to this value to find the final position.\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Rapidez tangencial instantánea del punto periférico del móvil.\r
        en: Instantaneous tangential speed of the object's peripheral point.\r
    coherence_rules:\r
    - id: v_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Evoluciona proporcionalmente a la velocidad angular omega.\r
        en: Evolves proportionally to the angular velocity omega.\r
    physical_reading_rules:\r
    - id: v_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indica cuán rápido pasaría el objeto frente a un observador lineal exterior.\r
        en: Indicates how fast the object would pass in front of an external linear observer.\r
    model_validity_rules:\r
    - id: v_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Solo válida para puntos situados a distancia R del centro.\r
        en: Only valid for points located at distance R from the center.\r
    graph_rules:\r
    - id: v_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Muestra una progresión lineal en el tiempo en este modelo.\r
        en: Shows a linear progression in time in this model.\r
    likely_errors:\r
    - id: v_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas esta rapidez escalar con el vector velocidad vectorial.\r
        en: Do not confuse this scalar speed with the velocity vector.\r
    next_step_rules:\r
    - id: v_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Útil para calcular la energía cinética del móvil.\r
        en: Useful for calculating the object's kinetic energy.\r
  R:\r
    summary_rules:\r
    - id: R_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Radio de curvatura constante que define la trayectoria circular.\r
        en: Constant curvature radius defining the circular path.\r
    coherence_rules:\r
    - id: R_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Es el parámetro que escala las magnitudes angulares a lineales.\r
        en: It is the parameter that scales angular magnitudes to linear ones.\r
    physical_reading_rules:\r
    - id: R_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Define el tamaño de la órbita o rueda analizada.\r
        en: Defines the size of the orbit or wheel analyzed.\r
    model_validity_rules:\r
    - id: R_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si R cambia, el movimiento deja de ser circular puro y el modelo no aplica.\r
        en: If R changes, the motion is no longer pure circular and the model doesn't apply.\r
    graph_rules:\r
    - id: R_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: No suele graficarse, pero determina las pendientes de las gráficas lineales.\r
        en: Not usually graphed, but determines the slopes of linear graphs.\r
    likely_errors:\r
    - id: R_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Asegúrate de que el radio esté en metros para que las unidades sean consistentes.\r
        en: Ensure the radius is in meters for units to be consistent.\r
    next_step_rules:\r
    - id: R_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa el radio para convertir cualquier dato angular a su equivalente en el borde.\r
        en: Use the radius to convert any angular data to its edge equivalent.\r
  omega_med:\r
    summary_rules:\r
    - id: omega_med_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Velocidad angular promedio durante el transcurso del intervalo acelerado.\r
        en: Average angular velocity during the course of the accelerated interval.\r
    coherence_rules:\r
    - id: omega_med_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser el valor medio exacto entre la velocidad inicial y la final.\r
        en: Must be the exact average value between initial and final velocity.\r
    physical_reading_rules:\r
    - id: omega_med_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Representa el ritmo de giro constante que produciría el mismo desplazamiento.\r
        en: Represents the constant rotation rate that would produce the same displacement.\r
    model_validity_rules:\r
    - id: omega_med_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Solo es aplicable si la aceleración angular es uniforme.\r
        en: Only applicable if angular acceleration is uniform.\r
    graph_rules:\r
    - id: omega_med_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se visualiza como la altura media del trapecio en la gráfica omega-t.\r
        en: It is visualized as the trapezoid's mean height in the omega-t graph.\r
    likely_errors:\r
    - id: omega_med_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No asumas que la velocidad media es simplemente (omega/2) si omega_0 no es cero.\r
        en: Do not assume average velocity is simply (omega/2) if omega_0 is not zero.\r
    next_step_rules:\r
    - id: omega_med_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Útil para despejar tiempos sin recurrir a la ecuación cuadrática.\r
        en: Useful for solving times without resorting to the quadratic equation.\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Instante temporal específico para el cual se calculan las magnitudes de estado.\r
        en: Specific temporal instant for which state quantities are calculated.\r
    coherence_rules:\r
    - id: t_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser no negativo en la mayoría de contextos físicos reales.\r
        en: Must be non-negative in most real physical contexts.\r
    physical_reading_rules:\r
    - id: t_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indica el momento exacto de la "foto" tomada al sistema circular.\r
        en: Indicates the exact moment of the "snapshot" taken of the circular system.\r
    model_validity_rules:\r
    - id: t_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Define la variable independiente fundamental del modelo cinemático.\r
        en: Defines the fundamental independent variable of the kinematic model.\r
    graph_rules:\r
    - id: t_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Corresponde al eje de abscisas en todos los diagramas de evolución.\r
        en: Corresponds to the abscissa axis in all evolution diagrams.\r
    likely_errors:\r
    - id: t_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Verifica si el tiempo t incluye o no un desfase inicial.\r
        en: Check if time t includes an initial offset or not.\r
    next_step_rules:\r
    - id: t_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Evalúa la posición o velocidad en este instante para completar el análisis.\r
        en: Evaluate position or velocity at this instant to complete analysis.\r
  delta_theta:\r
    summary_rules:\r
    - id: delta_theta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ángulo neto barrido por el móvil durante el intervalo analizado.\r
        en: Net angle swept by the object during the analyzed interval.\r
    coherence_rules:\r
    - id: delta_theta_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser consistente con las velocidades angulares y el tiempo del intervalo.\r
        en: Must be consistent with the angular velocities and the time interval.\r
    physical_reading_rules:\r
    - id: delta_theta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Representa cuántos radianes ha girado el sistema desde el instante inicial hasta el final.\r
        en: Represents how many radians the system has rotated from the initial to the final instant.\r
    model_validity_rules:\r
    - id: delta_theta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Siempre válido para movimiento circular; se mide en radianes para que las ecuaciones sean correctas.\r
        en: Always valid for circular motion; measured in radians for the equations to be correct.\r
    graph_rules:\r
    - id: delta_theta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Corresponde al área bajo la curva en la gráfica de velocidad angular frente al tiempo.\r
        en: Corresponds to the area under the curve in the angular velocity versus time graph.\r
    likely_errors:\r
    - id: delta_theta_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas el desplazamiento angular delta_theta con la posición angular final theta.\r
        en: Do not confuse the angular displacement delta_theta with the final angular position theta.\r
    next_step_rules:\r
    - id: delta_theta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa este valor para calcular la longitud de arco recorrida o el número de vueltas completadas.\r
        en: Use this value to calculate the arc length traveled or the number of revolutions completed.\r
`;export{e as default};
