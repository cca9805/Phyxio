const e=`version: 2\r
id: interpretacion-momento-lineal\r
leaf_id: momento-lineal\r
nombre:\r
  es: Interpretación del Momento Lineal\r
  en: Interpretation of Linear Momentum\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cantidad-de-movimiento\r
  parent_id: fundamentos\r
  ruta_relativa: mecanica/cantidad-de-movimiento/fundamentos/momento-lineal\r
dependencies:\r
  formulas:\r
    - momentum_definition\r
    - momentum_x\r
    - momentum_y\r
    - momentum_magnitude\r
    - momentum_change\r
    - average_force_definition\r
    - kinetic_energy_momentum\r
    - instantaneous_force\r
  magnitudes:\r
    - p\r
    - m\r
    - v\r
    - px\r
    - py\r
    - DeltaP\r
    - Fnet\r
    - DeltaT\r
    - K\r
    - F\r
    - Pinicial\r
    - Pfinal\r
    - vx\r
    - vy\r
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
      es: Resumen Físico-Técnico\r
      en: Physical-Technical Summary\r
  physical_reading:\r
    title:\r
      es: Análisis del Transporte de Inercia\r
      en: Inertia Transport Analysis\r
  coherence:\r
    title:\r
      es: Validación de Consistencia Dinámica\r
      en: Dynamic Consistency Validation\r
  model_validity:\r
    title:\r
      es: Auditoría de Validez de Régimen\r
      en: Regime Validity Audit\r
  graph_reading:\r
    title:\r
      es: Diagnóstico de la Evolución Dinámica\r
      en: Dynamic Evolution Diagnosis\r
  likely_errors:\r
    title:\r
      es: Alerta de Sesgo y Errores Críticos\r
      en: Bias and Critical Error Alert\r
  next_step:\r
    title:\r
      es: Optimización y Siguiente Escenario\r
      en: Optimization and Next Scenario\r
\r
targets:\r
  p:\r
    magnitude_id: p\r
    summary_rules:\r
      - id: p_sum_zero\r
        when: 'result == 0'\r
        status: info\r
        text:\r
          es: "El cuerpo se encuentra en reposo absoluto; no hay transporte de inercia."\r
          en: "The body is at absolute rest; there is no inertia transport."\r
      - id: p_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El momento lineal p describe el transporte de inercia del sistema; es la propiedad fundamental que acopla masa y velocidad en un único estado dinámico."\r
          en: "The linear momentum p describes the system's inertia transport; it is the fundamental property that couples mass and velocity into a single dynamic state."\r
    physical_reading_rules:\r
      - id: p_read_pos\r
        when: 'result > 0'\r
        status: info\r
        text:\r
          es: "La inercia se desplaza en el sentido positivo del eje elegido."\r
          en: "Inertia moves in the positive direction of the chosen axis."\r
      - id: p_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El valor obtenido representa la inercia dinámica acumulada; define la capacidad del sistema para resistir cambios en su estado de movimiento por impacto."\r
          en: "The obtained value represents the accumulated dynamic inertia; it defines the system's capacity to resist changes in its state of motion by impact."\r
    coherence_rules:\r
      - id: p_coh_mass\r
        when: 'm <= 0'\r
        status: error\r
        text:\r
          es: "Error crítico: La masa debe ser positiva para un sistema físico real."\r
          en: "Critical error: Mass must be positive for a real physical system."\r
      - id: p_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "El resultado es consistente con los parámetros de masa y velocidad."\r
          en: "The result is consistent with mass and velocity parameters."\r
    model_validity_rules:\r
      - id: p_val_rel\r
        when: 'v > 3e7'\r
        status: warning\r
        text:\r
          es: "Aviso: Se requiere corrección relativista para estas velocidades extremas."\r
          en: "Warning: Relativistic correction is required for these extreme speeds."\r
      - id: p_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "El modelo clásico de Newton es aplicable en este rango."\r
          en: "Newton's classical model is applicable in this range."\r
    graph_rules:\r
      - id: p_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El vector p se representa como una flecha alineada con el vector v."\r
          en: "The p vector is represented as an arrow aligned with the v vector."\r
    likely_errors:\r
      - id: p_err_energy\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Ojo: No confundas p (vectorial) con K (escalar); sus leyes de conservación difieren."\r
          en: "Note: Do not confuse p (vectorial) with K (scalar); their conservation laws differ."\r
    next_step_rules:\r
      - id: p_next_default\r
        when: "true"\r
        status: tip\r
        text:\r
          es: "Analiza ahora cómo cambia este estado ante una fuerza externa (Impulso) o si se transfiere a otros cuerpos por colisión."\r
          en: "Now analyze how this state changes under an external force (Impulse) or if it is transferred to other bodies by collision."\r
\r
  px:\r
    magnitude_id: px\r
    summary_rules:\r
      - id: px_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Análisis de la componente X del momento lineal finalizado."\r
          en: "X-component of linear momentum analysis finished."\r
    physical_reading_rules:\r
      - id: px_read_right\r
        when: 'result > 0'\r
        status: info\r
        text:\r
          es: "La inercia proyectada se dirige hacia la derecha del observador."\r
          en: "Projected inertia is directed to the observer's right."\r
      - id: px_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Representa la cantidad de movimiento efectiva sobre el eje horizontal."\r
          en: "Represents the effective quantity of motion on the horizontal axis."\r
    coherence_rules:\r
      - id: px_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Valor coherente con la masa y la velocidad horizontal."\r
          en: "Value coherent with mass and horizontal velocity."\r
    model_validity_rules:\r
      - id: px_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válido para el sistema de coordenadas cartesianas definido."\r
          en: "Valid for the defined Cartesian coordinate system."\r
    graph_rules:\r
      - id: px_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Esta componente se visualiza proyectada sobre el eje X."\r
          en: "This component is visualized projected on the X axis."\r
    likely_errors:\r
      - id: px_err_sign\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Cuidado: No olvides el signo si el movimiento es hacia la izquierda."\r
          en: "Caution: Do not forget the sign if motion is to the left."\r
    next_step_rules:\r
      - id: px_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Calcula la componente Y para hallar la magnitud del vector total."\r
          en: "Calculate the Y-component to find the total vector magnitude."\r
\r
  py:\r
    magnitude_id: py\r
    summary_rules:\r
      - id: py_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Análisis de la componente Y del momento lineal finalizado."\r
          en: "Y-component of linear momentum analysis finished."\r
    physical_reading_rules:\r
      - id: py_read_up\r
        when: 'result > 0'\r
        status: info\r
        text:\r
          es: "La inercia proyectada se dirige hacia la parte superior del sistema."\r
          en: "Projected inertia is directed towards the top of the system."\r
      - id: py_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Representa la cantidad de movimiento efectiva sobre el eje vertical."\r
          en: "Represents the effective quantity of motion on the vertical axis."\r
    coherence_rules:\r
      - id: py_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Valor coherente con la masa y la velocidad vertical."\r
          en: "Value coherent with mass and vertical velocity."\r
    model_validity_rules:\r
      - id: py_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válido para el sistema de coordenadas cartesianas definido."\r
          en: "Valid for the defined Cartesian coordinate system."\r
    graph_rules:\r
      - id: py_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Esta componente se visualiza proyectada sobre el eje Y."\r
          en: "This component is visualized projected on the Y axis."\r
    likely_errors:\r
      - id: py_err_sign\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Cuidado: El signo negativo es crítico en rebotes contra el suelo."\r
          en: "Caution: The negative sign is critical in ground bounces."\r
    next_step_rules:\r
      - id: py_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Calcula la componente X para hallar la dirección total del vector."\r
          en: "Calculate the X-component to find the total vector direction."\r
\r
  DeltaP:\r
    magnitude_id: DeltaP\r
    summary_rules:\r
      - id: dp_sum_zero\r
        when: 'result == 0'\r
        status: ok\r
        text:\r
          es: "El momento lineal se conserva; no hay fuerza externa neta."\r
          en: "Linear momentum is conserved; there is no net external force."\r
      - id: dp_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Evaluación del balance dinámico (impulso neto) completada."\r
          en: "Evaluation of the dynamic balance (net impulse) completed."\r
    physical_reading_rules:\r
      - id: dp_read_pos\r
        when: 'result > 0'\r
        status: info\r
        text:\r
          es: "El sistema ha ganado cantidad de movimiento en el sentido del eje."\r
          en: "The system has gained motion quantity in the axis direction."\r
      - id: dp_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Este valor representa el efecto total de las fuerzas externas."\r
          en: "This value represents the total effect of external forces."\r
    coherence_rules:\r
      - id: dp_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Balance verificado correctamente entre estado inicial y final."\r
          en: "Balance correctly verified between initial and final state."\r
    model_validity_rules:\r
      - id: dp_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válido para interacciones impulsivas de cualquier naturaleza."\r
          en: "Valid for impulsive interactions of any nature."\r
    graph_rules:\r
      - id: dp_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Representa el área neta bajo la curva fuerza-tiempo."\r
          en: "Represents the net area under the force-time curve."\r
    likely_errors:\r
      - id: dp_err_vectors\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error común: Restar módulos en rebotes en lugar de vectores."\r
          en: "Common error: Subtracting magnitudes in bounces instead of vectors."\r
    next_step_rules:\r
      - id: dp_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Usa este cambio para calcular la fuerza neta media del impacto."\r
          en: "Use this change to calculate the average net force of the impact."\r
\r
  Fnet:\r
    magnitude_id: Fnet\r
    summary_rules:\r
      - id: fn_sum_zero\r
        when: 'result == 0'\r
        status: ok\r
        text:\r
          es: "Equilibrio dinámico; no hay aceleración del centro de masas."\r
          en: "Dynamic equilibrium; no center of mass acceleration."\r
      - id: fn_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Análisis de la fuerza media de interacción finalizado."\r
          en: "Average interaction force analysis finished."\r
    physical_reading_rules:\r
      - id: fn_read_time\r
        when: 'DeltaT < 0.05'\r
        status: warning\r
        text:\r
          es: "Impacto breve: La fuerza media es muy elevada por la rapidez del cambio."\r
          en: "Short impact: Average force is very high due to the rate of change."\r
      - id: fn_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Representa el esfuerzo necesario para desviar o detener el cuerpo."\r
          en: "Represents the effort needed to deflect or stop the body."\r
    coherence_rules:\r
      - id: fn_coh_time\r
        when: 'DeltaT <= 0'\r
        status: error\r
        text:\r
          es: "Error: El intervalo de tiempo de interacción debe ser positivo."\r
          en: "Error: Interaction time interval must be positive."\r
      - id: fn_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Relación Causa-Efecto consistente entre fuerza y tiempo."\r
          en: "Consistent Cause-Effect relationship between force and time."\r
    model_validity_rules:\r
      - id: fn_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válido como aproximación macroscópica de la interacción."\r
          en: "Valid as a macroscopic approximation of the interaction."\r
    graph_rules:\r
      - id: fn_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Corresponde a la pendiente de la secante en la gráfica p-t."\r
          en: "Corresponds to the slope of the secant in the p-t graph."\r
    likely_errors:\r
      - id: fn_err_peak\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "No confundas esta fuerza media con la fuerza pico real del choque."\r
          en: "Do not confuse this average force with the real peak force of the collision."\r
    next_step_rules:\r
      - id: fn_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Estudia cómo varía la fuerza al amortiguar el impacto aumentando dt."\r
          en: "Study how force varies by cushioning the impact increasing dt."\r
\r
  K:\r
    magnitude_id: K\r
    summary_rules:\r
      - id: k_sum_zero\r
        when: 'result == 0'\r
        status: ok\r
        text:\r
          es: "El cuerpo carece de energía cinética traslacional."\r
          en: "The body lacks translational kinetic energy."\r
      - id: k_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Cálculo de la energía cinética traslacional completado."\r
          en: "Translational kinetic energy calculation completed."\r
    physical_reading_rules:\r
      - id: k_read_v2\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La energía escala con el cuadrado de v; dobla la rapidez y cuadriplicarás K."\r
          en: "Energy scales with the square of v; double the speed and you quadruple K."\r
    coherence_rules:\r
      - id: k_coh_neg\r
        when: 'result < 0'\r
        status: error\r
        text:\r
          es: "Error: La energía cinética no puede ser negativa en este modelo."\r
          en: "Error: Kinetic energy cannot be negative in this model."\r
      - id: k_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Energía consistente con la masa y el momento del sistema."\r
          en: "Energy consistent with system mass and momentum."\r
    model_validity_rules:\r
      - id: k_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válido para partículas rígidas en régimen no relativista."\r
          en: "Valid for rigid particles in non-relativistic regime."\r
    graph_rules:\r
      - id: k_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Se visualiza como un escalar en barras de energía."\r
          en: "Visualized as a scalar in energy bars."\r
    likely_errors:\r
      - id: k_err_cons\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Recuerda que K no se conserva en choques inelásticos aunque p sí lo haga."\r
          en: "Remember that K is not conserved in inelastic collisions even if p is."\r
    next_step_rules:\r
      - id: k_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Compara K antes y después para determinar la elasticidad del choque."\r
          en: "Compare K before and after to determine collision elasticity."\r
\r
  m:\r
    magnitude_id: m\r
    summary_rules:\r
      - id: m_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Masa del sistema identificada para el cálculo de inercia."\r
          en: "System mass identified for inertia calculation."\r
    physical_reading_rules:\r
      - id: m_read_large\r
        when: 'result > 1000'\r
        status: info\r
        text:\r
          es: "Masa elevada; se requiere gran momento para cambiar su estado."\r
          en: "High mass; great momentum is required to change its state."\r
      - id: m_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Representa la resistencia inercial al cambio de movimiento."\r
          en: "Represents inertial resistance to motion change."\r
    coherence_rules:\r
      - id: m_coh_neg\r
        when: 'result <= 0'\r
        status: error\r
        text:\r
          es: "La masa debe ser estrictamente positiva."\r
          en: "Mass must be strictly positive."\r
      - id: m_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Valor de masa físicamente aceptable."\r
          en: "Physically acceptable mass value."\r
    model_validity_rules:\r
      - id: m_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Masa constante según las hipótesis del modelo ideal."\r
          en: "Constant mass according to ideal model hypotheses."\r
    graph_rules:\r
      - id: m_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Actúa como el factor de proporcionalidad entre v y p."\r
          en: "Acts as the proportionality factor between v and p."\r
    likely_errors:\r
      - id: m_err_weight\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "No confundas masa (kg) con peso (N)."\r
          en: "Do not confuse mass (kg) with weight (N)."\r
    next_step_rules:\r
      - id: m_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Usa la masa para vincular la cinemática con la dinámica del sistema."\r
          en: "Use mass to link kinematics with system dynamics."\r
\r
  v:\r
    magnitude_id: v\r
    summary_rules:\r
      - id: v_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Velocidad del sistema analizada como vector de estado."\r
          en: "System velocity analyzed as a state vector."\r
    physical_reading_rules:\r
      - id: v_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Rapidez y dirección del desplazamiento instantáneo."\r
          en: "Instantaneous displacement speed and direction."\r
    coherence_rules:\r
      - id: v_coh_light\r
        when: 'result > 3e8'\r
        status: error\r
        text:\r
          es: "Velocidad físicamente imposible (superior a c)."\r
          en: "Physically impossible velocity (greater than c)."\r
      - id: v_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Valor de velocidad dentro de rangos clásicos."\r
          en: "Velocity value within classical ranges."\r
    model_validity_rules:\r
      - id: v_val_rel\r
        when: 'result > 3e7'\r
        status: warning\r
        text:\r
          es: "Velocidad cercana al límite relativista."\r
          en: "Velocity close to relativistic limit."\r
      - id: v_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válida para mecánica Newtoniana."\r
          en: "Valid for Newtonian mechanics."\r
    graph_rules:\r
      - id: v_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El vector velocidad define la dirección del vector momento."\r
          en: "The velocity vector defines the direction of the momentum vector."\r
    likely_errors:\r
      - id: v_err_scalar\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Recuerda que la velocidad tiene dirección; el signo importa."\r
          en: "Remember that velocity has direction; the sign matters."\r
    next_step_rules:\r
      - id: v_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Multiplica por la masa para hallar el transporte de inercia."\r
          en: "Multiply by mass to find inertia transport."\r
\r
  vx:\r
    magnitude_id: vx\r
    summary_rules:\r
      - id: vx_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Componente horizontal de la velocidad identificada."\r
          en: "Horizontal velocity component identified."\r
    physical_reading_rules:\r
      - id: vx_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Proyección del movimiento sobre el eje X."\r
          en: "Motion projection onto the X-axis."\r
    coherence_rules:\r
      - id: vx_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Coherente con el sistema de coordenadas."\r
          en: "Coherent with the coordinate system."\r
    model_validity_rules:\r
      - id: vx_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válida para el análisis cartesiano."\r
          en: "Valid for Cartesian analysis."\r
    graph_rules:\r
      - id: vx_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Define la componente px del momento lineal."\r
          en: "Defines the px component of linear momentum."\r
    likely_errors:\r
      - id: vx_err_default\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Mantén el convenio de signos (+ derecha, - izquierda)."\r
          en: "Keep the sign convention (+ right, - left)."\r
    next_step_rules:\r
      - id: vx_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Úsala para realizar el balance de momento en el eje X."\r
          en: "Use it to perform the momentum balance on the X-axis."\r
\r
  vy:\r
    magnitude_id: vy\r
    summary_rules:\r
      - id: vy_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Componente vertical de la velocidad identificada."\r
          en: "Vertical velocity component identified."\r
    physical_reading_rules:\r
      - id: vy_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Proyección del movimiento sobre el eje Y."\r
          en: "Motion projection onto the Y-axis."\r
    coherence_rules:\r
      - id: vy_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Coherente con el sistema de coordenadas."\r
          en: "Coherent with the coordinate system."\r
    model_validity_rules:\r
      - id: vy_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válida para el análisis cartesiano."\r
          en: "Valid for Cartesian analysis."\r
    graph_rules:\r
      - id: vy_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Define la componente py del momento lineal."\r
          en: "Defines the py component of linear momentum."\r
    likely_errors:\r
      - id: vy_err_default\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Mantén el convenio de signos (+ arriba, - abajo)."\r
          en: "Keep the sign convention (+ up, - down)."\r
    next_step_rules:\r
      - id: vy_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Úsala para realizar el balance de momento en el eje Y."\r
          en: "Use it to perform the momentum balance on the Y-axis."\r
\r
  Pinicial:\r
    magnitude_id: Pinicial\r
    summary_rules:\r
      - id: Pinicial_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Estado de movimiento inicial antes de la interacción."\r
          en: "Initial motion state before the interaction."\r
    physical_reading_rules:\r
      - id: Pinicial_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Cantidad de movimiento de partida del sistema."\r
          en: "System's starting quantity of motion."\r
    coherence_rules:\r
      - id: Pinicial_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Estado inicial definido correctamente."\r
          en: "Initial state correctly defined."\r
    model_validity_rules:\r
      - id: Pinicial_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Punto de referencia para el balance de fuerzas externas."\r
          en: "Reference point for external forces balance."\r
    graph_rules:\r
      - id: Pinicial_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Se representa como el vector de entrada en el diagrama de balance."\r
          en: "Represented as the input vector in the balance diagram."\r
    likely_errors:\r
      - id: Pinicial_err_default\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Asegúrate de que el sentido coincide con el planteamiento del problema."\r
          en: "Ensure the direction matches the problem statement."\r
    next_step_rules:\r
      - id: Pinicial_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Réstalo del momento final para hallar la variación total."\r
          en: "Subtract it from the final momentum to find total variation."\r
\r
  Pfinal:\r
    magnitude_id: Pfinal\r
    summary_rules:\r
      - id: Pfinal_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Estado de movimiento final tras la interacción."\r
          en: "Final motion state after the interaction."\r
    physical_reading_rules:\r
      - id: Pfinal_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Resultado dinámico de la acción de las fuerzas externas."\r
          en: "Dynamic result of external forces' action."\r
    coherence_rules:\r
      - id: Pfinal_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Estado final definido correctamente."\r
          en: "Final state correctly defined."\r
    model_validity_rules:\r
      - id: Pfinal_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Cierre del balance de cantidad de movimiento."\r
          en: "Closure of the quantity of motion balance."\r
    graph_rules:\r
      - id: Pfinal_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Se representa como el vector resultante en el diagrama."\r
          en: "Represented as the resulting vector in the diagram."\r
    likely_errors:\r
      - id: Pfinal_err_default\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Verifica si el sentido ha cambiado respecto al estado inicial."\r
          en: "Verify if the direction has changed relative to the initial state."\r
    next_step_rules:\r
      - id: Pfinal_next_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Valida la conservación del momento si no hubo fuerzas externas netas."\r
          en: "Validate momentum conservation if there were no net external forces."\r
\r
  DeltaT:\r
    magnitude_id: DeltaT\r
    summary_rules:\r
      - id: dt_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Duración temporal del intercambio de movimiento."\r
          en: "Time duration of motion exchange."\r
    physical_reading_rules:\r
      - id: dt_read_short\r
        when: 'result < 0.1'\r
        status: info\r
        text:\r
          es: "Interacción impulsiva muy breve; espera fuerzas elevadas."\r
          en: "Very brief impulsive interaction; expect high forces."\r
      - id: dt_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Tiempo durante el cual la fuerza neta modifica el sistema."\r
          en: "Time during which net force modifies the system."\r
    coherence_rules:\r
      - id: dt_coh_neg\r
        when: 'result <= 0'\r
        status: error\r
        text:\r
          es: "El intervalo de tiempo debe ser positivo."\r
          en: "Time interval must be positive."\r
      - id: dt_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Duración físicamente consistente."\r
          en: "Physically consistent duration."\r
    model_validity_rules:\r
      - id: dt_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Define el régimen de fuerza media para el impacto."\r
          en: "Defines the average force regime for the impact."\r
    graph_rules:\r
      - id: dt_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Corresponde a la base del área bajo la curva F-t."\r
          en: "Corresponds to the base of the area under the F-t curve."\r
    likely_errors:\r
      - id: dt_err_default\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "No confundas duración con instante de tiempo."\r
          en: "Do not confuse duration with time instant."\r
    next_step_rules:\r
      - id: dt_next_god\r
        when: "true"\r
        status: tip\r
        text:\r
          es: "Úsalo para despejar la fuerza media o el impulso recibido; recuerda que a menor dt, mayor es la violencia del impacto."\r
          en: "Use it to solve for average force or received impulse; remember that the smaller the dt, the greater the impact violence."\r
\r
  F:\r
    magnitude_id: F\r
    summary_rules:\r
      - id: f_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Fuerza instantánea aplicada sobre el sistema."\r
          en: "Instantaneous force applied on the system."\r
    physical_reading_rules:\r
      - id: f_read_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Acción externa que provoca la rapidez de cambio de momento."\r
          en: "External action causing the rate of momentum change."\r
    coherence_rules:\r
      - id: f_coh_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Fuerza definida según la dinámica de Newton."\r
          en: "Force defined according to Newton's dynamics."\r
    model_validity_rules:\r
      - id: f_val_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Válida para la descripción del estado dinámico."\r
          en: "Valid for describing the dynamic state."\r
    graph_rules:\r
      - id: f_graph_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La pendiente de la curva p(t) es igual a esta fuerza."\r
          en: "The slope of the p(t) curve is equal to this force."\r
    likely_errors:\r
      - id: f_err_default\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Asegúrate de que la fuerza es la neta externa."\r
          en: "Ensure the force is the net external force."\r
    next_step_rules:\r
      - id: f_next_god\r
        when: "true"\r
        status: tip\r
        text:\r
          es: "Integra en el tiempo para hallar el impulso total o analiza la aceleración instantánea producida."\r
          en: "Integrate over time to find total impulse or analyze the produced instantaneous acceleration."\r
\r
`;export{e as default};
