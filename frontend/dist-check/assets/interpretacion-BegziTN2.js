const e=`version: 2
id: interpretacion-descomposicion-vectorial
leaf_id: descomposicion-vectorial
nombre:
  es: Interpretacion de Descomposicion vectorial
  en: Interpretation of Vector Resolution into Components
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: diagramas-de-fuerzas
  ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/descomposicion-vectorial
dependencies:
  formulas:
  - comp_cartesianas
  - comp_cartesianas_fx
  - comp_cartesianas_fy
  - modulo_desde_componentes
  - comp_plano_inclinado
  - comp_plano_inclinado_paralela
  - comp_plano_inclinado_perpendicular
  magnitudes:
  - Fm
  - theta
  - Fx
  - Fy
  - m
  - g
  - Ppar
  - Pperp
  - N
  - fk
  - muk
  - a
  - T
  - W
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
  Fx:
    summary_rules:
    - id: Fx_summary
      when: 'true'
      status: info
      text:
        es: Fx resume una lectura fisica relevante del leaf.
        en: Fx summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: Fx_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que Fx sea coherente con unidades y contexto.
        en: Check that Fx is coherent with units and context.
    physical_reading_rules:
    - id: Fx_physical
      when: 'true'
      status: info
      text:
        es: Fx causa el efecto horizontal neto del vector y decide cuánto empuje o
          tracción actúa realmente sobre el eje x.
        en: Fx causes the horizontal effect of the vector and determines how much
          push or traction actually acts along the x axis.
    model_validity_rules:
    - id: Fx_validity
      when: 'true'
      status: ok
      text:
        es: Fx solo es interpretable dentro del modelo elegido.
        en: Fx is interpretable only inside the chosen model.
    graph_rules:
    - id: Fx_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de Fx.
        en: The graph must reflect the role of Fx visually.
    likely_errors:
    - id: Fx_warn
      when: 'true'
      status: warning
      text:
        es: No confundas Fx con otra magnitud cercana del problema.
        en: Do not confuse Fx with another nearby quantity in the problem.
    next_step_rules:
    - id: Fx_next
      when: 'true'
      status: info
      text:
        es: Usa Fx para enlazar con el siguiente paso de interpretacion.
        en: Use Fx to connect with the next interpretation step.
  Fm:
    summary_rules:
    - id: Fm_summary
      when: 'true'
      status: info
      text:
        es: Fm resume una lectura fisica relevante del leaf.
        en: Fm summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: Fm_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que Fm sea coherente con unidades y contexto.
        en: Check that Fm is coherent with units and context.
    physical_reading_rules:
    - id: Fm_physical
      when: 'true'
      status: info
      text:
        es: Fm fija la escala total de la interacción; a partir de él se reparten
          causalmente Fx y Fy según la geometría.
        en: Fm sets the total interaction scale; Fx and Fy are causally distributed
          from it according to the geometry.
    model_validity_rules:
    - id: Fm_validity
      when: 'true'
      status: ok
      text:
        es: Fm solo es interpretable dentro del modelo elegido.
        en: Fm is interpretable only inside the chosen model.
    graph_rules:
    - id: Fm_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de Fm.
        en: The graph must reflect the role of Fm visually.
    likely_errors:
    - id: Fm_warn
      when: 'true'
      status: warning
      text:
        es: No confundas Fm con otra magnitud cercana del problema.
        en: Do not confuse Fm with another nearby quantity in the problem.
    next_step_rules:
    - id: Fm_next
      when: 'true'
      status: info
      text:
        es: Usa Fm para enlazar con el siguiente paso de interpretacion.
        en: Use Fm to connect with the next interpretation step.
  Fy:
    summary_rules:
    - id: Fy_summary
      when: 'true'
      status: info
      text:
        es: Fy resume una lectura fisica relevante del leaf.
        en: Fy summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: Fy_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que Fy sea coherente con unidades y contexto.
        en: Check that Fy is coherent with units and context.
    physical_reading_rules:
    - id: Fy_physical
      when: 'true'
      status: info
      text:
        es: Fy causa el efecto vertical del vector y puede aumentar o reducir equilibrio,
          contacto o levantamiento según su signo.
        en: Fy causes the vertical effect of the vector and can increase or reduce
          balance, contact, or lift depending on its sign.
    model_validity_rules:
    - id: Fy_validity
      when: 'true'
      status: ok
      text:
        es: Fy solo es interpretable dentro del modelo elegido.
        en: Fy is interpretable only inside the chosen model.
    graph_rules:
    - id: Fy_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de Fy.
        en: The graph must reflect the role of Fy visually.
    likely_errors:
    - id: Fy_warn
      when: 'true'
      status: warning
      text:
        es: No confundas Fy con otra magnitud cercana del problema.
        en: Do not confuse Fy with another nearby quantity in the problem.
    next_step_rules:
    - id: Fy_next
      when: 'true'
      status: info
      text:
        es: Usa Fy para enlazar con el siguiente paso de interpretacion.
        en: Use Fy to connect with the next interpretation step.
  Ppar:
    summary_rules:
    - id: Ppar_summary
      when: 'true'
      status: info
      text:
        es: Ppar resume una lectura fisica relevante del leaf.
        en: Ppar summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: Ppar_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que Ppar sea coherente con unidades y contexto.
        en: Check that Ppar is coherent with units and context.
    physical_reading_rules:
    - id: Ppar_physical
      when: 'true'
      status: info
      text:
        es: Ppar causa la tendencia a deslizar a lo largo del plano porque es la parte
          del peso alineada con la pendiente.
        en: Ppar causes the tendency to slide along the plane because it is the part
          of the weight aligned with the slope.
    model_validity_rules:
    - id: Ppar_validity
      when: 'true'
      status: ok
      text:
        es: Ppar solo es interpretable dentro del modelo elegido.
        en: Ppar is interpretable only inside the chosen model.
    graph_rules:
    - id: Ppar_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de Ppar.
        en: The graph must reflect the role of Ppar visually.
    likely_errors:
    - id: Ppar_warn
      when: 'true'
      status: warning
      text:
        es: No confundas Ppar con otra magnitud cercana del problema.
        en: Do not confuse Ppar with another nearby quantity in the problem.
    next_step_rules:
    - id: Ppar_next
      when: 'true'
      status: info
      text:
        es: Usa Ppar para enlazar con el siguiente paso de interpretacion.
        en: Use Ppar to connect with the next interpretation step.
  Pperp:
    summary_rules:
    - id: Pperp_summary
      when: 'true'
      status: info
      text:
        es: Pperp resume una lectura fisica relevante del leaf.
        en: Pperp summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: Pperp_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que Pperp sea coherente con unidades y contexto.
        en: Check that Pperp is coherent with units and context.
    physical_reading_rules:
    - id: Pperp_physical
      when: 'true'
      status: info
      text:
        es: Pperp causa la compresión contra el plano y fija la escala de la normal
          y de fuerzas de contacto derivadas.
        en: Pperp causes compression against the plane and sets the scale of the normal
          force and derived contact forces.
    model_validity_rules:
    - id: Pperp_validity
      when: 'true'
      status: ok
      text:
        es: Pperp solo es interpretable dentro del modelo elegido.
        en: Pperp is interpretable only inside the chosen model.
    graph_rules:
    - id: Pperp_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de Pperp.
        en: The graph must reflect the role of Pperp visually.
    likely_errors:
    - id: Pperp_warn
      when: 'true'
      status: warning
      text:
        es: No confundas Pperp con otra magnitud cercana del problema.
        en: Do not confuse Pperp with another nearby quantity in the problem.
    next_step_rules:
    - id: Pperp_next
      when: 'true'
      status: info
      text:
        es: Usa Pperp para enlazar con el siguiente paso de interpretacion.
        en: Use Pperp to connect with the next interpretation step.
`;export{e as default};
