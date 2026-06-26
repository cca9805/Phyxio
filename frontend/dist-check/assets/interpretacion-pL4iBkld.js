const e=`version: 2
id: interpretacion-arrastre-lineal
leaf_id: arrastre-lineal
nombre:
  es: Interpretacion de Arrastre lineal
  en: Interpretation of Linear Drag
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: fuerza-de-arrastre
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-de-arrastre/arrastre-lineal
dependencies:
  formulas:
  - arrastre_lineal_estandar
  - tiempo_relajacion_lineal
  magnitudes:
  - F_d
  - b
  - v
  - m
  - tau
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
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  F_d:
    summary_rules:
    - id: F_d_summary
      when: 'true'
      status: info
      text:
        es: F_d resume cuanta resistencia viscosa opone el fluido al movimiento en este regimen.
        en: F_d summarizes how much viscous resistance the fluid opposes to motion in this regime.
    coherence_rules:
    - id: F_d_coherence
      when: 'true'
      status: ok
      text:
        es: Si b y v aumentan, el modulo de F_d debe aumentar proporcionalmente.
        en: If b and v increase, the magnitude of F_d must increase proportionally.
    physical_reading_rules:
    - id: F_d_physical
      when: 'true'
      status: info
      text:
        es: F_d crece porque el fluido disipa mas cantidad de movimiento cuanto mas rapido atraviesa el cuerpo el medio viscoso.
        en: F_d grows because the fluid dissipates more momentum as the body moves faster through the viscous medium.
    model_validity_rules:
    - id: F_d_validity
      when: 'true'
      status: ok
      text:
        es: Interpreta F_d con este modelo solo si el regimen sigue siendo aproximadamente lineal.
        en: Interpret F_d with this model only if the regime remains approximately linear.
    graph_rules:
    - id: F_d_graph
      when: 'true'
      status: info
      text:
        es: Una recta F_d contra v indica que la pendiente representa b.
        en: A straight F_d versus v plot indicates that its slope represents b.
    likely_errors:
    - id: F_d_warn
      when: 'true'
      status: warning
      text:
        es: No interpretes F_d como fuerza motriz; su papel fisico es resistir el avance.
        en: Do not read F_d as a driving force; its physical role is to resist motion.
    next_step_rules:
    - id: F_d_next
      when: 'true'
      status: info
      text:
        es: Usa F_d para decidir si conviene seguir con dinamica transitoria o con un balance limite.
        en: Use F_d to decide whether to continue with transient dynamics or with a limiting balance.
  b:
    summary_rules:
    - id: b_summary
      when: 'true'
      status: info
      text:
        es: b mide la sensibilidad del arrastre a pequenos cambios de rapidez.
        en: b measures how sensitive drag is to small speed changes.
    coherence_rules:
    - id: b_coherence
      when: 'true'
      status: ok
      text:
        es: b debe conservar unidades de N s/m para que F_d = b v sea coherente.
        en: b must keep units of N s/m for F_d = b v to remain coherent.
    physical_reading_rules:
    - id: b_physical
      when: 'true'
      status: info
      text:
        es: Un b grande significa que el medio frena antes el movimiento porque cada incremento de rapidez produce mas resistencia.
        en: A large b means the medium damps motion earlier because each speed increment produces more resistance.
    model_validity_rules:
    - id: b_validity
      when: 'true'
      status: ok
      text:
        es: Trata b como constante solo si ni la geometria ni el regimen cambian de manera apreciable.
        en: Treat b as constant only if neither geometry nor regime changes appreciably.
    graph_rules:
    - id: b_graph
      when: 'true'
      status: info
      text:
        es: En la grafica, b aparece como pendiente de la recta.
        en: In the graph, b appears as the slope of the straight line.
    likely_errors:
    - id: b_warn
      when: 'true'
      status: warning
      text:
        es: No fijes b por memoria si cambia el fluido o el tamano efectivo del cuerpo.
        en: Do not keep b fixed by memory if the fluid or the effective body size changes.
    next_step_rules:
    - id: b_next
      when: 'true'
      status: info
      text:
        es: A partir de b puede estimarse tau y discutir la rapidez del ajuste dinamico.
        en: From b you can estimate tau and discuss how fast the dynamical adjustment is.
  v:
    summary_rules:
    - id: v_summary
      when: 'true'
      status: info
      text:
        es: v resume la rapidez relativa que activa el arrastre lineal.
        en: v summarizes the relative speed that activates linear drag.
    coherence_rules:
    - id: v_coherence
      when: 'true'
      status: ok
      text:
        es: Si v se duplica y b no cambia, F_d tambien debe duplicarse.
        en: If v doubles while b stays fixed, F_d must also double.
    physical_reading_rules:
    - id: v_physical
      when: 'true'
      status: info
      text:
        es: v importa porque el fluido responde al movimiento relativo y no a una velocidad medida en abstracto.
        en: v matters because the fluid responds to relative motion, not to an abstract laboratory speed.
    model_validity_rules:
    - id: v_validity
      when: 'true'
      status: ok
      text:
        es: Usa v dentro del modelo lineal solo si la proporcionalidad con F_d sigue siendo razonable.
        en: Use v inside the linear model only while proportionality with F_d remains reasonable.
    graph_rules:
    - id: v_graph
      when: 'true'
      status: info
      text:
        es: En Coord, v es la variable horizontal que permite leer la pendiente b.
        en: In Coord, v is the horizontal variable that lets you read the slope b.
    likely_errors:
    - id: v_warn
      when: 'true'
      status: warning
      text:
        es: No confundas la rapidez relativa al fluido con la rapidez respecto al suelo.
        en: Do not confuse speed relative to the fluid with speed relative to the ground.
    next_step_rules:
    - id: v_next
      when: 'true'
      status: info
      text:
        es: Usa v para decidir si el leaf sigue siendo lineal o si conviene pasar a otro regimen.
        en: Use v to decide whether the leaf remains linear or whether another regime is needed.
  tau:
    summary_rules:
    - id: tau_summary
      when: 'true'
      status: info
      text:
        es: tau resume la escala temporal propia del modelo lineal.
        en: tau summarizes the natural time scale of the linear model.
    coherence_rules:
    - id: tau_coherence
      when: 'true'
      status: ok
      text:
        es: Si m aumenta o b disminuye, tau debe hacerse mayor.
        en: If m increases or b decreases, tau must become larger.
    physical_reading_rules:
    - id: tau_physical
      when: 'true'
      status: info
      text:
        es: tau es grande cuando la inercia tarda mas en ceder frente a la disipacion viscosa.
        en: tau is large when inertia takes longer to yield to viscous dissipation.
    model_validity_rules:
    - id: tau_validity
      when: 'true'
      status: ok
      text:
        es: tau solo tiene sentido claro si b puede considerarse aproximadamente constante.
        en: tau has a clear meaning only if b can be treated as approximately constant.
    graph_rules:
    - id: tau_graph
      when: 'true'
      status: info
      text:
        es: Aunque la grafica principal sea F_d frente a v, tau ayuda a leer cuan rapido se alcanzaria otra velocidad.
        en: Even if the main graph is F_d versus v, tau helps read how fast another speed would be reached.
    likely_errors:
    - id: tau_warn
      when: 'true'
      status: warning
      text:
        es: No confundas tau con el tiempo total de caida o de recorrido.
        en: Do not confuse tau with the total fall or travel time.
    next_step_rules:
    - id: tau_next
      when: 'true'
      status: info
      text:
        es: Usa tau para enlazar el leaf con transitorios amortiguados y con velocidad terminal lineal.
        en: Use tau to connect the leaf with damped transients and linear terminal speed.
`;export{e as default};
