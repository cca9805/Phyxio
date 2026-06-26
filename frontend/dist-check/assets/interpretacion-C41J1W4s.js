const e=`version: v5
id: velocidad-de-propagacion-interpretacion
leaf_id: velocidad-de-propagacion
nombre:
  es: Interpretacion de la velocidad de propagacion
  en: Interpretation of wave speed
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fundamentos
  parent_id: magnitudes-ondulatorias
  ruta_relativa: fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion fisica
    en: Physical interpretation
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_messages: 4
    prefer: [summary, likely_errors]
dependencies:
  formulas: [velocidad_onda_frecuencia, velocidad_media_patron]
  magnitudes: [v, lambda, f, Delta_x, Delta_t]
global_context:
  physical_domain:
    es: Ondas periodicas o patrones reconocibles que avanzan en un medio.
    en: Periodic waves or recognizable patterns advancing through a medium.
  axis_convention:
    es: El eje horizontal representa posicion y el tiempo ordena el avance del patron.
    en: The horizontal axis represents position and time orders the advance of the pattern.
  standard_assumptions:
    - es: "El medio es aproximadamente uniforme durante la medida."
      en: "The medium is approximately uniform during the measurement."
    - es: "Se sigue la misma fase, cresta o frente de onda."
      en: "The same phase, crest, or wavefront is tracked."
  standard_warnings:
    - es: "No confundir rapidez de propagacion con velocidad local de las particulas."
      en: "Do not confuse propagation speed with local particle speed."
result_blocks:
  summary:
    enabled: true
    order: 1
    title: { es: Resumen, en: Summary }
  physical_reading:
    enabled: true
    order: 2
    title: { es: Lectura fisica, en: Physical reading }
  coherence:
    enabled: true
    order: 3
    title: { es: Coherencia, en: Coherence }
  model_validity:
    enabled: true
    order: 4
    title: { es: Validez del modelo, en: Model validity }
  graph_reading:
    enabled: true
    order: 5
    title: { es: Lectura grafica, en: Graph reading }
  likely_errors:
    enabled: true
    order: 6
    title: { es: Errores probables, en: Likely errors }
  next_step:
    enabled: true
    order: 7
    title: { es: Siguiente paso, en: Next step }
targets:
  v:
    magnitude_type: derived
    semantic_role:
      es: Rapidez del patron ondulatorio.
      en: Speed of the wave pattern.
    summary_rules:
      - id: v_summary_positive
        when: "v > 0"
        status: ok
        text:
          es: "[[v]] indica la rapidez con la que avanza el patron y depende de la repeticion espacial y temporal medida."
          en: "[[v]] indicates how fast the pattern advances and depends on the measured spatial and temporal repetition."
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v]] resume el avance del patron por unidad de tiempo en el medio considerado."
          en: "[[v]] summarizes pattern advance per unit time in the considered medium."
    physical_reading_rules:
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "Un valor mayor de [[v]] significa que una cresta recorre mas distancia durante el mismo intervalo."
          en: "A larger [[v]] means that a crest travels more distance during the same interval."
    coherence_rules:
      - id: v_coherence_positive
        when: "v > 0"
        status: ok
        text:
          es: "La rapidez positiva es coherente con una onda que se propaga."
          en: "A positive speed is coherent with a propagating wave."
      - id: v_coherence_bad
        when: "v <= 0"
        status: error
        text:
          es: "Una rapidez nula o negativa invalida la lectura como propagacion ordinaria."
          en: "A zero or negative speed invalidates the reading as ordinary propagation."
    model_validity_rules:
      - id: v_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo vale si el medio no cambia apreciablemente y se puede identificar la misma fase."
          en: "The model is valid if the medium does not change appreciably and the same phase can be identified."
    graph_rules:
      - id: v_graph_default
        when: "true"
        status: ok
        text:
          es: "En Coord, mayor [[v]] se ve como desplazamiento mas rapido del perfil de onda."
          en: "In Coord, larger [[v]] appears as faster displacement of the wave profile."
    likely_errors:
      - id: v_error_particle
        when: "true"
        status: warning
        text:
          es: "Error tipico: medir la velocidad vertical de un punto del medio en vez del avance del patron."
          en: "Typical mistake: measuring vertical point speed instead of pattern advance."
    next_step_rules:
      - id: v_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[v]] con el valor esperado del medio y revisa si [[lambda]] y [[f]] son compatibles."
          en: "Compare [[v]] with the expected medium value and check whether [[lambda]] and [[f]] are compatible."
  lambda:
    magnitude_type: fundamental
    semantic_role:
      es: Escala espacial que recorre el patron por ciclo.
      en: Spatial scale travelled by the pattern per cycle.
    summary_rules:
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] describe la separacion espacial del patron y depende de [[v]] cuando la frecuencia se mantiene fija."
          en: "[[lambda]] describes pattern spatial spacing and depends on [[v]] when frequency is held fixed."
    physical_reading_rules:
      - id: lambda_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[lambda]] mayor separa mas las crestas y permite que cada ciclo ocupe mas espacio."
          en: "A larger [[lambda]] separates crests more and lets each cycle occupy more space."
    coherence_rules:
      - id: lambda_coherence
        when: "lambda > 0"
        status: ok
        text:
          es: "La longitud de onda positiva mantiene la lectura espacial coherente."
          en: "A positive wavelength keeps the spatial reading coherent."
      - id: lambda_bad
        when: "lambda <= 0"
        status: error
        text:
          es: "Una longitud de onda nula o negativa no representa repeticion espacial fisica."
          en: "A zero or negative wavelength does not represent physical spatial repetition."
    model_validity_rules:
      - id: lambda_validity
        when: "true"
        status: ok
        text:
          es: "La lectura exige crestas o fases equivalentes suficientemente regulares."
          en: "The reading requires sufficiently regular crests or equivalent phases."
    graph_rules:
      - id: lambda_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[lambda]] se aprecia como separacion horizontal entre repeticiones."
          en: "In the graph, [[lambda]] appears as horizontal separation between repetitions."
    likely_errors:
      - id: lambda_error_amplitude
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir separacion horizontal con altura de la onda."
          en: "Typical mistake: confusing horizontal spacing with wave height."
    next_step_rules:
      - id: lambda_next
        when: "true"
        status: ok
        text:
          es: "Revisa si la [[f]] usada corresponde al mismo patron espacial."
          en: "Check whether the [[f]] used corresponds to the same spatial pattern."
  f:
    magnitude_type: fundamental
    semantic_role:
      es: Ritmo temporal de repeticion de la onda.
      en: Temporal repetition rate of the wave.
    summary_rules:
      - id: f_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f]] indica cuantos ciclos pasan por segundo y describe el ritmo temporal que combina con [[lambda]]."
          en: "[[f]] indicates how many cycles pass per second and describes the temporal rhythm combined with [[lambda]]."
    physical_reading_rules:
      - id: f_reading
        when: "true"
        status: ok
        text:
          es: "A igual [[lambda]], aumentar [[f]] aumenta la rapidez de avance del patron."
          en: "At fixed [[lambda]], increasing [[f]] increases the pattern advance speed."
    coherence_rules:
      - id: f_positive
        when: "f > 0"
        status: ok
        text:
          es: "La frecuencia positiva permite contar ciclos reales."
          en: "Positive frequency allows real cycles to be counted."
      - id: f_bad
        when: "f <= 0"
        status: error
        text:
          es: "Una frecuencia no positiva no describe una oscilacion periodica ordinaria."
          en: "A nonpositive frequency does not describe an ordinary periodic oscillation."
    model_validity_rules:
      - id: f_validity
        when: "true"
        status: ok
        text:
          es: "La frecuencia debe pertenecer a la misma onda cuya longitud se mide."
          en: "The frequency must belong to the same wave whose wavelength is measured."
    graph_rules:
      - id: f_graph
        when: "true"
        status: ok
        text:
          es: "El grafico muestra su efecto como mayor ritmo de paso de crestas por una posicion fija."
          en: "The graph shows its effect as a higher rate of crests passing a fixed position."
    likely_errors:
      - id: f_error_medium
        when: "true"
        status: warning
        text:
          es: "Error tipico: pensar que [[f]] por si sola fija la rapidez del medio."
          en: "Typical mistake: thinking that [[f]] alone fixes the medium speed."
    next_step_rules:
      - id: f_next
        when: "true"
        status: ok
        text:
          es: "Combina [[f]] con una medida independiente de [[lambda]] para estimar [[v]]."
          en: "Combine [[f]] with an independent measure of [[lambda]] to estimate [[v]]."
  Delta_x:
    magnitude_type: parameter
    semantic_role:
      es: Distancia que avanza una fase reconocible.
      en: Distance advanced by a recognizable phase.
    summary_rules:
      - id: dx_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Delta_x]] describe el avance observado del patron y depende de seguir la misma fase."
          en: "[[Delta_x]] describes observed pattern advance and depends on tracking the same phase."
    physical_reading_rules:
      - id: dx_reading
        when: "true"
        status: ok
        text:
          es: "Un [[Delta_x]] mayor durante el mismo [[Delta_t]] significa mayor rapidez media."
          en: "A larger [[Delta_x]] during the same [[Delta_t]] means greater average speed."
    coherence_rules:
      - id: dx_nonnegative
        when: "Delta_x >= 0"
        status: ok
        text:
          es: "La distancia de avance no negativa es coherente con una medicion de recorrido."
          en: "A nonnegative advance distance is coherent with a travelled-distance measurement."
    model_validity_rules:
      - id: dx_validity
        when: "true"
        status: ok
        text:
          es: "La medida falla si se cambia de cresta o si el patron se deforma durante el seguimiento."
          en: "The measure fails if a different crest is tracked or the pattern deforms during tracking."
    graph_rules:
      - id: dx_graph
        when: "true"
        status: ok
        text:
          es: "En Svg, [[Delta_x]] se lee como flecha horizontal entre posiciones del mismo rasgo."
          en: "In Svg, [[Delta_x]] is read as a horizontal arrow between positions of the same feature."
    likely_errors:
      - id: dx_error_height
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar la elongacion vertical como si fuera distancia recorrida por el patron."
          en: "Typical mistake: using vertical displacement as if it were distance travelled by the pattern."
    next_step_rules:
      - id: dx_next
        when: "true"
        status: ok
        text:
          es: "Divide la lectura de [[Delta_x]] por un [[Delta_t]] fiable para obtener [[v]]."
          en: "Divide the [[Delta_x]] reading by a reliable [[Delta_t]] to obtain [[v]]."
  Delta_t:
    magnitude_type: parameter
    semantic_role:
      es: Duracion del seguimiento del patron.
      en: Duration of pattern tracking.
    summary_rules:
      - id: dt_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Delta_t]] indica la duracion de observacion y depende de escoger dos instantes comparables."
          en: "[[Delta_t]] indicates observation duration and depends on choosing two comparable instants."
    physical_reading_rules:
      - id: dt_reading
        when: "true"
        status: ok
        text:
          es: "Para el mismo [[Delta_x]], un [[Delta_t]] mayor significa avance medio mas lento."
          en: "For the same [[Delta_x]], a larger [[Delta_t]] means slower average advance."
    coherence_rules:
      - id: dt_positive
        when: "Delta_t > 0"
        status: ok
        text:
          es: "El intervalo positivo permite comparar distancia y tiempo."
          en: "A positive interval allows distance and time to be compared."
      - id: dt_bad
        when: "Delta_t <= 0"
        status: error
        text:
          es: "Un intervalo nulo o negativo impide calcular una rapidez media."
          en: "A zero or negative interval prevents calculating average speed."
    model_validity_rules:
      - id: dt_validity
        when: "true"
        status: ok
        text:
          es: "El intervalo debe ser corto frente a cambios del medio y largo frente al ruido de lectura."
          en: "The interval must be short compared with medium changes and long compared with reading noise."
    graph_rules:
      - id: dt_graph
        when: "true"
        status: ok
        text:
          es: "En una animacion, [[Delta_t]] separa los dos estados del perfil comparado."
          en: "In an animation, [[Delta_t]] separates the two compared profile states."
    likely_errors:
      - id: dt_error_period
        when: "true"
        status: warning
        text:
          es: "Error tipico: sustituir automaticamente [[Delta_t]] por un periodo aunque se midio otro intervalo."
          en: "Typical mistake: automatically replacing [[Delta_t]] with a period even when another interval was measured."
    next_step_rules:
      - id: dt_next
        when: "true"
        status: ok
        text:
          es: "Revisa que [[Delta_x]] y [[Delta_t]] se hayan tomado sobre el mismo rasgo de onda."
          en: "Check that [[Delta_x]] and [[Delta_t]] were taken from the same wave feature."
cross_checks:
  - id: speed_consistency
    formula_pair: [velocidad_onda_frecuencia, velocidad_media_patron]
    message:
      es: "Las dos formas de obtener [[v]] deben ser compatibles si describen la misma onda."
      en: "The two ways of obtaining [[v]] should be compatible if they describe the same wave."
error_patterns:
  - id: particle_vs_pattern
    detects: [v, Delta_x]
    message:
      es: "Distinguir avance del patron y oscilacion local del medio."
      en: "Distinguish pattern advance from local oscillation of the medium."
graph_binding:
  primary_graph: Coord
  secondary_graph: Svg
  targets: [v, Delta_x, lambda, f]
mini_graph:
  enabled: true
  type: Coord
  target: v
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
`;export{e as default};
