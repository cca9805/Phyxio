const n=`version: 5
topic:
  id: viscosidad
  title:
    es: "Viscosidad"
    en: "Viscosity"
variables:
  - id: tau
    symbol: "\\\\tau"
    nombre:
      es: "Esfuerzo cortante"
      en: "Shear stress"
    unidad_si: "Pa"
  - id: mu
    symbol: "\\\\mu"
    nombre:
      es: "Viscosidad dinámica"
      en: "Dynamic viscosity"
    unidad_si: "Pa·s"
  - id: dudy
    symbol: "du/dy"
    nombre:
      es: "Tasa de deformación"
      en: "Shear rate"
    unidad_si: "s^{-1}"
  - id: nu
    symbol: "\\\\nu"
    nombre:
      es: "Viscosidad cinemática"
      en: "Kinematic viscosity"
    unidad_si: "m^2/s"
  - id: rho
    symbol: "\\\\rho"
    nombre:
      es: "Densidad"
      en: "Density"
    unidad_si: "kg/m^3"
  - id: Re
    symbol: "Re"
    nombre:
      es: "Número de Reynolds"
      en: "Reynolds Number"
    unidad_si: "1"

formulas:
  - id: tau_mu
    target: tau
    title:
      es: "Ley de Newton de la Viscosidad"
      en: "Newton's Law of Viscosity"
    equation: "tau = mu * dudy"
    latex: "\\\\tau = \\\\mu \\\\frac{du}{dy}"
    rearrangements:
      - target: tau
        equation: "tau = mu * dudy"
        latex: "\\\\tau = \\\\mu \\\\frac{du}{dy}"
      - target: mu
        equation: "mu = tau / dudy"
        latex: "\\\\mu = \\\\frac{\\\\tau}{du/dy}"
      - target: dudy
        equation: "dudy = tau / mu"
        latex: "\\\\frac{du}{dy} = \\\\frac{\\\\tau}{\\\\mu}"
    category: "dinámica"
    relation_type: "ley"
    physical_meaning:
      es: "Relaciona el esfuerzo cortante aplicado con la tasa de deformación angular del fluido."
      en: "Relates the applied shear stress to the angular deformation rate of the fluid."
    constraints: ["mu > 0", "dudy >= 0"]
    validity:
      es: "Válida para fluidos Newtonianos en flujo laminar."
      en: "Valid for Newtonian fluids in laminar flow."
    dimension_check: "ML^{-1}T^{-2}"
    calculable: true
    motivo_no_calculable: ""
    used_in: ["reología", "tribología", "hidráulica"]
    interpretation_tags: ["fricción", "capa límite", "Newton"]
    result_semantics: "fuerza viscosa"
    domain_checks: ["mu > 0"]
    coherence_checks: ["tau >= 0"]
    graph_implications: "Define la pendiente de la curva esfuerzo-deformación."
    pedagogical_triggers: ["rozamiento", "fluidez"]

  - id: dudy_mu
    target: dudy
    title:
      es: "Cálculo de Tasa de Deformación"
      en: "Shear Rate Calculation"
    equation: "dudy = tau / mu"
    latex: "\\\\frac{du}{dy} = \\\\frac{\\\\tau}{\\\\mu}"
    rearrangements:
      - target: dudy
        equation: "dudy = tau / mu"
        latex: "\\\\frac{du}{dy} = \\\\frac{\\\\tau}{\\\\mu}"
    category: "cinemática"
    relation_type: "ratio"
    physical_meaning:
      es: "Determina el gradiente de velocidad necesario para producir un esfuerzo cortante dado en un fluido viscoso."
      en: "Determines the velocity gradient required to produce a given shear stress in a viscous fluid."
    constraints: ["mu > 0"]
    validity:
      es: "Válida para fluidos Newtonianos."
      en: "Valid for Newtonian fluids."
    dimension_check: "T^{-1}"
    calculable: true
    motivo_no_calculable: ""
    used_in: ["reología"]
    interpretation_tags: ["cizalle", "cinemática"]
    result_semantics: "tasa"
    domain_checks: ["mu > 0"]
    coherence_checks: ["dudy >= 0"]
    graph_implications: "Representa el valor en el eje X para un esfuerzo dado."
    pedagogical_triggers: ["cinemática", "deslizamiento"]

  - id: nu_mu
    target: nu
    title:
      es: "Viscosidad Cinemática"
      en: "Kinematic Viscosity"
    equation: "nu = mu / rho"
    latex: "\\\\nu = \\\\frac{\\\\mu}{\\\\rho}"
    rearrangements:
      - target: nu
        equation: "nu = mu / rho"
        latex: "\\\\nu = \\\\frac{\\\\mu}{\\\\rho}"
      - target: mu
        equation: "mu = nu * rho"
        latex: "\\\\mu = \\\\nu \\\\cdot \\\\rho"
      - target: rho
        equation: "rho = mu / nu"
        latex: "\\\\rho = \\\\frac{\\\\mu}{\\\\nu}"
    category: "propiedad"
    relation_type: "ratio"
    physical_meaning:
      es: "Representa la difusividad de la cantidad de movimiento, normalizando la viscosidad por la densidad."
      en: "Represents the diffusivity of momentum, normalizing viscosity by density."
    constraints: ["mu > 0", "rho > 0"]
    validity:
      es: "Válida para cualquier fluido homogéneo."
      en: "Valid for any homogeneous fluid."
    dimension_check: "L^2T^{-1}"
    calculable: true
    motivo_no_calculable: ""
    used_in: ["dinámica de fluidos", "análisis de Reynolds"]
    interpretation_tags: ["difusión", "inercia", "viscosidad"]
    result_semantics: "difusividad"
    domain_checks: ["rho > 0"]
    coherence_checks: ["nu > 0"]
    graph_implications: "Escala el tiempo de amortiguación de perturbaciones."
    pedagogical_triggers: ["difusión", "inercia"]

  - id: re_mu
    target: Re
    title:
      es: "Número de Reynolds (vía Viscosidad)"
      en: "Reynolds Number (via Viscosity)"
    equation: "Re = (rho * V * L) / mu"
    latex: "Re = \\\\frac{\\\\rho v L}{\\\\mu}"
    rearrangements:
      - target: Re
        equation: "Re = (rho * V * L) / mu"
        latex: "Re = \\\\frac{\\\\rho v L}{\\\\mu}"
    category: "parámetro"
    relation_type: "ratio"
    physical_meaning:
      es: "Compara fuerzas inerciales con fuerzas viscosas para determinar el régimen de flujo."
      en: "Compares inertial forces with viscous forces to determine the flow regime."
    constraints: ["mu > 0", "rho > 0"]
    validity:
      es: "Fundamental en la mecánica de fluidos clásica."
      en: "Fundamental in classical fluid mechanics."
    dimension_check: "1"
    calculable: true
    motivo_no_calculable: ""
    used_in: ["transición laminar-turbulento"]
    interpretation_tags: ["caos", "orden", "inercia"]
    result_semantics: "adimensional"
    domain_checks: ["mu > 0"]
    coherence_checks: ["Re >= 0"]
    graph_implications: "Punto de corte para cambio de modelo de fricción."
    pedagogical_triggers: ["turbulencia"]

ui:
  default_formula: tau_mu
  groups:
    - title:
        es: "Leyes fundamentales"
        en: "Fundamental Laws"
      items: ["tau_mu", "nu_mu", "re_mu"]
`;export{n as default};
