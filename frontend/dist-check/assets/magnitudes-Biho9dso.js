const e=`version: 5
magnitudes:
  - id: dp
    symbol: \\Delta p
    nombre:
      es: Pérdida de presión
      en: Pressure drop
    si_unit: Pa
    unidad_si: Pa
    dimension: M/(L*T^2)
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: disipacion_energia
    used_in: [dp_hf]
    common_mistake: "Confundir con la presión absoluta en lugar de la caída relativa."
    sign_behavior: siempre_positivo
    zero_behavior: flujo_ideal
    value_nature: variable_flujo
    interpretation_role: indicador_perdida_carga
    graph_binding: "Eje vertical en el perfil de presiones a lo largo del conducto."
    descripcion:
      es: Disminución de la presión estática debido al rozamiento viscoso.
      en: Decrease in static pressure due to viscous friction.
    typical_range: [0, 1e7]
    pedagogical_notes:
      es: Es la magnitud que las bombas deben compensar para mantener el flujo.
      en: It is the magnitude that pumps must compensate for to maintain flow.

  - id: hf
    symbol: h_f
    nombre:
      es: Pérdida de carga
      en: Head loss
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: altura_equivalente
    used_in: [hf, dp_hf]
    common_mistake: "Pensar que es una longitud física en lugar de una energía por unidad de peso."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_friccion
    value_nature: variable_flujo
    interpretation_role: indicador_energia_disipada
    graph_binding: "Representa la pendiente de la línea de energía."
    descripcion:
      es: Pérdida de energía por unidad de peso del fluido.
      en: Energy loss per unit weight of the fluid.
    typical_range: [0, 1000]
    pedagogical_notes:
      es: Expresa la fricción en términos de columna de fluido (metros de agua).
      en: Expresses friction in terms of fluid column (meters of water).

  - id: f
    symbol: f
    nombre:
      es: Factor de fricción de Darcy
      en: Darcy friction factor
    si_unit: "1"
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: coeficiente_resistencia
    used_in: [hf]
    common_mistake: "Usar el factor de Fanning (f' = f/4) por error."
    sign_behavior: siempre_positivo
    zero_behavior: superficie_lisa_ideal
    value_nature: parametro_sistema
    interpretation_role: clasificador_resistencia
    graph_binding: "Variable dependiente en el diagrama de Moody."
    descripcion:
      es: Coeficiente adimensional que depende de la rugosidad y el régimen.
      en: Dimensionless coefficient depending on roughness and regime.
    typical_range: [0.008, 0.1]
    pedagogical_notes:
      es: Para flujo laminar es 64/Re; para turbulento depende de la rugosidad relativa.
      en: For laminar flow it is 64/Re; for turbulent it depends on relative roughness.

  - id: L
    symbol: L
    nombre:
      es: Longitud del conducto
      en: Duct length
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: extension_sistema
    used_in: [hf]
    common_mistake: "No incluir la longitud equivalente de accesorios (codos, válvulas)."
    sign_behavior: siempre_positivo
    zero_behavior: punto
    value_nature: parametro_escenario
    interpretation_role: escala_friccion_lineal
    graph_binding: "Eje horizontal en diagramas de línea de energía."
    descripcion:
      es: Distancia recorrida por el fluido entre dos puntos de interés.
      en: Distance traveled by the fluid between two points of interest.
    typical_range: [1e-3, 1e6]
    pedagogical_notes:
      es: La pérdida de carga primaria es proporcional a esta longitud.
      en: Primary head loss is proportional to this length.

  - id: D
    symbol: D
    nombre:
      es: Diámetro del conducto
      en: Duct diameter
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: confinamiento_flujo
    used_in: [hf]
    common_mistake: "Usar el radio en lugar del diámetro."
    sign_behavior: siempre_positivo
    zero_behavior: punto
    value_nature: parametro_escenario
    interpretation_role: escala_restriccion
    graph_binding: "Define la sección transversal en el esquema Svg."
    descripcion:
      es: Dimensión transversal característica del conducto.
      en: Characteristic transverse dimension of the duct.
    typical_range: [1e-3, 10]
    pedagogical_notes:
      es: Factor crítico en la 5ª potencia si el caudal es constante.
      en: Critical factor to the 5th power if flow is constant.

  - id: v
    symbol: v
    nombre:
      es: Velocidad media
      en: Average velocity
    si_unit: m/s
    unidad_si: m/s
    dimension: L/T
    is_vector: false
    components: []
    category: cinematica_fluidos
    physical_role: rapidez_flujo
    used_in: [hf]
    common_mistake: "No usar la velocidad media si el perfil no es uniforme."
    sign_behavior: siempre_positivo
    zero_behavior: estatico
    value_nature: variable_flujo
    interpretation_role: indicador_energia_cinetica
    graph_binding: "Afecta a la rapidez de animación en el Svg."
    descripcion:
      es: Rapidez promedio del fluido en la sección transversal.
      en: Average speed of the fluid in the cross section.
    typical_range: [0, 100]
    pedagogical_notes:
      es: Define la carga cinética dinámica del sistema.
      en: Defines the dynamic kinetic head of the system.

  - id: rho
    symbol: \\rho
    nombre:
      es: Densidad del fluido
      en: Fluid density
    si_unit: kg/m^3
    unidad_si: kg/m^3
    dimension: M/L^3
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: inercia_volumetrica
    used_in: [dp_hf]
    common_mistake: "Ignorar cambios por temperatura o presión."
    sign_behavior: siempre_positivo
    zero_behavior: vacio
    value_nature: parametro_fluido
    interpretation_role: escala_masa
    graph_binding: "Modula la densidad visual en el Svg."
    descripcion:
      es: Masa por unidad de volumen del fluido.
      en: Mass per unit volume of the fluid.
    typical_range: [0.5, 2000]
    pedagogical_notes:
      es: Magnitud necesaria para convertir altura de pérdida en presión.
      en: Magnitude needed to convert head loss into pressure.

  - id: g
    symbol: g
    nombre:
      es: Gravedad
      en: Gravity
    si_unit: m/s^2
    unidad_si: m/s^2
    dimension: L/T^2
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: aceleracion_campo
    used_in: [hf]
    common_mistake: "Usar un valor distinto de 9.80665 m/s² sin justificación."
    sign_behavior: siempre_positivo
    zero_behavior: ingravidez
    value_nature: constante_escenario
    interpretation_role: factor_peso
    graph_binding: "Afecta a la caída de presión gravitatoria."
    descripcion:
      es: Aceleración debida al campo gravitatorio.
      en: Acceleration due to the gravitational field.
    typical_range: [0, 25]
    pedagogical_notes:
      es: Constante local que define el peso del fluido.
      en: Local constant that defines fluid weight.

  - id: Re
    symbol: Re
    nombre:
      es: Número de Reynolds
      en: Reynolds number
    si_unit: "1"
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: criterio_regimen
    used_in: []
    common_mistake: "Olvidar que es el parámetro que define el valor de f."
    sign_behavior: siempre_positivo
    zero_behavior: estatico
    value_nature: variable_flujo
    interpretation_role: clasificador_regimen
    graph_binding: "Define el tipo de flujo visualizado (laminar o turbulento)."
    descripcion:
      es: Relación entre fuerzas de inercia y viscosas.
      en: Ratio of inertial to viscous forces.
    typical_range: [0, 1e8]
    pedagogical_notes:
      es: Parámetro maestro para elegir la ecuación de fricción.
      en: Master parameter for choosing the friction equation.
`;export{e as default};
