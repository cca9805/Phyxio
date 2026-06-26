const e=`version: 2\r
id: interpretacion-conservacion-momento-angular\r
leaf_id: conservacion-momento-angular\r
nombre:\r
  es: Interpretacion de Conservacion momento angular\r
  en: Interpretation of Conservation of Angular Momentum\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cantidad-de-movimiento\r
  parent_id: momento-angular\r
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/conservacion-momento-angular\r
dependencies:\r
  formulas:\r
  - cons\r
  - Iomega\r
  - tau\r
  - cons_solve_Lf\r
  - Iomega_solve_omegaf\r
  magnitudes:\r
  - L\r
  - Ii\r
  - I_final\r
  - omegai\r
  - omegaf\r
  - tau\r
  - DeltaL\r
  - DeltaT\r
  - Li\r
  - Lf\r
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
  Lf:\r
    summary_rules:\r
    - id: Lf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Lf resume una lectura fisica relevante del leaf.\r
        en: Lf summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Lf_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Lf sea coherente con unidades y contexto.\r
        en: Check that Lf is coherent with units and context.\r
    physical_reading_rules:\r
    - id: Lf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Lf confirma si el estado final mantiene el mismo balance angular total; si tau externo sobre DeltaT es despreciable, un cambio de omegaf solo puede venir de cambiar I y no de crear momento angular.\r
        en: Lf confirms whether the final state keeps the same total angular balance; if external tau over DeltaT is negligible, a change in omegaf can only come from changing I rather than creating angular momentum.\r
    model_validity_rules:\r
    - id: Lf_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Lf solo es interpretable dentro del modelo elegido.\r
        en: Lf is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Lf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Lf.\r
        en: The graph must reflect the role of Lf visually.\r
    likely_errors:\r
    - id: Lf_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Lf con otra magnitud cercana del problema.\r
        en: Do not confuse Lf with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Lf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Lf para enlazar con el siguiente paso de interpretacion.\r
        en: Use Lf to connect with the next interpretation step.\r
  omegaf:\r
    summary_rules:\r
    - id: omegaf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omegaf resume una lectura fisica relevante del leaf.\r
        en: omegaf summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: omegaf_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que omegaf sea coherente con unidades y contexto.\r
        en: Check that omegaf is coherent with units and context.\r
    physical_reading_rules:\r
    - id: omegaf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de omegaf debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of omegaf must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: omegaf_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: omegaf solo es interpretable dentro del modelo elegido.\r
        en: omegaf is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: omegaf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de omegaf.\r
        en: The graph must reflect the role of omegaf visually.\r
    likely_errors:\r
    - id: omegaf_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas omegaf con otra magnitud cercana del problema.\r
        en: Do not confuse omegaf with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: omegaf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa omegaf para enlazar con el siguiente paso de interpretacion.\r
        en: Use omegaf to connect with the next interpretation step.\r
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
`;export{e as default};
