const e=`version: 5\r
topic:\r
  id: critico\r
  title:\r
    es: Critico\r
    en: Critical Damping\r
\r
formulas:\r
- id: condicion_critica\r
  title: { es: Condicion de amortiguamiento critico, en: Critical damping condition }\r
  equation: gamma = omega0\r
  latex: \\gamma=\\omega_0\r
  category: criterio_de_regimen\r
  relation_type: condicion_de_transicion\r
  physical_meaning:\r
    es: Establece la igualdad entre amortiguamiento efectivo y pulsación natural que separa respuesta oscilatoria de respuesta no oscilatoria.\r
    en: Sets equality between effective damping and natural pulsation, separating oscillatory from non-oscillatory response.\r
  constraints: [ gamma > 0, omega0 > 0 ]\r
  validity:\r
    es: Válida para modelos lineales de segundo orden con amortiguamiento viscoso equivalente.\r
    en: Valid for linear second-order models with equivalent viscous damping.\r
  dimension_check: "[T^-1] = [T^-1]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[gamma]] y [[omega0]].", en: "Requires [[gamma]] and [[omega0]]." }\r
  used_in: [ solucion_critica ]\r
  interpretation_tags: [ critico, transicion_de_regimen, amortiguamiento ]\r
  result_semantics:\r
    target: gamma\r
  domain_checks: [ gamma > 0, omega0 > 0 ]\r
  coherence_checks: [ abs(gamma-omega0) <= 0.05*omega0 ]\r
  graph_implications: "Cuando [[gamma]] aproxima [[omega0]], la envolvente cambia de oscilatoria a monótona."\r
  pedagogical_triggers: [ clasificacion_de_regimen, frontera_dinamica ]\r
  rearrangements:\r
  - target: gamma\r
    equation: omega0\r
  - target: omega0\r
    equation: gamma\r
  variables: [ gamma, omega0 ]\r
\r
- id: tiempo_caracteristico\r
  title: { es: Tiempo caracteristico critico, en: Critical characteristic time }\r
  equation: tau = 1/omega0\r
  latex: \\tau=\\frac{1}{\\omega_0}\r
  category: escala_temporal\r
  relation_type: inversion\r
  physical_meaning:\r
    es: Define la escala temporal dominante de decaimiento de la respuesta crítica.\r
    en: Defines the dominant decay timescale of the critical response.\r
  constraints: [ omega0 > 0, tau > 0 ]\r
  validity:\r
    es: Válida cuando la dinámica puede representarse por un modo crítico dominante.\r
    en: Valid when dynamics can be represented by a dominant critical mode.\r
  dimension_check: "[T] = [T^-1]^-1"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[omega0]].", en: "Requires [[omega0]]." }\r
  used_in: [ solucion_critica ]\r
  interpretation_tags: [ tiempo_caracteristico, escala, decaimiento ]\r
  result_semantics:\r
    target: tau\r
  domain_checks: [ omega0 > 0 ]\r
  coherence_checks: [ tau > 0 ]\r
  graph_implications: "A mayor [[omega0]], menor [[tau]] y más rápido el asentamiento."\r
  pedagogical_triggers: [ lectura_temporal, comparacion_de_rapidez ]\r
  rearrangements:\r
  - target: tau\r
    equation: 1/omega0\r
  - target: omega0\r
    equation: 1/tau\r
  variables: [ tau, omega0 ]\r
\r
- id: solucion_critica\r
  title: { es: Respuesta temporal en regimen critico, en: Time response in critical regime }\r
  equation: x = A*(1 + omega0*t)*exp(-omega0*t)\r
  latex: x=A(1+\\omega_0 t)e^{-\\omega_0 t}\r
  category: respuesta_temporal\r
  relation_type: solucion_del_modelo\r
  physical_meaning:\r
    es: Describe el desplazamiento crítico como producto de un término polinómico y una envolvente exponencial decreciente.\r
    en: Describes critical displacement as a polynomial term times a decaying exponential envelope.\r
  constraints: [ A >= 0, omega0 > 0, t >= 0 ]\r
  validity:\r
    es: Válida para sistemas lineales de segundo orden en régimen crítico con condiciones iniciales compatibles.\r
    en: Valid for linear second-order systems in the critical regime with compatible initial conditions.\r
  dimension_check: "[L] = [L]*(adimensional)*adimensional"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[A]], [[omega0]] y [[t]].", en: "Requires [[A]], [[omega0]], and [[t]]." }\r
  used_in: []\r
  interpretation_tags: [ respuesta_transitoria, asentamiento, envolvente ]\r
  result_semantics:\r
    target: x\r
  domain_checks: [ t >= 0, omega0 > 0 ]\r
  coherence_checks: [ abs(x) <= 2*A ]\r
  graph_implications: "La señal no oscila y converge al equilibrio sin sobrepaso significativo ideal."\r
  pedagogical_triggers: [ lectura_de_curva, comparacion_con_suby_sobre ]\r
  rearrangements:\r
  - target: x\r
    equation: A*(1 + omega0*t)*exp(-omega0*t)\r
  - target: A\r
    equation: x/((1 + omega0*t)*exp(-omega0*t))\r
  variables: [ x, A, omega0, t ]\r
\r
ui:\r
  default_formula: solucion_critica\r
  groups:\r
  - title:\r
      es: Criterios y escalas\r
      en: Criteria and scales\r
    items: [ condicion_critica, tiempo_caracteristico ]\r
  - title:\r
      es: Respuesta temporal\r
      en: Time response\r
    items: [ solucion_critica ]\r
`;export{e as default};
