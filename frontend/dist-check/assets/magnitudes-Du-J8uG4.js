const n=`magnitudes:
  - id: R
    symbol: 'R'
    nombre:
      es: radio de giro
      en: rotation radius
    descripcion:
      es: Distancia constante desde el eje de rotación hasta la posición de la partícula.
      en: Constant distance from the rotation axis to the particle's position.
    unidad_si: 'm'
    dimension: 'L'
    is_vector: false
    components: null
    category: basic
    physical_role: geometric_parameter
    used_in:
      - mcu
    common_mistake: Confundir el radio con el diámetro de la trayectoria.
    typical_range: 0.01 - 1000
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positivo por definición geométrica.
        en: Always positive by geometric definition.
    zero_behavior:
      allowed: false
      meaning:
        es: Un radio cero no permite definir una trayectoria circular.
        en: A zero radius does not allow for a circular path definition.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El radio define la escala del movimiento; a mayor radio, mayor es la velocidad lineal para una misma velocidad angular.
  - id: theta
    symbol: '\\theta'
    nombre:
      es: posición angular
      en: angular position
    descripcion:
      es: Ángulo que forma el vector posición con el eje de referencia en un instante dado.
      en: Angle formed by the position vector with the reference axis at a given instant.
    unidad_si: 'rad'
    dimension: '1'
    is_vector: false
    components: null
    category: basic
    physical_role: state_variable
    used_in:
      - mcu
    common_mistake: Usar grados sexagesimales en lugar de radianes para los cálculos.
    typical_range: 0 - 6.28
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica el sentido de la rotación desde el origen.
        en: The sign indicates the direction of rotation from the origin.
    zero_behavior:
      allowed: true
      meaning:
        es: Coincidencia con el eje de referencia elegido.
        en: Coincidence with the chosen reference axis.
    value_nature:
      kind: scalar
      nonnegative_only: false
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La posición angular es cíclica; cada 2*pi radianes el objeto vuelve al mismo punto físico.
  - id: theta_0
    symbol: '\\theta_0'
    nombre:
      es: posición angular inicial
      en: initial angular position
    descripcion:
      es: Ubicación angular del objeto en el instante t = 0.
      en: Angular location of the object at time t = 0.
    unidad_si: 'rad'
    dimension: '1'
    is_vector: false
    components: null
    category: basic
    physical_role: initial_condition
    used_in:
      - mcu
    common_mistake: Olvidar sumarla en la ecuación horaria de posición.
    typical_range: 0 - 6.28
    sign_behavior:
      has_sign: true
      meaning:
        es: Define el punto de partida respecto al origen.
        en: Defines the starting point relative to the origin.
    zero_behavior:
      allowed: true
      meaning:
        es: El movimiento comienza exactamente en el eje de referencia.
        en: The motion starts exactly at the reference axis.
    value_nature:
      kind: scalar
      nonnegative_only: false
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Es la constante que define el desfase inicial del sistema.
  - id: dtheta
    symbol: '\\Delta \\theta'
    nombre:
      es: desplazamiento angular
      en: angular displacement
    descripcion:
      es: Cambio en la posición angular del objeto durante un intervalo de tiempo.
      en: Change in the object's angular position during a time interval.
    unidad_si: 'rad'
    dimension: '1'
    is_vector: false
    components: null
    category: derived
    physical_role: state_variable
    used_in:
      - mcu
    common_mistake: No distinguir entre posición absoluta y el ángulo recorrido.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo para sentido antihorario, negativo para sentido horario.
        en: Positive for counter-clockwise direction, negative for clockwise direction.
    zero_behavior:
      allowed: true
      meaning:
        es: No ha habido rotación neta.
        en: No net rotation has occurred.
    value_nature:
      kind: scalar
      nonnegative_only: false
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El desplazamiento angular acumulado puede ser mayor a 2*pi si se dan varias vueltas.
  - id: omega
    symbol: '\\omega'
    nombre:
      es: velocidad angular
      en: angular velocity
    descripcion:
      es: Rapidez con la que el objeto barre ángulos respecto al tiempo.
      en: Rate at which the object sweeps angles relative to time.
    unidad_si: 'rad/s'
    dimension: 'T^-1'
    is_vector: false
    components: null
    category: basic
    physical_role: state_variable
    used_in:
      - mcu
    common_mistake: Confundirla con la velocidad lineal v.
    typical_range: 0.1 - 100
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido de giro (antihorario/horario).
        en: Indicates the rotation direction (counter-clockwise/clockwise).
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema está en reposo rotatorio.
        en: The system is at rotational rest.
    value_nature:
      kind: scalar
      nonnegative_only: false
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: En el MCU, esta magnitud es la constante fundamental del movimiento.
  - id: T
    symbol: 'T'
    nombre:
      es: período
      en: period
    descripcion:
      es: Tiempo necesario para que el objeto complete una revolución exacta.
      en: Time required for the object to complete one exact revolution.
    unidad_si: 's'
    dimension: 'T'
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: Confundirlo con la frecuencia o con el tiempo total t.
    typical_range: 0.001 - 10^6
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positivo al ser una duración de ciclo.
        en: Always positive as it is a cycle duration.
    zero_behavior:
      allowed: false
      meaning:
        es: Un período nulo implicaría una velocidad angular infinita.
        en: A zero period would imply infinite angular velocity.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El período es la huella temporal de la repetición del sistema.
  - id: f
    symbol: 'f'
    nombre:
      es: frecuencia
      en: frequency
    descripcion:
      es: Número de revoluciones completadas por unidad de tiempo.
      en: Number of revolutions completed per unit of time.
    unidad_si: 'Hz'
    dimension: 'T^-1'
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: No usar Hz (s^-1) al operar con otras magnitudes SI.
    typical_range: 0.001 - 1000
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva por ser una tasa de conteo.
        en: Always positive as it is a count rate.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay ciclos por unidad de tiempo (estático).
        en: No cycles per unit of time (static).
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La frecuencia es el inverso del período y se vincula directamente con la velocidad angular.
  - id: v
    symbol: 'v'
    nombre:
      es: rapidez tangencial
      en: tangential speed
    descripcion:
      es: Módulo de la velocidad lineal de la partícula en cada punto de la trayectoria.
      en: Magnitude of the particle's linear velocity at each point of the path.
    unidad_si: 'm/s'
    dimension: 'LT^-1'
    is_vector: false
    components: null
    category: derived
    physical_role: state_variable
    used_in:
      - mcu
    common_mistake: Olvidar que su dirección cambia aunque su módulo sea constante.
    typical_range: 0.1 - 1000
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva (es un módulo).
        en: Always positive (it is a magnitude).
    zero_behavior:
      allowed: true
      meaning:
        es: Repeso absoluto o centro de giro.
        en: Absolute rest or rotation center.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Es la velocidad que tendría el objeto si saliera disparado por la tangente.
  - id: ac
    symbol: 'a_c'
    nombre:
      es: aceleración centrípeta
      en: centripetal acceleration
    descripcion:
      es: Aceleración dirigida hacia el centro que cambia la dirección de la velocidad.
      en: Acceleration directed toward the center that changes the velocity direction.
    unidad_si: 'm/s^2'
    dimension: 'LT^-2'
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: Creer que es cero porque la rapidez es constante.
    typical_range: 0.1 - 1000
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva y radial hacia el centro.
        en: Always positive and radial toward the center.
    zero_behavior:
      allowed: true
      meaning:
        es: Indica movimiento rectilíneo o reposo.
        en: Indicates rectilinear motion or rest.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Es la magnitud responsable de la curvatura de la trayectoria.
  - id: t
    symbol: 't'
    nombre:
      es: tiempo
      en: time
    descripcion:
      es: Instante temporal en el que se evalúa el movimiento.
      en: Time instant at which the motion is evaluated.
    unidad_si: 's'
    dimension: 'T'
    is_vector: false
    components: null
    category: basic
    physical_role: independent_variable
    used_in:
      - mcu
    common_mistake: Confundir instantes t con intervalos dt.
    typical_range: 0 - 3600
    sign_behavior:
      has_sign: false
      meaning:
        es: Usualmente positivo (cronometrado desde el origen).
        en: Usually positive (timed from the origin).
    zero_behavior:
      allowed: true
      meaning:
        es: Inicio del cronometraje.
        en: Start of timing.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Actúa como la variable independiente que hace evolucionar al sistema.
  - id: dt
    symbol: '\\Delta t'
    nombre:
      es: intervalo de tiempo
      en: time interval
    descripcion:
      es: Duración transcurrida entre dos estados del movimiento.
      en: Elapsed duration between two motion states.
    unidad_si: 's'
    dimension: 'T'
    is_vector: false
    components: null
    category: basic
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: Restar incorrectamente instantes iniciales y finales.
    typical_range: 0.001 - 3600
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positivo (la flecha del tiempo es única).
        en: Always positive (the arrow of time is unique).
    zero_behavior:
      allowed: true
      meaning:
        es: Comparación instantánea.
        en: Instantaneous comparison.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: Define la ventana temporal de observación para el cálculo de desplazamientos.
  - id: s
    symbol: 's'
    nombre:
      es: longitud de arco
      en: arc length
    descripcion:
      es: Distancia lineal recorrida sobre la trayectoria curva.
      en: Linear distance traveled over the curved path.
    unidad_si: 'm'
    dimension: 'L'
    is_vector: false
    components: null
    category: derived
    physical_role: state_variable
    used_in:
      - mcu
    common_mistake: Confundirla con el desplazamiento angular dtheta.
    typical_range: 0.1 - 1000
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva por ser una longitud física.
        en: Always positive as it is a physical length.
    zero_behavior:
      allowed: true
      meaning:
        es: El objeto no se ha movido de su posición inicial.
        en: The object has not moved from its initial position.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La longitud de arco vincula el desplazamiento angular con metros reales.
  - id: N
    symbol: 'N'
    nombre:
      es: número de vueltas
      en: number of revolutions
    descripcion:
      es: Cantidad de ciclos completos recorridos por el objeto.
      en: Number of complete cycles traveled by the object.
    unidad_si: '1'
    dimension: '1'
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: Olvidar que una vuelta equivale a 2*pi radianes.
    typical_range: Context-dependent.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positivo por ser un conteo de ciclos.
        en: Always positive as it is a cycle count.
    zero_behavior:
      allowed: true
      meaning:
        es: No se ha completado ninguna fracción de vuelta.
        en: No fraction of a revolution has been completed.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: El número de vueltas es una forma intuitiva de expresar el desplazamiento angular acumulado.
  - id: F
    symbol: 'F'
    nombre:
      es: fuerza neta
      en: net force
    descripcion:
      es: Suma vectorial de todas las fuerzas que actúan sobre un cuerpo.
      en: Vector sum of all forces acting on a body.
    unidad_si: 'N'
    dimension: 'MLT^-2'
    is_vector: true
    components: null
    category: basic
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: Olvidar que es una magnitud vectorial.
    typical_range: 0 - 10000
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica el sentido de la fuerza respecto al eje.
        en: The sign indicates the direction of the force relative to the axis.
    zero_behavior:
      allowed: true
      meaning:
        es: Equilibrio de fuerzas.
        en: Force equilibrium.
    value_nature:
      kind: vector
      nonnegative_only: false
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: En el MCU, la fuerza neta es la fuerza centrípeta.
  - id: m
    symbol: 'm'
    nombre:
      es: masa
      en: mass
    descripcion:
      es: Medida de la inercia o cantidad de materia de un cuerpo.
      en: Measure of inertia or quantity of matter of a body.
    unidad_si: 'kg'
    dimension: 'M'
    is_vector: false
    components: null
    category: basic
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: Confundir masa con peso.
    typical_range: 0.1 - 1000
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Un objeto sin masa no tiene entidad física clásica.
        en: A massless object has no classical physical entity.
    value_nature:
      kind: scalar
      nonnegative_only: true
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: La masa opone resistencia a los cambios en el estado de movimiento.
  - id: a
    symbol: 'a'
    nombre:
      es: aceleración
      en: acceleration
    descripcion:
      es: Tasa de cambio del vector velocidad respecto al tiempo.
      en: Rate of change of the velocity vector with respect to time.
    unidad_si: 'm/s^2'
    dimension: 'LT^-2'
    is_vector: true
    components: null
    category: basic
    physical_role: physical_quantity
    used_in:
      - mcu
    common_mistake: Creer que si la rapidez es constante, la aceleración es nula.
    typical_range: 0 - 1000
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del cambio de velocidad.
        en: Indicates the direction of the velocity change.
    zero_behavior:
      allowed: true
      meaning:
        es: Velocidad constante en módulo y dirección.
        en: Constant velocity in magnitude and direction.
    value_nature:
      kind: vector
      nonnegative_only: false
    interpretation_role:
      primary_for:
        - mcu
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: En el MCU, la aceleración neta coincide con la aceleración centrípeta.

`;export{n as default};
