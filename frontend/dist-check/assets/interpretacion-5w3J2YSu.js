const e=`version: 2
id: interpretacion-analogia-traslacional
leaf_id: analogia-traslacional
nombre:
  es: Interpretacion de Analogía Traslacional
  en: Interpretation of the Translational Analogy
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: segunda-ley-rotacional
  ruta_relativa: fisica-clasica/mecanica/dinamica/dinamica-rotacional/segunda-ley-rotacional/analogia-traslacional
dependencies:
  formulas:
    - segunda_ley_traslacional
    - segunda_ley_rotacional
    - momento_lineal
    - momento_angular
  magnitudes:
    - a
    - F_net
    - alpha
    - tau
    - p
    - L
    - m
    - I
    - v
    - omega
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
  a:
    summary_rules:
      - id: a_summary
        when: 'true'
        status: info
        text:
          es: a mide la respuesta lineal cuando F_net actua sobre una masa m.
          en: a measures the linear response when F_net acts on a mass m.
    coherence_rules:
      - id: a_coherence
        when: m > 0
        status: ok
        text:
          es: Debe ser coherente con F_net y con el signo elegido en la rama lineal.
          en: It must be coherent with F_net and with the chosen sign in the linear branch.
    physical_reading_rules:
      - id: a_physical
        when: 'true'
        status: info
        text:
          es: Si F_net aumenta con m fija, a debe crecer; si m aumenta con F_net fijo, a debe caer. Esa causalidad es la mitad lineal de la analogia.
          en: If F_net grows with fixed m, a should grow; if m grows with fixed F_net, a should fall. That causal relation is the linear half of the analogy.
    model_validity_rules:
      - id: a_validity
        when: m > 0
        status: ok
        text:
          es: Solo es interpretable si F_net representa bien la suma de fuerzas externas relevantes.
          en: It is only interpretable if F_net correctly represents the relevant net external force.
    graph_rules:
      - id: a_graph
        when: 'true'
        status: info
        text:
          es: En el grafico, la pendiente de a frente a F refleja la inercia lineal 1/m.
          en: In the graph, the slope of a versus F reflects the linear inertia 1/m.
    likely_errors:
      - id: a_warn
        when: 'true'
        status: warning
        text:
          es: "No confundas a con alpha: son respuestas análogas, pero pertenecen a coordenadas distintas."
          en: "Do not confuse a with alpha: they are analogous responses, but they belong to different coordinates."
    next_step_rules:
      - id: a_next
        when: 'true'
        status: info
        text:
          es: Compárala ahora con alpha para ver qué parte de la estructura dinámica se conserva.
          en: Compare it with alpha to see which part of the dynamical structure is preserved.
  F_net:
    summary_rules:
      - id: F_summary
        when: 'true'
        status: info
        text:
          es: F_net es la causa dinámica neta de la rama traslacional.
          en: F_net is the net dynamical cause in the translational branch.
    coherence_rules:
      - id: F_coherence
        when: 'true'
        status: ok
        text:
          es: Debe construirse con el mismo eje y convenio de signo usados para a.
          en: It must be built with the same axis and sign convention used for a.
    physical_reading_rules:
      - id: F_physical
        when: 'true'
        status: info
        text:
          es: F_net no es cualquier fuerza aislada, sino la causa lineal efectiva que produce cambio de estado.
          en: F_net is not any isolated force, but the effective linear cause that produces change of state.
    model_validity_rules:
      - id: F_validity
        when: 'true'
        status: ok
        text:
          es: Pierde sentido si se mezclan fuerzas internas irrelevantes con fuerzas externas.
          en: It loses meaning if irrelevant internal forces are mixed with external forces.
    graph_rules:
      - id: F_graph
        when: 'true'
        status: info
        text:
          es: Su comparación con tau muestra el paralelismo entre causa lineal y causa rotacional.
          en: Its comparison with tau shows the parallel between linear cause and rotational cause.
    likely_errors:
      - id: F_warn
        when: 'true'
        status: warning
        text:
          es: "No la confundas con tau: la analogia conserva función, no unidad ni geometría."
          en: "Do not confuse it with tau: the analogy preserves function, not unit or geometry."
    next_step_rules:
      - id: F_next
        when: 'true'
        status: info
        text:
          es: Contrástala con tau y revisa si ambas han sido construidas como causas netas.
          en: Contrast it with tau and check whether both were built as net causes.
  alpha:
    summary_rules:
      - id: alpha_summary
        when: 'true'
        status: info
        text:
          es: alpha mide la respuesta rotacional cuando un torque neto actua sobre un sistema con inercia I.
          en: alpha measures the rotational response when a net torque acts on a system with inertia I.
    coherence_rules:
      - id: alpha_coherence
        when: I > 0
        status: ok
        text:
          es: Debe ser coherente con tau y con el eje usado para definir I.
          en: It must be coherent with tau and with the axis used to define I.
    physical_reading_rules:
      - id: alpha_physical
        when: 'true'
        status: info
        text:
          es: Si tau aumenta con I fija, alpha debe crecer; si I aumenta con tau fijo, alpha debe caer. Esa causalidad es la mitad rotacional de la analogia.
          en: If tau grows with fixed I, alpha should grow; if I grows with fixed tau, alpha should fall. That causal relation is the rotational half of the analogy.
    model_validity_rules:
      - id: alpha_validity
        when: I > 0
        status: ok
        text:
          es: Solo es interpretable si el cuerpo puede tratarse como rígido o con I localmente constante.
          en: It is only interpretable if the body can be treated as rigid or with locally constant I.
    graph_rules:
      - id: alpha_graph
        when: 'true'
        status: info
        text:
          es: En el grafico, la pendiente de alpha frente a tau refleja la inercia rotacional 1/I.
          en: In the graph, the slope of alpha versus tau reflects the rotational inertia 1/I.
    likely_errors:
      - id: alpha_warn
        when: 'true'
        status: warning
        text:
          es: "No confundas alpha con a: son respuestas análogas, pero no tienen la misma unidad ni la misma geometría."
          en: "Do not confuse alpha with a: they are analogous responses, but they do not share unit or geometry."
    next_step_rules:
      - id: alpha_next
        when: 'true'
        status: info
        text:
          es: Compárala con a para decidir si la analogia está ordenando bien el problema.
          en: Compare it with a to decide whether the analogy is organizing the problem well.
  tau:
    summary_rules:
      - id: tau_summary
        when: 'true'
        status: info
        text:
          es: tau es la causa dinámica neta de la rama rotacional.
          en: tau is the net dynamical cause in the rotational branch.
    coherence_rules:
      - id: tau_coherence
        when: 'true'
        status: ok
        text:
          es: Debe calcularse respecto al mismo eje con el que se interpreta alpha.
          en: It must be computed about the same axis used to interpret alpha.
    physical_reading_rules:
      - id: tau_physical
        when: 'true'
        status: info
        text:
          es: tau no es una fuerza cualquiera; es el efecto de una fuerza con brazo respecto a un eje, y por eso solo es análogo a F_net después de construirlo bien.
          en: tau is not just any force; it is the effect of a force with a lever arm about an axis, and it is only analogous to F_net after being built correctly.
    model_validity_rules:
      - id: tau_validity
        when: 'true'
        status: ok
        text:
          es: Pierde sentido si no se declara el eje o si se mezclan torques calculados con referencias distintas.
          en: It loses meaning if the axis is not declared or if torques computed about different references are mixed.
    graph_rules:
      - id: tau_graph
        when: 'true'
        status: info
        text:
          es: Su comparación con F_net ayuda a ver qué se conserva y qué cambia al pasar a rotación.
          en: Its comparison with F_net helps show what stays the same and what changes when moving into rotation.
    likely_errors:
      - id: tau_warn
        when: 'true'
        status: warning
        text:
          es: "No lo trates como una fuerza con otra letra: falta eje, signo y brazo de palanca."
          en: "Do not treat it as a force with another letter: axis, sign, and lever arm are still needed."
    next_step_rules:
      - id: tau_next
        when: 'true'
        status: info
        text:
          es: Contrástalo con F_net para comprobar si la analogia sigue siendo útil o ya está ocultando la geometría.
          en: Contrast it with F_net to check whether the analogy is still useful or is already hiding geometry.
  p:
    summary_rules:
      - id: p_summary
        when: 'true'
        status: info
        text:
          es: p resume el estado dinámico lineal acumulado.
          en: p summarizes the accumulated linear dynamical state.
    coherence_rules:
      - id: p_coherence
        when: m > 0
        status: ok
        text:
          es: Debe crecer si la rama lineal gana velocidad con masa fija.
          en: It should grow if the linear branch gains speed with fixed mass.
    physical_reading_rules:
      - id: p_physical
        when: 'true'
        status: info
        text:
          es: p muestra cuánto movimiento lineal hay almacenado y prepara la comparación con L.
          en: p shows how much linear motion is stored and prepares the comparison with L.
    model_validity_rules:
      - id: p_validity
        when: m > 0
        status: ok
        text:
          es: Solo es legible si v y m pertenecen al mismo sistema y marco.
          en: It is readable only if v and m belong to the same system and frame.
    graph_rules:
      - id: p_graph
        when: 'true'
        status: info
        text:
          es: Ayuda a distinguir estado dinámico de causa dinámica.
          en: It helps distinguish dynamical state from dynamical cause.
    likely_errors:
      - id: p_warn
        when: 'true'
        status: warning
        text:
          es: "No confundas p con F_net: uno mide estado y el otro produce cambio."
          en: "Do not confuse p with F_net: one measures state and the other produces change."
    next_step_rules:
      - id: p_next
        when: 'true'
        status: info
        text:
          es: Compáralo con L para cerrar la analogia entre estados dinámicos.
          en: Compare it with L to close the analogy between dynamical states.
  L:
    summary_rules:
      - id: L_summary
        when: 'true'
        status: info
        text:
          es: L resume el estado dinámico rotacional acumulado.
          en: L summarizes the accumulated rotational dynamical state.
    coherence_rules:
      - id: L_coherence
        when: I > 0
        status: ok
        text:
          es: Debe crecer si la rama rotacional gana omega con I fija.
          en: It should grow if the rotational branch gains omega with fixed I.
    physical_reading_rules:
      - id: L_physical
        when: 'true'
        status: info
        text:
          es: L muestra cuánto giro dinámico hay almacenado y completa el paralelo con p.
          en: L shows how much rotational dynamical state is stored and completes the parallel with p.
    model_validity_rules:
      - id: L_validity
        when: I > 0
        status: ok
        text:
          es: Solo es legible si I y omega están definidos respecto al mismo eje.
          en: It is readable only if I and omega are defined about the same axis.
    graph_rules:
      - id: L_graph
        when: 'true'
        status: info
        text:
          es: Ayuda a distinguir entre el torque que cambia el movimiento y el estado rotacional ya acumulado.
          en: It helps distinguish between the torque that changes motion and the rotational state already accumulated.
    likely_errors:
      - id: L_warn
        when: 'true'
        status: warning
        text:
          es: "No confundas L con tau: uno resume estado y el otro resume causa neta."
          en: "Do not confuse L with tau: one summarizes state and the other summarizes net cause."
    next_step_rules:
      - id: L_next
        when: 'true'
        status: info
        text:
          es: Contrástalo con p para ver si la comparación entre estados mantiene sentido físico.
          en: Contrast it with p to see whether the state comparison preserves physical meaning.
  v:
    summary_rules:
      - id: v_summary
        when: 'true'
        status: info
        text:
          es: v describe la rapidez lineal alcanzada por la rama traslacional.
          en: v describes the linear speed reached by the translational branch.
    coherence_rules:
      - id: v_coherence
        when: m > 0
        status: ok
        text:
          es: Debe ser coherente con el signo de a y con la construccion de p.
          en: It must be coherent with the sign of a and with the construction of p.
    physical_reading_rules:
      - id: v_physical
        when: 'true'
        status: info
        text:
          es: Si la rama lineal recibe una causa neta sostenida, v debe reflejar la acumulacion temporal de esa respuesta.
          en: If the linear branch receives a sustained net cause, v should reflect the time accumulation of that response.
    model_validity_rules:
      - id: v_validity
        when: 'true'
        status: ok
        text:
          es: Solo es interpretable si el marco de referencia y la direccion elegida se mantienen coherentes.
          en: It is only interpretable if the reference frame and chosen direction remain coherent.
    graph_rules:
      - id: v_graph
        when: 'true'
        status: info
        text:
          es: Su comparacion con omega ayuda a separar velocidad lineal de velocidad angular sin perder el paralelismo estructural.
          en: Its comparison with omega helps separate linear speed from angular speed without losing the structural parallel.
    likely_errors:
      - id: v_warn
        when: 'true'
        status: warning
        text:
          es: "No la confundas con p: una describe estado cinemático y la otra resume estado dinámico."
          en: "Do not confuse it with p: one describes kinematic state and the other summarizes dynamical state."
    next_step_rules:
      - id: v_next
        when: 'true'
        status: info
        text:
          es: Relaciónala con p para ver cómo la masa convierte velocidad en estado dinámico lineal.
          en: Relate it to p to see how mass turns speed into linear dynamical state.
  omega:
    summary_rules:
      - id: omega_summary
        when: 'true'
        status: info
        text:
          es: omega describe la rapidez angular alcanzada por la rama rotacional.
          en: omega describes the angular speed reached by the rotational branch.
    coherence_rules:
      - id: omega_coherence
        when: I > 0
        status: ok
        text:
          es: Debe ser coherente con el signo de alpha y con el eje usado para construir L.
          en: It must be coherent with the sign of alpha and with the axis used to build L.
    physical_reading_rules:
      - id: omega_physical
        when: 'true'
        status: info
        text:
          es: Si la rama rotacional recibe un torque sostenido, omega debe reflejar la acumulacion temporal de esa respuesta angular.
          en: If the rotational branch receives sustained torque, omega should reflect the time accumulation of that angular response.
    model_validity_rules:
      - id: omega_validity
        when: 'true'
        status: ok
        text:
          es: Solo es interpretable si velocidad angular e inercia se refieren al mismo eje fisico.
          en: It is only interpretable if angular speed and inertia refer to the same physical axis.
    graph_rules:
      - id: omega_graph
        when: 'true'
        status: info
        text:
          es: Su comparacion con v permite ver que la analogia conserva funcion y no geometria.
          en: Its comparison with v shows that the analogy preserves function rather than geometry.
    likely_errors:
      - id: omega_warn
        when: 'true'
        status: warning
        text:
          es: "No la confundas con L: una describe estado cinemático angular y la otra resume estado dinámico rotacional."
          en: "Do not confuse it with L: one describes angular kinematic state and the other summarizes rotational dynamical state."
    next_step_rules:
      - id: omega_next
        when: 'true'
        status: info
        text:
          es: Relaciónala con L para ver cómo la inercia convierte rapidez angular en estado dinámico rotacional.
          en: Relate it to L to see how inertia turns angular speed into rotational dynamical state.
`;export{e as default};
