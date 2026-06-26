"""Genera meta.yaml, magnitudes.yaml y formulas.yaml para enchufes-y-tomas."""
import yaml
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas')

# ── meta.yaml ─────────────────────────────────────────────────────────────────
meta = """\
id: enchufes-y-tomas
nombre:
  es: Enchufes y tomas
  en: Plugs and Sockets
area: fisica-clasica
bloque: electromagnetismo
subbloque: electricidad-domestica
parent_id: electricidad-domestica
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas
orden: 298300
type: leaf
dificultad: 2
tiempo_estimado_min: 25
description:
  es: 'Enchufes y tomas de corriente domésticas: límites de carga, riesgo térmico por contacto y diagnóstico de sobrecargas en regletas.'
  en: 'Domestic plugs and sockets: load limits, local thermal risk from contact resistance, and overload diagnosis in power strips.'
pregunta_fisica_central:
  es: '¿Cuándo supera una toma de corriente su límite seguro de carga y qué riesgo térmico genera el contacto degradado?'
  en: 'When does a socket exceed its safe load limit and what thermal risk does a degraded contact generate?'
tags:
  es:
  - enchufes
  - tomas
  - sobrecarga
  - riesgo termico
  - electricidad domestica
  en:
  - plugs
  - sockets
  - overload
  - thermal risk
  - domestic electricity
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  - EXTRACURRICULAR
  en:
  - Secondary
  - Upper Secondary
  - University
  - Extracurricular
icon: "\U0001F321"
graficos:
- Coord
- Svg
physical_role:
  es: concepto físico
  en: physical concept
representacion_dominante: Coord
magnitud_dominante: margen_uso
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Interpretación
      en: Interpretation
    show_formula_selector: true
    show_graph_inline: true
    show_result_blocks: true
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_all_blocks: false
    max_inline_messages: 4
    collapse_after: 2
  dependencies:
    require_formula: true
    require_magnitudes: true
    require_graph: false
"""

(base / 'meta.yaml').write_text(meta, encoding='utf-8')
try:
    yaml.safe_load((base / 'meta.yaml').read_text(encoding='utf-8'))
    print('meta.yaml OK')
except yaml.YAMLError as e:
    print(f'meta.yaml ERROR: {e}')

# ── magnitudes.yaml ────────────────────────────────────────────────────────────
mags = """\
version: 2

magnitudes:
- id: P
  symbol: P
  nombre:
    es: potencia de carga
    en: load power
  descripcion:
    es: Potencia activa consumida por un equipo conectado a la toma; dato de partida para calcular la corriente individual que circula por el contacto.
    en: Active power consumed by equipment connected to the socket; starting data for calculating the individual current through the contact.
  unidad_si: W
  dimension: ML^2T^{-3}
  is_vector: false
  components: null
  category: observable
  physical_role: physical_quantity
  used_in:
  - enchufes-y-tomas
  common_mistake: Sumar vatios de distintos circuitos en lugar de los del circuito concreto de la toma evaluada.
  typical_range: "100 W (lampara) a 3000 W (calefactor portatil)."
  sign_behavior:
    has_sign: false
    meaning:
      es: La potencia consumida es siempre positiva para cargas pasivas resistivas e inductivas.
      en: Consumed power is always positive for passive resistive and inductive loads.
  zero_behavior:
    allowed: true
    meaning:
      es: P = 0 indica que no hay carga activa conectada a esa toma.
      en: P = 0 indicates no active load connected to that socket.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, 3500]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_potencia
  pedagogical_notes: P es el dato de entrada habitual en situaciones reales donde no se dispone de amperimetro. P/V da la corriente de esa carga especifica.

- id: P_tot
  symbol: P_{tot}
  nombre:
    es: potencia total simultanea
    en: simultaneous total power
  descripcion:
    es: Suma de las potencias activas de todos los equipos conectados simultáneamente a la toma o regleta; determina la corriente total que el contacto debe soportar.
    en: Sum of active powers of all devices simultaneously connected to the socket or strip; determines the total current the contact must handle.
  unidad_si: W
  dimension: ML^2T^{-3}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - enchufes-y-tomas
  common_mistake: Sumar potencias de equipos que no están encendidos al mismo tiempo; el criterio es simultaneidad real, no capacidad instalada.
  typical_range: "0 W a 3500 W para una toma de 16 A a 230 V."
  sign_behavior:
    has_sign: false
    meaning:
      es: P_tot es siempre positiva; es la suma de potencias individuales no negativas.
      en: P_tot is always positive; it is the sum of non-negative individual powers.
  zero_behavior:
    allowed: true
    meaning:
      es: P_tot = 0 indica que todos los equipos estan apagados o desconectados.
      en: P_tot = 0 indicates all equipment is off or disconnected.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, 3500]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_potencia_total
  pedagogical_notes: P_tot es la magnitud de diseño de la toma. Si supera P_max, la corriente total excede I_max y el contacto opera fuera de su rango seguro.

- id: V
  symbol: V
  nombre:
    es: tensión de suministro
    en: supply voltage
  descripcion:
    es: Tensión eficaz de la red doméstica; parámetro de referencia fijo para convertir potencia en corriente y para calcular la capacidad máxima de la toma.
    en: RMS voltage of the domestic network; fixed reference parameter for converting power to current and for calculating maximum socket capacity.
  unidad_si: V
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - enchufes-y-tomas
  common_mistake: Usar 220 V en lugar de 230 V para instalaciones europeas; el error en corriente calculada es del 4 porciento.
  typical_range: "207 V a 253 V (230 V nominal +/- 10 % segun EN 50160)."
  sign_behavior:
    has_sign: false
    meaning:
      es: Se usa el valor eficaz RMS, siempre positivo, para calculos de potencia y corriente.
      en: The always-positive RMS value is used for power and current calculations.
  zero_behavior:
    allowed: false
    meaning:
      es: V = 0 indica ausencia de suministro; no aplica para calculos de carga activa.
      en: V = 0 indicates no supply; does not apply for active load calculations.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[207, 253]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_tension
  pedagogical_notes: V = 230 V es el parametro fijo en todos los calculos residenciales europeos. Variaciones de tension afectan linealmente a la corriente calculada.

- id: I
  symbol: I
  nombre:
    es: corriente individual de carga
    en: individual load current
  descripcion:
    es: Corriente que demanda un equipo individual conectado a la toma, obtenida de su potencia y la tensión de suministro.
    en: Current demanded by a single device connected to the socket, obtained from its power and supply voltage.
  unidad_si: A
  dimension: I
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - enchufes-y-tomas
  common_mistake: Confundir la corriente individual I con la corriente total I_tot cuando hay varios equipos conectados.
  typical_range: "0.4 A (lampara 100W) a 13 A (calefactor 3000W) a 230 V."
  sign_behavior:
    has_sign: false
    meaning:
      es: La corriente individual es siempre positiva en valor absoluto para cargas pasivas.
      en: Individual current is always positive in absolute value for passive loads.
  zero_behavior:
    allowed: true
    meaning:
      es: I = 0 indica que el equipo esta apagado o desconectado.
      en: I = 0 indicates the device is off or disconnected.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, 16]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_corriente_individual
  pedagogical_notes: I individual se usa para verificar que un solo equipo no excede la capacidad de la toma antes de considerar multiples cargas.

- id: I_tot
  symbol: I_{tot}
  nombre:
    es: corriente total en la toma
    en: total socket current
  descripcion:
    es: Corriente total que circula por los contactos de la toma o regleta cuando se conectan simultáneamente varios equipos; magnitud clave para evaluar el riesgo de sobrecarga.
    en: Total current flowing through the socket or strip contacts when multiple devices are simultaneously connected; key quantity for overload risk assessment.
  unidad_si: A
  dimension: I
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - enchufes-y-tomas
  common_mistake: Calcular I_tot sumando corrientes individuales de equipos no encendidos simultaneamente; el criterio es la simultaneidad real de uso.
  typical_range: "0 A a 16 A para toma estandar de 16 A."
  sign_behavior:
    has_sign: false
    meaning:
      es: I_tot es siempre positiva; es la suma de corrientes individuales no negativas.
      en: I_tot is always positive; it is the sum of non-negative individual currents.
  zero_behavior:
    allowed: true
    meaning:
      es: I_tot = 0 indica que no hay ningun equipo encendido conectado a la toma.
      en: I_tot = 0 indicates no powered device is connected to the socket.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, 16]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_corriente_total
  pedagogical_notes: I_tot se compara con I_max para evaluar el margen de uso de la toma. Un I_tot superior a I_max genera calentamiento en los contactos y riesgo de incendio.

- id: I_max
  symbol: I_{max}
  nombre:
    es: corriente máxima nominal
    en: nominal maximum current
  descripcion:
    es: Límite de corriente que el fabricante garantiza para la toma o regleta sin degradación térmica de los contactos; calibre de diseño del dispositivo.
    en: Current limit the manufacturer guarantees for the socket or strip without thermal degradation of contacts; device design rating.
  unidad_si: A
  dimension: I
  is_vector: false
  components: null
  category: parameter
  physical_role: threshold
  used_in:
  - enchufes-y-tomas
  common_mistake: Usar I_max de la toma individual cuando la regleta tiene un I_max mas bajo; el limite relevante es el del dispositivo mas restrictivo en la cadena.
  typical_range: "10 A (tomas tipo F debiles), 16 A (tomas estandar europeas), 10 A (regletas de baja calidad)."
  sign_behavior:
    has_sign: false
    meaning:
      es: I_max es siempre positivo; define el techo de corriente segura del dispositivo.
      en: I_max is always positive; defines the safe current ceiling of the device.
  zero_behavior:
    allowed: false
    meaning:
      es: I_max = 0 no tiene sentido fisico para un dispositivo operativo.
      en: I_max = 0 has no physical meaning for an operational device.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[6, 20]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - linea_umbral_corriente
  pedagogical_notes: I_max es el parametro de diseño de la toma. Opera como umbral de seguridad termica; superarlo de forma continuada provoca degradacion del contacto y riesgo de incendio.

- id: P_max
  symbol: P_{max}
  nombre:
    es: potencia máxima nominal
    en: nominal maximum power
  descripcion:
    es: Potencia máxima que puede conectarse a la toma sin superar su corriente nominal; estimación para carga resistiva a tensión nominal.
    en: Maximum power connectable to the socket without exceeding its nominal current; estimate for resistive load at nominal voltage.
  unidad_si: W
  dimension: ML^2T^{-3}
  is_vector: false
  components: null
  category: derived
  physical_role: threshold
  used_in:
  - enchufes-y-tomas
  common_mistake: Usar P_max como limite exacto sin considerar el factor de potencia de cargas inductivas o los transitorios de arranque de motores.
  typical_range: "2300 W (10 A) a 3680 W (16 A) a 230 V."
  sign_behavior:
    has_sign: false
    meaning:
      es: P_max es siempre positiva; define el techo de potencia del dispositivo.
      en: P_max is always positive; defines the power ceiling of the device.
  zero_behavior:
    allowed: false
    meaning:
      es: P_max = 0 no tiene sentido para una toma operativa.
      en: P_max = 0 has no meaning for an operational socket.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[1000, 5000]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - linea_potencia_maxima
  pedagogical_notes: P_max = V * I_max es la referencia practica para comparar con la suma de potencias conectadas. Si P_tot >= P_max, la toma esta sobrecargada.

- id: R_contacto
  symbol: R_{contacto}
  nombre:
    es: resistencia de contacto
    en: contact resistance
  descripcion:
    es: Resistencia eléctrica en la interfaz mecánica entre el borne de la toma y el pin del enchufe; aumenta con la oxidación, suciedad o deformación del contacto.
    en: Electrical resistance at the mechanical interface between the socket terminal and the plug pin; increases with oxidation, dirt, or contact deformation.
  unidad_si: "\u03A9"
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - enchufes-y-tomas
  common_mistake: Asumir que R_contacto es nula en tomas nuevas; incluso tomas nuevas tienen resistencias de contacto en el rango de decimas de ohmio que pueden generar calor apreciable con corrientes altas.
  typical_range: "0.01 ohm (contacto nuevo) a varios ohms (contacto muy degradado)."
  sign_behavior:
    has_sign: false
    meaning:
      es: R_contacto es siempre no negativa; una toma perfecta tendria R_contacto cero, pero en la practica siempre es positiva.
      en: R_contacto is always non-negative; a perfect socket would have zero R_contacto, but in practice it is always positive.
  zero_behavior:
    allowed: false
    meaning:
      es: R_contacto = 0 es un limite ideal; en la practica siempre existe alguna resistencia de contacto.
      en: R_contacto = 0 is an ideal limit; in practice there is always some contact resistance.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0.01, 5]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_resistencia
  pedagogical_notes: R_contacto es la magnitud que conecta el uso electrico con el riesgo termico local. Aunque su valor sea bajo, el calor disipado aumenta con el cuadrado de la corriente.

- id: P_perdida
  symbol: P_{perdida}
  nombre:
    es: potencia disipada en el contacto
    en: contact dissipated power
  descripcion:
    es: Potencia convertida en calor en la interfaz de contacto de la toma; determina el calentamiento local y el riesgo de degradación o incendio.
    en: Power converted to heat at the socket contact interface; determines local heating and risk of degradation or fire.
  unidad_si: W
  dimension: ML^2T^{-3}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - enchufes-y-tomas
  common_mistake: Ignorar P_perdida porque es pequena en valores tipicos; con corrientes altas y R_contacto degradada puede superar varios vatios y generar temperaturas peligrosas.
  typical_range: "0.01 W (contacto nuevo, corriente baja) a varios W (contacto degradado, corriente alta)."
  sign_behavior:
    has_sign: false
    meaning:
      es: P_perdida es siempre positiva; representa disipacion de energia por efecto Joule.
      en: P_perdida is always positive; it represents energy dissipation via the Joule effect.
  zero_behavior:
    allowed: false
    meaning:
      es: P_perdida = 0 solo en el limite ideal de R_contacto = 0.
      en: P_perdida = 0 only in the ideal limit of R_contacto = 0.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0.001, 20]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_perdida_termica
  pedagogical_notes: P_perdida crece con el cuadrado de I_tot. Duplicar la corriente cuadruplica el calor local. Este efecto hace que la degradacion termica sea rapidamente peligrosa por encima del nominal.

- id: margen_uso
  symbol: margen_{uso}
  nombre:
    es: ratio de uso de la toma
    en: socket usage ratio
  descripcion:
    es: Fracción de la corriente nominal I_max que está siendo consumida por los equipos conectados; indicador de proximidad a la sobrecarga.
    en: Fraction of the nominal current I_max being consumed by connected equipment; indicator of proximity to overload.
  unidad_si: "1"
  dimension: "1"
  is_vector: false
  components: null
  category: derived
  physical_role: diagnostic_index
  used_in:
  - enchufes-y-tomas
  common_mistake: Interpretar margen_uso < 1 como seguridad absoluta; un margen_uso de 0,9 indica que la toma opera al 90% y cualquier carga adicional puede provocar sobrecarga.
  typical_range: "0 (toma vacia) a valores superiores a 1 (sobrecarga activa)."
  sign_behavior:
    has_sign: false
    meaning:
      es: margen_uso es siempre no negativo; es el cociente de dos magnitudes positivas.
      en: margen_uso is always non-negative; it is the ratio of two positive quantities.
  zero_behavior:
    allowed: true
    meaning:
      es: margen_uso = 0 indica que no hay ninguna carga activa conectada a la toma.
      en: margen_uso = 0 indicates no active load connected to the socket.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, 2]"
  interpretation_role:
    primary_for:
    - enchufes-y-tomas
    secondary_for: []
  graph_binding:
    channels:
    - eje_y_margen_uso
  pedagogical_notes: margen_uso es el indicador principal de riesgo de sobrecarga. Valores entre 0.8 y 1 son zona de vigilancia activa. Valores superiores a 1 indican sobrecarga que debe corregirse.
"""

(base / 'magnitudes.yaml').write_text(mags, encoding='utf-8')
try:
    yaml.safe_load((base / 'magnitudes.yaml').read_text(encoding='utf-8'))
    print('magnitudes.yaml OK')
except yaml.YAMLError as e:
    print(f'magnitudes.yaml ERROR: {e}')

# ── formulas.yaml ──────────────────────────────────────────────────────────────
fmls = """\
version: 2
topic:
  id: enchufes-y-tomas
  title: Enchufes y tomas

ui:
  default_formula: corriente_total
  groups:
    - title: Carga y limites
      items:
        - corriente_total
        - potencia_max
        - ratio_uso
    - title: Riesgo termico local
      items:
        - perdida_contacto
        - corriente_individual

formulas:
- id: corriente_individual
  title:
    es: Corriente individual de una carga
    en: Individual load current
  equation: I = P/V
  latex: 'I=\\frac{P}{V}'
  rearrangements:
  - target: P
    equation: P = I*V
    latex: 'P=I\\cdot V'
    constraints:
    - "V != 0"
  - target: V
    equation: V = P/I
    latex: 'V=\\frac{P}{I}'
    constraints:
    - "I != 0"
  category: fundamental
  relation_type: algebraic
  physical_meaning:
    es: La corriente individual es la fraccion de la corriente total que demanda un solo equipo. Determina cuanto aporta ese equipo al calentamiento del contacto.
    en: The individual current is the fraction of the total current demanded by a single device. It determines how much that device contributes to contact heating.
  constraints: "V != 0; valido para cargas resistivas puras (factor de potencia = 1)."
  validity:
    es: Valida para cargas resistivas a tension nominal constante. Para cargas inductivas, la corriente real puede ser mayor debido al factor de potencia.
    en: Valid for resistive loads at constant nominal voltage. For inductive loads, actual current may be higher due to power factor.
  dimension_check: "[W]/[V] = A"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - carga
  - corriente
  - toma
  result_semantics:
    target: I
    kind: ratio
    sign_meaning:
      es: La corriente individual es siempre positiva para cargas pasivas.
      en: Individual current is always positive for passive loads.
    absolute_value_meaning:
      es: Cuanto mayor es I respecto a I_max, mayor es el riesgo termico del contacto.
      en: The larger I relative to I_max, the greater the thermal risk of the contact.
  domain_checks:
  - expr: "V > 0"
    message:
      es: "La tension de suministro debe ser positiva."
      en: "Supply voltage must be positive."
  coherence_checks:
  - expr: "result < I_max"
    message:
      es: "La corriente individual supera el nominal de la toma; verificar que el equipo es compatible."
      en: "Individual current exceeds socket rating; verify device compatibility."
  graph_implications:
  - "I individual contribuye como una barra al grafico de corrientes por equipo."
  pedagogical_triggers:
  - when: "result > I_max"
    message:
      es: "Un solo equipo supera el nominal de la toma. Retirar el equipo o usar una toma de mayor capacidad."
      en: "A single device exceeds the socket rating. Remove the device or use a higher-capacity socket."

- id: corriente_total
  title:
    es: Corriente total en la toma o regleta
    en: Total current in socket or power strip
  equation: I_tot = P_tot/V
  latex: 'I_{tot}=\\frac{P_{tot}}{V}'
  rearrangements:
  - target: P_tot
    equation: P_tot = I_tot*V
    latex: 'P_{tot}=I_{tot}\\cdot V'
    constraints:
    - "V != 0"
  category: fundamental
  relation_type: algebraic
  physical_meaning:
    es: La corriente total es la suma de corrientes de todos los equipos conectados simultaneamente. Es la magnitud que circula por los contactos de la toma y determina su calentamiento.
    en: The total current is the sum of currents of all simultaneously connected devices. It is the quantity flowing through the socket contacts and determining their heating.
  constraints: "V != 0; todos los equipos deben estar activos simultaneamente para calcular el peor caso."
  validity:
    es: Valida para la aproximacion de factor de potencia unitario. En instalaciones con muchos equipos electronicos, la suma vectorial puede diferir.
    en: Valid for unity power factor approximation. In installations with many electronic devices, the vector sum may differ.
  dimension_check: "[W]/[V] = A"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - sobrecarga
  - corriente
  - toma
  result_semantics:
    target: I_tot
    kind: ratio
    sign_meaning:
      es: I_tot es siempre positiva para cargas pasivas.
      en: I_tot is always positive for passive loads.
    absolute_value_meaning:
      es: Cuanto mayor es I_tot respecto a I_max, mayor es el riesgo de sobrecarga termica del contacto.
      en: The larger I_tot relative to I_max, the greater the risk of thermal overload of the contact.
  domain_checks:
  - expr: "V > 0"
    message:
      es: "La tension de suministro debe ser positiva."
      en: "Supply voltage must be positive."
  coherence_checks:
  - expr: "result < 20"
    message:
      es: "Corriente total superior a 20 A es inusual en tomas residenciales; revisar datos."
      en: "Total current above 20 A is unusual for residential sockets; check data."
  graph_implications:
  - "I_tot se representa en el eje Y; la linea de referencia I_max marca el umbral de sobrecarga."
  pedagogical_triggers:
  - when: "result > I_max"
    message:
      es: "Sobrecarga activa. I_tot supera I_max. Desconectar equipos hasta reducir la carga al 80% del nominal."
      en: "Active overload. I_tot exceeds I_max. Disconnect devices until load is below 80% of rating."
  - when: "result/I_max > 0.8 and result/I_max <= 1"
    message:
      es: "Margen reducido (80-100% de I_max). No conectar mas equipos a esta toma."
      en: "Reduced margin (80-100% of I_max). Do not connect more devices to this socket."

- id: potencia_max
  title:
    es: Potencia maxima nominal de la toma
    en: Nominal maximum socket power
  equation: P_max = V*I_max
  latex: 'P_{max}=V\\cdot I_{max}'
  rearrangements:
  - target: I_max
    equation: I_max = P_max/V
    latex: 'I_{max}=\\frac{P_{max}}{V}'
    constraints:
    - "V != 0"
  category: derived
  relation_type: algebraic
  physical_meaning:
    es: La potencia maxima es la potencia total maxima que puede conectarse a la toma sin superar su limite de corriente nominal en regimen permanente con cargas resistivas.
    en: The maximum power is the total maximum power connectable to the socket without exceeding its nominal current limit in steady state with resistive loads.
  constraints: "V > 0; I_max > 0; estimacion valida solo para cargas resistivas."
  validity:
    es: Estimacion para carga resistiva pura. Cargas inductivas o con alto arranque pueden requerir una toma de mayor capacidad aunque la potencia en estado estacionario sea menor.
    en: Estimate for purely resistive load. Inductive loads or high-inrush devices may require higher-capacity socket even if steady-state power is lower.
  dimension_check: "[V]*[A] = W"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - potencia
  - limite
  - toma
  result_semantics:
    target: P_max
    kind: product
    sign_meaning:
      es: P_max es siempre positiva.
      en: P_max is always positive.
    absolute_value_meaning:
      es: Cuanto mayor es P_max, mayor es la capacidad de la toma para alimentar cargas.
      en: The larger P_max, the greater the socket capacity to supply loads.
  domain_checks:
  - expr: "V > 0 and I_max > 0"
    message:
      es: "La tension y la corriente maxima deben ser positivas."
      en: "Voltage and maximum current must be positive."
  coherence_checks:
  - expr: "result > 0"
    message:
      es: "La potencia maxima debe ser positiva."
      en: "Maximum power must be positive."
  graph_implications:
  - "P_max se muestra como linea de referencia horizontal en el grafico de potencia total."
  pedagogical_triggers:
  - when: "P_tot >= result"
    message:
      es: "P_tot supera P_max: la toma esta sobrecargada. Redistribuir cargas o usar una regleta de mayor capacidad."
      en: "P_tot exceeds P_max: the socket is overloaded. Redistribute loads or use a higher-capacity strip."

- id: perdida_contacto
  title:
    es: Potencia disipada en el contacto
    en: Contact dissipated power
  equation: P_perdida = I_tot^2 * R_contacto
  latex: 'P_{perdida}=I_{tot}^{2}\\cdot R_{contacto}'
  rearrangements:
  - target: R_contacto
    equation: R_contacto = P_perdida / I_tot^2
    latex: 'R_{contacto}=\\frac{P_{perdida}}{I_{tot}^{2}}'
    constraints:
    - "I_tot != 0"
  category: fundamental
  relation_type: algebraic
  physical_meaning:
    es: La potencia disipada en el contacto sigue la ley de Joule localizada en la resistencia de contacto. Crece con el cuadrado de la corriente, lo que hace que el riesgo termico escale rapidamente con la carga.
    en: The power dissipated at the contact follows the Joule law localised at the contact resistance. It grows with the square of the current, making thermal risk scale rapidly with load.
  constraints: "I_tot >= 0; R_contacto >= 0."
  validity:
    es: Valida en regimen permanente con corriente alterna eficaz. En regimen transitorio, los picos de corriente pueden generar calentamientos instantaneos mayores.
    en: Valid in steady state with RMS AC current. In transient regime, current peaks may generate higher instantaneous heating.
  dimension_check: "[A^2]*[Ohm] = W"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - riesgo_termico
  - contacto
  - joule
  result_semantics:
    target: P_perdida
    kind: product
    sign_meaning:
      es: P_perdida es siempre positiva; representa disipacion por efecto Joule.
      en: P_perdida is always positive; it represents Joule-effect dissipation.
    absolute_value_meaning:
      es: Cuanto mayor es P_perdida, mayor es el calentamiento local del contacto y el riesgo de degradacion termica.
      en: The larger P_perdida, the greater the local contact heating and the thermal degradation risk.
  domain_checks:
  - expr: "I_tot >= 0 and R_contacto >= 0"
    message:
      es: "La corriente total y la resistencia de contacto deben ser no negativas."
      en: "Total current and contact resistance must be non-negative."
  coherence_checks:
  - expr: "result < 50"
    message:
      es: "Perdida de contacto superior a 50 W indica degradacion severa; inspeccionar la toma inmediatamente."
      en: "Contact loss above 50 W indicates severe degradation; inspect the socket immediately."
  graph_implications:
  - "P_perdida se representa en funcion de I_tot con una curva parabolica; el eje Y crece rapidamente."
  pedagogical_triggers:
  - when: "result > 1"
    message:
      es: "Disipacion de contacto superior a 1 W. Con contactos degradados, el calentamiento local puede ser peligroso a largo plazo."
      en: "Contact dissipation above 1 W. With degraded contacts, local heating can be dangerous over time."

- id: ratio_uso
  title:
    es: Ratio de uso de la toma
    en: Socket usage ratio
  equation: margen_uso = I_tot/I_max
  latex: 'margen_{uso}=\\frac{I_{tot}}{I_{max}}'
  rearrangements:
  - target: I_tot
    equation: I_tot = margen_uso * I_max
    latex: 'I_{tot}=margen_{uso}\\cdot I_{max}'
    constraints:
    - "I_max > 0"
  category: derived
  relation_type: ratio
  physical_meaning:
    es: El ratio de uso indica que fraccion de la corriente nominal I_max esta siendo consumida. Un valor de 1 o superior indica que la toma esta en sobrecarga o en su limite exacto.
    en: The usage ratio indicates what fraction of the nominal current I_max is being consumed. A value of 1 or above indicates the socket is at or above its overload limit.
  constraints: "I_max > 0."
  validity:
    es: Indicador de regimen permanente. Los transitorios de arranque pueden superar brevemente la unidad sin causar degradacion inmediata.
    en: Steady-state indicator. Startup transients may briefly exceed unity without causing immediate degradation.
  dimension_check: "[A]/[A] = adimensional"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - margen
  - sobrecarga
  - toma
  result_semantics:
    target: margen_uso
    kind: ratio
    sign_meaning:
      es: margen_uso es siempre no negativo; es el cociente de dos magnitudes positivas.
      en: margen_uso is always non-negative; it is the ratio of two positive quantities.
    absolute_value_meaning:
      es: Valores mayores indican mayor proximidad a la sobrecarga de la toma.
      en: Higher values indicate greater proximity to socket overload.
  domain_checks:
  - expr: "I_max > 0"
    message:
      es: "La corriente maxima nominal I_max debe ser positiva."
      en: "The nominal maximum current I_max must be positive."
  coherence_checks:
  - expr: "result >= 0"
    message:
      es: "El ratio de uso debe ser no negativo."
      en: "The usage ratio must be non-negative."
  graph_implications:
  - "margen_uso se representa en el eje Y del grafico de margenes; la linea en 1 marca el umbral de sobrecarga."
  pedagogical_triggers:
  - when: "result >= 1"
    message:
      es: "Sobrecarga activa. Desconectar equipos inmediatamente para proteger el contacto de degradacion termica."
      en: "Active overload. Disconnect devices immediately to protect the contact from thermal degradation."
  - when: "result >= 0.8 and result < 1"
    message:
      es: "Zona de vigilancia (80-100% del nominal). No conectar mas equipos hasta redistribuir la carga."
      en: "Monitoring zone (80-100% of rating). Do not connect more devices until load is redistributed."
"""

(base / 'formulas.yaml').write_text(fmls, encoding='utf-8')
try:
    yaml.safe_load((base / 'formulas.yaml').read_text(encoding='utf-8'))
    print('formulas.yaml OK')
except yaml.YAMLError as e:
    print(f'formulas.yaml ERROR: {e}')

print('Done part 1.')
