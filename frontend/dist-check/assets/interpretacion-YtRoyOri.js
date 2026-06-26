const e=`version: 2
id: interpretacion-fuerza-forzada
leaf_id: fuerza-forzada
nombre: { es: Interpretacion de fuerza forzada, en: Forced oscillation interpretation }
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: oscilaciones
  parent_id: forzadas-y-resonancia
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/forzadas-y-resonancia/fuerza-forzada
dependencies:
  formulas: [ecuacion_diferencial_forzada, amplitud_forzada, desfase_forzada, respuesta_estacionaria]
  magnitudes: [F0, omega_f, m, k, b, X, delta, x, t, x_d, x_dd]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary: { title: { es: Resumen fisico, en: Physical summary } }
  physical_reading: { title: { es: Lectura causal, en: Causal reading } }
  coherence: { title: { es: Coherencia del forzado, en: Forcing coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura de la curva, en: Curve reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente decision, en: Next decision } }
targets:
  F0: &base
    summary_rules:
      - id: forced_summary
        when: "true"
        status: info
        text: { es: "[[F0]] indica y resume la escala de excitacion externa que alimenta la respuesta estacionaria [[X]].", en: "[[F0]] indicates and summarizes the external excitation scale feeding the steady response [[X]]." }
    physical_reading_rules:
      - id: forced_phys
        when: "true"
        status: info
        text: { es: "La respuesta depende de [[omega_f]] porque inercia, rigidez y disipacion se combinan de forma distinta a cada frecuencia.", en: "The response depends on [[omega_f]] because inertia, stiffness, and dissipation combine differently at each frequency." }
    coherence_rules:
      - id: forced_coh
        when: "true"
        status: ok
        text: { es: "[[X]] debe ser no negativa y [[x]] debe quedar entre -[[X]] y [[X]] en regimen estacionario.", en: "[[X]] must be non-negative and [[x]] must remain between -[[X]] and [[X]] in steady state." }
    model_validity_rules:
      - id: forced_valid
        when: "true"
        status: ok
        text: { es: "El modelo es valido si el sistema es lineal, la fuerza es sinusoidal y el transitorio libre ya no domina.", en: "The model is valid if the system is linear, the force is sinusoidal, and the free transient no longer dominates." }
    graph_rules:
      - id: forced_graph
        when: "true"
        status: info
        text: { es: "En la grafica Coord, variar [[omega_f]] cambia [[X]] y [[delta]] aunque [[F0]] se mantenga fija.", en: "In the Coord graph, varying [[omega_f]] changes [[X]] and [[delta]] even when [[F0]] stays fixed." }
    likely_errors:
      - id: forced_error
        when: "true"
        status: warning
        text: { es: "Error comun: creer que la respuesta usa siempre la frecuencia natural y olvidar que en estacionario sigue a [[omega_f]].", en: "Common mistake: assuming the response always uses the natural frequency and forgetting that steady state follows [[omega_f]]." }
    next_step_rules:
      - id: forced_next
        when: "true"
        status: tip
        text: { es: "Calcula [[X]], calcula [[delta]] y solo despues interpreta la curva temporal [[x]].", en: "Compute [[X]], compute [[delta]], and only then interpret the time curve [[x]]." }
  omega_f: { <<: *base }
  m: { <<: *base }
  k: { <<: *base }
  b: { <<: *base }
  X: { <<: *base }
  delta: { <<: *base }
  x: { <<: *base }
  t: { <<: *base }
  x_d: { <<: *base }
  x_dd: { <<: *base }
`;export{e as default};
