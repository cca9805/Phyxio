const n=`version: 5\r
magnitudes:\r
- id: F\r
  symbol: F\r
  nombre: { es: Fuerza gravitatoria, en: Gravitational force }\r
  si_unit: N\r
  unidad_si: N\r
  dimension: M*L*T^-2\r
  is_vector: false\r
  components: []\r
  category: dinamica\r
  physical_role: magnitud_interaccion\r
  used_in: [ ley_newton_gravitacion, variacion_inversa_cuadrado ]\r
  common_mistake: Tratar F como constante al variar r.\r
  typical_range: [ 1e-12, 1e+12 ]\r
  sign_behavior: atractiva_en_modelo\r
  zero_behavior: sin_interaccion\r
  value_nature: variable\r
  interpretation_role: intensidad_interaccion\r
  graph_binding: Curva F(r) de caida inversa cuadratica.\r
  descripcion:\r
    es: Modulo de la fuerza de atraccion entre dos masas.\r
    en: Magnitude of attractive force between two masses.\r
  pedagogical_notes:\r
    es: Su variacion con r es el rasgo distintivo del leaf.\r
    en: Its variation with r is the leaf's key signature.\r
\r
- id: G\r
  symbol: G\r
  nombre: { es: Constante de gravitacion, en: Gravitation constant }\r
  si_unit: N*m^2/kg^2\r
  unidad_si: N*m^2/kg^2\r
  dimension: M^-1*L^3*T^-2\r
  is_vector: false\r
  components: []\r
  category: gravitacion\r
  physical_role: constante_fundamental\r
  used_in: [ ley_newton_gravitacion, campo_gravitatorio, aceleracion_gravitatoria ]\r
  common_mistake: Usar valor redondeado sin control de precision.\r
  typical_range: [ 6.6743e-11, 6.6743e-11 ]\r
  sign_behavior: siempre_positivo\r
  zero_behavior: anulacion_gravitatoria\r
  value_nature: constante\r
  interpretation_role: escala_de_interaccion\r
  graph_binding: Escala vertical de F, g y a.\r
  descripcion:\r
    es: Constante universal que fija la intensidad gravitatoria clasica.\r
    en: Universal constant that sets classical gravitational strength.\r
  pedagogical_notes:\r
    es: Mantener unidades SI evita errores sistematicos.\r
    en: Keeping SI units avoids systematic errors.\r
\r
- id: m1\r
  symbol: m_1\r
  nombre: { es: Masa 1, en: Mass 1 }\r
  si_unit: kg\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: materia\r
  physical_role: fuente_1\r
  used_in: [ ley_newton_gravitacion ]\r
  common_mistake: Intercambiar m1 y m2 sin revisar contexto fisico.\r
  typical_range: [ 1e-6, 1e+30 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: sin_fuente\r
  value_nature: parametro\r
  interpretation_role: escala_primera_fuente\r
  graph_binding: Cambia amplitud de F(r).\r
  descripcion:\r
    es: Masa del primer cuerpo en interaccion.\r
    en: Mass of the first interacting body.\r
  pedagogical_notes:\r
    es: El producto m1*m2 determina escala de fuerza.\r
    en: Product m1*m2 sets force scale.\r
\r
- id: m2\r
  symbol: m_2\r
  nombre: { es: Masa 2, en: Mass 2 }\r
  si_unit: kg\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: materia\r
  physical_role: fuente_2\r
  used_in: [ ley_newton_gravitacion ]\r
  common_mistake: Tomar m2 en gramos mientras m1 esta en kilogramos.\r
  typical_range: [ 1e-6, 1e+30 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: sin_fuente\r
  value_nature: parametro\r
  interpretation_role: escala_segunda_fuente\r
  graph_binding: Cambia amplitud de F(r).\r
  descripcion:\r
    es: Masa del segundo cuerpo en interaccion.\r
    en: Mass of the second interacting body.\r
  pedagogical_notes:\r
    es: El orden de m1 y m2 no altera magnitud de F.\r
    en: Swapping m1 and m2 does not change F magnitude.\r
\r
- id: r\r
  symbol: r\r
  nombre: { es: Distancia entre centros, en: Center-to-center distance }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: variable_espacial\r
  used_in: [ ley_newton_gravitacion, campo_gravitatorio, aceleracion_gravitatoria ]\r
  common_mistake: Usar altura local en vez de distancia entre centros.\r
  typical_range: [ 1e-3, 1e+12 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: singularidad_modelo\r
  value_nature: variable\r
  interpretation_role: control_decaimiento\r
  graph_binding: Eje horizontal principal del grafico Coord.\r
  descripcion:\r
    es: Distancia radial entre centros de masa.\r
    en: Radial distance between mass centers.\r
  pedagogical_notes:\r
    es: La ley depende de 1/r^2 y por eso la escala importa mucho.\r
    en: The law depends on 1/r^2, so scale strongly matters.\r
\r
- id: M\r
  symbol: M\r
  nombre: { es: Masa fuente, en: Source mass }\r
  si_unit: kg\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: gravitacion\r
  physical_role: generador_campo\r
  used_in: [ campo_gravitatorio, aceleracion_gravitatoria ]\r
  common_mistake: Confundir M con m de prueba.\r
  typical_range: [ 1e+3, 1e+30 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: ausencia_campo\r
  value_nature: parametro\r
  interpretation_role: escala_del_campo\r
  graph_binding: Modifica intensidad de g(r).\r
  descripcion:\r
    es: Masa que genera el campo gravitatorio local.\r
    en: Mass that generates local gravitational field.\r
  pedagogical_notes:\r
    es: Debe distinguirse de m en P = m*g.\r
    en: It must be distinguished from m in P = m*g.\r
\r
- id: m\r
  symbol: m\r
  nombre: { es: Masa de prueba, en: Test mass }\r
  si_unit: kg\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: dinamica\r
  physical_role: cuerpo_prueba\r
  used_in: [ peso_desde_campo ]\r
  common_mistake: Mezclar m de prueba con m1/m2 sin aclarar modelo.\r
  typical_range: [ 1e-6, 1e+9 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: sin_peso\r
  value_nature: parametro\r
  interpretation_role: escala_peso\r
  graph_binding: Afecta magnitud de P.\r
  descripcion:\r
    es: Masa del cuerpo sobre el que se calcula el peso.\r
    en: Mass of the body used to compute weight.\r
  pedagogical_notes:\r
    es: P crece linealmente con m cuando g es fijo.\r
    en: P grows linearly with m when g is fixed.\r
\r
- id: g\r
  symbol: g\r
  nombre: { es: Campo gravitatorio, en: Gravitational field }\r
  si_unit: m/s^2\r
  unidad_si: m/s^2\r
  dimension: L*T^-2\r
  is_vector: false\r
  components: []\r
  category: gravitacion\r
  physical_role: intensidad_campo\r
  used_in: [ campo_gravitatorio, peso_desde_campo ]\r
  common_mistake: Considerar g estrictamente constante en todos los radios.\r
  typical_range: [ 1e-6, 1e+4 ]\r
  sign_behavior: positivo_en_modulo\r
  zero_behavior: ausencia_campo\r
  value_nature: variable\r
  interpretation_role: aceleracion_local\r
  graph_binding: Curva decreciente en funcion de r.\r
  descripcion:\r
    es: Intensidad local de campo gravitatorio.\r
    en: Local gravitational-field intensity.\r
  pedagogical_notes:\r
    es: Relaciona campo y peso sin introducir fuerzas de contacto.\r
    en: Connects field and weight without contact forces.\r
\r
- id: P\r
  symbol: P\r
  nombre: { es: Peso, en: Weight }\r
  si_unit: N\r
  unidad_si: N\r
  dimension: M*L*T^-2\r
  is_vector: false\r
  components: []\r
  category: dinamica\r
  physical_role: fuerza_efectiva\r
  used_in: [ peso_desde_campo ]\r
  common_mistake: Igualar peso y masa.\r
  typical_range: [ 1e-6, 1e+9 ]\r
  sign_behavior: depende_convencion_eje\r
  zero_behavior: ingravidez_ideal\r
  value_nature: variable\r
  interpretation_role: respuesta_del_cuerpo\r
  graph_binding: Resultado derivado de m y g.\r
  descripcion:\r
    es: Fuerza gravitatoria sobre una masa de prueba.\r
    en: Gravitational force acting on a test mass.\r
  pedagogical_notes:\r
    es: No debe confundirse con normal ni con masa.\r
    en: It should not be confused with normal force or mass.\r
\r
- id: a\r
  symbol: a\r
  nombre: { es: Aceleracion gravitatoria, en: Gravitational acceleration }\r
  si_unit: m/s^2\r
  unidad_si: m/s^2\r
  dimension: L*T^-2\r
  is_vector: false\r
  components: []\r
  category: dinamica\r
  physical_role: respuesta_cinematica\r
  used_in: [ aceleracion_gravitatoria ]\r
  common_mistake: Tratar a como independiente de la distancia.\r
  typical_range: [ 1e-6, 1e+4 ]\r
  sign_behavior: positivo_en_modulo\r
  zero_behavior: ausencia_campo\r
  value_nature: variable\r
  interpretation_role: cambio_velocidad\r
  graph_binding: Misma dependencia radial que g.\r
  descripcion:\r
    es: Aceleracion producida por el campo de una masa fuente.\r
    en: Acceleration produced by a source-mass field.\r
  pedagogical_notes:\r
    es: Comparte forma funcional con g en modelo puntual.\r
    en: Shares functional form with g in point-mass model.\r
\r
- id: R\r
  symbol: R\r
  nombre: { es: Radio del astro, en: Astral body radius }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: escala_referencia\r
  used_in: [ aceleracion_gravitatoria ]\r
  common_mistake: Usar R en lugar de r cuando el punto no esta en superficie.\r
  typical_range: [ 1e+3, 1e+8 ]\r
  sign_behavior: siempre_positivo\r
  zero_behavior: invalidez_geometrica\r
  value_nature: parametro\r
  interpretation_role: condicion_superficial\r
  graph_binding: Define punto de lectura superficial.\r
  descripcion:\r
    es: Radio caracteristico de la masa fuente.\r
    en: Characteristic radius of the source body.\r
  pedagogical_notes:\r
    es: Solo coincide con r en condiciones superficiales.\r
    en: It only matches r under surface conditions.\r
\r
- id: F1\r
  symbol: F_1\r
  nombre: { es: Fuerza inicial, en: Initial force }\r
  si_unit: N\r
  unidad_si: N\r
  dimension: M*L*T^-2\r
  is_vector: false\r
  components: []\r
  category: comparacion\r
  physical_role: estado_inicial\r
  used_in: [ variacion_inversa_cuadrado ]\r
  common_mistake: Intercambiar F1 y F2 al aplicar proporcion.\r
  typical_range: [ 1e-12, 1e+12 ]\r
  sign_behavior: positiva_en_modulo\r
  zero_behavior: sin_interaccion\r
  value_nature: dato\r
  interpretation_role: referencia_comparativa\r
  graph_binding: Punto inicial de comparacion radial.\r
  descripcion:\r
    es: Fuerza de referencia en una condicion inicial.\r
    en: Reference force at an initial condition.\r
  pedagogical_notes:\r
    es: Permite analizar cambios sin recalcular todo desde cero.\r
    en: Enables change analysis without full recomputation.\r
\r
- id: F2\r
  symbol: F_2\r
  nombre: { es: Fuerza final, en: Final force }\r
  si_unit: N\r
  unidad_si: N\r
  dimension: M*L*T^-2\r
  is_vector: false\r
  components: []\r
  category: comparacion\r
  physical_role: estado_final\r
  used_in: [ variacion_inversa_cuadrado ]\r
  common_mistake: No verificar coherencia con variacion de distancia.\r
  typical_range: [ 1e-12, 1e+12 ]\r
  sign_behavior: positiva_en_modulo\r
  zero_behavior: sin_interaccion\r
  value_nature: dato\r
  interpretation_role: resultado_comparativo\r
  graph_binding: Punto final de comparacion radial.\r
  descripcion:\r
    es: Fuerza en la condicion final del cambio de distancia.\r
    en: Force in final condition of distance change.\r
  pedagogical_notes:\r
    es: Debe leerse junto con r1 y r2.\r
    en: It should be read alongside r1 and r2.\r
\r
- id: r1\r
  symbol: r_1\r
  nombre: { es: Distancia inicial, en: Initial distance }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: comparacion\r
  physical_role: estado_inicial\r
  used_in: [ variacion_inversa_cuadrado ]\r
  common_mistake: Tomar r1 como diametro o altura local.\r
  typical_range: [ 1e-3, 1e+12 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: singularidad_modelo\r
  value_nature: dato\r
  interpretation_role: punto_referencia\r
  graph_binding: Posicion inicial para comparar F.\r
  descripcion:\r
    es: Distancia de referencia en condicion inicial.\r
    en: Reference distance in initial condition.\r
  pedagogical_notes:\r
    es: Su valor debe medirse entre centros de masa.\r
    en: It must be measured between mass centers.\r
\r
- id: r2\r
  symbol: r_2\r
  nombre: { es: Distancia final, en: Final distance }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: comparacion\r
  physical_role: estado_final\r
  used_in: [ variacion_inversa_cuadrado ]\r
  common_mistake: No mantener misma referencia que r1.\r
  typical_range: [ 1e-3, 1e+12 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: singularidad_modelo\r
  value_nature: dato\r
  interpretation_role: punto_final\r
  graph_binding: Posicion final para comparar F.\r
  descripcion:\r
    es: Distancia de referencia en condicion final.\r
    en: Reference distance in final condition.\r
  pedagogical_notes:\r
    es: Un cambio pequeno en r2 puede alterar mucho F2.\r
    en: A small change in r2 can strongly alter F2.\r
`;export{n as default};
