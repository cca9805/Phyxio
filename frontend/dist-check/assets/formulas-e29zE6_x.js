const e=`version: 1
formulas:
- id: aceleracion_centripeta_v
  title:
    es: Aceleracion centripeta en funcion de v
    en: Centripetal acceleration as a function of v
  equation: "ac = v**2 / r"
  latex: "a_c = \\\\frac{v^2}{r}"
  variables: [ac, v, r]
  used_in: [teoria, ejemplos, aplicaciones]
  category: kinematic
  relation_type: definition
  physical_meaning:
    es: La aceleracion centripeta crece con el cuadrado de la rapidez y disminuye con el radio.
    en: Centripetal acceleration grows with the square of the speed and decreases with the radius.
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
    - equation: "v >= 0"
      es: "v no puede ser cero"
      en: "v cannot be zero"
  validity:
    es: Movimiento circular con radio constante.
    en: Circular motion with constant radius.
  dimension_check: "LT^{-2} = L^2 T^{-2} / L"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [centripetal, acceleration, speed]
  result_semantics:
    es: Aceleracion necesaria para mantener la trayectoria curva.
    en: Acceleration needed to maintain the curved path.
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: ac
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "ac vs v curve"
  pedagogical_triggers:
    - trigger: "v doubles"
      insight:
        es: "Si v se duplica, ac se cuadruplica."
        en: "If v doubles, ac quadruples."
  rearrangements:
    - target: v
      equation: "v = (ac * r)**0.5"
      latex: "v = \\\\sqrt{a_c \\\\, r}"
      constraints:
        - equation: "ac >= 0"
          es: "ac no puede ser cero"
          en: "ac cannot be zero"
    - target: r
      equation: "r = v**2 / ac"
      latex: "r = \\\\frac{v^2}{a_c}"
      constraints:
        - equation: "ac > 0"
          es: "ac no puede ser cero"
          en: "ac cannot be zero"
- id: aceleracion_centripeta_omega
  title:
    es: Aceleracion centripeta en funcion de omega
    en: Centripetal acceleration as a function of omega
  equation: "ac = omega**2 * r"
  latex: "a_c = \\\\omega^2 \\\\, r"
  variables: [ac, omega, r]
  used_in: [teoria, ejemplos, aplicaciones]
  category: kinematic
  relation_type: definition
  physical_meaning:
    es: Otra forma de expresar ac cuando se conoce la velocidad angular.
    en: Another way to express ac when the angular velocity is known.
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  validity:
    es: Movimiento circular uniforme o no uniforme con radio fijo.
    en: Uniform or non-uniform circular motion with fixed radius.
  dimension_check: "LT^{-2} = T^{-2} L"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [centripetal, acceleration, angular]
  result_semantics:
    es: Aceleracion centripeta a partir de velocidad angular y radio.
    en: Centripetal acceleration from angular velocity and radius.
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: ac
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "ac vs omega curve"
  pedagogical_triggers:
    - trigger: "omega doubles"
      insight:
        es: "Si omega se duplica, ac se cuadruplica."
        en: "If omega doubles, ac quadruples."
  rearrangements:
    - target: omega
      equation: "omega = (ac / r)**0.5"
      latex: "\\\\omega = \\\\sqrt{\\\\frac{a_c}{r}}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: r
      equation: "r = ac / omega**2"
      latex: "r = \\\\frac{a_c}{\\\\omega^2}"
      constraints:
        - equation: "omega > 0"
          es: "omega no puede ser cero"
          en: "omega cannot be zero"
- id: relacion_v_omega
  title:
    es: Relacion entre v y omega
    en: Relationship between v and omega
  equation: "v = omega * r"
  latex: "v = \\\\omega \\\\, r"
  variables: [v, omega, r]
  used_in: [teoria, ejemplos]
  category: kinematic
  relation_type: equivalence
  physical_meaning:
    es: La rapidez tangencial es el producto de la velocidad angular por el radio.
    en: Tangential speed is the product of angular velocity and radius.
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  validity:
    es: Cualquier movimiento circular.
    en: Any circular motion.
  dimension_check: "LT^{-1} = T^{-1} L"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [speed, angular, radius]
  result_semantics:
    es: Convierte entre descripcion lineal y angular.
    en: Converts between linear and angular descriptions.
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: v
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "v vs omega line"
  pedagogical_triggers:
    - trigger: "r doubles"
      insight:
        es: "A igual omega, si r se duplica, v se duplica."
        en: "At the same omega, if r doubles, v doubles."
  rearrangements:
    - target: omega
      equation: "omega = v / r"
      latex: "\\\\omega = \\\\frac{v}{r}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: r
      equation: "r = v / omega"
      latex: "r = \\\\frac{v}{\\\\omega}"
      constraints:
        - equation: "omega > 0"
          es: "omega no puede ser cero"
          en: "omega cannot be zero"
- id: relacion_omega_periodo
  title:
    es: Relacion entre omega y T
    en: Relationship between omega and T
  equation: "omega = 2 * pi / T"
  latex: "\\\\omega = \\\\frac{2 \\\\pi}{T}"
  variables: [omega, pi, T]
  used_in: [teoria, ejemplos, aplicaciones]
  category: kinematic
  relation_type: equivalence
  physical_meaning:
    es: Convierte entre periodo y velocidad angular.
    en: Converts between period and angular velocity.
  constraints:
    - equation: "T > 0"
      es: "T no puede ser cero"
      en: "T cannot be zero"
  validity:
    es: Cualquier movimiento periodico circular.
    en: Any periodic circular motion.
  dimension_check: "T^{-1} = 1 / T"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [angular, period, frequency]
  result_semantics:
    es: Velocidad angular a partir del periodo.
    en: Angular velocity from the period.
  domain_checks:
    - var: T
      condition: "> 0"
  coherence_checks:
    - target: omega
      condition: "> 0"
  graph_implications:
    - graph: Coord
      role: "omega vs T hyperbola"
  pedagogical_triggers:
    - trigger: "T halves"
      insight:
        es: "Si T se reduce a la mitad, omega se duplica."
        en: "If T halves, omega doubles."
  rearrangements:
    - target: T
      equation: "T = 2 * pi / omega"
      latex: "T = \\\\frac{2 \\\\pi}{\\\\omega}"
      constraints:
        - equation: "omega > 0"
          es: "omega no puede ser cero"
          en: "omega cannot be zero"
- id: newton_radial
  title:
    es: Segunda ley de Newton en la direccion radial
    en: Newton second law in the radial direction
  equation: "Frad = m * ac"
  latex: "F_{rad} = m \\\\, a_c"
  variables: [Frad, m, ac]
  used_in: [teoria, ejemplos]
  category: dynamic
  relation_type: law
  physical_meaning:
    es: La resultante de las fuerzas reales en la direccion radial iguala m por ac.
    en: The resultant of the real forces in the radial direction equals m times ac.
  constraints:
    - equation: "m > 0"
      es: "m no puede ser cero"
      en: "m cannot be zero"
  validity:
    es: Sistema con aceleracion centripeta definida.
    en: System with defined centripetal acceleration.
  dimension_check: "MLT^{-2} = M LT^{-2}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [newton, radial, centripetal]
  result_semantics:
    es: Fuerza neta radial necesaria para el movimiento circular.
    en: Net radial force needed for circular motion.
  domain_checks:
    - var: m
      condition: "> 0"
  coherence_checks:
    - target: Frad
      condition: ">= 0"
  graph_implications:
    - graph: Dcl
      role: "radial force diagram"
  pedagogical_triggers:
    - trigger: "m increases"
      insight:
        es: "Mayor masa requiere mayor fuerza radial."
        en: "Greater mass requires greater radial force."
  rearrangements:
    - target: m
      equation: "m = Frad / ac"
      latex: "m = \\\\frac{F_{rad}}{a_c}"
      constraints:
        - equation: "ac > 0"
          es: "ac no puede ser cero"
          en: "ac cannot be zero"
    - target: ac
      equation: "ac = Frad / m"
      latex: "a_c = \\\\frac{F_{rad}}{m}"
      constraints:
        - equation: "m > 0"
          es: "m no puede ser cero"
          en: "m cannot be zero"
- id: fuerza_centripeta_modulo
  title:
    es: Modulo de la fuerza centripeta
    en: Centripetal force magnitude
  equation: "Fc = m * v**2 / r"
  latex: "F_c = \\\\frac{m \\\\, v^2}{r}"
  variables: [Fc, m, v, r]
  used_in: [teoria, ejemplos, aplicaciones]
  category: dynamic
  relation_type: combined
  physical_meaning:
    es: Combina la segunda ley de Newton radial con la expresion cinematica de ac.
    en: Combines the radial Newton second law with the kinematic expression for ac.
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
    - equation: "m > 0"
      es: "m no puede ser cero"
      en: "m cannot be zero"
  validity:
    es: Movimiento circular con radio constante.
    en: Circular motion with constant radius.
  dimension_check: "MLT^{-2} = M L^2 T^{-2} / L"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [centripetal, force, speed]
  result_semantics:
    es: Valor de la fuerza neta radial usando rapidez y radio.
    en: Value of the net radial force using speed and radius.
  domain_checks:
    - var: r
      condition: "> 0"
    - var: m
      condition: "> 0"
  coherence_checks:
    - target: Fc
      condition: ">= 0"
  graph_implications:
    - graph: Dcl
      role: "centripetal force on diagram"
  pedagogical_triggers:
    - trigger: "v doubles"
      insight:
        es: "Si v se duplica, Fc se cuadruplica."
        en: "If v doubles, Fc quadruples."
  rearrangements:
    - target: v
      equation: "v = (Fc * r / m)**0.5"
      latex: "v = \\\\sqrt{\\\\frac{F_c \\\\, r}{m}}"
      constraints:
        - equation: "m > 0"
          es: "m no puede ser cero"
          en: "m cannot be zero"
    - target: r
      equation: "r = m * v**2 / Fc"
      latex: "r = \\\\frac{m \\\\, v^2}{F_c}"
      constraints:
        - equation: "Fc > 0"
          es: "Fc no puede ser cero"
          en: "Fc cannot be zero"
    - target: m
      equation: "m = Fc * r / v**2"
      latex: "m = \\\\frac{F_c \\\\, r}{v^2}"
      constraints:
        - equation: "v > 0"
          es: "v no puede ser cero"
          en: "v cannot be zero"`;export{e as default};
