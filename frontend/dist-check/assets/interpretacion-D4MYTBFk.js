const e=`version: 2\r
id: interpretacion-ecuacion-fundamental\r
leaf_id: ecuacion-fundamental\r
nombre:\r
  es: Interpretacion de Ecuación Fundamental\r
  en: Interpretation of Fundamental Equation of Rotational Dynamics\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: segunda-ley-rotacional\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-rotacional/segunda-ley-rotacional/ecuacion-fundamental\r
dependencies:\r
  formulas:\r
  - segunda_ley_traslacional\r
  - segunda_ley_rotacional\r
  - momento_lineal\r
  - momento_angular\r
  magnitudes:\r
  - x\r
  - theta\r
  - v\r
  - omega\r
  - a\r
  - alpha\r
  - m\r
  - I\r
  - F_net\r
  - tau\r
  - p\r
  - L\r
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
        es: Si aparece una rama traslacional asociada, a debe crecer cuando F_net aumenta y debe caer cuando la masa efectiva crece.
        en: If an associated translational branch appears, a should grow when F_net increases and should fall when effective mass grows.
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
        es: F_net representa la causa lineal neta y sirve como referencia para comparar por analogia con la causa rotacional.
        en: F_net represents the net linear cause and serves as a reference for analogy with the rotational cause.
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
        es: Si el torque neto aumenta con I fija, alpha debe crecer; si I aumenta con el mismo torque, alpha debe disminuir.
        en: If net torque grows with fixed I, alpha should grow; if I grows under the same torque, alpha should decrease.
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
        es: tau es la causa rotacional neta y solo adquiere sentido fisico cuando eje, brazo y signo han sido construidos de forma coherente.
        en: tau is the net rotational cause and only acquires physical meaning once axis, lever arm, and sign have been built coherently.
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
        es: v debe reflejar la acumulacion temporal de la respuesta lineal cuando la rama traslacional forma parte del problema.
        en: v should reflect the time accumulation of linear response when a translational branch is part of the problem.
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
  p:\r
    summary_rules:\r
    - id: p_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: p resume una lectura fisica relevante del leaf.\r
        en: p summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: p_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que p sea coherente con unidades y contexto.\r
        en: Check that p is coherent with units and context.\r
    physical_reading_rules:\r
    - id: p_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: p resume estado dinamico lineal y ayuda a distinguir entre movimiento traslacional acumulado y respuesta angular del sistema.
        en: p summarizes linear dynamical state and helps separate accumulated translational motion from angular response of the system.
    model_validity_rules:\r
    - id: p_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: p solo es interpretable dentro del modelo elegido.\r
        en: p is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: p_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de p.\r
        en: The graph must reflect the role of p visually.\r
    likely_errors:\r
    - id: p_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas p con otra magnitud cercana del problema.\r
        en: Do not confuse p with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: p_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa p para enlazar con el siguiente paso de interpretacion.\r
        en: Use p to connect with the next interpretation step.\r
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
        es: omega debe aumentar con el tiempo mientras exista alpha positiva y debe caer si el torque neto cambia a frenado.
        en: omega should increase in time while alpha stays positive and should fall if net torque switches to braking.
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
        es: L resume cuanto estado rotacional ha quedado almacenado una vez que el sistema ya esta girando.
        en: L summarizes how much rotational state has been stored once the system is already spinning.
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
`;export{e as default};
