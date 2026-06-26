const e=`version: 5

magnitudes:
  - id: c
    symbol: "c"
    nombre:
      es: "Velocidad de la luz en el vacío"
      en: "Speed of light in vacuum"
    descripcion:
      es: "Constante física universal que representa la velocidad de propagación de las ondas electromagnéticas en el vacío."
      en: "Universal physical constant representing the speed of propagation of electromagnetic waves in a vacuum."
    unidad_si: "m/s"
    dimension: "[L T⁻¹]"
    is_vector: false
    components: null
    category: "constant"
    physical_role: "constant"
    used_in:
      - "velocidad_vacio"
      - "relacion_amplitudes"
      - "relacion_onda"
    common_mistake:
      es: "Asumir que cambia según la frecuencia o que depende de la velocidad del foco emisor."
      en: "Assuming it changes depending on the frequency or depends on the speed of the emitter."
    typical_range:
      es: "Exactamente 299792458 m/s (aproximada como 3 * 10^8 m/s)."
      en: "Exactly 299792458 m/s (approximated as 3 * 10^8 m/s)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre no negativa, es una constante universal límite."
        en: "Always non-negative, it is a universal limiting constant."
    zero_behavior:
      allowed: false
      meaning:
        es: "No puede anularse en el vacío."
        en: "Cannot be zero in a vacuum."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[299792458, 299792458]"
    interpretation_role:
      primary_for:
        - "velocidad_propagacion"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Fija el factor de escala entre los campos eléctrico y magnético en el vacío."
      en: "Sets the scale factor between the electric and magnetic fields in vacuum."

  - id: mu0
    symbol: '\\mu_0'
    nombre:
      es: "Permeabilidad magnética del vacío"
      en: "Vacuum magnetic permeability"
    descripcion:
      es: "Constante física que describe la capacidad del vacío para permitir el paso de líneas de flujo magnético."
      en: "Physical constant describing the ability of vacuum to support the passage of magnetic flux lines."
    unidad_si: "H/m"
    dimension: "[M L T⁻² I⁻²]"
    is_vector: false
    components: null
    category: "constant"
    physical_role: "constant"
    used_in:
      - "velocidad_vacio"
    common_mistake:
      es: "Confundir su valor con permeabilidades relativas de materiales magnéticos."
      en: "Confusing its value with relative permeabilities of magnetic materials."
    typical_range:
      es: "Exactamente 4 * pi * 10^-7 H/m (aproximadamente 1.2566 * 10^-6 H/m)."
      en: "Exactly 4 * pi * 10^-7 H/m (approximately 1.2566 * 10^-6 H/m)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Constante no negativa definitoria del espacio."
        en: "Non-negative constant defining space."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un valor de cero implicaría la imposibilidad de inducción magnética."
        en: "A value of zero would imply the impossibility of magnetic induction."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[1.2566e-6, 1.2566e-6]"
    interpretation_role:
      primary_for:
        - "permeabilidad"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Fijada históricamente para definir el amperio en el Sistema Internacional."
      en: "Historically fixed to define the ampere in the International System."

  - id: epsilon0
    symbol: '\\epsilon_0'
    nombre:
      es: "Permitividad eléctrica del vacío"
      en: "Vacuum electric permittivity"
    descripcion:
      es: "Constante física que describe la capacidad del vacío para permitir el paso de líneas de flujo eléctrico."
      en: "Physical constant describing the ability of vacuum to support the passage of electric flux lines."
    unidad_si: "F/m"
    dimension: "[M⁻¹ L⁻³ T⁴ I²]"
    is_vector: false
    components: null
    category: "constant"
    physical_role: "constant"
    used_in:
      - "velocidad_vacio"
      - "intensidad"
    common_mistake:
      es: "Olvidar el exponente negativo de la potencia de diez al operar numéricamente."
      en: "Forgetting the negative exponent of the power of ten when calculating numerically."
    typical_range:
      es: "Aproximadamente 8.854 * 10^-12 F/m."
      en: "Approximately 8.854 * 10^-12 F/m."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Constante positiva definitoria del acoplamiento electrostático en el vacío."
        en: "Positive constant defining electrostatic coupling in vacuum."
    zero_behavior:
      allowed: false
      meaning:
        es: "No puede anularse en el vacío."
        en: "Cannot be zero in a vacuum."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[8.854e-12, 8.854e-12]"
    interpretation_role:
      primary_for:
        - "permitividad"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Determina la intensidad del acoplamiento de Coulomb en el vacío."
      en: "Determines the intensity of Coulomb coupling in vacuum."

  - id: E0
    symbol: "E_0"
    nombre:
      es: "Amplitud del campo eléctrico"
      en: "Electric field amplitude"
    descripcion:
      es: "Valor máximo instantáneo que alcanza la oscilación del campo eléctrico en una onda plana."
      en: "Maximum instantaneous value reached by the electric field oscillation in a plane wave."
    unidad_si: "V/m"
    dimension: "[M L T⁻³ I⁻¹]"
    is_vector: false
    components: null
    category: "derived"
    physical_role: "core_physical_quantity"
    used_in:
      - "relacion_amplitudes"
      - "intensidad"
    common_mistake:
      es: "Confundir la amplitud máxima con el valor eficaz o con el valor instantáneo del campo."
      en: "Confusing the maximum amplitude with the RMS value or with the instantaneous value of the field."
    typical_range:
      es: "Desde 10^-6 V/m para señales cósmicas hasta 10^6 V/m para láseres intensos."
      en: "From 10^-6 V/m for cosmic signals up to 10^6 V/m for intense lasers."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre no negativa por ser un módulo o valor máximo de oscilación armónica."
        en: "Always non-negative as it is a modulus or maximum value of harmonic oscillation."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica la ausencia completa de la componente eléctrica de la perturbación."
        en: "Indicates the complete absence of the electric component of the perturbation."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[0, 1e9]"
    interpretation_role:
      primary_for:
        - "fuerza_electrica"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Es la responsable principal de la interacción de la luz con la materia ordinaria a escalas atómicas."
      en: "It is primarily responsible for the interaction of light with ordinary matter at atomic scales."

  - id: B0
    symbol: "B_0"
    nombre:
      es: "Amplitud del campo magnético"
      en: "Magnetic field amplitude"
    descripcion:
      es: "Valor máximo instantáneo que alcanza la oscilación del campo magnético en una onda plana."
      en: "Maximum instantaneous value reached by the magnetic field oscillation in a plane wave."
    unidad_si: "T"
    dimension: "[M T⁻² I⁻¹]"
    is_vector: false
    components: null
    category: "derived"
    physical_role: "core_physical_quantity"
    used_in:
      - "relacion_amplitudes"
    common_mistake:
      es: "Creer que es numéricamente igual al campo eléctrico debido al transporte simétrico de energía."
      en: "Believing it is numerically equal to the electric field due to symmetric energy transport."
    typical_range:
      es: "Desde 10^-14 T para señales cósmicas hasta 10^-3 T para láseres muy potentes."
      en: "From 10^-14 T for cosmic signals up to 10^-3 T for very powerful lasers."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre no negativa por representar un módulo de amplitud máxima."
        en: "Always non-negative as it represents a maximum amplitude modulus."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica la ausencia de la perturbación magnética asociada."
        en: "Indicates the absence of the associated magnetic perturbation."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[0, 100]"
    interpretation_role:
      primary_for:
        - "fuerza_magnetica"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Su valor numérico en el SI es extremadamente pequeño debido al factor de escala c."
      en: "Its numerical value in the SI is extremely small due to the scale factor c."

  - id: f
    symbol: "f"
    nombre:
      es: "Frecuencia"
      en: "Frequency"
    descripcion:
      es: "Número de oscilaciones completas por unidad de tiempo de la onda electromagnética."
      en: "Number of full oscillations per unit of time of the electromagnetic wave."
    unidad_si: "Hz"
    dimension: "[T⁻¹]"
    is_vector: false
    components: null
    category: "fundamental"
    physical_role: "core_physical_quantity"
    used_in:
      - "relacion_onda"
    common_mistake:
      es: "Confundir la frecuencia temporal con la frecuencia angular omega."
      en: "Confusing temporal frequency with angular frequency omega."
    typical_range:
      es: "Desde 10^4 Hz (ondas de radio AM) hasta 10^20 Hz (rayos gamma)."
      en: "From 10^4 Hz (AM radio waves) up to 10^20 Hz (gamma rays)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "No negativa, cuantifica el ritmo temporal de oscilación."
        en: "Non-negative, quantifies the temporal rate of oscillation."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una frecuencia cero representa un campo estático, no una onda electromagnética."
        en: "A zero frequency represents a static field, not an electromagnetic wave."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[1e3, 1e22]"
    interpretation_role:
      primary_for:
        - "ritmo_oscilacion"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Determina la energía de los fotones asociados según el principio de Planck."
      en: "Determines the energy of the associated photons according to Planck's principle."

  - id: lambda
    symbol: '\\lambda'
    nombre:
      es: "Longitud de onda"
      en: "Wavelength"
    descripcion:
      es: "Distancia física espacial mínima en la que la fase de la onda armónica se repite."
      en: "Minimum physical spatial distance over which the phase of the harmonic wave repeats."
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: null
    category: "fundamental"
    physical_role: "core_physical_quantity"
    used_in:
      - "relacion_onda"
    common_mistake:
      es: "Confundir con la amplitud de la onda en el espacio tridimensional."
      en: "Confusing with the wave amplitude in three-dimensional space."
    typical_range:
      es: "Desde 10^-12 m (rayos gamma) hasta 10^4 m (ondas de radio de baja frecuencia)."
      en: "From 10^-12 m (gamma rays) up to 10^4 m (low frequency radio waves)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre estrictamente positiva por ser una distancia o periodo espacial."
        en: "Always strictly positive as it is a distance or spatial period."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una longitud de onda cero carece de sentido físico para una perturbación periódica."
        en: "A zero wavelength lacks physical meaning for a periodic perturbation."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[1e-15, 1e6]"
    interpretation_role:
      primary_for:
        - "escala_espacial"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Determina los límites de difracción e interacción con objetos de tamaño comparable."
      en: "Determines the limits of diffraction and interaction with objects of comparable size."

  - id: I
    symbol: "I"
    nombre:
      es: "Intensidad media"
      en: "Mean intensity"
    descripcion:
      es: "Flujo medio de energía que atraviesa una superficie perpendicular a la propagación de la onda."
      en: "Mean flux of energy passing through a surface perpendicular to the wave's propagation."
    unidad_si: "W/m^2"
    dimension: "[M T⁻³]"
    is_vector: false
    components: null
    category: "derived"
    physical_role: "core_physical_quantity"
    used_in:
      - "intensidad"
    common_mistake:
      es: "Olvidar que escala con el cuadrado de la amplitud del campo eléctrico."
      en: "Forgetting that it scales with the square of the electric field amplitude."
    typical_range:
      es: "Desde 10^-12 W/m^2 (límite auditivo equivalente en luz) hasta 10^18 W/m^2 (láseres pulsados ultrafocos)."
      en: "From 10^-12 W/m^2 (hearing threshold equivalent in light) up to 10^18 W/m^2 (ultrafocused pulsed lasers)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre no negativa por ser un flujo de potencia integrada."
        en: "Always non-negative as it is an integrated power flux."
    zero_behavior:
      allowed: true
      meaning:
        es: "Indica que no hay transporte neto de energía electromagnética."
        en: "Indicates that there is no net transport of electromagnetic energy."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "[0, 1e20]"
    interpretation_role:
      primary_for:
        - "transporte_energia"
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Representa el módulo del promedio temporal del vector de Poynting."
      en: "Represents the modulus of the time average of the Poynting vector."
`;export{e as default};
