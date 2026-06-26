const n=`version: 1
magnitudes:


- id: F
  symbol: F
  nombre:
    es: Fuerza aplicada
    en: Applied force
  descripcion:
    es: Acción externa horizontal que intenta mover el bloque.
    en: External horizontal action trying to move the block.
  unidad_si: N
  dimension: MLT^-2
  is_vector: false
  components: null
  category: input
  physical_role: trigger
  used_in:
  - segunda_ley_horizontal
  common_mistake:
    es: Olvidar que debe compararse con el umbral antes de calcular aceleración.
    en: Forgetting it must be compared with threshold before calculating acceleration.
  typical_range:
    es: De 0 a varios miles de N.
    en: From 0 to several thousand N.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo define el sentido del empuje según el eje elegido.
      en: Sign defines push direction according to chosen axis.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica ausencia de empuje externo.
      en: Indicates absence of external push.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: R
  interpretation_role:
    primary_for:
    - causa-movimiento
    secondary_for:
    - balance-horizontal
  graph_binding:
    channels:
    - driving_force
  pedagogical_notes:
    es: Es la variable de control principal en este leaf.
    en: It is the main control variable in this leaf.

- id: m
  symbol: m
  nombre:
    es: Masa del bloque
    en: Block mass
  descripcion:
    es: Inercia traslacional del cuerpo.
    en: Translational inertia of the body.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: parameter
  physical_role: parameter
  used_in:
  - peso_gravitatorio
  - segunda_ley_horizontal
  common_mistake:
    es: Confundirla con el peso en las ecuaciones dinámicas.
    en: Confusing it with weight in dynamic equations.
  typical_range:
    es: Entre 0.1 y 1000 kg.
    en: Between 0.1 and 1000 kg.
  sign_behavior:
    has_sign: false
    meaning: No aplica.
  zero_behavior:
    allowed: false
    meaning: No aplica.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '> 0'
  interpretation_role:
    primary_for:
    - inercia
    secondary_for:
    - balance-horizontal
  graph_binding:
    channels:
    - inertia
  pedagogical_notes:
    es: Determina tanto el rozamiento (vía N) como la resistencia a acelerar.
    en: Determines both friction (via N) and resistance to acceleration.

- id: N
  symbol: N
  nombre:
    es: Reacción normal
    en: Normal reaction
  descripcion:
    es: Fuerza perpendicular de contacto con la superficie.
    en: Perpendicular contact force with the surface.
  unidad_si: N
  dimension: MLT^-2
  is_vector: false
  components: null
  category: state
  physical_role: state
  used_in:
  - normal_superficie
  - umbral_estatico
  - friccion_cinetica
  common_mistake:
    es: Igualarla a mg cuando hay fuerzas verticales adicionales.
    en: Setting it equal to mg when extra vertical forces exist.
  typical_range:
    es: Proporcional al peso del bloque.
    en: Proportional to block weight.
  sign_behavior:
    has_sign: false
    meaning: Siempre positiva en este modelo de contacto.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica pérdida de contacto con la superficie.
      en: Indicates loss of contact with the surface.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '>= 0'
  interpretation_role:
    primary_for:
    - escala-contacto
    secondary_for:
    - balance-vertical
  graph_binding:
    channels:
    - contact_intensity
  pedagogical_notes:
    es: Es la magnitud que acopla el eje vertical con la fricción horizontal.
    en: It is the magnitude that couples the vertical axis with horizontal friction.

- id: mu_s
  symbol: mu_s
  nombre:
    es: Coeficiente de fricción estática
    en: Static friction coefficient
  descripcion:
    es: Parámetro de adherencia máxima sin deslizamiento.
    en: Maximum adherence parameter without sliding.
  unidad_si: adim.
  dimension: '1'
  is_vector: false
  components: null
  category: parameter
  physical_role: parameter
  used_in:
  - umbral_estatico
  common_mistake:
    es: Usarlo para calcular la fricción real en reposo (solo da el máximo).
    en: Using it to calculate actual friction at rest (only gives the maximum).
  typical_range:
    es: Entre 0.1 y 1.2.
    en: Between 0.1 and 1.2.
  sign_behavior:
    has_sign: false
    meaning: No aplica.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica superficie perfectamente lisa en reposo.
      en: Indicates perfectly smooth surface at rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '>= 0'
  interpretation_role:
    primary_for:
    - propiedad-superficie
    secondary_for:
    - condicion-arranque
  graph_binding:
    channels:
    - static_grip
  pedagogical_notes:
    es: Representa la "barrera" que el sistema debe superar para arrancar.
    en: Represents the "barrier" the system must overcome to start.

- id: mu_k
  symbol: mu_k
  nombre:
    es: Coeficiente de fricción cinética
    en: Kinetic friction coefficient
  descripcion:
    es: Parámetro de resistencia durante el deslizamiento.
    en: Resistance parameter during sliding.
  unidad_si: adim.
  dimension: '1'
  is_vector: false
  components: null
  category: parameter
  physical_role: parameter
  used_in:
  - friccion_cinetica
  common_mistake:
    es: Suponer que es igual a mu_s en todos los materiales.
    en: Suposing it is equal to mu_s in all materials.
  typical_range:
    es: Generalmente menor que mu_s.
    en: Generally lower than mu_s.
  sign_behavior:
    has_sign: false
    meaning: No aplica.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica ausencia de resistencia una vez iniciado el movimiento.
      en: Indicates absence of resistance once motion has started.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '>= 0'
  interpretation_role:
    primary_for:
    - disipacion-cinetica
    secondary_for:
    - balance-horizontal
  graph_binding:
    channels:
    - kinetic_drag
  pedagogical_notes:
    es: Gobierna la pérdida de energía y la aceleración neta en movimiento.
    en: Governs energy loss and net acceleration in motion.

- id: f_s
  symbol: f_s
  nombre:
    es: Umbral estático máximo
    en: Maximum static threshold
  descripcion:
    es: Máxima fuerza de fricción estática antes de deslizar.
    en: Maximum static friction force before sliding.
  unidad_si: N
  dimension: MLT^-2
  is_vector: false
  components: null
  category: derived
  physical_role: state
  used_in:
  - umbral_estatico
  common_mistake:
    es: Creer que la fricción estática siempre vale este máximo.
    en: Believing that static friction is always equal to this maximum.
  typical_range:
    es: Fracción de la normal N.
    en: Fraction of normal force N.
  sign_behavior:
    has_sign: false
    meaning: Se trata como un módulo límite positivo.
  zero_behavior:
    allowed: true
    meaning:
      es: No hay resistencia al arranque.
      en: No startup resistance.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '>= 0'
  interpretation_role:
    primary_for:
    - limite-adherencia
    secondary_for:
    - seguridad-estatica
  graph_binding:
    channels:
    - friction_limit
  pedagogical_notes:
    es: Es la frontera lógica que separa el reposo del movimiento.
    en: It is the logical boundary separating rest from motion.

- id: f_k
  symbol: f_k
  nombre:
    es: Fricción cinética
    en: Kinetic friction
  descripcion:
    es: Fuerza resistiva durante el deslizamiento.
    en: Resistive force during sliding.
  unidad_si: N
  dimension: MLT^-2
  is_vector: false
  components: null
  category: derived
  physical_role: state
  used_in:
  - friccion_cinetica
  - segunda_ley_horizontal
  common_mistake:
    es: Darle sentido fijo sin revisar el movimiento relativo.
    en: Giving it a fixed direction without checking relative motion.
  typical_range:
    es: Entre 0 y varios miles de N.
    en: Between 0 and several thousand N.
  sign_behavior:
    has_sign: false
    meaning: Se trata como módulo no negativo en este modelo.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser cero si mu_k o N son nulos.
      en: It can be zero if mu_k or N are zero.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '>= 0'
  interpretation_role:
    primary_for:
    - disipacion-activa
    secondary_for:
    - balance-horizontal
  graph_binding:
    channels:
    - resisting_force
  pedagogical_notes:
    es: En módulos, reduce la fuerza neta útil para acelerar.
    en: In magnitude, it reduces the useful net force for acceleration.

- id: a
  symbol: a
  nombre:
    es: Aceleración horizontal
    en: Horizontal acceleration
  descripcion:
    es: Tasa de cambio de la velocidad en el eje del movimiento.
    en: Rate of velocity change on the motion axis.
  unidad_si: m/s^2
  dimension: LT^-2
  is_vector: false
  components: null
  category: state
  physical_role: state
  used_in:
  - segunda_ley_horizontal
  common_mistake:
    es: Calcularla antes de verificar si se superó el umbral estático.
    en: Calculating it before verifying if the static threshold was exceeded.
  typical_range:
    es: De 0 a 100 m/s^2.
    en: From 0 to 100 m/s^2.
  sign_behavior:
    has_sign: true
    meaning:
      es: Indica si el bloque gana rapidez o frena según el eje.
      en: Indicates if the block gains speed or slows down according to the axis.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica reposo o movimiento a velocidad constante.
      en: Indicates rest or constant velocity motion.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: R
  interpretation_role:
    primary_for:
    - respuesta-dinamica
    secondary_for:
    - cinematica
  graph_binding:
    channels:
    - system_acceleration
  pedagogical_notes:
    es: Es el resultado final del balance de fuerzas una vez en régimen cinético.
    en: It is the final result of the force balance once in kinetic regime.

- id: g
  symbol: g
  nombre:
    es: Aceleración de la gravedad
    en: Gravitational acceleration
  descripcion:
    es: Intensidad del campo gravitatorio local.
    en: Local gravitational field intensity.
  unidad_si: m/s^2
  dimension: LT^-2
  is_vector: false
  components: null
  category: parameter
  physical_role: parameter
  used_in:
  - peso_gravitatorio
  common_mistake:
    es: Usarla como fuerza en lugar de como aceleración del campo.
    en: Using it as force instead of field acceleration.
  typical_range:
    es: Aproximadamente 9.8 m/s^2 en la Tierra.
    en: Approximately 9.8 m/s^2 on Earth.
  sign_behavior:
    has_sign: false
    meaning: Se toma su módulo positivo.
  zero_behavior:
    allowed: false
    meaning: No aplica.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '> 0'
  interpretation_role:
    primary_for:
    - campo-gravitatorio
    secondary_for:
    - peso
  graph_binding:
    channels:
    - gravity_field
  pedagogical_notes:
    es: Determina el peso y por extensión la fuerza de contacto N.
    en: Determines weight and by extension the contact force N.

- id: W
  symbol: W
  nombre:
    es: Peso del bloque
    en: Block weight
  descripcion:
    es: Fuerza gravitatoria total que tira del bloque hacia abajo.
    en: Total gravitational force pulling the block down.
  unidad_si: N
  dimension: MLT^-2
  is_vector: false
  components: null
  category: derived
  physical_role: state
  used_in:
  - peso_gravitatorio
  - normal_superficie
  common_mistake:
    es: Confundirlo con la masa m.
    en: Confusing it with mass m.
  typical_range:
    es: De 1 a 10000 N.
    en: From 1 to 10000 N.
  sign_behavior:
    has_sign: false
    meaning: Se usa como módulo positivo.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica ausencia de gravedad o masa nula.
      en: Indicates weightlessness or zero mass.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '>= 0'
  interpretation_role:
    primary_for:
    - accion-gravitatoria
    secondary_for:
    - balance-vertical
  graph_binding:
    channels:
    - gravity_force
  pedagogical_notes:
    es: Es la causa directa de la reacción normal en superficies horizontales.
    en: It is the direct cause of the normal reaction on horizontal surfaces.
`;export{n as default};
