const e=`magnitudes:

  - id: DeltaS_univ
    symbol: "\\\\Delta S_{\\\\mathrm{univ}}"

    nombre:
      es: Variacion de entropia del universo
      en: Universe entropy change

    descripcion:
      es: "Suma de la variacion de entropia del sistema y del entorno. En un proceso reversible, vale exactamente cero."
      en: "Sum of the entropy change of the system and surroundings. In a reversible process, it equals exactly zero."

    unidad_si: "J/K"
    dimension: "[M L^2 T^-2 Θ^-1]"

    is_vector: false
    components: null

    category: derived
    physical_role: core_physical_quantity

    used_in:
      - condicion_reversibilidad
      - eficiencia_carnot

    common_mistake: "Creer que DeltaS_univ = 0 es habitual. En realidad, solo ocurre en el limite reversible ideal. Cualquier proceso real tiene DeltaS_univ > 0."

    typical_range: "En procesos reversibles: exactamente 0 J/K. En procesos reales: de 0.01 J/K a miles de J/K."

    sign_behavior:
      has_sign: true
      meaning:
        es: "DeltaS_univ = 0 indica proceso reversible. DeltaS_univ > 0 indica proceso irreversible. DeltaS_univ < 0 es imposible."
        en: "DeltaS_univ = 0 indicates reversible process. DeltaS_univ > 0 indicates irreversible process. DeltaS_univ < 0 is impossible."

    zero_behavior:
      allowed: true
      meaning:
        es: "DeltaS_univ = 0 es la condicion que define un proceso reversible: no se genera entropia neta en el universo."
        en: "DeltaS_univ = 0 is the condition defining a reversible process: no net entropy is generated in the universe."

    value_nature:
      kind: scalar_signed
      nonnegative_only: true
      expected_interval: "[0, 10000] J/K"

    interpretation_role:
      primary_for:
        - condicion_reversibilidad
      secondary_for:
        - eficiencia_carnot

    graph_binding:
      channels:
        - axis_y

    pedagogical_notes: "Es la magnitud central del leaf. El alumno debe comprender que DeltaS_univ = 0 es el criterio cuantitativo de reversibilidad y que define el limite de eficiencia maxima."

  - id: DeltaS_sis
    symbol: "\\\\Delta S_{\\\\mathrm{sis}}"

    nombre:
      es: Variacion de entropia del sistema
      en: System entropy change

    descripcion:
      es: "Cambio de entropia del sistema. En un proceso reversible, es exactamente opuesto al del entorno."
      en: "Entropy change of the system. In a reversible process, it is exactly opposite to that of the surroundings."

    unidad_si: "J/K"
    dimension: "[M L^2 T^-2 Θ^-1]"

    is_vector: false
    components: null

    category: derived
    physical_role: core_physical_quantity

    used_in:
      - condicion_reversibilidad

    common_mistake: "Confundir DeltaS_sis = 0 con la condicion de reversibilidad. La condicion es DeltaS_univ = 0, no DeltaS_sis = 0. El sistema puede cambiar su entropia en un proceso reversible."

    typical_range: "Puede ser positivo, negativo o cero. Rango tipico: [-1000, 1000] J/K."

    sign_behavior:
      has_sign: true
      meaning:
        es: "DeltaS_sis > 0 indica que el sistema gana entropia. DeltaS_sis < 0 indica que la pierde. Ambos son posibles en procesos reversibles."
        en: "DeltaS_sis > 0 indicates the system gains entropy. DeltaS_sis < 0 indicates it loses it. Both are possible in reversible processes."

    zero_behavior:
      allowed: true
      meaning:
        es: "DeltaS_sis = 0 corresponde a un proceso isentropico del sistema (adiabatico reversible)."
        en: "DeltaS_sis = 0 corresponds to an isentropic system process (reversible adiabatic)."

    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-5000, 5000] J/K"

    interpretation_role:
      primary_for: []
      secondary_for:
        - condicion_reversibilidad

    graph_binding:
      channels: []

    pedagogical_notes: "El sistema puede ganar o perder entropia en un proceso reversible. Lo que importa es que el entorno compense exactamente."

  - id: DeltaS_ent
    symbol: "\\\\Delta S_{\\\\mathrm{ent}}"

    nombre:
      es: Variacion de entropia del entorno
      en: Surroundings entropy change

    descripcion:
      es: "Cambio de entropia del entorno. En un proceso reversible, es exactamente opuesto al del sistema: DeltaS_ent = -DeltaS_sis."
      en: "Entropy change of the surroundings. In a reversible process, it is exactly opposite to the system: DeltaS_ent = -DeltaS_sis."

    unidad_si: "J/K"
    dimension: "[M L^2 T^-2 Θ^-1]"

    is_vector: false
    components: null

    category: derived
    physical_role: core_physical_quantity

    used_in:
      - condicion_reversibilidad

    common_mistake: "Olvidar el signo negativo: DeltaS_ent = -Q_rev_sis / T_ent. Si el sistema absorbe calor, el entorno pierde entropia."

    typical_range: "Puede ser positivo o negativo, opuesto al del sistema. Rango: [-5000, 5000] J/K."

    sign_behavior:
      has_sign: true
      meaning:
        es: "DeltaS_ent > 0 si el entorno gana entropia (el sistema le cede calor). DeltaS_ent < 0 si el entorno pierde entropia (cede calor al sistema)."
        en: "DeltaS_ent > 0 if surroundings gain entropy (system releases heat). DeltaS_ent < 0 if surroundings lose entropy (release heat to system)."

    zero_behavior:
      allowed: true
      meaning:
        es: "DeltaS_ent = 0 indica proceso adiabatico: no hay intercambio de calor con el entorno."
        en: "DeltaS_ent = 0 indicates adiabatic process: no heat exchange with surroundings."

    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-5000, 5000] J/K"

    interpretation_role:
      primary_for: []
      secondary_for:
        - condicion_reversibilidad

    graph_binding:
      channels: []

    pedagogical_notes: "En un proceso reversible, DeltaS_ent compensa exactamente a DeltaS_sis. Si no lo hace, el proceso no es reversible."

  - id: eta_Carnot
    symbol: "\\\\eta_{\\\\mathrm{Carnot}}"

    nombre:
      es: Eficiencia de Carnot
      en: Carnot efficiency

    descripcion:
      es: "Rendimiento maximo de una maquina termica operando reversiblemente entre dos focos. Es la fraccion maxima de calor absorbido convertible en trabajo."
      en: "Maximum efficiency of a heat engine operating reversibly between two reservoirs. It is the maximum fraction of absorbed heat convertible to work."

    unidad_si: "adimensional"
    dimension: "[1]"

    is_vector: false
    components: null

    category: derived
    physical_role: core_physical_quantity

    used_in:
      - eficiencia_carnot

    common_mistake: "Usar temperaturas en Celsius en la formula. La eficiencia de Carnot exige kelvin absolutos: eta = 1 - T_frio(K) / T_caliente(K)."

    typical_range: "Siempre entre 0 y 1. Centrales termicas: 0.30-0.65. Refrigeradores de Carnot: COP puede ser > 1."

    sign_behavior:
      has_sign: false
      meaning:
        es: "La eficiencia es siempre positiva (entre 0 y 1)."
        en: "Efficiency is always positive (between 0 and 1)."

    zero_behavior:
      allowed: true
      meaning:
        es: "eta_Carnot = 0 cuando T_frio = T_caliente: no hay gradiente termico y no es posible extraer trabajo."
        en: "eta_Carnot = 0 when T_cold = T_hot: no thermal gradient and no work extraction is possible."

    value_nature:
      kind: scalar_bounded
      nonnegative_only: true
      expected_interval: "[0, 1]"

    interpretation_role:
      primary_for:
        - eficiencia_carnot
      secondary_for: []

    graph_binding:
      channels:
        - axis_y

    pedagogical_notes: "Es la referencia universal de eficiencia. Ninguna maquina real puede superarla. Si un calculo da eta_real > eta_Carnot, hay error seguro."

  - id: T_caliente
    symbol: "T_{\\\\mathrm{caliente}}"

    nombre:
      es: Temperatura del foco caliente
      en: Hot reservoir temperature

    descripcion:
      es: "Temperatura del reservorio termico de alta temperatura del que la maquina termica absorbe calor."
      en: "Temperature of the high-temperature thermal reservoir from which the heat engine absorbs heat."

    unidad_si: "K"
    dimension: "[Θ]"

    is_vector: false
    components: null

    category: parameter
    physical_role: parameter

    used_in:
      - eficiencia_carnot

    common_mistake: "Usar temperatura en Celsius. Convertir siempre a kelvin sumando 273.15."

    typical_range: "Centrales termicas: 500-1500 K. Motores de combustion: 1000-2500 K."

    sign_behavior:
      has_sign: false
      meaning:
        es: "Temperatura absoluta, siempre positiva."
        en: "Absolute temperature, always positive."

    zero_behavior:
      allowed: false
      meaning:
        es: "T = 0 K es inalcanzable por el tercer principio."
        en: "T = 0 K is unattainable by the third law."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[1, 10000] K"

    interpretation_role:
      primary_for: []
      secondary_for:
        - eficiencia_carnot

    graph_binding:
      channels:
        - axis_x

    pedagogical_notes: "Cuanto mayor es T_caliente, mayor es eta_Carnot. Esto explica por que las centrales buscan quemar combustible a la temperatura mas alta posible."

  - id: T_frio
    symbol: "T_{\\\\mathrm{frío}}"

    nombre:
      es: Temperatura del foco frio
      en: Cold reservoir temperature

    descripcion:
      es: "Temperatura del reservorio termico de baja temperatura al que la maquina termica cede calor. En la mayoria de las aplicaciones practicas, coincide con la temperatura ambiente."
      en: "Temperature of the low-temperature thermal reservoir to which the heat engine releases heat. In most practical applications, it coincides with ambient temperature."

    unidad_si: "K"
    dimension: "[Θ]"

    is_vector: false
    components: null

    category: parameter
    physical_role: parameter

    used_in:
      - eficiencia_carnot

    common_mistake: "Olvidar que T_frio suele ser la temperatura ambiente (aprox. 300 K), no 0 K. Usar T_frio = 0 da eta = 1, que es imposible."

    typical_range: "Temperatura ambiente: 280-310 K. Criogenia: hasta 4 K."

    sign_behavior:
      has_sign: false
      meaning:
        es: "Temperatura absoluta, siempre positiva."
        en: "Absolute temperature, always positive."

    zero_behavior:
      allowed: false
      meaning:
        es: "T_frio = 0 K es inalcanzable y daria eta_Carnot = 1 (imposible fisicamente)."
        en: "T_cold = 0 K is unattainable and would give eta_Carnot = 1 (physically impossible)."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[1, 10000] K"

    interpretation_role:
      primary_for: []
      secondary_for:
        - eficiencia_carnot

    graph_binding:
      channels: []

    pedagogical_notes: "Cuanto menor es T_frio, mayor es eta_Carnot. Pero en la practica, T_frio esta fijada por el entorno (rio, atmosfera) y es dificil reducirla."

  - id: Q_rev
    symbol: "Q_{\\\\mathrm{rev}}"

    nombre:
      es: Calor reversible
      en: Reversible heat

    descripcion:
      es: "Calor intercambiado en un proceso reversible. Es el maximo calor que puede absorberse o cederse entre dos estados dados sin generar entropia."
      en: "Heat exchanged in a reversible process. It is the maximum heat that can be absorbed or released between two given states without generating entropy."

    unidad_si: "J"
    dimension: "[M L^2 T^-2]"

    is_vector: false
    components: null

    category: fundamental
    physical_role: core_physical_quantity

    used_in:
      - condicion_reversibilidad

    common_mistake: "Confundir Q_rev con el calor real Q del proceso. En un proceso irreversible, Q_real < Q_rev (en absorcion). Solo en el proceso reversible coinciden."

    typical_range: "Desde julios hasta MJ, puede ser positivo o negativo."

    sign_behavior:
      has_sign: true
      meaning:
        es: "Q_rev > 0 indica absorcion de calor. Q_rev < 0 indica cesion de calor."
        en: "Q_rev > 0 indicates heat absorption. Q_rev < 0 indicates heat release."

    zero_behavior:
      allowed: true
      meaning:
        es: "Q_rev = 0 corresponde a un proceso adiabatico reversible (isentropico)."
        en: "Q_rev = 0 corresponds to a reversible adiabatic (isentropic) process."

    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-1e7, 1e7] J"

    interpretation_role:
      primary_for: []
      secondary_for:
        - condicion_reversibilidad

    graph_binding:
      channels: []

    pedagogical_notes: "Q_rev es el calor del camino reversible y se usa para calcular DeltaS = Q_rev / T en procesos isotermicos. En calentamiento, se integra dQ_rev / T."
`;export{e as default};
