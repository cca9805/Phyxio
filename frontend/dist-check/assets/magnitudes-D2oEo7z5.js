const e=`magnitudes:

  - id: v_L
    symbol: "v_L"
    nombre:
      es: Velocidad de onda longitudinal (P)
      en: Longitudinal (P-wave) velocity
    descripcion:
      es: "Velocidad de propagacion de la onda de compresion-expansion a lo largo de la direccion de propagacion en un solido."
      en: "Propagation speed of the compression-expansion wave along the propagation direction in a solid."
    unidad_si: "m/s"
    dimension: "[L T⁻¹]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - calculo de velocidad de onda P en solidos isotropos
      - relacion con modulos elasticos E y nu
      - comparacion entre tipos de onda en el mismo material
    common_mistake: "Confundir la velocidad longitudinal con la velocidad del sonido en gases; en solidos el modulo confinado eleva notablemente el valor."
    typical_range: "1000 m/s a 7000 m/s (metales tipicos entre 4000 y 6000 m/s)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La velocidad de propagacion es siempre positiva; el signo de la amplitud de particula es independiente."
        en: "Propagation speed is always positive; the sign of particle amplitude is independent."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una velocidad nula implicaria un material sin rigidez ni incompresibilidad, lo que no es un solido."
        en: "Zero velocity would imply a material with no stiffness or incompressibility, which is not a solid."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1000, 7000] m/s"
    interpretation_role:
      primary_for:
        - clasificacion del tipo de onda
        - calculo de frecuencias de corte
      secondary_for:
        - estimacion de propiedades elasticas del material
    graph_binding:
      channels:
        - eje Y en grafico velocidad vs modulo elastico
    pedagogical_notes:
      es: "La onda longitudinal en un solido viaja mas rapido que la transversal en el mismo material porque el modulo confinado M supera al modulo de corte G; este contraste es clave para entender la clasificacion de tipos."
      en: "The longitudinal wave in a solid travels faster than the transverse wave in the same material because the confined modulus M exceeds the shear modulus G; this contrast is key to understanding wave type classification."

  - id: v_T
    symbol: "v_T"
    nombre:
      es: Velocidad de onda transversal (S)
      en: Transverse (S-wave) velocity
    descripcion:
      es: "Velocidad de propagacion de la onda de corte en la que las particulas vibran perpendicularmente a la direccion de propagacion."
      en: "Propagation speed of the shear wave in which particles vibrate perpendicular to the propagation direction."
    unidad_si: "m/s"
    dimension: "[L T⁻¹]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - calculo de velocidad de onda S
      - relacion con modulo de corte G y densidad
      - razon v_T / v_L para identificar tipo de material
    common_mistake: "Asumir que las ondas transversales pueden propagarse en fluidos; solo existen en solidos porque los fluidos no soportan esfuerzos de corte."
    typical_range: "500 m/s a 4000 m/s (aproximadamente 0.55 a 0.65 veces v_L para metales)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La velocidad de propagacion es positiva; la polarizacion de la vibracion de particula puede ser en cualquier direccion transversal."
        en: "Propagation speed is positive; particle vibration polarization can be in any transverse direction."
    zero_behavior:
      allowed: false
      meaning:
        es: "Velocidad cero indicaria modulo de corte nulo, lo que corresponde a un fluido, no a un solido."
        en: "Zero velocity would indicate zero shear modulus, corresponding to a fluid, not a solid."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[500, 4000] m/s"
    interpretation_role:
      primary_for:
        - clasificacion onda S
        - diagnostico de propiedades de corte del material
      secondary_for:
        - calculo de velocidad de Rayleigh
    graph_binding:
      channels:
        - eje Y en grafico comparativo velocidades de onda
    pedagogical_notes:
      es: "La velocidad transversal es siempre menor que la longitudinal en el mismo solido; la razon v_T/v_L depende unicamente del coeficiente de Poisson y es un diagnostico elastico potente."
      en: "Transverse velocity is always lower than longitudinal in the same solid; the ratio v_T/v_L depends solely on Poisson's ratio and is a powerful elastic diagnostic."

  - id: v_R
    symbol: "v_R"
    nombre:
      es: Velocidad de onda de Rayleigh
      en: Rayleigh wave velocity
    descripcion:
      es: "Velocidad de propagacion de la onda superficial de Rayleigh que combina movimiento eliptico de particulas y confinamiento a la superficie libre del solido."
      en: "Propagation speed of the Rayleigh surface wave combining elliptical particle motion and confinement to the free surface of the solid."
    unidad_si: "m/s"
    dimension: "[L T⁻¹]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - calculo de velocidad de onda de Rayleigh
      - ensayos no destructivos superficiales
      - sismologia (ondas superficiales de terremoto)
    common_mistake: "Creer que la onda de Rayleigh es mas rapida que la onda S; siempre viaja ligeramente por debajo de v_T."
    typical_range: "0.92 a 0.94 veces v_T, tipicamente 400 m/s a 3500 m/s"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Velocidad positiva de propagacion; la trayectoria eliptica de particula tiene sentido retrogrado respecto a la propagacion."
        en: "Positive propagation speed; elliptical particle path is retrograde relative to propagation direction."
    zero_behavior:
      allowed: false
      meaning:
        es: "Velocidad nula implicaria ausencia de superficie libre o de rigidez elastica."
        en: "Zero velocity would imply absence of a free surface or elastic stiffness."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[400, 3500] m/s"
    interpretation_role:
      primary_for:
        - clasificacion onda de Rayleigh
        - evaluacion de integridad superficial
      secondary_for:
        - comparacion con v_T para verificar consistencia
    graph_binding:
      channels:
        - punto de referencia en grafico comparativo de velocidades
    pedagogical_notes:
      es: "La velocidad de Rayleigh es aproximadamente 0.92·v_T para la mayoria de metales; esta proximidad hace que en sismologia las ondas superficiales lleguen casi al mismo tiempo que las S, causando la mayor parte del dano."
      en: "Rayleigh velocity is approximately 0.92·v_T for most metals; this proximity means that in seismology surface waves arrive almost simultaneously with S-waves, causing most of the damage."

  - id: E_young
    symbol: "E"
    nombre:
      es: Modulo de Young
      en: Young's modulus
    descripcion:
      es: "Modulo elastico que relaciona la tension normal con la deformacion longitudinal en el regimen lineal."
      en: "Elastic modulus relating normal stress to longitudinal strain in the linear regime."
    unidad_si: "Pa"
    dimension: "[M L⁻¹ T⁻²]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - calculo de velocidad longitudinal en barra delgada
      - relacion entre modulos elasticos
    common_mistake: "Usar el modulo de Young para calcular v_L en un solido tridimensional infinito; en ese caso se debe usar el modulo confinado M."
    typical_range: "1 GPa (polimeros blandos) a 400 GPa (diamante); acero tipico 200 GPa"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El modulo de Young es siempre positivo para materiales con comportamiento elastico normal."
        en: "Young's modulus is always positive for materials with normal elastic behavior."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un modulo nulo implicaria deformacion infinita ante cualquier carga, lo que corresponde a un fluido ideal."
        en: "Zero modulus would imply infinite deformation under any load, corresponding to an ideal fluid."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1e9, 4e11] Pa"
    interpretation_role:
      primary_for:
        - velocidad longitudinal en guias delgadas
      secondary_for:
        - relacion con v_L en el limite de barra delgada
    graph_binding:
      channels:
        - parametro de entrada en grafico velocidad vs modulo
    pedagogical_notes:
      es: "El modulo de Young se usa para la velocidad longitudinal solo en el limite de barra delgada (diametro mucho menor que la longitud de onda). En un solido tridimensional el modulo relevante es el confinado M, que siempre supera a E."
      en: "Young's modulus applies for longitudinal velocity only in the thin-bar limit (diameter much smaller than wavelength). In a 3D solid the relevant modulus is the confined modulus M, which always exceeds E."

  - id: G_corte
    symbol: "G"
    nombre:
      es: Modulo de corte
      en: Shear modulus
    descripcion:
      es: "Modulo elastico que relaciona la tension tangencial con la deformacion angular; es el parametro que controla las ondas transversales en cualquier solido."
      en: "Elastic modulus relating shear stress to angular strain; the parameter governing transverse waves in any solid."
    unidad_si: "Pa"
    dimension: "[M L⁻¹ T⁻²]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - calculo de velocidad de onda transversal
      - calculo de velocidad de Rayleigh
    common_mistake: "Suponer que G es igual a E; en realidad G es menor que E para todos los solidos isotropos (G es entre 0.3 E y 0.5 E aproximadamente)."
    typical_range: "0.4 GPa (cauchos) a 160 GPa (carburo de tungsteno); acero tipico 80 GPa"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El modulo de corte es siempre positivo; un valor nulo define el limite entre solido y fluido."
        en: "The shear modulus is always positive; a zero value defines the boundary between solid and fluid."
    zero_behavior:
      allowed: false
      meaning:
        es: "G nulo define un fluido. En ese caso v_T tiende a cero y las ondas transversales no existen."
        en: "Zero G defines a fluid. In that case v_T tends to zero and transverse waves do not exist."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[4e8, 1.6e11] Pa"
    interpretation_role:
      primary_for:
        - velocidad de onda transversal
        - existencia de ondas de corte
      secondary_for:
        - calculo aproximado de v_R
    graph_binding:
      channels:
        - eje X en grafico G vs v_T
    pedagogical_notes:
      es: "El modulo de corte G es el parametro que distingue fisicamente un solido de un fluido; los fluidos tienen G nulo y por eso no propagan ondas transversales. Esta es la razon fisica mas profunda de la clasificacion de tipos de onda."
      en: "The shear modulus G is the physical parameter that distinguishes a solid from a fluid; fluids have zero G and therefore do not propagate transverse waves. This is the deepest physical reason for wave type classification."

  - id: rho
    symbol: "\\\\rho"
    nombre:
      es: Densidad del material
      en: Material density
    descripcion:
      es: "Masa por unidad de volumen del medio solido; aparece en el denominador de todas las expresiones de velocidad de onda elastica."
      en: "Mass per unit volume of the solid medium; appears in the denominator of all elastic wave velocity expressions."
    unidad_si: "kg/m³"
    dimension: "[M L⁻³]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - calculo de velocidad longitudinal
      - calculo de velocidad transversal
      - calculo de velocidad de Rayleigh
    common_mistake: "Confundir la densidad con la dureza del material; un material muy denso puede tener baja velocidad de onda si sus modulos elasticos son tambien bajos."
    typical_range: "1000 kg/m³ (madera) a 19300 kg/m³ (oro); acero tipico 7800 kg/m³"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La densidad es siempre positiva; valores negativos son fisicamente imposibles."
        en: "Density is always positive; negative values are physically impossible."
    zero_behavior:
      allowed: false
      meaning:
        es: "Densidad nula implicaria masa nula, lo que hace indefinida la dinamica de propagacion."
        en: "Zero density would imply zero mass, making the propagation dynamics undefined."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1000, 20000] kg/m³"
    interpretation_role:
      primary_for:
        - todas las expresiones de velocidad de onda
      secondary_for:
        - calculo de impedancia mecanica
    graph_binding:
      channels:
        - eje X en grafico densidad vs velocidad de onda
    pedagogical_notes:
      es: "La densidad entra como raiz cuadrada inversa en la velocidad; duplicar la densidad reduce la velocidad al 70 % si los modulos no cambian. Esto explica por que el plomo, muy denso, transmite ondas mas lentamente que el aluminio pese a tener modulos comparables."
      en: "Density enters as an inverse square root in velocity; doubling the density reduces velocity to 70% if the moduli do not change. This explains why lead, being very dense, transmits waves more slowly than aluminium despite having comparable moduli."

  - id: nu
    symbol: "\\\\nu"
    nombre:
      es: Coeficiente de Poisson
      en: Poisson's ratio
    descripcion:
      es: "Razon entre la deformacion lateral y la longitudinal con signo negativo; controla la relacion entre modulos elasticos y por tanto la razon entre velocidades de onda."
      en: "Ratio of lateral to longitudinal strain with negative sign; controls the relationship between elastic moduli and hence the ratio between wave velocities."
    unidad_si: "-"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - relacion entre v_L y v_T mediante nu
      - calculo del modulo confinado M a partir de E y nu
    common_mistake: "Suponer que el coeficiente de Poisson puede ser cualquier valor; el rango fisico para materiales isotropos estables es entre -1 y 0.5."
    typical_range: "0.20 a 0.35 para metales tipicos; caucho aproxima 0.5 (casi incompresible)"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Un nu positivo (lo mas comun) indica que el material se estrecha lateralmente al estirarse longitudinalmente. Materiales auxeticos tienen nu negativo."
        en: "Positive nu (most common) indicates that the material narrows laterally when stretched longitudinally. Auxetic materials have negative nu."
    zero_behavior:
      allowed: true
      meaning:
        es: "Nu igual a cero indica que la deformacion lateral es nula; el material se comporta como isotropo en compresion y corte sin acoplamiento lateral."
        en: "Nu equal to zero means zero lateral strain; the material behaves as if compression and shear are decoupled."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-1, 0.5)"
    interpretation_role:
      primary_for:
        - relacion entre v_L y v_T
        - clasificacion del comportamiento elastico del material
      secondary_for:
        - estimacion de v_R
    graph_binding:
      channels:
        - parametro de color o forma en grafico v_L/v_T vs nu
    pedagogical_notes:
      es: "El coeficiente de Poisson determina la razon v_T/v_L y con ella el tipo de comportamiento dinamico del solido. Cuanto mas cerca de 0.5 (casi incompresible), mayor es v_L respecto a v_T, lo que produce una ventana de separacion entre ondas P y S mas amplia."
      en: "Poisson's ratio determines the ratio v_T/v_L and hence the dynamic behaviour type of the solid. The closer to 0.5 (nearly incompressible), the larger v_L relative to v_T, producing a wider separation window between P and S waves."
`;export{e as default};
