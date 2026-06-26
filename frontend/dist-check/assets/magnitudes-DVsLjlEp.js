const e=`version: 5
magnitudes:
  - id: P
    symbol: P
    nombre:
      es: potencia
      en: effort
    descripcion:
      es: Fuerza de entrada aplicada por el usuario o actuador.
      en: Input force applied by the user or actuator.
    unidad_si: N
    dimension: M L T^-2
    is_vector: false
    components: null
    category: state
    physical_role: input_force
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Confundir P con potencia energética o con presión.
      en: Confusing P with power or pressure.
    typical_range:
      es: 1 a 10^3 N en ejercicios y dispositivos manuales
      en: 1 to 10^3 N in exercises and manual devices
    sign_behavior:
      has_sign: false
      meaning:
        es: Se introduce como magnitud positiva de fuerza aplicada.
        en: It is entered as a positive applied-force magnitude.
    zero_behavior:
      allowed: true
      meaning:
        es: Si P es cero, no hay acción motriz sobre la máquina.
        en: If P is zero, there is no driving action on the machine.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: input_action
      secondary_for: force_requirement
    graph_binding:
      channels: [effort, force_curve]
    pedagogical_notes:
      es: P siempre se interpreta como fuerza de entrada, no como trabajo ni como energía.
      en: P is always interpreted as input force, not as work or energy.

  - id: R
    symbol: R
    nombre:
      es: resistencia
      en: load
    descripcion:
      es: Fuerza resistente o carga que la máquina debe equilibrar o vencer.
      en: Resisting force or load that the machine must balance or overcome.
    unidad_si: N
    dimension: M L T^-2
    is_vector: false
    components: null
    category: state
    physical_role: output_force
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Tratar R como una masa en lugar de como una fuerza.
      en: Treating R as a mass instead of as a force.
    typical_range:
      es: 1 a 10^4 N
      en: 1 to 10^4 N
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como magnitud positiva de la carga relevante.
        en: It is used as the positive magnitude of the relevant load.
    zero_behavior:
      allowed: true
      meaning:
        es: Si R es cero, no hay carga que sostener o desplazar.
        en: If R is zero, there is no load to sustain or move.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: demanded_action
      secondary_for: output_condition
    graph_binding:
      channels: [load, x_axis]
    pedagogical_notes:
      es: Antes de calcular, conviene expresar R ya en newtons.
      en: Before calculating, it is useful to express R directly in newtons.

  - id: d_P
    symbol: d_P
    nombre:
      es: brazo de potencia
      en: effort arm
    descripcion:
      es: Distancia efectiva desde el apoyo hasta la línea de acción de P.
      en: Effective distance from the fulcrum to the line of action of P.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: lever_geometry
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Medir la longitud total de la barra en vez del brazo efectivo.
      en: Measuring the full bar length instead of the effective arm.
    typical_range:
      es: 10^-2 a 10^1 m
      en: 10^-2 to 10^1 m
    sign_behavior:
      has_sign: false
      meaning:
        es: Es una distancia geométrica no negativa.
        en: It is a non-negative geometric distance.
    zero_behavior:
      allowed: true
      meaning:
        es: Si d_P es cero, la fuerza de entrada no produce momento útil.
        en: If d_P is zero, the input force produces no useful torque.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: input_arm
      secondary_for: geometric_advantage
    graph_binding:
      channels: [geometry, parameter]
    pedagogical_notes:
      es: A mayor d_P, menor fuerza suele requerirse para la misma carga ideal.
      en: The larger d_P is, the smaller the required ideal effort tends to be.

  - id: d_R
    symbol: d_R
    nombre:
      es: brazo de resistencia
      en: load arm
    descripcion:
      es: Distancia efectiva desde el apoyo hasta la línea de acción de R.
      en: Effective distance from the fulcrum to the line of action of R.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometric
    physical_role: lever_geometry
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Tomar d_R desde el extremo de la barra y no desde el apoyo.
      en: Taking d_R from the bar end instead of from the fulcrum.
    typical_range:
      es: 10^-2 a 10^1 m
      en: 10^-2 to 10^1 m
    sign_behavior:
      has_sign: false
      meaning:
        es: Se interpreta como distancia geométrica positiva o nula.
        en: It is interpreted as a positive or zero geometric distance.
    zero_behavior:
      allowed: true
      meaning:
        es: Si d_R es cero, la carga actúa sobre el apoyo y no genera momento.
        en: If d_R is zero, the load acts on the fulcrum and generates no torque.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: output_arm
      secondary_for: equilibrium_requirement
    graph_binding:
      channels: [geometry, parameter]
    pedagogical_notes:
      es: Un d_R grande hace más exigente la tarea para la misma P.
      en: A large d_R makes the task more demanding for the same P.

  - id: VM
    symbol: VM
    nombre:
      es: ventaja mecánica ideal
      en: ideal mechanical advantage
    descripcion:
      es: Razón geométrica ideal que compara el brazo de entrada con el de salida.
      en: Ideal geometric ratio comparing the input arm with the output arm.
    unidad_si: 1
    dimension: 1
    is_vector: false
    components: null
    category: derived
    physical_role: model_parameter
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Pensar que VM incluye automáticamente pérdidas reales.
      en: Thinking that VM automatically includes real losses.
    typical_range:
      es: 0.1 a 50 según la geometría del sistema
      en: 0.1 to 50 depending on system geometry
    sign_behavior:
      has_sign: false
      meaning:
        es: Es una razón positiva sin dirección propia.
        en: It is a positive ratio with no intrinsic direction.
    zero_behavior:
      allowed: true
      meaning:
        es: VM solo puede anularse en un caso degenerado sin brazo útil.
        en: VM can be zero only in a degenerate case with no useful arm.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: mechanical_advantage
      secondary_for: design_reading
    graph_binding:
      channels: [mechanical_advantage, curve]
    pedagogical_notes:
      es: VM mide ayuda geométrica ideal, no garantía de rendimiento real.
      en: VM measures ideal geometric help, not guaranteed real performance.

  - id: VM_r
    symbol: VM_r
    nombre:
      es: ventaja mecánica real
      en: real mechanical advantage
    descripcion:
      es: Razón efectiva entre carga vencida y fuerza de entrada realmente aplicada.
      en: Effective ratio between overcome load and actually applied input force.
    unidad_si: 1
    dimension: 1
    is_vector: false
    components: null
    category: derived
    physical_role: performance_metric
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Suponer que VM_r debe coincidir siempre con VM.
      en: Assuming that VM_r must always match VM.
    typical_range:
      es: 0.1 a 40 en máquinas reales sencillas
      en: 0.1 to 40 in simple real machines
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como razón positiva entre fuerzas medidas.
        en: It is used as a positive ratio between measured forces.
    zero_behavior:
      allowed: true
      meaning:
        es: VM_r nula indica que no se obtiene carga útil pese a aplicar esfuerzo.
        en: Zero VM_r indicates that no useful load is obtained despite applied effort.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: real_performance
      secondary_for: efficiency_reading
    graph_binding:
      channels: [summary]
    pedagogical_notes:
      es: VM_r se obtiene con fuerzas reales y por eso refleja pérdidas del sistema.
      en: VM_r is obtained from real forces and therefore reflects system losses.

  - id: eta
    symbol: \\eta
    nombre:
      es: eficiencia mecánica
      en: mechanical efficiency
    descripcion:
      es: Fracción del desempeño ideal que el sistema conserva en condiciones reales.
      en: Fraction of ideal performance that the real system preserves.
    unidad_si: 1
    dimension: 1
    is_vector: false
    components: null
    category: derived
    physical_role: model_parameter
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Aceptar valores de eficiencia mayores que 1 sin revisar datos.
      en: Accepting efficiency values greater than 1 without checking the data.
    typical_range:
      es: 0 a 1 en el modelo físico ordinario
      en: 0 to 1 in the ordinary physical model
    sign_behavior:
      has_sign: false
      meaning:
        es: Es una razón positiva y acotada en el modelo habitual.
        en: It is a positive bounded ratio in the standard model.
    zero_behavior:
      allowed: true
      meaning:
        es: Eta igual a cero implica pérdida total de desempeño útil.
        en: Eta equal to zero implies total loss of useful performance.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, 1]"
    interpretation_role:
      primary_for: efficiency
      secondary_for: loss_assessment
    graph_binding:
      channels: [summary]
    pedagogical_notes:
      es: La eficiencia compara lo real con lo ideal y nunca crea ventaja extra.
      en: Efficiency compares the real system with the ideal one and never creates extra advantage.
`;export{e as default};
