const e=`version: 2\r
topic:\r
  id: diferencial-y-magnetotermico\r
  title: Diferencial y magnetotermico\r
\r
ui:\r
  default_formula: corriente_carga\r
  groups:\r
    - title: Sobrecarga magnetotérmica\r
      items:\r
        - corriente_carga\r
        - potencia_limite\r
        - ratio_termico\r
    - title: Fuga diferencial\r
      items:\r
        - desequilibrio\r
        - ratio_diferencial\r
\r
formulas:\r
- id: corriente_carga\r
  title:\r
    es: Corriente de carga del circuito\r
    en: Circuit load current\r
  equation: I = P/V\r
  latex: 'I=\\frac{P}{V}'\r
  rearrangements:\r
  - target: P\r
    equation: P = I*V\r
    latex: 'P=I\\cdot V'\r
    constraints:\r
    - "V != 0"\r
  - target: V\r
    equation: V = P/I\r
    latex: 'V=\\frac{P}{I}'\r
    constraints:\r
    - "I != 0"\r
  category: fundamental\r
  relation_type: algebraic\r
  physical_meaning:\r
    es: La corriente de carga es el cociente entre la potencia activa consumida y la tensión de suministro. Indica cuántos amperios circulan por el circuito cuando se conecta una carga de potencia P.\r
    en: The load current is the ratio of active power consumed to supply voltage. It indicates how many amperes flow through the circuit when a load of power P is connected.\r
  constraints: "V != 0; válido para cargas resistivas puras (factor de potencia = 1)."\r
  validity:\r
    es: Válida para cargas resistivas a tensión nominal constante. Para cargas inductivas o capacitivas, I real puede ser mayor por el factor de potencia.\r
    en: Valid for resistive loads at constant nominal voltage. For inductive or capacitive loads, real I may be higher due to the power factor.\r
  dimension_check: "[W]/[V] = [W]/[W/A] = A"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - sobrecarga\r
  - magnetotermico\r
  - corriente\r
  result_semantics:\r
    target: I\r
    kind: ratio\r
    sign_meaning:\r
      es: La corriente de carga es siempre positiva en valor absoluto.\r
      en: Load current is always positive in absolute value.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es I respecto a I_n, mayor es el riesgo de disparo del magnetotérmico.\r
      en: The larger I relative to I_n, the greater the MCB trip risk.\r
  domain_checks:\r
  - expr: "V > 0"\r
    message:\r
      es: "La tensión de suministro debe ser positiva para calcular la corriente."\r
      en: "Supply voltage must be positive to calculate current."\r
  coherence_checks:\r
  - expr: "result < 100"\r
    message:\r
      es: "Corriente superior a 100 A es inusual en instalaciones residenciales; revisa los datos."\r
      en: "Current above 100 A is unusual in residential installations; check your data."\r
  graph_implications:\r
  - "I se representa en el eje Y del gráfico de corriente; comparar con la línea de referencia I_n."\r
  pedagogical_triggers:\r
  - when: "result > I_n"\r
    message:\r
      es: "I supera I_n: hay sobrecarga activa. El magnetotérmico puede actuar en minutos."\r
      en: "I exceeds I_n: active overload. The MCB may trip within minutes."\r
  - when: "result/I_n > 0.8 and result/I_n <= 1"\r
    message:\r
      es: "Operación con margen reducido (>80% de I_n). Evita añadir más cargas a este circuito."\r
      en: "Reduced-margin operation (>80% of I_n). Avoid adding more loads to this circuit."\r
\r
- id: desequilibrio\r
  title:\r
    es: Desequilibrio diferencial fase-neutro\r
    en: Phase-neutral differential imbalance\r
  equation: I_delta = |I_fase - I_neutro|\r
  latex: 'I_{\\Delta}=|I_{fase}-I_{neutro}|'\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: algebraic\r
  physical_meaning:\r
    es: El desequilibrio diferencial es la diferencia absoluta entre la corriente de fase y la de neutro. Representa la corriente que no regresa por el camino previsto, es decir, la fuga a tierra.\r
    en: The differential imbalance is the absolute difference between phase and neutral current. It represents the current not returning via the intended path, i.e., the earth leakage.\r
  constraints: "Ambas corrientes deben medirse en el mismo circuito y en el mismo instante."\r
  validity:\r
    es: Válida para corriente alterna estándar tipo AC. Para corrientes pulsantes de CC (equipos electrónicos), se requiere diferencial tipo A.\r
    en: Valid for standard AC type current. For pulsating DC currents (electronic devices), a type-A RCD is required.\r
  dimension_check: "[A] - [A] = [A]"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - fuga\r
  - diferencial\r
  - desequilibrio\r
  result_semantics:\r
    target: I_delta\r
    kind: difference\r
    sign_meaning:\r
      es: I_delta es siempre no negativa por definición (valor absoluto).\r
      en: I_delta is always non-negative by definition (absolute value).\r
    absolute_value_meaning:\r
      es: Cuanto mayor es I_delta respecto a I_dn, mayor es el riesgo de disparo diferencial.\r
      en: The larger I_delta relative to I_dn, the greater the RCD trip risk.\r
  domain_checks:\r
  - expr: "I_fase >= 0 and I_neutro >= 0"\r
    message:\r
      es: "Las corrientes de fase y neutro deben ser no negativas."\r
      en: "Phase and neutral currents must be non-negative."\r
  coherence_checks:\r
  - expr: "result <= I_fase"\r
    message:\r
      es: "El desequilibrio no puede superar la corriente de fase medida; revisa las mediciones."\r
      en: "The imbalance cannot exceed the measured phase current; check measurements."\r
  graph_implications:\r
  - "I_delta se muestra como la diferencia entre las curvas de I_fase e I_neutro; comparar con la línea I_dn."\r
  pedagogical_triggers:\r
  - when: "result >= I_dn"\r
    message:\r
      es: "I_delta supera I_dn: disparo diferencial esperado. Identificar y corregir la fuga antes de rearmar."\r
      en: "I_delta exceeds I_dn: RCD trip expected. Identify and correct the leakage before resetting."\r
  - when: "result >= 0.5*I_dn and result < I_dn"\r
    message:\r
      es: "Fuga apreciable sin disparo (zona de vigilancia). Puede indicar degradación progresiva del aislamiento."\r
      en: "Appreciable leakage without trip (monitoring zone). May indicate progressive insulation degradation."\r
\r
- id: ratio_diferencial\r
  title:\r
    es: Ratio de disparo diferencial\r
    en: Differential trip ratio\r
  equation: margen_dif = I_delta/I_dn\r
  latex: 'margen_{dif}=\\frac{I_{\\Delta}}{I_{\\Delta n}}'\r
  rearrangements:\r
  - target: I_delta\r
    equation: I_delta = margen_dif * I_dn\r
    latex: 'I_{\\Delta}=margen_{dif}\\cdot I_{\\Delta n}'\r
    constraints:\r
    - "I_dn > 0"\r
  category: derived\r
  relation_type: ratio\r
  physical_meaning:\r
    es: El ratio diferencial indica qué fracción del umbral de disparo I_dn ha sido alcanzada por el desequilibrio I_delta. Un valor de 1 o superior implica disparo inminente o activo.\r
    en: The differential ratio indicates what fraction of the trip threshold I_dn has been reached by the imbalance I_delta. A value of 1 or above implies imminent or active tripping.\r
  constraints: "I_dn > 0."\r
  validity:\r
    es: Válido para diferenciales tipo AC con corriente alterna pura. Puede subestimar el riesgo en circuitos con fuentes conmutadas.\r
    en: Valid for type-AC RCDs with pure AC. May underestimate risk in circuits with switching power supplies.\r
  dimension_check: "[A]/[A] = adimensional"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - margen\r
  - diferencial\r
  - ratio\r
  result_semantics:\r
    target: margen_dif\r
    kind: ratio\r
    sign_meaning:\r
      es: margen_dif es siempre no negativo.\r
      en: margen_dif is always non-negative.\r
    absolute_value_meaning:\r
      es: Valores mayores indican mayor proximidad al disparo diferencial.\r
      en: Higher values indicate greater proximity to RCD tripping.\r
  domain_checks:\r
  - expr: "I_dn > 0"\r
    message:\r
      es: "El umbral diferencial I_dn debe ser positivo."\r
      en: "The differential threshold I_dn must be positive."\r
  coherence_checks:\r
  - expr: "result >= 0"\r
    message:\r
      es: "El ratio diferencial debe ser no negativo."\r
      en: "The differential ratio must be non-negative."\r
  graph_implications:\r
  - "margen_dif se muestra en el eje Y del gráfico de márgenes; la línea de referencia en 1 marca el umbral de disparo."\r
  pedagogical_triggers:\r
  - when: "result >= 1"\r
    message:\r
      es: "Umbral diferencial superado. El diferencial actúa o debe actuar. Corregir la fuga antes de rearmar."\r
      en: "Differential threshold exceeded. The RCD trips or should trip. Correct leakage before resetting."\r
\r
- id: potencia_limite\r
  title:\r
    es: Potencia límite magnetotérmica\r
    en: MCB power limit\r
  equation: P_lim = V*I_n\r
  latex: 'P_{lim}=V\\cdot I_n'\r
  rearrangements:\r
  - target: I_n\r
    equation: I_n = P_lim/V\r
    latex: 'I_n=\\frac{P_{lim}}{V}'\r
    constraints:\r
    - "V != 0"\r
  category: derived\r
  relation_type: algebraic\r
  physical_meaning:\r
    es: La potencia límite es la potencia máxima aproximada que puede conectarse al circuito sin que el magnetotérmico actúe en régimen sostenido. Es una estimación de primer orden para carga resistiva.\r
    en: The power limit is the approximate maximum power connectable to the circuit without the MCB tripping in sustained operation. It is a first-order estimate for resistive load.\r
  constraints: "V > 0; I_n > 0; estimación válida solo para cargas resistivas."\r
  validity:\r
    es: Estimación válida para cargas resistivas puras. Para cargas inductivas o con arranques elevados, la potencia admisible real puede ser menor.\r
    en: Valid estimate for purely resistive loads. For inductive loads or high-inrush equipment, the real admissible power may be lower.\r
  dimension_check: "[V]·[A] = W"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - potencia\r
  - magnetotermico\r
  - limite\r
  result_semantics:\r
    target: P_lim\r
    kind: product\r
    sign_meaning:\r
      es: P_lim es siempre positiva.\r
      en: P_lim is always positive.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es P_lim, mayor es la capacidad del circuito para alimentar cargas.\r
      en: The larger P_lim, the greater the circuit capacity to supply loads.\r
  domain_checks:\r
  - expr: "V > 0 and I_n > 0"\r
    message:\r
      es: "La tensión y la corriente nominal deben ser positivas."\r
      en: "Voltage and nominal current must be positive."\r
  coherence_checks:\r
  - expr: "result > 0"\r
    message:\r
      es: "La potencia límite debe ser positiva."\r
      en: "The power limit must be positive."\r
  graph_implications:\r
  - "P_lim se muestra como la línea de potencia umbral en el gráfico de potencia vs carga."\r
  pedagogical_triggers:\r
  - when: "P_carga >= result"\r
    message:\r
      es: "La carga supera la potencia límite estimada del circuito. Esperable actuación del magnetotérmico."\r
      en: "Load exceeds the estimated circuit power limit. MCB trip expected."\r
\r
- id: ratio_termico\r
  title:\r
    es: Ratio de carga térmica del magnetotérmico\r
    en: MCB thermal load ratio\r
  equation: margen_termico = I/I_n\r
  latex: 'margen_{termico}=\\frac{I}{I_n}'\r
  rearrangements:\r
  - target: I\r
    equation: I = margen_termico * I_n\r
    latex: 'I=margen_{termico}\\cdot I_n'\r
    constraints:\r
    - "I_n > 0"\r
  category: derived\r
  relation_type: ratio\r
  physical_meaning:\r
    es: El ratio térmico indica qué fracción de la corriente nominal I_n está siendo consumida por el circuito. Un valor de 1 o superior indica sobrecarga activa del magnetotérmico.\r
    en: The thermal ratio indicates what fraction of the nominal current I_n is being consumed by the circuit. A value of 1 or above indicates active MCB overload.\r
  constraints: "I_n > 0."\r
  validity:\r
    es: Indicador de régimen estacionario. Los transitorios de arranque pueden superar brevemente 1 sin causar disparo inmediato.\r
    en: Steady-state indicator. Startup transients may briefly exceed 1 without causing immediate tripping.\r
  dimension_check: "[A]/[A] = adimensional"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - margen\r
  - magnetotermico\r
  - sobrecarga\r
  result_semantics:\r
    target: margen_termico\r
    kind: ratio\r
    sign_meaning:\r
      es: margen_termico es siempre no negativo.\r
      en: margen_termico is always non-negative.\r
    absolute_value_meaning:\r
      es: Valores mayores indican mayor proximidad a la sobrecarga del magnetotérmico.\r
      en: Higher values indicate greater proximity to MCB overload.\r
  domain_checks:\r
  - expr: "I_n > 0"\r
    message:\r
      es: "La corriente nominal I_n debe ser positiva."\r
      en: "The nominal current I_n must be positive."\r
  coherence_checks:\r
  - expr: "result >= 0"\r
    message:\r
      es: "El ratio térmico debe ser no negativo."\r
      en: "The thermal ratio must be non-negative."\r
  graph_implications:\r
  - "margen_termico se muestra en el eje Y del gráfico de márgenes; la línea de referencia en 1 marca el umbral de sobrecarga."\r
  pedagogical_triggers:\r
  - when: "result >= 1"\r
    message:\r
      es: "Sobrecarga activa del magnetotérmico. Reducir carga o revisar calibre con criterio técnico."\r
      en: "Active MCB overload. Reduce load or review rating with technical justification."\r
  - when: "result >= 0.8 and result < 1"\r
    message:\r
      es: "Margen reducido: operación al 80-100% del calibre. Evita añadir más cargas."\r
      en: "Reduced margin: operation at 80-100% of rating. Avoid adding more loads."\r
`;export{e as default};
