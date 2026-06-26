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
    used_in: [blasius, darcy_turb]
    common_mistake: "Ignorar que es un número adimensional."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_inercia
    value_nature: numero_adimensional
    interpretation_role: clasificador_flujo
    graph_binding: "Determina si la visualización debe ser laminar o turbulenta."
    descripcion:
      es: Relación entre las fuerzas de inercia y las fuerzas viscosas.
      en: Ratio of inertial forces to viscous forces.
    typical_range: [2300, 1e8]
    pedagogical_notes:
      es: En este leaf, Re > 4000 para asegurar régimen turbulento.
      en: In this leaf, Re > 4000 to ensure turbulent regime.

  - id: f
    symbol: f
    nombre:
      es: Factor de fricción (Darcy)
      en: Friction Factor (Darcy)
    si_unit: "1"
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: resistencia_hidrodinamica
    used_in: [blasius, darcy_turb]
    common_mistake: "Confundir el factor de Darcy con el de Fanning (f_darcy = 4 * f_fanning)."
    sign_behavior: siempre_positivo
    zero_behavior: flujo_ideal_sin_perdidas
    value_nature: parametro_flujo
    interpretation_role: escala_disipacion
    graph_binding: "Determina la altura relativa en el diagrama de Moody."
    descripcion:
      es: Coeficiente adimensional que cuantifica las pérdidas de energía por fricción en un conducto.
      en: Dimensionless coefficient quantifying energy losses due to friction in a duct.
    typical_range: [0.008, 0.1]
    pedagogical_notes:
      es: En turbulencia, depende de la rugosidad relativa de las paredes.
      en: In turbulence, it depends on the relative roughness of the walls.

  - id: dp
    symbol: \\Delta P
    nombre:
      es: Caída de presión
      en: Pressure Drop
    si_unit: Pa
    unidad_si: Pa
    dimension: M/(L*T^2)
    is_vector: false
    components: []
    category: dinamica_fluidos
    physical_role: perdida_energia_mecanica
    used_in: [darcy_turb]
    common_mistake: "Olvidar que la pérdida de presión escala con el cuadrado de la velocidad."
    sign_behavior: siempre_positivo
    zero_behavior: flujo_sin_friccion
    value_nature: diferencia_potencial
    interpretation_role: motor_hidraulico
    graph_binding: "Determina la pendiente de la línea de energía en el sistema."
    descripcion:
      es: Disminución de la presión estática a lo largo de un conducto debido a la fricción.
      en: Decrease in static pressure along a duct due to friction.
    typical_range: [10, 1e7]
    pedagogical_notes:
      es: Representa el trabajo por unidad de volumen que las bombas deben realizar.
      en: Represents the work per unit volume that pumps must perform.

  - id: L
    symbol: L
    nombre:
      es: Longitud de la tubería
      en: Pipe Length
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: extension_axial
    used_in: [darcy_turb]
    common_mistake: "No considerar las pérdidas menores por accesorios en la longitud equivalente."
    sign_behavior: siempre_positivo
    zero_behavior: flujo_puntual
    value_nature: parametro_escenario
    interpretation_role: escala_longitud
    graph_binding: "Define la extensión del conducto visualizado."
    descripcion:
      es: Distancia longitudinal del tramo de tubería analizado.
      en: Longitudinal distance of the analyzed pipe section.
    typical_range: [1, 1e5]
    pedagogical_notes:
      es: Las pérdidas son directamente proporcionales a esta magnitud.
      en: Losses are directly proportional to this magnitude.

  - id: D
    symbol: D
    nombre:
      es: Diámetro interno
      en: Internal Diameter
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: escala_confinamiento
    used_in: [blasius, darcy_turb]
    common_mistake: "Usar el radio en lugar del diámetro en la ecuación de Darcy."
    sign_behavior: siempre_positivo
    zero_behavior: obstruccion_total
    value_nature: parametro_escenario
    interpretation_role: limitador_espacial
    graph_binding: "Define la apertura vertical del conducto en el SVG."
    descripcion:
      es: Medida lineal de la sección transversal circular interna.
      en: Linear measure of the internal circular cross-section.
    typical_range: [0.01, 5]
    pedagogical_notes:
      es: Un diámetro mayor reduce drásticamente la velocidad y la fricción.
      en: A larger diameter drastically reduces velocity and friction.

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
    used_in: [darcy_turb]
    common_mistake: "Confundir con la densidad relativa (adimensional)."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_materia
    value_nature: parametro_fluido
    interpretation_role: masa_especifica
    graph_binding: "Afecta a la densidad de remolinos visualizados."
    descripcion:
      es: Masa contenida en una unidad de volumen de fluido.
      en: Mass contained in a unit volume of fluid.
    typical_range: [0.5, 2000]
    pedagogical_notes:
      es: En flujo turbulento, la densidad es clave para la energía cinética de los remolinos.
      en: In turbulent flow, density is key to the kinetic energy of the eddies.

  - id: v
    symbol: v
    nombre:
      es: Velocidad media
      en: Mean Velocity
    si_unit: m/s
    unidad_si: m/s
    dimension: L/T
    is_vector: false
    components: []
    category: cinematica_fluidos
    physical_role: rapidez_transporte
    used_in: [darcy_turb]
    common_mistake: "Pensar que la velocidad es uniforme en toda la sección (aunque en turbulencia casi lo es)."
    sign_behavior: siempre_positivo
    zero_behavior: reposo
    value_nature: variable_flujo
    interpretation_role: indicador_regimen
    graph_binding: "Define la longitud de las flechas de flujo."
    descripcion:
      es: Rapidez promedio del fluido a través de la sección transversal.
      en: Average speed of the fluid through the cross-section.
    typical_range: [0.1, 50]
    pedagogical_notes:
      es: El flujo turbulento tiene un perfil de velocidad más plano que el laminar.
      en: Turbulent flow has a flatter velocity profile than laminar flow.

  - id: v_max
    symbol: v_{max}
    nombre:
      es: Velocidad máxima
      en: Maximum Velocity
    si_unit: m/s
    unidad_si: m/s
    dimension: L/T
    is_vector: false
    components: []
    category: cinematica_fluidos
    physical_role: rapidez_pico
    used_in: []
    common_mistake: "Usar la relación v_max = 2*v que es solo para laminar."
    sign_behavior: siempre_positivo
    zero_behavior: reposo
    value_nature: variable_flujo
    interpretation_role: indicador_perfil
    graph_binding: "Punto central del perfil de velocidades."
    descripcion:
      es: Velocidad máxima alcanzada en el eje central del conducto.
      en: Maximum velocity reached at the central axis of the duct.
    typical_range: [0.1, 60]
    pedagogical_notes:
      es: En turbulencia, v_max es solo ligeramente superior a la velocidad media.
      en: In turbulence, v_max is only slightly higher than the average velocity.

  - id: epsilon
    symbol: \\varepsilon
    nombre:
      es: Tasa de disipación
      en: Dissipation Rate
    si_unit: m^2/s^3
    unidad_si: m^2/s^3
    dimension: L^2/T^3
    is_vector: false
    components: []
    category: termodinamica_fluidos
    physical_role: transferencia_energia_calor
    used_in: [kolmogorov_length]
    common_mistake: "Confundir con la rugosidad absoluta (que usa el mismo símbolo en otros contextos)."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_turbulencia
    value_nature: variable_dinamica
    interpretation_role: escala_caos
    graph_binding: "Controla el parpadeo y fragmentación de los remolinos visuales."
    descripcion:
      es: Rapidez con la que la energía cinética turbulenta se convierte en calor.
      en: Rate at which turbulent kinetic energy is converted into heat.
    typical_range: [1e-4, 1e4]
    pedagogical_notes:
      es: Es el parámetro final de la cascada de energía de Richardson.
      en: It is the final parameter of the Richardson energy cascade.

  - id: eta
    symbol: \\eta
    nombre:
      es: Escala de Kolmogorov
      en: Kolmogorov Scale
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: escala_disipacion_viscosa
    used_in: [kolmogorov_length]
    common_mistake: "Pensar que los remolinos pueden ser infinitamente pequeños."
    sign_behavior: siempre_positivo
    zero_behavior: turbulencia_infinita
    value_nature: escala_longitud
    interpretation_role: limite_resolucion
    graph_binding: "Tamaño de los remolinos más pequeños en el SVG."
    descripcion:
      es: Escala de longitud donde la viscosidad disipa la energía turbulenta.
      en: Length scale where viscosity dissipates turbulent energy.
    typical_range: [1e-6, 1e-3]
    pedagogical_notes:
      es: Por debajo de esta escala, el fluido se mueve de forma suave y laminar.
      en: Below this scale, the fluid moves smoothly and laminarly.

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
    used_in: [kolmogorov_length]
    common_mistake: "Confundir con la viscosidad dinámica (Pa·s)."
    sign_behavior: siempre_positivo
    zero_behavior: fluido_superfluido
    value_nature: parametro_fluido
    interpretation_role: difusor_caos
    graph_binding: "Suaviza los bordes de los remolinos visualizados."
    descripcion:
      es: Resistencia de un fluido a fluir bajo la influencia de la gravedad.
      en: A fluid's resistance to flow under the influence of gravity.
    typical_range: [1e-7, 1e-2]
    pedagogical_notes:
      es: Es el cociente entre la viscosidad dinámica y la densidad.
      en: It is the ratio between dynamic viscosity and density.
`;export{e as default};
