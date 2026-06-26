const e=`version: 2
id: interpretacion-palanca
leaf_id: palanca
nombre:
  es: "Interpretación Experta de la Física de la Palanca"
  en: "Expert Interpretation of Lever Physics"
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: aplicaciones
  parent_id: maquinas-simples
  ruta_relativa: fisica-clasica/mecanica/aplicaciones/maquinas-simples/palanca

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
      es: "Resumen del balance de momentos"
      en: "Torque balance summary"
  physical_reading:
    title:
      es: "Análisis físico profundo"
      en: "Deep physical analysis"
  coherence:
    title:
      es: "Validación de coherencia sistémica"
      en: "Systemic coherence validation"
  model_validity:
    title:
      es: "Límites del modelo y asunciones"
      en: "Model limits and assumptions"
  graph_reading:
    title:
      es: "Lectura técnica del diagrama"
      en: "Technical diagram reading"
  likely_errors:
    title:
      es: "Detección proactiva de errores"
      en: "Proactive error detection"
  next_step:
    title:
      es: "Ruta de aprendizaje sugerida"
      en: "Suggested learning path"

ui:
  enabled: true
  display_modes:
    - calculator_inline
    - graph_inline
    - dedicated_tab
    - modal
  labels:
    - lever_mechanics
    - torque_balance
    - mechanical_advantage
  priority_order:
    - summary_rules
    - physical_reading_rules
    - coherence_rules
    - model_validity_rules
    - graph_rules
    - likely_errors
    - next_step_rules
  inline_limits: 3

dependencies:
  formulas:
    - ley_palanca
    - ventaja_mecanica_geometria
    - ventaja_mecanica_fuerzas
    - rendimiento_palanca
    - conservacion_trabajo
    - torque_potencia
    - torque_resistencia
    - ventaja_mecanica_cinematica
  magnitudes:
    - P
    - R
    - bP
    - bR
    - VM
    - eta
    - VMreal
    - sP
    - sR
    - tauP
    - tauR
    - clasePalanca

global_context:
  physical_domain:
    es: "Estática y cinemática de máquinas simples."
    en: "Statics and kinematics of simple machines."
  axis_convention:
    es: "Pivote fijo en el fulcro; momentos calculados respecto a este eje."
    en: "Fixed pivot at the fulcrum; torques calculated relative to this axis."
  standard_assumptions:
    - Barra rígida indeformable (modelo ideal).
    - Fuerzas aplicadas perpendicularmente (salvo indicación angular).
    - Desplazamientos considerados como arcos circulares para sP y sR.
  standard_warnings:
    - "Principio de Intercambio: Lo que ganas en fuerza lo pagas en recorrido."

targets:
  VM:
    magnitude_type: ratio
    semantic_role:
      es: "Factor de multiplicación de fuerza"
      en: "Force multiplication factor"
    summary_rules:
      - id: vm_sum_gain
        when: "result > 1"
        status: ok
        text:
          es: "El sistema actúa como amplificador de fuerza: con poco esfuerzo mueves mucha carga."
          en: "The system acts as a force amplifier: with little effort you move a lot of load."
      - id: vm_sum_speed
        when: "result < 1"
        status: info
        text:
          es: "El sistema actúa como amplificador de velocidad: sacrificas fuerza para ganar alcance."
          en: "The system acts as a speed amplifier: you sacrifice force to gain reach."
    physical_reading_rules:
      - id: vm_read_ratio
        when: "true"
        status: info
        text:
          es: "Una ventaja de [[VM]] indica que la carga es [[VM]] veces mayor que la potencia porque la distancia al fulcro lo compensa."
          en: "An advantage of [[VM]] indicates the load is [[VM]] times the effort because the distance to the fulcrum compensates it."
      - id: vm_read_clase
        when: "clasePalanca == 2 && result <= 1"
        status: danger
        text:
          es: "¡Anomalía!: Una palanca de 2ª clase siempre debe tener VM > 1 por su diseño geométrico."
          en: "Anomaly!: A 2nd class lever must always have VM > 1 due to its geometric design."
    coherence_rules:
      - id: vm_coh_neg
        when: "result <= 0"
        status: danger
        text:
          es: "¡Incoherencia!: La ventaja mecánica debe ser positiva; un valor nulo indica un fallo en la definición de los brazos."
          en: "Inconsistency!: Mechanical advantage must be positive; a null value indicates a failure in arm definition."
    model_validity_rules:
      - id: vm_val_ideal
        when: "true"
        status: ok
        text:
          es: "Este cálculo supone un sólido rígido ideal donde no se considera la masa de la propia barra de la palanca."
          en: "This calculation assumes an ideal rigid body where the mass of the lever bar itself is not considered."
    graph_rules:
      - id: vm_graph_scaling
        when: "true"
        status: info
        text:
          es: "En el gráfico, la VM se observa en la relación geométrica de los brazos proyectados sobre el eje horizontal."
          en: "In the graph, VM is observed in the geometric relationship of the arms projected on the horizontal axis."
    likely_errors:
      - id: vm_err_inv
        when: "bP < bR && result > 1"
        status: danger
        text:
          es: "Error de entrada: Has declarado VM > 1 pero el brazo de potencia es más corto que el de resistencia."
          en: "Input error: You declared VM > 1 but the effort arm is shorter than the resistance arm."
    next_step_rules:
      - id: vm_next_eta
        when: "true"
        status: info
        text:
          es: "Aplica ahora el rendimiento [[eta]] para ver cómo la fricción disminuye la ventaja mecánica real [[VMreal]]."
          en: "Now apply efficiency [[eta]] to see how friction decreases the actual mechanical advantage [[VMreal]]."

  P:
    magnitude_type: force
    semantic_role:
      es: "Esfuerzo de potencia aplicado"
      en: "Applied effort force"
    summary_rules:
      - id: p_sum_default
        when: "true"
        status: info
        text:
          es: "La potencia [[P]] es la fuerza de entrada que genera el momento motor."
          en: "The power [[P]] is the input force that generates the motor torque."
    physical_reading_rules:
      - id: p_read_balance
        when: "true"
        status: info
        text:
          es: "Para lograr el equilibrio, P debe ser inversamente proporcional a su brazo [[bP]] según la ley de momentos."
          en: "To achieve equilibrium, P must be inversely proportional to its arm [[bP]] according to the law of moments."
    coherence_rules:
      - id: p_coh_neg
        when: "result < 0"
        status: danger
        text:
          es: "Incoherencia: La magnitud de la fuerza no puede ser negativa en este modelo estático."
          en: "Inconsistency: Force magnitude cannot be negative in this static model."
    model_validity_rules:
      - id: p_val_limit
        when: "result > 10000"
        status: warning
        text:
          es: "Límite físico: Una fuerza tan alta podría deformar permanentemente el material de la palanca."
          en: "Physical limit: Such a high force could permanently deform the lever material."
    graph_rules:
      - id: p_graph_arrow
        when: "true"
        status: info
        text:
          es: "El vector de fuerza P se representa con una flecha cuya longitud es proporcional a su magnitud."
          en: "The force vector P is represented by an arrow whose length is proportional to its magnitude."
    likely_errors:
      - id: p_err_grav
        when: "result < 50"
        status: warning
        text:
          es: "Posible error: ¿Has multiplicado la masa por 9.8? Confundir kg con N es un fallo común."
          en: "Possible error: Have you multiplied mass by 9.8? Confusing kg with N is a common failure."
    next_step_rules:
      - id: p_next_work
        when: "true"
        status: info
        text:
          es: "Considera el desplazamiento [[sP]] para calcular el trabajo mecánico total realizado."
          en: "Consider the displacement [[sP]] to calculate the total mechanical work performed."

  R:
    magnitude_type: force
    semantic_role:
      es: "Carga o resistencia a vencer"
      en: "Load or resistance to overcome"
    summary_rules:
      - id: r_sum_load
        when: "true"
        status: info
        text:
          es: "La resistencia [[R]] representa el peso u oposición que la máquina debe mover."
          en: "The resistance [[R]] represents the weight or opposition that the machine must move."
    physical_reading_rules:
      - id: r_read_torque
        when: "true"
        status: info
        text:
          es: "La carga genera un momento resistente [[tauR]] que debe ser compensado por el momento motor."
          en: "The load generates a resistant torque [[tauR]] that must be compensated by the motor torque."
    coherence_rules:
      - id: r_coh_zero
        when: "result == 0"
        status: warning
        text:
          es: "Carga nula: Sin resistencia, cualquier fuerza [[P]] mínima causará una aceleración angular infinita."
          en: "Null load: Without resistance, any minimal force [[P]] will cause infinite angular acceleration."
    model_validity_rules:
      - id: r_val_massless
        when: "true"
        status: info
        text:
          es: "Se asume que la carga es puntual y no altera la distribución de masa de la barra."
          en: "It is assumed that the load is point-like and does not alter the mass distribution of the bar."
    graph_rules:
      - id: r_graph_pos
        when: "true"
        status: info
        text:
          es: "La posición de R respecto al fulcro define el tipo de palanca (1ª, 2ª o 3ª clase)."
          en: "The position of R relative to the fulcrum defines the type of lever (1st, 2nd or 3rd class)."
    likely_errors:
      - id: r_err_sign
        when: "result < 0"
        status: danger
        text:
          es: "Error de sentido: Una resistencia negativa implicaría que el objeto ayuda al movimiento en lugar de oponerse."
          en: "Direction error: A negative resistance would imply the object aids movement instead of opposing it."
    next_step_rules:
      - id: r_next_ma
        when: "true"
        status: info
        text:
          es: "Compara R con P para validar experimentalmente la ventaja mecánica obtenida."
          en: "Compare R with P to experimentally validate the mechanical advantage obtained."

  bP:
    magnitude_type: distance
    semantic_role:
      es: "Brazo de palanca del esfuerzo"
      en: "Effort lever arm"
    summary_rules:
      - id: bp_sum_dist
        when: "true"
        status: info
        text:
          es: "El brazo [[bP]] es la distancia desde el fulcro hasta el punto donde aplicas la fuerza."
          en: "The arm [[bP]] is the distance from the fulcrum to the point where you apply the force."
    physical_reading_rules:
      - id: bp_read_mult
        when: "result > bR"
        status: ok
        text:
          es: "Brazo favorable: Al ser mayor que el brazo de carga, el sistema multiplica tu fuerza."
          en: "Favorable arm: Being larger than the load arm, the system multiplies your force."
    coherence_rules:
      - id: bp_coh_zero
        when: "result == 0"
        status: danger
        text:
          es: "Configuración inválida: Con brazo cero no puedes generar torque, sin importar cuánta fuerza apliques."
          en: "Invalid configuration: With zero arm you cannot generate torque, no matter how much force you apply."
    model_validity_rules:
      - id: bp_val_flex
        when: "result > 5"
        status: warning
        text:
          es: "Riesgo estructural: Un brazo tan largo requiere una barra extremadamente rígida para no flectar."
          en: "Structural risk: Such a long arm requires an extremely rigid bar to not flex."
    graph_rules:
      - id: bp_graph_dim
        when: "true"
        status: info
        text:
          es: "En el Svg, esta distancia se mide horizontalmente desde el eje central (fulcro)."
          en: "In the Svg, this distance is measured horizontally from the central axis (fulcrum)."
    likely_errors:
      - id: bp_err_total
        when: "result > (bP + bR) * 0.9"
        status: warning
        text:
          es: "¿Has medido desde el fulcro? Un error común es usar la longitud total de la barra."
          en: "Have you measured from the fulcrum? A common mistake is using the total length of the bar."
    next_step_rules:
      - id: bp_next_move
        when: "true"
        status: info
        text:
          es: "Prueba a duplicar [[bP]] y observa cómo la fuerza necesaria [[P]] se reduce a la mitad."
          en: "Try doubling [[bP]] and observe how the required force [[P]] is reduced by half."

  eta:
    magnitude_type: ratio
    semantic_role:
      es: "Rendimiento o eficiencia del sistema"
      en: "System yield or efficiency"
    summary_rules:
      - id: eta_sum_default
        when: "true"
        status: info
        text:
          es: "El rendimiento indica la fracción de trabajo útil que se conserva tras las pérdidas por fricción."
          en: "Efficiency indicates the fraction of useful work conserved after friction losses."
    physical_reading_rules:
      - id: eta_read_loss
        when: "result < 1"
        status: warning
        text:
          es: "Disipación: Solo el [[result * 100]]% de la energía se aprovecha; el resto se pierde en calor en el fulcro."
          en: "Dissipation: Only [[result * 100]]% of the energy is used; the rest is lost as heat at the fulcrum."
    coherence_rules:
      - id: eta_coh_over
        when: "result > 1"
        status: danger
        text:
          es: "¡Imposible!: Un rendimiento mayor al 100% violaría la conservación de la energía."
          en: "Impossible!: Efficiency greater than 100% would violate energy conservation."
    model_validity_rules:
      - id: eta_val_friction
        when: "result < 0.5"
        status: danger
        text:
          es: "Fricción crítica: Con un rendimiento tan bajo, la mayoría de tu esfuerzo se pierde en vencer el roce."
          en: "Critical friction: With such low efficiency, most of your effort is lost in overcoming friction."
    graph_rules:
      - id: eta_graph_visual
        when: "true"
        status: info
        text:
          es: "El rendimiento afecta a la pendiente de la recta de respuesta en el gráfico de fuerzas."
          en: "Efficiency affects the slope of the response line in the force graph."
    likely_errors:
      - id: eta_err_zero
        when: "result == 0"
        status: danger
        text:
          es: "Máquina bloqueada: Un rendimiento cero implica que toda la fuerza se disipa y nada se mueve."
          en: "Locked machine: Zero efficiency implies all force is dissipated and nothing moves."
    next_step_rules:
      - id: eta_next_comp
        when: "true"
        status: info
        text:
          es: "Compara la ventaja ideal con la real [[VMreal]] para ver el impacto del diseño mecánico."
          en: "Compare ideal advantage with actual [[VMreal]] to see the impact of mechanical design."

  bR:
    magnitude_type: distance
    semantic_role:
      es: "Brazo de palanca de la carga"
      en: "Resistance lever arm"
    summary_rules:
      - id: br_sum_dist
        when: "true"
        status: info
        text:
          es: "El brazo [[bR]] es la distancia desde el fulcro hasta el punto donde se sitúa la carga."
          en: "The arm [[bR]] is the distance from the fulcrum to the point where the load is located."
    physical_reading_rules:
      - id: br_read_torque
        when: "true"
        status: info
        text:
          es: "Un brazo [[bR]] corto reduce el torque resistente, facilitando la elevación del objeto."
          en: "A short arm [[bR]] reduces the resistance torque, facilitating the elevation of the object."
    coherence_rules:
      - id: br_coh_limit
        when: "result > (bP + bR)"
        status: danger
        text:
          es: "Geometría imposible: El brazo de resistencia no puede exceder la longitud de la barra."
          en: "Impossible geometry: The resistance arm cannot exceed the bar length."
    model_validity_rules:
      - id: br_val_point
        when: "true"
        status: ok
        text:
          es: "Se asume que la carga no desliza ni cambia su brazo [[bR]] durante el movimiento."
          en: "It is assumed that the load does not slide or change its arm [[bR]] during movement."
    graph_rules:
      - id: br_graph_anchor
        when: "true"
        status: info
        text:
          es: "En el diagrama, bR se representa como el segmento entre el pivote y la carga R."
          en: "In the diagram, bR is represented as the segment between the pivot and the load R."
    likely_errors:
      - id: br_err_zero
        when: "result == 0"
        status: warning
        text:
          es: "¿Carga sobre el fulcro? Si bR es cero, la carga no genera torque y el sistema no es una palanca."
          en: "Load on the fulcrum? If bR is zero, the load generates no torque and the system is not a lever."
    next_step_rules:
      - id: br_next_ratio
        when: "true"
        status: info
        text:
          es: "Analiza la relación [[bP]]/[[bR]] para predecir la ventaja mecánica sin usar fuerzas."
          en: "Analyze the ratio [[bP]]/[[bR]] to predict the mechanical advantage without using forces."

  VMreal:
    magnitude_type: ratio
    semantic_role:
      es: "Ventaja mecánica considerando pérdidas"
      en: "Mechanical advantage considering losses"
    summary_rules:
      - id: vmr_sum_perf
        when: "true"
        status: ok
        text:
          es: "La ventaja real [[VMreal]] es el beneficio práctico que obtienes tras descontar la fricción."
          en: "The actual advantage [[VMreal]] is the practical benefit you get after discounting friction."
    physical_reading_rules:
      - id: vmr_read_comp
        when: "result < VM"
        status: warning
        text:
          es: "Efecto del rozamiento: Pierdes [[(VM - result)/VM * 100]]% de ventaja debido a las ineficiencias del eje."
          en: "Friction effect: You lose [[(VM - result)/VM * 100]]% of advantage due to shaft inefficiencies."
    coherence_rules:
      - id: vmr_coh_over
        when: "result > VM"
        status: danger
        text:
          es: "¡Paradoja!: La ventaja real nunca puede ser superior a la geométrica ideal."
          en: "Paradox!: The actual advantage can never be higher than the ideal geometric one."
    model_validity_rules:
      - id: vmr_val_loss
        when: "true"
        status: info
        text:
          es: "Este cálculo es esencial para el diseño de herramientas reales donde el fulcro no es perfecto."
          en: "This calculation is essential for the design of real tools where the fulcrum is not perfect."
    graph_rules:
      - id: vmr_graph_line
        when: "true"
        status: info
        text:
          es: "En el gráfico, VMreal define la inclinación de la recta de 'fuerza real necesaria'."
          en: "In the graph, VMreal defines the slope of the 'actual required force' line."
    likely_errors:
      - id: vmr_err_ideal
        when: "result == VM"
        status: info
        text:
          es: "Interpretación ideal: Estás asumiendo que no hay ninguna pérdida energética en el proceso."
          en: "Ideal interpretation: You are assuming there is no energy loss in the process."
    next_step_rules:
      - id: vmr_next_design
        when: "true"
        status: info
        text:
          es: "Optimiza el diseño reduciendo bR para compensar el bajo rendimiento [[eta]]."
          en: "Optimize the design by reducing bR to compensate for low efficiency [[eta]]."

  tauP:
    magnitude_type: torque
    semantic_role:
      es: "Momento de fuerza de entrada"
      en: "Input force torque"
    summary_rules:
      - id: tp_sum_action
        when: "true"
        status: info
        text:
          es: "El momento [[tauP]] mide la efectividad de tu empuje para hacer girar la barra."
          en: "The torque [[tauP]] measures the effectiveness of your push to rotate the bar."
    physical_reading_rules:
      - id: tp_read_dir
        when: "true"
        status: info
        text:
          es: "Un torque positivo indica un sentido de giro que el sistema debe equilibrar con la carga."
          en: "A positive torque indicates a direction of rotation that the system must balance with the load."
    coherence_rules:
      - id: tp_coh_bal
        when: "abs(result - tauR) < 0.001"
        status: ok
        text:
          es: "Estado de reposo: El torque motor iguala al resistente, manteniendo la palanca inmóvil."
          en: "State of rest: The motor torque equals the resistant one, keeping the lever motionless."
    model_validity_rules:
      - id: tp_val_axis
        when: "true"
        status: info
        text:
          es: "Se asume que el eje del fulcro es indeformable y soporta el torque sin desplazarse."
          en: "It is assumed that the fulcrum axis is undeformable and supports the torque without shifting."
    graph_rules:
      - id: tp_graph_curve
        when: "true"
        status: info
        text:
          es: "El torque se visualiza como una flecha curva de rotación en el fulcro."
          en: "Torque is visualized as a curved rotation arrow at the fulcrum."
    likely_errors:
      - id: tp_err_dist
        when: "bP == 0"
        status: danger
        text:
          es: "Fallo de brazo: Al ser bP nulo, el torque es cero. No puedes mover la palanca así."
          en: "Arm failure: Since bP is null, torque is zero. You cannot move the lever this way."
    next_step_rules:
      - id: tp_next_law
        when: "true"
        status: info
        text:
          es: "Aplica la Segunda Ley de Newton para rotaciones si quieres ver la aceleración angular."
          en: "Apply Newton's Second Law for rotations if you want to see the angular acceleration."

  tauR:
    magnitude_type: torque
    semantic_role:
      es: "Momento de fuerza resistente"
      en: "Resistant force torque"
    summary_rules:
      - id: tr_sum_load
        when: "true"
        status: info
        text:
          es: "El momento [[tauR]] es la oposición que la carga ejerce contra el giro de la barra."
          en: "The torque [[tauR]] is the opposition the load exerts against the bar rotation."
    physical_reading_rules:
      - id: tr_read_opp
        when: "true"
        status: info
        text:
          es: "Para vencer la carga, tu momento motor debe ser al menos igual a este valor [[tauR]]."
          en: "To overcome the load, your motor torque must be at least equal to this value [[tauR]]."
    coherence_rules:
      - id: tr_coh_over
        when: "result > tauP"
        status: warning
        text:
          es: "Carga dominante: El momento resistente es mayor; la palanca caerá hacia el lado de la carga."
          en: "Dominant load: The resistant torque is greater; the lever will fall toward the load side."
    model_validity_rules:
      - id: tr_val_dist
        when: "true"
        status: info
        text:
          es: "El cálculo del momento resistente depende críticamente de la precisión del brazo [[bR]]."
          en: "The resistant torque calculation depends critically on the precision of the arm [[bR]]."
    graph_rules:
      - id: tr_graph_vector
        when: "true"
        status: info
        text:
          es: "Se representa mediante un vector de rotación opuesto al sentido de la potencia."
          en: "It is represented by a rotation vector opposite to the effort direction."
    likely_errors:
      - id: tr_err_force
        when: "R == 0"
        status: info
        text:
          es: "Resistencia nula: No hay momento resistente. El sistema se moverá con cualquier esfuerzo."
          en: "Null resistance: No resistant torque. The system will move with any effort."
    next_step_rules:
      - id: tr_next_stat
        when: "true"
        status: info
        text:
          es: "Busca el punto de equilibrio exacto variando la posición de la carga [[bR]]."
          en: "Find the exact equilibrium point by varying the load position [[bR]]."

  sP:
    magnitude_type: distance
    semantic_role:
      es: "Desplazamiento del punto de esfuerzo"
      en: "Effort point displacement"
    summary_rules:
      - id: sp_sum_arc
        when: "true"
        status: info
        text:
          es: "El desplazamiento [[sP]] es la distancia que recorre tu mano al accionar la palanca."
          en: "The displacement [[sP]] is the distance your hand travels when operating the lever."
    physical_reading_rules:
      - id: sp_read_work
        when: "true"
        status: info
        text:
          es: "Multiplicando [[P]] por [[sP]] obtienes el trabajo total que has invertido en el sistema."
          en: "Multiplying [[P]] by [[sP]] you get the total work you have invested in the system."
    coherence_rules:
      - id: sp_coh_ratio
        when: "abs(result/sR - VM) > 0.1"
        status: warning
        text:
          es: "Incoherencia cinemática: La relación de desplazamientos no coincide con la ventaja geométrica."
          en: "Kinematic inconsistency: The displacement ratio does not match the geometric advantage."
    model_validity_rules:
      - id: sp_val_arc
        when: "true"
        status: info
        text:
          es: "Se asume un movimiento circular; para ángulos pequeños, el arco coincide con la vertical."
          en: "Circular motion is assumed; for small angles, the arc coincides with the vertical."
    graph_rules:
      - id: sp_graph_arc
        when: "true"
        status: info
        text:
          es: "En la animación Svg, sP se visualiza como el arco de trayectoria del punto de potencia."
          en: "In the Svg animation, sP is visualized as the trajectory arc of the effort point."
    likely_errors:
      - id: sp_err_short
        when: "result < sR && VM > 1"
        status: danger
        text:
          es: "Fallo de la Regla de Oro: Si ganas fuerza, tu mano DEBE recorrer más distancia que la carga."
          en: "Golden Rule Failure: If you gain force, your hand MUST travel more distance than the load."
    next_step_rules:
      - id: sp_next_energy
        when: "true"
        status: info
        text:
          es: "Verifica que el trabajo de entrada coincida con el de salida [[R]] * [[sR]]."
          en: "Verify that the input work matches the output work [[R]] * [[sR]]."

  sR:
    magnitude_type: distance
    semantic_role:
      es: "Desplazamiento útil de la carga"
      en: "Useful load displacement"
    summary_rules:
      - id: sr_sum_lift
        when: "true"
        status: ok
        text:
          es: "El desplazamiento [[sR]] es el movimiento efectivo conseguido sobre la carga."
          en: "The displacement [[sR]] is the actual movement achieved on the load."
    physical_reading_rules:
      - id: sr_read_gain
        when: "VM < 1"
        status: info
        text:
          es: "Ganancia de velocidad: La carga se mueve [[1/VM]] veces más distancia que tu mano."
          en: "Speed gain: The load moves [[1/VM]] times more distance than your hand."
    coherence_rules:
      - id: sr_coh_over
        when: "result > sP && VM > 1"
        status: danger
        text:
          es: "Violación energética: No puedes mover la carga más distancia que la potencia si tienes ventaja mecánica."
          en: "Energy violation: You cannot move the load more distance than the power if you have mechanical advantage."
    model_validity_rules:
      - id: sr_val_small
        when: "true"
        status: info
        text:
          es: "Modelo de desplazamientos infinitesimales para garantizar la validez de los brazos constantes."
          en: "Infinitesimal displacement model to guarantee the validity of constant arms."
    graph_rules:
      - id: sr_graph_arc
        when: "true"
        status: info
        text:
          es: "Representado por el arco de movimiento del objeto resistente en el diagrama."
          en: "Represented by the movement arc of the resistant object in the diagram."
    likely_errors:
      - id: sr_err_zero
        when: "result == 0"
        status: warning
        text:
          es: "Sin movimiento: La carga está estática. Revisa si el momento motor es suficiente."
          en: "No movement: The load is static. Check if the motor torque is sufficient."
    next_step_rules:
      - id: sr_next_v
        when: "true"
        status: info
        text:
          es: "Divide [[sR]] por el tiempo para hallar la velocidad de elevación de la carga."
          en: "Divide [[sR]] by time to find the lifting speed of the load."

  clasePalanca:
    magnitude_type: classification
    semantic_role:
      es: "Arquitectura estructural del sistema"
      en: "Structural architecture of the system"
    summary_rules:
      - id: clase_sum_1
        when: "result == 1"
        status: info
        text:
          es: "1ª Clase (Interapoyante): Fulcro en el medio. Versatilidad total de diseño."
          en: "1st Class (Inter-support): Fulcrum in the middle. Total design versatility."
      - id: clase_sum_2
        when: "result == 2"
        status: ok
        text:
          es: "2ª Clase (Interresistente): Carga en el medio. Optimizada para fuerza máxima."
          en: "2nd Class (Inter-resistance): Load in the middle. Optimized for maximum force."
      - id: clase_sum_3
        when: "result == 3"
        status: info
        text:
          es: "3ª Clase (Interpotente): Esfuerzo en el medio. Optimizada para alcance y velocidad."
          en: "3rd Class (Inter-effort): Effort in the middle. Optimized for reach and speed."
    physical_reading_rules:
      - id: clase_read_vm
        when: "result == 2"
        status: info
        text:
          es: "En esta clase, el brazo [[bP]] es siempre mayor que [[bR]], garantizando VM > 1."
          en: "In this class, the arm [[bP]] is always larger than [[bR]], guaranteeing VM > 1."
    coherence_rules:
      - id: clase_coh_logic
        when: "result == 2 && bP < bR"
        status: danger
        text:
          es: "Error arquitectónico: En una palanca de 2ª clase es imposible que bP sea menor que bR."
          en: "Architectural error: In a 2nd class lever it is impossible for bP to be less than bR."
    model_validity_rules:
      - id: clase_val_cat
        when: "true"
        status: ok
        text:
          es: "La clasificación ayuda a predecir el comportamiento dinámico sin cálculos complejos."
          en: "Classification helps predict dynamic behavior without complex calculations."
    graph_rules:
      - id: clase_graph_toggle
        when: "true"
        status: info
        text:
          es: "Cambiar la clase en el selector actualiza instantáneamente la posición del fulcro."
          en: "Changing the class in the selector instantly updates the fulcrum position."
    likely_errors:
      - id: clase_err_swap
        when: "result == 3 && VM > 1"
        status: danger
        text:
          es: "Fallo conceptual: Una palanca de 3ª clase NUNCA puede tener ventaja mecánica de fuerza."
          en: "Conceptual failure: A 3rd class lever can NEVER have force mechanical advantage."
    next_step_rules:
      - id: clase_next_tool
        when: "true"
        status: info
        text:
          es: "Identifica si un cortaúñas usa una palanca de 2ª o 3ª clase según sus mangos."
          en: "Identify if a nail clipper uses a 2nd or 3rd class lever based on its handles."
`;export{e as default};
