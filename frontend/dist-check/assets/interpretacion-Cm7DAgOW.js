const e=`version: 2\r
id: interpretacion-pequenas-oscilaciones-y-modos-normales\r
leaf_id: pequenas-oscilaciones-y-modos-normales\r
nombre:\r
  es: Interpretacion de Pequenas oscilaciones y modos normales\r
  en: Interpretation of Small Oscillations and Normal Modes\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: mecanica-analitica\r
  parent_id: aplicaciones\r
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/aplicaciones/pequenas-oscilaciones-y-modos-normales\r
dependencies:\r
  formulas:\r
  - ecuacion_linealizada\r
  - problema_autovalores_modal\r
  - solucion_superposicion_modal\r
  - ortogonalidad_modal\r
  magnitudes:\r
  - eta\r
  - M\r
  - K\r
  - omega\r
  - A\r
  - phi\r
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
  phi:\r
    summary_rules:\r
    - id: phi_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: phi resume una lectura central del leaf.\r
        en: phi summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: phi_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: phi causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: phi causes a physical reading because it determines which structure is\r
          preserved, changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: phi_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: phi_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: phi_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: phi_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: phi_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  eta:\r
    summary_rules:\r
    - id: eta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: eta resume una lectura central del leaf.\r
        en: eta summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: eta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: eta causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: eta causes a physical reading because it determines which structure is\r
          preserved, changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: eta_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: eta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: eta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: eta_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: eta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
  omega:\r
    summary_rules:\r
    - id: omega_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omega resume una lectura central del leaf.\r
        en: omega summarizes a central reading of the leaf.\r
    physical_reading_rules:\r
    - id: omega_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omega causa una lectura fisica porque determina que estructura se conserva,\r
          cambia o se invalida dentro del modelo.\r
        en: omega causes a physical reading because it determines which structure\r
          is preserved, changed, or invalidated inside the model.\r
    coherence_rules:\r
    - id: omega_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La magnitud es coherente si se mantiene dentro del mismo formalismo.\r
        en: The quantity is coherent if it stays within the same formalism.\r
    model_validity_rules:\r
    - id: omega_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura exige las hipotesis de regularidad, suavidad y dominio declaradas.\r
        en: The reading requires the declared regularity, smoothness, and domain assumptions.\r
    graph_rules:\r
    - id: omega_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Sin grafico declarado, la lectura se apoya en estructura y unidades.\r
        en: With no declared graph, the reading relies on structure and units.\r
    likely_errors:\r
    - id: omega_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: aplicar la relacion fuera de su dominio.'\r
        en: 'Common mistake: applying the relation outside its domain.'\r
    next_step_rules:\r
    - id: omega_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba el dominio antes de pasar al siguiente calculo.\r
        en: Check the domain before moving to the next calculation.\r
`;export{e as default};
