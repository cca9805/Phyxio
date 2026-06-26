const a=`- id: rapidez_gravedad\r
  title:\r
    es: Rapidez en regimen gravitatorio\r
    en: Gravity-dominated wave speed\r
  equation: "v = sqrt(g / k)"\r
  latex: "v = \\\\sqrt{\\\\frac{g}{k}}  % g k v"\r
  rearrangements:\r
    - target: v\r
      equation: "v = sqrt(g / k)"\r
      latex: "v = \\\\sqrt{\\\\frac{g}{k}}"\r
    - target: k\r
      equation: "k = g / v^2"\r
      latex: "k = \\\\frac{g}{v^2}"\r
    - target: g\r
      equation: "g = v^2 * k"\r
      latex: "g = v^2 k"\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "En ondas donde la gravedad domina (longitudes de onda grandes), la rapidez de propagacion [[v]] crece con la raiz cuadrada de [[g]] y decrece con la raiz de [[k]]. Ondas mas largas viajan mas rapido."\r
    en: "In gravity-dominated waves (large wavelengths), propagation speed [[v]] grows with the square root of [[g]] and decreases with the square root of [[k]]. Longer waves travel faster."\r
  constraints:\r
    - "g > 0"\r
    - "k > 0"\r
    - "lambda >> sqrt(sigma / (rho * g))"\r
  validity:\r
    es: "Valido cuando la longitud de onda es mucho mayor que la longitud capilar critica, aproximadamente 1.7 cm en agua pura. Falla para ondas capilares (milimetros)."\r
    en: "Valid when wavelength is much larger than the critical capillary length, approximately 1.7 cm in pure water. Fails for capillary waves (millimetres)."\r
  dimension_check: "[L T⁻¹] = sqrt([L T⁻²] / [L⁻¹]) = sqrt([L² T⁻²]) = [L T⁻¹] ✓"\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
    - teoria\r
    - ejemplos\r
    - interpretacion\r
  interpretation_tags:\r
    - gravedad\r
    - dispersion\r
    - regimen_largo\r
  result_semantics:\r
    target: v\r
    kind: scalar_unsigned\r
    sign_meaning:\r
      es: "La rapidez es siempre positiva; representa la celeridad de propagacion de la cresta."\r
      en: "Speed is always positive; it represents the celerity of crest propagation."\r
    absolute_value_meaning:\r
      es: "El modulo da directamente los metros por segundo a los que viaja la perturbacion de la interfaz."\r
      en: "The magnitude gives directly the metres per second at which the interface disturbance travels."\r
  domain_checks:\r
    - "v > 0"\r
    - "k > 0"\r
    - "g > 0"\r
  coherence_checks:\r
    - "v aumenta al aumentar g: verificar que mayor g produce mayor v"\r
    - "v disminuye al aumentar k: onda mas corta viaja mas lento en regimen gravitatorio"\r
  graph_implications:\r
    - "En grafica v vs k, la curva cae como 1/sqrt(k) para k grande en regimen gravitatorio"\r
    - "El punto de cruce con la curva capilar marca la longitud critica"\r
  pedagogical_triggers:\r
    - "Si v calculada supera 20 m/s con parametros tipicos de agua, verificar conversion de lambda a k"\r
    - "Si el alumno usa esta formula con ondas de milimetros, alertar sobre regimen capilar"\r
\r
- id: rapidez_capilares\r
  title:\r
    es: Rapidez en regimen capilar\r
    en: Capillary-dominated wave speed\r
  equation: "v = sqrt((sigma * k) / rho)"\r
  latex: "v = \\\\sqrt{\\\\frac{\\\\sigma k}{\\\\rho}}  % sigma k rho v"\r
  rearrangements:\r
    - target: v\r
      equation: "v = sqrt((sigma * k) / rho)"\r
      latex: "v = \\\\sqrt{\\\\frac{\\\\sigma k}{\\\\rho}}"\r
    - target: sigma\r
      equation: "sigma = rho * v^2 / k"\r
      latex: "\\\\sigma = \\\\frac{\\\\rho v^2}{k}"\r
    - target: rho\r
      equation: "rho = sigma * k / v^2"\r
      latex: "\\\\rho = \\\\frac{\\\\sigma k}{v^2}"\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "En ondas cortas dominadas por tension superficial, la rapidez [[v]] crece con la raiz de [[sigma]] y con la raiz de [[k]]. A diferencia del regimen gravitatorio, aqui ondas mas cortas viajan mas rapido."\r
    en: "In short waves dominated by surface tension, speed [[v]] grows with the square root of [[sigma]] and with the square root of [[k]]. Unlike the gravity regime, shorter waves travel faster here."\r
  constraints:\r
    - "sigma > 0"\r
    - "rho > 0"\r
    - "k > 0"\r
    - "lambda << sqrt(sigma / (rho * g))"\r
  validity:\r
    es: "Valido cuando la longitud de onda es mucho menor que la longitud capilar critica (~1.7 cm en agua). Falla para olas marinas largas."\r
    en: "Valid when wavelength is much smaller than the critical capillary length (~1.7 cm in water). Fails for long ocean waves."\r
  dimension_check: "[L T⁻¹] = sqrt([M T⁻²] · [L⁻¹] / [M L⁻³]) = sqrt([L² T⁻²]) = [L T⁻¹] ✓"\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
    - teoria\r
    - ejemplos\r
    - interpretacion\r
  interpretation_tags:\r
    - tension_superficial\r
    - dispersion\r
    - regimen_corto\r
  result_semantics:\r
    target: sigma\r
    kind: scalar_unsigned\r
    sign_meaning:\r
      es: "La tension superficial es siempre positiva; un valor negativo indicaria error de calculo."\r
      en: "Surface tension is always positive; a negative value would indicate a calculation error."\r
    absolute_value_meaning:\r
      es: "El valor indica la elasticidad interfacial en N/m; valores tipicos del agua son 0.072 N/m."\r
      en: "The value indicates interfacial elasticity in N/m; typical water values are 0.072 N/m."\r
  domain_checks:\r
    - "v > 0"\r
    - "sigma > 0"\r
    - "rho > 0"\r
    - "k > 0"\r
  coherence_checks:\r
    - "v aumenta al aumentar sigma: mayor elasticidad interfacial acelera la onda capilar"\r
    - "v aumenta al aumentar k: onda capilar mas corta viaja mas rapido"\r
    - "v disminuye al aumentar rho: mayor inercia frena la propagacion"\r
  graph_implications:\r
    - "En grafica v vs k, la curva capilar crece como sqrt(k) para k grande"\r
    - "El cruce con la curva gravitatoria marca el minimo global de velocidad"\r
  pedagogical_triggers:\r
    - "Si sigma calculada supera 0.1 N/m, verificar que se esta en regimen capilar real"\r
    - "Si el alumno aplica esta formula a olas de metros, alertar sobre regimen gravitatorio"\r
\r
- id: rapidez_combinada\r
  title:\r
    es: Rapidez combinada con dispersion completa\r
    en: Combined wave speed with full dispersion\r
  equation: "v = sqrt((g / k) + (sigma * k / rho))"\r
  latex: "v = \\\\sqrt{\\\\frac{g}{k} + \\\\frac{\\\\sigma k}{\\\\rho}}  % g k sigma rho v f lambda"\r
  rearrangements:\r
    - target: v\r
      equation: "v = sqrt((g / k) + (sigma * k / rho))"\r
      latex: "v = \\\\sqrt{\\\\frac{g}{k} + \\\\frac{\\\\sigma k}{\\\\rho}}"\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "Formula general que combina la contribucion gravitatoria y la capilar. La rapidez [[v]] resulta de la suma de ambas fuerzas restauradoras. Permite identificar el regimen dominante segun el valor de [[k]]."\r
    en: "General formula combining gravitational and capillary contributions. Speed [[v]] results from the sum of both restoring forces. Allows identifying the dominant regime from the value of [[k]]."\r
  constraints:\r
    - "g > 0"\r
    - "sigma > 0"\r
    - "rho > 0"\r
    - "k > 0"\r
  validity:\r
    es: "Valido para profundidades mucho mayores que la longitud de onda (agua profunda). Falla en aguas poco profundas donde interviene el fondo."\r
    en: "Valid for depths much greater than the wavelength (deep water). Fails in shallow water where the bottom intervenes."\r
  dimension_check: "[L T⁻¹] = sqrt([L² T⁻²] + [L² T⁻²]) = [L T⁻¹] ✓"\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
    - teoria\r
    - ejemplos\r
    - interpretacion\r
  interpretation_tags:\r
    - dispersion_completa\r
    - regimenes\r
    - agua_profunda\r
  result_semantics:\r
    target: v\r
    kind: scalar_unsigned\r
    sign_meaning:\r
      es: "La rapidez combinada es siempre positiva; incluye ambas contribuciones restauradoras."\r
      en: "Combined speed is always positive; it includes both restoring contributions."\r
    absolute_value_meaning:\r
      es: "Indica la celeridad real de la onda superficial considerando gravedad y tension superficial simultaneamente."\r
      en: "Indicates the real celerity of the surface wave considering gravity and surface tension simultaneously."\r
  domain_checks:\r
    - "v > 0"\r
    - "g > 0"\r
    - "sigma > 0"\r
    - "rho > 0"\r
    - "k > 0"\r
  coherence_checks:\r
    - "v debe ser mayor o igual que min(v_gravedad, v_capilar) para ese k"\r
    - "En el minimo de v, la longitud de onda critica separa los dos regimenes"\r
    - "Para k muy pequeno, el termino gravitatorio domina; para k muy grande, el capilar domina"\r
  graph_implications:\r
    - "La curva v vs k tiene un minimo pronunciado en la longitud de onda critica"\r
    - "El grafico muestra claramente la transicion entre regimen gravitatorio y capilar"\r
  pedagogical_triggers:\r
    - "Si ambos terminos bajo la raiz son comparables en magnitud, el alumno esta en la zona de transicion"\r
    - "Recordar que esta formula asume agua profunda; verificar que la profundidad supera lambda"\r
`;export{a as default};
