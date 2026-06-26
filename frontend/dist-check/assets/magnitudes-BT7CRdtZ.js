const e=`- id: L
  symbol: L
  nombre: { es: longitud de cavidad, en: cavity length }
  descripcion: { es: "Distancia util entre fronteras que fijan la onda estacionaria.", en: "Useful distance between boundaries that fix the standing wave." }
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in: [condicion_estacionaria_cuerda, frecuencia_modo_estacionario, grafico_coord]
  common_mistake: { es: "Confundir [[L]] con la longitud de onda completa.", en: "Confusing [[L]] with the full wavelength." }
  typical_range: "10⁻² m a 10 m en cavidades escolares"
  sign_behavior: { has_sign: false, meaning: { es: "Es una longitud positiva.", en: "It is a positive length." } }
  zero_behavior: { allowed: false, meaning: { es: "[[L]] nula elimina la cavidad.", en: "Zero [[L]] removes the cavity." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "L > 0" }
  interpretation_role: { primary_for: [seleccion_de_modos], secondary_for: [escala_espacial] }
  graph_binding: { channels: [x_domain, boundary_spacing] }
  pedagogical_notes: { es: "[[L]] fija que modos caben entre fronteras.", en: "[[L]] fixes which modes fit between boundaries." }
- id: lambda
  symbol: lambda
  nombre: { es: longitud de onda, en: wavelength }
  descripcion: { es: "Periodo espacial de la onda viajera que compone el modo.", en: "Spatial period of the traveling wave that composes the mode." }
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [condicion_estacionaria_cuerda, teoria, ejemplos]
  common_mistake: { es: "Tomar [[lambda]] igual a [[L]] para cualquier modo.", en: "Taking [[lambda]] equal to [[L]] for every mode." }
  typical_range: "2L/n para modos enteros de cuerda fija"
  sign_behavior: { has_sign: false, meaning: { es: "Es separacion espacial positiva.", en: "It is positive spatial separation." } }
  zero_behavior: { allowed: false, meaning: { es: "[[lambda]] nula no define modo ondulatorio.", en: "Zero [[lambda]] does not define a wave mode." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "lambda > 0" }
  interpretation_role: { primary_for: [forma_modal], secondary_for: [frecuencia] }
  graph_binding: { channels: [crest_spacing, mode_shape] }
  pedagogical_notes: { es: "[[lambda]] se ajusta para que los nodos coincidan con las fronteras.", en: "[[lambda]] adjusts so nodes match the boundaries." }
- id: n
  symbol: n
  nombre: { es: numero de modo, en: mode number }
  descripcion: { es: "Entero positivo que cuenta semilongitudes de onda en la cavidad.", en: "Positive integer counting half-wavelengths in the cavity." }
  unidad_si: adimensional
  dimension: "[1]"
  is_vector: false
  components: []
  category: dimension
  physical_role: core_physical_quantity
  used_in: [condicion_estacionaria_cuerda, frecuencia_modo_estacionario]
  common_mistake: { es: "Usar [[n]] decimal como si todos los modos fueran posibles.", en: "Using decimal [[n]] as if all modes were possible." }
  typical_range: "1 a 10 en modos introductorios"
  sign_behavior: { has_sign: false, meaning: { es: "Solo se usan enteros positivos.", en: "Only positive integers are used." } }
  zero_behavior: { allowed: false, meaning: { es: "[[n]] cero no contiene semilongitudes de onda.", en: "Zero [[n]] contains no half-wavelengths." } }
  value_nature: { kind: ratio, nonnegative_only: true, expected_interval: "n = 1, 2, 3, ..." }
  interpretation_role: { primary_for: [orden_modal], secondary_for: [nodos_y_antinodos] }
  graph_binding: { channels: [mode_index, harmonic_selector] }
  pedagogical_notes: { es: "[[n]] expresa una restriccion discreta, no una variable continua cualquiera.", en: "[[n]] expresses a discrete constraint, not any continuous variable." }
- id: v
  symbol: v
  nombre: { es: velocidad de propagacion, en: propagation speed }
  descripcion: { es: "Rapidez de las ondas viajeras que forman la estacionaria.", en: "Speed of the traveling waves that form the standing wave." }
  unidad_si: m/s
  dimension: "[L T⁻¹]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in: [frecuencia_modo_estacionario, ejemplos]
  common_mistake: { es: "Creer que la onda estacionaria no requiere ondas viajeras con [[v]].", en: "Believing a standing wave does not require traveling waves with [[v]]." }
  typical_range: "1 m/s a 10⁴ m/s segun medio"
  sign_behavior: { has_sign: false, meaning: { es: "Se usa como rapidez positiva.", en: "It is used as positive speed." } }
  zero_behavior: { allowed: false, meaning: { es: "[[v]] nula no permite intercambio ondulatorio.", en: "Zero [[v]] does not allow wave exchange." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "v > 0" }
  interpretation_role: { primary_for: [escala_de_frecuencia], secondary_for: [medio_material] }
  graph_binding: { channels: [frequency_scale] }
  pedagogical_notes: { es: "[[v]] fija la escala temporal una vez que el modo cabe espacialmente.", en: "[[v]] fixes the temporal scale once the mode fits spatially." }
- id: f_n
  symbol: f_n
  nombre: { es: frecuencia modal, en: modal frequency }
  descripcion: { es: "Frecuencia permitida para el modo entero n.", en: "Allowed frequency for integer mode n." }
  unidad_si: Hz
  dimension: "[T⁻¹]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in: [frecuencia_modo_estacionario, interpretacion, grafico_coord]
  common_mistake: { es: "Confundir [[f_n]] con cualquier frecuencia externa aplicada.", en: "Confusing [[f_n]] with any externally applied frequency." }
  typical_range: "Hz a kHz segun longitud y medio"
  sign_behavior: { has_sign: false, meaning: { es: "Es tasa positiva de oscilacion modal.", en: "It is a positive modal oscillation rate." } }
  zero_behavior: { allowed: false, meaning: { es: "[[f_n]] nula no describe modo oscilatorio.", en: "Zero [[f_n]] does not describe an oscillatory mode." } }
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "f_n > 0" }
  interpretation_role: { primary_for: [resonancia_modal], secondary_for: [comparacion_de_modos] }
  graph_binding: { channels: [modal_label, frequency_readout] }
  pedagogical_notes: { es: "[[f_n]] conecta la condicion geometrica con la respuesta temporal observable.", en: "[[f_n]] connects the geometric condition with the observable temporal response." }
`;export{e as default};
