const r=`version: 1\r
id: interpretacion-momentos-tipicos\r
leaf_id: momentos-tipicos\r
nombre:\r
  es: Interpretacion de momentos tipicos\r
  en: Interpretation of standard moments\r
author: phyxio\r
scope:\r
  es: lectura numerica, comparacion entre geometrias y errores comunes de ejes y unidades\r
  en: numerical reading, geometry comparison, and common axis and unit mistakes\r
dependencies:\r
  magnitudes:\r
  - I\r
  - L\r
  - R\r
  - a\r
  - b\r
  - m\r
  formulas:\r
  - aro-fino\r
  - barra-centro\r
  - barra-extremo\r
  - disco-macizo\r
  - esfera-maciza\r
  - placa-rectangular\r
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
      es: Coherencia fisica\r
      en: Physical coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura del grafico\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores comunes\r
      en: Common errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  I:\r
    summary_rules:\r
    - id: I_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I depende de la masa y de como esta distribuida respecto al eje.\r
        en: I depends on mass and on how it is distributed around the axis.\r
    coherence_rules:\r
    - id: I_coherence_positive\r
      when: I > 0\r
      status: ok\r
      text:\r
        es: Un momento de inercia fisico debe ser positivo.\r
        en: A physical moment of inertia must be positive.\r
    physical_reading_rules:\r
    - id: I_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Geometrias con masa lejos del eje producen mayor I.\r
        en: Geometries with mass farther from axis produce larger I.\r
    model_validity_rules:\r
    - id: I_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Valido para solidos rigidos y densidad aproximadamente uniforme.\r
        en: Valid for rigid solids and approximately uniform density.\r
    graph_rules:\r
    - id: I_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El grafico debe reflejar crecimiento lineal con m y cuadratico con dimension lineal.\r
        en: Graph behavior should show linear growth with m and quadratic growth with linear size.\r
    likely_errors:\r
    - id: I_error_axis\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: usar formula de un eje distinto al del problema.'\r
        en: 'Common error: using a formula for an axis different from the problem axis.'\r
    next_step_rules:\r
    - id: I_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa I en tau = I alpha para conectar con dinamica rotacional.\r
        en: Use I in tau = I alpha to connect with rotational dynamics.\r
  R:\r
    summary_rules:\r
    - id: R_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: R controla fuertemente I por su dependencia cuadratica.\r
        en: R strongly controls I due to its quadratic dependence.\r
    coherence_rules:\r
    - id: R_coherence_positive\r
      when: R > 0\r
      status: ok\r
      text:\r
        es: El radio o dimension lineal debe ser positiva.\r
        en: Radius or linear size must be positive.\r
    physical_reading_rules:\r
    - id: R_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Incrementar R aumenta la resistencia al giro de forma notable.\r
        en: Increasing R raises rotational resistance significantly.\r
    model_validity_rules:\r
    - id: R_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica que R represente la distancia correcta al eje real.\r
        en: Verify R represents the correct distance to the actual axis.\r
    graph_rules:\r
    - id: R_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Las curvas I-R deben mostrar tendencia parabola.\r
        en: I-R curves should show a parabola trend.\r
    likely_errors:\r
    - id: R_error_diameter\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: confundir radio con diametro.'\r
        en: 'Common error: confusing radius with diameter.'\r
    next_step_rules:\r
    - id: R_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta resultados entre disco, aro y esfera para el mismo R.\r
        en: Compare disk, ring, and sphere results for the same R.\r
  L:\r
    summary_rules:\r
    - id: L_summary\r
      when: always\r
      status: info\r
      text:\r
        es: 'L: lectura resumida disponible.'\r
        en: 'L: summary reading available.'\r
    coherence_rules:\r
    - id: L_coherence\r
      when: always\r
      status: info\r
      text:\r
        es: 'L: verificar coherencia con el resto de variables.'\r
        en: 'L: check coherence with the rest of the variables.'\r
    physical_reading_rules:\r
    - id: L_physical\r
      when: always\r
      status: info\r
      text:\r
        es: 'L: interpretar en el contexto f?sico del problema.'\r
        en: 'L: interpret within the physical context of the problem.'\r
    model_validity_rules:\r
    - id: L_validity\r
      when: always\r
      status: info\r
      text:\r
        es: 'L: confirmar hip?tesis y rango de validez del modelo.'\r
        en: 'L: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: L_graph\r
      when: always\r
      status: info\r
      text:\r
        es: 'L: revisar correspondencia con la representaci?n gr?fica.'\r
        en: 'L: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: L_likely_error\r
      when: always\r
      status: warn\r
      text:\r
        es: 'Error com?n: usar L sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using L without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: L_next_step\r
      when: always\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar L con una ecuaci?n independiente.'\r
        en: 'Next step: cross-check L with an independent equation.'\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: lectura resumida disponible.'\r
        en: 'm: summary reading available.'\r
    coherence_rules:\r
    - id: m_coherence\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: verificar coherencia con el resto de variables.'\r
        en: 'm: check coherence with the rest of the variables.'\r
    physical_reading_rules:\r
    - id: m_physical\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: interpretar en el contexto f?sico del problema.'\r
        en: 'm: interpret within the physical context of the problem.'\r
    model_validity_rules:\r
    - id: m_validity\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: confirmar hip?tesis y rango de validez del modelo.'\r
        en: 'm: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: m_graph\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: revisar correspondencia con la representaci?n gr?fica.'\r
        en: 'm: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: m_likely_error\r
      when: always\r
      status: warn\r
      text:\r
        es: 'Error com?n: usar m sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using m without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: m_next_step\r
      when: always\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar m con una ecuaci?n independiente.'\r
        en: 'Next step: cross-check m with an independent equation.'\r
`;export{r as default};
