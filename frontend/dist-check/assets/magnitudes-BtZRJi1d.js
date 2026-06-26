const e=`version: 1
magnitudes:
- id: vcm
  symbol: "v_{cm}"
  nombre:
    es: Velocidad del centro de masas
    en: Center-of-mass velocity
  descripcion:
    es: Velocidad del punto que representa el promedio ponderado de la masa del sistema.
    en: Velocity of the point representing the weighted average of the system's mass.
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: true
  components: [vx, vy, vz]
  category: derived
  physical_role: reference_velocity
  used_in: [theory, examples, interpretation]
  common_mistake:
    es: Confundirla con el promedio aritmético de velocidades sin considerar las masas.
    en: Confusing it with the arithmetic average of velocities without considering masses.
  typical_range: "0 - 10^4 m/s"
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica el sentido del desplazamiento global del conjunto respecto al eje elegido.
      en: The sign indicates the direction of the set's global displacement relative to the chosen axis.
  zero_behavior:
    allowed: true
    meaning:
      es: Si es nula, el laboratorio coincide con el marco del centro de masas.
      en: If zero, the laboratory coincides with the center-of-mass frame.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: [collective_motion, frame_velocity]
    secondary_for: [transformation]
  graph_binding:
    channels: [velocity_vector]
  pedagogical_notes:
    es: Es la velocidad que define el marco de reposo del baricentro.
    en: It is the velocity that defines the barycenter's rest frame.

- id: u_i
  symbol: "u_i"
  nombre:
    es: Velocidad interna (marco CM)
    en: Internal velocity (CM frame)
  descripcion:
    es: Velocidad de una partícula medida desde un marco que se mueve con el centro de masas.
    en: Velocity of a particle measured from a frame moving with the center of mass.
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: true
  components: [ux, uy, uz]
  category: derived
  physical_role: relative_velocity
  used_in: [theory, examples, interpretation]
  common_mistake:
    es: Olvidar restar la velocidad del centro de masas a la de laboratorio.
    en: Forgetting to subtract the center-of-mass velocity from the laboratory velocity.
  typical_range: "0 - 10^3 m/s"
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica alejamiento o acercamiento respecto al baricentro del sistema.
      en: Indicates recession or approach relative to the system's barycenter.
  zero_behavior:
    allowed: true
    meaning:
      es: Si es nula, la partícula está en reposo relativo al centro de masas.
      en: If zero, the particle is at relative rest to the center of mass.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: [internal_dynamics, agitation]
    secondary_for: [collision_analysis]
  graph_binding:
    channels: [relative_vector]
  pedagogical_notes:
    es: Permite estudiar la interacción pura sin el ruido de la traslación global.
    en: Allows studying the pure interaction without the noise of global translation.

- id: mu
  symbol: "\\\\mu"
  nombre:
    es: Masa reducida
    en: Reduced mass
  descripcion:
    es: Inercia efectiva que simplifica el movimiento de dos cuerpos a uno solo en el marco CM.
    en: Effective inertia simplifying two-body motion to a single one in the CM frame.
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: null
  category: derived
  physical_role: effective_inertia
  used_in: [theory, examples]
  common_mistake:
    es: Creer que es la suma de masas en lugar del producto dividido por la suma.
    en: Believing it is the sum of masses instead of the product divided by the sum.
  typical_range: "0 - 10^6 kg"
  sign_behavior:
    has_sign: false
    meaning:
      es: La masa es una magnitud escalar siempre positiva.
      en: Mass is a scalar magnitude that is always positive.
  zero_behavior:
    allowed: false
    meaning:
      es: Una masa reducida nula implicaría la inexistencia física del sistema de dos cuerpos.
      en: A zero reduced mass would imply the physical non-existence of the two-body system.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "(0, inf)"
  interpretation_role:
    primary_for: [equivalent_mass, two_body_simplification]
    secondary_for: [internal_energy]
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Siempre es menor o igual a la menor de las masas individuales involucradas.
    en: It is always less than or equal to the smallest of the individual masses involved.

- id: v_i
  symbol: "v_i"
  nombre:
    es: Velocidad de la partícula i
    en: Velocity of particle i
  descripcion:
    es: Velocidad de una de las partículas del sistema medida desde el laboratorio.
    en: Velocity of one of the particles in the system as measured from the laboratory.
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: true
  components: [vix, viy, viz]
  category: state
  physical_role: state_variable
  used_in: [theory, examples, interpretation]
  common_mistake:
    es: Confundirla con la velocidad relativa o interna medida desde el CM.
    en: Confusing it with relative or internal velocity measured from the CM.
  typical_range: "0 - 10^5 m/s"
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica el sentido del movimiento respecto al origen fijo del laboratorio.
      en: The sign indicates the direction of motion relative to the laboratory's fixed origin.
  zero_behavior:
    allowed: true
    meaning:
      es: Si es nula, la partícula i se encuentra en reposo absoluto en el laboratorio.
      en: If zero, particle i is at absolute rest in the laboratory.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: [input_state, individual_kinematics]
    secondary_for: [vcm_calculation]
  graph_binding:
    channels: [velocity_vector]
  pedagogical_notes:
    es: Es la magnitud fundamental que define el estado cinemático de cada parte del sistema.
    en: It is the fundamental magnitude defining the kinematic state of each part of the system.

- id: p_cm_total
  symbol: "p_{cm}"
  nombre:
    es: Momento lineal total en el marco CM
    en: Total linear momentum in the CM frame
  descripcion:
    es: Suma de los momentos de todas las partículas medida desde el baricentro.
    en: Sum of the momenta of all particles measured from the barycenter.
  unidad_si: "kg m/s"
  dimension: "M L T^-1"
  is_vector: true
  components: [px, py, pz]
  category: state
  physical_role: balance_condition
  used_in: [theory, interpretation]
  common_mistake:
    es: Creer que puede ser distinto de cero en el marco del centro de masas.
    en: Believing it can be non-zero in the center-of-mass frame.
  typical_range: "0"
  sign_behavior:
    has_sign: false
    meaning:
      es: Al ser siempre nulo, no posee un signo con significado físico direccional.
      en: Being always zero, it has no sign with directional physical meaning.
  zero_behavior:
    allowed: true
    meaning:
      es: Es nulo por definición matemática en el marco de momento cero.
      en: It is zero by mathematical definition in the zero-momentum frame.
  value_nature:
    kind: constant
    nonnegative_only: true
    expected_interval: "[0, 0]"
  interpretation_role:
    primary_for: [balance_indicator, frame_verification]
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Esta anulación es la propiedad que más simplifica el análisis de colisiones.
    en: This cancellation is the property that most simplifies collision analysis.

- id: K_cm
  symbol: "K_{cm}"
  nombre:
    es: Energía cinética interna
    en: Internal kinetic energy
  descripcion:
    es: Energía cinética del sistema medida desde el marco del centro de masas.
    en: Kinetic energy of the system measured from the center-of-mass frame.
  unidad_si: "J"
  dimension: "M L^2 T^-2"
  is_vector: false
  components: null
  category: derived
  physical_role: internal_energy
  used_in: [theory, examples, interpretation]
  common_mistake:
    es: Confundirla con la energía cinética total medida desde el laboratorio.
    en: Confusing it with the total kinetic energy measured from the laboratory.
  typical_range: "0 - 10^9 J"
  sign_behavior:
    has_sign: false
    meaning:
      es: La energía cinética es un escalar no negativo.
      en: Kinetic energy is a non-negative scalar.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero si no existe movimiento relativo entre las partículas del sistema.
      en: Zero if there is no relative motion between the particles of the system.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, inf)"
  interpretation_role:
    primary_for: [agitation_energy, interaction_potential]
    secondary_for: [konig_partition]
  graph_binding:
    channels: [energy_indicator]
  pedagogical_notes:
    es: Representa la energía disponible para procesos internos como deformaciones o calor.
    en: Represents the energy available for internal processes such as deformation or heat.

- id: v1
  symbol: "v_1"
  nombre:
    es: Velocidad de la partícula 1
    en: Velocity of particle 1
  descripcion:
    es: Velocidad de la primera partícula medida desde el laboratorio.
    en: Velocity of the first particle measured from the laboratory.
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: true
  components: [v1x, v1y, v1z]
  category: state
  physical_role: state_variable
  used_in: [theory, examples]
  common_mistake:
    es: No tratarla como un vector en problemas de más de una dimensión.
    en: Not treating it as a vector in multi-dimensional problems.
  typical_range: "0 - 10^3 m/s"
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica el sentido del movimiento de la partícula 1 en el laboratorio.
      en: Indicates the direction of particle 1's motion in the laboratory.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica que la primera partícula está quieta respecto al suelo.
      en: Indicates that the first particle is still relative to the ground.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: [input_state, individual_motion]
    secondary_for: [system_momentum]
  graph_binding:
    channels: [velocity_vector_1]
  pedagogical_notes:
    es: Magnitud fundamental para el cálculo del centro de masas del sistema.
    en: Fundamental magnitude for calculating the system's center of mass.

- id: v2
  symbol: "v_2"
  nombre:
    es: Velocidad de la partícula 2
    en: Velocity of particle 2
  descripcion:
    es: Velocidad de la segunda partícula medida desde el laboratorio.
    en: Velocity of the second particle measured from the laboratory.
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: true
  components: [v2x, v2y, v2z]
  category: state
  physical_role: state_variable
  used_in: [theory, examples]
  common_mistake:
    es: Olvidar que su dirección afecta a la posición y velocidad del CM.
    en: Forgetting that its direction affects the CM position and velocity.
  typical_range: "0 - 10^3 m/s"
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica el sentido del movimiento de la partícula 2 en el laboratorio.
      en: Indicates the direction of particle 2's motion in the laboratory.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica que la segunda partícula está quieta respecto al suelo.
      en: Indicates that the second particle is still relative to the ground.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: [input_state, individual_motion]
    secondary_for: [system_momentum]
  graph_binding:
    channels: [velocity_vector_2]
  pedagogical_notes:
    es: Junto con v1, define completamente la traslación del sistema masivo.
    en: Along with v1, it completely defines the translation of the massive system.

- id: M
  symbol: "M"
  nombre:
    es: Masa total
    en: Total mass
  descripcion:
    es: Suma de las masas de todas las partículas del sistema.
    en: Sum of the masses of all particles in the system.
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: null
  category: derived
  physical_role: system_inertia
  used_in: [theory, examples]
  common_mistake:
    es: Olvidar incluir alguna de las partículas componentes en la suma.
    en: Forgetting to include one of the component particles in the sum.
  typical_range: "0 - 10^6 kg"
  sign_behavior:
    has_sign: false
    meaning:
      es: La masa es una magnitud intrínsecamente positiva.
      en: Mass is an intrinsically positive magnitude.
  zero_behavior:
    allowed: false
    meaning:
      es: Indica la ausencia de un sistema material bajo estudio.
      en: Indicates the absence of a material system under study.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "(0, inf)"
  interpretation_role:
    primary_for: [system_inertia, extensive_property]
    secondary_for: [momentum_calculation]
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Concentra toda la inercia del sistema en el punto del centro de masas.
    en: Concentrates all the system's inertia at the center-of-mass point.

- id: v_rel
  symbol: "v_{rel}"
  nombre:
    es: Velocidad relativa
    en: Relative velocity
  descripcion:
    es: Diferencia vectorial entre las velocidades de las dos partículas del sistema.
    en: Vector difference between the velocities of the two particles in the system.
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: true
  components: [vrelx, vrely, vrelz]
  category: derived
  physical_role: interaction_velocity
  used_in: [theory, examples, interpretation]
  common_mistake:
    es: Errar en el orden de la resta (v2-v1 vs v1-v2), lo que invierte el sentido.
    en: Erring in the order of subtraction (v2-v1 vs v1-v2), which reverses the direction.
  typical_range: "0 - 10^3 m/s"
  sign_behavior:
    has_sign: true
    meaning:
      es: Define si el sistema se está expandiendo (alejamiento) o comprimiendo (acercamiento).
      en: Defines whether the system is expanding (recession) or compressing (approach).
  zero_behavior:
    allowed: true
    meaning:
      es: Indica que la distancia entre las partículas permanece constante.
      en: Indicates that the distance between particles remains constant.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: [interaction_kinematics, recession_speed]
    secondary_for: [internal_energy]
  graph_binding:
    channels: [relative_vector]
  pedagogical_notes:
    es: Es una magnitud invariante ante transformaciones de Galileo entre marcos inerciales.
    en: It is an invariant magnitude under Galilean transformations between inertial frames.

- id: K_lab
  symbol: "K_{lab}"
  nombre:
    es: Energía cinética (laboratorio)
    en: Kinetic energy (laboratory)
  descripcion:
    es: Energía cinética total del sistema medida por un observador externo en reposo.
    en: Total kinetic energy of the system measured by a stationary external observer.
  unidad_si: "J"
  dimension: "M L^2 T^-2"
  is_vector: false
  components: null
  category: derived
  physical_role: total_energy
  used_in: [theory, examples]
  common_mistake:
    es: Suponer que coincide con K_cm cuando el sistema tiene movimiento traslacional.
    en: Assuming it coincides with K_cm when the system has translational motion.
  typical_range: "0 - 10^9 J"
  sign_behavior:
    has_sign: false
    meaning:
      es: Energía escalar siempre no negativa.
      en: Non-negative scalar energy.
  zero_behavior:
    allowed: true
    meaning:
      es: Implica que todas las partes del sistema están en reposo absoluto.
      en: Implies that all parts of the system are at absolute rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, inf)"
  interpretation_role:
    primary_for: [global_energy_state, lab_reference]
    secondary_for: [konig_partition]
  graph_binding:
    channels: [energy_indicator]
  pedagogical_notes:
    es: Se descompone en energía del CM y energía de agitación interna.
    en: Decomposes into CM energy and internal agitation energy.

- id: m1
  symbol: "m_1"
  nombre:
    es: Masa de la partícula 1
    en: Mass of particle 1
  descripcion:
    es: Inercia de la primera partícula del sistema.
    en: Inertia of the first particle in the system.
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: null
  category: fundamental
  physical_role: particle_inertia
  used_in: [theory, examples]
  common_mistake:
    es: Confundir masa inercial con peso gravitatorio.
    en: Confusing inertial mass with gravitational weight.
  typical_range: "0 - 10^3 kg"
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud fundamental positiva.
      en: Positive fundamental magnitude.
  zero_behavior:
    allowed: false
    meaning:
      es: Indica que la partícula 1 no tiene presencia física masiva.
      en: Indicates that particle 1 has no massive physical presence.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "(0, inf)"
  interpretation_role:
    primary_for: [particle_property, inertia_input]
    secondary_for: [reduced_mass, vcm_calculation]
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Pondera cuánto 'tira' esta partícula del centro de masas hacia su posición.
    en: Weights how much this particle 'pulls' the center of mass towards its position.

- id: m2
  symbol: "m_2"
  nombre:
    es: Masa de la partícula 2
    en: Mass of particle 2
  descripcion:
    es: Inercia de la segunda partícula del sistema.
    en: Inertia of the second particle in the system.
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: null
  category: fundamental
  physical_role: particle_inertia
  used_in: [theory, examples]
  common_mistake:
    es: No considerar su valor al determinar la posición de equilibrio del CM.
    en: Not considering its value when determining the CM equilibrium position.
  typical_range: "0 - 10^3 kg"
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud fundamental positiva.
      en: Positive fundamental magnitude.
  zero_behavior:
    allowed: false
    meaning:
      es: Indica que la partícula 2 no tiene presencia física masiva.
      en: Indicates that particle 2 has no massive physical presence.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: (0, inf)
  interpretation_role:
    primary_for: [particle_property, inertia_input]
    secondary_for: [reduced_mass, vcm_calculation]
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Determina junto a m1 la distribución de inercia del conjunto.
    en: Determines along with m1 the inertia distribution of the set.

- id: ptot
  symbol: "P_{tot}"
  nombre:
    es: Momento lineal total
    en: Total linear momentum
  descripcion:
    es: Suma vectorial de las cantidades de movimiento de todas las partículas del sistema.
    en: Vector sum of the momenta of all particles in the system.
  unidad_si: "kg*m/s"
  dimension: "M L T^-1"
  is_vector: true
  components: [Px, Py, Pz]
  category: derived
  physical_role: system_momentum
  used_in: [theory, examples, interpretation]
  common_mistake:
    es: Sumar las magnitudes escalarmente sin tener en cuenta la dirección vectorial.
    en: Adding magnitudes scalarly without taking vector direction into account.
  typical_range: "0 - 10^6 kg*m/s"
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica el sentido de la traslación de inercia del sistema completo.
      en: Indicates the direction of the complete system's inertia translation.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica que el sistema, visto globalmente, está en reposo (aunque sus partes se muevan).
      en: Indicates that the system, viewed globally, is at rest (even if its parts move).
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: (-inf, inf)
  interpretation_role:
    primary_for: [global_dynamic_state, translational_momentum]
    secondary_for: [vcm_derivation]
  graph_binding:
    channels: [momentum_vector]
  pedagogical_notes:
    es: Representa el ímpetu total que debería contrarrestarse para detener el sistema.
    en: Represents the total impetus that would need to be countered to stop the system.

- id: K_trans
  symbol: "K_{trans}"
  nombre:
    es: Energía cinética de traslación del CM
    en: CM translational kinetic energy
  descripcion:
    es: Energía asociada al movimiento de conjunto del sistema de partículas.
    en: Energy associated with the bulk motion of the particle system.
  unidad_si: "J"
  dimension: "M L^2 T^-2"
  is_vector: false
  components: null
  category: derived
  physical_role: bulk_energy
  used_in: [theory, examples, interpretation]
  common_mistake:
    es: Creer que esta energía está disponible para ser disipada en colisiones internas.
    en: Believing this energy is available to be dissipated in internal collisions.
  typical_range: "0 - 10^6 J"
  sign_behavior:
    has_sign: false
    meaning:
      es: Energía escalar no negativa.
      en: Non-negative scalar energy.
  zero_behavior:
    allowed: true
    meaning:
      es: Es nula cuando el centro de masas está en reposo respecto al observador.
      en: It is zero when the center of mass is at rest relative to the observer.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, inf)"
  interpretation_role:
    primary_for: [bulk_motion, external_energy]
    secondary_for: [konig_partition]
  graph_binding:
    channels: [energy_bar]
  pedagogical_notes:
    es: Es la parte de la energía total que desaparece al realizar el cambio de marco al CM.
    en: It is the part of total energy that disappears when performing the frame change to the CM.
`;export{e as default};
