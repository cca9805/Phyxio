const e=`version: "2.0"
id: interp-campo-de-distribuciones
leaf_id: campo-de-distribuciones

nombre:
  es: Interpretación — Campo de distribuciones
  en: Interpretation — Field of Distributions

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electrostatica
  parent_id: campo-electrostatico
  ruta_relativa: fisica-clasica/electromagnetismo/electrostatica/campo-electrostatico/campo-de-distribuciones

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación física del campo de distribuciones
    en: Physical interpretation of the field of distributions
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
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - campo_elemento_diferencial
    - campo_hilo_infinito
    - campo_plano_infinito
    - campo_distribucion_volumetrica
  magnitudes:
    - E
    - dE
    - r_dist
    - lambda
    - sigma
    - rho_vol

global_context:
  physical_domain:
    es: Electrostática — campo eléctrico de distribuciones continuas de carga
    en: Electrostatics — electric field of continuous charge distributions
  axis_convention:
    es: El vector r apunta del elemento fuente dq al punto campo. El campo resultante E es la suma vectorial de todas las contribuciones dE.
    en: The vector r points from the source element dq to the field point. The resultant field E is the vectorial sum of all contributions dE.
  standard_assumptions:
    - Medio lineal homogéneo isótropo (permitividad relativa constante)
    - Las distribuciones son estáticas (sin variación temporal)
    - Los bordes de la distribución están lejos del punto de observación cuando se usan modelos de extensión infinita
  standard_warnings:
    - El principio de superposición exige sumar vectores, no escalares
    - Los modelos de hilo infinito y plano infinito solo son válidos lejos de los extremos

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen del campo resultante
      en: Resultant field summary
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
      es: Coherencia física
      en: Physical coherence
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

  E:
    magnitude_type: output_quantity
    semantic_role:
      es: Campo eléctrico resultante en el punto de observación. Es el objetivo del cálculo; su módulo y dirección determinan la fuerza sobre cualquier carga de prueba colocada en ese punto.
      en: Resultant electric field at the observation point. It is the goal of the computation; its magnitude and direction determine the force on any test charge placed at that point.
    summary_rules:
      - id: E_summary_finite
        when: "E > 0"
        status: ok
        text:
          es: "[[E]] es el campo resultante obtenido por superposición de todas las contribuciones [[dE]]. Su módulo resume la intensidad del campo; su dirección indica hacia dónde se desplazaría una carga positiva de prueba."
          en: "[[E]] is the resultant field obtained by superposing all contributions [[dE]]. Its magnitude summarises the field intensity; its direction indicates where a positive test charge would move."
      - id: E_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E]] describe el efecto colectivo de toda la distribución de carga en un punto del espacio. Depende de la geometría, la densidad de carga y la distancia al punto campo."
          en: "[[E]] describes the collective effect of the entire charge distribution at a point in space. It depends on the geometry, charge density, and distance to the field point."
    physical_reading_rules:
      - id: E_reading_1_over_r
        when: "geometry == wire"
        status: ok
        text:
          es: "Para un hilo, [[E]] decae como 1/r. Duplicar la distancia [[r_dist]] reduce el campo a la mitad. El decaimiento es más lento que en una carga puntual (1/r²)."
          en: "For a wire, [[E]] decays as 1/r. Doubling the distance [[r_dist]] halves the field. The decay is slower than for a point charge (1/r²)."
      - id: E_reading_uniform_plane
        when: "geometry == plane"
        status: ok
        text:
          es: "Para un plano infinito, [[E]] es constante a cualquier distancia: alejarse del plano no reduce el campo. Este rasgo es exclusivo de la simetría plana perfecta."
          en: "For an infinite plane, [[E]] is constant at any distance: moving away from the plane does not reduce the field. This feature is unique to perfect planar symmetry."
      - id: E_reading_default
        when: "true"
        status: ok
        text:
          es: "El módulo de [[E]] determina la magnitud de la fuerza por unidad de carga. La dirección del campo indica la dirección de la fuerza sobre cargas positivas."
          en: "The magnitude of [[E]] determines the force per unit charge. The field direction indicates the direction of force on positive charges."
    coherence_rules:
      - id: E_coherence_sign
        when: "E < 0 and charge_density > 0"
        status: error
        text:
          es: "El módulo de [[E]] no puede ser negativo. Un resultado negativo indica error de signo en la integración o en la dirección del vector r̂."
          en: "The magnitude of [[E]] cannot be negative. A negative result indicates a sign error in the integration or in the direction of the unit vector r̂."
      - id: E_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que la dirección del campo resultante [[E]] es coherente con la simetría de la distribución. Para distribuciones simétricas, las componentes perpendiculares al eje de simetría deben cancelarse."
          en: "Verify that the direction of the resultant field [[E]] is consistent with the symmetry of the distribution. For symmetric distributions, the components perpendicular to the symmetry axis should cancel."
    model_validity_rules:
      - id: E_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido mientras la distribución sea estática, el medio sea lineal y el punto campo esté fuera de la distribución fuente. Falla si hay efectos cuánticos, relativistas o si r → 0."
          en: "The model is valid as long as the distribution is static, the medium is linear, and the field point is outside the source distribution. It fails under quantum or relativistic effects, or if r → 0."
    graph_rules:
      - id: E_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[E]] frente a [[r_dist]], la forma de la curva identifica la geometría: horizontal para el plano (uniforme), hipérbola 1/r para el hilo, hipérbola 1/r² para la carga puntual."
          en: "In the [[E]] vs [[r_dist]] graph, the curve shape identifies the geometry: horizontal for the plane (uniform), 1/r hyperbola for the wire, 1/r² hyperbola for the point charge."
    likely_errors:
      - id: E_error_scalar_sum
        when: "true"
        status: warning
        text:
          es: "Error frecuente: sumar los módulos |dE| en lugar de las componentes vectoriales. El campo resultante requiere suma vectorial; los módulos solo pueden sumarse si todos los dE apuntan en la misma dirección."
          en: "Frequent error: summing the magnitudes |dE| instead of the vector components. The resultant field requires vector addition; magnitudes can only be summed if all dE point in the same direction."
    next_step_rules:
      - id: E_next_force
        when: "true"
        status: ok
        text:
          es: "Con [[E]] calculado, la fuerza sobre una carga q colocada en ese punto es F = q · E. Para obtener la energía potencial, integrar E a lo largo de una trayectoria hasta obtener el potencial V."
          en: "With [[E]] computed, the force on a charge q placed at that point is F = q · E. To obtain the potential energy, integrate E along a path to get the potential V."

  dE:
    magnitude_type: auxiliary
    semantic_role:
      es: Contribución diferencial de campo de un único elemento de carga. Es el integrando; su correcto planteamiento vectorial es la clave del método de integración directa.
      en: Differential field contribution of a single charge element. It is the integrand; its correct vectorial formulation is the key to the direct integration method.
    summary_rules:
      - id: dE_summary_default
        when: "true"
        status: ok
        text:
          es: "[[dE]] es la pieza elemental del cálculo del campo. Describe cuánto contribuye cada pequeño trozo de la distribución al campo en el punto de interés. La dirección de [[dE]] es radial desde el elemento dq."
          en: "[[dE]] is the elementary piece of the field computation. It describes how much each small piece of the distribution contributes to the field at the point of interest. The direction of [[dE]] is radial from the element dq."
    physical_reading_rules:
      - id: dE_reading_dominant
        when: "true"
        status: ok
        text:
          es: "Los elementos dq más cercanos al punto campo dominan la integral porque [[dE]] crece con 1/r². Los elementos lejanos contribuyen poco aunque sean muy numerosos."
          en: "Charge elements dq closest to the field point dominate the integral because [[dE]] grows with 1/r². Distant elements contribute little even if they are numerous."
    coherence_rules:
      - id: dE_coherence_direction
        when: "true"
        status: ok
        text:
          es: "La dirección de [[dE]] debe seguir siempre al vector unitario r̂ (del elemento al punto campo si dq > 0). Un error de signo en r̂ invierte el sentido de la contribución."
          en: "The direction of [[dE]] must always follow the unit vector r̂ (from element to field point if dq > 0). A sign error in r̂ reverses the sense of the contribution."
    model_validity_rules:
      - id: dE_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo diferencial es válido mientras el elemento dq sea suficientemente pequeño para tratarse como puntual. En distribuciones discretas con cargas reales, el sumatorio reemplaza a la integral."
          en: "The differential model is valid as long as the element dq is small enough to be treated as a point. In discrete distributions with real charges, the sum replaces the integral."
    graph_rules:
      - id: dE_graph_default
        when: "true"
        status: ok
        text:
          es: "Representar los vectores [[dE]] como flechas sobre la distribución ayuda a identificar por simetría qué componentes se cancelan antes de integrar."
          en: "Representing [[dE]] vectors as arrows on the distribution helps identify by symmetry which components cancel before integrating."
    likely_errors:
      - id: dE_error_no_vector
        when: "true"
        status: warning
        text:
          es: "Error frecuente: escribir dE como escalar y multiplicar por la dirección solo al final. La dirección debe incluirse desde el inicio para descomponer correctamente en componentes antes de integrar."
          en: "Frequent error: writing dE as a scalar and multiplying by the direction only at the end. The direction must be included from the start to correctly decompose into components before integrating."
    next_step_rules:
      - id: dE_next_integrate
        when: "true"
        status: ok
        text:
          es: "Descomponer [[dE]] en componentes cartesianas o cilíndricas, cancelar por simetría las que sean nulas, e integrar solo las supervivientes para obtener [[E]]."
          en: "Decompose [[dE]] into Cartesian or cylindrical components, cancel by symmetry those that are zero, and integrate only the surviving ones to obtain [[E]]."

  r_dist:
    magnitude_type: geometric_parameter
    semantic_role:
      es: Distancia del elemento fuente dq al punto campo. Es el parámetro geométrico que controla la intensidad de cada contribución dE; aparece al cuadrado en el denominador.
      en: Distance from the source element dq to the field point. It is the geometric parameter controlling the intensity of each contribution dE; it appears squared in the denominator.
    summary_rules:
      - id: rdist_summary_default
        when: "true"
        status: ok
        text:
          es: "[[r_dist]] determina qué tan fuerte contribuye cada elemento al campo. Los elementos más cercanos (menor [[r_dist]]) tienen mayor peso en la integral."
          en: "[[r_dist]] determines how strongly each element contributes to the field. Closer elements (smaller [[r_dist]]) carry more weight in the integral."
      - id: rdist_summary_positive
        when: "r_dist > 0"
        status: ok
        text:
          es: "[[r_dist]] > 0 es la condición física necesaria para que el modelo sea válido. En coordenadas convenientes, expresar [[r_dist]] en función de la variable de integración es el primer paso del cálculo."
          en: "[[r_dist]] > 0 is the necessary physical condition for the model to be valid. In convenient coordinates, expressing [[r_dist]] as a function of the integration variable is the first step of the computation."
    physical_reading_rules:
      - id: rdist_reading_default
        when: "true"
        status: ok
        text:
          es: "Duplicar [[r_dist]] reduce la contribución [[dE]] a un cuarto (ley de cuadrado inverso). La elección del sistema de coordenadas debe hacer que [[r_dist]] sea fácil de expresar algebraicamente."
          en: "Doubling [[r_dist]] reduces the contribution [[dE]] to one quarter (inverse square law). The choice of coordinate system should make [[r_dist]] easy to express algebraically."
    coherence_rules:
      - id: rdist_coherence_positive
        when: "r_dist <= 0"
        status: error
        text:
          es: "[[r_dist]] debe ser estrictamente positivo. Un valor nulo o negativo indica un error en la parametrización geométrica del problema."
          en: "[[r_dist]] must be strictly positive. A zero or negative value indicates an error in the geometric parameterisation of the problem."
      - id: rdist_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que la expresión de [[r_dist]] en función de la variable de integración sea correcta antes de sustituir en el integrando."
          en: "Verify that the expression of [[r_dist]] as a function of the integration variable is correct before substituting into the integrand."
    model_validity_rules:
      - id: rdist_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de distribución continua es válido mientras la escala de [[r_dist]] sea mucho mayor que la distancia interatómica. A escala nanométrica, los efectos cuánticos dominan."
          en: "The continuous distribution model is valid as long as the scale of [[r_dist]] is much larger than the interatomic distance. At the nanometre scale, quantum effects dominate."
    graph_rules:
      - id: rdist_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[E]] vs [[r_dist]], la variable del eje horizontal es [[r_dist]]. La pendiente de la curva cambia según la geometría: plana para plano infinito, decreciente para hilo o carga puntual."
          en: "In the [[E]] vs [[r_dist]] graph, the horizontal axis variable is [[r_dist]]. The slope of the curve changes with geometry: flat for infinite plane, decreasing for wire or point charge."
    likely_errors:
      - id: rdist_error_origin
        when: "true"
        status: warning
        text:
          es: "Error frecuente: tomar [[r_dist]] como la distancia al origen en lugar de la distancia del elemento fuente al punto campo cuando el origen no coincide con la fuente."
          en: "Frequent error: taking [[r_dist]] as the distance to the origin instead of the distance from the source element to the field point when the origin does not coincide with the source."
    next_step_rules:
      - id: rdist_next_parametrize
        when: "true"
        status: ok
        text:
          es: "Expresar [[r_dist]] en función de la variable de integración (longitud de arco, ángulo, coordenada axial) para convertir el integrando en una función integrable analítica o numéricamente."
          en: "Express [[r_dist]] as a function of the integration variable (arc length, angle, axial coordinate) to convert the integrand into an analytically or numerically integrable function."

  lambda:
    magnitude_type: input_parameter
    semantic_role:
      es: Densidad lineal de carga. Define la cantidad de carga por unidad de longitud en distribuciones lineales. Determina la escala del campo resultante.
      en: Linear charge density. Defines the charge per unit length in linear distributions. It determines the scale of the resultant field.
    summary_rules:
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] caracteriza cuánta carga hay por metro de distribución lineal. Un valor mayor implica mayor intensidad de campo [[E]] a cualquier distancia [[r_dist]] fija."
          en: "[[lambda]] characterises how much charge exists per metre of linear distribution. A larger value implies greater field intensity [[E]] at any fixed distance [[r_dist]]."
    physical_reading_rules:
      - id: lambda_reading_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] se obtiene experimentalmente midiendo el campo [[E]] a una distancia radial [[r_dist]] conocida de un hilo largo. La relación lineal E = λ/(2πε₀r) permite despejar λ."
          en: "[[lambda]] is obtained experimentally by measuring the field [[E]] at a known radial distance [[r_dist]] from a long wire. The linear relation E = λ/(2πε₀r) allows solving for λ."
    coherence_rules:
      - id: lambda_coherence_units
        when: "true"
        status: ok
        text:
          es: "Verificar que [[lambda]] tenga unidades C/m. Usar C/m² o C/m³ para distribuciones lineales es el error de tipo más frecuente en problemas de examen."
          en: "Verify that [[lambda]] has units C/m. Using C/m² or C/m³ for linear distributions is the most frequent type error in exam problems."
    model_validity_rules:
      - id: lambda_validity_default
        when: "true"
        status: ok
        text:
          es: "La fórmula del hilo infinito con [[lambda]] constante es válida mientras la densidad sea uniforme y el punto campo esté lejos de los extremos del hilo."
          en: "The infinite wire formula with constant [[lambda]] is valid as long as the density is uniform and the field point is far from the wire ends."
    graph_rules:
      - id: lambda_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[E]] vs [[r_dist]] para un hilo, [[lambda]] aparece como el factor de escala de la hipérbola 1/r. Mayor [[lambda]] desplaza la curva hacia arriba sin cambiar su forma."
          en: "In the [[E]] vs [[r_dist]] graph for a wire, [[lambda]] appears as the scale factor of the 1/r hyperbola. Larger [[lambda]] shifts the curve upward without changing its shape."
    likely_errors:
      - id: lambda_error_type
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[sigma]] (C/m²) en la fórmula de hilo que requiere [[lambda]] (C/m). Esto cambia las unidades del resultado y produce un valor erróneo."
          en: "Frequent error: using [[sigma]] (C/m²) in the wire formula that requires [[lambda]] (C/m). This changes the units of the result and produces an incorrect value."
    next_step_rules:
      - id: lambda_next_gauss
        when: "true"
        status: ok
        text:
          es: "Con [[lambda]] conocida, también se puede aplicar la ley de Gauss con una superficie cilíndrica para obtener [[E]] de forma más directa en problemas con simetría cilíndrica perfecta."
          en: "With [[lambda]] known, Gauss's law with a cylindrical surface can also be applied to obtain [[E]] more directly in problems with perfect cylindrical symmetry."

  sigma:
    magnitude_type: input_parameter
    semantic_role:
      es: Densidad superficial de carga. Define la cantidad de carga por unidad de área en distribuciones superficiales. Determina el campo uniforme de un plano infinito.
      en: Surface charge density. Defines the charge per unit area in surface distributions. It determines the uniform field of an infinite plane.
    summary_rules:
      - id: sigma_summary_default
        when: "true"
        status: ok
        text:
          es: "[[sigma]] caracteriza cuánta carga hay por metro cuadrado de distribución superficial. Para un plano infinito, [[E]] = σ/(2ε₀) es constante en todo el espacio a ambos lados del plano."
          en: "[[sigma]] characterises how much charge exists per square metre of surface distribution. For an infinite plane, [[E]] = σ/(2ε₀) is constant throughout space on both sides of the plane."
    physical_reading_rules:
      - id: sigma_reading_default
        when: "true"
        status: ok
        text:
          es: "El campo de un plano con [[sigma]] no depende de la distancia: alejarse del plano no reduce [[E]]. Esto lo diferencia radicalmente del campo de un hilo o una carga puntual."
          en: "The field of a plane with [[sigma]] does not depend on distance: moving away from the plane does not reduce [[E]]. This radically differentiates it from the field of a wire or point charge."
    coherence_rules:
      - id: sigma_coherence_units
        when: "true"
        status: ok
        text:
          es: "[[sigma]] debe tener unidades C/m². Usar C/m (lineal) para una distribución superficial es un error de tipo que aparece con frecuencia en cálculos manuales."
          en: "[[sigma]] must have units C/m². Using C/m (linear) for a surface distribution is a type error that appears frequently in manual calculations."
    model_validity_rules:
      - id: sigma_validity_default
        when: "true"
        status: ok
        text:
          es: "La independencia del campo respecto a la distancia solo se da para el plano ideal infinito con [[sigma]] uniforme. Para planos finitos, el campo varía y el resultado numérico difiere."
          en: "The distance-independence of the field only holds for the ideal infinite plane with uniform [[sigma]]. For finite planes, the field varies and the numerical result differs."
    graph_rules:
      - id: sigma_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[E]] vs [[r_dist]] para un plano infinito, la curva es una recta horizontal de valor [[sigma]]/(2ε₀). Mayor [[sigma]] eleva la recta sin inclinarla."
          en: "In the [[E]] vs [[r_dist]] graph for an infinite plane, the curve is a horizontal line of value [[sigma]]/(2ε₀). Larger [[sigma]] raises the line without tilting it."
    likely_errors:
      - id: sigma_error_factor2
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar el factor 2 en el denominador (E = σ/ε₀ en lugar de E = σ/(2ε₀)). El factor 2 proviene de que el campo apunta a ambos lados del plano; para un condensador de dos placas, el campo entre ellas sí vale σ/ε₀."
          en: "Frequent error: forgetting the factor 2 in the denominator (E = σ/ε₀ instead of E = σ/(2ε₀)). The factor 2 arises because the field points to both sides of the plane; for a two-plate capacitor, the field between the plates is indeed σ/ε₀."
    next_step_rules:
      - id: sigma_next_capacitor
        when: "true"
        status: ok
        text:
          es: "Con dos planos paralelos de densidades +[[sigma]] y −[[sigma]], los campos se suman entre las placas y se cancelan fuera: E_interior = [[sigma]]/ε₀. Ese es el principio del condensador de placas paralelas."
          en: "With two parallel planes of densities +[[sigma]] and −[[sigma]], the fields add between the plates and cancel outside: E_interior = [[sigma]]/ε₀. That is the principle of the parallel-plate capacitor."

  rho_vol:
    magnitude_type: input_parameter
    semantic_role:
      es: Densidad volumétrica de carga. Define la cantidad de carga por unidad de volumen en distribuciones tridimensionales. Es el dato de entrada para distribuciones esféricas, cilíndricas o arbitrarias.
      en: Volume charge density. Defines the charge per unit volume in three-dimensional distributions. It is the input for spherical, cylindrical, or arbitrary distributions.
    summary_rules:
      - id: rho_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_vol]] caracteriza cuánta carga hay por metro cúbico de distribución volumétrica. Para distribuciones con simetría esférica o cilíndrica, la ley de Gauss es generalmente más eficiente que la integración directa de [[dE]]."
          en: "[[rho_vol]] characterises how much charge exists per cubic metre of volumetric distribution. For distributions with spherical or cylindrical symmetry, Gauss's law is generally more efficient than direct integration of [[dE]]."
    physical_reading_rules:
      - id: rho_reading_default
        when: "true"
        status: ok
        text:
          es: "En el interior de una distribución volumétrica esférica uniforme con [[rho_vol]], el campo crece linealmente con r (no sigue la ley 1/r²). Fuera, el campo equivale al de una carga puntual con la carga total."
          en: "Inside a uniform spherical volumetric distribution with [[rho_vol]], the field grows linearly with r (it does not follow the 1/r² law). Outside, the field is equivalent to that of a point charge with the total charge."
    coherence_rules:
      - id: rho_coherence_units
        when: "true"
        status: ok
        text:
          es: "[[rho_vol]] debe tener unidades C/m³. Confundirlo con [[sigma]] (C/m²) o [[lambda]] (C/m) produce un error dimensional inmediatamente detectable."
          en: "[[rho_vol]] must have units C/m³. Confusing it with [[sigma]] (C/m²) or [[lambda]] (C/m) produces a dimensional error immediately detectable."
    model_validity_rules:
      - id: rho_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de distribución continua con [[rho_vol]] es válido mientras la escala de observación sea mucho mayor que la distancia interatómica. A escala microscópica, la descripción continua falla."
          en: "The continuous distribution model with [[rho_vol]] is valid as long as the observation scale is much larger than the interatomic distance. At the microscopic scale, the continuous description fails."
    graph_rules:
      - id: rho_graph_default
        when: "true"
        status: ok
        text:
          es: "Para una esfera uniforme de radio R, el gráfico [[E]] vs [[r_dist]] muestra dos regímenes: lineal para r < R (proporcional a [[rho_vol]]·r) y 1/r² para r > R."
          en: "For a uniform sphere of radius R, the [[E]] vs [[r_dist]] graph shows two regimes: linear for r < R (proportional to [[rho_vol]]·r) and 1/r² for r > R."
    likely_errors:
      - id: rho_error_gauss
        when: "true"
        status: warning
        text:
          es: "Error frecuente: aplicar la ley de Gauss con una superficie esférica de radio r fuera de la esfera y usar [[rho_vol]] en lugar de la carga total encerrada Q = (4/3)π r³ [[rho_vol]] con el radio correcto."
          en: "Frequent error: applying Gauss's law with a spherical surface of radius r outside the sphere and using [[rho_vol]] instead of the enclosed total charge Q = (4/3)π r³ [[rho_vol]] with the correct radius."
    next_step_rules:
      - id: rho_next_gauss
        when: "true"
        status: ok
        text:
          es: "Con [[rho_vol]] conocida y simetría esférica, usar la ley de Gauss: la carga encerrada por una esfera de radio r es Q_enc = (4/3)π r³ [[rho_vol]], y el campo es E = Q_enc/(4πε₀r²)."
          en: "With [[rho_vol]] known and spherical symmetry, use Gauss's law: the charge enclosed by a sphere of radius r is Q_enc = (4/3)π r³ [[rho_vol]], and the field is E = Q_enc/(4πε₀r²)."

cross_checks:
  - check: "E_hilo = lambda / (2 * pi * epsilon_0 * r_dist)"
    message:
      es: Verificar que el resultado de [[E]] para el hilo coincide con [[lambda]]/(2πε₀[[r_dist]]).
      en: Verify that the result of [[E]] for the wire matches [[lambda]]/(2πε₀[[r_dist]]).
  - check: "E_plano = sigma / (2 * epsilon_0)"
    message:
      es: Verificar que el resultado de [[E]] para el plano coincide con [[sigma]]/(2ε₀) y no varía con la distancia.
      en: Verify that the result of [[E]] for the plane matches [[sigma]]/(2ε₀) and does not vary with distance.

error_patterns:
  - id: suma_escalar
    description:
      es: Sumar módulos |dE| en lugar de componentes vectoriales antes de obtener |E|.
      en: Summing magnitudes |dE| instead of vector components before obtaining |E|.
  - id: factor_2_plano
    description:
      es: Omitir el factor 2 en el denominador del campo de un solo plano infinito.
      en: Omitting the factor 2 in the denominator of the field of a single infinite plane.
  - id: tipo_densidad
    description:
      es: Confundir el tipo de densidad (λ, σ, ρ) y la variable de integración correspondiente.
      en: Confusing the type of density (λ, σ, ρ) and the corresponding integration variable.

graph_binding:
  preferred_graph_type: Coord
  target_variable: E
  control_variable: r_dist

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
