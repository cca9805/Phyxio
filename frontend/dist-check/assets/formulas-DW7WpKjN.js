const e=`- id: frecuencia_tubo_abierto
  title: { es: Frecuencia de tubo abierto-abierto, en: Open-open tube frequency }
  equation: "f_n = n * v / (2 * L_eff)"
  latex: "f_n = \\\\frac{n v}{2L_{eff}}  % L_eff L"
  rearrangements:
    - { target: f_n, equation: "f_n = n * v / (2 * L_eff)", latex: "f_n = \\\\frac{n v}{2L_{eff}}  % L_eff L" }
    - { target: v, equation: "v = 2 * L_eff * f_n / n", latex: "v = \\\\frac{2L_{eff} f_n}{n}  % L_eff L" }
    - { target: L_eff, equation: "L_eff = n * v / (2 * f_n)", latex: "L_{eff} = \\\\frac{n v}{2 f_n}  % L_eff L" }
    - { target: n, equation: "n = 2 * L_eff * f_n / v", latex: "n = \\\\frac{2L_{eff} f_n}{v}  % L_eff L" }
  category: derived
  relation_type: modal_selection
  physical_meaning: { es: "Un tubo abierto por ambos extremos admite una serie completa de modos enteros.", en: "A tube open at both ends admits a complete series of integer modes." }
  constraints: ["[[L_eff]] > 0", "[[v]] > 0", "[[n]] entero positivo"]
  validity: { es: "Valida para tubos estrechos, aire casi uniforme y extremos abiertos aproximados por vientres de desplazamiento.", en: "Valid for narrow tubes, nearly uniform air, and open ends approximated by displacement antinodes." }
  dimension_check: "[T⁻¹] = [1] [L T⁻¹] / [L]"
  calculable: true
  motivo_no_calculable: { es: "Calculable con [[n]], [[v]] y [[L_eff]], o por despejes equivalentes.", en: "Calculable with [[n]], [[v]], and [[L_eff]], or by equivalent rearrangements." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [tubo_abierto, armonicos, resonancia]
  result_semantics:
    target: f_n
    kind: positive_frequency
    sign_meaning: { es: "El signo no se usa porque [[f_n]] es frecuencia.", en: "The sign is not used because [[f_n]] is frequency." }
    absolute_value_meaning: { es: "El valor indica una frecuencia propia permitida del tubo abierto.", en: "The value indicates an allowed natural frequency of the open tube." }
  domain_checks:
    - { id: open_length_positive, condition: "L_eff > 0", message: { es: "[[L_eff]] debe ser positiva.", en: "[[L_eff]] must be positive." } }
    - { id: open_mode_positive, condition: "n >= 1", message: { es: "[[n]] debe ser entero positivo.", en: "[[n]] must be a positive integer." } }
  coherence_checks:
    - { id: open_higher_mode, condition: "n >= 1", message: { es: "En tubo abierto, mayor [[n]] aumenta [[f_n]].", en: "In an open tube, larger [[n]] increases [[f_n]]." } }
  graph_implications:
    - { id: open_full_series, message: { es: "El grafico debe permitir armonicos consecutivos.", en: "The graph should allow consecutive harmonics." } }
  pedagogical_triggers:
    - { id: open_closed_confusion, detect_when: "closed tube used as open", message: { es: "Revisa si el tubo tiene dos extremos abiertos antes de usar todos los modos.", en: "Check whether the tube has two open ends before using all modes." } }
- id: frecuencia_tubo_cerrado
  title: { es: Frecuencia de tubo abierto-cerrado, en: Open-closed tube frequency }
  equation: "f_n = (2 * m - 1) * v / (4 * L_eff)"
  latex: "f_n = \\\\frac{(2m-1)v}{4L_{eff}}  % L_eff L"
  rearrangements:
    - { target: f_n, equation: "f_n = (2 * m - 1) * v / (4 * L_eff)", latex: "f_n = \\\\frac{(2m-1)v}{4L_{eff}}  % L_eff L" }
    - { target: v, equation: "v = 4 * L_eff * f_n / (2 * m - 1)", latex: "v = \\\\frac{4L_{eff} f_n}{2m-1}  % L_eff L" }
    - { target: L_eff, equation: "L_eff = (2 * m - 1) * v / (4 * f_n)", latex: "L_{eff} = \\\\frac{(2m-1)v}{4 f_n}  % L_eff L" }
    - { target: m, equation: "m = (4 * L_eff * f_n / v + 1) / 2", latex: "m = \\\\frac{4L_{eff} f_n/v + 1}{2}  % L_eff L" }
  category: derived
  relation_type: modal_selection
  physical_meaning: { es: "Un tubo cerrado por un extremo solo admite factores impares de la serie ideal.", en: "A tube closed at one end admits only odd factors of the ideal series." }
  constraints: ["[[L_eff]] > 0", "[[v]] > 0", "[[m]] entero positivo"]
  validity: { es: "Valida cuando un extremo funciona como nodo de desplazamiento y el otro como vientre de desplazamiento.", en: "Valid when one end acts as a displacement node and the other as a displacement antinode." }
  dimension_check: "[T⁻¹] = [1] [L T⁻¹] / [L]"
  calculable: true
  motivo_no_calculable: { es: "Calculable con [[m]], [[v]] y [[L_eff]], o por despejes equivalentes.", en: "Calculable with [[m]], [[v]], and [[L_eff]], or by equivalent rearrangements." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [tubo_cerrado, impares, resonancia]
  result_semantics:
    target: f_n
    kind: positive_frequency
    sign_meaning: { es: "El signo no se usa porque [[f_n]] es frecuencia.", en: "The sign is not used because [[f_n]] is frequency." }
    absolute_value_meaning: { es: "El valor indica una frecuencia propia permitida del tubo cerrado.", en: "The value indicates an allowed natural frequency of the closed tube." }
  domain_checks:
    - { id: closed_length_positive, condition: "L_eff > 0", message: { es: "[[L_eff]] debe ser positiva.", en: "[[L_eff]] must be positive." } }
    - { id: closed_index_positive, condition: "m >= 1", message: { es: "[[m]] debe ser entero positivo.", en: "[[m]] must be a positive integer." } }
  coherence_checks:
    - { id: closed_odd_series, condition: "m >= 1", message: { es: "El factor modal cerrado debe ser impar.", en: "The closed-tube modal factor must be odd." } }
  graph_implications:
    - { id: closed_odd_modes, message: { es: "El grafico debe mostrar solo resonancias impares.", en: "The graph should show only odd resonances." } }
  pedagogical_triggers:
    - { id: even_harmonic_error, detect_when: "even harmonic in closed tube", message: { es: "Un tubo abierto-cerrado ideal no contiene el segundo armonico de la serie abierta.", en: "An ideal open-closed tube does not contain the second harmonic of the open series." } }
- id: longitud_onda_tubo_abierto
  title: { es: Longitud de onda en tubo abierto, en: Wavelength in an open tube }
  equation: "lambda_n = 2 * L_eff / n"
  latex: "\\\\lambda_n = \\\\frac{2L_{eff}}{n}  % L_eff L"
  rearrangements:
    - { target: lambda_n, equation: "lambda_n = 2 * L_eff / n", latex: "\\\\lambda_n = \\\\frac{2L_{eff}}{n}  % L_eff L" }
    - { target: L_eff, equation: "L_eff = n * lambda_n / 2", latex: "L_{eff} = \\\\frac{n\\\\lambda_n}{2}  % L_eff L" }
    - { target: n, equation: "n = 2 * L_eff / lambda_n", latex: "n = \\\\frac{2L_{eff}}{\\\\lambda_n}  % L_eff L" }
  category: derived
  relation_type: geometric_constraint
  physical_meaning: { es: "En tubo abierto-abierto caben semilongitudes enteras entre vientres de desplazamiento.", en: "In an open-open tube, integer half-wavelengths fit between displacement antinodes." }
  constraints: ["[[L_eff]] > 0", "[[n]] entero positivo", "[[lambda_n]] > 0"]
  validity: { es: "Valida para extremos abiertos equivalentes y tubo estrecho.", en: "Valid for equivalent open ends and a narrow tube." }
  dimension_check: "[L] = [L] / [1]"
  calculable: true
  motivo_no_calculable: { es: "Calculable con [[L_eff]] y [[n]].", en: "Calculable with [[L_eff]] and [[n]]." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [geometria_abierta, longitud_de_onda]
  result_semantics:
    target: lambda_n
    kind: positive_length
    sign_meaning: { es: "El signo no se usa porque [[lambda_n]] es longitud.", en: "The sign is not used because [[lambda_n]] is length." }
    absolute_value_meaning: { es: "El valor indica la escala espacial del modo abierto.", en: "The value indicates the spatial scale of the open-tube mode." }
  domain_checks:
    - { id: open_lambda_positive, condition: "lambda_n > 0", message: { es: "[[lambda_n]] debe ser positiva.", en: "[[lambda_n]] must be positive." } }
  coherence_checks:
    - { id: open_shorter_lambda, condition: "n >= 1", message: { es: "Al aumentar [[n]], baja [[lambda_n]] en el tubo abierto.", en: "As [[n]] rises, [[lambda_n]] decreases in the open tube." } }
  graph_implications:
    - { id: open_wavelength_spacing, message: { es: "El grafico debe comprimir el patron al aumentar [[n]].", en: "The graph should compress the pattern as [[n]] increases." } }
  pedagogical_triggers:
    - { id: open_lambda_equals_length, detect_when: "lambda_n equals L_eff always", message: { es: "[[lambda_n]] no coincide siempre con [[L_eff]].", en: "[[lambda_n]] does not always equal [[L_eff]]." } }
- id: longitud_onda_tubo_cerrado
  title: { es: Longitud de onda en tubo cerrado, en: Wavelength in a closed tube }
  equation: "lambda_n = 4 * L_eff / (2 * m - 1)"
  latex: "\\\\lambda_n = \\\\frac{4L_{eff}}{2m-1}  % L_eff L"
  rearrangements:
    - { target: lambda_n, equation: "lambda_n = 4 * L_eff / (2 * m - 1)", latex: "\\\\lambda_n = \\\\frac{4L_{eff}}{2m-1}  % L_eff L" }
    - { target: L_eff, equation: "L_eff = (2 * m - 1) * lambda_n / 4", latex: "L_{eff} = \\\\frac{(2m-1)\\\\lambda_n}{4}  % L_eff L" }
    - { target: m, equation: "m = (4 * L_eff / lambda_n + 1) / 2", latex: "m = \\\\frac{4L_{eff}/\\\\lambda_n + 1}{2}  % L_eff L" }
  category: derived
  relation_type: geometric_constraint
  physical_meaning: { es: "En tubo abierto-cerrado encaja un cuarto de onda fundamental y luego factores impares.", en: "In an open-closed tube, a fundamental quarter-wave fits, followed by odd factors." }
  constraints: ["[[L_eff]] > 0", "[[m]] entero positivo", "[[lambda_n]] > 0"]
  validity: { es: "Valida para un extremo cerrado rigido y un extremo abierto acusticamente.", en: "Valid for one rigid closed end and one acoustically open end." }
  dimension_check: "[L] = [L] / [1]"
  calculable: true
  motivo_no_calculable: { es: "Calculable con [[L_eff]] y [[m]].", en: "Calculable with [[L_eff]] and [[m]]." }
  used_in: [teoria, ejemplos, interpretacion, grafico_coord]
  interpretation_tags: [geometria_cerrada, cuarto_de_onda]
  result_semantics:
    target: lambda_n
    kind: positive_length
    sign_meaning: { es: "El signo no se usa porque [[lambda_n]] es longitud.", en: "The sign is not used because [[lambda_n]] is length." }
    absolute_value_meaning: { es: "El valor indica la escala espacial del modo cerrado.", en: "The value indicates the spatial scale of the closed-tube mode." }
  domain_checks:
    - { id: closed_lambda_positive, condition: "lambda_n > 0", message: { es: "[[lambda_n]] debe ser positiva.", en: "[[lambda_n]] must be positive." } }
  coherence_checks:
    - { id: closed_shorter_lambda, condition: "m >= 1", message: { es: "Al aumentar [[m]], baja [[lambda_n]] por factores impares.", en: "As [[m]] rises, [[lambda_n]] decreases through odd factors." } }
  graph_implications:
    - { id: closed_quarter_wave, message: { es: "El grafico debe mostrar nodo en el extremo cerrado y vientre en el abierto.", en: "The graph should show a node at the closed end and an antinode at the open end." } }
  pedagogical_triggers:
    - { id: closed_even_error, detect_when: "even series assumed", message: { es: "Los modos pares de la serie abierta no aparecen en el tubo cerrado ideal.", en: "Even modes of the open series do not appear in the ideal closed tube." } }
`;export{e as default};
