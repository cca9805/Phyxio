const e=`version: v5
leaf_id: velocidad-de-propagacion
formulas:
  - id: velocidad_onda_frecuencia
    title:
      es: Velocidad por longitud de onda y frecuencia
      en: Speed from wavelength and frequency
    equation: "v = lambda * f"
    latex: "v = \\\\lambda f"
    rearrangements:
      - target: v
        equation: "v = lambda * f"
        latex: "v = \\\\lambda f"
      - target: lambda
        equation: "lambda = v / f"
        latex: "\\\\lambda = \\\\frac{v}{f}"
      - target: f
        equation: "f = v / lambda"
        latex: "f = \\\\frac{v}{\\\\lambda}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La rapidez del patron resulta de avanzar una longitud de onda por cada ciclo temporal."
      en: "The pattern speed comes from advancing one wavelength per temporal cycle."
    constraints:
      - "lambda > 0"
      - "f > 0"
      - "medio aproximadamente uniforme"
    validity:
      es: "Valida para ondas periodicas cuya forma se propaga sin dispersion apreciable durante la medida."
      en: "Valid for periodic waves whose shape propagates without appreciable dispersion during the measurement."
    dimension_check: "[L] [T^-1] produce [L T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [speed_from_repetition, medium_check, frequency_wavelength_link]
    result_semantics:
      target: v
      kind: propagation_speed
      sign_meaning:
        es: "La rapidez se lee como modulo positivo del avance del patron."
        en: "The speed is read as the positive magnitude of pattern advance."
      absolute_value_meaning:
        es: "El valor indica cuantos metros recorre el patron en un segundo."
        en: "The value indicates how many metres the pattern travels in one second."
    domain_checks:
      - id: domain_positive_inputs
        when: "lambda > 0 && f > 0"
        status: ok
        message:
          es: "La longitud de onda y la frecuencia son positivas."
          en: "Wavelength and frequency are positive."
      - id: domain_bad_inputs
        when: "lambda <= 0 || f <= 0"
        status: error
        message:
          es: "La relacion no admite longitud de onda ni frecuencia nulas o negativas."
          en: "The relation does not accept zero or negative wavelength or frequency."
    coherence_checks:
      - id: speed_medium_scale
        when: "v > 0"
        status: ok
        message:
          es: "El resultado debe compararse con la escala fisica del medio."
          en: "The result must be compared with the physical scale of the medium."
    graph_implications:
      - id: coord_spacing_rate
        text:
          es: "En el grafico Coord, mayor [[v]] aparece como avance mas rapido del mismo patron."
          en: "In the Coord graph, larger [[v]] appears as faster advance of the same pattern."
    pedagogical_triggers:
      - id: freq_speed_confusion
        text:
          es: "Si el alumno aumenta [[f]] sin revisar [[lambda]], puede atribuir al medio un cambio que no ha sido justificado."
          en: "If the student increases [[f]] without checking [[lambda]], they may attribute an unjustified change to the medium."
  - id: velocidad_media_patron
    title:
      es: Velocidad media de avance del patron
      en: Average pattern-advance speed
    equation: "v = Delta_x / Delta_t"
    latex: "v = \\\\frac{\\\\Delta x}{\\\\Delta t}"
    rearrangements:
      - target: v
        equation: "v = Delta_x / Delta_t"
        latex: "v = \\\\frac{\\\\Delta x}{\\\\Delta t}"
      - target: Delta_x
        equation: "Delta_x = v * Delta_t"
        latex: "\\\\Delta x = v\\\\Delta t"
      - target: Delta_t
        equation: "Delta_t = Delta_x / v"
        latex: "\\\\Delta t = \\\\frac{\\\\Delta x}{v}"
    category: derived
    relation_type: average_relation
    physical_meaning:
      es: "La rapidez media compara la distancia recorrida por una fase reconocible con el tiempo observado."
      en: "Average speed compares the distance travelled by a recognizable phase with the observed time."
    constraints:
      - "Delta_t > 0"
      - "Delta_x >= 0"
      - "seguimiento de la misma fase"
    validity:
      es: "Valida cuando se sigue la misma cresta, frente o fase equivalente durante todo el intervalo."
      en: "Valid when the same crest, front, or equivalent phase is tracked throughout the interval."
    dimension_check: "[L] dividido por [T] produce [L T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_svg]
    interpretation_tags: [average_speed, direct_measurement, tracking_phase]
    result_semantics:
      target: v
      kind: propagation_speed
      sign_meaning:
        es: "La rapidez media se interpreta como modulo positivo del avance observado."
        en: "Average speed is interpreted as the positive magnitude of observed advance."
      absolute_value_meaning:
        es: "El valor resume la distancia de patron recorrida por unidad de tiempo."
        en: "The value summarizes pattern distance travelled per unit time."
    domain_checks:
      - id: interval_positive
        when: "Delta_t > 0"
        status: ok
        message:
          es: "El intervalo temporal permite una rapidez media definida."
          en: "The time interval allows a defined average speed."
      - id: interval_zero
        when: "Delta_t <= 0"
        status: error
        message:
          es: "El intervalo temporal debe ser positivo."
          en: "The time interval must be positive."
    coherence_checks:
      - id: displacement_nonnegative
        when: "Delta_x >= 0"
        status: ok
        message:
          es: "La distancia de avance se toma como magnitud no negativa."
          en: "The advance distance is taken as a nonnegative magnitude."
    graph_implications:
      - id: svg_shift_arrow
        text:
          es: "En el Svg, [[Delta_x]] aparece como flecha de avance del patron entre dos instantes."
          en: "In the Svg, [[Delta_x]] appears as the pattern-advance arrow between two instants."
    pedagogical_triggers:
      - id: particle_pattern_confusion
        text:
          es: "El error tipico es medir la oscilacion vertical de una particula en lugar del desplazamiento horizontal del patron."
          en: "The typical mistake is measuring vertical particle oscillation instead of horizontal pattern displacement."
`;export{e as default};
