const e=`formulas:
  - id: velocidad_medio
    title:
      es: Velocidad de la onda en el medio material
      en: Wave speed in material medium
    equation: "v_medio = c_vacio / n_indice"
    latex: "v = \\\\frac{c}{n}"
    rearrangements:
      - target: v_medio
        equation: "v_medio = c_vacio / n_indice"
        latex: "v = \\\\frac{c}{n}"
      - target: n_indice
        equation: "n_indice = c_vacio / v_medio"
        latex: "n = \\\\frac{c}{v}"
      - target: c_vacio
        equation: "c_vacio = v_medio * n_indice"
        latex: "c = v \\\\cdot n"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: Relaciona la velocidad de la luz en un medio con la velocidad en vacio mediante el indice de refraccion. Un medio con mayor indice ralentiza mas la luz.
      en: Relates the speed of light in a medium to the speed in vacuum through the refractive index. A medium with higher index slows down light more.
    constraints:
      - El medio debe ser transparente y homogeneo
      - La onda debe ser electromagnetica
      - El indice de refraccion debe ser mayor o igual a 1
    validity:
      es: Valida para medios lineales, isotropos, no dispersivos y no magneticos. El indice puede variar con la temperatura y la presion.
      en: Valid for linear, isotropic, non-dispersive, non-magnetic media. The index may vary with temperature and pressure.
    dimension_check: "[L T⁻¹] = [L T⁻¹] / [1] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Calculo de velocidad en diferentes medios
      - Diseno de sistemas opticos
      - Analisis de retardos de propagacion
    interpretation_tags:
      - velocidad
      - refraccion
      - medio material
    result_semantics:
      target: v_medio
      kind: velocity_in_medium
      sign_meaning:
        es: Siempre positivo, representa la magnitud de la velocidad reducida
        en: Always positive, represents the magnitude of reduced velocity
      absolute_value_meaning:
        es: Valor menor que c que indica cuanto se ha ralentizado la onda
        en: Value smaller than c indicating how much the wave has slowed down
    domain_checks:
      - condition: "n_indice >= 1"
        message:
          es: El indice de refraccion debe ser al menos 1
          en: Refractive index must be at least 1
      - condition: "v_medio <= c_vacio"
        message:
          es: La velocidad en el medio no puede superar la velocidad en vacio
          en: Speed in medium cannot exceed vacuum speed
    coherence_checks:
      - check: "v_medio > 0"
        description:
          es: La velocidad debe ser positiva
          en: Speed must be positive
      - check: "c_vacio / n_indice < c_vacio"
        description:
          es: Para n > 1, la velocidad en medio debe ser menor que en vacio
          en: For n > 1, medium speed must be less than vacuum speed
    graph_implications:
      - plot_type: line
        x_axis: n_indice
        y_axis: v_medio
        description:
          es: Grafica hiperbolica decreciente mostrando como la velocidad disminuye al aumentar el indice
          en: Decreasing hyperbolic plot showing how speed decreases as index increases
    pedagogical_triggers:
      - error_type: velocidad_igual_c
        trigger: "v_medio == c_vacio"
        message:
          es: La velocidad en el medio es igual a c. Verifica si n = 1 (vacio) o si hay un error.
          en: Medium speed equals c. Check if n = 1 (vacuum) or if there is an error.
      - error_type: indice_unidad
        trigger: "n_indice == 1"
        message:
          es: El indice es 1, corresponde al vacio. En medios materiales n > 1.
          en: Index is 1, corresponds to vacuum. In material media n > 1.

  - id: indice_refraccion
    title:
      es: Definicion del indice de refraccion
      en: Definition of refractive index
    equation: "n_indice = c_vacio / v_medio"
    latex: "n = \\\\frac{c}{v}"
    rearrangements:
      - target: n_indice
        equation: "n_indice = c_vacio / v_medio"
        latex: "n = \\\\frac{c}{v}"
      - target: v_medio
        equation: "v_medio = c_vacio / n_indice"
        latex: "v = \\\\frac{c}{n}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: El indice de refraccion cuantifica cuantas veces es menor la velocidad de la luz en el medio comparada con el vacio.
      en: The refractive index quantifies how many times smaller the speed of light is in the medium compared to vacuum.
    constraints:
      - El indice debe ser mayor o igual a 1
      - La velocidad en el medio debe ser menor o igual que c
    validity:
      es: El indice es una propiedad del material y puede depender de la longitud de onda (dispersion) y las condiciones termicas.
      en: The index is a material property and may depend on wavelength (dispersion) and thermal conditions.
    dimension_check: "[1] = [L T⁻¹] / [L T⁻¹] ✓ adimensional"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Ley de Snell
      - Diseno de lentes
      - Fibra optica
    interpretation_tags:
      - indice
      - refraccion
      - propiedad material
    result_semantics:
      target: n_indice
      kind: refractive_index
      sign_meaning:
        es: Siempre positivo, valores mayores indican medios mas refringentes
        en: Always positive, higher values indicate more refractive media
      absolute_value_meaning:
        es: Factor de ralentizacion respecto al vacio
        en: Slowdown factor relative to vacuum
    domain_checks:
      - condition: "n_indice >= 1"
        message:
          es: El indice debe ser al menos 1
          en: Index must be at least 1
      - condition: "n_indice < 3"
        message:
          es: Valores muy altos pueden indicar error o materiales exoticos
          en: Very high values may indicate error or exotic materials
    coherence_checks:
      - check: "n_indice >= 1"
        description:
          es: El indice nunca puede ser menor que 1
          en: Index can never be less than 1
    graph_implications:
      - plot_type: bar_chart
        x_axis: material_type
        y_axis: n_indice
        description:
          es: Comparacion de indices entre diferentes materiales
          en: Comparison of indices among different materials
    pedagogical_triggers:
      - error_type: indice_menor_unidad
        trigger: "n_indice < 1"
        message:
          es: El indice no puede ser menor que 1. Esto violaria el principio de que c es la velocidad maxima.
          en: Index cannot be less than 1. This would violate the principle that c is the maximum speed.
      - error_type: indice_muy_alto
        trigger: "n_indice > 4"
        message:
          es: El indice parece muy alto. Los medios transparentes comunes tienen n entre 1 y 2.5.
          en: Index seems very high. Common transparent media have n between 1 and 2.5.

  - id: longitud_onda_medio
    title:
      es: Longitud de onda en el medio
      en: Wavelength in the medium
    equation: "lambda_medio = lambda_vacio / n_indice"
    latex: "\\\\lambda = \\\\frac{\\\\lambda_0}{n}"
    rearrangements:
      - target: lambda_medio
        equation: "lambda_medio = lambda_vacio / n_indice"
        latex: "\\\\lambda = \\\\frac{\\\\lambda_0}{n}"
      - target: lambda_vacio
        equation: "lambda_vacio = lambda_medio * n_indice"
        latex: "\\\\lambda_0 = \\\\lambda \\\\cdot n"
    category: derived
    relation_type: geometric_interpretation
    physical_meaning:
      es: La longitud de onda en un medio se reduce proporcionalmente al indice de refraccion, manteniendose constante la frecuencia.
      en: The wavelength in a medium is reduced proportionally to the refractive index, while frequency remains constant.
    constraints:
      - La frecuencia debe mantenerse constante
      - El medio debe ser lineal y no dispersivo
    validity:
      es: Valida cuando la frecuencia de la fuente se mantiene al cambiar de medio. En medios dispersivos el indice varia con la frecuencia.
      en: Valid when the source frequency is maintained when changing media. In dispersive media the index varies with frequency.
    dimension_check: "[L] = [L] / [1] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Interferencia en peliculas delgadas
      - Diseno de recubrimientos antirreflectantes
      - Espectroscopia
    interpretation_tags:
      - longitud de onda
      - escala espacial
      - interferencia
    result_semantics:
      target: lambda_medio
      kind: wavelength_scaled
      sign_meaning:
        es: Siempre positiva, representa la escala espacial de la oscilacion
        en: Always positive, represents the spatial scale of oscillation
      absolute_value_meaning:
        es: Distancia entre maximos consecutivos en el medio, menor que en vacio
        en: Distance between consecutive maxima in the medium, shorter than in vacuum
    domain_checks:
      - condition: "lambda_medio > 0"
        message:
          es: La longitud de onda debe ser positiva
          en: Wavelength must be positive
      - condition: "lambda_medio < lambda_vacio"
        message:
          es: En medios con n > 1, la longitud de onda debe ser menor que en vacio
          en: In media with n > 1, wavelength must be shorter than in vacuum
    coherence_checks:
      - check: "lambda_medio * n_indice == lambda_vacio"
        description:
          es: La longitud de onda en vacio debe ser n veces la longitud en el medio
          en: Vacuum wavelength must be n times the wavelength in the medium
    graph_implications:
      - plot_type: line
        x_axis: n_indice
        y_axis: lambda_medio
        description:
          es: Curva hiperbolica decreciente mostrando reduccion de longitud de onda
          en: Decreasing hyperbolic curve showing wavelength reduction
    pedagogical_triggers:
      - error_type: longitud_igual
        trigger: "lambda_medio == lambda_vacio"
        message:
          es: La longitud de onda no cambio. Esto solo ocurre si n = 1 (vacio).
          en: Wavelength did not change. This only occurs if n = 1 (vacuum).

  - id: velocidad_onda_frecuencia
    title:
      es: Relacion fundamental onda
      en: Fundamental wave relation
    equation: "v_medio = lambda_medio * frecuencia_onda"
    latex: "v = \\\\lambda \\\\cdot f"
    rearrangements:
      - target: v_medio
        equation: "v_medio = lambda_medio * frecuencia_onda"
        latex: "v = \\\\lambda \\\\cdot f"
      - target: lambda_medio
        equation: "lambda_medio = v_medio / frecuencia_onda"
        latex: "\\\\lambda = \\\\frac{v}{f}"
      - target: frecuencia_onda
        equation: "frecuencia_onda = v_medio / lambda_medio"
        latex: "f = \\\\frac{v}{\\\\lambda}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: Relaciona las tres magnitudes fundamentales de una onda. La velocidad es el producto de la longitud de onda por la frecuencia. Al cambiar de medio, la frecuencia se conserva y la longitud de onda se ajusta para mantener esta relacion.
      en: Relates the three fundamental magnitudes of a wave. Velocity is the product of wavelength times frequency. When changing media, frequency is conserved and wavelength adjusts to maintain this relationship.
    constraints:
      - La onda debe ser monocromatica
      - El medio debe ser lineal
    validity:
      es: Valida para ondas armonicas en medios lineales. La frecuencia es invariante al cambiar de medio, lo que fuerza el cambio de longitud de onda.
      en: Valid for harmonic waves in linear media. Frequency is invariant when changing media, which forces the wavelength to change.
    dimension_check: "[L T⁻¹] = [L] · [T⁻¹] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Conversion entre velocidad y longitud de onda
      - Verificacion de consistencia de parametros de onda
      - Diseno de sistemas resonantes
    interpretation_tags:
      - onda armonica
      - relacion fundamental
      - conservacion de frecuencia
    result_semantics:
      target: v_medio
      kind: wave_velocity
      sign_meaning:
        es: Siempre positivo, representa la rapidez de propagacion
        en: Always positive, represents propagation speed
      absolute_value_meaning:
        es: Magnitud de la velocidad de fase de la onda
        en: Magnitude of the wave phase velocity
    domain_checks:
      - condition: "frecuencia_onda > 0"
        message:
          es: La frecuencia debe ser positiva
          en: Frequency must be positive
      - condition: "lambda_medio > 0"
        message:
          es: La longitud de onda debe ser positiva
          en: Wavelength must be positive
    coherence_checks:
      - check: "v_medio / lambda_medio == frecuencia_onda"
        description:
          es: La frecuencia calculada debe coincidir con la de la fuente
          en: Calculated frequency must match the source frequency
    graph_implications:
      - plot_type: 3d_surface
        x_axis: lambda_medio
        y_axis: frecuencia_onda
        z_axis: v_medio
        description:
          es: Plano que muestra la relacion lineal entre las tres variables
          en: Plane showing the linear relationship between the three variables
    pedagogical_triggers:
      - error_type: frecuencia_cambia
        trigger: "frecuencia_onda_varia"
        message:
          es: La frecuencia no debe cambiar al pasar de medio. Verifica que uses la misma f.
          en: Frequency should not change when passing through media. Verify you use the same f.

ui:
  default_formula: velocidad_medio
  calculator_enabled: true
  graph_binding: true
  interpretation_binding: true
`;export{e as default};
