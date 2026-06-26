const e=`version: "5.0"
id: "dispersion-y-atenuacion-en-solidos_interp"
leaf_id: "dispersion-y-atenuacion-en-solidos"
nombre:
  es: "Interpretación de dispersión y atenuación en sólidos"
  en: "Interpretation of dispersion and attenuation in solids"
scope:
  area: "fisica-clasica"
  bloque: "ondas"
  subbloque: "ondas-mecanicas"
  parent_id: "ondas-en-solidos"
  ruta_relativa: "fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos"
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es:
      calculator: "Calculadora"
      graph: "Gráfico"
      interpretation: "Interpretación"
    en:
      calculator: "Calculator"
      graph: "Graph"
      interpretation: "Interpretation"
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_calculator_inputs: 4
    max_graph_variables: 3
dependencies:
  formulas:
    - atenuacion_exponencial
    - longitud_atenuacion
    - perdida_db
    - dependencia_frecuencia
    - relacion_dispersion
  magnitudes:
    - alpha
    - A0
    - A
    - x
    - f
    - v_g
    - v_f
    - L_d
    - L_db
    - alpha_0
    - f_0
    - n
global_context:
  physical_domain:
    es: "Propagación de ondas mecánicas en medios sólidos con pérdidas"
    en: "Mechanical wave propagation in lossy solid media"
  axis_convention:
    es: "Distancia x positiva en dirección de propagación de la onda"
    en: "Distance x positive in wave propagation direction"
  standard_assumptions:
    es:
      - "Medio homogéneo e isótropo"
      - "Ondas planas o aproximación de haz paralelo"
      - "Atenuación exponencial simple"
    en:
      - "Homogeneous and isotropic medium"
      - "Plane waves or parallel beam approximation"
      - "Simple exponential attenuation"
  standard_warnings:
    es:
      - "No incluye dispersión geométrica"
      - "Asume alpha constante con la distancia"
      - "Válido solo para rangos limitados de frecuencia"
    en:
      - "Does not include geometric dispersion"
      - "Assumes alpha constant with distance"
      - "Valid only for limited frequency ranges"
result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: "Resumen"
      en: "Summary"
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
      es: "Coherencia"
      en: "Coherence"
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
  A:
    magnitude_type: "derived"
    semantic_role:
      es: "Amplitud atenuada de la onda"
      en: "Attenuated wave amplitude"
    summary_rules:
      - id: "A_summary_atenuada"
        when: "A < A0"
        status: "ok"
        text:
          es: "[[A]] ≈ {{A}} Pa indica la amplitud después de la atenuación. Este resultado describe cómo la señal se debilita según [[alpha]] y [[x]]."
          en: "[[A]] ≈ {{A}} Pa indicates the amplitude after attenuation. This result describes how the signal weakens according to [[alpha]] and [[x]]."
      - id: "A_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[A]] representa la amplitud resultante. Este valor resume el efecto combinado de atenuación del material y distancia recorrida."
          en: "[[A]] represents the resulting amplitude. This value summarizes the combined effect of material attenuation and traveled distance."
    physical_reading_rules:
      - id: "A_reading_decaimiento"
        when: "A < A0 * 0.5"
        status: "warning"
        text:
          es: "La amplitud ha caído por debajo del 50% de [[A0]]. Esto indica una atenuación significativa que puede limitar la detección."
          en: "Amplitude has fallen below 50% of [[A0]]. This indicates significant attenuation that may limit detection."
      - id: "A_reading_normal"
        when: "true"
        status: "ok"
        text:
          es: "La relación [[A]]/[[A0]] cuantifica la fracción de energía remanente después de propagarse [[x]] metros."
          en: "The [[A]]/[[A0]] ratio quantifies the remaining energy fraction after propagating [[x]] meters."
    coherence_rules:
      - id: "A_coherence_negativa"
        when: "A < 0"
        status: "error"
        text:
          es: "La amplitud no puede ser negativa. Revisa los signos en la ecuación exponencial."
          en: "Amplitude cannot be negative. Check signs in the exponential equation."
      - id: "A_coherence_mayor_A0"
        when: "A > A0"
        status: "error"
        text:
          es: "La amplitud no puede aumentar por atenuación. Verifica si [[alpha]] es positivo."
          en: "Amplitude cannot increase due to attenuation. Verify that [[alpha]] is positive."
      - id: "A_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La amplitud es coherente con el modelo de atenuación exponencial."
          en: "Amplitude is coherent with the exponential attenuation model."
    model_validity_rules:
      - id: "A_valididad_cero"
        when: "A == 0"
        status: "warning"
        text:
          es: "Amplitud cero indica atenuación completa. El modelo puede no ser válido para distancias mayores."
          en: "Zero amplitude indicates complete attenuation. The model may not be valid for larger distances."
      - id: "A_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "El modelo es válido mientras el medio sea homogéneo y [[alpha]] constante."
          en: "The model is valid as long as the medium is homogeneous and [[alpha]] is constant."
    graph_rules:
      - id: "A_graph_exponencial"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico A vs x, el punto debe estar sobre la curva exponencial decreciente."
          en: "In the A vs x graph, the point should lie on the decreasing exponential curve."
    likely_errors:
      - id: "A_error_logaritmo"
        when: "true"
        status: "warning"
        text:
          es: "Error común: usar logaritmo natural en lugar de logaritmo base 10 para cálculos en dB."
          en: "Common mistake: using natural logarithm instead of base-10 logarithm for dB calculations."
      - id: "A_error_dispersion"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: olvidar incluir la dispersión geométrica en la atenuación total."
          en: "Typical mistake: forgetting to include geometric dispersion in total attenuation."
    next_step_rules:
      - id: "A_next_alpha"
        when: "true"
        status: "ok"
        text:
          es: "Calcula [[alpha]] si conoces [[A]], [[A0]] y [[x]]. Compara con valores tabulados del material."
          en: "Calculate [[alpha]] if you know [[A]], [[A0]] and [[x]]. Compare with tabulated values for the material."
  alpha:
    magnitude_type: "fundamental"
    semantic_role:
      es: "Coeficiente de atenuación del material"
      en: "Material attenuation coefficient"
    summary_rules:
      - id: "alpha_summary_propiedad"
        when: "alpha > 0"
        status: "ok"
        text:
          es: "[[alpha]] ≈ {{alpha}} Np/m indica la propiedad intrínseca del material. Este resultado describe cuán rápido se atenúa la onda."
          en: "[[alpha]] ≈ {{alpha}} Np/m indicates the intrinsic material property. This result describes how quickly the wave attenuates."
      - id: "alpha_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[alpha]] caracteriza las pérdidas del material. Este valor depende de la frecuencia y la microestructura."
          en: "[[alpha]] characterizes the material losses. This value depends on frequency and microstructure."
    physical_reading_rules:
      - id: "alpha_reading_alto"
        when: "alpha > 10"
        status: "warning"
        text:
          es: "[[alpha]] alto indica un material muy absorbente. La penetración será limitada a cortas distancias."
          en: "High [[alpha]] indicates a highly absorbent material. Penetration will be limited to short distances."
      - id: "alpha_reading_bajo"
        when: "alpha < 1"
        status: "ok"
        text:
          es: "[[alpha]] bajo indica un material con bajas pérdidas, adecuado para inspección de grandes espesores."
          en: "Low [[alpha]] indicates a low-loss material, suitable for thick section inspection."
      - id: "alpha_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "El valor de [[alpha]] determina la longitud de atenuación [[L_d]] = 1/[[alpha]]."
          en: "The value of [[alpha]] determines the attenuation length [[L_d]] = 1/[[alpha]]."
    coherence_rules:
      - id: "alpha_coherence_negativo"
        when: "alpha < 0"
        status: "error"
        text:
          es: "El coeficiente de atenuación no puede ser negativo. Revisa la ecuación de cálculo."
          en: "The attenuation coefficient cannot be negative. Check the calculation equation."
      - id: "alpha_coherence_cero"
        when: "alpha == 0"
        status: "warning"
        text:
          es: "[[alpha]] cero indica medio sin pérdidas, lo cual es raro en materiales reales."
          en: "Zero [[alpha]] indicates lossless medium, which is rare in real materials."
      - id: "alpha_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "El coeficiente es coherente con las pérdidas esperadas en el tipo de material."
          en: "The coefficient is coherent with expected losses for the material type."
    model_validity_rules:
      - id: "alpha_valididad_frecuencia"
        when: "true"
        status: "warning"
        text:
          es: "Recuerda que [[alpha]] varía con la frecuencia. Este valor es válido solo para la [[f]] usada."
          en: "Remember that [[alpha]] varies with frequency. This value is valid only for the [[f]] used."
      - id: "alpha_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "El modelo asume [[alpha]] constante con la distancia, válido para medios homogéneos."
          en: "The model assumes [[alpha]] constant with distance, valid for homogeneous media."
    graph_rules:
      - id: "alpha_graph_pendiente"
        when: "true"
        status: "ok"
        text:
          es: "En escala logarítmica, [[alpha]] es la pendiente de la recta A vs x."
          en: "On logarithmic scale, [[alpha]] is the slope of the A vs x line."
    likely_errors:
      - id: "alpha_error_unidades"
        when: "true"
        status: "warning"
        text:
          es: "Error común: confundir Np/m con dB/m. 1 Np = 8.686 dB."
          en: "Common mistake: confusing Np/m with dB/m. 1 Np = 8.686 dB."
      - id: "alpha_error_constante"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: asumir [[alpha]] constante con la frecuencia sin verificar experimentalmente."
          en: "Typical mistake: assuming [[alpha]] constant with frequency without experimental verification."
    next_step_rules:
      - id: "alpha_next_Ld"
        when: "true"
        status: "ok"
        text:
          es: "Calcula la longitud de atenuación [[L_d]] = 1/[[alpha]] para evaluar la penetración máxima."
          en: "Calculate the attenuation length [[L_d]] = 1/[[alpha]] to evaluate maximum penetration."
  L_d:
    magnitude_type: "derived"
    semantic_role:
      es: "Longitud característica de atenuación"
      en: "Characteristic attenuation length"
    summary_rules:
      - id: "Ld_summary_escala"
        when: "L_d > 0"
        status: "ok"
        text:
          es: "[[L_d]] ≈ {{L_d}} m indica la distancia característica. Este resultado describe la escala de atenuación del material."
          en: "[[L_d]] ≈ {{L_d}} m indicates the characteristic distance. This result describes the attenuation scale of the material."
      - id: "Ld_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[L_d]] es inversamente proporcional a [[alpha]]. Este valor resume qué tan lejos penetra la onda."
          en: "[[L_d]] is inversely proportional to [[alpha]]. This value summarizes how far the wave penetrates."
    physical_reading_rules:
      - id: "Ld_reading_corta"
        when: "L_d < 0.01"
        status: "warning"
        text:
          es: "[[L_d]] muy corto indica atenuación muy fuerte. La onda se debilita rápidamente en pocos milímetros."
          en: "Very short [[L_d]] indicates very strong attenuation. The wave weakens rapidly in few millimeters."
      - id: "Ld_reading_larga"
        when: "L_d > 1"
        status: "ok"
        text:
          es: "[[L_d]] largo indica bajas pérdidas. La onda puede propagarse varios metros con atenuación moderada."
          en: "Long [[L_d]] indicates low losses. The wave can propagate several meters with moderate attenuation."
      - id: "Ld_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "A distancia [[L_d]], la amplitud se reduce al 37% del valor inicial."
          en: "At distance [[L_d]], amplitude reduces to 37% of the initial value."
    coherence_rules:
      - id: "Ld_coherence_negativo"
        when: "L_d < 0"
        status: "error"
        text:
          es: "La longitud de atenuación no puede ser negativa. Revisa el cálculo de 1/[[alpha]]."
          en: "Attenuation length cannot be negative. Check the calculation of 1/[[alpha]]."
      - id: "Ld_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La longitud es coherente con el coeficiente de atenuación del material."
          en: "The length is coherent with the material attenuation coefficient."
    model_validity_rules:
      - id: "Ld_valididad_homogeneo"
        when: "true"
        status: "warning"
        text:
          es: "Válido solo si el material es homogéneo. Las heterogeneidades cambian [[L_d]] localmente."
          en: "Valid only if the material is homogeneous. Heterogeneities change [[L_d]] locally."
      - id: "Ld_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "El modelo asume [[L_d]] constante, válido para medios uniformes."
          en: "The model assumes constant [[L_d]], valid for uniform media."
    graph_rules:
      - id: "Ld_graph_1e"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico, [[L_d]] es donde A = [[A0]]/e (37% del valor inicial)."
          en: "In the graph, [[L_d]] is where A = [[A0]]/e (37% of initial value)."
    likely_errors:
      - id: "Ld_error_profundidad"
        when: "true"
        status: "warning"
        text:
          es: "Error común: confundir [[L_d]] con la profundidad máxima de detección del equipo."
          en: "Common mistake: confusing [[L_d]] with maximum detection depth of the equipment."
      - id: "Ld_error_constante"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: asumir [[L_d]] independiente de la frecuencia cuando [[alpha]] varía con f."
          en: "Typical mistake: assuming [[L_d]] independent of frequency when [[alpha]] varies with f."
    next_step_rules:
      - id: "Ld_next_penetracion"
        when: "true"
        status: "ok"
        text:
          es: "Usa [[L_d]] para estimar la profundidad útil de inspección: aproximadamente 3×[[L_d]]."
          en: "Use [[L_d]] to estimate useful inspection depth: approximately 3×[[L_d]]."
  L_db:
    magnitude_type: "derived"
    semantic_role:
      es: "Pérdida por atenuación en decibelios"
      en: "Attenuation loss in decibels"
    summary_rules:
      - id: "Ldb_summary_logaritmica"
        when: "L_db > 0"
        status: "ok"
        text:
          es: "[[L_db]] ≈ {{L_db}} dB indica la pérdida logarítmica. Este resultado describe la atenuación en escala práctica."
          en: "[[L_db]] ≈ {{L_db}} dB indicates the logarithmic loss. This result describes attenuation on a practical scale."
      - id: "Ldb_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[L_db]] cuantifica la pérdida en decibelios. Este valor facilita comparaciones con especificaciones técnicas."
          en: "[[L_db]] quantifies the loss in decibels. This value facilitates comparisons with technical specifications."
    physical_reading_rules:
      - id: "Ldb_reading_alta"
        when: "L_db > 40"
        status: "warning"
        text:
          es: "Pérdida mayor a 40 dB indica atenuación muy fuerte. La señal será difícil de detectar."
          en: "Loss greater than 40 dB indicates very strong attenuation. The signal will be difficult to detect."
      - id: "Ldb_reading_modera"
        when: "L_db < 20"
        status: "ok"
        text:
          es: "Pérdida moderada (< 20 dB). La señal mantiene suficiente intensidad para detección fiable."
          en: "Moderate loss (< 20 dB). The signal maintains sufficient intensity for reliable detection."
      - id: "Ldb_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "Cada 20 dB de pérdida reduce la amplitud a un décimo del valor anterior."
          en: "Every 20 dB of loss reduces amplitude to one-tenth of the previous value."
    coherence_rules:
      - id: "Ldb_coherence_negativo"
        when: "L_db < 0"
        status: "error"
        text:
          es: "La pérdida en dB no puede ser negativa. Revisa el orden de [[A0]]/[[A]]."
          en: "Loss in dB cannot be negative. Check the order of [[A0]]/[[A]]."
      - id: "Ldb_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La pérdida es coherente con la relación de amplitudes medida."
          en: "The loss is coherent with the measured amplitude ratio."
    model_validity_rules:
      - id: "Ldb_valididad_amplitud"
        when: "true"
        status: "warning"
        text:
          es: "Válido solo para amplitudes positivas. No aplica si hay inversión de fase."
          en: "Valid only for positive amplitudes. Does not apply if there is phase inversion."
      - id: "Ldb_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "El modelo es válido mientras las amplitudes sean medibles y positivas."
          en: "The model is valid as long as amplitudes are measurable and positive."
    graph_rules:
      - id: "Ldb_graph_lineal"
        when: "true"
        status: "ok"
        text:
          es: "En escala dB vs distancia, la atenuación exponencial aparece como línea recta."
          en: "On dB vs distance scale, exponential attenuation appears as a straight line."
    likely_errors:
      - id: "Ldb_error_10_20"
        when: "true"
        status: "warning"
        text:
          es: "Error común: usar 10×log10 en lugar de 20×log10 para amplitud (10× es para potencia)."
          en: "Common mistake: using 10×log10 instead of 20×log10 for amplitude (10× is for power)."
      - id: "Ldb_error_natural"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: usar logaritmo natural en lugar de logaritmo base 10."
          en: "Typical mistake: using natural logarithm instead of base-10 logarithm."
    next_step_rules:
      - id: "Ldb_next_frecuencia"
        when: "true"
        status: "ok"
        text:
          es: "Verifica cómo varía [[L_db]] con la frecuencia para optimizar la selección del transductor."
          en: "Verify how [[L_db]] varies with frequency to optimize transducer selection."
  f:
    magnitude_type: "parameter"
    semantic_role:
      es: "Frecuencia de la onda ultrasónica"
      en: "Frequency of the ultrasonic wave"
    summary_rules:
      - id: "f_summary_parametro"
        when: "f > 0"
        status: "ok"
        text:
          es: "[[f]] ≈ {{f}} Hz indica la frecuencia operativa. Este resultado describe el compromiso resolución-penetración."
          en: "[[f]] ≈ {{f}} Hz indicates the operating frequency. This result describes the resolution-penetration trade-off."
      - id: "f_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[f]] determina tanto la resolución espacial como la atenuación del material."
          en: "[[f]] determines both spatial resolution and material attenuation."
    physical_reading_rules:
      - id: "f_reading_alta"
        when: "f > 10e6"
        status: "warning"
        text:
          es: "Frecuencia alta (> 10 MHz) da mejor resolución pero mayor atenuación."
          en: "High frequency (> 10 MHz) gives better resolution but higher attenuation."
      - id: "f_reading_baja"
        when: "f < 1e6"
        status: "ok"
        text:
          es: "Frecuencia baja (< 1 MHz) da mayor penetración pero menor resolución."
          en: "Low frequency (< 1 MHz) gives greater penetration but lower resolution."
      - id: "f_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "La frecuencia afecta a [[alpha]] según la relación empírica del material."
          en: "Frequency affects [[alpha]] according to the empirical relation of the material."
    coherence_rules:
      - id: "f_coherence_negativo"
        when: "f < 0"
        status: "error"
        text:
          es: "La frecuencia no puede ser negativa. Revisa el valor ingresado."
          en: "Frequency cannot be negative. Check the entered value."
      - id: "f_coherence_cero"
        when: "f == 0"
        status: "error"
        text:
          es: "Frecuencia cero no corresponde a una onda. Verifica el valor."
          en: "Zero frequency does not correspond to a wave. Verify the value."
      - id: "f_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La frecuencia es coherente con el rango de ensayos no destructivos."
          en: "The frequency is coherent with non-destructive testing range."
    model_validity_rules:
      - id: "f_valididad_dispersion"
        when: "true"
        status: "warning"
        text:
          es: "A frecuencias muy altas pueden aparecer efectos de dispersión no considerados."
          en: "At very high frequencies, dispersion effects not considered may appear."
      - id: "f_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "El modelo es válido en el rango de frecuencias típicas de END (0.5-20 MHz)."
          en: "The model is valid in the typical NDT frequency range (0.5-20 MHz)."
    graph_rules:
      - id: "f_graph_alpha"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico alpha vs f, el punto debe estar sobre la curva de potencia."
          en: "In the alpha vs f graph, the point should lie on the power curve."
    likely_errors:
      - id: "f_error_constante"
        when: "true"
        status: "warning"
        text:
          es: "Error común: asumir [[alpha]] independiente de [[f]] cuando en realidad alpha ∝ f^n."
          en: "Common mistake: assuming [[alpha]] independent of [[f]] when actually alpha ∝ f^n."
      - id: "f_error_resolucion"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: no considerar que la resolución espacial ≈ longitud de onda/2."
          en: "Typical mistake: not considering that spatial resolution ≈ wavelength/2."
    next_step_rules:
      - id: "f_next_optimizacion"
        when: "true"
        status: "ok"
        text:
          es: "Optimiza [[f]] balanceando resolución requerida vs atenuación aceptable."
          en: "Optimize [[f]] balancing required resolution vs acceptable attenuation."
  v_g:
    magnitude_type: "derived"
    semantic_role:
      es: "Velocidad de grupo"
      en: "Group velocity"
    summary_rules:
      - id: "vg_summary_energia"
        when: "v_g > 0"
        status: "ok"
        text:
          es: "[[v_g]] ≈ {{v_g}} m/s indica la velocidad de transporte de energía. Este resultado describe la propagación de pulsos."
          en: "[[v_g]] ≈ {{v_g}} m/s indicates the energy transport velocity. This result describes pulse propagation."
      - id: "vg_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[v_g]] determina cómo viaja la información en medios dispersivos."
          en: "[[v_g]] determines how information travels in dispersive media."
    physical_reading_rules:
      - id: "vg_reading_dispersion"
        when: "v_g != v_f"
        status: "warning"
        text:
          es: "[[v_g]] ≠ [[v_f]] indica dispersión presente. El pulso se distorsionará al propagarse."
          en: "[[v_g]] ≠ [[v_f]] indicates dispersion present. The pulse will distort as it propagates."
      - id: "vg_reading_nodispersion"
        when: "v_g == v_f"
        status: "ok"
        text:
          es: "[[v_g]] = [[v_f]] indica medio no dispersivo. El pulso mantiene su forma."
          en: "[[v_g]] = [[v_f]] indicates non-dispersive medium. The pulse maintains its shape."
      - id: "vg_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "La diferencia [[v_f]] - [[v_g]] cuantifica la dispersión del medio."
          en: "The difference [[v_f]] - [[v_g]] quantifies the dispersion of the medium."
    coherence_rules:
      - id: "vg_coherence_negativo"
        when: "v_g < 0"
        status: "error"
        text:
          es: "La velocidad de grupo no puede ser negativa. Revisa los signos en la ecuación."
          en: "Group velocity cannot be negative. Check signs in the equation."
      - id: "vg_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La velocidad es coherente con las propiedades elásticas del material."
          en: "The velocity is coherent with the elastic properties of the material."
    model_validity_rules:
      - id: "vg_valididad_derivada"
        when: "true"
        status: "warning"
        text:
          es: "Requiere conocer dv_f/df. Válido solo si la relación de dispersión es suave."
          en: "Requires knowing dv_f/df. Valid only if the dispersion relation is smooth."
      - id: "vg_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "El modelo es válido para dispersión débil o moderada."
          en: "The model is valid for weak or moderate dispersion."
    graph_rules:
      - id: "vg_graph_dispersion"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico v vs f, [[v_g]] es la pendiente de la relación ω-k."
          en: "In the v vs f graph, [[v_g]] is the slope of the ω-k relation."
    likely_errors:
      - id: "vg_error_confusion"
        when: "true"
        status: "warning"
        text:
          es: "Error común: usar [[v_f]] para calcular tiempo de llegada de pulsos en medios dispersivos."
          en: "Common mistake: using [[v_f]] to calculate pulse arrival time in dispersive media."
      - id: "vg_error_lineal"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: asumir relación lineal entre [[v_g]] y [[v_f]] sin verificar dv_f/df."
          en: "Typical mistake: assuming linear relationship between [[v_g]] and [[v_f]] without verifying dv_f/df."
    next_step_rules:
      - id: "vg_next_distorsion"
        when: "true"
        status: "ok"
        text:
          es: "Evalúa la distorsión del pulso usando la diferencia [[v_f]] - [[v_g]]."
          en: "Evaluate pulse distortion using the difference [[v_f]] - [[v_g]]."
  v_f:
    magnitude_type: "derived"
    semantic_role:
      es: "Velocidad de fase"
      en: "Phase velocity"
    summary_rules:
      - id: "vf_summary_fase"
        when: "v_f > 0"
        status: "ok"
        text:
          es: "[[v_f]] ≈ {{v_f}} m/s indica la velocidad de propagación de fase. Este resultado describe la propagación de planos constantes."
          en: "[[v_f]] ≈ {{v_f}} m/s indicates the phase propagation velocity. This result describes constant plane propagation."
      - id: "vf_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[v_f]] es importante para fenómenos de interferencia y resonancia."
          en: "[[v_f]] is important for interference and resonance phenomena."
    physical_reading_rules:
      - id: "vf_reading_dependencia"
        when: "true"
        status: "warning"
        text:
          es: "[[v_f]] puede variar con [[f]] en medios dispersivos, afectando la longitud de onda."
          en: "[[v_f]] can vary with [[f]] in dispersive media, affecting wavelength."
      - id: "vf_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "La longitud de onda λ = [[v_f]]/[[f]] depende de la velocidad de fase."
          en: "The wavelength λ = [[v_f]]/[[f]] depends on phase velocity."
    coherence_rules:
      - id: "vf_coherence_negativo"
        when: "v_f < 0"
        status: "error"
        text:
          es: "La velocidad de fase no puede ser negativa. Revisa el cálculo."
          en: "Phase velocity cannot be negative. Check the calculation."
      - id: "vf_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La velocidad es coherente con las propiedades del medio material."
          en: "The velocity is coherent with the material medium properties."
    model_validity_rules:
      - id: "vf_valididad_frecuencia"
        when: "true"
        status: "warning"
        text:
          es: "Válido solo cuando la dependencia con [[f]] es conocida y suave."
          en: "Valid only when the dependence on [[f]] is known and smooth."
      - id: "vf_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "El modelo asume relación de dispersión bien comportada."
          en: "The model assumes well-behaved dispersion relation."
    graph_rules:
      - id: "vf_graph_curva"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico v_f vs f, la curva muestra la dispersión del material."
          en: "In the v_f vs f graph, the curve shows the material dispersion."
    likely_errors:
      - id: "vf_error_longitud"
        when: "true"
        status: "warning"
        text:
          es: "Error común: calcular longitud de onda con [[v_g]] en lugar de [[v_f]]."
          en: "Common mistake: calculating wavelength with [[v_g]] instead of [[v_f]]."
      - id: "vf_error_constante"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: asumir [[v_f]] constante cuando hay dispersión significativa."
          en: "Typical mistake: assuming [[v_f]] constant when there is significant dispersion."
    next_step_rules:
      - id: "vf_next_lambda"
        when: "true"
        status: "ok"
        text:
          es: "Calcula la longitud de onda λ = [[v_f]]/[[f]] para evaluar resolución espacial."
          en: "Calculate the wavelength λ = [[v_f]]/[[f]] to evaluate spatial resolution."
  A0:
    magnitude_type: "parameter"
    semantic_role:
      es: "Amplitud inicial de la onda"
      en: "Initial wave amplitude"
    summary_rules:
      - id: "A0_summary_referencia"
        when: "A0 > 0"
        status: "ok"
        text:
          es: "[[A0]] ≈ {{A0}} Pa indica la amplitud de referencia. Este resultado describe la condición inicial del sistema."
          en: "[[A0]] ≈ {{A0}} Pa indicates the reference amplitude. This result describes the initial condition of the system."
      - id: "A0_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[A0]] es la amplitud base para calcular pérdidas. Este valor depende de la fuente ultrasónica."
          en: "[[A0]] is the base amplitude for calculating losses. This value depends on the ultrasonic source."
    physical_reading_rules:
      - id: "A0_reading_fuente"
        when: "true"
        status: "ok"
        text:
          es: "El valor de [[A0]] determina la potencia inicial disponible para penetrar el material."
          en: "The value of [[A0]] determines the initial power available to penetrate the material."
    coherence_rules:
      - id: "A0_coherence_negativo"
        when: "A0 < 0"
        status: "error"
        text:
          es: "La amplitud inicial no puede ser negativa. Revisa los datos de entrada."
          en: "Initial amplitude cannot be negative. Check input data."
      - id: "A0_coherence_cero"
        when: "A0 == 0"
        status: "error"
        text:
          es: "Amplitud cero indica que no hay onda inicial. El modelo no tiene sentido sin [[A0]]."
          en: "Zero amplitude indicates no initial wave. The model is meaningless without [[A0]]."
      - id: "A0_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La amplitud inicial es coherente con las especificaciones del transductor."
          en: "The initial amplitude is coherent with transducer specifications."
    model_validity_rules:
      - id: "A0_valididad_medicion"
        when: "true"
        status: "ok"
        text:
          es: "Válido como referencia en el punto x = 0 o en material sin atenuación."
          en: "Valid as reference at point x = 0 or in non-attenuating material."
    graph_rules:
      - id: "A0_graph_origen"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico A vs x, [[A0]] es el valor en el origen (intercepto con el eje y)."
          en: "In the A vs x graph, [[A0]] is the value at the origin (y-intercept)."
    likely_errors:
      - id: "A0_error_transductor"
        when: "true"
        status: "warning"
        text:
          es: "Error común: usar la amplitud medida en el transductor en lugar de en el medio."
          en: "Common mistake: using amplitude measured at the transducer instead of in the medium."
    next_step_rules:
      - id: "A0_next_calibracion"
        when: "true"
        status: "ok"
        text:
          es: "Verifica la calibración usando un bloque patrón del mismo material."
          en: "Verify calibration using a reference block of the same material."
  x:
    magnitude_type: "parameter"
    semantic_role:
      es: "Distancia de propagación"
      en: "Propagation distance"
    summary_rules:
      - id: "x_summary_distancia"
        when: "x > 0"
        status: "ok"
        text:
          es: "[[x]] ≈ {{x}} m indica la distancia recorrida. Este resultado describe el espesor atravesado por la onda."
          en: "[[x]] ≈ {{x}} m indicates the traveled distance. This result describes the thickness traversed by the wave."
      - id: "x_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[x]] determina el factor de atenuación acumulada. A mayor distancia, menor amplitud."
          en: "[[x]] determines the accumulated attenuation factor. Greater distance means lower amplitude."
    physical_reading_rules:
      - id: "x_reading_profundidad"
        when: "x > 0.1"
        status: "ok"
        text:
          es: "Distancia considerable para inspección industrial. La atenuación será significativa."
          en: "Considerable distance for industrial inspection. Attenuation will be significant."
    coherence_rules:
      - id: "x_coherence_negativo"
        when: "x < 0"
        status: "error"
        text:
          es: "La distancia no puede ser negativa. Revisa el sistema de coordenadas."
          en: "Distance cannot be negative. Check the coordinate system."
      - id: "x_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La distancia es coherente con la geometría de la pieza inspeccionada."
          en: "The distance is coherent with the geometry of the inspected part."
    model_validity_rules:
      - id: "x_valididad_homogeneo"
        when: "true"
        status: "warning"
        text:
          es: "Válido solo si el medio es homogéneo en toda la distancia [[x]]."
          en: "Valid only if the medium is homogeneous throughout the entire distance [[x]]."
    graph_rules:
      - id: "x_graph_eje"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico, [[x]] es la coordenada horizontal que representa la profundidad."
          en: "In the graph, [[x]] is the horizontal coordinate representing depth."
    likely_errors:
      - id: "x_error_reflexiones"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: no considerar reflexiones múltiples en piezas delgadas."
          en: "Typical mistake: not considering multiple reflections in thin parts."
    next_step_rules:
      - id: "x_next_penetracion"
        when: "true"
        status: "ok"
        text:
          es: "Evalúa la profundidad máxima de penetración usando [[L_d]]."
          en: "Evaluate maximum penetration depth using [[L_d]]."
  alpha_0:
    magnitude_type: "parameter"
    semantic_role:
      es: "Coeficiente de atenuación de referencia"
      en: "Reference attenuation coefficient"
    summary_rules:
      - id: "alpha0_summary_referencia"
        when: "alpha_0 > 0"
        status: "ok"
        text:
          es: "[[alpha_0]] ≈ {{alpha_0}} Np/m indica el coeficiente base. Este resultado describe las pérdidas en frecuencia de referencia."
          en: "[[alpha_0]] ≈ {{alpha_0}} Np/m indicates the base coefficient. This result describes losses at reference frequency."
      - id: "alpha0_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[alpha_0]] es el punto de anclaje para modelar la dependencia con la frecuencia."
          en: "[[alpha_0]] is the anchor point for modeling frequency dependence."
    physical_reading_rules:
      - id: "alpha0_reading_alto"
        when: "alpha_0 > 10"
        status: "warning"
        text:
          es: "[[alpha_0]] alto indica material muy absorbente incluso en frecuencia de referencia."
          en: "High [[alpha_0]] indicates highly absorbent material even at reference frequency."
      - id: "alpha0_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "El valor de [[alpha_0]] sirve como base para estimar [[alpha]] a cualquier frecuencia."
          en: "The value of [[alpha_0]] serves as base for estimating [[alpha]] at any frequency."
    coherence_rules:
      - id: "alpha0_coherence_negativo"
        when: "alpha_0 < 0"
        status: "error"
        text:
          es: "El coeficiente de referencia no puede ser negativo. Revisa los datos experimentales."
          en: "The reference coefficient cannot be negative. Check experimental data."
      - id: "alpha0_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "El coeficiente es coherente con las mediciones en [[f_0]]."
          en: "The coefficient is coherent with measurements at [[f_0]]."
    model_validity_rules:
      - id: "alpha0_valididad_frecuencia"
        when: "true"
        status: "warning"
        text:
          es: "Válido solo en la frecuencia de referencia [[f_0]] y su entorno cercano."
          en: "Valid only at reference frequency [[f_0]] and its immediate vicinity."
    graph_rules:
      - id: "alpha0_graph_origen"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico alpha vs f, [[alpha_0]] es el valor en f = [[f_0]]."
          en: "In the alpha vs f graph, [[alpha_0]] is the value at f = [[f_0]]."
    likely_errors:
      - id: "alpha0_error_extrapolacion"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: extrapolar fuera del rango experimental donde se determinó [[alpha_0]]."
          en: "Typical mistake: extrapolating outside the experimental range where [[alpha_0]] was determined."
    next_step_rules:
      - id: "alpha0_next_dependencia"
        when: "true"
        status: "ok"
        text:
          es: "Usa [[alpha_0]] con el exponente [[n]] para predecir [[alpha]] a otras frecuencias."
          en: "Use [[alpha_0]] with exponent [[n]] to predict [[alpha]] at other frequencies."
  f_0:
    magnitude_type: "parameter"
    semantic_role:
      es: "Frecuencia de referencia"
      en: "Reference frequency"
    summary_rules:
      - id: "f0_summary_referencia"
        when: "f_0 > 0"
        status: "ok"
        text:
          es: "[[f_0]] ≈ {{f_0}} Hz indica la frecuencia de referencia para el modelo de atenuación."
          en: "[[f_0]] ≈ {{f_0}} Hz indicates the reference frequency for the attenuation model."
      - id: "f0_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[f_0]] normaliza la dependencia frecuencial de [[alpha]]."
          en: "[[f_0]] normalizes the frequency dependence of [[alpha]]."
    physical_reading_rules:
      - id: "f0_reading_default"
        when: "true"
        status: "ok"
        text:
          es: "El valor de [[f_0]] es arbitrario; se elige según conveniencia experimental."
          en: "The value of [[f_0]] is arbitrary; chosen for experimental convenience."
    coherence_rules:
      - id: "f0_coherence_negativo"
        when: "f_0 <= 0"
        status: "error"
        text:
          es: "La frecuencia de referencia debe ser positiva."
          en: "Reference frequency must be positive."
      - id: "f0_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "La frecuencia de referencia es coherente con el rango experimental."
          en: "Reference frequency is coherent with the experimental range."
    model_validity_rules:
      - id: "f0_valididad_default"
        when: "true"
        status: "ok"
        text:
          es: "Válido como punto de normalización para la ley de potencia."
          en: "Valid as normalization point for the power law."
    graph_rules:
      - id: "f0_graph_punto"
        when: "true"
        status: "ok"
        text:
          es: "En el gráfico alpha vs f, [[f_0]] marca el punto donde alpha = [[alpha_0]]."
          en: "In the alpha vs f graph, [[f_0]] marks the point where alpha = [[alpha_0]]."
    likely_errors:
      - id: "f0_error_resonancia"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: confundir [[f_0]] con la frecuencia de resonancia del material."
          en: "Typical mistake: confusing [[f_0]] with the material resonance frequency."
    next_step_rules:
      - id: "f0_next_rango"
        when: "true"
        status: "ok"
        text:
          es: "Verifica que [[f]] esté dentro del rango válido de extrapolación respecto a [[f_0]]."
          en: "Verify that [[f]] is within the valid extrapolation range relative to [[f_0]]."
  n:
    magnitude_type: "parameter"
    semantic_role:
      es: "Exponente de frecuencia"
      en: "Frequency exponent"
    summary_rules:
      - id: "n_summary_mecanismo"
        when: "n > 0"
        status: "ok"
        text:
          es: "[[n]] ≈ {{n}} indica el exponente de la ley de potencia. Este resultado revela el mecanismo de atenuación dominante."
          en: "[[n]] ≈ {{n}} indicates the power law exponent. This result reveals the dominant attenuation mechanism."
      - id: "n_summary_default"
        when: "true"
        status: "ok"
        text:
          es: "[[n]] caracteriza cómo varía [[alpha]] con la frecuencia."
          en: "[[n]] characterizes how [[alpha]] varies with frequency."
    physical_reading_rules:
      - id: "n_reading_mecanismo"
        when: "true"
        status: "ok"
        text:
          es: "n ≈ 1 indica viscosidad, n ≈ 2 indica scattering, n ≈ 4 indica scattering Rayleigh."
          en: "n ≈ 1 indicates viscosity, n ≈ 2 indicates scattering, n ≈ 4 indicates Rayleigh scattering."
    coherence_rules:
      - id: "n_coherence_negativo"
        when: "n <= 0"
        status: "error"
        text:
          es: "El exponente debe ser positivo para que [[alpha]] aumente con [[f]]."
          en: "The exponent must be positive for [[alpha]] to increase with [[f]]."
      - id: "n_coherence_default"
        when: "true"
        status: "ok"
        text:
          es: "El exponente es coherente con el mecanismo de atenuación esperado."
          en: "The exponent is coherent with the expected attenuation mechanism."
    model_validity_rules:
      - id: "n_valididad_rango"
        when: "true"
        status: "warning"
        text:
          es: "La ley de potencia es empírica; válida solo en el rango de frecuencias donde se ajustó."
          en: "The power law is empirical; valid only in the frequency range where it was fitted."
    graph_rules:
      - id: "n_graph_pendiente"
        when: "true"
        status: "ok"
        text:
          es: "En escala log-log, [[n]] es la pendiente de la recta alpha vs f."
          en: "On log-log scale, [[n]] is the slope of the alpha vs f line."
    likely_errors:
      - id: "n_error_universal"
        when: "true"
        status: "warning"
        text:
          es: "Error típico: asumir n = 1 para todos los materiales sin verificación experimental."
          en: "Typical mistake: assuming n = 1 for all materials without experimental verification."
    next_step_rules:
      - id: "n_next_prediccion"
        when: "true"
        status: "ok"
        text:
          es: "Usa [[n]] con [[alpha_0]] y [[f_0]] para predecir [[alpha]] a frecuencias diferentes."
          en: "Use [[n]] with [[alpha_0]] and [[f_0]] to predict [[alpha]] at different frequencies."
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
