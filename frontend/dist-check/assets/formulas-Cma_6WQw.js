const e=`version: 2\r
topic:\r
  id: enchufes-y-tomas\r
  title: Enchufes y tomas\r
\r
ui:\r
  default_formula: corriente_total\r
  groups:\r
    - title: Carga y limites\r
      items:\r
        - corriente_total\r
        - potencia_max\r
        - ratio_uso\r
    - title: Riesgo termico local\r
      items:\r
        - perdida_contacto\r
        - corriente_individual\r
\r
formulas:\r
- id: corriente_individual\r
  title:\r
    es: Corriente individual de una carga\r
    en: Individual load current\r
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
    es: La corriente individual es la fraccion de la corriente total que demanda un solo equipo. Determina cuanto aporta ese equipo al calentamiento del contacto.\r
    en: The individual current is the fraction of the total current demanded by a single device. It determines how much that device contributes to contact heating.\r
  constraints: "V != 0; valido para cargas resistivas puras (factor de potencia = 1)."\r
  validity:\r
    es: Valida para cargas resistivas a tension nominal constante. Para cargas inductivas, la corriente real puede ser mayor debido al factor de potencia.\r
    en: Valid for resistive loads at constant nominal voltage. For inductive loads, actual current may be higher due to power factor.\r
  dimension_check: "[W]/[V] = A"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - carga\r
  - corriente\r
  - toma\r
  result_semantics:\r
    target: I\r
    kind: ratio\r
    sign_meaning:\r
      es: La corriente individual es siempre positiva para cargas pasivas.\r
      en: Individual current is always positive for passive loads.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es I respecto a I_max, mayor es el riesgo termico del contacto.\r
      en: The larger I relative to I_max, the greater the thermal risk of the contact.\r
  domain_checks:\r
  - expr: "V > 0"\r
    message:\r
      es: "La tension de suministro debe ser positiva."\r
      en: "Supply voltage must be positive."\r
  coherence_checks:\r
  - expr: "result < I_max"\r
    message:\r
      es: "La corriente individual supera el nominal de la toma; verificar que el equipo es compatible."\r
      en: "Individual current exceeds socket rating; verify device compatibility."\r
  graph_implications:\r
  - "I individual contribuye como una barra al grafico de corrientes por equipo."\r
  pedagogical_triggers:\r
  - when: "result > I_max"\r
    message:\r
      es: "Un solo equipo supera el nominal de la toma. Retirar el equipo o usar una toma de mayor capacidad."\r
      en: "A single device exceeds the socket rating. Remove the device or use a higher-capacity socket."\r
\r
- id: corriente_total\r
  title:\r
    es: Corriente total en la toma o regleta\r
    en: Total current in socket or power strip\r
  equation: I_tot = P_tot/V\r
  latex: 'I_{tot}=\\frac{P_{tot}}{V}'\r
  rearrangements:\r
  - target: P_tot\r
    equation: P_tot = I_tot*V\r
    latex: 'P_{tot}=I_{tot}\\cdot V'\r
    constraints:\r
    - "V != 0"\r
  category: fundamental\r
  relation_type: algebraic\r
  physical_meaning:\r
    es: La corriente total es la suma de corrientes de todos los equipos conectados simultaneamente. Es la magnitud que circula por los contactos de la toma y determina su calentamiento.\r
    en: The total current is the sum of currents of all simultaneously connected devices. It is the quantity flowing through the socket contacts and determining their heating.\r
  constraints: "V != 0; todos los equipos deben estar activos simultaneamente para calcular el peor caso."\r
  validity:\r
    es: Valida para la aproximacion de factor de potencia unitario. En instalaciones con muchos equipos electronicos, la suma vectorial puede diferir.\r
    en: Valid for unity power factor approximation. In installations with many electronic devices, the vector sum may differ.\r
  dimension_check: "[W]/[V] = A"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - sobrecarga\r
  - corriente\r
  - toma\r
  result_semantics:\r
    target: I_tot\r
    kind: ratio\r
    sign_meaning:\r
      es: I_tot es siempre positiva para cargas pasivas.\r
      en: I_tot is always positive for passive loads.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es I_tot respecto a I_max, mayor es el riesgo de sobrecarga termica del contacto.\r
      en: The larger I_tot relative to I_max, the greater the risk of thermal overload of the contact.\r
  domain_checks:\r
  - expr: "V > 0"\r
    message:\r
      es: "La tension de suministro debe ser positiva."\r
      en: "Supply voltage must be positive."\r
  coherence_checks:\r
  - expr: "result < 20"\r
    message:\r
      es: "Corriente total superior a 20 A es inusual en tomas residenciales; revisar datos."\r
      en: "Total current above 20 A is unusual for residential sockets; check data."\r
  graph_implications:\r
  - "I_tot se representa en el eje Y; la linea de referencia I_max marca el umbral de sobrecarga."\r
  pedagogical_triggers:\r
  - when: "result > I_max"\r
    message:\r
      es: "Sobrecarga activa. I_tot supera I_max. Desconectar equipos hasta reducir la carga al 80% del nominal."\r
      en: "Active overload. I_tot exceeds I_max. Disconnect devices until load is below 80% of rating."\r
  - when: "result/I_max > 0.8 and result/I_max <= 1"\r
    message:\r
      es: "Margen reducido (80-100% de I_max). No conectar mas equipos a esta toma."\r
      en: "Reduced margin (80-100% of I_max). Do not connect more devices to this socket."\r
\r
- id: potencia_max\r
  title:\r
    es: Potencia maxima nominal de la toma\r
    en: Nominal maximum socket power\r
  equation: P_max = V*I_max\r
  latex: 'P_{max}=V\\cdot I_{max}'\r
  rearrangements:\r
  - target: I_max\r
    equation: I_max = P_max/V\r
    latex: 'I_{max}=\\frac{P_{max}}{V}'\r
    constraints:\r
    - "V != 0"\r
  category: derived\r
  relation_type: algebraic\r
  physical_meaning:\r
    es: La potencia maxima es la potencia total maxima que puede conectarse a la toma sin superar su limite de corriente nominal en regimen permanente con cargas resistivas.\r
    en: The maximum power is the total maximum power connectable to the socket without exceeding its nominal current limit in steady state with resistive loads.\r
  constraints: "V > 0; I_max > 0; estimacion valida solo para cargas resistivas."\r
  validity:\r
    es: Estimacion para carga resistiva pura. Cargas inductivas o con alto arranque pueden requerir una toma de mayor capacidad aunque la potencia en estado estacionario sea menor.\r
    en: Estimate for purely resistive load. Inductive loads or high-inrush devices may require higher-capacity socket even if steady-state power is lower.\r
  dimension_check: "[V]*[A] = W"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - potencia\r
  - limite\r
  - toma\r
  result_semantics:\r
    target: P_max\r
    kind: product\r
    sign_meaning:\r
      es: P_max es siempre positiva.\r
      en: P_max is always positive.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es P_max, mayor es la capacidad de la toma para alimentar cargas.\r
      en: The larger P_max, the greater the socket capacity to supply loads.\r
  domain_checks:\r
  - expr: "V > 0 and I_max > 0"\r
    message:\r
      es: "La tension y la corriente maxima deben ser positivas."\r
      en: "Voltage and maximum current must be positive."\r
  coherence_checks:\r
  - expr: "result > 0"\r
    message:\r
      es: "La potencia maxima debe ser positiva."\r
      en: "Maximum power must be positive."\r
  graph_implications:\r
  - "P_max se muestra como linea de referencia horizontal en el grafico de potencia total."\r
  pedagogical_triggers:\r
  - when: "P_tot >= result"\r
    message:\r
      es: "P_tot supera P_max: la toma esta sobrecargada. Redistribuir cargas o usar una regleta de mayor capacidad."\r
      en: "P_tot exceeds P_max: the socket is overloaded. Redistribute loads or use a higher-capacity strip."\r
\r
- id: perdida_contacto\r
  title:\r
    es: Potencia disipada en el contacto\r
    en: Contact dissipated power\r
  equation: P_perdida = I_tot^2 * R_contacto\r
  latex: 'P_{perdida}=I_{tot}^{2}\\cdot R_{contacto}'\r
  rearrangements:\r
  - target: R_contacto\r
    equation: R_contacto = P_perdida / I_tot^2\r
    latex: 'R_{contacto}=\\frac{P_{perdida}}{I_{tot}^{2}}'\r
    constraints:\r
    - "I_tot != 0"\r
  category: fundamental\r
  relation_type: algebraic\r
  physical_meaning:\r
    es: La potencia disipada en el contacto sigue la ley de Joule localizada en la resistencia de contacto. Crece con el cuadrado de la corriente, lo que hace que el riesgo termico escale rapidamente con la carga.\r
    en: The power dissipated at the contact follows the Joule law localised at the contact resistance. It grows with the square of the current, making thermal risk scale rapidly with load.\r
  constraints: "I_tot >= 0; R_contacto >= 0."\r
  validity:\r
    es: Valida en regimen permanente con corriente alterna eficaz. En regimen transitorio, los picos de corriente pueden generar calentamientos instantaneos mayores.\r
    en: Valid in steady state with RMS AC current. In transient regime, current peaks may generate higher instantaneous heating.\r
  dimension_check: "[A^2]*[Ohm] = W"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - riesgo_termico\r
  - contacto\r
  - joule\r
  result_semantics:\r
    target: P_perdida\r
    kind: product\r
    sign_meaning:\r
      es: P_perdida es siempre positiva; representa disipacion por efecto Joule.\r
      en: P_perdida is always positive; it represents Joule-effect dissipation.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es P_perdida, mayor es el calentamiento local del contacto y el riesgo de degradacion termica.\r
      en: The larger P_perdida, the greater the local contact heating and the thermal degradation risk.\r
  domain_checks:\r
  - expr: "I_tot >= 0 and R_contacto >= 0"\r
    message:\r
      es: "La corriente total y la resistencia de contacto deben ser no negativas."\r
      en: "Total current and contact resistance must be non-negative."\r
  coherence_checks:\r
  - expr: "result < 50"\r
    message:\r
      es: "Perdida de contacto superior a 50 W indica degradacion severa; inspeccionar la toma inmediatamente."\r
      en: "Contact loss above 50 W indicates severe degradation; inspect the socket immediately."\r
  graph_implications:\r
  - "P_perdida se representa en funcion de I_tot con una curva parabolica; el eje Y crece rapidamente."\r
  pedagogical_triggers:\r
  - when: "result > 1"\r
    message:\r
      es: "Disipacion de contacto superior a 1 W. Con contactos degradados, el calentamiento local puede ser peligroso a largo plazo."\r
      en: "Contact dissipation above 1 W. With degraded contacts, local heating can be dangerous over time."\r
\r
- id: ratio_uso\r
  title:\r
    es: Ratio de uso de la toma\r
    en: Socket usage ratio\r
  equation: margen_uso = I_tot/I_max\r
  latex: 'margen_{uso}=\\frac{I_{tot}}{I_{max}}'\r
  rearrangements:\r
  - target: I_tot\r
    equation: I_tot = margen_uso * I_max\r
    latex: 'I_{tot}=margen_{uso}\\cdot I_{max}'\r
    constraints:\r
    - "I_max > 0"\r
  category: derived\r
  relation_type: ratio\r
  physical_meaning:\r
    es: El ratio de uso indica que fraccion de la corriente nominal I_max esta siendo consumida. Un valor de 1 o superior indica que la toma esta en sobrecarga o en su limite exacto.\r
    en: The usage ratio indicates what fraction of the nominal current I_max is being consumed. A value of 1 or above indicates the socket is at or above its overload limit.\r
  constraints: "I_max > 0."\r
  validity:\r
    es: Indicador de regimen permanente. Los transitorios de arranque pueden superar brevemente la unidad sin causar degradacion inmediata.\r
    en: Steady-state indicator. Startup transients may briefly exceed unity without causing immediate degradation.\r
  dimension_check: "[A]/[A] = adimensional"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - margen\r
  - sobrecarga\r
  - toma\r
  result_semantics:\r
    target: margen_uso\r
    kind: ratio\r
    sign_meaning:\r
      es: margen_uso es siempre no negativo; es el cociente de dos magnitudes positivas.\r
      en: margen_uso is always non-negative; it is the ratio of two positive quantities.\r
    absolute_value_meaning:\r
      es: Valores mayores indican mayor proximidad a la sobrecarga de la toma.\r
      en: Higher values indicate greater proximity to socket overload.\r
  domain_checks:\r
  - expr: "I_max > 0"\r
    message:\r
      es: "La corriente maxima nominal I_max debe ser positiva."\r
      en: "The nominal maximum current I_max must be positive."\r
  coherence_checks:\r
  - expr: "result >= 0"\r
    message:\r
      es: "El ratio de uso debe ser no negativo."\r
      en: "The usage ratio must be non-negative."\r
  graph_implications:\r
  - "margen_uso se representa en el eje Y del grafico de margenes; la linea en 1 marca el umbral de sobrecarga."\r
  pedagogical_triggers:\r
  - when: "result >= 1"\r
    message:\r
      es: "Sobrecarga activa. Desconectar equipos inmediatamente para proteger el contacto de degradacion termica."\r
      en: "Active overload. Disconnect devices immediately to protect the contact from thermal degradation."\r
  - when: "result >= 0.8 and result < 1"\r
    message:\r
      es: "Zona de vigilancia (80-100% del nominal). No conectar mas equipos hasta redistribuir la carga."\r
      en: "Monitoring zone (80-100% of rating). Do not connect more devices until load is redistributed."\r
`;export{e as default};
