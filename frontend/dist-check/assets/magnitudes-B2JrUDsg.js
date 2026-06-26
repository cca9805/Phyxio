const e=`version: 1\r
magnitudes:\r
- id: momento_lineal_total\r
  symbol: \\vec P\r
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
  - momento_lineal_total_x\r
  - momento_lineal_total_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir momento_lineal_total con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar momento_lineal_total con una definicion estable antes de sustituir valores.\r
- id: momento_lineal_individual\r
  symbol: \\vec p_i\r
  nombre:\r
    es: momento lineal individual\r
    en: individual linear momentum\r
  descripcion:\r
    es: Momento lineal individual asociado a este subtema.\r
    en: Individual linear momentum associated with this topic.\r
  unidad_si: kg*m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - momento_lineal_individual_x\r
  - momento_lineal_individual_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir momento_lineal_individual con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar momento_lineal_individual con una definicion estable antes de sustituir valores.\r
- id: masa_individual\r
  symbol: m_i\r
  nombre:\r
    es: masa individual\r
    en: individual mass\r
  descripcion:\r
    es: Masa individual del sistema o cuerpo considerado.\r
    en: Individual mass of the considered body or system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir masa_individual con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar masa_individual con una definicion estable antes de sustituir valores.\r
- id: velocidad_individual\r
  symbol: \\vec v_i\r
  nombre:\r
    es: velocidad individual\r
    en: individual velocity\r
  descripcion:\r
    es: Velocidad individual en el contexto de este subtema.\r
    en: Individual velocity in the context of the topic.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - velocidad_individual_x\r
  - velocidad_individual_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir velocidad_individual con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar velocidad_individual con una definicion estable antes de sustituir valores.\r
- id: fuerza_externa_neta\r
  symbol: \\vec F_{ext}\r
  nombre:\r
    es: fuerza externa neta\r
    en: net external force\r
  descripcion:\r
    es: Fuerza externa neta relevante en este subtema.\r
    en: Net external force relevant to the topic.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: true\r
  components:\r
  - fuerza_externa_neta_x\r
  - fuerza_externa_neta_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir fuerza_externa_neta con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar fuerza_externa_neta con una definicion estable antes de sustituir valores.\r
- id: impulso_externo\r
  symbol: \\vec J_{ext}\r
  nombre:\r
    es: impulso externo\r
    en: external impulse\r
  descripcion:\r
    es: Impulso externo asociado a este subtema.\r
    en: External impulse associated with this topic.\r
  unidad_si: kg*m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - impulso_externo_x\r
  - impulso_externo_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir impulso_externo con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar impulso_externo con una definicion estable antes de sustituir valores.\r
- id: variacion_momento_total\r
  symbol: \\Delta \\vec P\r
  nombre:\r
    es: variacion del momento total\r
    en: total momentum change\r
  descripcion:\r
    es: Variacion del momento total asociado a este subtema.\r
    en: Total momentum change associated with this topic.\r
  unidad_si: kg*m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - variacion_momento_total_x\r
  - variacion_momento_total_y\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir variacion_momento_total con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar variacion_momento_total con una definicion estable antes de sustituir valores.\r
- id: tiempo\r
  symbol: \\Delta t\r
  nombre:\r
    es: intervalo temporal\r
    en: time interval\r
  descripcion:\r
    es: Intervalo temporal relevante para el proceso.\r
    en: Time interval relevant to the process.\r
  unidad_si: s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir tiempo con otra magnitud cercana dentro de sistemas aislados y fuerzas externas.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar tiempo con una definicion estable antes de sustituir valores.\r
- id: Pinitial\r
  symbol: \\vec{P}_i\r
  nombre:\r
    es: momento lineal total inicial\r
    en: initial total linear momentum\r
  descripcion:\r
    es: Momento lineal total del sistema antes de la interacción.\r
    en: Total linear momentum of the system before the interaction.\r
  unidad_si: kg*m/s\r
  dimension: M L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir el estado inicial con el final al aplicar la conservación.\r
  typical_range: Depende de las masas y velocidades iniciales.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del movimiento según la convención elegida.\r
      en: The sign indicates the direction of motion according to the chosen convention.\r
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
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Pfinal debe igualar a Pinitial cuando el sistema es aislado.\r
- id: Pfinal\r
  symbol: \\vec{P}_f\r
  nombre:\r
    es: momento lineal total final\r
    en: final total linear momentum\r
  descripcion:\r
    es: Momento lineal total del sistema después de la interacción.\r
    en: Total linear momentum of the system after the interaction.\r
  unidad_si: kg*m/s\r
  dimension: M L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Olvidar incluir todas las partes del sistema al calcular el momento final.\r
  typical_range: Igual a Pinitial si el sistema está aislado.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del movimiento resultante.\r
      en: The sign indicates the direction of the resulting motion.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El sistema queda en reposo si Pfinal es cero.\r
      en: The system comes to rest if Pfinal is zero.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Verificar siempre que Pfinal = Pinitial como comprobación de la conservación.\r
- id: m1\r
  symbol: m_1\r
  nombre:\r
    es: masa del cuerpo 1\r
    en: mass of body 1\r
  descripcion:\r
    es: Masa del primer cuerpo del sistema de dos partículas.\r
    en: Mass of the first body in the two-particle system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Intercambiar m1 y m2 en las fórmulas de retroceso o colisión.\r
  typical_range: 0.1 kg a 10000 kg según el contexto.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa siempre es positiva.\r
      en: Mass is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa nula no tiene sentido físico en este modelo.\r
      en: Zero mass is not physically meaningful in this model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: m1 y m2 son parámetros del sistema; determinar cuál es mayor orienta el análisis de retroceso.\r
- id: m2\r
  symbol: m_2\r
  nombre:\r
    es: masa del cuerpo 2\r
    en: mass of body 2\r
  descripcion:\r
    es: Masa del segundo cuerpo del sistema de dos partículas.\r
    en: Mass of the second body in the two-particle system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir m2 con la masa total del sistema.\r
  typical_range: 0.1 kg a 10000 kg según el contexto.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa siempre es positiva.\r
      en: Mass is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa nula no tiene sentido físico en este modelo.\r
      en: Zero mass is not physically meaningful in this model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Comparar m1 y m2 ayuda a anticipar qué cuerpo sufrirá mayor cambio de velocidad.\r
- id: v1i\r
  symbol: v_{1i}\r
  nombre:\r
    es: velocidad inicial del cuerpo 1\r
    en: initial velocity of body 1\r
  descripcion:\r
    es: Velocidad del primer cuerpo antes de la interacción.\r
    en: Velocity of the first body before the interaction.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: true\r
  components: null\r
  category: fundamental\r
  physical_role: initial_condition\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Olvidar asignar signo negativo cuando el cuerpo se mueve en sentido opuesto al positivo.\r
  typical_range: 0 a 100 m/s en problemas típicos de mecánica.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo en la dirección convencional, negativo en la opuesta.\r
      en: Positive in the conventional direction, negative in the opposite.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El cuerpo 1 estaba inicialmente en reposo.\r
      en: Body 1 was initially at rest.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Siempre declarar el convenio de signos antes de sustituir v1i.\r
- id: v2i\r
  symbol: v_{2i}\r
  nombre:\r
    es: velocidad inicial del cuerpo 2\r
    en: initial velocity of body 2\r
  descripcion:\r
    es: Velocidad del segundo cuerpo antes de la interacción.\r
    en: Velocity of the second body before the interaction.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: true\r
  components: null\r
  category: fundamental\r
  physical_role: initial_condition\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Asumir que el cuerpo 2 siempre está en reposo si no se especifica lo contrario.\r
  typical_range: 0 a 100 m/s en problemas típicos de mecánica.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo en la dirección convencional, negativo en la opuesta.\r
      en: Positive in the conventional direction, negative in the opposite.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El cuerpo 2 estaba inicialmente en reposo.\r
      en: Body 2 was initially at rest.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Comprobar si v2i = 0 simplifica considerablemente las ecuaciones.\r
- id: v1f\r
  symbol: v_{1f}\r
  nombre:\r
    es: velocidad final del cuerpo 1\r
    en: final velocity of body 1\r
  descripcion:\r
    es: Velocidad del primer cuerpo después de la interacción.\r
    en: Velocity of the first body after the interaction.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: result\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: En retroceso, olvidar que v1f debe ser negativo si v2f es positivo.\r
  typical_range: Puede ser negativo en explosiones o retrocesos.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del movimiento tras la interacción.\r
      en: The sign indicates the direction of motion after the interaction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El cuerpo 1 queda en reposo tras la interacción.\r
      en: Body 1 comes to rest after the interaction.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: La magnitud de v1f respecto a v1i indica si el cuerpo aceleró o desaceleró.\r
- id: v2f\r
  symbol: v_{2f}\r
  nombre:\r
    es: velocidad final del cuerpo 2\r
    en: final velocity of body 2\r
  descripcion:\r
    es: Velocidad del segundo cuerpo después de la interacción.\r
    en: Velocity of the second body after the interaction.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: result\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: En una colisión elástica, asumir que v2f es siempre igual a v1i.\r
  typical_range: Puede ser positivo o negativo dependiendo del tipo de interacción.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección de movimiento del cuerpo 2 tras la interacción.\r
      en: The sign indicates the direction of motion of body 2 after the interaction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El cuerpo 2 queda en reposo tras la interacción.\r
      en: Body 2 comes to rest after the interaction.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: En explosiones desde el reposo, v1f y v2f tienen signos opuestos.\r
- id: vf\r
  symbol: v_f\r
  nombre:\r
    es: velocidad final común\r
    en: common final velocity\r
  descripcion:\r
    es: Velocidad común del sistema unido tras una colisión perfectamente inelástica.\r
    en: Common velocity of the combined system after a perfectly inelastic collision.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: result\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir vf con v1f en colisiones donde los cuerpos no quedan unidos.\r
  typical_range: Siempre menor en magnitud que la velocidad del cuerpo más rápido antes del choque.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección del movimiento del conjunto tras el choque.\r
      en: The sign indicates the direction of motion of the combined set after the collision.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El conjunto queda en reposo si los momentos se cancelan exactamente.\r
      en: The set comes to rest if momenta cancel exactly.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: vf siempre es menor que la velocidad del cuerpo más rápido; útil para verificar el resultado.\r
- id: masa_total\r
  symbol: M\r
  nombre:\r
    es: masa total del sistema\r
    en: total system mass\r
  descripcion:\r
    es: Suma de las masas de todos los cuerpos del sistema; útil en colisiones inelásticas.\r
    en: Sum of the masses of all bodies in the system; useful in inelastic collisions.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Olvidar incluir una de las masas al calcular la masa total tras un acoplamiento.\r
  typical_range: Siempre mayor que cualquiera de las masas individuales.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa siempre es positiva.\r
      en: Mass is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: La masa total no puede ser nula.\r
      en: Total mass cannot be zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: masa_total = m1 + m2; un valor mayor implica menor velocidad final en colisiones inelásticas.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa de un cuerpo\r
    en: mass of a body\r
  descripcion:\r
    es: Masa genérica de un cuerpo usado en la definición del momento lineal individual p=mv.\r
    en: Generic mass of a body used in the definition of individual linear momentum p=mv.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir la masa genérica m con la masa total del sistema.\r
  typical_range: Depende del contexto físico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa siempre es positiva.\r
      en: Mass is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa nula carece de sentido en este modelo.\r
      en: Zero mass is not meaningful in this model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: m es la masa de un cuerpo genérico; en problemas de dos cuerpos usar m1 y m2.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad de un cuerpo\r
    en: velocity of a body\r
  descripcion:\r
    es: Velocidad genérica de un cuerpo usada en la definición del momento lineal individual p=mv.\r
    en: Generic velocity of a body used in the definition of individual linear momentum p=mv.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: true\r
  components: null\r
  category: fundamental\r
  physical_role: initial_condition\r
  used_in:\r
  - sistemas-aislados-y-fuerzas-externas\r
  common_mistake: Confundir la velocidad genérica v con la velocidad final específica vf.\r
  typical_range: Depende del contexto físico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo en la dirección convencional, negativo en la opuesta.\r
      en: Positive in the conventional direction, negative in the opposite.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El cuerpo está en reposo.\r
      en: The body is at rest.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - sistemas-aislados-y-fuerzas-externas\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: v es la velocidad genérica de un cuerpo; en problemas de dos cuerpos usar v1i, v2i, v1f, v2f.\r
`;export{e as default};
