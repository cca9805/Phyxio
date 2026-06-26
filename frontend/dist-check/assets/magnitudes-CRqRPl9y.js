const e=`- id: v_fase_flex
  symbol: "v_f"
  nombre:
    es: Velocidad de fase de la onda flexional
    en: Flexural wave phase velocity
  descripcion:
    es: "Velocidad a la que se desplaza un frente de fase constante de la onda de flexión. Depende de la frecuencia porque la propagación es dispersiva."
    en: "Speed at which a constant-phase wavefront of the bending wave travels. It depends on frequency because propagation is dispersive."
  unidad_si: m/s
  dimension: "[L T⁻¹]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - teoria
    - ejemplos
    - interpretacion
    - graficos
  common_mistake: "Confundir la velocidad de fase con la velocidad de grupo; en ondas flexionales la velocidad de grupo es el doble de la de fase."
  typical_range: "10 m/s (baja frecuencia, polímero) a 5000 m/s (alta frecuencia, acero)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La velocidad de fase es siempre positiva; indica la rapidez de desplazamiento de un patrón de fase."
      en: "Phase velocity is always positive; it indicates how fast a phase pattern travels."
  zero_behavior:
    allowed: false
    meaning:
      es: "Velocidad de fase nula implicaría frecuencia nula, que no corresponde a una onda de flexión propagante."
      en: "Zero phase velocity would imply zero frequency, which does not correspond to a propagating bending wave."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "caracterizacion de la dispersion"
      - "estimacion de longitud de onda"
    secondary_for:
      - "calculo de velocidad de grupo"
  graph_binding:
    channels:
      - "phase_velocity_curve"
  pedagogical_notes:
    es: "La velocidad de fase flexional crece con la raíz cuadrada de la frecuencia. Esto significa que las ondas de alta frecuencia viajan más rápido, al contrario de lo que ocurre en muchos otros sistemas dispersivos."
    en: "Flexural phase velocity grows with the square root of frequency. This means high-frequency waves travel faster, opposite to what happens in many other dispersive systems."

- id: v_grupo_flex
  symbol: "v_g"
  nombre:
    es: Velocidad de grupo de la onda flexional
    en: Flexural wave group velocity
  descripcion:
    es: "Velocidad a la que se transporta la energía del paquete de ondas de flexión. En el modelo de Euler-Bernoulli es exactamente el doble de la velocidad de fase."
    en: "Speed at which energy of the bending wave packet is transported. In the Euler-Bernoulli model it is exactly twice the phase velocity."
  unidad_si: m/s
  dimension: "[L T⁻¹]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - teoria
    - ejemplos
    - interpretacion
    - graficos
  common_mistake: "Creer que la velocidad de grupo es menor que la de fase. En ondas flexionales de Euler-Bernoulli ocurre lo contrario."
  typical_range: "20 m/s a 10 000 m/s"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La velocidad de grupo es siempre positiva para ondas propagantes."
      en: "Group velocity is always positive for propagating waves."
  zero_behavior:
    allowed: false
    meaning:
      es: "Una velocidad de grupo nula indicaría una onda estacionaria, no una onda propagante."
      en: "Zero group velocity would indicate a standing wave, not a propagating wave."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "transporte de energia vibratoria"
      - "tiempo de llegada de perturbaciones"
    secondary_for:
      - "comparacion con velocidades longitudinales"
  graph_binding:
    channels:
      - "group_velocity_curve"
  pedagogical_notes:
    es: "En el modelo de Euler-Bernoulli la relación v_g = 2·v_f es exacta. Esta relación 2:1 entre velocidad de grupo y de fase es una firma inequívoca de la dispersión cuadrática (omega proporcional a k²)."
    en: "In the Euler-Bernoulli model the relation v_g = 2·v_f is exact. This 2:1 ratio between group and phase velocity is an unambiguous signature of quadratic dispersion (omega proportional to k²)."

- id: E_young
  symbol: "E"
  nombre:
    es: Módulo de Young
    en: Young's modulus
  descripcion:
    es: "Rigidez elástica del material de la viga ante deformación axial; junto con el momento de inercia determina la rigidez a la flexión."
    en: "Elastic stiffness of the beam material under axial deformation; together with the moment of inertia determines bending stiffness."
  unidad_si: Pa
  dimension: "[M L⁻¹ T⁻²]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
    - teoria
    - formulas
    - interpretacion
  common_mistake: "Usar el valor en GPa directamente sin convertir a Pa, produciendo velocidades con errores de factor 31 600."
  typical_range: "0.001 GPa (goma) a 400 GPa (diamante)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "Siempre positivo para cualquier material sólido."
      en: "Always positive for any solid material."
  zero_behavior:
    allowed: false
    meaning:
      es: "Módulo nulo implicaría un fluido sin capacidad de transmitir ondas de flexión."
      en: "Zero modulus would imply a fluid with no capacity to transmit bending waves."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "calculo de rigidez a la flexion EI"
    secondary_for:
      - "comparacion entre materiales"
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "El módulo de Young entra linealmente en la rigidez EI y en la velocidad de fase flexional bajo una raíz cuarta. Cambiar de acero a aluminio apenas modifica la velocidad de fase porque E/rho varía poco entre metales."
    en: "Young's modulus enters linearly in EI and in flexural phase velocity under a fourth root. Switching from steel to aluminium barely changes phase velocity because E/rho varies little among metals."

- id: I_seccion
  symbol: "I"
  nombre:
    es: Momento de inercia de la sección transversal
    en: Cross-section second moment of area
  descripcion:
    es: "Propiedad geométrica de la sección que cuantifica su resistencia a la flexión. Para una sección rectangular de ancho b y altura h, es b·h³/12."
    en: "Geometric property of the cross-section quantifying its bending resistance. For a rectangular section of width b and height h, it is b·h³/12."
  unidad_si: "m⁴"
  dimension: "[L⁴]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
    - teoria
    - formulas
    - interpretacion
    - ejemplos
  common_mistake: "Confundir el momento de inercia de área (m⁴) con el momento de inercia de masa (kg·m²). El primero es puramente geométrico."
  typical_range: "10⁻¹² m⁴ (cable delgado) a 10⁻⁴ m⁴ (viga de construcción)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El momento de inercia es siempre positivo como integral de un área positiva por distancia al cuadrado."
      en: "The second moment of area is always positive as an integral of positive area times distance squared."
  zero_behavior:
    allowed: false
    meaning:
      es: "Un momento de inercia nulo correspondería a una sección de dimensión nula; no tiene sentido físico."
      en: "Zero second moment of area would correspond to a zero-dimension section; it has no physical meaning."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "calculo de rigidez a la flexion EI"
      - "calculo de radio de giro"
    secondary_for:
      - "comparacion de secciones"
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "El momento de inercia crece con el cubo de la dimensión vertical de la sección. Una viga en I tiene mucho mayor I que una barra maciza del mismo peso, por eso la ingeniería usa perfiles abiertos."
    en: "Second moment of area grows with the cube of the vertical dimension. An I-beam has much greater I than a solid bar of the same weight, which is why engineering uses open profiles."

- id: rho_lin
  symbol: "\\\\rho A"
  nombre:
    es: Masa por unidad de longitud de la viga
    en: Beam mass per unit length
  descripcion:
    es: "Producto de la densidad volumétrica del material por el área de la sección transversal. Representa la inercia lineal que se opone a la aceleración transversal."
    en: "Product of volumetric density times cross-sectional area. Represents the linear inertia opposing transverse acceleration."
  unidad_si: kg/m
  dimension: "[M L⁻¹]"
  is_vector: false
  components: []
  category: derived
  physical_role: parameter
  used_in:
    - teoria
    - formulas
    - interpretacion
    - ejemplos
  common_mistake: "Usar la densidad volumétrica sin multiplicar por el área de la sección, obteniendo unidades incorrectas en la fórmula de velocidad."
  typical_range: "0.01 kg/m (alambre fino) a 500 kg/m (raíl de tren)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La masa lineal es siempre positiva."
      en: "Linear mass is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Masa nula haría la velocidad infinita, lo cual es físicamente imposible."
      en: "Zero mass would make the velocity infinite, which is physically impossible."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "calculo de velocidad de fase flexional"
    secondary_for:
      - "estimacion de peso propio de la viga"
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "La masa lineal entra en el denominador bajo la raíz cuarta de la velocidad de fase. Reducir la masa a la mitad solo aumenta la velocidad en un factor de 2^(1/4) ≈ 1.19, un efecto mucho menor que duplicar el momento de inercia."
    en: "Linear mass enters the denominator under the fourth root of phase velocity. Halving the mass only increases speed by a factor of 2^(1/4) ≈ 1.19, a much smaller effect than doubling the moment of inertia."

- id: omega
  symbol: "\\\\omega"
  nombre:
    es: Frecuencia angular
    en: Angular frequency
  descripcion:
    es: "Pulsación de la onda de flexión, igual a 2π veces la frecuencia en Hz. Es el parámetro que entra directamente en la relación de dispersión."
    en: "Angular frequency of the bending wave, equal to 2π times the frequency in Hz. It is the parameter that enters directly into the dispersion relation."
  unidad_si: rad/s
  dimension: "[T⁻¹]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in:
    - teoria
    - formulas
    - interpretacion
    - graficos
  common_mistake: "Confundir omega (rad/s) con f (Hz). Olvidar el factor 2π al convertir produce un error del 6.28 en los resultados."
  typical_range: "1 rad/s a 10⁶ rad/s"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La frecuencia angular es positiva para ondas propagantes."
      en: "Angular frequency is positive for propagating waves."
  zero_behavior:
    allowed: false
    meaning:
      es: "Frecuencia nula no corresponde a una onda de flexión sino a una deformación estática."
      en: "Zero frequency does not correspond to a bending wave but to a static deformation."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "relacion de dispersion"
      - "calculo de velocidad de fase"
    secondary_for:
      - "identificacion de frecuencias de resonancia"
  graph_binding:
    channels:
      - "freq_axis"
  pedagogical_notes:
    es: "La relación de dispersión de Euler-Bernoulli es cuadrática: omega es proporcional a k². Por eso la velocidad de fase crece con la raíz de omega: a mayor frecuencia, mayor velocidad."
    en: "The Euler-Bernoulli dispersion relation is quadratic: omega is proportional to k². Hence phase velocity grows with the square root of omega: higher frequency means higher speed."

- id: k_flex
  symbol: "k"
  nombre:
    es: Número de onda flexional
    en: Flexural wavenumber
  descripcion:
    es: "Constante de propagación espacial de la onda de flexión, inversamente proporcional a la longitud de onda. Define la escala espacial del patrón de deformación."
    en: "Spatial propagation constant of the bending wave, inversely proportional to wavelength. Defines the spatial scale of the deformation pattern."
  unidad_si: "rad/m"
  dimension: "[L⁻¹]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - teoria
    - formulas
    - interpretacion
    - graficos
  common_mistake: "Confundir el número de onda flexional con el longitudinal. A la misma frecuencia, k_flex es mayor (longitud de onda menor) que k_longitudinal."
  typical_range: "0.1 rad/m a 10 000 rad/m"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El número de onda es positivo para ondas propagantes en la dirección positiva."
      en: "Wavenumber is positive for waves propagating in the positive direction."
  zero_behavior:
    allowed: false
    meaning:
      es: "Un número de onda nulo implicaría longitud de onda infinita, es decir, una deformación uniforme."
      en: "Zero wavenumber would imply infinite wavelength, that is, a uniform deformation."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "relacion de dispersion"
      - "longitud de onda flexional"
    secondary_for:
      - "decaimiento de ondas evanescentes"
  graph_binding:
    channels:
      - "wavenumber_axis"
  pedagogical_notes:
    es: "En la ecuación de Euler-Bernoulli, k⁴ es proporcional a omega². Esto implica que k crece solo como la raíz cuadrada de omega, más lentamente que en ondas no dispersivas donde k es directamente proporcional a omega."
    en: "In the Euler-Bernoulli equation, k⁴ is proportional to omega². This implies k grows only as the square root of omega, more slowly than in non-dispersive waves where k is directly proportional to omega."

- id: lambda_flex
  symbol: "\\\\lambda_f"
  nombre:
    es: Longitud de onda flexional
    en: Flexural wavelength
  descripcion:
    es: "Distancia espacial entre dos puntos consecutivos con la misma fase en la onda de flexión. Disminuye al aumentar la frecuencia."
    en: "Spatial distance between two consecutive points with the same phase in the bending wave. Decreases with increasing frequency."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  common_mistake: "Asumir que la longitud de onda flexional es la misma que la longitudinal a la misma frecuencia. La flexional es siempre más corta."
  typical_range: "0.001 m (ultrasonido) a 10 m (infrasonido en estructuras grandes)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La longitud de onda es siempre positiva."
      en: "Wavelength is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Longitud de onda nula no tiene sentido físico; implicaría variación infinita del desplazamiento."
      en: "Zero wavelength has no physical meaning; it would imply infinite displacement variation."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "comparacion con dimensiones de la viga"
      - "validez del modelo de viga"
    secondary_for:
      - "radiacion acustica de la viga"
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "Cuando la longitud de onda flexional se hace comparable al espesor de la viga, el modelo de Euler-Bernoulli deja de ser válido y hay que usar Timoshenko. Esta condición marca la frecuencia límite del modelo."
    en: "When flexural wavelength becomes comparable to beam thickness, the Euler-Bernoulli model breaks down and Timoshenko must be used. This condition marks the model's frequency limit."

- id: rho_vol
  symbol: "\\\\rho"
  nombre:
    es: Densidad volumétrica del material
    en: Volumetric mass density
  descripcion:
    es: "Masa por unidad de volumen del material de la viga."
    en: "Mass per unit volume of the beam material."
  unidad_si: "kg/m³"
  dimension: "[M L⁻³]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
    - teoria
    - formulas
  common_mistake: "Usar la densidad en g/cm³ sin convertir a kg/m³, produciendo errores de factor 1000."
  typical_range: "900 kg/m³ (madera) a 19 300 kg/m³ (tungsteno)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La densidad es siempre positiva."
      en: "Density is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Densidad nula es imposible para un sólido real."
      en: "Zero density is impossible for a real solid."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "calculo de masa lineal"
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "La densidad volumétrica aparece en la masa lineal rho·A. Para vigas del mismo material, la masa lineal depende solo del área de la sección."
    en: "Volumetric density appears in linear mass rho·A. For beams of the same material, linear mass depends only on cross-sectional area."

- id: A_seccion
  symbol: "A"
  nombre:
    es: Área de la sección transversal
    en: Cross-sectional area
  descripcion:
    es: "Superficie del corte transversal de la viga; junto con la densidad volumétrica determina la masa por unidad de longitud."
    en: "Area of the beam cross-section; together with volumetric density determines mass per unit length."
  unidad_si: "m²"
  dimension: "[L²]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
    - teoria
    - formulas
    - ejemplos
  common_mistake: "Confundir el área A con el momento de inercia I. Ambos dependen de la geometría pero A es de orden L² e I es de orden L⁴."
  typical_range: "10⁻⁶ m² (alambre) a 0.1 m² (viga de construcción)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El área es siempre positiva."
      en: "Area is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Área nula no tiene sentido para una viga sólida."
      en: "Zero area has no meaning for a solid beam."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "calculo de masa lineal"
    secondary_for:
      - "radio de giro"
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "Para una sección rectangular de ancho b y altura h, el área es b·h y el momento de inercia es b·h³/12. El radio de giro es la raíz de I/A, que para sección rectangular vale h/√12."
    en: "For a rectangular section of width b and height h, the area is b·h and the second moment of area is b·h³/12. The radius of gyration is the root of I/A, which for a rectangular section is h/√12."

- id: r_giro
  symbol: "r_g"
  nombre:
    es: Radio de giro de la sección
    en: Section radius of gyration
  descripcion:
    es: "Distancia equivalente a la que estaría concentrada toda el área de la sección para producir el mismo momento de inercia. Controla la transición entre ondas largas y cortas."
    en: "Equivalent distance at which all section area would be concentrated to produce the same second moment of area. Controls the transition between long and short waves."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: parameter
  used_in:
    - teoria
    - formulas
    - interpretacion
  common_mistake: "Asumir que el radio de giro depende del material cuando en realidad es puramente geométrico."
  typical_range: "0.001 m (alambre) a 0.3 m (viga de construcción)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El radio de giro es siempre positivo."
      en: "Radius of gyration is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Radio de giro nulo correspondería a toda el área concentrada en el eje neutro: no habría rigidez a la flexión."
      en: "Zero radius of gyration would correspond to all area concentrated on the neutral axis: there would be no bending stiffness."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
      - "limite de validez del modelo Euler-Bernoulli"
    secondary_for:
      - "calculo de velocidad de fase"
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "Cuando la longitud de onda flexional se acerca al radio de giro, el modelo de Euler-Bernoulli deja de ser fiable. Es el criterio físico más directo para decidir cuándo se necesita el modelo de Timoshenko."
    en: "When the flexural wavelength approaches the radius of gyration, the Euler-Bernoulli model becomes unreliable. This is the most direct physical criterion for deciding when the Timoshenko model is needed."
`;export{e as default};
