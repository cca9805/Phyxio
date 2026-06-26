const n=`version: 1\r
formulas:\r
- id: segunda_ley_traslacional\r
  title:\r
    es: Segunda ley traslacional\r
    en: Translational second law\r
  equation: F_net = m*a\r
  latex: F_net = m*a\r
  rearrangements:\r
  - target: a\r
    equation: a = F_net/m\r
    latex: a = F_net/m\r
    constraints: []\r
  - target: F_net\r
    equation: F_net = m*a\r
    latex: F_net = m*a\r
    constraints: []\r
  category: fundamental\r
  relation_type: dynamical_law\r
  physical_meaning:\r
    es: Relaciona fuerza neta y aceleracion lineal para masa positiva.\r
    en: Relates net force and linear acceleration for positive mass.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser mayor que cero.\r
      en: Mass must be greater than zero.\r
  validity:\r
    es: Valida en marcos inerciales o en marcos no inerciales con correcciones explicitas.\r
    en: Valid in inertial frames or in non-inertial frames with explicit corrections.\r
  dimension_check: M*L/T^2 = M*L/T^2\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - segunda_ley\r
  - analogia\r
  result_semantics:\r
    target: a\r
    meaning: Resulta util para interpretar a en el contexto del leaf.\r
  domain_checks:\r
  - condition: m > 0\r
    message:\r
      es: Revisar el valor de masa y la coherencia de unidades.\r
      en: Check mass value and unit consistency.\r
  coherence_checks:\r
  - check: sign_consistency\r
    warning:\r
      es: Usar mismo convenio de signo para F_net y a.\r
      en: Use the same sign convention for F_net and a.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Para m constante, la grafica F_net contra a es lineal.\r
      en: For constant m, F_net versus a graph is linear.\r
  pedagogical_triggers:\r
  - condition: abs(a) > 50\r
    hint:\r
      es: Valor alto de a; revisar orden de magnitud del escenario.\r
      en: High value of a; review scenario order of magnitude.\r
- id: segunda_ley_rotacional\r
  title:\r
    es: Segunda ley rotacional\r
    en: Rotational second law\r
  equation: tau = I*alpha\r
  latex: tau = I*alpha\r
  rearrangements:\r
  - target: alpha\r
    equation: alpha = tau/I\r
    latex: alpha = tau/I\r
    constraints: []\r
  - target: tau\r
    equation: tau = I*alpha\r
    latex: tau = I*alpha\r
    constraints: []\r
  category: fundamental\r
  relation_type: dynamical_law\r
  physical_meaning:\r
    es: Relaciona torque neto y aceleracion angular para inercia rotacional positiva.\r
    en: Relates net torque and angular acceleration for positive rotational inertia.\r
  constraints:\r
  - expr: I > 0\r
    message:\r
      es: El momento de inercia debe ser mayor que cero.\r
      en: Moment of inertia must be greater than zero.\r
  validity:\r
    es: Valida cuando eje, signos y definicion de I se mantienen consistentes.\r
    en: Valid when axis, signs, and I definition remain consistent.\r
  dimension_check: M*L^2/T^2 = M*L^2/T^2\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - segunda_ley\r
  - analogia\r
  result_semantics:\r
    target: alpha\r
    meaning: Resulta util para interpretar alpha en el contexto del leaf.\r
  domain_checks:\r
  - condition: I > 0\r
    message:\r
      es: Revisar valor de I y eje de referencia.\r
      en: Check I value and reference axis.\r
  coherence_checks:\r
  - check: sign_consistency\r
    warning:\r
      es: Usar mismo convenio de signo para tau y alpha.\r
      en: Use the same sign convention for tau and alpha.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Para I constante, la grafica tau contra alpha es lineal.\r
      en: For constant I, tau versus alpha graph is linear.\r
  pedagogical_triggers:\r
  - condition: abs(alpha) > 400\r
    hint:\r
      es: Valor alto de alpha; verificar datos y conversiones.\r
      en: High alpha value; verify inputs and conversions.\r
- id: momento_lineal\r
  title:\r
    es: Definicion de momento lineal\r
    en: Linear momentum definition\r
  equation: p = m*v\r
  latex: p = m*v\r
  rearrangements:\r
  - target: v\r
    equation: v = p/m\r
    latex: v = p/m\r
    constraints: []\r
  - target: p\r
    equation: p = m*v\r
    latex: p = m*v\r
    constraints: []\r
  category: structural\r
  relation_type: definition\r
  physical_meaning:\r
    es: Define el estado dinamico lineal a partir de masa y velocidad.\r
    en: Defines linear dynamic state from mass and velocity.\r
  constraints:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser mayor que cero.\r
      en: Mass must be greater than zero.\r
  validity:\r
    es: Valida en mecanica clasica con velocidades muy inferiores a la luz.\r
    en: Valid in classical mechanics for speeds far below light speed.\r
  dimension_check: M*L/T = M*L/T\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - momento\r
  - analogia\r
  result_semantics:\r
    target: v\r
    meaning: Resulta util para interpretar v en el contexto del leaf.\r
  domain_checks:\r
  - condition: m > 0\r
    message:\r
      es: Revisar consistencia de m y v en el mismo sistema.\r
      en: Check consistency of m and v in the same frame.\r
  coherence_checks:\r
  - check: units_consistency\r
    warning:\r
      es: Revisar conversion a unidades SI.\r
      en: Review conversion to SI units.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Los cambios de p deben seguir impulsos externos.\r
      en: p changes should follow external impulses.\r
  pedagogical_triggers:\r
  - condition: abs(v) > 120\r
    hint:\r
      es: Velocidad alta para ejercicio base; revisar escala.\r
      en: Velocity is high for a baseline exercise; review scale.\r
- id: momento_angular\r
  title:\r
    es: Definicion de momento angular\r
    en: Angular momentum definition\r
  equation: L = I*omega\r
  latex: L = I*omega\r
  rearrangements:\r
  - target: omega\r
    equation: omega = L/I\r
    latex: omega = L/I\r
    constraints: []\r
  - target: L\r
    equation: L = I*omega\r
    latex: L = I*omega\r
    constraints: []\r
  category: structural\r
  relation_type: definition\r
  physical_meaning:\r
    es: Define el estado dinamico rotacional a partir de inercia y velocidad angular.\r
    en: Defines rotational dynamic state from inertia and angular velocity.\r
  constraints:\r
  - expr: I > 0\r
    message:\r
      es: El momento de inercia debe ser mayor que cero.\r
      en: Moment of inertia must be greater than zero.\r
  validity:\r
    es: Valida cuando I y omega se definen respecto al mismo eje.\r
    en: Valid when I and omega are defined about the same axis.\r
  dimension_check: M*L^2/T = M*L^2/T\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  interpretation_tags:\r
  - momento\r
  - analogia\r
  result_semantics:\r
    target: omega\r
    meaning: Resulta util para interpretar omega en el contexto del leaf.\r
  domain_checks:\r
  - condition: I > 0\r
    message:\r
      es: Revisar eje, inercia y signo de omega.\r
      en: Check axis, inertia, and omega sign.\r
  coherence_checks:\r
  - check: axis_consistency\r
    warning:\r
      es: No mezclar valores definidos en ejes diferentes.\r
      en: Do not mix values defined on different axes.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Los cambios de L deben reflejar torque neto acumulado.\r
      en: L changes should reflect accumulated net torque.\r
  pedagogical_triggers:\r
  - condition: abs(omega) > 800\r
    hint:\r
      es: omega muy alta; revisar conversiones y datos.\r
      en: omega is very high; check conversions and data.\r
`;export{n as default};
