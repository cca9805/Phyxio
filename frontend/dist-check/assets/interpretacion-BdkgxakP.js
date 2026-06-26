const e=`version: 2\r
id: interpretacion-coordenadas-generalizadas\r
leaf_id: coordenadas-generalizadas\r
nombre:\r
  es: Interpretación de coordenadas generalizadas\r
  en: Generalized coordinates interpretation\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: mecanica-analitica\r
  parent_id: mecanica-analitica\r
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/coordenadas-generalizadas\r
dependencies:\r
  formulas: [ ligadura_holonomica, conteo_grados_libertad, desplazamiento_virtual_admisible, multiplicadores_lagrange ]\r
  magnitudes: [ phi, q, t, Nq, C, f, delta_q, lambda, L, qdot, x, y, r, theta, n ]\r
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
    title: { es: Resumen físico, en: Physical summary }\r
  physical_reading:\r
    title: { es: Lectura causal, en: Causal reading }\r
  coherence:\r
    title: { es: Coherencia del resultado, en: Result coherence }\r
  model_validity:\r
    title: { es: Validez del modelo, en: Model validity }\r
  graph_reading:\r
    title: { es: Lectura gráfica, en: Graph reading }\r
  likely_errors:\r
    title: { es: Errores probables, en: Likely errors }\r
  next_step:\r
    title: { es: Siguiente decisión, en: Next decision }\r
\r
targets:\r
  x:\r
    summary_rules:\r
    - id: x_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[x]] expresa la proyección horizontal de una posición definida por [[r]] y [[theta]].", en: "[[x]] is the horizontal projection of a position defined by [[r]] and [[theta]]." }\r
    physical_reading_rules:\r
    - id: x_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[theta]] aumenta con [[r]] fija, entonces la proyección horizontal [[x]] cambia porque la orientación del radio rota respecto del eje x.", en: "If [[theta]] increases at fixed [[r]], then horizontal projection [[x]] changes because radius orientation rotates relative to the x axis." }\r
    coherence_rules:\r
    - id: x_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "Se espera |[[x]]| <= [[r]] en cualquier estado geométrico válido.", en: "Expected relation is |[[x]]| <= [[r]] for any valid geometric state." }\r
    model_validity_rules:\r
    - id: x_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Válido en conversión planar euclídea con convención angular consistente.", en: "Valid in planar Euclidean conversion with consistent angle convention." }\r
    graph_rules:\r
    - id: x_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En Coord, [[x]] varía sinusoidalmente con [[theta]] para [[r]] fijo.", en: "In Coord, [[x]] varies sinusoidally with [[theta]] at fixed [[r]]." }\r
    likely_errors:\r
    - id: x_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: usar grados en [[theta]] cuando el cálculo espera radianes.", en: "Common error: using degrees for [[theta]] when computation expects radians." }\r
    next_step_rules:\r
    - id: x_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Compara [[x]] con [[y]] para validar cuadrante y sentido angular.", en: "Compare [[x]] with [[y]] to validate quadrant and angular direction." }\r
\r
  y:\r
    summary_rules:\r
    - id: y_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[y]] expresa la proyección vertical de la posición en el plano.", en: "[[y]] expresses the vertical projection of position on the plane." }\r
    physical_reading_rules:\r
    - id: y_physical\r
      when: "true"\r
      status: info\r
      text: { es: "[[y]] crece al aumentar seno de [[theta]] para [[r]] constante.", en: "[[y]] increases as sine of [[theta]] increases at constant [[r]]." }\r
    coherence_rules:\r
    - id: y_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "Debe cumplirse |[[y]]| <= [[r]] en geometría plana estándar.", en: "Relation |[[y]]| <= [[r]] must hold in standard planar geometry." }\r
    model_validity_rules:\r
    - id: y_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "No aplica en cambios de base no euclídeos sin redefinir métrica.", en: "Not valid for non-Euclidean basis changes without redefining metric." }\r
    graph_rules:\r
    - id: y_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En Coord, [[y]] y [[x]] quedan desfasadas un cuarto de periodo angular.", en: "In Coord, [[y]] and [[x]] are phase-shifted by a quarter angular period." }\r
    likely_errors:\r
    - id: y_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: invertir seno y coseno en la proyección vertical.", en: "Common error: swapping sine and cosine in vertical projection." }\r
    next_step_rules:\r
    - id: y_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Verifica consistencia con [[radio_cartesiano|r]] para cerrar la conversión.", en: "Check consistency with [[radio_cartesiano|r]] to close conversion." }\r
\r
  r:\r
    summary_rules:\r
    - id: r_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[r]] representa distancia al origen y fija escala espacial de la configuración.", en: "[[r]] represents distance to the origin and sets spatial scale of configuration." }\r
    physical_reading_rules:\r
    - id: r_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Con [[r]] fija, solo cambia orientación; con [[theta]] fija, cambia tamaño radial.", en: "At fixed [[r]], only orientation changes; at fixed [[theta]], radial size changes." }\r
    coherence_rules:\r
    - id: r_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[r]] debe ser no negativa por definición geométrica.", en: "[[r]] must be non-negative by geometric definition." }\r
    model_validity_rules:\r
    - id: r_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Requiere plano euclídeo y componentes [[x]], [[y]] medibles en misma escala.", en: "Requires Euclidean plane and [[x]], [[y]] components measured on same scale." }\r
    graph_rules:\r
    - id: r_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Curvas de [[r]] constante forman circunferencias en el plano cartesiano.", en: "Constant [[r]] curves are circles in Cartesian plane." }\r
    likely_errors:\r
    - id: r_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: interpretar [[r]] como desplazamiento recorrido en vez de estado instantáneo.", en: "Common error: interpreting [[r]] as traveled distance instead of instantaneous state." }\r
    next_step_rules:\r
    - id: r_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usa [[r]] y [[theta]] para construir coordenadas generalizadas convenientes.", en: "Use [[r]] and [[theta]] to build convenient generalized coordinates." }\r
\r
  theta:\r
    summary_rules:\r
    - id: theta_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[theta]] define la orientación angular de la posición respecto al eje de referencia.", en: "[[theta]] defines angular orientation of position relative to reference axis." }\r
    physical_reading_rules:\r
    - id: theta_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Un cambio pequeño en [[theta]] puede invertir signo de [[x]] o [[y]] según cuadrante.", en: "A small [[theta]] change can flip sign of [[x]] or [[y]] depending on quadrant." }\r
    coherence_rules:\r
    - id: theta_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[theta]] debe manejarse en radianes para coherencia con seno y coseno estándar.", en: "[[theta]] must be handled in radians for standard sine and cosine coherence." }\r
    model_validity_rules:\r
    - id: theta_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "La convención angular debe declararse para comparar resultados entre problemas.", en: "Angular convention must be declared to compare results across problems." }\r
    graph_rules:\r
    - id: theta_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En gráficas paramétricas, [[theta]] recorre curva cerrada al avanzar 2π.", en: "In parametric graphs, [[theta]] traces a closed curve over 2π." }\r
    likely_errors:\r
    - id: theta_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: mezclar grados y radianes sin conversión explícita.", en: "Common error: mixing degrees and radians without explicit conversion." }\r
    next_step_rules:\r
    - id: theta_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Valida cuadrante con signo simultáneo de [[x]] y [[y]].", en: "Validate quadrant using simultaneous sign of [[x]] and [[y]]." }\r
\r
  n:\r
    summary_rules:\r
    - id: n_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[n]] cuenta entidades dinámicas antes de aplicar restricciones.", en: "[[n]] counts dynamic entities before applying constraints." }\r
    physical_reading_rules:\r
    - id: n_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Mayor [[n]] amplía espacio de configuración bruto del sistema.", en: "Larger [[n]] expands raw configuration space of the system." }\r
    coherence_rules:\r
    - id: n_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[n]] debe ser entero positivo en problemas físicos discretos.", en: "[[n]] must be a positive integer in discrete physical problems." }\r
    model_validity_rules:\r
    - id: n_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Solo aplica directamente a conteo discreto, no a medios continuos.", en: "Directly applies to discrete counting, not continuous media." }\r
    graph_rules:\r
    - id: n_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Con [[C]] fijo, [[f]] crece linealmente con [[n]].", en: "At fixed [[C]], [[f]] grows linearly with [[n]]." }\r
    likely_errors:\r
    - id: n_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: confundir [[n]] con número de ecuaciones de movimiento.", en: "Common error: confusing [[n]] with number of motion equations." }\r
    next_step_rules:\r
    - id: n_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Enumera entidades físicas explícitamente antes del conteo final.", en: "List physical entities explicitly before final counting." }\r
\r
  C:\r
    summary_rules:\r
    - id: C_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[C]] representa ligaduras independientes que reducen coordenadas efectivas.", en: "[[C]] represents independent constraints reducing effective coordinates." }\r
    physical_reading_rules:\r
    - id: C_physical\r
      when: "true"\r
      status: info\r
      text: { es: "A mayor [[C]] con [[n]] fijo, menor dimensión dinámica disponible.", en: "Higher [[C]] at fixed [[n]] lowers available dynamic dimension." }\r
    coherence_rules:\r
    - id: C_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "Debe cumplirse [[C]] <= 3[[n]] para mantener [[f]] no negativa.", en: "Condition [[C]] <= 3[[n]] must hold to keep [[f]] non-negative." }\r
    model_validity_rules:\r
    - id: C_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Las ligaduras deben ser independientes; redundancias alteran conteo.", en: "Constraints must be independent; redundancies corrupt counting." }\r
    graph_rules:\r
    - id: C_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Con [[n]] constante, [[f]] decrece linealmente al aumentar [[C]].", en: "With constant [[n]], [[f]] decreases linearly as [[C]] increases." }\r
    likely_errors:\r
    - id: C_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: contar dos restricciones equivalentes como independientes.", en: "Common error: counting two equivalent constraints as independent." }\r
    next_step_rules:\r
    - id: C_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Comprueba independencia algebraica de ligaduras antes de cerrar [[f]].", en: "Check algebraic constraint independence before finalizing [[f]]." }\r
\r
  f:\r
    summary_rules:\r
    - id: f_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[f]] indica cuántas coordenadas generalizadas independientes necesita el modelo.", en: "[[f]] indicates how many independent generalized coordinates the model needs." }\r
    physical_reading_rules:\r
    - id: f_physical\r
      when: "true"\r
      status: info\r
      text: { es: "[[f]] conecta estructura geométrica del sistema con complejidad dinámica efectiva.", en: "[[f]] links system geometric structure with effective dynamic complexity." }\r
    coherence_rules:\r
    - id: f_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[f]] debe ser entero no negativo; si no, hay error de conteo en [[C]] o [[n]].", en: "[[f]] must be a non-negative integer; otherwise [[C]] or [[n]] counting is wrong." }\r
    model_validity_rules:\r
    - id: f_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Fórmula válida para sistema discreto tridimensional con ligaduras holónomas independientes.", en: "Formula valid for discrete three-dimensional systems with independent holonomic constraints." }\r
    graph_rules:\r
    - id: f_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En Coord, [[f]] define recta de pendiente -1 respecto de [[C]] con [[n]] fijo.", en: "In Coord, [[f]] defines slope -1 line versus [[C]] at fixed [[n]]." }\r
    likely_errors:\r
    - id: f_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: usar [[f]] como dimensión espacial en vez de dimensión del espacio de configuración.", en: "Common error: using [[f]] as spatial dimension instead of configuration-space dimension." }\r
    next_step_rules:\r
    - id: f_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Con [[f]] calculada, selecciona coordenadas generalizadas mínimas y físicamente interpretables.", en: "With [[f]] computed, select minimal and physically interpretable generalized coordinates." }\r
\r
  phi:\r
    summary_rules: [{ id: phi_summary, when: "true", status: info, text: { es: "[[phi]]=0 define las configuraciones permitidas por la ligadura.", en: "[[phi]]=0 defines configurations allowed by the constraint." } }]\r
    physical_reading_rules: [{ id: phi_physical, when: "true", status: info, text: { es: "La ligadura elimina movimiento porque obliga a permanecer sobre el conjunto [[phi]]=0.", en: "The constraint removes motion because it forces the system to remain on [[phi]]=0." } }]\r
    coherence_rules: [{ id: phi_coherence, when: "true", status: ok, text: { es: "Una configuraci?n v?lida debe satisfacer [[phi]]=0 dentro de tolerancia.", en: "A valid configuration must satisfy [[phi]]=0 within tolerance." } }]\r
    model_validity_rules: [{ id: phi_validity, when: "true", status: ok, text: { es: "Aplica a ligaduras hol?nomas diferenciables.", en: "Applies to differentiable holonomic constraints." } }]\r
    graph_rules: [{ id: phi_graph, when: "true", status: info, text: { es: "El gr?fico debe mostrar el subespacio permitido por la ligadura.", en: "The graph should show the subspace allowed by the constraint." } }]\r
    likely_errors: [{ id: phi_error, when: "true", status: warning, text: { es: "Error com?n: contar la misma ligadura dos veces.", en: "Common error: counting the same constraint twice." } }]\r
    next_step_rules: [{ id: phi_next, when: "true", status: tip, text: { es: "Comprueba independencia antes de calcular [[f]].", en: "Check independence before computing [[f]]." } }]\r
  delta_q:\r
    summary_rules: [{ id: dq_summary, when: "true", status: info, text: { es: "[[delta_q]] representa una variaci?n compatible con la ligadura.", en: "[[delta_q]] represents a variation compatible with the constraint." } }]\r
    physical_reading_rules: [{ id: dq_physical, when: "true", status: info, text: { es: "Solo los desplazamientos tangentes al conjunto permitido conservan la ligadura en primer orden.", en: "Only displacements tangent to the allowed set preserve the constraint to first order." } }]\r
    coherence_rules: [{ id: dq_coherence, when: "true", status: ok, text: { es: "[[delta_q]] debe cumplir la forma linealizada de [[phi]].", en: "[[delta_q]] must satisfy the linearized form of [[phi]]." } }]\r
    model_validity_rules: [{ id: dq_validity, when: "true", status: ok, text: { es: "Es una lectura local, no una trayectoria completa.", en: "It is a local reading, not a full trajectory." } }]\r
    graph_rules: [{ id: dq_graph, when: "true", status: info, text: { es: "El gr?fico debe distinguir direcciones permitidas y bloqueadas.", en: "The graph should distinguish allowed and blocked directions." } }]\r
    likely_errors: [{ id: dq_error, when: "true", status: warning, text: { es: "Error com?n: confundir desplazamiento virtual con desplazamiento real temporal.", en: "Common error: confusing virtual displacement with real time displacement." } }]\r
    next_step_rules: [{ id: dq_next, when: "true", status: tip, text: { es: "Usa esta condici?n para justificar independencia local.", en: "Use this condition to justify local independence." } }]\r
  lambda:\r
    summary_rules: [{ id: lam_summary, when: "true", status: info, text: { es: "[[lambda]] mide la intensidad de la reacci?n necesaria para imponer la ligadura.", en: "[[lambda]] measures the reaction intensity needed to impose the constraint." } }]\r
    physical_reading_rules: [{ id: lam_physical, when: "true", status: info, text: { es: "Aparece porque la restricci?n impide movimientos que la din?mica libre permitir?a.", en: "It appears because the constraint blocks motions free dynamics would allow." } }]\r
    coherence_rules: [{ id: lam_coherence, when: "true", status: ok, text: { es: "Si no hay ligadura activa, no debe aparecer reacci?n de ligadura.", en: "If there is no active constraint, no constraint reaction should appear." } }]\r
    model_validity_rules: [{ id: lam_validity, when: "true", status: ok, text: { es: "Requiere formulaci?n lagrangiana y ligaduras hol?nomas.", en: "Requires Lagrangian formulation and holonomic constraints." } }]\r
    graph_rules: [{ id: lam_graph, when: "true", status: info, text: { es: "El gr?fico puede vincular reacci?n con activaci?n de la ligadura.", en: "The graph may link reaction with constraint activation." } }]\r
    likely_errors: [{ id: lam_error, when: "true", status: warning, text: { es: "Error com?n: tratar [[lambda]] como constante arbitraria.", en: "Common error: treating [[lambda]] as an arbitrary constant." } }]\r
    next_step_rules: [{ id: lam_next, when: "true", status: tip, text: { es: "Interpreta su signo seg?n la convenci?n de [[phi]].", en: "Interpret its sign according to the [[phi]] convention." } }]\r
`;export{e as default};
