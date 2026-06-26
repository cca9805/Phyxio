const e=`version: 5
topic:
  id: presion-hidrostatica
  title:
    es: Presión Hidrostática
    en: Hydrostatic Pressure
variables:
  - id: p
    symbol: p
    nombre:
      es: presión total
      en: total pressure
    unidad_si: Pa
    descripcion:
      es: Presión absoluta.
      en: Absolute pressure.
  - id: p0
    symbol: p_0
    nombre:
      es: presión atmosférica
      en: atmospheric pressure
    unidad_si: Pa
    descripcion:
      es: Presión en la superficie.
      en: Surface pressure.
  - id: rho
    symbol: \\rho
    nombre:
      es: densidad del fluido
      en: fluid density
    unidad_si: kg/m^3
    descripcion:
      es: Densidad.
      en: Density.
  - id: g
    symbol: g
    nombre:
      es: gravedad
      en: gravity
    unidad_si: m/s^2
    descripcion:
      es: Aceleración gravitatoria.
      en: Gravitational acceleration.
  - id: h
    symbol: h
    nombre:
      es: profundidad
      en: depth
    unidad_si: m
    descripcion:
      es: Profundidad desde la superficie.
      en: Depth from surface.
  - id: dp
    symbol: \\Delta p
    nombre:
      es: presión manométrica
      en: gauge pressure
    unidad_si: Pa
    descripcion:
      es: Incremento de presión.
      en: Pressure increase.

formulas:
  - id: presion_hidro
    title:
      es: Ecuación de la Presión Hidrostática
      en: Hydrostatic Pressure Equation
    equation: p = p0 + rho*g*h
    latex: p = p_0 + \\rho g h
    rearrangements:
      - target: p
        equation: p = p0 + rho*g*h
        latex: p = p_0 + \\rho g h
      - target: h
        equation: h = (p - p0) / (rho * g)
        latex: h = \\frac{p - p_0}{\\rho g}
    category: law
    relation_type: analytical
    causality:
      es: La profundidad h y la densidad rho determinan el valor de la presión p.
      en: Depth h and density rho determine the value of pressure p.
    physical_meaning:
      es: La presión aumenta linealmente con la profundidad debido al peso de la columna de fluido superior.
      en: Pressure increases linearly with depth due to the weight of the fluid column above.
    constraints:
      - es: Fluido incompresible (densidad constante).
      - en: Incompressible fluid (constant density).
      - es: Fluido en reposo (equilibrio hidrostático).
      - en: Fluid at rest (hydrostatic equilibrium).
    validity:
      es: Válido para líquidos en campos gravitatorios constantes.
      en: Valid for liquids in constant gravitational fields.
    dimension_check: true
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - presion-hidrostatica
    interpretation_tags: [hidrostatica, presion]
    result_semantics:
      es: Presión absoluta en el punto sumergido.
      en: Absolute pressure at the submerged point.
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: Genera una recta con pendiente rho*g.
      en: Generates a line with slope rho*g.
    pedagogical_triggers: []
    descripcion:
      es: Calcula la presión total sumando el efecto del peso del fluido a la presión superficial.
      en: Calculates total pressure by adding the effect of fluid weight to surface pressure.

  - id: delta_p_hidro
    title:
      es: Presión Manométrica
      en: Gauge Pressure
    equation: dp = rho*g*h
    latex: \\Delta p = \\rho g h
    rearrangements:
      - target: dp
        equation: dp = rho*g*h
        latex: \\Delta p = \\rho g h
    category: law
    relation_type: analytical
    causality:
      es: El peso de la columna de fluido genera un incremento de presión proporcional a su altura.
      en: The weight of the fluid column generates a pressure increase proportional to its height.
    physical_meaning:
      es: Representa la contribución exclusiva del fluido a la presión en un punto.
      en: Represents the exclusive contribution of the fluid to the pressure at a point.
    constraints:
      - es: Fluido homogéneo e incompresible.
      - en: Homogeneous and incompressible fluid.
    validity:
      es: Aplicable a depósitos abiertos o cerrados.
      en: Applicable to open or closed tanks.
    dimension_check: true
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - presion-hidrostatica
    interpretation_tags: [presion-manometrica]
    result_semantics:
      es: Exceso de presión sobre la atmosférica.
      en: Pressure excess over atmospheric.
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: Recta que pasa por el origen (0,0) si h=0.
      en: Line passing through the origin (0,0) if h=0.
    pedagogical_triggers: []
    descripcion:
      es: Relación simplificada que ignora la presión exterior.
      en: Simplified relationship ignoring outside pressure.

ui:
  default_formula: presion_hidro
  groups:
    - title:
        es: Presión Hidrostática
        en: Hydrostatic Pressure
      items:
        - presion_hidro
        - delta_p_hidro
`;export{e as default};
