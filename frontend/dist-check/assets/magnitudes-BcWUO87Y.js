const e=`version: 1
magnitudes:
- id: m
  symbol: m
  nombre: {es: masa, en: mass}
  descripcion: {es: Masa del cuerpo que describe la trayectoria circular., en: Mass of the body following the circular path.}
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: []
  category: fundamental
  physical_role: inertia
  used_in: [base_radial, cuerda_tension, curva_plana_velocidad_max, fuerza_centripeta_modulo, loop_contacto_minimo, orbita_circular]
  common_mistake: "Confundir masa con peso."
  typical_range: "0.01 - 10000 kg"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin masa no hay fuerza centripeta., en: Without mass there is no centripetal force.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.01, 10000] kg"}
  interpretation_role: {primary_for: [base_radial], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Parametro basico."
- id: r
  symbol: r
  nombre: {es: radio, en: radius}
  descripcion: {es: Radio de la trayectoria circular o radio de curvatura local., en: Radius of the circular path or local radius of curvature.}
  unidad_si: "m"
  dimension: "L"
  is_vector: false
  components: []
  category: fundamental
  physical_role: geometric_parameter
  used_in: [base_radial, cuerda_tension, curva_plana_velocidad_max, peralte_ideal, loop_contacto_minimo, orbita_circular]
  common_mistake: "Usar el diametro en lugar del radio."
  typical_range: "0.1 - 10000000 m"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Radio cero no define trayectoria., en: Zero radius defines no path.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.1, 10000000] m"}
  interpretation_role: {primary_for: [base_radial], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Medir desde el centro de curvatura."
- id: v
  symbol: v
  nombre: {es: rapidez tangencial, en: tangential speed}
  descripcion: {es: Rapidez de paso del cuerpo por la trayectoria., en: Speed of the body along the trajectory.}
  unidad_si: "m/s"
  dimension: "LT^{-1}"
  is_vector: false
  components: []
  category: fundamental
  physical_role: kinematic_variable
  used_in: [base_radial, cuerda_tension, curva_plana_velocidad_max, peralte_ideal, loop_contacto_minimo, orbita_circular]
  common_mistake: "Olvidar que v es tangente a la trayectoria."
  typical_range: "0.1 - 10000 m/s"
  sign_behavior: {has_sign: false, meaning: {es: Modulo siempre positivo., en: Magnitude always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin rapidez no hay giro., en: Without speed there is no turn.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.1, 10000] m/s"}
  interpretation_role: {primary_for: [base_radial], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Siempre tangente a la circunferencia."
- id: ac
  symbol: a_c
  nombre: {es: aceleracion centripeta, en: centripetal acceleration}
  descripcion: {es: Aceleracion radial dirigida hacia el centro., en: Radial acceleration directed toward the centre.}
  unidad_si: "m/s^2"
  dimension: "LT^{-2}"
  is_vector: false
  components: []
  category: derived
  physical_role: centripetal_acceleration
  used_in: [base_radial]
  common_mistake: "Creer que cambia la rapidez."
  typical_range: "0.01 - 100000 m/s^2"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo en modulo., en: Always positive in magnitude.}}
  zero_behavior: {allowed: false, meaning: {es: Sin aceleracion la trayectoria seria recta., en: Without acceleration the path would be straight.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.01, 100000] m/s^2"}
  interpretation_role: {primary_for: [base_radial], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Siempre apunta al centro."
- id: Frad
  symbol: F_{rad}
  nombre: {es: resultante radial, en: radial resultant}
  descripcion: {es: Suma de fuerzas reales proyectadas sobre el eje radial., en: Sum of real forces projected along the radial axis.}
  unidad_si: "N"
  dimension: "MLT^{-2}"
  is_vector: false
  components: []
  category: derived
  physical_role: net_radial_force
  used_in: [base_radial]
  common_mistake: "Anadir fuerza centripeta como fuerza extra."
  typical_range: "0.01 - 100000 N"
  sign_behavior: {has_sign: false, meaning: {es: Positivo hacia el centro., en: Positive toward the centre.}}
  zero_behavior: {allowed: false, meaning: {es: Sin resultante no hay giro., en: Without resultant there is no turn.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.01, 100000] N"}
  interpretation_role: {primary_for: [base_radial], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Solo fuerzas reales en el DCL."
- id: Fc
  symbol: F_c
  nombre: {es: modulo fuerza centripeta, en: centripetal force magnitude}
  descripcion: {es: Modulo de la fuerza neta radial requerida., en: Magnitude of the required net radial force.}
  unidad_si: "N"
  dimension: "MLT^{-2}"
  is_vector: false
  components: []
  category: derived
  physical_role: centripetal_force
  used_in: [base_radial]
  common_mistake: "Dibujarla como fuerza adicional."
  typical_range: "0.01 - 100000 N"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin fuerza centripeta no hay giro., en: Without centripetal force there is no turn.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.01, 100000] N"}
  interpretation_role: {primary_for: [base_radial], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Es la resultante, no una fuerza nueva."
- id: Tn
  symbol: T
  nombre: {es: tension, en: tension}
  descripcion: {es: Tension en la cuerda o cable., en: Tension in the rope or cable.}
  unidad_si: "N"
  dimension: "MLT^{-2}"
  is_vector: false
  components: []
  category: fundamental
  physical_role: contact_force
  used_in: [cuerda_tension]
  common_mistake: "Olvidar que T depende de la posicion en giro vertical."
  typical_range: "0 - 10000 N"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva o cero., en: Always positive or zero.}}
  zero_behavior: {allowed: true, meaning: {es: Cuerda laxa o punto de contacto perdido., en: Loose rope or lost contact point.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0, 10000] N"}
  interpretation_role: {primary_for: [cuerda_tension], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Fuerza real que aporta componente centripeta."
- id: Nn
  symbol: N
  nombre: {es: normal, en: normal force}
  descripcion: {es: Reaccion normal del apoyo., en: Normal reaction from the support.}
  unidad_si: "N"
  dimension: "MLT^{-2}"
  is_vector: false
  components: []
  category: fundamental
  physical_role: contact_force
  used_in: [loop_contacto_minimo]
  common_mistake: "Suponer que la normal siempre iguala al peso."
  typical_range: "0 - 100000 N"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva o cero., en: Always positive or zero.}}
  zero_behavior: {allowed: true, meaning: {es: Perdida de contacto con la superficie., en: Loss of contact with the surface.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0, 100000] N"}
  interpretation_role: {primary_for: [loop_contacto_minimo], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "En un loop varia con la posicion angular."
- id: fs
  symbol: f_s
  nombre: {es: rozamiento estatico, en: static friction}
  descripcion: {es: Fuerza de rozamiento estatico lateral., en: Lateral static friction force.}
  unidad_si: "N"
  dimension: "MLT^{-2}"
  is_vector: false
  components: []
  category: fundamental
  physical_role: friction_force
  used_in: [curva_plana_velocidad_max]
  common_mistake: "Confundir estatico con dinamico."
  typical_range: "0 - 50000 N"
  sign_behavior: {has_sign: false, meaning: {es: Modulo siempre positivo., en: Magnitude always positive.}}
  zero_behavior: {allowed: true, meaning: {es: Sin rozamiento el vehiculo derrapa., en: Without friction the vehicle skids.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0, 50000] N"}
  interpretation_role: {primary_for: [curva_plana_velocidad_max], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Aporta la componente centripeta en curva plana."
- id: mu
  symbol: mu_s
  nombre: {es: coeficiente de rozamiento estatico, en: static friction coefficient}
  descripcion: {es: Coeficiente adimensional de rozamiento estatico., en: Dimensionless static friction coefficient.}
  unidad_si: "1"
  dimension: "1"
  is_vector: false
  components: []
  category: fundamental
  physical_role: material_property
  used_in: [curva_plana_velocidad_max]
  common_mistake: "Usar coeficiente dinamico en lugar de estatico."
  typical_range: "0.1 - 1.2"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin rozamiento no hay curva plana segura., en: Without friction no flat curve is safe.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0.1, 1.2]"}
  interpretation_role: {primary_for: [curva_plana_velocidad_max], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Depende del par de superficies."
- id: g
  symbol: g
  nombre: {es: aceleracion de la gravedad, en: gravitational acceleration}
  descripcion: {es: Intensidad del campo gravitatorio local., en: Local gravitational field magnitude.}
  unidad_si: "m/s^2"
  dimension: "LT^{-2}"
  is_vector: false
  components: []
  category: constant
  physical_role: gravitational_field
  used_in: [curva_plana_velocidad_max, peralte_ideal, loop_contacto_minimo]
  common_mistake: "Olvidar ajustar g en altitudes elevadas."
  typical_range: "9.8 m/s^2"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: g no puede ser cero en la superficie., en: g cannot be zero at the surface.}}
  value_nature: {kind: constant, nonnegative_only: true, expected_interval: "[9.7, 9.9] m/s^2"}
  interpretation_role: {primary_for: [loop_contacto_minimo], secondary_for: [curva_plana_velocidad_max]}
  graph_binding: {channels: []}
  pedagogical_notes: "Valor estandar 9.8 m/s^2."
- id: th
  symbol: \\theta
  nombre: {es: angulo de peralte, en: banking angle}
  descripcion: {es: Angulo de inclinacion de la curva peraltada., en: Inclination angle of the banked curve.}
  unidad_si: "rad"
  dimension: "1"
  is_vector: false
  components: []
  category: fundamental
  physical_role: geometric_parameter
  used_in: [peralte_ideal]
  common_mistake: "Confundir angulo de peralte con angulo de friccion."
  typical_range: "0 - 1.0 rad"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positivo., en: Always positive.}}
  zero_behavior: {allowed: true, meaning: {es: Sin peralte es una curva plana., en: Without banking it is a flat curve.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[0, 1.0] rad"}
  interpretation_role: {primary_for: [peralte_ideal], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Medido respecto a la horizontal."
- id: G
  symbol: G
  nombre: {es: constante de gravitacion, en: gravitational constant}
  descripcion: {es: Constante universal de gravitacion., en: Universal gravitational constant.}
  unidad_si: "N m^2/kg^2"
  dimension: "M^{-1}L^3T^{-2}"
  is_vector: false
  components: []
  category: constant
  physical_role: fundamental_constant
  used_in: [orbita_circular]
  common_mistake: "Confundir G con g."
  typical_range: "6.674e-11"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: G no puede ser cero., en: G cannot be zero.}}
  value_nature: {kind: constant, nonnegative_only: true, expected_interval: "[6.674e-11, 6.674e-11]"}
  interpretation_role: {primary_for: [orbita_circular], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "Constante fundamental."
- id: M
  symbol: M
  nombre: {es: masa central, en: central mass}
  descripcion: {es: Masa del cuerpo central alrededor del cual se orbita., en: Mass of the central body being orbited.}
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: []
  category: fundamental
  physical_role: gravitational_source
  used_in: [orbita_circular]
  common_mistake: "Confundir masa central con masa del satelite."
  typical_range: "1e20 - 2e30 kg"
  sign_behavior: {has_sign: false, meaning: {es: Siempre positiva., en: Always positive.}}
  zero_behavior: {allowed: false, meaning: {es: Sin masa central no hay orbita., en: Without central mass there is no orbit.}}
  value_nature: {kind: scalar, nonnegative_only: true, expected_interval: "[1e20, 2e30] kg"}
  interpretation_role: {primary_for: [orbita_circular], secondary_for: []}
  graph_binding: {channels: []}
  pedagogical_notes: "La Tierra tiene M = 5.97e24 kg."`;export{e as default};
