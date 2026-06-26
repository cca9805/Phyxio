const e=`version: 2
id: interpretacion-tiro-horizontal
leaf_id: tiro-horizontal
nombre:
  es: Interpretacion de Tiro horizontal
  en: Interpretation of Horizontal Projectile Motion
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cinematica
  parent_id: movimiento-en-dos-dimensiones
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-horizontal
dependencies:
  formulas:
    - th_posicion_x
    - th_posicion_y
    - th_velocidad_vertical
    - th_alcance
    - th_velocidad_total
    - th_trayectoria
    - th_velocidad_horizontal
    - th_tiempo_caida
  magnitudes:
    - x
    - x0
    - y
    - y0
    - t
    - v0
    - vx
    - vy
    - g
    - R
    - v
    - t_caida
output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
result_blocks:
  summary:
    title:
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  x:
    summary_rules:
      - id: x_summary
        when: "true"
        status: info
        text:
          es: x resume una lectura fisica relevante del leaf.
          en: x summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: x_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que x sea coherente con unidades y contexto.
          en: Check that x is coherent with units and context.
    physical_reading_rules:
      - id: x_physical
        when: "true"
        status: info
        text:
          es: La lectura de x debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of x must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: x_validity
        when: "true"
        status: ok
        text:
          es: x solo es interpretable dentro del modelo elegido.
          en: x is interpretable only inside the chosen model.
    graph_rules:
      - id: x_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de x.
          en: The graph must reflect the role of x visually.
    likely_errors:
      - id: x_warn
        when: "true"
        status: warning
        text:
          es: No confundas x con otra magnitud cercana del problema.
          en: Do not confuse x with another nearby quantity in the problem.
    next_step_rules:
      - id: x_next
        when: "true"
        status: info
        text:
          es: Usa x para enlazar con el siguiente paso de interpretacion.
          en: Use x to connect with the next interpretation step.
  v0:
    summary_rules:
      - id: v0_summary
        when: "true"
        status: info
        text:
          es: v0 resume una lectura fisica relevante del leaf.
          en: v0 summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: v0_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que v0 sea coherente con unidades y contexto.
          en: Check that v0 is coherent with units and context.
    physical_reading_rules:
      - id: v0_physical
        when: "true"
        status: info
        text:
          es: La lectura de v0 debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of v0 must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: v0_validity
        when: "true"
        status: ok
        text:
          es: v0 solo es interpretable dentro del modelo elegido.
          en: v0 is interpretable only inside the chosen model.
    graph_rules:
      - id: v0_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de v0.
          en: The graph must reflect the role of v0 visually.
    likely_errors:
      - id: v0_warn
        when: "true"
        status: warning
        text:
          es: No confundas v0 con otra magnitud cercana del problema.
          en: Do not confuse v0 with another nearby quantity in the problem.
    next_step_rules:
      - id: v0_next
        when: "true"
        status: info
        text:
          es: Usa v0 para enlazar con el siguiente paso de interpretacion.
          en: Use v0 to connect with the next interpretation step.
  t:
    summary_rules:
      - id: t_summary
        when: "true"
        status: info
        text:
          es: t resume una lectura fisica relevante del leaf.
          en: t summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: t_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que t sea coherente con unidades y contexto.
          en: Check that t is coherent with units and context.
    physical_reading_rules:
      - id: t_physical
        when: "true"
        status: info
        text:
          es: La lectura de t debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of t must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: t_validity
        when: "true"
        status: ok
        text:
          es: t solo es interpretable dentro del modelo elegido.
          en: t is interpretable only inside the chosen model.
    graph_rules:
      - id: t_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de t.
          en: The graph must reflect the role of t visually.
    likely_errors:
      - id: t_warn
        when: "true"
        status: warning
        text:
          es: No confundas t con otra magnitud cercana del problema.
          en: Do not confuse t with another nearby quantity in the problem.
    next_step_rules:
      - id: t_next
        when: "true"
        status: info
        text:
          es: Usa t para enlazar con el siguiente paso de interpretacion.
          en: Use t to connect with the next interpretation step.
  y:
    summary_rules:
      - id: y_summary
        when: "true"
        status: info
        text:
          es: y resume una lectura fisica relevante del leaf.
          en: y summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: y_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que y sea coherente con unidades y contexto.
          en: Check that y is coherent with units and context.
    physical_reading_rules:
      - id: y_physical
        when: "true"
        status: info
        text:
          es: La lectura de y debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of y must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: y_validity
        when: "true"
        status: ok
        text:
          es: y solo es interpretable dentro del modelo elegido.
          en: y is interpretable only inside the chosen model.
    graph_rules:
      - id: y_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de y.
          en: The graph must reflect the role of y visually.
    likely_errors:
      - id: y_warn
        when: "true"
        status: warning
        text:
          es: No confundas y con otra magnitud cercana del problema.
          en: Do not confuse y with another nearby quantity in the problem.
    next_step_rules:
      - id: y_next
        when: "true"
        status: info
        text:
          es: Usa y para enlazar con el siguiente paso de interpretacion.
          en: Use y to connect with the next interpretation step.
  y0:
    summary_rules:
      - id: y0_summary
        when: "true"
        status: info
        text:
          es: y0 resume una lectura fisica relevante del leaf.
          en: y0 summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: y0_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que y0 sea coherente con unidades y contexto.
          en: Check that y0 is coherent with units and context.
    physical_reading_rules:
      - id: y0_physical
        when: "true"
        status: info
        text:
          es: La lectura de y0 debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of y0 must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: y0_validity
        when: "true"
        status: ok
        text:
          es: y0 solo es interpretable dentro del modelo elegido.
          en: y0 is interpretable only inside the chosen model.
    graph_rules:
      - id: y0_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de y0.
          en: The graph must reflect the role of y0 visually.
    likely_errors:
      - id: y0_warn
        when: "true"
        status: warning
        text:
          es: No confundas y0 con otra magnitud cercana del problema.
          en: Do not confuse y0 with another nearby quantity in the problem.
    next_step_rules:
      - id: y0_next
        when: "true"
        status: info
        text:
          es: Usa y0 para enlazar con el siguiente paso de interpretacion.
          en: Use y0 to connect with the next interpretation step.
  vy:
    summary_rules:
      - id: vy_summary
        when: "true"
        status: info
        text:
          es: vy resume una lectura fisica relevante del leaf.
          en: vy summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: vy_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que vy sea coherente con unidades y contexto.
          en: Check that vy is coherent with units and context.
    physical_reading_rules:
      - id: vy_physical
        when: "true"
        status: info
        text:
          es: La lectura de vy debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of vy must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: vy_validity
        when: "true"
        status: ok
        text:
          es: vy solo es interpretable dentro del modelo elegido.
          en: vy is interpretable only inside the chosen model.
    graph_rules:
      - id: vy_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de vy.
          en: The graph must reflect the role of vy visually.
    likely_errors:
      - id: vy_warn
        when: "true"
        status: warning
        text:
          es: No confundas vy con otra magnitud cercana del problema.
          en: Do not confuse vy with another nearby quantity in the problem.
    next_step_rules:
      - id: vy_next
        when: "true"
        status: info
        text:
          es: Usa vy para enlazar con el siguiente paso de interpretacion.
          en: Use vy to connect with the next interpretation step.
  R:
    summary_rules:
      - id: R_summary
        when: "true"
        status: info
        text:
          es: R resume una lectura fisica relevante del leaf.
          en: R summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: R_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que R sea coherente con unidades y contexto.
          en: Check that R is coherent with units and context.
    physical_reading_rules:
      - id: R_physical
        when: "true"
        status: info
        text:
          es: La lectura de R debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of R must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: R_validity
        when: "true"
        status: ok
        text:
          es: R solo es interpretable dentro del modelo elegido.
          en: R is interpretable only inside the chosen model.
    graph_rules:
      - id: R_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de R.
          en: The graph must reflect the role of R visually.
    likely_errors:
      - id: R_warn
        when: "true"
        status: warning
        text:
          es: No confundas R con otra magnitud cercana del problema.
          en: Do not confuse R with another nearby quantity in the problem.
    next_step_rules:
      - id: R_next
        when: "true"
        status: info
        text:
          es: Usa R para enlazar con el siguiente paso de interpretacion.
          en: Use R to connect with the next interpretation step.
  v:
    summary_rules:
      - id: v_summary
        when: "true"
        status: info
        text:
          es: v resume una lectura fisica relevante del leaf.
          en: v summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: v_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que v sea coherente con unidades y contexto.
          en: Check that v is coherent with units and context.
    physical_reading_rules:
      - id: v_physical
        when: "true"
        status: info
        text:
          es: La lectura de v debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of v must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: v_validity
        when: "true"
        status: ok
        text:
          es: v solo es interpretable dentro del modelo elegido.
          en: v is interpretable only inside the chosen model.
    graph_rules:
      - id: v_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de v.
          en: The graph must reflect the role of v visually.
    likely_errors:
      - id: v_warn
        when: "true"
        status: warning
        text:
          es: No confundas v con otra magnitud cercana del problema.
          en: Do not confuse v with another nearby quantity in the problem.
    next_step_rules:
      - id: v_next
        when: "true"
        status: info
        text:
          es: Usa v para enlazar con el siguiente paso de interpretacion.
          en: Use v to connect with the next interpretation step.
  vx:
    summary_rules:
      - id: vx_summary
        when: "true"
        status: info
        text:
          es: vx resume una lectura fisica relevante del leaf.
          en: vx summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: vx_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que vx sea coherente con unidades y contexto.
          en: Check that vx is coherent with units and context.
    physical_reading_rules:
      - id: vx_physical
        when: "true"
        status: info
        text:
          es: La lectura de vx debe mostrar qué cambio físico produce.
          en: The reading of vx must show which physical change it produces.
    model_validity_rules:
      - id: vx_validity
        when: "true"
        status: ok
        text:
          es: vx solo es interpretable dentro del modelo elegido.
          en: vx is interpretable only inside the chosen model.
    graph_rules:
      - id: vx_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de vx.
          en: The graph must reflect the role of vx visually.
    likely_errors:
      - id: vx_warn
        when: "true"
        status: warning
        text:
          es: No confundas vx con otra magnitud cercana del problema.
          en: Do not confuse vx with another nearby quantity in the problem.
    next_step_rules:
      - id: vx_next
        when: "true"
        status: info
        text:
          es: Continua con la siguiente magnitud del problema.
          en: Continue with the next magnitude in the problem.
  t_caida:
    summary_rules:
      - id: t_caida_summary
        when: "true"
        status: info
        text:
          es: t_caida resume una lectura fisica relevante del leaf.
          en: fall time summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: t_caida_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que t_caida sea coherente con unidades, signos y contexto.
          en: Check that fall time is coherent with units, signs, and context.
    physical_reading_rules:
      - id: t_caida_physical
        when: "true"
        status: info
        text:
          es: La lectura de t_caida debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of fall time must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: t_caida_validity
        when: "true"
        status: ok
        text:
          es: t_caida solo es interpretable dentro del modelo declarado para este leaf.
          en: fall time is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: t_caida_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de t_caida.
          en: The graph must visually reflect the role of fall time.
    likely_errors:
      - id: t_caida_warn
        when: "true"
        status: warning
        text:
          es: No confundas t_caida con otra magnitud cercana del problema.
          en: Do not confuse fall time with another nearby quantity in the problem.
    next_step_rules:
      - id: t_caida_next
        when: "true"
        status: info
        text:
          es: Usa t_caida para enlazar con el siguiente paso de interpretacion.
          en: Use fall time to connect with the next interpretation step.
`;export{e as default};
