const e=`formulas:
  - id: definicion_indice
    title:
      es: Definicion del indice de refraccion
      en: Definition of the refractive index
    equation: "n = c / v_medio"
    latex: "n = \\\\frac{c}{v} % n c v_medio"
    rearrangements:
      - target: n
        equation: "n = c / v_medio"
        latex: "n = \\\\frac{c}{v}"
      - target: v_medio
        equation: "v_medio = c / n"
        latex: "v = \\\\frac{c}{n}"
      - target: c
        equation: "c = n * v_medio"
        latex: "c = n \\\\, v"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "El indice de refraccion mide cuantas veces se reduce la velocidad de la luz respecto al vacio al propagarse por un medio material."
      en: "The refractive index measures how many times the speed of light is reduced compared to vacuum when propagating through a material medium."
    constraints:
      - id: n_mayor_uno
        description:
          es: "En medios convencionales n es mayor o igual a 1."
          en: "In conventional media n is greater than or equal to 1."
    validity:
      es: "Valido para medios transparentes, isotropos y no dispersivos en el rango de frecuencias considerado."
      en: "Valid for transparent, isotropic and non-dispersive media in the frequency range considered."
    dimension_check: "[1] (adimensional)"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - calculo de la velocidad de la luz en un medio
      - paso previo a la ley de Snell
    variables:
      - n
      - c
      - v_medio
    interpretation_tags:
      - velocidad_medio
      - frenado_luz
    result_semantics:
      target: n
      kind: ratio
      sign_meaning:
        es: "Siempre positivo. Valores mayores indican mayor frenado de la luz."
        en: "Always positive. Higher values indicate greater slowing of light."
      absolute_value_meaning:
        es: "La magnitud del indice indica directamente el factor de reduccion de velocidad."
        en: "The magnitude of the index directly indicates the speed reduction factor."
    domain_checks:
      - id: v_medio_positivo
        when: "v_medio <= 0"
        message:
          es: "La velocidad en el medio debe ser positiva."
          en: "The speed in the medium must be positive."
      - id: v_medio_menor_c
        when: "v_medio > c"
        message:
          es: "La velocidad en el medio no puede superar la velocidad de la luz en el vacio en medios convencionales."
          en: "The speed in the medium cannot exceed the speed of light in vacuum in conventional media."
    coherence_checks:
      - id: n_menor_uno
        when: "n < 1"
        message:
          es: "Un indice menor que 1 solo ocurre en metamateriales o para velocidad de fase; verificar datos."
          en: "An index below 1 only occurs in metamaterials or for phase velocity; check data."
      - id: n_muy_alto
        when: "n > 3"
        message:
          es: "Un indice superior a 3 es inusual en materiales opticos comunes; verificar el medio."
          en: "An index above 3 is unusual for common optical materials; check the medium."
    graph_implications:
      - id: mayor_n_mayor_desviacion
        description:
          es: "A mayor indice, mayor desviacion del rayo hacia la normal en el grafico."
          en: "The higher the index, the greater the ray bends towards the normal in the graph."
    pedagogical_triggers:
      - id: confundir_n_con_densidad
        detect_when: "n > 2"
        message:
          es: "Recuerda que n no mide la densidad del medio sino la relacion entre velocidades de la luz."
          en: "Remember that n does not measure the density of the medium but the ratio between light speeds."

  - id: longitud_onda_medio
    title:
      es: Longitud de onda en el medio
      en: Wavelength in the medium
    equation: "lambda_medio = lambda_0 / n"
    latex: "\\\\lambda = \\\\frac{\\\\lambda_0}{n} % lambda_medio lambda_0 n"
    rearrangements:
      - target: lambda_medio
        equation: "lambda_medio = lambda_0 / n"
        latex: "\\\\lambda = \\\\frac{\\\\lambda_0}{n}"
      - target: lambda_0
        equation: "lambda_0 = lambda_medio * n"
        latex: "\\\\lambda_0 = n \\\\, \\\\lambda"
      - target: n
        equation: "n = lambda_0 / lambda_medio"
        latex: "n = \\\\frac{\\\\lambda_0}{\\\\lambda}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "La longitud de onda de la luz se acorta dentro de un medio material en un factor igual al indice de refraccion. La frecuencia permanece constante."
      en: "The wavelength of light shortens inside a material medium by a factor equal to the refractive index. The frequency remains constant."
    constraints:
      - id: n_positivo
        description:
          es: "El indice de refraccion debe ser positivo."
          en: "The refractive index must be positive."
    validity:
      es: "Valido para ondas monocromaticas en medios lineales y homogeneos."
      en: "Valid for monochromatic waves in linear and homogeneous media."
    dimension_check: "[L]"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - calculo de longitud de onda dentro de fibras y cristales
      - interpretacion del cambio de color aparente
    variables:
      - lambda_medio
      - lambda_0
      - n
    interpretation_tags:
      - acortamiento_longitud_onda
      - frecuencia_constante
    result_semantics:
      target: lambda_medio
      kind: magnitude
      sign_meaning:
        es: "Siempre positiva."
        en: "Always positive."
      absolute_value_meaning:
        es: "Indica la distancia entre crestas consecutivas de la onda dentro del medio."
        en: "Indicates the distance between consecutive wave crests inside the medium."
    domain_checks:
      - id: lambda_0_positivo
        when: "lambda_0 <= 0"
        message:
          es: "La longitud de onda en el vacio debe ser positiva."
          en: "The vacuum wavelength must be positive."
      - id: n_positivo_check
        when: "n <= 0"
        message:
          es: "El indice de refraccion debe ser positivo para calcular la longitud de onda en el medio."
          en: "The refractive index must be positive to compute the wavelength in the medium."
    coherence_checks:
      - id: lambda_mayor_lambda0
        when: "lambda_medio > lambda_0"
        message:
          es: "La longitud de onda en el medio no puede superar la del vacio en medios convencionales."
          en: "The wavelength in the medium cannot exceed the vacuum wavelength in conventional media."
    graph_implications:
      - id: onda_mas_corta
        description:
          es: "En el grafico la onda dentro del medio aparece comprimida respecto a la del vacio."
          en: "In the graph the wave inside the medium appears compressed compared to vacuum."
    pedagogical_triggers:
      - id: frecuencia_cambia_error
        detect_when: "true"
        message:
          es: "La frecuencia no cambia al pasar de un medio a otro; lo que cambia es la longitud de onda y la velocidad."
          en: "The frequency does not change when passing from one medium to another; what changes is the wavelength and the speed."

  - id: snell_refraccion
    title:
      es: Ley de Snell para interfaz aire-medio
      en: Snell's law for an air-medium interface
    equation: "sin(theta_1) = n * sin(theta_2)"
    latex: "\\\\sin\\\\theta_1 = n \\\\sin\\\\theta_2 % theta_1 theta_2 n"
    rearrangements:
      - target: theta_2
        equation: "theta_2 = arcsin(sin(theta_1) / n)"
        latex: "\\\\theta_2 = \\\\arcsin\\\\!\\\\left(\\\\frac{\\\\sin\\\\theta_1}{n}\\\\right) % theta_1 theta_2 n"
      - target: theta_1
        equation: "theta_1 = arcsin(n * sin(theta_2))"
        latex: "\\\\theta_1 = \\\\arcsin\\\\!\\\\left(n \\\\sin\\\\theta_2\\\\right) % theta_1 theta_2 n"
    category: fundamental
    relation_type: geometric_interpretation
    physical_meaning:
      es: "La ley de Snell conecta los indices de refraccion de dos medios con los angulos de incidencia y refraccion. Permite calcular la desviacion del rayo al cruzar una interfaz."
      en: "Snell's law connects the refractive indices of two media with the angles of incidence and refraction. It allows calculating the deviation of the ray when crossing an interface."
    constraints:
      - id: angulos_validos
        description:
          es: "Ambos angulos deben estar entre 0 y 90 grados."
          en: "Both angles must be between 0 and 90 degrees."
    validity:
      es: "Valido para interfaz plana entre dos medios isotropos."
      en: "Valid for a flat interface between two isotropic media."
    dimension_check: "[1] (adimensional a ambos lados)"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - calculo del angulo de refraccion
      - diseno de lentes y prismas
    variables:
      - n
      - theta_1
      - theta_2
    interpretation_tags:
      - desviacion_angular
      - interfaz_optica
    result_semantics:
      target: theta_2
      kind: angle
      sign_meaning:
        es: "Siempre positivo, medido desde la normal."
        en: "Always positive, measured from the normal."
      absolute_value_meaning:
        es: "Indica la desviacion del rayo refractado respecto a la normal en el segundo medio."
        en: "Indicates the deviation of the refracted ray from the normal in the second medium."
    domain_checks:
      - id: sin_mayor_uno
        when: "sin(theta_1) * n > n"
        message:
          es: "El producto supera 1, lo que implica reflexion total interna."
          en: "The product exceeds 1, which implies total internal reflection."
    coherence_checks:
      - id: angulo_refraccion_grande
        when: "theta_2 > 1.4"
        message:
          es: "Un angulo de refraccion cercano a 90 grados indica proximidad al angulo critico."
          en: "An angle of refraction close to 90 degrees indicates proximity to the critical angle."
    graph_implications:
      - id: rayo_desviado
        description:
          es: "El grafico muestra el rayo desviandose al cruzar la interfaz; mayor diferencia de indices produce mayor desviacion."
          en: "The graph shows the ray deviating as it crosses the interface; a larger index difference produces greater deviation."
    pedagogical_triggers:
      - id: confundir_angulos
        detect_when: "true"
        message:
          es: "Recuerda medir los angulos desde la normal a la superficie, no desde la superficie misma."
          en: "Remember to measure angles from the normal to the surface, not from the surface itself."
`;export{e as default};
