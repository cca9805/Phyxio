const e=`version: 2\r
id: interpretacion-sistemas-no-inerciales-intro\r
leaf_id: sistemas-no-inerciales-intro\r
nombre:\r
  es: Interpretacion de Sistemas no inerciales intro\r
  en: Interpretation of Introduction to Non-Inertial Frames\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: sistemas-de-referencia\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/sistemas-no-inerciales-intro\r
dependencies:\r
  formulas:\r
  - criterio_no_inercial\r
  - fuerza_ficticia_traslacion\r
  - dinamica_en_no_inercial\r
  - fuerza_centrifuga\r
  - fuerza_coriolis\r
  magnitudes:\r
  - m\r
  - a_marco\r
  - F_ficticia\r
  - F_real\r
  - a_rel\r
  - omega\r
  - r\r
  - v_rel\r
  - F_centrifuga\r
  - F_coriolis\r
  - system_classification\r
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
  a_marco:\r
    summary_rules:\r
    - id: a_marco_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_marco resume una lectura fisica relevante del leaf.\r
        en: a_marco summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_marco_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_marco sea coherente con unidades y contexto.\r
        en: Check that a_marco is coherent with units and context.\r
    physical_reading_rules:\r
    - id: a_marco_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de a_marco debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of a_marco must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: a_marco_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_marco solo es interpretable dentro del modelo elegido.\r
        en: a_marco is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_marco_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_marco.\r
        en: The graph must reflect the role of a_marco visually.\r
    likely_errors:\r
    - id: a_marco_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_marco con otra magnitud cercana del problema.\r
        en: Do not confuse a_marco with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_marco_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_marco para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_marco to connect with the next interpretation step.\r
  F_ficticia:\r
    summary_rules:\r
    - id: F_ficticia_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_ficticia resume una lectura fisica relevante del leaf.\r
        en: F_ficticia summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_ficticia_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_ficticia sea coherente con unidades y contexto.\r
        en: Check that F_ficticia is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_ficticia_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de F_ficticia debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of F_ficticia must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: F_ficticia_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_ficticia solo es interpretable dentro del modelo elegido.\r
        en: F_ficticia is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_ficticia_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_ficticia.\r
        en: The graph must reflect the role of F_ficticia visually.\r
    likely_errors:\r
    - id: F_ficticia_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_ficticia con otra magnitud cercana del problema.\r
        en: Do not confuse F_ficticia with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_ficticia_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_ficticia para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_ficticia to connect with the next interpretation step.\r
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
        es: La lectura de a_rel debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of a_rel must connect with the described physical phenomenon.\r
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
  F_real:\r
    summary_rules:\r
    - id: F_real_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_real resume una lectura fisica relevante del leaf.\r
        en: F_real summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_real_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_real sea coherente con unidades y contexto.\r
        en: Check that F_real is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_real_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de F_real debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of F_real must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: F_real_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_real solo es interpretable dentro del modelo elegido.\r
        en: F_real is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_real_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_real.\r
        en: The graph must reflect the role of F_real visually.\r
    likely_errors:\r
    - id: F_real_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_real con otra magnitud cercana del problema.\r
        en: Do not confuse F_real with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_real_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_real para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_real to connect with the next interpretation step.\r
  F_centrifuga:\r
    summary_rules:\r
    - id: F_centrifuga_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_centrifuga resume una lectura fisica relevante del leaf.\r
        en: F_centrifuga summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_centrifuga_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_centrifuga sea coherente con unidades y contexto.\r
        en: Check that F_centrifuga is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_centrifuga_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de F_centrifuga debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of F_centrifuga must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: F_centrifuga_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_centrifuga solo es interpretable dentro del modelo elegido.\r
        en: F_centrifuga is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_centrifuga_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_centrifuga.\r
        en: The graph must reflect the role of F_centrifuga visually.\r
    likely_errors:\r
    - id: F_centrifuga_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_centrifuga con otra magnitud cercana del problema.\r
        en: Do not confuse F_centrifuga with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_centrifuga_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_centrifuga para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_centrifuga to connect with the next interpretation step.\r
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
  r:\r
    summary_rules:\r
    - id: r_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: r resume una lectura fisica relevante del leaf.\r
        en: r summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: r_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que r sea coherente con unidades y contexto.\r
        en: Check that r is coherent with units and context.\r
    physical_reading_rules:\r
    - id: r_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de r debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of r must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: r_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: r solo es interpretable dentro del modelo elegido.\r
        en: r is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: r_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de r.\r
        en: The graph must reflect the role of r visually.\r
    likely_errors:\r
    - id: r_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas r con otra magnitud cercana del problema.\r
        en: Do not confuse r with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: r_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa r para enlazar con el siguiente paso de interpretacion.\r
        en: Use r to connect with the next interpretation step.\r
  F_coriolis:\r
    summary_rules:\r
    - id: F_coriolis_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_coriolis resume una lectura fisica relevante del leaf.\r
        en: F_coriolis summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_coriolis_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_coriolis sea coherente con unidades y contexto.\r
        en: Check that F_coriolis is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_coriolis_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de F_coriolis debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of F_coriolis must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: F_coriolis_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_coriolis solo es interpretable dentro del modelo elegido.\r
        en: F_coriolis is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_coriolis_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_coriolis.\r
        en: The graph must reflect the role of F_coriolis visually.\r
    likely_errors:\r
    - id: F_coriolis_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_coriolis con otra magnitud cercana del problema.\r
        en: Do not confuse F_coriolis with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_coriolis_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_coriolis para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_coriolis to connect with the next interpretation step.\r
`;export{e as default};
