const e=`version: 5\r
id: energia-potencial-gravitatoria-interp\r
leaf_id: energia-potencial-gravitatoria\r
scope: local\r
nombre:\r
  es: Lectura de energia potencial gravitatoria\r
  en: Gravitational potential-energy reading\r
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
  magnitudes: [ G, M, m, r, ri, rf, U, Ui, Uf, DeltaU, K, DeltaK, E, Wg, h, g ]\r
  formulas: [ energia_potencial_general, cambio_energia_potencial, energia_mecanica, conservacion_energia, trabajo_gravitatorio, aproximacion_superficial, condicion_ligadura_conceptual ]\r
\r
targets:\r
  U:\r
    summary_rules:\r
    - id: u-sign-summary\r
      when: U < 0\r
      status: success\r
      text:\r
        es: "Con referencia en infinito, energia potencial negativa es coherente para estados ligados."\r
        en: "With infinity reference, negative potential energy is coherent for bound states."\r
    physical_reading_rules:\r
    - id: u-reading\r
      when: r > 0\r
      status: info\r
      text:\r
        es: "Al aumentar la distancia radial, la energia potencial se vuelve menos negativa."\r
        en: "As radial distance increases, potential energy becomes less negative."\r
    coherence_rules:\r
    - id: u-coh\r
      when: r > 0 and M > 0 and m > 0\r
      status: success\r
      text:\r
        es: "Los datos de masa y distancia son coherentes para lectura energetica."\r
        en: "Mass and distance data are coherent for energetic reading."\r
    model_validity_rules:\r
    - id: u-validity\r
      when: r > 0\r
      status: success\r
      text:\r
        es: "Valido para campo central con simetria esferica aproximada."\r
        en: "Valid for central fields with approximate spherical symmetry."\r
    graph_rules:\r
    - id: u-graph\r
      when: r > 0\r
      status: info\r
      text:\r
        es: "La curva de energia potencial cae con fuerza a radios pequenos."\r
        en: "Potential-energy curve drops strongly at small radii."\r
    likely_errors:\r
    - id: u-reference-sign-confusion\r
      when: U > 0 and r > 0 and M > 0 and m > 0\r
      status: error\r
      text:\r
        es: "Error conceptual: confundir referencia energetica y asumir energia potencial positiva con referencia en infinito."\r
        en: "Conceptual error: confusing energy reference and assuming positive potential energy under infinity reference."\r
    next_step_rules:\r
    - id: u-next\r
      when: r > 0\r
      status: info\r
      text:\r
        es: "Comparar energia inicial y final para obtener cambio de energia potencial."\r
        en: "Compare initial and final energy to obtain potential-energy change."\r
\r
  DeltaU:\r
    summary_rules:\r
    - id: du-summary\r
      when: ri > 0 and rf > 0\r
      status: success\r
      text:\r
        es: "El cambio de energia potencial resume la transferencia entre estados."\r
        en: "Potential-energy change summarizes transfer between states."\r
    physical_reading_rules:\r
    - id: du-physical\r
      when: rf > ri\r
      status: info\r
      text:\r
        es: "Si el radio final es mayor, el cambio potencial suele ser positivo."\r
        en: "If final radius is larger, potential change is usually positive."\r
    coherence_rules:\r
    - id: du-work-coh\r
      when: Wg + DeltaU == 0\r
      status: success\r
      text:\r
        es: "Trabajo gravitatorio y cambio potencial conservan coherencia."\r
        en: "Gravitational work and potential change remain coherent."\r
    model_validity_rules:\r
    - id: du-validity\r
      when: ri > 0 and rf > 0\r
      status: success\r
      text:\r
        es: "Valido cuando ambos radios usan la misma referencia geometrica."\r
        en: "Valid when both radii use the same geometric reference."\r
    graph_rules:\r
    - id: du-graph\r
      when: ri > 0 and rf > 0\r
      status: info\r
      text:\r
        es: "Se interpreta como diferencia vertical entre dos puntos de la curva."\r
        en: "It is read as vertical difference between two points on the curve."\r
    likely_errors:\r
    - id: du-order-concept\r
      when: ri == rf\r
      status: error\r
      text:\r
        es: "Error conceptual probable: igualar estados y reportar cambio no nulo rompe la lectura fisica."\r
        en: "Likely conceptual error: equal states with nonzero change breaks physical interpretation."\r
    next_step_rules:\r
    - id: du-next\r
      when: ri > 0 and rf > 0\r
      status: info\r
      text:\r
        es: "Usar conservacion para inferir cambio de energia cinetica."\r
        en: "Use conservation to infer kinetic-energy change."\r
\r
  E:\r
    summary_rules:\r
    - id: e-summary\r
      when: E == E\r
      status: info\r
      text:\r
        es: "La energia mecanica total combina estado cinetico y potencial."\r
        en: "Total mechanical energy combines kinetic and potential state."\r
    physical_reading_rules:\r
    - id: e-bound-reading\r
      when: E < 0\r
      status: success\r
      text:\r
        es: "Energia total negativa sugiere estado ligado."\r
        en: "Negative total energy suggests a bound state."\r
    coherence_rules:\r
    - id: e-coh\r
      when: E == K + U\r
      status: success\r
      text:\r
        es: "Balance mecanico total coherente con definicion del modelo."\r
        en: "Total mechanical balance is coherent with model definition."\r
    model_validity_rules:\r
    - id: e-validity\r
      when: K >= 0\r
      status: success\r
      text:\r
        es: "Lectura valida en regimen clasico sin correcciones extremas."\r
        en: "Reading is valid in classical regime without extreme corrections."\r
    graph_rules:\r
    - id: e-graph\r
      when: E == E\r
      status: info\r
      text:\r
        es: "Comparar nivel de energia total con la curva potencial orienta la interpretacion."\r
        en: "Comparing total-energy level with potential curve guides interpretation."\r
    likely_errors:\r
    - id: e-sign-error\r
      when: E > 0\r
      status: info\r
      text:\r
        es: "Energia positiva puede ser valida, pero revisar si se esperaba estado ligado."\r
        en: "Positive energy can be valid, but verify whether a bound state was expected."\r
    next_step_rules:\r
    - id: e-next\r
      when: E == E\r
      status: info\r
      text:\r
        es: "Contrastar energia total con condiciones iniciales para decidir escape o confinamiento."\r
        en: "Contrast total energy with initial conditions to decide escape or confinement."\r
\r
  DeltaK:\r
    summary_rules:\r
    - id: dk-summary\r
      when: DeltaK == DeltaK\r
      status: info\r
      text:\r
        es: "El cambio de energia cinetica refleja respuesta dinamica del proceso."\r
        en: "Kinetic-energy change reflects process dynamical response."\r
    physical_reading_rules:\r
    - id: dk-reading\r
      when: DeltaK == DeltaK\r
      status: info\r
      text:\r
        es: "En regimen conservativo, su signo debe oponerse al de cambio potencial."\r
        en: "In conservative regime, its sign should oppose potential change sign."\r
    coherence_rules:\r
    - id: dk-coh\r
      when: DeltaK + DeltaU == 0\r
      status: success\r
      text:\r
        es: "Coherencia entre cambios cinetico y potencial confirmada."\r
        en: "Coherence between kinetic and potential changes confirmed."\r
    model_validity_rules:\r
    - id: dk-valid\r
      when: DeltaK == DeltaK\r
      status: success\r
      text:\r
        es: "Valido cuando no hay trabajo no conservativo dominante."\r
        en: "Valid when non-conservative work is not dominant."\r
    graph_rules:\r
    - id: dk-graph\r
      when: DeltaK == DeltaK\r
      status: info\r
      text:\r
        es: "Puede inferirse desde diferencia entre energia total y potencial."\r
        en: "It can be inferred from difference between total and potential energy."\r
    likely_errors:\r
    - id: dk-sign-error\r
      when: DeltaK == DeltaU\r
      status: error\r
      text:\r
        es: "Error conceptual: cambios cinetico y potencial no deben tener mismo signo en caso conservativo."\r
        en: "Conceptual error: kinetic and potential changes should not share sign in conservative cases."\r
    next_step_rules:\r
    - id: dk-next\r
      when: DeltaK == DeltaK\r
      status: info\r
      text:\r
        es: "Usar su valor para interpretar aumento o disminucion de rapidez."\r
        en: "Use its value to interpret speed increase or decrease."\r
\r
  K:\r
    summary_rules:\r
    - id: k-summary\r
      when: K >= 0\r
      status: success\r
      text:\r
        es: "La energia cinetica es no negativa en mecanica clasica."\r
        en: "Kinetic energy is nonnegative in classical mechanics."\r
    physical_reading_rules:\r
    - id: k-reading\r
      when: K >= 0\r
      status: info\r
      text:\r
        es: "Su variacion indica respuesta de velocidad del cuerpo de prueba."\r
        en: "Its variation indicates test-body speed response."\r
    coherence_rules:\r
    - id: k-coh\r
      when: E == K + U\r
      status: success\r
      text:\r
        es: "Coherencia con balance de energia mecanica total."\r
        en: "Coherence with total mechanical-energy balance."\r
    model_validity_rules:\r
    - id: k-valid\r
      when: K >= 0\r
      status: success\r
      text:\r
        es: "Valido en el marco de energia clasica del leaf."\r
        en: "Valid within the leaf classical-energy framework."\r
    graph_rules:\r
    - id: k-graph\r
      when: K >= 0\r
      status: info\r
      text:\r
        es: "Se estima como diferencia entre energia total y potencial."\r
        en: "It is estimated as the difference between total and potential energy."\r
    likely_errors:\r
    - id: k-negative\r
      when: K < 0\r
      status: error\r
      text:\r
        es: "Error conceptual: energia cinetica negativa indica inconsistencia de calculo."\r
        en: "Conceptual error: negative kinetic energy indicates calculation inconsistency."\r
    next_step_rules:\r
    - id: k-next\r
      when: K >= 0\r
      status: info\r
      text:\r
        es: "Comparar estados para decidir si el sistema acelera o desacelera."\r
        en: "Compare states to decide whether the system accelerates or decelerates."\r
\r
  Wg:\r
    summary_rules:\r
    - id: wg-summary\r
      when: Wg == Wg\r
      status: info\r
      text:\r
        es: "El trabajo gravitatorio mide transferencia por accion del campo."\r
        en: "Gravitational work measures transfer caused by the field."\r
    physical_reading_rules:\r
    - id: wg-reading\r
      when: Wg == Wg\r
      status: info\r
      text:\r
        es: "Su signo indica si gravedad entrega o absorbe energia mecanica."\r
        en: "Its sign indicates whether gravity delivers or absorbs mechanical energy."\r
    coherence_rules:\r
    - id: wg-coh\r
      when: Wg + DeltaU == 0\r
      status: success\r
      text:\r
        es: "Coherencia entre trabajo y variacion potencial confirmada."\r
        en: "Work and potential-variation coherence confirmed."\r
    model_validity_rules:\r
    - id: wg-valid\r
      when: Wg == Wg\r
      status: success\r
      text:\r
        es: "Valido en interaccion gravitatoria conservativa."\r
        en: "Valid in conservative gravitational interaction."\r
    graph_rules:\r
    - id: wg-graph\r
      when: Wg == Wg\r
      status: info\r
      text:\r
        es: "Se infiere desde diferencia vertical de energia potencial entre estados."\r
        en: "It is inferred from vertical potential-energy difference between states."\r
    likely_errors:\r
    - id: wg-sign\r
      when: Wg == DeltaU\r
      status: error\r
      text:\r
        es: "Error conceptual: mismo signo en trabajo y cambio potencial rompe criterio conservativo."\r
        en: "Conceptual error: same sign in work and potential change breaks conservative criterion."\r
    next_step_rules:\r
    - id: wg-next\r
      when: Wg == Wg\r
      status: info\r
      text:\r
        es: "Usar su signo para cerrar interpretacion del proceso."\r
        en: "Use its sign to close process interpretation."\r
\r
  h:\r
    summary_rules:\r
    - id: h-summary\r
      when: h == h\r
      status: info\r
      text:\r
        es: "La variacion de altura es parametro local de aproximacion."\r
        en: "Height change is a local approximation parameter."\r
    physical_reading_rules:\r
    - id: h-reading\r
      when: h == h\r
      status: info\r
      text:\r
        es: "Permite estimar cambio energetico en tramos pequenos."\r
        en: "It enables energy-change estimates for short segments."\r
    coherence_rules:\r
    - id: h-coh\r
      when: h >= 0\r
      status: success\r
      text:\r
        es: "Coherencia geometrica de altura no negativa en magnitud."\r
        en: "Geometric coherence of nonnegative height magnitude."\r
    model_validity_rules:\r
    - id: h-valid\r
      when: h == h\r
      status: success\r
      text:\r
        es: "Valido en aproximacion local con variacion radial pequena."\r
        en: "Valid in local approximation with small radial variation."\r
    graph_rules:\r
    - id: h-graph\r
      when: h == h\r
      status: info\r
      text:\r
        es: "Representa desplazamiento local sobre tramo casi lineal de energia."\r
        en: "Represents local displacement over near-linear energy segment."\r
    likely_errors:\r
    - id: h-range\r
      when: h > r\r
      status: error\r
      text:\r
        es: "Error conceptual: altura comparable o mayor que radio invalida aproximacion local."\r
        en: "Conceptual error: height comparable to radius invalidates local approximation."\r
    next_step_rules:\r
    - id: h-next\r
      when: h == h\r
      status: info\r
      text:\r
        es: "Si escala crece, migrar a modelo radial con radios absolutos."\r
        en: "If scale grows, migrate to radial model with absolute radii."\r
\r
  m:\r
    summary_rules:\r
    - id: m-summary\r
      when: m > 0\r
      status: success\r
      text:\r
        es: "La masa de prueba escala linealmente la energia potencial total."\r
        en: "Test mass scales total potential energy linearly."\r
    physical_reading_rules:\r
    - id: m-reading\r
      when: m > 0\r
      status: info\r
      text:\r
        es: "Modificar masa altera magnitud energetica sin cambiar forma radial."\r
        en: "Changing mass alters energy magnitude without changing radial shape."\r
    coherence_rules:\r
    - id: m-coh\r
      when: m > 0\r
      status: success\r
      text:\r
        es: "Coherencia de parametro de prueba positiva confirmada."\r
        en: "Positive test-parameter coherence confirmed."\r
    model_validity_rules:\r
    - id: m-valid\r
      when: m > 0\r
      status: success\r
      text:\r
        es: "Valido mientras la masa de prueba no modifique la fuente dominante."\r
        en: "Valid while test mass does not alter dominant source."\r
    graph_rules:\r
    - id: m-graph\r
      when: m > 0\r
      status: info\r
      text:\r
        es: "Escala vertical de energia depende linealmente de la masa de prueba."\r
        en: "Energy vertical scale depends linearly on test mass."\r
    likely_errors:\r
    - id: m-negative\r
      when: m <= 0\r
      status: error\r
      text:\r
        es: "Error conceptual: masa no positiva invalida lectura fisica del problema."\r
        en: "Conceptual error: nonpositive mass invalidates physical reading."\r
    next_step_rules:\r
    - id: m-next\r
      when: m > 0\r
      status: info\r
      text:\r
        es: "Usar su valor para evaluar escala de energia en ambos estados."\r
        en: "Use its value to evaluate energy scale in both states."\r
\r
  r:\r
    summary_rules:\r
    - id: r-summary\r
      when: r > 0\r
      status: success\r
      text:\r
        es: "La distancia radial positiva define posicion fisica valida."\r
        en: "Positive radial distance defines a valid physical position."\r
    physical_reading_rules:\r
    - id: r-reading\r
      when: r > 0\r
      status: info\r
      text:\r
        es: "Cambios en radio gobiernan profundidad energetica del sistema."\r
        en: "Radius changes govern system energetic depth."\r
    coherence_rules:\r
    - id: r-coh\r
      when: r > 0\r
      status: success\r
      text:\r
        es: "Coherencia geometrica del estado radial confirmada."\r
        en: "Geometric coherence of radial state confirmed."\r
    model_validity_rules:\r
    - id: r-valid\r
      when: r > 0\r
      status: success\r
      text:\r
        es: "Valido en campo central fuera de singularidad idealizada."\r
        en: "Valid in central field away from idealized singularity."\r
    graph_rules:\r
    - id: r-graph\r
      when: r > 0\r
      status: info\r
      text:\r
        es: "Actua como eje horizontal principal de lectura potencial."\r
        en: "Acts as main horizontal axis for potential reading."\r
    likely_errors:\r
    - id: r-zero\r
      when: r <= 0\r
      status: error\r
      text:\r
        es: "Error conceptual: radio no positivo no representa estado fisico del modelo."\r
        en: "Conceptual error: nonpositive radius does not represent a physical model state."\r
    next_step_rules:\r
    - id: r-next\r
      when: r > 0\r
      status: info\r
      text:\r
        es: "Comparar dos radios para inferir direccion del cambio energetico."\r
        en: "Compare two radii to infer energy-change direction."\r
`;export{e as default};
