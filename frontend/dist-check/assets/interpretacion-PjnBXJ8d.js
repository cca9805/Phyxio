const e=`version: "v5"
id: interpretacion-principio-de-superposicion
leaf_id: principio-de-superposicion

nombre:
  es: Interpretación del Principio de Superposición
  en: Interpretation of the Superposition Principle

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: fundamentos
  parent_id: fundamentos
  ruta_relativa: fisica-clasica/electromagnetismo/fundamentos/principio-de-superposicion

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación física
    en: Physical interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_blocks: 3
    max_rules_per_block: 2

dependencies:
  formulas:
    - superposicion_fuerza
    - superposicion_campo
  magnitudes:
    - F_total
    - E_total
    - q_i
    - r_i
    - k_e
    - N_cargas

global_context:
  physical_domain:
    es: "Electrostática clásica en el vacío o en un dieléctrico lineal. El principio de superposición expresa la linealidad de las ecuaciones de Maxwell en ausencia de materiales no lineales."
    en: "Classical electrostatics in vacuum or in a linear dielectric. The superposition principle expresses the linearity of Maxwell's equations in the absence of non-linear materials."
  axis_convention:
    es: "Eje x positivo hacia la derecha, eje y positivo hacia arriba. Los vectores de campo y fuerza se expresan en componentes cartesianas."
    en: "Positive x-axis to the right, positive y-axis upward. Field and force vectors are expressed in Cartesian components."
  standard_assumptions:
    - "Cargas puntuales en reposo"
    - "Medio lineal entre las cargas"
    - "Ningún punto de observación coincide con una carga fuente"
  standard_warnings:
    - "La suma de superposición es vectorial, no escalar"
    - "k_e debe usarse en unidades SI consistentes"
    - "Cada distancia r_i es la distancia individual desde la carga i al punto de observación"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia del resultado
      en: Result coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura gráfica
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:

  F_total:
    magnitude_type: vector
    semantic_role:
      es: "Fuerza eléctrica neta sobre la carga de prueba; resultado directo de aplicar el principio de superposición."
      en: "Net electric force on the test charge; direct result of applying the superposition principle."
    summary_rules:
      - id: sum_F_zero
        when: "F_total == 0"
        status: info
        text:
          es: "La fuerza eléctrica total es nula: la carga de prueba se encuentra en un punto de equilibrio electrostático donde las contribuciones de todas las cargas fuente se cancelan exactamente."
          en: "The total electric force is zero: the test charge is at an electrostatic equilibrium point where contributions from all source charges cancel exactly."
      - id: sum_F_nonzero
        when: "F_total != 0"
        status: info
        text:
          es: "La fuerza eléctrica total es no nula. La carga de prueba experimentará aceleración en la dirección de F_total. La componente dominante indica qué carga fuente tiene mayor influencia."
          en: "The total electric force is non-zero. The test charge will accelerate in the direction of F_total. The dominant component indicates which source charge has the greatest influence."
    physical_reading_rules:
      - id: pr_F_large
        when: "abs(F_total) > 1"
        status: warning
        text:
          es: "La fuerza resultante supera 1 N. Para cargas de laboratorio (microcoulombios), esto implica distancias muy pequeñas o cargas muy grandes. Verificar unidades."
          en: "The resultant force exceeds 1 N. For laboratory charges (microcoulombs), this implies very small distances or very large charges. Check units."
      - id: pr_F_dominant
        when: "F_total != 0"
        status: info
        text:
          es: "El módulo de F_total determina la aceleración de la carga de prueba. Su dirección indica hacia dónde se moverá si se deja libre."
          en: "The magnitude of F_total determines the test charge's acceleration. Its direction indicates where it will move if released."
    coherence_rules:
      - id: coh_F_symmetry
        when: "sistema_simetrico == true AND F_total != 0"
        status: error
        text:
          es: "El sistema tiene simetría geométrica pero F_total no es nulo. Revisar los vectores unitarios de dirección de cada contribución o los signos de las cargas."
          en: "The system has geometric symmetry but F_total is non-zero. Check the unit direction vectors of each contribution or the charge signs."
      - id: coh_F_fallback
        when: "true"
        status: ok
        text:
          es: "El valor de F_total es coherente con las entradas proporcionadas."
          en: "The value of F_total is coherent with the provided inputs."
    model_validity_rules:
      - id: mv_F_point_charge
        when: "r_i < 0.001"
        status: warning
        text:
          es: "Al menos una distancia r_i es menor de 1 mm. El modelo de carga puntual puede ser inexacto si los objetos cargados tienen tamaño comparable a esta distancia."
          en: "At least one distance r_i is less than 1 mm. The point charge model may be inaccurate if the charged objects have size comparable to this distance."
      - id: mv_F_fallback
        when: "true"
        status: ok
        text:
          es: "El modelo de superposición de cargas puntuales es aplicable en las condiciones del problema."
          en: "The point charge superposition model is applicable under the problem conditions."
    graph_rules:
      - id: gr_F_zero_crossing
        when: "F_total == 0"
        status: info
        text:
          es: "El cero de F_total corresponde a un punto de equilibrio en la gráfica de fuerza vs posición."
          en: "The zero of F_total corresponds to an equilibrium point in the force vs position graph."
      - id: gr_F_fallback
        when: "true"
        status: info
        text:
          es: "La gráfica de módulo de F_total vs posición muestra la intensidad de la fuerza neta en cada punto del espacio."
          en: "The graph of the magnitude of F_total vs position shows the net force intensity at each point in space."
    likely_errors:
      - id: le_F_scalar_sum
        when: "true"
        status: warning
        text:
          es: "Error frecuente: sumar los módulos de las fuerzas individuales en lugar de sumar sus componentes vectoriales. El resultado escalar siempre sobreestima la fuerza real cuando las contribuciones no son paralelas."
          en: "Common error: summing the magnitudes of individual forces instead of summing their vector components. The scalar result always overestimates the actual force when contributions are not parallel."
      - id: le_F_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que se han incluido todas las cargas fuente del sistema en la suma."
          en: "Verify that all source charges in the system have been included in the sum."
    next_step_rules:
      - id: ns_F_zero_equilibrium
        when: "F_total == 0"
        status: info
        text:
          es: "Equilibrio detectado. El siguiente paso es analizar si el equilibrio es estable (una pequeña perturbación restaura la posición) o inestable (la perturbación amplifica el desplazamiento)."
          en: "Equilibrium detected. The next step is to analyse whether the equilibrium is stable (a small perturbation restores the position) or unstable (the perturbation amplifies the displacement)."
      - id: ns_F_nonzero
        when: "F_total != 0"
        status: info
        text:
          es: "Calcular la aceleración dividiendo F_total entre la masa de la carga de prueba. Luego determinar la trayectoria si la carga se deja libre."
          en: "Calculate the acceleration by dividing F_total by the test charge's mass. Then determine the trajectory if the charge is released."

  E_total:
    magnitude_type: vector
    semantic_role:
      es: "Campo eléctrico total en el punto de observación; propiedad del espacio independiente de la carga de prueba."
      en: "Total electric field at the observation point; property of space independent of the test charge."
    summary_rules:
      - id: sum_E_zero
        when: "E_total == 0"
        status: info
        text:
          es: "El campo eléctrico total es nulo en este punto: las contribuciones de todas las cargas fuente se cancelan. Cualquier carga de prueba colocada aquí no experimentaría fuerza eléctrica neta."
          en: "The total electric field is zero at this point: contributions from all source charges cancel. Any test charge placed here would experience no net electric force."
      - id: sum_E_nonzero
        when: "E_total != 0"
        status: info
        text:
          es: "El campo eléctrico total no es nulo. Una carga de prueba positiva colocada en este punto experimentaría una fuerza en la dirección de E_total."
          en: "The total electric field is non-zero. A positive test charge placed at this point would experience a force in the direction of E_total."
    physical_reading_rules:
      - id: pr_E_strong
        when: "abs(E_total) > 100000"
        status: warning
        text:
          es: "El campo resultante supera 100 kN/C. Para cargas de laboratorio, esto es razonable solo a distancias del orden de milímetros."
          en: "The resultant field exceeds 100 kN/C. For laboratory charges, this is reasonable only at distances of the order of millimetres."
      - id: pr_E_fallback
        when: "true"
        status: info
        text:
          es: "El módulo de E_total da la fuerza por unidad de carga. Multiplicar por el valor de cualquier carga de prueba da directamente la fuerza sobre esa carga."
          en: "The magnitude of E_total gives the force per unit charge. Multiplying by the value of any test charge directly gives the force on that charge."
    coherence_rules:
      - id: coh_E_midpoint
        when: "sistema_dos_cargas_iguales == true AND punto_medio == true AND E_total != 0"
        status: error
        text:
          es: "Para dos cargas iguales, el campo total en el punto medio perpendicular debe ser nulo. Un resultado no nulo indica error en la dirección de los vectores."
          en: "For two equal charges, the total field at the perpendicular midpoint must be zero. A non-zero result indicates an error in vector directions."
      - id: coh_E_fallback
        when: "true"
        status: ok
        text:
          es: "El valor de E_total es coherente con las entradas proporcionadas."
          en: "The value of E_total is coherent with the provided inputs."
    model_validity_rules:
      - id: mv_E_linear_medium
        when: "medio_no_lineal == true"
        status: warning
        text:
          es: "El principio de superposición requiere un medio lineal. En materiales ferroeléctricos o plasmas no lineales, los campos no se suman de forma independiente."
          en: "The superposition principle requires a linear medium. In ferroelectric materials or non-linear plasmas, fields do not add independently."
      - id: mv_E_fallback
        when: "true"
        status: ok
        text:
          es: "El modelo de superposición de campos de cargas puntuales es aplicable."
          en: "The point charge field superposition model is applicable."
    graph_rules:
      - id: gr_E_node
        when: "E_total == 0"
        status: info
        text:
          es: "El punto de campo nulo aparece como un nodo en el mapa vectorial. Las líneas de campo se bifurcan o terminan en este punto."
          en: "The zero-field point appears as a node in the vector map. Field lines bifurcate or terminate at this point."
      - id: gr_E_fallback
        when: "true"
        status: info
        text:
          es: "Las flechas del mapa vectorial de E_total apuntan en la dirección de mayor descenso del potencial."
          en: "The arrows of the E_total vector map point in the direction of steepest potential descent."
    likely_errors:
      - id: le_E_confused_with_F
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir E_total con F_total. El campo E_total existe en el espacio aunque no haya carga de prueba; la fuerza F_total requiere multiplicar E_total por el valor de la carga de prueba."
          en: "Common error: confusing E_total with F_total. The field E_total exists in space even without a test charge; the force F_total requires multiplying E_total by the test charge value."
      - id: le_E_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que la suma incluye el vector unitario correcto para cada contribución."
          en: "Verify that the sum includes the correct unit vector for each contribution."
    next_step_rules:
      - id: ns_E_to_force
        when: "true"
        status: info
        text:
          es: "Una vez conocido E_total, calcular la fuerza sobre cualquier carga de prueba multiplicando por el valor de esa carga. Para mapas de campo, calcular E_total en varios puntos y representar los vectores."
          en: "Once E_total is known, calculate the force on any test charge by multiplying by that charge's value. For field maps, calculate E_total at several points and plot the vectors."
      - id: ns_E_potential
        when: "E_total != 0"
        status: info
        text:
          es: "El campo E_total determina la fuerza sobre cargas de prueba y la variación espacial del potencial eléctrico. El siguiente paso natural es calcular el potencial o las líneas equipotenciales."
          en: "The field E_total determines the force on test charges and the spatial variation of electric potential. The natural next step is to calculate the potential or equipotential lines."

  q_i:
    magnitude_type: scalar
    semantic_role:
      es: "Valor con signo de una carga fuente individual; parámetro de entrada del sistema."
      en: "Signed value of an individual source charge; input parameter of the system."
    summary_rules:
      - id: sum_qi_positive
        when: "q_i > 0"
        status: info
        text:
          es: "La carga fuente es positiva: su contribución al campo apunta radialmente hacia afuera desde su posición, y su contribución a la fuerza sobre una carga de prueba positiva es repulsiva."
          en: "The source charge is positive: its contribution to the field points radially outward from its position, and its contribution to the force on a positive test charge is repulsive."
      - id: sum_qi_negative
        when: "q_i < 0"
        status: info
        text:
          es: "La carga fuente es negativa: su contribución al campo apunta radialmente hacia su posición, y su contribución a la fuerza sobre una carga de prueba positiva es atractiva."
          en: "The source charge is negative: its contribution to the field points radially towards its position, and its contribution to the force on a positive test charge is attractive."
    physical_reading_rules:
      - id: pr_qi_fallback
        when: "true"
        status: info
        text:
          es: "El signo de q_i determina el sentido de la contribución vectorial al campo y a la fuerza. Sin él, la superposición vectorial es incompleta."
          en: "The sign of q_i determines the direction of the vector contribution to the field and force. Without it, the vector superposition is incomplete."
    coherence_rules:
      - id: coh_qi_fallback
        when: "true"
        status: ok
        text:
          es: "El valor de q_i es coherente con las entradas del problema."
          en: "The value of q_i is coherent with the problem inputs."
    model_validity_rules:
      - id: mv_qi_fallback
        when: "true"
        status: ok
        text:
          es: "El modelo de carga puntual es aplicable para este valor de q_i."
          en: "The point charge model is applicable for this value of q_i."
    graph_rules:
      - id: gr_qi_sign
        when: "q_i > 0"
        status: info
        text:
          es: "Las líneas de campo de esta carga parten radialmente desde su posición en el mapa de campo."
          en: "The field lines of this charge start radially from its position in the field map."
      - id: gr_qi_fallback
        when: "true"
        status: info
        text:
          es: "El valor de q_i determina la intensidad y sentido de las líneas de campo que parten de esta carga."
          en: "The value of q_i determines the intensity and direction of field lines originating from this charge."
    likely_errors:
      - id: le_qi_abs
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar el valor absoluto de q_i ignorando el signo. El signo de la carga es esencial para determinar el sentido de la contribución vectorial."
          en: "Common error: using the absolute value of q_i and ignoring the sign. The sign of the charge is essential to determine the direction of the vector contribution."
      - id: le_qi_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que el signo de q_i es correcto antes de calcular la contribución vectorial."
          en: "Verify that the sign of q_i is correct before computing the vector contribution."
    next_step_rules:
      - id: ns_qi_fallback
        when: "true"
        status: info
        text:
          es: "Con q_i conocido, calcular el vector unitario de dirección desde q_i hacia el punto de observación para completar la contribución vectorial."
          en: "With q_i known, compute the unit direction vector from q_i to the observation point to complete the vector contribution."

  r_i:
    magnitude_type: scalar
    semantic_role:
      es: "Distancia desde la i-ésima carga fuente al punto de observación; controla la intensidad de la contribución."
      en: "Distance from the i-th source charge to the observation point; controls the intensity of the contribution."
    summary_rules:
      - id: sum_ri_small
        when: "r_i < 0.01"
        status: warning
        text:
          es: "La distancia r_i es menor de 1 cm. La contribución de esta carga al campo o a la fuerza puede dominar fuertemente sobre las demás."
          en: "The distance r_i is less than 1 cm. This charge's contribution to the field or force may strongly dominate the others."
      - id: sum_ri_fallback
        when: "true"
        status: info
        text:
          es: "La distancia r_i determina la intensidad de la contribución de la carga i al campo y a la fuerza mediante la ley del cuadrado inverso."
          en: "The distance r_i determines the intensity of charge i's contribution to the field and force via the inverse-square law."
    physical_reading_rules:
      - id: pr_ri_fallback
        when: "true"
        status: info
        text:
          es: "Una distancia r_i menor multiplica la contribución de esa carga por un factor cuadrático. Una carga más cercana puede dominar la superposición aunque tenga menor valor absoluto."
          en: "A smaller distance r_i multiplies that charge's contribution by a quadratic factor. A closer charge can dominate the superposition even if it has smaller absolute value."
    coherence_rules:
      - id: coh_ri_fallback
        when: "true"
        status: ok
        text:
          es: "El valor de r_i es positivo y coherente con la geometría del sistema."
          en: "The value of r_i is positive and coherent with the system geometry."
    model_validity_rules:
      - id: mv_ri_nuclear
        when: "r_i < 0.000000000000001"
        status: error
        text:
          es: "La distancia r_i está por debajo de la escala nuclear. El modelo clásico de carga puntual no es válido a esta escala."
          en: "The distance r_i is below the nuclear scale. The classical point charge model is not valid at this scale."
      - id: mv_ri_fallback
        when: "true"
        status: ok
        text:
          es: "La distancia r_i está dentro del rango de validez del modelo clásico de superposición."
          en: "The distance r_i is within the validity range of the classical superposition model."
    graph_rules:
      - id: gr_ri_fallback
        when: "true"
        status: info
        text:
          es: "En la gráfica de contribución individual vs r_i, la curva decrece con la inversa del cuadrado. La carga más cercana domina la región de campo fuerte."
          en: "In the graph of individual contribution vs r_i, the curve decreases with the inverse square. The closest charge dominates the strong-field region."
    likely_errors:
      - id: le_ri_wrong_distance
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar la distancia entre cargas fuente entre sí en lugar de la distancia desde cada carga fuente al punto de observación."
          en: "Common error: using the distance between source charges instead of the distance from each source charge to the observation point."
      - id: le_ri_fallback
        when: "true"
        status: info
        text:
          es: "Medir r_i siempre desde la posición de la carga fuente i hasta el punto de observación, no entre cargas fuente."
          en: "Always measure r_i from the position of source charge i to the observation point, not between source charges."
    next_step_rules:
      - id: ns_ri_fallback
        when: "true"
        status: info
        text:
          es: "Con r_i conocido, calcular la contribución individual de la carga i al campo o a la fuerza antes de sumar vectorialmente con las demás."
          en: "With r_i known, compute the individual contribution of charge i to the field or force before vector-summing with the others."

  N_cargas:
    magnitude_type: scalar
    semantic_role:
      es: "Número total de cargas fuente; determina la complejidad de la suma de superposición."
      en: "Total number of source charges; determines the complexity of the superposition sum."
    summary_rules:
      - id: sum_N_two
        when: "N_cargas == 2"
        status: info
        text:
          es: "Sistema de dos cargas fuente: el caso más frecuente en problemas de aula. La suma vectorial tiene dos términos y puede resolverse geométricamente o por componentes."
          en: "Two-source-charge system: the most common case in classroom problems. The vector sum has two terms and can be solved geometrically or by components."
      - id: sum_N_many
        when: "N_cargas > 4"
        status: info
        text:
          es: "Sistema con más de cuatro cargas fuente: la suma vectorial requiere descomposición sistemática en componentes. Considerar si el sistema tiene simetría que simplifique el cálculo."
          en: "System with more than four source charges: the vector sum requires systematic component decomposition. Consider whether the system has symmetry that simplifies the calculation."
    physical_reading_rules:
      - id: pr_N_fallback
        when: "true"
        status: info
        text:
          es: "Cada carga fuente añade un término vectorial independiente a la suma. El número de términos es exactamente N_cargas."
          en: "Each source charge adds an independent vector term to the sum. The number of terms is exactly N_cargas."
    coherence_rules:
      - id: coh_N_fallback
        when: "true"
        status: ok
        text:
          es: "El número de cargas es coherente con el enunciado del problema."
          en: "The number of charges is coherent with the problem statement."
    model_validity_rules:
      - id: mv_N_fallback
        when: "true"
        status: ok
        text:
          es: "El modelo de superposición es válido para cualquier número finito de cargas puntuales."
          en: "The superposition model is valid for any finite number of point charges."
    graph_rules:
      - id: gr_N_fallback
        when: "true"
        status: info
        text:
          es: "Con más cargas, el mapa de campo se vuelve más complejo. Identificar las regiones de campo fuerte (cerca de las cargas) y débil (puntos alejados o de cancelación)."
          en: "With more charges, the field map becomes more complex. Identify regions of strong field (near charges) and weak field (distant points or cancellation points)."
    likely_errors:
      - id: le_N_missing_charge
        when: "true"
        status: warning
        text:
          es: "Error frecuente: omitir una carga del sistema por considerarla pequeña. Todas las cargas del sistema deben incluirse en la suma, independientemente de su valor."
          en: "Common error: omitting a charge from the system for being small. All charges in the system must be included in the sum, regardless of their value."
      - id: le_N_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que el número de términos en la suma coincide con el número de cargas fuente del sistema."
          en: "Verify that the number of terms in the sum equals the number of source charges in the system."
    next_step_rules:
      - id: ns_N_fallback
        when: "true"
        status: info
        text:
          es: "Con N conocido, organizar los cálculos en una tabla: una fila por carga, con columnas para q_i, r_i, módulo de la contribución, y componentes x e y."
          en: "With N known, organise the calculations in a table: one row per charge, with columns for q_i, r_i, contribution magnitude, and x and y components."

cross_checks:
  - id: cc_F_from_E
    description:
      es: "Si se conoce E_total, multiplicar por la carga de prueba debe dar F_total. Verificar consistencia entre los dos resultados."
      en: "If E_total is known, multiplying by the test charge must give F_total. Verify consistency between both results."
  - id: cc_symmetry
    description:
      es: "Si el sistema tiene simetría de rotación o reflexión, los vectores resultado deben respetar esa simetría."
      en: "If the system has rotational or reflection symmetry, the result vectors must respect that symmetry."

error_patterns:
  - id: ep_scalar_sum
    pattern:
      es: "El alumno reporta F_total o E_total como suma de módulos escalares."
      en: "The student reports F_total or E_total as a sum of scalar magnitudes."
    correction:
      es: "La superposición es vectorial: descomponer en componentes, sumar por componentes, calcular el módulo del vector resultante."
      en: "Superposition is vectorial: decompose into components, add by components, compute the resultant vector magnitude."
  - id: ep_wrong_ri
    pattern:
      es: "El alumno usa la distancia entre cargas fuente en lugar de la distancia de cada carga al punto de observación."
      en: "The student uses the distance between source charges instead of the distance from each charge to the observation point."
    correction:
      es: "r_i es siempre la distancia desde la carga i hasta el punto de observación, no la separación entre cargas fuente."
      en: "r_i is always the distance from charge i to the observation point, not the separation between source charges."

graph_binding:
  default_graph: Coord
  x_variable: r_i
  y_variable: F_total
  secondary_y: E_total
  annotations:
    - "Marcar los puntos de campo nulo o fuerza nula"
    - "Indicar la contribución de cada carga fuente con vectores separados"

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
