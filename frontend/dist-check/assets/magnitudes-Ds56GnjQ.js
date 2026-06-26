const e=`version: 1.0.0\r
leaf_id: diagramas-pv\r
magnitudes:\r
- id: P\r
  symbol: P\r
  nombre: { es: Presion, en: Pressure }\r
  descripcion: { es: Presion del gas en un punto del diagrama p-V., en: Pressure of the gas at a point in the P-V diagram. }\r
  unidad_si: Pa\r
  dimension: "[M L⁻¹ T⁻²]"\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: core_physical_quantity\r
  used_in: [ gas ideal, trabajo, diagramas p-v ]\r
  common_mistake: Confundir la presion con fuerza en lugar de fuerza por unidad de area.\r
  typical_range: { min: 1000, max: 5000000, unit: Pa, context: Gases de laboratorio y procesos termodinamicos. }\r
  sign_behavior: { has_sign: false, meaning: { es: La presion absoluta siempre es no negativa., en: Absolute pressure is always non-negative. } }\r
  zero_behavior: { allowed: true, meaning: { es: Cero representa vacio ideal o presion despreciable., en: Zero represents ideal vacuum or negligible pressure. } }\r
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "[0, 1e7]" }\r
  interpretation_role: { primary_for: lectura del diagrama p-v, secondary_for: equilibrio mecanico }\r
  graph_binding: { channels: [ pressure_curve, area_under_curve ] }\r
  pedagogical_notes: { es: "En un diagrama p-V, [[P]] describe la altura de la curva y define la fuerza por unidad de area.", en: "In a P-V diagram, [[P]] describes the curve height and defines force per unit area." }\r
\r
- id: V\r
  symbol: V\r
  nombre: { es: Volumen, en: Volume }\r
  descripcion: { es: Volumen ocupado por el gas en el proceso termodinamico., en: Volume occupied by the gas in the thermodynamic process. }\r
  unidad_si: m³\r
  dimension: "[L³]"\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: core_physical_quantity\r
  used_in: [ gas ideal, trabajo, cambios de estado ]\r
  common_mistake: Interpretar el volumen como distancia en vez de espacio tridimensional contenido.\r
  typical_range: { min: 1e-5, max: 1, unit: m³, context: Volumen de gas en recipientes de laboratorio. }\r
  sign_behavior: { has_sign: false, meaning: { es: El volumen es una magnitud no negativa., en: Volume is a non-negative quantity. } }\r
  zero_behavior: { allowed: false, meaning: { es: El volumen cero es un limite idealizado, no un estado fisico alcanzable para un gas real., en: Zero volume is an ideal limit not reached by a real gas. } }\r
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "[0, 10]" }\r
  interpretation_role: { primary_for: area del proceso, secondary_for: velocidad de expansion }\r
  graph_binding: { channels: [ volume_axis, area_under_curve ] }\r
  pedagogical_notes: { es: "[[V]] se lee en el eje horizontal y marca la extension del gas; cambios pequenos pueden alterar mucho el trabajo.", en: "[[V]] is read on the horizontal axis and marks the gas extent; small changes can strongly affect work. " }\r
\r
- id: T\r
  symbol: T\r
  nombre: { es: Temperatura, en: Temperature }\r
  descripcion: { es: Temperatura termodinamica del gas que aparece en la ley del gas ideal., en: Thermodynamic temperature of the gas that appears in the ideal gas law. }\r
  unidad_si: K\r
  dimension: "[Theta]"\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: core_physical_quantity\r
  used_in: [ gas ideal, proceso isotermico, equilibrio termico ]\r
  common_mistake: Confundir la temperatura con energia interna o calor acumulado.\r
  typical_range: { min: 200, max: 1000, unit: K, context: Gases ideales en condiciones de laboratorio. }\r
  sign_behavior: { has_sign: false, meaning: { es: La temperatura absoluta no puede ser negativa., en: Absolute temperature cannot be negative. } }\r
  zero_behavior: { allowed: false, meaning: { es: Cero absoluto es un limite teorico no alcanzado por el gas., en: Absolute zero is a theoretical limit not reached by the gas. } }\r
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "[0, 5000]" }\r
  interpretation_role: { primary_for: estado termico, secondary_for: forma de la curva }\r
  graph_binding: { channels: [ temperature_level ] }\r
  pedagogical_notes: { es: "[[T]] fija la familia de curvas isotermicas y condiciona la pendiente en un diagrama p-V.", en: "[[T]] fixes the family of isothermal curves and conditions the slope in a P-V diagram." }\r
\r
- id: n\r
  symbol: n\r
  nombre: { es: Cantidad de sustancia, en: Amount of substance }\r
  descripcion: { es: Numero de moles de gas que participa en el proceso., en: Number of moles of gas participating in the process. }\r
  unidad_si: mol\r
  dimension: "[N]"\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: core_physical_quantity\r
  used_in: [ gas ideal, ley de gases, proceso termodinamico ]\r
  common_mistake: Pensar que la cantidad de moles cambia en un sistema cerrado sin reaccion química.\r
  typical_range: { min: 0.01, max: 10, unit: mol, context: Gases de laboratorio. }\r
  sign_behavior: { has_sign: false, meaning: { es: La cantidad de sustancia no es negativa., en: Amount of substance is not negative. } }\r
  zero_behavior: { allowed: true, meaning: { es: Cero moles significa ausencia de gas en el volumen considerado., en: Zero moles means no gas in the considered volume. } }\r
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "[0, 100]" }\r
  interpretation_role: { primary_for: escala del sistema, secondary_for: estado del gas }\r
  graph_binding: { channels: [ quantity_marker ] }\r
  pedagogical_notes: { es: "[[n]] determina la posicion de las isotermas en el diagrama p-V y la cantidad de materia disponible.", en: "[[n]] determines the position of isotherms in the P-V diagram and the amount of matter available." }\r
\r
- id: R\r
  symbol: R\r
  nombre: { es: Constante de los gases ideales, en: Ideal gas constant }\r
  descripcion: { es: Constante universal que relaciona presion, volumen, cantidad y temperatura en el gas ideal., en: Universal constant relating pressure, volume, amount, and temperature in the ideal gas. }\r
  unidad_si: "J/(mol K)"\r
  dimension: "[M L² T⁻² N⁻¹ Theta⁻¹]"\r
  is_vector: false\r
  components: []\r
  category: constant\r
  physical_role: core_physical_quantity\r
  used_in: [ gas ideal, procesos isotermicos, procesos isobaricos ]\r
  common_mistake: Creer que R depende del gas; es constante universal para gases ideales.\r
  typical_range: { min: 8.314, max: 8.314, unit: "J/(mol K)", context: Gas ideal en SI. }\r
  sign_behavior: { has_sign: false, meaning: { es: Es una constante positiva fija., en: It is a fixed positive constant. } }\r
  zero_behavior: { allowed: false, meaning: { es: No puede ser cero en la ley de gases ideales., en: It cannot be zero in the ideal gas law. } }\r
  value_nature: { kind: scalar_unsigned, nonnegative_only: true, expected_interval: "[8.314, 8.314]" }\r
  interpretation_role: { primary_for: ley del gas, secondary_for: escala termica }\r
  graph_binding: { channels: [ ideal_gas_constant ] }\r
  pedagogical_notes: { es: "[[R]] es la constante que mantiene la proporcionalidad entre las variables termodinamicas de un gas ideal.", en: "[[R]] is the constant that maintains proportionality between thermodynamic variables of an ideal gas." }\r
\r
- id: W\r
  symbol: W\r
  nombre: { es: Trabajo, en: Work }\r
  descripcion: { es: Trabajo realizado por o sobre el gas durante un cambio de volumen., en: Work done by or on the gas during a volume change. }\r
  unidad_si: J\r
  dimension: "[M L² T⁻²]"\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: core_physical_quantity\r
  used_in: [ diagramas p-v, procesos, energia ]\r
  common_mistake: Confundir el trabajo con energia interna total del gas.\r
  typical_range: { min: -1000, max: 1000, unit: J, context: Trabajo de procesos termodinamicos en volumen de laboratorio. }\r
  sign_behavior: { has_sign: true, meaning: { es: El signo indica trabajo realizado por el sistema o sobre el sistema., en: The sign indicates work done by or on the system. } }\r
  zero_behavior: { allowed: true, meaning: { es: Cero trabajo cuando no hay cambio de volumen o la curva es vertical., en: Zero work when there is no volume change or the curve is vertical. } }\r
  value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "[-1e4, 1e4]" }\r
  interpretation_role: { primary_for: area bajo la curva, secondary_for: energia transferida }\r
  graph_binding: { channels: [ area_under_curve, work_direction ] }\r
  pedagogical_notes: { es: "[[W]] se interpreta como el area bajo la trayectoria en el diagrama p-V, con el signo determinado por la expansion o compresion.", en: "[[W]] is interpreted as the area under the trajectory in the P-V diagram, with sign determined by expansion or compression." }\r
\r
- id: DeltaV\r
  symbol: DeltaV\r
  nombre: { es: Cambio de volumen, en: Volume change }\r
  descripcion: { es: Diferencia entre volumen final e inicial del proceso termodinamico., en: Difference between final and initial volume of the thermodynamic process. }\r
  unidad_si: m³\r
  dimension: "[L³]"\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: diagnostic\r
  used_in: [ trabajo, procesos, diagramas p-v ]\r
  common_mistake: Tratar el cambio de volumen como volumen absoluto en lugar de una variacion.\r
  typical_range: { min: -0.5, max: 0.5, unit: m³, context: Cambios de volumen en procesos de gas. }\r
  sign_behavior: { has_sign: true, meaning: { es: El signo indica expansion positiva o compresion negativa., en: The sign indicates positive expansion or negative compression. } }\r
  zero_behavior: { allowed: true, meaning: { es: Cero significa proceso isocorico sin trabajo mecanico., en: Zero means an isochoric process with no mechanical work. } }\r
  value_nature: { kind: scalar_signed, nonnegative_only: false, expected_interval: "[-1, 1]" }\r
  interpretation_role: { primary_for: direccion del proceso, secondary_for: magnitud del trabajo }\r
  graph_binding: { channels: [ volume_shift ] }\r
  pedagogical_notes: { es: "[[DeltaV]] muestra la direccion del proceso en el diagrama p-V: expansion hacia la derecha, compresion hacia la izquierda.", en: "[[DeltaV]] shows the process direction on the P-V diagram: expansion to the right, compression to the left." }\r
`;export{e as default};
