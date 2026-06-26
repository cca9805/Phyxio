const e=`version: v5
id: interpretacion_autoinduccion
leaf_id: autoinduccion
nombre:
  es: Interpretacion de autoinduccion
  en: Self-inductance interpretation
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: induccion-electromagnetica
  parent_id: inductancia
  ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Lectura inductiva
    en: Inductive reading
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_items: 2
dependencies:
  formulas: [definicion_inductancia, flujo_enlazado_lineal, fem_autoinducida_media, energia_magnetica]
  magnitudes: [L, I, lambda_B, epsilon_L, DeltaI, Deltat, U_B]
global_context:
  physical_domain:
    es: Autoinduccion lineal en bobinas y circuitos inductivos.
    en: Linear self-induction in coils and inductive circuits.
  axis_convention:
    es: La corriente positiva fija la normal positiva del flujo enlazado.
    en: Positive current fixes the positive normal of the linked flux.
  standard_assumptions:
    - inductancia constante
    - resistencia no dominante en la lectura magnetica
    - material no saturado
  standard_warnings:
    - signo de Lenz
    - conversion de tiempo
    - energia almacenada al abrir circuito
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
  L:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: escala de oposicion inductiva y almacenamiento
      en: scale of inductive opposition and storage
    summary_rules:
      - id: L_summary_default
        when: "true"
        status: ok
        text:
          es: "[[L]] indica cuanta oposicion inductiva y cuanto flujo enlazado produce la bobina por corriente."
          en: "[[L]] indicates how much inductive opposition and flux linkage the coil produces per current."
    physical_reading_rules:
      - id: L_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[L]] mayor aumenta [[lambda_B]], [[epsilon_L]] y [[U_B]] para condiciones comparables."
          en: "A larger [[L]] increases [[lambda_B]], [[epsilon_L]], and [[U_B]] under comparable conditions."
    coherence_rules:
      - id: L_coherence_default
        when: "L >= 0"
        status: ok
        text:
          es: "[[L]] no negativa es coherente con una bobina pasiva lineal."
          en: "Nonnegative [[L]] is coherent with a passive linear coil."
    model_validity_rules:
      - id: L_validity_default
        when: "true"
        status: ok
        text:
          es: "[[L]] fija solo si no hay saturacion ni cambio geometrico."
          en: "[[L]] stays fixed only without saturation or geometry change."
    graph_rules:
      - id: L_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[L]] es la pendiente de [[lambda_B]] frente a [[I]]."
          en: "In the graph, [[L]] is the slope of [[lambda_B]] versus [[I]]."
    likely_errors:
      - id: L_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: creer que [[L]] se opone a [[I]] constante."
          en: "Typical error: thinking [[L]] opposes constant [[I]]."
    next_step_rules:
      - id: L_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[L]] con [[DeltaI]] y [[Deltat]] para leer la fem autoinducida."
          en: "Use [[L]] with [[DeltaI]] and [[Deltat]] to read self-induced emf."
  lambda_B:
    magnitude_type: scalar_signed
    semantic_role:
      es: enlace magnetico creado por la corriente propia
      en: magnetic linkage created by the coil own current
    summary_rules:
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_B]] describe el flujo enlazado y depende de [[L]] y de [[I]]."
          en: "[[lambda_B]] describes flux linkage and depends on [[L]] and [[I]]."
    physical_reading_rules:
      - id: lambda_reading_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[lambda_B]] significa mayor acoplamiento magnetico interno de la bobina."
          en: "Larger [[lambda_B]] means stronger internal magnetic coupling of the coil."
    coherence_rules:
      - id: lambda_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_B]] debe cambiar con [[I]] si [[L]] es constante."
          en: "[[lambda_B]] should change with [[I]] if [[L]] is constant."
    model_validity_rules:
      - id: lambda_validity_default
        when: "true"
        status: ok
        text:
          es: "Si la relacion se curva, el modelo lineal deja de bastar."
          en: "If the relation bends, the linear model is no longer enough."
    graph_rules:
      - id: lambda_graph_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_B]] se lee como ordenada de la curva de enlace magnetico."
          en: "[[lambda_B]] is read as the ordinate of the magnetic-linkage curve."
    likely_errors:
      - id: lambda_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir [[lambda_B]] con flujo de una sola espira."
          en: "Typical error: confusing [[lambda_B]] with flux through one turn."
    next_step_rules:
      - id: lambda_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[lambda_B]] con [[I]] para obtener o verificar [[L]]."
          en: "Compare [[lambda_B]] with [[I]] to obtain or check [[L]]."
  I:
    magnitude_type: scalar_signed
    semantic_role:
      es: estado electrico que crea el flujo propio
      en: electrical state creating self flux
    summary_rules:
      - id: I_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I]] indica el estado de corriente que sostiene el campo magnetico de la bobina."
          en: "[[I]] indicates the current state sustaining the coil magnetic field."
    physical_reading_rules:
      - id: I_reading_default
        when: "true"
        status: ok
        text:
          es: "[[I]] constante almacena energia, pero no genera fem autoinducida por si sola."
          en: "Constant [[I]] stores energy but does not by itself generate self-induced emf."
    coherence_rules:
      - id: I_coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[I]] debe seguir la referencia elegida para la bobina."
          en: "The sign of [[I]] must follow the chosen coil reference."
    model_validity_rules:
      - id: I_validity_default
        when: "true"
        status: ok
        text:
          es: "Corrientes altas pueden llevar el nucleo a saturacion."
          en: "High currents may drive the core into saturation."
    graph_rules:
      - id: I_graph_default
        when: "true"
        status: ok
        text:
          es: "[[I]] suele ser eje horizontal o variable temporal controlada."
          en: "[[I]] is often the horizontal axis or controlled time variable."
    likely_errors:
      - id: I_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar [[I]] donde debe usarse [[DeltaI]]."
          en: "Typical error: using [[I]] where [[DeltaI]] is needed."
    next_step_rules:
      - id: I_next_default
        when: "true"
        status: ok
        text:
          es: "Si [[I]] cambia, calcula [[DeltaI]] y la rapidez asociada."
          en: "If [[I]] changes, compute [[DeltaI]] and the associated rate."
  epsilon_L:
    magnitude_type: scalar_signed
    semantic_role:
      es: respuesta de oposicion al cambio de corriente
      en: opposition response to current change
    summary_rules:
      - id: eps_summary_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon_L]] resume la fem que se opone al cambio de corriente en la bobina."
          en: "[[epsilon_L]] summarizes the emf opposing current change in the coil."
    physical_reading_rules:
      - id: eps_reading_default
        when: "true"
        status: ok
        text:
          es: "Mayor modulo de [[epsilon_L]] indica transitorio mas severo."
          en: "Larger magnitude of [[epsilon_L]] indicates a more severe transient."
    coherence_rules:
      - id: eps_coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[epsilon_L]] debe oponerse al signo de [[DeltaI]]."
          en: "The sign of [[epsilon_L]] must oppose the sign of [[DeltaI]]."
    model_validity_rules:
      - id: eps_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura media vale si [[L]] permanece aproximadamente constante."
          en: "The average reading is valid if [[L]] remains approximately constant."
    graph_rules:
      - id: eps_graph_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon_L]] crece con la pendiente de [[I]] frente al tiempo."
          en: "[[epsilon_L]] grows with the slope of [[I]] versus time."
    likely_errors:
      - id: eps_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: perder el signo de Lenz en [[epsilon_L]]."
          en: "Typical error: losing the Lenz sign in [[epsilon_L]]."
    next_step_rules:
      - id: eps_next_default
        when: "true"
        status: ok
        text:
          es: "Comprueba si la tension inducida supera limites de aislamiento o conmutacion."
          en: "Check whether induced voltage exceeds insulation or switching limits."
  DeltaI:
    magnitude_type: scalar_signed
    semantic_role:
      es: cambio de corriente que activa la autoinduccion
      en: current change activating self-induction
    summary_rules:
      - id: dI_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaI]] indica cuanto cambia la corriente y domina el signo de la respuesta."
          en: "[[DeltaI]] indicates how much current changes and controls response sign."
    physical_reading_rules:
      - id: dI_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[DeltaI]] mayor produce mayor tendencia inductiva si [[Deltat]] no aumenta."
          en: "A larger [[DeltaI]] produces stronger inductive tendency if [[Deltat]] does not increase."
    coherence_rules:
      - id: dI_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaI]] debe conservar signo, no solo modulo."
          en: "[[DeltaI]] must preserve sign, not only magnitude."
    model_validity_rules:
      - id: dI_validity_default
        when: "true"
        status: ok
        text:
          es: "Cambios muy grandes pueden sacar la bobina del tramo lineal."
          en: "Very large changes may take the coil outside the linear segment."
    graph_rules:
      - id: dI_graph_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaI]] es el salto vertical entre estados de corriente."
          en: "[[DeltaI]] is the vertical jump between current states."
    likely_errors:
      - id: dI_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar corriente final en lugar de [[DeltaI]]."
          en: "Typical error: using final current instead of [[DeltaI]]."
    next_step_rules:
      - id: dI_next_default
        when: "true"
        status: ok
        text:
          es: "Divide el cambio por [[Deltat]] para estimar rapidez media."
          en: "Divide the change by [[Deltat]] to estimate average rate."
  Deltat:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: duracion que fija la rapidez del cambio
      en: duration setting the rate of change
    summary_rules:
      - id: dt_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Deltat]] indica si el cambio de corriente es lento o brusco."
          en: "[[Deltat]] indicates whether the current change is slow or abrupt."
    physical_reading_rules:
      - id: dt_reading_default
        when: "true"
        status: ok
        text:
          es: "Reducir [[Deltat]] aumenta la fem para el mismo [[DeltaI]]."
          en: "Reducing [[Deltat]] increases emf for the same [[DeltaI]]."
    coherence_rules:
      - id: dt_coherence_default
        when: "Deltat > 0"
        status: ok
        text:
          es: "[[Deltat]] positivo permite una rapidez media finita."
          en: "Positive [[Deltat]] allows a finite average rate."
    model_validity_rules:
      - id: dt_validity_default
        when: "true"
        status: ok
        text:
          es: "Tiempos extremadamente cortos pueden activar capacitancias parasitas."
          en: "Extremely short times may activate parasitic capacitances."
    graph_rules:
      - id: dt_graph_default
        when: "true"
        status: ok
        text:
          es: "[[Deltat]] es la anchura temporal del cambio en la grafica."
          en: "[[Deltat]] is the time width of the change in the graph."
    likely_errors:
      - id: dt_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: no convertir milisegundos o microsegundos a segundos."
          en: "Typical error: not converting milliseconds or microseconds to seconds."
    next_step_rules:
      - id: dt_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[Deltat]] junto con [[DeltaI]] para obtener [[epsilon_L]]."
          en: "Use [[Deltat]] together with [[DeltaI]] to obtain [[epsilon_L]]."
  U_B:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: energia almacenada en el campo magnetico
      en: energy stored in the magnetic field
    summary_rules:
      - id: UB_summary_default
        when: "true"
        status: ok
        text:
          es: "[[U_B]] indica la energia magnetica disponible durante descarga o apertura."
          en: "[[U_B]] indicates magnetic energy available during discharge or opening."
    physical_reading_rules:
      - id: UB_reading_default
        when: "true"
        status: ok
        text:
          es: "[[U_B]] aumenta con [[L]] y crece muy rapido con [[I]]."
          en: "[[U_B]] increases with [[L]] and grows very fast with [[I]]."
    coherence_rules:
      - id: UB_coherence_default
        when: "U_B >= 0"
        status: ok
        text:
          es: "La energia [[U_B]] debe ser no negativa."
          en: "Energy [[U_B]] must be nonnegative."
    model_validity_rules:
      - id: UB_validity_default
        when: "true"
        status: ok
        text:
          es: "La formula presupone inductancia constante y perdidas no dominantes."
          en: "The formula assumes constant inductance and non-dominant losses."
    graph_rules:
      - id: UB_graph_default
        when: "true"
        status: ok
        text:
          es: "[[U_B]] aparece como area acumulada bajo la relacion inductiva."
          en: "[[U_B]] appears as accumulated area under the inductive relation."
    likely_errors:
      - id: UB_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: pensar que la energia desaparece al abrir el circuito."
          en: "Typical error: thinking energy disappears when the circuit opens."
    next_step_rules:
      - id: UB_next_default
        when: "true"
        status: ok
        text:
          es: "Relaciona [[U_B]] con chispas, sobretensiones y elementos de proteccion."
          en: "Relate [[U_B]] to sparks, overvoltage, and protection components."
cross_checks:
  - id: lenz_sign
    text:
      es: "El signo de [[epsilon_L]] debe oponerse al cambio indicado por [[DeltaI]]."
      en: "The sign of [[epsilon_L]] must oppose the change indicated by [[DeltaI]]."
error_patterns:
  - id: current_vs_change
    text:
      es: "Usar [[I]] en lugar de [[DeltaI]] oculta la autoinduccion."
      en: "Using [[I]] instead of [[DeltaI]] hides self-induction."
graph_binding:
  primary_graph: Coord
  x_axis: I
  y_axis: lambda_B
  secondary_y_axis: epsilon_L
mini_graph:
  enabled: true
  type: Coord
  highlights: [slope_L, lenz_sign]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
