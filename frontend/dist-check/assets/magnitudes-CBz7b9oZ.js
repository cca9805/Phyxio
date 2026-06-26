const e=`version: 5
magnitudes:
- id: Ug
  symbol: U_g
  nombre:
    es: energia potencial gravitatoria
    en: gravitational potential energy
  descripcion:
    es: Energia de estado asociada a la posicion vertical en campo gravitatorio uniforme.
    en: State energy associated with vertical position in a uniform gravitational field.
  unidad_si: J
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: derived
  physical_role: state_energy
  used_in: [ formulas, theory, examples, interpretation, graph ]
  common_mistake:
    es: Tratar Ug como energia absoluta universal sin declarar referencia de altura.
    en: Treating Ug as a universal absolute energy without declaring a height reference.
  typical_range:
    es: Desde pocos julios en laboratorio hasta miles de julios en elevacion industrial.
    en: From a few joules in labs to thousands of joules in industrial lifting.
  sign_behavior:
    es: El signo depende de la referencia elegida para h.
    en: The sign depends on the chosen reference for h.
  zero_behavior:
    es: Ug vale cero en la altura de referencia escogida por el analista.
    en: Ug is zero at the reference height chosen by the analyst.
  value_nature: derived
  interpretation_role: target
  graph_binding: Coord_y
  pedagogical_notes:
    es: Leer Ug como variable de estado evita confundirla con trabajo instantaneo.
    en: Reading Ug as a state variable prevents confusion with instantaneous work.
- id: m
  symbol: m
  nombre:
    es: masa
    en: mass
  descripcion:
    es: Cantidad de materia del cuerpo cuya energia se evalua.
    en: Amount of matter of the body whose energy is evaluated.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: []
  category: base
  physical_role: inertial_property
  used_in: [ formulas, theory, examples, interpretation ]
  common_mistake:
    es: Mezclar masa en gramos con formulas en unidades SI.
    en: Mixing mass in grams with formulas in SI units.
  typical_range:
    es: Desde decimas de kilogramo en aula hasta toneladas en aplicaciones tecnicas.
    en: From tenths of a kilogram in class to tons in technical applications.
  sign_behavior:
    es: Magnitud escalar positiva en problemas mecanicos clasicos.
    en: Positive scalar magnitude in classical mechanics problems.
  zero_behavior:
    es: m igual a cero elimina el objeto fisico del modelo.
    en: m equal to zero removes the physical object from the model.
  value_nature: positive_scalar
  interpretation_role: input
  graph_binding: parameter
  pedagogical_notes:
    es: La masa escala linealmente Ug y dUg en el mismo escenario.
    en: Mass linearly scales Ug and dUg in the same scenario.
- id: g
  symbol: g
  nombre:
    es: aceleracion de la gravedad
    en: gravitational acceleration
  descripcion:
    es: Intensidad local del campo gravitatorio en aproximacion uniforme.
    en: Local gravitational field strength under the uniform approximation.
  unidad_si: m/s^2
  dimension: L T^-2
  is_vector: false
  components: []
  category: parameter
  physical_role: field_parameter
  used_in: [ formulas, theory, examples, interpretation ]
  common_mistake:
    es: Cambiar g entre pasos sin justificar ubicacion o aproximacion.
    en: Changing g between steps without justifying location or approximation.
  typical_range:
    es: Cercana a diez metros por segundo cuadrado en problemas introductorios.
    en: Close to ten meters per second squared in introductory problems.
  sign_behavior:
    es: Se usa como modulo positivo en el modelo escalar de altura.
    en: Used as a positive magnitude in the scalar height model.
  zero_behavior:
    es: g igual a cero elimina el acoplamiento gravitatorio local.
    en: g equal to zero removes local gravitational coupling.
  value_nature: positive_scalar
  interpretation_role: input
  graph_binding: parameter
  pedagogical_notes:
    es: Declarar g al inicio evita inconsistencias numericas entre ejercicios.
    en: Declaring g at the beginning prevents numerical inconsistencies.
- id: h
  symbol: h
  nombre:
    es: altura
    en: height
  descripcion:
    es: Coordenada vertical medida respecto de una referencia elegida.
    en: Vertical coordinate measured from a chosen reference.
  unidad_si: m
  dimension: L
  is_vector: false
  components: []
  category: state_variable
  physical_role: position_coordinate
  used_in: [ formulas, theory, examples, interpretation, graph ]
  common_mistake:
    es: Cambiar el cero de h entre estado inicial y final.
    en: Changing the zero of h between initial and final states.
  typical_range:
    es: Desde centimetros en laboratorio hasta decenas de metros en elevadores.
    en: From centimeters in labs to tens of meters in lifts.
  sign_behavior:
    es: Puede ser positiva o negativa segun referencia vertical.
    en: It can be positive or negative depending on vertical reference.
  zero_behavior:
    es: h cero define la cota de referencia, no ausencia de gravedad.
    en: h zero defines the reference level, not absence of gravity.
  value_nature: signed_scalar
  interpretation_role: input
  graph_binding: Coord_x
  pedagogical_notes:
    es: Solo las diferencias de altura tienen significado fisico directo.
    en: Only height differences have direct physical meaning.
- id: hi
  symbol: h_i
  nombre:
    es: altura inicial
    en: initial height
  descripcion:
    es: Altura del estado inicial en el mismo sistema de referencia.
    en: Height of the initial state in the same reference system.
  unidad_si: m
  dimension: L
  is_vector: false
  components: []
  category: boundary_condition
  physical_role: initial_state
  used_in: [ formulas, examples, interpretation ]
  common_mistake:
    es: Definir hi con referencia distinta de hf.
    en: Defining hi with a reference different from hf.
  typical_range:
    es: Depende del problema y de la referencia adoptada.
    en: Depends on the problem and adopted reference.
  sign_behavior:
    es: Su signo depende de la cota de referencia elegida.
    en: Its sign depends on the chosen reference level.
  zero_behavior:
    es: hi cero significa que el estado inicial coincide con la referencia.
    en: hi zero means the initial state matches the reference.
  value_nature: signed_scalar
  interpretation_role: input
  graph_binding: boundary
  pedagogical_notes:
    es: Declarar hi con claridad evita errores de signo en dUg.
    en: Declaring hi clearly avoids sign errors in dUg.
- id: hf
  symbol: h_f
  nombre:
    es: altura final
    en: final height
  descripcion:
    es: Altura del estado final en el mismo sistema de referencia.
    en: Height of the final state in the same reference system.
  unidad_si: m
  dimension: L
  is_vector: false
  components: []
  category: boundary_condition
  physical_role: final_state
  used_in: [ formulas, examples, interpretation ]
  common_mistake:
    es: Usar hf como desplazamiento sin referencia comun con hi.
    en: Using hf as displacement without a common reference with hi.
  typical_range:
    es: Depende del estado final y del marco vertical elegido.
    en: Depends on final state and selected vertical frame.
  sign_behavior:
    es: Comparado con hi determina el signo de dUg.
    en: Compared with hi it determines the sign of dUg.
  zero_behavior:
    es: hf cero indica estado final en la cota de referencia.
    en: hf zero indicates final state at the reference level.
  value_nature: signed_scalar
  interpretation_role: input
  graph_binding: boundary
  pedagogical_notes:
    es: Leer hf junto con hi mejora la interpretacion causal del proceso.
    en: Reading hf with hi improves causal process interpretation.
- id: dUg
  symbol: \\Delta U_g
  nombre:
    es: variacion de energia potencial gravitatoria
    en: change in gravitational potential energy
  descripcion:
    es: Cambio de energia de estado entre dos alturas del mismo sistema.
    en: State-energy change between two heights of the same system.
  unidad_si: J
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: difference
  physical_role: energy_change
  used_in: [ formulas, theory, examples, interpretation ]
  common_mistake:
    es: Confundir dUg con valor absoluto de Ug.
    en: Confusing dUg with an absolute value of Ug.
  typical_range:
    es: Puede ser positiva o negativa segun suba o baje el cuerpo.
    en: Can be positive or negative depending on ascent or descent.
  sign_behavior:
    es: Positiva al aumentar altura final frente a inicial.
    en: Positive when final height is larger than initial height.
  zero_behavior:
    es: dUg vale cero si no cambia la altura entre estados.
    en: dUg is zero if height does not change between states.
  value_nature: signed_scalar
  interpretation_role: target
  graph_binding: delta
  pedagogical_notes:
    es: dUg permite decidir sentido de transferencia energetica con una sola lectura.
    en: dUg lets you decide energy-transfer direction in one reading.
- id: Wg
  symbol: W_g
  nombre:
    es: trabajo de la gravedad
    en: work of gravity
  descripcion:
    es: Energia transferida por la fuerza gravitatoria durante el proceso.
    en: Energy transferred by gravitational force during the process.
  unidad_si: J
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: transfer
  physical_role: work_transfer
  used_in: [ formulas, theory, examples, interpretation ]
  common_mistake:
    es: Fijar el signo de Wg sin relacionarlo con dUg.
    en: Fixing Wg sign without relating it to dUg.
  typical_range:
    es: Del mismo orden que dUg para el mismo proceso.
    en: Same order as dUg for the same process.
  sign_behavior:
    es: En modelo conservativo cumple signo opuesto a dUg.
    en: In a conservative model it has opposite sign to dUg.
  zero_behavior:
    es: Wg es cero cuando no hay cambio de altura neto.
    en: Wg is zero when there is no net height change.
  value_nature: signed_scalar
  interpretation_role: target
  graph_binding: work
  pedagogical_notes:
    es: Comprobar Wg frente a dUg evita conclusiones fisicas inconsistentes.
    en: Checking Wg against dUg avoids inconsistent physical conclusions.
`;export{e as default};
