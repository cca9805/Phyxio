const e=`- id: E0
  symbol: E_0
  nombre:
    es: amplitud del campo electrico
    en: electric field amplitude
  descripcion:
    es: "Valor maximo del campo electrico transversal de la onda electromagnetica."
    en: "Maximum transverse electric field of the electromagnetic wave."
  unidad_si: V/m
  dimension: "[M L T⁻³ I⁻¹]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [relacion_campos_em, lectura_grafica_coord]
  common_mistake:
    es: "Tratar [[E0]] como energia en vez de como campo electrico."
    en: "Treating [[E0]] as energy instead of electric field."
  typical_range: "10⁻³ V/m a 10³ V/m en ejemplos introductorios"
  sign_behavior:
    has_sign: false
    meaning:
      es: "Se usa como amplitud no negativa; la oscilacion instantanea si puede cambiar de sentido."
      en: "It is used as a nonnegative amplitude; the instantaneous oscillation can reverse direction."
  zero_behavior:
    allowed: true
    meaning:
      es: "Si [[E0]] es cero no queda perturbacion electrica transportada."
      en: "If [[E0]] is zero, no electric disturbance is transported."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "E0 >= 0"
  interpretation_role:
    primary_for: [intensidad_visual, acoplamiento_electromagnetico]
    secondary_for: [comparacion_con_B0]
  graph_binding:
    channels: [y_amplitude, field_marker]
  pedagogical_notes:
    es: "En este leaf [[E0]] permite ver que la onda no es una cuerda: lo que oscila es un campo."
    en: "In this leaf [[E0]] shows that the wave is not a string: the oscillating quantity is a field."
- id: B0
  symbol: B_0
  nombre:
    es: amplitud del campo magnetico
    en: magnetic field amplitude
  descripcion:
    es: "Valor maximo del campo magnetico transversal asociado al campo electrico."
    en: "Maximum transverse magnetic field associated with the electric field."
  unidad_si: T
  dimension: "[M T⁻² I⁻¹]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [relacion_campos_em, lectura_grafica_coord]
  common_mistake:
    es: "Dibujar [[B0]] paralelo a [[E0]] o independiente de el."
    en: "Drawing [[B0]] parallel to [[E0]] or independent from it."
  typical_range: "10⁻¹² T a 10⁻⁶ T en ondas debiles"
  sign_behavior:
    has_sign: false
    meaning:
      es: "Se interpreta como modulo de amplitud; la direccion instantanea se representa aparte."
      en: "It is interpreted as an amplitude magnitude; instantaneous direction is represented separately."
  zero_behavior:
    allowed: true
    meaning:
      es: "Si [[B0]] es cero, una onda electromagnetica libre no queda cerrada como solucion."
      en: "If [[B0]] is zero, a free electromagnetic wave is not closed as a solution."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "B0 >= 0"
  interpretation_role:
    primary_for: [acoplamiento_electromagnetico]
    secondary_for: [orden_de_magnitud]
  graph_binding:
    channels: [secondary_amplitude, magnetic_marker]
  pedagogical_notes:
    es: "[[B0]] obliga a leer la onda como par de campos coordinados, no como una sola curva decorativa."
    en: "[[B0]] forces the wave to be read as coordinated fields, not as one decorative curve."
- id: c
  symbol: c
  nombre:
    es: velocidad de la luz en el vacio
    en: speed of light in vacuum
  descripcion:
    es: "Rapidez de propagacion de una onda electromagnetica libre en el vacio."
    en: "Propagation speed of a free electromagnetic wave in vacuum."
  unidad_si: m/s
  dimension: "[L T⁻¹]"
  is_vector: false
  components: []
  category: constant
  physical_role: core_physical_quantity
  used_in: [onda_em_velocidad, relacion_campos_em]
  common_mistake:
    es: "Suponer que [[c]] cambia con [[f]] dentro del vacio."
    en: "Assuming [[c]] changes with [[f]] in vacuum."
  typical_range: "2.998 x 10⁸ m/s en el vacio"
  sign_behavior:
    has_sign: false
    meaning:
      es: "Se usa como rapidez positiva; la direccion se decide con el eje de propagacion."
      en: "It is used as a positive speed; direction is set by the propagation axis."
  zero_behavior:
    allowed: false
    meaning:
      es: "[[c]] nula no describe propagacion electromagnetica libre."
      en: "Zero [[c]] does not describe free electromagnetic propagation."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "c > 0"
  interpretation_role:
    primary_for: [escala_de_propagacion, relacion_lambda_f]
    secondary_for: [relacion_E0_B0]
  graph_binding:
    channels: [phase_speed, wave_shift]
  pedagogical_notes:
    es: "[[c]] separa la propiedad del vacio de la eleccion de frecuencia o longitud de onda."
    en: "[[c]] separates the property of vacuum from the chosen frequency or wavelength."
- id: lambda
  symbol: lambda
  nombre:
    es: longitud de onda
    en: wavelength
  descripcion:
    es: "Distancia espacial entre dos estados equivalentes de la onda electromagnetica."
    en: "Spatial distance between equivalent states of the electromagnetic wave."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [onda_em_velocidad]
  common_mistake:
    es: "Confundir [[lambda]] con la distancia recorrida durante muchas oscilaciones."
    en: "Confusing [[lambda]] with distance traveled during many oscillations."
  typical_range: "10⁻⁹ m a 10³ m segun la banda electromagnetica"
  sign_behavior:
    has_sign: false
    meaning:
      es: "Es una separacion positiva entre repeticiones espaciales."
      en: "It is a positive separation between spatial repetitions."
  zero_behavior:
    allowed: false
    meaning:
      es: "[[lambda]] nula implicaria repeticion espacial sin escala fisica."
      en: "Zero [[lambda]] would imply spatial repetition without physical scale."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "lambda > 0"
  interpretation_role:
    primary_for: [escala_espacial, banda_espectral]
    secondary_for: [comparacion_con_f]
  graph_binding:
    channels: [x_spacing, crest_distance]
  pedagogical_notes:
    es: "[[lambda]] conecta el dibujo sinusoidal con una banda fisica del espectro."
    en: "[[lambda]] connects the sinusoidal drawing with a physical band of the spectrum."
- id: f
  symbol: f
  nombre:
    es: frecuencia
    en: frequency
  descripcion:
    es: "Numero de oscilaciones electromagneticas por segundo."
    en: "Number of electromagnetic oscillations per second."
  unidad_si: Hz
  dimension: "[T⁻¹]"
  is_vector: false
  components: []
  category: state
  physical_role: core_physical_quantity
  used_in: [onda_em_velocidad]
  common_mistake:
    es: "Pensar que aumentar [[f]] aumenta [[c]] en el vacio."
    en: "Thinking that increasing [[f]] increases [[c]] in vacuum."
  typical_range: "10⁴ Hz a 10²⁰ Hz en el espectro electromagnetico"
  sign_behavior:
    has_sign: false
    meaning:
      es: "Es tasa positiva de oscilacion."
      en: "It is a positive oscillation rate."
  zero_behavior:
    allowed: false
    meaning:
      es: "[[f]] nula no representa una onda oscilatoria propagante."
      en: "Zero [[f]] does not represent a propagating oscillatory wave."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "f > 0"
  interpretation_role:
    primary_for: [escala_temporal, banda_espectral]
    secondary_for: [comparacion_con_lambda]
  graph_binding:
    channels: [temporal_density, spectral_label]
  pedagogical_notes:
    es: "[[f]] permite distinguir entre cambiar de color o banda y cambiar de rapidez en el vacio."
    en: "[[f]] distinguishes changing color or band from changing speed in vacuum."
`;export{e as default};
