const e=`version: 2\r
id: interpretacion-pendulo-fisico\r
leaf_id: pendulo-fisico\r
nombre:\r
  es: Interpretacion del pendulo fisico\r
  en: Interpretation of the physical pendulum\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: oscilaciones\r
  parent_id: oscilaciones\r
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/pendulo-fisico\r
dependencies:\r
  formulas:\r
  - omega0_pf\r
  - periodo_pf\r
  - frecuencia_pf\r
  - ecuacion_no_lineal_pf\r
  magnitudes:\r
  - I\r
  - m\r
  - g\r
  - d\r
  - omega0\r
  - T\r
  - f\r
  - theta\r
  - theta_dd\r
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
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
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
      es: Lectura grafica\r
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
  omega0:\r
    summary_rules:\r
    - id: omega0_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La pulsacion natural fija la escala de rapidez angular del pendulo fisico.\r
        en: Natural angular frequency sets the angular speed scale of the physical pendulum.\r
    coherence_rules:\r
    - id: omega0_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser positiva y consistente con I, m, g y d.\r
        en: It must be positive and consistent with I, m, g and d.\r
    physical_reading_rules:\r
    - id: omega0_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: A mayor inercia para igual torque restaurador, menor rapidez natural.\r
        en: Larger inertia under equal restoring torque gives lower natural rate.\r
    model_validity_rules:\r
    - id: omega0_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La expresion lineal de omega0 asume angulos pequenos.\r
        en: The linear omega0 expression assumes small angles.\r
    graph_rules:\r
    - id: omega0_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se relaciona con separacion temporal entre maximos de theta(t).\r
        en: It relates to temporal spacing between maxima in theta(t).\r
    likely_errors:\r
    - id: omega0_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No confundas omega0 en rad/s con frecuencia en Hz.\r
        en: Do not confuse omega0 in rad/s with frequency in Hz.\r
    next_step_rules:\r
    - id: omega0_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa omega0 para comprobar si la excitacion externa esta cerca de resonancia.\r
        en: Use omega0 to check whether external excitation is near resonance.\r
\r
  I:\r
    summary_rules:\r
    - id: I_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: I resume como esta distribuida la masa respecto al eje.\r
        en: I summarises how mass is distributed relative to the axis.\r
    coherence_rules:\r
    - id: I_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe mantenerse positiva y acorde al eje real de giro.\r
        en: It must remain positive and match the real rotation axis.\r
    physical_reading_rules:\r
    - id: I_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: A mayor I, mayor resistencia a cambiar estado angular.\r
        en: Larger I means stronger resistance to angular state change.\r
    model_validity_rules:\r
    - id: I_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si cambia el eje, cambia I y cambia el periodo.\r
        en: If axis changes, I changes and period changes.\r
    graph_rules:\r
    - id: I_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Incrementar I desplaza picos de theta(t) a tiempos mas largos.\r
        en: Increasing I shifts theta(t) peaks to later times.\r
    likely_errors:\r
    - id: I_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: Evita usar I de otro eje sin aplicar teorema de ejes paralelos.\r
        en: Avoid using I from another axis without parallel-axis correction.\r
    next_step_rules:\r
    - id: I_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contrasta I teorica con medicion dinamica del periodo.\r
        en: Contrast theoretical I with dynamic period measurement.\r
\r
  d:\r
    summary_rules:\r
    - id: d_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: d determina la palanca gravitatoria del sistema.\r
        en: d determines the gravitational lever arm of the system.\r
    coherence_rules:\r
    - id: d_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser positiva y medida desde el eje al centro de masas.\r
        en: It must be positive and measured from pivot to center of mass.\r
    physical_reading_rules:\r
    - id: d_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Reducir d puede aumentar periodo aunque la masa no cambie.\r
        en: Decreasing d can increase period even if mass is unchanged.\r
    model_validity_rules:\r
    - id: d_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: d nula invalida el modelo de pendulo fisico gravitatorio.\r
        en: Zero d invalidates the gravitational physical pendulum model.\r
    graph_rules:\r
    - id: d_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambios de d afectan amplitud temporal y separacion de ciclos.\r
        en: d changes affect temporal amplitude and cycle spacing.\r
    likely_errors:\r
    - id: d_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No midas d sobre proyecciones equivocadas del cuerpo.\r
        en: Do not measure d from incorrect body projections.\r
    next_step_rules:\r
    - id: d_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Reestima d tras cualquier cambio geométrico del montaje.\r
        en: Re-estimate d after any geometric change in setup.\r
\r
  T:\r
    summary_rules:\r
    - id: T_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: T es la duracion de un ciclo completo de oscilacion angular.\r
        en: T is the duration of one full angular oscillation cycle.\r
    coherence_rules:\r
    - id: T_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: T debe ser positiva y consistente con f y omega0.\r
        en: T must be positive and consistent with f and omega0.\r
    physical_reading_rules:\r
    - id: T_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si T sube, la respuesta del sistema es mas lenta.\r
        en: If T increases, system response is slower.\r
    model_validity_rules:\r
    - id: T_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Grandes amplitudes pueden desviar T respecto al valor lineal esperado.\r
        en: Large amplitudes can shift T away from linear expected value.\r
    graph_rules:\r
    - id: T_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se mide entre dos maximos consecutivos de theta.\r
        en: It is measured between two consecutive maxima of theta.\r
    likely_errors:\r
    - id: T_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: Evita confundir medio periodo con periodo completo.\r
        en: Avoid confusing half-period with full period.\r
    next_step_rules:\r
    - id: T_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa T para estimar frecuencia y verificar objetivos de diseno.\r
        en: Use T to estimate frequency and verify design targets.\r
\r
  f:\r
    summary_rules:\r
    - id: f_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: f cuantifica ciclos por segundo del pendulo fisico.\r
        en: f quantifies cycles per second of the physical pendulum.\r
    coherence_rules:\r
    - id: f_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe cumplir reciprocidad con T dentro del error experimental.\r
        en: It must satisfy reciprocity with T within experimental error.\r
    physical_reading_rules:\r
    - id: f_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambios de f revelan variaciones de geometria o inercia efectiva.\r
        en: Changes in f reveal variations in geometry or effective inertia.\r
    model_validity_rules:\r
    - id: f_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La frecuencia lineal es fiable en oscilaciones de pequena amplitud.\r
        en: Linear frequency is reliable in small-amplitude oscillations.\r
    graph_rules:\r
    - id: f_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contar ciclos en una ventana temporal permite estimar f experimental.\r
        en: Counting cycles in a time window estimates experimental f.\r
    likely_errors:\r
    - id: f_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No mezcles Hz con rad/s en reportes comparativos.\r
        en: Do not mix Hz with rad/s in comparative reports.\r
    next_step_rules:\r
    - id: f_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Compara f con frecuencias de excitacion para prevenir resonancia.\r
        en: Compare f against excitation frequencies to prevent resonance.\r
\r
  theta_dd:\r
    summary_rules:\r
    - id: theta_dd_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: theta_dd representa la curvatura temporal de la respuesta angular.\r
        en: theta_dd represents time curvature of angular response.\r
    coherence_rules:\r
    - id: theta_dd_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Su signo debe ser coherente con el torque restaurador neto.\r
        en: Its sign must be coherent with net restoring torque.\r
    physical_reading_rules:\r
    - id: theta_dd_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Para oscilaciones pequenas, theta_dd suele ser opuesta a theta.\r
        en: For small oscillations, theta_dd is usually opposite in sign to theta.\r
    model_validity_rules:\r
    - id: theta_dd_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: En amplitudes grandes, la dinamica deja de ser estrictamente sinusoidal.\r
        en: At large amplitudes, dynamics is no longer strictly sinusoidal.\r
    graph_rules:\r
    - id: theta_dd_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Las zonas de mayor curvatura en theta(t) sugieren mayor modulo de theta_dd.\r
        en: High-curvature zones in theta(t) suggest larger theta_dd magnitude.\r
    likely_errors:\r
    - id: theta_dd_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No confundas theta_dd con velocidad angular theta_dot.\r
        en: Do not confuse theta_dd with angular velocity theta_dot.\r
    next_step_rules:\r
    - id: theta_dd_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa theta_dd para analizar torque instantaneo y estabilidad local.\r
        en: Use theta_dd to analyse instantaneous torque and local stability.\r
`;export{e as default};
