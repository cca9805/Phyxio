const e=`version: "2.0"
id: interp-naturaleza-del-sonido
leaf_id: naturaleza-del-sonido

nombre:
  es: Interpretación — Naturaleza del sonido
  en: Interpretation — Nature of Sound

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: sonido
  parent_id: sonido
  ruta_relativa: fisica-clasica/ondas/sonido/naturaleza-del-sonido

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación acústica
    en: Acoustic interpretation
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
    sections: [summary, likely_errors, next_step]

dependencies:
  formulas:
    - onda_presion_armonica
    - intensidad_acustica
    - relacion_vel_freq_lambda
  magnitudes:
    - p_ac
    - xi
    - I_ac
    - f_son
    - lambda_son
    - v_son
    - p0_ac

global_context:
  physical_domain:
    es: "Propagación de ondas sonoras mecánicas longitudinales en medios materiales homogéneos en régimen lineal."
    en: "Propagation of longitudinal mechanical sound waves in homogeneous material media in the linear regime."
  axis_convention:
    es: "Eje x positivo en la dirección de propagación de la onda; presión positiva indica compresión."
    en: "Positive x-axis in the wave propagation direction; positive pressure indicates compression."
  standard_assumptions:
    - "Onda plana armónica (frente plano)"
    - "Medio homogéneo, isótropo y no absorbente"
    - "Régimen lineal (amplitudes pequeñas)"
    - "Temperatura constante durante la propagación"
  standard_warnings:
    - "La intensidad calculada corresponde al promedio temporal sobre un ciclo completo"
    - "Los valores de p0_ac superiores a 20 Pa pueden causar daño auditivo"
    - "La velocidad de propagación varía con la temperatura del medio"

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
      es: Lectura del gráfico
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

  p_ac:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Presión acústica instantánea en un punto del medio; indica el estado de compresión o rarefacción local."
      en: "Instantaneous acoustic pressure at a point in the medium; indicates the local compression or rarefaction state."
    summary_rules:
      - id: p_ac_summary_positive
        when: "p_ac > 0"
        status: ok
        text:
          es: "[[p_ac]] positiva indica compresión local: el medio está más denso que en equilibrio. La presión acústica resume el estado instantáneo de la onda en ese punto."
          en: "Positive [[p_ac]] indicates local compression: the medium is denser than at equilibrium. Acoustic pressure summarises the instantaneous state of the wave at that point."
      - id: p_ac_summary_negative
        when: "p_ac < 0"
        status: ok
        text:
          es: "[[p_ac]] negativa indica rarefacción local: el medio está menos denso que en equilibrio. La presión acústica describe el estado de expansión de la onda."
          en: "Negative [[p_ac]] indicates local rarefaction: the medium is less dense than at equilibrium. Acoustic pressure describes the expansion state of the wave."
      - id: p_ac_summary_zero
        when: "p_ac == 0"
        status: ok
        text:
          es: "[[p_ac]] nula indica que en ese instante el punto evaluado está en equilibrio, aunque la onda siga propagándose. El desplazamiento de partícula es máximo en este punto."
          en: "Zero [[p_ac]] indicates that at that instant the evaluated point is at equilibrium, even though the wave continues to propagate. Particle displacement is maximum at this point."
      - id: p_ac_summary_default
        when: "true"
        status: ok
        text:
          es: "[[p_ac]] resume el estado de presión local de la onda sonora. Su signo indica compresión (positivo) o rarefacción (negativo) y su módulo indica la intensidad de la perturbación."
          en: "[[p_ac]] summarises the local pressure state of the sound wave. Its sign indicates compression (positive) or rarefaction (negative) and its magnitude indicates the strength of the perturbation."
    physical_reading_rules:
      - id: p_ac_reading_audible
        when: "abs(p_ac) >= 20e-6 && abs(p_ac) <= 20"
        status: ok
        text:
          es: "[[p_ac]] está dentro del rango audible humano. La variación de presión es perceptible por el oído, que responde a fluctuaciones de presión en torno a 20 µPa como mínimo."
          en: "[[p_ac]] is within the human audible range. The pressure variation is perceptible by the ear, which responds to pressure fluctuations of at least 20 µPa."
      - id: p_ac_reading_pain
        when: "abs(p_ac) > 20"
        status: warning
        text:
          es: "[[p_ac]] supera el umbral de dolor. Una presión acústica de este nivel puede causar daño auditivo inmediato y sensación dolorosa."
          en: "[[p_ac]] exceeds the pain threshold. An acoustic pressure at this level can cause immediate hearing damage and a painful sensation."
      - id: p_ac_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[p_ac]] depende de comparar su módulo con los umbrales de referencia: 20 µPa (audición) y 20 Pa (dolor)."
          en: "The physical reading of [[p_ac]] depends on comparing its magnitude with reference thresholds: 20 µPa (hearing) and 20 Pa (pain)."
    coherence_rules:
      - id: p_ac_coherence_amplitude
        when: "abs(p_ac) <= p0_ac"
        status: ok
        text:
          es: "El módulo de [[p_ac]] no supera la amplitud [[p0_ac]], lo que es físicamente coherente para una onda armónica."
          en: "The magnitude of [[p_ac]] does not exceed the amplitude [[p0_ac]], which is physically coherent for a harmonic wave."
      - id: p_ac_coherence_overflow
        when: "abs(p_ac) > p0_ac"
        status: error
        text:
          es: "El módulo de [[p_ac]] supera a [[p0_ac]]. En una onda armónica esto es imposible; revisar los datos de entrada."
          en: "The magnitude of [[p_ac]] exceeds [[p0_ac]]. In a harmonic wave this is impossible; check the input data."
      - id: p_ac_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia de [[p_ac]] se verifica comparando su módulo con la amplitud [[p0_ac]]; debe cumplirse siempre."
          en: "The coherence of [[p_ac]] is verified by comparing its magnitude with the amplitude [[p0_ac]]; this must always hold."
    model_validity_rules:
      - id: p_ac_validity_linear
        when: "abs(p_ac) < 1000"
        status: ok
        text:
          es: "[[p_ac]] está en el rango lineal del modelo acústico. Las hipótesis de onda plana armónica son válidas."
          en: "[[p_ac]] is in the linear range of the acoustic model. Plane harmonic wave assumptions are valid."
      - id: p_ac_validity_nonlinear
        when: "abs(p_ac) >= 1000"
        status: warning
        text:
          es: "[[p_ac]] es muy elevada. El modelo lineal de onda armónica puede no ser válido; pueden aparecer efectos no lineales como la generación de armónicos y ondas de choque."
          en: "[[p_ac]] is very high. The linear harmonic wave model may not be valid; non-linear effects such as harmonic generation and shock waves may appear."
      - id: p_ac_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de onda plana armónica es válido cuando la amplitud de presión es mucho menor que la presión estática del medio."
          en: "The plane harmonic wave model is valid when the pressure amplitude is much smaller than the static pressure of the medium."
    graph_rules:
      - id: p_ac_graph_positive_peak
        when: "p_ac > 0"
        status: ok
        text:
          es: "En la gráfica Coord, [[p_ac]] positiva corresponde al pico superior de la sinusoide (zona de compresión), representada en rojo en el gráfico Svg."
          en: "In the Coord graph, positive [[p_ac]] corresponds to the upper peak of the sinusoid (compression zone), shown in red in the Svg graph."
      - id: p_ac_graph_negative_peak
        when: "p_ac < 0"
        status: ok
        text:
          es: "En la gráfica Coord, [[p_ac]] negativa corresponde al valle de la sinusoide (zona de rarefacción), representada en azul en el gráfico Svg."
          en: "In the Coord graph, negative [[p_ac]] corresponds to the trough of the sinusoid (rarefaction zone), shown in blue in the Svg graph."
      - id: p_ac_graph_default
        when: "true"
        status: ok
        text:
          es: "La gráfica de presión frente a posición muestra la distribución espacial de compresiones y rarefacciones en la onda sonora."
          en: "The pressure vs position graph shows the spatial distribution of compressions and rarefactions in the sound wave."
    likely_errors:
      - id: p_ac_error_static
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[p_ac]] con la presión absoluta del medio. La presión acústica es solo la perturbación respecto al equilibrio, típicamente millones de veces menor que la presión atmosférica."
          en: "Frequent error: confusing [[p_ac]] with the absolute medium pressure. Acoustic pressure is only the perturbation from equilibrium, typically millions of times smaller than atmospheric pressure."
      - id: p_ac_error_displacement
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que donde [[p_ac]] es máxima, [[xi]] también lo es. En realidad están desfasados 90°: el máximo de presión coincide con el cruce por cero del desplazamiento."
          en: "Frequent error: believing that where [[p_ac]] is maximum, [[xi]] is also maximum. In reality they are 90° out of phase: the pressure maximum coincides with the zero crossing of displacement."
    next_step_rules:
      - id: p_ac_next_intensity
        when: "abs(p_ac) > 0"
        status: ok
        text:
          es: "Con [[p_ac]] calculada, el siguiente paso lógico es determinar la intensidad acústica [[I_ac]] usando la fórmula de intensidad de onda plana, que requiere también la densidad y la velocidad del medio."
          en: "With [[p_ac]] calculated, the next logical step is to determine the acoustic intensity [[I_ac]] using the plane wave intensity formula, which also requires the medium density and speed."
      - id: p_ac_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar cómo varía [[p_ac]] a lo largo de un ciclo completo y relacionar sus ceros con los máximos de [[xi]]."
          en: "Explore how [[p_ac]] varies over a complete cycle and relate its zeros to the maxima of [[xi]]."

  p0_ac:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Amplitud de la onda de presión; determina el 'volumen' del sonido y la energía transportada."
      en: "Pressure wave amplitude; determines the 'loudness' of sound and the energy transported."
    summary_rules:
      - id: p0_summary_threshold
        when: "p0_ac < 20e-6"
        status: warning
        text:
          es: "[[p0_ac]] está por debajo del umbral de audición humana. Este sonido no sería perceptible para el oído humano en condiciones normales; la amplitud de presión es demasiado pequeña."
          en: "[[p0_ac]] is below the human hearing threshold. This sound would not be perceptible to the human ear under normal conditions; the pressure amplitude is too small."
      - id: p0_summary_pain
        when: "p0_ac > 20"
        status: error
        text:
          es: "[[p0_ac]] supera el umbral de dolor (20 Pa). Una onda con esta amplitud indica un sonido muy intenso que puede causar daño auditivo inmediato. La amplitud resume la energía máxima de la perturbación."
          en: "[[p0_ac]] exceeds the pain threshold (20 Pa). A wave with this amplitude indicates a very intense sound that can cause immediate hearing damage. The amplitude summarises the maximum perturbation energy."
      - id: p0_summary_audible
        when: "p0_ac >= 20e-6 && p0_ac <= 20"
        status: ok
        text:
          es: "[[p0_ac]] está en el rango audible. Resume la máxima variación de presión que produce la onda; depende de la fuente y determina la intensidad acústica."
          en: "[[p0_ac]] is in the audible range. It summarises the maximum pressure variation produced by the wave; it depends on the source and determines the acoustic intensity."
      - id: p0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[p0_ac]] resume la intensidad máxima de la perturbación de presión. Su valor determina si el sonido es audible, molesto o dañino, y es la magnitud de entrada directa de la fórmula de intensidad acústica."
          en: "[[p0_ac]] summarises the maximum strength of the pressure perturbation. Its value determines whether sound is audible, annoying, or harmful, and is the direct input quantity of the acoustic intensity formula."
    physical_reading_rules:
      - id: p0_reading_rms
        when: "true"
        status: ok
        text:
          es: "[[p0_ac]] es el valor de pico; para una sinusoide, el valor eficaz (RMS) es [[p0_ac]] dividido entre la raíz de dos. La intensidad acústica promedio depende del cuadrado del valor RMS, equivalente a [[p0_ac]] al cuadrado dividido entre dos."
          en: "[[p0_ac]] is the peak value; for a sinusoid, the RMS value is [[p0_ac]] divided by the square root of two. The average acoustic intensity depends on the square of the RMS value, equivalent to [[p0_ac]] squared divided by two."
      - id: p0_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[p0_ac]] es directa: un valor doble de amplitud produce cuatro veces más intensidad, lo que explica la escala logarítmica de los decibelios."
          en: "The physical reading of [[p0_ac]] is direct: a doubled amplitude produces four times the intensity, which explains the logarithmic decibel scale."
    coherence_rules:
      - id: p0_coherence_positive
        when: "p0_ac > 0"
        status: ok
        text:
          es: "[[p0_ac]] es positiva, lo que es físicamente correcto para una amplitud."
          en: "[[p0_ac]] is positive, which is physically correct for an amplitude."
      - id: p0_coherence_zero
        when: "p0_ac <= 0"
        status: error
        text:
          es: "[[p0_ac]] no puede ser cero ni negativa. La amplitud es siempre un valor positivo por definición."
          en: "[[p0_ac]] cannot be zero or negative. Amplitude is always a positive value by definition."
      - id: p0_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[p0_ac]] debe ser positiva y no exceder valores que indiquen régimen no lineal para el modelo de onda plana armónica."
          en: "[[p0_ac]] must be positive and not exceed values that indicate a non-linear regime for the plane harmonic wave model."
    model_validity_rules:
      - id: p0_validity_linear
        when: "p0_ac < 100"
        status: ok
        text:
          es: "[[p0_ac]] es suficientemente pequeña respecto a la presión estática del aire (aprox. 101 kPa) para que el modelo lineal sea válido."
          en: "[[p0_ac]] is sufficiently small relative to the static air pressure (approx. 101 kPa) for the linear model to be valid."
      - id: p0_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de onda armónica plana es válido mientras [[p0_ac]] sea mucho menor que la presión estática del medio."
          en: "The plane harmonic wave model is valid as long as [[p0_ac]] is much smaller than the static pressure of the medium."
    graph_rules:
      - id: p0_graph_amplitude
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord, [[p0_ac]] define la amplitud de la sinusoide: los picos superiores alcanzan exactamente [[p0_ac]] y los valles alcanzan exactamente el negativo de [[p0_ac]]."
          en: "In the Coord graph, [[p0_ac]] defines the amplitude of the sinusoid: the upper peaks reach exactly [[p0_ac]] and the troughs reach exactly the negative of [[p0_ac]]."
    likely_errors:
      - id: p0_error_rms_confusion
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[p0_ac]] directamente en la fórmula de intensidad sin dividir entre dos. La fórmula correcta usa el cuadrado de [[p0_ac]] dividido entre dos, equivalente a usar el valor RMS al cuadrado."
          en: "Frequent error: using [[p0_ac]] directly in the intensity formula without dividing by two. The correct formula uses the square of [[p0_ac]] divided by two, equivalent to using the RMS value squared."
    next_step_rules:
      - id: p0_next_intensity
        when: "true"
        status: ok
        text:
          es: "Con [[p0_ac]] conocida, calcular la intensidad acústica [[I_ac]] para obtener la potencia por unidad de área transmitida por la onda."
          en: "With [[p0_ac]] known, calculate the acoustic intensity [[I_ac]] to obtain the power per unit area transmitted by the wave."

  I_ac:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Energía sonora por unidad de área y tiempo; cuantifica el 'flujo de potencia' de la onda y determina el riesgo auditivo."
      en: "Sound energy per unit area and time; quantifies the wave's 'power flux' and determines hearing risk."
    summary_rules:
      - id: I_summary_below_threshold
        when: "I_ac < 1e-12"
        status: warning
        text:
          es: "[[I_ac]] está por debajo del umbral de audición humana de 10⁻¹² W/m². Este sonido no sería perceptible; la intensidad acústica describe el flujo de energía que resulta insuficiente para excitar el oído."
          en: "[[I_ac]] is below the human hearing threshold of 10⁻¹² W/m². This sound would not be perceptible; the acoustic intensity describes an energy flux insufficient to excite the ear."
      - id: I_summary_audible
        when: "I_ac >= 1e-12 && I_ac < 1"
        status: ok
        text:
          es: "[[I_ac]] está en el rango audible. Resume la energía sonora por metro cuadrado de frente de onda; su valor determina el nivel de intensidad en decibelios y la sensación de volumen."
          en: "[[I_ac]] is in the audible range. It summarises the sound energy per square metre of wavefront; its value determines the intensity level in decibels and the loudness sensation."
      - id: I_summary_pain
        when: "I_ac >= 1"
        status: error
        text:
          es: "[[I_ac]] supera 1 W/m², lo que corresponde al umbral de dolor. Una exposición prolongada a esta intensidad acústica resulta dañina para el sistema auditivo."
          en: "[[I_ac]] exceeds 1 W/m², corresponding to the pain threshold. Prolonged exposure to this acoustic intensity is harmful to the auditory system."
      - id: I_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I_ac]] resume la potencia sonora por unidad de área. Depende del cuadrado de [[p0_ac]], lo que indica que duplicar la amplitud de presión cuadruplica la intensidad."
          en: "[[I_ac]] summarises the sound power per unit area. It depends on the square of [[p0_ac]], indicating that doubling the pressure amplitude quadruples the intensity."
    physical_reading_rules:
      - id: I_reading_quadratic
        when: "true"
        status: ok
        text:
          es: "[[I_ac]] crece como el cuadrado de [[p0_ac]]. Esto significa que multiplicar la amplitud de presión por diez aumenta la intensidad en un factor de cien, equivalente a 20 dB. La relación cuadrática explica por qué el oído necesita una escala logarítmica."
          en: "[[I_ac]] grows as the square of [[p0_ac]]. This means multiplying the pressure amplitude by ten increases intensity by a factor of one hundred, equivalent to 20 dB. The quadratic relationship explains why the ear needs a logarithmic scale."
      - id: I_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[I_ac]] es el flujo de energía por metro cuadrado de frente de onda; cuanto mayor, más energía deposita la onda por segundo sobre cada superficie del receptor."
          en: "The physical reading of [[I_ac]] is the energy flux per square metre of wavefront; the higher it is, the more energy the wave deposits per second on each surface of the receiver."
    coherence_rules:
      - id: I_coherence_positive
        when: "I_ac > 0"
        status: ok
        text:
          es: "[[I_ac]] es positiva, coherente con una onda que transporta energía en la dirección de propagación."
          en: "[[I_ac]] is positive, coherent with a wave transporting energy in the propagation direction."
      - id: I_coherence_zero
        when: "I_ac <= 0"
        status: error
        text:
          es: "[[I_ac]] no puede ser cero o negativa para una onda progresiva. Un valor nulo o negativo indica un error de cálculo o ausencia de onda."
          en: "[[I_ac]] cannot be zero or negative for a progressive wave. A zero or negative value indicates a calculation error or absence of wave."
      - id: I_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[I_ac]] debe ser positiva y su relación con [[p0_ac]] debe ser cuadrática, verificable calculando [[p0_ac]] cuadrada dividida entre dos veces el producto de densidad y velocidad."
          en: "[[I_ac]] must be positive and its relation to [[p0_ac]] must be quadratic, verifiable by calculating [[p0_ac]] squared divided by two times the product of density and speed."
    model_validity_rules:
      - id: I_validity_plane_wave
        when: "I_ac < 10"
        status: ok
        text:
          es: "[[I_ac]] es compatible con el modelo de onda plana armónica en régimen lineal. La fórmula de intensidad es válida."
          en: "[[I_ac]] is compatible with the plane harmonic wave model in the linear regime. The intensity formula is valid."
      - id: I_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de onda plana es una aproximación: la intensidad real decae con la distancia para fuentes no planas. Para fuentes puntuales, [[I_ac]] disminuye con el cuadrado de la distancia."
          en: "The plane wave model is an approximation: real intensity decays with distance for non-planar sources. For point sources, [[I_ac]] decreases with the square of distance."
    graph_rules:
      - id: I_graph_result
        when: "true"
        status: ok
        text:
          es: "[[I_ac]] no tiene una representación directa en la gráfica de presión frente a posición, pero puede interpretarse como el área bajo la curva cuadrática de presión, proporcional al cuadrado de la amplitud de la sinusoide."
          en: "[[I_ac]] does not have a direct representation in the pressure vs position graph, but can be interpreted as the area under the quadratic pressure curve, proportional to the square of the sinusoid amplitude."
    likely_errors:
      - id: I_error_linear
        when: "true"
        status: warning
        text:
          es: "Error frecuente: calcular [[I_ac]] como directamente proporcional a [[p0_ac]] en lugar de a su cuadrado. Esto subestima gravemente la intensidad cuando la amplitud es grande."
          en: "Frequent error: calculating [[I_ac]] as directly proportional to [[p0_ac]] instead of its square. This severely underestimates intensity when amplitude is large."
      - id: I_error_medium
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar los valores de densidad o velocidad del agua cuando el problema ocurre en aire, o viceversa. La densidad del agua es unas 800 veces mayor que la del aire, lo que produce intensidades erróneas."
          en: "Frequent error: using the density or speed values of water when the problem occurs in air, or vice versa. Water density is about 800 times greater than air density, producing incorrect intensities."
    next_step_rules:
      - id: I_next_dB
        when: "I_ac > 0"
        status: ok
        text:
          es: "Con [[I_ac]] calculada, el siguiente paso es determinar el nivel de intensidad sonora en decibelios, que es el logaritmo en base diez de [[I_ac]] dividida entre 10⁻¹² W/m², multiplicado por diez."
          en: "With [[I_ac]] calculated, the next step is to determine the sound intensity level in decibels, which is ten times the base-ten logarithm of [[I_ac]] divided by 10⁻¹² W/m²."
      - id: I_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar cómo varía [[I_ac]] con la distancia a la fuente para una fuente puntual, aplicando la ley del inverso del cuadrado."
          en: "Explore how [[I_ac]] varies with distance from the source for a point source, applying the inverse square law."

  f_son:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Frecuencia de la onda sonora; fija el tono percibido y es invariante al cambiar de medio."
      en: "Frequency of the sound wave; fixes the perceived pitch and is invariant when changing medium."
    summary_rules:
      - id: f_son_summary_infra
        when: "f_son < 20"
        status: warning
        text:
          es: "[[f_son]] está en el rango de infrasonidos. Este sonido no es audible para el oído humano pero puede percibirse como vibración y tiene aplicaciones en sismología y comunicación animal."
          en: "[[f_son]] is in the infrasound range. This sound is not audible to the human ear but can be felt as vibration and has applications in seismology and animal communication."
      - id: f_son_summary_audible
        when: "f_son >= 20 && f_son <= 20000"
        status: ok
        text:
          es: "[[f_son]] está en el rango audible humano. La frecuencia resume el tono del sonido: un valor más alto corresponde a un sonido más agudo. Esta magnitud depende exclusivamente de la fuente y no cambia al pasar de un medio a otro."
          en: "[[f_son]] is in the human audible range. Frequency summarises the pitch of sound: a higher value corresponds to a higher-pitched sound. This quantity depends exclusively on the source and does not change when passing from one medium to another."
      - id: f_son_summary_ultra
        when: "f_son > 20000"
        status: warning
        text:
          es: "[[f_son]] está en el rango de ultrasonidos. Inaudible para el oído humano, este rango de frecuencias describe aplicaciones en diagnóstico médico, limpieza industrial y comunicación entre murciélagos."
          en: "[[f_son]] is in the ultrasound range. Inaudible to the human ear, this frequency range describes applications in medical diagnosis, industrial cleaning, and bat communication."
      - id: f_son_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_son]] resume el tono del sonido. La frecuencia es la única magnitud ondulatoria que depende solo de la fuente y permanece invariante al cambiar el medio de propagación."
          en: "[[f_son]] summarises the pitch of the sound. Frequency is the only wave quantity that depends only on the source and remains invariant when changing the propagation medium."
    physical_reading_rules:
      - id: f_son_reading_pitch
        when: "f_son >= 20 && f_son <= 20000"
        status: ok
        text:
          es: "A 440 Hz la onda corresponde al la4 (A4) musical. A 20 Hz el sonido es el umbral grave y a 20 000 Hz el umbral agudo del oído humano."
          en: "At 440 Hz the wave corresponds to the musical A4. At 20 Hz the sound is at the low-frequency threshold and at 20 000 Hz at the high-frequency threshold of the human ear."
      - id: f_son_reading_default
        when: "true"
        status: ok
        text:
          es: "[[f_son]] es el número de oscilaciones completas de presión por segundo. Cuanto mayor es [[f_son]], más corta es la [[lambda_son]] en cualquier medio dado."
          en: "[[f_son]] is the number of complete pressure oscillations per second. The higher [[f_son]] is, the shorter [[lambda_son]] is in any given medium."
    coherence_rules:
      - id: f_son_coherence_positive
        when: "f_son > 0"
        status: ok
        text:
          es: "[[f_son]] es positiva, coherente con una frecuencia física que representa el número de ciclos por segundo."
          en: "[[f_son]] is positive, coherent with a physical frequency representing cycles per second."
      - id: f_son_coherence_zero
        when: "f_son <= 0"
        status: error
        text:
          es: "[[f_son]] no puede ser cero ni negativa. Una frecuencia cero o negativa no tiene sentido físico para una onda sonora."
          en: "[[f_son]] cannot be zero or negative. Zero or negative frequency has no physical meaning for a sound wave."
      - id: f_son_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia de [[f_son]] se verifica comprobando que [[v_son]] dividida entre [[lambda_son]] reproduce el valor declarado."
          en: "The coherence of [[f_son]] is verified by checking that [[v_son]] divided by [[lambda_son]] reproduces the declared value."
    model_validity_rules:
      - id: f_son_validity_wave
        when: "true"
        status: ok
        text:
          es: "El modelo de onda armónica es válido para frecuencias en las que la longitud de onda es mucho mayor que la distancia intermolecular del medio. Para el aire a temperatura ambiente esto se cumple hasta frecuencias del orden de gigahercios."
          en: "The harmonic wave model is valid for frequencies where the wavelength is much greater than the intermolecular spacing of the medium. For air at room temperature this holds up to frequencies of the order of gigahertz."
      - id: f_son_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de onda plana se aplica bien para todas las frecuencias audibles y ultrasonoras habituales en laboratorio."
          en: "The plane wave model applies well for all audible and typical laboratory ultrasonic frequencies."
    graph_rules:
      - id: f_son_graph_period
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord de presión frente a tiempo, [[f_son]] es el inverso del periodo visible: cuanto mayor es [[f_son]], más ciclos aparecen en el mismo intervalo de tiempo."
          en: "In the Coord graph of pressure vs time, [[f_son]] is the inverse of the visible period: the higher [[f_son]], the more cycles appear in the same time interval."
    likely_errors:
      - id: f_son_error_omega
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[f_son]] en Hz con la frecuencia angular en rad/s. La frecuencia angular es 2π multiplicado por [[f_son]]. Usar la frecuencia ordinaria donde la fórmula exige la angular produce un error de un factor 2π en [[lambda_son]]."
          en: "Frequent error: confusing [[f_son]] in Hz with angular frequency in rad/s. Angular frequency is 2π times [[f_son]]. Using ordinary frequency where the formula requires angular frequency produces an error by a factor of 2π in [[lambda_son]]."
    next_step_rules:
      - id: f_son_next_lambda
        when: "f_son > 0"
        status: ok
        text:
          es: "Con [[f_son]] conocida y la velocidad del medio, calcular [[lambda_son]] para determinar si la onda puede difractarse alrededor de obstáculos del tamaño dado."
          en: "With [[f_son]] known and the medium speed, calculate [[lambda_son]] to determine whether the wave can diffract around obstacles of a given size."
      - id: f_son_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[f_son]] con los rangos de infrasonido, audible y ultrasonido para clasificar el tipo de sonido y sus aplicaciones."
          en: "Compare [[f_son]] with the infrasound, audible, and ultrasound ranges to classify the type of sound and its applications."

  lambda_son:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Distancia espacial entre dos compresiones consecutivas; determina la capacidad de difracción del sonido."
      en: "Spatial distance between two consecutive compressions; determines the sound's ability to diffract."
    summary_rules:
      - id: lambda_summary_audible
        when: "lambda_son >= 0.017 && lambda_son <= 17"
        status: ok
        text:
          es: "[[lambda_son]] está en el rango del sonido audible en aire (17 mm a 17 m). Resume la distancia entre dos zonas de compresión consecutivas y depende tanto de la frecuencia de la fuente como de la velocidad del medio."
          en: "[[lambda_son]] is in the audible sound range in air (17 mm to 17 m). It summarises the distance between two consecutive compression zones and depends on both the source frequency and the medium speed."
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_son]] resume la extensión espacial de un ciclo completo de la onda. Aumenta si [[v_son]] aumenta o si [[f_son]] disminuye; decrece en caso contrario."
          en: "[[lambda_son]] summarises the spatial extent of one complete wave cycle. It increases if [[v_son]] increases or if [[f_son]] decreases; it decreases otherwise."
    physical_reading_rules:
      - id: lambda_reading_diffraction
        when: "lambda_son > 0.1"
        status: ok
        text:
          es: "[[lambda_son]] es comparable o mayor que el tamaño de objetos cotidianos, lo que explica por qué el sonido se difracta fácilmente alrededor de esquinas y obstáculos."
          en: "[[lambda_son]] is comparable to or larger than everyday objects, which explains why sound diffracts easily around corners and obstacles."
      - id: lambda_reading_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_son]] conecta la [[f_son]] con la [[v_son]] del medio: en un medio más rígido (mayor velocidad), la misma frecuencia produce una longitud de onda mayor."
          en: "[[lambda_son]] connects [[f_son]] with the medium's [[v_son]]: in a stiffer medium (higher speed), the same frequency produces a longer wavelength."
    coherence_rules:
      - id: lambda_coherence_positive
        when: "lambda_son > 0"
        status: ok
        text:
          es: "[[lambda_son]] es positiva, coherente con una magnitud espacial que representa una distancia."
          en: "[[lambda_son]] is positive, coherent with a spatial quantity representing a distance."
      - id: lambda_coherence_check
        when: "lambda_son <= 0"
        status: error
        text:
          es: "[[lambda_son]] no puede ser cero ni negativa para una onda progresiva. Revisar los datos de [[f_son]] y [[v_son]]."
          en: "[[lambda_son]] cannot be zero or negative for a progressive wave. Check [[f_son]] and [[v_son]] data."
      - id: lambda_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[lambda_son]] sea coherente con [[v_son]] dividida entre [[f_son]]."
          en: "Verify that [[lambda_son]] is coherent with [[v_son]] divided by [[f_son]]."
    model_validity_rules:
      - id: lambda_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de onda armónica es válido mientras [[lambda_son]] sea mucho mayor que las dimensiones moleculares del medio. Para el aire a temperatura ambiente, el modelo falla únicamente a frecuencias superiores a cientos de MHz."
          en: "The harmonic wave model is valid as long as [[lambda_son]] is much greater than the molecular dimensions of the medium. For air at room temperature, the model fails only at frequencies above hundreds of MHz."
    graph_rules:
      - id: lambda_graph_period
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord de presión frente a posición, [[lambda_son]] corresponde exactamente al periodo espacial de la sinusoide: la distancia entre dos crestas consecutivas."
          en: "In the Coord graph of pressure vs position, [[lambda_son]] corresponds exactly to the spatial period of the sinusoid: the distance between two consecutive crests."
    likely_errors:
      - id: lambda_error_medium
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar la misma [[lambda_son]] calculada en el aire para el sonido en el agua. Al cambiar de medio, [[v_son]] cambia y con ella [[lambda_son]], aunque [[f_son]] permanezca constante."
          en: "Frequent error: using the same [[lambda_son]] calculated in air for sound in water. When changing medium, [[v_son]] changes and with it [[lambda_son]], although [[f_son]] remains constant."
    next_step_rules:
      - id: lambda_next_diffraction
        when: "true"
        status: ok
        text:
          es: "Con [[lambda_son]] calculada, evaluar si el sonido puede difractarse alrededor de un obstáculo comparando [[lambda_son]] con las dimensiones físicas del mismo."
          en: "With [[lambda_son]] calculated, evaluate whether sound can diffract around an obstacle by comparing [[lambda_son]] with its physical dimensions."
      - id: lambda_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[lambda_son]] en distintos medios para la misma frecuencia y observar cómo la velocidad del medio determina la extensión espacial de la onda."
          en: "Calculate [[lambda_son]] in different media for the same frequency and observe how the medium speed determines the spatial extent of the wave."

  v_son:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de propagación del frente de onda; propiedad del medio, no de la fuente."
      en: "Wavefront propagation speed; a property of the medium, not the source."
    summary_rules:
      - id: v_son_summary_air
        when: "v_son >= 300 && v_son <= 380"
        status: ok
        text:
          es: "[[v_son]] está en el rango típico del aire (300-380 m/s). Resume la velocidad a la que la perturbación sonora se transmite de un punto al siguiente; depende de la temperatura y las propiedades elásticas del aire."
          en: "[[v_son]] is in the typical air range (300-380 m/s). It summarises the speed at which the sound perturbation transmits from one point to the next; it depends on temperature and the elastic properties of air."
      - id: v_son_summary_water
        when: "v_son >= 1400 && v_son <= 1600"
        status: ok
        text:
          es: "[[v_son]] corresponde al rango del agua. El sonido viaja más rápido en el agua porque el agua es menos compresible que el aire, lo que aumenta el módulo de compresión."
          en: "[[v_son]] corresponds to the water range. Sound travels faster in water because water is less compressible than air, which increases the bulk modulus."
      - id: v_son_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_son]] resume la rapidez con que se propaga la perturbación de presión en el medio. Depende de las propiedades del medio (módulo elástico y densidad) y no de la fuente ni de la amplitud."
          en: "[[v_son]] summarises the rate at which the pressure perturbation propagates through the medium. It depends on medium properties (elastic modulus and density) and not on the source or amplitude."
    physical_reading_rules:
      - id: v_son_reading_medium
        when: "true"
        status: ok
        text:
          es: "[[v_son]] identifica el medio de propagación: valores en torno a 343 m/s indican aire a 20 °C; valores en torno a 1480 m/s indican agua; valores superiores a 3000 m/s indican un sólido."
          en: "[[v_son]] identifies the propagation medium: values around 343 m/s indicate air at 20 °C; values around 1480 m/s indicate water; values above 3000 m/s indicate a solid."
      - id: v_son_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[v_son]] es que fija la longitud de onda a frecuencia constante; un sonido de la misma frecuencia tiene longitudes de onda distintas en medios distintos."
          en: "The physical reading of [[v_son]] is that it fixes the wavelength at constant frequency; a sound of the same frequency has different wavelengths in different media."
    coherence_rules:
      - id: v_son_coherence_positive
        when: "v_son > 0"
        status: ok
        text:
          es: "[[v_son]] es positiva, coherente con una velocidad de propagación de onda."
          en: "[[v_son]] is positive, coherent with a wave propagation speed."
      - id: v_son_coherence_zero
        when: "v_son <= 0"
        status: error
        text:
          es: "[[v_son]] no puede ser cero ni negativa. Una velocidad de propagación cero o negativa implica que no hay onda sonora."
          en: "[[v_son]] cannot be zero or negative. Zero or negative propagation speed implies no sound wave."
      - id: v_son_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[v_son]] sea coherente con el producto de [[f_son]] por [[lambda_son]]."
          en: "Verify that [[v_son]] is coherent with the product of [[f_son]] and [[lambda_son]]."
    model_validity_rules:
      - id: v_son_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de onda lineal requiere que [[v_son]] sea independiente de la amplitud. Si la amplitud es muy grande, la velocidad puede depender de la presión local y el modelo falla."
          en: "The linear wave model requires [[v_son]] to be independent of amplitude. If the amplitude is very large, speed may depend on local pressure and the model breaks down."
    graph_rules:
      - id: v_son_graph_slope
        when: "true"
        status: ok
        text:
          es: "En una gráfica de [[lambda_son]] frente al inverso de [[f_son]], [[v_son]] aparece como la pendiente de la recta lineal que pasa por el origen."
          en: "In a graph of [[lambda_son]] vs the inverse of [[f_son]], [[v_son]] appears as the slope of the straight line through the origin."
    likely_errors:
      - id: v_son_error_temperature
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar siempre 340 m/s para el aire sin tener en cuenta la temperatura. La velocidad en el aire varía aproximadamente 0.6 m/s por grado Celsius; a 0 °C es 331 m/s y a 40 °C es aproximadamente 355 m/s."
          en: "Frequent error: always using 340 m/s for air without accounting for temperature. Speed in air varies approximately 0.6 m/s per degree Celsius; at 0 °C it is 331 m/s and at 40 °C it is approximately 355 m/s."
    next_step_rules:
      - id: v_son_next_lambda
        when: "v_son > 0"
        status: ok
        text:
          es: "Con [[v_son]] del medio, calcular [[lambda_son]] para cualquier [[f_son]] de interés y evaluar las propiedades geométricas de la onda (difracción, reflexión)."
          en: "With the medium's [[v_son]], calculate [[lambda_son]] for any frequency [[f_son]] of interest and evaluate the geometric properties of the wave (diffraction, reflection)."
      - id: v_son_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[v_son]] en distintos medios para entender por qué el sonido llega antes cuando viaja a través de sólidos o líquidos en lugar de gases."
          en: "Compare [[v_son]] in different media to understand why sound arrives sooner when travelling through solids or liquids rather than gases."

  xi:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Desplazamiento de las partículas del medio respecto al equilibrio; complemento de la presión acústica con desfase de 90°."
      en: "Displacement of medium particles from equilibrium; complement to acoustic pressure with a 90° phase shift."
    summary_rules:
      - id: xi_summary_max
        when: "xi > 0"
        status: ok
        text:
          es: "[[xi]] positivo indica que las partículas están desplazadas en la dirección de propagación. En ese punto, [[p_ac]] es cero (el desfase de 90° indica que el máximo de desplazamiento coincide con el cero de presión)."
          en: "Positive [[xi]] indicates particles are displaced in the propagation direction. At that point, [[p_ac]] is zero (the 90° phase shift means the displacement maximum coincides with the pressure zero)."
      - id: xi_summary_default
        when: "true"
        status: ok
        text:
          es: "[[xi]] resume el estado de movimiento de las partículas del medio. Es complementario a [[p_ac]]: donde [[xi]] es máximo, [[p_ac]] es nula, y viceversa. Este desfase confirma la naturaleza longitudinal del sonido."
          en: "[[xi]] summarises the state of motion of medium particles. It is complementary to [[p_ac]]: where [[xi]] is maximum, [[p_ac]] is zero, and vice versa. This phase shift confirms the longitudinal nature of sound."
    physical_reading_rules:
      - id: xi_reading_phase
        when: "true"
        status: ok
        text:
          es: "[[xi]] y [[p_ac]] están desfasados 90°. El desplazamiento máximo corresponde a la transición entre compresión y rarefacción, donde la velocidad de las partículas es mínima pero su posición es máxima."
          en: "[[xi]] and [[p_ac]] are 90° out of phase. Maximum displacement corresponds to the transition between compression and rarefaction, where particle velocity is minimal but position is maximum."
      - id: xi_reading_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[xi]] a nivel del umbral de audición (20 µPa) en 1 kHz es del orden de picómetros, comparable al diámetro de un átomo. Esto ilustra la extraordinaria sensibilidad del oído."
          en: "The value of [[xi]] at the hearing threshold (20 µPa) at 1 kHz is of the order of picometres, comparable to an atomic diameter. This illustrates the extraordinary sensitivity of the ear."
    coherence_rules:
      - id: xi_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia de [[xi]] se verifica comprobando que su amplitud máxima sea coherente con [[p0_ac]] dividida entre el producto de la impedancia acústica del medio por la frecuencia angular."
          en: "The coherence of [[xi]] is verified by checking that its maximum amplitude is coherent with [[p0_ac]] divided by the product of the medium's acoustic impedance and the angular frequency."
    model_validity_rules:
      - id: xi_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido cuando [[xi]] es mucho menor que [[lambda_son]]. Para el sonido audible en condiciones cotidianas, esta condición se cumple con gran margen."
          en: "The model is valid when [[xi]] is much smaller than [[lambda_son]]. For audible sound under everyday conditions, this condition is satisfied with a large margin."
    graph_rules:
      - id: xi_graph_coord
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord, [[xi]] frente a posición muestra una sinusoide desplazada 90° respecto a la curva de [[p_ac]]. Los ceros de [[xi]] coinciden con las crestas y valles de [[p_ac]]."
          en: "In the Coord graph, [[xi]] vs position shows a sinusoid shifted 90° relative to the [[p_ac]] curve. The zeros of [[xi]] coincide with the crests and troughs of [[p_ac]]."
    likely_errors:
      - id: xi_error_direction
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que [[xi]] tiene una componente transversal al no comprender la naturaleza longitudinal del sonido. En una onda sonora, [[xi]] siempre es paralelo a la dirección de propagación."
          en: "Frequent error: believing [[xi]] has a transverse component by not understanding the longitudinal nature of sound. In a sound wave, [[xi]] is always parallel to the propagation direction."
    next_step_rules:
      - id: xi_next_pressure
        when: "true"
        status: ok
        text:
          es: "Relacionar [[xi]] con [[p_ac]] para visualizar simultáneamente el mapa de desplazamiento y el mapa de presión de la onda, lo que aclara la naturaleza longitudinal del sonido."
          en: "Relate [[xi]] to [[p_ac]] to simultaneously visualise the displacement map and the pressure map of the wave, which clarifies the longitudinal nature of sound."
      - id: xi_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar cómo el valor microscópico de [[xi]] a nivel del umbral de audición contrasta con el tamaño macroscópico de la onda, reforzando la comprensión de la sensibilidad auditiva."
          en: "Explore how the microscopic value of [[xi]] at the hearing threshold contrasts with the macroscopic size of the wave, reinforcing understanding of auditory sensitivity."

cross_checks:
  - id: cc_freq_lambda_speed
    check: "abs(f_son * lambda_son - v_son) / v_son < 0.01"
    message:
      es: "[[f_son]], [[lambda_son]] y [[v_son]] deben satisfacer la relación de dispersión con menos de 1 % de error."
      en: "[[f_son]], [[lambda_son]], and [[v_son]] must satisfy the dispersion relation with less than 1 % error."
  - id: cc_intensity_pressure
    check: "abs(I_ac - p0_ac * p0_ac / (2 * 1.21 * 343)) / I_ac < 0.05"
    message:
      es: "[[I_ac]] debe ser coherente con el cuadrado de [[p0_ac]] dividido entre el doble del producto de densidad y velocidad del aire."
      en: "[[I_ac]] must be coherent with the square of [[p0_ac]] divided by twice the product of air density and speed."

error_patterns:
  - id: ep_omega_vs_freq
    pattern: "lambda_son está multiplicada por 2*pi respecto al valor esperado"
    cause:
      es: "El alumno confundió la frecuencia ordinaria (Hz) con la frecuencia angular (rad/s)"
      en: "The student confused ordinary frequency (Hz) with angular frequency (rad/s)"
  - id: ep_pressure_rms
    pattern: "I_ac es el doble del valor esperado"
    cause:
      es: "El alumno usó p0_ac directamente en la fórmula de intensidad sin dividir entre dos"
      en: "The student used p0_ac directly in the intensity formula without dividing by two"

graph_binding:
  primary_graph: Coord
  secondary_graph: Svg
  description:
    es: "El gráfico Coord muestra la presión acústica frente a la posición, con la amplitud p0 y el periodo espacial lambda. El gráfico Svg ilustra las zonas de compresión (rojo) y rarefacción (azul) en el medio."
    en: "The Coord graph shows acoustic pressure vs position, with amplitude p0 and spatial period lambda. The Svg graph illustrates compression zones (red) and rarefaction zones (blue) in the medium."

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: "Mini-gráfico de presión acústica frente a posición para visualizar la onda armónica."
    en: "Mini-graph of acoustic pressure vs position to visualise the harmonic wave."

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
