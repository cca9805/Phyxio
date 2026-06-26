const e=`version: v5
leaf_id: concepto-de-onda
magnitudes:
  - id: y
    symbol: "y"
    nombre: { es: Perturbacion, en: Disturbance }
    descripcion: { es: Separacion instantanea de una magnitud del medio respecto a su equilibrio local., en: Instantaneous departure of a medium quantity from its local equilibrium. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    common_mistake: { es: Creer que representa el viaje completo de materia., en: Believing it represents full transport of matter. }
    typical_range: "-A a A en una onda sinusoidal simple"
    sign_behavior: { has_sign: true, meaning: { es: El signo indica lado de la perturbacion respecto al equilibrio., en: The sign indicates the side of the disturbance relative to equilibrium. } }
    zero_behavior: { allowed: true, meaning: { es: El punto pasa por equilibrio., en: The point passes through equilibrium. } }
    value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "any" }
    interpretation_role: { primary_for: [estado_local], secondary_for: [fase, oscilacion] }
    graph_binding: { channels: [wave_curve] }
    pedagogical_notes: { es: "Es local: se refiere a un punto e instante.", en: "It is local: it refers to one point and instant." }
  - id: A
    symbol: "A"
    nombre: { es: Amplitud, en: Amplitude }
    descripcion: { es: Maxima separacion de la perturbacion respecto al equilibrio., en: Maximum separation of the disturbance from equilibrium. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion]
    common_mistake: { es: Confundir amplitud con distancia recorrida por la onda., en: Confusing amplitude with distance traveled by the wave. }
    typical_range: "micrometros en sonido pequeno; centimetros en cuerdas de aula"
    sign_behavior: { has_sign: false, meaning: { es: Es un maximo no negativo., en: It is a non-negative maximum. } }
    zero_behavior: { allowed: true, meaning: { es: No hay perturbacion oscilatoria apreciable., en: There is no appreciable oscillatory disturbance. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "[0, inf)" }
    interpretation_role: { primary_for: [tamano_de_perturbacion], secondary_for: [energia_cualitativa] }
    graph_binding: { channels: [amplitude_marker] }
    pedagogical_notes: { es: "A mide tamano vertical, no rapidez de propagacion.", en: "A measures vertical size, not propagation speed." }
  - id: lambda
    symbol: "lambda"
    nombre: { es: Longitud de onda, en: Wavelength }
    descripcion: { es: Distancia espacial entre dos puntos equivalentes consecutivos de la onda., en: Spatial distance between two consecutive equivalent points of the wave. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: spatial_period
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_svg]
    common_mistake: { es: Medirla entre puntos que no estan en la misma fase., en: Measuring it between points that are not in the same phase. }
    typical_range: "centimetros a metros en ejemplos mecanicos de aula"
    sign_behavior: { has_sign: false, meaning: { es: Es una distancia positiva., en: It is a positive distance. } }
    zero_behavior: { allowed: false, meaning: { es: Una longitud de onda nula no describe una onda fisica ordinaria., en: Zero wavelength does not describe an ordinary physical wave. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "(0, inf)" }
    interpretation_role: { primary_for: [periodicidad_espacial], secondary_for: [velocidad_de_propagacion] }
    graph_binding: { channels: [wavelength_span] }
    pedagogical_notes: { es: "Debe medirse cresta a cresta, valle a valle o punto equivalente a punto equivalente.", en: "It must be measured crest to crest, trough to trough, or equivalent point to equivalent point." }
  - id: f
    symbol: "f"
    nombre: { es: Frecuencia, en: Frequency }
    descripcion: { es: Numero de oscilaciones completas por unidad de tiempo., en: Number of complete oscillations per unit time. }
    unidad_si: "Hz"
    dimension: "[T^-1]"
    is_vector: false
    components: []
    category: temporal_rate
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion]
    common_mistake: { es: Confundir frecuencia con velocidad de propagacion., en: Confusing frequency with propagation speed. }
    typical_range: "1 Hz a 1000 Hz en ejemplos introductorios"
    sign_behavior: { has_sign: false, meaning: { es: Cuenta ciclos por tiempo., en: It counts cycles per time. } }
    zero_behavior: { allowed: false, meaning: { es: Frecuencia cero no describe una onda periodica viajera., en: Zero frequency does not describe a traveling periodic wave. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "(0, inf)" }
    interpretation_role: { primary_for: [periodicidad_temporal], secondary_for: [velocidad_de_propagacion] }
    graph_binding: { channels: [frequency_control] }
    pedagogical_notes: { es: "La fuente suele fijar f.", en: "The source often fixes f." }
  - id: T
    symbol: "T"
    nombre: { es: Periodo, en: Period }
    descripcion: { es: Tiempo que tarda un punto del medio en completar una oscilacion., en: Time a point of the medium takes to complete one oscillation. }
    unidad_si: "s"
    dimension: "[T]"
    is_vector: false
    components: []
    category: temporal_period
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion]
    common_mistake: { es: Tomarlo como tiempo que tarda la onda en recorrer cualquier distancia., en: Taking it as the time the wave takes to cover any distance. }
    typical_range: "milisegundos a segundos"
    sign_behavior: { has_sign: false, meaning: { es: Es una duracion positiva., en: It is a positive duration. } }
    zero_behavior: { allowed: false, meaning: { es: Periodo cero no es fisico en este modelo., en: Zero period is not physical in this model. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "(0, inf)" }
    interpretation_role: { primary_for: [ciclo_temporal], secondary_for: [frecuencia] }
    graph_binding: { channels: [period_marker] }
    pedagogical_notes: { es: "T pertenece al movimiento temporal de un punto.", en: "T belongs to the temporal motion of one point." }
  - id: v
    symbol: "v"
    nombre: { es: Velocidad de propagacion, en: Propagation speed }
    descripcion: { es: Rapidez con que se desplaza una fase de la onda por el medio., en: Speed at which a wave phase travels through the medium. }
    unidad_si: "m/s"
    dimension: "[L T^-1]"
    is_vector: false
    components: []
    category: propagation
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_coord]
    common_mistake: { es: Confundirla con la velocidad instantanea de una particula del medio., en: Confusing it with the instantaneous velocity of a medium particle. }
    typical_range: "depende del medio; menor en cuerdas lentas, mayor en sonido o luz"
    sign_behavior: { has_sign: false, meaning: { es: Aqui se usa como rapidez positiva., en: Here it is used as a positive speed. } }
    zero_behavior: { allowed: false, meaning: { es: Sin propagacion no hay onda viajera., en: Without propagation there is no traveling wave. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "(0, inf)" }
    interpretation_role: { primary_for: [propagacion], secondary_for: [relacion_espacio_tiempo] }
    graph_binding: { channels: [speed_readout] }
    pedagogical_notes: { es: "v describe avance del patron, no transporte neto del medio.", en: "v describes pattern advance, not net transport of the medium." }
  - id: x
    symbol: "x"
    nombre: { es: Posicion, en: Position }
    descripcion: { es: Coordenada espacial donde se observa la perturbacion., en: Spatial coordinate where the disturbance is observed. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: independent_variable
    physical_role: coordinate
    used_in: [teoria, formulas, interpretacion, grafico_coord]
    common_mistake: { es: Confundir posicion de observacion con desplazamiento del medio., en: Confusing observation position with medium displacement. }
    typical_range: "0 m a varios metros en un montaje de aula"
    sign_behavior: { has_sign: true, meaning: { es: Depende del origen elegido., en: It depends on the chosen origin. } }
    zero_behavior: { allowed: true, meaning: { es: Marca el origen de coordenadas., en: It marks the coordinate origin. } }
    value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "any" }
    interpretation_role: { primary_for: [localizacion_espacial], secondary_for: [fase] }
    graph_binding: { channels: [x_axis] }
    pedagogical_notes: { es: "x localiza donde se mira la onda.", en: "x locates where the wave is observed." }
  - id: t
    symbol: "t"
    nombre: { es: Tiempo, en: Time }
    descripcion: { es: Variable temporal de observacion de la perturbacion., en: Temporal variable for observing the disturbance. }
    unidad_si: "s"
    dimension: "[T]"
    is_vector: false
    components: []
    category: independent_variable
    physical_role: coordinate
    used_in: [teoria, formulas, interpretacion]
    common_mistake: { es: Usarlo sin fijar tambien el punto de observacion., en: Using it without also fixing the observation point. }
    typical_range: "0 s a varios segundos en ejemplos introductorios"
    sign_behavior: { has_sign: true, meaning: { es: Depende del origen temporal elegido., en: It depends on the chosen time origin. } }
    zero_behavior: { allowed: true, meaning: { es: Marca el instante inicial elegido., en: It marks the chosen initial instant. } }
    value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "any" }
    interpretation_role: { primary_for: [evolucion_temporal], secondary_for: [fase] }
    graph_binding: { channels: [time_control] }
    pedagogical_notes: { es: "t indica cuando se observa.", en: "t indicates when the observation is made." }
`;export{e as default};
