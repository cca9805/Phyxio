const e=`version: 1\r
id: interpretacion-condicion-cinematica\r
leaf_id: condicion-cinematica\r
nombre:\r
  es: Interpretacion de condicion cinematica de rodadura\r
  en: Interpretation of rolling kinematic condition\r
scope:\r
  es: lectura de calculadora, coherencia fisica y deteccion de deslizamiento\r
  en: calculator reading, physical coherence and slip detection\r
dependencies:\r
  magnitudes:\r
  - R\r
  - a\r
  - alpha\r
  - delta\r
  - f_s\r
  - omega\r
  - v\r
  - v_contacto\r
  formulas:\r
  - condicion_rodadura\r
  - consistencia_rodadura\r
  - relacion_aceleracion\r
  - velocidad_contacto\r
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
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  v:\r
    summary_rules:\r
    - id: v_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Velocidad lineal del centro de masas.\r
        en: Linear velocity of the center of mass.\r
    coherence_rules:\r
    - id: v_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantener coherencia con omega y R en regimen de rodadura pura.\r
        en: It must remain consistent with omega and R in pure rolling regime.\r
    physical_reading_rules:\r
    - id: v_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modulo de v cuantifica la rapidez de avance del centro de masas.\r
        en: The magnitude of v quantifies translational advance speed of the center of mass.\r
    model_validity_rules:\r
    - id: v_validity_main\r
      when: R > 0\r
      status: info\r
      text:\r
        es: La lectura es valida si R es positivo y el contacto rueda sobre superficie fija.\r
        en: Reading is valid when R is positive and contact rolls on a fixed surface.\r
    graph_rules:\r
    - id: v_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafica, comparar v con omega*R permite verificar la condicion de rodadura.\r
        en: On the graph, comparing v with omega*R helps verify rolling condition.\r
    likely_errors:
    - id: v_error_high
      when: abs(v) > 150
      status: warning
      text:
        es: Posible confusión entre m/s, km/h o rpm convertidas de forma incorrecta; una v tan alta suele romper la lectura didáctica de v = omega R.
        en: Possible confusion between m/s, km/h, or badly converted rpm; such a large v usually breaks the didactic reading of v = omega R.
    - id: v_error_none\r
      when: abs(v) <= 150\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato en v.\r
        en: No immediate likely error detected for v.\r
    next_step_rules:\r
    - id: v_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Como siguiente paso, calcula v_contacto o delta para diagnosticar deslizamiento.\r
        en: As a next step, compute v_contacto or delta to diagnose slip.\r
  omega:\r
    summary_rules:\r
    - id: omega_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Velocidad angular asociada al giro del cuerpo.\r
        en: Angular velocity associated with body rotation.\r
    coherence_rules:\r
    - id: omega_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Su signo y modulo deben ser compatibles con el convenio de avance.\r
        en: Its sign and magnitude must match the adopted motion convention.\r
    physical_reading_rules:\r
    - id: omega_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El modulo de omega expresa la intensidad de giro del cuerpo.\r
        en: The magnitude of omega expresses rotational intensity of the body.\r
    model_validity_rules:\r
    - id: omega_validity_main\r
      when: R > 0\r
      status: info\r
      text:\r
        es: El resultado mantiene validez en regimen de rodadura con radio positivo.\r
        en: Result remains valid in rolling regime with positive radius.\r
    graph_rules:\r
    - id: omega_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafica, la pendiente angular debe ser coherente con el avance lineal.\r
        en: On the graph, angular trend should be consistent with linear advance.\r
    likely_errors:
    - id: omega_error_high
      when: abs(omega) > 500
      status: warning
      text:
        es: Probable error al confundir rpm con rad/s o al usar el diámetro como si fuera R; revisa la compatibilidad con v = omega R.
        en: Probable error from confusing rpm with rad/s or from using diameter instead of R; recheck compatibility with v = omega R.
    - id: omega_error_none\r
      when: abs(omega) <= 500\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato en omega.\r
        en: No immediate likely error detected for omega.\r
    next_step_rules:\r
    - id: omega_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica v_contacto para confirmar si hay rodadura pura.\r
        en: Check v_contacto to confirm whether rolling is pure.\r
  R:\r
    summary_rules:\r
    - id: R_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Radio efectivo entre centro de masas y punto de contacto.\r
        en: Effective radius between center of mass and contact point.\r
    coherence_rules:\r
    - id: R_coherence_positive\r
      when: R > 0\r
      status: ok\r
      text:\r
        es: El radio positivo mantiene sentido fisico de la geometria de rodadura.\r
        en: Positive radius preserves physical meaning of rolling geometry.\r
    physical_reading_rules:\r
    - id: R_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: R fija la conversion entre magnitudes lineales y angulares.\r
        en: R sets conversion between linear and angular quantities.\r
    model_validity_rules:\r
    - id: R_validity_main\r
      when: R > 0\r
      status: info\r
      text:\r
        es: El modelo exige radio positivo y constante para la deduccion cinematica.\r
        en: Model requires positive and constant radius for kinematic derivation.\r
    graph_rules:\r
    - id: R_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si R cambia, la relacion v-omega deja de tener pendiente fija.\r
        en: If R changes, v-omega relation no longer keeps a fixed slope.\r
    likely_errors:\r
    - id: R_error_non_positive\r
      when: R <= 0\r
      status: warning\r
      text:\r
        es: R no debe ser cero ni negativo para este modelo.\r
        en: R must not be zero or negative for this model.\r
    - id: R_error_none\r
      when: R > 0\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato en R.\r
        en: No immediate likely error detected for R.\r
    next_step_rules:\r
    - id: R_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa R para contrastar simultaneamente condicion_rodadura y relacion_aceleracion.\r
        en: Use R to cross-check both condicion_rodadura and relacion_aceleracion.\r
  v_contacto:\r
    summary_rules:\r
    - id: v_contacto_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Velocidad relativa del punto de contacto respecto al suelo.\r
        en: Relative velocity of the contact point with respect to ground.\r
    coherence_rules:\r
    - id: v_contacto_coherence_zero\r
      when: abs(v_contacto) <= 0.01\r
      status: ok\r
      text:\r
        es: Valor cercano a cero compatible con rodadura pura.\r
        en: Near-zero value is consistent with pure rolling.\r
    physical_reading_rules:\r
    - id: v_contacto_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v_contacto mide si el punto de apoyo patina o queda instantaneamente en reposo.\r
        en: v_contacto tells whether contact point slips or remains instantaneously at rest.\r
    model_validity_rules:\r
    - id: v_contacto_validity_main\r
      when: R > 0\r
      status: info\r
      text:\r
        es: La lectura es valida bajo el mismo convenio de signos para v, omega y R.\r
        en: Reading is valid under a consistent sign convention for v, omega and R.\r
    graph_rules:\r
    - id: v_contacto_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafica, la franja alrededor de cero delimita rodadura casi pura.\r
        en: On the graph, the near-zero band delimits almost pure rolling.\r
    likely_errors:
    - id: v_contacto_error_slip
      when: abs(v_contacto) > 0.01
      status: warning
      text:
        es: Hay indicio de deslizamiento; un error típico es imponer v = omega R sin mirar primero que el punto de contacto ya no está casi en reposo.
        en: There is evidence of slip; a common mistake is to impose v = omega R before noticing that the contact point is no longer almost at rest.
    - id: v_contacto_error_none\r
      when: abs(v_contacto) <= 0.01\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato en v_contacto.\r
        en: No immediate likely error detected for v_contacto.\r
    next_step_rules:\r
    - id: v_contacto_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta ahora delta para clasificar direccion del posible deslizamiento.\r
        en: Now compare delta to classify possible slip direction.\r
  delta:\r
    summary_rules:\r
    - id: delta_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Indicador escalar de desviacion respecto a la condicion ideal.\r
        en: Scalar indicator of deviation from the ideal condition.\r
    coherence_rules:\r
    - id: delta_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Delta mayor o menor que cero distingue derrape y patinamiento.\r
        en: Positive or negative delta distinguishes skidding and spin-out.\r
    physical_reading_rules:\r
    - id: delta_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Delta cuantifica la desviacion respecto al vinculo ideal v = omega R.\r
        en: Delta quantifies deviation from ideal constraint v = omega R.\r
    model_validity_rules:\r
    - id: delta_validity_main\r
      when: R > 0\r
      status: info\r
      text:\r
        es: El diagnostico con delta supone radio constante y contacto bien definido.\r
        en: Delta diagnosis assumes constant radius and well-defined contact.\r
    graph_rules:\r
    - id: delta_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El cambio de signo de delta marca transicion entre regimens.\r
        en: Delta sign change marks transition between regimes.\r
    likely_errors:
    - id: delta_error_large
      when: abs(delta) > 20
      status: warning
      text:
        es: Delta muy grande; suele indicar que el alumno confundió el signo del giro, mezcló unidades o trató una rueda deslizante como si siguiera en rodadura pura.
        en: Delta is very large; this often means the student confused rotation sign, mixed units, or treated a slipping wheel as if pure rolling still held.
    - id: delta_error_none\r
      when: abs(delta) <= 20\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato en delta.\r
        en: No immediate likely error detected for delta.\r
    next_step_rules:\r
    - id: delta_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Calcula fuerza de rozamiento necesaria para sostener o corregir el regimen.\r
        en: Compute required friction force to sustain or correct the regime.\r
  a:\r
    summary_rules:\r
    - id: a_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Aceleracion lineal del centro de masas.\r
        en: Linear acceleration of the center of mass.\r
    coherence_rules:\r
    - id: a_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe respetar el acoplamiento a = alpha R cuando no hay deslizamiento.\r
        en: It must satisfy coupling a = alpha R when slipping is absent.\r
    physical_reading_rules:\r
    - id: a_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a describe como cambia la rapidez lineal del centro de masas.\r
        en: a describes how center-of-mass linear speed changes.\r
    model_validity_rules:\r
    - id: a_validity_main\r
      when: R > 0\r
      status: info\r
      text:\r
        es: La relacion de aceleraciones se aplica con radio constante y contacto sin salto.\r
        en: Acceleration relation applies with constant radius and continuous contact.\r
    graph_rules:\r
    - id: a_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafica, compara a con alpha*R para detectar perdida de acoplamiento.\r
        en: On the graph, compare a with alpha*R to detect coupling loss.\r
    likely_errors:
    - id: a_error_high
      when: abs(a) > 80
      status: warning
      text:
        es: a muy elevada; comprueba si todavía es razonable usar a = alpha R o si el contacto ya perdió adherencia y la ligadura dejó de valer.
        en: a is very large; check whether it is still reasonable to use a = alpha R or whether contact has already lost adherence.
    - id: a_error_none\r
      when: abs(a) <= 80\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato en a.\r
        en: No immediate likely error detected for a.\r
    next_step_rules:\r
    - id: a_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Evalua alpha y compara ambos resultados para cerrar el chequeo cinematico.\r
        en: Evaluate alpha and compare both results to close kinematic check.\r
  alpha:\r
    summary_rules:\r
    - id: alpha_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Aceleracion angular asociada al cambio de giro.\r
        en: Angular acceleration associated with rotational change.\r
    coherence_rules:\r
    - id: alpha_coherence_main\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser compatible con a y R segun alpha = a/R.\r
        en: It must be consistent with a and R through alpha = a/R.\r
    physical_reading_rules:\r
    - id: alpha_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: alpha representa la variacion temporal de la velocidad angular.\r
        en: alpha represents temporal variation of angular velocity.\r
    model_validity_rules:\r
    - id: alpha_validity_main\r
      when: R > 0\r
      status: info\r
      text:\r
        es: La interpretacion de alpha requiere mismo convenio de signos que a.\r
        en: Interpreting alpha requires the same sign convention as a.\r
    graph_rules:\r
    - id: alpha_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafica, alpha estable implica cambio angular uniforme.\r
        en: On the graph, steady alpha implies uniform angular-rate change.\r
    likely_errors:
    - id: alpha_error_high
      when: abs(alpha) > 400
      status: warning
      text:
        es: alpha muy alta; un error frecuente es confundir velocidad angular con aceleración angular o usar un intervalo temporal demasiado pequeño sin revisar ruido experimental.
        en: alpha is very high; a common mistake is to confuse angular speed with angular acceleration or to use an unrealistically small time interval.
    - id: alpha_error_none\r
      when: abs(alpha) <= 400\r
      status: info\r
      text:\r
        es: No se detecta un error probable inmediato en alpha.\r
        en: No immediate likely error detected for alpha.\r
    next_step_rules:\r
    - id: alpha_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba energia y friccion para conectar cinematica con dinamica.\r
        en: Check energy and friction to connect kinematics with dynamics.\r
`;export{e as default};
