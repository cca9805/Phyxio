const e=`version: v5
id: interpretacion_ley_de_lenz
leaf_id: ley-de-lenz
nombre:
  es: Interpretacion de la ley de Lenz
  en: Lenz law interpretation
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: induccion-electromagnetica
  parent_id: induccion-electromagnetica
  ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-lenz
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Lectura de polaridad
    en: Polarity reading
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_items: 2
dependencies:
  formulas: [ley_lenz_faraday, tasa_cambio_flujo, ley_lenz_tasa, regla_signos_lenz]
  magnitudes: [epsilon_ind, DeltaPhi_B, Deltat, r_Phi, N, s_flujo, s_ind, Phi_B]
global_context:
  physical_domain:
    es: Polaridad inducida por oposicion al cambio de flujo.
    en: Induced polarity by opposition to flux change.
  axis_convention:
    es: La normal elegida fija el signo de [[Phi_B]], [[DeltaPhi_B]] y [[r_Phi]].
    en: The chosen normal fixes the sign of [[Phi_B]], [[DeltaPhi_B]], and [[r_Phi]].
  standard_assumptions:
    - circuito definido
    - normal de superficie elegida
    - cambio de flujo identificable
  standard_warnings:
    - oponerse al cambio, no al campo
    - conservar signos
    - no interpretar solo modulos
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
  epsilon_ind:
    magnitude_type: scalar_signed
    semantic_role:
      es: fem cuya polaridad expresa Lenz
      en: emf whose polarity expresses Lenz
    summary_rules:
      - id: eps_summary
        when: "true"
        status: ok
        text:
          es: "[[epsilon_ind]] debe leerse con signo porque representa polaridad inducida."
          en: "[[epsilon_ind]] must be read with sign because it represents induced polarity."
    physical_reading_rules:
      - id: eps_reading
        when: "true"
        status: ok
        text:
          es: "Su signo se opone al cambio de flujo, no necesariamente al flujo existente."
          en: "Its sign opposes flux change, not necessarily existing flux."
    coherence_rules:
      - id: eps_coherence
        when: "true"
        status: ok
        text:
          es: "[[epsilon_ind]] y [[r_Phi]] deben tener signos opuestos en la convencion elegida."
          en: "[[epsilon_ind]] and [[r_Phi]] must have opposite signs in the chosen convention."
    model_validity_rules:
      - id: eps_validity
        when: "true"
        status: ok
        text:
          es: "La polaridad solo es interpretable si normal y sentido de corriente estan definidos."
          en: "Polarity is interpretable only if normal and current direction are defined."
    graph_rules:
      - id: eps_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[epsilon_ind]] baja cuando [[r_Phi]] sube si [[N]] es positivo."
          en: "In the graph, [[epsilon_ind]] decreases when [[r_Phi]] increases if [[N]] is positive."
    likely_errors:
      - id: eps_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: dar solo el modulo y perder la polaridad."
          en: "Typical error: giving only magnitude and losing polarity."
    next_step_rules:
      - id: eps_next
        when: "true"
        status: ok
        text:
          es: "Interpreta que corriente inducida produciria esa polaridad."
          en: "Interpret what induced current would produce that polarity."
  DeltaPhi_B:
    magnitude_type: scalar_signed
    semantic_role:
      es: cambio que debe ser contrarrestado
      en: change that must be counteracted
    summary_rules:
      - id: dphi_summary
        when: "true"
        status: ok
        text:
          es: "[[DeltaPhi_B]] indica que cambio de flujo activa Lenz."
          en: "[[DeltaPhi_B]] indicates which flux change activates Lenz."
    physical_reading_rules:
      - id: dphi_reading
        when: "true"
        status: ok
        text:
          es: "La induccion responde al signo de [[DeltaPhi_B]], no solo a su modulo."
          en: "Induction responds to the sign of [[DeltaPhi_B]], not only its magnitude."
    coherence_rules:
      - id: dphi_coherence
        when: "true"
        status: ok
        text:
          es: "Sin normal elegida, el signo de [[DeltaPhi_B]] queda ambiguo."
          en: "Without a chosen normal, the sign of [[DeltaPhi_B]] is ambiguous."
    model_validity_rules:
      - id: dphi_validity
        when: "true"
        status: ok
        text:
          es: "Debe ser cambio de flujo enlazado por el circuito."
          en: "It must be change of flux linked by the circuit."
    graph_rules:
      - id: dphi_graph
        when: "true"
        status: ok
        text:
          es: "[[DeltaPhi_B]] fija el signo de [[r_Phi]]."
          en: "[[DeltaPhi_B]] sets the sign of [[r_Phi]]."
    likely_errors:
      - id: dphi_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: oponerse al valor de [[Phi_B]] en vez de a su cambio."
          en: "Typical error: opposing the value of [[Phi_B]] instead of its change."
    next_step_rules:
      - id: dphi_next
        when: "true"
        status: ok
        text:
          es: "Divide por [[Deltat]] para obtener el signo de [[r_Phi]]."
          en: "Divide by [[Deltat]] to obtain the sign of [[r_Phi]]."
  Deltat:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: duracion del cambio de flujo
      en: duration of flux change
    summary_rules:
      - id: dt_summary
        when: "true"
        status: ok
        text:
          es: "[[Deltat]] controla el modulo de la fem inducida media."
          en: "[[Deltat]] controls magnitude of average induced emf."
    physical_reading_rules:
      - id: dt_reading
        when: "true"
        status: ok
        text:
          es: "Un cambio mas rapido produce mayor respuesta, pero no cambia la regla de oposicion."
          en: "A faster change produces stronger response, but does not change the opposition rule."
    coherence_rules:
      - id: dt_coherence
        when: "Deltat > 0"
        status: ok
        text:
          es: "[[Deltat]] positivo permite interpretar rapidez media."
          en: "Positive [[Deltat]] allows interpreting average rate."
    model_validity_rules:
      - id: dt_validity
        when: "true"
        status: ok
        text:
          es: "Tiempos extremadamente cortos pueden requerir modelos con parasitos."
          en: "Extremely short times may require models with parasitics."
    graph_rules:
      - id: dt_graph
        when: "true"
        status: ok
        text:
          es: "[[Deltat]] convierte cambio de flujo en pendiente temporal."
          en: "[[Deltat]] turns flux change into time slope."
    likely_errors:
      - id: dt_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: no convertir milisegundos a segundos."
          en: "Typical error: not converting milliseconds to seconds."
    next_step_rules:
      - id: dt_next
        when: "true"
        status: ok
        text:
          es: "Usa [[Deltat]] para hallar [[r_Phi]] antes de decidir polaridad."
          en: "Use [[Deltat]] to find [[r_Phi]] before deciding polarity."
  r_Phi:
    magnitude_type: scalar_signed
    semantic_role:
      es: rapidez con signo del cambio de flujo
      en: signed rate of flux change
    summary_rules:
      - id: rphi_summary
        when: "true"
        status: ok
        text:
          es: "[[r_Phi]] resume la causa inmediata de la polaridad inducida."
          en: "[[r_Phi]] summarizes the immediate cause of induced polarity."
    physical_reading_rules:
      - id: rphi_reading
        when: "true"
        status: ok
        text:
          es: "Si [[r_Phi]] cambia de signo, la polaridad inducida tambien cambia."
          en: "If [[r_Phi]] changes sign, induced polarity changes too."
    coherence_rules:
      - id: rphi_coherence
        when: "true"
        status: ok
        text:
          es: "[[r_Phi]] y [[epsilon_ind]] se leen con signos opuestos."
          en: "[[r_Phi]] and [[epsilon_ind]] are read with opposite signs."
    model_validity_rules:
      - id: rphi_validity
        when: "true"
        status: ok
        text:
          es: "Como media, resume el intervalo y no detalles instantaneos."
          en: "As an average, it summarizes the interval and not instantaneous details."
    graph_rules:
      - id: rphi_graph
        when: "true"
        status: ok
        text:
          es: "[[r_Phi]] es el eje horizontal natural para ver la pendiente negativa."
          en: "[[r_Phi]] is the natural horizontal axis for seeing negative slope."
    likely_errors:
      - id: rphi_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar modulo de [[r_Phi]] y perder el signo."
          en: "Typical error: using magnitude of [[r_Phi]] and losing sign."
    next_step_rules:
      - id: rphi_next
        when: "true"
        status: ok
        text:
          es: "Aplica la oposicion de Lenz para obtener [[epsilon_ind]]."
          en: "Apply Lenz opposition to obtain [[epsilon_ind]]."
  N:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: multiplicador de fem inducida
      en: multiplier of induced emf
    summary_rules:
      - id: N_summary
        when: "true"
        status: ok
        text:
          es: "[[N]] aumenta el modulo de la fem si las espiras enlazan el mismo cambio."
          en: "[[N]] increases emf magnitude if turns link the same change."
    physical_reading_rules:
      - id: N_reading
        when: "true"
        status: ok
        text:
          es: "[[N]] no decide el sentido; el sentido lo decide el cambio de flujo."
          en: "[[N]] does not decide direction; flux change decides direction."
    coherence_rules:
      - id: N_coherence
        when: "N > 0"
        status: ok
        text:
          es: "[[N]] positivo es coherente con una bobina."
          en: "Positive [[N]] is coherent with a coil."
    model_validity_rules:
      - id: N_validity
        when: "true"
        status: ok
        text:
          es: "La multiplicacion por [[N]] exige espiras equivalentes."
          en: "Multiplication by [[N]] requires equivalent turns."
    graph_rules:
      - id: N_graph
        when: "true"
        status: ok
        text:
          es: "[[N]] cambia el modulo de la pendiente negativa."
          en: "[[N]] changes the magnitude of the negative slope."
    likely_errors:
      - id: N_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: creer que mas espiras invierten la polaridad."
          en: "Typical error: thinking more turns reverse polarity."
    next_step_rules:
      - id: N_next
        when: "true"
        status: ok
        text:
          es: "Comprueba si el dato de flujo es por espira o total."
          en: "Check whether flux data is per turn or total."
  s_flujo:
    magnitude_type: scalar_signed
    semantic_role:
      es: signo conceptual del cambio de flujo
      en: conceptual sign of flux change
    summary_rules:
      - id: sf_summary
        when: "true"
        status: ok
        text:
          es: "[[s_flujo]] codifica si el flujo aumenta o disminuye."
          en: "[[s_flujo]] encodes whether flux increases or decreases."
    physical_reading_rules:
      - id: sf_reading
        when: "true"
        status: ok
        text:
          es: "Es la causa de la orientacion opuesta de [[s_ind]]."
          en: "It is the cause of the opposite orientation of [[s_ind]]."
    coherence_rules:
      - id: sf_coherence
        when: "true"
        status: ok
        text:
          es: "Debe definirse respecto a una normal."
          en: "It must be defined relative to a normal."
    model_validity_rules:
      - id: sf_validity
        when: "true"
        status: ok
        text:
          es: "Sirve como regla de signo, no como magnitud de modulo."
          en: "It serves as sign rule, not as magnitude quantity."
    graph_rules:
      - id: sf_graph
        when: "true"
        status: ok
        text:
          es: "[[s_flujo]] y [[s_ind]] aparecen en sentidos opuestos."
          en: "[[s_flujo]] and [[s_ind]] appear in opposite senses."
    likely_errors:
      - id: sf_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: asignar [[s_flujo]] sin normal."
          en: "Typical error: assigning [[s_flujo]] without normal."
    next_step_rules:
      - id: sf_next
        when: "true"
        status: ok
        text:
          es: "Invierte el signo para obtener [[s_ind]]."
          en: "Reverse the sign to obtain [[s_ind]]."
  s_ind:
    magnitude_type: scalar_signed
    semantic_role:
      es: signo conceptual inducido
      en: conceptual induced sign
    summary_rules:
      - id: si_summary
        when: "true"
        status: ok
        text:
          es: "[[s_ind]] resume la orientacion inducida por Lenz."
          en: "[[s_ind]] summarizes the orientation induced by Lenz."
    physical_reading_rules:
      - id: si_reading
        when: "true"
        status: ok
        text:
          es: "Debe oponerse a [[s_flujo]], no copiarlo."
          en: "It must oppose [[s_flujo]], not copy it."
    coherence_rules:
      - id: si_coherence
        when: "true"
        status: ok
        text:
          es: "Mismo signo que [[s_flujo]] sugiere error conceptual."
          en: "Same sign as [[s_flujo]] suggests conceptual error."
    model_validity_rules:
      - id: si_validity
        when: "true"
        status: ok
        text:
          es: "Requiere convencion de signo clara."
          en: "Requires clear sign convention."
    graph_rules:
      - id: si_graph
        when: "true"
        status: ok
        text:
          es: "[[s_ind]] representa la respuesta opuesta."
          en: "[[s_ind]] represents the opposite response."
    likely_errors:
      - id: si_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: orientar la corriente para reforzar el cambio."
          en: "Typical error: orienting current to reinforce the change."
    next_step_rules:
      - id: si_next
        when: "true"
        status: ok
        text:
          es: "Traduce [[s_ind]] a polaridad o sentido de corriente inducida."
          en: "Translate [[s_ind]] into polarity or induced current direction."
  Phi_B:
    magnitude_type: scalar_signed
    semantic_role:
      es: estado de flujo antes de comparar cambios
      en: flux state before comparing changes
    summary_rules:
      - id: phi_summary
        when: "true"
        status: ok
        text:
          es: "[[Phi_B]] describe estado; Lenz actua sobre su cambio."
          en: "[[Phi_B]] describes state; Lenz acts on its change."
    physical_reading_rules:
      - id: phi_reading
        when: "true"
        status: ok
        text:
          es: "Flujo presente no basta: importa si aumenta o disminuye."
          en: "Present flux is not enough: whether it increases or decreases matters."
    coherence_rules:
      - id: phi_coherence
        when: "true"
        status: ok
        text:
          es: "Compara estados de [[Phi_B]] para obtener [[DeltaPhi_B]]."
          en: "Compare [[Phi_B]] states to obtain [[DeltaPhi_B]]."
    model_validity_rules:
      - id: phi_validity
        when: "true"
        status: ok
        text:
          es: "Debe ser flujo enlazado por la superficie elegida."
          en: "It must be flux linked by the chosen surface."
    graph_rules:
      - id: phi_graph
        when: "true"
        status: ok
        text:
          es: "Cambios de [[Phi_B]] producen el signo de [[s_flujo]]."
          en: "Changes of [[Phi_B]] produce the sign of [[s_flujo]]."
    likely_errors:
      - id: phi_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: oponer la induccion a [[Phi_B]] constante."
          en: "Typical error: opposing induction to constant [[Phi_B]]."
    next_step_rules:
      - id: phi_next
        when: "true"
        status: ok
        text:
          es: "Decide si [[Phi_B]] aumenta, disminuye o permanece constante."
          en: "Decide whether [[Phi_B]] increases, decreases, or remains constant."
cross_checks:
  - id: oppose_change_not_field
    text:
      es: "La ley de Lenz se opone al cambio de [[Phi_B]], no al campo magnetico por existir."
      en: "Lenz's law opposes change of [[Phi_B]], not magnetic field merely existing."
error_patterns:
  - id: same_sign
    text:
      es: "Si [[s_ind]] copia [[s_flujo]], probablemente se perdio la oposicion."
      en: "If [[s_ind]] copies [[s_flujo]], opposition was probably lost."
graph_binding:
  primary_graph: Coord
  x_axis: r_Phi
  y_axis: epsilon_ind
  secondary_y_axis: s_ind
mini_graph:
  enabled: true
  type: Coord
  highlights: [negative_slope, sign_opposition]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
