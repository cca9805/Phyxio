const e=`version: 2\r
id: interpretacion-pendulo\r
leaf_id: pendulo\r
nombre:\r
  es: Interpretacion del pendulo\r
  en: Pendulum interpretation\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: mecanica-analitica\r
  parent_id: aplicaciones\r
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/aplicaciones/pendulo\r
dependencies:\r
  formulas: [ omega, Tper, tau ]\r
  magnitudes: [ L, g, theta, m, omega, Tper, tau ]\r
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
    title: { es: Resumen fisico, en: Physical summary }\r
  physical_reading:\r
    title: { es: Lectura causal, en: Causal reading }\r
  coherence:\r
    title: { es: Coherencia del resultado, en: Result coherence }\r
  model_validity:\r
    title: { es: Validez del modelo, en: Model validity }\r
  graph_reading:\r
    title: { es: Lectura grafica, en: Graph reading }\r
  likely_errors:\r
    title: { es: Errores probables, en: Likely errors }\r
  next_step:\r
    title: { es: Siguiente decision, en: Next decision }\r
\r
targets:\r
  omega:\r
    summary_rules:\r
    - id: omega_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[omega]] resume el ritmo natural del pendulo y depende de [[g]] y [[L]] en el regimen pequeno angular.", en: "[[omega]] summarizes pendulum natural rhythm and depends on [[g]] and [[L]] in the small-angle regime." }\r
    physical_reading_rules:\r
    - id: omega_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[L]] crece, el pendulo tarda mas en recuperar vertical y [[omega]] baja; si [[g]] crece, el retorno es mas intenso y [[omega]] sube.", en: "If [[L]] increases, the pendulum needs more time to recover vertical and [[omega]] decreases; if [[g]] increases, restoring action intensifies and [[omega]] rises." }\r
    coherence_rules:\r
    - id: omega_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "El resultado es coherente si [[omega]] es positiva, cambia con raiz de [[g]] y con raiz inversa de [[L]].", en: "The result is coherent if [[omega]] is positive, changes with square root of [[g]], and with inverse square root of [[L]]." }\r
    model_validity_rules:\r
    - id: omega_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Valido para angulos pequenos, hilo inextensible y perdidas pequenas por ciclo.", en: "Valid for small angles, inextensible string, and small losses per cycle." }\r
    graph_rules:\r
    - id: omega_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En Coord, [[omega]] debe reducirse con [[L]] y aumentar con [[g]], manteniendo pendiente no lineal por raiz.", en: "In Coord, [[omega]] should decrease with [[L]] and increase with [[g]], keeping a nonlinear square-root slope." }\r
    likely_errors:\r
    - id: omega_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error conceptual comun: creer que aumentar [[m]] cambia [[omega]] en el pendulo ideal, o mezclar unidades de [[L]] y [[g]] sin conversion.", en: "Common conceptual error: assuming that increasing [[m]] changes [[omega]] in the ideal pendulum, or mixing [[L]] and [[g]] units without conversion." }\r
    next_step_rules:\r
    - id: omega_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Tras estimar [[omega]], calcula [[Tper]] para conectar con medicion temporal directa.", en: "After estimating [[omega]], compute [[Tper]] to connect with direct time measurement." }\r
\r
  Tper:\r
    summary_rules:\r
    - id: Tper_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[Tper]] da el tiempo de ciclo del pendulo en pequenas oscilaciones.", en: "[[Tper]] gives pendulum cycle time under small oscillations." }\r
    physical_reading_rules:\r
    - id: Tper_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Un [[Tper]] grande indica retorno lento por [[L]] alta o [[g]] baja.", en: "A large [[Tper]] indicates slow restoration due to high [[L]] or low [[g]]." }\r
    coherence_rules:\r
    - id: Tper_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[Tper]] debe ser positivo y su tendencia debe oponerse a la de [[omega]].", en: "[[Tper]] must be positive and its trend must oppose [[omega]] trend." }\r
    model_validity_rules:\r
    - id: Tper_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Si el periodo observado cambia con amplitud grande, la aproximacion lineal deja de ser fiable.", en: "If observed period changes with large amplitude, the linear approximation is no longer reliable." }\r
    graph_rules:\r
    - id: Tper_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En el grafico temporal, [[Tper]] es la separacion entre picos equivalentes de [[theta]].", en: "In the time graph, [[Tper]] is the separation between equivalent peaks of [[theta]]." }\r
    likely_errors:\r
    - id: Tper_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error conceptual comun: asumir dependencia lineal entre [[Tper]] y [[L]], o atribuir cambios de periodo a [[m]] en el modelo ideal.", en: "Common conceptual error: assuming linear dependence between [[Tper]] and [[L]], or attributing period changes to [[m]] in the ideal model." }\r
    next_step_rules:\r
    - id: Tper_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Comparar [[Tper]] estimado con mediciones repetidas ayuda a detectar no linealidad o rozamiento.", en: "Comparing estimated [[Tper]] with repeated measurements helps detect nonlinearity or damping." }\r
\r
  tau:\r
    summary_rules:\r
    - id: tau_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[tau]] cuantifica la accion restauradora instantanea y cambia de signo con [[theta]].", en: "[[tau]] quantifies instantaneous restoring action and changes sign with [[theta]]." }\r
    physical_reading_rules:\r
    - id: tau_physical\r
      when: "true"\r
      status: info\r
      text: { es: "El signo menos de [[tau]] indica que el sistema empuja siempre hacia la vertical estable.", en: "The minus sign in [[tau]] indicates the system always pushes toward stable vertical direction." }\r
    coherence_rules:\r
    - id: tau_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "La coherencia basica es sign([[tau]]) opuesto a sign([[theta]]).", en: "Basic coherence is sign([[tau]]) opposite to sign([[theta]])." }\r
    model_validity_rules:\r
    - id: tau_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "La expresion exacta con seno mantiene validez para angulos moderados sin linealizar.", en: "The exact sine expression remains valid for moderate angles without linearization." }\r
    graph_rules:\r
    - id: tau_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En un mapa [[tau]] vs [[theta]], la curva cruza cero en equilibrio y cambia de signo al cruzar vertical.", en: "In a [[tau]] vs [[theta]] map, the curve crosses zero at equilibrium and flips sign when crossing vertical." }\r
    likely_errors:\r
    - id: tau_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error conceptual comun: eliminar el signo negativo o interpretar [[tau]] como cantidad de ciclo en lugar de accion instantanea.", en: "Common conceptual error: dropping the negative sign or interpreting [[tau]] as a cycle quantity instead of instantaneous action." }\r
    next_step_rules:\r
    - id: tau_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Con [[tau]] disponible, el siguiente paso es estudiar estabilidad local y energia angular.", en: "With [[tau]] available, the next step is to study local stability and angular energy." }\r
\r
  L:\r
    summary_rules:\r
    - id: L_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[L]] fija la escala geometrica del pendulo y condiciona su reloj temporal.", en: "[[L]] sets pendulum geometric scale and conditions its temporal clock." }\r
    physical_reading_rules:\r
    - id: L_physical\r
      when: "true"\r
      status: info\r
      text: { es: "A mayor [[L]], el arco efectivo crece y el ciclo se hace mas lento.", en: "With larger [[L]], effective arc scale increases and the cycle becomes slower." }\r
    coherence_rules:\r
    - id: L_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[L]] debe ser positiva y medirse desde pivote hasta centro de masa efectivo.", en: "[[L]] must be positive and measured from pivot to effective center of mass." }\r
    model_validity_rules:\r
    - id: L_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Si la longitud efectiva cambia durante el ensayo, la lectura temporal pierde validez.", en: "If effective length changes during the run, temporal reading loses validity." }\r
    graph_rules:\r
    - id: L_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En Coord, variar [[L]] debe mover la escala de [[omega]] y [[Tper]] con tendencia opuesta.", en: "In Coord, changing [[L]] should move [[omega]] and [[Tper]] scales with opposite trend." }\r
    likely_errors:\r
    - id: L_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: usar longitud de cuerda total sin corregir posicion real del centro de masa.", en: "Common error: using total string length without correcting real center-of-mass position." }\r
    next_step_rules:\r
    - id: L_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Refina la medida de [[L]] antes de ajustar cualquier comparacion temporal fina.", en: "Refine [[L]] measurement before any fine temporal comparison." }\r
\r
  g:\r
    summary_rules:\r
    - id: g_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[g]] expresa la intensidad del campo que genera retorno gravitatorio.", en: "[[g]] expresses field intensity that generates gravitational return." }\r
    physical_reading_rules:\r
    - id: g_physical\r
      when: "true"\r
      status: info\r
      text: { es: "A mayor [[g]], el pendulo recupera vertical mas rapido y reduce su periodo.", en: "With larger [[g]], the pendulum recovers vertical faster and reduces period." }\r
    coherence_rules:\r
    - id: g_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[g]] debe ser positiva y coherente con el entorno fisico del experimento.", en: "[[g]] must be positive and coherent with experiment physical environment." }\r
    model_validity_rules:\r
    - id: g_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Si el experimento cambia de altitud o entorno, [[g]] efectiva debe actualizarse.", en: "If the experiment changes altitude or environment, effective [[g]] must be updated." }\r
    graph_rules:\r
    - id: g_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En Coord, aumentar [[g]] debe elevar [[omega]] y reducir [[Tper]].", en: "In Coord, increasing [[g]] should raise [[omega]] and reduce [[Tper]]." }\r
    likely_errors:\r
    - id: g_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: usar valor de [[g]] por defecto sin justificar condiciones locales.", en: "Common error: using default [[g]] value without justifying local conditions." }\r
    next_step_rules:\r
    - id: g_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Contrasta [[g]] asumida con una medicion de referencia para cerrar incertidumbre.", en: "Compare assumed [[g]] with a reference measurement to close uncertainty." }\r
\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[m]] escala el torque local pero no gobierna el reloj temporal ideal.", en: "[[m]] scales local torque but does not govern ideal temporal clock." }\r
    physical_reading_rules:\r
    - id: m_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Incrementar [[m]] aumenta modulo de [[tau]] para el mismo estado angular.", en: "Increasing [[m]] raises [[tau]] magnitude for the same angular state." }\r
    coherence_rules:\r
    - id: m_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[m]] debe permanecer positiva y expresada en kg para mantener coherencia dinamica.", en: "[[m]] must remain positive and expressed in kg to keep dynamic coherence." }\r
    model_validity_rules:\r
    - id: m_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Si la masa no puede tratarse como puntual, el modelo simple debe corregirse.", en: "If mass cannot be treated as point-like, the simple model must be corrected." }\r
    graph_rules:\r
    - id: m_graph\r
      when: "true"\r
      status: info\r
      text: { es: "La lectura temporal ideal casi no cambia con [[m]], pero el mapa de [[tau]] si se escala.", en: "Ideal temporal reading barely changes with [[m]], but [[tau]] mapping does scale." }\r
    likely_errors:\r
    - id: m_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: usar [[m]] para explicar cambios de periodo que en realidad vienen de [[L]] o de amplitud.", en: "Common error: using [[m]] to explain period changes that actually come from [[L]] or amplitude." }\r
    next_step_rules:\r
    - id: m_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Si el objetivo es ajustar tiempo de ciclo, prioriza [[L]] y no [[m]].", en: "If the goal is cycle-time tuning, prioritize [[L]] rather than [[m]]." }\r
`;export{e as default};
