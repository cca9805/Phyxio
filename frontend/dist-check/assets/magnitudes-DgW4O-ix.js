const e=`magnitudes:

  - id: F_total
    symbol: "F_{total}"
    nombre:
      es: Fuerza eléctrica total
      en: Total electric force
    descripcion:
      es: Suma vectorial de todas las fuerzas de Coulomb ejercidas por N cargas fuente sobre la carga de prueba.
      en: Vector sum of all Coulomb forces exerted by N source charges on the test charge.
    unidad_si: N
    dimension: "[M L T^{-2}]"
    is_vector: true
    components: ["F_total_x", "F_total_y", "F_total_z"]
    category: derived
    physical_role: result
    used_in:
      - superposicion_fuerza
      - interpretacion de equilibrio entre cargas
    common_mistake: "Sumar módulos escalares en lugar de hacer la suma vectorial componente a componente."
    typical_range: "10^{-10} N a 10^2 N según las cargas y distancias involucradas"
    sign_behavior:
      has_sign: true
      meaning:
        es: "El vector indica dirección y sentido de la fuerza resultante; no hay convenio de signo único."
        en: "The vector indicates direction and sense of the resultant force; there is no single sign convention."
    zero_behavior:
      allowed: true
      meaning:
        es: "La fuerza total nula indica equilibrio electrostático: las contribuciones se cancelan exactamente."
        en: "Zero total force indicates electrostatic equilibrium: contributions cancel exactly."
    value_nature:
      kind: vector_component
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - "lectura de equilibrio electrostático"
        - "dirección de aceleración de la carga de prueba"
      secondary_for:
        - "cálculo de trabajo eléctrico"
    graph_binding:
      channels:
        - "y_axis: módulo de F_total vs posición"
        - "vector_field: dirección de F_total"
    pedagogical_notes:
      es: "La clave de este leaf es que F_total no se obtiene multiplicando la fuerza de una carga por N, sino sumando N vectores independientes. El alumno debe practicar la descomposición en componentes antes de sumar."
      en: "The key of this leaf is that F_total is not obtained by multiplying the force from one charge by N, but by adding N independent vectors. Students must practise component decomposition before adding."

  - id: E_total
    symbol: "E_{total}"
    nombre:
      es: Campo eléctrico total
      en: Total electric field
    descripcion:
      es: Suma vectorial de los campos eléctricos creados por todas las cargas fuente en el punto de observación, independientemente de la carga de prueba.
      en: Vector sum of electric fields created by all source charges at the observation point, independent of the test charge.
    unidad_si: "N/C"
    dimension: "[M L T^{-3} I^{-1}]"
    is_vector: true
    components: ["E_total_x", "E_total_y", "E_total_z"]
    category: derived
    physical_role: result
    used_in:
      - superposicion_campo
      - calculo de fuerza sobre carga de prueba
    common_mistake: "Confundir E_total con el campo de una sola carga, ignorando las contribuciones de las demás cargas fuente."
    typical_range: "10^2 N/C a 10^6 N/C en situaciones de laboratorio"
    sign_behavior:
      has_sign: true
      meaning:
        es: "El vector apunta desde las cargas positivas hacia las negativas en la región de interés; el signo de cada componente indica orientación."
        en: "The vector points from positive towards negative charges in the region of interest; the sign of each component indicates orientation."
    zero_behavior:
      allowed: true
      meaning:
        es: "Campo total nulo indica un punto de equilibrio del campo; cualquier carga de prueba colocada allí no experimenta fuerza eléctrica neta."
        en: "Zero total field indicates a field equilibrium point; any test charge placed there experiences no net electric force."
    value_nature:
      kind: vector_component
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - "localización de puntos de campo nulo"
        - "dirección de líneas de campo"
      secondary_for:
        - "cálculo de potencial eléctrico"
    graph_binding:
      channels:
        - "y_axis: módulo de E_total vs distancia"
        - "vector_field: dirección de E_total"
    pedagogical_notes:
      es: "E_total es una propiedad del espacio, no de la carga de prueba. Su existencia no depende de que haya una carga allí para medirlo. Esta independencia es la que distingue al campo eléctrico de la fuerza."
      en: "E_total is a property of space, not of the test charge. Its existence does not depend on a charge being present to measure it. This independence is what distinguishes the electric field from the force."

  - id: q_i
    symbol: "q_i"
    nombre:
      es: Carga fuente i-ésima
      en: i-th source charge
    descripcion:
      es: Valor con signo de la i-ésima carga que contribuye a la fuerza o campo total en el punto de observación.
      en: Signed value of the i-th charge contributing to the total force or field at the observation point.
    unidad_si: C
    dimension: "[I T]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input
    used_in:
      - superposicion_fuerza
      - superposicion_campo
    common_mistake: "Usar el valor absoluto de la carga en lugar del valor con signo, perdiendo el sentido de la fuerza o del campo."
    typical_range: "1 nC a 10 µC en situaciones de laboratorio"
    sign_behavior:
      has_sign: true
      meaning:
        es: "El signo positivo indica carga positiva (fuente de campo saliente); el signo negativo indica carga negativa (sumidero de campo entrante)."
        en: "Positive sign indicates positive charge (outgoing field source); negative sign indicates negative charge (incoming field sink)."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una carga nula no contribuye al campo ni a la fuerza; su término se elimina de la suma de superposición."
        en: "A zero charge contributes nothing to the field or force; its term drops out of the superposition sum."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - "contribución individual al campo total"
        - "cálculo de fuerza de Coulomb entre pares"
      secondary_for: []
    graph_binding:
      channels:
        - "parameter_slider: valor de q_i"
    pedagogical_notes:
      es: "El subíndice i recorre todas las cargas fuente del sistema, de i=1 a i=N. El alumno debe etiquetar cada carga con un subíndice distinto para no confundir la contribución de cada una."
      en: "The subscript i runs over all source charges in the system, from i=1 to i=N. Students must label each charge with a distinct subscript to avoid confusing individual contributions."

  - id: r_i
    symbol: "r_i"
    nombre:
      es: Distancia a la carga fuente i-ésima
      en: Distance to the i-th source charge
    descripcion:
      es: Distancia escalar desde la i-ésima carga fuente hasta el punto de observación donde se evalúa el campo o la fuerza.
      en: Scalar distance from the i-th source charge to the observation point where the field or force is evaluated.
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input
    used_in:
      - superposicion_campo
      - superposicion_fuerza
    common_mistake: "Confundir la distancia relativa entre cargas fuente entre sí con la distancia desde cada carga fuente al punto de observación."
    typical_range: "1 mm a 1 m en problemas de laboratorio"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La distancia es siempre positiva; el sentido se incorpora en el vector unitario de dirección, no en r_i."
        en: "Distance is always positive; direction is encoded in the unit vector, not in r_i."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una distancia nula implicaría que el punto de observación coincide con la carga fuente, lo que hace diverger el campo y la fuerza."
        en: "Zero distance would mean the observation point coincides with the source charge, causing the field and force to diverge."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for:
        - "control de la intensidad de cada contribución al campo"
        - "dependencia inverso-cuadrado de la distancia"
      secondary_for:
        - "geometría del sistema de cargas"
    graph_binding:
      channels:
        - "x_axis: distancia r_i al punto de observación"
    pedagogical_notes:
      es: "Cuando el sistema tiene N cargas, hay N distancias r_i distintas. Un error frecuente es usar una sola distancia promedio en lugar de calcular la contribución individual de cada carga a su propia distancia."
      en: "When the system has N charges, there are N distinct distances r_i. A common error is to use a single average distance instead of computing each charge's contribution at its own distance."

  - id: k_e
    symbol: "k_e"
    nombre:
      es: Constante de Coulomb
      en: Coulomb constant
    descripcion:
      es: "Constante de proporcionalidad de la ley de Coulomb en el vacío; vale aproximadamente 8.988×10⁹ N·m²·C⁻²."
      en: "Proportionality constant of Coulomb's law in vacuum; approximately 8.988×10⁹ N·m²·C⁻²."
    unidad_si: "N·m²·C⁻²"
    dimension: "[M L^3 T^{-4} I^{-2}]"
    is_vector: false
    components: []
    category: constant
    physical_role: parameter
    used_in:
      - superposicion_campo
      - superposicion_fuerza
    common_mistake: "Olvidar incluir k_e en cada término de la suma de superposición, o confundirla con la permitividad del vacío sin aplicar el factor 4π."
    typical_range: "8.988×10⁹ N·m²·C⁻² (constante universal)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "k_e es siempre positiva; el signo de la contribución de cada carga lo determina q_i."
        en: "k_e is always positive; the sign of each charge's contribution is determined by q_i."
    zero_behavior:
      allowed: false
      meaning:
        es: "k_e nunca es cero; un valor nulo indicaría ausencia de interacción eléctrica, lo que no ocurre en el vacío."
        en: "k_e is never zero; a null value would indicate no electric interaction, which does not occur in vacuum."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "8.988×10⁹ (constante)"
    interpretation_role:
      primary_for:
        - "escala de la interacción eléctrica"
      secondary_for:
        - "comparación con otras fuerzas fundamentales"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "k_e actúa como un factor de escala global que amplifica la interacción eléctrica; su enorme valor (del orden de 10⁹) explica por qué las fuerzas eléctricas dominan sobre las gravitatorias a escala atómica."
      en: "k_e acts as a global scaling factor that amplifies the electric interaction; its enormous value (of order 10⁹) explains why electric forces dominate over gravitational ones at atomic scales."

  - id: N_cargas
    symbol: "N"
    nombre:
      es: Número de cargas fuente
      en: Number of source charges
    descripcion:
      es: Número total de cargas puntuales que contribuyen a la superposición.
      en: Total number of point charges contributing to the superposition.
    unidad_si: "-"
    dimension: "[1]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input
    used_in:
      - superposicion_fuerza
      - superposicion_campo
    common_mistake: "Olvidar incluir todas las cargas del sistema, especialmente las que parecen 'pequeñas' pero no son despreciables a corta distancia."
    typical_range: "2 a 10 cargas en problemas de aula; hasta millones en distribuciones continuas"
    sign_behavior:
      has_sign: false
      meaning:
        es: "N es siempre un entero positivo; no tiene sentido un número negativo de cargas."
        en: "N is always a positive integer; a negative number of charges has no meaning."
    zero_behavior:
      allowed: false
      meaning:
        es: "N igual a cero indica ausencia de cargas fuente; el campo y la fuerza son nulos trivialmente."
        en: "N equal to zero means no source charges; field and force are trivially zero."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1, +inf)"
    interpretation_role:
      primary_for:
        - "complejidad del sistema de cargas"
        - "número de términos en la suma de superposición"
      secondary_for: []
    graph_binding:
      channels:
        - "parameter_slider: número de cargas N"
    pedagogical_notes:
      es: "N determina el número de operaciones vectoriales requeridas. Un alumno que aplica superposición correctamente a 2 cargas puede generalizar inmediatamente a N cargas usando el mismo procedimiento iterado."
      en: "N determines the number of vector operations required. A student who correctly applies superposition for 2 charges can immediately generalise to N charges using the same iterated procedure."
`;export{e as default};
