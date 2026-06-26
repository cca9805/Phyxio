const e=`version: 1\r
ui:\r
  default_formula: trabajo_torque_constante\r
formulas:\r
  - id: trabajo_torque_constante\r
    title: { es: "Trabajo con torque constante", en: "Work with constant torque" }\r
    equation: "W = tau*theta"\r
    latex: 'W=\\tau\\Delta\\theta'\r
    rearrangements:\r
      - target: W\r
        equation: "W = tau*theta"\r
        latex: 'W=\\tau\\Delta\\theta'\r
      - target: tau\r
        equation: "tau = W/theta"\r
        latex: '\\tau=\\frac{W}{\\Delta\\theta}'\r
      - target: theta\r
        equation: "theta = W/tau"\r
        latex: '\\Delta\\theta=\\frac{W}{\\tau}'\r
    category: "work"\r
    relation_type: "definition"\r
    physical_meaning: { es: "El trabajo rotacional es torque por desplazamiento angular si el torque es constante.", en: "Rotational work is torque times angular displacement when torque is constant." }\r
    constraints: ["torque constante", "theta en radianes", "eje fijo"]\r
    validity: { es: "Válida cuando tau no cambia durante el giro considerado.", en: "Valid when tau does not change during the considered turn." }\r
    dimension_check: "N m = J"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "interpretacion"]\r
    interpretation_tags: ["constant_torque", "signed_work"]\r
    result_semantics:\r
      target: W\r
      kind: signed_scalar\r
      sign_meaning: { es: "positivo si el torque favorece el giro elegido", en: "positive if torque favors the chosen rotation" }\r
      absolute_value_meaning: { es: "energía transferida por el torque", en: "energy transferred by torque" }\r
    domain_checks:\r
      - { expr: "true", message: { es: "Revisar que theta esté en radianes.", en: "Check theta is in radians." } }\r
    coherence_checks:\r
      - { expr: "true", message: { es: "Trabajo positivo debe aumentar energía rotacional si no hay pérdidas.", en: "Positive work should increase rotational energy if there are no losses." } }\r
    graph_implications:\r
      - "En torque constante, el área tau-theta es un rectángulo."\r
    pedagogical_triggers:\r
      - { when: "true", message: { es: "No usar grados como radianes.", en: "Do not use degrees as radians." } }\r
\r
  - id: trabajo_torque_variable\r
    title: { es: "Trabajo con torque variable", en: "Work with variable torque" }\r
    equation: "W = tau*theta"\r
    latex: 'W=\\int_{\\theta_i}^{\\theta_f}\\tau(\\theta)\\,d\\theta'\r
    rearrangements:\r
      - target: W\r
        equation: "W = tau*theta"\r
        latex: 'W=\\int_{\\theta_i}^{\\theta_f}\\tau(\\theta)\\,d\\theta'\r
    category: "work"\r
    relation_type: "integral_balance"\r
    physical_meaning: { es: "El trabajo es el área bajo la curva torque frente a ángulo.", en: "Work is the area under the torque versus angle curve." }\r
    constraints: ["tau como función de theta", "eje y signo definidos"]\r
    validity: { es: "Necesaria cuando tau cambia con la posición angular.", en: "Required when tau changes with angular position." }\r
    dimension_check: "N m * rad = J"\r
    calculable: false\r
    motivo_no_calculable: { es: "Requiere integración de una función.", en: "Requires integration of a function." }\r
    used_in: ["teoria", "ejemplos", "interpretacion"]\r
    interpretation_tags: ["area", "variable_torque"]\r
    result_semantics:\r
      target: W\r
      kind: signed_scalar\r
      sign_meaning: { es: "el signo depende del área algebraica", en: "the sign depends on algebraic area" }\r
      absolute_value_meaning: { es: "transferencia angular acumulada", en: "accumulated angular transfer" }\r
    domain_checks:\r
      - { expr: "true", message: { es: "La curva tau(theta) debe estar definida.", en: "The tau(theta) curve must be defined." } }\r
    coherence_checks:\r
      - { expr: "true", message: { es: "Si tau cambia de signo, las áreas pueden compensarse.", en: "If tau changes sign, areas may cancel." } }\r
    graph_implications:\r
      - "El área firmada bajo la curva representa W."\r
    pedagogical_triggers:\r
      - { when: "true", message: { es: "No reemplazar por tau*theta si tau varía mucho.", en: "Do not replace it with tau*theta if tau varies strongly." } }\r
\r
  - id: potencia_angular\r
    title: { es: "Potencia angular instantánea", en: "Instantaneous angular power" }\r
    equation: "P = tau*omega"\r
    latex: 'P=\\tau\\omega'\r
    rearrangements:\r
      - target: P\r
        equation: "P = tau*omega"\r
        latex: 'P=\\tau\\omega'\r
      - target: tau\r
        equation: "tau = P/omega"\r
        latex: '\\tau=\\frac{P}{\\omega}'\r
      - target: omega\r
        equation: "omega = P/tau"\r
        latex: '\\omega=\\frac{P}{\\tau}'\r
    category: "power"\r
    relation_type: "rate"\r
    physical_meaning: { es: "La potencia angular mide la rapidez con que el torque transfiere energía.", en: "Angular power measures how fast torque transfers energy." }\r
    constraints: ["tau y omega con el mismo eje", "omega en rad/s"]\r
    validity: { es: "Válida para potencia instantánea alrededor de un eje definido.", en: "Valid for instantaneous power about a defined axis." }\r
    dimension_check: "N m / s = W"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    interpretation_tags: ["power", "rate"]\r
    result_semantics:\r
      target: P\r
      kind: signed_scalar\r
      sign_meaning: { es: "positivo si el torque entrega energía al giro", en: "positive if torque delivers energy to the spin" }\r
      absolute_value_meaning: { es: "ritmo de transferencia de energía", en: "rate of energy transfer" }\r
    domain_checks:\r
      - { expr: "true", message: { es: "Revisar que tau y omega compartan eje.", en: "Check tau and omega share the same axis." } }\r
    coherence_checks:\r
      - { expr: "true", message: { es: "Si omega es cero, la potencia instantánea es cero aunque haya torque.", en: "If omega is zero, instantaneous power is zero even if torque exists." } }\r
    graph_implications:\r
      - "P crece linealmente con tau para omega fija."\r
    pedagogical_triggers:\r
      - { when: "true", message: { es: "Distinguir trabajo acumulado y potencia instantánea.", en: "Distinguish accumulated work and instantaneous power." } }\r
`;export{e as default};
