const e=`formulas:

  - id: superposicion_fuerza
    title:
      es: Principio de superposición para la fuerza eléctrica
      en: Superposition principle for electric force
    equation: "F_total = k_e * q_i * N_cargas / r_i^2"
    latex: "\\\\vec{F}_{total} = \\\\sum_{i=1}^{N} \\\\vec{F}_i = k_e \\\\sum_{i=1}^{N} \\\\frac{q_i}{r_i^2} \\\\hat{r}_i"
    rearrangements:
      - target: F_total
        equation: "F_total = k_e * q_i * N_cargas / r_i^2"
        latex: "\\\\vec{F}_{total} = k_e \\\\sum_{i=1}^{N} \\\\frac{q_i}{r_i^2} \\\\hat{r}_i"
      - target: q_i
        equation: "q_i = F_total * r_i^2 / (k_e * N_cargas)"
        latex: "q_i = \\\\frac{F_{total} \\\\cdot r_i^2}{k_e \\\\cdot N}"
      - target: r_i
        equation: "r_i = sqrt(k_e * q_i / F_total)"
        latex: "r_i = \\\\sqrt{\\\\frac{k_e \\\\cdot q_i}{F_{total}}}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La fuerza total sobre una carga de prueba es la suma vectorial de las fuerzas individuales de Coulomb de cada carga fuente, calculadas independientemente."
      en: "The total force on a test charge is the vector sum of the individual Coulomb forces from each source charge, computed independently."
    constraints:
      - "Cargas puntuales o distribuciones con simetría esférica"
      - "Medio lineal (vacío o dieléctrico homogéneo)"
      - "Régimen electrostático (cargas estacionarias)"
    validity:
      es: "Válido para cargas puntuales en reposo en el vacío o en un dieléctrico lineal homogéneo. Requiere que ninguna carga fuente coincida con el punto de observación."
      en: "Valid for stationary point charges in vacuum or in a linear homogeneous dielectric. Requires that no source charge coincides with the observation point."
    dimension_check: "[M L T^{-2}] = [M L^3 T^{-4} I^{-2}] * [I T] * [L^{-2}]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - cálculo de fuerza resultante sobre una carga de prueba
      - determinación de equilibrio electrostático
    interpretation_tags:
      - "fuerza resultante"
      - "superposición vectorial"
      - "equilibrio electrostático"
    result_semantics:
      target: F_total
      kind: vector_magnitude
      sign_meaning:
        es: "El vector F_total indica la dirección y sentido de la fuerza neta; su módulo indica la intensidad. Si F_total es nulo, la carga está en equilibrio electrostático."
        en: "The vector F_total indicates the direction and sense of the net force; its magnitude indicates intensity. If F_total is zero, the charge is in electrostatic equilibrium."
      absolute_value_meaning:
        es: "El módulo de F_total es la intensidad de la fuerza neta en newtons; su comparación con el peso de la carga indica si la interacción eléctrica domina la dinámica."
        en: "The magnitude of F_total is the net force intensity in newtons; comparing it with the charge's weight indicates whether the electric interaction dominates the dynamics."
    domain_checks:
      - condition: "r_i > 0 para todo i"
        message:
          es: "Al menos una distancia r_i es cero o negativa: el punto de observación coincide con una carga fuente, lo que hace divergir la suma."
          en: "At least one distance r_i is zero or negative: the observation point coincides with a source charge, causing the sum to diverge."
      - condition: "N_cargas >= 1"
        message:
          es: "El número de cargas debe ser al menos 1 para que la fórmula tenga sentido."
          en: "The number of charges must be at least 1 for the formula to make sense."
    coherence_checks:
      - condition: "F_total = 0 cuando las cargas son simétricas"
        message:
          es: "Si el sistema tiene simetría de inversión y cargas iguales, F_total debe ser nulo. Un resultado no nulo sugiere error en la geometría o los signos."
          en: "If the system has inversion symmetry and equal charges, F_total must be zero. A non-zero result suggests an error in geometry or signs."
      - condition: "F_total >= F_individual para cargas del mismo signo"
        message:
          es: "Para N cargas del mismo signo equidistantes, el módulo de F_total no puede ser menor que cada contribución individual si actúan en la misma dirección."
          en: "For N equal-sign charges equidistant, the magnitude of F_total cannot be less than each individual contribution if they act in the same direction."
    graph_implications:
      - "La gráfica de módulo de F_total vs posición muestra ceros en los puntos de equilibrio electrostático."
      - "Para dos cargas del mismo signo, existe un mínimo de F_total entre ellas en el punto de equilibrio."
    pedagogical_triggers:
      - trigger: "alumno suma módulos escalares en lugar de vectores"
        correction:
          es: "La superposición requiere suma vectorial: descomponer cada F_i en componentes x e y, sumar componentes por separado, y calcular el módulo resultante."
          en: "Superposition requires vector addition: decompose each F_i into x and y components, add components separately, and compute the resultant magnitude."
      - trigger: "alumno ignora la dirección del vector unitario de cada contribución"
        correction:
          es: "Cada término de la suma lleva un vector unitario que apunta desde la carga fuente i hacia el punto de observación; omitirlo produce un resultado escalar incorrecto."
          en: "Each term in the sum carries a unit vector pointing from source charge i towards the observation point; omitting it produces an incorrect scalar result."

  - id: superposicion_campo
    title:
      es: Principio de superposición para el campo eléctrico
      en: Superposition principle for electric field
    equation: "E_total = k_e * q_i * N_cargas / r_i^2"
    latex: "\\\\vec{E}_{total} = \\\\sum_{i=1}^{N} \\\\vec{E}_i = k_e \\\\sum_{i=1}^{N} \\\\frac{q_i}{r_i^2} \\\\hat{r}_i"
    rearrangements:
      - target: E_total
        equation: "E_total = k_e * q_i * N_cargas / r_i^2"
        latex: "\\\\vec{E}_{total} = k_e \\\\sum_{i=1}^{N} \\\\frac{q_i}{r_i^2} \\\\hat{r}_i"
      - target: q_i
        equation: "q_i = E_total * r_i^2 / (k_e * N_cargas)"
        latex: "q_i = \\\\frac{E_{total} \\\\cdot r_i^2}{k_e \\\\cdot N}"
      - target: N_cargas
        equation: "N_cargas = E_total * r_i^2 / (k_e * q_i)"
        latex: "N = \\\\frac{E_{total} \\\\cdot r_i^2}{k_e \\\\cdot q_i}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "El campo eléctrico total en un punto es la suma vectorial de los campos individuales creados por cada carga fuente, calculada independientemente de cualquier carga de prueba."
      en: "The total electric field at a point is the vector sum of the individual fields created by each source charge, computed independently of any test charge."
    constraints:
      - "El punto de observación no puede coincidir con ninguna carga fuente"
      - "Medio lineal para que los campos se sumen sin modificarse mutuamente"
      - "Régimen electrostático"
    validity:
      es: "Válido en cualquier punto del espacio excepto en las posiciones de las cargas fuente. Aplicable en vacío y en dieléctricos lineales."
      en: "Valid at any point in space except at the source charge locations. Applicable in vacuum and linear dielectrics."
    dimension_check: "[M L T^{-3} I^{-1}] = [M L^3 T^{-4} I^{-2}] * [I T] * [L^{-2}]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - cálculo del campo resultante en un punto
      - localización de puntos de campo nulo
      - construcción de mapas de campo
    interpretation_tags:
      - "campo resultante"
      - "superposición vectorial de campos"
      - "punto de campo nulo"
    result_semantics:
      target: E_total
      kind: vector_magnitude
      sign_meaning:
        es: "E_total nulo en un punto indica que los campos individuales se cancelan exactamente; es una propiedad del espacio en ese punto, independiente de si hay carga de prueba."
        en: "Zero E_total at a point indicates that individual fields cancel exactly; it is a property of space at that point, independent of whether a test charge is present."
      absolute_value_meaning:
        es: "El módulo de E_total es la intensidad del campo resultante en N/C; valores mayores implican mayor fuerza por unidad de carga que experimentaría cualquier carga de prueba colocada allí."
        en: "The magnitude of E_total is the resultant field intensity in N/C; larger values imply greater force per unit charge that any test charge placed there would experience."
    domain_checks:
      - condition: "r_i > 0 para todo i"
        message:
          es: "Al menos una distancia r_i es nula: el punto de observación coincide con una carga fuente y el campo diverge."
          en: "At least one distance r_i is zero: the observation point coincides with a source charge and the field diverges."
    coherence_checks:
      - condition: "E_total cambia de signo al cruzar el plano de simetría entre dos cargas iguales"
        message:
          es: "Entre dos cargas positivas iguales, el campo total debe anularse en el punto medio. Si el resultado no es nulo en el punto medio, revisar los vectores unitarios."
          en: "Between two equal positive charges, the total field must vanish at the midpoint. If the result is non-zero at the midpoint, check the unit vectors."
    graph_implications:
      - "El mapa de campo eléctrico total muestra líneas que parten de cargas positivas y llegan a cargas negativas, curvadas por la interferencia entre contribuciones."
      - "Los puntos de campo nulo son sillas de potencial en el mapa de potencial eléctrico."
    pedagogical_triggers:
      - trigger: "alumno multiplica el campo de una sola carga por N para cargas no idénticas"
        correction:
          es: "La multiplicación por N solo es válida si todas las cargas son idénticas y equidistantes del punto de observación; en el caso general se requiere la suma vectorial individual."
          en: "Multiplying by N is only valid if all charges are identical and equidistant from the observation point; in the general case individual vector summation is required."
      - trigger: "alumno confunde campo total con fuerza total"
        correction:
          es: "El campo eléctrico total E_total existe en el espacio independientemente de la carga de prueba; la fuerza total F_total sobre una carga de prueba se obtiene multiplicando E_total por el valor de dicha carga."
          en: "The total electric field E_total exists in space independently of the test charge; the total force F_total on a test charge is obtained by multiplying E_total by the value of that charge."
`;export{e as default};
