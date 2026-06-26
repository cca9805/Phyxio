const e=`magnitudes:

  - id: P
    symbol: P
    nombre:
      es: Presión
      en: Pressure
    descripcion:
      es: Fuerza que el gas ejerce por unidad de área sobre las paredes del recipiente, resultado de los choques moleculares. Variable macroscópica de estado.
      en: Force exerted by the gas per unit area on the container walls, resulting from molecular collisions. Macroscopic state variable.
    unidad_si: Pa
    dimension: "[M L^-1 T^-2]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - ley del gas ideal
      - procesos termodinámicos
      - manometría
    common_mistake: "Confundir la presión absoluta con la manométrica; la ley del gas ideal requiere presión absoluta en pascales."
    typical_range: "100 Pa (vacío técnico) a 10⁷ Pa (alta presión industrial); 101 325 Pa en condiciones normales."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La presión termodinámica de un gas ideal es siempre positiva. Un valor nulo o negativo indica vacío perfecto o error de cálculo."
        en: "The thermodynamic pressure of an ideal gas is always positive. Zero or negative values indicate perfect vacuum or calculation error."
    zero_behavior:
      allowed: false
      meaning:
        es: "Presión nula corresponde al vacío perfecto, límite inalcanzable en la práctica."
        en: "Zero pressure corresponds to perfect vacuum, an unattainable limit in practice."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - determinación del estado del gas ideal a T y n conocidos
        - diagnóstico de si el sistema cumple condiciones de idealidad
      secondary_for:
        - verificación de coherencia entre magnitudes de estado
    graph_binding:
      channels:
        - eje_y_P
    pedagogical_notes:
      es: "La presión es la magnitud que conecta más directamente el mundo microscópico (choques moleculares) con el macroscópico (fuerza sobre paredes). En el gas ideal es la única interacción entre moléculas y paredes: ninguna interacción lateral entre moléculas."
      en: "Pressure is the quantity that most directly connects the microscopic world (molecular collisions) to the macroscopic one (force on walls). In the ideal gas it is the only interaction between molecules and walls: no lateral intermolecular interaction."

  - id: T
    symbol: T
    nombre:
      es: Temperatura termodinámica
      en: Thermodynamic temperature
    descripcion:
      es: Medida de la energía cinética media traslacional de las moléculas del gas. En el gas ideal es la única fuente de energía interna relevante. Debe expresarse siempre en kelvin.
      en: Measure of the mean translational kinetic energy of the gas molecules. In the ideal gas it is the only relevant source of internal energy. Must always be expressed in kelvin.
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - ley del gas ideal
      - energía interna del gas ideal
    common_mistake: "Introducir la temperatura en grados Celsius en lugar de kelvin, produciendo resultados incorrectos al aplicar la ley del gas ideal."
    typical_range: "100 K a 1000 K en la mayoría de aplicaciones; 273 K a 373 K en condiciones de laboratorio ordinarias."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La temperatura termodinámica es siempre positiva en la escala kelvin. El cero absoluto (0 K) es un límite inalcanzable."
        en: "Thermodynamic temperature is always positive on the kelvin scale. Absolute zero (0 K) is an unattainable limit."
    zero_behavior:
      allowed: false
      meaning:
        es: "T = 0 K corresponde al cero absoluto. A esta temperatura la energía cinética de las moléculas sería nula, lo que no es alcanzable en la práctica."
        en: "T = 0 K corresponds to absolute zero. At this temperature the kinetic energy of molecules would be zero, which is unattainable in practice."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - determinación del estado del gas ideal a P y n conocidos
        - verificación de proporcionalidad directa con P a V constante
      secondary_for:
        - diagnóstico de condensación o transición de fase
    graph_binding:
      channels:
        - eje_x_T
    pedagogical_notes:
      es: "En el gas ideal, T es el único parámetro que controla la energía cinética media de las moléculas. Doblar T a V y n constantes dobla exactamente P: esa linealidad es la prueba más directa del comportamiento ideal."
      en: "In the ideal gas, T is the only parameter controlling the mean kinetic energy of the molecules. Doubling T at constant V and n exactly doubles P: that linearity is the most direct test of ideal behaviour."

  - id: n
    symbol: n
    nombre:
      es: Cantidad de sustancia
      en: Amount of substance
    descripcion:
      es: Número de moles del gas. En el modelo ideal, doblar n a P y T constantes dobla exactamente V, lo que refleja que las moléculas no interactúan entre sí.
      en: Number of moles of gas. In the ideal model, doubling n at constant P and T exactly doubles V, reflecting the absence of intermolecular interactions.
    unidad_si: mol
    dimension: "[N]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in:
      - ley del gas ideal
    common_mistake: "Confundir la masa del gas con la cantidad de sustancia en moles; hay que dividir la masa entre la masa molar del gas."
    typical_range: "De 10⁻³ mol en muestras pequeñas a centenares de moles en recipientes industriales."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La cantidad de sustancia es siempre positiva. No existe número de moles negativo."
        en: "Amount of substance is always positive. A negative number of moles does not exist."
    zero_behavior:
      allowed: false
      meaning:
        es: "n = 0 corresponde a vacío perfecto; la ley del gas ideal no se aplica a un sistema sin materia."
        en: "n = 0 corresponds to perfect vacuum; the ideal gas law does not apply to a system without matter."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - determinación del estado del gas dado P, V y T
      secondary_for:
        - conversión entre propiedades extensivas e intensivas del gas
    graph_binding:
      channels:
        - param_n
    pedagogical_notes:
      es: "La proporcionalidad de P con n a T y V constantes es una consecuencia directa del modelo ideal: sin interacciones entre moléculas, añadir moléculas no altera el comportamiento de las que ya estaban."
      en: "The proportionality of P with n at constant T and V is a direct consequence of the ideal model: without intermolecular interactions, adding molecules does not alter the behaviour of those already present."

  - id: V
    symbol: V
    nombre:
      es: Volumen
      en: Volume
    descripcion:
      es: Espacio que ocupa el gas. En el gas ideal el volumen propio de las moléculas es despreciable frente al volumen total disponible, lo que permite tratar las moléculas como puntos materiales.
      en: Space occupied by the gas. In the ideal gas the molecules' own volume is negligible compared with the total available volume, allowing molecules to be treated as point particles.
    unidad_si: "m³"
    dimension: "[L^3]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - ley del gas ideal
    common_mistake: "Usar volúmenes en litros con R en J/(mol·K), lo que produce resultados 1000 veces mayores o menores de lo correcto."
    typical_range: "10⁻³ m³ (1 L) en laboratorio a centenares de m³ en tanques industriales."
    sign_behavior:
      has_sign: false
      meaning:
        es: "El volumen es siempre positivo. Un volumen nulo o negativo es físicamente imposible para un gas en equilibrio."
        en: "Volume is always positive. Zero or negative volume is physically impossible for a gas in equilibrium."
    zero_behavior:
      allowed: false
      meaning:
        es: "Volumen nulo implicaría colapso físico, incompatible con un gas en equilibrio termodinámico."
        en: "Zero volume would imply physical collapse, incompatible with a gas in thermodynamic equilibrium."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - determinación del estado del gas ideal dado P, T y n
      secondary_for:
        - interpretación de procesos isotérmicos e isobáricos
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El supuesto de que el volumen molecular es despreciable frente al volumen total es válido cuando la densidad numérica de moléculas es baja. A alta presión, este supuesto falla y el modelo ideal subestima la P real."
      en: "The assumption that molecular volume is negligible compared to total volume holds when the number density of molecules is low. At high pressure this assumption fails and the ideal model underestimates the real P."

  - id: R
    symbol: R
    nombre:
      es: Constante universal de los gases
      en: Universal gas constant
    descripcion:
      es: Constante física que relaciona la energía térmica por mol con la temperatura. Igual para todos los gases ideales; su universalidad es el sello distintivo del modelo ideal.
      en: Physical constant relating thermal energy per mole to temperature. The same for all ideal gases; its universality is the hallmark of the ideal model.
    unidad_si: "J/(mol·K)"
    dimension: "[M L^2 T^-2 N^-1 Theta^-1]"
    is_vector: false
    components: []
    category: constant
    physical_role: auxiliary_quantity
    used_in:
      - ley del gas ideal
    common_mistake: "Mezclar el valor R = 8.314 J/(mol·K) con otras unidades (atm·L) sin la conversión apropiada."
    typical_range: "R = 8.314 J/(mol·K) en el SI."
    sign_behavior:
      has_sign: false
      meaning:
        es: "R es una constante positiva sin signo variable."
        en: "R is a positive constant with no variable sign."
    zero_behavior:
      allowed: false
      meaning:
        es: "R es una constante fundamental de la naturaleza y no puede ser cero."
        en: "R is a fundamental constant of nature and cannot be zero."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "8.314"
    interpretation_role:
      primary_for:
        - verificación dimensional de la ley del gas ideal
      secondary_for:
        - conexión entre la escala macroscópica y la microscópica del gas
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La universalidad de R es la consecuencia más profunda del modelo ideal: el hecho de que todos los gases ideales obedezcan la misma ley con la misma constante implica que el comportamiento solo depende de la cantidad de moléculas, no de su naturaleza química."
      en: "The universality of R is the deepest consequence of the ideal model: the fact that all ideal gases obey the same law with the same constant implies that the behaviour depends only on the number of molecules, not on their chemical nature."
`;export{e as default};
