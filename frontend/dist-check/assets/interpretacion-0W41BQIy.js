const e=`version: 5
id: interpretacion-sobre-conductores
leaf_id: sobre-conductores
nombre:
  es: "Interpretacion de fuerza magnetica sobre conductores"
  en: "Interpretation of magnetic force on conductors"
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: magnetismo
  parent_id: fuerzas-magneticas
  ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/fuerzas-magneticas/sobre-conductores
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
    - fuerza_conductor_recto
    - fuerza_por_unidad_longitud
  magnitudes:
    - F_B
    - I
    - L
    - B
    - s_theta
    - f_L
global_context:
  physical_domain:
    es: "Conductores con corriente en campos magneticos externos aproximadamente uniformes."
    en: "Current-carrying conductors in approximately uniform external magnetic fields."
  axis_convention:
    es: "El sentido se obtiene con la regla de la mano derecha aplicada al sentido convencional de la corriente y al campo."
    en: "Direction is obtained with the right-hand rule applied to conventional current direction and field."
  standard_assumptions:
    - "Tramo conductor recto."
    - "Campo uniforme en la longitud efectiva."
    - "Corriente estacionaria durante la estimacion."
  standard_warnings:
    - "La fuerza no apunta a lo largo del conductor."
    - "No usar longitud fuera de la zona de campo."
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
      es: "Mide el empuje magnetico total sobre el tramo conductor."
      en: "Measures the total magnetic push on the conductor segment."
    summary_rules:
      - id: fb_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_B]] indica la fuerza total sobre el conductor: aumenta con [[I]], [[L]], [[B]] y [[s_theta]]."
          en: "[[F_B]] indicates total force on the conductor: it increases with [[I]], [[L]], [[B]], and [[s_theta]]."
    physical_reading_rules:
      - id: fb_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[F_B]] mayor significa mayor accion mecanica lateral sobre el tramo, no una fuerza paralela a la corriente."
          en: "A larger [[F_B]] means stronger lateral mechanical action on the segment, not a force parallel to current."
    coherence_rules:
      - id: fb_coherence_zero
        when: "F_B == 0 || I == 0 || L == 0 || B == 0 || s_theta == 0"
        status: warning
        text:
          es: "Resultado nulo coherente si no hay corriente, campo, longitud efectiva o componente perpendicular."
          en: "A zero result is coherent if current, field, effective length, or perpendicular component is absent."
      - id: fb_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[F_B]] debe ser no negativa cuando se calcula como modulo de fuerza."
          en: "[[F_B]] must be nonnegative when calculated as a force magnitude."
    model_validity_rules:
      - id: fb_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura vale si el tramo es recto, el campo es uniforme y la longitud usada esta dentro de la zona magnetica."
          en: "The reading holds if the segment is straight, the field is uniform, and the length used lies inside the magnetic region."
    graph_rules:
      - id: fb_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico Coord, [[F_B]] crece linealmente con [[I]] si [[L]], [[B]] y [[s_theta]] permanecen fijos."
          en: "In the Coord graph, [[F_B]] grows linearly with [[I]] if [[L]], [[B]], and [[s_theta]] remain fixed."
    likely_errors:
      - id: fb_error_direction
        when: "true"
        status: warning
        text:
          es: "Error tipico: dibujar [[F_B]] paralela al cable en vez de perpendicular al plano definido por corriente y campo."
          en: "Typical mistake: drawing [[F_B]] parallel to the wire instead of perpendicular to the plane defined by current and field."
    next_step_rules:
      - id: fb_next_default
        when: "true"
        status: ok
        text:
          es: "Tras calcular [[F_B]], revisa el sentido de [[I]] y la orientacion de [[B]] para decidir hacia donde se mueve el conductor."
          en: "After calculating [[F_B]], check the direction of [[I]] and orientation of [[B]] to decide where the conductor moves."

  f_L:
    magnitude_type: linear_force_density
    semantic_role:
      es: "Mide la fuerza magnetica distribuida por unidad de longitud."
      en: "Measures magnetic force distributed per unit length."
    summary_rules:
      - id: fl_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_L]] resume la carga mecanica lineal: depende de [[I]], [[B]] y [[s_theta]], sin incluir [[L]]."
          en: "[[f_L]] summarizes linear mechanical load: it depends on [[I]], [[B]], and [[s_theta]], without including [[L]]."
    physical_reading_rules:
      - id: fl_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[f_L]] alto indica que cada metro de conductor soporta una fuerza magnetica intensa."
          en: "A high [[f_L]] indicates that each metre of conductor carries a strong magnetic force."
    coherence_rules:
      - id: fl_coherence_zero
        when: "f_L == 0 || I == 0 || B == 0 || s_theta == 0"
        status: warning
        text:
          es: "La fuerza por longitud se anula si falta corriente, campo o orientacion perpendicular."
          en: "Force per length vanishes if current, field, or perpendicular orientation is absent."
      - id: fl_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[f_L]] debe ser no negativa cuando se interpreta como modulo distribuido."
          en: "[[f_L]] must be nonnegative when interpreted as a distributed magnitude."
    model_validity_rules:
      - id: fl_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura por unidad de longitud es fiable si corriente y campo son aproximadamente uniformes sobre el tramo."
          en: "The per-length reading is reliable if current and field are approximately uniform along the segment."
    graph_rules:
      - id: fl_graph_default
        when: "true"
        status: ok
        text:
          es: "[[f_L]] se interpreta como pendiente normalizada respecto a la longitud efectiva."
          en: "[[f_L]] is interpreted as slope normalized with respect to effective length."
    likely_errors:
      - id: fl_error_total
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[f_L]] como si ya fuera la fuerza total [[F_B]]."
          en: "Frequent error: using [[f_L]] as if it were already the total force [[F_B]]."
    next_step_rules:
      - id: fl_next_default
        when: "true"
        status: ok
        text:
          es: "Multiplica mentalmente la lectura por la longitud efectiva para estimar la accion mecanica total."
          en: "Mentally scale the reading by effective length to estimate total mechanical action."
cross_checks:
  - id: total_density_consistency
    condition: "F_B >= 0 && f_L >= 0"
    message:
      es: "Fuerza total y fuerza por longitud deben tener modulos no negativos."
      en: "Total force and force per length must have nonnegative magnitudes."
error_patterns:
  - id: length_confusion
    description:
      es: "Confundir longitud total del cable con longitud efectiva dentro del campo."
      en: "Confusing total wire length with effective length inside the field."
graph_binding:
  enabled: true
  preferred: Coord
  contracts:
    - Coord
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
