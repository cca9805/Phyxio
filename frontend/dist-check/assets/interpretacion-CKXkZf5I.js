const e=`version: v5
id: interpretacion_espectro_electromagnetico
leaf_id: espectro-electromagnetico
nombre:
  es: Espectro electromagnetico
  en: Electromagnetic Spectrum
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: ondas-electromagneticas
  parent_id: ondas-electromagneticas
  ruta_relativa: fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: true
  labels:
    es: Interpretacion fisica
    en: Physical interpretation
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_items: 3
dependencies:
  formulas: [relacion_dispersion_espectral, energia_foton]
  magnitudes: [lambda, f, c, h, E_foton]
global_context:
  physical_domain:
    es: Ondas electromagneticas ordenadas por escala espacial, ritmo temporal y energia fotonica.
    en: Electromagnetic waves ordered by spatial scale, temporal rate, and photon energy.
  axis_convention:
    es: El eje horizontal usa [[lambda]] y el eje vertical usa [[f]], de modo que moverse a la izquierda aumenta energia.
    en: The horizontal axis uses [[lambda]] and the vertical axis uses [[f]], so moving left increases energy.
  standard_assumptions:
    - es: "Se trabaja en vacio o aire como primera aproximacion."
      en: "Vacuum or air is used as a first approximation."
    - es: "La clasificacion espectral se interpreta con valores positivos de [[lambda]], [[f]], [[c]], [[h]] y [[E_foton]]."
      en: "Spectral classification is interpreted with positive values of [[lambda]], [[f]], [[c]], [[h]], and [[E_foton]]."
  standard_warnings:
    - es: "La intensidad de una fuente no se deduce de [[E_foton]] sin conocer el flujo de fotones."
      en: "Source intensity cannot be inferred from [[E_foton]] without photon flux."
    - es: "En medios dispersivos la relacion entre [[lambda]] y [[f]] cambia porque la velocidad efectiva no es exactamente [[c]]."
      en: "In dispersive media the relation between [[lambda]] and [[f]] changes because the effective speed is not exactly [[c]]."
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
      es: Lectura grafica
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
targets:
  f:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: ritmo de oscilacion que ordena la region espectral
      en: oscillation rate that orders the spectral region
    summary_rules:
      - id: f_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f]] indica donde cae la onda dentro del espectro y describe cuanto aumenta la energia fotonica."
          en: "[[f]] indicates where the wave falls in the spectrum and describes how photon energy increases."
    physical_reading_rules:
      - id: f_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[f]] mayor significa oscilaciones mas rapidas, menor [[lambda]] en vacio y mayor capacidad de interaccion microscopica."
          en: "A larger [[f]] means faster oscillations, shorter [[lambda]] in vacuum, and stronger microscopic interaction."
    coherence_rules:
      - id: f_coherence_positive
        when: "true"
        status: ok
        text:
          es: "[[f]] debe ser positiva; un valor nulo o negativo no representa radiacion electromagnetica viajera."
          en: "[[f]] must be positive; a zero or negative value does not represent travelling electromagnetic radiation."
    model_validity_rules:
      - id: f_validity_default
        when: "true"
        status: ok
        text:
          es: "El resultado es fiable si la onda se trata en vacio o aire; en vidrio, plasma o guias debe cambiarse el modelo."
          en: "The result is reliable in vacuum or air; in glass, plasma, or waveguides the model should change."
    graph_rules:
      - id: f_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[f]] aumenta cuando [[lambda]] disminuye, por eso las regiones energeticas quedan hacia longitudes cortas."
          en: "On the graph, [[f]] increases when [[lambda]] decreases, so energetic regions lie at short wavelengths."
    likely_errors:
      - id: f_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir [[f]] con rapidez de propagacion y pensar que rayos X viajan mas rapido que radio en vacio."
          en: "Typical mistake: confusing [[f]] with propagation speed and thinking X rays travel faster than radio in vacuum."
    next_step_rules:
      - id: f_next_default
        when: "true"
        status: ok
        text:
          es: "Despues de calcular [[f]], comparala con [[E_foton]] para decidir si domina la lectura ondulatoria o corpuscular."
          en: "After computing [[f]], compare it with [[E_foton]] to decide whether wave or photon reading dominates."
  lambda:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: escala espacial de la onda electromagnetica
      en: spatial scale of the electromagnetic wave
    summary_rules:
      - id: lam_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] describe la escala espacial de la onda y disminuye cuando [[f]] aumenta en el mismo medio."
          en: "[[lambda]] describes the spatial scale of the wave and decreases when [[f]] increases in the same medium."
    physical_reading_rules:
      - id: lam_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[lambda]] grande se asocia a antenas, difraccion y baja energia por foton; una corta apunta a interaccion microscopica."
          en: "A large [[lambda]] is linked to antennas, diffraction, and low photon energy; a short one points to microscopic interaction."
    coherence_rules:
      - id: lam_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] debe mantenerse positiva y compatible con una [[f]] positiva mediante la propagacion a velocidad [[c]]."
          en: "[[lambda]] must remain positive and compatible with positive [[f]] through propagation at speed [[c]]."
    model_validity_rules:
      - id: lam_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura directa de [[lambda]] falla si el medio cambia la velocidad, si hay dispersion fuerte o si la onda esta confinada."
          en: "Direct reading of [[lambda]] fails if the medium changes speed, if dispersion is strong, or if the wave is confined."
    graph_rules:
      - id: lam_graph_default
        when: "true"
        status: ok
        text:
          es: "En la curva espectral, moverse hacia menor [[lambda]] desplaza el punto hacia mayor [[f]] y mayor [[E_foton]]."
          en: "On the spectral curve, moving toward smaller [[lambda]] shifts the point toward larger [[f]] and larger [[E_foton]]."
    likely_errors:
      - id: lam_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: ordenar el espectro solo por [[lambda]] y olvidar que la energia crece en el sentido contrario."
          en: "Frequent error: ordering the spectrum only by [[lambda]] and forgetting that energy grows in the opposite direction."
    next_step_rules:
      - id: lam_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[lambda]] para reconocer la escala del dispositivo o del obstaculo con el que interactua la radiacion."
          en: "Use [[lambda]] to recognize the scale of the device or obstacle interacting with the radiation."
  c:
    magnitude_type: scalar_constant
    semantic_role:
      es: velocidad de propagacion que conecta escala y frecuencia
      en: propagation speed connecting scale and frequency
    summary_rules:
      - id: c_summary_default
        when: "true"
        status: ok
        text:
          es: "[[c]] resume la velocidad comun del espectro en vacio y mantiene balance entre [[lambda]] y [[f]]."
          en: "[[c]] summarizes the common vacuum speed of the spectrum and balances [[lambda]] with [[f]]."
    physical_reading_rules:
      - id: c_reading_default
        when: "true"
        status: ok
        text:
          es: "[[c]] no clasifica por si sola la region espectral; actua como puente causal entre distancia recorrida y ciclo temporal."
          en: "[[c]] does not classify the spectral region by itself; it is the causal bridge between travelled distance and temporal cycle."
    coherence_rules:
      - id: c_coherence_default
        when: "true"
        status: ok
        text:
          es: "Si [[lambda]] y [[f]] representan una onda en vacio, su producto debe corresponder a una rapidez compatible con [[c]]."
          en: "If [[lambda]] and [[f]] represent a vacuum wave, their product must match a speed compatible with [[c]]."
    model_validity_rules:
      - id: c_validity_default
        when: "true"
        status: ok
        text:
          es: "Sustituye [[c]] por una velocidad de fase del medio cuando la radiacion atraviesa materiales dispersivos."
          en: "Replace [[c]] with the phase speed of the medium when radiation crosses dispersive materials."
    graph_rules:
      - id: c_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[c]] fija la familia de puntos coherentes entre [[lambda]] y [[f]], no una region concreta."
          en: "On the graph, [[c]] fixes the coherent family of points between [[lambda]] and [[f]], not one specific region."
    likely_errors:
      - id: c_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: atribuir a [[c]] las diferencias de energia entre regiones, cuando esa diferencia depende de [[f]]."
          en: "Typical mistake: attributing energy differences between regions to [[c]], when that difference depends on [[f]]."
    next_step_rules:
      - id: c_next_default
        when: "true"
        status: ok
        text:
          es: "Comprueba si el contexto pide vacio, aire o medio material antes de usar [[c]] como constante del calculo."
          en: "Check whether the context asks for vacuum, air, or a material medium before using [[c]] as the calculation constant."
  E_foton:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: energia transportada por un foton individual
      en: energy carried by one individual photon
    summary_rules:
      - id: ef_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_foton]] indica la energia de cada cuanto y aumenta directamente cuando aumenta [[f]]."
          en: "[[E_foton]] indicates the energy of each quantum and increases directly when [[f]] increases."
    physical_reading_rules:
      - id: ef_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[E_foton]] mayor significa interacciones mas localizadas con materia, aunque no implica mayor potencia total del haz."
          en: "A larger [[E_foton]] means more localized interactions with matter, although it does not imply greater total beam power."
    coherence_rules:
      - id: ef_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[E_foton]] debe ser positiva porque procede de una [[f]] positiva multiplicada por la constante positiva [[h]]."
          en: "[[E_foton]] must be positive because it comes from positive [[f]] multiplied by positive [[h]]."
    model_validity_rules:
      - id: ef_validity_default
        when: "true"
        status: ok
        text:
          es: "La energia por foton es adecuada para absorcion y emision; para calentamiento macroscopico falta el numero de fotones."
          en: "Photon energy is suitable for absorption and emission; macroscopic heating also needs the number of photons."
    graph_rules:
      - id: ef_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[E_foton]] crece en la misma direccion que [[f]] y en sentido opuesto a [[lambda]]."
          en: "On the graph, [[E_foton]] grows in the same direction as [[f]] and opposite to [[lambda]]."
    likely_errors:
      - id: ef_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: llamar intensa a una radiacion solo porque [[E_foton]] es alta, sin conocer cuantos fotones llegan."
          en: "Frequent error: calling radiation intense only because [[E_foton]] is high, without knowing how many photons arrive."
    next_step_rules:
      - id: ef_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[E_foton]] con escalas de enlace, excitacion o ionizacion si el problema trata interaccion con materia."
          en: "Compare [[E_foton]] with bond, excitation, or ionization scales if the problem concerns interaction with matter."
  h:
    magnitude_type: scalar_constant
    semantic_role:
      es: constante que convierte frecuencia en energia fotonica
      en: constant converting frequency into photon energy
    summary_rules:
      - id: h_summary_default
        when: "true"
        status: ok
        text:
          es: "[[h]] significa que el espectro tambien describe cuantos de energia, no solo ondas continuas."
          en: "[[h]] means that the spectrum also describes energy quanta, not only continuous waves."
    physical_reading_rules:
      - id: h_reading_default
        when: "true"
        status: ok
        text:
          es: "[[h]] fija la escala cuantica que hace que una frecuencia alta produzca mayor energia por foton."
          en: "[[h]] fixes the quantum scale that makes a high frequency produce greater photon energy."
    coherence_rules:
      - id: h_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[h]] debe ser positiva y constante; si aparece variable, se esta confundiendo con una propiedad de la fuente."
          en: "[[h]] must be positive and constant; if it appears variable, it is being confused with a source property."
    model_validity_rules:
      - id: h_validity_default
        when: "true"
        status: ok
        text:
          es: "Usar [[h]] es necesario para energia por foton, pero no sustituye al modelo de potencia o intensidad de un haz."
          en: "Using [[h]] is necessary for photon energy, but it does not replace a beam power or intensity model."
    graph_rules:
      - id: h_graph_default
        when: "true"
        status: ok
        text:
          es: "En la lectura grafica, [[h]] actua como escala vertical para traducir [[f]] en [[E_foton]]."
          en: "In the graph reading, [[h]] acts as the vertical scale translating [[f]] into [[E_foton]]."
    likely_errors:
      - id: h_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: modificar [[h]] para adaptar unidades, en lugar de convertir correctamente [[f]] y energia."
          en: "Typical mistake: changing [[h]] to adjust units instead of correctly converting [[f]] and energy."
    next_step_rules:
      - id: h_next_default
        when: "true"
        status: ok
        text:
          es: "Despues de identificar [[h]], decide si el problema pide energia por foton o energia total recibida."
          en: "After identifying [[h]], decide whether the problem asks for photon energy or total received energy."
cross_checks:
  - id: dispersion_positive
    type: positivity
    formulas: [relacion_dispersion_espectral]
    magnitudes: [lambda, f, c]
    message:
      es: "La relacion espectral solo es coherente con magnitudes positivas."
      en: "The spectral relation is coherent only with positive magnitudes."
  - id: photon_energy_positive
    type: positivity
    formulas: [energia_foton]
    magnitudes: [h, f, E_foton]
    message:
      es: "La energia fotonica debe crecer con la frecuencia."
      en: "Photon energy must grow with frequency."
error_patterns:
  - id: invert_frequency_wavelength
    detects: [lambda, f]
    message:
      es: "Si aumenta [[lambda]] y tambien aumenta [[f]], se ha invertido la relacion espectral en vacio."
      en: "If [[lambda]] and [[f]] both increase, the vacuum spectral relation has been inverted."
  - id: confuse_energy_intensity
    detects: [E_foton]
    message:
      es: "Una [[E_foton]] alta no mide por si sola la intensidad de la fuente."
      en: "A high [[E_foton]] does not by itself measure source intensity."
graph_binding:
  preferred_graph: Coord
  magnitud_estrella: f
  variable_control: lambda
  visible_magnitudes: [lambda, f, E_foton]
  relation: relacion_dispersion_espectral
mini_graph:
  enabled: true
  type: Coord
  x: lambda
  y: f
  reading:
    es: "Curva decreciente entre [[lambda]] y [[f]], con energia creciente hacia frecuencias altas."
    en: "Decreasing curve between [[lambda]] and [[f]], with energy increasing toward high frequency."
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
