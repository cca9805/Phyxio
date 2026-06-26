const e=`version: 1
formulas:
- id: newton_viscosity
  title:
    es: Ley de Newton de la viscosidad
    en: Newton's law of viscosity
  equation: tau = mu * du_dy
  latex: \\tau = \\mu \\frac{du}{dy} %du_dy%
  target: tau
  rearrangements:
  - id: mu_from_tau
    equation: mu = tau / du_dy
    latex: \\mu = \\frac{\\tau}{du/dy} %du_dy%
    target: mu
  - id: du_dy_from_tau
    equation: du_dy = tau / mu
    latex: \\frac{du}{dy} = \\frac{\\tau}{\\mu} %du_dy%
    target: du_dy
  category: constitutive_relation
  relation_type: proportional
  physical_meaning:
    es: Describe la relación lineal entre el esfuerzo cortante y la tasa de deformación en fluidos Newtonianos.
    en: Describes the linear relationship between shear stress and strain rate in Newtonian fluids.
  constraints:
  - Newtonian fluid
  - Laminar flow
  validity:
    es: Válida para la mayoría de los fluidos comunes (agua, aire) en regímenes no turbulentos.
    en: Valid for most common fluids (water, air) in non-turbulent regimes.
  dimension_check: "[Pa] = [Pa·s] * [s^-1]"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - concepto-de-fluido
  interpretation_tags:
    - linear_response
    - internal_friction
  result_semantics:
    es: Representa la fuerza tangencial necesaria para mantener el gradiente de velocidad.
    en: Represents the tangential force required to maintain the velocity gradient.
  domain_checks:
    mu: "> 0"
    du_dy: "!= 0"
  coherence_checks:
    tau_vs_mu: "tau increases with mu for constant du_dy"
  graph_implications:
    es: Define la pendiente de la recta en un gráfico de esfuerzo vs deformación.
    en: Defines the slope of the line in a stress vs strain graph.
  pedagogical_triggers:
    es: ¿Qué pasaría si la viscosidad fuera nula?
    en: What would happen if the viscosity were zero?
- id: shear_rate_def
  title:
    es: Definición de tasa de deformación
    en: Strain rate definition
  equation: gamma_dot = du_dy
  latex: \\dot{\\gamma} = \\frac{du}{dy} %du_dy%
  target: gamma_dot
  rearrangements: []
  category: definition
  relation_type: identity
  physical_meaning:
    es: Define la rapidez con la que las capas de fluido cambian su velocidad relativa.
    en: Defines the rate at which fluid layers change their relative velocity.
  constraints:
  - Continuum medium
  validity:
    es: Válida para cualquier flujo donde se pueda definir un campo de velocidades continuo.
    en: Valid for any flow where a continuous velocity field can be defined.
  dimension_check: "[s^-1] = [m/s] / [m]"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - concepto-de-fluido
  interpretation_tags:
    - kinematic_definition
    - deformation_rate
  result_semantics:
    es: Representa la intensidad del cizallamiento en el fluido.
    en: Represents the intensity of shearing in the fluid.
  domain_checks:
    du_dy: "!= 0"
  coherence_checks:
    gamma_dot_vs_du: "gamma_dot increases with velocity difference"
  graph_implications:
    es: Se ubica típicamente en el eje horizontal de los reogramas.
    en: Typically located on the horizontal axis of rheograms.
  pedagogical_triggers:
    es: ¿Es lo mismo velocidad que tasa de deformación?
    en: Is velocity the same as strain rate?
- id: viscosity_kinematic
  title:
    es: Viscosidad cinemática
    en: Kinematic viscosity
  equation: nu = mu / rho
  latex: \\nu = \\frac{\\mu}{\\rho} %mu% %rho%
  target: nu
  rearrangements:
  - id: mu_from_nu
    equation: mu = nu * rho
    latex: \\mu = \\nu \\cdot \\rho %nu% %rho%
    target: mu
  category: definition
  relation_type: proportional
  physical_meaning:
    es: Representa la difusividad de la cantidad de movimiento del fluido.
    en: Represents the momentum diffusivity of the fluid.
  constraints:
  - Constant density (incompressible)
  validity:
    es: Útil en problemas donde las fuerzas de inercia y viscosas compiten.
    en: Useful in problems where inertial and viscous forces compete.
  dimension_check: "[m^2/s] = [Pa·s] / [kg/m^3]"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - concepto-de-fluido
  interpretation_tags:
    - momentum_diffusivity
    - property_ratio
  result_semantics:
    es: Indica qué tan rápido se propaga el movimiento lateral en el fluido.
    en: Indicates how fast lateral movement propagates in the fluid.
  domain_checks:
    mu: "> 0"
    rho: "> 0"
  coherence_checks:
    nu_vs_rho: "nu decreases as density increases for same mu"
  graph_implications:
    es: Aparece en correlaciones de números adimensionales.
    en: Appears in dimensionless number correlations.
  pedagogical_triggers:
    es: ¿Por qué el aire tiene mayor viscosidad cinemática que el agua?
    en: Why does air have higher kinematic viscosity than water?
- id: shear_force_total
  title:
    es: Fuerza de cizallamiento total
    en: Total shear force
  equation: F = tau * A
  latex: F = \\tau \\cdot A %F% %tau% %A%
  target: F
  rearrangements:
  - id: tau_from_F_A
    equation: tau = F / A
    latex: \\tau = \\frac{F}{A} %F% %A%
    target: tau
  category: dynamic
  relation_type: proportional
  physical_meaning:
    es: Calcula la fuerza tangencial neta sobre una superficie dada.
    en: Calculates the net tangential force on a given surface.
  constraints:
  - Uniform shear stress
  validity:
    es: Válida para superficies planas o áreas pequeñas donde tau es constante.
    en: Valid for flat surfaces or small areas where tau is constant.
  dimension_check: "[N] = [Pa] * [m^2]"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - concepto-de-fluido
  interpretation_tags:
    - macroscopic_force
  result_semantics:
    es: Fuerza total necesaria para mantener el movimiento.
    en: Total force required to maintain motion.
  domain_checks:
    A: "> 0"
  coherence_checks:
    F_vs_A: "F increases with contact area"
  graph_implications:
    es: Se traduce en el par motor en sistemas rotatorios.
    en: Translates into motor torque in rotating systems.
  pedagogical_triggers:
    es: ¿Cómo afecta el tamaño de la placa a la fuerza?
    en: How does the plate size affect the force?
- id: tangential_velocity_rot
  title:
    es: Velocidad tangencial rotatoria
    en: Rotational tangential velocity
  equation: V = omega * R
  latex: V = \\omega \\cdot R %V% %omega% %R%
  target: V
  rearrangements: []
  category: kinematic
  relation_type: proportional
  physical_meaning:
    es: Relaciona la velocidad angular con la velocidad lineal en la superficie.
    en: Relates angular velocity with linear velocity at the surface.
  constraints:
  - Rigid body rotation
  validity:
    es: Válida para el eje y la pared del cojinete.
    en: Valid for the shaft and the bearing wall.
  dimension_check: "[m/s] = [rad/s] * [m]"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - concepto-de-fluido
  interpretation_tags:
    - kinematic_link
  result_semantics:
    es: Velocidad de la capa de fluido en contacto con la pared.
    en: Velocity of the fluid layer in contact with the wall.
  domain_checks:
    R: "> 0"
  coherence_checks:
    V_vs_omega: "V increases with rotation speed"
  graph_implications:
    es: Determina el límite superior del perfil de velocidades.
    en: Determines the upper limit of the velocity profile.
  pedagogical_triggers:
    es: ¿Por qué la velocidad es cero en la placa fija?
    en: Why is the velocity zero at the stationary plate?
- id: omega_from_RPM
  title:
    es: Conversión de RPM a velocidad angular
    en: Conversion from RPM to angular velocity
  equation: omega = 2 * pi * N / 60
  latex: \\omega = \\frac{2\\pi N}{60} %omega% %N%
  target: omega
  rearrangements: []
  category: conversion
  relation_type: proportional
  physical_meaning:
    es: Convierte la frecuencia técnica (RPM) en frecuencia física (rad/s).
    en: Converts technical frequency (RPM) into physical frequency (rad/s).
  constraints: []
  validity:
    es: Estándar para sistemas rotatorios.
    en: Standard for rotating systems.
  dimension_check: "[rad/s] = [1] * [min^-1] / [s/min]"
  calculable: true
  motivo_no_calculable: null
  used_in:
  - concepto-de-fluido
  interpretation_tags:
    - frequency_conversion
  result_semantics:
    es: Velocidad angular en radianes por segundo.
    en: Angular velocity in radians per second.
  domain_checks:
    N: ">= 0"
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers:
    es: ¿Por qué usamos rad/s en las fórmulas físicas?
    en: Why do we use rad/s in physical formulas?
`;export{e as default};
