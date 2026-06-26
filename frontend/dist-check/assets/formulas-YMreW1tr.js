const e=`version: "v5"
leaf_id: reflexion

formulas:
  - id: ley_reflexion
    title:
      es: Ley de la reflexion
      en: Law of reflection
    category: fundamental
    relation_type: definition
    equation: "theta_r = theta_i"
    latex: "\\\\theta_r = \\\\theta_i"
    rearrangements:
      - target: theta_r
        equation: "theta_r = theta_i"
        latex: "\\\\theta_r = \\\\theta_i"
      - target: theta_i
        equation: "theta_i = theta_r"
        latex: "\\\\theta_i = \\\\theta_r"
    variables:
      - theta_r
      - theta_i
    constraints:
      - "theta_i >= 0"
      - "theta_i <= 90"
    validity:
      es: "Valida para cualquier superficie lisa (especular) y cualquier longitud de onda."
      en: "Valid for any smooth (specular) surface and any wavelength."
    dimension_check: "[1] = [1] (angulos en grados o radianes)"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - espejos_planos
      - espejos_esfericos
      - fibra_optica
      - retroreflectores
    interpretation_tags:
      - igualdad_angulos
      - simetria_reflexion
      - plano_incidencia
    domain_checks:
      - condition: "theta_i >= 0 and theta_i <= 90"
        severity: error
        message:
          es: "El angulo de incidencia debe estar entre 0 y 90 grados."
          en: "The angle of incidence must be between 0 and 90 degrees."
    coherence_checks:
      - condition: "theta_r == theta_i"
        tolerance: 0.01
        message:
          es: "Verificar la ley de reflexion: angulo reflejado igual al de incidencia."
          en: "Verify the law of reflection: reflected angle equals the angle of incidence."
    graph_implications:
      es: "En el diagrama SVG, el rayo reflejado forma un angulo simetrico respecto a la normal."
      en: "In the SVG diagram, the reflected ray forms a symmetric angle with respect to the normal."
    physical_meaning:
      es: "El angulo de reflexion es siempre igual al angulo de incidencia, medidos ambos respecto a la normal a la superficie."
      en: "The angle of reflection always equals the angle of incidence, both measured from the surface normal."
    result_semantics:
      target: theta_r
      kind: scalar_unsigned
      sign_meaning:
        es: "Siempre positivo: angulo medido desde la normal."
        en: "Always positive: angle measured from the normal."
      absolute_value_meaning:
        es: "Angulo entre el rayo reflejado y la normal a la superficie."
        en: "Angle between the reflected ray and the surface normal."
    pedagogical_triggers:
      - condition: "theta_i == 0"
        message:
          es: "Incidencia normal: el rayo reflejado vuelve por el mismo camino."
          en: "Normal incidence: the reflected ray returns along the same path."
      - condition: "theta_i == 90"
        message:
          es: "Incidencia rasante: el rayo apenas roza la superficie."
          en: "Grazing incidence: the ray barely touches the surface."

  - id: angulo_critico
    title:
      es: Angulo critico de reflexion total interna
      en: Critical angle for total internal reflection
    category: derived
    relation_type: definition
    equation: "theta_c = arcsin(n2 / n1)"
    latex: "\\\\theta_c = \\\\arcsin\\\\!\\\\left(\\\\frac{n_2}{n_1}\\\\right) % n2 n1 theta_c"
    rearrangements:
      - target: theta_c
        equation: "theta_c = arcsin(n2 / n1)"
        latex: "\\\\theta_c = \\\\arcsin\\\\!\\\\left(\\\\frac{n_2}{n_1}\\\\right)"
      - target: n2
        equation: "n2 = n1 * sin(theta_c)"
        latex: "n_2 = n_1 \\\\sin\\\\theta_c"
      - target: n1
        equation: "n1 = n2 / sin(theta_c)"
        latex: "n_1 = \\\\frac{n_2}{\\\\sin\\\\theta_c}"
    variables:
      - theta_c
      - n1
      - n2
    constraints:
      - "n1 > n2"
      - "n2 / n1 <= 1"
    validity:
      es: "Solo existe angulo critico cuando la luz pasa de un medio mas denso a uno menos denso (n1 mayor que n2)."
      en: "The critical angle only exists when light passes from a denser medium to a less dense one (n1 greater than n2)."
    dimension_check: "[1] = arcsin([1]/[1])"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - fibra_optica
      - prismas_reflexion_total
      - interfaces_vidrio_aire
    interpretation_tags:
      - reflexion_total
      - limite_angular
      - propagacion_guiada
    domain_checks:
      - condition: "n1 > n2"
        severity: error
        message:
          es: "Solo existe angulo critico si n1 es mayor que n2."
          en: "The critical angle only exists if n1 is greater than n2."
      - condition: "n2 / n1 <= 1"
        severity: error
        message:
          es: "El cociente n2/n1 debe ser menor o igual a 1 para que exista arcoseno."
          en: "The ratio n2/n1 must be less than or equal to 1 for the arcsine to exist."
    coherence_checks:
      - condition: "theta_c > 0 and theta_c < 90"
        tolerance: 0.01
        message:
          es: "El angulo critico debe estar entre 0 y 90 grados."
          en: "The critical angle must be between 0 and 90 degrees."
    graph_implications:
      es: "En el diagrama, el angulo critico marca el limite a partir del cual no hay rayo refractado."
      en: "In the diagram, the critical angle marks the limit beyond which there is no refracted ray."
    physical_meaning:
      es: "Angulo de incidencia minimo a partir del cual toda la luz se refleja internamente sin transmitirse al segundo medio."
      en: "Minimum angle of incidence above which all light is internally reflected without being transmitted to the second medium."
    result_semantics:
      target: theta_c
      kind: scalar_unsigned
      sign_meaning:
        es: "Siempre positivo: angulo medido desde la normal."
        en: "Always positive: angle measured from the normal."
      absolute_value_meaning:
        es: "Angulo limite para reflexion total interna."
        en: "Limiting angle for total internal reflection."
    pedagogical_triggers:
      - condition: "n1 == n2"
        message:
          es: "Si los indices son iguales, no existe angulo critico: no hay reflexion total."
          en: "If the indices are equal, there is no critical angle: no total reflection occurs."
      - condition: "theta_c < 45"
        message:
          es: "Angulo critico bajo: facil de alcanzar la reflexion total (caso tipico vidrio-aire)."
          en: "Low critical angle: total reflection is easily achieved (typical glass-air case)."
`;export{e as default};
