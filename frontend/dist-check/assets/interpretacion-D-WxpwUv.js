const e=`version: 2
id: interpretacion-estrategia-para-problemas-de-rodadura
leaf_id: estrategia-para-problemas-de-rodadura
nombre:
  es: Interpretación de Estrategia para problemas de rodadura
  en: Interpretation of Strategy for Rolling Problems
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: rotacion
  parent_id: rodadura
  ruta_relativa: fisica-clasica/mecanica/rotacion/rodadura/estrategia-para-problemas-de-rodadura
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
    en: Interpretation
  priority_order:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
  inline_limits:
    max_messages: 3
dependencies:
  formulas:
  - aceleracion_rodadura_plano
  - energia_cinetica_total_rodadura
  - energia_mecanica_total_rodadura
  magnitudes:
  - a_cm
  - I
  - g
  - phi
  - E_total
  - K_total
global_context:
  physical_domain:
    es: Estrategia de resolución para sólidos rígidos que ruedan.
    en: Solution strategy for rigid bodies that roll.
  axis_convention:
    es: Fija primero el eje positivo y el sentido de avance.
    en: First fix the positive axis and direction of motion.
  standard_assumptions:
  - sólido rígido
  - contacto sin deslizamiento si se usa la restricción
  - unidades SI
  standard_warnings:
  - no usar energía si hay deslizamiento disipativo no modelado
  - no mezclar magnitudes lineales y angulares sin radio
result_blocks:
  summary:
    title:
      es: Resumen físico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura física
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
      es: Lectura gráfica
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
  a_cm:
    magnitude_type: scalar
    semantic_role:
      es: aceleración que permite comparar dinámica y energía en rodadura
      en: acceleration used to compare dynamics and energy in rolling
    summary_rules:
    - id: a_cm_summary_strategy
      when: 'true'
      status: info
      text:
        es: "La aceleración del centro de masas resume la elección de método: si depende de I, m, R, g y phi, el problema combina traslación, giro y contacto."
        en: "The center-of-mass acceleration summarizes the method choice: if it depends on I, m, R, g, and phi, the problem combines translation, rotation, and contact."
    physical_reading_rules:
    - id: a_cm_physical_strategy
      when: 'true'
      status: info
      text:
        es: "a_cm aumenta cuando la componente de g sobre el plano domina y disminuye cuando I exige más energía para producir la misma rotación."
        en: "a_cm increases when the component of g along the plane dominates and decreases when I requires more energy to produce the same rotation."
    coherence_rules:
    - id: a_cm_coherence_strategy
      when: 'true'
      status: info
      text:
        es: "Comprueba que a_cm sea compatible con alpha mediante el radio y que el signo coincida con la convención del plano."
        en: "Check that a_cm is compatible with alpha through the radius and that the sign matches the incline convention."
    model_validity_rules:
    - id: a_cm_model_strategy
      when: 'true'
      status: warning
      text:
        es: "Si el contacto desliza o el rozamiento requerido supera el límite estático, conviene cambiar de modelo antes de aceptar a_cm."
        en: "If contact slips or required friction exceeds the static limit, switch models before accepting a_cm."
    graph_rules:
    - id: a_cm_graph_strategy
      when: 'true'
      status: info
      text:
        es: "En el Coord, a_cm debe variar de forma continua con phi y con el reparto energético definido por K_total."
        en: "In the Coord graph, a_cm must vary continuously with phi and with the energy split defined by K_total."
    likely_errors:
    - id: a_cm_error_strategy
      when: 'true'
      status: warning
      text:
        es: "Error probable: elegir la fórmula antes de decidir si el enunciado pide fuerzas, energía, torque o conservación."
        en: "Likely error: choosing the formula before deciding whether the statement asks for forces, energy, torque, or conservation."
    next_step_rules:
    - id: a_cm_next_strategy
      when: 'true'
      status: info
      text:
        es: "El siguiente paso es contrastar el resultado con E_total y K_total para decidir si el método energético cerraba el problema."
        en: "The next step is to compare the result with E_total and K_total to decide whether the energy method closed the problem."
  K_total:
    magnitude_type: scalar
    semantic_role:
      es: energía cinética que reparte avance y giro
      en: kinetic energy split between translation and rotation
    summary_rules:
    - id: ktotal_summary
      when: 'true'
      status: info
      text:
        es: "K_total indica cuánta energía se reparte entre v_cm y omega; por eso decide si energía es un camino económico."
        en: "K_total indicates how much energy is split between v_cm and omega; therefore it decides whether energy is an efficient path."
    physical_reading_rules:
    - id: ktotal_physical
      when: 'true'
      status: info
      text:
        es: "Si I crece, una fracción mayor de K_total queda en rotación y el avance para la misma energía se reduce."
        en: "If I grows, a larger fraction of K_total remains in rotation and translation for the same energy decreases."
    coherence_rules:
    - id: ktotal_coherence
      when: 'true'
      status: info
      text:
        es: "K_total debe ser no negativa y tener unidades de energía."
        en: "K_total must be nonnegative and have units of energy."
    model_validity_rules:
    - id: ktotal_validity
      when: 'true'
      status: warning
      text:
        es: "Si hay pérdidas por deslizamiento, K_total no basta para reconstruir el balance mecánico."
        en: "If slipping losses occur, K_total is not enough to reconstruct the mechanical balance."
    graph_rules:
    - id: ktotal_graph
      when: 'true'
      status: info
      text:
        es: "El gráfico debe mostrar el reparto entre energía traslacional y rotacional, no solo el total."
        en: "The graph must show the split between translational and rotational energy, not only the total."
    likely_errors:
    - id: ktotal_error
      when: 'true'
      status: warning
      text:
        es: "Error probable: contar solo la energía traslacional y olvidar el término rotacional."
        en: "Likely error: counting only translational energy and forgetting the rotational term."
    next_step_rules:
    - id: ktotal_next
      when: 'true'
      status: info
      text:
        es: "Relaciona K_total con E_total para decidir si se conserva la energía mecánica."
        en: "Relate K_total to E_total to decide whether mechanical energy is conserved."
  E_total:
    magnitude_type: scalar
    semantic_role:
      es: balance mecánico que decide si conviene usar energía
      en: mechanical balance that decides whether energy is appropriate
    summary_rules:
    - id: etotal_summary
      when: 'true'
      status: info
      text:
        es: "E_total solo es una vía de resolución si el modelo no incluye pérdidas mecánicas relevantes."
        en: "E_total is a solution path only if the model has no relevant mechanical losses."
    physical_reading_rules:
    - id: etotal_physical
      when: 'true'
      status: info
      text:
        es: "Cuando E_total se conserva, la caída gravitatoria se reparte entre avance y giro."
        en: "When E_total is conserved, gravitational drop is split between advance and spin."
    coherence_rules:
    - id: etotal_coherence
      when: 'true'
      status: info
      text:
        es: "Declara siempre la referencia de energía potencial antes de interpretar E_total."
        en: "Always declare the potential-energy reference before interpreting E_total."
    model_validity_rules:
    - id: etotal_validity
      when: 'true'
      status: warning
      text:
        es: "Si hay deslizamiento, conviene cambiar de modelo porque E_total deja de ser constante."
        en: "If slipping occurs, switch models because E_total stops being constant."
    graph_rules:
    - id: etotal_graph
      when: 'true'
      status: info
      text:
        es: "El Coord debe mostrar si el balance energético coincide con la aceleración calculada."
        en: "The Coord graph must show whether the energy balance matches the computed acceleration."
    likely_errors:
    - id: etotal_error
      when: 'true'
      status: warning
      text:
        es: "Error probable: conservar E_total en una situación con pérdidas por rozamiento cinético."
        en: "Likely error: conserving E_total in a situation with kinetic-friction losses."
    next_step_rules:
    - id: etotal_next
      when: 'true'
      status: info
      text:
        es: "Contrasta E_total con el DCL para saber si falta una fuerza no conservativa."
        en: "Compare E_total with the FBD to see whether a nonconservative force is missing."
cross_checks: []
error_patterns: []
graph_binding:
  enabled: true
  preferred_type: Svg
mini_graph:
  enabled: true
  type: Svg
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
`;export{e as default};
