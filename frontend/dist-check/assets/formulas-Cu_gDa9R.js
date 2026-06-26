const e=`version: v5
leaf_id: reflexion
ui:
  default_formula: ley_reflexion
formulas:
  - id: ley_reflexion
    title:
      es: Ley geométrica de la reflexión
      en: Geometric law of reflection
    equation: "theta_r = theta_i"
    latex: "\\\\theta_r = \\\\theta_i"
    rearrangements:
      - target: theta_r
        equation: "theta_r = theta_i"
        latex: "\\\\theta_r = \\\\theta_i"
      - target: theta_i
        equation: "theta_i = theta_r"
        latex: "\\\\theta_i = \\\\theta_r"
    category: fundamental
    relation_type: geometric_interpretation
    physical_meaning:
      es: "En una frontera plana y localmente regular, el rayo reflejado forma con la normal el mismo ángulo que el rayo incidente."
      en: "At a flat locally regular boundary, the reflected ray forms with the normal the same angle as the incident ray."
    constraints:
      - "theta_i >= 0"
      - "theta_i <= PI / 2"
    validity:
      es: "Válida para reflexión especular en una frontera lisa frente a la longitud de onda."
      en: "Valid for specular reflection at a boundary smooth compared with the wavelength."
    dimension_check: "adimensional = adimensional"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_svg]
    interpretation_tags: [direccion_reflejada, simetria_normal, reflexion_especular]
    result_semantics:
      target: theta_r
      kind: angle
      sign_meaning:
        es: "Se usa como abertura positiva respecto a la normal."
        en: "It is used as a positive opening from the normal."
      absolute_value_meaning:
        es: "Mide la separación angular entre rayo reflejado y normal."
        en: "It measures angular separation between reflected ray and normal."
    domain_checks:
      - id: lr_angle_domain
        condition: "theta_i >= 0 and theta_i <= PI / 2"
        message:
          es: "El ángulo de incidencia debe medirse desde la normal y estar dentro del semiespacio incidente."
          en: "The incident angle must be measured from the normal and lie in the incident half-space."
    coherence_checks:
      - id: lr_same_normal
        condition: "theta_r >= 0"
        message:
          es: "El ángulo reflejado debe leerse respecto a la misma normal."
          en: "The reflected angle must be read from the same normal."
    graph_implications:
      es: "El gráfico debe mostrar simetría angular respecto a la normal."
      en: "The graph should show angular symmetry with respect to the normal."
    pedagogical_triggers:
      - id: lr_trigger_surface
        text:
          es: "Si el alumno mide desde la superficie, pedir que reconstruya la normal."
          en: "If the student measures from the surface, ask them to reconstruct the normal."

  - id: intensidad_reflejada
    title:
      es: Intensidad reflejada desde reflectancia
      en: Reflected intensity from reflectance
    equation: "I_reflejada = R_reflectancia * I_incidente"
    latex: "I_r = R I_i"
    rearrangements:
      - target: I_reflejada
        equation: "I_reflejada = R_reflectancia * I_incidente"
        latex: "I_r = R I_i"
      - target: R_reflectancia
        equation: "R_reflectancia = I_reflejada / I_incidente"
        latex: "R = \\\\frac{I_r}{I_i}"
      - target: I_incidente
        equation: "I_incidente = I_reflejada / R_reflectancia"
        latex: "I_i = \\\\frac{I_r}{R}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "La intensidad reflejada es la parte de la intensidad incidente que la frontera devuelve."
      en: "Reflected intensity is the part of incident intensity returned by the boundary."
    constraints:
      - "I_incidente >= 0"
      - "R_reflectancia >= 0"
      - "R_reflectancia <= 1"
    validity:
      es: "Válida para fronteras pasivas cuando la reflectancia representa una fracción energética efectiva."
      en: "Valid for passive boundaries when reflectance represents an effective energy fraction."
    dimension_check: "[M T⁻³] = adimensional · [M T⁻³]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [energia_reflejada, reflectancia, balance_intensidad]
    result_semantics:
      target: I_reflejada
      kind: intensity
      sign_meaning:
        es: "No tiene signo físico; debe ser no negativa."
        en: "It has no physical sign; it must be non-negative."
      absolute_value_meaning:
        es: "Mide la intensidad que vuelve desde la frontera."
        en: "It measures the intensity returning from the boundary."
    domain_checks:
      - id: ir_passive_reflectance
        condition: "R_reflectancia >= 0 and R_reflectancia <= 1"
        message:
          es: "En una frontera pasiva, la reflectancia debe estar entre cero y uno."
          en: "For a passive boundary, reflectance must lie between zero and one."
    coherence_checks:
      - id: ir_not_exceed_incident
        condition: "I_reflejada <= I_incidente"
        message:
          es: "La intensidad reflejada no debe superar la incidente en una frontera pasiva."
          en: "Reflected intensity must not exceed incident intensity at a passive boundary."
    graph_implications:
      es: "El grosor o brillo del rayo reflejado puede escalar con la reflectancia."
      en: "The reflected ray thickness or brightness can scale with reflectance."
    pedagogical_triggers:
      - id: ir_trigger_total
        text:
          es: "Si se supone reflexión total, pedir revisar la reflectancia del material."
          en: "If total reflection is assumed, ask to review the material reflectance."
`;export{e as default};
