const e=`version: 2\r
id: interpretacion-corchetes-de-poisson\r
leaf_id: corchetes-de-poisson\r
nombre:\r
  es: Interpretacion de Corchetes de Poisson\r
  en: Interpretation of Poisson Brackets\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: mecanica-analitica\r
  parent_id: hamiltoniano\r
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/corchetes-de-poisson\r
dependencies:\r
  formulas:\r
  - definicion_corchete_poisson\r
  - evolucion_temporal_poisson\r
  - conservacion_por_poisson\r
  - corchete_canonico_fundamental\r
  magnitudes:\r
  - A\r
  - B\r
  - PB\r
  - qi\r
  - pi\r
  - H\r
  - dA_dt\r
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
    title:\r
      es: Resumen\r
      en: Summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura grafica\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  PB:\r
    summary_rules:\r
    - id: PB_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: PB resume una lectura central del leaf.\r
        en: PB summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: PB_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: PB causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: PB causes a physical reading because it determines which structure is\r
          preserved, changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: PB_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: PB_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: PB_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: PB_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: PB_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  dA_dt:\r
    summary_rules:\r
    - id: dA_dt_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dA_dt resume una lectura central del leaf.\r
        en: dA_dt summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: dA_dt_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dA_dt causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: dA_dt causes a physical reading because it determines which structure\r
          is preserved, changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: dA_dt_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: dA_dt_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: dA_dt_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: dA_dt_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: dA_dt_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
`;export{e as default};
