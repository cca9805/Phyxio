const e=`version: 1
magnitudes:
- id: Em
  symbol: E_m
  nombre:
    es: energia mecanica
    en: mechanical energy
  unidad_si: J
  descripcion:
    es: Suma de las contribuciones cinetica y potencial del estado mecanico.
    en: Sum of kinetic and potential contributions in a mechanical state.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_energy
  physical_role: invariante ideal del modelo conservativo
  used_in:
  - estados_conservativos
  - extension_no_conservativa
  common_mistake:
    es: Confundir Em constante con K constante.
    en: Confusing constant Em with constant K.
  typical_range:
    es: Desde pocos julios en laboratorio hasta kilojulios en transporte.
    en: From a few joules in lab setups to kilojoules in transport.
  sign_behavior:
    es: Depende de la referencia elegida para U.
    en: Depends on the chosen baseline for U.
  zero_behavior:
    es: Puede ser cero si K y U se anulan con la referencia adoptada.
    en: It can be zero if K and U vanish under the chosen baseline.
  value_nature: derived
  interpretation_role: resume el contenido energetico mecanico del estado
  graph_binding: curva total K+U en Coord
  pedagogical_notes:
    es: Sirve para distinguir definicion de estado y ley de conservacion.
    en: It helps distinguish state definition from conservation law.
- id: K
  symbol: K
  nombre:
    es: energia cinetica
    en: kinetic energy
  unidad_si: J
  descripcion:
    es: Parte de la energia mecanica asociada al movimiento.
    en: Mechanical-energy contribution associated with motion.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_energy
  physical_role: reserva mecanica ligada a la rapidez
  used_in:
  - energia_mecanica_total
  - estados_conservativos
  common_mistake:
    es: Tratarla como magnitud con signo de la velocidad.
    en: Treating it as a signed quantity following velocity.
  typical_range:
    es: No negativa; crece con la rapidez del sistema.
    en: Non-negative; grows with system speed.
  sign_behavior:
    es: Nunca debe salir negativa en mecanica clasica.
    en: It must never be negative in classical mechanics.
  zero_behavior:
    es: Vale cero en reposo del sistema elegido.
    en: It is zero when the chosen system is at rest.
  value_nature: derived
  interpretation_role: muestra cuanto presupuesto energetico lleva el movimiento
  graph_binding: curva de intercambio con U
  pedagogical_notes:
    es: Su constancia no define un sistema conservativo; lo hace Em.
    en: Its constancy does not define a conservative system; Em does.
- id: U
  symbol: U
  nombre:
    es: energia potencial
    en: potential energy
  unidad_si: J
  descripcion:
    es: Energia asociada a configuracion o posicion bajo una fuerza conservativa.
    en: Energy associated with configuration or position under a conservative force.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_energy
  physical_role: energia almacenada por configuracion
  used_in:
  - energia_mecanica_total
  - trabajo_conservativo
  common_mistake:
    es: Cambiar la referencia entre estados sin avisarlo.
    en: Changing the baseline between states without stating it.
  typical_range:
    es: Depende de la referencia y del tipo de potencial.
    en: It depends on baseline and potential type.
  sign_behavior:
    es: Puede ser positiva, nula o negativa segun referencia.
    en: It may be positive, zero, or negative depending on the baseline.
  zero_behavior:
    es: El cero es convencional, no fisicamente absoluto.
    en: Zero is conventional, not physically absolute.
  value_nature: modeled
  interpretation_role: traduce configuracion en presupuesto energetico recuperable
  graph_binding: curva complementaria de K
  pedagogical_notes:
    es: Requiere una referencia fija para comparar estados.
    en: It requires a fixed baseline to compare states.
- id: Wc
  symbol: W_c
  nombre:
    es: trabajo conservativo
    en: conservative work
  unidad_si: J
  descripcion:
    es: Trabajo realizado por la parte conservativa de la interaccion.
    en: Work performed by the conservative part of the interaction.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: transfer
  physical_role: conecta el cambio de U con la trayectoria en fuerzas conservativas
  used_in:
  - trabajo_conservativo
  common_mistake:
    es: Darle signo contrario al de dU.
    en: Giving it the wrong sign relative to dU.
  typical_range:
    es: Del mismo orden que la variacion potencial considerada.
    en: Of the same order as the potential-energy change.
  sign_behavior:
    es: Si U disminuye, Wc suele ser positiva.
    en: If U decreases, Wc is usually positive.
  zero_behavior:
    es: Vale cero si no hay cambio de potencial o no actua la fuerza conservativa.
    en: It is zero if there is no potential change or no conservative force acts.
  value_nature: derived
  interpretation_role: muestra como la energia potencial se transforma en energia mecanica util
  graph_binding: diferencia entre dos niveles de U
  pedagogical_notes:
    es: No depende de la trayectoria cuando la fuerza es conservativa.
    en: It does not depend on path when the force is conservative.
- id: dU
  symbol: \\Delta U
  nombre:
    es: variacion de energia potencial
    en: change in potential energy
  unidad_si: J
  descripcion:
    es: Cambio de energia potencial entre un estado inicial y uno final.
    en: Change in potential energy between an initial and a final state.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: difference
  physical_role: mide el cambio configuracional del sistema
  used_in:
  - trabajo_conservativo
  common_mistake:
    es: Intercambiar Ui y Uf y cambiar el signo físico del proceso.
    en: Swapping Ui and Uf and reversing the physical sign of the process.
  typical_range:
    es: Mismo orden que U cuando el salto entre estados es relevante.
    en: Same order as U when the state jump is relevant.
  sign_behavior:
    es: Positiva si el potencial final supera al inicial.
    en: Positive if final potential exceeds initial potential.
  zero_behavior:
    es: Vale cero si ambos estados comparten el mismo potencial.
    en: It is zero if both states share the same potential.
  value_nature: derived
  interpretation_role: cuantifica el desplazamiento energetico de la configuracion
  graph_binding: salto entre Ui y Uf
  pedagogical_notes:
    es: Debe leerse siempre con una referencia potencial coherente.
    en: It must always be read with a coherent potential baseline.
- id: Wnc
  symbol: W_{nc}
  nombre:
    es: trabajo no conservativo
    en: non-conservative work
  unidad_si: J
  descripcion:
    es: Intercambio mecanico neto debido a rozamiento, motores u otras acciones no conservativas.
    en: Net mechanical exchange due to friction, motors, or other non-conservative actions.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: transfer
  physical_role: corrige el balance ideal cuando Em deja de conservarse
  used_in:
  - extension_no_conservativa
  common_mistake:
    es: Ignorarlo y aplicar conservacion ideal por costumbre.
    en: Ignoring it and enforcing ideal conservation by habit.
  typical_range:
    es: Puede ser negativo en disipacion o positivo en aporte externo.
    en: It can be negative in dissipation or positive under external input.
  sign_behavior:
    es: El signo depende del convenio de trabajo adoptado.
    en: Its sign depends on the adopted work convention.
  zero_behavior:
    es: Wnc igual a cero recupera el caso conservativo ideal.
    en: Wnc equal to zero recovers the ideal conservative case.
  value_nature: derived
  interpretation_role: indica cuanto se aparta el problema del modelo conservativo puro
  graph_binding: desplazamiento vertical de la curva Em
  pedagogical_notes:
    es: Es la magnitud clave para decidir si el sistema sigue siendo conservativo.
    en: It is the key quantity for deciding whether the system remains conservative.
- id: Ki
  symbol: K_i
  nombre:
    es: energia cinetica inicial
    en: initial kinetic energy
  unidad_si: J
  descripcion:
    es: Energia cinetica del sistema en el estado inicial.
    en: System kinetic energy in the initial state.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_energy
  physical_role: ancla dinamica del estado inicial
  used_in:
  - estados_conservativos
  - extension_no_conservativa
  common_mistake:
    es: Mezclarla con una velocidad de otro instante.
    en: Mixing it with a speed from another instant.
  typical_range:
    es: No negativa y dependiente del estado inicial elegido.
    en: Non-negative and dependent on the chosen initial state.
  sign_behavior:
    es: Nunca negativa.
    en: Never negative.
  zero_behavior:
    es: Vale cero si el sistema parte del reposo.
    en: It is zero if the system starts from rest.
  value_nature: measured_or_derived
  interpretation_role: fija el presupuesto dinamico de partida
  graph_binding: punto inicial de la curva K
  pedagogical_notes:
    es: Debe pertenecer al mismo sistema que Ui, Kf y Uf.
    en: It must belong to the same system as Ui, Kf, and Uf.
- id: Kf
  symbol: K_f
  nombre:
    es: energia cinetica final
    en: final kinetic energy
  unidad_si: J
  descripcion:
    es: Energia cinetica del sistema en el estado final.
    en: System kinetic energy in the final state.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_energy
  physical_role: cierra la lectura dinamica final del balance
  used_in:
  - estados_conservativos
  - extension_no_conservativa
  common_mistake:
    es: Olvidar que debe ser compatible con el modelo y con Uf.
    en: Forgetting it must be compatible with the model and with Uf.
  typical_range:
    es: No negativa y fijada por el estado final elegido.
    en: Non-negative and fixed by the chosen final state.
  sign_behavior:
    es: Nunca negativa.
    en: Never negative.
  zero_behavior:
    es: Vale cero si el sistema termina en reposo.
    en: It is zero if the system ends at rest.
  value_nature: measured_or_derived
  interpretation_role: muestra como termina el reparto entre movimiento y configuracion
  graph_binding: punto final de la curva K
  pedagogical_notes:
    es: Suele ser el target natural de los balances entre estados.
    en: It is often the natural target of state-to-state balances.
- id: Ui
  symbol: U_i
  nombre:
    es: energia potencial inicial
    en: initial potential energy
  unidad_si: J
  descripcion:
    es: Energia potencial del sistema en el estado inicial.
    en: System potential energy in the initial state.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_energy
  physical_role: ancla configuracional del estado inicial
  used_in:
  - estados_conservativos
  - extension_no_conservativa
  common_mistake:
    es: Usar una referencia distinta de la empleada en Uf.
    en: Using a different baseline from the one used in Uf.
  typical_range:
    es: Depende del potencial y de la referencia escogida.
    en: It depends on the potential and chosen baseline.
  sign_behavior:
    es: Puede tomar cualquier signo consistente con la referencia.
    en: It may take any sign consistent with the baseline.
  zero_behavior:
    es: Cero solo significa referencia elegida, no ausencia de interaccion.
    en: Zero only means chosen baseline, not absence of interaction.
  value_nature: measured_or_derived
  interpretation_role: fija la parte configuracional inicial del balance
  graph_binding: punto inicial de la curva U
  pedagogical_notes:
    es: Debe leerse con la misma referencia que Uf y U.
    en: It must be read with the same baseline as Uf and U.
- id: Uf
  symbol: U_f
  nombre:
    es: energia potencial final
    en: final potential energy
  unidad_si: J
  descripcion:
    es: Energia potencial del sistema en el estado final.
    en: System potential energy in the final state.
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_energy
  physical_role: cierra la lectura configuracional final del balance
  used_in:
  - estados_conservativos
  - extension_no_conservativa
  common_mistake:
    es: Compararla con Ui usando otra referencia.
    en: Comparing it with Ui under a different baseline.
  typical_range:
    es: Depende del potencial y del estado final elegido.
    en: It depends on the potential and chosen final state.
  sign_behavior:
    es: Puede ser positiva, nula o negativa segun la referencia.
    en: It may be positive, zero, or negative depending on the baseline.
  zero_behavior:
    es: No implica por si sola que no exista potencial.
    en: It does not by itself imply absence of potential.
  value_nature: measured_or_derived
  interpretation_role: cierra la parte configuracional del reparto energetico final
  graph_binding: punto final de la curva U
  pedagogical_notes:
    es: Debe contrastarse con Kf para interpretar el estado final.
    en: It must be contrasted with Kf to interpret the final state.
`;export{e as default};
