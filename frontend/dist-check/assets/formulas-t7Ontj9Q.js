const e=`version: 1
formulas:
  - id: separacion_inicial
    title:
      es: Separación inicial entre móviles
      en: Initial separation between moving bodies
    equation: d_0 = xB0 - xA0
    latex: d_0 = x_{B0} - x_{A0}
    rearrangements: []
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: Define la distancia inicial entre los dos móviles medida sobre el mismo eje de referencia.
      en: Defines the initial distance between the two moving bodies measured along the same reference axis.
    constraints:
      - ambos móviles descritos en el mismo sistema de referencia
    validity:
      es: Válida cuando las posiciones iniciales están definidas sobre un mismo eje y con la misma convención de signos.
      en: Valid when the initial positions are defined on the same axis and with the same sign convention.
    dimension_check: \\dim(d_0) = \\dim(x_{B0}) - \\dim(x_{A0}) = L
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Reformulación de problemas de persecución y alcance
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: d_0
      meaning: Expresa la ventaja o desventaja espacial inicial entre los móviles.
    domain_checks:
      - expr: "true"
        message:
          es: Comprueba que ambas posiciones iniciales estén medidas sobre el mismo eje.
          en: Check that both initial positions are measured on the same axis.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el signo de d_0 sea coherente con la convención espacial elegida.
          en: Check that the sign of d_0 is consistent with the chosen spatial convention.
    graph_implications:
      - La gráfica debe mostrar la separación inicial entre las dos trayectorias.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Interpreta d_0 como separación inicial y no como desplazamiento de un solo móvil.
          en: Interpret d_0 as initial separation rather than as the displacement of a single body.
  - id: velocidad_relativa_encuentro
    title:
      es: Velocidad relativa firmada
      en: Signed relative velocity
    equation: v_rel = vA - vB
    latex: v_{rel} = v_A - v_B
    rearrangements: []
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "Resume con signo el ritmo al que cambia la separacion: puede indicar aproximacion, alejamiento o igualdad de velocidades."
      en: "Summarizes with sign the rate at which separation changes: it can indicate approach, separation, or equal velocities."
    constraints:
      - ambos moviles descritos sobre el mismo eje
      - misma convencion de signos
    validity:
      es: Válida para comparar velocidades proyectadas sobre una misma dirección de movimiento.
      en: Valid for comparing velocities projected onto the same direction of motion.
    dimension_check: \\dim(v_{rel}) = \\dim(v_A) - \\dim(v_B) = LT^{-1}
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Cálculo de tiempos de encuentro en MRU
      - Análisis de persecuciones
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: v_rel
      meaning: Indica si la separación entre móviles disminuye, permanece constante o aumenta.
    domain_checks:
      - expr: "true"
        message:
          es: Comprueba que las velocidades estén expresadas en el mismo eje y con la misma convención de signos.
          en: Check that velocities are expressed on the same axis and with the same sign convention.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa si el signo de v_rel implica aproximación o alejamiento.
          en: Check whether the sign of v_rel implies approach or separation.
    graph_implications:
      - La gráfica debe reflejar el cierre o apertura de la distancia entre trayectorias.
    pedagogical_triggers:
      - when: "true"
        message:
          es: No confundas velocidad relativa con velocidad de uno de los móviles por separado.
          en: Do not confuse relative velocity with the velocity of one body taken separately.
  - id: tiempo_encuentro_mru_mru
    title:
      es: Tiempo de encuentro (MRU vs MRU)
      en: Meeting time (MRU vs MRU)
    equation: t_e = d_0 / v_rel
    latex: t_e = \\frac{d_0}{v_{rel}}
    rearrangements: []
    category: derived
    relation_type: integral_relation
    physical_meaning:
      es: Tiempo necesario para que la velocidad relativa firmada anule la separacion inicial; solo representa un encuentro fisico si el resultado es positivo.
      en: Time required for the signed relative velocity to cancel the initial separation; it represents a physical meeting only if the result is positive.
    constraints:
      - v_rel != 0
      - ambos móviles en MRU
      - t_e > 0 para que el encuentro ocurra despues del inicio
    validity:
      es: Válida para alcances y encuentros frontales en línea recta cuando ambos móviles mantienen velocidad constante.
      en: Valid for overtaking and head-on encounters in a straight line when both bodies keep constant velocity.
    dimension_check: \\dim(t_e) = \\frac{\\dim(d_0)}{\\dim(v_{rel})} = \\frac{L}{LT^{-1}} = T
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Resolución rápida de persecuciones y encuentros en MRU
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: t_e
      meaning: Expresa el instante en que la separación inicial queda anulada.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que la velocidad relativa permita cerrar la separación inicial.
          en: Check that the relative velocity allows the initial gap to be closed.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el tiempo obtenido sea positivo y compatible con la situación física.
          en: Check that the obtained time is positive and physically meaningful.
    graph_implications:
      - La gráfica debe mostrar el instante en que ambas trayectorias se cruzan.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Interpreta la fórmula como relación entre separación inicial y velocidad relativa, no como una resta mecánica de datos.
          en: Interpret the formula as a relation between initial separation and relative velocity, not as a mechanical subtraction of data.
  - id: posicion_encuentro_mru
    title:
      es: Posición de encuentro
      en: Encounter position
    equation: x_e = xA0 + vA*t_e
    latex: x_e = x_{A0} + v_A t_e
    rearrangements:
      - target: x_e
        latex: x_e = x_{B0} + v_B t_e
        equation: x_e = xB0 + vB*t_e
        constraints: []
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: Determina el lugar del eje donde ambos móviles coinciden una vez conocido el instante de encuentro.
      en: Determines the point on the axis where both bodies coincide once the encounter time is known.
    constraints:
      - t_e definido y físicamente válido
    validity:
      es: Válida cuando la ecuación horaria usada para cada móvil pertenece al mismo sistema de referencia.
      en: Valid when the time equation used for each body belongs to the same reference frame.
    dimension_check: \\dim(x_e) = \\dim(x_{A0}) + \\dim(v_A)\\dim(t_e) = L + LT^{-1}T = L
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Determinación del lugar de cruce
      - Planificación de encuentros e intercepciones
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: x_e
      meaning: Expresa la posición efectiva donde se produce la coincidencia espacial.
    domain_checks:
      - expr: "true"
        message:
          es: Comprueba que el instante de encuentro sea compatible con la ecuación horaria utilizada.
          en: Check that the encounter time is compatible with the time equation being used.
    coherence_checks:
      - expr: "true"
        message:
          es: Verifica que ambas ecuaciones horarias conduzcan al mismo valor de x_e.
          en: Verify that both time equations lead to the same value of x_e.
    graph_implications:
      - La gráfica debe marcar el punto de intersección espacial de ambas trayectorias.
    pedagogical_triggers:
      - when: "true"
        message:
          es: No confundas la posición de encuentro con la posición final de uno de los móviles fuera del instante de coincidencia.
          en: Do not confuse encounter position with the final position of one of the bodies outside the coincidence instant.
  - id: condicion_encuentro
    title:
      es: Condición cinemática de encuentro
      en: Kinematic meeting condition
    equation: xA(t_e) = xB(t_e)
    latex: x_A(t_e) = x_B(t_e)
    rearrangements: []
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: Establece que el encuentro ocurre cuando ambos cuerpos ocupan la misma posición en el mismo instante de tiempo.
      en: Establishes that the meeting occurs when both bodies occupy the same position at the same instant in time.
    constraints:
      - movimiento unidimensional
    validity:
      es: Universal para cualquier tipo de movimiento (MRU, MRUA, etc.).
      en: Universal for any type of motion (MRU, UARM, etc.).
    dimension_check: "[L] = [L]"
    calculable: false
    motivo_no_calculable: null
    used_in:
      - Planteamiento inicial de todos los problemas de intercepción.
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: t_e
      meaning: Resulta util para interpretar t_e en el contexto del tema.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: tiempo_encuentro_mru_mru_expandido
    title:
      es: Tiempo de encuentro con posiciones explicitas (MRU vs MRU)
      en: Meeting time with explicit positions (MRU vs MRU)
    equation: t_e = (xB0 - xA0) / (vA - vB)
    latex: t_e = \\frac{x_{B0} - x_{A0}}{v_A - v_B}
    rearrangements: []
    category: derived
    relation_type: integral_relation
    physical_meaning:
      es: Tiempo necesario para que la velocidad relativa firmada anule la separacion inicial; solo representa un encuentro fisico si el resultado es positivo.
      en: Time required for the signed relative velocity to cancel the initial separation; it represents a physical meeting only if the result is positive.
    constraints:
      - vA != vB
      - ambos móviles en MRU
      - t_e > 0 para que el encuentro ocurra despues del inicio
    validity:
      es: Válido para alcances y choques frontales en línea recta.
      en: Valid for overtaking and head-on collisions in a straight line.
    dimension_check: "[T] = [L] / [L/T] = [T]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Resolución rápida de persecuciones en carretera.
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: t_e
      meaning: Resulta util para interpretar t_e en el contexto del tema.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: encuentro_retrasado
    title:
      es: Encuentro con retraso temporal
      en: Meeting with time delay
    equation: xA0 + vA*t_e = xB0 + vB*(t_e - dt)
    latex: x_{A0} + v_A t_e = x_{B0} + v_B(t_e - \\Delta t)
    rearrangements:
      - target: t_e
        latex: t_e = \\frac{x_{B0} - x_{A0} - v_B \\Delta t}{v_A - v_B}
        equation: t_e = (xB0 - xA0 - vB*dt) / (vA - vB)
        constraints: []
    category: complex
    relation_type: constitutive_relation
    physical_meaning:
      es: Modifica el tiempo efectivo de movimiento del segundo móvil para compensar su salida tardía.
      en: Modifies the second body's effective motion time to compensate for its late departure.
    constraints:
      - te > dt (el encuentro debe ocurrir después de que salga el segundo).
    validity:
      es: Problemas de persecución donde un móvil sale en busca de otro tras un intervalo.
      en: Pursuit problems where one body sets out after another after an interval.
    dimension_check: "[L] = [L] + [L/T]([T] - [T]) = [L]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Persecuciones policiales
      - Logística de salida de convoyes
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: t_e
      meaning: Resulta util para interpretar t_e en el contexto del tema.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
  - id: encuentro_mrua
    title:
      es: Condición de encuentro con aceleración
      en: Meeting condition with acceleration
    equation: xA0 + vA0*t_e + 0.5*aA*t_e^2 = xB0 + vB0*t_e + 0.5*aB*t_e^2
    latex: x_{A0} + v_{A0} t_e + \\frac{1}{2} a_A t_e^2 = x_{B0} + v_{B0} t_e + \\frac{1}{2} a_B t_e^2
    rearrangements: []
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: Igualación de las parábolas de posición para encontrar sus puntos de intersección.
      en: Equality of the position parabolas to find their intersection points.
    constraints:
      - requiere resolver una ecuación de segundo grado.
    validity:
      es: Intercepción de proyectiles o frenados de emergencia.
      en: Interception of projectiles or emergency braking.
    dimension_check: "[L] = [L] + [L/T][T] + [L/T^2][T^2] = [L]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - Sistemas de seguridad activa de vehículos.
    interpretation_tags:
      - encuentros-y-persecuciones
    result_semantics:
      target: t_e
      meaning: Resulta util para interpretar t_e en el contexto del tema.
    domain_checks:
      - expr: "true"
        message:
          es: Verifica que los datos pertenezcan al dominio del modelo.
          en: Check that the data belong to the model domain.
    coherence_checks:
      - expr: "true"
        message:
          es: Revisa que el resultado tenga sentido fisico.
          en: Check that the result makes physical sense.
    graph_implications:
      - La grafica debe reflejar cambios coherentes con la formula.
    pedagogical_triggers:
      - when: "true"
        message:
          es: Comprueba signos, unidades y significado del resultado.
          en: Check signs, units, and meaning of the result.
`;export{e as default};
