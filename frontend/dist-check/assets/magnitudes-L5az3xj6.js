const e=`version: 1\r
magnitudes:\r
- id: FAB\r
  symbol: \\vec F_{A\\to B}\r
  nombre:\r
    es: fuerza de A sobre B\r
    en: force of A on B\r
  descripcion:\r
    es: Fuerza que el sistema A ejerce sobre el sistema B dentro de una interaccion\r
      concreta.\r
    en: Force exerted by system A on system B within a specific interaction.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - FAB_x\r
  - FAB_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir FAB con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar FAB con una definicion estable antes de sustituir valores.\r
- id: FBA\r
  symbol: \\vec F_{B\\to A}\r
  nombre:\r
    es: fuerza de B sobre A\r
    en: force of B on A\r
  descripcion:\r
    es: Fuerza que el sistema B ejerce sobre el sistema A en la misma interaccion.\r
    en: Force exerted by system B on system A in the same interaction.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - FBA_x\r
  - FBA_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir FBA con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar FBA con una definicion estable antes de sustituir valores.\r
- id: FAx\r
  symbol: F_{A\\to B,x}\r
  nombre:\r
    es: componente x de la fuerza de A sobre B\r
    en: x component of force of A on B\r
  descripcion:\r
    es: Proyeccion sobre x de la fuerza que A ejerce sobre B.\r
    en: Projection along x of the force exerted by A on B.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir FAx con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar FAx con una definicion estable antes de sustituir valores.\r
- id: FBx\r
  symbol: F_{B\\to A,x}\r
  nombre:\r
    es: componente x de la fuerza de B sobre A\r
    en: x component of force of B on A\r
  descripcion:\r
    es: Proyeccion sobre x de la fuerza que B ejerce sobre A.\r
    en: Projection along x of the force exerted by B on A.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir FBx con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar FBx con una definicion estable antes de sustituir valores.\r
- id: FAy\r
  symbol: F_{A\\to B,y}\r
  nombre:\r
    es: componente y de la fuerza de A sobre B\r
    en: y component of force of A on B\r
  descripcion:\r
    es: Proyeccion sobre y de la fuerza que A ejerce sobre B.\r
    en: Projection along y of the force exerted by A on B.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir FAy con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar FAy con una definicion estable antes de sustituir valores.\r
- id: FBy\r
  symbol: F_{B\\to A,y}\r
  nombre:\r
    es: componente y de la fuerza de B sobre A\r
    en: y component of force of B on A\r
  descripcion:\r
    es: Proyeccion sobre y de la fuerza que B ejerce sobre A.\r
    en: Projection along y of the force exerted by B on A.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir FBy con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar FBy con una definicion estable antes de sustituir valores.\r
- id: Nab\r
  symbol: \\vec N_{A\\to B}\r
  nombre:\r
    es: normal de A sobre B\r
    en: normal of A on B\r
  descripcion:\r
    es: Fuerza normal que A ejerce sobre B en una superficie de contacto.\r
    en: Normal force exerted by A on B on a contact surface.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - Nab_x\r
  - Nab_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir Nab con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Nab con una definicion estable antes de sustituir valores.\r
- id: Nba\r
  symbol: \\vec N_{B\\to A}\r
  nombre:\r
    es: normal de B sobre A\r
    en: normal of B on A\r
  descripcion:\r
    es: Fuerza normal reciproca que B ejerce sobre A en el mismo contacto.\r
    en: Reciprocal normal force exerted by B on A in the same contact.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - Nba_x\r
  - Nba_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir Nba con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Nba con una definicion estable antes de sustituir valores.\r
- id: mA\r
  symbol: m_A\r
  nombre:\r
    es: masa del patinador A\r
    en: mass of skater A\r
  descripcion:\r
    es: Masa inercial del primer sistema en interaccion.\r
    en: Inertial mass of the first system in interaction.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir mA con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mA con una definicion estable antes de sustituir valores.\r
- id: mB\r
  symbol: m_B\r
  nombre:\r
    es: masa del patinador B\r
    en: mass of skater B\r
  descripcion:\r
    es: Masa inercial del segundo sistema en interaccion.\r
    en: Inertial mass of the second system in interaction.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir mB con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mB con una definicion estable antes de sustituir valores.\r
- id: aA\r
  symbol: a_A\r
  nombre:\r
    es: aceleracion de A\r
    en: acceleration of A\r
  descripcion:\r
    es: Tasa de cambio de velocidad del sistema A debido a la reaccion.\r
    en: Velocity change rate of system A due to reaction.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir aA con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar aA con una definicion estable antes de sustituir valores.\r
- id: aB\r
  symbol: a_B\r
  nombre:\r
    es: aceleracion de B\r
    en: acceleration of B\r
  descripcion:\r
    es: Tasa de cambio de velocidad del sistema B debido a la accion.\r
    en: Velocity change rate of system B due to action.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir aB con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar aB con una definicion estable antes de sustituir valores.\r
- id: vA\r
  symbol: v_A\r
  nombre:\r
    es: velocidad final de A\r
    en: final velocity of A\r
  descripcion:\r
    es: Velocidad del sistema A tras el intervalo de interaccion.\r
    en: Velocity of system A after the interaction interval.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir vA con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar vA con una definicion estable antes de sustituir valores.\r
- id: vB\r
  symbol: v_B\r
  nombre:\r
    es: velocidad final de B\r
    en: final velocity of B\r
  descripcion:\r
    es: Velocidad del sistema B tras el intervalo de interaccion.\r
    en: Velocity of system B after the interaction interval.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir vB con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar vB con una definicion estable antes de sustituir valores.\r
- id: v0\r
  symbol: v_0\r
  nombre:\r
    es: velocidad inicial\r
    en: initial velocity\r
  descripcion:\r
    es: Velocidad de los sistemas antes de la interaccion.\r
    en: Velocity of the systems before the interaction.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir v0 con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v0 con una definicion estable antes de sustituir valores.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo de interaccion\r
    en: interaction time\r
  descripcion:\r
    es: Duracion del contacto o del empuje entre ambos sistemas.\r
    en: Duration of contact or push between both systems.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir t con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.\r
- id: W\r
  symbol: \\vec W\r
  nombre:\r
    es: peso\r
    en: weight\r
  descripcion:\r
    es: Fuerza de atraccion gravitatoria ejercida por la Tierra.\r
    en: Gravitational attraction force exerted by the Earth.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - W_x\r
  - W_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir W con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar W con una definicion estable antes de sustituir valores.\r
- id: N_gen\r
  symbol: \\vec N\r
  nombre:\r
    es: fuerza normal genérica\r
    en: generic normal force\r
  descripcion:\r
    es: Fuerza de contacto perpendicular a la superficie de apoyo.\r
    en: Contact force perpendicular to the support surface.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - N_gen_x\r
  - N_gen_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir N_gen con otra magnitud cercana dentro de tercera ley\r
    accion reaccion.\r
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
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar N_gen con una definicion estable antes de sustituir valores.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: aceleración de la gravedad\r
    en: gravitational acceleration\r
  descripcion:\r
    es: Intensidad del campo gravitatorio en la superficie terrestre.\r
    en: Gravitational field intensity on Earth's surface.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: field\r
  physical_role: field_strength\r
  used_in:\r
  - tercera-ley-accion-reaccion\r
  common_mistake: Confundir g con otra magnitud cercana dentro de tercera ley accion\r
    reaccion.\r
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
    - tercera-ley-accion-reaccion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar g con una definicion estable antes de sustituir valores.\r
`;export{e as default};
