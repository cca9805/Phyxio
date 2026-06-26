const e=`\uFEFFversion: 5
id: rueda-y-eje
nombre:
  es: Rueda y eje
  en: Wheel and axle
area: mecanica
bloque: aplicaciones
subbloque: maquinas-simples

formulas:
- id: ley_rueda_ideal
  title:
    es: Esfuerzo en sistema ideal
    en: Ideal system effort
  equation: FR = Fr * r / R
  latex: "F_R = \\\\frac{F_r \\\\cdot r}{R}"
  rearrangements:
  - target: FR
    equation: FR = Fr * r / R
    latex: "F_R = \\\\frac{F_r \\\\cdot r}{R}"
  - target: Fr
    equation: Fr = FR * R / r
    latex: "F_r = \\\\frac{F_R \\\\cdot R}{r}"
  - target: R
    equation: R = Fr * r / FR
    latex: "R = \\\\frac{F_r \\\\cdot r}{F_R}"
  - target: r
    equation: r = FR * R / Fr
    latex: "r = \\\\frac{F_R \\\\cdot R}{F_r}"
  physical_meaning:
    es: Expresa el equilibrio de torques en el sistema ideal. La fuerza aplicada en la rueda grande es inversamente proporcional a la razón de radios.
    en: Expresses torque equilibrium in the ideal system. The force applied to the large wheel is inversely proportional to the radius ratio.
  category: "estatica"
  relation_type: "ley"
  constraints: [ "R > r", "R > 0", "r > 0" ]
  validity:
    es: Sistema sin rozamiento en el eje ni deformación de los radios.
    en: System with no axle friction and no radius deformation.
  dimension_check: "F = F * L / L"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ "maquinas-simples", "mecanismos" ]
  interpretation_tags: [ "equilibrio", "ventaja-mecanica" ]
  result_semantics: "fuerza"
  domain_checks:
  - condition: "R <= r"
    severity: "warning"
    message:
      es: "Con R menor o igual que r no hay ventaja mecánica; se pierde fuerza."
      en: "With R less than or equal to r there is no mechanical advantage; force is lost."
  coherence_checks: []
  graph_implications:
    es: "Define la escala entre la flecha del esfuerzo en la rueda y la fuerza de salida en el eje."
    en: "Defines the scale between the effort arrow at the wheel and the output force at the axle."
  pedagogical_triggers: [ "equilibrio_de_torques", "regla_de_oro" ]

- id: ventaja_mecanica_ideal
  title:
    es: Ventaja mecánica ideal
    en: Ideal mechanical advantage
  equation: VM = R / r
  latex: "VM = \\\\frac{R}{r}"
  rearrangements:
  - target: VM
    equation: VM = R / r
    latex: "VM = \\\\frac{R}{r}"
  - target: R
    equation: R = VM * r
    latex: "R = VM \\\\cdot r"
  - target: r
    equation: r = R / VM
    latex: "r = \\\\frac{R}{VM}"
  physical_meaning:
    es: Factor por el que se multiplica la fuerza de entrada en ausencia de pérdidas; equivale a la razón de radios.
    en: Factor by which the input force is multiplied in the absence of losses; equals the radius ratio.
  category: "estatica"
  relation_type: "ratio"
  constraints: [ "R > 0", "r > 0" ]
  validity:
    es: Sistema ideal sin rozamiento.
    en: Ideal frictionless system.
  dimension_check: "1 = L / L"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ "maquinas-simples" ]
  interpretation_tags: [ "ventaja", "diseño" ]
  result_semantics: "ratio"
  domain_checks: []
  coherence_checks: []
  graph_implications:
    es: "Se visualiza como la razón entre los dos radios representados en el diagrama."
    en: "Visualized as the ratio between the two radii shown in the diagram."
  pedagogical_triggers: [ "ventaja_mecanica", "radios" ]

- id: ley_rueda_real
  title:
    es: Esfuerzo en sistema real
    en: Real system effort
  equation: FR = Fr * r / (eta * R)
  latex: "F_R = \\\\frac{F_r \\\\cdot r}{\\\\eta \\\\cdot R}"
  rearrangements:
  - target: FR
    equation: FR = Fr * r / (eta * R)
    latex: "F_R = \\\\frac{F_r \\\\cdot r}{\\\\eta \\\\cdot R}"
  - target: eta
    equation: eta = Fr * r / (FR * R)
    latex: "\\\\eta = \\\\frac{F_r \\\\cdot r}{F_R \\\\cdot R}"
  - target: Fr
    equation: Fr = FR * eta * R / r
    latex: "F_r = \\\\frac{F_R \\\\cdot \\\\eta \\\\cdot R}{r}"
  physical_meaning:
    es: Calcula el esfuerzo real necesario en la rueda teniendo en cuenta las pérdidas por rozamiento en el eje.
    en: Calculates the real effort required at the wheel accounting for friction losses at the axle.
  category: "dinamica"
  relation_type: "ley"
  constraints: [ "eta > 0", "eta <= 1" ]
  validity:
    es: Sistemas reales con rozamiento en el eje.
    en: Real systems with axle friction.
  dimension_check: "F = F * L / (1 * L)"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ "mecanismos", "ingenieria" ]
  interpretation_tags: [ "rendimiento", "friccion" ]
  result_semantics: "fuerza"
  domain_checks:
  - condition: "eta <= 0"
    severity: "error"
    message:
      es: "El rendimiento debe ser positivo para que el sistema opere."
      en: "Efficiency must be positive for the system to operate."
  coherence_checks: []
  graph_implications:
    es: "Aumenta el vector esfuerzo respecto al modelo ideal."
    en: "Increases the effort vector compared to the ideal model."
  pedagogical_triggers: [ "perdidas_por_friccion", "mantenimiento" ]

- id: ventaja_mecanica_real
  title:
    es: Ventaja mecánica real
    en: Real mechanical advantage
  equation: VM_real = eta * R / r
  latex: "VM_{real} = \\\\eta \\\\cdot \\\\frac{R}{r}"
  rearrangements:
  - target: VM_real
    equation: VM_real = eta * R / r
    latex: "VM_{real} = \\\\eta \\\\cdot \\\\frac{R}{r}"
  - target: eta
    equation: eta = VM_real * r / R
    latex: "\\\\eta = \\\\frac{VM_{real} \\\\cdot r}{R}"
  physical_meaning:
    es: Ventaja mecánica efectiva una vez descontadas las pérdidas; siempre menor que VM ideal.
    en: Effective mechanical advantage after deducting losses; always less than the ideal VM.
  category: "dinamica"
  relation_type: "ratio"
  constraints: [ "eta > 0", "eta <= 1" ]
  validity:
    es: Sistemas reales con rozamiento.
    en: Real systems with friction.
  dimension_check: "1 = 1 * L / L"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ "mecanismos", "ingenieria" ]
  interpretation_tags: [ "rendimiento", "ventaja" ]
  result_semantics: "ratio"
  domain_checks: []
  coherence_checks: []
  graph_implications:
    es: "Escala real de la flecha de esfuerzo respecto a la resistencia."
    en: "Real scale of the effort arrow relative to the resistance."
  pedagogical_triggers: [ "rendimiento", "comparacion_ideal_real" ]

- id: relacion_desplazamientos
  title:
    es: Relación de desplazamientos en arco
    en: Arc displacement relationship
  equation: sR = (R / r) * sr
  latex: "s_R = \\\\frac{R}{r} \\\\cdot s_r"
  rearrangements:
  - target: sR
    equation: sR = (R / r) * sr
    latex: "s_R = \\\\frac{R}{r} \\\\cdot s_r"
  - target: sr
    equation: sr = sR * r / R
    latex: "s_r = \\\\frac{s_R \\\\cdot r}{R}"
  physical_meaning:
    es: Para el mismo giro, el punto de la rueda recorre un arco R/r veces mayor que el del eje. Lo que se gana en fuerza se pierde en recorrido.
    en: For the same rotation, the point on the wheel travels an arc R/r times greater than the axle point. What is gained in force is lost in travel.
  category: "cinematica"
  relation_type: "restriccion"
  constraints: []
  validity:
    es: Rueda y eje rígidos y solidarios.
    en: Rigid and integral wheel and axle.
  dimension_check: "L = (L / L) * L"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ "cinematica" ]
  interpretation_tags: [ "distancia", "costo" ]
  result_semantics: "distancia"
  domain_checks: []
  coherence_checks: []
  graph_implications:
    es: "Determina la longitud de los vectores de desplazamiento en el diagrama cinemático."
    en: "Determines the length of displacement vectors in the kinematic diagram."
  pedagogical_triggers: [ "regla_de_oro", "trabajo_conservado" ]

- id: balance_energia_rueda
  title:
    es: Balance de energía en rueda y eje
    en: Energy balance in wheel and axle
  equation: FR * sR = (Fr * sr) / eta
  latex: "F_R \\\\cdot s_R = \\\\frac{F_r \\\\cdot s_r}{\\\\eta}"
  rearrangements:
  - target: FR
    equation: FR = (Fr * sr) / (eta * sR)
    latex: "F_R = \\\\frac{F_r \\\\cdot s_r}{\\\\eta \\\\cdot s_R}"
  - target: eta
    equation: eta = (Fr * sr) / (FR * sR)
    latex: "\\\\eta = \\\\frac{F_r \\\\cdot s_r}{F_R \\\\cdot s_R}"
  physical_meaning:
    es: El trabajo de entrada en la rueda se reparte entre el trabajo útil en el eje y el calor disipado por fricción.
    en: The input work at the wheel is distributed between useful work at the axle and heat dissipated by friction.
  category: "energia"
  relation_type: "balance"
  constraints: []
  validity:
    es: Conservación de la energía con pérdidas.
    en: Energy conservation with losses.
  dimension_check: "F L = (F L) / 1"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ "energia" ]
  interpretation_tags: [ "trabajo", "conservacion" ]
  result_semantics: "energia"
  domain_checks: []
  coherence_checks: []
  graph_implications:
    es: "Representado en balances de barras de trabajo: entrada, útil y pérdidas."
    en: "Shown in work bar balances: input, useful, and losses."
  pedagogical_triggers: [ "trabajo_y_energia", "rendimiento" ]

- id: torque
  title:
    es: Torque o momento de fuerza
    en: Torque or moment of force
  equation: tau = FR * R
  latex: "\\\\tau = F_R \\\\cdot R"
  rearrangements:
  - target: tau
    equation: tau = FR * R
    latex: "\\\\tau = F_R \\\\cdot R"
  - target: FR
    equation: FR = tau / R
    latex: "F_R = \\\\frac{\\\\tau}{R}"
  - target: R
    equation: R = tau / FR
    latex: "R = \\\\frac{\\\\tau}{F_R}"
  physical_meaning:
    es: Capacidad de una fuerza para producir giro alrededor de un punto. Es el concepto subyacente al equilibrio de la rueda y el eje; cuando los torques del esfuerzo y la resistencia se igualan, el sistema está en equilibrio.
    en: Capacity of a force to produce rotation around a point. It is the underlying concept behind wheel-and-axle equilibrium; when the torques of the effort and the resistance are equal, the system is balanced.
  category: "estatica"
  relation_type: "concepto"
  auxiliary: true
  constraints: []
  validity:
    es: Definición general válida para cualquier fuerza y brazo de momento.
    en: General definition valid for any force and moment arm.
  dimension_check: "F L = F * L"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ "maquinas-simples", "rotacion" ]
  interpretation_tags: [ "giro", "momento" ]
  result_semantics: "momento"
  domain_checks: []
  coherence_checks: []
  graph_implications:
    es: "No se visualiza directamente; su igualdad en ambos lados explica la flecha de equilibrio en el diagrama."
    en: "Not directly visualized; its equality on both sides explains the equilibrium arrow in the diagram."
  pedagogical_triggers: [ "equilibrio_de_torques", "momento_de_fuerza" ]

ui:
  default_formula: ley_rueda_real
  groups:
  - title:
      es: Fuerzas y equilibrio
      en: Forces and equilibrium
    items:
    - ley_rueda_ideal
    - ley_rueda_real
  - title:
      es: Ventaja mecánica
      en: Mechanical advantage
    items:
    - ventaja_mecanica_ideal
    - ventaja_mecanica_real
  - title:
      es: Cinemática y energía
      en: Kinematics and energy
    items:
    - relacion_desplazamientos
    - balance_energia_rueda
  - title:
      es: Conceptos auxiliares
      en: Auxiliary concepts
    items:
    - torque
`;export{e as default};
