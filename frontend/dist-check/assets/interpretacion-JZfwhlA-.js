const n=`version: 2
id: interpretacion-formulacion-diferencial
leaf_id: formulacion-diferencial
nombre:
  es: "Interpretación de la formulación diferencial"
  en: "Interpretation of Differential Formulation"
scope:
  area: "fisica-clasica"
  bloque: "electromagnetismo"
  subbloque: "ecuaciones-de-maxwell"
  parent_id: "ecuaciones-de-maxwell"
  ruta_relativa: "fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial"
dependencies:
  formulas:
    - gauss_local_e
    - gauss_local_b
    - faraday_local
    - ampere_local
    - continuidad_carga
    - onda_electromagnetica
    - definicion_corriente_maxwell
  magnitudes:
    - divE
    - rho
    - epsilon0
    - divB
    - curlE
    - dB_dt
    - curlB
    - mu0
    - J
    - dE_dt
    - c
    - divJ
    - laplacianE
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
      es: "Resumen físico"
      en: "Physical summary"
  physical_reading:
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    title:
      es: "Coherencia y consistencia"
      en: "Coherence and consistency"
  model_validity:
    title:
      es: "Validez del modelo local"
      en: "Local model validity"
  graph_reading:
    title:
      es: "Lectura de operadores"
      en: "Operator reading"
  likely_errors:
    title:
      es: "Errores comunes"
      en: "Common errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next step"
targets:
  divE:
    summary_rules:
      - id: divE_sum
        when: "true"
        status: info
        text:
          es: "La divergencia del campo eléctrico describe la densidad de fuentes o sumideros de campo en un punto según {{f:gauss_local_e}}."
          en: "The electric field divergence describes the density of field sources or sinks at a point according to {{f:gauss_local_e}}."
    physical_reading_rules:
      - id: divE_phys
        when: "divE > 0"
        status: success
        text:
          es: "El valor positivo indica una fuente de carga positiva [[rho]]."
          en: "The positive value indicates a positive charge source [[rho]]."
    coherence_rules:
      - id: divE_coh
        when: "true"
        status: ok
        text:
          es: "Coherente con Gauss."
          en: "Consistent with Gauss."
    model_validity_rules:
      - id: divE_val
        when: "true"
        status: ok
        text:
          es: "Válido en medios lineales."
          en: "Valid in linear media."
    graph_rules:
      - id: divE_graph
        when: "true"
        status: info
        text:
          es: "Observa el flujo."
          en: "Observe the flow."
    likely_errors:
      - id: divE_err
        when: "true"
        status: warning
        text:
          es: "No confundir con E."
          en: "Do not confuse with E."
    next_step_rules:
      - id: divE_next
        when: "true"
        status: info
        text:
          es: "Integrar."
          en: "Integrate."

  curlE:
    summary_rules:
      - id: curlE_sum
        when: "true"
        status: info
        text:
          es: "Tendencia a circular por {{f:faraday_local}}."
          en: "Tendency to circulate via {{f:faraday_local}}."
    physical_reading_rules:
      - id: curlE_phys
        when: "curlE != 0"
        status: success
        text:
          es: "Inducción por [[dB_dt]]."
          en: "Induction via [[dB_dt]]."
    coherence_rules:
      - id: curlE_coh
        when: "true"
        status: ok
        text:
          es: "Coherente con Faraday."
          en: "Consistent with Faraday."
    model_validity_rules:
      - id: curlE_val
        when: "true"
        status: ok
        text:
          es: "Válido para campos clásicos."
          en: "Valid for classical fields."
    graph_rules:
      - id: curlE_graph
        when: "true"
        status: info
        text:
          es: "Busca remolinos."
          en: "Look for swirls."
    likely_errors:
      - id: curlE_err
        when: "true"
        status: warning
        text:
          es: "Olvidar signo -."
          en: "Forget - sign."
    next_step_rules:
      - id: curlE_next
        when: "true"
        status: info
        text:
          es: "Calcular FEM."
          en: "Calculate EMF."

  divB:
    summary_rules:
      - id: divB_sum
        when: "true"
        status: ok
        text:
          es: "Divergencia nula por {{f:gauss_local_b}}."
          en: "Zero divergence via {{f:gauss_local_b}}."
    physical_reading_rules:
      - id: divB_phys
        when: "true"
        status: success
        text:
          es: "Sin monopolos."
          en: "No monopoles."
    coherence_rules:
      - id: divB_coh
        when: "true"
        status: ok
        text:
          es: "Restricción universal."
          en: "Universal constraint."
    model_validity_rules:
      - id: divB_val
        when: "true"
        status: ok
        text:
          es: "Sin límites conocidos."
          en: "No known limits."
    graph_rules:
      - id: divB_graph
        when: "true"
        status: info
        text:
          es: "Líneas cerradas."
          en: "Closed lines."
    likely_errors:
      - id: divB_err
        when: "true"
        status: warning
        text:
          es: "Buscar fuentes aisladas."
          en: "Searching for isolated sources."
    next_step_rules:
      - id: divB_next
        when: "true"
        status: info
        text:
          es: "Aplicar Stokes."
          en: "Apply Stokes."

  curlB:
    summary_rules:
      - id: curlB_sum
        when: "true"
        status: info
        text:
          es: "Circulación por {{f:ampere_local}}."
          en: "Circulation via {{f:ampere_local}}."
    physical_reading_rules:
      - id: curlB_phys
        when: "true"
        status: ok
        text:
          es: "Fuentes: J y dE/dt."
          en: "Sources: J and dE/dt."
    coherence_rules:
      - id: curlB_coh
        when: "true"
        status: ok
        text:
          es: "Consistente con Ampère."
          en: "Consistent with Ampère."
    model_validity_rules:
      - id: curlB_val
        when: "true"
        status: ok
        text:
          es: "Régimen dinámico."
          en: "Dynamic regime."
    graph_rules:
      - id: curlB_graph
        when: "true"
        status: info
        text:
          es: "Campo circundante."
          en: "Surrounding field."
    likely_errors:
      - id: curlB_err
        when: "true"
        status: warning
        text:
          es: "Ignorar dE/dt."
          en: "Ignoring dE/dt."
    next_step_rules:
      - id: curlB_next
        when: "true"
        status: info
        text:
          es: "Análisis de ondas."
          en: "Wave analysis."

  divJ:
    summary_rules:
      - id: divJ_sum
        when: "true"
        status: info
        text:
          es: "Conservación por {{f:continuidad_carga}}."
          en: "Conservation via {{f:continuidad_carga}}."
    physical_reading_rules:
      - id: divJ_phys
        when: "true"
        status: ok
        text:
          es: "Equilibrio de carga."
          en: "Charge balance."
    coherence_rules:
      - id: divJ_coh
        when: "true"
        status: ok
        text:
          es: "Derivado de Maxwell."
          en: "Derived from Maxwell."
    model_validity_rules:
      - id: divJ_val
        when: "true"
        status: ok
        text:
          es: "Siempre válido."
          en: "Always valid."
    graph_rules:
      - id: divJ_graph
        when: "true"
        status: info
        text:
          es: "Ver flujo J."
          en: "See J flow."
    likely_errors:
      - id: divJ_err
        when: "true"
        status: warning
        text:
          es: "Carga desapareciendo."
          en: "Disappearing charge."
    next_step_rules:
      - id: divJ_next
        when: "true"
        status: info
        text:
          es: "Estado estacionario."
          en: "Steady state."

  laplacianE:
    summary_rules:
      - id: lapE_sum
        when: "true"
        status: info
        text:
          es: "Propagación por {{f:onda_electromagnetica}}."
          en: "Propagation via {{f:onda_electromagnetica}}."
    physical_reading_rules:
      - id: lapE_phys
        when: "true"
        status: ok
        text:
          es: "Curvatura de onda."
          en: "Wave curvature."
    coherence_rules:
      - id: lapE_coh
        when: "true"
        status: ok
        text:
          es: "Derivado de Faraday/Ampere."
          en: "Derived from Faraday/Ampere."
    model_validity_rules:
      - id: lapE_val
        when: "true"
        status: ok
        text:
          es: "Sin fuentes locales."
          en: "No local sources."
    graph_rules:
      - id: lapE_graph
        when: "true"
        status: info
        text:
          es: "Frente de onda."
          en: "Wavefront."
    likely_errors:
      - id: lapE_err
        when: "true"
        status: warning
        text:
          es: "Confundir con div."
          en: "Confuse with div."
    next_step_rules:
      - id: lapE_next
        when: "true"
        status: info
        text:
          es: "Análisis de fase."
          en: "Phase analysis."

  J:
    summary_rules:
      - id: J_sum
        when: "true"
        status: info
        text:
          es: "Corriente total {{f:definicion_corriente_maxwell}}."
          en: "Total current {{f:definicion_corriente_maxwell}}."
    physical_reading_rules:
      - id: J_phys
        when: "true"
        status: ok
        text:
          es: "Portadores + Desplazamiento."
          en: "Carriers + Displacement."
    coherence_rules:
      - id: J_coh
        when: "true"
        status: ok
        text:
          es: "Fuente de B."
          en: "Source of B."
    model_validity_rules:
      - id: J_val
        when: "true"
        status: ok
        text:
          es: "Local y causal."
          en: "Local and causal."
    graph_rules:
      - id: J_graph
        when: "true"
        status: info
        text:
          es: "Vector J."
          en: "Vector J."
    likely_errors:
      - id: J_err
        when: "true"
        status: warning
        text:
          es: "Solo portadores."
          en: "Only carriers."
    next_step_rules:
      - id: J_next
        when: "true"
        status: info
        text:
          es: "Ley de Ampère."
          en: "Ampère's Law."
`;export{n as default};
