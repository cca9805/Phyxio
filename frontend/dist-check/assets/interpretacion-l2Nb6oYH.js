const e=`version: 2\r
id: interpretacion-rozamiento-estatico\r
leaf_id: rozamiento-estatico\r
nombre:\r
  es: Interpretacion de Rozamiento estatico\r
  en: Interpretation of Static Friction\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: rozamiento\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/rozamiento-estatico\r
dependencies:\r
  formulas:\r
  - condicion_estatica\r
  - umbral_estatico\r
  - criterio_deslizamiento\r
  magnitudes:\r
  - fs\r
  - fsmax\r
  - mus\r
  - N\r
  - Ft\r
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
        es: Si fs aumenta, es porque la demanda tangencial del problema tambien aumenta mientras el contacto sigue sin deslizar.\r
        en: If fs grows, it is because the tangential demand grows while the contact still remains without sliding.\r
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
  fsmax:\r
    summary_rules:\r
    - id: fsmax_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: fsmax resume una lectura fisica relevante del leaf.\r
        en: fsmax summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: fsmax_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que fsmax sea coherente con unidades y contexto.\r
        en: Check that fsmax is coherent with units and context.\r
    physical_reading_rules:\r
    - id: fsmax_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si fsmax crece, la interfaz puede sostener mayor demanda antes de perder adherencia porque tambien crece la capacidad del contacto.\r
        en: If fsmax grows, the interface can sustain a larger tangential demand before adhesion is lost.\r
    model_validity_rules:\r
    - id: fsmax_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: fsmax solo es interpretable dentro del modelo elegido.\r
        en: fsmax is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: fsmax_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de fsmax.\r
        en: The graph must reflect the role of fsmax visually.\r
    likely_errors:\r
    - id: fsmax_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas fsmax con otra magnitud cercana del problema.\r
        en: Do not confuse fsmax with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: fsmax_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa fsmax para enlazar con el siguiente paso de interpretacion.\r
        en: Use fsmax to connect with the next interpretation step.\r
  mus:\r
    summary_rules:\r
    - id: mus_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: mus resume una lectura fisica relevante del leaf.\r
        en: mus summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: mus_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que mus sea coherente con unidades y contexto.\r
        en: Check that mus is coherent with units and context.\r
    physical_reading_rules:\r
    - id: mus_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un mus mayor significa que, para la misma normal, el contacto puede ofrecer mas adherencia antes del deslizamiento.\r
        en: A larger mus means that for the same normal force the interface can offer more adhesion before sliding.\r
    model_validity_rules:\r
    - id: mus_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: mus solo es interpretable dentro del modelo elegido.\r
        en: mus is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: mus_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de mus.\r
        en: The graph must reflect the role of mus visually.\r
    likely_errors:\r
    - id: mus_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas mus con otra magnitud cercana del problema.\r
        en: Do not confuse mus with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: mus_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa mus para enlazar con el siguiente paso de interpretacion.\r
        en: Use mus to connect with the next interpretation step.\r
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
        es: Si N aumenta, tambien aumenta el margen estatico disponible porque el contacto queda mas comprimido.\r
        en: If N increases, the available static margin also increases because the contact is more strongly compressed.\r
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
  Ft:\r
    summary_rules:\r
    - id: Ft_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ft resume una lectura fisica relevante del leaf.\r
        en: Ft summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Ft_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Ft sea coherente con unidades y contexto.\r
        en: Check that Ft is coherent with units and context.\r
    physical_reading_rules:\r
    - id: Ft_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Ft aumenta, el sistema exige mas rozamiento para seguir sin deslizar y se acerca al umbral.\r
        en: If Ft increases, the system demands more friction to remain stuck and moves closer to the threshold.\r
    model_validity_rules:\r
    - id: Ft_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Ft solo es interpretable dentro del modelo elegido.\r
        en: Ft is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Ft_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Ft.\r
        en: The graph must reflect the role of Ft visually.\r
    likely_errors:\r
    - id: Ft_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Ft con otra magnitud cercana del problema.\r
        en: Do not confuse Ft with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Ft_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Ft para enlazar con el siguiente paso de interpretacion.\r
        en: Use Ft to connect with the next interpretation step.\r
`;export{e as default};
