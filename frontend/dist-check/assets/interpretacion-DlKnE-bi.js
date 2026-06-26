const e=`version: 2
id: interpretacion-no-holonomas
leaf_id: no-holonomas
nombre:
  es: Interpretacion de Ligaduras no holonomas
  en: Interpretation of Nonholonomic Constraints
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: mecanica-analitica
  parent_id: ligaduras
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/ligaduras/no-holonomas
dependencies:
  formulas:
  - ligadura_no_holonoma_lineal
  - desplazamiento_virtual_compatible
  - lagrange_dalembert_no_holonomo
  - potencia_ligadura_ideal
  magnitudes:
  - Aai
  - qdot_i
  - aa
  - lambda_a
  - Lagr
  - Qi
  - dqi
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
      es: Resumen
      en: Summary
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
  Aai:
    summary_rules:
    - id: Aai_summary
      when: 'true'
      status: info
      text:
        es: '[[Aai]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[Aai]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: Aai_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[Aai]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[Aai]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: Aai_coherence
      when: 'true'
      status: ok
      text:
        es: '[[Aai]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[Aai]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: Aai_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: Aai_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[Aai]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[Aai]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: Aai_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[Aai]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[Aai]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: Aai_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[Aai]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[Aai]] with a limiting case and state what observable change it would produce.
  qdot_i:
    summary_rules:
    - id: qdot_i_summary
      when: 'true'
      status: info
      text:
        es: '[[qdot_i]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[qdot_i]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: qdot_i_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[qdot_i]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[qdot_i]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: qdot_i_coherence
      when: 'true'
      status: ok
      text:
        es: '[[qdot_i]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[qdot_i]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: qdot_i_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: qdot_i_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[qdot_i]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[qdot_i]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: qdot_i_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[qdot_i]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[qdot_i]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: qdot_i_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[qdot_i]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[qdot_i]] with a limiting case and state what observable change it would produce.
  aa:
    summary_rules:
    - id: aa_summary
      when: 'true'
      status: info
      text:
        es: '[[aa]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[aa]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: aa_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[aa]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[aa]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: aa_coherence
      when: 'true'
      status: ok
      text:
        es: '[[aa]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[aa]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: aa_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: aa_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[aa]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[aa]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: aa_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[aa]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[aa]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: aa_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[aa]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[aa]] with a limiting case and state what observable change it would produce.
  lambda_a:
    summary_rules:
    - id: lambda_a_summary
      when: 'true'
      status: info
      text:
        es: '[[lambda_a]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[lambda_a]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: lambda_a_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[lambda_a]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[lambda_a]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: lambda_a_coherence
      when: 'true'
      status: ok
      text:
        es: '[[lambda_a]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[lambda_a]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: lambda_a_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: lambda_a_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[lambda_a]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[lambda_a]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: lambda_a_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[lambda_a]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[lambda_a]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: lambda_a_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[lambda_a]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[lambda_a]] with a limiting case and state what observable change it would produce.
  Lagr:
    summary_rules:
    - id: Lagr_summary
      when: 'true'
      status: info
      text:
        es: '[[Lagr]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[Lagr]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: Lagr_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[Lagr]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[Lagr]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: Lagr_coherence
      when: 'true'
      status: ok
      text:
        es: '[[Lagr]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[Lagr]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: Lagr_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: Lagr_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[Lagr]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[Lagr]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: Lagr_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[Lagr]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[Lagr]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: Lagr_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[Lagr]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[Lagr]] with a limiting case and state what observable change it would produce.
  Qi:
    summary_rules:
    - id: Qi_summary
      when: 'true'
      status: info
      text:
        es: '[[Qi]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[Qi]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: Qi_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[Qi]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[Qi]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: Qi_coherence
      when: 'true'
      status: ok
      text:
        es: '[[Qi]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[Qi]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: Qi_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: Qi_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[Qi]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[Qi]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: Qi_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[Qi]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[Qi]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: Qi_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[Qi]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[Qi]] with a limiting case and state what observable change it would produce.
  dqi:
    summary_rules:
    - id: dqi_summary
      when: 'true'
      status: info
      text:
        es: '[[dqi]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[dqi]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: dqi_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[dqi]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[dqi]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: dqi_coherence
      when: 'true'
      status: ok
      text:
        es: '[[dqi]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[dqi]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: dqi_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: dqi_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[dqi]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[dqi]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: dqi_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[dqi]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[dqi]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: dqi_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[dqi]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[dqi]] with a limiting case and state what observable change it would produce.
`;export{e as default};
