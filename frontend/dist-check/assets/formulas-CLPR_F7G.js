const e=`formulas:
  - id: ley_snell
    title:
      es: Ley de Snell
      en: "Snell's law"
    equation: "n1 * sin(theta_1) = n2 * sin(theta_2)"
    latex: "n_1 \\\\sin\\\\theta_1 = n_2 \\\\sin\\\\theta_2 % n1 n2 theta_1 theta_2"
    rearrangements:
      - target: theta_2
        equation: "theta_2 = arcsin(n1 * sin(theta_1) / n2)"
        latex: "\\\\theta_2 = \\\\arcsin\\\\!\\\\left(\\\\frac{n_1 \\\\sin\\\\theta_1}{n_2}\\\\right) % n1 n2 theta_1 theta_2"
      - target: theta_1
        equation: "theta_1 = arcsin(n2 * sin(theta_2) / n1)"
        latex: "\\\\theta_1 = \\\\arcsin\\\\!\\\\left(\\\\frac{n_2 \\\\sin\\\\theta_2}{n_1}\\\\right) % n1 n2 theta_1 theta_2"
      - target: n1
        equation: "n1 = n2 * sin(theta_2) / sin(theta_1)"
        latex: "n_1 = \\\\frac{n_2 \\\\sin\\\\theta_2}{\\\\sin\\\\theta_1} % n1 n2 theta_1 theta_2"
      - target: n2
        equation: "n2 = n1 * sin(theta_1) / sin(theta_2)"
        latex: "n_2 = \\\\frac{n_1 \\\\sin\\\\theta_1}{\\\\sin\\\\theta_2} % n1 n2 theta_1 theta_2"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La componente tangencial del vector de onda se conserva al cruzar una interfaz plana entre dos medios, lo que impone una relacion fija entre los angulos y los indices de refraccion."
      en: "The tangential component of the wave vector is conserved when crossing a flat interface between two media, imposing a fixed relation between the angles and the refractive indices."
    constraints:
      - "theta_1 >= 0"
      - "theta_1 <= pi/2"
      - "n1 > 0"
      - "n2 > 0"
      - "n1 * sin(theta_1) / n2 <= 1"
    validity:
      es: "Valida para interfaces planas entre medios isotropos y homogeneos, en el regimen de optica geometrica donde la longitud de onda es mucho menor que las dimensiones de la interfaz."
      en: "Valid for flat interfaces between isotropic homogeneous media, in the geometrical optics regime where the wavelength is much smaller than the interface dimensions."
    dimension_check: "adimensional en ambos lados (seno de angulo)"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - diseno de lentes
      - fibras opticas
      - prismas
    interpretation_tags:
      - direccion_refractada
      - desviacion_angular
      - condicion_reflexion_total
    result_semantics:
      target: theta_2
      kind: angle
      sign_meaning:
        es: "El angulo refractado es positivo y menor que pi/2 cuando existe rayo refractado."
        en: "The refracted angle is positive and less than pi/2 when a refracted ray exists."
      absolute_value_meaning:
        es: "Magnitud de la desviacion del rayo respecto a la normal en el segundo medio."
        en: "Magnitude of the ray deviation from the normal in the second medium."
    domain_checks:
      - condition: "n1 * sin(theta_1) / n2 > 1"
        message:
          es: "No existe rayo refractado; se produce reflexion total interna."
          en: "No refracted ray exists; total internal reflection occurs."
    coherence_checks:
      - condition: "theta_2 > theta_1 and n2 > n1"
        message:
          es: "Si n2 es mayor que n1, el angulo refractado debe ser menor que el incidente, no mayor."
          en: "If n2 is greater than n1, the refracted angle must be smaller than the incident one, not larger."
    graph_implications:
      - "theta_2 crece monotonamente con theta_1 hasta el angulo critico"
      - "pendiente mayor cuando n1/n2 es grande"
    pedagogical_triggers:
      - trigger: "theta_2 > pi/2"
        message:
          es: "El resultado indica reflexion total; el rayo refractado no existe."
          en: "The result indicates total reflection; the refracted ray does not exist."

  - id: angulo_critico
    title:
      es: "Angulo critico para reflexion total interna"
      en: Critical angle for total internal reflection
    equation: "theta_c = arcsin(n2 / n1)"
    latex: "\\\\theta_c = \\\\arcsin\\\\!\\\\left(\\\\frac{n_2}{n_1}\\\\right) % n1 n2 theta_c"
    rearrangements:
      - target: n1
        equation: "n1 = n2 / sin(theta_c)"
        latex: "n_1 = \\\\frac{n_2}{\\\\sin\\\\theta_c} % n1 n2 theta_c"
      - target: n2
        equation: "n2 = n1 * sin(theta_c)"
        latex: "n_2 = n_1 \\\\sin\\\\theta_c % n1 n2 theta_c"
      - target: theta_c
        equation: "theta_c = arcsin(n2 / n1)"
        latex: "\\\\theta_c = \\\\arcsin\\\\!\\\\left(\\\\frac{n_2}{n_1}\\\\right) % n1 n2 theta_c"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "Angulo de incidencia para el cual el seno del angulo refractado alcanza la unidad; por encima de este valor toda la luz se refleja."
      en: "Angle of incidence for which the sine of the refracted angle reaches unity; above this value all light is reflected."
    constraints:
      - "n1 > n2"
      - "n2 > 0"
    validity:
      es: "Solo existe cuando la luz pasa de un medio mas denso a uno menos denso (n1 mayor que n2). La interfaz debe ser plana y los medios homogeneos."
      en: "Exists only when light passes from a denser medium to a less dense one (n1 greater than n2). The interface must be flat and the media homogeneous."
    dimension_check: "adimensional; arcsin de cociente adimensional produce angulo"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - fibras opticas
      - prismas de reflexion total
      - guias de onda
    interpretation_tags:
      - umbral_reflexion_total
      - confinamiento_optico
    result_semantics:
      target: theta_c
      kind: angle
      sign_meaning:
        es: "El angulo critico es siempre positivo."
        en: "The critical angle is always positive."
      absolute_value_meaning:
        es: "Valor umbral por encima del cual el rayo incidente se refleja totalmente."
        en: "Threshold value above which the incident ray is totally reflected."
    domain_checks:
      - condition: "n1 <= n2"
        message:
          es: "No existe angulo critico cuando n1 es menor o igual que n2."
          en: "No critical angle exists when n1 is less than or equal to n2."
    coherence_checks:
      - condition: "theta_c >= pi/2"
        message:
          es: "Un angulo critico de 90 grados o mas indica indices casi iguales; verificar valores."
          en: "A critical angle of 90 degrees or more indicates nearly equal indices; check values."
    graph_implications:
      - "linea horizontal de umbral en grafica theta_2 vs theta_1"
      - "zona sombreada de reflexion total a la derecha del angulo critico"
    pedagogical_triggers:
      - trigger: "n1 < n2"
        message:
          es: "Intentando calcular angulo critico con n1 menor que n2; no existe reflexion total en esta configuracion."
          en: "Attempting to calculate critical angle with n1 less than n2; total reflection does not exist in this configuration."
`;export{e as default};
