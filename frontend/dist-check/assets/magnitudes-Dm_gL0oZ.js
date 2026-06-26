const e=`version: 5
magnitudes:
  - id: Re
    symbol: Re
    nombre:
      es: Número de Reynolds
      en: Reynolds Number
    si_unit: "1"
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: criterio_regimen
    used_in: [re_dinamico, re_cinematico]
    common_mistake: "Olvidar que es adimensional o usar unidades inconsistentes en el cálculo."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_inercia
    value_nature: numero_adimensional
    interpretation_role: clasificador_flujo
    graph_binding: "Controla la transición visual entre líneas de corriente suaves y remolinos."
    descripcion:
      es: Cociente entre las fuerzas de inercia y las fuerzas viscosas.
      en: Ratio of inertial forces to viscous forces.
    typical_range: [1e-3, 1e8]
    pedagogical_notes:
      es: Es el parámetro más importante en la dinámica de fluidos para escalar experimentos.
      en: It is the most important parameter in fluid dynamics for scaling experiments.

  - id: rho
    symbol: \\rho
    nombre:
      es: Densidad del fluido
      en: Fluid Density
    si_unit: kg/m^3
    unidad_si: kg/m^3
    dimension: M/L^3
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: inercia_volumetrica
    used_in: [re_dinamico]
    common_mistake: "Confundir con la gravedad específica o peso específico."
    sign_behavior: siempre_positivo
    zero_behavior: vacio
    value_nature: parametro_fluido
    interpretation_role: escala_masa
    graph_binding: "Afecta a la densidad visual de las partículas de flujo."
    descripcion:
      es: Masa por unidad de volumen del fluido.
      en: Mass per unit volume of the fluid.
    typical_range: [0.5, 2000]
    pedagogical_notes:
      es: Representa la capacidad del fluido para resistir cambios en su movimiento.
      en: Represents the fluid's ability to resist changes in its motion.

  - id: v
    symbol: v
    nombre:
      es: Velocidad característica
      en: Characteristic Velocity
    si_unit: m/s
    unidad_si: m/s
    dimension: L/T
    is_vector: false
    components: []
    category: cinematica_fluidos
    physical_role: rapidez_flujo
    used_in: [re_dinamico, re_cinematico]
    common_mistake: "Usar la velocidad máxima en lugar de la velocidad media en tuberías."
    sign_behavior: siempre_positivo
    zero_behavior: estatico
    value_nature: variable_flujo
    interpretation_role: indicador_energia_cinetica
    graph_binding: "Determina la rapidez de animación de las líneas de corriente."
    descripcion:
      es: Rapidez representativa del flujo en el sistema analizado.
      en: Representative flow speed in the analyzed system.
    typical_range: [1e-6, 1000]
    pedagogical_notes:
      es: Un aumento en v favorece la turbulencia al incrementar la inercia.
      en: An increase in v favors turbulence by increasing inertia.

  - id: L
    symbol: L
    nombre:
      es: Longitud característica
      en: Characteristic Length
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: escala_longitud
    used_in: [re_dinamico, re_cinematico]
    common_mistake: "Usar el radio en lugar del diámetro en tuberías circulares."
    sign_behavior: siempre_positivo
    zero_behavior: punto
    value_nature: parametro_escenario
    interpretation_role: escala_confinamiento
    graph_binding: "Define las dimensiones geométricas del contenedor del fluido."
    descripcion:
      es: Dimensión lineal que define la escala del obstáculo o conducto.
      en: Linear dimension defining the scale of the obstacle or duct.
    typical_range: [1e-6, 1e5]
    pedagogical_notes:
      es: Dependiendo del problema, puede ser un diámetro, una cuerda o una profundidad.
      en: Depending on the problem, it can be a diameter, a chord, or a depth.

  - id: eta
    symbol: \\eta
    nombre:
      es: Viscosidad dinámica
      en: Dynamic Viscosity
    si_unit: "Pa*s"
    unidad_si: "Pa*s"
    dimension: M/(L*T)
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: friccion_interna
    used_in: [re_dinamico]
    common_mistake: "Ignorar su fuerte dependencia con la temperatura."
    sign_behavior: siempre_positivo
    zero_behavior: fluido_ideal
    value_nature: parametro_fluido
    interpretation_role: amortiguador_caos
    graph_binding: "Suaviza la agitación de las partículas en la visualización."
    descripcion:
      es: Medida de la resistencia del fluido a ser deformado.
      en: Measure of the fluid's resistance to being deformed.
    typical_range: [1e-5, 100]
    pedagogical_notes:
      es: Es el 'pegamento' que intenta mantener el flujo ordenado y laminar.
      en: It is the 'glue' that tries to keep the flow ordered and laminar.

  - id: nu
    symbol: \\nu
    nombre:
      es: Viscosidad cinemática
      en: Kinematic Viscosity
    si_unit: m^2/s
    unidad_si: m^2/s
    dimension: L^2/T
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: difusividad_momentum
    used_in: [re_cinematico]
    common_mistake: "Confundir con la viscosidad dinámica (unidades diferentes)."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_difusion
    value_nature: parametro_fluido
    interpretation_role: difusor_velocidad
    graph_binding: "Afecta a la dispersión de los remolinos."
    descripcion:
      es: Cociente entre la viscosidad dinámica y la densidad.
      en: Ratio of dynamic viscosity to density.
    typical_range: [1e-7, 1e-2]
    pedagogical_notes:
      es: Representa la facilidad con la que el fluido difunde su cantidad de movimiento.
      en: Represents the ease with which the fluid diffuses its momentum.
`;export{e as default};
