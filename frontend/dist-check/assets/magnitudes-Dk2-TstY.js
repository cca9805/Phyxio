const e=`version: 1\r
magnitudes:\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: Momento de inercia (eje paralelo)\r
    en: Moment of inertia (parallel axis)\r
  descripcion:\r
    es: Resistencia rotacional respecto a un eje que no pasa por el centro de masas.\r
    en: Rotational resistance about an axis that does not pass through the center of mass.\r
  unidad_si: kg·m²\r
  dimension: ML²\r
  is_vector: false\r
  components: null\r
  category:\r
    es: derivada\r
    en: derived\r
  physical_role:\r
    es: variable dependiente\r
    en: dependent variable\r
  used_in:\r
  - steiner-directa\r
  - respuesta-rotacional\r
  common_mistake:\r
    es: Confundir este valor con el momento mínimo (Icm).\r
    en: Confusing this value with the minimum moment (Icm).\r
  typical_range:\r
    es: Siempre mayor que el Icm para la misma orientación.\r
    en: Always greater than Icm for the same orientation.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
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
    es: Verificar unidades y eje de referencia al usar I.\r
    en: Check units and reference axis when using I.\r
- id: Icm\r
  symbol: Icm\r
  nombre:\r
    es: Momento de inercia centroidal\r
    en: Centroidal moment of inertia\r
  descripcion:\r
    es: Momento de inercia respecto a un eje paralelo al dado que pasa por el centro de masas.\r
    en: Moment of inertia about an axis parallel to the given one passing through the center of mass.\r
  unidad_si: kg·m²\r
  dimension: ML²\r
  is_vector: false\r
  components: null\r
  category:\r
    es: derivada\r
    en: derived\r
  physical_role:\r
    es: parámetro\r
    en: parameter\r
  used_in:\r
  - steiner-directa\r
  common_mistake:\r
    es: Usar el Icm respecto a un eje que no es paralelo al eje de giro final.\r
    en: Using Icm about an axis that is not parallel to the final rotation axis.\r
  typical_range:\r
    es: Es el valor mínimo de inercia para una dirección de eje dada.\r
    en: It is the minimum inertia value for a given axis direction.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
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
    es: Verificar unidades y eje de referencia al usar Icm.\r
    en: Check units and reference axis when using Icm.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa\r
    en: Mass\r
  descripcion:\r
    es: Masa total del sólido rígido.\r
    en: Total mass of the rigid solid.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category:\r
    es: fundamental\r
    en: fundamental\r
  physical_role:\r
    es: parámetro\r
    en: parameter\r
  used_in:\r
  - steiner-directa\r
  common_mistake:\r
    es: Olvidar que toda la masa del cuerpo contribuye al término traslacional.\r
    en: Forgetting that the entire body mass contributes to the translational term.\r
  typical_range:\r
    es: Variable según el sistema.\r
    en: Variable depending on the system.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
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
    es: Verificar unidades y eje de referencia al usar m.\r
    en: Check units and reference axis when using m.\r
- id: d\r
  symbol: d\r
  nombre:\r
    es: Distancia entre ejes\r
    en: Distance between axes\r
  descripcion:\r
    es: Separación perpendicular entre el eje que pasa por el centro de masas y el eje paralelo de rotación.\r
    en: Perpendicular separation between the axis passing through the center of mass and the parallel axis of rotation.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - steiner-directa\r
  common_mistake:\r
    es: Tomar la distancia al origen de coordenadas en lugar de la distancia perpendicular entre los ejes.\r
    en: Taking the distance to the coordinate origin instead of the perpendicular distance between the axes.\r
  typical_range:\r
    es: $10^{-2}$ a $10^2\\text{ m}$.\r
    en: $10^{-2}$ to $10^2\\text{ m}$.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
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
    es: Verificar unidades y eje de referencia al usar d.\r
    en: Check units and reference axis when using d.\r
- id: alpha\r
  symbol: alpha\r
  nombre:\r
    es: Aceleracion angular\r
    en: Angular acceleration\r
  descripcion:\r
    es: Cambio temporal de la velocidad angular.\r
    en: Time rate of change of angular velocity.\r
  unidad_si: rad/s^2\r
  dimension: T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - respuesta-rotacional\r
  common_mistake:\r
    es: Confundirla con velocidad angular omega.\r
    en: Confusing it with angular velocity omega.\r
  typical_range:\r
    es: Variable segun el problema.\r
    en: Problem-dependent.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de giro elegido.\r
      en: The sign depends on the chosen rotation convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si es cero no cambia la velocidad angular.\r
      en: If zero, angular velocity does not change.\r
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
    es: Mantener coherencia de signos con el torque.\r
    en: Keep sign convention consistent with torque.\r
- id: tau\r
  symbol: tau\r
  nombre:\r
    es: Torque\r
    en: Torque\r
  descripcion:\r
    es: Momento de fuerza neto aplicado al sistema.\r
    en: Net moment of force applied to the system.\r
  unidad_si: N·m\r
  dimension: ML^2T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - respuesta-rotacional\r
  common_mistake:\r
    es: Usar fuerza en N en lugar de torque en N·m.\r
    en: Using force in N instead of torque in N·m.\r
  typical_range:\r
    es: Variable segun el sistema.\r
    en: System-dependent.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido de giro.\r
      en: The sign indicates rotation sense.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si es cero no hay aceleracion angular neta.\r
      en: If zero, there is no net angular acceleration.\r
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
    es: Revisar el brazo de palanca y el signo.\r
    en: Check lever arm and sign.\r
`;export{e as default};
