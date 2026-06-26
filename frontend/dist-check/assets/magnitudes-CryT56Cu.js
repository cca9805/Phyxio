const e=`version: "v5"
id: magnitudes_resonancia

magnitudes:
  - id: frecuencia_natural
    symbol: "f_0"
    nombre:
      es: "Frecuencia natural"
      en: "Natural frequency"
    descripcion:
      es: "Frecuencia a la que un sistema oscila libremente sin amortiguamiento ni fuerzas externas. Determinada exclusivamente por las propiedades inerciales y elasticas del sistema."
      en: "Frequency at which a system oscillates freely without damping or external forces. Determined exclusively by the inertial and elastic properties of the system."
    unidad_si: "Hz"
    dimension: "[T^-1]"
    is_vector: false
    components: []
    category: "state"
    physical_role: "state"
    used_in:
      - "Ecuacion de movimiento del oscilador armonico"
      - "Determinacion de condicion de resonancia"
      - "Analisis de espectros de vibracion"
    common_mistake: "Confundir frecuencia natural con frecuencia forzada aplicada externamente"
    typical_range: "0.1 Hz a 10 kHz para sistemas mecanicos; MHz-GHz para circuitos electricos"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La frecuencia natural es siempre un valor positivo que describe una propiedad intrinseca del sistema"
        en: "Natural frequency is always a positive value describing an intrinsic system property"
    zero_behavior:
      allowed: false
      meaning:
        es: "Un sistema con frecuencia natural nula no oscilaria, correspondiendo a un sistema sin rigidez restitutiva"
        en: "A system with zero natural frequency would not oscillate, corresponding to a system without restoring stiffness"
    value_nature:
      kind: "scalar_unsigned"
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - "lectura_fisica"
        - "coherencia"
      secondary_for:
        - "model_validity"
    graph_binding:
      channels:
        - "x_axis"
        - "reference_line"
    pedagogical_notes:
      es: "La frecuencia natural es la firma vibratoria de un sistema. Todo objeto fisico tiene frecuencias naturales especificas que determinan como responde a estimulos externos."
      en: "Natural frequency is the vibratory signature of a system. Every physical object has specific natural frequencies that determine how it responds to external stimuli."

  - id: frecuencia_forzada
    symbol: "f"
    nombre:
      es: "Frecuencia forzada"
      en: "Driving frequency"
    descripcion:
      es: "Frecuencia de la fuerza periodica externa aplicada al sistema oscilante. Cuando coincide con la frecuencia natural, se produce el fenomeno de resonancia."
      en: "Frequency of the external periodic force applied to the oscillating system. When it matches the natural frequency, the resonance phenomenon occurs."
    unidad_si: "Hz"
    dimension: "[T^-1]"
    is_vector: false
    components: []
    category: "parameter"
    physical_role: "parameter"
    used_in:
      - "Funcion de respuesta en frecuencia"
      - "Determinacion de desfasaje"
      - "Analisis de curva de resonancia"
    common_mistake: "Asumir que la frecuencia forzada siempre iguala la frecuencia de oscilacion observada"
    typical_range: "Variable segun la aplicacion; tipicamente proxima a la frecuencia natural en estudios de resonancia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La frecuencia forzada es un parametro de control positivo"
        en: "Driving frequency is a positive control parameter"
    zero_behavior:
      allowed: true
      meaning:
        es: "Frecuencia nula corresponde a fuerza constante, sin oscilacion forzada"
        en: "Zero frequency corresponds to constant force, without forced oscillation"
    value_nature:
      kind: "scalar_unsigned"
      nonnegative_only: true
      expected_interval: "[0, inf)"
    interpretation_role:
      primary_for:
        - "lectura_fisica"
      secondary_for:
        - "coherencia"
    graph_binding:
      channels:
        - "x_axis"
        - "sweep_parameter"
    pedagogical_notes:
      es: "La frecuencia forzada es el parametro de control experimental. Variarla permite mapear la respuesta del sistema y localizar el pico de resonancia."
      en: "Driving frequency is the experimental control parameter. Varying it allows mapping the system response and locating the resonance peak."

  - id: amplitud_forzada
    symbol: "A"
    nombre:
      es: "Amplitud forzada"
      en: "Steady-state amplitude"
    descripcion:
      es: "Amplitud maxima de oscilacion alcanzada en regimen estacionario bajo excitacion periodica. Alcanza su maximo en condicion de resonancia."
      en: "Maximum oscillation amplitude reached in steady state under periodic excitation. Reaches its maximum under resonance condition."
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: "state"
    physical_role: "state"
    used_in:
      - "Curva de respuesta en amplitud"
      - "Determinacion de factor de calidad"
      - "Analisis de riesgo de fallo estructural"
    common_mistake: "Confundir amplitud inicial transitoria con amplitud estacionaria de regimen permanente"
    typical_range: "Micrometros a centimetros en aplicaciones mecanicas; depende fuertemente del factor de calidad"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La amplitud es siempre positiva, representando el maximo desplazamiento desde la posicion de equilibrio"
        en: "Amplitude is always positive, representing maximum displacement from equilibrium position"
    zero_behavior:
      allowed: true
      meaning:
        es: "Amplitud nula indica ausencia de excitacion o que el sistema opera en un nodo de interferencia destructiva"
        en: "Zero amplitude indicates absence of excitation or that the system operates at a node of destructive interference"
    value_nature:
      kind: "scalar_unsigned"
      nonnegative_only: true
      expected_interval: "[0, inf)"
    interpretation_role:
      primary_for:
        - "lectura_fisica"
        - "graph_reading"
      secondary_for:
        - "model_validity"
    graph_binding:
      channels:
        - "y_axis"
        - "peak_marker"
    pedagogical_notes:
      es: "La amplitud forzada es la variable de respuesta observable. Su dependencia con la frecuencia define la curva de resonancia caracteristica con pico pronunciado."
      en: "Forced amplitude is the observable response variable. Its dependence on frequency defines the characteristic resonance curve with a pronounced peak."

  - id: factor_calidad
    symbol: "Q"
    nombre:
      es: "Factor de calidad"
      en: "Quality factor"
    descripcion:
      es: "Parametro adimensional que cuantifica la agudeza de la resonancia. Relaciona la frecuencia natural con el ancho de banda de la curva de resonancia."
      en: "Dimensionless parameter quantifying the sharpness of resonance. Relates natural frequency to the bandwidth of the resonance curve."
    unidad_si: "adimensional"
    dimension: "[1]"
    is_vector: false
    components: []
    category: "derived"
    physical_role: "parameter"
    used_in:
      - "Caracterizacion de selectividad del sistema"
      - "Determinacion de amplitud maxima en resonancia"
      - "Analisis de decaimiento de oscilaciones libres"
    common_mistake: "Asumir que Q alto siempre es deseable sin considerar que puede producir respuestas peligrosamente amplificadas"
    typical_range: "10 a 100 en sistemas mecanicos comunes; >1000 en resonadores de cristal de cuarzo"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El factor de calidad es siempre positivo; valores negativos carecen de significado fisico"
        en: "Quality factor is always positive; negative values lack physical meaning"
    zero_behavior:
      allowed: false
      meaning:
        es: "Factor Q nulo implicaria resonancia infinitamente ancha, fisicamente imposible en sistemas reales"
        en: "Zero Q factor would imply infinitely broad resonance, physically impossible in real systems"
    value_nature:
      kind: "ratio"
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - "model_validity"
        - "coherencia"
      secondary_for:
        - "lectura_fisica"
    graph_binding:
      channels:
        - "curve_shape"
        - "peak_sharpness"
    pedagogical_notes:
      es: "El factor Q es la medida de pureza de la resonancia. Sistemas con Q alto son selectivos pero pueden acumular energia peligrosamente si no se controlan."
      en: "The Q factor measures resonance purity. High-Q systems are selective but can dangerously accumulate energy if not controlled."

  - id: ancho_banda
    symbol: "Delta_f"
    nombre:
      es: "Ancho de banda"
      en: "Bandwidth"
    descripcion:
      es: "Rango de frecuencias alrededor de la resonancia donde la amplitud supera el 70.7% del maximo. Inversamente proporcional al factor de calidad."
      en: "Range of frequencies around resonance where amplitude exceeds 70.7% of maximum. Inversely proportional to the quality factor."
    unidad_si: "Hz"
    dimension: "[T^-1]"
    is_vector: false
    components: []
    category: "derived"
    physical_role: "parameter"
    used_in:
      - "Especificacion de selectividad del sistema"
      - "Diseno de filtros resonantes"
      - "Analisis de respuesta transitoria"
    common_mistake: "Confundir ancho de banda total con frecuencias de corte individuales"
    typical_range: "Fraccion de Hz a cientos de Hz dependiendo del sistema y su factor Q"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El ancho de banda es siempre positivo, describiendo un intervalo de frecuencias"
        en: "Bandwidth is always positive, describing a frequency interval"
    zero_behavior:
      allowed: false
      meaning:
        es: "Ancho de banda nulo corresponderia a resonancia perfectamente puntual, inalcanzable en sistemas reales con disipacion"
        en: "Zero bandwidth would correspond to perfectly punctual resonance, unattainable in real dissipative systems"
    value_nature:
      kind: "scalar_unsigned"
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - "model_validity"
      secondary_for:
        - "lectura_fisica"
    graph_binding:
      channels:
        - "horizontal_span"
        - "frequency_range"
    pedagogical_notes:
      es: "El ancho de banda determina la selectividad del sistema. Sistemas de banda estrecha son selectivos pero requieren sintonia precisa."
      en: "Bandwidth determines system selectivity. Narrow-band systems are selective but require precise tuning."

  - id: masa
    symbol: "m"
    nombre:
      es: "Masa"
      en: "Mass"
    descripcion:
      es: "Magnitud inercial del sistema oscilante. Junto con la constante elastica, determina la frecuencia natural del sistema."
      en: "Inertial magnitude of the oscillating system. Together with the elastic constant, determines the natural frequency of the system."
    unidad_si: "kg"
    dimension: "[M]"
    is_vector: false
    components: []
    category: "fundamental"
    physical_role: "parameter"
    used_in:
      - "Ecuacion del oscilador armonico"
      - "Energia cinetica del sistema"
      - "Pulsacion natural"
    common_mistake: "Olvidar que la masa efectiva puede diferir de la masa total en sistemas complejos"
    typical_range: "Gramos a kilogramos en sistemas mecanicos laboratorio; toneladas en ingenieria civil"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La masa es intrinsecamente positiva"
        en: "Mass is intrinsically positive"
    zero_behavior:
      allowed: false
      meaning:
        es: "Masa nula corresponderia a un sistema sin inercia, incapaz de almacenar energia cinetica"
        en: "Zero mass would correspond to a system without inertia, incapable of storing kinetic energy"
    value_nature:
      kind: "scalar_unsigned"
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - "coherencia"
      secondary_for:
        - "lectura_fisica"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La masa es el elemento inercial del sistema. Mayor masa implica menor frecuencia natural para una misma rigidez."
      en: "Mass is the inertial element of the system. Greater mass implies lower natural frequency for the same stiffness."

  - id: constante_restauradora
    symbol: "k"
    nombre:
      es: "Constante restauradora"
      en: "Restoring constant"
    descripcion:
      es: "Coeficiente de proporcionalidad entre el desplazamiento y la fuerza recuperadora. Cuantifica la rigidez del sistema oscilante."
      en: "Proportionality coefficient between displacement and restoring force. Quantifies the stiffness of the oscillating system."
    unidad_si: "N/m"
    dimension: "[M T^-2]"
    is_vector: false
    components: []
    category: "parameter"
    physical_role: "parameter"
    used_in:
      - "Ley de Hooke"
      - "Frecuencia natural del oscilador"
      - "Energia potencial elastica"
    common_mistake: "Confundir constante de muelle con rigidez estatica equivalente en sistemas complejos"
    typical_range: "1 N/m a 10000 N/m en sistemas mecanicos; varia enormemente segun el sistema"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La constante restauradora es positiva para sistemas estables con equilibrio estable"
        en: "Restoring constant is positive for stable systems with stable equilibrium"
    zero_behavior:
      allowed: false
      meaning:
        es: "Constante nula implicaria ausencia de fuerza recuperadora, sistema sin oscilacion posible"
        en: "Zero constant would imply absence of restoring force, system without possible oscillation"
    value_nature:
      kind: "scalar_unsigned"
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - "coherencia"
      secondary_for:
        - "lectura_fisica"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La constante restauradora define la rigidez. Mayor rigidez produce mayor frecuencia natural para una misma masa."
      en: "Restoring constant defines stiffness. Greater stiffness produces higher natural frequency for the same mass."
`;export{e as default};
