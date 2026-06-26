const e=`version: 2\r
id: interpretacion-interpretacion\r
leaf_id: interpretacion\r
nombre:\r
  es: Interpretacion de Interpretacion\r
  en: Interpretation of Interpretation of Fictitious Forces\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: fuerzas-ficticias\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerzas-ficticias/interpretacion\r
dependencies:\r
  formulas:\r
  - transformacion_aceleraciones\r
  - fuerza_ficticia_interpretacion\r
  - equivalencia_dinamica\r
  - criterio_de_marco_conceptual\r
  magnitudes:\r
  - m\r
  - a_in\r
  - a_rel\r
  - a_marco\r
  - F_res\r
  - F_fict\r
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
      es: Resumen fisico\r
      en: Physical summary\r
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
  a_in:\r
    summary_rules:\r
    - id: a_in_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_in resume una lectura fisica relevante del leaf.\r
        en: a_in summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_in_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_in sea coherente con unidades y contexto.\r
        en: Check that a_in is coherent with units and context.\r
    physical_reading_rules:
    - id: a_in_physical
      when: 'true'
      status: info
      text:
        es: "a_in es la aceleracion que debe quedar asociada solo a fuerzas reales; si aparece mezclada con F_fict, el analisis ha perdido la referencia de marco."
        en: "a_in is the acceleration that must remain associated only with real forces; if it appears mixed with F_fict, the analysis has lost frame consistency."
    model_validity_rules:\r
    - id: a_in_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_in solo es interpretable dentro del modelo elegido.\r
        en: a_in is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_in_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_in.\r
        en: The graph must reflect the role of a_in visually.\r
    likely_errors:\r
    - id: a_in_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_in con otra magnitud cercana del problema.\r
        en: Do not confuse a_in with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_in_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_in para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_in to connect with the next interpretation step.\r
  a_rel:\r
    summary_rules:\r
    - id: a_rel_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_rel resume una lectura fisica relevante del leaf.\r
        en: a_rel summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_rel_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_rel sea coherente con unidades y contexto.\r
        en: Check that a_rel is coherent with units and context.\r
    physical_reading_rules:
    - id: a_rel_physical
      when: 'true'
      status: info
      text:
        es: "a_rel es la aceleracion leida por el observador no inercial; interpretarla bien exige aceptar que parte de la escena ya esta absorbida por el movimiento del propio marco."
        en: "a_rel is the acceleration read by the non-inertial observer; interpreting it correctly requires accepting that part of the scene is already absorbed by the motion of the frame itself."
    model_validity_rules:\r
    - id: a_rel_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_rel solo es interpretable dentro del modelo elegido.\r
        en: a_rel is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_rel_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_rel.\r
        en: The graph must reflect the role of a_rel visually.\r
    likely_errors:\r
    - id: a_rel_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_rel con otra magnitud cercana del problema.\r
        en: Do not confuse a_rel with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_rel_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_rel para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_rel to connect with the next interpretation step.\r
  a_marco:\r
    summary_rules:\r
    - id: a_marco_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a_marco resume una lectura fisica relevante del leaf.\r
        en: a_marco summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_marco_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a_marco sea coherente con unidades y contexto.\r
        en: Check that a_marco is coherent with units and context.\r
    physical_reading_rules:
    - id: a_marco_physical
      when: 'true'
      status: info
      text:
        es: "a_marco marca cuanto difieren las dos narraciones del mismo movimiento: si vale cero, desaparece la necesidad de reinterpretar la ecuacion."
        en: "a_marco measures how far both narratives of the same motion differ: if it is zero, the need to reinterpret the equation disappears."
    model_validity_rules:\r
    - id: a_marco_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a_marco solo es interpretable dentro del modelo elegido.\r
        en: a_marco is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_marco_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a_marco.\r
        en: The graph must reflect the role of a_marco visually.\r
    likely_errors:\r
    - id: a_marco_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a_marco con otra magnitud cercana del problema.\r
        en: Do not confuse a_marco with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_marco_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a_marco para enlazar con el siguiente paso de interpretacion.\r
        en: Use a_marco to connect with the next interpretation step.\r
  F_fict:\r
    summary_rules:\r
    - id: F_fict_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_fict resume una lectura fisica relevante del leaf.\r
        en: F_fict summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_fict_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_fict sea coherente con unidades y contexto.\r
        en: Check that F_fict is coherent with units and context.\r
    physical_reading_rules:
    - id: F_fict_physical
      when: 'true'
      status: info
      text:
        es: "F_fict es el indicador operativo de que el calculo se ha movido al marco no inercial; su signo dice en que sentido corrige la lectura relativa."
        en: "F_fict is the operational indicator that the calculation has moved to the non-inertial frame; its sign tells you in which direction the relative reading is corrected."
    model_validity_rules:\r
    - id: F_fict_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_fict solo es interpretable dentro del modelo elegido.\r
        en: F_fict is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_fict_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_fict.\r
        en: The graph must reflect the role of F_fict visually.\r
    likely_errors:\r
    - id: F_fict_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_fict con otra magnitud cercana del problema.\r
        en: Do not confuse F_fict with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_fict_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_fict para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_fict to connect with the next interpretation step.\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m resume una lectura fisica relevante del leaf.\r
        en: m summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que m sea coherente con unidades y contexto.\r
        en: Check that m is coherent with units and context.\r
    physical_reading_rules:
    - id: m_physical
      when: 'true'
      status: info
      text:
        es: "m asegura que la correccion de marco se compare con la misma inercia del cuerpo en ambos enfoques; cambiar de marco no cambia el objeto fisico analizado."
        en: "m ensures that the frame correction is compared against the same body inertia in both approaches; changing frames does not change the physical object being analyzed."
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: m solo es interpretable dentro del modelo elegido.\r
        en: m is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de m.\r
        en: The graph must reflect the role of m visually.\r
    likely_errors:\r
    - id: m_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas m con otra magnitud cercana del problema.\r
        en: Do not confuse m with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa m para enlazar con el siguiente paso de interpretacion.\r
        en: Use m to connect with the next interpretation step.\r
  F_res:\r
    summary_rules:\r
    - id: F_res_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F_res resume una lectura fisica relevante del leaf.\r
        en: F_res summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: F_res_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que F_res sea coherente con unidades y contexto.\r
        en: Check that F_res is coherent with units and context.\r
    physical_reading_rules:
    - id: F_res_physical
      when: 'true'
      status: info
      text:
        es: "F_res debe leerse igual en ambos marcos porque recoge solo interacciones reales; lo que cambia entre ecuaciones es la aceleracion usada y la presencia de F_fict."
        en: "F_res must be read the same way in both frames because it contains only real interactions; what changes between equations is the acceleration used and the presence of F_fict."
    model_validity_rules:\r
    - id: F_res_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: F_res solo es interpretable dentro del modelo elegido.\r
        en: F_res is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: F_res_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de F_res.\r
        en: The graph must reflect the role of F_res visually.\r
    likely_errors:\r
    - id: F_res_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas F_res con otra magnitud cercana del problema.\r
        en: Do not confuse F_res with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: F_res_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa F_res para enlazar con el siguiente paso de interpretacion.\r
        en: Use F_res to connect with the next interpretation step.\r
`;export{e as default};
