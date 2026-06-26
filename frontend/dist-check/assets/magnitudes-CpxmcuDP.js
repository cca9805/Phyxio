const e=`- id: E
  symbol: "E"
  nombre:
    es: Campo eléctrico
    en: Electric field
  descripcion:
    es: Fuerza eléctrica por unidad de carga de prueba positiva en un punto del espacio.
    en: Electric force per unit positive test charge at a point in space.
  unidad_si: "N/C"
  dimension: "[M L T⁻³ I⁻¹]"
  is_vector: true
  components: ["E_x", "E_y", "E_z"]
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - definicion del campo electrico
    - campo de carga puntual
    - fuerza sobre carga de prueba
  common_mistake: Confundir el campo con la fuerza; el campo existe aunque no haya carga de prueba presente.
  typical_range: "Desde 1 N/C (campo terrestre) hasta 10⁶ N/C (condensadores industriales)"
  sign_behavior:
    has_sign: true
    meaning:
      es: El módulo de E es siempre positivo; la dirección es la de la fuerza sobre una carga positiva.
      en: The magnitude of E is always positive; the direction is that of the force on a positive charge.
  zero_behavior:
    allowed: true
    meaning:
      es: Campo nulo en puntos de equilibrio electrostático o interior de conductores en equilibrio.
      en: Zero field at electrostatic equilibrium points or inside conductors in equilibrium.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, ∞)"
  interpretation_role:
    primary_for:
      - calcular la fuerza sobre cualquier carga en un punto
      - determinar el movimiento de cargas libres
    secondary_for:
      - construir líneas de campo
      - calcular diferencia de potencial
  graph_binding:
    channels:
      - y_axis
  pedagogical_notes:
    es: "El campo eléctrico permite separar el problema en dos etapas: primero calcular E de las fuentes, luego aplicar la fuerza sobre cualquier carga. Esto es la esencia del concepto de campo."
    en: "The electric field separates the problem into two stages: first compute E from sources, then apply the force to any charge. This is the essence of the field concept."

- id: F_e
  symbol: "F_e"
  nombre:
    es: Fuerza eléctrica
    en: Electric force
  descripcion:
    es: Fuerza que ejerce el campo eléctrico sobre una carga de prueba colocada en ese punto.
    en: Force exerted by the electric field on a test charge placed at that point.
  unidad_si: "N"
  dimension: "[M L T⁻²]"
  is_vector: true
  components: ["F_ex", "F_ey", "F_ez"]
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - definicion del campo electrico
    - dinamica de cargas en campos
  common_mistake: Creer que la fuerza es intrínseca de la carga; en realidad depende del campo externo en ese punto.
  typical_range: "10⁻¹⁹ N (fuerza sobre electrón en campo débil) a 10⁻¹⁰ N (escala molecular)"
  sign_behavior:
    has_sign: true
    meaning:
      es: Positiva en la dirección del campo para cargas positivas; opuesta para cargas negativas.
      en: Positive along the field direction for positive charges; opposite for negative charges.
  zero_behavior:
    allowed: true
    meaning:
      es: Fuerza nula en puntos donde el campo es cero o sobre carga de prueba nula.
      en: Zero force where the field is zero or on a zero test charge.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for:
      - calcular la aceleración de una carga libre en el campo
    secondary_for:
      - definir operativamente el campo eléctrico
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "F_e es la magnitud observable directamente; el campo E es la abstracción que elimina la dependencia de q_0, dando una propiedad del espacio."
    en: "F_e is the directly observable quantity; E abstracts away the q_0 dependence, yielding a pure property of space."

- id: q_0
  symbol: "q_0"
  nombre:
    es: Carga de prueba
    en: Test charge
  descripcion:
    es: Carga pequeña hipotética que se coloca en un punto para medir el campo sin perturbarlo.
    en: Small hypothetical charge placed at a point to measure the field without disturbing it.
  unidad_si: "C"
  dimension: "[I T]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
    - definicion operativa del campo electrico
  common_mistake: Confundir la carga de prueba con la carga fuente; q_0 no genera el campo que se mide.
  typical_range: "Infinitesimal en teoría; en práctica 10⁻¹² C o menor"
  sign_behavior:
    has_sign: true
    meaning:
      es: Se toma positiva por convención; si fuera negativa la fuerza invertería su dirección.
      en: Taken as positive by convention; if negative the force would reverse direction.
  zero_behavior:
    allowed: false
    meaning:
      es: Una carga de prueba nula haría indeterminada la definición E = F_e / q_0.
      en: A zero test charge would make the definition E = F_e / q_0 undefined.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "q_0 → 0⁺ idealmente"
  interpretation_role:
    primary_for:
      - definicion operativa del campo
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "La carga de prueba ideal tiende a cero para no alterar la distribución de cargas fuente. En la práctica se usa la mínima carga posible."
    en: "The ideal test charge tends to zero so as not to disturb the source charge distribution. In practice the smallest feasible charge is used."

- id: k_e
  symbol: "k_e"
  nombre:
    es: Constante de Coulomb
    en: Coulomb constant
  descripcion:
    es: Constante de proporcionalidad de la ley de Coulomb; vale 8.988×10⁹ N·m²·C⁻².
    en: Proportionality constant in Coulomb's law; equals 8.988×10⁹ N·m²·C⁻².
  unidad_si: "N·m²·C⁻²"
  dimension: "[M L³ T⁻⁴ I⁻²]"
  is_vector: false
  components: []
  category: constant
  physical_role: parameter
  used_in:
    - campo de carga puntual
    - ley de Coulomb
  common_mistake: Olvidar incluir k_e en el cálculo del campo o confundirlo con la permitividad del vacío.
  typical_range: "8.988×10⁹ N·m²·C⁻² (constante exacta en el vacío)"
  sign_behavior:
    has_sign: false
    meaning:
      es: Es siempre positiva; el signo del campo lo determina el signo de la carga fuente.
      en: Always positive; the sign of the field is determined by the sign of the source charge.
  zero_behavior:
    allowed: false
    meaning:
      es: k_e no puede ser cero; su valor es una constante fundamental de la naturaleza.
      en: k_e cannot be zero; its value is a fundamental constant of nature.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[8.988×10⁹, 8.988×10⁹]"
  interpretation_role:
    primary_for:
      - establecer la escala de los campos electrostáticos
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "k_e se relaciona con la permitividad del vacío como k_e = 1/(4πε₀). En medios materiales se sustituye ε₀ por ε = ε_r·ε₀."
    en: "k_e relates to the permittivity of vacuum as k_e = 1/(4πε₀). In material media ε₀ is replaced by ε = ε_r·ε₀."

- id: q_fuente
  symbol: "q_{fuente}"
  nombre:
    es: Carga fuente
    en: Source charge
  descripcion:
    es: Carga que genera el campo eléctrico; su signo determina la dirección del campo.
    en: Charge that generates the electric field; its sign determines the field direction.
  unidad_si: "C"
  dimension: "[I T]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in:
    - campo de carga puntual
    - principio de superposicion
  common_mistake: Confundir la carga fuente con la carga de prueba; la fuente genera el campo, la prueba lo mide.
  typical_range: "10⁻¹⁹ C (electrón) a 10⁻⁶ C (cargas macroscópicas típicas)"
  sign_behavior:
    has_sign: true
    meaning:
      es: Positiva implica campo radial saliente; negativa implica campo radial entrante.
      en: Positive means radially outward field; negative means radially inward field.
  zero_behavior:
    allowed: false
    meaning:
      es: Una carga fuente nula no genera campo eléctrico.
      en: A zero source charge generates no electric field.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for:
      - determinar la dirección y el módulo del campo en todo el espacio
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "El signo de q_fuente invierte completamente el patrón de líneas de campo: cargas positivas son fuentes, cargas negativas son sumideros."
    en: "The sign of q_fuente completely reverses the field line pattern: positive charges are sources, negative charges are sinks."

- id: r
  symbol: "r"
  nombre:
    es: Distancia a la carga fuente
    en: Distance from source charge
  descripcion:
    es: Distancia entre la carga fuente y el punto del espacio donde se evalúa el campo.
    en: Distance between the source charge and the point in space where the field is evaluated.
  unidad_si: "m"
  dimension: "[L]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in:
    - campo de carga puntual
    - ley de Coulomb
  common_mistake: Olvidar que el campo decae con r², no con r; duplicar la distancia reduce el campo a una cuarta parte.
  typical_range: "10⁻¹⁰ m (escala atómica) a varios metros (escala laboratorio)"
  sign_behavior:
    has_sign: false
    meaning:
      es: La distancia es siempre positiva; la dirección del campo la da el vector unitario radial.
      en: Distance is always positive; the field direction is given by the radial unit vector.
  zero_behavior:
    allowed: false
    meaning:
      es: Para r = 0 el campo de una carga puntual diverge; el modelo de carga puntual no es válido a escala sub-atómica.
      en: At r = 0 the field of a point charge diverges; the point-charge model is invalid at sub-atomic scales.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, ∞)"
  interpretation_role:
    primary_for:
      - determinar la intensidad del campo en función de la posición
    secondary_for:
      - trazar graficas E vs r
  graph_binding:
    channels:
      - x_axis
  pedagogical_notes:
    es: "La dependencia 1/r² del campo es la clave para entender por qué las líneas de campo divergen en el espacio tridimensional y la densidad de flujo disminuye con la distancia."
    en: "The 1/r² dependence is key to understanding why field lines diverge in three-dimensional space and flux density decreases with distance."
`;export{e as default};
