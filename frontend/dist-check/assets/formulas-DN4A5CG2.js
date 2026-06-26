const e=`version: 1
formulas:
- id: fuerza_neta_real
  title:
    es: Fuerza Neta Real (Segunda Ley con Pérdidas)
    en: Real Net Force (Second Law with Losses)
  equation: F_net = F_ap - F_loss
  latex: F_{net} = F_{ap} - F_{loss}
  rearrangements:
  - target: F_ap
    equation: F_ap = F_net + F_loss
    latex: F_{ap} = F_{net} + F_{loss}
    constraints: []
  - target: F_loss
    equation: F_loss = F_ap - F_net
    latex: F_{loss} = F_{ap} - F_{net}
    constraints: []
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: La fuerza que realmente acelera al sistema es la fuerza aplicada menos la
      suma de todas las resistencias disipativas.
    en: The force that actually accelerates the system is the applied force minus
      the sum of all dissipative resistances.
  constraints: F_loss >= 0; F_ap > 0 para movimiento positivo
  validity:
    es: Válido para cualquier sistema mecánico traslacional en régimen de pérdidas
      aproximadamente constantes.
    en: Valid for any translational mechanical system under approximately constant-loss
      regime.
  dimension_check: '[MLT^-2] = [MLT^-2] - [MLT^-2]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - segunda_ley_efectiva
  interpretation_tags:
  - eficiencia_de_fuerza
  - margen_de_arranque
  - balance_de_fuerzas_real
  result_semantics:
    target: F_net
    kind: physical_magnitude
    sign_meaning:
      es: F_net > 0 indica que la fuerza motriz supera a las pérdidas.
      en: F_net > 0 indicates driving force exceeds losses.
    absolute_value_meaning:
      es: Magnitud de la fuerza desbalanceada que genera aceleración.
      en: Magnitude of the unbalanced force generating acceleration.
    meaning: >
      F_net es la fuerza disponible para acelerar el sistema.
      Si F_net > 0, el sistema puede arrancar. Si F_net <= 0, las pérdidas
      bloquean el movimiento y el motor debe ser más potente o F_loss debe reducirse.
  domain_checks:
  - F_net >= 0 — si es negativo, la máquina no puede arrancar con esas pérdidas
  - F_net < F_ap — siempre en sistema real con pérdidas positivas
  coherence_checks:
  - F_net > F_ap es incoherente (violaría conservación de energía con pérdidas positivas)
  - 'F_net < 0 con F_ap > 0 indica F_loss > F_ap: sistema bloqueado'
  graph_implications:
  - En el gráfico de coordenadas, F_net positiva produce pendiente positiva en v(t);
    F_net = 0 produce régimen estacionario; F_net negativa indica deceleración o bloqueo.
  pedagogical_triggers:
  - si el alumno usa F_net = F_ap ignorando F_loss, obtendrá a = a_ideal en lugar
    de la real
  - 'si F_loss > F_ap, el sistema no arranca: el motor debe ser más potente o las
    pérdidas deben reducirse'

- id: segunda_ley_efectiva
  title:
    es: Segunda Ley de Newton Efectiva
    en: Effective Newton's Second Law
  equation: a = F_net / m
  latex: a = \\frac{F_{net}}{m}
  rearrangements:
  - target: F_net
    equation: F_net = a * m
    latex: F_{net} = a \\cdot m
    constraints: []
  - target: m
    equation: m = F_net / a
    latex: m = \\frac{F_{net}}{a}
    constraints: []
  category: fundamental
  relation_type: fundamental_law
  physical_meaning:
    es: La aceleración real del sistema es la fuerza neta real (ya descontadas las
      pérdidas) dividida entre la masa efectiva.
    en: The real acceleration of the system is the real net force (losses already
      discounted) divided by the effective mass.
  constraints: m > 0; F_net puede ser cero o negativo
  validity:
    es: Válido para sistemas de traslación con masa constante en régimen clásico (v
      << c).
    en: Valid for constant-mass translational systems in the classical regime (v <<
      c).
  dimension_check: '[LT^-2] = [MLT^-2] / [M]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - fuerza_neta_real
  interpretation_tags:
  - respuesta_dinamica_real
  - viabilidad_del_arranque
  - comparacion_ideal_real
  result_semantics:
    target: a
    kind: physical_magnitude
    sign_meaning:
      es: a > 0 indica aceleración en el sentido del movimiento; a < 0 desaceleración.
      en: a > 0 indicates acceleration in direction of motion; a < 0 deceleration.
    absolute_value_meaning:
      es: Ritmo de cambio de la velocidad del sistema.
      en: Rate of change of the system's velocity.
    meaning: >
      a es la aceleración real del sistema. Si a > 0, el sistema acelera en el
      sentido positivo. Si a = 0, el sistema está en equilibrio o bloqueado. Si a < 0,
      las pérdidas superan la fuerza motriz o el sistema desacelera.
      Siempre a < a_ideal en un sistema real (eta < 1).
  domain_checks:
  - a > 0 — sistema arranca y acelera normalmente
  - a == 0 — sistema en régimen estacionario o bloqueado
  - a > 9.8 m/s² — resultado sospechoso si no hay fuerzas adicionales declaradas
  coherence_checks:
  - a > a_ideal es imposible en un sistema con pérdidas (eta debe ser <= 1)
  - 'a negativa con F_ap > 0 indica que F_loss > F_ap: revisar magnitudes'
  graph_implications:
  - En el gráfico Coord, la pendiente de v(t) es igual a a; mayor a produce
    pendiente más pronunciada. a = 0 produce línea horizontal (velocidad constante).
  pedagogical_triggers:
  - si a calculada = a_ideal, el alumno olvidó incluir F_loss en la ecuación de fuerzas
  - 'si a es negativa con F_ap > 0, las pérdidas superan la fuerza motriz: el sistema
    no arranca'

- id: rendimiento_potencia
  title:
    es: Rendimiento Mecánico por Potencia
    en: Mechanical Efficiency by Power
  equation: eta = P_out / P_in
  latex: \\eta = \\frac{P_{out}}{P_{in}}
  rearrangements:
  - target: P_out
    equation: P_out = eta * P_in
    latex: P_{out} = \\eta \\cdot P_{in}
    constraints: []
  - target: P_in
    equation: P_in = P_out / eta
    latex: P_{in} = \\frac{P_{out}}{\\eta}
    constraints: []
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Fracción de la potencia de entrada que se convierte en trabajo útil de salida,
      expresando la calidad energética del sistema.
    en: Fraction of the input power converted into useful output work, expressing
      the energy quality of the system.
  constraints: 0 < eta <= 1; P_in > 0
  validity:
    es: Válido para cualquier máquina en régimen estacionario o cuasi-estático.
    en: Valid for any machine in steady-state or quasi-static regime.
  dimension_check: '[1] = [ML^2T^-3] / [ML^2T^-3]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - aceleracion_con_eficiencia
  interpretation_tags:
  - calidad_energetica
  - eficiencia_real
  - balance_potencia
  result_semantics:
    target: eta
    kind: dimensionless_ratio
    sign_meaning:
      es: Siempre positivo.
      en: Always positive.
    absolute_value_meaning:
      es: Proporción de la potencia de entrada que se convierte en trabajo útil.
      en: Proportion of input power converted to useful work.
    meaning: >
      eta es la fracción de potencia aprovechada. Si eta > 0.9, el sistema es
      altamente eficiente. Si 0.7 < eta <= 0.9, eficiencia aceptable para uso industrial.
      Si eta <= 0.5, las pérdidas dominan y el diseño debe revisarse.
      eta > 1 es físicamente imposible: indica error de signo en P_out o P_in.
  domain_checks:
  - eta > 0 y eta <= 1 siempre
  - eta > 1 es físicamente imposible (violaría el primer principio de la termodinámica)
  - eta < 0.1 indica sistema altamente ineficiente; revisar si el enunciado tiene
    error
  coherence_checks:
  - 'eta > 1 es error seguro: revisar qué se asignó como P_out y qué como P_in'
  - eta > 0.99 solo aceptable para mecanismos de precisión muy bien lubricados
  graph_implications:
  - eta determina la separación entre las curvas de P_in y P_out; mayor eta reduce
    el área de pérdidas en el gráfico P vs t.
  pedagogical_triggers:
  - si el alumno calcula eta = P_in / P_out, obtendrá un valor > 1 y debe detectar
    el error
  - comparar eta calculada con el rango típico del dispositivo mencionado en el enunciado

- id: potencia_perdida
  title:
    es: Potencia de Pérdida por Disipación
    en: Loss Power by Dissipation
  equation: P_loss = P_in - P_out
  latex: P_{loss} = P_{in} - P_{out}
  rearrangements:
  - target: P_in
    equation: P_in = P_out + P_loss
    latex: P_{in} = P_{out} + P_{loss}
    constraints: []
  - target: P_out
    equation: P_out = P_in - P_loss
    latex: P_{out} = P_{in} - P_{loss}
    constraints: []
  category: derived
  relation_type: definition
  physical_meaning:
    es: Diferencia entre la potencia total absorbida y la potencia útil entregada;
      es la tasa de generación de calor por fricción.
    en: Difference between total absorbed power and useful delivered power; is the
      rate of heat generation by friction.
  constraints: P_loss >= 0; P_loss < P_in
  validity:
    es: Válido siempre que se conserve la energía total en el sistema.
    en: Valid whenever total system energy is conserved.
  dimension_check: '[ML^2T^-3] = [ML^2T^-3] - [ML^2T^-3]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - rendimiento_potencia
  interpretation_tags:
  - generacion_de_calor
  - ineficiencia_cuantificada
  - mantenimiento_predictivo
  result_semantics:
    target: P_loss
    kind: physical_magnitude
    sign_meaning:
      es: Siempre positivo, indica energía perdida al entorno.
      en: Always positive, indicates energy lost to environment.
    absolute_value_meaning:
      es: Tasa temporal de energía mecánica convertida en calor.
      en: Time rate of mechanical energy converted to heat.
    meaning: >
      P_loss es la potencia disipada como calor. Siempre P_loss > 0 en sistemas reales.
      Un incremento anómalo de P_loss sobre el valor nominal indica desgaste en
      rodamientos, sellos o transmisión y activa un criterio de mantenimiento predictivo.
      P_loss = 0 solo es válido en modelos ideales.
  domain_checks:
  - P_loss >= 0 siempre
  - P_loss < P_in siempre (no puede perderse más de lo que entra)
  coherence_checks:
  - 'P_loss > P_in es imposible: error de signo en P_out o P_in'
  - P_loss = 0 solo admisible en modelos ideales; en sistemas reales siempre P_loss
    > 0
  graph_implications:
  - P_loss se visualiza como la brecha vertical entre las curvas P_in(t) y P_out(t);
    una brecha constante indica pérdidas estacionarias; una brecha creciente indica
    desgaste progresivo.
  pedagogical_triggers:
  - si P_loss = 0, el alumno está aplicando el modelo ideal cuando el enunciado pide
    el real
  - P_loss > P_in indica error de signos o de asignación de potencias

- id: aceleracion_ideal
  title:
    es: Aceleración Ideal del Sistema
    en: Ideal System Acceleration
  equation: a_ideal = F_ap / m
  latex: a_{ideal} = \\frac{F_{ap}}{m}
  rearrangements:
  - target: F_ap
    equation: F_ap = a_ideal * m
    latex: F_{ap} = a_{ideal} \\cdot m
    constraints: [m > 0]
  - target: m
    equation: m = F_ap / a_ideal
    latex: m = \\frac{F_{ap}}{a_{ideal}}
    constraints: [a_ideal > 0]
  category: derived
  relation_type: physical_law
  physical_meaning:
    es: Aceleración teórica que alcanzaría el sistema si no existieran fuerzas disipativas
      o pérdidas mecánicas (F_loss = 0).
    en: Theoretical acceleration that the system would reach if there were no dissipative
      forces or mechanical losses (F_loss = 0).
  constraints: m > 0; F_ap >= 0
  validity:
    es: Válido para el cálculo de la cota superior de rendimiento en sistemas reales.
    en: Valid for calculating the upper performance bound in real systems.
  dimension_check: '[LT^-2] = [MLT^-2] / [M]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - aceleracion_con_eficiencia
  interpretation_tags:
  - limite_ideal
  - referencia_teorica
  result_semantics:
    target: a_ideal
    kind: physical_magnitude
    sign_meaning:
      es: a_ideal > 0 indica aceleración motriz si no hubiera fricción.
      en: a_ideal > 0 indicates driving acceleration if there were no friction.
    absolute_value_meaning:
      es: Cota superior teórica de la aceleración del sistema.
      en: Theoretical upper bound of system acceleration.
    meaning: >
      a_ideal representa el límite máximo de respuesta dinámica del sistema.
      La aceleración real siempre será menor o igual a este valor (a <= a_ideal).
  domain_checks:
  - a_ideal es proporcional a la fuerza aplicada
  - a_ideal es inversamente proporcional a la inercia total
  coherence_checks:
  - Debe cumplirse a = eta * a_ideal
  graph_implications:
  - Define la pendiente máxima posible en un gráfico v-t para una F_ap dada.
  pedagogical_triggers:
  - no confundir a_ideal con la aceleración real
  - a_ideal es un horizonte inalcanzable en sistemas con rozamiento

- id: aceleracion_con_eficiencia
  title:
    es: Aceleración Real Estimada por Rendimiento
    en: Estimated Real Acceleration via Efficiency
  equation: a = a_ideal * eta
  latex: a = a_{ideal} \\cdot \\eta
  rearrangements:
  - target: a_ideal
    equation: a_ideal = a / eta
    latex: a_{ideal} = \\frac{a}{\\eta}
    constraints: []
  - target: eta
    equation: eta = a / a_ideal
    latex: \\eta = \\frac{a}{a_{ideal}}
    constraints: []
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: Estimación rápida de la aceleración real escalando la aceleración ideal por
      el factor de eficiencia; válida solo cuando las pérdidas son proporcionales
      a la fuerza motriz.
    en: Quick estimate of real acceleration by scaling ideal acceleration by the efficiency
      factor; valid only when losses are proportional to the driving force.
  constraints: eta constante; a_ideal >= 0; modelo de pérdidas proporcionales
  validity:
    es: Válido como estimación de ingeniería cuando las pérdidas viscosas son dominantes
      y proporcionales a la carga.
    en: Valid as an engineering estimate when viscous losses are dominant and proportional
      to the load.
  dimension_check: '[LT^-2] = [LT^-2] * [1]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - segunda_ley_efectiva
  interpretation_tags:
  - estimacion_rapida
  - penalizacion_por_friccion
  - comparacion_ideal_real
  result_semantics:
    target: a
    kind: physical_magnitude
    sign_meaning:
      es: a > 0 indica aceleración en sentido motriz.
      en: a > 0 indicates acceleration in driving direction.
    absolute_value_meaning:
      es: Ritmo efectivo de cambio de velocidad por aproximación de rendimiento.
      en: Effective rate of velocity change via efficiency approximation.
    meaning: >
      a es la aceleración real estimada por escalado de eficiencia. Sirve para comparar
      rápidamente con a_ideal sin necesidad de conocer F_loss individualmente.
      Si a resulta igual a a_ideal, eta = 1 y el modelo es ideal, no real.
      Si a < 0, eta tiene un valor incoherente o a_ideal fue mal calculada.
  domain_checks:
  - a <= a_ideal siempre (para eta <= 1)
  - a debe ser positivo si el sistema avanza sin fuerza de frenado adicional
  coherence_checks:
  - 'si a > a_ideal, entonces eta > 1: error seguro'
  - si a_ideal = 0, a = 0 independientemente de eta
  graph_implications:
  - La curva v(t) real tiene pendiente a = eta * a_ideal; graficar ambas curvas
    (ideal y real) muestra visualmente el coste dinámico de las pérdidas.
  pedagogical_triggers:
  - si el alumno usa directamente a_ideal sin multiplicar por eta, obtendrá valor
    mayor que el real
  - este modelo es una aproximación; la segunda ley efectiva (a = F_net/m) es más
    exacta cuando se conoce F_loss

- id: potencia_traslacional
  title:
    es: Potencia Mecánica Traslacional
    en: Translational Mechanical Power
  equation: P = F * v
  latex: P = F \\cdot v
  rearrangements:
  - target: F
    equation: F = P / v
    latex: F = \\frac{P}{v}
    constraints: [v > 0]
  - target: v
    equation: v = P / F
    latex: v = \\frac{P}{F}
    constraints: [F > 0]
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Relación entre la potencia instantánea, la fuerza aplicada (o neta) y la velocidad
      de traslación del sistema.
    en: Relationship between instantaneous power, applied (or net) force, and the
      translational velocity of the system.
  constraints: v >= 0
  validity:
    es: Válido para sistemas en traslación pura donde la fuerza y la velocidad son
      colineales.
    en: Valid for purely translational systems where force and velocity are collinear.
  dimension_check: '[ML^2T^-3] = [MLT^-2] * [LT^-1]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - rendimiento_potencia
  interpretation_tags:
  - puente_potencia_fuerza
  - regimen_estacionario
  result_semantics:
    target: P
    kind: physical_magnitude
    sign_meaning:
      es: P > 0 indica trabajo realizado sobre el sistema; P < 0 sistema realiza trabajo.
      en: P > 0 work done on system; P < 0 system does work.
    absolute_value_meaning:
      es: Tasa de transferencia de energía mecánica.
      en: Rate of mechanical energy transfer.
    meaning: >
      P representa la potencia asociada a la fuerza F a una velocidad v.
      Si F es F_ap, P es la potencia de entrada. Si F es F_net, P es la potencia útil.
  domain_checks:
  - P >= 0 si F y v tienen el mismo sentido
  - P aumenta linealmente con v para una fuerza constante
  coherence_checks:
  - P debe ser coherente con el balance P_in = P_out + P_loss
  graph_implications:
  - En un gráfico P vs v, la pendiente es la fuerza F.
  pedagogical_triggers:
  - asegurar colinealidad entre fuerza y velocidad
  - usar F_net para P_out y F_ap para P_in

- id: fuerza_equivalente_torque
  title:
    es: Fuerza Equivalente por Torque de Fricción
    en: Equivalent Force from Friction Torque
  equation: F_loss = tau_fr / r
  latex: F_{loss} = \\frac{\\tau_{fr}}{r}
  rearrangements:
  - target: tau_fr
    equation: tau_fr = F_loss * r
    latex: \\tau_{fr} = F_{loss} \\cdot r
    constraints: [r > 0]
  - target: r
    equation: r = tau_fr / F_loss
    latex: r = \\frac{\\tau_{fr}}{F_{loss}}
    constraints: [F_loss > 0]
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: Conversión del par de rozamiento en los ejes de giro a una fuerza disipativa
      lineal equivalente actuando en el radio de la polea o rueda.
    en: Conversion of friction torque on rotation axes to an equivalent linear dissipative
      force acting at the pulley or wheel radius.
  constraints: r > 0; tau_fr >= 0
  validity:
    es: Válido para la reducción de pérdidas rotativas a un modelo de traslación equivalente.
    en: Valid for reducing rotational losses to an equivalent translational model.
  dimension_check: '[MLT^-2] = [ML^2T^-2] / [L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - fuerza_neta_real
  interpretation_tags:
  - reduccion_de_perdidas
  - efectos_rotativos
  result_semantics:
    target: F_loss
    kind: physical_magnitude
    sign_meaning:
      es: Siempre positivo, resistencia pura.
      en: Always positive, pure resistance.
    absolute_value_meaning:
      es: Fuerza equivalente al par resistivo del eje.
      en: Force equivalent to shaft resistive torque.
    meaning: >
      F_loss es la contribución de la fricción del eje al balance de fuerzas traslacional.
      Este valor debe sumarse a otras fuerzas de resistencia (como rozamiento de
      superficie) para obtener la pérdida total.
  domain_checks:
  - F_loss disminuye si aumenta el radio r para un mismo torque (ventaja mecánica)
  - F_loss aumenta linealmente con tau_fr
  coherence_checks:
  - F_loss > 0 siempre que haya fricción en los rodamientos
  graph_implications:
  - Determina el valor mínimo de F_ap necesario para romper la inercia del eje.
  pedagogical_triggers:
  - recordar sumar F_loss_rotativa a las otras pérdidas
  - verificar que r está en metros

- id: segunda_ley_masa_variable
  title:
    es: Segunda Ley de Newton con Carga Continua
    en: Newton's Second Law with Continuous Loading
  equation: F_net = m * a + v * m_dot
  latex: F_{net} = m \\cdot a + v \\cdot \\dot{m}
  rearrangements:
  - target: a
    equation: a = (F_net - v * m_dot) / m
    latex: a = \\frac{F_{net} - v \\cdot \\dot{m}}{m}
    constraints: [m > 0]
  - target: m_dot
    equation: m_dot = (F_net - m * a) / v
    latex: \\dot{m} = \\frac{F_{net} - m \\cdot a}{v}
    constraints: [v > 0]
  category: derived
  relation_type: fundamental_law
  physical_meaning:
    es: Balance de fuerzas para sistemas reales donde la masa aumenta por carga continua
      (flujo másico), como una cinta transportadora siendo llenada.
    en: Force balance for real systems where mass increases due to continuous loading
      (mass flow), such as a conveyor belt being filled.
  constraints: m > 0; m_dot >= 0; v >= 0
  validity:
    es: Válido para sistemas con variación de masa temporal en régimen de baja velocidad.
    en: Valid for systems with temporal mass variation in low-speed regime.
  dimension_check: '[MLT^-2] = [M] * [LT^-2] + [LT^-1] * [MT^-1]'
  calculable: true
  motivo_no_calculable: null
  used_in: []
  interpretation_tags:
  - masa_variable
  - carga_continua
  - inercia_temporal
  result_semantics:
    target: a
    kind: physical_magnitude
    sign_meaning:
      es: a > 0 aceleración motriz.
      en: a > 0 driving acceleration.
    absolute_value_meaning:
      es: Aceleración afectada por el flujo másico.
      en: Acceleration affected by mass flow.
    meaning: >
      a es la aceleración real considerando el "lastre" del flujo másico.
      Para un mismo F_net, la aceleración es menor si el sistema se está cargando (m_dot > 0).
  domain_checks:
  - a disminuye si v o m_dot aumentan (efecto de inercia por flujo)
  - Si m_dot = 0, se recupera la segunda ley estándar
  coherence_checks:
  - El término v * m_dot representa la fuerza necesaria para acelerar la masa entrante
    hasta la velocidad v del sistema.
  graph_implications:
  - Produce una deceleración progresiva si la masa m crece significativamente con el tiempo.
  pedagogical_triggers:
  - no olvidar el término de flujo másico en cintas transportadoras
  - v representa la velocidad a la que se incorpora la masa
`;export{e as default};
