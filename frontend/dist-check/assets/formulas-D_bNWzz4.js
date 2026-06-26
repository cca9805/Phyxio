const e=`version: 5
topic:
  id: flujo-laminar
  title:
    es: Flujo Laminar
    en: Laminar Flow

formulas:
  - id: poiseuille
    title:
      es: Ley de Hagen-Poiseuille
      en: Hagen-Poiseuille Law
    equation: Q = (pi * deltaP * R^4) / (8 * eta * L)
    latex: Q = \\frac{\\pi \\Delta P R^4}{8 \\eta L}
    category: hidrodinamica
    relation_type: fundamental
    physical_meaning:
      es: Relaciona el caudal de un fluido viscoso con el gradiente de presión y la geometría del conducto.
      en: Relates the flow rate of a viscous fluid to the pressure gradient and the duct's geometry.
    constraints: [Re < 2300, eta > 0, L > 0, R > 0]
    validity:
      es: Válido para flujo laminar totalmente desarrollado de fluidos newtonianos en tubos circulares.
      en: Valid for fully developed laminar flow of Newtonian fluids in circular tubes.
    dimension_check: "[L^3/T] = ([1] * [M/(L*T^2)] * [L^4]) / ([1] * [M/(L*T)] * [L]) = [L^3/T]"
    calculable: true
    motivo_no_calculable:
      es: No se puede calcular si la viscosidad o la longitud son cero o negativas.
      en: Cannot be calculated if viscosity or length are zero or negative.
    used_in: [ingenieria_hidraulica, medicina, microfluidica]
    interpretation_tags: [laminar, viscoso, lineal]
    result_semantics: caudal_volumetrico
    domain_checks: [eta > 0, L > 0, R > 0]
    coherence_checks: [Q > 0]
    graph_implications: "Determina el volumen total de fluido transportado por segundo."
    pedagogical_triggers: [cambio_radio, cambio_viscosidad]
    rearrangements:
      - target: deltaP
        equation: deltaP = (8 * eta * L * Q) / (pi * R^4)
      - target: eta
        equation: eta = (pi * deltaP * R^4) / (8 * L * Q)
    variables: [Q, deltaP, R, eta, L]

  - id: v_max_def
    title:
      es: Velocidad Máxima Axial
      en: Maximum Axial Velocity
    equation: v_max = (deltaP * R^2) / (4 * eta * L)
    latex: v_{max} = \\frac{\\Delta P R^2}{4 \\eta L}
    category: cinematica_fluidos
    relation_type: derivado
    physical_meaning:
      es: Define la velocidad en el centro del conducto, donde el rozamiento con las paredes es mínimo.
      en: Defines the velocity at the duct center, where wall friction is minimal.
    constraints: [R > 0, eta > 0, L > 0]
    validity:
      es: Válido en régimen laminar circular bajo la condición de no deslizamiento.
      en: Valid in a circular laminar regime under the no-slip condition.
    dimension_check: "[L/T] = ([M/(L*T^2)] * [L^2]) / ([1] * [M/(L*T)] * [L]) = [L/T]"
    calculable: true
    motivo_no_calculable:
      es: Requiere viscosidad y longitud no nulas.
      en: Requires non-zero viscosity and length.
    used_in: [hemodinamica]
    interpretation_tags: [pico, perfil]
    result_semantics: velocidad_maxima
    domain_checks: [eta > 0]
    coherence_checks: [v_max > 0]
    graph_implications: "Determina el punto más alejado del origen en el perfil de velocidades."
    pedagogical_triggers: [perfil_parabolico]
    rearrangements:
      - target: v_max
        equation: v_max = (deltaP * R^2) / (4 * eta * L)
    variables: [v_max, deltaP, R, eta, L]

  - id: perfil_velocidad
    title:
      es: Perfil de Velocidades Parabólico
      en: Parabolic Velocity Profile
    equation: u = v_max * (1 - (r/R)^2)
    latex: u(r) = v_{max} \\left( 1 - \\frac{r^2}{R^2} \\right)
    category: cinematica_fluidos
    relation_type: estructural
    physical_meaning:
      es: Describe la distribución radial de la velocidad, desde cero en la pared hasta el máximo en el eje.
      en: Describes the radial velocity distribution, from zero at the wall to the maximum at the axis.
    constraints: [r <= R, R > 0]
    validity:
      es: Perfil de velocidades para flujo de Poiseuille totalmente desarrollado.
      en: Velocity profile for fully developed Poiseuille flow.
    dimension_check: "[L/T] = [L/T] * ([1] - [L/L]^2) = [L/T]"
    calculable: true
    motivo_no_calculable:
      es: Requiere definir la velocidad máxima y el radio de la tubería.
      en: Requires defining maximum velocity and pipe radius.
    used_in: [visualizacion_flujo]
    interpretation_tags: [parabolico, radial]
    result_semantics: velocidad_local
    domain_checks: [R > 0]
    coherence_checks: [u >= 0]
    graph_implications: "Es la ecuación generatriz de la forma visual del flujo."
    pedagogical_triggers: [condicion_no_deslizamiento]
    rearrangements:
      - target: v_max
        equation: v_max = u / (1 - (r/R)^2)
      - target: r
        equation: r = R * sqrt(1 - u/v_max)
    variables: [u, v_max, r, R]

ui:
  default_formula: poiseuille
  groups:
    - title:
        es: Dinámica del Flujo
        en: Flow Dynamics
      items: [poiseuille, v_max_def, perfil_velocidad]
`;export{e as default};
