const e=`- id: onda_mecanica_velocidad
  title: { es: Velocidad, longitud de onda y frecuencia, en: Speed, wavelength, and frequency }
  equation: "v = lambda * f"
  latex: "v = \\\\lambda f  % lambda A"
  rearrangements:
    - { target: v, equation: "v = lambda * f", latex: "v = \\\\lambda f  % lambda A" }
    - { target: lambda, equation: "lambda = v / f", latex: "\\\\lambda = \\\\frac{v}{f}  % lambda" }
    - { target: f, equation: "f = v / lambda", latex: "f = \\\\frac{v}{\\\\lambda}  % lambda" }
  category: fundamental
  relation_type: definition
  physical_meaning: { es: "[[lambda]] y [[f]] describen la repeticion espacial y temporal de la perturbacion mecanica.", en: "[[lambda]] and [[f]] describe spatial and temporal repetition of the mechanical disturbance." }
  constraints: ["[[lambda]] > 0", "[[f]] > 0", "medio estable"]
  validity: { es: "Valida para ondas periodicas en un medio aproximadamente uniforme.", en: "Valid for periodic waves in an approximately uniform medium." }
  dimension_check: "[L T⁻¹] = [L] [T⁻¹]"
  calculable: true
  motivo_no_calculable: { es: "Calculable si se conocen dos magnitudes positivas entre [[v]], [[lambda]] y [[f]].", en: "Calculable when two positive quantities among [[v]], [[lambda]], and [[f]] are known." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [propagacion, escala_espacial, escala_temporal]
  result_semantics:
    target: v
    kind: positive_speed
    sign_meaning: { es: "El signo no se usa porque [[v]] es rapidez.", en: "The sign is not used because [[v]] is speed." }
    absolute_value_meaning: { es: "El valor mide cuanto avanza el patron por segundo.", en: "The value measures how far the pattern advances per second." }
  domain_checks:
    - { id: lambda_positive, condition: "lambda > 0", message: { es: "[[lambda]] debe ser positiva.", en: "[[lambda]] must be positive." } }
    - { id: f_positive, condition: "f > 0", message: { es: "[[f]] debe ser positiva.", en: "[[f]] must be positive." } }
  coherence_checks:
    - { id: v_positive, condition: "v > 0", message: { es: "[[v]] positiva indica propagacion real.", en: "Positive [[v]] indicates real propagation." } }
  graph_implications:
    - { id: spacing_motion, message: { es: "Mayor [[lambda]] separa mas las crestas en Coord.", en: "Larger [[lambda]] separates crests more in Coord." } }
  pedagogical_triggers:
    - { id: particle_speed_confusion, detect_when: "v confused with particle speed", message: { es: "Distingue rapidez de patron y rapidez local del medio.", en: "Distinguish pattern speed from local medium speed." } }
- id: velocidad_cuerda
  title: { es: Velocidad en cuerda ideal, en: Speed on an ideal string }
  equation: "v = sqrt(T / mu)"
  latex: "v = \\\\sqrt{\\\\frac{T}{\\\\mu}}  % mu"
  rearrangements:
    - { target: v, equation: "v = sqrt(T / mu)", latex: "v = \\\\sqrt{\\\\frac{T}{\\\\mu}}  % mu" }
    - { target: T, equation: "T = v^2 * mu", latex: "T = v^2 \\\\mu  % mu" }
    - { target: mu, equation: "mu = T / v^2", latex: "\\\\mu = \\\\frac{T}{v^2}  % mu" }
  category: structural
  relation_type: constitutive_relation
  physical_meaning: { es: "En una cuerda, [[T]] aporta restauracion y [[mu]] aporta inercia.", en: "On a string, [[T]] provides restoration and [[mu]] provides inertia." }
  constraints: ["[[T]] > 0", "[[mu]] > 0", "cuerda ideal uniforme"]
  validity: { es: "Valida para pequenas oscilaciones transversales en cuerda tensa uniforme.", en: "Valid for small transverse oscillations on a uniform tense string." }
  dimension_check: "[L T⁻¹] = sqrt([M L T⁻²] / [M L⁻¹])"
  calculable: true
  motivo_no_calculable: { es: "Calculable si se conocen [[T]] y [[mu]], o si se despeja una de ellas con [[v]].", en: "Calculable if [[T]] and [[mu]] are known, or if one is solved with [[v]]." }
  used_in: [teoria, ejemplos, interpretacion, modelos]
  interpretation_tags: [medio_material, restauracion, inercia]
  result_semantics:
    target: v
    kind: positive_speed
    sign_meaning: { es: "El signo no se usa porque [[v]] es rapidez.", en: "The sign is not used because [[v]] is speed." }
    absolute_value_meaning: { es: "El valor indica la respuesta del medio cuerda.", en: "The value indicates the string medium response." }
  domain_checks:
    - { id: T_positive, condition: "T > 0", message: { es: "[[T]] debe ser positiva.", en: "[[T]] must be positive." } }
    - { id: mu_positive, condition: "mu > 0", message: { es: "[[mu]] debe ser positiva.", en: "[[mu]] must be positive." } }
  coherence_checks:
    - { id: tension_increases_speed, condition: "T > 0 and mu > 0", message: { es: "Aumentar [[T]] eleva [[v]] si [[mu]] no cambia.", en: "Increasing [[T]] raises [[v]] if [[mu]] does not change." } }
  graph_implications:
    - { id: medium_speed_shift, message: { es: "Cambiar [[T]] o [[mu]] cambia el avance del patron.", en: "Changing [[T]] or [[mu]] changes pattern advance." } }
  pedagogical_triggers:
    - { id: tension_period_confusion, detect_when: "T interpreted as period", message: { es: "En este leaf [[T]] es tension, no periodo.", en: "In this leaf [[T]] is tension, not period." } }
`;export{e as default};
