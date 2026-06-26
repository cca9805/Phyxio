const e=`leaf_id: sistemas-con-muelles
nombre:
  es: Sistemas con muelles
  en: Spring Systems

ui:
  default_formula: hooke_equivalente_1d

formulas:
  - id: hooke_equivalente_1d
    title:
      es: Ley de Hooke equivalente (vectorial)
      en: Equivalent Hooke law (vector)
    equation: Fel=-keq*x
    latex: "F_{el,tot} = -K \\\\cdot x"
    target: Fel
    category: fundamental
    relation_type: causal
    physical_meaning:
      es: La fuerza elastica total del sistema equivalente es proporcional y opuesta a la deformacion.
      en: The total elastic force of the equivalent system is proportional and opposite to the deformation.
    constraints:
      - expr: keq > 0
        message:
          es: K no puede ser cero.
          en: K cannot be zero.
    validity:
      es: Red de muelles ideales lineales dentro del rango elastico.
      en: Network of ideal linear springs within the elastic range.
    dimension_check: "[M L T^-2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [paralelo_dos_muelles, serie_dos_muelles, equilibrio_vertical]
    interpretation_tags: [rigidez, deformacion, fuerza]
    result_semantics:
      es: Fuerza total que experimenta el bloque conectado a la red de muelles.
      en: Total force experienced by the block connected to the spring network.
    domain_checks:
      - expr: keq > 0
        message:
          es: K debe ser positiva.
          en: K must be positive.
    coherence_checks:
      - expr: Fel * x <= 0
        message:
          es: La fuerza debe oponerse a la deformacion.
          en: The force must oppose the deformation.
    graph_implications:
      - variable: Fel
        axis: y
      - variable: x
        axis: x
    pedagogical_triggers:
      - condition: keq > 10000
        message:
          es: K es muy alta, sistema muy rigido.
          en: K is very high, very stiff system.
    rearrangements:
      - target: Fel
        equation: Fel = -keq*x
        latex: "F_{el,tot} = -K \\\\cdot x"
      - target: keq
        equation: keq = -Fel/x
        latex: "K = -\\\\frac{F_{el,tot}}{x}"
        constraints:
          - expr: x != 0
            message:
              es: x no puede ser cero.
              en: x cannot be zero.
      - target: x
        equation: x = -Fel/keq
        latex: "x = -\\\\frac{F_{el,tot}}{K}"
        constraints:
          - expr: keq != 0
            message:
              es: K no puede ser cero.
              en: K cannot be zero.

  - id: hooke_equivalente_modulo
    title:
      es: Ley de Hooke equivalente (modulo)
      en: Equivalent Hooke law (magnitude)
    equation: Fm=keq*x
    latex: "|F_{el,tot}| = K \\\\cdot |x|"
    target: Fm
    category: derived
    relation_type: causal
    physical_meaning:
      es: Modulo de la fuerza elastica equivalente en funcion del modulo de la deformacion.
      en: Magnitude of the equivalent elastic force as a function of deformation magnitude.
    constraints:
      - expr: keq > 0
        message:
          es: K no puede ser cero.
          en: K cannot be zero.
    validity:
      es: Red lineal de muelles dentro del rango elastico.
      en: Linear spring network within the elastic range.
    dimension_check: "[M L T^-2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [paralelo_dos_muelles, serie_dos_muelles]
    interpretation_tags: [rigidez, modulo, fuerza]
    result_semantics:
      es: Valor absoluto de la fuerza elastica total.
      en: Absolute value of the total elastic force.
    domain_checks:
      - expr: keq > 0
        message:
          es: K debe ser positiva.
          en: K must be positive.
    coherence_checks:
      - expr: Fm >= 0
        message:
          es: El modulo debe ser positivo.
          en: The magnitude must be positive.
    graph_implications:
      - variable: Fm
        axis: y
      - variable: x
        axis: x
    pedagogical_triggers:
      - condition: Fm > 1000
        message:
          es: Fuerza elevada, posible fuera de rango lineal.
          en: High force, possibly outside linear range.
    rearrangements:
      - target: Fm
        equation: Fm = keq*x
        latex: "|F_{el,tot}| = K \\\\cdot |x|"
      - target: keq
        equation: keq = Fm/x
        latex: "K = \\\\frac{|F_{el,tot}|}{|x|}"
        constraints:
          - expr: x != 0
            message:
              es: x no puede ser cero.
              en: x cannot be zero.

  - id: paralelo_dos_muelles
    title:
      es: Rigidez equivalente en paralelo
      en: Equivalent stiffness in parallel
    equation: keq=k1+k2
    latex: "K = k_1 + k_2"
    target: keq
    category: fundamental
    relation_type: structural
    physical_meaning:
      es: En paralelo las rigideces se suman porque todos los muelles sufren la misma deformacion.
      en: In parallel stiffnesses add because all springs share the same deformation.
    constraints:
      - expr: k1 > 0
        message:
          es: k no puede ser cero.
          en: k cannot be zero.
      - expr: k2 > 0
        message:
          es: k no puede ser cero.
          en: k cannot be zero.
    validity:
      es: Muelles en paralelo con deformacion identica.
      en: Parallel springs with identical deformation.
    dimension_check: "[M T^-2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [hooke_equivalente_1d, hooke_equivalente_modulo]
    interpretation_tags: [paralelo, rigidez, suma]
    result_semantics:
      es: Constante equivalente del bloque en paralelo.
      en: Equivalent constant of the parallel block.
    domain_checks:
      - expr: k1 > 0
        message:
          es: k debe ser positiva.
          en: k must be positive.
    coherence_checks:
      - expr: keq >= k1
        message:
          es: K en paralelo debe ser mayor o igual que cada k individual.
          en: K in parallel must be greater than or equal to each individual k.
    graph_implications:
      - variable: keq
        axis: y
      - variable: k1
        axis: x
    pedagogical_triggers:
      - condition: k1 == k2
        message:
          es: K es el doble de cada k individual.
          en: K is double each individual k.
    rearrangements:
      - target: keq
        equation: keq = k1 + k2
        latex: "K = k_1 + k_2"
      - target: k1
        equation: k1 = keq - k2
        latex: "k_1 = K - k_2"
      - target: k2
        equation: k2 = keq - k1
        latex: "k_2 = K - k_1"

  - id: serie_dos_muelles
    title:
      es: Rigidez equivalente en serie
      en: Equivalent stiffness in series
    equation: keq=(k1*k2)/(k1+k2)
    latex: "K = \\\\frac{k_1 \\\\cdot k_2}{k_1 + k_2}"
    target: keq
    category: fundamental
    relation_type: structural
    physical_meaning:
      es: En serie las inversas de las rigideces se suman porque cada muelle se deforma independientemente.
      en: In series the reciprocals of the stiffnesses add because each spring deforms independently.
    constraints:
      - expr: k1 + k2 != 0
        message:
          es: k no puede ser cero.
          en: k cannot be zero.
    validity:
      es: Muelles en serie con la misma fuerza transmitida.
      en: Series springs transmitting the same force.
    dimension_check: "[M T^-2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [hooke_equivalente_1d, hooke_equivalente_modulo]
    interpretation_tags: [serie, rigidez, inversa]
    result_semantics:
      es: Constante equivalente del bloque en serie.
      en: Equivalent constant of the series block.
    domain_checks:
      - expr: k1 > 0
        message:
          es: k debe ser positiva.
          en: k must be positive.
    coherence_checks:
      - expr: keq <= k1
        message:
          es: K en serie debe ser menor o igual que cada k individual.
          en: K in series must be less than or equal to each individual k.
    graph_implications:
      - variable: keq
        axis: y
      - variable: k1
        axis: x
    pedagogical_triggers:
      - condition: k1 == k2
        message:
          es: K es la mitad de cada k individual.
          en: K is half of each individual k.
    rearrangements:
      - target: keq
        equation: keq = (k1*k2)/(k1+k2)
        latex: "K = \\\\frac{k_1 \\\\cdot k_2}{k_1 + k_2}"
      - target: k1
        equation: k1 = (keq*k2)/(k2-keq)
        latex: "k_1 = \\\\frac{K \\\\cdot k_2}{k_2 - K}"
        constraints:
          - expr: k2 - keq != 0
            message:
              es: k no puede ser K.
              en: k cannot be K.
      - target: k2
        equation: k2 = (keq*k1)/(k1-keq)
        latex: "k_2 = \\\\frac{K \\\\cdot k_1}{k_1 - K}"
        constraints:
          - expr: k1 - keq != 0
            message:
              es: k no puede ser K.
              en: k cannot be K.

  - id: reparto_serie
    title:
      es: Reparto de deformacion en serie
      en: Deformation distribution in series
    equation: x=x1+x2
    latex: "x = x_1 + x_2"
    target: x
    category: structural
    relation_type: structural
    physical_meaning:
      es: La deformacion total es la suma de las deformaciones individuales.
      en: The total deformation is the sum of the individual deformations.
    constraints: []
    validity:
      es: Serie de muelles lineales sin masa.
      en: Series of massless linear springs.
    dimension_check: "[L]"
    calculable: false
    motivo_no_calculable:
      es: Relacion descriptiva, no resuelve una incognita unica.
      en: Descriptive relation, does not solve a single unknown.
    used_in: [serie_dos_muelles]
    interpretation_tags: [serie, deformacion, reparto]
    result_semantics:
      es: Deformacion total repartida entre los muelles.
      en: Total deformation distributed among the springs.
    domain_checks: []
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []
    rearrangements:
      - target: x
        equation: x = x1 + x2
        latex: "x = x_1 + x_2"
      - target: x1
        equation: x1 = x - x2
        latex: "x_1 = x - x_2"
      - target: x2
        equation: x2 = x - x1
        latex: "x_2 = x - x_1"

  - id: reparto_paralelo
    title:
      es: Reparto de fuerza en paralelo
      en: Force distribution in parallel
    equation: Fm=F1+F2
    latex: "|F_{el,tot}| = F_1 + F_2"
    target: Fm
    category: structural
    relation_type: structural
    physical_meaning:
      es: La fuerza total es la suma de las fuerzas de cada muelle en paralelo.
      en: The total force is the sum of each parallel spring force.
    constraints: []
    validity:
      es: Muelles en paralelo con deformacion identica.
      en: Parallel springs with identical deformation.
    dimension_check: "[M L T^-2]"
    calculable: false
    motivo_no_calculable:
      es: Relacion descriptiva, no resuelve una incognita unica.
      en: Descriptive relation, does not solve a single unknown.
    used_in: [paralelo_dos_muelles]
    interpretation_tags: [paralelo, fuerza, reparto]
    result_semantics:
      es: Fuerza total repartida entre los muelles.
      en: Total force distributed among the springs.
    domain_checks: []
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers: []
    rearrangements:
      - target: Fm
        equation: Fm = F1 + F2
        latex: "|F_{el,tot}| = F_1 + F_2"
      - target: F1
        equation: F1 = Fm - F2
        latex: "F_1 = |F_{el,tot}| - F_2"
      - target: F2
        equation: F2 = Fm - F1
        latex: "F_2 = |F_{el,tot}| - F_1"

  - id: equilibrio_vertical
    title:
      es: Posicion de equilibrio vertical
      en: Vertical equilibrium position
    equation: x_eq=m*g/keq
    latex: "x_{0} = \\\\frac{m \\\\cdot g}{K}"
    target: x_eq
    category: derived
    relation_type: causal
    physical_meaning:
      es: Deformacion estatica del sistema equivalente bajo su propio peso.
      en: Static deformation of the equivalent system under its own weight.
    constraints:
      - expr: keq > 0
        message:
          es: K no puede ser cero.
          en: K cannot be zero.
    validity:
      es: Sistema vertical en equilibrio estatico.
      en: Vertical system in static equilibrium.
    dimension_check: "[L]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - paralelo_dos_muelles
      - serie_dos_muelles
    interpretation_tags: [equilibrio, vertical, peso]
    result_semantics:
      es: Deformacion necesaria para soportar el peso.
      en: Deformation needed to support the weight.
    domain_checks:
      - expr: keq > 0
        message:
          es: K debe ser positiva.
          en: K must be positive.
    coherence_checks:
      - expr: x_eq > 0
        message:
          es: La deformacion de equilibrio debe ser positiva bajo gravedad.
          en: The equilibrium deformation must be positive under gravity.
    graph_implications:
      - variable: x_eq
        axis: y
      - variable: m
        axis: x
    pedagogical_triggers:
      - condition: x_eq > 0.1
        message:
          es: La deformacion de equilibrio es grande.
          en: The equilibrium deformation is large.
    rearrangements:
      - target: x_eq
        equation: x_eq = m*g/keq
        latex: "x_{0} = \\\\frac{m \\\\cdot g}{K}"
      - target: m
        equation: m = x_eq*keq/g
        latex: "m = \\\\frac{x_{0} \\\\cdot K}{g}"
      - target: keq
        equation: keq = m*g/x_eq
        latex: "K = \\\\frac{m \\\\cdot g}{x_{0}}"
        constraints:
          - expr: x_eq != 0
            message:
              es: x no puede ser cero.
              en: x cannot be zero.
      - target: g
        equation: g = x_eq*keq/m
        latex: "g = \\\\frac{x_{0} \\\\cdot K}{m}"
        constraints:
          - expr: m != 0
            message:
              es: m no puede ser cero.
              en: m cannot be zero.`;export{e as default};
