const n=`version: 1
magnitudes:
  - id: P
    symbol: P
    nombre:
      es: Momento lineal total
      en: Total linear momentum
    descripcion:
      es: Suma vectorial de las cantidades de movimiento de todos los componentes del sistema.
      en: Vector sum of the linear momenta of all system components.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components:
      - P_x
      - P_y
    category: derived
    physical_role: variable de estado
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: Ignorar su carácter vectorial al sumar componentes en distintas direcciones.
    typical_range: 0.1 a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del transporte de inercia global del sistema.
        en: Indicates the direction of the system's global inertia transport.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema está en reposo global o sus partes se compensan exactamente.
        en: The system is at global rest or its parts exactly compensate each other.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - estado_movimiento_global
      secondary_for:
        - inercia_dinamica
    graph_binding:
      channels:
        - momentum_vector
    pedagogical_notes: Es la magnitud que se mantiene constante bajo aislamiento.

  - id: Pinitial
    symbol: P_i
    nombre:
      es: Momento lineal total inicial
      en: Initial total linear momentum
    descripcion:
      es: Estado dinámico del sistema completo antes de la interacción.
      en: Dynamic state of the entire system before interaction.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: estado inicial
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: Olvidar incluir algún cuerpo que ya estaba en movimiento antes del choque.
    typical_range: 0 a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Dirección del movimiento total de entrada.
        en: Direction of the total input motion.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema parte del reposo absoluto (caso de explosiones).
        en: El sistema parte del reposo absoluto (caso de explosiones).
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - balance_entrada
    graph_binding:
      channels: []
    pedagogical_notes: Punto de partida para aplicar la ley de conservación.

  - id: Pfinal
    symbol: P_f
    nombre:
      es: Momento lineal total final
      en: Final total linear momentum
    descripcion:
      es: Estado dinámico del sistema completo tras la interacción o colisión.
      en: Dynamic state of the entire system after interaction or collision.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: estado final
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: No considerar el cambio de signo si un cuerpo rebota en sentido opuesto.
    typical_range: 0 a 10⁶ kg·m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Dirección del movimiento total de salida.
        en: Direction of the total output motion.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema queda detenido o el balance neto es nulo.
        en: The system stops or the net balance is zero.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-1e9, 1e9]
    interpretation_role:
      primary_for:
        - balance_salida
    graph_binding:
      channels: []
    pedagogical_notes: Debe igualarse a Pinitial si no hay fuerzas externas.

  - id: m1
    symbol: m_1
    nombre:
      es: Masa del cuerpo 1
      en: Mass of body 1
    descripcion:
      es: Medida de la inercia del primer objeto involucrado.
      en: Measure of the inertia of the first object involved.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: fundamental
    physical_role: parámetro
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: Usar la masa en gramos sin convertirla a kilogramos (unidades SI).
    typical_range: 0.001 a 10⁵ kg.
    sign_behavior:
      has_sign: false
      meaning:
        es: La masa es una magnitud escalar siempre positiva.
        en: Mass is an always positive scalar magnitude.
    zero_behavior:
      allowed: false
      meaning:
        es: No se consideran cuerpos sin masa en este nivel.
        en: Massless bodies are not considered at this level.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [1e-6, 1e9]
    interpretation_role:
      primary_for:
        - inercia_componente
    graph_binding:
      channels: []
    pedagogical_notes: Determina la sensibilidad del cuerpo ante impulsos internos.

  - id: m2
    symbol: m_2
    nombre:
      es: Masa del cuerpo 2
      en: Mass of body 2
    descripcion:
      es: Medida de la inercia del segundo objeto involucrado.
      en: Measure of the inertia of the second object involved.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: fundamental
    physical_role: parámetro
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: Confundir masa con peso al leer el enunciado de un problema.
    typical_range: 0.001 a 10⁵ kg.
    sign_behavior:
      has_sign: false
      meaning:
        es: La masa es intrínsecamente no negativa.
        en: Mass is intrinsically non-negative.
    zero_behavior:
      allowed: false
      meaning:
        es: Se requiere una masa finita para tener momento lineal.
        en: A finite mass is required to have linear momentum.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [1e-6, 1e9]
    interpretation_role:
      primary_for:
        - inercia_componente
    graph_binding:
      channels: []
    pedagogical_notes: Segunda masa necesaria para modelar interacciones de contacto.

  - id: v1i
    symbol: v_{1i}
    nombre:
      es: Velocidad inicial del cuerpo 1
      en: Initial velocity of body 1
    descripcion:
      es: Velocidad de la primera masa antes del choque o explosión.
      en: Velocity of the first mass before collision or explosion.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: No asignar signo negativo si el cuerpo se mueve hacia el origen.
    typical_range: 0 a 10⁴ m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del movimiento inicial respecto al eje.
        en: Indicates initial motion direction relative to the axis.
    zero_behavior:
      allowed: true
      meaning:
        es: El cuerpo 1 está inicialmente en reposo.
        en: Body 1 is initially at rest.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - cinemática_inicial
    graph_binding:
      channels: []
    pedagogical_notes: Define el momento inicial de la primera componente.

  - id: v2i
    symbol: v_{2i}
    nombre:
      es: Velocidad inicial del cuerpo 2
      en: Initial velocity of body 2
    descripcion:
      es: Velocidad de la segunda masa antes del choque o explosión.
      en: Velocity of the second mass before collision or explosion.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: Tratarla como escalar en lugar de componente vectorial.
    typical_range: 0 a 10⁴ m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Sentido de avance del blanco o segundo cuerpo.
        en: Advancement direction of the target or second body.
    zero_behavior:
      allowed: true
      meaning:
        es: El cuerpo 2 está inicialmente en reposo (blanco estacionario).
        en: Body 2 is initially at rest (stationary target).
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - cinemática_inicial
    graph_binding:
      channels: []
    pedagogical_notes: Crucial en problemas de impacto contra un objeto parado.

  - id: v1f
    symbol: v_{1f}
    nombre:
      es: Velocidad final del cuerpo 1
      en: Final velocity of body 1
    descripcion:
      es: Velocidad de la primera masa tras la interacción.
      en: Velocity of the first mass after interaction.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: Errar en el signo algebraico al despejar de la ecuación de balance.
    typical_range: -10⁴ a 10⁴ m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica el sentido del movimiento resultante.
        en: Indicates the resulting motion direction.
    zero_behavior:
      allowed: true
      meaning:
        es: El primer cuerpo se detiene tras completar el intercambio.
        en: The first body stops after completing the exchange.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - cinemática_final
    graph_binding:
      channels: []
    pedagogical_notes: Frecuentemente es la incógnita a resolver en problemas de retroceso.

  - id: v2f
    symbol: v_{2f}
    nombre:
      es: Velocidad final del cuerpo 2
      en: Final velocity of body 2
    descripcion:
      es: Velocidad de la segunda masa tras la interacción.
      en: Velocity of the second mass after interaction.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: Ignorar la conservación si el cuerpo se rompe en más pedazos.
    typical_range: -10⁴ a 10⁴ m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Indica la dirección de salida tras el choque.
        en: Indicates departure direction after collision.
    zero_behavior:
      allowed: true
      meaning:
        es: El segundo cuerpo queda en reposo absoluto.
        en: The second body remains at absolute rest.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - cinemática_final
    graph_binding:
      channels: []
    pedagogical_notes: Se obtiene despejando del balance de P total.

  - id: vf
    symbol: v_f
    nombre:
      es: Velocidad final común
      en: Common final velocity
    descripcion:
      es: Velocidad compartida por ambos cuerpos tras un choque perfectamente inelástico.
      en: Shared velocity of both bodies after a perfectly inelastic collision.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in:
      - aplicaciones-del-principio-de-conservacion
    common_mistake: No sumar las masas m1 y m2 al calcular el momento final del conjunto.
    typical_range: -10⁴ a 10⁴ m/s.
    sign_behavior:
      has_sign: true
      meaning:
        es: Dirección del movimiento del sistema acoplado.
        en: Direction of the coupled system's motion.
    zero_behavior:
      allowed: true
      meaning:
        es: El sistema conjunto queda detenido tras el impacto.
        en: The combined system remains stopped after impact.
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: [-3e8, 3e8]
    interpretation_role:
      primary_for:
        - cinemática_acoplamiento
    graph_binding:
      channels: []
    pedagogical_notes: Es la velocidad del centro de masas del sistema.

  - id: tiempo
    symbol: t
    nombre:
      es: Tiempo de interacción
      en: Interaction time
    descripcion:
      es: Duración del proceso de choque o explosión.
      en: Duration of the collision or explosion process.
    unidad_si: s
    dimension: T
    is_vector: false
    components: null
    category: fundamental
    physical_role: parámetro
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: Creer que el tiempo debe ser largo para que se conserve el momento.
    typical_range: 1e-6 a 1 s.
    sign_behavior: {has_sign: false}
    zero_behavior: {allowed: false}
    value_nature: {kind: scalar, nonnegative_only: true}
    interpretation_role:
      primary_for: [duracion_interaccion]
    graph_binding:
      channels: [time_axis]
    pedagogical_notes: Se asume muy corto para que las fuerzas externas sean despreciables.

  - id: DeltaP
    symbol: \\Delta P
    nombre:
      es: Variación del momento lineal
      en: Linear momentum variation
    descripcion:
      es: Cambio en la cantidad de movimiento de un cuerpo o sistema.
      en: Change in the quantity of motion of a body or system.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: Confundir variación nula con momento nulo.
    typical_range: 0 a 10⁶ kg·m/s.
    sign_behavior: {has_sign: true}
    zero_behavior: {allowed: true}
    value_nature: {kind: vector}
    interpretation_role:
      primary_for: [cambio_estado_dinamico]
    graph_binding:
      channels: [momentum_change_vector]
    pedagogical_notes: Es nula si el sistema está aislado.

  - id: Fext
    symbol: F_{ext}
    nombre:
      es: Fuerza externa neta
      en: Net external force
    descripcion:
      es: Suma de todas las fuerzas que actúan sobre el sistema desde el exterior.
      en: Sum of all forces acting on the system from the outside.
    unidad_si: N
    dimension: M L T⁻²
    is_vector: true
    components: null
    category: derived
    physical_role: parámetro
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: Incluir fuerzas internas en este balance.
    typical_range: 0 a 10⁶ N.
    sign_behavior: {has_sign: true}
    zero_behavior: {allowed: true}
    value_nature: {kind: vector}
    interpretation_role:
      primary_for: [causa_no_conservacion]
    graph_binding:
      channels: [force_vector]
    pedagogical_notes: Su anulación es el requisito para aplicar el principio.

  - id: masa_individual
    symbol: m_i
    nombre:
      es: Masa individual
      en: Individual mass
    descripcion:
      es: Masa de una de las partículas del sistema.
      en: Mass of one of the particles in the system.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: fundamental
    physical_role: parámetro
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: Ignorarla en el balance total.
    typical_range: 0.001 a 10⁵ kg.
    sign_behavior: {has_sign: false}
    zero_behavior: {allowed: false}
    value_nature: {kind: scalar, nonnegative_only: true}
    interpretation_role:
      primary_for: [inercia_componente]
    graph_binding:
      channels: []
    pedagogical_notes: Parámetro que pondera la contribución al momento total.

  - id: masa_total
    symbol: M
    nombre:
      es: Masa total del sistema
      en: Total system mass
    descripcion:
      es: Suma de las masas de todos los componentes.
      en: Sum of the masses of all components.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: derived
    physical_role: parámetro
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: No sumar correctamente las masas tras un acoplamiento.
    typical_range: 0.001 a 2e⁵ kg.
    sign_behavior: {has_sign: false}
    zero_behavior: {allowed: false}
    value_nature: {kind: scalar, nonnegative_only: true}
    interpretation_role:
      primary_for: [inercia_sistema_acoplado]
    graph_binding:
      channels: []
    pedagogical_notes: Suma de m1 y m2 en choques perfectamente inelásticos.

  - id: momento_lineal_individual
    symbol: p_i
    nombre:
      es: Momento lineal individual
      en: Individual linear momentum
    descripcion:
      es: Cantidad de movimiento de una sola partícula.
      en: Linear momentum of a single particle.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: Tratarlo como escalar.
    typical_range: 0 a 10⁶ kg·m/s.
    sign_behavior: {has_sign: true}
    zero_behavior: {allowed: true}
    value_nature: {kind: vector}
    interpretation_role:
      primary_for: [contribucion_dinamica_parcial]
    graph_binding:
      channels: [particle_momentum]
    pedagogical_notes: Parte del presupuesto dinámico total.

  - id: momento_lineal_total
    symbol: P_total
    nombre:
      es: Momento lineal total
      en: Total linear momentum
    descripcion:
      es: Suma de los momentos de todas las partes.
      en: Sum of the momenta of all parts.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: Olvidar el carácter vectorial.
    typical_range: 0.1 a 10⁶ kg·m/s.
    sign_behavior: {has_sign: true}
    zero_behavior: {allowed: true}
    value_nature: {kind: vector}
    interpretation_role:
      primary_for: [estado_movimiento_global]
    graph_binding:
      channels: [total_momentum_vector]
    pedagogical_notes: Magnitud que se mantiene invariante bajo aislamiento.

  - id: velocidad_individual
    symbol: v_i
    nombre:
      es: Velocidad individual
      en: Individual velocity
    descripcion:
      es: Velocidad de una partícula específica.
      en: Velocity of a specific particle.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: null
    category: derived
    physical_role: variable de estado
    used_in: [aplicaciones-del-principio-de-conservacion]
    common_mistake: No asignar ejes.
    typical_range: 0 a 10⁴ m/s.
    sign_behavior: {has_sign: true}
    zero_behavior: {allowed: true}
    value_nature: {kind: vector}
    interpretation_role:
      primary_for: [estado_cinematico_parcial]
    graph_binding:
      channels: [velocity_vector]
    pedagogical_notes: Relacionada con el momento mediante la masa.
`;export{n as default};
