const e=`version: 2\r
id: interpretacion-problemas-con-ligaduras\r
leaf_id: problemas-con-ligaduras\r
nombre:\r
  es: Interpretacion de problemas con ligaduras\r
  en: Interpretation of problems with constraints\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: mecanica-analitica\r
  parent_id: aplicaciones\r
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/aplicaciones/problemas-con-ligaduras\r
dependencies:\r
  formulas: [ a_comun, T ]\r
  magnitudes: [ m1, m2, g, a, T ]\r
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
  a:\r
    summary_rules:\r
    - id: a_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[a]] resume la respuesta compartida que la ligadura impone al sistema de dos masas.", en: "[[a]] summarizes the shared response imposed by the constraint in the two-mass system." }\r
    physical_reading_rules:\r
    - id: a_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Si crece el contraste entre [[m2]] y [[m1]], aumenta el modulo de [[a]] porque el desbalance supera la inercia total.", en: "If contrast between [[m2]] and [[m1]] increases, [[a]] magnitude increases because imbalance overcomes total inertia." }\r
    coherence_rules:\r
    - id: a_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "La salida es coherente si [[a]] cambia de signo al intercambiar [[m1]] y [[m2]], y vale cero en simetria.", en: "Output is coherent if [[a]] changes sign when [[m1]] and [[m2]] are swapped, and becomes zero at symmetry." }\r
    model_validity_rules:\r
    - id: a_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Valida bajo cuerda inextensible, polea ideal y rozamiento no dominante.", en: "Valid under inextensible rope, ideal pulley, and non-dominant friction." }\r
    graph_rules:\r
    - id: a_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En Coord, la curva de [[a]] debe cruzar cero en el punto de masas iguales y crecer en modulo fuera de esa zona.", en: "In Coord, the [[a]] curve should cross zero at equal masses and grow in magnitude away from that point." }\r
    likely_errors:\r
    - id: a_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error conceptual comun: asignar aceleraciones distintas a cuerpos unidos por la misma cuerda ideal.", en: "Common conceptual error: assigning different accelerations to bodies connected by the same ideal rope." }\r
    next_step_rules:\r
    - id: a_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Con [[a]] estimada, interpreta evolucion temporal y contrasta con datos de medicion.", en: "With [[a]] estimated, interpret time evolution and compare with measurements." }\r
\r
  T:\r
    summary_rules:\r
    - id: T_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[T]] cuantifica la fuerza interna que mantiene acopladas ambas ramas del sistema.", en: "[[T]] quantifies the internal force that keeps both branches of the system coupled." }\r
    physical_reading_rules:\r
    - id: T_physical\r
      when: "true"\r
      status: info\r
      text: { es: "[[T]] emerge del cierre dinamico; no es una entrada externa libre.", en: "[[T]] emerges from dynamic closure; it is not a free external input." }\r
    coherence_rules:\r
    - id: T_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "La coherencia basica exige [[T]] positiva mientras la cuerda permanezca tensa.", en: "Basic coherence requires positive [[T]] while the rope remains taut." }\r
    model_validity_rules:\r
    - id: T_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Si hay inercia de polea o friccion notable, la tension ideal puede desviarse de forma sistematica.", en: "If pulley inertia or significant friction exists, ideal tension may deviate systematically." }\r
    graph_rules:\r
    - id: T_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En el panel grafico, [[T]] debe crecer con la carga efectiva y mantener tendencia suave en el dominio valido.", en: "In the graph panel, [[T]] should grow with effective load and keep smooth trend inside validity domain." }\r
    likely_errors:\r
    - id: T_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error conceptual comun: confundir [[T]] con el peso de una sola masa en cualquier configuracion.", en: "Common conceptual error: confusing [[T]] with the weight of a single mass in every configuration." }\r
    next_step_rules:\r
    - id: T_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Comparar [[T]] ideal con sensores ayuda a identificar perdidas no modeladas.", en: "Comparing ideal [[T]] with sensors helps identify unmodeled losses." }\r
\r
  m1:\r
    summary_rules:\r
    - id: m1_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[m1]] define la inercia de una rama del sistema acoplado.", en: "[[m1]] sets inertia of one branch of the coupled system." }\r
    physical_reading_rules:\r
    - id: m1_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Aumentar [[m1]] reduce el desbalance cuando [[m2]] se mantiene fija.", en: "Increasing [[m1]] reduces imbalance when [[m2]] is fixed." }\r
    coherence_rules:\r
    - id: m1_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[m1]] debe permanecer positiva y en unidades consistentes.", en: "[[m1]] must remain positive and in consistent units." }\r
    model_validity_rules:\r
    - id: m1_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Cambios bruscos de masa efectiva por accesorios invalidan lectura ideal.", en: "Abrupt effective-mass changes from attachments invalidate ideal reading." }\r
    graph_rules:\r
    - id: m1_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Mover [[m1]] en barrido horizontal desplaza el punto de equilibrio de [[a]].", en: "Moving [[m1]] in a horizontal sweep shifts the equilibrium point of [[a]]." }\r
    likely_errors:\r
    - id: m1_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: usar [[m1]] en gramos mientras [[m2]] esta en kilogramos.", en: "Common error: using [[m1]] in grams while [[m2]] is in kilograms." }\r
    next_step_rules:\r
    - id: m1_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Normaliza masas al mismo sistema de unidades antes de comparar casos.", en: "Normalize masses to the same unit system before comparing cases." }\r
\r
  m2:\r
    summary_rules:\r
    - id: m2_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[m2]] fija la inercia de la rama opuesta y participa del desbalance global.", en: "[[m2]] sets inertia of the opposite branch and contributes to global imbalance." }\r
    physical_reading_rules:\r
    - id: m2_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Con [[m1]] fija, aumentar [[m2]] eleva la tendencia del sistema a moverse hacia su lado.", en: "With fixed [[m1]], increasing [[m2]] raises tendency to move toward its side." }\r
    coherence_rules:\r
    - id: m2_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[m2]] positiva y consistente garantiza lectura estable de signo en [[a]].", en: "Positive and consistent [[m2]] guarantees stable sign reading in [[a]]." }\r
    model_validity_rules:\r
    - id: m2_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Si [[m2]] cambia durante el ensayo, el modelo estacionario requiere reconfiguracion.", en: "If [[m2]] changes during a run, the stationary model requires reconfiguration." }\r
    graph_rules:\r
    - id: m2_graph\r
      when: "true"\r
      status: info\r
      text: { es: "El grafico muestra crecimiento de [[a]] al aumentar [[m2]] respecto de [[m1]].", en: "The graph shows growth of [[a]] as [[m2]] increases relative to [[m1]]." }\r
    likely_errors:\r
    - id: m2_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: interpretar el orden de masas sin fijar direccion positiva.", en: "Common error: interpreting mass ordering without defining positive direction." }\r
    next_step_rules:\r
    - id: m2_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Documenta convencion de ejes antes de comparar experimentos.", en: "Document axis convention before comparing experiments." }\r
\r
  g:\r
    summary_rules:\r
    - id: g_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[g]] escala la accion externa comun sobre ambas masas.", en: "[[g]] scales common external action on both masses." }\r
    physical_reading_rules:\r
    - id: g_physical\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[g]] aumenta, crecen la aceleracion posible y la tension asociada al mismo contraste de masas.", en: "If [[g]] increases, both possible acceleration and associated tension increase for the same mass contrast." }\r
    coherence_rules:\r
    - id: g_coherence\r
      when: "true"\r
      status: ok\r
      text: { es: "[[g]] debe ser positiva y coherente con el entorno del experimento.", en: "[[g]] must be positive and consistent with the experiment environment." }\r
    model_validity_rules:\r
    - id: g_validity\r
      when: "true"\r
      status: ok\r
      text: { es: "Cambios de entorno requieren actualizar [[g]] para mantener trazabilidad.", en: "Environment changes require updating [[g]] to keep traceability." }\r
    graph_rules:\r
    - id: g_graph\r
      when: "true"\r
      status: info\r
      text: { es: "A igual razon de masas, mayor [[g]] eleva escala vertical de [[a]] y [[T]].", en: "At fixed mass ratio, larger [[g]] raises vertical scale of [[a]] and [[T]]." }\r
    likely_errors:\r
    - id: g_error\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: tomar [[g]] por defecto sin indicar condiciones locales.", en: "Common error: using default [[g]] without stating local conditions." }\r
    next_step_rules:\r
    - id: g_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Registrar valor de [[g]] usado mejora reproducibilidad entre grupos.", en: "Recording the [[g]] value improves reproducibility across groups." }\r
`;export{e as default};
