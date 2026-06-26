const e=`version: 2\r
id: interpretacion-energia-potencial-gravitatoria\r
leaf_id: energia-potencial-gravitatoria\r
nombre:\r
  es: Interpretacion de energia potencial gravitatoria\r
  en: Interpretation of gravitational potential energy\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: energia-potencial\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-gravitatoria\r
dependencies:\r
  formulas: [ potencial_gravitatorio_superficie, variacion_potencial_gravitatorio, trabajo_gravitatorio ]\r
  magnitudes: [ Ug, m, g, h, hi, hf, dUg, Wg ]\r
output_contract:\r
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
result_blocks:\r
  summary: { title: { es: Resumen, en: Summary } }\r
  physical_reading: { title: { es: Lectura fisica, en: Physical reading } }\r
  coherence: { title: { es: Coherencia, en: Coherence } }\r
  model_validity: { title: { es: Validez del modelo, en: Model validity } }\r
  graph_reading: { title: { es: Lectura grafica, en: Graph reading } }\r
  likely_errors: { title: { es: Errores probables, en: Likely errors } }\r
  next_step: { title: { es: Siguiente paso, en: Next step } }\r
targets:\r
  Ug:\r
    summary_rules:\r
    - { id: ug_summary, when: "true", status: info, text: { es: "Ug resume la energia de estado asociada a la altura elegida.", en: "Ug summarizes state energy associated with chosen height." } }\r
    physical_reading_rules:\r
    - { id: ug_reading, when: "true", status: info, text: { es: "Una Ug mayor indica un estado a mayor cota dentro de la misma referencia.", en: "A larger Ug indicates a state at higher level within the same reference." } }\r
    coherence_rules:\r
    - { id: ug_coherence, when: "true", status: ok, text: { es: "Ug debe leerse junto con m, g y h del mismo escenario.", en: "Ug must be read with m, g and h of the same scenario." } }\r
    model_validity_rules:\r
    - { id: ug_validity, when: "true", status: info, text: { es: "Si el campo deja de ser uniforme, revisar validez del modelo local.", en: "If field stops being uniform, review local-model validity." } }\r
    graph_rules:\r
    - { id: ug_graph, when: "true", status: info, text: { es: "En Coord, Ug debe variar linealmente con h para m y g fijas.", en: "In Coord, Ug should vary linearly with h for fixed m and g." } }\r
    likely_errors:\r
    - { id: ug_error, when: "true", status: warning, text: { es: "Error frecuente: cambiar la referencia de altura a mitad de resolucion.", en: "Common mistake: changing height reference mid-solution." } }\r
    next_step_rules:\r
    - { id: ug_next, when: "true", status: info, text: { es: "Decide si el problema pide Ug absoluta o un cambio dUg.", en: "Decide whether the problem asks for absolute Ug or a change dUg." } }\r
  m:\r
    summary_rules:\r
    - { id: m_summary, when: "true", status: info, text: { es: "m escala linealmente Ug y dUg en el mismo modelo.", en: "m linearly scales Ug and dUg in the same model." } }\r
    physical_reading_rules:\r
    - { id: m_reading, when: "true", status: info, text: { es: "A mayor masa, mayor transferencia energetica para igual cambio de altura.", en: "Greater mass means larger energy transfer for equal height change." } }\r
    coherence_rules:\r
    - { id: m_coherence, when: "true", status: ok, text: { es: "m debe permanecer constante entre estado inicial y final del mismo cuerpo.", en: "m must remain constant between initial and final states of the same body." } }\r
    model_validity_rules:\r
    - { id: m_validity, when: "true", status: info, text: { es: "Usar SI evita sesgos de conversion al interpretar resultados.", en: "Using SI prevents conversion bias in interpretation." } }\r
    graph_rules:\r
    - { id: m_graph, when: "true", status: info, text: { es: "m cambia la pendiente de Ug frente a h en la grafica.", en: "m changes Ug versus h slope on the graph." } }\r
    likely_errors:\r
    - { id: m_error, when: "true", status: warning, text: { es: "Error frecuente: introducir masa en gramos sin convertir.", en: "Common mistake: entering mass in grams without conversion." } }\r
    next_step_rules:\r
    - { id: m_next, when: "true", status: info, text: { es: "Comprueba unidad de m antes de cualquier sustitucion.", en: "Check m unit before any substitution." } }\r
  g:\r
    summary_rules:\r
    - { id: g_summary, when: "true", status: info, text: { es: "g fija la intensidad gravitatoria local en el modelo.", en: "g sets local gravitational intensity in the model." } }\r
    physical_reading_rules:\r
    - { id: g_reading, when: "true", status: info, text: { es: "Con mayor g, el mismo ascenso requiere mayor cambio energetico.", en: "With larger g, the same rise requires larger energy change." } }\r
    coherence_rules:\r
    - { id: g_coherence, when: "true", status: ok, text: { es: "g debe mantenerse consistente durante toda la resolucion.", en: "g must remain consistent throughout the solution." } }\r
    model_validity_rules:\r
    - { id: g_validity, when: "true", status: info, text: { es: "Si cambia mucho la altitud, revisar aproximacion de g constante.", en: "If altitude varies strongly, review constant-g approximation." } }\r
    graph_rules:\r
    - { id: g_graph, when: "true", status: info, text: { es: "g tambien escala la pendiente de Ug respecto de h.", en: "g also scales Ug slope with respect to h." } }\r
    likely_errors:\r
    - { id: g_error, when: "true", status: warning, text: { es: "Error frecuente: alternar entre valores de g sin declararlo.", en: "Common mistake: alternating g values without declaration." } }\r
    next_step_rules:\r
    - { id: g_next, when: "true", status: info, text: { es: "Declara g al inicio y mantenla fija salvo justificacion.", en: "Declare g at the start and keep it fixed unless justified." } }\r
  h:\r
    summary_rules:\r
    - { id: h_summary, when: "true", status: info, text: { es: "h representa la coordenada vertical en una referencia concreta.", en: "h represents vertical coordinate in a specific reference." } }\r
    physical_reading_rules:\r
    - { id: h_reading, when: "true", status: info, text: { es: "Solo el cambio de h entre estados tiene significado dinamico directo.", en: "Only h change between states has direct dynamic meaning." } }\r
    coherence_rules:\r
    - { id: h_coherence, when: "true", status: ok, text: { es: "h debe medirse desde el mismo cero para comparar energias.", en: "h must be measured from the same zero to compare energies." } }\r
    model_validity_rules:\r
    - { id: h_validity, when: "true", status: info, text: { es: "Para cambios muy grandes de altura, revisar modelo gravitatorio usado.", en: "For very large height changes, review gravitational model in use." } }\r
    graph_rules:\r
    - { id: h_graph, when: "true", status: info, text: { es: "En Coord, h es el eje horizontal de lectura del estado.", en: "In Coord, h is the horizontal axis for state reading." } }\r
    likely_errors:\r
    - { id: h_error, when: "true", status: warning, text: { es: "Error frecuente: interpretar h como distancia recorrida y no como cota.", en: "Common mistake: interpreting h as traveled distance instead of level." } }\r
    next_step_rules:\r
    - { id: h_next, when: "true", status: info, text: { es: "Fija el cero de h antes de plantear dUg.", en: "Set h zero before setting up dUg." } }\r
  hi:\r
    summary_rules:\r
    - { id: hi_summary, when: "true", status: info, text: { es: "hi define el estado inicial del proceso energetico.", en: "hi defines the initial state of the energy process." } }\r
    physical_reading_rules:\r
    - { id: hi_reading, when: "true", status: info, text: { es: "hi determina el punto de partida para leer el cambio de energia.", en: "hi sets the starting point for reading energy change." } }\r
    coherence_rules:\r
    - { id: hi_coherence, when: "true", status: ok, text: { es: "hi debe compartir referencia con hf para que dUg sea interpretable.", en: "hi must share reference with hf for interpretable dUg." } }\r
    model_validity_rules:\r
    - { id: hi_validity, when: "true", status: info, text: { es: "Cambiar referencia invalida comparaciones directas entre estados.", en: "Changing reference invalidates direct state comparisons." } }\r
    graph_rules:\r
    - { id: hi_graph, when: "true", status: info, text: { es: "En la grafica, hi marca el primer punto de evaluacion.", en: "On the graph, hi marks the first evaluation point." } }\r
    likely_errors:\r
    - { id: hi_error, when: "true", status: warning, text: { es: "Error frecuente: asignar hi sin declarar origen vertical.", en: "Common mistake: assigning hi without declaring vertical origin." } }\r
    next_step_rules:\r
    - { id: hi_next, when: "true", status: info, text: { es: "Compara hi con hf antes de decidir signo de dUg.", en: "Compare hi with hf before deciding dUg sign." } }\r
  hf:\r
    summary_rules:\r
    - { id: hf_summary, when: "true", status: info, text: { es: "hf define el estado final del proceso.", en: "hf defines the final state of the process." } }\r
    physical_reading_rules:\r
    - { id: hf_reading, when: "true", status: info, text: { es: "hf indica si el proceso termina mas alto o mas bajo que al inicio.", en: "hf indicates whether process ends higher or lower than start." } }\r
    coherence_rules:\r
    - { id: hf_coherence, when: "true", status: ok, text: { es: "hf debe compararse con hi en la misma escala de altura.", en: "hf must be compared with hi on the same height scale." } }\r
    model_validity_rules:\r
    - { id: hf_validity, when: "true", status: info, text: { es: "Una hf extrema puede exigir abandonar aproximacion local.", en: "An extreme hf may require leaving local approximation." } }\r
    graph_rules:\r
    - { id: hf_graph, when: "true", status: info, text: { es: "En Coord, hf fija el punto final sobre la recta Ug(h).", en: "In Coord, hf sets the final point on Ug(h) line." } }\r
    likely_errors:\r
    - { id: hf_error, when: "true", status: warning, text: { es: "Error frecuente: leer hf como desplazamiento neto.", en: "Common mistake: reading hf as net displacement." } }\r
    next_step_rules:\r
    - { id: hf_next, when: "true", status: info, text: { es: "Usa hf junto con hi para construir el significado de dUg.", en: "Use hf with hi to build dUg meaning." } }\r
  dUg:\r
    summary_rules:\r
    - { id: dug_summary, when: "true", status: info, text: { es: "dUg cuantifica el cambio de energia entre dos estados.", en: "dUg quantifies energy change between two states." } }\r
    physical_reading_rules:\r
    - { id: dug_reading, when: "true", status: info, text: { es: "dUg positiva implica ganancia de energia potencial al final.", en: "Positive dUg implies potential-energy gain at the end." } }\r
    coherence_rules:\r
    - { id: dug_coherence, when: "true", status: ok, text: { es: "El signo de dUg debe concordar con comparacion hf frente a hi.", en: "dUg sign must agree with hf versus hi comparison." } }\r
    model_validity_rules:\r
    - { id: dug_validity, when: "true", status: info, text: { es: "dUg solo es fiable si m y g se mantienen coherentes.", en: "dUg is reliable only if m and g stay coherent." } }\r
    graph_rules:\r
    - { id: dug_graph, when: "true", status: info, text: { es: "dUg es la diferencia vertical entre dos puntos de la recta Ug(h).", en: "dUg is the vertical difference between two points on Ug(h) line." } }\r
    likely_errors:\r
    - { id: dug_error, when: "true", status: warning, text: { es: "Error frecuente: perder el orden hi y hf en la resta.", en: "Common mistake: losing hi and hf order in subtraction." } }\r
    next_step_rules:\r
    - { id: dug_next, when: "true", status: info, text: { es: "Tras calcular dUg, contrasta con Wg para validar signos.", en: "After computing dUg, contrast with Wg to validate signs." } }\r
  Wg:\r
    summary_rules:\r
    - { id: wg_summary, when: "true", status: info, text: { es: "Wg expresa la energia transferida por gravedad.", en: "Wg expresses energy transferred by gravity." } }\r
    physical_reading_rules:\r
    - { id: wg_reading, when: "true", status: info, text: { es: "Wg cambia de signo segun el cuerpo ascienda o descienda.", en: "Wg changes sign depending on rise or descent." } }\r
    coherence_rules:\r
    - { id: wg_coherence, when: "true", status: ok, text: { es: "En modelo conservativo, Wg debe ser opuesto a dUg.", en: "In conservative model, Wg must be opposite to dUg." } }\r
    model_validity_rules:\r
    - { id: wg_validity, when: "true", status: info, text: { es: "Si hay fuerzas no conservativas relevantes, ampliar balance.", en: "If relevant non-conservative forces exist, expand the balance." } }\r
    graph_rules:\r
    - { id: wg_graph, when: "true", status: info, text: { es: "Wg se interpreta con signo opuesto a salto vertical de Ug.", en: "Wg is interpreted with opposite sign to Ug vertical jump." } }\r
    likely_errors:\r
    - { id: wg_error, when: "true", status: warning, text: { es: "Error frecuente: fijar signo de Wg sin leer el proceso.", en: "Common mistake: fixing Wg sign without reading the process." } }\r
    next_step_rules:\r
    - { id: wg_next, when: "true", status: info, text: { es: "Integra Wg en el balance energetico global del sistema.", en: "Integrate Wg into the system global energy balance." } }\r
`;export{e as default};
