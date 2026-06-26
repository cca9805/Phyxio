const e=`version: 2
id: interpretacion-tiro-parabolico
leaf_id: tiro-parabolico
nombre:
  es: Interpretacion de Tiro parabolico
  en: Interpretation of Projectile Motion
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cinematica
  parent_id: movimiento-en-dos-dimensiones
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-parabolico
dependencies:
  formulas:
    - tp_componentes_vx0
    - tp_componentes_vy0
    - tp_posicion_x
    - tp_posicion_y
    - tp_velocidad_y
    - tp_alcance_suelo
    - tiro_parabolico_trayectoria
    - tp_velocidad_horizontal
    - tp_tiempo_apice
    - tp_altura_maxima
    - tp_velocidad_total
    - tp_altura_maxima_absoluta
    - tp_tiempo_vuelo_mismo_nivel
    - tp_tiempo_impacto_general
  magnitudes:
    - t
    - x
    - y
    - v0
    - theta
    - vx0
    - vy0
    - vx
    - vy
    - g
    - R
    - x0
    - y0
    - v
    - t_ap
    - h_max
    - y_max
    - T
    - t_impacto
    - y_impacto
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
  vx0:
    summary_rules:
      - id: vx0_summary
        when: "true"
        status: info
        text:
          es: vx0 resume una lectura fisica relevante del leaf.
          en: vx0 summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: vx0_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que vx0 sea coherente con unidades y contexto.
          en: Check that vx0 is coherent with units and context.
    physical_reading_rules:
      - id: vx0_physical
        when: "true"
        status: info
        text:
          es: La lectura de vx0 debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of vx0 must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: vx0_validity
        when: "true"
        status: ok
        text:
          es: vx0 solo es interpretable dentro del modelo elegido.
          en: vx0 is interpretable only inside the chosen model.
    graph_rules:
      - id: vx0_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de vx0.
          en: The graph must reflect the role of vx0 visually.
    likely_errors:
      - id: vx0_warn
        when: "true"
        status: warning
        text:
          es: No confundas vx0 con otra magnitud cercana del problema.
          en: Do not confuse vx0 with another nearby quantity in the problem.
    next_step_rules:
      - id: vx0_next
        when: "true"
        status: info
        text:
          es: Usa vx0 para enlazar con el siguiente paso de interpretacion.
          en: Use vx0 to connect with the next interpretation step.
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
  vy0:
    summary_rules:
      - id: vy0_summary
        when: "true"
        status: info
        text:
          es: vy0 resume una lectura fisica relevante del leaf.
          en: vy0 summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: vy0_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que vy0 sea coherente con unidades y contexto.
          en: Check that vy0 is coherent with units and context.
    physical_reading_rules:
      - id: vy0_physical
        when: "true"
        status: info
        text:
          es: La lectura de vy0 debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of vy0 must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: vy0_validity
        when: "true"
        status: ok
        text:
          es: vy0 solo es interpretable dentro del modelo elegido.
          en: vy0 is interpretable only inside the chosen model.
    graph_rules:
      - id: vy0_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de vy0.
          en: The graph must reflect the role of vy0 visually.
    likely_errors:
      - id: vy0_warn
        when: "true"
        status: warning
        text:
          es: No confundas vy0 con otra magnitud cercana del problema.
          en: Do not confuse vy0 with another nearby quantity in the problem.
    next_step_rules:
      - id: vy0_next
        when: "true"
        status: info
        text:
          es: Usa vy0 para enlazar con el siguiente paso de interpretacion.
          en: Use vy0 to connect with the next interpretation step.
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
          es: La lectura de v debe mostrar qué cambio físico produce.
          en: The reading of v must show which physical change it produces.
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
          es: Continua con la siguiente magnitud del problema.
          en: Continue with the next magnitude in the problem.
  t_ap:
    summary_rules:
      - id: t_ap_summary
        when: "true"
        status: info
        text:
          es: t_ap resume una lectura fisica relevante del leaf.
          en: t_ap summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: t_ap_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que t_ap sea coherente con unidades y contexto.
          en: Check that t_ap is coherent with units and context.
    physical_reading_rules:
      - id: t_ap_physical
        when: "true"
        status: info
        text:
          es: La lectura de t_ap debe mostrar qué cambio físico produce.
          en: The reading of t_ap must show which physical change it produces.
    model_validity_rules:
      - id: t_ap_validity
        when: "true"
        status: ok
        text:
          es: t_ap solo es interpretable dentro del modelo elegido.
          en: t_ap is interpretable only inside the chosen model.
    graph_rules:
      - id: t_ap_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de t_ap.
          en: The graph must reflect the role of t_ap visually.
    likely_errors:
      - id: t_ap_warn
        when: "true"
        status: warning
        text:
          es: No confundas t_ap con otra magnitud cercana del problema.
          en: Do not confuse t_ap with another nearby quantity in the problem.
    next_step_rules:
      - id: t_ap_next
        when: "true"
        status: info
        text:
          es: Continua con la siguiente magnitud del problema.
          en: Continue with the next magnitude in the problem.
  h_max:
    summary_rules:
      - id: h_max_summary
        when: "true"
        status: info
        text:
          es: h_max resume una lectura fisica relevante del leaf.
          en: h_max summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: h_max_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que h_max sea coherente con unidades y contexto.
          en: Check that h_max is coherent with units and context.
    physical_reading_rules:
      - id: h_max_physical
        when: "true"
        status: info
        text:
          es: La lectura de h_max debe mostrar qué cambio físico produce.
          en: The reading of h_max must show which physical change it produces.
    model_validity_rules:
      - id: h_max_validity
        when: "true"
        status: ok
        text:
          es: h_max solo es interpretable dentro del modelo elegido.
          en: h_max is interpretable only inside the chosen model.
    graph_rules:
      - id: h_max_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de h_max.
          en: The graph must reflect the role of h_max visually.
    likely_errors:
      - id: h_max_warn
        when: "true"
        status: warning
        text:
          es: No confundas h_max con otra magnitud cercana del problema.
          en: Do not confuse h_max with another nearby quantity in the problem.
    next_step_rules:
      - id: h_max_next
        when: "true"
        status: info
        text:
          es: Continua con la siguiente magnitud del problema.
          en: Continue with the next magnitude in the problem.
  y_max:
    summary_rules:
      - id: y_max_summary
        when: "true"
        status: info
        text:
          es: y_max resume una lectura fisica relevante del leaf.
          en: y_max summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: y_max_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que y_max sea coherente con unidades, signos y contexto.
          en: Check that y_max is coherent with units, signs, and context.
    physical_reading_rules:
      - id: y_max_physical
        when: "true"
        status: info
        text:
          es: La lectura de y_max debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of y_max must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: y_max_validity
        when: "true"
        status: ok
        text:
          es: y_max solo es interpretable dentro del modelo declarado para este leaf.
          en: y_max is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: y_max_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de y_max.
          en: The graph must visually reflect the role of y_max.
    likely_errors:
      - id: y_max_warn
        when: "true"
        status: warning
        text:
          es: No confundas y_max con otra magnitud cercana del problema.
          en: Do not confuse y_max with another nearby quantity in the problem.
    next_step_rules:
      - id: y_max_next
        when: "true"
        status: info
        text:
          es: Usa y_max para enlazar con el siguiente paso de interpretacion.
          en: Use y_max to connect with the next interpretation step.
  T:
    summary_rules:
      - id: T_summary
        when: "true"
        status: info
        text:
          es: T resume una lectura fisica relevante del leaf.
          en: T summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: T_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que T sea coherente con unidades, signos y contexto.
          en: Check that T is coherent with units, signs, and context.
    physical_reading_rules:
      - id: T_physical
        when: "true"
        status: info
        text:
          es: La lectura de T debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of T must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: T_validity
        when: "true"
        status: ok
        text:
          es: T solo es interpretable dentro del modelo declarado para este leaf.
          en: T is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: T_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de T.
          en: The graph must visually reflect the role of T.
    likely_errors:
      - id: T_warn
        when: "true"
        status: warning
        text:
          es: No confundas T con otra magnitud cercana del problema.
          en: Do not confuse T with another nearby quantity in the problem.
    next_step_rules:
      - id: T_next
        when: "true"
        status: info
        text:
          es: Usa T para enlazar con el siguiente paso de interpretacion.
          en: Use T to connect with the next interpretation step.
  t_impacto:
    summary_rules:
      - id: t_impacto_summary
        when: "true"
        status: info
        text:
          es: t_impacto resume una lectura fisica relevante del leaf.
          en: t_impacto summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: t_impacto_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que t_impacto sea coherente con unidades, signos y contexto.
          en: Check that t_impacto is coherent with units, signs, and context.
    physical_reading_rules:
      - id: t_impacto_physical
        when: "true"
        status: info
        text:
          es: La lectura de t_impacto debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of t_impacto must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: t_impacto_validity
        when: "true"
        status: ok
        text:
          es: t_impacto solo es interpretable dentro del modelo declarado para este leaf.
          en: t_impacto is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: t_impacto_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de t_impacto.
          en: The graph must visually reflect the role of t_impacto.
    likely_errors:
      - id: t_impacto_warn
        when: "true"
        status: warning
        text:
          es: No confundas t_impacto con otra magnitud cercana del problema.
          en: Do not confuse t_impacto with another nearby quantity in the problem.
    next_step_rules:
      - id: t_impacto_next
        when: "true"
        status: info
        text:
          es: Usa t_impacto para enlazar con el siguiente paso de interpretacion.
          en: Use t_impacto to connect with the next interpretation step.
  y_impacto:
    summary_rules:
      - id: y_impacto_summary
        when: "true"
        status: info
        text:
          es: y_impacto resume una lectura fisica relevante del leaf.
          en: y_impacto summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: y_impacto_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que y_impacto sea coherente con unidades, signos y contexto.
          en: Check that y_impacto is coherent with units, signs, and context.
    physical_reading_rules:
      - id: y_impacto_physical
        when: "true"
        status: info
        text:
          es: La lectura de y_impacto debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of y_impacto must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: y_impacto_validity
        when: "true"
        status: ok
        text:
          es: y_impacto solo es interpretable dentro del modelo declarado para este leaf.
          en: y_impacto is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: y_impacto_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de y_impacto.
          en: The graph must visually reflect the role of y_impacto.
    likely_errors:
      - id: y_impacto_warn
        when: "true"
        status: warning
        text:
          es: No confundas y_impacto con otra magnitud cercana del problema.
          en: Do not confuse y_impacto with another nearby quantity in the problem.
    next_step_rules:
      - id: y_impacto_next
        when: "true"
        status: info
        text:
          es: Usa y_impacto para enlazar con el siguiente paso de interpretacion.
          en: Use y_impacto to connect with the next interpretation step.
`;export{e as default};
