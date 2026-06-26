const e=`version: 1
id: interferencia-de-la-luz
leaf_id: interferencia-de-la-luz

nombre:
  es: Interpretacion de la interferencia de la luz
  en: Light interference interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: optica
  parent_id: optica-fisica
  ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz

ui:
  enabled: true
  display_modes:
    - calculator_inline
    - graph_inline
    - dedicated_tab
    - modal
  labels:
    es:
      summary: Resumen
      physical_reading: Lectura fisica
      coherence: Coherencia
      model_validity: Validez del modelo
      graph_reading: Lectura grafica
      likely_errors: Errores probables
      next_step: Siguiente paso
    en:
      summary: Summary
      physical_reading: Physical reading
      coherence: Coherence
      model_validity: Model validity
      graph_reading: Graph reading
      likely_errors: Likely errors
      next_step: Next step
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 3
    max_rules_per_section: 2

dependencies:
  formulas:
    - diferencia_camino
    - condicion_maximos
    - condicion_minimos
    - posicion_franja
    - separacion_fringes
  magnitudes:
    - delta
    - d
    - theta
    - m
    - lambda
    - L
    - y_m
    - Delta_y

global_context:
  physical_domain:
    es: Optica ondulatoria - interferencia de dos haces coherentes
    en: Wave optics - interference of two coherent beams
  axis_convention:
    es: El eje x es horizontal perpendicular a las rendijas, y es vertical en la pantalla. El origen esta en el centro entre rendijas.
    en: The x-axis is horizontal perpendicular to slits, y is vertical on the screen. Origin is at the center between slits.
  standard_assumptions:
    es:
      - Luz monocromatica (una sola longitud de onda)
      - Ondas coherentes (relacion de fase estable)
      - Polarizacion compatible
      - Amplitudes iguales en ambas rendijas
    en:
      - Monochromatic light (single wavelength)
      - Coherent waves (stable phase relationship)
      - Compatible polarization
      - Equal amplitudes at both slits
  standard_warnings:
    es:
      - La aproximacion de angulos pequenos solo es valida cerca del centro
      - La luz blanca produce patrones de colores superpuestos
      - Las rendijas finitas causan difraccion adicional
    en:
      - Small angle approximation is only valid near the center
      - White light produces overlapping color patterns
      - Finite slits cause additional diffraction

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen del resultado
      en: Result summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura fisica del valor
      en: Physical reading of the value
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia fisica
      en: Physical coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:
  y_m:
    magnitude_type: state
    semantic_role:
      es: Posicion de la franja de orden m en el patron de interferencia
      en: Position of fringe of order m in the interference pattern
    next_step_rules:
      - id: ym_step_verificar_orden
        when: "true"
        status: ok
        text:
          es: Verifica que el orden m sea consistente con las franjas observadas. Recuerda que m=0 es el maximo central.
          en: Verify that order m is consistent with observed fringes. Remember m=0 is the central maximum.
      - id: ym_step_calcular_separacion
        when: "abs(y_m) > 0.01"
        status: ok
        text:
          es: Calcula la separacion entre franjas consecutivas para validar tu resultado experimental.
          en: Calculate the spacing between consecutive fringes to validate your experimental result.
    summary_rules:
      - id: ym_summary_positive
        when: "y_m > 0"
        status: ok
        text:
          es: "La franja de orden [[m]] se encuentra a [[y_m]] m del centro del patron, indicando una posicion lateral positiva en la pantalla."
          en: "The fringe of order [[m]] is located at [[y_m]] m from the pattern center, indicating a positive lateral position on the screen."
      - id: ym_summary_negative
        when: "y_m < 0"
        status: ok
        text:
          es: "La franja de orden [[m]] se encuentra a [[abs(y_m)]] m del centro del patron, en el lado opuesto del maximo central."
          en: "The fringe of order [[m]] is located at [[abs(y_m)]] m from the pattern center, on the opposite side of the central maximum."
      - id: ym_summary_central
        when: "y_m == 0"
        status: ok
        text:
          es: "La posicion cero corresponde al maximo central (m=0) donde la diferencia de camino es nula y la interferencia es constructiva."
          en: "Zero position corresponds to the central maximum (m=0) where path difference is zero and interference is constructive."
    physical_reading_rules:
      - id: ym_reading_scale
        when: "true"
        status: ok
        text:
          es: "La posicion [[y_m]] m resulta de la interferencia constructiva cuando la diferencia de camino contiene exactamente [[m]] longitudes de onda. La escala del patron depende del cociente [[lambda]]/[[d]]."
          en: "The position [[y_m]] m results from constructive interference when the path difference contains exactly [[m]] wavelengths. The pattern scale depends on the ratio [[lambda]]/[[d]]."
    coherence_rules:
      - id: ym_coherence_range
        when: "abs(y_m) < 0.5"
        status: ok
        text:
          es: El valor esta dentro del rango esperado para experimentos de doble rendija tipicos (menos de 50 cm del centro).
          en: The value is within the expected range for typical double-slit experiments (less than 50 cm from center).
      - id: ym_coherence_warning
        when: "abs(y_m) > 0.5"
        status: warning
        text:
          es: "La posicion es muy grande. Verifica que estas usando metros y no centimetros, o que los parametros L, d y lambda sean realistas."
          en: "The position is very large. Verify you are using meters not centimeters, or that parameters L, d, and lambda are realistic."
    model_validity_rules:
      - id: ym_validity_small_angle
        when: "abs(y_m) / [[L]] < 0.1"
        status: ok
        text:
          es: La aproximacion de angulos pequenos es valida. El angulo theta es menor a 0.1 radianes.
          en: The small angle approximation is valid. The angle theta is less than 0.1 radians.
      - id: ym_validity_large_angle
        when: "abs(y_m) / [[L]] >= 0.1"
        status: warning
        text:
          es: "Para esta posicion, la aproximacion de angulos pequenos comienza a perder precision. Considera usar la formula exacta con tangente."
          en: "For this position, the small angle approximation begins to lose precision. Consider using the exact formula with tangent."
    graph_rules:
      - id: ym_graph_position
        when: "true"
        status: ok
        text:
          es: "En el grafico, la franja de orden [[m]] aparece a la posicion [[y_m]] m, correspondiendo a un maximo de intensidad."
          en: "In the graph, the fringe of order [[m]] appears at position [[y_m]] m, corresponding to an intensity maximum."
    likely_errors:
      - id: ym_error_units
        when: "abs(y_m) > 1"
        status: error
        text:
          es: "El valor parece excesivamente grande. Un error frecuente es olvidar convertir d o lambda de milimetros o nanometros a metros antes de sustituir en la formula."
          en: "The value seems excessively large. A common mistake is to forget converting d or lambda from millimetres or nanometres to metres before substituting into the formula."
      - id: ym_error_order
        when: "abs(m) > 20"
        status: warning
        text:
          es: El orden m es muy alto. Un error habitual es confundir el numero de franjas visibles con el orden maximo posible; en la practica, la difraccion limita los ordenes observables.
          en: The order m is very high. A common mistake is to confuse the number of visible fringes with the maximum possible order; in practice, diffraction limits observable orders.

  m:
    magnitude_type: parameter
    semantic_role:
      es: Orden de la franja en el patron de interferencia
      en: Order of the fringe in the interference pattern
    next_step_rules:
      - id: m_step_siguiente_orden
        when: "true"
        status: ok
        text:
          es: Calcula las posiciones de los ordenes adyacentes (m+1 y m-1) para determinar la separacion entre franjas.
          en: Calculate positions of adjacent orders (m+1 and m-1) to determine fringe spacing.
    summary_rules:
      - id: m_summary_central
        when: "m == 0"
        status: ok
        text:
          es: "El orden m=0 corresponde al maximo central donde la diferencia de camino es cero y las ondas llegan en fase."
          en: "Order m=0 corresponds to the central maximum where path difference is zero and waves arrive in phase."
      - id: m_summary_lateral
        when: "m != 0"
        status: ok
        text:
          es: "El orden [[m]] indica que la diferencia de camino contiene exactamente [[abs(m)]] longitudes de onda completas, produciendo un maximo de interferencia constructiva."
          en: "Order [[m]] indicates that the path difference contains exactly [[abs(m)]] complete wavelengths, producing a maximum of constructive interference."
    physical_reading_rules:
      - id: m_reading_interpretation
        when: "true"
        status: ok
        text:
          es: "El orden m describe cuantos enteros de longitud de onda caben en la diferencia de camino optico. Cada entero adicional corresponde al siguiente maximo de intensidad."
          en: "Order m describes how many integer wavelengths fit in the optical path difference. Each additional integer corresponds to the next intensity maximum."
    coherence_rules:
      - id: m_coherence_integer
        when: "abs(m - round(m)) < 0.001"
        status: ok
        text:
          es: El valor es consistente con un orden entero, requerido para maximos de interferencia.
          en: The value is consistent with an integer order, required for interference maxima.
      - id: m_coherence_noninteger
        when: "abs(m - round(m)) >= 0.001"
        status: warning
        text:
          es: El orden m no es un entero exacto. Esto sugiere que el punto calculado no coincide exactamente con un maximo.
          en: Order m is not an exact integer. This suggests the calculated point does not exactly coincide with a maximum.
    model_validity_rules:
      - id: m_validity_range
        when: "abs(m) <= 10"
        status: ok
        text:
          es: El orden esta dentro del rango tipicamente observable en experimentos de laboratorio.
          en: The order is within the range typically observable in laboratory experiments.
      - id: m_validity_extreme
        when: "abs(m) > 10"
        status: warning
        text:
          es: "Ordenes muy altos pueden no ser visibles debido a la difraccion por el ancho finito de las rendijas."
          en: "Very high orders may not be visible due to diffraction from the finite slit width."
    graph_rules:
      - id: m_graph_label
        when: "true"
        status: ok
        text:
          es: "En el patron de interferencia, los maximos estan etiquetados por su orden m, simetricamente distribuidos alrededor del centro (m=0)."
          en: "In the interference pattern, maxima are labeled by their order m, symmetrically distributed around the center (m=0)."
    likely_errors:
      - id: m_error_zero
        when: "m == 0 and abs([[y_m]]) > 0.001"
        status: error
        text:
          es: "Inconsistencia: si m=0, la posicion y_m deberia ser cero (maximo central)."
          en: "Inconsistency: if m=0, position y_m should be zero (central maximum)."
      - id: m_error_sign
        when: "m * [[y_m]] < 0"
        status: warning
        text:
          es: El signo de m y el signo de la posicion y_m deberian coincidir para mantener la consistencia fisica.
          en: The sign of m and the sign of position y_m should match for physical consistency.

  delta:
    magnitude_type: state
    semantic_role:
      es: Diferencia de camino optico entre los dos haces
      en: Optical path difference between the two beams
    summary_rules:
      - id: delta_summary
        when: "true"
        status: ok
        text:
          es: "La diferencia de camino optico es [[delta]] m, determinando el tipo de interferencia en ese punto."
          en: "The optical path difference is [[delta]] m, determining the type of interference at that point."
    physical_reading_rules:
      - id: delta_reading
        when: "true"
        status: ok
        text:
          es: "El valor de [[delta]] representa la distancia adicional que recorre un haz respecto al otro. Si es multiplo entero de [[lambda]], hay maximo; si es semientero, hay minimo."
          en: "The value of [[delta]] represents the additional distance one beam travels relative to the other. If it is an integer multiple of [[lambda]], there is a maximum; if half-integer, a minimum."
    coherence_rules:
      - id: delta_coherence
        when: "abs(delta) <= d"
        status: ok
        text:
          es: La diferencia de camino no supera la separacion entre rendijas, como es fisicamente esperado.
          en: Path difference does not exceed slit separation, as physically expected.
    model_validity_rules:
      - id: delta_validity_small_angle
        when: "abs(delta) < d * 0.1"
        status: ok
        text:
          es: La diferencia de camino es pequena frente a d, la aproximacion de angulos pequenos es excelente.
          en: Path difference is small compared to d, the small angle approximation is excellent.
    graph_rules:
      - id: delta_graph_fringe
        when: "true"
        status: ok
        text:
          es: "En el grafico de intensidad, [[delta]] determina la fase relativa entre los haces y por tanto la posicion en el patron."
          en: "In the intensity graph, [[delta]] determines the relative phase between beams and therefore the position in the pattern."
    likely_errors:
      - id: delta_error_large
        when: "abs(delta) > d"
        status: error
        text:
          es: "La diferencia de camino supera la separacion entre rendijas. Revisa el angulo theta."
          en: "Path difference exceeds slit separation. Check angle theta."
    next_step_rules:
      - id: delta_next_step
        when: "true"
        status: ok
        text:
          es: Compara delta con multiplos de lambda para determinar si el punto corresponde a un maximo o minimo.
          en: Compare delta with multiples of lambda to determine whether the point corresponds to a maximum or minimum.

  d:
    magnitude_type: parameter
    semantic_role:
      es: Separacion entre rendijas del experimento
      en: Slit separation of the experiment
    summary_rules:
      - id: d_summary
        when: "true"
        status: ok
        text:
          es: "La separacion entre rendijas es [[d]] m."
          en: "The slit separation is [[d]] m."
    physical_reading_rules:
      - id: d_reading
        when: "true"
        status: ok
        text:
          es: "La separacion [[d]] controla la escala angular del patron. A menor d, mayor separacion entre franjas."
          en: "The separation [[d]] controls the angular scale of the pattern. Smaller d means larger fringe spacing."
    coherence_rules:
      - id: d_coherence
        when: "d > 0"
        status: ok
        text:
          es: Valor positivo, consistente con una distancia fisica.
          en: Positive value, consistent with a physical distance.
    model_validity_rules:
      - id: d_validity
        when: "d > lambda"
        status: ok
        text:
          es: La separacion entre rendijas es mayor que la longitud de onda, condicion necesaria para observar multiples franjas.
          en: Slit separation is greater than wavelength, necessary condition to observe multiple fringes.
    graph_rules:
      - id: d_graph
        when: "true"
        status: ok
        text:
          es: "Aumentar [[d]] comprime el patron de franjas en el grafico, reduciendo la separacion entre maximos."
          en: "Increasing [[d]] compresses the fringe pattern in the graph, reducing the spacing between maxima."
    likely_errors:
      - id: d_error_units
        when: "d > 0.01"
        status: warning
        text:
          es: "Separacion entre rendijas mayor a 1 cm. Verifica que no estes usando milimetros sin convertir a metros."
          en: "Slit separation greater than 1 cm. Verify you are not using millimetres without converting to metres."
    next_step_rules:
      - id: d_next_step
        when: "true"
        status: ok
        text:
          es: Con d conocida, calcula la separacion entre franjas como lambda por L dividido por d.
          en: With d known, calculate fringe spacing as lambda times L divided by d.

  theta:
    magnitude_type: state
    semantic_role:
      es: Angulo de observacion respecto a la direccion central
      en: Observation angle relative to the central direction
    summary_rules:
      - id: theta_summary
        when: "true"
        status: ok
        text:
          es: "El angulo de observacion es [[theta]] rad."
          en: "The observation angle is [[theta]] rad."
    physical_reading_rules:
      - id: theta_reading
        when: "true"
        status: ok
        text:
          es: "El angulo [[theta]] indica la direccion de observacion respecto al eje central. Cada orden m corresponde a un angulo especifico."
          en: "The angle [[theta]] indicates the observation direction relative to the central axis. Each order m corresponds to a specific angle."
    coherence_rules:
      - id: theta_coherence
        when: "abs(theta) < 1.57"
        status: ok
        text:
          es: Angulo dentro del rango fisico valido.
          en: Angle within valid physical range.
    model_validity_rules:
      - id: theta_validity
        when: "abs(theta) < 0.1"
        status: ok
        text:
          es: La aproximacion de angulos pequenos es valida para este angulo.
          en: The small angle approximation is valid for this angle.
    graph_rules:
      - id: theta_graph
        when: "true"
        status: ok
        text:
          es: "El angulo [[theta]] corresponde a la posicion horizontal en el grafico de intensidad angular."
          en: "The angle [[theta]] corresponds to the horizontal position in the angular intensity graph."
    likely_errors:
      - id: theta_error_degrees
        when: "abs(theta) > 1"
        status: error
        text:
          es: "Angulo muy grande. Verifica que estas usando radianes y no grados."
          en: "Very large angle. Verify you are using radians, not degrees."
    next_step_rules:
      - id: theta_next_step
        when: "true"
        status: ok
        text:
          es: Usa theta para calcular la diferencia de camino como d multiplicado por sin(theta).
          en: Use theta to calculate the path difference as d multiplied by sin(theta).

  lambda:
    magnitude_type: parameter
    semantic_role:
      es: Longitud de onda de la fuente luminosa
      en: Wavelength of the light source
    summary_rules:
      - id: lambda_summary
        when: "true"
        status: ok
        text:
          es: "La longitud de onda es [[lambda]] m."
          en: "The wavelength is [[lambda]] m."
    physical_reading_rules:
      - id: lambda_reading
        when: "true"
        status: ok
        text:
          es: "La longitud de onda [[lambda]] determina el color de la luz y la escala del patron de interferencia."
          en: "The wavelength [[lambda]] determines the colour of light and the scale of the interference pattern."
    coherence_rules:
      - id: lambda_coherence
        when: "lambda > 0"
        status: ok
        text:
          es: Valor positivo, consistente con una longitud de onda fisica.
          en: Positive value, consistent with a physical wavelength.
    model_validity_rules:
      - id: lambda_validity
        when: "lambda > 3e-7 and lambda < 8e-7"
        status: ok
        text:
          es: La longitud de onda esta en el rango visible, consistente con un experimento optico estandar.
          en: Wavelength is in the visible range, consistent with a standard optical experiment.
    graph_rules:
      - id: lambda_graph
        when: "true"
        status: ok
        text:
          es: "Mayor [[lambda]] produce franjas mas separadas en el grafico. La separacion entre maximos es proporcional a lambda."
          en: "Larger [[lambda]] produces more widely spaced fringes in the graph. The separation between maxima is proportional to lambda."
    likely_errors:
      - id: lambda_error_nm
        when: "lambda > 1e-3"
        status: error
        text:
          es: "Longitud de onda muy grande. Posible error: usar nm sin convertir a metros (dividir entre 1e9)."
          en: "Wavelength too large. Possible error: using nm without converting to metres (divide by 1e9)."
    next_step_rules:
      - id: lambda_next_step
        when: "true"
        status: ok
        text:
          es: Con lambda conocida, calcula la separacion entre franjas o la posicion del maximo deseado.
          en: With lambda known, calculate the fringe spacing or the position of the desired maximum.

  L:
    magnitude_type: parameter
    semantic_role:
      es: Distancia desde las rendijas hasta la pantalla de observacion
      en: Distance from slits to observation screen
    summary_rules:
      - id: L_summary
        when: "true"
        status: ok
        text:
          es: "La distancia a la pantalla es [[L]] m."
          en: "The screen distance is [[L]] m."
    physical_reading_rules:
      - id: L_reading
        when: "true"
        status: ok
        text:
          es: "La distancia [[L]] actua como factor de amplificacion: mayor L produce franjas mas separadas en la pantalla."
          en: "The distance [[L]] acts as an amplification factor: larger L produces more widely spaced fringes on the screen."
    coherence_rules:
      - id: L_coherence
        when: "L > 0"
        status: ok
        text:
          es: Valor positivo, consistente con una distancia fisica.
          en: Positive value, consistent with a physical distance.
    model_validity_rules:
      - id: L_validity
        when: "L > d * 100"
        status: ok
        text:
          es: La distancia a la pantalla es mucho mayor que la separacion entre rendijas, validando la aproximacion de campo lejano.
          en: Screen distance is much larger than slit separation, validating the far-field approximation.
    graph_rules:
      - id: L_graph
        when: "true"
        status: ok
        text:
          es: "Mayor [[L]] estira el patron en el grafico, separando mas los maximos sin cambiar su numero."
          en: "Larger [[L]] stretches the pattern in the graph, spacing maxima further apart without changing their number."
    likely_errors:
      - id: L_error_units
        when: "L < 0.01"
        status: warning
        text:
          es: "Distancia a pantalla muy pequena. Verifica que no estes usando centimetros sin convertir a metros."
          en: "Screen distance very small. Verify you are not using centimetres without converting to metres."
    next_step_rules:
      - id: L_next_step
        when: "true"
        status: ok
        text:
          es: Con L conocida, junto con d y lambda, calcula la separacion entre franjas o la posicion de cualquier orden.
          en: With L known, together with d and lambda, calculate fringe spacing or the position of any order.

  Delta_y:
    magnitude_type: state
    semantic_role:
      es: Separacion entre franjas consecutivas del patron
      en: Spacing between consecutive fringes of the pattern
    next_step_rules:
      - id: dy_step_medir_lambda
        when: "true"
        status: ok
        text:
          es: "Mide experimentalmente Delta_y y conociendo d y L, puedes calcular la longitud de onda desconocida usando [[lambda]] = Delta_y * d / L."
          en: "Measure Delta_y experimentally and knowing d and L, you can calculate the unknown wavelength using [[lambda]] = Delta_y * d / L."
    summary_rules:
      - id: dy_summary_value
        when: "true"
        status: ok
        text:
          es: "La separacion entre franjas consecutivas es [[Delta_y]] m, lo que indica la escala caracteristica del patron de interferencia."
          en: "The spacing between consecutive fringes is [[Delta_y]] m, indicating the characteristic scale of the interference pattern."
    physical_reading_rules:
      - id: dy_reading_interpretation
        when: "true"
        status: ok
        text:
          es: "Esta separacion es constante en toda la pantalla (aproximadamente) y resulta del cociente entre la longitud de onda y la separacion entre rendijas, escalado por la distancia a la pantalla."
          en: "This spacing is constant across the screen (approximately) and results from the ratio of wavelength to slit separation, scaled by the screen distance."
    coherence_rules:
      - id: dy_coherence_positive
        when: "Delta_y > 0"
        status: ok
        text:
          es: La separacion es positiva, como debe ser para una distancia fisica.
          en: The spacing is positive, as it should be for a physical distance.
      - id: dy_coherence_millimeters
        when: "Delta_y > 0.001 and Delta_y < 0.01"
        status: ok
        text:
          es: La separacion esta en el rango de milimetros, tipico para experimentos de doble rendija con laser.
          en: The spacing is in the millimeter range, typical for double-slit experiments with laser.
    model_validity_rules:
      - id: dy_validity_constant
        when: "true"
        status: ok
        text:
          es: "La separacion entre franjas es aproximadamente constante solo cerca del centro del patron (aproximacion de angulos pequenos)."
          en: "Fringe spacing is approximately constant only near the center of the pattern (small angle approximation)."
    graph_rules:
      - id: dy_graph_spacing
        when: "true"
        status: ok
        text:
          es: "En el grafico de intensidad vs posicion, la separacion entre picos consecutivos corresponde a Delta_y."
          en: "In the intensity vs position graph, the separation between consecutive peaks corresponds to Delta_y."
    likely_errors:
      - id: dy_error_small
        when: "Delta_y < 1e-6"
        status: warning
        text:
          es: "Separacion muy pequena. Verifica que d no sea demasiado grande o L demasiado pequena."
          en: "Very small spacing. Verify that d is not too large or L too small."

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true

cross_checks:
  - id: check_y_m_consistency
    description:
      es: Verifica que y_m calculado sea consistente con m, lambda, L y d
      en: Verifies that calculated y_m is consistent with m, lambda, L and d
    formula: "abs([[y_m]] - [[m]]*[[lambda]]*[[L]]/[[d]]) < 0.001"
    severity: error
  - id: check_lambda_positive
    description:
      es: Verifica que la longitud de onda sea positiva
      en: Verifies that wavelength is positive
    formula: "[[lambda]] > 0"
    severity: error

error_patterns:
  - id: error_units_mm_nm
    pattern: "result > 1000"
    message:
      es: "Resultado anomalamente grande. Posible error de unidades: usando mm o nm en lugar de m."
      en: "Anomalously large result. Possible unit error: using mm or nm instead of m."
    severity: error

graph_binding:
  enabled: true
  preferred_graph_type: Coord
  variables_in_graph:
    x_axis: y_m
    y_axis: intensity
  interpretation_mapping:
    - graph_element: peak_position
      target_variable: y_m
      description:
        es: Posicion de los maximos de intensidad en el patron
        en: Position of intensity maxima in the pattern

mini_graph:
  enabled: true
  type: Coord
  data_points: 200
  x_range:
    min: -0.05
    max: 0.05
    unit: m
`;export{e as default};
