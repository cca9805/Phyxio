const e=`version: 2
id: interpretacion-movimiento-del-centro-de-masas
leaf_id: movimiento-del-centro-de-masas
nombre:
  es: "Interpretación del Movimiento del Centro de Masas"
  en: "Interpretation of Center of Mass Motion"
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: centro-de-masas
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/movimiento-del-centro-de-masas

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step

result_blocks:
  summary:
    title:
      es: "Resumen dinámico"
      en: "Dynamic summary"
  physical_reading:
    title:
      es: "Lectura física del CM"
      en: "Physical reading of the CM"
  coherence:
    title:
      es: "Análisis de coherencia"
      en: "Coherence analysis"
  model_validity:
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    title:
      es: "Interpretación gráfica"
      en: "Graph interpretation"
  likely_errors:
    title:
      es: "Posibles errores"
      en: "Likely errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next step"

dependencies:
  magnitudes:
    - F_ext
    - M
    - a_cm
    - v_cm
    - p_tot
    - J_ext
    - Delta_vcm
    - m1
    - m2
    - v1
    - v2
    - Delta_v
    - Delta_M
    - v_escape
    - dp_tot
  formulas:
    - newton_cm
    - momentum_cm
    - impulse_momentum_cm
    - fext_zero_condition
    - acm_zero_result
    - newton_general_momentum
    - variable_mass_expansion
    - rocket_momentum_balance
    - vcm_weighted_average
    - vcm_two_bodies
    - sum_mass
    - newton_variable_mass

targets:
  v_cm:
    summary_rules:
      - id: vcm_const_summary
        when: "abs(F_ext) < 1e-6"
        status: success
        text:
          es: "El centro de masas mantiene un estado inercial constante (MRU) lo cual indica una ausencia de fuerza externa neta."
          en: "The center of mass maintains a constant inertial state (CVMR) which indicates an absence of net external force."
    physical_reading_rules:
      - id: vcm_read_magnitude
        when: "true"
        status: info
        text:
          es: "La velocidad del CM [[v_cm]] representa el flujo de masa global; indica hacia dónde se desplaza el 'grueso' de la materia."
          en: "The CM velocity [[v_cm]] represents the global mass flow; it indicates where the 'bulk' of the matter is moving."
    coherence_rules:
      - id: vcm_limit_check
        when: "abs(v_cm) > 1e8"
        status: danger
        text:
          es: "Incoherencia detectada: La velocidad del CM se acerca a la velocidad de la luz."
          en: "Incoherence detected: CM velocity approaches the speed of light."
    model_validity_rules:
      - id: constant_mass_validity
        when: "true"
        status: success
        text:
          es: "El modelo de Newton para sistemas es válido siempre que el marco sea inercial."
          en: "The Newton model for systems is valid as long as the frame is inertial."
    graph_rules:
      - id: cm_trajectory_read
        when: "true"
        status: info
        text:
          es: "La curva en el gráfico representa la trayectoria del baricentro."
          en: "The curve in the graph represents the barycenter trajectory."
    likely_errors:
      - id: internal_force_error
        when: "true"
        status: warning
        text:
          es: "Cuidado: No incluyas fuerzas internas (como explosiones) en el balance de [[F_ext]]."
          en: "Careful: Do not include internal forces (such as explosions) in the [[F_ext]] balance."
    next_step_rules:
      - id: vcm_to_rotation
        when: "true"
        status: info
        text:
          es: "Ahora que conoces la traslación, investiga la rotación del sistema alrededor del CM."
          en: "Next step: Investigate the system's rotation around the CM."

  p_tot:
    summary_rules:
      - id: ptot_cons_summary
        when: "abs(F_ext) < 1e-6"
        status: success
        text:
          es: "El momento lineal total se conserva estrictamente por tanto la cantidad de movimiento total es constante."
          en: "Total linear momentum is strictly conserved therefore the total amount of motion is constant."
    physical_reading_rules:
      - id: ptot_read_inertia
        when: "true"
        status: info
        text:
          es: "[[p_tot]] mide la 'cantidad de movimiento' inercial que porta el sistema completo."
          en: "[[p_tot]] measures the inertial 'amount of motion' carried by the complete system."
    coherence_rules:
      - id: ptot_vcm_link
        when: "abs(p_tot - M*v_cm) > 1e-3"
        status: danger
        text:
          es: "Incoherencia: El momento total [[p_tot]] debe coincidir con el producto [[M]] * [[v_cm]]."
          en: "Inconsistency: Total momentum [[p_tot]] must match the product [[M]] * [[v_cm]]."
    model_validity_rules:
      - id: classical_ptot_val
        when: "true"
        status: ok
        text:
          es: "La aditividad de momentos es válida en el régimen galileano."
          en: "Momentum additivity is valid in the Galilean regime."
    graph_rules:
      - id: ptot_graph_slope
        when: "true"
        status: info
        text:
          es: "La pendiente de la gráfica de momento respecto al tiempo es igual a la fuerza externa [[F_ext]]."
          en: "The slope of the momentum vs. time graph equals the external force [[F_ext]]."
    likely_errors:
      - id: ptot_internal_err
        when: "true"
        status: warning
        text:
          es: "Error común: Creer que los choques internos pueden cambiar el [[p_tot]] del sistema."
          en: "Common error: Believing that internal collisions can change the system's [[p_tot]]."
    next_step_rules:
      - id: ptot_to_impulse
        when: "true"
        status: info
        text:
          es: "Calcula el impulso externo [[J_ext]] necesario para producir un cambio deseado en el momento."
          en: "Calculate the external impulse [[J_ext]] needed to produce a desired change in momentum."

  F_ext:
    summary_rules:
      - id: fext_cause_summary
        when: "abs(F_ext) > 1e-6"
        status: info
        text:
          es: "La fuerza externa es la causa única que indica la aceleración del centro de masas."
          en: "External force is the sole cause that indicates center-of-mass acceleration."
    physical_reading_rules:
      - id: fext_interaction_read
        when: "true"
        status: info
        text:
          es: "[[F_ext]] representa la interacción neta entre el sistema y su entorno."
          en: "[[F_ext]] represents the net interaction between the system and its environment."
    coherence_rules:
      - id: fext_acm_coh
        when: "abs(F_ext - M*a_cm) > 1e-3"
        status: danger
        text:
          es: "Violación de la 2ª Ley: La fuerza [[F_ext]] no coincide con la aceleración observada [[a_cm]]."
          en: "2nd Law violation: Force [[F_ext]] does not match the observed acceleration [[a_cm]]."
    model_validity_rules:
      - id: fext_frame_val
        when: "true"
        status: success
        text:
          es: "Solo las fuerzas reales deben incluirse en este balance inercial."
          en: "Only real forces should be included in this inertial balance."
    graph_rules:
      - id: fext_vector_graph
        when: "true"
        status: info
        text:
          es: "El vector fuerza externa se aplica sobre el marcador del centro de masas."
          en: "The external force vector is applied to the center-of-mass marker."
    likely_errors:
      - id: fext_internal_forget
        when: "true"
        status: warning
        text:
          es: "No olvides que las fuerzas de ligadura internas se anulan y no afectan al CM."
          en: "Don't forget that internal constraint forces cancel out and do not affect the CM."
    next_step_rules:
      - id: fext_to_work
        when: "true"
        status: info
        text:
          es: "Investiga el trabajo realizado por estas fuerzas externas sobre el sistema."
          en: "Investigate the work done by these external forces on the system."

  M:
    summary_rules:
      - id: m_total_summary
        when: "true"
        status: info
        text:
          es: "La masa total [[M]] resume la inercia traslacional de todo el conjunto de partículas."
          en: "Total mass [[M]] summarizes the translational inertia of the entire set of particles."
    physical_reading_rules:
      - id: m_reading
        when: "true"
        status: info
        text:
          es: "Representa la suma aditiva de todos los constituyentes inerciales del sistema."
          en: "Represents the additive sum of all inertial constituents of the system."
    coherence_rules:
      - id: m_pos_check
        when: "M <= 0"
        status: danger
        text:
          es: "Fallo de masa: Un sistema físico no puede tener masa nula o negativa."
          en: "Mass failure: A physical system cannot have zero or negative mass."
    model_validity_rules:
      - id: constant_m_val
        when: "true"
        status: ok
        text:
          es: "Válido para sistemas donde no hay flujo de materia hacia el exterior."
          en: "Valid for systems where there is no outward matter flow."
    graph_rules:
      - id: m_graph_scale
        when: "true"
        status: info
        text:
          es: "La masa total determina el factor de escala de los vectores aceleración."
          en: "Total mass determines the scale factor for acceleration vectors."
    likely_errors:
      - id: m_partial_error
        when: "true"
        status: warning
        text:
          es: "Error: No uses una masa parcial como si fuera la masa total del sistema."
          en: "Error: Do not use a partial mass as if it were the system's total mass."
    next_step_rules:
      - id: m_to_momentum
        when: "true"
        status: info
        text:
          es: "Calcula el momento lineal total usando este valor de masa total."
          en: "Calculate the total linear momentum using this total mass value."

  a_cm:
    summary_rules:
      - id: acm_summary
        when: "true"
        status: info
        text:
          es: "La aceleración del CM [[a_cm]] indica el ritmo de cambio del estado de movimiento global."
          en: "CM acceleration [[a_cm]] indicates the rate of change of the global state of motion."
    physical_reading_rules:
      - id: acm_reading
        when: "true"
        status: info
        text:
          es: "Es la respuesta cinemática directa a la fuerza externa neta aplicada."
          en: "It is the direct kinematic response to the applied net external force."
    coherence_rules:
      - id: acm_dir_check
        when: "true"
        status: ok
        text:
          es: "La dirección de la aceleración debe coincidir con la de la fuerza externa neta."
          en: "The acceleration's direction must match the net external force's direction."
    model_validity_rules:
      - id: acm_newton_val
        when: "true"
        status: ok
        text:
          es: "Relación válida en el marco de la mecánica clásica no relativista."
          en: "Valid relationship within non-relativistic classical mechanics."
    graph_rules:
      - id: acm_vector_read
        when: "true"
        status: info
        text:
          es: "El vector [[a_cm]] nace del marcador del centro de masas."
          en: "The [[a_cm]] vector originates from the center-of-mass marker."
    likely_errors:
      - id: acm_internal_force_err
        when: "true"
        status: warning
        text:
          es: "No asumas que el CM acelera debido a fuerzas internas como colisiones."
          en: "Do not assume the CM accelerates due to internal forces like collisions."
    next_step_rules:
      - id: acm_to_trajectory
        when: "true"
        status: info
        text:
          es: "Integra esta aceleración para obtener la trayectoria futura del baricentro."
          en: "Integrate this acceleration to obtain the future barycenter trajectory."

  J_ext:
    summary_rules:
      - id: jext_summary
        when: "true"
        status: info
        text:
          es: "El impulso externo [[J_ext]] resume la transferencia de momento desde el entorno."
          en: "External impulse [[J_ext]] summarizes the momentum transfer from the environment."
    physical_reading_rules:
      - id: jext_reading
        when: "true"
        status: info
        text:
          es: "Representa el área bajo la curva de fuerza-tiempo aplicada al sistema."
          en: "Represents the area under the force-time curve applied to the system."
    coherence_rules:
      - id: jext_sign_coherence
        when: "true"
        status: info
        text:
          es: "El signo del impulso debe ser coherente con el sentido de la fuerza aplicada."
          en: "The impulse sign must be consistent with the direction of the applied force."
    model_validity_rules:
      - id: impulsive_force_limit
        when: "abs(J_ext) > 1e10"
        status: warning
        text:
          es: "Impulso extremadamente alto: verificar si el modelo clásico de partículas sigue siendo aplicable."
          en: "Extremely high impulse: verify if the classical particle model is still applicable."
    graph_rules:
      - id: jext_graph_area
        when: "true"
        status: info
        text:
          es: "El impulso se representa como el área bajo la curva fuerza-tiempo."
          en: "Impulse is represented as the area under the force-time curve."
    likely_errors:
      - id: jext_internal_err
        when: "true"
        status: warning
        text:
          es: "Error: No incluyas impulsos de fuerzas internas en el cálculo del cambio de momento global."
          en: "Error: Do not include impulses from internal forces in the global momentum change calculation."
    next_step_rules:
      - id: jext_to_energy
        when: "true"
        status: info
        text:
          es: "Calcula el trabajo realizado por estas fuerzas para evaluar el cambio en la energía cinética."
          en: "Calculate the work done by these forces to evaluate the change in kinetic energy."

  Delta_vcm:
    summary_rules:
      - id: dvcm_summary
        when: "true"
        status: info
        text:
          es: "El cambio de velocidad [[Delta_vcm]] indica la respuesta inercial al impulso."
          en: "Velocity change [[Delta_vcm]] indicates the inertial response to impulse."
    physical_reading_rules:
      - id: dvcm_reading
        when: "true"
        status: info
        text:
          es: "Es la variación neta en el vector velocidad del baricentro."
          en: "It is the net variation in the barycenter velocity vector."
    coherence_rules:
      - id: dvcm_direction_check
        when: "true"
        status: info
        text:
          es: "La variación de velocidad del CM debe tener la misma dirección que el impulso neto."
          en: "The CM velocity variation must have the same direction as the net impulse."
    model_validity_rules:
      - id: dvcm_non_relativistic
        when: "abs(Delta_vcm) < 1e6"
        status: success
        text:
          es: "El cambio de velocidad está dentro del rango no relativista."
          en: "The velocity change is within the non-relativistic range."
    graph_rules:
      - id: dvcm_graph_jump
        when: "true"
        status: info
        text:
          es: "En el gráfico, este valor representa el 'salto' de velocidad tras el evento impulsivo."
          en: "In the graph, this value represents the velocity 'jump' after the impulsive event."
    likely_errors:
      - id: dvcm_scalar_error
        when: "true"
        status: warning
        text:
          es: "Evita restar solo los módulos; la variación de velocidad es una magnitud vectorial."
          en: "Avoid subtracting only magnitudes; the velocity variation is a vector magnitude."
    next_step_rules:
      - id: dvcm_to_position
        when: "true"
        status: info
        text:
          es: "Utiliza esta variación para predecir la nueva trayectoria del baricentro."
          en: "Use this variation to predict the new trajectory of the barycenter."

  v2:
    summary_rules:
      - id: v2_summary
        when: "true"
        status: info
        text:
          es: "La velocidad de la partícula 2 [[v2]] indica el estado de movimiento tras la separación."
          en: "Particle 2 velocity [[v2]] indicates the state of motion after separation."
    physical_reading_rules:
      - id: v2_reading
        when: "true"
        status: info
        text:
          es: "Es una de las componentes que determinan la velocidad del CM resultante."
          en: "It is one of the components determining the resulting CM velocity."
    coherence_rules:
      - id: v2_conservation_check
        when: "true"
        status: info
        text:
          es: "La suma de momentos tras la separación debe coincidir con el momento inicial."
          en: "The sum of momenta after separation must match the initial momentum."
    model_validity_rules:
      - id: v2_classical_range
        when: "true"
        status: ok
        text:
          es: "Válido para velocidades significativamente menores a la de la luz."
          en: "Valid for velocities significantly lower than the speed of light."
    graph_rules:
      - id: v2_graph
        when: "true"
        status: info
        text:
          es: "Vector velocidad de uno de los fragmentos del sistema."
          en: "Velocity vector of one of the system's fragments."
    likely_errors:
      - id: v2_abs_err
        when: "true"
        status: warning
        text:
          es: "Error: Asegúrate de usar la velocidad absoluta respecto al laboratorio."
          en: "Error: Ensure you use the absolute velocity relative to the laboratory."
    next_step_rules:
      - id: v2_to_kinetic_energy
        when: "true"
        status: info
        text:
          es: "Calcula la energía cinética de este fragmento para el balance energético final."
          en: "Calculate this fragment's kinetic energy for the final energy balance."

  Delta_v:
    summary_rules:
      - id: dv_summary
        when: "true"
        status: info
        text:
          es: "La variación de velocidad [[Delta_v]] indica el incremento por propulsión."
          en: "Velocity variation [[Delta_v]] indicates the propulsion increment."
    physical_reading_rules:
      - id: dv_reading
        when: "true"
        status: info
        text:
          es: "Cuantifica la ganancia de rapidez del cuerpo principal tras la eyección de masa."
          en: "Quantifies the speed gain of the main body after mass ejection."
    coherence_rules:
      - id: dv_sign_check
        when: "Delta_v < 0"
        status: warning
        text:
          es: "Variación negativa detectada; comprueba si el empuje es opuesto al movimiento."
          en: "Negative variation detected; check if thrust is opposite to motion."
    model_validity_rules:
      - id: dv_exhaust_constancy
        when: "true"
        status: info
        text:
          es: "El modelo asume que la velocidad de escape de los gases es constante."
          en: "The model assumes that the gas exhaust velocity is constant."
    graph_rules:
      - id: dv_graph
        when: "true"
        status: info
        text:
          es: "Se visualiza como el cambio en el módulo de la velocidad del cohete."
          en: "It is visualized as the change in the rocket's velocity magnitude."
    likely_errors:
      - id: dv_mass_flow_err
        when: "true"
        status: warning
        text:
          es: "Error: Ignorar el flujo de masa resulta en un balance de momento incorrecto."
          en: "Error: Ignoring mass flow results in an incorrect momentum balance."
    next_step_rules:
      - id: dv_to_mass_ratio
        when: "true"
        status: info
        text:
          es: "Relaciona este incremento con la fracción de masa consumida mediante la ecuación de Tsiolkovsky."
          en: "Relate this increase to the mass fraction consumed using the Tsiolkovsky equation."
`;export{e as default};
