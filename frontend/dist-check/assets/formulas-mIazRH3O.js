const a=`version: 5
topic:
  id: ondas-superficiales
  title:
    es: Ondas Superficiales
    en: Surface Waves

formulas:
  - id: airy_general
    title:
      es: Relación de dispersión general (Teoría de Airy)
      en: General dispersion relation (Airy Theory)
    equation: c = sqrt((g*lambda/(2*pi)) * tanh(2*pi*h/lambda))
    latex: c = \\sqrt{\\frac{g\\lambda}{2\\pi} \\tanh\\left(\\frac{2\\pi h}{\\lambda}\\right)}
    category: cinematica
    relation_type: fundamental
    physical_meaning:
      es: Ecuación unificada que describe la velocidad de fase para cualquier profundidad y longitud de onda.
      en: Unified equation describing phase velocity for any depth and wavelength.
    constraints: [g > 0, lambda > 0, h > 0]
    validity:
      es: Válido para ondas lineales de pequeña amplitud en fluidos incompresibles y no viscosos.
      en: Valid for small-amplitude linear waves in incompressible and non-viscous fluids.
    dimension_check: "[L/T] = sqrt([L/T^2] * [L] * [1]) = [L/T]"
    calculable: true
    motivo_no_calculable:
      es: No se puede calcular si los valores de g, lambda o h son negativos o nulos.
      en: Cannot be calculated if g, lambda, or h values are negative or zero.
    used_in: [oceanografia_fisica]
    interpretation_tags: [dispersivo, general]
    result_semantics: velocidad_fase
    domain_checks: [lambda != 0, h > 0]
    coherence_checks: [c > 0]
    graph_implications: "Determina la velocidad de las crestas en todo el dominio visual."
    pedagogical_triggers: [cambio_profundidad]
    rearrangements:
      - target: c
        equation: c = sqrt((g*lambda/(2*pi)) * tanh(2*pi*h/lambda))
        latex: c = \\sqrt{\\frac{g\\lambda}{2\\pi} \\tanh\\left(\\frac{2\\pi h}{\\lambda}\\right)}
    variables: [c, g, lambda, h]

  - id: profundas
    title:
      es: Régimen de aguas profundas ($h > \\lambda/2$)
      en: Deep water regime ($h > \\lambda/2$)
    equation: c = sqrt(g*lambda/(2*pi))
    latex: c \\approx \\sqrt{\\frac{g\\lambda}{2\\pi}}
    category: cinematica
    relation_type: regimen_limite
    physical_meaning:
      es: En aguas profundas, la velocidad de la ola depende únicamente de su longitud de onda.
      en: In deep water, wave speed depends only on its wavelength.
    constraints: [g > 0, lambda > 0]
    validity:
      es: Válido cuando la profundidad h es mayor a la mitad de la longitud de onda.
      en: Valid when depth h is greater than half the wavelength.
    dimension_check: "[L/T] = sqrt([L/T^2] * [L] / [1]) = [L/T]"
    calculable: true
    motivo_no_calculable:
      es: No se puede calcular si los valores de g o lambda son negativos o nulos.
      en: Cannot be calculated if g or lambda values are negative or zero.
    used_in: [oceanografia_profunda]
    interpretation_tags: [dispersion, aguas_profundas]
    result_semantics: velocidad_fase
    domain_checks: [lambda != 0]
    coherence_checks: [c > 0]
    graph_implications: "Determina la velocidad de las crestas en alta mar."
    pedagogical_triggers: [cambio_frecuencia]
    rearrangements:
      - target: c
        equation: c = sqrt(g*lambda/(2*pi))
      - target: lambda
        equation: lambda = 2*pi*c^2/g
    variables: [c, g, lambda]

  - id: someras
    title:
      es: Régimen de aguas someras ($h < \\lambda/20$)
      en: Shallow water regime ($h < \\lambda/20$)
    equation: c = sqrt(g*h)
    latex: c \\approx \\sqrt{gh}
    category: cinematica
    relation_type: regimen_limite
    physical_meaning:
      es: En aguas someras, todas las ondas viajan a la misma velocidad independientemente de su longitud de onda.
      en: In shallow water, all waves travel at the same speed regardless of their wavelength.
    constraints: [g > 0, h > 0]
    validity:
      es: Válido cuando la profundidad h es mucho menor que la longitud de onda (h < lambda/20).
      en: Valid when depth h is much smaller than the wavelength (h < lambda/20).
    dimension_check: "[L/T] = sqrt([L/T^2] * [L]) = [L/T]"
    calculable: true
    motivo_no_calculable:
      es: No se puede calcular si la profundidad h o la gravedad g son negativas.
      en: Cannot be calculated if depth h or gravity g are negative.
    used_in: [tsunamis, ingenieria_costera]
    interpretation_tags: [no_dispersivo, aguas_someras]
    result_semantics: velocidad_fase
    domain_checks: [h != 0]
    coherence_checks: [c > 0]
    graph_implications: "Determina la velocidad de las crestas al acercarse a la costa."
    pedagogical_triggers: [shoaling]
    rearrangements:
      - target: c
        equation: c = sqrt(g*h)
      - target: h
        equation: h = c^2/g
    variables: [c, g, h]

ui:
  default_formula: airy_general
  groups:
    - title:
        es: Propagación de Ondas
        en: Wave Propagation
      items: [airy_general, profundas, someras]
`;export{a as default};
