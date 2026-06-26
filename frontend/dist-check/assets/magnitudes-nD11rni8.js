const e=`version: 1.0.0
leaf_id: equilibrio-termodinamico
magnitudes:
  - id: T
    symbol: T
    nombre: { es: Temperatura, en: Temperature }
    descripcion: { es: Variable intensiva que se iguala en equilibrio termico., en: Intensive variable that equalizes in thermal equilibrium. }
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in: [equilibrio termico, criterio de estabilidad, contacto termico]
    common_mistake: Confundir misma energia interna con misma temperatura.
    typical_range: { min: 1, max: 3000, unit: K, context: Sistemas termodinamicos clasicos. }
    sign_behavior: { has_sign: false, meaning: { es: Temperatura absoluta no negativa., en: Non-negative absolute temperature. } }
    zero_behavior: { allowed: false, meaning: { es: Cero absoluto es limite ideal no alcanzable para equilibrio ordinario., en: Absolute zero is an ideal limit not reached by ordinary equilibrium. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [1, 10000] }
    interpretation_role: { primary_for: equilibrio termico, secondary_for: direccion de calor }
    graph_binding: { channels: [thermal_equalization, star] }
    pedagogical_notes: { es: "[[T]] comun indica ausencia de flujo neto de calor.", en: "Common [[T]] indicates no net heat flow." }

  - id: P
    symbol: P
    nombre: { es: Presion, en: Pressure }
    descripcion: { es: Variable intensiva que se iguala en equilibrio mecanico si una frontera puede moverse., en: Intensive variable that equalizes in mechanical equilibrium if a boundary can move. }
    unidad_si: Pa
    dimension: "[M L⁻¹ T⁻²]"
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in: [equilibrio mecanico, frontera movil, trabajo de expansion]
    common_mistake: Olvidar presiones externas o pesos sobre un piston.
    typical_range: { min: 1, max: 100000000, unit: Pa, context: Gases, liquidos y recipientes tecnicos. }
    sign_behavior: { has_sign: false, meaning: { es: Presion absoluta positiva., en: Positive absolute pressure. } }
    zero_behavior: { allowed: true, meaning: { es: Vacio ideal o presion despreciable., en: Ideal vacuum or negligible pressure. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0, 100000000] }
    interpretation_role: { primary_for: equilibrio mecanico, secondary_for: fuerza sobre fronteras }
    graph_binding: { channels: [mechanical_equalization] }
    pedagogical_notes: { es: "[[P]] comun evita movimiento neto de fronteras moviles.", en: "Common [[P]] prevents net motion of movable boundaries." }

  - id: mu
    symbol: mu
    nombre: { es: Potencial quimico, en: Chemical potential }
    descripcion: { es: Variable intensiva que se iguala cuando puede haber intercambio de materia., en: Intensive variable that equalizes when matter exchange is possible. }
    unidad_si: J/mol
    dimension: "[M L² T⁻² N⁻¹]"
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in: [equilibrio quimico, difusion, cambio de fase]
    common_mistake: Pensar que no hay equilibrio quimico si las concentraciones son distintas.
    typical_range: { min: -1000000, max: 1000000, unit: J/mol, context: Sustancias ordinarias. }
    sign_behavior: { has_sign: true, meaning: { es: Depende del estado de referencia., en: Depends on reference state. } }
    zero_behavior: { allowed: true, meaning: { es: Valor de referencia elegido., en: Chosen reference value. } }
    value_nature: { kind: scalar, nonnegative_only: false, expected_interval: [-1000000, 1000000] }
    interpretation_role: { primary_for: equilibrio material, secondary_for: direccion de difusion }
    graph_binding: { channels: [chemical_equalization] }
    pedagogical_notes: { es: "La igualdad de [[mu]] cancela el impulso neto de intercambio de materia.", en: "Equality of [[mu]] cancels net matter-exchange drive." }

  - id: DeltaT
    symbol: DeltaT
    nombre: { es: Diferencia de temperatura, en: Temperature difference }
    descripcion: { es: Gradiente termico entre dos partes del sistema., en: Thermal gradient between two parts of the system. }
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: null
    category: derived
    physical_role: diagnostic
    used_in: [no equilibrio, relajacion termica, criterio de equilibrio]
    common_mistake: Declarar equilibrio mientras existe [[DeltaT]] apreciable.
    typical_range: { min: 0, max: 1000, unit: K, context: Contacto termico macroscópico. }
    sign_behavior: { has_sign: true, meaning: { es: Indica que lado esta mas caliente segun convencion., en: Indicates which side is hotter by convention. } }
    zero_behavior: { allowed: true, meaning: { es: Condicion de equilibrio termico., en: Thermal equilibrium condition. } }
    value_nature: { kind: scalar, nonnegative_only: false, expected_interval: [-1000, 1000] }
    interpretation_role: { primary_for: diagnostico de desequilibrio, secondary_for: escala de relajacion }
    graph_binding: { channels: [gradient_arrow] }
    pedagogical_notes: { es: "[[DeltaT]] distinto de cero significa que el sistema aun puede evolucionar.", en: "Non-zero [[DeltaT]] means the system can still evolve." }

  - id: DeltaP
    symbol: DeltaP
    nombre: { es: Diferencia de presion, en: Pressure difference }
    descripcion: { es: Gradiente mecanico entre dos regiones o lados de una frontera., en: Mechanical gradient between two regions or sides of a boundary. }
    unidad_si: Pa
    dimension: "[M L⁻¹ T⁻²]"
    is_vector: false
    components: null
    category: derived
    physical_role: diagnostic
    used_in: [fuerza sobre piston, relajacion mecanica, flujo]
    common_mistake: Ignorar [[DeltaP]] si la frontera puede desplazarse.
    typical_range: { min: 0, max: 10000000, unit: Pa, context: Recipientes y gases. }
    sign_behavior: { has_sign: true, meaning: { es: Indica sentido de la fuerza neta sobre frontera., en: Indicates direction of net force on boundary. } }
    zero_behavior: { allowed: true, meaning: { es: Condicion de equilibrio mecanico., en: Mechanical equilibrium condition. } }
    value_nature: { kind: scalar, nonnegative_only: false, expected_interval: [-10000000, 10000000] }
    interpretation_role: { primary_for: diagnostico mecanico, secondary_for: estabilidad de fronteras }
    graph_binding: { channels: [pressure_arrow] }
    pedagogical_notes: { es: "[[DeltaP]] nulo evita empuje neto sobre fronteras moviles.", en: "Zero [[DeltaP]] prevents net push on movable boundaries." }

  - id: A
    symbol: A
    nombre: { es: Afinidad termodinamica, en: Thermodynamic affinity }
    descripcion: { es: Medida generalizada de impulso interno que conduce la evolucion hacia equilibrio., en: Generalized measure of internal drive that leads evolution toward equilibrium. }
    unidad_si: "variable"
    dimension: "[variable]"
    is_vector: false
    components: null
    category: generalized
    physical_role: diagnostic
    used_in: [equilibrio quimico, relajacion irreversible, estabilidad]
    common_mistake: Creer que equilibrio solo significa reposo mecanico.
    typical_range: { min: -1000000, max: 1000000, unit: variable, context: Depende del proceso generalizado. }
    sign_behavior: { has_sign: true, meaning: { es: El signo indica sentido espontaneo de evolucion., en: The sign indicates spontaneous direction of evolution. } }
    zero_behavior: { allowed: true, meaning: { es: Afinidad nula en equilibrio., en: Zero affinity at equilibrium. } }
    value_nature: { kind: scalar, nonnegative_only: false, expected_interval: [-1000000, 1000000] }
    interpretation_role: { primary_for: criterio general de equilibrio, secondary_for: direccion de procesos }
    graph_binding: { channels: [affinity_meter] }
    pedagogical_notes: { es: "En equilibrio completo, [[A]] se anula para los procesos permitidos.", en: "At complete equilibrium, [[A]] vanishes for allowed processes." }

  - id: tau
    symbol: tau
    nombre: { es: Tiempo de relajacion, en: Relaxation time }
    descripcion: { es: Escala temporal caracteristica con la que un gradiente se reduce., en: Characteristic time scale over which a gradient decreases. }
    unidad_si: s
    dimension: "[T]"
    is_vector: false
    components: null
    category: parameter
    physical_role: timescale
    used_in: [relajacion al equilibrio, modelo dinamico, transitorios]
    common_mistake: Confundir equilibrio con cambio instantaneo.
    typical_range: { min: 0.001, max: 100000, unit: s, context: Desde procesos rapidos hasta sistemas aislados grandes. }
    sign_behavior: { has_sign: false, meaning: { es: Tiempo caracteristico positivo., en: Positive characteristic time. } }
    zero_behavior: { allowed: false, meaning: { es: Relajacion instantanea idealizada., en: Idealized instantaneous relaxation. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0.001, 100000] }
    interpretation_role: { primary_for: velocidad de acercamiento al equilibrio, secondary_for: validez temporal }
    graph_binding: { channels: [relaxation_curve] }
    pedagogical_notes: { es: "[[tau]] separa equilibrio final de proceso de relajacion.", en: "[[tau]] separates final equilibrium from relaxation process." }
`;export{e as default};
