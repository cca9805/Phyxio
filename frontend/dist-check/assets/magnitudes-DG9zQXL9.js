const n=`version: 5
magnitudes:
  - id: a
    symbol: a
    nombre:
      es: aceleración material
      en: material acceleration
    unidad_si: m/s^2
    descripcion:
      es: Aceleración de una partícula fluida siguiendo su trayectoria (derivada sustancial).
      en: Acceleration of a fluid particle following its trajectory (substantial derivative).
    tipo: escalar
    dimension: L T^-2
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: Confundir con la aceleración local (temporal) en un punto fijo.
      en: Confusing it with local (temporal) acceleration at a fixed point.
    typical_range: [0, 100]
    sign_behavior: positive_or_zero
    zero_behavior: steady_developed_flow
    value_nature: continuous
    interpretation_role: primary_output
    graph_binding: y-axis
    pedagogical_notes:
      es: Incluye términos locales y convectivos.
      en: Includes local and convective terms.

  - id: gp
    symbol: \\frac{\\partial p}{\\partial x}
    nombre:
      es: gradiente de presión
      en: pressure gradient
    unidad_si: Pa/m
    descripcion:
      es: Variación espacial de la presión en la dirección del movimiento.
      en: Spatial variation of pressure in the flow direction.
    tipo: escalar
    dimension: M L^-2 T^-2
    is_vector: false
    components: []
    category: state
    physical_role: driver
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: Olvidar que un gradiente negativo indica empuje a favor del flujo.
      en: Forgetting that a negative gradient indicates push in the flow direction.
    typical_range: [-10000, 10000]
    sign_behavior: any
    zero_behavior: zero_pressure_gradient
    value_nature: continuous
    interpretation_role: driver
    graph_binding: none
    pedagogical_notes:
      es: El signo negativo en la ecuación indica movimiento hacia menor presión.
      en: The negative sign in the equation indicates motion towards lower pressure.

  - id: mu
    symbol: \\mu
    nombre:
      es: viscosidad dinámica
      en: dynamic viscosity
    unidad_si: Pa*s
    descripcion:
      es: Resistencia interna del fluido al deslizamiento o deformación.
      en: Internal resistance of the fluid to sliding or deformation.
    tipo: escalar
    dimension: M L^-1 T^-1
    is_vector: false
    components: []
    category: state
    physical_role: property
    used_in:
      - ecuacion-de-navier-stokes-intro
      - viscosidad
    common_mistake:
      es: Confundir con la viscosidad cinemática (mu/rho).
      en: Confusing it with kinematic viscosity (mu/rho).
    typical_range: [1e-5, 1e2]
    sign_behavior: strictly_positive
    zero_behavior: inviscid_fluid
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: Caracteriza la fricción interna y la disipación de energía.
      en: Characterizes internal friction and energy dissipation.

  - id: lapu
    symbol: \\nabla^2 u
    nombre:
      es: difusión viscosa
      en: viscous diffusion
    unidad_si: s^-1
    descripcion:
      es: Término que representa la difusión de la cantidad de movimiento por efectos viscosos.
      en: Term representing the diffusion of momentum due to viscous effects.
    tipo: escalar
    dimension: T^-1
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: Ignorar este término en flujos con Reynolds alto pero cerca de paredes.
      en: Ignoring this term in high Reynolds flows but near walls.
    typical_range: [-100, 100]
    sign_behavior: any
    zero_behavior: uniform_velocity_profile
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: Relacionado con la curvatura del perfil de velocidades; nulo en perfiles lineales.
      en: Related to the curvature of the velocity profile; zero in linear profiles.

  - id: rho
    symbol: \\rho
    nombre:
      es: densidad
      en: density
    unidad_si: kg/m^3
    descripcion:
      es: Masa por unidad de volumen del fluido.
      en: Mass per unit volume of the fluid.
    tipo: escalar
    dimension: M L^-3
    is_vector: false
    components: []
    category: state
    physical_role: property
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: Olvidar que la inercia es proporcional a la densidad.
      en: Forgetting that inertia is proportional to density.
    typical_range: [0.1, 20000]
    sign_behavior: strictly_positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: En este modelo se asume constante (fluido incompresible).
      en: In this model, it is assumed constant (incompressible fluid).

  - id: gx
    symbol: g_x
    nombre:
      es: gravedad proyectada
      en: projected gravity
    unidad_si: m/s^2
    descripcion:
      es: Componente de la aceleración gravitatoria en la dirección del flujo.
      en: Component of gravitational acceleration in the direction of flow.
    tipo: escalar
    dimension: L T^-2
    is_vector: false
    components: []
    category: state
    physical_role: driver
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: No considerar el ángulo de inclinación del conducto.
      en: Not considering the inclination angle of the conduit.
    typical_range: [-10, 10]
    sign_behavior: any
    zero_behavior: horizontal_flow
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: Representa el efecto de la inclinación del sistema.
      en: Represents the effect of the system's inclination.

  - id: Re
    symbol: Re
    nombre:
      es: número de Reynolds
      en: Reynolds number
    unidad_si: '1'
    descripcion:
      es: Relación adimensional entre fuerzas de inercia y fuerzas viscosas.
      en: Dimensionless ratio between inertial and viscous forces.
    tipo: escalar
    dimension: '1'
    is_vector: false
    components: []
    category: derived
    physical_role: state_variable
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: Asumir flujo laminar para cualquier valor de Re bajo.
      en: Assuming laminar flow for any low Re value.
    typical_range: [0, 1e7]
    sign_behavior: positive_or_zero
    zero_behavior: creep_flow
    value_nature: continuous
    interpretation_role: constraint
    graph_binding: none
    pedagogical_notes:
      es: Crucial para predecir la transición a la turbulencia.
      en: Crucial for predicting the transition to turbulence.

  - id: v
    symbol: v
    nombre:
      es: velocidad característica
      en: characteristic velocity
    unidad_si: m/s
    descripcion:
      es: Rapidez representativa del flujo.
      en: Representative speed of the flow.
    tipo: escalar
    dimension: L T^-1
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: Usar la velocidad máxima en lugar de la media para el cálculo de Re.
      en: Using maximum velocity instead of average for Re calculation.
    typical_range: [0, 100]
    sign_behavior: positive_or_zero
    zero_behavior: static_fluid
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: Usualmente la velocidad media en la sección del conducto.
      en: Usually the average velocity across the conduit section.

  - id: L
    symbol: L
    nombre:
      es: longitud característica
      en: characteristic length
    unidad_si: m
    descripcion:
      es: Dimensión geométrica relevante del sistema.
      en: Relevant geometric dimension of the system.
    tipo: escalar
    dimension: L
    is_vector: false
    components: []
    category: state
    physical_role: parameter
    used_in:
      - ecuacion-de-navier-stokes-intro
    common_mistake:
      es: Confundir el radio con el diámetro en tuberías.
      en: Confusing radius with diameter in pipes.
    typical_range: [1e-6, 1e3]
    sign_behavior: strictly_positive
    zero_behavior: impossible
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: Define la escala espacial del fenómeno.
      en: Defines the spatial scale of the phenomenon.
`;export{n as default};
