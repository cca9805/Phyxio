const e=`formulas:
  - id: velocidad_rayleigh_aproximada
    title:
      es: Velocidad de onda de Rayleigh (aproximacion)
      en: Rayleigh wave velocity (approximation)
    equation: "v_R = v_s * (0.862 + 1.14 * nu_poisson) / (1 + nu_poisson)"
    latex: "v_R = v_s\\\\,\\\\dfrac{0{,}862 + 1{,}14\\\\,\\\\nu}{1 + \\\\nu}  % nu_poisson"
    variables:
      - id: v_R
        role: output
      - id: v_s
        role: input
      - id: nu_poisson
        role: input
    rearrangements:
      - target: v_s
        equation: "v_s = v_R * (1 + nu_poisson) / (0.862 + 1.14 * nu_poisson)"
        latex: "v_s = v_R\\\\,\\\\dfrac{1 + \\\\nu}{0{,}862 + 1{,}14\\\\,\\\\nu}  % nu_poisson"
      - target: nu_poisson
        equation: "nu_poisson = (v_R - 0.862 * v_s) / (1.14 * v_s - v_R)"
        latex: "\\\\nu = \\\\dfrac{v_R - 0{,}862\\\\,v_s}{1{,}14\\\\,v_s - v_R}  % nu_poisson"
    category: fundamental
    relation_type: approximation
    physical_meaning:
      es: "La velocidad de Rayleigh es siempre inferior a la velocidad de onda S. La fraccion exacta depende del coeficiente de Poisson del medio. Para la mayoria de solidos, v_R esta entre 0.87 y 0.96 veces v_s."
      en: "Rayleigh velocity is always less than shear wave velocity. The exact fraction depends on the Poisson ratio of the medium. For most solids, v_R ranges between 0.87 and 0.96 times v_s."
    constraints:
      - "v_s > 0"
      - "0 <= nu_poisson < 0.5"
    validity:
      es: "Medio semi-infinito, isotropo, homogeneo y elastico lineal. Aproximacion de Viktorov (error menor del 0.5 por ciento para todo nu entre 0 y 0.5)."
      en: "Semi-infinite, isotropic, homogeneous, linearly elastic medium. Viktorov approximation (error below 0.5 percent for all nu between 0 and 0.5)."
    dimension_check: "[v_R] = m/s"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - sismologia
      - ensayos-no-destructivos
      - geotecnia
    interpretation_tags:
      - velocidad
      - superficie
      - material
    result_semantics:
      target: v_R
      kind: velocity
      sign_meaning: "siempre positivo; magnitud escalar de velocidad de fase"
      absolute_value_meaning: "rapidez de propagacion de la perturbacion superficial"
    domain_checks:
      - variable: nu_poisson
        condition: "0 <= nu_poisson < 0.5"
        message:
          es: "El coeficiente de Poisson debe estar entre 0 y 0.5 (medio estable)"
          en: "Poisson ratio must be between 0 and 0.5 (stable medium)"
      - variable: v_s
        condition: "v_s > 0"
        message:
          es: "La velocidad S debe ser positiva (medio solido con rigidez finita)"
          en: "S-wave velocity must be positive (solid medium with finite rigidity)"
    coherence_checks:
      - condition: "v_R < v_s"
        message:
          es: "La velocidad de Rayleigh siempre es menor que la de la onda S"
          en: "Rayleigh velocity is always less than S-wave velocity"
      - condition: "v_R > 0.85 * v_s"
        message:
          es: "Para materiales reales (nu entre 0 y 0.5), v_R nunca baja del 85 por ciento de v_s"
          en: "For real materials (nu between 0 and 0.5), v_R never drops below 85 percent of v_s"
    graph_implications:
      - "Curva v_R/v_s vs nu_poisson monotona creciente entre 0.87 y 0.96"
    pedagogical_triggers:
      - "Si v_R resulta mayor que v_s, se ha invertido la formula o nu es invalido"

  - id: decaimiento_profundidad
    title:
      es: Decaimiento de amplitud con la profundidad
      en: Amplitude decay with depth
    equation: "A_z = A_0 * exp(-alpha_R * z)"
    latex: "A_z = A_0\\\\,e^{-\\\\alpha_R\\\\,z}"
    variables:
      - id: A_z
        role: output
      - id: A_0
        role: input
      - id: alpha_R
        role: input
      - id: z_prof
        role: input
    rearrangements:
      - target: alpha_R
        equation: "alpha_R = -ln(A_z / A_0) / z"
        latex: "\\\\alpha_R = -\\\\dfrac{\\\\ln(A_z / A_0)}{z}  % z_prof"
      - target: z_prof
        equation: "z = -ln(A_z / A_0) / alpha_R"
        latex: "z = -\\\\dfrac{\\\\ln(A_z / A_0)}{\\\\alpha_R}  % z_prof"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La amplitud de las ondas de Rayleigh decrece exponencialmente con la profundidad. La profundidad de penetracion efectiva es del orden de una longitud de onda. Esto hace que sean ondas confinadas a la superficie."
      en: "Rayleigh wave amplitude decays exponentially with depth. The effective penetration depth is on the order of one wavelength. This makes them waves confined to the surface."
    constraints:
      - "A_0 > 0"
      - "alpha_R > 0"
      - "z >= 0"
    validity:
      es: "Medio semi-infinito homogeneo. Para medios estratificados, el decaimiento no es puramente exponencial."
      en: "Homogeneous semi-infinite medium. For stratified media, the decay is not purely exponential."
    dimension_check: "[A_z] = [A_0] (unidades de amplitud); [alpha_R] = 1/m"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - geofisica
      - ensayos-ultrasonidos
      - ingenieria-sismica
    interpretation_tags:
      - decaimiento
      - profundidad
      - confinamiento
    result_semantics:
      target: A_z
      kind: amplitude
      sign_meaning: "siempre positivo; amplitud de desplazamiento"
      absolute_value_meaning: "magnitud del movimiento a profundidad z"
    domain_checks:
      - variable: alpha_R
        condition: "alpha_R > 0"
        message:
          es: "El coeficiente de decaimiento debe ser positivo para confinamiento superficial"
          en: "Decay coefficient must be positive for surface confinement"
      - variable: z_prof
        condition: "z >= 0"
        message:
          es: "La profundidad debe ser positiva o cero (superficie)"
          en: "Depth must be positive or zero (surface)"
    coherence_checks:
      - condition: "A_z <= A_0"
        message:
          es: "La amplitud a profundidad z no puede superar la amplitud en superficie"
          en: "Amplitude at depth z cannot exceed surface amplitude"
    graph_implications:
      - "Curva exponencial decreciente A_z vs z con penetracion efectiva en z cercano a una longitud de onda"
    pedagogical_triggers:
      - "Si A_z resulta mayor que A_0, se ha invertido el signo del exponente"

  - id: ecuacion_secular_rayleigh
    title:
      es: Ecuacion secular de Rayleigh
      en: Rayleigh secular equation
    equation: "eta^6 - 8*eta^4 + (24 - 16*xi^2)*eta^2 + 16*(xi^2 - 1) = 0"
    latex: "\\\\eta^6 - 8\\\\,\\\\eta^4 + (24 - 16\\\\,\\\\xi^2)\\\\,\\\\eta^2 + 16\\\\,(\\\\xi^2 - 1) = 0"
    variables:
      - id: eta_R
        role: output
      - id: xi_vs_vp
        role: input
    rearrangements: []
    category: fundamental
    relation_type: implicit
    physical_meaning:
      es: "La ecuacion secular de Rayleigh es un polinomio de sexto grado en eta (cociente v_R/v_s) cuyas raices reales entre 0 y 1 dan la velocidad de la onda de Rayleigh. Su solucion exacta depende unicamente del cociente v_s/v_p (parametro xi)."
      en: "The Rayleigh secular equation is a sixth-degree polynomial in eta (ratio v_R/v_s) whose real roots between 0 and 1 give the Rayleigh wave velocity. Its exact solution depends only on the ratio v_s/v_p (parameter xi)."
    constraints:
      - "0 < xi < 1"
      - "0 < eta < 1"
    validity:
      es: "Medio semi-infinito, isotropo, homogeneo, elastico lineal. No aplica en medios estratificados ni anisotropos."
      en: "Semi-infinite, isotropic, homogeneous, linearly elastic medium. Not applicable to stratified or anisotropic media."
    dimension_check: "[eta] = adimensional; [xi] = adimensional"
    calculable: false
    motivo_no_calculable: "Ecuacion implicita de sexto grado; requiere resolucion numerica o la aproximacion de Viktorov"
    used_in:
      - sismologia-teorica
      - acustica-superficial
    interpretation_tags:
      - ecuacion-secular
      - raiz
      - adimensional
    result_semantics:
      target: eta_R
      kind: ratio
      sign_meaning: "siempre positivo; cociente de velocidades entre 0 y 1"
      absolute_value_meaning: "fraccion de la velocidad de onda S que corresponde a la onda de Rayleigh"
    domain_checks:
      - variable: xi_vs_vp
        condition: "0 < xi < 1"
        message:
          es: "El cociente v_s/v_p esta entre 0 y 1 para medios estables (nu positivo)"
          en: "The ratio v_s/v_p is between 0 and 1 for stable media (positive nu)"
    coherence_checks:
      - condition: "eta < 1"
        message:
          es: "La raiz eta debe ser menor que 1 (v_R menor que v_s)"
          en: "Root eta must be less than 1 (v_R less than v_s)"
    graph_implications:
      - "Curva eta vs xi mostrando la raiz real unica entre 0 y 1"
    pedagogical_triggers:
      - "Si eta sale mayor que 1, la raiz elegida es espuria"

  - id: profundidad_penetracion
    title:
      es: Profundidad de penetracion efectiva
      en: Effective penetration depth
    equation: "d_pen = lambda_R"
    latex: "d_{pen} = \\\\lambda_R"
    variables:
      - id: d_pen
        role: output
      - id: lambda_R
        role: input
    rearrangements:
      - target: lambda_R
        equation: "lambda_R = d_pen"
        latex: "\\\\lambda_R = d_{pen}"
    category: derived
    relation_type: rule_of_thumb
    physical_meaning:
      es: "La profundidad a la que la amplitud de la onda de Rayleigh se reduce significativamente (a menos del 30 por ciento de la superficial) es aproximadamente igual a una longitud de onda. Esta regla practica define el volumen de material sondeado."
      en: "The depth at which Rayleigh wave amplitude drops significantly (below 30 percent of surface value) is approximately one wavelength. This rule of thumb defines the material volume being probed."
    constraints:
      - "lambda_R > 0"
    validity:
      es: "Medio homogeneo semi-infinito. En medios estratificados, la penetracion depende del perfil de velocidades."
      en: "Homogeneous semi-infinite medium. In stratified media, penetration depends on the velocity profile."
    dimension_check: "[d_pen] = m"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - ensayos-MASW
      - geotecnia
      - ultrasonidos-superficiales
    interpretation_tags:
      - profundidad
      - sensibilidad
      - resolucion
    result_semantics:
      target: d_pen
      kind: length
      sign_meaning: "siempre positivo; profundidad geometrica"
      absolute_value_meaning: "alcance en profundidad de la perturbacion superficial"
    domain_checks:
      - variable: lambda_R
        condition: "lambda_R > 0"
        message:
          es: "La longitud de onda debe ser positiva"
          en: "Wavelength must be positive"
    coherence_checks:
      - condition: "d_pen > 0"
        message:
          es: "La profundidad de penetracion debe ser positiva"
          en: "Penetration depth must be positive"
    graph_implications:
      - "Linea horizontal en grafica A vs z marcando d_pen como la profundidad de referencia"
    pedagogical_triggers:
      - "Si se necesita sondear mas profundidad, se debe usar frecuencia menor (mayor longitud de onda)"
`;export{e as default};
