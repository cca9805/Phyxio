const e=`version: "v5"
id: interpretacion_polarizacion
leaf_id: polarizacion

nombre:
  es: Interpretacion de resultados de polarizacion
  en: Polarization results interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: optica
  parent_id: optica-fisica
  ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-fisica/polarizacion

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
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
    - ley_malus
    - ley_brewster
  magnitudes:
    - I
    - I_0
    - theta_p
    - theta_B
    - n_1
    - n_2

global_context:
  physical_domain:
    es: Optica ondulatoria, polarizacion de la luz
    en: Wave optics, light polarization
  axis_convention:
    es: "Angulos medidos desde el eje de transmision del polarizador; intensidades en W/m^2."
    en: "Angles measured from the polariser transmission axis; intensities in W/m^2."
  standard_assumptions:
    - Luz monocromatica completamente polarizada linealmente
    - Polarizador ideal sin absorcion residual
    - Interfases planas entre medios dielectricos transparentes
  standard_warnings:
    - "La ley de Malus no aplica a luz parcialmente polarizada sin correccion"
    - "La ley de Brewster falla en medios con absorcion significativa"

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
      es: Lectura del grafico
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
  I:
    magnitude_type: derived
    semantic_role:
      es: Intensidad transmitida tras el polarizador
      en: Transmitted intensity after the polariser
    summary_rules:
      - id: I_summary
        when: "true"
        status: ok
        text:
          es: "La intensidad transmitida es [[I]] W/m². Este valor indica la fraccion de luz que atraviesa el polarizador segun la orientacion relativa."
          en: "The transmitted intensity is [[I]] W/m². This value indicates the fraction of light passing through the polariser according to relative orientation."
    physical_reading_rules:
      - id: I_reading_max
        when: "I > 0.95 * I_0"
        status: ok
        text:
          es: "[[I]] esta muy proxima a [[I_0]]. La polarizacion de la onda y el eje del polarizador estan casi alineados, lo que depende directamente del coseno cuadrado de [[theta_p]]."
          en: "[[I]] is very close to [[I_0]]. The wave polarisation and polariser axis are nearly aligned, which depends directly on the squared cosine of [[theta_p]]."
      - id: I_reading_general
        when: "true"
        status: ok
        text:
          es: "[[I]] depende cuadraticamente del coseno de [[theta_p]]. A medida que [[theta_p]] aumenta, [[I]] disminuye porque la componente del campo electrico proyectada sobre el eje del polarizador se reduce."
          en: "[[I]] depends quadratically on the cosine of [[theta_p]]. As [[theta_p]] increases, [[I]] decreases because the electric field component projected onto the polariser axis is reduced."
    coherence_rules:
      - id: I_coherence_range
        when: "I >= 0 and I <= I_0"
        status: ok
        text:
          es: "[[I]] esta entre cero y [[I_0]], coherente con la ley de Malus."
          en: "[[I]] is between zero and [[I_0]], consistent with Malus's law."
      - id: I_coherence_exceed
        when: "I > I_0"
        status: error
        text:
          es: "[[I]] supera [[I_0]], lo cual es fisicamente imposible. Revisar datos de entrada."
          en: "[[I]] exceeds [[I_0]], which is physically impossible. Check input data."
    model_validity_rules:
      - id: I_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone luz completamente polarizada y un polarizador ideal. Deja de valer si la luz esta parcialmente polarizada o el polarizador tiene absorcion significativa."
          en: "The model assumes fully polarised light and an ideal polariser. It breaks down if the light is partially polarised or the polariser has significant absorption."
    graph_rules:
      - id: I_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[I]] describe la curva del coseno cuadrado. El maximo aparece en [[theta_p]] igual a cero y el minimo en 90 grados."
          en: "In the graph, [[I]] describes the squared cosine curve. The maximum appears at [[theta_p]] equal to zero and the minimum at 90 degrees."
    likely_errors:
      - id: I_error_linear
        when: "true"
        status: warning
        text:
          es: "Un error frecuente es olvidar el exponente cuadrado y suponer que la intensidad disminuye linealmente con el angulo en lugar de con el coseno cuadrado."
          en: "A common mistake is to forget the squared exponent and assume intensity decreases linearly with angle instead of with the squared cosine."
      - id: I_error_unpolarised
        when: "I > 0.5 * I_0"
        status: warning
        text:
          es: "Si la fuente es luz natural no polarizada, conviene suponer que el primer polarizador reduce la intensidad a la mitad. Olvidar este paso es un error frecuente."
          en: "If the source is unpolarised natural light, the first polariser is assumed to halve the intensity. Forgetting this step is a common mistake."
    next_step_rules:
      - id: I_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[I]] conocida, compara con [[I_0]] para obtener el angulo efectivo o analiza como varia la curva al cambiar [[theta_p]]."
          en: "With [[I]] known, compare with [[I_0]] to obtain the effective angle or analyse how the curve varies when changing [[theta_p]]."

  I_0:
    magnitude_type: parameter
    semantic_role:
      es: Intensidad incidente de referencia
      en: Reference incident intensity
    summary_rules:
      - id: I0_summary
        when: "true"
        status: ok
        text:
          es: "La intensidad incidente es [[I_0]] W/m². Este valor indica la intensidad maxima que podria transmitirse con polarizador y onda alineados."
          en: "The incident intensity is [[I_0]] W/m². This value indicates the maximum intensity that could be transmitted with polariser and wave aligned."
    physical_reading_rules:
      - id: I0_reading
        when: "true"
        status: ok
        text:
          es: "[[I_0]] es la referencia de amplitud. La intensidad transmitida depende de ella proporcionalmente, de modo que duplicar [[I_0]] duplica [[I]]."
          en: "[[I_0]] is the amplitude reference. Transmitted intensity depends on it proportionally, so doubling [[I_0]] doubles [[I]]."
    coherence_rules:
      - id: I0_coherence
        when: "I_0 > 0"
        status: ok
        text:
          es: "Valor positivo, coherente con una fuente luminosa real."
          en: "Positive value, consistent with a real light source."
    model_validity_rules:
      - id: I0_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone una fuente estable con intensidad constante. Deja de valer si la fuente fluctua rapidamente o tiene coherencia parcial."
          en: "The model assumes a stable source with constant intensity. It breaks down if the source fluctuates rapidly or has partial coherence."
    graph_rules:
      - id: I0_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[I_0]] fija la altura maxima de la curva de intensidad transmitida."
          en: "In the graph, [[I_0]] sets the maximum height of the transmitted intensity curve."
    likely_errors:
      - id: I0_error_half
        when: "true"
        status: warning
        text:
          es: "Un error comun es confundir la intensidad de la fuente natural con la intensidad tras el primer polarizador. Si la fuente no esta polarizada, la intensidad tras el primer polarizador es la mitad de la fuente."
          en: "A common mistake is to confuse the natural source intensity with the intensity after the first polariser. If the source is unpolarised, the intensity after the first polariser is half the source value."
    next_step_rules:
      - id: I0_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[I_0]] conocida, aplica la ley de Malus para obtener [[I]] segun el angulo del polarizador."
          en: "With [[I_0]] known, apply Malus's law to obtain [[I]] according to the polariser angle."

  theta_p:
    magnitude_type: parameter
    semantic_role:
      es: Angulo entre la polarizacion de la onda y el eje del polarizador
      en: Angle between wave polarisation and polariser axis
    summary_rules:
      - id: theta_p_summary
        when: "true"
        status: ok
        text:
          es: "El angulo del polarizador es [[theta_p]] rad. Este valor indica la desalineacion entre la onda y el filtro."
          en: "The polariser angle is [[theta_p]] rad. This value indicates the misalignment between wave and filter."
    physical_reading_rules:
      - id: theta_p_reading
        when: "true"
        status: ok
        text:
          es: "[[theta_p]] controla directamente la fraccion de intensidad transmitida. A mayor [[theta_p]], menor la proyeccion del campo electrico sobre el eje del polarizador y menor [[I]]."
          en: "[[theta_p]] directly controls the fraction of transmitted intensity. Greater [[theta_p]] means a smaller projection of the electric field onto the polariser axis and lower [[I]]."
    coherence_rules:
      - id: theta_p_coherence
        when: "theta_p >= 0 and theta_p <= pi/2"
        status: ok
        text:
          es: "Angulo en el rango fisico de 0 a 90 grados."
          en: "Angle within the physical range of 0 to 90 degrees."
    model_validity_rules:
      - id: theta_p_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone que la luz incidente esta linealmente polarizada. Si la luz tiene polarizacion eliptica, la ley de Malus requiere una aproximacion mas elaborada y deja de valer en su forma simple."
          en: "The model assumes linearly polarised incident light. If the light has elliptical polarisation, Malus's law requires a more elaborate approximation and breaks down in its simple form."
    graph_rules:
      - id: theta_p_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[theta_p]] es el eje horizontal. La curva de [[I]] cae como coseno cuadrado a medida que [[theta_p]] avanza de 0 a 90 grados."
          en: "In the graph, [[theta_p]] is the horizontal axis. The [[I]] curve falls as squared cosine as [[theta_p]] advances from 0 to 90 degrees."
    likely_errors:
      - id: theta_p_error_deg
        when: "theta_p > pi/2"
        status: error
        text:
          es: "El angulo supera 90 grados. Un error habitual es confundir grados con radianes y olvidar la conversion. Verifica las unidades."
          en: "The angle exceeds 90 degrees. A common mistake is to confuse degrees with radians and forget the conversion. Check units."
      - id: theta_p_error_surface
        when: "true"
        status: warning
        text:
          es: "Un error frecuente es suponer que el angulo se mide respecto a la superficie del polarizador en lugar de respecto a su eje de transmision."
          en: "A common mistake is to assume the angle is measured from the polariser surface instead of from its transmission axis."
    next_step_rules:
      - id: theta_p_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[theta_p]] conocido, calcula [[I]] mediante la ley de Malus, o invierte la formula para deducir el angulo a partir de la intensidad medida."
          en: "With [[theta_p]] known, calculate [[I]] via Malus's law, or invert the formula to deduce the angle from measured intensity."

  theta_B:
    magnitude_type: derived
    semantic_role:
      es: Angulo de Brewster para reflexion completamente polarizada
      en: Brewster angle for fully polarised reflection
    summary_rules:
      - id: theta_B_summary
        when: "true"
        status: ok
        text:
          es: "El angulo de Brewster es [[theta_B]] rad. Este resultado indica el angulo de incidencia al cual la luz reflejada queda completamente polarizada."
          en: "The Brewster angle is [[theta_B]] rad. This result indicates the incidence angle at which reflected light becomes fully polarised."
    physical_reading_rules:
      - id: theta_B_reading
        when: "true"
        status: ok
        text:
          es: "[[theta_B]] depende del cociente de indices de refraccion. Si [[n_2]] aumenta respecto a [[n_1]], [[theta_B]] aumenta porque la interfase produce mayor desviacion angular."
          en: "[[theta_B]] depends on the ratio of refractive indices. If [[n_2]] increases relative to [[n_1]], [[theta_B]] increases because the interface produces greater angular deviation."
    coherence_rules:
      - id: theta_B_coherence
        when: "theta_B > 0 and theta_B < pi/2"
        status: ok
        text:
          es: "Angulo entre 0 y 90 grados, coherente con una interfase real."
          en: "Angle between 0 and 90 degrees, consistent with a real interface."
    model_validity_rules:
      - id: theta_B_validity
        when: "true"
        status: ok
        text:
          es: "La ley de Brewster supone medios dielectricos sin absorcion. Deja de valer en metales o medios con absorcion significativa, donde la reflexion nunca es completamente polarizada."
          en: "Brewster's law assumes dielectric media without absorption. It breaks down for metals or media with significant absorption, where reflection is never fully polarised."
    graph_rules:
      - id: theta_B_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[theta_B]] aparece como el punto donde la reflectancia de la componente paralela cae a cero."
          en: "In the graph, [[theta_B]] appears as the point where the parallel component reflectance drops to zero."
    likely_errors:
      - id: theta_B_error_critical
        when: "true"
        status: warning
        text:
          es: "Un error frecuente es confundir el angulo de Brewster con el angulo critico de reflexion total interna. El angulo de Brewster se refiere a polarizacion completa de la luz reflejada, no a reflexion total."
          en: "A common mistake is to confuse the Brewster angle with the critical angle for total internal reflection. The Brewster angle refers to complete polarisation of reflected light, not total reflection."
    next_step_rules:
      - id: theta_B_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[theta_B]] conocido, verifica si el angulo de incidencia experimental coincide. Puedes deducir [[n_2]] si conoces [[n_1]] y el angulo medido."
          en: "With [[theta_B]] known, verify whether the experimental incidence angle matches. You can deduce [[n_2]] if you know [[n_1]] and the measured angle."

  n_1:
    magnitude_type: parameter
    semantic_role:
      es: Indice de refraccion del medio incidente
      en: Refractive index of incident medium
    summary_rules:
      - id: n1_summary
        when: "true"
        status: ok
        text:
          es: "El indice de refraccion del medio incidente es [[n_1]]. Este valor indica la velocidad relativa de la luz en el primer medio."
          en: "The refractive index of the incident medium is [[n_1]]. This value indicates the relative speed of light in the first medium."
    physical_reading_rules:
      - id: n1_reading
        when: "true"
        status: ok
        text:
          es: "[[n_1]] determina la velocidad de fase de la luz antes de la interfase. Un valor mayor de [[n_1]] respecto a [[n_2]] desplaza [[theta_B]] por debajo de 45 grados."
          en: "[[n_1]] determines the phase velocity of light before the interface. A larger [[n_1]] relative to [[n_2]] shifts [[theta_B]] below 45 degrees."
    coherence_rules:
      - id: n1_coherence
        when: "n_1 >= 1"
        status: ok
        text:
          es: "Valor mayor o igual a 1, coherente con un medio optico real."
          en: "Value greater than or equal to 1, consistent with a real optical medium."
    model_validity_rules:
      - id: n1_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone medios transparentes y no dispersivos. Deja de valer si el medio presenta absorcion fuerte o birrefringencia."
          en: "The model assumes transparent, non-dispersive media. It breaks down if the medium shows strong absorption or birefringence."
    graph_rules:
      - id: n1_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, cambiar [[n_1]] desplaza la posicion del angulo de Brewster a lo largo del eje angular."
          en: "In the graph, changing [[n_1]] shifts the Brewster angle position along the angular axis."
    likely_errors:
      - id: n1_error_swap
        when: "true"
        status: warning
        text:
          es: "Un error comun es confundir n_1 con n_2, obteniendo el angulo complementario. Asegurate de que [[n_1]] corresponde al medio de donde viene la luz."
          en: "A common mistake is to confuse n_1 with n_2, obtaining the complementary angle. Make sure [[n_1]] corresponds to the medium the light comes from."
    next_step_rules:
      - id: n1_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[n_1]] y [[n_2]] conocidos, calcula [[theta_B]] mediante la ley de Brewster."
          en: "With [[n_1]] and [[n_2]] known, calculate [[theta_B]] via Brewster's law."

  n_2:
    magnitude_type: parameter
    semantic_role:
      es: Indice de refraccion del medio transmitido
      en: Refractive index of transmitted medium
    summary_rules:
      - id: n2_summary
        when: "true"
        status: ok
        text:
          es: "El indice de refraccion del medio transmitido es [[n_2]]. Este valor indica la velocidad relativa de la luz en el segundo medio."
          en: "The refractive index of the transmitted medium is [[n_2]]. This value indicates the relative speed of light in the second medium."
    physical_reading_rules:
      - id: n2_reading
        when: "true"
        status: ok
        text:
          es: "[[n_2]] determina la velocidad de fase de la luz tras la interfase. Un cociente [[n_2]]/[[n_1]] mayor que 1 desplaza [[theta_B]] por encima de 45 grados."
          en: "[[n_2]] determines the phase velocity of light after the interface. A ratio [[n_2]]/[[n_1]] greater than 1 shifts [[theta_B]] above 45 degrees."
    coherence_rules:
      - id: n2_coherence
        when: "n_2 >= 1"
        status: ok
        text:
          es: "Valor mayor o igual a 1, coherente con un medio optico real."
          en: "Value greater than or equal to 1, consistent with a real optical medium."
    model_validity_rules:
      - id: n2_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone un medio homogeneo, isotropo y sin absorcion. Deja de valer en cristales birrefringentes o metales."
          en: "The model assumes a homogeneous, isotropic medium without absorption. It breaks down in birefringent crystals or metals."
    graph_rules:
      - id: n2_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, aumentar [[n_2]] eleva [[theta_B]], desplazando el punto de polarizacion completa hacia angulos mayores."
          en: "In the graph, increasing [[n_2]] raises [[theta_B]], shifting the complete polarisation point toward larger angles."
    likely_errors:
      - id: n2_error_swap
        when: "true"
        status: warning
        text:
          es: "Un error frecuente es confundir el medio incidente con el transmitido e intercambiar [[n_1]] y [[n_2]] en la formula."
          en: "A common mistake is to confuse the incident and transmitted media and swap [[n_1]] and [[n_2]] in the formula."
    next_step_rules:
      - id: n2_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[n_2]] calculado a partir de [[theta_B]] y [[n_1]], identifica el material del segundo medio comparando con tablas de indices de refraccion."
          en: "With [[n_2]] calculated from [[theta_B]] and [[n_1]], identify the second medium material by comparing with refractive index tables."

cross_checks:
  - id: malus_intensity_check
    type: inequality
    condition: "I <= I_0"
    message:
      es: "La intensidad transmitida no puede superar la incidente."
      en: "Transmitted intensity cannot exceed incident intensity."

error_patterns:
  - id: confuse_cos_cos2
    description:
      es: "Usar cos(theta) en lugar de cos^2(theta) en la ley de Malus."
      en: "Using cos(theta) instead of cos^2(theta) in Malus's law."
  - id: confuse_brewster_critical
    description:
      es: "Confundir el angulo de Brewster con el angulo critico de reflexion total."
      en: "Confusing the Brewster angle with the critical angle for total reflection."

graph_binding:
  enabled: true
  graph_type: Coord
  primary_variable: theta_p
  secondary_variable: I
  parameters:
    - I_0

mini_graph:
  enabled: true
  preferred_type: Coord

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
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
