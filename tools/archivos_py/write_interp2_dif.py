from pathlib import Path

content = """\
version: 2
id: interpretacion-diferencial-y-magnetotermico
leaf_id: diferencial-y-magnetotermico
nombre:
  es: Interpretacion de Diferencial y magnetotermico
  en: Interpretation of Differential and Thermal-Magnetic Breakers
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electricidad-domestica
  parent_id: electricidad-domestica
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico
dependencies:
  formulas:
  - corriente_carga
  - desequilibrio
  - ratio_diferencial
  - potencia_limite
  - ratio_termico
  magnitudes:
  - I
  - I_delta
  - I_dn
  - I_n
  - I_fase
  - I_neutro
  - P
  - P_lim
  - V
  - margen_dif
  - margen_termico
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
      es: Lectura grafica
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
  I:
    summary_rules:
    - id: I_summary
      when: 'true'
      status: info
      text:
        es: La corriente de carga I indica cuanta corriente circula por el circuito al conectar una potencia P a la tension V de suministro.
        en: The load current I indicates how much current flows through the circuit when power P is connected at supply voltage V.
    coherence_rules:
    - id: I_coherence
      when: 'true'
      status: ok
      text:
        es: I debe ser coherente con la potencia conectada y la tension nominal. Si I supera I_n, hay sobrecarga del magnetotermico.
        en: I must be consistent with connected power and nominal voltage. If I exceeds I_n, the MCB is overloaded.
    physical_reading_rules:
    - id: I_physical
      when: 'true'
      status: info
      text:
        es: Una I elevada indica que los equipos conectados consumen mucha potencia. Si I/I_n supera 1, el magnetotermico puede actuar en minutos.
        en: A high I indicates that connected appliances consume a lot of power. If I/I_n exceeds 1, the MCB may trip within minutes.
    model_validity_rules:
    - id: I_validity
      when: 'true'
      status: ok
      text:
        es: La formula I=P/V es valida para cargas resistivas puras. En cargas inductivas la corriente real puede ser algo mayor por el factor de potencia.
        en: The formula I=P/V is valid for purely resistive loads. For inductive loads, the real current may be slightly higher due to the power factor.
    graph_rules:
    - id: I_graph
      when: 'true'
      status: info
      text:
        es: En el grafico, I se representa como la corriente total del circuito. Compara su valor con I_n para visualizar el margen termico disponible.
        en: On the graph, I is represented as the total circuit current. Compare its value with I_n to visualise the available thermal margin.
    likely_errors:
    - id: I_warn
      when: 'true'
      status: warning
      text:
        es: No confundas la corriente total I con el desequilibrio diferencial I_delta. Son magnitudes fisicamente distintas que se comparan con umbrales distintos.
        en: Do not confuse the total current I with the differential imbalance I_delta. They are physically distinct quantities compared against different thresholds.
    next_step_rules:
    - id: I_next
      when: 'true'
      status: info
      text:
        es: Calcula margen_termico = I / I_n para cuantificar que tan cerca esta el circuito del limite de disparo del magnetotermico.
        en: Calculate margen_termico = I / I_n to quantify how close the circuit is to the MCB trip threshold.
  I_delta:
    summary_rules:
    - id: I_delta_summary
      when: 'true'
      status: info
      text:
        es: El desequilibrio diferencial I_delta es la diferencia absoluta entre la corriente de fase y la corriente de neutro. Representa la corriente que escapa por un camino no previsto.
        en: The differential imbalance I_delta is the absolute difference between phase and neutral current. It represents the current escaping via an unintended path.
    coherence_rules:
    - id: I_delta_coherence
      when: 'true'
      status: ok
      text:
        es: En una instalacion sin fugas, I_delta debe ser practicamente cero. Un valor apreciable indica defecto de aislamiento o fuga real a tierra.
        en: In a leak-free installation, I_delta should be practically zero. An appreciable value indicates insulation defect or real earth leakage.
    physical_reading_rules:
    - id: I_delta_physical
      when: 'true'
      status: info
      text:
        es: I_delta representa la corriente que recorre el cuerpo de una persona en caso de contacto con un conductor con fuga. Por eso el umbral I_dn de 30 mA es el limite de seguridad personal.
        en: I_delta represents the current that would flow through a person's body upon contact with a leaking conductor. That is why the 30 mA I_dn threshold is the personal safety limit.
    model_validity_rules:
    - id: I_delta_validity
      when: 'true'
      status: ok
      text:
        es: El calculo I_delta = |I_fase - I_neutro| es valido para corriente alterna estandar. Para corrientes pulsantes de CC (equipos electronicos) se requiere diferencial tipo A.
        en: The calculation I_delta = |I_fase - I_neutro| is valid for standard AC. For pulsating DC currents (electronic devices) a type-A RCD is required.
    graph_rules:
    - id: I_delta_graph
      when: 'true'
      status: info
      text:
        es: En el grafico, I_delta se visualiza como la diferencia entre las curvas de I_fase e I_neutro. Cualquier separacion visible entre ellas indica fuga.
        en: On the graph, I_delta is visualised as the difference between the I_fase and I_neutro curves. Any visible separation between them indicates leakage.
    likely_errors:
    - id: I_delta_warn
      when: 'true'
      status: warning
      text:
        es: No compares I_delta en mA con la corriente de carga I en A sin convertir unidades. El diferencial actua con diferencias del 0,3% o menos de la corriente total del circuito.
        en: Do not compare I_delta in mA with load current I in A without converting units. The RCD trips with differences of 0.3% or less of the total circuit current.
    next_step_rules:
    - id: I_delta_next
      when: 'true'
      status: info
      text:
        es: Calcula margen_dif = I_delta / I_dn para cuantificar la proximidad al disparo diferencial e identificar si hay degradacion progresiva del aislamiento.
        en: Calculate margen_dif = I_delta / I_dn to quantify proximity to RCD trip and identify whether there is progressive insulation degradation.
  margen_termico:
    summary_rules:
    - id: margen_termico_summary
      when: 'true'
      status: info
      text:
        es: El margen termico indica que fraccion de la corriente nominal I_n esta siendo consumida. Un valor de 1 o superior indica sobrecarga del magnetotermico.
        en: The thermal margin indicates what fraction of the nominal current I_n is being consumed. A value of 1 or above indicates MCB overload.
    coherence_rules:
    - id: margen_termico_coherence
      when: 'true'
      status: ok
      text:
        es: margen_termico debe ser coherente con I calculada y el calibre I_n del magnetotermico del circuito concreto, no del cuadro general.
        en: margen_termico must be consistent with calculated I and the I_n of the circuit-specific MCB, not the main MCB.
    physical_reading_rules:
    - id: margen_termico_physical
      when: 'true'
      status: info
      text:
        es: Un margen_termico de 0,9 indica que el circuito opera al 90% de su capacidad. Un transitorio breve puede superarlo sin disparo inmediato, pero la carga sostenida provocara actuacion del magnetotermico en minutos.
        en: A margen_termico of 0.9 indicates the circuit operates at 90% capacity. A brief transient may exceed it without immediate tripping, but sustained load will cause MCB actuation within minutes.
    model_validity_rules:
    - id: margen_termico_validity
      when: 'true'
      status: ok
      text:
        es: El margen_termico es un indicador de regimen estacionario. Los transitorios de arranque pueden superar brevemente 1 sin causar disparo porque el bimetalico necesita tiempo para calentarse.
        en: margen_termico is a steady-state indicator. Startup transients may briefly exceed 1 without causing a trip because the bimetallic element needs time to heat up.
    graph_rules:
    - id: margen_termico_graph
      when: 'true'
      status: info
      text:
        es: En el grafico, margen_termico se representa como la fraccion I/I_n. La linea de referencia en 1 marca el umbral de disparo; valores por encima indican zona de riesgo.
        en: On the graph, margen_termico is represented as the fraction I/I_n. The reference line at 1 marks the trip threshold; values above indicate the risk zone.
    likely_errors:
    - id: margen_termico_warn
      when: 'true'
      status: warning
      text:
        es: No calcules margen_termico con la corriente total de la vivienda. Usa la I del circuito concreto y el I_n del magnetotermico de ese circuito.
        en: Do not calculate margen_termico with the total household current. Use the I of the specific circuit and the I_n of that circuit's MCB.
    next_step_rules:
    - id: margen_termico_next
      when: 'true'
      status: info
      text:
        es: Si margen_termico supera 0,8, revisa si hay cargas que puedan redistribuirse a otros circuitos o si el calibre del magnetotermico debe revisarse con criterio tecnico.
        en: If margen_termico exceeds 0.8, check whether loads can be redistributed to other circuits or whether the MCB rating should be reviewed with technical justification.
  margen_dif:
    summary_rules:
    - id: margen_dif_summary
      when: 'true'
      status: info
      text:
        es: El margen diferencial indica que fraccion del umbral I_dn ha sido alcanzada por el desequilibrio I_delta. Un valor igual o superior a 1 implica disparo inminente o activo.
        en: The differential margin indicates what fraction of the threshold I_dn has been reached by the imbalance I_delta. A value equal to or above 1 implies imminent or active tripping.
    coherence_rules:
    - id: margen_dif_coherence
      when: 'true'
      status: ok
      text:
        es: margen_dif debe ser coherente con I_delta calculado y la sensibilidad I_dn del diferencial instalado en el circuito.
        en: margen_dif must be consistent with calculated I_delta and the sensitivity I_dn of the RCD installed on the circuit.
    physical_reading_rules:
    - id: margen_dif_physical
      when: 'true'
      status: info
      text:
        es: Un margen_dif de 0,6 indica que la fuga actual es el 60% del umbral: no dispara, pero senala que el aislamiento no esta en condiciones ideales y la situacion puede empeorar.
        en: A margen_dif of 0.6 indicates current leakage is 60% of the threshold: no trip yet, but signals insulation is not in ideal condition and the situation may worsen.
    model_validity_rules:
    - id: margen_dif_validity
      when: 'true'
      status: ok
      text:
        es: El calculo es valido para diferencial tipo AC con corriente alterna pura. En circuitos con mucha electronica puede subestimar el riesgo real por componentes de CC pulsante.
        en: The calculation is valid for type-AC RCDs with pure AC. In circuits with significant electronics, it may underestimate real risk due to pulsating DC components.
    graph_rules:
    - id: margen_dif_graph
      when: 'true'
      status: info
      text:
        es: En el grafico, margen_dif se representa como I_delta/I_dn. La zona entre 0,5 y 1 es de vigilancia; por encima de 1 el diferencial actua.
        en: On the graph, margen_dif is represented as I_delta/I_dn. The zone between 0.5 and 1 is the monitoring zone; above 1 the RCD trips.
    likely_errors:
    - id: margen_dif_warn
      when: 'true'
      status: warning
      text:
        es: No interpretes margen_dif < 1 como ausencia total de fuga. La fuga existe; solo no es suficiente para disparar en ese instante. Un valor de 0,8 ya merece inspeccion.
        en: Do not interpret margen_dif < 1 as complete absence of leakage. The leakage exists; it is just not enough to trip at that moment. A value of 0.8 already warrants inspection.
    next_step_rules:
    - id: margen_dif_next
      when: 'true'
      status: info
      text:
        es: Si margen_dif supera 0,5, inspecciona los aparatos del circuito y los puntos de conexion para identificar el origen de la fuga antes de que alcance el umbral.
        en: If margen_dif exceeds 0.5, inspect the circuit's appliances and connection points to identify the leakage source before it reaches the threshold.
  P_lim:
    summary_rules:
    - id: P_lim_summary
      when: 'true'
      status: info
      text:
        es: P_lim es la potencia maxima aproximada que puede conectarse al circuito antes de que el magnetotermico actue por sobrecorriente. Es una estimacion de primer orden para carga resistiva.
        en: P_lim is the approximate maximum power that can be connected to the circuit before the MCB trips for overcurrent. It is a first-order estimate for resistive load.
    coherence_rules:
    - id: P_lim_coherence
      when: 'true'
      status: ok
      text:
        es: P_lim debe ser coherente con V nominal y el calibre I_n del magnetotermico del circuito. Valores de P_lim muy distintos de V*I_n indican error de calculo.
        en: P_lim must be consistent with nominal V and the I_n of the circuit MCB. Values of P_lim very different from V*I_n indicate a calculation error.
    physical_reading_rules:
    - id: P_lim_physical
      when: 'true'
      status: info
      text:
        es: P_lim indica el techo de consumo seguro del circuito. Si la suma de potencias de los equipos conectados se acerca a P_lim, el margen de seguridad es reducido.
        en: P_lim indicates the safe consumption ceiling of the circuit. If the sum of connected equipment powers approaches P_lim, the safety margin is reduced.
    model_validity_rules:
    - id: P_lim_validity
      when: 'true'
      status: ok
      text:
        es: P_lim es valida como estimacion para cargas resistivas. Para cargas inductivas o con arranques elevados, la potencia admisible real puede ser menor por los picos de corriente transitorios.
        en: P_lim is valid as an estimate for resistive loads. For inductive loads or high-inrush equipment, the real admissible power may be lower due to transient current peaks.
    graph_rules:
    - id: P_lim_graph
      when: 'true'
      status: info
      text:
        es: En el grafico, P_lim se muestra como la potencia umbral del circuito. Compara la carga actual con P_lim para visualizar el margen disponible.
        en: On the graph, P_lim is shown as the circuit power threshold. Compare the current load with P_lim to visualise the available margin.
    likely_errors:
    - id: P_lim_warn
      when: 'true'
      status: warning
      text:
        es: No uses P_lim como limite exacto para planificacion de instalaciones. Para dimensionamiento preciso se requiere la curva de tiempo-corriente del magnetotermico especifico.
        en: Do not use P_lim as an exact limit for installation planning. Precise sizing requires the time-current curve of the specific MCB.
    next_step_rules:
    - id: P_lim_next
      when: 'true'
      status: info
      text:
        es: Si la carga prevista supera 0,8 * P_lim, considera redistribuir cargas a otros circuitos o revisar si el calibre I_n debe aumentarse con criterio tecnico completo.
        en: If the planned load exceeds 0.8 * P_lim, consider redistributing loads to other circuits or reviewing whether I_n should be increased with full technical justification.
"""

p = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico/interpretacion.yaml')
p.write_text(content, encoding='utf-8')
print('Written interpretacion.yaml,', len(content.splitlines()), 'lines')
