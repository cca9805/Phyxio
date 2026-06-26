const e=`magnitudes:

  - id: S
    symbol: S
    nombre:
      es: Entropía
      en: Entropy
    descripcion:
      es: "Función de estado termodinámica que cuantifica el grado de dispersión de la energía en un sistema. Definida por Clausius como la integral del calor reversible dividido por la temperatura absoluta. Es una magnitud extensiva: aumenta con el tamaño del sistema."
      en: "Thermodynamic state function that quantifies the degree of energy dispersal in a system. Defined by Clausius as the integral of reversible heat divided by absolute temperature. It is an extensive quantity: it increases with system size."
    unidad_si: "J/K"
    dimension: "[M L^2 T^-2 Θ^-1]"
    is_vector: false
    components: []
    category: state
    physical_role: "Magnitud de estado que cuantifica la dispersión energética y define la flecha del tiempo termodinámica."
    used_in:
      - definición de la segunda ley de la termodinámica
      - ciclo de Carnot y eficiencia máxima
      - criterio de espontaneidad de procesos
      - termodinámica estadística (fórmula de Boltzmann)
      - balance de entropía en sistemas abiertos
    common_mistake: "Confundir S con DeltaS: S es el valor absoluto de la función de estado en un instante dado, mientras que DeltaS es el cambio entre dos estados. Los valores absolutos de S requieren el tercer principio como referencia (S→0 cuando T→0 K)."
    typical_range: "Para una mol de gas ideal monoatómico a 298 K: S ≈ 150 J/(mol·K). Para sólidos cristalinos a 298 K: 5–50 J/(mol·K). Para gases: 150–250 J/(mol·K). Para líquidos: 50–200 J/(mol·K)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "S es una magnitud definida como positiva por el tercer principio (S ≥ 0 para sistemas en equilibrio, con S → 0 solo en el cero absoluto). No existe entropía negativa en termodinámica clásica de equilibrio."
        en: "S is defined as a non-negative quantity by the third law (S ≥ 0 for systems in equilibrium, with S → 0 only at absolute zero). Negative entropy does not exist in classical equilibrium thermodynamics."
    zero_behavior:
      allowed: true
      meaning:
        es: "S → 0 solo en el límite del cero absoluto (0 K) para un cristal perfecto, según el tercer principio de la termodinámica. En la práctica, ningún sistema macroscópico alcanza S = 0."
        en: "S → 0 only in the absolute zero limit (0 K) for a perfect crystal, according to the third law of thermodynamics. In practice, no macroscopic system reaches S = 0."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, +∞)"
    interpretation_role:
      primary_for:
        - definicion_entropia_clausius
        - entropia_isotermica
      secondary_for:
        - todos los procesos termodinámicos donde S es estado inicial o final
    graph_binding:
      channels:
        - axis: y
          graph_type: Coord
          role: "S como ordenada en diagramas S-T o T-S; el área bajo la curva T-S es el calor intercambiado en el proceso."
        - axis: state_variable
          graph_type: Svg
          role: "S como variable de estado en diagramas de ciclos termodinámicos (diagrama T-S del ciclo de Carnot)."
    pedagogical_notes:
      es: "La entropía es la magnitud termodinámica conceptualmente más difícil de la física clásica. El error más frecuente en secundaria es intentar 'visualizarla' como desorden físico o como algo que 'se acumula' en los objetos calientes. La clave pedagógica es partir de la definición operativa de Clausius: DeltaS = Q_rev / T para un proceso isotérmico reversible. Esta definición es calculable, verificable experimentalmente y conecta directamente con la segunda ley. La interpretación como dispersión energética es la más general y correcta: S aumenta cuando la energía se distribuye entre más microestados, lo que explica por qué el calor fluye espontáneamente de caliente a frío (hacia más dispersión)."
      en: "Entropy is conceptually the most difficult thermodynamic quantity in classical physics. The most frequent error at secondary level is trying to 'visualise' it as physical disorder or as something that 'accumulates' in hot objects. The key pedagogical approach is to start from the operational Clausius definition: DeltaS = Q_rev / T for a reversible isothermal process. This definition is calculable, experimentally verifiable, and connects directly to the second law. The interpretation as energy dispersal is the most general and correct one: S increases when energy is distributed among more microstates, which explains why heat flows spontaneously from hot to cold (towards greater dispersal)."

  - id: DeltaS
    symbol: "ΔS"
    nombre:
      es: Variación de entropía
      en: Entropy change
    descripcion:
      es: "Cambio de entropía entre el estado final e inicial de un proceso termodinámico. Magnitud de proceso, no de estado. Es la magnitud directamente calculable a partir del calor reversible y la temperatura absoluta según la definición de Clausius."
      en: "Change in entropy between the final and initial state of a thermodynamic process. A process quantity, not a state quantity. It is the directly calculable magnitude from reversible heat and absolute temperature according to the Clausius definition."
    unidad_si: "J/K"
    dimension: "[M L^2 T^-2 Θ^-1]"
    is_vector: false
    components: []
    category: derived
    physical_role: "Magnitud de proceso que cuantifica el cambio de dispersión energética y determina si el proceso es espontáneo (DeltaS_universo > 0), reversible (DeltaS_universo = 0) o imposible (DeltaS_universo < 0)."
    used_in:
      - criterio de espontaneidad de la segunda ley
      - cálculo de entropía en procesos isotérmicos reversibles
      - balance de entropía en ciclos termodinámicos
      - entropía de mezcla y reacciones químicas
      - diseño de motores térmicos y refrigeradores
    common_mistake: "El error más grave es calcular DeltaS con el calor real Q de un proceso irreversible en lugar del calor reversible Q_rev del proceso hipotético equivalente. Para un proceso irreversible, DeltaS ≥ Q_irrev / T, con desigualdad estricta. Usar Q directamente subestima DeltaS del universo y viola la segunda ley."
    typical_range: "En procesos de fusión del hielo (a 0 °C): DeltaS = 334 J / 273 K ≈ 1.22 J/K por gramo. En vaporización del agua (a 100 °C): DeltaS ≈ 2260 J / 373 K ≈ 6.06 J/K por gramo. En reacciones químicas: de −500 a +500 J/(mol·K)."
    sign_behavior:
      has_sign: true
      meaning:
        es: "DeltaS > 0 indica aumento de dispersión energética (proceso que evoluciona hacia mayor desorden estadístico). DeltaS < 0 indica disminución de dispersión en el sistema (posible solo si el entorno gana más entropía de la que pierde el sistema). DeltaS = 0 corresponde a proceso isentrópico (reversible adiabático)."
        en: "DeltaS > 0 indicates increasing energy dispersal (process evolving towards greater statistical disorder). DeltaS < 0 indicates decreasing dispersal in the system (possible only if the surroundings gain more entropy than the system loses). DeltaS = 0 corresponds to an isentropic process (reversible adiabatic)."
    zero_behavior:
      allowed: true
      meaning:
        es: "DeltaS = 0 define un proceso isentrópico: reversible y adiabático. También se da en procesos cíclicos completos donde el sistema vuelve al estado inicial, ya que S es función de estado."
        en: "DeltaS = 0 defines an isentropic process: reversible and adiabatic. It also occurs in complete cyclic processes where the system returns to its initial state, since S is a state function."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for:
        - definicion_entropia_clausius
        - entropia_isotermica
      secondary_for:
        - criterio de la segunda ley aplicado al universo
    graph_binding:
      channels:
        - axis: y_delta
          graph_type: Coord
          role: "DeltaS es la diferencia de ordenadas entre dos puntos en el diagrama S-T. Representa el área proyectada sobre el eje S en un proceso T-S."
        - axis: area
          graph_type: Svg
          role: "En un diagrama T-S, DeltaS es la anchura horizontal del proceso; el área del rectángulo T × DeltaS es el calor isotérmico intercambiado."
    pedagogical_notes:
      es: "DeltaS es la magnitud operativa central del leaf. La distinción entre DeltaS del sistema, DeltaS del entorno y DeltaS del universo es fundamental: la segunda ley dice que DeltaS_universo ≥ 0 en cualquier proceso real. Un sistema puede reducir su entropía (DeltaS_sistema < 0) si el entorno aumenta la suya en mayor cantidad. El error más dañino en examen es calcular DeltaS del universo usando solo el calor del sistema sin contabilizar el entorno."
      en: "DeltaS is the central operational magnitude of the leaf. The distinction between DeltaS of the system, DeltaS of the surroundings, and DeltaS of the universe is fundamental: the second law states that DeltaS_universe ≥ 0 in any real process. A system can reduce its entropy (DeltaS_system < 0) if the surroundings increase theirs by a greater amount. The most damaging exam error is calculating DeltaS of the universe using only the system's heat without accounting for the surroundings."

  - id: Q_rev
    symbol: "Q_rev"
    nombre:
      es: Calor reversible
      en: Reversible heat
    descripcion:
      es: "Calor intercambiado en un proceso cuasi-estático reversible. Es la cantidad de calor que define la variación de entropía según Clausius. Para un proceso real irreversible, Q_rev representa el calor del proceso reversible hipotético equivalente que conecta los mismos estados inicial y final."
      en: "Heat exchanged in a quasi-static reversible process. It is the heat quantity that defines the entropy change according to Clausius. For a real irreversible process, Q_rev represents the heat of the equivalent hypothetical reversible process connecting the same initial and final states."
    unidad_si: "J"
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: parameter
    physical_role: "Parámetro de proceso que cuantifica la energía transferida reversiblemente como calor y que determina la variación de entropía del sistema."
    used_in:
      - definición de Clausius de la entropía
      - cálculo de DeltaS en procesos isotérmicos reversibles
      - ciclo de Carnot (calor absorbido del foco caliente)
      - procesos de cambio de fase (fusión, vaporización)
    common_mistake: "Confundir Q (calor real de un proceso irreversible) con Q_rev (calor del proceso reversible equivalente). En un proceso irreversible Q < Q_rev para el proceso de absorción, por lo que usar Q en la fórmula de Clausius subestima DeltaS_sistema y viola la segunda ley."
    typical_range: "Para fusión del hielo (1 mol a 0 °C): Q_rev = 6010 J. Para vaporización del agua (1 mol a 100 °C): Q_rev = 40650 J. Para calefacción de 1 mol de gas ideal (proceso isotérmico): Q_rev = n·R·T·ln(V_f/V_i)."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Q_rev > 0 cuando el sistema absorbe calor del entorno (proceso endotérmico); corresponde a aumento de entropía del sistema. Q_rev < 0 cuando el sistema cede calor al entorno (proceso exotérmico); corresponde a disminución de entropía del sistema."
        en: "Q_rev > 0 when the system absorbs heat from the surroundings (endothermic process); corresponds to increasing system entropy. Q_rev < 0 when the system releases heat to the surroundings (exothermic process); corresponds to decreasing system entropy."
    zero_behavior:
      allowed: true
      meaning:
        es: "Q_rev = 0 corresponde a un proceso adiabático reversible (isentrópico). En este caso DeltaS del sistema es cero."
        en: "Q_rev = 0 corresponds to a reversible adiabatic process (isentropic). In this case the system's DeltaS is zero."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for:
        - definicion_entropia_clausius
        - entropia_isotermica
      secondary_for:
        - ciclo de Carnot
    graph_binding:
      channels:
        - axis: area
          graph_type: Svg
          role: "En el diagrama T-S, Q_rev = área bajo la curva T-S del proceso (integral de T dS). Para un proceso isotérmico es un rectángulo de altura T y anchura DeltaS."
    pedagogical_notes:
      es: "Q_rev es la magnitud que conecta la termodinámica macroscópica (primera ley: Q y W) con la segunda ley (entropía). El punto crítico es que Q_rev no es el calor medido en un calorimetro para un proceso arbitrario, sino el calor del proceso reversible hipotético que conecta los mismos estados inicial y final. Para procesos de cambio de fase (donde el proceso es intrínsecamente reversible si es lento) Q_rev es directamente el calor latente medido."
      en: "Q_rev is the magnitude that connects macroscopic thermodynamics (first law: Q and W) with the second law (entropy). The critical point is that Q_rev is not the heat measured in a calorimeter for an arbitrary process, but the heat of the hypothetical reversible process connecting the same initial and final states. For phase change processes (which are intrinsically reversible if slow) Q_rev is directly the measured latent heat."

  - id: T_abs
    symbol: T
    nombre:
      es: Temperatura absoluta
      en: Absolute temperature
    descripcion:
      es: "Temperatura del sistema en la escala termodinámica kelvin. En la definición de Clausius, es la temperatura en el momento del intercambio de calor. Para un proceso no isotérmico, aparece bajo la integral (1/T dQ_rev). Es la temperatura del foco térmico con el que interactúa el sistema."
      en: "System temperature on the kelvin thermodynamic scale. In the Clausius definition, it is the temperature at the moment of heat exchange. For a non-isothermal process, it appears under the integral (1/T dQ_rev). It is the temperature of the thermal reservoir with which the system interacts."
    unidad_si: "K"
    dimension: "[Θ]"
    is_vector: false
    components: []
    category: parameter
    physical_role: "Parámetro de estado que actúa como denominador en la definición de Clausius, ponderando el impacto del calor sobre la entropía: el mismo calor produce mayor variación de entropía a baja temperatura que a alta temperatura."
    used_in:
      - definición de Clausius de la entropía
      - ciclo de Carnot (temperatura de los focos)
      - eficiencia de Carnot: eta = 1 - T_frio/T_caliente
      - relaciones de Maxwell en termodinámica
    common_mistake: "Usar T en grados Celsius en lugar de kelvin absolutos en la fórmula de Clausius. Un proceso a 27 °C debe usar T = 300 K, no T = 27. El error produce DeltaS aproximadamente 11 veces mayor del real. En la definición de Clausius, T debe ser SIEMPRE la temperatura absoluta en kelvin."
    typical_range: "En aplicaciones termodinámicas habituales: 273 K (0 °C, punto de fusión del agua) a 1273 K (1000 °C, temperatura de gases en turbinas industriales). Temperatura de la llama del gas natural: 2200 K. Temperatura del núcleo del sol: 1.5 × 10^7 K."
    sign_behavior:
      has_sign: false
      meaning:
        es: "T_abs es siempre positiva en kelvin. El cero absoluto (0 K) es el límite inferior, no alcanzable por el tercer principio. No existe T_abs negativa en termodinámica clásica de equilibrio."
        en: "T_abs is always positive in kelvin. Absolute zero (0 K) is the lower bound, unreachable by the third law. Negative T_abs does not exist in classical equilibrium thermodynamics."
    zero_behavior:
      allowed: false
      meaning:
        es: "T_abs = 0 K es el cero absoluto, inalcanzable según el tercer principio. En la fórmula de Clausius, T → 0 K haría DeltaS → ∞ para cualquier Q_rev no nulo, lo que es físicamente absurdo y reafirma que ningún sistema puede ser enfriado hasta el cero absoluto mediante procesos finitos."
        en: "T_abs = 0 K is absolute zero, unattainable according to the third law. In the Clausius formula, T → 0 K would make DeltaS → ∞ for any non-zero Q_rev, which is physically absurd and confirms that no system can be cooled to absolute zero through finite processes."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - definicion_entropia_clausius
        - entropia_isotermica
      secondary_for:
        - eficiencia de Carnot
        - relaciones de Maxwell
    graph_binding:
      channels:
        - axis: y
          graph_type: Coord
          role: "T_abs es la ordenada en diagramas T-S (temperatura frente a entropía). El área bajo la curva T-S es el calor Q_rev intercambiado en el proceso."
        - axis: y
          graph_type: Svg
          role: "T_abs aparece como la altura del rectángulo en el diagrama T-S de un proceso isotérmico; el área = T × DeltaS = Q_rev."
    pedagogical_notes:
      es: "T_abs en la fórmula de Clausius tiene un significado físico profundo: el denominador 1/T pondera la 'calidad' del calor. Un julio de calor a 10 K produce 100 veces más cambio de entropía que un julio a 1000 K. Esto es el origen físico del concepto de 'calidad de la energía': la energía a alta temperatura está más ordenada (baja entropía relativa) que la misma energía a baja temperatura. La confusión con Celsius es el error de cálculo más común y más grave en termodinámica de bachillerato."
      en: "T_abs in the Clausius formula has a deep physical meaning: the 1/T denominator weights the 'quality' of heat. One joule of heat at 10 K produces 100 times more entropy change than one joule at 1000 K. This is the physical origin of the concept of 'energy quality': energy at high temperature is more ordered (low relative entropy) than the same energy at low temperature. Confusion with Celsius is the most common and most serious calculation error in secondary-level thermodynamics."
`;export{e as default};
