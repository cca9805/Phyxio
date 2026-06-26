const e=`version: 2
id: magnitudes-movimiento-del-centro-de-masas
leaf_id: movimiento-del-centro-de-masas

magnitudes:
  - id: F_ext
    symbol: F_{ext}
    nombre:
      es: fuerza externa neta
      en: net external force
    descripcion:
      es: Suma vectorial de todas las fuerzas que actúan sobre el sistema desde el exterior.
      en: Vector sum of all forces acting on the system from the outside.
    unidad_si: N
    dimension: M L T⁻²
    is_vector: true
    components: [x, y, z]
    category: fundamental
    physical_role: force
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Incluir fuerzas internas (como tensiones) en el cálculo del CM."
    typical_range: "0 to 10⁶ N"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido de la aceleración del centro de masas."
        en: "Indicates the direction of center-of-mass acceleration."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica un sistema aislado o en equilibrio dinámico; el CM no acelera."
        en: "Indicates an isolated system or dynamic equilibrium; the CM does not accelerate."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1e6, 1e6)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: [force_vector]
    pedagogical_notes: "Es la única causa del cambio en el estado de movimiento del baricentro."

  - id: M
    symbol: M
    nombre:
      es: masa total del sistema
      en: total system mass
    descripcion:
      es: Suma de todas las masas individuales de los componentes del sistema.
      en: Sum of all individual masses of the system components.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: structural
    physical_role: mass
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Olvidar sumar alguna parte del sistema en problemas de masa variable."
    typical_range: "0.001 to 10⁶ kg"
    sign_behavior:
      has_sign: false
      meaning: null
    zero_behavior:
      allowed: false
      meaning: "Un sistema físico debe tener masa positiva."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(1e-3, 1e9)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Representa la inercia total del conjunto frente a fuerzas externas."

  - id: a_cm
    symbol: a_{cm}
    nombre:
      es: aceleración del centro de masas
      en: center of mass acceleration
    descripcion:
      es: Ritmo de cambio de la velocidad del baricentro del sistema.
      en: Rate of change of the system's barycenter velocity.
    unidad_si: m/s²
    dimension: L T⁻²
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: acceleration
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Atribuir aceleración al CM debido a fuerzas internas."
    typical_range: "0 to 100 m/s²"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido del cambio de velocidad global."
        en: "Indicates the direction of global velocity change."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica que el sistema se mueve a velocidad constante (o está en reposo global)."
        en: "Indicates that the system moves at constant velocity (or is at global rest)."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1000, 1000)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: [acceleration_curve]
    pedagogical_notes: "Representa el movimiento de traslación 'promedio' del conjunto."

  - id: v_cm
    symbol: v_{cm}
    nombre:
      es: velocidad del centro de masas
      en: center of mass velocity
    descripcion:
      es: Promedio ponderado por masa de las velocidades de todas las partículas.
      en: Mass-weighted average of the velocities of all particles.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: fundamental
    physical_role: velocity
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Confundir la velocidad del CM con la velocidad de una de las partículas individuales (especialmente la más masiva)."
    typical_range: "0 to 1000 m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido del desplazamiento del baricentro."
        en: "Indicates the direction of barycenter displacement."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica que el baricentro del sistema está en reposo respecto al observador (aunque las partículas internas se muevan)."
        en: "Indicates that the system's barycenter is at rest relative to the observer (even if internal particles are moving)."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-3e8, 3e8)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: [velocity_vector]
    pedagogical_notes: "Es la velocidad que tendría una sola partícula que concentrara toda la masa del sistema."

  - id: p_tot
    symbol: p_{tot}
    nombre:
      es: momento lineal total
      en: total linear momentum
    descripcion:
      es: Suma de los momentos lineales de todos los constituyentes, equivalente al momento de una partícula de masa M con velocidad v_cm.
      en: Sum of the linear momenta of all constituents, equivalent to the momentum of a mass M particle with velocity v_cm.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: momentum
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Sumar solo los módulos de los momentos en lugar de sus vectores."
    typical_range: "0 to 10⁶ kg·m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido de la cantidad de movimiento neta."
        en: "Indicates the direction of net momentum."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica que el sistema, en su conjunto, no tiene traslación (marco de momento cero)."
        en: "Indicates that the system, as a whole, has no translation (zero momentum frame)."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1e9, 1e9)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: [momentum_arrow]
    pedagogical_notes: "Magnitud clave para las leyes de conservación en sistemas aislados."

  - id: dp_tot
    symbol: dp_{tot}
    nombre:
      es: cambio temporal del momento lineal
      en: rate of change of linear momentum
    descripcion:
      es: Derivada temporal del momento lineal total, que según la 2ª Ley de Newton es igual a la fuerza externa neta.
      en: Time derivative of total linear momentum, which according to Newton's 2nd Law equals the net external force.
    unidad_si: N
    dimension: M L T⁻²
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: force
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Confundir el valor del momento con su rapidez de cambio."
    typical_range: "0 to 10⁶ N"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido del flujo de momento."
        en: "Indicates the direction of momentum flow."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica que el momento total se conserva."
        en: "Indicates that total momentum is conserved."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1e6, 1e6)"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Es el nexo entre cinemática de sistemas y dinámica de fuerzas."

  - id: J_ext
    symbol: J_{ext}
    nombre:
      es: impulso externo neto
      en: net external impulse
    descripcion:
      es: Integral temporal de la fuerza externa neta aplicada al sistema.
      en: Time integral of the net external force applied to the system.
    unidad_si: N·s
    dimension: M L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: fundamental
    physical_role: impulse
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "No distinguir entre el impulso de una fuerza interna y externa."
    typical_range: "0 to 10⁶ N·s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido del cambio de momento lineal producido."
        en: "Indicates the direction of the produced linear momentum change."
    zero_behavior:
      allowed: true
      meaning:
        es: "No hay cambio neto en el momento lineal total."
        en: "There is no net change in total linear momentum."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1e6, 1e6)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Conecta la dinámica de fuerzas con el cambio cinemático de velocidades."

  - id: Delta_vcm
    symbol: \\Delta v_{cm}
    nombre:
      es: variación de velocidad del CM
      en: CM velocity variation
    descripcion:
      es: Diferencia vectorial entre la velocidad final e inicial del centro de masas.
      en: Vector difference between the final and initial center of mass velocity.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: velocity_change
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Olvidar el carácter vectorial (restar solo módulos)."
    typical_range: "0 to 1000 m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica si la velocidad del CM aumentó (+) o disminuyó (-) en el eje."
        en: "Indicates if the CM velocity increased (+) or decreased (-) on the axis."
    zero_behavior:
      allowed: true
      meaning:
        es: "La velocidad del CM no ha cambiado."
        en: "The CM velocity has not changed."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1e4, 1e4)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Resultado observable de la aplicación de un impulso externo."

  - id: m1
    symbol: m_1
    nombre:
      es: masa de la partícula 1
      en: mass of particle 1
    descripcion:
      es: Masa del primer componente discreto del sistema.
      en: Mass of the first discrete component of the system.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: structural
    physical_role: mass
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Invertir los valores de m1 y m2 en el cálculo de la media ponderada."
    typical_range: "0.001 to 10⁶ kg"
    sign_behavior:
      has_sign: false
      meaning: null
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica que la partícula no tiene masa o ha sido eliminada del sistema."
        en: "Indicates that the particle has no mass or has been removed from the system."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(0, 1e6)"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Factor de ponderación para la inercia local."

  - id: m2
    symbol: m_2
    nombre:
      es: masa de la partícula 2
      en: mass of particle 2
    descripcion:
      es: Masa del segundo componente discreto del sistema.
      en: Mass of the second discrete component of the system.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: structural
    physical_role: mass
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Confundir con la masa total M del sistema."
    typical_range: "0.001 to 10⁶ kg"
    sign_behavior:
      has_sign: false
      meaning: null
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica que la segunda partícula no tiene masa."
        en: "Indicates that the second particle has no mass."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(0, 1e6)"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Segunda inercia constituyente del sistema."

  - id: v1
    symbol: v_1
    nombre:
      es: velocidad de la partícula 1
      en: velocity of particle 1
    descripcion:
      es: Vector velocidad del primer cuerpo en el marco de referencia inercial.
      en: Velocity vector of the first body in the inertial reference frame.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: velocity
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Usar velocidades relativas al CM en lugar de absolutas al laboratorio."
    typical_range: "0 to 1000 m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Sentido del movimiento de la partícula 1."
        en: "Direction of motion of particle 1."
    zero_behavior:
      allowed: true
      meaning:
        es: "La partícula 1 está en reposo respecto al laboratorio."
        en: "Particle 1 is at rest relative to the laboratory."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-3e8, 3e8)"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Contribuye al momento total a través de m1*v1."

  - id: v2
    symbol: v_2
    nombre:
      es: velocidad de la partícula 2
      en: velocity of particle 2
    descripcion:
      es: Vector velocidad del segundo cuerpo en el marco de referencia inercial.
      en: Velocity vector of the second body in the inertial reference frame.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: velocity
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Olvidar el signo opuesto si las partículas se acercan."
    typical_range: "0 to 1000 m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Sentido del movimiento de la partícula 2."
        en: "Direction of motion of particle 2."
    zero_behavior:
      allowed: true
      meaning:
        es: "La partícula 2 está en reposo respecto al laboratorio."
        en: "Particle 2 is at rest relative to the laboratory."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-3e8, 3e8)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Contribuye al momento total a través de m2*v2."

  - id: Delta_v
    symbol: \\Delta v
    nombre:
      es: variación de velocidad
      en: velocity variation
    descripcion:
      es: Incremento o decremento de la rapidez de un componente del sistema.
      en: Increase or decrease of a system component's speed.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: false
    components: null
    category: derived
    physical_role: velocity_change
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Confundir con la aceleración instantánea."
    typical_range: "0 to 1000 m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Aumento (+) o disminución (-) de velocidad."
        en: "Velocity increase (+) or decrease (-)."
    zero_behavior:
      allowed: true
      meaning:
        es: "Velocidad constante."
        en: "Constant velocity."
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: "(-1e4, 1e4)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Resultado directo del balance de momentos en propulsión."

  - id: Delta_M
    symbol: \\Delta M
    nombre:
      es: variación de masa
      en: mass variation
    descripcion:
      es: Cantidad de materia ganada o perdida por el sistema durante un intervalo.
      en: Amount of matter gained or lost by the system during an interval.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: derived
    physical_role: mass_change
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Ignorar el signo negativo si se considera pérdida de masa."
    typical_range: "0 to 1000 kg"
    sign_behavior:
      has_sign: true
      meaning:
        es: "El signo negativo indica pérdida de masa respecto al sistema original."
        en: "Negative sign indicates mass loss relative to the original system."
    zero_behavior:
      allowed: true
      meaning:
        es: "Masa constante."
        en: "Constant mass."
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: "(-1e6, 1e6)"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Variable clave en la ecuación del cohete."

  - id: v_escape
    symbol: v_{e}
    nombre:
      es: velocidad de escape
      en: exhaust velocity
    descripcion:
      es: Velocidad a la que la masa es eyectada respecto al cuerpo principal.
      en: Velocity at which mass is ejected relative to the main body.
    unidad_si: m/s
    dimension: L T⁻¹
    is_vector: false
    components: null
    category: fundamental
    physical_role: velocity
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Confundir con la velocidad absoluta de los gases."
    typical_range: "0 to 5000 m/s"
    sign_behavior:
      has_sign: false
      meaning: null
    zero_behavior:
      allowed: true
      meaning:
        es: "Sin expulsión de gases."
        en: "No gas expulsion."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(0, 1e5)"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Parámetro de diseño que determina la eficiencia del motor."

  - id: p1
    symbol: p_1
    nombre:
      es: momento lineal de la partícula 1
      en: linear momentum of particle 1
    descripcion:
      es: Cantidad de movimiento individual del primer cuerpo.
      en: Individual amount of motion of the first body.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: linear_momentum
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Sumarlo escalarmente con p2 sin considerar direcciones."
    typical_range: "0 to 10⁶ kg·m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido del movimiento de m1."
        en: "Indicates the direction of motion of m1."
    zero_behavior:
      allowed: true
      meaning:
        es: "La partícula 1 está en reposo."
        en: "Particle 1 is at rest."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1e6, 1e6)"
    interpretation_role:
      primary_for: []
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Parte constituyente del p_tot."

  - id: p2
    symbol: p_2
    nombre:
      es: momento lineal de la partícula 2
      en: linear momentum of particle 2
    descripcion:
      es: Cantidad de movimiento individual del segundo cuerpo.
      en: Individual amount of motion of the second body.
    unidad_si: kg·m/s
    dimension: M L T⁻¹
    is_vector: true
    components: [x, y, z]
    category: derived
    physical_role: linear_momentum
    used_in:
      - movimiento-del-centro-de-masas
    common_mistake: "Ignorar su aporte al momento total del sistema."
    typical_range: "0 to 10⁶ kg·m/s"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica el sentido del movimiento de m2."
        en: "Indicates the direction of motion of m2."
    zero_behavior:
      allowed: true
      meaning:
        es: "La partícula 2 está en reposo."
        en: "Particle 2 is at rest."
    value_nature:
      kind: scalar_component
      nonnegative_only: false
      expected_interval: "(-1e6, 1e6)"
    interpretation_role:
      primary_for: [movimiento-del-centro-de-masas]
      secondary_for: []
    graph_binding: []
    pedagogical_notes: "Contribuye al momento total a través de m2*v2."
`;export{e as default};
