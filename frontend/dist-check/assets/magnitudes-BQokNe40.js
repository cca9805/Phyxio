const e=`version: 5
magnitudes:
  - id: r
    symbol: r
    nombre:
      es: distancia radial
      en: radial distance
    descripcion:
      es: Distancia desde el eje hasta el punto donde se aplica la fuerza.
      en: Distance from the axis to the point where the force is applied.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: state
    physical_role: geometric_parameter
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Confundir r con el brazo perpendicular cuando la fuerza es oblicua.
      en: Confusing r with the perpendicular arm when the force is oblique.
    typical_range:
      es: 10^-2 a 10^1 m
      en: 10^-2 to 10^1 m
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como distancia positiva medida desde el eje.
        en: It is used as a positive distance measured from the axis.
    zero_behavior:
      allowed: true
      meaning:
        es: Si r vale cero, la fuerza pasa por el eje y no produce momento.
        en: If r is zero, the force passes through the axis and produces no torque.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: geometry_to_axis
      secondary_for: effective_arm
    graph_binding:
      channels: [radius, geometry]
    pedagogical_notes:
      es: r no decide por sí sola el momento; también importa el ángulo.
      en: r alone does not determine torque; the angle also matters.

  - id: F
    symbol: F
    nombre:
      es: fuerza aplicada
      en: applied force
    descripcion:
      es: Intensidad de la fuerza que actúa sobre el cuerpo respecto al eje estudiado.
      en: Magnitude of the force acting on the body with respect to the studied axis.
    unidad_si: N
    dimension: M L T^-2
    is_vector: false
    components: null
    category: state
    physical_role: external_force
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Pensar que una fuerza grande siempre produce un gran momento.
      en: Thinking that a large force always produces a large torque.
    typical_range:
      es: 10^-1 a 10^5 N
      en: 10^-1 to 10^5 N
    sign_behavior:
      has_sign: false
      meaning:
        es: Se introduce como magnitud; el sentido de giro se interpreta aparte.
        en: It is entered as a magnitude; rotation sense is interpreted separately.
    zero_behavior:
      allowed: true
      meaning:
        es: Si F vale cero, desaparece el efecto rotacional de la fuerza.
        en: If F is zero, the rotational effect of the force disappears.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: torque_source
      secondary_for: loading_level
    graph_binding:
      channels: [force, torque_curve]
    pedagogical_notes:
      es: El momento depende de F y de cómo se aplica, no solo de su tamaño.
      en: Torque depends on F and on how it is applied, not only on its size.

  - id: theta
    symbol: theta
    nombre:
      es: ángulo de aplicación
      en: application angle
    descripcion:
      es: Ángulo entre la fuerza aplicada y la dirección radial medida desde el eje.
      en: Angle between the applied force and the radial direction measured from the axis.
    unidad_si: rad
    dimension: 1
    is_vector: false
    components: null
    category: state
    physical_role: geometric_parameter
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Usar el ángulo con la horizontal en vez del ángulo relativo al radio.
      en: Using the angle to the horizontal instead of the angle relative to the radius.
    typical_range:
      es: 0 a pi rad
      en: 0 to pi rad
    sign_behavior:
      has_sign: false
      meaning:
        es: El momento depende del seno del ángulo y, por tanto, del brazo efectivo.
        en: Torque depends on the sine of the angle and therefore on the effective arm.
    zero_behavior:
      allowed: true
      meaning:
        es: Si theta vale cero o pi, la fuerza no produce momento.
        en: If theta is zero or pi, the force produces no torque.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, pi]"
    interpretation_role:
      primary_for: angular_effectiveness
      secondary_for: effective_arm
    graph_binding:
      channels: [angle, torque_curve]
    pedagogical_notes:
      es: El máximo momento aparece cuando la fuerza es perpendicular al radio.
      en: Maximum torque appears when the force is perpendicular to the radius.

  - id: d_perp
    symbol: d_perp
    nombre:
      es: brazo perpendicular
      en: perpendicular lever arm
    descripcion:
      es: Distancia mínima entre el eje y la línea de acción de la fuerza.
      en: Minimum distance between the axis and the line of action of the force.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: derived
    physical_role: effective_geometry
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Sustituir d_perp por r aunque la fuerza no sea perpendicular.
      en: Replacing d_perp by r even when the force is not perpendicular.
    typical_range:
      es: 0 a 10^1 m
      en: 0 to 10^1 m
    sign_behavior:
      has_sign: false
      meaning:
        es: Se interpreta como distancia geométrica positiva.
        en: It is interpreted as a positive geometric distance.
    zero_behavior:
      allowed: true
      meaning:
        es: Si d_perp vale cero, la fuerza no tiene brazo y el momento es nulo.
        en: If d_perp is zero, the force has no arm and the torque is zero.
    value_nature:
      kind: scalar_nonnegative
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for: lever_arm
      secondary_for: moment_efficiency
    graph_binding:
      channels: [lever_arm, geometry]
    pedagogical_notes:
      es: Es la distancia realmente relevante para medir capacidad de giro.
      en: It is the truly relevant distance for measuring turning capability.

  - id: tau
    symbol: tau
    nombre:
      es: momento de la fuerza
      en: torque of the force
    descripcion:
      es: Magnitud que mide la tendencia de una fuerza a producir rotación respecto a un eje.
      en: Magnitude that measures the tendency of a force to produce rotation about an axis.
    unidad_si: N·m
    dimension: M L^2 T^-2
    is_vector: false
    components: null
    category: result
    physical_role: rotational_effect
    used_in: [formulas, theory, examples, calculator]
    common_mistake:
      es: Confundir el momento con la fuerza o ignorar el brazo perpendicular.
      en: Confusing torque with force or ignoring the perpendicular arm.
    typical_range:
      es: 0 a 10^4 N·m en problemas introductorios y técnicos simples
      en: 0 to 10^4 N·m in introductory and simple technical problems
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica el sentido de giro según el convenio elegido.
        en: The sign indicates the rotation sense according to the chosen convention.
    zero_behavior:
      allowed: true
      meaning:
        es: Si tau vale cero, la fuerza no produce tendencia de giro respecto a ese eje.
        en: If tau is zero, the force produces no turning tendency about that axis.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-inf, +inf)"
    interpretation_role:
      primary_for: rotational_tendency
      secondary_for: equilibrium_preparation
    graph_binding:
      channels: [tau_curve, current_torque]
    pedagogical_notes:
      es: "Es la variable central del leaf: resume fuerza, geometría y ángulo."
      en: "It is the central variable of the leaf: it summarizes force, geometry, and angle."
`;export{e as default};
