const e=`version: 1\r
magnitudes:\r
- id: M\r
  symbol: M\r
  nombre:\r
    es: masa total\r
    en: total mass\r
  descripcion:\r
    es: Masa total del cuerpo extendido.\r
    en: Total mass of the extended body.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir M con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar M con una definicion estable antes de sustituir valores.\r
- id: R_cm\r
  symbol: R_cm\r
  nombre:\r
    es: vector centro de masas\r
    en: center-of-mass vector\r
  descripcion:\r
    es: Vector de posición del centro de masas del cuerpo extendido.\r
    en: Position vector of the center of mass of the extended body.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir R_cm con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar R_cm con una definicion estable antes de sustituir valores.\r
- id: I_cm\r
  symbol: I_cm\r
  nombre:\r
    es: primer momento vectorial de masa\r
    en: vector first mass moment\r
  descripcion:\r
    es: Momento de primer orden de la distribución respecto del origen.\r
    en: First-order moment of the distribution with respect to the origin.\r
  unidad_si: kg·m\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir I_cm con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar I_cm con una definicion estable antes de sustituir valores.\r
- id: xcm\r
  symbol: x_cm\r
  nombre:\r
    es: coordenada x del centro de masas\r
    en: x-coordinate of the center of mass\r
  descripcion:\r
    es: Componente horizontal del centro de masas.\r
    en: Horizontal component of the center of mass.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir x_cm con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar x_cm con una definicion estable antes de sustituir valores.\r
- id: I_x\r
  symbol: I_x\r
  nombre:\r
    es: primer momento de masa respecto de x\r
    en: first mass moment about x\r
  descripcion:\r
    es: Integral del producto entre la coordenada x y el diferencial de masa.\r
    en: Integral of the product of x coordinate and mass differential.\r
  unidad_si: kg·m\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir I_x con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar I_x con una definicion estable antes de sustituir valores.\r
- id: r\r
  symbol: r\r
  nombre:\r
    es: vector posición\r
    en: position vector\r
  descripcion:\r
    es: Vector que localiza cada elemento de masa respecto del origen.\r
    en: Vector locating each mass element with respect to the origin.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir r con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar r con una definicion estable antes de sustituir valores.\r
- id: dm\r
  symbol: dm\r
  nombre:\r
    es: diferencial de masa\r
    en: mass differential\r
  descripcion:\r
    es: Elemento infinitesimal de masa usado en la integración.\r
    en: Infinitesimal mass element used in integration.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir dm con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar dm con una definicion estable antes de sustituir valores.\r
- id: rho\r
  symbol: \\rho\r
  nombre:\r
    es: densidad volumétrica\r
    en: volume density\r
  descripcion:\r
    es: Masa por unidad de volumen.\r
    en: Mass per unit volume.\r
  unidad_si: kg/m^3\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir rho con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar rho con una definicion estable antes de sustituir valores.\r
- id: V\r
  symbol: V\r
  nombre:\r
    es: volumen\r
    en: volume\r
  descripcion:\r
    es: Volumen total de la distribución tridimensional.\r
    en: Total volume of the three-dimensional distribution.\r
  unidad_si: m^3\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir V con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar V con una definicion estable antes de sustituir valores.\r
- id: sigma\r
  symbol: \\sigma\r
  nombre:\r
    es: densidad superficial\r
    en: surface density\r
  descripcion:\r
    es: Masa por unidad de área.\r
    en: Mass per unit area.\r
  unidad_si: kg/m^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir sigma con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar sigma con una definicion estable antes de sustituir valores.\r
- id: A\r
  symbol: A\r
  nombre:\r
    es: área\r
    en: area\r
  descripcion:\r
    es: Área total de una lámina o región bidimensional.\r
    en: Total area of a sheet or two-dimensional region.\r
  unidad_si: m^2\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir A con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar A con una definicion estable antes de sustituir valores.\r
- id: lambda\r
  symbol: \\lambda\r
  nombre:\r
    es: densidad lineal\r
    en: linear density\r
  descripcion:\r
    es: Masa por unidad de longitud.\r
    en: Mass per unit length.\r
  unidad_si: kg/m\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir lambda con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar lambda con una definicion estable antes de sustituir valores.\r
- id: L\r
  symbol: L\r
  nombre:\r
    es: longitud\r
    en: length\r
  descripcion:\r
    es: Longitud total de una varilla o distribución lineal.\r
    en: Total length of a rod or linear distribution.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir L con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar L con una definicion estable antes de sustituir valores.\r
- id: x\r
  symbol: x\r
  nombre:\r
    es: coordenada x\r
    en: x coordinate\r
  descripcion:\r
    es: Coordenada espacial usada para parametrizar la distribución.\r
    en: Spatial coordinate used to parameterize the distribution.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: Confundir x con otra magnitud cercana dentro de centro de masas\r
    en cuerpos extendidos.\r
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
    - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar x con una definicion estable antes de sustituir valores.\r
`;export{e as default};
