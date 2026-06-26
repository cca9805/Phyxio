const e=`version: 2\r
id: interpretacion-energia-cinetica\r
leaf_id: energia-cinetica\r
nombre:\r
  es: Interpretacion de energia cinetica\r
  en: Interpretation of kinetic energy\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: trabajo-y-energia\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/energia-cinetica\r
dependencies:\r
  formulas:\r
  - energia_cinetica_basica\r
  - variacion_energia_cinetica\r
  - teorema_trabajo_energia\r
  magnitudes:\r
  - K\r
  - m\r
  - v\r
  - Ki\r
  - Kf\r
  - dK\r
  - Wnet\r
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
  K:\r
    summary_rules:\r
    - id: k_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: K resume cuanta energia mecanica esta ligada al estado de movimiento.\r
        en: K summarizes how much mechanical energy is tied to the state of motion.\r
    physical_reading_rules:\r
    - id: k_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si v aumenta con la misma m, K crece muy deprisa porque depende del cuadrado de la rapidez.\r
        en: If v increases with the same m, K rises quickly because it depends on the square of speed.\r
    coherence_rules:\r
    - id: k_coherence\r
      when: K >= 0\r
      status: ok\r
      text:\r
        es: K no negativa, consistente con energia cinetica clasica.\r
        en: Non-negative K, consistent with classical kinetic energy.\r
    - id: k_coherence_neg\r
      when: K < 0\r
      status: warning\r
      text:\r
        es: K negativa indica error de signos, unidades o sustitucion indebida de una componente de velocidad.\r
        en: Negative K indicates a sign, unit, or velocity-component substitution error.\r
    model_validity_rules:\r
    - id: k_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpreta K con esta formula solo en movimiento clasico no relativista y masa aproximadamente constante.\r
        en: Interpret K with this formula only for classical non-relativistic motion and approximately constant mass.\r
    graph_rules:\r
    - id: k_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En la grafica, K frente a v debe curvarse hacia arriba y no crecer linealmente.\r
        en: On the graph, K versus v must curve upward rather than grow linearly.\r
    likely_errors:\r
    - id: k_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No leas una velocidad negativa como energia negativa; el signo de la direccion no cambia K.\r
        en: Do not read a negative velocity as negative energy; direction sign does not change K.\r
    next_step_rules:\r
    - id: k_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras obtener K, compara si el cambio entre estados exige calcular dK o Wnet.\r
        en: After obtaining K, decide whether the change between states requires dK or Wnet.\r
  dK:\r
    summary_rules:\r
    - id: dk_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dK indica si el sistema gana, pierde o conserva energia cinetica entre dos estados.\r
        en: dK indicates whether the system gains, loses, or preserves kinetic energy between two states.\r
    physical_reading_rules:\r
    - id: dk_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dK positiva suele asociarse a trabajo motor neto; dK negativa, a frenado o disipacion.\r
        en: Positive dK usually corresponds to net driving work; negative dK to braking or dissipation.\r
    coherence_rules:\r
    - id: dk_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: dK debe coincidir con Kf menos Ki usando el mismo sistema y los mismos datos de estado.\r
        en: dK must match Kf minus Ki using the same system and the same state data.\r
    model_validity_rules:\r
    - id: dk_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura de dK es fiable si Ki y Kf describen exactamente el mismo objeto o sistema.\r
        en: Reading dK is reliable if Ki and Kf describe exactly the same object or system.\r
    graph_rules:\r
    - id: dk_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, dK se interpreta como salto entre el nivel inicial y el final de la curva de K.\r
        en: In Coord, dK is read as the jump between the initial and final levels of the K curve.\r
    likely_errors:\r
    - id: dk_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No conviertas dK en modulo si el signo decide si hubo aceleracion o frenado.\r
        en: Do not turn dK into a magnitude if the sign decides whether there was acceleration or braking.\r
    next_step_rules:\r
    - id: dk_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si ya tienes dK, comprueba si el problema pide identificar la causa mediante Wnet.\r
        en: If you already have dK, check whether the problem asks you to identify the cause through Wnet.\r
  Wnet:\r
    summary_rules:\r
    - id: wnet_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnet resume el efecto conjunto de todas las fuerzas sobre la energia cinetica.\r
        en: Wnet summarizes the combined effect of all forces on kinetic energy.\r
    physical_reading_rules:\r
    - id: wnet_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnet positiva aporta energia al movimiento; Wnet negativa la extrae.\r
        en: Positive Wnet adds energy to motion; negative Wnet removes it.\r
    coherence_rules:\r
    - id: wnet_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Wnet debe tener el mismo signo y la misma unidad que dK si el teorema se aplico bien.\r
        en: Wnet must have the same sign and unit as dK if the theorem was applied correctly.\r
    model_validity_rules:\r
    - id: wnet_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La validez exige incluir el trabajo de todas las fuerzas relevantes, no solo de la mas visible.\r
        en: Validity requires including the work of all relevant forces, not only the most obvious one.\r
    graph_rules:\r
    - id: wnet_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En una lectura grafica, un trabajo neto acumulado positivo debe corresponder a un aumento de K.\r
        en: In a graphical reading, positive accumulated net work must correspond to an increase in K.\r
    likely_errors:\r
    - id: wnet_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: El error comun es olvidar una fuerza resistiva y atribuir todo el cambio a la fuerza motora.\r
        en: The common error is to forget a resistive force and attribute the whole change to the driving one.\r
    next_step_rules:\r
    - id: wnet_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras hallar Wnet, decide si conviene descomponerlo por fuerzas o cerrar ya el balance cinetico.\r
        en: After finding Wnet, decide whether to decompose it by forces or close the kinetic balance.\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v es la variable de control mas sensible en K porque aparece elevada al cuadrado.\r
        en: v is the most sensitive control variable in K because it appears squared.\r
    physical_reading_rules:\r
    - id: v_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Pequeños aumentos relativos de v producen cambios mucho mayores en K que cambios equivalentes de m.\r
        en: Small relative increases in v produce much larger changes in K than equivalent changes in m.\r
    coherence_rules:\r
    - id: v_coherence\r
      when: v >= 0\r
      status: ok\r
      text:\r
        es: v se esta usando como rapidez y por tanto debe ser no negativa.\r
        en: v is being used as speed magnitude and must therefore be non-negative.\r
    model_validity_rules:\r
    - id: v_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si el problema usa componentes con signo, convierte primero a rapidez antes de calcular K.\r
        en: If the problem uses signed components, convert them to speed before computing K.\r
    graph_rules:\r
    - id: v_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura K-v debe reforzar que la pendiente aumenta al crecer v.\r
        en: The K-v reading must reinforce that the slope increases as v grows.\r
    likely_errors:\r
    - id: v_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No sustituyas una velocidad media por la rapidez instantanea si el estado pedido es puntual.\r
        en: Do not substitute average velocity for instantaneous speed if the requested state is pointwise.\r
    next_step_rules:\r
    - id: v_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si conoces v y m, el siguiente paso natural es estimar K y despues comparar estados.\r
        en: If you know v and m, the natural next step is to estimate K and then compare states.\r
  Ki:\r
    summary_rules:\r
    - id: ki_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ki fija el presupuesto inicial de energia cinetica con el que arranca el proceso.\r
        en: Ki fixes the initial kinetic-energy budget from which the process starts.\r
    physical_reading_rules:\r
    - id: ki_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una Ki grande implica mayor capacidad inicial para acelerar, impactar o vencer resistencias.\r
        en: A large Ki implies greater initial capacity to accelerate, impact, or overcome resistance.\r
    coherence_rules:\r
    - id: ki_coherence\r
      when: Ki >= 0\r
      status: ok\r
      text:\r
        es: Ki no negativa, consistente con una energia cinetica inicial clasica.\r
        en: Non-negative Ki, consistent with classical initial kinetic energy.\r
    model_validity_rules:\r
    - id: ki_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Ki solo tiene sentido si el estado inicial esta bien definido y usa la misma masa que el estado final.\r
        en: Ki only makes sense if the initial state is well defined and uses the same mass as the final state.\r
    graph_rules:\r
    - id: ki_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Ki es el nivel de partida desde el que se mide el salto hacia Kf.\r
        en: In Coord, Ki is the starting level from which the jump toward Kf is measured.\r
    likely_errors:\r
    - id: ki_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No mezcles velocidad inicial de un objeto con masa de otro al calcular Ki.\r
        en: Do not mix the initial speed of one object with the mass of another when computing Ki.\r
    next_step_rules:\r
    - id: ki_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con Ki ya establecida, compara con Kf para cerrar dK y después Wnet.\r
        en: Once Ki is set, compare it with Kf to close dK and then Wnet.\r
  Kf:\r
    summary_rules:\r
    - id: kf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Kf expresa el presupuesto final de energia cinetica con el que el sistema sale del proceso.\r
        en: Kf expresses the final kinetic-energy budget with which the system leaves the process.\r
    physical_reading_rules:\r
    - id: kf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Kf es menor que Ki, el sistema ha cedido parte de su capacidad mecanica durante el proceso.\r
        en: If Kf is smaller than Ki, the system has given up part of its mechanical capability during the process.\r
    coherence_rules:\r
    - id: kf_coherence\r
      when: Kf >= 0\r
      status: ok\r
      text:\r
        es: Kf no negativa, consistente con una energia cinetica final clasica.\r
        en: Non-negative Kf, consistent with classical final kinetic energy.\r
    model_validity_rules:\r
    - id: kf_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Kf solo es interpretable si el estado final esta bien definido y pertenece al mismo sistema que Ki.\r
        en: Kf is only interpretable if the final state is well defined and belongs to the same system as Ki.\r
    graph_rules:\r
    - id: kf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Kf debe leerse como el nivel final alcanzado por la curva energetica.\r
        en: In Coord, Kf must be read as the final level reached by the energy curve.\r
    likely_errors:\r
    - id: kf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No uses una rapidez final de otro instante o de otro cuerpo al calcular Kf.\r
        en: Do not use a final speed from another instant or another body when computing Kf.\r
    next_step_rules:\r
    - id: kf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una vez fijada Kf, compara con Ki para interpretar dK y luego identifica la causa mediante Wnet.\r
        en: Once Kf is fixed, compare it with Ki to interpret dK and then identify the cause through Wnet.\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m escala linealmente la energia cinetica asociada a una misma rapidez.\r
        en: m scales linearly the kinetic energy associated with a given speed.\r
    physical_reading_rules:\r
    - id: m_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si duplicas m manteniendo v, duplicas K y tambien la energia que debe absorber un frenado.\r
        en: If you double m while keeping v, you double K and also the energy a brake must absorb.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: m > 0\r
      status: ok\r
      text:\r
        es: m positiva, consistente con el dominio operativo del modelo clasico.\r
        en: Positive m, consistent with the operational domain of the classical model.\r
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si la masa cambia durante el proceso, la formula basica de K deja de ser el cierre suficiente.\r
        en: If mass changes during the process, the basic K formula ceases to be a sufficient closure.\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En una familia de curvas K-v, masas mayores desplazan la curva hacia arriba.\r
        en: In a family of K-v curves, larger masses shift the curve upward.\r
    likely_errors:\r
    - id: m_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No compares energias de dos cuerpos sin revisar si la diferencia viene de m, de v, o de ambas.\r
        en: Do not compare energies of two bodies without checking whether the difference comes from m, v, or both.\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si m y v ya son fiables, el paso siguiente es obtener K y analizar su cambio entre estados.\r
        en: If m and v are already reliable, the next step is to obtain K and analyze its state-to-state change.\r
graph_binding:\r
  enabled: true\r
  preferred_type: Coord\r
mini_graph:\r
  enabled: true\r
  type: Coord\r
`;export{e as default};
