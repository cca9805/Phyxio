const e=`version: 5
magnitudes:
  - id: G
    symbol: G
    nombre: { es: Constante de gravitación, en: Gravitational Constant }
    si_unit: N*m^2/kg^2
    unidad_si: N*m^2/kg^2
    dimension: L^3/(M*T^2)
    is_vector: false
    components: []
    category: gravitacion
    physical_role: constante_universal
    used_in: [aceleracion_mareal]
    common_mistake: Usar unidades no SI al combinar masas y distancias astronómicas.
    typical_range: [6.674e-11, 6.674e-11]
    sign_behavior: siempre_positivo
    zero_behavior: sin_interaccion_gravitatoria
    value_nature: constante
    interpretation_role: escala_interaccion
    graph_binding: Fija la escala vertical de la aceleración mareal.
    descripcion:
      es: Constante que mide la intensidad universal de la interacción gravitatoria.
      en: Constant measuring the universal strength of gravitational interaction.
    pedagogical_notes:
      es: No es una propiedad del planeta ni del satélite, sino de la ley gravitatoria.
      en: It is not a property of the planet or satellite, but of the gravitational law.
  - id: M
    symbol: M
    nombre: { es: Masa perturbadora, en: Perturbing Mass }
    si_unit: kg
    unidad_si: kg
    dimension: M
    is_vector: false
    components: []
    category: gravitacion
    physical_role: fuente_del_gradiente
    used_in: [aceleracion_mareal]
    common_mistake: Confundirla con la masa del cuerpo afectado por la marea.
    typical_range: [1e20, 1e31]
    sign_behavior: siempre_positivo
    zero_behavior: perturbador_ausente
    value_nature: parametro_escenario
    interpretation_role: intensidad_fuente
    graph_binding: Aumenta la altura de la curva mareal sin cambiar su dependencia cúbica.
    descripcion:
      es: Masa del cuerpo externo que produce el gradiente gravitatorio.
      en: Mass of the external body producing the gravitational gradient.
    pedagogical_notes:
      es: Una masa grande puede ser menos importante que otra menor si está mucho más lejos.
      en: A large mass may be less important than a smaller one if it is much farther away.
  - id: R
    symbol: R
    nombre: { es: Radio del cuerpo afectado, en: Affected Body Radius }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria
    physical_role: separacion_interna
    used_in: [aceleracion_mareal]
    common_mistake: Usar el diámetro cuando la fórmula pide radio característico.
    typical_range: [1e3, 1e8]
    sign_behavior: siempre_positivo
    zero_behavior: cuerpo_puntual_sin_marea
    value_nature: parametro_geometrico
    interpretation_role: amplificador_diferencial
    graph_binding: Fija la separación interna sobre la que se compara el campo.
    descripcion:
      es: Escala radial del cuerpo que experimenta la diferencia de atracción.
      en: Radial scale of the body experiencing differential attraction.
    pedagogical_notes:
      es: La marea no actúa igual sobre un punto que sobre un cuerpo extendido.
      en: Tides do not act the same on a point mass as on an extended body.
  - id: d
    symbol: d
    nombre: { es: Distancia entre centros, en: Center-to-center Distance }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: separacion_orbital
    used_in: [aceleracion_mareal]
    common_mistake: Olvidar que la marea disminuye con el cubo de esta distancia.
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo
    zero_behavior: colision_o_modelo_invalido
    value_nature: parametro_escenario
    interpretation_role: control_dominante
    graph_binding: Es el eje horizontal natural de la curva mareal.
    descripcion:
      es: Separación entre el centro del cuerpo afectado y el centro del perturbador.
      en: Separation between the center of the affected body and the perturbing body.
    pedagogical_notes:
      es: Es la magnitud que más cambia el resultado porque aparece elevada al cubo.
      en: It changes the result most strongly because it appears cubed.
  - id: am
    symbol: a_{marea}
    nombre: { es: Aceleración mareal, en: Tidal Acceleration }
    si_unit: m/s^2
    unidad_si: m/s^2
    dimension: L/T^2
    is_vector: false
    components: []
    category: dinamica_gravitatoria
    physical_role: aceleracion_diferencial
    used_in: [aceleracion_mareal, comparacion_perturbadores]
    common_mistake: Interpretarla como la aceleración orbital total.
    typical_range: [1e-12, 1e-3]
    sign_behavior: valor_magnitud
    zero_behavior: campo_uniforme_localmente
    value_nature: resultado
    interpretation_role: intensidad_marea
    graph_binding: Magnitud representada en el eje vertical del gráfico Coord.
    descripcion:
      es: Diferencia aproximada de aceleración gravitatoria entre dos puntos del cuerpo afectado.
      en: Approximate difference in gravitational acceleration between two points of the affected body.
    pedagogical_notes:
      es: Es pequeña frente a la gravedad local, pero sus efectos pueden acumularse.
      en: It is small compared with local gravity, but its effects can accumulate.
  - id: ac
    symbol: a_{central}
    nombre: { es: Aceleración central, en: Central Acceleration }
    si_unit: m/s^2
    unidad_si: m/s^2
    dimension: L/T^2
    is_vector: false
    components: []
    category: dinamica_orbital
    physical_role: aceleracion_dominante
    used_in: [parametro_perturbativo, aceleracion_total_conceptual]
    common_mistake: Sumarla escalarmente con perturbaciones vectoriales.
    typical_range: [1e-8, 100]
    sign_behavior: valor_magnitud
    zero_behavior: sin_orbita_central
    value_nature: referencia_dinamica
    interpretation_role: escala_base
    graph_binding: Sirve como línea de comparación para perturbaciones pequeñas.
    descripcion:
      es: Aceleración principal que gobierna el movimiento orbital básico.
      en: Main acceleration governing the basic orbital motion.
    pedagogical_notes:
      es: Las perturbaciones se juzgan siempre frente a esta escala dominante.
      en: Perturbations are always judged against this dominant scale.
  - id: ap
    symbol: a_{pert}
    nombre: { es: Aceleración perturbativa, en: Perturbing Acceleration }
    si_unit: m/s^2
    unidad_si: m/s^2
    dimension: L/T^2
    is_vector: false
    components: []
    category: dinamica_orbital
    physical_role: correccion_dinamica
    used_in: [parametro_perturbativo, aceleracion_total_conceptual]
    common_mistake: Despreciarla sin comprobar su razón frente a la central.
    typical_range: [1e-12, 1]
    sign_behavior: puede_cambiar_con_geometria
    zero_behavior: modelo_de_dos_cuerpos
    value_nature: variable_dinamica
    interpretation_role: desviacion_orbital
    graph_binding: Puede visualizarse como desviación respecto a la curva principal.
    descripcion:
      es: Aceleración secundaria causada por terceros cuerpos, achatamiento o efectos no ideales.
      en: Secondary acceleration caused by third bodies, oblateness, or non-ideal effects.
    pedagogical_notes:
      es: Pequeña no significa irrelevante si actúa durante muchas órbitas.
      en: Small does not mean irrelevant if it acts over many orbits.
  - id: eps
    symbol: \\varepsilon
    nombre: { es: Parámetro perturbativo, en: Perturbative Parameter }
    si_unit: "1"
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: criterio_modelo
    physical_role: razon_de_escala
    used_in: [parametro_perturbativo]
    common_mistake: Tomarlo como porcentaje sin indicar la escala central.
    typical_range: [1e-9, 1e-1]
    sign_behavior: siempre_positivo_si_son_modulos
    zero_behavior: perturbacion_nula
    value_nature: numero_adimensional
    interpretation_role: criterio_validez
    graph_binding: Clasifica si la perturbación se muestra como corrección pequeña o dominante.
    descripcion:
      es: Cociente entre aceleración perturbativa y aceleración central.
      en: Ratio between perturbing acceleration and central acceleration.
    pedagogical_notes:
      es: Es el número que decide si basta una teoría de primer orden.
      en: It decides whether a first-order theory is enough.
  - id: M1
    symbol: M_1
    nombre: { es: Masa del perturbador 1, en: Perturber 1 Mass }
    si_unit: kg
    unidad_si: kg
    dimension: M
    is_vector: false
    components: []
    category: comparacion_perturbadores
    physical_role: fuente_1
    used_in: [comparacion_perturbadores]
    common_mistake: Comparar masas sin incluir las distancias.
    typical_range: [1e20, 1e31]
    sign_behavior: siempre_positivo
    zero_behavior: perturbador_1_ausente
    value_nature: parametro_escenario
    interpretation_role: intensidad_fuente_1
    graph_binding: Modula la contribución del primer perturbador.
    descripcion:
      es: Masa del primer cuerpo usado en una comparación mareal.
      en: Mass of the first body used in a tidal comparison.
    pedagogical_notes:
      es: Solo tiene sentido junto con su distancia correspondiente.
      en: It only makes sense together with its corresponding distance.
  - id: M2
    symbol: M_2
    nombre: { es: Masa del perturbador 2, en: Perturber 2 Mass }
    si_unit: kg
    unidad_si: kg
    dimension: M
    is_vector: false
    components: []
    category: comparacion_perturbadores
    physical_role: fuente_2
    used_in: [comparacion_perturbadores]
    common_mistake: Usarla como masa de referencia sin declarar qué marea se conoce.
    typical_range: [1e20, 1e31]
    sign_behavior: siempre_positivo
    zero_behavior: perturbador_2_ausente
    value_nature: parametro_escenario
    interpretation_role: intensidad_fuente_2
    graph_binding: Modula la contribución del segundo perturbador.
    descripcion:
      es: Masa del segundo cuerpo usado como referencia de comparación.
      en: Mass of the second body used as the comparison reference.
    pedagogical_notes:
      es: Ayuda a separar efecto de masa y efecto de distancia.
      en: It helps separate the mass effect from the distance effect.
  - id: d1
    symbol: d_1
    nombre: { es: Distancia del perturbador 1, en: Perturber 1 Distance }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: separacion_fuente_1
    used_in: [comparacion_perturbadores]
    common_mistake: Invertir la razón de distancias en el cubo.
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo
    zero_behavior: modelo_invalido
    value_nature: parametro_escenario
    interpretation_role: atenuacion_fuente_1
    graph_binding: Controla la caída cúbica de la contribución 1.
    descripcion:
      es: Distancia del primer perturbador al cuerpo afectado.
      en: Distance from the first perturber to the affected body.
    pedagogical_notes:
      es: Una pequeña variación relativa en distancia cambia mucho la marea.
      en: A small relative change in distance strongly changes the tide.
  - id: d2
    symbol: d_2
    nombre: { es: Distancia del perturbador 2, en: Perturber 2 Distance }
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: geometria_orbital
    physical_role: separacion_fuente_2
    used_in: [comparacion_perturbadores]
    common_mistake: Tratarla como una escala lineal cuando aparece al cubo en la comparación.
    typical_range: [1e6, 1e13]
    sign_behavior: siempre_positivo
    zero_behavior: modelo_invalido
    value_nature: parametro_escenario
    interpretation_role: atenuacion_fuente_2
    graph_binding: Controla la caída cúbica de la contribución 2.
    descripcion:
      es: Distancia del segundo perturbador al cuerpo afectado.
      en: Distance from the second perturber to the affected body.
    pedagogical_notes:
      es: La distancia puede compensar o superar una diferencia grande de masas.
      en: Distance can offset or dominate a large mass difference.
  - id: am1
    symbol: a_{marea,1}
    nombre: { es: Marea del perturbador 1, en: Perturber 1 Tidal Acceleration }
    si_unit: m/s^2
    unidad_si: m/s^2
    dimension: L/T^2
    is_vector: false
    components: []
    category: dinamica_gravitatoria
    physical_role: contribucion_mareal_1
    used_in: [comparacion_perturbadores]
    common_mistake: Compararla con am2 sin mantener la misma escala R.
    typical_range: [1e-12, 1e-3]
    sign_behavior: valor_magnitud
    zero_behavior: contribucion_1_nula
    value_nature: resultado
    interpretation_role: intensidad_relativa_1
    graph_binding: Puede ser una curva o punto de comparación con am2.
    descripcion:
      es: Contribución mareal atribuida al primer perturbador.
      en: Tidal contribution attributed to the first perturber.
    pedagogical_notes:
      es: Permite comparar Luna y Sol sin calcular desde cero cada vez.
      en: It allows comparing Moon and Sun without recalculating from scratch every time.
  - id: am2
    symbol: a_{marea,2}
    nombre: { es: Marea del perturbador 2, en: Perturber 2 Tidal Acceleration }
    si_unit: m/s^2
    unidad_si: m/s^2
    dimension: L/T^2
    is_vector: false
    components: []
    category: dinamica_gravitatoria
    physical_role: contribucion_mareal_2
    used_in: [comparacion_perturbadores]
    common_mistake: Usarla como valor absoluto cuando solo se conoce una referencia aproximada.
    typical_range: [1e-12, 1e-3]
    sign_behavior: valor_magnitud
    zero_behavior: contribucion_2_nula
    value_nature: resultado
    interpretation_role: intensidad_relativa_2
    graph_binding: Sirve como referencia de normalización.
    descripcion:
      es: Contribución mareal atribuida al segundo perturbador.
      en: Tidal contribution attributed to the second perturber.
    pedagogical_notes:
      es: La comparación solo es limpia si ambos perturbadores actúan sobre el mismo cuerpo.
      en: The comparison is clean only if both perturbers act on the same body.
  - id: tau
    symbol: \\tau
    nombre: { es: Torque mareal, en: Tidal Torque }
    si_unit: N*m
    unidad_si: N*m
    dimension: M*L^2/T^2
    is_vector: false
    components: []
    category: rotacion_gravitatoria
    physical_role: momento_por_marea
    used_in: [torque_mareal_conceptual]
    common_mistake: Pensar que toda marea implica torque neto apreciable.
    typical_range: [1e5, 1e30]
    sign_behavior: depende_del_desfase
    zero_behavior: simetria_sin_disipacion
    value_nature: escala_conceptual
    interpretation_role: evolucion_rotacional
    graph_binding: Se interpreta como efecto acumulado, no como eje principal del gráfico Coord.
    descripcion:
      es: Momento asociado a una marea cuando existe desfase, deformación o disipación.
      en: Moment associated with a tide when phase lag, deformation, or dissipation exists.
    pedagogical_notes:
      es: Explica frenado rotacional y acoplamientos de marea, pero exige más modelo que la aceleración mareal.
      en: It explains rotational braking and tidal locking, but requires more modeling than tidal acceleration.
`;export{e as default};
