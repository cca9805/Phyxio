const e=`version: 2
id: interpretacion-mcu
leaf_id: mcu
nombre:
  es: Interpretacion de Mcu
  en: Interpretation of Uniform Circular Motion
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cinematica
  parent_id: movimiento-circular
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-circular/mcu
dependencies:
  formulas:
  - mcu_posicion_angular
  - mcu_desplazamiento_angular
  - mcu_omega_periodo
  - mcu_omega_frecuencia
  - mcu_frecuencia_periodo
  - mcu_relacion_lineal
  - mcu_longitud_arco
  - mcu_aceleracion_v
  - mcu_aceleracion_omega
  - mcu_vueltas
  - segunda_ley_newton
  magnitudes:
  - R
  - theta
  - theta_0
  - dtheta
  - omega
  - T
  - f
  - v
  - ac
  - t
  - dt
  - s
  - N
  - F
  - a
  - m
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
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  omega:
    summary_rules:
    - id: omega_summary
      when: 'true'
      status: info
      text:
        es: omega resume el ritmo constante de rotacion.
        en: omega summarizes the constant rotation rate.
    coherence_rules:
    - id: omega_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que omega sea consistente con el periodo T.
        en: Check that omega is consistent with period T.
    physical_reading_rules:
    - id: omega_physical
      when: 'true'
      status: info
      text:
        es: Indica cuan rapido barre el angulo la particula en el tiempo.
        en: Indicates how fast the particle sweeps the angle over time.
    model_validity_rules:
    - id: omega_validity
      when: 'true'
      status: ok
      text:
        es: Solo es interpretable si el giro es uniforme.
        en: Only interpretable if the rotation is uniform.
    graph_rules:
    - id: omega_graph
      when: 'true'
      status: info
      text:
        es: Representa la pendiente en el diagrama theta-t.
        en: Represents the slope in the theta-t diagram.
    likely_errors:
    - id: omega_warn
      when: 'true'
      status: warning
      text:
        es: No confundas omega con la rapidez tangencial v.
        en: Do not confuse omega with the tangential speed v.
    next_step_rules:
    - id: omega_next
      when: 'true'
      status: info
      text:
        es: Usa omega para calcular la aceleracion necesaria.
        en: Use omega to calculate the required acceleration.
  ac:
    summary_rules:
    - id: ac_summary
      when: 'true'
      status: info
      text:
        es: ac es la aceleracion dirigida al centro de la curva.
        en: ac is the acceleration directed to the curve center.
    coherence_rules:
    - id: ac_coherence
      when: 'true'
      status: ok
      text:
        es: Verifica que ac sea perpendicular a la trayectoria.
        en: Check that ac is perpendicular to the trajectory.
    physical_reading_rules:
    - id: ac_physical
      when: 'true'
      status: info
      text:
        es: Esta aceleracion modifica el sentido del vector velocidad.
        en: This acceleration modifies the velocity vector direction.
    model_validity_rules:
    - id: ac_validity
      when: 'true'
      status: ok
      text:
        es: En el MCU, su modulo permanece constante en el tiempo.
        en: In MCU, its magnitude remains constant over time.
    graph_rules:
    - id: ac_graph
      when: 'true'
      status: info
      text:
        es: En un diagrama radial, ac apunta siempre al centro.
        en: In a radial diagram, ac always points to the center.
    likely_errors:
    - id: ac_warn
      when: 'true'
      status: warning
      text:
        es: Sin ac, el objeto escaparia por la tangente.
        en: Without ac, the object would escape along the tangent.
    next_step_rules:
    - id: ac_next
      when: 'true'
      status: info
      text:
        es: Determina la fuerza centripeta mediante la masa.
        en: Determine the centripetal force using the mass.
  v:
    summary_rules:
    - id: v_summary
      when: 'true'
      status: info
      text:
        es: v es la rapidez medida sobre el arco de la trayectoria.
        en: v is the speed measured over the trajectory arc.
    coherence_rules:
    - id: v_coherence
      when: 'true'
      status: ok
      text:
        es: v debe ser proporcional a omega y al radio R.
        en: v must be proportional to omega and radius R.
    physical_reading_rules:
    - id: v_physical
      when: 'true'
      status: info
      text:
        es: Representa la distancia en metros recorrida cada segundo.
        en: Represents the distance in meters covered each second.
    model_validity_rules:
    - id: v_validity
      when: 'true'
      status: ok
      text:
        es: El modulo de v es constante por definicion de MCU.
        en: The magnitude of v is constant by MCU definition.
    graph_rules:
    - id: v_graph
      when: 'true'
      status: info
      text:
        es: v se muestra siempre tangente al circulo de giro.
        en: v is always shown tangent to the rotation circle.
    likely_errors:
    - id: v_warn
      when: 'true'
      status: warning
      text:
        es: No olvides que la direccion de v cambia en cada punto.
        en: Do not forget that v direction changes at each point.
    next_step_rules:
    - id: v_next
      when: 'true'
      status: info
      text:
        es: Usa v para calcular la longitud del arco recorrido.
        en: Use v to calculate the traveled arc length.
  dtheta:
    summary_rules:
    - id: dtheta_summary
      when: 'true'
      status: info
      text:
        es: dtheta indica el cambio total de orientacion angular.
        en: dtheta indicates the total change in angular orientation.
    coherence_rules:
    - id: dtheta_coherence
      when: 'true'
      status: ok
      text:
        es: dtheta es el producto de omega por la duracion dt.
        en: dtheta is the product of omega and duration dt.
    physical_reading_rules:
    - id: dtheta_physical
      when: 'true'
      status: info
      text:
        es: Mide el angulo barrido desde el inicio hasta el final.
        en: Measures the swept angle from start to finish.
    model_validity_rules:
    - id: dtheta_validity
      when: 'true'
      status: ok
      text:
        es: Supone un ritmo de giro constante durante todo el tramo.
        en: Assumes a constant rotation rate throughout the segment.
    graph_rules:
    - id: dtheta_graph
      when: 'true'
      status: info
      text:
        es: Es el incremento vertical en la grafica theta-t.
        en: It is the vertical increment in the theta-t graph.
    likely_errors:
    - id: dtheta_warn
      when: 'true'
      status: warning
      text:
        es: Asegurate de que el resultado este en radianes.
        en: Ensure the result is in radians.
    next_step_rules:
    - id: dtheta_next
      when: 'true'
      status: info
      text:
        es: Convierte dtheta a vueltas dividiendo por 2*pi.
        en: Convert dtheta to revolutions by dividing by 2*pi.
  dt:
    summary_rules:
    - id: dt_summary
      when: 'true'
      status: info
      text:
        es: dt es la duracion temporal del proceso analizado.
        en: dt is the temporal duration of the analyzed process.
    coherence_rules:
    - id: dt_coherence
      when: 'true'
      status: ok
      text:
        es: La duracion dt debe ser estrictamente positiva.
        en: Duration dt must be strictly positive.
    physical_reading_rules:
    - id: dt_physical
      when: 'true'
      status: info
      text:
        es: Es el tiempo necesario para completar el giro dtheta.
        en: It is the time needed to complete the rotation dtheta.
    model_validity_rules:
    - id: dt_validity
      when: 'true'
      status: ok
      text:
        es: En este intervalo el modelo MCU debe mantenerse.
        en: In this interval the MCU model must hold.
    graph_rules:
    - id: dt_graph
      when: 'true'
      status: info
      text:
        es: Define la anchura horizontal en las graficas temporales.
        en: Defines the horizontal width in temporal graphs.
    likely_errors:
    - id: dt_warn
      when: 'true'
      status: warning
      text:
        es: No lo confundas con el periodo T del sistema.
        en: Do not confuse it with the system period T.
    next_step_rules:
    - id: dt_next
      when: 'true'
      status: info
      text:
        es: Usa dt para verificar la sincronia del evento.
        en: Use dt to verify the event synchrony.
  T:
    summary_rules:
    - id: T_summary
      when: 'true'
      status: info
      text:
        es: T representa el tiempo intrinseco de un ciclo completo.
        en: T represents the intrinsic time of a full cycle.
    coherence_rules:
    - id: T_coherence
      when: 'true'
      status: ok
      text:
        es: T es el reciproco de la frecuencia f.
        en: T is the reciprocal of frequency f.
    physical_reading_rules:
    - id: T_physical
      when: 'true'
      status: info
      text:
        es: Indica cada cuanto tiempo el objeto vuelve al origen.
        en: Indicates how often the object returns to the origin.
    model_validity_rules:
    - id: T_validity
      when: 'true'
      status: ok
      text:
        es: T solo es constante si omega no cambia.
        en: T is only constant if omega does not change.
    graph_rules:
    - id: T_graph
      when: 'true'
      status: info
      text:
        es: Marca la periodicidad en señales armonicas vinculadas.
        en: Marks periodicity in linked harmonic signals.
    likely_errors:
    - id: T_warn
      when: 'true'
      status: warning
      text:
        es: Un periodo nulo es fisicamente imposible para giro.
        en: A zero period is physically impossible for rotation.
    next_step_rules:
    - id: T_next
      when: 'true'
      status: info
      text:
        es: Predice el numero de vueltas en un tiempo largo.
        en: Predict the number of revolutions in a long time.
  F:
    summary_rules:
    - id: F_summary
      when: 'true'
      status: info
      text:
        es: Representa la fuerza neta centrípeta necesaria para el giro.
        en: Represents the net centripetal force required for rotation.
    coherence_rules:
    - id: F_coherence
      when: 'true'
      status: ok
      text:
        es: La fuerza neta debe ser proporcional a la masa y la aceleración.
        en: Net force must be proportional to mass and acceleration.
    physical_reading_rules:
    - id: F_physical
      when: 'true'
      status: info
      text:
        es: Indica la magnitud del empuje radial hacia el centro.
        en: Indicates the magnitude of the radial push toward the center.
    model_validity_rules:
    - id: F_validity
      when: 'true'
      status: ok
      text:
        es: El modelo asume que esta fuerza es la resultante de todas las interacciones.
        en: The model assumes this force is the resultant of all interactions.
    graph_rules:
    - id: F_graph
      when: 'true'
      status: info
      text:
        es: En un DCL, se representa como la suma de vectores radiales.
        en: In an FBD, it is represented as the sum of radial vectors.
    likely_errors:
    - id: F_warn
      when: 'true'
      status: warning
      text:
        es: No sumes la "fuerza centrípeta" como una fuerza extra.
        en: Do not add "centripetal force" as an extra force.
    next_step_rules:
    - id: F_next
      when: 'true'
      status: info
      text:
        es: Analiza qué interacción física (tensión, fricción) provee esta fuerza.
        en: Analyze which physical interaction (tension, friction) provides this force.
  N:
    summary_rules:
    - id: N_summary
      when: 'true'
      status: info
      text:
        es: Indica el número total de ciclos o vueltas completadas.
        en: Indicates the total number of cycles or revolutions completed.
    coherence_rules:
    - id: N_coherence
      when: 'true'
      status: ok
      text:
        es: N debe ser consistente con el desplazamiento angular total.
        en: N must be consistent with total angular displacement.
    physical_reading_rules:
    - id: N_physical
      when: 'true'
      status: info
      text:
        es: Mide cuántas veces el sistema ha repetido su configuración inicial.
        en: Measures how many times the system has repeated its initial configuration.
    model_validity_rules:
    - id: N_validity
      when: 'true'
      status: ok
      text:
        es: Solo cuenta vueltas completas e íntegras en el modelo ideal.
        en: Only counts complete and full revolutions in the ideal model.
    graph_rules:
    - id: N_graph
      when: 'true'
      status: info
      text:
        es: Representa el conteo de ciclos en una señal periódica.
        en: Represents the cycle count in a periodic signal.
    likely_errors:
    - id: N_warn
      when: 'true'
      status: warning
      text:
        es: No olvides dividir el ángulo total por 2*pi.
        en: Do not forget to divide total angle by 2*pi.
    next_step_rules:
    - id: N_next
      when: 'true'
      status: info
      text:
        es: Usa N para determinar la distancia lineal total recorrida.
        en: Use N to determine the total linear distance traveled.
  R:
    summary_rules:
    - id: R_summary
      when: 'true'
      status: info
      text:
        es: Define el radio de la trayectoria circular.
        en: Defines the radius of the circular path.
    coherence_rules:
    - id: R_coherence
      when: 'true'
      status: ok
      text:
        es: R debe ser constante para que el modelo sea válido.
        en: R must be constant for the model to be valid.
    physical_reading_rules:
    - id: R_physical
      when: 'true'
      status: info
      text:
        es: Distancia desde el eje de rotación hasta la partícula.
        en: Distance from the rotation axis to the particle.
    model_validity_rules:
    - id: R_validity
      when: 'true'
      status: ok
      text:
        es: Variaciones en R invalidan el uso de fórmulas puras de MCU.
        en: Variations in R invalidate the use of pure MCU formulas.
    graph_rules:
    - id: R_graph
      when: 'true'
      status: info
      text:
        es: Determina la escala espacial de la órbita.
        en: Determines the spatial scale of the orbit.
    likely_errors:
    - id: R_warn
      when: 'true'
      status: warning
      text:
        es: Cuidado con confundir radio con diámetro.
        en: Be careful not to confuse radius with diameter.
    next_step_rules:
    - id: R_next
      when: 'true'
      status: info
      text:
        es: Relaciona R con la velocidad lineal para hallar la aceleración.
        en: Relate R with linear velocity to find acceleration.
  a:
    summary_rules:
    - id: a_summary
      when: 'true'
      status: info
      text:
        es: Aceleración del sistema (en este caso, puramente centrípeta).
        en: System acceleration (in this case, purely centripetal).
    coherence_rules:
    - id: a_coherence
      when: 'true'
      status: ok
      text:
        es: En MCU, la aceleración tangencial debe ser cero.
        en: In MCU, tangential acceleration must be zero.
    physical_reading_rules:
    - id: a_physical
      when: 'true'
      status: info
      text:
        es: Describe el cambio de dirección del vector velocidad.
        en: Describes the direction change of the velocity vector.
    model_validity_rules:
    - id: a_validity
      when: 'true'
      status: ok
      text:
        es: Asumimos que no hay aceleración angular.
        en: We assume there is no angular acceleration.
    graph_rules:
    - id: a_graph
      when: 'true'
      status: info
      text:
        es: Vector siempre perpendicular a la velocidad instantánea.
        en: Vector always perpendicular to the instantaneous velocity.
    likely_errors:
    - id: a_warn
      when: 'true'
      status: warning
      text:
        es: No asumas que aceleración nula implica velocidad constante.
        en: Do not assume that zero acceleration implies constant velocity.
    next_step_rules:
    - id: a_next
      when: 'true'
      status: info
      text:
        es: Usa la aceleración para determinar la tensión necesaria en el sistema.
        en: Use acceleration to determine the required tension in the system.
  f:
    summary_rules:
    - id: f_summary
      when: 'true'
      status: info
      text:
        es: Frecuencia de giro o número de vueltas por unidad de tiempo.
        en: Rotation frequency or number of revolutions per unit of time.
    coherence_rules:
    - id: f_coherence
      when: 'true'
      status: ok
      text:
        es: f es el inverso matemático del período T.
        en: f is the mathematical inverse of the period T.
    physical_reading_rules:
    - id: f_physical
      when: 'true'
      status: info
      text:
        es: Mide cuántas vueltas se completan cada segundo.
        en: Measures how many revolutions are completed each second.
    model_validity_rules:
    - id: f_validity
      when: 'true'
      status: ok
      text:
        es: La frecuencia debe mantenerse estable para el modelo ideal.
        en: Frequency must remain stable for the ideal model.
    graph_rules:
    - id: f_graph
      when: 'true'
      status: info
      text:
        es: Relacionada con la densidad de ciclos por unidad de tiempo.
        en: Related to the cycle density per unit of time.
    likely_errors:
    - id: f_warn
      when: 'true'
      status: warning
      text:
        es: No confundas hercios (vueltas/s) con rad/s.
        en: Do not confuse Hertz (rev/s) with rad/s.
    next_step_rules:
    - id: f_next
      when: 'true'
      status: info
      text:
        es: Multiplica por 2*pi para obtener la velocidad angular omega.
        en: Multiply by 2*pi to obtain the angular velocity omega.
  m:
    summary_rules:
    - id: m_summary
      when: 'true'
      status: info
      text:
        es: Masa del objeto que realiza el movimiento circular.
        en: Mass of the object performing the circular motion.
    coherence_rules:
    - id: m_coherence
      when: 'true'
      status: ok
      text:
        es: La masa debe ser una cantidad positiva.
        en: Mass must be a positive quantity.
    physical_reading_rules:
    - id: m_physical
      when: 'true'
      status: info
      text:
        es: Medida de la inercia o resistencia al cambio de movimiento.
        en: Measure of inertia or resistance to change in motion.
    model_validity_rules:
    - id: m_validity
      when: 'true'
      status: ok
      text:
        es: Se asume que la masa es constante durante el proceso.
        en: Mass is assumed to be constant during the process.
    graph_rules:
    - id: m_graph
      when: 'true'
      status: info
      text:
        es: Actúa como factor de escala entre fuerza y aceleración.
        en: Acts as a scaling factor between force and acceleration.
    likely_errors:
    - id: m_warn
      when: 'true'
      status: warning
      text:
        es: No confundas masa con peso (fuerza gravitatoria).
        en: Do not confuse mass with weight (gravitational force).
    next_step_rules:
    - id: m_next
      when: 'true'
      status: info
      text:
        es: Usa la masa para calcular la energía cinética rotacional.
        en: Use mass to calculate rotational kinetic energy.
  s:
    summary_rules:
    - id: s_summary
      when: 'true'
      status: info
      text:
        es: Longitud del arco o distancia lineal recorrida.
        en: Arc length or linear distance traveled.
    coherence_rules:
    - id: s_coherence
      when: 'true'
      status: ok
      text:
        es: s debe ser proporcional al radio y al desplazamiento angular.
        en: s must be proportional to the radius and angular displacement.
    physical_reading_rules:
    - id: s_physical
      when: 'true'
      status: info
      text:
        es: Metros reales recorridos sobre la circunferencia.
        en: Real meters traveled on the circumference.
    model_validity_rules:
    - id: s_validity
      when: 'true'
      status: ok
      text:
        es: Válido solo para trayectorias circulares de radio fijo.
        en: Valid only for circular paths of fixed radius.
    graph_rules:
    - id: s_graph
      when: 'true'
      status: info
      text:
        es: Representa la extensión del trazo en el espacio.
        en: Represents the extension of the trace in space.
    likely_errors:
    - id: s_warn
      when: 'true'
      status: warning
      text:
        es: No confundas arco con cuerda (distancia recta).
        en: Do not confuse arc with chord (straight distance).
    next_step_rules:
    - id: s_next
      when: 'true'
      status: info
      text:
        es: Usa el arco para determinar el tiempo total de recorrido.
        en: Use the arc to determine the total travel time.
  t:
    summary_rules:
    - id: t_summary
      when: 'true'
      status: info
      text:
        es: Tiempo absoluto o instante cronológico de la observación.
        en: Absolute time or chronological instant of observation.
    coherence_rules:
    - id: t_coherence
      when: 'true'
      status: ok
      text:
        es: El tiempo cronológico debe ser consistente con la posición.
        en: Chronological time must be consistent with position.
    physical_reading_rules:
    - id: t_physical
      when: 'true'
      status: info
      text:
        es: Indica en qué momento exacto ocurre el suceso.
        en: Indicates exactly when the event occurs.
    model_validity_rules:
    - id: t_validity
      when: 'true'
      status: ok
      text:
        es: Se asume una escala temporal lineal y uniforme.
        en: A linear and uniform time scale is assumed.
    graph_rules:
    - id: t_graph
      when: 'true'
      status: info
      text:
        es: Eje horizontal independiente en la mayoría de gráficas.
        en: Independent horizontal axis in most graphs.
    likely_errors:
    - id: t_warn
      when: 'true'
      status: warning
      text:
        es: Diferencia entre tiempo absoluto e intervalo dt.
        en: Differentiate between absolute time and interval dt.
    next_step_rules:
    - id: t_next
      when: 'true'
      status: info
      text:
        es: Determina el número de ciclos completados hasta este tiempo.
        en: Determine the number of cycles completed up to this time.
  theta:
    summary_rules:
    - id: theta_summary
      when: 'true'
      status: info
      text:
        es: Posición angular o ángulo barrido respecto al origen.
        en: Angular position or angle swept relative to the origin.
    coherence_rules:
    - id: theta_coherence
      when: 'true'
      status: ok
      text:
        es: theta debe crecer linealmente con el tiempo en MCU.
        en: theta must grow linearly with time in MCU.
    physical_reading_rules:
    - id: theta_physical
      when: 'true'
      status: info
      text:
        es: Describe la orientación espacial de la partícula.
        en: Describes the spatial orientation of the particle.
    model_validity_rules:
    - id: theta_validity
      when: 'true'
      status: ok
      text:
        es: El ángulo debe expresarse en radianes para ser operativo.
        en: The angle must be expressed in radians to be operational.
    graph_rules:
    - id: theta_graph
      when: 'true'
      status: info
      text:
        es: Eje vertical en el diagrama de evolución angular.
        en: Vertical axis in the angular evolution diagram.
    likely_errors:
    - id: theta_warn
      when: 'true'
      status: warning
      text:
        es: Recuerda la equivalencia entre ciclos de 2*pi.
        en: Remember the equivalence between 2*pi cycles.
    next_step_rules:
    - id: theta_next
      when: 'true'
      status: info
      text:
        es: Usa theta para hallar las coordenadas cartesianas (x, y).
        en: Use theta to find Cartesian coordinates (x, y).
  theta_0:
    summary_rules:
    - id: theta_0_summary
      when: 'true'
      status: info
      text:
        es: Orientación angular inicial del sistema.
        en: Initial angular orientation of the system.
    coherence_rules:
    - id: theta_0_coherence
      when: 'true'
      status: ok
      text:
        es: Define el punto de partida en el instante t = 0.
        en: Defines the starting point at time t = 0.
    physical_reading_rules:
    - id: theta_0_physical
      when: 'true'
      status: info
      text:
        es: Indica el desfase inicial respecto al eje de referencia.
        en: Indicates the initial offset relative to the reference axis.
    model_validity_rules:
    - id: theta_0_validity
      when: 'true'
      status: ok
      text:
        es: Parámetro constante que no cambia durante el giro.
        en: Constant parameter that does not change during the rotation.
    graph_rules:
    - id: theta_0_graph
      when: 'true'
      status: info
      text:
        es: Intersección con el eje vertical en la gráfica theta-t.
        en: Intersection with the vertical axis in the theta-t graph.
    likely_errors:
    - id: theta_0_warn
      when: 'true'
      status: warning
      text:
        es: No olvides incluirla al calcular la posición final.
        en: Do not forget to include it when calculating final position.
    next_step_rules:
    - id: theta_0_next
      when: 'true'
      status: info
      text:
        es: Ajusta el origen de coordenadas para simplificar el cálculo.
        en: Adjust the coordinate origin to simplify the calculation.
`;export{e as default};
