const e=`version: 2
id: interpretacion-velocidad-relativa
leaf_id: velocidad-relativa
nombre:
  es: Interpretacion de Velocidad relativa
  en: Interpretation of Relative Velocity
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cinematica
  parent_id: movimiento-relativo
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-relativo/velocidad-relativa
dependencies:
  formulas:
  - composicion_velocidades
  - definicion_vel_rel
  - inversion_relativa
  - despeje_v_frame
  magnitudes:
  - v_rel
  - v_abs
  - v_frame
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
  v_rel:
    summary_rules:
    - id: v_rel_summary
      when: 'true'
      status: info
      text:
        es: v_rel indica como se mueve A visto desde B, no como se mueve A respecto al suelo.
        en: v_rel tells how A moves as seen from B, not how A moves with respect to the ground.
    coherence_rules:
    - id: v_rel_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que v_rel se haya construido restando velocidades medidas desde el mismo observador base O.
        en: Check that v_rel was built by subtracting velocities measured from the same base observer O.
    physical_reading_rules:
    - id: v_rel_physical
      when: 'true'
      status: info
      text:
        es: Si v_rel es pequena o nula, A y B estan casi en reposo mutuo aunque ambos puedan moverse rapido respecto al marco base.
        en: If v_rel is small or zero, A and B are nearly at mutual rest even if both may move quickly with respect to the base frame.
    model_validity_rules:
    - id: v_rel_validity
      when: 'true'
      status: ok
      text:
        es: v_rel se interpreta de forma galileana mientras los marcos sigan siendo inerciales y el regimen sea clasico.
        en: v_rel is interpreted in a Galilean way while frames remain inertial and the regime stays classical.
    graph_rules:
    - id: v_rel_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe dejar claro que v_rel cambia si cambia quien observa.
        en: The graph should make clear that v_rel changes when the observer changes.
    likely_errors:
    - id: v_rel_warn
      when: 'true'
      status: warning
      text:
        es: No confundas v_rel con una rapidez escalar si el problema exige direcciones o componentes.
        en: Do not confuse v_rel with a scalar speed when the problem requires directions or components.
    next_step_rules:
    - id: v_rel_next
      when: 'true'
      status: info
      text:
        es: Usa v_rel para decidir si conviene cambiar al marco movil antes de resolver el resto del problema.
        en: Use v_rel to decide whether it is convenient to switch to the moving frame before solving the rest of the problem.
  v_abs:
    summary_rules:
    - id: v_abs_summary
      when: 'true'
      status: info
      text:
        es: v_abs es la velocidad de A leida desde el observador base O que organiza toda la comparacion.
        en: v_abs is the velocity of A read from the base observer O that organizes the whole comparison.
    coherence_rules:
    - id: v_abs_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que v_abs pertenezca al mismo eje o sistema de componentes que v_rel y v_frame.
        en: Check that v_abs belongs to the same axis or component system as v_rel and v_frame.
    physical_reading_rules:
    - id: v_abs_physical
      when: 'true'
      status: info
      text:
        es: v_abs resume como ve el movimiento el observador base, por ejemplo el suelo, la pista o el laboratorio.
        en: v_abs summarizes how the base observer sees the motion, for example the ground, the track, or the lab.
    model_validity_rules:
    - id: v_abs_validity
      when: 'true'
      status: ok
      text:
        es: v_abs solo puede reconstruirse con composicion simple si la relacion entre marcos es galileana.
        en: v_abs can only be reconstructed with simple composition if the relation between frames is Galilean.
    graph_rules:
    - id: v_abs_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe mostrar como la velocidad observada desde O combina el movimiento del movil y el del marco.
        en: The graph should show how the velocity observed from O combines the body's motion and the frame motion.
    likely_errors:
    - id: v_abs_warn
      when: 'true'
      status: warning
      text:
        es: No llames absoluta a una velocidad si no has dicho explicitamente respecto a que observador base esta medida.
        en: Do not call a velocity absolute if you have not explicitly stated with respect to which base observer it is measured.
    next_step_rules:
    - id: v_abs_next
      when: 'true'
      status: info
      text:
        es: Usa v_abs para conectar el problema local del marco movil con la lectura global desde el suelo o laboratorio.
        en: Use v_abs to connect the local moving-frame problem with the global reading from the ground or lab.
  v_frame:
    summary_rules:
    - id: v_frame_summary
      when: 'true'
      status: info
      text:
        es: v_frame recoge la parte del movimiento que pertenece al observador o marco B.
        en: v_frame captures the part of the motion that belongs to observer or frame B.
    coherence_rules:
    - id: v_frame_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que v_frame no se haya confundido con la velocidad propia de A.
        en: Check that v_frame has not been confused with A's own velocity.
    physical_reading_rules:
    - id: v_frame_physical
      when: 'true'
      status: info
      text:
        es: Si v_frame domina, la mayor parte del cambio de descripcion viene del marco y no del movimiento interno de A.
        en: If v_frame dominates, most of the description change comes from the frame and not from A's internal motion.
    model_validity_rules:
    - id: v_frame_validity
      when: 'true'
      status: ok
      text:
        es: v_frame se interpreta de forma estable mientras el marco movil no cambie bruscamente de velocidad o direccion.
        en: v_frame is stably interpreted while the moving frame does not change velocity or direction abruptly.
    graph_rules:
    - id: v_frame_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe distinguir con claridad la velocidad del marco de la velocidad del movil observado.
        en: The graph should clearly distinguish the frame velocity from the observed body's velocity.
    likely_errors:
    - id: v_frame_warn
      when: 'true'
      status: warning
      text:
        es: No restes o sumes v_frame con un signo automatico sin revisar el sentido del marco.
        en: Do not subtract or add v_frame with an automatic sign without checking the frame direction.
    next_step_rules:
    - id: v_frame_next
      when: 'true'
      status: info
      text:
        es: Si conoces v_abs y v_rel, despeja v_frame para identificar la contribucion del observador movil.
        en: If you know v_abs and v_rel, solve for v_frame to identify the moving observer's contribution.
`;export{e as default};
