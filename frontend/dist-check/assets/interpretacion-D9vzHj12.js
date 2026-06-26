const e=`version: 2\r
id: interpretacion-sistemas-referencia\r
leaf_id: sistemas-referencia\r
nombre:\r
  es: Interpretacion de Sistemas referencia\r
  en: Interpretation of Reference Frames\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cinematica\r
  parent_id: movimiento-relativo\r
  ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-relativo/sistemas-referencia\r
dependencies:\r
  formulas:\r
    - trans_galileo_pos\r
    - invarianza_distancia\r
    - invarianza_tiempo\r
    - trans_galileo_vel\r
  magnitudes:\r
    - O\r
    - frame_sigma\r
    - r_vec\r
    - v_frame\r
    - t_global\r
    - v\r
    - v_prime\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura grafica\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  O:\r
    summary_rules:\r
      - id: O_summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: El origen[[O]]fija el punto de referencia desde el que se miden las posiciones.\r
          en: The origin[[O]]sets the reference point from which positions are measured.\r
    coherence_rules:\r
      - id: O_coherence_rule\r
        when: "true"\r
        status: ok\r
        text:\r
          es: Comprueba que el origen[[O]]pertenece al marco declarado antes de leer cualquier posici?n.\r
          en: Check that the origin[[O]]belongs to the declared frame before reading any position.\r
    coherence_checks:\r
      - id: O_coherence\r
        when: "true"\r
        status: ok\r
        text:\r
          es: Comprueba que el origen[[O]]sea coherente con el sistema de coordenadas elegido.\r
          en: Check that the origin[[O]]is coherent with the chosen coordinate system.\r
    physical_reading_rules:\r
      - id: O_physical\r
        when: "true"\r
        status: info\r
        text:\r
          es: El origen[[O]]permite distinguir qué parte de la posición se debe a la ubicación del observador.\r
          en: The origin[[O]]allows distinguishing which part of the position is due to the observer's location.\r
    model_validity_rules:\r
      - id: O_validity\r
        when: "true"\r
        status: ok\r
        text:\r
          es: El origen[[O]]debe permanecer fijo respecto a su marco[[frame_sigma]].\r
          en: The origin[[O]]must remain fixed relative to its frame[[frame_sigma]].\r
    graph_rules:\r
      - id: O_graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: La gráfica debe mostrar claramente el punto de origen[[O]].\r
          en: The graph must clearly show the origin point[[O]].\r
    likely_errors:\r
      - id: O_warn\r
        when: "true"\r
        status: warning\r
        text:\r
          es: No confundas el origen[[O]]de un marco con el de otro marco en movimiento.\r
          en: Do not confuse the origin[[O]]of one frame with that of another moving frame.\r
    next_step_rules:\r
      - id: O_next\r
        when: "true"\r
        status: info\r
        text:\r
          es: Una vez fijado el origen[[O]], procede a leer el vector de posición[[r_vec]].\r
          en: Once the origin[[O]]is fixed, proceed to read the position vector[[r_vec]].\r
  frame_sigma:\r
    summary_rules:\r
      - id: frame_sigma_summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: El marco de referencia[[frame_sigma]]fija desde qué observador se describe la escena.\r
          en: The reference frame[[frame_sigma]]fixes from which observer the scene is described.\r
    coherence_rules:\r
      - id: frame_sigma_coherence\r
        when: "true"\r
        status: ok\r
        text:\r
          es: Comprueba que orígenes, signos y velocidades pertenecen al mismo marco[[frame_sigma]]declarado.\r
          en: Check that origins, signs, and velocities belong to the same declared frame[[frame_sigma]].\r
    physical_reading_rules:\r
      - id: frame_sigma_physical\r
        when: "true"\r
        status: info\r
        text:\r
          es: Cambiar el marco[[frame_sigma]]cambia la descripción del movimiento sin cambiar el evento físico.\r
          en: Changing the frame[[frame_sigma]]changes the motion description without changing the physical event.\r
    model_validity_rules:\r
      - id: frame_sigma_validity\r
        when: "true"\r
        status: ok\r
        text:\r
          es: El marco[[frame_sigma]]es interpretable mientras la comparación entre marcos siga siendo galileana.\r
          en: The frame[[frame_sigma]]is interpretable while the comparison between frames remains Galilean.\r
    graph_rules:\r
      - id: frame_sigma_graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: La gráfica debe dejar claro qué observador está leyendo la trayectoria.\r
          en: The graph should make clear which observer is reading the trajectory.\r
    likely_errors:\r
      - id: frame_sigma_warn\r
        when: "true"\r
        status: warning\r
        text:\r
          es: No mezcles coordenadas de dos marcos[[frame_sigma]]distintos como si pertenecieran al mismo observador.\r
          en: Do not mix coordinates from two different frames[[frame_sigma]]as if they belonged to the same observer.\r
    next_step_rules:\r
      - id: frame_sigma_next\r
        when: "true"\r
        status: info\r
        text:\r
          es: Declara el marco[[frame_sigma]]antes de interpretar posiciones o velocidades.\r
          en: Declare the frame[[frame_sigma]]before interpreting positions or velocities.\r
  r_vec:\r
    summary_rules:\r
      - id: r_vec_summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: El vector de posición[[r_vec]]resume la ubicación medida desde el origen del marco elegido.\r
          en: The position vector[[r_vec]]summarizes the location measured from the chosen frame's origin.\r
    coherence_rules:\r
      - id: r_vec_coherence\r
        when: "true"\r
        status: ok\r
        text:\r
          es: Comprueba que el vector[[r_vec]]se mide desde el origen correcto y con el signo declarado.\r
          en: Check that the vector[[r_vec]]is measured from the correct origin and with the declared sign.\r
    physical_reading_rules:\r
      - id: r_vec_physical\r
        when: "true"\r
        status: info\r
        text:\r
          es: El vector[[r_vec]]cambia cuando cambia el observador porque cambia el origen desde el que se mide.\r
          en: The vector[[r_vec]]changes when the observer changes because the measuring origin changes.\r
    model_validity_rules:\r
      - id: r_vec_validity\r
        when: "true"\r
        status: ok\r
        text:\r
          es: El vector[[r_vec]]solo es comparable entre marcos si el cambio de referencia está bien declarado.\r
          en: The vector[[r_vec]]is comparable across frames only if the reference change is clearly declared.\r
    graph_rules:\r
      - id: r_vec_graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: La gráfica debe mostrar desde qué origen se está leyendo la posición.\r
          en: The graph should show from which origin the position is being read.\r
    likely_errors:\r
      - id: r_vec_warn\r
        when: "true"\r
        status: warning\r
        text:\r
          es: No interpretes el vector[[r_vec]]como una posición absoluta independiente del marco.\r
          en: Do not interpret the vector[[r_vec]]as an absolute frame-independent position.\r
    next_step_rules:\r
      - id: r_vec_next\r
        when: "true"\r
        status: info\r
        text:\r
          es: Traduce el vector[[r_vec]]al nuevo marco solo después de fijar observador y origen.\r
          en: Translate the vector[[r_vec]]to the new frame only after fixing observer and origin.\r
  v_frame:\r
    summary_rules:\r
      - id: v_frame_summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: La velocidad del marco[[v_frame]]recoge el movimiento del marco móvil respecto al marco de comparación.\r
          en: The frame velocity[[v_frame]]captures the motion of the moving frame relative to the comparison frame.\r
    coherence_rules:\r
      - id: v_frame_coherence\r
        when: "true"\r
        status: ok\r
        text:\r
          es: Comprueba que la velocidad[[v_frame]]no se confunde con la velocidad propia del móvil observado.\r
          en: Check that the velocity[[v_frame]]is not confused with the observed body's own velocity.\r
    physical_reading_rules:\r
      - id: v_frame_physical\r
        when: "true"\r
        status: info\r
        text:\r
          es: La velocidad[[v_frame]]explica la parte del cambio de descripción debida al movimiento del observador.\r
          en: The velocity[[v_frame]]explains the part of the description change caused by the observer's motion.\r
    model_validity_rules:\r
      - id: v_frame_validity\r
        when: "true"\r
        status: ok\r
        text:\r
          es: La velocidad[[v_frame]]se interpreta de forma simple mientras la velocidad relativa entre marcos sea constante.\r
          en: The velocity[[v_frame]]is simply interpreted while the relative speed between frames remains constant.\r
    graph_rules:\r
      - id: v_frame_graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: La gráfica debe distinguir la velocidad[[v_frame]]de la velocidad interna del móvil.\r
          en: The graph should distinguish the velocity[[v_frame]]from the body's internal velocity.\r
    likely_errors:\r
      - id: v_frame_warn\r
        when: "true"\r
        status: warning\r
        text:\r
          es: No sumes la velocidad[[v_frame]]sin decidir antes a qué observador pertenece cada velocidad.\r
          en: Do not add the velocity[[v_frame]]before deciding which observer each velocity belongs to.\r
    next_step_rules:\r
      - id: v_frame_next\r
        when: "true"\r
        status: info\r
        text:\r
          es: Usa la velocidad[[v_frame]]para traducir la descripción, no para redefinir el movimiento interno.\r
          en: Use the velocity[[v_frame]]to translate the description, not to redefine the internal motion.\r
  v:\r
    summary_rules:\r
      - id: v_summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: La velocidad[[v]]resume el ritmo de cambio de posición medido desde el marco fijo.\r
          en: The velocity[[v]]summarizes the rate of position change measured from the fixed frame.\r
    coherence_rules:\r
      - id: v_coherence\r
        when: "true"\r
        status: ok\r
        text:\r
          es: Comprueba que la velocidad[[v]]sea coherente con unidades, signos y contexto.\r
          en: Check that the velocity[[v]]is coherent with units, signs, and context.\r
    physical_reading_rules:\r
      - id: v_physical\r
        when: "true"\r
        status: info\r
        text:\r
          es: La lectura de la velocidad[[v]]debe explicar qué representa respecto al observador fijo.\r
          en: The reading of the velocity[[v]]must explain what it represents relative to the fixed observer.\r
    model_validity_rules:\r
      - id: v_validity\r
        when: "true"\r
        status: ok\r
        text:\r
          es: La velocidad[[v]]solo es interpretable dentro del modelo galileano declarado.\r
          en: The velocity[[v]]is interpretable only inside the declared Galilean model.\r
    graph_rules:\r
      - id: v_graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: La gráfica debe reflejar visualmente el valor de la velocidad[[v]].\r
          en: The graph must visually reflect the value of the velocity[[v]].\r
    likely_errors:\r
      - id: v_warn\r
        when: "true"\r
        status: warning\r
        text:\r
          es: No confundas la velocidad[[v]]con la velocidad relativa del marco.\r
          en: Do not confuse the velocity[[v]]with the frame's relative velocity.\r
    next_step_rules:\r
      - id: v_next\r
        when: "true"\r
        status: info\r
        text:\r
          es: Usa la velocidad[[v]]para enlazar con el siguiente paso de interpretación cinemática.\r
          en: Use the velocity[[v]]to connect with the next kinematic interpretation step.\r
  v_prime:\r
    summary_rules:\r
      - id: v_prime_summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: La velocidad[[v_prime]]resume el movimiento del objeto visto desde el marco móvil.\r
          en: The velocity[[v_prime]]summarizes the object's motion as seen from the moving frame.\r
    coherence_rules:\r
      - id: v_prime_coherence\r
        when: "true"\r
        status: ok\r
        text:\r
          es: Comprueba que la velocidad[[v_prime]]sea coherente con el movimiento interno del sistema.\r
          en: Check that the velocity[[v_prime]]is coherent with the system's internal motion.\r
    physical_reading_rules:\r
      - id: v_prime_physical\r
        when: "true"\r
        status: info\r
        text:\r
          es: La velocidad[[v_prime]]permite evaluar el comportamiento del móvil ignorando el desplazamiento del marco.\r
          en: The velocity[[v_prime]]allows evaluating the body's behavior ignoring the frame's displacement.\r
    model_validity_rules:\r
      - id: v_prime_validity\r
        when: "true"\r
        status: ok\r
        text:\r
          es: La velocidad[[v_prime]]solo es válida si el marco móvil no acelera.\r
          en: The velocity[[v_prime]]is only valid if the moving frame does not accelerate.\r
    graph_rules:\r
      - id: v_prime_graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: La gráfica debe mostrar la velocidad[[v_prime]]respecto a los ejes móviles.\r
          en: The graph must show the velocity[[v_prime]]relative to the moving axes.\r
    likely_errors:\r
      - id: v_prime_warn\r
        when: "true"\r
        status: warning\r
        text:\r
          es: No confundas la velocidad[[v_prime]]con la velocidad total observada desde tierra.\r
          en: Do not confuse the velocity[[v_prime]]with the total velocity observed from the ground.\r
    next_step_rules:\r
      - id: v_prime_next\r
        when: "true"\r
        status: info\r
        text:\r
          es: Usa la velocidad[[v_prime]]para calcular la evolución temporal dentro del marco relativo.\r
          en: Use the velocity[[v_prime]]to compute the temporal evolution within the relative frame.\r
\r
`;export{e as default};
