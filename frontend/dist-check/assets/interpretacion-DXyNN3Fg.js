const e=`version: "1.0"
id: interp-efecto-doppler
leaf_id: efecto-doppler

nombre:
  es: Interpretacion de calculos del efecto Doppler
  en: Interpretation of Doppler effect calculations

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: sonido
  parent_id: sonido
  ruta_relativa: fisica-clasica/ondas/sonido/efecto-doppler

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
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
    max_sections: 2
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - doppler_general
    - doppler_fuente_movil
    - doppler_receptor_movil
    - desplazamiento_doppler
  magnitudes:
    - f_obs
    - f_fuente
    - v_sonido
    - v_fuente
    - v_receptor
    - delta_f

global_context:
  physical_domain:
    es: "Cambio de frecuencia percibida por movimiento relativo entre fuente sonora y receptor a traves de un medio material."
    en: "Change in perceived frequency due to relative motion between sound source and receiver through a material medium."
  axis_convention:
    es: "Convenio de signos estandar: v_receptor positivo cuando se mueve hacia la fuente; v_fuente positivo cuando se aleja del receptor."
    en: "Standard sign convention: v_receptor positive when moving toward source; v_fuente positive when moving away from receiver."
  standard_assumptions:
    - "Movimiento a lo largo de la linea fuente-receptor (efecto radial puro)"
    - "Velocidades subsonicas: v_fuente menor que v_sonido"
    - "Medio homogeneo en reposo respecto a la referencia de laboratorio"
  standard_warnings:
    - "El convenio de signos de v_fuente y v_receptor es opuesto: siempre verificar antes de sustituir"
    - "La formula Doppler clasica no es simetrica: fuente moviendose y receptor moviendose a la misma velocidad relativa dan frecuencias observadas distintas"
    - "Para angulo entre la linea de vision y la velocidad distinto de cero y de 180 grados, usar la componente radial de la velocidad"

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
      es: Lectura fisica
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
      es: Lectura del grafico
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

  f_obs:
    magnitude_type: frecuencia
    semantic_role:
      es: "Frecuencia que el receptor percibe efectivamente, modificada por el movimiento relativo entre fuente y receptor."
      en: "Frequency the receiver actually perceives, modified by the relative motion between source and receiver."
    summary_rules:
      - id: fobs_summary_mayor
        when: "f_obs > f_fuente"
        status: ok
        text:
          es: "[[f_obs]] mayor que [[f_fuente]]: la fuente y el receptor se acercan entre si. El sonido sube de tono al aproximarse el emisor o al avanzar el receptor hacia el sonido."
          en: "[[f_obs]] greater than [[f_fuente]]: source and receiver are approaching each other. Sound rises in pitch as the source approaches or the receiver moves toward the sound."
      - id: fobs_summary_menor
        when: "f_obs < f_fuente"
        status: ok
        text:
          es: "[[f_obs]] menor que [[f_fuente]]: la fuente y el receptor se alejan entre si. El sonido baja de tono al alejarse el emisor o al retroceder el receptor."
          en: "[[f_obs]] less than [[f_fuente]]: source and receiver are moving apart. Sound falls in pitch as the source recedes or the receiver moves away."
      - id: fobs_summary_igual
        when: "f_obs == f_fuente"
        status: ok
        text:
          es: "[[f_obs]] igual a [[f_fuente]]: no hay movimiento relativo radial entre fuente y receptor. Cualquier movimiento es puramente transversal o ambos estan en reposo."
          en: "[[f_obs]] equal to [[f_fuente]]: no radial relative motion between source and receiver. Any motion is purely transverse or both are at rest."
      - id: fobs_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_obs]] es el resultado del calculo Doppler y resume el estado de movimiento relativo entre fuente y receptor."
          en: "[[f_obs]] is the result of the Doppler calculation and summarises the relative motion state between source and receiver."
    physical_reading_rules:
      - id: fobs_reading_alta
        when: "f_obs > 1.5 * f_fuente"
        status: warning
        text:
          es: "Frecuencia observada superior a 1.5 veces la frecuencia de la fuente: la velocidad de acercamiento supera el 33 % de [[v_sonido]]. Verificar que las velocidades son subsonicas y que el convenio de signos es correcto."
          en: "Observed frequency above 1.5 times source frequency: approach speed exceeds 33% of [[v_sonido]]. Verify that velocities are subsonic and the sign convention is correct."
      - id: fobs_reading_baja
        when: "f_obs < 0.5 * f_fuente"
        status: ok
        text:
          es: "Frecuencia observada menor de la mitad de la frecuencia de la fuente: la fuente se aleja a mas del 50 % de [[v_sonido]], o el receptor se aleja rapidamente."
          en: "Observed frequency below half the source frequency: the source recedes faster than 50% of [[v_sonido]], or the receiver moves away rapidly."
      - id: fobs_reading_default
        when: "true"
        status: ok
        text:
          es: "La razon [[f_obs]] partido entre [[f_fuente]] determina directamente el factor de desplazamiento Doppler."
          en: "The ratio [[f_obs]] divided by [[f_fuente]] directly determines the Doppler shift factor."
    coherence_rules:
      - id: fobs_coherence_positiva
        when: "f_obs > 0"
        status: ok
        text:
          es: "[[f_obs]] positiva: coherente con una frecuencia fisica real."
          en: "Positive [[f_obs]]: coherent with a real physical frequency."
      - id: fobs_coherence_rango_audible
        when: "f_obs > 20 && f_obs < 20000"
        status: ok
        text:
          es: "[[f_obs]] en el rango audible (20 Hz a 20 kHz): el sonido puede ser percibido por el oido humano."
          en: "[[f_obs]] in the audible range (20 Hz to 20 kHz): the sound can be perceived by the human ear."
      - id: fobs_coherence_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[f_obs]] con los limites del rango de la aplicacion: para audio, debe estar entre 20 Hz y 20 kHz; para ultrasonidos medicos, entre 1 y 15 MHz."
          en: "Compare [[f_obs]] with the application range limits: for audio, it should be between 20 Hz and 20 kHz; for medical ultrasound, between 1 and 15 MHz."
    model_validity_rules:
      - id: fobs_validity_subsonica
        when: "true"
        status: warning
        text:
          es: "La formula Doppler clasica requiere [[v_fuente]] menor que [[v_sonido]]. Si la fuente supera la velocidad del sonido, se forma el cono de Mach y [[f_obs]] pierde significado fisico en la direccion delantera."
          en: "The classical Doppler formula requires [[v_fuente]] less than [[v_sonido]]. If the source exceeds the speed of sound, a Mach cone forms and [[f_obs]] loses physical meaning in the forward direction."
      - id: fobs_validity_radial
        when: "true"
        status: warning
        text:
          es: "Si el angulo entre la velocidad y la linea de vision no es cero ni 180 grados, solo la componente radial de la velocidad contribuye al efecto Doppler. Para angulos grandes, el efecto Doppler puede ser mucho menor de lo estimado con la velocidad total."
          en: "If the angle between the velocity and the line of sight is neither zero nor 180 degrees, only the radial component of velocity contributes to the Doppler effect. For large angles, the Doppler effect can be much smaller than estimated with the total velocity."
      - id: fobs_validity_default
        when: "true"
        status: ok
        text:
          es: "Para velocidades mucho menores que [[v_sonido]] y movimiento radial, la formula Doppler clasica es muy precisa."
          en: "For velocities much smaller than [[v_sonido]] and radial motion, the classical Doppler formula is very accurate."
    graph_rules:
      - id: fobs_graph_coord
        when: "true"
        status: ok
        text:
          es: "En un grafico [[f_obs]] frente a [[v_fuente]], la curva es una hiperbola con asintota vertical en [[v_fuente]] igual a [[v_sonido]] (fuente acercandose a velocidad sonica). La curva para receptor movil con fuente fija es lineal."
          en: "In a [[f_obs]] versus [[v_fuente]] graph, the curve is a hyperbola with a vertical asymptote at [[v_fuente]] equal to [[v_sonido]] (source approaching at sonic speed). The curve for a moving receiver with fixed source is linear."
      - id: fobs_graph_default
        when: "true"
        status: ok
        text:
          es: "La asimetria entre la curva de acercamiento y la de alejamiento es la huella de la asimetria fisica del efecto Doppler: la compresion de frentes de onda es geometricamente mas fuerte que su estiramiento."
          en: "The asymmetry between the approach and recession curves is the signature of the physical asymmetry of the Doppler effect: wavefront compression is geometrically stronger than stretching."
    likely_errors:
      - id: fobs_error_signos
        when: "true"
        status: warning
        text:
          es: "Error mas frecuente: signo incorrecto en [[v_fuente]] o [[v_receptor]]. Si el resultado indica alejamiento cuando el contexto describe acercamiento (o viceversa), revisar si se ha aplicado el convenio correcto: [[v_receptor]] positivo hacia la fuente, [[v_fuente]] positivo alejandose del receptor."
          en: "Most frequent error: wrong sign on [[v_fuente]] or [[v_receptor]]. If the result indicates recession when the context describes approach (or vice versa), check whether the correct convention was applied: [[v_receptor]] positive toward source, [[v_fuente]] positive when receding from receiver."
      - id: fobs_error_formula_incorrecta
        when: "true"
        status: warning
        text:
          es: "Error de formula: usar la version fuente-movil cuando es el receptor el que se mueve, o viceversa. Aunque el resultado numerico puede parecer razonable, la fisica es incorrecta: la formula no es simetrica respecto al intercambio de fuente y receptor."
          en: "Formula error: using the source-moving version when the receiver is the one moving, or vice versa. Although the numerical result may seem reasonable, the physics is wrong: the formula is not symmetric with respect to swapping source and receiver."
      - id: fobs_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar siempre: fuente acercandose debe dar [[f_obs]] mayor que [[f_fuente]]; fuente alejandose debe dar [[f_obs]] menor."
          en: "Always verify: approaching source must give [[f_obs]] greater than [[f_fuente]]; receding source must give [[f_obs]] lower."
    next_step_rules:
      - id: fobs_next_velocidad
        when: "true"
        status: ok
        text:
          es: "Con [[f_obs]] conocido por medicion, despejar [[v_fuente]] de la formula [[doppler_fuente_movil]] para calcular la velocidad del objeto en movimiento (radar de velocidad, sonar Doppler)."
          en: "With [[f_obs]] known from measurement, solve for [[v_fuente]] from the [[doppler_fuente_movil]] formula to calculate the velocity of the moving object (speed radar, Doppler sonar)."
      - id: fobs_next_delta
        when: "true"
        status: ok
        text:
          es: "Calcular [[delta_f]] como [[f_obs]] menos [[f_fuente]] para obtener el desplazamiento Doppler, que en muchos sistemas es la señal procesada directamente."
          en: "Calculate [[delta_f]] as [[f_obs]] minus [[f_fuente]] to obtain the Doppler shift, which in many systems is the directly processed signal."

  f_fuente:
    magnitude_type: frecuencia
    semantic_role:
      es: "Frecuencia propia de la fuente; referencia constante contra la que se mide el desplazamiento Doppler."
      en: "Intrinsic source frequency; constant reference against which the Doppler shift is measured."
    summary_rules:
      - id: ffuente_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_fuente]] es la frecuencia que emite la fuente independientemente de su movimiento. Es el punto de referencia del calculo Doppler."
          en: "[[f_fuente]] is the frequency emitted by the source regardless of its motion. It is the reference point of the Doppler calculation."
    physical_reading_rules:
      - id: ffuente_reading_default
        when: "true"
        status: ok
        text:
          es: "[[f_fuente]] no cambia con el movimiento de la fuente: la fuente siempre emite el mismo numero de ciclos por segundo en su propio sistema de referencia."
          en: "[[f_fuente]] does not change with source motion: the source always emits the same number of cycles per second in its own reference frame."
    coherence_rules:
      - id: ffuente_coherence_default
        when: "f_fuente > 0"
        status: ok
        text:
          es: "[[f_fuente]] positiva: coherente con una fuente fisica real."
          en: "Positive [[f_fuente]]: coherent with a real physical source."
    model_validity_rules:
      - id: ffuente_validity_default
        when: "true"
        status: ok
        text:
          es: "[[f_fuente]] es un parametro del problema, no depende del modelo Doppler. Su precision limita la del calculo de [[f_obs]]."
          en: "[[f_fuente]] is a problem parameter, not dependent on the Doppler model. Its accuracy limits that of the [[f_obs]] calculation."
    graph_rules:
      - id: ffuente_graph_default
        when: "true"
        status: ok
        text:
          es: "En graficos Doppler, [[f_fuente]] aparece como la linea horizontal de referencia alrededor de la cual oscila [[f_obs]] segun el movimiento."
          en: "In Doppler graphs, [[f_fuente]] appears as the horizontal reference line around which [[f_obs]] oscillates depending on motion."
    likely_errors:
      - id: ffuente_error_default
        when: "true"
        status: warning
        text:
          es: "El error mas comun relacionado con [[f_fuente]] es pensar que cambia cuando la fuente se mueve. La fuente siempre emite a la misma frecuencia en su propio sistema de referencia."
          en: "The most common error related to [[f_fuente]] is thinking it changes when the source moves. The source always emits at the same frequency in its own reference frame."
    next_step_rules:
      - id: ffuente_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[f_fuente]] como dato de referencia para calcular [[delta_f]] y deducir la velocidad de la fuente o del receptor."
          en: "Use [[f_fuente]] as reference data to calculate [[delta_f]] and deduce source or receiver velocity."

  v_fuente:
    magnitude_type: velocidad
    semantic_role:
      es: "Componente radial de la velocidad de la fuente; determina la compresion o estiramiento de los frentes de onda."
      en: "Radial component of source velocity; determines compression or stretching of wavefronts."
    summary_rules:
      - id: vfuente_summary_acercandose
        when: "v_fuente < 0"
        status: ok
        text:
          es: "[[v_fuente]] negativo (convenio: positivo alejandose): la fuente se acerca al receptor. Los frentes de onda se comprimen y [[f_obs]] sube respecto a [[f_fuente]]."
          en: "Negative [[v_fuente]] (convention: positive receding): source approaches the receiver. Wavefronts are compressed and [[f_obs]] rises above [[f_fuente]]."
      - id: vfuente_summary_alejandose
        when: "v_fuente > 0"
        status: ok
        text:
          es: "[[v_fuente]] positivo: la fuente se aleja del receptor. Los frentes de onda se estiran y [[f_obs]] baja respecto a [[f_fuente]]."
          en: "Positive [[v_fuente]]: source moves away from receiver. Wavefronts are stretched and [[f_obs]] drops below [[f_fuente]]."
      - id: vfuente_summary_reposo
        when: "v_fuente == 0"
        status: ok
        text:
          es: "[[v_fuente]] nulo: fuente en reposo respecto al medio. No hay efecto Doppler por movimiento de la fuente."
          en: "Zero [[v_fuente]]: source at rest relative to medium. No Doppler effect from source motion."
    physical_reading_rules:
      - id: vfuente_reading_alta
        when: "abs(v_fuente) > 0.5 * v_sonido"
        status: warning
        text:
          es: "Velocidad de la fuente superior al 50 % de [[v_sonido]]: el efecto Doppler es muy pronunciado y la aproximacion de pequeñas velocidades (delta_f proporcional a v_fuente) no es valida."
          en: "Source speed above 50% of [[v_sonido]]: the Doppler effect is very pronounced and the small-velocity approximation (delta_f proportional to v_fuente) is not valid."
      - id: vfuente_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_fuente]] fija la compresion geometrica de los frentes de onda: al acercarse a [[v_sonido]], el espacio entre frentes de onda tiende a cero y [[f_obs]] tiende a infinito."
          en: "[[v_fuente]] sets the geometric compression of wavefronts: as it approaches [[v_sonido]], the spacing between wavefronts tends to zero and [[f_obs]] tends to infinity."
    coherence_rules:
      - id: vfuente_coherence_subsonica
        when: "abs(v_fuente) < v_sonido"
        status: ok
        text:
          es: "[[v_fuente]] subsonica: coherente con la validez de la formula Doppler clasica."
          en: "Subsonic [[v_fuente]]: coherent with validity of the classical Doppler formula."
      - id: vfuente_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[v_fuente]] tiene el signo correcto segun el convenio establecido antes de sustituir en la formula."
          en: "Verify that [[v_fuente]] has the correct sign according to the established convention before substituting into the formula."
    model_validity_rules:
      - id: vfuente_validity_subsonica
        when: "abs(v_fuente) >= v_sonido"
        status: error
        text:
          es: "[[v_fuente]] supera o iguala [[v_sonido]]: la formula Doppler clasica no es valida. Se forma el cono de Mach y se produce el boom sonico. En la region delantera a la fuente no hay solucion de onda periodica."
          en: "[[v_fuente]] reaches or exceeds [[v_sonido]]: the classical Doppler formula is not valid. A Mach cone forms and a sonic boom occurs. In the region ahead of the source there is no periodic wave solution."
      - id: vfuente_validity_default
        when: "true"
        status: ok
        text:
          es: "Para velocidades subsonicas de la fuente, la formula Doppler es exacta en el limite de onda esferica en medio homogeneo."
          en: "For subsonic source speeds, the Doppler formula is exact in the spherical wave limit in a homogeneous medium."
    graph_rules:
      - id: vfuente_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico [[f_obs]] vs [[v_fuente]], el punto calculado cae sobre la hiperbola Doppler. La asintota vertical a [[v_fuente]] igual a [[v_sonido]] es el limite fisico del modelo."
          en: "In the [[f_obs]] vs [[v_fuente]] graph, the calculated point falls on the Doppler hyperbola. The vertical asymptote at [[v_fuente]] equal to [[v_sonido]] is the physical limit of the model."
    likely_errors:
      - id: vfuente_error_signo
        when: "true"
        status: warning
        text:
          es: "El error mas frecuente: no aplicar el convenio de signos. Si la fuente se acerca, [[v_fuente]] debe ser negativo en la convencion positivo-alejandose. Sustituir con el signo incorrecto invierte el resultado: se calcula alejamiento cuando hay acercamiento."
          en: "Most frequent error: not applying the sign convention. If the source approaches, [[v_fuente]] must be negative in the positive-receding convention. Substituting with the wrong sign inverts the result: recession is calculated when there is approach."
    next_step_rules:
      - id: vfuente_next_mach
        when: "abs(v_fuente) > 0.3 * v_sonido"
        status: ok
        text:
          es: "Calcular el numero de Mach (M igual a [[v_fuente]] partido entre [[v_sonido]]) para contextualizar el regimen de vuelo o movimiento y determinar si hay que corregir por efectos de compresibilidad del medio."
          en: "Calculate the Mach number (M equals [[v_fuente]] divided by [[v_sonido]]) to contextualise the flight or motion regime and determine whether compressibility effects of the medium need correction."
      - id: vfuente_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[f_obs]] medido y [[f_fuente]] conocido, despejar [[v_fuente]] de la formula [[doppler_fuente_movil]] para obtener la velocidad del objeto en movimiento."
          en: "With measured [[f_obs]] and known [[f_fuente]], solve for [[v_fuente]] from the [[doppler_fuente_movil]] formula to obtain the velocity of the moving object."

  v_receptor:
    magnitude_type: velocidad
    semantic_role:
      es: "Componente radial de la velocidad del receptor; determina cuantos frentes de onda intercepta por unidad de tiempo."
      en: "Radial component of receiver velocity; determines how many wavefronts are intercepted per unit time."
    summary_rules:
      - id: vreceptor_summary_acercandose
        when: "v_receptor > 0"
        status: ok
        text:
          es: "[[v_receptor]] positivo: receptor moviendose hacia la fuente. Intercepta mas frentes de onda por segundo y [[f_obs]] sube."
          en: "Positive [[v_receptor]]: receiver moving toward source. Intercepts more wavefronts per second and [[f_obs]] rises."
      - id: vreceptor_summary_alejandose
        when: "v_receptor < 0"
        status: ok
        text:
          es: "[[v_receptor]] negativo: receptor alejandose de la fuente. Intercepta menos frentes de onda por segundo y [[f_obs]] baja."
          en: "Negative [[v_receptor]]: receiver moving away from source. Intercepts fewer wavefronts per second and [[f_obs]] drops."
      - id: vreceptor_summary_reposo
        when: "v_receptor == 0"
        status: ok
        text:
          es: "[[v_receptor]] nulo: receptor en reposo respecto al medio. Solo el movimiento de la fuente contribuye al efecto Doppler."
          en: "Zero [[v_receptor]]: receiver at rest relative to medium. Only source motion contributes to the Doppler effect."
    physical_reading_rules:
      - id: vreceptor_reading_default
        when: "true"
        status: ok
        text:
          es: "El movimiento del receptor no cambia la longitud de onda de las ondas en el medio, pero si cambia la rapidez con que el receptor las recorre. El efecto es lineal: [[f_obs]] cambia proporcionalmente a [[v_receptor]]."
          en: "Receiver motion does not change the wavelength of waves in the medium, but does change the rate at which the receiver traverses them. The effect is linear: [[f_obs]] changes proportionally to [[v_receptor]]."
    coherence_rules:
      - id: vreceptor_coherence_default
        when: "true"
        status: ok
        text:
          es: "El convenio de signos de [[v_receptor]] es opuesto al de [[v_fuente]]: verificar que no se han intercambiado."
          en: "The sign convention for [[v_receptor]] is opposite to that of [[v_fuente]]: verify they have not been swapped."
    model_validity_rules:
      - id: vreceptor_validity_default
        when: "true"
        status: ok
        text:
          es: "No hay restriccion de velocidad subsonica para el receptor: incluso si [[v_receptor]] supera [[v_sonido]], la formula da un resultado finito y fisicamente correcto (el receptor simplemente supera los frentes de onda que vienen hacia el)."
          en: "There is no subsonic speed restriction for the receiver: even if [[v_receptor]] exceeds [[v_sonido]], the formula gives a finite and physically correct result (the receiver simply overtakes the wavefronts coming toward it)."
    graph_rules:
      - id: vreceptor_graph_lineal
        when: "true"
        status: ok
        text:
          es: "En el grafico [[f_obs]] vs [[v_receptor]] (con fuente fija), la relacion es lineal, a diferencia del caso de fuente en movimiento que es hiperbolica."
          en: "In the [[f_obs]] vs [[v_receptor]] graph (with fixed source), the relation is linear, unlike the moving-source case which is hyperbolic."
    likely_errors:
      - id: vreceptor_error_signo
        when: "true"
        status: warning
        text:
          es: "El convenio de signos de [[v_receptor]] es opuesto al de [[v_fuente]]. Si se usan las mismas convenciones para ambos, el resultado sera incorrecto en el sentido del desplazamiento Doppler."
          en: "The sign convention for [[v_receptor]] is opposite to that of [[v_fuente]]. If the same conventions are used for both, the result will be wrong in the direction of the Doppler shift."
    next_step_rules:
      - id: vreceptor_next_default
        when: "true"
        status: ok
        text:
          es: "Si se conoce [[f_obs]] y [[f_fuente]] con la fuente fija, despejar [[v_receptor]] de la formula [[doppler_receptor_movil]] para medir la velocidad del receptor."
          en: "If [[f_obs]] and [[f_fuente]] are known with the source fixed, solve for [[v_receptor]] from the [[doppler_receptor_movil]] formula to measure the receiver velocity."

  delta_f:
    magnitude_type: diferencia_de_frecuencia
    semantic_role:
      es: "Desplazamiento Doppler; es la señal operacional que los instrumentos procesan para medir velocidades."
      en: "Doppler shift; it is the operational signal that instruments process to measure velocities."
    summary_rules:
      - id: deltaf_summary_positivo
        when: "delta_f > 0"
        status: ok
        text:
          es: "[[delta_f]] positivo: acercamiento neto entre fuente y receptor. La frecuencia observada supera a la emitida."
          en: "Positive [[delta_f]]: net approach between source and receiver. Observed frequency exceeds emitted frequency."
      - id: deltaf_summary_negativo
        when: "delta_f < 0"
        status: ok
        text:
          es: "[[delta_f]] negativo: alejamiento neto entre fuente y receptor. La frecuencia observada es menor que la emitida."
          en: "Negative [[delta_f]]: net recession between source and receiver. Observed frequency is less than emitted frequency."
      - id: deltaf_summary_cero
        when: "delta_f == 0"
        status: ok
        text:
          es: "[[delta_f]] nulo: sin movimiento radial relativo entre fuente y receptor."
          en: "Zero [[delta_f]]: no relative radial motion between source and receiver."
    physical_reading_rules:
      - id: deltaf_reading_default
        when: "true"
        status: ok
        text:
          es: "Para velocidades mucho menores que [[v_sonido]], [[delta_f]] es aproximadamente proporcional a la velocidad radial relativa. Esta aproximacion lineal es la base del radar Doppler de velocidad."
          en: "For velocities much smaller than [[v_sonido]], [[delta_f]] is approximately proportional to the radial relative velocity. This linear approximation is the basis of Doppler speed radar."
    coherence_rules:
      - id: deltaf_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[delta_f]] no puede ser mayor en valor absoluto que [[f_fuente]] en ninguna situacion fisica (f_obs siempre es positiva)."
          en: "[[delta_f]] cannot be greater in absolute value than [[f_fuente]] in any physical situation (f_obs is always positive)."
    model_validity_rules:
      - id: deltaf_validity_default
        when: "true"
        status: ok
        text:
          es: "[[delta_f]] es una definicion exacta. Su interpretacion en terminos de velocidad requiere la formula Doppler y sus hipotesis de validez."
          en: "[[delta_f]] is an exact definition. Its interpretation in terms of velocity requires the Doppler formula and its validity hypotheses."
    graph_rules:
      - id: deltaf_graph_default
        when: "true"
        status: ok
        text:
          es: "Para velocidades mucho menores que [[v_sonido]], el grafico [[delta_f]] vs velocidad radial es aproximadamente lineal. Para velocidades altas, la curva se curva hacia arriba (acercamiento) o hacia abajo (alejamiento)."
          en: "For velocities much smaller than [[v_sonido]], the [[delta_f]] vs radial velocity graph is approximately linear. For high velocities, the curve bends upward (approach) or downward (recession)."
    likely_errors:
      - id: deltaf_error_default
        when: "true"
        status: warning
        text:
          es: "No confundir [[delta_f]] con [[f_obs]]: [[delta_f]] es la diferencia, no la frecuencia total percibida."
          en: "Do not confuse [[delta_f]] with [[f_obs]]: [[delta_f]] is the difference, not the total perceived frequency."
    next_step_rules:
      - id: deltaf_next_velocidad
        when: "true"
        status: ok
        text:
          es: "Convertir [[delta_f]] en velocidad usando la formula de despeje de [[v_fuente]] de [[doppler_fuente_movil]], o la aproximacion lineal para velocidades pequenas."
          en: "Convert [[delta_f]] to velocity using the [[v_fuente]] solve formula from [[doppler_fuente_movil]], or the linear approximation for small velocities."

cross_checks:
  - id: fobs_fuente_receptor
    description:
      es: "Verificar consistencia entre f_obs, f_fuente, v_fuente y v_receptor"
      en: "Verify consistency between f_obs, f_fuente, v_fuente and v_receptor"
    condition: "abs(f_obs - f_fuente * (v_sonido + v_receptor) / (v_sonido - v_fuente)) < 0.01 * f_obs"
    status_if_fail: warning
    message_if_fail:
      es: "Los valores f_obs, f_fuente, v_fuente, v_receptor y v_sonido no son mutuamente consistentes con la formula Doppler general. Verificar convenios de signos."
      en: "Values f_obs, f_fuente, v_fuente, v_receptor and v_sonido are not mutually consistent with the general Doppler formula. Check sign conventions."

error_patterns:
  - id: error_signo_invertido
    description:
      es: "Signo de velocidad incorrecto (acercamiento/alejamiento invertidos)"
      en: "Incorrect velocity sign (approach/recession inverted)"
    detect_when: "f_obs < f_fuente && context_says_approach"
    message:
      es: "f_obs menor que f_fuente cuando el contexto describe acercamiento: probablemente el signo de v_fuente esta invertido."
      en: "f_obs less than f_fuente when context describes approach: v_fuente sign is probably inverted."

graph_binding:
  coord_axes:
    x: v_fuente
    y: f_obs

mini_graph:
  enabled: true
  preferred_type: Coord
  x_variable: v_fuente
  y_variable: f_obs

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
