const n=`version: 5\r
magnitudes:
- id: phi
  symbol: \\phi_\\alpha
  nombre: { es: Función de ligadura, en: Constraint function }
  si_unit: variable
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: restriccion
  physical_role: condicion_de_configuracion
  used_in: [ ligadura_holonomica, desplazamiento_virtual_admisible, multiplicadores_lagrange ]
  common_mistake: Confundir phi con una fuerza aplicada.
  typical_range: [ -1e9, 1e9 ]
  sign_behavior: indica_lado_de_la_restriccion
  zero_behavior: configuracion_admisible
  value_nature: condicion
  interpretation_role: nucleo_de_ligadura
  graph_binding: "[[phi]]=0 define el conjunto permitido."
  descripcion: { es: Ecuación que debe anularse para que la configuración sea válida., en: Equation that must vanish for the configuration to be valid. }
  pedagogical_notes: { es: "La ligadura restringe configuraciones, no sustituye una fuerza externa.", en: "The constraint restricts configurations, not an external force." }

- id: q
  symbol: q_i
  nombre: { es: Coordenada de configuración, en: Configuration coordinate }
  si_unit: variable
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: configuracion
  physical_role: variable_restringida
  used_in: [ ligadura_holonomica, desplazamiento_virtual_admisible, multiplicadores_lagrange ]
  common_mistake: Creer que todas las q_i son independientes aunque haya ligaduras.
  typical_range: [ -1e9, 1e9 ]
  sign_behavior: depende_de_la_carta
  zero_behavior: origen_de_carta
  value_nature: estado
  interpretation_role: coordenada_sujeta_a_ligadura
  graph_binding: "[[q]] se mueve dentro del conjunto compatible con [[phi]]."
  descripcion: { es: Coordenada usada antes o después de aplicar restricciones., en: Coordinate used before or after applying constraints. }
  pedagogical_notes: { es: "Su independencia debe comprobarse, no asumirse.", en: "Its independence must be checked, not assumed." }

- id: Nq
  symbol: N_q
  nombre: { es: Número de coordenadas iniciales, en: Number of initial coordinates }
  si_unit: "1"
  unidad_si: "1"
  dimension: adimensional
  is_vector: false
  components: []
  category: conteo
  physical_role: dimension_bruta
  used_in: [ conteo_grados_libertad ]
  common_mistake: Usar 3n sin revisar si el modelo ya está reducido.
  typical_range: [ 0, 1e6 ]
  sign_behavior: entero_no_negativo
  zero_behavior: sin_coordenadas
  value_nature: parametro
  interpretation_role: entrada_de_conteo
  graph_binding: "[[Nq]] fija la dimensión antes de restar ligaduras."
  descripcion: { es: Cantidad de coordenadas antes de imponer restricciones independientes., en: Number of coordinates before imposing independent constraints. }
  pedagogical_notes: { es: "No siempre coincide con 3n; depende de la formulación inicial.", en: "It does not always equal 3n; it depends on the initial formulation." }

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
  used_in: [ ligadura_holonomica ]
  common_mistake: Ignorar ligaduras dependientes del tiempo.
  typical_range: [ 0, 1e12 ]
  sign_behavior: orientado
  zero_behavior: origen_temporal
  value_nature: parametro
  interpretation_role: evolucion_de_ligadura
  graph_binding: "[[t]] permite ligaduras móviles."
  descripcion: { es: Variable temporal que puede aparecer en restricciones reónomas., en: Time variable that may appear in rheonomic constraints. }
  pedagogical_notes: { es: "Si aparece explícitamente, la restricción cambia con el tiempo.", en: "If it appears explicitly, the constraint changes with time." }

- id: delta_q
  symbol: \\delta q_i
  nombre: { es: Desplazamiento virtual, en: Virtual displacement }
  si_unit: variable
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: variacional
  physical_role: variacion_compatible
  used_in: [ desplazamiento_virtual_admisible ]
  common_mistake: Confundirlo con desplazamiento real durante un intervalo de tiempo.
  typical_range: [ -1e6, 1e6 ]
  sign_behavior: orientado
  zero_behavior: sin_variacion
  value_nature: variacion
  interpretation_role: direccion_permitida
  graph_binding: "[[delta_q]] debe ser tangente al conjunto [[phi]]=0."
  descripcion: { es: Variación ideal usada para probar compatibilidad con la ligadura., en: Ideal variation used to test compatibility with the constraint. }
  pedagogical_notes: { es: "Es local e instantánea, no una trayectoria real completa.", en: "It is local and instantaneous, not a full real trajectory." }

- id: lambda
  symbol: \\lambda_\\alpha
  nombre: { es: Multiplicador de Lagrange, en: Lagrange multiplier }
  si_unit: variable
  unidad_si: variable
  dimension: variable
  is_vector: false
  components: []
  category: dinamica
  physical_role: reaccion_de_ligadura
  used_in: [ multiplicadores_lagrange ]
  common_mistake: Tratarlo como constante arbitraria sin significado dinámico.
  typical_range: [ -1e12, 1e12 ]
  sign_behavior: depende_de_convencion
  zero_behavior: ligadura_sin_reaccion
  value_nature: resultado
  interpretation_role: intensidad_de_reaccion
  graph_binding: "[[lambda]] expresa la reacción necesaria para mantener la ligadura."
  descripcion: { es: Variable auxiliar que representa la intensidad de una fuerza de restricción., en: Auxiliary variable representing the intensity of a constraint force. }
  pedagogical_notes: { es: "Su dimensión depende de la forma de la ligadura.", en: "Its dimension depends on the form of the constraint." }

- id: L
  symbol: L
  nombre: { es: Lagrangiano, en: Lagrangian }
  si_unit: J
  unidad_si: J
  dimension: M*L^2/T^2
  is_vector: false
  components: []
  category: dinamica
  physical_role: funcion_dinamica
  used_in: [ multiplicadores_lagrange ]
  common_mistake: Confundirlo con longitud.
  typical_range: [ -1e12, 1e12 ]
  sign_behavior: puede_ser_negativo
  zero_behavior: balance_especifico
  value_nature: funcion
  interpretation_role: entrada_lagrangiana
  graph_binding: "[[L]] junto con [[phi]] determina la dinámica restringida."
  descripcion: { es: Función dinámica usada en las ecuaciones de Lagrange., en: Dynamic function used in Lagrange equations. }
  pedagogical_notes: { es: "Aquí muestra cómo entran las ligaduras en dinámica.", en: "Here it shows how constraints enter dynamics." }

- id: qdot
  symbol: \\dot q_i
  nombre: { es: Velocidad generalizada, en: Generalized velocity }
  si_unit: variable/s
  unidad_si: variable/s
  dimension: variable/T
  is_vector: false
  components: []
  category: dinamica
  physical_role: tasa_de_configuracion
  used_in: [ multiplicadores_lagrange ]
  common_mistake: Ignorar que también queda condicionada por la ligadura.
  typical_range: [ -1e9, 1e9 ]
  sign_behavior: orientado
  zero_behavior: coordenada_congelada
  value_nature: estado
  interpretation_role: velocidad_restringida
  graph_binding: "[[qdot]] debe ser compatible con las restricciones activas."
  descripcion: { es: Tasa temporal de coordenadas en un sistema restringido., en: Time rate of coordinates in a constrained system. }
  pedagogical_notes: { es: "No toda velocidad arbitraria respeta una ligadura.", en: "Not every arbitrary velocity respects a constraint." }

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
`;export{n as default};
