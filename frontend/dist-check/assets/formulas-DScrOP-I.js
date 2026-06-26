const e=`version: 5
formulas:
  - id: torque_perpendicular_definition
    title:
      es: definición con brazo perpendicular
      en: definition with perpendicular arm
    equation: tau = F*d_perp
    latex: \\tau = F d_{\\perp}
    rearrangements:
      - target: tau
        equation: tau = F*d_perp
        latex: \\tau = F d_{\\perp}
    category: definition
    relation_type: rotational_effect
    physical_meaning:
      es: El momento crece con la fuerza y con la distancia perpendicular al eje.
      en: Torque grows with force and with the perpendicular distance to the axis.
    constraints:
      - expr: F >= 0
        message:
          es: La fuerza debe introducirse como magnitud no negativa.
          en: Force must be entered as a non-negative magnitude.
      - expr: d_perp >= 0
        message:
          es: El brazo perpendicular debe ser no negativo.
          en: The perpendicular arm must be non-negative.
    validity:
      es: Válida cuando d_perp se conoce directamente o puede medirse sin ambigüedad.
      en: Valid when d_perp is directly known or can be measured without ambiguity.
    dimension_check:
      es: M L^2 T^-2
      en: M L^2 T^-2
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [torque, lever_arm, direct_definition]
    result_semantics:
      target: tau
      kind: scalar_signed
      sign_meaning:
        es: El signo final depende del convenio de giro adoptado.
        en: The final sign depends on the adopted rotation convention.
      absolute_value_meaning:
        es: El módulo mide la intensidad de la tendencia a girar.
        en: The magnitude measures the intensity of the turning tendency.
    domain_checks:
      - expr: F >= 0 && d_perp >= 0
        message:
          es: Fuerza y brazo deben corresponder a magnitudes físicas admisibles.
          en: Force and arm must correspond to physically admissible magnitudes.
    coherence_checks:
      - expr: "d_perp == 0 ? abs(tau) < 1e-9 : true"
        severity: ok
        message:
          es: Si no hay brazo perpendicular, el momento debe anularse.
          en: If there is no perpendicular arm, the torque must vanish.
    graph_implications:
      - channel: current_torque
        message:
          es: Al aumentar F o d_perp, la lectura de tau debe crecer.
          en: When F or d_perp increases, the tau reading should increase.
    pedagogical_triggers:
      - detect_when: d_perp == 0 && abs(tau) > 1e-9
        message:
          es: "Revisa el brazo: si la línea de acción pasa por el eje, el momento es cero."
          en: "Check the arm: if the line of action passes through the axis, torque is zero."

  - id: torque_trigonometric_definition
    title:
      es: definición trigonométrica
      en: trigonometric definition
    equation: tau = r*F*sin(theta)
    latex: \\tau = r F \\sin(\\theta)
    rearrangements:
      - target: tau
        equation: tau = r*F*sin(theta)
        latex: \\tau = r F \\sin(\\theta)
    category: definition
    relation_type: geometric_interpretation
    physical_meaning:
      es: El momento depende de la fuerza, de la distancia al eje y del ángulo de aplicación.
      en: Torque depends on force, distance to the axis, and application angle.
    constraints:
      - expr: r >= 0
        message:
          es: La distancia radial debe ser no negativa.
          en: Radial distance must be non-negative.
      - expr: F >= 0
        message:
          es: La fuerza debe ser no negativa.
          en: Force must be non-negative.
      - expr: theta >= 0 && theta <= pi
        message:
          es: El ángulo debe mantenerse dentro del rango geométrico del leaf.
          en: The angle must stay within the geometric range of the leaf.
    validity:
      es: Válida cuando theta se mide entre la fuerza y el radio respecto al eje.
      en: Valid when theta is measured between the force and the radius about the axis.
    dimension_check:
      es: M L^2 T^-2
      en: M L^2 T^-2
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [torque, angle_effect, geometry]
    result_semantics:
      target: tau
      kind: scalar_signed
      sign_meaning:
        es: El signo se asigna con el convenio horario o antihorario.
        en: The sign is assigned with the clockwise or counterclockwise convention.
      absolute_value_meaning:
        es: El módulo indica la eficacia rotacional total de la fuerza.
        en: The magnitude indicates the total rotational effectiveness of the force.
    domain_checks:
      - expr: r >= 0 && F >= 0
        message:
          es: Distancia y fuerza deben ser físicamente consistentes.
          en: Distance and force must be physically consistent.
    coherence_checks:
      - expr: "abs(theta) < 1e-9 || abs(theta - pi) < 1e-9 ? abs(tau) < 1e-9 : true"
        severity: ok
        message:
          es: Con theta nulo o llano, la fuerza no produce momento.
          en: With zero or straight theta, the force produces no torque.
    graph_implications:
      - channel: tau_curve
        message:
          es: La curva debe anularse en 0 y 180 grados y alcanzar su máximo en torno a 90 grados.
          en: The curve should vanish at 0 and 180 degrees and reach its maximum around 90 degrees.
    pedagogical_triggers:
      - detect_when: abs(theta - pi/2) < 1e-3
        message:
          es: "En perpendicularidad, el momento alcanza su valor máximo para r y F fijos."
          en: "At perpendicularity, torque reaches its maximum for fixed r and F."

  - id: lever_arm_relation
    title:
      es: relación geométrica del brazo
      en: geometric relation of the lever arm
    equation: d_perp = r*sin(theta)
    latex: d_{\\perp} = r \\sin(\\theta)
    rearrangements:
      - target: d_perp
        equation: d_perp = r*sin(theta)
        latex: d_{\\perp} = r \\sin(\\theta)
    category: auxiliary
    relation_type: geometry
    physical_meaning:
      es: Convierte la distancia radial en brazo efectivo usando el ángulo de aplicación.
      en: It converts radial distance into effective arm using the application angle.
    constraints:
      - expr: r >= 0
        message:
          es: La distancia radial debe ser no negativa.
          en: Radial distance must be non-negative.
      - expr: theta >= 0 && theta <= pi
        message:
          es: El ángulo debe ser geométricamente compatible con el modelo plano.
          en: The angle must be geometrically compatible with the planar model.
    validity:
      es: Útil para pasar de una descripción geométrica a una descripción de brazo perpendicular.
      en: Useful to move from a geometric description to a perpendicular-arm description.
    dimension_check:
      es: L
      en: L
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [lever_arm, projection, geometry]
    result_semantics:
      target: d_perp
      kind: positive_scalar
      sign_meaning:
        es: Se interpreta como distancia efectiva, no como signo de giro.
        en: It is interpreted as an effective distance, not as a rotation sign.
      absolute_value_meaning:
        es: Su valor mide qué parte de r contribuye realmente al momento.
        en: Its value measures which part of r truly contributes to torque.
    domain_checks:
      - expr: r >= 0
        message:
          es: Debe existir una distancia física al eje.
          en: A physical distance to the axis must exist.
    coherence_checks:
      - expr: "abs(theta) < 1e-9 || abs(theta - pi) < 1e-9 ? abs(d_perp) < 1e-9 : true"
        severity: ok
        message:
          es: Si la fuerza va alineada con el radio, el brazo perpendicular debe ser nulo.
          en: If the force is aligned with the radius, the perpendicular arm must be zero.
    graph_implications:
      - channel: geometry
        message:
          es: Al crecer theta hasta 90 grados, el brazo efectivo debe crecer hasta su máximo.
          en: As theta grows to 90 degrees, the effective arm should increase to its maximum.
    pedagogical_triggers:
      - detect_when: abs(theta - pi/2) < 1e-3
        message:
          es: "Cuando la fuerza es perpendicular al radio, d_perp coincide con r."
          en: "When the force is perpendicular to the radius, d_perp matches r."

ui:
  default_formula: torque_trigonometric_definition
  groups:
    - title:
        es: Definiciones del momento
        en: Torque definitions
      items: [torque_perpendicular_definition, torque_trigonometric_definition]
    - title:
        es: Geometría efectiva
        en: Effective geometry
      items: [lever_arm_relation]
`;export{e as default};
