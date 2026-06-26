const e=`version: 1\r
magnitudes:\r
- id: fuerza_erronea\r
  symbol: F_{err}\r
  nombre:\r
    es: Fuerza mal interpretada\r
    en: Misinterpreted force\r
  descripcion:\r
    es: Fuerza inexistente o mal dibujada que invalida el Diagrama de Cuerpo Libre.\r
    en: Non-existent or poorly drawn force that invalidates the Free Body Diagram.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Incluir fuerzas de inercia en sistemas no inerciales o tensiones en el sistema completo.\r
  typical_range: 0 - 1000 N\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva como magnitud de error.\r
      en: Always positive as an error magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Indica que no hay fuerzas espúreas en el diagrama.\r
      en: Indicates no spurious forces in the diagram.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Es la diferencia entre la fuerza neta real y la supuesta por el alumno.\r
- id: signo_aceleracion\r
  symbol: \\text{sgn}(a)\r
  nombre:\r
    es: Signo de la aceleración\r
    en: Acceleration sign\r
  descripcion:\r
    es: Sentido del vector aceleración respecto al sistema de referencia elegido.\r
    en: Direction of the acceleration vector relative to the chosen reference system.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Mezclar criterios de signos entre cuerpos vinculados.\r
  typical_range: -1, 0, 1\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica si el movimiento coincide con el eje positivo.\r
      en: The sign indicates if the motion matches the positive axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Sistema en equilibrio o reposo.\r
      en: System in equilibrium or at rest.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [-1, 1]\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Un signo negativo inesperado suele indicar una inconsistencia en los ejes.\r
- id: componente_normal_erronea\r
  symbol: N_{err}\r
  nombre:\r
    es: Normal mal calculada\r
    en: Miscalculated Normal\r
  descripcion:\r
    es: Valor de la fuerza normal obtenido por memorización sin realizar el sumatorio de fuerzas perpendicular al plano.\r
    en: Normal force value obtained by memorization without performing the force summation perpendicular to the plane.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Asumir N = mg en planos inclinados o bajo fuerzas verticales externas.\r
  typical_range: 0 - 5000 N\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Magnitud de la fuerza de contacto.\r
      en: Magnitude of the contact force.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Pérdida de contacto con la superficie.\r
      en: Loss of contact with the surface.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Debe obtenerse siempre del sumatorio de fuerzas en el eje perpendicular al movimiento.\r
- id: F_ext_net\r
  symbol: \\sum F_{ext}\r
  nombre:\r
    es: Fuerza neta externa\r
    en: Net external force\r
  descripcion:\r
    es: Resultante de todas las fuerzas externas aplicadas sobre el sistema completo.\r
    en: Resultant of all external forces applied to the entire system.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Incluir fuerzas internas como la tensión en el sumatorio global.\r
  typical_range: 0 - 10000 N\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Define la dirección de la aceleración resultante.\r
      en: Defines the direction of the resulting acceleration.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El sistema está en equilibrio traslacional.\r
      en: The system is in translational equilibrium.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Es la fuerza que efectivamente produce la aceleración del centro de masas del sistema.\r
- id: aceleracion_sistema\r
  symbol: a_{sys}\r
  nombre:\r
    es: Aceleración del sistema\r
    en: System acceleration\r
  descripcion:\r
    es: Aceleración común de todos los cuerpos vinculados del sistema.\r
    en: Common acceleration of all linked bodies in the system.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Calcular valores superiores a g para sistemas impulsados solo por gravedad.\r
  typical_range: 0 - 20 m/s^2\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del cambio de velocidad.\r
      en: The sign indicates the direction of velocity change.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Velocidad constante o reposo.\r
      en: Constant velocity or rest.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [0, 9.8]\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Debe ser verificada mediante el chequeo de consistencia global.\r
- id: coeficiente_rozamiento_estatico\r
  symbol: \\mu_s\r
  nombre:\r
    es: Coeficiente de rozamiento estático\r
    en: Static friction coefficient\r
  descripcion:\r
    es: Parámetro adimensional que cuantifica la oposición al inicio del deslizamiento entre dos superficies.\r
    en: Dimensionless parameter quantifying the opposition to the start of sliding between two surfaces.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Usar el coeficiente cinético para verificar si el sistema arranca.\r
  typical_range: 0.01 - 1.5\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Propiedad escalar positiva.\r
      en: Positive scalar property.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Superficie ideal sin rozamiento.\r
      en: Ideal frictionless surface.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [0.1, 1.0]\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Determina el umbral máximo de fuerza de rozamiento antes del movimiento.\r
- id: fuerza_rozamiento_maximo\r
  symbol: f_{s,max}\r
  nombre:\r
    es: Fuerza de rozamiento estático máxima\r
    en: Maximum static friction force\r
  descripcion:\r
    es: Valor límite del rozamiento estático antes de que se inicie el movimiento.\r
    en: Limit value of static friction before motion begins.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: No verificar si la fuerza motriz supera este valor antes de suponer movimiento.\r
  typical_range: 0 - 5000 N\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Magnitud de la fuerza de oposición.\r
      en: Magnitude of the opposing force.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: No hay tendencia al movimiento o no hay normal.\r
      en: No tendency to move or no normal force.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Si la fuerza motriz es menor que este valor, el sistema permanece en reposo.\r
- id: masa_total\r
  symbol: M_{tot}\r
  nombre:\r
    es: Masa total del sistema\r
    en: Total system mass\r
  descripcion:\r
    es: Suma de las masas de todos los cuerpos que componen el sistema dinámico.\r
    en: Sum of the masses of all bodies composing the dynamic system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Olvidar incluir alguno de los cuerpos vinculados en el denominador de Newton.\r
  typical_range: 0 - 1000 kg\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Propiedad intrínseca siempre positiva.\r
      en: Always positive intrinsic property.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Un sistema físico real debe tener masa no nula.\r
      en: A real physical system must have non-zero mass.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Representa la inercia total del conjunto de cuerpos vinculados.\r
- id: aceleracion_gravedad\r
  symbol: g\r
  nombre:\r
    es: Aceleración de la gravedad\r
    en: Acceleration due to gravity\r
  descripcion:\r
    es: Aceleración constante que experimentan los cuerpos en caída libre cerca de la superficie terrestre.\r
    en: Constant acceleration experienced by bodies in free fall near the Earth's surface.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_constant\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Confundir su valor con el peso del cuerpo.\r
  typical_range: 9.8 - 9.81 m/s^2\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Generalmente negativa si el eje vertical apunta hacia arriba.\r
      en: Generally negative if the vertical axis points upward.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: En la Tierra, la gravedad no es nula.\r
      en: On Earth, gravity is not zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [9.78, 9.83]\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - errores-frecuentes\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Valor estándar aproximado de 9.8 m/s².\r
- id: angulo_plano\r
  symbol: \\theta\r
  nombre:\r
    es: Ángulo de inclinación\r
    en: Inclination angle\r
  descripcion:\r
    es: Ángulo que forma el plano inclinado con la horizontal.\r
    en: Angle formed by the inclined plane with the horizontal.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: geometric_parameter\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Usar el seno en lugar del coseno para proyectar la normal.\r
  typical_range: 0 - pi/2 rad\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Magnitud angular positiva.\r
      en: Positive angular magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El plano es horizontal.\r
      en: The plane is horizontal.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [0, 1.57]\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - errores-frecuentes\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Determina la descomposición del peso en componentes paralela y perpendicular.\r
- id: masa_cuerpo\r
  symbol: m\r
  nombre:\r
    es: Masa del cuerpo\r
    en: Body mass\r
  descripcion:\r
    es: Masa individual de uno de los bloques del sistema.\r
    en: Individual mass of one of the blocks in the system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: Olvidar que la normal depende de la masa de este cuerpo específico.\r
  typical_range: 0 - 100 kg\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Magnitud escalar positiva.\r
      en: Positive scalar magnitude.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Un cuerpo real debe tener masa.\r
      en: A real body must have mass.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - errores-frecuentes\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Se usa para calcular fuerzas individuales (peso, normal).\r
- id: fuerza_motriz\r
  symbol: F_{mot}\r
  nombre:\r
    es: Fuerza motriz\r
    en: Driving force\r
  descripcion:\r
    es: Componente de las fuerzas externas que tiende a iniciar o mantener el movimiento del sistema.\r
    en: Component of external forces that tends to initiate or maintain system motion.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - errores-frecuentes\r
  common_mistake: No incluir la componente del peso en planos inclinados como fuerza motriz.\r
  typical_range: 0 - 5000 N\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Magnitud de la fuerza impulsora.\r
      en: Magnitude of the driving force.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: No hay fuerzas externas intentando mover el sistema.\r
      en: No external forces trying to move the system.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - errores-frecuentes\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Debe compararse con el umbral de rozamiento estático.\r
\r
`;export{e as default};
