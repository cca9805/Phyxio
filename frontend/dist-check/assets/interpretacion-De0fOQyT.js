const e=`version: 2\r
id: interpretacion-tercera-ley-accion-reaccion\r
leaf_id: tercera-ley-accion-reaccion\r
nombre:\r
  es: Interpretacion de Tercera ley accion reaccion\r
  en: Interpretation of Newton's Third Law (Action and Reaction)\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: leyes-de-newton\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/tercera-ley-accion-reaccion\r
dependencies:\r
  formulas:\r
  - tercera_ley_vectorial\r
  - tercera_ley_eje_x\r
  - tercera_ley_eje_y\r
  - par_normal_vectorial\r
  magnitudes:\r
  - FAB\r
  - FBA\r
  - FAx\r
  - FBx\r
  - FAy\r
  - FBy\r
  - Nab\r
  - Nba\r
  - mA\r
  - mB\r
  - aA\r
  - aB\r
  - vA\r
  - vB\r
  - v0\r
  - t\r
  - W\r
  - N_gen\r
  - g\r
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
  FBA:\r
    summary_rules:\r
    - id: FBA_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: FBA resume una lectura fisica relevante del leaf.\r
        en: FBA summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: FBA_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que FBA sea coherente con unidades y contexto.\r
        en: Check that FBA is coherent with units and context.\r
    physical_reading_rules:\r
    - id: FBA_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: FBA es la fuerza que B ejerce sobre A; por tanto, su magnitud implica que el cuerpo A experimenta una aceleracion proporcional a FBA/mA. Si FBA aumenta, la aceleracion de A aumenta causalmente en la misma proporcion.\r
        en: FBA is the force B exerts on A; therefore its magnitude implies that body A experiences an acceleration proportional to FBA/mA. If FBA increases, the acceleration of A increases causally in the same proportion.\r
    model_validity_rules:\r
    - id: FBA_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: FBA solo es interpretable dentro del modelo elegido.\r
        en: FBA is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: FBA_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de FBA.\r
        en: The graph must reflect the role of FBA visually.\r
    likely_errors:\r
    - id: FBA_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas FBA con otra magnitud cercana del problema.\r
        en: Do not confuse FBA with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: FBA_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa FBA para enlazar con el siguiente paso de interpretacion.\r
        en: Use FBA to connect with the next interpretation step.\r
  FAB:\r
    summary_rules:\r
    - id: FAB_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: FAB resume una lectura fisica relevante del leaf.\r
        en: FAB summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: FAB_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que FAB sea coherente con unidades y contexto.\r
        en: Check that FAB is coherent with units and context.\r
    physical_reading_rules:\r
    - id: FAB_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de FAB debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of FAB must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: FAB_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: FAB solo es interpretable dentro del modelo elegido.\r
        en: FAB is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: FAB_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de FAB.\r
        en: The graph must reflect the role of FAB visually.\r
    likely_errors:\r
    - id: FAB_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas FAB con otra magnitud cercana del problema.\r
        en: Do not confuse FAB with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: FAB_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa FAB para enlazar con el siguiente paso de interpretacion.\r
        en: Use FAB to connect with the next interpretation step.\r
  FBx:\r
    summary_rules:\r
    - id: FBx_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: FBx resume una lectura fisica relevante del leaf.\r
        en: FBx summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: FBx_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que FBx sea coherente con unidades y contexto.\r
        en: Check that FBx is coherent with units and context.\r
    physical_reading_rules:\r
    - id: FBx_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de FBx debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of FBx must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: FBx_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: FBx solo es interpretable dentro del modelo elegido.\r
        en: FBx is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: FBx_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de FBx.\r
        en: The graph must reflect the role of FBx visually.\r
    likely_errors:\r
    - id: FBx_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas FBx con otra magnitud cercana del problema.\r
        en: Do not confuse FBx with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: FBx_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa FBx para enlazar con el siguiente paso de interpretacion.\r
        en: Use FBx to connect with the next interpretation step.\r
  FAx:\r
    summary_rules:\r
    - id: FAx_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: FAx resume una lectura fisica relevante del leaf.\r
        en: FAx summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: FAx_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que FAx sea coherente con unidades y contexto.\r
        en: Check that FAx is coherent with units and context.\r
    physical_reading_rules:\r
    - id: FAx_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de FAx debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of FAx must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: FAx_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: FAx solo es interpretable dentro del modelo elegido.\r
        en: FAx is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: FAx_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de FAx.\r
        en: The graph must reflect the role of FAx visually.\r
    likely_errors:\r
    - id: FAx_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas FAx con otra magnitud cercana del problema.\r
        en: Do not confuse FAx with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: FAx_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa FAx para enlazar con el siguiente paso de interpretacion.\r
        en: Use FAx to connect with the next interpretation step.\r
  FBy:\r
    summary_rules:\r
    - id: FBy_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: FBy resume una lectura fisica relevante del leaf.\r
        en: FBy summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: FBy_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que FBy sea coherente con unidades y contexto.\r
        en: Check that FBy is coherent with units and context.\r
    physical_reading_rules:\r
    - id: FBy_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de FBy debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of FBy must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: FBy_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: FBy solo es interpretable dentro del modelo elegido.\r
        en: FBy is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: FBy_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de FBy.\r
        en: The graph must reflect the role of FBy visually.\r
    likely_errors:\r
    - id: FBy_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas FBy con otra magnitud cercana del problema.\r
        en: Do not confuse FBy with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: FBy_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa FBy para enlazar con el siguiente paso de interpretacion.\r
        en: Use FBy to connect with the next interpretation step.\r
  FAy:\r
    summary_rules:\r
    - id: FAy_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: FAy resume una lectura fisica relevante del leaf.\r
        en: FAy summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: FAy_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que FAy sea coherente con unidades y contexto.\r
        en: Check that FAy is coherent with units and context.\r
    physical_reading_rules:\r
    - id: FAy_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de FAy debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of FAy must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: FAy_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: FAy solo es interpretable dentro del modelo elegido.\r
        en: FAy is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: FAy_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de FAy.\r
        en: The graph must reflect the role of FAy visually.\r
    likely_errors:\r
    - id: FAy_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas FAy con otra magnitud cercana del problema.\r
        en: Do not confuse FAy with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: FAy_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa FAy para enlazar con el siguiente paso de interpretacion.\r
        en: Use FAy to connect with the next interpretation step.\r
  Nba:\r
    summary_rules:\r
    - id: Nba_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Nba resume una lectura fisica relevante del leaf.\r
        en: Nba summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Nba_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Nba sea coherente con unidades y contexto.\r
        en: Check that Nba is coherent with units and context.\r
    physical_reading_rules:\r
    - id: Nba_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de Nba debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of Nba must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: Nba_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Nba solo es interpretable dentro del modelo elegido.\r
        en: Nba is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Nba_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Nba.\r
        en: The graph must reflect the role of Nba visually.\r
    likely_errors:\r
    - id: Nba_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Nba con otra magnitud cercana del problema.\r
        en: Do not confuse Nba with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Nba_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Nba para enlazar con el siguiente paso de interpretacion.\r
        en: Use Nba to connect with the next interpretation step.\r
  Nab:\r
    summary_rules:\r
    - id: Nab_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Nab resume una lectura fisica relevante del leaf.\r
        en: Nab summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Nab_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Nab sea coherente con unidades y contexto.\r
        en: Check that Nab is coherent with units and context.\r
    physical_reading_rules:\r
    - id: Nab_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de Nab debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of Nab must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: Nab_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Nab solo es interpretable dentro del modelo elegido.\r
        en: Nab is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Nab_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Nab.\r
        en: The graph must reflect the role of Nab visually.\r
    likely_errors:\r
    - id: Nab_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Nab con otra magnitud cercana del problema.\r
        en: Do not confuse Nab with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Nab_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Nab para enlazar con el siguiente paso de interpretacion.\r
        en: Use Nab to connect with the next interpretation step.\r
`;export{e as default};
