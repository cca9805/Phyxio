const n=`version: 5
topic:
  id: ecuacion-de-continuidad
  title:
    es: Ecuacion de continuidad
    en: Continuity Equation
variables:
  - id: Q
    symbol: Q
    nombre:
      es: caudal volumétrico
      en: volumetric flow rate
    unidad_si: m^3/s
    descripcion:
      es: Volumen de fluido por unidad de tiempo.
      en: Volume of fluid per unit time.
  - id: A
    symbol: A
    nombre:
      es: área de la sección
      en: cross-sectional area
    unidad_si: m^2
    descripcion:
      es: Área transversal del conducto.
      en: Cross-sectional area of the conduit.
  - id: v
    symbol: v
    nombre:
      es: velocidad del fluido
      en: fluid velocity
    unidad_si: m/s
    descripcion:
      es: Rapidez del flujo.
      en: Flow speed.
  - id: m_dot
    symbol: \\dot{m}
    nombre:
      es: caudal másico
      en: mass flow rate
    unidad_si: kg/s
    descripcion:
      es: Masa de fluido por unidad de tiempo.
      en: Mass of fluid per unit time.
  - id: rho
    symbol: \\rho
    nombre:
      es: densidad del fluido
      en: fluid density
    unidad_si: kg/m^3
    descripcion:
      es: Masa por unidad de volumen.
      en: Mass per unit volume.

formulas:
  - id: caudal
    title:
      es: Definición de caudal volumétrico
      en: Volumetric flow rate definition
    equation: Q = A * v
    latex: Q = A v
    category: definition
    relation_type: direct_product
    physical_meaning:
      es: Expresa el volumen de fluido que atraviesa una sección por unidad de tiempo como el producto del área por la velocidad media.
      en: Expresses the volume of fluid passing through a section per unit time as the product of area and average velocity.
    constraints:
      es: Flujo estacionario y perfil de velocidad uniforme en la sección.
      en: Steady flow and uniform velocity profile in the section.
    validity:
      es: Siempre válido para fluidos incompresibles en régimen laminar o turbulento (usando velocidad media).
      en: Always valid for incompressible fluids in laminar or turbulent regime (using average velocity).
    dimension_check: L^3 T^-1 = L^2 * L T^-1
    calculable: true
    motivo_no_calculable: ""
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: Determina la pendiente de la relación área-velocidad.
      en: Determines the slope of the area-velocity relationship.
    pedagogical_triggers: []
    rearrangements:
      - target: Q
        equation: Q = A * v
        latex: Q = A v
      - target: A
        equation: A = Q / v
        latex: A = \\frac{Q}{v}
      - target: v
        equation: v = Q / A
        latex: v = \\frac{Q}{A}
    used_in:
      - ecuacion-de-continuidad
      - principio-de-bernoulli
    interpretation_tags:
      - flow-rate
      - geometric-relation
    result_semantics:
      es: Flujo neto a través de la sección.
      en: Net flow through the section.

  - id: caudal_masico
    title:
      es: Caudal másico
      en: Mass flow rate
    equation: m_dot = rho * A * v
    latex: \\dot{m} = \\rho A v
    category: law
    relation_type: direct_product
    physical_meaning:
      es: Masa de fluido que atraviesa una sección por unidad de tiempo, fundamental para el balance de masa.
      en: Mass of fluid passing through a section per unit time, fundamental for mass balance.
    constraints:
      es: Conservación de la masa en un tubo de flujo.
      en: Conservation of mass in a flow tube.
    validity:
      es: Válido incluso para fluidos compresibles (gases).
      en: Valid even for compressible fluids (gases).
    dimension_check: M T^-1 = M L^-3 * L^2 * L T^-1
    calculable: true
    motivo_no_calculable: ""
    domain_checks: []
    coherence_checks: []
    graph_implications:
      es: Relaciona la densidad con el flujo neto de masa.
      en: Relates density to net mass flow.
    pedagogical_triggers: []
    rearrangements:
      - target: m_dot
        equation: m_dot = rho * A * v
        latex: \\dot{m} = \\rho A v
      - target: rho
        equation: rho = m_dot / (A * v)
        latex: \\rho = \\frac{\\dot{m}}{A v}
      - target: A
        equation: A = m_dot / (rho * v)
        latex: A = \\frac{\\dot{m}}{\\rho v}
      - target: v
        equation: v = m_dot / (rho * A)
        latex: v = \\frac{\\dot{m}}{\\rho A}
    used_in:
      - ecuacion-de-continuidad
    interpretation_tags:
      - mass-conservation
    result_semantics:
      es: Tasa de transporte de masa.
      en: Mass transport rate.

ui:
  default_formula: caudal
  groups:
    - title:
        es: Relaciones principales
        en: Main relations
      items:
        - caudal
        - caudal_masico
`;export{n as default};
