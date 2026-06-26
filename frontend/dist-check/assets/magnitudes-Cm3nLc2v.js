const n=`magnitudes:

  - id: V_1
    symbol: "V_1"
    nombre:
      es: Tensión primaria
      en: Primary voltage
    descripcion:
      es: Tensión eléctrica aplicada al devanado primario del transformador.
      en: Electrical voltage applied to the transformer primary winding.
    unidad_si: V
    dimension: "[M L² T⁻³ I⁻¹]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - calculo_tension_secundaria
      - potencia_aparente
      - rendimiento_transformador
    common_mistake: "Confundir la tensión primaria con la tensión secundaria en transformadores elevadores."
    typical_range: "120 V – 400 kV según el tipo de transformador"
    sign_behavior:
      has_sign: true
      meaning:
        es: "La tensión es alterna, pero su valor efectivo es positivo. Signo negativo indicaría inversión de fase."
        en: "Voltage is alternating, but its RMS value is positive. Negative sign would indicate phase inversion."
    zero_behavior:
      allowed: false
      meaning:
        es: "Tensión primaria nula implica que no hay alimentación: el transformador no funciona."
        en: "Zero primary voltage implies no supply: the transformer does not operate."
    value_nature:
      kind: scalar_signed
      nonnegative_only: true
      expected_interval: "(0, 500000) V"
    interpretation_role:
      primary_for:
        - calculo_relacion_transformacion
        - entrada_energia
      secondary_for:
        - seleccion_aislamiento
    graph_binding:
      channels:
        - eje_x_tension_primaria
    pedagogical_notes:
      es: "La tensión primaria es el punto de entrada de energía. Su valor determina la tensión secundaria según la relación de espiras."
      en: "Primary voltage is the energy entry point. Its value determines secondary voltage according to the turns ratio."

  - id: V_2
    symbol: "V_2"
    nombre:
      es: Tensión secundaria
      en: Secondary voltage
    descripcion:
      es: Tensión eléctrica disponible en el devanado secundario del transformador.
      en: Electrical voltage available at the transformer secondary winding.
    unidad_si: V
    dimension: "[M L² T⁻³ I⁻¹]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - calculo_tension_salida
      - potencia_secundaria
      - dimensionamiento_carga
    common_mistake: "No verificar que la tensión secundaria es proporcional a la primaria solo en régimen estacionario."
    typical_range: "12 V – 220 kV según la aplicación"
    sign_behavior:
      has_sign: true
      meaning:
        es: "El valor efectivo es positivo. La fase puede estar desplazada respecto al primario."
        en: "The RMS value is positive. Phase may be shifted relative to the primary."
    zero_behavior:
      allowed: true
      meaning:
        es: "Tensión secundaria nula en cortocircuito: situación de fallo peligrosa."
        en: "Zero secondary voltage in short circuit: dangerous fault condition."
    value_nature:
      kind: scalar_signed
      nonnegative_only: true
      expected_interval: "[0, 300000) V"
    interpretation_role:
      primary_for:
        - alimentacion_carga
        - calculo_potencia_utill
      secondary_for:
        - seguridad_aislamiento
    graph_binding:
      channels:
        - eje_y_tension_secundaria
    pedagogical_notes:
      es: "La tensión secundaria es la salida útil del transformador. Depende linealmente de la primaria según la relación de espiras."
      en: "Secondary voltage is the useful output of the transformer. It depends linearly on the primary according to the turns ratio."

  - id: I_1
    symbol: "I_1"
    nombre:
      es: Corriente primaria
      en: Primary current
    descripcion:
      es: Corriente eléctrica que circula por el devanado primario del transformador.
      en: Electric current flowing through the transformer primary winding.
    unidad_si: A
    dimension: "[I]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - calculo_corriente_primaria
      - potencia_aparente
      - perdidas_cobre
    common_mistake: "Confundir la corriente de vacío con la corriente de carga nominal."
    typical_range: "0.1 A – 1000 A según la potencia del transformador"
    sign_behavior:
      has_sign: true
      meaning:
        es: "La corriente alterna cambia de sentido, pero su valor efectivo es positivo."
        en: "Alternating current changes direction, but its RMS value is positive."
    zero_behavior:
      allowed: true
      meaning:
        es: "Corriente primaria nula en circuito abierto: solo circula la corriente de magnetización."
        en: "Zero primary current in open circuit: only magnetisation current flows."
    value_nature:
      kind: scalar_signed
      nonnegative_only: true
      expected_interval: "[0, 2000) A"
    interpretation_role:
      primary_for:
        - entrada_energia
        - calculo_perdidas_cobre
      secondary_for:
        - proteccion_primario
    graph_binding:
      channels:
        - eje_y_corriente_primaria
    pedagogical_notes:
      es: "La corriente primaria se ajusta automáticamente según la carga del secundario para conservar la potencia."
      en: "Primary current adjusts automatically according to the secondary load to conserve power."

  - id: I_2
    symbol: "I_2"
    nombre:
      es: Corriente secundaria
      en: Secondary current
    descripcion:
      es: Corriente eléctrica que entrega el devanado secundario a la carga.
      en: Electric current delivered by the secondary winding to the load.
    unidad_si: A
    dimension: "[I]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - calculo_corriente_secundaria
      - potencia_entregada
      - proteccion_secundario
    common_mistake: "No considerar que la corriente secundaria determina la corriente primaria por el principio de conservación de potencia."
    typical_range: "0.5 A – 5000 A según la potencia y la tensión secundaria"
    sign_behavior:
      has_sign: true
      meaning:
        es: "El valor efectivo es positivo. El sentido de la corriente depende del tipo de carga."
        en: "The RMS value is positive. Current direction depends on the load type."
    zero_behavior:
      allowed: true
      meaning:
        es: "Corriente secundaria nula en vacío: sin carga conectada."
        en: "Zero secondary current at no-load: no load connected."
    value_nature:
      kind: scalar_signed
      nonnegative_only: true
      expected_interval: "[0, 10000) A"
    interpretation_role:
      primary_for:
        - alimentacion_carga
        - calculo_potencia_salida
      secondary_for:
        - seleccion_conductores
    graph_binding:
      channels:
        - eje_y_corriente_secundaria
    pedagogical_notes:
      es: "La corriente secundaria es la que realmente alimenta la carga. Su valor máximo está limitado por la capacidad del transformador."
      en: "Secondary current is what actually feeds the load. Its maximum value is limited by the transformer capacity."

  - id: N_1
    symbol: "N_1"
    nombre:
      es: Número de espiras primario
      en: Number of primary turns
    descripcion:
      es: Número de vueltas del devanado primario del transformador.
      en: Number of turns in the transformer primary winding.
    unidad_si: "-"
    dimension: adimensional
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - calculo_relacion_transformacion
      - diseno_transformadores
    common_mistake: "Confundir N_1 con N_2 al calcular la relación de transformación."
    typical_range: "10 – 10000 espiras según el diseño"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El número de espiras es siempre un entero positivo."
        en: "The number of turns is always a positive integer."
    zero_behavior:
      allowed: false
      meaning:
        es: "Cero espiras implica ausencia de devanado: el transformador no existe."
        en: "Zero turns implies absence of winding: the transformer does not exist."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, 50000)"
    interpretation_role:
      primary_for:
        - calculo_relacion_tensiones
        - diseno_constructivo
      secondary_for:
        - estimacion_impedancia
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "N_1 y N_2 determinan la relación de transformación. Cuanto mayor es N_1 respecto a N_2, mayor es el escalado de tensión."
      en: "N_1 and N_2 determine the transformation ratio. The greater N_1 is relative to N_2, the greater the voltage scaling."

  - id: N_2
    symbol: "N_2"
    nombre:
      es: Número de espiras secundario
      en: Number of secondary turns
    descripcion:
      es: Número de vueltas del devanado secundario del transformador.
      en: Number of turns in the transformer secondary winding.
    unidad_si: "-"
    dimension: adimensional
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - calculo_relacion_transformacion
      - diseno_transformadores
    common_mistake: "Invertir N_1 y N_2 al calcular si el transformador es elevador o reductor."
    typical_range: "10 – 10000 espiras según el diseño"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El número de espiras es siempre un entero positivo."
        en: "The number of turns is always a positive integer."
    zero_behavior:
      allowed: false
      meaning:
        es: "Cero espiras implica ausencia de devanado secundario."
        en: "Zero turns implies absence of secondary winding."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, 50000)"
    interpretation_role:
      primary_for:
        - calculo_tension_secundaria
        - diseno_constructivo
      secondary_for:
        - estimacion_impedancia
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "La relación N_2/N_1 determina si el transformador es elevador (N_2 > N_1) o reductor (N_2 < N_1)."
      en: "The ratio N_2/N_1 determines whether the transformer is step-up (N_2 > N_1) or step-down (N_2 < N_1)."

  - id: S
    symbol: "S"
    nombre:
      es: Potencia aparente
      en: Apparent power
    descripcion:
      es: Producto de la tensión por la corriente en un devanado del transformador, representando la capacidad de transferencia de energía.
      en: Product of voltage and current in a transformer winding, representing the energy transfer capacity.
    unidad_si: VA
    dimension: "[M L² T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - dimensionamiento_transformadores
      - seleccion_protecciones
    common_mistake: "Confundir potencia aparente con potencia activa al calcular el rendimiento."
    typical_range: "10 VA – 1000 MVA según el tipo de transformador"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La potencia aparente es siempre positiva, representando capacidad máxima."
        en: "Apparent power is always positive, representing maximum capacity."
    zero_behavior:
      allowed: true
      meaning:
        es: "Potencia nula en vacío: el transformador no transfiere energía a la carga."
        en: "Zero power at no-load: the transformer transfers no energy to the load."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, 1000000000) VA"
    interpretation_role:
      primary_for:
        - capacidad_nominal
        - dimensionamiento
      secondary_for:
        - seleccion_equipo
    graph_binding:
      channels:
        - eje_y_potencia_aparente
    pedagogical_notes:
      es: "La potencia aparente S es el parámetro de diseño más importante. Limita la corriente máxima que puede circular por los devanados sin sobrecalentarlos."
      en: "Apparent power S is the most important design parameter. It limits the maximum current that can flow through the windings without overheating them."

  - id: eta
    symbol: "\\\\eta"
    nombre:
      es: Rendimiento del transformador
      en: Transformer efficiency
    descripcion:
      es: Fracción adimensional de la potencia activa de entrada que se transfiere a la salida como potencia útil.
      en: Dimensionless fraction of input active power that is transferred to the output as useful power.
    unidad_si: "-"
    dimension: adimensional
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - evaluacion_energetica
      - comparacion_transformadores
    common_mistake: "Usar el rendimiento como porcentaje (98) en lugar de decimal (0.98) en cálculos."
    typical_range: "0.95 – 0.995 en transformadores de potencia modernos"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El rendimiento es adimensional y positivo. Un valor fuera del intervalo (0,1) indica error."
        en: "Efficiency is dimensionless and positive. A value outside (0,1) indicates an error."
    zero_behavior:
      allowed: false
      meaning:
        es: "Rendimiento cero implicaría que toda la energía se pierde, imposible en un transformador funcional."
        en: "Zero efficiency would imply all energy is lost, impossible in a functional transformer."
    value_nature:
      kind: ratio
      nonnegative_only: true
      expected_interval: "(0, 1)"
    interpretation_role:
      primary_for:
        - evaluacion_energetica
        - comparacion_equipos
      secondary_for:
        - estimacion_perdidas
    graph_binding:
      channels:
        - eje_y_eficiencia_vs_carga
    pedagogical_notes:
      es: "Un transformador con mayor rendimiento consume menos energía para la misma potencia útil. Los transformadores modernos alcanzan rendimientos superiores al 98%."
      en: "A transformer with higher efficiency consumes less energy for the same useful power. Modern transformers achieve efficiencies above 98%."

  - id: P_1
    symbol: "P_1"
    nombre:
      es: Potencia activa de entrada
      en: Input active power
    descripcion:
      es: Potencia activa absorbida por el devanado primario del transformador desde la red de alimentación.
      en: Active power absorbed by the transformer primary winding from the supply network.
    unidad_si: W
    dimension: "[M L² T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - calculo_rendimiento
      - balance_energetico
    common_mistake: "Confundir potencia activa con potencia aparente en el cálculo del rendimiento."
    typical_range: "10 W – 1000 MW según la capacidad del transformador"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La potencia activa es siempre positiva en el primario, representando consumo."
        en: "Active power is always positive at the primary, representing consumption."
    zero_behavior:
      allowed: true
      meaning:
        es: "Potencia de entrada nula en vacío perfecto: solo quedan pérdidas de hierro."
        en: "Zero input power in perfect no-load: only iron losses remain."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, 1000000000) W"
    interpretation_role:
      primary_for:
        - calculo_rendimiento
        - consumo_energetico
      secondary_for:
        - facturacion_energia
    graph_binding:
      channels:
        - eje_x_potencia_entrada
    pedagogical_notes:
      es: "La potencia activa de entrada es el coste energético del transformador. Siempre es mayor que la de salida por las pérdidas."
      en: "Input active power is the energy cost of the transformer. It is always greater than the output power due to losses."

  - id: P_2
    symbol: "P_2"
    nombre:
      es: Potencia activa de salida
      en: Output active power
    descripcion:
      es: Potencia activa entregada por el devanado secundario del transformador a la carga.
      en: Active power delivered by the transformer secondary winding to the load.
    unidad_si: W
    dimension: "[M L² T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - calculo_rendimiento
      - potencia_util
    common_mistake: "Considerar la potencia de salida igual a la de entrada, ignorando las pérdidas."
    typical_range: "10 W – 990 MW según la capacidad y el rendimiento"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La potencia activa de salida es siempre positiva, representando trabajo útil."
        en: "Output active power is always positive, representing useful work."
    zero_behavior:
      allowed: true
      meaning:
        es: "Potencia de salida nula en vacío o cortocircuito."
        en: "Zero output power at no-load or short circuit."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, 1000000000) W"
    interpretation_role:
      primary_for:
        - calculo_rendimiento
        - potencia_disponible
      secondary_for:
        - dimensionamiento_carga
    graph_binding:
      channels:
        - eje_x_potencia_salida
    pedagogical_notes:
      es: "La potencia de salida es el resultado útil del transformador. Es siempre menor que la de entrada por las pérdidas inevitables."
      en: "Output power is the useful result of the transformer. It is always less than input power due to unavoidable losses."

  - id: P_p
    symbol: "P_p"
    nombre:
      es: Pérdidas totales
      en: Total losses
    descripcion:
      es: Suma de las pérdidas por efecto Joule en los devanados y las pérdidas en el núcleo magnético.
      en: Sum of Joule losses in the windings and losses in the magnetic core.
    unidad_si: W
    dimension: "[M L² T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - calculo_rendimiento
      - disipacion_termica
    common_mistake: "Confundir pérdidas de cobre (variables con carga) con pérdidas de hierro (aproximadamente constantes)."
    typical_range: "1 W – 10 MW según el tamaño y la carga del transformador"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Las pérdidas son siempre positivas, representando calor a disipar."
        en: "Losses are always positive, representing heat to be dissipated."
    zero_behavior:
      allowed: false
      meaning:
        es: "Pérdidas nulas solo en un transformador ideal sin resistencias ni histéresis."
        en: "Zero losses only in an ideal transformer without resistances or hysteresis."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, 50000000) W"
    interpretation_role:
      primary_for:
        - calculo_eficiencia
        - diseno_refrigeracion
      secondary_for:
        - estimacion_calentamiento
    graph_binding:
      channels:
        - eje_y_perdidas_totales
    pedagogical_notes:
      es: "Las pérdidas totales determinan el calentamiento del transformador y el diseño de su sistema de refrigeración."
      en: "Total losses determine the transformer heating and the design of its cooling system."

  - id: P_Cu
    symbol: "P_{Cu}"
    nombre:
      es: Pérdidas en cobre
      en: Copper losses
    descripcion:
      es: Pérdidas por efecto Joule en los devanados de cobre del transformador, proporcionales al cuadrado de la corriente.
      en: Joule losses in the copper windings of the transformer, proportional to the square of the current.
    unidad_si: W
    dimension: "[M L² T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: secondary_quantity
    used_in:
      - calculo_perdidas_totales
      - analisis_termico
    common_mistake: "No considerar que estas pérdidas dependen del cuadrado de la corriente de carga."
    typical_range: "0.5 W – 5 MW, creciendo con el cuadrado de la carga"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Las pérdidas en cobre son siempre positivas."
        en: "Copper losses are always positive."
    zero_behavior:
      allowed: true
      meaning:
        es: "Pérdidas nulas en vacío: sin corriente de carga no hay efecto Joule en los devanados."
        en: "Zero losses at no-load: without load current there is no Joule effect in the windings."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, 10000000) W"
    interpretation_role:
      primary_for:
        - calculo_eficiencia_carga
        - diseno_refrigeracion
      secondary_for:
        - seleccion_seccion_conductor
    graph_binding:
      channels:
        - curva_perdidas_cobre_vs_carga
    pedagogical_notes:
      es: "Las pérdidas en cobre son la parte variable de las pérdidas totales. Se miden mediante el ensayo de cortocircuito."
      en: "Copper losses are the variable part of total losses. They are measured through the short-circuit test."

  - id: P_Fe
    symbol: "P_{Fe}"
    nombre:
      es: Pérdidas en hierro
      en: Iron losses
    descripcion:
      es: Pérdidas en el núcleo de hierro del transformador por histéresis magnética y corrientes de Foucault.
      en: Losses in the iron core of the transformer due to magnetic hysteresis and eddy currents.
    unidad_si: W
    dimension: "[M L² T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: secondary_quantity
    used_in:
      - calculo_perdidas_totales
      - ensayo_vacio
    common_mistake: "Considerar que las pérdidas de hierro varían con la carga, cuando son aproximadamente constantes a tensión fija."
    typical_range: "0.5 W – 1 MW, aproximadamente constantes a tensión nominal"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Las pérdidas en hierro son siempre positivas."
        en: "Iron losses are always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Pérdidas nulas solo con tensión cero: el núcleo no se magnetiza."
        en: "Zero losses only at zero voltage: the core is not magnetised."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, 5000000) W"
    interpretation_role:
      primary_for:
        - calculo_eficiencia_vacio
        - seleccion_nucleo
      secondary_for:
        - diseno_laminacion
    graph_binding:
      channels:
        - valor_constante_perdidas_hierro
    pedagogical_notes:
      es: "Las pérdidas en hierro son aproximadamente constantes cuando la tensión primaria es constante. Se miden mediante el ensayo de vacío."
      en: "Iron losses are approximately constant when primary voltage is constant. They are measured through the no-load test."
`;export{n as default};
