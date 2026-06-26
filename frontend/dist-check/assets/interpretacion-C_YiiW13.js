const e=`version: 2\r
id: interpretacion-hamilton-jacobi\r
leaf_id: hamilton-jacobi\r
nombre:\r
  es: Interpretacion de Hamilton-Jacobi\r
  en: Interpretation of Hamilton-Jacobi Theory\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: mecanica-analitica\r
  parent_id: hamiltoniano\r
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/hamilton-jacobi\r
dependencies:\r
  formulas:\r
  - momento_desde_accion\r
  - ecuacion_hamilton_jacobi\r
  - separacion_autonoma\r
  - ecuacion_hj_reducida\r
  magnitudes:\r
  - S\r
  - W\r
  - H\r
  - E\r
  - qi\r
  - pi\r
  - t\r
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
  S:\r
    summary_rules:\r
    - id: S_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: S resume una lectura central del leaf.\r
        en: S summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: S_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: S causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: S causes a physical reading because it determines which structure is preserved,\r
          changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: S_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: S_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: S_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: S_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: S_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  E:\r
    summary_rules:\r
    - id: E_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: E resume una lectura central del leaf.\r
        en: E summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: E_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: E causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: E causes a physical reading because it determines which structure is preserved,\r
          changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: E_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: E_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: E_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: E_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: E_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  pi:\r
    summary_rules:\r
    - id: pi_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: pi resume una lectura central del leaf.\r
        en: pi summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: pi_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: pi causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: pi causes a physical reading because it determines which structure is\r
          preserved, changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: pi_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: pi_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: pi_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: pi_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: pi_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
`;export{e as default};
