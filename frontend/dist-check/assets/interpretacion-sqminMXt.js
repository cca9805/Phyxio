const e=`version: 2
id: interpretacion-definicion-centro-de-masas
leaf_id: definicion-centro-de-masas
nombre:
  es: "Interpretación de la Definición del Centro de Masas"
  en: "Interpretation of the Center of Mass Definition"
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: centro-de-masas
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/definicion-centro-de-masas

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step

result_blocks:
  summary:
    title:
      es: "Resumen de inercia"
      en: "Inertia summary"
  physical_reading:
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    title:
      es: "Análisis de coherencia"
      en: "Coherence analysis"
  model_validity:
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    title:
      es: "Interpretación gráfica"
      en: "Graph interpretation"
  likely_errors:
    title:
      es: "Posibles errores"
      en: "Likely errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next step"

ui:
  enabled: true
  display_modes:
    - calculator_inline
    - graph_inline
    - dedicated_tab
    - modal
  labels:
    - center_of_mass
    - mass_distribution
  priority_order:
    - summary_rules
    - physical_reading_rules
    - coherence_rules
    - model_validity_rules
    - graph_rules
    - likely_errors
    - next_step_rules
  inline_limits: 2

dependencies:
  formulas:
    - xcm
    - M
    - geometric_centroid
    - rcm_general
    - point_particle_validity
  magnitudes:
    - m1
    - m2
    - x1
    - x2
    - xcm
    - M
    - m_i
    - r_i
    - rcm
    - point_particle_validity
    - R
    - d

global_context:
  physical_domain:
    es: "Mecánica clásica traslacional de sistemas discretos."
    en: "Classical translational mechanics of discrete systems."
  axis_convention:
    es: "Eje horizontal unidimensional con origen arbitrario."
    en: "One-dimensional horizontal axis with arbitrary origin."
  standard_assumptions:
    - Masas puntuales sin extensión volumétrica.
    - Gravedad uniforme (coincidencia de CM con Centro de Gravedad).
  standard_warnings:
    - El centro de masas puede situarse en el espacio vacío entre las partículas.

targets:
  xcm:
    magnitude_type: coordinate
    semantic_role:
      es: "Posición media ponderada del sistema"
      en: "Weighted average position of the system"
    summary_rules:
      - id: xcm_sum_default
        when: "true"
        status: info
        text:
          es: "El xcm indica el 'punto de inercia' del sistema sobre el eje horizontal."
          en: "The xcm indicates the system's 'inertia point' on the horizontal axis."
    physical_reading_rules:
      - id: xcm_read_symmetry
        when: "abs(m1 - m2) < 1e-6"
        status: info
        text:
          es: "Simetría perfecta: Al ser las masas iguales, el CM se localiza en el punto medio geométrico."
          en: "Perfect symmetry: Since the masses are equal, the CM is located at the geometric midpoint."
    coherence_rules:
      - id: xcm_coh_interval
        when: "result < min(x1, x2) || result > max(x1, x2)"
        status: danger
        text:
          es: "¡Incoherencia física!: El centro de masas ha caído fuera de la región ocupada por las partículas."
          en: "Physical inconsistency!: The center of mass has fallen outside the region occupied by the particles."
    model_validity_rules:
      - id: xcm_val_particles
        when: "true"
        status: ok
        text:
          es: "El modelo de masas puntuales es válido siempre que el tamaño de los cuerpos sea despreciable frente a su separación."
          en: "The point mass model is valid as long as the bodies' size is negligible compared to their separation."
    graph_rules:
      - id: xcm_graph_fulcrum
        when: "true"
        status: info
        text:
          es: "En la representación visual, el xcm debe aparecer como el punto de equilibrio o fulcro del conjunto."
          en: "In the visual representation, the xcm should appear as the assembly's balance point or fulcrum."
    likely_errors:
      - id: xcm_err_simple_avg
        when: "abs(result - (x1+x2)/2) < 1e-6 && abs(m1-m2) > 1e-3"
        status: warning
        text:
          es: "Sesgo de media simple: Has calculado el punto medio geométrico ignorando que las masas son distintas. Confundir centro geométrico con centro de masas es un error común."
          en: "Simple average bias: You calculated the geometric midpoint ignoring that the masses are different. Confusing geometric center with center of mass is a common error."
    next_step_rules:
      - id: xcm_next_force
        when: "true"
        status: info
        text:
          es: "Ahora conecta con la dinámica: Investiga cómo se acelera este punto ante una fuerza externa resultante."
          en: "Now connect with dynamics: Investigate how this point accelerates under a net external force."

  M:
    magnitude_type: mass
    semantic_role:
      es: "Masa total del conjunto"
      en: "Total assembly mass"
    summary_rules:
      - id: M_sum_default
        when: "true"
        status: info
        text:
          es: "M representa la inercia traslacional colectiva del sistema completo."
          en: "M represents the collective translational inertia of the full system."
    physical_reading_rules:
      - id: M_read_scaling
        when: "true"
        status: info
        text:
          es: "La masa total actúa como el divisor que normaliza el primer momento de masa del sistema."
          en: "The total mass acts as the divisor that normalizes the system's first mass moment."
    coherence_rules:
      - id: M_coh_sum
        when: "abs(result - (m1+m2)) > 1e-6"
        status: danger
        text:
          es: "Fallo de suma: La masa total no es igual a la suma de sus componentes individuales."
          en: "Sum failure: Total mass does not equal the sum of its individual components."
    model_validity_rules:
      - id: M_val_positive
        when: "result <= 0"
        status: danger
        text:
          es: "Sistema no físico: Un sistema material no puede tener masa nula o negativa."
          en: "Non-physical system: A material system cannot have zero or negative mass."
    graph_rules:
      - id: M_graph_default
        when: "true"
        status: info
        text:
          es: "Visualmente, M determina la escala de representación de las partículas en el diagrama."
          en: "Visually, M determines the representation scale of the particles in the diagram."
    likely_errors:
      - id: M_err_partial
        when: "result == m1 || result == m2"
        status: warning
        text:
          es: "Error de sistema: Estás considerando solo una de las masas como si fuera el total. Olvidar constituyentes es incorrecto."
          en: "System error: You are considering only one of the masses as if it were the total. Forgetting constituents is incorrect."
    next_step_rules:
      - id: M_next_moment
        when: "true"
        status: info
        text:
          es: "Prueba ahora a calcular el momento lineal total usando esta masa total y la velocidad del CM."
          en: "Try now calculating the total linear momentum using this total mass and the CM velocity."

  rcm:
    magnitude_type: vector_position
    semantic_role:
      es: "Vector posición del baricentro"
      en: "Barycenter position vector"
    summary_rules:
      - id: rcm_sum_default
        when: "true"
        status: info
        text:
          es: "rcm define la ubicación del centro de inercia en el espacio vectorial multidimensional."
          en: "rcm defines the location of the center of inertia in multidimensional vector space."
    physical_reading_rules:
      - id: rcm_read_components
        when: "true"
        status: info
        text:
          es: "Cada componente del vector rcm es el promedio ponderado de las posiciones en ese eje específico."
          en: "Each component of the rcm vector is the weighted average of the positions on that specific axis."
    coherence_rules:
      - id: rcm_coh_envelope
        when: "true"
        status: ok
        text:
          es: "El vector resultante apunta siempre hacia el interior de la distribución de masas."
          en: "The resulting vector always points toward the interior of the mass distribution."
    model_validity_rules:
      - id: rcm_val_extension
        when: "true"
        status: ok
        text:
          es: "La definición vectorial es válida para cualquier número de partículas discretas."
          en: "The vector definition is valid for any number of discrete particles."
    graph_rules:
      - id: rcm_graph_marker
        when: "true"
        status: info
        text:
          es: "El marcador rcm representa el punto sobre el cual actúan las fuerzas externas efectivas."
          en: "The rcm marker represents the point on which the effective external forces act."
    likely_errors:
      - id: rcm_err_logic
        when: "abs(rcm_x) > (abs(x1) + abs(x2))"
        status: danger
        text:
          es: "Fallo de lógica vectorial: El CM no puede estar más lejos del origen que la suma de las distancias. Mal uso de la definición."
          en: "Vector logic failure: The CM cannot be farther from the origin than the sum of the distances. Misuse of the definition."
    next_step_rules:
      - id: rcm_next_rigid
        when: "true"
        status: info
        text:
          es: "Compara este modelo discreto con el de un sólido rígido continuo en la siguiente sección."
          en: "Compare this discrete model with that of a continuous rigid body in the next section."

  m1:
    magnitude_type: mass
    semantic_role:
      es: "Inercia del primer cuerpo"
      en: "Inertia of the first body"
    summary_rules:
      - id: m1_sum_default
        when: "true"
        status: info
        text:
          es: "m1 es la masa que 'tira' del CM hacia la posición x1."
          en: "m1 is the mass that 'pulls' the CM toward position x1."
    physical_reading_rules:
      - id: m1_read_default
        when: "true"
        status: info
        text:
          es: "A mayor masa m1, más influencia tiene la posición x1 en el resultado final."
          en: "The larger the mass m1, the more influence position x1 has on the final result."
    coherence_rules:
      - id: m1_coh_default
        when: "true"
        status: ok
        text:
          es: "La masa m1 debe ser una fracción de la masa total M."
          en: "Mass m1 must be a fraction of the total mass M."
    model_validity_rules:
      - id: m1_val_default
        when: "true"
        status: ok
        text:
          es: "Se asume que m1 es constante y puntual."
          en: "It is assumed that m1 is constant and point-like."
    graph_rules:
      - id: m1_graph_default
        when: "true"
        status: info
        text:
          es: "El tamaño visual de la partícula 1 es proporcional a m1."
          en: "The visual size of particle 1 is proportional to m1."
    likely_errors:
      - id: m1_err_neg
        when: "m1 < 0"
        status: danger
        text:
          es: "Masa negativa detectada: Este error conceptual es físicamente imposible en mecánica clásica."
          en: "Negative mass detected: This conceptual error is physically impossible in classical mechanics."
    next_step_rules:
      - id: m1_next_default
        when: "true"
        status: info
        text:
          es: "Ahora prueba a variar m1 y observa cómo se desplaza el centro de masas en tiempo real."
          en: "Now try varying m1 and observe how the center of mass shifts in real time."

  m2:
    magnitude_type: mass
    semantic_role:
      es: "Inercia del segundo cuerpo"
      en: "Inertia of the second body"
    summary_rules:
      - id: m2_sum_default
        when: "true"
        status: info
        text:
          es: "m2 es la masa que pondera la posición x2."
          en: "m2 is the mass that weights position x2."
    physical_reading_rules:
      - id: m2_read_default
        when: "true"
        status: info
        text:
          es: "La masa m2 determina el 'momento' espacial respecto al origen."
          en: "Mass m2 determines the spatial 'moment' relative to the origin."
    coherence_rules:
      - id: m2_coh_default
        when: "true"
        status: ok
        text:
          es: "m2 no puede superar la masa total del sistema."
          en: "m2 cannot exceed the total mass of the system."
    model_validity_rules:
      - id: m2_val_default
        when: "true"
        status: ok
        text:
          es: "Masa clásica invariante."
          en: "Invariant classical mass."
    graph_rules:
      - id: m2_graph_default
        when: "true"
        status: info
        text:
          es: "Representación de la segunda fuente de inercia."
          en: "Representation of the second source of inertia."
    likely_errors:
      - id: m2_err_default
        when: "m2 < 0"
        status: danger
        text:
          es: "Masa incorrecta: Los valores negativos no están permitidos en este modelo."
          en: "Incorrect mass: Negative values are not allowed in this model."
    next_step_rules:
      - id: m2_next_default
        when: "true"
        status: info
        text:
          es: "Continua analizando la relación m1/m2."
          en: "Continue analyzing the m1/m2 ratio."

  x1:
    magnitude_type: coordinate
    semantic_role:
      es: "Posición inicial de m1"
      en: "Initial position of m1"
    summary_rules:
      - id: x1_sum_default
        when: "true"
        status: info
        text:
          es: "Ubicación espacial de la primera masa respecto al origen."
          en: "Spatial location of the first mass relative to the origin."
    physical_reading_rules:
      - id: x1_read_default
        when: "true"
        status: info
        text:
          es: "Define un extremo del intervalo donde puede encontrarse el CM."
          en: "Defines one end of the interval where the CM can be found."
    coherence_rules:
      - id: x1_coh_default
        when: "true"
        status: ok
        text:
          es: "Valor de posición escalar."
          en: "Scalar position value."
    model_validity_rules:
      - id: x1_val_default
        when: "true"
        status: ok
        text:
          es: "Coordenada en espacio Euclídeo."
          en: "Coordinate in Euclidean space."
    graph_rules:
      - id: x1_graph_default
        when: "true"
        status: info
        text:
          es: "Posición en el eje horizontal."
          en: "Position on the horizontal axis."
    likely_errors:
      - id: x1_err_default
        when: "false"
        status: info
        text:
          es: "Asegúrate de no confundir la posición con la distancia."
          en: "Ensure you don't confuse position with distance."
    next_step_rules:
      - id: x1_next_default
        when: "true"
        status: info
        text:
          es: "Revisa el origen de coordenadas."
          en: "Review the coordinate origin."

  x2:
    magnitude_type: coordinate
    semantic_role:
      es: "Posición inicial de m2"
      en: "Initial position of m2"
    summary_rules:
      - id: x2_sum_default
        when: "true"
        status: info
        text:
          es: "Ubicación espacial de la segunda masa respecto al origen."
          en: "Spatial location of the second mass relative to the origin."
    physical_reading_rules:
      - id: x2_read_default
        when: "true"
        status: info
        text:
          es: "Define el otro extremo del sistema material."
          en: "Defines the other end of the material system."
    coherence_rules:
      - id: x2_coh_default
        when: "true"
        status: ok
        text:
          es: "Coherente con el eje elegido."
          en: "Consistent with the chosen axis."
    model_validity_rules:
      - id: x2_val_default
        when: "true"
        status: ok
        text:
          es: "Válido para partículas."
          en: "Valid for particles."
    graph_rules:
      - id: x2_graph_default
        when: "true"
        status: info
        text:
          es: "Marcador de posición para m2."
          en: "Position marker for m2."
    likely_errors:
      - id: x2_err_default
        when: "false"
        status: info
        text:
          es: "Error de lectura de escala."
          en: "Scale reading error."
    next_step_rules:
      - id: x2_next_default
        when: "true"
        status: info
        text:
          es: "Conecta con el cálculo de xcm."
          en: "Connect with the xcm calculation."

  m_i:
    magnitude_type: mass
    semantic_role:
      es: "Masa constituyente genérica"
      en: "Generic constituent mass"
    summary_rules:
      - id: mi_sum_default
        when: "true"
        status: info
        text:
          es: "Representa el aporte inercial de una partícula individual al sistema."
          en: "Represents the inertial contribution of an individual particle to the system."
    physical_reading_rules:
      - id: mi_read_default
        when: "true"
        status: info
        text:
          es: "Masa de la partícula i-ésima."
          en: "Mass of the i-th particle."
    coherence_rules:
      - id: mi_coh_default
        when: "true"
        status: ok
        text:
          es: "Positiva por definición."
          en: "Positive by definition."
    model_validity_rules:
      - id: mi_val_default
        when: "true"
        status: ok
        text:
          es: "Válida para sistemas discretos."
          en: "Valid for discrete systems."
    graph_rules:
      - id: mi_graph_default
        when: "true"
        status: info
        text:
          es: "Referencia para el sumatorio."
          en: "Reference for the summation."
    likely_errors:
      - id: mi_err_default
        when: "false"
        status: info
        text:
          es: "Olvidar una masa en el sumatorio es un error común."
          en: "Forgetting a mass in the summation is a common error."
    next_step_rules:
      - id: mi_next_default
        when: "true"
        status: info
        text:
          es: "Aprende a generalizar para N masas."
          en: "Learn to generalize for N masses."

  r_i:
    magnitude_type: vector_position
    semantic_role:
      es: "Ubicación espacial genérica"
      en: "Generic spatial location"
    summary_rules:
      - id: ri_sum_default
        when: "true"
        status: info
        text:
          es: "Vector que define dónde se localiza la masa m_i en el espacio de trabajo."
          en: "Vector defining where mass m_i is located in the workspace."
    physical_reading_rules:
      - id: ri_read_default
        when: "true"
        status: info
        text:
          es: "Posición vectorial de la partícula i."
          en: "Vector position of particle i."
    coherence_rules:
      - id: ri_coh_default
        when: "true"
        status: ok
        text:
          es: "Coordenadas espaciales."
          en: "Spatial coordinates."
    model_validity_rules:
      - id: ri_val_default
        when: "true"
        status: ok
        text:
          es: "Válido en 3D."
          en: "Valid in 3D."
    graph_rules:
      - id: ri_graph_default
        when: "true"
        status: info
        text:
          es: "Vector desde el origen."
          en: "Vector from the origin."
    likely_errors:
      - id: ri_err_default
        when: "false"
        status: info
        text:
          es: "Mal uso de componentes vectoriales."
          en: "Misuse of vector components."
    next_step_rules:
      - id: ri_next_default
        when: "true"
        status: info
        text:
          es: "Siguiente paso: suma vectorial."
          en: "Next step: vector addition."

  point_particle_validity:
    magnitude_type: condition
    semantic_role:
      es: "Indicador de aplicabilidad del modelo"
      en: "Model applicability indicator"
    summary_rules:
      - id: ppv_sum_default
        when: "true"
        status: info
        text:
          es: "Determina si los cuerpos pueden tratarse como puntos matemáticos sin error apreciable."
          en: "Determines if bodies can be treated as mathematical points without significant error."
    physical_reading_rules:
      - id: ppv_read_fail
        when: "result == 0"
        status: warning
        text:
          es: "El modelo de partícula puntual NO es adecuado. La extensión física de los cuerpos es relevante."
          en: "The point particle model is NOT suitable. The bodies' physical extension is relevant."
    coherence_rules:
      - id: ppv_coh_scale
        when: "true"
        status: ok
        text:
          es: "El criterio es coherente con las escalas de longitud del problema."
          en: "The criterion is consistent with the problem's length scales."
    model_validity_rules:
      - id: ppv_val_hyp
        when: "true"
        status: ok
        text:
          es: "Hipótesis innegociable para el tratamiento de baricentros discretos."
          en: "Non-negotiable hypothesis for discrete barycenter treatment."
    graph_rules:
      - id: ppv_graph_note
        when: "true"
        status: info
        text:
          es: "Afecta a la precisión de la ubicación del marcador en el gráfico."
          en: "Affects the accuracy of the marker location in the graph."
    likely_errors:
      - id: ppv_err_prox
        when: "result == 0"
        status: warning
        text:
          es: "Error de proximidad: Estás ignorando la forma del objeto cuando esta es relevante."
          en: "Proximity error: You are ignoring the object's shape when it is relevant."
    next_step_rules:
      - id: ppv_next_solid
        when: "true"
        status: info
        text:
          es: "Si falla, pasa al modelo de sólido rígido."
          en: "If it fails, switch to the rigid body model."

  R:
    magnitude_type: length
    semantic_role:
      es: "Radio del cuerpo"
      en: "Body radius"
    summary_rules:
      - id: R_sum
        when: "true"
        status: info
        text:
          es: "Determina la escala de la partícula."
          en: "Determines the particle scale."
    physical_reading_rules:
      - id: R_read
        when: "true"
        status: info
        text:
          es: "Se usa para evaluar si el cuerpo es 'pequeño'."
          en: "Used to evaluate if the body is 'small'."
    coherence_rules:
      - id: R_coh
        when: "true"
        status: ok
        text:
          es: "Valor coherente con la escala física."
          en: "Value consistent with physical scale."
    model_validity_rules:
      - id: R_val
        when: "true"
        status: ok
        text:
          es: "Radio finito pero despreciable."
          en: "Finite but negligible radius."
    graph_rules:
      - id: R_graph
        when: "true"
        status: info
        text:
          es: "Afecta al tamaño del dibujo."
          en: "Affects the size of the drawing."
    likely_errors:
      - id: R_err
        when: "false"
        status: info
        text:
          es: "Confundir radio con diámetro."
          en: "Confusing radius with diameter."
    next_step_rules:
      - id: R_next
        when: "true"
        status: info
        text:
          es: "Compara con d."
          en: "Compare with d."

  d:
    magnitude_type: length
    semantic_role:
      es: "Distancia entre centros"
      en: "Distance between centers"
    summary_rules:
      - id: d_sum
        when: "true"
        status: info
        text:
          es: "Separación característica del sistema."
          en: "Characteristic separation of the system."
    physical_reading_rules:
      - id: d_read
        when: "true"
        status: info
        text:
          es: "Define el brazo de momento de masa."
          en: "Defines the mass moment arm."
    coherence_rules:
      - id: d_coh
        when: "true"
        status: ok
        text:
          es: "Debe ser mayor que R."
          en: "Must be larger than R."
    model_validity_rules:
      - id: d_val
        when: "true"
        status: ok
        text:
          es: "Distancia de interacción."
          en: "Interaction distance."
    graph_rules:
      - id: d_graph
        when: "true"
        status: info
        text:
          es: "Separa las partículas en el gráfico."
          en: "Separates particles in the graph."
    likely_errors:
      - id: d_err
        when: "false"
        status: info
        text:
          es: "Usar distancia a la superficie en lugar de centros."
          en: "Using distance to surface instead of centers."
    next_step_rules:
      - id: d_next
        when: "true"
        status: info
        text:
          es: "Usa d en el cálculo de xcm."
          en: "Use d in xcm calculation."
`;export{e as default};
