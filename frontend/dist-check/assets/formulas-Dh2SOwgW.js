const e=`version: 1
formulas:
  - id: peso_desde_masa
    title:
      es: peso a partir de masa y gravedad
      en: weight from mass and gravity
    equation: "W = m * g"
    latex: "W = m g"
    rearrangements:
      - target: W
        equation: "W = m * g"
        latex: "m g"
      - target: m
        equation: "m = W / g"
        latex: "\\\\frac{W}{g}"
    category: operative
    relation_type: constitutive_relation
    physical_meaning:
      es: Traduce una masa dada en la carga gravitatoria que entra en los ejemplos de equilibrio.
      en: Translates a given mass into the gravitational load entering equilibrium examples.
    constraints: "m > 0 y g > 0."
    validity:
      es: Valida para problemas cercanos a la superficie terrestre con g aproximadamente constante.
      en: Valid for problems near Earth's surface with approximately constant g.
    dimension_check: "[N] = [kg] [m/s^2]"
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [weight, load, gravity]
    result_semantics:
      target: W
      meaning: La fuerza peso fija la carga que las otras interacciones deben compensar.
    domain_checks:
      - expr: "m > 0 && g > 0"
        message:
          es: Masa y gravedad deben ser positivas para generar un peso fisico.
          en: Mass and gravity must be positive to generate a physical weight.
    coherence_checks:
      - expr: "W > 0"
        message:
          es: El peso debe salir positivo como modulo de la carga gravitatoria.
          en: Weight must come out positive as the magnitude of the gravitational load.
    graph_implications:
      - channel: load_arrow
        message:
          es: Si W aumenta, la flecha de carga del grafico debe crecer.
          en: If W increases, the load arrow in the graph must grow.
    pedagogical_triggers:
      - when: "abs(W - m) < 1e-9"
        message:
          es: Si W coincide numericamente con m, probablemente olvidaste multiplicar por g.
          en: If W numerically matches m, you probably forgot to multiply by g.

  - id: normal_plano_inclinado
    title:
      es: normal en plano inclinado sin aceleracion perpendicular
      en: normal on an inclined plane without perpendicular acceleration
    equation: "N = W * cos(alpha)"
    latex: "N = W \\\\cos(\\\\alpha)"
    rearrangements:
      - target: N
        equation: "N = W * cos(alpha)"
        latex: "W \\\\cos(\\\\alpha)"
      - target: W
        equation: "W = N / cos(alpha)"
        latex: "\\\\frac{N}{\\\\cos(\\\\alpha)}"
    category: operative
    relation_type: geometric_projection
    physical_meaning:
      es: La normal compensa la componente del peso perpendicular al plano.
      en: The normal balances the component of weight perpendicular to the plane.
    constraints: "0 <= alpha < pi/2."
    validity:
      es: Valida para un cuerpo apoyado sobre un plano rigido con eje normal bien definido.
      en: Valid for a body resting on a rigid plane with a well-defined normal axis.
    dimension_check: "[N] = [N] [1]"
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [normal_force, projection, support]
    result_semantics:
      target: N
      meaning: La superficie responde solo a la componente del peso que la comprime.
    domain_checks:
      - expr: "alpha >= 0 && alpha < 1.57079632679"
        message:
          es: El angulo del plano debe mantenerse entre horizontal y vertical.
          en: The plane angle must remain between horizontal and vertical.
    coherence_checks:
      - expr: "N <= W + 1e-9"
        message:
          es: En una rampa ordinaria la normal no debe superar al peso total.
          en: On an ordinary ramp the normal should not exceed the total weight.
    graph_implications:
      - channel: normal_arrow
        message:
          es: Al crecer alpha, la normal debe acortarse visualmente.
          en: As alpha grows, the normal should shorten visually.
    pedagogical_triggers:
      - when: "N > W + 1e-9"
        message:
          es: Una normal mayor que el peso suele indicar que se intercambio seno y coseno.
          en: A normal larger than weight usually means sine and cosine were swapped.

  - id: componente_paralela_del_peso
    title:
      es: componente paralela del peso
      en: parallel component of weight
    equation: "W_parallel = W * sin(alpha)"
    latex: "W_{parallel} = W \\\\sin(\\\\alpha)"
    rearrangements:
      - target: W_parallel
        equation: "W_parallel = W * sin(alpha)"
        latex: "W \\\\sin(\\\\alpha)"
      - target: W
        equation: "W = W_parallel / sin(alpha)"
        latex: "\\\\frac{W_{parallel}}{\\\\sin(\\\\alpha)}"
    category: operative
    relation_type: geometric_projection
    physical_meaning:
      es: Esta componente es la que intenta desplazar el cuerpo cuesta abajo.
      en: This component is the one that tends to move the body downhill.
    constraints: "0 < alpha < pi/2 para una rampa no degenerada."
    validity:
      es: Valida cuando el eje tangencial se alinea con la superficie del plano.
      en: Valid when the tangential axis is aligned with the plane surface.
    dimension_check: "[N] = [N] [1]"
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [driving_component, incline, projection]
    result_semantics:
      target: W_parallel
      meaning: La tendencia a deslizar depende de la parte del peso alineada con la pendiente.
    domain_checks:
      - expr: "alpha > 0 && alpha < 1.57079632679"
        message:
          es: La expresion se usa en rampas con inclinacion positiva menor que 90 grados.
          en: The expression is used for ramps with positive inclination smaller than 90 degrees.
    coherence_checks:
      - expr: "W_parallel <= W + 1e-9"
        message:
          es: La componente paralela no puede superar al peso total.
          en: The parallel component cannot exceed total weight.
    graph_implications:
      - channel: parallel_component
        message:
          es: Si alpha aumenta, la componente paralela debe crecer.
          en: If alpha increases, the parallel component should grow.
    pedagogical_triggers:
      - when: "W_parallel == 0"
        message:
          es: Una componente paralela nula solo es coherente con plano horizontal o peso nulo.
          en: A zero parallel component is coherent only for a horizontal plane or zero weight.

  - id: rozamiento_estatico_limite
    title:
      es: rozamiento estatico maximo
      en: maximum static friction
    equation: "F_s_max = mu_s * N"
    latex: "F_{s,max} = \\\\mu_s N"
    rearrangements:
      - target: F_s_max
        equation: "F_s_max = mu_s * N"
        latex: "\\\\mu_s N"
      - target: mu_s
        equation: "mu_s = F_s_max / N"
        latex: "\\\\frac{F_{s,max}}{N}"
    category: operative
    relation_type: contact_limit
    physical_meaning:
      es: Marca el techo del rozamiento estatico disponible antes del deslizamiento.
      en: It marks the ceiling of available static friction before slipping.
    constraints: "mu_s >= 0 y N >= 0."
    validity:
      es: Valida para contacto seco simple y aproximacion de Coulomb.
      en: Valid for simple dry contact and the Coulomb approximation.
    dimension_check: "[N] = [1] [N]"
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [friction_limit, contact, sticking]
    result_semantics:
      target: F_s_max
      meaning: El valor obtenido es una capacidad maxima, no la fuerza real en cualquier instante.
    domain_checks:
      - expr: "mu_s >= 0 && N >= 0"
        message:
          es: El coeficiente y la normal deben ser no negativos.
          en: The coefficient and the normal must be nonnegative.
    coherence_checks:
      - expr: "F_s_max >= 0"
        message:
          es: El rozamiento estatico maximo debe ser no negativo.
          en: Maximum static friction must be nonnegative.
    graph_implications:
      - channel: friction_bar
        message:
          es: La barra de adherencia debe crecer con mu_s o con N.
          en: The sticking bar should grow with mu_s or with N.
    pedagogical_triggers:
      - when: "F_s_max < W_parallel"
        message:
          es: Si el limite de adherencia queda por debajo de la demanda tangencial, el reposo no es sostenible.
          en: If the sticking limit lies below the tangential demand, rest is not sustainable.

  - id: tension_nudo_simetrico
    title:
      es: tension en nudo simetrico
      en: tension in a symmetric node
    equation: "T = W / (2 * sin(theta))"
    latex: "T = \\\\frac{W}{2 \\\\sin(\\\\theta)}"
    rearrangements:
      - target: T
        equation: "T = W / (2 * sin(theta))"
        latex: "\\\\frac{W}{2 \\\\sin(\\\\theta)}"
      - target: W
        equation: "W = 2 * T * sin(theta)"
        latex: "2 T \\\\sin(\\\\theta)"
    category: operative
    relation_type: symmetric_balance
    physical_meaning:
      es: Cada cable sostiene la mitad de la componente vertical necesaria para compensar el peso total.
      en: Each cable supports half of the vertical component needed to balance total weight.
    constraints: "0 < theta <= pi/2."
    validity:
      es: Valida para dos cables identicos, nudo central y ausencia de masa propia del cable.
      en: Valid for two identical cables, a central node, and negligible cable mass.
    dimension_check: "[N] = [N] / [1]"
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [tension, cables, symmetric_support]
    result_semantics:
      target: T
      meaning: Cuanto mas horizontal es el cable, mayor tension necesita cada rama.
    domain_checks:
      - expr: "theta > 0 && theta <= 1.57079632679"
        message:
          es: El angulo debe ser positivo y no superar 90 grados.
          en: The angle must be positive and cannot exceed 90 degrees.
    coherence_checks:
      - expr: "T >= W / 2"
        message:
          es: En un montaje simetrico, la tension no puede ser menor que la mitad del peso.
          en: In a symmetric setup, tension cannot be smaller than half the weight.
    graph_implications:
      - channel: tension_arrow
        message:
          es: Si theta disminuye, la flecha de tension debe alargarse con rapidez.
          en: If theta decreases, the tension arrow should lengthen rapidly.
    pedagogical_triggers:
      - when: "T > 5 * W"
        message:
          es: Una tension mucho mayor que el peso revela una geometria muy poco eficiente.
          en: A tension much larger than the weight reveals a very inefficient geometry.
`;export{e as default};
