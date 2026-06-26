const e=`version: 1\r
magnitudes:\r
- id: m1\r
  symbol: m_1\r
  nombre:\r
    es: masa del cuerpo 1\r
    en: mass of body 1\r
  descripcion:\r
    es: Masa puntual o masa equivalente asociada al cuerpo 1 dentro del sistema discreto\r
      elegido.\r
    en: Point mass or equivalent mass associated with body 1 in the chosen discrete\r
      system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confundir m1 con otra magnitud cercana dentro de centro de masas\r
    sistemas discretos.\r
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
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m1 con una definicion estable antes de sustituir valores.\r
- id: m2\r
  symbol: m_2\r
  nombre:\r
    es: masa del cuerpo 2\r
    en: mass of body 2\r
  descripcion:\r
    es: Masa puntual o masa equivalente asociada al cuerpo 2 dentro del sistema discreto\r
      elegido.\r
    en: Point mass or equivalent mass associated with body 2 in the chosen discrete\r
      system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confundir m2 con otra magnitud cercana dentro de centro de masas\r
    sistemas discretos.\r
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
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m2 con una definicion estable antes de sustituir valores.\r
- id: x1\r
  symbol: x_1\r
  nombre:\r
    es: posición del cuerpo 1\r
    en: position of body 1\r
  descripcion:\r
    es: Coordenada x del cuerpo 1 medida respecto del origen y del sentido positivo\r
      elegidos.\r
    en: x-coordinate of body 1 measured with the chosen origin and positive direction.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confundir x1 con otra magnitud cercana dentro de centro de masas\r
    sistemas discretos.\r
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
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar x1 con una definicion estable antes de sustituir valores.\r
- id: x2\r
  symbol: x_2\r
  nombre:\r
    es: posición del cuerpo 2\r
    en: position of body 2\r
  descripcion:\r
    es: Coordenada x del cuerpo 2 medida sobre el mismo eje y con la misma referencia\r
      que x1.\r
    en: x-coordinate of body 2 measured on the same axis and in the same reference\r
      frame as x1.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confundir x2 con otra magnitud cercana dentro de centro de masas\r
    sistemas discretos.\r
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
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar x2 con una definicion estable antes de sustituir valores.\r
- id: xcm\r
  symbol: x_{cm}\r
  nombre:\r
    es: posición del centro de masas\r
    en: center-of-mass position\r
  descripcion:\r
    es: Coordenada x del centro de masas obtenida como promedio ponderado por la masa\r
      en el marco elegido.\r
    en: x-coordinate of the center of mass obtained as a mass-weighted average in\r
      the chosen frame.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confundir xcm con otra magnitud cercana dentro de centro de masas\r
    sistemas discretos.\r
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
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar xcm con una definicion estable antes de sustituir valores.\r
- id: M\r
  symbol: M\r
  nombre:\r
    es: masa total\r
    en: total mass\r
  descripcion:\r
    es: Masa total del sistema discreto; normaliza el promedio ponderado que define\r
      el centro de masas.\r
    en: Total mass of the discrete system; it normalizes the weighted average that\r
      defines the center of mass.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confundir M con otra magnitud cercana dentro de centro de masas\r
    sistemas discretos.\r
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
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar M con una definicion estable antes de sustituir valores.\r
- id: m_i\r
  symbol: m_i\r
  nombre:\r
    es: masa de la partícula i\r
    en: mass of particle i\r
  descripcion:\r
    es: Masa de una partícula genérica dentro del conjunto de N cuerpos.\r
    en: Mass of a generic particle within the set of N bodies.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Tratar m_i como una constante si varía entre partículas.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Magnitud escalar positiva.\r
      en: Positive scalar quantity.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una partícula sin masa no contribuye al sistema.\r
      en: A massless particle does not contribute to the system.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Representa el peso estadístico de cada punto en el promedio.\r
- id: x_i\r
  symbol: x_i\r
  nombre:\r
    es: posición x de la partícula i\r
    en: x-position of particle i\r
  descripcion:\r
    es: Coordenada horizontal de la i-ésima partícula del sistema.\r
    en: Horizontal coordinate of the i-th particle of the system.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Olvidar el signo de la coordenada según el origen.\r
  typical_range: Variable.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Posición a la derecha o izquierda del origen.\r
      en: Position to the right or left of the origin.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: La partícula coincide con el origen en el eje x.\r
      en: The particle coincides with the origin on the x-axis.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Esencial para el cálculo de la componente xcm.\r
- id: y_i\r
  symbol: y_i\r
  nombre:\r
    es: posición y de la partícula i\r
    en: y-position of particle i\r
  descripcion:\r
    es: Coordenada vertical de la i-ésima partícula del sistema.\r
    en: Vertical coordinate of the i-th particle of the system.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Invertir el sentido positivo del eje vertical.\r
  typical_range: Variable.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Posición arriba o abajo del origen.\r
      en: Position above or below the origin.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: La partícula coincide con el origen en el eje y.\r
      en: The particle coincides with the origin on the y-axis.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Esencial para el cálculo de la componente ycm.\r
- id: r_i\r
  symbol: \\vec{r}_i\r
  nombre:\r
    es: vector posición de la partícula i\r
    en: position vector of particle i\r
  descripcion:\r
    es: Vector que localiza a la partícula i desde el origen de coordenadas.\r
    en: Vector locating particle i from the coordinate origin.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: true\r
  components: [x_i, y_i]\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Sumar vectores como si fueran escalares.\r
  typical_range: Variable.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Dirección y sentido en el espacio.\r
      en: Direction and sense in space.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: La partícula está en el origen.\r
      en: The particle is at the origin.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Base geométrica del centro de masas vectorial.\r
- id: ycm\r
  symbol: y_{cm}\r
  nombre:\r
    es: posición y del centro de masas\r
    en: y-coordinate of the center of mass\r
  descripcion:\r
    es: Coordenada vertical del centro de masas para un sistema de partículas.\r
    en: Vertical coordinate of the center of mass for a particle system.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: No usar la misma masa total M que en xcm.\r
  typical_range: Variable.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Altura del CM respecto al origen.\r
      en: CM height relative to the origin.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El CM se encuentra sobre el eje horizontal de referencia.\r
      en: The CM is on the horizontal reference axis.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Componente vertical del baricentro.\r
- id: rcm\r
  symbol: \\vec{r}_{cm}\r
  nombre:\r
    es: vector posición del centro de masas\r
    en: center-of-mass position vector\r
  descripcion:\r
    es: Vector que apunta a la posición media ponderada de toda la masa del sistema.\r
    en: Vector pointing to the mass-weighted average position of the entire system.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: true\r
  components: [xcm, ycm]\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Creer que el CM debe coincidir con una partícula real.\r
  typical_range: Variable.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Ubicación vectorial del punto de equilibrio de masa.\r
      en: Vector location of the mass equilibrium point.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El centro de masas del sistema está en el origen.\r
      en: The system's center of mass is at the origin.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - centro-de-masas-sistemas-discretos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Representa el sistema completo como una sola partícula puntual equivalente.\r
- id: colisiones\r
  symbol: \\text{Colisiones}\r
  nombre:\r
    es: colisiones\r
    en: collisions\r
  descripcion:\r
    es: Procesos de interacción breve entre cuerpos donde el centro de masas es clave para el análisis del momento.\r
    en: Brief interaction processes between bodies where the center of mass is key for momentum analysis.\r
  unidad_si: null\r
  dimension: null\r
  is_vector: false\r
  components: null\r
  category: external_reference\r
  physical_role: conceptual_link\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Ninguno.\r
  typical_range: N/A\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: N/A\r
      en: N/A\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: N/A\r
      en: N/A\r
  value_nature:\r
    kind: conceptual\r
    nonnegative_only: true\r
    expected_interval: N/A\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - centro-de-masas-sistemas-discretos\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Enlace a la teoría de choques.\r
- id: momento-lineal\r
  symbol: \\vec{p}\r
  nombre:\r
    es: momento lineal\r
    en: linear momentum\r
  descripcion:\r
    es: Magnitud vectorial que representa la cantidad de movimiento de una partícula o sistema.\r
    en: Vector quantity representing the momentum of a particle or system.\r
  unidad_si: kg*m/s\r
  dimension: ML/T\r
  is_vector: true\r
  components: [px, py]\r
  category: external_reference\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confundir con la energía cinética.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Dirección del movimiento.\r
      en: Direction of motion.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Reposo en el sistema de referencia.\r
      en: Rest in the reference frame.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: N/A\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - centro-de-masas-sistemas-discretos\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: El momento total del sistema es M * Vcm.\r
- id: dynamics-of-particle-systems\r
  symbol: \\text{Dinámica}\r
  nombre:\r
    es: dinámica de sistemas de partículas\r
    en: dynamics of particle systems\r
  descripcion:\r
    es: Estudio de las leyes que rigen el movimiento de conjuntos de masas.\r
    en: Study of the laws governing the motion of sets of masses.\r
  unidad_si: null\r
  dimension: null\r
  is_vector: false\r
  components: null\r
  category: external_reference\r
  physical_role: conceptual_link\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Ninguno.\r
  typical_range: N/A\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: N/A\r
      en: N/A\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: N/A\r
      en: N/A\r
  value_nature:\r
    kind: conceptual\r
    nonnegative_only: true\r
    expected_interval: N/A\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - centro-de-masas-sistemas-discretos\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Contexto avanzado para sistemas discretos.\r
- id: rotation\r
  symbol: \\omega\r
  nombre:\r
    es: rotación\r
    en: rotation\r
  descripcion:\r
    es: Movimiento de un sistema alrededor de un eje, a menudo analizado respecto al centro de masas.\r
    en: Motion of a system around an axis, often analyzed relative to the center of mass.\r
  unidad_si: rad/s\r
  dimension: 1/T\r
  is_vector: true\r
  components: [wx, wy, wz]\r
  category: external_reference\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: No considerar que el CM puede rotar y traslarse.\r
  typical_range: Depende del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Sentido de giro.\r
      en: Direction of rotation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Sin rotación neta.\r
      en: No net rotation.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: N/A\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - centro-de-masas-sistemas-discretos\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: El CM es el eje de rotación natural para sistemas libres.\r
- id: collisions\r
  symbol: \\text{Collisions}\r
  nombre:\r
    es: colisiones\r
    en: collisions\r
  descripcion:\r
    es: Interaction between bodies where total linear momentum is conserved.\r
    en: Interaction between bodies where total linear momentum is conserved.\r
  unidad_si: null\r
  dimension: null\r
  is_vector: false\r
  components: null\r
  category: external_reference\r
  physical_role: conceptual_link\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: None.\r
  typical_range: N/A\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: N/A\r
      en: N/A\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: N/A\r
      en: N/A\r
  value_nature:\r
    kind: conceptual\r
    nonnegative_only: true\r
    expected_interval: N/A\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - centro-de-masas-sistemas-discretos\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Key application of CM.\r
- id: linear-momentum\r
  symbol: \\vec{p}\r
  nombre:\r
    es: momento lineal\r
    en: linear momentum\r
  descripcion:\r
    es: Vector quantity representing the amount of motion.\r
    en: Vector quantity representing the amount of motion.\r
  unidad_si: kg*m/s\r
  dimension: ML/T\r
  is_vector: true\r
  components: [px, py]\r
  category: external_reference\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-sistemas-discretos\r
  common_mistake: Confusing with kinetic energy.\r
  typical_range: N/A\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Direction of movement.\r
      en: Direction of movement.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: System at rest.\r
      en: System at rest.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: N/A\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - centro-de-masas-sistemas-discretos\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Related to CM velocity.\r
`;export{e as default};
