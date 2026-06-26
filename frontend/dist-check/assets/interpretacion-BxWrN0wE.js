const e=`version: 2\r
id: interpretacion-segunda-ley-fuerza-masa\r
leaf_id: segunda-ley-fuerza-masa\r
nombre:\r
  es: Interpretacion de Segunda ley fuerza masa\r
  en: Interpretation of Newton's Second Law (Force, Mass, and Acceleration)\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: leyes-de-newton\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa\r
dependencies:\r
  formulas:\r
  - segunda_ley_newton\r
  - forma_componentes\r
  magnitudes:\r
  - F_net\r
  - m\r
  - a\r
  - F_x\r
  - a_x\r
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
  F_net:\r
    summary_rules:\r
    - id: F_net_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_net resume una lectura fisica relevante del leaf.\r
        en: F_net summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_net_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_net sea coherente con unidades y contexto.\r
        en: Check that F_net is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_net_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_net es la fuerza neta sobre el sistema; por tanto, su magnitud implica que el cuerpo experimenta una aceleracion a = F_net/m. Si F_net aumenta, la aceleracion del cuerpo aumenta causalmente en la misma proporcion; si F_net se anula, el cuerpo mantiene su estado de movimiento.\r
        en: F_net is the net force on the system; therefore, its magnitude implies that the body experiences an acceleration a = F_net/m. If F_net increases, the body's acceleration increases causally in the same proportion; if F_net vanishes, the body maintains its state of motion.\r
    model_validity_rules:\r
    - id: F_net_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_net solo es interpretable dentro del modelo elegido.\r
        en: F_net is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_net_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_net.\r
        en: The graph must reflect the role of F_net visually.\r
    likely_errors:\r
    - id: F_net_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_net con otra magnitud cercana del problema.\r
        en: Do not confuse F_net with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_net_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_net para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_net to connect with the next interpretation step.\r
  a:\r
    summary_rules:\r
    - id: a_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a resume una lectura fisica relevante del leaf.\r
        en: a summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a sea coherente con unidades y contexto.\r
        en: Check that a is coherent with units and context.\r
    physical_reading_rules:\r
    - id: a_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de a debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of a must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: a_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a solo es interpretable dentro del modelo elegido.\r
        en: a is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a.\r
        en: The graph must reflect the role of a visually.\r
    likely_errors:\r
    - id: a_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a con otra magnitud cercana del problema.\r
        en: Do not confuse a with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a para enlazar con el siguiente paso de interpretacion.\r
        en: Use a to connect with the next interpretation step.\r
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
  F_x:\r
    summary_rules:\r
    - id: F_x_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_x resume una lectura fisica relevante del leaf.\r
        en: F_x summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_x_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_x sea coherente con unidades y contexto.\r
        en: Check that F_x is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_x_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de F_x debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of F_x must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: F_x_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_x solo es interpretable dentro del modelo elegido.\r
        en: F_x is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_x_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_x.\r
        en: The graph must reflect the role of F_x visually.\r
    likely_errors:\r
    - id: F_x_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_x con otra magnitud cercana del problema.\r
        en: Do not confuse F_x with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_x_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_x para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_x to connect with the next interpretation step.\r
  a_x:\r
    summary_rules:\r
    - id: a_x_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_x resume una lectura fisica relevante del leaf.\r
        en: a_x summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_x_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_x sea coherente con unidades y contexto.\r
        en: Check that a_x is coherent with units and context.\r
    physical_reading_rules:\r
    - id: a_x_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de a_x debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of a_x must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: a_x_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_x solo es interpretable dentro del modelo elegido.\r
        en: a_x is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_x_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_x.\r
        en: The graph must reflect the role of a_x visually.\r
    likely_errors:\r
    - id: a_x_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_x con otra magnitud cercana del problema.\r
        en: Do not confuse a_x with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_x_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_x para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_x to connect with the next interpretation step.\r
`;export{e as default};
