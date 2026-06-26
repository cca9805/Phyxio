const e=`version: 2\r
id: interpretacion-impulso-externo-y-ruptura-de-la-conservacion\r
leaf_id: impulso-externo-y-ruptura-de-la-conservacion\r
nombre:\r
  es: Interpretacion de Impulso externo y ruptura de la conservacion\r
  en: Interpretation of External Impulse and Breakdown of Conservation\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cantidad-de-movimiento\r
  parent_id: principio-de-conservacion\r
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion\r
dependencies:\r
  formulas:\r
  - J\r
  - DeltaP_ext\r
  - DeltaP\r
  - P\r
  - cond\r
  - pi\r
  - cons_principle\r
  - general_1d_balance\r
  - inelastic_collision\r
  - recoil_law\r
  - ruptura_conservacion\r
  magnitudes:\r
  - P\r
  - F_ext\r
  - J\r
  - t\r
  - DeltaP\r
  - Pfinal\r
  - Pinitial\r
  - v1f\r
  - v1i\r
  - v2f\r
  - vf\r
  - m1\r
  - m2\r
  - v2i\r
  - m\r
  - v\r
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
  J:\r
    summary_rules:\r
    - id: J_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: J resume una lectura fisica relevante del leaf.\r
        en: J summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: J_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que J sea coherente con unidades y contexto.\r
        en: Check that J is coherent with units and context.\r
    physical_reading_rules:\r
    - id: J_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si el impulso externo J aumenta, por tanto la variacion del momento lineal total es mayor, lo que indica que la fuerza externa actua durante mas tiempo o con mayor intensidad. Un impulso negativo significa que la fuerza se opone al movimiento, porque J y el cambio de momento tienen el mismo signo.\r
        en: If the external impulse J increases, therefore the change in total linear momentum is larger, which indicates that the external force acts for longer or with greater intensity. A negative impulse means the force opposes motion, because J and the momentum change have the same sign.\r
    model_validity_rules:\r
    - id: J_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: J solo es interpretable dentro del modelo elegido.\r
        en: J is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: J_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de J.\r
        en: The graph must reflect the role of J visually.\r
    likely_errors:\r
    - id: J_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas J con otra magnitud cercana del problema.\r
        en: Do not confuse J with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: J_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa J para enlazar con el siguiente paso de interpretacion.\r
        en: Use J to connect with the next interpretation step.\r
  F_ext:\r
    summary_rules:\r
    - id: F_ext_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_ext resume una lectura fisica relevante del leaf.\r
        en: F_ext summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_ext_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_ext sea coherente con unidades y contexto.\r
        en: Check that F_ext is coherent with units and context.\r
    physical_reading_rules:\r
    - id: F_ext_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de F_ext debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of F_ext must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: F_ext_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_ext solo es interpretable dentro del modelo elegido.\r
        en: F_ext is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_ext_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_ext.\r
        en: The graph must reflect the role of F_ext visually.\r
    likely_errors:\r
    - id: F_ext_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_ext con otra magnitud cercana del problema.\r
        en: Do not confuse F_ext with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_ext_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_ext para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_ext to connect with the next interpretation step.\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: t resume una lectura fisica relevante del leaf.\r
        en: t summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: t_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que t sea coherente con unidades y contexto.\r
        en: Check that t is coherent with units and context.\r
    physical_reading_rules:\r
    - id: t_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de t debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of t must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: t_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: t solo es interpretable dentro del modelo elegido.\r
        en: t is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: t_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de t.\r
        en: The graph must reflect the role of t visually.\r
    likely_errors:\r
    - id: t_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas t con otra magnitud cercana del problema.\r
        en: Do not confuse t with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: t_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa t para enlazar con el siguiente paso de interpretacion.\r
        en: Use t to connect with the next interpretation step.\r
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
        es: La lectura de P debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of P must connect with the described physical phenomenon.\r
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
  DeltaP:\r
    summary_rules:\r
    - id: DeltaP_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: DeltaP representa la variacion total del momento lineal del sistema debido al impulso externo.\r
        en: DeltaP represents the total change in linear momentum of the system due to external impulse.\r
    coherence_rules:\r
    - id: DeltaP_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que DeltaP sea coherente con unidades y contexto.\r
        en: Check that DeltaP is coherent with units and context.\r
    physical_reading_rules:\r
    - id: DeltaP_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: DeltaP es positivo si el impulso externo acelera el sistema y negativo si lo frena. Cuantifica exactamente cuanto se ha roto la conservacion.\r
        en: DeltaP is positive if the external impulse accelerates the system and negative if it decelerates it. It quantifies exactly how much conservation has been broken.\r
    model_validity_rules:\r
    - id: DeltaP_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: DeltaP solo es interpretable dentro del modelo elegido.\r
        en: DeltaP is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: DeltaP_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de DeltaP.\r
        en: The graph must reflect the role of DeltaP visually.\r
    likely_errors:\r
    - id: DeltaP_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas DeltaP con el impulso J. Ambos son iguales numericamente pero DeltaP es el resultado mientras J es la causa.\r
        en: Do not confuse DeltaP with impulse J. They are numerically equal but DeltaP is the result while J is the cause.\r
    next_step_rules:\r
    - id: DeltaP_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa DeltaP para conectar con el calculo del estado final del sistema.\r
        en: Use DeltaP to connect with the calculation of the final state of the system.\r
  Pfinal:\r
    summary_rules:\r
    - id: Pfinal_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Pfinal es el momento lineal del sistema tras recibir el impulso externo. Es la suma de Pinitial y J.\r
        en: Pfinal is the linear momentum of the system after receiving the external impulse. It equals Pinitial plus J.\r
    coherence_rules:\r
    - id: Pfinal_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Pfinal sea coherente con unidades y contexto.\r
        en: Check that Pfinal is coherent with units and context.\r
    physical_reading_rules:\r
    - id: Pfinal_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Pfinal refleja el nuevo estado dinamico del sistema despues de que la fuerza externa haya actuado durante el tiempo t.\r
        en: Pfinal reflects the new dynamic state of the system after the external force has acted for time t.\r
    model_validity_rules:\r
    - id: Pfinal_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Pfinal solo es interpretable dentro del modelo elegido.\r
        en: Pfinal is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Pfinal_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Pfinal.\r
        en: The graph must reflect the role of Pfinal visually.\r
    likely_errors:\r
    - id: Pfinal_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Pfinal con Pinitial. Pfinal incorpora el efecto del impulso externo.\r
        en: Do not confuse Pfinal with Pinitial. Pfinal incorporates the effect of the external impulse.\r
    next_step_rules:\r
    - id: Pfinal_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Pfinal para obtener la velocidad final dividiendo por la masa del sistema.\r
        en: Use Pfinal to obtain the final velocity by dividing by the system mass.\r
  Pinitial:\r
    summary_rules:\r
    - id: Pinitial_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Pinitial es el momento lineal del sistema antes de que actue el impulso externo.\r
        en: Pinitial is the linear momentum of the system before the external impulse acts.\r
    coherence_rules:\r
    - id: Pinitial_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Pinitial sea coherente con unidades y contexto.\r
        en: Check that Pinitial is coherent with units and context.\r
    physical_reading_rules:\r
    - id: Pinitial_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Pinitial es el punto de partida del balance impulso-momento. Si Pinitial es cero el sistema parte del reposo.\r
        en: Pinitial is the starting point of the impulse-momentum balance. If Pinitial is zero the system starts from rest.\r
    model_validity_rules:\r
    - id: Pinitial_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Pinitial solo es interpretable dentro del modelo elegido.\r
        en: Pinitial is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Pinitial_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Pinitial.\r
        en: The graph must reflect the role of Pinitial visually.\r
    likely_errors:\r
    - id: Pinitial_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Pinitial con Pfinal. La conservacion se rompe precisamente porque estos dos valores difieren.\r
        en: Do not confuse Pinitial with Pfinal. Conservation breaks precisely because these two values differ.\r
    next_step_rules:\r
    - id: Pinitial_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Pinitial como condicion inicial del balance impulso-momento.\r
        en: Use Pinitial as the initial condition of the impulse-momentum balance.\r
  v1f:\r
    summary_rules:\r
    - id: v1f_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v1f es la velocidad final del primer cuerpo tras recibir el impulso externo. Se obtiene dividiendo Pfinal entre m1.\r
        en: v1f is the final velocity of the first body after receiving the external impulse. It is obtained by dividing Pfinal by m1.\r
    coherence_rules:\r
    - id: v1f_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que v1f sea coherente con unidades y contexto.\r
        en: Check that v1f is coherent with units and context.\r
    physical_reading_rules:\r
    - id: v1f_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v1f es el resultado cinematico del teorema impulso-momento. Un impulso negativo reduce v1f respecto a v1i; uno positivo la aumenta.\r
        en: v1f is the kinematic result of the impulse-momentum theorem. A negative impulse reduces v1f relative to v1i; a positive one increases it.\r
    model_validity_rules:\r
    - id: v1f_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v1f solo es interpretable dentro del modelo elegido.\r
        en: v1f is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: v1f_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de v1f.\r
        en: The graph must reflect the role of v1f visually.\r
    likely_errors:\r
    - id: v1f_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v1f con v1i. v1f es la velocidad tras el impulso; v1i es la velocidad antes.\r
        en: Do not confuse v1f with v1i. v1f is the velocity after the impulse; v1i is the velocity before.\r
    next_step_rules:\r
    - id: v1f_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v1f para verificar el resultado, este debe ser consistente con el signo y magnitud del impulso recibido.\r
        en: Use v1f to verify the result, it must be consistent with the sign and magnitude of the impulse received.\r
  v1i:\r
    summary_rules:\r
    - id: v1i_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v1i es la velocidad inicial del primer cuerpo antes de que actue el impulso externo.\r
        en: v1i is the initial velocity of the first body before the external impulse acts.\r
    coherence_rules:\r
    - id: v1i_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que v1i sea coherente con unidades y contexto.\r
        en: Check that v1i is coherent with units and context.\r
    physical_reading_rules:\r
    - id: v1i_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v1i define el estado cinetico inicial del sistema. Junto con la masa m1, determina Pinitial.\r
        en: v1i defines the initial kinetic state of the system. Together with mass m1, it determines Pinitial.\r
    model_validity_rules:\r
    - id: v1i_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v1i solo es interpretable dentro del modelo elegido.\r
        en: v1i is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: v1i_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de v1i.\r
        en: The graph must reflect the role of v1i visually.\r
    likely_errors:\r
    - id: v1i_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v1i con v1f. La diferencia entre ellas es precisamente la evidencia de la ruptura de la conservacion.\r
        en: Do not confuse v1i with v1f. The difference between them is precisely the evidence of the breakdown of conservation.\r
    next_step_rules:\r
    - id: v1i_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v1i para calcular Pinitial y como punto de partida del balance impulso-momento.\r
        en: Use v1i to calculate Pinitial and as starting point of the impulse-momentum balance.\r
  v2f:\r
    summary_rules:\r
    - id: v2f_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v2f es la velocidad final del segundo cuerpo en una colision de dos cuerpos con impulso externo.\r
        en: v2f is the final velocity of the second body in a two-body collision with external impulse.\r
    coherence_rules:\r
    - id: v2f_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que v2f sea coherente con unidades y contexto.\r
        en: Check that v2f is coherent with units and context.\r
    physical_reading_rules:\r
    - id: v2f_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v2f representa el estado cinetico final del segundo cuerpo. En colisiones con impulso externo, la suma m1*v1f + m2*v2f no es igual a m1*v1i + m2*v2i sino que difiere en J.\r
        en: v2f represents the final kinetic state of the second body. In collisions with external impulse, the sum m1*v1f + m2*v2f is not equal to m1*v1i + m2*v2i but differs by J.\r
    model_validity_rules:\r
    - id: v2f_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v2f solo es interpretable dentro del modelo elegido.\r
        en: v2f is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: v2f_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de v2f.\r
        en: The graph must reflect the role of v2f visually.\r
    likely_errors:\r
    - id: v2f_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v2f con vf (velocidad final de masa combinada). v2f es para colisiones entre dos cuerpos distintos.\r
        en: Do not confuse v2f with vf (final velocity of combined mass). v2f is for collisions between two separate bodies.\r
    next_step_rules:\r
    - id: v2f_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v2f junto con v1f para verificar el balance de momentos del sistema de dos cuerpos.\r
        en: Use v2f together with v1f to verify the momentum balance of the two-body system.\r
  vf:\r
    summary_rules:\r
    - id: vf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: vf es la velocidad final de la masa combinada en una colision perfectamente inelastica con impulso externo.\r
        en: vf is the final velocity of the combined mass in a perfectly inelastic collision with external impulse.\r
    coherence_rules:\r
    - id: vf_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que vf sea coherente con unidades y contexto.\r
        en: Check that vf is coherent with units and context.\r
    physical_reading_rules:\r
    - id: vf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: vf es el estado cinetico final del sistema fusionado. Si existe impulso externo J, entonces (m1+m2)*vf = Pinitial + J.\r
        en: vf is the final kinetic state of the fused system. If external impulse J exists, then (m1+m2)*vf = Pinitial + J.\r
    model_validity_rules:\r
    - id: vf_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: vf solo es interpretable dentro del modelo elegido.\r
        en: vf is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: vf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de vf.\r
        en: The graph must reflect the role of vf visually.\r
    likely_errors:\r
    - id: vf_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas vf con v1f. vf es la velocidad de la masa combinada tras la fusion; v1f es la velocidad de un solo cuerpo.\r
        en: Do not confuse vf with v1f. vf is the velocity of the combined mass after fusion; v1f is the velocity of a single body.\r
    next_step_rules:\r
    - id: vf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa vf para conectar con la interpretacion energetica, la energia cinetica tras la fusion es siempre menor que la inicial por la disipacion inelastica.\r
        en: Use vf to connect with the energetic interpretation, kinetic energy after fusion is always less than initial due to inelastic dissipation.\r
  m2:\r
    summary_rules:\r
    - id: m2_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m2 es la masa del segundo cuerpo en una interacción de dos partículas.\r
        en: m2 is the mass of the second body in a two-particle interaction.\r
    coherence_rules:\r
    - id: m2_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: m2 debe ser positivo. Comprueba que no se confunda con m1.\r
        en: m2 must be positive. Check it is not confused with m1.\r
    physical_reading_rules:\r
    - id: m2_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El cociente m1/m2 determina la relación entre las velocidades de retroceso en una explosión desde el reposo.\r
        en: The ratio m1/m2 determines the relationship between recoil velocities in an explosion from rest.\r
    model_validity_rules:\r
    - id: m2_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: m2 es un parámetro del modelo; su valor es fijo durante la interacción.\r
        en: m2 is a model parameter; its value is fixed during the interaction.\r
    graph_rules:\r
    - id: m2_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m2 no aparece directamente en la gráfica P(t) pero escala los momentos parciales.\r
        en: m2 does not appear directly in the P(t) graph but scales the partial momenta.\r
    likely_errors:\r
    - id: m2_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Cuidado con intercambiar m1 y m2. Los roles son asimétricos en la ley de retroceso.\r
        en: Be careful not to swap m1 and m2. Their roles are asymmetric in the recoil law.\r
    next_step_rules:\r
    - id: m2_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa m2 junto con v2f para calcular el momento final del segundo cuerpo.\r
        en: Use m2 together with v2f to calculate the final momentum of the second body.\r
  v2i:\r
    summary_rules:\r
    - id: v2i_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v2i es la velocidad inicial del segundo cuerpo antes de la interacción.\r
        en: v2i is the initial velocity of the second body before the interaction.\r
    coherence_rules:\r
    - id: v2i_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que v2i tenga el signo correcto según el eje positivo elegido.\r
        en: Check that v2i has the correct sign according to the chosen positive axis.\r
    physical_reading_rules:\r
    - id: v2i_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En muchos problemas v2i = 0 (blanco en reposo), lo que simplifica el balance de momento lineal a m1*v1i = Pinitial.\r
        en: In many problems v2i = 0 (target at rest), which simplifies the momentum balance to m1*v1i = Pinitial.\r
    model_validity_rules:\r
    - id: v2i_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v2i es condición inicial del modelo; debe estar definida antes de aplicar el balance.\r
        en: v2i is an initial condition of the model; it must be defined before applying the balance.\r
    graph_rules:\r
    - id: v2i_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v2i determina la contribución del segundo cuerpo al Pinitial en la gráfica P(t).\r
        en: v2i determines the contribution of the second body to Pinitial in the P(t) graph.\r
    likely_errors:\r
    - id: v2i_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas v2i con v2f. v2i es el estado antes de la interacción; v2f es el estado después.\r
        en: Do not confuse v2i with v2f. v2i is the state before the interaction; v2f is the state after.\r
    next_step_rules:\r
    - id: v2i_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v2i para calcular Pinitial = m1*v1i + m2*v2i antes de aplicar el balance de impulso.\r
        en: Use v2i to calculate Pinitial = m1*v1i + m2*v2i before applying the impulse balance.\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m es la masa genérica de la definición fundamental P = m·v.\r
        en: m is the generic mass in the fundamental definition P = m·v.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: m debe ser siempre positivo y constante en mecánica clásica no relativista.\r
        en: m must always be positive and constant in non-relativistic classical mechanics.\r
    physical_reading_rules:\r
    - id: m_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En problemas con más de un cuerpo, m se sustituye por m1 o m2 según corresponda al cuerpo de interés.\r
        en: In problems with more than one body, m is replaced by m1 or m2 depending on the body of interest.\r
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: m es constante durante la interacción en el modelo clásico.\r
        en: m is constant during the interaction in the classical model.\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m escala la relación entre velocidad y momento en la gráfica P vs v.\r
        en: m scales the relationship between velocity and momentum in the P vs v graph.\r
    likely_errors:\r
    - id: m_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: En sistemas de varios cuerpos, no uses m genérico. Especifica siempre m1 o m2.\r
        en: In multi-body systems, do not use generic m. Always specify m1 or m2.\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa m para calcular P = m·v como punto de partida antes de aplicar el principio de conservación o el balance de impulso.\r
        en: Use m to calculate P = m·v as a starting point before applying the conservation principle or impulse balance.\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v es la velocidad genérica de la definición fundamental P = m·v.\r
        en: v is the generic velocity in the fundamental definition P = m·v.\r
    coherence_rules:\r
    - id: v_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de v debe ser coherente con el eje positivo definido en el problema.\r
        en: The sign of v must be consistent with the positive axis defined in the problem.\r
    physical_reading_rules:\r
    - id: v_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En problemas concretos, v se sustituye por v1i, v1f, v2i o v2f según el cuerpo y el instante.\r
        en: In specific problems, v is replaced by v1i, v1f, v2i or v2f depending on the body and instant.\r
    model_validity_rules:\r
    - id: v_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: v es un parámetro cinemático; su valor depende del instante y del cuerpo considerado.\r
        en: v is a kinematic parameter; its value depends on the instant and body considered.\r
    graph_rules:\r
    - id: v_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En la gráfica P(t), v es la pendiente de la posición respecto al tiempo para masa constante.\r
        en: In the P(t) graph, v is the slope of position with respect to time for constant mass.\r
    likely_errors:\r
    - id: v_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No uses v genérico en problemas de dos cuerpos. Especifica siempre si es v1i, v1f, v2i o v2f.\r
        en: Do not use generic v in two-body problems. Always specify whether it is v1i, v1f, v2i or v2f.\r
    next_step_rules:\r
    - id: v_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v para calcular P = m·v y luego identificar si la conservación se cumple o se rompe por el impulso externo J.\r
        en: Use v to calculate P = m·v and then identify whether conservation holds or is broken by external impulse J.\r
`;export{e as default};
