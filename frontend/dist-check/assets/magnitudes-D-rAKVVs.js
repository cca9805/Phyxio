const e=`version: 2\r
\r
magnitudes:\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: potencia de carga\r
    en: load power\r
  descripcion:\r
    es: Potencia activa consumida por un equipo conectado a la toma; dato de partida para calcular la corriente individual que circula por el contacto.\r
    en: Active power consumed by equipment connected to the socket; starting data for calculating the individual current through the contact.\r
  unidad_si: W\r
  dimension: ML^2T^{-3}\r
  is_vector: false\r
  components: null\r
  category: observable\r
  physical_role: physical_quantity\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Sumar vatios de distintos circuitos en lugar de los del circuito concreto de la toma evaluada.\r
  typical_range: "100 W (lampara) a 3000 W (calefactor portatil)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La potencia consumida es siempre positiva para cargas pasivas resistivas e inductivas.\r
      en: Consumed power is always positive for passive resistive and inductive loads.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: P = 0 indica que no hay carga activa conectada a esa toma.\r
      en: P = 0 indicates no active load connected to that socket.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 3500]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_potencia\r
  pedagogical_notes: P es el dato de entrada habitual en situaciones reales donde no se dispone de amperimetro. P/V da la corriente de esa carga especifica.\r
\r
- id: P_tot\r
  symbol: P_{tot}\r
  nombre:\r
    es: potencia total simultanea\r
    en: simultaneous total power\r
  descripcion:\r
    es: Suma de las potencias activas de todos los equipos conectados simultáneamente a la toma o regleta; determina la corriente total que el contacto debe soportar.\r
    en: Sum of active powers of all devices simultaneously connected to the socket or strip; determines the total current the contact must handle.\r
  unidad_si: W\r
  dimension: ML^2T^{-3}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Sumar potencias de equipos que no están encendidos al mismo tiempo; el criterio es simultaneidad real, no capacidad instalada.\r
  typical_range: "0 W a 3500 W para una toma de 16 A a 230 V."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: P_tot es siempre positiva; es la suma de potencias individuales no negativas.\r
      en: P_tot is always positive; it is the sum of non-negative individual powers.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: P_tot = 0 indica que todos los equipos estan apagados o desconectados.\r
      en: P_tot = 0 indicates all equipment is off or disconnected.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 3500]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_potencia_total\r
  pedagogical_notes: P_tot es la magnitud de diseño de la toma. Si supera P_max, la corriente total excede I_max y el contacto opera fuera de su rango seguro.\r
\r
- id: V\r
  symbol: V\r
  nombre:\r
    es: tensión de suministro\r
    en: supply voltage\r
  descripcion:\r
    es: Tensión eficaz de la red doméstica; parámetro de referencia fijo para convertir potencia en corriente y para calcular la capacidad máxima de la toma.\r
    en: RMS voltage of the domestic network; fixed reference parameter for converting power to current and for calculating maximum socket capacity.\r
  unidad_si: V\r
  dimension: ML^2T^{-3}I^{-1}\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Usar 220 V en lugar de 230 V para instalaciones europeas; el error en corriente calculada es del 4 porciento.\r
  typical_range: "207 V a 253 V (230 V nominal +/- 10 % segun EN 50160)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa el valor eficaz RMS, siempre positivo, para calculos de potencia y corriente.\r
      en: The always-positive RMS value is used for power and current calculations.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: V = 0 indica ausencia de suministro; no aplica para calculos de carga activa.\r
      en: V = 0 indicates no supply; does not apply for active load calculations.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[207, 253]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_tension\r
  pedagogical_notes: V = 230 V es el parametro fijo en todos los calculos residenciales europeos. Variaciones de tension afectan linealmente a la corriente calculada.\r
\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: corriente individual de carga\r
    en: individual load current\r
  descripcion:\r
    es: Corriente que demanda un equipo individual conectado a la toma, obtenida de su potencia y la tensión de suministro.\r
    en: Current demanded by a single device connected to the socket, obtained from its power and supply voltage.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Confundir la corriente individual I con la corriente total I_tot cuando hay varios equipos conectados.\r
  typical_range: "0.4 A (lampara 100W) a 13 A (calefactor 3000W) a 230 V."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La corriente individual es siempre positiva en valor absoluto para cargas pasivas.\r
      en: Individual current is always positive in absolute value for passive loads.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: I = 0 indica que el equipo esta apagado o desconectado.\r
      en: I = 0 indicates the device is off or disconnected.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 16]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_corriente_individual\r
  pedagogical_notes: I individual se usa para verificar que un solo equipo no excede la capacidad de la toma antes de considerar multiples cargas.\r
\r
- id: I_tot\r
  symbol: I_{tot}\r
  nombre:\r
    es: corriente total en la toma\r
    en: total socket current\r
  descripcion:\r
    es: Corriente total que circula por los contactos de la toma o regleta cuando se conectan simultáneamente varios equipos; magnitud clave para evaluar el riesgo de sobrecarga.\r
    en: Total current flowing through the socket or strip contacts when multiple devices are simultaneously connected; key quantity for overload risk assessment.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Calcular I_tot sumando corrientes individuales de equipos no encendidos simultaneamente; el criterio es la simultaneidad real de uso.\r
  typical_range: "0 A a 16 A para toma estandar de 16 A."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: I_tot es siempre positiva; es la suma de corrientes individuales no negativas.\r
      en: I_tot is always positive; it is the sum of non-negative individual currents.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: I_tot = 0 indica que no hay ningun equipo encendido conectado a la toma.\r
      en: I_tot = 0 indicates no powered device is connected to the socket.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 16]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_corriente_total\r
  pedagogical_notes: I_tot se compara con I_max para evaluar el margen de uso de la toma. Un I_tot superior a I_max genera calentamiento en los contactos y riesgo de incendio.\r
\r
- id: I_max\r
  symbol: I_{max}\r
  nombre:\r
    es: corriente máxima nominal\r
    en: nominal maximum current\r
  descripcion:\r
    es: Límite de corriente que el fabricante garantiza para la toma o regleta sin degradación térmica de los contactos; calibre de diseño del dispositivo.\r
    en: Current limit the manufacturer guarantees for the socket or strip without thermal degradation of contacts; device design rating.\r
  unidad_si: A\r
  dimension: I\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: threshold\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Usar I_max de la toma individual cuando la regleta tiene un I_max mas bajo; el limite relevante es el del dispositivo mas restrictivo en la cadena.\r
  typical_range: "10 A (tomas tipo F debiles), 16 A (tomas estandar europeas), 10 A (regletas de baja calidad)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: I_max es siempre positivo; define el techo de corriente segura del dispositivo.\r
      en: I_max is always positive; defines the safe current ceiling of the device.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: I_max = 0 no tiene sentido fisico para un dispositivo operativo.\r
      en: I_max = 0 has no physical meaning for an operational device.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[6, 20]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - linea_umbral_corriente\r
  pedagogical_notes: I_max es el parametro de diseño de la toma. Opera como umbral de seguridad termica; superarlo de forma continuada provoca degradacion del contacto y riesgo de incendio.\r
\r
- id: P_max\r
  symbol: P_{max}\r
  nombre:\r
    es: potencia máxima nominal\r
    en: nominal maximum power\r
  descripcion:\r
    es: Potencia máxima que puede conectarse a la toma sin superar su corriente nominal; estimación para carga resistiva a tensión nominal.\r
    en: Maximum power connectable to the socket without exceeding its nominal current; estimate for resistive load at nominal voltage.\r
  unidad_si: W\r
  dimension: ML^2T^{-3}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: threshold\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Usar P_max como limite exacto sin considerar el factor de potencia de cargas inductivas o los transitorios de arranque de motores.\r
  typical_range: "2300 W (10 A) a 3680 W (16 A) a 230 V."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: P_max es siempre positiva; define el techo de potencia del dispositivo.\r
      en: P_max is always positive; defines the power ceiling of the device.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: P_max = 0 no tiene sentido para una toma operativa.\r
      en: P_max = 0 has no meaning for an operational socket.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[1000, 5000]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - linea_potencia_maxima\r
  pedagogical_notes: P_max = V * I_max es la referencia practica para comparar con la suma de potencias conectadas. Si P_tot >= P_max, la toma esta sobrecargada.\r
\r
- id: R_contacto\r
  symbol: R_{contacto}\r
  nombre:\r
    es: resistencia de contacto\r
    en: contact resistance\r
  descripcion:\r
    es: Resistencia eléctrica en la interfaz mecánica entre el borne de la toma y el pin del enchufe; aumenta con la oxidación, suciedad o deformación del contacto.\r
    en: Electrical resistance at the mechanical interface between the socket terminal and the plug pin; increases with oxidation, dirt, or contact deformation.\r
  unidad_si: "Ω"\r
  dimension: ML^2T^{-3}I^{-2}\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Asumir que R_contacto es nula en tomas nuevas; incluso tomas nuevas tienen resistencias de contacto en el rango de decimas de ohmio que pueden generar calor apreciable con corrientes altas.\r
  typical_range: "0.01 ohm (contacto nuevo) a varios ohms (contacto muy degradado)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: R_contacto es siempre no negativa; una toma perfecta tendria R_contacto cero, pero en la practica siempre es positiva.\r
      en: R_contacto is always non-negative; a perfect socket would have zero R_contacto, but in practice it is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: R_contacto = 0 es un limite ideal; en la practica siempre existe alguna resistencia de contacto.\r
      en: R_contacto = 0 is an ideal limit; in practice there is always some contact resistance.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0.01, 5]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_resistencia\r
  pedagogical_notes: R_contacto es la magnitud que conecta el uso electrico con el riesgo termico local. Aunque su valor sea bajo, el calor disipado aumenta con el cuadrado de la corriente.\r
\r
- id: P_perdida\r
  symbol: P_{perdida}\r
  nombre:\r
    es: potencia disipada en el contacto\r
    en: contact dissipated power\r
  descripcion:\r
    es: Potencia convertida en calor en la interfaz de contacto de la toma; determina el calentamiento local y el riesgo de degradación o incendio.\r
    en: Power converted to heat at the socket contact interface; determines local heating and risk of degradation or fire.\r
  unidad_si: W\r
  dimension: ML^2T^{-3}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Ignorar P_perdida porque es pequena en valores tipicos; con corrientes altas y R_contacto degradada puede superar varios vatios y generar temperaturas peligrosas.\r
  typical_range: "0.01 W (contacto nuevo, corriente baja) a varios W (contacto degradado, corriente alta)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: P_perdida es siempre positiva; representa disipacion de energia por efecto Joule.\r
      en: P_perdida is always positive; it represents energy dissipation via the Joule effect.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: P_perdida = 0 solo en el limite ideal de R_contacto = 0.\r
      en: P_perdida = 0 only in the ideal limit of R_contacto = 0.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0.001, 20]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_perdida_termica\r
  pedagogical_notes: P_perdida crece con el cuadrado de I_tot. Duplicar la corriente cuadruplica el calor local. Este efecto hace que la degradacion termica sea rapidamente peligrosa por encima del nominal.\r
\r
- id: margen_uso\r
  symbol: margen_{uso}\r
  nombre:\r
    es: ratio de uso de la toma\r
    en: socket usage ratio\r
  descripcion:\r
    es: Fracción de la corriente nominal I_max que está siendo consumida por los equipos conectados; indicador de proximidad a la sobrecarga.\r
    en: Fraction of the nominal current I_max being consumed by connected equipment; indicator of proximity to overload.\r
  unidad_si: "1"\r
  dimension: "1"\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: diagnostic_index\r
  used_in:\r
  - enchufes-y-tomas\r
  common_mistake: Interpretar margen_uso < 1 como seguridad absoluta; un margen_uso de 0,9 indica que la toma opera al 90% y cualquier carga adicional puede provocar sobrecarga.\r
  typical_range: "0 (toma vacia) a valores superiores a 1 (sobrecarga activa)."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: margen_uso es siempre no negativo; es el cociente de dos magnitudes positivas.\r
      en: margen_uso is always non-negative; it is the ratio of two positive quantities.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: margen_uso = 0 indica que no hay ninguna carga activa conectada a la toma.\r
      en: margen_uso = 0 indicates no active load connected to the socket.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 2]"\r
  interpretation_role:\r
    primary_for:\r
    - enchufes-y-tomas\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_y_margen_uso\r
  pedagogical_notes: margen_uso es el indicador principal de riesgo de sobrecarga. Valores entre 0.8 y 1 son zona de vigilancia activa. Valores superiores a 1 indican sobrecarga que debe corregirse.\r
`;export{e as default};
