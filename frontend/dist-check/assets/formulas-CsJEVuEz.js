const n=`version: 1
formulas:
- id: radial_general
  title: { es: "Ecuacion radial general", en: "General radial equation" }
  equation: "Frad = m * v**2 / r"
  latex: "F_{rad} = \\\\frac{m \\\\, v^2}{r}"
  variables: [ Frad, m, v, r ]
  used_in: [ teoria, ejemplos, aplicaciones ]
  category: dynamic
  relation_type: law
  physical_meaning: { es: "La fuerza neta radial sostiene el movimiento circular.", en: "The net radial force sustains the circular motion." }
  constraints:
  - equation: "r > 0"
    es: "r no puede ser cero"
    en: "r cannot be zero"
  validity: { es: "Movimiento circular de radio constante.", en: "Circular motion with constant radius." }
  dimension_check: "MLT^{-2} = M * (LT^{-1})^2 / L = MLT^{-2}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [ centripeta, dinamica_radial ]
  result_semantics:
    target: Frad
    es: "Frad es la fuerza neta dirigida hacia el centro."
    en: "Frad is the net force directed toward the centre."
  domain_checks:
  - var: r
    condition: "> 0"
  - var: v
    condition: ">= 0"
  coherence_checks:
  - target: Frad
    condition: ">= 0"
  graph_implications:
  - graph: Dcl
    role: "Indica la resultante radial en el DCL."
  pedagogical_triggers:
  - trigger: "v se duplica"
    insight: { es: "Frad se cuadruplica.", en: "Frad quadruples." }
  rearrangements:
  - target: Frad
    equation: "m * v**2 / r"
    latex: "\\\\frac{m \\\\, v^2}{r}"
    constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  - target: v
    equation: "(Frad * r / m)**0.5"
    latex: "\\\\sqrt{\\\\frac{F_{rad} \\\\, r}{m}}"
    constraints:
    - equation: "m > 0"
      es: "m no puede ser cero"
      en: "m cannot be zero"
  - target: m
    equation: "Frad * r / v**2"
    latex: "\\\\frac{F_{rad} \\\\, r}{v^2}"
    constraints:
    - equation: "v > 0"
      es: "v no puede ser cero"
      en: "v cannot be zero"
  - target: r
    equation: "m * v**2 / Frad"
    latex: "\\\\frac{m \\\\, v^2}{F_{rad}}"
    constraints:
    - equation: "Frad > 0"
      es: "Frad no puede ser cero"
      en: "Frad cannot be zero"
- id: punto_alto
  title: { es: "Ecuacion radial en el punto alto", en: "Radial equation at the top" }
  equation: "Nn = m * vT**2 / r - m * g"
  latex: "N = \\\\frac{m \\\\, v_{T}^2}{r} - m \\\\, g"
  variables: [ Nn, m, vT, r, g ]
  used_in: [ teoria, ejemplos, aplicaciones ]
  category: dynamic
  relation_type: derived
  physical_meaning: { es: "En el punto alto, peso y normal apuntan hacia el centro.", en: "At the top, weight and normal point toward the centre." }
  constraints:
  - equation: "r > 0"
    es: "r no puede ser cero"
    en: "r cannot be zero"
  validity: { es: "Punto mas alto del loop con pista circular.", en: "Highest point of the loop with circular track." }
  dimension_check: "MLT^{-2} = M * (LT^{-1})^2 / L - M * LT^{-2}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [ punto_alto, contacto, normal ]
  result_semantics:
    target: Nn
    es: "Nn es la fuerza de contacto de la pista en el punto alto."
    en: "Nn is the track contact force at the top."
  domain_checks:
  - var: r
    condition: "> 0"
  - var: vT
    condition: ">= 0"
  coherence_checks:
  - target: Nn
    condition: ">= 0"
  graph_implications:
  - graph: Dcl
    role: "Muestra N y mg ambos hacia el centro."
  pedagogical_triggers:
  - trigger: "Nn llega a cero"
    insight: { es: "El cuerpo pierde contacto con la pista.", en: "The body loses contact with the track." }
  rearrangements:
  - target: Nn
    equation: "m * vT**2 / r - m * g"
    latex: "\\\\frac{m \\\\, v_{T}^2}{r} - m \\\\, g"
    constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  - target: vT
    equation: "((Nn + m * g) * r / m)**0.5"
    latex: "\\\\sqrt{\\\\frac{(N + m \\\\, g) \\\\, r}{m}}"
    constraints:
    - equation: "m > 0"
      es: "m no puede ser cero"
      en: "m cannot be zero"
- id: velocidad_minima_alto
  title: { es: "Velocidad minima en el punto alto", en: "Minimum speed at the top" }
  equation: "vT = (g * r)**0.5"
  latex: "v_{T} = \\\\sqrt{g \\\\, r}"
  variables: [ vT, g, r ]
  used_in: [ teoria, ejemplos, aplicaciones ]
  category: kinematic
  relation_type: critical_condition
  physical_meaning: { es: "Rapidez minima para mantener contacto en el punto alto.", en: "Minimum speed to keep contact at the top." }
  constraints:
  - equation: "r > 0"
    es: "r no puede ser cero"
    en: "r cannot be zero"
  validity: { es: "Loop circular sin rozamiento, condicion N igual a cero.", en: "Circular loop without friction, condition N equals zero." }
  dimension_check: "(LT^{-2} * L)^{0.5} = LT^{-1}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [ contacto, critico, velocidad_minima ]
  result_semantics:
    target: vT
    es: "vT es la rapidez limite; por debajo el cuerpo cae."
    en: "vT is the threshold speed; below it the body falls."
  domain_checks:
  - var: r
    condition: "> 0"
  - var: g
    condition: "> 0"
  coherence_checks:
  - target: vT
    condition: "> 0"
  graph_implications:
  - graph: Coord
    role: "Marca el punto critico en la parte superior del loop."
  pedagogical_triggers:
  - trigger: "r se cuadruplica"
    insight: { es: "vT se duplica.", en: "vT doubles." }
  rearrangements:
  - target: vT
    equation: "(g * r)**0.5"
    latex: "\\\\sqrt{g \\\\, r}"
    constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  - target: r
    equation: "vT**2 / g"
    latex: "\\\\frac{v_{T}^2}{g}"
    constraints:
    - equation: "g > 0"
      es: "g no puede ser cero"
      en: "g cannot be zero"
- id: punto_bajo
  title: { es: "Ecuacion radial en el punto bajo", en: "Radial equation at the bottom" }
  equation: "Nn = m * vB**2 / r + m * g"
  latex: "N = \\\\frac{m \\\\, v_{B}^2}{r} + m \\\\, g"
  variables: [ Nn, m, vB, r, g ]
  used_in: [ teoria, ejemplos, aplicaciones ]
  category: dynamic
  relation_type: derived
  physical_meaning: { es: "En el punto bajo, la normal supera al peso para curvar la trayectoria.", en: "At the bottom, the normal exceeds the weight to curve the path." }
  constraints:
  - equation: "r > 0"
    es: "r no puede ser cero"
    en: "r cannot be zero"
  validity: { es: "Punto mas bajo del loop con pista circular.", en: "Lowest point of the loop with circular track." }
  dimension_check: "MLT^{-2} = M * (LT^{-1})^2 / L + M * LT^{-2}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [ punto_bajo, contacto, normal ]
  result_semantics:
    target: Nn
    es: "Nn es la fuerza de contacto en el punto bajo; siempre mayor que el peso."
    en: "Nn is the contact force at the bottom; always greater than the weight."
  domain_checks:
  - var: r
    condition: "> 0"
  - var: vB
    condition: ">= 0"
  coherence_checks:
  - target: Nn
    condition: "> 0"
  graph_implications:
  - graph: Dcl
    role: "Muestra N hacia el centro y mg hacia abajo."
  pedagogical_triggers:
  - trigger: "vB se duplica"
    insight: { es: "La normal aumenta mucho mas que el doble.", en: "The normal increases much more than double." }
  rearrangements:
  - target: Nn
    equation: "m * vB**2 / r + m * g"
    latex: "\\\\frac{m \\\\, v_{B}^2}{r} + m \\\\, g"
    constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  - target: vB
    equation: "((Nn - m * g) * r / m)**0.5"
    latex: "\\\\sqrt{\\\\frac{(N - m \\\\, g) \\\\, r}{m}}"
    constraints:
    - equation: "m > 0"
      es: "m no puede ser cero"
      en: "m cannot be zero"
- id: velocidad_minima_bajo
  title: { es: "Velocidad minima en el punto bajo", en: "Minimum speed at the bottom" }
  equation: "vB = (5 * g * r)**0.5"
  latex: "v_{B} = \\\\sqrt{5 \\\\, g \\\\, r}"
  variables: [ vB, g, r ]
  used_in: [ teoria, ejemplos, aplicaciones ]
  category: kinematic
  relation_type: critical_condition
  physical_meaning: { es: "Rapidez minima en el punto bajo para completar el loop.", en: "Minimum speed at the bottom to complete the loop." }
  constraints:
  - equation: "r > 0"
    es: "r no puede ser cero"
    en: "r cannot be zero"
  validity: { es: "Loop circular sin rozamiento con conservacion de energia.", en: "Circular loop without friction with energy conservation." }
  dimension_check: "(LT^{-2} * L)^{0.5} = LT^{-1}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [ contacto, energia, velocidad_minima ]
  result_semantics:
    target: vB
    es: "vB es la rapidez de entrada para completar el bucle."
    en: "vB is the entry speed to complete the loop."
  domain_checks:
  - var: r
    condition: "> 0"
  - var: g
    condition: "> 0"
  coherence_checks:
  - target: vB
    condition: "> 0"
  graph_implications:
  - graph: Coord
    role: "Marca la condicion critica en la base del loop."
  pedagogical_triggers:
  - trigger: "r se cuadruplica"
    insight: { es: "vB se duplica.", en: "vB doubles." }
  rearrangements:
  - target: vB
    equation: "(5 * g * r)**0.5"
    latex: "\\\\sqrt{5 \\\\, g \\\\, r}"
    constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  - target: r
    equation: "vB**2 / (5 * g)"
    latex: "\\\\frac{v_{B}^2}{5 \\\\, g}"
    constraints:
    - equation: "g > 0"
      es: "g no puede ser cero"
      en: "g cannot be zero"
`;export{n as default};
