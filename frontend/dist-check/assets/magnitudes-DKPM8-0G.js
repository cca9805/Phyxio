const e=`magnitudes:

  - id: DeltaS
    symbol: "\\\\Delta S"

    nombre:
      es: Variación de entropía
      en: Entropy change

    descripcion:
      es: "Cambio de entropía del sistema entre el estado inicial y el estado final. Magnitud extensiva que cuantifica la variación neta de dispersión energética."
      en: "System entropy change between initial and final states. Extensive quantity that quantifies the net change in energy dispersal."

    unidad_si: "J/K"
    dimension: "[M L^2 T^-2 Θ^-1]"

    is_vector: false
    components: null

    category: derived
    physical_role: core_physical_quantity

    used_in:
      - variacion_entropia_isotermica
      - variacion_entropia_calentamiento
      - variacion_entropia_gas_ideal

    common_mistake: "Confundir DeltaS del sistema con DeltaS del universo. La segunda ley impone DeltaS_universo ≥ 0, pero DeltaS_sistema puede ser negativo si el entorno compensa."

    typical_range: "En procesos cotidianos: de unos pocos J/K (calentar un vaso de agua) a miles de J/K (fundir un bloque metálico). Para 1 mol de agua en vaporización: ~109 J/(mol·K)."

    sign_behavior:
      has_sign: true
      meaning:
        es: "DeltaS > 0 indica aumento de dispersión (absorción de calor, expansión o desorden creciente). DeltaS < 0 indica disminución de dispersión (cesión de calor, compresión u orden creciente). El signo refleja la dirección del cambio energético del sistema."
        en: "DeltaS > 0 indicates increased dispersal (heat absorption, expansion or growing disorder). DeltaS < 0 indicates decreased dispersal (heat release, compression or growing order). The sign reflects the direction of the system's energy change."

    zero_behavior:
      allowed: true
      meaning:
        es: "DeltaS = 0 corresponde a un proceso isentrópico: adiabático y reversible. El sistema no gana ni pierde dispersión energética. Ejemplo: expansión adiabática reversible de un gas ideal."
        en: "DeltaS = 0 corresponds to an isentropic process: adiabatic and reversible. The system neither gains nor loses energy dispersal. Example: reversible adiabatic expansion of an ideal gas."

    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-500, 500] J/K para procesos típicos a escala de laboratorio"

    interpretation_role:
      primary_for:
        - variacion_entropia_isotermica
        - variacion_entropia_calentamiento
        - variacion_entropia_gas_ideal
      secondary_for: []

    graph_binding:
      channels:
        - axis_x_displacement

    pedagogical_notes: "Es la magnitud central del leaf. El alumno debe comprender que DeltaS es función de estado (independiente del camino) y que cuantifica 'cuánto desorden ganó o perdió el sistema'. Comparar valores de DeltaS entre procesos isotérmicos y no isotérmicos ayuda a consolidar la interpretación."

  - id: Q_rev
    symbol: "Q_{\\\\mathrm{rev}}"

    nombre:
      es: Calor reversible
      en: Reversible heat

    descripcion:
      es: "Calor intercambiado en el proceso reversible equivalente entre los mismos estados inicial y final. Es la cantidad energética que determina DeltaS en procesos isotérmicos."
      en: "Heat exchanged in the equivalent reversible process between the same initial and final states. It is the energy quantity that determines DeltaS in isothermal processes."

    unidad_si: "J"
    dimension: "[M L^2 T^-2]"

    is_vector: false
    components: null

    category: fundamental
    physical_role: core_physical_quantity

    used_in:
      - variacion_entropia_isotermica

    common_mistake: "Usar el calor real medido en un proceso irreversible como si fuera Q_rev. En un proceso irreversible, Q_real < Q_rev para la absorción, pero DeltaS se calcula siempre con Q_rev."

    typical_range: "Desde cientos de julios (calentar un objeto pequeño) hasta cientos de kJ (cambio de fase de 1 kg de agua: L_f ≈ 334 kJ, L_v ≈ 2260 kJ)."

    sign_behavior:
      has_sign: true
      meaning:
        es: "Q_rev > 0 indica que el sistema absorbe calor del entorno (proceso endotérmico). Q_rev < 0 indica que el sistema cede calor al entorno (proceso exotérmico)."
        en: "Q_rev > 0 indicates the system absorbs heat from surroundings (endothermic). Q_rev < 0 indicates the system releases heat to surroundings (exothermic)."

    zero_behavior:
      allowed: true
      meaning:
        es: "Q_rev = 0 corresponde a un proceso adiabático reversible: no hay intercambio de calor y DeltaS = 0."
        en: "Q_rev = 0 corresponds to a reversible adiabatic process: no heat exchange and DeltaS = 0."

    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-1e6, 1e6] J para procesos de laboratorio"

    interpretation_role:
      primary_for:
        - variacion_entropia_isotermica
      secondary_for: []

    graph_binding:
      channels: []

    pedagogical_notes: "Insistir en la distinción entre calor real y calor reversible. La entropía como función de estado no depende del camino real, solo del camino reversible que conecta los mismos estados."

  - id: T
    symbol: "T"

    nombre:
      es: Temperatura absoluta
      en: Absolute temperature

    descripcion:
      es: "Temperatura del sistema en kelvin. En la fórmula isotérmica es la temperatura constante del proceso; en la fórmula de calentamiento aparece como temperatura variable dentro del logaritmo."
      en: "System temperature in kelvin. In the isothermal formula it is the constant process temperature; in the heating formula it appears as a variable temperature within the logarithm."

    unidad_si: "K"
    dimension: "[Θ]"

    is_vector: false
    components: null

    category: fundamental
    physical_role: parameter

    used_in:
      - variacion_entropia_isotermica

    common_mistake: "Usar grados Celsius en lugar de kelvin. A 27 °C (300 K), el error de usar 27 en lugar de 300 produce un resultado 11 veces mayor del correcto."

    typical_range: "Procesos cotidianos: 200–500 K. Procesos industriales: hasta 2000 K. Criogenia: por debajo de 100 K."

    sign_behavior:
      has_sign: false
      meaning:
        es: "La temperatura absoluta es siempre positiva por definición termodinámica. T = 0 K es inalcanzable (tercer principio)."
        en: "Absolute temperature is always positive by thermodynamic definition. T = 0 K is unattainable (third law)."

    zero_behavior:
      allowed: false
      meaning:
        es: "T = 0 K es inalcanzable y produciría DeltaS divergente (división por cero). Físicamente prohibido por el tercer principio de la termodinámica."
        en: "T = 0 K is unattainable and would produce divergent DeltaS (division by zero). Physically forbidden by the third law of thermodynamics."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[1, 10000] K"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_isotermica

    graph_binding:
      channels:
        - axis_y

    pedagogical_notes: "El papel dual de T en entropía: a mayor T, el mismo calor produce menor DeltaS. Esto explica por qué la 'calidad' de la energía térmica disminuye con la temperatura."

  - id: T_f
    symbol: "T_f"

    nombre:
      es: Temperatura final
      en: Final temperature

    descripcion:
      es: "Temperatura absoluta del sistema al final del proceso de calentamiento o enfriamiento. Debe expresarse en kelvin."
      en: "Absolute temperature of the system at the end of the heating or cooling process. Must be expressed in kelvin."

    unidad_si: "K"
    dimension: "[Θ]"

    is_vector: false
    components: null

    category: state
    physical_role: parameter

    used_in:
      - variacion_entropia_calentamiento
      - variacion_entropia_gas_ideal

    common_mistake: "Intercambiar T_f y T_i dentro del logaritmo invierte el signo de DeltaS. Calentamiento (T_f > T_i) debe dar DeltaS > 0."

    typical_range: "Depende del proceso. Calentamiento de agua: 273–373 K. Procesos industriales: hasta 1500 K."

    sign_behavior:
      has_sign: false
      meaning:
        es: "T_f es siempre positiva (kelvin absolutos). No tiene signo físico."
        en: "T_f is always positive (absolute kelvin). It has no physical sign."

    zero_behavior:
      allowed: false
      meaning:
        es: "T_f = 0 K es inalcanzable y hace diverger el logaritmo ln(T_f/T_i) → -∞."
        en: "T_f = 0 K is unattainable and makes the logarithm diverge ln(T_f/T_i) → -∞."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[1, 10000] K"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_calentamiento
        - variacion_entropia_gas_ideal

    graph_binding:
      channels: []

    pedagogical_notes: "Comparar T_f con T_i determina el signo de DeltaS en calentamiento. El cociente T_f/T_i > 1 implica DeltaS > 0 (calentamiento); T_f/T_i < 1 implica DeltaS < 0 (enfriamiento)."

  - id: T_i
    symbol: "T_i"

    nombre:
      es: Temperatura inicial
      en: Initial temperature

    descripcion:
      es: "Temperatura absoluta del sistema al inicio del proceso de calentamiento o enfriamiento. Debe expresarse en kelvin."
      en: "Absolute temperature of the system at the beginning of the heating or cooling process. Must be expressed in kelvin."

    unidad_si: "K"
    dimension: "[Θ]"

    is_vector: false
    components: null

    category: state
    physical_role: parameter

    used_in:
      - variacion_entropia_calentamiento
      - variacion_entropia_gas_ideal

    common_mistake: "Expresar T_i en Celsius dentro del logaritmo: ln(T_f/T_i) con T_i = 0 °C da ln(T_f/0) → divergencia. Siempre usar kelvin."

    typical_range: "Depende del proceso. Temperatura ambiente: 293–298 K. Criogenia: 4–77 K."

    sign_behavior:
      has_sign: false
      meaning:
        es: "T_i es siempre positiva (kelvin absolutos)."
        en: "T_i is always positive (absolute kelvin)."

    zero_behavior:
      allowed: false
      meaning:
        es: "T_i = 0 K es inalcanzable y haría diverger ln(T_f/T_i) → +∞."
        en: "T_i = 0 K is unattainable and would make ln(T_f/T_i) → +∞."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[1, 10000] K"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_calentamiento
        - variacion_entropia_gas_ideal

    graph_binding:
      channels: []

    pedagogical_notes: "La temperatura inicial es la referencia del estado termodinámico previo al proceso. Verificar siempre la conversión a kelvin antes de sustituir."

  - id: m
    symbol: "m"

    nombre:
      es: Masa del sistema
      en: System mass

    descripcion:
      es: "Masa total del cuerpo o sustancia que experimenta el cambio de entropía por calentamiento o enfriamiento."
      en: "Total mass of the body or substance undergoing entropy change due to heating or cooling."

    unidad_si: "kg"
    dimension: "[M]"

    is_vector: false
    components: null

    category: parameter
    physical_role: parameter

    used_in:
      - variacion_entropia_calentamiento

    common_mistake: "Usar gramos sin convertir a kg cuando c_p está en J/(kg·K). El resultado queda un factor 1000 mayor o menor."

    typical_range: "De gramos (0.001 kg) a toneladas (1000 kg). Laboratorio: 0.01–10 kg típicamente."

    sign_behavior:
      has_sign: false
      meaning:
        es: "La masa es siempre positiva."
        en: "Mass is always positive."

    zero_behavior:
      allowed: false
      meaning:
        es: "m = 0 implica que no hay sistema material: DeltaS = 0 trivialmente."
        en: "m = 0 implies there is no material system: DeltaS = 0 trivially."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[0.001, 1000] kg"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_calentamiento

    graph_binding:
      channels: []

    pedagogical_notes: "La masa actúa como factor de escala: duplicar la masa duplica DeltaS. Esto refleja la naturaleza extensiva de la entropía."

  - id: c_p
    symbol: "c_p"

    nombre:
      es: Capacidad calorífica específica a presión constante
      en: Specific heat capacity at constant pressure

    descripcion:
      es: "Energía necesaria por unidad de masa para elevar la temperatura en 1 K a presión constante. Determina la sensibilidad térmica del material al intercambio de calor."
      en: "Energy required per unit mass to raise the temperature by 1 K at constant pressure. Determines the material's thermal sensitivity to heat exchange."

    unidad_si: "J/(kg·K)"
    dimension: "[L^2 T^-2 Θ^-1]"

    is_vector: false
    components: null

    category: parameter
    physical_role: material_property

    used_in:
      - variacion_entropia_calentamiento

    common_mistake: "Confundir c_p con c_v para gases (la diferencia es R/M). Para sólidos y líquidos c_p ≈ c_v, pero para gases ideales c_p = c_v + R/M."

    typical_range: "Agua: 4186 J/(kg·K). Metales: 100–900 J/(kg·K). Gases ideales monoatómicos: (5/2)R/M."

    sign_behavior:
      has_sign: false
      meaning:
        es: "c_p es siempre positiva para sustancias estables termodinámicamente."
        en: "c_p is always positive for thermodynamically stable substances."

    zero_behavior:
      allowed: false
      meaning:
        es: "c_p = 0 significaría que no se necesita energía para calentar el cuerpo, lo cual es físicamente imposible para materia ordinaria."
        en: "c_p = 0 would mean no energy is needed to heat the body, which is physically impossible for ordinary matter."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[100, 5000] J/(kg·K)"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_calentamiento

    graph_binding:
      channels: []

    pedagogical_notes: "Un c_p alto (como el del agua) implica que se necesita mucho calor para cambiar T, y por tanto DeltaS por calentamiento es grande. Un c_p bajo (metales) implica menor DeltaS para el mismo DeltaT."

  - id: n
    symbol: "n"

    nombre:
      es: Número de moles
      en: Number of moles

    descripcion:
      es: "Cantidad de sustancia del gas ideal, expresada en moles. Factor de escala extensivo en la fórmula de variación de entropía de gas ideal."
      en: "Amount of substance of the ideal gas, expressed in moles. Extensive scale factor in the ideal gas entropy change formula."

    unidad_si: "mol"
    dimension: "[N]"

    is_vector: false
    components: null

    category: parameter
    physical_role: parameter

    used_in:
      - variacion_entropia_gas_ideal

    common_mistake: "Confundir moles con masa: n = m/M (masa molar). Un error en n escala todo el resultado proporcionalmente."

    typical_range: "De milimoles (0.001 mol) a kilomoles en procesos industriales. Laboratorio: 0.01–10 mol típicamente."

    sign_behavior:
      has_sign: false
      meaning:
        es: "El número de moles es siempre positivo."
        en: "The number of moles is always positive."

    zero_behavior:
      allowed: false
      meaning:
        es: "n = 0 implica ausencia de gas: DeltaS = 0 trivialmente."
        en: "n = 0 implies no gas is present: DeltaS = 0 trivially."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[0.001, 1000] mol"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_gas_ideal

    graph_binding:
      channels: []

    pedagogical_notes: "Como la entropía es extensiva, n actúa como factor de escala directo. Duplicar la cantidad de gas duplica DeltaS."

  - id: c_v
    symbol: "c_v"

    nombre:
      es: Capacidad calorífica molar a volumen constante
      en: Molar heat capacity at constant volume

    descripcion:
      es: "Energía necesaria por mol para elevar la temperatura en 1 K manteniendo el volumen constante. Para gas ideal monoatómico: c_v = (3/2)R; para diatómico: c_v = (5/2)R."
      en: "Energy required per mole to raise temperature by 1 K at constant volume. For monatomic ideal gas: c_v = (3/2)R; for diatomic: c_v = (5/2)R."

    unidad_si: "J/(mol·K)"
    dimension: "[M L^2 T^-2 Θ^-1 N^-1]"

    is_vector: false
    components: null

    category: parameter
    physical_role: material_property

    used_in:
      - variacion_entropia_gas_ideal

    common_mistake: "Usar c_p en la fórmula que emplea variables (T, V): la relación correcta con (T, V) usa c_v. Con variables (T, P) se usa c_p."

    typical_range: "Gas monoatómico: 12.47 J/(mol·K). Gas diatómico: 20.79 J/(mol·K). Gas poliatómico: >20.79 J/(mol·K)."

    sign_behavior:
      has_sign: false
      meaning:
        es: "c_v es siempre positiva para gases estables."
        en: "c_v is always positive for stable gases."

    zero_behavior:
      allowed: false
      meaning:
        es: "c_v = 0 significaría que no se necesita energía para calentar el gas a V constante, lo cual es imposible."
        en: "c_v = 0 would mean no energy is needed to heat the gas at constant V, which is impossible."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[10, 50] J/(mol·K)"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_gas_ideal

    graph_binding:
      channels: []

    pedagogical_notes: "c_v determina la contribución térmica a DeltaS de un gas ideal. A mayor c_v (más grados de libertad moleculares), mayor DeltaS por el mismo cambio de temperatura."

  - id: R
    symbol: "R"

    nombre:
      es: Constante universal de los gases
      en: Universal gas constant

    descripcion:
      es: "Constante fundamental que relaciona energía térmica por mol y kelvin. R = 8.314 J/(mol·K). Aparece en la contribución volumétrica de la entropía de gas ideal."
      en: "Fundamental constant relating thermal energy per mole and kelvin. R = 8.314 J/(mol·K). Appears in the volumetric contribution to ideal gas entropy."

    unidad_si: "J/(mol·K)"
    dimension: "[M L^2 T^-2 Θ^-1 N^-1]"

    is_vector: false
    components: null

    category: constant
    physical_role: constant

    used_in:
      - variacion_entropia_gas_ideal

    common_mistake: "Usar R = 8.314 con unidades incompatibles (por ejemplo, presión en atm y volumen en litros requiere R = 0.08206 L·atm/(mol·K), pero para entropía en J/K siempre usar R = 8.314 J/(mol·K))."

    typical_range: "R = 8.314 J/(mol·K) exactamente."

    sign_behavior:
      has_sign: false
      meaning:
        es: "R es una constante positiva universal."
        en: "R is a positive universal constant."

    zero_behavior:
      allowed: false
      meaning:
        es: "R no puede ser cero; es una constante fundamental de la naturaleza."
        en: "R cannot be zero; it is a fundamental constant of nature."

    value_nature:
      kind: constant
      nonnegative_only: true
      expected_interval: "[8.314, 8.314]"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_gas_ideal

    graph_binding:
      channels: []

    pedagogical_notes: "R conecta la contribución volumétrica (espacial) con la térmica. La expresión nR·ln(V_f/V_i) cuantifica cuánta entropía se gana o pierde por redistribución espacial de las moléculas."

  - id: V_f
    symbol: "V_f"

    nombre:
      es: Volumen final
      en: Final volume

    descripcion:
      es: "Volumen del gas ideal en el estado final del proceso. Junto con V_i determina la contribución volumétrica a la variación de entropía."
      en: "Volume of the ideal gas at the final state of the process. Together with V_i determines the volumetric contribution to entropy change."

    unidad_si: "m^3"
    dimension: "[L^3]"

    is_vector: false
    components: null

    category: state
    physical_role: parameter

    used_in:
      - variacion_entropia_gas_ideal

    common_mistake: "Usar litros sin convertir a m^3 cuando R está en J/(mol·K). Mantener coherencia de unidades: 1 L = 0.001 m^3."

    typical_range: "Laboratorio: 0.001–0.1 m^3. Industrial: 1–100 m^3."

    sign_behavior:
      has_sign: false
      meaning:
        es: "El volumen es siempre positivo."
        en: "Volume is always positive."

    zero_behavior:
      allowed: false
      meaning:
        es: "V_f = 0 es físicamente imposible para un gas (implicaría densidad infinita)."
        en: "V_f = 0 is physically impossible for a gas (would imply infinite density)."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[1e-6, 1000] m^3"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_gas_ideal

    graph_binding:
      channels: []

    pedagogical_notes: "V_f > V_i (expansión) contribuye positivamente a DeltaS: más espacio disponible implica mayor dispersión molecular. V_f < V_i (compresión) contribuye negativamente."

  - id: V_i
    symbol: "V_i"

    nombre:
      es: Volumen inicial
      en: Initial volume

    descripcion:
      es: "Volumen del gas ideal en el estado inicial del proceso. Referencia para la contribución volumétrica a DeltaS."
      en: "Volume of the ideal gas at the initial state of the process. Reference for the volumetric contribution to DeltaS."

    unidad_si: "m^3"
    dimension: "[L^3]"

    is_vector: false
    components: null

    category: state
    physical_role: parameter

    used_in:
      - variacion_entropia_gas_ideal

    common_mistake: "Intercambiar V_i y V_f dentro del logaritmo invierte el signo de la contribución volumétrica."

    typical_range: "Laboratorio: 0.001–0.1 m^3. Industrial: 1–100 m^3."

    sign_behavior:
      has_sign: false
      meaning:
        es: "El volumen inicial es siempre positivo."
        en: "Initial volume is always positive."

    zero_behavior:
      allowed: false
      meaning:
        es: "V_i = 0 es físicamente imposible y haría diverger ln(V_f/V_i)."
        en: "V_i = 0 is physically impossible and would make ln(V_f/V_i) diverge."

    value_nature:
      kind: scalar_positive
      nonnegative_only: true
      expected_interval: "[1e-6, 1000] m^3"

    interpretation_role:
      primary_for: []
      secondary_for:
        - variacion_entropia_gas_ideal

    graph_binding:
      channels: []

    pedagogical_notes: "El cociente V_f/V_i determina la contribución volumétrica. Una expansión libre al doble de volumen (V_f/V_i = 2) produce DeltaS = nR·ln(2) ≈ 5.76 J/(mol·K) independientemente de T."
`;export{e as default};
