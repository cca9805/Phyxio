const e=`version: 2\r
\r
magnitudes:\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: corriente de carga\r
    en: load current\r
  descripcion:\r
    es: Corriente total que circula por el circuito al conectar una carga de potencia P a la tensión V de suministro.\r
    en: Total current flowing through the circuit when a load of power P is connected at supply voltage V.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Confundir la corriente total I con el desequilibrio diferencial I_delta; son magnitudes distintas comparadas con umbrales distintos.\r
  typical_range: "0 A a 100 A en instalaciones residenciales estándar."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La corriente de carga es siempre positiva en valor absoluto; el signo físico indica dirección pero no se usa en el cálculo de protección.\r
      en: Load current is always positive in absolute value; the physical sign indicates direction but is not used in protection calculations.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: I = 0 A indica que no hay carga conectada o el circuito está abierto.\r
      en: I = 0 A indicates no load connected or the circuit is open.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 100]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_corriente\r
  pedagogical_notes: La I de carga se compara con I_n del magnetotérmico para evaluar sobrecarga. No tiene relación directa con I_delta del diferencial.\r
\r
- id: I_delta\r
  symbol: I_\\Delta\r
  nombre:\r
    es: desequilibrio diferencial\r
    en: differential imbalance\r
  descripcion:\r
    es: Diferencia absoluta entre la corriente de fase y la corriente de neutro; representa la corriente que escapa por un camino no previsto.\r
    en: Absolute difference between phase and neutral current; represents the current escaping via an unintended path.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Comparar I_delta en mA con la corriente I en A sin convertir; I_dn = 30 mA = 0.030 A.\r
  typical_range: "0 mA a 300 mA; umbral de disparo residencial típico 30 mA."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: I_delta es siempre positiva por definición (valor absoluto). No tiene sentido de dirección.\r
      en: I_delta is always positive by definition (absolute value). It has no directional meaning.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: I_delta = 0 indica instalación sin fugas; toda la corriente que entra por fase regresa por neutro.\r
      en: I_delta = 0 indicates a leak-free installation; all current entering via phase returns via neutral.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 0.3]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_desequilibrio\r
  pedagogical_notes: I_delta es la magnitud que vigila el diferencial. Un valor de 50 mA supera el umbral típico de 30 mA aunque la I total del circuito sea de varios amperios.\r
\r
- id: I_dn\r
  symbol: I_{\\Delta n}\r
  nombre:\r
    es: umbral diferencial nominal\r
    en: nominal differential threshold\r
  descripcion:\r
    es: Sensibilidad nominal del diferencial; valor mínimo de I_delta que garantiza el disparo del dispositivo.\r
    en: Nominal sensitivity of the RCD; minimum I_delta value that guarantees device tripping.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: threshold\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Confundir I_dn (umbral del diferencial) con I_n (calibre del magnetotérmico); son umbrales de dispositivos distintos.\r
  typical_range: "30 mA (alta sensibilidad, protección personal) o 300 mA (media sensibilidad, protección contra incendios)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: I_dn es siempre positivo; define el umbral de actuación del diferencial.\r
      en: I_dn is always positive; defines the RCD trip threshold.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: I_dn = 0 no tiene sentido físico; implicaría que el diferencial actúa con cualquier fuga infinitesimal.\r
      en: I_dn = 0 has no physical meaning; it would imply the RCD trips with any infinitesimal leakage.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0.01, 0.5]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - linea_umbral_diferencial\r
  pedagogical_notes: El valor de I_dn determina la sensibilidad de la protección personal. Aumentar I_dn reduce la protección; nunca debe hacerse para eliminar disparos recurrentes.\r
\r
- id: I_n\r
  symbol: I_n\r
  nombre:\r
    es: corriente nominal del magnetotérmico\r
    en: nominal current of the MCB\r
  descripcion:\r
    es: Corriente nominal del magnetotérmico; calibre a partir del cual el dispositivo actúa en régimen sostenido.\r
    en: Nominal current of the MCB; rating above which the device trips in sustained operation.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: threshold\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Usar I_n del magnetotérmico general en vez del del circuito concreto; cada circuito tiene su propio I_n.\r
  typical_range: "10 A (iluminación), 16 A (tomas generales), 25 A (cocina), 40 A (general)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: I_n es siempre positivo; define el calibre de protección del circuito.\r
      en: I_n is always positive; defines the circuit protection rating.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: I_n = 0 no tiene sentido físico en un circuito operativo.\r
      en: I_n = 0 has no physical meaning in an operational circuit.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[6, 63]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - linea_umbral_termico\r
  pedagogical_notes: I_n es el parámetro clave del magnetotérmico. Cambiar I_n por uno mayor requiere verificar que el cableado del circuito admite la nueva corriente.\r
\r
- id: I_fase\r
  symbol: I_{fase}\r
  nombre:\r
    es: corriente de fase\r
    en: phase current\r
  descripcion:\r
    es: Corriente medida en el conductor de fase del circuito; parte de I que entra al circuito por la línea viva.\r
    en: Current measured in the phase conductor of the circuit; part of I entering the circuit via the live wire.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: observable\r
  physical_role: physical_quantity\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Asumir que I_fase = I_neutro sin medir; la diferencia es precisamente I_delta que detecta el diferencial.\r
  typical_range: "0 A a 100 A en instalaciones residenciales."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa el valor absoluto para calcular I_delta.\r
      en: Absolute value is used to calculate I_delta.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: I_fase = 0 indica que no hay carga activa en el circuito.\r
      en: I_fase = 0 indicates no active load on the circuit.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 100]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_corriente_fase\r
  pedagogical_notes: I_fase es una de las dos medidas necesarias para calcular I_delta. Requiere pinza amperimétrica en el conductor de fase.\r
\r
- id: I_neutro\r
  symbol: I_{neutro}\r
  nombre:\r
    es: corriente de neutro\r
    en: neutral current\r
  descripcion:\r
    es: Corriente medida en el conductor de neutro del circuito; parte de I que regresa al origen por la línea neutra.\r
    en: Current measured in the neutral conductor of the circuit; part of I returning to the source via the neutral wire.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: observable\r
  physical_role: physical_quantity\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Ignorar la medición de I_neutro y asumir que es igual a I_fase; esa asunción impide detectar fugas.\r
  typical_range: "0 A a 100 A en instalaciones residenciales."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa el valor absoluto para calcular I_delta.\r
      en: Absolute value is used to calculate I_delta.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: I_neutro = 0 con I_fase > 0 indicaría fuga total de la corriente, situación de emergencia.\r
      en: I_neutro = 0 with I_fase > 0 would indicate total current leakage, an emergency situation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 100]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_corriente_neutro\r
  pedagogical_notes: I_neutro se mide en el conductor de retorno. La diferencia |I_fase - I_neutro| es el indicador de fuga que usa el diferencial.\r
\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: potencia de carga\r
    en: load power\r
  descripcion:\r
    es: Potencia activa consumida por los equipos conectados al circuito; dato de partida para calcular la corriente de carga.\r
    en: Active power consumed by equipment connected to the circuit; starting data for calculating load current.\r
  unidad_si: W\r
  dimension: ML^2T^{-3}\r
  is_vector: false\r
  components: null\r
  category: observable\r
  physical_role: physical_quantity\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Usar la potencia total de la vivienda en vez de la del circuito concreto para calcular I del circuito.\r
  typical_range: "100 W (iluminación) a 8000 W (cocina eléctrica)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La potencia consumida es siempre positiva en cargas resistivas e inductivas pasivas.\r
      en: Consumed power is always positive for passive resistive and inductive loads.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: P = 0 indica que no hay carga activa conectada al circuito.\r
      en: P = 0 indicates no active load connected to the circuit.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 10000]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_potencia\r
  pedagogical_notes: P es el dato de entrada habitual cuando no se puede medir I directamente. P/V da una estimación de I para cargas resistivas.\r
\r
- id: P_lim\r
  symbol: P_{lim}\r
  nombre:\r
    es: potencia límite magnetotérmica\r
    en: MCB power limit\r
  descripcion:\r
    es: Potencia máxima aproximada que puede conectarse al circuito antes de que el magnetotérmico actúe por sobrecorriente; estimación para carga resistiva a tensión nominal.\r
    en: Approximate maximum power connectable to the circuit before the MCB trips for overcurrent; estimate for resistive load at nominal voltage.\r
  unidad_si: W\r
  dimension: ML^2T^{-3}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: threshold\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Usar P_lim como límite exacto e ignorar los transitorios de arranque y el factor de potencia de cargas inductivas.\r
  typical_range: "1380 W (6 A) a 9200 W (40 A) a 230 V."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: P_lim es siempre positiva; define el techo de consumo del circuito.\r
      en: P_lim is always positive; defines the circuit consumption ceiling.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: P_lim = 0 no tiene sentido; implicaría un magnetotérmico de calibre cero.\r
      en: P_lim = 0 has no meaning; it would imply a zero-rating MCB.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[1000, 15000]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - linea_potencia_limite\r
  pedagogical_notes: P_lim = V * I_n es la referencia de diseño del circuito. Si la suma de cargas planificadas supera el 80% de P_lim, conviene redistribuir.\r
\r
- id: V\r
  symbol: V\r
  nombre:\r
    es: tensión de suministro\r
    en: supply voltage\r
  descripcion:\r
    es: Tensión eficaz de la red de suministro eléctrico doméstico; parámetro de referencia para calcular corrientes de carga y potencias límite.\r
    en: RMS voltage of the domestic electricity supply network; reference parameter for calculating load currents and power limits.\r
  unidad_si: V\r
  dimension: ML^2T^{-3}I^{-1}\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Usar 220 V en vez de 230 V para instalaciones europeas post-1987; el error en I resultante es del 4%.\r
  typical_range: "230 V (Europa); tolerancia ±10% según norma EN 50160."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa el valor eficaz (RMS) siempre positivo para cálculos de potencia y corriente.\r
      en: The always-positive RMS value is used for power and current calculations.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: V = 0 indica ausencia de suministro eléctrico; no aplica para cálculos de carga.\r
      en: V = 0 indicates absence of electrical supply; does not apply for load calculations.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[207, 253]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_tension\r
  pedagogical_notes: V = 230 V es el valor nominal europeo. En los cálculos residenciales se usa como parámetro fijo salvo indicación contraria.\r
\r
- id: margen_dif\r
  symbol: margen_{dif}\r
  nombre:\r
    es: ratio diferencial\r
    en: differential ratio\r
  descripcion:\r
    es: Fracción del umbral diferencial I_dn alcanzada por el desequilibrio I_delta; valores iguales o superiores a 1 indican disparo inminente o activo del diferencial.\r
    en: Fraction of the differential threshold I_dn reached by the imbalance I_delta; values equal to or above 1 indicate imminent or active RCD tripping.\r
  unidad_si: "1"\r
  dimension: "1"\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: diagnostic_index\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Interpretar margen_dif < 1 como ausencia total de fuga; la fuga existe aunque no dispare aún.\r
  typical_range: "0 (sin fuga) a valores superiores a 1 (disparo activo)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: margen_dif es siempre no negativo; es el cociente de dos magnitudes positivas.\r
      en: margen_dif is always non-negative; it is the ratio of two positive quantities.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: margen_dif = 0 indica ausencia completa de desequilibrio diferencial.\r
      en: margen_dif = 0 indicates complete absence of differential imbalance.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 2]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_margen_dif\r
  pedagogical_notes: margen_dif es el indicador principal de proximidad al disparo diferencial. Valores entre 0.5 y 1 son zona de vigilancia activa.\r
\r
- id: margen_termico\r
  symbol: margen_{termico}\r
  nombre:\r
    es: ratio térmico\r
    en: thermal ratio\r
  descripcion:\r
    es: Fracción de la corriente nominal I_n consumida por el circuito; valores iguales o superiores a 1 indican sobrecarga del magnetotérmico.\r
    en: Fraction of the nominal current I_n consumed by the circuit; values equal to or above 1 indicate MCB overload.\r
  unidad_si: "1"\r
  dimension: "1"\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: diagnostic_index\r
  used_in:\r
  - diferencial-y-magnetotermico\r
  common_mistake: Calcular margen_termico con la I total de la vivienda en vez de la I del circuito concreto.\r
  typical_range: "0 (sin carga) a valores superiores a 1 (sobrecarga activa)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: margen_termico es siempre no negativo; es el cociente de dos magnitudes positivas.\r
      en: margen_termico is always non-negative; it is the ratio of two positive quantities.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: margen_termico = 0 indica que no hay carga activa en el circuito.\r
      en: margen_termico = 0 indicates no active load on the circuit.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 2]"\r
  interpretation_role:\r
    primary_for:\r
    - diferencial-y-magnetotermico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_margen_termico\r
  pedagogical_notes: margen_termico > 0.8 es señal de operación con margen reducido. Valores superiores a 1 en régimen sostenido provocan actuación del magnetotérmico en minutos.\r
`;export{e as default};
