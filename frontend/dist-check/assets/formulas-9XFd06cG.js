const e=`version: 5\r
topic:\r
  id: ecuacion-movimiento\r
  title:\r
    es: Ecuacion de movimiento en MHS\r
    en: Equation of motion in SHM\r
\r
formulas:\r
- id: posicion_mhs\r
  title: { es: Posicion en funcion del tiempo, en: Position as a function of time }\r
  equation: x = A*cos(omega*t + phi)\r
  latex: x=A\\cos(\\omega t+\\varphi)\r
  category: cinematica_armonica\r
  relation_type: funcion_temporal\r
  physical_meaning:\r
    es: Describe la evolucion de [[x]] en oscilacion armonica ideal.\r
    en: Describes evolution of [[x]] in ideal harmonic oscillation.\r
  constraints: [ A >= 0, omega > 0 ]\r
  validity:\r
    es: Valida para oscilador lineal ideal sin disipacion dominante.\r
    en: Valid for ideal linear oscillator without dominant dissipation.\r
  dimension_check: "[L] = [L]*adimensional"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[A]], [[omega]], [[phi]], [[t]].", en: "Requires [[A]], [[omega]], [[phi]], [[t]]." }\r
  used_in: [ velocidad_mhs, aceleracion_mhs ]\r
  interpretation_tags: [ oscilacion, estado, fase ]\r
  result_semantics:\r
    target: x\r
  domain_checks: [ omega > 0 ]\r
  coherence_checks: [ x <= A + 1e-9, -x <= A + 1e-9 ]\r
  graph_implications: "La grafica de [[x]] es periodica y acotada por [[A]]."\r
  pedagogical_triggers: [ lectura_de_fase, relacion_estado_tiempo ]\r
  rearrangements:\r
  - target: x\r
    equation: A*cos(omega*t + phi)\r
  variables: [ x, A, omega, phi, t ]\r
\r
- id: velocidad_mhs\r
  title: { es: Velocidad en MHS, en: Velocity in SHM }\r
  equation: v = -A*omega*sin(omega*t + phi)\r
  latex: v=-A\\omega\\sin(\\omega t+\\varphi)\r
  category: cinematica_armonica\r
  relation_type: derivada_temporal\r
  physical_meaning:\r
    es: Expresa la derivada temporal de [[x]] en MHS.\r
    en: Expresses time derivative of [[x]] in SHM.\r
  constraints: [ A >= 0, omega > 0 ]\r
  validity:\r
    es: Valida bajo hipotesis de oscilador lineal ideal.\r
    en: Valid under ideal linear oscillator assumptions.\r
  dimension_check: "[L T^-1] = [L]*[T^-1]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[A]], [[omega]], [[phi]], [[t]].", en: "Requires [[A]], [[omega]], [[phi]], [[t]]." }\r
  used_in: [ posicion_mhs ]\r
  interpretation_tags: [ tasa_de_cambio, energia_cinetica ]\r
  result_semantics:\r
    target: v\r
  domain_checks: [ omega > 0 ]\r
  coherence_checks: [ v <= A*omega + 1e-9, -v <= A*omega + 1e-9 ]\r
  graph_implications: "[[v]] se adelanta en fase respecto de [[x]] en un cuarto de ciclo."\r
  pedagogical_triggers: [ fase_relativa, derivacion_fisica ]\r
  rearrangements:\r
  - target: v\r
    equation: -A*omega*sin(omega*t + phi)\r
  variables: [ v, A, omega, phi, t ]\r
\r
- id: aceleracion_mhs\r
  title: { es: Aceleracion restauradora, en: Restoring acceleration }\r
  equation: a = -omega^2*x\r
  latex: a=-\\omega^2x\r
  category: dinamica_lineal\r
  relation_type: proporcionalidad_con_signo\r
  physical_meaning:\r
    es: Relaciona [[a]] con [[x]] y muestra caracter restaurador del MHS.\r
    en: Relates [[a]] to [[x]] and shows restoring behavior in SHM.\r
  constraints: [ omega > 0 ]\r
  validity:\r
    es: Valida para fuerza restauradora lineal alrededor del equilibrio.\r
    en: Valid for linear restoring force around equilibrium.\r
  dimension_check: "[L T^-2] = [T^-2]*[L]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[omega]] y [[x]].", en: "Requires [[omega]] and [[x]]." }\r
  used_in: [ ecuacion_diferencial_mhs ]\r
  interpretation_tags: [ restauracion, curvatura_temporal ]\r
  result_semantics:\r
    target: a\r
  domain_checks: [ omega > 0 ]\r
  coherence_checks: [ (a*x) <= 0 ]\r
  graph_implications: "Cuando [[x]] cambia de signo, [[a]] tambien cambia de signo de forma opuesta."\r
  pedagogical_triggers: [ lectura_de_signo, estabilidad ]\r
  rearrangements:\r
  - target: a\r
    equation: -omega^2*x\r
  - target: x\r
    equation: -a/(omega^2)\r
  - target: omega\r
    equation: sqrt((-a)/x)\r
  variables: [ a, x, omega ]\r
\r
- id: ecuacion_diferencial_mhs\r
  title: { es: Ecuacion diferencial del MHS, en: Differential equation of SHM }\r
  equation: x_dd + omega^2*x = 0\r
  latex: x_dd+\\omega^2x=0\r
  category: modelo_dinamico\r
  relation_type: ecuacion_diferencial_lineal\r
  physical_meaning:\r
    es: Expresa el balance dinamico de un oscilador armonico lineal no amortiguado.\r
    en: Expresses dynamic balance of an undamped linear harmonic oscillator.\r
  constraints: [ omega > 0 ]\r
  validity:\r
    es: Valida para desplazamientos en region lineal y parametros constantes.\r
    en: Valid for displacements in linear region with constant parameters.\r
  dimension_check: "[L T^-2] + [T^-2]*[L] = 0"\r
  calculable: false\r
  motivo_no_calculable: { es: "Requiere condiciones iniciales para determinar una trayectoria unica.", en: "Requires initial conditions to determine a unique trajectory." }\r
  used_in: [ posicion_mhs, velocidad_mhs, aceleracion_mhs ]\r
  interpretation_tags: [ modelo, linealidad, solucion_general ]\r
  result_semantics:\r
    target: x_dd\r
  domain_checks: [ omega > 0 ]\r
  coherence_checks: [ omega > 0 ]\r
  graph_implications: "La solucion proyecta oscilaciones periodicas en [[x]] y derivadas acotadas."\r
  pedagogical_triggers: [ conexion_modelo_solucion, ecuacion_y_observable ]\r
  rearrangements:\r
  - target: x_dd\r
    equation: -omega^2*x\r
  variables: [ x_dd, x, omega ]\r
\r
ui:\r
  default_formula: posicion_mhs\r
  groups:\r
  - title:\r
      es: Cinematica\r
      en: Kinematics\r
    items: [ posicion_mhs, velocidad_mhs, aceleracion_mhs ]\r
  - title:\r
      es: Modelo base\r
      en: Base model\r
    items: [ ecuacion_diferencial_mhs ]\r
`;export{e as default};
