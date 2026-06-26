const e=`version: 1
formulas:
- id: mcu_posicion_angular
  title:
    es: Ecuación horaria de la posición angular
    en: Angular position equation
  equation: theta = theta_0 + omega*t
  latex: \\theta = \\theta_0 + \\omega t
  rearrangements:
  - target: theta_0
    latex: \\theta_0 = \\theta - \\omega t
    equation: theta_0 = theta - omega*t
    constraints: []
  - target: omega
    latex: \\omega = \\frac{\\theta - \\theta_0}{t}
    equation: omega = (theta - theta_0)/t
    constraints: []
  - target: t
    latex: t = \\frac{\\theta - \\theta_0}{\\omega}
    equation: t = (theta - theta_0)/omega
    constraints: []
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: Describe cómo cambia la orientación angular con el tiempo a velocidad constante.
    en: Describes how angular orientation changes over time at constant speed.
  constraints:
  - omega es constante
  validity:
    es: Movimiento circular uniforme.
    en: Uniform circular motion.
  dimension_check: '[1] = [1] + [1/T][T] = [1]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Predicción de orientación futura
  interpretation_tags:
  - mcu
  result_semantics:
    target: theta
    meaning: Indica la ubicación angular final.
  domain_checks:
  - expr: 'true'
    message:
      es: Verifica que el ángulo esté en radianes.
      en: Check that the angle is in radians.
  coherence_checks:
  - expr: 'true'
    message:
      es: El resultado debe ser coherente con el tiempo transcurrido.
      en: The result must be coherent with the elapsed time.
  graph_implications:
  - La pendiente de la gráfica theta-t representa la velocidad angular.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Comprueba el signo de la velocidad angular para determinar el sentido de giro.
      en: Check the angular velocity sign to determine the rotation direction.
- id: mcu_desplazamiento_angular
  title:
    es: Definición de desplazamiento angular
    en: Angular displacement definition
  equation: dtheta = omega * dt
  latex: \\Delta \\theta = \\omega \\Delta t
  rearrangements:
  - target: omega
    latex: \\omega = \\frac{\\Delta \\theta}{\\Delta t}
    equation: omega = dtheta / dt
    constraints: []
  - target: dt
    latex: \\Delta t = \\frac{\\Delta \\theta}{\\omega}
    equation: dt = dtheta / omega
    constraints: []
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Relación entre el ángulo barrido y el intervalo de tiempo.
    en: Relationship between the swept angle and the time interval.
  constraints:
  - dt > 0
  validity:
    es: Aplicable a cualquier tramo del giro.
    en: Applicable to any segment of the rotation.
  dimension_check: '[1] = [1/T][T]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Cálculo de giros totales
  interpretation_tags:
  - mcu
  result_semantics:
    target: dtheta
    meaning: Indica cuánto ha girado el sistema.
  domain_checks:
  - expr: 'true'
    message:
      es: El intervalo de tiempo debe ser positivo.
      en: The time interval must be positive.
  coherence_checks:
  - expr: 'true'
    message:
      es: El ángulo barrido debe ser consistente con omega.
      en: The swept angle must be consistent with omega.
  graph_implications:
  - Equivale al área bajo la curva de velocidad angular.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: 2*pi radianes equivalen a una vuelta completa.
      en: 2*pi radians are equivalent to one full revolution.
- id: mcu_omega_periodo
  title:
    es: Relación entre velocidad angular y período
    en: Angular velocity and period relation
  equation: omega = 2*pi/T
  latex: \\omega = \\frac{2\\pi}{T}
  rearrangements:
  - target: T
    latex: T = \\frac{2\\pi}{\\omega}
    equation: T = 2*pi/omega
    constraints: []
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: Vincula el ritmo de giro con la duración de un ciclo.
    en: Links the rotation rate with the cycle duration.
  constraints:
  - T > 0
  validity:
    es: Movimiento circular uniforme.
    en: Uniform circular motion.
  dimension_check: '[1/T] = [1]/[T]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Caracterización de motores
  interpretation_tags:
  - mcu
  result_semantics:
    target: omega
    meaning: Rapidez de giro en radianes por segundo.
  domain_checks:
  - expr: 'true'
    message:
      es: T no puede ser cero.
      en: T cannot be zero.
  coherence_checks:
  - expr: 'true'
    message:
      es: Verifica que la relación f = 1/T se mantenga.
      en: Check that the relationship f = 1/T is maintained.
  graph_implications:
  - Determina la separación temporal entre ciclos.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: A mayor omega, menor período.
      en: Higher omega means lower period.
- id: mcu_omega_frecuencia
  title:
    es: Relación entre velocidad angular y frecuencia
    en: Angular velocity and frequency relation
  equation: omega = 2*pi*f
  latex: \\omega = 2\\pi f
  rearrangements:
  - target: f
    latex: f = \\frac{\\omega}{2\\pi}
    equation: f = omega/(2*pi)
    constraints: []
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: Convierte vueltas por segundo en radianes por segundo.
    en: Converts revolutions per second into radians per second.
  constraints:
  - f >= 0
  validity:
    es: Movimiento circular periódico.
    en: Periodic circular motion.
  dimension_check: '[1/T] = [1][1/T]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Estandarización de unidades
  interpretation_tags:
  - mcu
  result_semantics:
    target: omega
    meaning: Rapidez de rotación angular.
  domain_checks:
  - expr: 'true'
    message:
      es: La frecuencia debe ser no negativa.
      en: Frequency must be non-negative.
  coherence_checks:
  - expr: 'true'
    message:
      es: Revisa el factor de conversión 2*pi.
      en: Check the 2*pi conversion factor.
  graph_implications:
  - Escala la magnitud del ritmo cíclico.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Diferencia entre radianes por segundo y hercios.
      en: Difference between radians per second and Hertz.
- id: mcu_frecuencia_periodo
  title:
    es: Relación entre frecuencia y período
    en: Frequency and period relation
  equation: f = 1/T
  latex: f = \\frac{1}{T}
  rearrangements:
  - target: T
    latex: T = \\frac{1}{f}
    equation: T = 1/f
    constraints: []
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: Inversión temporal entre tasa y duración.
    en: Temporal inversion between rate and duration.
  constraints:
  - T > 0
  validity:
    es: Cualquier proceso periódico.
    en: Any periodic process.
  dimension_check: '[1/T] = [1]/[T]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Análisis de oscilaciones
  interpretation_tags:
  - mcu
  result_semantics:
    target: f
    meaning: Tasa de repetición.
  domain_checks:
  - expr: 'true'
    message:
      es: El período debe ser positivo.
      en: The period must be positive.
  coherence_checks:
  - expr: 'true'
    message:
      es: Comprueba la reciprocidad física.
      en: Check physical reciprocity.
  graph_implications:
  - Define la densidad de sucesos en el tiempo.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Recuerda las unidades de hercios (s^-1).
      en: Remember the Hertz units (s^-1).
- id: mcu_relacion_lineal
  title:
    es: Relación entre rapidez lineal y angular
    en: Linear and angular speed relation
  equation: v = omega*R
  latex: v = \\omega R
  rearrangements:
  - target: omega
    latex: \\omega = \\frac{v}{R}
    equation: omega = v/R
    constraints: []
  - target: R
    latex: R = \\frac{v}{\\omega}
    equation: R = v/omega
    constraints: []
  category: derived
  relation_type: geometric_interpretation
  physical_meaning:
    es: Vincula la rapidez de la partícula con su radio y ritmo de giro.
    en: Links the particle's speed with its radius and rotation rate.
  constraints:
  - R > 0
  validity:
    es: Movimiento circular.
    en: Circular motion.
  dimension_check: '[L/T] = [1/T][L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Cálculo de velocidad tangencial
  interpretation_tags:
  - mcu
  result_semantics:
    target: v
    meaning: Rapidez lineal en el borde.
  domain_checks:
  - expr: 'true'
    message:
      es: El radio debe ser positivo.
      en: The radius must be positive.
  coherence_checks:
  - expr: 'true'
    message:
      es: A mayor radio, mayor velocidad lineal.
      en: Larger radius means higher linear velocity.
  graph_implications:
  - El radio actúa como constante de proporcionalidad.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Comprueba que omega esté en radianes por segundo.
      en: Check that omega is in radians per second.
- id: mcu_longitud_arco
  title:
    es: Cálculo de la longitud de arco
    en: Arc length calculation
  equation: s = R*dtheta
  latex: s = R \\Delta \\theta
  rearrangements:
  - target: dtheta
    latex: \\Delta \\theta = \\frac{s}{R}
    equation: dtheta = s/R
    constraints: []
  - target: R
    latex: R = \\frac{s}{\\Delta \\theta}
    equation: R = s/dtheta
    constraints: []
  category: derived
  relation_type: geometric_interpretation
  physical_meaning:
    es: Distancia lineal recorrida sobre la trayectoria curva.
    en: Linear distance traveled on the curved path.
  constraints:
  - dtheta en radianes
  validity:
    es: Trayectorias circulares.
    en: Circular trajectories.
  dimension_check: '[L] = [L][1]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Determinación de metros recorridos
  interpretation_tags:
  - mcu
  result_semantics:
    target: s
    meaning: Camino lineal sobre el círculo.
  domain_checks:
  - expr: 'true'
    message:
      es: El desplazamiento angular debe estar en radianes.
      en: The angular displacement must be in radians.
  coherence_checks:
  - expr: 'true'
    message:
      es: El arco debe ser mayor que el desplazamiento si el radio es mayor a 1.
      en: The arc must be greater than the displacement if the radius is greater than 1.
  graph_implications:
  - Conecta la geometría central con la lineal.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Un arco de 2*pi*R es la circunferencia completa.
      en: An arc of 2*pi*R is the complete circumference.
- id: mcu_aceleracion_v
  title:
    es: Aceleración centrípeta mediante rapidez lineal
    en: Centripetal acceleration via linear speed
  equation: ac = v^2/R
  latex: a_c = \\frac{v^2}{R}
  rearrangements:
  - target: v
    latex: v = \\sqrt{a_c R}
    equation: v = sqrt(ac*R)
    constraints: []
  - target: R
    latex: R = \\frac{v^2}{a_c}
    equation: R = v^2/ac
    constraints: []
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: Aceleración responsable del cambio de dirección hacia el centro.
    en: Acceleration responsible for the change of direction toward the center.
  constraints:
  - R > 0
  validity:
    es: Movimiento circular.
    en: Circular motion.
  dimension_check: '[L/T^2] = [L/T]^2/[L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Cálculo de fuerzas normales
  interpretation_tags:
  - mcu
  result_semantics:
    target: ac
    meaning: Intensidad de la aceleración central.
  domain_checks:
  - expr: 'true'
    message:
      es: v^2 siempre es positivo.
      en: v^2 is always positive.
  coherence_checks:
  - expr: 'true'
    message:
      es: Revisa que la aceleración crezca con el cuadrado de la rapidez.
      en: Check that acceleration grows with the square of the speed.
  graph_implications:
  - Se representa como un vector radial hacia el centro.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Sin esta aceleración, el objeto se movería en línea recta.
      en: Without this acceleration, the object would move in a straight line.
- id: mcu_aceleracion_omega
  title:
    es: Aceleración centrípeta mediante velocidad angular
    en: Centripetal acceleration via angular velocity
  equation: ac = omega^2 * R
  latex: a_c = \\omega^2 R
  rearrangements:
  - target: omega
    latex: \\omega = \\sqrt{\\frac{a_c}{R}}
    equation: omega = sqrt(ac/R)
    constraints: []
  - target: R
    latex: R = \\frac{a_c}{\\omega^2}
    equation: R = ac/(omega^2)
    constraints: []
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: Relación directa entre el ritmo de giro y la aceleración normal.
    en: Direct relationship between rotation rate and normal acceleration.
  constraints:
  - R > 0
  validity:
    es: Movimiento circular uniforme.
    en: Uniform circular motion.
  dimension_check: '[L/T^2] = [1/T]^2[L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Análisis de esfuerzo centrífugo
  interpretation_tags:
  - mcu
  result_semantics:
    target: ac
    meaning: Intensidad de la aceleración normal.
  domain_checks:
  - expr: 'true'
    message:
      es: El radio debe ser constante.
      en: The radius must be constant.
  coherence_checks:
  - expr: 'true'
    message:
      es: Comprueba que la aceleración sea proporcional a R para una omega fija.
      en: Check that acceleration is proportional to R for a fixed omega.
  graph_implications:
  - Muestra la dependencia cuadrática con el ritmo de giro.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Útil para calcular tensiones en hilos que giran.
      en: Useful for calculating tensions in rotating strings.
- id: mcu_vueltas
  title:
    es: Cálculo del número de vueltas
    en: Number of revolutions calculation
  equation: N = dtheta / (2*pi)
  latex: N = \\frac{\\Delta \\theta}{2\\pi}
  rearrangements:
  - target: dtheta
    latex: \\Delta \\theta = N \\cdot 2\\pi
    equation: dtheta = N * 2 * pi
    constraints: []
  category: derived
  relation_type: geometric_interpretation
  physical_meaning:
    es: Convierte el desplazamiento angular en radianes a número de vueltas.
    en: Converts angular displacement in radians to the number of revolutions.
  constraints:
  - dtheta en radianes
  validity:
    es: Cualquier movimiento rotatorio.
    en: Any rotational motion.
  dimension_check: '[1] = [1]/[1]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - Contadores de revoluciones
  interpretation_tags:
  - mcu
  result_semantics:
    target: N
    meaning: Cantidad de ciclos completos.
  domain_checks:
  - expr: 'true'
    message:
      es: Una vuelta siempre son 2*pi radianes.
      en: One revolution is always 2*pi radians.
  coherence_checks:
  - expr: 'true'
    message:
      es: El número de vueltas debe ser proporcional al ángulo barrido.
      en: The number of revolutions must be proportional to the swept angle.
  graph_implications:
  - Representa el número de ciclos en una señal periódica.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: No olvides que 2*pi es aproximadamente 6.28.
      en: Do not forget that 2*pi is approximately 6.28.
- id: segunda_ley_newton
  title:
    es: Segunda ley de Newton
    en: Newton's second law
  equation: F = m * a
  latex: F = m a
  rearrangements:
  - target: F
    latex: F = m a
    equation: F = m * a
    constraints: []
  - target: m
    latex: m = \\frac{F}{a}
    equation: m = F / a
    constraints: []
  - target: a
    latex: a = \\frac{F}{m}
    equation: a = F / m
    constraints: []
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: Relaciona la fuerza neta con la masa y la aceleración del sistema.
    en: Relates the net force to the mass and acceleration of the system.
  constraints:
  - Masa constante
  validity:
    es: Mecánica clásica.
    en: Classical mechanics.
  dimension_check: '[M L T^-2] = [M][L T^-2]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - errores.md
  interpretation_tags:
  - dinamica
  result_semantics:
    target: F
    meaning: Fuerza resultante sobre el objeto.
  domain_checks:
  - expr: 'm > 0'
    message:
      es: La masa debe ser positiva.
      en: Mass must be positive.
  coherence_checks:
  - expr: 'F * a >= 0'
    message:
      es: La fuerza y la aceleración deben tener el mismo sentido.
      en: Force and acceleration must have the same direction.
  graph_implications:
  - La fuerza neta es proporcional a la aceleración.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Recuerda que sin fuerza neta no hay cambio en el vector velocidad.
      en: Remember that without net force there is no change in the velocity vector.

`;export{e as default};
