const e=`version: 5
topic:
  id: ondas-longitudinales
  title:
    es: Ondas Longitudinales
    en: Longitudinal Waves

formulas:
  - id: onda_fundamental
    title:
      es: Relación Fundamental de Propagación
      en: Fundamental Propagation Relationship
    equation: c = f * lambda
    latex: 'c = f \\lambda'
    category: cinematica
    relation_type: cinematica_onda
    physical_meaning:
      es: Vincula la velocidad de la fase con la frecuencia temporal y la periodicidad espacial.
      en: Links phase speed with temporal frequency and spatial periodicity.
    constraints: [f > 0, lambda > 0]
    validity:
      es: Válido para ondas armónicas progresivas en medios no dispersivos.
      en: Valid for harmonic progressive waves in non-dispersive media.
    dimension_check: "[L/T] = [1/T] * [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [cinematica_acustica]
    interpretation_tags: [velocidad_fase, longitud_onda]
    result_semantics: velocidad_onda
    domain_checks: [lambda != 0, f != 0]
    coherence_checks: [c > 0]
    graph_implications: "Escala espacial de la visualización."
    pedagogical_triggers: [cambio_medio]
    rearrangements:
      - target: c
        equation: c = f * lambda
        latex: 'c = f \\lambda'
      - target: f
        equation: f = c / lambda
        latex: 'f = \\frac{c}{\\lambda}'
      - target: lambda
        equation: lambda = c / f
        latex: '\\lambda = \\frac{c}{f}'
    descripcion:
      es: Vincula la velocidad de la fase con la frecuencia temporal y la periodicidad espacial.
      en: Links phase speed with temporal frequency and spatial periodicity.
    variables: [c, f, lambda]

  - id: relacion_amplitudes
    title:
      es: Relación Presión-Desplazamiento
      en: Pressure-Displacement Relationship
    equation: p_hat = B * k * s_hat
    latex: '\\hat{p} = B k \\hat{s}'
    category: dinamica
    relation_type: constitutiva
    physical_meaning:
      es: Conecta la amplitud de la variación de presión con la amplitud del desplazamiento de las partículas.
      en: Connects the pressure variation amplitude with the particle displacement amplitude.
    constraints: [B > 0, k > 0, s_hat > 0]
    validity:
      es: Válido en el régimen de acústica lineal (pequeñas perturbaciones).
      en: Valid in the linear acoustics regime (small disturbances).
    dimension_check: "[M/LT^2] = [M/LT^2] * [1/L] * [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [acustica_fisica]
    interpretation_tags: [amplitud_presion, elasticidad]
    result_semantics: amplitud_presion
    domain_checks: [k != 0]
    coherence_checks: [p_hat > 0]
    graph_implications: "Amplitud visual de la simulación de partículas."
    pedagogical_triggers: [exceso_presion]
    rearrangements:
      - target: p_hat
        equation: p_hat = B * k * s_hat
        latex: '\\hat{p} = B k \\hat{s}'
      - target: s_hat
        equation: s_hat = p_hat / (B * k)
        latex: '\\hat{s} = \\frac{\\hat{p}}{B k}'
      - target: B
        equation: B = p_hat / (k * s_hat)
        latex: 'B = \\frac{\\hat{p}}{k \\hat{s}}'
    descripcion:
      es: Conecta la amplitud de la variación de presión con la amplitud del desplazamiento de las partículas.
      en: Connects the pressure variation amplitude with the particle displacement amplitude.
    variables: [p_hat, B, k, s_hat]

  - id: velocidad_fluido
    title:
      es: Velocidad del Sonido en Fluidos
      en: Speed of Sound in Fluids
    equation: c = sqrt(B / rho)
    latex: 'c = \\sqrt{\\frac{B}{\\rho}}'
    category: dinamica
    relation_type: constitutiva_medio
    physical_meaning:
      es: Determina la velocidad de la onda a partir de las propiedades intrínsecas del fluido.
      en: Determines wave speed from intrinsic fluid properties.
    constraints: [rho > 0, B > 0]
    validity:
      es: Válido para fluidos homogéneos e isotrópicos.
      en: Valid for homogeneous and isotropic fluids.
    dimension_check: "[L/T] = sqrt([M/LT^2] / [M/L^3]) = sqrt([L^2/T^2])"
    calculable: true
    motivo_no_calculable: ""
    used_in: [caracterizacion_medio]
    interpretation_tags: [velocidad_sonido, inercia, elasticidad]
    result_semantics: velocidad_onda
    domain_checks: [rho != 0]
    coherence_checks: [B > 0]
    graph_implications: "Velocidad de movimiento de las zonas de compresión."
    pedagogical_triggers: [cambio_temperatura]
    rearrangements:
      - target: c
        equation: c = sqrt(B / rho)
        latex: 'c = \\sqrt{\\frac{B}{\\rho}}'
      - target: B
        equation: B = rho * c^2
        latex: 'B = \\rho c^2'
      - target: rho
        equation: rho = B / c^2
        latex: '\\rho = \\frac{B}{c^2}'
    descripcion:
      es: Determina la velocidad de la onda a partir de las propiedades intrínsecas del fluido.
      en: Determines wave speed from intrinsic fluid properties.
    variables: [c, B, rho]

  - id: numero_onda_def
    title:
      es: Definición del Número de Onda
      en: Wave Number Definition
    equation: k = 2 * pi / lambda
    latex: 'k = \\frac{2\\pi}{\\lambda}'
    category: cinematica
    relation_type: definicion
    physical_meaning:
      es: Representa la periodicidad espacial de la onda en radianes por metro.
      en: Represents the spatial periodicity of the wave in radians per meter.
    constraints: [lambda > 0]
    validity:
      es: Definición geométrica universal.
      en: Universal geometric definition.
    dimension_check: "[1/L] = [1] / [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [fase_onda]
    interpretation_tags: [periodicidad_espacial]
    result_semantics: numero_onda
    domain_checks: [lambda != 0]
    coherence_checks: [k > 0]
    graph_implications: "Número de ciclos visibles en el eje x."
    pedagogical_triggers: [escala_espacial]
    rearrangements:
      - target: k
        equation: k = 2 * pi / lambda
        latex: 'k = \\frac{2\\pi}{\\lambda}'
      - target: lambda
        equation: lambda = 2 * pi / k
        latex: '\\lambda = \\frac{2\\pi}{k}'
    variables: [k, lambda]

  - id: omega_def
    title:
      es: Definición de la Frecuencia Angular
      en: Angular Frequency Definition
    equation: omega = 2 * pi * f
    latex: '\\omega = 2\\pi f'
    category: cinematica
    relation_type: definicion
    physical_meaning:
      es: Representa la rapidez de cambio de fase temporal en radianes por segundo.
      en: Represents the rate of temporal phase change in radians per second.
    constraints: [f > 0]
    validity:
      es: Definición temporal universal.
      en: Universal temporal definition.
    dimension_check: "[1/T] = [1] / [T]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [fase_onda]
    interpretation_tags: [periodicidad_temporal]
    result_semantics: frecuencia_angular
    domain_checks: [f != 0]
    coherence_checks: [omega > 0]
    graph_implications: "Velocidad de la oscilación temporal."
    pedagogical_triggers: [tono_frecuencia]
    rearrangements:
      - target: omega
        equation: omega = 2 * pi * f
        latex: '\\omega = 2\\pi f'
      - target: f
        equation: f = omega / (2 * pi)
        latex: 'f = \\frac{\\omega}{2\\pi}'
    variables: [omega, f]

ui:
  default_formula: velocidad_fluido
  groups:
    - title:
        es: Dinámica y Propiedades del Medio
        en: Dynamics and Medium Properties
      items: [velocidad_fluido, relacion_amplitudes]
    - title:
        es: Cinemática de la Onda
        en: Wave Kinematics
      items: [onda_fundamental, numero_onda_def, omega_def]
`;export{e as default};
