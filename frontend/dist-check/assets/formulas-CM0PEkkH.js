const n=`formulas:\r
- id: longitud_onda_estacionaria\r
  title:\r
    es: Longitud de onda cuantizada\r
    en: Quantized wavelength\r
  equation: lambda_n = 2 * L / n\r
  latex: \\lambda_n = \\frac{2L}{n}\r
  rearrangements:\r
  - target: longitud_onda_estacionaria\r
    equation: lambda_n = 2 * L / n\r
    latex: \\lambda_n = \\frac{2L}{n}\r
  - target: longitud_cuerda\r
    equation: L = n * lambda_n / 2\r
    latex: L = \\frac{n \\lambda_n}{2}\r
  - target: numero_armonico\r
    equation: n = 2 * L / lambda_n\r
    latex: n = \\frac{2L}{\\lambda_n}\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Relacion que cuantiza las longitudes de onda permitidas en una cuerda con extremos fijos. Solo aquellas ondas cuya\r
      mitad cabe un numero entero de veces en la longitud de la cuerda pueden establecerse.\r
    en: Relation that quantizes allowed wavelengths in a string with fixed ends. Only waves whose half fits an integer number\r
      of times in the string length can establish themselves.\r
  constraints:\r
  - target: numero_armonico\r
    condition: n > 0\r
    strict: true\r
  - target: longitud_cuerda\r
    condition: L > 0\r
    strict: true\r
  validity:\r
    es: Valida para cuerdas con ambos extremos fijos en el modelo lineal de pequenas oscilaciones.\r
    en: Valid for strings with both ends fixed in the linear small oscillations model.\r
  dimension_check:\r
    LHS: '[L]'\r
    RHS: '[L] / adimensional = [L]'\r
  calculable: true\r
  motivo_no_calculable: ''\r
  used_in:\r
  - frecuencia_estacionaria\r
  - nodos_espaciado\r
  - funcion_onda\r
  interpretation_tags:\r
    es:\r
    - cuantizacion\r
    - condicion de contorno\r
    - modo normal\r
    - espectro discreto\r
    en:\r
    - quantization\r
    - boundary condition\r
    - normal mode\r
    - discrete spectrum\r
  result_semantics:\r
    target: longitud_onda_estacionaria\r
    kind: spatial_period\r
    sign_meaning:\r
      es: La longitud de onda siempre es positiva, representando una distancia espacial.\r
      en: Wavelength is always positive, representing a spatial distance.\r
    absolute_value_meaning:\r
      es: Magnitud de la periodicidad espacial del patron estacionario.\r
      en: Magnitude of spatial periodicity of the standing pattern.\r
  domain_checks:\r
    check_zero:\r
      es: lambda_n no puede ser cero para n finito\r
      en: lambda_n cannot be zero for finite n\r
    check_negative:\r
      es: lambda_n siempre positiva\r
      en: lambda_n always positive\r
  coherence_checks:\r
  - check: L / lambda_n debe ser n/2 (medio entero)\r
    severity: error\r
  graph_implications:\r
  - action: highlight_nodes\r
    target: spatial_pattern\r
  pedagogical_triggers:\r
  - condition: n >> 1\r
    message:\r
      es: En modos altos, la longitud de onda es muy pequena comparada con la cuerda.\r
      en: In high modes, wavelength is very small compared to the string.\r
- id: frecuencia_estacionaria\r
  title:\r
    es: Frecuencia del modo estacionario\r
    en: Frequency of stationary mode\r
  equation: f_n = n * v / (2 * L)\r
  latex: f_n = \\frac{n v}{2L}\r
  rearrangements:\r
  - target: frecuencia_modo\r
    equation: f_n = n * v / (2 * L)\r
    latex: f_n = \\frac{n v}{2L}\r
  - target: velocidad_propagacion\r
    equation: v = 2 * L * f_n / n\r
    latex: v = \\frac{2 L f_n}{n}\r
  - target: longitud_cuerda\r
    equation: L = n * v / (2 * f_n)\r
    latex: L = \\frac{n v}{2 f_n}\r
  - target: numero_armonico\r
    equation: n = 2 * L * f_n / v\r
    latex: n = \\frac{2 L f_n}{v}\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Frecuencias discretas permitidas para ondas estacionarias en una cuerda con extremos fijos. Forman una serie armonica\r
      donde cada modo es multiplo entero de la frecuencia fundamental.\r
    en: Discrete allowed frequencies for standing waves in a string with fixed ends. Form a harmonic series where each mode\r
      is an integer multiple of the fundamental frequency.\r
  constraints:\r
  - target: numero_armonico\r
    condition: n > 0\r
    strict: true\r
  - target: longitud_cuerda\r
    condition: L > 0\r
    strict: true\r
  - target: velocidad_propagacion\r
    condition: v > 0\r
    strict: true\r
  validity:\r
    es: Valida para cuerdas con ambos extremos fijos en el modelo lineal de pequenas oscilaciones.\r
    en: Valid for strings with both ends fixed in the linear small oscillations model.\r
  dimension_check:\r
    LHS: '[T]^-1'\r
    RHS: adimensional * [L][T]^-1 / [L] = [T]^-1\r
  calculable: true\r
  motivo_no_calculable: ''\r
  used_in:\r
  - periodo_oscilacion\r
  - energia_vibracion\r
  - frecuencia_angular\r
  interpretation_tags:\r
    es:\r
    - cuantizacion temporal\r
    - serie armonica\r
    - frecuencias propias\r
    - espectro discreto\r
    en:\r
    - temporal quantization\r
    - harmonic series\r
    - natural frequencies\r
    - discrete spectrum\r
  result_semantics:\r
    target: frecuencia_modo\r
    kind: frequency\r
    sign_meaning:\r
      es: La frecuencia siempre es positiva, representando oscilaciones en el tiempo.\r
      en: Frequency is always positive, representing oscillations in time.\r
    absolute_value_meaning:\r
      es: Tasa de repeticion temporal del patron estacionario.\r
      en: Temporal repetition rate of the standing pattern.\r
  domain_checks:\r
    check_zero:\r
      es: f_n no puede ser cero para ondas estacionarias\r
      en: f_n cannot be zero for standing waves\r
    check_negative:\r
      es: f_n siempre positiva\r
      en: f_n always positive\r
  coherence_checks:\r
  - check: f_n debe ser multiplo entero de f_1\r
    severity: error\r
  graph_implications:\r
  - action: highlight_frequency\r
    target: temporal_pattern\r
  pedagogical_triggers:\r
  - condition: n == 1\r
    message:\r
      es: La frecuencia fundamental es la mas grave y audible.\r
      en: The fundamental frequency is the lowest and most audible.\r
- id: funcion_onda_estacionaria\r
  title:\r
    es: Funcion de onda estacionaria\r
    en: Standing wave function\r
  equation: y = 2 * A * sin(n * pi * x / L) * cos(2 * pi * f_n * t)\r
  latex: y(x,t) = 2A \\sin\\left(\\frac{n\\pi x}{L}\\right) \\cos(2\\pi f_n t)\r
  rearrangements:\r
  - target: desplazamiento_transversal\r
    equation: y = 2 * A * sin(n * pi * x / L) * cos(2 * pi * f_n * t)\r
    latex: y(x,t) = 2A \\sin\\left(\\frac{n\\pi x}{L}\\right) \\cos(2\\pi f_n t)\r
  - target: amplitud_maxima\r
    equation: A = y / (2 * sin(n * pi * x / L) * cos(2 * pi * f_n * t))\r
    latex: A = \\frac{y}{2 \\sin\\left(\\frac{n\\pi x}{L}\\right) \\cos(2\\pi f_n t)}\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Descripcion matematica completa del desplazamiento transversal de la cuerda en cualquier punto y momento. Separa variables\r
      espaciales y temporales.\r
    en: Complete mathematical description of the string's transverse displacement at any point and time. Separates spatial\r
      and temporal variables.\r
  constraints:\r
  - target: numero_armonico\r
    condition: n > 0\r
    strict: true\r
  - target: longitud_cuerda\r
    condition: L > 0\r
    strict: true\r
  - target: amplitud_maxima\r
    condition: A >= 0\r
    strict: false\r
  validity:\r
    es: Valida para pequenas oscilaciones donde la tension permanece aproximadamente constante.\r
    en: Valid for small oscillations where tension remains approximately constant.\r
  dimension_check:\r
    LHS: '[L]'\r
    RHS: '[L] * adimensional * adimensional = [L]'\r
  calculable: true\r
  motivo_no_calculable: ''\r
  used_in:\r
  - nodos_ubicacion\r
  - vientres_ubicacion\r
  - amplitud_perfil\r
  interpretation_tags:\r
    es:\r
    - superposicion\r
    - descripcion completa\r
    - variables separadas\r
    - perfil espacial\r
    en:\r
    - superposition\r
    - complete description\r
    - separated variables\r
    - spatial profile\r
  result_semantics:\r
    target: desplazamiento_transversal\r
    kind: displacement\r
    sign_meaning:\r
      es: El signo indica la direccion del desplazamiento transversal respecto a la posicion de equilibrio.\r
      en: Sign indicates the direction of transverse displacement from equilibrium position.\r
    absolute_value_meaning:\r
      es: Magnitud del desplazamiento en un punto y momento dados.\r
      en: Magnitude of displacement at a given point and time.\r
  domain_checks:\r
    check_zero:\r
      es: y puede ser cero en nodos y en instantes especificos\r
      en: y can be zero at nodes and at specific instants\r
    check_negative:\r
      es: y puede ser positivo o negativo segun la direccion del desplazamiento\r
      en: y can be positive or negative depending on displacement direction\r
  coherence_checks:\r
  - check: La parte espacial debe tener nodos en x=0 y x=L\r
    severity: error\r
  graph_implications:\r
  - action: show_standing_profile\r
    target: displacement_visual\r
  pedagogical_triggers:\r
  - condition: A es muy grande\r
    message:\r
      es: Amplitudes grandes violan la aproximacion de pequenas oscilaciones.\r
      en: Large amplitudes violate the small oscillations approximation.\r
- id: posicion_nodos\r
  title:\r
    es: Posicion de los nodos\r
    en: Position of nodes\r
  equation: x_nodo = m * L / n\r
  latex: x_{\\mathrm{j}} = \\frac{mL}{n}, \\quad m = 0, 1, 2, ..., n\r
  rearrangements:\r
  - target: posicion_nodo\r
    equation: x_nodo = m * L / n\r
    latex: x_{\\mathrm{j}} = \\frac{mL}{n}\r
  - target: indice_nodo\r
    equation: m = n * x_nodo / L\r
    latex: m = \\frac{n x_{\\mathrm{j}}}{L}\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Ubicaciones a lo largo de la cuerda donde la amplitud de oscilacion es siempre nula. Son puntos de interferencia destructiva\r
      permanente.\r
    en: Locations along the string where oscillation amplitude is always null. Points of permanent destructive interference.\r
  constraints:\r
  - target: numero_armonico\r
    condition: n > 0\r
    strict: true\r
  - target: longitud_cuerda\r
    condition: L > 0\r
    strict: true\r
  - target: indice_nodo\r
    condition: m >= 0 && m <= n\r
    strict: true\r
  validity:\r
    es: Valida para cuerdas con ambos extremos fijos.\r
    en: Valid for strings with both ends fixed.\r
  dimension_check:\r
    LHS: '[L]'\r
    RHS: adimensional * [L] / adimensional = [L]\r
  calculable: true\r
  motivo_no_calculable: ''\r
  used_in:\r
  - numero_nodos\r
  - espaciado_nodal\r
  - patron_estacionario\r
  interpretation_tags:\r
    es:\r
    - nodos\r
    - interferencia destructiva\r
    - puntos fijos\r
    - patron espacial\r
    en:\r
    - nodes\r
    - destructive interference\r
    - fixed points\r
    - spatial pattern\r
  result_semantics:\r
    target: posicion_nodo\r
    kind: position\r
    sign_meaning:\r
      es: La posicion medida desde un extremo fijo de referencia.\r
      en: Position measured from a fixed reference end.\r
    absolute_value_meaning:\r
      es: Distancia a lo largo de la cuerda desde el extremo x=0.\r
      en: Distance along the string from end x=0.\r
  domain_checks:\r
    check_zero:\r
      es: x_nodo = 0 corresponde al primer extremo fijo\r
      en: x_nodo = 0 corresponds to the first fixed end\r
    check_negative:\r
      es: x_nodo debe estar en [0, L]\r
      en: x_nodo must be in [0, L]\r
  coherence_checks:\r
  - check: Numero de nodos debe ser n+1 incluyendo extremos\r
    severity: error\r
  graph_implications:\r
  - action: highlight_nodes\r
    target: spatial_positions\r
  pedagogical_triggers:\r
  - condition: m == 0 || m == n\r
    message:\r
      es: Los nodos en los extremos son puntos fijos por la condicion de contorno.\r
      en: Nodes at the ends are fixed points by boundary condition.\r
- id: posicion_vientres\r
  title:\r
    es: Posicion de los vientres\r
    en: Position of antinodes\r
  equation: x_vientre = (2 * m - 1) * L / (2 * n)\r
  latex: x_{\\mathrm{k}} = \\frac{(2m-1)L}{2n}, \\quad m = 1, 2, ..., n\r
  rearrangements:\r
  - target: posicion_vientre\r
    equation: x_vientre = (2 * m - 1) * L / (2 * n)\r
    latex: x_{\\mathrm{k}} = \\frac{(2m-1)L}{2n}\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Ubicaciones donde la amplitud de oscilacion es maxima (igual a 2A). Son puntos de interferencia constructiva permanente.\r
    en: Locations where oscillation amplitude is maximum (equal to 2A). Points of permanent constructive interference.\r
  constraints:\r
  - target: numero_armonico\r
    condition: n > 0\r
    strict: true\r
  - target: longitud_cuerda\r
    condition: L > 0\r
    strict: true\r
  - target: indice_nodo\r
    condition: m >= 1 && m <= n\r
    strict: true\r
  validity:\r
    es: Valida para cuerdas con ambos extremos fijos.\r
    en: Valid for strings with both ends fixed.\r
  dimension_check:\r
    LHS: '[L]'\r
    RHS: adimensional * [L] / adimensional = [L]\r
  calculable: true\r
  motivo_no_calculable: ''\r
  used_in:\r
  - numero_vientres\r
  - amplitud_maxima\r
  - patron_estacionario\r
  interpretation_tags:\r
    es:\r
    - vientres\r
    - antinodos\r
    - interferencia constructiva\r
    - amplitud maxima\r
    en:\r
    - antinodes\r
    - constructive interference\r
    - maximum amplitude\r
  result_semantics:\r
    target: posicion_vientre\r
    kind: position\r
    sign_meaning:\r
      es: La posicion medida desde un extremo fijo de referencia.\r
      en: Position measured from a fixed reference end.\r
    absolute_value_meaning:\r
      es: Distancia a la que la amplitud de oscilacion es maxima.\r
      en: Distance where oscillation amplitude is maximum.\r
  domain_checks:\r
    check_zero:\r
      es: x_vientre nunca es cero, siempre entre nodos\r
      en: x_vientre is never zero, always between nodes\r
    check_negative:\r
      es: x_vientre debe estar en (0, L)\r
      en: x_vientre must be in (0, L)\r
  coherence_checks:\r
  - check: Numero de vientres debe ser igual a n\r
    severity: error\r
  graph_implications:\r
  - action: highlight_antinodes\r
    target: spatial_positions\r
  pedagogical_triggers:\r
  - condition: m == 1\r
    message:\r
      es: El primer vientre esta a L/(2n) del primer extremo.\r
      en: The first antinode is at L/(2n) from the first end.\r
- id: frecuencia_fundamental\r
  title:\r
    es: Frecuencia fundamental\r
    en: Fundamental frequency\r
  equation: f_1 = v / (2 * L)\r
  latex: f_1 = \\frac{v}{2L}\r
  rearrangements:\r
  - target: frecuencia_fundamental\r
    equation: f_1 = v / (2 * L)\r
    latex: f_1 = \\frac{v}{2L}\r
  - target: velocidad_propagacion\r
    equation: v = 2 * L * f_1\r
    latex: v = 2 L f_1\r
  - target: longitud_cuerda\r
    equation: L = v / (2 * f_1)\r
    latex: L = \\frac{v}{2f_1}\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Frecuencia del primer modo estacionario. Es la frecuencia mas baja posible y la base de la serie armonica.\r
    en: Frequency of the first stationary mode. Is the lowest possible frequency and the base of the harmonic series.\r
  constraints:\r
  - target: velocidad_propagacion\r
    condition: v > 0\r
    strict: true\r
  - target: longitud_cuerda\r
    condition: L > 0\r
    strict: true\r
  - target: frecuencia_fundamental\r
    condition: f_1 > 0\r
    strict: true\r
  validity:\r
    es: Valida para cuerdas con ambos extremos fijos.\r
    en: Valid for strings with both ends fixed.\r
  dimension_check:\r
    LHS: '[T]^-1'\r
    RHS: '[L][T]^-1 / [L] = [T]^-1'\r
  calculable: true\r
  motivo_no_calculable: ''\r
  used_in:\r
  - frecuencia_estacionaria\r
  - periodo_fundamental\r
  - afinacion_instrumentos\r
  interpretation_tags:\r
    es:\r
    - frecuencia base\r
    - primer modo\r
    - tono fundamental\r
    - serie armonica\r
    en:\r
    - base frequency\r
    - first mode\r
    - fundamental tone\r
    - harmonic series\r
  result_semantics:\r
    target: frecuencia_fundamental\r
    kind: frequency\r
    sign_meaning:\r
      es: La frecuencia fundamental siempre es positiva.\r
      en: The fundamental frequency is always positive.\r
    absolute_value_meaning:\r
      es: Frecuencia mas baja posible en la cuerda con extremos fijos.\r
      en: Lowest possible frequency in the string with fixed ends.\r
  domain_checks:\r
    check_zero:\r
      es: f_1 = 0 solo si v = 0 (ausencia de ondas)\r
      en: f_1 = 0 only if v = 0 (absence of waves)\r
    check_negative:\r
      es: f_1 siempre positiva\r
      en: f_1 always positive\r
  coherence_checks:\r
  - check: f_1 debe ser igual a f_n cuando n=1\r
    severity: error\r
  graph_implications:\r
  - action: highlight_fundamental\r
    target: frequency_axis\r
  pedagogical_triggers:\r
  - condition: f_1 es muy alta\r
    message:\r
      es: Frecuencias muy altas pueden indicar cuerda muy tensa o muy corta.\r
      en: Very high frequencies may indicate very tense or very short string.\r
`;export{n as default};
