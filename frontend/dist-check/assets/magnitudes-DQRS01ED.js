const e=`version: 5
magnitudes:
  - id: G
    symbol: G
    nombre: { es: Constante de gravitacion, en: Gravitational Constant }
    si_unit: N*m^2/kg^2
    unidad_si: N*m^2/kg^2
    dimension: L^3/(M*T^2)
    is_vector: false
    components: []
    category: gravitacion
    physical_role: constante_universal
    used_in: [parametro_gravitatorio, tercera_ley_absoluta]
    common_mistake: Usarla con distancias en kilometros sin convertir a SI.
    typical_range: [6.674e-11, 6.674e-11]
    sign_behavior: siempre_positivo
    zero_behavior: sin_interaccion_gravitatoria
    value_nature: constante
    interpretation_role: escala_dinamica
    graph_binding: Fija la escala entre periodo y semieje en Coord.
    descripcion: { es: Constante universal que acopla masa y campo gravitatorio., en: Universal constant coupling mass and gravitational field. }
    pedagogical_notes: { es: "En Kepler aparece junto a [[M]] como [[mu]].", en: "In Keplerian motion it appears with [[M]] as [[mu]]." }
  - id: M
    symbol: M
    nombre: { es: Masa central, en: Central Mass }
    si_unit: kg
    unidad_si: kg
    dimension: M
    is_vector: false
    components: []
    category: gravitacion
    physical_role: fuente_central
    used_in: [parametro_gravitatorio, tercera_ley_absoluta]
    common_mistake: Confundirla con la masa del satelite.
    typical_range: [1e20, 1e31]
    sign_behavior: siempre_positivo
    zero_behavior: no_hay_centro_atractor
    value_nature: parametro_escenario
    interpretation_role: fuente_de_periodo
    graph_binding: Aumentar [[M]] reduce el periodo para un mismo [[a]].
    descripcion: { es: Masa dominante situada aproximadamente en un foco de la orbita., en: Dominant mass located approximately at one focus of the orbit. }
    pedagogical_notes: { es: La tercera ley absoluta depende de la masa central, no del planeta ligero., en: The absolute third law depends on central mass, not on the lighter planet. }
  - id: mu
    symbol: \\mu
    nombre: { es: Parametro gravitatorio, en: Gravitational Parameter }
    si_unit: m^3/s^2
    unidad_si: m^3/s^2
    dimension: L^3/T^2
    is_vector: false
    components: []
    category: gravitacion
    physical_role: escala_orbital
    used_in: [parametro_gravitatorio, tercera_ley_mu]
    common_mistake: Tratarlo como una masa o olvidar que ya contiene [[G]].
    typical_range: [1e10, 1e21]
    sign_behavior: siempre_positivo
    zero_behavior: sin_escala_orbital
    value_nature: parametro_derivado
    interpretation_role: puente_GM
    graph_binding: Es la constante que convierte geometria orbital en tiempo.
    descripcion: { es: "Producto [[G]] por [[M]] usado como escala gravitatoria del sistema.", en: "Product of [[G]] and [[M]] used as the system gravitational scale." }
    pedagogical_notes: { es: "Permite escribir la tercera ley sin repetir [[G]] y [[M]].", en: "It lets the third law be written without repeating [[G]] and [[M]]." }
  - id: a
    symbol: a
    nombre: { es: Semieje mayor, en: Semi-major Axis }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: tamano_orbital
    used_in: [primera_ley_polar, tercera_ley_absoluta, tercera_ley_mu]
    common_mistake: Usarlo como radio instantaneo en una elipse no circular.
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo_en_elipse
    zero_behavior: orbita_sin_tamano
    value_nature: parametro_orbital
    interpretation_role: magnitud_dominante
    graph_binding: Eje horizontal natural de la tercera ley.
    descripcion: { es: Mitad del eje mayor de la elipse orbital., en: Half the major axis of the orbital ellipse. }
    pedagogical_notes: { es: Controla el periodo mas que la forma local de la elipse., en: It controls the period more directly than the local shape of the ellipse. }
  - id: b
    symbol: b
    nombre: { es: Semieje menor, en: Semi-minor Axis }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: ancho_eliptico
    used_in: [relacion_semiejes]
    common_mistake: Creer que determina el periodo igual que [[a]].
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo
    zero_behavior: orbita_degenerada
    value_nature: parametro_orbital
    interpretation_role: forma_de_elipse
    graph_binding: Ayuda a visualizar la excentricidad en Svg.
    descripcion: { es: Mitad del eje menor de la elipse orbital., en: Half the minor axis of the orbital ellipse. }
    pedagogical_notes: { es: "Describe forma, mientras [[a]] fija la escala temporal principal.", en: "It describes shape, while [[a]] fixes the main time scale." }
  - id: e
    symbol: e
    nombre: { es: Excentricidad, en: Eccentricity }
    si_unit: "1"
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: forma_orbital
    used_in: [primera_ley_polar, relacion_semiejes]
    common_mistake: Interpretarla como energia especifica por parecerse al simbolo epsilon.
    typical_range: [0, 0.99]
    sign_behavior: no_negativa
    zero_behavior: orbita_circular
    value_nature: parametro_orbital
    interpretation_role: achatamiento
    graph_binding: En Svg desplaza el foco y cambia la variacion de [[r]].
    descripcion: { es: Parametro adimensional que mide cuanto se aparta la orbita de una circunferencia., en: Dimensionless parameter measuring departure from a circle. }
    pedagogical_notes: { es: "En una elipse kepleriana ligada cumple 0 <= [[e]] < 1.", en: "In a bound Keplerian ellipse it satisfies 0 <= [[e]] < 1." }
  - id: r
    symbol: r
    nombre: { es: Radio instantaneo, en: Instantaneous Radius }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: distancia_focal
    used_in: [primera_ley_polar]
    common_mistake: Sustituirlo siempre por [[a]].
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo
    zero_behavior: colision_o_modelo_invalido
    value_nature: variable_estado
    interpretation_role: posicion_en_orbita
    graph_binding: En Svg cambia a lo largo de la elipse respecto al foco.
    descripcion: { es: Distancia desde el foco ocupado por la masa central hasta el cuerpo orbital., en: Distance from the occupied focus to the orbiting body. }
    pedagogical_notes: { es: "En una elipse cambia con [[theta]], aunque [[a]] sea fijo.", en: "In an ellipse it changes with [[theta]], although [[a]] is fixed." }
  - id: theta
    symbol: \\theta
    nombre: { es: Anomalia verdadera, en: True Anomaly }
    si_unit: rad
    unidad_si: rad
    dimension: "1"
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: angulo_orbital
    used_in: [primera_ley_polar]
    common_mistake: Usar grados en calculos que esperan radianes.
    typical_range: [0, 6.283185307]
    sign_behavior: variable_angular
    zero_behavior: direccion_de_referencia
    value_nature: variable_estado
    interpretation_role: localizacion_orbital
    graph_binding: Controla el punto mostrado sobre la elipse en Svg.
    descripcion: { es: Angulo que localiza el cuerpo orbital respecto al foco y al pericentro., en: Angle locating the orbiting body with respect to the focus and periapsis. }
    pedagogical_notes: { es: No mide tiempo directamente; el barrido areal decide el ritmo temporal., en: It does not measure time directly; areal sweep determines the time rhythm. }
  - id: T
    symbol: T
    nombre: { es: Periodo orbital, en: Orbital Period }
    si_unit: s
    unidad_si: s
    dimension: T
    is_vector: false
    components: []
    category: tiempo_orbital
    physical_role: tiempo_revolucion
    used_in: [tercera_ley_absoluta, tercera_ley_mu]
    common_mistake: Confundirlo con el tiempo que tarda en recorrer un arco cualquiera.
    typical_range: [1000, 1e9]
    sign_behavior: siempre_positivo
    zero_behavior: sin_revolucion
    value_nature: resultado
    interpretation_role: escala_temporal
    graph_binding: "En Coord aparece mediante [[T]]^2 frente a [[a]]^3."
    descripcion: { es: Tiempo necesario para completar una vuelta orbital., en: Time required to complete one orbital revolution. }
    pedagogical_notes: { es: "Depende de [[a]] y de la masa central, no de la excentricidad en el modelo ideal.", en: "It depends on [[a]] and central mass, not eccentricity in the ideal model." }
  - id: T1
    symbol: T_1
    nombre: { es: Periodo 1, en: Period 1 }
    si_unit: s
    unidad_si: s
    dimension: T
    is_vector: false
    components: []
    category: comparacion_orbital
    physical_role: periodo_referencia
    used_in: [tercera_ley_comparativa]
    common_mistake: Comparar orbitas de masas centrales distintas.
    typical_range: [1000, 1e9]
    sign_behavior: siempre_positivo
    zero_behavior: referencia_invalida
    value_nature: dato
    interpretation_role: escala_comparativa
    graph_binding: Punto de referencia en comparaciones de periodos.
    descripcion: { es: Periodo de la orbita usada como referencia comparativa., en: Period of the orbit used as comparative reference. }
    pedagogical_notes: { es: "Solo se compara directamente con [[T2]] si ambas orbitan la misma masa central.", en: "It is directly compared with [[T2]] only around the same central mass." }
  - id: T2
    symbol: T_2
    nombre: { es: Periodo 2, en: Period 2 }
    si_unit: s
    unidad_si: s
    dimension: T
    is_vector: false
    components: []
    category: comparacion_orbital
    physical_role: periodo_estimado
    used_in: [tercera_ley_comparativa]
    common_mistake: Escalarlo linealmente con [[a2]]/[[a1]].
    typical_range: [1000, 1e9]
    sign_behavior: siempre_positivo
    zero_behavior: resultado_invalido
    value_nature: resultado
    interpretation_role: respuesta_comparativa
    graph_binding: Resultado de leer la curva cubica de la tercera ley.
    descripcion: { es: Periodo de la segunda orbita en una comparacion kepleriana., en: Period of the second orbit in a Keplerian comparison. }
    pedagogical_notes: { es: Crece con potencia 3/2 del cociente de semiejes., en: It grows with the 3/2 power of the semi-major-axis ratio. }
  - id: a1
    symbol: a_1
    nombre: { es: Semieje 1, en: Semi-major Axis 1 }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: comparacion_orbital
    physical_role: tamano_referencia
    used_in: [tercera_ley_comparativa]
    common_mistake: Mezclar unidades distintas entre [[a1]] y [[a2]].
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo
    zero_behavior: referencia_invalida
    value_nature: dato
    interpretation_role: escala_espacial
    graph_binding: Punto inicial de comparacion sobre el eje de semieje.
    descripcion: { es: Semieje mayor de la orbita de referencia., en: Semi-major axis of the reference orbit. }
    pedagogical_notes: { es: "El cociente [[a2]]/[[a1]] debe ser adimensional.", en: "The ratio [[a2]]/[[a1]] must be dimensionless." }
  - id: a2
    symbol: a_2
    nombre: { es: Semieje 2, en: Semi-major Axis 2 }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: comparacion_orbital
    physical_role: tamano_comparado
    used_in: [tercera_ley_comparativa]
    common_mistake: Duplicar [[a]] y esperar que [[T]] solo se duplique.
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo
    zero_behavior: orbita_invalida
    value_nature: dato
    interpretation_role: escala_espacial_comparada
    graph_binding: Punto final de comparacion sobre la ley cubica.
    descripcion: { es: Semieje mayor de la segunda orbita comparada., en: Semi-major axis of the second compared orbit. }
    pedagogical_notes: { es: "Si [[a2]] = 2[[a1]], el periodo aumenta por factor mayor que 2.", en: "If [[a2]] = 2[[a1]], the period increases by more than a factor of 2." }
  - id: A
    symbol: A
    nombre: { es: Area barrida, en: Swept Area }
    si_unit: m^2
    unidad_si: m^2
    dimension: L^2
    is_vector: false
    components: []
    category: geometria_temporal
    physical_role: medida_barrido
    used_in: [velocidad_areal_constante]
    common_mistake: Confundir area barrida con area total de la elipse.
    typical_range: [1e12, 1e26]
    sign_behavior: acumulativa_positiva
    zero_behavior: intervalo_temporal_nulo
    value_nature: acumulado
    interpretation_role: reloj_areal
    graph_binding: En Svg se muestra como sector desde el foco.
    descripcion: { es: Area que barre el radio vector durante un intervalo de tiempo., en: Area swept by the radius vector during a time interval. }
    pedagogical_notes: { es: La segunda ley compara areas barridas en tiempos iguales, no arcos iguales., en: The second law compares swept areas in equal times, not equal arcs. }
  - id: dA_dt
    symbol: dA/dt
    nombre: { es: Velocidad areal, en: Areal Velocity }
    si_unit: m^2/s
    unidad_si: m^2/s
    dimension: L^2/T
    is_vector: false
    components: []
    category: geometria_temporal
    physical_role: tasa_barrido
    used_in: [velocidad_areal_constante, relacion_momento_angular_conceptual]
    common_mistake: Interpretarla como rapidez lineal.
    typical_range: [1e8, 1e20]
    sign_behavior: constante_positiva_en_orbita_directa
    zero_behavior: sin_barrido
    value_nature: resultado
    interpretation_role: conservacion_temporal
    graph_binding: Magnitud estrella del sector areal en Svg.
    descripcion: { es: Area barrida por unidad de tiempo por el radio vector., en: Area swept per unit time by the radius vector. }
    pedagogical_notes: { es: Explica por que el cuerpo va mas rapido cerca del pericentro., en: It explains why the body moves faster near periapsis. }
  - id: L
    symbol: L
    nombre: { es: Momento angular orbital, en: Orbital Angular Momentum }
    si_unit: kg*m^2/s
    unidad_si: kg*m^2/s
    dimension: M*L^2/T
    is_vector: true
    components: [Lz]
    category: dinamica_orbital
    physical_role: conservacion_rotacional
    used_in: [relacion_momento_angular_conceptual]
    common_mistake: Usarlo sin aclarar que aqui se toma su modulo en orbita plana.
    typical_range: [1e10, 1e40]
    sign_behavior: depende_del_sentido_orbital
    zero_behavior: movimiento_radial_degenerado
    value_nature: parametro_dinamico
    interpretation_role: causa_de_barrido_constante
    graph_binding: Conecta la lectura areal con conservacion dinamica.
    descripcion: { es: Magnitud dinamica asociada al movimiento orbital alrededor del foco., en: Dynamical quantity associated with orbital motion around the focus. }
    pedagogical_notes: { es: Kepler no lo formulo asi, pero Newton permite interpretarlo., en: Kepler did not formulate it this way, but Newtonian mechanics explains it. }
  - id: m
    symbol: m
    nombre: { es: Masa orbital, en: Orbiting Mass }
    si_unit: kg
    unidad_si: kg
    dimension: M
    is_vector: false
    components: []
    category: sistema_orbital
    physical_role: cuerpo_orbitante
    used_in: [relacion_momento_angular_conceptual]
    common_mistake: Pensar que aparece en la tercera ley comparativa ideal.
    typical_range: [1, 1e28]
    sign_behavior: siempre_positivo
    zero_behavior: sin_cuerpo_orbitante
    value_nature: parametro_escenario
    interpretation_role: masa_de_prueba
    graph_binding: Solo entra en la lectura dinamica del momento angular.
    descripcion: { es: Masa del cuerpo que recorre la orbita., en: Mass of the body following the orbit. }
    pedagogical_notes: { es: En el limite de masa central dominante no controla el periodo por si sola., en: In the dominant central-mass limit it does not control the period by itself. }
`;export{e as default};
