const n=`version: 5\r
topic:\r
  id: ecuacion-de-navier-stokes-intro\r
  title:\r
    es: Ecuación de Navier-Stokes (Intro)\r
    en: Navier-Stokes Equation (Intro)\r
variables:\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: aceleración material\r
    en: material acceleration\r
  unidad_si: m/s^2\r
  descripcion:\r
    es: Aceleración de la partícula fluida.\r
    en: Acceleration of the fluid particle.\r
- id: gp\r
  symbol: \\frac{\\partial p}{\\partial x}\r
  nombre:\r
    es: gradiente de presión\r
    en: pressure gradient\r
  unidad_si: Pa/m\r
  descripcion:\r
    es: Variación espacial de la presión.\r
    en: Spatial variation of pressure.\r
- id: mu\r
  symbol: \\mu\r
  nombre:\r
    es: viscosidad dinámica\r
    en: dynamic viscosity\r
  unidad_si: Pa*s\r
  descripcion:\r
    es: Viscosidad del fluido.\r
    en: Fluid viscosity.\r
- id: lapu\r
  symbol: \\nabla^2 u\r
  nombre:\r
    es: laplaciano de velocidad\r
    en: velocity laplacian\r
  unidad_si: s^-1\r
  descripcion:\r
    es: Difusión viscosa del momento.\r
    en: Viscous momentum diffusion.\r
- id: rho\r
  symbol: \\rho\r
  nombre:\r
    es: densidad\r
    en: density\r
  unidad_si: kg/m^3\r
  descripcion:\r
    es: Densidad del fluido.\r
    en: Fluid density.\r
- id: gx\r
  symbol: g_x\r
  nombre:\r
    es: gravedad proyectada\r
    en: projected gravity\r
  unidad_si: m/s^2\r
  descripcion:\r
    es: Componente gravitatoria en el eje de flujo.\r
    en: Gravitational component on the flow axis.\r
- id: Re\r
  symbol: Re\r
  nombre:\r
    es: número de Reynolds\r
    en: Reynolds number\r
  unidad_si: '1'\r
  descripcion:\r
    es: Índice de régimen de flujo.\r
    en: Flow regime index.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad característica\r
    en: characteristic velocity\r
  unidad_si: m/s\r
  descripcion:\r
    es: Velocidad característica.\r
    en: Characteristic velocity.\r
- id: L\r
  symbol: L\r
  nombre:\r
    es: longitud característica\r
    en: characteristic length\r
  unidad_si: m\r
  descripcion:\r
    es: Longitud característica.\r
    en: Characteristic length.\r
\r
formulas:\r
- id: balance_1d\r
  title:\r
    es: Ecuación de Balance 1D\r
    en: 1D Balance Equation\r
  equation: a = (-gp + mu*lapu + rho*gx)/rho\r
  latex: a = \\frac{-\\frac{\\partial p}{\\partial x} + \\mu \\nabla^2 u + \\rho g_x}{\\rho}\r
  rearrangements:\r
  - target: a\r
    equation: a = (-gp + mu*lapu + rho*gx)/rho\r
    latex: a = \\frac{-\\frac{\\partial p}{\\partial x} + \\mu \\nabla^2 u + \\rho g_x}{\\rho}\r
  category: law\r
  relation_type: causal\r
  physical_meaning:\r
    es: La aceleración de un fluido es el resultado neto del empuje por presión, la difusión por viscosidad y la atracción gravitatoria.\r
    en: Fluid acceleration is the net result of pressure push, viscous diffusion, and gravitational attraction.\r
  constraints:\r
  - es: Fluido incompresible y Newtoniano.\r
  - en: Incompressible and Newtonian fluid.\r
  validity:\r
    es: Válido para flujos desarrollados donde los gradientes transversales son dominantes.\r
    en: Valid for developed flows where transverse gradients are dominant.\r
  dimension_check: true\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
  - ecuacion-de-navier-stokes-intro\r
  interpretation_tags: [ dinamica, fluidos-reales ]\r
  result_semantics:\r
    target: a\r
    es: Representa la tasa de cambio de velocidad de una partícula fluida.\r
    en: Represents the rate of change of velocity of a fluid particle.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications:\r
    es: Define la relación entre el gradiente impulsor y la respuesta del fluido.\r
    en: Defines the relationship between the driving gradient and the fluid response.\r
  pedagogical_triggers: []\r
  descripcion:\r
    es: Forma simplificada de Navier-Stokes para flujo unidimensional.\r
    en: Simplified form of Navier-Stokes for one-dimensional flow.\r
\r
- id: re_apoyo\r
  title:\r
    es: Número de Reynolds\r
    en: Reynolds Number\r
  equation: Re = rho*v*L/mu\r
  latex: Re = \\frac{\\rho v L}{\\mu}\r
  rearrangements:\r
  - target: Re\r
    equation: Re = rho*v*L/mu\r
    latex: Re = \\frac{\\rho v L}{\\mu}\r
  category: dimensionless_number\r
  relation_type: analytical\r
  physical_meaning:\r
    es: Determina la importancia relativa de la inercia frente a la fricción viscosa.\r
    en: Determines the relative importance of inertia versus viscous friction.\r
  constraints:\r
  - es: Requiere la definición de una longitud característica L.\r
  - en: Requires the definition of a characteristic length L.\r
  validity:\r
    es: Aplicable a cualquier flujo newtoniano.\r
    en: Applicable to any Newtonian flow.\r
  dimension_check: true\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
  - ecuacion-de-navier-stokes-intro\r
  interpretation_tags: [ regimen-de-flujo ]\r
  result_semantics:\r
    target: Re\r
    es: Un valor bajo indica flujo laminar; un valor alto indica turbulencia.\r
    en: A low value indicates laminar flow; a high value indicates turbulence.\r
  domain_checks: []\r
  coherence_checks: []\r
  graph_implications:\r
    es: Indica el cambio de régimen físico.\r
    en: Indicates the change in physical regime.\r
  pedagogical_triggers: []\r
  descripcion:\r
    es: Relación adimensional fundamental en mecánica de fluidos.\r
    en: Fundamental dimensionless ratio in fluid mechanics.\r
\r
ui:\r
  default_formula: balance_1d\r
  groups:\r
  - title:\r
      es: Ecuaciones del Movimiento\r
      en: Equations of Motion\r
    items:\r
    - balance_1d\r
    - re_apoyo\r
`;export{n as default};
