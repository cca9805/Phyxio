const e=`formulas:
  - id: flujo_maximo_generador
    title:
      es: "Flujo magnético máximo enlazado"
      en: "Maximum linked magnetic flux"
    equation: "Phi_B = N * B * A"
    latex: "\\\\Phi_B = N B A"
    rearrangements:
      - target: Phi_B
        equation: "Phi_B = N * B * A"
        latex: "\\\\Phi_B = N B A"
    category: definicion
    relation_type: proportional
    physical_meaning:
      es: "El flujo máximo aumenta con espiras, campo y área efectiva."
      en: "Maximum flux increases with turns, field, and effective area."
    constraints:
      - "N >= 0"
      - "B >= 0"
      - "A >= 0"
    validity:
      es: "Bobina plana, campo aproximadamente uniforme y orientación de máximo enlace."
      en: "Flat coil, approximately uniform field, and maximum-linkage orientation."
    dimension_check: "[M L² T⁻² I⁻¹]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria.md
      - teoria.en.md
      - ejemplos.md
      - ejemplos.en.md
    interpretation_tags:
      - enlace_de_flujo
      - geometria
    result_semantics:
      target: Phi_B
      unit: Wb
      role: intermediate
      sign_policy: signed_by_orientation
    domain_checks:
      - id: area_positiva
        condition: "A >= 0"
        message:
          es: "El área efectiva debe ser no negativa."
          en: "Effective area must be non-negative."
    coherence_checks:
      - id: enlace_nulo
        condition: "N * B * A == 0"
        message:
          es: "Si algún factor de enlace es nulo, el flujo máximo también lo es."
          en: "If any linkage factor is zero, maximum flux is also zero."
    graph_implications:
      x_axis: omega
      y_axis: Phi_B
      reading: "El flujo máximo fija la escala magnética disponible."
    pedagogical_triggers:
      - "Separar campo magnético de flujo magnético."
  - id: amplitud_fem_generador
    title:
      es: "Amplitud de la fem inducida"
      en: "Induced emf amplitude"
    equation: "epsilon_0 = N * B * A * omega"
    latex: "\\\\varepsilon_0 = N B A \\\\omega"
    rearrangements:
      - target: epsilon_0
        equation: "epsilon_0 = N * B * A * omega"
        latex: "\\\\varepsilon_0 = N B A \\\\omega"
    category: ley
    relation_type: proportional
    physical_meaning:
      es: "La fem máxima crece con el flujo máximo y con la rapidez de giro."
      en: "Peak emf grows with maximum flux and rotation speed."
    constraints:
      - "N >= 0"
      - "B >= 0"
      - "A >= 0"
      - "omega >= 0"
    validity:
      es: "Generador ideal sinusoidal, campo uniforme y pérdidas no incluidas."
      en: "Ideal sinusoidal generator, uniform field, and losses not included."
    dimension_check: "[M L² T⁻³ I⁻¹]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria.md
      - teoria.en.md
      - ejemplos.md
      - ejemplos.en.md
    interpretation_tags:
      - fem_inducida
      - amplitud
    result_semantics:
      target: epsilon_0
      unit: V
      role: dominant_result
      sign_policy: amplitude_non_negative
    domain_checks:
      - id: giro_positivo
        condition: "omega >= 0"
        message:
          es: "La velocidad angular usada como módulo debe ser no negativa."
          en: "Angular speed used as magnitude must be non-negative."
    coherence_checks:
      - id: sin_giro_sin_amplitud
        condition: "omega == 0"
        message:
          es: "Sin giro no aparece fem alterna en el modelo ideal."
          en: "Without rotation no alternating emf appears in the ideal model."
    graph_implications:
      x_axis: omega
      y_axis: epsilon_0
      reading: "La pendiente frente a velocidad angular es el enlace de flujo máximo."
    pedagogical_triggers:
      - "Distinguir amplitud de fem y valor instantáneo."
  - id: fem_media_generador
    title:
      es: "Fem media por cambio de flujo"
      en: "Mean emf from flux change"
    equation: "epsilon = DeltaPhi_B / Delta_t"
    latex: "|\\\\varepsilon| = \\\\frac{|\\\\Delta\\\\Phi_B|}{\\\\Delta t}"
    rearrangements:
      - target: epsilon
        equation: "epsilon = DeltaPhi_B / Delta_t"
        latex: "|\\\\varepsilon| = \\\\frac{|\\\\Delta\\\\Phi_B|}{\\\\Delta t}"
    category: ley
    relation_type: rate
    physical_meaning:
      es: "La fem media mide rapidez de cambio de flujo magnético enlazado."
      en: "Mean emf measures the rate of linked magnetic flux change."
    constraints:
      - "Delta_t > 0"
    validity:
      es: "Intervalo finito con variación de flujo conocida; el signo de Lenz se interpreta aparte."
      en: "Finite interval with known flux change; Lenz sign is interpreted separately."
    dimension_check: "[M L² T⁻³ I⁻¹]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria.md
      - teoria.en.md
      - ejemplos.md
      - ejemplos.en.md
    interpretation_tags:
      - cambio_de_flujo
      - faraday
    result_semantics:
      target: epsilon
      unit: V
      role: secondary_result
      sign_policy: magnitude_with_lenz_direction
    domain_checks:
      - id: intervalo_no_nulo
        condition: "Delta_t > 0"
        message:
          es: "El intervalo temporal debe ser positivo."
          en: "The time interval must be positive."
    coherence_checks:
      - id: cambio_nulo
        condition: "DeltaPhi_B == 0"
        message:
          es: "Un cambio de flujo nulo produce fem media nula."
          en: "A zero flux change produces zero mean emf."
    graph_implications:
      x_axis: Delta_t
      y_axis: epsilon
      reading: "Para un mismo cambio de flujo, reducir el intervalo aumenta la fem media."
    pedagogical_triggers:
      - "Usar cambio de flujo, no flujo absoluto."
  - id: eficiencia_generador
    title:
      es: "Rendimiento del generador"
      en: "Generator efficiency"
    equation: "eta = P_elec / P_mec"
    latex: "\\\\eta = \\\\frac{P_{elec}}{P_{mec}}"
    rearrangements:
      - target: eta
        equation: "eta = P_elec / P_mec"
        latex: "\\\\eta = \\\\frac{P_{elec}}{P_{mec}}"
    category: definicion
    relation_type: ratio
    physical_meaning:
      es: "El rendimiento compara potencia eléctrica útil con potencia mecánica suministrada."
      en: "Efficiency compares useful electrical power with supplied mechanical power."
    constraints:
      - "P_mec > 0"
      - "P_elec >= 0"
      - "eta <= 1"
    validity:
      es: "Régimen estacionario con potencias medias medidas en el mismo intervalo."
      en: "Steady regime with average powers measured over the same interval."
    dimension_check: "[1]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria.md
      - teoria.en.md
      - ejemplos.md
      - ejemplos.en.md
    interpretation_tags:
      - energia
      - perdidas
    result_semantics:
      target: eta
      unit: "1"
      role: efficiency_result
      sign_policy: bounded_positive
    domain_checks:
      - id: entrada_positiva
        condition: "P_mec > 0"
        message:
          es: "La potencia mecánica de entrada debe ser positiva."
          en: "Mechanical input power must be positive."
    coherence_checks:
      - id: rendimiento_imposible
        condition: "eta > 1"
        message:
          es: "Un rendimiento mayor que uno viola conservación de la energía."
          en: "Efficiency above one violates energy conservation."
    graph_implications:
      x_axis: P_mec
      y_axis: eta
      reading: "El rendimiento resume las pérdidas internas y de conversión."
    pedagogical_triggers:
      - "Convertir porcentajes a fracción antes de calcular."
  - id: potencia_util_generador
    title:
      es: "Potencia eléctrica útil"
      en: "Useful electrical power"
    equation: "P_elec = eta * P_mec"
    latex: "P_{elec} = \\\\eta P_{mec}"
    rearrangements:
      - target: P_elec
        equation: "P_elec = eta * P_mec"
        latex: "P_{elec} = \\\\eta P_{mec}"
    category: aplicacion
    relation_type: product
    physical_meaning:
      es: "La potencia útil es la parte de la potencia mecánica que supera las pérdidas."
      en: "Useful power is the part of mechanical power that survives losses."
    constraints:
      - "0 <= eta"
      - "eta <= 1"
      - "P_mec >= 0"
    validity:
      es: "Potencias medias en régimen estable; no describe transitorios de arranque."
      en: "Average powers in steady operation; startup transients are not described."
    dimension_check: "[M L² T⁻³]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria.md
      - teoria.en.md
      - ejemplos.md
      - ejemplos.en.md
    interpretation_tags:
      - salida_util
      - conservacion_energia
    result_semantics:
      target: P_elec
      unit: W
      role: engineering_result
      sign_policy: delivered_positive
    domain_checks:
      - id: rendimiento_acotado
        condition: "eta <= 1"
        message:
          es: "La eficiencia debe estar acotada por uno."
          en: "Efficiency must be bounded by one."
    coherence_checks:
      - id: salida_no_supera_entrada
        condition: "P_elec <= P_mec"
        message:
          es: "La potencia eléctrica útil no puede superar la potencia mecánica de entrada."
          en: "Useful electrical power cannot exceed mechanical input power."
    graph_implications:
      x_axis: P_mec
      y_axis: P_elec
      reading: "La pendiente frente a potencia mecánica es el rendimiento."
    pedagogical_triggers:
      - "Distinguir fem inducida de potencia útil entregada."
ui:
  default_formula: amplitud_fem_generador
  default_inputs:
    N: 100
    B: 0.20
    A: 0.010
    omega: 120

`;export{e as default};
