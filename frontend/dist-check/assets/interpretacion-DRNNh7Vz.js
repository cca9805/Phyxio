const e=`version: "1.0"
id: interpretacion-indice-de-refraccion
leaf_id: indice-de-refraccion

nombre:
  es: "Interpretacion del indice de refraccion"
  en: "Refractive index interpretation"

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: optica
  parent_id: refraccion
  ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion/indice-de-refraccion

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: "Interpretacion"
    en: "Interpretation"
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority:
      - summary
      - likely_errors

dependencies:
  formulas:
    - definicion_indice
    - longitud_onda_medio
    - snell_refraccion
  magnitudes:
    - n
    - c
    - v_medio
    - lambda_0
    - lambda_medio
    - theta_1
    - theta_2

global_context:
  physical_domain:
    es: "Optica geometrica y propagacion de la luz en medios materiales."
    en: "Geometrical optics and light propagation in material media."
  axis_convention:
    es: "Normal a la superficie apuntando hacia el medio del rayo incidente."
    en: "Normal to the surface pointing towards the incident-ray medium."
  standard_assumptions:
    - "Medios isotropos y homogeneos"
    - "Interfaz plana"
    - "Luz monocromatica"
  standard_warnings:
    - "El modelo falla cerca del angulo critico y en medios anisotropos."

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: false
    order: 5
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:
  n:
    magnitude_type: ratio
    semantic_role:
      es: "Factor de frenado de la luz en el medio."
      en: "Light-slowing factor in the medium."
    summary_rules:
      - id: n_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n]] indica cuantas veces se reduce la velocidad de la luz respecto al vacio. Un valor de [[n]] cercano a 1 describe un medio que apenas frena la luz; valores mayores indican mayor interaccion luz-materia."
          en: "[[n]] indicates how many times the speed of light is reduced compared to vacuum. A value of [[n]] close to 1 describes a medium that barely slows light; higher values indicate greater light-matter interaction."
      - id: n_summary_alto
        when: "n > 2"
        status: ok
        text:
          es: "[[n]] es elevado, lo que indica un medio muy denso opticamente; la luz se frena considerablemente y la desviacion angular en la interfaz es grande."
          en: "[[n]] is high, indicating an optically very dense medium; light slows considerably and the angular deviation at the interface is large."
    physical_reading_rules:
      - id: n_reading_default
        when: "true"
        status: ok
        text:
          es: "El indice [[n]] depende de la estructura electronica del material. A mayor polarizabilidad molecular, mayor indice y mayor frenado de la onda luminosa."
          en: "The index [[n]] depends on the electronic structure of the material. Greater molecular polarisability leads to a higher index and greater slowing of the light wave."
    coherence_rules:
      - id: n_coherence_menor_uno
        when: "n < 1"
        status: warning
        text:
          es: "[[n]] menor que 1 solo es fisicamente coherente en metamateriales o para velocidad de fase en ciertas bandas. Verifica los datos de entrada."
          en: "[[n]] less than 1 is only physically coherent in metamaterials or for phase velocity in certain bands. Check the input data."
      - id: n_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[n]] esta dentro del rango habitual para materiales opticos convencionales."
          en: "The value of [[n]] is within the usual range for conventional optical materials."
    model_validity_rules:
      - id: n_validity_dispersivo
        when: "true"
        status: ok
        text:
          es: "El modelo de indice constante es valido cuando la banda espectral es estrecha. Si la fuente es policromatica, el indice depende de la longitud de onda y el modelo requiere la curva de dispersion."
          en: "The constant-index model is valid when the spectral band is narrow. If the source is polychromatic, the index depends on wavelength and the model requires the dispersion curve."
    graph_rules:
      - id: n_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, un mayor [[n]] produce mayor curvatura del rayo al cruzar la interfaz."
          en: "In the graph, a higher [[n]] produces greater curvature of the ray when crossing the interface."
    likely_errors:
      - id: n_error_densidad
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asociar el indice de refraccion con la densidad mecanica del medio. El indice depende de la respuesta electromagnetica, no de la masa por unidad de volumen."
          en: "Common error: associating the refractive index with the mechanical density of the medium. The index depends on the electromagnetic response, not on mass per unit volume."
    next_step_rules:
      - id: n_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[n]] conocido, calcula la velocidad de la luz en el medio o aplica la ley de Snell para obtener el angulo de refraccion."
          en: "With [[n]] known, calculate the speed of light in the medium or apply Snell's law to obtain the angle of refraction."

  v_medio:
    magnitude_type: speed
    semantic_role:
      es: "Velocidad de propagacion de la luz dentro del medio."
      en: "Speed of light propagation inside the medium."
    summary_rules:
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_medio]] indica la rapidez con que se propaga la luz dentro del medio. Un valor muy inferior a [[c]] describe un material opticamente denso."
          en: "[[v_medio]] indicates the speed at which light propagates inside the medium. A value much lower than [[c]] describes an optically dense material."
    physical_reading_rules:
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "La velocidad [[v_medio]] depende inversamente de [[n]]: cuanto mayor es el indice, menor es la velocidad. La frecuencia de la onda permanece constante."
          en: "The speed [[v_medio]] depends inversely on [[n]]: the higher the index, the lower the speed. The wave frequency remains constant."
    coherence_rules:
      - id: v_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[v_medio]] es coherente si resulta inferior a [[c]]."
          en: "The value of [[v_medio]] is coherent if it is less than [[c]]."
      - id: v_coherence_mayor_c
        when: "v_medio > c"
        status: error
        text:
          es: "[[v_medio]] supera [[c]], lo cual es imposible en medios convencionales. Revisa el indice utilizado."
          en: "[[v_medio]] exceeds [[c]], which is impossible in conventional media. Check the index used."
    model_validity_rules:
      - id: v_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es valido mientras el medio sea transparente y homogeneo. En medios absorbentes la velocidad de fase pierde significado directo."
          en: "The model is valid as long as the medium is transparent and homogeneous. In absorbing media the phase speed loses direct meaning."
    graph_rules:
      - id: v_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico la onda aparece mas lenta y con longitud de onda mas corta dentro del medio."
          en: "In the graph the wave appears slower and with shorter wavelength inside the medium."
    likely_errors:
      - id: v_error_constante
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que la velocidad de la luz es siempre la misma en todos los medios. Solo es constante en el vacio."
          en: "Common error: believing the speed of light is always the same in all media. It is only constant in vacuum."
    next_step_rules:
      - id: v_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_medio]] conocida, puedes calcular [[lambda_medio]] multiplicando por el periodo de la onda, o comparar con otros medios."
          en: "With [[v_medio]] known, you can calculate [[lambda_medio]] by multiplying by the wave period, or compare with other media."

  c:
    magnitude_type: speed
    semantic_role:
      es: "Velocidad de referencia universal."
      en: "Universal reference speed."
    summary_rules:
      - id: c_summary_default
        when: "true"
        status: ok
        text:
          es: "[[c]] indica la velocidad maxima de propagacion de la luz. Sirve como referencia para definir [[n]]."
          en: "[[c]] indicates the maximum propagation speed of light. It serves as the reference for defining [[n]]."
    physical_reading_rules:
      - id: c_reading_default
        when: "true"
        status: ok
        text:
          es: "[[c]] es una constante fundamental. Cualquier velocidad en un medio convencional resulta menor que [[c]]."
          en: "[[c]] is a fundamental constant. Any speed in a conventional medium is less than [[c]]."
    coherence_rules:
      - id: c_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[c]] es fijo por definicion; no requiere verificacion de rango."
          en: "The value of [[c]] is fixed by definition; no range check is required."
    model_validity_rules:
      - id: c_validity_default
        when: "true"
        status: ok
        text:
          es: "[[c]] es valido en todo el dominio de la optica clasica."
          en: "[[c]] is valid throughout the domain of classical optics."
    graph_rules:
      - id: c_graph_default
        when: "true"
        status: ok
        text:
          es: "[[c]] actua como la velocidad del rayo en el vacio, representada sin frenado en el grafico."
          en: "[[c]] acts as the ray speed in vacuum, represented without slowing in the graph."
    likely_errors:
      - id: c_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar un valor incorrecto de [[c]] al sustituir. Recuerda que el valor exacto es 299 792 458 m/s."
          en: "Common error: using an incorrect value of [[c]] when substituting. Remember the exact value is 299 792 458 m/s."
    next_step_rules:
      - id: c_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[c]] y [[n]], calcula [[v_medio]] directamente."
          en: "With [[c]] and [[n]], calculate [[v_medio]] directly."

  lambda_medio:
    magnitude_type: length
    semantic_role:
      es: "Longitud de onda comprimida dentro del medio."
      en: "Compressed wavelength inside the medium."
    summary_rules:
      - id: lm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_medio]] indica la distancia entre crestas consecutivas de la onda dentro del medio. Su valor disminuye respecto a [[lambda_0]] proporcionalmente al indice [[n]]."
          en: "[[lambda_medio]] indicates the distance between consecutive wave crests inside the medium. Its value decreases relative to [[lambda_0]] proportionally to the index [[n]]."
    physical_reading_rules:
      - id: lm_reading_default
        when: "true"
        status: ok
        text:
          es: "La longitud de onda depende del medio porque la velocidad disminuye mientras la frecuencia se conserva. El acortamiento es directamente proporcional a [[n]]."
          en: "The wavelength depends on the medium because speed decreases while frequency is conserved. The shortening is directly proportional to [[n]]."
    coherence_rules:
      - id: lm_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_medio]] debe ser menor que [[lambda_0]] en medios convencionales."
          en: "[[lambda_medio]] must be less than [[lambda_0]] in conventional media."
    model_validity_rules:
      - id: lm_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para ondas monocromaticas en medios lineales. En fuentes policromaticas, cada componente tiene su propia longitud de onda en el medio."
          en: "Valid for monochromatic waves in linear media. In polychromatic sources, each component has its own wavelength in the medium."
    graph_rules:
      - id: lm_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico la onda dentro del medio muestra crestas mas cercanas entre si."
          en: "In the graph the wave inside the medium shows crests closer together."
    likely_errors:
      - id: lm_error_frecuencia
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que la frecuencia de la onda cambia al entrar en un nuevo medio. Solo cambian la longitud de onda y la velocidad."
          en: "Common error: believing the wave frequency changes upon entering a new medium. Only the wavelength and speed change."
    next_step_rules:
      - id: lm_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[lambda_medio]] puedes determinar el patron de interferencia o difraccion dentro del material."
          en: "With [[lambda_medio]] you can determine the interference or diffraction pattern inside the material."

  lambda_0:
    magnitude_type: length
    semantic_role:
      es: "Longitud de onda de referencia en el vacio."
      en: "Reference wavelength in vacuum."
    summary_rules:
      - id: l0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_0]] indica la longitud de onda de la luz medida en el vacio. Es la referencia para calcular [[lambda_medio]]."
          en: "[[lambda_0]] indicates the wavelength of light measured in vacuum. It is the reference for calculating [[lambda_medio]]."
    physical_reading_rules:
      - id: l0_reading_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_0]] depende de la fuente de luz y determina el color percibido. No cambia al cruzar interfaces."
          en: "[[lambda_0]] depends on the light source and determines the perceived colour. It does not change when crossing interfaces."
    coherence_rules:
      - id: l0_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[lambda_0]] debe estar en el rango del espectro visible o de la banda utilizada."
          en: "The value of [[lambda_0]] must be within the visible spectrum range or the band used."
    model_validity_rules:
      - id: l0_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido mientras la fuente sea monocromatica o cuasimonocromatica."
          en: "Valid as long as the source is monochromatic or quasi-monochromatic."
    graph_rules:
      - id: l0_graph_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_0]] define la escala de la onda en el vacio en el grafico."
          en: "[[lambda_0]] defines the scale of the wave in vacuum in the graph."
    likely_errors:
      - id: l0_error_medio
        when: "true"
        status: warning
        text:
          es: "Error frecuente: introducir la longitud de onda medida dentro del medio como si fuera la del vacio."
          en: "Common error: entering the wavelength measured inside the medium as if it were the vacuum wavelength."
    next_step_rules:
      - id: l0_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[lambda_0]] y [[n]], calcula [[lambda_medio]] directamente."
          en: "With [[lambda_0]] and [[n]], calculate [[lambda_medio]] directly."

  theta_1:
    magnitude_type: angle
    semantic_role:
      es: "Angulo de incidencia del rayo sobre la interfaz."
      en: "Angle of incidence of the ray on the interface."
    summary_rules:
      - id: t1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[theta_1]] indica el angulo con que el rayo llega a la interfaz. Junto con [[n]], determina completamente la desviacion del rayo refractado."
          en: "[[theta_1]] indicates the angle at which the ray reaches the interface. Together with [[n]], it completely determines the deviation of the refracted ray."
    physical_reading_rules:
      - id: t1_reading_default
        when: "true"
        status: ok
        text:
          es: "[[theta_1]] se mide desde la normal a la superficie. Angulos mayores producen mayor desviacion o, eventualmente, reflexion total."
          en: "[[theta_1]] is measured from the normal to the surface. Larger angles produce greater deviation or, eventually, total reflection."
    coherence_rules:
      - id: t1_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[theta_1]] debe estar entre 0 y 90 grados."
          en: "[[theta_1]] must be between 0 and 90 degrees."
    model_validity_rules:
      - id: t1_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para incidencia sobre superficies planas donde la normal esta bien definida."
          en: "Valid for incidence on flat surfaces where the normal is well defined."
    graph_rules:
      - id: t1_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[theta_1]] se muestra como el angulo entre el rayo entrante y la linea normal punteada."
          en: "In the graph, [[theta_1]] is shown as the angle between the incoming ray and the dotted normal line."
    likely_errors:
      - id: t1_error_superficie
        when: "true"
        status: warning
        text:
          es: "Error frecuente: medir [[theta_1]] desde la superficie en lugar de la normal, obteniendo el complementario."
          en: "Common error: measuring [[theta_1]] from the surface instead of the normal, obtaining the complement."
    next_step_rules:
      - id: t1_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[theta_1]] y los indices de ambos medios, aplica la ley de Snell para obtener [[theta_2]]."
          en: "With [[theta_1]] and the indices of both media, apply Snell's law to obtain [[theta_2]]."

  theta_2:
    magnitude_type: angle
    semantic_role:
      es: "Angulo de refraccion del rayo en el segundo medio."
      en: "Angle of refraction of the ray in the second medium."
    summary_rules:
      - id: t2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[theta_2]] indica cuanto se desvio el rayo al entrar en el segundo medio. Depende del cociente de indices y del angulo de incidencia."
          en: "[[theta_2]] indicates how much the ray deviated upon entering the second medium. It depends on the ratio of indices and the angle of incidence."
    physical_reading_rules:
      - id: t2_reading_default
        when: "true"
        status: ok
        text:
          es: "Si el segundo medio tiene mayor indice, [[theta_2]] disminuye respecto a [[theta_1]] y el rayo se acerca a la normal."
          en: "If the second medium has a higher index, [[theta_2]] decreases relative to [[theta_1]] and the ray bends towards the normal."
    coherence_rules:
      - id: t2_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[theta_2]] debe ser menor que 90 grados para que exista rayo refractado."
          en: "[[theta_2]] must be less than 90 degrees for a refracted ray to exist."
    model_validity_rules:
      - id: t2_validity_default
        when: "true"
        status: ok
        text:
          es: "Si el calculo da un angulo que no tiene solucion real, ocurre reflexion total interna."
          en: "If the calculation yields an angle with no real solution, total internal reflection occurs."
    graph_rules:
      - id: t2_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[theta_2]] se muestra como el angulo entre el rayo refractado y la normal al otro lado de la interfaz."
          en: "In the graph, [[theta_2]] is shown as the angle between the refracted ray and the normal on the other side of the interface."
    likely_errors:
      - id: t2_error_reflexion
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar que cuando el angulo de incidencia supera el angulo critico, no existe rayo refractado."
          en: "Common error: forgetting that when the angle of incidence exceeds the critical angle, no refracted ray exists."
    next_step_rules:
      - id: t2_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[theta_2]], analiza la trayectoria del rayo en el segundo medio o comprueba si se acerca al angulo critico."
          en: "With [[theta_2]], analyse the ray trajectory in the second medium or check whether it approaches the critical angle."

cross_checks:
  - id: n_vs_v
    description:
      es: "El producto n por v_medio debe dar c."
      en: "The product n times v_medio must give c."
  - id: lambda_consistencia
    description:
      es: "El cociente lambda_0 entre lambda_medio debe coincidir con n."
      en: "The ratio lambda_0 over lambda_medio must coincide with n."

error_patterns:
  - id: confundir_n_densidad
    description:
      es: "Asociar indice de refraccion con densidad mecanica."
      en: "Associating refractive index with mechanical density."
  - id: frecuencia_cambia
    description:
      es: "Creer que la frecuencia cambia al pasar de un medio a otro."
      en: "Believing that frequency changes when passing from one medium to another."

graph_binding:
  enabled: false

mini_graph:
  enabled: false

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
