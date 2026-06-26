const e=`# Magnitudes para la formulación diferencial de Maxwell

- id: E
  symbol: \\mathbf{E}
  nombre:
    es: campo eléctrico
    en: electric field
  descripcion:
    es: Intensidad de la fuerza por unidad de carga eléctrica en un punto.
    en: Strength of the force per unit of electric charge at a point.
  unidad_si: V/m
  dimension: LMT^-3I^-1
  is_vector: true
  components: [E_x, E_y, E_z]
  category: campo fundamental
  physical_role: protagonista dinámico
  used_in: [teoria.md, ejemplos.md]
  common_mistake: confundirlo con el flujo global
  typical_range: 10^-3 a 10^9 V/m
  sign_behavior: relativo al sistema de referencia
  zero_behavior: ausencia de fuentes y variaciones
  value_nature: variable de campo local
  interpretation_role: protagonista dinámico
  graph_binding: intensidad del color
  pedagogical_notes: Se visualiza como flechas salientes.

- id: B
  symbol: \\mathbf{B}
  nombre:
    es: campo magnético
    en: magnetic field
  descripcion:
    es: Campo que ejerce fuerzas sobre cargas en movimiento.
    en: Field that exerts forces on moving charges.
  unidad_si: T
  dimension: MT^-2I^-1
  is_vector: true
  components: [B_x, B_y, B_z]
  category: campo fundamental
  physical_role: protagonista dinámico
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que existen monopolos
  typical_range: 10^-6 a 10 T
  sign_behavior: relativo al sistema de referencia
  zero_behavior: ausencia de corrientes y variaciones
  value_nature: variable de campo local
  interpretation_role: protagonista dinámico
  graph_binding: densidad de líneas
  pedagogical_notes: Sus líneas siempre son cerradas.

- id: rho
  symbol: \\rho
  nombre:
    es: densidad de carga
    en: charge density
  descripcion:
    es: Cantidad de carga eléctrica por unidad de volumen.
    en: Amount of electric charge per unit volume.
  unidad_si: C/m^3
  dimension: L^-3TI
  is_vector: false
  components: []
  category: fuente
  physical_role: fuente puntual
  used_in: [teoria.md, ejemplos.md]
  common_mistake: tratarlo como carga total Q
  typical_range: 10^-12 a 10^18 C/m^3
  sign_behavior: positiva o negativa
  zero_behavior: neutralidad local
  value_nature: fuente del campo
  interpretation_role: fuente puntual
  graph_binding: escala de colores
  pedagogical_notes: Fuente de la divergencia eléctrica.

- id: J
  symbol: \\mathbf{J}
  nombre:
    es: densidad de corriente
    en: current density
  descripcion:
    es: Flujo de carga eléctrica por unidad de área.
    en: Flow of electric charge per unit area.
  unidad_si: A/m^2
  dimension: L^-2I
  is_vector: true
  components: [J_x, J_y, J_z]
  category: fuente dinámica
  physical_role: fuente dinámica
  used_in: [teoria.md, ejemplos.md]
  common_mistake: confundir con intensidad I
  typical_range: 10^-6 a 10^8 A/m^2
  sign_behavior: dirección del movimiento de portadores
  zero_behavior: cargas en reposo
  value_nature: fuente del campo
  interpretation_role: fuente dinámica
  graph_binding: flechas de flujo
  pedagogical_notes: Fuente del rotacional magnético.

- id: epsilon0
  symbol: \\epsilon_0
  nombre:
    es: permitividad del vacío
    en: vacuum permittivity
  descripcion:
    es: Capacidad del vacío para permitir el paso de líneas de campo eléctrico.
    en: Capability of vacuum to permit the passage of electric field lines.
  unidad_si: F/m
  dimension: L^-3M^-1T^4I^2
  is_vector: false
  components: []
  category: constante
  physical_role: constante de escala
  used_in: [teoria.md, ejemplos.md]
  common_mistake: usar valor de medios materiales
  typical_range: 8.854 * 10^-12 F/m
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: constante de escala
  graph_binding: ninguno
  pedagogical_notes: Escala de la interacción eléctrica.

- id: mu0
  symbol: \\mu_0
  nombre:
    es: permeabilidad del vacío
    en: vacuum permeability
  descripcion:
    es: Capacidad del vacío para permitir el paso de líneas de campo magnético.
    en: Capability of vacuum to permit the passage of magnetic field lines.
  unidad_si: H/m
  dimension: LMT^-2I^-2
  is_vector: false
  components: []
  category: constante
  physical_role: constante de escala
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar el factor 4pi
  typical_range: 1.256 * 10^-6 H/m
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: constante de escala
  graph_binding: ninguno
  pedagogical_notes: Escala de la interacción magnética.

- id: divE
  symbol: \\nabla\\cdot\\mathbf{E}
  nombre:
    es: divergencia de E
    en: divergence of E
  descripcion:
    es: Medida de la expansión o convergencia del campo eléctrico.
    en: Measure of expansion or convergence of the electric field.
  unidad_si: V/m^2
  dimension: L^-2MT^-3I^-1
  is_vector: false
  components: []
  category: operador local
  physical_role: indicador de fuente
  used_in: [teoria.md, ejemplos.md]
  common_mistake: confundir con el valor de E
  typical_range: -10^20 a 10^20 V/m^2
  sign_behavior: positiva en fuentes, negativa en sumideros
  zero_behavior: ausencia de carga local
  value_nature: propiedad geométrica
  interpretation_role: indicador de fuente
  graph_binding: gradiente de densidad
  pedagogical_notes: Representa dónde nace el campo.

- id: divB
  symbol: \\nabla\\cdot\\mathbf{B}
  nombre:
    es: divergencia de B
    en: divergence of B
  descripcion:
    es: Medida de la expansión del campo magnético (siempre cero).
    en: Measure of expansion of the magnetic field (always zero).
  unidad_si: T/m
  dimension: L^-1MT^-2I^-1
  is_vector: false
  components: []
  category: operador local
  physical_role: restricción topológica
  used_in: [teoria.md, ejemplos.md]
  common_mistake: esperar valores no nulos
  typical_range: siempre 0
  sign_behavior: siempre cero
  zero_behavior: comportamiento intrínseco
  value_nature: propiedad geométrica
  interpretation_role: indicador de no-monopolo
  graph_binding: ninguno
  pedagogical_notes: Confirma que no hay grifos magnéticos.

- id: curlE
  symbol: \\nabla\\times\\mathbf{E}
  nombre:
    es: rotacional de E
    en: curl of E
  descripcion:
    es: Tendencia del campo eléctrico a circular.
    en: Tendency of the electric field to circulate.
  unidad_si: V/m^2
  dimension: L^-2MT^-3I^-1
  is_vector: true
  components: [curlE_x, curlE_y, curlE_z]
  category: operador local
  physical_role: indicador de inducción
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar el signo negativo de Faraday
  typical_range: 10^-6 a 10^6 V/m^2
  sign_behavior: regla de la mano derecha
  zero_behavior: campo conservativo
  value_nature: propiedad geométrica
  interpretation_role: indicador de inducción
  graph_binding: remolinos vectoriales
  pedagogical_notes: Indica inducción por B variable.

- id: curlB
  symbol: \\nabla\\times\\mathbf{B}
  nombre:
    es: rotacional de B
    en: curl of B
  descripcion:
    es: Tendencia del campo magnético a circular.
    en: Tendency of the magnetic field to circulate.
  unidad_si: T/m
  dimension: L^-1MT^-2I^-1
  is_vector: true
  components: [curlB_x, curlB_y, curlB_z]
  category: operador local
  physical_role: indicador de generación
  used_in: [teoria.md, ejemplos.md]
  common_mistake: ignorar la corriente de desplazamiento
  typical_range: 10^-12 a 10^6 T/m
  sign_behavior: regla de la mano derecha
  zero_behavior: ausencia de fuentes dinámicas
  value_nature: propiedad geométrica
  interpretation_role: indicador de generación de B
  graph_binding: remolinos vectoriales
  pedagogical_notes: Indica presencia de J o dE/dt.

- id: dE_dt
  symbol: \\partial\\mathbf{E}/\\partial t
  nombre:
    es: variación temporal de E
    en: time variation of E
  descripcion:
    es: Tasa de cambio del campo eléctrico respecto al tiempo.
    en: Rate of change of the electric field with time.
  unidad_si: V/(m*s)
  dimension: LMT^-4I^-1
  is_vector: true
  components: [dEx_dt, dEy_dt, dEz_dt]
  category: dinámica temporal
  physical_role: corriente de desplazamiento
  used_in: [teoria.md, ejemplos.md]
  common_mistake: tratarlo como una corriente real J
  typical_range: 10^3 a 10^15 V/(m*s)
  sign_behavior: dirección del aumento de E
  zero_behavior: campo estático
  value_nature: dinámica temporal
  interpretation_role: corriente de desplazamiento
  graph_binding: flechas de tendencia
  pedagogical_notes: Genera campo magnético en el vacío.

- id: dB_dt
  symbol: \\partial\\mathbf{B}/\\partial t
  nombre:
    es: variación temporal de B
    en: time variation of B
  descripcion:
    es: Tasa de cambio del campo magnético respecto al tiempo.
    en: Rate of change of the magnetic field with time.
  unidad_si: T/s
  dimension: MT^-3I^-1
  is_vector: true
  components: [dBx_dt, dBy_dt, dBz_dt]
  category: dinámica temporal
  physical_role: generador de inducción
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar que genera campo eléctrico
  typical_range: 10^-3 a 10^6 T/s
  sign_behavior: dirección del aumento de B
  zero_behavior: campo estático
  value_nature: dinámica temporal
  interpretation_role: generador de inducción
  graph_binding: flechas de tendencia
  pedagogical_notes: Causa la circulación de E.

- id: c
  symbol: c
  nombre:
    es: velocidad de la luz
    en: speed of light
  descripcion:
    es: Velocidad de propagación de las ondas en el vacío.
    en: Propagation speed of waves in vacuum.
  unidad_si: m/s
  dimension: LT^-1
  is_vector: false
  components: []
  category: constante universal
  physical_role: límite de velocidad
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que depende de la fuente
  typical_range: 299792458 m/s
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: límite universal
  graph_binding: ninguno
  pedagogical_notes: Conecta espacio y tiempo en el campo.

- id: divJ
  symbol: \\nabla\\cdot\\mathbf{J}
  nombre:
    es: divergencia de la corriente
    en: divergence of current
  descripcion:
    es: Medida de cuánto fluye la corriente hacia afuera.
    en: Measure of how much current flows out.
  unidad_si: A/m^3
  dimension: L^-3I
  is_vector: false
  components: []
  category: operador local
  physical_role: indicador de conservación
  used_in: [teoria.md, ejemplos.md]
  common_mistake: ignorar el cambio de rho
  typical_range: -10^6 a 10^6 A/m^3
  sign_behavior: flujo saliente o entrante
  zero_behavior: corriente estacionaria
  value_nature: propiedad geométrica
  interpretation_role: indicador de conservación
  graph_binding: ninguno
  pedagogical_notes: Clave para la conservación de la carga.

- id: laplacianE
  symbol: \\nabla^2 \\mathbf{E}
  nombre:
    es: laplaciano de E
    en: laplacian of E
  descripcion:
    es: Representa la curvatura espacial del campo eléctrico.
    en: Represents spatial curvature of the electric field.
  unidad_si: V/m^3
  dimension: L^-2MT^-3I^-1
  is_vector: true
  components: [lapE_x, lapE_y, lapE_z]
  category: operador de segundo orden
  physical_role: término de propagación
  used_in: [teoria.md, ejemplos.md]
  common_mistake: confundir con la divergencia
  typical_range: 10^-3 a 10^9 V/m^3
  sign_behavior: dirección de concavidad
  zero_behavior: campo uniforme o lineal
  value_nature: propiedad geométrica
  interpretation_role: término ondulatorio
  graph_binding: ninguno
  pedagogical_notes: Define cómo se curva la onda en el espacio.
`;export{e as default};
