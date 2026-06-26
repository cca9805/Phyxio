const n=`version: 1\r
magnitudes:\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: posición angular\r
    en: angular position\r
  descripcion:\r
    es: Ángulo que describe la orientación de un sólido respecto a un eje de referencia.\r
    en: Angle describing the orientation of a solid relative to a reference axis.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - cinematica-rotacional\r
  common_mistake: Confundir theta con otra magnitud cercana dentro de cinematica rotacional.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - cinematica-rotacional\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar theta con una definicion estable antes de sustituir valores.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: velocidad angular\r
    en: angular velocity\r
  descripcion:\r
    es: Rapidez con la que cambia la posición angular por unidad de tiempo.\r
    en: Rate of change of angular position per unit of time.\r
  unidad_si: rad/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - cinematica-rotacional\r
  common_mistake: Confundir omega con otra magnitud cercana dentro de cinematica rotacional.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - cinematica-rotacional\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar omega con una definicion estable antes de sustituir valores.\r
- id: alpha\r
  symbol: \\alpha\r
  nombre:\r
    es: aceleración angular\r
    en: angular acceleration\r
  descripcion:\r
    es: Tasa de cambio de la velocidad angular por unidad de tiempo.\r
    en: Rate of change of angular velocity per unit of time.\r
  unidad_si: rad/s^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - cinematica-rotacional\r
  common_mistake: Confundir alpha con otra magnitud cercana dentro de cinematica rotacional.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - cinematica-rotacional\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar alpha con una definicion estable antes de sustituir valores.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Parámetro temporal que cronometra la evolución del movimiento.\r
    en: Temporal parameter that times the motion's evolution.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - cinematica-rotacional\r
  common_mistake: Confundir t con otra magnitud cercana dentro de cinematica rotacional.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - cinematica-rotacional\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.\r
- id: delta_theta\r
  symbol: \\Delta\\theta\r
  nombre:\r
    es: desplazamiento angular\r
    en: angular displacement\r
  descripcion:\r
    es: Variación de la posición angular entre dos instantes; ángulo barrido durante un intervalo de tiempo.\r
    en: Change in angular position between two instants; angle swept during a time interval.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - cinematica-rotacional\r
  common_mistake: Confundir el desplazamiento angular con la posición angular theta.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo si el giro es en sentido antihorario, negativo si es horario (según convención).\r
      en: Positive for counterclockwise rotation, negative for clockwise (by convention).\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Un desplazamiento angular nulo indica que el cuerpo ha vuelto a su posición inicial.\r
      en: Zero angular displacement means the body has returned to its initial position.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - cinematica-rotacional\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Distinguir delta_theta (variacion) de theta (posicion) evita errores de sustitución.\r
`;export{n as default};
