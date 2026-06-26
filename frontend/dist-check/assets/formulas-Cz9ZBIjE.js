const e=`- id: velocidad_cuerda_tensa
  title: { es: Velocidad en cuerda tensa, en: Speed on a taut string }
  equation: "v = sqrt(T / mu)"
  latex: "v = \\\\sqrt{\\\\frac{T}{\\\\mu}}"
  rearrangements:
    - { target: v, equation: "v = sqrt(T / mu)", latex: "v = \\\\sqrt{\\\\frac{T}{\\\\mu}}" }
    - { target: T, equation: "T = mu * v^2", latex: "T = \\\\mu v^2" }
    - { target: mu, equation: "mu = T / v^2", latex: "\\\\mu = \\\\frac{T}{v^2}" }
  category: fundamental
  relation_type: mechanical_model
  physical_meaning: { es: "[[v]] aumenta con [[T]] y disminuye con [[mu]] porque la cuerda combina traccion e inercia lineal.", en: "[[v]] increases with [[T]] and decreases with [[mu]] because the string combines tension and linear inertia." }
  constraints: ["[[T]] > 0", "[[mu]] > 0"]
  validity: { es: "Valida para cuerda flexible, tension uniforme, amplitud pequena y masa lineal uniforme.", en: "Valid for a flexible string, uniform tension, small amplitude, and uniform linear mass." }
  dimension_check: "[L T⁻¹] = sqrt([M L T⁻²] / [M L⁻¹])"
  calculable: true
  motivo_no_calculable: { es: "Calculable si se conocen [[T]] y [[mu]], o por despeje con [[v]].", en: "Calculable if [[T]] and [[mu]] are known, or by rearrangement with [[v]]." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [tension, densidad_lineal, rapidez]
  result_semantics:
    target: v
    kind: positive_speed
    sign_meaning: { es: "El signo no se usa porque [[v]] es rapidez.", en: "The sign is not used because [[v]] is speed." }
    absolute_value_meaning: { es: "El valor indica la rapidez de las ondas viajeras que sostienen la estacionaria.", en: "The value indicates the traveling-wave speed that sustains the standing pattern." }
  domain_checks:
    - { id: T_positive, condition: "T > 0", message: { es: "[[T]] debe ser positiva.", en: "[[T]] must be positive." } }
    - { id: mu_positive, condition: "mu > 0", message: { es: "[[mu]] debe ser positiva.", en: "[[mu]] must be positive." } }
  coherence_checks:
    - { id: speed_positive, condition: "v > 0", message: { es: "[[v]] positiva confirma propagacion posible.", en: "Positive [[v]] confirms possible propagation." } }
  graph_implications:
    - { id: speed_scale, message: { es: "El grafico debe elevar la escala de frecuencia cuando aumenta [[v]].", en: "The graph should raise the frequency scale when [[v]] increases." } }
  pedagogical_triggers:
    - { id: linear_tension_error, detect_when: "frequency doubled by doubling tension", message: { es: "Duplicar [[T]] no duplica [[v]], porque aparece una raiz cuadrada.", en: "Doubling [[T]] does not double [[v]], because a square root is involved." } }
- id: frecuencia_modo_cuerda
  title: { es: Frecuencia modal de cuerda fija, en: Fixed-string modal frequency }
  equation: "f_n = n * v / (2 * L)"
  latex: "f_n = \\\\frac{n v}{2L}"
  rearrangements:
    - { target: f_n, equation: "f_n = n * v / (2 * L)", latex: "f_n = \\\\frac{n v}{2L}" }
    - { target: v, equation: "v = 2 * L * f_n / n", latex: "v = \\\\frac{2L f_n}{n}" }
    - { target: L, equation: "L = n * v / (2 * f_n)", latex: "L = \\\\frac{n v}{2 f_n}" }
    - { target: n, equation: "n = 2 * L * f_n / v", latex: "n = \\\\frac{2L f_n}{v}" }
  category: derived
  relation_type: modal_selection
  physical_meaning: { es: "[[f_n]] combina la rapidez de propagacion con la condicion de extremos fijos.", en: "[[f_n]] combines propagation speed with the fixed-end condition." }
  constraints: ["[[L]] > 0", "[[v]] > 0", "[[n]] entero positivo"]
  validity: { es: "Valida para cuerda fija-fija ideal, con tension casi constante y sin rigidez flexional apreciable.", en: "Valid for an ideal fixed-fixed string with nearly constant tension and negligible bending stiffness." }
  dimension_check: "[T⁻¹] = [1] [L T⁻¹] / [L]"
  calculable: true
  motivo_no_calculable: { es: "Calculable con [[n]], [[v]] y [[L]], o por despejes equivalentes.", en: "Calculable with [[n]], [[v]], and [[L]], or by equivalent rearrangements." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [modo, frecuencia, resonancia]
  result_semantics:
    target: f_n
    kind: positive_frequency
    sign_meaning: { es: "El signo no se usa porque [[f_n]] es una frecuencia.", en: "The sign is not used because [[f_n]] is a frequency." }
    absolute_value_meaning: { es: "El valor indica la frecuencia propia seleccionada por el modo entero.", en: "The value indicates the natural frequency selected by the integer mode." }
  domain_checks:
    - { id: L_positive, condition: "L > 0", message: { es: "[[L]] debe ser positiva.", en: "[[L]] must be positive." } }
    - { id: mode_positive, condition: "n >= 1", message: { es: "[[n]] debe ser entero positivo.", en: "[[n]] must be a positive integer." } }
  coherence_checks:
    - { id: higher_mode_higher_frequency, condition: "n >= 1", message: { es: "Con [[L]] y [[v]] fijos, mayor [[n]] aumenta [[f_n]].", en: "For fixed [[L]] and [[v]], larger [[n]] increases [[f_n]]." } }
  graph_implications:
    - { id: harmonic_ladder, message: { es: "El grafico debe mostrar mas vientres y mayor [[f_n]] al subir [[n]].", en: "The graph should show more antinodes and larger [[f_n]] as [[n]] rises." } }
  pedagogical_triggers:
    - { id: arbitrary_frequency_error, detect_when: "external frequency arbitrary", message: { es: "Una cuerda no responde igual a cualquier frecuencia; resalta cerca de sus [[f_n]].", en: "A string does not respond equally to any frequency; it stands out near its [[f_n]]." } }
- id: longitud_onda_modo_cuerda
  title: { es: Longitud de onda modal en cuerda fija, en: Modal wavelength in a fixed string }
  equation: "lambda_n = 2 * L / n"
  latex: "\\\\lambda_n = \\\\frac{2L}{n}"
  rearrangements:
    - { target: lambda_n, equation: "lambda_n = 2 * L / n", latex: "\\\\lambda_n = \\\\frac{2L}{n}" }
    - { target: L, equation: "L = n * lambda_n / 2", latex: "L = \\\\frac{n\\\\lambda_n}{2}" }
    - { target: n, equation: "n = 2 * L / lambda_n", latex: "n = \\\\frac{2L}{\\\\lambda_n}" }
  category: derived
  relation_type: geometric_constraint
  physical_meaning: { es: "[[lambda_n]] expresa como la geometria fija de la cuerda obliga a encajar semilongitudes de onda.", en: "[[lambda_n]] expresses how fixed string geometry forces half-wavelengths to fit." }
  constraints: ["[[L]] > 0", "[[n]] entero positivo", "[[lambda_n]] > 0"]
  validity: { es: "Valida para extremos fijos equivalentes a nodos y cuerda uniforme.", en: "Valid for fixed ends equivalent to nodes and a uniform string." }
  dimension_check: "[L] = [L] / [1]"
  calculable: true
  motivo_no_calculable: { es: "Calculable si se conocen [[L]] y [[n]], o por despeje con [[lambda_n]].", en: "Calculable if [[L]] and [[n]] are known, or by rearrangement with [[lambda_n]]." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [geometria, nodos, modo]
  result_semantics:
    target: lambda_n
    kind: positive_length
    sign_meaning: { es: "El signo no se usa porque [[lambda_n]] es longitud.", en: "The sign is not used because [[lambda_n]] is length." }
    absolute_value_meaning: { es: "El valor indica la escala espacial completa de la onda asociada al modo.", en: "The value indicates the full spatial scale of the wave associated with the mode." }
  domain_checks:
    - { id: lambda_positive, condition: "lambda_n > 0", message: { es: "[[lambda_n]] debe ser positiva.", en: "[[lambda_n]] must be positive." } }
    - { id: integer_mode, condition: "n >= 1", message: { es: "[[n]] debe contar modos enteros.", en: "[[n]] must count integer modes." } }
  coherence_checks:
    - { id: higher_mode_shorter_wavelength, condition: "n >= 1", message: { es: "Al aumentar [[n]], [[lambda_n]] disminuye para la misma [[L]].", en: "As [[n]] increases, [[lambda_n]] decreases for the same [[L]]." } }
  graph_implications:
    - { id: wavelength_spacing, message: { es: "El grafico debe comprimir los vientres cuando baja [[lambda_n]].", en: "The graph should compress antinodes when [[lambda_n]] decreases." } }
  pedagogical_triggers:
    - { id: length_equals_wavelength_error, detect_when: "lambda_n equals L for every mode", message: { es: "[[lambda_n]] solo coincide con [[L]] en el segundo modo.", en: "[[lambda_n]] equals [[L]] only in the second mode." } }
`;export{e as default};
