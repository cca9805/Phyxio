const e=`version: 2\r
id: interpretacion-precesion\r
leaf_id: precesion\r
nombre:\r
  es: Interpretacion de Precesion\r
  en: Interpretation of Gyroscopic Precession\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cantidad-de-movimiento\r
  parent_id: momento-angular\r
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/precesion\r
dependencies:\r
  formulas:\r
  - Omega\r
  - tau_g\r
  - L\r
  - Omega_g\r
  - Tp\r
  - Omega_solve_tau\r
  magnitudes:\r
  - tau\r
  - L\r
  - Omegap\r
  - Tp\r
  - M\r
  - g\r
  - d\r
  - I\r
  - omega\r
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
  Omegap:\r
    summary_rules:\r
    - id: Omegap_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Omegap resume una lectura fisica relevante del leaf.\r
        en: Omegap summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Omegap_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Omegap sea coherente con unidades y contexto.\r
        en: Check that Omegap is coherent with units and context.\r
    physical_reading_rules:
    - id: Omegap_physical
      when: 'true'
      status: info
      text:
        es: Omegap mide cuan deprisa el torque desvía la direccion de L; si tau crece o el giro principal pierde L, la precesion se acelera y el cono se recorre mas rapido.
        en: Omegap measures how fast torque bends the direction of L; if tau grows or the main spin loses L, precession speeds up and the cone is swept faster.
    model_validity_rules:\r
    - id: Omegap_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Omegap solo es interpretable dentro del modelo elegido.\r
        en: Omegap is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Omegap_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Omegap.\r
        en: The graph must reflect the role of Omegap visually.\r
    likely_errors:\r
    - id: Omegap_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Omegap con otra magnitud cercana del problema.\r
        en: Do not confuse Omegap with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Omegap_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Omegap para enlazar con el siguiente paso de interpretacion.\r
        en: Use Omegap to connect with the next interpretation step.\r
  tau:\r
    summary_rules:\r
    - id: tau_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: tau resume una lectura fisica relevante del leaf.\r
        en: tau summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: tau_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que tau sea coherente con unidades y contexto.\r
        en: Check that tau is coherent with units and context.\r
    physical_reading_rules:\r
    - id: tau_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de tau debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of tau must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: tau_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: tau solo es interpretable dentro del modelo elegido.\r
        en: tau is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: tau_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de tau.\r
        en: The graph must reflect the role of tau visually.\r
    likely_errors:\r
    - id: tau_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas tau con otra magnitud cercana del problema.\r
        en: Do not confuse tau with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: tau_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa tau para enlazar con el siguiente paso de interpretacion.\r
        en: Use tau to connect with the next interpretation step.\r
  L:\r
    summary_rules:\r
    - id: L_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: L resume una lectura fisica relevante del leaf.\r
        en: L summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: L_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que L sea coherente con unidades y contexto.\r
        en: Check that L is coherent with units and context.\r
    physical_reading_rules:\r
    - id: L_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de L debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of L must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: L_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: L solo es interpretable dentro del modelo elegido.\r
        en: L is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: L_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de L.\r
        en: The graph must reflect the role of L visually.\r
    likely_errors:\r
    - id: L_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas L con otra magnitud cercana del problema.\r
        en: Do not confuse L with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: L_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa L para enlazar con el siguiente paso de interpretacion.\r
        en: Use L to connect with the next interpretation step.\r
  Tp:\r
    summary_rules:\r
    - id: Tp_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tp resume una lectura fisica relevante del leaf.\r
        en: Tp summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Tp_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Tp sea coherente con unidades y contexto.\r
        en: Check that Tp is coherent with units and context.\r
    physical_reading_rules:\r
    - id: Tp_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de Tp debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of Tp must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: Tp_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Tp solo es interpretable dentro del modelo elegido.\r
        en: Tp is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Tp_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Tp.\r
        en: The graph must reflect the role of Tp visually.\r
    likely_errors:\r
    - id: Tp_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Tp con otra magnitud cercana del problema.\r
        en: Do not confuse Tp with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Tp_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Tp para enlazar con el siguiente paso de interpretacion.\r
        en: Use Tp to connect with the next interpretation step.\r
`;export{e as default};
