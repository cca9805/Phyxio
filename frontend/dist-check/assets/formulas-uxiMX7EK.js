const e=`- id: condicion_estacionaria_cuerda
  title: { es: Condicion espacial de estacionariedad, en: Spatial standing condition }
  equation: "L = n * lambda / 2"
  latex: "L = \\\\frac{n\\\\lambda}{2}  % lambda"
  rearrangements:
    - { target: L, equation: "L = n * lambda / 2", latex: "L = \\\\frac{n\\\\lambda}{2}  % lambda" }
    - { target: lambda, equation: "lambda = 2 * L / n", latex: "\\\\lambda = \\\\frac{2L}{n}  % lambda" }
    - { target: n, equation: "n = 2 * L / lambda", latex: "n = \\\\frac{2L}{\\\\lambda}  % lambda" }
  category: fundamental
  relation_type: geometric_interpretation
  physical_meaning: { es: "La cavidad solo admite modos donde cabe un numero entero de semilongitudes de onda.", en: "The cavity only admits modes where an integer number of half-wavelengths fits." }
  constraints: ["[[L]] > 0", "[[lambda]] > 0", "[[n]] entero positivo"]
  validity: { es: "Valida para extremos equivalentes fijos o condiciones de frontera que impongan nodos compatibles.", en: "Valid for equivalent fixed ends or boundary conditions imposing compatible nodes." }
  dimension_check: "[L] = [1] [L]"
  calculable: true
  motivo_no_calculable: { es: "Calculable si se conocen dos magnitudes entre [[L]], [[lambda]] y [[n]].", en: "Calculable if two quantities among [[L]], [[lambda]], and [[n]] are known." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [modo_entero, frontera, geometria]
  result_semantics:
    target: L
    kind: positive_length
    sign_meaning: { es: "El signo no se usa porque [[L]] es longitud.", en: "The sign is not used because [[L]] is length." }
    absolute_value_meaning: { es: "El valor indica la cavidad necesaria para sostener el modo.", en: "The value indicates the cavity needed to sustain the mode." }
  domain_checks:
    - { id: L_positive, condition: "L > 0", message: { es: "[[L]] debe ser positiva.", en: "[[L]] must be positive." } }
    - { id: n_integer, condition: "n >= 1", message: { es: "[[n]] debe ser entero positivo.", en: "[[n]] must be a positive integer." } }
  coherence_checks:
    - { id: half_wavelength_count, condition: "n > 0", message: { es: "El modo cuenta semilongitudes de onda completas.", en: "The mode counts complete half-wavelengths." } }
  graph_implications:
    - { id: boundary_fit, message: { es: "El grafico debe cerrar nodos o fronteras compatibles en [[L]].", en: "The graph should close compatible nodes or boundaries at [[L]]." } }
  pedagogical_triggers:
    - { id: noninteger_mode, detect_when: "n not integer", message: { es: "Un [[n]] no entero no representa modo estacionario permitido.", en: "A noninteger [[n]] does not represent an allowed standing mode." } }
- id: frecuencia_modo_estacionario
  title: { es: Frecuencia de modo estacionario, en: Standing-mode frequency }
  equation: "f_n = n * v / (2 * L)"
  latex: "f_n = \\\\frac{n v}{2L}"
  rearrangements:
    - { target: f_n, equation: "f_n = n * v / (2 * L)", latex: "f_n = \\\\frac{n v}{2L}" }
    - { target: v, equation: "v = 2 * L * f_n / n", latex: "v = \\\\frac{2L f_n}{n}" }
    - { target: L, equation: "L = n * v / (2 * f_n)", latex: "L = \\\\frac{n v}{2 f_n}" }
    - { target: n, equation: "n = 2 * L * f_n / v", latex: "n = \\\\frac{2L f_n}{v}" }
  category: derived
  relation_type: definition
  physical_meaning: { es: "[[f_n]] combina la condicion geometrica con la rapidez [[v]] del medio.", en: "[[f_n]] combines the geometric condition with medium speed [[v]]." }
  constraints: ["[[L]] > 0", "[[v]] > 0", "[[n]] entero positivo"]
  validity: { es: "Valida cuando la velocidad del medio es uniforme y las fronteras seleccionan modos enteros.", en: "Valid when medium speed is uniform and boundaries select integer modes." }
  dimension_check: "[T⁻¹] = [1] [L T⁻¹] / [L]"
  calculable: true
  motivo_no_calculable: { es: "Calculable con [[n]], [[v]] y [[L]], o por despeje equivalente.", en: "Calculable with [[n]], [[v]], and [[L]], or by equivalent rearrangement." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [frecuencia_modal, resonancia, medio]
  result_semantics:
    target: f_n
    kind: positive_frequency
    sign_meaning: { es: "El signo no se usa porque [[f_n]] es frecuencia.", en: "The sign is not used because [[f_n]] is frequency." }
    absolute_value_meaning: { es: "El valor indica la tasa temporal del modo permitido.", en: "The value indicates the temporal rate of the allowed mode." }
  domain_checks:
    - { id: v_positive, condition: "v > 0", message: { es: "[[v]] debe ser positiva.", en: "[[v]] must be positive." } }
    - { id: fn_positive, condition: "f_n > 0", message: { es: "[[f_n]] debe ser positiva.", en: "[[f_n]] must be positive." } }
  coherence_checks:
    - { id: higher_mode_higher_frequency, condition: "n >= 1", message: { es: "Para [[L]] y [[v]] fijos, mayor [[n]] aumenta [[f_n]].", en: "For fixed [[L]] and [[v]], larger [[n]] increases [[f_n]]." } }
  graph_implications:
    - { id: mode_label, message: { es: "El grafico debe mostrar mas vientres cuando aumenta [[n]].", en: "The graph should show more antinodes when [[n]] increases." } }
  pedagogical_triggers:
    - { id: forcing_any_frequency, detect_when: "external frequency arbitrary", message: { es: "No toda frecuencia externa coincide con una [[f_n]] permitida.", en: "Not every external frequency matches an allowed [[f_n]]." } }
`;export{e as default};
