const e=`version: 1\r
id: interpretacion-sin-rozamiento\r
leaf_id: sin-rozamiento\r
nombre:\r
  es: Interpretación de plano inclinado sin rozamiento\r
  en: Interpretation of frictionless inclined plane\r
scope:\r
  es: Lectura causal entre ángulo, peso proyectado, normal y respuesta cinemática del bloque.\r
  en: Causal reading among angle, projected weight, normal force, and block kinematic response.\r
dependencies:\r
  magnitudes:\r
  - L\r
  - N\r
  - P\r
  - P_par\r
  - P_perp\r
  - a\r
  - g\r
  - m\r
  - t\r
  - theta\r
  - v_f\r
  formulas:\r
  - aceleracion_plano_ideal\r
  - descomposicion_paralela\r
  - descomposicion_perpendicular\r
  - normal_plano_ideal\r
  - tiempo_deslizamiento\r
  - velocidad_final_desde_reposo\r
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
      es: Lectura física\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia física\r
      en: Physical coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura del gráfico\r
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
  a:\r
    summary_rules:\r
    - id: a_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La aceleración depende de g y del ángulo, no de la masa del bloque.\r
        en: Acceleration depends on g and angle, not on block mass.\r
    coherence_rules:\r
    - id: a_coherence_range\r
      when: a >= 0 and a <= g\r
      status: ok\r
      text:\r
        es: El valor de a está dentro del rango físico del modelo ideal.\r
        en: a lies within the physical range of the ideal model.\r
    physical_reading_rules:\r
    - id: a_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si theta aumenta, la componente paralela crece y a sube de forma monótona.\r
        en: As theta increases, the parallel component grows and a increases monotonically.\r
    model_validity_rules:\r
    - id: a_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Esta lectura asume ausencia de rozamiento y de pérdidas dominantes por aire.\r
        en: This reading assumes no friction and no dominant air losses.\r
    graph_rules:\r
    - id: a_graph_curve\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el panel Coord, a(theta) parte de cero y se aproxima a g al aumentar theta.\r
        en: In the Coord panel, a(theta) starts at zero and approaches g as theta increases.\r
    likely_errors:\r
    - id: a_error_units\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar theta en grados cuando el cálculo trigonométrico está en radianes.'\r
        en: 'Common error: using theta in degrees while trigonometric calculations expect radians.'\r
    next_step_rules:\r
    - id: a_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con a validada, calcula tiempo y velocidad final para contrastar con mediciones.\r
        en: With validated a, compute time and final speed to compare with measurements.\r
  theta:\r
    summary_rules:\r
    - id: theta_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: theta es la variable de control geométrico del fenómeno.\r
        en: theta is the geometric control variable of the phenomenon.\r
    coherence_rules:\r
    - id: theta_coherence\r
      when: theta >= 0 and theta <= 1.5708\r
      status: ok\r
      text:\r
        es: El ángulo está en el dominio físico de una rampa convencional.\r
        en: The angle is within the physical domain of a conventional incline.\r
    physical_reading_rules:\r
    - id: theta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Al subir theta, aumenta P_par y disminuye P_perp.\r
        en: As theta rises, P_par increases and P_perp decreases.\r
    model_validity_rules:\r
    - id: theta_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se asume que theta permanece aproximadamente constante en el tramo analizado.\r
        en: theta is assumed approximately constant in the analyzed segment.\r
    graph_rules:\r
    - id: theta_graph_marker\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El marcador de theta define el punto operativo en la curva de aceleración.\r
        en: theta marker defines the operating point on the acceleration curve.\r
    likely_errors:\r
    - id: theta_error_reference\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: medir el ángulo respecto a la vertical y no a la horizontal.'\r
        en: 'Common error: measuring angle from vertical instead of horizontal.'\r
    next_step_rules:\r
    - id: theta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Explora sensibilidad variando theta para diseñar una pendiente segura.\r
        en: Explore sensitivity by varying theta to design a safe incline.\r
  P:\r
    summary_rules:\r
    - id: p_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P es la fuerza gravitatoria total que se descompone en dos componentes.\r
        en: P is the total gravitational force decomposed into two components.\r
    coherence_rules:\r
    - id: p_coherence\r
      when: P > 0\r
      status: ok\r
      text:\r
        es: El peso es positivo y coherente con masa y gravedad mayores que cero.\r
        en: Weight is positive and coherent with positive mass and gravity.\r
    physical_reading_rules:\r
    - id: p_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El peso no cambia por la rampa; cambia su proyección sobre los ejes elegidos.\r
        en: Weight does not change because of the ramp; only its axis projections change.\r
    model_validity_rules:\r
    - id: p_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se asume campo gravitatorio uniforme en todo el tramo analizado.\r
        en: Uniform gravitational field is assumed across the analyzed segment.\r
    graph_rules:\r
    - id: p_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el DCL, P debe apuntar vertical hacia abajo independientemente de theta.\r
        en: In the FBD, P must point vertically downward regardless of theta.\r
    likely_errors:\r
    - id: p_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: rotar el vector peso junto con el plano inclinado.'\r
        en: 'Common error: rotating the weight vector with the incline.'\r
    next_step_rules:\r
    - id: p_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa P como base para verificar P_par y P_perp en la descomposición.\r
        en: Use P as baseline to verify P_par and P_perp in decomposition.\r
  P_par:\r
    summary_rules:\r
    - id: ppar_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P_par es la parte del peso que impulsa el movimiento sobre la rampa.\r
        en: P_par is the part of weight that drives motion along the incline.\r
    coherence_rules:\r
    - id: ppar_coherence\r
      when: P_par >= 0 and P_par <= P\r
      status: ok\r
      text:\r
        es: P_par está en el rango esperado para una proyección física.\r
        en: P_par is in the expected range for a physical projection.\r
    physical_reading_rules:\r
    - id: ppar_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si theta aumenta, P_par sube y acelera más el bloque.\r
        en: If theta increases, P_par rises and the block accelerates more.\r
    model_validity_rules:\r
    - id: ppar_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Solo aplica en el modelo ideal sin pérdidas tangenciales dominantes.\r
        en: Applies to the ideal model without dominant tangential losses.\r
    graph_rules:\r
    - id: ppar_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el análisis gráfico, P_par explica la pendiente de la curva a(theta).\r
        en: In graph analysis, P_par explains the slope of the a(theta) curve.\r
    likely_errors:\r
    - id: ppar_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar cos(theta) en lugar de sin(theta) para la componente paralela.'\r
        en: 'Common error: using cos(theta) instead of sin(theta) for the parallel component.'\r
    next_step_rules:\r
    - id: ppar_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta P_par con P_perp para interpretar la geometría completa.\r
        en: Compare P_par with P_perp to interpret full geometry.\r
  P_perp:\r
    summary_rules:\r
    - id: pperp_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P_perp controla la compresión del bloque sobre el plano.\r
        en: P_perp controls block compression on the incline.\r
    coherence_rules:\r
    - id: pperp_coherence\r
      when: P_perp >= 0 and P_perp <= P\r
      status: ok\r
      text:\r
        es: P_perp es coherente con una proyección normal del peso.\r
        en: P_perp is coherent with a normal projection of weight.\r
    physical_reading_rules:\r
    - id: pperp_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A mayor theta, menor P_perp y menor fuerza normal.\r
        en: Higher theta means lower P_perp and lower normal force.\r
    model_validity_rules:\r
    - id: pperp_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se asume contacto continuo sin separación del bloque.\r
        en: Continuous contact without detachment is assumed.\r
    graph_rules:\r
    - id: pperp_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P_perp está directamente ligada al valor de N en el modelo ideal.\r
        en: P_perp is directly tied to N in the ideal model.\r
    likely_errors:\r
    - id: pperp_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: interpretar P_perp como fuerza motriz sobre el eje del plano.'\r
        en: 'Common error: interpreting P_perp as driving force along the incline axis.'\r
    next_step_rules:\r
    - id: pperp_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica que N y P_perp coincidan cuando no hay aceleración normal.\r
        en: Verify N and P_perp match when there is no normal acceleration.\r
  N:\r
    summary_rules:\r
    - id: n_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: N representa la reacción de apoyo del plano sobre el bloque.\r
        en: N represents support reaction from incline to block.\r
    coherence_rules:\r
    - id: n_coherence\r
      when: N >= 0 and N <= m * g\r
      status: ok\r
      text:\r
        es: La normal está en el rango físico esperado para el modelo.\r
        en: Normal force is within expected physical range for the model.\r
    physical_reading_rules:\r
    - id: n_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si theta crece, N disminuye porque baja la compresión contra la superficie.\r
        en: If theta grows, N decreases because compression against surface lowers.\r
    model_validity_rules:\r
    - id: n_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se asume contacto continuo; si hay salto, esta ecuación deja de aplicar.\r
        en: Continuous contact is assumed; if detachment appears, this equation fails.\r
    graph_rules:\r
    - id: n_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el DCL, N debe verse perpendicular al plano y opuesta a P_perp.\r
        en: In FBD, N must appear normal to incline and opposite to P_perp.\r
    likely_errors:\r
    - id: n_error_mg\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: fijar N = mg sin considerar la inclinación.'\r
        en: 'Common error: setting N = mg without considering incline angle.'\r
    next_step_rules:\r
    - id: n_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica visualmente la ortogonalidad de N en el diagrama de cuerpo libre.\r
        en: Visually verify N orthogonality in the free-body diagram.\r
  g:\r
    summary_rules:\r
    - id: g_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: g fija la escala absoluta de aceleración en el problema.\r
        en: g sets the absolute acceleration scale in the problem.\r
    coherence_rules:\r
    - id: g_coherence\r
      when: g > 0\r
      status: ok\r
      text:\r
        es: La gravedad es positiva y consistente con el dominio físico.\r
        en: Gravity is positive and consistent with the physical domain.\r
    physical_reading_rules:\r
    - id: g_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un aumento de g eleva proporcionalmente a y las velocidades resultantes.\r
        en: Increasing g raises a and resulting speeds proportionally.\r
    model_validity_rules:\r
    - id: g_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se usa g constante, válido para variaciones de altura pequeñas.\r
        en: Constant g is assumed, valid for small altitude variations.\r
    graph_rules:\r
    - id: g_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambiar g desplaza verticalmente la curva de aceleración.\r
        en: Changing g vertically scales the acceleration curve.\r
    likely_errors:\r
    - id: g_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: mezclar unidades de g sin normalizar a m/s^2.'\r
        en: 'Common error: mixing gravity units without normalizing to m/s^2.'\r
    next_step_rules:\r
    - id: g_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa un valor consistente de g en todo el cálculo y en todas las fórmulas.\r
        en: Use a consistent g value across all calculations and formulas.\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m escala fuerzas, aunque se cancela en la expresión de a del modelo ideal.\r
        en: m scales forces, although it cancels in the ideal-model acceleration expression.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: m > 0\r
      status: ok\r
      text:\r
        es: La masa es positiva y físicamente válida.\r
        en: Mass is positive and physically valid.\r
    physical_reading_rules:\r
    - id: m_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Mayor masa implica mayor peso total, pero no mayor a en este modelo.\r
        en: Larger mass means larger total weight, but not larger a in this model.\r
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se asume bloque rígido sin cambios de masa durante el proceso.\r
        en: A rigid block with constant mass is assumed.\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el gráfico de a(theta), m no altera la curva ideal.\r
        en: In a(theta), m does not alter the ideal curve.\r
    likely_errors:\r
    - id: m_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: concluir que un bloque más pesado acelera más en la misma rampa ideal.'\r
        en: 'Common error: concluding a heavier block accelerates more on the same ideal incline.'\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa m para energía e impacto, no para modificar a en este leaf.\r
        en: Use m for energy and impact estimates, not to modify a in this leaf.\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: t mide la duración del descenso para la distancia analizada.\r
        en: t measures descent duration for the analyzed distance.\r
    coherence_rules:\r
    - id: t_coherence\r
      when: t > 0\r
      status: ok\r
      text:\r
        es: El tiempo obtenido es positivo, como exige el proceso físico.\r
        en: Obtained time is positive, as required by physical process.\r
    physical_reading_rules:\r
    - id: t_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A mayor aceleración, el tiempo disminuye para una misma L.\r
        en: Higher acceleration reduces time for the same L.\r
    model_validity_rules:\r
    - id: t_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Requiere aceleración aproximadamente constante en todo el tramo.\r
        en: Requires approximately constant acceleration over the full segment.\r
    graph_rules:\r
    - id: t_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: t se interpreta junto con L y a, no de forma aislada.\r
        en: t should be interpreted together with L and a, not in isolation.\r
    likely_errors:\r
    - id: t_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar fórmulas de velocidad constante en un régimen acelerado.'\r
        en: 'Common error: using constant-speed formulas in an accelerated regime.'\r
    next_step_rules:\r
    - id: t_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta el tiempo calculado con mediciones para validar el modelo.\r
        en: Compare computed time with measurements to validate the model.\r
  L:\r
    summary_rules:\r
    - id: l_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: L define la escala espacial del problema sobre la rampa.\r
        en: L defines the spatial scale of the problem along the incline.\r
    coherence_rules:\r
    - id: l_coherence\r
      when: L > 0\r
      status: ok\r
      text:\r
        es: La distancia es positiva y consistente con el planteamiento.\r
        en: Distance is positive and consistent with the setup.\r
    physical_reading_rules:\r
    - id: l_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Para una misma a, mayor L implica mayor t y mayor v_f.\r
        en: For the same a, larger L implies larger t and larger v_f.\r
    model_validity_rules:\r
    - id: l_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se asume tramo con ángulo constante y sin cambios de régimen.\r
        en: A constant-angle segment without regime changes is assumed.\r
    graph_rules:\r
    - id: l_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: L opera como entrada de escala para estimaciones cinemáticas.\r
        en: L acts as scale input for kinematic estimates.\r
    likely_errors:\r
    - id: l_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: confundir longitud de rampa con altura vertical.'\r
        en: 'Common error: confusing ramp length with vertical height.'\r
    next_step_rules:\r
    - id: l_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisa medición de L sobre el plano real antes de cerrar cálculo.\r
        en: Recheck L measurement along the real incline before finalizing.\r
  v_f:\r
    summary_rules:\r
    - id: vf_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v_f resume el efecto acumulado de la aceleración a lo largo de L.\r
        en: v_f summarizes accumulated acceleration effect over distance L.\r
    coherence_rules:\r
    - id: vf_coherence\r
      when: v_f >= 0\r
      status: ok\r
      text:\r
        es: La rapidez final se mantiene no negativa.\r
        en: Final speed remains non-negative.\r
    physical_reading_rules:\r
    - id: vf_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Mayor theta o mayor L incrementan v_f en el modelo ideal.\r
        en: Larger theta or larger L increase v_f in the ideal model.\r
    model_validity_rules:\r
    - id: vf_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se supone aceleración constante y partida desde reposo.\r
        en: Constant acceleration and rest initial condition are assumed.\r
    graph_rules:\r
    - id: vf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura conjunta de a y L permite anticipar v_f sin integrar trayectoria completa.\r
        en: Joint reading of a and L allows estimating v_f without full trajectory integration.\r
    likely_errors:\r
    - id: vf_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar longitud vertical en lugar de distancia recorrida sobre la rampa.'\r
        en: 'Common error: using vertical length instead of path length along incline.'\r
    next_step_rules:\r
    - id: vf_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa v_f para evaluar impacto, frenado o transición al siguiente tramo.\r
        en: Use v_f to evaluate impact, braking, or transition to next segment.\r
`;export{e as default};
