const e=`version: 2\r
id: interpretacion-coeficiente-de-rozamiento\r
leaf_id: coeficiente-de-rozamiento\r
nombre:\r
  es: Interpretacion de Coeficiente de rozamiento\r
  en: Interpretation of Coefficient of Friction\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: rozamiento\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/coeficiente-de-rozamiento\r
dependencies:\r
  formulas:\r
  - fs_max_modelo\r
  - fk_modelo\r
  - mu_s_angulo_critico\r
  - condicion_estatica\r
  - comparacion_coeficientes\r
  magnitudes:\r
  - mu_s\r
  - mu_k\r
  - fs\r
  - fs_max\r
  - fk\r
  - N\r
  - theta_c\r
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
  fs_max:\r
    summary_rules:\r
    - id: fs_max_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: fs_max resume una lectura fisica relevante del leaf.\r
        en: fs_max summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: fs_max_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que fs_max sea coherente con unidades y contexto.\r
        en: Check that fs_max is coherent with units and context.\r
    physical_reading_rules:\r
    - id: fs_max_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si fs_max aumenta, la interfaz puede sostener mayor rozamiento estatico maximo para la misma escena de contacto.\r
        en: If fs_max increases, the interface can sustain a larger maximum static friction in the same contact scene.\r
    model_validity_rules:\r
    - id: fs_max_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: fs_max solo es interpretable dentro del modelo elegido.\r
        en: fs_max is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: fs_max_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de fs_max.\r
        en: The graph must reflect the role of fs_max visually.\r
    likely_errors:\r
    - id: fs_max_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas fs_max con otra magnitud cercana del problema.\r
        en: Do not confuse fs_max with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: fs_max_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa fs_max para enlazar con el siguiente paso de interpretacion.\r
        en: Use fs_max to connect with the next interpretation step.\r
  mu_s:\r
    summary_rules:\r
    - id: mu_s_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: mu_s resume una lectura fisica relevante del leaf.\r
        en: mu_s summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: mu_s_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que mu_s sea coherente con unidades y contexto.\r
        en: Check that mu_s is coherent with units and context.\r
    physical_reading_rules:\r
    - id: mu_s_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un mu_s mayor significa que el contacto requiere una demanda tangencial mayor antes de empezar a deslizar.\r
        en: A larger mu_s means that the contact requires a larger tangential demand before sliding starts.\r
    model_validity_rules:\r
    - id: mu_s_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: mu_s solo es interpretable dentro del modelo elegido.\r
        en: mu_s is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: mu_s_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de mu_s.\r
        en: The graph must reflect the role of mu_s visually.\r
    likely_errors:\r
    - id: mu_s_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas mu_s con otra magnitud cercana del problema.\r
        en: Do not confuse mu_s with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: mu_s_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa mu_s para enlazar con el siguiente paso de interpretacion.\r
        en: Use mu_s to connect with the next interpretation step.\r
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
        es: Si N aumenta, el mismo coeficiente produce una capacidad de rozamiento mayor porque la interfaz esta mas cargada.\r
        en: If N increases, the same coefficient produces a larger frictional capacity because the interface is more heavily loaded.\r
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
        es: Si fk aumenta para una misma normal, el coeficiente dinamico efectivo tambien debe ser mayor o el contacto ha cambiado.\r
        en: If fk grows for the same normal load, the effective kinetic coefficient must also be larger or the contact has changed.\r
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
        es: Un mu_k mayor indica que el deslizamiento pierde mas energia por cada unidad de normal.\r
        en: A larger mu_k means that sliding loses more energy per unit normal load.\r
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
  theta_c:\r
    summary_rules:\r
    - id: theta_c_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: theta_c resume una lectura fisica relevante del leaf.\r
        en: theta_c summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: theta_c_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que theta_c sea coherente con unidades y contexto.\r
        en: Check that theta_c is coherent with units and context.\r
    physical_reading_rules:\r
    - id: theta_c_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si theta_c aumenta, tambien aumenta mu_s porque hace falta una pendiente mayor para romper la adherencia.\r
        en: If theta_c increases, mu_s also increases because a steeper slope is needed to break adhesion.\r
    model_validity_rules:\r
    - id: theta_c_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: theta_c solo es interpretable dentro del modelo elegido.\r
        en: theta_c is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: theta_c_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de theta_c.\r
        en: The graph must reflect the role of theta_c visually.\r
    likely_errors:\r
    - id: theta_c_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas theta_c con otra magnitud cercana del problema.\r
        en: Do not confuse theta_c with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: theta_c_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa theta_c para enlazar con el siguiente paso de interpretacion.\r
        en: Use theta_c to connect with the next interpretation step.\r
  fs:\r
    summary_rules:\r
    - id: fs_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: fs resume una lectura fisica relevante del leaf.\r
        en: fs summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: fs_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que fs sea coherente con unidades y contexto.\r
        en: Check that fs is coherent with units and context.\r
    physical_reading_rules:\r
    - id: fs_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si fs se acerca a fs_max, el contacto esta agotando su margen estatico y se aproxima al cambio de regimen.\r
        en: If fs approaches fs_max, the contact is exhausting its static margin and approaching regime change.\r
    model_validity_rules:\r
    - id: fs_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: fs solo es interpretable dentro del modelo elegido.\r
        en: fs is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: fs_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de fs.\r
        en: The graph must reflect the role of fs visually.\r
    likely_errors:\r
    - id: fs_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas fs con otra magnitud cercana del problema.\r
        en: Do not confuse fs with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: fs_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa fs para enlazar con el siguiente paso de interpretacion.\r
        en: Use fs to connect with the next interpretation step.\r
`;export{e as default};
