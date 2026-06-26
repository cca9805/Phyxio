const e=`version: 5\r
id: velocidad-orbital-interp\r
leaf_id: velocidad-orbital\r
scope: local\r
nombre:\r
  es: Lectura de velocidad orbital\r
  en: Orbital velocity reading\r
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
  magnitudes: [ G, M, r, R, h, v_orb, v_escape, T, a, mu, E ]\r
  formulas: [ velocidad_orbital_circular, velocidad_escape, periodo_orbital, parametro_gravitacional, vis_viva, energia_orbital_especifica ]\r
\r
targets:\r
  v_orb:\r
    summary_rules:\r
    - id: vorb-summary\r
      when: v_orb > 0\r
      status: success\r
      text:\r
        es: La velocidad orbital es positiva y describe regimen circular ligado en el radio evaluado.\r
        en: Orbital speed is positive and describes a bound circular regime at the evaluated radius.\r
    physical_reading_rules:\r
    - id: vorb-reading\r
      when: r > 0 and M > 0\r
      status: info\r
      text:\r
        es: Si [[r]] aumenta con [[M]] fija, [[v_orb]] disminuye por debilidad radial del campo.\r
        en: If [[r]] increases with fixed [[M]], [[v_orb]] decreases due to radial field weakening.\r
    coherence_rules:\r
    - id: vorb-coh\r
      when: v_orb > 0 and G > 0 and M > 0 and r > 0\r
      status: success\r
      text:\r
        es: Datos coherentes con la expresion circular de velocidad orbital.\r
        en: Data are coherent with the circular orbital-speed relation.\r
    model_validity_rules:\r
    - id: vorb-valid\r
      when: r >= R\r
      status: success\r
      text:\r
        es: Valido en aproximacion de dos cuerpos con masa central dominante.\r
        en: Valid in two-body approximation with dominant central mass.\r
    graph_rules:\r
    - id: vorb-graph\r
      when: v_orb > 0\r
      status: info\r
      text:\r
        es: En Coord, la curva de [[v_orb]] cae al aumentar [[r]].\r
        en: In Coord view, the [[v_orb]] curve decreases as [[r]] grows.\r
    likely_errors:\r
    - id: vorb-err-r\r
      when: h > 0 and r == h\r
      status: error\r
      text:\r
        es: "Error probable: confundir altura con radio al centro y usar [[h]] sin sumar [[R]]."
        en: "Likely mistake: confusing altitude with center radius and using [[h]] without adding [[R]]."
    next_step_rules:\r
    - id: vorb-next\r
      when: v_orb > 0\r
      status: info\r
      text:\r
        es: Compara con [[v_escape]] para clasificar margen energetico local.\r
        en: Compare with [[v_escape]] to classify local energetic margin.\r
\r
  v_escape:\r
    summary_rules:\r
    - id: vesc-summary\r
      when: v_escape > 0\r
      status: success\r
      text:\r
        es: Se obtuvo un umbral de escape fisicamente valido para el radio indicado.\r
        en: A physically valid escape threshold was obtained for the given radius.\r
    physical_reading_rules:\r
    - id: vesc-reading\r
      when: v_escape > v_orb\r
      status: info\r
      text:\r
        es: El umbral de escape supera la velocidad circular en el mismo punto orbital.\r
        en: Escape threshold exceeds circular speed at the same orbital point.\r
    coherence_rules:\r
    - id: vesc-coh\r
      when: G > 0 and M > 0 and r > 0\r
      status: success\r
      text:\r
        es: Coherencia completa para aplicar la expresion de escape.\r
        en: Full coherence to apply the escape relation.\r
    model_validity_rules:\r
    - id: vesc-valid\r
      when: r >= R\r
      status: success\r
      text:\r
        es: Valido para campo central ideal sin propulsion posterior.\r
        en: Valid for ideal central field without further thrust.\r
    graph_rules:\r
    - id: vesc-graph\r
      when: v_escape > 0\r
      status: info\r
      text:\r
        es: En Coord, [[v_escape]] aparece por encima de [[v_orb]] en todo [[r]] positivo.\r
        en: In Coord, [[v_escape]] stays above [[v_orb]] for all positive [[r]].\r
    likely_errors:\r
    - id: vesc-err-conf\r
      when: v_escape == v_orb\r
      status: warning\r
      text:\r
        es: Revisa posible confusion entre velocidad orbital y umbral de escape.\r
        en: Recheck potential confusion between orbital speed and escape threshold.\r
    next_step_rules:\r
    - id: vesc-next\r
      when: v_escape > 0\r
      status: info\r
      text:\r
        es: Evalua energia especifica para confirmar regimen ligado o abierto.\r
        en: Evaluate specific energy to confirm bound or open regime.\r
\r
  T:\r
    summary_rules:\r
    - id: t-summary\r
      when: T > 0\r
      status: success\r
      text:\r
        es: El periodo orbital es positivo y compatible con movimiento periodico.\r
        en: Orbital period is positive and compatible with periodic motion.\r
    physical_reading_rules:\r
    - id: t-reading\r
      when: T > 0 and r > 0\r
      status: info\r
      text:\r
        es: A mayor [[r]], el periodo [[T]] crece de forma no lineal.\r
        en: For larger [[r]], period [[T]] increases nonlinearly.\r
    coherence_rules:\r
    - id: t-coh\r
      when: G > 0 and M > 0 and r > 0\r
      status: success\r
      text:\r
        es: Datos consistentes con la ley temporal orbital circular.\r
        en: Data are consistent with circular orbital timing law.\r
    model_validity_rules:\r
    - id: t-valid\r
      when: r >= R\r
      status: success\r
      text:\r
        es: Valido bajo orbita circular estable sin perturbaciones dominantes.\r
        en: Valid under stable circular orbit without dominant perturbations.\r
    graph_rules:\r
    - id: t-graph\r
      when: T > 0\r
      status: info\r
      text:\r
        es: El aumento de periodo se interpreta con menor velocidad angular en radios altos.\r
        en: Period increase is interpreted as lower angular speed at larger radii.\r
    likely_errors:\r
    - id: t-err-lin\r
      when: T == r\r
      status: warning\r
      text:\r
        es: "Posible error: asumir dependencia lineal directa entre periodo y radio."\r
        en: "Possible error: assuming direct linear dependence between period and radius."\r
    next_step_rules:\r
    - id: t-next\r
      when: T > 0\r
      status: info\r
      text:\r
        es: Contrasta dos radios para evaluar sensibilidad temporal de la mision.\r
        en: Compare two radii to evaluate mission time sensitivity.\r
\r
  mu:\r
    summary_rules:\r
    - id: mu-summary\r
      when: mu > 0\r
      status: success\r
      text:\r
        es: El parametro gravitacional es positivo y util para compactar calculos.\r
        en: Gravitational parameter is positive and useful for compact calculations.\r
    physical_reading_rules:\r
    - id: mu-reading\r
      when: mu > 0\r
      status: info\r
      text:\r
        es: "[[mu]] fija la escala dinamica global del sistema orbital central."\r
        en: "[[mu]] sets global dynamical scale for the central orbital system."\r
    coherence_rules:\r
    - id: mu-coh\r
      when: mu == G * M\r
      status: success\r
      text:\r
        es: Coherencia exacta entre constante universal y masa central.\r
        en: Exact coherence between universal constant and central mass.\r
    model_validity_rules:\r
    - id: mu-valid\r
      when: G > 0 and M > 0\r
      status: success\r
      text:\r
        es: Valido cuando la fuente central puede modelarse como dominante.\r
        en: Valid when central source can be modeled as dominant.\r
    graph_rules:\r
    - id: mu-graph\r
      when: mu > 0\r
      status: info\r
      text:\r
        es: Un [[mu]] mayor eleva ambas curvas de velocidad en Coord.\r
        en: Larger [[mu]] raises both speed curves in Coord.\r
    likely_errors:\r
    - id: mu-err-unit\r
      when: mu > 0\r
      status: warning\r
      text:\r
        es: Revisa unidades de [[mu]] para evitar errores de escala.\r
        en: Check [[mu]] units to avoid scale errors.\r
    next_step_rules:\r
    - id: mu-next\r
      when: mu > 0\r
      status: info\r
      text:\r
        es: Usa [[mu]] para resolver vis viva sin recalcular [[G]] y [[M]] en cada paso.\r
        en: Use [[mu]] to solve vis-viva without recalculating [[G]] and [[M]] each step.\r
\r
  E:\r
    summary_rules:\r
    - id: e-summary\r
      when: E < 0\r
      status: success\r
      text:\r
        es: Energia especifica negativa compatible con orbita ligada.\r
        en: Negative specific energy is compatible with bound orbit.\r
    physical_reading_rules:\r
    - id: e-reading\r
      when: E < 0 and a > 0\r
      status: info\r
      text:\r
        es: El signo de [[E]] clasifica el regimen orbital junto con [[a]].\r
        en: Sign of [[E]] classifies orbital regime together with [[a]].\r
    coherence_rules:\r
    - id: e-coh\r
      when: mu > 0 and a > 0\r
      status: success\r
      text:\r
        es: Coherencia para aplicar lectura energetica kepleriana.\r
        en: Coherence to apply Keplerian energetic reading.\r
    model_validity_rules:\r
    - id: e-valid\r
      when: a > 0\r
      status: success\r
      text:\r
        es: Valido en marco clasico sin perturbaciones dominantes.\r
        en: Valid in classical frame without dominant perturbations.\r
    graph_rules:\r
    - id: e-graph\r
      when: E < 0\r
      status: info\r
      text:\r
        es: Una lectura de menor [[v_orb]] a gran [[r]] sugiere energia menos negativa.\r
        en: Lower [[v_orb]] at large [[r]] suggests less negative energy.\r
    likely_errors:\r
    - id: e-err-sign\r
      when: E > 0\r
      status: warning\r
      text:\r
        es: Si se esperaba orbita ligada, revisa signo de energia y datos.\r
        en: If a bound orbit was expected, recheck energy sign and inputs.\r
    next_step_rules:\r
    - id: e-next\r
      when: E < 0\r
      status: info\r
      text:\r
        es: Compara distintos [[a]] para estimar margen respecto al escape.\r
        en: Compare different [[a]] values to estimate margin to escape.\r
\r
  M:\r
    summary_rules:\r
    - id: m-summary\r
      when: M > 0\r
      status: success\r
      text:\r
        es: Masa central positiva coherente con fuente gravitatoria fisica.\r
        en: Positive central mass is coherent with a physical gravitational source.\r
    physical_reading_rules:\r
    - id: m-reading\r
      when: M > 0\r
      status: info\r
      text:\r
        es: Al aumentar [[M]], suben [[v_orb]] y [[v_escape]] para un mismo [[r]].\r
        en: Increasing [[M]] raises [[v_orb]] and [[v_escape]] for the same [[r]].\r
    coherence_rules:\r
    - id: m-coh\r
      when: M > 0 and G > 0\r
      status: success\r
      text:\r
        es: Coherencia basica de parametros de fuente.\r
        en: Basic source-parameter coherence.\r
    model_validity_rules:\r
    - id: m-valid\r
      when: M > 0\r
      status: success\r
      text:\r
        es: Valido para fuente dominante en modelo de dos cuerpos.\r
        en: Valid for dominant source in two-body model.\r
    graph_rules:\r
    - id: m-graph\r
      when: M > 0\r
      status: info\r
      text:\r
        es: En grafico Coord, mayor [[M]] desplaza curvas de velocidad hacia arriba.\r
        en: In Coord graph, larger [[M]] shifts speed curves upward.\r
    likely_errors:\r
    - id: m-err-sat\r
      when: M <= 0\r
      status: error\r
      text:\r
        es: "Masa central no fisica: revisa seleccion de dato."\r
        en: "Nonphysical central mass: recheck data selection."\r
    next_step_rules:\r
    - id: m-next\r
      when: M > 0\r
      status: info\r
      text:\r
        es: Repite lectura para otro cuerpo central y compara [[mu]].\r
        en: Repeat reading for another central body and compare [[mu]].\r
\r
  r:\r
    summary_rules:\r
    - id: r-summary\r
      when: r > 0\r
      status: success\r
      text:\r
        es: Radio orbital positivo coherente con geometria del problema.\r
        en: Positive orbital radius is coherent with problem geometry.\r
    physical_reading_rules:\r
    - id: r-reading\r
      when: r > 0\r
      status: info\r
      text:\r
        es: "[[r]] domina la variacion local de [[v_orb]], [[v_escape]] y [[T]]."\r
        en: "[[r]] dominates local variation of [[v_orb]], [[v_escape]], and [[T]]."\r
    coherence_rules:\r
    - id: r-coh\r
      when: r >= R\r
      status: success\r
      text:\r
        es: Coherencia geometrica entre radio orbital y radio fisico [[R]].\r
        en: Geometric coherence between orbital radius and physical radius [[R]].\r
    model_validity_rules:\r
    - id: r-valid\r
      when: r > 0\r
      status: success\r
      text:\r
        es: Valido para distancia radial definida respecto del centro de masa.\r
        en: Valid for radial distance defined from center of mass.\r
    graph_rules:\r
    - id: r-graph\r
      when: r > 0\r
      status: info\r
      text:\r
        es: En el eje horizontal de Coord, aumentar [[r]] reduce las velocidades.\r
        en: On Coord horizontal axis, increasing [[r]] lowers speeds.\r
    likely_errors:\r
    - id: r-err-h\r
      when: r == h\r
      status: warning\r
      text:\r
        es: Revisa conversion de altura a radio total.\r
        en: Recheck altitude-to-total-radius conversion.\r
    next_step_rules:\r
    - id: r-next\r
      when: r > 0\r
      status: info\r
      text:\r
        es: Evalua dos radios para obtener sensibilidad radial de la mision.\r
        en: Evaluate two radii to obtain mission radial sensitivity.\r
\r
  a:\r
    summary_rules:\r
    - id: a-summary\r
      when: a > 0\r
      status: success\r
      text:\r
        es: Semieje mayor positivo coherente con orbita kepleriana ligada.\r
        en: Positive semimajor axis is coherent with a bound Keplerian orbit.\r
    physical_reading_rules:\r
    - id: a-reading\r
      when: a > 0\r
      status: info\r
      text:\r
        es: "[[a]] fija la escala energetica media de la orbita."\r
        en: "[[a]] sets the mean energetic scale of the orbit."\r
    coherence_rules:\r
    - id: a-coh\r
      when: a > 0 and mu > 0\r
      status: success\r
      text:\r
        es: Coherencia para aplicar vis viva y energia especifica.\r
        en: Coherence for applying vis-viva and specific energy.\r
    model_validity_rules:\r
    - id: a-valid\r
      when: a >= r / 2\r
      status: success\r
      text:\r
        es: Valido dentro de regimenes keplerianos fisicamente realizables.\r
        en: Valid within physically realizable Keplerian regimes.\r
    graph_rules:\r
    - id: a-graph\r
      when: a > 0\r
      status: info\r
      text:\r
        es: Cambios en [[a]] modifican lectura de velocidad por vis viva.\r
        en: Changes in [[a]] modify speed reading through vis-viva.\r
    likely_errors:\r
    - id: a-err-eq\r
      when: a == r\r
      status: info\r
      text:\r
        es: Igualdad [[a]] igual [[r]] solo aplica a orbita circular ideal.\r
        en: Equality [[a]] equals [[r]] applies only to ideal circular orbit.\r
    next_step_rules:\r
    - id: a-next\r
      when: a > 0\r
      status: info\r
      text:\r
        es: Contrasta periapsis y apoapsis para lectura eliptica completa.\r
        en: Contrast periapsis and apoapsis for full elliptical reading.\r
`;export{e as default};
