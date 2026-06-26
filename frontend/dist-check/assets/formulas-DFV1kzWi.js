const e=`version: 1
formulas:
- id: segunda_ley_newton_sistema
  title:
    es: Segunda ley de Newton para el sistema vinculado
    en: Newton's second law for the linked system
  equation: aceleracion_sistema = (masa_2 * aceleracion_gravedad - componente_tangencial_peso - fuerza_rozamiento) / (masa_1 + masa_2)
  latex: a = \\frac{m_2 g - m_1 g \\sin\\theta - f_r}{m_1 + m_2}
  rearrangements:
  - target: aceleracion_sistema
    equation: aceleracion_sistema = (masa_2 * aceleracion_gravedad - componente_tangencial_peso - fuerza_rozamiento) / (masa_1 + masa_2)
    latex: a = \\frac{m_2 g - m_1 g \\sin\\theta - f_r}{m_1 + m_2}
    constraints: []
  - target: masa_2
    equation: masa_2 = (masa_1 * aceleracion_sistema + componente_tangencial_peso + fuerza_rozamiento) / (aceleracion_gravedad - aceleracion_sistema)
    latex: m_2 = \\frac{m_1 a + m_1 g \\sin\\theta + f_r}{g - a}
    constraints:
    - aceleracion_gravedad != aceleracion_sistema
  category: fundamental
  relation_type: physical_law
  physical_meaning:
    es: La fuerza neta externa sobre el conjunto inercial determina la aceleración común.
    en: The net external force on the inertial assembly determines the common acceleration.
  constraints: Cuerda inextensible, polea sin inercia y movimiento compartido.
  validity:
    es: Es el cierre dinámico para sistemas de dos cuerpos con vínculo de aceleración.
    en: It is the dynamic closure for two-body systems with an acceleration constraint.
  dimension_check: '[LT^-2] = ([MLT^-2] - [MLT^-2] - [MLT^-2]) / [M]'
  calculable: true
  motivo_no_calculable: null
  used_in: resolución de problemas de examen
  interpretation_tags:
  - aceleracion_sistema
  - masa_total
  - fuerza_neta
  result_semantics:
    target: aceleracion_sistema
    meaning:
      es: Representa la rapidez con la que el sistema cambia su estado de movimiento.
      en: Represents the rate at which the system changes its state of motion.
  domain_checks:
  - condition: aceleracion_sistema <= aceleracion_gravedad
    message_es: La aceleración no supera g, coherente con un sistema impulsado por peso.
    message_en: Acceleration does not exceed g, consistent with a gravity-driven system.
  - condition: aceleracion_sistema >= -aceleracion_gravedad
    message_es: Magnitud dentro de los límites físicos terrestres.
    message_en: Magnitude within Earth's physical limits.
  coherence_checks:
  - condition: aceleracion_sistema > aceleracion_gravedad
    warning_es: ¡Cuidado! La aceleración no puede ser mayor que g en este montaje. Revisa si sumaste fuerzas que se oponen.
    warning_en: Careful! Acceleration cannot be greater than g in this setup. Check if you added opposing forces.
  - condition: aceleracion_sistema < 0
    warning_es: El signo negativo indica que el sistema acelera en sentido opuesto al supuesto.
    warning_en: The negative sign indicates that the system accelerates in the direction opposite to the assumed one.
  graph_implications:
  - type: acceleration_vector
    channel: a_sys
  pedagogical_triggers:
  - detect_when: aceleracion_sistema < 0
    message_es: "Has obtenido un signo negativo. ¿El peso del bloque colgante es realmente mayor que las resistencias?"
    message_en: "You've obtained a negative sign. Is the hanging weight really greater than the resistances?"

- id: fuerza_normal_plano
  title:
    es: Fuerza normal en plano inclinado
    en: Normal force on inclined plane
  equation: fuerza_normal = masa_1 * aceleracion_gravedad * cos(angulo_plano)
  latex: N = m_1 g \\cos\\theta
  rearrangements:
  - target: fuerza_normal
    equation: fuerza_normal = masa_1 * aceleracion_gravedad * cos(angulo_plano)
    latex: N = m_1 g \\cos\\theta
    constraints: []
  category: fundamental
  relation_type: physical_law
  physical_meaning:
    es: Reacción de la superficie proporcional a la proyección del peso perpendicular al plano.
    en: Surface reaction proportional to the weight projection perpendicular to the plane.
  constraints: No hay fuerzas externas verticales adicionales aplicadas sobre masa_1.
  validity:
    es: Crucial para corregir el error de igualar N a m*g en rampas.
    en: Crucial to correct the error of equating N to m*g on ramps.
  dimension_check: '[MLT^-2] = [M] * [LT^-2] * [1]'
  calculable: true
  motivo_no_calculable: null
  used_in: cálculo de rozamiento
  interpretation_tags:
  - fuerza_normal
  - angulo_plano
  result_semantics:
    target: fuerza_normal
    meaning:
      es: Determina la intensidad del contacto que genera rozamiento.
      en: Determines the contact intensity that generates friction.
  domain_checks:
  - condition: fuerza_normal <= (masa_1 * aceleracion_gravedad)
    message_es: La normal es menor o igual al peso, coherente con una superficie inclinada.
    message_en: The normal is less than or equal to the weight, consistent with an inclined surface.
  coherence_checks:
  - condition: fuerza_normal > (masa_1 * aceleracion_gravedad)
    warning_es: La normal no puede ser mayor que el peso en una rampa pasiva. Revisa la función trigonométrica.
    warning_en: The normal cannot be greater than the weight on a passive ramp. Check the trigonometric function.
  graph_implications:
  - type: normal_force
    channel: N_force
  pedagogical_triggers:
  - detect_when: fuerza_normal == (masa_1 * aceleracion_gravedad) && angulo_plano > 0
    message_es: "¡Error de plano! Estás usando N = mg, pero el plano está inclinado. Usa el coseno."
    message_en: "Incline error! You are using N = mg, but the plane is inclined. Use the cosine."

- id: componente_tangencial_peso
  title:
    es: Componente tangencial del peso
    en: Tangential weight component
  equation: componente_tangencial_peso = masa_1 * aceleracion_gravedad * sin(angulo_plano)
  latex: P_x = m_1 g \\sin\\theta
  rearrangements:
  - target: componente_tangencial_peso
    equation: componente_tangencial_peso = masa_1 * aceleracion_gravedad * sin(angulo_plano)
    latex: P_x = m_1 g \\sin\\theta
    constraints: []
  category: derived
  relation_type: physical_law
  physical_meaning:
    es: Parte del peso que tira del bloque rampa abajo.
    en: Part of the weight pulling the block down the ramp.
  constraints: Ángulo theta respecto a la horizontal.
  validity:
    es: Necesaria para el balance de fuerzas paralelo al plano.
    en: Necessary for the force balance parallel to the plane.
  dimension_check: '[MLT^-2] = [M] * [LT^-2] * [1]'
  calculable: true
  motivo_no_calculable: null
  used_in: balance de fuerzas
  interpretation_tags:
  - fuerza_motriz
  - peso
  result_semantics:
    target: componente_tangencial_peso
    meaning:
      es: Representa la fuerza opositora o motriz del bloque sobre la rampa.
      en: Represents the opposing or driving force of the block on the ramp.
  domain_checks: []
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers: []

- id: tension_cuerda_sistema
  title:
    es: Tensión de la cuerda en el sistema
    en: Rope tension in the system
  equation: tension_cuerda = masa_2 * (aceleracion_gravedad - aceleracion_sistema)
  latex: T = m_2(g - a)
  rearrangements:
  - target: tension_cuerda
    equation: tension_cuerda = masa_2 * (aceleracion_gravedad - aceleracion_sistema)
    latex: T = m_2(g - a)
    constraints: []
  category: derived
  relation_type: physical_law
  physical_meaning:
    es: Fuerza interna que equilibra parcialmente el peso de la masa colgante.
    en: Internal force partially balancing the weight of the hanging mass.
  constraints: Cuerda ideal, bloque 2 descendiendo.
  validity:
    es: Se obtiene al fragmentar el sistema y aplicar Newton solo al bloque 2.
    en: Obtained by breaking the system and applying Newton only to block 2.
  dimension_check: '[MLT^-2] = [M] * [LT^-2]'
  calculable: true
  motivo_no_calculable: null
  used_in: preguntas de tensión en exámenes
  interpretation_tags:
  - tension_cuerda
  result_semantics:
    target: tension_cuerda
    meaning:
      es: Indica la carga real que soporta el hilo.
      en: Indicates the actual load supported by the string.
  domain_checks:
  - condition: tension_cuerda >= 0
    message_es: Tensión coherente para una cuerda tensa.
    message_en: Coherent tension for a taut rope.
  coherence_checks:
  - condition: tension_cuerda < 0
    warning_es: ¡Imposible! La cuerda no puede empujar (tensión negativa). Revisa el sentido de la aceleración.
    warning_en: Impossible! The rope cannot push (negative tension). Check the direction of acceleration.
  graph_implications: []
  pedagogical_triggers: []

- id: fuerza_rozamiento_dinamica
  title:
    es: Fuerza de rozamiento dinámica
    en: Dynamic friction force
  equation: fuerza_rozamiento = coeficiente_rozamiento * fuerza_normal
  latex: f_r = \\mu_d N
  rearrangements:
  - target: fuerza_rozamiento
    equation: fuerza_rozamiento = coeficiente_rozamiento * fuerza_normal
    latex: f_r = \\mu_d N
    constraints: []
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: Fuerza de fricción que aparece durante el deslizamiento relativo.
    en: Friction force appearing during relative sliding.
  constraints: El sistema debe estar ya en movimiento.
  validity:
    es: Modelo de Coulomb para rozamiento cinético.
    en: Coulomb model for kinetic friction.
  dimension_check: '[MLT^-2] = [1] * [MLT^-2]'
  calculable: true
  motivo_no_calculable: null
  used_in: balance de fuerzas resistivas
  interpretation_tags:
  - fuerza_rozamiento
  result_semantics:
    target: fuerza_rozamiento
    meaning:
      es: Representa la disipación o resistencia al avance del bloque.
      en: Represents the dissipation or resistance to the block's movement.
  domain_checks: []
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers: []

- id: vinculo_aceleracion
  title:
    es: Vínculo de aceleración
    en: Acceleration constraint
  equation: a_1 = a_2 = aceleracion_sistema
  latex: a_1 = a_2 = a
  rearrangements: []
  category: structural
  relation_type: geometric_interpretation
  physical_meaning:
    es: Condición geométrica por la cual ambos cuerpos comparten aceleración.
    en: Geometric condition by which both bodies share acceleration.
  constraints: Cuerda inextensible.
  validity:
    es: Base para el análisis de sistemas vinculados.
    en: Basis for the analysis of linked systems.
  dimension_check: '[LT^-2] = [LT^-2]'
  calculable: false
  motivo_no_calculable:
    es: Es una restricción geométrica, no una magnitud calculable directamente.
    en: It is a geometric constraint, not a directly calculable magnitude.
  used_in: planteamiento de ecuaciones
  interpretation_tags:
  - aceleracion_sistema
  - vinculo_cinematico
  result_semantics:
    target: aceleracion_sistema
    meaning:
      es: Unifica las ecuaciones de movimiento de ambos cuerpos.
      en: Unifies the equations of motion for both bodies.
  domain_checks: []
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers: []
`;export{e as default};
