const e=`version: "2.0"
id: interp-tono-y-timbre
leaf_id: tono-y-timbre

nombre:
  es: Interpretación — Tono y timbre
  en: Interpretation — Pitch and Timbre

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: sonido
  parent_id: sonido
  ruta_relativa: fisica-clasica/ondas/sonido/tono-y-timbre

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación espectral
    en: Spectral interpretation
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
    - frecuencia_armonico
    - serie_fourier_presion
    - periodo_fundamental
  magnitudes:
    - f1
    - fn
    - An
    - p_total
    - T_per
    - n_arm

global_context:
  physical_domain:
    es: "Análisis espectral de sonidos periódicos complejos: descomposición en armónicos, tono como correlato de la frecuencia fundamental y timbre como huella del espectro de amplitudes."
    en: "Spectral analysis of complex periodic sounds: decomposition into harmonics, pitch as the correlate of the fundamental frequency, and timbre as the fingerprint of the amplitude spectrum."
  axis_convention:
    es: "En la gráfica temporal: eje x tiempo, eje y presión acústica. En la gráfica espectral: eje x frecuencia, eje y amplitud de armónico."
    en: "In the time graph: x axis time, y axis acoustic pressure. In the spectral graph: x axis frequency, y axis harmonic amplitude."
  standard_assumptions:
    - "Sonido periódico estrictamente armónico (fn exactamente múltiplo de f1)"
    - "Medio lineal (superposición válida)"
    - "Régimen cuasi-estacionario (parámetros constantes durante el análisis)"
  standard_warnings:
    - "Los sonidos reales de instrumentos presentan ligera inharmonicidad; los resultados son aproximaciones"
    - "El timbre depende también de la envolvente temporal (ataque, sustain, decaimiento), no solo del espectro estático"

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

  f1:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Frecuencia fundamental: determina el tono percibido y la posición de toda la serie armónica."
      en: "Fundamental frequency: determines the perceived pitch and the position of the entire harmonic series."
    summary_rules:
      - id: f1_summary_infra
        when: "f1 < 20"
        status: warning
        text:
          es: "[[f1]] está en el rango de infrasonidos. Este tono no es audible para el oído humano. La frecuencia fundamental resume el tono: valores por debajo de 20 Hz corresponden a infrasonidos imperceptibles."
          en: "[[f1]] is in the infrasound range. This pitch is not audible to the human ear. The fundamental frequency summarises pitch: values below 20 Hz correspond to imperceptible infrasound."
      - id: f1_summary_audible
        when: "f1 >= 20 && f1 <= 20000"
        status: ok
        text:
          es: "[[f1]] está en el rango audible. Resume el tono percibido: cuanto mayor es [[f1]], más agudo es el sonido. La frecuencia fundamental determina la nota musical y la separación entre las líneas espectrales de todos los armónicos."
          en: "[[f1]] is in the audible range. It summarises the perceived pitch: the higher [[f1]], the higher the sound. The fundamental frequency determines the musical note and the spacing between spectral lines of all harmonics."
      - id: f1_summary_ultra
        when: "f1 > 20000"
        status: warning
        text:
          es: "[[f1]] está en el rango de ultrasonidos. El tono no es perceptible por el oído humano, aunque los armónicos podrían caer en el rango audible si [[f1]] es ligeramente superior a 20 kHz."
          en: "[[f1]] is in the ultrasound range. The pitch is not perceptible by the human ear, though harmonics could fall in the audible range if [[f1]] is only slightly above 20 kHz."
      - id: f1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f1]] resume el tono del sonido: es la frecuencia más baja presente y la que organiza toda la serie de armónicos. La distancia entre líneas espectrales consecutivas en el espectro siempre vale [[f1]]."
          en: "[[f1]] summarises the pitch of the sound: it is the lowest frequency present and the one that organises the entire harmonic series. The spacing between consecutive spectral lines always equals [[f1]]."
    physical_reading_rules:
      - id: f1_reading_musical
        when: "f1 >= 20 && f1 <= 20000"
        status: ok
        text:
          es: "A 440 Hz, [[f1]] corresponde al la4 (A4) estándar de afinación. A 261.6 Hz corresponde al do4 (C4) o do central. La [[f1]] define la nota musical; los armónicos le dan el color instrumental."
          en: "At 440 Hz, [[f1]] corresponds to the standard A4 tuning pitch. At 261.6 Hz it corresponds to C4 (middle C). [[f1]] defines the musical note; harmonics give it instrumental colour."
      - id: f1_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[f1]] es directa: es el ritmo de oscilación de toda la señal acústica, la tasa a la que el patrón completo de compresión y rarefacción se repite."
          en: "The physical reading of [[f1]] is direct: it is the oscillation rate of the entire acoustic signal, the rate at which the complete pattern of compression and rarefaction repeats."
    coherence_rules:
      - id: f1_coherence_positive
        when: "f1 > 0"
        status: ok
        text:
          es: "[[f1]] es positiva, coherente con una frecuencia física."
          en: "[[f1]] is positive, coherent with a physical frequency."
      - id: f1_coherence_zero
        when: "f1 <= 0"
        status: error
        text:
          es: "[[f1]] no puede ser cero ni negativa. Una frecuencia fundamental nula o negativa no tiene sentido físico para un sonido."
          en: "[[f1]] cannot be zero or negative. A zero or negative fundamental frequency has no physical meaning for a sound."
      - id: f1_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia de [[f1]] se verifica comprobando que [[T_per]] sea exactamente el inverso de [[f1]]."
          en: "The coherence of [[f1]] is verified by checking that [[T_per]] is exactly the inverse of [[f1]]."
    model_validity_rules:
      - id: f1_validity_harmonic
        when: "f1 > 0"
        status: ok
        text:
          es: "El modelo de serie de Fourier armónica es válido para [[f1]] positiva. La única restricción de validez es que el sonido sea suficientemente periódico en la ventana de análisis."
          en: "The harmonic Fourier series model is valid for positive [[f1]]. The only validity constraint is that the sound is sufficiently periodic in the analysis window."
      - id: f1_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume periodicidad estricta. Sonidos de percusión (golpe de tambor) o fricción (arco de violín al inicio) tienen periodicidad transitoria y el espectro varía rápidamente con el tiempo."
          en: "The model assumes strict periodicity. Percussive sounds (drum strike) or friction sounds (violin bow at onset) have transient periodicity and the spectrum varies rapidly with time."
    graph_rules:
      - id: f1_graph_spacing
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord de espectro, [[f1]] es la separación entre cualquier par de líneas espectrales consecutivas. La primera línea está en [[f1]], la segunda en el doble de [[f1]], la tercera en el triple, etc."
          en: "In the Coord spectrum graph, [[f1]] is the spacing between any pair of consecutive spectral lines. The first line is at [[f1]], the second at twice [[f1]], the third at three times [[f1]], etc."
    likely_errors:
      - id: f1_error_max_amp
        when: "true"
        status: warning
        text:
          es: "Error frecuente: identificar [[f1]] con la línea espectral de mayor amplitud [[An]] en lugar de con la de menor frecuencia. En algunos instrumentos el armónico más intenso no es el fundamental; aun así, [[f1]] sigue siendo la línea de menor frecuencia."
          en: "Frequent error: identifying [[f1]] with the spectral line of greatest amplitude [[An]] instead of the lowest frequency. In some instruments the most intense harmonic is not the fundamental; even so, [[f1]] remains the lowest-frequency line."
      - id: f1_error_overtone
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir 'fundamental' con 'primer sobretonos'. El sobretonos 1 es el armónico 2 (frecuencia 2·[[f1]]). El fundamental es el armónico 1, con frecuencia [[f1]]."
          en: "Frequent error: confusing 'fundamental' with 'first overtone'. The first overtone is harmonic 2 (frequency 2·[[f1]]). The fundamental is harmonic 1, with frequency [[f1]]."
    next_step_rules:
      - id: f1_next_harmonics
        when: "f1 > 0"
        status: ok
        text:
          es: "Con [[f1]] conocida, calcular las frecuencias de los primeros armónicos para construir el espectro y determinar cuáles caen dentro del rango audible."
          en: "With [[f1]] known, calculate the frequencies of the first harmonics to build the spectrum and determine which fall within the audible range."
      - id: f1_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[f1]] con frecuencias de notas musicales estándar (la4 a 440 Hz, do4 a 261.6 Hz) para contextualizar el tono dentro de la escala musical."
          en: "Compare [[f1]] with standard musical note frequencies (A4 at 440 Hz, C4 at 261.6 Hz) to contextualise the pitch within the musical scale."

  fn:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Frecuencia del armónico n: posición de la línea espectral n en el espectro del sonido."
      en: "Frequency of harmonic n: position of spectral line n in the sound spectrum."
    summary_rules:
      - id: fn_summary_audible
        when: "fn <= 20000"
        status: ok
        text:
          es: "[[fn]] está en el rango audible. Este armónico contribuye a la percepción del timbre. Los armónicos audibles son los que el oído puede detectar y cuya combinación define el color sonoro del instrumento."
          en: "[[fn]] is in the audible range. This harmonic contributes to timbre perception. Audible harmonics are those the ear can detect, whose combination defines the tonal colour of the instrument."
      - id: fn_summary_inaudible
        when: "fn > 20000"
        status: warning
        text:
          es: "[[fn]] supera el límite de audición humana. Este armónico no contribuye directamente a la percepción del timbre, aunque puede tener importancia en aplicaciones de ultrasonido."
          en: "[[fn]] exceeds the human hearing limit. This harmonic does not contribute directly to timbre perception, though it may be important in ultrasound applications."
      - id: fn_summary_default
        when: "true"
        status: ok
        text:
          es: "[[fn]] resume la posición espectral del armónico n. Su valor es n veces [[f1]], y aparece como una línea en el gráfico de espectro a esa frecuencia."
          en: "[[fn]] summarises the spectral position of harmonic n. Its value is n times [[f1]], and it appears as a line in the spectrum graph at that frequency."
    physical_reading_rules:
      - id: fn_reading_integer
        when: "true"
        status: ok
        text:
          es: "[[fn]] dividida entre [[f1]] debe dar exactamente el número entero n. Si la razón no es entera, el sonido tiene componentes inarmónicas y el modelo de serie de Fourier armónica es solo una aproximación."
          en: "[[fn]] divided by [[f1]] must give exactly the integer n. If the ratio is not an integer, the sound has inharmonic components and the harmonic Fourier series model is only an approximation."
      - id: fn_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[fn]] es su posición en el eje de frecuencias del espectro. La amplitud [[An]] en esa posición determina su contribución al timbre."
          en: "The physical reading of [[fn]] is its position on the frequency axis of the spectrum. The amplitude [[An]] at that position determines its contribution to timbre."
    coherence_rules:
      - id: fn_coherence_integer
        when: "true"
        status: ok
        text:
          es: "[[fn]] debe ser exactamente n veces [[f1]] para que el sonido sea estrictamente armónico. Verificar que la razón sea entera dentro del error de medida."
          en: "[[fn]] must be exactly n times [[f1]] for the sound to be strictly harmonic. Verify that the ratio is an integer within measurement error."
      - id: fn_coherence_default
        when: "true"
        status: ok
        text:
          es: "Coherencia: [[fn]] mayor que [[f1]] siempre; aumenta linealmente con n."
          en: "Coherence: [[fn]] always greater than [[f1]]; increases linearly with n."
    model_validity_rules:
      - id: fn_validity_default
        when: "true"
        status: ok
        text:
          es: "La relación entre [[fn]] y [[f1]] es exacta en el modelo armónico ideal. En instrumentos reales, la inharmonicidad desplaza [[fn]] respecto a n·[[f1]] en fracciones de Hz para los primeros armónicos y en decenas de Hz para los armónicos altos en cuerdas rígidas."
          en: "The relation between [[fn]] and [[f1]] is exact in the ideal harmonic model. In real instruments, inharmonicity displaces [[fn]] from n·[[f1]] by fractions of Hz for low harmonics and tens of Hz for high harmonics in stiff strings."
    graph_rules:
      - id: fn_graph_line
        when: "fn <= 20000"
        status: ok
        text:
          es: "En la gráfica Coord de espectro, [[fn]] corresponde a la posición horizontal de la n-ésima barra vertical. Las barras están igualmente espaciadas, con separación [[f1]]."
          en: "In the Coord spectrum graph, [[fn]] corresponds to the horizontal position of the n-th vertical bar. The bars are equally spaced, with spacing [[f1]]."
    likely_errors:
      - id: fn_error_angular
        when: "true"
        status: warning
        text:
          es: "Error frecuente: calcular [[fn]] usando la frecuencia angular en lugar de la frecuencia ordinaria. La fórmula fn es n veces [[f1]] en Hz, no n veces la frecuencia angular."
          en: "Frequent error: calculating [[fn]] using angular frequency instead of ordinary frequency. The formula fn is n times [[f1]] in Hz, not n times the angular frequency."
    next_step_rules:
      - id: fn_next_audibility
        when: "fn <= 20000"
        status: ok
        text:
          es: "Con [[fn]] calculada, verificar si cae en el rango audible y determinar la amplitud [[An]] de ese armónico para evaluar su contribución al timbre."
          en: "With [[fn]] calculated, verify whether it falls in the audible range and determine the amplitude [[An]] of that harmonic to evaluate its contribution to timbre."
      - id: fn_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[fn]] para los primeros cinco a diez armónicos y representarlos en el espectro para obtener una imagen del perfil espectral del sonido."
          en: "Calculate [[fn]] for the first five to ten harmonics and represent them in the spectrum to obtain a picture of the spectral profile of the sound."

  An:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Amplitud del armónico n: determina su contribución al timbre y a la energía total del sonido."
      en: "Amplitude of harmonic n: determines its contribution to timbre and total sound energy."
    summary_rules:
      - id: An_summary_dominant
        when: "An > 0"
        status: ok
        text:
          es: "[[An]] es la amplitud del armónico n en el espectro del sonido. Resume la contribución de ese componente al timbre: un valor grande indica que ese armónico es prominente y perceptible; un valor pequeño indica que contribuye marginalmente al color sonoro."
          en: "[[An]] is the amplitude of harmonic n in the sound spectrum. It summarises that component's contribution to timbre: a large value indicates that harmonic is prominent and perceptible; a small value indicates it contributes marginally to the tonal colour."
      - id: An_summary_zero
        when: "An == 0"
        status: ok
        text:
          es: "[[An]] nula indica que el armónico n está ausente del espectro. Esto puede deberse a la física del instrumento (simetría que elimina armónicos pares) o a la forma de la fuente."
          en: "Zero [[An]] indicates harmonic n is absent from the spectrum. This may be due to the physics of the instrument (symmetry that eliminates even harmonics) or the shape of the source."
      - id: An_summary_default
        when: "true"
        status: ok
        text:
          es: "El conjunto de valores [[An]] para n desde 1 hasta N es la huella espectral del sonido: describe el timbre de forma objetiva y cuantitativa."
          en: "The set of values [[An]] for n from 1 to N is the spectral fingerprint of the sound: it describes timbre objectively and quantitatively."
    physical_reading_rules:
      - id: An_reading_timbre
        when: "true"
        status: ok
        text:
          es: "La distribución de [[An]] en función de n define el timbre. Un espectro con [[An]] que decrece suavemente da un sonido cálido y suave (flauta); un espectro con [[An]] sostenidas para n elevado da un sonido brillante y estridente (oboe, violín)."
          en: "The distribution of [[An]] as a function of n defines the timbre. A spectrum with gently decreasing [[An]] gives a warm, soft sound (flute); a spectrum with sustained [[An]] for high n gives a bright, harsh sound (oboe, violin)."
      - id: An_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[An]] es la amplitud de presión pico del armónico n. Su cuadrado es proporcional a la energía aportada por ese armónico."
          en: "The physical reading of [[An]] is the peak pressure amplitude of harmonic n. Its square is proportional to the energy contributed by that harmonic."
    coherence_rules:
      - id: An_coherence_positive
        when: "An >= 0"
        status: ok
        text:
          es: "[[An]] es no negativa, coherente con una amplitud de presión."
          en: "[[An]] is non-negative, coherent with a pressure amplitude."
      - id: An_coherence_negative
        when: "An < 0"
        status: error
        text:
          es: "[[An]] no puede ser negativa. La amplitud es siempre no negativa; el signo de la oscilación está en la fase del componente."
          en: "[[An]] cannot be negative. Amplitude is always non-negative; the sign of the oscillation is in the phase of the component."
      - id: An_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia de [[An]] se verifica comprobando que es no negativa y que la suma cuadrática de todos los [[An]] es proporcional a la intensidad acústica total."
          en: "The coherence of [[An]] is verified by checking it is non-negative and that the quadratic sum of all [[An]] is proportional to the total acoustic intensity."
    model_validity_rules:
      - id: An_validity_linear
        when: "true"
        status: ok
        text:
          es: "El modelo de superposición lineal que define [[An]] es válido en medios acústicos lineales. Si la amplitud total es muy grande, la superposición puede fallar por efectos no lineales y el espectro dejará de ser la suma simple de los componentes."
          en: "The linear superposition model that defines [[An]] is valid in linear acoustic media. If the total amplitude is very large, superposition may fail due to non-linear effects and the spectrum will no longer be the simple sum of components."
    graph_rules:
      - id: An_graph_bar
        when: "An > 0"
        status: ok
        text:
          es: "En la gráfica Coord de espectro, [[An]] aparece como la altura de la barra vertical en la posición [[fn]] del eje x. Cuanto mayor es [[An]], más prominente es la barra."
          en: "In the Coord spectrum graph, [[An]] appears as the height of the vertical bar at position [[fn]] on the x axis. The larger [[An]], the more prominent the bar."
    likely_errors:
      - id: An_error_sum
        when: "true"
        status: warning
        text:
          es: "Error frecuente: sumar las amplitudes [[An]] para obtener la amplitud total de la señal. La amplitud total depende de las fases relativas y puede ser mayor o menor que la suma de [[An]]. La intensidad total sí es proporcional a la suma de los cuadrados de [[An]]."
          en: "Frequent error: summing the amplitudes [[An]] to obtain the total signal amplitude. The total amplitude depends on relative phases and can be greater or lesser than the sum of [[An]]. The total intensity is proportional to the sum of the squares of [[An]]."
    next_step_rules:
      - id: An_next_spectrum
        when: "true"
        status: ok
        text:
          es: "Con los valores de [[An]] para varios armónicos, construir el espectro de amplitudes y compararlo con los espectros típicos de distintos instrumentos para identificar el origen del sonido."
          en: "With the values of [[An]] for several harmonics, build the amplitude spectrum and compare it with typical spectra of different instruments to identify the sound source."
      - id: An_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular la intensidad acústica de cada armónico por separado para determinar cuál domina energéticamente el sonido."
          en: "Calculate the acoustic intensity of each harmonic separately to determine which one dominates the sound energetically."

  T_per:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Periodo de la señal periódica total: inverso de la frecuencia fundamental."
      en: "Period of the total periodic signal: inverse of the fundamental frequency."
    summary_rules:
      - id: T_per_summary_audible
        when: "T_per >= 5e-5 && T_per <= 0.05"
        status: ok
        text:
          es: "[[T_per]] está en el rango de sonidos audibles (50 µs a 50 ms). Resume la duración de un ciclo completo de la señal acústica. Es el tiempo que tarda la forma de onda total en repetirse exactamente."
          en: "[[T_per]] is in the audible sound range (50 µs to 50 ms). It summarises the duration of one complete cycle of the acoustic signal. It is the time for the total waveform to repeat exactly."
      - id: T_per_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T_per]] resume la periodicidad temporal del sonido: cuanto menor es [[T_per]], mayor es [[f1]] y más agudo es el tono."
          en: "[[T_per]] summarises the temporal periodicity of the sound: the smaller [[T_per]], the higher [[f1]] and the higher the pitch."
    physical_reading_rules:
      - id: T_per_reading_waveform
        when: "true"
        status: ok
        text:
          es: "En la gráfica temporal, [[T_per]] es la distancia horizontal entre dos repeticiones idénticas de la forma de onda. Incluso si la forma de onda es compleja (muchos armónicos), el patrón se repite exactamente cada [[T_per]] segundos."
          en: "In the time graph, [[T_per]] is the horizontal distance between two identical repetitions of the waveform. Even if the waveform is complex (many harmonics), the pattern repeats exactly every [[T_per]] seconds."
      - id: T_per_reading_default
        when: "true"
        status: ok
        text:
          es: "[[T_per]] está determinado por [[f1]], no por los armónicos superiores. Aunque el armónico n tiene su propio periodo de T_per/n, la señal completa solo se repite después de [[T_per]]."
          en: "[[T_per]] is determined by [[f1]], not by the higher harmonics. Although harmonic n has its own period T_per/n, the complete signal only repeats after [[T_per]]."
    coherence_rules:
      - id: T_per_coherence_inverse
        when: "true"
        status: ok
        text:
          es: "La coherencia de [[T_per]] se verifica multiplicando por [[f1]]: el resultado debe ser exactamente 1."
          en: "The coherence of [[T_per]] is verified by multiplying by [[f1]]: the result must be exactly 1."
      - id: T_per_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[T_per]] positivo y coherente con el inverso de [[f1]]."
          en: "[[T_per]] positive and coherent with the inverse of [[f1]]."
    model_validity_rules:
      - id: T_per_validity_default
        when: "true"
        status: ok
        text:
          es: "El concepto de [[T_per]] como periodo exacto es válido para señales perfectamente periódicas. Para señales reales de instrumentos, [[T_per]] es el periodo promedio y puede fluctuar ligeramente ciclo a ciclo (jitter)."
          en: "The concept of [[T_per]] as an exact period is valid for perfectly periodic signals. For real instrument signals, [[T_per]] is the average period and may fluctuate slightly cycle to cycle (jitter)."
    graph_rules:
      - id: T_per_graph_cycle
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord temporal, [[T_per]] es el intervalo horizontal entre dos marcas idénticas en la forma de onda. Identificarlo visualmente requiere encontrar dos puntos de fase igual (por ejemplo, dos máximos consecutivos de la envolvente)."
          en: "In the Coord time graph, [[T_per]] is the horizontal interval between two identical marks on the waveform. Identifying it visually requires finding two points of equal phase (for example, two consecutive envelope maxima)."
    likely_errors:
      - id: T_per_error_harmonic_period
        when: "true"
        status: warning
        text:
          es: "Error frecuente: medir el periodo de un armónico individual en la gráfica y tomarlo como [[T_per]] de la señal total. El periodo del armónico n es [[T_per]] dividido entre n; si se mide el armónico 3, el periodo medido es un tercio de [[T_per]]."
          en: "Frequent error: measuring the period of an individual harmonic in the graph and taking it as [[T_per]] of the total signal. The period of harmonic n is [[T_per]] divided by n; if harmonic 3 is measured, the measured period is one third of [[T_per]]."
    next_step_rules:
      - id: T_per_next_f1
        when: "true"
        status: ok
        text:
          es: "Con [[T_per]] medido a partir de la gráfica, calcular [[f1]] como su inverso para identificar la nota musical correspondiente."
          en: "With [[T_per]] measured from the graph, calculate [[f1]] as its inverse to identify the corresponding musical note."
      - id: T_per_next_default
        when: "true"
        status: ok
        text:
          es: "Verificar que la ventana de análisis temporal sea al menos dos o tres veces [[T_per]] para que la forma de onda sea representativa y el espectro calculado sea fiable."
          en: "Verify that the time analysis window is at least two or three times [[T_per]] so that the waveform is representative and the calculated spectrum is reliable."

  n_arm:
    magnitude_type: integer_positive
    semantic_role:
      es: "Número de armónico: índice que identifica cada componente de la serie y determina su frecuencia como múltiplo de f1."
      en: "Harmonic number: index that identifies each series component and determines its frequency as a multiple of f1."
    summary_rules:
      - id: n_arm_summary_low
        when: "n_arm <= 5"
        status: ok
        text:
          es: "[[n_arm]] corresponde a un armónico bajo. Los primeros armónicos determinan el tono y el cuerpo del sonido; sus amplitudes suelen ser las más grandes y su contribución al timbre es dominante."
          en: "[[n_arm]] corresponds to a low harmonic. The first harmonics determine pitch and body of the sound; their amplitudes are usually the largest and their contribution to timbre is dominant."
      - id: n_arm_summary_high
        when: "n_arm > 5"
        status: ok
        text:
          es: "[[n_arm]] corresponde a un armónico alto. Los armónicos superiores añaden brillo y presencia al sonido pero suelen tener menor amplitud. Su presencia o ausencia distingue instrumentos 'brillantes' de instrumentos 'suaves'."
          en: "[[n_arm]] corresponds to a high harmonic. Higher harmonics add brilliance and presence to the sound but usually have smaller amplitude. Their presence or absence distinguishes 'bright' from 'soft' instruments."
      - id: n_arm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n_arm]] resume el orden del componente armónico. La frecuencia del armónico es n veces [[f1]]; la amplitud [[An]] a ese orden define su peso en el timbre."
          en: "[[n_arm]] summarises the order of the harmonic component. The frequency of the harmonic is n times [[f1]]; the amplitude [[An]] at that order defines its weight in the timbre."
    physical_reading_rules:
      - id: n_arm_reading_odd_even
        when: "true"
        status: ok
        text:
          es: "Los armónicos impares ([[n_arm]] impar) son los únicos presentes en instrumentos con simetría de media onda, como el clarinete en su registro fundamental. Esto da al clarinete su timbre hueco y oscuro. Los instrumentos con armónicos pares e impares suenan más brillantes y llenos."
          en: "Odd harmonics ([[n_arm]] odd) are the only ones present in instruments with half-wave symmetry, such as the clarinet in its fundamental register. This gives the clarinet its hollow, dark timbre. Instruments with both even and odd harmonics sound brighter and fuller."
      - id: n_arm_reading_default
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[n_arm]] es su posición en la serie: [[n_arm]] igual a 1 es la fundamental; [[n_arm]] igual a 2 es el primer sobretonos; [[n_arm]] igual a 3 es el segundo sobretonos, etc."
          en: "The physical reading of [[n_arm]] is its position in the series: [[n_arm]] equal to 1 is the fundamental; [[n_arm]] equal to 2 is the first overtone; [[n_arm]] equal to 3 is the second overtone, etc."
    coherence_rules:
      - id: n_arm_coherence_integer
        when: "n_arm >= 1"
        status: ok
        text:
          es: "[[n_arm]] es un entero positivo, coherente con su rol de índice de la serie armónica."
          en: "[[n_arm]] is a positive integer, coherent with its role as index of the harmonic series."
      - id: n_arm_coherence_invalid
        when: "n_arm < 1"
        status: error
        text:
          es: "[[n_arm]] debe ser un entero positivo mayor o igual a 1. Un valor menor de 1 no corresponde a ningún componente armónico físico."
          en: "[[n_arm]] must be a positive integer greater than or equal to 1. A value less than 1 does not correspond to any physical harmonic component."
      - id: n_arm_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[n_arm]] es entero y positivo antes de calcular [[fn]] como n veces [[f1]]."
          en: "Verify that [[n_arm]] is an integer and positive before calculating [[fn]] as n times [[f1]]."
    model_validity_rules:
      - id: n_arm_validity_default
        when: "true"
        status: ok
        text:
          es: "No hay límite teórico para [[n_arm]] en la serie de Fourier, pero en la práctica los armónicos por encima de cierto orden tienen amplitud despreciable o caen fuera del rango audible. Para la mayoría de los análisis musicales, considerar los primeros 10 a 20 armónicos es suficiente."
          en: "There is no theoretical limit for [[n_arm]] in the Fourier series, but in practice harmonics above a certain order have negligible amplitude or fall outside the audible range. For most musical analyses, considering the first 10 to 20 harmonics is sufficient."
    graph_rules:
      - id: n_arm_graph_position
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord de espectro, [[n_arm]] identifica la posición de la barra: la primera barra (n=1) está en [[f1]], la segunda (n=2) en el doble de [[f1]], etc. El patrón de barras igualmente espaciadas es la firma de un sonido armónico."
          en: "In the Coord spectrum graph, [[n_arm]] identifies the bar position: the first bar (n=1) is at [[f1]], the second (n=2) at twice [[f1]], etc. The pattern of equally spaced bars is the signature of a harmonic sound."
    likely_errors:
      - id: n_arm_error_overtone
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[n_arm]] contando desde el primer sobretonos en lugar de desde la fundamental. Si se llama 'n=1' al primer sobretonos, todas las frecuencias calculadas estarán desplazadas en un factor de dos respecto a las correctas."
          en: "Frequent error: using [[n_arm]] counting from the first overtone instead of from the fundamental. If the first overtone is called 'n=1', all calculated frequencies will be shifted by a factor of two from the correct values."
    next_step_rules:
      - id: n_arm_next_spectrum
        when: "true"
        status: ok
        text:
          es: "Con [[n_arm]] definido, calcular [[fn]] y consultar el valor de [[An]] para ese armónico con el fin de evaluar su importancia en el timbre del sonido analizado."
          en: "With [[n_arm]] defined, calculate [[fn]] and look up the value of [[An]] for that harmonic to evaluate its importance in the timbre of the analysed sound."
      - id: n_arm_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar los primeros diez armónicos sistemáticamente y clasificar cuáles son pares e impares para inferir el tipo de simetría del instrumento o fuente sonora."
          en: "Systematically explore the first ten harmonics and classify which are even and which odd to infer the type of symmetry of the instrument or sound source."

  p_total:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Presión acústica total: suma de todos los componentes armónicos; es la señal real que viaja por el medio."
      en: "Total acoustic pressure: sum of all harmonic components; it is the real signal that travels through the medium."
    summary_rules:
      - id: p_total_summary_complex
        when: "true"
        status: ok
        text:
          es: "[[p_total]] resume la señal acústica completa en un punto del espacio. Es la superposición de todos los armónicos con sus amplitudes [[An]] y fases relativas. Su forma de onda puede ser muy diferente a una sinusoide, revelando la riqueza armónica del sonido."
          en: "[[p_total]] summarises the complete acoustic signal at a point in space. It is the superposition of all harmonics with their amplitudes [[An]] and relative phases. Its waveform can be very different from a sinusoid, revealing the harmonic richness of the sound."
      - id: p_total_summary_default
        when: "true"
        status: ok
        text:
          es: "[[p_total]] es la magnitud físicamente real: lo que un micrófono mediría. La descomposición en armónicos es una herramienta analítica; la señal en el medio es siempre la suma total."
          en: "[[p_total]] is the physically real quantity: what a microphone would measure. The decomposition into harmonics is an analytical tool; the signal in the medium is always the total sum."
    physical_reading_rules:
      - id: p_total_reading_waveform
        when: "true"
        status: ok
        text:
          es: "La forma de la onda de [[p_total]] aporta información cualitativa sobre el timbre: una onda casi sinusoidal indica pocos armónicos (flauta); una onda con picos agudos y valles planos indica presencia de muchos armónicos (violín, oboe)."
          en: "The waveform shape of [[p_total]] provides qualitative information about timbre: a nearly sinusoidal wave indicates few harmonics (flute); a wave with sharp peaks and flat troughs indicates the presence of many harmonics (violin, oboe)."
      - id: p_total_reading_default
        when: "true"
        status: ok
        text:
          es: "[[p_total]] en cada instante refleja la suma instantánea de todas las oscilaciones armónicas. Compresiones y rarefacciones se suman o se cancelan dependiendo de las fases relativas en ese instante."
          en: "[[p_total]] at each instant reflects the instantaneous sum of all harmonic oscillations. Compressions and rarefactions add or cancel depending on the relative phases at that instant."
    coherence_rules:
      - id: p_total_coherence_range
        when: "true"
        status: ok
        text:
          es: "El valor máximo de [[p_total]] no puede exceder la suma de todas las amplitudes [[An]]. En la práctica, es considerablemente menor debido a la distribución de fases."
          en: "The maximum value of [[p_total]] cannot exceed the sum of all amplitudes [[An]]. In practice, it is considerably less due to the phase distribution."
      - id: p_total_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia de [[p_total]] se verifica comprobando que su periodo es [[T_per]] y que su análisis de Fourier reproduce las amplitudes [[An]] declaradas."
          en: "The coherence of [[p_total]] is verified by checking that its period is [[T_per]] and that its Fourier analysis reproduces the declared amplitudes [[An]]."
    model_validity_rules:
      - id: p_total_validity_linear
        when: "true"
        status: ok
        text:
          es: "El principio de superposición que permite construir [[p_total]] como suma de armónicos es válido solo en medios lineales. Para amplitudes muy grandes, la no linealidad del medio hace que los armónicos no se sumen libremente."
          en: "The superposition principle that allows building [[p_total]] as a sum of harmonics is valid only in linear media. For very large amplitudes, the non-linearity of the medium prevents harmonics from summing freely."
    graph_rules:
      - id: p_total_graph_time
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord temporal, [[p_total]] es la curva compleja que se observa. Su periodicidad visible es [[T_per]] y su morfología (número y forma de los picos por periodo) refleja el espectro armónico."
          en: "In the Coord time graph, [[p_total]] is the complex curve observed. Its visible periodicity is [[T_per]] and its morphology (number and shape of peaks per period) reflects the harmonic spectrum."
    likely_errors:
      - id: p_total_error_sinusoid
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asumir que [[p_total]] es una sinusoide perfecta. Solo tiene esa forma si el sonido contiene un único armónico. Con varios armónicos, la forma de onda es compleja aunque el sonido sea periódico."
          en: "Frequent error: assuming [[p_total]] is a perfect sinusoid. It only has that shape if the sound contains a single harmonic. With several harmonics, the waveform is complex even though the sound is periodic."
    next_step_rules:
      - id: p_total_next_fourier
        when: "true"
        status: ok
        text:
          es: "A partir de [[p_total]] como señal temporal, aplicar el análisis de Fourier para extraer las amplitudes [[An]] y frecuencias [[fn]] de cada armónico, obteniendo el espectro completo del sonido."
          en: "From [[p_total]] as a time signal, apply Fourier analysis to extract the amplitudes [[An]] and frequencies [[fn]] of each harmonic, obtaining the complete sound spectrum."
      - id: p_total_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar la forma de onda de [[p_total]] antes y después de modificar la amplitud de uno de los armónicos para observar cómo el timbre cambia con el espectro."
          en: "Compare the waveform of [[p_total]] before and after modifying the amplitude of one of the harmonics to observe how timbre changes with spectrum."

cross_checks:
  - id: cc_fn_equals_n_times_f1
    check: "fn == n_arm * f1"
    message:
      es: "[[fn]] debe ser exactamente [[n_arm]] veces [[f1]] para un sonido armónico."
      en: "[[fn]] must be exactly [[n_arm]] times [[f1]] for a harmonic sound."
  - id: cc_T_f1_inverse
    check: "abs(T_per * f1 - 1) < 0.001"
    message:
      es: "[[T_per]] multiplicado por [[f1]] debe ser 1 con menos de 0.1 % de error."
      en: "[[T_per]] times [[f1]] must equal 1 with less than 0.1 % error."

error_patterns:
  - id: ep_overtone_vs_harmonic
    pattern: "fn = (n-1) * f1 en lugar de n * f1"
    cause:
      es: "El alumno confundió número de armónico con número de sobretonos; los sobretonos se cuentan desde el segundo componente"
      en: "The student confused harmonic number with overtone number; overtones are counted from the second component"
  - id: ep_amplitude_sum
    pattern: "p_total_max = suma de An"
    cause:
      es: "El alumno sumó amplitudes ignorando las fases relativas; la amplitud máxima real depende de la distribución de fases"
      en: "The student summed amplitudes ignoring relative phases; the actual maximum amplitude depends on the phase distribution"

graph_binding:
  primary_graph: Coord
  description:
    es: "El gráfico Coord puede mostrar dos vistas: (1) señal temporal de p_total vs tiempo, con periodicidad T_per; (2) espectro de amplitudes An vs fn, con líneas discretas igualmente espaciadas."
    en: "The Coord graph can show two views: (1) time signal of p_total vs time, with periodicity T_per; (2) amplitude spectrum An vs fn, with equally spaced discrete lines."

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: "Mini-gráfico de espectro de amplitudes (An vs fn) para visualizar la composición armónica del sonido."
    en: "Mini-graph of amplitude spectrum (An vs fn) to visualise the harmonic composition of the sound."

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
