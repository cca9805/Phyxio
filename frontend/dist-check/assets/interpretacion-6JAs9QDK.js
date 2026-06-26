const e=`version: "2.0"
id: interpretacion-ondas-longitudinales
leaf_id: ondas-longitudinales

nombre:
  es: Interpretación de ondas longitudinales en fluidos
  en: Interpretation of longitudinal waves in fluids

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-fluidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-fluidos/ondas-longitudinales

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
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
    - velocidad_longitudinal_fluidos
    - longitud_onda_longitudinal
    - impedancia_acustica
  magnitudes:
    - v
    - B
    - rho
    - lambda
    - f
    - Z

global_context:
  physical_domain:
    es: "Propagación de ondas longitudinales mecánicas en medios fluidos continuos."
    en: "Propagation of mechanical longitudinal waves in continuous fluid media."
  axis_convention:
    es: "Eje x en la dirección de propagación de la onda; las magnitudes son escalares positivas."
    en: "x-axis along the direction of wave propagation; magnitudes are positive scalars."
  standard_assumptions:
    - "Medio continuo, homogéneo e isótropo"
    - "Compresión adiabática"
    - "Amplitud pequeña (régimen lineal)"
    - "Fluido no viscoso"
  standard_warnings:
    - "El modelo no contempla atenuación viscosa ni dispersión"
    - "No válido para ondas de choque ni amplitudes grandes"

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
      es: Lectura gráfica
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
  v:
    magnitude_type: speed
    semantic_role:
      es: "Rapidez de propagación de la onda longitudinal en el fluido."
      en: "Propagation speed of the longitudinal wave in the fluid."
    summary_rules:
      - id: v_summary_positive
        when: "v > 0"
        status: ok
        text:
          es: "[[v]] indica la rapidez con la que el frente de compresión avanza en el fluido. Un valor elevado depende de un módulo de compresibilidad [[B]] alto y una densidad [[rho]] baja."
          en: "[[v]] indicates the speed at which the compression front advances in the fluid. A high value depends on a large bulk modulus [[B]] and a low density [[rho]]."
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v]] indica la rapidez de fase de la onda longitudinal resultante del balance entre restauración elástica e inercia volumétrica."
          en: "[[v]] indicates the phase speed of the longitudinal wave resulting from the balance between elastic restoration and volumetric inertia."
    physical_reading_rules:
      - id: v_reading_fast
        when: "v > 1500"
        status: ok
        text:
          es: "La rapidez supera 1500 m/s, lo cual es típico de líquidos o sólidos donde [[B]] domina sobre [[rho]]. La onda transmite compresiones con gran eficiencia."
          en: "Speed exceeds 1500 m/s, typical of liquids or solids where [[B]] dominates over [[rho]]. The wave transmits compressions with great efficiency."
      - id: v_reading_moderate
        when: "v >= 300"
        status: ok
        text:
          es: "La rapidez está en el rango de cientos de metros por segundo, coherente con gases a temperatura ambiente. [[B]] y [[rho]] se equilibran en un régimen típico atmosférico."
          en: "Speed is in the range of hundreds of metres per second, consistent with gases at room temperature. [[B]] and [[rho]] balance in a typical atmospheric regime."
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "La rapidez obtenida depende del cociente entre [[B]] y [[rho]] del fluido en equilibrio."
          en: "The obtained speed depends on the ratio of [[B]] to [[rho]] of the fluid in equilibrium."
    coherence_rules:
      - id: v_coherence_low
        when: "v < 100"
        status: warning
        text:
          es: "La rapidez es inferior a 100 m/s, valor inusualmente bajo para fluidos comunes. Verificar que [[B]] y [[rho]] estén en unidades SI correctas."
          en: "Speed is below 100 m/s, unusually low for common fluids. Verify that [[B]] and [[rho]] are in correct SI units."
      - id: v_coherence_extreme
        when: "v > 10000"
        status: warning
        text:
          es: "La rapidez supera 10 000 m/s, valor que excede incluso metales comunes. Posible error de unidades o raíz cuadrada omitida."
          en: "Speed exceeds 10 000 m/s, a value that exceeds even common metals. Possible unit error or omitted square root."
      - id: v_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[v]] se encuentra dentro de un rango plausible para medios fluidos."
          en: "The value of [[v]] is within a plausible range for fluid media."
    model_validity_rules:
      - id: v_validity_linear
        when: "true"
        status: ok
        text:
          es: "El modelo lineal es válido mientras la amplitud de presión acústica sea inferior al 1 % de la presión estática. Para amplitudes mayores, la rapidez deja de ser constante y se requiere un modelo no lineal."
          en: "The linear model is valid as long as the acoustic pressure amplitude is below 1 % of the static pressure. For larger amplitudes, speed ceases to be constant and a nonlinear model is required."
    graph_rules:
      - id: v_graph_marker
        when: "true"
        status: ok
        text:
          es: "En la gráfica, [[v]] aparece como la pendiente de la relación posición-tiempo del frente de onda. Un valor mayor desplaza el frente más rápido."
          en: "On the graph, [[v]] appears as the slope of the wavefront position-time relationship. A larger value displaces the front faster."
    likely_errors:
      - id: v_error_sqrt
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar la raíz cuadrada y dividir directamente [[B]] entre [[rho]], obteniendo un resultado del orden de millones de m/s."
          en: "Common error: forgetting the square root and directly dividing [[B]] by [[rho]], obtaining a result on the order of millions of m/s."
    next_step_rules:
      - id: v_next_wavelength
        when: "true"
        status: ok
        text:
          es: "Con [[v]] conocida, calcular [[lambda]] dividiendo entre [[f]] para determinar la escala espacial de la onda."
          en: "With [[v]] known, calculate [[lambda]] by dividing by [[f]] to determine the spatial scale of the wave."

  B:
    magnitude_type: pressure
    semantic_role:
      es: "Módulo de compresibilidad volumétrica del fluido."
      en: "Bulk modulus of the fluid."
    summary_rules:
      - id: B_summary_positive
        when: "B > 0"
        status: ok
        text:
          es: "[[B]] indica la rigidez volumétrica del fluido. Un valor elevado significa que el medio resiste fuertemente la compresión y la onda se propaga rápidamente."
          en: "[[B]] indicates the volumetric stiffness of the fluid. A high value means the medium strongly resists compression and the wave propagates rapidly."
      - id: B_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B]] describe la capacidad de restauración elástica del medio, que domina directamente la rapidez de la onda longitudinal."
          en: "[[B]] describes the elastic restoration capacity of the medium, which directly dominates the longitudinal wave speed."
    physical_reading_rules:
      - id: B_reading_liquid
        when: "B > 1e9"
        status: ok
        text:
          es: "El módulo supera 1 GPa, lo que indica un líquido o un sólido. La restauración elástica es vigorosa y la perturbación se propaga con rapidez alta."
          en: "The modulus exceeds 1 GPa, indicating a liquid or solid. Elastic restoration is vigorous and the disturbance propagates at high speed."
      - id: B_reading_default
        when: "true"
        status: ok
        text:
          es: "El módulo depende de la naturaleza del fluido y sus condiciones termodinámicas (temperatura, presión)."
          en: "The modulus depends on the nature of the fluid and its thermodynamic conditions (temperature, pressure)."
    coherence_rules:
      - id: B_coherence_negative
        when: "B <= 0"
        status: error
        text:
          es: "El módulo de compresibilidad [[B]] debe ser positivo. Un valor nulo o negativo carece de sentido físico."
          en: "The bulk modulus [[B]] must be positive. A zero or negative value has no physical meaning."
      - id: B_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[B]] es positivo y coherente con un medio elástico real."
          en: "The value of [[B]] is positive and consistent with a real elastic medium."
    model_validity_rules:
      - id: B_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume [[B]] constante (medio homogéneo). Si [[B]] varía con la posición, la onda sufre refracción y el modelo uniforme deja de ser válido."
          en: "The model assumes constant [[B]] (homogeneous medium). If [[B]] varies with position, the wave undergoes refraction and the uniform model ceases to be valid."
    graph_rules:
      - id: B_graph_slider
        when: "true"
        status: ok
        text:
          es: "Modificar [[B]] en el deslizador de control desplaza la curva de rapidez: valores mayores elevan [[v]] de forma sublineal (raíz cuadrada)."
          en: "Modifying [[B]] on the control slider shifts the speed curve: larger values raise [[v]] sublinearly (square root)."
    likely_errors:
      - id: B_error_units
        when: "true"
        status: warning
        text:
          es: "Error frecuente: introducir [[B]] en kPa en lugar de Pa, lo que reduce el resultado de [[v]] por un factor de aproximadamente 31.6."
          en: "Common error: entering [[B]] in kPa instead of Pa, which reduces the result of [[v]] by a factor of approximately 31.6."
    next_step_rules:
      - id: B_next_speed
        when: "true"
        status: ok
        text:
          es: "Con [[B]] calculado, combinarlo con [[rho]] para obtener la rapidez [[v]] de la onda longitudinal."
          en: "With [[B]] calculated, combine it with [[rho]] to obtain the longitudinal wave speed [[v]]."

  rho:
    magnitude_type: density
    semantic_role:
      es: "Densidad de masa del fluido en equilibrio."
      en: "Mass density of the fluid in equilibrium."
    summary_rules:
      - id: rho_summary_positive
        when: "rho > 0"
        status: ok
        text:
          es: "[[rho]] indica la inercia por unidad de volumen del fluido. Un valor alto significa que el medio opone mayor resistencia al movimiento y la onda resultante avanza más lentamente."
          en: "[[rho]] indicates the inertia per unit volume of the fluid. A high value means the medium opposes greater resistance to motion and the resulting wave advances more slowly."
      - id: rho_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho]] describe la inercia volumétrica del medio, factor que disminuye la rapidez de propagación."
          en: "[[rho]] describes the volumetric inertia of the medium, a factor that decreases propagation speed."
    physical_reading_rules:
      - id: rho_reading_liquid
        when: "rho > 500"
        status: ok
        text:
          es: "La densidad supera 500 kg/m³, valor típico de líquidos. Aunque la inercia es mayor, el módulo [[B]] asociado suele ser lo bastante grande para mantener una rapidez elevada."
          en: "Density exceeds 500 kg/m³, typical of liquids. Although inertia is greater, the associated modulus [[B]] is usually large enough to maintain a high speed."
      - id: rho_reading_default
        when: "true"
        status: ok
        text:
          es: "La densidad del fluido depende de la composición, la temperatura y la presión del medio."
          en: "Fluid density depends on the composition, temperature, and pressure of the medium."
    coherence_rules:
      - id: rho_coherence_negative
        when: "rho <= 0"
        status: error
        text:
          es: "La densidad [[rho]] debe ser estrictamente positiva. Sin masa no hay inercia ni onda mecánica."
          en: "Density [[rho]] must be strictly positive. Without mass there is no inertia or mechanical wave."
      - id: rho_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[rho]] es positivo y coherente con un fluido real."
          en: "The value of [[rho]] is positive and consistent with a real fluid."
    model_validity_rules:
      - id: rho_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo supone [[rho]] uniforme. Si hay estratificación (variación vertical de densidad), la onda se desvía por refracción."
          en: "The model assumes uniform [[rho]]. If there is stratification (vertical density variation), the wave is deflected by refraction."
    graph_rules:
      - id: rho_graph_slider
        when: "true"
        status: ok
        text:
          es: "Aumentar [[rho]] en el control deslizante reduce [[v]] de forma sublineal (raíz cuadrada inversa) y desacelera la onda representada."
          en: "Increasing [[rho]] on the slider reduces [[v]] sublinearly (inverse square root) and decelerates the represented wave."
    likely_errors:
      - id: rho_error_units
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar g/cm³ en lugar de kg/m³, lo que introduce un factor de 1000 en el resultado."
          en: "Common error: using g/cm³ instead of kg/m³, which introduces a factor of 1000 in the result."
    next_step_rules:
      - id: rho_next_speed
        when: "true"
        status: ok
        text:
          es: "Con [[rho]] conocida, combinar con [[B]] para obtener [[v]], o con [[v]] para obtener [[Z]]."
          en: "With [[rho]] known, combine with [[B]] to obtain [[v]], or with [[v]] to obtain [[Z]]."

  lambda:
    magnitude_type: length
    semantic_role:
      es: "Longitud de onda de la perturbación longitudinal."
      en: "Wavelength of the longitudinal disturbance."
    summary_rules:
      - id: lambda_summary_positive
        when: "lambda > 0"
        status: ok
        text:
          es: "[[lambda]] indica la separación espacial entre compresiones sucesivas. Este resultado depende de la rapidez del medio y la frecuencia de la fuente."
          en: "[[lambda]] indicates the spatial separation between successive compressions. This result depends on the speed of the medium and the source frequency."
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] describe la escala espacial de la onda longitudinal resultante del cociente entre rapidez y frecuencia."
          en: "[[lambda]] describes the spatial scale of the longitudinal wave resulting from the ratio of speed to frequency."
    physical_reading_rules:
      - id: lambda_reading_small
        when: "lambda < 0.01"
        status: ok
        text:
          es: "La longitud de onda es inferior a 1 cm, habitual en frecuencias ultrasónicas. La resolución espacial del fenómeno ondulatorio es alta."
          en: "Wavelength is below 1 cm, common at ultrasonic frequencies. The spatial resolution of the wave phenomenon is high."
      - id: lambda_reading_default
        when: "true"
        status: ok
        text:
          es: "La longitud de onda depende de la rapidez [[v]] del medio y la frecuencia [[f]] impuesta por la fuente."
          en: "Wavelength depends on the speed [[v]] of the medium and the frequency [[f]] imposed by the source."
    coherence_rules:
      - id: lambda_coherence_extreme
        when: "lambda > 100"
        status: warning
        text:
          es: "La longitud de onda supera 100 m, valor extremadamente grande que sugiere una frecuencia muy baja o un error de cálculo."
          en: "Wavelength exceeds 100 m, an extremely large value suggesting a very low frequency or a calculation error."
      - id: lambda_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[lambda]] es coherente con un fenómeno ondulatorio mecánico."
          en: "The value of [[lambda]] is consistent with a mechanical wave phenomenon."
    model_validity_rules:
      - id: lambda_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido mientras [[lambda]] sea mucho mayor que el recorrido libre medio molecular. Para longitudes de onda extremadamente cortas, la hipótesis de medio continuo falla."
          en: "The model is valid as long as [[lambda]] is much greater than the molecular mean free path. For extremely short wavelengths, the continuous-medium hypothesis fails."
    graph_rules:
      - id: lambda_graph_period
        when: "true"
        status: ok
        text:
          es: "En la gráfica de desplazamiento frente a posición, [[lambda]] corresponde a la distancia entre dos compresiones consecutivas."
          en: "On the displacement versus position graph, [[lambda]] corresponds to the distance between two consecutive compressions."
    likely_errors:
      - id: lambda_error_frequency
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que cambiar [[f]] cambia [[v]]. En realidad, [[f]] solo modifica la escala espacial [[lambda]], no la rapidez del medio."
          en: "Common error: believing that changing [[f]] changes [[v]]. In reality, [[f]] only modifies the spatial scale [[lambda]], not the medium speed."
    next_step_rules:
      - id: lambda_next_resolution
        when: "true"
        status: ok
        text:
          es: "Comparar [[lambda]] con las dimensiones del obstáculo o detector para evaluar si habrá difracción significativa."
          en: "Compare [[lambda]] with obstacle or detector dimensions to evaluate whether significant diffraction will occur."

  f:
    magnitude_type: frequency
    semantic_role:
      es: "Frecuencia de oscilación impuesta por la fuente."
      en: "Oscillation frequency imposed by the source."
    summary_rules:
      - id: f_summary_positive
        when: "f > 0"
        status: ok
        text:
          es: "[[f]] indica el número de compresiones por segundo que la fuente genera. Este valor no depende del medio y permanece invariante al cruzar interfaces."
          en: "[[f]] indicates the number of compressions per second the source generates. This value does not depend on the medium and remains invariant when crossing interfaces."
      - id: f_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f]] describe el ritmo temporal de oscilación, propiedad intrínseca de la fuente que domina la escala espacial de la onda."
          en: "[[f]] describes the temporal oscillation rate, an intrinsic property of the source that dominates the spatial scale of the wave."
    physical_reading_rules:
      - id: f_reading_ultrasonic
        when: "f > 20000"
        status: ok
        text:
          es: "La frecuencia supera 20 kHz, situando la onda en el rango ultrasónico, fuera del umbral auditivo humano."
          en: "Frequency exceeds 20 kHz, placing the wave in the ultrasonic range, outside the human auditory threshold."
      - id: f_reading_default
        when: "true"
        status: ok
        text:
          es: "La frecuencia depende exclusivamente de las características del oscilador que genera la onda."
          en: "Frequency depends exclusively on the characteristics of the oscillator generating the wave."
    coherence_rules:
      - id: f_coherence_negative
        when: "f <= 0"
        status: error
        text:
          es: "La frecuencia [[f]] debe ser positiva. Un valor nulo o negativo no define una onda periódica."
          en: "Frequency [[f]] must be positive. A zero or negative value does not define a periodic wave."
      - id: f_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[f]] es positivo y define una oscilación periódica real."
          en: "The value of [[f]] is positive and defines a real periodic oscillation."
    model_validity_rules:
      - id: f_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume frecuencia constante (onda armónica). Para pulsos no armónicos, cada componente de frecuencia se analiza por separado."
          en: "The model assumes constant frequency (harmonic wave). For non-harmonic pulses, each frequency component is analysed separately."
    graph_rules:
      - id: f_graph_input
        when: "true"
        status: ok
        text:
          es: "En la gráfica, [[f]] controla la separación temporal entre compresiones sucesivas. Mayor frecuencia comprime las oscilaciones en el tiempo."
          en: "On the graph, [[f]] controls the temporal separation between successive compressions. Higher frequency compresses oscillations in time."
    likely_errors:
      - id: f_error_medium
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que [[f]] cambia al pasar la onda de un fluido a otro. La frecuencia la fija la fuente y no se altera al cruzar interfaces."
          en: "Common error: believing [[f]] changes when the wave passes from one fluid to another. Frequency is set by the source and does not change when crossing interfaces."
    next_step_rules:
      - id: f_next_wavelength
        when: "true"
        status: ok
        text:
          es: "Con [[f]] conocida y [[v]] del medio, calcular [[lambda]] para determinar la escala espacial."
          en: "With [[f]] known and [[v]] of the medium, calculate [[lambda]] to determine the spatial scale."

  Z:
    magnitude_type: acoustic_impedance
    semantic_role:
      es: "Impedancia acústica volumétrica del fluido."
      en: "Volumetric acoustic impedance of the fluid."
    summary_rules:
      - id: Z_summary_positive
        when: "Z > 0"
        status: ok
        text:
          es: "[[Z]] indica la oposición del fluido a la deformación por la onda de presión. Un valor elevado depende de la densidad [[rho]] y la rapidez [[v]] del medio."
          en: "[[Z]] indicates the fluid's opposition to deformation by the pressure wave. A high value depends on the density [[rho]] and speed [[v]] of the medium."
      - id: Z_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Z]] describe la resistencia acústica resultante del producto de inercia volumétrica y rapidez de propagación."
          en: "[[Z]] describes the acoustic resistance resulting from the product of volumetric inertia and propagation speed."
    physical_reading_rules:
      - id: Z_reading_water
        when: "Z > 1e6"
        status: ok
        text:
          es: "La impedancia supera 10⁶ kg/(m²·s), valor típico de líquidos. Las interfaces con gases de baja [[Z]] reflejarán la mayor parte de la energía acústica."
          en: "Impedance exceeds 10⁶ kg/(m²·s), typical of liquids. Interfaces with low-[[Z]] gases will reflect most of the acoustic energy."
      - id: Z_reading_default
        when: "true"
        status: ok
        text:
          es: "La impedancia depende de las propiedades mecánicas del fluido en equilibrio."
          en: "Impedance depends on the mechanical properties of the fluid in equilibrium."
    coherence_rules:
      - id: Z_coherence_low
        when: "Z < 1"
        status: warning
        text:
          es: "La impedancia es inferior a 1 kg/(m²·s), valor extremadamente bajo que sugiere un error en las unidades de [[rho]] o [[v]]."
          en: "Impedance is below 1 kg/(m²·s), an extremely low value suggesting an error in the units of [[rho]] or [[v]]."
      - id: Z_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[Z]] es coherente con un medio fluido real."
          en: "The value of [[Z]] is consistent with a real fluid medium."
    model_validity_rules:
      - id: Z_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo supone un fluido ideal sin pérdidas. [[Z]] real incluye una componente imaginaria cuando hay viscosidad, lo que la convierte en impedancia acústica compleja."
          en: "The model assumes a lossless ideal fluid. Real [[Z]] includes an imaginary component when viscosity is present, making it a complex acoustic impedance."
    graph_rules:
      - id: Z_graph_reflection
        when: "true"
        status: ok
        text:
          es: "En la gráfica, diferencias de [[Z]] en una interfaz se reflejan como amplitud de onda reflejada frente a transmitida."
          en: "On the graph, differences in [[Z]] at an interface are reflected as reflected wave amplitude versus transmitted."
    likely_errors:
      - id: Z_error_dissipation
        when: "true"
        status: warning
        text:
          es: "Error frecuente: interpretar [[Z]] como medida de absorción de energía. La impedancia mide oposición a la deformación, no disipación."
          en: "Common error: interpreting [[Z]] as a measure of energy absorption. Impedance measures opposition to deformation, not dissipation."
    next_step_rules:
      - id: Z_next_reflection
        when: "true"
        status: ok
        text:
          es: "Comparar [[Z]] del fluido con la impedancia del medio adyacente para estimar el coeficiente de reflexión en la interfaz."
          en: "Compare the fluid's [[Z]] with the impedance of the adjacent medium to estimate the reflection coefficient at the interface."

cross_checks:
  - id: speed_from_impedance
    check: "abs(Z - rho * v) < 0.01 * Z"
    message:
      es: "Verificar que [[Z]] coincida con el producto de [[rho]] y [[v]]."
      en: "Verify that [[Z]] matches the product of [[rho]] and [[v]]."

error_patterns:
  - id: sqrt_forgotten
    detect_when: "v > 50000"
    severity: critical
    message:
      es: "La rapidez es excesiva. Posiblemente se omitió la raíz cuadrada al calcular [[v]] a partir de [[B]] y [[rho]]."
      en: "Speed is excessive. The square root was possibly omitted when calculating [[v]] from [[B]] and [[rho]]."
  - id: unit_confusion_kPa
    detect_when: "v < 50"
    severity: warning
    message:
      es: "La rapidez es muy baja. Verificar que [[B]] esté en pascales, no en kilopascales."
      en: "Speed is very low. Verify that [[B]] is in pascals, not kilopascals."

graph_binding:
  type: Coord
  mapping:
    x_axis: position
    y_axis: pressure_displacement
    parameters: [B, rho, f]
    output: [v, lambda, Z]

mini_graph:
  enabled: true
  type: Coord
  description:
    es: "Perfil espacial de la onda longitudinal mostrando compresiones y rarefacciones."
    en: "Spatial profile of the longitudinal wave showing compressions and rarefactions."

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
