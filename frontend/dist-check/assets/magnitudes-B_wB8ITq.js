const e=`- id: B
  symbol: "B"
  nombre:
    es: Campo magnético
    en: Magnetic field
  descripcion:
    es: Magnitud vectorial que cuantifica la influencia magnética en un punto del espacio; determina la fuerza sobre una carga en movimiento.
    en: Vector quantity quantifying the magnetic influence at a point in space; determines the force on a moving charge.
  unidad_si: "T"
  dimension: "[M T⁻² I⁻¹]"
  is_vector: true
  components: ["B_x", "B_y", "B_z"]
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - fuerza de Lorentz magnetica
    - campo de hilo recto
    - flujo magnetico
  common_mistake: Confundir B con la fuerza magnética; B existe independientemente de si hay cargas en movimiento presentes que lo detecten.
  typical_range: "5×10⁻⁵ T (campo terrestre) a 10 T (imanes de resonancia magnética)"
  sign_behavior:
    has_sign: true
    meaning:
      es: El módulo de B es siempre positivo; la dirección sigue la regla de la mano derecha respecto a la corriente fuente.
      en: The magnitude of B is always positive; the direction follows the right-hand rule with respect to the source current.
  zero_behavior:
    allowed: true
    meaning:
      es: Campo nulo en puntos de cancelación entre fuentes magnéticas opuestas o en el eje de simetría de configuraciones especiales.
      en: Zero field at cancellation points between opposing magnetic sources or on the symmetry axis of special configurations.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, ∞)"
  interpretation_role:
    primary_for:
      - calcular la fuerza sobre una carga en movimiento
      - determinar la trayectoria de partículas cargadas
    secondary_for:
      - calcular flujo magnético
      - inducción electromagnética
  graph_binding:
    channels:
      - y_axis
  pedagogical_notes:
    es: "B separa el problema en dos etapas: primero calcular el campo de las fuentes, luego aplicar la fuerza sobre cualquier carga móvil. Análogo conceptual exacto de E en electrostática."
    en: "B separates the problem into two stages: first compute the field from sources, then apply the force on any moving charge. Exact conceptual analog of E in electrostatics."

- id: F_m
  symbol: "F_m"
  nombre:
    es: Fuerza magnética
    en: Magnetic force
  descripcion:
    es: Fuerza que ejerce el campo magnético sobre una carga en movimiento; siempre perpendicular a la velocidad y al campo.
    en: Force exerted by the magnetic field on a moving charge; always perpendicular to both the velocity and the field.
  unidad_si: "N"
  dimension: "[M L T⁻²]"
  is_vector: true
  components: ["F_mx", "F_my", "F_mz"]
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - fuerza de Lorentz magnetica
    - movimiento circular de cargas
  common_mistake: Creer que la fuerza magnética puede realizar trabajo; al ser siempre perpendicular a la velocidad, no transfiere energía cinética.
  typical_range: "10⁻²⁰ N (protón en campo terrestre) a 10⁻¹³ N (partícula en acelerador)"
  sign_behavior:
    has_sign: true
    meaning:
      es: El sentido de F_m depende del signo de la carga q y del producto vectorial v × B.
      en: The direction of F_m depends on the sign of charge q and the cross product v × B.
  zero_behavior:
    allowed: true
    meaning:
      es: Fuerza nula cuando la velocidad es paralela o antiparalela a B, o cuando la carga es nula.
      en: Zero force when velocity is parallel or antiparallel to B, or when the charge is zero.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for:
      - describir la trayectoria de partículas en campos magnéticos
    secondary_for:
      - diseño de selectores de velocidad
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "F_m nunca realiza trabajo: la velocidad cambia de dirección pero no de módulo en un campo magnético puro. Esto distingue radicalmente el campo magnético del eléctrico."
    en: "F_m never does work: speed changes direction but not magnitude in a pure magnetic field. This radically distinguishes the magnetic field from the electric field."

- id: q
  symbol: "q"
  nombre:
    es: Carga eléctrica
    en: Electric charge
  descripcion:
    es: Propiedad intrínseca de la partícula que determina su respuesta al campo magnético; solo las cargas en movimiento interactúan con B.
    en: Intrinsic property of the particle determining its response to the magnetic field; only moving charges interact with B.
  unidad_si: "C"
  dimension: "[I T]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
    - fuerza de Lorentz magnetica
  common_mistake: Aplicar la fuerza magnética a cargas en reposo; B no ejerce fuerza sobre cargas estáticas.
  typical_range: "1.6×10⁻¹⁹ C (carga elemental) a 10⁻⁶ C (cargas macroscópicas)"
  sign_behavior:
    has_sign: true
    meaning:
      es: Positiva invierte la dirección de F_m respecto a negativa; el módulo es el mismo para igual rapidez.
      en: Positive reverses the direction of F_m compared to negative; the magnitude is the same for equal speed.
  zero_behavior:
    allowed: false
    meaning:
      es: Una partícula sin carga no interactúa con B; la fuerza magnética es siempre nula para q = 0.
      en: An uncharged particle does not interact with B; the magnetic force is always zero for q = 0.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for:
      - determinar el sentido de la fuerza magnética
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "El signo de q invierte completamente la dirección de F_m. Electrones y protones en el mismo B se curvan en sentidos opuestos, lo que es la base de los espectrómetros de masas."
    en: "The sign of q completely reverses the direction of F_m. Electrons and protons in the same B curve in opposite directions, which is the basis of mass spectrometers."

- id: v
  symbol: "v"
  nombre:
    es: Velocidad de la carga
    en: Charge velocity
  descripcion:
    es: Velocidad de la carga eléctrica en el punto donde se evalúa la fuerza magnética; solo la componente perpendicular a B contribuye a la fuerza.
    en: Velocity of the electric charge at the point where the magnetic force is evaluated; only the component perpendicular to B contributes to the force.
  unidad_si: "m/s"
  dimension: "[L T⁻¹]"
  is_vector: true
  components: ["v_x", "v_y", "v_z"]
  category: state
  physical_role: core_physical_quantity
  used_in:
    - fuerza de Lorentz magnetica
    - movimiento circular en campo magnetico
  common_mistake: Usar el módulo de v sin considerar el ángulo con B; si v es paralela a B la fuerza es nula aunque v sea grande.
  typical_range: "10² m/s (iones en plasma frío) a 10⁷ m/s (partículas en aceleradores de laboratorio)"
  sign_behavior:
    has_sign: true
    meaning:
      es: La dirección de v junto con B determina la dirección de F_m mediante la regla de la mano derecha.
      en: The direction of v together with B determines the direction of F_m via the right-hand rule.
  zero_behavior:
    allowed: false
    meaning:
      es: Una carga en reposo (v = 0) no experimenta fuerza magnética alguna.
      en: A charge at rest (v = 0) experiences no magnetic force whatsoever.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, c)"
  interpretation_role:
    primary_for:
      - calcular la fuerza de Lorentz magnética
    secondary_for:
      - radio de curvatura en movimiento circular
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "Solo la componente de v perpendicular a B produce fuerza. Si v forma un ángulo θ con B, la fuerza es proporcional a sin(θ); para θ = 90° la fuerza es máxima."
    en: "Only the component of v perpendicular to B produces force. If v makes angle θ with B, the force is proportional to sin(θ); at θ = 90° the force is maximum."

- id: mu_0
  symbol: "\\\\mu_0"
  nombre:
    es: Permeabilidad del vacío
    en: Permeability of vacuum
  descripcion:
    es: Constante fundamental que cuantifica la respuesta magnética del vacío; vale 4π×10⁻⁷ T·m·A⁻¹ exactamente.
    en: Fundamental constant quantifying the magnetic response of vacuum; exactly 4π×10⁻⁷ T·m·A⁻¹.
  unidad_si: "T·m·A⁻¹"
  dimension: "[M L T⁻² I⁻²]"
  is_vector: false
  components: []
  category: constant
  physical_role: parameter
  used_in:
    - campo de hilo recto
    - ley de Biot-Savart
    - ley de Ampere
  common_mistake: Confundir mu_0 con la permitividad del vacío epsilon_0; son constantes distintas para fenómenos eléctrico y magnético respectivamente.
  typical_range: "4π×10⁻⁷ T·m·A⁻¹ (constante exacta en el vacío)"
  sign_behavior:
    has_sign: false
    meaning:
      es: Siempre positiva; determina la escala de los campos magnéticos generados por corrientes.
      en: Always positive; determines the scale of magnetic fields generated by currents.
  zero_behavior:
    allowed: false
    meaning:
      es: mu_0 es una constante fundamental; no puede ser cero.
      en: mu_0 is a fundamental constant; it cannot be zero.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[4π×10⁻⁷, 4π×10⁻⁷]"
  interpretation_role:
    primary_for:
      - establecer la escala del campo magnético de corrientes
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "mu_0 y epsilon_0 están relacionados por c² = 1/(mu_0·epsilon_0), donde c es la velocidad de la luz. Esta relación fue la clave que llevó a Maxwell a identificar la luz como onda electromagnética."
    en: "mu_0 and epsilon_0 are related by c² = 1/(mu_0·epsilon_0), where c is the speed of light. This relation was the key that led Maxwell to identify light as an electromagnetic wave."

- id: I
  symbol: "I"
  nombre:
    es: Intensidad de corriente
    en: Electric current intensity
  descripcion:
    es: Flujo de carga eléctrica por unidad de tiempo a través del hilo conductor; fuente del campo magnético en el modelo de hilo recto.
    en: Flow of electric charge per unit time through the conductor; source of the magnetic field in the straight-wire model.
  unidad_si: "A"
  dimension: "[I]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in:
    - campo de hilo recto
    - ley de Ampere
    - ley de Biot-Savart
  common_mistake: Confundir la corriente I con la carga que fluye; I es la tasa de flujo (carga por tiempo), no la carga total.
  typical_range: "10⁻⁶ A (circuitos de señal) a 10⁴ A (arcos eléctricos industriales)"
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo de I define el sentido de la corriente y, mediante la regla de la mano derecha, la dirección del campo circular que genera.
      en: The sign of I defines the current direction and, via the right-hand rule, the direction of the circular field it generates.
  zero_behavior:
    allowed: false
    meaning:
      es: Una corriente nula no genera campo magnético; el modelo de hilo recto requiere I distinta de cero.
      en: Zero current generates no magnetic field; the straight-wire model requires I to be nonzero.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for:
      - determinar la intensidad del campo magnético de un hilo recto
    secondary_for:
      - diseño de electroimanes y bobinas
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "Duplicar I duplica B en todo punto. La proporcionalidad lineal entre I y B es la base del funcionamiento de los electroimanes: más amperios implica más campo."
    en: "Doubling I doubles B everywhere. The linear proportionality between I and B is the basis of electromagnet operation: more amperes means more field."

- id: r
  symbol: "r"
  nombre:
    es: Distancia al hilo conductor
    en: Distance to the wire
  descripcion:
    es: Distancia perpendicular entre el hilo conductor y el punto del espacio donde se evalúa el campo magnético.
    en: Perpendicular distance between the conductor and the point in space where the magnetic field is evaluated.
  unidad_si: "m"
  dimension: "[L]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in:
    - campo de hilo recto
    - ley de Biot-Savart
  common_mistake: Olvidar que el campo de un hilo recto decae con 1/r (no con 1/r²), confundiendo este resultado con el campo coulombiano de carga puntual.
  typical_range: "10⁻³ m (interior de un motor) a varios metros (líneas de alta tensión)"
  sign_behavior:
    has_sign: false
    meaning:
      es: La distancia es siempre positiva; la dirección del campo la determina la regla de la mano derecha aplicada a la corriente.
      en: Distance is always positive; the field direction is determined by the right-hand rule applied to the current.
  zero_behavior:
    allowed: false
    meaning:
      es: Para r = 0 el campo de un hilo recto infinito diverge; el modelo de hilo recto no es válido dentro del conductor.
      en: At r = 0 the field of an infinite straight wire diverges; the straight-wire model is not valid inside the conductor.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, ∞)"
  interpretation_role:
    primary_for:
      - determinar la intensidad del campo en función de la posición
    secondary_for:
      - trazar gráficas B vs r
  graph_binding:
    channels:
      - x_axis
  pedagogical_notes:
    es: "A diferencia del campo eléctrico de carga puntual (1/r²), el campo de un hilo recto infinito decae como 1/r. Duplicar la distancia reduce B a la mitad, no a una cuarta parte."
    en: "Unlike the point-charge electric field (1/r²), the field of an infinite straight wire decays as 1/r. Doubling the distance halves B, not quarters it."

- id: sin_theta
  symbol: "\\\\sin\\\\theta"
  nombre:
    es: Seno del ángulo entre v y B
    en: Sine of the angle between v and B
  descripcion:
    es: Factor adimensional que cuantifica la componente perpendicular de la velocidad respecto al campo; vale 1 cuando v es perpendicular a B y 0 cuando son paralelos.
    en: Dimensionless factor quantifying the velocity component perpendicular to the field; equals 1 when v is perpendicular to B and 0 when parallel.
  unidad_si: "1"
  dimension: "[1]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
    - fuerza de Lorentz magnetica
  common_mistake: Olvidar este factor y usar F_m = q·v·B sin considerar el ángulo; da el valor máximo posible cuando el ángulo real no es 90°.
  typical_range: "0 a 1 (adimensional)"
  sign_behavior:
    has_sign: false
    meaning:
      es: Siempre entre 0 y 1; el signo de la fuerza lo determina el signo de q mediante el producto vectorial.
      en: Always between 0 and 1; the force sign is determined by the sign of q via the cross product.
  zero_behavior:
    allowed: true
    meaning:
      es: sin_theta = 0 cuando v es paralela a B; la fuerza magnética es nula aunque haya campo y velocidad.
      en: sin_theta = 0 when v is parallel to B; the magnetic force is zero even if there is field and velocity.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, 1]"
  interpretation_role:
    primary_for:
      - modular la fuerza de Lorentz según la orientación relativa de v y B
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "El factor sin_theta es el que hace que la fuerza magnética sea nula para movimiento paralelo al campo. Muchos errores de cálculo provienen de ignorarlo."
    en: "The sin_theta factor is what makes the magnetic force zero for motion parallel to the field. Many calculation errors come from ignoring it."
`;export{e as default};
