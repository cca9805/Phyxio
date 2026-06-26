const e=`version: 2\r
id: interpretacion-analisis-grafico-del-movimiento\r
leaf_id: analisis-grafico-del-movimiento\r
nombre:\r
  es: Interpretacion de Analisis grafico del movimiento\r
  en: Interpretation of Graphical Analysis of Motion\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cinematica\r
  parent_id: cinematica\r
  ruta_relativa: fisica-clasica/mecanica/cinematica/analisis-grafico-del-movimiento\r
dependencies:\r
  formulas:\r
  - velocidad_inst_pendiente_x_t\r
  - velocidad_media_intervalo\r
  - desplazamiento_area_v_t\r
  - aceleracion_inst_pendiente_v_t\r
  - aceleracion_media_intervalo\r
  - cambio_velocidad_area_a_t\r
  magnitudes:\r
  - tiempo\r
  - intervalo_tiempo\r
  - posicion\r
  - posicion_inicial\r
  - posicion_final\r
  - desplazamiento\r
  - velocidad\r
  - velocidad_inicial\r
  - velocidad_final\r
  - velocidad_media\r
  - aceleracion\r
  - aceleracion_media\r
  - cambio_velocidad\r
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
  velocidad:\r
    summary_rules:\r
    - id: velocidad_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La velocidad instantanea se obtiene como la pendiente de la tangente al grafico x-t en el instante considerado; su valor indica la rapidez y el sentido del movimiento.\r
        en: The instantaneous velocity is obtained as the slope of the tangent to the x-t graph at the considered instant; its value indicates the speed and direction of motion.\r
    coherence_rules:\r
    - id: velocidad_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de la velocidad debe coincidir con la pendiente (ascendente = positiva, descendente = negativa) y sus unidades deben ser m/s.\r
        en: The sign of the velocity must match the slope (ascending = positive, descending = negative) and its units must be m/s.\r
    physical_reading_rules:\r
    - id: velocidad_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una pendiente mayor en x-t indica que el movil avanza mas rapido porque recorre mas distancia en el mismo intervalo de tiempo.\r
        en: A steeper slope on x-t indicates the object moves faster because it covers more distance in the same time interval.\r
    model_validity_rules:\r
    - id: velocidad_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La velocidad leida como pendiente solo es valida si el grafico x-t es suficientemente suave; un salto vertical implicaria velocidad infinita, lo cual senala un error en los datos.\r
        en: The velocity read as a slope is valid only if the x-t graph is sufficiently smooth; a vertical jump would imply infinite velocity, signalling a data error.\r
    graph_rules:\r
    - id: velocidad_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico x-t, traza la tangente en el punto de interes; su inclinacion respecto al eje t es la velocidad en ese instante.\r
        en: On the x-t graph, draw the tangent at the point of interest; its inclination relative to the t-axis is the velocity at that instant.\r
    likely_errors:\r
    - id: velocidad_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas la altura del punto en x-t (que es la posicion) con la pendiente (que es la velocidad). Leer la ordenada como velocidad es un error frecuente.\r
        en: Do not confuse the height of a point on x-t (which is the position) with the slope (which is the velocity). Reading the ordinate as velocity is a common mistake.\r
    next_step_rules:\r
    - id: velocidad_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con la velocidad obtenida, puedes construir el grafico v-t punto a punto y luego calcular desplazamientos como areas.\r
        en: With the velocity obtained, you can build the v-t graph point by point and then calculate displacements as areas.\r
  velocidad_media:\r
    summary_rules:\r
    - id: velocidad_media_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La velocidad media es el cociente entre el desplazamiento total y el intervalo de tiempo; describe el ritmo medio de avance a lo largo del tramo analizado.\r
        en: The average velocity is the ratio of total displacement to time interval; it describes the mean rate of advance over the analysed segment.\r
    coherence_rules:\r
    - id: velocidad_media_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La velocidad media debe estar entre el valor minimo y el maximo de v en el intervalo. Si cae fuera, hay un error aritmetico.\r
        en: The average velocity must lie between the minimum and maximum values of v in the interval. If it falls outside, there is an arithmetic error.\r
    physical_reading_rules:\r
    - id: velocidad_media_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una velocidad media cercana al valor de crucero indica que las fases de aceleracion y frenado son breves en comparacion con el tramo a velocidad constante; si es mucho menor, las fases transitorias dominan.\r
        en: An average velocity close to cruising speed indicates that the acceleration and braking phases are brief compared to the constant-speed segment; if much lower, the transient phases dominate.\r
    model_validity_rules:\r
    - id: velocidad_media_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El calculo de velocidad media supone que el grafico cubre todo el intervalo de interes sin datos faltantes; si hay huecos temporales, el resultado es una estimacion parcial.\r
        en: The average-velocity calculation assumes the graph covers the entire interval of interest without missing data; if there are time gaps, the result is a partial estimate.\r
    graph_rules:\r
    - id: velocidad_media_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Graficamente, la velocidad media equivale a la altura de un rectangulo con la misma base temporal y la misma area que la region bajo v-t.\r
        en: Graphically, the average velocity equals the height of a rectangle with the same time base and the same area as the region under v-t.\r
    likely_errors:\r
    - id: velocidad_media_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No promedies velocidades de tramos de distinta duracion sin ponderar por tiempo. La media aritmetica de velocidades solo coincide con la velocidad media si todos los tramos duran lo mismo.\r
        en: Do not average velocities of segments with different durations without weighting by time. The arithmetic mean of velocities equals the average velocity only if all segments last the same time.\r
    next_step_rules:\r
    - id: velocidad_media_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Compara la velocidad media con la velocidad instantanea en distintos puntos para identificar donde el movil iba mas rapido o mas lento que el promedio.\r
        en: Compare the average velocity with the instantaneous velocity at different points to identify where the object was faster or slower than the average.\r
  desplazamiento:\r
    summary_rules:\r
    - id: desplazamiento_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El desplazamiento se obtiene como el area con signo bajo la curva v-t entre los instantes inicial y final.\r
        en: The displacement is obtained as the signed area under the v-t curve between the initial and final instants.\r
    coherence_rules:\r
    - id: desplazamiento_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El desplazamiento debe tener unidades de metros y su signo debe ser coherente con la direccion predominante de la velocidad en el intervalo.\r
        en: The displacement must have units of metres and its sign must be consistent with the predominant direction of velocity in the interval.\r
    physical_reading_rules:\r
    - id: desplazamiento_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un desplazamiento grande indica que el movil mantuvo velocidades altas durante un tiempo prolongado, porque el area bajo v-t crece tanto con la altura (velocidad) como con la base (duracion).\r
        en: A large displacement indicates the object maintained high velocities for a long time, because the area under v-t grows with both height (velocity) and base (duration).\r
    model_validity_rules:\r
    - id: desplazamiento_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El calculo del area como suma de trapecios es exacto cuando los tramos son lineales; si la curva v-t es curva, el resultado es una aproximacion que mejora al subdividir en mas tramos.\r
        en: The area calculation as a sum of trapezoids is exact when the segments are linear; if the v-t curve is curved, the result is an approximation that improves with finer subdivision.\r
    graph_rules:\r
    - id: desplazamiento_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Colorea el area entre la curva v-t y el eje t; las regiones sobre el eje son desplazamiento positivo y las regiones bajo el eje son desplazamiento negativo.\r
        en: Shade the area between the v-t curve and the t-axis; regions above the axis are positive displacement and regions below are negative displacement.\r
    likely_errors:\r
    - id: desplazamiento_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas desplazamiento (area neta con signo) con distancia total recorrida (suma de valores absolutos). Si v-t cruza el eje, ambas cantidades difieren.\r
        en: Do not confuse displacement (net signed area) with total distance travelled (sum of absolute values). If v-t crosses the axis, the two quantities differ.\r
    next_step_rules:\r
    - id: desplazamiento_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con el desplazamiento y el intervalo de tiempo, calcula la velocidad media para obtener una vision global del movimiento.\r
        en: With the displacement and time interval, calculate the average velocity to obtain a global view of the motion.\r
  intervalo_tiempo:\r
    summary_rules:\r
    - id: intervalo_tiempo_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El intervalo de tiempo es la base horizontal del tramo analizado en cualquier grafico cinematico.\r
        en: The time interval is the horizontal base of the analysed segment on any kinematic graph.\r
    coherence_rules:\r
    - id: intervalo_tiempo_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Los intervalos de cada fase deben sumar el intervalo total; si no coinciden, se ha omitido o duplicado un tramo.\r
        en: The intervals of each phase must add up to the total interval; if they do not match, a segment has been omitted or duplicated.\r
    physical_reading_rules:\r
    - id: intervalo_tiempo_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un intervalo de tiempo mas largo en una fase de velocidad constante produce un desplazamiento proporcionalmente mayor, porque el area del rectangulo crece linealmente con la base.\r
        en: A longer time interval in a constant-velocity phase produces a proportionally larger displacement, because the area of the rectangle grows linearly with the base.\r
    model_validity_rules:\r
    - id: intervalo_tiempo_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El modelo supone que las transiciones entre fases son instantaneas; si el cambio real es gradual, parte del intervalo de transicion queda mal asignado al tramo contiguo.\r
        en: The model assumes that transitions between phases are instantaneous; if the actual change is gradual, part of the transition interval is misassigned to the adjacent segment.\r
    graph_rules:\r
    - id: intervalo_tiempo_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico, el intervalo de tiempo se lee directamente del eje horizontal como la distancia entre los extremos del tramo.\r
        en: On the graph, the time interval is read directly from the horizontal axis as the distance between the segment endpoints.\r
    likely_errors:\r
    - id: intervalo_tiempo_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas el instante de tiempo (lectura absoluta del eje) con el intervalo de tiempo (diferencia entre dos instantes).\r
        en: Do not confuse the time instant (absolute axis reading) with the time interval (difference between two instants).\r
    next_step_rules:\r
    - id: intervalo_tiempo_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica que la suma de todos los intervalos parciales coincida con el intervalo total del grafico como control de consistencia.\r
        en: Verify that the sum of all partial intervals matches the total graph interval as a consistency check.\r
  aceleracion:\r
    summary_rules:\r
    - id: aceleracion_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La aceleracion instantanea se obtiene como la pendiente de la tangente al grafico v-t en el instante considerado.\r
        en: The instantaneous acceleration is obtained as the slope of the tangent to the v-t graph at the considered instant.\r
    coherence_rules:\r
    - id: aceleracion_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de la aceleracion debe coincidir con la subida o bajada de la curva v-t, y sus unidades deben ser m/s^2.\r
        en: The sign of the acceleration must match the rise or fall of the v-t curve, and its units must be m/s^2.\r
    physical_reading_rules:\r
    - id: aceleracion_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una aceleracion positiva indica que la velocidad crece porque la fuerza neta actua en la direccion del movimiento; una aceleracion negativa indica que la velocidad disminuye porque la fuerza neta se opone al movimiento.\r
        en: A positive acceleration indicates that velocity increases because the net force acts in the direction of motion; a negative acceleration indicates that velocity decreases because the net force opposes the motion.\r
    model_validity_rules:\r
    - id: aceleracion_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura de aceleracion como pendiente constante es valida solo si el tramo v-t es recto; si la curva tiene curvatura, la aceleracion varia y la pendiente media no coincide con la instantanea.\r
        en: Reading acceleration as a constant slope is valid only if the v-t segment is straight; if the curve is curved, the acceleration varies and the average slope does not match the instantaneous one.\r
    graph_rules:\r
    - id: aceleracion_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico v-t, la pendiente del segmento recto es la aceleracion; si la curva no es recta, traza la tangente en el punto de interes.\r
        en: On the v-t graph, the slope of the straight segment is the acceleration; if the curve is not straight, draw the tangent at the point of interest.\r
    likely_errors:\r
    - id: aceleracion_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas una pendiente pronunciada en x-t (que indica velocidad alta) con aceleracion. La aceleracion se lee de la pendiente de v-t, no de x-t.\r
        en: Do not confuse a steep slope on x-t (which indicates high velocity) with acceleration. Acceleration is read from the slope of v-t, not x-t.\r
    next_step_rules:\r
    - id: aceleracion_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con la aceleracion conocida, puedes construir el grafico a-t y calcular el cambio de velocidad en otros intervalos como area bajo a-t.\r
        en: With the acceleration known, you can build the a-t graph and calculate the velocity change in other intervals as the area under a-t.\r
  cambio_velocidad:\r
    summary_rules:\r
    - id: cambio_velocidad_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El cambio de velocidad se obtiene como el area bajo la curva a-t entre los instantes inicial y final.\r
        en: The velocity change is obtained as the area under the a-t curve between the initial and final instants.\r
    coherence_rules:\r
    - id: cambio_velocidad_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El cambio de velocidad debe tener unidades de m/s y su signo debe ser coherente con el signo predominante de la aceleracion en ese intervalo.\r
        en: The velocity change must have units of m/s and its sign must be consistent with the predominant sign of the acceleration in that interval.\r
    physical_reading_rules:\r
    - id: cambio_velocidad_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un cambio de velocidad grande indica que la aceleracion fue intensa o que actuo durante mucho tiempo, porque el area bajo a-t depende tanto de la magnitud de la aceleracion como de la duracion.\r
        en: A large velocity change indicates that the acceleration was intense or lasted a long time, because the area under a-t depends on both the magnitude of the acceleration and the duration.\r
    model_validity_rules:\r
    - id: cambio_velocidad_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si la aceleracion no es constante, el area rectangular es solo una aproximacion; subdivide el tramo o usa la integral exacta para mayor precision.\r
        en: If the acceleration is not constant, the rectangular area is only an approximation; subdivide the segment or use the exact integral for greater precision.\r
    graph_rules:\r
    - id: cambio_velocidad_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el grafico a-t, el area entre la curva y el eje t mide directamente cuantos m/s gano o perdio el movil en ese intervalo.\r
        en: On the a-t graph, the area between the curve and the t-axis directly measures how many m/s the object gained or lost in that interval.\r
    likely_errors:\r
    - id: cambio_velocidad_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas el cambio de velocidad (area bajo a-t) con la velocidad final. La velocidad final es la velocidad inicial mas el cambio de velocidad.\r
        en: Do not confuse the velocity change (area under a-t) with the final velocity. The final velocity is the initial velocity plus the velocity change.\r
    next_step_rules:\r
    - id: cambio_velocidad_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Suma el cambio de velocidad a la velocidad inicial para obtener la velocidad final y luego verifica con la lectura directa del grafico v-t.\r
        en: Add the velocity change to the initial velocity to get the final velocity, then verify against the direct reading from the v-t graph.\r
  aceleracion_media:\r
    summary_rules:\r
    - id: aceleracion_media_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La aceleracion media es el cociente entre el cambio de velocidad y el intervalo de tiempo; describe el ritmo medio de cambio de velocidad a lo largo del tramo analizado.\r
        en: The average acceleration is the ratio of velocity change to time interval; it describes the mean rate of velocity change over the analysed segment.\r
    coherence_rules:\r
    - id: aceleracion_media_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La aceleracion media debe estar entre el valor minimo y el maximo de a en el intervalo. Si cae fuera, hay un error aritmetico.\r
        en: The average acceleration must lie between the minimum and maximum values of a in the interval. If it falls outside, there is an arithmetic error.\r
    physical_reading_rules:\r
    - id: aceleracion_media_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una aceleracion media cercana al valor instantaneo en todo el tramo indica que la aceleracion fue practicamente constante; si difieren mucho, el movimiento tiene variaciones bruscas internas.\r
        en: An average acceleration close to the instantaneous value throughout the segment indicates that the acceleration was nearly constant; large differences signal abrupt internal variations.\r
    model_validity_rules:\r
    - id: aceleracion_media_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El calculo de aceleracion media supone que el grafico cubre todo el intervalo de interes sin datos faltantes; si hay huecos temporales, el resultado es una estimacion parcial.\r
        en: The average-acceleration calculation assumes the graph covers the entire interval of interest without missing data; if there are time gaps, the result is a partial estimate.\r
    graph_rules:\r
    - id: aceleracion_media_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Graficamente, la aceleracion media equivale a la pendiente de la recta que une los puntos (t_i, v_i) y (t_f, v_f) en la grafica v-t.\r
        en: Graphically, the average acceleration equals the slope of the line connecting the points (t_i, v_i) and (t_f, v_f) on the v-t graph.\r
    likely_errors:\r
    - id: aceleracion_media_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No promedies aceleraciones de tramos de distinta duracion sin ponderar por tiempo. La media aritmetica de aceleraciones solo coincide con la aceleracion media si todos los tramos duran lo mismo.\r
        en: Do not average accelerations of segments with different durations without weighting by time. The arithmetic mean of accelerations equals the average acceleration only if all segments last the same time.\r
    next_step_rules:\r
    - id: aceleracion_media_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Compara la aceleracion media con la aceleracion instantanea en distintos puntos para identificar donde el movil se estaba acelerando mas o menos que el promedio.\r
        en: Compare the average acceleration with the instantaneous acceleration at different points to identify where the object was accelerating more or less than the average.\r
`;export{e as default};
