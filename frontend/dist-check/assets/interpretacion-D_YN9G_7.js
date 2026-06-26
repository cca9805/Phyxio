const e=`version: "v5_blindado"
id: interpretacion_armonicos
leaf_id: armonicos
nombre:
  es: Interpretación de armónicos
  en: Harmonics interpretation
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-cuerdas
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/armonicos

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    calculator_button:
      es: Calcular
      en: Calculate
    interpretation_tab:
      es: Interpretación
      en: Interpretation
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
    - frecuencia_armonica
    - frecuencia_fundamental
    - longitud_onda_armonica
    - relacion_frecuencias
  magnitudes:
    - n
    - L
    - v
    - lambda_n
    - f_n
    - f_1

global_context:
  physical_domain:
    es: Ondas estacionarias transversales en cuerdas con extremos fijos
    en: Transverse standing waves on strings with fixed ends
  axis_convention:
    es: Eje x a lo largo de la cuerda, desplazamiento y perpendicular
    en: x-axis along the string, displacement y perpendicular
  standard_assumptions:
    - Cuerda homogénea y perfectamente flexible
    - Extremos rígidamente fijos (nodos perfectos)
    - Amplitud de oscilación pequeña (regimen lineal)
    - Sin amortiguamiento ni efectos termicos
  standard_warnings:
    - Las cuerdas reales tienen rigidez propia que altera ligeramente las frecuencias
    - El puente de los instrumentos no es un nodo perfecto

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
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
      es: Lectura gráfica
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
  f_n:
    magnitude_type: derived
    semantic_role:
      es: Frecuencia del modo de vibración n-ésimo
      en: Frequency of the n-th vibration mode
    summary_rules:
      - id: fn_summary_high
        when: "f_n > 1000"
        status: ok
        text:
          es: "[[f_n]] supera el kilohercio, indicando un tono agudo audible claramente."
          en: "[[f_n]] exceeds one kilohertz, indicating a clearly audible high pitch."
      - id: fn_summary_bass
        when: "f_n < 100"
        status: ok
        text:
          es: "[[f_n]] indica un tono grave profundo, próximo al límite inferior del oído."
          en: "[[f_n]] indicates a deep bass tone, near the lower limit of hearing."
      - id: fn_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_n]] describe la frecuencia de oscilación del armónico seleccionado, determinante para el timbre percibido."
          en: "[[f_n]] describes the oscillation frequency of the selected harmonic, determinant for the perceived timbre."
    physical_reading_rules:
      - id: fn_reading_context
        when: "true"
        status: ok
        text:
          es: "El valor resultante significa que la cuerda completa [[n]] ciclos de oscilación cada segundo. Si [[n]] es 1, esta es la nota fundamental que identificamos melódicamente."
          en: "The resulting value means the string completes [[n]] oscillation cycles every second. If [[n]] is 1, this is the fundamental note we identify melodically."
    coherence_rules:
      - id: fn_coherence_n_multiple
        when: "f_n > 0 && n >= 1"
        status: ok
        text:
          es: "El resultado es físicamente coherente: la frecuencia es positiva y el armónico es al menos el primero."
          en: "The result is physically coherent: frequency is positive and the harmonic is at least the first."
      - id: fn_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia entre [[f_n]], [[n]] y [[f_1]] se verifica mediante la relación armónica fundamental."
          en: "Coherence between [[f_n]], [[n]] and [[f_1]] is verified through the fundamental harmonic relation."
    model_validity_rules:
      - id: fn_validity_linear
        when: "f_n < 5000"
        status: ok
        text:
          es: "Dentro del rango audible típico, el modelo de cuerda ideal se mantiene válido sin correcciones por rigidez."
          en: "Within the typical audible range, the ideal string model remains valid without stiffness corrections."
      - id: fn_validity_warning
        when: "f_n > 10000"
        status: warning
        text:
          es: "Frecuencias muy altas pueden requerir considerar la rigidez propia de la cuerda real, no incluida en este modelo."
          en: "Very high frequencies may require considering the actual stiffness of the real string, not included in this model."
      - id: fn_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de cuerda con extremos fijos predice correctamente las frecuencias discretas mientras la tensión sea uniforme."
          en: "The fixed-end string model correctly predicts discrete frequencies as long as tension is uniform."
    graph_rules:
      - id: fn_graph_pattern
        when: "true"
        status: ok
        text:
          es: "En el gráfico, [[f_n]] determina la rapidez con que oscila el patrón de onda. A mayor frecuencia, más rápida la vibración visual."
          en: "In the graph, [[f_n]] determines how fast the wave pattern oscillates. Higher frequency means faster visual vibration."
    likely_errors:
      - id: fn_error_n_confusion
        when: "n == 1"
        status: warning
        text:
          es: "Asegúrate de no confundir n (número de armónico) con el número de nodos, que es n+1."
          en: "Make sure not to confuse n (harmonic number) with the number of nodes, which is n+1."
      - id: fn_error_continuous
        when: "true"
        status: warning
        text:
          es: "Error típico: esperar que la cuerda pueda vibrar a cualquier frecuencia. Las condiciones de contorno fijas imponen solo ciertos valores discretos."
          en: "Typical error: expecting the string to vibrate at any frequency. Fixed boundary conditions impose only certain discrete values."
    next_step_rules:
      - id: fn_next_harmonic
        when: "n < 5"
        status: ok
        text:
          es: "Calcula el siguiente armónico incrementando [[n]] en una unidad y observa cómo cambia el patrón espacial."
          en: "Calculate the next harmonic by increasing [[n]] by one unit and observe how the spatial pattern changes."
      - id: fn_next_wavelength
        when: "true"
        status: ok
        text:
          es: "Relaciona [[f_n]] con [[lambda_n]] usando la velocidad [[v]] para comprender el vínculo temporal-espacial de la onda."
          en: "Relate [[f_n]] to [[lambda_n]] using velocity [[v]] to understand the wave's temporal-spatial link."

  f_1:
    magnitude_type: derived
    semantic_role:
      es: Frecuencia fundamental o primer armónico
      en: Fundamental frequency or first harmonic
    summary_rules:
      - id: f1_summary_note
        when: "f_1 >= 440 && f_1 <= 445"
        status: ok
        text:
          es: "[[f_1]] indica una frecuencia cercana al La de referencia (440 Hz), nota de afinación estándar."
          en: "[[f_1]] indicates a frequency near the reference A (440 Hz), standard tuning note."
      - id: f1_summary_bass
        when: "f_1 < 100"
        status: ok
        text:
          es: "[[f_1]] describe un tono muy grave, típico de instrumentos de registro bajo como el contrabajo."
          en: "[[f_1]] describes a very low tone, typical of low-register instruments such as the double bass."
      - id: f1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_1]] resume la altura tonal básica del instrumento, sobre la que se construyen todos los demás armónicos."
          en: "[[f_1]] summarizes the basic pitch of the instrument, upon which all other harmonics are built."
    physical_reading_rules:
      - id: f1_reading_perception
        when: "true"
        status: ok
        text:
          es: "Este valor representa la frecuencia más baja que la cuerda puede emitir. El oído la identifica como la nota melódica principal, independientemente de los armónicos superpuestos."
          en: "This value represents the lowest frequency the string can emit. The ear identifies it as the main melodic note, regardless of superimposed harmonics."
    coherence_rules:
      - id: f1_coherence_positive
        when: "f_1 > 0"
        status: ok
        text:
          es: "Resultado coherente: la frecuencia fundamental es positiva como debe ser."
          en: "Coherent result: fundamental frequency is positive as it should be."
      - id: f1_coherence_range
        when: "f_1 >= 20 && f_1 <= 20000"
        status: ok
        text:
          es: "El valor cae dentro del rango audible humano, permitiendo su percepción directa."
          en: "The value falls within the human audible range, allowing direct perception."
    model_validity_rules:
      - id: f1_validity_ideality
        when: "true"
        status: ok
        text:
          es: "El modelo supone cuerda perfectamente flexible; en cuerdas reales de gran grosor, la frecuencia real puede desviarse ligeramente hacia valores superiores por efecto de la rigidez."
          en: "The model assumes a perfectly flexible string; in real thick strings, the actual frequency may deviate slightly upward due to stiffness effects."
    graph_rules:
      - id: f1_graph_single
        when: "true"
        status: ok
        text:
          es: "Visualmente, la fundamental corresponde al patrón con un único vientre central y máxima amplitud en el centro de la cuerda."
          en: "Visually, the fundamental corresponds to the pattern with a single central antinode and maximum amplitude at the string's center."
    likely_errors:
      - id: f1_error_loudest
        when: "true"
        status: warning
        text:
          es: "Error común: identificar el armónico más intenso (más audible) como la fundamental. La fundamental es el armónico de menor frecuencia, no necesariamente el más fuerte."
          en: "Common error: identifying the most intense (most audible) harmonic as the fundamental. The fundamental is the lowest frequency harmonic, not necessarily the strongest."
    next_step_rules:
      - id: f1_next_overtones
        when: "true"
        status: ok
        text:
          es: "Calcula los primeros armónicos usando [[n]] igual a 2, 3 y 4 para ver la serie completa que acompaña a esta fundamental."
          en: "Calculate the first harmonics using [[n]] equal to 2, 3 and 4 to see the complete series accompanying this fundamental."

  lambda_n:
    magnitude_type: derived
    semantic_role:
      es: Longitud de onda del modo estacionario
      en: Wavelength of the standing mode
    summary_rules:
      - id: lambda_summary_large
        when: "lambda_n > L"
        status: ok
        text:
          es: "[[lambda_n]] excede la longitud física de la cuerda, indicando que hablamos del primer armónico o modo de bajo orden."
          en: "[[lambda_n]] exceeds the physical length of the string, indicating we are referring to the first harmonic or low-order mode."
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_n]] describe la periodicidad espacial del patrón de vibración, inversamente proporcional al número de armónico."
          en: "[[lambda_n]] describes the spatial periodicity of the vibration pattern, inversely proportional to the harmonic number."
    physical_reading_rules:
      - id: lambda_reading_pattern
        when: "true"
        status: ok
        text:
          es: "Este valor indica la distancia entre dos puntos consecutivos de la cuerda que vibran en fase. Divide [[L]] entre el número de medias ondas contenidas."
          en: "This value indicates the distance between two consecutive points on the string vibrating in phase. Divide [[L]] by the number of half-waves contained."
    coherence_rules:
      - id: lambda_coherence_bounds
        when: "lambda_n <= 2 * L"
        status: ok
        text:
          es: "Coherencia verificada: la longitud de onda no excede el doble de la cuerda, límite físico impuesto por las condiciones de contorno."
          en: "Coherence verified: wavelength does not exceed twice the string length, physical limit imposed by boundary conditions."
    model_validity_rules:
      - id: lambda_validity_continuum
        when: "lambda_n > 0.001"
        status: ok
        text:
          es: "Para longitudes de onda mucho mayores que la escala molecular, el modelo de cuerda continua es válido."
          en: "For wavelengths much larger than molecular scale, the continuous string model is valid."
    graph_rules:
      - id: lambda_graph_visual
        when: "true"
        status: ok
        text:
          es: "En la representación, [[lambda_n]] determina la escala espacial del patrón. A mayor armónico, más ciclos completos se observan en la misma longitud."
          en: "In the representation, [[lambda_n]] determines the spatial scale of the pattern. Higher harmonics show more complete cycles within the same length."
    likely_errors:
      - id: lambda_error_halves
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar que la cuerda contiene n medias longitudes de onda, no n longitudes completas."
          en: "Frequent error: forgetting that the string contains n half-wavelengths, not n complete wavelengths."
    next_step_rules:
      - id: lambda_next_nodes
        when: "true"
        status: ok
        text:
          es: "Usa [[lambda_n]] para calcular la posición exacta de los nodos, ubicados a múltiplos enteros de media longitud de onda desde los extremos."
          en: "Use [[lambda_n]] to calculate the exact position of nodes, located at integer multiples of half-wavelength from the ends."

  L:
    magnitude_type: state
    semantic_role:
      es: Longitud de la cuerda vibrante
      en: Vibrating string length
    summary_rules:
      - id: L_summary_default
        when: "true"
        status: ok
        text:
          es: "[[L]] define la escala espacial del sistema y determina junto con [[v]] las frecuencias posibles."
          en: "[[L]] defines the spatial scale of the system and determines together with [[v]] the possible frequencies."
    physical_reading_rules:
      - id: L_reading_default
        when: "true"
        status: ok
        text:
          es: "Este valor representa la distancia efectiva entre puntos de fijación de la cuerda."
          en: "This value represents the effective distance between the string's fixation points."
    coherence_rules:
      - id: L_coherence_positive
        when: "L > 0"
        status: ok
        text:
          es: "La longitud es positiva, coherente con un sistema físico real."
          en: "Length is positive, coherent with a real physical system."
    model_validity_rules:
      - id: L_validity_range
        when: "L > 0.01 && L < 100"
        status: ok
        text:
          es: "La longitud está en rango razonable para instrumentos musicales."
          en: "Length is in reasonable range for musical instruments."
    graph_rules:
      - id: L_graph_default
        when: "true"
        status: ok
        text:
          es: "[[L]] define el dominio espacial del eje horizontal en el gráfico."
          en: "[[L]] defines the spatial domain of the horizontal axis in the graph."
    likely_errors:
      - id: L_error_units
        when: "true"
        status: warning
        text:
          es: "Error común: confundir centímetros con metros al introducir [[L]]."
          en: "Common error: confusing centimeters with meters when entering [[L]]."
    next_step_rules:
      - id: L_next_velocity
        when: "true"
        status: ok
        text:
          es: "Combina [[L]] con [[v]] para determinar la frecuencia fundamental del sistema."
          en: "Combine [[L]] with [[v]] to determine the fundamental frequency of the system."

  v:
    magnitude_type: derived
    semantic_role:
      es: Velocidad de propagación de ondas transversales
      en: Transverse wave propagation velocity
    summary_rules:
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v]] depende de la tensión y densidad lineal, determinando la escala temporal de vibración."
          en: "[[v]] depends on tension and linear density, determining the temporal scale of vibration."
    physical_reading_rules:
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "Este valor indica qué tan rápido viaja la perturbación a lo largo de la cuerda."
          en: "This value indicates how fast the disturbance travels along the string."
    coherence_rules:
      - id: v_coherence_positive
        when: "v > 0"
        status: ok
        text:
          es: "La velocidad es positiva, consistente con propagación física."
          en: "Velocity is positive, consistent with physical propagation."
    model_validity_rules:
      - id: v_validity_range
        when: "v > 10 && v < 1000"
        status: ok
        text:
          es: "La velocidad está en rango típico para cuerdas musicales."
          en: "Velocity is in typical range for musical strings."
    graph_rules:
      - id: v_graph_default
        when: "true"
        status: ok
        text:
          es: "[[v]] determina la pendiente de las rectas características en el diagrama espacio-temporal."
          en: "[[v]] determines the slope of characteristic lines in the space-time diagram."
    likely_errors:
      - id: v_error_confusion
        when: "true"
        status: warning
        text:
          es: "Error común: confundir [[v]] con la velocidad transversal de oscilación de un punto."
          en: "Common error: confusing [[v]] with the transverse oscillation velocity of a point."
    next_step_rules:
      - id: v_next_check
        when: "true"
        status: ok
        text:
          es: "Verifica que [[v]] sea consistente con la tensión y densidad de la cuerda."
          en: "Verify that [[v]] is consistent with string tension and density."

  n:
    magnitude_type: parameter
    semantic_role:
      es: Número de armónico (entero positivo)
      en: Harmonic number (positive integer)
    summary_rules:
      - id: n_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n]] identifica el modo normal de vibración seleccionado."
          en: "[[n]] identifies the selected normal vibration mode."
    physical_reading_rules:
      - id: n_reading_default
        when: "true"
        status: ok
        text:
          es: "Este entero indica cuántas medias ondas contiene el patrón de vibración."
          en: "This integer indicates how many half-waves the vibration pattern contains."
    coherence_rules:
      - id: n_coherence_integer
        when: "n >= 1"
        status: ok
        text:
          es: "El número de armónico es un entero positivo, coherente con cuantización espacial."
          en: "Harmonic number is a positive integer, coherent with spatial quantization."
    model_validity_rules:
      - id: n_validity_range
        when: "n <= 20"
        status: ok
        text:
          es: "El armónico está en rango típico para análisis musical."
          en: "Harmonic is in typical range for musical analysis."
    graph_rules:
      - id: n_graph_default
        when: "true"
        status: ok
        text:
          es: "[[n]] determina el número de vientres visibles en el patrón de onda estacionaria."
          en: "[[n]] determines the number of antinodes visible in the standing wave pattern."
    likely_errors:
      - id: n_error_zero
        when: "true"
        status: warning
        text:
          es: "Error común: usar n=0, que no representa ningún modo físico."
          en: "Common error: using n=0, which represents no physical mode."
    next_step_rules:
      - id: n_next_harmonic
        when: "true"
        status: ok
        text:
          es: "Incrementa [[n]] para explorar armónicos superiores del mismo sistema."
          en: "Increment [[n]] to explore upper harmonics of the same system."

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
