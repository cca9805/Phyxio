const e=`version: 2\r
id: interpretacion-ecuacion-movimiento\r
leaf_id: ecuacion-movimiento\r
nombre:\r
  es: Interpretacion de ecuacion de movimiento en MHS\r
  en: Interpretation of SHM equation of motion\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: oscilaciones\r
  parent_id: mhs\r
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/mhs/ecuacion-movimiento\r
dependencies:\r
  formulas: [ posicion_mhs, velocidad_mhs, aceleracion_mhs, ecuacion_diferencial_mhs ]\r
  magnitudes: [ x, A, omega, phi, t, v, a, x_dd ]\r
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
    title: { es: Resumen fisico, en: Physical summary }\r
  physical_reading:\r
    title: { es: Lectura causal, en: Causal reading }\r
  coherence:\r
    title: { es: Coherencia del resultado, en: Result coherence }\r
  model_validity:\r
    title: { es: Validez del modelo, en: Model validity }\r
  graph_reading:\r
    title: { es: Lectura grafica, en: Graph reading }\r
  likely_errors:\r
    title: { es: Errores probables, en: Likely errors }\r
  next_step:\r
    title: { es: Siguiente decision, en: Next decision }\r
\r
targets:\r
  x:\r
    summary_rules:\r
    - id: x_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[x]] representa el estado oscilatorio respecto al equilibrio.", en: "[[x]] represents oscillatory state relative to equilibrium." }\r
    physical_reading_rules:\r
    - id: x_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Su evolucion depende de [[A]], [[omega]], [[phi]] y [[t]] mediante la ley de posicion.", en: "Its evolution depends on [[A]], [[omega]], [[phi]], and [[t]] through the position law." }\r
    coherence_rules:\r
    - id: x_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "Debe ser coherente con {{ f:posicion_mhs }} y con amplitud acotada por [[A]].", en: "It must be coherent with {{ f:posicion_mhs }} and remain bounded by [[A]]." }\r
    model_validity_rules:\r
    - id: x_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Valido en oscilador lineal ideal sin perdidas dominantes.", en: "Valid for ideal linear oscillator without dominant losses." }\r
    graph_rules:\r
    - id: x_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la grafica Coord, [[x]] debe verse periodica y centrada en equilibrio.", en: "In the Coord graph, [[x]] should appear periodic and centered around equilibrium." }\r
    likely_errors:\r
    - id: x_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: confundir desplazamiento con distancia recorrida total.", en: "Common error: confusing displacement with total traveled distance." }\r
    next_step_rules:\r
    - id: x_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Comparar con [[v]] y [[a]] para cerrar lectura dinamica completa.", en: "Compare with [[v]] and [[a]] to complete the dynamic reading." }\r
\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[v]] expresa tasa de cambio instantanea de [[x]].", en: "[[v]] expresses instantaneous rate of change of [[x]]." }\r
    physical_reading_rules:\r
    - id: v_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Su valor esta en cuadratura temporal con [[x]], segun {{ f:velocidad_mhs }}.", en: "Its value is in temporal quadrature with [[x]], according to {{ f:velocidad_mhs }}." }\r
    coherence_rules:\r
    - id: v_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "Debe acotarse por el producto de escala entre [[A]] y [[omega]].", en: "It should remain bounded by the scale product of [[A]] and [[omega]]." }\r
    model_validity_rules:\r
    - id: v_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Interpretacion robusta cuando parametros son constantes en la ventana temporal.", en: "Interpretation is robust when parameters stay constant within the time window." }\r
    graph_rules:\r
    - id: v_graph\r
      when: "true"\r
      status: info\r
      text: { es: "[[v]] cambia de signo al pasar por extremos de [[x]].", en: "[[v]] changes sign at turning points of [[x]]." }\r
    likely_errors:\r
    - id: v_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: ubicar maxima [[v]] en la misma fase que maxima [[x]].", en: "Common error: placing maximum [[v]] at the same phase as maximum [[x]]." }\r
    next_step_rules:\r
    - id: v_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Combinar con [[a]] para analizar estabilidad local y retorno.", en: "Combine with [[a]] to analyze local stability and restoring behavior." }\r
\r
  a:\r
    summary_rules:\r
    - id: a_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[a]] refleja curvatura temporal y tendencia restauradora.", en: "[[a]] reflects temporal curvature and restoring tendency." }\r
    physical_reading_rules:\r
    - id: a_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Por {{ f:aceleracion_mhs }}, [[a]] es opuesta a [[x]] en MHS ideal.", en: "By {{ f:aceleracion_mhs }}, [[a]] is opposite to [[x]] in ideal SHM." }\r
    coherence_rules:\r
    - id: a_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "El producto [[a]] por [[x]] debe mantener signo no positivo en lectura ideal.", en: "The product [[a]] by [[x]] should keep a non-positive sign in ideal reading." }\r
    model_validity_rules:\r
    - id: a_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Valido para fuerza restauradora lineal y amplitudes dentro de region elastica.", en: "Valid for linear restoring force and amplitudes within elastic range." }\r
    graph_rules:\r
    - id: a_graph\r
      when: "true"\r
      status: info\r
      text: { es: "[[a]] se anula cerca del equilibrio y crece en extremos de [[x]].", en: "[[a]] is near zero around equilibrium and grows near extremes of [[x]]." }\r
    likely_errors:\r
    - id: a_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: interpretar [[a]] como independiente de [[x]].", en: "Common error: interpreting [[a]] as independent of [[x]]." }\r
    next_step_rules:\r
    - id: a_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usar [[a]] para validar coherencia dinamica con el modelo diferencial.", en: "Use [[a]] to validate dynamic coherence with the differential model." }\r
\r
  omega:\r
    summary_rules:\r
    - id: omega_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[omega]] fija la escala temporal principal del ciclo.", en: "[[omega]] sets the main time scale of the cycle." }\r
    physical_reading_rules:\r
    - id: omega_phys\r
      when: "true"\r
      status: info\r
      text: { es: "A mayor [[omega]], mayor rapidez de variacion de estado para [[x]], [[v]] y [[a]].", en: "Larger [[omega]] means faster state variation for [[x]], [[v]], and [[a]]." }\r
    coherence_rules:\r
    - id: omega_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "La inferencia de [[omega]] debe ser compatible con {{ f:aceleracion_mhs }} y unidades de tiempo inverso.", en: "Inference of [[omega]] must be compatible with {{ f:aceleracion_mhs }} and inverse-time units." }\r
    model_validity_rules:\r
    - id: omega_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Interpretacion estable cuando el sistema permanece en regime lineal y parametros constantes.", en: "Interpretation is stable when the system remains linear with constant parameters." }\r
    graph_rules:\r
    - id: omega_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Cambios de [[omega]] comprimen o expanden el eje temporal del patron oscilatorio.", en: "Changes in [[omega]] compress or expand the oscillatory pattern along time axis." }\r
    likely_errors:\r
    - id: omega_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: comparar [[omega]] con frecuencia en Hz sin conversion.", en: "Common error: comparing [[omega]] with frequency in Hz without conversion." }\r
    next_step_rules:\r
    - id: omega_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Tras estimar [[omega]], revisar consistencia de fase inicial [[phi]] y amplitud [[A]].", en: "After estimating [[omega]], check consistency of initial phase [[phi]] and amplitude [[A]]." }\r
\r
  x_dd:\r
    summary_rules:\r
    - id: xdd_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[x_dd]] conecta representacion diferencial y lectura fisica de [[a]].", en: "[[x_dd]] links differential representation with physical reading of [[a]]." }\r
    physical_reading_rules:\r
    - id: xdd_phys\r
      when: "true"\r
      status: info\r
      text: { es: "En este leaf, [[x_dd]] coincide semanticamente con [[a]] para interpretar restauracion.", en: "In this leaf, [[x_dd]] is semantically equivalent to [[a]] for restoring interpretation." }\r
    coherence_rules:\r
    - id: xdd_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "Debe alinearse con {{ f:ecuacion_diferencial_mhs }} en forma y unidades.", en: "It must align with {{ f:ecuacion_diferencial_mhs }} in form and units." }\r
    model_validity_rules:\r
    - id: xdd_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Valido cuando derivadas temporales son interpretables en medicion o simulacion.", en: "Valid when time derivatives are interpretable in measurement or simulation." }\r
    graph_rules:\r
    - id: xdd_graph\r
      when: "true"\r
      status: info\r
      text: { es: "La curvatura de [[x]] observada en el grafico respalda lectura de [[x_dd]].", en: "Observed curvature of [[x]] in the graph supports reading of [[x_dd]]." }\r
    likely_errors:\r
    - id: xdd_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: tratar [[x_dd]] como variable independiente de [[x]] y [[omega]].", en: "Common error: treating [[x_dd]] as independent from [[x]] and [[omega]]." }\r
    next_step_rules:\r
    - id: xdd_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usar [[x_dd]] para enlazar ecuacion diferencial con criterio experimental.", en: "Use [[x_dd]] to connect differential equation with experimental criteria." }\r
`;export{e as default};
