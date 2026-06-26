const e=`version: 2\r
id: interpretacion-aplicaciones-del-principio-de-conservacion\r
leaf_id: aplicaciones-del-principio-de-conservacion\r
nombre:\r
  es: Interpretación de Aplicaciones de la Conservación\r
  en: Interpretation of Conservation Applications\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cantidad-de-movimiento\r
  parent_id: principio-de-conservacion\r
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/aplicaciones-del-principio-de-conservacion\r
dependencies:\r
  formulas:\r
  - cons_principle\r
  - recoil_law\r
  - inelastic_collision\r
  - general_1d_balance\r
  - DeltaP\r
  - P\r
  - cond\r
  - pf\r
  - pi\r
  magnitudes:\r
  - P\r
  - Pinitial\r
  - Pfinal\r
  - m1\r
  - m2\r
  - v1i\r
  - v2i\r
  - v1f\r
  - v2f\r
  - vf\r
  - DeltaP\r
  - Fext\r
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
      es: Diagnóstico del Balance Dinámico\r
      en: Dynamic Balance Diagnosis\r
  physical_reading:\r
    title:\r
      es: Análisis Causal de la Interacción\r
      en: Causal Interaction Analysis\r
  coherence:\r
    title:\r
      es: Verificación de Leyes de Conservación\r
      en: Conservation Laws Verification\r
  model_validity:\r
    title:\r
      es: Auditoría de Aislamiento del Sistema\r
      en: System Isolation Audit\r
  graph_reading:\r
    title:\r
      es: Lectura de la Trayectoria en el Espacio de Fases\r
      en: Phase Space Trajectory Reading\r
  likely_errors:\r
    title:\r
      es: Alertas de Errores en el Planteamiento\r
      en: Problem Statement Error Alerts\r
  next_step:\r
    title:\r
      es: Proyección Energética y Cinemática\r
      en: Energetic and Kinematic Projection\r
targets:\r
  v1f:\r
    summary_rules:\r
    - id: v1f_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "La velocidad final [[v1f]] representa el estado de movimiento del primer cuerpo tras completar el intercambio de momento con el sistema."\r
        en: "Final velocity [[v1f]] represents the first body's motion state after completing the momentum exchange with the system."\r
    physical_reading_rules:\r
    - id: v1f_recoil_check\r
      when: 'v1f * v1i < 0'\r
      status: success\r
      text:\r
        es: "Efecto de retroceso: El cuerpo ha invertido su sentido de marcha para compensar el momento ganado por el otro componente del sistema."\r
        en: "Recoil effect: The body has reversed its direction to compensate for the momentum gained by the other system component."\r
    coherence_rules:\r
    - id: v1f_cons_ok\r
      when: 'abs(m1*v1f + m2*v2f - (m1*v1i + m2*v2i)) < 1e-6'\r
      status: ok\r
      text:\r
        es: "Balance perfecto: Se ha verificado que la cantidad de movimiento total se mantiene constante."\r
        en: "Perfect balance: It has been verified that the total quantity of motion remains constant."\r
    model_validity_rules:\r
    - id: v1f_iso_system\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida asumiendo que las fuerzas internas son mucho más intensas que cualquier fuerza externa durante la interacción."\r
        en: "Valid assuming internal forces are much more intense than any external force during the interaction."\r
    graph_rules:\r
    - id: v1f_vector_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "En el diagrama vectorial, [[v1f]] se representa como el vector de salida del primer cuerpo."\r
        en: "In the vector diagram, [[v1f]] is represented as the first body's output vector."\r
    likely_errors:\r
    - id: v1f_error_sign\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Cuidado con el signo: Un error en la dirección de [[v1f]] violaría el principio de conservación. Asegúrate de que el balance neto sea cero."\r
        en: "Watch the sign: An error in [[v1f]] direction would violate the conservation principle. Ensure the net balance is zero."\r
    next_step_rules:\r
    - id: v1f_energy_next\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Calcula el cambio de energía cinética para determinar si la aplicación involucra una colisión elástica o inelástica."\r
        en: "Calculate the kinetic energy change to determine if the application involves an elastic or inelastic collision."\r
\r
  vf:\r
    summary_rules:\r
    - id: vf_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "La velocidad común [[vf]] describe el movimiento del sistema acoplado tras una colisión perfectamente inelástica."\r
        en: "The common velocity [[vf]] describes the coupled system's motion after a perfectly inelastic collision."\r
    physical_reading_rules:\r
    - id: vf_center_mass\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "En un sistema acoplado, [[vf]] es idéntica a la velocidad del centro de masas del sistema original."\r
        en: "In a coupled system, [[vf]] is identical to the original system's center of mass velocity."\r
    coherence_rules:\r
    - id: vf_mass_cons\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "La masa total se ha conservado correctamente como la suma de m1 y m2."\r
        en: "Total mass has been correctly conserved as the sum of m1 and m2."\r
    model_validity_rules:\r
    - id: vf_stick_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida si los cuerpos permanecen unidos tras el impacto (ej. un proyectil incrustado en un bloque)."\r
        en: "Valid if bodies remain joined after impact (e.g., a bullet embedded in a block)."\r
    graph_rules:\r
    - id: vf_graph_merger\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Visualmente, las dos trayectorias convergen en una única línea tras el choque."\r
        en: "Visually, the two trajectories converge into a single line after the collision."\r
    likely_errors:\r
    - id: vf_error_scalar\r
      when: 'true'\r
      status: danger\r
      text:\r
        es: "No sumes las rapideces directamente: debes sumar los momentos vectoriales antes de dividir por la masa total."\r
        en: "Do not sum speeds directly: you must sum the vector momenta before dividing by the total mass."\r
    next_step_rules:\r
    - id: vf_next_loss\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Analiza la pérdida máxima de energía cinética, característica de este tipo de aplicaciones inelásticas."\r
        en: "Analyze the maximum kinetic energy loss, characteristic of this type of inelastic applications."\r
\r
  Pfinal:\r
    summary_rules:\r
    - id: pf_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "[[Pfinal]] es el momento total resultante del sistema. Si el sistema está aislado, este valor debe ser idéntico al inicial."\r
        en: "[[Pfinal]] is the system's resulting total momentum. If the system is isolated, this value must be identical to the initial one."\r
    physical_reading_rules:\r
    - id: pf_external_check\r
      when: 'abs(Pfinal - Pinitial) > 1e-6'\r
      status: warning\r
      text:\r
        es: "Detección de fuerzas externas: El momento ha cambiado, lo que indica que el sistema NO estaba realmente aislado."\r
        en: "External forces detected: Momentum has changed, indicating the system was NOT truly isolated."\r
    coherence_rules:\r
    - id: pf_balance_ok\r
      when: 'abs(Pfinal - Pinitial) < 1e-6'\r
      status: success\r
      text:\r
        es: "Conservación verificada: El balance de momento es nulo, validando el aislamiento del sistema."\r
        en: "Conservation verified: The momentum balance is zero, validating system isolation."\r
    model_validity_rules:\r
    - id: pf_closed_system\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida para sistemas cerrados (masa constante) y aislados (fuerza externa nula)."\r
        en: "Valid for closed (constant mass) and isolated (zero external force) systems."\r
    graph_rules:\r
    - id: pf_graph_horizontal\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "En el gráfico de evolución temporal, [[Pfinal]] coincide con la asíntota del estado inicial."\r
        en: "In the temporal evolution graph, [[Pfinal]] matches the initial state's asymptote."\r
    likely_errors:\r
    - id: pf_error_units\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Asegúrate de que las unidades kg·m/s son consistentes en ambos lados del balance."\r
        en: "Ensure kg·m/s units are consistent on both sides of the balance."\r
    next_step_rules:\r
    - id: pf_next_recoil\r
      when: 'Pinitial == 0'\r
      status: tip\r
      text:\r
        es: "Aplica la ley de retroceso para hallar la relación de velocidades si el sistema parte del reposo."\r
        en: "Apply the recoil law to find the velocity relationship if the system starts from rest."\r
\r
  v2f:\r
    summary_rules:\r
    - id: v2f_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "La velocidad final [[v2f]] representa el estado de movimiento del segundo cuerpo tras el evento de interacción."\r
        en: "Final velocity [[v2f]] represents the second body's motion state after the interaction event."\r
    physical_reading_rules:\r
    - id: v2f_contribution\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Su valor determina cuánto del momento total del sistema ha sido transferido a esta masa específica."\r
        en: "Its value determines how much of the system's total momentum has been transferred to this specific mass."\r
    coherence_rules:\r
    - id: v2f_mass_ok\r
      when: 'm2 > 0'\r
      status: ok\r
      text:\r
        es: "Cálculo consistente con una masa positiva para el segundo cuerpo."\r
        en: "Calculation consistent with a positive mass for the second body."\r
    model_validity_rules:\r
    - id: v2f_validity_god\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida dentro del marco de referencia inercial elegido para el balance."\r
        en: "Valid within the inertial reference frame chosen for the balance."\r
    graph_rules:\r
    - id: v2f_graph_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Se visualiza como el vector de salida del segundo cuerpo en el diagrama dinámico."\r
        en: "Visualized as the second body's output vector in the dynamic diagram."\r
    likely_errors:\r
    - id: v2f_error_default\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Verifica que el sentido de [[v2f]] no contradiga el balance total; si uno gana momento en un sentido, el otro debe compensarlo si el total es constante."\r
        en: "Verify that [[v2f]] direction does not contradict the total balance; if one gains momentum in one direction, the other must compensate if the total is constant."\r
    next_step_rules:\r
    - id: v2f_next_god\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Compara el cambio de velocidad [[v2f]] - [[v2i]] para evaluar la fuerza impulsiva neta sobre este cuerpo."\r
        en: "Compare the velocity change [[v2f]] - [[v2i]] to evaluate the net impulsive force on this body."\r
\r
  P:\r
    summary_rules:\r
    - id: P_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "El momento lineal total [[P]] es la magnitud conservada del sistema. Representa la inercia en movimiento global del conjunto."\r
        en: "Total linear momentum [[P]] is the conserved quantity of the system. It represents the global moving inertia of the assembly."\r
    physical_reading_rules:\r
    - id: P_read_vector\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Como magnitud vectorial, [[P]] define la dirección preferente del transporte de materia del sistema completo."\r
        en: "As a vector quantity, [[P]] defines the preferred direction of matter transport for the entire system."\r
    coherence_rules:\r
    - id: P_coh_units\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Unidades correctas en kg·m/s (o N·s)."\r
        en: "Correct units in kg·m/s (or N·s)."\r
    model_validity_rules:\r
    - id: P_val_newton\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida para cualquier sistema de partículas bajo las leyes de Newton."\r
        en: "Valid for any system of particles under Newton's laws."\r
    graph_rules:\r
    - id: P_graph_const\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Gráficamente, si el sistema está aislado, la curva de [[P]] respecto al tiempo es una recta horizontal."\r
        en: "Graphically, if the system is isolated, the curve of [[P]] versus time is a horizontal straight line."\r
    likely_errors:\r
    - id: P_err_scalar\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error crítico: No sumes las magnitudes de los momentos individuales si tienen direcciones distintas; usa suma vectorial."\r
        en: "Critical error: Do not add the magnitudes of individual momenta if they have different directions; use vector addition."\r
    next_step_rules:\r
    - id: P_next_balance\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Usa el valor de [[P]] para establecer el balance de conservación [[Pinitial]] = [[Pfinal]]."\r
        en: "Use the value of [[P]] to establish the conservation balance [[Pinitial]] = [[Pfinal]]."\r
\r
  DeltaP:\r
    summary_rules:\r
    - id: dp_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "[[DeltaP]] representa el cambio neto en la cantidad de movimiento. En un sistema aislado, este valor debe ser cero."\r
        en: "[[DeltaP]] represents the net change in momentum. In an isolated system, this value must be zero."\r
    physical_reading_rules:\r
    - id: dp_impulse_reading\r
      when: 'abs(DeltaP) > 1e-6'\r
      status: warning\r
      text:\r
        es: "Intercambio externo: El sistema ha recibido un impulso neto desde el entorno, rompiendo la conservación estricta."\r
        en: "External exchange: The system has received a net impulse from the environment, breaking strict conservation."\r
    coherence_rules:\r
    - id: dp_cons_check\r
      when: 'abs(DeltaP) < 1e-6'\r
      status: success\r
      text:\r
        es: "Conservación perfecta: El cambio de momento es nulo, confirmando el cumplimiento del principio fundamental."\r
        en: "Perfect conservation: The momentum change is zero, confirming compliance with the fundamental principle."\r
    model_validity_rules:\r
    - id: dp_time_window\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida si el intervalo de tiempo analizado es lo suficientemente corto para que las fuerzas externas no acumulen impulso."\r
        en: "Valid if the analyzed time interval is short enough that external forces do not accumulate impulse."\r
    graph_rules:\r
    - id: dp_graph_delta\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "En el espacio de fases, [[DeltaP]] es la distancia vectorial entre los estados inicial y final."\r
        en: "In phase space, [[DeltaP]] is the vector distance between the initial and final states."\r
    likely_errors:\r
    - id: dp_error_sign\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "No confundas el cambio de momento de una parte con el del sistema total. El [[DeltaP]] del sistema debe ser nulo."\r
        en: "Do not confuse the momentum change of one part with that of the total system. The system's [[DeltaP]] must be zero."\r
    next_step_rules:\r
    - id: dp_force_projection\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Calcula el impulso medio dividiendo [[DeltaP]] por el tiempo de interacción si este es conocido."\r
        en: "Calculate the average impulse by dividing [[DeltaP]] by the interaction time if it is known."\r
\r
  Fext:\r
    summary_rules:\r
    - id: fext_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "[[Fext]] representa la fuerza neta externa. Su valor nulo es el prerrequisito para la conservación del momento."\r
        en: "[[Fext]] represents the net external force. Its null value is the prerequisite for momentum conservation."\r
    physical_reading_rules:\r
    - id: fext_gravity_check\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Recuerda que fuerzas como el peso son externas; el sistema solo se conserva si su efecto es despreciable en el intervalo."\r
        en: "Remember that forces like weight are external; the system is only conserved if their effect is negligible in the interval."\r
    coherence_rules:\r
    - id: fext_cond_check\r
      when: 'Fext == 0'\r
      status: success\r
      text:\r
        es: "Condición de aislamiento satisfecha. El modelo de conservación es rigurosamente exacto."\r
        en: "Isolation condition satisfied. The conservation model is rigorously exact."\r
    model_validity_rules:\r
    - id: fext_model_failure\r
      when: 'abs(Fext) > 1e2'\r
      status: danger\r
      text:\r
        es: "Fuerzas externas dominantes: El principio de conservación no puede aplicarse sin correcciones por impulso externo."\r
        en: "Dominant external forces: The conservation principle cannot be applied without external impulse corrections."\r
    graph_rules:\r
    - id: fext_slope_P\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "En un gráfico de P vs t, [[Fext]] es la pendiente de la curva de momento total."\r
        en: "In a P vs t graph, [[Fext]] is the slope of the total momentum curve."\r
    likely_errors:\r
    - id: fext_internal_mix\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "No incluyas fuerzas internas (como la explosión o el choque) en [[Fext]]; estas se cancelan por pares de acción-reacción."\r
        en: "Do not include internal forces (such as the explosion or impact) in [[Fext]]; these cancel out by action-reaction pairs."\r
    next_step_rules:\r
    - id: fext_newton_law\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Aplica la Segunda Ley de Newton para relacionar [[Fext]] con la aceleración del centro de masas."\r
        en: "Apply Newton's Second Law to relate [[Fext]] to the center of mass acceleration."\r
\r
  Pinitial:\r
    summary_rules:\r
    - id: pinitial_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "[[Pinitial]] es el estado dinámico de entrada del sistema. Define el presupuesto de momento disponible antes de la interacción."\r
        en: "[[Pinitial]] is the system's input dynamic state. It defines the momentum budget available before the interaction."\r
    physical_reading_rules:\r
    - id: pinitial_rest_check\r
      when: 'Pinitial == 0'\r
      status: info\r
      text:\r
        es: "Sistema en reposo: El punto de partida es nulo. Cualquier transferencia interna solo redistribuye, no crea momento."\r
        en: "System at rest: The starting point is zero. Any internal transfer only redistributes, not creates momentum."\r
    coherence_rules:\r
    - id: pinitial_coh_balance\r
      when: 'abs(Pinitial - Pfinal) < 1e-6'\r
      status: success\r
      text:\r
        es: "Conservación verificada: el momento inicial coincide con el final, validando el aislamiento."\r
        en: "Conservation verified: initial momentum matches final, validating isolation."\r
    model_validity_rules:\r
    - id: pinitial_validity_god\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida para sistemas de masa constante bajo ausencia de fuerzas externas netas."\r
        en: "Valid for constant-mass systems under zero net external forces."\r
    graph_rules:\r
    - id: pinitial_graph_plateau\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "En la gráfica P(t), [[Pinitial]] define el nivel de la meseta inicial antes de la interacción."\r
        en: "In the P(t) graph, [[Pinitial]] defines the level of the initial plateau before interaction."\r
    likely_errors:\r
    - id: pinitial_error_incomplete\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Error frecuente: omitir algún cuerpo ya en movimiento al calcular [[Pinitial]], lo que rompe el balance."\r
        en: "Common error: omitting a body already in motion when calculating [[Pinitial]], which breaks the balance."\r
    next_step_rules:\r
    - id: pinitial_next_balance\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Establece [[Pinitial]] = [[Pfinal]] para plantear la ecuación de conservación y despejar la incógnita."\r
        en: "Set [[Pinitial]] = [[Pfinal]] to write the conservation equation and solve for the unknown."\r
\r
  v1i:\r
    summary_rules:\r
    - id: v1i_summary_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "[[v1i]] es la velocidad de entrada del primer cuerpo al sistema. Junto con [[m1]], define su contribución al [[Pinitial]]."\r
        en: "[[v1i]] is the entry velocity of the first body to the system. Together with [[m1]], it defines its contribution to [[Pinitial]]."\r
    physical_reading_rules:\r
    - id: v1i_direction_check\r
      when: 'v1i < 0'\r
      status: info\r
      text:\r
        es: "Dirección negativa: El primer cuerpo se mueve en sentido contrario al eje positivo antes del choque."\r
        en: "Negative direction: The first body moves opposite to the positive axis before the collision."\r
    coherence_rules:\r
    - id: v1i_coh_god\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Velocidad inicial definida en el marco de referencia inercial elegido."\r
        en: "Initial velocity defined in the chosen inertial reference frame."\r
    model_validity_rules:\r
    - id: v1i_validity_god\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: "Válida en mecánica clásica para velocidades mucho menores que la de la luz."\r
        en: "Valid in classical mechanics for velocities much less than the speed of light."\r
    graph_rules:\r
    - id: v1i_graph_god\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Corresponde a la pendiente de la trayectoria del primer cuerpo antes del instante de interacción."\r
        en: "Corresponds to the slope of the first body's trajectory before the interaction instant."\r
    likely_errors:\r
    - id: v1i_error_sign\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Asigna el signo correcto a [[v1i]] según el eje; un error de signo invierte el balance de momento."\r
        en: "Assign the correct sign to [[v1i]] along the axis; a sign error inverts the momentum balance."\r
    next_step_rules:\r
    - id: v1i_next_god\r
      when: 'true'\r
      status: tip\r
      text:\r
        es: "Combina [[m1]] y [[v1i]] en la fórmula {{ f:pi }} para obtener la contribución inicial de este cuerpo al sistema."\r
        en: "Combine [[m1]] and [[v1i]] in the formula {{ f:pi }} to get this body's initial contribution to the system."\r
`;export{e as default};
