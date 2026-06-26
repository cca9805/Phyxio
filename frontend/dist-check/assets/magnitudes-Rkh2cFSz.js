const e=`version: "2.0"
magnitudes:

  - id: F_C
    symbol: F_C
    nombre:
      es: Fuerza de Coulomb
      en: Coulomb force
    descripcion:
      es: Fuerza electrostática que ejerce una carga puntual sobre otra. Es vectorial y sigue la ley de superposición.
      en: Electrostatic force exerted by one point charge on another. It is a vector quantity and obeys the superposition principle.
    unidad_si: N
    dimension: "[M L T⁻²]"
    is_vector: true
    components: ["F_C_x", "F_C_y", "F_C_z"]
    category: fundamental
    physical_role: core_physical_quantity
    used_in:
      - cálculo de la fuerza entre dos cargas puntuales
      - determinación del campo eléctrico como fuerza por unidad de carga
      - análisis de equilibrio de sistemas de cargas
    common_mistake: "Confundir el módulo de la fuerza (siempre positivo) con su signo físico: la fuerza atractiva tiene módulo positivo pero dirección opuesta a la repulsiva."
    typical_range: "Desde 10⁻¹⁵ N (interacciones nucleares a distancia de picómetros) hasta varios Newton en esferas metálicas cargadas macroscópicamente."
    sign_behavior:
      has_sign: false
      meaning:
        es: "El módulo de la fuerza es siempre positivo. El carácter atractivo o repulsivo se determina por el producto de los signos de las cargas: si es positivo la fuerza es repulsiva, si es negativo es atractiva."
        en: "The magnitude of the force is always positive. Attractive or repulsive character is determined by the product of the charge signs: positive product means repulsive, negative means attractive."
    zero_behavior:
      allowed: true
      meaning:
        es: "La fuerza es cero únicamente si una de las cargas es nula o si la distancia es infinita. En la práctica indica ausencia de interacción electrostática."
        en: "Force is zero only if one charge is zero or the distance is infinite. In practice it indicates absence of electrostatic interaction."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, +∞)"
    interpretation_role:
      primary_for:
        - lectura de la fuerza calculada entre dos cargas
        - determinación del carácter atractivo o repulsivo
      secondary_for:
        - cálculo del campo eléctrico de una carga puntual
    graph_binding:
      channels:
        - y_axis
    pedagogical_notes:
      es: "En la ley de Coulomb, [[F_C]] es la magnitud central. El error más frecuente es no distinguir entre el módulo escalar y la dirección vectorial: el módulo no cambia al intercambiar las cargas (tercera ley de Newton), pero la dirección sí."
      en: "In Coulomb's law, [[F_C]] is the central magnitude. The most frequent mistake is not distinguishing between the scalar magnitude and the vector direction: the magnitude does not change when charges are swapped (Newton's third law), but the direction does."

  - id: q1
    symbol: q_1
    nombre:
      es: Carga eléctrica 1
      en: Electric charge 1
    descripcion:
      es: Primera carga puntual fuente de la interacción coulombiana. Puede ser positiva o negativa.
      en: First point source charge of the Coulomb interaction. Can be positive or negative.
    unidad_si: C
    dimension: "[I T]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - fórmula de la fuerza de Coulomb
      - cálculo del campo eléctrico de una carga puntual
    common_mistake: "Olvidar que [[q1]] puede ser negativa: el signo del producto de las dos cargas determina el carácter atractivo o repulsivo, no el signo de una sola."
    typical_range: "Desde la carga del electrón (aprox. 1.6×10⁻¹⁹ C) hasta microcoulombios en experimentos de laboratorio."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positiva si hay déficit de electrones; negativa si hay exceso. El signo de [[q1]] junto con el de [[q2]] determina el carácter atractivo (signos opuestos) o repulsivo (mismo signo)."
        en: "Positive if there is a deficit of electrons; negative if there is an excess. The sign of [[q1]] combined with that of [[q2]] determines whether the force is attractive (opposite signs) or repulsive (same sign)."
    zero_behavior:
      allowed: true
      meaning:
        es: "Si [[q1]] es cero no hay fuerza electrostática, independientemente del valor de [[q2]] y de la distancia [[r12]]."
        en: "If [[q1]] is zero there is no electrostatic force, regardless of the value of [[q2]] and the distance [[r12]]."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for:
        - determinación del carácter de la interacción (atractiva o repulsiva)
        - cuantificación de la fuente de la fuerza
      secondary_for:
        - cálculo del campo eléctrico generado por esta carga
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "[[q1]] aparece siempre bajo el módulo en la fórmula escalar de Coulomb; el producto [[q1]]·[[q2]] determina el signo de la fuerza vectorial. Un error frecuente es incluir el signo de [[q1]] en el módulo en lugar de deducirlo del producto."
      en: "[[q1]] always appears under the modulus in Coulomb's scalar formula; the product [[q1]]·[[q2]] determines the sign of the vector force. A frequent mistake is including the sign of [[q1]] in the modulus instead of deducing it from the product."

  - id: q2
    symbol: q_2
    nombre:
      es: Carga eléctrica 2
      en: Electric charge 2
    descripcion:
      es: Segunda carga puntual que interactúa con la primera. Puede ser positiva o negativa.
      en: Second point charge interacting with the first. Can be positive or negative.
    unidad_si: C
    dimension: "[I T]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - fórmula de la fuerza de Coulomb
      - cálculo de la fuerza sobre la carga de prueba
    common_mistake: "Confundir el papel simétrico de [[q2]] respecto a [[q1]]: ambas cargas son causa y efecto a la vez (tercera ley de Newton); la fuerza sobre [[q2]] tiene el mismo módulo que sobre [[q1]] pero dirección contraria."
    typical_range: "Desde la carga del electrón (aprox. 1.6×10⁻¹⁹ C) hasta decenas de microcoulombios en esferas conductoras de laboratorio."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positiva si hay déficit de electrones; negativa si hay exceso. El signo de [[q2]] determina junto con [[q1]] si la interacción es atractiva o repulsiva."
        en: "Positive if there is an electron deficit; negative if there is an excess. The sign of [[q2]] combined with [[q1]] determines whether the interaction is attractive or repulsive."
    zero_behavior:
      allowed: true
      meaning:
        es: "Si [[q2]] es cero no existe fuerza electrostática. Una carga nula no perturba el campo de [[q1]] ni experimenta fuerza alguna."
        en: "If [[q2]] is zero there is no electrostatic force. A zero charge does not disturb the field of [[q1]] nor does it experience any force."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for:
        - determinación del carácter de la interacción junto con [[q1]]
      secondary_for:
        - cálculo de la fuerza resultante sobre esta carga en presencia de múltiples cargas
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El par ([[q1]], [[q2]]) es intercambiable en la fórmula escalar: el módulo de la fuerza no depende de cuál llamamos 1 y cuál 2. El error conceptual surge cuando el alumno asigna un papel activo solo a [[q1]] y pasivo a [[q2]], cuando en realidad la interacción es mutua y simétrica."
      en: "The pair ([[q1]], [[q2]]) is interchangeable in the scalar formula: the magnitude of the force does not depend on which we call 1 and which we call 2. The conceptual error arises when a student assigns only an active role to [[q1]] and a passive one to [[q2]], when in reality the interaction is mutual and symmetric."

  - id: r12
    symbol: r_{12}
    nombre:
      es: Distancia entre cargas
      en: Distance between charges
    descripcion:
      es: Distancia entre los dos puntos donde se localizan las cargas puntuales. Debe ser estrictamente positiva para que la ley de Coulomb sea aplicable.
      en: Distance between the two points where the point charges are located. Must be strictly positive for Coulomb's law to be applicable.
    unidad_si: m
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - fórmula de la fuerza de Coulomb
      - cálculo del campo eléctrico en función de la posición
    common_mistake: "Olvidar que [[r12]] entra al cuadrado: doblar la distancia reduce la fuerza a una cuarta parte, no a la mitad. Es el fallo más frecuente en estimaciones de orden de magnitud."
    typical_range: "Desde 10⁻¹⁵ m (escala nuclear, donde Coulomb ya no domina) hasta metros en experimentos macroscópicos. El rango operativo típico en laboratorio es 1 cm a 1 m."
    sign_behavior:
      has_sign: false
      meaning:
        es: "[[r12]] es una distancia, siempre estrictamente positiva. Un valor negativo no tiene sentido físico y debe interpretarse como error de signo en el planteamiento."
        en: "[[r12]] is a distance, always strictly positive. A negative value has no physical meaning and must be interpreted as a sign error in the setup."
    zero_behavior:
      allowed: false
      meaning:
        es: "[[r12]] nulo corresponde a la singularidad del modelo de carga puntual: la fuerza diverge. En la práctica indica que el modelo de cargas puntuales ha dejado de ser válido (las cargas tienen extensión real)."
        en: "Zero [[r12]] corresponds to the singularity of the point charge model: the force diverges. In practice it indicates that the point charge model is no longer valid (charges have finite extent)."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - determinación de la dependencia espacial de la fuerza
        - lectura del eje x en el gráfico F vs r
      secondary_for:
        - estimación del orden de magnitud de la fuerza en función de la escala del sistema
    graph_binding:
      channels:
        - x_axis
    pedagogical_notes:
      es: "[[r12]] es la magnitud que introduce la dependencia de la ley inversa del cuadrado. Comprender que la fuerza varía con el cuadrado de la distancia —no linealmente— es el principal obstáculo conceptual. Graficar [[F_C]] frente a [[r12]] con la curva hiperbólica cuadrática es la herramienta didáctica más eficaz."
      en: "[[r12]] is the magnitude that introduces the inverse-square dependence. Understanding that the force varies with the square of the distance —not linearly— is the main conceptual obstacle. Plotting [[F_C]] versus [[r12]] with the quadratic hyperbolic curve is the most effective teaching tool."

  - id: E_C
    symbol: E_C
    nombre:
      es: Campo eléctrico de carga puntual
      en: Electric field of a point charge
    descripcion:
      es: Campo eléctrico generado por una carga puntual [[q1]] en un punto a distancia [[r12]]. Se obtiene dividiendo la fuerza de Coulomb entre la carga de prueba y es independiente de esta.
      en: Electric field generated by a point charge [[q1]] at a point at distance [[r12]]. Obtained by dividing the Coulomb force by the test charge; independent of the test charge.
    unidad_si: "N/C"
    dimension: "[M L T⁻³ I⁻¹]"
    is_vector: true
    components: ["E_C_x", "E_C_y", "E_C_z"]
    category: derived
    physical_role: derived
    used_in:
      - definición del campo eléctrico como fuerza por unidad de carga
      - cálculo de la fuerza sobre una carga de prueba en un campo dado
    common_mistake: "Confundir [[E_C]] con [[F_C]]: [[F_C]] depende de dos cargas y [[E_C]] solo de la carga fuente. [[E_C]] es una propiedad del espacio, no de la carga de prueba."
    typical_range: "Desde 10⁻³ N/C en campos de laboratorio hasta 10⁶ N/C en campos de ruptura dieléctrica del aire."
    sign_behavior:
      has_sign: false
      meaning:
        es: "El módulo de [[E_C]] es siempre positivo. La dirección apunta radialmente hacia afuera para cargas positivas y hacia adentro para negativas."
        en: "The magnitude of [[E_C]] is always positive. The direction points radially outward for positive charges and inward for negative charges."
    zero_behavior:
      allowed: true
      meaning:
        es: "[[E_C]] es cero si [[q1]] es cero o si [[r12]] es infinito. En la práctica indica ausencia de fuente de campo."
        en: "[[E_C]] is zero if [[q1]] is zero or [[r12]] is infinite. In practice it indicates absence of a field source."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, +∞)"
    interpretation_role:
      primary_for:
        - lectura del campo eléctrico en un punto dado
        - determinación de la fuerza sobre una carga de prueba
      secondary_for:
        - construcción del campo de distribuciones por superposición
    graph_binding:
      channels:
        - y_axis
    pedagogical_notes:
      es: "[[E_C]] es el puente entre la ley de Coulomb y el concepto de campo eléctrico. El error más frecuente es creer que [[E_C]] depende de la carga de prueba; en realidad solo depende de [[q1]] y [[r12]]."
      en: "[[E_C]] is the bridge between Coulomb's law and the electric field concept. The most frequent error is believing [[E_C]] depends on the test charge; it only depends on [[q1]] and [[r12]]."

  - id: k_e
    symbol: k_e
    nombre:
      es: Constante de Coulomb
      en: Coulomb constant
    descripcion:
      es: Constante de proporcionalidad de la ley de Coulomb en el SI. Igual a 1 dividido entre cuatro veces pi veces la permitividad del vacío.
      en: Proportionality constant of Coulomb's law in SI units. Equal to 1 divided by four times pi times the permittivity of free space.
    unidad_si: "N·m²·C⁻²"
    dimension: "[M L³ T⁻⁴ I⁻²]"
    is_vector: false
    components: []
    category: constant
    physical_role: universal_constant
    used_in:
      - fórmula de la fuerza de Coulomb
      - cálculo del campo eléctrico de una carga puntual
    common_mistake: "Confundir [[k_e]] con la permitividad del vacío epsilon_0. Son inversamente proporcionales: [[k_e]] es grande cuando epsilon_0 es pequeño. Usarlos de forma intercambiable produce errores de varios órdenes de magnitud."
    typical_range: "8.988×10⁹ N·m²·C⁻² (valor fijo, constante universal en el vacío)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "[[k_e]] es siempre positiva. El signo de la fuerza proviene exclusivamente del producto de las cargas."
        en: "[[k_e]] is always positive. The sign of the force comes exclusively from the product of the charges."
    zero_behavior:
      allowed: false
      meaning:
        es: "[[k_e]] nunca es cero. Un valor cero indicaría ausencia de interacción electrostática, lo cual contradice la definición de la constante."
        en: "[[k_e]] is never zero. A zero value would indicate absence of electrostatic interaction, which contradicts the definition of the constant."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[8.988×10⁹, 8.988×10⁹]"
    interpretation_role:
      primary_for:
        - escala absoluta de la fuerza electrostática
      secondary_for:
        - conexión con la permitividad del vacío
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "[[k_e]] es un parámetro fijo del modelo; no debe tratarse como variable. Su valor numérico (aprox. 9×10⁹) sirve como escala de referencia para estimar si una fuerza calculada es plausible."
      en: "[[k_e]] is a fixed parameter of the model; it must not be treated as a variable. Its numerical value (approx. 9×10⁹) serves as a reference scale to estimate whether a computed force is plausible."
`;export{e as default};
