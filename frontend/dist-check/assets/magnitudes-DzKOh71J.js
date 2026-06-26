const e=`version: 5
magnitudes:
  - id: m
    symbol: m
    nombre: { es: Masa, en: Mass }
    si_unit: kg
    unidad_si: kg
    dimension: M
    is_vector: false
    components: []
    category: sistema
    physical_role: inercia_oscilante
    used_in: [omega]
    common_mistake: Creer que una masa mayor aumenta la frecuencia natural.
    typical_range: [0.001, 1000]
    sign_behavior: siempre_positiva
    zero_behavior: modelo_invalido
    value_nature: parametro
    interpretation_role: resistencia_inercial
    graph_binding: Aumentar [[m]] reduce [[omega]] y aumenta [[Tper]].
    descripcion: { es: Masa que oscila alrededor del equilibrio., en: Mass oscillating around equilibrium. }
    pedagogical_notes: { es: "La masa no cambia la energia de amplitud si [[k]] y [[A]] permanecen fijos.", en: "Mass does not change amplitude energy if [[k]] and [[A]] remain fixed." }
  - id: k
    symbol: k
    nombre: { es: Rigidez, en: Stiffness }
    si_unit: N/m
    unidad_si: N/m
    dimension: M/T^2
    is_vector: false
    components: []
    category: elasticidad
    physical_role: constante_restauradora
    used_in: [omega, E]
    common_mistake: Usarla con unidades de fuerza sin dividir por longitud.
    typical_range: [0.01, 1e6]
    sign_behavior: positiva_en_equilibrio_estable
    zero_behavior: sin_retorno_elastico
    value_nature: parametro
    interpretation_role: rapidez_de_retorno
    graph_binding: Aumentar [[k]] eleva [[omega]] y [[E]].
    descripcion: { es: Constante lineal que mide la fuerza restauradora por desplazamiento., en: Linear constant measuring restoring force per displacement. }
    pedagogical_notes: { es: Una rigidez mayor hace el oscilador mas rapido y mas energetico para igual amplitud., en: Greater stiffness makes the oscillator faster and more energetic for equal amplitude. }
  - id: omega
    symbol: \\omega
    nombre: { es: Frecuencia angular, en: Angular Frequency }
    si_unit: rad/s
    unidad_si: rad/s
    dimension: 1/T
    is_vector: false
    components: []
    category: tiempo
    physical_role: ritmo_natural
    used_in: [omega, Tper]
    common_mistake: Confundirla con frecuencia en hertz.
    typical_range: [0.01, 1e5]
    sign_behavior: positiva_por_convencion
    zero_behavior: ausencia_de_oscilacion
    value_nature: resultado
    interpretation_role: magnitud_dominante
    graph_binding: Controla la compresion temporal de la curva oscilatoria.
    descripcion: { es: Ritmo angular natural del oscilador ideal., en: Natural angular rhythm of the ideal oscillator. }
    pedagogical_notes: { es: Es la magnitud central para leer rapidez temporal del movimiento., en: It is the central quantity for reading the time rhythm of motion. }
  - id: Tper
    symbol: T
    nombre: { es: Periodo, en: Period }
    si_unit: s
    unidad_si: s
    dimension: T
    is_vector: false
    components: []
    category: tiempo
    physical_role: tiempo_ciclo
    used_in: [Tper]
    common_mistake: Pensar que amplitud mayor siempre cambia el periodo.
    typical_range: [1e-5, 1e3]
    sign_behavior: siempre_positivo
    zero_behavior: ciclo_imposible
    value_nature: resultado
    interpretation_role: duracion_oscilacion
    graph_binding: Es la separacion temporal entre dos estados equivalentes.
    descripcion: { es: Tiempo necesario para completar una oscilacion., en: Time required to complete one oscillation. }
    pedagogical_notes: { es: "En el modelo lineal no depende de [[A]].", en: "In the linear model it does not depend on [[A]]." }
  - id: A
    symbol: A
    nombre: { es: Amplitud, en: Amplitude }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: desplazamiento_maximo
    used_in: [E]
    common_mistake: Usarla como desplazamiento instantaneo.
    typical_range: [1e-6, 10]
    sign_behavior: no_negativa
    zero_behavior: equilibrio_sin_oscilacion
    value_nature: parametro_estado
    interpretation_role: extension_maxima
    graph_binding: Fija la altura maxima de la oscilacion y la energia almacenada.
    descripcion: { es: Maximo desplazamiento respecto al equilibrio., en: Maximum displacement from equilibrium. }
    pedagogical_notes: { es: Doblar amplitud cuadruplica la energia total en el modelo lineal., en: Doubling amplitude quadruples total energy in the linear model. }
  - id: E
    symbol: E
    nombre: { es: Energia total, en: Total Energy }
    si_unit: J
    unidad_si: J
    dimension: M*L^2/T^2
    is_vector: false
    components: []
    category: energia
    physical_role: energia_mecanica_constante
    used_in: [E]
    common_mistake: Interpretar que energia cambia aunque no haya rozamiento.
    typical_range: [1e-9, 1e9]
    sign_behavior: no_negativa
    zero_behavior: sin_amplitud
    value_nature: resultado
    interpretation_role: energia_de_amplitud
    graph_binding: En un grafico energetico permanece constante y se intercambia entre cinetica y potencial.
    descripcion: { es: Energia mecanica conservada del oscilador ideal., en: Conserved mechanical energy of the ideal oscillator. }
    pedagogical_notes: { es: "Depende de [[k]] y de [[A]], no directamente de [[m]].", en: "It depends on [[k]] and [[A]], not directly on [[m]]." }
`;export{e as default};
