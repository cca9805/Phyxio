const e=`version: "v5"
id: formulas_polarizacion
leaf_id: polarizacion

ui:
  default_formula: ley_malus

formulas:
  - id: ley_malus
    title:
      es: Ley de Malus
      en: "Malus's law"
    equation: "I = I_0 * cos(theta_p)^2"
    latex: "I = I_0 \\\\cos^{2}\\\\theta_p"
    rearrangements:
      - target: I
        equation: "I = I_0 * cos(theta_p)^2"
        latex: "I = I_0 \\\\cos^{2}\\\\theta_p"
      - target: I_0
        equation: "I_0 = I / cos(theta_p)^2"
        latex: "I_0 = \\\\frac{I}{\\\\cos^{2}\\\\theta_p}"
      - target: theta_p
        equation: "theta_p = arccos(sqrt(I / I_0))"
        latex: "\\\\theta_p = \\\\arccos\\\\!\\\\left(\\\\sqrt{\\\\frac{I}{I_0}}\\\\right)"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "Relaciona la intensidad transmitida por un polarizador con la intensidad incidente y el angulo entre el eje del polarizador y la direccion de polarizacion de la onda."
      en: "Relates the intensity transmitted by a polariser to the incident intensity and the angle between the polariser axis and the wave's polarisation direction."
    constraints:
      - "0 <= theta_p <= pi/2"
      - "I_0 > 0"
    validity:
      es: "Valida para luz completamente polarizada linealmente que incide sobre un polarizador ideal."
      en: "Valid for fully linearly polarised light incident on an ideal polariser."
    dimension_check: "[I] = [I_0] · adimensional"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - intensidad_transmitida
      - filtrado_angular
    result_semantics:
      target: I
      kind: scalar_unsigned
      sign_meaning:
        es: Siempre positiva; representa intensidad luminosa.
        en: Always positive; represents luminous intensity.
      absolute_value_meaning:
        es: Intensidad de la luz tras atravesar el polarizador.
        en: Intensity of light after passing through the polariser.
    domain_checks:
      - condition: "I_0 > 0"
        message:
          es: La intensidad incidente debe ser positiva.
          en: Incident intensity must be positive.
      - condition: "theta_p >= 0 and theta_p <= pi/2"
        message:
          es: El angulo del polarizador debe estar entre 0 y 90 grados.
          en: The polariser angle must be between 0 and 90 degrees.
    coherence_checks:
      - condition: "I <= I_0"
        message:
          es: La intensidad transmitida no puede superar la incidente.
          en: Transmitted intensity cannot exceed incident intensity.
    graph_implications:
      - "I disminuye con el coseno cuadrado del angulo; la curva cae suavemente de I_0 a cero cuando theta_p va de 0 a 90 grados."
    pedagogical_triggers:
      - trigger: "theta_p == 0"
        message:
          es: "Con theta_p igual a cero, el polarizador y la onda estan alineados: se transmite toda la intensidad."
          en: "With theta_p equal to zero, polariser and wave are aligned: full intensity is transmitted."
      - trigger: "theta_p == pi/2"
        message:
          es: "Con theta_p igual a 90 grados, los ejes son perpendiculares: la transmision es nula (polarizadores cruzados)."
          en: "With theta_p equal to 90 degrees, axes are perpendicular: transmission is zero (crossed polarisers)."

  - id: ley_brewster
    title:
      es: Ley de Brewster
      en: "Brewster's law"
    equation: "theta_B = arctan(n_2 / n_1)"
    latex: "\\\\theta_B = \\\\arctan\\\\!\\\\left(\\\\frac{n_2}{n_1}\\\\right)"
    rearrangements:
      - target: theta_B
        equation: "theta_B = arctan(n_2 / n_1)"
        latex: "\\\\theta_B = \\\\arctan\\\\!\\\\left(\\\\frac{n_2}{n_1}\\\\right)"
      - target: n_2
        equation: "n_2 = n_1 * tan(theta_B)"
        latex: "n_2 = n_1 \\\\tan\\\\theta_B"
      - target: n_1
        equation: "n_1 = n_2 / tan(theta_B)"
        latex: "n_1 = \\\\frac{n_2}{\\\\tan\\\\theta_B}"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "Define el angulo de incidencia para el cual la luz reflejada esta completamente polarizada en el plano perpendicular al plano de incidencia."
      en: "Defines the incidence angle at which reflected light is completely polarised in the plane perpendicular to the plane of incidence."
    constraints:
      - "n_1 > 0"
      - "n_2 > 0"
    validity:
      es: "Valida para interfases planas entre medios dielectricos transparentes, sin absorcion."
      en: "Valid for flat interfaces between transparent dielectric media, without absorption."
    dimension_check: "[theta_B] = rad; adimensional dentro de arctan"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - angulo_polarizacion
      - reflexion_selectiva
    result_semantics:
      target: theta_B
      kind: angle
      sign_meaning:
        es: Siempre positivo; angulo medido desde la normal a la superficie.
        en: Always positive; angle measured from the surface normal.
      absolute_value_meaning:
        es: Angulo de Brewster al cual la reflexion queda completamente polarizada.
        en: Brewster angle at which reflection becomes fully polarised.
    domain_checks:
      - condition: "n_1 > 0 and n_2 > 0"
        message:
          es: Los indices de refraccion deben ser positivos.
          en: Refractive indices must be positive.
    coherence_checks:
      - condition: "theta_B > 0 and theta_B < pi/2"
        message:
          es: El angulo de Brewster debe estar entre 0 y 90 grados.
          en: Brewster angle must be between 0 and 90 degrees.
    graph_implications:
      - "theta_B crece cuando el cociente n_2/n_1 aumenta; para vidrio comun en aire, theta_B esta cerca de 56 grados."
    pedagogical_triggers:
      - trigger: "n_1 == n_2"
        message:
          es: "Si ambos indices son iguales no hay interfase optica real; theta_B pierde significado fisico."
          en: "If both indices are equal there is no real optical interface; theta_B loses physical meaning."
`;export{e as default};
