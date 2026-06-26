const e=`version: 2\r
id: interpretacion-trabajo-fuerza-variable\r
leaf_id: trabajo-fuerza-variable\r
nombre:\r
  es: Interpretacion de trabajo con fuerza variable\r
  en: Interpretation of variable-force work\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: fundamentos\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/fundamentos/trabajo-fuerza-variable\r
dependencies:\r
  formulas:\r
  - trabajo_integral\r
  - trabajo_hooke_intervalo\r
  - trabajo_aprox_fuerza_media\r
  magnitudes:\r
  - W\r
  - x1\r
  - x2\r
  - k\r
  - Fmed\r
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
        es: W integra el aporte local de la fuerza variable entre x1 y x2 y su signo depende del area orientada.\r
        en: W integrates local variable-force contribution between x1 and x2 and its sign depends on oriented area.\r
    physical_reading_rules:\r
    - id: w_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un W positivo indica transferencia neta hacia el sistema; un W negativo indica extraccion neta.\r
        en: Positive W indicates net transfer into the system; negative W indicates net extraction.\r
    coherence_rules:\r
    - id: w_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de W debe coincidir con el balance de area bajo F(x) en el intervalo.\r
        en: W sign must match area balance under F(x) over the interval.\r
    model_validity_rules:\r
    - id: w_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La interpretacion es valida si F(x) esta definida y es integrable en todo el tramo.\r
        en: Interpretation is valid if F(x) is defined and integrable over the full segment.\r
    graph_rules:\r
    - id: w_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, W se lee como area orientada entre x1 y x2.\r
        en: In Coord, W is read as oriented area between x1 and x2.\r
    likely_errors:\r
    - id: w_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error comun: integrar en limites invertidos sin ajustar signo final."\r
        en: "Common mistake: integrating with swapped bounds and forgetting sign correction."\r
    next_step_rules:\r
    - id: w_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta W exacto con la estimacion por Fmed para evaluar error de modelo.\r
        en: Compare exact W against Fmed estimate to evaluate model error.\r
  x1:\r
    summary_rules:\r
    - id: x1_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: x1 fija el inicio operativo de acumulacion de trabajo en el eje de posicion.\r
        en: x1 sets the operational start for work accumulation on the position axis.\r
    physical_reading_rules:\r
    - id: x1_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambiar x1 modifica la porcion de area incluida y puede invertir conclusiones energeticas.\r
        en: Changing x1 modifies included area and may invert energetic conclusions.\r
    coherence_rules:\r
    - id: x1_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser consistente con el origen espacial elegido en todo el problema.\r
        en: It must stay consistent with the chosen spatial origin.\r
    model_validity_rules:\r
    - id: x1_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si el tramo real no comienza en x1, la integral calculada no representa el proceso fisico.\r
        en: If the real segment does not start at x1, computed integral does not represent the process.\r
    graph_rules:\r
    - id: x1_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: x1 marca el primer borde vertical del area de trabajo en el grafico F-x.\r
        en: x1 marks the first vertical boundary of work area in the F-x graph.\r
    likely_errors:\r
    - id: x1_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar x1 de un tramo y x2 de otro tramo distinto."\r
        en: "Frequent error: using x1 from one segment and x2 from another."\r
    next_step_rules:\r
    - id: x1_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisa que el intervalo descrito en el enunciado coincide con x1 y x2.\r
        en: Verify that statement interval matches x1 and x2.\r
  x2:\r
    summary_rules:\r
    - id: x2_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: x2 define el final del intervalo y cierra el dominio de integracion.\r
        en: x2 defines interval end and closes integration domain.\r
    physical_reading_rules:\r
    - id: x2_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Variar x2 cambia trabajo acumulado incluso si el perfil F(x) no cambia.\r
        en: Changing x2 changes accumulated work even if F(x) profile is unchanged.\r
    coherence_rules:\r
    - id: x2_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe expresarse con la misma referencia y unidades que x1.\r
        en: It must be expressed in the same reference and units as x1.\r
    model_validity_rules:\r
    - id: x2_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si hay cambio de regimen fisico antes de x2, conviene integrar por tramos.\r
        en: If physical regime changes before x2, piecewise integration is preferable.\r
    graph_rules:\r
    - id: x2_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: x2 marca el segundo borde vertical del area orientada.\r
        en: x2 marks the second vertical boundary of oriented area.\r
    likely_errors:\r
    - id: x2_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error comun: interpretar x2-x1 como distancia recorrida sin revisar direccion."\r
        en: "Common error: interpreting x2-x1 as path length without checking direction."\r
    next_step_rules:\r
    - id: x2_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Evalua sensibilidad de W ante pequenos cambios de x2 si el perfil crece rapido.\r
        en: Evaluate W sensitivity to small x2 changes when profile grows quickly.\r
  k:\r
    summary_rules:\r
    - id: k_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: k controla la pendiente del perfil lineal F(x)=k x y por tanto la curvatura energetica integrada.\r
        en: k controls linear-profile slope F(x)=k x and thus integrated energetic curvature.\r
    physical_reading_rules:\r
    - id: k_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Mayor k implica incremento mas rapido de fuerza con posicion.\r
        en: Larger k implies faster force increase with position.\r
    coherence_rules:\r
    - id: k_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: En SI, k debe expresarse en N/m para coherencia dimensional del trabajo.\r
        en: In SI, k must be expressed in N/m for work dimensional coherence.\r
    model_validity_rules:\r
    - id: k_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Solo es valido usar k constante si la respuesta es aproximadamente lineal.\r
        en: Using constant k is valid only when response is approximately linear.\r
    graph_rules:\r
    - id: k_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: k se interpreta como inclinacion de la recta en el plano F-x.\r
        en: k is interpreted as line slope in the F-x plane.\r
    likely_errors:\r
    - id: k_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: extrapolar k lineal fuera del rango de calibracion."\r
        en: "Frequent error: extrapolating linear k outside calibration range."\r
    next_step_rules:\r
    - id: k_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si hay no linealidad observable, cambia a integral de perfil real medido.\r
        en: If observable nonlinearity exists, switch to integral of measured real profile.\r
  Fmed:\r
    summary_rules:\r
    - id: fmed_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Fmed resume la fuerza variable en un valor equivalente para estimacion rapida de trabajo.\r
        en: Fmed summarizes variable force into an equivalent value for quick work estimation.\r
    physical_reading_rules:\r
    - id: fmed_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Funciona bien si el perfil no presenta oscilaciones fuertes o cambios bruscos.\r
        en: It works well if the profile has no strong oscillations or abrupt jumps.\r
    coherence_rules:\r
    - id: fmed_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe producir un W aproximado cercano al valor integral en el rango de interes.\r
        en: It should yield approximate W close to integral value in the range of interest.\r
    model_validity_rules:\r
    - id: fmed_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si el perfil cambia de signo o tiene picos, Fmed puede ocultar efectos relevantes.\r
        en: If profile changes sign or has peaks, Fmed may hide relevant effects.\r
    graph_rules:\r
    - id: fmed_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Graficamente equivale a un rectangulo de area cercana al area real bajo la curva.\r
        en: Graphically it equals a rectangle with area close to real area under curve.\r
    likely_errors:\r
    - id: fmed_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error comun: asumir que Fmed siempre mejora frente a datos no lineales severos."\r
        en: "Common error: assuming Fmed always improves strongly nonlinear data."\r
    next_step_rules:\r
    - id: fmed_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Reporta tambien criterio de error estimado al usar aproximacion media.\r
        en: Also report estimated error criterion when using average approximation.\r
`;export{e as default};
