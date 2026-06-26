const e=`version: 2\r
id: interpretacion-aceleracion-relativa\r
leaf_id: aceleracion-relativa\r
nombre:\r
  es: Interpretacion de Aceleracion relativa\r
  en: Interpretation of Relative Acceleration\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: sistemas-de-referencia\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/aceleracion-relativa\r
dependencies:\r
  formulas:\r
  - composicion_aceleracion_galileana\r
  - invarianza_aceleracion_inercial\r
  magnitudes:\r
  - a_rel\r
  - a_A\r
  - a_B\r
  - t\r
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
  a_rel:\r
    summary_rules:\r
    - id: a_rel_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_rel resume una lectura fisica relevante del leaf.\r
        en: a_rel summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_rel_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_rel sea coherente con unidades y contexto.\r
        en: Check that a_rel is coherent with units and context.\r
    physical_reading_rules:\r
    - id: a_rel_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_rel es la aceleración que mide el observador en el marco B sobre la partícula A; por tanto, su magnitud implica que si a_B aumenta, a_rel disminuye causalmente en la misma proporción (a_rel = a_A - a_B). Si a_B se iguala a a_A, la aceleración relativa se anula y A parece estar en reposo dinámico respecto a B.\r
        en: a_rel is the acceleration that observer in frame B measures for particle A; therefore, its magnitude implies that if a_B increases, a_rel decreases causally in the same proportion (a_rel = a_A - a_B). If a_B equals a_A, the relative acceleration vanishes and A appears dynamically at rest with respect to B.\r
    model_validity_rules:\r
    - id: a_rel_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_rel solo es interpretable dentro del modelo elegido.\r
        en: a_rel is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_rel_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_rel.\r
        en: The graph must reflect the role of a_rel visually.\r
    likely_errors:\r
    - id: a_rel_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_rel con otra magnitud cercana del problema.\r
        en: Do not confuse a_rel with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_rel_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_rel para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_rel to connect with the next interpretation step.\r
  a_A:\r
    summary_rules:\r
    - id: a_A_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_A resume una lectura fisica relevante del leaf.\r
        en: a_A summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_A_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_A sea coherente con unidades y contexto.\r
        en: Check that a_A is coherent with units and context.\r
    physical_reading_rules:\r
    - id: a_A_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de a_A debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of a_A must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: a_A_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_A solo es interpretable dentro del modelo elegido.\r
        en: a_A is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_A_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_A.\r
        en: The graph must reflect the role of a_A visually.\r
    likely_errors:\r
    - id: a_A_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_A con otra magnitud cercana del problema.\r
        en: Do not confuse a_A with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_A_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_A para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_A to connect with the next interpretation step.\r
  a_B:\r
    summary_rules:\r
    - id: a_B_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_B resume una lectura fisica relevante del leaf.\r
        en: a_B summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_B_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_B sea coherente con unidades y contexto.\r
        en: Check that a_B is coherent with units and context.\r
    physical_reading_rules:\r
    - id: a_B_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de a_B debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of a_B must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: a_B_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_B solo es interpretable dentro del modelo elegido.\r
        en: a_B is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_B_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_B.\r
        en: The graph must reflect the role of a_B visually.\r
    likely_errors:\r
    - id: a_B_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_B con otra magnitud cercana del problema.\r
        en: Do not confuse a_B with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_B_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_B para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_B to connect with the next interpretation step.\r
`;export{e as default};
