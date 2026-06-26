const e=`magnitudes:\r
  - id: v\r
    symbol: "v"\r
    nombre:\r
      es: Rapidez de propagacion de ondas superficiales\r
      en: Surface wave propagation speed\r
    descripcion:\r
      es: Rapidez con la que la perturbacion de la interfaz se propaga en la superficie del liquido.\r
      en: Speed at which the interface disturbance propagates across the liquid surface.\r
    unidad_si: "m/s"\r
    dimension: "[L T⁻¹]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role:\r
      es: Magnitud resultado principal de la relacion de dispersion\r
      en: Main result quantity of the dispersion relation\r
    used_in:\r
      - rapidez_gravedad\r
      - rapidez_capilares\r
      - rapidez_combinada\r
    common_mistake:\r
      es: Confundir la rapidez de la onda superficial con la velocidad vertical de las particulas de agua en la cresta.\r
      en: Confusing the speed of the surface wave with the vertical velocity of water particles at the crest.\r
    typical_range: "0.2 a 10 m/s segun longitud de onda"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Rapidez de propagacion escalar, siempre positiva; la onda avanza en ambas direcciones horizontales.\r
        en: Scalar propagation speed, always positive; the wave advances in both horizontal directions.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Rapidez nula implicaria ausencia total de propagacion en la interfaz.\r
        en: Zero speed would imply complete absence of interface propagation.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "(0, 20]"\r
    interpretation_role:\r
      primary_for:\r
        - rapidez_superficial\r
        - regimen_dominante\r
      secondary_for:\r
        - longitud_de_onda\r
    graph_binding:\r
      channels:\r
        - wave_speed_marker\r
        - output_marker\r
    pedagogical_notes:\r
      es: "[[v]] depende de [[lambda]]; ondas cortas capilares viajan lentamente mientras que ondas largas de gravedad viajan rapido. Identificar el regimen es el primer paso para calcular [[v]]."\r
      en: "[[v]] depends on [[lambda]]; short capillary waves travel slowly while long gravity waves travel fast. Identifying the regime is the first step to compute [[v]]."\r
\r
  - id: g\r
    symbol: "g"\r
    nombre:\r
      es: Aceleracion gravitatoria\r
      en: Gravitational acceleration\r
    descripcion:\r
      es: Aceleracion de la gravedad terrestre que actua como fuerza restauradora en ondas largas.\r
      en: Earth's gravitational acceleration acting as restoring force in long surface waves.\r
    unidad_si: "m/s²"\r
    dimension: "[L T⁻²]"\r
    is_vector: false\r
    components: []\r
    category: parameter\r
    physical_role:\r
      es: Parametro de fuerza restauradora gravitatoria\r
      en: Gravitational restoring force parameter\r
    used_in:\r
      - rapidez_gravedad\r
      - rapidez_combinada\r
    common_mistake:\r
      es: Ignorar que las ondas capilares cortas apenas sienten la gravedad; aplicar la formula gravitatoria a ondas de milimetros produce error sistematico.\r
      en: Ignoring that short capillary waves barely feel gravity; applying the gravity formula to millimetre waves produces systematic error.\r
    typical_range: "9.81 m/s² estandar terrestre"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La gravedad actua como fuerza restauradora, siempre positiva en magnitud.\r
        en: Gravity acts as a restoring force, always positive in magnitude.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Sin gravedad solo la tension superficial domina; las ondas capilares serian el unico regimen.\r
        en: Without gravity only surface tension dominates; capillary waves would be the only regime.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "(9.5, 10.0]"\r
    interpretation_role:\r
      primary_for:\r
        - fuerza_restauradora_gravitatoria\r
        - regimen_gravitatorio\r
      secondary_for:\r
        - velocidad_ondas_largas\r
    graph_binding:\r
      channels:\r
        - control_slider\r
    pedagogical_notes:\r
      es: "[[g]] separa los dos regimenes: para [[lambda]] grande, [[g]] domina la restauracion; para [[lambda]] pequena, [[sigma]] domina. La longitud de onda critica esta fijada por el cociente entre [[sigma]], [[rho]] y [[g]]."\r
      en: "[[g]] separates the two regimes: for large [[lambda]], [[g]] dominates restoration; for small [[lambda]], [[sigma]] dominates. The critical wavelength is fixed by the ratio between [[sigma]], [[rho]] and [[g]]."\r
\r
  - id: sigma\r
    symbol: "sigma"\r
    nombre:\r
      es: Coeficiente de tension superficial\r
      en: Surface tension coefficient\r
    descripcion:\r
      es: Energia por unidad de area (o fuerza por unidad de longitud) en la interfaz aire-liquido que controla la restauracion de ondas cortas.\r
      en: Energy per unit area (or force per unit length) at the air-liquid interface that controls restoration in short waves.\r
    unidad_si: "N/m"\r
    dimension: "[M T⁻²]"\r
    is_vector: false\r
    components: []\r
    category: parameter\r
    physical_role:\r
      es: Parametro de elasticidad interfacial capilar\r
      en: Capillary interfacial elasticity parameter\r
    used_in:\r
      - rapidez_capilares\r
      - rapidez_combinada\r
    common_mistake:\r
      es: Pensar que la tension superficial es una pelicula solida sobre el agua; es una propiedad volumetrica del liquido que se manifiesta en la interfaz.\r
      en: Thinking surface tension is a solid film on water; it is a volumetric property of the liquid that manifests at the interface.\r
    typical_range: "0.072 N/m para agua pura a 25 grados"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La tension superficial es un coeficiente positivo que mide la elasticidad de la interfaz.\r
        en: Surface tension is a positive coefficient measuring interfacial elasticity.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Sin tension superficial no existen ondas capilares; la interfaz seria totalmente fluida sin rigidez.\r
        en: Without surface tension capillary waves do not exist; the interface would be completely fluid with no stiffness.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "(0, 0.1]"\r
    interpretation_role:\r
      primary_for:\r
        - elasticidad_interfacial\r
        - regimen_capilar\r
      secondary_for:\r
        - longitud_critica\r
    graph_binding:\r
      channels:\r
        - control_slider\r
    pedagogical_notes:\r
      es: "[[sigma]] gobierna el regimen microscopico; su efecto crece con [[k]] mientras que [[g]] decrece con [[k]]. El minimo de [[v]] ocurre exactamente en la longitud de onda critica donde ambos contribuyen por igual."\r
      en: "[[sigma]] governs the microscopic regime; its effect grows with [[k]] while [[g]] decreases with [[k]]. The minimum of [[v]] occurs exactly at the critical wavelength where both contribute equally."\r
\r
  - id: rho\r
    symbol: "rho"\r
    nombre:\r
      es: Densidad del liquido\r
      en: Liquid density\r
    descripcion:\r
      es: Masa por unidad de volumen del liquido en equilibrio, que determina la inercia del sistema ondulatorio.\r
      en: Mass per unit volume of the liquid in equilibrium, which determines the inertia of the wave system.\r
    unidad_si: "kg/m³"\r
    dimension: "[M L⁻³]"\r
    is_vector: false\r
    components: []\r
    category: parameter\r
    physical_role:\r
      es: Parametro de inercia volumetrica del fluido\r
      en: Volumetric inertia parameter of the fluid\r
    used_in:\r
      - rapidez_capilares\r
      - rapidez_combinada\r
    common_mistake:\r
      es: Creer que la densidad del aire importa; solo la densidad del liquido determina la inercia ondulatoria superficial.\r
      en: Believing air density matters; only the liquid density determines the surface wave inertia.\r
    typical_range: "1000 kg/m³ para agua dulce; 1025 kg/m³ para agua de mar"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La densidad es una magnitud positiva que representa inercia volumetrica.\r
        en: Density is a positive quantity representing volumetric inertia.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Una densidad nula implicaria ausencia de inercia; no habria onda propagable.\r
        en: Zero density would imply no inertia; there would be no propagable wave.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "(500, 2000]"\r
    interpretation_role:\r
      primary_for:\r
        - inercia_ondulatoria\r
        - resistencia_al_movimiento\r
      secondary_for:\r
        - amortiguamiento_viscoso\r
    graph_binding:\r
      channels:\r
        - control_slider\r
    pedagogical_notes:\r
      es: "Mayor [[rho]] ralentiza la onda porque el liquido resiste mas los cambios de velocidad. En la formula capilar, [[rho]] aparece en el denominador: duplicar [[rho]] reduce [[v]] en un factor raiz de dos."\r
      en: "Greater [[rho]] slows the wave because the liquid resists velocity changes more. In the capillary formula, [[rho]] appears in the denominator: doubling [[rho]] reduces [[v]] by a factor of square root of two."\r
\r
  - id: lambda\r
    symbol: "lambda"\r
    nombre:\r
      es: Longitud de onda superficial\r
      en: Surface wavelength\r
    descripcion:\r
      es: Distancia espacial entre dos crestas consecutivas de la onda superficial; determina el regimen fisico dominante.\r
      en: Spatial distance between two consecutive wave crests; determines the dominant physical regime.\r
    unidad_si: "m"\r
    dimension: "[L]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role:\r
      es: Variable espacial que clasifica el regimen de dispersion\r
      en: Spatial variable classifying the dispersion regime\r
    used_in:\r
      - rapidez_gravedad\r
      - rapidez_capilares\r
      - rapidez_combinada\r
    common_mistake:\r
      es: "Ignorar que [[lambda]] determina si el regimen es gravitatorio o capilar; es la variable decisiva que el alumno olvida calcular primero."\r
      en: "Ignoring that [[lambda]] determines whether the regime is gravitational or capillary; it is the decisive variable that students often forget to compute first."\r
    typical_range: "0.001 a 100 m segun contexto"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La longitud de onda es una distancia espacial, siempre positiva.\r
        en: Wavelength is a spatial distance, always positive.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Longitud de onda nula implicaria densidad espacial infinita de oscilaciones.\r
        en: Zero wavelength would imply infinite spatial oscillation density.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "(0, 1000]"\r
    interpretation_role:\r
      primary_for:\r
        - escala_espacial_onda\r
        - clasificacion_regimen\r
      secondary_for:\r
        - velocidad_de_grupo\r
    graph_binding:\r
      channels:\r
        - wavelength_marker\r
        - spatial_axis\r
    pedagogical_notes:\r
      es: "[[lambda]] es el eje que divide los dos mundos: por debajo de aproximadamente 1.7 cm en agua pura domina [[sigma]], por encima domina [[g]]. Calcular siempre [[lambda]] antes de elegir la formula."\r
      en: "[[lambda]] is the axis dividing two worlds: below approximately 1.7 cm in pure water [[sigma]] dominates, above [[g]] dominates. Always compute [[lambda]] before choosing the formula."\r
\r
  - id: f\r
    symbol: "f"\r
    nombre:\r
      es: Frecuencia de la onda superficial\r
      en: Surface wave frequency\r
    descripcion:\r
      es: Numero de crestas que pasan por un punto fijo por unidad de tiempo.\r
      en: Number of crests passing a fixed point per unit time.\r
    unidad_si: "Hz"\r
    dimension: "[T⁻¹]"\r
    is_vector: false\r
    components: []\r
    category: parameter\r
    physical_role:\r
      es: Escala temporal de la oscilacion superficial\r
      en: Temporal scale of the surface oscillation\r
    used_in:\r
      - rapidez_gravedad\r
      - rapidez_capilares\r
      - rapidez_combinada\r
    common_mistake:\r
      es: "Creer que [[f]] y [[lambda]] son independientes; en ondas superficiales estan acopladas por la relacion de dispersion."\r
      en: "Thinking [[f]] and [[lambda]] are independent; in surface waves they are coupled by the dispersion relation."\r
    typical_range: "0.1 a 100 Hz"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La frecuencia es siempre positiva; mide el ritmo temporal de la oscilacion.\r
        en: Frequency is always positive; it measures the temporal rhythm of oscillation.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Frecuencia nula significaria una deformacion estatica de la interfaz, no una onda.\r
        en: Zero frequency would mean a static deformation of the interface, not a wave.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "(0, 500]"\r
    interpretation_role:\r
      primary_for:\r
        - ritmo_temporal_onda\r
        - periodo_oscilacion\r
      secondary_for:\r
        - espectro_ondas\r
    graph_binding:\r
      channels:\r
        - frequency_marker\r
    pedagogical_notes:\r
      es: "[[f]] no es libre en ondas superficiales; una vez fijada [[lambda]] la relacion de dispersion impone la frecuencia. El alumno no puede elegir [[f]] y [[lambda]] independientemente."\r
      en: "[[f]] is not free in surface waves; once [[lambda]] is fixed the dispersion relation imposes the frequency. The student cannot choose [[f]] and [[lambda]] independently."\r
\r
  - id: k\r
    symbol: "k"\r
    nombre:\r
      es: Numero de onda\r
      en: Wavenumber\r
    descripcion:\r
      es: Inverso de la longitud de onda multiplicado por dos pi; mide la densidad espacial de oscilacion.\r
      en: Inverse of wavelength multiplied by two pi; measures spatial oscillation density.\r
    unidad_si: "m⁻¹"\r
    dimension: "[L⁻¹]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role:\r
      es: Variable conjugada espacial de la relacion de dispersion\r
      en: Spatial conjugate variable of the dispersion relation\r
    used_in:\r
      - rapidez_gravedad\r
      - rapidez_capilares\r
      - rapidez_combinada\r
    common_mistake:\r
      es: "Confundir [[k]] con la frecuencia angular; [[k]] es espacial (m⁻¹), la frecuencia angular es temporal (rad/s)."\r
      en: "Confusing [[k]] with angular frequency; [[k]] is spatial (m⁻¹), angular frequency is temporal (rad/s)."\r
    typical_range: "0.01 a 10000 m⁻¹"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: El numero de onda es positivo; mide cuantas oscilaciones caben por metro.\r
        en: Wavenumber is positive; it measures how many oscillations fit per metre.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Numero de onda nulo implicaria longitud de onda infinita; no existe en la practica.\r
        en: Zero wavenumber would imply infinite wavelength; it does not exist in practice.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "(0, 100000]"\r
    interpretation_role:\r
      primary_for:\r
        - escala_espacial_inversa\r
        - relacion_de_dispersion\r
      secondary_for:\r
        - resolucion_espacio\r
    graph_binding:\r
      channels:\r
        - wavenumber_axis\r
    pedagogical_notes:\r
      es: "[[k]] es equivalente a [[lambda]] con la ventaja de aparecer directamente en las formulas de dispersion. Convertir siempre: [[k]] es dos pi dividido entre [[lambda]]."\r
      en: "[[k]] is equivalent to [[lambda]] with the advantage of appearing directly in dispersion formulas. Always convert: [[k]] is two pi divided by [[lambda]]."\r
`;export{e as default};
