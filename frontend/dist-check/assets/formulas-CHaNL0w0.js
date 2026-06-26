const e=`version: 1\r
ui:\r
  default_formula: energia_total_rodadura\r
formulas:\r
  - id: energia_total_rodadura\r
    title: { es: "Energía cinética total en rodadura", en: "Total kinetic energy in rolling" }\r
    equation: "K_total = 0.5*m*v_cm^2 + 0.5*I*omega^2"\r
    latex: 'K_{total}=\\frac{1}{2}mv_{cm}^{2}+\\frac{1}{2}I\\omega^{2}'\r
    rearrangements:\r
      - target: K_total\r
        equation: "K_total = 0.5*m*v_cm^2 + 0.5*I*omega^2"\r
        latex: 'K_{total}=\\frac{1}{2}mv_{cm}^{2}+\\frac{1}{2}I\\omega^{2}'\r
    category: "energy"\r
    relation_type: "definition"\r
    physical_meaning:\r
      es: "La energía de rodadura suma la parte traslacional del centro de masas y la parte rotacional alrededor del centro."\r
      en: "Rolling energy adds the translational part of the center of mass and the rotational part about the center."\r
    constraints: ["rodadura sin deslizamiento si se usa v_cm = R*omega", "I corresponde al eje central", "m > 0"]\r
    validity:\r
      es: "Válida para sólido rígido que rueda sin deslizar o para balances donde traslación y rotación se separan explícitamente."\r
      en: "Valid for a rigid body rolling without slipping or for balances where translation and rotation are separated explicitly."\r
    dimension_check: "kg*(m/s)^2 + kg*m^2*(1/s)^2 = J"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    interpretation_tags: ["rolling", "energy_split", "nonnegative"]\r
    result_semantics:\r
      target: K_total\r
      kind: scalar_nonnegative\r
      sign_meaning: { es: "no tiene signo de orientación", en: "it has no orientation sign" }\r
      absolute_value_meaning: { es: "energía cinética total asociada a la rodadura", en: "total kinetic energy associated with rolling" }\r
    domain_checks:\r
      - { expr: "m > 0", message: { es: "La masa debe ser positiva.", en: "Mass must be positive." } }\r
      - { expr: "I >= 0", message: { es: "El momento de inercia no puede ser negativo.", en: "Moment of inertia cannot be negative." } }\r
    coherence_checks:\r
      - { expr: "K_total >= 0", message: { es: "La energía cinética total debe ser no negativa.", en: "Total kinetic energy must be non-negative." } }\r
    graph_implications:\r
      - "La barra total debe ser la suma de contribución traslacional y contribución rotacional."\r
    pedagogical_triggers:\r
      - { when: "true", message: { es: "Distingue siempre traslación y rotación antes de sumar energía.", en: "Always distinguish translation and rotation before adding energy." } }\r
\r
  - id: condicion_rodadura_energia\r
    title: { es: "Condición cinemática de rodadura", en: "Rolling kinematic condition" }\r
    equation: "v_cm = R*omega"\r
    latex: 'v_{cm}=R\\omega'\r
    rearrangements:\r
      - target: R\r
        equation: "R = v_cm/omega"\r
        latex: 'R=\\frac{v_{cm}}{\\omega}'\r
    category: "constraint"\r
    relation_type: "kinematic_constraint"\r
    physical_meaning:\r
      es: "Relaciona avance y giro cuando el punto de contacto no desliza."\r
      en: "Relates forward motion and spin when the contact point does not slip."\r
    constraints: ["R > 0", "omega en rad/s", "contacto sin deslizamiento"]\r
    validity:\r
      es: "Solo debe imponerse si el contacto mantiene rodadura pura."\r
      en: "It should only be imposed if the contact maintains pure rolling."\r
    dimension_check: "m = m"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "interpretacion"]\r
    interpretation_tags: ["rolling_constraint", "contact"]\r
    result_semantics:\r
      target: R\r
      kind: scalar_positive\r
      sign_meaning: { es: "el radio no tiene signo", en: "radius has no sign" }\r
      absolute_value_meaning: { es: "tamaño geométrico que conecta avance y giro", en: "geometric size connecting advance and spin" }\r
    domain_checks:\r
      - { expr: "R > 0", message: { es: "El radio debe ser positivo.", en: "Radius must be positive." } }\r
    coherence_checks:\r
      - { expr: "abs(v_cm - R*omega) small", message: { es: "Si no se cumple, hay deslizamiento o datos incompatibles.", en: "If it is not satisfied, there is slipping or incompatible data." } }\r
    graph_implications:\r
      - "La curva de rodadura pura debe ligar v_cm y omega mediante R."\r
    pedagogical_triggers:\r
      - { when: "true", message: { es: "No impongas la condición de rodadura si el cuerpo patina.", en: "Do not impose rolling condition if the body slips." } }\r
\r
  - id: aceleracion_cm_rodadura\r
    title: { es: "Aceleración del centro de masas en rodadura", en: "Center-of-mass acceleration in rolling" }\r
    equation: "a_cm = R*alpha"\r
    latex: 'a_{cm}=R\\alpha'\r
    rearrangements:\r
      - target: a_cm\r
        equation: "a_cm = R*alpha"\r
        latex: 'a_{cm}=R\\alpha'\r
    category: "constraint"\r
    relation_type: "kinematic_constraint"\r
    physical_meaning:\r
      es: "Conecta aceleración lineal del centro de masas y aceleración angular cuando no hay deslizamiento."\r
      en: "Connects center-of-mass linear acceleration and angular acceleration when there is no slipping."\r
    constraints: ["R > 0", "rodadura sin deslizamiento"]\r
    validity:\r
      es: "Válida en el mismo régimen que la condición v_cm = R*omega."\r
      en: "Valid in the same regime as the condition v_cm = R*omega."\r
    dimension_check: "m/s^2 = m/s^2"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "interpretacion"]\r
    interpretation_tags: ["acceleration", "rolling_constraint"]\r
    result_semantics:\r
      target: a_cm\r
      kind: signed_scalar\r
      sign_meaning: { es: "el signo depende del eje de avance elegido", en: "the sign depends on the chosen forward axis" }\r
      absolute_value_meaning: { es: "intensidad de cambio de la velocidad del centro de masas", en: "intensity of change of center-of-mass velocity" }\r
    domain_checks:\r
      - { expr: "R > 0", message: { es: "Radio positivo requerido.", en: "Positive radius required." } }\r
    coherence_checks:\r
      - { expr: "true", message: { es: "El signo de alpha debe ser compatible con el de a_cm.", en: "The sign of alpha must be compatible with a_cm." } }\r
    graph_implications:\r
      - "Si R aumenta con alpha fijo, a_cm aumenta linealmente."\r
    pedagogical_triggers:\r
      - { when: "true", message: { es: "No confundas alpha con omega.", en: "Do not confuse alpha with omega." } }\r
\r
  - id: energia_mecanica_total_rodadura\r
    title: { es: "Energía mecánica total en una rampa", en: "Total mechanical energy on an incline" }\r
    equation: "E_total = K_total + m*g*R*sin(phi)"\r
    latex: 'E_{total}=K_{total}+m\\,g\\,R\\sin(\\phi)'
    rearrangements:\r
      - target: E_total\r
        equation: "E_total = K_total + m*g*R*sin(phi)"\r
        latex: 'E_{total}=K_{total}+m\\,g\\,R\\sin(\\phi)'
    category: "energy_balance"\r
    relation_type: "balance"\r
    physical_meaning:\r
      es: "Añade a la energía cinética de rodadura una referencia potencial útil para rampas o cambios de altura."\r
      en: "Adds to rolling kinetic energy a potential reference useful for inclines or height changes."\r
    constraints: ["g > 0", "phi definido", "sin pérdidas si E_total se conserva"]\r
    validity:\r
      es: "Útil como balance ideal si no hay disipación por deslizamiento o deformación."\r
      en: "Useful as an ideal balance if there is no dissipation by slipping or deformation."\r
    dimension_check: "J + kg*m/s^2*m = J"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    interpretation_tags: ["mechanical_energy", "incline", "balance"]\r
    result_semantics:\r
      target: E_total\r
      kind: scalar\r
      sign_meaning: { es: "depende del cero de energía potencial elegido", en: "depends on the chosen zero of potential energy" }\r
      absolute_value_meaning: { es: "energía mecánica total del modelo", en: "total mechanical energy of the model" }\r
    domain_checks:\r
      - { expr: "g > 0", message: { es: "La gravedad debe ser positiva.", en: "Gravity must be positive." } }\r
    coherence_checks:\r
      - { expr: "true", message: { es: "Si E_total se conserva, toda pérdida de altura debe aparecer como K_total o pérdidas declaradas.", en: "If E_total is conserved, every height loss must appear as K_total or declared losses." } }\r
    graph_implications:\r
      - "E_total fija el techo del reparto entre traslación y rotación."\r
    pedagogical_triggers:\r
      - { when: "true", message: { es: "Separa energía cinética total de energía mecánica total.", en: "Separate total kinetic energy from total mechanical energy." } }\r
`;export{e as default};
