const n=`- id: lambda_onda
  symbol: "\\u03bb"
  nombre:
    es: Longitud de onda
    en: Wavelength
  descripcion:
    es: Distancia espacial que recorre la onda en un periodo, determinante del espaciamiento entre nodos y antinodos.
    en: Spatial distance traveled by the wave in one period, determining the spacing between nodes and antinodes.
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in: [teoria.md, ejemplos.md, formulas.yaml, interpretacion.yaml]
  common_mistake: Confundir la longitud de onda con la distancia entre nodos consecutivos.
  typical_range: 0.01 m to 100 m
  sign_behavior:
    has_sign: false
    meaning:
      es: "La longitud de onda siempre es positiva; el signo no aplica."
      en: "Wavelength is always positive; sign does not apply."
  zero_behavior:
    allowed: false
    meaning:
      es: "Una longitud de onda cero implica frecuencia infinita, fisicamente imposible."
      en: "Zero wavelength implies infinite frequency, physically impossible."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, \\u221e)"
  interpretation_role:
    primary_for: [node_spacing, antinode_position]
    secondary_for: []
  graph_binding:
    channels: [wavelength_marker, axis_x]
  pedagogical_notes:
    es: "La longitud de onda es la magnitud fundamental que determina todo el patron de nodos y antinodos."
    en: "Wavelength is the fundamental magnitude that determines the entire pattern of nodes and antinodes."

- id: distancia_entre_nodos
  symbol: "d_nodos"
  nombre:
    es: Distancia entre nodos consecutivos
    en: Distance between consecutive nodes
  descripcion:
    es: Separacion espacial constante entre dos nodos adyacentes en una onda estacionaria, igual a media longitud de onda.
    en: Constant spatial separation between two adjacent nodes in a standing wave, equal to half the wavelength.
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: calculable_result
  used_in: [teoria.md, ejemplos.md, formulas.yaml, interpretacion.yaml]
  common_mistake: Pensar que la distancia entre nodos es igual a la longitud de onda completa.
  typical_range: 0.005 m to 50 m
  sign_behavior:
    has_sign: false
    meaning:
      es: "La distancia siempre es positiva; el signo no aplica."
      en: "Distance is always positive; sign does not apply."
  zero_behavior:
    allowed: false
    meaning:
      es: "Distancia cero implicaria nodos superpuestos, lo cual no es posible."
      en: "Zero distance would imply overlapping nodes, which is not possible."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, \\u221e)"
  interpretation_role:
    primary_for: [node_pattern, spatial_periodicity]
    secondary_for: []
  graph_binding:
    channels: [node_spacing, axis_x]
  pedagogical_notes:
    es: "Esta magnitud es la primera que calcula el estudiante: es la mitad de la longitud de onda."
    en: "This is the first magnitude students calculate: it is half the wavelength."

- id: posicion_nodo
  symbol: "x_nodo"
  nombre:
    es: Posicion de un nodo
    en: Position of a node
  descripcion:
    es: Coordenada espacial donde se ubica un nodo especifico, multiplo entero de media longitud de onda.
    en: Spatial coordinate where a specific node is located, integer multiple of half wavelength.
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: calculable_result
  used_in: [teoria.md, ejemplos.md, formulas.yaml, interpretacion.yaml]
  common_mistake: Usar el indice n comenzando desde 1 en lugar de desde 0.
  typical_range: 0 m to 50 m
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo indica la direccion desde el origen; positivo a la derecha, negativo a la izquierda."
      en: "Sign indicates direction from the origin; positive to the right, negative to the left."
  zero_behavior:
    allowed: true
    meaning:
      es: "x = 0 corresponde al primer nodo en el origen elegido, tipicamente un extremo fijo."
      en: "x = 0 corresponds to the first node at the chosen origin, typically a fixed end."
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "(-\\u221e, \\u221e)"
  interpretation_role:
    primary_for: [node_location, interference_pattern]
    secondary_for: []
  graph_binding:
    channels: [node_position, axis_x]
  pedagogical_notes:
    es: "La posicion del nodo depende del indice n elegido. El estudiante debe entender que n=0 es el primer nodo."
    en: "Node position depends on the chosen index n. Students must understand that n=0 is the first node."

- id: posicion_antinodo
  symbol: "x_antinodo"
  nombre:
    es: Posicion de un antinodo
    en: Position of an antinode
  descripcion:
    es: Coordenada espacial donde se ubica un antinodo especifico, desplazado un cuarto de longitud de onda respecto al nodo mas cercano.
    en: Spatial coordinate where a specific antinode is located, shifted by a quarter wavelength from the nearest node.
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: calculable_result
  used_in: [teoria.md, ejemplos.md, formulas.yaml, interpretacion.yaml]
  common_mistake: Colocar el antinodo exactamente donde esta el nodo, sin el desplazamiento de lambda/4.
  typical_range: 0.0025 m to 50 m
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo indica la direccion desde el origen; los antinodos pueden estar a ambos lados."
      en: "Sign indicates direction from the origin; antinodes can be on both sides."
  zero_behavior:
    allowed: false
    meaning:
      es: "Un antinodo no puede estar exactamente en x=0 si hay un nodo en el origen; estan desplazados lambda/4."
      en: "An antinode cannot be exactly at x=0 if there is a node at the origin; they are shifted lambda/4."
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "(-\\u221e, \\u221e)"
  interpretation_role:
    primary_for: [antinode_location, maximum_amplitude_points]
    secondary_for: []
  graph_binding:
    channels: [antinode_position, axis_x]
  pedagogical_notes:
    es: "Los antinodos estan exactamente a mitad de camino entre dos nodos consecutivos, es decir, desplazados lambda/4."
    en: "Antinodes are exactly halfway between two consecutive nodes, that is, shifted lambda/4."

- id: amplitud_maxima
  symbol: "A_max"
  nombre:
    es: Amplitud maxima de la onda estacionaria
    en: Maximum amplitude of standing wave
  descripcion:
    es: Valor maximo de la oscilacion alcanzado en los antinodos, igual al doble de la amplitud de las ondas viajeras que la componen.
    en: Maximum oscillation value reached at antinodes, equal to twice the amplitude of the traveling waves composing it.
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: calculable_result
  used_in: [teoria.md, ejemplos.md, interpretacion.yaml]
  common_mistake: Confundir la amplitud maxima con la amplitud de las ondas componentes.
  typical_range: 0.001 m to 0.1 m
  sign_behavior:
    has_sign: false
    meaning:
      es: "La amplitud es siempre positiva; representa una magnitud de desplazamiento maximo."
      en: "Amplitude is always positive; it represents a maximum displacement magnitude."
  zero_behavior:
    allowed: true
    meaning:
      es: "Amplitud cero significa que no hay onda estacionaria; todos los puntos estan en reposo."
      en: "Zero amplitude means there is no standing wave; all points are at rest."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, \\u221e)"
  interpretation_role:
    primary_for: [vibration_intensity, wave_energy]
    secondary_for: []
  graph_binding:
    channels: [amplitude_marker, axis_y]
  pedagogical_notes:
    es: "La amplitud maxima ocurre exclusivamente en los antinodos. En los nodos, la amplitud es cero."
    en: "Maximum amplitude occurs exclusively at antinodes. At nodes, the amplitude is zero."

- id: numero_nodo
  symbol: "n"
  nombre:
    es: Numero de orden del nodo
    en: Node order number
  descripcion:
    es: Indice entero no negativo que identifica la posicion de un nodo especifico, comenzando desde cero en un extremo.
    en: Non-negative integer index identifying the position of a specific node, starting from zero at one end.
  unidad_si: ""
  dimension: "[1]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in: [teoria.md, ejemplos.md, formulas.yaml, interpretacion.yaml]
  common_mistake: Comenzar la numeracion desde 1 en lugar de desde 0.
  typical_range: 0 to 100
  sign_behavior:
    has_sign: false
    meaning:
      es: "El numero de orden es siempre no negativo; no tiene sentido fisico negativo."
      en: "The order number is always non-negative; negative values have no physical meaning."
  zero_behavior:
    allowed: true
    meaning:
      es: "n=0 representa el primer nodo, tipicamente en un extremo fijo de la cuerda."
      en: "n=0 represents the first node, typically at a fixed end of the string."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, \\u221e)"
  interpretation_role:
    primary_for: [node_identification, standing_wave_harmonics]
    secondary_for: []
  graph_binding:
    channels: [node_label, annotation]
  pedagogical_notes:
    es: "El indice n=0 es el primer nodo. Para el tercer nodo, n=2. Esto es una fuente comun de confusion."
    en: "The index n=0 is the first node. For the third node, n=2. This is a common source of confusion."

- id: numero_antinodo
  symbol: "m"
  nombre:
    es: Numero de orden del antinodo
    en: Antinode order number
  descripcion:
    es: Indice entero no negativo que identifica la posicion de un antinodo especifico, comenzando desde cero en el primer antinodo.
    en: Non-negative integer index identifying the position of a specific antinode, starting from zero at the first antinode.
  unidad_si: ""
  dimension: "[1]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in: [teoria.md, ejemplos.md, formulas.yaml, interpretacion.yaml]
  common_mistake: Usar el mismo indice que para los nodos, sin el desplazamiento de 1/2.
  typical_range: 0 to 99
  sign_behavior:
    has_sign: false
    meaning:
      es: "El numero de orden del antinodo es siempre no negativo."
      en: "The antinode order number is always non-negative."
  zero_behavior:
    allowed: true
    meaning:
      es: "m=0 representa el primer antinodo, ubicado a lambda/4 del primer nodo."
      en: "m=0 represents the first antinode, located at lambda/4 from the first node."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, \\u221e)"
  interpretation_role:
    primary_for: [antinode_identification, vibration_maxima]
    secondary_for: []
  graph_binding:
    channels: [antinode_label, annotation]
  pedagogical_notes:
    es: "Los antinodos tienen indices enteros mientras que los nodos tienen indices enteros, pero desplazados."
    en: "Antinodes have integer indices while nodes have integer indices, but shifted."

- id: distancia_nodo_antinodo
  symbol: "d_na"
  nombre:
    es: Distancia entre nodo y antinodo
    en: Distance between node and antinode
  descripcion:
    es: Separacion espacial entre un nodo y el antinodo mas cercano, igual a un cuarto de longitud de onda.
    en: Spatial separation between a node and the nearest antinode, equal to one quarter wavelength.
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: calculable_result
  used_in: [teoria.md, ejemplos.md, formulas.yaml, interpretacion.yaml]
  common_mistake: Pensar que la distancia nodo-antinodo es la mitad de la distancia entre nodos.
  typical_range: 0.0025 m to 25 m
  sign_behavior:
    has_sign: false
    meaning:
      es: "La distancia es siempre positiva; no tiene direccion inherente."
      en: "Distance is always positive; it has no inherent direction."
  zero_behavior:
    allowed: false
    meaning:
      es: "Distancia cero entre nodo y antinodo violaria la condicion de onda estacionaria."
      en: "Zero distance between node and antinode would violate the standing wave condition."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, \\u221e)"
  interpretation_role:
    primary_for: [spatial_pattern, interference_geometry]
    secondary_for: []
  graph_binding:
    channels: [node_antinode_spacing, axis_x]
  pedagogical_notes:
    es: "La distancia nodo-antinodo es exactamente la mitad de la distancia entre nodos consecutivos, es decir, lambda/4."
    en: "The node-antinode distance is exactly half the distance between consecutive nodes, that is, lambda/4."
`;export{n as default};
