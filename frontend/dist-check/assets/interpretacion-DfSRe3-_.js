const e=`version: 2\r
id: interpretacion-definicion-momento-angular\r
leaf_id: definicion-momento-angular\r
nombre:\r
  es: Interpretacion de Definicion momento angular\r
  en: Interpretation of Definition of Angular Momentum\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cantidad-de-movimiento\r
  parent_id: momento-angular\r
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/definicion-momento-angular\r
dependencies:\r
  formulas:\r
  - p\r
  - L\r
  - Lrot\r
  - tau\r
  - Lrot_solve_omega\r
  - tau_solve_DeltaL\r
  magnitudes:\r
  - L\r
  - r\r
  - p\r
  - m\r
  - v\r
  - theta\r
  - I\r
  - omega\r
  - tau\r
  - DeltaL\r
  - DeltaT\r
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
    physical_reading_rules:
    - id: p_physical
      when: 'true'
      status: info
      text:
        es: p fija la parte lineal del movimiento; solo cuando se combina con el brazo perpendicular respecto al origen explica por que aparece un L grande o pequeno.
        en: p sets the linear part of the motion; only when it is combined with the perpendicular lever arm about the origin does it explain why L becomes large or small.
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
    physical_reading_rules:
    - id: L_physical
      when: 'true'
      status: info
      text:
        es: L no repite a p; mide cuanto efecto de giro produce ese movimiento respecto al origen elegido, asi que cambia si cambia el brazo perpendicular aunque p permanezca igual.
        en: L is not a copy of p; it measures how much turning effect that motion produces about the chosen origin, so it changes when the perpendicular lever arm changes even if p stays the same.
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
    physical_reading_rules:
    - id: omega_physical
      when: 'true'
      status: info
      text:
        es: "omega solo adquiere sentido aqui cuando el estado angular se reinterpreta como rotor: una omega grande no garantiza un L grande si I es pequeno."
        en: "omega only gains meaning here when the angular state is reinterpreted as a rotor: a large omega does not guarantee a large L if I is small."
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
    physical_reading_rules:
    - id: tau_physical
      when: 'true'
      status: info
      text:
        es: tau representa la accion externa capaz de cambiar L; si tau no es despreciable, el estado angular deja de leerse como pura geometria y pasa a leerse como respuesta forzada.
        en: tau represents the external action capable of changing L; if tau is not negligible, the angular state stops being read as pure geometry and becomes a forced response.
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
  DeltaL:\r
    summary_rules:\r
    - id: DeltaL_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: DeltaL resume una lectura fisica relevante del leaf.\r
        en: DeltaL summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: DeltaL_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que DeltaL sea coherente con unidades y contexto.\r
        en: Check that DeltaL is coherent with units and context.\r
    physical_reading_rules:
    - id: DeltaL_physical
      when: 'true'
      status: info
      text:
        es: DeltaL cuantifica cuanto ha cambiado realmente el estado angular entre dos instantes; si es apreciable, no basta con describir la trayectoria, hay que explicar que interaccion produjo ese cambio.
        en: DeltaL quantifies how much the angular state has actually changed between two instants; if it is appreciable, describing the trajectory is not enough and one must explain which interaction produced that change.
    model_validity_rules:\r
    - id: DeltaL_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: DeltaL solo es interpretable dentro del modelo elegido.\r
        en: DeltaL is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: DeltaL_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de DeltaL.\r
        en: The graph must reflect the role of DeltaL visually.\r
    likely_errors:\r
    - id: DeltaL_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas DeltaL con otra magnitud cercana del problema.\r
        en: Do not confuse DeltaL with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: DeltaL_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa DeltaL para enlazar con el siguiente paso de interpretacion.\r
        en: Use DeltaL to connect with the next interpretation step.\r
`;export{e as default};
