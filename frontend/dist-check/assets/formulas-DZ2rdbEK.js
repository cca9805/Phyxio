const n=`version: 1\r
formulas:\r
- id: cm_vectorial\r
  title:\r
    es: definición vectorial del centro de masas\r
    en: vector definition of the center of mass\r
  equation: R_cm = I_cm / M\r
  latex: \\vec{R}_{cm} = \\frac{1}{M} \\int \\vec{r} \\, dm\r
  rearrangements:\r
  - target: R_cm\r
    equation: R_cm = I_cm / M\r
    latex: \\vec{R}_{cm} = \\frac{\\vec{I}_{cm}}{M}\r
    constraints: []\r
  - target: I_cm\r
    equation: I_cm = M * R_cm\r
    latex: \\vec{I}_{cm} = M \\vec{R}_{cm}\r
    constraints: []\r
  - target: M\r
    equation: M = I_cm / R_cm\r
    latex: M = \\frac{I_{cm}}{R_{cm}}\r
    constraints: []\r
  category: definition\r
  relation_type: weighted_average\r
  physical_meaning:\r
    es: El centro de masas es la posición promedio ponderada por masa de toda la distribución.\r
    en: The center of mass is the mass-weighted average position of the whole distribution.\r
  constraints:\r
  - M > 0\r
  - distribución integrable\r
  - origen bien definido\r
  validity:\r
    es: Válida para distribuciones discretas o continuas cuando la masa total es finita.\r
    en: Valid for discrete or continuous distributions when the total mass is finite.\r
  dimension_check: '[L] = [ML] / [M]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - interpretacion.yaml\r
  interpretation_tags:\r
  - promedio-ponderado\r
  - geometria\r
  - masa\r
  result_semantics:\r
    target: R_cm\r
    meaning: Resulta util para interpretar R_cm en el contexto del leaf.\r
  domain_checks:\r
  - M debe ser positiva\r
  - La integral debe converger\r
  coherence_checks:\r
  - R_cm debe quedar en el rango geométrico compatible con la distribución\r
  - Si hay simetría central respecto del origen, R_cm puede anularse\r
  graph_implications:\r
  - El marcador del centro de masas debe desplazarse hacia las regiones más densas\r
    o más extensas en masa.\r
  pedagogical_triggers:\r
  - Confundir centro geométrico con centro de masas\r
  - Olvidar que el origen cambia el signo de las coordenadas.\r
- id: cm_x\r
  title:\r
    es: coordenada x del centro de masas\r
    en: x-coordinate of the center of mass\r
  equation: xcm = I_x / M\r
  latex: x_{cm} = \\frac{1}{M} \\int x \\, dm\r
  rearrangements:\r
  - target: xcm\r
    equation: xcm = I_x / M\r
    latex: x_{cm} = \\frac{I_x}{M}\r
    constraints: []\r
  - target: I_x\r
    equation: I_x = M * xcm\r
    latex: I_x = M x_{cm}\r
    constraints: []\r
  - target: M\r
    equation: M = I_x / xcm\r
    latex: M = \\frac{I_x}{x_{cm}}\r
    constraints: []\r
  category: definition\r
  relation_type: component_average\r
  physical_meaning:\r
    es: La coordenada x del centro de masas es el promedio ponderado por masa de la\r
      coordenada x.\r
    en: The x-coordinate of the center of mass is the mass-weighted average of the\r
      x coordinate.\r
  constraints:\r
  - M > 0\r
  - integración sobre el dominio correcto\r
  validity:\r
    es: Útil cuando basta una componente o cuando el problema es unidimensional.\r
    en: Useful when a single component is enough or when the problem is one-dimensional.\r
  dimension_check: '[L] = [ML] / [M]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - interpretacion.yaml\r
  interpretation_tags:\r
  - componente\r
  - simetria\r
  - varilla\r
  result_semantics:\r
    target: xcm\r
    meaning: Resulta util para interpretar xcm en el contexto del leaf.\r
  domain_checks:\r
  - La distribución debe poder parametrizarse sobre x o proyectarse sobre x\r
  coherence_checks:\r
  - Si la densidad es mayor hacia x positiva, xcm debe desplazarse hacia x positiva\r
  - En una varilla uniforme entre 0 y L, xcm debe ser L/2\r
  graph_implications:\r
  - El punto xcm debe moverse cuando cambian la densidad o la geometría efectiva.\r
  pedagogical_triggers:\r
  - Olvidar el factor x dentro de la integral\r
  - Usar el centro geométrico cuando la densidad no es uniforme.\r
- id: masa_volumen\r
  title:\r
    es: masa a partir de densidad volumétrica uniforme\r
    en: mass from uniform volume density\r
  equation: M = rho * V\r
  latex: M = \\rho V\r
  rearrangements:\r
  - target: M\r
    equation: M = rho * V\r
    latex: M = \\rho V\r
    constraints: []\r
  - target: rho\r
    equation: rho = M / V\r
    latex: \\rho = \\frac{M}{V}\r
    constraints: []\r
  - target: V\r
    equation: V = M / rho\r
    latex: V = \\frac{M}{\\rho}\r
    constraints: []\r
  category: model\r
  relation_type: constitutive\r
  physical_meaning:\r
    es: Relaciona masa total y volumen cuando la densidad volumétrica es uniforme.\r
    en: It relates total mass and volume when volume density is uniform.\r
  constraints:\r
  - rho > 0\r
  - V > 0\r
  - modelo volumétrico uniforme\r
  validity:\r
    es: Solo válida si la densidad volumétrica puede tomarse constante en todo el\r
      cuerpo.\r
    en: Valid only if the volume density can be taken as constant throughout the whole\r
      body.\r
  dimension_check: '[M] = [ML^-3][L^3]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - modelos.md\r
  - modelos.en.md\r
  - interpretacion.yaml\r
  interpretation_tags:\r
  - densidad\r
  - volumen\r
  - uniformidad\r
  result_semantics:\r
    target: M\r
    meaning: Resulta util para interpretar M en el contexto del leaf.\r
  domain_checks:\r
  - No usar esta relación si la densidad cambia con la posición\r
  coherence_checks:\r
  - Si V aumenta con rho fija, M debe aumentar\r
  - Si rho vale cero, M debe ser cero\r
  graph_implications:\r
  - Una distribución uniforme desplaza el centro de masas según la geometría, no por\r
    gradientes de densidad.\r
  pedagogical_triggers:\r
  - Usar rho uniforme en un problema con gradiente de densidad\r
  - Confundir volumen total con elemento diferencial.\r
- id: masa_area\r
  title:\r
    es: masa a partir de densidad superficial uniforme\r
    en: mass from uniform surface density\r
  equation: M = sigma * A\r
  latex: M = \\sigma A\r
  rearrangements:\r
  - target: M\r
    equation: M = sigma * A\r
    latex: M = \\sigma A\r
    constraints: []\r
  - target: sigma\r
    equation: sigma = M / A\r
    latex: \\sigma = \\frac{M}{A}\r
    constraints: []\r
  - target: A\r
    equation: A = M / sigma\r
    latex: A = \\frac{M}{\\sigma}\r
    constraints: []\r
  category: model\r
  relation_type: constitutive\r
  physical_meaning:\r
    es: Relaciona masa y área en láminas de densidad superficial uniforme.\r
    en: It relates mass and area in sheets with uniform surface density.\r
  constraints:\r
  - sigma > 0\r
  - A > 0\r
  - modelo laminar uniforme\r
  validity:\r
    es: Solo válida en láminas o superficies cuya densidad superficial pueda tomarse\r
      constante.\r
    en: Valid only in sheets or surfaces whose surface density can be taken as constant.\r
  dimension_check: '[M] = [ML^-2][L^2]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - modelos.md\r
  - modelos.en.md\r
  - interpretacion.yaml\r
  interpretation_tags:\r
  - lamina\r
  - area\r
  - uniformidad\r
  result_semantics:\r
    target: M\r
    meaning: Resulta util para interpretar M en el contexto del leaf.\r
  domain_checks:\r
  - No usar en cuerpos volumétricos si el espesor importa\r
  coherence_checks:\r
  - Si A aumenta con sigma fija, M debe aumentar\r
  graph_implications:\r
  - La geometría de la lámina controla el centro de masas cuando sigma es uniforme.\r
  pedagogical_triggers:\r
  - Aplicar sigma a una varilla o a un volumen\r
  - Olvidar que la homogeneidad superficial es una hipótesis.\r
- id: masa_longitud\r
  title:\r
    es: masa a partir de densidad lineal uniforme\r
    en: mass from uniform linear density\r
  equation: M = lambda * L\r
  latex: M = \\lambda L\r
  rearrangements:\r
  - target: M\r
    equation: M = lambda * L\r
    latex: M = \\lambda L\r
    constraints: []\r
  - target: lambda\r
    equation: lambda = M / L\r
    latex: \\lambda = \\frac{M}{L}\r
    constraints: []\r
  - target: L\r
    equation: L = M / lambda\r
    latex: L = \\frac{M}{\\lambda}\r
    constraints: []\r
  category: model\r
  relation_type: constitutive\r
  physical_meaning:\r
    es: Relaciona masa y longitud cuando la densidad lineal es uniforme.\r
    en: It relates mass and length when linear density is uniform.\r
  constraints:\r
  - lambda > 0\r
  - L > 0\r
  - modelo lineal uniforme\r
  validity:\r
    es: Válida para varillas o alambres cuya densidad lineal pueda tomarse constante.\r
    en: Valid for rods or wires whose linear density can be taken as constant.\r
  dimension_check: '[M] = [ML^-1][L]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - interpretacion.yaml\r
  interpretation_tags:\r
  - varilla\r
  - lineal\r
  - uniformidad\r
  result_semantics:\r
    target: M\r
    meaning: Resulta util para interpretar M en el contexto del leaf.\r
  domain_checks:\r
  - No usar cuando lambda depende de x\r
  coherence_checks:\r
  - Si L aumenta con lambda fija, M debe aumentar\r
  - En una varilla uniforme entre 0 y L, xcm debe ser L/2\r
  graph_implications:\r
  - Con lambda uniforme, el centro de masas depende solo de la geometría del tramo\r
    lineal.\r
  pedagogical_triggers:\r
  - Usar lambda uniforme cuando el enunciado da una ley lambda(x)\r
  - Olvidar diferenciar entre longitud total y coordenada local x.\r
`;export{n as default};
