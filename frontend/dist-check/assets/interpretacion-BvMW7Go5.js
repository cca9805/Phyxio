const e=`version: 2
id: interpretacion-ecuaciones-de-hamilton
leaf_id: ecuaciones-de-hamilton
nombre:
  es: Interpretacion de las ecuaciones de Hamilton
  en: Interpretation of Hamilton's equations
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: mecanica-analitica
  parent_id: hamiltoniano
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/ecuaciones-de-hamilton
dependencies:
  formulas: [ ecuacion_hamilton_q, ecuacion_hamilton_p, ecuaciones_hamilton_indexadas, hamiltoniano_oscilador, qdot_oscilador, pdot_oscilador, conservacion_hamiltoniano ]
  magnitudes: [ H, qi, p, qd, pd, DHp, DHq, m, k, dHdt, Ht ]
output_contract:
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]
result_blocks:
  summary: { title: { es: Resumen canonico, en: Canonical summary } }
  physical_reading: { title: { es: Lectura fisica, en: Physical reading } }
  coherence: { title: { es: Coherencia, en: Coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente paso, en: Next step } }
targets:
  H:
    summary_rules:
    - { id: h_summary, when: "true", status: info, text: { es: "H significa la funcion que causa el flujo canonico: sus pendientes generan como cambian q y p.", en: "H is the function causing canonical flow: its slopes generate how q and p change." } }
    physical_reading_rules:
    - { id: h_physical, when: "true", status: info, text: { es: "H no solo asigna energia; organiza la direccion instantanea del movimiento en espacio de fases.", en: "H does not only assign energy; it organizes the instantaneous direction of motion in phase space." } }
    coherence_rules:
    - { id: h_coherence, when: "true", status: ok, text: { es: "H debe estar escrito en variables canonicas antes de derivar.", en: "H must be written in canonical variables before differentiating." } }
    model_validity_rules:
    - { id: h_validity, when: "true", status: ok, text: { es: "La lectura requiere un par canonico y diferenciabilidad de H.", en: "The reading requires a canonical pair and differentiability of H." } }
    graph_rules:
    - { id: h_graph, when: "true", status: info, text: { es: "En el grafico, las pendientes de H explican las curvas qdot y pdot.", en: "In the graph, H slopes explain the qdot and pdot curves." } }
    likely_errors:
    - { id: h_error, when: "true", status: warning, text: { es: "Error frecuente: tratar H constante como si q y p fueran constantes.", en: "Common mistake: treating constant H as if q and p were constant." } }
    next_step_rules:
    - { id: h_next, when: "true", status: info, text: { es: "Deriva H respecto de p y q para obtener el campo de fase.", en: "Differentiate H with respect to p and q to obtain the phase field." } }
  qd:
    summary_rules:
    - { id: qd_summary, when: "true", status: info, text: { es: "qdot mide el flujo de la coordenada causado por la pendiente de H en direccion p.", en: "qdot measures coordinate flow caused by the slope of H in the p direction." } }
    physical_reading_rules:
    - { id: qd_physical, when: "true", status: info, text: { es: "Si p aumenta en el modelo cuadratico, la coordenada avanza mas rapido porque hay mas momento conjugado disponible.", en: "If p increases in the quadratic model, the coordinate advances faster because more conjugate momentum is available." } }
    coherence_rules:
    - { id: qd_coherence, when: "true", status: ok, text: { es: "qdot debe venir de la derivada respecto de p, no de la pendiente en q.", en: "qdot must come from the derivative with respect to p, not from the q slope." } }
    model_validity_rules:
    - { id: qd_validity, when: "true", status: ok, text: { es: "La formula simple p/m requiere energia cinetica cuadratica.", en: "The simple p/m formula requires quadratic kinetic energy." } }
    graph_rules:
    - { id: qd_graph, when: "true", status: info, text: { es: "En el grafico del oscilador, qdot es constante frente a q si p se fija.", en: "In the oscillator graph, qdot is constant versus q if p is fixed." } }
    likely_errors:
    - { id: qd_error, when: "true", status: warning, text: { es: "Error frecuente: confundir p con qdot sin dividir por m.", en: "Common mistake: confusing p with qdot without dividing by m." } }
    next_step_rules:
    - { id: qd_next, when: "true", status: info, text: { es: "Combina qdot con pdot para leer el vector de fase completo.", en: "Combine qdot with pdot to read the full phase vector." } }
  pd:
    summary_rules:
    - { id: pd_summary, when: "true", status: info, text: { es: "pdot mide el flujo del momento causado por la pendiente de H en direccion q con signo opuesto.", en: "pdot measures momentum flow caused by the slope of H in the q direction with opposite sign." } }
    physical_reading_rules:
    - { id: pd_physical, when: "true", status: info, text: { es: "En el oscilador, el signo negativo hace que el momento cambie hacia el equilibrio.", en: "In the oscillator, the negative sign makes momentum change toward equilibrium." } }
    coherence_rules:
    - { id: pd_coherence, when: "true", status: ok, text: { es: "El signo menos de la segunda ecuacion no es opcional.", en: "The minus sign in the second equation is not optional." } }
    model_validity_rules:
    - { id: pd_validity, when: "true", status: ok, text: { es: "La lectura como fuerza restauradora requiere potencial elastico lineal.", en: "The restoring-force reading requires a linear elastic potential." } }
    graph_rules:
    - { id: pd_graph, when: "true", status: info, text: { es: "En el grafico, pdot desciende linealmente al aumentar q en el oscilador.", en: "In the graph, pdot decreases linearly as q increases in the oscillator." } }
    likely_errors:
    - { id: pd_error, when: "true", status: warning, text: { es: "Error frecuente: perder el signo y predecir inestabilidad artificial.", en: "Common mistake: losing the sign and predicting artificial instability." } }
    next_step_rules:
    - { id: pd_next, when: "true", status: info, text: { es: "Usa el par qdot-pdot para dibujar el campo vectorial.", en: "Use the qdot-pdot pair to draw the vector field." } }
  dHdt:
    summary_rules:
    - { id: dh_summary, when: "true", status: info, text: { es: "dHdt resume si H cambia por dependencia temporal explicita, no por el mero movimiento de q y p.", en: "dHdt summarizes whether H changes through explicit time dependence, not merely through motion of q and p." } }
    physical_reading_rules:
    - { id: dh_physical, when: "true", status: info, text: { es: "Si H no depende explicitamente del tiempo, el sistema puede moverse sobre una curva de nivel conservando H.", en: "If H has no explicit time dependence, the system may move on a level curve while conserving H." } }
    coherence_rules:
    - { id: dh_coherence, when: "true", status: ok, text: { es: "H constante no implica q ni p constantes.", en: "Constant H does not imply constant q or p." } }
    model_validity_rules:
    - { id: dh_validity, when: "true", status: ok, text: { es: "La regla se aplica a evolucion hamiltoniana canonica.", en: "The rule applies to canonical Hamiltonian evolution." } }
    graph_rules:
    - { id: dh_graph, when: "true", status: info, text: { es: "En fase, conservacion significa moverse sobre curvas de nivel.", en: "In phase space, conservation means moving along level curves." } }
    likely_errors:
    - { id: dh_error, when: "true", status: warning, text: { es: "Error frecuente: confundir conservacion con ausencia de movimiento.", en: "Common mistake: confusing conservation with absence of motion." } }
    next_step_rules:
    - { id: dh_next, when: "true", status: info, text: { es: "Despues, estudia retratos de fase y estabilidad.", en: "Next, study phase portraits and stability." } }
`;export{e as default};
