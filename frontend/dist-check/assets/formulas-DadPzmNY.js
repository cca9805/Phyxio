const e=`formulas:

  - id: ley_gas_ideal
    title:
      es: Ley del gas ideal
      en: Ideal gas law
    equation: "P * V = n * R * T"
    latex: "P V = n R T"
    rearrangements:
      - target: P
        equation: "P = n * R * T / V"
        latex: "P = \\\\dfrac{n R T}{V}"
      - target: V
        equation: "V = n * R * T / P"
        latex: "V = \\\\dfrac{n R T}{P}"
      - target: T
        equation: "T = P * V / (n * R)"
        latex: "T = \\\\dfrac{P V}{n R}"
      - target: n
        equation: "n = P * V / (R * T)"
        latex: "n = \\\\dfrac{P V}{R T}"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "Relación de proporcionalidad entre las cuatro variables de estado de un gas ideal: presión, volumen, cantidad de sustancia y temperatura absoluta. Es la consecuencia directa de tratar las moléculas como partículas puntuales sin interacciones."
      en: "Proportionality relation between the four state variables of an ideal gas: pressure, volume, amount of substance and absolute temperature. It is the direct consequence of treating molecules as point particles with no interactions."
    constraints:
      - "Gas en régimen ideal: moléculas puntuales sin interacciones intermoleculares"
      - "Temperatura en kelvin obligatoriamente"
      - "Volumen en m³ y presión en Pa para usar R = 8.314 J/(mol·K)"
      - "Sin cambios de fase ni reacciones químicas"
    validity:
      es: "Presiones bajas (P ≪ 10 MPa) y temperaturas muy superiores a la temperatura crítica del gas. Gases nobles y diatómicos a condiciones de laboratorio ordinarias."
      en: "Low pressures (P ≪ 10 MPa) and temperatures well above the gas's critical temperature. Noble and diatomic gases at ordinary laboratory conditions."
    dimension_check: "[M L^-1 T^-2][L^3] = [N][M L^2 T^-2 N^-1 Theta^-1][Theta] → [M L^2 T^-2] = [M L^2 T^-2] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - cálculo de cualquier variable de estado del gas ideal
      - verificación de condiciones de idealidad
      - estimaciones termodinámicas rápidas
    interpretation_tags:
      - gas_ideal
      - estado_termodinamico
      - variables_de_estado
    result_semantics:
      target: P
      kind: state_variable
      sign_meaning:
        es: "La presión es siempre positiva en un gas ideal. Un resultado negativo señala un error de cálculo o de unidades."
        en: "Pressure is always positive in an ideal gas. A negative result signals a calculation or unit error."
      absolute_value_meaning:
        es: "La magnitud de P indica cuántos pascales ejerce el gas, proporcional a la densidad molecular y a la energía cinética promedio de las moléculas."
        en: "The magnitude of P indicates how many pascals the gas exerts, proportional to the molecular density and to the mean kinetic energy of the molecules."
    domain_checks:
      - "P > 0"
      - "V > 0"
      - "T > 0"
      - "n > 0"
      - "T > 1"
    coherence_checks:
      - "result > 0: presión coherente con el modelo ideal"
      - "result > 1e7: presión muy alta — verificar si el modelo ideal sigue siendo válido"
      - "result < 10: presión muy baja — posible error de unidades"
    graph_implications:
      - "A T constante: P·V = cte, la isoterma es una hipérbola en el diagrama P-V"
      - "A V constante: P proporcional a T, relación lineal en el diagrama P-T"
      - "A P constante: V proporcional a T, relación lineal en el diagrama V-T"
    pedagogical_triggers:
      - "Si T se introduce en Celsius → P resulta unas 12 veces menor de lo correcto a temperatura ambiente"
      - "Si V está en litros en lugar de m³ → P resulta 1000 veces mayor o menor"
      - "Si n está en gramos en lugar de moles → P errónea en factor igual a la masa molar"

  - id: ley_combinada_gases
    title:
      es: Ley combinada de los gases
      en: Combined gas law
    equation: "(P1 * V1) / T1 = (P2 * V2) / T2"
    latex: "(P_1 V_1) / T_1 = (P_2 V_2) / T_2"
    rearrangements:
      - target: P
        equation: "P_f = (P_i * V_i * T_f) / (T_i * V_f)"
        latex: "P_f = (P_i * V_i * T_f) / (T_i * V_f)"
      - target: V
        equation: "V_f = (P_i * V_i * T_f) / (T_i * P_f)"
        latex: "V_f = (P_i * V_i * T_f) / (T_i * P_f)"
      - target: T
        equation: "T_f = (P_f * V_f * T_i) / (P_i * V_i)"
        latex: "T_f = (P_f * V_f * T_i) / (P_i * V_i)"
    category: fundamental
    relation_type: conservation
    physical_meaning:
      es: "Conservación del cociente P·V/T para un gas ideal con n constante entre dos estados de equilibrio: si uno de los seis valores cambia, los otros se ajustan para mantener la igualdad."
      en: "Conservation of the ratio P·V/T for an ideal gas at constant n between two equilibrium states: if one of the six values changes, the others adjust to maintain equality."
    constraints:
      - "n constante (sistema cerrado, sin entrada ni salida de gas)"
      - "Temperatura en kelvin en ambos estados"
    validity:
      es: "Mismas condiciones que la ley del gas ideal: baja densidad, lejos del punto de condensación."
      en: "Same conditions as the ideal gas law: low density, far from the condensation point."
    dimension_check: "[M L^-1 T^-2][L^3][Theta^-1] = [M L^-1 T^-2][L^3][Theta^-1] ✓"
    calculable: false
    motivo_no_calculable: "Relaciona seis variables en dos estados; requiere conocer cinco para despejar la sexta"
    used_in:
      - cálculo del estado final de un gas ideal en procesos cerrados
      - problemas de expansión y compresión con n constante
      - verificación de consistencia entre dos estados de equilibrio
    interpretation_tags:
      - gas_ideal
      - proceso_termodinamico
      - sistema_cerrado
    result_semantics:
      target: V
      kind: state_variable
      sign_meaning:
        es: "El volumen final es siempre positivo. Un resultado negativo indica error en las condiciones de entrada."
        en: "The final volume is always positive. A negative result indicates an error in the input conditions."
      absolute_value_meaning:
        es: "Indica el volumen que ocupa el gas en el estado final, proporcional a T₂ e inversamente proporcional a P₂."
        en: "Indicates the volume the gas occupies in the final state, proportional to T₂ and inversely proportional to P₂."
    domain_checks:
      - "P1 > 0"
      - "V1 > 0"
      - "T1 > 0"
      - "P2 > 0"
      - "T2 > 0"
    coherence_checks:
      - "result > 0: volumen final coherente"
      - "result / V1 > 100: expansión extrema — verificar condiciones de entrada"
    graph_implications:
      - "En el diagrama P-V, los estados inicial y final se unen por la trayectoria del proceso"
      - "Proceso isotérmico (T1 = T2): trayectoria hiperbólica P·V = cte entre los dos estados"
    pedagogical_triggers:
      - "Si T no está en kelvin → resultado erróneo en factor ~10 a temperatura ambiente"
      - "Invertir estado 1 y estado 2 da el recíproco del resultado correcto"
`;export{e as default};
