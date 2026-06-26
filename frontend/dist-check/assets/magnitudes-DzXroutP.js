const e=`magnitudes:

  - id: v_son
    symbol: "v"
    nombre:
      es: Velocidad del sonido
      en: Speed of sound
    descripcion:
      es: "Velocidad de propagación de la perturbación de presión acústica a través del medio material. Depende de las propiedades elásticas del medio y de su densidad."
      en: "Propagation speed of the acoustic pressure perturbation through the material medium. Depends on the elastic properties of the medium and its density."
    unidad_si: "m/s"
    dimension: "[L T⁻¹]"
    is_vector: false
    components: []
    category: core_physical_quantity
    physical_role: core_physical_quantity
    used_in:
      - "Fórmula de Newton-Laplace para gases y medios elásticos"
      - "Relación entre velocidad, frecuencia y longitud de onda"
      - "Número de Mach"
    common_mistake: "Confundir la velocidad del sonido con la velocidad de las partículas del medio (velocidad de desplazamiento de partícula). La primera es la velocidad de propagación de la onda; la segunda es la velocidad con que oscilan las partículas del medio, que es mucho menor."
    typical_range: "340 m/s en aire a 20 °C; 1480 m/s en agua a 25 °C; 5100 m/s en acero"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La velocidad del sonido es siempre positiva; es una magnitud escalar no negativa."
        en: "The speed of sound is always positive; it is a non-negative scalar quantity."
    zero_behavior:
      allowed: false
      meaning:
        es: "Velocidad del sonido nula implicaría ausencia de propagación, lo que no es físicamente posible en un medio material con propiedades elásticas."
        en: "Zero speed of sound would imply no propagation, which is not physically possible in a material medium with elastic properties."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, 6000] m/s en medios materiales ordinarios"
    interpretation_role:
      primary_for:
        - "Calcular la longitud de onda de un sonido dado su frecuencia"
        - "Determinar el tiempo de llegada de un frente de onda a una distancia dada"
        - "Calcular el número de Mach de un móvil respecto al sonido"
      secondary_for:
        - "Estimar la temperatura del gas a partir de la velocidad medida del sonido"
    graph_binding:
      channels:
        - "pendiente de la gráfica distancia vs tiempo de llegada del frente de onda en Coord"
    pedagogical_notes:
      es: "La velocidad del sonido es una propiedad del medio, no de la fuente. Una fuente más potente no produce sonido más rápido; produce más amplitud. Este error conceptual es muy frecuente. En un gas ideal, v_son no depende de la frecuencia ni de la amplitud: todas las frecuencias audibles viajan a la misma velocidad en un gas ideal, lo que permite que el sonido se perciba sin distorsión de timbre a distancia."
      en: "The speed of sound is a property of the medium, not the source. A more powerful source does not produce faster sound; it produces more amplitude. This conceptual error is very common. In an ideal gas, v_son does not depend on frequency or amplitude: all audible frequencies travel at the same speed in an ideal gas, allowing sound to be perceived without timbre distortion at a distance."

  - id: B_mod
    symbol: "B"
    nombre:
      es: Módulo de compresibilidad del medio
      en: Bulk modulus of the medium
    descripcion:
      es: "Medida de la resistencia del medio a la compresión uniforme. Es la presión adicional necesaria para producir una reducción relativa de volumen unitaria. Para gases, es proporcional a la presión de equilibrio."
      en: "Measure of the medium's resistance to uniform compression. It is the additional pressure required to produce a unit relative volume reduction. For gases, it is proportional to the equilibrium pressure."
    unidad_si: Pa
    dimension: "[M L⁻¹ T⁻²]"
    is_vector: false
    components: []
    category: parameter
    physical_role: material_property
    used_in:
      - "Fórmula de Newton-Laplace"
      - "Expresión de la velocidad del sonido en medios elásticos generales"
    common_mistake: "Confundir el módulo de compresibilidad B con el módulo de Young E. El módulo de Young describe deformaciones longitudinales en sólidos; B describe compresiones volumétricas. Para ondas sonoras en fluidos se usa B; para ondas en barras delgadas de sólidos se usa E."
    typical_range: "142 kPa para aire a 1 atm y 20 °C (módulo adiabático); 2.2 GPa para agua a 20 °C; 160 GPa para acero"
    sign_behavior:
      has_sign: false
      meaning:
        es: "B es siempre positivo: todos los medios materiales se resisten a la compresión."
        en: "B is always positive: all material media resist compression."
    zero_behavior:
      allowed: false
      meaning:
        es: "B nulo implicaría compresibilidad infinita y velocidad del sonido nula, lo que no ocurre en ningún medio material."
        en: "Zero B would imply infinite compressibility and zero speed of sound, which does not occur in any material medium."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[100 kPa, 400 GPa] según el medio"
    interpretation_role:
      primary_for:
        - "Calcular v_son en un medio dadas sus propiedades elásticas"
        - "Comparar la rigidez acústica de distintos medios"
      secondary_for:
        - "Estimar el módulo adiabático de un gas a partir de su velocidad de sonido medida"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El módulo de compresibilidad B es la magnitud que conecta la física macroscópica del medio (propiedades elásticas, estructura molecular) con la velocidad de propagación acústica. Un medio más rígido (mayor B) transmite el sonido más rápido. Esto explica por qué el sonido viaja más rápido en sólidos que en gases, pese a que los sólidos son más densos."
      en: "The bulk modulus B is the quantity that connects the macroscopic physics of the medium (elastic properties, molecular structure) with the acoustic propagation speed. A stiffer medium (higher B) transmits sound faster. This explains why sound travels faster in solids than in gases, even though solids are denser."

  - id: rho_med
    symbol: "\\\\rho"
    nombre:
      es: Densidad del medio
      en: Density of the medium
    descripcion:
      es: "Masa por unidad de volumen del medio en equilibrio. A mayor densidad, mayor inercia del medio y menor velocidad del sonido para el mismo módulo de compresibilidad."
      en: "Mass per unit volume of the medium at equilibrium. Greater density means greater inertia of the medium and lower speed of sound for the same bulk modulus."
    unidad_si: "kg/m³"
    dimension: "[M L⁻³]"
    is_vector: false
    components: []
    category: parameter
    physical_role: material_property
    used_in:
      - "Fórmula de Newton-Laplace"
      - "Cálculo de la impedancia acústica"
    common_mistake: "Asumir que un medio más denso transmite el sonido más rápido porque 'hay más materia'. En realidad, la densidad aumenta la inercia y reduce la velocidad del sonido. Es el módulo de compresibilidad B el que la aumenta. El equilibrio entre rigidez e inercia determina v_son."
    typical_range: "1.20 kg/m³ para aire a 20 °C; 1000 kg/m³ para agua; 7850 kg/m³ para acero"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La densidad es siempre positiva."
        en: "The density is always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Densidad nula implicaría vacío, donde el sonido no se propaga."
        en: "Zero density would imply vacuum, where sound does not propagate."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, 20000] kg/m³ para medios materiales ordinarios"
    interpretation_role:
      primary_for:
        - "Calcular v_son mediante la fórmula de Newton-Laplace"
        - "Calcular la impedancia acústica del medio"
      secondary_for:
        - "Evaluar el efecto de cambios de densidad (por ejemplo, variación de presión en un gas) sobre v_son"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La densidad actúa como factor de inercia en la propagación del sonido: cuanto mayor es rho, más difícil es acelerar las partículas del medio y más lenta es la propagación. Sin embargo, un gas más comprimido (mayor presión) es simultáneamente más denso y más rígido (mayor B), y los dos efectos se cancelan en el caso ideal, haciendo que v_son en un gas ideal sea independiente de la presión de equilibrio."
      en: "Density acts as an inertia factor in sound propagation: the greater rho, the harder it is to accelerate the medium particles and the slower the propagation. However, a more compressed gas (higher pressure) is simultaneously denser and stiffer (higher B), and the two effects cancel in the ideal case, making v_son in an ideal gas independent of the equilibrium pressure."

  - id: T_abs
    symbol: "T"
    nombre:
      es: Temperatura absoluta del gas
      en: Absolute temperature of the gas
    descripcion:
      es: "Temperatura del gas en kelvin. En un gas ideal, la velocidad del sonido es proporcional a la raíz cuadrada de la temperatura absoluta."
      en: "Temperature of the gas in kelvin. In an ideal gas, the speed of sound is proportional to the square root of the absolute temperature."
    unidad_si: K
    dimension: "[Θ]"
    is_vector: false
    components: []
    category: parameter
    physical_role: thermodynamic_parameter
    used_in:
      - "Fórmula de velocidad del sonido en gas ideal en función de la temperatura"
      - "Dependencia de v_son con la temperatura en aire"
    common_mistake: "Usar la temperatura en grados Celsius en la fórmula de la raíz cuadrada. La temperatura en la fórmula de v_son debe estar siempre en kelvin (T_K = T_C + 273.15). Usar grados Celsius produce resultados completamente erróneos, especialmente a temperaturas próximas a 0 °C."
    typical_range: "253 K (-20 °C, aire ártico) a 323 K (50 °C, desierto)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La temperatura absoluta es siempre positiva (mayor que cero absoluto)."
        en: "Absolute temperature is always positive (greater than absolute zero)."
    zero_behavior:
      allowed: false
      meaning:
        es: "T_abs nula corresponde al cero absoluto, inalcanzable por el tercer principio de la termodinámica."
        en: "Zero T_abs corresponds to absolute zero, unattainable by the third law of thermodynamics."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[200, 400] K para condiciones atmosféricas ordinarias"
    interpretation_role:
      primary_for:
        - "Calcular v_son en aire a distintas temperaturas"
        - "Estimar la temperatura del aire a partir de la velocidad del sonido medida"
      secondary_for:
        - "Comparar la velocidad del sonido en distintas condiciones climáticas"
    graph_binding:
      channels:
        - "eje_x en gráfica Coord de v_son frente a T_abs; curva de raíz cuadrada"
    pedagogical_notes:
      es: "La dependencia de v_son con la raíz cuadrada de T_abs tiene consecuencias directas. En verano, a 35 °C (308 K), el sonido viaja a unos 352 m/s; en invierno, a -10 °C (263 K), a unos 325 m/s. La diferencia es de casi el 8 %, suficiente para afectar la afinación de instrumentos de viento (su longitud acústica efectiva cambia con la temperatura del aire interior) y la distancia a la que se escucha un eco o se calcula el alcance de un sistema sonar."
      en: "The dependence of v_son on the square root of T_abs has direct consequences. In summer at 35 °C (308 K), sound travels at about 352 m/s; in winter at -10 °C (263 K), at about 325 m/s. The difference is nearly 8 %, enough to affect the tuning of wind instruments (their effective acoustic length changes with the temperature of the air inside) and the distance at which an echo is heard or a sonar system calculates range."

  - id: gamma_gas
    symbol: "\\\\gamma"
    nombre:
      es: Índice adiabático del gas
      en: Adiabatic index of the gas
    descripcion:
      es: "Razón entre la capacidad calorífica a presión constante y la capacidad calorífica a volumen constante del gas. Para el aire diatómico, vale aproximadamente 1.4 a temperaturas ordinarias."
      en: "Ratio of the heat capacity at constant pressure to the heat capacity at constant volume of the gas. For diatomic air, it is approximately 1.4 at ordinary temperatures."
    unidad_si: adimensional
    dimension: "[1]"
    is_vector: false
    components: []
    category: parameter
    physical_role: material_property
    used_in:
      - "Fórmula de la velocidad del sonido en gas ideal (corrección de Laplace)"
      - "Cálculo del módulo adiabático del gas"
    common_mistake: "Usar el módulo isotérmico (sin el factor gamma) en lugar del módulo adiabático para calcular v_son. Newton cometió este error (obtuvo un valor un 18 % menor que el medido); Laplace lo corrigió al reconocer que las compresiones acústicas son adiabáticas, no isotérmicas."
    typical_range: "5/3 ≈ 1.667 para gases monoatómicos (He, Ar); 7/5 = 1.4 para gases diatómicos (N2, O2, aire); próximo a 1 para gases poliatómicos complejos"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El índice adiabático es siempre mayor que 1."
        en: "The adiabatic index is always greater than 1."
    zero_behavior:
      allowed: false
      meaning:
        es: "Gamma nunca es cero ni menor que 1; la termodinámica impone gamma mayor que 1."
        en: "Gamma is never zero or less than 1; thermodynamics requires gamma greater than 1."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1.0, 1.7] para gases ordinarios"
    interpretation_role:
      primary_for:
        - "Calcular la corrección de Laplace al resultado de Newton para v_son en un gas"
        - "Distinguir si las compresiones acústicas son adiabáticas o isotérmicas"
      secondary_for:
        - "Calcular el módulo adiabático efectivo del gas: B_ad = gamma * P_eq"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El índice adiabático gamma es el factor de corrección histórico más importante de la acústica. Newton predijo v_son = sqrt(P/rho); Laplace mostró que la fórmula correcta es v_son = sqrt(gamma*P/rho) porque las oscilaciones acústicas son tan rápidas que no hay tiempo para que el calor fluya entre compromisos y rarefacciones. La corrección de gamma^(1/2) para el aire da un factor de raíz de 1.4 ≈ 1.183, que explica la discrepancia del 18 % que Newton observó entre su predicción y las mediciones experimentales."
      en: "The adiabatic index gamma is the most important historical correction factor in acoustics. Newton predicted v_son = sqrt(P/rho); Laplace showed that the correct formula is v_son = sqrt(gamma*P/rho) because acoustic oscillations are so fast that there is no time for heat to flow between compressions and rarefactions. The correction of gamma^(1/2) for air gives a factor of sqrt(1.4) ≈ 1.183, which explains the 18 % discrepancy Newton observed between his prediction and experimental measurements."

  - id: M_mol
    symbol: "M"
    nombre:
      es: Masa molar del gas
      en: Molar mass of the gas
    descripcion:
      es: "Masa de un mol de moléculas del gas, en kg/mol. Para el aire seco, la masa molar efectiva es aproximadamente 0.029 kg/mol."
      en: "Mass of one mole of gas molecules, in kg/mol. For dry air, the effective molar mass is approximately 0.029 kg/mol."
    unidad_si: "kg/mol"
    dimension: "[M N⁻¹]"
    is_vector: false
    components: []
    category: parameter
    physical_role: material_property
    used_in:
      - "Fórmula de la velocidad del sonido en gas ideal expresada con la constante universal de los gases"
    common_mistake: "Usar la masa molar en g/mol en lugar de kg/mol. La constante universal de los gases R vale 8.314 J/(mol·K); si M se introduce en g/mol, el resultado de v_son estará en unidades inconsistentes y será erróneo por un factor de sqrt(1000) ≈ 31.6."
    typical_range: "0.004 kg/mol para He; 0.028 kg/mol para N2; 0.029 kg/mol para aire seco; 0.032 kg/mol para O2"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La masa molar es siempre positiva."
        en: "The molar mass is always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Masa molar nula no tiene significado físico."
        en: "Zero molar mass has no physical meaning."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0.002, 0.300] kg/mol para gases ordinarios"
    interpretation_role:
      primary_for:
        - "Calcular v_son en distintos gases (helio, hidrógeno, aire) usando la forma con R y T"
        - "Explicar por qué la voz en helio es aguda (mayor v_son, mayor longitud de onda para la misma frecuencia resonante)"
      secondary_for:
        - "Comparar la velocidad del sonido en mezclas de gases"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La masa molar explica por qué el sonido viaja más rápido en gases ligeros. En helio (M = 0.004 kg/mol), v_son es aproximadamente 970 m/s, casi tres veces la del aire. Por eso cuando alguien respira helio, los resonancias del tracto vocal se desplazan hacia frecuencias más altas (porque la longitud de onda de los armónicos aumenta con v_son) y la voz suena aguda y caricaturesca. El efecto es sobre el timbre (posición de las formantes), no sobre la frecuencia fundamental de las cuerdas vocales."
      en: "The molar mass explains why sound travels faster in lighter gases. In helium (M = 0.004 kg/mol), v_son is approximately 970 m/s, almost three times that of air. This is why when someone breathes helium, the resonances of the vocal tract shift to higher frequencies (because the wavelength of harmonics increases with v_son) and the voice sounds high-pitched and cartoonish. The effect is on timbre (formant position), not on the fundamental frequency of the vocal cords."
`;export{e as default};
