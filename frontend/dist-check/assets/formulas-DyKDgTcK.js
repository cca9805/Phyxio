const e=`version: 1
leaf_id: interferencia-de-la-luz

defaults:
  precision: 6
  notation: scientific

formulas:
  - id: diferencia_camino
    title:
      es: Diferencia de camino optico
      en: Optical path difference
    equation: delta = d * sin(theta)
    latex: '\\delta = d \\sin\\theta'
    category: fundamental
    relation_type: definition
    rearrangements:
      - target: delta
        equation: delta = d * sin(theta)
        latex: '\\delta = d \\sin\\theta'
      - target: d
        equation: d = delta / sin(theta)
        latex: 'd = \\frac{\\delta}{\\sin\\theta}'
      - target: theta
        equation: theta = arcsin(delta / d)
        latex: '\\theta = \\arcsin\\left(\\frac{\\delta}{d}\\right)'
    physical_meaning:
      es: La diferencia de camino entre dos haces que emergen de rendijas separadas una distancia d y llegan a un punto a angulo theta.
      en: The path difference between two beams emerging from slits separated by distance d and arriving at a point at angle theta.
    constraints:
      - variable: d
        condition: d > 0
        message:
          es: La separacion entre rendijas debe ser positiva.
          en: Slit separation must be positive.
      - variable: theta
        condition: abs(theta) < pi/2
        message:
          es: El angulo debe estar en el rango valido de la funcion seno.
          en: Angle must be within valid range for sine function.
    validity:
      es: Valida para cualquier angulo. En la aproximacion de angulos pequenos, sin(theta) ≈ theta.
      en: Valid for any angle. In small angle approximation, sin(theta) ≈ theta.
    dimension_check:
      left: '[L]'
      right: '[L] * [1] = [L]'
      passes: true
    calculable: true
    motivo_no_calculable: ~
    used_in:
      - teoria: condiciones_interferencia
      - interpretacion: tipo_fringe
    interpretation_tags:
      - interferencia
      - fase
      - geometria
    result_semantics:
      target: delta
      kind: path_difference
      sign_meaning:
        es: Positiva cuando el camino del haz 1 es mayor que el del haz 2.
        en: Positive when beam 1 path is longer than beam 2 path.
      absolute_value_meaning:
        es: Magnitud de la diferencia de camino optico.
        en: Magnitude of the optical path difference.
    domain_checks:
      - condition: "d > 0"
        message:
          es: "La separacion entre rendijas debe ser estrictamente positiva."
          en: "Slit separation must be strictly positive."
      - condition: "abs(theta) < pi/2"
        message:
          es: "El angulo debe ser menor que pi/2 para que el seno este definido."
          en: "Angle must be less than pi/2 for sine to be defined."
    coherence_checks:
      - condition: "abs(delta) <= d"
        message:
          es: "La diferencia de camino no puede superar la separacion entre rendijas."
          en: "Path difference cannot exceed slit separation."
    graph_implications:
      - target_axis: x
        variable: theta
        description:
          es: "El angulo theta define la posicion en el patron de interferencia."
          en: "Angle theta defines the position in the interference pattern."
    pedagogical_triggers:
      - trigger: "delta > d"
        message:
          es: "Resultado imposible. Revisa si theta supera pi/2 o si d es incorrecto."
          en: "Impossible result. Check if theta exceeds pi/2 or if d is incorrect."

  - id: condicion_maximos
    title:
      es: Condicion de maximos constructivos
      en: Constructive interference condition
    equation: delta = m * lambda
    latex: '\\delta = m \\lambda'
    category: fundamental
    relation_type: law
    rearrangements:
      - target: delta
        equation: delta = m * lambda
        latex: '\\delta = m \\lambda'
      - target: m
        equation: m = delta / lambda
        latex: 'm = \\frac{\\delta}{\\lambda}'
      - target: lambda
        equation: lambda = delta / m
        latex: '\\lambda = \\frac{\\delta}{m}'
    physical_meaning:
      es: Condicion para que la interferencia sea constructiva. La diferencia de camino debe ser un multiplo entero de la longitud de onda.
      en: Condition for constructive interference. Path difference must be an integer multiple of wavelength.
    constraints:
      - variable: m
        condition: m == floor(m)
        message:
          es: El orden m debe ser un numero entero para maximos perfectos.
          en: Order m must be an integer for perfect maxima.
      - variable: lambda
        condition: lambda > 0
        message:
          es: La longitud de onda debe ser positiva.
          en: Wavelength must be positive.
    validity:
      es: Aplica a ondas coherentes de igual frecuencia y polarizacion compatible. Requiere fuentes coherentes.
      en: Applies to coherent waves of equal frequency and compatible polarization. Requires coherent sources.
    dimension_check:
      left: '[L]'
      right: '[1] * [L] = [L]'
      passes: true
    calculable: true
    motivo_no_calculable: ~
    used_in:
      - teoria: patron_fringes
      - ejemplos: calculo_maximos
    interpretation_tags:
      - interferencia_constructiva
      - reforzamiento
      - intensidad_maxima
    result_semantics:
      target: delta
      kind: condition
      sign_meaning:
        es: Para m positivo, desplazamiento hacia el lado positivo; m negativo hacia el lado opuesto.
        en: For positive m, displacement towards positive side; negative m towards opposite side.
      absolute_value_meaning:
        es: Diferencia de camino que produce interferencia constructiva de orden m.
        en: Path difference producing constructive interference of order m.
    domain_checks:
      - condition: "lambda > 0"
        message:
          es: "La longitud de onda debe ser positiva."
          en: "Wavelength must be positive."
      - condition: "m == floor(m)"
        message:
          es: "El orden m debe ser entero para maximos perfectos."
          en: "Order m must be integer for perfect maxima."
    coherence_checks:
      - condition: "abs(m) < d / lambda"
        message:
          es: "El orden m supera el maximo observable para esta geometria."
          en: "Order m exceeds the maximum observable for this geometry."
    graph_implications:
      - target_axis: y
        variable: delta
        description:
          es: "Los maximos se representan como picos de intensidad en el grafico."
          en: "Maxima are represented as intensity peaks in the graph."
    pedagogical_triggers:
      - trigger: "m != floor(m)"
        message:
          es: "El orden m no es entero. Solo valores enteros producen maximos perfectos."
          en: "Order m is not integer. Only integer values produce perfect maxima."

  - id: condicion_minimos
    title:
      es: Condicion de minimos destructivos
      en: Destructive interference condition
    equation: delta = (m + 0.5) * lambda
    latex: '\\delta = \\left(m + \\frac{1}{2}\\right) \\lambda'
    category: fundamental
    relation_type: law
    rearrangements:
      - target: delta
        equation: delta = (m + 0.5) * lambda
        latex: '\\delta = \\left(m + \\frac{1}{2}\\right) \\lambda'
      - target: m
        equation: m = delta / lambda - 0.5
        latex: 'm = \\frac{\\delta}{\\lambda} - \\frac{1}{2}'
      - target: lambda
        equation: lambda = delta / (m + 0.5)
        latex: '\\lambda = \\frac{\\delta}{m + \\frac{1}{2}}'
    physical_meaning:
      es: Condicion para que la interferencia sea destructiva. La diferencia de camino debe ser un multiplo semientero de la longitud de onda.
      en: Condition for destructive interference. Path difference must be a half-integer multiple of wavelength.
    constraints:
      - variable: m
        condition: m == floor(m)
        message:
          es: El orden m debe ser un numero entero.
          en: Order m must be an integer.
      - variable: lambda
        condition: lambda > 0
        message:
          es: La longitud de onda debe ser positiva.
          en: Wavelength must be positive.
    validity:
      es: Aplica a ondas coherentes de igual frecuencia y polarizacion compatible. Las ondas deben tener amplitudes similares para anulacion completa.
      en: Applies to coherent waves of equal frequency and compatible polarization. Waves must have similar amplitudes for complete cancellation.
    dimension_check:
      left: '[L]'
      right: '[1] * [L] = [L]'
      passes: true
    calculable: true
    motivo_no_calculable: ~
    used_in:
      - teoria: patron_fringes
      - ejemplos: calculo_minimos
    interpretation_tags:
      - interferencia_destructiva
      - anulacion
      - intensidad_minima
    result_semantics:
      target: delta
      kind: condition
      sign_meaning:
        es: La posicion del minimo depende del valor de m utilizado.
        en: Minimum position depends on the m value used.
      absolute_value_meaning:
        es: Diferencia de camino que produce interferencia destructiva completa.
        en: Path difference producing complete destructive interference.
    domain_checks:
      - condition: "lambda > 0"
        message:
          es: "La longitud de onda debe ser positiva."
          en: "Wavelength must be positive."
      - condition: "m == floor(m)"
        message:
          es: "El orden m debe ser entero."
          en: "Order m must be integer."
    coherence_checks:
      - condition: "abs(m + 0.5) < d / lambda"
        message:
          es: "El orden del minimo supera el rango observable para esta geometria."
          en: "Minimum order exceeds the observable range for this geometry."
    graph_implications:
      - target_axis: y
        variable: delta
        description:
          es: "Los minimos se representan como valles de intensidad cero en el grafico."
          en: "Minima are represented as zero-intensity valleys in the graph."
    pedagogical_triggers:
      - trigger: "m != floor(m)"
        message:
          es: "El orden m no es entero. Revisa la formulacion de la condicion de minimos."
          en: "Order m is not integer. Review the minimum condition formulation."

  - id: posicion_franja
    title:
      es: Posicion de franja en pantalla
      en: Fringe position on screen
    equation: y_m = m * lambda * L / d
    latex: 'y_m = \\frac{m \\lambda L}{d}'
    category: derived
    relation_type: derived_law
    rearrangements:
      - target: y_m
        equation: y_m = m * lambda * L / d
        latex: 'y_m = \\frac{m \\lambda L}{d}'
      - target: m
        equation: m = y_m * d / (lambda * L)
        latex: 'm = \\frac{y_m d}{\\lambda L}'
      - target: lambda
        equation: lambda = y_m * d / (m * L)
        latex: '\\lambda = \\frac{y_m d}{m L}'
      - target: L
        equation: L = y_m * d / (m * lambda)
        latex: 'L = \\frac{y_m d}{m \\lambda}'
      - target: d
        equation: d = m * lambda * L / y_m
        latex: 'd = \\frac{m \\lambda L}{y_m}'
    physical_meaning:
      es: Posicion lineal de la franja de orden m en la pantalla, medida desde el centro del patron. Usa la aproximacion de angulos pequenos.
      en: Linear position of the fringe of order m on the screen, measured from the pattern center. Uses small angle approximation.
    constraints:
      - variable: d
        condition: d > 0
        message:
          es: La separacion entre rendijas debe ser positiva.
          en: Slit separation must be positive.
      - variable: L
        condition: L > 0
        message:
          es: La distancia a la pantalla debe ser positiva.
          en: Screen distance must be positive.
      - variable: lambda
        condition: lambda > 0
        message:
          es: La longitud de onda debe ser positiva.
          en: Wavelength must be positive.
    validity:
      es: Valida en la aproximacion de angulos pequenos (theta < 0.1 rad aprox). Para angulos mayores, usar la expresion exacta con tangente.
      en: Valid in small angle approximation (theta < 0.1 rad approx). For larger angles, use exact expression with tangent.
    dimension_check:
      left: '[L]'
      right: '[1] * [L] * [L] / [L] = [L]'
      passes: true
    calculable: true
    motivo_no_calculable: ~
    used_in:
      - teoria: medicion_experimental
      - ejemplos: calculo_posicion
    interpretation_tags:
      - posicion
      - medicion
      - aproximacion
    result_semantics:
      target: y_m
      kind: position
      sign_meaning:
        es: Positiva para franjas arriba o a la derecha del centro; negativa para abajo o a la izquierda.
        en: Positive for fringes above or to the right of center; negative for below or to the left.
      absolute_value_meaning:
        es: Distancia desde el centro del patron hasta la franja de orden m.
        en: Distance from pattern center to fringe of order m.
    domain_checks:
      - condition: "d > 0"
        message:
          es: "La separacion entre rendijas debe ser positiva."
          en: "Slit separation must be positive."
      - condition: "L > 0"
        message:
          es: "La distancia a la pantalla debe ser positiva."
          en: "Screen distance must be positive."
      - condition: "lambda > 0"
        message:
          es: "La longitud de onda debe ser positiva."
          en: "Wavelength must be positive."
    coherence_checks:
      - condition: "abs(y_m) < L"
        message:
          es: "La posicion de la franja supera la distancia a la pantalla. La aproximacion de angulos pequenos no es valida."
          en: "Fringe position exceeds screen distance. Small angle approximation is not valid."
      - condition: "abs(m * lambda / d) < 0.1"
        message:
          es: "El angulo supera 0.1 rad. Considerar la formula exacta."
          en: "Angle exceeds 0.1 rad. Consider the exact formula."
    graph_implications:
      - target_axis: x
        variable: y_m
        description:
          es: "La posicion y_m marca la ubicacion del maximo de orden m en el eje horizontal del grafico."
          en: "Position y_m marks the location of the order m maximum on the horizontal graph axis."
    pedagogical_triggers:
      - trigger: "abs(y_m) > 1"
        message:
          es: "Resultado muy grande. Posible error de unidades (nm o mm sin convertir a metros)."
          en: "Very large result. Possible unit error (nm or mm not converted to metres)."
      - trigger: "abs(y_m) > L"
        message:
          es: "La posicion supera L. La aproximacion de angulos pequenos ha fallado."
          en: "Position exceeds L. Small angle approximation has failed."

  - id: separacion_fringes
    title:
      es: Separacion entre franjas consecutivas
      en: Fringe spacing
    equation: Delta_y = lambda * L / d
    latex: '\\Delta y = \\frac{\\lambda L}{d}'
    category: derived
    relation_type: derived_law
    rearrangements:
      - target: Delta_y
        equation: Delta_y = lambda * L / d
        latex: '\\Delta y = \\frac{\\lambda L}{d}'
      - target: lambda
        equation: lambda = Delta_y * d / L
        latex: '\\lambda = \\frac{\\Delta y \\cdot d}{L}'
      - target: d
        equation: d = lambda * L / Delta_y
        latex: 'd = \\frac{\\lambda L}{\\Delta y}'
      - target: L
        equation: L = Delta_y * d / lambda
        latex: 'L = \\frac{\\Delta y \\cdot d}{\\lambda}'
    physical_meaning:
      es: Distancia entre dos franjas brillantes consecutivas. Es constante en toda la pantalla en la aproximacion de angulos pequenos.
      en: Distance between two consecutive bright fringes. It is constant across the screen in the small angle approximation.
    constraints:
      - variable: d
        condition: d > 0
        message:
          es: La separacion entre rendijas debe ser positiva.
          en: Slit separation must be positive.
      - variable: L
        condition: L > 0
        message:
          es: La distancia a la pantalla debe ser positiva.
          en: Screen distance must be positive.
      - variable: lambda
        condition: lambda > 0
        message:
          es: La longitud de onda debe ser positiva.
          en: Wavelength must be positive.
    validity:
      es: Valida en la aproximacion de angulos pequenos. La separacion es aproximadamente constante cerca del centro del patron.
      en: Valid in small angle approximation. Spacing is approximately constant near the center of the pattern.
    dimension_check:
      left: '[L]'
      right: '[L] * [L] / [L] = [L]'
      passes: true
    calculable: true
    motivo_no_calculable: ~
    used_in:
      - teoria: analisis_patron
      - aplicaciones: medida_longitud_onda
    interpretation_tags:
      - separacion
      - escala
      - resolucion
    result_semantics:
      target: Delta_y
      kind: spacing
      sign_meaning:
        es: Siempre positiva, representa una distancia entre franjas.
        en: Always positive, represents a distance between fringes.
      absolute_value_meaning:
        es: Separacion entre maximos consecutivos en el patron de interferencia.
        en: Spacing between consecutive maxima in the interference pattern.
    domain_checks:
      - condition: "d > 0"
        message:
          es: "La separacion entre rendijas debe ser positiva."
          en: "Slit separation must be positive."
      - condition: "L > 0"
        message:
          es: "La distancia a la pantalla debe ser positiva."
          en: "Screen distance must be positive."
      - condition: "lambda > 0"
        message:
          es: "La longitud de onda debe ser positiva."
          en: "Wavelength must be positive."
    coherence_checks:
      - condition: "Delta_y > 1e-6"
        message:
          es: "Separacion menor que 1 micron. Las franjas serian invisibles en la practica."
          en: "Spacing less than 1 micron. Fringes would be invisible in practice."
      - condition: "Delta_y < 0.1"
        message:
          es: "Separacion mayor que 10 cm. Verificar parametros del experimento."
          en: "Spacing greater than 10 cm. Verify experiment parameters."
    graph_implications:
      - target_axis: x
        variable: Delta_y
        description:
          es: "La separacion entre franjas determina la escala horizontal del patron en el grafico."
          en: "Fringe spacing determines the horizontal scale of the pattern in the graph."
    pedagogical_triggers:
      - trigger: "Delta_y > 0.1"
        message:
          es: "Separacion muy grande. Posible error de unidades en lambda o d."
          en: "Very large spacing. Possible unit error in lambda or d."
      - trigger: "Delta_y < 1e-6"
        message:
          es: "Separacion extremadamente pequena. Verificar que d no sea excesivamente grande respecto a lambda."
          en: "Extremely small spacing. Verify that d is not excessively large relative to lambda."

ui:
  default_formula: posicion_franja
  formula_groups:
    - id: basicas
      name:
        es: Ecuaciones fundamentales
        en: Fundamental equations
      formulas:
        - diferencia_camino
        - condicion_maximos
        - condicion_minimos
    - id: posicion
      name:
        es: Posicion y espaciado
        en: Position and spacing
      formulas:
        - posicion_franja
        - separacion_fringes
  input_sets:
    - id: calculo_posicion
      name:
        es: Calcular posicion de franja
        en: Calculate fringe position
      inputs: [m, lambda, L, d]
      target: y_m
      formula: posicion_franja
    - id: calculo_orden
      name:
        es: Determinar orden de franja
        en: Determine fringe order
      inputs: [y_m, lambda, L, d]
      target: m
      formula: posicion_franja
    - id: diferencia_camino_calc
      name:
        es: Calcular diferencia de camino
        en: Calculate path difference
      inputs: [d, theta]
      target: delta
      formula: diferencia_camino
`;export{e as default};
