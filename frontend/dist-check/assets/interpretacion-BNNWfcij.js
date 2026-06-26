const e=`version: "2.0"
id: interp-difraccion-de-la-luz
leaf_id: difraccion-de-la-luz

nombre:
  es: "Interpretación — Difracción de la luz"
  en: "Interpretation — Diffraction of Light"

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: optica
  parent_id: optica-fisica
  ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-fisica/difraccion-de-la-luz

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: "Interpretación física de la difracción"
    en: "Physical interpretation of diffraction"
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - angulo_primer_minimo
    - ancho_maximo_central
  magnitudes:
    - a
    - lambda
    - theta
    - L
    - w

global_context:
  physical_domain:
    es: "Óptica física — difracción de Fraunhofer de una sola rendija"
    en: "Physical optics — single slit Fraunhofer diffraction"
  axis_convention:
    es: "El eje óptico de propagación es perpendicular al plano de la rendija. Los ángulos se miden respecto al eje central, siendo positivos hacia arriba/derecha y negativos hacia abajo/izquierda."
    en: "The optical axis of propagation is perpendicular to the slit plane. Angles are measured relative to the central axis, being positive upwards/rightwards and negative downwards/leftwards."
  standard_assumptions:
    - "Aproximación de difracción de Fraunhofer (campo lejano, L >> a)"
    - "Frente de onda plano e incidente normal a la rendija"
    - "Luz monocromática de longitud de onda lambda coherente"
    - "Aproximación paraxial de ángulos pequeños donde sin(theta) ≈ theta"
  standard_warnings:
    - "Si el ancho de la rendija a es comparable o menor a lambda, la aproximación paraxial falla y se requiere el modelo vectorial de Maxwell completo."
    - "Si la pantalla está muy cerca de la rendija (L comparable a a), se entra en el régimen de difracción de Fresnel (campo cercano)."

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: "Resumen del estado de difracción"
      en: "Diffraction state summary"
  physical_reading:
    enabled: true
    order: 2
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    enabled: true
    order: 3
    title:
      es: "Coherencia física"
      en: "Physical coherence"
  model_validity:
    enabled: true
    order: 4
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    enabled: true
    order: 5
    title:
      es: "Lectura del gráfico"
      en: "Graph reading"
  likely_errors:
    enabled: true
    order: 6
    title:
      es: "Errores probables"
      en: "Likely errors"
  next_step:
    enabled: true
    order: 7
    title:
      es: "Siguiente paso"
      en: "Next step"

targets:

  w:
    magnitude_type: output_quantity
    semantic_role:
      es: "Ancho lineal del máximo central proyectado en la pantalla de observación."
      en: "Linear width of the central maximum projected on the observation screen."
    summary_rules:
      - id: w_summary_positive
        when: "w > 0"
        status: ok
        text:
          es: "[[w]] cuantifica el ancho lineal del máximo central de difracción. Representa el tamaño de la franja brillante principal sobre la pantalla, que depende del material y la configuración geométrica."
          en: "[[w]] quantifies the linear width of the central diffraction maximum. It represents the size of the main bright fringe on the screen, which depends on the material and the geometric setup."
      - id: w_summary_default
        when: "true"
        status: ok
        text:
          es: "[[w]] describe el ancho espacial de la franja luminosa central del patrón de difracción."
          en: "[[w]] describes the spatial width of the central bright fringe of the diffraction pattern."
    physical_reading_rules:
      - id: w_reading_narrow
        when: "w < 0.005"
        status: ok
        text:
          es: "[[w]] es estrecho (menor a 5 milímetros), lo que indica una rendija [[a]] relativamente ancha o una pantalla [[L]] cercana. La luz apenas se desvía de su trayectoria rectilínea."
          en: "[[w]] is narrow (less than 5 millimeters), indicating a relatively wide slit [[a]] or a close screen [[L]]. The light barely deviates from its straight path."
      - id: w_reading_wide
        when: "w >= 0.05"
        status: ok
        text:
          es: "[[w]] es muy ancho (mayor a 5 centímetros), lo que indica un fuerte efecto ondulatorio debido a una rendija [[a]] sumamente estrecha o una pantalla [[L]] muy lejana."
          en: "[[w]] is very wide (greater than 5 centimeters), indicating a strong wave effect due to an extremely narrow slit [[a]] or a very distant screen [[L]]."
      - id: w_reading_default
        when: "true"
        status: ok
        text:
          es: "El ancho lineal [[w]] es proporcional a [[lambda]] y a [[L]], e inversamente proporcional al ancho de la rendija [[a]]."
          en: "The linear width [[w]] is proportional to [[lambda]] and [[L]], and inversely proportional to the slit width [[a]]."
    coherence_rules:
      - id: w_coherence_exceeds_L
        when: "w >= L"
        status: warning
        text:
          es: "[[w]] no debería ser mayor o igual a [[L]] en el modelo paraxial de Fraunhofer. Un valor tan grande indica que el patrón se dispersa en ángulos muy abiertos, invalidando la aproximación."
          en: "[[w]] should not be greater than or equal to [[L]] in the paraxial Fraunhofer model. Such a large value indicates the pattern scatters at very wide angles, invalidating the approximation."
      - id: w_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[w]] sea significativamente menor que [[L]] y consistente con las escalas físicas de laboratorio."
          en: "Verify that [[w]] is significantly smaller than [[L]] and consistent with laboratory physical scales."
    model_validity_rules:
      - id: w_validity_small_angle
        when: "true"
        status: ok
        text:
          es: "El modelo lineal para [[w]] asume la aproximación paraxial tan(theta) ≈ theta. Deja de ser exacto si la rendija [[a]] es extremadamente estrecha, ya que los ángulos reales se abren demasiado."
          en: "The linear model for [[w]] assumes the paraxial approximation tan(theta) ≈ theta. It ceases to be exact if the slit [[a]] is extremely narrow, as the real angles spread too wide."
    graph_rules:
      - id: w_graph_linear
        when: "true"
        status: ok
        text:
          es: "En un gráfico de [[w]] frente a la distancia a la pantalla [[L]], el resultado se sitúa sobre una línea recta con pendiente positiva que pasa por el origen."
          en: "In a plot of [[w]] against the distance to the screen [[L]], the result lies on a straight line with a positive slope passing through the origin."
    likely_errors:
      - id: w_error_half_width
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir el ancho del máximo central [[w]] con la distancia desde el centro al primer mínimo (que es la mitad del ancho, w/2)."
          en: "Frequent error: confusing the central maximum width [[w]] with the distance from the center to the first minimum (which is half the width, w/2)."
    next_step_rules:
      - id: w_next_resolve
        when: "true"
        status: ok
        text:
          es: "Con [[w]] determinado, calcular la intensidad en diferentes puntos laterales o evaluar el criterio de resolución para comprobar si dos fuentes de luz cercanas podrían resolverse."
          en: "With [[w]] determined, calculate the intensity at different lateral points or evaluate the resolution criterion to check if two nearby light sources could be resolved."

  theta:
    magnitude_type: output_quantity
    semantic_role:
      es: "Desviación angular del primer mínimo de difracción respecto al eje óptico central."
      en: "Angular deviation of the first diffraction minimum from the central optical axis."
    summary_rules:
      - id: theta_summary_default
        when: "true"
        status: ok
        text:
          es: "[[theta]] representa la desviación angular hacia el primer punto de oscuridad lateral. Indica el grado de esparcimiento angular intrínseco del haz al cruzar la abertura rectangular."
          en: "[[theta]] represents the angular deviation toward the first point of lateral darkness. It indicates the degree of intrinsic angular spread of the beam after crossing the rectangular aperture."
    physical_reading_rules:
      - id: theta_reading_large
        when: "abs(theta) >= 0.1"
        status: ok
        text:
          es: "[[theta]] es mayor o igual a 0.1 radianes (aproximadamente 5.7 grados). El haz se difracta notablemente, lo que es característico de aberturas de tamaño microscópico cercano a la longitud de onda de la luz."
          en: "[[theta]] is greater than or equal to 0.1 radians (approximately 5.7 degrees). The beam diffracts noticeably, which is characteristic of aperture sizes close to the wavelength of light."
      - id: theta_reading_default
        when: "true"
        status: ok
        text:
          es: "El ángulo [[theta]] crece de forma directamente proporcional a [[lambda]] e inversamente proporcional al ancho de la rendija [[a]]."
          en: "The angle [[theta]] increases in direct proportion to [[lambda]] and in inverse proportion to the slit width [[a]]."
    coherence_rules:
      - id: theta_coherence_limit
        when: "abs(theta) >= 1.57"
        status: error
        text:
          es: "[[theta]] no puede superar los 90 grados (1.57 rad). Un ángulo mayor o igual es físicamente inconsistente con la difracción hacia adelante en una sola rendija plana."
          en: "[[theta]] cannot exceed 90 degrees (1.57 rad). A larger or equal angle is physically inconsistent with forward diffraction on a single flat slit."
      - id: theta_coherence_default
        when: "true"
        status: ok
        text:
          es: "Comprobar que el valor absoluto de [[theta]] sea menor que 0.1 radianes para garantizar una excelente precisión de la aproximación lineal sin(theta) ≈ theta."
          en: "Check that the absolute value of [[theta]] is less than 0.1 radians to guarantee excellent accuracy of the linear approximation sin(theta) ≈ theta."
    model_validity_rules:
      - id: theta_validity_approximation
        when: "abs(theta) >= 0.2"
        status: warning
        text:
          es: "El ángulo del primer mínimo es relativamente grande, por lo que la aproximación lineal sin(theta) ≈ theta comete un error apreciable. Se recomienda usar la ecuación trigonométrica exacta theta = arcsin(lambda/a)."
          en: "The angle of the first minimum is relatively large, so the linear approximation sin(theta) ≈ theta commits an appreciable error. It is recommended to use the exact trigonometric equation theta = arcsin(lambda/a)."
      - id: theta_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para rendijas uniformes planas en régimen paraxial de Fraunhofer."
          en: "The model is valid for uniform flat slits in the paraxial Fraunhofer regime."
    graph_rules:
      - id: theta_graph_hyperbola
        when: "true"
        status: ok
        text:
          es: "En una gráfica de [[theta]] frente al ancho de la rendija [[a]], la curva es una hipérbola decreciente. Estrechar la rendija aumenta rápidamente la dispersión angular del haz."
          en: "In a plot of [[theta]] against the slit width [[a]], the curve is a decreasing hyperbola. Narrowing the slit rapidly increases the angular spread of the beam."
    likely_errors:
      - id: theta_error_degrees
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir radianes con grados sexagesimales al interpretar el valor numérico de [[theta]] en fórmulas de cálculo directo."
          en: "Frequent error: confusing radians with degrees when interpreting the numerical value of [[theta]] in direct calculation formulas."
    next_step_rules:
      - id: theta_next_calculate_w
        when: "true"
        status: ok
        text:
          es: "Con el ángulo angular [[theta]] determinado, combinarlo con la distancia a la pantalla [[L]] para calcular el ancho lineal del patrón sobre la pantalla."
          en: "With the angular deviation [[theta]] determined, combine it with the distance to the screen [[L]] to calculate the linear width of the pattern on the screen."

  a:
    magnitude_type: input_parameter
    semantic_role:
      es: "Ancho de la abertura rectangular simple que difracta la luz."
      en: "Slit width of the single rectangular aperture diffracting light."
    summary_rules:
      - id: a_summary_default
        when: "true"
        status: ok
        text:
          es: "[[a]] describe el ancho de la rendija difractora. Es la magnitud que domina la dispersión del patrón: si [[a]] es pequeña, la luz se expande significativamente sobre la pantalla."
          en: "[[a]] describes the width of the diffracting slit. It is the quantity that dominates the pattern's spread: if [[a]] is small, light expands significantly across the screen."
    physical_reading_rules:
      - id: a_reading_very_small
        when: "a < 0.00005"
        status: ok
        text:
          es: "[[a]] es extremadamente estrecha (menor a 50 micrómetros). La difracción es muy intensa y el patrón visualizado en la pantalla se ensancha notablemente."
          en: "[[a]] is extremely narrow (less than 50 micrometers). The diffraction is very intense and the observed pattern on the screen widens significantly."
      - id: a_reading_default
        when: "true"
        status: ok
        text:
          es: "El ancho [[a]] de la rendija define la escala física de la apertura. Para observar patrones de difracción nítidos, debe ser del orden de magnitud de micrómetros."
          en: "The width [[a]] of the slit defines the physical scale of the aperture. To observe sharp diffraction patterns, it must be in the micrometer order of magnitude."
    coherence_rules:
      - id: a_coherence_zero
        when: "a <= 0"
        status: error
        text:
          es: "[[a]] debe ser estrictamente positiva. Un valor menor o igual a cero no corresponde a una abertura real y no permite el paso de luz."
          en: "[[a]] must be strictly positive. A value less than or equal to zero does not correspond to a real aperture and does not allow light to pass."
      - id: a_coherence_default
        when: "true"
        status: ok
        text:
          es: "Comprobar que el valor de [[a]] es mayor que la longitud de onda [[lambda]]. Si [[a]] fuera menor que [[lambda]], el primer mínimo de difracción no existiría físicamente."
          en: "Check that the value of [[a]] is larger than the wavelength [[lambda]]. If [[a]] were smaller than [[lambda]], the first diffraction minimum would not physically exist."
    model_validity_rules:
      - id: a_validity_extreme
        when: "a <= lambda"
        status: warning
        text:
          es: "El ancho de la rendija [[a]] es menor o igual a la longitud de onda [[lambda]]. A esta escala microscópica extrema, la aproximación paraxial y la teoría escalar de Fraunhofer pierden validez física."
          en: "The slit width [[a]] is less than or equal to the wavelength [[lambda]]. At this extreme microscopic scale, the paraxial approximation and Fraunhofer scalar theory lose physical validity."
      - id: a_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo lineal es exacto en el régimen paraxial donde [[a]] es al menos diez veces mayor que [[lambda]]."
          en: "The linear model is accurate in the paraxial regime where [[a]] is at least ten times larger than [[lambda]]."
    graph_rules:
      - id: a_graph_implication
        when: "true"
        status: ok
        text:
          es: "En el gráfico del patrón de difracción, [[a]] representa la variable de control que controla la anchura hiperbólica del máximo central en el eje horizontal."
          en: "In the diffraction pattern plot, [[a]] represents the control variable that controls the hyperbolic width of the central maximum on the horizontal axis."
    likely_errors:
      - id: a_error_double_slit
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir el ancho de la rendija [[a]] con la distancia entre rendijas de un patrón de doble rendija de Young."
          en: "Frequent error: confusing the slit width [[a]] with the slit separation of a Young double-slit pattern."
    next_step_rules:
      - id: a_next_action
        when: "true"
        status: ok
        text:
          es: "Con [[a]] fijado, experimentar variando la longitud de onda [[lambda]] para ver cómo cambia el color y el ancho del patrón proyectado."
          en: "With [[a]] fixed, experiment by varying the wavelength [[lambda]] to see how the color and width of the projected pattern change."

  lambda:
    magnitude_type: input_parameter
    semantic_role:
      es: "Longitud de onda de la luz incidente sobre la rendija."
      en: "Wavelength of the light incident on the slit."
    summary_rules:
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] representa la longitud de onda del haz monocromático. Indica la escala oscilatoria de la luz y determina la coloración y la anchura angular de la difracción."
          en: "[[lambda]] represents the wavelength of the monochromatic beam. It indicates the oscillatory scale of light and determines the coloring and angular width of diffraction."
    physical_reading_rules:
      - id: lambda_reading_red
        when: "lambda >= 0.0000006"
        status: ok
        text:
          es: "[[lambda]] corresponde a la parte roja/infrarroja del espectro visible. Las longitudes de onda largas se difractan más, produciendo un patrón visualmente más ancho."
          en: "[[lambda]] corresponds to the red/infrared part of the visible spectrum. Longer wavelengths diffract more, producing a visually wider pattern."
      - id: lambda_reading_blue
        when: "lambda <= 0.0000005"
        status: ok
        text:
          es: "[[lambda]] corresponde a la región azul/violeta del espectro visible. Las longitudes de onda cortas se difractan menos, concentrando más la luz en el centro."
          en: "[[lambda]] corresponds to the blue/violet region of the visible spectrum. Shorter wavelengths diffract less, concentrating light more toward the center."
      - id: lambda_reading_default
        when: "true"
        status: ok
        text:
          es: "La longitud de onda de la luz visible en metros siempre está en el rango de los cientos de nanómetros."
          en: "The wavelength of visible light in meters is always in the range of hundreds of nanometers."
    coherence_rules:
      - id: lambda_coherence_zero
        when: "lambda <= 0"
        status: error
        text:
          es: "[[lambda]] debe ser positiva. Una longitud de onda nula o negativa contradice la naturaleza periódica de la luz."
          en: "[[lambda]] must be positive. A zero or negative wavelength contradicts the periodic nature of light."
      - id: lambda_coherence_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que la longitud de onda introducida se encuentra en el rango visible (de 400 nm a 700 nm) si se busca validar un experimento óptico estándar."
          en: "Confirm that the entered wavelength lies in the visible range (400 nm to 700 nm) if seeking to validate a standard optical experiment."
    model_validity_rules:
      - id: lambda_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo lineal asume que la luz es puramente monocromática. Si se utiliza luz blanca o policromática, cada longitud de onda se difracta de forma diferente, resultando en bordes irisados."
          en: "El modelo lineal asume que la luz es puramente monocromática. Si se utiliza luz blanca o policromática, cada longitud de onda se difracta de forma diferente, resultando en bordes irisados."
    graph_rules:
      - id: lambda_graph_default
        when: "true"
        status: ok
        text:
          es: "En una representación lineal de difracción, un incremento en [[lambda]] desplaza linealmente los mínimos de difracción hacia afuera en la pantalla."
          en: "In a linear representation of diffraction, an increase in [[lambda]] linearly shifts the diffraction minima outward on the screen."
    likely_errors:
      - id: lambda_error_units
        when: "true"
        status: warning
        text:
          es: "Error frecuente: omitir la conversión de nanómetros o micrómetros a metros, lo que desajusta el resultado del cálculo en varios órdenes de magnitud."
          en: "Frequent error: omitting the conversion from nanometers or micrometers to meters, which offsets the calculation result by several orders of magnitude."
    next_step_rules:
      - id: lambda_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[lambda]] conocida, estimar la energía de los fotones incidentes mediante la constante de Planck para enlazar la óptica clásica con la física cuántica."
          en: "With [[lambda]] known, estimate the energy of the incident photons using Planck's constant to link classical optics with quantum physics."

  L:
    magnitude_type: input_parameter
    semantic_role:
      es: "Distancia longitudinal desde el plano de la rendija a la pantalla de proyección."
      en: "Longitudinal distance from the slit plane to the projection screen."
    summary_rules:
      - id: L_summary_default
        when: "true"
        status: ok
        text:
          es: "[[L]] representa la distancia geométrica longitudinal hasta la pantalla. Indica el factor de amplificación espacial del patrón angular proyectado."
          en: "[[L]] represents the longitudinal geometric distance to the screen. It indicates the spatial amplification factor of the projected angular pattern."
    physical_reading_rules:
      - id: L_reading_large
        when: "L >= 2.0"
        status: ok
        text:
          es: "[[L]] es una distancia de pantalla larga (mayor o igual a 2.0 metros), óptima para separar claramente los máximos y mínimos sobre la pantalla en laboratorios escolares."
          en: "[[L]] is a long screen distance (greater than or equal to 2.0 meters), optimal for clearly resolving maxima and minima on the screen in school laboratories."
      - id: L_reading_default
        when: "true"
        status: ok
        text:
          es: "La distancia a la pantalla [[L]] amplifica simétricamente de forma lineal el patrón angular de difracción."
          en: "The distance to the screen [[L]] symmetrically amplifies the angular diffraction pattern in a linear fashion."
    coherence_rules:
      - id: L_coherence_zero
        when: "L <= 0"
        status: error
        text:
          es: "[[L]] debe ser estrictamente positiva. Una distancia cero o negativa carece de sentido experimental."
          en: "[[L]] must be strictly positive. A zero or negative distance lacks experimental meaning."
      - id: L_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[L]] es mucho mayor que el ancho de la rendija [[a]] para asegurar la validez del régimen de Fraunhofer."
          en: "Verify that [[L]] is much larger than the slit width [[a]] to ensure the validity of the Fraunhofer regime."
    model_validity_rules:
      - id: L_validity_near_field
        when: "L < 100 * a"
        status: warning
        text:
          es: "La distancia a la pantalla [[L]] es relativamente pequeña en relación al ancho de la rendija. Se entra en la zona de difracción de campo cercano (difracción de Fresnel), donde la fórmula de Fraunhofer lineal comete errores significativos."
          en: "The distance to the screen [[L]] is relatively small in relation to the slit width. One enters the near-field diffraction region (Fresnel diffraction), where the linear Fraunhofer formula commits significant errors."
      - id: L_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo lineal es excelente cuando [[L]] supera con creces el límite paraxial respecto al ancho de la rendija."
          en: "The linear model is excellent when [[L]] far exceeds the paraxial limit relative to the slit width."
    graph_rules:
      - id: L_graph_default
        when: "true"
        status: ok
        text:
          es: "En una gráfica de [[w]] frente a [[L]], la pendiente de la recta es exactamente 2 * [[lambda]] / [[a]]. Aumentar la distancia aleja los puntos sobre la recta de calibración."
          en: "In a plot of [[w]] against [[L]], the slope of the line is exactly 2 * [[lambda]] / [[a]]. Increasing the distance moves the points further along the calibration line."
    likely_errors:
      - id: L_error_confuse_y
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir la distancia longitudinal [[L]] con la ordenada vertical de desviación sobre la pantalla."
          en: "Frequent error: confusing the longitudinal distance [[L]] with the vertical deviation coordinate on the screen."
    next_step_rules:
      - id: L_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[L]] calibrada, medir directamente el ancho visual [[w]] de la franja luminosa central para deducir el ancho real de la micro-rendija."
          en: "With [[L]] calibrated, measure directly the visual width [[w]] of the central bright band to deduce the real width of the micro-slit."

cross_checks:
  - check: "w == 2 * lambda * L / a"
    message:
      es: "Verificar que el ancho del máximo central [[w]] coincide exactamente con 2 * [[lambda]] * [[L]] / [[a]]."
      en: "Verify that the width of the central maximum [[w]] matches exactly 2 * [[lambda]] * [[L]] / [[a]]."

error_patterns:
  - id: error_radianes_grados
    description:
      es: "Introducir o interpretar el ángulo en grados sexagesimales en lugar de radianes."
      en: "Entering or interpreting the angle in degrees instead of radians."
  - id: confusion_semi_ancho
    description:
      es: "Usar la distancia del centro al primer mínimo en lugar del ancho completo del máximo central."
      en: "Using the distance from the center to the first minimum instead of the full width of the central maximum."
  - id: escala_nanometros
    description:
      es: "No convertir la longitud de onda de nanómetros a metros al operar en unidades del SI."
      en: "Failing to convert the wavelength from nanometers to meters when operating in SI units."

graph_binding:
  preferred_graph_type: Coord
  target_variable: w
  control_variable: a

mini_graph:
  enabled: true
  preferred_type: Coord

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
`;export{e as default};
