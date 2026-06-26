const e=`version: 5\r
magnitudes:\r
- id: omega0\r
  symbol: \\omega_0\r
  nombre: { es: Pulsacion natural, en: Natural pulsation }\r
  si_unit: rad/s\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: dinamica\r
  physical_role: escala_temporal_dinamica\r
  used_in: [ condicion_critica, tiempo_caracteristico, solucion_critica ]\r
  common_mistake: Tratarla como frecuencia en Hz sin convertir unidades.\r
  typical_range: [ 0.5, 50 ]\r
  sign_behavior: positiva\r
  zero_behavior: invalida_el_modelo\r
  value_nature: parametro\r
  interpretation_role: controla_rapidez_decaimiento\r
  graph_binding: "Incrementar [[omega0]] acelera caída de [[x]] y reduce [[tau]]."\r
  descripcion: { es: Escala de rapidez intrínseca del sistema sin forzamiento externo dominante., en: Intrinsic speed scale of the system without dominant external forcing. }\r
  pedagogical_notes: { es: "No confundir con frecuencia angular de oscilación en régimen subamortiguado.", en: "Do not confuse with oscillation angular frequency in the underdamped regime." }\r
\r
- id: gamma\r
  symbol: \\gamma\r
  nombre: { es: Coeficiente de amortiguamiento equivalente, en: Equivalent damping coefficient }\r
  si_unit: 1/s\r
  unidad_si: 1/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: disipacion\r
  physical_role: intensidad_de_amortiguamiento\r
  used_in: [ condicion_critica ]\r
  common_mistake: Usarlo con signo incorrecto en la ecuación de movimiento.\r
  typical_range: [ 0.1, 80 ]\r
  sign_behavior: positiva\r
  zero_behavior: paso_a_regimen_no_amortiguado\r
  value_nature: parametro\r
  interpretation_role: fija_regimen_dinamico\r
  graph_binding: "Comparar [[gamma]] con [[omega0]] clasifica el régimen (sub, crítico, sobre)."\r
  descripcion: { es: Parámetro efectivo que cuantifica la disipación viscosa lineal del sistema., en: Effective parameter quantifying linear viscous dissipation of the system. }\r
  pedagogical_notes: { es: "La igualdad [[gamma]]=[[omega0]] define la frontera crítica.", en: "Equality [[gamma]]=[[omega0]] defines the critical boundary." }\r
\r
- id: tau\r
  symbol: \\tau\r
  nombre: { es: Tiempo caracteristico, en: Characteristic time }\r
  si_unit: s\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: []\r
  category: escala_temporal\r
  physical_role: tiempo_de_asentamiento_primario\r
  used_in: [ tiempo_caracteristico ]\r
  common_mistake: Interpretarlo como periodo de oscilación.\r
  typical_range: [ 0.01, 5 ]\r
  sign_behavior: positiva\r
  zero_behavior: no_fisica\r
  value_nature: derivada\r
  interpretation_role: mide_rapidez_decaimiento\r
  graph_binding: "[[tau]] menor implica asentamiento más rápido sin oscilación sostenida."\r
  descripcion: { es: Tiempo típico en el que la respuesta crítica reduce significativamente su amplitud., en: Typical time over which critical response significantly reduces amplitude. }\r
  pedagogical_notes: { es: "En crítico, describe rapidez de convergencia y no periodicidad.", en: "In critical damping, it describes convergence speed, not periodicity." }\r
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
  physical_role: variable_de_salida\r
  used_in: [ solucion_critica ]\r
  common_mistake: Forzar sobrepaso oscilatorio en interpretación de curva crítica.\r
  typical_range: [ -0.5, 0.5 ]\r
  sign_behavior: depende_de_referencia\r
  zero_behavior: equilibrio\r
  value_nature: estado\r
  interpretation_role: respuesta_transitoria\r
  graph_binding: "[[x]] cae al equilibrio con forma monótona amortiguada en el caso ideal crítico."\r
  descripcion: { es: Coordenada de salida que evoluciona desde condición inicial hacia equilibrio., en: Output coordinate evolving from initial condition toward equilibrium. }\r
  pedagogical_notes: { es: "La forma temporal importa más que el valor instantáneo aislado.", en: "Temporal shape matters more than isolated instantaneous value." }\r
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
  used_in: [ solucion_critica ]\r
  common_mistake: Mezclar segundos con milisegundos sin normalización previa.\r
  typical_range: [ 0, 20 ]\r
  sign_behavior: no_negativo_en_simulacion\r
  zero_behavior: condicion_inicial\r
  value_nature: independiente\r
  interpretation_role: ordena_evolucion\r
  graph_binding: "[[t]] organiza el seguimiento de asentamiento y comparación de regímenes."\r
  descripcion: { es: Variable independiente sobre la que se observa la respuesta dinámica., en: Independent variable over which dynamic response is observed. }\r
  pedagogical_notes: { es: "Usar ventana temporal suficiente para ver convergencia real.", en: "Use a sufficiently long time window to observe true convergence." }\r
\r
- id: A\r
  symbol: A\r
  nombre: { es: Amplitud inicial efectiva, en: Effective initial amplitude }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: condicion_inicial\r
  physical_role: escala_de_respuesta\r
  used_in: [ solucion_critica ]\r
  common_mistake: Tomarla como constante universal del sistema y no de condición inicial.\r
  typical_range: [ 0, 1 ]\r
  sign_behavior: no_negativa_en_magnitud\r
  zero_behavior: respuesta_nula\r
  value_nature: parametro_inicial\r
  interpretation_role: fija_nivel_inicial\r
  graph_binding: "[[A]] escala la magnitud global de [[x]] sin cambiar la clase de régimen."\r
  descripcion: { es: Factor de escala asociado al estado inicial de desplazamiento/respuesta., en: Scale factor associated with initial displacement/response state. }\r
  pedagogical_notes: { es: "Cambiar [[A]] no modifica condición crítica, solo escala de salida.", en: "Changing [[A]] does not alter critical condition, only output scale." }\r
`;export{e as default};
