const e=`version: 5
topic:
  id: coherencia
  title:
    es: Coherencia
    en: Coherence

magnitudes:
  - id: c
    symbol: "c"
    nombre: { es: velocidad de la luz, en: speed of light }
    descripcion: { es: Velocidad de propagacion usada para convertir tiempo de coherencia en longitud., en: Propagation speed used to convert coherence time into length. }
    unidad_si: "m/s"
    dimension: "[L T^-1]"
    is_vector: false
    components: []
    category: constant
    physical_role: core_physical_quantity
    used_in: [longitud_coherencia]
    common_mistake: { es: "Usar [[c]] sin distinguir medio y vacio cuando el montaje no esta en aire.", en: "Using [[c]] without distinguishing medium and vacuum when the setup is not in air." }
    typical_range: "2.998e8 m/s en vacio"
    sign_behavior: { has_sign: false, meaning: { es: Es una rapidez positiva., en: It is a positive speed. } }
    zero_behavior: { allowed: false, meaning: { es: Sin propagacion no hay longitud de coherencia espacial., en: Without propagation there is no spatial coherence length. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "c > 0" }
    interpretation_role: { primary_for: [conversion_temporal], secondary_for: [escala_espacial] }
    graph_binding: { channels: [reference_speed] }
    pedagogical_notes: { es: "[[c]] convierte estabilidad temporal en distancia recorrida por la fase.", en: "[[c]] converts temporal stability into distance travelled by phase." }

  - id: tau_c
    symbol: "\\\\tau_c"
    nombre: { es: tiempo de coherencia, en: coherence time }
    descripcion: { es: Intervalo temporal durante el cual la fase de la fuente permanece correlacionada de forma util., en: Time interval over which the source phase remains usefully correlated. }
    unidad_si: "s"
    dimension: "[T]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in: [longitud_coherencia]
    common_mistake: { es: "Confundir [[tau_c]] con la duracion total de emision de la fuente.", en: "Confusing [[tau_c]] with the total emission duration of the source." }
    typical_range: "10^-14 s a 10^-6 s segun fuente"
    sign_behavior: { has_sign: false, meaning: { es: Es un intervalo positivo., en: It is a positive interval. } }
    zero_behavior: { allowed: false, meaning: { es: Tiempo nulo elimina coherencia temporal observable., en: Zero time removes observable temporal coherence. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "tau_c > 0" }
    interpretation_role: { primary_for: [estabilidad_temporal], secondary_for: [L_c] }
    graph_binding: { channels: [time_control] }
    pedagogical_notes: { es: "[[tau_c]] mide estabilidad de fase, no brillo ni potencia.", en: "[[tau_c]] measures phase stability, not brightness or power." }

  - id: L_c
    symbol: "L_c"
    nombre: { es: longitud de coherencia, en: coherence length }
    descripcion: { es: Diferencia de camino maxima aproximada para mantener interferencia visible., en: Approximate maximum path difference for keeping visible interference. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [longitud_coherencia, coherencia_relativa]
    common_mistake: { es: "Tratar [[L_c]] como tamaño fisico de la fuente en lugar de escala de correlacion de fase.", en: "Treating [[L_c]] as physical source size instead of phase-correlation scale." }
    typical_range: "micrometros en fuentes anchas, metros o mas en lasers estrechos"
    sign_behavior: { has_sign: false, meaning: { es: Es una distancia positiva., en: It is a positive distance. } }
    zero_behavior: { allowed: false, meaning: { es: Longitud nula impide interferencia estable salvo coincidencia exacta., en: Zero length prevents stable interference except exact matching. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "L_c > 0" }
    interpretation_role: { primary_for: [interferencia_visible], secondary_for: [comparacion_camino] }
    graph_binding: { channels: [scale] }
    pedagogical_notes: { es: "[[L_c]] se compara con [[Delta_L]] para decidir si las franjas sobreviven.", en: "[[L_c]] is compared with [[Delta_L]] to decide whether fringes survive." }

  - id: Delta_L
    symbol: "\\\\Delta L"
    nombre: { es: diferencia de camino optico, en: optical path difference }
    descripcion: { es: Desajuste espacial entre dos caminos que se recombinan en un montaje interferencial., en: Spatial mismatch between two paths recombined in an interferometric setup. }
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in: [coherencia_relativa]
    common_mistake: { es: Usar distancia geometrica sin considerar el camino optico del medio., en: Using geometric distance without considering optical path in the medium. }
    typical_range: "micrometros a metros segun interferometro"
    sign_behavior: { has_sign: false, meaning: { es: Se usa como desajuste positivo de caminos., en: It is used as a positive path mismatch. } }
    zero_behavior: { allowed: true, meaning: { es: Caminos iguales maximizan coherencia relativa en el modelo simple., en: Equal paths maximize relative coherence in the simple model. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "Delta_L >= 0" }
    interpretation_role: { primary_for: [comparacion_con_L_c], secondary_for: [perdida_contraste] }
    graph_binding: { channels: [x_path] }
    pedagogical_notes: { es: "[[Delta_L]] es el control experimental que compite con [[L_c]].", en: "[[Delta_L]] is the experimental control competing with [[L_c]]." }

  - id: C_rel
    symbol: "C_{rel}"
    nombre: { es: coherencia relativa, en: relative coherence }
    descripcion: { es: Indicador adimensional de coherencia visible segun el desajuste de caminos., en: Dimensionless indicator of visible coherence according to path mismatch. }
    unidad_si: "1"
    dimension: "[1]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [coherencia_relativa]
    common_mistake: { es: "Interpretar [[C_rel]] como intensidad luminosa total.", en: "Interpreting [[C_rel]] as total light intensity." }
    typical_range: "0 a 1"
    sign_behavior: { has_sign: false, meaning: { es: Se interpreta como indicador no negativo., en: It is interpreted as a nonnegative indicator. } }
    zero_behavior: { allowed: true, meaning: { es: Valor cercano a cero indica franjas practicamente borradas., en: A value near zero indicates practically erased fringes. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "0 <= C_rel <= 1" }
    interpretation_role: { primary_for: [franjas_visibles], secondary_for: [contraste] }
    graph_binding: { channels: [y_coherence, star_value] }
    pedagogical_notes: { es: "[[C_rel]] resume si la diferencia de camino sigue dentro de la escala de coherencia.", en: "[[C_rel]] summarizes whether path difference remains within coherence scale." }

  - id: I_max
    symbol: "I_{max}"
    nombre: { es: intensidad maxima, en: maximum intensity }
    descripcion: { es: Intensidad medida en una franja brillante del patron., en: Intensity measured at a bright fringe of the pattern. }
    unidad_si: "W/m^2"
    dimension: "[M T^-3]"
    is_vector: false
    components: []
    category: measured
    physical_role: core_physical_quantity
    used_in: [visibilidad_franjas]
    common_mistake: { es: "Usar [[I_max]] solo para medir brillo y no contraste.", en: "Using [[I_max]] only to measure brightness and not contrast." }
    typical_range: "depende de la fuente y del detector"
    sign_behavior: { has_sign: false, meaning: { es: Intensidad positiva., en: Positive intensity. } }
    zero_behavior: { allowed: false, meaning: { es: Una franja maxima nula no permite definir visibilidad util., en: A zero maximum fringe does not allow useful visibility. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "I_max > 0" }
    interpretation_role: { primary_for: [contraste], secondary_for: [medida_experimental] }
    graph_binding: { channels: [] }
    pedagogical_notes: { es: "[[I_max]] debe compararse con [[I_min]] para leer contraste.", en: "[[I_max]] must be compared with [[I_min]] to read contrast." }

  - id: I_min
    symbol: "I_{min}"
    nombre: { es: intensidad minima, en: minimum intensity }
    descripcion: { es: Intensidad medida en una franja oscura del patron., en: Intensity measured at a dark fringe of the pattern. }
    unidad_si: "W/m^2"
    dimension: "[M T^-3]"
    is_vector: false
    components: []
    category: measured
    physical_role: core_physical_quantity
    used_in: [visibilidad_franjas]
    common_mistake: { es: "Pensar que [[I_min]] debe ser cero para cualquier interferencia.", en: "Thinking [[I_min]] must be zero for any interference." }
    typical_range: "menor o igual que I_max"
    sign_behavior: { has_sign: false, meaning: { es: Intensidad no negativa., en: Nonnegative intensity. } }
    zero_behavior: { allowed: true, meaning: { es: Minimo nulo indica contraste ideal en el detector., en: Zero minimum indicates ideal detector contrast. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "I_min >= 0" }
    interpretation_role: { primary_for: [contraste], secondary_for: [fondo] }
    graph_binding: { channels: [] }
    pedagogical_notes: { es: "[[I_min]] alto suele indicar perdida de coherencia o fondo luminoso.", en: "High [[I_min]] often indicates coherence loss or luminous background." }

  - id: V
    symbol: "V"
    nombre: { es: visibilidad de franjas, en: fringe visibility }
    descripcion: { es: Contraste normalizado entre maximos y minimos de interferencia., en: Normalized contrast between interference maxima and minima. }
    unidad_si: "1"
    dimension: "[1]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [visibilidad_franjas]
    common_mistake: { es: "Confundir [[V]] con intensidad absoluta del patron.", en: "Confusing [[V]] with absolute pattern intensity." }
    typical_range: "0 a 1"
    sign_behavior: { has_sign: false, meaning: { es: Visibilidad no negativa., en: Nonnegative visibility. } }
    zero_behavior: { allowed: true, meaning: { es: Valor cero indica franjas sin contraste observable., en: Zero value indicates fringes without observable contrast. } }
    value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "0 <= V <= 1" }
    interpretation_role: { primary_for: [contraste_observable], secondary_for: [calidad_interferencia] }
    graph_binding: { channels: [visibility] }
    pedagogical_notes: { es: "[[V]] mide contraste experimental y no energia total.", en: "[[V]] measures experimental contrast and not total energy." }
`;export{e as default};
