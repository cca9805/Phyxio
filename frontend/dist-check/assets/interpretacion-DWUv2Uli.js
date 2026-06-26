const e=`version: v5
id: interpretacion_inductancia_mutua
leaf_id: inductancia-mutua
nombre:
  es: Interpretacion de inductancia mutua
  en: Mutual inductance interpretation
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: induccion-electromagnetica
  parent_id: inductancia
  ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Lectura de acoplamiento
    en: Coupling reading
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_items: 2
dependencies:
  formulas: [definicion_inductancia_mutua, flujo_mutuo_lineal, fem_mutua_media, coeficiente_acoplamiento]
  magnitudes: [M, I1, lambda_21, epsilon_2, DeltaI1, Deltat, k, L1, L2]
global_context:
  physical_domain:
    es: Inductancia mutua lineal entre dos bobinas acopladas.
    en: Linear mutual inductance between two coupled coils.
  axis_convention:
    es: La corriente primaria positiva fija el signo del flujo mutuo enlazado en la secundaria.
    en: Positive primary current fixes the sign of mutual flux linked in the secondary.
  standard_assumptions:
    - bobinas fijas
    - acoplamiento lineal
    - material no saturado
    - fugas representadas por k
  standard_warnings:
    - signo de Lenz
    - conversion de tiempo
    - confusion entre M y L1 o L2
    - secundario abierto con fem no nula
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
  M:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: escala de acoplamiento magnetico entre bobinas
      en: scale of magnetic coupling between coils
    summary_rules:
      - id: M_summary_default
        when: "true"
        status: ok
        text:
          es: "[[M]] indica cuanto flujo de la bobina primaria queda enlazado con la secundaria."
          en: "[[M]] indicates how much primary-coil flux is linked with the secondary."
    physical_reading_rules:
      - id: M_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[M]] mayor aumenta [[lambda_21]] y el modulo de [[epsilon_2]] para cambios primarios comparables."
          en: "A larger [[M]] increases [[lambda_21]] and the magnitude of [[epsilon_2]] for comparable primary changes."
    coherence_rules:
      - id: M_coherence_default
        when: "M >= 0"
        status: ok
        text:
          es: "[[M]] no negativa es coherente con una lectura de modulo de acoplamiento."
          en: "Nonnegative [[M]] is coherent with a magnitude reading of coupling."
    model_validity_rules:
      - id: M_validity_default
        when: "true"
        status: ok
        text:
          es: "[[M]] permanece fija solo si geometria, nucleo y acoplamiento no cambian."
          en: "[[M]] stays fixed only if geometry, core, and coupling do not change."
    graph_rules:
      - id: M_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[M]] es la pendiente de [[lambda_21]] frente a [[I1]]."
          en: "In the graph, [[M]] is the slope of [[lambda_21]] versus [[I1]]."
    likely_errors:
      - id: M_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir [[M]] con una inductancia propia como [[L1]] o [[L2]]."
          en: "Typical error: confusing [[M]] with a self-inductance such as [[L1]] or [[L2]]."
    next_step_rules:
      - id: M_next_default
        when: "true"
        status: ok
        text:
          es: "Combina [[M]] con [[DeltaI1]] y [[Deltat]] para estimar la fem secundaria."
          en: "Combine [[M]] with [[DeltaI1]] and [[Deltat]] to estimate secondary emf."
  lambda_21:
    magnitude_type: scalar_signed
    semantic_role:
      es: flujo comun enlazado por la bobina secundaria
      en: common flux linked by the secondary coil
    summary_rules:
      - id: lambda21_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_21]] describe el flujo secundario producido por [[I1]]."
          en: "[[lambda_21]] describes secondary flux produced by [[I1]]."
    physical_reading_rules:
      - id: lambda21_reading_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[lambda_21]] significa que mas campo de la primaria atraviesa eficazmente la secundaria."
          en: "Larger [[lambda_21]] means more primary field effectively crosses the secondary."
    coherence_rules:
      - id: lambda21_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_21]] debe variar con [[I1]] mientras el acoplamiento sea lineal."
          en: "[[lambda_21]] should vary with [[I1]] while coupling is linear."
    model_validity_rules:
      - id: lambda21_validity_default
        when: "true"
        status: ok
        text:
          es: "Curvatura fuerte indica saturacion, movimiento o fuga variable."
          en: "Strong curvature indicates saturation, motion, or variable leakage."
    graph_rules:
      - id: lambda21_graph_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_21]] se lee como eje vertical de acoplamiento."
          en: "[[lambda_21]] is read as the vertical coupling axis."
    likely_errors:
      - id: lambda21_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: tratar [[lambda_21]] como flujo propio total de la secundaria."
          en: "Typical error: treating [[lambda_21]] as total self-flux of the secondary."
    next_step_rules:
      - id: lambda21_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[lambda_21]] con [[I1]] para obtener o verificar [[M]]."
          en: "Compare [[lambda_21]] with [[I1]] to obtain or check [[M]]."
  I1:
    magnitude_type: scalar_signed
    semantic_role:
      es: corriente primaria que crea el flujo mutuo
      en: primary current creating mutual flux
    summary_rules:
      - id: I1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I1]] es la corriente fuente que crea el flujo enlazado con la secundaria."
          en: "[[I1]] is the source current creating flux linked with the secondary."
    physical_reading_rules:
      - id: I1_reading_default
        when: "true"
        status: ok
        text:
          es: "[[I1]] constante puede crear flujo mutuo, pero no fem secundaria sostenida en el modelo ideal."
          en: "Steady [[I1]] can create mutual flux, but not sustained secondary emf in the ideal model."
    coherence_rules:
      - id: I1_coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[I1]] debe seguir la referencia del bobinado primario."
          en: "The sign of [[I1]] must follow the primary winding reference."
    model_validity_rules:
      - id: I1_validity_default
        when: "true"
        status: ok
        text:
          es: "Corrientes altas pueden saturar el nucleo y cambiar [[M]]."
          en: "High currents may saturate the core and change [[M]]."
    graph_rules:
      - id: I1_graph_default
        when: "true"
        status: ok
        text:
          es: "[[I1]] se usa como eje horizontal en la lectura de acoplamiento."
          en: "[[I1]] is used as horizontal axis in the coupling reading."
    likely_errors:
      - id: I1_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar corriente secundaria cuando el cambio que induce procede de [[I1]]."
          en: "Typical error: using secondary current when the inducing change comes from [[I1]]."
    next_step_rules:
      - id: I1_next_default
        when: "true"
        status: ok
        text:
          es: "Si [[I1]] cambia, calcula [[DeltaI1]] y su intervalo temporal."
          en: "If [[I1]] changes, compute [[DeltaI1]] and its time interval."
  epsilon_2:
    magnitude_type: scalar_signed
    semantic_role:
      es: fem inducida en la bobina receptora
      en: emf induced in the receiving coil
    summary_rules:
      - id: eps2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon_2]] es la respuesta electrica de la secundaria al cambio de flujo mutuo."
          en: "[[epsilon_2]] is the secondary electrical response to mutual-flux change."
    physical_reading_rules:
      - id: eps2_reading_default
        when: "true"
        status: ok
        text:
          es: "Mayor modulo de [[epsilon_2]] indica acoplamiento fuerte, cambio rapido o ambos."
          en: "Larger magnitude of [[epsilon_2]] indicates strong coupling, fast change, or both."
    coherence_rules:
      - id: eps2_coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[epsilon_2]] debe oponerse al cambio de flujo enlazado."
          en: "The sign of [[epsilon_2]] must oppose the linked-flux change."
    model_validity_rules:
      - id: eps2_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura media vale si [[M]] permanece aproximadamente constante."
          en: "The average reading is valid if [[M]] remains approximately constant."
    graph_rules:
      - id: eps2_graph_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon_2]] crece con la pendiente temporal de [[I1]]."
          en: "[[epsilon_2]] grows with the time slope of [[I1]]."
    likely_errors:
      - id: eps2_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: negar [[epsilon_2]] porque el circuito secundario esta abierto."
          en: "Typical error: denying [[epsilon_2]] because the secondary circuit is open."
    next_step_rules:
      - id: eps2_next_default
        when: "true"
        status: ok
        text:
          es: "Comprueba polaridad, aislamiento y si la carga secundaria altera el modelo."
          en: "Check polarity, insulation, and whether the secondary load alters the model."
  DeltaI1:
    magnitude_type: scalar_signed
    semantic_role:
      es: variacion primaria que activa la induccion mutua
      en: primary variation activating mutual induction
    summary_rules:
      - id: dI1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaI1]] indica cuanto cambia la corriente que genera el flujo mutuo."
          en: "[[DeltaI1]] indicates how much the current generating mutual flux changes."
    physical_reading_rules:
      - id: dI1_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[DeltaI1]] mayor produce mayor fem secundaria si [[Deltat]] y [[M]] se mantienen."
          en: "A larger [[DeltaI1]] produces larger secondary emf if [[Deltat]] and [[M]] remain fixed."
    coherence_rules:
      - id: dI1_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaI1]] debe conservar signo para leer la orientacion de Lenz."
          en: "[[DeltaI1]] must preserve sign to read Lenz orientation."
    model_validity_rules:
      - id: dI1_validity_default
        when: "true"
        status: ok
        text:
          es: "Cambios grandes pueden llevar el nucleo fuera del tramo lineal."
          en: "Large changes may take the core outside the linear segment."
    graph_rules:
      - id: dI1_graph_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaI1]] se visualiza como el salto de corriente primaria."
          en: "[[DeltaI1]] is visualized as the primary current jump."
    likely_errors:
      - id: dI1_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar [[I1]] final en vez del cambio [[DeltaI1]]."
          en: "Typical error: using final [[I1]] instead of change [[DeltaI1]]."
    next_step_rules:
      - id: dI1_next_default
        when: "true"
        status: ok
        text:
          es: "Relaciona [[DeltaI1]] con [[Deltat]] para estimar rapidez media."
          en: "Relate [[DeltaI1]] to [[Deltat]] to estimate average rate."
  Deltat:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: duracion del cambio primario
      en: duration of the primary change
    summary_rules:
      - id: dt_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Deltat]] decide si el cambio primario es lento o brusco."
          en: "[[Deltat]] decides whether the primary change is slow or abrupt."
    physical_reading_rules:
      - id: dt_reading_default
        when: "true"
        status: ok
        text:
          es: "Reducir [[Deltat]] aumenta [[epsilon_2]] para el mismo [[DeltaI1]]."
          en: "Reducing [[Deltat]] increases [[epsilon_2]] for the same [[DeltaI1]]."
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
          es: "Tiempos extremadamente cortos pueden activar capacitancias parasitas entre bobinas."
          en: "Extremely short times may activate parasitic capacitances between coils."
    graph_rules:
      - id: dt_graph_default
        when: "true"
        status: ok
        text:
          es: "[[Deltat]] es la anchura temporal del cambio primario."
          en: "[[Deltat]] is the time width of the primary change."
    likely_errors:
      - id: dt_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: no convertir milisegundos a segundos."
          en: "Typical error: not converting milliseconds to seconds."
    next_step_rules:
      - id: dt_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[Deltat]] junto con [[DeltaI1]] para obtener [[epsilon_2]]."
          en: "Use [[Deltat]] together with [[DeltaI1]] to obtain [[epsilon_2]]."
  k:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: fraccion efectiva de acoplamiento
      en: effective coupling fraction
    summary_rules:
      - id: k_summary_default
        when: "true"
        status: ok
        text:
          es: "[[k]] indica que parte del acoplamiento maximo entre [[L1]] y [[L2]] se alcanza."
          en: "[[k]] indicates what part of the maximum coupling between [[L1]] and [[L2]] is reached."
    physical_reading_rules:
      - id: k_reading_default
        when: "true"
        status: ok
        text:
          es: "[[k]] cerca de uno sugiere poco flujo de fuga; [[k]] pequeño indica acoplamiento debil."
          en: "[[k]] near one suggests little leakage flux; small [[k]] indicates weak coupling."
    coherence_rules:
      - id: k_coherence_default
        when: "k >= 0"
        status: ok
        text:
          es: "[[k]] no negativo es coherente como fraccion."
          en: "Nonnegative [[k]] is coherent as a fraction."
    model_validity_rules:
      - id: k_validity_default
        when: "true"
        status: ok
        text:
          es: "En bobinas pasivas lineales, [[k]] debe permanecer dentro del intervalo fisico usual."
          en: "In passive linear coils, [[k]] must remain inside the usual physical interval."
    graph_rules:
      - id: k_graph_default
        when: "true"
        status: ok
        text:
          es: "Aumentar [[k]] aumenta la pendiente mutua sin exigir cambiar [[L1]] o [[L2]]."
          en: "Increasing [[k]] raises mutual slope without requiring [[L1]] or [[L2]] to change."
    likely_errors:
      - id: k_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: pensar que bobinas cercanas tienen automaticamente [[k]] igual a uno."
          en: "Typical error: thinking nearby coils automatically have [[k]] equal to one."
    next_step_rules:
      - id: k_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[k]] para separar fugas de tamaño propio de las bobinas."
          en: "Use [[k]] to separate leakage from the coils own size."
  L1:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: escala propia de la bobina primaria
      en: own scale of the primary coil
    summary_rules:
      - id: L1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[L1]] mide a la bobina primaria como inductancia propia."
          en: "[[L1]] measures the primary coil as a self-inductance."
    physical_reading_rules:
      - id: L1_reading_default
        when: "true"
        status: ok
        text:
          es: "[[L1]] ayuda a normalizar [[M]] mediante el coeficiente [[k]]."
          en: "[[L1]] helps normalize [[M]] through coefficient [[k]]."
    coherence_rules:
      - id: L1_coherence_default
        when: "L1 > 0"
        status: ok
        text:
          es: "[[L1]] positiva permite definir el acoplamiento usual."
          en: "Positive [[L1]] allows defining usual coupling."
    model_validity_rules:
      - id: L1_validity_default
        when: "true"
        status: ok
        text:
          es: "[[L1]] puede cambiar si el nucleo primario satura."
          en: "[[L1]] may change if the primary core saturates."
    graph_rules:
      - id: L1_graph_default
        when: "true"
        status: ok
        text:
          es: "[[L1]] actua como parametro de escala, no como eje principal."
          en: "[[L1]] acts as a scale parameter, not as the main axis."
    likely_errors:
      - id: L1_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: sustituir [[M]] por [[L1]] en la fem secundaria."
          en: "Typical error: substituting [[M]] with [[L1]] in secondary emf."
    next_step_rules:
      - id: L1_next_default
        when: "true"
        status: ok
        text:
          es: "Combina [[L1]] con [[L2]] y [[M]] solo cuando se pida [[k]]."
          en: "Combine [[L1]] with [[L2]] and [[M]] only when [[k]] is requested."
  L2:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: escala propia de la bobina secundaria
      en: own scale of the secondary coil
    summary_rules:
      - id: L2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[L2]] mide a la bobina secundaria como inductancia propia."
          en: "[[L2]] measures the secondary coil as a self-inductance."
    physical_reading_rules:
      - id: L2_reading_default
        when: "true"
        status: ok
        text:
          es: "[[L2]] no es la fem inducida; solo normaliza la escala de acoplamiento."
          en: "[[L2]] is not induced emf; it only normalizes coupling scale."
    coherence_rules:
      - id: L2_coherence_default
        when: "L2 > 0"
        status: ok
        text:
          es: "[[L2]] positiva permite definir el acoplamiento usual."
          en: "Positive [[L2]] allows defining usual coupling."
    model_validity_rules:
      - id: L2_validity_default
        when: "true"
        status: ok
        text:
          es: "[[L2]] puede cambiar si la secundaria entra en saturacion o cambia de nucleo."
          en: "[[L2]] may change if the secondary saturates or changes core."
    graph_rules:
      - id: L2_graph_default
        when: "true"
        status: ok
        text:
          es: "[[L2]] actua como parametro auxiliar del acoplamiento."
          en: "[[L2]] acts as an auxiliary coupling parameter."
    likely_errors:
      - id: L2_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar [[L2]] para calcular [[epsilon_2]] causada por [[I1]]."
          en: "Typical error: using [[L2]] to compute [[epsilon_2]] caused by [[I1]]."
    next_step_rules:
      - id: L2_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[L2]] junto con [[L1]] para interpretar si [[M]] implica buen acoplamiento."
          en: "Use [[L2]] with [[L1]] to interpret whether [[M]] implies good coupling."
cross_checks:
  - id: lenz_secondary_sign
    text:
      es: "El signo de [[epsilon_2]] debe oponerse al cambio de flujo mutuo asociado a [[DeltaI1]]."
      en: "The sign of [[epsilon_2]] must oppose the mutual-flux change associated with [[DeltaI1]]."
error_patterns:
  - id: self_vs_mutual
    text:
      es: "Usar [[L1]] o [[L2]] en lugar de [[M]] confunde autoinduccion con induccion mutua."
      en: "Using [[L1]] or [[L2]] instead of [[M]] confuses self-induction with mutual induction."
graph_binding:
  primary_graph: Coord
  x_axis: I1
  y_axis: lambda_21
  secondary_y_axis: epsilon_2
mini_graph:
  enabled: true
  type: Coord
  highlights: [slope_M, coupling_k]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
