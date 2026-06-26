const e=`version: "5.0"\r
id: interp-ondas-superficiales\r
leaf_id: ondas-superficiales\r
\r
nombre:\r
  es: Interpretacion de ondas superficiales\r
  en: Surface waves interpretation\r
\r
scope:\r
  area: fisica-clasica\r
  bloque: ondas\r
  subbloque: ondas-mecanicas\r
  parent_id: ondas-en-fluidos\r
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-fluidos/ondas-superficiales\r
  targets:\r
    - v\r
    - k\r
    - g\r
    - sigma\r
    - rho\r
\r
ui:\r
  enabled: true\r
  display_modes:\r
    calculator_inline: true\r
    graph_inline: true\r
    dedicated_tab: true\r
    modal: false\r
  labels:\r
    es: Interpretacion\r
    en: Interpretation\r
  priority_order:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
  inline_limits:\r
    max_sections: 2\r
    priority:\r
      - summary\r
      - likely_errors\r
\r
dependencies:\r
  formulas:\r
    - rapidez_gravedad\r
    - rapidez_capilares\r
    - rapidez_combinada\r
  magnitudes:\r
    - v\r
    - g\r
    - sigma\r
    - rho\r
    - lambda\r
    - k\r
    - f\r
  requires_formulas: true\r
  requires_magnitudes: true\r
  supports_graph_binding: true\r
\r
global_context:\r
  physical_domain:\r
    es: "Ondas confinadas a la interfaz aire-liquido, donde gravedad y tension superficial compiten como fuerzas restauradoras."\r
    en: "Waves confined to the air-liquid interface, where gravity and surface tension compete as restoring forces."\r
  axis_convention:\r
    es: "Eje x horizontal en la direccion de propagacion; eje z vertical positivo hacia arriba."\r
    en: "Horizontal x-axis in the propagation direction; vertical z-axis positive upward."\r
  standard_assumptions:\r
    - "Agua profunda: profundidad mucho mayor que lambda"\r
    - "Amplitud pequeña: ondas lineales sin efectos no lineales"\r
    - "Fluido incompresible e irrotacional"\r
  standard_warnings:\r
    - "Esta interpretacion asume regimen de agua profunda; en aguas someras la formula cambia."\r
    - "La viscosidad produce amortiguamiento no contemplado en estas formulas."\r
\r
result_blocks:\r
  summary:\r
    enabled: true\r
    order: 1\r
    title:\r
      es: Resumen del resultado\r
      en: Result summary\r
  physical_reading:\r
    enabled: true\r
    order: 2\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    enabled: true\r
    order: 3\r
    title:\r
      es: Coherencia fisica\r
      en: Physical coherence\r
  model_validity:\r
    enabled: true\r
    order: 4\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    enabled: true\r
    order: 5\r
    title:\r
      es: Lectura del grafico\r
      en: Graph reading\r
  likely_errors:\r
    enabled: true\r
    order: 6\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    enabled: true\r
    order: 7\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
\r
targets:\r
  v:\r
    magnitude_type: scalar_unsigned\r
    semantic_role:\r
      es: "Resultado principal que indica la celeridad de propagacion de la onda superficial."\r
      en: "Main result indicating the surface wave propagation celerity."\r
    summary_rules:\r
      - id: v_summary_normal\r
        when: "v > 0 && v <= 20"\r
        status: ok\r
        text:\r
          es: "[[v]] indica la rapidez con la que la cresta de la onda superficial avanza en la interfaz. Un valor entre 0.2 y 10 m/s es tipico para agua bajo condiciones normales."\r
          en: "[[v]] indicates the speed at which the surface wave crest advances at the interface. A value between 0.2 and 10 m/s is typical for water under normal conditions."\r
      - id: v_summary_high\r
        when: "v > 20"\r
        status: warning\r
        text:\r
          es: "[[v]] elevada; verificar que [[lambda]] y [[k]] esten en unidades SI correctas y que se aplique la formula adecuada al regimen."\r
          en: "[[v]] is high; verify that [[lambda]] and [[k]] are in correct SI units and that the appropriate regime formula is applied."\r
      - id: v_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[v]] resume la celeridad de la onda superficial; depende del regimen dominante y describe como se propaga la perturbacion de la interfaz."\r
          en: "[[v]] summarises the surface wave celerity; it depends on the dominant regime and describes how the interface disturbance propagates."\r
    physical_reading_rules:\r
      - id: v_reading_gravity\r
        when: "k < 3.7"\r
        status: ok\r
        text:\r
          es: "Con [[k]] pequeño, la gravedad domina: la onda superficial se comporta como una ola marina larga. [[v]] aumenta al disminuir [[k]], es decir, ondas mas largas viajan mas rapido."\r
          en: "With small [[k]], gravity dominates: the surface wave behaves as a long ocean wave. [[v]] increases as [[k]] decreases, meaning longer waves travel faster."\r
      - id: v_reading_capillary\r
        when: "k > 3.7"\r
        status: ok\r
        text:\r
          es: "Con [[k]] elevado, la tension superficial domina: la onda es capilar. [[v]] aumenta al aumentar [[k]], es decir, ondas mas cortas viajan mas rapido en este regimen."\r
          en: "With large [[k]], surface tension dominates: the wave is capillary. [[v]] increases as [[k]] increases, meaning shorter waves travel faster in this regime."\r
      - id: v_reading_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[v]] depende de la competencia entre restauracion gravitatoria y capilar segun la escala espacial de la onda."\r
          en: "[[v]] depends on the competition between gravitational and capillary restoration according to the spatial scale of the wave."\r
    coherence_rules:\r
      - id: v_coherence_positive\r
        when: "v > 0"\r
        status: ok\r
        text:\r
          es: "[[v]] positiva: coherente. La rapidez de propagacion es siempre positiva por definicion."\r
          en: "Positive [[v]]: coherent. Propagation speed is always positive by definition."\r
      - id: v_coherence_zero\r
        when: "v <= 0"\r
        status: error\r
        text:\r
          es: "[[v]] nula o negativa: incoherente fisicamente. Verificar los valores de entrada de [[g]], [[sigma]], [[rho]] y [[k]]."\r
          en: "Zero or negative [[v]]: physically incoherent. Check input values of [[g]], [[sigma]], [[rho]] and [[k]]."\r
      - id: v_coherence_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Verificar que [[v]] sea consistente con el regimen esperado segun [[lambda]]."\r
          en: "Verify that [[v]] is consistent with the expected regime according to [[lambda]]."\r
    model_validity_rules:\r
      - id: v_validity_deep\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "La formula es valida en agua profunda (profundidad mayor que la mitad de [[lambda]]). En aguas someras, la formula incluye una correccion con tangente hiperbolica."\r
          en: "The formula is valid in deep water (depth greater than half of [[lambda]]). In shallow water, the formula includes a correction with hyperbolic tangent."\r
      - id: v_validity_linear\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "El modelo lineal asume amplitudes pequeñas; olas de gran amplitud exhiben efectos no lineales que esta formula no captura."\r
          en: "The linear model assumes small amplitudes; large-amplitude waves exhibit nonlinear effects that this formula does not capture."\r
    graph_rules:\r
      - id: v_graph_curve\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En la curva de dispersion v vs k, el valor calculado de [[v]] debe ubicarse sobre la rama correspondiente al regimen: decreciente para gravedad, creciente para capilares."\r
          en: "On the dispersion curve v vs k, the computed [[v]] should lie on the corresponding regime branch: decreasing for gravity, increasing for capillaries."\r
    likely_errors:\r
      - id: v_error_units\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error frecuente: usar [[lambda]] en cm en lugar de m al calcular [[k]]; produce [[v]] cien veces mayor o menor de lo esperado."\r
          en: "Frequent error: using [[lambda]] in cm instead of m when computing [[k]]; produces [[v]] a hundred times larger or smaller than expected."\r
      - id: v_error_regime\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error frecuente: aplicar la formula gravitatoria a ondas capilares (milimetros) o la formula capilar a olas marinas (metros); usar siempre [[rapidez_combinada]] para verificar."\r
          en: "Frequent error: applying the gravity formula to capillary waves (millimetres) or the capillary formula to ocean waves (metres); always use [[rapidez_combinada]] to verify."\r
    next_step_rules:\r
      - id: v_next_regime\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Verificar el regimen dominante comparando los terminos gravitatorio y capilar; si son similares en magnitud, usar la formula combinada completa."\r
          en: "Verify the dominant regime by comparing gravitational and capillary terms; if they are similar in magnitude, use the full combined formula."\r
\r
  k:\r
    magnitude_type: scalar_unsigned\r
    semantic_role:\r
      es: "Variable espacial que determina el regimen de dispersion de la onda superficial."\r
      en: "Spatial variable determining the dispersion regime of the surface wave."\r
    summary_rules:\r
      - id: k_summary_small\r
        when: "k < 1"\r
        status: ok\r
        text:\r
          es: "[[k]] pequeño indica onda larga (metrica o hectometrica): el regimen gravitatorio domina y [[v]] disminuye al aumentar [[k]]."\r
          en: "Small [[k]] indicates a long wave (metric or hectometric): the gravity regime dominates and [[v]] decreases as [[k]] increases."\r
      - id: k_summary_large\r
        when: "k > 370"\r
        status: ok\r
        text:\r
          es: "[[k]] grande indica onda capilar (milimetrica): la tension superficial domina y [[v]] aumenta al crecer [[k]]."\r
          en: "Large [[k]] indicates capillary wave (millimetric): surface tension dominates and [[v]] increases as [[k]] grows."\r
      - id: k_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[k]] resume la escala espacial de la onda y determina cual fuerza restauradora domina en la relacion de dispersion."\r
          en: "[[k]] summarises the spatial scale of the wave and determines which restoring force dominates in the dispersion relation."\r
    physical_reading_rules:\r
      - id: k_reading_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[k]] es el numero de oscilaciones espaciales por metro. Un valor grande significa onda corta; un valor pequeño significa onda larga. El regimen fisico depende de si [[g]]/k supera o no a [[sigma]]k/[[rho]]."\r
          en: "[[k]] is the number of spatial oscillations per metre. A large value means short wave; a small value means long wave. The physical regime depends on whether [[g]]/k exceeds [[sigma]]k/[[rho]] or not."\r
    coherence_rules:\r
      - id: k_coherence_positive\r
        when: "k > 0"\r
        status: ok\r
        text:\r
          es: "[[k]] positivo: coherente. El numero de onda es siempre positivo."\r
          en: "Positive [[k]]: coherent. Wavenumber is always positive."\r
      - id: k_coherence_zero\r
        when: "k <= 0"\r
        status: error\r
        text:\r
          es: "[[k]] nulo o negativo: incoherente. Verificar la conversion desde [[lambda]]."\r
          en: "Zero or negative [[k]]: incoherent. Check conversion from [[lambda]]."\r
      - id: k_coherence_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[k]] debe ser consistente con la longitud de onda observada en el experimento."\r
          en: "[[k]] must be consistent with the wavelength observed in the experiment."\r
    model_validity_rules:\r
      - id: k_validity_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[k]] es valido mientras la longitud de onda sea mayor que la escala molecular del liquido (nanometros). Para [[lambda]] mayor de 0.1 mm, el modelo continuo aplica plenamente."\r
          en: "[[k]] is valid as long as the wavelength is larger than the molecular scale of the liquid (nanometres). For [[lambda]] greater than 0.1 mm, the continuum model applies fully."\r
    graph_rules:\r
      - id: k_graph_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En el grafico de dispersion, [[k]] marca la posicion horizontal; a la izquierda del minimo de velocidad predomina el regimen gravitatorio, a la derecha el capilar."\r
          en: "On the dispersion graph, [[k]] marks the horizontal position; to the left of the speed minimum the gravity regime predominates, to the right the capillary regime."\r
    likely_errors:\r
      - id: k_error_conversion\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error clasico: olvidar el factor 2π al convertir [[lambda]] a [[k]]; la relacion correcta es k igual a dos pi dividido entre [[lambda]]."\r
          en: "Classic error: forgetting the 2π factor when converting [[lambda]] to [[k]]; the correct relation is k equal to two pi divided by [[lambda]]."\r
    next_step_rules:\r
      - id: k_next_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Con [[k]] calculado, comparar los terminos gravitatorio y capilar para elegir la formula mas precisa para el regimen."\r
          en: "With [[k]] computed, compare the gravitational and capillary terms to choose the most accurate formula for the regime."\r
\r
  g:\r
    magnitude_type: scalar_unsigned\r
    semantic_role:\r
      es: "Parametro de fuerza restauradora gravitatoria; valor practicamente constante en la superficie terrestre."\r
      en: "Gravitational restoring force parameter; practically constant value on Earth's surface."\r
    summary_rules:\r
      - id: g_summary_standard\r
        when: "g >= 9.5 && g <= 10.0"\r
        status: ok\r
        text:\r
          es: "[[g]] en rango terrestre estandar. Indica que la fuerza restauradora gravitatoria opera normalmente; domina la restauracion de ondas largas."\r
          en: "[[g]] in standard terrestrial range. Indicates that the gravitational restoring force operates normally; it dominates the restoration of long waves."\r
      - id: g_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[g]] resume la fuerza restauradora gravitatoria que depende del campo gravitatorio local. Un valor de 9.81 m/s cuadrado es el estandar para la superficie terrestre."\r
          en: "[[g]] summarises the gravitational restoring force that depends on the local gravitational field. A value of 9.81 m/s squared is the standard for Earth's surface."\r
    physical_reading_rules:\r
      - id: g_reading_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[g]] determina la rapidez de las ondas largas; duplicar [[g]] incrementaria [[v]] en un factor raiz de dos en el regimen gravitatorio. En la Tierra es esencialmente constante y se trata como parametro fijo."\r
          en: "[[g]] determines the speed of long waves; doubling [[g]] would increase [[v]] by a factor of square root of two in the gravitational regime. On Earth it is essentially constant and treated as a fixed parameter."\r
    coherence_rules:\r
      - id: g_coherence_standard\r
        when: "g >= 9.5 && g <= 10.0"\r
        status: ok\r
        text:\r
          es: "[[g]] coherente con valor terrestre estandar."\r
          en: "[[g]] coherent with standard terrestrial value."\r
      - id: g_coherence_unusual\r
        when: "g < 9.5 || g > 10.0"\r
        status: warning\r
        text:\r
          es: "[[g]] fuera del rango terrestre tipico; verificar si se trabaja en otro planeta o si hay un error de entrada."\r
          en: "[[g]] outside typical terrestrial range; check whether you are working on another planet or there is an input error."\r
      - id: g_coherence_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[g]] debe ser positivo y cercano a 9.81 m/s cuadrado para experimentos en la superficie terrestre."\r
          en: "[[g]] must be positive and close to 9.81 m/s squared for experiments on the Earth's surface."\r
    model_validity_rules:\r
      - id: g_validity_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[g]] es valido como constante en experimentos de laboratorio o en el océano. Varia en menos de 0.3% entre el ecuador y los polos, variacion despreciable para la mayoria de calculos."\r
          en: "[[g]] is valid as a constant in laboratory experiments or in the ocean. It varies by less than 0.3% between the equator and the poles, a negligible variation for most calculations."\r
    graph_rules:\r
      - id: g_graph_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En graficas de dispersion, [[g]] escala verticalmente la rama gravitatoria; mayor [[g]] eleva toda la curva de velocidad en el regimen de ondas largas."\r
          en: "On dispersion graphs, [[g]] vertically scales the gravitational branch; larger [[g]] raises the entire speed curve in the long-wave regime."\r
    likely_errors:\r
      - id: g_error_units\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error frecuente: usar [[g]] en unidades distintas de m/s cuadrado, por ejemplo 980 cm/s cuadrado; esto produce [[v]] diez veces mayor de lo correcto."\r
          en: "Frequent error: using [[g]] in units other than m/s squared, for example 980 cm/s squared; this produces [[v]] ten times larger than correct."\r
    next_step_rules:\r
      - id: g_next_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Verificar que [[g]] este en m/s cuadrado antes de introducirlo en la formula; luego comparar con [[sigma]] y [[rho]] para identificar el regimen dominante."\r
          en: "Verify that [[g]] is in m/s squared before entering it in the formula; then compare with [[sigma]] and [[rho]] to identify the dominant regime."\r
\r
  sigma:\r
    magnitude_type: scalar_unsigned\r
    semantic_role:\r
      es: "Coeficiente de elasticidad interfacial que controla las ondas capilares cortas."\r
      en: "Interfacial elasticity coefficient controlling short capillary waves."\r
    summary_rules:\r
      - id: sigma_summary_water\r
        when: "sigma >= 0.06 && sigma <= 0.08"\r
        status: ok\r
        text:\r
          es: "[[sigma]] en rango tipico del agua pura. Indica que la interfaz tiene elasticidad capilar normal; domina la restauracion de ondas cortas de milimetros."\r
          en: "[[sigma]] in typical range of pure water. Indicates that the interface has normal capillary elasticity; it dominates the restoration of short millimetre-scale waves."\r
      - id: sigma_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[sigma]] resume la elasticidad de la interfaz aire-liquido. Su valor depende del liquido y la temperatura; el agua pura tiene aproximadamente 0.072 N/m a 25 grados."\r
          en: "[[sigma]] summarises the elasticity of the air-liquid interface. Its value depends on the liquid and temperature; pure water has approximately 0.072 N/m at 25 degrees."\r
    physical_reading_rules:\r
      - id: sigma_reading_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[sigma]] actua como rigidez de la interfaz frente a la curvatura: cuanto mayor es la curvatura (onda mas corta), mas fuerza restauradora ejerce [[sigma]]. A diferencia de [[g]], su efecto crece con [[k]]."\r
          en: "[[sigma]] acts as interfacial stiffness against curvature: the greater the curvature (shorter wave), the more restoring force [[sigma]] exerts. Unlike [[g]], its effect grows with [[k]]."\r
    coherence_rules:\r
      - id: sigma_coherence_positive\r
        when: "sigma > 0"\r
        status: ok\r
        text:\r
          es: "[[sigma]] positiva: coherente con la existencia de una interfaz elastica."\r
          en: "Positive [[sigma]]: coherent with the existence of an elastic interface."\r
      - id: sigma_coherence_zero\r
        when: "sigma <= 0"\r
        status: error\r
        text:\r
          es: "[[sigma]] nula o negativa: fisicamente imposible para una interfaz liquido-gas real."\r
          en: "Zero or negative [[sigma]]: physically impossible for a real liquid-gas interface."\r
      - id: sigma_coherence_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Verificar que [[sigma]] sea coherente con el liquido utilizado; agua pura: 0.072 N/m; agua jabonosa: 0.025-0.040 N/m."\r
          en: "Verify that [[sigma]] is coherent with the liquid used; pure water: 0.072 N/m; soapy water: 0.025-0.040 N/m."\r
    model_validity_rules:\r
      - id: sigma_validity_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[sigma]] es valido para interfaces limpias sin peliculas solidas ni surfactantes concentrados. La presencia de detergente reduce [[sigma]] significativamente y altera el regimen capilar."\r
          en: "[[sigma]] is valid for clean interfaces without solid films or concentrated surfactants. The presence of detergent reduces [[sigma]] significantly and alters the capillary regime."\r
    graph_rules:\r
      - id: sigma_graph_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En el grafico de dispersion, [[sigma]] escala la rama capilar; mayor [[sigma]] eleva la curva en el regimen de ondas cortas (k grande)."\r
          en: "On the dispersion graph, [[sigma]] scales the capillary branch; larger [[sigma]] raises the curve in the short-wave regime (large k)."\r
    likely_errors:\r
      - id: sigma_error_film\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error conceptual frecuente: creer que [[sigma]] representa un film solido sobre el agua. Es una propiedad energetica de la interfaz, no una membrana."\r
          en: "Frequent conceptual error: thinking [[sigma]] represents a solid film on water. It is an energetic property of the interface, not a membrane."\r
    next_step_rules:\r
      - id: sigma_next_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Con [[sigma]] identificado, calcular la longitud capilar critica para determinar en que regimen opera la onda de interes."\r
          en: "With [[sigma]] identified, compute the critical capillary length to determine in which regime the wave of interest operates."\r
\r
  rho:\r
    magnitude_type: scalar_unsigned\r
    semantic_role:\r
      es: "Inercia volumetrica del fluido que resiste el movimiento ondulatorio."\r
      en: "Volumetric inertia of the fluid that resists wave motion."\r
    summary_rules:\r
      - id: rho_summary_water\r
        when: "rho >= 990 && rho <= 1030"\r
        status: ok\r
        text:\r
          es: "[[rho]] en rango de agua liquida estandar. Indica inercia ondulatoria normal; la onda superficial se propaga con la celeridad esperada para agua."\r
          en: "[[rho]] in standard liquid water range. Indicates normal wave inertia; the surface wave propagates with the expected celerity for water."\r
      - id: rho_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[rho]] resume la inercia volumetrica del liquido que resiste los cambios de velocidad durante la propagacion ondulatoria. Aumentar [[rho]] disminuye [[v]] en el regimen capilar."\r
          en: "[[rho]] summarises the volumetric inertia of the liquid resisting velocity changes during wave propagation. Increasing [[rho]] decreases [[v]] in the capillary regime."\r
    physical_reading_rules:\r
      - id: rho_reading_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[rho]] aparece en el denominador de la formula capilar: cuanto mayor la densidad, mas lenta la onda capilar porque el liquido resiste mas el movimiento. En el regimen gravitatorio, [[rho]] no aparece explicitamente en la formula de agua profunda."\r
          en: "[[rho]] appears in the denominator of the capillary formula: the greater the density, the slower the capillary wave because the liquid resists motion more. In the gravity regime, [[rho]] does not appear explicitly in the deep-water formula."\r
    coherence_rules:\r
      - id: rho_coherence_positive\r
        when: "rho > 0"\r
        status: ok\r
        text:\r
          es: "[[rho]] positiva: coherente con la existencia de un fluido real."\r
          en: "Positive [[rho]]: coherent with the existence of a real fluid."\r
      - id: rho_coherence_low\r
        when: "rho < 500"\r
        status: warning\r
        text:\r
          es: "[[rho]] por debajo de 500 kg/m³: verificar si se trabaja con un liquido muy ligero o si hay un error de unidades."\r
          en: "[[rho]] below 500 kg/m³: verify whether you are working with a very light liquid or there is a units error."\r
      - id: rho_coherence_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Verificar que [[rho]] sea coherente con el liquido; agua dulce: 1000 kg/m³; agua de mar: 1025 kg/m³; mercurio: 13600 kg/m³."\r
          en: "Verify that [[rho]] is coherent with the liquid; fresh water: 1000 kg/m³; seawater: 1025 kg/m³; mercury: 13600 kg/m³."\r
    model_validity_rules:\r
      - id: rho_validity_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[rho]] valido para liquidos incompresibles en condiciones normales. La compresibilidad del agua (muy baja) es despreciable para estas ondas superficiales."\r
          en: "[[rho]] valid for incompressible liquids under normal conditions. The compressibility of water (very low) is negligible for these surface waves."\r
    graph_rules:\r
      - id: rho_graph_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En el grafico de dispersion, [[rho]] escala inversamente la rama capilar; mayor [[rho]] baja la curva en el regimen de k grande."\r
          en: "On the dispersion graph, [[rho]] inversely scales the capillary branch; larger [[rho]] lowers the curve in the large-k regime."\r
    likely_errors:\r
      - id: rho_error_air\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error frecuente: usar la densidad del aire (1.2 kg/m³) en lugar de la del liquido (1000 kg/m³); produce [[v]] 29 veces mayor de lo correcto en el regimen capilar."\r
          en: "Frequent error: using air density (1.2 kg/m³) instead of liquid density (1000 kg/m³); produces [[v]] 29 times larger than correct in the capillary regime."\r
    next_step_rules:\r
      - id: rho_next_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Con [[rho]] identificado, combinar con [[sigma]] y [[g]] para calcular la longitud de onda critica y determinar el regimen dominante."\r
          en: "With [[rho]] identified, combine with [[sigma]] and [[g]] to compute the critical wavelength and determine the dominant regime."\r
\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
  inline_mode:\r
    max_sections: 2\r
    priority:\r
      - summary\r
      - likely_errors\r
  extended_mode:\r
    show_all: true\r
`;export{e as default};
