const e=`version: 2\r
id: interpretacion-rozamiento-dinamico\r
leaf_id: rozamiento-dinamico\r
nombre:\r
  es: Interpretacion de Rozamiento dinamico\r
  en: Interpretation of Kinetic Friction\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: rozamiento\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/rozamiento-dinamico\r
dependencies:\r
  formulas:\r
  - fk_modelo\r
  - direccion_fk\r
  magnitudes:\r
  - fk\r
  - mu_k\r
  - N\r
  - v_rel\r
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
  fk:\r
    summary_rules:\r
    - id: fk_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: fk resume una lectura fisica relevante del leaf.\r
        en: fk summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: fk_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que fk sea coherente con unidades y contexto.\r
        en: Check that fk is coherent with units and context.\r
    physical_reading_rules:\r
    - id: fk_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si fk aumenta, el contacto disipa mas y reduce mas intensamente la fuerza neta disponible durante el deslizamiento.\r
        en: If fk increases, the contact dissipates more and subtracts more strongly from the net force during sliding.\r
    model_validity_rules:\r
    - id: fk_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: fk solo es interpretable dentro del modelo elegido.\r
        en: fk is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: fk_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de fk.\r
        en: The graph must reflect the role of fk visually.\r
    likely_errors:\r
    - id: fk_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas fk con otra magnitud cercana del problema.\r
        en: Do not confuse fk with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: fk_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa fk para enlazar con el siguiente paso de interpretacion.\r
        en: Use fk to connect with the next interpretation step.\r
  mu_k:\r
    summary_rules:\r
    - id: mu_k_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: mu_k resume una lectura fisica relevante del leaf.\r
        en: mu_k summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: mu_k_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que mu_k sea coherente con unidades y contexto.\r
        en: Check that mu_k is coherent with units and context.\r
    physical_reading_rules:\r
    - id: mu_k_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un mu_k mayor implica una resistencia tangencial mayor para la misma normal mientras ya existe deslizamiento.\r
        en: A larger mu_k means a larger tangential resistance for the same normal load once sliding exists.\r
    model_validity_rules:\r
    - id: mu_k_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: mu_k solo es interpretable dentro del modelo elegido.\r
        en: mu_k is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: mu_k_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de mu_k.\r
        en: The graph must reflect the role of mu_k visually.\r
    likely_errors:\r
    - id: mu_k_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas mu_k con otra magnitud cercana del problema.\r
        en: Do not confuse mu_k with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: mu_k_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa mu_k para enlazar con el siguiente paso de interpretacion.\r
        en: Use mu_k to connect with the next interpretation step.\r
  N:\r
    summary_rules:\r
    - id: N_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: N resume una lectura fisica relevante del leaf.\r
        en: N summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: N_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que N sea coherente con unidades y contexto.\r
        en: Check that N is coherent with units and context.\r
    physical_reading_rules:\r
    - id: N_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si N aumenta, fk tambien aumenta y el contacto roba mas capacidad de aceleracion al sistema.\r
        en: If N increases, fk also increases and the contact removes more accelerating capability from the system.\r
    model_validity_rules:\r
    - id: N_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: N solo es interpretable dentro del modelo elegido.\r
        en: N is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: N_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de N.\r
        en: The graph must reflect the role of N visually.\r
    likely_errors:\r
    - id: N_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas N con otra magnitud cercana del problema.\r
        en: Do not confuse N with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: N_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa N para enlazar con el siguiente paso de interpretacion.\r
        en: Use N to connect with the next interpretation step.\r
`;export{e as default};
