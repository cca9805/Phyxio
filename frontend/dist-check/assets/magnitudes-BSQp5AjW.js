const e=`magnitudes:
  - id: n
    symbol: "n"
    nombre:
      es: "Indice de refraccion"
      en: "Refractive index"
    descripcion:
      es: "Cociente entre la velocidad de la luz en el vacio y la velocidad en un medio material."
      en: "Ratio of the speed of light in vacuum to the speed in a material medium."
    unidad_si: "adimensional"
    dimension: "[1]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in:
      - definicion del indice de refraccion
      - ley de Snell
      - calculo de velocidad en el medio
      - calculo de longitud de onda en el medio
    common_mistake: "Confundir el indice de refraccion con la densidad del medio o creer que n puede ser menor que 1 en materiales ordinarios."
    typical_range: "1.00 (vacio) a 2.42 (diamante)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El indice de refraccion es siempre positivo en medios convencionales."
        en: "The refractive index is always positive in conventional media."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un indice nulo no tiene sentido fisico; implicaria velocidad infinita."
        en: "A zero index has no physical meaning; it would imply infinite speed."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1.00, 2.50]"
    interpretation_role:
      primary_for:
        - velocidad de la luz en el medio
        - desviacion angular del rayo refractado
      secondary_for:
        - reflexion total interna
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El indice de refraccion resume la interaccion luz-materia en un solo numero. Valores mayores implican mayor frenado de la luz y mayor desviacion angular en la interfaz."
      en: "The refractive index summarises the light-matter interaction in a single number. Higher values mean greater slowing of light and larger angular deviation at an interface."

  - id: c
    symbol: "c"
    nombre:
      es: "Velocidad de la luz en el vacio"
      en: "Speed of light in vacuum"
    descripcion:
      es: "Velocidad de propagacion de la luz en el vacio, constante universal."
      en: "Speed of light propagation in vacuum, a universal constant."
    unidad_si: "m/s"
    dimension: "[L T^-1]"
    is_vector: false
    components: []
    category: constant
    physical_role: reference_constant
    used_in:
      - definicion del indice de refraccion
      - calculo de velocidad en el medio
    common_mistake: "Usar un valor aproximado de c con demasiadas cifras significativas o confundir c con la velocidad en el medio."
    typical_range: "2.998e8 m/s (exacto por definicion)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Es una rapidez, siempre positiva."
        en: "It is a speed, always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "La velocidad de la luz en el vacio no puede ser nula."
        en: "The speed of light in vacuum cannot be zero."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[2.998e8, 2.998e8]"
    interpretation_role:
      primary_for:
        - referencia de velocidad maxima
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "c es la referencia absoluta de velocidad en optica. El indice de refraccion se define como el cociente c dividido por la velocidad en el medio."
      en: "c is the absolute speed reference in optics. The refractive index is defined as the ratio c divided by the speed in the medium."

  - id: v_medio
    symbol: "v"
    nombre:
      es: "Velocidad de la luz en el medio"
      en: "Speed of light in the medium"
    descripcion:
      es: "Velocidad de fase de la luz dentro de un medio material."
      en: "Phase speed of light inside a material medium."
    unidad_si: "m/s"
    dimension: "[L T^-1]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - definicion del indice de refraccion
      - propagacion de la luz en medios
    common_mistake: "Creer que la velocidad de la luz en un medio transparente es siempre constante sin depender de la longitud de onda."
    typical_range: "1.24e8 m/s (diamante) a 2.998e8 m/s (vacio)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Es una rapidez, siempre positiva."
        en: "It is a speed, always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "La luz no puede tener velocidad nula en un medio transparente."
        en: "Light cannot have zero speed in a transparent medium."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1e8, 3e8]"
    interpretation_role:
      primary_for:
        - determinar cuanto frena el medio a la luz
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La velocidad en el medio siempre es menor que c para materiales convencionales. El cociente c dividido entre v_medio da directamente el indice de refraccion."
      en: "The speed in the medium is always less than c for conventional materials. The ratio c divided by v_medio directly gives the refractive index."

  - id: lambda_0
    symbol: "\\\\lambda_0"
    nombre:
      es: "Longitud de onda en el vacio"
      en: "Wavelength in vacuum"
    descripcion:
      es: "Longitud de onda de la luz medida en el vacio."
      en: "Wavelength of light measured in vacuum."
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - relacion entre longitud de onda e indice
      - identificacion del color de la luz
    common_mistake: "Confundir la longitud de onda en el vacio con la longitud de onda en el medio."
    typical_range: "380e-9 m (violeta) a 750e-9 m (rojo)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La longitud de onda es siempre positiva."
        en: "The wavelength is always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una longitud de onda nula carece de sentido fisico."
        en: "A zero wavelength has no physical meaning."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1e-10, 1e-3]"
    interpretation_role:
      primary_for:
        - identificar el color de la radiacion
      secondary_for:
        - calculo de longitud de onda en el medio
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La longitud de onda en el vacio identifica el color de la luz y no cambia al pasar de un medio a otro si se mide en el vacio. En el medio se acorta proporcionalmente al indice."
      en: "The vacuum wavelength identifies the colour of light and does not change when passing between media if measured in vacuum. Inside the medium it shortens proportionally to the index."

  - id: lambda_medio
    symbol: "\\\\lambda"
    nombre:
      es: "Longitud de onda en el medio"
      en: "Wavelength in the medium"
    descripcion:
      es: "Longitud de onda de la luz dentro del medio material."
      en: "Wavelength of light inside the material medium."
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - relacion entre longitud de onda e indice
      - efectos de color y dispersion
    common_mistake: "Creer que la longitud de onda no cambia al entrar en un medio con distinto indice."
    typical_range: "160e-9 m (UV en diamante) a 750e-9 m (rojo en vacio)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La longitud de onda es siempre positiva."
        en: "The wavelength is always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una longitud de onda nula carece de sentido fisico."
        en: "A zero wavelength has no physical meaning."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1e-10, 1e-3]"
    interpretation_role:
      primary_for:
        - determinar el acortamiento de onda dentro del medio
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La longitud de onda en el medio se reduce respecto a la del vacio en un factor n. La frecuencia permanece constante, pero la longitud de onda y la velocidad se reducen proporcionalmente."
      en: "The wavelength in the medium is reduced compared to vacuum by a factor of n. The frequency stays constant, but both wavelength and speed decrease proportionally."

  - id: theta_1
    symbol: "\\\\theta_1"
    nombre:
      es: "Angulo de incidencia"
      en: "Angle of incidence"
    descripcion:
      es: "Angulo entre el rayo incidente y la normal a la superficie de separacion."
      en: "Angle between the incident ray and the normal to the interface."
    unidad_si: "rad"
    dimension: "[1]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - ley de Snell
      - calculo del angulo de refraccion
    common_mistake: "Medir el angulo respecto a la superficie en lugar de la normal."
    typical_range: "0 rad a 1.57 rad (0 a 90 grados)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El angulo de incidencia se mide como magnitud positiva respecto a la normal."
        en: "The angle of incidence is measured as a positive quantity from the normal."
    zero_behavior:
      allowed: true
      meaning:
        es: "Incidencia normal: el rayo llega perpendicular a la superficie y no se desvía."
        en: "Normal incidence: the ray arrives perpendicular to the surface and is not deviated."
    value_nature:
      kind: angle
      nonnegative_only: true
      expected_interval: "[0, 1.5708]"
    interpretation_role:
      primary_for:
        - determinar la desviacion del rayo al cruzar la interfaz
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El angulo de incidencia es el dato de partida para aplicar la ley de Snell. Siempre se mide desde la normal, no desde la superficie."
      en: "The angle of incidence is the starting datum for applying Snell's law. It is always measured from the normal, not from the surface."

  - id: theta_2
    symbol: "\\\\theta_2"
    nombre:
      es: "Angulo de refraccion"
      en: "Angle of refraction"
    descripcion:
      es: "Angulo entre el rayo refractado y la normal a la superficie de separacion."
      en: "Angle between the refracted ray and the normal to the interface."
    unidad_si: "rad"
    dimension: "[1]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - ley de Snell
      - calculo de la desviacion angular
    common_mistake: "Confundir angulo de refraccion con angulo de incidencia o medir respecto a la superficie."
    typical_range: "0 rad a 1.57 rad (0 a 90 grados)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El angulo de refraccion se mide como magnitud positiva respecto a la normal."
        en: "The angle of refraction is measured as a positive quantity from the normal."
    zero_behavior:
      allowed: true
      meaning:
        es: "Refraccion nula: el rayo pasa sin desviarse, posible cuando ambos medios tienen el mismo indice."
        en: "Zero refraction: the ray passes without deviation, possible when both media have the same index."
    value_nature:
      kind: angle
      nonnegative_only: true
      expected_interval: "[0, 1.5708]"
    interpretation_role:
      primary_for:
        - medir la desviacion del rayo al entrar en el segundo medio
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El angulo de refraccion depende del cociente de indices. Si el segundo medio es mas denso, el rayo se acerca a la normal y el angulo disminuye."
      en: "The angle of refraction depends on the ratio of indices. If the second medium is denser, the ray bends towards the normal and the angle decreases."
`;export{e as default};
