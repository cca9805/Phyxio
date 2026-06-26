const e=`\uFEFFversion: 1
formulas:
- id: peso_gravitatorio
  title:
    es: Definición de peso
    en: Weight definition
  equation: W = m * g
  latex: 'W = m g'
  rearrangements:
  - target: W
    equation: W = m * g
    latex: 'W = m g'
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: El peso es la fuerza gravitatoria sobre la masa suspendida.
    en: Weight is the gravitational force on suspended mass.
  constraints:
    es: Campo gravitatorio local aproximadamente constante.
    en: Local gravitational field approximately constant.
  validity:
    es: Problemas clásicos cerca de la superficie terrestre.
    en: Classical problems near Earth's surface.
  dimension_check: '[MLT^-2] = [M]*[LT^-2]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - gravity
  - load
  result_semantics:
    target: W
    kind: scalar
    sign_meaning:
      es: Su dirección física es hacia abajo.
      en: Its physical direction is downward.
    absolute_value_meaning:
      es: Intensidad de la carga gravitatoria.
      en: Intensity of gravitational load.
  domain_checks:
  - condition: m > 0 and g > 0
    message:
      es: Revisar masa y gravedad positivas.
      en: Check positive mass and gravity.
  coherence_checks:
  - check: W >= 0
    warning:
      es: El módulo del peso no debe ser negativo.
      en: Weight magnitude must not be negative.
  graph_implications:
  - if: m increases with fixed g
    then:
      es: W crece linealmente.
      en: W increases linearly.
  pedagogical_triggers:
  - condition: W == 0
    hint:
      es: Revisa si el dato de masa o gravedad es inválido para este contexto.
      en: Check whether mass or gravity data is invalid for this context.

- id: dinamica_vertical
  title:
    es: Segunda ley vertical
    en: Vertical second law
  equation: a = (T - W) / m
  latex: 'a = (T - W)/m'
  rearrangements:
  - target: a
    equation: a = (T - W) / m
    latex: 'a = (T - W)/m'
  category: dynamic
  relation_type: physical_law
  physical_meaning:
    es: La aceleración vertical depende del desbalance entre tensión y peso.
    en: Vertical acceleration depends on imbalance between tension and weight.
  constraints:
    es: Eje vertical definido y masa constante.
    en: Vertical axis defined and constant mass.
  validity:
    es: Modelo de bloque puntual con cuerda ideal.
    en: Point-block model with ideal rope.
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
      es: El signo depende del convenio del eje vertical.
      en: Sign depends on vertical-axis convention.
    absolute_value_meaning:
      es: Rapidez de cambio de velocidad del bloque.
      en: Rate of block velocity change.
  domain_checks:
  - condition: m > 0
    message:
      es: La masa debe ser positiva.
      en: Mass must be positive.
  coherence_checks:
  - check: abs(a) <= g + 1e-9
    warning:
      es: Si no hay fuerzas extra, el módulo de a no debería superar g en casos típicos.
      en: Without extra forces, |a| should not exceed g in typical cases.
  graph_implications:
  - if: T increases with fixed W and m
    then:
      es: La aceleración se desplaza hacia valores positivos del eje elegido.
      en: Acceleration shifts toward positive values of chosen axis.
  pedagogical_triggers:
  - condition: a == 0
    hint:
      es: Estás en equilibrio dinámico o velocidad constante.
      en: You are in dynamic equilibrium or constant speed.

- id: tension_aceleracion
  title:
    es: Tensión para una aceleración dada
    en: Tension for a given acceleration
  equation: T = m * (g + a)
  latex: 'T = m (g + a)'
  rearrangements:
  - target: T
    equation: T = m * (g + a)
    latex: 'T = m (g + a)'
  category: design
  relation_type: rearrangement
  physical_meaning:
    es: Permite dimensionar la tensión necesaria para imponer una aceleración.
    en: It allows sizing required tension to impose an acceleration.
  constraints:
    es: Mismo convenio de signos que en la ecuación dinámica.
    en: Same sign convention as in dynamic equation.
  validity:
    es: Sistemas verticales con vínculo ideal.
    en: Vertical systems with ideal link.
  dimension_check: '[MLT^-2] = [M]*([LT^-2]+[LT^-2])'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - tension
  - design
  result_semantics:
    target: T
    kind: scalar
    sign_meaning:
      es: Su signo refleja el convenio de fuerza en el eje.
      en: Its sign reflects force convention on the axis.
    absolute_value_meaning:
      es: Carga que debe soportar el cable durante la maniobra.
      en: Load the rope must support during maneuver.
  domain_checks:
  - condition: m > 0 and g > 0
    message:
      es: Verificar masa y gravedad válidas.
      en: Verify valid mass and gravity.
  coherence_checks:
  - check: T >= 0
    warning:
      es: Si T sale negativa, revisar signos o régimen físico.
      en: If T is negative, review signs or physical regime.
  graph_implications:
  - if: a increases with fixed m and g
    then:
      es: T aumenta linealmente.
      en: T increases linearly.
  pedagogical_triggers:
  - condition: T < W and moving_up_expected
    hint:
      es: Si esperas subida acelerada, T debería superar W.
      en: If upward accelerated motion is expected, T should exceed W.

- id: equilibrio_vertical
  title:
    es: Equilibrio vertical
    en: Vertical equilibrium
  equation: T = W
  latex: 'T = W'
  rearrangements:
  - target: T
    equation: T = W
    latex: 'T = W'
  category: static
  relation_type: equilibrium_condition
  physical_meaning:
    es: En equilibrio dinámico nulo, tensión y peso se compensan.
    en: In zero-dynamic equilibrium, tension and weight balance each other.
  constraints:
    es: Aceleración vertical nula.
    en: Zero vertical acceleration.
  validity:
    es: Reposo o velocidad constante vertical.
    en: Rest or constant vertical speed.
  dimension_check: '[MLT^-2] = [MLT^-2]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - equilibrium
  - baseline
  result_semantics:
    target: T
    kind: scalar
    sign_meaning:
      es: Igualdad de módulos en el convenio adoptado.
      en: Equality of magnitudes under adopted convention.
    absolute_value_meaning:
      es: Estado base de carga del cable.
      en: Baseline rope load state.
  domain_checks:
  - condition: W >= 0
    message:
      es: El peso debe ser físicamente consistente.
      en: Weight must be physically consistent.
  coherence_checks:
  - check: a == 0 when T == W
    warning:
      es: Si T y W son iguales, la aceleración debería ser nula.
      en: If T and W are equal, acceleration should be zero.
  graph_implications:
  - if: T equals W
    then:
      es: El punto queda en la línea de equilibrio.
      en: Point lies on equilibrium line.
  pedagogical_triggers:
  - condition: T == W
    hint:
      es: Puedes usar este caso como chequeo rápido del cálculo.
      en: You can use this case as a quick calculation check.

- id: energia_potencial
  title:
    es: Energía potencial gravitatoria
    en: Gravitational potential energy
  equation: E_p = m * g * h
  latex: 'E_p = m g h'
  rearrangements:
  - target: E_p
    equation: E_p = m * g * h
    latex: 'E_p = m g h'
  category: energy
  relation_type: energy_relation
  physical_meaning:
    es: Relaciona posición vertical con energía almacenada.
    en: It relates vertical position to stored energy.
  constraints:
    es: Referencia de altura definida explícitamente.
    en: Height reference explicitly defined.
  validity:
    es: Campo gravitatorio aproximadamente uniforme.
    en: Approximately uniform gravitational field.
  dimension_check: '[ML^2T^-2] = [M]*[LT^-2]*[L]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - energy
  - height
  result_semantics:
    target: E_p
    kind: scalar
    sign_meaning:
      es: Depende del nivel de referencia de altura.
      en: It depends on chosen height reference level.
    absolute_value_meaning:
      es: Energía disponible por posición en el campo gravitatorio.
      en: Energy available due to position in gravitational field.
  domain_checks:
  - condition: m > 0 and g > 0
    message:
      es: Revisar magnitudes físicas de entrada.
      en: Review physical input magnitudes.
  coherence_checks:
  - check: E_p == 0 when h == 0
    warning:
      es: Con referencia en h=0, la energía debería anularse.
      en: With reference at h=0, energy should vanish.
  graph_implications:
  - if: h increases
    then:
      es: E_p crece linealmente.
      en: E_p grows linearly.
  pedagogical_triggers:
  - condition: h < 0
    hint:
      es: Alturas negativas son válidas si el origen se definió arriba.
      en: Negative heights are valid if origin was defined above.\r
`;export{e as default};
