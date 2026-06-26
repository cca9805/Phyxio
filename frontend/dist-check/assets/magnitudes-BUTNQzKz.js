const e=`# Magnitudes para Interpretación Física de Maxwell

- id: c
  symbol: c
  nombre:
    es: velocidad de la luz en el vacío
    en: speed of light in vacuum
  descripcion:
    es: Constante universal que representa la velocidad de propagación de las ondas electromagnéticas.
    en: Universal constant representing the propagation speed of electromagnetic waves.
  unidad_si: m/s
  dimension: LT^-1
  is_vector: false
  components: []
  category: constante fundamental
  physical_role: constante de escala universal
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que se puede superar este límite en el vacío
  typical_range: 299792458 m/s
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: límite de velocidad de información
  graph_binding: pendiente del cono de luz
  pedagogical_notes: Es el pilar de la relatividad y la unificación electromagnética.

- id: mu0
  symbol: \\mu_0
  nombre:
    es: permeabilidad magnética del vacío
    en: vacuum magnetic permeability
  descripcion:
    es: Capacidad del vacío para permitir el paso de líneas de campo magnético.
    en: Capacity of vacuum to allow the passage of magnetic field lines.
  unidad_si: H/m
  dimension: LMT^-2I^-2
  is_vector: false
  components: []
  category: constante fundamental
  physical_role: constante de escala magnética
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar el factor 4pi en cálculos manuales
  typical_range: 1.256 * 10^-6 H/m
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: rigidez magnética del vacío
  graph_binding: ninguno
  pedagogical_notes: Relaciona la circulación magnética con la corriente.

- id: epsilon0
  symbol: \\epsilon_0
  nombre:
    es: permitividad eléctrica del vacío
    en: vacuum electrical permittivity
  descripcion:
    es: Capacidad del vacío para permitir el paso de líneas de campo eléctrico.
    en: Capacity of vacuum to allow the passage of electric field lines.
  unidad_si: F/m
  dimension: L^-3M^-1T^4I^2
  is_vector: false
  components: []
  category: constante fundamental
  physical_role: constante de escala eléctrica
  used_in: [teoria.md, ejemplos.md]
  common_mistake: confundirla con la permitividad de un medio material
  typical_range: 8.854 * 10^-12 F/m
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: constante fundamental
  interpretation_role: elasticidad eléctrica del vacío
  graph_binding: ninguno
  pedagogical_notes: Define la fuerza entre cargas en el espacio libre.

- id: u
  symbol: u
  nombre:
    es: densidad de energía electromagnética
    en: electromagnetic energy density
  descripcion:
    es: Cantidad de energía almacenada en los campos por unidad de volumen.
    en: Amount of energy stored in the fields per unit volume.
  unidad_si: J/m^3
  dimension: L^-1MT^-2
  is_vector: false
  components: []
  category: magnitud escalar
  physical_role: almacenamiento energético
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar la contribución magnética en el balance total
  typical_range: 10^-15 a 10^3 J/m^3
  sign_behavior: siempre positiva o cero
  zero_behavior: ausencia total de campos E y B
  value_nature: escalar de densidad
  interpretation_role: presión de energía local
  graph_binding: mapa de calor
  pedagogical_notes: Se divide equitativamente entre E y B en ondas planas.

- id: E
  symbol: E
  nombre:
    es: campo eléctrico
    en: electric field
  descripcion:
    es: Magnitud del campo eléctrico local en un punto del espacio.
    en: Magnitude of the local electric field at a point in space.
  unidad_si: V/m
  dimension: LMT^-3I^-1
  is_vector: true
  components: [Ex, Ey, Ez]
  category: campo vectorial
  physical_role: mediador de fuerza eléctrica
  used_in: [teoria.md, ejemplos.md]
  common_mistake: tratarlo como escalar en superposiciones
  typical_range: 10^-3 a 10^6 V/m
  sign_behavior: vectorial (depende de la carga fuente)
  zero_behavior: equilibrio de fuerzas o ausencia de carga
  value_nature: vector polar
  interpretation_role: estado del medio eléctrico
  graph_binding: flechas de campo
  pedagogical_notes: Oscila perpendicularmente a B en una onda electromagnética.

- id: B
  symbol: B
  nombre:
    es: campo magnético
    en: magnetic field
  descripcion:
    es: Magnitud de la inducción magnética local en un punto del espacio.
    en: Magnitude of the local magnetic induction at a point in space.
  unidad_si: T
  dimension: MT^-2I^-1
  is_vector: true
  components: [Bx, By, Bz]
  category: campo vectorial
  physical_role: mediador de fuerza magnética
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que realiza trabajo sobre cargas libres
  typical_range: 10^-9 a 10 T
  sign_behavior: vectorial (depende de la corriente)
  zero_behavior: ausencia de corrientes o imanes
  value_nature: vector axial (pseudovector)
  interpretation_role: estado del medio magnético
  graph_binding: flechas de campo
  pedagogical_notes: Es proporcional a E/c en el vacío para ondas planas.

- id: S
  symbol: S
  nombre:
    es: vector de Poynting
    en: Poynting vector
  descripcion:
    es: Tasa de flujo de energía electromagnética por unidad de área.
    en: Rate of electromagnetic energy flow per unit area.
  unidad_si: W/m^2
  dimension: MT^-3
  is_vector: true
  components: [Sx, Sy, Sz]
  category: flujo de energía
  physical_role: transporte de potencia direccional
  used_in: [teoria.md, ejemplos.md]
  common_mistake: ignorar su dirección vectorial
  typical_range: 10^-6 a 10^9 W/m^2
  sign_behavior: apunta en la dirección de propagación
  zero_behavior: campos E y B paralelos o uno nulo
  value_nature: vector de flujo
  interpretation_role: caudal de energía
  graph_binding: flujo de partículas (fotones)
  pedagogical_notes: Define físicamente hacia dónde viaja la onda.

- id: I
  symbol: I
  nombre:
    es: intensidad media
    en: average intensity
  descripcion:
    es: Promedio temporal del flujo de energía transportada por una onda plana.
    en: Time average of the energy flux carried by a plane wave.
  unidad_si: W/m^2
  dimension: MT^-3
  is_vector: false
  components: []
  category: flujo de energía
  physical_role: potencia promediada
  used_in: [teoria.md, ejemplos.md]
  common_mistake: confundir con la magnitud instantánea de S
  typical_range: 10^-12 a 10^7 W/m^2
  sign_behavior: siempre positiva
  zero_behavior: onda estacionaria o ausencia de onda
  value_nature: escalar promediado
  interpretation_role: brillo o potencia recibida
  graph_binding: intensidad lumínica
  pedagogical_notes: Es la magnitud que detectan los ojos y las antenas.

- id: E0
  symbol: E_0
  nombre:
    es: amplitud del campo eléctrico
    en: electric field amplitude
  descripcion:
    es: Valor máximo de la oscilación del campo eléctrico en una onda.
    en: Maximum value of the electric field oscillation in a wave.
  unidad_si: V/m
  dimension: LMT^-3I^-1
  is_vector: false
  components: []
  category: parámetro de onda
  physical_role: pico de oscilación
  used_in: [teoria.md, ejemplos.md]
  common_mistake: usar el valor eficaz (RMS) como si fuera la amplitud
  typical_range: 10^-3 a 10^6 V/m
  sign_behavior: siempre positiva
  zero_behavior: ausencia de onda
  value_nature: escalar de amplitud
  interpretation_role: fuerza de la señal
  graph_binding: altura de la cresta
  pedagogical_notes: Determina la intensidad media de la onda.

- id: B0
  symbol: B_0
  nombre:
    es: amplitud del campo magnético
    en: magnetic field amplitude
  descripcion:
    es: Valor máximo de la oscilación del campo magnético en una onda.
    en: Maximum value of the magnetic field oscillation in a wave.
  unidad_si: T
  dimension: MT^-2I^-1
  is_vector: false
  components: []
  category: parámetro de onda
  physical_role: pico de oscilación magnética
  used_in: [teoria.md, ejemplos.md]
  common_mistake: olvidar la relación con E0 mediante c
  typical_range: 10^-12 a 10^-2 T
  sign_behavior: siempre positiva
  zero_behavior: ausencia de onda
  value_nature: escalar de amplitud
  interpretation_role: fuerza magnética de la señal
  graph_binding: ninguno
  pedagogical_notes: Está acoplada rígidamente a E0 en el vacío.

- id: EB
  symbol: E/B
  nombre:
    es: relación entre campos
    en: field ratio
  descripcion:
    es: Proporcionalidad entre la magnitud del campo eléctrico y magnético en el vacío.
    en: Proportionality between the electric and magnetic field magnitude in vacuum.
  unidad_si: m/s
  dimension: LT^-1
  is_vector: false
  components: []
  category: relación de onda
  physical_role: constante de acoplo de onda
  used_in: [teoria.md, ejemplos.md]
  common_mistake: creer que es válida fuera del vacío o aire sin cambios
  typical_range: 299792458 m/s
  sign_behavior: siempre positiva
  zero_behavior: no aplica
  value_nature: cociente de amplitudes
  interpretation_role: huella dactilar de la onda electromagnética
  graph_binding: ninguno
  pedagogical_notes: Es idéntica a c en el vacío.
`;export{e as default};
