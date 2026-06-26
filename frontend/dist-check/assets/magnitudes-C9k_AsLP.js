const e=`version: 1
magnitudes:
- id: m
  symbol: m
  nombre: {es: masa, en: mass}
  descripcion: {es: Masa del cuerpo que recorre el loop., en: Mass of the body going through the loop.}
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: []
  category: fundamental
  physical_role: inertia
  used_in: [radial_general, punto_alto, punto_bajo]
  common_mistake: "Creer que la masa afecta la velocidad minima."
  typical_range: "0.01 - 10000 kg"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin masa no hay fuerza centripeta., en: Without mass there is no centripetal force.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.01, 10000] kg"}
  interpretation_role: {primary_for: [radial_general], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Se cancela en la velocidad minima."
- id: r
  symbol: r
  nombre: {es: radio del loop, en: loop radius}
  descripcion: {es: Radio de la trayectoria circular del loop., en: Radius of the circular loop path.}
  unidad_si: "m"
  dimension: "L"
  is_vector: false
  components: []
  category: fundamental
  physical_role: geometric_parameter
  used_in: [radial_general, punto_alto, punto_bajo, velocidad_minima_alto, velocidad_minima_bajo]
  common_mistake: "Usar el diametro en lugar del radio."
  typical_range: "0.1 - 100 m"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Radio nulo no define loop., en: Zero radius defines no loop.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.1, 100] m"}
  interpretation_role: {primary_for: [velocidad_minima_alto, velocidad_minima_bajo], secondary_for: [radial_general]}
  graph_binding: {channels: []}
  pedagogical_notes: "Medir desde el centro del loop."
- id: g
  symbol: g
  nombre: {es: gravedad, en: gravitational acceleration}
  descripcion: {es: Aceleracion gravitatoria terrestre., en: Terrestrial gravitational acceleration.}
  unidad_si: "m/s^2"
  dimension: "LT^{-2}"
  is_vector: false
  components: []
  category: constant
  physical_role: gravitational_field
  used_in: [punto_alto, punto_bajo, velocidad_minima_alto, velocidad_minima_bajo]
  common_mistake: "Confundir g con G."
  typical_range: "9.78 - 9.82 m/s^2"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo en modulo., en: Always positive in magnitude.}}
  zero_behavior: {allowed: false, meaning: {es: Sin gravedad no hay peso., en: Without gravity there is no weight.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[9.78, 9.82] m/s^2"}
  interpretation_role: {primary_for: [], secondary_for: [velocidad_minima_alto]}
  graph_binding: {channels: []}
  pedagogical_notes: "Se toma 9.8 m/s^2 salvo indicacion contraria."
- id: v
  symbol: v
  nombre: {es: rapidez en el loop, en: speed in the loop}
  descripcion: {es: Rapidez del cuerpo en un punto generico del loop., en: Speed of the body at a generic point of the loop.}
  unidad_si: "m/s"
  dimension: "LT^{-1}"
  is_vector: false
  components: []
  category: fundamental
  physical_role: kinematic_variable
  used_in: [radial_general]
  common_mistake: "Olvidar que v varia a lo largo del loop."
  typical_range: "0.1 - 100 m/s"
  sign_behavior: {has_sign: false, meaning: {es: Rapidez siempre positiva., en: Speed always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin rapidez no hay giro., en: Without speed there is no turn.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.1, 100] m/s"}
  interpretation_role: {primary_for: [radial_general], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Es minima en el punto alto y maxima en el bajo."
- id: vT
  symbol: "v_{T}"
  nombre: {es: velocidad en el punto alto, en: speed at the top}
  descripcion: {es: Rapidez del cuerpo en el punto mas alto del loop., en: Speed of the body at the highest point of the loop.}
  unidad_si: "m/s"
  dimension: "LT^{-1}"
  is_vector: false
  components: []
  category: derived
  physical_role: kinematic_variable
  used_in: [punto_alto, velocidad_minima_alto]
  common_mistake: "Creer que es cero en el punto alto."
  typical_range: "0.5 - 50 m/s"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin rapidez el cuerpo cae antes de completar el loop., en: Without speed the body falls before completing the loop.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.5, 50] m/s"}
  interpretation_role: {primary_for: [velocidad_minima_alto, punto_alto], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Valor critico cuando la normal se anula."
- id: vB
  symbol: "v_{B}"
  nombre: {es: velocidad en el punto bajo, en: speed at the bottom}
  descripcion: {es: Rapidez del cuerpo en el punto mas bajo del loop., en: Speed of the body at the lowest point of the loop.}
  unidad_si: "m/s"
  dimension: "LT^{-1}"
  is_vector: false
  components: []
  category: derived
  physical_role: kinematic_variable
  used_in: [punto_bajo, velocidad_minima_bajo]
  common_mistake: "No distinguirla de la velocidad en el punto alto."
  typical_range: "1 - 100 m/s"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin rapidez no entra al loop., en: Without speed it does not enter the loop.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[1, 100] m/s"}
  interpretation_role: {primary_for: [velocidad_minima_bajo, punto_bajo], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Es mayor que vT por conservacion de energia."
- id: Nn
  symbol: "N"
  nombre: {es: fuerza normal, en: normal force}
  descripcion: {es: Fuerza de contacto de la pista sobre el cuerpo., en: Contact force from the track on the body.}
  unidad_si: "N"
  dimension: "MLT^{-2}"
  is_vector: false
  components: []
  category: contact_force
  physical_role: normal_force
  used_in: [punto_alto, punto_bajo]
  common_mistake: "Suponer que N siempre apunta hacia arriba."
  typical_range: "0 - 100000 N"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva en modulo; la pista empuja., en: Always positive in magnitude; the track pushes.}}
  zero_behavior: {allowed: true, meaning: {es: Normal nula indica perdida de contacto., en: Zero normal indicates loss of contact.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0, 100000] N"}
  interpretation_role: {primary_for: [punto_alto, punto_bajo], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Siempre perpendicular a la pista, apuntando hacia el centro."
- id: Frad
  symbol: "F_{rad}"
  nombre: {es: resultante radial, en: radial resultant}
  descripcion: {es: Fuerza neta dirigida hacia el centro del loop., en: Net force directed toward the centre of the loop.}
  unidad_si: "N"
  dimension: "MLT^{-2}"
  is_vector: false
  components: []
  category: resultant
  physical_role: centripetal_resultant
  used_in: [radial_general]
  common_mistake: "Anadir una fuerza centripeta extra al DCL."
  typical_range: "0 - 100000 N"
  sign_behavior: {has_sign: false, meaning: {es: Siempre hacia el centro., en: Always toward the centre.}}
  zero_behavior: {allowed: false, meaning: {es: Sin fuerza radial no hay movimiento circular., en: Without radial force there is no circular motion.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0, 100000] N"}
  interpretation_role: {primary_for: [radial_general], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Suma vectorial de N y la componente radial del peso."
- id: ac
  symbol: "a_c"
  nombre: {es: aceleracion centripeta, en: centripetal acceleration}
  descripcion: {es: Aceleracion radial dirigida hacia el centro del loop., en: Radial acceleration directed toward the centre of the loop.}
  unidad_si: "m/s^2"
  dimension: "LT^{-2}"
  is_vector: false
  components: []
  category: derived
  physical_role: centripetal_acceleration
  used_in: [radial_general]
  common_mistake: "Confundir centripeta con tangencial."
  typical_range: "0.1 - 1000 m/s^2"
  sign_behavior: {has_sign: false, meaning: {es: Siempre hacia el centro., en: Always toward the centre.}}
  zero_behavior: {allowed: false, meaning: {es: Sin aceleracion la trayectoria es recta., en: Without acceleration the path is straight.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.1, 1000] m/s^2"}
  interpretation_role: {primary_for: [], secondary_for: [radial_general]}
  graph_binding: {channels: []}
  pedagogical_notes: "Igual a v^2/r en cada punto."
- id: E
  symbol: "E"
  nombre: {es: energia mecanica, en: mechanical energy}
  descripcion: {es: Suma de energias cinetica y potencial del cuerpo., en: Sum of kinetic and potential energy of the body.}
  unidad_si: "J"
  dimension: "ML^2T^{-2}"
  is_vector: false
  components: []
  category: conserved
  physical_role: total_energy
  used_in: [velocidad_minima_bajo]
  common_mistake: "Olvidar incluir la energia potencial al cambiar de altura."
  typical_range: "0.1 - 1000000 J"
  sign_behavior: {has_sign: true, meaning: {es: Puede ser cero si se elige la referencia adecuada., en: Can be zero if the reference is chosen appropriately.}}
  zero_behavior: {allowed: true, meaning: {es: Energia nula si la referencia coincide con el estado., en: Zero energy if the reference matches the state.}}
  value_nature: {kind: scalar, nonnegative_only: false, expected_interval: "[0, 1000000] J"}
  interpretation_role: {primary_for: [], secondary_for: [velocidad_minima_bajo]}
  graph_binding: {channels: []}
  pedagogical_notes: "Se conserva si no hay rozamiento."`;export{e as default};
