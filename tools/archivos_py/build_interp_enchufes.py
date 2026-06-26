"""Regenerate interpretacion.yaml completely for enchufes-y-tomas."""
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas')

content = """\
version: 2
id: interpretacion-enchufes-y-tomas
leaf_id: enchufes-y-tomas
nombre:
  es: Interpretacion de Enchufes y tomas
  en: Interpretation of Plugs and Sockets
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electricidad-domestica
  parent_id: electricidad-domestica
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas
dependencies:
  formulas:
  - corriente_individual
  - corriente_total
  - potencia_max
  - perdida_contacto
  - ratio_uso
  magnitudes:
  - P
  - P_tot
  - V
  - I
  - I_tot
  - I_max
  - P_max
  - R_contacto
  - P_perdida
  - margen_uso
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
result_blocks:
  summary:
    title:
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  margen_uso:
    summary_rules:
    - id: mu_overload
      when: 'margen_uso >= 1'
      status: error
      text:
        es: 'margen_uso >= 1: la toma esta en sobrecarga activa. I_tot supera I_max. Desconectar equipos inmediatamente.'
        en: 'margen_uso >= 1: socket in active overload. I_tot exceeds I_max. Disconnect devices immediately.'
    - id: mu_warning
      when: 'margen_uso >= 0.8 and margen_uso < 1'
      status: warning
      text:
        es: 'margen_uso en zona de vigilancia (80-100%). No conectar mas equipos en uso continuado.'
        en: 'margen_uso in monitoring zone (80-100%). Do not connect more devices in continuous use.'
    - id: mu_ok
      when: 'margen_uso < 0.8'
      status: ok
      text:
        es: 'margen_uso < 0.8: toma dentro del rango seguro. Margen disponible para carga adicional.'
        en: 'margen_uso < 0.8: socket within safe range. Margin available for additional load.'
    coherence_rules:
    - id: mu_coherence
      when: 'true'
      status: ok
      text:
        es: 'margen_uso debe ser el cociente de I_tot entre I_max. Verificar que ambas magnitudes esten en amperios.'
        en: 'margen_uso must be the ratio of I_tot to I_max. Verify both quantities are in amperes.'
    physical_reading_rules:
    - id: mu_physical
      when: 'margen_uso >= 0.8'
      status: warning
      text:
        es: 'Un margen_uso elevado indica que los contactos estan sometidos a una corriente proxima al limite de diseno. El calentamiento crece con el cuadrado de I_tot.'
        en: 'A high margen_uso indicates contacts are subject to current close to the design limit. Heating grows with the square of I_tot.'
    model_validity_rules:
    - id: mu_validity
      when: 'true'
      status: ok
      text:
        es: 'El modelo de margen_uso es valido para regimen permanente con cargas resistivas. Para transitorios de arranque, el margen_uso instantaneo puede ser mayor que el calculado con potencia nominal.'
        en: 'The margen_uso model is valid for steady state with resistive loads. For startup transients, instantaneous margen_uso may be higher than from nominal power.'
    graph_rules:
    - id: mu_graph
      when: 'true'
      status: info
      text:
        es: 'En el grafico, margen_uso se representa en el eje Y con lineas de referencia en 1 (limite) y 0.8 (vigilancia).'
        en: 'On the graph, margen_uso is shown on the Y axis with reference lines at 1 (limit) and 0.8 (monitoring).'
    likely_errors:
    - id: mu_error
      when: 'margen_uso >= 1'
      status: error
      text:
        es: 'Error frecuente: creer que el magnetotermico protegera la toma. El magnetotermico protege el cableado, no el contacto de la toma.'
        en: 'Frequent error: believing the MCB will protect the socket. The MCB protects the wiring, not the socket contact.'
    next_step_rules:
    - id: mu_next
      when: 'margen_uso >= 0.8'
      status: warning
      text:
        es: 'Con margen_uso >= 0.8, calcular P_perdida para estimar el riesgo termico local. Considerar redistribuir la carga.'
        en: 'With margen_uso >= 0.8, calculate P_perdida to estimate local thermal risk. Consider redistributing load.'
  I_tot:
    summary_rules:
    - id: Itot_summary
      when: 'true'
      status: info
      text:
        es: 'I_tot es la corriente total que circula por los contactos de la toma. Compararla con I_max para evaluar el margen de uso.'
        en: 'I_tot is the total current flowing through the socket contacts. Compare with I_max to evaluate the usage margin.'
    coherence_rules:
    - id: Itot_coherence
      when: 'true'
      status: ok
      text:
        es: 'I_tot debe ser la suma de las corrientes individuales de todos los equipos encendidos, o equivalentemente P_tot/V.'
        en: 'I_tot must be the sum of individual currents of all powered devices, or equivalently P_tot/V.'
    physical_reading_rules:
    - id: Itot_physical
      when: 'I_tot > I_max'
      status: error
      text:
        es: 'I_tot supera I_max. La toma esta en sobrecarga. Los contactos estan por encima de su limite de diseno.'
        en: 'I_tot exceeds I_max. The socket is in overload. Contacts are above their design limit.'
    model_validity_rules:
    - id: Itot_validity
      when: 'true'
      status: ok
      text:
        es: 'I_tot calculada como P_tot/V asume factor de potencia unitario. Para cargas con factor de potencia bajo, I_tot real puede ser mayor.'
        en: 'I_tot calculated as P_tot/V assumes unity power factor. For low power factor loads, actual I_tot may be higher.'
    graph_rules:
    - id: Itot_graph
      when: 'true'
      status: info
      text:
        es: 'I_tot se muestra como barra o curva en el grafico de corrientes. La linea horizontal en I_max es el umbral de referencia.'
        en: 'I_tot is shown as a bar or curve in the current graph. The horizontal line at I_max is the reference threshold.'
    likely_errors:
    - id: Itot_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: usar la corriente del equipo mas potente como I_tot en lugar de sumar todas las corrientes simultaneas.'
        en: 'Frequent error: using the most powerful device current as I_tot instead of summing all simultaneous currents.'
    next_step_rules:
    - id: Itot_next
      when: 'true'
      status: info
      text:
        es: 'Con I_tot conocida, calcular margen_uso = I_tot/I_max y P_perdida = I_tot^2 * R_contacto para completar el diagnostico.'
        en: 'With I_tot known, calculate margen_uso = I_tot/I_max and P_perdida = I_tot^2 * R_contacto to complete the diagnosis.'
  P_perdida:
    summary_rules:
    - id: Pp_high
      when: 'P_perdida > 5'
      status: error
      text:
        es: 'P_perdida > 5 W: disipacion de contacto elevada. Riesgo termico local significativo. Inspeccionar y sustituir la toma si es necesario.'
        en: 'P_perdida > 5 W: high contact dissipation. Significant local thermal risk. Inspect and replace socket if necessary.'
    - id: Pp_medium
      when: 'P_perdida >= 1 and P_perdida <= 5'
      status: warning
      text:
        es: 'P_perdida entre 1 y 5 W: disipacion moderada. Vigilar la temperatura del contacto en uso continuado.'
        en: 'P_perdida between 1 and 5 W: moderate dissipation. Monitor contact temperature in continuous use.'
    - id: Pp_ok
      when: 'P_perdida < 1'
      status: ok
      text:
        es: 'P_perdida < 1 W: disipacion de contacto baja. Sin riesgo termico apreciable en condiciones normales.'
        en: 'P_perdida < 1 W: low contact dissipation. No appreciable thermal risk under normal conditions.'
    coherence_rules:
    - id: Pp_coherence
      when: 'true'
      status: ok
      text:
        es: 'P_perdida = I_tot^2 * R_contacto. Verificar que I_tot esta en amperios y R_contacto en ohmios para obtener vatios.'
        en: 'P_perdida = I_tot^2 * R_contacto. Verify I_tot is in amperes and R_contacto in ohms to get watts.'
    physical_reading_rules:
    - id: Pp_physical
      when: 'true'
      status: info
      text:
        es: 'P_perdida crece con el cuadrado de I_tot. Duplicar la corriente cuadruplica la disipacion local.'
        en: 'P_perdida grows with the square of I_tot. Doubling the current quadruples local dissipation.'
    model_validity_rules:
    - id: Pp_validity
      when: 'true'
      status: ok
      text:
        es: 'El modelo de Joule localizado es valido en regimen permanente. En condiciones de ventilacion reducida, la temperatura real puede ser mayor.'
        en: 'The localised Joule model is valid in steady state. Under reduced ventilation, actual temperature may be higher.'
    graph_rules:
    - id: Pp_graph
      when: 'true'
      status: info
      text:
        es: 'P_perdida se muestra como curva parabolica en funcion de I_tot. La forma parabolica ilustra por que duplicar la carga es desproporcionadamente mas peligroso.'
        en: 'P_perdida is shown as a parabolic curve vs I_tot. The parabolic shape illustrates why doubling load is disproportionately more dangerous.'
    likely_errors:
    - id: Pp_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: ignorar P_perdida porque R_contacto parece pequeña. Con I_tot alta, P_perdida puede ser significativa aunque R_contacto sea pequena.'
        en: 'Frequent error: ignoring P_perdida because R_contacto seems small. With high I_tot, P_perdida can be significant even if R_contacto is small.'
    next_step_rules:
    - id: Pp_next
      when: 'P_perdida >= 1'
      status: warning
      text:
        es: 'Con P_perdida >= 1 W, evaluar si el contacto presenta signos de degradacion (calor, decoloracion, olor).'
        en: 'With P_perdida >= 1 W, evaluate whether the contact shows signs of degradation (heat, discolouration, smell).'
  P_max:
    summary_rules:
    - id: Pmax_summary
      when: 'true'
      status: info
      text:
        es: 'P_max es la potencia maxima que puede conectarse a la toma sin superar I_max en regimen permanente.'
        en: 'P_max is the maximum power connectable to the socket without exceeding I_max in steady state.'
    coherence_rules:
    - id: Pmax_coherence
      when: 'true'
      status: ok
      text:
        es: 'P_max = V * I_max. Con V = 230 V e I_max = 16 A, P_max = 3680 W. Con I_max = 10 A, P_max = 2300 W.'
        en: 'P_max = V * I_max. With V = 230 V and I_max = 16 A, P_max = 3680 W. With I_max = 10 A, P_max = 2300 W.'
    physical_reading_rules:
    - id: Pmax_physical
      when: 'P_tot >= P_max'
      status: error
      text:
        es: 'P_tot supera P_max. La carga conectada excede la capacidad nominal de la toma. Reducir P_tot.'
        en: 'P_tot exceeds P_max. Connected load exceeds socket nominal capacity. Reduce P_tot.'
    model_validity_rules:
    - id: Pmax_validity
      when: 'true'
      status: ok
      text:
        es: 'P_max es una estimacion de primer orden para cargas resistivas puras. Para cargas inductivas o con arranques elevados, la potencia admisible real puede ser menor.'
        en: 'P_max is a first-order estimate for purely resistive loads. For inductive or high-inrush loads, actual admissible power may be lower.'
    graph_rules:
    - id: Pmax_graph
      when: 'true'
      status: info
      text:
        es: 'P_max se muestra como linea de referencia horizontal en el grafico de potencia total.'
        en: 'P_max is shown as a horizontal reference line in the total power graph.'
    likely_errors:
    - id: Pmax_error
      when: 'true'
      status: warning
      text:
        es: 'No confundir P_max de la toma individual con la potencia maxima del circuito. Pueden ser valores distintos.'
        en: 'Do not confuse P_max of the individual socket with the maximum circuit power. These may be different values.'
    next_step_rules:
    - id: Pmax_next
      when: 'P_tot >= P_max * 0.8'
      status: warning
      text:
        es: 'Con P_tot >= 0.8 * P_max, calcular margen_uso para confirmar el nivel de uso de la toma.'
        en: 'With P_tot >= 0.8 * P_max, calculate margen_uso to confirm socket usage level.'
  I:
    summary_rules:
    - id: I_summary
      when: 'true'
      status: info
      text:
        es: 'I es la corriente individual demandada por un equipo. Se calcula como P/V y se suma con las demas para obtener I_tot.'
        en: 'I is the individual current demanded by a device. It is calculated as P/V and summed with others to obtain I_tot.'
    coherence_rules:
    - id: I_coherence
      when: 'true'
      status: ok
      text:
        es: 'I = P/V. Con V = 230 V, un equipo de 1000 W demanda I = 4.35 A. Verificar P en vatios y V en voltios.'
        en: 'I = P/V. With V = 230 V, a 1000 W device demands I = 4.35 A. Verify P in watts and V in volts.'
    physical_reading_rules:
    - id: I_physical
      when: 'true'
      status: info
      text:
        es: 'I individual se usa para verificar que cada equipo opera dentro de sus parametros nominales.'
        en: 'Individual I is used to verify each device operates within its nominal parameters.'
    model_validity_rules:
    - id: I_validity
      when: 'true'
      status: ok
      text:
        es: 'El calculo I = P/V es valido para cargas con factor de potencia unitario. Para cargas inductivas, la corriente real puede ser mayor.'
        en: 'The calculation I = P/V is valid for unity power factor loads. For inductive loads, actual current may be greater.'
    graph_rules:
    - id: I_graph
      when: 'true'
      status: info
      text:
        es: 'I se representa como barra proporcional a la potencia de cada equipo en el grafico de distribucion de cargas.'
        en: 'I is represented as a bar proportional to each device power in the load distribution graph.'
    likely_errors:
    - id: I_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: confundir la corriente nominal del equipo con I_tot. La corriente de la toma es la suma de todas las I individuales.'
        en: 'Frequent error: confusing device nominal current with I_tot. Socket current is the sum of all individual I values.'
    next_step_rules:
    - id: I_next
      when: 'true'
      status: info
      text:
        es: 'Con I de cada equipo calculada, sumar todas las I para obtener I_tot y calcular margen_uso.'
        en: 'With each device I calculated, sum all I values to obtain I_tot and calculate margen_uso.'
  I_max:
    summary_rules:
    - id: Imax_summary
      when: 'true'
      status: info
      text:
        es: 'I_max es el limite de corriente nominal de la toma o regleta. No debe superarse en regimen permanente. Valor tipico 10 A o 16 A.'
        en: 'I_max is the nominal current limit of the socket or strip. Must not be exceeded in steady state. Typical value 10 A or 16 A.'
    coherence_rules:
    - id: Imax_coherence
      when: 'true'
      status: ok
      text:
        es: 'I_max esta impreso en la etiqueta. Si no es visible, el valor conservador por defecto es 10 A para regletas de origen desconocido.'
        en: 'I_max is printed on the label. If not visible, the conservative default is 10 A for strips of unknown origin.'
    physical_reading_rules:
    - id: Imax_physical
      when: 'true'
      status: info
      text:
        es: 'I_max no es un umbral de disparo automatico sino un limite de diseno del contacto mecanico. Superarlo degrada el contacto irreversiblemente.'
        en: 'I_max is not an automatic trip threshold but a design limit of the mechanical contact. Exceeding it degrades the contact irreversibly.'
    model_validity_rules:
    - id: Imax_validity
      when: 'true'
      status: ok
      text:
        es: 'I_max es valido para regimen permanente. Para corrientes de arranque transitorias, puede superarse brevemente sin causar dano inmediato.'
        en: 'I_max is valid for steady state. For transient startup currents, it may be briefly exceeded without causing immediate damage.'
    graph_rules:
    - id: Imax_graph
      when: 'true'
      status: info
      text:
        es: 'I_max se muestra como linea horizontal de referencia en el grafico de corriente. I_tot debe estar por debajo de esta linea.'
        en: 'I_max is shown as a horizontal reference line in the current graph. I_tot must remain below this line.'
    likely_errors:
    - id: Imax_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: asumir que la toma puede soportar cualquier corriente porque no ha fallado antes. I_max es un limite de diseno, no un umbral de disparo.'
        en: 'Frequent error: assuming the socket can handle any current because it has not failed before. I_max is a design limit, not a trip threshold.'
    next_step_rules:
    - id: Imax_next
      when: 'true'
      status: info
      text:
        es: 'Con I_max identificado, calcular P_max = V * I_max para tener la potencia maxima admisible de la toma.'
        en: 'With I_max identified, calculate P_max = V * I_max to obtain the maximum admissible power of the socket.'
  P:
    summary_rules:
    - id: P_summary
      when: 'true'
      status: info
      text:
        es: 'P es la potencia nominal de un equipo individual. Esta impresa en la etiqueta del equipo. Se usa para calcular I = P/V.'
        en: 'P is the nominal power of an individual device. It is printed on the device label. Used to calculate I = P/V.'
    coherence_rules:
    - id: P_coherence
      when: 'true'
      status: ok
      text:
        es: 'P debe estar en vatios. Si la etiqueta indica kW, multiplicar por 1000. Si indica VA, para cargas resistivas puras coincide con la potencia activa.'
        en: 'P must be in watts. If the label shows kW, multiply by 1000. If it shows VA, for purely resistive loads it equals active power.'
    physical_reading_rules:
    - id: P_physical
      when: 'true'
      status: info
      text:
        es: 'P es la potencia activa consumida por el equipo. Es la magnitud de entrada mas accesible ya que esta impresa en la etiqueta del fabricante.'
        en: 'P is the active power consumed by the device. It is the most accessible input quantity since it is printed on the manufacturer label.'
    model_validity_rules:
    - id: P_validity
      when: 'true'
      status: ok
      text:
        es: 'P nominal es el consumo maximo del equipo. El consumo real puede ser menor en funcionamiento parcial. Para seguridad, usar siempre P nominal.'
        en: 'Nominal P is the maximum device consumption. Actual consumption may be lower during partial operation. For safety, always use nominal P.'
    graph_rules:
    - id: P_graph
      when: 'true'
      status: info
      text:
        es: 'P de cada equipo se visualiza como segmento proporcional en el diagrama de carga. La suma de todos los segmentos es P_tot.'
        en: 'P of each device is shown as a proportional segment in the load diagram. The sum of all segments is P_tot.'
    likely_errors:
    - id: P_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: usar la potencia de standby en lugar de la potencia maxima de funcionamiento. Para calculos de seguridad usar siempre la potencia nominal maxima.'
        en: 'Frequent error: using standby power instead of maximum operating power. For safety calculations always use maximum nominal power.'
    next_step_rules:
    - id: P_next
      when: 'true'
      status: info
      text:
        es: 'Con P de cada equipo, calcular I = P/V para obtener la corriente individual y sumarlas para obtener I_tot.'
        en: 'With P of each device, calculate I = P/V to obtain individual current and sum them to get I_tot.'
  P_tot:
    summary_rules:
    - id: Ptot_summary
      when: 'true'
      status: info
      text:
        es: 'P_tot es la suma de potencias de todos los equipos conectados simultaneamente. Es la magnitud de entrada para calcular I_tot y margen_uso.'
        en: 'P_tot is the sum of powers of all simultaneously connected devices. It is the input quantity for calculating I_tot and margen_uso.'
    coherence_rules:
    - id: Ptot_coherence
      when: 'true'
      status: ok
      text:
        es: 'P_tot = suma de P individuales de los equipos activos. Usar solo los equipos que estan funcionando activamente.'
        en: 'P_tot = sum of individual P values of active devices. Use only actively operating devices.'
    physical_reading_rules:
    - id: Ptot_physical
      when: 'true'
      status: info
      text:
        es: 'P_tot refleja la demanda total de la toma en un instante dado. Apagar un equipo reduce P_tot inmediatamente.'
        en: 'P_tot reflects the total demand on the socket at a given instant. Switching off a device reduces P_tot immediately.'
    model_validity_rules:
    - id: Ptot_validity
      when: 'true'
      status: ok
      text:
        es: 'P_tot como suma de potencias nominales es el peor caso. El factor de simultaneidad real puede reducir P_tot efectivo.'
        en: 'P_tot as sum of nominal powers is the worst case. Actual simultaneity factor can reduce effective P_tot.'
    graph_rules:
    - id: Ptot_graph
      when: 'true'
      status: info
      text:
        es: 'P_tot se representa como altura total del diagrama de barras apiladas. La linea de referencia en P_max indica el limite nominal.'
        en: 'P_tot is represented as the total height of the stacked bar chart. The reference line at P_max indicates the nominal limit.'
    likely_errors:
    - id: Ptot_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: incluir equipos no encendidos simultaneamente, sobreestimando el riesgo. El factor de simultaneidad real puede reducir P_tot efectivo.'
        en: 'Frequent error: including devices not simultaneously on, overestimating risk. Actual simultaneity factor can reduce effective P_tot.'
    next_step_rules:
    - id: Ptot_next
      when: 'true'
      status: info
      text:
        es: 'Con P_tot calculado, obtener I_tot = P_tot/V y luego margen_uso = I_tot/I_max para evaluar el nivel de uso.'
        en: 'With P_tot calculated, obtain I_tot = P_tot/V and then margen_uso = I_tot/I_max to evaluate the usage level.'
  R_contacto:
    summary_rules:
    - id: Rcon_summary
      when: 'true'
      status: info
      text:
        es: 'R_contacto es la resistencia de la interfaz metalica del enchufe. Un valor alto indica contacto degradado y puede generar P_perdida significativa incluso con corrientes moderadas.'
        en: 'R_contacto is the resistance of the plug metallic interface. A high value indicates a degraded contact and can generate significant P_perdida even at moderate currents.'
    coherence_rules:
    - id: Rcon_coherence
      when: 'true'
      status: ok
      text:
        es: 'R_contacto tipica en toma nueva es menor de 0.05 ohmios. Superior a 0.1 ohmios indica degradacion incipiente. Superior a 0.5 ohmios es condicion de riesgo.'
        en: 'Typical R_contacto in a new socket is below 0.05 ohms. Above 0.1 ohms indicates incipient degradation. Above 0.5 ohms is a risk condition.'
    physical_reading_rules:
    - id: Rcon_physical
      when: 'true'
      status: info
      text:
        es: 'R_contacto elevada es el principal indicador de degradacion del contacto. No se puede detectar visualmente; los sintomas son consecuencias de P_perdida elevada.'
        en: 'Elevated R_contacto is the primary indicator of contact degradation. It cannot be visually detected; symptoms are consequences of elevated P_perdida.'
    model_validity_rules:
    - id: Rcon_validity
      when: 'true'
      status: ok
      text:
        es: 'El modelo de R_contacto como resistencia estatica es valido en regimen permanente. Para arcos intermitentes, la disipacion real puede ser mayor que I^2*R.'
        en: 'The R_contacto as static resistance model is valid in steady state. For intermittent arcing, actual dissipation may be greater than I^2*R.'
    graph_rules:
    - id: Rcon_graph
      when: 'true'
      status: info
      text:
        es: 'R_contacto aparece como parametro de la curva parabolica de P_perdida. Mayor R_contacto desplaza la parabola hacia arriba.'
        en: 'R_contacto appears as a parameter of the parabolic P_perdida curve. Higher R_contacto shifts the parabola upward.'
    likely_errors:
    - id: Rcon_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: ignorar R_contacto porque es mucho menor que la resistencia de la carga. Con I_tot alta, P_perdida = I_tot^2 * R_contacto puede ser significativa.'
        en: 'Frequent error: ignoring R_contacto because it is much smaller than load resistance. With high I_tot, P_perdida can be significant even with small R_contacto.'
    next_step_rules:
    - id: Rcon_next
      when: 'true'
      status: info
      text:
        es: 'Con R_contacto estimada, calcular P_perdida = I_tot^2 * R_contacto. Si P_perdida > 5 W, proceder a la inspeccion y sustitucion de la toma.'
        en: 'With R_contacto estimated, calculate P_perdida = I_tot^2 * R_contacto. If P_perdida > 5 W, proceed to socket inspection and replacement.'
  V:
    summary_rules:
    - id: V_summary
      when: 'true'
      status: info
      text:
        es: 'V es la tension de suministro de la toma. En Europa es nominalmente 230 V a 50 Hz. Es el parametro divisor para calcular I = P/V.'
        en: 'V is the socket supply voltage. In Europe it is nominally 230 V at 50 Hz. It is the divisor parameter for calculating I = P/V.'
    coherence_rules:
    - id: V_coherence
      when: 'true'
      status: ok
      text:
        es: 'En instalaciones residenciales europeas V = 230 V. En EE.UU. V = 120 V; los mismos equipos consumen mas corriente a menor tension para la misma potencia.'
        en: 'In European residential installations V = 230 V. In the US V = 120 V; the same devices draw more current at lower voltage for the same power.'
    physical_reading_rules:
    - id: V_physical
      when: 'true'
      status: info
      text:
        es: 'V = 230 V es el dato de entrada fijo en instalaciones europeas. Una tension inferior a 220 V o superior a 240 V indica problemas en la instalacion.'
        en: 'V = 230 V is the fixed input datum in European installations. A voltage below 220 V or above 240 V indicates installation issues.'
    model_validity_rules:
    - id: V_validity
      when: 'true'
      status: ok
      text:
        es: 'Las fluctuaciones de tension normales pueden alterar levemente I = P/V pero el efecto es menor que las incertidumbres en P nominal.'
        en: 'Normal voltage fluctuations can slightly alter I = P/V but the effect is smaller than uncertainties in nominal P.'
    graph_rules:
    - id: V_graph
      when: 'true'
      status: info
      text:
        es: 'V aparece como parametro de escala en el grafico de I vs P. Un V mayor reduce I para la misma P.'
        en: 'V appears as a scale parameter in the I vs P graph. Higher V reduces I for the same P.'
    likely_errors:
    - id: V_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: usar V = 220 V en lugar de 230 V. La diferencia es del 4%, introduciendo un error sistematico en I_tot y margen_uso.'
        en: 'Frequent error: using V = 220 V instead of 230 V. The difference is 4%, introducing a systematic error in I_tot and margen_uso.'
    next_step_rules:
    - id: V_next
      when: 'true'
      status: info
      text:
        es: 'Con V conocida (230 V en Europa), calcular I = P/V para cada equipo e I_tot = P_tot/V para la toma completa.'
        en: 'With V known (230 V in Europe), calculate I = P/V for each device and I_tot = P_tot/V for the complete socket.'
"""

import yaml
try:
    yaml.safe_load(content)
    (base / 'interpretacion.yaml').write_text(content, encoding='utf-8')
    print('interpretacion.yaml: OK, written')
except yaml.YAMLError as e:
    print(f'interpretacion.yaml ERROR: {e}')
