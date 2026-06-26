const e=`magnitudes:\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: Momento de inercia\r
    en: Moment of inertia\r
  descripcion:\r
    es: Medida de la resistencia rotacional de un cuerpo respecto a un eje específico. Depende de la cantidad de masa y de su distribución radial respecto al eje.\r
    en: Measure of the rotational resistance of a body relative to a specific axis. Depends on the amount of mass and its radial distribution relative to the axis.\r
  unidad_si: kg·m²\r
  dimension: ML²\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - segunda_ley_rotacional\r
  - energia_rotacional\r
  - radio_giro\r
  common_mistake:\r
    es: Tratar I como propiedad intrínseca del objeto, independiente del eje de giro. Todo cálculo sin eje explícito es incompleto.\r
    en: Treating I as an intrinsic property of the object, independent of the rotation axis. Any calculation without an explicit axis is incomplete.\r
  typical_range:\r
    es: 10⁻³ kg·m² (disco pequeño de laboratorio) a 10³ kg·m² (volante industrial).\r
    en: 10⁻³ kg·m² (small lab disk) to 10³ kg·m² (industrial flywheel).\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positivo o nulo. Es suma de términos m_i·r_i² no negativos. Un I negativo indica error físicamente imposible en los datos.\r
      en: Always positive or zero. It is a sum of non-negative m_i·r_i² terms. A negative I indicates a physically impossible data error.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: I = 0 solo si toda la masa está sobre el eje (caso límite de partícula puntual en el eje). En práctica, I > 0 para cualquier objeto macroscópico.\r
      en: I = 0 only if all mass lies on the axis (limit case of a point mass on the axis). In practice, I > 0 for any macroscopic object.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, ∞)'\r
  interpretation_role:\r
    primary_for:\r
    - alpha\r
    - K_rot\r
    secondary_for:\r
    - omega\r
    - k\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: I no es propied intrínseca del objeto sino del par objeto–eje. La dependencia cuadrática r² significa que doblar la distancia de la masa al eje cuadruplica su contribución a I. Esto es el núcleo físico de toda la dinámica rotacional.\r
    en: I is not an intrinsic property of the object but of the object–axis pair. The quadratic dependence r² means that doubling the mass distance from axis quadruples its contribution to I. This is the physical core of all rotational dynamics.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa total\r
    en: Total mass\r
  descripcion:\r
    es: Masa total del cuerpo rígido o del sistema de partículas utilizada en la fórmula del radio de giro.\r
    en: Total mass of the rigid body or particle system used in the radius of gyration formula.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - radio_giro\r
  common_mistake:\r
    es: Usar el peso (mg, en newtons) en lugar de la masa (kg). O confundir la masa total M con la masa de una partícula individual m_i.\r
    en: Using weight (mg, in newtons) instead of mass (kg). Or confusing total mass M with the mass of an individual particle m_i.\r
  typical_range:\r
    es: 10⁻³ kg a 10⁶ kg según el sistema.\r
    en: 10⁻³ kg to 10⁶ kg depending on the system.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positivo en mecánica clásica. Una masa nula implica ausencia de objeto; sin sentido físico.\r
      en: Always positive in classical mechanics. Zero mass implies absence of object; no physical meaning.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Masa nula hace que I = mk² = 0, lo que solo tendría sentido para un objeto sin materia.\r
      en: Zero mass makes I = mk² = 0, which only makes sense for an object with no matter.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: (0, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - k\r
    secondary_for:\r
    - I\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: La masa es condición necesaria pero no suficiente para determinar I. Dos cuerpos con igual masa total pueden tener inercias rotacionales radicalmente distintas si su distribución espacial es diferente.\r
    en: Mass is necessary but not sufficient to determine I. Two bodies with the same total mass can have radically different rotational inertias if their spatial distribution differs.\r
- id: r\r
  symbol: r\r
  nombre:\r
    es: Distancia al eje\r
    en: Distance to axis\r
  descripcion:\r
    es: Distancia perpendicular desde un elemento de masa hasta el eje de giro.\r
    en: Perpendicular distance from a mass element to the rotation axis.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - definicion_discreta\r
  - definicion_continua\r
  common_mistake:\r
    es: Usar la distancia oblicua o la longitud total del objeto en lugar de la distancia perpendicular al eje. También confundir radio con diámetro.\r
    en: Using the oblique distance or the total object length instead of the perpendicular distance to the axis. Also confusing radius with diameter.\r
  typical_range:\r
    es: 10⁻² a 10¹ m según el tamaño del sistema.\r
    en: 10⁻² to 10¹ m depending on system size.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Es una distancia euclidiana, siempre no negativa. Entra al cuadrado en la fórmula, por lo que r y −r dan la misma contribución a I.\r
      en: It is a Euclidean distance, always non-negative. It enters squared in the formula, so r and −r give the same contribution to I.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: r = 0 significa que el elemento de masa está sobre el eje. Su contribución a I es nula para ese eje.\r
      en: r = 0 means the mass element lies on the axis. Its contribution to I is zero for that axis.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, ∞)'\r
  interpretation_role:\r
    primary_for:\r
    - I\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: La dependencia cuadrática r² es la razón por la que la geometría domina la inercia. Doblar r cuadruplica la contribución de esa masa a I; triplicar r la multiplica por nueve.\r
    en: The quadratic dependence r² is why geometry dominates inertia. Doubling r quadruples that mass element's contribution to I; tripling r multiplies it by nine.\r
- id: k\r
  symbol: k\r
  nombre:\r
    es: Radio de giro\r
    en: Radius of gyration\r
  descripcion:\r
    es: Distancia equivalente donde se podría concentrar toda la masa del cuerpo para obtener el mismo momento de inercia respecto al eje dado.\r
    en: Equivalent distance where all the body's mass could be concentrated to obtain the same moment of inertia relative to the given axis.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - radio_giro\r
  common_mistake:\r
    es: Confundir k con el radio físico del objeto. k es una distancia equivalente geométrica, no una dimensión real del cuerpo.\r
    en: Confusing k with the object's physical radius. k is an equivalent geometric distance, not a real body dimension.\r
  typical_range:\r
    es: Siempre menor o igual al radio máximo del objeto. Para un disco sólido k = R/√2 ≈ 0.707 R.\r
    en: Always less than or equal to the object's maximum radius. For a solid disk k = R/√2 ≈ 0.707 R.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positivo; es una distancia efectiva. Si el cálculo da k negativo, hay un error previo en I o m.\r
      en: Always positive; it is an effective distance. If the calculation gives negative k, there is a prior error in I or m.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: k = 0 implica I = 0, solo posible si toda la masa está sobre el eje. En práctica es un límite teórico.\r
      en: k = 0 implies I = 0, only possible if all mass is on the axis. In practice it is a theoretical limit.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, r_max]'\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - I\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: k condensa toda la geometría del cuerpo en un único número. En ingeniería estructural, los catálogos de perfiles metálicos listan k directamente porque es la magnitud que determina la resistencia a la pandemia rotacional.\r
    en: k condenses the entire body geometry into a single number. In structural engineering, metal profile catalogs list k directly because it determines resistance to rotational buckling.\r
- id: tau\r
  symbol: \\tau\r
  nombre:\r
    es: Torque neto\r
    en: Net torque\r
  descripcion:\r
    es: Momento de fuerza resultante que actúa sobre el cuerpo y produce aceleración angular.\r
    en: Resultant force moment acting on the body and producing angular acceleration.\r
  unidad_si: N·m\r
  dimension: ML²T⁻²\r
  is_vector: true\r
  components:\r
  - \\tau_x\r
  - \\tau_y\r
  - \\tau_z\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - segunda_ley_rotacional\r
  common_mistake:\r
    es: No considerar el ángulo entre la fuerza aplicada y el brazo de palanca. Solo la componente perpendicular al radio produce torque.\r
    en: Not considering the angle between the applied force and the lever arm. Only the component perpendicular to the radius produces torque.\r
  typical_range:\r
    es: 10⁻¹ a 10⁶ N·m dependiendo del sistema.\r
    en: 10⁻¹ to 10⁶ N·m depending on the system.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo indica rotación antihoraria (convención estándar); negativo indica rotación horaria. El signo de τ determina el signo y dirección de α.\r
      en: Positive indicates counterclockwise rotation (standard convention); negative indicates clockwise. The sign of τ determines the sign and direction of α.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: 'τ = 0 implica α = 0: movimiento rotacional uniforme o reposo angular. El sistema no cambia de velocidad de giro.'\r
      en: 'τ = 0 implies α = 0: uniform rotational motion or angular rest. The system does not change its rotation speed.'\r
  value_nature:\r
    kind: signed_scalar_or_vector\r
    nonnegative_only: false\r
    expected_interval: (-∞, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - alpha\r
    secondary_for:\r
    - I\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: 'τ es la causa, α es el efecto, I es el mediador. La interpretación causal es: τ → I → α. No existe α sin τ (a menos que I cambie). No existe relación directa τ–ω sin pasar por α.'\r
    en: 'τ is the cause, α is the effect, I is the mediator. The causal interpretation is: τ → I → α. There is no α without τ (unless I changes). There is no direct τ–ω relation without going through α.'\r
- id: alpha\r
  symbol: \\alpha\r
  nombre:\r
    es: Aceleración angular\r
    en: Angular acceleration\r
  descripcion:\r
    es: Razón de cambio de la velocidad angular del cuerpo en el tiempo.\r
    en: Rate of change of the body's angular velocity over time.\r
  unidad_si: rad/s²\r
  dimension: T⁻²\r
  is_vector: true\r
  components:\r
  - \\alpha_x\r
  - \\alpha_y\r
  - \\alpha_z\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - segunda_ley_rotacional\r
  common_mistake:\r
    es: Olvidar que α es el resultado de τ/I, no un valor libre. Fijarlo arbitrariamente sin conocer τ e I produce contradicciones físicas.\r
    en: Forgetting that α is the result of τ/I, not a free value. Setting it arbitrarily without knowing τ and I produces physical contradictions.\r
  typical_range:\r
    es: 10⁻¹ a 10² rad/s² para sistemas macroscópicos habituales.\r
    en: 10⁻¹ to 10² rad/s² for typical macroscopic systems.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Mismo signo que τ si no hay otras fuerzas. Positivo = aceleración angular en sentido antihorario; negativo = desaceleración o giro horario acelerado.\r
      en: Same sign as τ if no other forces. Positive = angular acceleration counterclockwise; negative = deceleration or accelerated clockwise rotation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: α = 0 con τ ≠ 0 e I finita es una contradicción. α = 0 solo es físicamente coherente cuando τ = 0 o cuando I → ∞.\r
      en: α = 0 with τ ≠ 0 and finite I is a contradiction. α = 0 is physically coherent only when τ = 0 or when I → ∞.\r
  value_nature:\r
    kind: signed_scalar_or_vector\r
    nonnegative_only: false\r
    expected_interval: (-∞, ∞)\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - tau\r
    - I\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: 'Cuanto mayor sea I, menor será α para el mismo τ. Este es el mecanismo de filtrado inercial: una gran inercia suaviza los cambios bruscos de velocidad angular, actuando como amortiguador dinámico.'\r
    en: 'The larger I is, the smaller α will be for the same τ. This is the inertial filtering mechanism: large inertia smooths abrupt angular velocity changes, acting as a dynamic damper.'\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: Velocidad angular\r
    en: Angular velocity\r
  descripcion:\r
    es: Velocidad instantánea de giro del cuerpo en radianes por segundo.\r
    en: Instantaneous rotation speed of the body in radians per second.\r
  unidad_si: rad/s\r
  dimension: T⁻¹\r
  is_vector: true\r
  components:\r
  - \\omega_x\r
  - \\omega_y\r
  - \\omega_z\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - energia_rotacional\r
  common_mistake:\r
    es: No elevar omega al cuadrado en K_rot = ½Iω². También confundir rad/s con RPM (1 RPM = 2π/60 rad/s ≈ 0.105 rad/s).\r
    en: Not squaring omega in K_rot = ½Iω². Also confusing rad/s with RPM (1 RPM = 2π/60 rad/s ≈ 0.105 rad/s).\r
  typical_range:\r
    es: 1 a 1000 rad/s para la mayoría de sistemas mecánicos.\r
    en: 1 to 1000 rad/s for most mechanical systems.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica el sentido de giro. Sin embargo, entra al cuadrado en K_rot, por lo que la energía cinética es siempre positiva independientemente del sentido.\r
      en: The sign indicates the direction of rotation. However, it enters squared in K_rot, so kinetic energy is always positive regardless of direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: 'ω = 0 implica K_rot = 0: el cuerpo está en reposo rotacional. La inercia I existe aunque el cuerpo no gire.'\r
      en: 'ω = 0 implies K_rot = 0: the body is in rotational rest. Inertia I exists even if the body does not rotate.'\r
  value_nature:\r
    kind: signed_scalar_or_vector\r
    nonnegative_only: false\r
    expected_interval: (-∞, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - K_rot\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: En K_rot = ½Iω², ω entra al cuadrado pero I no. Duplicar ω cuadruplica K_rot; duplicar I solo la dobla. Esto explica por qué la velocidad domina energéticamente sobre la inercia en sistemas de almacenamiento.\r
    en: In K_rot = ½Iω², ω enters squared but I does not. Doubling ω quadruples K_rot; doubling I only doubles it. This explains why velocity dominates energetically over inertia in storage systems.\r
- id: K_rot\r
  symbol: K_{\\mathrm{rot}}\r
  nombre:\r
    es: Energía cinética rotacional\r
    en: Rotational kinetic energy\r
  descripcion:\r
    es: Energía cinética asociada al movimiento de rotación del cuerpo rígido.\r
    en: Kinetic energy associated with the rigid body's rotational motion.\r
  unidad_si: J\r
  dimension: ML²T⁻²\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - energia_rotacional\r
  common_mistake:\r
    es: Mezclar K_rot con la energía cinética traslacional sin sumar ambas en un cuerpo que también se desplaza (rodadura, caída).\r
    en: Mixing K_rot with translational kinetic energy without summing both in a body that also translates (rolling, falling).\r
  typical_range:\r
    es: 1 a 10⁶ J dependiendo de la masa, geometría y velocidad angular.\r
    en: 1 to 10⁶ J depending on mass, geometry, and angular velocity.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva o nula. La energía cinética no puede ser negativa. Un resultado negativo indica error de cálculo, no una situación física real.\r
      en: Always positive or zero. Kinetic energy cannot be negative. A negative result indicates a calculation error, not a real physical situation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: 'K_rot = 0 implica ω = 0: el cuerpo está en reposo rotacional instantáneo.'\r
      en: 'K_rot = 0 implies ω = 0: the body is in instantaneous rotational rest.'\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, ∞)'\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - omega\r
    - I\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: K_rot cuantifica la energía 'almacenada' en el giro. En diseño de volantes de inercia (flywheels) y sistemas KERS, saber K_rot e I permite calcular ω instantáneamente, lo que es vital para el control de potencia.\r
    en: K_rot quantifies the energy 'stored' in rotation. In flywheel and KERS system design, knowing K_rot and I instantly gives ω, which is vital for power control.\r
- id: m_i\r
  symbol: m_i\r
  nombre:\r
    es: Masa de la partícula i\r
    en: Mass of particle i\r
  descripcion:\r
    es: Masa de la i-ésima partícula puntual en el sistema discreto de la definición de momento de inercia.\r
    en: Mass of the i-th point particle in the discrete system for the moment of inertia definition.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: parameter\r
  used_in:\r
  - definicion_discreta\r
  common_mistake:\r
    es: Sumar las masas m_i sin multiplicar por r_i². El error produce I en unidades incorrectas (kg en vez de kg·m²).\r
    en: Summing masses m_i without multiplying by r_i². The error produces I with incorrect units (kg instead of kg·m²).\r
  typical_range:\r
    es: Depende del sistema; desde gramos (experimentos de laboratorio) hasta toneladas (maquinaria industrial).\r
    en: Depends on the system; from grams (lab experiments) to tonnes (industrial machinery).\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positivo. Una partícula con masa nula no existe físicamente en el modelado clásico.\r
      en: Always positive. A massless particle does not exist physically in classical modeling.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Masa nula no contribuye a I. La partícula deja de tener significado físico en este contexto.\r
      en: Zero mass does not contribute to I. The particle loses physical meaning in this context.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: (0, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - I\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: m_i es cada masa individual en la suma discreta I = Σm_i·r_i². Su contribución a I escala cuadráticamente con r_i; la partícula más lejana suele dominar la suma total.\r
    en: m_i is each individual mass in the discrete sum I = Σm_i·r_i². Its contribution to I scales quadratically with r_i; the farthest particle usually dominates the total sum.\r
- id: r_i\r
  symbol: r_i\r
  nombre:\r
    es: Distancia de la partícula i al eje\r
    en: Distance of particle i to the axis\r
  descripcion:\r
    es: Distancia perpendicular de la i-ésima partícula puntual al eje de rotación en el sistema discreto.\r
    en: Perpendicular distance of the i-th point particle to the rotation axis in the discrete system.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: parameter\r
  used_in:\r
  - definicion_discreta\r
  common_mistake:\r
    es: Usar la distancia total desde el origen en lugar de la distancia perpendicular al eje de giro.\r
    en: Using the total distance from the origin instead of the perpendicular distance to the rotation axis.\r
  typical_range:\r
    es: Depende del sistema; desde milímetros hasta metros.\r
    en: Depends on the system; from millimeters to meters.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Es una distancia, siempre no negativa. Entra al cuadrado en la sumatoria, eliminando cualquier ambigüedad de signo.\r
      en: It is a distance, always non-negative. It enters squared in the summation, eliminating any sign ambiguity.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si r_i = 0 la partícula está sobre el eje y no aporta a I para ese eje.\r
      en: If r_i = 0 the particle is on the axis and contributes nothing to I for that axis.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, ∞)'\r
  interpretation_role:\r
    primary_for:\r
    - I\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: r_i es el "brazo de palanca rotacional" de cada partícula. Aparece al cuadrado, lo que hace que su impacto en I sea no lineal y que las partículas lejanas al eje sean desproporcionadamente influyentes.\r
    en: r_i is the "rotational lever arm" of each particle. It appears squared, making its impact on I non-linear and distant particles disproportionately influential.\r
- id: dm\r
  symbol: dm\r
  nombre:\r
    es: Elemento diferencial de masa\r
    en: Differential mass element\r
  descripcion:\r
    es: Elemento infinitesimal de masa en la integración para cuerpos continuos; variable de integración en I = ∫r²dm.\r
    en: Infinitesimal mass element in the integration for continuous bodies; integration variable in I = ∫r²dm.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: parameter\r
  used_in:\r
  - definicion_continua\r
  common_mistake:\r
    es: Tratar dm como la masa total del cuerpo en lugar de como variable de integración infinitesimal.\r
    en: Treating dm as the total body mass instead of as an infinitesimal integration variable.\r
  typical_range:\r
    es: Infinitesimal; no tiene valor numérico finito en sí mismo. Su integral da la masa total M.\r
    en: Infinitesimal; has no finite numerical value by itself. Its integral gives total mass M.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positivo. La densidad de materia es no negativa en mecánica clásica.\r
      en: Always positive. Matter density is non-negative in classical mechanics.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: dm no tiene valor puntual finito. Su sentido es solo como límite del proceso de integración.\r
      en: dm has no finite point value. Its meaning is only as a limit of the integration process.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: (0, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - I\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: dm representa cada "rodaja" infinitesimal de masa del objeto continuo. Conecta la distribución geométrica (a través de ρ·dV) con la inercia total mediante la integral I = ∫r²dm.\r
    en: dm represents each infinitesimal "slice" of mass of the continuous object. It connects the geometric distribution (through ρ·dV) with total inertia through the integral I = ∫r²dm.\r
- id: rho\r
  symbol: \\rho\r
  nombre:\r
    es: Densidad de masa\r
    en: Mass density\r
  descripcion:\r
    es: Relación entre la masa y el volumen (o longitud/área) del cuerpo. Determina cómo se distribuye dm en el espacio.\r
    en: Ratio between mass and volume (or length/area) of the body. Determines how dm is distributed in space.\r
  unidad_si: kg/m³\r
  dimension: ML⁻³\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: parameter\r
  used_in:\r
  - definicion_continua\r
  - ejemplos.md\r
  common_mistake:\r
    es: Asumir densidad uniforme en sistemas donde la masa varía con la posición (ρ dependiente de r).\r
    en: Assuming uniform density in systems where mass varies with position (ρ dependent on r).\r
  typical_range:\r
    es: 1.2 kg/m³ (aire) a 22,500 kg/m³ (osmio).\r
    en: 1.2 kg/m³ (air) to 22,500 kg/m³ (osmium).\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva. Una densidad negativa implicaría materia exótica no considerada en este leaf.\r
      en: Always positive. A negative density would imply exotic matter not considered in this leaf.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Densidad nula implica ausencia de materia, invalidando el cálculo de inercia del cuerpo.\r
      en: Zero density implies absence of matter, invalidating the body's inertia calculation.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: (0, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - dm\r
    secondary_for:\r
    - I\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: ρ es el puente entre la geometría pura y la masa real. Para cuerpos del mismo tamaño, el objeto más denso tendrá un I proporcionalmente mayor.\r
    en: ρ is the bridge between pure geometry and real mass. For bodies of the same size, the denser object will have a proportionally larger I.\r
- id: sigma\r
  symbol: \\sigma\r
  nombre:\r
    es: Tensión o densidad superficial\r
    en: Stress or surface density\r
  descripcion:\r
    es: Magnitud que representa la distribución de masa por unidad de área o la tensión mecánica inducida por la rotación.\r
    en: Quantity representing mass distribution per unit area or the mechanical stress induced by rotation.\r
  unidad_si: N/m²\r
  dimension: ML⁻¹T⁻²\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: state\r
  used_in:\r
  - aplicaciones.md\r
  common_mistake:\r
    es: Confundir la sigma de tensión mecánica (N/m²) con la sigma de densidad superficial (kg/m²). El contexto del problema debe aclarar las dimensiones.\r
    en: Confusing stress sigma (N/m²) with surface density sigma (kg/m²). Problem context must clarify dimensions.\r
  typical_range:\r
    es: Varía ampliamente según el material y la velocidad de giro.\r
    en: Varies widely depending on material and spin speed.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Generalmente tratada como magnitud positiva en este contexto de límites de seguridad.\r
      en: Generally treated as a positive magnitude in this safety limit context.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Tensión nula implica reposo o ausencia de fuerzas centrífugas.\r
      en: Zero stress implies rest or absence of centrifugal forces.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, ∞)'\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - omega\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: En aplicaciones de ingeniería, σ impone el límite físico a cuánto puede girar un cuerpo antes de fracturarse. Es el freno real a la optimización de I.\r
    en: In engineering applications, σ imposes the physical limit on how much a body can rotate before fracturing. It is the real brake on I optimization.\r
- id: R_geo\r
  symbol: R\r
  nombre:\r
    es: Radio del cuerpo\r
    en: Body radius\r
  descripcion:\r
    es: Dimensión radial máxima o característica del objeto geométrico (disco, anillo, esfera).\r
    en: Maximum radial dimension or characteristic of the geometric object (disk, ring, sphere).\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: parameter\r
  used_in:\r
  - ejemplos.md\r
  - aplicaciones.md\r
  common_mistake:\r
    es: Confundir R (radio exterior fijo) con r (distancia variable del elemento de masa al eje).\r
    en: Confusing R (fixed outer radius) with r (variable distance of mass element from axis).\r
  typical_range:\r
    es: 10⁻³ a 10² m.\r
    en: 10⁻³ to 10² m.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positivo; es una dimensión física.\r
      en: Always positive; it is a physical dimension.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Un radio nulo colapsa el objeto en un punto o una línea, cambiando su modelo de inercia.\r
      en: A zero radius collapses the object into a point or line, changing its inertia model.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: (0, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - I\r
    secondary_for:\r
    - k\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: R define el 'techo' espacial de la distribución de masa. La mayoría de las fórmulas de ingeniería expresan I como una fracción de MR².\r
    en: R defines the spatial 'ceiling' of mass distribution. Most engineering formulas express I as a fraction of MR².\r
- id: K_gen\r
  symbol: K\r
  nombre:\r
    es: Energía cinética total\r
    en: Total kinetic energy\r
  descripcion:\r
    es: Suma de las energías cinéticas de traslación y rotación del sistema.\r
    en: Sum of translational and rotational kinetic energies of the system.\r
  unidad_si: J\r
  dimension: ML²T⁻²\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - ejemplos.md\r
  common_mistake:\r
    es: Olvidar el término rotacional en cuerpos que rinden rodadura.\r
    en: Forgetting the rotational term in bodies undergoing rolling.\r
  typical_range:\r
    es: 10⁻³ a 10⁷ J.\r
    en: 10⁻³ to 10⁷ J.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva.\r
      en: Always positive.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Reposo absoluto del sistema.\r
      en: System at absolute rest.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, ∞)'\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - I\r
    - omega\r
    - m\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: K es la moneda de cambio del sistema dinámico. En el momento de inercia, nos interesa cuánta de esta energía se debe específicamente al giro.\r
    en: K is the currency of the dynamic system. In moment of inertia, we care about how much of this energy is specifically due to rotation.\r
- id: L_r\r
  symbol: L_r\r
  nombre:\r
    es: Longitud de referencia radial\r
    en: Radial reference length\r
  descripcion:\r
    es: Parámetro de longitud utilizado en geometrías no circulares o para definir escalas en la distribución de masa.\r
    en: Length parameter used in non-circular geometries or to define scales in mass distribution.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: parameter\r
  used_in:\r
  - formulas.yaml\r
  common_mistake:\r
    es: Confundir con la longitud total del objeto.\r
    en: Confusing with the object's total length.\r
  typical_range:\r
    es: 10⁻² a 10¹ m.\r
    en: 10⁻² to 10¹ m.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Dimensión geométrica no negativa.\r
      en: Non-negative geometric dimension.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Escala nula invalida la definición de la distribución.\r
      en: Zero scale invalidates the distribution definition.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: (0, ∞)\r
  interpretation_role:\r
    primary_for:\r
    - I\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: L_r permite generalizar el concepto de radio a cuerpos con formas más complejas donde la inercia no depende de un único R.\r
    en: L_r allows generalizing the radius concept to bodies with more complex shapes where inertia doesn't depend on a single R.\r
- id: sigma_r\r
  symbol: \\sigma_r\r
  nombre:\r
    es: Densidad superficial radial\r
    en: Radial surface density\r
  descripcion:\r
    es: Distribución de masa por unidad de área que depende de la distancia al centro o eje.\r
    en: Mass distribution per unit area depending on distance from center or axis.\r
  unidad_si: kg/m²\r
  dimension: ML⁻²\r
  is_vector: false\r
  components: null\r
  category: auxiliary\r
  physical_role: parameter\r
  used_in:\r
  - definicion_continua\r
  common_mistake:\r
    es: Integrar como si fuera constante cuando existe un gradiente radial.\r
    en: Integrating as if constant when a radial gradient exists.\r
  typical_range:\r
    es: Depende de la aplicación (discos de freno, galaxias).\r
    en: Depends on the application (brake disks, galaxies).\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva.\r
      en: Always positive.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Hueco o ausencia de masa en esa corona radial.\r
      en: Hollow or mass absence in that radial annulus.\r
  value_nature:\r
    kind: continuous_scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, ∞)'\r
  interpretation_role:\r
    primary_for:\r
    - dm\r
    secondary_for:\r
    - I\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: La densidad radial es clave para entender por qué los objetos con masa concentrada en la periferia tienen momentos de inercia mayores.\r
    en: Radial density is key to understanding why objects with mass concentrated at the periphery have larger moments of inertia.\r
`;export{e as default};
