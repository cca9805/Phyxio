const n=`version: 1
formulas:


- id: peso_gravitatorio
  title:
    es: Peso del bloque
    en: Block weight
  equation: W = m * g
  latex: 'W = m g'
  rearrangements:
  - target: W
    equation: W = m * g
    latex: 'W = m g'
  category: fundamental
  relation_type: physical_law
  physical_meaning:
    es: Fuerza de atracción gravitatoria sobre el bloque.
    en: Gravitational attraction force on the block.
  constraints:
    es: Gravedad constante.
    en: Constant gravity.
  validity:
    es: Cerca de la superficie terrestre.
    en: Near Earth's surface.
  dimension_check: '[MLT^-2] = [M]*[LT^-2]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  interpretation_tags:
  - weight
  - gravity
  result_semantics:
    target: W
    kind: scalar
    sign_meaning:
      es: Siempre positivo como módulo de fuerza.
      en: Always positive as force magnitude.
    absolute_value_meaning:
      es: Peso efectivo del cuerpo.
      en: Effective body weight.
  domain_checks:
  - condition: m > 0 and g > 0
    message:
      es: Revisar masa y gravedad.
      en: Review mass and gravity.
  coherence_checks:
  - check: W > 0
    warning:
      es: El peso no debería ser nulo en este leaf.
      en: Weight should not be zero in this leaf.
  graph_implications:
  - if: m increases
    then:
      es: El peso y el umbral de fricción aumentan proporcionalmente.
      en: Weight and friction threshold increase proportionally.
  pedagogical_triggers:
  - condition: W == 0
    hint:
      es: Sin peso no hay reacción normal ni fricción seca.
      en: Without weight there is no normal reaction or dry friction.

- id: normal_superficie
  title:
    es: Reacción normal en superficie horizontal
    en: Normal reaction on horizontal surface
  equation: N = W
  latex: 'N = W'
  rearrangements:
  - target: N
    equation: N = W
    latex: 'N = W'
  category: fundamental
  relation_type: physical_law
  physical_meaning:
    es: Fuerza de contacto perpendicular a la superficie que equilibra el peso.
    en: Contact force perpendicular to the surface that balances weight.
  constraints:
    es: Superficie horizontal y sin otras fuerzas verticales.
    en: Horizontal surface and no other vertical forces.
  validity:
    es: Válido mientras el bloque permanezca apoyado sin despegarse.
    en: Valid as long as the block remains supported without lifting off.
  dimension_check: '[MLT^-2] = [MLT^-2]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  interpretation_tags:
  - contact
  - normal
  result_semantics:
    target: N
    kind: scalar
    sign_meaning:
      es: Siempre positivo (hacia arriba en este modelo).
      en: Always positive (upward in this model).
    absolute_value_meaning:
      es: Intensidad de la compresión contra el suelo.
      en: Compression intensity against the ground.
  domain_checks:
  - condition: W > 0
    message:
      es: Peso debe ser positivo.
      en: Weight must be positive.
  coherence_checks:
  - check: N >= 0
    warning:
      es: La normal no puede ser negativa en contacto simple.
      en: Normal cannot be negative in simple contact.
  graph_implications:
  - if: W increases
    then:
      es: La normal aumenta y con ella todas las fuerzas de fricción.
      en: Normal increases and with it all friction forces.
  pedagogical_triggers:
  - condition: N == 0
    hint:
      es: Indica pérdida de contacto o ingravidez aparente.
      en: Indicates loss of contact or apparent weightlessness.

- id: umbral_estatico
  title:
    es: Umbral estático de arranque
    en: Static start threshold
  equation: f_s = mu_s * N
  latex: 'f_s = \\mu_s N'
  rearrangements:
  - target: f_s
    equation: f_s = mu_s * N
    latex: 'f_s = \\mu_s N'
  category: threshold
  relation_type: inequality_criterion
  physical_meaning:
    es: Define el máximo esfuerzo resistente antes de deslizar.
    en: Defines maximum resisting effort before sliding.
  constraints:
    es: Válido justo antes del inicio del movimiento.
    en: Valid right before motion starts.
  validity:
    es: Contactos secos en régimen estático.
    en: Dry contacts in static regime.
  dimension_check: '[MLT^-2] = [1]*[MLT^-2]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - threshold
  - static
  result_semantics:
    target: f_s
    kind: scalar
    sign_meaning:
      es: Se usa como módulo límite positivo.
      en: Used as positive limiting magnitude.
    absolute_value_meaning:
      es: Límite de agarre sin deslizamiento.
      en: Grip limit without sliding.
  domain_checks:
  - condition: mu_s >= 0 and N >= 0
    message:
      es: Revisar parámetros de contacto.
      en: Review contact parameters.
  coherence_checks:
  - check: f_s >= 0
    warning:
      es: El umbral debe ser positivo.
      en: Threshold must be positive.
  graph_implications:
  - if: f_s increases
    then:
      es: El inicio del movimiento ocurre para fuerzas mayores.
      en: Motion onset occurs at higher applied forces.
  pedagogical_triggers:
  - condition: f_s == 0
    hint:
      es: Sin fricción estática el bloque arranca con cualquier fuerza no nula.
      en: Without static friction the block starts with any nonzero force.

- id: friccion_cinetica
  title:
    es: Fricción cinética de Coulomb
    en: Coulomb kinetic friction
  equation: f_k = mu_k * N
  latex: 'f_k = \\mu_k N'
  rearrangements:
  - target: f_k
    equation: f_k = mu_k * N
    latex: 'f_k = \\mu_k N'
  category: constitutive
  relation_type: constitutive_relation
  physical_meaning:
    es: La fricción en deslizamiento es proporcional a la normal.
    en: Sliding friction is proportional to normal force.
  constraints:
    es: Régimen cinético con deslizamiento relativo.
    en: Kinetic regime with relative sliding.
  validity:
    es: Aproximación de fricción seca para velocidades moderadas.
    en: Dry-friction approximation for moderate speeds.
  dimension_check: '[MLT^-2] = [1]*[MLT^-2]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - friction
  - dissipation
  result_semantics:
    target: f_k
    kind: scalar
    sign_meaning:
      es: El signo depende del sentido del eje y movimiento.
      en: Sign depends on axis and motion direction.
    absolute_value_meaning:
      es: Intensidad de oposición al deslizamiento.
      en: Opposition intensity against sliding.
  domain_checks:
  - condition: mu_k >= 0 and N >= 0
    message:
      es: Verificar coeficiente y normal no negativos.
      en: Verify non-negative coefficient and normal.
  coherence_checks:
  - check: f_k >= 0
    warning:
      es: El módulo de fricción no debe ser negativo.
      en: Friction magnitude must not be negative.
  graph_implications:
  - if: mu_k increases
    then:
      es: La curva a(F) se desplaza hacia valores menores.
      en: The a(F) curve shifts toward lower values.
  pedagogical_triggers:
  - condition: mu_k > mu_s
    hint:
      es: Revisa datos; en muchos materiales mu_k es menor que mu_s.
      en: Review data; in many materials mu_k is lower than mu_s.

- id: segunda_ley_horizontal
  title:
    es: Segunda ley horizontal con fricción
    en: Horizontal second law with friction
  equation: a = (F - f_k) / m
  latex: 'a = (F - f_k)/m'
  rearrangements:
  - target: a
    equation: a = (F - f_k) / m
    latex: 'a = (F - f_k)/m'
  category: dynamic
  relation_type: physical_law
  physical_meaning:
    es: La aceleración surge de la diferencia entre empuje y resistencia.
    en: Acceleration comes from the difference between drive and resistance.
  constraints:
    es: Movimiento en eje horizontal y masa constante.
    en: Horizontal-axis motion and constant mass.
  validity:
    es: Modelo traslacional sin efectos rotacionales relevantes.
    en: Translational model without relevant rotational effects.
  dimension_check: '[LT^-2] = [MLT^-2]/[M]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - dynamics
  - acceleration
  result_semantics:
    target: a
    kind: scalar
    sign_meaning:
      es: El signo indica el sentido de cambio de velocidad.
      en: Sign indicates direction of velocity change.
    absolute_value_meaning:
      es: Rapidez con la que cambia el estado de movimiento.
      en: Rate at which motion state changes.
  domain_checks:
  - condition: m > 0
    message:
      es: La masa debe ser positiva para despejar a.
      en: Mass must be positive to solve for a.
  coherence_checks:
  - check: abs(a) <= abs(F/m) + 1e-9
    warning:
      es: Si la fricción reduce la fuerza neta, a no debe exceder F/m en módulo.
      en: If friction reduces net force, a should not exceed F/m in magnitude.
  graph_implications:
  - if: F increases with fixed m and mu_k
    then:
      es: La aceleración crece linealmente tras superar el umbral estático.
      en: Acceleration grows linearly after static threshold is exceeded.
  pedagogical_triggers:
  - condition: a == 0
    hint:
      es: Puede indicar equilibrio dinámico o fuerza neta nula.
      en: It may indicate dynamic equilibrium or zero net force.
`;export{n as default};
