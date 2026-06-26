const e=`version: 2\r
id: interpretacion-cinematica-rotacional\r
leaf_id: cinematica-rotacional\r
nombre:\r
  es: Interpretacion de Cinematica rotacional\r
  en: Interpretation of Rotational Kinematics\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cinematica\r
  parent_id: rotacion\r
  ruta_relativa: fisica-clasica/mecanica/cinematica/rotacion/cinematica-rotacional\r
dependencies:\r
  formulas:\r
  - mcu_posicion\r
  - mcua_velocidad\r
  - mcua_posicion\r
  - mcua_independiente_tiempo\r
  - mcua_desplazamiento_medio\r
  magnitudes:\r
  - theta\r
  - omega\r
  - alpha\r
  - t\r
  - delta_theta\r
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
        es: La lectura de omega debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of omega must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
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
  theta:\r
    summary_rules:\r
    - id: theta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: theta resume una lectura fisica relevante del leaf.\r
        en: theta summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: theta_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que theta sea coherente con unidades y contexto.\r
        en: Check that theta is coherent with units and context.\r
    physical_reading_rules:\r
    - id: theta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de theta debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.\r
        en: The reading of theta must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.\r
    model_validity_rules:\r
    - id: theta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: theta solo es interpretable dentro del modelo elegido.\r
        en: theta is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: theta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de theta.\r
        en: The graph must reflect the role of theta visually.\r
    likely_errors:\r
    - id: theta_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas theta con otra magnitud cercana del problema.\r
        en: Do not confuse theta with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: theta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa theta para enlazar con el siguiente paso de interpretacion.\r
        en: Use theta to connect with the next interpretation step.\r
  delta_theta:\r
    summary_rules:\r
    - id: delta_theta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: delta_theta resume una lectura fisica relevante del leaf.\r
        en: delta_theta summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: delta_theta_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que delta_theta sea coherente con unidades y contexto.\r
        en: Check that delta_theta is coherent with units and context.\r
    physical_reading_rules:\r
    - id: delta_theta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de delta_theta debe mostrar qué cambio físico produce.\r
        en: The reading of delta_theta must show which physical change it produces.\r
    model_validity_rules:\r
    - id: delta_theta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: delta_theta solo es interpretable dentro del modelo elegido.\r
        en: delta_theta is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: delta_theta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de delta_theta.\r
        en: The graph must reflect the role of delta_theta visually.\r
    likely_errors:\r
    - id: delta_theta_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas delta_theta con otra magnitud cercana del problema.\r
        en: Do not confuse delta_theta with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: delta_theta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Continua con la siguiente magnitud del problema.\r
        en: Continue with the next magnitude in the problem.\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: t es el tiempo transcurrido durante el proceso rotacional analizado.\r
        en: t is the time elapsed during the analyzed rotational process.\r
    physical_reading_rules:\r
    - id: t_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de t indica la duracion del movimiento rotacional en estudio.\r
        en: The reading of t indicates the duration of the rotational motion under study.\r
    coherence_rules:\r
    - id: t_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Verifica que t sea positivo y coherente con el intervalo analizado.\r
        en: Check that t is positive and consistent with the analyzed interval.\r
    model_validity_rules:\r
    - id: t_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: t solo es interpretable dentro del modelo de MCUA elegido.\r
        en: t is interpretable only inside the chosen UACM model.\r
    graph_rules:\r
    - id: t_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de t en los ejes temporales.\r
        en: The graph must visually reflect the role of t on the time axes.\r
    likely_errors:\r
    - id: t_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas t con un intervalo parcial o con el periodo de rotacion.\r
        en: Do not confuse t with a partial interval or with the rotation period.\r
    next_step_rules:\r
    - id: t_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa t para enlazar con el siguiente paso de interpretacion.\r
        en: Use t to connect with the next interpretation step.\r
`;export{e as default};
