const e=`version: 2\r
id: interpretacion-aplicaciones-fisicas\r
leaf_id: aplicaciones-fisicas\r
nombre:\r
  es: Interpretacion de Aplicaciones fisicas\r
  en: Interpretation of Applications of the Coriolis Force\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: fuerza-coriolis\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-coriolis/aplicaciones-fisicas\r
dependencies:\r
  formulas:\r
  - aceleracion_coriolis_aplicada\r
  - fuerza_desde_aceleracion\r
  - desvio_lateral_aproximado\r
  - criterio_relevancia_conceptual\r
  magnitudes:\r
  - omega\r
  - v_rel\r
  - alpha\r
  - a_cor\r
  - m\r
  - F_cor\r
  - t\r
  - y\r
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
  a_cor:\r
    summary_rules:\r
    - id: a_cor_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_cor resume una lectura fisica relevante del leaf.\r
        en: a_cor summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_cor_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_cor sea coherente con unidades y contexto.\r
        en: Check that a_cor is coherent with units and context.\r
    physical_reading_rules:
    - id: a_cor_physical
      when: 'true'
      status: info
      text:
        es: a_cor importa porque, si actua durante tiempo suficiente, reorganiza la trayectoria y acaba produciendo un desvio lateral observable.
        en: a_cor matters because, if it acts long enough, it reorganizes the trajectory and ends up producing an observable lateral drift.
    model_validity_rules:\r
    - id: a_cor_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_cor solo es interpretable dentro del modelo elegido.\r
        en: a_cor is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_cor_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_cor.\r
        en: The graph must reflect the role of a_cor visually.\r
    likely_errors:\r
    - id: a_cor_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_cor con otra magnitud cercana del problema.\r
        en: Do not confuse a_cor with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_cor_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_cor para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_cor to connect with the next interpretation step.\r
  omega:\r
    summary_rules:\r
    - id: omega_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omega resume una lectura fisica relevante del leaf.\r
        en: omega summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: omega_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que omega sea coherente con unidades y contexto.\r
        en: Check that omega is coherent with units and context.\r
    physical_reading_rules:\r
    - id: omega_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de omega debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of omega must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: omega_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: omega solo es interpretable dentro del modelo elegido.\r
        en: omega is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: omega_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de omega.\r
        en: The graph must reflect the role of omega visually.\r
    likely_errors:\r
    - id: omega_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas omega con otra magnitud cercana del problema.\r
        en: Do not confuse omega with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: omega_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa omega para enlazar con el siguiente paso de interpretacion.\r
        en: Use omega to connect with the next interpretation step.\r
  v_rel:\r
    summary_rules:\r
    - id: v_rel_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v_rel resume una lectura fisica relevante del leaf.\r
        en: v_rel summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: v_rel_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que v_rel sea coherente con unidades y contexto.\r
        en: Check that v_rel is coherent with units and context.\r
    physical_reading_rules:\r
    - id: v_rel_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de v_rel debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of v_rel must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: v_rel_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v_rel solo es interpretable dentro del modelo elegido.\r
        en: v_rel is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: v_rel_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de v_rel.\r
        en: The graph must reflect the role of v_rel visually.\r
    likely_errors:\r
    - id: v_rel_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v_rel con otra magnitud cercana del problema.\r
        en: Do not confuse v_rel with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: v_rel_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v_rel para enlazar con el siguiente paso de interpretacion.\r
        en: Use v_rel to connect with the next interpretation step.\r
  F_cor:\r
    summary_rules:\r
    - id: F_cor_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_cor resume una lectura fisica relevante del leaf.\r
        en: F_cor summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_cor_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_cor sea coherente con unidades y contexto.\r
        en: Check that F_cor is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_cor_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de F_cor debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of F_cor must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: F_cor_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_cor solo es interpretable dentro del modelo elegido.\r
        en: F_cor is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_cor_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_cor.\r
        en: The graph must reflect the role of F_cor visually.\r
    likely_errors:\r
    - id: F_cor_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_cor con otra magnitud cercana del problema.\r
        en: Do not confuse F_cor with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_cor_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_cor para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_cor to connect with the next interpretation step.\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m resume una lectura fisica relevante del leaf.\r
        en: m summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que m sea coherente con unidades y contexto.\r
        en: Check that m is coherent with units and context.\r
    physical_reading_rules:\r
    - id: m_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de m debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of m must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: m solo es interpretable dentro del modelo elegido.\r
        en: m is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de m.\r
        en: The graph must reflect the role of m visually.\r
    likely_errors:\r
    - id: m_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas m con otra magnitud cercana del problema.\r
        en: Do not confuse m with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa m para enlazar con el siguiente paso de interpretacion.\r
        en: Use m to connect with the next interpretation step.\r
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
        es: La lectura de y debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of y must connect with the described physical phenomenon.\r
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
        es: La lectura de t debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of t must connect with the described physical phenomenon.\r
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
`;export{e as default};
