const e=`version: 1.0.0
leaf_id: formulacion-de-kelvin-planck
magnitudes:
  - id: Q_H
    symbol: Q_H
    nombre: { es: Calor absorbido del foco caliente, en: Heat absorbed from hot reservoir }
    descripcion: { es: Energia termica que entra en la maquina desde el foco caliente durante un ciclo., en: Thermal energy entering the engine from the hot reservoir during one cycle. }
    unidad_si: J
    dimension: "[M L² T⁻²]"
    is_vector: false
    components: null
    category: transfer
    physical_role: core_physical_quantity
    used_in: [maquinas termicas, balance energetico, eficiencia]
    common_mistake: Confundir el calor absorbido con el trabajo util producido por la maquina.
    typical_range: { min: 1, max: 1000000000, unit: J, context: Desde ciclos de laboratorio hasta centrales termicas. }
    sign_behavior: { has_sign: true, meaning: { es: Positivo cuando entra desde el foco caliente., en: Positive when entering from the hot reservoir. } }
    zero_behavior: { allowed: true, meaning: { es: Sin calor de entrada no hay ciclo motor., en: Without heat input there is no engine cycle. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0, 1000000000] }
    interpretation_role: { primary_for: Energia tomada del foco caliente, secondary_for: Normalizacion de eficiencia }
    graph_binding: { channels: [heat_input, x_scale] }
    pedagogical_notes:
      es: "[[Q_H]] es el recurso termico disponible, no el trabajo final."
      en: "[[Q_H]] is the available thermal resource, not the final work."

  - id: Q_C
    symbol: Q_C
    nombre: { es: Calor rechazado al foco frio, en: Heat rejected to cold reservoir }
    descripcion: { es: Energia termica que la maquina debe entregar al foco frio para cerrar el ciclo., en: Thermal energy the engine must deliver to the cold reservoir to close the cycle. }
    unidad_si: J
    dimension: "[M L² T⁻²]"
    is_vector: false
    components: null
    category: transfer
    physical_role: core_physical_quantity
    used_in: [balance de ciclo, irreversibilidad, eficiencia]
    common_mistake: Tratar [[Q_C]] como perdida eliminable sin cambiar de modelo fisico.
    typical_range: { min: 0, max: 1000000000, unit: J, context: Depende de temperatura de focos y diseno del ciclo. }
    sign_behavior: { has_sign: true, meaning: { es: Positivo como magnitud rechazada al foco frio., en: Positive as magnitude rejected to the cold reservoir. } }
    zero_behavior: { allowed: false, meaning: { es: En una maquina ciclica real entre focos finitos no puede anularse., en: In a real cyclic engine between finite reservoirs it cannot vanish. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0, 1000000000] }
    interpretation_role: { primary_for: Rechazo termico obligatorio, secondary_for: Limite de Kelvin-Planck }
    graph_binding: { channels: [heat_rejection] }
    pedagogical_notes:
      es: "El rechazo [[Q_C]] es la senal visible de que la segunda ley actua."
      en: "The rejection [[Q_C]] is the visible sign that the second law acts."

  - id: W
    symbol: W
    nombre: { es: Trabajo util neto, en: Net useful work }
    descripcion: { es: Energia organizada que la maquina entrega al exterior por ciclo., en: Organized energy the engine delivers to the exterior per cycle. }
    unidad_si: J
    dimension: "[M L² T⁻²]"
    is_vector: false
    components: null
    category: transfer
    physical_role: core_physical_quantity
    used_in: [potencia, rendimiento, balances]
    common_mistake: Suponer que [[W]] puede igualar a [[Q_H]] en un ciclo con un solo foco.
    typical_range: { min: 0, max: 1000000000, unit: J, context: Fraccion del calor absorbido por ciclo. }
    sign_behavior: { has_sign: true, meaning: { es: Positivo cuando sale como trabajo util., en: Positive when leaving as useful work. } }
    zero_behavior: { allowed: true, meaning: { es: Ciclo sin produccion neta de trabajo., en: Cycle without net work production. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0, 1000000000] }
    interpretation_role: { primary_for: Salida mecanica del motor, secondary_for: Comparacion con calor de entrada }
    graph_binding: { channels: [work_output, y_value] }
    pedagogical_notes:
      es: "[[W]] es menor que [[Q_H]] porque una parte debe rechazarse como [[Q_C]]."
      en: "[[W]] is smaller than [[Q_H]] because part must be rejected as [[Q_C]]."

  - id: eta
    symbol: eta
    nombre: { es: Eficiencia termica, en: Thermal efficiency }
    descripcion: { es: Fraccion del calor absorbido que se convierte en trabajo util neto., en: Fraction of absorbed heat converted into net useful work. }
    unidad_si: "1"
    dimension: "[1]"
    is_vector: false
    components: null
    category: derived
    physical_role: core_physical_quantity
    used_in: [maquinas termicas, comparacion de ciclos, limite de segunda ley]
    common_mistake: Leer [[eta]] como porcentaje sin convertir la fraccion o permitir valores mayores que uno.
    typical_range: { min: 0, max: 1, unit: "1", context: Entre cero y el limite de Carnot. }
    sign_behavior: { has_sign: false, meaning: { es: Una eficiencia de motor es no negativa., en: Engine efficiency is non-negative. } }
    zero_behavior: { allowed: true, meaning: { es: No se obtiene trabajo util., en: No useful work is obtained. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0, 1] }
    interpretation_role: { primary_for: Rendimiento del motor, secondary_for: Diagnostico de imposibilidad }
    graph_binding: { channels: [efficiency_curve, star] }
    pedagogical_notes:
      es: "[[eta]] nunca llega a uno para una maquina ciclica que opera entre dos focos finitos."
      en: "[[eta]] never reaches one for a cyclic engine operating between two finite reservoirs."

  - id: eta_carnot
    symbol: eta_C
    nombre: { es: Eficiencia de Carnot, en: Carnot efficiency }
    descripcion: { es: Limite reversible maximo para una maquina entre dos focos termicos., en: Maximum reversible limit for an engine between two thermal reservoirs. }
    unidad_si: "1"
    dimension: "[1]"
    is_vector: false
    components: null
    category: derived
    physical_role: limit
    used_in: [limite teorico, comparacion de maquinas, segunda ley]
    common_mistake: Creer que cualquier maquina puede superar [[eta_carnot]] con mejor ingenieria.
    typical_range: { min: 0, max: 1, unit: "1", context: Depende solo de temperaturas absolutas. }
    sign_behavior: { has_sign: false, meaning: { es: Es un limite no negativo., en: It is a non-negative limit. } }
    zero_behavior: { allowed: true, meaning: { es: Focos a la misma temperatura no permiten motor termico., en: Equal-temperature reservoirs do not allow a heat engine. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0, 1] }
    interpretation_role: { primary_for: Cota superior de eficiencia, secondary_for: Comprobacion de plausibilidad }
    graph_binding: { channels: [limit_curve] }
    pedagogical_notes:
      es: "[[eta_carnot]] no es una receta de diseno, sino una frontera fisica."
      en: "[[eta_carnot]] is not a design recipe but a physical boundary."

  - id: T_H
    symbol: T_H
    nombre: { es: Temperatura del foco caliente, en: Hot reservoir temperature }
    descripcion: { es: Temperatura absoluta del foco que suministra calor al motor., en: Absolute temperature of the reservoir supplying heat to the engine. }
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in: [eficiencia de Carnot, gradiente termico, foco caliente]
    common_mistake: Usar Celsius en razones de temperatura.
    typical_range: { min: 250, max: 3000, unit: K, context: Motores reales y focos termicos de laboratorio. }
    sign_behavior: { has_sign: false, meaning: { es: Temperatura absoluta positiva., en: Positive absolute temperature. } }
    zero_behavior: { allowed: false, meaning: { es: Un foco caliente de cero kelvin no opera como fuente., en: A zero-kelvin hot reservoir cannot operate as a source. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [1, 10000] }
    interpretation_role: { primary_for: Fuente termica del motor, secondary_for: Cota de Carnot }
    graph_binding: { channels: [hot_temperature] }
    pedagogical_notes:
      es: "A mayor [[T_H]], mayor potencial maximo de conversion."
      en: "Higher [[T_H]] increases maximum conversion potential."

  - id: T_C
    symbol: T_C
    nombre: { es: Temperatura del foco frio, en: Cold reservoir temperature }
    descripcion: { es: Temperatura absoluta del foco que recibe calor rechazado., en: Absolute temperature of the reservoir receiving rejected heat. }
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in: [eficiencia de Carnot, rechazo de calor, sumidero]
    common_mistake: Ignorar que bajar [[T_C]] aumenta el limite de eficiencia pero puede ser costoso.
    typical_range: { min: 1, max: 1000, unit: K, context: Ambiente, condensadores y sumideros controlados. }
    sign_behavior: { has_sign: false, meaning: { es: Temperatura absoluta positiva., en: Positive absolute temperature. } }
    zero_behavior: { allowed: false, meaning: { es: Cero absoluto es inalcanzable en operacion real., en: Absolute zero is unattainable in real operation. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [1, 10000] }
    interpretation_role: { primary_for: Sumidero termico, secondary_for: Rechazo obligatorio }
    graph_binding: { channels: [cold_temperature, x_value] }
    pedagogical_notes:
      es: "[[T_C]] representa el lugar donde la maquina paga el coste de la segunda ley."
      en: "[[T_C]] represents where the engine pays the second-law cost."

  - id: DeltaS_universo
    symbol: DeltaS_universo
    nombre: { es: Cambio de entropia del universo, en: Entropy change of the universe }
    descripcion: { es: Balance total de entropia del motor y sus focos durante el ciclo completo., en: Total entropy balance of the engine and reservoirs during the complete cycle. }
    unidad_si: J/K
    dimension: "[M L² T⁻² Theta⁻¹]"
    is_vector: false
    components: null
    category: derived
    physical_role: diagnostic
    used_in: [irreversibilidad, segunda ley, criterio de imposibilidad]
    common_mistake: Mirar solo la energia y olvidar la entropia generada.
    typical_range: { min: 0, max: 1000000, unit: J/K, context: Cero para reversible ideal; positivo para ciclos reales. }
    sign_behavior: { has_sign: true, meaning: { es: Negativo indicaria violacion de segunda ley., en: Negative would indicate second-law violation. } }
    zero_behavior: { allowed: true, meaning: { es: Limite reversible ideal., en: Ideal reversible limit. } }
    value_nature: { kind: scalar, nonnegative_only: true, expected_interval: [0, 1000000] }
    interpretation_role: { primary_for: Diagnostico de irreversibilidad, secondary_for: Validez del ciclo }
    graph_binding: { channels: [entropy_warning] }
    pedagogical_notes:
      es: "[[DeltaS_universo]] cierra la lectura causal: eficiencia perfecta implicaria entropia imposible."
      en: "[[DeltaS_universo]] closes the causal reading: perfect efficiency would imply impossible entropy."

  - id: ciclo
    symbol: ciclo
    nombre: { es: Ciclo termodinamico, en: Thermodynamic cycle }
    descripcion: { es: Transformacion cerrada que devuelve la sustancia de trabajo a su estado inicial., en: Closed transformation returning the working substance to its initial state. }
    unidad_si: "1"
    dimension: "[1]"
    is_vector: false
    components: null
    category: process
    physical_role: condition
    used_in: [maquinas termicas, balances ciclicos, enunciado Kelvin-Planck]
    common_mistake: Aplicar Kelvin-Planck a un proceso no ciclico sin revisar energia interna.
    typical_range: { min: 1, max: 1, unit: ciclo, context: Una vuelta completa del dispositivo. }
    sign_behavior: { has_sign: false, meaning: { es: Es una condicion de proceso, no una magnitud con signo., en: It is a process condition, not a signed magnitude. } }
    zero_behavior: { allowed: false, meaning: { es: Sin ciclo no hay maquina termica ciclica., en: Without a cycle there is no cyclic heat engine. } }
    value_nature: { kind: categorical, nonnegative_only: true, expected_interval: [1, 1] }
    interpretation_role: { primary_for: Condicion del enunciado, secondary_for: Separar motores de procesos abiertos }
    graph_binding: { channels: [cycle_indicator] }
    pedagogical_notes:
      es: "La palabra [[ciclo]] es clave: el sistema no puede esconder energia interna acumulada al final."
      en: "The word [[ciclo]] is key: the system cannot hide accumulated internal energy at the end."
`;export{e as default};
