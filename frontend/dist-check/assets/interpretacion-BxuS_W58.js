const e=`version: 2\r
id: interpretacion-diferencial-y-magnetotermico\r
leaf_id: diferencial-y-magnetotermico\r
nombre:\r
  es: Interpretacion de Diferencial y magnetotermico\r
  en: Interpretation of Differential and Thermal-Magnetic Breakers\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: electricidad-domestica\r
  parent_id: electricidad-domestica\r
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico\r
dependencies:\r
  formulas:\r
  - corriente_carga\r
  - desequilibrio\r
  - ratio_diferencial\r
  - potencia_limite\r
  - ratio_termico\r
  magnitudes:\r
  - I\r
  - I_delta\r
  - I_dn\r
  - I_n\r
  - I_fase\r
  - I_neutro\r
  - P\r
  - P_lim\r
  - V\r
  - margen_dif\r
  - margen_termico\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura grafica\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  I:\r
    summary_rules:\r
    - id: I_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La corriente de carga I indica cuanta corriente circula por el circuito al conectar una potencia P a la tension V de suministro.\r
        en: The load current I indicates how much current flows through the circuit when power P is connected at supply voltage V.\r
    coherence_rules:\r
    - id: I_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: I debe ser coherente con la potencia conectada y la tension nominal. Si I supera I_n, hay sobrecarga del magnetotermico.\r
        en: I must be consistent with connected power and nominal voltage. If I exceeds I_n, the MCB is overloaded.\r
    physical_reading_rules:\r
    - id: I_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una I elevada indica que los equipos conectados consumen mucha potencia. Si I/I_n supera 1, el magnetotermico puede actuar en minutos.\r
        en: A high I indicates that connected appliances consume a lot of power. If I/I_n exceeds 1, the MCB may trip within minutes.\r
    model_validity_rules:\r
    - id: I_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La formula I=P/V es valida para cargas resistivas puras. En cargas inductivas la corriente real puede ser algo mayor por el factor de potencia.\r
        en: The formula I=P/V is valid for purely resistive loads. For inductive loads, the real current may be slightly higher due to the power factor.\r
    graph_rules:\r
    - id: I_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, I se representa como la corriente total del circuito. Compara su valor con I_n para visualizar el margen termico disponible.\r
        en: On the graph, I is represented as the total circuit current. Compare its value with I_n to visualise the available thermal margin.\r
    likely_errors:\r
    - id: I_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas la corriente total I con el desequilibrio diferencial I_delta. Son magnitudes fisicamente distintas que se comparan con umbrales distintos.\r
        en: Do not confuse the total current I with the differential imbalance I_delta. They are physically distinct quantities compared against different thresholds.\r
    next_step_rules:\r
    - id: I_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Calcula margen_termico = I / I_n para cuantificar que tan cerca esta el circuito del limite de disparo del magnetotermico.\r
        en: Calculate margen_termico = I / I_n to quantify how close the circuit is to the MCB trip threshold.\r
  I_delta:\r
    summary_rules:\r
    - id: I_delta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El desequilibrio diferencial I_delta es la diferencia absoluta entre la corriente de fase y la corriente de neutro. Representa la corriente que escapa por un camino no previsto.\r
        en: The differential imbalance I_delta is the absolute difference between phase and neutral current. It represents the current escaping via an unintended path.\r
    coherence_rules:\r
    - id: I_delta_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: En una instalacion sin fugas, I_delta debe ser practicamente cero. Un valor apreciable indica defecto de aislamiento o fuga real a tierra.\r
        en: In a leak-free installation, I_delta should be practically zero. An appreciable value indicates insulation defect or real earth leakage.\r
    physical_reading_rules:\r
    - id: I_delta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I_delta representa la corriente que recorre el cuerpo de una persona en caso de contacto con un conductor con fuga. Por eso el umbral I_dn de 30 mA es el limite de seguridad personal.\r
        en: I_delta represents the current that would flow through a person's body upon contact with a leaking conductor. That is why the 30 mA I_dn threshold is the personal safety limit.\r
    model_validity_rules:\r
    - id: I_delta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El calculo I_delta = |I_fase - I_neutro| es valido para corriente alterna estandar. Para corrientes pulsantes de CC (equipos electronicos) se requiere diferencial tipo A.\r
        en: The calculation I_delta = |I_fase - I_neutro| is valid for standard AC. For pulsating DC currents (electronic devices) a type-A RCD is required.\r
    graph_rules:\r
    - id: I_delta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, I_delta se visualiza como la diferencia entre las curvas de I_fase e I_neutro. Cualquier separacion visible entre ellas indica fuga.\r
        en: On the graph, I_delta is visualised as the difference between the I_fase and I_neutro curves. Any visible separation between them indicates leakage.\r
    likely_errors:\r
    - id: I_delta_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No compares I_delta en mA con la corriente de carga I en A sin convertir unidades. El diferencial actua con diferencias del 0,3% o menos de la corriente total del circuito.\r
        en: Do not compare I_delta in mA with load current I in A without converting units. The RCD trips with differences of 0.3% or less of the total circuit current.\r
    next_step_rules:\r
    - id: I_delta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Calcula margen_dif = I_delta / I_dn para cuantificar la proximidad al disparo diferencial e identificar si hay degradacion progresiva del aislamiento.\r
        en: Calculate margen_dif = I_delta / I_dn to quantify proximity to RCD trip and identify whether there is progressive insulation degradation.\r
  margen_termico:\r
    summary_rules:\r
    - id: margen_termico_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El margen termico indica que fraccion de la corriente nominal I_n esta siendo consumida. Un valor de 1 o superior indica sobrecarga del magnetotermico.\r
        en: The thermal margin indicates what fraction of the nominal current I_n is being consumed. A value of 1 or above indicates MCB overload.\r
    coherence_rules:\r
    - id: margen_termico_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: margen_termico debe ser coherente con I calculada y el calibre I_n del magnetotermico del circuito concreto, no del cuadro general.\r
        en: margen_termico must be consistent with calculated I and the I_n of the circuit-specific MCB, not the main MCB.\r
    physical_reading_rules:\r
    - id: margen_termico_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un margen_termico de 0,9 indica que el circuito opera al 90% de su capacidad. Un transitorio breve puede superarlo sin disparo inmediato, pero la carga sostenida provocara actuacion del magnetotermico en minutos.\r
        en: A margen_termico of 0.9 indicates the circuit operates at 90% capacity. A brief transient may exceed it without immediate tripping, but sustained load will cause MCB actuation within minutes.\r
    model_validity_rules:\r
    - id: margen_termico_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El margen_termico es un indicador de regimen estacionario. Los transitorios de arranque pueden superar brevemente 1 sin causar disparo porque el bimetalico necesita tiempo para calentarse.\r
        en: margen_termico is a steady-state indicator. Startup transients may briefly exceed 1 without causing a trip because the bimetallic element needs time to heat up.\r
    graph_rules:\r
    - id: margen_termico_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, margen_termico se representa como la fraccion I/I_n. La linea de referencia en 1 marca el umbral de disparo; valores por encima indican zona de riesgo.\r
        en: On the graph, margen_termico is represented as the fraction I/I_n. The reference line at 1 marks the trip threshold; values above indicate the risk zone.\r
    likely_errors:\r
    - id: margen_termico_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No calcules margen_termico con la corriente total de la vivienda. Usa la I del circuito concreto y el I_n del magnetotermico de ese circuito.\r
        en: Do not calculate margen_termico with the total household current. Use the I of the specific circuit and the I_n of that circuit's MCB.\r
    next_step_rules:\r
    - id: margen_termico_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si margen_termico supera 0,8, revisa si hay cargas que puedan redistribuirse a otros circuitos o si el calibre del magnetotermico debe revisarse con criterio tecnico.\r
        en: If margen_termico exceeds 0.8, check whether loads can be redistributed to other circuits or whether the MCB rating should be reviewed with technical justification.\r
  margen_dif:\r
    summary_rules:\r
    - id: margen_dif_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El margen diferencial indica que fraccion del umbral I_dn ha sido alcanzada por el desequilibrio I_delta. Un valor igual o superior a 1 implica disparo inminente o activo.\r
        en: The differential margin indicates what fraction of the threshold I_dn has been reached by the imbalance I_delta. A value equal to or above 1 implies imminent or active tripping.\r
    coherence_rules:\r
    - id: margen_dif_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: margen_dif debe ser coherente con I_delta calculado y la sensibilidad I_dn del diferencial instalado en el circuito.\r
        en: margen_dif must be consistent with calculated I_delta and the sensitivity I_dn of the RCD installed on the circuit.\r
    physical_reading_rules:\r
    - id: margen_dif_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Un margen_dif de 0,6 indica que la fuga actual es el 60% del umbral: no dispara, pero senala que el aislamiento no esta en condiciones ideales y la situacion puede empeorar.'\r
        en: 'A margen_dif of 0.6 indicates current leakage is 60% of the threshold: no trip yet, but signals insulation is not in ideal condition and the situation may worsen.'\r
    model_validity_rules:\r
    - id: margen_dif_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El calculo es valido para diferencial tipo AC con corriente alterna pura. En circuitos con mucha electronica puede subestimar el riesgo real por componentes de CC pulsante.\r
        en: The calculation is valid for type-AC RCDs with pure AC. In circuits with significant electronics, it may underestimate real risk due to pulsating DC components.\r
    graph_rules:\r
    - id: margen_dif_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, margen_dif se representa como I_delta/I_dn. La zona entre 0,5 y 1 es de vigilancia; por encima de 1 el diferencial actua.\r
        en: On the graph, margen_dif is represented as I_delta/I_dn. The zone between 0.5 and 1 is the monitoring zone; above 1 the RCD trips.\r
    likely_errors:\r
    - id: margen_dif_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No interpretes margen_dif < 1 como ausencia total de fuga. La fuga existe; solo no es suficiente para disparar en ese instante. Un valor de 0,8 ya merece inspeccion.\r
        en: Do not interpret margen_dif < 1 as complete absence of leakage. The leakage exists; it is just not enough to trip at that moment. A value of 0.8 already warrants inspection.\r
    next_step_rules:\r
    - id: margen_dif_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si margen_dif supera 0,5, inspecciona los aparatos del circuito y los puntos de conexion para identificar el origen de la fuga antes de que alcance el umbral.\r
        en: If margen_dif exceeds 0.5, inspect the circuit's appliances and connection points to identify the leakage source before it reaches the threshold.\r
  P_lim:\r
    summary_rules:\r
    - id: P_lim_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P_lim es la potencia maxima aproximada que puede conectarse al circuito antes de que el magnetotermico actue por sobrecorriente. Es una estimacion de primer orden para carga resistiva.\r
        en: P_lim is the approximate maximum power that can be connected to the circuit before the MCB trips for overcurrent. It is a first-order estimate for resistive load.\r
    coherence_rules:\r
    - id: P_lim_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: P_lim debe ser coherente con V nominal y el calibre I_n del magnetotermico del circuito. Valores de P_lim muy distintos de V*I_n indican error de calculo.\r
        en: P_lim must be consistent with nominal V and the I_n of the circuit MCB. Values of P_lim very different from V*I_n indicate a calculation error.\r
    physical_reading_rules:\r
    - id: P_lim_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P_lim indica el techo de consumo seguro del circuito. Si la suma de potencias de los equipos conectados se acerca a P_lim, el margen de seguridad es reducido.\r
        en: P_lim indicates the safe consumption ceiling of the circuit. If the sum of connected equipment powers approaches P_lim, the safety margin is reduced.\r
    model_validity_rules:\r
    - id: P_lim_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: P_lim es valida como estimacion para cargas resistivas. Para cargas inductivas o con arranques elevados, la potencia admisible real puede ser menor por los picos de corriente transitorios.\r
        en: P_lim is valid as an estimate for resistive loads. For inductive loads or high-inrush equipment, the real admissible power may be lower due to transient current peaks.\r
    graph_rules:\r
    - id: P_lim_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, P_lim se muestra como la potencia umbral del circuito. Compara la carga actual con P_lim para visualizar el margen disponible.\r
        en: On the graph, P_lim is shown as the circuit power threshold. Compare the current load with P_lim to visualise the available margin.\r
    likely_errors:\r
    - id: P_lim_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No uses P_lim como limite exacto para planificacion de instalaciones. Para dimensionamiento preciso se requiere la curva de tiempo-corriente del magnetotermico especifico.\r
        en: Do not use P_lim as an exact limit for installation planning. Precise sizing requires the time-current curve of the specific MCB.\r
    next_step_rules:\r
    - id: P_lim_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si la carga prevista supera 0,8 * P_lim, considera redistribuir cargas a otros circuitos o revisar si el calibre I_n debe aumentarse con criterio tecnico completo.\r
        en: If the planned load exceeds 0.8 * P_lim, consider redistributing loads to other circuits or reviewing whether I_n should be increased with full technical justification.\r
\r
  I_n:\r
    summary_rules:\r
    - id: I_n_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'I_n es el calibre nominal del magnetotermico: la corriente maxima sostenida antes del disparo termico.'\r
        en: 'I_n is the nominal MCB rating: the maximum sustained current before thermal tripping.'\r
    coherence_rules:\r
    - id: I_n_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: I_n debe ser coherente con la seccion del cableado del circuito. Un I_n mayor que la capacidad del cable deja el conductor desprotegido.\r
        en: I_n must be consistent with the circuit wiring cross-section. An I_n higher than the cable capacity leaves the conductor unprotected.\r
    physical_reading_rules:\r
    - id: I_n_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un I_n mayor permite mas carga pero reduce la proteccion del cableado. Aumentar I_n sin recalcular el cable es una decision peligrosa.\r
        en: A higher I_n allows more load but reduces wiring protection. Raising I_n without recalculating the cable is a dangerous decision.\r
    model_validity_rules:\r
    - id: I_n_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: I_n es valido como umbral de regimen permanente. Para cortocircuitos, el disparo es instantaneo independientemente del calibre nominal.\r
        en: I_n is valid as a steady-state threshold. For short circuits, tripping is instantaneous regardless of the nominal rating.\r
    graph_rules:\r
    - id: I_n_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, I_n se representa como la linea de referencia horizontal del magnetotermico. La corriente de carga I se compara visualmente con esta linea.\r
        en: On the graph, I_n is represented as the MCB horizontal reference line. Load current I is compared visually against this line.\r
    likely_errors:\r
    - id: I_n_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No uses el I_n del magnetotermico general de vivienda para evaluar un circuito concreto. Cada circuito tiene su propio I_n.\r
        en: Do not use the I_n of the main household MCB to evaluate a specific circuit. Each circuit has its own I_n.\r
    next_step_rules:\r
    - id: I_n_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con I_n conocido, calcula P_lim para estimar la capacidad de carga del circuito antes de conectar nuevos equipos.\r
        en: With I_n known, calculate P_lim to estimate circuit load capacity before connecting new equipment.\r
  P:\r
    summary_rules:\r
    - id: P_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La potencia de carga P es el dato de entrada para estimar la corriente de carga I del circuito mediante la formula I = P/V.\r
        en: Load power P is the input data for estimating the circuit load current I using the formula I = P/V.\r
    coherence_rules:\r
    - id: P_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: P debe corresponder a la suma de potencias de los equipos conectados al circuito concreto, no a la vivienda completa.\r
        en: P must correspond to the sum of powers of equipment connected to the specific circuit, not the entire household.\r
    physical_reading_rules:\r
    - id: P_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una P elevada implica una I elevada. Si P supera P_lim, la corriente resultante superara I_n y el magnetotermico podra actuar.\r
        en: A high P implies a high I. If P exceeds P_lim, the resulting current will exceed I_n and the MCB may trip.\r
    model_validity_rules:\r
    - id: P_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El uso de P como dato de entrada asume factor de potencia unitario. Para cargas inductivas, la potencia aparente puede ser mayor que P.\r
        en: Using P as input assumes unity power factor. For inductive loads, apparent power may be greater than P.\r
    graph_rules:\r
    - id: P_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico de potencia, P se muestra como la potencia actual del circuito. Comparar con P_lim para evaluar el margen disponible.\r
        en: On the power graph, P is shown as the current circuit power. Compare with P_lim to evaluate the available margin.\r
    likely_errors:\r
    - id: P_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No uses la potencia total contratada de la vivienda como P del circuito. Cada circuito tiene su propia P segun los equipos conectados.\r
        en: Do not use the total contracted household power as the circuit P. Each circuit has its own P based on connected equipment.\r
    next_step_rules:\r
    - id: P_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con P y V conocidos, calcula I usando la formula de corriente de carga y compara con I_n para evaluar margen_termico.\r
        en: With P and V known, calculate I using the load current formula and compare with I_n to evaluate margen_termico.\r
  V:\r
    summary_rules:\r
    - id: V_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: V es la tension nominal de suministro, tipicamente 230 V en Europa. Es el parametro fijo de referencia para todos los calculos de corriente y potencia del circuito.\r
        en: V is the nominal supply voltage, typically 230 V in Europe. It is the fixed reference parameter for all circuit current and power calculations.\r
    coherence_rules:\r
    - id: V_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: V debe ser coherente con la instalacion. En instalaciones europeas post-1987, V = 230 V nominal con tolerancia de mas menos 10 porciento.\r
        en: V must be consistent with the installation. In post-1987 European installations, V = 230 V nominal with tolerance of plus minus 10 percent.\r
    physical_reading_rules:\r
    - id: V_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una V inferior a la nominal reduce I para la misma P, lo que puede ocultar una sobrecarga si se calcula con V = 230 V y la tension real es menor.\r
        en: A V lower than nominal reduces I for the same P, which may hide an overload if calculated with V = 230 V when the actual voltage is lower.\r
    model_validity_rules:\r
    - id: V_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: V = 230 V es una aproximacion para calculo de primer orden. Para dimensionamiento preciso, usar la tension medida en el punto de consumo.\r
        en: V = 230 V is a first-order calculation approximation. For precise sizing, use the voltage measured at the point of consumption.\r
    graph_rules:\r
    - id: V_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: V aparece como parametro fijo en el grafico de corriente vs potencia. Cambios en V desplazan la curva de I proporcionalmente.\r
        en: V appears as a fixed parameter in the current vs power graph. Changes in V shift the I curve proportionally.\r
    likely_errors:\r
    - id: V_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No uses V = 220 V para instalaciones europeas modernas. El error sistematico en I calculada es del 4 porciento, suficiente para errores de clasificacion en casos limite.\r
        en: Do not use V = 220 V for modern European installations. The systematic error in calculated I is 4 percent, enough for classification errors in borderline cases.\r
    next_step_rules:\r
    - id: V_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con V y I_n conocidos, calcula P_lim para obtener la potencia maxima del circuito antes de recurrir al magnetotermico.\r
        en: With V and I_n known, calculate P_lim to obtain the circuit maximum power before the MCB trips.\r
`;export{e as default};
