const e=`version: "1.0"
leaf_id: reflexion-y-transmision-en-solidos

magnitudes:
  - id: R_amp
    nombre:
      es: Coeficiente de reflexion en amplitud
      en: Amplitude reflection coefficient
    simbolo: R
    unidad: adimensional
    dimension: "[1]"
    tipo: escalar
    physical_role: core_physical_quantity
    descripcion:
      es: "Cociente entre la amplitud de la onda reflejada y la amplitud de la onda incidente. Su signo indica si la onda reflejada sufre inversion de fase."
      en: "Ratio of reflected wave amplitude to incident wave amplitude. Its sign indicates whether the reflected wave undergoes phase inversion."
    rango:
      min: -1.0
      max: 1.0
      tipico: 0.5
      nota:
        es: "Vale cero cuando las impedancias coinciden. Se acerca a +1 o -1 cuando el contraste es extremo."
        en: "Equals zero when impedances match. Approaches +1 or -1 when contrast is extreme."
    sign_behavior:
      es: "Positivo si Z_2 > Z_1 (reflexion sin inversion). Negativo si Z_2 < Z_1 (reflexion con inversion de fase)."
      en: "Positive if Z_2 > Z_1 (reflection without inversion). Negative if Z_2 < Z_1 (reflection with phase inversion)."
    zero_behavior:
      es: "R nulo indica acoplamiento perfecto: toda la energia se transmite sin reflexion."
      en: "Zero R indicates perfect matching: all energy is transmitted without reflection."
    interpretation_role:
      es: "Indicador principal de desajuste de impedancias. Un valor alto senala que la mayor parte de la onda rebota."
      en: "Main indicator of impedance mismatch. A high value signals that most of the wave bounces back."
    graph_binding:
      axis: "y"
      label: { es: "R", en: "R" }
    pedagogical_notes:
      es: "Es la primera magnitud que debe evaluarse al estudiar una interfaz. Su signo da informacion sobre la fase."
      en: "It is the first quantity to evaluate when studying an interface. Its sign gives phase information."

  - id: T_amp
    nombre:
      es: Coeficiente de transmision en amplitud
      en: Amplitude transmission coefficient
    simbolo: T
    unidad: adimensional
    dimension: "[1]"
    tipo: escalar
    physical_role: core_physical_quantity
    descripcion:
      es: "Cociente entre la amplitud de la onda transmitida y la amplitud de la onda incidente. Siempre positivo en incidencia normal."
      en: "Ratio of transmitted wave amplitude to incident wave amplitude. Always positive at normal incidence."
    rango:
      min: 0.0
      max: 2.0
      tipico: 1.0
      nota:
        es: "Puede superar la unidad si Z_2 < Z_1 (la amplitud crece en el medio menos denso), pero la energia transmitida nunca excede la incidente."
        en: "Can exceed unity if Z_2 < Z_1 (amplitude grows in the less dense medium), but transmitted energy never exceeds the incident."
    sign_behavior:
      es: "Siempre positivo para incidencia normal."
      en: "Always positive for normal incidence."
    zero_behavior:
      es: "T nulo significaria reflexion total (pared rigida ideal o superficie libre ideal dependiendo del limite)."
      en: "Zero T would mean total reflection (ideal rigid wall or ideal free surface depending on the limit)."
    interpretation_role:
      es: "Fraccion de amplitud que penetra en el segundo medio. Complementa a R para verificar continuidad."
      en: "Fraction of amplitude penetrating the second medium. Complements R to verify continuity."
    graph_binding:
      axis: "y"
      label: { es: "T", en: "T" }
    pedagogical_notes:
      es: "T puede ser mayor que 1 sin violar la conservacion de energia, porque la energia depende del producto amplitud al cuadrado por impedancia."
      en: "T can be greater than 1 without violating energy conservation, because energy depends on the product of squared amplitude and impedance."

  - id: R_E
    nombre:
      es: Coeficiente de reflexion en energia
      en: Energy reflection coefficient
    simbolo: "R_E"
    unidad: adimensional
    dimension: "[1]"
    tipo: escalar
    physical_role: core_physical_quantity
    descripcion:
      es: "Fraccion de la intensidad incidente que se refleja. Es el cuadrado del coeficiente de reflexion en amplitud."
      en: "Fraction of incident intensity that is reflected. It is the square of the amplitude reflection coefficient."
    rango:
      min: 0.0
      max: 1.0
      tipico: 0.25
      nota:
        es: "Entre 0 (acoplamiento perfecto) y 1 (reflexion total). Interfaces tipicas acero-aluminio: R_E aprox. 0.12."
        en: "Between 0 (perfect matching) and 1 (total reflection). Typical steel-aluminium interface: R_E approx. 0.12."
    sign_behavior:
      es: "Siempre positivo o nulo."
      en: "Always positive or zero."
    zero_behavior:
      es: "R_E nulo indica que toda la energia pasa al segundo medio."
      en: "Zero R_E indicates all energy passes to the second medium."
    interpretation_role:
      es: "Magnitud directamente medible en ensayos ultrasonicos. Indica la eficiencia de deteccion de defectos."
      en: "Directly measurable quantity in ultrasonic tests. Indicates defect detection efficiency."
    graph_binding:
      axis: "y"
      label: { es: "R_E", en: "R_E" }
    pedagogical_notes:
      es: "Es la magnitud mas relevante para balances de potencia y diseño de sistemas de transmision acustica."
      en: "It is the most relevant quantity for power balances and acoustic transmission system design."

  - id: T_E
    nombre:
      es: Coeficiente de transmision en energia
      en: Energy transmission coefficient
    simbolo: "T_E"
    unidad: adimensional
    dimension: "[1]"
    tipo: escalar
    physical_role: core_physical_quantity
    descripcion:
      es: "Fraccion de la intensidad incidente que se transmite al segundo medio. Complementaria de R_E por conservacion de energia."
      en: "Fraction of incident intensity transmitted to the second medium. Complementary to R_E by energy conservation."
    rango:
      min: 0.0
      max: 1.0
      tipico: 0.75
      nota:
        es: "Maxima (1.0) cuando Z_1 es igual a Z_2. Interfaces tipicas acero-aluminio: T_E aprox. 0.88."
        en: "Maximum (1.0) when Z_1 equals Z_2. Typical steel-aluminium interface: T_E approx. 0.88."
    sign_behavior:
      es: "Siempre positivo o nulo."
      en: "Always positive or zero."
    zero_behavior:
      es: "T_E nulo implica reflexion total: toda la energia rebota."
      en: "Zero T_E implies total reflection: all energy bounces back."
    interpretation_role:
      es: "Eficiencia de transmision a traves de la interfaz. Es la magnitud objetivo en diseño de capas de acoplamiento."
      en: "Transmission efficiency through the interface. It is the target quantity in coupling layer design."
    graph_binding:
      axis: "y"
      label: { es: "T_E", en: "T_E" }
    pedagogical_notes:
      es: "La suma R_E + T_E siempre es 1. Si uno crece, el otro disminuye. No existe creacion ni destruccion de energia en la interfaz."
      en: "The sum R_E + T_E is always 1. If one grows, the other decreases. There is no creation or destruction of energy at the interface."

  - id: Z_1
    nombre:
      es: Impedancia acustica del medio 1
      en: Acoustic impedance of medium 1
    simbolo: "Z_1"
    unidad: "Pa·s/m"
    dimension: "[M L⁻² T⁻¹]"
    tipo: escalar
    physical_role: core_physical_quantity
    descripcion:
      es: "Producto de la densidad por la velocidad de onda en el primer medio (medio de incidencia). Determina la respuesta del medio a la perturbacion acustica."
      en: "Product of density and wave velocity in the first medium (incidence medium). Determines the medium response to acoustic disturbance."
    rango:
      min: 1e3
      max: 1e8
      tipico: 4.6e7
      nota:
        es: "Aire aprox. 415 Pa·s/m, agua aprox. 1.5e6, acero aprox. 4.6e7."
        en: "Air approx. 415 Pa·s/m, water approx. 1.5e6, steel approx. 4.6e7."
    sign_behavior:
      es: "Siempre positivo."
      en: "Always positive."
    zero_behavior:
      es: "Impedancia nula corresponderia al vacio: no hay medio, no hay propagacion."
      en: "Zero impedance would correspond to vacuum: no medium, no propagation."
    interpretation_role:
      es: "Caracteriza el primer medio. Su valor relativo frente a Z_2 determina el reparto reflexion/transmision."
      en: "Characterises the first medium. Its relative value against Z_2 determines the reflection/transmission split."
    graph_binding:
      axis: "x"
      label: { es: "Z_1 (MRayl)", en: "Z_1 (MRayl)" }
    pedagogical_notes:
      es: "Se mide en rayl (Pa·s/m) o megarayl (MRayl). Es la propiedad acustica intrinseca del medio."
      en: "Measured in rayl (Pa·s/m) or megarayl (MRayl). It is the intrinsic acoustic property of the medium."

  - id: Z_2
    nombre:
      es: Impedancia acustica del medio 2
      en: Acoustic impedance of medium 2
    simbolo: "Z_2"
    unidad: "Pa·s/m"
    dimension: "[M L⁻² T⁻¹]"
    tipo: escalar
    physical_role: core_physical_quantity
    descripcion:
      es: "Producto de la densidad por la velocidad de onda en el segundo medio (medio de transmision). Su contraste con Z_1 determina la reflexion."
      en: "Product of density and wave velocity in the second medium (transmission medium). Its contrast with Z_1 determines reflection."
    rango:
      min: 1e3
      max: 1e8
      tipico: 1.7e7
      nota:
        es: "Aluminio aprox. 1.7e7, cobre aprox. 4.2e7, titanio aprox. 2.7e7."
        en: "Aluminium approx. 1.7e7, copper approx. 4.2e7, titanium approx. 2.7e7."
    sign_behavior:
      es: "Siempre positivo."
      en: "Always positive."
    zero_behavior:
      es: "Impedancia nula del segundo medio implicaria superficie libre: reflexion total con inversion de fase."
      en: "Zero impedance of the second medium would imply a free surface: total reflection with phase inversion."
    interpretation_role:
      es: "Caracteriza el segundo medio. Su relacion con Z_1 es todo lo que se necesita para calcular los coeficientes."
      en: "Characterises the second medium. Its ratio to Z_1 is all that is needed to calculate the coefficients."
    graph_binding:
      axis: "x"
      label: { es: "Z_2 (MRayl)", en: "Z_2 (MRayl)" }
    pedagogical_notes:
      es: "En ensayos ultrasonicos, Z_2 es la impedancia del material que se inspecciona o de un defecto interno."
      en: "In ultrasonic tests, Z_2 is the impedance of the material being inspected or of an internal defect."

  - id: Z_medio
    nombre:
      es: Impedancia acustica generica
      en: Generic acoustic impedance
    simbolo: Z
    unidad: "Pa·s/m"
    dimension: "[M L⁻² T⁻¹]"
    tipo: escalar
    physical_role: derived
    descripcion:
      es: "Impedancia acustica calculada como producto de densidad y velocidad de onda para cualquier medio."
      en: "Acoustic impedance calculated as product of density and wave velocity for any medium."
    rango:
      min: 1e2
      max: 1e8
      tipico: 1e7
      nota:
        es: "Desde gases (cientos de rayl) hasta metales densos (decenas de megarayl)."
        en: "From gases (hundreds of rayl) to dense metals (tens of megarayl)."
    sign_behavior:
      es: "Siempre positivo."
      en: "Always positive."
    zero_behavior:
      es: "Impedancia nula es fisicamente irrealizable."
      en: "Zero impedance is physically unrealisable."
    interpretation_role:
      es: "Propiedad intrinseca del medio que conecta densidad y velocidad con el comportamiento ondulatorio en interfaces."
      en: "Intrinsic medium property connecting density and velocity with wave behaviour at interfaces."
    graph_binding:
      axis: "y"
      label: { es: "Z (MRayl)", en: "Z (MRayl)" }
    pedagogical_notes:
      es: "Se calcula antes de evaluar los coeficientes de reflexion y transmision."
      en: "It is calculated before evaluating reflection and transmission coefficients."

  - id: rho_medio
    nombre:
      es: Densidad del medio
      en: Medium density
    simbolo: "\\\\rho"
    unidad: "kg/m³"
    dimension: "[M L⁻³]"
    tipo: escalar
    physical_role: auxiliary
    descripcion:
      es: "Masa por unidad de volumen del material. Junto con la velocidad de onda, define la impedancia acustica."
      en: "Mass per unit volume of the material. Together with wave velocity, defines acoustic impedance."
    rango:
      min: 1
      max: 22000
      tipico: 7800
      nota:
        es: "Aire 1.2, agua 1000, aluminio 2700, acero 7800, tungsteno 19300."
        en: "Air 1.2, water 1000, aluminium 2700, steel 7800, tungsten 19300."
    sign_behavior:
      es: "Siempre positivo."
      en: "Always positive."
    zero_behavior:
      es: "Densidad nula implica vacio: sin medio, sin propagacion."
      en: "Zero density implies vacuum: no medium, no propagation."
    interpretation_role:
      es: "Variable de entrada para calcular la impedancia acustica."
      en: "Input variable to calculate acoustic impedance."
    graph_binding:
      axis: "x"
      label: { es: "rho (kg/m³)", en: "rho (kg/m³)" }
    pedagogical_notes:
      es: "Es un dato de tabla para la mayoria de materiales de ingenieria."
      en: "It is a tabulated value for most engineering materials."

  - id: v_onda
    nombre:
      es: Velocidad de la onda
      en: Wave velocity
    simbolo: v
    unidad: m/s
    dimension: "[L T⁻¹]"
    tipo: escalar
    physical_role: auxiliary
    descripcion:
      es: "Velocidad de fase de la onda elastica en el medio. Puede ser longitudinal o transversal segun el tipo de onda considerada."
      en: "Phase velocity of the elastic wave in the medium. Can be longitudinal or transverse depending on the wave type considered."
    rango:
      min: 300
      max: 12000
      tipico: 5900
      nota:
        es: "Aire 343, agua 1480, aluminio 6350 (longitudinal), acero 5900 (longitudinal)."
        en: "Air 343, water 1480, aluminium 6350 (longitudinal), steel 5900 (longitudinal)."
    sign_behavior:
      es: "Siempre positivo."
      en: "Always positive."
    zero_behavior:
      es: "Velocidad nula implicaria que la onda no se propaga."
      en: "Zero velocity would imply the wave does not propagate."
    interpretation_role:
      es: "Variable de entrada para calcular la impedancia acustica."
      en: "Input variable to calculate acoustic impedance."
    graph_binding:
      axis: "x"
      label: { es: "v (m/s)", en: "v (m/s)" }
    pedagogical_notes:
      es: "La velocidad relevante es la del tipo de onda que incide en la interfaz (P o S)."
      en: "The relevant velocity is that of the wave type incident on the interface (P or S)."
`;export{e as default};
