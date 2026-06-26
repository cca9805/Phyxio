const e=`version: 1\r
magnitudes:\r
- id: tiempo\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Variable independiente que ordena cronológicamente los eventos del movimiento.\r
    en: Independent variable that chronologically orders the events of motion.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Suponer que el tiempo siempre empieza en cero; el origen temporal es una elección de referencia, no un hecho físico.\r
  typical_range: "Desde fracciones de segundo en caída libre hasta minutos en recorridos urbanos: 0.1 s – 600 s."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El tiempo transcurrido es siempre no negativo; solo los intervalos pueden tener signo si se invierte el orden de los instantes.\r
      en: Elapsed time is always non-negative; only intervals can carry a sign if the order of instants is reversed.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El instante t = 0 marca el origen temporal elegido; no implica ausencia de movimiento.\r
      en: The instant t = 0 marks the chosen time origin; it does not imply absence of motion.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "[0, 600]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_horizontal_x_t\r
    - eje_horizontal_v_t\r
    - eje_horizontal_a_t\r
  pedagogical_notes: El tiempo es el eje horizontal en las tres gráficas cinemáticas; confundirlo con una magnitud vertical es un error frecuente de lectura gráfica.\r
\r
- id: intervalo_tiempo\r
  symbol: \\Delta t\r
  nombre:\r
    es: intervalo de tiempo\r
    en: time interval\r
  descripcion:\r
    es: Diferencia entre dos instantes temporales que delimita un tramo del movimiento.\r
    en: Difference between two time instants that bounds a segment of motion.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Confundir el intervalo de tiempo con un instante concreto; el intervalo es una duración, no un momento.\r
  typical_range: "De 1 s a 60 s en problemas cinemáticos escolares."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo cuando el instante final es posterior al inicial; negativo solo si se invierte la convención cronológica.\r
      en: Positive when the final instant is after the initial one; negative only if the chronological convention is reversed.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Un intervalo nulo impide calcular velocidades medias (división entre cero).\r
      en: A zero interval prevents computing average velocities (division by zero).\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "(0, 120]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - base_area_v_t\r
    - base_area_a_t\r
  pedagogical_notes: En la gráfica v-t, el intervalo de tiempo es la base horizontal del rectángulo o trapecio cuya área da el desplazamiento.\r
\r
- id: posicion\r
  symbol: x\r
  nombre:\r
    es: posición\r
    en: position\r
  descripcion:\r
    es: Coordenada espacial del móvil respecto a un origen elegido sobre el eje de movimiento.\r
    en: Spatial coordinate of the object relative to a chosen origin on the axis of motion.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Confundir la posición (coordenada con signo) con la distancia recorrida (siempre positiva).\r
  typical_range: "Desde metros en laboratorio hasta kilómetros en tráfico: -1000 m a +1000 m."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo a un lado del origen, negativo al lado opuesto, según la convención de ejes elegida.\r
      en: Positive on one side of the origin, negative on the other, depending on the chosen axis convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El móvil pasa por el origen de coordenadas; no significa que esté en reposo.\r
      en: The object passes through the coordinate origin; it does not mean it is at rest.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-1000, 1000]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_vertical_x_t\r
  pedagogical_notes: La altura de la curva en el gráfico x-t indica dónde está el móvil, no cuánto se ha movido; la pendiente indica la velocidad.\r
\r
- id: posicion_inicial\r
  symbol: x_i\r
  nombre:\r
    es: posición inicial\r
    en: initial position\r
  descripcion:\r
    es: Posición del móvil en el instante inicial del intervalo analizado.\r
    en: Position of the object at the initial instant of the analysed interval.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Asumir que la posición inicial siempre vale cero; depende del origen elegido.\r
  typical_range: "Variable según el problema; a menudo 0 m por elección de referencia."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Puede ser positiva, negativa o cero dependiendo de la posición del origen.\r
      en: Can be positive, negative or zero depending on the origin location.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El móvil arranca exactamente en el origen de coordenadas.\r
      en: The object starts exactly at the coordinate origin.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-500, 500]"\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - analisis-grafico-del-movimiento\r
  graph_binding:\r
    channels:\r
    - ordenada_inicio_x_t\r
  pedagogical_notes: En la gráfica x-t, la posición inicial es la ordenada donde la curva comienza (intersección con el eje vertical en el instante inicial).\r
\r
- id: posicion_final\r
  symbol: x_f\r
  nombre:\r
    es: posición final\r
    en: final position\r
  descripcion:\r
    es: Posición del móvil al final del intervalo analizado.\r
    en: Position of the object at the end of the analysed interval.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Creer que la posición final siempre es mayor que la inicial; si el móvil retrocede, puede ser menor.\r
  typical_range: "Variable según el problema."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Puede ser positiva o negativa según la convención de ejes.\r
      en: Can be positive or negative depending on the axis convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El móvil termina exactamente en el origen de coordenadas.\r
      en: The object ends exactly at the coordinate origin.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-500, 500]"\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - analisis-grafico-del-movimiento\r
  graph_binding:\r
    channels:\r
    - ordenada_fin_x_t\r
  pedagogical_notes: En la gráfica x-t, la posición final es la ordenada donde termina la curva en el instante final del intervalo; leer la diferencia visual entre inicio y fin da directamente el desplazamiento.\r
\r
- id: desplazamiento\r
  symbol: \\Delta x\r
  nombre:\r
    es: desplazamiento\r
    en: displacement\r
  descripcion:\r
    es: Cambio neto de posición entre dos instantes; equivale al área con signo bajo la curva v-t.\r
    en: Net change in position between two instants; equals the signed area under the v-t curve.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Confundir desplazamiento con distancia recorrida; el desplazamiento puede ser negativo o cero aunque el objeto se haya movido.\r
  typical_range: "De -500 m a +500 m en cinemática escolar."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo si el móvil avanza en el sentido positivo del eje; negativo si retrocede.\r
      en: Positive if the object advances in the positive axis direction; negative if it moves backwards.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El móvil vuelve a su posición de partida; se ha movido pero el cambio neto es cero.\r
      en: The object returns to its starting position; it has moved but the net change is zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-500, 500]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - area_bajo_v_t\r
  pedagogical_notes: El desplazamiento es el área con signo bajo la curva v-t; las áreas por encima del eje son positivas y las de debajo, negativas.\r
\r
- id: velocidad\r
  symbol: v\r
  nombre:\r
    es: velocidad\r
    en: velocity\r
  descripcion:\r
    es: Tasa de cambio temporal de la posición; coincide con la pendiente de la tangente a la curva x-t.\r
    en: Time rate of change of position; equals the slope of the tangent to the x-t curve.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Confundir velocidad (con signo, indica dirección) con rapidez (módulo, siempre positiva).\r
  typical_range: "De -30 m/s a +30 m/s en tráfico urbano y laboratorio."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo si el móvil se desplaza en el sentido positivo del eje; negativo si va en sentido contrario.\r
      en: Positive if the object moves in the positive axis direction; negative if it moves in the opposite direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El móvil está momentáneamente en reposo o cambiando de sentido (punto de retorno).\r
      en: The object is momentarily at rest or reversing direction (turning point).\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-30, 30]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_vertical_v_t\r
    - pendiente_x_t\r
  pedagogical_notes: La velocidad aparece como la altura de la curva en v-t y como la pendiente de la curva en x-t; confundir estos dos roles gráficos es el error de lectura más común.\r
\r
- id: velocidad_inicial\r
  symbol: v_0\r
  nombre:\r
    es: velocidad inicial\r
    en: initial velocity\r
  descripcion:\r
    es: Velocidad del móvil en el instante inicial del intervalo estudiado.\r
    en: Velocity of the object at the initial instant of the studied interval.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Suponer que la velocidad inicial siempre es cero; solo es cero cuando el móvil parte del reposo.\r
  typical_range: "De 0 a 30 m/s en problemas cinemáticos típicos."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Indica el sentido del movimiento en el instante inicial respecto al eje elegido.\r
      en: Indicates the direction of motion at the initial instant with respect to the chosen axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El móvil parte del reposo.\r
      en: The object starts from rest.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-30, 30]"\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - analisis-grafico-del-movimiento\r
  graph_binding:\r
    channels:\r
    - ordenada_inicio_v_t\r
  pedagogical_notes: En la gráfica v-t, la velocidad inicial es la ordenada donde arranca la curva en t inicial.\r
\r
- id: velocidad_final\r
  symbol: v_f\r
  nombre:\r
    es: velocidad final\r
    en: final velocity\r
  descripcion:\r
    es: Velocidad del móvil al final del intervalo estudiado.\r
    en: Velocity of the object at the end of the studied interval.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Creer que la velocidad final es siempre la máxima; si el objeto frena, la velocidad final puede ser menor que la inicial.\r
  typical_range: "De 0 a 30 m/s."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Indica el sentido del movimiento en el instante final.\r
      en: Indicates the direction of motion at the final instant.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El móvil se detiene al final del intervalo.\r
      en: The object comes to rest at the end of the interval.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-30, 30]"\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for:\r
    - analisis-grafico-del-movimiento\r
  graph_binding:\r
    channels:\r
    - ordenada_fin_v_t\r
  pedagogical_notes: En la gráfica v-t, la velocidad final es la ordenada donde termina la curva; la diferencia visual entre inicio y fin mide el cambio de velocidad.\r
\r
- id: velocidad_media\r
  symbol: v_{\\mathrm{med}}\r
  nombre:\r
    es: velocidad media\r
    en: average velocity\r
  descripcion:\r
    es: Cociente entre el desplazamiento total y el intervalo de tiempo; corresponde a la pendiente de la secante en el gráfico x-t.\r
    en: Ratio of total displacement to time interval; corresponds to the secant slope on the x-t graph.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Confundir velocidad media con la media aritmética de velocidades; solo coinciden si la aceleración es constante.\r
  typical_range: "De -20 m/s a +20 m/s."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positiva si el desplazamiento neto es en sentido positivo; negativa en caso contrario.\r
      en: Positive if the net displacement is in the positive direction; negative otherwise.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El desplazamiento neto es cero, aunque el objeto se haya movido de ida y vuelta.\r
      en: The net displacement is zero, even though the object may have moved back and forth.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-20, 20]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - pendiente_secante_x_t\r
  pedagogical_notes: Gráficamente, la velocidad media es la pendiente de la recta que une los puntos inicial y final de la curva x-t en el intervalo considerado.\r
\r
- id: aceleracion\r
  symbol: a\r
  nombre:\r
    es: aceleración\r
    en: acceleration\r
  descripcion:\r
    es: Tasa de cambio temporal de la velocidad; coincide con la pendiente de la tangente a la curva v-t.\r
    en: Time rate of change of velocity; equals the slope of the tangent to the v-t curve.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Creer que aceleración negativa significa frenar; puede significar acelerar en sentido negativo del eje.\r
  typical_range: "De -10 m/s² a +10 m/s² en contextos terrestres habituales."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positiva si la velocidad crece en el sentido positivo del eje; negativa si la velocidad disminuye o si crece en sentido negativo.\r
      en: Positive if velocity increases in the positive axis direction; negative if velocity decreases or increases in the negative direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: La velocidad no cambia en ese instante; el movimiento es (momentáneamente) uniforme.\r
      en: Velocity does not change at that instant; the motion is (momentarily) uniform.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-10, 10]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - eje_vertical_a_t\r
    - pendiente_v_t\r
  pedagogical_notes: La aceleración aparece como la altura de la curva en a-t y como la pendiente de la curva en v-t; la confusión entre estos dos roles produce errores graves de lectura.\r
\r
- id: aceleracion_media\r
  symbol: a_{\\mathrm{med}}\r
  nombre:\r
    es: aceleración media\r
    en: average acceleration\r
  descripcion:\r
    es: Cociente entre el cambio de velocidad y el intervalo de tiempo; corresponde a la pendiente de la secante en el gráfico v-t.\r
    en: Ratio of velocity change to time interval; corresponds to the secant slope on the v-t graph.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Confundir aceleración media con la media aritmética de aceleraciones; solo coinciden si la variación de aceleración es lineal con el tiempo.\r
  typical_range: "De -10 m/s² a +10 m/s² en cinemática terrestre habitual."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positiva si la velocidad neta aumentó en el intervalo; negativa si disminuyó.\r
      en: Positive if the net velocity increased in the interval; negative if it decreased.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El cambio neto de velocidad es nulo; el móvil tiene la misma velocidad al inicio y al final del intervalo.\r
      en: The net velocity change is zero; the object has the same velocity at the start and end of the interval.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-20, 20]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - pendiente_secante_v_t\r
  pedagogical_notes: La aceleración media es la pendiente de la secante en v-t; no describe lo que ocurre en cada instante, sino el efecto global del intervalo.\r
\r
- id: cambio_velocidad\r
  symbol: \\Delta v\r
  nombre:\r
    es: cambio de velocidad\r
    en: change in velocity\r
  descripcion:\r
    es: Diferencia entre la velocidad final y la inicial en un intervalo; equivale al área con signo bajo la curva a-t.\r
    en: Difference between final and initial velocity over an interval; equals the signed area under the a-t curve.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - analisis-grafico-del-movimiento\r
  common_mistake: Confundir el cambio de velocidad con la velocidad final; el cambio es una diferencia, no un valor absoluto.\r
  typical_range: "De -20 m/s a +20 m/s."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo si la velocidad aumentó, negativo si disminuyó durante el intervalo.\r
      en: Positive if velocity increased, negative if it decreased during the interval.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: La velocidad no cambió durante el intervalo; la aceleración media fue cero.\r
      en: Velocity did not change during the interval; the average acceleration was zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "[-20, 20]"\r
  interpretation_role:\r
    primary_for:\r
    - analisis-grafico-del-movimiento\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - area_bajo_a_t\r
  pedagogical_notes: El cambio de velocidad es el área con signo bajo la curva a-t; es el resultado de integrar gráficamente la aceleración.\r
`;export{e as default};
