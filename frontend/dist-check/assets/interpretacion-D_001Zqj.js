const e=`version: 2\r
id: interpretacion-poleas-compuestas\r
leaf_id: poleas-compuestas\r
nombre:\r
  es: Interpretacion de Poleas compuestas\r
  en: Interpretation of Compound Pulleys\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: sistemas-de-varios-cuerpos\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-traslacional/sistemas-de-varios-cuerpos/poleas-compuestas\r
dependencies:\r
  formulas:\r
  - fuerza_ideal_poleas_compuestas\r
  - fuerza_real_poleas_compuestas\r
  magnitudes:\r
  - W\r
  - nSel\r
  - eta\r
  - F_ideal\r
  - F_real\r
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
  F_ideal:\r
    summary_rules:\r
    - id: F_ideal_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_ideal resume una lectura fisica relevante del leaf.\r
        en: F_ideal summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_ideal_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_ideal sea coherente con unidades y contexto.\r
        en: Check that F_ideal is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_ideal_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "F_ideal indica la fuerza teórica mínima porque W se reparte entre nSel tramos; por tanto F_ideal disminuye cuando nSel aumenta."\r
        en: "F_ideal indicates the minimum theoretical force because W is shared among nSel segments; therefore F_ideal decreases when nSel increases."\r
    model_validity_rules:\r
    - id: F_ideal_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_ideal solo es interpretable dentro del modelo elegido.\r
        en: F_ideal is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_ideal_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_ideal.\r
        en: The graph must reflect the role of F_ideal visually.\r
    likely_errors:\r
    - id: F_ideal_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_ideal con otra magnitud cercana del problema.\r
        en: Do not confuse F_ideal with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_ideal_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_ideal para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_ideal to connect with the next interpretation step.\r
  W:\r
    summary_rules:\r
    - id: W_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: W resume una lectura fisica relevante del leaf.\r
        en: W summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: W_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que W sea coherente con unidades y contexto.\r
        en: Check that W is coherent with units and context.\r
    physical_reading_rules:\r
    - id: W_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de W debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of W must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: W_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: W solo es interpretable dentro del modelo elegido.\r
        en: W is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: W_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de W.\r
        en: The graph must reflect the role of W visually.\r
    likely_errors:\r
    - id: W_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas W con otra magnitud cercana del problema.\r
        en: Do not confuse W with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: W_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa W para enlazar con el siguiente paso de interpretacion.\r
        en: Use W to connect with the next interpretation step.\r
  nSel:\r
    summary_rules:\r
    - id: nSel_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: nSel resume una lectura fisica relevante del leaf.\r
        en: nSel summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: nSel_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que nSel sea coherente con unidades y contexto.\r
        en: Check that nSel is coherent with units and context.\r
    physical_reading_rules:\r
    - id: nSel_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de nSel debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of nSel must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: nSel_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: nSel solo es interpretable dentro del modelo elegido.\r
        en: nSel is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: nSel_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de nSel.\r
        en: The graph must reflect the role of nSel visually.\r
    likely_errors:\r
    - id: nSel_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas nSel con otra magnitud cercana del problema.\r
        en: Do not confuse nSel with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: nSel_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa nSel para enlazar con el siguiente paso de interpretacion.\r
        en: Use nSel to connect with the next interpretation step.\r
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
  eta:\r
    summary_rules:\r
    - id: eta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: eta resume una lectura fisica relevante del leaf.\r
        en: eta summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: eta_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que eta sea coherente con unidades y contexto.\r
        en: Check that eta is coherent with units and context.\r
    physical_reading_rules:\r
    - id: eta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de eta debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of eta must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: eta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: eta solo es interpretable dentro del modelo elegido.\r
        en: eta is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: eta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de eta.\r
        en: The graph must reflect the role of eta visually.\r
    likely_errors:\r
    - id: eta_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas eta con otra magnitud cercana del problema.\r
        en: Do not confuse eta with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: eta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa eta para enlazar con el siguiente paso de interpretacion.\r
        en: Use eta to connect with the next interpretation step.\r
`;export{e as default};
