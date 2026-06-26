const e=`version: "1.0"
id: interpretacion-ley-de-snell
leaf_id: ley-de-snell

nombre:
  es: "Interpretacion de la ley de Snell"
  en: "Snell's law interpretation"

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fenomenos-ondulatorios
  parent_id: refraccion
  ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/ley-de-snell

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: "Interpretacion"
    en: Interpretation
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
    - ley_snell
    - angulo_critico
  magnitudes:
    - n1
    - n2
    - theta_1
    - theta_2
    - theta_c

global_context:
  physical_domain:
    es: "Optica geometrica, refraccion en interfaces planas entre medios isotropos."
    en: "Geometrical optics, refraction at flat interfaces between isotropic media."
  axis_convention:
    es: "Angulos medidos desde la normal a la superficie, positivos en sentido antihorario."
    en: "Angles measured from the surface normal, positive counterclockwise."
  standard_assumptions:
    - "Medios homogeneos e isotropos"
    - "Interfaz plana"
    - "Optica geometrica valida"
  standard_warnings:
    - "Verificar que n1*sin(theta_1)/n2 no excede 1 antes de calcular theta_2"

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
    enabled: true
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
  theta_2:
    magnitude_type: angle
    semantic_role:
      es: "Angulo que forma el rayo refractado con la normal en el segundo medio."
      en: "Angle that the refracted ray makes with the normal in the second medium."
    summary_rules:
      - id: t2_summary_refraction
        when: "theta_2 > 0"
        status: ok
        text:
          es: "[[theta_2]] indica la direccion del rayo refractado respecto a la normal. Un angulo mayor significa mayor desviacion del rayo al cruzar la interfaz."
          en: "[[theta_2]] indicates the direction of the refracted ray relative to the normal. A larger angle means greater deviation of the ray when crossing the interface."
      - id: t2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[theta_2]] describe la desviacion angular del rayo al atravesar la interfaz entre los dos medios. Su valor depende del cociente de indices."
          en: "[[theta_2]] describes the angular deviation of the ray when crossing the interface between the two media. Its value depends on the index ratio."
    physical_reading_rules:
      - id: t2_reading_less
        when: "theta_2 < theta_1"
        status: ok
        text:
          es: "El rayo se acerca a la normal porque pasa a un medio opticamente mas denso (n2 mayor que n1). La luz se ralentiza y se comprime la longitud de onda."
          en: "The ray bends toward the normal because it enters an optically denser medium (n2 greater than n1). Light slows down and the wavelength is compressed."
      - id: t2_reading_greater
        when: "theta_2 > theta_1"
        status: ok
        text:
          es: "El rayo se aleja de la normal porque pasa a un medio opticamente menos denso (n2 menor que n1). La luz se acelera y se expande la longitud de onda."
          en: "The ray bends away from the normal because it enters an optically less dense medium (n2 less than n1). Light speeds up and the wavelength expands."
      - id: t2_reading_default
        when: "true"
        status: ok
        text:
          es: "La direccion del rayo refractado depende del cociente n1/n2 y del angulo incidente. Mayor contraste de indices produce mayor desviacion."
          en: "The direction of the refracted ray depends on the ratio n1/n2 and the incident angle. Greater index contrast produces greater deviation."
    coherence_rules:
      - id: t2_coherence_range
        when: "theta_2 > 1.5708"
        status: error
        text:
          es: "El angulo de refraccion supera 90 grados, lo que indica reflexion total interna. No existe rayo refractado para estos parametros."
          en: "The refraction angle exceeds 90 degrees, indicating total internal reflection. No refracted ray exists for these parameters."
      - id: t2_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[theta_2]] esta dentro del rango fisicamente valido (entre 0 y 90 grados)."
          en: "The value of [[theta_2]] is within the physically valid range (between 0 and 90 degrees)."
    model_validity_rules:
      - id: t2_validity_geometric
        when: "true"
        status: ok
        text:
          es: "La ley de Snell es valida en optica geometrica. Falla cuando la dimension de la interfaz es comparable a la longitud de onda (difraccion) o en medios anisotropos."
          en: "Snell's law is valid in geometrical optics. It fails when the interface dimension is comparable to the wavelength (diffraction) or in anisotropic media."
    graph_rules:
      - id: t2_graph_curve
        when: "true"
        status: ok
        text:
          es: "En la grafica theta_2 vs theta_1, la curva crece con pendiente que depende de n1/n2. Si n1 mayor que n2, la curva termina abruptamente en el angulo critico."
          en: "In the theta_2 vs theta_1 graph, the curve rises with a slope that depends on n1/n2. If n1 is greater than n2, the curve ends abruptly at the critical angle."
    likely_errors:
      - id: t2_error_surface
        when: "true"
        status: warning
        text:
          es: "Error frecuente: medir angulos desde la superficie en lugar de la normal. Si el resultado parece complementario al esperado, verificar la referencia angular."
          en: "Common error: measuring angles from the surface instead of the normal. If the result seems complementary to expected, check the angle reference."
    next_step_rules:
      - id: t2_next_critico
        when: "theta_2 > 1.2"
        status: ok
        text:
          es: "El angulo refractado se acerca a 90 grados. Considerar calcular el angulo critico para determinar si la reflexion total es inminente."
          en: "The refracted angle approaches 90 degrees. Consider calculating the critical angle to determine if total reflection is imminent."
      - id: t2_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular el angulo critico si n1 es mayor que n2, o explorar como varia theta_2 al cambiar theta_1 para comprender la curva de Snell."
          en: "Calculate the critical angle if n1 is greater than n2, or explore how theta_2 varies with theta_1 to understand the Snell curve."

  theta_1:
    magnitude_type: angle
    semantic_role:
      es: "Angulo del rayo incidente respecto a la normal."
      en: "Angle of the incident ray relative to the normal."
    summary_rules:
      - id: t1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[theta_1]] indica la direccion del rayo incidente. Su valor, junto con los indices, determina completamente la refraccion."
          en: "[[theta_1]] indicates the direction of the incident ray. Its value, together with the indices, completely determines the refraction."
    physical_reading_rules:
      - id: t1_reading_default
        when: "true"
        status: ok
        text:
          es: "El angulo de incidencia es la variable de control del experimento. Al aumentarlo, el rayo refractado se desvia mas hasta alcanzar el angulo critico."
          en: "The angle of incidence is the control variable of the experiment. Increasing it causes the refracted ray to deviate more until reaching the critical angle."
    coherence_rules:
      - id: t1_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[theta_1]] debe estar entre 0 y 90 grados para representar incidencia fisica valida."
          en: "[[theta_1]] must be between 0 and 90 degrees to represent physically valid incidence."
    model_validity_rules:
      - id: t1_validity_default
        when: "true"
        status: ok
        text:
          es: "La ley de Snell asume incidencia rasante como limite; a 90 grados exactos el rayo viaja paralelo a la superficie y no penetra."
          en: "Snell's law assumes grazing incidence as the limit; at exactly 90 degrees the ray travels parallel to the surface and does not penetrate."
    graph_rules:
      - id: t1_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[theta_1]] es la variable del eje horizontal. La curva muestra como la refraccion depende de la incidencia."
          en: "In the graph, [[theta_1]] is the variable on the horizontal axis. The curve shows how refraction depends on incidence."
    likely_errors:
      - id: t1_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir el angulo con la superficie (complementario) con el angulo con la normal. Si theta_1 se midio desde la superficie, el valor correcto es 90 grados menos el valor medido."
          en: "Typical error: confusing the angle with the surface (complementary) with the angle to the normal. If theta_1 was measured from the surface, the correct value is 90 degrees minus the measured value."
    next_step_rules:
      - id: t1_next_default
        when: "true"
        status: ok
        text:
          es: "Con theta_1 conocido, aplicar la ley de Snell para obtener theta_2 o verificar si se supera el angulo critico."
          en: "With theta_1 known, apply Snell's law to obtain theta_2 or check whether the critical angle is exceeded."

  n1:
    magnitude_type: parameter
    semantic_role:
      es: "Indice de refraccion del medio incidente."
      en: "Refractive index of the incident medium."
    summary_rules:
      - id: n1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n1]] describe las propiedades opticas del medio incidente. Un valor mayor indica mayor densidad optica y menor velocidad de la luz en ese medio."
          en: "[[n1]] describes the optical properties of the incident medium. A higher value indicates greater optical density and lower light speed in that medium."
    physical_reading_rules:
      - id: n1_reading_default
        when: "true"
        status: ok
        text:
          es: "El indice n1 determina la velocidad de fase de la luz en el medio 1. Cuanto mayor es n1, mas lenta viaja la luz y mas corta es su longitud de onda en ese medio."
          en: "The index n1 determines the phase speed of light in medium 1. The larger n1, the slower light travels and the shorter its wavelength in that medium."
    coherence_rules:
      - id: n1_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[n1]] debe ser mayor o igual a 1 en medios convencionales. Valores menores que 1 solo aparecen en metamateriales especiales."
          en: "[[n1]] must be greater than or equal to 1 in conventional media. Values less than 1 only appear in special metamaterials."
    model_validity_rules:
      - id: n1_validity_default
        when: "true"
        status: ok
        text:
          es: "La ley de Snell asume medios no dispersivos. Si n1 depende fuertemente de la longitud de onda, el resultado es valido solo para esa lambda especifica."
          en: "Snell's law assumes non-dispersive media. If n1 depends strongly on wavelength, the result is valid only for that specific lambda."
    graph_rules:
      - id: n1_graph_default
        when: "true"
        status: ok
        text:
          es: "Al variar [[n1]] en el grafico, la curva de refraccion cambia de pendiente. Mayor n1 produce mayor desviacion del rayo al pasar a un medio con n2 fijo."
          en: "When varying [[n1]] in the graph, the refraction curve changes slope. A larger n1 produces greater ray deviation when passing to a medium with fixed n2."
    likely_errors:
      - id: n1_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: invertir los indices, asignando al medio incidente el indice del medio refractado. Verificar siempre cual es el medio por donde llega la luz."
          en: "Common error: inverting the indices, assigning the refracted medium index to the incident medium. Always verify which medium the light arrives through."
    next_step_rules:
      - id: n1_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar n1 con n2 para predecir si el rayo se acerca o se aleja de la normal, y si existe angulo critico."
          en: "Compare n1 with n2 to predict whether the ray bends toward or away from the normal, and whether a critical angle exists."

  n2:
    magnitude_type: parameter
    semantic_role:
      es: "Indice de refraccion del medio refractado."
      en: "Refractive index of the refracted medium."
    summary_rules:
      - id: n2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n2]] describe las propiedades opticas del medio donde viaja el rayo refractado. El cociente n1/n2 domina la desviacion angular."
          en: "[[n2]] describes the optical properties of the medium where the refracted ray travels. The ratio n1/n2 dominates the angular deviation."
    physical_reading_rules:
      - id: n2_reading_default
        when: "true"
        status: ok
        text:
          es: "Un n2 menor que n1 indica que la luz pasa a un medio menos denso y se aleja de la normal; un n2 mayor que n1 indica que se acerca."
          en: "An n2 less than n1 indicates light passes to a less dense medium and bends away from the normal; an n2 greater than n1 indicates it bends toward it."
    coherence_rules:
      - id: n2_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[n2]] debe ser mayor o igual a 1 en medios convencionales."
          en: "[[n2]] must be greater than or equal to 1 in conventional media."
    model_validity_rules:
      - id: n2_validity_default
        when: "true"
        status: ok
        text:
          es: "Si n2 es fuertemente dispersivo, la ley de Snell aplica por separado a cada longitud de onda, produciendo separacion cromatica (arcoiris en prismas)."
          en: "If n2 is strongly dispersive, Snell's law applies separately to each wavelength, producing chromatic separation (rainbow in prisms)."
    graph_rules:
      - id: n2_graph_default
        when: "true"
        status: ok
        text:
          es: "Al reducir [[n2]] en el grafico manteniendo n1 fijo, el angulo critico disminuye y la zona de reflexion total se amplia."
          en: "When reducing [[n2]] in the graph while keeping n1 fixed, the critical angle decreases and the total reflection zone widens."
    likely_errors:
      - id: n2_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar el indice del aire como 1.00 sin considerar que a veces el medio 2 es agua (1.33) o vidrio (1.52), no vacio."
          en: "Typical error: using the air index as 1.00 without considering that sometimes medium 2 is water (1.33) or glass (1.52), not vacuum."
    next_step_rules:
      - id: n2_next_default
        when: "true"
        status: ok
        text:
          es: "Con n1 y n2 conocidos, calcular el angulo critico si n1 es mayor que n2, o determinar theta_2 para un angulo de incidencia dado."
          en: "With n1 and n2 known, calculate the critical angle if n1 is greater than n2, or determine theta_2 for a given angle of incidence."

  theta_c:
    magnitude_type: angle
    semantic_role:
      es: "Angulo critico que marca el umbral de reflexion total interna."
      en: "Critical angle that marks the threshold of total internal reflection."
    summary_rules:
      - id: tc_summary_default
        when: "true"
        status: ok
        text:
          es: "[[theta_c]] indica el angulo de incidencia limite. Por encima de este valor, toda la luz se refleja y no existe rayo refractado. Su valor depende del cociente n2/n1."
          en: "[[theta_c]] indicates the limiting angle of incidence. Above this value, all light is reflected and no refracted ray exists. Its value depends on the ratio n2/n1."
    physical_reading_rules:
      - id: tc_reading_default
        when: "true"
        status: ok
        text:
          es: "El angulo critico es una frontera fisica absoluta: por debajo hay refraccion parcial; por encima, reflexion total. Es la base del confinamiento optico en fibras y guias de onda."
          en: "The critical angle is an absolute physical boundary: below it there is partial refraction; above it, total reflection. It is the basis of optical confinement in fibres and waveguides."
    coherence_rules:
      - id: tc_coherence_existence
        when: "n1 < n2"
        status: error
        text:
          es: "No existe angulo critico cuando n1 es menor que n2. La reflexion total solo ocurre al pasar de un medio mas denso a uno menos denso."
          en: "No critical angle exists when n1 is less than n2. Total reflection only occurs when passing from a denser to a less dense medium."
      - id: tc_coherence_default
        when: "true"
        status: ok
        text:
          es: "El angulo critico calculado es valido porque n1 es mayor que n2."
          en: "The calculated critical angle is valid because n1 is greater than n2."
    model_validity_rules:
      - id: tc_validity_default
        when: "true"
        status: ok
        text:
          es: "El concepto de angulo critico asume interfaz perfectamente plana. En superficies rugosas, la reflexion total se degrada y aparece dispersion."
          en: "The critical angle concept assumes a perfectly flat interface. On rough surfaces, total reflection degrades and scattering appears."
    graph_rules:
      - id: tc_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[theta_c]] aparece como una linea vertical que marca el final de la curva de refraccion. A su derecha, no hay valores de theta_2."
          en: "In the graph, [[theta_c]] appears as a vertical line marking the end of the refraction curve. To its right, there are no theta_2 values."
    likely_errors:
      - id: tc_error_direction
        when: "true"
        status: warning
        text:
          es: "Error clasico: intentar calcular el angulo critico cuando la luz va del medio menos denso al mas denso. Solo existe cuando n1 es mayor que n2."
          en: "Classic error: trying to calculate the critical angle when light goes from the less dense to the denser medium. It only exists when n1 is greater than n2."
    next_step_rules:
      - id: tc_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar el angulo de incidencia con el angulo critico para determinar si hay refraccion o reflexion total."
          en: "Compare the angle of incidence with the critical angle to determine whether refraction or total reflection occurs."

cross_checks:
  - type: sign_coherence
    description:
      es: "Verificar que si n1 mayor que n2 entonces theta_2 mayor que theta_1."
      en: "Verify that if n1 is greater than n2 then theta_2 is greater than theta_1."

error_patterns:
  - id: confundir_normal_superficie
    description:
      es: "Medir angulos desde la superficie en vez de la normal."
      en: "Measuring angles from the surface instead of the normal."
  - id: invertir_indices
    description:
      es: "Asignar n1 al medio refractado y n2 al incidente."
      en: "Assigning n1 to the refracted medium and n2 to the incident one."

graph_binding:
  supported: true
  graph_type: Coord
  x_axis: theta_1
  y_axis: theta_2
  parameters:
    - n1
    - n2

mini_graph:
  enabled: true
  type: Coord
  description:
    es: "Curva theta_2 vs theta_1 para diferentes pares de indices."
    en: "Curve theta_2 vs theta_1 for different index pairs."

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
