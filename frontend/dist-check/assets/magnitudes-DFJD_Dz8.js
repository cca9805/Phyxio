const e=`version: 5\r
magnitudes:\r
- id: K\r
  symbol: K\r
  nombre: { es: Energia cinetica, en: Kinetic energy }\r
  si_unit: J\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: energia\r
  physical_role: energia_de_movimiento\r
  used_in: [ energia_cinetica, energia_total_mhs, conservacion_energia_mhs ]\r
  common_mistake: Pensar que [[K]] es maxima en los extremos del movimiento.\r
  typical_range: [ 0, 500 ]\r
  sign_behavior: no_negativa\r
  zero_behavior: reposo_instante_o_extremo\r
  value_nature: estado\r
  interpretation_role: mide_movimiento_instante\r
  graph_binding: "[[K]] aumenta cerca del equilibrio y disminuye hacia los extremos."\r
  descripcion:\r
    es: "Energia asociada al movimiento instantaneo del oscilador."\r
    en: "Energy associated with the oscillator instantaneous motion."\r
  pedagogical_notes:\r
    es: "Su intercambio con [[U]] permite leer conservacion de [[E]]."\r
    en: "Its exchange with [[U]] supports conservation reading of [[E]]."\r
\r
- id: U\r
  symbol: U\r
  nombre: { es: Energia potencial elastica, en: Elastic potential energy }\r
  si_unit: J\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: energia\r
  physical_role: energia_de_configuracion\r
  used_in: [ energia_potencial_elastica, energia_total_mhs, conservacion_energia_mhs ]\r
  common_mistake: Creer que [[U]] depende de velocidad y no de configuracion.\r
  typical_range: [ 0, 500 ]\r
  sign_behavior: no_negativa\r
  zero_behavior: equilibrio_ideal\r
  value_nature: estado\r
  interpretation_role: mide_almacenamiento_elastico\r
  graph_binding: "[[U]] es minima en equilibrio y maxima en los extremos."\r
  descripcion:\r
    es: "Energia almacenada en el resorte por desplazamiento respecto del equilibrio."\r
    en: "Energy stored in the spring due to displacement from equilibrium."\r
  pedagogical_notes:\r
    es: "En MHS ideal, [[U]] compensa a [[K]] para sostener [[E]]."\r
    en: "In ideal SHM, [[U]] compensates [[K]] to sustain [[E]]."\r
\r
- id: E\r
  symbol: E\r
  nombre: { es: Energia mecanica total, en: Total mechanical energy }\r
  si_unit: J\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: energia\r
  physical_role: cantidad_conservada\r
  used_in: [ energia_total_mhs, energia_total_amplitud ]\r
  common_mistake: Tratar [[E]] como suma variable en un sistema ideal sin disipacion.\r
  typical_range: [ 0, 500 ]\r
  sign_behavior: positiva_o_nula\r
  zero_behavior: ausencia_de_oscilacion\r
  value_nature: parametro\r
  interpretation_role: fija_escala_energetica\r
  graph_binding: "[[E]] permanece constante en el modelo ideal mientras [[K]] y [[U]] intercambian valor."\r
  descripcion:\r
    es: "Suma de energia cinetica y energia potencial en el oscilador ideal."\r
    en: "Sum of kinetic and potential energy in the ideal oscillator."\r
  pedagogical_notes:\r
    es: "La constancia de [[E]] es el criterio central de este leaf."\r
    en: "Constancy of [[E]] is the central criterion of this leaf."\r
\r
- id: m\r
  symbol: m\r
  nombre: { es: Masa, en: Mass }\r
  si_unit: kg\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: parametro\r
  physical_role: inercia\r
  used_in: [ energia_cinetica ]\r
  common_mistake: Omitir su efecto al reconstruir [[K]] a partir de [[v]].\r
  typical_range: [ 0.05, 50 ]\r
  sign_behavior: positiva\r
  zero_behavior: invalida_modelo\r
  value_nature: parametro\r
  interpretation_role: fija_escala_inercial\r
  graph_binding: "[[m]] cambia la escala de [[K]] para un mismo valor de [[v]]."\r
  descripcion:\r
    es: "Parametro inercial del oscilador."\r
    en: "Inertial parameter of the oscillator."\r
  pedagogical_notes:\r
    es: "Mayor [[m]] implica mayor [[K]] para la misma rapidez."\r
    en: "Larger [[m]] implies larger [[K]] for the same speed."\r
\r
- id: k\r
  symbol: k\r
  nombre: { es: Constante elastica, en: Spring constant }\r
  si_unit: N/m\r
  unidad_si: N/m\r
  dimension: M T^-2\r
  is_vector: false\r
  components: []\r
  category: parametro\r
  physical_role: rigidez\r
  used_in: [ energia_potencial_elastica, energia_total_amplitud ]\r
  common_mistake: Tratar [[k]] como una energia en vez de una rigidez.\r
  typical_range: [ 1, 5000 ]\r
  sign_behavior: positiva\r
  zero_behavior: sin_restauracion\r
  value_nature: parametro\r
  interpretation_role: fija_almacenamiento_elastico\r
  graph_binding: "[[k]] modifica la pendiente con la que crece [[U]] respecto a [[x]]."\r
  descripcion:\r
    es: "Parametro de rigidez del resorte ideal."\r
    en: "Stiffness parameter of the ideal spring."\r
  pedagogical_notes:\r
    es: "A mayor [[k]], mayor energia potencial para la misma deformacion."\r
    en: "Higher [[k]] means larger potential energy for the same deformation."\r
\r
- id: x\r
  symbol: x\r
  nombre: { es: Desplazamiento, en: Displacement }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: estado\r
  physical_role: coordenada_de_estado\r
  used_in: [ energia_potencial_elastica ]\r
  common_mistake: Confundir [[x]] con distancia recorrida acumulada.\r
  typical_range: [ -2, 2 ]\r
  sign_behavior: depende_de_referencia\r
  zero_behavior: equilibrio\r
  value_nature: estado\r
  interpretation_role: controla_energia_potencial\r
  graph_binding: "[[x]] grande en magnitud implica mayor [[U]] en el modelo ideal."\r
  descripcion:\r
    es: "Posicion instantanea respecto del equilibrio."\r
    en: "Instantaneous position relative to equilibrium."\r
  pedagogical_notes:\r
    es: "La dependencia energetica va con el cuadrado de [[x]]."\r
    en: "Energetic dependence scales with the square of [[x]]."\r
\r
- id: v\r
  symbol: v\r
  nombre: { es: Velocidad, en: Velocity }\r
  si_unit: m/s\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: []\r
  category: estado\r
  physical_role: tasa_de_cambio\r
  used_in: [ energia_cinetica ]\r
  common_mistake: Asumir que [[v]] y [[x]] maximizan energia al mismo tiempo.\r
  typical_range: [ -20, 20 ]\r
  sign_behavior: depende_de_sentido\r
  zero_behavior: extremo_del_movimiento\r
  value_nature: estado\r
  interpretation_role: controla_energia_cinetica\r
  graph_binding: "[[v]] grande en magnitud implica mayor [[K]]."\r
  descripcion:\r
    es: "Rapidez con signo del estado oscilatorio."\r
    en: "Signed speed of the oscillatory state."\r
  pedagogical_notes:\r
    es: "La dependencia energetica va con el cuadrado de [[v]]."\r
    en: "Energetic dependence scales with the square of [[v]]."\r
\r
- id: A\r
  symbol: A\r
  nombre: { es: Amplitud, en: Amplitude }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: parametro\r
  physical_role: escala_de_oscilacion\r
  used_in: [ energia_total_amplitud ]\r
  common_mistake: Tratar [[A]] como si cambiara durante el MHS ideal sin disipacion.\r
  typical_range: [ 0.01, 2 ]\r
  sign_behavior: no_negativa_en_magnitud\r
  zero_behavior: sin_oscilacion\r
  value_nature: parametro\r
  interpretation_role: fija_escala_total_de_energia\r
  graph_binding: "[[A]] fija la energia total del sistema a traves de [[k]]."\r
  descripcion:\r
    es: "Maximo desplazamiento respecto del equilibrio en el modelo ideal."\r
    en: "Maximum displacement from equilibrium in the ideal model."\r
  pedagogical_notes:\r
    es: "Duplicar [[A]] cuadruplica la energia total ideal para [[k]] fija."\r
    en: "Doubling [[A]] quadruples ideal total energy for fixed [[k]]."\r
\r
- id: E_total\r
  symbol: E_total\r
  nombre: { es: Energia total conservada, en: Conserved total energy }\r
  si_unit: J\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: energia\r
  physical_role: cantidad_conservada_explicita\r
  used_in: [ conservacion_energia_mhs ]\r
  common_mistake: Tratar [[E_total]] como una variable independiente de [[E]].\r
  typical_range: [ 0, 500 ]\r
  sign_behavior: positiva_o_nula\r
  zero_behavior: reposo_sin_oscilacion\r
  value_nature: parametro\r
  interpretation_role: enfatiza_conservacion\r
  graph_binding: "[[E_total]] resume la constancia energetica del sistema ideal."\r
  descripcion:\r
    es: "Etiqueta explicita para la energia mecanica total conservada del oscilador."\r
    en: "Explicit label for the conserved total mechanical energy of the oscillator."\r
  pedagogical_notes:\r
    es: "En este leaf, [[E_total]] y [[E]] deben leerse de forma coherente."\r
    en: "In this leaf, [[E_total]] and [[E]] should be read coherently."\r
`;export{e as default};
