const e=`magnitudes:

  - id: T_eq
    symbol: "T_{eq}"
    nombre:
      es: Temperatura de equilibrio
      en: Equilibrium temperature
    descripcion:
      es: Temperatura final común que alcanzan todos los cuerpos de un sistema aislado tras el intercambio de calor entre ellos. Es la incógnita principal de los problemas de calorimetría cuando se conocen las masas, calores específicos y temperaturas iniciales.
      en: Final common temperature reached by all bodies in an isolated system after heat exchange among them. It is the main unknown in calorimetry problems when masses, specific heat capacities, and initial temperatures are known.
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - temperatura de equilibrio en mezcla de dos cuerpos
      - calorimetría de mezclas
    common_mistake: "Calcular T_eq como la media aritmética simple de las temperaturas iniciales, ignorando que los cuerpos tienen distintas masas y calores específicos."
    typical_range: "Siempre comprendida estrictamente entre las temperaturas iniciales de los cuerpos más frío y más caliente del sistema."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La temperatura de equilibrio se expresa en kelvin (siempre positiva) o en grados Celsius. No tiene interpretación de signo en este contexto."
        en: "Equilibrium temperature is expressed in kelvin (always positive) or degrees Celsius. It carries no sign interpretation in this context."
    zero_behavior:
      allowed: true
      meaning:
        es: "Una temperatura de equilibrio de 0 °C es físicamente posible y no implica ningún error. Ocurre cuando la mezcla de cuerpos calientes y fríos resulta exactamente en el punto de fusión del agua."
        en: "An equilibrium temperature of 0 °C is physically possible and implies no error. It occurs when the mixing of hot and cold bodies results exactly at the melting point of water."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(T_min_inicial, T_max_inicial)"
    interpretation_role:
      primary_for:
        - verificación del resultado del principio de calorimetría
        - determinación experimental del calor específico de un material desconocido
      secondary_for:
        - diseño de procesos de mezcla y templado en ingeniería térmica
    graph_binding:
      channels:
        - eje_y_T
    pedagogical_notes:
      es: "El resultado de T_eq siempre debe estar entre las temperaturas iniciales de los cuerpos. Si T_eq está fuera de ese intervalo, hay un error en el planteamiento: o bien los signos de DeltaT son incorrectos, o bien se ha omitido un cuerpo del sistema."
      en: "The result for T_eq must always lie between the initial temperatures of the bodies. If T_eq falls outside that interval, there is an error in the setup: either the signs of DeltaT are incorrect, or a body has been omitted from the system."

  - id: Q_i
    symbol: "Q_i"
    nombre:
      es: Calor del cuerpo i
      en: Heat of body i
    descripcion:
      es: Energía térmica intercambiada por el cuerpo i durante el proceso de mezcla. Es positiva si el cuerpo absorbe calor (se calienta) y negativa si lo cede (se enfría). La suma de todos los Q_i del sistema aislado es cero.
      en: Thermal energy exchanged by body i during the mixing process. It is positive if the body absorbs heat (warms up) and negative if it releases heat (cools down). The sum of all Q_i in the isolated system is zero.
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: derived
    physical_role: input_parameter
    used_in:
      - principio de calorimetría
      - balance energético del sistema
    common_mistake: "Asignar signo positivo a todos los calores, incluyendo los de los cuerpos que se enfrían, lo que impide aplicar correctamente la condición de suma cero."
    typical_range: "Desde décimas de julio en experimentos de laboratorio de precisión hasta varios MJ en aplicaciones industriales."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Q_i > 0: el cuerpo absorbe calor y su temperatura sube. Q_i < 0: el cuerpo cede calor y su temperatura baja. La suma de todos los Q_i en el sistema aislado es exactamente cero."
        en: "Q_i > 0: the body absorbs heat and its temperature rises. Q_i < 0: the body releases heat and its temperature falls. The sum of all Q_i in the isolated system is exactly zero."
    zero_behavior:
      allowed: true
      meaning:
        es: "Q_i nulo para un cuerpo particular indica que su temperatura inicial ya coincidía con la temperatura de equilibrio final. No intercambia calor con el resto del sistema."
        en: "Zero Q_i for a particular body indicates its initial temperature already coincided with the final equilibrium temperature. It exchanges no heat with the rest of the system."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - verificación del principio de conservación de energía en el sistema
        - determinación de cuánto calor cede o absorbe cada cuerpo
      secondary_for:
        - cálculo del calor específico de un material a partir de la energía intercambiada
    graph_binding:
      channels:
        - eje_y_Q
    pedagogical_notes:
      es: "La condición suma Q_i = 0 es el principio de calorimetría. Es la misma conservación de energía de la primera ley de la termodinámica aplicada a un sistema aislado. El alumno debe verificar siempre que la suma de todos los calores parciales es cero como autocomprobación del resultado."
      en: "The condition sum Q_i = 0 is the calorimetry principle. It is the same energy conservation of the first law of thermodynamics applied to an isolated system. Students should always verify that the sum of all partial heats is zero as a self-check of the result."

  - id: m_i
    symbol: "m_i"
    nombre:
      es: Masa del cuerpo i
      en: Mass of body i
    descripcion:
      es: Masa del i-ésimo cuerpo del sistema calorimétrico. Junto con el calor específico del material, determina la capacidad calorífica total de ese cuerpo y por tanto su influencia en la temperatura de equilibrio.
      en: Mass of the i-th body in the calorimetric system. Together with the specific heat capacity of the material, it determines the total heat capacity of that body and therefore its influence on the equilibrium temperature.
    unidad_si: kg
    dimension: "[M]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: input_parameter
    used_in:
      - principio de calorimetría
      - temperatura de equilibrio en mezcla de dos cuerpos
    common_mistake: "Usar la masa en gramos cuando el calor específico está en J/(kg·K), obteniendo una capacidad calorífica total mil veces menor a la real."
    typical_range: "Desde gramos en experimentos de laboratorio estándar hasta toneladas en aplicaciones industriales de calorimetría."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La masa es siempre positiva. Un valor nulo no tiene sentido físico en el contexto de un cuerpo del sistema calorimétrico."
        en: "Mass is always positive. A zero value has no physical meaning in the context of a body in the calorimetric system."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una masa nula implicaría que el cuerpo no existe en el sistema. Si se introduce m = 0 accidentalmente, ese cuerpo desaparece del balance energético."
        en: "Zero mass would imply the body does not exist in the system. If m = 0 is accidentally entered, that body disappears from the energy balance."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - cálculo de la capacidad calorífica total de cada cuerpo del sistema
        - determinación del peso relativo de cada cuerpo en la temperatura de equilibrio
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El peso de cada cuerpo en la temperatura de equilibrio es proporcional a su capacidad calorífica total m_i · c_i, no solo a su masa. Un cuerpo ligero con alto calor específico puede dominar el equilibrio sobre un cuerpo pesado con bajo calor específico."
      en: "The weight of each body in the equilibrium temperature is proportional to its total heat capacity m_i · c_i, not to its mass alone. A light body with high specific heat capacity can dominate the equilibrium over a heavy body with low specific heat capacity."

  - id: c_i
    symbol: "c_i"
    nombre:
      es: Calor específico del cuerpo i
      en: Specific heat capacity of body i
    descripcion:
      es: Calor específico del material que forma el i-ésimo cuerpo del sistema. Es la propiedad intensiva del material que, multiplicada por la masa, da la capacidad calorífica total del cuerpo.
      en: Specific heat capacity of the material forming the i-th body of the system. It is the intensive property of the material that, multiplied by mass, gives the total heat capacity of the body.
    unidad_si: "J/(kg·K)"
    dimension: "[L^2 T^-2 Theta^-1]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - principio de calorimetría
      - temperatura de equilibrio en mezcla de dos cuerpos
      - determinación experimental del calor específico
    common_mistake: "Usar el mismo valor de c para el agua y el hielo (4186 J/(kg·K)) cuando el sistema involucra hielo, en lugar del valor correcto para hielo (2090 J/(kg·K))."
    typical_range: "128 J/(kg·K) para plomo hasta 4186 J/(kg·K) para agua líquida."
    sign_behavior:
      has_sign: false
      meaning:
        es: "El calor específico es siempre positivo para materiales termodinámicamente estables."
        en: "Specific heat capacity is always positive for thermodynamically stable materials."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un calor específico nulo es físicamente imposible para cualquier material real."
        en: "Zero specific heat capacity is physically impossible for any real material."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - cálculo de la capacidad calorífica total de cada cuerpo
        - determinación de la temperatura de equilibrio del sistema
      secondary_for:
        - identificación del material desconocido por calorimetría inversa
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "En problemas de calorimetría, c_i es un dato tabulado del material. La incógnita puede ser c de un material desconocido, en cuyo caso se determina aplicando la condición de suma Q_i = 0 y despejando c."
      en: "In calorimetry problems, c_i is a tabulated datum of the material. The unknown may be c of an unknown material, in which case it is determined by applying the condition sum Q_i = 0 and solving for c."

  - id: DeltaT_i
    symbol: "\\\\Delta T_i"
    nombre:
      es: Variación de temperatura del cuerpo i
      en: Temperature change of body i
    descripcion:
      es: Diferencia entre la temperatura de equilibrio final y la temperatura inicial del cuerpo i. Su signo determina si el cuerpo cede o absorbe calor. Positiva si el cuerpo se calienta; negativa si se enfría.
      en: Difference between the final equilibrium temperature and the initial temperature of body i. Its sign determines whether the body releases or absorbs heat. Positive if the body warms up; negative if it cools down.
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: []
    category: derived
    physical_role: input_parameter
    used_in:
      - principio de calorimetría
      - calor del cuerpo i
    common_mistake: "Calcular DeltaT_i como T_inicial − T_final en lugar de T_final − T_inicial, invirtiendo el signo del calor de ese cuerpo y rompiendo la condición de suma cero."
    typical_range: "Desde fracciones de kelvin hasta varios cientos de kelvin según el proceso."
    sign_behavior:
      has_sign: true
      meaning:
        es: "DeltaT_i > 0: el cuerpo se calienta (absorbe calor). DeltaT_i < 0: el cuerpo se enfría (cede calor). El cuerpo con temperatura inicial mayor que T_eq siempre tiene DeltaT_i negativo."
        en: "DeltaT_i > 0: the body warms up (absorbs heat). DeltaT_i < 0: the body cools down (releases heat). The body with initial temperature higher than T_eq always has negative DeltaT_i."
    zero_behavior:
      allowed: true
      meaning:
        es: "DeltaT_i nulo indica que la temperatura inicial del cuerpo coincidía con la temperatura de equilibrio. Ese cuerpo no intercambia calor con el sistema."
        en: "Zero DeltaT_i indicates the body's initial temperature coincided with the equilibrium temperature. That body exchanges no heat with the system."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - verificación de coherencia de signos en el balance energético
        - determinación de qué cuerpos ceden y cuáles absorben calor
      secondary_for: []
    graph_binding:
      channels:
        - eje_x_delta_T
    pedagogical_notes:
      es: "DeltaT_i = T_eq − T_inicial_i. En sistemas de dos cuerpos, uno de los DeltaT siempre es positivo y el otro negativo. Si ambos resultan del mismo signo, el T_eq calculado es incorrecto o está fuera del intervalo físico."
      en: "DeltaT_i = T_eq − T_initial_i. In two-body systems, one DeltaT is always positive and the other negative. If both have the same sign, the calculated T_eq is incorrect or lies outside the physical interval."
`;export{e as default};
