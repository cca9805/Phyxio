const n=`version: "v5"
id: interpretacion_nodos_y_antinodos
leaf_id: nodos-y-antinodos

nombre:
  es: Interpretacion de nodos y antinodos
  en: Nodes and antinodes interpretation

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-estacionarias
  parent_id: ondas-estacionarias
  ruta_relativa: fisica-clasica/ondas/ondas-estacionarias/nodos-y-antinodos

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    calculator_title:
      es: Calculadora de posiciones nodales
      en: Nodal position calculator
    result_title:
      es: Resultado del calculo
      en: Calculation result
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_messages: 3
    truncate_at: 200

dependencies:
  formulas:
    - distancia_nodos
    - distancia_nodo_antinodo
    - posicion_nodo_lambda
    - posicion_antinodo_lambda
    - amplitud_maxima_antinodo
  magnitudes:
    - lambda_onda
    - distancia_entre_nodos
    - distancia_nodo_antinodo
    - posicion_nodo
    - posicion_antinodo
    - numero_nodo
    - numero_antinodo
    - amplitud_maxima

global_context:
  physical_domain:
    es: Ondas estacionarias en sistemas con condiciones de contorno fijas o nodos en extremos
    en: Standing waves in systems with fixed boundary conditions or nodes at ends
  axis_convention:
    es: El eje x representa la coordenada espacial desde un extremo de referencia con nodo
    en: The x-axis represents the spatial coordinate from a reference end with node
  standard_assumptions:
    - La onda es estacionaria pura sin componentes viajeras significativas
    - El medio es homogeneo y lineal
    - No hay perdidas de energia por amortiguamiento
    - Las condiciones de contorno son fijas o de nodo en los extremos
  standard_warnings:
    - En sistemas reales, los nodos pueden no tener amplitud exactamente cero
    - La longitud de onda debe corresponder a la frecuencia de operacion actual

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true

targets:
  lambda_onda:
    magnitude_type: length
    semantic_role:
      es: Longitud de onda que fija la escala espacial completa del patron de nodos y antinodos.
      en: Wavelength that fixes the complete spatial scale of the node and antinode pattern.
    next_step_rules:
      - id: lambda_next_spacing
        when: "true"
        status: ok
        text:
          es: "Con [[lambda_onda]] conocida, puedes obtener [[distancia_entre_nodos]] y [[distancia_nodo_antinodo]]."
          en: "With [[lambda_onda]] known, you can obtain [[distancia_entre_nodos]] and [[distancia_nodo_antinodo]]."
    summary_rules:
      - id: lambda_summary
        when: "true"
        status: ok
        text:
          es: "[[lambda_onda]] controla la separacion entre nodos, antinodos y maximos de [[amplitud_maxima]]."
          en: "[[lambda_onda]] controls the spacing between nodes, antinodes, and maxima of [[amplitud_maxima]]."
    physical_reading_rules:
      - id: lambda_reading
        when: "true"
        status: ok
        text:
          es: "Una longitud de onda mayor expande todo el patron estacionario."
          en: "A larger wavelength expands the whole standing-wave pattern."
    coherence_rules:
      - id: lambda_positive
        when: "lambda_onda <= 0"
        status: error
        text:
          es: "La longitud de onda debe ser positiva."
          en: "Wavelength must be positive."
    model_validity_rules:
      - id: lambda_validity
        when: "true"
        status: ok
        text:
          es: "Valido si el medio mantiene una onda estacionaria estable."
          en: "Valid if the medium maintains a stable standing wave."
    graph_rules:
      - id: lambda_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[lambda_onda]] se lee como el doble de la distancia entre nodos consecutivos."
          en: "In the graph, [[lambda_onda]] is read as twice the distance between consecutive nodes."
    likely_errors:
      - id: lambda_error_half
        when: "true"
        status: warning
        text:
          es: "Error comun: confundir [[lambda_onda]] con [[distancia_entre_nodos]], que solo representa media longitud de onda."
          en: "Common error: confusing [[lambda_onda]] with [[distancia_entre_nodos]], which represents only half a wavelength."

  amplitud_maxima:
    magnitude_type: length
    semantic_role:
      es: Maximo desplazamiento de oscilacion alcanzado en los antinodos de la onda estacionaria.
      en: Maximum oscillation displacement reached at the antinodes of the standing wave.
    next_step_rules:
      - id: amax_next_energy
        when: "true"
        status: ok
        text:
          es: "Relaciona [[amplitud_maxima]] con la intensidad visual de los antinodos y con la energia almacenada."
          en: "Relate [[amplitud_maxima]] to the visual intensity of antinodes and stored energy."
    summary_rules:
      - id: amax_summary
        when: "true"
        status: ok
        text:
          es: "[[amplitud_maxima]] aparece en los antinodos; en los nodos la amplitud es nula."
          en: "[[amplitud_maxima]] appears at antinodes; at nodes the amplitude is zero."
    physical_reading_rules:
      - id: amax_reading
        when: "true"
        status: ok
        text:
          es: "Si [[amplitud_maxima]] aumenta, los antinodos son mas visibles, pero sus posiciones no cambian."
          en: "If [[amplitud_maxima]] increases, antinodes become more visible, but their positions do not change."
    coherence_rules:
      - id: amax_nonnegative
        when: "amplitud_maxima < 0"
        status: error
        text:
          es: "La amplitud maxima no puede ser negativa."
          en: "Maximum amplitude cannot be negative."
    model_validity_rules:
      - id: amax_validity
        when: "true"
        status: ok
        text:
          es: "La lectura de amplitud supone oscilaciones lineales y antinodos bien definidos."
          en: "Amplitude reading assumes linear oscillations and well-defined antinodes."
    graph_rules:
      - id: amax_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[amplitud_maxima]] corresponde a los picos de la envolvente estacionaria."
          en: "In the graph, [[amplitud_maxima]] corresponds to the peaks of the standing envelope."
    likely_errors:
      - id: amax_error_node
        when: "true"
        status: warning
        text:
          es: "Error comun: creer que [[amplitud_maxima]] aparece en un nodo; en un nodo la amplitud ideal es cero."
          en: "Common error: believing [[amplitud_maxima]] appears at a node; at an ideal node the amplitude is zero."

  distancia_entre_nodos:
    magnitude_type: length
    semantic_role:
      es: Separacion espacial caracteristica entre puntos consecutivos de amplitud nula en la onda estacionaria.
      en: Characteristic spatial separation between consecutive points of zero amplitude in the standing wave.
    next_step_rules:
      - id: dnodos_next_longitud
        when: "true"
        status: ok
        text:
          es: "Con [[distancia_entre_nodos]] conocida, calcula [[lambda_onda]] multiplicando por dos."
          en: "With [[distancia_entre_nodos]] known, calculate [[lambda_onda]] by multiplying by two."
    summary_rules:
      - id: dnodos_summary_positive
        when: "distancia_entre_nodos > 0"
        status: ok
        text:
          es: "[[distancia_entre_nodos]] indica la separacion entre nodos adyacentes."
          en: "[[distancia_entre_nodos]] indicates the separation between adjacent nodes."
    physical_reading_rules:
      - id: dnodos_reading_scale
        when: "distancia_entre_nodos < 0.001"
        status: ok
        text:
          es: "[[distancia_entre_nodos]] es menor de un milimetro, tipico de ultrasonido."
          en: "[[distancia_entre_nodos]] is less than one millimeter, typical of ultrasound."
      - id: dnodos_reading_default
        when: "true"
        status: ok
        text:
          es: "La distancia entre nodos permite identificar la escala espacial de la onda estacionaria."
          en: "The distance between nodes identifies the spatial scale of the standing wave."
    coherence_rules:
      - id: dnodos_coherence_positive
        when: "distancia_entre_nodos <= 0"
        status: error
        text:
          es: "La distancia debe ser positiva."
          en: "Distance must be positive."
    model_validity_rules:
      - id: dnodos_validity_ideal
        when: "true"
        status: ok
        text:
          es: "El modelo aplica a ondas estacionarias ideales."
          en: "The model applies to ideal standing waves."
    graph_rules:
      - id: dnodos_graph_nodes
        when: "true"
        status: ok
        text:
          es: "En el diagrama, los nodos aparecen como cruces con el eje horizontal separados por [[distancia_entre_nodos]]."
          en: "In the diagram, nodes appear as crossings with the horizontal axis separated by [[distancia_entre_nodos]]."
    likely_errors:
      - id: dnodos_error_confusion_lambda
        when: "true"
        status: warning
        text:
          es: "Error comun: confundir [[distancia_entre_nodos]] con [[lambda_onda]]. Recuerda que d_nodos = lambda/2."
          en: "Common error: confusing [[distancia_entre_nodos]] with [[lambda_onda]]. Remember that d_nodes = lambda/2."

  distancia_nodo_antinodo:
    magnitude_type: length
    semantic_role:
      es: Separacion espacial entre un punto de amplitud nula y el punto de maxima amplitud mas cercano.
      en: Spatial separation between a point of zero amplitude and the nearest point of maximum amplitude.
    next_step_rules:
      - id: dna_next_amplitud
        when: "true"
        status: ok
        text:
          es: "Sabiendo donde esta el nodo, el antinodo mas cercano esta a un cuarto de longitud de onda."
          en: "Knowing where the node is, the nearest antinode is a quarter wavelength away."
    summary_rules:
      - id: dna_summary_relation
        when: "true"
        status: ok
        text:
          es: "[[distancia_nodo_antinodo]] es la mitad de la distancia entre nodos consecutivos."
          en: "[[distancia_nodo_antinodo]] is half the distance between consecutive nodes."
    physical_reading_rules:
      - id: dna_reading_quarter
        when: "true"
        status: ok
        text:
          es: "Esta distancia representa exactamente un cuarto de ciclo completo de la onda."
          en: "This distance represents exactly one quarter of a complete wave cycle."
    coherence_rules:
      - id: dna_coherence_positive
        when: "distancia_nodo_antinodo <= 0"
        status: error
        text:
          es: "La distancia debe ser positiva."
          en: "Distance must be positive."
    model_validity_rules:
      - id: dna_validity_pure
        when: "true"
        status: ok
        text:
          es: "Aplica a ondas estacionarias puras."
          en: "Applies to pure standing waves."
    graph_rules:
      - id: dna_graph_midpoints
        when: "true"
        status: ok
        text:
          es: "En el grafico, los antinodos aparecen a medio camino entre nodos."
          en: "In the graph, antinodes appear halfway between nodes."
    likely_errors:
      - id: dna_error_equality
        when: "true"
        status: warning
        text:
          es: "Error tipico: pensar que la distancia nodo-antinodo es igual a la distancia entre nodos. Es la mitad."
          en: "Typical error: thinking node-antinode distance equals distance between nodes. It is half."

  posicion_nodo:
    magnitude_type: length
    semantic_role:
      es: Ubicacion espacial especifica de un punto de amplitud nula identificado por su indice numerico.
      en: Specific spatial location of a zero amplitude point identified by its numeric index.
    next_step_rules:
      - id: xnodo_next_antinodo
        when: "true"
        status: ok
        text:
          es: "Sabiendo donde esta el nodo, el antinodo mas cercano esta a un cuarto de longitud de onda de distancia."
          en: "Knowing where the node is, the nearest antinode is a quarter wavelength away."
    summary_rules:
      - id: xnodo_summary_position
        when: "true"
        status: ok
        text:
          es: "El nodo numero [[numero_nodo]] se encuentra a [[posicion_nodo]] desde el origen."
          en: "Node number [[numero_nodo]] is located at [[posicion_nodo]] from the origin."
    physical_reading_rules:
      - id: xnodo_reading_index
        when: "numero_nodo == 0"
        status: ok
        text:
          es: "Este es el nodo de referencia ubicado en el origen del sistema."
          en: "This is the reference node located at the system origin."
    coherence_rules:
      - id: xnodo_coherence_positive
        when: "posicion_nodo < 0"
        status: error
        text:
          es: "La posicion no puede ser negativa con este sistema de referencia."
          en: "Position cannot be negative with this reference system."
    model_validity_rules:
      - id: xnodo_validity_bounded
        when: "true"
        status: ok
        text:
          es: "Verifica que la posicion calculada este dentro de las dimensiones fisicas del sistema."
          en: "Verify that the calculated position is within the physical dimensions of the system."
    graph_rules:
      - id: xnodo_graph_markers
        when: "true"
        status: ok
        text:
          es: "En el grafico, este nodo aparece marcado en la posicion [[posicion_nodo]]."
          en: "In the graph, this node appears marked at position [[posicion_nodo]]."
    likely_errors:
      - id: xnodo_error_index
        when: "true"
        status: warning
        text:
          es: "Error comun: comenzar a contar nodos desde uno en lugar de cero. El primer nodo es n=0."
          en: "Common error: starting to count nodes from one instead of zero. The first node is n=0."

  posicion_antinodo:
    magnitude_type: length
    semantic_role:
      es: Ubicacion espacial especifica de un punto de maxima amplitud identificado por su indice numerico.
      en: Specific spatial location of a maximum amplitude point identified by its numeric index.
    next_step_rules:
      - id: xanti_next_amplitude
        when: "true"
        status: ok
        text:
          es: "En esta posicion, la amplitud de oscilacion alcanza su valor maximo."
          en: "At this position, the oscillation amplitude reaches its maximum value."
    summary_rules:
      - id: xanti_summary_location
        when: "true"
        status: ok
        text:
          es: "El antinodo numero [[numero_antinodo]] se ubica a [[posicion_antinodo]] del origen."
          en: "Antinode number [[numero_antinodo]] is located at [[posicion_antinodo]] from the origin."
    physical_reading_rules:
      - id: xanti_reading_first
        when: "numero_antinodo == 0"
        status: ok
        text:
          es: "Este es el primer antinodo, ubicado a un cuarto de longitud de onda del nodo de referencia."
          en: "This is the first antinode, located one quarter wavelength from the reference node."
    coherence_rules:
      - id: xanti_coherence_positive
        when: "posicion_antinodo < 0"
        status: error
        text:
          es: "La posicion del antinodo no puede ser negativa."
          en: "Antinode position cannot be negative."
    model_validity_rules:
      - id: xanti_validity_energy
        when: "true"
        status: ok
        text:
          es: "El modelo asume distribucion ideal de energia."
          en: "The model assumes ideal energy distribution."
    graph_rules:
      - id: xanti_graph_peaks
        when: "true"
        status: ok
        text:
          es: "En el grafico, este antinodo aparece como un maximo de la envolvente."
          en: "In the graph, this antinode appears as a maximum of the envelope."
    likely_errors:
      - id: xanti_error_coincide
        when: "true"
        status: warning
        text:
          es: "Error tipico: colocar un antinodo en la misma posicion que un nodo. Estan desplazados un cuarto de onda."
          en: "Typical error: placing an antinode at the same position as a node. They are displaced by one quarter wavelength."

  numero_nodo:
    magnitude_type: dimensionless
    semantic_role:
      es: Indice entero que identifica la posicion ordinal de un nodo en la secuencia espacial.
      en: Integer index identifying the ordinal position of a node in the spatial sequence.
    next_step_rules:
      - id: n_next_position
        when: "true"
        status: ok
        text:
          es: "Con [[numero_nodo]] conocido, calcula [[posicion_nodo]] usando la longitud de onda."
          en: "With [[numero_nodo]] known, calculate [[posicion_nodo]] using the wavelength."
    summary_rules:
      - id: n_summary
        when: "true"
        status: ok
        text:
          es: "[[numero_nodo]] es un indice entero no negativo que identifica un nodo especifico en la onda estacionaria."
          en: "[[numero_nodo]] is a non-negative integer index identifying a specific node in the standing wave."
    physical_reading_rules:
      - id: n_reading
        when: "true"
        status: ok
        text:
          es: "El numero de orden n=0 corresponde al primer nodo, tipicamente en un extremo fijo."
          en: "The order number n=0 corresponds to the first node, typically at a fixed end."
    coherence_rules:
      - id: n_coherence
        when: "numero_nodo < 0"
        status: error
        text:
          es: "El numero de nodo no puede ser negativo."
          en: "The node number cannot be negative."
    model_validity_rules:
      - id: n_validity
        when: "true"
        status: ok
        text:
          es: "Valido para ondas estacionarias con nodos discretos."
          en: "Valid for standing waves with discrete nodes."
    graph_rules:
      - id: n_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, los nodos estan etiquetados con su numero de orden."
          en: "In the graph, nodes are labeled with their order number."
    likely_errors:
      - id: n_error_index
        when: "true"
        status: warning
        text:
          es: "Error comun: comenzar a contar nodos desde 1 en lugar de desde 0."
          en: "Common error: starting to count nodes from 1 instead of from 0."

  numero_antinodo:
    magnitude_type: dimensionless
    semantic_role:
      es: Indice entero que identifica la posicion ordinal de un antinodo en la secuencia espacial.
      en: Integer index identifying the ordinal position of an antinode in the spatial sequence.
    next_step_rules:
      - id: m_next_position
        when: "true"
        status: ok
        text:
          es: "Con [[numero_antinodo]] conocido, calcula [[posicion_antinodo]] usando la longitud de onda."
          en: "With [[numero_antinodo]] known, calculate [[posicion_antinodo]] using the wavelength."
    summary_rules:
      - id: m_summary
        when: "true"
        status: ok
        text:
          es: "[[numero_antinodo]] es un indice entero no negativo que identifica un antinodo especifico."
          en: "[[numero_antinodo]] is a non-negative integer index identifying a specific antinode."
    physical_reading_rules:
      - id: m_reading
        when: "true"
        status: ok
        text:
          es: "El numero de orden m=0 corresponde al primer antinodo, ubicado a un cuarto de onda del primer nodo."
          en: "The order number m=0 corresponds to the first antinode, located at one quarter wavelength from the first node."
    coherence_rules:
      - id: m_coherence
        when: "numero_antinodo < 0"
        status: error
        text:
          es: "El numero de antinodo no puede ser negativo."
          en: "The antinode number cannot be negative."
    model_validity_rules:
      - id: m_validity
        when: "true"
        status: ok
        text:
          es: "Valido para ondas estacionarias con antinodos discretos."
          en: "Valid for standing waves with discrete antinodes."
    graph_rules:
      - id: m_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, los antinodos aparecen como maximos etiquetados con su numero de orden."
          en: "In the graph, antinodes appear as maxima labeled with their order number."
    likely_errors:
      - id: m_error_index
        when: "true"
        status: warning
        text:
          es: "Error comun: usar el mismo indice que para los nodos sin considerar el desplazamiento de medio indice."
          en: "Common error: using the same index as for nodes without considering the half-index shift."
`;export{n as default};
