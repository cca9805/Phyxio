const e=`version: 1.0.0
id: formulacion-de-kelvin-planck-interpretacion
leaf_id: formulacion-de-kelvin-planck
nombre:
  es: Interpretacion de Kelvin-Planck
  en: Kelvin-Planck Interpretation
scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: entropia-y-segunda-ley
  parent_id: segunda-ley-de-la-termodinamica
  ruta_relativa: fisica-clasica/termodinamica/entropia-y-segunda-ley/segunda-ley-de-la-termodinamica/formulacion-de-kelvin-planck
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: { summary: Resumen fisico, reading: Lectura del resultado, coherence: Coherencia, validity: Validez del modelo, graph: Lectura grafica, errors: Errores probables, next_step: Siguiente paso }
    en: { summary: Physical summary, reading: Result reading, coherence: Coherence, validity: Model validity, graph: Graph reading, errors: Likely errors, next_step: Next step }
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits: { max_summary_chars: 200, max_warnings: 2, max_suggestions: 2 }
dependencies:
  formulas: [balance_motor_termico, eficiencia_motor, limite_kelvin_planck, eficiencia_carnot_motor, entropia_ciclo_motor]
  magnitudes: [Q_H, Q_C, W, eta, eta_carnot, T_H, T_C, DeltaS_universo, ciclo]
global_context:
  physical_domain: { es: Maquinas termicas ciclicas y segunda ley, en: Cyclic heat engines and the second law }
  axis_convention: { es: Eje horizontal rechazo relativo; eje vertical eficiencia., en: Horizontal axis relative rejection; vertical axis efficiency. }
  standard_assumptions: [Maquina ciclica, focos termicos definidos, trabajo neto util]
  standard_warnings: [No aplicar a procesos no ciclicos sin balance extendido]
output_contract:
  format: structured_text
  include_emojis: true
  max_lines_per_section: 5
  truncate_long_values: true
  decimal_places: 2
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary: { enabled: true, priority: 1, title: { es: Resumen fisico, en: Physical summary } }
  physical_reading: { enabled: true, priority: 2, title: { es: Lectura fisica, en: Physical reading } }
  coherence: { enabled: true, priority: 3, title: { es: Coherencia, en: Coherence } }
  model_validity: { enabled: true, priority: 4, title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { enabled: true, priority: 5, title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { enabled: true, priority: 6, title: { es: Errores probables, en: Likely errors } }
  next_step: { enabled: true, priority: 7, title: { es: Siguiente paso, en: Next step } }
targets:
  eta:
    magnitude_type: eta
    semantic_role: { es: Eficiencia termica real, en: Real thermal efficiency }
    summary_rules:
      - { id: resumen_eta, when: "true", status: info, text: { es: "[[eta]] mide la fraccion de [[Q_H]] que sale como [[W]].", en: "[[eta]] measures the fraction of [[Q_H]] leaving as [[W]]." } }
    physical_reading_rules:
      - { id: lectura_eta, when: eta < 1, status: success, text: { es: "[[eta]] menor que uno respeta la prohibicion de conversion total.", en: "[[eta]] below one respects the prohibition of total conversion." } }
    coherence_rules:
      - { id: coherencia_eta, when: eta >= 0 and eta < 1, status: success, text: { es: "Eficiencia compatible con Kelvin-Planck.", en: "Efficiency compatible with Kelvin-Planck." } }
      - { id: coherencia_eta_imposible, when: eta >= 1, status: error, text: { es: "Eficiencia perfecta o superior: violacion de Kelvin-Planck.", en: "Perfect or greater efficiency: Kelvin-Planck violation." } }
    model_validity_rules:
      - { id: validez_eta, when: "true", status: info, text: { es: "La lectura supone maquina ciclica y trabajo neto.", en: "The reading assumes a cyclic engine and net work." } }
    graph_rules:
      - { id: grafico_eta, when: "true", status: info, text: { es: "En el grafico, [[eta]] cae al aumentar el rechazo relativo [[Q_C]].", en: "On the graph, [[eta]] falls as relative rejection [[Q_C]] increases." } }
    likely_errors:
      - { id: error_eta_porcentaje, when: eta > 1, status: warning, text: { es: "Posible confusion entre fraccion y porcentaje.", en: "Possible confusion between fraction and percentage." } }
    next_step_rules:
      - { id: siguiente_eta, when: "true", status: info, text: { es: "Compara [[eta]] con [[eta_carnot]].", en: "Compare [[eta]] with [[eta_carnot]]." } }
  eta_carnot:
    magnitude_type: eta_carnot
    semantic_role: { es: Limite reversible de eficiencia, en: Reversible efficiency limit }
    summary_rules:
      - { id: resumen_carnot, when: "true", status: info, text: { es: "[[eta_carnot]] es el techo fisico entre [[T_H]] y [[T_C]].", en: "[[eta_carnot]] is the physical ceiling between [[T_H]] and [[T_C]]." } }
    physical_reading_rules:
      - { id: lectura_carnot, when: "true", status: info, text: { es: "No es rendimiento esperado, sino limite reversible.", en: "It is not expected performance, but a reversible limit." } }
    coherence_rules:
      - { id: coherencia_carnot, when: eta <= eta_carnot, status: success, text: { es: "La eficiencia real no supera el limite reversible.", en: "Real efficiency does not exceed the reversible limit." } }
      - { id: coherencia_carnot_error, when: eta > eta_carnot, status: error, text: { es: "[[eta]] supera [[eta_carnot]]: revisar datos.", en: "[[eta]] exceeds [[eta_carnot]]: check data." } }
    model_validity_rules:
      - { id: validez_carnot, when: T_H > T_C and T_C > 0, status: success, text: { es: "Temperaturas absolutas coherentes para Carnot.", en: "Absolute temperatures coherent for Carnot." } }
    graph_rules:
      - { id: grafico_carnot, when: "true", status: info, text: { es: "El limite se lee como una frontera superior.", en: "The limit is read as an upper boundary." } }
    likely_errors:
      - { id: error_carnot_celsius, when: T_H < 100 or T_C < 100, status: warning, text: { es: "Posible uso de Celsius en vez de kelvin.", en: "Possible use of Celsius instead of kelvin." } }
    next_step_rules:
      - { id: siguiente_carnot, when: "true", status: info, text: { es: "Estima el rechazo [[Q_C]] compatible con el balance.", en: "Estimate the rejected [[Q_C]] compatible with the balance." } }
  Q_C:
    magnitude_type: Q_C
    semantic_role: { es: Calor rechazado obligatorio, en: Required rejected heat }
    summary_rules:
      - { id: resumen_qc, when: "true", status: info, text: { es: "[[Q_C]] representa el rechazo que impide conversion total.", en: "[[Q_C]] represents the rejection preventing total conversion." } }
    physical_reading_rules:
      - { id: lectura_qc, when: Q_C > 0, status: success, text: { es: "Rechazo positivo: el ciclo no intenta ser motor perfecto.", en: "Positive rejection: the cycle is not trying to be perfect." } }
    coherence_rules:
      - { id: coherencia_qc, when: Q_C >= 0, status: success, text: { es: "[[Q_C]] no negativo es coherente como magnitud rechazada.", en: "Non-negative [[Q_C]] is coherent as rejected magnitude." } }
    model_validity_rules:
      - { id: validez_qc, when: "true", status: info, text: { es: "La interpretacion supone foco frio disponible.", en: "The interpretation assumes an available cold reservoir." } }
    graph_rules:
      - { id: grafico_qc, when: "true", status: info, text: { es: "Mas [[Q_C]] relativo implica menor [[eta]].", en: "More relative [[Q_C]] implies lower [[eta]]." } }
    likely_errors:
      - { id: error_qc_cero, when: Q_C == 0, status: error, text: { es: "[[Q_C]] nulo con trabajo positivo sugiere motor prohibido.", en: "Zero [[Q_C]] with positive work suggests a forbidden engine." } }
    next_step_rules:
      - { id: siguiente_qc, when: "true", status: info, text: { es: "Calcula [[W]] con el balance de motor.", en: "Calculate [[W]] with the engine balance." } }
  W:
    magnitude_type: W
    semantic_role: { es: Trabajo util producido, en: Useful work produced }
    summary_rules:
      - { id: resumen_w, when: "true", status: info, text: { es: "[[W]] es la salida organizada del motor.", en: "[[W]] is the organized output of the engine." } }
    physical_reading_rules:
      - { id: lectura_w, when: "true", status: info, text: { es: "[[W]] procede de la diferencia entre [[Q_H]] y [[Q_C]].", en: "[[W]] comes from the difference between [[Q_H]] and [[Q_C]]." } }
    coherence_rules:
      - { id: coherencia_w, when: W <= Q_H, status: success, text: { es: "[[W]] no supera el calor absorbido.", en: "[[W]] does not exceed absorbed heat." } }
    model_validity_rules:
      - { id: validez_w, when: "true", status: info, text: { es: "Usar trabajo neto, no trabajo bruto interno.", en: "Use net work, not internal gross work." } }
    graph_rules:
      - { id: grafico_w, when: "true", status: info, text: { es: "El trabajo aumenta cuando disminuye el rechazo permitido.", en: "Work increases as allowed rejection decreases." } }
    likely_errors:
      - { id: error_w_qh, when: W == Q_H, status: warning, text: { es: "Si [[W]] iguala [[Q_H]], revisa [[Q_C]].", en: "If [[W]] equals [[Q_H]], check [[Q_C]]." } }
    next_step_rules:
      - { id: siguiente_w, when: "true", status: info, text: { es: "Convierte [[W]] y [[Q_H]] en [[eta]].", en: "Convert [[W]] and [[Q_H]] into [[eta]]." } }
  Q_H:
    magnitude_type: Q_H
    semantic_role: { es: Calor de entrada, en: Input heat }
    summary_rules:
      - { id: resumen_qh, when: "true", status: info, text: { es: "[[Q_H]] es el recurso termico que alimenta el motor.", en: "[[Q_H]] is the thermal resource feeding the engine." } }
    physical_reading_rules:
      - { id: lectura_qh, when: "true", status: info, text: { es: "Mayor [[Q_H]] no garantiza mayor [[eta]].", en: "Larger [[Q_H]] does not guarantee larger [[eta]]." } }
    coherence_rules:
      - { id: coherencia_qh, when: Q_H > 0, status: success, text: { es: "Entrada termica positiva.", en: "Positive thermal input." } }
    model_validity_rules:
      - { id: validez_qh, when: "true", status: info, text: { es: "La fuente caliente debe estar definida.", en: "The hot source must be defined." } }
    graph_rules:
      - { id: grafico_qh, when: "true", status: info, text: { es: "[[Q_H]] escala los valores absolutos de trabajo.", en: "[[Q_H]] scales absolute work values." } }
    likely_errors:
      - { id: error_qh_w, when: "true", status: warning, text: { es: "No confundas [[Q_H]] con trabajo util.", en: "Do not confuse [[Q_H]] with useful work." } }
    next_step_rules:
      - { id: siguiente_qh, when: "true", status: info, text: { es: "Usa [[Q_H]] como denominador de eficiencia.", en: "Use [[Q_H]] as the efficiency denominator." } }
  T_H:
    magnitude_type: T_H
    semantic_role: { es: Temperatura de fuente caliente, en: Hot-source temperature }
    summary_rules:
      - { id: resumen_th, when: "true", status: info, text: { es: "[[T_H]] fija la fuente superior del motor.", en: "[[T_H]] sets the upper source of the engine." } }
    physical_reading_rules:
      - { id: lectura_th, when: "true", status: info, text: { es: "Mayor [[T_H]] eleva el limite reversible.", en: "Higher [[T_H]] raises the reversible limit." } }
    coherence_rules:
      - { id: coherencia_th, when: T_H > T_C, status: success, text: { es: "Foco caliente por encima del frio.", en: "Hot reservoir above cold reservoir." } }
    model_validity_rules:
      - { id: validez_th, when: T_H > 0, status: success, text: { es: "Temperatura absoluta positiva.", en: "Positive absolute temperature." } }
    graph_rules:
      - { id: grafico_th, when: "true", status: info, text: { es: "[[T_H]] desplaza el limite de Carnot.", en: "[[T_H]] shifts the Carnot limit." } }
    likely_errors:
      - { id: error_th_celsius, when: T_H < 100, status: warning, text: { es: "Posible temperatura en Celsius.", en: "Possible Celsius temperature." } }
    next_step_rules:
      - { id: siguiente_th, when: "true", status: info, text: { es: "Compara [[T_H]] con [[T_C]].", en: "Compare [[T_H]] with [[T_C]]." } }
  T_C:
    magnitude_type: T_C
    semantic_role: { es: Temperatura de foco frio, en: Cold-reservoir temperature }
    summary_rules:
      - { id: resumen_tc, when: "true", status: info, text: { es: "[[T_C]] marca el sumidero que recibe [[Q_C]].", en: "[[T_C]] marks the sink receiving [[Q_C]]." } }
    physical_reading_rules:
      - { id: lectura_tc, when: "true", status: info, text: { es: "Menor [[T_C]] aumenta el limite, pero no permite eficiencia perfecta real.", en: "Lower [[T_C]] raises the limit, but does not allow real perfect efficiency." } }
    coherence_rules:
      - { id: coherencia_tc, when: T_C > 0, status: success, text: { es: "Foco frio con temperatura absoluta positiva.", en: "Cold reservoir with positive absolute temperature." } }
    model_validity_rules:
      - { id: validez_tc, when: T_H > T_C, status: success, text: { es: "Hay gradiente termico motor.", en: "There is an engine thermal gradient." } }
    graph_rules:
      - { id: grafico_tc, when: "true", status: info, text: { es: "[[T_C]] aparece en el techo de Carnot.", en: "[[T_C]] appears in the Carnot ceiling." } }
    likely_errors:
      - { id: error_tc_cero, when: T_C <= 0, status: error, text: { es: "[[T_C]] no puede ser cero o negativa en el modelo clasico.", en: "[[T_C]] cannot be zero or negative in the classical model." } }
    next_step_rules:
      - { id: siguiente_tc, when: "true", status: info, text: { es: "Usa kelvin antes de evaluar Carnot.", en: "Use kelvin before evaluating Carnot." } }
  DeltaS_universo:
    magnitude_type: DeltaS_universo
    semantic_role: { es: Diagnostico entrópico, en: Entropic diagnosis }
    summary_rules:
      - { id: resumen_ds, when: "true", status: info, text: { es: "[[DeltaS_universo]] comprueba la segunda ley.", en: "[[DeltaS_universo]] checks the second law." } }
    physical_reading_rules:
      - { id: lectura_ds, when: DeltaS_universo >= 0, status: success, text: { es: "Entropia total no negativa.", en: "Non-negative total entropy." } }
    coherence_rules:
      - { id: coherencia_ds, when: DeltaS_universo >= 0, status: success, text: { es: "Proceso compatible con segunda ley.", en: "Process compatible with the second law." } }
    model_validity_rules:
      - { id: validez_ds, when: "true", status: info, text: { es: "Requiere incluir motor y focos.", en: "Requires including engine and reservoirs." } }
    graph_rules:
      - { id: grafico_ds, when: "true", status: info, text: { es: "La zona prohibida corresponde a entropia total negativa.", en: "The forbidden zone corresponds to negative total entropy." } }
    likely_errors:
      - { id: error_ds, when: DeltaS_universo < 0, status: error, text: { es: "Entropia total negativa: imposible.", en: "Negative total entropy: impossible." } }
    next_step_rules:
      - { id: siguiente_ds, when: "true", status: info, text: { es: "Revisa el rechazo [[Q_C]] y las temperaturas.", en: "Check rejected [[Q_C]] and temperatures." } }
  ciclo:
    magnitude_type: ciclo
    semantic_role: { es: Condicion ciclica, en: Cyclic condition }
    summary_rules:
      - { id: resumen_ciclo, when: "true", status: info, text: { es: "[[ciclo]] significa retorno al estado inicial.", en: "[[cycle]] means return to the initial state." } }
    physical_reading_rules:
      - { id: lectura_ciclo, when: "true", status: info, text: { es: "Sin [[ciclo]], Kelvin-Planck no se aplica de forma directa.", en: "Without a [[cycle]], Kelvin-Planck does not apply directly." } }
    coherence_rules:
      - { id: coherencia_ciclo, when: "true", status: success, text: { es: "La condicion ciclica permite balance cerrado.", en: "The cyclic condition allows a closed balance." } }
    model_validity_rules:
      - { id: validez_ciclo, when: "true", status: info, text: { es: "Verifica que no hay cambio neto de energia interna.", en: "Verify no net internal-energy change." } }
    graph_rules:
      - { id: grafico_ciclo, when: "true", status: info, text: { es: "El grafico representa resultados por ciclo.", en: "The graph represents per-cycle results." } }
    likely_errors:
      - { id: error_ciclo, when: "true", status: warning, text: { es: "Error comun: aplicar el enunciado a un proceso no ciclico.", en: "Common error: applying the statement to a non-cyclic process." } }
    next_step_rules:
      - { id: siguiente_ciclo, when: "true", status: info, text: { es: "Si no hay ciclo, usa un modelo de proceso abierto.", en: "If there is no cycle, use an open-process model." } }
`;export{e as default};
