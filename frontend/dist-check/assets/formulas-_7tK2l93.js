const e=`formulas:
  - id: velocidad_onda_p
    title:
      es: Velocidad de onda P
      en: P-wave velocity
    equation: "v_p = sqrt((K_bulk + 4/3 * G_shear) / rho_medio)"
    latex: "v_p = \\\\sqrt{\\\\dfrac{K_{bulk} + \\\\tfrac{4}{3}\\\\,G_{shear}}{\\\\rho}}  % rho_medio"
    variables:
      - id: v_p
        role: output
      - id: K_bulk
        role: input
      - id: G_shear
        role: input
      - id: rho_medio
        role: input
    rearrangements:
      - target: K_bulk
        equation: "K_bulk = rho_medio * v_p^2 - 4/3 * G_shear"
        latex: "K_{bulk} = \\\\rho\\\\,v_p^2 - \\\\tfrac{4}{3}\\\\,G_{shear}  % rho_medio"
      - target: rho_medio
        equation: "rho_medio = (K_bulk + 4/3 * G_shear) / v_p^2"
        latex: "\\\\rho = \\\\dfrac{K_{bulk} + \\\\tfrac{4}{3}\\\\,G_{shear}}{v_p^2}  % rho_medio"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La velocidad de las ondas P depende de la rigidez volumetrica y de cizalla del medio, divididas por la densidad. Las ondas P son las mas rapidas porque movilizan tanto compresion como cizalla."
      en: "P-wave velocity depends on the bulk and shear moduli of the medium divided by density. P waves are fastest because they mobilize both compression and shear."
    constraints:
      - "K_bulk > 0"
      - "G_shear >= 0"
      - "rho_medio > 0"
    validity:
      es: "Medio isotropo, homogeneo, elastico lineal. Frecuencias suficientemente bajas para que la longitud de onda sea mucho mayor que heterogeneidades."
      en: "Isotropic, homogeneous, linearly elastic medium. Frequencies low enough that wavelength is much larger than heterogeneities."
    dimension_check: "[v_p] = sqrt([Pa]/[kg/m3]) = sqrt([m2/s2]) = m/s"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - sismologia
      - geofisica
      - prospeccion
    interpretation_tags:
      - velocidad
      - compresion
      - medio_infinito
    result_semantics:
      target: v_p
      kind: scalar_unsigned
      sign_meaning:
        es: "Siempre positiva, representa rapidez de propagacion."
        en: "Always positive, represents propagation speed."
      absolute_value_meaning:
        es: "Velocidad de fase de la onda de compresion."
        en: "Phase velocity of the compression wave."
    domain_checks:
      - condition: "v_p > 0"
        message:
          es: "La velocidad debe ser positiva."
          en: "Velocity must be positive."
      - condition: "v_p < 15000"
        message:
          es: "Velocidades superiores a 15 km/s son fisicamente inverosimiles para rocas terrestres."
          en: "Velocities above 15 km/s are physically implausible for terrestrial rocks."
    coherence_checks:
      - condition: "v_p > v_s"
        message:
          es: "La onda P debe ser siempre mas rapida que la S en el mismo medio."
          en: "The P wave must always be faster than the S wave in the same medium."
    graph_implications:
      - "Recta de pendiente 1/v_p en grafica tiempo vs distancia (dromocronas)"
    pedagogical_triggers:
      - "Si v_p resulta menor que v_s, probablemente se han intercambiado modulos"

  - id: velocidad_onda_s
    title:
      es: Velocidad de onda S
      en: S-wave velocity
    equation: "v_s = sqrt(G_shear / rho_medio)"
    latex: "v_s = \\\\sqrt{\\\\dfrac{G_{shear}}{\\\\rho}}  % rho_medio"
    variables:
      - id: v_s
        role: output
      - id: G_shear
        role: input
      - id: rho_medio
        role: input
    rearrangements:
      - target: G_shear
        equation: "G_shear = rho_medio * v_s^2"
        latex: "G_{shear} = \\\\rho\\\\,v_s^2  % rho_medio"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La velocidad de las ondas S depende solo del modulo de cizalla y la densidad. Las ondas S no se propagan en fluidos porque G es cero."
      en: "S-wave velocity depends only on shear modulus and density. S waves do not propagate in fluids because G is zero."
    constraints:
      - "G_shear > 0"
      - "rho_medio > 0"
    validity:
      es: "Solo valida en solidos (G distinto de cero). Medio isotropo, homogeneo y elastico lineal."
      en: "Only valid in solids (G nonzero). Isotropic, homogeneous and linearly elastic medium."
    dimension_check: "[v_s] = sqrt([Pa]/[kg/m3]) = m/s"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - sismologia
      - geotecnia
      - deteccion_nucleo_liquido
    interpretation_tags:
      - velocidad
      - cizalla
      - solido
    result_semantics:
      target: v_s
      kind: scalar_unsigned
      sign_meaning:
        es: "Siempre positiva en solidos."
        en: "Always positive in solids."
      absolute_value_meaning:
        es: "Velocidad de fase de la onda de cizalla."
        en: "Phase velocity of the shear wave."
    domain_checks:
      - condition: "v_s > 0"
        message:
          es: "La velocidad S debe ser positiva en un solido."
          en: "S-wave velocity must be positive in a solid."
    coherence_checks:
      - condition: "v_s < v_p"
        message:
          es: "La onda S siempre es mas lenta que la P en el mismo medio solido."
          en: "The S wave is always slower than the P wave in the same solid medium."
    graph_implications:
      - "Recta de pendiente 1/v_s en dromocronas, mas inclinada que la de P"
    pedagogical_triggers:
      - "Si v_s resulta cero, el medio es un fluido y no transmite S"

  - id: relacion_vp_vs_poisson
    title:
      es: Relacion entre velocidades y coeficiente de Poisson
      en: Velocity ratio and Poisson's ratio
    equation: "ratio_vp_vs = sqrt((2 - 2*nu_poisson) / (1 - 2*nu_poisson))"
    latex: "\\\\dfrac{v_p}{v_s} = \\\\sqrt{\\\\dfrac{2(1 - \\\\nu)}{1 - 2\\\\nu}}  % ratio_vp_vs nu_poisson"
    variables:
      - id: ratio_vp_vs
        role: output
      - id: nu_poisson
        role: input
    rearrangements:
      - target: nu_poisson
        equation: "nu_poisson = (ratio_vp_vs^2 - 2) / (2 * ratio_vp_vs^2 - 2)"
        latex: "\\\\nu = \\\\dfrac{(v_p/v_s)^2 - 2}{2\\\\,(v_p/v_s)^2 - 2}  % nu_poisson ratio_vp_vs"
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: "El cociente de velocidades v_p/v_s depende unicamente del coeficiente de Poisson del medio. Para nu cercano a 0.25, el cociente es raiz de 3."
      en: "The velocity ratio v_p/v_s depends only on the Poisson ratio of the medium. For nu near 0.25, the ratio is the square root of 3."
    constraints:
      - "0 < nu_poisson < 0.5"
    validity:
      es: "Solido isotropo elastico lineal. No valida para fluidos (nu tiende a 0.5, v_s tiende a 0)."
      en: "Linearly elastic isotropic solid. Not valid for fluids (nu tends to 0.5, v_s tends to 0)."
    dimension_check: "Adimensional ambos lados"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - clasificacion_litologica
      - deteccion_fluidos
    interpretation_tags:
      - ratio
      - poisson
      - litologia
    result_semantics:
      target: ratio_vp_vs
      kind: scalar_unsigned
      sign_meaning:
        es: "Siempre mayor que 1 en solidos reales."
        en: "Always greater than 1 in real solids."
      absolute_value_meaning:
        es: "Cociente de velocidades de onda P sobre onda S."
        en: "Ratio of P-wave to S-wave velocity."
    domain_checks:
      - condition: "ratio_vp_vs > 1"
        message:
          es: "El cociente v_p/v_s debe ser mayor que 1."
          en: "The v_p/v_s ratio must be greater than 1."
      - condition: "ratio_vp_vs < 5"
        message:
          es: "Valores superiores a 5 son anomalos y sugieren medio casi fluido."
          en: "Values above 5 are anomalous and suggest a nearly fluid medium."
    coherence_checks:
      - condition: "nu_poisson > 0 and nu_poisson < 0.5"
        message:
          es: "El coeficiente de Poisson debe estar entre 0 y 0.5 para un solido estable."
          en: "Poisson's ratio must be between 0 and 0.5 for a stable solid."
    graph_implications:
      - "Curva ratio vs nu con asintota vertical en nu que tiende a 0.5"
    pedagogical_triggers:
      - "Si ratio es menor que raiz de 2, el coeficiente de Poisson es negativo (material auxetico)"

  - id: diferencia_tiempos_sismo
    title:
      es: Diferencia de tiempos de llegada P-S
      en: P-S arrival time difference
    equation: "delta_t_ps = d_foco * (1/v_s - 1/v_p)"
    latex: "\\\\Delta t = d_foco\\\\left(\\\\dfrac{1}{v_s} - \\\\dfrac{1}{v_p}\\\\right)  % delta_t_ps"
    variables:
      - id: delta_t_ps
        role: output
      - id: d_foco
        role: input
      - id: v_s
        role: input
      - id: v_p
        role: input
    rearrangements:
      - target: d_foco
        equation: "d_foco = delta_t_ps / (1/v_s - 1/v_p)"
        latex: "d_foco = \\\\dfrac{\\\\Delta t}{\\\\dfrac{1}{v_s} - \\\\dfrac{1}{v_p}}  % delta_t_ps"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "La diferencia temporal entre la llegada de la onda P y la onda S a un sismografo es proporcional a la distancia al foco. Es la base del metodo de localizacion sismica."
      en: "The time difference between P and S wave arrivals at a seismograph is proportional to the distance to the focus. This is the basis of seismic location methods."
    constraints:
      - "d_foco > 0"
      - "v_p > v_s > 0"
    validity:
      es: "Medio homogeneo entre foco y estacion. Para medios estratificados se usan dromocronas mas complejas."
      en: "Homogeneous medium between focus and station. For stratified media, more complex travel-time curves are used."
    dimension_check: "[delta_t_ps] = [m] * [s/m] = s"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - localizacion_sismica
      - triangulacion
    interpretation_tags:
      - tiempo
      - distancia
      - localizacion
    result_semantics:
      target: delta_t_ps
      kind: scalar_unsigned
      sign_meaning:
        es: "Siempre positiva porque v_p mayor que v_s."
        en: "Always positive because v_p is greater than v_s."
      absolute_value_meaning:
        es: "Tiempo transcurrido entre la llegada de la P y la S."
        en: "Elapsed time between P and S wave arrivals."
    domain_checks:
      - condition: "delta_t_ps > 0"
        message:
          es: "La diferencia debe ser positiva."
          en: "The difference must be positive."
    coherence_checks:
      - condition: "delta_t_ps < 1200"
        message:
          es: "Mas de 20 minutos de diferencia implicaria distancias mayores que el diametro terrestre."
          en: "More than 20 minutes difference would imply distances larger than Earth's diameter."
    graph_implications:
      - "Separacion creciente entre dromocronas P y S con la distancia"
    pedagogical_triggers:
      - "Si delta_t es negativo, las velocidades estan intercambiadas"
`;export{e as default};
