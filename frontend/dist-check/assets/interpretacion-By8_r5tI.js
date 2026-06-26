const e=`version: "v5"
id: interp-fuerza-de-lorentz
leaf_id: fuerza-de-lorentz

nombre:
  es: Interpretación de la fuerza de Lorentz
  en: Interpretation of the Lorentz force

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: fundamentos
  parent_id: fuerzas-electromagneticas
  ruta_relativa: fisica-clasica/electromagnetismo/fundamentos/fuerzas-electromagneticas/fuerza-de-lorentz

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación física
    en: Physical interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 3

dependencies:
  formulas:
    - fuerza_lorentz_total
    - fuerza_magnetica_modulo
  magnitudes:
    - F_L
    - F_E
    - F_m
    - q
    - E
    - B
    - v
    - sin_theta

global_context:
  physical_domain:
    es: "Electrodinámica clásica. La fuerza de Lorentz unifica en una sola expresión la fuerza eléctrica y la magnética; es la fuerza fundamental que experimenta cualquier carga en movimiento en un campo electromagnético."
    en: "Classical electrodynamics. The Lorentz force unifies in a single expression the electric and magnetic forces; it is the fundamental force experienced by any moving charge in an electromagnetic field."
  axis_convention:
    es: "La gráfica muestra F_L frente a v para valores fijos de q, E, B y sin_theta. La intersección con el eje vertical es la fuerza eléctrica pura; la pendiente es la contribución magnética."
    en: "The graph shows F_L versus v for fixed values of q, E, B and sin_theta. The y-axis intercept is the pure electric force; the slope is the magnetic contribution."
  standard_assumptions:
    - "Régimen no relativista: v << c"
    - "Campos uniformes evaluados en la posición instantánea de la carga"
    - "La fórmula da el módulo; la dirección requiere el producto vectorial"
    - "La fuerza magnética no realiza trabajo sobre la partícula"
  standard_warnings:
    - "La fuerza magnética es perpendicular a v y a B; no actúa sobre cargas en reposo"
    - "Un campo magnético solo no puede cambiar la energía cinética de la partícula"
    - "Para v cercana a c el modelo clásico sobreestima la fuerza"

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
      es: Lectura física
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
      es: Lectura del gráfico
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
  F_L:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Fuerza total electromagnética sobre la partícula; determina su aceleración mediante la segunda ley de Newton."
      en: "Total electromagnetic force on the particle; determines its acceleration via Newton's second law."
    summary_rules:
      - id: F_L_summary_large
        when: "F_L > 1e-10"
        status: ok
        text:
          es: "[[F_L]] es la fuerza total que combina la componente eléctrica [[F_E]] y la magnética [[F_m]]. Su valor supera 0.1 nN, régimen macroscópico detectable con instrumentos estándar."
          en: "[[F_L]] is the total force combining the electric component [[F_E]] and the magnetic one [[F_m]]. Its value exceeds 0.1 nN, a macroscopic regime detectable with standard instruments."
      - id: F_L_summary_small
        when: "F_L <= 1e-10 and F_L > 0"
        status: ok
        text:
          es: "[[F_L]] es la fuerza total sobre la partícula. Su valor, menor de 0.1 nN, es típico de fuerzas sobre partículas subatómicas o electrones en campos débiles."
          en: "[[F_L]] is the total force on the particle. Its value, below 0.1 nN, is typical of forces on subatomic particles or electrons in weak fields."
      - id: F_L_summary_zero
        when: "F_L == 0"
        status: ok
        text:
          es: "[[F_L]] es nula: las componentes eléctrica y magnética se cancelan exactamente. Este es el principio del selector de velocidades de Wien."
          en: "[[F_L]] is zero: the electric and magnetic components cancel exactly. This is the principle behind Wien's velocity selector."
      - id: F_L_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_L]] es la fuerza total que experimenta la partícula cargada en el campo electromagnético. Combina [[F_E]] y [[F_m]] vectorialmente."
          en: "[[F_L]] is the total force experienced by the charged particle in the electromagnetic field. It combines [[F_E]] and [[F_m]] vectorially."
    physical_reading_rules:
      - id: F_L_reading_default
        when: "true"
        status: ok
        text:
          es: "[[F_L]] determina la aceleración de la partícula. La componente eléctrica [[F_E]] puede cambiar la energía cinética; la magnética [[F_m]] solo desvía la trayectoria. Su balance define si la partícula acelera, frena o describe una curva."
          en: "[[F_L]] determines the particle acceleration. The electric component [[F_E]] can change kinetic energy; the magnetic one [[F_m]] only deflects the trajectory. Their balance determines whether the particle accelerates, decelerates, or curves."
    coherence_rules:
      - id: F_L_coherence_bounds
        when: "F_L > q * E + q * v * B"
        status: error
        text:
          es: "[[F_L]] supera la suma de las componentes máximas posibles. Revisar los valores de [[q]], [[E]], [[B]] y [[v]]."
          en: "[[F_L]] exceeds the sum of the maximum possible components. Review the values of [[q]], [[E]], [[B]] and [[v]]."
      - id: F_L_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[F_L]] es coherente con las componentes [[F_E]] y [[F_m]]. Verificar que la suma vectorial sea correcta según la geometría del problema."
          en: "[[F_L]] is consistent with components [[F_E]] and [[F_m]]. Verify that the vector sum is correct according to the problem geometry."
    model_validity_rules:
      - id: F_L_validity_relativistic
        when: "v > 3e7"
        status: warning
        text:
          es: "[[v]] supera el 10 % de c. El modelo clásico de la fuerza de Lorentz introduce errores superiores al 1 %; considerar la corrección relativista con el factor de Lorentz."
          en: "[[v]] exceeds 10 % of c. The classical Lorentz force model introduces errors above 1 %; consider the relativistic correction with the Lorentz factor."
      - id: F_L_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo clásico de la fuerza de Lorentz es válido para [[v]] mucho menor que c. Los campos deben ser los macroscópicos locales; en regiones de variación rápida se necesita el campo promediado."
          en: "The classical Lorentz force model is valid for [[v]] much less than c. Fields must be the local macroscopic ones; in regions of rapid variation the averaged field is needed."
    graph_rules:
      - id: F_L_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[F_L]] vs [[v]], el punto calculado debe caer sobre la recta de pendiente positiva. La intersección con el eje vertical (cuando [[v]] tiende a cero) da la fuerza puramente eléctrica [[F_E]]."
          en: "On the [[F_L]] vs [[v]] graph, the calculated point should fall on the positive-slope line. The y-intercept (when [[v]] approaches zero) gives the purely electric force [[F_E]]."
    likely_errors:
      - id: F_L_error_magnetic_only
        when: "true"
        status: warning
        text:
          es: "Error frecuente: calcular solo [[F_m]] e ignorar [[F_E]] cuando hay campo eléctrico presente. La fuerza de Lorentz siempre incluye ambas componentes cuando [[E]] no es nulo."
          en: "Common error: calculating only [[F_m]] and ignoring [[F_E]] when an electric field is present. The Lorentz force always includes both components when [[E]] is non-zero."
    next_step_rules:
      - id: F_L_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[F_L]] calculada, el siguiente paso es aplicar la segunda ley de Newton para obtener la aceleración de la partícula y describir su trayectoria en el campo electromagnético."
          en: "With [[F_L]] calculated, the next step is to apply Newton's second law to obtain the particle acceleration and describe its trajectory in the electromagnetic field."

  F_m:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Componente magnética de la fuerza de Lorentz; desvía la trayectoria sin cambiar la energía cinética."
      en: "Magnetic component of the Lorentz force; deflects the trajectory without changing kinetic energy."
    summary_rules:
      - id: F_m_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_m]] es la fuerza magnética sobre la partícula. Depende del producto de [[q]], [[v]], [[B]] y [[sin_theta]]. Es máxima cuando [[v]] es perpendicular a [[B]] y nula cuando son paralelos."
          en: "[[F_m]] is the magnetic force on the particle. Depends on the product of [[q]], [[v]], [[B]] and [[sin_theta]]. Maximum when [[v]] is perpendicular to [[B]], zero when parallel."
    physical_reading_rules:
      - id: F_m_reading_default
        when: "true"
        status: ok
        text:
          es: "[[F_m]] curva la trayectoria de la partícula pero no modifica su rapidez ni su energía cinética. En ausencia de campo eléctrico, una partícula con velocidad perpendicular a [[B]] describe un círculo con radio proporcional a [[v]] e inversamente proporcional a [[B]]."
          en: "[[F_m]] curves the particle trajectory but does not change its speed or kinetic energy. In the absence of an electric field, a particle with velocity perpendicular to [[B]] describes a circle with radius proportional to [[v]] and inversely proportional to [[B]]."
    coherence_rules:
      - id: F_m_coherence_parallel
        when: "sin_theta == 0"
        status: ok
        text:
          es: "[[sin_theta]] es cero: [[v]] es paralela a [[B]] y [[F_m]] debe ser nula. La partícula no experimenta fuerza magnética y sigue su trayectoria sin desviación."
          en: "[[sin_theta]] is zero: [[v]] is parallel to [[B]] and [[F_m]] must be zero. The particle experiences no magnetic force and continues its trajectory undeflected."
      - id: F_m_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[F_m]] coherente con los parámetros. Verificar que [[sin_theta]] corresponde al ángulo real entre [[v]] y [[B]] en la geometría del problema."
          en: "[[F_m]] consistent with the parameters. Verify that [[sin_theta]] corresponds to the actual angle between [[v]] and [[B]] in the problem geometry."
    model_validity_rules:
      - id: F_m_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[F_m]] es válido para [[v]] << c. Para partículas relativistas, el momento de la partícula se modifica con el factor de Lorentz y la fuerza magnética efectiva cambia."
          en: "The [[F_m]] model is valid for [[v]] << c. For relativistic particles, the particle momentum is modified by the Lorentz factor and the effective magnetic force changes."
    graph_rules:
      - id: F_m_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[F_L]] vs [[v]], [[F_m]] es la componente que crece linealmente desde cero. El punto del gráfico para [[v]] cero corresponde solo a [[F_E]]; [[F_m]] se añade con la pendiente [[q]]·[[B]]·[[sin_theta]]."
          en: "On the [[F_L]] vs [[v]] graph, [[F_m]] is the component that grows linearly from zero. The graph point at [[v]] zero corresponds only to [[F_E]]; [[F_m]] adds with slope [[q]]·[[B]]·[[sin_theta]]."
    likely_errors:
      - id: F_m_error_parallel
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar que [[F_m]] es nula cuando [[v]] es paralela a [[B]]. En ese caso [[sin_theta]] es cero y la fuerza magnética no existe aunque la partícula se mueva rápido."
          en: "Common error: forgetting that [[F_m]] is zero when [[v]] is parallel to [[B]]. In that case [[sin_theta]] is zero and the magnetic force does not exist even if the particle moves fast."
    next_step_rules:
      - id: F_m_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[F_m]] calculada, determinar si hay campo eléctrico para completar [[F_L]]. Si solo hay campo magnético, analizar si la trayectoria es circular, helicoidal o rectilínea según la geometría de [[v]] y [[B]]."
          en: "With [[F_m]] calculated, determine if there is an electric field to complete [[F_L]]. If there is only a magnetic field, analyse whether the trajectory is circular, helical or rectilinear according to the geometry of [[v]] and [[B]]."

  v:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de la partícula; controla la magnitud de la fuerza magnética y delimita la validez del modelo clásico."
      en: "Particle velocity; controls the magnitude of the magnetic force and delimits the validity of the classical model."
    summary_rules:
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v]] determina la magnitud de [[F_m]]. A [[v]] nula, la fuerza de Lorentz se reduce a la componente eléctrica pura. A mayor [[v]], mayor desviación magnética."
          en: "[[v]] determines the magnitude of [[F_m]]. At zero [[v]], the Lorentz force reduces to the pure electric component. Higher [[v]] means greater magnetic deflection."
    physical_reading_rules:
      - id: v_reading_relativistic
        when: "v > 3e7"
        status: warning
        text:
          es: "[[v]] supera el 10 % de c. Revisar si el modelo clásico es suficiente o se necesita la corrección relativista."
          en: "[[v]] exceeds 10 % of c. Check whether the classical model suffices or a relativistic correction is needed."
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v]] está en el régimen no relativista. La fuerza magnética crece linealmente con [[v]]; duplicar [[v]] duplica [[F_m]] si [[B]] y [[sin_theta]] son constantes."
          en: "[[v]] is in the non-relativistic regime. Magnetic force grows linearly with [[v]]; doubling [[v]] doubles [[F_m]] if [[B]] and [[sin_theta]] are constant."
    coherence_rules:
      - id: v_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[v]] coherente con el régimen clásico. Verificar que la velocidad es la del instante de evaluación de la fuerza, no una velocidad promedio."
          en: "[[v]] consistent with the classical regime. Verify that the velocity is that at the instant of force evaluation, not an average velocity."
    model_validity_rules:
      - id: v_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido mientras [[v]] sea mucho menor que la velocidad de la luz. La condición práctica es que la energía cinética relativista sea indistinguible de la clásica a la precisión requerida."
          en: "The model is valid as long as [[v]] is much less than the speed of light. The practical condition is that the relativistic kinetic energy is indistinguishable from the classical one at the required precision."
    graph_rules:
      - id: v_graph_axis
        when: "true"
        status: ok
        text:
          es: "[[v]] ocupa el eje horizontal de la gráfica [[F_L]] vs [[v]]. Cada punto sobre el eje corresponde a una configuración de velocidad diferente de la misma partícula en el mismo campo."
          en: "[[v]] occupies the horizontal axis of the [[F_L]] vs [[v]] graph. Each point on the axis corresponds to a different velocity configuration of the same particle in the same field."
    likely_errors:
      - id: v_error_zero_field
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[v]] con la velocidad de un campo de onda. [[v]] es siempre la velocidad de la partícula cargada, no la velocidad de propagación del campo."
          en: "Common error: confusing [[v]] with the velocity of a wave field. [[v]] is always the velocity of the charged particle, not the field propagation speed."
    next_step_rules:
      - id: v_next_selector
        when: "F_L == 0"
        status: ok
        text:
          es: "Si [[F_L]] es cero con [[E]] y [[B]] no nulos, [[v]] es la velocidad de selección del selector de Wien: [[v]] tal que [[q]]·[[E]] compensa [[q]]·[[v]]·[[B]]·[[sin_theta]]."
          en: "If [[F_L]] is zero with [[E]] and [[B]] non-zero, [[v]] is the selection velocity of Wien's selector: [[v]] such that [[q]]·[[E]] compensates [[q]]·[[v]]·[[B]]·[[sin_theta]]."
      - id: v_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v]] conocida, calcular [[F_m]] como componente magnética y combinar con [[F_E]] para obtener [[F_L]] total."
          en: "With [[v]] known, calculate [[F_m]] as the magnetic component and combine with [[F_E]] to obtain total [[F_L]]."

  sin_theta:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Factor geométrico que modula la fuerza magnética; vale 1 para movimiento perpendicular al campo y 0 para movimiento paralelo."
      en: "Geometric factor that modulates the magnetic force; equals 1 for motion perpendicular to the field and 0 for motion parallel to it."
    summary_rules:
      - id: sin_theta_summary_max
        when: "sin_theta == 1"
        status: ok
        text:
          es: "[[sin_theta]] es 1: [[v]] es perpendicular a [[B]]. La fuerza magnética alcanza su valor máximo [[q]]·[[v]]·[[B]]. La partícula describe un arco circular si no hay campo eléctrico."
          en: "[[sin_theta]] is 1: [[v]] is perpendicular to [[B]]. The magnetic force reaches its maximum [[q]]·[[v]]·[[B]]. The particle follows a circular arc if there is no electric field."
      - id: sin_theta_summary_zero
        when: "sin_theta == 0"
        status: ok
        text:
          es: "[[sin_theta]] es cero: [[v]] es paralela a [[B]]. La fuerza magnética es nula; la partícula no se desvía por el campo magnético y sigue la trayectoria que dictaría solo el campo eléctrico."
          en: "[[sin_theta]] is zero: [[v]] is parallel to [[B]]. The magnetic force is zero; the particle is not deflected by the magnetic field and follows the trajectory dictated by the electric field alone."
      - id: sin_theta_summary_default
        when: "true"
        status: ok
        text:
          es: "[[sin_theta]] modula la fuerza magnética según el ángulo entre [[v]] y [[B]]. Un valor intermedio indica trayectoria helicoidal cuando solo actúa el campo magnético."
          en: "[[sin_theta]] modulates the magnetic force according to the angle between [[v]] and [[B]]. An intermediate value indicates a helical trajectory when only the magnetic field acts."
    physical_reading_rules:
      - id: sin_theta_reading_default
        when: "true"
        status: ok
        text:
          es: "[[sin_theta]] entre 0 y 1 indica ángulo intermedio entre [[v]] y [[B]]. En ese caso la trayectoria de la partícula en campo magnético puro es una hélice: la componente de [[v]] paralela a [[B]] no se ve afectada, y la perpendicular describe un círculo."
          en: "[[sin_theta]] between 0 and 1 indicates an intermediate angle between [[v]] and [[B]]. In that case the particle trajectory in a pure magnetic field is a helix: the component of [[v]] parallel to [[B]] is unaffected, and the perpendicular one describes a circle."
    coherence_rules:
      - id: sin_theta_coherence_range
        when: "sin_theta < 0 or sin_theta > 1"
        status: error
        text:
          es: "[[sin_theta]] fuera del rango físico. El seno del ángulo entre dos vectores siempre está entre 0 y 1."
          en: "[[sin_theta]] outside the physical range. The sine of the angle between two vectors is always between 0 and 1."
      - id: sin_theta_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[sin_theta]] en el rango válido. Verificar que corresponde al ángulo real entre el vector velocidad y el vector campo magnético en el sistema de referencia del problema."
          en: "[[sin_theta]] in the valid range. Verify it corresponds to the actual angle between the velocity vector and the magnetic field vector in the problem reference frame."
    model_validity_rules:
      - id: sin_theta_validity_default
        when: "true"
        status: ok
        text:
          es: "El factor [[sin_theta]] es exacto para el modelo clásico vectorial. No hay correcciones relativistas en este factor geométrico."
          en: "The factor [[sin_theta]] is exact for the classical vector model. There are no relativistic corrections to this geometric factor."
    graph_rules:
      - id: sin_theta_graph_default
        when: "true"
        status: ok
        text:
          es: "[[sin_theta]] actúa como parámetro de la familia de rectas en la gráfica [[F_m]] vs [[v]]: cada valor de [[sin_theta]] produce una recta de pendiente diferente. Para [[sin_theta]] igual a 1, la pendiente es máxima."
          en: "[[sin_theta]] acts as a parameter of the family of lines on the [[F_m]] vs [[v]] graph: each value of [[sin_theta]] produces a line with a different slope. For [[sin_theta]] equal to 1, the slope is maximum."
    likely_errors:
      - id: sin_theta_error_one
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asumir [[sin_theta]] igual a 1 sin verificar el ángulo del problema. Si el enunciado no especifica perpendicularidad, leer con cuidado la geometría antes de asignar [[sin_theta]] igual a 1."
          en: "Common error: assuming [[sin_theta]] equals 1 without verifying the problem angle. If the problem does not specify perpendicularity, read the geometry carefully before assigning [[sin_theta]] equal to 1."
    next_step_rules:
      - id: sin_theta_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[sin_theta]] determinado por la geometría, usarlo para calcular [[F_m]] y evaluar si la trayectoria es circular (sin_theta igual a 1), helicoidal (0 menor que sin_theta menor que 1) o rectilínea (sin_theta igual a 0)."
          en: "With [[sin_theta]] determined by the geometry, use it to calculate [[F_m]] and evaluate whether the trajectory is circular (sin_theta equal to 1), helical (0 less than sin_theta less than 1), or rectilinear (sin_theta equal to 0)."

  B:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Campo magnético fuente de la componente magnética de la fuerza de Lorentz; se despeja cuando se conoce la fuerza y la velocidad."
      en: "Magnetic field source of the magnetic component of the Lorentz force; solved for when the force and velocity are known."
    summary_rules:
      - id: B_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B]] es el campo magnético que actúa sobre la partícula. Solo produce fuerza sobre cargas en movimiento y su efecto es siempre perpendicular a [[v]]."
          en: "[[B]] is the magnetic field acting on the particle. It only produces force on moving charges and its effect is always perpendicular to [[v]]."
    physical_reading_rules:
      - id: B_reading_default
        when: "true"
        status: ok
        text:
          es: "[[B]] determina la curvatura de la trayectoria en campo magnético puro. A mayor [[B]], mayor curvatura y menor radio de la trayectoria circular."
          en: "[[B]] determines the trajectory curvature in a pure magnetic field. Higher [[B]] means greater curvature and smaller circular trajectory radius."
    coherence_rules:
      - id: B_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[B]] coherente. Verificar que las unidades sean teslas y que el valor sea consistente con el tipo de fuente magnética descrita en el problema."
          en: "[[B]] consistent. Verify that units are teslas and the value is consistent with the type of magnetic source described in the problem."
    model_validity_rules:
      - id: B_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume [[B]] uniforme en la región de movimiento. Si [[B]] varía, el modelo de campo uniforme introduce error en el radio de curvatura."
          en: "The model assumes [[B]] uniform in the motion region. If [[B]] varies, the uniform field model introduces error in the curvature radius."
    graph_rules:
      - id: B_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[F_L]] vs [[v]], [[B]] controla la pendiente de la recta junto con [[q]] y [[sin_theta]]. Un [[B]] mayor produce una recta con mayor pendiente."
          en: "On the [[F_L]] vs [[v]] graph, [[B]] controls the slope of the line together with [[q]] and [[sin_theta]]. A larger [[B]] produces a steeper line."
    likely_errors:
      - id: B_error_rest
        when: "true"
        status: warning
        text:
          es: "Error frecuente: aplicar [[B]] a una carga en reposo. El campo magnético no ejerce fuerza sobre partículas estáticas; [[F_m]] requiere movimiento."
          en: "Common error: applying [[B]] to a charge at rest. The magnetic field exerts no force on static particles; [[F_m]] requires motion."
    next_step_rules:
      - id: B_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[B]] conocido, calcular [[F_m]] como [[q]]·[[v]]·[[B]]·[[sin_theta]] y combinarlo con [[F_E]] para obtener [[F_L]] total."
          en: "With [[B]] known, calculate [[F_m]] as [[q]]·[[v]]·[[B]]·[[sin_theta]] and combine it with [[F_E]] to obtain total [[F_L]]."

  E:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Campo eléctrico fuente de la componente eléctrica de la fuerza de Lorentz; actúa sobre la partícula independientemente de su velocidad."
      en: "Electric field source of the electric component of the Lorentz force; acts on the particle regardless of its velocity."
    summary_rules:
      - id: E_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E]] es el campo eléctrico que actúa sobre la partícula. A diferencia de [[B]], produce fuerza tanto si la partícula está en reposo como si se mueve."
          en: "[[E]] is the electric field acting on the particle. Unlike [[B]], it produces force whether the particle is at rest or moving."
    physical_reading_rules:
      - id: E_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E]] determina la componente de fuerza que puede cambiar la energía cinética de la partícula. En el selector de Wien, [[E]] se ajusta para compensar exactamente [[F_m]] a la velocidad de selección."
          en: "[[E]] determines the force component that can change the particle's kinetic energy. In Wien's selector, [[E]] is adjusted to exactly compensate [[F_m]] at the selection velocity."
    coherence_rules:
      - id: E_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[E]] coherente. Verificar que las unidades sean V/m y que el valor sea consistente con la fuente eléctrica descrita."
          en: "[[E]] consistent. Verify that units are V/m and the value is consistent with the described electric source."
    model_validity_rules:
      - id: E_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume [[E]] uniforme. Si el campo varía a lo largo de la trayectoria, la fuerza eléctrica cambia y la trayectoria no es la parabólica estándar."
          en: "The model assumes [[E]] uniform. If the field varies along the trajectory, the electric force changes and the trajectory is not the standard parabola."
    graph_rules:
      - id: E_graph_default
        when: "true"
        status: ok
        text:
          es: "[[E]] controla la intersección con el eje vertical en la gráfica [[F_L]] vs [[v]]: cuando [[v]] tiende a cero, la fuerza total es [[q]]·[[E]]."
          en: "[[E]] controls the y-intercept in the [[F_L]] vs [[v]] graph: when [[v]] approaches zero, the total force is [[q]]·[[E]]."
    likely_errors:
      - id: E_error_vs_F
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[E]] con la fuerza eléctrica. [[E]] es el campo fuente en V/m; la fuerza eléctrica sobre la partícula es [[q]] multiplicado por [[E]]."
          en: "Common error: confusing [[E]] with the electric force. [[E]] is the source field in V/m; the electric force on the particle is [[q]] times [[E]]."
    next_step_rules:
      - id: E_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[E]] conocido, calcular la componente eléctrica de [[F_L]] como [[q]]·[[E]] y sumarla vectorialmente a la componente magnética."
          en: "With [[E]] known, calculate the electric component of [[F_L]] as [[q]]·[[E]] and add it vectorially to the magnetic component."

  q:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Carga de la partícula; factor de acoplamiento que determina la magnitud y el sentido de ambas componentes de la fuerza de Lorentz."
      en: "Particle charge; coupling factor that determines the magnitude and direction of both components of the Lorentz force."
    summary_rules:
      - id: q_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q]] es la carga de la partícula. Su valor determina la intensidad de la interacción con los campos; su signo determina la dirección de las fuerzas."
          en: "[[q]] is the particle charge. Its value determines the interaction strength with the fields; its sign determines the force directions."
    physical_reading_rules:
      - id: q_reading_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[q]] invierte la dirección de ambas componentes de [[F_L]]. Para la misma [[v]] y los mismos campos, un protón y un electrón experimentan fuerzas iguales en módulo pero opuestas en dirección."
          en: "The sign of [[q]] reverses the direction of both components of [[F_L]]. For the same [[v]] and the same fields, a proton and an electron experience forces equal in magnitude but opposite in direction."
    coherence_rules:
      - id: q_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q]] coherente. Verificar que el signo de [[q]] sea correcto para el tipo de partícula del problema: positivo para protones, negativo para electrones."
          en: "[[q]] consistent. Verify that the sign of [[q]] is correct for the particle type in the problem: positive for protons, negative for electrons."
    model_validity_rules:
      - id: q_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume [[q]] constante. En plasmas de alta energía o en presencia de reacciones nucleares, [[q]] puede cambiar y el modelo no aplica directamente."
          en: "The model assumes [[q]] constant. In high-energy plasmas or in the presence of nuclear reactions, [[q]] can change and the model does not apply directly."
    graph_rules:
      - id: q_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q]] actúa como factor de escala global en la gráfica [[F_L]] vs [[v]]: duplicar [[q]] duplica tanto la pendiente como la intersección con el eje vertical."
          en: "[[q]] acts as a global scale factor on the [[F_L]] vs [[v]] graph: doubling [[q]] doubles both the slope and the y-intercept."
    likely_errors:
      - id: q_error_sign
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar el valor absoluto de [[q]] para calcular la dirección de [[F_m]]. El signo de [[q]] es esencial para determinar el sentido de la deflexión magnética."
          en: "Common error: using the absolute value of [[q]] for calculating the direction of [[F_m]]. The sign of [[q]] is essential for determining the direction of magnetic deflection."
    next_step_rules:
      - id: q_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[q]] identificado, calcular ambas componentes de [[F_L]] y prestar atención especial al signo al determinar las direcciones de [[F_E]] y [[F_m]]."
          en: "With [[q]] identified, calculate both components of [[F_L]] and pay special attention to the sign when determining the directions of [[F_E]] and [[F_m]]."

graph_binding:
  leaf_id: fuerza-de-lorentz
  graph_type: Coord
  axes:
    x: v
    y: F_L
  semantic_mapping:
    x_variable: v
    y_variable: F_L
    slope_component: "q * B * sin_theta"
    intercept_component: "q * E"
  interpretation_link:
    target: F_L
    formula: fuerza_lorentz_total

mini_graph:
  enabled: true
  type: Coord
  variables:
    x: v
    y: F_L

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
