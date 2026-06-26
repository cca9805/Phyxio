const e=`version: 2\r
id: interpretacion-transformaciones-canonicas\r
leaf_id: transformaciones-canonicas\r
nombre:\r
  es: Interpretacion de Transformaciones canonicas\r
  en: Interpretation of Canonical Transformations\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: mecanica-analitica\r
  parent_id: hamiltoniano\r
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/transformaciones-canonicas\r
dependencies:\r
  formulas:\r
  - relacion_generatriz_tipo2\r
  - coordenada_nueva_generatriz\r
  - hamiltoniano_transformado\r
  - condicion_canonica_poisson\r
  magnitudes:\r
  - q\r
  - p\r
  - Q\r
  - P\r
  - K\r
  - Fgen\r
  - C\r
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
  p:\r
    summary_rules:\r
    - id: p_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: p resume una lectura central del leaf.\r
        en: p summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: p_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: p causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: p causes a physical reading because it determines which structure is preserved,\r
          changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: p_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: p_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: p_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: p_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: p_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  K:\r
    summary_rules:\r
    - id: K_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: K resume una lectura central del leaf.\r
        en: K summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: K_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: K causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: K causes a physical reading because it determines which structure is preserved,\r
          changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: K_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: K_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: K_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: K_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: K_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  Q:\r
    summary_rules:\r
    - id: Q_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Q resume una lectura central del leaf.\r
        en: Q summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: Q_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Q causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: Q causes a physical reading because it determines which structure is preserved,\r
          changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: Q_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: Q_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: Q_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: Q_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: Q_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  C:\r
    summary_rules:\r
    - id: C_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: C resume una lectura central del leaf.\r
        en: C summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: C_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: C causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: C causes a physical reading because it determines which structure is preserved,\r
          changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: C_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: C_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: C_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: C_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: C_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
`;export{e as default};
