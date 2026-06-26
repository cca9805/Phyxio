const e=`version: 2
id: interpretacion-primera-ley-inercia
leaf_id: primera-ley-inercia
nombre:
  es: Interpretacion de Primera ley inercia
  en: Interpretation of Newton's First Law (Inertia)
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: leyes-de-newton
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/primera-ley-inercia
dependencies:
  formulas:
  - first_law_condition
  - equilibrium_dynamics_relation
  - constant_velocity_inertia
  magnitudes:
  - F_net
  - a
  - v
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
  F_net:
    summary_rules:
    - id: F_net_summary
      when: 'true'
      status: info
      text:
        es: F_net resume si el entorno esta cambiando el estado de movimiento del sistema o si las fuerzas se compensan.
        en: F_net summarizes whether the environment is changing the system's state of motion or whether the forces cancel.
    coherence_rules:
    - id: F_net_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que todas las fuerzas del DCL se hayan sumado sobre el mismo cuerpo y en el mismo marco.
        en: Check that all forces in the FBD were summed on the same body and in the same frame.
    physical_reading_rules:
    - id: F_net_physical
      when: 'true'
      status: info
      text:
        es: Si F_net es nula, ninguna interaccion externa esta causando cambio de velocidad; por eso el cuerpo conserva reposo o MRU.
        en: If F_net is zero, no external interaction is causing a velocity change; that is why the body keeps rest or uniform motion.
    model_validity_rules:
    - id: F_net_validity
      when: 'true'
      status: ok
      text:
        es: Esta lectura solo vale si el marco es inercial y no faltan fuerzas relevantes en el diagrama.
        en: This reading is valid only if the frame is inertial and no relevant forces are missing from the diagram.
    graph_rules:
    - id: F_net_graph
      when: 'true'
      status: info
      text:
        es: El grafico debe mostrar fuerzas individuales que pueden existir y aun asi compensarse.
        en: The graph must show individual forces that may exist and still cancel.
    likely_errors:
    - id: F_net_warn
      when: 'true'
      status: warning
      text:
        es: No confundas resultante nula con ausencia total de interacciones.
        en: Do not confuse zero resultant with complete absence of interactions.
    next_step_rules:
    - id: F_net_next
      when: 'true'
      status: info
      text:
        es: Tras leer F_net, revisa si eso obliga a concluir a = 0 y despues a interpretar v como constante.
        en: After reading F_net, check whether that forces the conclusion a = 0 and then interpret v as constant.
  a:
    summary_rules:
    - id: a_summary
      when: 'true'
      status: info
      text:
        es: a indica si el estado de movimiento esta cambiando o no.
        en: a indicates whether the state of motion is changing or not.
    coherence_rules:
    - id: a_coherence
      when: 'true'
      status: ok
      text:
        es: Si aparece a distinta de cero, la primera ley ya no basta y hay que pasar a la segunda ley.
        en: If a appears non-zero, the first law is no longer enough and one must move to the second law.
    physical_reading_rules:
    - id: a_physical
      when: 'true'
      status: info
      text:
        es: a = 0 significa que ninguna fuerza no compensada esta curvando o acelerando la trayectoria.
        en: a = 0 means that no uncompensated force is bending or accelerating the trajectory.
    model_validity_rules:
    - id: a_validity
      when: 'true'
      status: ok
      text:
        es: La conclusion a = 0 exige que el DCL este cerrado y que no se haya omitido una fuerza horizontal o vertical.
        en: The conclusion a = 0 requires a closed FBD with no omitted horizontal or vertical force.
    graph_rules:
    - id: a_graph
      when: 'true'
      status: info
      text:
        es: Si el grafico no dibuja aceleracion, debe ser porque la compensacion de fuerzas lo justifica.
        en: If the graph does not draw acceleration, it must be because the force balance justifies it.
    likely_errors:
    - id: a_warn
      when: 'true'
      status: warning
      text:
        es: No leas a = 0 como prueba de reposo; tambien puede haber velocidad constante.
        en: Do not read a = 0 as proof of rest; constant velocity is also possible.
    next_step_rules:
    - id: a_next
      when: 'true'
      status: info
      text:
        es: Una vez fijado a = 0, interpreta si v debe ser cero o simplemente mantenerse constante.
        en: Once a = 0 is fixed, interpret whether v must be zero or simply remain constant.
  v:
    summary_rules:
    - id: v_summary
      when: 'true'
      status: info
      text:
        es: v describe el estado cinematico que la inercia conserva cuando no hay resultante.
        en: v describes the kinematic state that inertia preserves when there is no resultant.
    coherence_rules:
    - id: v_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba si el problema habla de reposo o de MRU, porque ambos son compatibles con la primera ley.
        en: Check whether the problem describes rest or uniform motion, because both are compatible with the first law.
    physical_reading_rules:
    - id: v_physical
      when: 'true'
      status: info
      text:
        es: Si v permanece constante, la inercia explica la continuidad del movimiento sin necesidad de fuerza motriz.
        en: If v remains constant, inertia explains the continuity of motion without any driving force.
    model_validity_rules:
    - id: v_validity
      when: 'true'
      status: ok
      text:
        es: Esta lectura falla en cuanto aparece aceleracion medible o el marco deja de ser inercial.
        en: This reading fails as soon as measurable acceleration appears or the frame stops being inertial.
    graph_rules:
    - id: v_graph
      when: 'true'
      status: info
      text:
        es: El grafico debe sugerir continuidad del estado de movimiento aunque las flechas visibles sean solo fuerzas.
        en: The graph must suggest continuity of the motion state even if the visible arrows are only forces.
    likely_errors:
    - id: v_warn
      when: 'true'
      status: warning
      text:
        es: No dibujes una fuerza hacia donde apunta v solo porque el cuerpo se mueve en ese sentido.
        en: Do not draw a force in the direction of v just because the body moves that way.
    next_step_rules:
    - id: v_next
      when: 'true'
      status: info
      text:
        es: Si v deja de ser constante, el siguiente paso es abandonar este leaf y analizar F_net no nula.
        en: If v stops being constant, the next step is to leave this leaf and analyze a non-zero F_net.
`;export{e as default};
