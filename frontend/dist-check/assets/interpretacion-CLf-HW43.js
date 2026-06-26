const e=`version: 2\r
id: interpretacion-encuentros-y-persecuciones\r
leaf_id: encuentros-y-persecuciones\r
nombre:\r
  es: Interpretacion de Encuentros y persecuciones\r
  en: Interpretation of Pursuit and Interception Problems\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cinematica\r
  parent_id: movimiento-relativo\r
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-relativo/encuentros-y-persecuciones\r
dependencies:\r
  formulas:\r
  - condicion_encuentro\r
  - tiempo_encuentro_mru_mru\r
  - encuentro_retrasado\r
  - encuentro_mrua\r
  - separacion_inicial\r
  - velocidad_relativa_encuentro\r
  - posicion_encuentro_mru\r
  - tiempo_encuentro_mru_mru_expandido\r
  magnitudes:\r
  - t_e\r
  - x_e\r
  - d_0\r
  - v_rel\r
  - dt\r
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
  t_e:\r
    summary_rules:\r
    - id: t_e_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: t_e resume una lectura fisica relevante del leaf.\r
        en: t_e summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: t_e_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que t_e sea coherente con unidades y contexto.\r
        en: Check that t_e is coherent with units and context.\r
    physical_reading_rules:\r
    - id: t_e_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de t_e debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of t_e must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: t_e_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: t_e solo es interpretable dentro del modelo elegido.\r
        en: t_e is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: t_e_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de t_e.\r
        en: The graph must reflect the role of t_e visually.\r
    likely_errors:\r
    - id: t_e_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas t_e con otra magnitud cercana del problema.\r
        en: Do not confuse t_e with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: t_e_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa t_e para enlazar con el siguiente paso de interpretacion.\r
        en: Use t_e to connect with the next interpretation step.\r
  d_0:\r
    summary_rules:\r
    - id: d_0_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: d_0 representa la separacion inicial entre los moviles y fija la ventaja espacial de partida.\r
        en: d_0 represents the initial separation between the moving bodies and sets the initial spatial advantage.\r
    coherence_rules:\r
    - id: d_0_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que d_0 se interprete como separacion entre moviles y no como desplazamiento de uno solo.\r
        en: Check that d_0 is interpreted as separation between the bodies and not as the displacement of only one of them.\r
    physical_reading_rules:\r
    - id: d_0_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de d_0 debe indicar cuanta distancia inicial debe compensarse antes de que pueda producirse el encuentro.\r
        en: The reading of d_0 must indicate how much initial distance must be compensated before an encounter can take place.\r
    model_validity_rules:\r
    - id: d_0_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: d_0 solo tiene sentido si ambos moviles estan descritos en el mismo eje y con la misma referencia espacial.\r
        en: d_0 is meaningful only if both bodies are described on the same axis and with the same spatial reference.\r
    graph_rules:\r
    - id: d_0_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe mostrar visualmente la separacion inicial entre trayectorias.\r
        en: The graph should visually display the initial separation between trajectories.\r
    likely_errors:\r
    - id: d_0_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas d_0 con una posicion absoluta ni con el desplazamiento total del problema.\r
        en: Do not confuse d_0 with an absolute position or with the total displacement of the problem.\r
    next_step_rules:\r
    - id: d_0_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa d_0 para decidir si la velocidad relativa basta para cerrar la separacion.\r
        en: Use d_0 to decide whether the relative velocity is sufficient to close the gap.\r
\r
  v_rel:\r
    summary_rules:\r
    - id: v_rel_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v_rel resume si la distancia entre los moviles disminuye, se conserva o aumenta.\r
        en: v_rel summarizes whether the distance between the bodies decreases, remains constant, or increases.\r
    coherence_rules:\r
    - id: v_rel_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que el signo de v_rel sea coherente con la convencion elegida y con la idea de aproximacion o alejamiento.\r
        en: Check that the sign of v_rel is consistent with the chosen convention and with the idea of approach or separation.\r
    physical_reading_rules:\r
    - id: v_rel_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de v_rel debe explicar quien gana distancia y a que ritmo cambia la separacion.\r
        en: The reading of v_rel must explain which body gains distance and at what rate the separation changes.\r
    model_validity_rules:\r
    - id: v_rel_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v_rel solo es interpretable si las velocidades se comparan en el mismo eje y en el mismo sistema de referencia.\r
        en: v_rel is interpretable only if velocities are compared on the same axis and in the same reference frame.\r
    graph_rules:\r
    - id: v_rel_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar si las trayectorias convergen o divergen segun el valor de v_rel.\r
        en: The graph should show whether the trajectories converge or diverge according to the value of v_rel.\r
    likely_errors:\r
    - id: v_rel_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v_rel con la velocidad de uno de los moviles considerada por separado.\r
        en: Do not confuse v_rel with the velocity of one body taken separately.\r
    next_step_rules:\r
    - id: v_rel_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v_rel para decidir si el encuentro es posible y para estimar t_e.\r
        en: Use v_rel to decide whether the encounter is possible and to estimate t_e.\r
\r
  x_e:\r
    summary_rules:\r
    - id: x_e_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: x_e representa la posicion efectiva donde ambos moviles coinciden.\r
        en: x_e represents the effective position at which both moving bodies coincide.\r
    coherence_rules:\r
    - id: x_e_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que x_e se obtenga sustituyendo el mismo instante de encuentro en ecuaciones horarias compatibles.\r
        en: Check that x_e is obtained by substituting the same encounter time into compatible time equations.\r
    physical_reading_rules:\r
    - id: x_e_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de x_e debe indicar donde ocurre realmente la coincidencia y si ese lugar tiene sentido en el contexto fisico del problema.\r
        en: The reading of x_e must indicate where the coincidence actually occurs and whether that location makes sense in the physical context of the problem.\r
    model_validity_rules:\r
    - id: x_e_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: x_e solo es interpretable si el instante t_e obtenido pertenece al dominio fisico del modelo.\r
        en: x_e is interpretable only if the obtained time t_e belongs to the physical domain of the model.\r
    graph_rules:\r
    - id: x_e_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe marcar el punto espacial en el que las trayectorias se cruzan.\r
        en: The graph should mark the spatial point at which the trajectories intersect.\r
    likely_errors:\r
    - id: x_e_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas x_e con la posicion final de uno de los moviles fuera del instante de encuentro.\r
        en: Do not confuse x_e with the final position of one of the bodies outside the encounter instant.\r
    next_step_rules:\r
    - id: x_e_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa x_e para interpretar si el lugar de encuentro es util, seguro o fisicamente accesible.\r
        en: Use x_e to interpret whether the encounter location is useful, safe, or physically accessible.`;export{e as default};
