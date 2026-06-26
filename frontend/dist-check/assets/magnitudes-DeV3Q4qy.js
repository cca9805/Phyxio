const e=`magnitudes:

  - id: U
    symbol: U
    nombre:
      es: Energía interna
      en: Internal energy
    descripcion:
      es: Energía total almacenada en el sistema en forma de energía cinética y potencial microscópica de sus moléculas. En un sistema cerrado, U puede cambiar por intercambio de calor o trabajo con el entorno.
      en: Total energy stored in the system as microscopic kinetic and potential energy of its molecules. In a closed system, U can change through heat or work exchange with the surroundings.
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: state
    physical_role: output
    used_in:
      - primer_principio_cerrado
    common_mistake: Confundir la energía interna U con el calor Q. La energía interna es una función de estado; el calor es una forma de transferencia de energía en tránsito.
    typical_range: "1 J a 10^9 J dependiendo del sistema y la escala"
    sign_behavior: U puede ser positivo o negativo según la referencia elegida; DeltaU es lo físicamente significativo.
    zero_behavior: U igual a cero es convencional y depende del estado de referencia elegido.
    value_nature: continuous
    interpretation_role: output_principal
    graph_binding:
      x_axis: proceso
      y_axis: U
      curve_meaning: Evolución de la energía interna del sistema cerrado durante el proceso
    pedagogical_notes: U es una propiedad del estado del sistema, no del proceso. Dos procesos distintos que llevan al mismo estado final producen el mismo DeltaU, aunque Q y W individuales difieran.

  - id: DeltaU
    symbol: DeltaU
    nombre:
      es: Variación de energía interna
      en: Change in internal energy
    descripcion:
      es: Diferencia entre la energía interna del estado final y el estado inicial del sistema cerrado. Igual a la suma algebraica del calor recibido y el trabajo recibido por el sistema.
      en: Difference between the internal energy of the final and initial state of the closed system. Equal to the algebraic sum of heat received and work received by the system.
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: state
    physical_role: output
    used_in:
      - primer_principio_cerrado
    common_mistake: "Asignar signo incorrecto a DeltaU por confundir la convención de signos de Q y W. Usar siempre la convención del sistema: Q positivo cuando el sistema recibe calor, W positivo cuando el sistema recibe trabajo."
    typical_range: "-10^6 J a 10^6 J en procesos de laboratorio típicos"
    sign_behavior: Positivo si el sistema gana energía interna neta; negativo si pierde energía interna neta.
    zero_behavior: DeltaU igual a cero en procesos cíclicos o en procesos isotérmicos de gas ideal.
    value_nature: continuous
    interpretation_role: output_principal
    graph_binding:
      x_axis: proceso
      y_axis: DeltaU
      curve_meaning: Variación neta de energía interna del sistema cerrado
    pedagogical_notes: DeltaU es independiente del camino termodinámico seguido; solo depende de los estados inicial y final. Esto lo convierte en una función de estado a diferencia de Q y W que dependen del camino.

  - id: Q
    symbol: Q
    nombre:
      es: Calor intercambiado
      en: Heat exchanged
    descripcion:
      es: Energía transferida a través de la frontera del sistema cerrado debida a una diferencia de temperatura entre el sistema y el entorno. Positivo cuando el sistema recibe calor del entorno.
      en: Energy transferred through the boundary of the closed system due to a temperature difference between the system and the surroundings. Positive when the system receives heat from the surroundings.
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: process
    physical_role: input
    used_in:
      - primer_principio_cerrado
    common_mistake: Confundir Q con temperatura o con calor específico. Q es energía en tránsito, no una propiedad del estado. No existe "el calor contenido en un sistema".
    typical_range: "-10^6 J a 10^6 J en procesos de laboratorio"
    sign_behavior: Positivo cuando el sistema absorbe calor (endotérmico); negativo cuando el sistema cede calor (exotérmico).
    zero_behavior: Q igual a cero define un proceso adiabático, que no es lo mismo que un proceso isotérmico.
    value_nature: continuous
    interpretation_role: input_principal
    graph_binding:
      x_axis: proceso
      y_axis: Q
      curve_meaning: Calor acumulado intercambiado por el sistema cerrado durante el proceso
    pedagogical_notes: Q depende del camino termodinámico, no solo de los estados inicial y final. Un mismo cambio de estado puede lograrse con valores de Q muy distintos dependiendo del proceso.

  - id: W
    symbol: W
    nombre:
      es: Trabajo intercambiado
      en: Work exchanged
    descripcion:
      es: Energía transferida a través de la frontera del sistema cerrado por mecanismos mecánicos (expansión, compresión) o eléctricos. Positivo cuando el sistema recibe trabajo del entorno (convención IUPAC).
      en: Energy transferred through the boundary of the closed system by mechanical (expansion, compression) or electrical mechanisms. Positive when the system receives work from the surroundings (IUPAC convention).
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: process
    physical_role: input
    used_in:
      - primer_principio_cerrado
    common_mistake: "Usar la convención de ingeniería (W positivo cuando el sistema realiza trabajo) sin declararlo explícitamente. La convención IUPAC (W positivo cuando el sistema recibe trabajo) es la más usada en física y química."
    typical_range: "-10^6 J a 10^6 J en procesos de laboratorio"
    sign_behavior: Positivo cuando el entorno realiza trabajo sobre el sistema (compresión); negativo cuando el sistema realiza trabajo sobre el entorno (expansión).
    zero_behavior: W igual a cero en procesos isocóricos (volumen constante) cuando el único trabajo posible es el de presión-volumen.
    value_nature: continuous
    interpretation_role: input_secundario
    graph_binding:
      x_axis: proceso
      y_axis: W
      curve_meaning: Trabajo acumulado intercambiado por el sistema cerrado durante el proceso
    pedagogical_notes: Como Q, W depende del camino termodinámico. El trabajo de expansión-compresión es el más común en sistemas cerrados gaseosos, pero también puede existir trabajo eléctrico, magnético o superficial.

  - id: S
    symbol: S
    nombre:
      es: Entropía del sistema
      en: System entropy
    descripcion:
      es: Función de estado que mide el desorden microscópico del sistema cerrado. En un proceso real irreversible en sistema cerrado, la variación de entropía del sistema es mayor que el cociente del calor intercambiado entre la temperatura absoluta.
      en: State function measuring the microscopic disorder of the closed system. In a real irreversible process in a closed system, the entropy change of the system is greater than the ratio of exchanged heat to absolute temperature.
    unidad_si: J/K
    dimension: "[M L^2 T^-2 Theta^-1]"
    is_vector: false
    components: []
    category: state
    physical_role: output
    used_in:
      - segundo_principio_cerrado
    common_mistake: Confundir la variación de entropía del sistema con la variación de entropía del universo. En un sistema cerrado, la entropía del sistema puede disminuir si el sistema cede calor al entorno a baja temperatura.
    typical_range: "0.01 J/K a 10^4 J/K en procesos de laboratorio"
    sign_behavior: Puede aumentar o disminuir dependiendo del proceso y del calor intercambiado. Solo la entropía del universo (sistema más entorno) nunca disminuye.
    zero_behavior: DeltaS igual a Q/T para procesos reversibles; mayor que Q/T para procesos irreversibles reales.
    value_nature: continuous
    interpretation_role: output_secundario
    graph_binding:
      x_axis: proceso
      y_axis: S
      curve_meaning: Evolución de la entropía del sistema cerrado durante el proceso
    pedagogical_notes: La entropía del sistema cerrado puede disminuir si el sistema cede calor al entorno. Esto no viola el segundo principio porque la entropía del entorno aumenta en mayor medida, y la entropía total del universo nunca disminuye.
`;export{e as default};
