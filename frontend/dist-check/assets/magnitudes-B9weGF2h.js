const e=`magnitudes:
  - id: v_R
    symbol: "v_R"
    nombre:
      es: Velocidad de onda de Rayleigh
      en: Rayleigh wave velocity
    descripcion:
      es: Velocidad de fase de la onda superficial de Rayleigh en un medio semi-infinito isotropo
      en: Phase velocity of the Rayleigh surface wave in an isotropic semi-infinite medium
    unidad_si: "m/s"
    dimension: "LT^{-1}"
    is_vector: false
    components: []
    category: cinematica
    physical_role: "velocidad de fase de onda superficial"
    used_in:
      - velocidad_rayleigh_aproximada
    common_mistake:
      es: "Confundir v_R con v_s; la onda de Rayleigh siempre es mas lenta que la S"
      en: "Confusing v_R with v_s; Rayleigh wave is always slower than S wave"
    typical_range:
      min: 100
      max: 4000
      unit: "m/s"
      context: "Desde suelo blando (100 m/s) hasta roca dura (3500 m/s)"
    sign_behavior: "siempre positivo; magnitud escalar"
    zero_behavior: "v_R nula implicaria ausencia de superficie libre o medio sin rigidez"
    value_nature: continuous
    interpretation_role: "indicador de rigidez superficial del material; a mayor v_R, mas rigido el material cerca de la superficie"
    graph_binding:
      axis: y
      graph_type: Coord
      magnitud_estrella: true
    pedagogical_notes:
      - "v_R esta entre 0.87 y 0.96 veces v_s para todos los materiales reales"
      - "El valor exacto depende solo del coeficiente de Poisson"

  - id: v_s
    symbol: "v_s"
    nombre:
      es: Velocidad de onda S (transversal)
      en: S-wave (shear) velocity
    descripcion:
      es: Velocidad de propagacion de la onda de cizalla en el medio
      en: Propagation velocity of the shear wave in the medium
    unidad_si: "m/s"
    dimension: "LT^{-1}"
    is_vector: false
    components: []
    category: cinematica
    physical_role: "velocidad de onda de cizalla que determina la de Rayleigh"
    used_in:
      - velocidad_rayleigh_aproximada
    common_mistake:
      es: "Creer que v_s y v_R son iguales; v_R es siempre menor"
      en: "Thinking v_s and v_R are equal; v_R is always smaller"
    typical_range:
      min: 80
      max: 4500
      unit: "m/s"
      context: "Desde suelo muy blando hasta rocas cristalinas"
    sign_behavior: "siempre positivo; magnitud escalar"
    zero_behavior: "v_s nula indica un fluido; la onda de Rayleigh no existe sin rigidez de cizalla"
    value_nature: continuous
    interpretation_role: "parametro de control de la velocidad de Rayleigh; conocer v_s es el primer paso para predecir v_R"
    graph_binding:
      axis: x
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "En ensayos MASW, se mide v_R para deducir v_s del terreno"
      - "v_s es cero en liquidos, por eso las ondas de Rayleigh no existen en fluidos"

  - id: nu_poisson
    symbol: "\\\\nu"
    nombre:
      es: Coeficiente de Poisson
      en: Poisson ratio
    descripcion:
      es: Razon entre la deformacion transversal y la longitudinal, que controla la fraccion v_R/v_s
      en: Ratio of transverse to longitudinal strain, controlling the fraction v_R/v_s
    unidad_si: "adimensional"
    dimension: "1"
    is_vector: false
    components: []
    category: propiedad-material
    physical_role: "parametro elastico que regula la relacion entre v_R y v_s"
    used_in:
      - velocidad_rayleigh_aproximada
    common_mistake:
      es: "Olvidar que nu debe ser menor que 0.5 para un solido estable; en el limite 0.5 el material es incompresible"
      en: "Forgetting that nu must be less than 0.5 for a stable solid; at the limit 0.5 the material is incompressible"
    typical_range:
      min: 0.0
      max: 0.49
      unit: "adimensional"
      context: "Corcho cercano a 0, caucho cercano a 0.49, rocas tipicas 0.2-0.35"
    sign_behavior: "entre 0 y 0.5 para materiales convencionales; negativo solo en materiales auxeticos"
    zero_behavior: "nu cero corresponde a un material que no se contrae lateralmente al estirarse"
    value_nature: continuous
    interpretation_role: "modula la fraccion v_R/v_s; a mayor nu, mas se acerca v_R a v_s"
    graph_binding:
      axis: parametro
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "Para nu igual a 0.25 (solido de Poisson clasico), v_R es 0.92 veces v_s"
      - "Para nu cercano a 0.5, v_R se aproxima a 0.955 veces v_s"

  - id: A_0
    symbol: "A_0"
    nombre:
      es: Amplitud en la superficie
      en: Surface amplitude
    descripcion:
      es: Amplitud del desplazamiento de la onda de Rayleigh medida en la superficie libre
      en: Displacement amplitude of the Rayleigh wave measured at the free surface
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: []
    category: cinematica
    physical_role: "amplitud de referencia en la superficie para el decaimiento exponencial"
    used_in:
      - decaimiento_profundidad
    common_mistake:
      es: "Confundir amplitud superficial con amplitud total del sismo; A_0 es solo la componente Rayleigh"
      en: "Confusing surface amplitude with total earthquake amplitude; A_0 is only the Rayleigh component"
    typical_range:
      min: 0.000001
      max: 0.1
      unit: "m"
      context: "Desde microsismos (micrometros) hasta terremotos destructivos (centimetros)"
    sign_behavior: "siempre positivo; magnitud de desplazamiento"
    zero_behavior: "A_0 nula significa ausencia de onda de Rayleigh"
    value_nature: continuous
    interpretation_role: "referencia para cuantificar el decaimiento con la profundidad"
    graph_binding:
      axis: y
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "A_0 depende de la fuente sismica y de la distancia al epicentro"
      - "Se mide con sismometros de banda ancha"

  - id: A_z
    symbol: "A_z"
    nombre:
      es: Amplitud a profundidad z
      en: Amplitude at depth z
    descripcion:
      es: Amplitud del desplazamiento de la onda de Rayleigh a una profundidad z bajo la superficie
      en: Displacement amplitude of the Rayleigh wave at depth z below the surface
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: []
    category: cinematica
    physical_role: "amplitud reducida por el confinamiento superficial"
    used_in:
      - decaimiento_profundidad
    common_mistake:
      es: "Suponer que A_z es cero a cualquier profundidad; el decaimiento es gradual, no abrupto"
      en: "Assuming A_z is zero at any depth; the decay is gradual, not abrupt"
    typical_range:
      min: 0
      max: 0.1
      unit: "m"
      context: "Siempre menor o igual que A_0"
    sign_behavior: "siempre positivo o cero; magnitud de desplazamiento"
    zero_behavior: "A_z tiende a cero asintoticamamente a gran profundidad"
    value_nature: continuous
    interpretation_role: "cuantifica cuanto penetra la onda de Rayleigh a una profundidad dada"
    graph_binding:
      axis: y
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "A profundidad igual a una longitud de onda, A_z es menor del 30 por ciento de A_0"
      - "La componente vertical y la horizontal decaen a tasas ligeramente distintas"

  - id: alpha_R
    symbol: "\\\\alpha_R"
    nombre:
      es: Coeficiente de decaimiento con la profundidad
      en: Depth decay coefficient
    descripcion:
      es: Inverso de la longitud caracteristica de decaimiento exponencial de la amplitud de Rayleigh con la profundidad
      en: Inverse of the characteristic exponential decay length of Rayleigh amplitude with depth
    unidad_si: "1/m"
    dimension: "L^{-1}"
    is_vector: false
    components: []
    category: propiedad-onda
    physical_role: "tasa de confinamiento superficial de la onda de Rayleigh"
    used_in:
      - decaimiento_profundidad
    common_mistake:
      es: "Confundir alpha_R con la atenuacion por disipacion; alpha_R es geometrico (confinamiento), no disipativo"
      en: "Confusing alpha_R with dissipative attenuation; alpha_R is geometric (confinement), not dissipative"
    typical_range:
      min: 0.01
      max: 100
      unit: "1/m"
      context: "Depende de la frecuencia: alta frecuencia implica mayor alpha_R (penetracion mas corta)"
    sign_behavior: "siempre positivo; tasa de decaimiento"
    zero_behavior: "alpha_R cero significaria onda no confinada (onda de cuerpo, no superficial)"
    value_nature: continuous
    interpretation_role: "cuanto mayor alpha_R, mas confinada esta la onda a la superficie"
    graph_binding:
      axis: parametro
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "alpha_R es aproximadamente 2*pi/lambda_R para la componente dominante"
      - "No confundir con la atenuacion intrinseca Q del material"

  - id: z_prof
    symbol: "z"
    nombre:
      es: Profundidad bajo la superficie
      en: Depth below surface
    descripcion:
      es: Distancia vertical desde la superficie libre hacia el interior del medio
      en: Vertical distance from the free surface into the medium interior
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: []
    category: geometria
    physical_role: "coordenada vertical que parametriza el decaimiento de la onda"
    used_in:
      - decaimiento_profundidad
    common_mistake:
      es: "Tomar z negativo hacia abajo; en esta convencion z es positivo hacia el interior"
      en: "Taking z negative downward; in this convention z is positive into the interior"
    typical_range:
      min: 0
      max: 10000
      unit: "m"
      context: "Desde la superficie (0) hasta profundidades de varios km en sismologia"
    sign_behavior: "positivo o cero; cero es la superficie libre"
    zero_behavior: "z cero corresponde a la superficie libre donde la amplitud es maxima"
    value_nature: continuous
    interpretation_role: "variable independiente del perfil de decaimiento; a mayor z, menor amplitud"
    graph_binding:
      axis: x
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "La convencion habitual en sismologia es z positivo hacia abajo"
      - "z igual a lambda_R marca la profundidad de penetracion efectiva"

  - id: lambda_R
    symbol: "\\\\lambda_R"
    nombre:
      es: Longitud de onda de Rayleigh
      en: Rayleigh wavelength
    descripcion:
      es: Distancia entre dos crestas consecutivas de la onda de Rayleigh en la superficie
      en: Distance between two consecutive crests of the Rayleigh wave on the surface
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: []
    category: cinematica
    physical_role: "escala espacial que determina la profundidad de penetracion"
    used_in:
      - profundidad_penetracion
    common_mistake:
      es: "Confundir lambda_R con la longitud de onda de la onda S; ambas difieren porque v_R difiere de v_s"
      en: "Confusing lambda_R with S-wave wavelength; they differ because v_R differs from v_s"
    typical_range:
      min: 0.001
      max: 100000
      unit: "m"
      context: "Desde milimetros (ultrasonidos SAW) hasta decenas de km (sismologia de baja frecuencia)"
    sign_behavior: "siempre positivo; longitud geometrica"
    zero_behavior: "lambda_R nula no tiene sentido fisico (frecuencia infinita)"
    value_nature: continuous
    interpretation_role: "define el alcance en profundidad del sondeo; frecuencia baja implica lambda_R grande e inspeccion profunda"
    graph_binding:
      axis: x
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "lambda_R = v_R / f; controlar la frecuencia permite elegir la profundidad sondeada"
      - "En ensayos MASW se varian las frecuencias para construir un perfil de v_s con la profundidad"

  - id: d_pen
    symbol: "d_{pen}"
    nombre:
      es: Profundidad de penetracion efectiva
      en: Effective penetration depth
    descripcion:
      es: Profundidad a la que la amplitud de Rayleigh se reduce a menos del 30 por ciento de la superficial
      en: Depth at which Rayleigh amplitude drops below 30 percent of the surface value
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: []
    category: geometria
    physical_role: "alcance vertical de sensibilidad de la onda superficial"
    used_in:
      - profundidad_penetracion
    common_mistake:
      es: "Creer que la onda penetra infinitamente; en la practica, por debajo de d_pen la onda es despreciable"
      en: "Believing the wave penetrates infinitely; in practice, below d_pen the wave is negligible"
    typical_range:
      min: 0.001
      max: 100000
      unit: "m"
      context: "Igual a lambda_R; desde mm en SAW hasta km en sismologia"
    sign_behavior: "siempre positivo; profundidad geometrica"
    zero_behavior: "d_pen nula implicaria onda sin penetracion (frecuencia infinita, sin sentido fisico)"
    value_nature: continuous
    interpretation_role: "define hasta que profundidad el ensayo tiene sensibilidad al material"
    graph_binding:
      axis: referencia
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "d_pen es aproximadamente igual a una longitud de onda"
      - "Controlar la frecuencia de excitacion selecciona la profundidad investigada"

  - id: eta_R
    symbol: "\\\\eta"
    nombre:
      es: Cociente adimensional v_R/v_s
      en: Dimensionless ratio v_R/v_s
    descripcion:
      es: Raiz real de la ecuacion secular de Rayleigh; cociente entre la velocidad de Rayleigh y la de la onda S
      en: Real root of the Rayleigh secular equation; ratio of Rayleigh velocity to S-wave velocity
    unidad_si: "adimensional"
    dimension: "1"
    is_vector: false
    components: []
    category: adimensional
    physical_role: "parametro central de la ecuacion secular que codifica la velocidad normalizada"
    used_in:
      - ecuacion_secular_rayleigh
    common_mistake:
      es: "Asumir eta igual a 1; eso significaria v_R igual a v_s, lo cual es imposible"
      en: "Assuming eta equals 1; that would mean v_R equals v_s, which is impossible"
    typical_range:
      min: 0.87
      max: 0.96
      unit: "adimensional"
      context: "Para nu entre 0 y 0.5, eta va de 0.874 a 0.955"
    sign_behavior: "siempre positivo; cociente de velocidades"
    zero_behavior: "eta cero significaria onda estatica (sin sentido fisico)"
    value_nature: continuous
    interpretation_role: "resume en un solo numero la fraccion de v_s que corresponde a la onda superficial"
    graph_binding:
      axis: y
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "eta es la raiz real unica de la ecuacion secular entre 0 y 1"
      - "Conocer eta y v_s da directamente v_R = eta * v_s"

  - id: xi_vs_vp
    symbol: "\\\\xi"
    nombre:
      es: Cociente v_s/v_p
      en: Ratio v_s/v_p
    descripcion:
      es: Parametro adimensional que entra en la ecuacion secular; cociente de la velocidad S entre la P
      en: Dimensionless parameter entering the secular equation; ratio of S to P velocity
    unidad_si: "adimensional"
    dimension: "1"
    is_vector: false
    components: []
    category: adimensional
    physical_role: "parametro material alternativo al coeficiente de Poisson para la ecuacion secular"
    used_in:
      - ecuacion_secular_rayleigh
    common_mistake:
      es: "Invertir el cociente y usar v_p/v_s en lugar de v_s/v_p; xi es siempre menor que 1"
      en: "Inverting the ratio and using v_p/v_s instead of v_s/v_p; xi is always less than 1"
    typical_range:
      min: 0.3
      max: 0.7
      unit: "adimensional"
      context: "Para rocas con nu entre 0.1 y 0.45, xi va de 0.38 a 0.67"
    sign_behavior: "siempre positivo; cociente de velocidades positivas"
    zero_behavior: "xi cero implicaria v_s nulo (fluido); la onda de Rayleigh no existiria"
    value_nature: continuous
    interpretation_role: "parametro de entrada unico de la ecuacion secular de Rayleigh"
    graph_binding:
      axis: x
      graph_type: Coord
      magnitud_estrella: false
    pedagogical_notes:
      - "xi se relaciona con nu: xi^2 = (1 - 2*nu) / (2 - 2*nu)"
      - "Conocer xi es equivalente a conocer nu para resolver la secular"
`;export{e as default};
