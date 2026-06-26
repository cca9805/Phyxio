const e=`version: 5
magnitudes:
  - id: eta
    symbol: \\eta
    nombre:
      es: Viscosidad dinámica
      en: Dynamic viscosity
    si_unit: "Pa*s"
    unidad_si: "Pa*s"
    dimension: M/(L*T)
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: resistencia_interna
    used_in: [poiseuille, v_max_def, perfil_velocidad]
    common_mistake: "Confundir con la viscosidad cinemática o ignorar su dependencia con la temperatura."
    sign_behavior: siempre_positivo
    zero_behavior: fluido_ideal
    value_nature: parametro_fluido
    interpretation_role: amortiguador_caos
    graph_binding: "Determina la pendiente del perfil de velocidades cerca de la pared."
    descripcion:
      es: Medida de la resistencia de un fluido a las deformaciones cortantes.
      en: Measure of a fluid's resistance to shear deformations.
    typical_range: [1e-5, 1e2]
    pedagogical_notes:
      es: Es el 'pegamento' que mantiene las láminas de fluido unidas en el régimen laminar.
      en: It is the 'glue' that keeps fluid layers together in the laminar regime.

  - id: Q
    symbol: Q
    nombre:
      es: Caudal volumétrico
      en: Volumetric flow rate
    si_unit: m^3/s
    unidad_si: m^3/s
    dimension: L^3/T
    is_vector: false
    components: []
    category: cinematica_fluidos
    physical_role: transporte_masa
    used_in: [poiseuille]
    common_mistake: "No elevar el radio a la cuarta potencia en los cálculos."
    sign_behavior: siempre_positivo
    zero_behavior: estancamiento
    value_nature: variable_flujo
    interpretation_role: indicador_eficiencia
    graph_binding: "Representa el volumen de la parábola de revolución del perfil de velocidades."
    descripcion:
      es: Volumen de fluido que pasa por una sección transversal por unidad de tiempo.
      en: Volume of fluid passing through a cross-section per unit of time.
    typical_range: [1e-12, 1e2]
    pedagogical_notes:
      es: En régimen laminar, depende linealmente de la caída de presión.
      en: In the laminar regime, it depends linearly on the pressure drop.

  - id: R
    symbol: R
    nombre:
      es: Radio del conducto
      en: Duct radius
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: escala_confinamiento
    used_in: [poiseuille, v_max_def, perfil_velocidad]
    common_mistake: "Usar el diámetro en lugar del radio."
    sign_behavior: siempre_positivo
    zero_behavior: obstruccion_total
    value_nature: parametro_escenario
    interpretation_role: limitador_espacial
    graph_binding: "Define los límites radiales de la tubería."
    descripcion:
      es: Distancia desde el eje central hasta la pared interna del conducto.
      en: Distance from the central axis to the inner wall of the duct.
    typical_range: [1e-6, 5]
    pedagogical_notes:
      es: Pequeños cambios en el radio tienen un impacto masivo en el caudal (potencia de 4).
      en: Small changes in radius have a massive impact on the flow rate (4th power).

  - id: deltaP
    symbol: \\Delta P
    nombre:
      es: Caída de presión
      en: Pressure drop
    si_unit: Pa
    unidad_si: Pa
    dimension: M/(L*T^2)
    is_vector: false
    components: []
    category: dinamica_fluidos
    physical_role: fuerza_impulsora
    used_in: [poiseuille, v_max_def, perfil_velocidad]
    common_mistake: "Olvidar que la presión debe disminuir en la dirección del flujo."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_flujo
    value_nature: diferencia_potencial
    interpretation_role: motor_hidraulico
    graph_binding: "Determina la elongación de la parábola de velocidades."
    descripcion:
      es: Diferencia de presión hidrodinámica entre dos puntos del conducto.
      en: Hydrodynamic pressure difference between two points in the duct.
    typical_range: [1, 1e9]
    pedagogical_notes:
      es: Es el trabajo por unidad de volumen necesario para vencer la fricción viscosa.
      en: It is the work per unit volume needed to overcome viscous friction.

  - id: L
    symbol: L
    nombre:
      es: Longitud del conducto
      en: Duct length
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: extension_axial
    used_in: [poiseuille, v_max_def, perfil_velocidad]
    common_mistake: "Ignorar que el modelo asume un conducto mucho más largo que su diámetro."
    sign_behavior: siempre_positivo
    zero_behavior: flujo_puntual
    value_nature: parametro_escenario
    interpretation_role: escala_disipacion
    graph_binding: "Define la extensión visual del tramo analizado."
    descripcion:
      es: Distancia recorrida por el fluido entre los puntos de medición de presión.
      en: Distance traveled by the fluid between the pressure measurement points.
    typical_range: [1e-3, 1e5]
    pedagogical_notes:
      es: A mayor longitud, mayor es la caída de presión para un mismo caudal.
      en: The longer the length, the greater the pressure drop for the same flow rate.

  - id: v_max
    symbol: v_{max}
    nombre:
      es: Velocidad máxima
      en: Maximum velocity
    si_unit: m/s
    unidad_si: m/s
    dimension: L/T
    is_vector: false
    components: []
    category: cinematica_fluidos
    physical_role: velocidad_axial_pico
    used_in: [v_max_def, perfil_velocidad]
    common_mistake: "Pensar que es igual a la velocidad media."
    sign_behavior: siempre_positivo
    zero_behavior: reposo
    value_nature: variable_flujo
    interpretation_role: indicador_regimen
    graph_binding: "Vértice de la parábola en el eje central."
    descripcion:
      es: Velocidad del fluido en el centro exacto del conducto circular.
      en: Fluid velocity at the exact center of the circular duct.
    typical_range: [1e-6, 100]
    pedagogical_notes:
      es: En régimen laminar, es exactamente el doble de la velocidad media.
      en: In a laminar regime, it is exactly twice the average velocity.

  - id: Re
    symbol: Re
    nombre:
      es: Número de Reynolds
      en: Reynolds Number
    si_unit: "1"
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: criterio_regimen
    used_in: [poiseuille]
    common_mistake: "Ignorar que es un número adimensional."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_de_inercia
    value_nature: numero_adimensional
    interpretation_role: clasificador_flujo
    graph_binding: "Determina si la visualización debe ser laminar o turbulenta."
    descripcion:
      es: Relación entre las fuerzas de inercia y las fuerzas viscosas.
      en: Ratio of inertial forces to viscous forces.
    typical_range: [0, 10000]
    pedagogical_notes:
      es: El valor crítico 2300 marca la transición al caos turbulento.
      en: The critical value 2300 marks the transition to turbulent chaos.

  - id: r
    symbol: r
    nombre:
      es: Radio local
      en: Local radius
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: coordenada_radial
    used_in: [perfil_velocidad]
    common_mistake: "Confundir con el radio total de la tubería R."
    sign_behavior: siempre_positivo
    zero_behavior: eje_central
    value_nature: variable_independiente
    interpretation_role: posicion_muestreo
    graph_binding: "Eje horizontal de la gráfica del perfil."
    descripcion:
      es: Distancia radial desde el eje central hasta un punto genérico dentro del fluido.
      en: Radial distance from the central axis to a generic point within the fluid.
    typical_range: [0, 5]
    pedagogical_notes:
      es: Varía desde 0 (centro) hasta R (pared).
      en: Varies from 0 (center) to R (wall).
`;export{e as default};
