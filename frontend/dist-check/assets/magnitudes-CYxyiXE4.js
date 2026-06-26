const e=`version: v5
leaf_id: fase
magnitudes:
  - id: phi
    symbol: "\\\\phi"
    nombre: { es: fase, en: phase }
    unidad: { es: rad, en: rad }
    unidad_si: rad
    dimension: "[1]"
    tipo: escalar
    is_vector: false
    components: []
    category: phase_state
    physical_role: core_physical_quantity
    descripcion: { es: Estado de avance dentro de un ciclo ondulatorio., en: State of advance within a wave cycle. }
    rango_tipico: { es: Entre 0 y 2 pi rad al comparar estados equivalentes., en: Between 0 and 2 pi rad when comparing equivalent states. }
    typical_range: { es: 0 a 2 pi rad como lectura reducida de ciclo., en: 0 to 2 pi rad as a reduced cycle reading. }
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    common_mistake: { es: Confundir fase con amplitud o altura de la onda., en: Confusing phase with amplitude or wave height. }
    sign_behavior: { es: Depende de la convención de propagación y origen., en: Depends on propagation convention and origin. }
    zero_behavior: { es: Fase cero indica el estado elegido como referencia del ciclo., en: Zero phase indicates the chosen reference state of the cycle. }
    value_nature: cyclic_dimensionless
    interpretation_role: Etiqueta el estado interno de una oscilación periódica.
    graph_binding:
      type: Coord
      x_axis: x
      y_axis: phi
      visual_role: phase_state
    pedagogical_notes:
      es: Leer como estado de ciclo, no como tamaño de perturbación.
      en: Read as cycle state, not as disturbance size.
  - id: phi0
    symbol: "\\\\phi_0"
    nombre: { es: fase inicial, en: initial phase }
    unidad: { es: rad, en: rad }
    unidad_si: rad
    dimension: "[1]"
    tipo: escalar
    is_vector: false
    components: []
    category: initial_condition
    physical_role: core_physical_quantity
    descripcion: { es: Desplazamiento de fase fijado por la condición inicial., en: Phase offset fixed by the initial condition. }
    rango_tipico: { es: Entre menos pi y pi rad como convenio habitual., en: Between minus pi and pi rad as a common convention. }
    typical_range: { es: Entre menos pi y pi rad o entre 0 y 2 pi rad según convenio., en: Between minus pi and pi rad or between 0 and 2 pi rad depending on convention. }
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake: { es: Tratarla como propiedad del medio en vez de origen de ciclo., en: Treating it as a medium property rather than a cycle origin. }
    sign_behavior: { es: Su signo desplaza la referencia de adelanto o retraso., en: Its sign shifts the lead or lag reference. }
    zero_behavior: { es: Valor cero significa que el origen elegido coincide con la fase de referencia., en: Zero means the chosen origin matches the reference phase. }
    value_nature: convention_dependent_offset
    interpretation_role: Fija el origen interno desde el que se mide la fase.
    graph_binding:
      type: Coord
      visual_role: horizontal_phase_shift
    pedagogical_notes:
      es: Explicar siempre qué origen define esta fase.
      en: Always explain which origin defines this phase.
  - id: Delta_phi
    symbol: "\\\\Delta\\\\phi"
    nombre: { es: diferencia de fase, en: phase difference }
    unidad: { es: rad, en: rad }
    unidad_si: rad
    dimension: "[1]"
    tipo: escalar
    is_vector: false
    components: []
    category: phase_comparison
    physical_role: derived
    descripcion: { es: Separación de estado oscilatorio entre dos lecturas., en: Oscillation-state separation between two readings. }
    rango_tipico: { es: 0 rad para estados en fase y pi rad para oposición., en: 0 rad for in-phase states and pi rad for opposition. }
    typical_range: { es: De 0 a 2 pi rad tras reducir vueltas completas., en: From 0 to 2 pi rad after reducing complete turns. }
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    common_mistake: { es: Confundir separación espacial con desfase sin usar el número de onda., en: Confusing spatial separation with phase difference without using wavenumber. }
    sign_behavior: { es: El signo indica adelanto o retraso solo con convención fijada., en: The sign indicates lead or lag only with a fixed convention. }
    zero_behavior: { es: Valor cero indica lecturas en fase o equivalentes dentro del ciclo., en: Zero indicates in-phase or cycle-equivalent readings. }
    value_nature: cyclic_difference
    interpretation_role: Compara sincronización entre dos lecturas de la onda.
    graph_binding:
      type: Coord
      x_axis: x
      visual_role: phase_offset_between_points
    pedagogical_notes:
      es: Reducir mentalmente vueltas completas antes de interpretar sincronía.
      en: Mentally reduce complete turns before interpreting synchronization.
  - id: k
    symbol: "k"
    nombre: { es: número de onda, en: wavenumber }
    unidad: { es: rad/m, en: rad/m }
    unidad_si: rad/m
    dimension: "[L^-1]"
    tipo: escalar
    is_vector: false
    components: []
    category: spatial_phase_rate
    physical_role: core_physical_quantity
    descripcion: { es: Ritmo de cambio de fase con la posición., en: Rate of phase change with position. }
    rango_tipico: { es: Desde fracciones de rad/m hasta miles de rad/m según la onda., en: From fractions of rad/m to thousands of rad/m depending on the wave. }
    typical_range: { es: Orden de 1 rad/m en cuerdas largas y mucho mayor en ondas cortas., en: Order of 1 rad/m in long strings and much larger in short waves. }
    used_in: [teoria, ejemplos, interpretacion, formulas, grafico_coord]
    common_mistake: { es: Usarlo como frecuencia temporal en lugar de ritmo espacial., en: Using it as a temporal frequency instead of a spatial rate. }
    sign_behavior: { es: El signo puede codificar sentido de propagación según convenio., en: The sign may encode propagation direction by convention. }
    zero_behavior: { es: Valor cero no describe una onda periódica espacial ordinaria., en: Zero does not describe an ordinary spatially periodic wave. }
    value_nature: positive_spatial_rate
    interpretation_role: Convierte separaciones espaciales en desfase.
    graph_binding:
      type: Coord
      x_axis: x
      visual_role: spatial_compression
    pedagogical_notes:
      es: Relacionar con longitud de onda antes de calcular desfases.
      en: Relate it to wavelength before calculating phase differences.
  - id: omega
    symbol: "\\\\omega"
    nombre: { es: frecuencia angular, en: angular frequency }
    unidad: { es: rad/s, en: rad/s }
    unidad_si: rad/s
    dimension: "[T^-1]"
    tipo: escalar
    is_vector: false
    components: []
    category: temporal_phase_rate
    physical_role: core_physical_quantity
    descripcion: { es: Ritmo de cambio de fase con el tiempo., en: Rate of phase change with time. }
    rango_tipico: { es: Desde pocos rad/s en ondas lentas hasta millones de rad/s en señales rápidas., en: From a few rad/s in slow waves to millions of rad/s in fast signals. }
    typical_range: { es: Decenas de rad/s en oscilaciones lentas y miles de rad/s en sonido audible., en: Tens of rad/s in slow oscillations and thousands of rad/s in audible sound. }
    used_in: [teoria, ejemplos, interpretacion, formulas, grafico_coord]
    common_mistake: { es: Confundirla con frecuencia en hercios sin el factor angular., en: Confusing it with frequency in hertz without the angular factor. }
    sign_behavior: { es: El signo depende del convenio de fase temporal., en: The sign depends on the temporal phase convention. }
    zero_behavior: { es: Valor cero implica que la fase no avanza temporalmente en el modelo., en: Zero means phase does not advance in time in the model. }
    value_nature: positive_temporal_rate
    interpretation_role: Convierte intervalos temporales en desfase.
    graph_binding:
      type: Coord
      visual_role: temporal_shift
    pedagogical_notes:
      es: Distinguir ritmo temporal de ritmo espacial.
      en: Distinguish temporal rate from spatial rate.
  - id: v_phi
    symbol: "v_\\\\phi"
    nombre: { es: rapidez de fase, en: phase speed }
    unidad: { es: m/s, en: m/s }
    unidad_si: m/s
    dimension: "[L T^-1]"
    tipo: escalar
    is_vector: false
    components: []
    category: phase_speed
    physical_role: derived
    descripcion: { es: Rapidez con la que avanza un mismo estado de fase., en: Speed at which the same phase state advances. }
    rango_tipico: { es: Orden de metros por segundo en cuerdas y cientos de metros por segundo en sonido., en: Order of metres per second in strings and hundreds of metres per second in sound. }
    typical_range: { es: Metros por segundo en cuerdas; cientos de m/s en sonido en aire., en: Metres per second in strings; hundreds of m/s in sound in air. }
    used_in: [teoria, ejemplos, interpretacion, formulas, grafico_coord]
    common_mistake: { es: Confundirla con velocidad de las partículas del medio., en: Confusing it with the speed of particles of the medium. }
    sign_behavior: { es: Suele interpretarse como rapidez positiva en el sentido elegido., en: Usually interpreted as positive speed in the chosen direction. }
    zero_behavior: { es: Valor cero indicaría una fase que no se propaga espacialmente., en: Zero would indicate a phase that does not propagate spatially. }
    value_nature: positive_speed
    interpretation_role: Mide el avance espacial de una fase constante.
    graph_binding:
      type: Coord
      visual_role: phase_marker_motion
    pedagogical_notes:
      es: Separar avance de fase y transporte de energía.
      en: Separate phase advance from energy transport.
  - id: x
    symbol: "x"
    nombre: { es: posición, en: position }
    unidad: { es: m, en: m }
    unidad_si: m
    dimension: "[L]"
    tipo: coordenada
    is_vector: false
    components: []
    category: spatial_coordinate
    physical_role: coordinate
    descripcion: { es: Punto espacial donde se lee la fase., en: Spatial point where phase is read. }
    rango_tipico: { es: Depende de la longitud del medio observado., en: Depends on the length of the observed medium. }
    typical_range: { es: Centímetros a metros en laboratorio escolar., en: Centimetres to metres in a school laboratory. }
    used_in: [teoria, ejemplos, formulas, grafico_coord]
    common_mistake: { es: Confundir posición con desplazamiento transversal de la onda., en: Confusing position with transverse wave displacement. }
    sign_behavior: { es: El signo depende del origen y eje elegidos., en: The sign depends on the chosen origin and axis. }
    zero_behavior: { es: Valor cero indica el origen espacial de referencia., en: Zero indicates the spatial reference origin. }
    value_nature: coordinate
    interpretation_role: Localiza dónde se evalúa la fase.
    graph_binding:
      type: Coord
      x_axis: x
      visual_role: horizontal_coordinate
    pedagogical_notes:
      es: Fijar origen espacial antes de comparar fases.
      en: Fix the spatial origin before comparing phases.
  - id: t
    symbol: "t"
    nombre: { es: tiempo, en: time }
    unidad: { es: s, en: s }
    unidad_si: s
    dimension: "[T]"
    tipo: coordenada
    is_vector: false
    components: []
    category: temporal_coordinate
    physical_role: coordinate
    descripcion: { es: Instante en el que se lee la fase., en: Instant at which phase is read. }
    rango_tipico: { es: Milisegundos a segundos según la onda observada., en: Milliseconds to seconds depending on the observed wave. }
    typical_range: { es: Décimas de segundo en cuerdas lentas y milisegundos en sonido., en: Tenths of a second in slow strings and milliseconds in sound. }
    used_in: [teoria, ejemplos, formulas, interpretacion]
    common_mistake: { es: Cambiar el origen temporal sin actualizar la fase inicial., en: Changing the time origin without updating initial phase. }
    sign_behavior: { es: Normalmente positivo después del origen temporal elegido., en: Usually positive after the chosen time origin. }
    zero_behavior: { es: "Valor cero indica el instante de referencia para [[phi0]].", en: "Zero indicates the reference instant for [[phi0]]." }
    value_nature: coordinate
    interpretation_role: Localiza cuándo se evalúa la fase.
    graph_binding:
      type: Coord
      visual_role: temporal_parameter
    pedagogical_notes:
      es: Mantener coherentes tiempo y fase inicial.
      en: Keep time and initial phase coherent.
  - id: Delta_x
    symbol: "\\\\Delta x"
    nombre: { es: separación espacial, en: spatial separation }
    unidad: { es: m, en: m }
    unidad_si: m
    dimension: "[L]"
    tipo: escalar
    is_vector: false
    components: []
    category: spatial_difference
    physical_role: parameter
    descripcion: { es: Distancia entre dos lecturas comparadas., en: Distance between two compared readings. }
    rango_tipico: { es: Fracciones de longitud de onda hasta varias longitudes de onda., en: Fractions of a wavelength up to several wavelengths. }
    typical_range: { es: Centímetros o metros según el montaje., en: Centimetres or metres depending on the setup. }
    used_in: [teoria, formulas]
    common_mistake: { es: "Interpretarla como desfase sin multiplicar por [[k]].", en: "Interpreting it as phase difference without multiplying by [[k]]." }
    sign_behavior: { es: El signo depende del orden en que se comparan los puntos., en: The sign depends on the order in which points are compared. }
    zero_behavior: { es: Valor cero elimina el aporte espacial al desfase., en: Zero removes the spatial contribution to phase difference. }
    value_nature: signed_difference
    interpretation_role: Mide la separación espacial que produce parte del desfase.
    graph_binding:
      type: Coord
      x_axis: x
      visual_role: horizontal_separation
    pedagogical_notes:
      es: Comparar siempre con la escala de longitud de onda.
      en: Always compare with wavelength scale.
  - id: Delta_t
    symbol: "\\\\Delta t"
    nombre: { es: separación temporal, en: temporal separation }
    unidad: { es: s, en: s }
    unidad_si: s
    dimension: "[T]"
    tipo: escalar
    is_vector: false
    components: []
    category: temporal_difference
    physical_role: parameter
    descripcion: { es: Intervalo temporal entre dos lecturas comparadas., en: Time interval between two compared readings. }
    rango_tipico: { es: Fracciones de periodo hasta varios periodos., en: Fractions of a period up to several periods. }
    typical_range: { es: Milisegundos en sonido y décimas de segundo en ondas lentas., en: Milliseconds in sound and tenths of a second in slow waves. }
    used_in: [teoria, formulas]
    common_mistake: { es: "Interpretarla como desfase sin multiplicar por [[omega]].", en: "Interpreting it as phase difference without multiplying by [[omega]]." }
    sign_behavior: { es: El signo depende del orden temporal de comparación., en: The sign depends on the temporal comparison order. }
    zero_behavior: { es: Valor cero elimina el aporte temporal al desfase., en: Zero removes the temporal contribution to phase difference. }
    value_nature: signed_difference
    interpretation_role: Mide la separación temporal que produce parte del desfase.
    graph_binding:
      type: Coord
      visual_role: time_separation
    pedagogical_notes:
      es: Comparar siempre con la escala del periodo.
      en: Always compare with period scale.
`;export{e as default};
