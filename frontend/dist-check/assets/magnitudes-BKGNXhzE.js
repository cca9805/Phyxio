const e=`version: v5
leaf_id: ecuacion-de-onda
magnitudes:
  - id: y
    symbol: "y"
    nombre: { es: Perturbacion, en: Disturbance }
    descripcion: { es: Valor local de la magnitud que oscila en la onda., en: Local value of the quantity that oscillates in the wave. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_coord]
    common_mistake: { es: Interpretarla como posicion total de la onda., en: Interpreting it as the total position of the wave. }
    typical_range: "-A a A"
    sign_behavior: { has_sign: true, meaning: { es: Lado de la perturbacion respecto al equilibrio., en: Side of the disturbance relative to equilibrium. } }
    zero_behavior: { allowed: true, meaning: { es: Equilibrio instantaneo., en: Instantaneous equilibrium. } }
    value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "any" }
    interpretation_role: { primary_for: [estado_local], secondary_for: [curvatura] }
    graph_binding: { channels: [wave_profile] }
    pedagogical_notes: { es: "La ecuacion de onda describe como cambia y en x y t.", en: "The wave equation describes how y changes in x and t." }
  - id: x
    symbol: "x"
    nombre: { es: Posicion, en: Position }
    descripcion: { es: Coordenada espacial sobre la que se evalua la forma de la onda., en: Spatial coordinate over which the wave shape is evaluated. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: independent_variable
    physical_role: coordinate
    used_in: [teoria, formulas, interpretacion, grafico_coord]
    common_mistake: { es: Confundirla con la perturbacion y., en: Confusing it with disturbance y. }
    typical_range: "0 m a varios metros en montajes de aula"
    sign_behavior: { has_sign: true, meaning: { es: Depende del origen espacial elegido., en: It depends on the chosen spatial origin. } }
    zero_behavior: { allowed: true, meaning: { es: Origen espacial., en: Spatial origin. } }
    value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "any" }
    interpretation_role: { primary_for: [estructura_espacial], secondary_for: [fase] }
    graph_binding: { channels: [x_axis] }
    pedagogical_notes: { es: "x permite hablar de curvatura espacial.", en: "x makes spatial curvature meaningful." }
  - id: t
    symbol: "t"
    nombre: { es: Tiempo, en: Time }
    descripcion: { es: Instante en el que se observa la perturbacion., en: Instant at which the disturbance is observed. }
    unidad_si: "s"
    dimension: "[T]"
    is_vector: false
    components: []
    category: independent_variable
    physical_role: coordinate
    used_in: [teoria, formulas, interpretacion]
    common_mistake: { es: Usarlo sin fijar tambien la posicion., en: Using it without also fixing position. }
    typical_range: "milisegundos a segundos"
    sign_behavior: { has_sign: true, meaning: { es: Depende del origen temporal., en: It depends on the time origin. } }
    zero_behavior: { allowed: true, meaning: { es: Instante inicial elegido., en: Chosen initial instant. } }
    value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "any" }
    interpretation_role: { primary_for: [evolucion_temporal], secondary_for: [fase] }
    graph_binding: { channels: [time_control] }
    pedagogical_notes: { es: "t permite hablar de cambio temporal.", en: "t makes temporal change meaningful." }
  - id: v
    symbol: "v"
    nombre: { es: Velocidad de propagacion, en: Propagation speed }
    descripcion: { es: Rapidez con la que avanza una fase de la perturbacion., en: Speed at which a phase of the disturbance advances. }
    unidad_si: "m/s"
    dimension: "[L T^-1]"
    is_vector: false
    components: []
    category: propagation
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_coord]
    common_mistake: { es: Confundirla con rapidez vertical de una particula del medio., en: Confusing it with vertical speed of a medium particle. }
    typical_range: "1 m/s a 1000 m/s en ejemplos mecanicos y acusticos introductorios"
    sign_behavior: { has_sign: false, meaning: { es: Se usa como rapidez positiva., en: It is used as positive speed. } }
    zero_behavior: { allowed: false, meaning: { es: Sin propagacion no hay onda viajera en este modelo., en: Without propagation there is no traveling wave in this model. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "(0, inf)" }
    interpretation_role: { primary_for: [relacion_curvatura_cambio], secondary_for: [fase] }
    graph_binding: { channels: [speed_control] }
    pedagogical_notes: { es: "v pesa la curvatura espacial dentro de la ecuacion.", en: "v weights spatial curvature in the equation." }
  - id: A
    symbol: "A"
    nombre: { es: Amplitud, en: Amplitude }
    descripcion: { es: Maximo valor absoluto de la perturbacion armonica., en: Maximum absolute value of the harmonic disturbance. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_coord]
    common_mistake: { es: Pensar que cambia la velocidad de propagacion por si sola., en: Thinking it changes propagation speed by itself. }
    typical_range: "milimetros a centimetros en ondas de cuerda"
    sign_behavior: { has_sign: false, meaning: { es: Es un maximo no negativo., en: It is a non-negative maximum. } }
    zero_behavior: { allowed: true, meaning: { es: Sin perturbacion apreciable., en: No appreciable disturbance. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "[0, inf)" }
    interpretation_role: { primary_for: [tamano_solucion], secondary_for: [energia_cualitativa] }
    graph_binding: { channels: [amplitude_control] }
    pedagogical_notes: { es: "A escala la solucion, pero no sustituye el papel de v.", en: "A scales the solution but does not replace the role of v." }
  - id: k
    symbol: "k"
    nombre: { es: Numero de onda, en: Wavenumber }
    descripcion: { es: Medida de repeticion espacial asociada a la fase de la onda., en: Measure of spatial repetition associated with wave phase. }
    unidad_si: "rad/m"
    dimension: "[L^-1]"
    is_vector: false
    components: []
    category: phase_parameter
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion]
    common_mistake: { es: Confundirlo con velocidad de propagacion., en: Confusing it with propagation speed. }
    typical_range: "1 rad/m a 100 rad/m en ejemplos de cuerda"
    sign_behavior: { has_sign: false, meaning: { es: Se usa como modulo espacial positivo., en: It is used as a positive spatial magnitude. } }
    zero_behavior: { allowed: false, meaning: { es: No hay repeticion espacial finita., en: There is no finite spatial repetition. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "(0, inf)" }
    interpretation_role: { primary_for: [fase_espacial], secondary_for: [velocidad_fase] }
    graph_binding: { channels: [wavenumber_control] }
    pedagogical_notes: { es: "k comprime la informacion espacial de la fase.", en: "k compresses spatial phase information." }
  - id: omega
    symbol: "omega"
    nombre: { es: Frecuencia angular, en: Angular frequency }
    descripcion: { es: Ritmo angular con el que cambia la fase en el tiempo., en: Angular rate at which phase changes in time. }
    unidad_si: "rad/s"
    dimension: "[T^-1]"
    is_vector: false
    components: []
    category: phase_parameter
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion]
    common_mistake: { es: Confundirla con velocidad de propagacion., en: Confusing it with propagation speed. }
    typical_range: "10 rad/s a 1000 rad/s en ejemplos introductorios"
    sign_behavior: { has_sign: false, meaning: { es: Se usa como ritmo angular positivo., en: It is used as a positive angular rate. } }
    zero_behavior: { allowed: false, meaning: { es: No hay oscilacion temporal periodica., en: There is no periodic temporal oscillation. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "(0, inf)" }
    interpretation_role: { primary_for: [fase_temporal], secondary_for: [velocidad_fase] }
    graph_binding: { channels: [angular_frequency_control] }
    pedagogical_notes: { es: "omega describe ritmo temporal de fase.", en: "omega describes temporal phase rate." }
`;export{e as default};
