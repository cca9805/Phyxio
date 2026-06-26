const a=`version: 1.0.0\r
leaf_id: adiabatico\r
ui:\r
  default_formula: primer_principio_adiabatico\r
formulas:\r
  - id: primer_principio_adiabatico\r
    title:\r
      es: Primer principio en proceso adiabatico\r
      en: First law in adiabatic process\r
    equation: DeltaU = -W\r
    latex: "\\\\Delta U = -W"\r
    rearrangements:\r
      - target: DeltaU\r
        equation: DeltaU = -W\r
        latex: "\\\\Delta U = -W"\r
      - target: W\r
        equation: W = -DeltaU\r
        latex: "W = - \\\\Delta U"\r
    category: fundamental\r
    relation_type: definition\r
    physical_meaning:\r
      es: En un proceso adiabatico no hay intercambio de calor, por lo que todo el trabajo realizado proviene de la energia interna del gas o va hacia ella.\r
      en: In an adiabatic process there is no heat exchange, so all work done comes from or goes into the internal energy of the gas.\r
    constraints: [Q = 0, gas en recipiente aislado termicamente, proceso suficientemente rapido o paredes adiabatas]\r
    validity:\r
      es: Valida cuando el intercambio de calor con el entorno es despreciable respecto al trabajo intercambiado.\r
      en: Valid when heat exchange with the surroundings is negligible compared to the exchanged work.\r
    dimension_check:\r
      es: "Ambos lados tienen dimension de energia \`[M L² T⁻²]\`."\r
      en: "Both sides have energy dimension \`[M L² T⁻²]\`."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in: [teoria, ejemplos, interpretacion]\r
    interpretation_tags: [energia_interna, trabajo, adiabatico, primer_principio]\r
    result_semantics:\r
      target: DeltaU\r
      kind: energy_balance\r
      sign_meaning:\r
        es: Negativo si el gas realiza trabajo (se expande); positivo si el entorno realiza trabajo sobre el gas (se comprime).\r
        en: Negative if the gas does work (expands); positive if the surroundings do work on the gas (compresses).\r
      absolute_value_meaning:\r
        es: Magnitud del cambio de energia interna producido exclusivamente por el trabajo mecanico.\r
        en: Magnitude of internal energy change produced exclusively by mechanical work.\r
    domain_checks:\r
      - condition: "W != 0"\r
        message:\r
          es: "Si el trabajo es nulo, la energia interna no cambia y el proceso podria ser adiabático e isocórico."\r
          en: "If work is zero, internal energy does not change and the process may be both adiabatic and isochoric."\r
    coherence_checks:\r
      - check: "DeltaU = -W implica que expansion adiabatica enfria el gas"\r
        es: "Para un gas ideal, expansion adiabatica produce descenso de temperatura."\r
        en: "For an ideal gas, adiabatic expansion produces a temperature decrease."\r
    graph_implications:\r
      - channel: pV_adiabat\r
        mapping: "La curva adiabatica en el diagrama pV es mas inclinada que la isoterma correspondiente."\r
    pedagogical_triggers:\r
      - error: "Aplicar el primer principio sin anular Q"\r
        detection: "DeltaU != -W"\r
        message:\r
          es: "En proceso adiabatico Q = 0, por lo que DeltaU = -W exclusivamente."\r
          en: "In an adiabatic process Q = 0, so DeltaU = -W exclusively."\r
\r
  - id: trabajo_adiabatico_ideal\r
    title:\r
      es: Trabajo en expansion adiabatica reversible de gas ideal\r
      en: Work in reversible adiabatic expansion of ideal gas\r
    equation: W = (p1*V1 - p2*V2) / (gamma - 1)\r
    latex: "W = \\\\frac{p_1 V_1 - p_2 V_2}{\\\\gamma - 1}"\r
    rearrangements:\r
      - target: W\r
        equation: W = (p1*V1 - p2*V2) / (gamma - 1)\r
        latex: "W = \\\\frac{p_1 V_1 - p_2 V_2}{\\\\gamma - 1}"\r
      - target: p2\r
        equation: p2 = (p1*V1 - W*(gamma-1)) / V2\r
        latex: "p_2 = \\\\frac{p_1 V_1 - W(\\\\gamma-1)}{V_2}"\r
    category: derived\r
    relation_type: integral_relation\r
    physical_meaning:\r
      es: El trabajo realizado por el gas en una expansion adiabatica reversible se calcula integrando la presión a lo largo de la curva adiabatica.\r
      en: The work done by the gas in a reversible adiabatic expansion is calculated by integrating pressure along the adiabatic curve.\r
    constraints: [gas ideal, proceso reversible, gamma conocido, presiones y volumenes de estado final e inicial conocidos]\r
    validity:\r
      es: Valida para gas ideal con calor especifico constante y proceso cuasiestatico adiabatico.\r
      en: Valid for ideal gas with constant specific heat and quasi-static adiabatic process.\r
    dimension_check:\r
      es: "p [M L⁻¹ T⁻²] por V [L³] da energia \`[M L² T⁻²]\`."\r
      en: "p [M L⁻¹ T⁻²] times V [L³] gives energy \`[M L² T⁻²]\`."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in: [teoria, ejemplos, interpretacion]\r
    interpretation_tags: [trabajo, expansion, gas_ideal, adiabatico]\r
    result_semantics:\r
      target: W\r
      kind: work_output\r
      sign_meaning:\r
        es: Positivo si el gas realiza trabajo neto sobre el entorno (expansion); negativo en compresion.\r
        en: Positive if the gas does net work on the surroundings (expansion); negative in compression.\r
      absolute_value_meaning:\r
        es: Energia mecanica transferida al entorno por expansion sin calor.\r
        en: Mechanical energy transferred to surroundings by expansion without heat.\r
    domain_checks:\r
      - condition: "gamma > 1"\r
        message:\r
          es: "El coeficiente adiabatico debe ser mayor que 1 para gases reales."\r
          en: "The adiabatic coefficient must be greater than 1 for real gases."\r
    coherence_checks:\r
      - check: "W positivo implica descenso de p y aumento de V en expansion"\r
        es: "Coherente con expansion adiabatica: el gas hace trabajo y se enfria."\r
        en: "Consistent with adiabatic expansion: the gas does work and cools."\r
    graph_implications:\r
      - channel: pV_adiabat\r
        mapping: "El area bajo la curva adiabatica entre V1 y V2 representa W."\r
    pedagogical_triggers:\r
      - error: "Confundir con trabajo isotermico"\r
        detection: "gamma == 1"\r
        message:\r
          es: "Gamma igual a 1 corresponde a proceso isotermico, no adiabatico. Revisa el tipo de proceso."\r
          en: "Gamma equal to 1 corresponds to an isothermal process, not adiabatic. Check the process type."\r
\r
  - id: ley_adiabata_presion_volumen\r
    title:\r
      es: Ecuacion de la adiabata en presion y volumen\r
      en: Adiabat equation in pressure and volume\r
    equation: p1 * V1^gamma = p2 * V2^gamma\r
    latex: "p_1 V_1^{\\\\gamma} = p_2 V_2^{\\\\gamma}"\r
    rearrangements:\r
      - target: p2\r
        equation: p2 = p1 * (V1/V2)^gamma\r
        latex: "p_2 = p_1 \\\\left(\\\\frac{V_1}{V_2}\\\\right)^{\\\\gamma}"\r
      - target: V2\r
        equation: V2 = V1 * (p1/p2)^(1/gamma)\r
        latex: "V_2 = V_1 \\\\left(\\\\frac{p_1}{p_2}\\\\right)^{1/\\\\gamma}"\r
      - target: gamma\r
        equation: gamma = log(p1/p2) / log(V2/V1)\r
        latex: "\\\\gamma = \\\\frac{\\\\ln(p_1/p_2)}{\\\\ln(V_2/V_1)}"\r
    category: fundamental\r
    relation_type: constitutive_relation\r
    physical_meaning:\r
      es: En una expansion o compresion adiabatica reversible de gas ideal, el producto de la presión por el volumen elevado al coeficiente adiabatico permanece constante.\r
      en: In a reversible adiabatic expansion or compression of an ideal gas, the product of pressure and volume raised to the adiabatic coefficient remains constant.\r
    constraints: [gas ideal, proceso reversible, gamma constante]\r
    validity:\r
      es: Valida para gas ideal monatomico, diatomico o poliatom con gamma conocido y proceso cuasiestatico.\r
      en: Valid for monatomic, diatomic or polyatomic ideal gas with known gamma and quasi-static process.\r
    dimension_check:\r
      es: "p [M L⁻¹ T⁻²] por V^gamma [L^(3 gamma)] da una constante con dimension que se preserva entre estados."\r
      en: "p [M L⁻¹ T⁻²] times V^gamma [L^(3 gamma)] gives a dimensionally preserved constant between states."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in: [teoria, ejemplos, interpretacion]\r
    interpretation_tags: [adiabata, presion, volumen, gas_ideal, curva_pV]\r
    result_semantics:\r
      target: p2\r
      kind: state_variable\r
      sign_meaning:\r
        es: La presión final es siempre positiva; el signo no es diagnostico en este contexto.\r
        en: Final pressure is always positive; sign is not diagnostic in this context.\r
      absolute_value_meaning:\r
        es: Valor de presion del gas al final del proceso adiabatico reversible.\r
        en: Gas pressure value at the end of the reversible adiabatic process.\r
    domain_checks:\r
      - condition: "V2 > 0 and p2 > 0"\r
        message:\r
          es: "Presion y volumen deben ser positivos en todo estado del proceso."\r
          en: "Pressure and volume must be positive at every state of the process."\r
    coherence_checks:\r
      - check: "Si V2 > V1 entonces p2 < p1 en expansion adiabatica"\r
        es: "Coherente: expansion adiabatica reduce presion mas que la isoterma."\r
        en: "Consistent: adiabatic expansion lowers pressure more than the isotherm."\r
    graph_implications:\r
      - channel: pV_adiabat\r
        mapping: "La curva adiabatica es mas pronunciada que la isoterma en el diagrama pV porque gamma > 1."\r
    pedagogical_triggers:\r
      - error: "Confundir la adiabata con la isoterma en el diagrama pV"\r
        detection: "gamma == 1"\r
        message:\r
          es: "La adiabata tiene gamma > 1 y cae mas rapido que la isoterma. Comprueba el valor de gamma."\r
          en: "The adiabat has gamma > 1 and drops faster than the isotherm. Check the value of gamma."\r
\r
  - id: cambio_temperatura_adiabatico\r
    title:\r
      es: Cambio de temperatura en proceso adiabatico de gas ideal\r
      en: Temperature change in adiabatic process of ideal gas\r
    equation: T2 = T1 * (V1/V2)^(gamma - 1)\r
    latex: "T_2 = T_1 \\\\left(\\\\frac{V_1}{V_2}\\\\right)^{\\\\gamma - 1}"\r
    rearrangements:\r
      - target: T2\r
        equation: T2 = T1 * (V1/V2)^(gamma - 1)\r
        latex: "T_2 = T_1 \\\\left(\\\\frac{V_1}{V_2}\\\\right)^{\\\\gamma - 1}"\r
      - target: T1\r
        equation: T1 = T2 * (V2/V1)^(gamma - 1)\r
        latex: "T_1 = T_2 \\\\left(\\\\frac{V_2}{V_1}\\\\right)^{\\\\gamma - 1}"\r
      - target: DeltaT_ad\r
        equation: DeltaT_ad = T2 - T1\r
        latex: "\\\\Delta T = T_2 - T_1"\r
    category: derived\r
    relation_type: constitutive_relation\r
    physical_meaning:\r
      es: En una expansion adiabatica reversible, el gas se enfria porque el trabajo realizado proviene exclusivamente de su energia interna. En compresion, el gas se calienta.\r
      en: In a reversible adiabatic expansion, the gas cools because the work done comes exclusively from its internal energy. In compression, the gas heats up.\r
    constraints: [gas ideal, proceso reversible, gamma constante, estado inicial conocido]\r
    validity:\r
      es: Valida para gas ideal con calor especifico constante en proceso cuasiestatico adiabatico.\r
      en: Valid for ideal gas with constant specific heat in a quasi-static adiabatic process.\r
    dimension_check:\r
      es: "Ambos lados tienen dimension de temperatura \`[Theta]\`."\r
      en: "Both sides have temperature dimension \`[Theta]\`."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in: [teoria, ejemplos, interpretacion]\r
    interpretation_tags: [temperatura, cambio_termico, expansion, compresion, gas_ideal]\r
    result_semantics:\r
      target: T2\r
      kind: state_variable\r
      sign_meaning:\r
        es: T2 es temperatura absoluta, siempre positiva. Comparar con T1 indica si el proceso es expansion o compresion.\r
        en: T2 is absolute temperature, always positive. Comparing with T1 indicates whether the process is expansion or compression.\r
      absolute_value_meaning:\r
        es: Temperatura final del gas tras la expansion o compresion adiabatica.\r
        en: Final gas temperature after adiabatic expansion or compression.\r
    domain_checks:\r
      - condition: "T2 > 0"\r
        message:\r
          es: "La temperatura absoluta final debe ser positiva."\r
          en: "Final absolute temperature must be positive."\r
      - condition: "V2 != V1"\r
        message:\r
          es: "Si el volumen no cambia, no hay proceso adiabatico relevante; seria isocórico adiabatico con trabajo nulo."\r
          en: "If volume does not change, there is no relevant adiabatic process; it would be adiabatic isochoric with zero work."\r
    coherence_checks:\r
      - check: "Si V2 > V1 entonces T2 < T1 para gamma > 1"\r
        es: "Expansion adiabatica produce enfriamiento. Si T2 >= T1 con V2 > V1, revisar gamma o condicion adiabatica."\r
        en: "Adiabatic expansion produces cooling. If T2 >= T1 with V2 > V1, check gamma or adiabatic condition."\r
    graph_implications:\r
      - channel: TV_adiabat\r
        mapping: "En la curva T-V adiabatica, la temperatura decrece mas abruptamente que en una isoterma."\r
    pedagogical_triggers:\r
      - error: "Creer que la temperatura no cambia en proceso adiabatico"\r
        detection: "abs(T2 - T1) < 0.01 and V2 != V1"\r
        message:\r
          es: "En un proceso adiabatico con cambio de volumen, la temperatura cambia. Temperatura constante es proceso isotermico."\r
          en: "In an adiabatic process with volume change, temperature changes. Constant temperature is isothermal, not adiabatic."\r
`;export{a as default};
