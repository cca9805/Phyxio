const n=`version: 5
topic:
  id: principio-fundamental-de-la-hidrostatica
  title:
    es: Principio Fundamental de la Hidrostática
    en: Fundamental Principle of Hydrostatics
variables:
  - id: p1
    symbol: p_1
    nombre:
      es: presión en el punto 1
      en: pressure at point 1
    unidad_si: Pa
    descripcion:
      es: Presión en la cota z1.
      en: Pressure at elevation z1.
  - id: p2
    symbol: p_2
    nombre:
      es: presión en el punto 2
      en: pressure at point 2
    unidad_si: Pa
    descripcion:
      es: Presión en la cota z2.
      en: Pressure at elevation z2.
  - id: rho
    symbol: \\rho
    nombre:
      es: densidad
      en: density
    unidad_si: kg/m^3
    descripcion:
      es: Densidad del fluido.
      en: Fluid density.
  - id: g
    symbol: g
    nombre:
      es: gravedad
      en: gravity
    unidad_si: m/s^2
    descripcion:
      es: Aceleración gravitatoria.
      en: Gravitational acceleration.
  - id: z1
    symbol: z_1
    nombre:
      es: cota 1
      en: elevation 1
    unidad_si: m
    descripcion:
      es: Altura del punto 1.
      en: Height of point 1.
  - id: z2
    symbol: z_2
    nombre:
      es: cota 2
      en: elevation 2
    unidad_si: m
    descripcion:
      es: Altura del punto 2.
      en: Height of point 2.
  - id: dp
    symbol: \\Delta p
    nombre:
      es: incremento de presión
      en: pressure increase
    unidad_si: Pa
    descripcion:
      es: Variación de presión.
      en: Pressure variation.
  - id: dz
    symbol: \\Delta z
    nombre:
      es: incremento de cota
      en: elevation increase
    unidad_si: m
    descripcion:
      es: Variación de altura.
      en: Height variation.

formulas:
  - id: equilibrio_hidro
    title:
      es: Principio Fundamental de la Hidrostática (Cotas)
      en: Fundamental Principle of Hydrostatics (Elevations)
    equation: p2 = p1 + rho*g*(z1-z2)
    latex: p_2 = p_1 + \\rho g (z_1 - z_2)
    rearrangements:
      - target: p2
        equation: p2 = p1 + rho*g*(z1-z2)
        latex: p_2 = p_1 + \\rho g (z_1 - z_2)
      - target: p1
        equation: p1 = p2 - rho*g*(z1-z2)
        latex: p_1 = p_2 - \\rho g (z_1 - z_2)
    category: law
    relation_type: analytical
    physical_meaning:
      es: Establece que la presión disminuye al aumentar la altura y aumenta al descender.
      en: Establishes that pressure decreases as height increases and increases as it descends.
    constraints:
      - es: Fluido en reposo absoluto.
      - en: Fluid at absolute rest.
      - es: Fluido incompresible.
      - en: Incompressible fluid.
    validity:
      es: Válido para líquidos y gases en tramos cortos de altura.
      en: Valid for liquids and gases in short height sections.
    dimension_check: true
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - principio-fundamental-de-la-hidrostatica
    interpretation_tags: [hidrostatica, equilibrio]
    result_semantics:
      es: Presión absoluta en el punto de destino.
      en: Absolute pressure at the destination point.
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: Describe la relación lineal entre presión y altura.
      en: Describes the linear relationship between pressure and height.
    pedagogical_triggers: []
    descripcion:
      es: Relación fundamental que gobierna la estática de fluidos incompresibles.
      en: Fundamental relationship governing the statics of incompressible fluids.

  - id: salto_hidro
    title:
      es: Variación de Presión por Salto de Cota
      en: Pressure Variation by Elevation Jump
    equation: dp = rho*g*(z1-z2)
    latex: \\Delta p = \\rho g (z_1 - z_2)
    rearrangements:
      - target: dp
        equation: dp = rho*g*(z1-z2)
        latex: \\Delta p = \\rho g (z_1 - z_2)
    category: law
    relation_type: analytical
    physical_meaning:
      es: El incremento de presión es directamente proporcional a la columna de fluido desplazada verticalmente.
      en: The pressure increase is directly proportional to the vertically displaced fluid column.
    constraints:
      - es: Fluido homogéneo e incompresible.
      - en: Homogeneous and incompressible fluid.
    validity:
      es: Aplicable a cualquier tramo de fluido en equilibrio.
      en: Applicable to any section of fluid in equilibrium.
    dimension_check: true
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - principio-fundamental-de-la-hidrostatica
    interpretation_tags: [variacion-presion]
    result_semantics:
      es: Cambio neto de presión.
      en: Net pressure change.
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: Define la pendiente del perfil de presiones.
      en: Defines the pressure profile slope.
    pedagogical_triggers: []
    descripcion:
      es: Expresión compacta de la variación de presión.
      en: Compact expression of pressure variation.

ui:
  default_formula: equilibrio_hidro
  groups:
    - title:
        es: Relaciones Fundamentales
        en: Fundamental Relationships
      items:
        - equilibrio_hidro
        - salto_hidro
`;export{n as default};
