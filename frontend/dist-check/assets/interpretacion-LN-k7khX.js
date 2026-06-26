const e=`version: 5
id: interpretacion-sobre-cargas-en-movimiento
leaf_id: sobre-cargas-en-movimiento
nombre:
  es: "Interpretacion de fuerza magnetica sobre cargas moviles"
  en: "Interpretation of magnetic force on moving charges"
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: magnetismo
  parent_id: fuerzas-magneticas
  ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/fuerzas-magneticas/sobre-cargas-en-movimiento
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: true
  labels:
    es: Interpretacion
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
    max_sections: 2
    max_messages: 2
dependencies:
  formulas:
    - fuerza_magnetica_lorentz
    - aceleracion_centripeta_magnetica
    - radio_trayectoria_circular
  magnitudes:
    - F_B
    - q
    - v
    - B
    - s_theta
    - m
    - a_c
    - r
global_context:
  physical_domain:
    es: "Movimiento clasico de cargas puntuales en campos magneticos dados."
    en: "Classical motion of point charges in prescribed magnetic fields."
  axis_convention:
    es: "La direccion de la fuerza se lee con la regla de la mano derecha para carga positiva y se invierte si la carga es negativa."
    en: "Force direction is read with the right-hand rule for positive charge and reverses for negative charge."
  standard_assumptions:
    - "Campo magnetico localmente uniforme."
    - "Rapidez no relativista."
    - "Perdidas por radiacion despreciables."
    - "Colisiones y campos electricos externos no dominan."
  standard_warnings:
    - "El modulo no sustituye a la direccion vectorial."
    - "La fuerza magnetica perpendicular no realiza trabajo mecanico ideal."
result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step
targets:
  F_B:
    magnitude_type: force
    semantic_role:
      es: "Mide la intensidad de la desviacion magnetica sobre la carga movil."
      en: "Measures the strength of magnetic deflection on the moving charge."
    summary_rules:
      - id: fb_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_B]] indica cuanto domina la interaccion magnetica sobre la trayectoria: aumenta con [[q]], [[v]], [[B]] y [[s_theta]]."
          en: "[[F_B]] indicates how strongly magnetic interaction dominates the path: it increases with [[q]], [[v]], [[B]], and [[s_theta]]."
    physical_reading_rules:
      - id: fb_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[F_B]] mayor no significa empuje en la direccion de avance; significa mayor tendencia a girar la direccion de [[v]]."
          en: "A larger [[F_B]] does not mean push along motion; it means stronger tendency to turn the direction of [[v]]."
    coherence_rules:
      - id: fb_coherence_zero
        when: "F_B == 0 || q == 0 || v == 0 || B == 0 || s_theta == 0"
        status: warning
        text:
          es: "Resultado nulo coherente si falta carga, movimiento, campo o componente perpendicular."
          en: "A zero result is coherent if charge, motion, field, or perpendicular component is absent."
      - id: fb_coherence_default
        when: "true"
        status: ok
        text:
          es: "Con entradas positivas y [[s_theta]] dentro del intervalo fisico, el modulo de [[F_B]] debe ser no negativo."
          en: "With positive inputs and [[s_theta]] in its physical interval, [[F_B]] must be nonnegative."
    model_validity_rules:
      - id: fb_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura vale si el campo es localmente uniforme y la dinamica no relativista describe bien la particula."
          en: "The reading holds if the field is locally uniform and nonrelativistic dynamics describes the particle well."
    graph_rules:
      - id: fb_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico Coord, [[F_B]] sube linealmente con [[v]] cuando [[q]], [[B]] y [[s_theta]] permanecen fijos."
          en: "In the Coord graph, [[F_B]] rises linearly with [[v]] when [[q]], [[B]], and [[s_theta]] remain fixed."
    likely_errors:
      - id: fb_error_direction
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar el valor de [[F_B]] como si apuntara en la direccion de [[B]] o de [[v]]."
          en: "Typical mistake: using [[F_B]] as if it pointed along [[B]] or [[v]]."
    next_step_rules:
      - id: fb_next_default
        when: "true"
        status: ok
        text:
          es: "Despues de estimar [[F_B]], revisa el signo de [[q]] para decidir el sentido vectorial de la desviacion."
          en: "After estimating [[F_B]], inspect the sign of [[q]] to decide the vector direction of deflection."

  a_c:
    magnitude_type: acceleration
    semantic_role:
      es: "Traduce la fuerza magnetica a cambio de direccion de la trayectoria."
      en: "Translates magnetic force into change of trajectory direction."
    summary_rules:
      - id: ac_summary_default
        when: "true"
        status: ok
        text:
          es: "[[a_c]] describe cuanto aumenta la curvatura dinamica: depende de [[F_B]] y disminuye al crecer [[m]]."
          en: "[[a_c]] describes how dynamic curvature increases: it depends on [[F_B]] and decreases as [[m]] grows."
    physical_reading_rules:
      - id: ac_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[a_c]] grande significa giro rapido de la direccion de movimiento, no necesariamente aumento de rapidez."
          en: "A large [[a_c]] means rapid turning of the motion direction, not necessarily an increase in speed."
    coherence_rules:
      - id: ac_coherence_mass
        when: "m <= 0"
        status: error
        text:
          es: "La masa debe ser positiva; con [[m]] no positiva el modelo no tiene lectura mecanica clasica."
          en: "Mass must be positive; with nonpositive [[m]] the model has no classical mechanical reading."
      - id: ac_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[a_c]] debe ser no negativa si [[F_B]] se introduce como modulo de fuerza."
          en: "[[a_c]] must be nonnegative if [[F_B]] is entered as a force magnitude."
    model_validity_rules:
      - id: ac_validity_default
        when: "true"
        status: ok
        text:
          es: "La interpretacion es fiable si la fuerza magnetica domina sobre colisiones, rozamiento y campos electricos externos."
          en: "The interpretation is reliable if magnetic force dominates collisions, drag, and external electric fields."
    graph_rules:
      - id: ac_graph_default
        when: "true"
        status: ok
        text:
          es: "La vista grafica debe leerse como curvatura creciente cuando [[a_c]] aumenta para una rapidez comparable."
          en: "The graph view should be read as increasing curvature when [[a_c]] grows for comparable speed."
    likely_errors:
      - id: ac_error_speed
        when: "true"
        status: warning
        text:
          es: "Error probable: interpretar [[a_c]] como aceleracion tangencial que aumenta la energia cinetica."
          en: "Likely error: interpreting [[a_c]] as tangential acceleration that increases kinetic energy."
    next_step_rules:
      - id: ac_next_default
        when: "true"
        status: ok
        text:
          es: "Relaciona [[a_c]] con [[r]] para convertir la lectura dinamica en forma visible de trayectoria."
          en: "Relate [[a_c]] to [[r]] to convert the dynamic reading into a visible path shape."

  r:
    magnitude_type: length
    semantic_role:
      es: "Resume la curvatura circular producida por campo magnetico uniforme."
      en: "Summarizes circular curvature produced by a uniform magnetic field."
    summary_rules:
      - id: r_summary_default
        when: "true"
        status: ok
        text:
          es: "[[r]] resume el balance entre inercia y campo: aumenta con [[m]] y [[v]], disminuye con [[q]] y [[B]]."
          en: "[[r]] summarizes the balance between inertia and field: it increases with [[m]] and [[v]], and decreases with [[q]] and [[B]]."
    physical_reading_rules:
      - id: r_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[r]] grande indica desviacion suave; un [[r]] pequeno indica que el campo curva la particula con eficacia."
          en: "A large [[r]] indicates gentle deflection; a small [[r]] indicates that the field bends the particle effectively."
    coherence_rules:
      - id: r_coherence_field
        when: "q == 0 || B == 0"
        status: error
        text:
          es: "Sin carga o sin campo no hay radio circular magnetico finito."
          en: "Without charge or field there is no finite magnetic circular radius."
      - id: r_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[r]] debe ser positivo cuando [[m]], [[v]], [[q]] y [[B]] representan modulos fisicos."
          en: "[[r]] must be positive when [[m]], [[v]], [[q]], and [[B]] represent physical magnitudes."
    model_validity_rules:
      - id: r_validity_default
        when: "true"
        status: ok
        text:
          es: "El radio circular presupone movimiento perpendicular al campo, campo uniforme y ausencia de perdidas significativas."
          en: "Circular radius assumes motion perpendicular to the field, uniform field, and no significant losses."
    graph_rules:
      - id: r_graph_default
        when: "true"
        status: ok
        text:
          es: "En el SVG, [[r]] se lee como apertura de la trayectoria; radios mayores parecen curvas mas suaves."
          en: "In the SVG, [[r]] is read as path opening; larger radii look like gentler curves."
    likely_errors:
      - id: r_error_dependence
        when: "true"
        status: warning
        text:
          es: "Error comun: pensar que aumentar [[v]] siempre cierra la curva; en este modelo aumenta [[r]]."
          en: "Common mistake: thinking that increasing [[v]] always tightens the curve; in this model it increases [[r]]."
    next_step_rules:
      - id: r_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[r]] entre particulas para inferir relacion carga masa en espectrometria magnetica."
          en: "Compare [[r]] between particles to infer charge-to-mass relation in magnetic spectrometry."
cross_checks:
  - id: force_radius_consistency
    condition: "F_B >= 0 && r > 0"
    message:
      es: "Fuerza no negativa y radio positivo son lecturas compatibles del mismo movimiento circular."
      en: "Nonnegative force and positive radius are compatible readings of the same circular motion."
error_patterns:
  - id: sign_as_magnitude
    description:
      es: "Confundir signo de carga con valor negativo de fuerza o radio."
      en: "Confusing charge sign with negative force or radius value."
graph_binding:
  enabled: true
  preferred: Coord
  contracts:
    - Coord
    - Svg
mini_graph:
  enabled: true
  type: Coord
  target: F_B
output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
