const e=`version: 1
topic:
  id: ecuacion-de-onda-electromagnetica
  title: 'Ecuación de onda electromagnética'
  title_en: 'Electromagnetic Wave Equation'

formulas:
  - id: onda_E
    title:
      es: Ecuación de onda para el campo eléctrico
      en: Wave equation for the electric field
    equation: nabla2_E = mu0 * epsilon0 * d2E_dt2
    latex: '\\nabla^2\\mathbf{E} = \\mu_0\\varepsilon_0\\,\\frac{\\partial^2\\mathbf{E}}{\\partial t^2}  % mu0 epsilon0 E'
    rearrangements:
      - target: c
        equation: c = 1 / sqrt(mu0 * epsilon0)
        latex: 'c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}  % c mu0 epsilon0'
    category: fundamental
    relation_type: differential_relation
    physical_meaning:
      es: 'La variación espacial segunda del campo eléctrico es proporcional a su aceleración temporal. La constante de proporcionalidad es μ₀ε₀ = 1/c².'
      en: 'The second spatial variation of the electric field is proportional to its temporal acceleration. The proportionality constant is μ₀ε₀ = 1/c².'
    constraints: [vacío, campos diferenciables, sin cargas libres]
    validity:
      es: Válida en el vacío libre de cargas. En medios materiales, μ₀ε₀ se reemplaza por με.
      en: Valid in charge-free vacuum. In material media, μ₀ε₀ is replaced by με.
    dimension_check: 'V/m^3 = (H/m)(F/m) · (V/m)/s^2 → igual'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [onda, propagacion, campo-electrico]
    result_semantics:
      target: c
      kind: velocidad de propagación
      sign_meaning:
        es: La velocidad de propagación es siempre positiva y constante en el vacío.
        en: The propagation speed is always positive and constant in vacuum.
      absolute_value_meaning:
        es: El módulo 2.998×10⁸ m/s es la velocidad máxima en el universo.
        en: The magnitude 2.998×10⁸ m/s is the maximum speed in the universe.
    domain_checks:
      - condition: mu0 > 0 and epsilon0 > 0
        message:
          es: Las constantes del vacío deben ser positivas.
          en: Vacuum constants must be positive.
    coherence_checks:
      - condition: abs(c - 2.998e8) < 1e6
        message:
          es: El valor de c calculado debe ser aproximadamente 3×10⁸ m/s.
          en: The calculated value of c must be approximately 3×10⁸ m/s.
    graph_implications: [relacion_dispersion_lineal]
    pedagogical_triggers:
      - '¿De dónde viene c en las ecuaciones de Maxwell?'
      - '¿Por qué μ₀ε₀ = 1/c²?'
    nivel: 2

  - id: onda_B
    title:
      es: Ecuación de onda para el campo magnético
      en: Wave equation for the magnetic field
    equation: nabla2_B = mu0 * epsilon0 * d2B_dt2
    latex: '\\nabla^2\\mathbf{B} = \\mu_0\\varepsilon_0\\,\\frac{\\partial^2\\mathbf{B}}{\\partial t^2}  % mu0 epsilon0 B'
    rearrangements: []
    category: fundamental
    relation_type: differential_relation
    physical_meaning:
      es: El campo magnético satisface la misma ecuación de onda que E. Ambos campos se propagan a c con la misma velocidad y estructura.
      en: The magnetic field satisfies the same wave equation as E. Both fields propagate at c with identical speed and structure.
    constraints: [vacío, sin cargas libres]
    validity:
      es: Válida en el vacío. Simétrica con la ecuación de onda de E.
      en: Valid in vacuum. Symmetric with the wave equation for E.
    dimension_check: 'T/m^2 = (H/m)(F/m) · T/s^2 → igual'
    calculable: false
    motivo_no_calculable: 'Ecuación diferencial vectorial; la solución requiere condiciones de contorno'
    used_in: [teoria.md]
    interpretation_tags: [onda, propagacion, campo-magnetico]
    result_semantics:
      target: B
      kind: campo oscilante
      sign_meaning:
        es: B es perpendicular a E y a la dirección de propagación k.
        en: B is perpendicular to E and to the propagation direction k.
      absolute_value_meaning:
        es: La amplitud de B es igual a la de E dividida por c.
        en: The amplitude of B equals that of E divided by c.
    domain_checks: []
    coherence_checks: []
    graph_implications: [campo_transversal]
    pedagogical_triggers:
      - '¿Por qué E y B obedecen la misma ecuación?'
      - '¿Qué relación hay entre las amplitudes de E y B?'
    nivel: 2

  - id: velocidad_luz
    title:
      es: Velocidad de la luz desde μ₀ y ε₀
      en: Speed of light from μ₀ and ε₀
    equation: c = 1 / sqrt(mu0 * epsilon0)
    latex: 'c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}  % c mu0 epsilon0'
    rearrangements:
      - target: epsilon0
        equation: epsilon0 = 1 / (mu0 * c^2)
        latex: '\\varepsilon_0 = \\frac{1}{\\mu_0 c^2}  % epsilon0 mu0 c'
      - target: mu0
        equation: mu0 = 1 / (epsilon0 * c^2)
        latex: '\\mu_0 = \\frac{1}{\\varepsilon_0 c^2}  % mu0 epsilon0 c'
    category: derived
    relation_type: definition
    physical_meaning:
      es: La velocidad de la luz no es un postulado sino una consecuencia directa de los valores de μ₀ y ε₀ que determinan las fuerzas eléctricas y magnéticas en el vacío.
      en: The speed of light is not a postulate but a direct consequence of the values of μ₀ and ε₀ that determine electric and magnetic forces in vacuum.
    constraints: [vacío]
    validity:
      es: Exacta en el vacío. Maxwell la dedujo en 1865 y coincidió con la c medida experimentalmente.
      en: Exact in vacuum. Maxwell derived it in 1865 and it matched the experimentally measured c.
    dimension_check: '(H/m · F/m)^{-1/2} = (s^2/m^2)^{-1/2} = m/s'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md, aplicaciones.md]
    interpretation_tags: [constante-fundamental, velocidad, prediccion]
    result_semantics:
      target: c
      kind: constante universal
      sign_meaning:
        es: 'c es siempre positiva; su valor exacto es 299 792 458 m/s (definición del metro desde 1983).'
        en: 'c is always positive; its exact value is 299 792 458 m/s (definition of the metre since 1983).'
      absolute_value_meaning:
        es: El valor numérico de c conecta las unidades eléctricas y magnéticas del SI.
        en: The numerical value of c connects the electrical and magnetic units of the SI.
    domain_checks:
      - condition: mu0 > 0 and epsilon0 > 0
        message:
          es: Ambas constantes del vacío deben ser positivas.
          en: Both vacuum constants must be positive.
    coherence_checks:
      - condition: abs(c - 299792458) < 1000
        message:
          es: El resultado debe ser aproximadamente 3×10⁸ m/s.
          en: The result must be approximately 3×10⁸ m/s.
    graph_implications: [pendiente_dispersion]
    pedagogical_triggers:
      - '¿Coincidencia o consecuencia que c salga de μ₀ y ε₀?'
      - '¿Cómo verificó Maxwell que la velocidad era la correcta?'
    nivel: 1

  - id: relacion_dispersion
    title:
      es: Relación de dispersión en el vacío
      en: Dispersion relation in vacuum
    equation: omega = c * k
    latex: '\\omega = c\\,k  % omega c k'
    rearrangements:
      - target: k
        equation: k = omega / c
        latex: 'k = \\frac{\\omega}{c}  % k omega c'
      - target: omega
        equation: omega = c * k
        latex: '\\omega = c\\,k  % omega c k'
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: 'En el vacío no hay dispersión: la velocidad de fase ω/k es siempre c, independientemente de la frecuencia. Todos los colores viajan a la misma velocidad.'
      en: 'In vacuum there is no dispersion: the phase velocity ω/k is always c, regardless of frequency. All colors travel at the same speed.'
    constraints: [vacío, onda plana monocromática]
    validity:
      es: Válida en el vacío para cualquier frecuencia del espectro EM. En medios dispersivos ω/k depende de ω.
      en: Valid in vacuum for any EM frequency. In dispersive media ω/k depends on ω.
    dimension_check: 'rad/s = (m/s)(rad/m)'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [dispersion, velocidad-fase, lineal]
    result_semantics:
      target: omega
      kind: frecuencia angular
      sign_meaning:
        es: ω positivo indica propagación en la dirección de k.
        en: Positive ω indicates propagation in the direction of k.
      absolute_value_meaning:
        es: El valor numérico determina la posición en el espectro EM.
        en: The numerical value determines the position in the EM spectrum.
    domain_checks:
      - condition: k > 0
        message:
          es: El número de onda debe ser positivo para una onda propagante.
          en: Wave number must be positive for a propagating wave.
    coherence_checks:
      - condition: omega / k == c
        message:
          es: La velocidad de fase debe ser exactamente c en el vacío.
          en: Phase velocity must be exactly c in vacuum.
    graph_implications: [recta_lineal_en_omega_k]
    pedagogical_triggers:
      - '¿Qué significa que la relación de dispersión sea lineal?'
      - '¿Cómo cambia esta relación en un medio material?'
    nivel: 2

  - id: solucion_onda_plana_E
    title:
      es: Solución de onda plana para E
      en: Plane wave solution for E
    equation: E = E0 * cos(k*x - omega*t)
    latex: '\\mathbf{E} = E_0\\cos(kx - \\omega t)\\,\\hat{y}  % E omega k'
    rearrangements:
      - target: lambda
        equation: lambda = 2 * pi / k
        latex: '\\lambda = \\frac{2\\pi}{k}  % lambda k'
    category: auxiliary
    relation_type: definition
    physical_meaning:
      es: Solución particular de la ecuación de onda para una onda plana propagándose en +x. El campo E oscila en el plano transversal.
      en: Particular solution of the wave equation for a plane wave propagating in +x. The E field oscillates in the transverse plane.
    constraints: [onda plana, vacío, propagación en +x]
    validity:
      es: Válida para cualquier frecuencia del espectro EM en el vacío.
      en: Valid for any EM frequency in vacuum.
    dimension_check: 'V/m = V/m (amplitud)'
    calculable: true
    motivo_no_calculable: ''
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [solucion-particular, onda-plana, transversal]
    result_semantics:
      target: E
      kind: campo eléctrico oscilante
      sign_meaning:
        es: El signo del coseno indica la fase local; positivo/negativo refleja la dirección de oscilación.
        en: The sign of the cosine indicates the local phase; positive/negative reflects the oscillation direction.
      absolute_value_meaning:
        es: La amplitud E₀ determina la intensidad de la onda.
        en: The amplitude E₀ determines the wave intensity.
    domain_checks:
      - condition: omega > 0 and k > 0
        message:
          es: La frecuencia y el número de onda deben ser positivos.
          en: Frequency and wave number must be positive.
    coherence_checks:
      - condition: omega / k == c
        message:
          es: Debe cumplirse la relación de dispersión ω = ck.
          en: The dispersion relation ω = ck must hold.
    graph_implications: [curva_senoidal_E_vs_x]
    pedagogical_triggers:
      - '¿Por qué E es transversal a k?'
      - '¿Qué determina la dirección de polarización?'
    nivel: 2
`;export{e as default};
