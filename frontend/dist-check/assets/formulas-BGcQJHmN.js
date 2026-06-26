const e=`version: 1
topic:
  id: hidrodinamica
  title:
    es: "Hidrodinámica"
    en: "Hydrodynamics"
variables:
- id: Q
- id: A
- id: v
- id: H
- id: p
- id: rho
- id: g
- id: z
- id: D
- id: mu
formulas:
- id: caudal_hidro
  title:
    es: "Ecuación de Caudal"
    en: "Flow Rate Equation"
  category: "Cinemática de Fluidos"
  relation_type: "Definición"
  physical_meaning:
    es: "Define el volumen de fluido que atraviesa una sección transversal por unidad de tiempo."
    en: "Defines the volume of fluid crossing a cross-section per unit of time."
  equation: Q = A*v
  latex: Q=A \\cdot v
  rearrangements:
  - target: Q
    equation: Q = A*v
    latex: Q=A \\cdot v
  - target: v
    equation: v = Q/A
    latex: v = \\frac{Q}{A}
  - target: A
    equation: A = Q/v
    latex: A = \\frac{Q}{v}
  descripcion:
    es: "Relaciona el caudal con el área transversal y la velocidad media del fluido."
    en: "Relates flow rate to the cross-sectional area and the average fluid velocity."
  constraints: "Fluido incompresible y régimen estacionario."
  validity:
    es: "Válido para conductos cerrados o canales abiertos con velocidad uniforme."
    en: "Valid for closed conduits or open channels with uniform velocity."
  dimension_check: "[L^3/T] = [L^2] * [L/T]"
  calculable: true
  motivo_no_calculable: ""
  used_in: ["Diseño de tuberías", "Sistemas de riego"]
  interpretation_tags: ["caudal", "continuidad"]
  result_semantics: "Caudal volumétrico"
  domain_checks: ["A > 0", "v >= 0"]
  coherence_checks: ["Q debe ser constante en serie"]
  graph_implications: "Determina la pendiente de la línea de energía"
  pedagogical_triggers: "Reducción de sección implica aumento de velocidad"
  nota_dominio_validez:
    es: "Válido para fluidos incompresibles en régimen estacionario."
    en: "Valid for incompressible fluids in steady state."
  variables:
  - Q
  - A
  - v
- id: head_hidro
  title:
    es: "Altura de Energía (Bernoulli)"
    en: "Energy Head (Bernoulli)"
  category: "Dinámica de Fluidos"
  relation_type: "Conservación"
  physical_meaning:
    es: "Expresa la energía mecánica total por unidad de peso del fluido."
    en: "Expresses total mechanical energy per unit weight of the fluid."
  equation: H = p/(rho*g) + v^2/(2*g) + z
  latex: H=\\frac{p}{\\rho g}+\\frac{v^2}{2g}+z
  rearrangements:
  - target: H
    equation: H = p/(rho*g) + v^2/(2*g) + z
    latex: H=\\frac{p}{\\rho g}+\\frac{v^2}{2g}+z
  - target: p
    equation: p = (H - v^2/(2*g) - z) * rho * g
    latex: p = \\left( H - \\frac{v^2}{2g} - z \\right) \\rho g
  descripcion:
    es: "Expresa la energía total por unidad de peso como la suma de las alturas de presión, velocidad y posición."
    en: "Expresses total energy per unit weight as the sum of pressure, velocity, and position heads."
  constraints: "Flujo ideal, estacionario e incompresible."
  validity:
    es: "Válido a lo largo de una línea de corriente."
    en: "Valid along a streamline."
  dimension_check: "[L] = [M/LT^2]/([M/L^3][L/T^2]) + [L/T]^2/[L/T^2] + [L]"
  calculable: true
  motivo_no_calculable: ""
  used_in: ["Redes de agua", "Aeronáutica"]
  interpretation_tags: ["energía", "bernoulli"]
  result_semantics: "Carga total"
  domain_checks: ["rho > 0", "g > 0"]
  coherence_checks: ["H disminuye con las pérdidas"]
  graph_implications: "Define la línea de energía"
  pedagogical_triggers: "Aumento de z implica caída de p o v"
  nota_dominio_validez:
    es: "Válido a lo largo de una línea de corriente para flujo ideal o con pérdidas incorporadas en H."
    en: "Valid along a streamline for ideal flow or with losses incorporated in H."
  variables:
  - H
  - p
  - rho
  - g
  - v
  - z
- id: area_circular
  title:
    es: "Área de Sección Circular"
    en: "Circular Section Area"
  category: "Geometría"
  relation_type: "Geométrica"
  physical_meaning:
    es: "Área interna efectiva para el paso del fluido."
    en: "Effective internal area for fluid passage."
  equation: A = PI * D^2 / 4
  latex: A = \\frac{\\pi D^2}{4}
  rearrangements:
  - target: A
    equation: A = PI * D^2 / 4
    latex: A = \\frac{\\pi D^2}{4}
  - target: D
    equation: D = sqrt(4*A / PI)
    latex: D = \\sqrt{\\frac{4A}{\\pi}}
  descripcion:
    es: "Calcula el área transversal a partir del diámetro interno del conducto."
    en: "Calculates the cross-sectional area from the internal diameter of the conduit."
  constraints: "Conducto de sección circular perfecta."
  validity:
    es: "Válido para tuberías comerciales."
    en: "Valid for commercial pipes."
  dimension_check: "[L^2] = [L]^2"
  calculable: true
  motivo_no_calculable: ""
  used_in: ["Cálculo de caudal"]
  interpretation_tags: ["sección", "geometría"]
  result_semantics: "Superficie de flujo"
  domain_checks: ["D > 0"]
  coherence_checks: ["A aumenta cuadráticamente con D"]
  graph_implications: "Determina la velocidad local"
  pedagogical_triggers: "Duplicar D implica cuadruplicar A"
  variables:
  - A
  - D
ui:
  default_formula: caudal_hidro
  groups:
  - title:
      es: "Leyes Fundamentales"
      en: "Fundamental Laws"
    items:
    - caudal_hidro
    - head_hidro
  - title:
      es: "Geometría"
      en: "Geometry"
    items:
    - area_circular
`;export{e as default};
