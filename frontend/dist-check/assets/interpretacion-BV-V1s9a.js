const e=`version: v5
id: interpretacion_ley_de_faraday
leaf_id: ley-de-faraday
nombre:
  es: Interpretacion de la ley de Faraday
  en: Faraday law interpretation
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: induccion-electromagnetica
  parent_id: induccion-electromagnetica
  ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Lectura inductiva
    en: Induction reading
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_items: 2
dependencies:
  formulas: [ley_faraday_media, tasa_cambio_flujo, ley_faraday_tasa, flujo_uniforme]
  magnitudes: [epsilon_ind, DeltaPhi_B, Deltat, r_Phi, N, Phi_B, B_perp, A]
global_context:
  physical_domain:
    es: Induccion electromagnetica por cambio de flujo enlazado.
    en: Electromagnetic induction by linked flux change.
  axis_convention:
    es: La normal de la superficie fija el signo del flujo y de su cambio.
    en: The surface normal fixes the sign of flux and its change.
  standard_assumptions:
    - circuito definido
    - cambio de flujo identificable
    - espiras equivalentes si N es mayor que uno
  standard_warnings:
    - signo de Lenz
    - conversion de tiempo
    - flujo estatico no induce fem
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
      es: respuesta electrica inducida por cambio de flujo
      en: electrical response induced by flux change
    summary_rules:
      - id: eps_summary
        when: "true"
        status: ok
        text:
          es: "[[epsilon_ind]] mide la fem inducida por el cambio de flujo enlazado."
          en: "[[epsilon_ind]] measures the emf induced by linked-flux change."
    physical_reading_rules:
      - id: eps_reading
        when: "true"
        status: ok
        text:
          es: "Mayor modulo de [[epsilon_ind]] indica cambio de flujo mas rapido, mas espiras o ambos."
          en: "Larger [[epsilon_ind]] magnitude indicates faster flux change, more turns, or both."
    coherence_rules:
      - id: eps_coherence
        when: "true"
        status: ok
        text:
          es: "El signo de [[epsilon_ind]] debe oponerse al cambio indicado por [[DeltaPhi_B]]."
          en: "The sign of [[epsilon_ind]] must oppose the change indicated by [[DeltaPhi_B]]."
    model_validity_rules:
      - id: eps_validity
        when: "true"
        status: ok
        text:
          es: "La lectura media supone que el cambio puede resumirse durante [[Deltat]]."
          en: "The average reading assumes the change can be summarized during [[Deltat]]."
    graph_rules:
      - id: eps_graph
        when: "true"
        status: ok
        text:
          es: "[[epsilon_ind]] se grafica contra [[r_Phi]] con pendiente controlada por [[N]]."
          en: "[[epsilon_ind]] is graphed against [[r_Phi]] with slope controlled by [[N]]."
    likely_errors:
      - id: eps_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: predecir fem con flujo constante."
          en: "Typical error: predicting emf from constant flux."
    next_step_rules:
      - id: eps_next
        when: "true"
        status: ok
        text:
          es: "Comprueba [[DeltaPhi_B]], [[Deltat]] y [[N]] antes de interpretar polaridad."
          en: "Check [[DeltaPhi_B]], [[Deltat]], and [[N]] before interpreting polarity."
  DeltaPhi_B:
    magnitude_type: scalar_signed
    semantic_role:
      es: cambio de flujo que causa la induccion
      en: flux change causing induction
    summary_rules:
      - id: dphi_summary
        when: "true"
        status: ok
        text:
          es: "[[DeltaPhi_B]] indica cuanto cambia el flujo enlazado."
          en: "[[DeltaPhi_B]] indicates how much linked flux changes."
    physical_reading_rules:
      - id: dphi_reading
        when: "true"
        status: ok
        text:
          es: "Sin [[DeltaPhi_B]], el flujo puede existir pero no induce fem media."
          en: "Without [[DeltaPhi_B]], flux may exist but induces no average emf."
    coherence_rules:
      - id: dphi_coherence
        when: "true"
        status: ok
        text:
          es: "El signo de [[DeltaPhi_B]] debe seguir la normal elegida."
          en: "The sign of [[DeltaPhi_B]] must follow the chosen normal."
    model_validity_rules:
      - id: dphi_validity
        when: "true"
        status: ok
        text:
          es: "Debe representar flujo enlazado por el circuito, no cualquier campo cercano."
          en: "It must represent flux linked by the circuit, not any nearby field."
    graph_rules:
      - id: dphi_graph
        when: "true"
        status: ok
        text:
          es: "[[DeltaPhi_B]] determina la anchura vertical del cambio de flujo."
          en: "[[DeltaPhi_B]] determines the vertical size of flux change."
    likely_errors:
      - id: dphi_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar [[Phi_B]] final en vez de cambio de flujo."
          en: "Typical error: using final [[Phi_B]] instead of flux change."
    next_step_rules:
      - id: dphi_next
        when: "true"
        status: ok
        text:
          es: "Divide [[DeltaPhi_B]] por [[Deltat]] para obtener [[r_Phi]]."
          en: "Divide [[DeltaPhi_B]] by [[Deltat]] to obtain [[r_Phi]]."
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
          es: "[[Deltat]] decide si el cambio de flujo es lento o brusco."
          en: "[[Deltat]] decides whether flux change is slow or abrupt."
    physical_reading_rules:
      - id: dt_reading
        when: "true"
        status: ok
        text:
          es: "Menor [[Deltat]] aumenta el modulo de la fem para el mismo cambio."
          en: "Smaller [[Deltat]] increases emf magnitude for the same change."
    coherence_rules:
      - id: dt_coherence
        when: "Deltat > 0"
        status: ok
        text:
          es: "[[Deltat]] positivo permite una rapidez media finita."
          en: "Positive [[Deltat]] allows a finite average rate."
    model_validity_rules:
      - id: dt_validity
        when: "true"
        status: ok
        text:
          es: "Cambios extremadamente rapidos pueden exigir un modelo no cuasiestatico."
          en: "Extremely fast changes may require a non-quasistatic model."
    graph_rules:
      - id: dt_graph
        when: "true"
        status: ok
        text:
          es: "[[Deltat]] fija la pendiente temporal del flujo."
          en: "[[Deltat]] fixes the time slope of flux."
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
          es: "Usa [[Deltat]] junto con [[DeltaPhi_B]] para estimar [[epsilon_ind]]."
          en: "Use [[Deltat]] together with [[DeltaPhi_B]] to estimate [[epsilon_ind]]."
  r_Phi:
    magnitude_type: scalar_signed
    semantic_role:
      es: pendiente temporal del flujo
      en: time slope of flux
    summary_rules:
      - id: rphi_summary
        when: "true"
        status: ok
        text:
          es: "[[r_Phi]] resume la rapidez de cambio del flujo enlazado."
          en: "[[r_Phi]] summarizes the rate of change of linked flux."
    physical_reading_rules:
      - id: rphi_reading
        when: "true"
        status: ok
        text:
          es: "[[r_Phi]] es la causa grafica directa de [[epsilon_ind]]."
          en: "[[r_Phi]] is the direct graphical cause of [[epsilon_ind]]."
    coherence_rules:
      - id: rphi_coherence
        when: "true"
        status: ok
        text:
          es: "El signo de [[r_Phi]] debe coincidir con el cambio de flujo elegido."
          en: "The sign of [[r_Phi]] must match the chosen flux change."
    model_validity_rules:
      - id: rphi_validity
        when: "true"
        status: ok
        text:
          es: "Como media, no describe detalles dentro del intervalo."
          en: "As an average, it does not describe details inside the interval."
    graph_rules:
      - id: rphi_graph
        when: "true"
        status: ok
        text:
          es: "[[r_Phi]] es el eje horizontal natural del grafico."
          en: "[[r_Phi]] is the natural horizontal axis of the graph."
    likely_errors:
      - id: rphi_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir flujo grande con [[r_Phi]] grande."
          en: "Typical error: confusing large flux with large [[r_Phi]]."
    next_step_rules:
      - id: rphi_next
        when: "true"
        status: ok
        text:
          es: "Multiplica por [[N]] y aplica Lenz para leer la fem."
          en: "Multiply by [[N]] and apply Lenz to read emf."
  N:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: multiplicador de espiras enlazadas
      en: multiplier of linked turns
    summary_rules:
      - id: N_summary
        when: "true"
        status: ok
        text:
          es: "[[N]] multiplica la fem si cada espira enlaza cambios similares."
          en: "[[N]] multiplies emf if each turn links similar changes."
    physical_reading_rules:
      - id: N_reading
        when: "true"
        status: ok
        text:
          es: "Mas espiras aumentan la respuesta inducida para la misma variacion por espira."
          en: "More turns increase induced response for the same variation per turn."
    coherence_rules:
      - id: N_coherence
        when: "N > 0"
        status: ok
        text:
          es: "[[N]] positivo es coherente con una bobina real."
          en: "Positive [[N]] is coherent with a real coil."
    model_validity_rules:
      - id: N_validity
        when: "true"
        status: ok
        text:
          es: "El factor [[N]] supone espiras equivalentes ante el cambio de flujo."
          en: "Factor [[N]] assumes turns equivalent under flux change."
    graph_rules:
      - id: N_graph
        when: "true"
        status: ok
        text:
          es: "[[N]] cambia la pendiente de [[epsilon_ind]] frente a [[r_Phi]]."
          en: "[[N]] changes the slope of [[epsilon_ind]] versus [[r_Phi]]."
    likely_errors:
      - id: N_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: olvidar [[N]] en una bobina."
          en: "Typical error: forgetting [[N]] in a coil."
    next_step_rules:
      - id: N_next
        when: "true"
        status: ok
        text:
          es: "Verifica si el dato de flujo es por espira o ya es flujo enlazado total."
          en: "Check whether flux data is per turn or already total linkage."
  Phi_B:
    magnitude_type: scalar_signed
    semantic_role:
      es: estado de flujo magnetico
      en: magnetic flux state
    summary_rules:
      - id: phi_summary
        when: "true"
        status: ok
        text:
          es: "[[Phi_B]] describe flujo en un estado; su cambio activa Faraday."
          en: "[[Phi_B]] describes flux in a state; its change activates Faraday."
    physical_reading_rules:
      - id: phi_reading
        when: "true"
        status: ok
        text:
          es: "Flujo estatico puede existir sin fem inducida."
          en: "Static flux may exist without induced emf."
    coherence_rules:
      - id: phi_coherence
        when: "true"
        status: ok
        text:
          es: "[[Phi_B]] debe referirse a la superficie enlazada."
          en: "[[Phi_B]] must refer to the linked surface."
    model_validity_rules:
      - id: phi_validity
        when: "true"
        status: ok
        text:
          es: "Si el campo no es uniforme, el flujo requiere una integracion."
          en: "If the field is not uniform, flux requires integration."
    graph_rules:
      - id: phi_graph
        when: "true"
        status: ok
        text:
          es: "Cambios de [[Phi_B]] generan [[DeltaPhi_B]]."
          en: "Changes in [[Phi_B]] generate [[DeltaPhi_B]]."
    likely_errors:
      - id: phi_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar [[Phi_B]] sin calcular su cambio."
          en: "Typical error: using [[Phi_B]] without computing its change."
    next_step_rules:
      - id: phi_next
        when: "true"
        status: ok
        text:
          es: "Compara estados inicial y final para obtener [[DeltaPhi_B]]."
          en: "Compare initial and final states to obtain [[DeltaPhi_B]]."
  B_perp:
    magnitude_type: scalar_signed
    semantic_role:
      es: componente de campo que atraviesa la superficie
      en: field component crossing the surface
    summary_rules:
      - id: bperp_summary
        when: "true"
        status: ok
        text:
          es: "[[B_perp]] es la parte del campo que contribuye al flujo."
          en: "[[B_perp]] is the part of the field contributing to flux."
    physical_reading_rules:
      - id: bperp_reading
        when: "true"
        status: ok
        text:
          es: "Cambiar [[B_perp]] cambia [[Phi_B]] incluso con area fija."
          en: "Changing [[B_perp]] changes [[Phi_B]] even with fixed area."
    coherence_rules:
      - id: bperp_coherence
        when: "true"
        status: ok
        text:
          es: "Solo la componente perpendicular efectiva cruza la superficie."
          en: "Only the effective perpendicular component crosses the surface."
    model_validity_rules:
      - id: bperp_validity
        when: "true"
        status: ok
        text:
          es: "Debe representar el promedio efectivo si el campo varia sobre el area."
          en: "It must represent the effective average if field varies over area."
    graph_rules:
      - id: bperp_graph
        when: "true"
        status: ok
        text:
          es: "[[B_perp]] actua como parametro que puede cambiar el flujo."
          en: "[[B_perp]] acts as a parameter that can change flux."
    likely_errors:
      - id: bperp_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar campo total aunque sea tangente al area."
          en: "Typical error: using total field even when tangent to the area."
    next_step_rules:
      - id: bperp_next
        when: "true"
        status: ok
        text:
          es: "Multiplica [[B_perp]] por [[A]] para estimar flujo uniforme."
          en: "Multiply [[B_perp]] by [[A]] to estimate uniform flux."
  A:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: escala geometrica del flujo
      en: geometric scale of flux
    summary_rules:
      - id: A_summary
        when: "true"
        status: ok
        text:
          es: "[[A]] fija cuanta superficie queda enlazada por el campo."
          en: "[[A]] sets how much surface is linked by the field."
    physical_reading_rules:
      - id: A_reading
        when: "true"
        status: ok
        text:
          es: "Cambiar [[A]] puede inducir fem aunque el campo sea constante."
          en: "Changing [[A]] can induce emf even if field is constant."
    coherence_rules:
      - id: A_coherence
        when: "A > 0"
        status: ok
        text:
          es: "[[A]] positiva es coherente con una superficie real."
          en: "Positive [[A]] is coherent with a real surface."
    model_validity_rules:
      - id: A_validity
        when: "true"
        status: ok
        text:
          es: "Debe ser el area efectivamente enlazada, no una dimension irrelevante."
          en: "It must be the effectively linked area, not an irrelevant dimension."
    graph_rules:
      - id: A_graph
        when: "true"
        status: ok
        text:
          es: "[[A]] desplaza la escala de flujo del sistema."
          en: "[[A]] shifts the flux scale of the system."
    likely_errors:
      - id: A_error
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar area total aunque no toda este enlazada."
          en: "Typical error: using total area when not all of it is linked."
    next_step_rules:
      - id: A_next
        when: "true"
        status: ok
        text:
          es: "Revisa si el area cambia con el tiempo o solo cambia el campo."
          en: "Check whether area changes with time or only field changes."
cross_checks:
  - id: static_flux_no_emf
    text:
      es: "Flujo constante no produce [[epsilon_ind]] media aunque [[Phi_B]] sea grande."
      en: "Constant flux produces no average [[epsilon_ind]] even if [[Phi_B]] is large."
error_patterns:
  - id: flux_vs_flux_change
    text:
      es: "Usar [[Phi_B]] en lugar de [[DeltaPhi_B]] oculta la causa de Faraday."
      en: "Using [[Phi_B]] instead of [[DeltaPhi_B]] hides Faraday's cause."
graph_binding:
  primary_graph: Coord
  x_axis: r_Phi
  y_axis: epsilon_ind
  secondary_y_axis: DeltaPhi_B
mini_graph:
  enabled: true
  type: Coord
  highlights: [slope_N, lenz_sign]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
