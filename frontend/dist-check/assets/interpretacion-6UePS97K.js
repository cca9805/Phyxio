const e=`version: 2
id: interpretacion-magnitudes-cinematicas
leaf_id: magnitudes-cinematicas
nombre:
  es: Interpretacion de Magnitudes cinematicas
  en: Interpretation of Kinematic Quantities
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cinematica
  parent_id: cinematica
  ruta_relativa: fisica-clasica/mecanica/cinematica/magnitudes-cinematicas
dependencies:
  formulas:
    - velocidad_media
    - rapidez_media
    - velocidad_instantanea
    - aceleracion_media
    - aceleracion_instantanea
    - aceleracion_como_segunda_derivada
    - definicion_desplazamiento
    - definicion_cambio_velocidad
  magnitudes:
    - posicion
    - posicion_vectorial
    - desplazamiento
    - distancia
    - velocidad_media
    - rapidez_media
    - aceleracion_media
    - cambio_velocidad
    - tiempo
    - intervalo_tiempo
    - velocidad
    - rapidez
    - aceleracion
    - posicion_inicial
    - posicion_final
    - velocidad_inicial
    - velocidad_final
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
  velocidad_media:
    summary_rules:
      - id: velocidad_media_summary
        when: "true"
        status: info
        text:
          es: velocidad_media resume una lectura fisica relevante del leaf.
          en: velocidad_media summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: velocidad_media_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que velocidad_media sea coherente con unidades y contexto.
          en: Check that velocidad_media is coherent with units and context.
    physical_reading_rules:
      - id: velocidad_media_physical
        when: "true"
        status: info
        text:
          es: La lectura de velocidad_media debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of velocidad_media must connect with the described physical phenomenon.
    model_validity_rules:
      - id: velocidad_media_validity
        when: "true"
        status: ok
        text:
          es: velocidad_media solo es interpretable dentro del modelo elegido.
          en: velocidad_media is interpretable only inside the chosen model.
    graph_rules:
      - id: velocidad_media_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de velocidad_media.
          en: The graph must reflect the role of velocidad_media visually.
    likely_errors:
      - id: velocidad_media_warn
        when: "true"
        status: warning
        text:
          es: No confundas velocidad_media con otra magnitud cercana del problema.
          en: Do not confuse velocidad_media with another nearby quantity in the problem.
    next_step_rules:
      - id: velocidad_media_next
        when: "true"
        status: info
        text:
          es: Usa velocidad_media para enlazar con el siguiente paso de interpretacion.
          en: Use velocidad_media to connect with the next interpretation step.
  desplazamiento:
    summary_rules:
      - id: desplazamiento_summary
        when: "true"
        status: info
        text:
          es: desplazamiento resume una lectura fisica relevante del leaf.
          en: desplazamiento summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: desplazamiento_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que desplazamiento sea coherente con unidades y contexto.
          en: Check that desplazamiento is coherent with units and context.
    physical_reading_rules:
      - id: desplazamiento_physical
        when: "true"
        status: info
        text:
          es: La lectura de desplazamiento debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of desplazamiento must connect with the described physical phenomenon.
    model_validity_rules:
      - id: desplazamiento_validity
        when: "true"
        status: ok
        text:
          es: desplazamiento solo es interpretable dentro del modelo elegido.
          en: desplazamiento is interpretable only inside the chosen model.
    graph_rules:
      - id: desplazamiento_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de desplazamiento.
          en: The graph must reflect the role of desplazamiento visually.
    likely_errors:
      - id: desplazamiento_warn
        when: "true"
        status: warning
        text:
          es: No confundas desplazamiento con otra magnitud cercana del problema.
          en: Do not confuse desplazamiento with another nearby quantity in the problem.
    next_step_rules:
      - id: desplazamiento_next
        when: "true"
        status: info
        text:
          es: Usa desplazamiento para enlazar con el siguiente paso de interpretacion.
          en: Use desplazamiento to connect with the next interpretation step.
  intervalo_tiempo:
    summary_rules:
      - id: intervalo_tiempo_summary
        when: "true"
        status: info
        text:
          es: intervalo_tiempo resume una lectura fisica relevante del leaf.
          en: intervalo_tiempo summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: intervalo_tiempo_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que intervalo_tiempo sea coherente con unidades y contexto.
          en: Check that intervalo_tiempo is coherent with units and context.
    physical_reading_rules:
      - id: intervalo_tiempo_physical
        when: "true"
        status: info
        text:
          es: La lectura de intervalo_tiempo debe conectarse con el fenomeno fisico descrito.
          en: The reading of intervalo_tiempo must connect with the described physical phenomenon.
    model_validity_rules:
      - id: intervalo_tiempo_validity
        when: "true"
        status: ok
        text:
          es: intervalo_tiempo solo es interpretable dentro del modelo elegido.
          en: intervalo_tiempo is interpretable only inside the chosen model.
    graph_rules:
      - id: intervalo_tiempo_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de intervalo_tiempo.
          en: The graph must reflect the role of intervalo_tiempo visually.
    likely_errors:
      - id: intervalo_tiempo_warn
        when: "true"
        status: warning
        text:
          es: No confundas intervalo_tiempo con otra magnitud cercana del problema.
          en: Do not confuse intervalo_tiempo with another nearby quantity in the problem.
    next_step_rules:
      - id: intervalo_tiempo_next
        when: "true"
        status: info
        text:
          es: Usa intervalo_tiempo para enlazar con el siguiente paso de interpretacion.
          en: Use intervalo_tiempo to connect with the next interpretation step.
  rapidez_media:
    summary_rules:
      - id: rapidez_media_summary
        when: "true"
        status: info
        text:
          es: rapidez_media resume una lectura fisica relevante del leaf.
          en: rapidez_media summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: rapidez_media_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que rapidez_media sea coherente con unidades y contexto.
          en: Check that rapidez_media is coherent with units and context.
    physical_reading_rules:
      - id: rapidez_media_physical
        when: "true"
        status: info
        text:
          es: La lectura de rapidez_media debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of rapidez_media must connect with the described physical phenomenon.
    model_validity_rules:
      - id: rapidez_media_validity
        when: "true"
        status: ok
        text:
          es: rapidez_media solo es interpretable dentro del modelo elegido.
          en: rapidez_media is interpretable only inside the chosen model.
    graph_rules:
      - id: rapidez_media_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de rapidez_media.
          en: The graph must reflect the role of rapidez_media visually.
    likely_errors:
      - id: rapidez_media_warn
        when: "true"
        status: warning
        text:
          es: No confundas rapidez_media con otra magnitud cercana del problema.
          en: Do not confuse rapidez_media with another nearby quantity in the problem.
    next_step_rules:
      - id: rapidez_media_next
        when: "true"
        status: info
        text:
          es: Usa rapidez_media para enlazar con el siguiente paso de interpretacion.
          en: Use rapidez_media to connect with the next interpretation step.
  distancia:
    summary_rules:
      - id: distancia_summary
        when: "true"
        status: info
        text:
          es: distancia resume una lectura fisica relevante del leaf.
          en: distancia summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: distancia_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que distancia sea coherente con unidades y contexto.
          en: Check that distancia is coherent with units and context.
    physical_reading_rules:
      - id: distancia_physical
        when: "true"
        status: info
        text:
          es: La lectura de distancia debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of distancia must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: distancia_validity
        when: "true"
        status: ok
        text:
          es: distancia solo es interpretable dentro del modelo elegido.
          en: distancia is interpretable only inside the chosen model.
    graph_rules:
      - id: distancia_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de distancia.
          en: The graph must reflect the role of distancia visually.
    likely_errors:
      - id: distancia_warn
        when: "true"
        status: warning
        text:
          es: No confundas distancia con otra magnitud cercana del problema.
          en: Do not confuse distancia with another nearby quantity in the problem.
    next_step_rules:
      - id: distancia_next
        when: "true"
        status: info
        text:
          es: Usa distancia para enlazar con el siguiente paso de interpretacion.
          en: Use distancia to connect with the next interpretation step.
  velocidad:
    summary_rules:
      - id: velocidad_summary
        when: "true"
        status: info
        text:
          es: velocidad resume una lectura fisica relevante del leaf.
          en: velocidad summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: velocidad_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que velocidad sea coherente con unidades y contexto.
          en: Check that velocidad is coherent with units and context.
    physical_reading_rules:
      - id: velocidad_physical
        when: "true"
        status: info
        text:
          es: La lectura de velocidad debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of velocidad must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: velocidad_validity
        when: "true"
        status: ok
        text:
          es: velocidad solo es interpretable dentro del modelo elegido.
          en: velocidad is interpretable only inside the chosen model.
    graph_rules:
      - id: velocidad_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de velocidad.
          en: The graph must reflect the role of velocidad visually.
    likely_errors:
      - id: velocidad_warn
        when: "true"
        status: warning
        text:
          es: No confundas velocidad con otra magnitud cercana del problema.
          en: Do not confuse velocidad with another nearby quantity in the problem.
    next_step_rules:
      - id: velocidad_next
        when: "true"
        status: info
        text:
          es: Usa velocidad para enlazar con el siguiente paso de interpretacion.
          en: Use velocidad to connect with the next interpretation step.
  aceleracion_media:
    summary_rules:
      - id: aceleracion_media_summary
        when: "true"
        status: info
        text:
          es: aceleracion_media resume una lectura fisica relevante del leaf.
          en: aceleracion_media summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: aceleracion_media_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que aceleracion_media sea coherente con unidades y contexto.
          en: Check that aceleracion_media is coherent with units and context.
    physical_reading_rules:
      - id: aceleracion_media_physical
        when: "true"
        status: info
        text:
          es: La lectura de aceleracion_media debe conectarse con el fenomeno fisico descrito.
          en: The reading of aceleracion_media must connect with the described physical phenomenon.
    model_validity_rules:
      - id: aceleracion_media_validity
        when: "true"
        status: ok
        text:
          es: aceleracion_media solo es interpretable dentro del modelo elegido.
          en: aceleracion_media is interpretable only inside the chosen model.
    graph_rules:
      - id: aceleracion_media_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de aceleracion_media.
          en: The graph must reflect the role of aceleracion_media visually.
    likely_errors:
      - id: aceleracion_media_warn
        when: "true"
        status: warning
        text:
          es: No confundas aceleracion_media con otra magnitud cercana del problema.
          en: Do not confuse aceleracion_media with another nearby quantity in the problem.
    next_step_rules:
      - id: aceleracion_media_next
        when: "true"
        status: info
        text:
          es: Usa aceleracion_media para enlazar con el siguiente paso de interpretacion.
          en: Use aceleracion_media to connect with the next interpretation step.
  cambio_velocidad:
    summary_rules:
      - id: cambio_velocidad_summary
        when: "true"
        status: info
        text:
          es: cambio_velocidad resume una lectura fisica relevante del leaf.
          en: cambio_velocidad summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: cambio_velocidad_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que cambio_velocidad sea coherente con unidades y contexto.
          en: Check that cambio_velocidad is coherent with units and context.
    physical_reading_rules:
      - id: cambio_velocidad_physical
        when: "true"
        status: info
        text:
          es: La lectura de cambio_velocidad debe conectarse con el fenomeno fisico descrito.
          en: The reading of cambio_velocidad must connect with the described physical phenomenon.
    model_validity_rules:
      - id: cambio_velocidad_validity
        when: "true"
        status: ok
        text:
          es: cambio_velocidad solo es interpretable dentro del modelo elegido.
          en: cambio_velocidad is interpretable only inside the chosen model.
    graph_rules:
      - id: cambio_velocidad_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de cambio_velocidad.
          en: The graph must reflect the role of cambio_velocidad visually.
    likely_errors:
      - id: cambio_velocidad_warn
        when: "true"
        status: warning
        text:
          es: No confundas cambio_velocidad con otra magnitud cercana del problema.
          en: Do not confuse cambio_velocidad with another nearby quantity in the problem.
    next_step_rules:
      - id: cambio_velocidad_next
        when: "true"
        status: info
        text:
          es: Usa cambio_velocidad para enlazar con el siguiente paso de interpretacion.
          en: Use cambio_velocidad to connect with the next interpretation step.
  aceleracion:
    summary_rules:
      - id: aceleracion_summary
        when: "true"
        status: info
        text:
          es: aceleracion resume una lectura fisica relevante del leaf.
          en: aceleracion summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: aceleracion_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que aceleracion sea coherente con unidades y contexto.
          en: Check that aceleracion is coherent with units and context.
    physical_reading_rules:
      - id: aceleracion_physical
        when: "true"
        status: info
        text:
          es: La lectura de aceleracion debe mostrar qué cambio físico produce, qué magnitudes lo causan y por qué modifica el comportamiento del sistema.
          en: The reading of aceleracion must show which physical change it produces, which magnitudes cause it, and why it modifies the system's behavior.
    model_validity_rules:
      - id: aceleracion_validity
        when: "true"
        status: ok
        text:
          es: aceleracion solo es interpretable dentro del modelo elegido.
          en: aceleracion is interpretable only inside the chosen model.
    graph_rules:
      - id: aceleracion_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de aceleracion.
          en: The graph must reflect the role of aceleracion visually.
    likely_errors:
      - id: aceleracion_warn
        when: "true"
        status: warning
        text:
          es: No confundas aceleracion con otra magnitud cercana del problema.
          en: Do not confuse aceleracion with another nearby quantity in the problem.
    next_step_rules:
      - id: aceleracion_next
        when: "true"
        status: info
        text:
          es: Usa aceleracion para enlazar con el siguiente paso de interpretacion.
          en: Use aceleracion to connect with the next interpretation step.
  posicion_inicial:
    summary_rules:
      - id: posicion_inicial_summary
        when: "true"
        status: info
        text:
          es: posicion_inicial resume una lectura fisica relevante del leaf.
          en: posicion_inicial summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: posicion_inicial_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que posicion_inicial sea coherente con unidades, signos y contexto.
          en: Check that posicion_inicial is coherent with units, signs, and context.
    physical_reading_rules:
      - id: posicion_inicial_physical
        when: "true"
        status: info
        text:
          es: La lectura de posicion_inicial debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of posicion_inicial must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: posicion_inicial_validity
        when: "true"
        status: ok
        text:
          es: posicion_inicial solo es interpretable dentro del modelo declarado para este leaf.
          en: posicion_inicial is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: posicion_inicial_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de posicion_inicial.
          en: The graph must visually reflect the role of posicion_inicial.
    likely_errors:
      - id: posicion_inicial_warn
        when: "true"
        status: warning
        text:
          es: No confundas posicion_inicial con otra magnitud cercana del problema.
          en: Do not confuse posicion_inicial with another nearby quantity in the problem.
    next_step_rules:
      - id: posicion_inicial_next
        when: "true"
        status: info
        text:
          es: Usa posicion_inicial para enlazar con el siguiente paso de interpretacion.
          en: Use posicion_inicial to connect with the next interpretation step.
  posicion_final:
    summary_rules:
      - id: posicion_final_summary
        when: "true"
        status: info
        text:
          es: posicion_final resume una lectura fisica relevante del leaf.
          en: posicion_final summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: posicion_final_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que posicion_final sea coherente con unidades, signos y contexto.
          en: Check that posicion_final is coherent with units, signs, and context.
    physical_reading_rules:
      - id: posicion_final_physical
        when: "true"
        status: info
        text:
          es: La lectura de posicion_final debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of posicion_final must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: posicion_final_validity
        when: "true"
        status: ok
        text:
          es: posicion_final solo es interpretable dentro del modelo declarado para este leaf.
          en: posicion_final is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: posicion_final_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de posicion_final.
          en: The graph must visually reflect the role of posicion_final.
    likely_errors:
      - id: posicion_final_warn
        when: "true"
        status: warning
        text:
          es: No confundas posicion_final con otra magnitud cercana del problema.
          en: Do not confuse posicion_final with another nearby quantity in the problem.
    next_step_rules:
      - id: posicion_final_next
        when: "true"
        status: info
        text:
          es: Usa posicion_final para enlazar con el siguiente paso de interpretacion.
          en: Use posicion_final to connect with the next interpretation step.
  velocidad_inicial:
    summary_rules:
      - id: velocidad_inicial_summary
        when: "true"
        status: info
        text:
          es: velocidad_inicial resume una lectura fisica relevante del leaf.
          en: velocidad_inicial summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: velocidad_inicial_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que velocidad_inicial sea coherente con unidades, signos y contexto.
          en: Check that velocidad_inicial is coherent with units, signs, and context.
    physical_reading_rules:
      - id: velocidad_inicial_physical
        when: "true"
        status: info
        text:
          es: La lectura de velocidad_inicial debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of velocidad_inicial must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: velocidad_inicial_validity
        when: "true"
        status: ok
        text:
          es: velocidad_inicial solo es interpretable dentro del modelo declarado para este leaf.
          en: velocidad_inicial is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: velocidad_inicial_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de velocidad_inicial.
          en: The graph must visually reflect the role of velocidad_inicial.
    likely_errors:
      - id: velocidad_inicial_warn
        when: "true"
        status: warning
        text:
          es: No confundas velocidad_inicial con otra magnitud cercana del problema.
          en: Do not confuse velocidad_inicial with another nearby quantity in the problem.
    next_step_rules:
      - id: velocidad_inicial_next
        when: "true"
        status: info
        text:
          es: Usa velocidad_inicial para enlazar con el siguiente paso de interpretacion.
          en: Use velocidad_inicial to connect with the next interpretation step.
  velocidad_final:
    summary_rules:
      - id: velocidad_final_summary
        when: "true"
        status: info
        text:
          es: velocidad_final resume una lectura fisica relevante del leaf.
          en: velocidad_final summarizes a relevant physical reading of the leaf.
    coherence_rules:
      - id: velocidad_final_coherence
        when: "true"
        status: ok
        text:
          es: Comprueba que velocidad_final sea coherente con unidades, signos y contexto.
          en: Check that velocidad_final is coherent with units, signs, and context.
    physical_reading_rules:
      - id: velocidad_final_physical
        when: "true"
        status: info
        text:
          es: La lectura de velocidad_final debe explicar que representa y que condiciones fisicas permite evaluar.
          en: The reading of velocidad_final must explain what it represents and which physical conditions it helps evaluate.
    model_validity_rules:
      - id: velocidad_final_validity
        when: "true"
        status: ok
        text:
          es: velocidad_final solo es interpretable dentro del modelo declarado para este leaf.
          en: velocidad_final is interpretable only inside the declared model for this leaf.
    graph_rules:
      - id: velocidad_final_graph
        when: "true"
        status: info
        text:
          es: La grafica debe reflejar visualmente el papel de velocidad_final.
          en: The graph must visually reflect the role of velocidad_final.
    likely_errors:
      - id: velocidad_final_warn
        when: "true"
        status: warning
        text:
          es: No confundas velocidad_final con otra magnitud cercana del problema.
          en: Do not confuse velocidad_final with another nearby quantity in the problem.
    next_step_rules:
      - id: velocidad_final_next
        when: "true"
        status: info
        text:
          es: Usa velocidad_final para enlazar con el siguiente paso de interpretacion.
          en: Use velocidad_final to connect with the next interpretation step.
`;export{e as default};
