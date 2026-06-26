const e=`version: 2\r
id: interpretacion-traslacion-y-rotacion\r
leaf_id: traslacion-y-rotacion\r
nombre:\r
  es: Interpretacion de Traslacion y rotacion\r
  en: Interpretation of Translation and Rotation\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: sistemas-mixtos\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/aplicaciones/sistemas-mixtos/traslacion-y-rotacion\r
dependencies:\r
  formulas:\r
  - segunda_ley_rotacion\r
  - vinculo_traslacion_rotacion\r
  - energia_cinetica_total\r
  magnitudes:\r
  - m\r
  - I\r
  - R\r
  - v\r
  - omega\r
  - a\r
  - alpha\r
  - tau_net\r
  - Kt\r
  - Kr\r
  - K\r
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
  alpha:\r
    summary_rules:\r
    - id: alpha_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: alpha resume una lectura fisica relevante del leaf.\r
        en: alpha summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: alpha_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que alpha sea coherente con unidades y contexto.\r
        en: Check that alpha is coherent with units and context.\r
    physical_reading_rules:\r
    - id: alpha_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Un alpha grande indica que tau_net supera ampliamente la resistencia inercial I: el cuerpo rota con una aceleracion angular apreciable. Un alpha pequeño revela que I amortigua el efecto del torque, bien porque la masa esta distribuida lejos del eje, bien porque tau_net es debil. Reducir I (concentrando masa cerca del eje) aumenta alpha proporcionalmente para el mismo torque aplicado."\r
        en: "A large alpha indicates that tau_net substantially exceeds the inertial resistance I: the body develops appreciable angular acceleration. A small alpha reveals that I dampens the torque effect, either because mass is distributed far from the axis or because tau_net is weak. Reducing I by concentrating mass near the axis increases alpha proportionally for the same applied torque."\r
    model_validity_rules:\r
    - id: alpha_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: alpha solo es interpretable dentro del modelo elegido.\r
        en: alpha is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: alpha_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de alpha.\r
        en: The graph must reflect the role of alpha visually.\r
    likely_errors:\r
    - id: alpha_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas alpha con otra magnitud cercana del problema.\r
        en: Do not confuse alpha with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: alpha_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa alpha para enlazar con el siguiente paso de interpretacion.\r
        en: Use alpha to connect with the next interpretation step.\r
  I:\r
    summary_rules:\r
    - id: I_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I resume una lectura fisica relevante del leaf.\r
        en: I summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: I_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que I sea coherente con unidades y contexto.\r
        en: Check that I is coherent with units and context.\r
    physical_reading_rules:\r
    - id: I_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de I debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of I must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: I_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: I solo es interpretable dentro del modelo elegido.\r
        en: I is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: I_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de I.\r
        en: The graph must reflect the role of I visually.\r
    likely_errors:\r
    - id: I_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas I con otra magnitud cercana del problema.\r
        en: Do not confuse I with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: I_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa I para enlazar con el siguiente paso de interpretacion.\r
        en: Use I to connect with the next interpretation step.\r
  R:\r
    summary_rules:\r
    - id: R_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: R resume una lectura fisica relevante del leaf.\r
        en: R summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: R_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que R sea coherente con unidades y contexto.\r
        en: Check that R is coherent with units and context.\r
    physical_reading_rules:\r
    - id: R_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de R debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of R must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: R_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: R solo es interpretable dentro del modelo elegido.\r
        en: R is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: R_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de R.\r
        en: The graph must reflect the role of R visually.\r
    likely_errors:\r
    - id: R_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas R con otra magnitud cercana del problema.\r
        en: Do not confuse R with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: R_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa R para enlazar con el siguiente paso de interpretacion.\r
        en: Use R to connect with the next interpretation step.\r
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
        es: La lectura de v debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of v must connect with the described physical phenomenon.\r
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
`;export{e as default};
