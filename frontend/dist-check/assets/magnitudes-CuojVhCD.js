const r=`version: 5\r
magnitudes:\r
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
  used_in: [ velocidad_orbital_circular, velocidad_escape, periodo_orbital, vis_viva ]\r
  common_mistake: Tratarla como parametro ajustable del problema.\r
  typical_range: [ 6.6743e-11, 6.6743e-11 ]\r
  sign_behavior: siempre_positiva\r
  zero_behavior: sin_interaccion_gravitatoria\r
  value_nature: constante\r
  interpretation_role: escala_global\r
  graph_binding: Fija la escala vertical de velocidades.\r
  descripcion:\r
    es: Constante universal que fija intensidad de acoplamiento gravitatorio.\r
    en: Universal constant setting gravitational coupling strength.\r
  pedagogical_notes:\r
    es: Mantener SI evita errores de orden de magnitud.\r
    en: Keeping SI avoids order-of-magnitude errors.\r
\r
- id: M\r
  symbol: M\r
  nombre: { es: Masa central, en: Central mass }\r
  si_unit: kg\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: gravitacion\r
  physical_role: fuente_central\r
  used_in: [ velocidad_orbital_circular, velocidad_escape, periodo_orbital, parametro_gravitacional ]\r
  common_mistake: Usar masa del satelite en lugar de masa central.\r
  typical_range: [ 1e+20, 1e+31 ]\r
  sign_behavior: positiva\r
  zero_behavior: no_hay_orbita_kepleriana\r
  value_nature: parametro\r
  interpretation_role: escala_dinamica\r
  graph_binding: Aumenta nivel de v_orb y v_escape.\r
  descripcion:\r
    es: Masa del cuerpo dominante que genera el campo gravitatorio.\r
    en: Mass of the dominant body generating the field.\r
  pedagogical_notes:\r
    es: En dos cuerpos con gran asimetria, M domina la dinamica orbital.\r
    en: In strongly asymmetric two-body systems, M dominates orbital dynamics.\r
\r
- id: r\r
  symbol: r\r
  nombre: { es: Radio orbital, en: Orbital radius }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: variable_radial\r
  used_in: [ velocidad_orbital_circular, velocidad_escape, periodo_orbital, vis_viva ]\r
  common_mistake: Confundir altura sobre superficie con radio al centro.\r
  typical_range: [ 1e+5, 1e+12 ]\r
  sign_behavior: positiva\r
  zero_behavior: singularidad_modelo\r
  value_nature: variable\r
  interpretation_role: control_decaimiento\r
  graph_binding: Eje horizontal principal del Coord.\r
  descripcion:\r
    es: Distancia desde el centro de masa de la fuente al satelite.\r
    en: Distance from source center of mass to satellite.\r
  pedagogical_notes:\r
    es: Pequenos cambios relativos en r alteran mucho la velocidad.\r
    en: Small relative changes in r strongly affect velocity.\r
\r
- id: R\r
  symbol: R\r
  nombre: { es: Radio del astro, en: Body radius }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: referencia_superficial\r
  used_in: [ velocidad_escape ]\r
  common_mistake: Sustituir R por r en orbita alta sin justificacion.\r
  typical_range: [ 1e+5, 1e+8 ]\r
  sign_behavior: positiva\r
  zero_behavior: invalidez_geometrica\r
  value_nature: parametro\r
  interpretation_role: referencia_limite\r
  graph_binding: Punto de lectura superficial.\r
  descripcion:\r
    es: Radio fisico de la fuente cuando se evalua superficie.\r
    en: Physical source radius for surface evaluations.\r
  pedagogical_notes:\r
    es: Solo coincide con r en condicion superficial.\r
    en: It equals r only under surface conditions.\r
\r
- id: h\r
  symbol: h\r
  nombre: { es: Altura orbital, en: Orbital altitude }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: desplazamiento_superficial\r
  used_in: [ radio_desde_altura ]\r
  common_mistake: Usar h directamente como si fuera r.\r
  typical_range: [ 1e+3, 1e+8 ]\r
  sign_behavior: no_negativa\r
  zero_behavior: orbita_superficial\r
  value_nature: dato\r
  interpretation_role: traduccion_geometrica\r
  graph_binding: Desplaza posicion radial efectiva.\r
  descripcion:\r
    es: Separacion sobre la superficie de la fuente central.\r
    en: Separation above central-body surface.\r
  pedagogical_notes:\r
    es: Debe convertirse a r con R antes del calculo orbital.\r
    en: Must be converted to r with R before orbital calculation.\r
\r
- id: v_orb\r
  symbol: v_orb\r
  nombre: { es: Velocidad orbital circular, en: Circular orbital velocity }\r
  si_unit: m/s\r
  unidad_si: m/s\r
  dimension: L*T^-1\r
  is_vector: false\r
  components: []\r
  category: dinamica\r
  physical_role: velocidad_caracteristica\r
  used_in: [ velocidad_orbital_circular, vis_viva ]\r
  common_mistake: Suponerla constante para cualquier r.\r
  typical_range: [ 1e+2, 1e+5 ]\r
  sign_behavior: positiva_en_modulo\r
  zero_behavior: sin_orbita\r
  value_nature: variable\r
  interpretation_role: estado_orbital\r
  graph_binding: Curva principal en grafico Coord.\r
  descripcion:\r
    es: Velocidad necesaria para mantener orbita circular ideal.\r
    en: Speed required to maintain an ideal circular orbit.\r
  pedagogical_notes:\r
    es: Disminuye con la raiz de r en campo central.\r
    en: Decreases with square-root dependence on r.\r
\r
- id: v_escape\r
  symbol: v_esc\r
  nombre: { es: Velocidad de escape, en: Escape velocity }\r
  si_unit: m/s\r
  unidad_si: m/s\r
  dimension: L*T^-1\r
  is_vector: false\r
  components: []\r
  category: dinamica\r
  physical_role: umbral_energetico\r
  used_in: [ velocidad_escape ]\r
  common_mistake: Confundirla con velocidad orbital circular.\r
  typical_range: [ 1e+2, 1e+5 ]\r
  sign_behavior: positiva_en_modulo\r
  zero_behavior: no_escape\r
  value_nature: variable\r
  interpretation_role: criterio_escape\r
  graph_binding: Curva superior respecto de v_orb.\r
  descripcion:\r
    es: Umbral minimo para abandonar el campo sin propulsion adicional.\r
    en: Minimum threshold to leave field without extra propulsion.\r
  pedagogical_notes:\r
    es: En mismo r, v_escape es sqrt(2) veces v_orb circular.\r
    en: At same r, v_escape is sqrt(2) times circular v_orb.\r
\r
- id: T\r
  symbol: T\r
  nombre: { es: Periodo orbital, en: Orbital period }\r
  si_unit: s\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: []\r
  category: temporal\r
  physical_role: escala_temporal\r
  used_in: [ periodo_orbital ]\r
  common_mistake: Asumir dependencia lineal con r.\r
  typical_range: [ 1e+2, 1e+8 ]\r
  sign_behavior: positiva\r
  zero_behavior: sin_ciclo_orbital\r
  value_nature: variable\r
  interpretation_role: frecuencia_orbital\r
  graph_binding: Se vincula a lectura de rapidez angular.\r
  descripcion:\r
    es: Tiempo para completar una vuelta orbital circular ideal.\r
    en: Time required for one ideal circular orbital revolution.\r
  pedagogical_notes:\r
    es: Escala con potencia tres medios de r.\r
    en: Scales with three-halves power of r.\r
\r
- id: a\r
  symbol: a\r
  nombre: { es: Radio de semieje mayor, en: Semimajor axis }\r
  si_unit: m\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  physical_role: parametro_orbital\r
  used_in: [ vis_viva, energia_orbital_especifica ]\r
  common_mistake: Igualarlo a r en orbitas elipticas arbitrarias.\r
  typical_range: [ 1e+5, 1e+12 ]\r
  sign_behavior: positiva\r
  zero_behavior: sin_orbita_eliptica\r
  value_nature: parametro\r
  interpretation_role: escala_eliptica\r
  graph_binding: Define nivel energetico medio de orbita.\r
  descripcion:\r
    es: Semieje mayor que caracteriza tamano de la orbita.\r
    en: Semimajor axis characterizing orbit size.\r
  pedagogical_notes:\r
    es: En circular ideal se cumple a igual a r.\r
    en: In ideal circular case, a equals r.\r
\r
- id: mu\r
  symbol: mu\r
  nombre: { es: Parametro gravitacional, en: Gravitational parameter }\r
  si_unit: m^3/s^2\r
  unidad_si: m^3/s^2\r
  dimension: L^3*T^-2\r
  is_vector: false\r
  components: []\r
  category: gravitacion\r
  physical_role: parametro_compacto\r
  used_in: [ parametro_gravitacional, vis_viva, periodo_orbital ]\r
  common_mistake: Tratarlo como unidad adimensional.\r
  typical_range: [ 1e+9, 1e+22 ]\r
  sign_behavior: positivo\r
  zero_behavior: sin_campo\r
  value_nature: parametro\r
  interpretation_role: simplificacion_modelo\r
  graph_binding: Compacta GM para curvas orbitales.\r
  descripcion:\r
    es: Producto GM usado para simplificar expresiones orbitales.\r
    en: Product GM used to simplify orbital expressions.\r
  pedagogical_notes:\r
    es: Facilita calculo numerico y analisis comparativo.\r
    en: It streamlines numerical and comparative analysis.\r
\r
- id: E\r
  symbol: E\r
  nombre: { es: Energia orbital especifica, en: Specific orbital energy }\r
  si_unit: J/kg\r
  unidad_si: J/kg\r
  dimension: L^2*T^-2\r
  is_vector: false\r
  components: []\r
  category: energia\r
  physical_role: clasificador_orbital\r
  used_in: [ energia_orbital_especifica ]\r
  common_mistake: Ignorar signo para clasificar orbita ligada o no.\r
  typical_range: [ -1e+9, 1e+9 ]\r
  sign_behavior: signo_informativo\r
  zero_behavior: umbral_escape_parabolico\r
  value_nature: variable\r
  interpretation_role: criterio_regimen\r
  graph_binding: Determina si estado es ligado en lectura integrada.\r
  descripcion:\r
    es: Energia por unidad de masa que clasifica regimen orbital.\r
    en: Energy per unit mass used to classify orbital regime.\r
  pedagogical_notes:\r
    es: Signo negativo sugiere orbita ligada en modelo clasico.\r
    en: Negative sign suggests a bound orbit in classical model.\r
`;export{r as default};
