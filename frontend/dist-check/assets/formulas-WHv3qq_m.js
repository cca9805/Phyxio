const e=`formulas:

  - id: newton_laplace
    title:
      es: Velocidad del sonido en un medio elástico (Newton-Laplace)
      en: Speed of sound in an elastic medium (Newton-Laplace)
    equation: "v_son = sqrt(B_mod / rho_med)"
    latex: "v = \\\\sqrt{\\\\frac{B}{\\\\rho}}"
    rearrangements:
      - target: v_son
        equation: "v_son = sqrt(B_mod / rho_med)"
        latex: "v = \\\\sqrt{\\\\frac{B}{\\\\rho}}"
      - target: B_mod
        equation: "B_mod = rho_med * v_son^2"
        latex: "B = \\\\rho\\\\,v^2"
      - target: rho_med
        equation: "rho_med = B_mod / v_son^2"
        latex: "\\\\rho = \\\\frac{B}{v^2}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La velocidad de propagación de una onda acústica en cualquier medio material es la raíz cuadrada del cociente entre la rigidez del medio (módulo de compresibilidad B) y su inercia (densidad rho). Medios más rígidos propagan el sonido más rápido; medios más densos lo propagan más lento."
      en: "The propagation speed of an acoustic wave in any material medium is the square root of the ratio between the medium's stiffness (bulk modulus B) and its inertia (density rho). Stiffer media propagate sound faster; denser media propagate it slower."
    constraints:
      - "Medio homogéneo e isótropo"
      - "Amplitudes de oscilación pequeñas (régimen lineal)"
      - "B y rho son valores del medio en equilibrio"
    validity:
      es: "Válida para cualquier medio continuo en el límite de pequeñas amplitudes. Para gases, B debe ser el módulo adiabático (gamma * P_eq), no el isotérmico (P_eq). Para sólidos, B es el verdadero módulo de compresibilidad volumétrica."
      en: "Valid for any continuous medium in the small-amplitude limit. For gases, B must be the adiabatic modulus (gamma * P_eq), not the isothermal one (P_eq). For solids, B is the true volumetric bulk modulus."
    dimension_check: "[L T⁻¹] = sqrt([M L⁻¹ T⁻²] / [M L⁻³]) = sqrt([L² T⁻²]) = [L T⁻¹] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "teoria.md (Nivel formal)"
      - "ejemplos.md"
      - "interpretacion.yaml (target v_son, B_mod, rho_med)"
    interpretation_tags:
      - "rigidez_inercia"
      - "velocidad_propagacion"
      - "medio_elastico"
    result_semantics:
      target: v_son
      kind: scalar_unsigned
      sign_meaning:
        es: "La velocidad del sonido es siempre positiva."
        en: "The speed of sound is always positive."
      absolute_value_meaning:
        es: "Indica qué tan rápido se propaga la perturbación de presión en el medio. Valores típicos: 340 m/s en aire, 1480 m/s en agua, 5100 m/s en acero."
        en: "Indicates how fast the pressure perturbation propagates in the medium. Typical values: 340 m/s in air, 1480 m/s in water, 5100 m/s in steel."
    domain_checks:
      - "B_mod > 0"
      - "rho_med > 0"
    coherence_checks:
      - "v_son en gases < v_son en líquidos < v_son en sólidos para medios habituales"
    graph_implications:
      - "En gráfica Coord de v_son vs rho_med (para B fijo): curva decreciente proporcional a 1/sqrt(rho)"
      - "En gráfica Coord de v_son vs B_mod (para rho fija): curva creciente proporcional a sqrt(B)"
    pedagogical_triggers:
      - "Si v_son calculada es menor que 300 m/s para un gas a temperatura ambiente: revisar si B es adiabático o isotérmico"
      - "Si v_son calculada para agua es similar a la del aire: revisar unidades de B (Pa, no MPa)"

  - id: v_gas_ideal
    title:
      es: Velocidad del sonido en gas ideal
      en: Speed of sound in an ideal gas
    equation: "v_son = sqrt(gamma_gas * R_gas * T_abs / M_mol)"
    latex: "v = \\\\sqrt{\\\\frac{\\\\gamma R T}{M}}"
    rearrangements:
      - target: v_son
        equation: "v_son = sqrt(gamma_gas * R_gas * T_abs / M_mol)"
        latex: "v = \\\\sqrt{\\\\frac{\\\\gamma R T}{M}}"
      - target: T_abs
        equation: "T_abs = v_son^2 * M_mol / (gamma_gas * R_gas)"
        latex: "T = \\\\frac{v^2 M}{\\\\gamma R}"
      - target: M_mol
        equation: "M_mol = gamma_gas * R_gas * T_abs / v_son^2"
        latex: "M = \\\\frac{\\\\gamma R T}{v^2}"
    category: fundamental
    relation_type: derived
    physical_meaning:
      es: "Para un gas ideal, la velocidad del sonido depende solo de la temperatura absoluta, el índice adiabático y la masa molar del gas. Es independiente de la presión de equilibrio, porque al aumentar la presión, el módulo B y la densidad rho aumentan en la misma proporción y sus efectos se cancelan."
      en: "For an ideal gas, the speed of sound depends only on the absolute temperature, the adiabatic index, and the molar mass of the gas. It is independent of the equilibrium pressure, because when pressure increases, both the modulus B and the density rho increase in the same proportion and their effects cancel."
    constraints:
      - "Gas ideal (interacciones moleculares despreciables)"
      - "Proceso adiabático (oscilaciones acústicas suficientemente rápidas)"
      - "T_abs en kelvin"
      - "M_mol en kg/mol"
      - "R_gas = 8.314 J/(mol·K)"
    validity:
      es: "Muy buena aproximación para gases reales a presiones y temperaturas ordinarias (1 atm, 200-400 K). Falla para gases a muy alta presión o muy baja temperatura, donde las interacciones moleculares son importantes."
      en: "Very good approximation for real gases at ordinary pressures and temperatures (1 atm, 200-400 K). Fails for gases at very high pressure or very low temperature, where molecular interactions are important."
    dimension_check: "[L T⁻¹] = sqrt([1]·[M L² T⁻² mol⁻¹ Θ⁻¹]·[Θ]·[mol M⁻¹]) = sqrt([L² T⁻²]) = [L T⁻¹] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "teoria.md (Nivel formal)"
      - "ejemplos.md"
      - "interpretacion.yaml (targets v_son, T_abs, M_mol)"
    interpretation_tags:
      - "gas_ideal"
      - "temperatura"
      - "velocidad_sonido_aire"
    result_semantics:
      target: v_son
      kind: scalar_unsigned
      sign_meaning:
        es: "La velocidad del sonido en un gas ideal es siempre positiva."
        en: "The speed of sound in an ideal gas is always positive."
      absolute_value_meaning:
        es: "Para aire a 20 °C (293 K): v_son ≈ 343 m/s. Aumenta con la temperatura como la raíz cuadrada de T_abs."
        en: "For air at 20 °C (293 K): v_son ≈ 343 m/s. Increases with temperature as the square root of T_abs."
    domain_checks:
      - "T_abs > 0 K"
      - "M_mol > 0 kg/mol"
      - "gamma_gas > 1"
    coherence_checks:
      - "Para aire (gamma=1.4, M=0.029 kg/mol) a 0 °C (273 K): v_son ≈ 331 m/s"
      - "Para helio (gamma=5/3, M=0.004 kg/mol) a 20 °C (293 K): v_son ≈ 970 m/s"
    graph_implications:
      - "En gráfica Coord de v_son vs T_abs: curva de raíz cuadrada, creciente y cóncava hacia abajo"
      - "En gráfica Coord de v_son vs M_mol (para T y gamma fijos): curva decreciente proporcional a 1/sqrt(M)"
    pedagogical_triggers:
      - "Si v_son calculada para aire resulta ~18% menor que el valor experimental: el alumno usó el módulo isotérmico (sin factor gamma)"
      - "Si T_abs resulta negativa o muy baja al despejar: revisar si se usó temperatura en °C en lugar de K"

  - id: v_son_temperatura_aire
    title:
      es: Velocidad del sonido en aire en función de la temperatura (aproximación lineal)
      en: Speed of sound in air as a function of temperature (linear approximation)
    equation: "v_son = 331.3 + 0.606 * T_C"
    latex: "v \\\\approx 331.3 + 0.606\\\\,T_{\\\\!\\\\circ\\\\mathrm{C}} \\\\quad [\\\\mathrm{m/s}]"
    rearrangements:
      - target: v_son
        equation: "v_son = 331.3 + 0.606 * T_C"
        latex: "v \\\\approx 331.3 + 0.606\\\\,T_{\\\\!\\\\circ\\\\mathrm{C}}"
      - target: T_abs
        equation: "T_abs = (v_son - 331.3) / 0.606 + 273.15"
        latex: "T = \\\\frac{v - 331.3}{0.606} + 273.15"
    category: approximation
    relation_type: empirical
    physical_meaning:
      es: "Aproximación lineal de la dependencia de v_son en aire con la temperatura Celsius, válida en el rango de temperaturas atmosféricas ordinarias. Se obtiene expandiendo la raíz cuadrada de T_abs alrededor de 0 °C (273.15 K) al primer orden."
      en: "Linear approximation of the dependence of v_son in air on Celsius temperature, valid in the range of ordinary atmospheric temperatures. Obtained by expanding the square root of T_abs around 0 °C (273.15 K) to first order."
    constraints:
      - "Válida solo para aire seco a 1 atm"
      - "T_C en grados Celsius"
      - "Rango recomendado: -20 °C a +50 °C"
    validity:
      es: "Error menor del 0.5 % en el rango -20 °C a +50 °C. Fuera de ese rango, usar la fórmula exacta con T_abs."
      en: "Error less than 0.5 % in the range -20 °C to +50 °C. Outside that range, use the exact formula with T_abs."
    dimension_check: "[m/s] = [m/s] + [m/s/°C] × [°C] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "teoria.md (Nivel esencial)"
      - "ejemplos.md"
      - "interpretacion.yaml (target v_son, T_abs)"
    interpretation_tags:
      - "temperatura_celsius"
      - "aire_atmosferico"
      - "aproximacion_practica"
    result_semantics:
      target: v_son
      kind: scalar_unsigned
      sign_meaning:
        es: "La velocidad del sonido en aire es siempre positiva y mayor que 331 m/s en condiciones ordinarias."
        en: "The speed of sound in air is always positive and greater than 331 m/s under ordinary conditions."
      absolute_value_meaning:
        es: "Valores típicos: 331 m/s a 0 °C, 343 m/s a 20 °C, 353 m/s a 35 °C. Cada grado Celsius añade aproximadamente 0.6 m/s."
        en: "Typical values: 331 m/s at 0 °C, 343 m/s at 20 °C, 353 m/s at 35 °C. Each degree Celsius adds approximately 0.6 m/s."
    domain_checks:
      - "T_C entre -20 y +50 para validez de la aproximación"
    coherence_checks:
      - "A 0 °C: 331.3 m/s ✓"
      - "A 20 °C: 331.3 + 0.606*20 = 343.4 m/s ✓"
    graph_implications:
      - "En gráfica Coord de v_son vs T_C: línea recta con pendiente 0.606 m/s/°C e intercept 331.3 m/s"
    pedagogical_triggers:
      - "Si el alumno obtiene un valor exactamente 331 m/s independientemente de la temperatura: está ignorando la dependencia con T"
      - "Si el resultado difiere significativamente del obtenido con la fórmula exacta: verificar que T_C está dentro del rango de validez"
`;export{e as default};
