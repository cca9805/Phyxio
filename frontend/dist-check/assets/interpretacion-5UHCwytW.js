const e=`version: 2\r
id: interpretacion-principio-de-conservacion\r
leaf_id: principio-de-conservacion\r
nombre:\r
  es: Interpretacion del principio de conservacion\r
  en: Interpretation of the conservation principle\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: conservacion-de-la-energia\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/conservacion-de-la-energia/principio-de-conservacion\r
ui:\r
  enabled: true\r
  display_modes:\r
    calculator_inline: true\r
    graph_inline: true\r
    dedicated_tab: true\r
    modal: false\r
  labels:\r
    es: Interpretacion\r
    en: Interpretation\r
  priority_order:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
  inline_limits:\r
    max_messages: 3\r
dependencies:\r
  formulas:\r
  - conservacion_mecanica\r
  - energia_mecanica_total\r
  - balance_con_no_conservativas\r
  magnitudes:\r
  - Em\r
  - K\r
  - U\r
  - Ki\r
  - Kf\r
  - Ui\r
  - Uf\r
  - Wnc\r
global_context:\r
  physical_domain:\r
    es: Balance energetico estado a estado en mecanica clasica.\r
    en: State-to-state energetic balance in classical mechanics.\r
  axis_convention:\r
    es: Definir una unica referencia para potencial y una convencion de trabajo.\r
    en: Define one single potential baseline and one work-sign convention.\r
  standard_assumptions:\r
  - estados inicial y final bien definidos\r
  - modelo clasico no relativista\r
  - referencias energeticas consistentes\r
  standard_warnings:\r
  - no imponer conservacion si hay disipacion apreciable\r
  - no mezclar referencias de potencial entre estados\r
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
  Kf:\r
    magnitude_type: scalar\r
    semantic_role:\r
      es: energia cinetica final inferida desde el balance\r
      en: final kinetic energy inferred from balance\r
    summary_rules:\r
    - id: kf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Kf resume como se repartio la energia total entre estado inicial y final.\r
        en: Kf summarizes how total energy was distributed between initial and final states.\r
    physical_reading_rules:\r
    - id: kf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Kf crece, otra contribucion energetica disminuye o hubo aporte no conservativo positivo.\r
        en: If Kf increases, another energy contribution decreases or there was positive non-conservative input.\r
    coherence_rules:\r
    - id: kf_coherence\r
      when: Kf >= 0\r
      status: ok\r
      text:\r
        es: Kf no negativa, consistente con energia cinetica clasica.\r
        en: Nonnegative Kf, consistent with classical kinetic energy.\r
    - id: kf_coherence_neg\r
      when: Kf < 0\r
      status: warning\r
      text:\r
        es: Kf negativa indica error de signos, unidades o referencia.\r
        en: Negative Kf indicates sign, unit, or baseline errors.\r
    model_validity_rules:\r
    - id: kf_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Valida Kf solo si el modelo elegido incluye las transferencias relevantes.\r
        en: Validate Kf only if the selected model includes relevant transfers.\r
    graph_rules:\r
    - id: kf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, K y U deben intercambiarse manteniendo o variando K+U segun Wnc.\r
        en: In Coord, K and U should exchange while K+U stays constant or changes according to Wnc.\r
    likely_errors:\r
    - id: kf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar altura final y velocidad final sin coherencia de referencia."\r
        en: "Frequent error: using final height and final speed with inconsistent baselines."\r
    next_step_rules:\r
    - id: kf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta Kf con el dato experimental o con el limite fisico del sistema.\r
        en: Compare Kf with experimental data or physical system limits.\r
  Em:\r
    magnitude_type: scalar\r
    semantic_role:\r
      es: contenido mecanico total de un estado\r
      en: total mechanical content of a state\r
    summary_rules:\r
    - id: em_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Em permite separar que parte del problema es definicion de estado y que parte es conservacion.\r
        en: Em separates what in the problem is state definition and what is conservation.\r
    physical_reading_rules:\r
    - id: em_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Em constante no implica K constante; implica compensacion entre K y U.\r
        en: Constant Em does not imply constant K; it implies compensation between K and U.\r
    coherence_rules:\r
    - id: em_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Mantener una sola referencia de potencial es obligatorio para interpretar Em.\r
        en: Keeping a single potential baseline is mandatory to interpret Em.\r
    model_validity_rules:\r
    - id: em_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si aparece disipacion, Em deja de conservarse y debe usarse Wnc.\r
        en: If dissipation appears, Em is no longer conserved and Wnc must be used.\r
    graph_rules:\r
    - id: em_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La curva Em ideal es horizontal; con Wnc cambia nivel.\r
        en: Ideal Em is a horizontal curve; with Wnc it shifts level.\r
    likely_errors:\r
    - id: em_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: confundir Em con energia interna o termica del sistema."\r
        en: "Frequent error: confusing Em with internal or thermal energy."\r
    next_step_rules:\r
    - id: em_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Decide si el siguiente modelo requiere separar energia mecanica y no mecanica.\r
        en: Decide whether the next model must separate mechanical and non-mechanical energy.\r
  Uf:\r
    magnitude_type: scalar\r
    semantic_role:\r
      es: energia potencial final respecto a referencia fija\r
      en: final potential energy under a fixed baseline\r
    summary_rules:\r
    - id: uf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Uf cierra el estado final junto con Kf y define la lectura de balance.\r
        en: Uf closes the final state together with Kf and supports balance reading.\r
    physical_reading_rules:\r
    - id: uf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambiar Uf sin cambiar referencia altera la interpretación causal del resultado.\r
        en: Changing Uf without changing baseline alters the causal interpretation.\r
    coherence_rules:\r
    - id: uf_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica que Ui y Uf compartan la misma referencia potencial.\r
        en: Verify that Ui and Uf share the same potential baseline.\r
    model_validity_rules:\r
    - id: uf_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La validez del modelo depende de mantener coherencia de referencia.\r
        en: Model validity depends on baseline consistency.\r
    graph_rules:\r
    - id: uf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Uf debe leerse en el estado final sin saltos de referencia.\r
        en: In Coord, Uf should be read at final state without baseline jumps.\r
    likely_errors:\r
    - id: uf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: cambiar el cero potencial entre estados."\r
        en: "Frequent error: changing the potential zero between states."\r
    next_step_rules:\r
    - id: uf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Después de validar Uf, contrasta el cierre con Kf y Wnc.\r
        en: After validating Uf, contrast closure with Kf and Wnc.\r
  Wnc:\r
    magnitude_type: scalar\r
    semantic_role:\r
      es: intercambio no conservativo neto entre estados\r
      en: net non-conservative exchange between states\r
    summary_rules:\r
    - id: wnc_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnc cuantifica la desviación respecto al caso conservativo ideal.\r
        en: Wnc quantifies deviation from the ideal conservative case.\r
    physical_reading_rules:\r
    - id: wnc_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnc negativo sugiere disipación; positivo sugiere aporte externo.\r
        en: Negative Wnc suggests dissipation; positive Wnc suggests external input.\r
    coherence_rules:\r
    - id: wnc_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisa el convenio de signos antes de interpretar Wnc.\r
        en: Check sign convention before interpreting Wnc.\r
    model_validity_rules:\r
    - id: wnc_validity\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Si Wnc domina, no uses conclusión de conservación ideal sin matizar.\r
        en: If Wnc dominates, do not use strict ideal-conservation conclusions.\r
    graph_rules:\r
    - id: wnc_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, un cambio de nivel de K+U indica Wnc acumulado.\r
        en: In Coord, a level shift in K+U indicates accumulated Wnc.\r
    likely_errors:\r
    - id: wnc_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: tratar Wnc como ruido sin interpretación física."\r
        en: "Frequent error: treating Wnc as noise without physical interpretation."\r
    next_step_rules:\r
    - id: wnc_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras estimar Wnc, decide si conviene modelo dinámico adicional.\r
        en: After estimating Wnc, decide whether an additional dynamic model is needed.\r
cross_checks: []\r
error_patterns: []\r
graph_binding:\r
  enabled: true\r
  preferred_type: Coord\r
mini_graph:\r
  enabled: true\r
  type: Coord\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
`;export{e as default};
