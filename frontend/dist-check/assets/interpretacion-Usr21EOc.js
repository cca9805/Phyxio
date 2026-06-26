const e=`version: "v5"
id: interpretacion_resonancia
leaf_id: resonancia

nombre:
  es: "Interpretacion de resonancia"
  en: "Resonance interpretation"

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-estacionarias
  parent_id: ondas-estacionarias
  ruta_relativa: fisica-clasica/ondas/ondas-estacionarias/resonancia

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    calculator_title:
      es: "Calculadora de resonancia"
      en: "Resonance calculator"
    result_title:
      es: "Resultado del calculo"
      en: "Calculation result"
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_messages: 3
    truncate_at: 200

dependencies:
  formulas:
    - frecuencia_natural_sistema
    - amplitud_resonancia
    - factor_calidad_Q
    - relacion_amplitud_frecuencia
  magnitudes:
    - frecuencia_natural
    - frecuencia_forzada
    - amplitud_forzada
    - factor_calidad
    - ancho_banda
    - masa
    - constante_restauradora

global_context:
  physical_domain:
    es: "Sistemas oscilantes mecanicos y electricos bajo excitacion periodica externa, operando en regimen estacionario."
    en: "Mechanical and electrical oscillating systems under external periodic excitation, operating in steady state."
  axis_convention:
    es: "El eje horizontal representa frecuencia forzada; el eje vertical representa amplitud de respuesta. La resonancia se visualiza como pico pronunciado."
    en: "Horizontal axis represents driving frequency; vertical axis represents response amplitude. Resonance appears as a sharp peak."
  standard_assumptions:
    - "Oscilador armonico lineal con amortiguamiento viscoso"
    - "Regimen estacionario alcanzado"
    - "Fuerza excitadora de amplitud constante"
  standard_warnings:
    - "El modelo lineal falla para grandes amplitudes donde aparecen efectos no lineales"
    - "Sistemas con Q muy alto pueden experimentar transitorios prolongados"

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
      es: "Lectura fisica"
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
      es: "Lectura grafica"
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
  frecuencia_natural:
    magnitude_type: "state"
    semantic_role:
      es: "Frecuencia caracteristica intrinseca del sistema, determinada por sus propiedades inerciales y elasticas."
      en: "Intrinsic characteristic frequency of the system, determined by its inertial and elastic properties."
    summary_rules:
      - id: fn_summary_default
        when: "true"
        status: ok
        text:
          es: "La frecuencia natural [[frecuencia_natural]] Hz describe la rapidez de oscilacion espontanea del sistema. Este valor indica la frecuencia a la que el sistema responde mas eficientemente a estimulos externos."
          en: "The natural frequency [[frecuencia_natural]] Hz describes the speed of spontaneous system oscillation. This value indicates the frequency at which the system responds most efficiently to external stimuli."
    physical_reading_rules:
      - id: fn_reading_default
        when: "true"
        status: ok
        text:
          es: "El sistema oscilaria espontaneamente a esta frecuencia si se le desplaza de su equilibrio y se le deja evolucionar libremente. Esta propiedad depende de la raiz cuadrada de la rigidez dividida por la masa."
          en: "The system would oscillate spontaneously at this frequency if displaced from equilibrium and allowed to evolve freely. This property depends on the square root of stiffness divided by mass."
    coherence_rules:
      - id: fn_coherence_positive
        when: "frecuencia_natural > 0"
        status: ok
        text:
          es: "El valor positivo indica un sistema fisicamente valido con capacidad de oscilar."
          en: "The positive value indicates a physically valid system with oscillation capability."
    model_validity_rules:
      - id: fn_validity_range
        when: "frecuencia_natural > 0.01 && frecuencia_natural < 100000"
        status: ok
        text:
          es: "La frecuencia se encuentra en rango fisico tipico para sistemas macroscopicos."
          en: "The frequency is within typical physical range for macroscopic systems."
    graph_rules:
      - id: fn_graph_reference
        when: "true"
        status: ok
        text:
          es: "En un grafico de respuesta en frecuencia, esta magnitud marca la posicion del eje vertical de simetria del pico de resonancia."
          en: "In a frequency response graph, this magnitude marks the position of the vertical symmetry axis of the resonance peak."
    likely_errors:
      - id: fn_error_confusion
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir frecuencia natural con frecuencia forzada aplicada. La natural es propiedad intrinseca; la forzada es parametro de control externo."
          en: "Typical error: confusing natural frequency with applied driving frequency. Natural is intrinsic property; driving is external control parameter."
    next_step_rules:
      - id: fn_next_compare
        when: "true"
        status: ok
        text:
          es: "Compare esta frecuencia natural con la frecuencia forzada del estimulo externo para determinar el grado de desajuste."
          en: "Compare this natural frequency with the driving frequency of the external stimulus to determine the degree of mismatch."

  frecuencia_forzada:
    magnitude_type: "parameter"
    semantic_role:
      es: "Frecuencia del estimulo periodico externo aplicado al sistema."
      en: "Frequency of external periodic stimulus applied to the system."
    summary_rules:
      - id: ff_summary_default
        when: "true"
        status: ok
        text:
          es: "La frecuencia forzada [[frecuencia_forzada]] Hz es el parametro de control del experimento. Describe la rapidez de oscilacion de la fuerza externa aplicada."
          en: "The driving frequency [[frecuencia_forzada]] Hz is the experimental control parameter. It describes the oscillation speed of the applied external force."
    physical_reading_rules:
      - id: ff_reading_default
        when: "true"
        status: ok
        text:
          es: "Esta frecuencia determina el ritmo de bombeo energetico al sistema. Cuando coincide con la frecuencia natural, la energia se acumula constructivamente."
          en: "This frequency determines the rate of energy pumping into the system. When it matches the natural frequency, energy accumulates constructively."
    coherence_rules:
      - id: ff_coherence_positive
        when: "frecuencia_forzada >= 0"
        status: ok
        text:
          es: "El valor es fisicamente admisible como parametro de frecuencia."
          en: "The value is physically admissible as a frequency parameter."
    model_validity_rules:
      - id: ff_validity_zero
        when: "frecuencia_forzada == 0"
        status: warning
        text:
          es: "Frecuencia nula implica fuerza constante, no oscilacion forzada. El modelo de resonancia no aplica."
          en: "Zero frequency implies constant force, not forced oscillation. The resonance model does not apply."
    graph_rules:
      - id: ff_graph_sweep
        when: "true"
        status: ok
        text:
          es: "En el eje horizontal de la curva de resonancia, esta frecuencia determina la posicion del punto de operacion actual."
          en: "On the horizontal axis of the resonance curve, this frequency determines the position of the current operating point."
    likely_errors:
      - id: ff_error_negative
        when: "frecuencia_forzada < 0"
        status: error
        text:
          es: "Error: la frecuencia no puede ser negativa. Verifique los datos de entrada."
          en: "Error: frequency cannot be negative. Check input data."
    next_step_rules:
      - id: ff_next_sweep
        when: "true"
        status: ok
        text:
          es: "Varie esta frecuencia alrededor del valor de la frecuencia natural para mapear la curva de respuesta completa."
          en: "Vary this frequency around the natural frequency value to map the complete response curve."

  amplitud_forzada:
    magnitude_type: "state"
    semantic_role:
      es: "Desplazamiento maximo del sistema en regimen estacionario bajo excitacion periodica."
      en: "Maximum system displacement in steady state under periodic excitation."
    summary_rules:
      - id: amp_summary_large
        when: "amplitud_forzada > 0.1"
        status: ok
        text:
          es: "La amplitud [[amplitud_forzada]] m es considerable, indicando que el sistema responde vigorosamente a la excitacion. Este valor describe el maximo alejamiento del punto de equilibrio."
          en: "The amplitude [[amplitud_forzada]] m is considerable, indicating the system responds vigorously to excitation. This value describes the maximum displacement from the equilibrium point."
      - id: amp_summary_small
        when: "amplitud_forzada <= 0.01"
        status: ok
        text:
          es: "La amplitud [[amplitud_forzada]] m es pequena, indicando respuesta debil a la excitacion o que el sistema opera lejos de la resonancia."
          en: "The amplitude [[amplitud_forzada]] m is small, indicating weak response to excitation or that the system operates far from resonance."
    physical_reading_rules:
      - id: amp_reading_energy
        when: "true"
        status: ok
        text:
          es: "Esta amplitud cuantifica la energia mecanica acumulada en el oscilador. Mayor amplitud implica mayor energia intercambiada entre forma potencial y cinetica."
          en: "This amplitude quantifies the mechanical energy accumulated in the oscillator. Greater amplitude implies greater energy exchanged between potential and kinetic forms."
    coherence_rules:
      - id: amp_coherence_positive
        when: "amplitud_forzada >= 0"
        status: ok
        text:
          es: "La amplitud es no negativa, consistente con su definicion fisica como magnitud de desplazamiento maximo."
          en: "Amplitude is non-negative, consistent with its physical definition as maximum displacement magnitude."
    model_validity_rules:
      - id: amp_validity_linear
        when: "amplitud_forzada < 0.5"
        status: ok
        text:
          es: "La amplitud es razonablemente pequena, manteniendo la validez del modelo lineal de oscilador armonico."
          en: "The amplitude is reasonably small, maintaining the validity of the linear harmonic oscillator model."
      - id: amp_validity_nonlinear
        when: "amplitud_forzada >= 0.5"
        status: warning
        text:
          es: "Amplitud elevada: posibles efectos no lineales no incluidos en el modelo. Verificar validez experimental."
          en: "High amplitude: possible nonlinear effects not included in the model. Verify experimental validity."
    graph_rules:
      - id: amp_graph_peak
        when: "true"
        status: ok
        text:
          es: "En la curva de resonancia, este valor de amplitud corresponde a la ordenada del punto de operacion actual."
          en: "On the resonance curve, this amplitude value corresponds to the ordinate of the current operating point."
    likely_errors:
      - id: amp_error_transient
        when: "true"
        status: warning
        text:
          es: "Error comun: medir amplitud durante el transitorio inicial en lugar de esperar al regimen estacionario."
          en: "Common error: measuring amplitude during the initial transient instead of waiting for steady state."
    next_step_rules:
      - id: amp_next_compare
        when: "true"
        status: ok
        text:
          es: "Compare esta amplitud con la amplitud maxima teorica para evaluar el grado de aproximacion a la resonancia."
          en: "Compare this amplitude with the theoretical maximum amplitude to evaluate the degree of approach to resonance."

  factor_calidad:
    magnitude_type: "derived"
    semantic_role:
      es: "Parametro adimensional que cuantifica la agudeza y selectividad de la resonancia."
      en: "Dimensionless parameter quantifying the sharpness and selectivity of resonance."
    summary_rules:
      - id: q_summary_high
        when: "factor_calidad > 50"
        status: ok
        text:
          es: "El factor de calidad [[factor_calidad]] es elevado, describiendo una resonancia muy aguda y selectiva. El sistema responde significativamente solo en un rango estrecho de frecuencias."
          en: "The quality factor [[factor_calidad]] is high, describing a very sharp and selective resonance. The system responds significantly only in a narrow frequency range."
      - id: q_summary_low
        when: "factor_calidad <= 10"
        status: ok
        text:
          es: "El factor de calidad [[factor_calidad]] es moderado, indicando una resonancia amplia poco selectiva. El sistema responde de manera similar en un rango extendido de frecuencias."
          en: "The quality factor [[factor_calidad]] is moderate, indicating a broad, non-selective resonance. The system responds similarly over an extended frequency range."
    physical_reading_rules:
      - id: q_reading_energy
        when: "true"
        status: ok
        text:
          es: "El factor Q relaciona la energia almacenada con la energia disipada por ciclo. Mayor Q implica menor disipacion relativa y respuesta mas persistente."
          en: "The Q factor relates stored energy to energy dissipated per cycle. Higher Q implies lower relative dissipation and more persistent response."
    coherence_rules:
      - id: q_coherence_positive
        when: "factor_calidad > 0"
        status: ok
        text:
          es: "El factor de calidad positivo indica un sistema fisicamente realizable con resonancia definida."
          en: "The positive quality factor indicates a physically realizable system with defined resonance."
    model_validity_rules:
      - id: q_validity_range
        when: "factor_calidad > 1 && factor_calidad < 10000"
        status: ok
        text:
          es: "El valor se encuentra en rango fisico tipico para sistemas resonantes reales."
          en: "The value is within typical physical range for real resonant systems."
    graph_implications:
      - id: q_graph_sharpness
        when: "true"
        status: ok
        text:
          es: "En la curva de resonancia, el factor Q determina la anchura del pico: mayor Q produce pico mas estrecho y alto."
          en: "On the resonance curve, the Q factor determines the peak width: higher Q produces a narrower and taller peak."
    likely_errors:
      - id: q_error_application
        when: "true"
        status: warning
        text:
          es: "Error tipico: asumir que siempre es mejor tener Q alto. En aplicaciones de banda ancha se prefiere Q bajo; en selectividad, Q alto."
          en: "Typical error: assuming it's always better to have high Q. In broadband applications, low Q is preferred; for selectivity, high Q."
    graph_rules:
      - id: q_graph_peak_width
        when: "true"
        status: ok
        text:
          es: "En la curva de resonancia, el valor de Q determina la anchura del pico: mayor Q produce pico mas estrecho."
          en: "On the resonance curve, the Q value determines the peak width: higher Q produces a narrower peak."
    next_step_rules:
      - id: q_next_bandwidth
        when: "true"
        status: ok
        text:
          es: "Calcule el ancho de banda dividiendo la frecuencia natural entre este factor de calidad para conocer la selectividad del sistema."
          en: "Calculate the bandwidth by dividing the natural frequency by this quality factor to know the system selectivity."

  ancho_banda:
    magnitude_type: "derived"
    semantic_role:
      es: "Rango de frecuencias alrededor de la resonancia donde la respuesta es significativa."
      en: "Range of frequencies around resonance where the response is significant."
    summary_rules:
      - id: bw_summary
        when: "true"
        status: ok
        text:
          es: "El ancho de banda [[ancho_banda]] determina la selectividad del sistema. Valores pequeños indican resonancia aguda."
          en: "The bandwidth [[ancho_banda]] determines the system selectivity. Small values indicate sharp resonance."
    physical_reading_rules:
      - id: bw_reading
        when: "true"
        status: ok
        text:
          es: "El ancho de banda es la diferencia entre las frecuencias donde la amplitud cae a la mitad del valor maximo."
          en: "The bandwidth is the difference between frequencies where amplitude falls to half the maximum value."
    coherence_rules:
      - id: bw_coherence
        when: "ancho_banda > 0"
        status: ok
        text:
          es: "Ancho de banda positivo indica sistema resonante definido."
          en: "Positive bandwidth indicates defined resonant system."
    model_validity_rules:
      - id: bw_validity
        when: "true"
        status: ok
        text:
          es: "El ancho de banda debe ser consistente con el factor de calidad y la frecuencia natural."
          en: "Bandwidth must be consistent with quality factor and natural frequency."
    graph_rules:
      - id: bw_graph
        when: "true"
        status: ok
        text:
          es: "En la curva de resonancia, el ancho de banda corresponde a la anchura del pico a media altura."
          en: "On the resonance curve, bandwidth corresponds to the peak width at half height."
    likely_errors:
      - id: bw_error
        when: "true"
        status: warning
        text:
          es: "Confundir ancho de banda con rango total de operacion."
          en: "Confusing bandwidth with total operating range."
    next_step_rules:
      - id: bw_next
        when: "true"
        status: ok
        text:
          es: "Compare el ancho de banda con la separacion entre frecuencias adyacentes para evaluar selectividad."
          en: "Compare bandwidth with separation between adjacent frequencies to evaluate selectivity."

  constante_restauradora:
    magnitude_type: "parameter"
    semantic_role:
      es: "Coeficiente de proporcionalidad entre desplazamiento y fuerza recuperadora."
      en: "Proportionality coefficient between displacement and restoring force."
    summary_rules:
      - id: k_summary
        when: "true"
        status: ok
        text:
          es: "La constante restauradora [[constante_restauradora]] cuantifica la rigidez del sistema."
          en: "The restoring constant [[constante_restauradora]] quantifies system stiffness."
    physical_reading_rules:
      - id: k_reading
        when: "true"
        status: ok
        text:
          es: "Mayor constante restauradora implica mayor fuerza de recuperacion y mayor frecuencia natural."
          en: "Higher restoring constant implies greater restoring force and higher natural frequency."
    coherence_rules:
      - id: k_coherence
        when: "constante_restauradora > 0"
        status: ok
        text:
          es: "Constante positiva garantiza equilibrio estable y oscilacion posible."
          en: "Positive constant guarantees stable equilibrium and possible oscillation."
    model_validity_rules:
      - id: k_validity
        when: "true"
        status: ok
        text:
          es: "El valor debe ser consistente con el material y geometria del resorte."
          en: "Value must be consistent with spring material and geometry."
    graph_rules:
      - id: k_graph
        when: "true"
        status: ok
        text:
          es: "La constante restauradora determina la pendiente efectiva en la region lineal."
          en: "Restoring constant determines effective slope in linear region."
    likely_errors:
      - id: k_error
        when: "true"
        status: warning
        text:
          es: "Confundir constante de resorte con rigidez estatica equivalente."
          en: "Confusing spring constant with equivalent static stiffness."
    next_step_rules:
      - id: k_next
        when: "true"
        status: ok
        text:
          es: "Verifique que la constante sea independiente de la amplitud para validar linealidad."
          en: "Verify that constant is amplitude-independent to validate linearity."

  masa:
    magnitude_type: "parameter"
    semantic_role:
      es: "Magnitud inercial del sistema oscilante."
      en: "Inertial magnitude of the oscillating system."
    summary_rules:
      - id: m_summary
        when: "true"
        status: ok
        text:
          es: "La masa [[masa]] representa la inercia del sistema."
          en: "The mass [[masa]] represents the system inertia."
    physical_reading_rules:
      - id: m_reading
        when: "true"
        status: ok
        text:
          es: "Mayor masa implica menor frecuencia natural para una misma rigidez."
          en: "Greater mass implies lower natural frequency for the same stiffness."
    coherence_rules:
      - id: m_coherence
        when: "masa > 0"
        status: ok
        text:
          es: "Masa positiva garantiza comportamiento inercial definido."
          en: "Positive mass guarantees defined inertial behavior."
    model_validity_rules:
      - id: m_validity
        when: "true"
        status: ok
        text:
          es: "La masa efectiva debe incluir solo los elementos que oscilan con el desplazamiento."
          en: "Effective mass must include only elements that oscillate with displacement."
    graph_rules:
      - id: m_graph
        when: "true"
        status: ok
        text:
          es: "La masa determina la escala temporal de la respuesta transitoria."
          en: "Mass determines the time scale of transient response."
    likely_errors:
      - id: m_error
        when: "true"
        status: warning
        text:
          es: "Incluir masa del resorte cuando no es despreciable."
          en: "Including spring mass when not negligible."
    next_step_rules:
      - id: m_next
        when: "true"
        status: ok
        text:
          es: "Verifique que la masa efectiva sea consistente con la geometria del sistema."
          en: "Verify that effective mass is consistent with system geometry."

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
