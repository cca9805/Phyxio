const e=`version: 2
id: interpretacion-marco-rotante-general
leaf_id: marco-rotante-general
nombre:
  es: Interpretacion de Marco rotante general
  en: Interpretation of General Rotating Frame
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: marcos-no-inerciales
  ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/marco-rotante-general
dependencies:
  formulas:
  - aceleracion_rotante_general
  - fuerza_coriolis_vectorial
  - fuerza_centrifuga_vectorial
  - fuerza_euler
  magnitudes:
  - a_abs
  - a_rel
  - a_O
  - Omega
  - alpha
  - r
  - v_rel
  - F_E
  - m
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
  a_abs:
    summary_rules:
    - id: a_abs_summary
      when: 'true'
      status: info
      text:
        es: '[[a_abs]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[a_abs]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: a_abs_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[a_abs]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[a_abs]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: a_abs_coherence
      when: 'true'
      status: ok
      text:
        es: '[[a_abs]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[a_abs]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: a_abs_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: a_abs_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[a_abs]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[a_abs]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: a_abs_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[a_abs]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[a_abs]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: a_abs_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[a_abs]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[a_abs]] with a limiting case and state what observable change it would produce.
  a_rel:
    summary_rules:
    - id: a_rel_summary
      when: 'true'
      status: info
      text:
        es: '[[a_rel]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[a_rel]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: a_rel_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[a_rel]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[a_rel]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: a_rel_coherence
      when: 'true'
      status: ok
      text:
        es: '[[a_rel]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[a_rel]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: a_rel_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: a_rel_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[a_rel]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[a_rel]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: a_rel_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[a_rel]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[a_rel]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: a_rel_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[a_rel]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[a_rel]] with a limiting case and state what observable change it would produce.
  a_O:
    summary_rules:
    - id: a_O_summary
      when: 'true'
      status: info
      text:
        es: '[[a_O]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[a_O]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: a_O_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[a_O]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[a_O]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: a_O_coherence
      when: 'true'
      status: ok
      text:
        es: '[[a_O]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[a_O]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: a_O_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: a_O_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[a_O]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[a_O]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: a_O_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[a_O]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[a_O]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: a_O_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[a_O]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[a_O]] with a limiting case and state what observable change it would produce.
  Omega:
    summary_rules:
    - id: Omega_summary
      when: 'true'
      status: info
      text:
        es: '[[Omega]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[Omega]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: Omega_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[Omega]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[Omega]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: Omega_coherence
      when: 'true'
      status: ok
      text:
        es: '[[Omega]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[Omega]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: Omega_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: Omega_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[Omega]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[Omega]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: Omega_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[Omega]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[Omega]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: Omega_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[Omega]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[Omega]] with a limiting case and state what observable change it would produce.
  alpha:
    summary_rules:
    - id: alpha_summary
      when: 'true'
      status: info
      text:
        es: '[[alpha]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[alpha]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: alpha_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[alpha]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[alpha]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: alpha_coherence
      when: 'true'
      status: ok
      text:
        es: '[[alpha]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[alpha]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: alpha_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: alpha_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[alpha]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[alpha]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: alpha_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[alpha]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[alpha]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: alpha_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[alpha]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[alpha]] with a limiting case and state what observable change it would produce.
  r:
    summary_rules:
    - id: r_summary
      when: 'true'
      status: info
      text:
        es: '[[r]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[r]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: r_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[r]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[r]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: r_coherence
      when: 'true'
      status: ok
      text:
        es: '[[r]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[r]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: r_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: r_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[r]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[r]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: r_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[r]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[r]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: r_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[r]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[r]] with a limiting case and state what observable change it would produce.
  v_rel:
    summary_rules:
    - id: v_rel_summary
      when: 'true'
      status: info
      text:
        es: '[[v_rel]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[v_rel]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: v_rel_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[v_rel]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[v_rel]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: v_rel_coherence
      when: 'true'
      status: ok
      text:
        es: '[[v_rel]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[v_rel]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: v_rel_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: v_rel_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[v_rel]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[v_rel]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: v_rel_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[v_rel]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[v_rel]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: v_rel_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[v_rel]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[v_rel]] with a limiting case and state what observable change it would produce.
  F_E:
    summary_rules:
    - id: F_E_summary
      when: 'true'
      status: info
      text:
        es: '[[F_E]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[F_E]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: F_E_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[F_E]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[F_E]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: F_E_coherence
      when: 'true'
      status: ok
      text:
        es: '[[F_E]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[F_E]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: F_E_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: F_E_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[F_E]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[F_E]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: F_E_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[F_E]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[F_E]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: F_E_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[F_E]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[F_E]] with a limiting case and state what observable change it would produce.
  m:
    summary_rules:
    - id: m_summary
      when: 'true'
      status: info
      text:
        es: '[[m]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas.'
        en: '[[m]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid.'
    physical_reading_rules:
    - id: m_physical
      when: 'true'
      status: info
      text:
        es: 'Si [[m]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.'
        en: 'If [[m]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system.'
    coherence_rules:
    - id: m_coherence
      when: 'true'
      status: ok
      text:
        es: '[[m]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.'
        en: '[[m]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units.'
    model_validity_rules:
    - id: m_validity
      when: 'true'
      status: ok
      text:
        es: El modelo sigue siendo valido mientras un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.
        en: The model remains valid while a general rotating frame separates relative acceleration, origin acceleration, and apparent terms; if the omitted term becomes comparable, the description should be changed.
    graph_rules:
    - id: m_graph
      when: 'true'
      status: info
      text:
        es: Sin grafico declarado, [[m]] se lee mediante tendencia, signo, escala y casos limite.
        en: With no declared graph, [[m]] is read through trend, sign, scale, and limiting cases.
    likely_errors:
    - id: m_error
      when: 'true'
      status: warning
      text:
        es: 'Error probable: confundir [[m]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico.'
        en: 'Likely mistake: confuse [[m]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning.'
    next_step_rules:
    - id: m_next
      when: 'true'
      status: info
      text:
        es: Despues de calcular, contrasta [[m]] con un caso limite y explica que cambio observable produciria.
        en: After calculating, compare [[m]] with a limiting case and state what observable change it would produce.
`;export{e as default};
