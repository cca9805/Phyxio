const e=`version: 2
id: interpretacion-subamortiguado
leaf_id: subamortiguado
nombre: { es: Interpretacion del regimen subamortiguado, en: Underdamped regime interpretation }
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: oscilaciones
  parent_id: amortiguamiento
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/amortiguamiento/subamortiguado
dependencies:
  formulas: [condicion_subamortiguado, pulsacion_amortiguada, envolvente, solucion_subamortiguada]
  magnitudes: [gamma, omega0, omega_d, x_env, A, x, t, phi]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary: { title: { es: Resumen fisico, en: Physical summary } }
  physical_reading: { title: { es: Lectura causal, en: Causal reading } }
  coherence: { title: { es: Coherencia del regimen, en: Regime coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura de la curva, en: Curve reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente decision, en: Next decision } }
targets:
  gamma: &base
    summary_rules:
      - id: gamma_summary
        when: "true"
        status: info
        text: { es: "[[gamma]] indica y resume la perdida de amplitud que debe ser menor que [[omega0]] para conservar oscilacion.", en: "[[gamma]] indicates and summarizes amplitude loss that must remain below [[omega0]] to preserve oscillation." }
    physical_reading_rules:
      - id: gamma_phys
        when: "true"
        status: info
        text: { es: "Si [[gamma]] aumenta, la envolvente [[x_env]] disminuye antes porque la energia se disipa mas rapido.", en: "If [[gamma]] increases, the envelope [[x_env]] decreases sooner because energy dissipates faster." }
    coherence_rules:
      - id: gamma_coh
        when: "true"
        status: ok
        text: { es: "La lectura subamortiguada exige [[gamma]] positivo y menor que [[omega0]].", en: "The underdamped reading requires positive [[gamma]] smaller than [[omega0]]." }
    model_validity_rules:
      - id: gamma_valid
        when: "true"
        status: ok
        text: { es: "Es valido si el amortiguamiento es viscoso lineal y los parametros no cambian durante el transitorio.", en: "It is valid if damping is linear viscous and parameters do not change during the transient." }
    graph_rules:
      - id: gamma_graph
        when: "true"
        status: info
        text: { es: "En la grafica, [[gamma]] controla la pendiente de la envolvente que limita [[x]].", en: "In the graph, [[gamma]] controls the envelope slope that bounds [[x]]." }
    likely_errors:
      - id: gamma_error
        when: "true"
        status: warning
        text: { es: "Error comun: creer que [[gamma]] es la frecuencia visible y olvidar que la frecuencia observada es [[omega_d]].", en: "Common mistake: assuming [[gamma]] is the visible frequency and forgetting that the observed frequency is [[omega_d]]." }
    next_step_rules:
      - id: gamma_next
        when: "true"
        status: tip
        text: { es: "Compara [[gamma]] con [[omega0]], calcula [[omega_d]] y luego evalua la envolvente o [[x]].", en: "Compare [[gamma]] with [[omega0]], compute [[omega_d]], and then evaluate the envelope or [[x]]." }
  omega0:
    <<: *base
  omega_d:
    <<: *base
  x_env:
    <<: *base
  A:
    <<: *base
  x:
    <<: *base
  t:
    <<: *base
  phi:
    <<: *base
`;export{e as default};
