const e=`magnitudes:

  - id: p1
    symbol: "p_1"
    nombre:
      es: Presion inicial
      en: Initial pressure
    descripcion:
      es: Presion del gas al inicio del proceso isotermico.
      en: Gas pressure at the start of the isothermal process.
    unidad_si: Pa
    dimension: "[M L⁻¹ T⁻²]"
    is_vector: false
    components: []
    category: state
    physical_role: input
    used_in: [ley de Boyle, calculo de trabajo isotermico]
    common_mistake: Usar kilopascales sin convertir a pascales antes de calcular el trabajo en julios.
    typical_range:
      min: 1000
      max: 10000000
      unit: Pa
      context: Procesos isometricos en laboratorio y sistemas industriales de gas ideal.
    sign_behavior:
      has_sign: false
      meaning:
        es: La presion es siempre positiva; un valor negativo carece de sentido fisico.
        en: Pressure is always positive; a negative value has no physical meaning.
    zero_behavior:
      allowed: false
      meaning:
        es: Presion cero implica vacio perfecto, fuera del dominio del gas ideal.
        en: Zero pressure implies perfect vacuum, outside the ideal gas domain.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for: estado inicial del gas en el proceso isotermico
      secondary_for: calculo del trabajo y verificacion de la ley de Boyle
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[p1]] junto con [[V1]] definen el estado inicial de la isoterma en el diagrama pV. Si [[p1]] sube, [[V1]] debe bajar para mantener el producto constante."
      en: "[[p1]] together with [[V1]] define the initial state on the pV isotherm. If [[p1]] rises, [[V1]] must fall to keep their product constant."

  - id: p2
    symbol: "p_2"
    nombre:
      es: Presion final
      en: Final pressure
    descripcion:
      es: Presion del gas al final del proceso isotermico.
      en: Gas pressure at the end of the isothermal process.
    unidad_si: Pa
    dimension: "[M L⁻¹ T⁻²]"
    is_vector: false
    components: []
    category: state
    physical_role: output
    used_in: [ley de Boyle, diagnostico del estado final]
    common_mistake: Confundir p2 con la presion de equilibrio final cuando hay multiples etapas.
    typical_range:
      min: 1000
      max: 10000000
      unit: Pa
      context: Estado final de la isoterma en condiciones de laboratorio.
    sign_behavior:
      has_sign: false
      meaning:
        es: La presion final es siempre positiva.
        en: Final pressure is always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Presion final cero implicaria expansion infinita, fisicamente imposible para gas real.
        en: Zero final pressure would imply infinite expansion, physically impossible for a real gas.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for: verificacion del estado final del proceso isotermico
      secondary_for: calculo del cociente p1/p2 en la ley de Boyle
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[p2]] indica si el gas se expandio (p2 < p1) o se comprimo (p2 > p1). La temperatura no cambia en ninguno de los dos casos."
      en: "[[p2]] indicates whether the gas expanded (p2 < p1) or was compressed (p2 > p1). Temperature does not change in either case."

  - id: V1
    symbol: "V_1"
    nombre:
      es: Volumen inicial
      en: Initial volume
    descripcion:
      es: Volumen del gas al inicio del proceso isotermico.
      en: Gas volume at the start of the isothermal process.
    unidad_si: "m³"
    dimension: "[L³]"
    is_vector: false
    components: []
    category: state
    physical_role: input
    used_in: [ley de Boyle, trabajo isotermico]
    common_mistake: Introducir el volumen en litros sin convertir a metros cubicos.
    typical_range:
      min: 0.0001
      max: 10
      unit: "m³"
      context: Recipientes de laboratorio y depositos industriales de gas.
    sign_behavior:
      has_sign: false
      meaning:
        es: El volumen es siempre positivo; no tiene sentido fisico un volumen negativo.
        en: Volume is always positive; a negative volume has no physical meaning.
    zero_behavior:
      allowed: false
      meaning:
        es: Volumen cero implicaria densidad infinita, fuera del modelo de gas ideal.
        en: Zero volume would imply infinite density, outside the ideal gas model.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for: descripcion del estado inicial en la isoterma
      secondary_for: calculo del cociente V2/V1 para el trabajo isotermico
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[V1]] es el punto de partida sobre la hiperbola pV en el diagrama. Junto con [[T]], determina completamente el estado inicial."
      en: "[[V1]] is the starting point on the pV hyperbola in the diagram. Together with [[T]], it completely determines the initial state."

  - id: V2
    symbol: "V_2"
    nombre:
      es: Volumen final
      en: Final volume
    descripcion:
      es: Volumen del gas al final del proceso isotermico.
      en: Gas volume at the end of the isothermal process.
    unidad_si: "m³"
    dimension: "[L³]"
    is_vector: false
    components: []
    category: state
    physical_role: output
    used_in: [ley de Boyle, trabajo isotermico, interpretacion del proceso]
    common_mistake: Olvidar que V2 mayor que V1 implica expansion y trabajo positivo realizado por el gas.
    typical_range:
      min: 0.0001
      max: 10
      unit: "m³"
      context: Estado final de la isoterma.
    sign_behavior:
      has_sign: false
      meaning:
        es: El volumen final es siempre positivo.
        en: Final volume is always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Volumen final cero es fisicamente imposible para gas ideal.
        en: Zero final volume is physically impossible for an ideal gas.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for: determinacion del sentido del proceso (expansion o compresion)
      secondary_for: calculo del trabajo mediante el logaritmo del cociente de volumenes
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[V2]] mayor que [[V1]] indica expansion; el gas realizo trabajo positivo absorbiendo calor del foco. [[V2]] menor indica compresion; el entorno realizo trabajo sobre el gas."
      en: "[[V2]] greater than [[V1]] indicates expansion; the gas did positive work while absorbing heat from the reservoir. [[V2]] smaller indicates compression; the surroundings did work on the gas."

  - id: T
    symbol: "T"
    nombre:
      es: Temperatura absoluta
      en: Absolute temperature
    descripcion:
      es: Temperatura del gas durante el proceso isotermico, constante en todo momento.
      en: Gas temperature during the isothermal process, constant throughout.
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: []
    category: state
    physical_role: parameter
    used_in: [ley de Boyle generalizada, trabajo isotermico, gas ideal]
    common_mistake: Usar grados Celsius en lugar de kelvin al calcular el trabajo isotermico con nRT.
    typical_range:
      min: 100
      max: 1500
      unit: K
      context: Gases ideales en condiciones de laboratorio y procesos industriales.
    sign_behavior:
      has_sign: false
      meaning:
        es: La temperatura absoluta es siempre positiva. El cero absoluto es el limite inferior teorico.
        en: Absolute temperature is always positive. Absolute zero is the theoretical lower limit.
    zero_behavior:
      allowed: false
      meaning:
        es: Temperatura cero es el cero absoluto, inalcanzable en la practica.
        en: Zero temperature is absolute zero, unachievable in practice.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for: definicion de la isoterma y control del proceso
      secondary_for: calculo del trabajo via nRT y verificacion del modelo
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[T]] es la constante que define la hiperbola de la isoterma en el diagrama pV. Una isoterma a [[T]] mayor esta mas alejada del origen y tiene mayor area bajo la curva."
      en: "[[T]] is the constant that defines the isotherm hyperbola in the pV diagram. An isotherm at higher [[T]] lies farther from the origin and has a larger area under the curve."

  - id: n
    symbol: "n"
    nombre:
      es: Cantidad de sustancia
      en: Amount of substance
    descripcion:
      es: Numero de moles de gas presentes en el sistema.
      en: Number of moles of gas present in the system.
    unidad_si: mol
    dimension: "[N]"
    is_vector: false
    components: []
    category: parameter
    physical_role: parameter
    used_in: [ley del gas ideal, trabajo isotermico]
    common_mistake: Confundir n (moles) con N (numero de moleculas), perdiendo un factor de Avogadro.
    typical_range:
      min: 0.001
      max: 1000
      unit: mol
      context: Desde muestras de laboratorio hasta depositos industriales.
    sign_behavior:
      has_sign: false
      meaning:
        es: La cantidad de sustancia es siempre positiva.
        en: Amount of substance is always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Cero moles implica que no hay gas; el proceso no existe.
        en: Zero moles implies no gas; the process does not exist.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +inf)"
    interpretation_role:
      primary_for: escala del trabajo isotermico y de la presion del gas
      secondary_for: verificacion de la ecuacion de estado del gas ideal
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[n]] escala linealmente el trabajo isotermico. Doblar [[n]] a temperatura e igual cociente de volumenes duplica exactamente el trabajo realizado."
      en: "[[n]] scales the isothermal work linearly. Doubling [[n]] at the same temperature and volume ratio exactly doubles the work done."

  - id: W
    symbol: "W"
    nombre:
      es: Trabajo isotermico
      en: Isothermal work
    descripcion:
      es: Trabajo realizado por el gas durante el proceso isotermico reversible.
      en: Work done by the gas during the reversible isothermal process.
    unidad_si: J
    dimension: "[M L² T⁻²]"
    is_vector: false
    components: []
    category: derived
    physical_role: output
    used_in: [primer principio, interpretacion del proceso isotermico]
    common_mistake: Olvidar el signo del trabajo; en expansion el gas realiza trabajo positivo y absorbe calor.
    typical_range:
      min: -100000
      max: 100000
      unit: J
      context: Procesos isometricos tipicos en laboratorio.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo si el gas se expande (V2 > V1) y realiza trabajo sobre el entorno. Negativo si se comprime.
        en: Positive if the gas expands (V2 > V1) and does work on the surroundings. Negative if compressed.
    zero_behavior:
      allowed: true
      meaning:
        es: Trabajo nulo si V1 igual a V2; el proceso no cambio el volumen (no hubo proceso real).
        en: Zero work if V1 equals V2; the process did not change the volume (no real process occurred).
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-inf, +inf)"
    interpretation_role:
      primary_for: cuantificacion del intercambio de energia mecanica en el proceso isotermico
      secondary_for: calculo del calor intercambiado via primer principio (Q igual a W en proceso isotermico)
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[W]] es el area bajo la curva hiperbola en el diagrama pV. Por el primer principio, en un proceso isotermico de gas ideal, el calor absorbido es exactamente igual a [[W]]."
      en: "[[W]] is the area under the hyperbolic curve in the pV diagram. By the first law, in an isothermal process of an ideal gas, the heat absorbed equals exactly [[W]]."

  - id: Q_iso
    symbol: "Q"
    nombre:
      es: Calor intercambiado isotermico
      en: Isothermal heat exchange
    descripcion:
      es: Calor que el gas intercambia con el foco termico para mantener la temperatura constante.
      en: Heat the gas exchanges with the thermal reservoir to maintain constant temperature.
    unidad_si: J
    dimension: "[M L² T⁻²]"
    is_vector: false
    components: []
    category: derived
    physical_role: derived
    used_in: [primer principio en proceso isotermico, interpretacion termica]
    common_mistake: Creer que Q es cero en el proceso isotermico porque T no cambia; el error confunde isotermico con adiabatico.
    typical_range:
      min: -100000
      max: 100000
      unit: J
      context: Igual en modulo y signo al trabajo isotermico para gas ideal.
    sign_behavior:
      has_sign: true
      meaning:
        es: Positivo si el gas absorbe calor del foco (expansion). Negativo si cede calor (compresion).
        en: Positive if the gas absorbs heat from the reservoir (expansion). Negative if it releases heat (compression).
    zero_behavior:
      allowed: false
      meaning:
        es: Calor cero en proceso isotermico solo es posible si no hay cambio de volumen, lo que no es un proceso real.
        en: Zero heat in an isothermal process is only possible if there is no volume change, which is not a real process.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-inf, +inf)"
    interpretation_role:
      primary_for: comprension del intercambio termico necesario para mantener la temperatura
      secondary_for: conexion con el primer principio y ciclos termodinamicos
    graph_binding:
      channels: [pV_isotherm]
    pedagogical_notes:
      es: "[[Q_iso]] es exactamente igual a [[W]] en un proceso isotermico de gas ideal, porque la energia interna no cambia. Esta es la clave para distinguir el proceso isotermico del adiabatico."
      en: "[[Q_iso]] equals exactly [[W]] in an isothermal ideal gas process, because internal energy does not change. This is the key to distinguishing the isothermal process from the adiabatic one."
`;export{e as default};
