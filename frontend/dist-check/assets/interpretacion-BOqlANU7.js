const e=`version: 2
id: interpretacion-magnitudes-angulares
leaf_id: magnitudes-angulares
nombre:
  es: Interpretacion de Magnitudes angulares
  en: Interpretation of Angular Quantities
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cinematica
  parent_id: rotacion
  ruta_relativa: fisica-clasica/mecanica/cinematica/rotacion/magnitudes-angulares
dependencies:
  formulas:
  - definicion_radian
  - relacion_omega_periodo
  - relacion_omega_frecuencia
  - relacion_f_T
  magnitudes:
  - s
  - R
  - theta
  - omega
  - f
  - T_periodo
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
  theta:
    summary_rules:
    - id: theta_summary
      when: 'true'
      status: info
      text:
        es: theta resume una lectura fisica relevante del leaf.
        en: theta summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: theta_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que theta sea coherente con unidades y contexto.
        en: Check that theta is coherent with units and context.
    physical_reading_rules:
    - id: theta_physical
      when: 'true'
      status: info
      text:
        es: La lectura de theta debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
        en: The reading of theta must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
    - id: theta_validity
      when: 'true'
      status: ok
      text:
        es: theta solo es interpretable dentro del modelo elegido.
        en: theta is interpretable only inside the chosen model.
    graph_rules:
    - id: theta_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de theta.
        en: The graph must reflect the role of theta visually.
    likely_errors:
    - id: theta_warn
      when: 'true'
      status: warning
      text:
        es: No confundas theta con otra magnitud cercana del problema.
        en: Do not confuse theta with another nearby quantity in the problem.
    next_step_rules:
    - id: theta_next
      when: 'true'
      status: info
      text:
        es: Usa theta para enlazar con el siguiente paso de interpretacion.
        en: Use theta to connect with the next interpretation step.
  omega:
    summary_rules:
    - id: omega_summary
      when: 'true'
      status: info
      text:
        es: omega resume una lectura fisica relevante del leaf.
        en: omega summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: omega_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que omega sea coherente con unidades y contexto.
        en: Check that omega is coherent with units and context.
    physical_reading_rules:
    - id: omega_physical
      when: 'true'
      status: info
      text:
        es: La lectura de omega debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
        en: The reading of omega must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
    - id: omega_validity
      when: 'true'
      status: ok
      text:
        es: omega solo es interpretable dentro del modelo elegido.
        en: omega is interpretable only inside the chosen model.
    graph_rules:
    - id: omega_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de omega.
        en: The graph must reflect the role of omega visually.
    likely_errors:
    - id: omega_warn
      when: 'true'
      status: warning
      text:
        es: No confundas omega con otra magnitud cercana del problema.
        en: Do not confuse omega with another nearby quantity in the problem.
    next_step_rules:
    - id: omega_next
      when: 'true'
      status: info
      text:
        es: Usa omega para enlazar con el siguiente paso de interpretacion.
        en: Use omega to connect with the next interpretation step.
  f:
    summary_rules:
    - id: f_summary
      when: 'true'
      status: info
      text:
        es: f resume una lectura fisica relevante del leaf.
        en: f summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: f_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que f sea coherente con unidades y contexto.
        en: Check that f is coherent with units and context.
    physical_reading_rules:
    - id: f_physical
      when: 'true'
      status: info
      text:
        es: La lectura de f debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
        en: The reading of f must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
    - id: f_validity
      when: 'true'
      status: ok
      text:
        es: f solo es interpretable dentro del modelo elegido.
        en: f is interpretable only inside the chosen model.
    graph_rules:
    - id: f_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de f.
        en: The graph must reflect the role of f visually.
    likely_errors:
    - id: f_warn
      when: 'true'
      status: warning
      text:
        es: No confundas f con otra magnitud cercana del problema.
        en: Do not confuse f with another nearby quantity in the problem.
    next_step_rules:
    - id: f_next
      when: 'true'
      status: info
      text:
        es: Usa f para enlazar con el siguiente paso de interpretacion.
        en: Use f to connect with the next interpretation step.
`;export{e as default};
