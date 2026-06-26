const e=`version: 2\r
id: interpretacion-intensidad-de-corriente\r
leaf_id: intensidad-de-corriente\r
nombre:\r
  es: Interpretacion de intensidad de corriente\r
  en: Interpretation of electric current\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-electrica\r
  parent_id: corriente-electrica\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/intensidad-de-corriente\r
dependencies:\r
  formulas:\r
  - definicion_corriente\r
  - densidad_corriente\r
  - corriente_portadores\r
  magnitudes:\r
  - I\r
  - q\r
  - t\r
  - J\r
  - A\r
  - n\r
  - v\r
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
  I:\r
    summary_rules:\r
    - id: i_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La intensidad resume la tasa de transporte neto de carga en el intervalo observado.\r
        en: Current summarizes net charge transport rate over the observed interval.\r
    coherence_rules:\r
    - id: i_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser consistente con la relacion entre carga transportada y tiempo.\r
        en: It must be consistent with the relation between transported charge and time.\r
    physical_reading_rules:\r
    - id: i_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Una I alta puede ser admisible o riesgosa segun el area de conduccion y el regimen termico.\r
        en: High I may be acceptable or risky depending on conduction area and thermal regime.\r
    model_validity_rules:\r
    - id: i_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La lectura media requiere intervalo temporal representativo del fenomeno real.\r
        en: Average interpretation requires a time interval representative of the real phenomenon.\r
    graph_rules:\r
    - id: i_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En una curva q-t, la pendiente media del tramo corresponde a I.\r
        en: In a q-t curve, the segment average slope corresponds to I.\r
    likely_errors:\r
    - id: i_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: tratar intensidad media de un intervalo como valor instantaneo universal."\r
        en: "Common error: treating interval-average current as universal instantaneous value."\r
    next_step_rules:\r
    - id: i_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contrasta I con limites de diseno termico y con la seccion disponible.\r
        en: Compare I with thermal design limits and available area.\r
\r
  J:\r
    summary_rules:\r
    - id: j_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La densidad de corriente expresa cuanta intensidad circula por unidad de area efectiva.\r
        en: Current density expresses how much current flows per unit effective area.\r
    coherence_rules:\r
    - id: j_coherence\r
      when: "A > 0"\r
      status: ok\r
      text:\r
        es: Si el area es positiva, J debe derivar de I normalizada por esa area.\r
        en: If area is positive, J must derive from I normalized by that area.\r
    physical_reading_rules:\r
    - id: j_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: J elevada suele asociarse a mayor calentamiento local y a exigencia material.\r
        en: High J usually implies larger local heating and material stress.\r
    model_validity_rules:\r
    - id: j_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Requiere estimar area de conduccion real, no solo geometria nominal.\r
        en: It requires estimating real conduction area, not only nominal geometry.\r
    graph_rules:\r
    - id: j_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Comparar J entre dos disenos permite detectar sobrecarga local incluso con I similar.\r
        en: Comparing J across two designs reveals local overload even with similar I.\r
    likely_errors:\r
    - id: j_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar area geometrica total cuando solo parte de la seccion conduce."\r
        en: "Common error: using total geometric area when only part of the section conducts."\r
    next_step_rules:\r
    - id: j_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Verifica si J calculada es compatible con limites del material y disipacion.\r
        en: Verify whether computed J is compatible with material and dissipation limits.\r
\r
  q:\r
    summary_rules:\r
    - id: q_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: q representa carga acumulada transportada durante una ventana temporal definida.\r
        en: q represents accumulated transported charge over a defined time window.\r
    coherence_rules:\r
    - id: q_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe concordar con el producto de intensidad media por tiempo de observacion.\r
        en: It must agree with average current times observation time.\r
    physical_reading_rules:\r
    - id: q_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Una misma q puede corresponder a corrientes muy distintas segun el intervalo usado.\r
        en: The same q can correspond to very different currents depending on interval length.\r
    model_validity_rules:\r
    - id: q_validity\r
      when: "t > 0"\r
      status: ok\r
      text:\r
        es: La interpretacion requiere intervalo temporal positivo y bien delimitado.\r
        en: Interpretation requires a positive, well-delimited time interval.\r
    graph_rules:\r
    - id: q_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: El area bajo I(t) en el intervalo entrega q transportada.\r
        en: Area under I(t) over the interval gives transported q.\r
    likely_errors:\r
    - id: q_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: reportar q sin indicar intervalo temporal asociado."\r
        en: "Common error: reporting q without indicating associated time interval."\r
    next_step_rules:\r
    - id: q_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Acompana q con t para sostener una lectura fisica util de I.\r
        en: Pair q with t to support a physically useful reading of I.\r
\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: El tiempo fija la escala de promediado para interpretar flujo de carga.\r
        en: Time sets averaging scale for charge-flow interpretation.\r
    coherence_rules:\r
    - id: t_coherence\r
      when: "t >= 0"\r
      status: ok\r
      text:\r
        es: Se toma no negativo respecto al instante inicial de referencia.\r
        en: It is taken non-negative relative to initial reference instant.\r
    physical_reading_rules:\r
    - id: t_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Ventanas cortas y largas pueden describir comportamientos distintos de la misma senal.\r
        en: Short and long windows may describe different behaviors of the same signal.\r
    model_validity_rules:\r
    - id: t_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La validez del promedio depende de no mezclar regimenes fisicos incompatibles en la misma ventana.\r
        en: Average validity depends on not mixing incompatible physical regimes in one window.\r
    graph_rules:\r
    - id: t_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambiar la escala temporal del eje modifica la lectura de pendiente y de ruido.\r
        en: Changing time-axis scale modifies slope and noise interpretation.\r
    likely_errors:\r
    - id: t_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: confundir milisegundos con segundos al calcular I o q."\r
        en: "Common error: mixing milliseconds and seconds when computing I or q."\r
    next_step_rules:\r
    - id: t_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Establece una convencion unica de unidades temporales al inicio del problema.\r
        en: Set a single time-unit convention at problem start.\r
\r
  A:\r
    summary_rules:\r
    - id: a_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: El area de seccion gobierna la normalizacion de I para estimar J.\r
        en: Cross-sectional area controls I normalization to estimate J.\r
    coherence_rules:\r
    - id: a_coherence\r
      when: "A > 0"\r
      status: ok\r
      text:\r
        es: Debe permanecer positiva y coherente con la geometria efectiva.\r
        en: It must stay positive and consistent with effective geometry.\r
    physical_reading_rules:\r
    - id: a_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Reducir area a igual I incrementa esfuerzo local y sensibilidad termica.\r
        en: Reducing area at fixed I increases local stress and thermal sensitivity.\r
    model_validity_rules:\r
    - id: a_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: En conductores no uniformes conviene usar area efectiva y no solo nominal.\r
        en: For nonuniform conductors, effective rather than nominal area is preferred.\r
    graph_rules:\r
    - id: a_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: A aparece como parametro de escala al comparar J entre disenos.\r
        en: A appears as a scale parameter when comparing J across designs.\r
    likely_errors:\r
    - id: a_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: olvidar convertir mm^2 a m^2 antes de calcular J."\r
        en: "Common error: forgetting to convert mm^2 to m^2 before computing J."\r
    next_step_rules:\r
    - id: a_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Reporta siempre A junto con la unidad para evitar ambiguedad.\r
        en: Always report A with units to avoid ambiguity.\r
\r
  n:\r
    summary_rules:\r
    - id: n_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: n representa cuantos portadores libres contribuyen al transporte por volumen.\r
        en: n represents how many free carriers contribute to transport per volume.\r
    coherence_rules:\r
    - id: n_coherence\r
      when: "n >= 0"\r
      status: ok\r
      text:\r
        es: Debe ser no negativa y consistente con el material considerado.\r
        en: It must be non-negative and consistent with the selected material.\r
    physical_reading_rules:\r
    - id: n_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Variaciones de n explican diferencias de conduccion entre materiales.\r
        en: Changes in n explain conduction differences across materials.\r
    model_validity_rules:\r
    - id: n_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El uso de n media simplifica microheterogeneidades del material real.\r
        en: Using average n simplifies real material micro-heterogeneity.\r
    graph_rules:\r
    - id: n_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: n actua como factor de escala en la relacion micro-macro de corriente.\r
        en: n acts as a scaling factor in micro-macro current relation.\r
    likely_errors:\r
    - id: n_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: asumir n constante sin justificar rango de temperatura."\r
        en: "Common error: assuming constant n without justifying temperature range."\r
    next_step_rules:\r
    - id: n_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Declara supuestos de material cuando uses n para estimaciones.\r
        en: State material assumptions when using n for estimates.\r
\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: v de deriva captura el movimiento neto promedio de portadores.\r
        en: Drift v captures average net carrier motion.\r
    coherence_rules:\r
    - id: v_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser coherente con n, q y A al reconstruir I.\r
        en: It must be coherent with n, q, and A when reconstructing I.\r
    physical_reading_rules:\r
    - id: v_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Puede ser pequena incluso cuando I macroscopica es apreciable.\r
        en: It can be small even when macroscopic I is significant.\r
    model_validity_rules:\r
    - id: v_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Es una velocidad media efectiva, no la velocidad termica instantanea.\r
        en: It is an effective average velocity, not thermal instantaneous speed.\r
    graph_rules:\r
    - id: v_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En el modelo de portadores, v cambia linealmente la prediccion de I si n y A se mantienen.\r
        en: In carrier model, v linearly changes predicted I when n and A stay fixed.\r
    likely_errors:\r
    - id: v_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar v de deriva y velocidad termica como si fueran equivalentes."\r
        en: "Common error: treating drift velocity and thermal velocity as equivalent."\r
    next_step_rules:\r
    - id: v_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Explica siempre el significado fisico de v al presentar calculos microscopicos.\r
        en: Always explain physical meaning of v when presenting microscopic calculations.\r
`;export{e as default};
