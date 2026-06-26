const e=`version: 1
formulas:
  - id: equilibrio_traslacional_vectorial
    title:
      es: Primera condicion de equilibrio (vectorial)
      en: First equilibrium condition (vector)
    equation: "sum_F_ext = 0"
    latex: "\\\\sum \\\\vec{F}_{ext} = \\\\vec{0}"
    rearrangements: []
    category: structural
    relation_type: fundamental_law
    physical_meaning:
      es: Un cuerpo permanece en equilibrio traslacional si la suma vectorial de todas las fuerzas externas es nula.
      en: A body remains in translational equilibrium if the vector sum of all external forces equals zero.
    constraints: "Marco de referencia inercial; fuerzas coplanarias en 2D."
    validity:
      es: Valido para particulas y centros de masa de cuerpos rigidos en marcos inerciales.
      en: Valid for particles and centers of mass of rigid bodies in inertial frames.
    dimension_check: "[N] = [0]"
    calculable: false
    motivo_no_calculable: "Es una condicion de existencia, no una relacion de calculo directo."
    used_in: [estatica, ingenieria_civil, mecanica_estructural]
    interpretation_tags: [equilibrium_check, force_balance]
    result_semantics:
      target: R
      meaning: "La resultante vectorial debe ser cero para cumplir equilibrio."
    domain_checks:
      - expr: "sum_F_ext == 0"
        message:
          es: "La sumatoria debe anularse en equilibrio."
          en: "The summation must vanish at equilibrium."
    coherence_checks:
      - expr: "abs(R) < 0.01"
        message:
          es: "Resultante casi nula confirma equilibrio."
          en: "Near-zero resultant confirms equilibrium."
    graph_implications: []
    pedagogical_triggers:
      - when: "R != 0"
        message:
          es: "Si la resultante no es cero, el cuerpo acelera; revisa el DCL."
          en: "If the resultant is not zero, the body accelerates; check the FBD."

  - id: equilibrio_por_componentes
    title:
      es: Ecuaciones de equilibrio por componentes
      en: Equilibrium equations by components
    equation: "sum_Fx = 0; sum_Fy = 0"
    latex: "\\\\begin{cases} \\\\sum F_x = 0 \\\\\\\\ \\\\sum F_y = 0 \\\\end{cases}"
    rearrangements:
      - target: T
        equation: "T = P / (2 * sin(theta))"
        latex: "T = \\\\frac{P}{2\\\\sin(\\\\theta)}"
    category: operative
    relation_type: scalar_decomposition
    physical_meaning:
      es: El equilibrio debe cumplirse de forma independiente en cada eje del sistema de coordenadas.
      en: Equilibrium must hold independently along each axis of the coordinate system.
    constraints: "Ejes ortogonales; sistema 2D."
    validity:
      es: Aplicable universalmente en mecanica 2D con ejes cartesianos.
      en: Universally applicable in 2D mechanics with Cartesian axes.
    dimension_check: "[N] = [0]"
    calculable: true
    motivo_no_calculable: null
    used_in: [resolucion_problemas, analisis_estatico]
    interpretation_tags: [component_check, axis_balance]
    result_semantics:
      target: T
      meaning: "Tension necesaria para mantener el equilibrio del sistema."
    domain_checks:
      - expr: "theta != 0 and theta != pi"
        message:
          es: "El angulo no puede ser 0 ni 180 grados para cables simetricos."
          en: "The angle cannot be 0 or 180 degrees for symmetric cables."
    coherence_checks:
      - expr: "T > 0"
        message:
          es: "La tension debe ser positiva; un valor negativo indica error de signo."
          en: "Tension must be positive; a negative value indicates a sign error."
      - expr: "T >= P / 2"
        message:
          es: "Con cables inclinados, la tension siempre supera la mitad del peso."
          en: "With inclined cables, tension always exceeds half the weight."
    graph_implications: []
    pedagogical_triggers:
      - when: "T < P"
        message:
          es: "Tension menor que el peso es posible solo si el angulo con la horizontal es mayor que 30 grados."
          en: "Tension less than the weight is possible only if the angle with the horizontal exceeds 30 degrees."

  - id: descomposicion_x
    title:
      es: Componente horizontal de una fuerza
      en: Horizontal force component
    equation: "Fx = F * cos(theta)"
    latex: "F_x = F\\\\cos(\\\\theta)"
    rearrangements:
      - target: F
        equation: "F = Fx / cos(theta)"
        latex: "F = \\\\frac{F_x}{\\\\cos(\\\\theta)}"
    category: operative
    relation_type: geometric_projection
    physical_meaning:
      es: Proyeccion de la fuerza sobre el eje horizontal del sistema de referencia.
      en: Projection of the force onto the horizontal axis of the reference frame.
    constraints: "Angulo medido desde el eje x positivo en sentido antihorario."
    validity:
      es: Geometria euclidiana estandar en dos dimensiones.
      en: Standard Euclidean geometry in two dimensions.
    dimension_check: "[N] = [N] * [1]"
    calculable: true
    motivo_no_calculable: null
    used_in: [analisis_estatico, descomposicion_vectorial]
    interpretation_tags: [projection, horizontal_component]
    result_semantics:
      target: F
      meaning: "Magnitud de la fuerza total a partir de su componente horizontal."
    domain_checks:
      - expr: "cos(theta) != 0"
        message:
          es: "El angulo no puede ser 90 ni 270 grados para despejar F desde F_x."
          en: "The angle cannot be 90 or 270 degrees to solve for F from F_x."
    coherence_checks:
      - expr: "abs(Fx) <= abs(F)"
        message:
          es: "La componente no puede superar en modulo a la fuerza total."
          en: "The component cannot exceed the total force in magnitude."
    graph_implications: []
    pedagogical_triggers:
      - when: "abs(Fx) > abs(F)"
        message:
          es: "Componente mayor que la fuerza total indica error en el angulo."
          en: "Component greater than total force indicates an angle error."

  - id: descomposicion_y
    title:
      es: Componente vertical de una fuerza
      en: Vertical force component
    equation: "Fy = F * sin(theta)"
    latex: "F_y = F\\\\sin(\\\\theta)"
    rearrangements:
      - target: F
        equation: "F = Fy / sin(theta)"
        latex: "F = \\\\frac{F_y}{\\\\sin(\\\\theta)}"
    category: operative
    relation_type: geometric_projection
    physical_meaning:
      es: Proyeccion de la fuerza sobre el eje vertical del sistema de referencia.
      en: Projection of the force onto the vertical axis of the reference frame.
    constraints: "Angulo medido desde el eje x positivo en sentido antihorario."
    validity:
      es: Geometria euclidiana estandar en dos dimensiones.
      en: Standard Euclidean geometry in two dimensions.
    dimension_check: "[N] = [N] * [1]"
    calculable: true
    motivo_no_calculable: null
    used_in: [analisis_estatico, descomposicion_vectorial]
    interpretation_tags: [projection, vertical_component]
    result_semantics:
      target: F
      meaning: "Magnitud de la fuerza total a partir de su componente vertical."
    domain_checks:
      - expr: "sin(theta) != 0"
        message:
          es: "El angulo no puede ser 0 ni 180 grados para despejar F desde F_y."
          en: "The angle cannot be 0 or 180 degrees to solve for F from F_y."
    coherence_checks:
      - expr: "abs(Fy) <= abs(F)"
        message:
          es: "La componente no puede superar en modulo a la fuerza total."
          en: "The component cannot exceed the total force in magnitude."
    graph_implications: []
    pedagogical_triggers:
      - when: "abs(Fy) > abs(F)"
        message:
          es: "Componente mayor que la fuerza total indica error en el angulo."
          en: "Component greater than total force indicates an angle error."

  - id: peso_desde_masa
    title:
      es: Peso a partir de la masa
      en: Weight from mass
    equation: "P = m * g"
    latex: "P = m g"
    rearrangements:
      - target: m
        equation: "m = P / g"
        latex: "m = \\\\frac{P}{g}"
    category: support
    relation_type: derived_definition
    physical_meaning:
      es: La masa determina el peso que debe ser compensado por las fuerzas verticales en equilibrio.
      en: Mass determines the weight that must be compensated by the vertical forces at equilibrium.
    constraints: "Campo gravitatorio aproximadamente uniforme."
    validity:
      es: Valida en problemas cercanos a la superficie terrestre o con g conocida.
      en: Valid in problems near Earth's surface or whenever g is known.
    dimension_check: "[N] = [kg][m s^-2]"
    calculable: true
    motivo_no_calculable: null
    used_in: [peso, estatica, equilibrio_traslacional]
    interpretation_tags: [weight_generation, load_source]
    result_semantics:
      target: m
      meaning: "La masa determina el peso externo que entra en la condicion de equilibrio."
    domain_checks:
      - expr: "m > 0"
        message:
          es: "La masa debe ser positiva."
          en: "Mass must be positive."
    coherence_checks:
      - expr: "g > 0"
        message:
          es: "La gravedad usada para calcular el peso debe ser positiva."
          en: "The gravitational acceleration used to compute weight must be positive."
    graph_implications: []
    pedagogical_triggers:
      - when: "m <= 0"
        message:
          es: "Una masa no positiva indica que los datos del problema son inconsistentes."
          en: "A non-positive mass indicates inconsistent problem data."
`;export{e as default};
