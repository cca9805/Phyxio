const n=`version: 1
magnitudes:
- id: posicion-angular
  symbol: \\theta
  nombre:
    es: Posición angular
    en: Angular position
  descripcion:
    es: Orientación de un cuerpo rígido respecto a una dirección de referencia.
    en: Orientation of a rigid body relative to a reference direction.
  unidad_si: rad
  dimension: "1"
  is_vector: false
  components: []
  category: fundamental
  physical_role: physical_quantity
  used_in:
  - magnitudes-angulares
  - cinematica-rotacional
  - mapa-conceptual-de-rotacion
  common_mistake: Usar grados en lugar de radianes en los cálculos.
  typical_range: Generalmente entre 0 y 2π radianes para una revolución.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica el sentido de giro (horario vs antihorario).
      en: The sign indicates the rotation direction (clockwise vs counter-clockwise).
  zero_behavior:
    allowed: true
    meaning:
      es: Define el origen de coordenadas angulares.
      en: Defines the angular coordinate origin.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: Any real value
  interpretation_role:
    primary_for:
    - magnitudes-angulares
    secondary_for: []
  graph_binding:
    channels:
    - rotation_angle
  pedagogical_notes: Es la base de toda la cinemática de rotación.

- id: velocidad-angular
  symbol: \\omega
  nombre:
    es: Velocidad angular
    en: Angular velocity
  descripcion:
    es: Rapidez con la que cambia la posición angular en el tiempo.
    en: Rate of change of angular position over time.
  unidad_si: rad/s
  dimension: T^{-1}
  is_vector: true
  components:
  - omega_z
  category: derived
  physical_role: motion_state
  used_in:
  - magnitudes-angulares
  - cinematica-rotacional
  - mapa-conceptual-de-rotacion
  common_mistake: Confundir con la velocidad lineal tangencial.
  typical_range: De 0 a cientos de rad/s en motores comunes.
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica el sentido de la rotación alrededor del eje.
      en: Indicates the rotation direction around the axis.
  zero_behavior:
    allowed: true
    meaning:
      es: Ausencia de rotación instantánea.
      en: Absence of instantaneous rotation.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: Determined by the system dynamics
  interpretation_role:
    primary_for:
    - magnitudes-angulares
    secondary_for: []
  graph_binding:
    channels:
    - rotation_speed
  pedagogical_notes: Clave para conectar con la energía cinética rotacional.

- id: aceleracion-angular
  symbol: \\alpha
  nombre:
    es: Aceleración angular
    en: Angular acceleration
  descripcion:
    es: Tasa de cambio de la velocidad angular.
    en: Rate of change of angular velocity.
  unidad_si: rad/s^2
  dimension: T^{-2}
  is_vector: true
  components:
  - alpha_z
  category: derived
  physical_role: frame_effect
  used_in:
  - cinematica-rotacional
  - segunda-ley-rotacional
  - mapa-conceptual-de-rotacion
  common_mistake: Olvidar que requiere un torque neto para existir.
  typical_range: Variable según el torque aplicado e inercia.
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica si la rotación se acelera o se frena en un sentido dado.
      en: Indicates if rotation is speeding up or slowing down in a given direction.
  zero_behavior:
    allowed: true
    meaning:
      es: Velocidad angular constante (equilibrio rotacional).
      en: Constant angular velocity (rotational equilibrium).
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: Any real value
  interpretation_role:
    primary_for:
    - cinematica-rotacional
    secondary_for: []
  graph_binding:
    channels:
    - motion_change
  pedagogical_notes: Es la respuesta dinámica al torque neto.

- id: torque
  symbol: \\tau
  nombre:
    es: Torque (Momento de fuerza)
    en: Torque (Moment of force)
  descripcion:
    es: Capacidad de una fuerza para producir un giro alrededor de un eje.
    en: Ability of a force to produce a rotation around an axis.
  unidad_si: N \\cdot m
  dimension: M L^2 T^{-2}
  is_vector: true
  components:
  - tau_z
  category: derived
  physical_role: force_equivalent
  used_in:
  - segunda-ley-rotacional
  - mapa-conceptual-de-rotacion
  common_mistake: Olvidar que depende de la distancia al eje (brazo de palanca).
  typical_range: De 0 a miles de N·m en maquinaria pesada.
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica la tendencia a girar en sentido horario o antihorario.
      en: Indicates the tendency to rotate clockwise or counter-clockwise.
  zero_behavior:
    allowed: true
    meaning:
      es: Equilibrio de momentos; no hay tendencia al cambio de rotación.
      en: Equilibrium of moments; no tendency for rotational change.
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: Any real value
  interpretation_role:
    primary_for:
    - segunda-ley-rotacional
    secondary_for: []
  graph_binding:
    channels:
    - torque_reading
  pedagogical_notes: Siempre debe definirse respecto a un punto de referencia específico.

- id: momento-de-inercia
  symbol: I
  nombre:
    es: Momento de inercia
    en: Moment of inertia
  descripcion:
    es: Medida de la resistencia de un cuerpo a cambiar su estado de rotación.
    en: Measure of a body's resistance to change its rotational state.
  unidad_si: kg \\cdot m^2
  dimension: M L^2
  is_vector: false
  components: []
  category: derived
  physical_role: mass_equivalent
  used_in:
  - segunda-ley-rotacional
  - energia-cinetica-rotacional
  - mapa-conceptual-de-rotacion
  common_mistake: Creer que es una constante intrínseca del objeto sin considerar el eje.
  typical_range: Positivo, depende de la masa y su distribución.
  sign_behavior:
    has_sign: false
    meaning:
      es: Es una magnitud escalar siempre positiva.
      en: It is an always positive scalar quantity.
  zero_behavior:
    allowed: false
    meaning:
      es: Un objeto con masa siempre tiene inercia rotacional no nula.
      en: An object with mass always has non-zero rotational inertia.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Positive real value
  interpretation_role:
    primary_for:
    - segunda-ley-rotacional
    secondary_for: []
  graph_binding:
    channels:
    - inertia_descriptor
  pedagogical_notes: Se calcula mediante integración o tablas para sólidos comunes.
`;export{n as default};
