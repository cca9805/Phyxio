const e=`version: 1
formulas:
- id: ley_newton_sistemas
  title:
    es: Segunda ley de Newton para sistemas vinculados
    en: Newton's second law for linked systems
  equation: a_{sys} = \\frac{\\sum F_{ext}}{M_{tot}}
  latex: a_{sys} = \\frac{\\sum F_{ext}}{M_{tot}}
  rearrangements:
  - target: aceleracion_sistema
    equation: aceleracion_sistema = F_ext_net / masa_total
    latex: a_{sys} = \\frac{\\sum F_{ext}}{M_{tot}}
    constraints: []
  - target: F_ext_net
    equation: F_ext_net = masa_total * aceleracion_sistema
    latex: \\sum F_{ext} = M_{tot} \\cdot a_{sys}
    constraints: []
  - target: masa_total
    equation: masa_total = F_ext_net / aceleracion_sistema
    latex: M_{tot} = \\frac{\\sum F_{ext}}{a_{sys}}
    constraints: []
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Relación global que establece que la aceleración de un sistema de cuerpos vinculados depende exclusivamente de las fuerzas externas netas y la inercia total.
    en: Global relation establishing that the acceleration of a linked system of bodies depends exclusively on the net external forces and the total inertia.
  constraints: Hilos inextensibles, poleas sin masa y aceleración común para todos los cuerpos.
  validity:
    es: Es la herramienta definitiva para detectar si se han incluido fuerzas internas (como tensiones) o si se ha omitido masa inercial.
    en: It is the definitive tool to detect if internal forces (like tensions) have been included or if inertial mass has been omitted.
  dimension_check: '[LT^-2] = [MLT^-2] / [M]'
  calculable: true
  motivo_no_calculable: null
  used_in: validación global de dinámica
  interpretation_tags:
  - aceleracion_sistema
  - masa_total
  - consistencia
  result_semantics:
    target: aceleracion_sistema
    meaning:
      es: Representa la aceleración uniforme con la que se mueve el conjunto de cuerpos vinculados.
      en: Represents the uniform acceleration with which the set of linked bodies moves.
  domain_checks:
  - condition: aceleracion_sistema <= 9.81
    message_es: Aceleración dentro del rango esperado para sistemas impulsados por gravedad.
    message_en: Acceleration within the expected range for gravity-driven systems.
  - condition: masa_total > 0
    message_es: La masa total del sistema debe ser positiva.
    message_en: The total mass of the system must be positive.
  coherence_checks:
  - condition: aceleracion_sistema > 9.81
    warning_es: ¡Inconsistencia! La aceleración no puede superar g si solo actúa la gravedad. Revisa si incluiste la tensión como externa.
    warning_en: Inconsistency! Acceleration cannot exceed g if only gravity acts. Check if you included tension as external.
  - condition: aceleracion_sistema < 0
    warning_es: Aceleración negativa; revisa el sentido de los ejes o el orden de las fuerzas en el sumatorio.
    warning_en: Negative acceleration; check the direction of the axes or the order of the forces in the summation.
  graph_implications:
  - type: acceleration_vector
    channel: a_system
  pedagogical_triggers:
  - detect_when: aceleracion_sistema > 9.81
    message_es: "¡Cuidado! Tu resultado para la aceleración es mayor que la gravedad terrestre. ¿Has olvidado restar las fuerzas de oposición?"
    message_en: "Careful! Your acceleration result is greater than Earth's gravity. Have you forgotten to subtract opposing forces?"
  - detect_when: aceleracion_sistema < 0
    message_es: "Una aceleración negativa suele indicar un error en la elección de los ejes positivos entre los distintos cuerpos."
    message_en: "A negative acceleration usually indicates an error in the choice of positive axes between the different bodies."
- id: relacion_rozamiento_maximo
  title:
    es: Umbral de rozamiento estático máximo
    en: Maximum static friction threshold
  equation: f_{s,max} = \\mu_s \\cdot N
  latex: f_{s,max} = \\mu_s \\cdot N
  rearrangements:
  - target: fuerza_rozamiento_maximo
    equation: fuerza_rozamiento_maximo = coeficiente_rozamiento_estatico * componente_normal_erronea
    latex: f_{s,max} = \\mu_s \\cdot N
    constraints: []
  - target: coeficiente_rozamiento_estatico
    equation: coeficiente_rozamiento_estatico = fuerza_rozamiento_maximo / componente_normal_erronea
    latex: \\mu_s = \\frac{f_{s,max}}{N}
    constraints: []
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: Define la fuerza máxima de adherencia que debe ser superada para que se inicie el movimiento.
    en: Defines the maximum adhesion force that must be overcome for motion to start.
  constraints: Superficies secas en contacto.
  validity:
    es: Es el criterio de decisión para el arranque del sistema.
    en: It is the decision criterion for the system start-up.
  dimension_check: '[MLT^-2] = [1] * [MLT^-2]'
  calculable: true
  motivo_no_calculable: null
  used_in: verificación de reposo
  interpretation_tags:
  - rozamiento_estatico
  - umbral_movimiento
  result_semantics:
    target: fuerza_rozamiento_maximo
    meaning:
      es: Es el valor límite que la fricción puede alcanzar antes de que el cuerpo comience a deslizar.
      en: Is the limit value that friction can reach before the body starts to slide.
  domain_checks:
  - condition: coeficiente_rozamiento_estatico >= 0
    message_es: El coeficiente de rozamiento no puede ser negativo.
    message_en: The friction coefficient cannot be negative.
  - condition: coeficiente_rozamiento_estatico <= 2.0
    message_es: Coeficiente de rozamiento dentro del rango físico de materiales comunes.
    message_en: Friction coefficient within the physical range of common materials.
  coherence_checks:
  - condition: fuerza_rozamiento_maximo > (masa_total * 9.81)
    warning_es: El umbral de rozamiento parece excesivo comparado con el peso. Revisa el cálculo de la normal.
    warning_en: The friction threshold seems excessive compared to weight. Check the normal calculation.
  graph_implications:
  - type: force_threshold
    channel: f_static_max
  pedagogical_triggers:
  - detect_when: fuerza_rozamiento_maximo > fuerza_motriz
    message_es: El sistema no arrancará porque la fricción estática máxima es mayor que la fuerza impulsora.
    message_en: The system will not start because the maximum static friction is greater than the driving force.
- id: proyeccion_normal_plano
  title:
    es: Componente normal en plano inclinado
    en: Normal component on an inclined plane
  equation: N = m \\cdot g \\cdot \\cos(\\theta)
  latex: N = m \\cdot g \\cdot \\cos(\\theta)
  rearrangements:
  - target: componente_normal_erronea
    equation: componente_normal_erronea = masa_cuerpo * aceleracion_gravedad * cos(angulo_plano)
    latex: N = m \\cdot g \\cdot \\cos(\\theta)
    constraints: []
  category: fundamental
  relation_type: physical_law
  physical_meaning:
    es: Proyección de la fuerza de reacción de la superficie sobre el eje perpendicular al movimiento en un plano inclinado.
    en: Projection of the surface reaction force on the axis perpendicular to the motion on an inclined plane.
  constraints: No existen otras fuerzas con componente perpendicular al plano (como empujes verticales).
  validity:
    es: Se utiliza para corregir el error común de asumir N = mg en superficies inclinadas.
    en: Used to correct the common error of assuming N = mg on inclined surfaces.
  dimension_check: '[MLT^-2] = [M] * [LT^-2] * [1]'
  calculable: true
  motivo_no_calculable: null
  used_in: corrección de errores de normal
  interpretation_tags:
  - componente_normal
  - angulo_plano
  - peso
  result_semantics:
    target: componente_normal_erronea
    meaning:
      es: Magnitud de la fuerza de contacto perpendicular a la rampa.
      en: Magnitude of the contact force perpendicular to the ramp.
  domain_checks:
  - condition: angulo_plano >= 0 && angulo_plano <= 1.5708
    message_es: Ángulo del plano dentro del rango de inclinación física (0 a 90 grados).
    message_en: Plane angle within the physical inclination range (0 to 90 degrees).
  coherence_checks:
  - condition: componente_normal_erronea > (masa_cuerpo * aceleracion_gravedad)
    warning_es: La normal no puede ser mayor que el peso en un plano inclinado sin fuerzas adicionales.
    warning_en: The normal cannot be greater than the weight on an inclined plane without additional forces.
  graph_implications:
  - type: normal_vector
    channel: N_force
  pedagogical_triggers:
  - detect_when: componente_normal_erronea > (masa_cuerpo * aceleracion_gravedad * 0.99) && angulo_plano > 0.01
    message_es: "¿Estás usando N = mg? Recuerda que en un plano inclinado debes usar el coseno del ángulo."
    message_en: "Are you using N = mg? Remember that on an inclined plane you must use the cosine of the angle."
- id: fuerza_motriz_plano
  title:
    es: Fuerza motriz por gravedad en plano inclinado
    en: Driving force due to gravity on inclined plane
  equation: F_{mot} = m \\cdot g \\cdot \\sin(\\theta)
  latex: F_{mot} = m \\cdot g \\cdot \\sin(\\theta)
  rearrangements:
  - target: fuerza_motriz
    equation: fuerza_motriz = masa_cuerpo * aceleracion_gravedad * sin(angulo_plano)
    latex: F_{mot} = m \\cdot g \\cdot \\sin(\\theta)
    constraints: []
  category: fundamental
  relation_type: physical_law
  physical_meaning:
    es: Componente del peso que actúa paralelamente a la superficie y tiende a acelerar el cuerpo hacia abajo de la rampa.
    en: Weight component acting parallel to the surface and tending to accelerate the body down the ramp.
  constraints: Movimiento a lo largo de la línea de máxima pendiente.
  validity:
    es: Crucial para identificar por qué un sistema arranca o por qué se ha infraestimado la aceleración al olvidar la componente del peso.
    en: Crucial to identify why a system starts or why acceleration has been underestimated by forgetting the weight component.
  dimension_check: '[MLT^-2] = [M] * [LT^-2] * [1]'
  calculable: true
  motivo_no_calculable: null
  used_in: cálculo de fuerza impulsora
  interpretation_tags:
  - fuerza_motriz
  - peso
  - angulo_plano
  result_semantics:
    target: fuerza_motriz
    meaning:
      es: Parte del peso que impulsa al cuerpo a deslizar por la rampa.
      en: Part of the weight that drives the body to slide down the ramp.
  domain_checks:
  - condition: masa_cuerpo > 0
    message_es: La masa del cuerpo debe ser positiva.
    message_en: The body mass must be positive.
  coherence_checks:
  - condition: fuerza_motriz > (masa_cuerpo * aceleracion_gravedad)
    warning_es: La fuerza motriz por gravedad no puede superar al peso total.
    warning_en: The driving force by gravity cannot exceed the total weight.
  graph_implications:
  - type: force_vector
    channel: F_driving_gravity
  pedagogical_triggers:
  - detect_when: fuerza_motriz < 0.01 && angulo_plano > 0.1
    message_es: Has olvidado incluir la componente tangencial del peso en tu sumatorio de fuerzas externas.
    message_en: You have forgotten to include the tangential component of weight in your external force summation.
`;export{e as default};
