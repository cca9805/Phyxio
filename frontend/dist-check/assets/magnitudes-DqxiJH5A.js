const e=`version: 5
magnitudes:
  - id: P
    symbol: P
    nombre:
      es: potencia
      en: effort
    descripcion:
      es: Fuerza aplicada para accionar la palanca.
      en: Applied force used to operate the lever.
    unidad_si: N
    dimension: M L T^-2
    is_vector: false
    components: null
    category: state
    physical_role: input_force
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Confundir potencia con energía o con potencia eléctrica.
      en: Confusing effort with energy or electrical power.
    typical_range:
      es: 1 a 10^3 N en problemas escolares y técnicos básicos
      en: 1 to 10^3 N in school and basic technical problems
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como magnitud de fuerza aplicada.
        en: It is used as an applied-force magnitude.
    zero_behavior:
      allowed: true
      meaning:
        es: Si P es cero, no hay acción motriz sobre la palanca.
        en: If P is zero, there is no driving action on the lever.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: input_action
      secondary_for: equilibrium_requirement
    graph_binding:
      channels: [effort, force_arrow]
    pedagogical_notes:
      es: P debe leerse como fuerza de entrada, no como potencia temporal.
      en: P must be read as the input force, not as time power.

  - id: R
    symbol: R
    nombre:
      es: resistencia
      en: load
    descripcion:
      es: Fuerza que la palanca debe equilibrar o vencer.
      en: Force that the lever must balance or overcome.
    unidad_si: N
    dimension: M L T^-2
    is_vector: false
    components: null
    category: state
    physical_role: output_force
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Pensar que R siempre coincide con el peso total del objeto.
      en: Thinking that R always matches the full weight of the object.
    typical_range:
      es: 1 a 10^4 N
      en: 1 to 10^4 N
    sign_behavior:
      has_sign: false
      meaning:
        es: Se introduce como magnitud de la carga o resistencia.
        en: It is entered as the magnitude of the load or resistance.
    zero_behavior:
      allowed: true
      meaning:
        es: Si R es cero, no hay carga que equilibrar.
        en: If R is zero, there is no load to balance.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: demanded_action
      secondary_for: output_condition
    graph_binding:
      channels: [load, force_arrow]
    pedagogical_notes:
      es: R resume la fuerza resistente relevante respecto al apoyo.
      en: R summarizes the relevant resisting force about the fulcrum.

  - id: d_P
    symbol: d_P
    nombre:
      es: brazo de potencia
      en: effort arm
    descripcion:
      es: Distancia perpendicular desde el apoyo a la línea de acción de P.
      en: Perpendicular distance from the fulcrum to the line of action of P.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: lever_geometry
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Medir desde el extremo de la barra en vez de desde el fulcro.
      en: Measuring from the end of the bar instead of from the fulcrum.
    typical_range:
      es: 10^-2 a 10^1 m
      en: 10^-2 to 10^1 m
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como distancia positiva efectiva.
        en: It is used as a positive effective distance.
    zero_behavior:
      allowed: true
      meaning:
        es: Si d_P es cero, la potencia no genera momento útil.
        en: If d_P is zero, the effort generates no useful torque.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: input_arm
      secondary_for: mechanical_advantage
    graph_binding:
      channels: [effort_arm, geometry]
    pedagogical_notes:
      es: Un brazo mayor reduce la fuerza necesaria para equilibrar la misma carga.
      en: A larger arm reduces the force needed to balance the same load.

  - id: d_R
    symbol: d_R
    nombre:
      es: brazo de resistencia
      en: load arm
    descripcion:
      es: Distancia perpendicular desde el apoyo a la línea de acción de R.
      en: Perpendicular distance from the fulcrum to the line of action of R.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: lever_geometry
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Tomar como d_R la longitud total de la barra.
      en: Taking d_R to be the full bar length.
    typical_range:
      es: 10^-2 a 10^1 m
      en: 10^-2 to 10^1 m
    sign_behavior:
      has_sign: false
      meaning:
        es: Se interpreta como distancia positiva respecto al apoyo.
        en: It is interpreted as a positive distance with respect to the fulcrum.
    zero_behavior:
      allowed: true
      meaning:
        es: Si d_R es cero, la resistencia actúa sobre el apoyo y no genera momento.
        en: If d_R is zero, the load acts on the fulcrum and generates no torque.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: output_arm
      secondary_for: equilibrium_requirement
    graph_binding:
      channels: [load_arm, geometry]
    pedagogical_notes:
      es: Un brazo resistente grande exige más momento de entrada para equilibrar.
      en: A large load arm requires more input torque to balance.

  - id: VM
    symbol: VM
    nombre:
      es: ventaja mecánica ideal
      en: ideal mechanical advantage
    descripcion:
      es: Razón entre la carga equilibrada y la fuerza aplicada en el modelo ideal.
      en: Ratio between balanced load and applied force in the ideal model.
    unidad_si: 1
    dimension: 1
    is_vector: false
    components: null
    category: derived
    physical_role: model_parameter
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Creer que una palanca con VM mayor siempre es mejor para cualquier objetivo.
      en: Believing that a lever with larger VM is always better for every purpose.
    typical_range:
      es: 0.1 a 20 en dispositivos manuales habituales
      en: 0.1 to 20 in common manual devices
    sign_behavior:
      has_sign: false
      meaning:
        es: Se interpreta como razón positiva entre fuerzas o brazos.
        en: It is interpreted as a positive ratio between forces or arms.
    zero_behavior:
      allowed: true
      meaning:
        es: VM nula solo tendría sentido en un caso degenerado sin brazo útil.
        en: Zero VM would only make sense in a degenerate case with no useful arm.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: mechanical_advantage
      secondary_for: class_reading
    graph_binding:
      channels: [mechanical_advantage, reading]
    pedagogical_notes:
      es: VM no clasifica por sí sola el tipo de palanca, pero ayuda a interpretar su efecto.
      en: VM does not classify the lever type by itself, but it helps interpret its effect.

  - id: clase_palanca
    symbol: clase
    nombre:
      es: clase de palanca
      en: lever class
    descripcion:
      es: Orden espacial entre apoyo, potencia y resistencia.
      en: Spatial order among fulcrum, effort, and load.
    unidad_si: 1
    dimension: 1
    is_vector: false
    components: null
    category: state
    physical_role: configuration_label
    used_in: [theory, examples, graphs, interpretation]
    common_mistake:
      es: Clasificar usando el tamaño de los brazos en vez de la posición relativa de los elementos.
      en: Classifying by arm size instead of by the relative position of the elements.
    typical_range:
      es: 1 a 3
      en: 1 to 3
    sign_behavior:
      has_sign: false
      meaning:
        es: Es una etiqueta discreta, no una cantidad con signo.
        en: It is a discrete label, not a signed quantity.
    zero_behavior:
      allowed: false
      meaning:
        es: El tema trabaja con tres clases válidas, numeradas del 1 al 3.
        en: The leaf works with three valid classes numbered from 1 to 3.
    value_nature:
      kind: categorical
      nonnegative_only: true
      expected_interval: "[1, 3]"
    interpretation_role:
      primary_for: class_identification
      secondary_for: design_reading
    graph_binding:
      channels: [class_selector, layout]
    pedagogical_notes:
      es: La clase depende del orden apoyo-potencia-resistencia, no de la longitud absoluta.
      en: The class depends on the fulcrum-effort-load order, not on absolute length.
`;export{e as default};
