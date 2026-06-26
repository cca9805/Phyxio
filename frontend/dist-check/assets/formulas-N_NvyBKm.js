const e=`version: 1
ui:
  default_formula: velocidad_vacio
formulas:
  - id: velocidad_vacio
    title:
      es: Velocidad de la luz en el vacío
      en: Speed of light in vacuum
    equation: c = 1 / sqrt(mu0 * epsilon0)
    latex: c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}
    category: fundamental
    relation_type: definición
    physical_meaning:
      es: Define la velocidad límite del universo como resultado de la elasticidad eléctrica y magnética del espacio.
      en: Defines the universal speed limit as a result of the electrical and magnetic elasticity of space.
    constraints: [vacío]
    validity:
      es: Válida universalmente para el vacío ideal.
      en: Universally valid for ideal vacuum.
    dimension_check: 'm/s = 1 / sqrt((H/m)*(F/m))'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [unificación, constante, vacío]
    result_semantics:
      target: c
    domain_checks: []
    coherence_checks: []
    graph_implications: [cono de luz]
    pedagogical_triggers: ['¿Por qué c depende de mu0 y epsilon0?', '¿Qué pasa si el medio no es vacío?']
    rearrangements:
      - target: epsilon0
        equation: epsilon0 = 1 / (mu0 * c^2)
        latex: \\epsilon_0 = \\frac{1}{\\mu_0 c^2}
      - target: mu0
        equation: mu0 = 1 / (epsilon0 * c^2)
        latex: \\mu_0 = \\frac{1}{\\epsilon_0 c^2}

  - id: densidad_energia
    title:
      es: Densidad de energía electromagnética
      en: Electromagnetic energy density
    equation: u = 0.5 * (epsilon0 * E^2 + B^2 / mu0)
    latex: u = \\frac{1}{2} \\left( \\epsilon_0 E^2 + \\frac{B^2}{\\mu_0} \\right)
    category: balance
    relation_type: almacenamiento
    physical_meaning:
      es: Describe la cantidad de energía almacenada por unidad de volumen en los campos eléctrico y magnético.
      en: Describes the amount of energy stored per unit volume in the electric and magnetic fields.
    constraints: [medio lineal]
    validity:
      es: Válida para campos en el vacío o medios lineales.
      en: Valid for fields in vacuum or linear media.
    dimension_check: 'J/m^3 = (F/m)*(V/m)^2 + T^2/(H/m)'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [energía, balance, campos]
    result_semantics:
      target: u
    domain_checks: []
    coherence_checks: []
    graph_implications: [mapa de densidad]
    pedagogical_triggers: ['¿Cómo se reparte la energía entre E y B?', '¿Qué indica una densidad alta?']
    rearrangements:
      - target: E
        equation: E = sqrt((2*u - B^2/mu0)/epsilon0)
        latex: E = \\sqrt{\\frac{2u - B^2/\\mu_0}{\\epsilon_0}}

  - id: poynting_magnitud
    title:
      es: Magnitud del vector de Poynting
      en: Poynting vector magnitude
    equation: S = (1/mu0) * E * B
    latex: S = \\frac{1}{\\mu_0} E B
    category: flujo
    relation_type: transporte
    physical_meaning:
      es: Cuantifica la tasa instantánea de transferencia de energía por unidad de área.
      en: Quantifies the instantaneous rate of energy transfer per unit area.
    constraints: [onda plana, campos perpendiculares]
    validity:
      es: Válida para el flujo direccional en ondas electromagnéticas.
      en: Valid for directional flux in electromagnetic waves.
    dimension_check: 'W/m^2 = (1/(H/m)) * (V/m) * T'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [potencia, flujo, poynting]
    result_semantics:
      target: S
    domain_checks: []
    coherence_checks: []
    graph_implications: [dirección de flujo]
    pedagogical_triggers: ['¿Hacia dónde fluye la energía?', '¿Cómo depende de la perpendicularidad?']
    rearrangements:
      - target: E
        equation: E = (mu0 * S) / B
        latex: E = \\frac{\\mu_0 S}{B}
      - target: B
        equation: B = (mu0 * S) / E
        latex: B = \\frac{\\mu_0 S}{E}

  - id: intensidad_media
    title:
      es: Intensidad media de onda plana
      en: Plane wave average intensity
    equation: I = 0.5 * c * epsilon0 * E0^2
    latex: I = \\frac{1}{2} c \\epsilon_0 E_0^2
    category: flujo
    relation_type: promedio
    physical_meaning:
      es: Representa el flujo de energía promedio en el tiempo captado por un receptor.
      en: Represents the time-average energy flux captured by a receiver.
    constraints: [onda plana armónica, vacío]
    validity:
      es: Válida para la potencia media de señales de radio y luz.
      en: Valid for average power of radio and light signals.
    dimension_check: 'W/m^2 = (m/s) * (F/m) * (V/m)^2'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [brillo, potencia, promedio]
    result_semantics:
      target: I
    domain_checks: []
    coherence_checks: []
    graph_implications: [brillo visual]
    pedagogical_triggers: ['¿Por qué se usa el promedio?', '¿Cómo afecta la amplitud E0?']
    rearrangements:
      - target: E0
        equation: E0 = sqrt((2*I)/(c * epsilon0))
        latex: E_0 = \\sqrt{\\frac{2I}{c \\epsilon_0}}

  - id: relacion_campos
    title:
      es: Relación entre magnitudes de campo
      en: Field magnitude ratio
    equation: E / B = c
    latex: \\frac{E}{B} = c
    category: onda
    relation_type: acoplamiento
    physical_meaning:
      es: Establece el acoplamiento rígido entre el campo eléctrico y magnético en una onda.
      en: Establishes the rigid coupling between the electric and magnetic field in a wave.
    constraints: [vacío, campo lejano]
    validity:
      es: Válida universalmente para ondas planas en el vacío.
      en: Universally valid for plane waves in vacuum.
    dimension_check: '(V/m) / T = m/s'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [acoplo, onda, simetría]
    result_semantics:
      target: EB
    domain_checks: []
    coherence_checks: []
    graph_implications: [proporcionalidad]
    pedagogical_triggers: ['¿Qué magnitud de campo domina?', '¿Puede existir E sin B en una onda?']
    rearrangements:
      - target: E
        equation: E = c * B
        latex: E = c B
      - target: B
        equation: B = E / c
        latex: B = \\frac{E}{c}
`;export{e as default};
