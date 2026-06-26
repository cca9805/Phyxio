const e=`version: 2\r
id: interpretacion-movimiento-vertical-bajo-gravedad\r
leaf_id: movimiento-vertical-bajo-gravedad\r
nombre:\r
  es: Interpretacion de Movimiento vertical bajo gravedad\r
  en: Interpretation of Motion Vertical under Gravity\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cinematica\r
  parent_id: movimiento-rectilineo\r
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad\r
dependencies:\r
  formulas:\r
  - caida_libre_posicion\r
  - caida_libre_velocidad\r
  - caida_libre_torricelli\r
  - caida_libre_tiempo_vuelo\r
  - caida_libre_tiempo_subida\r
  - caida_libre_altura_maxima\r
  magnitudes:\r
  - y\r
  - y0\r
  - v\r
  - v0\r
  - g\r
  - t\r
  - dy\r
  - h\r
  - t_sub\r
  - h_max\r
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
  v0:\r
    summary_rules:\r
    - id: v0_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v0 resume una lectura fisica relevante del leaf.\r
        en: v0 summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: v0_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que v0 sea coherente con unidades y contexto.\r
        en: Check that v0 is coherent with units and context.\r
    physical_reading_rules:\r
    - id: v0_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de v0 debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of v0 must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: v0_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v0 solo es interpretable dentro del modelo elegido.\r
        en: v0 is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: v0_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de v0.\r
        en: The graph must reflect the role of v0 visually.\r
    likely_errors:\r
    - id: v0_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v0 con otra magnitud cercana del problema.\r
        en: Do not confuse v0 with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: v0_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v0 para enlazar con el siguiente paso de interpretacion.\r
        en: Use v0 to connect with the next interpretation step.\r
  y0:\r
    summary_rules:\r
    - id: y0_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: y0 resume una lectura fisica relevante del leaf.\r
        en: y0 summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: y0_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que y0 sea coherente con unidades y contexto.\r
        en: Check that y0 is coherent with units and context.\r
    physical_reading_rules:\r
    - id: y0_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de y0 debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of y0 must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: y0_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: y0 solo es interpretable dentro del modelo elegido.\r
        en: y0 is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: y0_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de y0.\r
        en: The graph must reflect the role of y0 visually.\r
    likely_errors:\r
    - id: y0_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas y0 con otra magnitud cercana del problema.\r
        en: Do not confuse y0 with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: y0_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa y0 para enlazar con el siguiente paso de interpretacion.\r
        en: Use y0 to connect with the next interpretation step.\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: t resume una lectura fisica relevante del leaf.\r
        en: t summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: t_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que t sea coherente con unidades y contexto.\r
        en: Check that t is coherent with units and context.\r
    physical_reading_rules:\r
    - id: t_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de t debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of t must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: t_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: t solo es interpretable dentro del modelo elegido.\r
        en: t is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: t_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de t.\r
        en: The graph must reflect the role of t visually.\r
    likely_errors:\r
    - id: t_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas t con otra magnitud cercana del problema.\r
        en: Do not confuse t with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: t_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa t para enlazar con el siguiente paso de interpretacion.\r
        en: Use t to connect with the next interpretation step.\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v resume una lectura fisica relevante del leaf.\r
        en: v summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: v_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que v sea coherente con unidades y contexto.\r
        en: Check that v is coherent with units and context.\r
    physical_reading_rules:\r
    - id: v_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de v debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of v must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: v_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v solo es interpretable dentro del modelo elegido.\r
        en: v is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: v_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de v.\r
        en: The graph must reflect the role of v visually.\r
    likely_errors:\r
    - id: v_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v con otra magnitud cercana del problema.\r
        en: Do not confuse v with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: v_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v para enlazar con el siguiente paso de interpretacion.\r
        en: Use v to connect with the next interpretation step.\r
  y:\r
    summary_rules:\r
    - id: y_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: y resume una lectura fisica relevante del leaf.\r
        en: y summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: y_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que y sea coherente con unidades y contexto.\r
        en: Check that y is coherent with units and context.\r
    physical_reading_rules:\r
    - id: y_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de y debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of y must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: y_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: y solo es interpretable dentro del modelo elegido.\r
        en: y is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: y_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de y.\r
        en: The graph must reflect the role of y visually.\r
    likely_errors:\r
    - id: y_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas y con otra magnitud cercana del problema.\r
        en: Do not confuse y with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: y_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa y para enlazar con el siguiente paso de interpretacion.\r
        en: Use y to connect with the next interpretation step.\r
  h:\r
    summary_rules:\r
    - id: h_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: h resume una lectura fisica relevante del leaf.\r
        en: h summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: h_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que h sea coherente con unidades y contexto.\r
        en: Check that h is coherent with units and context.\r
    physical_reading_rules:\r
    - id: h_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de h debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of h must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: h_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: h solo es interpretable dentro del modelo elegido.\r
        en: h is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: h_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de h.\r
        en: The graph must reflect the role of h visually.\r
    likely_errors:\r
    - id: h_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas h con otra magnitud cercana del problema.\r
        en: Do not confuse h with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: h_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa h para enlazar con el siguiente paso de interpretacion.\r
        en: Use h to connect with the next interpretation step.\r
  t_sub:\r
    summary_rules:\r
    - id: t_sub_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: t_sub resume una lectura fisica relevante del leaf.\r
        en: t_sub summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: t_sub_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que t_sub sea coherente con unidades y contexto.\r
        en: Check that t_sub is coherent with units and context.\r
    physical_reading_rules:\r
    - id: t_sub_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de t_sub debe mostrar qué cambio físico produce.\r
        en: The reading of t_sub must show which physical change it produces.\r
    model_validity_rules:\r
    - id: t_sub_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: t_sub solo es interpretable dentro del modelo elegido.\r
        en: t_sub is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: t_sub_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de t_sub.\r
        en: The graph must reflect the role of t_sub visually.\r
    likely_errors:\r
    - id: t_sub_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas t_sub con otra magnitud cercana del problema.\r
        en: Do not confuse t_sub with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: t_sub_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Continua con la siguiente magnitud del problema.\r
        en: Continue with the next magnitude in the problem.\r
  h_max:\r
    summary_rules:\r
    - id: h_max_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: h_max resume una lectura fisica relevante del leaf.\r
        en: h_max summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: h_max_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que h_max sea coherente con unidades y contexto.\r
        en: Check that h_max is coherent with units and context.\r
    physical_reading_rules:\r
    - id: h_max_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de h_max debe mostrar qué cambio físico produce.\r
        en: The reading of h_max must show which physical change it produces.\r
    model_validity_rules:\r
    - id: h_max_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: h_max solo es interpretable dentro del modelo elegido.\r
        en: h_max is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: h_max_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de h_max.\r
        en: The graph must reflect the role of h_max visually.\r
    likely_errors:\r
    - id: h_max_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas h_max con otra magnitud cercana del problema.\r
        en: Do not confuse h_max with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: h_max_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Continua con la siguiente magnitud del problema.\r
        en: Continue with the next magnitude in the problem.\r
`;export{e as default};
