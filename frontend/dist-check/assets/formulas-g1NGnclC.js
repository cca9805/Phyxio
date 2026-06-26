const e=`version: 5\r
topic:\r
  id: energia-potencial-elastica\r
  title:\r
    es: Energia potencial elastica\r
    en: Elastic Potential Energy\r
variables:\r
- { id: Ue, symbol: U_e, name: { es: energia potencial elastica, en: elastic potential energy }, si_unit: J }\r
- { id: k, symbol: k, name: { es: constante elastica, en: spring constant }, si_unit: N/m }\r
- { id: x, symbol: x, name: { es: deformacion, en: deformation }, si_unit: m }\r
- { id: xi, symbol: x_i, name: { es: deformacion inicial, en: initial deformation }, si_unit: m }\r
- { id: xf, symbol: x_f, name: { es: deformacion final, en: final deformation }, si_unit: m }\r
- { id: dUe, symbol: \\Delta U_e, name: { es: variacion de energia potencial elastica, en: change in elastic potential energy }, si_unit: J }\r
- { id: We, symbol: W_e, name: { es: trabajo de la fuerza elastica, en: work done by the elastic force }, si_unit: J }\r
formulas:\r
- id: potencial_elastico_basico\r
  title:\r
    es: Energia potencial elastica\r
    en: Elastic potential energy\r
  equation: Ue = 0.5*k*x^2\r
  latex: U_e = \\frac{1}{2}kx^2\r
  rearrangements:\r
  - target: Ue\r
    equation: Ue = 0.5*k*x^2\r
    latex: U_e = \\frac{1}{2}kx^2\r
    constraints:\r
    - expr: k > 0\r
      message: { es: k debe ser positiva, en: k must be positive }\r
    - expr: x >= 0\r
      message: { es: x se interpreta como deformacion no negativa, en: x is interpreted as a non-negative deformation }\r
  - target: k\r
    equation: k = 2*Ue/(x^2)\r
    latex: k = \\frac{2U_e}{x^2}\r
    constraints:\r
    - expr: x != 0\r
      message: { es: x no puede ser cero al despejar k, en: x cannot be zero when solving for k }\r
  - target: x\r
    equation: x = sqrt(2*Ue/k)\r
    latex: x = \\sqrt{\\frac{2U_e}{k}}\r
    constraints:\r
    - expr: k > 0\r
      message: { es: k debe ser positiva al despejar x, en: k must be positive when solving for x }\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Convierte la deformacion elastica en una energia de estado cuadratica.\r
    en: Converts elastic deformation into a quadratic state energy.\r
  constraints:\r
  - expr: k > 0\r
    message: { es: La rigidez debe ser positiva, en: Stiffness must be positive }\r
  validity:\r
    es: Valida para un resorte ideal en regimen lineal de Hooke.\r
    en: Valid for an ideal spring in the linear Hooke regime.\r
  dimension_check: J\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: [ teoria.md, teoria.en.md, ejemplos.md, ejemplos.en.md, interpretacion.yaml ]\r
  interpretation_tags: [ elastic_energy, state_energy ]\r
  result_semantics:\r
    target: Ue\r
    meaning: El resultado mide la energia almacenada por la deformacion del elemento elastico.\r
  domain_checks:\r
  - expr: x >= 0\r
    message: { es: Comprueba que x representa deformacion y no un desplazamiento arbitrario, en: Check that x represents deformation and not an arbitrary displacement }\r
  coherence_checks:\r
  - expr: "true"\r
    message: { es: Si x se duplica, Ue se cuadruplica, en: If x doubles, Ue becomes four times larger }\r
  graph_implications:\r
  - La curva Ue(x) es parabólica y abre hacia arriba.\r
  pedagogical_triggers:\r
  - when: "true"\r
    message: { es: No confundas la energia con la rigidez k, en: Do not confuse energy with stiffness k }\r
- id: variacion_potencial_elastico\r
  title:\r
    es: Variacion entre dos deformaciones\r
    en: Change between two deformations\r
  equation: dUe = 0.5*k*(xf^2 - xi^2)\r
  latex: \\Delta U_e = \\frac{k}{2}(x_f^2-x_i^2)\r
  rearrangements:\r
  - target: dUe\r
    equation: dUe = 0.5*k*(xf^2 - xi^2)\r
    latex: \\Delta U_e = \\frac{k}{2}(x_f^2-x_i^2)\r
  - target: xf\r
    equation: xf = sqrt(xi^2 + 2*dUe/k)\r
    latex: x_f = \\sqrt{x_i^2 + \\frac{2\\Delta U_e}{k}}\r
  - target: xi\r
    equation: xi = sqrt(xf^2 - 2*dUe/k)\r
    latex: x_i = \\sqrt{x_f^2 - \\frac{2\\Delta U_e}{k}}\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: Expresa el cambio de energia elastica entre dos estados del mismo resorte.\r
    en: Expresses the change in elastic energy between two states of the same spring.\r
  constraints:\r
  - expr: k > 0\r
    message: { es: La rigidez debe ser positiva, en: Stiffness must be positive }\r
  validity:\r
    es: Valida cuando xi y xf describen el mismo elemento y la misma referencia.\r
    en: Valid when xi and xf describe the same element and the same baseline.\r
  dimension_check: J\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: [ teoria.md, teoria.en.md, ejemplos.md, ejemplos.en.md, interpretacion.yaml ]\r
  interpretation_tags: [ delta_energy, states ]\r
  result_semantics:\r
    target: dUe\r
    meaning: El resultado indica si la deformacion final almacena mas o menos energia que la inicial.\r
  domain_checks:\r
  - expr: xi >= 0\r
    message: { es: xi debe leerse como deformacion, en: xi must be read as a deformation }\r
  - expr: xf >= 0\r
    message: { es: xf debe leerse como deformacion, en: xf must be read as a deformation }\r
  coherence_checks:\r
  - expr: "true"\r
    message: { es: Si xf > xi, dUe es positiva, en: If xf > xi, dUe is positive }\r
  graph_implications:\r
  - La diferencia entre dos puntos de la parabola Ue(x) produce dUe.\r
  pedagogical_triggers:\r
  - when: "true"\r
    message: { es: No confundas variacion con energia absoluta, en: Do not confuse variation with absolute energy }\r
- id: trabajo_fuerza_elastica\r
  title:\r
    es: Trabajo de la fuerza elastica\r
    en: Work done by the elastic force\r
  equation: We = -dUe\r
  latex: W_e = -\\Delta U_e\r
  rearrangements:\r
  - target: We\r
    equation: We = -dUe\r
    latex: W_e = -\\Delta U_e\r
  - target: dUe\r
    equation: dUe = -We\r
    latex: \\Delta U_e = -W_e\r
  category: fundamental\r
  relation_type: energy_relation\r
  physical_meaning:\r
    es: El trabajo de la fuerza elastica compensa el cambio de energia almacenada.\r
    en: The work of the elastic force compensates the change in stored energy.\r
  constraints:\r
  - expr: "true"\r
    message: { es: El signo debe seguir la convencion de energia potencial, en: The sign must follow the potential-energy convention }\r
  validity:\r
    es: Valida para el modelo ideal conservativo del resorte.\r
    en: Valid for the ideal conservative spring model.\r
  dimension_check: J\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in: [ teoria.md, teoria.en.md, ejemplos.md, ejemplos.en.md, interpretacion.yaml ]\r
  interpretation_tags: [ work, elastic_force ]\r
  result_semantics:\r
    target: We\r
    meaning: El resultado mide la energia que entrega o absorbe la fuerza elastica durante el proceso.\r
  domain_checks:\r
  - expr: "true"\r
    message: { es: Comprueba la convencion de signos antes de interpretar We, en: Check the sign convention before interpreting We }\r
  coherence_checks:\r
  - expr: "true"\r
    message: { es: Si dUe aumenta, We debe volverse mas negativo, en: If dUe increases, We must become more negative }\r
  graph_implications:\r
  - El area energetica puede leerse como cambio de signo opuesto a dUe.\r
  pedagogical_triggers:\r
  - when: "true"\r
    message: { es: Identifica primero si el resorte entrega energia o la recibe, en: First identify whether the spring delivers energy or receives it }\r
ui:\r
  default_formula: potencial_elastico_basico\r
  groups:\r
  - title: { es: Elasticidad lineal, en: Linear elasticity }\r
    items: [ potencial_elastico_basico, variacion_potencial_elastico, trabajo_fuerza_elastica ]\r
`;export{e as default};
