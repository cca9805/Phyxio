const e=`version: 5
magnitudes:
  - id: dp
    symbol: \\Delta p
    nombre:
      es: Diferencia de presión
      en: Pressure difference
    unidad_si: Pa
    dimension: ML^{-1}T^{-2}
    is_vector: false
    components: []
    category: mecanica-fluidos
    physical_role: variable-control
    used_in: [delta_pitot, velocidad_pitot]
    common_mistake:
      es: Confundirla con la presión estática o la presión total por separado.
      en: Confusing it with static pressure or total pressure separately.
    typical_range: [10, 5000]
    sign_behavior: siempre_positivo
    zero_behavior: flujo_detenido
    value_nature: diferencia
    interpretation_role: indicador-energia
    graph_binding: eje-x
    pedagogical_notes:
      es: Es la clave del Tubo de Pitot; representa la energía cinética transformada en presión.
      en: It is the key to the Pitot Tube; it represents kinetic energy transformed into pressure.
    descripcion:
      es: Diferencia entre la presión de estancamiento (total) y la presión estática del flujo.
      en: Difference between stagnation (total) pressure and static flow pressure.

  - id: p_t
    symbol: p_{t}
    nombre:
      es: Presión total
      en: Total pressure
    unidad_si: Pa
    dimension: ML^{-1}T^{-2}
    is_vector: false
    components: []
    category: mecanica-fluidos
    physical_role: parametro-estado
    used_in: [delta_pitot]
    common_mistake:
      es: Pensar que es la presión en cualquier punto del fluido (solo es en estancamiento).
      en: Thinking it is the pressure at any point in the fluid (only at stagnation).
    typical_range: [100000, 110000]
    sign_behavior: siempre_positivo
    zero_behavior: imposible
    value_nature: absoluto
    interpretation_role: potencial-maximo
    graph_binding: ninguno
    pedagogical_notes:
      es: También llamada presión de impacto o de estancamiento.
      en: Also called impact or stagnation pressure.
    descripcion:
      es: Presión del fluido en el punto donde su velocidad se reduce a cero (punto de estancamiento).
      en: Fluid pressure at the point where its velocity is reduced to zero (stagnation point).

  - id: p
    symbol: p
    nombre:
      es: Presión estática
      en: Static pressure
    unidad_si: Pa
    dimension: ML^{-1}T^{-2}
    is_vector: false
    components: []
    category: mecanica-fluidos
    physical_role: parametro-estado
    used_in: [delta_pitot]
    common_mistake:
      es: Ignorar que esta es la presión que sentiría un observador moviéndose con el fluido.
      en: Ignoring that this is the pressure an observer moving with the fluid would feel.
    typical_range: [90000, 101325]
    sign_behavior: siempre_positivo
    zero_behavior: vacio
    value_nature: absoluto
    interpretation_role: nivel-base
    graph_binding: ninguno
    pedagogical_notes:
      es: Es la presión termodinámica real del fluido.
      en: It is the actual thermodynamic pressure of the fluid.
    descripcion:
      es: Presión real del fluido en movimiento, medida perpendicularmente a la dirección del flujo.
      en: Actual pressure of the moving fluid, measured perpendicularly to the flow direction.

  - id: v
    symbol: v
    nombre:
      es: Velocidad
      en: Velocity
    unidad_si: m/s
    dimension: LT^{-1}
    is_vector: true
    components: [v_x]
    category: cinematica-fluidos
    physical_role: magnitud-estrella
    used_in: [velocidad_pitot]
    common_mistake:
      es: No distinguir entre velocidad de corriente libre y velocidad en el punto de estancamiento (que es cero).
      en: Not distinguishing between free stream velocity and velocity at the stagnation point (which is zero).
    typical_range: [1, 300]
    sign_behavior: modulo
    zero_behavior: reposo
    value_nature: cinetico
    interpretation_role: objetivo-medicion
    graph_binding: eje-y
    pedagogical_notes:
      es: Es la magnitud que el Tubo de Pitot pretende medir indirectamente.
      en: It is the magnitude that the Pitot Tube aims to measure indirectly.
    descripcion:
      es: Rapidez local del fluido incidente antes de ser perturbado por la sonda.
      en: Local speed of the incident fluid before being disturbed by the probe.

  - id: rho
    symbol: \\rho
    nombre:
      es: Densidad
      en: Density
    unidad_si: kg/m^3
    dimension: ML^{-3}
    is_vector: false
    components: []
    category: propiedades-materia
    physical_role: parametro-fluido
    used_in: [velocidad_pitot]
    common_mistake:
      es: Usar la densidad del líquido manométrico en lugar de la del fluido cuya velocidad se mide.
      en: Using the density of the manometric liquid instead of the fluid whose velocity is measured.
    typical_range: [0.1, 15000]
    sign_behavior: siempre_positivo
    zero_behavior: vacio
    value_nature: intrinseco
    interpretation_role: factor-inercia
    graph_binding: parametro
    pedagogical_notes:
      es: Crucial para convertir la presión dinámica en velocidad; representa la inercia del fluido.
      en: Crucial for converting dynamic pressure into velocity; it represents fluid inertia.
    descripcion:
      es: Masa por unidad de volumen del fluido en movimiento.
      en: Mass per unit volume of the moving fluid.
`;export{e as default};
