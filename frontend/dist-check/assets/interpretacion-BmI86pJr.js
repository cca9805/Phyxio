const e=`version: 2\r
id: interpretacion-identificacion-de-fuerzas\r
leaf_id: identificacion-de-fuerzas\r
nombre:\r
  es: Interpretacion de Identificacion de fuerzas\r
  en: Interpretation of Identifying Forces\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: diagramas-de-fuerzas\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/identificacion-de-fuerzas\r
dependencies:\r
  formulas:\r
  - weight_definition\r
  - friction_limit_static\r
  - force_existence_logic\r
  magnitudes:\r
  - P\r
  - N\r
  - f\r
  - T\r
  - F_ap\r
  - system_contact\r
  - m\r
  - g\r
  - mu_s\r
  - f_s\r
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
  P:\r
    summary_rules:\r
    - id: P_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P resume una lectura fisica relevante del leaf.\r
        en: P summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: P_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que P sea coherente con unidades y contexto.\r
        en: Check that P is coherent with units and context.\r
    physical_reading_rules:\r
    - id: P_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Un valor de P grande indica que la masa del cuerpo es elevada o que el campo gravitatorio es intenso: el cuerpo oprime fuertemente la superficie, lo que produce una normal N grande y por tanto puede soportar un rozamiento estatico mayor antes de deslizar. Un valor de P pequeno reduce N y limita el rozamiento maximo disponible, haciendo al sistema mas sensible a fuerzas horizontales pequenas."\r
        en: "A large P value indicates that the body's mass is high or the gravitational field is strong: the body presses heavily on the surface, producing a large normal N and therefore supporting greater static friction before slipping. A small P reduces N and limits the maximum available friction, making the system more sensitive to small horizontal forces."\r
    model_validity_rules:\r
    - id: P_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: P solo es interpretable dentro del modelo elegido.\r
        en: P is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: P_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de P.\r
        en: The graph must reflect the role of P visually.\r
    likely_errors:\r
    - id: P_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas P con otra magnitud cercana del problema.\r
        en: Do not confuse P with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: P_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa P para enlazar con el siguiente paso de interpretacion.\r
        en: Use P to connect with the next interpretation step.\r
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
  g:\r
    summary_rules:\r
    - id: g_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: g resume una lectura fisica relevante del leaf.\r
        en: g summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: g_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que g sea coherente con unidades y contexto.\r
        en: Check that g is coherent with units and context.\r
    physical_reading_rules:\r
    - id: g_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de g debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of g must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: g_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: g solo es interpretable dentro del modelo elegido.\r
        en: g is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: g_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de g.\r
        en: The graph must reflect the role of g visually.\r
    likely_errors:\r
    - id: g_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas g con otra magnitud cercana del problema.\r
        en: Do not confuse g with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: g_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa g para enlazar con el siguiente paso de interpretacion.\r
        en: Use g to connect with the next interpretation step.\r
  f_s:\r
    summary_rules:\r
    - id: f_s_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: f_s resume una lectura fisica relevante del leaf.\r
        en: f_s summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: f_s_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que f_s sea coherente con unidades y contexto.\r
        en: Check that f_s is coherent with units and context.\r
    physical_reading_rules:\r
    - id: f_s_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de f_s debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of f_s must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: f_s_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: f_s solo es interpretable dentro del modelo elegido.\r
        en: f_s is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: f_s_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de f_s.\r
        en: The graph must reflect the role of f_s visually.\r
    likely_errors:\r
    - id: f_s_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas f_s con otra magnitud cercana del problema.\r
        en: Do not confuse f_s with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: f_s_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa f_s para enlazar con el siguiente paso de interpretacion.\r
        en: Use f_s to connect with the next interpretation step.\r
  system_contact:\r
    summary_rules:\r
    - id: system_contact_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: system_contact resume una lectura fisica relevante del leaf.\r
        en: system_contact summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: system_contact_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que system_contact sea coherente con unidades y contexto.\r
        en: Check that system_contact is coherent with units and context.\r
    physical_reading_rules:\r
    - id: system_contact_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de system_contact debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of system_contact must connect with the described physical\r
          phenomenon.\r
    model_validity_rules:\r
    - id: system_contact_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: system_contact solo es interpretable dentro del modelo elegido.\r
        en: system_contact is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: system_contact_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de system_contact.\r
        en: The graph must reflect the role of system_contact visually.\r
    likely_errors:\r
    - id: system_contact_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas system_contact con otra magnitud cercana del problema.\r
        en: Do not confuse system_contact with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: system_contact_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa system_contact para enlazar con el siguiente paso de interpretacion.\r
        en: Use system_contact to connect with the next interpretation step.\r
`;export{e as default};
