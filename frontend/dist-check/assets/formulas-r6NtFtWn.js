const e=`version: 5
formulas:
  - id: lever_equilibrium
    title:
      es: equilibrio de momentos en la palanca
      en: torque equilibrium in the lever
    equation: P*d_P = R*d_R
    latex: P d_P = R d_R \\quad (\\text{clase_palanca} \\in \\{1,2,3\\})
    rearrangements:
      - target: P
        equation: P = (R*d_R)/d_P
        latex: \\frac{R d_R}{d_P}
      - target: R
        equation: R = (P*d_P)/d_R
        latex: \\frac{P d_P}{d_R}
      - target: d_P
        equation: d_P = (R*d_R)/P
        latex: \\frac{R d_R}{P}
      - target: d_R
        equation: d_R = (P*d_P)/R
        latex: \\frac{P d_P}{R}
    category: definition
    relation_type: rotational_equilibrium
    physical_meaning:
      es: La palanca ideal está en equilibrio cuando los momentos de entrada y salida se igualan.
      en: The ideal lever is in equilibrium when the input and output torques are equal.
    constraints:
      - expr: P >= 0 && R >= 0
        message:
          es: Las fuerzas del modelo se introducen como magnitudes no negativas.
          en: Model forces are entered as non-negative magnitudes.
      - expr: d_P >= 0 && d_R >= 0
        message:
          es: Los brazos deben ser distancias geométricas no negativas.
          en: The lever arms must be non-negative geometric distances.
    validity:
      es: Válida en palancas planas ideales con el mismo fulcro y momentos calculados respecto al apoyo.
      en: Valid in ideal planar levers with the same fulcrum and torques computed about that fulcrum.
    dimension_check:
      es: M L^2 T^-2
      en: M L^2 T^-2
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [torque_balance, lever_law, equilibrium]
    result_semantics:
      target: P
      kind: scalar_nonnegative
      sign_meaning:
        es: El modelo usa magnitudes positivas y separa el sentido de giro en la lectura física.
        en: The model uses positive magnitudes and separates rotation sense in the physical reading.
      absolute_value_meaning:
        es: El valor indica cuánta fuerza de entrada exige la geometría elegida.
        en: The value indicates how much input force the chosen geometry demands.
    domain_checks:
      - expr: d_P > 0 && d_R >= 0
        message:
          es: Para despejar P debe existir un brazo de potencia no nulo.
          en: To solve for P, a nonzero effort arm must exist.
    coherence_checks:
      - expr: abs(P*d_P - R*d_R) < 1e-9
        severity: ok
        message:
          es: La igualdad de momentos debe cumplirse en el modelo ideal.
          en: Equality of torques must hold in the ideal model.
    graph_implications:
      - channel: layout
        message:
          es: Si el apoyo cambia de posición, debe cambiar la lectura relativa de los brazos.
          en: If the fulcrum position changes, the relative arm reading must change.
    pedagogical_triggers:
      - detect_when: d_P < d_R && P > R
        message:
          es: "Cuando el brazo de potencia es menor, la fuerza de entrada debe crecer para equilibrar."
          en: "When the effort arm is shorter, the input force must increase to balance."

  - id: ideal_mechanical_advantage
    title:
      es: ventaja mecánica ideal
      en: ideal mechanical advantage
    equation: VM = d_P/d_R
    latex: VM = \\frac{d_P}{d_R}
    rearrangements:
      - target: VM
        equation: VM = d_P/d_R
        latex: \\frac{d_P}{d_R}
      - target: d_P
        equation: d_P = VM*d_R
        latex: VM d_R
      - target: d_R
        equation: d_R = d_P/VM
        latex: \\frac{d_P}{VM}
    category: auxiliary
    relation_type: geometric_ratio
    physical_meaning:
      es: La ventaja ideal compara el brazo de entrada con el brazo de salida.
      en: Ideal advantage compares the input arm with the output arm.
    constraints:
      - expr: d_P >= 0 && d_R > 0
        message:
          es: El brazo resistente debe ser positivo para formar la razón.
          en: The load arm must be positive to form the ratio.
    validity:
      es: Válida en el modelo ideal de palanca cuando las fuerzas actúan con brazos perpendiculares bien definidos.
      en: Valid in the ideal lever model when forces act with well-defined perpendicular arms.
    dimension_check:
      es: 1
      en: 1
    calculable: true
    motivo_no_calculable:
      es: ""
      en: ""
    used_in: [theory, examples, calculator]
    interpretation_tags: [mechanical_advantage, geometry, class_reading]
    result_semantics:
      target: VM
      kind: scalar_nonnegative
      sign_meaning:
        es: VM se interpreta como razón positiva sin signo.
        en: VM is interpreted as a positive ratio with no sign.
      absolute_value_meaning:
        es: El valor mide cuánta ayuda geométrica aporta la palanca.
        en: The value measures how much geometric help the lever provides.
    domain_checks:
      - expr: d_P >= 0 && d_R > 0
        message:
          es: La ventaja mecánica requiere un brazo resistente no nulo.
          en: Mechanical advantage requires a nonzero load arm.
    coherence_checks:
      - expr: VM >= 0
        severity: ok
        message:
          es: La ventaja mecánica ideal no debe salir negativa.
          en: Ideal mechanical advantage must not be negative.
    graph_implications:
      - channel: mechanical_advantage
        message:
          es: Si d_P crece o d_R disminuye, la lectura de VM debe aumentar.
          en: If d_P grows or d_R decreases, the VM reading should increase.
    pedagogical_triggers:
      - detect_when: VM > 1
        message:
          es: "VM mayor que 1 indica ventaja en fuerza a costa de recorrido o velocidad."
          en: "VM greater than 1 indicates force advantage at the cost of displacement or speed."

`;export{e as default};
