const e=`version: 1\r
ui:\r
  default_formula: velocidad_media_intervalo\r
formulas:\r
- id: velocidad_inst_pendiente_x_t\r
  title:\r
    es: Velocidad instantánea como pendiente del gráfico posición-tiempo\r
    en: Instantaneous velocity as slope of the position–time graph\r
  equation: v = \\frac{dx}{dt}\r
  latex: v = \\frac{dx}{dt}\r
  rearrangements:\r
  - target: velocidad\r
    equation: v = \\frac{\\Delta x}{\\Delta t}\r
    latex: v = \\frac{\\Delta x}{\\Delta t}\r
    constraints:\r
    - "intervalo_tiempo != 0"\r
  category: fundamental\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: La inclinación local de la curva x(t) mide cómo cambia la posición en cada instante; una pendiente pronunciada indica movimiento rápido.\r
    en: The local steepness of the x(t) curve measures how position changes at each instant; a steep slope indicates fast motion.\r
  constraints: "Requiere que x(t) sea derivable en el instante considerado y que el movimiento se describa respecto a un eje concreto."\r
  validity:\r
    es: Válida para movimiento unidimensional o para una componente concreta de un movimiento multidimensional; no aplicable en discontinuidades de x(t).\r
    en: Valid for one-dimensional motion or for a specific component of multidimensional motion; not applicable at discontinuities in x(t).\r
  dimension_check: "[L]/[T] = L T^{-1}"\r
  calculable: false\r
  motivo_no_calculable: "Es una relación diferencial; la versión calculable es velocidad_media_intervalo."\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - graficos\r
  interpretation_tags:\r
  - pendiente\r
  - velocidad_instantanea\r
  - tangente\r
  result_semantics:\r
    target: velocidad\r
    kind: rate_of_change\r
    sign_meaning:\r
      es: Pendiente positiva implica avance en sentido +x; pendiente negativa implica retroceso.\r
      en: Positive slope means advance in the +x direction; negative slope means retreat.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es el módulo de la pendiente, más rápido se mueve el objeto.\r
      en: The larger the slope magnitude, the faster the object moves.\r
  domain_checks:\r
  - expr: "intervalo_tiempo > 0"\r
    message:\r
      es: "El intervalo de tiempo debe ser positivo para definir la pendiente."\r
      en: "The time interval must be positive to define the slope."\r
  coherence_checks:\r
  - expr: "abs(result) < 300"\r
    message:\r
      es: "Velocidad superior a 300 m/s es inusual en cinemática escolar; revisa datos."\r
      en: "Velocity above 300 m/s is unusual in school kinematics; check your data."\r
  graph_implications:\r
  - "La pendiente de la tangente a x-t en el instante considerado debe coincidir con la ordenada de v-t en ese mismo instante."\r
  pedagogical_triggers:\r
  - when: "result == 0"\r
    message:\r
      es: "La pendiente es cero: el móvil está momentáneamente en reposo o en un punto de retorno."\r
      en: "The slope is zero: the object is momentarily at rest or at a turning point."\r
  - when: "result < 0"\r
    message:\r
      es: "Pendiente negativa: el objeto se mueve en sentido contrario al eje positivo."\r
      en: "Negative slope: the object moves opposite to the positive axis direction."\r
\r
- id: velocidad_media_intervalo\r
  title:\r
    es: Velocidad media en un intervalo\r
    en: Average velocity over an interval\r
  equation: v_{\\mathrm{med}} = \\frac{\\Delta x}{\\Delta t}\r
  latex: v_{\\mathrm{med}} = \\frac{\\Delta x}{\\Delta t}\r
  rearrangements:\r
  - target: velocidad_media\r
    equation: v_{\\mathrm{med}} = \\frac{\\Delta x}{\\Delta t}\r
    latex: v_{\\mathrm{med}} = \\frac{\\Delta x}{\\Delta t}\r
    constraints:\r
    - "intervalo_tiempo != 0"\r
  - target: desplazamiento\r
    equation: \\Delta x = v_{\\mathrm{med}} \\cdot \\Delta t\r
    latex: \\Delta x = v_{\\mathrm{med}} \\cdot \\Delta t\r
    constraints: []\r
  - target: intervalo_tiempo\r
    equation: \\Delta t = \\frac{\\Delta x}{v_{\\mathrm{med}}}\r
    latex: \\Delta t = \\frac{\\Delta x}{v_{\\mathrm{med}}}\r
    constraints:\r
    - "velocidad_media != 0"\r
  category: fundamental\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Resume en un único valor la tasa neta de cambio de posición durante un intervalo finito; gráficamente es la pendiente de la secante en x-t.\r
    en: Summarizes in a single value the net rate of position change over a finite interval; graphically it is the secant slope on x-t.\r
  constraints: "\\\\Delta t \\\\neq 0 y el intervalo debe estar claramente definido."\r
  validity:\r
    es: Válida para cualquier movimiento unidimensional, aunque no proporciona información sobre variaciones internas de velocidad dentro del intervalo.\r
    en: Valid for any one-dimensional motion, although it provides no information about velocity variations within the interval.\r
  dimension_check: "[L]/[T] = L T^{-1}"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - graficos\r
  interpretation_tags:\r
  - pendiente_secante\r
  - velocidad_media\r
  - desplazamiento_neto\r
  result_semantics:\r
    target: velocidad_media\r
    kind: average_rate\r
    sign_meaning:\r
      es: Positiva si el desplazamiento neto es en el sentido positivo del eje; negativa si es en sentido contrario.\r
      en: Positive if the net displacement is in the positive axis direction; negative if in the opposite direction.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es el módulo, más se desplazó el móvil por unidad de tiempo.\r
      en: The larger the magnitude, the more the object displaced per unit time.\r
  domain_checks:\r
  - expr: "intervalo_tiempo > 0"\r
    message:\r
      es: "El intervalo de tiempo debe ser positivo."\r
      en: "The time interval must be positive."\r
  coherence_checks:\r
  - expr: "abs(result) < 100"\r
    message:\r
      es: "Una velocidad media superior a 100 m/s es muy alta para cinemática terrestre; revisa los datos."\r
      en: "An average velocity above 100 m/s is very high for terrestrial kinematics; check your data."\r
  graph_implications:\r
  - "La pendiente de la secante entre los puntos (t_i, x_i) y (t_f, x_f) en la gráfica x-t debe coincidir con este valor."\r
  pedagogical_triggers:\r
  - when: "result == 0"\r
    message:\r
      es: "Velocidad media cero: el desplazamiento neto es nulo, aunque el objeto puede haberse movido de ida y vuelta."\r
      en: "Zero average velocity: the net displacement is zero, even though the object may have moved back and forth."\r
  - when: "true"\r
    message:\r
      es: "Comprueba que las unidades de desplazamiento y tiempo sean coherentes antes de dividir."\r
      en: "Check that displacement and time units are consistent before dividing."\r
\r
- id: desplazamiento_area_v_t\r
  title:\r
    es: Desplazamiento como área bajo el gráfico velocidad-tiempo\r
    en: Displacement as area under the velocity–time graph\r
  equation: \\Delta x = \\int_{t_i}^{t_f} v(t)\\,dt\r
  latex: \\Delta x = \\int_{t_i}^{t_f} v(t)\\,dt\r
  rearrangements:\r
  - target: desplazamiento\r
    equation: \\Delta x = v \\cdot \\Delta t\r
    latex: \\Delta x = v \\cdot \\Delta t\r
    constraints:\r
    - "Válido cuando v es constante en el intervalo"\r
  category: structural\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: La suma continua de contribuciones de velocidad durante pequeños intervalos produce el desplazamiento total; gráficamente es el área con signo bajo v-t.\r
    en: The continuous sum of velocity contributions over small intervals produces total displacement; graphically it is the signed area under v-t.\r
  constraints: "El intervalo temporal debe estar delimitado y v(t) debe ser integrable."\r
  validity:\r
    es: Válida para cualquier movimiento cuya velocidad como función del tiempo pueda integrarse en el intervalo.\r
    en: Valid for any motion whose velocity as a function of time can be integrated over the interval.\r
  dimension_check: "[L T^{-1}] \\\\cdot [T] = [L]"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - graficos\r
  interpretation_tags:\r
  - area_bajo_curva\r
  - desplazamiento\r
  - integral_grafica\r
  result_semantics:\r
    target: desplazamiento\r
    kind: accumulated_quantity\r
    sign_meaning:\r
      es: Positivo si el área neta está por encima del eje t; negativo si está por debajo.\r
      en: Positive if the net area is above the t-axis; negative if below.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es el área, mayor es el cambio neto de posición.\r
      en: The larger the area, the greater the net change in position.\r
  domain_checks:\r
  - expr: "intervalo_tiempo > 0"\r
    message:\r
      es: "Se necesita un intervalo temporal positivo para calcular el área."\r
      en: "A positive time interval is needed to compute the area."\r
  coherence_checks:\r
  - expr: "abs(result) < 10000"\r
    message:\r
      es: "Desplazamiento superior a 10 km es inusual en problemas cinemáticos escolares."\r
      en: "Displacement above 10 km is unusual in school kinematics problems."\r
  graph_implications:\r
  - "El área geométrica bajo la curva v-t entre t_i y t_f debe coincidir con el desplazamiento calculado."\r
  pedagogical_triggers:\r
  - when: "result < 0"\r
    message:\r
      es: "Desplazamiento negativo: el objeto retrocedió más de lo que avanzó en el intervalo."\r
      en: "Negative displacement: the object moved backwards more than forwards in the interval."\r
  - when: "true"\r
    message:\r
      es: "Si la curva v-t cruza el eje, hay que separar las áreas positiva y negativa para distinguir desplazamiento de distancia."\r
      en: "If the v-t curve crosses the axis, separate positive and negative areas to distinguish displacement from distance."\r
\r
- id: aceleracion_inst_pendiente_v_t\r
  title:\r
    es: Aceleración instantánea como pendiente del gráfico velocidad-tiempo\r
    en: Instantaneous acceleration as slope of the velocity–time graph\r
  equation: a = \\frac{dv}{dt}\r
  latex: a = \\frac{dv}{dt}\r
  rearrangements:\r
  - target: aceleracion\r
    equation: a = \\frac{\\Delta v}{\\Delta t}\r
    latex: a = \\frac{\\Delta v}{\\Delta t}\r
    constraints:\r
    - "intervalo_tiempo != 0"\r
  category: fundamental\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: La pendiente local de v(t) expresa cómo cambia la velocidad en cada instante; una pendiente positiva indica que la velocidad aumenta.\r
    en: The local slope of v(t) expresses how velocity changes at each instant; a positive slope indicates increasing velocity.\r
  constraints: "Requiere que v(t) sea derivable en el instante considerado."\r
  validity:\r
    es: Válida para una componente concreta del movimiento o para movimiento unidimensional; no aplicable en puntos angulosos de v(t).\r
    en: Valid for a specific motion component or for one-dimensional motion; not applicable at angular points of v(t).\r
  dimension_check: "[L T^{-1}]/[T] = L T^{-2}"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - graficos\r
  interpretation_tags:\r
  - pendiente_v_t\r
  - aceleracion\r
  - cambio_velocidad\r
  result_semantics:\r
    target: aceleracion\r
    kind: rate_of_change\r
    sign_meaning:\r
      es: Positiva si la velocidad aumenta en sentido +x; negativa si disminuye o aumenta en sentido -x.\r
      en: Positive if velocity increases in the +x direction; negative if it decreases or increases in the -x direction.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es el módulo, más rápidamente cambia la velocidad.\r
      en: The larger the magnitude, the more rapidly velocity changes.\r
  domain_checks:\r
  - expr: "intervalo_tiempo > 0"\r
    message:\r
      es: "El intervalo de tiempo debe ser positivo para definir la pendiente de v-t."\r
      en: "The time interval must be positive to define the v-t slope."\r
  coherence_checks:\r
  - expr: "abs(result) < 50"\r
    message:\r
      es: "Aceleración superior a 50 m/s² es inusual fuera de colisiones; revisa los datos."\r
      en: "Acceleration above 50 m/s² is unusual outside collisions; check your data."\r
  graph_implications:\r
  - "La pendiente de la tangente a v-t en el instante considerado debe coincidir con la ordenada de a-t en ese mismo instante."\r
  pedagogical_triggers:\r
  - when: "result == 0"\r
    message:\r
      es: "Aceleración cero: la velocidad no cambia en este instante; movimiento uniforme."\r
      en: "Zero acceleration: velocity is not changing at this instant; uniform motion."\r
  - when: "result < 0"\r
    message:\r
      es: "Aceleración negativa no siempre significa frenar; puede significar acelerar en sentido -x."\r
      en: "Negative acceleration does not always mean braking; it may mean speeding up in the -x direction."\r
\r
- id: aceleracion_media_intervalo\r
  title:\r
    es: Aceleración media en un intervalo\r
    en: Average acceleration over an interval\r
  equation: a_{\\mathrm{med}} = \\frac{\\Delta v}{\\Delta t}\r
  latex: a_{\\mathrm{med}} = \\frac{\\Delta v}{\\Delta t}\r
  rearrangements:\r
  - target: aceleracion_media\r
    equation: a_{\\mathrm{med}} = \\frac{\\Delta v}{\\Delta t}\r
    latex: a_{\\mathrm{med}} = \\frac{\\Delta v}{\\Delta t}\r
    constraints:\r
    - "intervalo_tiempo != 0"\r
  - target: cambio_velocidad\r
    equation: \\Delta v = a_{\\mathrm{med}} \\cdot \\Delta t\r
    latex: \\Delta v = a_{\\mathrm{med}} \\cdot \\Delta t\r
    constraints: []\r
  - target: intervalo_tiempo\r
    equation: \\Delta t = \\frac{\\Delta v}{a_{\\mathrm{med}}}\r
    latex: \\Delta t = \\frac{\\Delta v}{a_{\\mathrm{med}}}\r
    constraints:\r
    - "aceleracion_media != 0"\r
  category: fundamental\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: Resume en un único valor la tasa neta de cambio de velocidad durante un intervalo finito; gráficamente es la pendiente de la secante en v-t.\r
    en: Summarises in a single value the net rate of velocity change over a finite interval; graphically it is the secant slope on v-t.\r
  constraints: "\\\\Delta t \\\\neq 0 y el intervalo debe estar claramente definido."\r
  validity:\r
    es: Válida para cualquier movimiento unidimensional, aunque no proporciona información sobre variaciones internas de la aceleración dentro del intervalo.\r
    en: Valid for any one-dimensional motion, although it provides no information about acceleration variations within the interval.\r
  dimension_check: "[L T^{-1}]/[T] = L T^{-2}"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - graficos\r
  interpretation_tags:\r
  - pendiente_secante\r
  - aceleracion_media\r
  - cambio_velocidad\r
  result_semantics:\r
    target: aceleracion_media\r
    kind: average_rate\r
    sign_meaning:\r
      es: Positiva si la velocidad neta aumentó durante el intervalo; negativa si disminuyó.\r
      en: Positive if the net velocity increased during the interval; negative if it decreased.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es el módulo, más cambió la velocidad del móvil por unidad de tiempo.\r
      en: The larger the magnitude, the more the object's velocity changed per unit time.\r
  domain_checks:\r
  - expr: "intervalo_tiempo > 0"\r
    message:\r
      es: "El intervalo de tiempo debe ser positivo."\r
      en: "The time interval must be positive."\r
  coherence_checks:\r
  - expr: "abs(result) < 50"\r
    message:\r
      es: "Una aceleración media superior a 50 m/s² es muy alta en cinemática escolar; revisa los datos."\r
      en: "An average acceleration above 50 m/s² is very high in school kinematics; check your data."\r
  graph_implications:\r
  - "La pendiente de la secante entre los puntos (t_i, v_i) y (t_f, v_f) en la gráfica v-t debe coincidir con este valor."\r
  pedagogical_triggers:\r
  - when: "result == 0"\r
    message:\r
      es: "Aceleración media cero: el cambio neto de velocidad fue nulo, aunque puede haber habido aceleraciones positivas y negativas que se compensaron."\r
      en: "Zero average acceleration: the net velocity change is zero, even though there may have been positive and negative accelerations that cancelled."\r
  - when: "true"\r
    message:\r
      es: "Comprueba que las unidades de cambio de velocidad y tiempo sean coherentes antes de dividir."\r
      en: "Check that the velocity change and time units are consistent before dividing."\r
\r
- id: cambio_velocidad_area_a_t\r
  title:\r
    es: Cambio de velocidad como área bajo el gráfico aceleración-tiempo\r
    en: Change in velocity as area under the acceleration–time graph\r
  equation: \\Delta v = \\int_{t_i}^{t_f} a(t)\\,dt\r
  latex: \\Delta v = \\int_{t_i}^{t_f} a(t)\\,dt\r
  rearrangements:\r
  - target: cambio_velocidad\r
    equation: \\Delta v = a \\cdot \\Delta t\r
    latex: \\Delta v = a \\cdot \\Delta t\r
    constraints:\r
    - "Válido cuando a es constante en el intervalo"\r
  category: structural\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: La aceleración acumulada a lo largo del tiempo produce la variación neta de velocidad; gráficamente es el área con signo bajo a-t.\r
    en: Acceleration accumulated over time produces the net velocity change; graphically it is the signed area under a-t.\r
  constraints: "Requiere un intervalo temporal definido y que a(t) sea integrable en ese intervalo."\r
  validity:\r
    es: Válida cuando la aceleración se conoce como función del tiempo en el intervalo estudiado.\r
    en: Valid when acceleration is known as a function of time over the studied interval.\r
  dimension_check: "[L T^{-2}] \\\\cdot [T] = L T^{-1}"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - graficos\r
  interpretation_tags:\r
  - area_bajo_a_t\r
  - cambio_velocidad\r
  - integral_grafica\r
  result_semantics:\r
    target: cambio_velocidad\r
    kind: accumulated_quantity\r
    sign_meaning:\r
      es: Positivo si la velocidad aumentó durante el intervalo; negativo si disminuyó.\r
      en: Positive if velocity increased during the interval; negative if it decreased.\r
    absolute_value_meaning:\r
      es: Cuanto mayor es el área, mayor fue la variación de velocidad en el intervalo.\r
      en: The larger the area, the greater the velocity change in the interval.\r
  domain_checks:\r
  - expr: "intervalo_tiempo > 0"\r
    message:\r
      es: "Se necesita un intervalo temporal positivo para calcular el área bajo a-t."\r
      en: "A positive time interval is needed to compute the area under a-t."\r
  coherence_checks:\r
  - expr: "abs(result) < 100"\r
    message:\r
      es: "Un cambio de velocidad superior a 100 m/s es muy alto; revisa la aceleración y el intervalo."\r
      en: "A velocity change above 100 m/s is very high; check the acceleration and the interval."\r
  graph_implications:\r
  - "El área geométrica bajo la curva a-t entre t_i y t_f debe coincidir con el cambio de velocidad calculado."\r
  pedagogical_triggers:\r
  - when: "result == 0"\r
    message:\r
      es: "Cambio de velocidad nulo: la aceleración neta en el intervalo fue cero; puede haber habido aceleración positiva y negativa que se compensaron."\r
      en: "Zero velocity change: the net acceleration over the interval was zero; there may have been positive and negative accelerations that cancelled."\r
  - when: "true"\r
    message:\r
      es: "Si la curva a-t cambia de signo, las áreas positiva y negativa representan aumentos y disminuciones de velocidad respectivamente."\r
      en: "If the a-t curve changes sign, positive and negative areas represent velocity increases and decreases respectively."\r
`;export{e as default};
