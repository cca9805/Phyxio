const e=`version: "1.0"
id: interpretacion-procesos-irreversibles
leaf_id: procesos-irreversibles

nombre:
  es: Interpretacion de procesos irreversibles
  en: Interpretation of irreversible processes

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: entropia-y-segunda-ley
  parent_id: entropia-y-segunda-ley
  ruta_relativa: fisica-clasica/termodinamica/entropia-y-segunda-ley/procesos-irreversibles

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_messages: 3
    max_characters: 300
  default_formula: criterio_irreversibilidad

dependencies:
  formulas:
    - criterio_irreversibilidad
    - generacion_entropia_transferencia_calor
  magnitudes:
    - DeltaS_univ
    - DeltaS_sis
    - DeltaS_ent
    - Q_sis
    - T_sis
    - T_ent
    - S_gen

global_context:
  physical_domain:
    es: "Balance entropico de sistema mas entorno para decidir si un proceso termodinamico es reversible, irreversible o imposible."
    en: "Entropy balance of system plus surroundings to decide whether a thermodynamic process is reversible, irreversible, or impossible."
  axis_convention:
    es: "El grafico usa el gradiente termico como eje de control y la entropia generada como respuesta."
    en: "The graph uses thermal gradient as the control axis and generated entropy as the response."
  standard_assumptions:
    - "Sistema y entorno tienen estados iniciales y finales de equilibrio."
    - "El entorno puede modelarse como reservorio si su temperatura cambia poco."
    - "La segunda ley se aplica al universo termodinamico, no al sistema aislado."
  standard_warnings:
    - "Un resultado negativo de DeltaS_univ indica error de signos o frontera."
    - "DeltaS_sis puede ser negativo sin violar la segunda ley."
    - "S_gen representa irreversibilidad creada, no calor almacenado."

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
  DeltaS_univ: &entropy_balance_target
    magnitude_type: scalar_signed
    semantic_role:
      es: "Criterio global de irreversibilidad: suma del cambio de entropia del sistema y del entorno."
      en: "Global irreversibility criterion: sum of the entropy change of system and surroundings."
    summary_rules:
      - id: summary_irreversible_positive
        when: "DeltaS_univ > 0"
        status: ok
        text:
          es: "[[DeltaS_univ]] positiva indica proceso irreversible: el universo gana entropia neta y se degrada trabajo potencial."
          en: "Positive [[DeltaS_univ]] indicates an irreversible process: the universe gains net entropy and potential work is degraded."
      - id: summary_reversible_limit
        when: "DeltaS_univ == 0"
        status: ok
        text:
          es: "[[DeltaS_univ]] nula resume el limite reversible ideal: no hay generacion neta de entropia."
          en: "Zero [[DeltaS_univ]] summarises the ideal reversible limit: there is no net entropy generation."
      - id: summary_impossible_negative
        when: "DeltaS_univ < 0"
        status: error
        text:
          es: "[[DeltaS_univ]] negativa describe un resultado imposible; normalmente significa signo mal elegido o entorno mal definido."
          en: "Negative [[DeltaS_univ]] describes an impossible result; it usually means a sign error or a misdefined surroundings."
    physical_reading_rules:
      - id: physical_reading_causal_degradation
        when: "DeltaS_univ > 0"
        status: ok
        text:
          es: "La lectura causal es que [[S_gen]] aparece porque hay gradientes finitos, friccion, mezcla o expansion libre; esas fuentes dispersan energia y reducen el trabajo recuperable."
          en: "The causal reading is that [[S_gen]] appears because finite gradients, friction, mixing, or free expansion disperse energy and reduce recoverable work."
      - id: physical_reading_system_surroundings
        when: "true"
        status: ok
        text:
          es: "El sistema puede tener [[DeltaS_sis]] negativa; lo decisivo es que el entorno compense con [[DeltaS_ent]] suficiente para que el balance global no disminuya."
          en: "The system may have negative [[DeltaS_sis]]; what matters is whether surroundings compensate with enough [[DeltaS_ent]] so the global balance does not decrease."
    coherence_rules:
      - id: coherence_second_law
        when: "DeltaS_univ < 0"
        status: error
        text:
          es: "Si [[DeltaS_univ]] sale negativa, revisar la frontera del universo, el signo de [[Q_sis]] y la temperatura [[T_ent]] usada para el entorno."
          en: "If [[DeltaS_univ]] is negative, review the universe boundary, the sign of [[Q_sis]], and the [[T_ent]] used for surroundings."
      - id: coherence_balance
        when: "true"
        status: ok
        text:
          es: "El balance es coherente cuando [[DeltaS_univ]] coincide con la suma de [[DeltaS_sis]] y [[DeltaS_ent]] y mantiene signo no negativo."
          en: "The balance is coherent when [[DeltaS_univ]] matches the sum of [[DeltaS_sis]] and [[DeltaS_ent]] and remains non-negative."
    model_validity_rules:
      - id: validity_reservoir
        when: "true"
        status: ok
        text:
          es: "El modelo de reservorio es valido si [[T_ent]] cambia poco; si el entorno tiene capacidad finita, conviene cambiar al balance integral."
          en: "The reservoir model is valid if [[T_ent]] changes little; if surroundings have finite capacity, switch to an integral balance."
      - id: validity_non_equilibrium
        when: "true"
        status: warning
        text:
          es: "Si el sistema no alcanza equilibrio interno, [[DeltaS_sis]] debe estimarse con un modelo de no equilibrio o por estados finales medibles."
          en: "If the system does not reach internal equilibrium, [[DeltaS_sis]] must be estimated with a non-equilibrium model or measurable final states."
    graph_rules:
      - id: graph_gradient_entropy_generation
        when: "true"
        status: ok
        text:
          es: "En el grafico, la curva de [[S_gen]] crece con la diferencia entre [[T_sis]] y [[T_ent]]; el origen representa el limite reversible."
          en: "On the graph, the [[S_gen]] curve grows with the difference between [[T_sis]] and [[T_ent]]; the origin represents the reversible limit."
    likely_errors:
      - id: likely_error_system_only
        when: "true"
        status: warning
        text:
          es: "Error conceptual probable: creer que [[DeltaS_sis]] debe ser siempre positiva, confundir [[Q_sis]] real con calor reversible o olvidar sumar el entorno."
          en: "Likely conceptual error: believing [[DeltaS_sis]] must always be positive, confusing real [[Q_sis]] with reversible heat, or forgetting to add surroundings."
      - id: likely_error_temperature_sign
        when: "true"
        status: warning
        text:
          es: "Otro error frecuente es invertir [[T_sis]] y [[T_ent]], lo que puede producir una [[S_gen]] negativa aunque el proceso real sea espontaneo."
          en: "Another common mistake is swapping [[T_sis]] and [[T_ent]], which can produce negative [[S_gen]] even though the real process is spontaneous."
    next_step_rules:
      - id: next_destroyed_exergy
        when: "DeltaS_univ > 0"
        status: ok
        text:
          es: "Siguiente paso: convertir [[S_gen]] en exergia destruida multiplicando por la temperatura ambiente de referencia y buscar que gradiente o friccion domina."
          en: "Next step: convert [[S_gen]] into destroyed exergy by multiplying by reference ambient temperature and identify which gradient or friction dominates."
      - id: next_reduce_irreversibility
        when: "true"
        status: ok
        text:
          es: "Para mejorar el proceso, reducir diferencias finitas de temperatura, friccion, mezcla violenta o expansiones libres."
          en: "To improve the process, reduce finite temperature differences, friction, violent mixing, or free expansions."

  DeltaS_sis:
    <<: *entropy_balance_target
    semantic_role:
      es: "Cambio de entropia del sistema, calculado como funcion de estado entre los mismos estados."
      en: "System entropy change, calculated as a state function between the same states."
  DeltaS_ent:
    <<: *entropy_balance_target
    semantic_role:
      es: "Cambio de entropia del entorno, normalmente calculado con calor real y temperatura de reservorio."
      en: "Surroundings entropy change, normally calculated with real heat and reservoir temperature."
  Q_sis:
    <<: *entropy_balance_target
    semantic_role:
      es: "Calor real intercambiado por el sistema, con signo segun la convencion elegida."
      en: "Real heat exchanged by the system, signed according to the chosen convention."
  T_sis:
    <<: *entropy_balance_target
    semantic_role:
      es: "Temperatura caracteristica del sistema en los estados de equilibrio relevantes."
      en: "Characteristic system temperature in the relevant equilibrium states."
  T_ent:
    <<: *entropy_balance_target
    semantic_role:
      es: "Temperatura del entorno o reservorio que recibe o cede calor."
      en: "Temperature of the surroundings or reservoir receiving or releasing heat."
  S_gen:
    <<: *entropy_balance_target
    semantic_role:
      es: "Entropia generada internamente por las irreversibilidades del proceso."
      en: "Entropy generated internally by process irreversibilities."

cross_checks:
  - check: second_law
    description:
      es: "[[DeltaS_univ]] debe ser no negativa."
      en: "[[DeltaS_univ]] must be non-negative."
  - check: entropy_partition
    description:
      es: "El balance debe sumar sistema y entorno."
      en: "The balance must add system and surroundings."

graph_binding:
  enabled: true
  type: Coord
  axes:
    x: T_ent
    y: S_gen
  interpretation_link: "La pendiente positiva muestra que un gradiente termico mayor produce mas entropia generada."

mini_graph:
  enabled: true
  preferred_type: Coord
  axes:
    x:
      magnitude: T_ent
      label: { es: "gradiente termico", en: "thermal gradient" }
    y:
      magnitude: S_gen
      label: { es: "S_gen (J/K)", en: "S_gen (J/K)" }

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
