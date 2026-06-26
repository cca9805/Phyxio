const e=`version: v5
leaf_id: fase
formulas:
  - id: fase_armonica
    title:
      es: Fase de una onda armónica
      en: Phase of a harmonic wave
    equation: "phi = k*x - omega*t + phi0"
    latex: "\\\\phi=k x-\\\\omega t+\\\\phi_0 % phi k x omega t phi0"
    rearrangements:
      - target: phi
        equation: "phi = k*x - omega*t + phi0"
        latex: "\\\\phi=k x-\\\\omega t+\\\\phi_0 % phi k x omega t phi0"
    category: fundamental
    relation_type: phase_definition
    physical_meaning:
      es: La fase reúne posición, tiempo y fase inicial para indicar el estado del ciclo.
      en: Phase combines position, time, and initial phase to indicate cycle state.
    constraints: ["onda armonica", "medio uniforme", "fase definida"]
    validity:
      es: Válida para ondas sinusoidales o componentes armónicas bien definidas.
      en: Valid for sinusoidal waves or well-defined harmonic components.
    dimension_check: "[1] = [1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [fase, ciclo, propagacion]
    result_semantics:
      target: phi
      kind: cyclic_state
      sign_meaning:
        es: El signo depende de la convención de propagación y origen de fase.
        en: The sign depends on propagation convention and phase origin.
      absolute_value_meaning:
        es: El valor numérico indica avance dentro del ciclo antes de reducir vueltas completas.
        en: The numerical value indicates cycle advance before reducing complete turns.
    domain_checks:
      - id: harmonic_phase_defined
        condition: "k > 0 and omega > 0"
        message:
          es: La fase armónica requiere número de onda y frecuencia angular definidos.
          en: Harmonic phase requires defined wavenumber and angular frequency.
    coherence_checks:
      - id: phase_terms_dimensionless
        condition: "dimension(phi) == [1]"
        message:
          es: Todos los aportes de fase deben ser adimensionales.
          en: All phase contributions must be dimensionless.
    graph_implications:
      es: El gráfico debe mostrar el estado del ciclo desplazándose con posición y tiempo.
      en: The graph should show the cycle state shifting with position and time.
    pedagogical_triggers:
      - id: phase_amplitude_confusion
        text:
          es: Si el alumno interpreta fase como altura, separar estado de ciclo y amplitud.
          en: If the student interprets phase as height, separate cycle state from amplitude.
  - id: diferencia_fase
    title:
      es: Diferencia de fase entre dos lecturas
      en: Phase difference between two readings
    equation: "Delta_phi = k*Delta_x - omega*Delta_t"
    latex: "\\\\Delta\\\\phi=k\\\\Delta x-\\\\omega\\\\Delta t % Delta_phi k omega"
    rearrangements:
      - target: Delta_phi
        equation: "Delta_phi = k*Delta_x - omega*Delta_t"
        latex: "\\\\Delta\\\\phi=k\\\\Delta x-\\\\omega\\\\Delta t % Delta_phi k omega"
    category: derived
    relation_type: comparison
    physical_meaning:
      es: El desfase compara si dos lecturas corresponden al mismo estado oscilatorio.
      en: Phase difference compares whether two readings correspond to the same oscillation state.
    constraints: ["misma onda", "misma convencion de fase"]
    validity:
      es: Válida al comparar puntos o instantes dentro de la misma onda armónica.
      en: Valid when comparing points or instants within the same harmonic wave.
    dimension_check: "[1] = [1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [desfase, comparacion, ciclo]
    result_semantics:
      target: Delta_phi
      kind: cyclic_comparison
      sign_meaning:
        es: El signo indica adelanto o retraso solo después de fijar la convención.
        en: The sign indicates lead or lag only after the convention is fixed.
      absolute_value_meaning:
        es: El módulo mide separación de estado dentro del ciclo.
        en: The magnitude measures state separation within the cycle.
    domain_checks:
      - id: same_wave_component
        condition: "same_component"
        message:
          es: Las dos lecturas deben pertenecer a la misma componente de onda.
          en: Both readings must belong to the same wave component.
    coherence_checks:
      - id: common_phase_convention
        condition: "same_phase_convention"
        message:
          es: El desfase exige la misma convención de signo y origen.
          en: Phase difference requires the same sign convention and origin.
    graph_implications:
      es: En el gráfico, el desfase aparece como separación de estados dentro del mismo ciclo.
      en: On the graph, phase difference appears as state separation within the same cycle.
    pedagogical_triggers:
      - id: distance_without_k
        text:
          es: Si el alumno usa solo distancia, recordar que [[k]] convierte separación espacial en desfase.
          en: If the student uses only distance, remind them that [[k]] converts spatial separation into phase difference.
  - id: velocidad_fase_phi
    title:
      es: Rapidez de fase
      en: Phase speed
    equation: "v_phi = omega / k"
    latex: "v_{\\\\phi}=\\\\omega/k % v_phi omega k"
    rearrangements:
      - target: v_phi
        equation: "v_phi = omega / k"
        latex: "v_{\\\\phi}=\\\\omega/k % v_phi omega k"
    category: derived
    relation_type: phase_speed
    physical_meaning:
      es: La rapidez de fase mide cuánto avanza un mismo estado de fase por unidad de tiempo.
      en: Phase speed measures how far the same phase state advances per unit time.
    constraints: ["k positivo", "fase armónica definida"]
    validity:
      es: Válida para una componente armónica con número de onda no nulo.
      en: Valid for a harmonic component with nonzero wavenumber.
    dimension_check: "[L T^-1] = [L T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [rapidez_fase, propagacion]
    result_semantics:
      target: v_phi
      kind: positive_speed
      sign_meaning:
        es: Se interpreta como rapidez de avance de una fase constante en el sentido elegido.
        en: It is interpreted as the advance speed of a constant phase in the chosen direction.
      absolute_value_meaning:
        es: Indica distancia recorrida por el mismo estado de fase por unidad de tiempo.
        en: It indicates distance traveled by the same phase state per unit time.
    domain_checks:
      - id: nonzero_wavenumber
        condition: "k > 0"
        message:
          es: El número de onda debe ser positivo para definir rapidez de fase.
          en: Wavenumber must be positive to define phase speed.
    coherence_checks:
      - id: speed_dimension
        condition: "dimension(v_phi) == [L T^-1]"
        message:
          es: La rapidez de fase debe tener dimensión de velocidad.
          en: Phase speed must have velocity dimension.
    graph_implications:
      es: El gráfico debe permitir seguir una fase constante mientras avanza.
      en: The graph should allow a constant phase to be followed as it advances.
    pedagogical_triggers:
      - id: phase_particle_speed
        text:
          es: Si el alumno la confunde con velocidad de partícula, distinguir avance de fase y movimiento del medio.
          en: If the student confuses it with particle speed, distinguish phase advance from medium motion.
`;export{e as default};
