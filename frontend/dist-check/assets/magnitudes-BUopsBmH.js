const e=`version: 1.0.0
leaf_id: formulacion-de-clausius
magnitudes:
  - id: Q
    symbol: Q
    nombre:
      es: Calor
      en: Heat
    descripcion:
      es: Energia termica transferida entre sistemas debido a una diferencia de temperatura.
      en: Thermal energy transferred between systems due to a temperature difference.
    unidad_si: J
    dimension: [M L² T⁻²]
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in:
      - Transferencia termica
      - Balance energetico
      - Analisis de procesos termodinamicos
    common_mistake: Confundir calor con temperatura; el calor es energia en transito, no una propiedad del sistema.
    typical_range:
      min: 0.001
      max: 1000000000
      unit: J
      context: Desde transferencias microscopicas hasta procesos industriales.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo cuando entra al sistema, negativo cuando sale.
        en: Positive when entering the system, negative when leaving.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay transferencia termica; el sistema esta termicamente aislado o en equilibrio.
        en: No thermal transfer; the system is thermally isolated or in equilibrium.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: [-1000000, 1000000]
    interpretation_role:
      primary_for: Transferencia espontanea de energia termica
      secondary_for: Balance energetico de procesos
    graph_binding:
      channels:
        - heat_flow_arrow
        - heat_transfer_rate
    pedagogical_notes:
      es: El calor siempre fluye espontaneamente de mayor a menor temperatura. Esta direccionalidad es la esencia del enunciado de Clausius.
      en: Heat always flows spontaneously from higher to lower temperature. This directionality is the essence of Clausius's statement.

  - id: T
    symbol: T
    nombre:
      es: Temperatura
      en: Temperature
    descripcion:
      es: Propiedad intensiva que determina la direccion del flujo termico y el equilibrio termico.
      en: Intensive property that determines the direction of thermal flow and thermal equilibrium.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Definicion de direccion de flujo calorifico
      - Equilibrio termico
      - Eficiencia termica
    common_mistake: Asumir que temperatura alta implica mas calor almacenado sin considerar la capacidad calorifica y la masa.
    typical_range:
      min: 0
      max: 100000000
      unit: K
      context: Desde cero absoluto hasta temperaturas estelares.
    sign_behavior:
      has_sign: false
      meaning:
        es: La temperatura absoluta siempre es no negativa.
        en: Absolute temperature is always non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Cero absoluto; limite teorico donde cesa el movimiento termico molecular.
        en: Absolute zero; theoretical limit where molecular thermal motion ceases.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 10000]
    interpretation_role:
      primary_for: Direccion del flujo termico
      secondary_for: Definicion de equilibrio termico
    graph_binding:
      channels:
        - temperature_indicator
        - thermal_gradient
    pedagogical_notes:
      es: La diferencia de temperatura es el motor del flujo calorifico. Sin gradiente termico, no hay transferencia espontanea de calor.
      en: Temperature difference is the driver of heat flow. Without thermal gradient, there is no spontaneous heat transfer.

  - id: DeltaT
    symbol: "\\\\Delta T"
    nombre:
      es: Diferencia de temperatura
      en: Temperature difference
    descripcion:
      es: Gradient termico que determina la magnitud y direccion del flujo de calor entre dos cuerpos.
      en: Thermal gradient that determines the magnitude and direction of heat flow between two bodies.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Ley de enfriamiento de Newton
      - Conduccion termica
      - Flujo calorifico
    common_mistake: Usar Celsius en lugar de Kelvin para calcular diferencias en contextos termodinamicos formales.
    typical_range:
      min: 0.001
      max: 10000
      unit: K
      context: Desde diferencias minimas en sistemas sensibles hasta gradientes extremos.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo cuando T_fuente > T_sumidero; negativo indica flujo inverso.
        en: Positive when T_source > T_sink; negative indicates reverse flow.
    zero_behavior:
      allowed: true
      meaning:
        es: Equilibrio termico; cese del flujo calorifico neto.
        en: Thermal equilibrium; cessation of net heat flow.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: [-5000, 5000]
    interpretation_role:
      primary_for: Magnitud del flujo termico
      secondary_for: Condicion de equilibrio
    graph_binding:
      channels:
        - temperature_difference_indicator
    pedagogical_notes:
      es: Cuando DeltaT = 0, el sistema alcanza el equilibrio termico y cesa el flujo neto de calor.
      en: When DeltaT = 0, the system reaches thermal equilibrium and net heat flow ceases.

  - id: W
    symbol: W
    nombre:
      es: Trabajo
      en: Work
    descripcion:
      es: Energia transferida mediante fuerzas mecanicas o procesos organizados; requiere para revertir flujo termico espontaneo.
      en: Energy transferred through mechanical forces or organized processes; required to reverse spontaneous heat flow.
    unidad_si: J
    dimension: [M L² T⁻²]
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in:
      - Refrigeracion
      - Bombas de calor
      - Procesos ciclicos
    common_mistake: Pensar que el trabajo puede eliminarse; en procesos reales, siempre se requiere trabajo neto para revertir flujo termico.
    typical_range:
      min: 0.01
      max: 1000000000
      unit: J
      context: Desde dispositivos domesticos hasta maquinaria industrial.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo cuando se realiza sobre el sistema; negativo cuando el sistema lo realiza.
        en: Positive when done on the system; negative when done by the system.
    zero_behavior:
      allowed: true
      meaning:
        es: Proceso sin intercambio de trabajo; transferencia puramente termica.
        en: Process with no work exchange; purely thermal transfer.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: [-10000000, 10000000]
    interpretation_role:
      primary_for: Reversion de flujo termico
      secondary_for: Analisis de eficiencia energetica
    graph_binding:
      channels:
        - work_input_indicator
    pedagogical_notes:
      es: El trabajo es el precio energetico para transferir calor de frio a caliente. Sin trabajo, el flujo espontaneo solo va de caliente a frio.
      en: Work is the energy price to transfer heat from cold to hot. Without work, spontaneous flow only goes from hot to cold.

  - id: eta
    symbol: "\\\\eta"
    nombre:
      es: Eficiencia termica
      en: Thermal efficiency
    descripcion:
      es: Fraccion de calor absorbido que se convierte en trabajo util en un ciclo termico.
      en: Fraction of absorbed heat converted into useful work in a thermal cycle.
    unidad_si: ""
    dimension: [1]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Maquinas termicas
      - Analisis de ciclos
      - Limites termodinamicos
    common_mistake: Asumir que la eficiencia puede alcanzar el 100%, violando la segunda ley.
    typical_range:
      min: 0
      max: 0.6
      unit: ""
      context: Motores reales tipicamente entre 20% y 40%.
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud adimensional entre 0 y 1 (o 0% y 100%).
        en: Dimensionless magnitude between 0 and 1 (or 0% and 100%).
    zero_behavior:
      allowed: true
      meaning:
        es: Conversion nula de calor en trabajo; proceso puramente disipativo.
        en: Null conversion of heat into work; purely dissipative process.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 1]
    interpretation_role:
      primary_for: Evaluacion de rendimiento energetico
      secondary_for: Comparacion de tecnologias termicas
    graph_binding:
      channels:
        - efficiency_indicator
    pedagogical_notes:
      es: La eficiencia maxima teorica esta limitada por las temperaturas de fuente y sumidero, segun Carnot.
      en: Maximum theoretical efficiency is limited by source and sink temperatures, according to Carnot.

  - id: DeltaS
    symbol: "\\\\Delta S"
    nombre:
      es: Cambio de entropia
      en: Entropy change
    descripcion:
      es: Variacion de la entropia de un sistema durante un proceso termico.
      en: Variation of system entropy during a thermal process.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Analisis de irreversibilidad
      - Calculo de entropia del universo
      - Segunda ley de la termodinamica
    common_mistake: Confundir cambio de entropia del sistema con cambio de entropia del universo.
    typical_range:
      min: -1000
      max: 1000
      unit: J/K
      context: Desde procesos reversibles (cero) hasta procesos altamente irreversibles.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo cuando el sistema absorbe calor, negativo cuando lo cede.
        en: Positive when system absorbs heat, negative when it releases heat.
    zero_behavior:
      allowed: true
      meaning:
        es: Proceso reversible ideal; sin generacion de entropia.
        en: Ideal reversible process; no entropy generation.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: [-500, 500]
    interpretation_role:
      primary_for: Cuantificacion de irreversibilidad
      secondary_for: Verificacion de segunda ley
    graph_binding:
      channels:
        - entropy_indicator
    pedagogical_notes:
      es: La entropia del universo siempre aumenta en procesos reales. El cambio de entropia del sistema puede ser positivo o negativo.
      en: Universe entropy always increases in real processes. System entropy change can be positive or negative.

  - id: T_A
    symbol: "T_A"
    nombre:
      es: Temperatura del foco caliente
      en: Hot reservoir temperature
    descripcion:
      es: Temperatura absoluta del foco caliente en transferencias termicas.
      en: Absolute temperature of hot reservoir in thermal transfers.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Transferencia de calor
      - Calculo de eficiencia
    common_mistake: Usar Celsius en lugar de Kelvin en formulas.
    typical_range:
      min: 273
      max: 600
      unit: K
      context: Desde temperatura ambiente hasta aplicaciones industriales.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva en Kelvin.
        en: Always positive in Kelvin.
    zero_behavior:
      allowed: true
      meaning:
        es: Limite teorico de temperatura.
        en: Theoretical temperature limit.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [273, 500]
    interpretation_role:
      primary_for: Definir gradiente termico
      secondary_for: Limite de eficiencia
    graph_binding:
      channels: []
    pedagogical_notes:
      es: Temperatura del foco caliente siempre mayor que T_B para flujo espontaneo.
      en: Hot reservoir temperature always greater than T_B for spontaneous flow.

  - id: T_B
    symbol: "T_B"
    nombre:
      es: Temperatura del foco frio
      en: Cold reservoir temperature
    descripcion:
      es: Temperatura absoluta del foco frio en transferencias termicas.
      en: Absolute temperature of cold reservoir in thermal transfers.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Transferencia de calor
      - Refrigeracion
    common_mistake: Confundir con temperatura ambiente en aplicaciones de refrigeracion.
    typical_range:
      min: 200
      max: 300
      unit: K
      context: Desde criogenia hasta temperatura ambiente.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva en Kelvin.
        en: Always positive in Kelvin.
    zero_behavior:
      allowed: true
      meaning:
        es: Limite teorico de temperatura.
        en: Theoretical temperature limit.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [250, 300]
    interpretation_role:
      primary_for: Definir gradiente termico
      secondary_for: Limite inferior de eficiencia
    graph_binding:
      channels: []
    pedagogical_notes:
      es: En refrigeracion, T_B es la temperatura que se desea mantener baja.
      en: In refrigeration, T_B is the temperature to be kept low.

  - id: W_min
    symbol: "W_{\\\\text{min}}"
    nombre:
      es: Trabajo minimo
      en: Minimum work
    descripcion:
      es: Trabajo minimo teorico necesario para revertir el flujo termico espontaneo.
      en: Minimum theoretical work required to reverse spontaneous heat flow.
    unidad_si: J
    dimension: [M L² T⁻²]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Refrigeracion ideal
      - Limites de eficiencia
    common_mistake: Pensar que W_min puede ser cero sin violar Clausius.
    typical_range:
      min: 0
      max: 10000
      unit: J
      context: Desde refrigeracion domestica hasta industrial.
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud siempre no negativa.
        en: Magnitude always non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Solo para DeltaT = 0 (equilibrio).
        en: Only for DeltaT = 0 (equilibrium).
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 5000]
    interpretation_role:
      primary_for: Limite teorico de refrigeracion
      secondary_for: Evaluacion de eficiencia
    graph_binding:
      channels: []
    pedagogical_notes:
      es: W_min es el limite de Carnot; dispositivos reales requieren mas trabajo.
      en: W_min is the Carnot limit; real devices require more work.

  - id: COP_R
    symbol: "\\\\text{COP}_R"
    nombre:
      es: Coeficiente de eficiencia de refrigeracion
      en: Refrigeration coefficient of performance
    descripcion:
      es: Relacion entre calor extraido del foco frio y trabajo consumido.
      en: Ratio between heat extracted from cold reservoir and work consumed.
    unidad_si: ""
    dimension: [1]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Evaluacion de refrigeradores
      - Comparacion de eficiencias
    common_mistake: Interpretar COP como porcentaje en lugar de ratio.
    typical_range:
      min: 1
      max: 10
      unit: ""
      context: Desde equipos poco eficientes hasta sistemas optimizados.
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud adimensional positiva.
        en: Positive dimensionless magnitude.
    zero_behavior:
      allowed: false
      meaning:
        es: COP = 0 imposible fisicamente.
        en: COP = 0 physically impossible.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [1, 15]
    interpretation_role:
      primary_for: Medir eficiencia de refrigeracion
      secondary_for: Comparar tecnologias
    graph_binding:
      channels:
        - efficiency_indicator
    pedagogical_notes:
      es: COP_R mayor que 1 indica que se extrae mas calor que trabajo consumido.
      en: COP_R greater than 1 indicates more heat extracted than work consumed.

  - id: C_A
    symbol: "C_A"
    nombre:
      es: Capacidad calorifica del foco caliente
      en: Hot reservoir heat capacity
    descripcion:
      es: Capacidad calorifica del foco caliente en modelo de focos finitos.
      en: Heat capacity of hot reservoir in finite reservoirs model.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: parameter
    physical_role: parameter
    used_in:
      - Modelo de focos finitos
    common_mistake: Confundir con capacidad calorifica especifica.
    typical_range:
      min: 1000
      max: 1000000
      unit: J/K
      context: Desde pequeños sistemas hasta reservorios masivos.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Capacidad nula no fisica.
        en: Zero capacity unphysical.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [1000, 100000]
    interpretation_role:
      primary_for: Modelo extendido
      secondary_for: Ecuaciones transitorias
    graph_binding:
      channels: []
    pedagogical_notes:
      es: En modelo ideal C_A es infinita; en modelo extendito es finita.
      en: In ideal model C_A is infinite; in extended model it is finite.

  - id: C_B
    symbol: "C_B"
    nombre:
      es: Capacidad calorifica del foco frio
      en: Cold reservoir heat capacity
    descripcion:
      es: Capacidad calorifica del foco frio en modelo de focos finitos.
      en: Heat capacity of cold reservoir in finite reservoirs model.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: parameter
    physical_role: parameter
    used_in:
      - Modelo de focos finitos
    common_mistake: Confundir con capacidad calorifica especifica.
    typical_range:
      min: 1000
      max: 1000000
      unit: J/K
      context: Desde pequeños sistemas hasta reservorios masivos.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Capacidad nula no fisica.
        en: Zero capacity unphysical.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [1000, 100000]
    interpretation_role:
      primary_for: Modelo extendido
      secondary_for: Ecuaciones transitorias
    graph_binding:
      channels: []
    pedagogical_notes:
      es: En modelo ideal C_B es infinita; en modelo extendito es finita.
      en: In ideal model C_B is infinite; in extended model it is finite.

  - id: DeltaS_A
    symbol: "\\\\Delta S_A"
    nombre:
      es: Cambio de entropia del foco caliente
      en: Hot reservoir entropy change
    descripcion:
      es: Variacion de entropia del foco caliente durante transferencia termica.
      en: Entropy change of hot reservoir during thermal transfer.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Balance de entropia
    common_mistake: Confundir signo (disminuye al ceder calor).
    typical_range:
      min: -1000
      max: 0
      unit: J/K
      context: Negativo cuando cede calor.
    sign_behavior:
      has_sign: true
      meaning:
        es: Negativo al ceder calor, positivo al absorber.
        en: Negative when releasing heat, positive when absorbing.
    zero_behavior:
      allowed: true
      meaning:
        es: Sin transferencia de calor.
        en: No heat transfer.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: [-500, 0]
    interpretation_role:
      primary_for: Balance entropico
      secondary_for: Calculo de entropia del universo
    graph_binding:
      channels: []
    pedagogical_notes:
      es: Foco caliente pierde entropia cuando cede calor (Q/T_A negativo).
      en: Hot reservoir loses entropy when releasing heat (negative Q/T_A).

  - id: DeltaS_B
    symbol: "\\\\Delta S_B"
    nombre:
      es: Cambio de entropia del foco frio
      en: Cold reservoir entropy change
    descripcion:
      es: Variacion de entropia del foco frio durante transferencia termica.
      en: Entropy change of cold reservoir during thermal transfer.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Balance de entropia
    common_mistake: Confundir signo (aumenta al absorber calor).
    typical_range:
      min: 0
      max: 1000
      unit: J/K
      context: Positivo cuando absorbe calor.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo al absorber calor, negativo al ceder.
        en: Positive when absorbing heat, negative when releasing.
    zero_behavior:
      allowed: true
      meaning:
        es: Sin transferencia de calor.
        en: No heat transfer.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: [0, 500]
    interpretation_role:
      primary_for: Balance entropico
      secondary_for: Calculo de entropia del universo
    graph_binding:
      channels: []
    pedagogical_notes:
      es: Foco frio gana entropia cuando absorbe calor (Q/T_B positivo).
      en: Cold reservoir gains entropy when absorbing heat (positive Q/T_B).

  - id: P_termica
    symbol: "P_{\\\\text{termica}}"
    nombre:
      es: Potencia termica
      en: Thermal power
    descripcion:
      es: Tasa de transferencia de calor por unidad de tiempo.
      en: Rate of heat transfer per unit time.
    unidad_si: W
    dimension: [M L² T⁻³]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Analisis de sistemas de refrigeracion
    common_mistake: Confundir con energia termica total.
    typical_range:
      min: 1
      max: 100000
      unit: W
      context: Desde dispositivos electronicos hasta sistemas industriales.
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud siempre no negativa.
        en: Magnitude always non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Sin flujo de calor.
        en: No heat flow.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [10, 10000]
    interpretation_role:
      primary_for: Evaluacion de carga termica
      secondary_for: Dimensionamiento de equipos
    graph_binding:
      channels: []
    pedagogical_notes:
      es: P_termica = Q/t; determina el tamano necesario del equipo de refrigeracion.
      en: P_termica = Q/t; determines required size of refrigeration equipment.

  - id: T_max
    symbol: "T_{\\\\text{max}}"
    nombre:
      es: Temperatura maxima admisible
      en: Maximum admissible temperature
    descripcion:
      es: Limite superior de temperatura para operacion segura de componentes.
      en: Upper temperature limit for safe component operation.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: parameter
    physical_role: parameter
    used_in:
      - Diseno de sistemas de enfriamiento
    common_mistake: No considerar margen de seguridad.
    typical_range:
      min: 300
      max: 500
      unit: K
      context: Limites de componentes electronicos y materiales.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Temperatura maxima debe ser positiva.
        en: Maximum temperature must be positive.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [350, 400]
    interpretation_role:
      primary_for: Criterio de diseno termico
      secondary_for: Seguridad de equipos
    graph_binding:
      channels: []
    pedagogical_notes:
      es: T_max define el requerimiento de refrigeracion para proteger componentes.
      en: T_max defines cooling requirement to protect components.

  - id: DeltaS_universo
    symbol: "\\\\Delta S_{\\\\text{universo}}"
    nombre:
      es: Cambio de entropia del universo
      en: Universe entropy change
    descripcion:
      es: Suma de cambios de entropia de sistema mas entorno; siempre no negativa.
      en: Sum of entropy changes of system plus surroundings; always non-negative.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Verificacion de segunda ley
    common_mistake: Pensar que puede ser negativo en procesos reales.
    typical_range:
      min: 0
      max: 10000
      unit: J/K
      context: Generacion de entropia por irreversibilidades.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre mayor o igual a cero.
        en: Always greater than or equal to zero.
    zero_behavior:
      allowed: true
      meaning:
        es: Proceso reversible ideal.
        en: Ideal reversible process.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 1000]
    interpretation_role:
      primary_for: Verificar segunda ley
      secondary_for: Cuantificar irreversibilidad total
    graph_binding:
      channels: []
    pedagogical_notes:
      es: Segunda ley exige DeltaS_universo >= 0; igual a cero solo en procesos reversibles.
      en: Second law requires DeltaS_universe >= 0; equal to zero only in reversible processes.

  - id: U
    symbol: "U"
    nombre:
      es: Energia interna
      en: Internal energy
    descripcion:
      es: Energia total contenida en un sistema termodinamico.
      en: Total energy contained in a thermodynamic system.
    unidad_si: J
    dimension: [M L² T⁻²]
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in:
      - Primera ley de la termodinamica
      - Balance energetico
    common_mistake: Confundir con calor o trabajo.
    typical_range:
      min: 0
      max: 1000000000
      unit: J
      context: Desde sistemas microscopicos hasta reservorios termicos.
    sign_behavior:
      has_sign: false
      meaning:
        es: Magnitud extensiva siempre no negativa.
        en: Extensive magnitude always non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Cero absoluto de energia (referencia arbitraria).
        en: Absolute zero of energy (arbitrary reference).
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 100000000]
    interpretation_role:
      primary_for: Balance energetico
      secondary_for: Capacidad de realizar trabajo
    graph_binding:
      channels: []
    pedagogical_notes:
      es: U es funcion de estado; sus cambios dependen solo de estados inicial y final.
      en: U is state function; its changes depend only on initial and final states.

  - id: T_K
    symbol: "T_K"
    nombre:
      es: Temperatura en Kelvin
      en: Temperature in Kelvin
    descripcion:
      es: Temperatura medida en escala absoluta Kelvin.
      en: Temperature measured on absolute Kelvin scale.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Formulas termodinamicas
    common_mistake: No convertir de Celsius a Kelvin.
    typical_range:
      min: 0
      max: 10000
      unit: K
      context: Escala absoluta de temperatura.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre no negativa.
        en: Always non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Cero absoluto.
        en: Absolute zero.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 1000]
    interpretation_role:
      primary_for: Calculos termodinamicos
      secondary_for: Conversion de escalas
    graph_binding:
      channels: []
    pedagogical_notes:
      es: T_K = T_C + 273.15; escala requerida para formulas termodinamicas.
      en: T_K = T_C + 273.15; scale required for thermodynamic formulas.

  - id: T_C
    symbol: "T_C"
    nombre:
      es: Temperatura en Celsius
      en: Temperature in Celsius
    descripcion:
      es: Temperatura medida en escala Celsius.
      en: Temperature measured on Celsius scale.
    unidad_si: "°C"
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Mediciones cotidianas
    common_mistake: Usar directamente en formulas termodinamicas sin conversion.
    typical_range:
      min: -273.15
      max: 1000
      unit: "°C"
      context: Escala centigrada para uso practico.
    sign_behavior:
      has_sign: true
      meaning:
        es: Puede ser negativa bajo cero.
        en: Can be negative below zero.
    zero_behavior:
      allowed: true
      meaning:
        es: Punto de congelacion del agua.
        en: Water freezing point.
    value_nature:
      kind: scalar
      nonnegative_only: false
      expected_interval: [-200, 500]
    interpretation_role:
      primary_for: Medicion practica
      secondary_for: Conversion a Kelvin
    graph_binding:
      channels: []
    pedagogical_notes:
      es: T_C no debe usarse directamente en razones T_A/T_B; convertir a Kelvin primero.
      en: T_C should not be used directly in ratios T_A/T_B; convert to Kelvin first.

  - id: C
    symbol: "C"
    nombre:
      es: Capacidad calorifica
      en: Heat capacity
    descripcion:
      es: Capacidad calorifica generica de un sistema o reservorio.
      en: Generic heat capacity of a system or reservoir.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: parameter
    physical_role: parameter
    used_in:
      - Modelos termicos
    common_mistake: Confundir con capacidad calorifica especifica.
    typical_range:
      min: 1
      max: 10000000
      unit: J/K
      context: Desde objetos pequeños hasta reservorios masivos.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Capacidad nula implica sistema sin capacidad termica.
        en: Zero capacity implies system with no thermal capacity.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [10, 1000000]
    interpretation_role:
      primary_for: Modelos de equilibrio termico
      secondary_for: Calculos de evolucion temporal
    graph_binding:
      channels: []
    pedagogical_notes:
      es: C = Q/DeltaT; relaciona calor transferido con cambio de temperatura.
      en: C = Q/DeltaT; relates transferred heat to temperature change.

  - id: L
    symbol: "L"
    nombre:
      es: Dimension caracteristica
      en: Characteristic length
    descripcion:
      es: Longitud representativa del sistema para analisis de escala.
      en: Representative length of system for scale analysis.
    unidad_si: m
    dimension: [L]
    is_vector: false
    components: null
    category: parameter
    physical_role: parameter
    used_in:
      - Analisis dimensional
      - Transferencia de calor
    common_mistake: Usar dimension incorrecta para geometria compleja.
    typical_range:
      min: 0.001
      max: 10
      unit: m
      context: Desde microescala hasta sistemas macroscopicos.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Dimension nula no fisica.
        en: Zero length unphysical.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0.01, 1]
    interpretation_role:
      primary_for: Analisis de escala
      secondary_for: Tiempo caracteristico de transferencia
    graph_binding:
      channels: []
    pedagogical_notes:
      es: L aparece en numero de Biot y tiempo de difusion termica.
      en: L appears in Biot number and thermal diffusion time.

  - id: T_0
    symbol: "T_0"
    nombre:
      es: Temperatura inicial
      en: Initial temperature
    descripcion:
      es: Temperatura del sistema en el estado inicial del proceso.
      en: System temperature at initial state of process.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Evolucion temporal de temperatura
    common_mistake: Confundir con temperatura ambiente.
    typical_range:
      min: 0
      max: 1000
      unit: K
      context: Estado inicial arbitrario.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva en Kelvin.
        en: Always positive in Kelvin.
    zero_behavior:
      allowed: true
      meaning:
        es: Estado inicial a cero absoluto teorico.
        en: Initial state at theoretical absolute zero.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [200, 400]
    interpretation_role:
      primary_for: Condicion inicial
      secondary_for: Evolucion temporal
    graph_binding:
      channels: []
    pedagogical_notes:
      es: T_0 es condicion de contorno para ecuaciones diferenciales termicas.
      en: T_0 is boundary condition for thermal differential equations.

  - id: T_A0
    symbol: "T_{A0}"
    nombre:
      es: Temperatura inicial del foco caliente
      en: Initial hot reservoir temperature
    descripcion:
      es: Temperatura inicial del foco caliente antes del proceso.
      en: Initial temperature of hot reservoir before process.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Modelo de focos finitos
    common_mistake: Confundir con temperatura final.
    typical_range:
      min: 273
      max: 1000
      unit: K
      context: Estado inicial del foco caliente.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Foco a cero absoluto no transferiria calor.
        en: Reservoir at absolute zero would not transfer heat.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [300, 500]
    interpretation_role:
      primary_for: Condicion inicial foco caliente
      secondary_for: Evolucion temporal del sistema
    graph_binding:
      channels: []
    pedagogical_notes:
      es: T_A0 > T_B0 para que exista flujo espontaneo inicial.
      en: T_A0 > T_B0 for initial spontaneous flow to exist.

  - id: T_B0
    symbol: "T_{B0}"
    nombre:
      es: Temperatura inicial del foco frio
      en: Initial cold reservoir temperature
    descripcion:
      es: Temperatura inicial del foco frio antes del proceso.
      en: Initial temperature of cold reservoir before process.
    unidad_si: K
    dimension: [Θ]
    is_vector: false
    components: null
    category: state
    physical_role: parameter
    used_in:
      - Modelo de focos finitos
    common_mistake: Confundir con temperatura final.
    typical_range:
      min: 0
      max: 500
      unit: K
      context: Estado inicial del foco frio.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva.
        en: Always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Foco a cero absoluto requiere analisis cuantico.
        en: Reservoir at absolute zero requires quantum analysis.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [250, 300]
    interpretation_role:
      primary_for: Condicion inicial foco frio
      secondary_for: Evolucion temporal del sistema
    graph_binding:
      channels: []
    pedagogical_notes:
      es: T_B0 < T_A0 para flujo espontaneo de calor inicial.
      en: T_B0 < T_A0 for initial spontaneous heat flow.

  - id: DeltaS_generada
    symbol: "\\\\Delta S_{\\\\text{generada}}"
    nombre:
      es: Entropia generada
      en: Generated entropy
    descripcion:
      es: Entropia generada por irreversibilidades en el proceso.
      en: Entropy generated by irreversibilities in the process.
    unidad_si: J/K
    dimension: [M L² T⁻² Θ⁻¹]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Analisis de irreversibilidad
    common_mistake: Confundir con cambio de entropia del sistema.
    typical_range:
      min: 0
      max: 1000
      unit: J/K
      context: Siempre no negativa por segunda ley.
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre mayor o igual a cero.
        en: Always greater than or equal to zero.
    zero_behavior:
      allowed: true
      meaning:
        es: Proceso reversible sin irreversibilidades.
        en: Reversible process without irreversibilities.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 100]
    interpretation_role:
      primary_for: Cuantificar irreversibilidad
      secondary_for: Perdidas exergeticas
    graph_binding:
      channels: []
    pedagogical_notes:
      es: DeltaS_generada = DeltaS_universo en procesos adiabaticos.
      en: DeltaS_generated = DeltaS_universe in adiabatic processes.

  - id: eta
    symbol: "\\\\eta"
    nombre:
      es: Eficiencia
      en: Efficiency
    descripcion:
      es: Rendimiento general de conversion de energia o proceso termico.
      en: General performance of energy conversion or thermal process.
    unidad_si: ""
    dimension: [1]
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - Evaluacion de rendimiento
    common_mistake: Confundir eficiencia con COP.
    typical_range:
      min: 0
      max: 1
      unit: ""
      context: Desde 0% hasta 100% teoricamente.
    sign_behavior:
      has_sign: false
      meaning:
        es: Adimensional entre 0 y 1.
        en: Dimensionless between 0 and 1.
    zero_behavior:
      allowed: true
      meaning:
        es: Conversion nula de energia util.
        en: Null useful energy conversion.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: [0, 1]
    interpretation_role:
      primary_for: Evaluar rendimiento energetico
      secondary_for: Comparar tecnologias
    graph_binding:
      channels:
        - efficiency_indicator
    pedagogical_notes:
      es: "eta diferencia de COP: eta <= 1 siempre, COP puede ser > 1."
      en: "eta different from COP: eta <= 1 always, COP can be > 1."
`;export{e as default};
