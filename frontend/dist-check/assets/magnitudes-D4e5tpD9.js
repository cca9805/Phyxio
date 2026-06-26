const n=`version: 1\r
magnitudes:\r
- id: v_t\r
  symbol: v_t\r
  nombre:\r
    es: velocidad tangencial\r
    en: tangential velocity\r
  descripcion:\r
    es: Velocidad lineal instantánea de un punto en la trayectoria curva, siempre\r
      tangente a la misma.\r
    en: Instantaneous linear velocity of a point on the curved path, always tangent\r
      to it.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - relacion-lineal-angular\r
  common_mistake: Confundir v_t con otra magnitud cercana dentro de relacion lineal\r
    angular.\r
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
    - relacion-lineal-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v_t con una definicion estable antes de sustituir valores.\r
- id: a_t\r
  symbol: a_t\r
  nombre:\r
    es: aceleración tangencial\r
    en: tangential acceleration\r
  descripcion:\r
    es: Componente de la aceleración lineal que cambia el módulo de la velocidad.\r
    en: Component of linear acceleration that changes the magnitude of velocity.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - relacion-lineal-angular\r
  common_mistake: Confundir a_t con otra magnitud cercana dentro de relacion lineal\r
    angular.\r
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
    - relacion-lineal-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_t con una definicion estable antes de sustituir valores.\r
- id: a_n\r
  symbol: a_n\r
  nombre:\r
    es: aceleración normal (centrípeta)\r
    en: normal (centripetal) acceleration\r
  descripcion:\r
    es: Componente de la aceleración que cambia la dirección de la velocidad, apuntando\r
      al centro.\r
    en: Component of acceleration that changes the direction of velocity, pointing\r
      to the center.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - relacion-lineal-angular\r
  common_mistake: Confundir a_n con otra magnitud cercana dentro de relacion lineal\r
    angular.\r
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
    - relacion-lineal-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_n con una definicion estable antes de sustituir valores.\r
- id: a_total\r
  symbol: a_{total}\r
  nombre:\r
    es: aceleración lineal total\r
    en: total linear acceleration\r
  descripcion:\r
    es: Suma vectorial de las componentes tangencial y normal.\r
    en: Vector sum of the tangential and normal components.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - relacion-lineal-angular\r
  common_mistake: Confundir a_total con otra magnitud cercana dentro de relacion lineal\r
    angular.\r
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
    - relacion-lineal-angular\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar a_total con una definicion estable antes de sustituir valores.\r
`;export{n as default};
