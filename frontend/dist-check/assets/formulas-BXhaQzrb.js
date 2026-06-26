const e=`version: 1
formulas:
- id: balance
  title:
    es: Ecuación General de Masa Variable (Segunda Ley extendida)
    en: General Variable Mass Equation (Extended Second Law)
  equation: Fext + u*mdot = m*dvdt
  latex: \\vec{F}_{ext} + \\vec{u} \\frac{dm}{dt} = m \\frac{d\\vec{v}}{dt}
  rearrangements:
  - target: dvdt
    equation: dvdt = (Fext + u*mdot)/m
    latex: \\vec{a} = \\frac{\\vec{F}_{ext} + \\vec{u} \\dot{m}}{m}
    constraints:
    - expr: m > 0
  - target: Fext
    equation: Fext = m*dvdt - u*mdot
    latex: \\vec{F}_{ext} = m \\vec{a} - \\vec{u} \\dot{m}
    constraints: []
  - target: u
    equation: u = (m*dvdt - Fext)/mdot
    latex: \\vec{u} = \\frac{m \\frac{d\\vec{v}}{dt} - \\vec{F}_{ext}}{\\dot{m}}
    constraints:
    - expr: mdot != 0
  - target: mdot
    equation: mdot = (m*dvdt - Fext)/u
    latex: \\dot{m} = \\frac{m \\frac{d\\vec{v}}{dt} - \\vec{F}_{ext}}{\\vec{u}}
    constraints:
    - expr: u != 0
  category: fundamental
  relation_type: differential_relation
  physical_meaning:
    es: Describe cómo cambia el movimiento de un cuerpo cuando su masa varía en el tiempo. El término u*mdot representa el 'empuje' o fuerza reactiva debida al flujo de materia.
    en: Describes how a body's motion changes when its mass varies over time. The term u*mdot represents the 'thrust' or reactive force due to mass flow.
  constraints:
  - expr: m > 0
    message:
      es: La masa instantánea del sistema debe ser positiva.
      en: The instantaneous mass of the system must be positive.
  validity:
    es: Aplicable a cohetes, cintas transportadoras, cadenas en movimiento y cualquier sistema con flujo de masa macroscópico.
    en: Applicable to rockets, conveyor belts, moving chains, and any system with macroscopic mass flow.
  dimension_check:
    es: '[F] = [M L T^-2]'
    en: '[F] = [M L T^-2]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - models
  - examples
  - calculator
  - applications
  interpretation_tags:
  - empuje
  - flujo-de-masa
  - dinamica-avanzada
  result_semantics:
    target: dvdt
    meaning: Aceleración instantánea del sistema resultante de fuerzas externas e internas de flujo.
  domain_checks: []
  coherence_checks:
  - expr: u != 0 || mdot != 0 || Fext == m*dvdt
    message:
      es: Si no hay flujo de masa, se debe recuperar la segunda ley de Newton estándar F = ma.
      en: If there is no mass flow, standard Newton's second law F = ma must be recovered.
  graph_implications:
  - La aceleración no es constante aunque la fuerza externa lo sea, debido al cambio en m.
  pedagogical_triggers:
  - when: u*mdot > Fext
    message:
      es: ¡Dominio propulsivo! Es el empuje por flujo de masa supera a las fuerzas externas.
      en: Propulsive dominance! It is when mass flow thrust exceeds external forces.

- id: thrust
  title:
    es: Fuerza de Empuje (Thrust)
    en: Thrust Force
  equation: Ft = u*mdot
  latex: \\vec{F}_t = \\vec{u} \\frac{dm}{dt}
  rearrangements:
  - target: u
    equation: u = Ft/mdot
    latex: \\vec{u} = \\frac{\\vec{F}_t}{\\dot{m}}
    constraints:
    - expr: mdot != 0
  - target: mdot
    equation: mdot = Ft/u
    latex: \\dot{m} = \\frac{\\vec{F}_t}{\\vec{u}}
    constraints:
    - expr: u != 0
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: Representa la fuerza reactiva neta que el flujo de masa ejerce sobre el cuerpo principal. Para un cohete, la velocidad efectiva de exhaust [[ve]] se relaciona con [[u]] mediante ve = |u| (ve es la magnitud escalar positiva; u es la proyección vectorial, negativa para gases expulsados hacia atrás).
    en: Represents the net reactive force that the mass flow exerts on the main body. For a rocket, the effective exhaust velocity [[ve]] relates to [[u]] by ve = |u| (ve is the positive scalar magnitude; u is the vectorial projection, negative for gases ejected rearward).
  constraints: []
  validity:
    es: Válida para motores de chorro, propulsores iónicos y eyección de fluidos.
    en: Valid for jet engines, ion thrusters, and fluid ejection.
  dimension_check:
    es: '[Ft] = [M L T^-2]'
    en: '[Ft] = [M L T^-2]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - examples
  - calculator
  - applications
  interpretation_tags:
  - propulsion
  - empuje
  result_semantics:
    target: Ft
    meaning: Fuerza motriz debida a la variación de masa.
  domain_checks: []
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers: []

- id: tsiolkovsky
  title:
    es: Ecuación de Tsiolkovsky (Cohete Ideal)
    en: Tsiolkovsky Rocket Equation (Ideal Rocket)
  equation: Delta_v = ve * ln(m0/mf)
  latex: \\Delta v = v_e \\ln\\!\\left(\\frac{m_0}{m_f}\\right)
  rearrangements:
  - target: ve
    equation: ve = Delta_v / ln(m0/mf)
    latex: v_e = \\frac{\\Delta v}{\\ln(m_0/m_f)}
    constraints:
    - expr: m0 > 0
    - expr: mf > 0
    - expr: m0 > mf
  - target: m0
    equation: m0 = mf * exp(Delta_v/ve)
    latex: m_0 = m_f \\, e^{\\Delta v / v_e}
    constraints:
    - expr: ve > 0
    - expr: mf > 0
  - target: mf
    equation: mf = m0 * exp(-Delta_v/ve)
    latex: m_f = m_0 \\, e^{-\\Delta v / v_e}
    constraints:
    - expr: ve > 0
    - expr: m0 > 0
  category: derived
  relation_type: integral_relation
  physical_meaning:
    es: Relaciona el cambio de velocidad total de un cohete con la velocidad de exhaust y la razón de masas inicial/final. Es la integral de la ecuación de masa variable en ausencia de fuerzas externas. Aquí [[ve]] equivale a |u| donde [[u]] es la velocidad relativa del flujo usada en la fórmula de empuje; ambas son la misma propiedad del propulsor expresada con convenios de signo distintos.
    en: Relates the total velocity change of a rocket to the exhaust velocity and the initial/final mass ratio. It is the integral of the variable-mass equation in the absence of external forces. Here [[ve]] equals |u| where [[u]] is the relative flow velocity used in the thrust formula; both represent the same propellant property expressed with different sign conventions.
  constraints:
  - expr: m0 > mf
    message:
      es: La masa inicial debe ser mayor que la masa final (el cohete quema combustible).
      en: Initial mass must be greater than final mass (the rocket burns fuel).
  - expr: ve > 0
    message:
      es: La velocidad de exhaust efectiva debe ser positiva.
      en: Effective exhaust velocity must be positive.
  validity:
    es: Válida para cohetes en ausencia de fuerzas externas, con velocidad de exhaust constante relativa al cuerpo.
    en: Valid for rockets in the absence of external forces, with constant exhaust velocity relative to the body.
  dimension_check:
    es: '[Δv] = [L T^-1]'
    en: '[Δv] = [L T^-1]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - theory
  - examples
  - calculator
  - applications
  interpretation_tags:
  - cohete
  - delta-v
  - propulsion
  result_semantics:
    target: Delta_v
    meaning: Ganancia total de velocidad del cohete al consumir combustible de m0 a mf.
  domain_checks:
  - expr: m0/mf > 1
    message:
      es: La razón de masas debe ser mayor que 1.
      en: Mass ratio must be greater than 1.
  coherence_checks:
  - expr: Delta_v > 0
    message:
      es: Para un cohete que expulsa masa, el delta-v debe ser positivo.
      en: For a rocket expelling mass, delta-v must be positive.
  graph_implications:
  - Delta-v crece logarítmicamente con la razón de masas. Duplicar el delta-v requiere elevar al cuadrado la razón de masas.
  pedagogical_triggers:
  - when: m0/mf > 10
    message:
      es: Razón de masas alta. Cohete de altas prestaciones (e.g., etapas de lanzamiento).
      en: High mass ratio. High-performance rocket (e.g., launch stages).
`;export{e as default};
