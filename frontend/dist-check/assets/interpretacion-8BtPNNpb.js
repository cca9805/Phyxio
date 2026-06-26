const e=`version: 5\r
id: ley-de-gravitacion-universal-interp\r
leaf_id: ley-de-gravitacion-universal\r
scope: local\r
nombre:\r
  es: Lectura de ley de gravitacion universal\r
  en: Universal gravitation law reading\r
\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
\r
result_blocks:\r
  summary:\r
    title: { es: Resumen fisico, en: Physical summary }\r
  physical_reading:\r
    title: { es: Lectura fisica, en: Physical reading }\r
  coherence:\r
    title: { es: Coherencia de datos, en: Data coherence }\r
  model_validity:\r
    title: { es: Validez del modelo, en: Model validity }\r
  graph_reading:\r
    title: { es: Lectura del grafico, en: Graph reading }\r
  likely_errors:\r
    title: { es: Errores probables, en: Likely errors }\r
  next_step:\r
    title: { es: Siguiente paso, en: Next step }\r
\r
dependencies:\r
  requires_magnitudes: true\r
  requires_formulas: true\r
  supports_graph_binding: true\r
  magnitudes: [ F, G, m1, m2, r, M, m, g, P, a, R, F1, F2, r1, r2 ]\r
  formulas: [ ley_newton_gravitacion, campo_gravitatorio, peso_desde_campo, aceleracion_gravitatoria, variacion_inversa_cuadrado, forma_vectorial_conceptual, superposicion_conceptual ]\r
\r
targets:\r
  F:\r
    summary_rules:\r
    - id: f-summary\r
      when: F > 0\r
      status: success\r
      text:\r
        es: La fuerza gravitatoria tiene magnitud positiva y representa interaccion atractiva en modulo.\r
        en: Gravitational force has positive magnitude and represents attractive interaction in modulus.\r
    physical_reading_rules:\r
    - id: f-reading\r
      when: r > 0\r
      status: info\r
      text:\r
        es: Si la distancia radial aumenta, la fuerza disminuye con ley inversa cuadratica.\r
        en: If radial distance increases, force decreases under inverse-square law.\r
    coherence_rules:\r
    - id: f-coh\r
      when: G > 0 and m1 > 0 and m2 > 0 and r > 0\r
      status: success\r
      text:\r
        es: Parametros base coherentes para aplicar ley de Newton gravitatoria.\r
        en: Base parameters are coherent for applying Newton gravitational law.\r
    model_validity_rules:\r
    - id: f-validity\r
      when: r > 0\r
      status: success\r
      text:\r
        es: Valido para masas puntuales o simetria esferica equivalente en regimen clasico.\r
        en: Valid for point masses or equivalent spherical symmetry in classical regime.\r
    graph_rules:\r
    - id: f-graph\r
      when: F > 0\r
      status: info\r
      text:\r
        es: En el grafico Coord, la curva F(r) cae con pendiente alta en radios pequenos.\r
        en: In the Coord graph, F(r) drops steeply at small radii.\r
    likely_errors:\r
    - id: f-linear-error\r
      when: F2 == F1 / 2 and r2 == 2 * r1\r
      status: error\r
      text:\r
        es: "Error conceptual probable: tratar la ley como inversa lineal en lugar de inversa cuadratica."\r
        en: "Likely conceptual error: treating the law as inverse-linear instead of inverse-square."\r
    next_step_rules:\r
    - id: f-next\r
      when: F > 0\r
      status: info\r
      text:\r
        es: Comparar dos estados radiales para estimar cambio de fuerza sin recalculo completo.\r
        en: Compare two radial states to estimate force change without full recomputation.\r
\r
  F2:\r
    summary_rules:\r
    - id: f2-summary\r
      when: F2 > 0\r
      status: success\r
      text:\r
        es: La fuerza final permite evaluar impacto del cambio de distancia.\r
        en: Final force enables evaluation of distance-change impact.\r
    physical_reading_rules:\r
    - id: f2-reading\r
      when: r2 > r1\r
      status: info\r
      text:\r
        es: Si el estado final esta mas lejos, la fuerza final debe ser menor.\r
        en: If final state is farther away, final force should be lower.\r
    coherence_rules:\r
    - id: f2-coh\r
      when: F2 == F1 * (r1 / r2)^2\r
      status: success\r
      text:\r
        es: Coherencia confirmada con la relacion de variacion inversa cuadratica.\r
        en: Coherence confirmed with inverse-square variation relation.\r
    model_validity_rules:\r
    - id: f2-validity\r
      when: r1 > 0 and r2 > 0\r
      status: success\r
      text:\r
        es: Valido cuando las masas del sistema se mantienen constantes entre estados.\r
        en: Valid when system masses stay constant across states.\r
    graph_rules:\r
    - id: f2-graph\r
      when: r1 > 0 and r2 > 0\r
      status: info\r
      text:\r
        es: Puede leerse como cambio vertical entre dos puntos de la misma curva F(r).\r
        en: It can be read as vertical change between two points on the same F(r) curve.\r
    likely_errors:\r
    - id: f2-mass-change\r
      when: m1 <= 0 or m2 <= 0\r
      status: error\r
      text:\r
        es: "Error de planteamiento: masas no fisicas invalidan comparacion de estados."\r
        en: "Setup error: nonphysical masses invalidate state comparison."\r
    next_step_rules:\r
    - id: f2-next\r
      when: F2 > 0\r
      status: info\r
      text:\r
        es: Usar la razon F2/F1 para verificar sensibilidad de diseno orbital.\r
        en: Use F2/F1 ratio to verify orbital-design sensitivity.\r
\r
  g:\r
    summary_rules:\r
    - id: g-summary\r
      when: g > 0\r
      status: success\r
      text:\r
        es: El campo gravitatorio local es coherente y no negativo en modulo.\r
        en: Local gravitational field is coherent and nonnegative in magnitude.\r
    physical_reading_rules:\r
    - id: g-reading\r
      when: r > 0\r
      status: info\r
      text:\r
        es: El campo disminuye al aumentar la distancia respecto de la masa fuente.\r
        en: Field decreases as distance from source mass increases.\r
    coherence_rules:\r
    - id: g-coh\r
      when: G > 0 and M > 0 and r > 0\r
      status: success\r
      text:\r
        es: Coherencia entre constante, masa fuente y geometria radial.\r
        en: Coherence among constant, source mass, and radial geometry.\r
    model_validity_rules:\r
    - id: g-validity\r
      when: r >= R\r
      status: success\r
      text:\r
        es: Lectura valida para condiciones externas o superficiales de la fuente.\r
        en: Reading is valid for external or surface conditions of the source.\r
    graph_rules:\r
    - id: g-graph\r
      when: g > 0\r
      status: info\r
      text:\r
        es: La pendiente de g(r) indica sensibilidad alta en radios pequenos.\r
        en: Slope of g(r) indicates high sensitivity at small radii.\r
    likely_errors:\r
    - id: g-constant-everywhere\r
      when: g == g\r
      status: warning\r
      text:\r
        es: Revisar supuesto de g constante; fuera de rango local puede ser incorrecto.\r
        en: Recheck constant-g assumption; outside local range it can be wrong.\r
    next_step_rules:\r
    - id: g-next\r
      when: g > 0\r
      status: info\r
      text:\r
        es: Convertir campo en peso o aceleracion segun variable objetivo.\r
        en: Convert field into weight or acceleration depending on target variable.\r
\r
  P:\r
    summary_rules:\r
    - id: p-summary\r
      when: P > 0\r
      status: success\r
      text:\r
        es: El peso resume la respuesta gravitatoria de una masa de prueba local.\r
        en: Weight summarizes local gravitational response of a test mass.\r
    physical_reading_rules:\r
    - id: p-reading\r
      when: m > 0 and g > 0\r
      status: info\r
      text:\r
        es: Si m se mantiene y g cambia, el peso cambia linealmente con g.\r
        en: If m is fixed and g changes, weight changes linearly with g.\r
    coherence_rules:\r
    - id: p-coh\r
      when: P == m * g\r
      status: success\r
      text:\r
        es: Coherencia completa entre masa, campo y fuerza peso.\r
        en: Full coherence among mass, field, and weight force.\r
    model_validity_rules:\r
    - id: p-validity\r
      when: m > 0\r
      status: success\r
      text:\r
        es: Valido para masa de prueba definida en un campo local conocido.\r
        en: Valid for a defined test mass in a known local field.\r
    graph_rules:\r
    - id: p-graph\r
      when: g > 0\r
      status: info\r
      text:\r
        es: Una lectura de g(r) permite inferir tendencia de P para masa fija.\r
        en: Reading g(r) allows inference of P trend for fixed mass.\r
    likely_errors:\r
    - id: p-mass-confusion\r
      when: P == m\r
      status: error\r
      text:\r
        es: "Error conceptual: confundir peso con masa rompe interpretacion fisica."\r
        en: "Conceptual error: confusing weight with mass breaks physical interpretation."\r
    next_step_rules:\r
    - id: p-next\r
      when: P > 0\r
      status: info\r
      text:\r
        es: Contrastar peso entre dos radios para evaluar efecto de altitud.\r
        en: Compare weight across two radii to evaluate altitude effect.\r
\r
  a:\r
    summary_rules:\r
    - id: a-summary\r
      when: a > 0\r
      status: success\r
      text:\r
        es: La aceleracion gravitatoria es consistente con el campo local.\r
        en: Gravitational acceleration is consistent with local field.\r
    physical_reading_rules:\r
    - id: a-reading\r
      when: r > 0\r
      status: info\r
      text:\r
        es: A mayor distancia radial, menor aceleracion en modulo.\r
        en: Greater radial distance implies lower acceleration magnitude.\r
    coherence_rules:\r
    - id: a-coh\r
      when: a == (G * M) / (r^2)\r
      status: success\r
      text:\r
        es: Coherencia con formula radial de aceleracion gravitatoria.\r
        en: Coherence with radial gravitational-acceleration formula.\r
    model_validity_rules:\r
    - id: a-validity\r
      when: M > 0 and r > 0\r
      status: success\r
      text:\r
        es: Valido cuando domina la gravedad de una fuente principal.\r
        en: Valid when gravity of one dominant source prevails.\r
    graph_rules:\r
    - id: a-graph\r
      when: a > 0\r
      status: info\r
      text:\r
        es: La lectura visual de la curva permite anticipar cambios dinamicos.\r
        en: Visual curve reading helps anticipate dynamic changes.\r
    likely_errors:\r
    - id: a-constant-error\r
      when: a == g and r > R\r
      status: warning\r
      text:\r
        es: Revisar si se asumio aceleracion constante fuera de condicion local.\r
        en: Check whether constant acceleration was assumed outside local conditions.\r
    next_step_rules:\r
    - id: a-next\r
      when: a > 0\r
      status: info\r
      text:\r
        es: Integrar esta lectura con problemas de trayectoria u orbita.\r
        en: Integrate this reading with trajectory or orbit problems.\r
\r
  F1:\r
    summary_rules:\r
    - id: f1-summary\r
      when: F1 > 0\r
      status: info\r
      text:\r
        es: F1 define el estado inicial para comparacion de fuerza.\r
        en: F1 defines the initial state for force comparison.\r
    physical_reading_rules:\r
    - id: f1-reading\r
      when: F1 > 0\r
      status: info\r
      text:\r
        es: Su lectura solo tiene sentido junto con r1 y F2.\r
        en: Its reading is meaningful only with r1 and F2.\r
    coherence_rules:\r
    - id: f1-coh\r
      when: F1 > 0 and r1 > 0\r
      status: success\r
      text:\r
        es: Estado inicial coherente para analisis comparativo.\r
        en: Initial state is coherent for comparative analysis.\r
    model_validity_rules:\r
    - id: f1-valid\r
      when: F1 > 0\r
      status: success\r
      text:\r
        es: Valido en regimen clasico con masa y distancia bien definidas.\r
        en: Valid in classical regime with defined mass and distance.\r
    graph_rules:\r
    - id: f1-graph\r
      when: F1 > 0\r
      status: info\r
      text:\r
        es: Corresponde a un punto inicial sobre la curva F(r).\r
        en: It corresponds to an initial point on the F(r) curve.\r
    likely_errors:\r
    - id: f1-error\r
      when: F1 <= 0\r
      status: warning\r
      text:\r
        es: Revisar datos iniciales si F1 no resulta positiva en modulo.\r
        en: Recheck initial data if F1 is not positive in magnitude.\r
    next_step_rules:\r
    - id: f1-next\r
      when: F1 > 0\r
      status: info\r
      text:\r
        es: Usar F1 como referencia para estimar F2.\r
        en: Use F1 as reference to estimate F2.\r
\r
  M:\r
    summary_rules:\r
    - id: M-summary\r
      when: M > 0\r
      status: success\r
      text:\r
        es: M representa la masa fuente del campo gravitatorio.\r
        en: M represents the source mass of the gravitational field.\r
    physical_reading_rules:\r
    - id: M-reading\r
      when: M > 0\r
      status: info\r
      text:\r
        es: A mayor M, mayor intensidad de campo y aceleracion para igual r.\r
        en: Higher M implies stronger field and acceleration at equal r.\r
    coherence_rules:\r
    - id: M-coh\r
      when: M > 0 and G > 0\r
      status: success\r
      text:\r
        es: Fuente y constante coherentes para lectura de campo.\r
        en: Source and constant are coherent for field reading.\r
    model_validity_rules:\r
    - id: M-valid\r
      when: M > 0\r
      status: success\r
      text:\r
        es: Valido cuando la fuente domina la interaccion local.\r
        en: Valid when source mass dominates local interaction.\r
    graph_rules:\r
    - id: M-graph\r
      when: M > 0\r
      status: info\r
      text:\r
        es: Cambia escala vertical de la curva de fuerza.\r
        en: It changes vertical scale of the force curve.\r
    likely_errors:\r
    - id: M-error\r
      when: M <= 0\r
      status: error\r
      text:\r
        es: Masa fuente no positiva invalida el modelo del leaf.\r
        en: Nonpositive source mass invalidates the leaf model.\r
    next_step_rules:\r
    - id: M-next\r
      when: M > 0\r
      status: info\r
      text:\r
        es: Contrastar efectos de M y r sobre g y a.\r
        en: Contrast effects of M and r on g and a.\r
\r
  m:\r
    summary_rules:\r
    - id: m-summary\r
      when: m > 0\r
      status: success\r
      text:\r
        es: m es masa de prueba para lectura de peso.\r
        en: m is the test mass for weight reading.\r
    physical_reading_rules:\r
    - id: m-reading\r
      when: m > 0\r
      status: info\r
      text:\r
        es: Si g se mantiene, P escala linealmente con m.\r
        en: If g is fixed, P scales linearly with m.\r
    coherence_rules:\r
    - id: m-coh\r
      when: m > 0 and P > 0\r
      status: success\r
      text:\r
        es: Masa y peso son coherentes bajo P = m*g.\r
        en: Mass and weight are coherent under P = m*g.\r
    model_validity_rules:\r
    - id: m-valid\r
      when: m > 0\r
      status: success\r
      text:\r
        es: Valido para masa de prueba positiva definida.\r
        en: Valid for a defined positive test mass.\r
    graph_rules:\r
    - id: m-graph\r
      when: m > 0\r
      status: info\r
      text:\r
        es: No cambia forma de F(r), cambia escala de P.\r
        en: It does not change F(r) shape, it changes P scale.\r
    likely_errors:\r
    - id: m-error\r
      when: m <= 0\r
      status: error\r
      text:\r
        es: Masa de prueba no positiva no tiene lectura fisica valida.\r
        en: Nonpositive test mass has no valid physical reading.\r
    next_step_rules:\r
    - id: m-next\r
      when: m > 0\r
      status: info\r
      text:\r
        es: Evaluar peso en dos radios para comparar entorno gravitatorio.\r
        en: Evaluate weight at two radii to compare gravitational environment.\r
\r
  m1:\r
    summary_rules:\r
    - id: m1-summary\r
      when: m1 > 0\r
      status: success\r
      text:\r
        es: m1 participa linealmente en la fuerza de interaccion.\r
        en: m1 participates linearly in interaction force.\r
    physical_reading_rules:\r
    - id: m1-reading\r
      when: m1 > 0\r
      status: info\r
      text:\r
        es: Si m1 aumenta y r no cambia, F aumenta proporcionalmente.\r
        en: If m1 increases with fixed r, F increases proportionally.\r
    coherence_rules:\r
    - id: m1-coh\r
      when: m1 > 0 and m2 > 0\r
      status: success\r
      text:\r
        es: Par de masas coherente para aplicar ley de Newton.\r
        en: Mass pair is coherent for Newton law application.\r
    model_validity_rules:\r
    - id: m1-valid\r
      when: m1 > 0\r
      status: success\r
      text:\r
        es: Valido en formulacion de dos cuerpos del leaf.\r
        en: Valid in the two-body formulation of the leaf.\r
    graph_rules:\r
    - id: m1-graph\r
      when: m1 > 0\r
      status: info\r
      text:\r
        es: Incrementa amplitud de la curva F(r).\r
        en: It increases amplitude of the F(r) curve.\r
    likely_errors:\r
    - id: m1-error\r
      when: m1 <= 0\r
      status: error\r
      text:\r
        es: m1 debe ser positiva para mantener coherencia fisica.\r
        en: m1 must be positive to keep physical coherence.\r
    next_step_rules:\r
    - id: m1-next\r
      when: m1 > 0\r
      status: info\r
      text:\r
        es: Analizar sensibilidad de F frente a cambios de m1.\r
        en: Analyze F sensitivity to changes in m1.\r
\r
  m2:\r
    summary_rules:\r
    - id: m2-summary\r
      when: m2 > 0\r
      status: success\r
      text:\r
        es: m2 completa el producto de masas en la ley principal.\r
        en: m2 completes the mass product in the main law.\r
    physical_reading_rules:\r
    - id: m2-reading\r
      when: m2 > 0\r
      status: info\r
      text:\r
        es: Para r fijo, variar m2 cambia linealmente la fuerza.\r
        en: For fixed r, changing m2 linearly changes force.\r
    coherence_rules:\r
    - id: m2-coh\r
      when: m2 > 0 and m1 > 0\r
      status: success\r
      text:\r
        es: Coherencia de masas para aplicacion directa de la ley.\r
        en: Mass coherence for direct law application.\r
    model_validity_rules:\r
    - id: m2-valid\r
      when: m2 > 0\r
      status: success\r
      text:\r
        es: Valido en interaccion gravitatoria de dos masas puntuales.\r
        en: Valid in two-point-mass gravitational interaction.\r
    graph_rules:\r
    - id: m2-graph\r
      when: m2 > 0\r
      status: info\r
      text:\r
        es: Ajusta escala vertical sin cambiar forma radial.\r
        en: Adjusts vertical scale without changing radial shape.\r
    likely_errors:\r
    - id: m2-error\r
      when: m2 <= 0\r
      status: error\r
      text:\r
        es: m2 no positiva invalida lectura de fuerza newtoniana.\r
        en: Nonpositive m2 invalidates Newtonian-force reading.\r
    next_step_rules:\r
    - id: m2-next\r
      when: m2 > 0\r
      status: info\r
      text:\r
        es: Comparar impacto relativo de m2 frente a variacion de r.\r
        en: Compare relative impact of m2 against variation in r.\r
\r
  r:\r
    summary_rules:\r
    - id: r-summary\r
      when: r > 0\r
      status: success\r
      text:\r
        es: r es la variable espacial dominante del leaf.\r
        en: r is the dominant spatial variable of the leaf.\r
    physical_reading_rules:\r
    - id: r-reading\r
      when: r > 0\r
      status: info\r
      text:\r
        es: Cambios en r modifican intensidad con sensibilidad cuadratica.\r
        en: Changes in r modify intensity with quadratic sensitivity.\r
    coherence_rules:\r
    - id: r-coh\r
      when: r > 0\r
      status: success\r
      text:\r
        es: Distancia radial positiva coherente con el modelo.\r
        en: Positive radial distance is coherent with the model.\r
    model_validity_rules:\r
    - id: r-valid\r
      when: r >= R\r
      status: success\r
      text:\r
        es: Lectura valida para puntos externos a la fuente.\r
        en: Reading is valid for points external to the source.\r
    graph_rules:\r
    - id: r-graph\r
      when: r > 0\r
      status: info\r
      text:\r
        es: Es el eje horizontal que gobierna toda la curva Coord.\r
        en: It is the horizontal axis governing the full Coord curve.\r
    likely_errors:\r
    - id: r-error\r
      when: r <= 0\r
      status: error\r
      text:\r
        es: Distancia no positiva rompe el dominio de la ley.\r
        en: Nonpositive distance breaks the law domain.\r
    next_step_rules:\r
    - id: r-next\r
      when: r > 0\r
      status: info\r
      text:\r
        es: Evaluar como pequenas variaciones de r cambian F y g.\r
        en: Evaluate how small r variations change F and g.\r
\r
  r2:\r
    summary_rules:\r
    - id: r2-summary\r
      when: r2 > 0\r
      status: success\r
      text:\r
        es: r2 define el estado radial final de comparacion.\r
        en: r2 defines the final radial comparison state.\r
    physical_reading_rules:\r
    - id: r2-reading\r
      when: r2 > r1\r
      status: info\r
      text:\r
        es: Un r2 mayor implica reduccion de F2 respecto de F1.\r
        en: A larger r2 implies reduction of F2 relative to F1.\r
    coherence_rules:\r
    - id: r2-coh\r
      when: r2 > 0 and r1 > 0\r
      status: success\r
      text:\r
        es: Par de radios coherente para comparar estados.\r
        en: Radius pair is coherent for state comparison.\r
    model_validity_rules:\r
    - id: r2-valid\r
      when: r2 > 0\r
      status: success\r
      text:\r
        es: Valido en problemas de variacion radial del leaf.\r
        en: Valid in radial-variation problems of this leaf.\r
    graph_rules:\r
    - id: r2-graph\r
      when: r2 > 0\r
      status: info\r
      text:\r
        es: Representa punto final sobre eje radial del grafico.\r
        en: It represents the final point on the graph radial axis.\r
    likely_errors:\r
    - id: r2-error\r
      when: r2 <= 0\r
      status: error\r
      text:\r
        es: r2 no positiva invalida la comparacion fisica.\r
        en: Nonpositive r2 invalidates physical comparison.\r
    next_step_rules:\r
    - id: r2-next\r
      when: r2 > 0\r
      status: info\r
      text:\r
        es: Usar r2 con r1 para evaluar razon de cambio de fuerza.\r
        en: Use r2 with r1 to evaluate force-change ratio.\r
`;export{e as default};
