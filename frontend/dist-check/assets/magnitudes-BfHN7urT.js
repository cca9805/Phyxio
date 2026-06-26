const e=`- id: A
  symbol: A
  nombre: { es: amplitud, en: amplitude }
  descripcion: { es: "Desplazamiento maximo del medio respecto al equilibrio.", en: "Maximum displacement of the medium from equilibrium." }
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [lectura_grafica_coord, teoria, ejemplos]
  common_mistake: { es: "Confundir [[A]] con la distancia recorrida por la onda.", en: "Confusing [[A]] with the distance traveled by the wave." }
  typical_range: "10⁻⁶ m a 1 m segun el sistema mecanico"
  sign_behavior: { has_sign: false, meaning: { es: "Se usa como modulo maximo no negativo.", en: "It is used as a nonnegative maximum magnitude." } }
  zero_behavior: { allowed: true, meaning: { es: "Si [[A]] es cero no hay perturbacion observable.", en: "If [[A]] is zero there is no observable disturbance." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "A >= 0" }
  interpretation_role: { primary_for: [lectura_de_perturbacion], secondary_for: [energia_cualitativa] }
  graph_binding: { channels: [y_amplitude, displacement_marker] }
  pedagogical_notes: { es: "[[A]] muestra que el medio oscila localmente aunque la onda avance.", en: "[[A]] shows that the medium oscillates locally while the wave advances." }
- id: lambda
  symbol: lambda
  nombre: { es: longitud de onda, en: wavelength }
  descripcion: { es: "Distancia entre dos estados equivalentes del medio.", en: "Distance between two equivalent states of the medium." }
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [onda_mecanica_velocidad, teoria, ejemplos]
  common_mistake: { es: "Medir [[lambda]] como amplitud vertical.", en: "Measuring [[lambda]] as vertical amplitude." }
  typical_range: "10⁻³ m a 10³ m en ejemplos basicos"
  sign_behavior: { has_sign: false, meaning: { es: "Es una separacion espacial positiva.", en: "It is a positive spatial separation." } }
  zero_behavior: { allowed: false, meaning: { es: "[[lambda]] nula no define repeticion espacial.", en: "Zero [[lambda]] does not define spatial repetition." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "lambda > 0" }
  interpretation_role: { primary_for: [escala_espacial], secondary_for: [comparacion_con_f] }
  graph_binding: { channels: [x_spacing, crest_distance] }
  pedagogical_notes: { es: "[[lambda]] debe leerse horizontalmente en la representacion Coord.", en: "[[lambda]] should be read horizontally in the Coord representation." }
- id: f
  symbol: f
  nombre: { es: frecuencia, en: frequency }
  descripcion: { es: "Numero de oscilaciones del medio por segundo.", en: "Number of medium oscillations per second." }
  unidad_si: Hz
  dimension: "[T⁻¹]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [onda_mecanica_velocidad, teoria, ejemplos]
  common_mistake: { es: "Creer que [[f]] cambia la rapidez sin cambiar el medio.", en: "Believing [[f]] changes speed without changing the medium." }
  typical_range: "0.1 Hz a 10⁵ Hz segun el fenomeno mecanico"
  sign_behavior: { has_sign: false, meaning: { es: "Es tasa positiva de oscilacion.", en: "It is a positive oscillation rate." } }
  zero_behavior: { allowed: false, meaning: { es: "[[f]] nula no describe una onda periodica propagante.", en: "Zero [[f]] does not describe a propagating periodic wave." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "f > 0" }
  interpretation_role: { primary_for: [escala_temporal], secondary_for: [comparacion_con_lambda] }
  graph_binding: { channels: [temporal_density, wave_pacing] }
  pedagogical_notes: { es: "[[f]] describe cada cuanto oscila un punto del medio.", en: "[[f]] describes how often one point of the medium oscillates." }
- id: v
  symbol: v
  nombre: { es: velocidad de propagacion, en: propagation speed }
  descripcion: { es: "Rapidez con que avanza el patron de perturbacion.", en: "Speed at which the disturbance pattern advances." }
  unidad_si: m/s
  dimension: "[L T⁻¹]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in: [onda_mecanica_velocidad, velocidad_cuerda, interpretacion]
  common_mistake: { es: "Confundir [[v]] con la rapidez de una particula del medio.", en: "Confusing [[v]] with the speed of a particle of the medium." }
  typical_range: "1 m/s a 10⁴ m/s segun medio y tension"
  sign_behavior: { has_sign: false, meaning: { es: "Se usa como rapidez positiva.", en: "It is used as positive speed." } }
  zero_behavior: { allowed: false, meaning: { es: "[[v]] nula no representa propagacion.", en: "Zero [[v]] does not represent propagation." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "v > 0" }
  interpretation_role: { primary_for: [propagacion, respuesta_del_medio], secondary_for: [orden_de_magnitud] }
  graph_binding: { channels: [phase_speed, wave_shift] }
  pedagogical_notes: { es: "[[v]] depende de propiedades del medio, no solo de la forma dibujada.", en: "[[v]] depends on medium properties, not only on the drawn shape." }
- id: T
  symbol: T
  nombre: { es: tension, en: tension }
  descripcion: { es: "Fuerza de estiramiento que restaura una cuerda ideal.", en: "Stretching force that restores an ideal string." }
  unidad_si: N
  dimension: "[M L T⁻²]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in: [velocidad_cuerda, modelos]
  common_mistake: { es: "Usar [[T]] como periodo en este leaf.", en: "Using [[T]] as period in this leaf." }
  typical_range: "1 N a 10³ N en cuerdas habituales"
  sign_behavior: { has_sign: false, meaning: { es: "Se usa como modulo positivo de traccion.", en: "It is used as positive traction magnitude." } }
  zero_behavior: { allowed: false, meaning: { es: "Sin [[T]] una cuerda ideal no transmite onda transversal estable.", en: "Without [[T]] an ideal string does not transmit a stable transverse wave." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "T > 0" }
  interpretation_role: { primary_for: [restauracion_del_medio], secondary_for: [velocidad_en_cuerda] }
  graph_binding: { channels: [medium_parameter] }
  pedagogical_notes: { es: "[[T]] representa la restauracion mecanica en el ejemplo de cuerda.", en: "[[T]] represents mechanical restoration in the string example." }
- id: mu
  symbol: mu
  nombre: { es: densidad lineal, en: linear density }
  descripcion: { es: "Masa por unidad de longitud de una cuerda ideal.", en: "Mass per unit length of an ideal string." }
  unidad_si: kg/m
  dimension: "[M L⁻¹]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in: [velocidad_cuerda, modelos]
  common_mistake: { es: "Confundir [[mu]] con rozamiento o con masa total.", en: "Confusing [[mu]] with friction or total mass." }
  typical_range: "10⁻⁴ kg/m a 1 kg/m"
  sign_behavior: { has_sign: false, meaning: { es: "Es densidad positiva.", en: "It is positive density." } }
  zero_behavior: { allowed: false, meaning: { es: "[[mu]] nula eliminaria la inercia del medio.", en: "Zero [[mu]] would remove the medium inertia." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "mu > 0" }
  interpretation_role: { primary_for: [inercia_del_medio], secondary_for: [velocidad_en_cuerda] }
  graph_binding: { channels: [medium_parameter] }
  pedagogical_notes: { es: "[[mu]] recuerda que una onda mecanica necesita inercia material.", en: "[[mu]] reminds that a mechanical wave needs material inertia." }
`;export{e as default};
