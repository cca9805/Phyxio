const e=`version: 2\r
id: interpretacion-trabajo\r
leaf_id: trabajo\r
nombre:\r
  es: Interpretacion de trabajo mecanico\r
  en: Interpretation of mechanical work\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: fundamentos\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo\r
dependencies:\r
  formulas:\r
  - trabajo_fuerza_constante\r
  - angulo_desde_trabajo\r
  - trabajo_neto_sumatoria\r
  - teorema_trabajo_energia\r
  magnitudes:\r
  - W\r
  - F\r
  - d\r
  - theta\r
  - Wnet\r
  - dK\r
output_contract:\r
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
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
      es: Lectura estructural\r
      en: Structural reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  W:\r
    summary_rules:\r
    - id: w_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si W > 0 el sistema recibe energia mecanica; si W < 0 la cede; y si W = 0 no hay transferencia neta por esa fuerza en ese tramo.\r
        en: If W > 0 the system receives mechanical energy; if W < 0 it gives it away; if W = 0 there is no net transfer by that force on that segment.\r
    - id: w_summary_causal\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Esa lectura depende causalmente de la orientacion relativa, porque theta fija la proyeccion efectiva de F sobre d y por tanto el signo y escala de W.\r
        en: This reading is causal because theta sets the effective projection of F on d, which determines the sign and scale of W.\r
    physical_reading_rules:\r
    - id: w_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: W positiva aporta energia al movimiento; W negativa la extrae; W nula no cambia el presupuesto cinetico por esa fuerza.\r
        en: Positive W adds energy to motion; negative W removes it; zero W means no kinetic-budget change by that force.\r
    coherence_rules:\r
    - id: w_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de W debe ser coherente con el signo de cos(theta).\r
        en: The sign of W must be coherent with the sign of cos(theta).\r
    model_validity_rules:\r
    - id: w_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura es valida cuando F y d corresponden al mismo tramo y sistema.\r
        en: The reading is valid when F and d correspond to the same segment and system.\r
    graph_rules:\r
    - id: w_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Aunque no haya grafico declarado, interpreta W como proyeccion efectiva de la fuerza sobre el desplazamiento.\r
        en: Even without a declared graph, interpret W as the effective projection of force on displacement.\r
    likely_errors:\r
    - id: w_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error comun: usar solo F por d sin considerar theta."\r
        en: "Common mistake: using only F times d without considering theta."\r
    next_step_rules:\r
    - id: w_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras calcular W, verifica si debes sumar otras contribuciones para hallar Wnet.\r
        en: After computing W, check whether you must add other contributions to obtain Wnet.\r
  F:\r
    summary_rules:\r
    - id: f_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F aporta intensidad de interaccion, pero no determina por si sola el trabajo.\r
        en: F provides interaction intensity, but does not determine work by itself.\r
    physical_reading_rules:\r
    - id: f_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A igual F, cambios en theta o d pueden invertir o anular W.\r
        en: For fixed F, changes in theta or d can invert or cancel W.\r
    coherence_rules:\r
    - id: f_coherence\r
      when: F >= 0\r
      status: ok\r
      text:\r
        es: F se interpreta como modulo no negativo.\r
        en: F is interpreted as a non-negative magnitude.\r
    model_validity_rules:\r
    - id: f_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si F varia notablemente en el tramo, conviene cambiar a modelo de fuerza variable.\r
        en: If F varies strongly along the segment, switch to a variable-force model.\r
    graph_rules:\r
    - id: f_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: F entra como amplitud de la proyeccion efectiva sobre d.\r
        en: F enters as the amplitude of the effective projection over d.\r
    likely_errors:\r
    - id: f_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: confundir modulo de F con su componente paralela al desplazamiento."\r
        en: "Frequent error: confusing force magnitude with its displacement-parallel component."\r
    next_step_rules:\r
    - id: f_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisa theta y d antes de interpretar F en terminos de trabajo.\r
        en: Check theta and d before interpreting F in work terms.\r
  d:\r
    summary_rules:\r
    - id: d_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: d fija la escala espacial de la transferencia energetica por trabajo.\r
        en: d sets the spatial scale of work-based energy transfer.\r
    physical_reading_rules:\r
    - id: d_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si d es nula, el trabajo de esa fuerza es nulo aunque la fuerza exista.\r
        en: If d is zero, that force does zero work even if the force exists.\r
    coherence_rules:\r
    - id: d_coherence\r
      when: d >= 0\r
      status: ok\r
      text:\r
        es: d es no negativa como magnitud en este leaf.\r
        en: d is non-negative as a magnitude in this leaf.\r
    model_validity_rules:\r
    - id: d_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe usarse el desplazamiento del punto de aplicacion de la fuerza considerada.\r
        en: Use the displacement of the application point of the considered force.\r
    graph_rules:\r
    - id: d_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: d define el eje de referencia para decidir el angulo efectivo theta.\r
        en: d defines the reference axis used to decide the effective angle theta.\r
    likely_errors:\r
    - id: d_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error comun: reemplazar desplazamiento por distancia recorrida sin justificar."\r
        en: "Common error: replacing displacement with path length without justification."\r
    next_step_rules:\r
    - id: d_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comprueba que d corresponde al mismo intervalo usado para F y theta.\r
        en: Check that d matches the same interval used for F and theta.\r
  theta:\r
    summary_rules:\r
    - id: theta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Theta controla la fraccion de F que realmente transfiere energia por trabajo.\r
        en: Theta controls the fraction of F that actually transfers energy through work.\r
    physical_reading_rules:\r
    - id: theta_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Theta menor de 90 grados tiende a W positiva; mayor de 90 grados, a W negativa.\r
        en: Theta below 90 degrees tends to positive W; above 90 degrees, to negative W.\r
    coherence_rules:\r
    - id: theta_coherence\r
      when: 0 <= theta <= 3.1415926535\r
      status: ok\r
      text:\r
        es: Theta se mantiene en el rango fisico esperado para el modelo.\r
        en: Theta remains in the physically expected range for the model.\r
    model_validity_rules:\r
    - id: theta_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe corresponder al angulo entre F y d en el mismo instante o tramo modelado.\r
        en: It must correspond to the angle between F and d in the same modeled instant or segment.\r
    graph_rules:\r
    - id: theta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Theta sintetiza la geometria de la interaccion y gobierna el coseno de la formula.\r
        en: Theta summarizes interaction geometry and governs the cosine in the formula.\r
    likely_errors:\r
    - id: theta_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar el angulo con el eje equivocado y cambiar el signo de W."\r
        en: "Frequent error: using the angle with the wrong axis and flipping W sign."\r
    next_step_rules:\r
    - id: theta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras fijar theta, valida si el signo esperado de W coincide con la situacion fisica.\r
        en: After fixing theta, validate whether the expected W sign matches the physical scenario.\r
  Wnet:\r
    summary_rules:\r
    - id: wnet_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnet agrega los aportes de trabajo de todas las fuerzas relevantes.\r
        en: Wnet aggregates work contributions from all relevant forces.\r
    physical_reading_rules:\r
    - id: wnet_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su signo indica ganancia o perdida neta de presupuesto cinetico.\r
        en: Its sign indicates net gain or loss of kinetic budget.\r
    coherence_rules:\r
    - id: wnet_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe coincidir en signo y valor con dK cuando aplica el teorema.\r
        en: It must match dK in sign and value when the theorem applies.\r
    model_validity_rules:\r
    - id: wnet_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: No olvides incluir trabajos negativos por fuerzas resistentes.\r
        en: Do not forget negative work by resistive forces.\r
    graph_rules:\r
    - id: wnet_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wnet conecta este leaf con la lectura por estados energeticos.\r
        en: Wnet connects this leaf with state-based energetic reading.\r
    likely_errors:\r
    - id: wnet_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error comun: sumar modulos y perder el signo de cada contribucion."\r
        en: "Common error: summing magnitudes and losing each contribution sign."\r
    next_step_rules:\r
    - id: wnet_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Wnet para interpretar dK o para validar el resultado dinamico.\r
        en: Use Wnet to interpret dK or validate the dynamical result.\r
  dK:\r
    summary_rules:\r
    - id: dk_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dK expresa el cambio de energia cinetica entre estado inicial y final.\r
        en: dK expresses kinetic-energy change between initial and final states.\r
    physical_reading_rules:\r
    - id: dk_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dK positiva indica aumento de rapidez neta; dK negativa, frenado neto.\r
        en: Positive dK indicates net speed increase; negative dK indicates net braking.\r
    coherence_rules:\r
    - id: dk_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: dK debe compartir signo con Wnet.\r
        en: dK must share sign with Wnet.\r
    model_validity_rules:\r
    - id: dk_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Requiere mismo sistema y mismo intervalo al comparar estado inicial y final.\r
        en: Requires the same system and interval when comparing initial and final states.\r
    graph_rules:\r
    - id: dk_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dK es la lectura por estados que confirma el balance de trabajo.\r
        en: dK is the state-based reading that confirms the work balance.\r
    likely_errors:\r
    - id: dk_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: reportar solo modulo de dK y borrar su interpretacion causal."\r
        en: "Frequent error: reporting only the magnitude of dK and erasing its causal interpretation."\r
    next_step_rules:\r
    - id: dk_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si dK no coincide con Wnet, revisa signos, sistema y omisiones de fuerzas.\r
        en: If dK does not match Wnet, review signs, system choice, and omitted forces.\r
`;export{e as default};
