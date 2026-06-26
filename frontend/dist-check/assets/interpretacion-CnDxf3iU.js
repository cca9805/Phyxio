const e=`version: 2\r
id: interpretacion-sistemas-conservativos\r
leaf_id: sistemas-conservativos\r
nombre:\r
  es: Interpretacion de sistemas conservativos\r
  en: Interpretation of conservative systems\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: conservacion-de-la-energia\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/conservacion-de-la-energia/sistemas-conservativos\r
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
  - trabajo_conservativo\r
  - conservacion_energia_mecanica\r
  - estados_conservativos\r
  - extension_no_conservativa\r
  magnitudes:\r
  - Em\r
  - K\r
  - U\r
  - Wc\r
  - dU\r
  - Wnc\r
  - Ki\r
  - Kf\r
  - Ui\r
  - Uf\r
global_context:\r
  physical_domain:\r
    es: Balance energetico entre estados de sistemas mecanicos con y sin intercambio no conservativo.\r
    en: State-to-state energy balance in mechanical systems with and without non-conservative exchange.\r
  axis_convention:\r
    es: Mantener una sola referencia para U y un convenio de signos explicito para Wc y Wnc.\r
    en: Keep one baseline for U and an explicit sign convention for Wc and Wnc.\r
  standard_assumptions:\r
  - mismo sistema en estados inicial y final\r
  - referencias energeticas consistentes\r
  - modelo clasico no relativista\r
  standard_warnings:\r
  - no imponer conservacion ideal si Wnc es apreciable\r
  - no cambiar el cero potencial entre Ui y Uf\r
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
  Em:\r
    summary_rules:\r
    - id: em_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Em resume el contenido mecanico total del estado si K y U fueron definidos con la misma referencia.\r
        en: Em summarizes total mechanical content of the state if K and U were defined under the same baseline.\r
    physical_reading_rules:\r
    - id: em_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Em constante no implica K constante; implica compensacion entre movimiento y configuracion.\r
        en: Constant Em does not imply constant K; it implies compensation between motion and configuration.\r
    coherence_rules:\r
    - id: em_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpreta Em solo si la referencia de U se mantuvo fija.\r
        en: Interpret Em only if the baseline for U remained fixed.\r
    model_validity_rules:\r
    - id: em_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si aparece Wnc apreciable, Em deja de ser constante y pasa a ser una magnitud de balance, no un invariante.\r
        en: If appreciable Wnc appears, Em stops being constant and becomes a balance quantity rather than an invariant.\r
    graph_rules:\r
    - id: em_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Em debe verse horizontal en el caso ideal y desplazada si Wnc no es nula.\r
        en: In Coord, Em should appear horizontal in the ideal case and shifted if Wnc is non-zero.\r
    likely_errors:\r
    - id: em_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: tratar Em como si fuera siempre positiva sin revisar la referencia de U."\r
        en: "Common error: treating Em as always positive without checking the baseline for U."\r
    next_step_rules:\r
    - id: em_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Después de fijar Em, decide si el problema es conservativo ideal o requiere incluir Wnc.\r
        en: After fixing Em, decide whether the problem is ideally conservative or requires including Wnc.\r
  K:\r
    summary_rules:\r
    - id: k_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: K indica la parte del presupuesto mecanico asociada al movimiento.\r
        en: K indicates the part of the mechanical budget associated with motion.\r
    physical_reading_rules:\r
    - id: k_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si K aumenta en un sistema conservativo, U debe disminuir o aparecer Wnc positiva.\r
        en: If K increases in a conservative system, U must decrease or positive Wnc must appear.\r
    coherence_rules:\r
    - id: k_coherence\r
      when: K >= 0\r
      status: ok\r
      text:\r
        es: K no negativa, consistente con energia cinetica clasica.\r
        en: Non-negative K, consistent with classical kinetic energy.\r
    model_validity_rules:\r
    - id: k_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: K por si sola no decide si hay conservacion; debe compararse con U y Wnc.\r
        en: K alone does not decide whether there is conservation; it must be compared with U and Wnc.\r
    graph_rules:\r
    - id: k_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, la curva de K debe intercambiarse con la de U dentro del mismo balance.\r
        en: In Coord, the K curve should exchange with the U curve within the same balance.\r
    likely_errors:\r
    - id: k_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: pensar que conservar Em obliga a mantener K constante."\r
        en: "Common error: thinking that conserving Em forces K to remain constant."\r
    next_step_rules:\r
    - id: k_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta K con U para leer si el sistema acelera, frena o solo cambia de configuracion.\r
        en: Contrast K with U to read whether the system speeds up, slows down, or only changes configuration.\r
  U:\r
    summary_rules:\r
    - id: u_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: U traduce la configuracion del sistema a lenguaje energetico.\r
        en: U translates system configuration into energetic language.\r
    physical_reading_rules:\r
    - id: u_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una caida de U puede convertirse en aumento de K o compensar Wnc negativa.\r
        en: A decrease in U may turn into an increase of K or compensate negative Wnc.\r
    coherence_rules:\r
    - id: u_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: U solo es comparable entre estados si la referencia se mantuvo constante.\r
        en: U is only comparable between states if the baseline remained constant.\r
    model_validity_rules:\r
    - id: u_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa U solo cuando la fuerza relevante admite potencial bien definido.\r
        en: Use U only when the relevant force admits a well-defined potential.\r
    graph_rules:\r
    - id: u_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, la curva U debe caer o subir de manera coherente con K y Em.\r
        en: In Coord, the U curve should decrease or increase consistently with K and Em.\r
    likely_errors:\r
    - id: u_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: cambiar el cero potencial entre el estado inicial y el final."\r
        en: "Common error: changing the potential zero between the initial and final states."\r
    next_step_rules:\r
    - id: u_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras fijar U, compara su variacion con Wc o con el balance entre estados.\r
        en: After fixing U, compare its variation with Wc or the state-to-state balance.\r
  Wc:\r
    summary_rules:\r
    - id: wc_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wc mide el aporte o recuperacion energetica de la parte conservativa del problema.\r
        en: Wc measures energetic delivery or recovery by the conservative part of the problem.\r
    physical_reading_rules:\r
    - id: wc_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wc positiva suele acompanar una disminucion de U.\r
        en: Positive Wc usually accompanies a decrease in U.\r
    coherence_rules:\r
    - id: wc_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de Wc debe ser opuesto al de dU.\r
        en: The sign of Wc must be opposite to that of dU.\r
    model_validity_rules:\r
    - id: wc_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wc no sustituye al trabajo total si tambien intervienen rozamiento o motores.\r
        en: Wc does not replace total work if friction or motors also intervene.\r
    graph_rules:\r
    - id: wc_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En una lectura grafica, Wc se interpreta por el cambio entre niveles de U.\r
        en: In a graphical reading, Wc is interpreted through the change between U levels.\r
    likely_errors:\r
    - id: wc_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: sumar Wc y Wnc sin distinguir su papel fisico."\r
        en: "Common error: adding Wc and Wnc without distinguishing their physical roles."\r
    next_step_rules:\r
    - id: wc_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Wc junto con dU para decidir si el intercambio fue puramente conservativo.\r
        en: Use Wc together with dU to decide whether the exchange was purely conservative.\r
  dU:\r
    summary_rules:\r
    - id: du_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dU cuantifica el salto configuracional entre estados.\r
        en: dU quantifies the configurational jump between states.\r
    physical_reading_rules:\r
    - id: du_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dU positiva indica aumento de energia potencial final respecto al estado inicial.\r
        en: Positive dU indicates higher final potential energy than the initial state.\r
    coherence_rules:\r
    - id: du_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: dU debe compararse con Wc, no con el trabajo total si hay Wnc.\r
        en: dU should be compared with Wc, not with total work if Wnc is present.\r
    model_validity_rules:\r
    - id: du_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Solo tiene sentido si Ui y Uf se evaluaron con la misma referencia.\r
        en: It only makes sense if Ui and Uf were evaluated with the same baseline.\r
    graph_rules:\r
    - id: du_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, dU se lee como separacion vertical entre Ui y Uf.\r
        en: In Coord, dU is read as the vertical separation between Ui and Uf.\r
    likely_errors:\r
    - id: du_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: invertir estado inicial y final sin corregir el signo de dU."\r
        en: "Common error: swapping initial and final states without correcting the sign of dU."\r
    next_step_rules:\r
    - id: du_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Relaciona dU con Wc para cerrar la lectura conservativa local.\r
        en: Relate dU to Wc to close the local conservative reading.\r
  Wnc:\r
    summary_rules:\r
    - id: wnc_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnc mide cuanto se aparta el problema del caso conservativo ideal.\r
        en: Wnc measures how far the problem departs from the ideal conservative case.\r
    physical_reading_rules:\r
    - id: wnc_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnc negativa suele indicar disipacion; Wnc positiva, aporte externo neto.\r
        en: Negative Wnc usually indicates dissipation; positive Wnc, net external input.\r
    coherence_rules:\r
    - id: wnc_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si Wnc es cero, el balance debe reducirse al caso conservativo ideal.\r
        en: If Wnc is zero, the balance should reduce to the ideal conservative case.\r
    model_validity_rules:\r
    - id: wnc_validity\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Si Wnc domina, la conclusion del problema ya no es conservacion estricta sino balance con intercambio.\r
        en: If Wnc dominates, the problem conclusion is no longer strict conservation but balance with exchange.\r
    graph_rules:\r
    - id: wnc_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, un cambio de nivel de Em representa Wnc acumulado.\r
        en: In Coord, a level shift of Em represents accumulated Wnc.\r
    likely_errors:\r
    - id: wnc_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: declarar un sistema conservativo despues de calcular Wnc distinta de cero."\r
        en: "Common error: calling a system conservative after computing non-zero Wnc."\r
    next_step_rules:\r
    - id: wnc_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras estimar Wnc, decide si conviene un modelo dinamico mas detallado o basta el balance energetico.\r
        en: After estimating Wnc, decide whether a more detailed dynamic model is needed or the energy balance is sufficient.\r
  Ki:\r
    summary_rules:\r
    - id: ki_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ki fija la parte de movimiento con la que el sistema entra al proceso.\r
        en: Ki fixes the motion contribution with which the system enters the process.\r
    physical_reading_rules:\r
    - id: ki_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ki grande exige que Ui, Kf, Uf o Wnc compensen ese presupuesto inicial.\r
        en: Large Ki requires Ui, Kf, Uf, or Wnc to compensate that initial budget.\r
    coherence_rules:\r
    - id: ki_coherence\r
      when: Ki >= 0\r
      status: ok\r
      text:\r
        es: Ki no negativa, consistente con energia cinetica clasica.\r
        en: Non-negative Ki, consistent with classical kinetic energy.\r
    model_validity_rules:\r
    - id: ki_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ki debe pertenecer al mismo sistema que Ui, Kf y Uf.\r
        en: Ki must belong to the same system as Ui, Kf, and Uf.\r
    graph_rules:\r
    - id: ki_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Ki se lee como nivel inicial de la curva K.\r
        en: In Coord, Ki is read as the initial level of the K curve.\r
    likely_errors:\r
    - id: ki_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar una rapidez inicial de otro instante o de otro cuerpo."\r
        en: "Common error: using an initial speed from another instant or another body."\r
    next_step_rules:\r
    - id: ki_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Compara Ki con Ui para identificar el reparto inicial de Em.\r
        en: Compare Ki with Ui to identify the initial partition of Em.\r
  Kf:\r
    summary_rules:\r
    - id: kf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Kf expresa el presupuesto de movimiento con el que el sistema sale del proceso.\r
        en: Kf expresses the motion budget with which the system leaves the process.\r
    physical_reading_rules:\r
    - id: kf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Kf disminuye respecto a Ki, parte del presupuesto inicial paso a U o se perdio por Wnc negativa.\r
        en: If Kf decreases relative to Ki, part of the initial budget moved into U or was lost through negative Wnc.\r
    coherence_rules:\r
    - id: kf_coherence\r
      when: Kf >= 0\r
      status: ok\r
      text:\r
        es: Kf no negativa, consistente con energia cinetica final clasica.\r
        en: Non-negative Kf, consistent with classical final kinetic energy.\r
    model_validity_rules:\r
    - id: kf_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Kf solo es interpretable si el estado final esta bien definido dentro del mismo sistema.\r
        en: Kf is only interpretable if the final state is well defined within the same system.\r
    graph_rules:\r
    - id: kf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Kf aparece como nivel final de la curva K.\r
        en: In Coord, Kf appears as the final level of the K curve.\r
    likely_errors:\r
    - id: kf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: deducir Kf imponiendo conservacion ideal cuando Wnc ya no es nula."\r
        en: "Common error: inferring Kf by imposing ideal conservation when Wnc is already non-zero."\r
    next_step_rules:\r
    - id: kf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta Kf con Uf para interpretar el estado final completo.\r
        en: Contrast Kf with Uf to interpret the full final state.\r
  Ui:\r
    summary_rules:\r
    - id: ui_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ui fija la parte configuracional con la que arranca el sistema.\r
        en: Ui fixes the configurational contribution with which the system starts.\r
    physical_reading_rules:\r
    - id: ui_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ui grande permite convertir configuracion en movimiento o compensar Wnc.\r
        en: Large Ui allows configuration to turn into motion or compensate Wnc.\r
    coherence_rules:\r
    - id: ui_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Ui solo puede compararse con Uf si la referencia es la misma.\r
        en: Ui can only be compared with Uf if the baseline is the same.\r
    model_validity_rules:\r
    - id: ui_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Ui solo si el potencial del estado inicial esta bien definido.\r
        en: Use Ui only if the initial-state potential is well defined.\r
    graph_rules:\r
    - id: ui_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Ui se lee como nivel inicial de la curva U.\r
        en: In Coord, Ui is read as the initial level of the U curve.\r
    likely_errors:\r
    - id: ui_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: redefinir el cero potencial entre estados y conservar numeros como si nada."\r
        en: "Common error: redefining the potential zero between states and keeping numbers as if nothing changed."\r
    next_step_rules:\r
    - id: ui_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Combina Ui con Ki para cerrar el presupuesto inicial Em.\r
        en: Combine Ui with Ki to close the initial Em budget.\r
  Uf:\r
    summary_rules:\r
    - id: uf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Uf cierra la lectura configuracional del estado final.\r
        en: Uf closes the configurational reading of the final state.\r
    physical_reading_rules:\r
    - id: uf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Uf mayor que Ui indica que parte del presupuesto energetico termino almacenado en configuracion.\r
        en: Uf greater than Ui indicates part of the energy budget ended stored in configuration.\r
    coherence_rules:\r
    - id: uf_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Uf debe usar la misma referencia que Ui y U.\r
        en: Uf must use the same baseline as Ui and U.\r
    model_validity_rules:\r
    - id: uf_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Uf requiere que el potencial final siga siendo interpretable dentro del mismo modelo.\r
        en: Uf requires the final potential to remain interpretable within the same model.\r
    graph_rules:\r
    - id: uf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Uf se lee como nivel final de la curva U.\r
        en: In Coord, Uf is read as the final level of the U curve.\r
    likely_errors:\r
    - id: uf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: concluir sobre Uf con una referencia distinta de la usada en Ui."\r
        en: "Common error: drawing conclusions about Uf with a baseline different from the one used in Ui."\r
    next_step_rules:\r
    - id: uf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta Uf con Kf y Wnc para leer como termina el balance mecanico.\r
        en: Contrast Uf with Kf and Wnc to read how the mechanical balance ends.\r
graph_binding:\r
  enabled: true\r
  preferred_type: Coord\r
mini_graph:\r
  enabled: true\r
  type: Coord\r
`;export{e as default};
