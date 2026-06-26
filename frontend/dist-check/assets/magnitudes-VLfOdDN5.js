const n=`version: 1\r
magnitudes:\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad_lineal\r
    en: linear_velocity\r
  descripcion:\r
    es: Velocidad del centro de masas del cuerpo rígido.\r
    en: Velocity of the rigid body's center of mass.\r
  unidad_si: m/s\r
  dimension: L/T\r
  is_vector: true\r
  components:\r
  - v_x\r
  - v_y\r
  category: state\r
  physical_role:\r
    es: Magnitud cinemática principal\r
    en: Primary kinematic magnitude\r
  used_in:\r
  - condicion_rodadura\r
  - velocidad_contacto\r
  - consistencia_rodadura\r
  common_mistake:\r
    es: Confundir con la velocidad del punto de contacto.\r
    en: Confusing it with the contact point velocity.\r
  typical_range: 0 - 50 m/s\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de referencia adoptado.\r
      en: Its sign depends on the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar v.\r
    en: Check SI units, sign, and physical context when using v.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: velocidad_angular\r
    en: angular_velocity\r
  descripcion:\r
    es: Velocidad angular de rotación respecto al centro de masas.\r
    en: Angular velocity of rotation about the center of mass.\r
  unidad_si: rad/s\r
  dimension: 1/T\r
  is_vector: true\r
  components:\r
  - omega_z\r
  category: state\r
  physical_role:\r
    es: Magnitud rotacional\r
    en: Rotational magnitude\r
  used_in:\r
  - condicion_rodadura\r
  - velocidad_contacto\r
  - consistencia_rodadura\r
  common_mistake:\r
    es: Usar unidades de rpm o grados/s sin convertir a rad/s.\r
    en: Using rpm or degrees/s units without converting to rad/s.\r
  typical_range: 0 - 200 rad/s\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de referencia adoptado.\r
      en: Its sign depends on the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar \\omega.\r
    en: Check SI units, sign, and physical context when using \\omega.\r
- id: R\r
  symbol: R\r
  nombre:\r
    es: radio\r
    en: radius\r
  descripcion:\r
    es: Radio efectivo desde el centro de masas al punto de contacto.\r
    en: Effective radius from the center of mass to the contact point.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Parámetro geométrico\r
    en: Geometric parameter\r
  used_in:\r
  - condicion_rodadura\r
  - relacion_aceleracion\r
  - consistencia_rodadura\r
  common_mistake:\r
    es: Usar el diámetro en lugar del radio.\r
    en: Using diameter instead of radius.\r
  typical_range: 0.01 - 2.0 m\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar R.\r
    en: Check SI units, sign, and physical context when using R.\r
- id: v_contacto\r
  symbol: v_c\r
  nombre:\r
    es: velocidad_punto_contacto\r
    en: contact_point_velocity\r
  descripcion:\r
    es: Velocidad instantánea del punto de contacto respecto a la superficie.\r
    en: Instantaneous velocity of the contact point relative to the surface.\r
  unidad_si: m/s\r
  dimension: L/T\r
  is_vector: true\r
  components:\r
  - v_px\r
  - v_py\r
  category: derived\r
  physical_role:\r
    es: Indicador de adherencia\r
    en: Adherence indicator\r
  used_in:\r
  - velocidad_contacto\r
  common_mistake:\r
    es: Asumir que nunca es cero.\r
    en: Assuming it is never zero.\r
  typical_range: 0 m/s (en rodadura pura)\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de referencia adoptado.\r
      en: Its sign depends on the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar v_c.\r
    en: Check SI units, sign, and physical context when using v_c.\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: aceleracion_lineal\r
    en: linear_acceleration\r
  descripcion:\r
    es: Aceleración del centro de masas.\r
    en: Acceleration of the center of mass.\r
  unidad_si: m/s^2\r
  dimension: L/T^2\r
  is_vector: true\r
  components:\r
  - a_x\r
  - a_y\r
  category: state\r
  physical_role:\r
    es: Tasa de cambio de traslación\r
    en: Translation rate of change\r
  used_in:\r
  - relacion_aceleracion\r
  common_mistake:\r
    es: Olvidar que es proporcional a la aceleración angular.\r
    en: Forgetting it is proportional to angular acceleration.\r
  typical_range: 0 - 10 m/s^2\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de referencia adoptado.\r
      en: Its sign depends on the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar a.\r
    en: Check SI units, sign, and physical context when using a.\r
- id: alpha\r
  symbol: \\alpha\r
  nombre:\r
    es: aceleracion_angular\r
    en: angular_acceleration\r
  descripcion:\r
    es: Aceleración angular del cuerpo rígido.\r
    en: Angular acceleration of the rigid body.\r
  unidad_si: rad/s^2\r
  dimension: 1/T^2\r
  is_vector: true\r
  components:\r
  - alpha_z\r
  category: state\r
  physical_role:\r
    es: Tasa de cambio rotacional\r
    en: Rotational rate of change\r
  used_in:\r
  - relacion_aceleracion\r
  common_mistake:\r
    es: Confundir con la velocidad angular.\r
    en: Confusing it with angular velocity.\r
  typical_range: 0 - 100 rad/s^2\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de referencia adoptado.\r
      en: Its sign depends on the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar \\alpha.\r
    en: Check SI units, sign, and physical context when using \\alpha.\r
- id: delta\r
  symbol: \\delta\r
  nombre:\r
    es: indicador_deslizamiento\r
    en: slip_indicator\r
  descripcion:\r
    es: Desviación de la condición de rodadura pura (v - omega R).\r
    en: Deviation from the pure rolling condition (v - omega R).\r
  unidad_si: m/s\r
  dimension: L/T\r
  is_vector: false\r
  components: null\r
  category: conceptual\r
  physical_role:\r
    es: Diagnóstico de régimen\r
    en: Regime diagnosis\r
  used_in:\r
  - consistencia_rodadura\r
  common_mistake:\r
    es: Ignorar su signo para distinguir derrape de patinamiento.\r
    en: Ignoring its sign to distinguish skidding from spinning.\r
  typical_range: -10 a 10 m/s\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de referencia adoptado.\r
      en: Its sign depends on the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar \\delta.\r
    en: Check SI units, sign, and physical context when using \\delta.\r
- id: f_s\r
  symbol: f_s\r
  nombre:\r
    es: fuerza_rozamiento_estatico\r
    en: static_friction_force\r
  descripcion:\r
    es: Fuerza tangencial en el contacto que mantiene el vínculo de rodadura.\r
    en: Tangential force at contact that maintains the rolling constraint.\r
  unidad_si: N\r
  dimension: M*L/T^2\r
  is_vector: true\r
  components:\r
  - f_sx\r
  - f_sy\r
  category: parameter\r
  physical_role:\r
    es: Fuerza de vínculo\r
    en: Constraint force\r
  used_in:\r
  - ejemplos\r
  - teoria\r
  common_mistake:\r
    es: Usar la fórmula de fricción cinética mu_k*N.\r
    en: Using the kinetic friction formula mu_k*N.\r
  typical_range: 0 - 1000 N\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de referencia adoptado.\r
      en: Its sign depends on the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar f_s.\r
    en: Check SI units, sign, and physical context when using f_s.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: angulo_inclinacion\r
    en: incline_angle\r
  descripcion:\r
    es: Ángulo de la superficie respecto a la horizontal.\r
    en: Angle of the surface relative to the horizontal.\r
  unidad_si: rad\r
  dimension: dimension\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Parámetro geométrico ambiental\r
    en: Geometric environmental parameter\r
  used_in:\r
  - ejemplos\r
  common_mistake:\r
    es: Usar grados sin convertir a radianes en cálculos de arco.\r
    en: Using degrees without converting to radians in arc calculations.\r
  typical_range: 0 - 1.57 rad\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar \\theta.\r
    en: Check SI units, sign, and physical context when using \\theta.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa total del cuerpo rígido.\r
    en: Total mass of the rigid body.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role:\r
    es: Inercia traslacional\r
    en: Translational inertia\r
  used_in:\r
  - ejemplos\r
  common_mistake:\r
    es: Confundir con peso (m*g).\r
    en: Confusing with weight (m*g).\r
  typical_range: 0.1 - 100 kg\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar m.\r
    en: Check SI units, sign, and physical context when using m.\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: momento_inercia\r
    en: moment_of_inertia\r
  descripcion:\r
    es: Medida de la resistencia del cuerpo a cambios en su rotación axial.\r
    en: Measure of the body's resistance to changes in its axial rotation.\r
  unidad_si: kg*m^2\r
  dimension: M*L^2\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Inercia rotacional\r
    en: Rotational inertia\r
  used_in:\r
  - ejemplos\r
  common_mistake:\r
    es: No considerar el eje de rotación correcto (Steiner).\r
    en: Not considering the correct axis of rotation (Steiner).\r
  typical_range: 0.001 - 10 kg*m^2\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar I.\r
    en: Check SI units, sign, and physical context when using I.\r
- id: mu_s\r
  symbol: \\mu_s\r
  nombre:\r
    es: coeficiente_friccion_estatica\r
    en: static_friction_coefficient\r
  descripcion:\r
    es: Relación adimensional que define el límite de adherencia entre superficies.\r
    en: Dimensionless ratio defining the adhesion limit between surfaces.\r
  unidad_si: adimensional\r
  dimension: 1\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Parámetro de interfaz\r
    en: Interface parameter\r
  used_in:\r
  - modelos\r
  - ejemplos\r
  common_mistake:\r
    es: Confundir con el coeficiente cinético mu_k.\r
    en: Confusing it with the kinetic coefficient mu_k.\r
  typical_range: 0.1 - 1.0\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar \\mu_s.\r
    en: Check SI units, sign, and physical context when using \\mu_s.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: gravedad\r
    en: gravity\r
  descripcion:\r
    es: Aceleración debida al campo gravitatorio terrestre.\r
    en: Acceleration due to the Earth's gravitational field.\r
  unidad_si: m/s^2\r
  dimension: L/T^2\r
  is_vector: true\r
  components:\r
  - 0\r
  - -g\r
  category: constant\r
  physical_role:\r
    es: Campo de fuerza externo\r
    en: External force field\r
  used_in:\r
  - ejemplos\r
  common_mistake:\r
    es: Olvidar que es una aceleración, no una fuerza.\r
    en: Forgetting it is an acceleration, not a force.\r
  typical_range: 0 - 20 m/s^2\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar g.\r
    en: Check SI units, sign, and physical context when using g.\r
- id: mu_k\r
  symbol: \\mu_k\r
  nombre:\r
    es: coeficiente_friccion_cinetica\r
    en: kinetic_friction_coefficient\r
  descripcion:\r
    es: Relación adimensional que define la fricción durante el deslizamiento relativo.\r
    en: Dimensionless ratio defining friction during relative sliding.\r
  unidad_si: adimensional\r
  dimension: 1\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Parámetro de interfaz disipativa\r
    en: Dissipative interface parameter\r
  used_in:\r
  - modelos\r
  - aplicaciones\r
  common_mistake:\r
    es: Usarlo en lugar de mu_s dentro del régimen de rodadura pura.\r
    en: Using it instead of mu_s within the pure rolling regime.\r
  typical_range: 0.05 - 0.8\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero representa un caso limite fisicamente interpretable.\r
      en: Zero represents a physically interpretable limiting case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades SI, signo y contexto fisico al usar \\mu_k.\r
    en: Check SI units, sign, and physical context when using \\mu_k.\r
`;export{n as default};
