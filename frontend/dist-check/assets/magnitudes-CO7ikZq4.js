const n=`magnitudes:
  - id: longitud_cuerda
    symbol: "[[L]]"
    nombre:
      es: Longitud de la cuerda
      en: String length
    descripcion:
      es: Longitud de la porcion de cuerda que vibra entre dos puntos fijos
      en: Length of the vibrating string portion between two fixed points
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role:
      es: Parametro geometrico de contorno
      en: Geometric boundary parameter
    used_in:
      - longitud_onda_estacionaria
      - frecuencia_estacionaria
      - frecuencia_fundamental
    common_mistake:
      es: Confundir con la longitud total de la cuerda fisica cuando solo una parte vibra
      en: Confusing with total physical string length when only a portion vibrates
    typical_range: "0.1 m a 10 m"
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud intrinsecamente positiva; una longitud nunca puede ser negativa
        en: Intrinsically positive quantity; a length can never be negative
    zero_behavior:
      allowed: false
      meaning:
        es: Cuerda de longitud cero carece de sentido fisico; todos los modos degenerarian
        en: Zero-length string has no physical meaning; all modes would degenerate
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for:
        - nodos_ubicacion
        - vientres_ubicacion
      secondary_for:
        - frecuencia_fundamental
    graph_binding:
      channels:
        - domain_visual
        - axis_x
    pedagogical_notes:
      es: "Parametro geometrico que cuantifica el dominio espacial del fenomeno. Junto con los extremos fijos, determina cuales longitudes de onda pueden establecerse en la cuerda."
      en: "Geometric parameter quantifying the spatial domain of the phenomenon. Together with fixed ends, determines which wavelengths can establish themselves in the string."

  - id: numero_armonico
    symbol: "[[n]]"
    nombre:
      es: Numero de modo
      en: Mode number
    descripcion:
      es: Numero entero positivo que identifica cada modo normal de vibracion. Determina cuantas medias longitudes de onda caben en la cuerda.
      en: Positive integer identifying each normal vibration mode. Determines how many half-wavelengths fit in the string.
    unidad_si: "1"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: dimension
    physical_role:
      es: Indice discreto de modo cuantico
      en: Discrete quantum-mode index
    used_in:
      - longitud_onda_estacionaria
      - frecuencia_estacionaria
      - posicion_nodos
      - posicion_vientres
    common_mistake:
      es: Creer que puede tomar valores fraccionarios o cero
      en: Believing it can take fractional values or zero
    typical_range: "entero de 1 a 20"
    sign_behavior:
      has_sign: false
      meaning:
        es: Indice de conteo siempre positivo; no tiene signo fisico asociado
        en: Counting index always positive; no physical sign associated
    zero_behavior:
      allowed: false
      meaning:
        es: "n=0 no corresponde a ningun modo de vibracion; la cuerda en reposo no es un modo"
        en: "n=0 does not correspond to any vibration mode; the string at rest is not a mode"
    value_nature:
      kind: ratio
      nonnegative_only: true
      expected_interval: "[1, +inf)"
    interpretation_role:
      primary_for:
        - cuantizacion_modos
        - espectro_armonico
      secondary_for:
        - numero_nodos
        - numero_vientres
    graph_binding:
      channels:
        - discrete_index
        - mode_selector
    pedagogical_notes:
      es: "Magnitud discreta que etiqueta los estados estacionarios permitidos. Aumentar n en una unidad agrega exactamente un vientre y un nodo interior al patron."
      en: "Discrete quantity labeling the allowed stationary states. Increasing n by one adds exactly one antinode and one interior node to the pattern."

  - id: amplitud_maxima
    symbol: "[[A]]"
    nombre:
      es: Amplitud de las ondas viajeras
      en: Traveling wave amplitude
    descripcion:
      es: Amplitud de cada onda viajera individual que, al superponerse, forma la onda estacionaria. La amplitud maxima en los vientres es el doble de este valor.
      en: Amplitude of each individual traveling wave that, when superposed, forms the standing wave. The maximum amplitude at antinodes is double this value.
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role:
      es: Parametro de excitacion del sistema vibrante
      en: Excitation parameter of the vibrating system
    used_in:
      - funcion_onda_estacionaria
    common_mistake:
      es: Confundir la amplitud individual A con la amplitud maxima 2A que alcanzan los vientres
      en: Confusing individual amplitude A with maximum amplitude 2A reached at antinodes
    typical_range: "0.001 m a 0.5 m"
    sign_behavior:
      has_sign: false
      meaning:
        es: Amplitud es magnitud positiva por definicion; el signo del desplazamiento lo porta y
        en: Amplitude is positive by definition; the displacement sign is carried by y
    zero_behavior:
      allowed: true
      meaning:
        es: Amplitud cero significa ausencia total de vibracion en la cuerda
        en: Zero amplitude means complete absence of vibration in the string
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, +inf)"
    interpretation_role:
      primary_for:
        - intensidad_sonora
        - energia_vibracion
      secondary_for: []
    graph_binding:
      channels:
        - amplitude_visual
        - displacement_y
    pedagogical_notes:
      es: "Controla la intensidad de la vibracion sin afectar las frecuencias ni los patrones espaciales en el modelo lineal. Los vientres siempre alcanzan exactamente 2A."
      en: "Controls vibration intensity without affecting frequencies or spatial patterns in the linear model. Antinodes always reach exactly 2A."

  - id: velocidad_propagacion
    symbol: "[[v]]"
    nombre:
      es: Velocidad de propagacion
      en: Propagation velocity
    descripcion:
      es: Rapidez con la que se desplazan las ondas viajeras individuales por la cuerda. Determina las frecuencias de los modos estacionarios.
      en: Speed at which individual traveling waves propagate along the string. Determines the frequencies of stationary modes.
    unidad_si: m/s
    dimension: "[L][T]^-1"
    is_vector: false
    components: []
    category: derived
    physical_role:
      es: Propiedad de transporte del medio elastico
      en: Transport property of the elastic medium
    used_in:
      - frecuencia_estacionaria
      - frecuencia_fundamental
    common_mistake:
      es: Confundir con la velocidad transversal de un punto de la cuerda, que varia en el tiempo
      en: Confusing with the transverse velocity of a string point, which varies in time
    typical_range: "10 m/s a 1000 m/s"
    sign_behavior:
      has_sign: false
      meaning:
        es: Rapidez escalar siempre positiva; la cuerda transmite la perturbacion en ambas direcciones
        en: Scalar speed always positive; the string transmits the disturbance in both directions
    zero_behavior:
      allowed: false
      meaning:
        es: Velocidad cero implicaria que la perturbacion nunca se propaga y no existiria patron estacionario
        en: Zero velocity would mean the disturbance never propagates and no stationary pattern could exist
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for:
        - tiempo_viaje
        - fase_relativa
      secondary_for:
        - frecuencia_fundamental
        - tension_cuerda
    graph_binding:
      channels:
        - propagation_visual
        - time_evolution
    pedagogical_notes:
      es: "Propiedad del medio que depende de la tension y la densidad lineal de la cuerda. Es identica para todos los modos en una misma cuerda bajo tension constante."
      en: "Property of the medium depending on tension and linear density of the string. Identical for all modes in the same string under constant tension."

  - id: longitud_onda_estacionaria
    symbol: "[[lambda_n]]"
    nombre:
      es: Longitud de onda del modo estacionario
      en: Wavelength of stationary mode
    descripcion:
      es: Distancia espacial entre dos puntos consecutivos que vibran en fase en el modo n-esimo. Cuantiza espacialmente el patron estacionario.
      en: Spatial distance between two consecutive points vibrating in phase in the n-th mode. Spatially quantizes the stationary pattern.
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: derived
    physical_role:
      es: Escala espacial de la perturbacion periodica cuantizada
      en: Spatial scale of the quantized periodic disturbance
    used_in:
      - frecuencia_estacionaria
      - nodos_espaciado
      - longitud_onda_estacionaria
    common_mistake:
      es: Confundir lambda_n con L/n en lugar de 2L/n; olvidar el factor 2
      en: Confusing lambda_n with L/n instead of 2L/n; forgetting the factor of 2
    typical_range: "0.01 m a 20 m"
    sign_behavior:
      has_sign: false
      meaning:
        es: Distancia espacial siempre positiva; representa un periodo espacial
        en: Spatial distance always positive; represents a spatial period
    zero_behavior:
      allowed: false
      meaning:
        es: Longitud de onda cero implicaria infinitas oscilaciones por unidad de longitud
        en: Zero wavelength would imply infinite oscillations per unit length
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for:
        - periodicidad_espacial
        - nodos_ubicacion
      secondary_for:
        - frecuencia_modo
    graph_binding:
      channels:
        - wavelength_visual
        - spatial_period
    pedagogical_notes:
      es: "Magnitud derivada que resulta de aplicar las condiciones de contorno. Para el modo n, exactamente n medias longitudes de onda caben en la cuerda."
      en: "Derived quantity resulting from applying boundary conditions. For mode n, exactly n half-wavelengths fit in the string."

  - id: frecuencia_modo
    symbol: "[[f_n]]"
    nombre:
      es: Frecuencia del modo estacionario
      en: Frequency of stationary mode
    descripcion:
      es: Frecuencia de oscilacion del modo n-esimo. Determina el tono musical percibido cuando la cuerda vibra predominantemente en ese modo.
      en: Oscillation frequency of the n-th mode. Determines the musical pitch perceived when the string vibrates predominantly in that mode.
    unidad_si: Hz
    dimension: "[T]^-1"
    is_vector: false
    components: []
    category: derived
    physical_role:
      es: Tasa de repeticion temporal del patron cuantizado
      en: Temporal repetition rate of the quantized pattern
    used_in:
      - frecuencia_estacionaria
      - funcion_onda_estacionaria
    common_mistake:
      es: Creer que las frecuencias son multiplos enteros de la fundamental sin verificar las condiciones de contorno del sistema
      en: Believing frequencies are integer multiples of the fundamental without verifying system boundary conditions
    typical_range: "10 Hz a 20 000 Hz"
    sign_behavior:
      has_sign: false
      meaning:
        es: Frecuencia es magnitud positiva por definicion; indica ciclos por segundo
        en: Frequency is positive by definition; indicates cycles per second
    zero_behavior:
      allowed: false
      meaning:
        es: Frecuencia cero corresponderia a ausencia de oscilacion; no hay modo estacionario
        en: Zero frequency would correspond to absence of oscillation; no stationary mode
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for:
        - tono_musical
        - periodo_temporal
      secondary_for:
        - energia_fonetica
        - timbre_instrumento
    graph_binding:
      channels:
        - frequency_axis
        - temporal_rate
    pedagogical_notes:
      es: "Magnitud derivada que cuantiza temporalmente el patron. El espectro de frecuencias es armonico: f_n es exactamente n veces la frecuencia fundamental f_1."
      en: "Derived quantity that temporally quantizes the pattern. The frequency spectrum is harmonic: f_n is exactly n times the fundamental frequency f_1."

  - id: frecuencia_fundamental
    symbol: "[[f_1]]"
    nombre:
      es: Frecuencia fundamental
      en: Fundamental frequency
    descripcion:
      es: Frecuencia del primer modo estacionario (n=1). Es la frecuencia mas baja posible y la base de la serie armonica.
      en: Frequency of the first stationary mode (n=1). It is the lowest possible frequency and the base of the harmonic series.
    unidad_si: Hz
    dimension: "[T]^-1"
    is_vector: false
    components: []
    category: derived
    physical_role:
      es: Base de la serie armonica del sistema
      en: Base of the harmonic series of the system
    used_in:
      - frecuencia_fundamental
    common_mistake:
      es: Confundir la frecuencia fundamental con la frecuencia de cualquier modo; f_1 es solo para n=1
      en: Confusing fundamental frequency with the frequency of any mode; f_1 is only for n=1
    typical_range: "10 Hz a 2000 Hz"
    sign_behavior:
      has_sign: false
      meaning:
        es: Frecuencia siempre positiva; es la mas baja del espectro permitido
        en: Frequency always positive; it is the lowest in the allowed spectrum
    zero_behavior:
      allowed: false
      meaning:
        es: f_1 cero implicaria velocidad nula o longitud infinita, ambas sin sentido fisico
        en: f_1 zero would imply zero velocity or infinite length, both without physical meaning
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for:
        - frecuencia_base
        - periodo_fundamental
      secondary_for:
        - afinacion_instrumento
    graph_binding:
      channels:
        - frequency_axis
        - fundamental_marker
    pedagogical_notes:
      es: "La frecuencia fundamental es el primer armonico y determina el tono percibido. Todos los demas modos son multiplos enteros de f_1, produciendo el espectro armonico completo."
      en: "The fundamental frequency is the first harmonic and determines the perceived pitch. All other modes are integer multiples of f_1, producing the complete harmonic spectrum."

  - id: desplazamiento_transversal
    symbol: "[[y]]"
    nombre:
      es: Desplazamiento transversal
      en: Transverse displacement
    descripcion:
      es: Desplazamiento de un punto de la cuerda respecto a su posicion de equilibrio en la direccion perpendicular al eje de la cuerda.
      en: Displacement of a string point from its equilibrium position in the direction perpendicular to the string axis.
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: state
    physical_role:
      es: Variable de estado dinamico del sistema vibrante
      en: Dynamic state variable of the vibrating system
    used_in:
      - funcion_onda_estacionaria
    common_mistake:
      es: Confundir el desplazamiento instantaneo y(x,t) con la amplitud maxima; y puede ser cero en nodos para todo t
      en: Confusing instantaneous displacement y(x,t) with maximum amplitude; y can be zero at nodes for all t
    typical_range: "-0.5 m a 0.5 m"
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo indica desplazamiento en una direccion transversal; negativo en la contraria
        en: Positive indicates displacement in one transverse direction; negative in the opposite
    zero_behavior:
      allowed: true
      meaning:
        es: y=0 en nodos para todo tiempo; tambien en los instantes en que toda la cuerda cruza el equilibrio
        en: "y=0 at nodes for all time; also at instants when the entire string crosses equilibrium"
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-2A, 2A)"
    interpretation_role:
      primary_for:
        - perfil_espacial
        - amplitud_en_punto
      secondary_for:
        - velocidad_transversal
    graph_binding:
      channels:
        - displacement_y
        - standing_profile
    pedagogical_notes:
      es: "Variable de campo que describe el estado completo de la cuerda. Su separacion de variables en parte espacial y temporal es la clave de los modos normales."
      en: "Field variable describing the complete state of the string. Its separation of variables into spatial and temporal parts is the key to normal modes."

  - id: posicion_nodo
    symbol: "[[x_nodo]]"
    nombre:
      es: Posicion de nodo
      en: Node position
    descripcion:
      es: Coordenada a lo largo de la cuerda donde la amplitud de oscilacion es siempre nula debido a interferencia destructiva permanente.
      en: Coordinate along the string where oscillation amplitude is always null due to permanent destructive interference.
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: derived
    physical_role:
      es: Ubicacion de interferencia destructiva permanente
      en: Location of permanent destructive interference
    used_in:
      - posicion_nodos
    common_mistake:
      es: Creer que los nodos son puntos de minima velocidad; en realidad son de amplitud nula pero tension maxima variable
      en: Believing nodes are minimum velocity points; they are actually zero amplitude but variable maximum tension
    typical_range: "0 m a L m"
    sign_behavior:
      has_sign: false
      meaning:
        es: Coordenada positiva medida desde el extremo x=0 de referencia
        en: Positive coordinate measured from reference end x=0
    zero_behavior:
      allowed: true
      meaning:
        es: "x_nodo=0 corresponde al primer extremo fijo de la cuerda"
        en: "x_nodo=0 corresponds to the first fixed end of the string"
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, L]"
    interpretation_role:
      primary_for:
        - patron_nodal
        - condiciones_contorno
      secondary_for:
        - numero_nodos
    graph_binding:
      channels:
        - node_markers
        - spatial_positions
    pedagogical_notes:
      es: "Los nodos son consecuencia directa de las condiciones de contorno. Hay exactamente n+1 nodos en el modo n, incluyendo los dos extremos fijos."
      en: "Nodes are a direct consequence of boundary conditions. There are exactly n+1 nodes in mode n, including the two fixed ends."

  - id: posicion_vientre
    symbol: "[[x_vientre]]"
    nombre:
      es: Posicion de vientre
      en: Antinode position
    descripcion:
      es: Coordenada a lo largo de la cuerda donde la amplitud de oscilacion es maxima (2A) debido a interferencia constructiva permanente.
      en: Coordinate along the string where oscillation amplitude is maximum (2A) due to permanent constructive interference.
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: derived
    physical_role:
      es: Ubicacion de interferencia constructiva permanente
      en: Location of permanent constructive interference
    used_in:
      - posicion_vientres
    common_mistake:
      es: Confundir el numero de vientres con el numero de modo; hay exactamente n vientres en el modo n
      en: Confusing the number of antinodes with the mode number; there are exactly n antinodes in mode n
    typical_range: "0 m a L m"
    sign_behavior:
      has_sign: false
      meaning:
        es: Coordenada positiva medida desde el extremo x=0 de referencia
        en: Positive coordinate measured from reference end x=0
    zero_behavior:
      allowed: false
      meaning:
        es: "x_vientre nunca es cero ni L; los vientres siempre estan estrictamente entre nodos"
        en: "x_vientre is never zero or L; antinodes are always strictly between nodes"
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, L)"
    interpretation_role:
      primary_for:
        - patron_antinodal
        - amplitud_maxima_local
      secondary_for:
        - numero_vientres
    graph_binding:
      channels:
        - antinode_markers
        - spatial_positions
    pedagogical_notes:
      es: "Los vientres se ubican exactamente en el punto medio entre nodos consecutivos. En el modo n hay exactamente n vientres, cada uno alcanzando amplitud maxima 2A."
      en: "Antinodes are located exactly at the midpoint between consecutive nodes. In mode n there are exactly n antinodes, each reaching maximum amplitude 2A."

  - id: indice_nodo
    symbol: "[[m]]"
    nombre:
      es: Indice de nodo o vientre
      en: Node or antinode index
    descripcion:
      es: Numero entero que enumera los nodos (m=0,1,...,n) o los vientres (m=1,2,...,n) del patron estacionario en el modo n.
      en: Integer that enumerates the nodes (m=0,1,...,n) or antinodes (m=1,2,...,n) of the stationary pattern in mode n.
    unidad_si: "1"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: dimension
    physical_role:
      es: Indice de posicion dentro del patron nodal
      en: Position index within the nodal pattern
    used_in:
      - posicion_nodos
      - posicion_vientres
    common_mistake:
      es: Confundir el rango de m para nodos (0 a n) con el de vientres (1 a n)
      en: Confusing the range of m for nodes (0 to n) with that for antinodes (1 to n)
    typical_range: "entero de 0 a n"
    sign_behavior:
      has_sign: false
      meaning:
        es: Indice de conteo siempre no negativo
        en: Counting index always non-negative
    zero_behavior:
      allowed: true
      meaning:
        es: "m=0 corresponde al primer nodo extremo de la cuerda (x=0)"
        en: "m=0 corresponds to the first end node of the string (x=0)"
    value_nature:
      kind: ratio
      nonnegative_only: true
      expected_interval: "[0, n]"
    interpretation_role:
      primary_for:
        - patron_nodal
        - enumeracion_posiciones
      secondary_for: []
    graph_binding:
      channels:
        - node_index
    pedagogical_notes:
      es: "Indice auxiliar que parametriza las posiciones de nodos y vientres. Es entero por la misma razon que n: las condiciones de contorno cuantizan el sistema."
      en: "Auxiliary index parametrizing node and antinode positions. It is integer for the same reason as n: boundary conditions quantize the system."
`;export{n as default};
