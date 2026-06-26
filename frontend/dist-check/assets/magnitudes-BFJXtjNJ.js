const e=`version: "2.0"
magnitudes:

  - id: U_e
    symbol: U_e
    nombre:
      es: Energía potencial eléctrica
      en: Electric potential energy
    descripcion:
      es: "Energía almacenada en un sistema de cargas debido a su posición relativa en el campo eléctrico. Equivale al trabajo realizado por el campo eléctrico al ensamblar la configuración de cargas desde el infinito."
      en: "Energy stored in a system of charges due to their relative positions in the electric field. Equals the work done by the electric field to assemble the charge configuration from infinity."
    unidad_si: "J"
    dimension: "[M L² T⁻²]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in:
      - cálculo del trabajo al mover una carga entre dos puntos
      - análisis de la conservación de energía en sistemas electrostáticos
      - determinación de la velocidad de partículas cargadas en campos eléctricos
    common_mistake: "Confundir energía potencial eléctrica con diferencia de potencial. La energía potencial depende de la carga que se mueve, mientras que la diferencia de potencial es una propiedad del campo independiente de esa carga."
    typical_range: "Desde electronvoltios (1.6×10⁻¹⁹ J) en física atómica hasta kilojoules en condensadores de alta tensión."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positiva si las cargas son del mismo signo (repulsión), lo que significa que hay energía disponible para separarlas. Negativa si las cargas son de signo opuesto (atracción), lo que indica que hay que aportar energía para separarlas."
        en: "Positive if the charges have the same sign (repulsion), meaning energy is available to separate them. Negative if the charges have opposite signs (attraction), indicating that energy must be supplied to separate them."
    zero_behavior:
      allowed: true
      meaning:
        es: "Energía potencial nula cuando las cargas están separadas infinitamente (convenio de referencia) o cuando la carga de prueba es cero."
        en: "Zero potential energy when the charges are infinitely separated (reference convention) or when the test charge is zero."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for:
        - lectura de la energía almacenada en la configuración de cargas
        - cálculo del trabajo realizado por el campo al mover una carga
      secondary_for:
        - análisis de la energía cinética ganada por la carga
    graph_binding:
      channels:
        - y_axis
    pedagogical_notes:
      es: "[[U_e]] es la magnitud dominante de este leaf. El error más frecuente es confundirla con el potencial eléctrico [[V_A]]: la energía es [[U_e]] multiplicada por la carga [[q]], mientras que el potencial es la energía por unidad de carga."
      en: "[[U_e]] is the dominant magnitude of this leaf. The most frequent error is confusing it with the electric potential [[V_A]]: energy is [[U_e]] equal to [[q]] times [[V_A]], while potential is energy per unit charge."

  - id: q
    symbol: q
    nombre:
      es: Carga de prueba
      en: Test charge
    descripcion:
      es: "Carga eléctrica que se coloca en un punto del campo para determinar la energía potencial eléctrica en ese punto. Es la carga cuya energía potencial se calcula."
      en: "Electric charge placed at a point in the field to determine the electric potential energy at that point. It is the charge whose potential energy is calculated."
    unidad_si: "C"
    dimension: "[I T]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - cálculo de la energía potencial a partir del potencial eléctrico
      - relación entre energía y trabajo eléctrico
    common_mistake: "Creer que la energía potencial es una propiedad de la carga sola. La energía es una propiedad de la interacción entre la carga y el campo, no de la carga aislada."
    typical_range: "Desde la carga del electrón (1.6×10⁻¹⁹ C) hasta cargas macroscópicas en microcoulombios."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positiva para cargas positivas y negativa para cargas negativas. El signo de [[q]] determina si la energía potencial en un punto dado de potencial positivo es positiva o negativa."
        en: "Positive for positive charges and negative for negative charges. The sign of [[q]] determines whether the potential energy at a point of positive potential is positive or negative."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una carga nula no tiene energía potencial en ningún campo; este caso carece de interés físico en este leaf."
        en: "A zero charge has no potential energy in any field; this case has no physical interest in this leaf."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞) \\\\ {0}"
    interpretation_role:
      primary_for:
        - cálculo de la energía potencial eléctrica en un campo dado
      secondary_for:
        - conversión entre energía y diferencia de potencial
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "[[q]] es el factor que convierte el potencial eléctrico [[V_A]] en energía potencial [[U_e]]. El alumno debe distinguir entre la carga fuente (que genera el campo) y la carga de prueba [[q]] (cuya energía se calcula)."
      en: "[[q]] is the factor that converts the electric potential [[V_A]] into potential energy [[U_e]]. Students must distinguish between the source charge (which generates the field) and the test charge [[q]] (whose energy is calculated)."

  - id: V_A
    symbol: V_A
    nombre:
      es: Potencial eléctrico en el punto A
      en: Electric potential at point A
    descripcion:
      es: "Potencial eléctrico en el punto donde se sitúa la carga de prueba. Determina la energía potencial que tendrá la carga en ese punto mediante el producto con la carga."
      en: "Electric potential at the point where the test charge is placed. Determines the potential energy the charge will have at that point through the product with the charge."
    unidad_si: "V"
    dimension: "[M L² T⁻³ I⁻¹]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - cálculo de la energía potencial eléctrica de una carga en un campo
      - análisis de superficies equipotenciales
    common_mistake: "Confundir el potencial eléctrico con la energía potencial. El potencial es energía por unidad de carga; la energía real depende también de la carga que se coloca en ese punto."
    typical_range: "Desde microvolts en señales biológicas hasta kilovolts en alta tensión."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positivo en las proximidades de cargas positivas y negativo en las proximidades de cargas negativas. Determina hacia dónde se moverá espontáneamente la carga de prueba."
        en: "Positive near positive source charges and negative near negative source charges. Determines the direction in which the test charge will spontaneously move."
    zero_behavior:
      allowed: true
      meaning:
        es: "Potencial nulo en el infinito (referencia estándar) o en puntos intermedios entre cargas de signo opuesto donde el potencial se cancela."
        en: "Zero potential at infinity (standard reference) or at intermediate points between charges of opposite sign where potentials cancel."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for:
        - cálculo de la energía potencial eléctrica de una carga en un punto del campo
      secondary_for:
        - análisis de la distribución espacial de la energía en el campo
    graph_binding:
      channels:
        - x_axis
    pedagogical_notes:
      es: "[[V_A]] es la magnitud del campo que, multiplicada por [[q]], da la energía potencial [[U_e]]. El alumno debe saber que [[V_A]] es una característica del punto en el espacio, independiente de la carga que se coloque allí."
      en: "[[V_A]] is the field magnitude that, multiplied by [[q]], gives the potential energy [[U_e]]. Students must understand that [[V_A]] is a characteristic of the point in space, independent of the charge placed there."

  - id: q_1
    symbol: q_1
    nombre:
      es: Primera carga del sistema
      en: First charge of the system
    descripcion:
      es: "Primera carga del sistema de dos cargas puntuales cuya energía de interacción se calcula. Puede ser de cualquier signo."
      en: "First charge of the two-point-charge system whose interaction energy is calculated. Can be of any sign."
    unidad_si: "C"
    dimension: "[I T]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - cálculo de la energía de interacción entre dos cargas puntuales
    common_mistake: "Olvidar que la energía de interacción es compartida por las dos cargas: no es la energía de q_1 sola ni la de q_2 sola, sino la del sistema."
    typical_range: "Desde la carga del electrón (1.6×10⁻¹⁹ C) hasta microcoulombios en experimentos de laboratorio."
    sign_behavior:
      has_sign: true
      meaning:
        es: "El signo de [[q_1]] junto con el de [[q_2]] determina el signo de la energía potencial del sistema: si son iguales la energía es positiva (repulsión), si son opuestos es negativa (atracción)."
        en: "The sign of [[q_1]] together with [[q_2]] determines the sign of the system's potential energy: if equal the energy is positive (repulsion), if opposite it is negative (attraction)."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una carga nula elimina la interacción; la energía potencial del sistema sería nula y el concepto de energía de interacción pierde sentido."
        en: "A zero charge eliminates the interaction; the system's potential energy would be zero and the concept of interaction energy loses meaning."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞) \\\\ {0}"
    interpretation_role:
      primary_for:
        - cálculo de la energía de interacción coulombiana entre dos cargas
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "[[q_1]] aparece siempre junto a [[q_2]] en la fórmula de energía de interacción. El alumno debe notar que el producto [[q_1]]·[[q_2]] determina el signo de la energía, mientras que [[r_12]] determina su magnitud."
      en: "[[q_1]] always appears together with [[q_2]] in the interaction energy formula. Students should note that the product [[q_1]]·[[q_2]] determines the sign of the energy, while [[r_12]] determines its magnitude."

  - id: q_2
    symbol: q_2
    nombre:
      es: Segunda carga del sistema
      en: Second charge of the system
    descripcion:
      es: "Segunda carga del sistema de dos cargas puntuales. Junto con [[q_1]] y la distancia [[r_12]] define completamente la energía potencial de interacción del sistema."
      en: "Second charge of the two-point-charge system. Together with [[q_1]] and the distance [[r_12]] it completely defines the system's interaction potential energy."
    unidad_si: "C"
    dimension: "[I T]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - cálculo de la energía de interacción entre dos cargas puntuales
    common_mistake: "Tratar [[q_2]] como la carga de prueba cuando es una carga real que forma parte del sistema y contribuye al campo."
    typical_range: "Desde la carga del electrón (1.6×10⁻¹⁹ C) hasta microcoulombios en experimentos de laboratorio."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Su signo, combinado con el de [[q_1]], determina si la interacción es repulsiva (energía positiva) o atractiva (energía negativa)."
        en: "Its sign, combined with [[q_1]], determines whether the interaction is repulsive (positive energy) or attractive (negative energy)."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una segunda carga nula elimina la interacción; la energía de interacción sería cero."
        en: "A zero second charge eliminates the interaction; the interaction energy would be zero."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞) \\\\ {0}"
    interpretation_role:
      primary_for:
        - cálculo de la energía de interacción coulombiana
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "[[q_2]] es el segundo factor del producto de cargas en la fórmula de energía de interacción. El alumno debe comprender que intercambiar [[q_1]] y [[q_2]] no cambia el resultado, lo que refleja el principio de acción y reacción."
      en: "[[q_2]] is the second factor in the charge product of the interaction energy formula. Students should understand that swapping [[q_1]] and [[q_2]] does not change the result, reflecting Newton's third law."

  - id: r_12
    symbol: r_{12}
    nombre:
      es: Distancia entre las cargas
      en: Distance between the charges
    descripcion:
      es: "Separación entre las dos cargas puntuales [[q_1]] y [[q_2]]. La energía de interacción es inversamente proporcional a esta distancia."
      en: "Separation between the two point charges [[q_1]] and [[q_2]]. The interaction energy is inversely proportional to this distance."
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - cálculo de la energía de interacción entre dos cargas puntuales
      - gráfico de la variación de la energía potencial con la distancia
    common_mistake: "Confundir la distancia entre las cargas con la distancia de una de las cargas a un punto de referencia. Para la energía de interacción, [[r_12]] es la separación mutua entre las dos cargas."
    typical_range: "Desde femtómetros (10⁻¹⁵ m) en física nuclear hasta metros en experimentos macroscópicos."
    sign_behavior:
      has_sign: false
      meaning:
        es: "[[r_12]] es una distancia, siempre positiva. El signo de la energía de interacción lo determina el producto de las cargas, no la distancia."
        en: "[[r_12]] is a distance, always positive. The sign of the interaction energy is determined by the product of the charges, not the distance."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una separación nula implicaría energía infinita (divergencia coulombiana), lo que no es físicamente realizable para cargas puntuales reales."
        en: "Zero separation would imply infinite energy (Coulomb divergence), which is not physically realizable for real point charges."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - determinación de la magnitud de la energía de interacción
        - lectura del gráfico energía vs distancia
      secondary_for:
        - análisis del trabajo necesario para acercar o alejar las cargas
    graph_binding:
      channels:
        - x_axis
    pedagogical_notes:
      es: "[[r_12]] es el eje horizontal del gráfico canónico de este leaf (energía potencial frente a distancia). El alumno debe identificar que cuando [[r_12]] tiende a infinito la energía tiende a cero, y cuando [[r_12]] disminuye la energía crece en módulo."
      en: "[[r_12]] is the horizontal axis of this leaf's canonical graph (potential energy vs. distance). Students should identify that as [[r_12]] tends to infinity the energy tends to zero, and as [[r_12]] decreases the energy grows in magnitude."

  - id: k_e
    symbol: k_e
    nombre:
      es: Constante de Coulomb
      en: Coulomb constant
    descripcion:
      es: "Constante de proporcionalidad de la interacción electrostática en el vacío. Su valor es aproximadamente 8.99×10⁹ N·m²/C²."
      en: "Proportionality constant of the electrostatic interaction in vacuum. Its value is approximately 8.99×10⁹ N·m²/C²."
    unidad_si: "N·m²/C²"
    dimension: "[M L³ T⁻⁴ I⁻²]"
    is_vector: false
    components: []
    category: constant
    physical_role: input_parameter
    used_in:
      - ley de Coulomb
      - energía de interacción entre cargas puntuales
      - potencial de una carga puntual
    common_mistake: "Usar el valor de la permitividad del vacío en lugar de la constante de Coulomb, o mezclar unidades SI con unidades CGS."
    typical_range: "Valor exacto en SI: 8.9875×10⁹ N·m²/C²."
    sign_behavior:
      has_sign: false
      meaning:
        es: "[[k_e]] es siempre positiva por convenio. El signo de la energía de interacción lo determina el producto de las cargas."
        en: "[[k_e]] is always positive by convention. The sign of the interaction energy is determined by the product of the charges."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una constante nula significaría la ausencia de interacción eléctrica, lo que contradice la naturaleza electromagnética del universo."
        en: "A zero constant would imply the absence of electric interaction, contradicting the electromagnetic nature of the universe."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - escala de la energía de interacción coulombiana
      secondary_for:
        - comparación entre la fuerza gravitacional y la eléctrica
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "[[k_e]] fija la escala de la energía de interacción. El alumno debe tenerla memorizada en SI para detectar resultados absurdos: una energía de interacción de joules entre cargas de microcoulombios a distancias de centímetros es físicamente razonable."
      en: "[[k_e]] sets the scale of the interaction energy. Students should have it memorized in SI to detect absurd results: an interaction energy of joules between microcoulomb charges at centimeter distances is physically reasonable."

  - id: DeltaU_e
    symbol: "\\\\Delta U_e"
    nombre:
      es: Variación de energía potencial eléctrica
      en: Change in electric potential energy
    descripcion:
      es: "Diferencia entre la energía potencial eléctrica final e inicial de una carga al moverse entre dos puntos del campo. Igual al trabajo realizado por el campo cambiado de signo."
      en: "Difference between the final and initial electric potential energy of a charge moving between two points of the field. Equals the work done by the field with opposite sign."
    unidad_si: "J"
    dimension: "[M L² T⁻²]"
    is_vector: false
    components: []
    category: derived
    physical_role: derived
    used_in:
      - relación entre trabajo del campo y variación de energía potencial
      - análisis de la conservación de energía mecánica total
    common_mistake: "Confundir la variación de energía potencial con el trabajo del campo: son opuestos en signo. Si el campo realiza trabajo positivo, la energía potencial disminuye."
    typical_range: "Puede ser positiva o negativa; su módulo está en el mismo orden que [[U_e]]."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positiva si la carga se mueve hacia un punto de mayor energía potencial (el campo realiza trabajo negativo). Negativa si la carga se mueve a favor del campo (el campo realiza trabajo positivo)."
        en: "Positive if the charge moves to a point of higher potential energy (field does negative work). Negative if the charge moves with the field (field does positive work)."
    zero_behavior:
      allowed: true
      meaning:
        es: "Variación nula si la carga se mueve sobre una superficie equipotencial o regresa al punto de partida."
        en: "Zero change if the charge moves along an equipotential surface or returns to its starting point."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for:
        - cálculo del trabajo del campo a partir del cambio de energía potencial
      secondary_for:
        - análisis de la conservación de la energía mecánica total
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "[[DeltaU_e]] es el cambio de estado del sistema. El alumno debe recordar que el trabajo del campo eléctrico sobre la carga es el negativo de [[DeltaU_e]], lo que conecta este leaf con el principio de conservación de energía."
      en: "[[DeltaU_e]] is the change of state of the system. Students must remember that the work done by the electric field on the charge is the negative of [[DeltaU_e]], connecting this leaf to the principle of energy conservation."
`;export{e as default};
