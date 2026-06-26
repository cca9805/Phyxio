const n=`version: 1
magnitudes:
  - id: p
    symbol: p
    nombre:
      es: Momento lineal
      en: Linear momentum
    descripcion:
      es: Magnitud vectorial que mide la cantidad de movimiento de un cuerpo.
      en: Vector quantity measuring a body's amount of motion.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components:
      - px
      - py
    category: fundamental
    physical_role: variable de estado
    used_in:
      - momentum_definition
      - momentum_magnitude
      - momentum_change
      - average_force_definition
      - kinetic_energy_momentum
    common_mistake: Confundirlo con la fuerza o ignorar su carácter vectorial en choques.
    typical_range: 0.1 a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del movimiento respecto al eje.
        en: Indicates motion direction relative to the axis.
    zero_behavior:
      allowed: true
      meaning:
        es: El cuerpo está en reposo absoluto.
        en: The body is at absolute rest.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - estado_movimiento
      secondary_for:
        - inercia_dinamica
    graph_binding:
      channels:
        - momentum_vector
    pedagogical_notes: Es la magnitud central para las leyes de conservación.

  - id: m
    symbol: m
    nombre:
      es: Masa inercial
      en: Inertial mass
    descripcion:
      es: Medida de la resistencia al cambio de movimiento traslacional.
      en: Measure of resistance to translational motion change.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: fundamental
    physical_role: parámetro
    used_in:
      - momentum_definition
      - momentum_x
      - momentum_y
      - kinetic_energy_momentum
    common_mistake: Confundirla con el peso o creer que varía con la velocidad en este nivel.
    typical_range: 0.001 a 10⁵ kg.
    sign_behavior:
      has_sign: false
      meaning:
        es: La masa es intrínsecamente positiva.
        en: Mass is intrinsically positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Un objeto sin masa no se trata en mecánica clásica.
        en: A massless object is not treated in classical mechanics.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [1e-6, 1e9]
    interpretation_role:
      primary_for:
        - inercia
    graph_binding:
      channels: []
    pedagogical_notes: Actúa como factor de escala entre v y p.

  - id: v
    symbol: v
    nombre:
      es: Velocidad
      en: Velocity
    descripcion:
      es: Rapidez con la que un cuerpo cambia su posición.
      en: Rate at which a body changes its position.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components:
      - vx
      - vy
    category: fundamental
    physical_role: variable de estado
    used_in:
      - momentum_definition
    common_mistake: Tratarla como escalar (rapidez) en problemas bidimensionales.
    typical_range: 0 a 10⁴ m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del desplazamiento.
        en: Indicates displacement direction.
    zero_behavior:
      allowed: true
      meaning:
        es: El cuerpo está en reposo cinemático.
        en: The body is at kinematic rest.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - estado_movimiento
    graph_binding:
      channels:
        - velocity_vector
    pedagogical_notes: Determina la dirección del vector momento lineal.

  - id: px
    symbol: p_x
    nombre:
      es: Componente X del momento
      en: X-component of momentum
    descripcion:
      es: Proyección del momento lineal en el eje horizontal.
      en: Projection of linear momentum onto the horizontal axis.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: false
    components: null
    category: derived
    physical_role: proyección de estado
    used_in:
      - momentum_x
      - momentum_magnitude
    common_mistake: Olvidar que puede ser negativa según el sentido.
    typical_range: -10⁶ a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo hacia la derecha, negativo hacia la izquierda.
        en: Positive to the right, negative to the left.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay movimiento proyectado en X.
        en: No projected motion along X.
    value_nature:
      kind: scalar_projection
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - proyeccion_eje
    graph_binding:
      channels: []
    pedagogical_notes: Permite el análisis desacoplado del movimiento.

  - id: py
    symbol: p_y
    nombre:
      es: Componente Y del momento
      en: Y-component of momentum
    descripcion:
      es: Proyección del momento lineal en el eje vertical.
      en: Projection of linear momentum onto the vertical axis.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: false
    components: null
    category: derived
    physical_role: proyección de estado
    used_in:
      - momentum_y
      - momentum_magnitude
    common_mistake: No considerar el signo en caídas libres o rebotes.
    typical_range: -10⁶ a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo hacia arriba, negativo hacia abajo.
        en: Positive upwards, negative downwards.
    zero_behavior:
      allowed: true
      meaning:
        es: El movimiento es puramente horizontal.
        en: Motion is purely horizontal.
    value_nature:
      kind: scalar_projection
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - proyeccion_eje
    graph_binding:
      channels: []
    pedagogical_notes: Crucial en lanzamientos oblicuos y rebotes.

  - id: DeltaP
    symbol: \\Delta P
    nombre:
      es: Variación de momento
      en: Momentum change
    descripcion:
      es: Diferencia vectorial entre estado final e inicial.
      en: Vectorial difference between final and initial state.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: fundamental
    physical_role: cambio de estado
    used_in:
      - momentum_change
      - average_force_definition
    common_mistake: Restar módulos directamente en lugar de usar vectores.
    typical_range: 0.1 a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica la dirección del impulso neto recibido.
        en: Indicates the direction of the net impulse received.
    zero_behavior:
      allowed: true
      meaning:
        es: El momento lineal se conserva.
        en: Linear momentum is conserved.
    value_nature:
      kind: change
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - impulso_recibido
    graph_binding:
      channels: []
    pedagogical_notes: Equivalente al impulso neto según el teorema fundamental.

  - id: Fnet
    symbol: F_{net}
    nombre:
      es: Fuerza neta media
      en: Average net force
    descripcion:
      es: Fuerza constante que produce un cambio de momento determinado.
      en: Constant force producing a specific momentum change.
    unidad_si: N
    dimension: M L T⁻²
    is_vector: true
    components: null
    category: fundamental
    physical_role: causa dinámica
    used_in:
      - average_force_definition
    common_mistake: Creer que la fuerza media es igual a la fuerza máxima del impacto.
    typical_range: 0 a 10⁶ N.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido de la acción externa.
        en: Indicates the direction of the external action.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema está en equilibrio dinámico.
        en: The system is in dynamic equilibrium.
    value_nature:
      kind: force
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - causa_dinamica
    graph_binding:
      channels:
        - force_vector
    pedagogical_notes: Se relaciona inversamente con el tiempo de contacto.

  - id: DeltaT
    symbol: \\Delta t
    nombre:
      es: Intervalo de tiempo
      en: Time interval
    descripcion:
      es: Duración de la interacción o del contacto.
      en: Duration of the interaction or contact.
    unidad_si: s
    dimension: T
    is_vector: false
    components: null
    category: parameter
    physical_role: duración
    used_in:
      - average_force_definition
    common_mistake: Confundirlo con el instante de tiempo absoluto.
    typical_range: 1e⁻⁴ a 10 s.
    sign_behavior:
      has_sign: false
      meaning:
        es: El intervalo de tiempo es siempre positivo.
        en: Time interval is always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: El contacto debe tener una duración finita.
        en: Contact must have a finite duration.
    value_nature:
      kind: interval
      nonnegative_only: true
      expected_interval: [1e-9, 1e6]
    interpretation_role:
      primary_for:
        - impacto
    graph_binding:
      channels: []
    pedagogical_notes: Modula la intensidad de la fuerza para un impulso dado.

  - id: K
    symbol: K
    nombre:
      es: Energía cinética
      en: Kinetic energy
    descripcion:
      es: Energía asociada al movimiento traslacional del cuerpo.
      en: Energy associated with the body's translational motion.
    unidad_si: J
    dimension: M L² T⁻²
    is_vector: false
    components: null
    category: conceptual
    physical_role: variable de estado energética
    used_in:
      - kinetic_energy_momentum
    common_mistake: "Creer que p y K son lo mismo; K es escalar y escala con v²."
    typical_range: 0 a 10⁹ J.
    sign_behavior:
      has_sign: false
      meaning:
        es: La energía cinética es siempre positiva o nula.
        en: Kinetic energy is always positive or zero.
    zero_behavior:
      allowed: true
      meaning:
        es: El cuerpo está en reposo.
        en: The body is at rest.
    value_nature:
      kind: energy
      nonnegative_only: true
      expected_interval: [0, 1e15]
    interpretation_role:
      primary_for:
        - balance_energetico
    graph_binding:
      channels:
        - energy_bar
    pedagogical_notes: Útil para identificar colisiones elásticas e inelásticas.

  - id: vx
    symbol: v_x
    nombre:
      es: Velocidad en X
      en: X-velocity
    descripcion:
      es: Proyección horizontal de la velocidad.
      en: Horizontal projection of velocity.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: false
    components: null
    category: derived
    physical_role: estado cinemático
    used_in:
      - momentum_x
    common_mistake: Confundirla con la rapidez total.
    typical_range: -3e8 a 3e8 m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Sentido del movimiento en X.
        en: Direction of motion in X.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay avance horizontal.
        en: No horizontal progress.
    value_nature:
      kind: scalar_projection
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - cinemática
    graph_binding:
      channels: []
    pedagogical_notes: Define el signo de px.

  - id: vy
    symbol: v_y
    nombre:
      es: Velocidad en Y
      en: Y-velocity
    descripcion:
      es: Proyección vertical de la velocidad.
      en: Vertical projection of velocity.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: false
    components: null
    category: derived
    physical_role: estado cinemático
    used_in:
      - momentum_y
    common_mistake: Olvidar el signo en caídas.
    typical_range: -3e8 a 3e8 m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Sentido del movimiento en Y.
        en: Direction of motion in Y.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay avance vertical.
        en: No vertical progress.
    value_nature:
      kind: scalar_projection
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - cinemática
    graph_binding:
      channels: []
    pedagogical_notes: Define el signo de py.

  - id: Pinicial
    symbol: p_{\\text{inicial}}
    nombre:
      es: Momento inicial
      en: Initial momentum
    descripcion:
      es: Cantidad de movimiento antes de la interacción.
      en: Momentum before interaction.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: state
    physical_role: estado inicial
    used_in:
      - momentum_change
    common_mistake: No definir correctamente el sentido del vector inicial.
    typical_range: 0 a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Dirección inicial.
        en: Initial direction.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema parte del reposo.
        en: The system starts from rest.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - estado_inicial
    graph_binding:
      channels: []
    pedagogical_notes: Clave para el balance vectorial inicial.

  - id: Pfinal
    symbol: p_{\\text{final}}
    nombre:
      es: Momento final
      en: Final momentum
    descripcion:
      es: Cantidad de movimiento después de la interacción.
      en: Momentum after interaction.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: state
    physical_role: estado final
    used_in:
      - momentum_change
    common_mistake: Asumir que es cero tras un choque inelástico.
    typical_range: 0 a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Dirección final.
        en: Final direction.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema queda detenido.
        en: The system stops.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - estado_final
    graph_binding:
      channels: []
    pedagogical_notes: Clave para el balance vectorial final.

  - id: F
    symbol: F
    nombre:
      es: Fuerza
      en: Force
    descripcion:
      es: Magnitud vectorial que representa la interacción capaz de cambiar el momento.
      en: Vector magnitude representing the interaction capable of changing momentum.
    unidad_si: N
    dimension: M L T⁻²
    is_vector: true
    components: null
    category: fundamental
    physical_role: causa dinámica
    used_in:
      - instantaneous_force
    common_mistake: Ignorar su dirección o confundirla con el impulso.
    typical_range: 0 a 10⁶ N.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido de la acción externa.
        en: Indicates the direction of the external action.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay fuerza neta actuando.
        en: No net force acting.
    value_nature:
      kind: force
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - causa_dinamica
    graph_binding:
      channels:
        - force_vector
    pedagogical_notes: Fundamental para la Segunda Ley de Newton.
`;export{n as default};
