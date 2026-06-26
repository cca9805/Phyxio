const e=`- id: velocidad_cuerda_tensa
  title: { es: "Velocidad en cuerda tensa", en: "Speed on a taut string" }
  equation: "v = sqrt(T / mu)"
  latex: "v = \\\\sqrt{\\\\frac{T}{\\\\mu}}"
  rearrangements:
    - { target: v, equation: "v = sqrt(T / mu)", latex: "v = \\\\sqrt{\\\\frac{T}{\\\\mu}}" }
    - { target: T, equation: "T = mu * v^2", latex: "T = \\\\mu v^2" }
    - { target: mu, equation: "mu = T / v^2", latex: "\\\\mu = \\\\frac{T}{v^2}" }
  category: fundamental
  relation_type: mechanical_model
  physical_meaning: { es: "[[v]] nace del balance entre restauracion por [[T]] e inercia lineal [[mu]].", en: "[[v]] comes from the balance between restoration by [[T]] and linear inertia [[mu]]." }
  constraints: ["[[T]] > 0", "[[mu]] > 0", "cuerda flexible y uniforme"]
  validity: { es: "Valida para cuerda ideal flexible, tension uniforme, amplitud pequena y densidad lineal constante.", en: "Valid for an ideal flexible string with uniform tension, small amplitude, and constant linear density." }
  dimension_check: "[L T⁻¹] = sqrt([M L T⁻²] / [M L⁻¹])"
  calculable: true
  motivo_no_calculable: { es: "No es calculable si falta [[T]] o [[mu]], salvo que se mida [[v]] directamente.", en: "Not calculable if [[T]] or [[mu]] is missing, unless [[v]] is measured directly." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord, grafico_svg]
  interpretation_tags: [tension, inercia, rapidez]
  result_semantics:
    target: v
    kind: positive_speed
    sign_meaning: { es: "El signo no se usa porque [[v]] es una rapidez.", en: "The sign is not used because [[v]] is a speed." }
    absolute_value_meaning: { es: "Indica cuantos metros avanza la perturbacion por segundo.", en: "Indicates how many meters the disturbance advances per second." }
  domain_checks:
    - { id: T_positive, condition: "T > 0", message: { es: "[[T]] debe ser positiva.", en: "[[T]] must be positive." } }
    - { id: mu_positive, condition: "mu > 0", message: { es: "[[mu]] debe ser positiva.", en: "[[mu]] must be positive." } }
  coherence_checks:
    - { id: speed_positive, condition: "v > 0", message: { es: "[[v]] debe resultar positiva.", en: "[[v]] must be positive." } }
  graph_implications:
    - { id: tension_curve, message: { es: "El grafico Coord debe mostrar crecimiento sublineal de [[v]] al aumentar [[T]].", en: "The Coord graph should show sublinear growth of [[v]] as [[T]] increases." } }
  pedagogical_triggers:
    - { id: direct_tension_error, detect_when: "T doubled and v doubled", message: { es: "Duplicar [[T]] no duplica [[v]]; la dependencia es de raiz.", en: "Doubling [[T]] does not double [[v]]; the dependence is square-root." } }

- id: frecuencia_desde_velocidad
  title: { es: "Frecuencia asociada a una longitud de onda", en: "Frequency associated with a wavelength" }
  equation: "f = v / lambda"
  latex: "f = \\\\frac{v}{\\\\lambda}"
  rearrangements:
    - { target: f, equation: "f = v / lambda", latex: "f = \\\\frac{v}{\\\\lambda}" }
    - { target: v, equation: "v = f * lambda", latex: "v = f\\\\lambda" }
    - { target: lambda, equation: "lambda = v / f", latex: "\\\\lambda = \\\\frac{v}{f}" }
  category: derived
  relation_type: wave_kinematics
  physical_meaning: { es: "Relaciona la rapidez decidida por la cuerda con el ritmo temporal y la escala espacial de la onda.", en: "Relates the speed set by the string with the temporal rhythm and spatial scale of the wave." }
  constraints: ["[[v]] > 0", "[[lambda]] > 0", "[[f]] > 0"]
  validity: { es: "Valida para ondas periodicas en un medio aproximadamente uniforme.", en: "Valid for periodic waves in an approximately uniform medium." }
  dimension_check: "[T⁻¹] = [L T⁻¹] / [L]"
  calculable: true
  motivo_no_calculable: { es: "Requiere conocer dos de las tres magnitudes [[v]], [[f]] y [[lambda]].", en: "Requires knowing two of the three magnitudes [[v]], [[f]], and [[lambda]]." }
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [frecuencia, longitud_de_onda, rapidez]
  result_semantics:
    target: f
    kind: positive_frequency
    sign_meaning: { es: "Frecuencia sin signo en este modelo.", en: "Frequency has no sign in this model." }
    absolute_value_meaning: { es: "Cuenta oscilaciones completas por segundo.", en: "Counts complete oscillations per second." }
  domain_checks:
    - { id: lambda_positive, condition: "lambda > 0", message: { es: "[[lambda]] debe ser positiva.", en: "[[lambda]] must be positive." } }
  coherence_checks:
    - { id: proportionality, condition: "v == f * lambda", message: { es: "La coherencia exige que [[v]] combine [[f]] y [[lambda]].", en: "Coherence requires [[v]] to combine [[f]] and [[lambda]]." } }
  graph_implications:
    - { id: wave_scale, message: { es: "El grafico Svg debe alargar el patron espacial si aumenta [[v]] con [[f]] fija.", en: "The Svg graph should lengthen the spatial pattern if [[v]] increases at fixed [[f]]." } }
  pedagogical_triggers:
    - { id: source_speed_error, detect_when: "frequency changes speed alone", message: { es: "Cambiar [[f]] no cambia [[v]] si el medio permanece igual.", en: "Changing [[f]] does not change [[v]] if the medium remains the same." } }

- id: longitud_onda_desde_velocidad
  title: { es: "Longitud de onda para frecuencia impuesta", en: "Wavelength for imposed frequency" }
  equation: "lambda = v / f"
  latex: "\\\\lambda = \\\\frac{v}{f}"
  rearrangements:
    - { target: lambda, equation: "lambda = v / f", latex: "\\\\lambda = \\\\frac{v}{f}" }
    - { target: v, equation: "v = lambda * f", latex: "v = \\\\lambda f" }
    - { target: f, equation: "f = v / lambda", latex: "f = \\\\frac{v}{\\\\lambda}" }
  category: derived
  relation_type: spatial_response
  physical_meaning: { es: "Si la fuente fija [[f]], una cuerda con mayor [[v]] necesita mayor [[lambda]].", en: "If the source fixes [[f]], a string with larger [[v]] needs larger [[lambda]]." }
  constraints: ["[[v]] > 0", "[[f]] > 0"]
  validity: { es: "Valida cuando la frecuencia es impuesta y la onda se propaga sin dispersion apreciable.", en: "Valid when frequency is imposed and the wave propagates without appreciable dispersion." }
  dimension_check: "[L] = [L T⁻¹] / [T⁻¹]"
  calculable: true
  motivo_no_calculable: { es: "Calculable con [[v]] y [[f]]; no decide por si sola la rapidez.", en: "Calculable with [[v]] and [[f]]; it does not decide speed by itself." }
  used_in: [teoria, ejemplos, interpretacion, grafico_svg]
  interpretation_tags: [escala_espacial, fuente, medio]
  result_semantics:
    target: lambda
    kind: positive_length
    sign_meaning: { es: "No hay signo: [[lambda]] es distancia.", en: "There is no sign: [[lambda]] is distance." }
    absolute_value_meaning: { es: "Distancia entre repeticiones equivalentes de la perturbacion.", en: "Distance between equivalent repetitions of the disturbance." }
  domain_checks:
    - { id: f_positive, condition: "f > 0", message: { es: "[[f]] debe ser positiva.", en: "[[f]] must be positive." } }
  coherence_checks:
    - { id: fixed_frequency_response, condition: "lambda > 0", message: { es: "Con [[f]] fija, mayor [[v]] implica mayor [[lambda]].", en: "At fixed [[f]], larger [[v]] implies larger [[lambda]]." } }
  graph_implications:
    - { id: spatial_stretch, message: { es: "El Svg debe estirar la separacion espacial cuando aumenta [[v]].", en: "The Svg should stretch the spatial separation when [[v]] increases." } }
  pedagogical_triggers:
    - { id: wavelength_cause_error, detect_when: "lambda treated as cause of speed", message: { es: "[[lambda]] se ajusta a [[v]] y [[f]]; no es la causa mecanica primaria.", en: "[[lambda]] adjusts to [[v]] and [[f]]; it is not the primary mechanical cause." } }

- id: frecuencia_fundamental_cuerda
  title: { es: "Frecuencia fundamental de un tramo fijo", en: "Fundamental frequency of a fixed segment" }
  equation: "f = v / (2 * L)"
  latex: "f = \\\\frac{v}{2 L}"
  rearrangements:
    - { target: f, equation: "f = v / (2 * L)", latex: "f = \\\\frac{v}{2 L}" }
    - { target: v, equation: "v = 2 * L * f", latex: "v = 2 L f" }
    - { target: L, equation: "L = v / (2 * f)", latex: "L = \\\\frac{v}{2 f}" }
  category: derived
  relation_type: boundary_bridge
  physical_meaning: { es: "Cuando la cuerda esta fija en ambos extremos, [[L]] convierte la rapidez [[v]] en la primera frecuencia compatible.", en: "When the string is fixed at both ends, [[L]] converts speed [[v]] into the first compatible frequency." }
  constraints: ["[[v]] > 0", "[[L]] > 0", "[[f]] > 0", "modo fundamental con extremos fijos"]
  validity: { es: "Valida para el modo fundamental de una cuerda ideal uniforme fija en ambos extremos.", en: "Valid for the fundamental mode of an ideal uniform string fixed at both ends." }
  dimension_check: "[T⁻¹] = [L T⁻¹] / [L]"
  calculable: true
  motivo_no_calculable: { es: "Calculable si se conocen [[v]] y [[L]]; no sustituye al calculo mecanico de la rapidez.", en: "Calculable if [[v]] and [[L]] are known; it does not replace the mechanical speed calculation." }
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [longitud, fundamental, frontera]
  result_semantics:
    target: f
    kind: positive_frequency
    sign_meaning: { es: "La frecuencia fundamental se interpreta como ritmo positivo.", en: "Fundamental frequency is interpreted as a positive rhythm." }
    absolute_value_meaning: { es: "Indica el menor ritmo estacionario compatible con [[L]] y [[v]].", en: "Indicates the lowest standing rhythm compatible with [[L]] and [[v]]." }
  domain_checks:
    - { id: L_positive, condition: "L > 0", message: { es: "[[L]] debe ser positiva para definir un tramo fijo.", en: "[[L]] must be positive to define a fixed segment." } }
    - { id: v_positive_fundamental, condition: "v > 0", message: { es: "[[v]] debe ser positiva antes de estimar la fundamental.", en: "[[v]] must be positive before estimating the fundamental." } }
  coherence_checks:
    - { id: longer_lower, condition: "L > 0", message: { es: "Con la misma [[v]], una [[L]] mayor reduce la frecuencia fundamental.", en: "At the same [[v]], a larger [[L]] lowers the fundamental frequency." } }
  graph_implications:
    - { id: fixed_segment_frequency, message: { es: "El grafico debe distinguir la rapidez local de la lectura de frecuencia impuesta por [[L]].", en: "The graph should distinguish local speed from the frequency reading imposed by [[L]]." } }
  pedagogical_triggers:
    - { id: length_speed_error, detect_when: "L used as cause of v", message: { es: "[[L]] no causa [[v]] en una cuerda uniforme; solo transforma esa rapidez en modos compatibles.", en: "[[L]] does not cause [[v]] in a uniform string; it only turns that speed into compatible modes." } }
`;export{e as default};
