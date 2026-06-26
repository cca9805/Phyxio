const e=`version: v5
id: interpretacion_intensidad_ondulatoria
leaf_id: intensidad-ondulatoria
nombre:
  es: Interpretación de intensidad ondulatoria
  en: Wave intensity interpretation
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: energia-y-transporte
  parent_id: energia-y-transporte
  ruta_relativa: fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es:
      summary: Resumen
      physical_reading: Lectura física
      coherence: Coherencia
      model_validity: Validez del modelo
      graph_reading: Lectura gráfica
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
    max_sections: 2
    max_rules_per_section: 3

dependencies:
  formulas:
    - intensidad_desde_potencia
    - intensidad_desde_presion
    - nivel_sonoro_dB
    - area_esferica
  magnitudes:
    - I_intensidad
    - P_potencia
    - r_distancia
    - beta_nivel
    - p_presion
    - rho
    - A_area

global_context:
  physical_domain:
    es: Ondas tridimensionales en medios fluidos, propagación esférica desde fuentes puntuales.
    en: Three-dimensional waves in fluid media, spherical propagation from point sources.
  axis_convention:
    es: La intensidad es escalar positiva, independiente de la dirección de propagación.
    en: Intensity is positive scalar, independent of propagation direction.
  standard_assumptions:
    - Fuente puntual isotrópica
    - Medio homogéneo y no absorbente
    - Campo lejano (distancia grande comparada con tamaño de fuente)
  standard_warnings:
    - "En medios absorbentes, la intensidad decae más rápido que 1/r²"
    - "Fuentes direccionales concentran intensidad en ciertas direcciones"

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
  I_intensidad:
    magnitude_type: intensity
    semantic_role:
      es: Intensidad ondulatoria - potencia por unidad de área que caracteriza la fuerza de la onda.
      en: Wave intensity - power per unit area that characterizes the strength of the wave.
    next_step_rules:
      - id: ii_next_nivel_dB
        when: "true"
        status: ok
        text:
          es: "Convierte la intensidad [[I_intensidad]] a nivel sonoro [[beta_nivel]] en decibelios para evaluar la percepción humana."
          en: "Convert intensity [[I_intensidad]] to sound level [[beta_nivel]] in decibels to evaluate human perception."
      - id: ii_next_seguridad
        when: "true"
        status: ok
        text:
          es: "Compara con umbrales de seguridad: 85 dB (protección obligatoria), 120 dB (dolor), 140 dB (daño inmediato)."
          en: "Compare with safety thresholds: 85 dB (mandatory protection), 120 dB (pain), 140 dB (immediate damage)."
    summary_rules:
      - id: ii_summary_umbral
        when: "I_intensidad < 1e-12"
        status: warning
        text:
          es: "[[I_intensidad]] está por debajo del umbral de audición humana (10⁻¹² W/m²). La onda es imperceptible para el oído humano."
          en: "[[I_intensidad]] is below the human hearing threshold (10⁻¹² W/m²). The wave is imperceptible to the human ear."
      - id: ii_summary_auditivo
        when: "I_intensidad >= 1e-12 && I_intensidad < 1"
        status: ok
        text:
          es: "[[I_intensidad]] está en el rango audible. La percepción depende del nivel en decibelios respecto al umbral."
          en: "[[I_intensidad]] is in the audible range. Perception depends on the decibel level relative to threshold."
      - id: ii_summary_alto
        when: "I_intensidad >= 1 && I_intensidad < 100"
        status: ok
        text:
          es: "[[I_intensidad]] representa intensidad elevada, típica de altavoces potentes o entornos industriales ruidosos."
          en: "[[I_intensidad]] represents high intensity, typical of powerful loudspeakers or noisy industrial environments."
      - id: ii_summary_dolor
        when: "I_intensidad >= 10"
        status: warning
        text:
          es: "[[I_intensidad]] alcanza nivel de dolor (aproximadamente 10 W/m²). Riesgo de daño auditivo inmediato."
          en: "[[I_intensidad]] reaches pain level (approximately 10 W/m²). Risk of immediate hearing damage."
      - id: ii_summary_default
        when: "true"
        status: ok
        text:
          es: "La intensidad [[I_intensidad]] describe la potencia de la onda distribuida sobre cada metro cuadrado de área perpendicular."
          en: "Intensity [[I_intensidad]] describes the wave power distributed over each square meter of perpendicular area."
    physical_reading_rules:
      - id: ii_reading_comparacion
        when: "true"
        status: ok
        text:
          es: "Para contextualizar: el Sol entrega aproximadamente 1000 W/m² a la Tierra; un susurro es aproximadamente 10⁻¹⁰ W/m²."
          en: "For context: the Sun delivers approximately 1000 W/m² to Earth; a whisper is approximately 10⁻¹⁰ W/m²."
      - id: ii_reading_fuente
        when: "P_potencia > 0"
        status: ok
        text:
          es: "Con potencia de fuente [[P_potencia]] a distancia [[r_distancia]], la intensidad representa la densidad de potencia en ese punto."
          en: "With source power [[P_potencia]] at distance [[r_distancia]], intensity represents the power density at that point."
      - id: ii_reading_default
        when: "true"
        status: ok
        text:
          es: "El valor indica cuánta energía transporta la onda por unidad de tiempo y área. Mayor intensidad implica onda más 'fuerte' o 'potente'."
          en: "The value indicates how much energy the wave transports per unit time and area. Higher intensity means a 'stronger' or 'more powerful' wave."
    coherence_rules:
      - id: ii_coherence_distancia_cero
        when: "r_distancia <= 0"
        status: error
        text:
          es: "Distancia no válida. La intensidad requiere distancia positiva desde la fuente."
          en: "Invalid distance. Intensity requires positive distance from source."
      - id: ii_coherence_negativa
        when: "I_intensidad < 0"
        status: error
        text:
          es: "Intensidad negativa detectada. La intensidad es por definición una magnitud no negativa."
          en: "Negative intensity detected. Intensity is by definition a non-negative magnitude."
      - id: ii_coherence_default
        when: "true"
        status: ok
        text:
          es: "Coherencia verificada: la intensidad es consistente con potencia y distancia."
          en: "Coherence verified: intensity is consistent with power and distance."
    model_validity_rules:
      - id: ii_validity_cercano
        when: "r_distancia < 0.1"
        status: warning
        text:
          es: "Distancia pequeña respecto a la dimensión de fuente típica. El modelo de fuente puntual puede ser impreciso."
          en: "Small distance relative to typical source dimension. Point source model may be imprecise."
      - id: ii_validity_absorcion
        when: "r_distancia > 100"
        status: warning
        text:
          es: "A grandes distancias, la absorción atmosférica reduce la intensidad real por debajo del valor calculado."
          en: "At large distances, atmospheric absorption reduces actual intensity below calculated value."
      - id: ii_validity_default
        when: "true"
        status: ok
        text:
          es: "Modelo válido para fuente puntual isotrópica en medio no absorbente."
          en: "Model valid for isotropic point source in non-absorbing medium."
    graph_rules:
      - id: ii_graph_decrecimiento
        when: "true"
        status: ok
        text:
          es: "En el gráfico, la intensidad decrece con el cuadrado de la distancia. Visualmente aparece como curva descendente pronunciada."
          en: "In the graph, intensity decreases with the square of distance. Visually appears as a steep downward curve."
      - id: ii_graph_escala_log
        when: "true"
        status: ok
        text:
          es: "En escala logarítmica, la disminución aparece como línea recta con pendiente -2."
          en: "On logarithmic scale, the decrease appears as a straight line with slope -2."
      - id: ii_graph_default
        when: "true"
        status: ok
        text:
          es: "La visualización muestra cómo la energía se distribuye sobre áreas cada vez mayores."
          en: "Visualization shows how energy distributes over increasingly larger areas."
    likely_errors:
      - id: ii_error_inversa_lineal
        when: "true"
        status: warning
        text:
          es: "Error típico: pensar que la intensidad decrece como 1/r en lugar de 1/r². Duplicar la distancia reduce la intensidad a un cuarto, no a la mitad."
          en: "Typical error: thinking intensity decreases as 1/r instead of 1/r². Doubling distance reduces intensity to a quarter, not half."
      - id: ii_error_factor_4pi
        when: "true"
        status: warning
        text:
          es: "Error común: olvidar el factor 4π del área esférica. Sin él, los resultados son 12.57 veces incorrectos."
          en: "Common error: forgetting the 4π factor of spherical area. Without it, results are 12.57 times incorrect."
      - id: ii_error_default
        when: "true"
        status: ok
        text:
          es: "Verifica siempre las unidades: intensidad debe estar en W/m²."
          en: "Always verify units: intensity should be in W/m²."

  P_potencia:
    magnitude_type: power
    semantic_role:
      es: Potencia emitida por la fuente antes de repartirse sobre el frente de onda.
      en: Power emitted by the source before spreading over the wavefront.
    next_step_rules:
      - id: pp_next_intensidad
        when: "true"
        status: ok
        text:
          es: "Usa [[P_potencia]] junto con [[r_distancia]] para calcular la intensidad recibida."
          en: "Use [[P_potencia]] with [[r_distancia]] to calculate received intensity."
    summary_rules:
      - id: pp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P_potencia]] fija la energía disponible por segundo para producir intensidad a distancia."
          en: "[[P_potencia]] sets the energy available per second to produce intensity at distance."
    physical_reading_rules:
      - id: pp_reading_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[P_potencia]] eleva toda la curva de intensidad sin cambiar su forma geométrica."
          en: "Greater [[P_potencia]] raises the whole intensity curve without changing its geometric shape."
    coherence_rules:
      - id: pp_coherence_negative
        when: "P_potencia < 0"
        status: error
        text:
          es: "[[P_potencia]] no puede ser negativa en una fuente emisora pasiva."
          en: "[[P_potencia]] cannot be negative for a passive emitting source."
      - id: pp_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[P_potencia]] es coherente si representa energía emitida por unidad de tiempo."
          en: "[[P_potencia]] is coherent if it represents energy emitted per unit time."
    model_validity_rules:
      - id: pp_validity_default
        when: "true"
        status: ok
        text:
          es: "La potencia debe ser la emitida hacia el dominio modelado; en fuentes direccionales no siempre es la potencia total."
          en: "Power must be the amount emitted into the modeled domain; for directional sources it is not always total power."
    graph_rules:
      - id: pp_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico, aumentar [[P_potencia]] desplaza la intensidad hacia arriba para todas las distancias."
          en: "In the graph, increasing [[P_potencia]] shifts intensity upward at all distances."
    likely_errors:
      - id: pp_error_total_util
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar potencia eléctrica consumida en vez de potencia acústica emitida."
          en: "Common error: using consumed electrical power instead of emitted acoustic power."

  r_distancia:
    magnitude_type: distance
    semantic_role:
      es: Distancia desde la fuente que controla la dilución geométrica de la intensidad.
      en: Distance from the source controlling geometric dilution of intensity.
    next_step_rules:
      - id: rd_next_area
        when: "true"
        status: ok
        text:
          es: "Calcula el área de reparto [[A_area]] asociada a esa distancia."
          en: "Calculate the spreading area [[A_area]] associated with that distance."
    summary_rules:
      - id: rd_summary_default
        when: "true"
        status: ok
        text:
          es: "[[r_distancia]] aumenta el área de reparto y reduce la intensidad por geometría."
          en: "[[r_distancia]] increases spreading area and reduces intensity by geometry."
    physical_reading_rules:
      - id: rd_reading_default
        when: "true"
        status: ok
        text:
          es: "Duplicar [[r_distancia]] reparte la misma potencia sobre una superficie cuatro veces mayor."
          en: "Doubling [[r_distancia]] spreads the same power over four times the surface."
    coherence_rules:
      - id: rd_coherence_positive
        when: "r_distancia <= 0"
        status: error
        text:
          es: "[[r_distancia]] debe ser positiva; la fuente puntual no se evalúa en el origen."
          en: "[[r_distancia]] must be positive; the point source is not evaluated at the origin."
      - id: rd_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[r_distancia]] es coherente para describir campo lejano si supera el tamaño de la fuente."
          en: "[[r_distancia]] is coherent for far-field description if it exceeds source size."
    model_validity_rules:
      - id: rd_validity_near
        when: "r_distancia < 1"
        status: warning
        text:
          es: "Distancias pequeñas pueden entrar en campo cercano y romper el modelo isotrópico."
          en: "Small distances may enter the near field and break the isotropic model."
    graph_rules:
      - id: rd_graph_default
        when: "true"
        status: ok
        text:
          es: "El eje horizontal del gráfico usa [[r_distancia]] para mostrar la atenuación con distancia."
          en: "The graph horizontal axis uses [[r_distancia]] to show attenuation with distance."
    likely_errors:
      - id: rd_error_lineal
        when: "true"
        status: warning
        text:
          es: "Error frecuente: suponer que la intensidad cae linealmente con [[r_distancia]]."
          en: "Common error: assuming intensity falls linearly with [[r_distancia]]."

  A_area:
    magnitude_type: area
    semantic_role:
      es: Área esférica sobre la que se reparte la potencia emitida.
      en: Spherical area over which emitted power is spread.
    next_step_rules:
      - id: aa_next_intensity
        when: "true"
        status: ok
        text:
          es: "Divide [[P_potencia]] entre [[A_area]] para obtener la intensidad media sobre el frente."
          en: "Divide [[P_potencia]] by [[A_area]] to obtain average intensity over the front."
    summary_rules:
      - id: aa_summary_default
        when: "true"
        status: ok
        text:
          es: "[[A_area]] representa la superficie de reparto que diluye la potencia."
          en: "[[A_area]] represents the spreading surface that dilutes power."
    physical_reading_rules:
      - id: aa_reading_default
        when: "true"
        status: ok
        text:
          es: "[[A_area]] traduce la geometría tridimensional en una pérdida de intensidad por reparto."
          en: "[[A_area]] turns three-dimensional geometry into intensity loss by spreading."
    coherence_rules:
      - id: aa_coherence_positive
        when: "A_area <= 0"
        status: error
        text:
          es: "[[A_area]] debe ser positiva para repartir potencia."
          en: "[[A_area]] must be positive to spread power."
      - id: aa_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[A_area]] crece con la distancia y por tanto reduce la intensidad."
          en: "[[A_area]] grows with distance and therefore reduces intensity."
    model_validity_rules:
      - id: aa_validity_default
        when: "true"
        status: ok
        text:
          es: "El área esférica vale para fuente puntual isotrópica; una fuente direccional usa un área efectiva."
          en: "Spherical area applies to an isotropic point source; a directional source uses an effective area."
    graph_rules:
      - id: aa_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico, [[A_area]] crece mientras [[I_intensidad]] decrece."
          en: "In the graph, [[A_area]] grows while [[I_intensidad]] decreases."
    likely_errors:
      - id: aa_error_circulo
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar área circular en lugar de superficie esférica."
          en: "Common error: using circular area instead of spherical surface."

  p_presion:
    magnitude_type: pressure
    semantic_role:
      es: Presión acústica que permite estimar intensidad cuando se conoce el medio.
      en: Acoustic pressure used to estimate intensity when the medium is known.
    next_step_rules:
      - id: pr_next_intensity
        when: "true"
        status: ok
        text:
          es: "Relaciona [[p_presion]] con [[I_intensidad]] usando las propiedades del medio."
          en: "Relate [[p_presion]] to [[I_intensidad]] using medium properties."
    summary_rules:
      - id: pr_summary_default
        when: "true"
        status: ok
        text:
          es: "[[p_presion]] se conecta con intensidad mediante una relación cuadrática."
          en: "[[p_presion]] connects to intensity through a quadratic relation."
    physical_reading_rules:
      - id: pr_reading_default
        when: "true"
        status: ok
        text:
          es: "La presión oscila con signo, pero la intensidad media asociada a [[p_presion]] es no negativa."
          en: "Pressure oscillates with sign, but average intensity associated with [[p_presion]] is non-negative."
    coherence_rules:
      - id: pr_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[p_presion]] debe interpretarse como amplitud o valor eficaz, no como presión instantánea aislada."
          en: "[[p_presion]] must be interpreted as amplitude or RMS value, not an isolated instantaneous pressure."
    model_validity_rules:
      - id: pr_validity_default
        when: "true"
        status: ok
        text:
          es: "La conversión presión-intensidad presupone medio homogéneo y onda suficientemente regular."
          en: "Pressure-intensity conversion assumes a homogeneous medium and a sufficiently regular wave."
    graph_rules:
      - id: pr_graph_default
        when: "true"
        status: ok
        text:
          es: "Si se representa [[p_presion]], la intensidad crece con el cuadrado de su amplitud."
          en: "If [[p_presion]] is plotted, intensity grows with the square of its amplitude."
    likely_errors:
      - id: pr_error_signo
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asignar intensidad negativa porque la presión acústica instantánea es negativa."
          en: "Common error: assigning negative intensity because instantaneous acoustic pressure is negative."

  beta_nivel:
    magnitude_type: logarithmic_level
    semantic_role:
      es: Nivel de intensidad sonora en decibelios - escala logarítmica de percepción auditiva.
      en: Sound intensity level in decibels - logarithmic scale of auditory perception.
    next_step_rules:
      - id: bn_next_comparar
        when: "true"
        status: ok
        text:
          es: "Compara con referencias cotidianas: conversación 60 dB, tráfico 80 dB, concierto rock 110 dB."
          en: "Compare with everyday references: conversation 60 dB, traffic 80 dB, rock concert 110 dB."
      - id: bn_next_seguridad
        when: "true"
        status: ok
        text:
          es: "Evalúa necesidad de protección auditiva según normativas de seguridad laboral."
          en: "Evaluate need for hearing protection according to occupational safety regulations."
    summary_rules:
      - id: bn_summary_negativo
        when: "beta_nivel < 0"
        status: ok
        text:
          es: "[[beta_nivel]] dB indica intensidad sub-umbral, imperceptible para el oído humano medio."
          en: "[[beta_nivel]] dB indicates sub-threshold intensity, imperceptible to average human ear."
      - id: bn_summary_susurro
        when: "beta_nivel >= 0 && beta_nivel < 30"
        status: ok
        text:
          es: "[[beta_nivel]] dB corresponde a sonidos muy débiles: susurros, hojas moviéndose."
          en: "[[beta_nivel]] dB corresponds to very weak sounds: whispers, rustling leaves."
      - id: bn_summary_conversacion
        when: "beta_nivel >= 30 && beta_nivel < 60"
        status: ok
        text:
          es: "[[beta_nivel]] dB es el rango de conversación normal y sonidos cotidianos domésticos."
          en: "[[beta_nivel]] dB is the range of normal conversation and everyday domestic sounds."
      - id: bn_summary_ruidoso
        when: "beta_nivel >= 60 && beta_nivel < 85"
        status: ok
        text:
          es: "[[beta_nivel]] dB corresponde a entornos ruidosos: tráfico, fábricas, vacuum. Prolongado, puede causar fatiga."
          en: "[[beta_nivel]] dB corresponds to noisy environments: traffic, factories, vacuum. Prolonged, can cause fatigue."
      - id: bn_summary_peligroso
        when: "beta_nivel >= 85 && beta_nivel < 120"
        status: warning
        text:
          es: "[[beta_nivel]] dB requiere protección auditiva por normativa de seguridad. Exposición prolongada causa daño permanente."
          en: "[[beta_nivel]] dB requires hearing protection by safety regulations. Prolonged exposure causes permanent damage."
      - id: bn_summary_dolor
        when: "beta_nivel >= 120"
        status: warning
        text:
          es: "[[beta_nivel]] dB alcanza umbral de dolor. Riesgo inmediato de daño auditivo."
          en: "[[beta_nivel]] dB reaches pain threshold. Immediate risk of hearing damage."
      - id: bn_summary_default
        when: "true"
        status: ok
        text:
          es: "El nivel [[beta_nivel]] dB describe la sensación subjetiva de sonoridad referida al umbral de audición."
          en: "Level [[beta_nivel]] dB describes the subjective sensation of loudness referenced to hearing threshold."
    physical_reading_rules:
      - id: bn_reading_factor10
        when: "true"
        status: ok
        text:
          es: "Cada 10 dB representa multiplicar la intensidad física por 10. De 60 a 70 dB hay 10 veces más potencia."
          en: "Each 10 dB represents multiplying physical intensity by 10. From 60 to 70 dB there is 10 times more power."
      - id: bn_reading_factor2
        when: "true"
        status: ok
        text:
          es: "Aproximadamente cada 3 dB representa el doble de intensidad física. +3 dB ≈ ×2 en intensidad."
          en: "Approximately every 3 dB represents double physical intensity. +3 dB ≈ ×2 in intensity."
      - id: bn_reading_default
        when: "true"
        status: ok
        text:
          es: "La escala logarítmica comprime el enorme rango dinámico de la audición humana (factor 10¹³) en valores manejables."
          en: "The logarithmic scale compresses the enormous dynamic range of human hearing (factor 10¹³) into manageable values."
    coherence_rules:
      - id: bn_coherence_positividad
        when: "I_intensidad <= 0"
        status: error
        text:
          es: "La intensidad debe ser positiva para calcular el nivel en decibelios."
          en: "Intensity must be positive to calculate level in decibels."
      - id: bn_coherence_default
        when: "true"
        status: ok
        text:
          es: "Nivel calculado consistente con intensidad de entrada."
          en: "Calculated level consistent with input intensity."
    model_validity_rules:
      - id: bn_validity_default
        when: "true"
        status: ok
        text:
          es: "La escala en dB es válida para cualquier intensidad positiva."
          en: "The dB scale is valid for any positive intensity."
    graph_rules:
      - id: bn_graph_escala
        when: "true"
        status: ok
        text:
          es: "La representación gráfica típica usa escala logarítmica para abarcar el enorme rango de intensidades."
          en: "Typical graphical representation uses logarithmic scale to cover the enormous range of intensities."
      - id: bn_graph_default
        when: "true"
        status: ok
        text:
          es: "Los niveles en dB permiten comparar visualmente intensidades que difieren en órdenes de magnitud."
          en: "Levels in dB allow visual comparison of intensities differing by orders of magnitude."
    likely_errors:
      - id: bn_error_doble_10dB
        when: "true"
        status: warning
        text:
          es: "Error común: pensar que 10 dB es el doble. En realidad, 10 dB es 10 veces la intensidad. El doble es aproximadamente 3 dB."
          en: "Common error: thinking 10 dB is double. In reality, 10 dB is 10 times the intensity. Double is approximately 3 dB."
      - id: bn_error_suma_lineal
        when: "true"
        status: warning
        text:
          es: "Error típico: sumar dB linealmente. Dos fuentes de 60 dB juntas dan 63 dB, no 120 dB."
          en: "Typical error: adding dB linearly. Two 60 dB sources together give 63 dB, not 120 dB."
      - id: bn_error_default
        when: "true"
        status: ok
        text:
          es: "Verifica que I₀ = 10⁻¹² W/m² es el umbral de referencia estándar."
          en: "Verify that I₀ = 10⁻¹² W/m² is the standard reference threshold."

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
