const n=`version: 5\r
magnitudes:\r
- id: x\r
  symbol: x\r
  nombre: { es: Desplazamiento, en: Displacement }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: estado\r
  physical_role: variable_de_estado\r
  used_in: [ posicion_mhs, aceleracion_mhs, ecuacion_diferencial_mhs ]\r
  common_mistake: Confundir desplazamiento con distancia recorrida.\r
  typical_range: [ -2, 2 ]\r
  sign_behavior: depende_de_referencia\r
  zero_behavior: equilibrio\r
  value_nature: estado\r
  interpretation_role: salida_principal\r
  graph_binding: "[[x]] define la forma de la oscilacion alrededor del equilibrio."\r
  descripcion:\r
    es: "Posicion instantanea respecto de la posicion de equilibrio."\r
    en: "Instantaneous position measured from equilibrium."\r
  pedagogical_notes:\r
    es: "No toda posicion maxima implica cambio de energia total."\r
    en: "A maximum position does not by itself imply energy loss or gain."\r
\r
- id: A\r
  symbol: A\r
  nombre: { es: Amplitud, en: Amplitude }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: condicion_inicial\r
  physical_role: escala_de_oscilacion\r
  used_in: [ posicion_mhs, velocidad_mhs ]\r
  common_mistake: Tratarla como parametro universal del sistema.\r
  typical_range: [ 0.01, 2 ]\r
  sign_behavior: no_negativa_en_magnitud\r
  zero_behavior: sin_oscilacion\r
  value_nature: parametro\r
  interpretation_role: fija_escala\r
  graph_binding: "[[A]] escala la excursion maxima de [[x]] sin cambiar periodo."\r
  descripcion:\r
    es: "Distancia maxima al equilibrio en la oscilacion ideal."\r
    en: "Maximum distance from equilibrium in ideal oscillation."\r
  pedagogical_notes:\r
    es: "En MHS ideal, [[A]] permanece constante si no hay disipacion."\r
    en: "In ideal SHM, [[A]] remains constant if dissipation is negligible."\r
\r
- id: omega\r
  symbol: \\omega\r
  nombre: { es: Pulsacion angular, en: Angular frequency }\r
  si_unit: rad/s\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: parametro_dinamico\r
  physical_role: escala_temporal\r
  used_in: [ posicion_mhs, velocidad_mhs, aceleracion_mhs, ecuacion_diferencial_mhs ]\r
  common_mistake: Mezclar radianes por segundo con hercios sin conversion.\r
  typical_range: [ 0.5, 80 ]\r
  sign_behavior: positiva\r
  zero_behavior: no_hay_osc_ilacion\r
  value_nature: parametro\r
  interpretation_role: controla_rapidez_de_fase\r
  graph_binding: "[[omega]] controla rapidez de variacion de [[x]] en el tiempo."\r
  descripcion:\r
    es: "Frecuencia angular asociada al movimiento armonico simple."\r
    en: "Angular frequency associated with simple harmonic motion."\r
  pedagogical_notes:\r
    es: "Mayor [[omega]] implica periodo menor."\r
    en: "Higher [[omega]] implies shorter period."\r
\r
- id: phi\r
  symbol: \\varphi\r
  nombre: { es: Fase inicial, en: Initial phase }\r
  si_unit: rad\r
  unidad_si: rad\r
  dimension: adimensional\r
  is_vector: false\r
  components: []\r
  category: condicion_inicial\r
  physical_role: desplazamiento_de_fase\r
  used_in: [ posicion_mhs, velocidad_mhs ]\r
  common_mistake: Interpretarla como angulo geometrico fijo del sistema.\r
  typical_range: [ -3.1416, 3.1416 ]\r
  sign_behavior: puede_ser_positiva_o_negativa\r
  zero_behavior: referencia_de_inicio\r
  value_nature: parametro\r
  interpretation_role: ubica_estado_inicial\r
  graph_binding: "[[phi]] desplaza la oscilacion sobre el eje temporal."\r
  descripcion:\r
    es: "Fase en el instante inicial que fija el punto de partida de la oscilacion."\r
    en: "Initial phase that fixes the oscillation starting point."\r
  pedagogical_notes:\r
    es: "Cambiar [[phi]] no altera amplitud ni periodo."\r
    en: "Changing [[phi]] does not alter amplitude or period."\r
\r
- id: t\r
  symbol: t\r
  nombre: { es: Tiempo, en: Time }\r
  si_unit: s\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: []\r
  category: variable_independiente\r
  physical_role: eje_temporal\r
  used_in: [ posicion_mhs, velocidad_mhs ]\r
  common_mistake: Mezclar segundos con milisegundos sin normalizar.\r
  typical_range: [ 0, 60 ]\r
  sign_behavior: no_negativo_en_simulacion\r
  zero_behavior: instante_inicial\r
  value_nature: independiente\r
  interpretation_role: ordena_evolucion\r
  graph_binding: "[[t]] organiza la lectura de ciclo, fase y derivadas."\r
  descripcion:\r
    es: "Variable independiente sobre la cual evoluciona el estado oscilatorio."\r
    en: "Independent variable over which oscillatory state evolves."\r
  pedagogical_notes:\r
    es: "Elegir ventana temporal adecuada evita diagnosticos sesgados."\r
    en: "Choosing an adequate time window prevents biased diagnostics."\r
\r
- id: v\r
  symbol: v\r
  nombre: { es: Velocidad, en: Velocity }\r
  si_unit: m/s\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: []\r
  category: estado_derivado\r
  physical_role: tasa_de_cambio\r
  used_in: [ velocidad_mhs ]\r
  common_mistake: Asumir que maxima velocidad coincide con maxima posicion.\r
  typical_range: [ -20, 20 ]\r
  sign_behavior: depende_de_sentido\r
  zero_behavior: cambio_de_sentido\r
  value_nature: estado\r
  interpretation_role: describe_intercambio_cinetico\r
  graph_binding: "[[v]] cambia de signo en los extremos de [[x]]."\r
  descripcion:\r
    es: "Derivada temporal de [[x]] en el movimiento armonico simple."\r
    en: "Time derivative of [[x]] in simple harmonic motion."\r
  pedagogical_notes:\r
    es: "En equilibrio, [[v]] suele alcanzar magnitud alta."\r
    en: "Near equilibrium, [[v]] usually reaches high magnitude."\r
\r
- id: a\r
  symbol: a\r
  nombre: { es: Aceleracion, en: Acceleration }\r
  si_unit: m/s^2\r
  unidad_si: m/s^2\r
  dimension: L T^-2\r
  is_vector: false\r
  components: []\r
  category: estado_derivado\r
  physical_role: curvatura_dinamica\r
  used_in: [ aceleracion_mhs ]\r
  common_mistake: Tratar su signo como independiente de [[x]].\r
  typical_range: [ -200, 200 ]\r
  sign_behavior: opuesta_a_x_en_mhs_ideal\r
  zero_behavior: paso_por_equilibrio\r
  value_nature: estado\r
  interpretation_role: vincula_restauracion\r
  graph_binding: "[[a]] es opuesta a [[x]] en el MHS ideal."\r
  descripcion:\r
    es: "Segunda derivada temporal de [[x]] o derivada temporal de [[v]]."\r
    en: "Second time derivative of [[x]] or time derivative of [[v]]."\r
  pedagogical_notes:\r
    es: "Relacion signo de [[a]] con retorno al equilibrio."\r
    en: "Relate sign of [[a]] with restoring tendency toward equilibrium."\r
\r
- id: x_dd\r
  symbol: x_dd\r
  nombre: { es: Segunda derivada de x, en: Second derivative of x }\r
  si_unit: m/s^2\r
  unidad_si: m/s^2\r
  dimension: L T^-2\r
  is_vector: false\r
  components: []\r
  category: operador_dinamico\r
  physical_role: representacion_diferencial\r
  used_in: [ ecuacion_diferencial_mhs ]\r
  common_mistake: Tratarla como nueva magnitud independiente sin vinculo con [[a]].\r
  typical_range: [ -200, 200 ]\r
  sign_behavior: depende_del_estado\r
  zero_behavior: inflexion_o_equilibrio_local\r
  value_nature: derivada\r
  interpretation_role: conecta_modelo_y_datos\r
  graph_binding: "[[x_dd]] resume la curvatura temporal de [[x]]."\r
  descripcion:\r
    es: "Notacion diferencial para la segunda derivada temporal de [[x]]."\r
    en: "Differential notation for the second time derivative of [[x]]."\r
  pedagogical_notes:\r
    es: "En este leaf, [[x_dd]] y [[a]] son equivalentes en interpretacion fisica."\r
    en: "In this leaf, [[x_dd]] and [[a]] are physically equivalent."\r
`;export{n as default};
