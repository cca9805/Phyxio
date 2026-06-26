const n=`version: 1
magnitudes:
- id: theta
  symbol: theta
  nombre:
    es: ángulo girado
    en: angular displacement
  descripcion:
    es: Ángulo girado usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Angular displacement used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: rad
  dimension: '1'
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar theta sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - theta
  pedagogical_notes: No sustituir theta antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: omega
  symbol: omega
  nombre:
    es: velocidad angular
    en: angular velocity
  descripcion:
    es: Velocidad angular usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Angular velocity used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: rad/s
  dimension: T^{-1}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar omega sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - omega
  pedagogical_notes: No sustituir omega antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: alpha
  symbol: alpha
  nombre:
    es: aceleración angular
    en: angular acceleration
  descripcion:
    es: Aceleración angular usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Angular acceleration used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: rad/s^2
  dimension: T^{-2}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar alpha sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - alpha
  pedagogical_notes: No sustituir alpha antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: tau
  symbol: tau
  nombre:
    es: torque
    en: torque
  descripcion:
    es: Torque usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Torque used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: N m
  dimension: ML^2T^{-2}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar tau sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - tau
  pedagogical_notes: No sustituir tau antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: I
  symbol: I
  nombre:
    es: momento de inercia
    en: moment of inertia
  descripcion:
    es: Momento de inercia usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Moment of inertia used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: kg m^2
  dimension: ML^2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar I sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - I
  pedagogical_notes: No sustituir I antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: R
  symbol: R
  nombre:
    es: radio
    en: radius
  descripcion:
    es: Radio usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Radius used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: m
  dimension: L
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar R sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - R
  pedagogical_notes: No sustituir R antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: m
  symbol: m
  nombre:
    es: masa
    en: mass
  descripcion:
    es: Masa usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Mass used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar m sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - m
  pedagogical_notes: No sustituir m antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: v_cm
  symbol: v_cm
  nombre:
    es: velocidad del centro de masas
    en: center-of-mass velocity
  descripcion:
    es: Velocidad del centro de masas usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Center-of-mass velocity used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: m/s
  dimension: LT^{-1}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar v_cm sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - v_cm
  pedagogical_notes: No sustituir v_cm antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: a_cm
  symbol: a_cm
  nombre:
    es: aceleración del centro de masas
    en: center-of-mass acceleration
  descripcion:
    es: Aceleración del centro de masas usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Center-of-mass acceleration used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: m/s^2
  dimension: LT^{-2}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar a_cm sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - a_cm
  pedagogical_notes: No sustituir a_cm antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: K_total
  symbol: K_total
  nombre:
    es: energía cinética total
    en: total kinetic energy
  descripcion:
    es: Energía cinética total usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Total kinetic energy used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: J
  dimension: ML^2T^{-2}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar K_total sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - K_total
  pedagogical_notes: No sustituir K_total antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: E_total
  symbol: E_total
  nombre:
    es: energía mecánica total
    en: total mechanical energy
  descripcion:
    es: Energía mecánica total usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Total mechanical energy used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: J
  dimension: ML^2T^{-2}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar E_total sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - E_total
  pedagogical_notes: No sustituir E_total antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: g
  symbol: g
  nombre:
    es: gravedad
    en: gravitational acceleration
  descripcion:
    es: Gravedad usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Gravitational acceleration used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: m/s^2
  dimension: LT^{-2}
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar g sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - g
  pedagogical_notes: No sustituir g antes de identificar si pertenece a traslación,
    rotación o rodadura.
- id: phi
  symbol: phi
  nombre:
    es: ángulo del plano
    en: incline angle
  descripcion:
    es: Ángulo del plano usada para interpretar rodadura-como-puente-entre-traslacion-y-rotacion.
    en: Incline angle used to interpret rodadura-como-puente-entre-traslacion-y-rotacion.
  unidad_si: rad
  dimension: '1'
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  common_mistake: Usar phi sin comprobar su dominio físico.
  typical_range: Depende del sistema; debe contrastarse con el orden de magnitud del
    problema.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue la convención de giro elegida.
      en: The sign follows the chosen rotational convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero indica ausencia de esa contribución o estado límite según el modelo.
      en: Zero indicates absence of that contribution or a limiting state depending
        on the model.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for:
    - rodadura-como-puente-entre-traslacion-y-rotacion
  graph_binding:
    channels:
    - phi
  pedagogical_notes: No sustituir phi antes de identificar si pertenece a traslación,
    rotación o rodadura.
`;export{n as default};
