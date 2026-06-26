const e=`version: 1
magnitudes:
  - id: R
    symbol: R
    nombre:
      es: carga axial
      en: axial load
    descripcion:
      es: Fuerza resistente paralela al eje del tornillo que debe ser vencida.
      en: Resistance force parallel to the screw axis that must be overcome.
    unidad_si: N
    dimension: M L T^-2
    is_vector: true
    components: [Rz]
    category: parameter
    physical_role: resistance
    used_in: [teoria, ejemplos, modelos]
    common_mistake:
      es: Confundir la carga axial con la fuerza tangencial de entrada.
      en: Confusing the axial load with the input tangential force.
    typical_range: [100, 100000]
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud de la fuerza de carga.
        en: Magnitude of the load force.
    zero_behavior:
      allowed: true
      meaning:
        es: Sin carga aplicada al sistema.
        en: No load applied to the system.
    value_nature:
      kind: magnitude
      nonnegative_only: true
      expected_interval: [0, inf]
    interpretation_role:
      primary_for: [carga, resistencia]
      secondary_for: [esfuerzo]
    graph_binding:
      channels: [load_arrow, axial_vector]
    pedagogical_notes:
      es: Representa el objeto que se desea elevar o apretar.
      en: Represents the object to be lifted or tightened.

  - id: F
    symbol: F
    nombre:
      es: fuerza tangencial
      en: tangential force
    descripcion:
      es: Fuerza aplicada en el extremo del brazo de palanca para generar rotación.
      en: Force applied at the end of the lever arm to generate rotation.
    unidad_si: N
    dimension: M L T^-2
    is_vector: true
    components: [F_phi]
    category: derived
    physical_role: effort
    used_in: [teoria, ejemplos]
    common_mistake:
      es: Aplicar la fuerza directamente sobre el núcleo del tornillo ignorando la palanca.
      en: Applying force directly to the screw core ignoring the lever.
    typical_range: [1, 500]
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud de la fuerza de entrada.
        en: Magnitude of the input force.
    zero_behavior:
      allowed: true
      meaning:
        es: No se está aplicando esfuerzo al sistema.
        en: No effort is being applied to the system.
    value_nature:
      kind: magnitude
      nonnegative_only: true
      expected_interval: [0, 5000]
    interpretation_role:
      primary_for: [esfuerzo, entrada]
      secondary_for: [ventaja_mecanica]
    graph_binding:
      channels: [effort_vector, input_arrow]
    pedagogical_notes:
      es: Es la fuerza "humana" o del motor que acciona la máquina.
      en: It is the "human" or motor force that drives the machine.

  - id: r
    symbol: r
    nombre:
      es: radio efectivo
      en: effective radius
    descripcion:
      es: Distancia perpendicular desde el eje del tornillo hasta el punto de aplicación de la fuerza.
      en: Perpendicular distance from the screw axis to the point of force application.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: parameter
    physical_role: geometry
    used_in: [teoria, ejemplos]
    common_mistake:
      es: Usar el diámetro en lugar del radio o confundir con el radio del perno.
      en: Using diameter instead of radius or confusing with bolt radius.
    typical_range: [0.05, 1.0]
    sign_behavior:
      has_sign: false
      meaning:
        es: Brazo de palanca.
        en: Lever arm.
    zero_behavior:
      allowed: false
      meaning:
        es: Geometría inválida.
        en: Invalid geometry.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: [0.01, 10]
    interpretation_role:
      primary_for: [palanca, brazo]
      secondary_for: [torque]
    graph_binding:
      channels: [lever_length, rotation_radius]
    pedagogical_notes:
      es: Cuanto mayor sea el radio, menor será la fuerza necesaria para el mismo torque.
      en: The larger the radius, the less force needed for the same torque.

  - id: p
    symbol: p
    nombre:
      es: paso de rosca
      en: thread pitch
    descripcion:
      es: Distancia lineal que avanza el tornillo en una revolución completa.
      en: Linear distance the screw advances in one full revolution.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: parameter
    physical_role: geometry
    used_in: [teoria, ejemplos, modelos]
    common_mistake:
      es: No convertir de milímetros a metros en los cálculos.
      en: Failing to convert from millimeters to meters in calculations.
    typical_range: [0.001, 0.05]
    sign_behavior:
      has_sign: false
      meaning:
        es: Avance por vuelta.
        en: Advance per turn.
    zero_behavior:
      allowed: false
      meaning:
        es: No habría avance lineal.
        en: No linear advance would occur.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: [0.0001, 0.5]
    interpretation_role:
      primary_for: [geometria, avance]
      secondary_for: [ventaja_mecanica]
    graph_binding:
      channels: [thread_spacing, helical_step]
    pedagogical_notes:
      es: Define la resolución del movimiento y la ventaja mecánica intrínseca.
      en: Defines movement resolution and intrinsic mechanical advantage.

  - id: eta
    symbol: \\eta
    nombre:
      es: rendimiento
      en: efficiency
    descripcion:
      es: Fracción de la energía de entrada que se traduce en trabajo útil.
      en: Fraction of input energy translated into useful work.
    unidad_si: '1'
    dimension: '1'
    is_vector: false
    components: null
    category: parameter
    physical_role: model_parameter
    used_in: [teoria, ejemplos, modelos]
    common_mistake:
      es: Suponer un rendimiento del 100% en tornillos de fricción real.
      en: Assuming 100% efficiency in real friction screws.
    typical_range: [0.1, 0.9]
    sign_behavior:
      has_sign: false
      meaning:
        es: Factor de eficiencia.
        en: Efficiency factor.
    zero_behavior:
      allowed: false
      meaning:
        es: Sistema bloqueado por fricción infinita.
        en: System blocked by infinite friction.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: [0, 1]
    interpretation_role:
      primary_for: [eficiencia, perdidas]
      secondary_for: [fuerza_real]
    graph_binding:
      channels: [efficiency_scale]
    pedagogical_notes:
      es: Los tornillos son ineficientes por naturaleza debido al roce constante.
      en: Screws are naturally inefficient due to constant friction.

  - id: ventaja_mecanica
    symbol: VM
    nombre:
      es: ventaja mecánica
      en: mechanical advantage
    descripcion:
      es: Relación de amplificación de fuerza que ofrece el mecanismo.
      en: Force amplification ratio provided by the mechanism.
    unidad_si: '1'
    dimension: '1'
    is_vector: false
    components: null
    category: derived
    physical_role: figure_of_merit
    used_in: [teoria, ejemplos]
    common_mistake:
      es: Confundir la ventaja ideal con la real.
      en: Confusing ideal advantage with real advantage.
    typical_range: [10, 1000]
    sign_behavior:
      has_sign: false
      meaning:
        es: Factor de multiplicación.
        en: Multiplication factor.
    zero_behavior:
      allowed: false
      meaning:
        es: El mecanismo no ofrece ventaja.
        en: The mechanism offers no advantage.
    value_nature:
      kind: ratio
      nonnegative_only: true
      expected_interval: [1, inf]
    interpretation_role:
      primary_for: [multiplicacion, ventaja]
      secondary_for: [comparacion]
    graph_binding:
      channels: [ma_value]
    pedagogical_notes:
      es: Es la razón por la cual podemos levantar un coche con una mano.
      en: It is the reason why we can lift a car with one hand.

  - id: tau
    symbol: \\tau
    nombre:
      es: torque
      en: torque
    descripcion:
      es: Momento de fuerza necesario para producir la rotación del tornillo.
      en: Force moment required to produce screw rotation.
    unidad_si: N·m
    dimension: M L^2 T^-2
    is_vector: true
    components: [tau_z]
    category: derived
    physical_role: driving_moment
    used_in: [teoria, ejemplos]
    common_mistake:
      es: Confundir torque con fuerza lineal.
      en: Confusing torque with linear force.
    typical_range: [0.1, 500]
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud del par aplicado.
        en: Magnitude of applied torque.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay tendencia al giro.
        en: No tendency to rotate.
    value_nature:
      kind: magnitude
      nonnegative_only: true
      expected_interval: [0, inf]
    interpretation_role:
      primary_for: [torque, rotacion]
      secondary_for: [esfuerzo]
    graph_binding:
      channels: [torque_indicator, rotation_moment]
    pedagogical_notes:
      es: El tornillo convierte este par en una gran fuerza lineal axial.
      en: The screw converts this torque into a large axial linear force.

  - id: error_relativo
    symbol: \\epsilon
    nombre:
      es: error relativo
      en: relative error
    descripcion:
      es: Diferencia fraccional entre el modelo ideal y el comportamiento real.
      en: Fractional difference between the ideal model and real behavior.
    unidad_si: '1'
    dimension: '1'
    is_vector: false
    components: null
    category: derived
    physical_role: precision_metric
    used_in: [teoria, modelos]
    common_mistake:
      es: No expresarlo en porcentaje cuando se requiere.
      en: Failing to express it in percentage when required.
    typical_range: [0.01, 1.0]
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud del error cometido.
        en: Magnitude of error made.
    zero_behavior:
      allowed: true
      meaning:
        es: El modelo ideal coincide con el real.
        en: Ideal model matches the real one.
    value_nature:
      kind: percentage
      nonnegative_only: true
      expected_interval: [0, 100]
    interpretation_role:
      primary_for: [error, precision]
      secondary_for: [validacion]
    graph_binding:
      channels: [error_margin]
    pedagogical_notes:
      es: Mide la desviación de la idealidad.
      en: Measures deviation from ideality.
`;export{e as default};
