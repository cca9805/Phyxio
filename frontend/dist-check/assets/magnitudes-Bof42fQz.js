const n=`version: 1\r
magnitudes:\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: momento lineal total\r
    en: total linear momentum\r
  descripcion:\r
    es: Momento lineal total asociado a este subtema.\r
    en: Total linear momentum associated with this topic.\r
  unidad_si: kg*m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - P_x\r
  - P_y\r
  category: derived\r
  physical_role: gravitational_force\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Confundir P con otra magnitud cercana dentro de impulso externo y ruptura de la conservacion.\r
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
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar P con una definicion estable antes de sustituir valores.\r
- id: F_ext\r
  symbol: F_{ext}\r
  nombre:\r
    es: fuerza externa neta\r
    en: net external force\r
  descripcion:\r
    es: Fuerza externa neta que actúa sobre el sistema; su valor no nulo rompe la conservación del momento.\r
    en: Net external force acting on the system; a non-zero value breaks momentum conservation.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - F_ext_x\r
  - F_ext_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Ignorar que F_ext es un vector y sumar módulos en lugar de componentes con signo.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección de la fuerza en el eje de referencia.\r
      en: The sign indicates the direction of the force along the reference axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: F_ext = 0 es la condición necesaria para la conservación del momento.\r
      en: F_ext = 0 is the necessary condition for momentum conservation.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Identificar todas las fuerzas externas antes de decidir si el sistema está aislado.\r
- id: J\r
  symbol: J\r
  nombre:\r
    es: impulso\r
    en: impulse\r
  descripcion:\r
    es: Impulso asociado a este subtema.\r
    en: Impulse associated with this topic.\r
  unidad_si: kg*m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Confundir J con otra magnitud cercana dentro de impulso externo y ruptura de la conservacion.\r
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
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar J con una definicion estable antes de sustituir valores.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Tiempo relevante para el proceso.\r
    en: Time relevant to the process.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Confundir t con otra magnitud cercana dentro de impulso externo y ruptura de la conservacion.\r
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
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar t con una definicion estable antes de sustituir valores.\r
- id: DeltaP\r
  symbol: \\Delta P\r
  nombre:\r
    es: variación del momento lineal\r
    en: change in linear momentum\r
  descripcion:\r
    es: Diferencia entre el momento lineal final e inicial del sistema.\r
    en: Difference between the final and initial linear momentum of the system.\r
  unidad_si: kg*m/s\r
  dimension: MLT^{-1}\r
  is_vector: true\r
  components:\r
  - DeltaP_x\r
  - DeltaP_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Confundir DeltaP con el momento total P; DeltaP mide el cambio, no el estado.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica si el sistema ha ganado o perdido cantidad de movimiento.\r
      en: The sign indicates whether the system has gained or lost momentum.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: DeltaP = 0 implica que el momento se ha conservado.\r
      en: DeltaP = 0 implies momentum was conserved.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: DeltaP es la huella cuantitativa del impulso externo sobre el sistema.\r
- id: Pinitial\r
  symbol: P_i\r
  nombre:\r
    es: momento lineal inicial\r
    en: initial linear momentum\r
  descripcion:\r
    es: Momento lineal total del sistema antes de la interacción.\r
    en: Total linear momentum of the system before the interaction.\r
  unidad_si: kg*m/s\r
  dimension: MLT^{-1}\r
  is_vector: true\r
  components:\r
  - Pi_x\r
  - Pi_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Confundir el momento inicial de una sola partícula con el momento total del sistema.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo sigue la convención de referencia elegida.\r
      en: The sign follows the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Sistema inicialmente en reposo.\r
      en: System initially at rest.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Pinitial es el punto de partida del balance de momento.\r
- id: Pfinal\r
  symbol: P_f\r
  nombre:\r
    es: momento lineal final\r
    en: final linear momentum\r
  descripcion:\r
    es: Momento lineal total del sistema después de la interacción.\r
    en: Total linear momentum of the system after the interaction.\r
  unidad_si: kg*m/s\r
  dimension: MLT^{-1}\r
  is_vector: true\r
  components:\r
  - Pf_x\r
  - Pf_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: En conservación, Pfinal debe igualarse a Pinitial; no calcularlos por separado.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo sigue la convención de referencia elegida.\r
      en: The sign follows the chosen reference convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Sistema que queda en reposo después de la interacción.\r
      en: System that ends at rest after the interaction.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Pfinal es el resultado del balance de momento después del proceso.\r
- id: m1\r
  symbol: m_1\r
  nombre:\r
    es: masa del cuerpo 1\r
    en: mass of body 1\r
  descripcion:\r
    es: Masa del primer cuerpo o partícula del sistema.\r
    en: Mass of the first body or particle in the system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Confundir la masa con el peso; la masa es escalar e invariante.\r
  typical_range: '> 0'\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa es siempre positiva.\r
      en: Mass is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa nula no tiene sentido físico en mecánica clásica.\r
      en: Zero mass has no physical meaning in classical mechanics.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '(0, +inf)'\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: m1 es un parámetro fijo que escala la velocidad para dar el momento.\r
- id: v1i\r
  symbol: v_{1i}\r
  nombre:\r
    es: velocidad inicial del cuerpo 1\r
    en: initial velocity of body 1\r
  descripcion:\r
    es: Velocidad inicial del primer cuerpo antes de la interacción.\r
    en: Initial velocity of the first body before the interaction.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: true\r
  components:\r
  - v1i_x\r
  - v1i_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Olvidar el signo de la velocidad inicial en colisiones con cuerpos que se aproximan.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del movimiento.\r
      en: The sign indicates the direction of motion.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cuerpo 1 inicialmente en reposo.\r
      en: Body 1 initially at rest.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: v1i es la condición inicial que determina el momento de entrada del cuerpo 1.\r
- id: v1f\r
  symbol: v_{1f}\r
  nombre:\r
    es: velocidad final del cuerpo 1\r
    en: final velocity of body 1\r
  descripcion:\r
    es: Velocidad del primer cuerpo después de la interacción.\r
    en: Velocity of the first body after the interaction.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: true\r
  components:\r
  - v1f_x\r
  - v1f_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Asumir que la velocidad final del cuerpo 1 es igual a la inicial sin verificar.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del movimiento final.\r
      en: The sign indicates the direction of final motion.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cuerpo 1 queda en reposo tras la interacción.\r
      en: Body 1 stops after the interaction.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: v1f es la incógnita clave en problemas de colisiones elásticas.\r
- id: v2f\r
  symbol: v_{2f}\r
  nombre:\r
    es: velocidad final del cuerpo 2\r
    en: final velocity of body 2\r
  descripcion:\r
    es: Velocidad del segundo cuerpo después de la interacción.\r
    en: Velocity of the second body after the interaction.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: true\r
  components:\r
  - v2f_x\r
  - v2f_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: En retroceso, olvidar que v2f debe tener signo opuesto a v1f.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del movimiento final del segundo cuerpo.\r
      en: The sign indicates the direction of final motion of the second body.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cuerpo 2 queda en reposo tras la interacción.\r
      en: Body 2 stops after the interaction.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: v2f en retroceso debe tener dirección opuesta a v1f.\r
- id: vf\r
  symbol: v_f\r
  nombre:\r
    es: velocidad final conjunta\r
    en: joint final velocity\r
  descripcion:\r
    es: Velocidad común de los cuerpos acoplados tras una colisión perfectamente inelástica.\r
    en: Common velocity of coupled bodies after a perfectly inelastic collision.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: true\r
  components:\r
  - vf_x\r
  - vf_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: No usar la masa total (m1+m2) al calcular la velocidad final conjunta.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo sigue la dirección del momento total antes de la colisión.\r
      en: The sign follows the direction of total momentum before the collision.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Ambos cuerpos quedan en reposo si los momentos se cancelan exactamente.\r
      en: Both bodies stop if momenta cancel exactly.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: vf es resultado del acoplamiento total de masas en colisión inelástica.\r
- id: m2\r
  symbol: m_2\r
  nombre:\r
    es: masa del segundo cuerpo\r
    en: mass of second body\r
  descripcion:\r
    es: Masa del segundo cuerpo que interviene en la interacción de dos partículas.\r
    en: Mass of the second body involved in the two-particle interaction.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Intercambiar m1 y m2 al aplicar la ley de retroceso o el balance general.\r
  typical_range: Depende del contexto físico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa es siempre positiva.\r
      en: Mass is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa nula no tiene sentido físico en este modelo.\r
      en: Zero mass has no physical meaning in this model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, +∞)\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: m2 aparece en el balance general y en la ley de retroceso como parámetro conocido.\r
- id: v2i\r
  symbol: v_{2i}\r
  nombre:\r
    es: velocidad inicial del segundo cuerpo\r
    en: initial velocity of second body\r
  descripcion:\r
    es: Velocidad del segundo cuerpo antes de la interacción o colisión.\r
    en: Velocity of the second body before the interaction or collision.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: true\r
  components:\r
  - v2i_x\r
  - v2i_y\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Confundir v2i con v2f. v2i es el estado inicial; v2f es el estado tras la interacción.\r
  typical_range: Depende del contexto físico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección de movimiento según el eje positivo elegido.\r
      en: The sign indicates the direction of motion according to the chosen positive axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El segundo cuerpo puede estar inicialmente en reposo.\r
      en: The second body can be initially at rest.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: En muchos problemas v2i = 0 (blanco en reposo), lo que simplifica el balance de momento.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa genérica\r
    en: generic mass\r
  descripcion:\r
    es: Masa de un cuerpo genérico usada en la definición fundamental del momento lineal.\r
    en: Mass of a generic body used in the fundamental definition of linear momentum.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: No especificar a qué cuerpo corresponde m cuando hay más de uno en el sistema.\r
  typical_range: Depende del contexto físico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa es siempre positiva.\r
      en: Mass is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa nula no tiene sentido físico.\r
      en: Zero mass has no physical meaning.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, +∞)\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: m es el parámetro de la definición P = m·v. En sistemas de varios cuerpos se sustituye por m1 o m2 según corresponda.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad genérica\r
    en: generic velocity\r
  descripcion:\r
    es: Velocidad de un cuerpo genérico usada en la definición fundamental del momento lineal.\r
    en: Velocity of a generic body used in the fundamental definition of linear momentum.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: true\r
  components:\r
  - v_x\r
  - v_y\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - impulso-externo-y-ruptura-de-la-conservacion\r
  common_mistake: Usar v genérico sin especificar si es velocidad inicial o final.\r
  typical_range: Depende del contexto físico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección según el eje elegido.\r
      en: The sign indicates the direction along the chosen axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El cuerpo puede estar en reposo.\r
      en: The body can be at rest.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - impulso-externo-y-ruptura-de-la-conservacion\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: v es la variable cinemática que multiplica a m en la definición del momento. En problemas concretos se especifica como v1i, v1f, v2i, etc.\r
`;export{n as default};
