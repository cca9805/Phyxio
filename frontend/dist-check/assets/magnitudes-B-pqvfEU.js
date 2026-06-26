const e=`version: 5\r
magnitudes:
- id: q
  symbol: q_i
  nombre: { es: Coordenada generalizada, en: Generalized coordinate }
  si_unit: variable
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: configuracion
  physical_role: variable_independiente_de_configuracion
  used_in: [ posicion_generalizada, velocidad_generalizada ]
  common_mistake: Confundir q_i con una coordenada cartesiana concreta.
  typical_range: [ -1e6, 1e6 ]
  sign_behavior: depende_de_la_carta
  zero_behavior: origen_de_carta
  value_nature: estado
  interpretation_role: entrada_de_configuracion
  graph_binding: "[[q]] mueve el estado físico representado por [[r_vec]]."
  descripcion: { es: Variable mínima que parametriza la configuración del sistema., en: Minimal variable that parametrizes system configuration. }
  pedagogical_notes: { es: "Su unidad depende de la carta elegida.", en: "Its unit depends on the chosen chart." }

- id: qdot
  symbol: \\dot q_i
  nombre: { es: Velocidad generalizada, en: Generalized velocity }
  si_unit: variable/s
  unidad_si: variable/s
  dimension: variable/T
  is_vector: false
  components: []
  category: cinematica
  physical_role: tasa_de_cambio_de_q
  used_in: [ velocidad_generalizada, energia_cinetica_generalizada ]
  common_mistake: Tratar qdot como velocidad física directa.
  typical_range: [ -1e6, 1e6 ]
  sign_behavior: orientado
  zero_behavior: coordenada_congelada
  value_nature: estado
  interpretation_role: velocidad_de_carta
  graph_binding: "[[qdot]] produce [[v]] a través del mapa geométrico."
  descripcion: { es: Tasa temporal de una coordenada generalizada., en: Time rate of a generalized coordinate. }
  pedagogical_notes: { es: "Solo coincide con rapidez física en cartas especialmente simples.", en: "It coincides with physical speed only in especially simple charts." }

- id: r_vec
  symbol: \\vec r
  nombre: { es: Posición física, en: Physical position }
  si_unit: m
  unidad_si: m
  dimension: L
  is_vector: true
  components: [ x, y, z ]
  category: posicion
  physical_role: salida_geometrica
  used_in: [ posicion_generalizada, velocidad_generalizada ]
  common_mistake: Confundir el vector físico con el conjunto de coordenadas q_i.
  typical_range: [ -1e6, 1e6 ]
  sign_behavior: depende_del_origen
  zero_behavior: origen_fisico
  value_nature: estado
  interpretation_role: posicion_observable
  graph_binding: "[[r_vec]] es la posición que se dibuja al variar [[q]]."
  descripcion: { es: Posición observable obtenida desde las coordenadas generalizadas., en: Observable position obtained from generalized coordinates. }
  pedagogical_notes: { es: "Es la salida física de la parametrización.", en: "It is the physical output of the parametrization." }

- id: v
  symbol: \\vec v
  nombre: { es: Velocidad física, en: Physical velocity }
  si_unit: m/s
  unidad_si: m/s
  dimension: L/T
  is_vector: true
  components: []
  category: cinematica
  physical_role: velocidad_observable
  used_in: [ velocidad_generalizada, energia_cinetica_generalizada ]
  common_mistake: Sustituir qdot directamente por v sin jacobiano.
  typical_range: [ -1e6, 1e6 ]
  sign_behavior: vectorial
  zero_behavior: reposo_fisico
  value_nature: estado
  interpretation_role: salida_cinematica
  graph_binding: "[[v]] resulta de combinar [[qdot]] con la geometría del mapa."
  descripcion: { es: Velocidad real inducida por la evolución de las coordenadas generalizadas., en: Real velocity induced by generalized coordinate evolution. }
  pedagogical_notes: { es: "Es la magnitud que entra en la energía cinética física.", en: "It is the magnitude entering physical kinetic energy." }

- id: T
  symbol: T
  nombre: { es: Energía cinética, en: Kinetic energy }
  si_unit: J
  unidad_si: J
  dimension: M*L^2/T^2
  is_vector: false
  components: []
  category: energia
  physical_role: energia_de_movimiento
  used_in: [ energia_cinetica_generalizada ]
  common_mistake: Calcularla con qdot sin métrica ni velocidad física.
  typical_range: [ 0, 1e12 ]
  sign_behavior: no_negativa
  zero_behavior: sin_movimiento_fisico
  value_nature: resultado
  interpretation_role: energia_resultante
  graph_binding: "[[T]] crece con el cuadrado de [[v]]."
  descripcion: { es: Energía asociada al movimiento físico inducido por la carta., en: Energy associated with physical motion induced by the chart. }
  pedagogical_notes: { es: "Conecta la elección de coordenadas con el lagrangiano.", en: "It connects coordinate choice with the Lagrangian." }

- id: m
  symbol: m
  nombre: { es: Masa, en: Mass }
  si_unit: kg
  unidad_si: kg
  dimension: M
  is_vector: false
  components: []
  category: parametro
  physical_role: inercia
  used_in: [ energia_cinetica_generalizada ]
  common_mistake: Omitir que la energía cinética escala con la masa.
  typical_range: [ 0, 1e9 ]
  sign_behavior: positiva
  zero_behavior: sin_inercia
  value_nature: parametro
  interpretation_role: escala_inercial
  graph_binding: "[[m]] escala proporcionalmente [[T]]."
  descripcion: { es: Parámetro inercial del sistema modelado., en: Inertial parameter of the modeled system. }
  pedagogical_notes: { es: "Debe ser positiva en mecánica clásica ordinaria.", en: "It must be positive in ordinary classical mechanics." }

- id: t
  symbol: t
  nombre: { es: Tiempo, en: Time }
  si_unit: s
  unidad_si: s
  dimension: T
  is_vector: false
  components: []
  category: parametro
  physical_role: variable_temporal
  used_in: [ posicion_generalizada, velocidad_generalizada ]
  common_mistake: Ignorar dependencia temporal explícita de la carta.
  typical_range: [ 0, 1e12 ]
  sign_behavior: orientado
  zero_behavior: origen_temporal
  value_nature: parametro
  interpretation_role: evolucion
  graph_binding: "[[t]] permite cartas móviles o dependientes del tiempo."
  descripcion: { es: Variable temporal del modelo., en: Time variable of the model. }
  pedagogical_notes: { es: "Puede aparecer explícitamente en mapas no estacionarios.", en: "It may appear explicitly in non-stationary maps." }

- id: x
  symbol: x\r
  nombre: { es: Coordenada cartesiana x, en: Cartesian coordinate x }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: posicion_cartesiana\r
  used_in: [ x_desde_polar, radio_cartesiano ]\r
  common_mistake: Tratar x como invariante al cambiar de coordenadas.\r
  typical_range: [ -1e+6, 1e+6 ]\r
  sign_behavior: depende_del_origen_elegido\r
  zero_behavior: alineado_con_eje_y\r
  value_nature: estado\r
  interpretation_role: proyeccion_horizontal\r
  graph_binding: "[[x]] cambia con [[r]] y [[theta]] al proyectar sobre el eje horizontal."\r
  descripcion: { es: Proyección horizontal de la posición en base cartesiana., en: Horizontal projection of position in Cartesian basis. }\r
  pedagogical_notes: { es: "Comparar [[x]] con [[y]] ayuda a visualizar cambios de base.", en: "Comparing [[x]] with [[y]] helps visualize basis changes." }\r
\r
- id: y\r
  symbol: y\r
  nombre: { es: Coordenada cartesiana y, en: Cartesian coordinate y }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: posicion_cartesiana\r
  used_in: [ y_desde_polar, radio_cartesiano ]\r
  common_mistake: Usar y con signo incorrecto al no fijar orientación angular.\r
  typical_range: [ -1e+6, 1e+6 ]\r
  sign_behavior: depende_del_origen_elegido\r
  zero_behavior: alineado_con_eje_x\r
  value_nature: estado\r
  interpretation_role: proyeccion_vertical\r
  graph_binding: "[[y]] se obtiene como componente vertical del radio [[r]]."\r
  descripcion: { es: Proyección vertical de la posición en base cartesiana., en: Vertical projection of position in Cartesian basis. }\r
  pedagogical_notes: { es: "Una lectura conjunta de [[x]] y [[y]] evita errores de cuadrante.", en: "Joint reading of [[x]] and [[y]] prevents quadrant errors." }\r
\r
- id: r\r
  symbol: r\r
  nombre: { es: Radio polar, en: Polar radius }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: distancia_al_origen\r
  used_in: [ x_desde_polar, y_desde_polar, radio_cartesiano ]\r
  common_mistake: Confundir r con trayectoria recorrida.\r
  typical_range: [ 0, 1e+6 ]\r
  sign_behavior: no_negativa\r
  zero_behavior: origen\r
  value_nature: estado\r
  interpretation_role: coordenada_radial\r
  graph_binding: "[[r]] fija la escala de la posición antes de proyectar en ejes cartesianos."\r
  descripcion: { es: Distancia al origen en coordenadas polares., en: Distance to the origin in polar coordinates. }\r
  pedagogical_notes: { es: "Cuando [[r]]=0, el ángulo [[theta]] deja de ser físicamente relevante.", en: "When [[r]]=0, angle [[theta]] becomes physically irrelevant." }\r
\r
- id: theta\r
  symbol: \\theta\r
  nombre: { es: Ángulo polar, en: Polar angle }\r
  si_unit: rad\r
  unidad_si: rad\r
  dimension: adimensional\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: orientacion\r
  used_in: [ x_desde_polar, y_desde_polar ]\r
  common_mistake: Mezclar grados y radianes sin conversión.\r
  typical_range: [ -6.2832, 6.2832 ]\r
  sign_behavior: orientado\r
  zero_behavior: alineado_eje_x\r
  value_nature: estado\r
  interpretation_role: direccion\r
  graph_binding: "[[theta]] determina el reparto entre [[x]] y [[y]] para un [[r]] fijo."\r
  descripcion: { es: Orientación angular de la posición respecto del eje de referencia., en: Angular orientation of position with respect to the reference axis. }\r
  pedagogical_notes: { es: "Revisar cuadrante de [[theta]] evita signos erróneos en seno y coseno.", en: "Checking [[theta]] quadrant avoids wrong sine and cosine signs." }\r
\r
- id: n\r
  symbol: n\r
  nombre: { es: Número de partículas, en: Number of particles }\r
  si_unit: "1"\r
  unidad_si: "1"\r
  dimension: adimensional\r
  is_vector: false\r
  components: []\r
  category: conteo\r
  physical_role: tamano_del_sistema\r
  used_in: [ grados_libertad ]\r
  common_mistake: Usar n como número de ecuaciones en vez de entidades dinámicas.\r
  typical_range: [ 1, 1e+6 ]\r
  sign_behavior: entero_positivo\r
  zero_behavior: sistema_vacio\r
  value_nature: parametro\r
  interpretation_role: cardinalidad\r
  graph_binding: "[[n]] escala el espacio de configuración bruto antes de aplicar ligaduras."\r
  descripcion: { es: Cantidad de entidades dinámicas consideradas en el modelo., en: Number of dynamic entities considered by the model. }\r
  pedagogical_notes: { es: "Distinguir [[n]] de número de coordenadas evita sobreconteos.", en: "Distinguishing [[n]] from number of coordinates avoids overcounting." }\r
\r
- id: C\r
  symbol: C\r
  nombre: { es: Ligaduras independientes, en: Independent constraints }\r
  si_unit: "1"\r
  unidad_si: "1"\r
  dimension: adimensional\r
  is_vector: false\r
  components: []\r
  category: conteo\r
  physical_role: reduccion_de_grados\r
  used_in: [ grados_libertad ]\r
  common_mistake: Contar dos veces la misma restricción en forma equivalente.\r
  typical_range: [ 0, 1e+6 ]\r
  sign_behavior: entero_no_negativo\r
  zero_behavior: sin_ligaduras\r
  value_nature: parametro\r
  interpretation_role: restriccion\r
  graph_binding: "[[C]] reduce el número de coordenadas efectivas del sistema."\r
  descripcion: { es: Número de restricciones independientes que vinculan coordenadas., en: Number of independent constraints linking coordinates. }\r
  pedagogical_notes: { es: "La independencia de ligaduras es condición clave para contar bien [[f]].", en: "Constraint independence is key for correct [[f]] counting." }\r
\r
- id: f\r
  symbol: f\r
  nombre: { es: Grados de libertad, en: Degrees of freedom }\r
  si_unit: "1"\r
  unidad_si: "1"\r
  dimension: adimensional\r
  is_vector: false\r
  components: []\r
  category: conteo\r
  physical_role: dimension_efectiva_del_modelo\r
  used_in: [ grados_libertad ]\r
  common_mistake: Identificar f con dimensión espacial sin restar ligaduras.\r
  typical_range: [ 0, 1e+6 ]\r
  sign_behavior: entero_no_negativo\r
  zero_behavior: sistema_completamente_restringido\r
  value_nature: resultado\r
  interpretation_role: salida_principal\r
  graph_binding: "[[f]] resume cuántas coordenadas generalizadas independientes se necesitan."\r
  descripcion: { es: Número mínimo de coordenadas independientes para describir el estado., en: Minimum number of independent coordinates needed to describe the state. }\r
  pedagogical_notes: { es: "[[f]] organiza la estrategia de modelización y selección de coordenadas.", en: "[[f]] organizes modeling strategy and coordinate selection." }\r
`;export{e as default};
