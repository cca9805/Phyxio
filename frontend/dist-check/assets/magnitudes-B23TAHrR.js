const e=`# Magnitudes para la formulación integral de Maxwell

- id: flux_E
  symbol: \\Phi_E
  nombre:
    es: flujo eléctrico
    en: electric flux
  descripcion:
    es: Medida del campo eléctrico total que atraviesa una superficie.
    en: Measure of the total electric field passing through a surface.
  unidad_si: V \\cdot m
  dimension: L^3MT^-3I^-1
  is_vector: false
  components: []
  category: magnitud de flujo
  physical_role: indicador de fuente neta
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que depende de la forma de la superficie
  typical_range: -10^6 a 10^6 V \\cdot m
  sign_behavior: positivo para flujo saliente, negativo para entrante
  zero_behavior: carga neta encerrada nula
  value_nature: escalar de superficie
  interpretation_role: flujo neto
  graph_binding: densidad de líneas
  pedagogical_notes: Se asocia a la ley de Gauss para la electricidad.

- id: q_enc
  symbol: q_{enc}
  nombre:
    es: carga encerrada
    en: enclosed charge
  descripcion:
    es: Suma algebraica de todas las cargas eléctricas dentro de una superficie cerrada.
    en: Algebraic sum of all electric charges within a closed surface.
  unidad_si: C
  dimension: TI
  is_vector: false
  components: []
  category: fuente
  physical_role: fuente del campo
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar el signo de las cargas negativas
  typical_range: 10^-12 a 10^-3 C
  sign_behavior: positiva o negativa
  zero_behavior: sistema neutro o sin carga interna
  value_nature: escalar de volumen
  interpretation_role: fuente puntual/distribuida
  graph_binding: tamaño de esfera
  pedagogical_notes: Es la causa directa del flujo eléctrico neto.

- id: epsilon0
  symbol: \\epsilon_0
  nombre:
    es: permitividad del vacío
    en: vacuum permittivity
  descripcion:
    es: Constante que define la intensidad de la interacción eléctrica en el vacío.
    en: Constant that defines the strength of electric interaction in vacuum.
  unidad_si: F/m
  dimension: L^-3M^-1T^4I^2
  is_vector: false
  components: []
  category: constante universal
  physical_role: constante de escala
  used_in: [teoria.md, ejemplos.md]
  common_mistake: usar valores de medios materiales
  typical_range: 8.854 * 10^-12 F/m
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: constante de escala
  graph_binding: ninguno
  pedagogical_notes: Relaciona la carga con el flujo eléctrico.

- id: flux_B
  symbol: \\Phi_B
  nombre:
    es: flujo magnético
    en: magnetic flux
  descripcion:
    es: Medida del campo magnético total que atraviesa una superficie.
    en: Measure of the total magnetic field passing through a surface.
  unidad_si: Wb
  dimension: L^2MT^-2I^-1
  is_vector: false
  components: []
  category: magnitud de flujo
  physical_role: indicador de inducción
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que puede ser distinto de cero en superficies cerradas
  typical_range: 10^-6 a 1 Wb
  sign_behavior: positivo para líneas salientes
  zero_behavior: líneas cerradas (siempre cero en superficies cerradas)
  value_nature: escalar de superficie
  interpretation_role: flujo neto magnético
  graph_binding: densidad de líneas
  pedagogical_notes: Su variación temporal genera fuerza electromotriz.

- id: emf
  symbol: E_{emf}
  nombre:
    es: fuerza electromotriz (FEM)
    en: electromotive force (EMF)
  descripcion:
    es: Diferencia de potencial inducida a lo largo de un circuito cerrado.
    en: Induced potential difference along a closed circuit.
  unidad_si: V
  dimension: L^2MT^-3I^-1
  is_vector: false
  components: []
  category: potencial inducido
  physical_role: causa de la corriente
  used_in: [teoria.md, ejemplos.md]
  common_mistake: tratarlo como una fuerza mecánica (N)
  typical_range: 10^-3 a 10^3 V
  sign_behavior: definida por la ley de Lenz
  zero_behavior: flujo magnético constante o nulo
  value_nature: escalar de línea (circulación)
  interpretation_role: potencial de inducción
  graph_binding: brillo de lámpara
  pedagogical_notes: Surge por la variación del flujo magnético.

- id: dPhiB_dt
  symbol: d\\Phi_B/dt
  nombre:
    es: variación del flujo magnético
    en: magnetic flux variation
  descripcion:
    es: Rapidez con la que cambia el flujo magnético en el tiempo.
    en: Rate at which magnetic flux changes over time.
  unidad_si: Wb/s
  dimension: L^2MT^-3I^-1
  is_vector: false
  components: []
  category: dinámica temporal
  physical_role: motor de inducción
  used_in: [teoria.md, ejemplos.md]
  common_mistake: confundir con el valor del flujo estático
  typical_range: 10^-6 a 10^3 Wb/s
  sign_behavior: depende del aumento o disminución del flujo
  zero_behavior: flujo magnético constante
  value_nature: derivada temporal
  interpretation_role: motor de Faraday
  graph_binding: velocidad de giro
  pedagogical_notes: Es el término fundamental de la ley de Faraday.

- id: cirB
  symbol: \\oint \\mathbf{B}\\cdot d\\mathbf{l}
  nombre:
    es: circulación magnética
    en: magnetic circulation
  descripcion:
    es: Integral del campo magnético a lo largo de una trayectoria cerrada.
    en: Integral of the magnetic field along a closed path.
  unidad_si: T \\cdot m
  dimension: LMT^-2I^-1
  is_vector: false
  components: []
  category: magnitud de línea
  physical_role: indicador de corrientes
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que es nula si no hay corrientes de conducción
  typical_range: 10^-6 a 1 T \\cdot m
  sign_behavior: relativo al sentido de recorrido
  zero_behavior: ausencia de corrientes y variaciones eléctricas
  value_nature: escalar de línea
  interpretation_role: circulación neta
  graph_binding: intensidad del trazo
  pedagogical_notes: Relacionada con la ley de Ampère-Maxwell.

- id: mu0
  symbol: \\mu_0
  nombre:
    es: permeabilidad del vacío
    en: vacuum permeability
  descripcion:
    es: Constante que define la intensidad de la interacción magnética en el vacío.
    en: Constant that defines the strength of magnetic interaction in vacuum.
  unidad_si: H/m
  dimension: LMT^-2I^-2
  is_vector: false
  components: []
  category: constante universal
  physical_role: constante de escala
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar el factor 4pi
  typical_range: 1.256 * 10^-6 H/m
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: constante de escala
  graph_binding: ninguno
  pedagogical_notes: Relaciona la corriente con la circulación magnética.

- id: I_enc
  symbol: I_{enc}
  nombre:
    es: corriente encerrada
    en: enclosed current
  descripcion:
    es: Intensidad de corriente eléctrica que atraviesa la superficie de Ampère.
    en: Electric current intensity passing through the Ampère surface.
  unidad_si: A
  dimension: I
  is_vector: false
  components: []
  category: fuente
  physical_role: fuente del campo B
  used_in: [teoria.md, ejemplos.md]
  common_mistake: no considerar el sentido de la corriente
  typical_range: 10^-3 a 10^3 A
  sign_behavior: positiva o negativa según sentido de recorrido
  zero_behavior: circuito abierto o sin corriente neta
  value_nature: escalar de superficie (flujo de J)
  interpretation_role: fuente de circulación
  graph_binding: grosor de flecha
  pedagogical_notes: Genera la circulación magnética principal.

- id: dPhiE_dt
  symbol: d\\Phi_E/dt
  nombre:
    es: variación del flujo eléctrico
    en: electric flux variation
  descripcion:
    es: Rapidez con la que cambia el flujo eléctrico en el tiempo.
    en: Rate at which electric flux changes over time.
  unidad_si: V \\cdot m/s
  dimension: L^3MT^-4I^-1
  is_vector: false
  components: []
  category: dinámica temporal
  physical_role: corriente de desplazamiento
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que es un flujo de electrones real
  typical_range: 10^3 a 10^15 V \\cdot m/s
  sign_behavior: depende de la variación de E
  zero_behavior: campo eléctrico estático
  value_nature: derivada temporal
  interpretation_role: motor de Ampère-Maxwell
  graph_binding: velocidad de parpadeo
  pedagogical_notes: Término de Maxwell para la propagación de ondas.

- id: c
  symbol: c
  nombre:
    es: velocidad de la luz
    en: speed of light
  descripcion:
    es: Velocidad máxima de propagación de la energía y la información en el vacío.
    en: Maximum speed of energy and information propagation in vacuum.
  unidad_si: m/s
  dimension: LT^-1
  is_vector: false
  components: []
  category: constante universal
  physical_role: constante de escala
  used_in: [teoria.md, historia.md]
  common_mistake: creer que depende del sistema de referencia
  typical_range: 299792458 m/s
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: constante de escala
  graph_binding: ninguno
  pedagogical_notes: Vincula la permitividad y permeabilidad del vacío.
`;export{e as default};
