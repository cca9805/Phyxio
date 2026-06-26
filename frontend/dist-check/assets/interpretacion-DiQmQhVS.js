const e=`version: "v5"
id: interp-fuerza-electrica
leaf_id: fuerza-electrica

nombre:
  es: Interpretación de la fuerza eléctrica de Coulomb
  en: Interpretation of Coulomb electric force

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: fundamentos
  parent_id: fuerzas-electromagneticas
  ruta_relativa: fisica-clasica/electromagnetismo/fundamentos/fuerzas-electromagneticas/fuerza-electrica

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación física
    en: Physical interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_rules: 3
    show_warnings: true

dependencies:
  formulas:
    - fuerza_coulomb
    - campo_electrico_coulomb
  magnitudes:
    - F_C
    - k_e
    - q1
    - q2
    - r
    - E_C

global_context:
  physical_domain:
    es: Electrostática clásica — interacción entre cargas puntuales en reposo en el vacío.
    en: Classical electrostatics — interaction between point charges at rest in vacuum.
  axis_convention:
    es: "La fuerza positiva indica repulsión; la negativa, atracción. La distancia r es siempre positiva."
    en: "Positive force indicates repulsion; negative force indicates attraction. The distance r is always positive."
  standard_assumptions:
    - "Cargas puntuales o esféricas simétricas evaluadas desde fuera"
    - "Medio homogéneo (vacío o dieléctrico uniforme)"
    - "Cargas en reposo o a velocidades mucho menores que c"
  standard_warnings:
    - "El modelo falla a distancias menores de 10^-15 m (escala nuclear)"
    - "Las unidades deben ser coherentes: cargas en culombios, distancia en metros"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del gráfico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:

  F_C:
    magnitude_type: signed_force
    semantic_role:
      es: Fuerza eléctrica resultante entre las dos cargas puntuales
      en: Resulting electric force between the two point charges
    summary_rules:
      - id: fc_summary_repulsive
        when: "F_C > 0"
        status: ok
        text:
          es: "[[F_C]] es positiva, lo que indica repulsión: las cargas tienen el mismo signo y se empujan mutuamente. El módulo depende del producto de [[q1]] y [[q2]] dividido entre el cuadrado de [[r]]."
          en: "[[F_C]] is positive, indicating repulsion: the charges have the same sign and push each other away. The magnitude depends on the product of [[q1]] and [[q2]] divided by the square of [[r]]."
      - id: fc_summary_attractive
        when: "F_C < 0"
        status: ok
        text:
          es: "[[F_C]] es negativa, lo que indica atracción: las cargas tienen signos contrarios y se atraen mutuamente. El módulo depende del producto de [[q1]] y [[q2]] dividido entre el cuadrado de [[r]]."
          en: "[[F_C]] is negative, indicating attraction: the charges have opposite signs and attract each other. The magnitude depends on the product of [[q1]] and [[q2]] divided by the square of [[r]]."
      - id: fc_summary_zero
        when: "F_C == 0"
        status: ok
        text:
          es: "[[F_C]] es nula. Esto indica que alguna de las cargas es cero o que las cargas se anulan mutuamente en este punto."
          en: "[[F_C]] is zero. This indicates that one of the charges is zero or that the charges cancel each other at this point."
      - id: fc_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_C]] resume la intensidad de la interacción eléctrica entre [[q1]] y [[q2]]. Su signo indica el tipo de interacción y su módulo depende inversamente del cuadrado de [[r]]."
          en: "[[F_C]] summarises the intensity of the electric interaction between [[q1]] and [[q2]]. Its sign indicates the type of interaction and its magnitude depends inversely on the square of [[r]]."
    physical_reading_rules:
      - id: fc_reading_large
        when: "abs(F_C) > 1"
        status: ok
        text:
          es: "Una fuerza de este orden (mayor de 1 N) entre cargas puntuales corresponde a cargas muy grandes o a distancias muy pequeñas. En el laboratorio, esto suele indicar cargas del orden de microcoulombios a distancias de centímetros."
          en: "A force of this magnitude (above 1 N) between point charges corresponds to very large charges or very small distances. In the laboratory, this typically indicates charges of the order of microcoulombs at centimetre distances."
      - id: fc_reading_small
        when: "abs(F_C) < 1e-10"
        status: ok
        text:
          es: "Una fuerza menor de 10^-10 N corresponde a cargas muy pequeñas o a distancias muy grandes. Está en el rango de fuerzas atómicas o moleculares."
          en: "A force below 10^-10 N corresponds to very small charges or very large distances. It is in the range of atomic or molecular forces."
      - id: fc_reading_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[F_C]] indica cuán intensa es la interacción: a [[r]] doble la fuerza cae a un cuarto, a [[r]] triple cae a un noveno. La dependencia cuadrática domina la escala del resultado."
          en: "The value of [[F_C]] indicates how intense the interaction is: at double [[r]] the force falls to one quarter, at triple [[r]] it falls to one ninth. The quadratic dependence dominates the scale of the result."
    coherence_rules:
      - id: fc_coherence_sign_repulsion
        when: "q1 * q2 > 0 and F_C < 0"
        status: error
        text:
          es: "Inconsistencia de signo: cargas del mismo signo deberían dar fuerza repulsiva (positiva). Revisa los valores de [[q1]] y [[q2]] o el cálculo de [[F_C]]."
          en: "Sign inconsistency: same-sign charges should give a repulsive (positive) force. Check the values of [[q1]] and [[q2]] or the calculation of [[F_C]]."
      - id: fc_coherence_sign_attraction
        when: "q1 * q2 < 0 and F_C > 0"
        status: error
        text:
          es: "Inconsistencia de signo: cargas de signo contrario deberían dar fuerza atractiva (negativa). Revisa los valores de [[q1]] y [[q2]] o el cálculo de [[F_C]]."
          en: "Sign inconsistency: opposite-sign charges should give an attractive (negative) force. Check the values of [[q1]] and [[q2]] or the calculation of [[F_C]]."
      - id: fc_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verifica que el signo de [[F_C]] sea consistente con el producto de [[q1]] por [[q2]]: positivo para repulsión, negativo para atracción."
          en: "Verify that the sign of [[F_C]] is consistent with the product of [[q1]] by [[q2]]: positive for repulsion, negative for attraction."
    model_validity_rules:
      - id: fc_validity_r_small
        when: "r < 1e-14"
        status: error
        text:
          es: "Distancia menor de 10^-14 m: el modelo de carga puntual de Coulomb ya no es válido. A escala nuclear intervienen fuerzas fuertes y la mecánica cuántica es indispensable."
          en: "Distance below 10^-14 m: the Coulomb point-charge model is no longer valid. At nuclear scales the strong force dominates and quantum mechanics is indispensable."
      - id: fc_validity_r_zero
        when: "r <= 0"
        status: error
        text:
          es: "La distancia [[r]] debe ser estrictamente positiva. Un valor nulo o negativo indica un error en los datos de entrada."
          en: "The distance [[r]] must be strictly positive. A zero or negative value indicates an error in the input data."
      - id: fc_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de Coulomb es válido siempre que las cargas sean puntuales o esféricas simétricas, [[r]] sea positivo y las velocidades sean mucho menores que la velocidad de la luz."
          en: "Coulomb's model is valid as long as the charges are point-like or spherically symmetric, [[r]] is positive and velocities are much less than the speed of light."
    graph_rules:
      - id: fc_graph_curve
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[F_C]] frente a [[r]], el punto calculado cae sobre la curva hiperbólica de segundo orden. Si [[r]] aumenta, [[F_C]] disminuye más rápidamente que en una hipérbola simple: cada vez que [[r]] se duplica, [[F_C]] cae a un cuarto."
          en: "On the graph of [[F_C]] versus [[r]], the calculated point lies on the second-order hyperbolic curve. As [[r]] increases, [[F_C]] decreases faster than a simple hyperbola: each time [[r]] doubles, [[F_C]] falls to one quarter."
    likely_errors:
      - id: fc_error_linear
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar 1/[[r]] en lugar de 1/[[r]]^2. Al duplicar [[r]], [[F_C]] cae a una cuarta parte (no a la mitad). Verifica siempre que el exponente sea dos."
          en: "Common error: using 1/[[r]] instead of 1/[[r]]^2. Doubling [[r]] reduces [[F_C]] to one quarter (not one half). Always verify that the exponent is two."
      - id: fc_error_units
        when: "true"
        status: warning
        text:
          es: "Error de unidades: si las cargas se introducen en microcoulombios sin convertir a culombios, el resultado es un factor 10^-12 demasiado pequeño. Trabaja siempre en unidades SI."
          en: "Units error: if charges are entered in microcoulombs without converting to coulombs, the result is a factor of 10^-12 too small. Always work in SI units."
    next_step_rules:
      - id: fc_next_field
        when: "true"
        status: ok
        text:
          es: "Una vez conocida [[F_C]], puedes obtener el campo eléctrico [[E_C]] dividiendo por [[q2]]. El campo es una propiedad del espacio creada por [[q1]] independiente de [[q2]]."
          en: "Once [[F_C]] is known, you can obtain the electric field [[E_C]] by dividing by [[q2]]. The field is a property of space created by [[q1]], independent of [[q2]]."

  q1:
    magnitude_type: signed_parameter
    semantic_role:
      es: Primera carga eléctrica puntual que interviene en la interacción
      en: First point electric charge involved in the interaction
    summary_rules:
      - id: q1_summary_positive
        when: "q1 > 0"
        status: ok
        text:
          es: "[[q1]] es positiva, lo que indica que es una carga de tipo protónico o iónico positivo. La fuerza sobre [[q2]] indica repulsión si [[q2]] también es positiva."
          en: "[[q1]] is positive, indicating a proton-type or positive ion charge. The force on [[q2]] indicates repulsion if [[q2]] is also positive."
      - id: q1_summary_negative
        when: "q1 < 0"
        status: ok
        text:
          es: "[[q1]] es negativa, lo que indica carga de tipo electrónico o iónico negativo. La fuerza sobre [[q2]] depende del signo de [[q2]]: atractiva si [[q2]] es positiva, repulsiva si es negativa."
          en: "[[q1]] is negative, indicating an electron-type or negative ion charge. The force on [[q2]] depends on the sign of [[q2]]: attractive if [[q2]] is positive, repulsive if negative."
      - id: q1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q1]] resume una de las dos cargas fuente de la interacción. Su signo y módulo determinan, junto con [[q2]] y [[r]], la intensidad y el sentido de [[F_C]]."
          en: "[[q1]] summarises one of the two source charges of the interaction. Its sign and magnitude, together with [[q2]] and [[r]], determine the intensity and direction of [[F_C]]."
    physical_reading_rules:
      - id: q1_reading_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[q1]] entra linealmente en la ley de Coulomb: duplicar [[q1]] duplica [[F_C]] si todo lo demás permanece constante. El signo de [[q1]] define si la interacción con [[q2]] es atractiva o repulsiva."
          en: "The value of [[q1]] enters Coulomb's law linearly: doubling [[q1]] doubles [[F_C]] if everything else remains constant. The sign of [[q1]] defines whether the interaction with [[q2]] is attractive or repulsive."
    coherence_rules:
      - id: q1_coherence_zero
        when: "q1 == 0"
        status: warning
        text:
          es: "[[q1]] es cero: no hay interacción eléctrica. Comprueba si esto es intencionado o si es un error de entrada."
          en: "[[q1]] is zero: there is no electric interaction. Check whether this is intentional or an input error."
      - id: q1_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[q1]] es coherente con las unidades SI (culombios). Recuerda que la carga elemental es aproximadamente 1.6×10^-19 C."
          en: "The value of [[q1]] is consistent with SI units (coulombs). Remember that the elementary charge is approximately 1.6×10^-19 C."
    model_validity_rules:
      - id: q1_validity_default
        when: "true"
        status: ok
        text:
          es: "La ley de Coulomb trata [[q1]] como una carga puntual. Para distribuciones de carga extendidas, [[q1]] debe ser la carga total solo si la distribución es esférica y simétrica."
          en: "Coulomb's law treats [[q1]] as a point charge. For extended charge distributions, [[q1]] must be the total charge only if the distribution is spherical and symmetric."
    graph_rules:
      - id: q1_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[F_C]] frente a [[r]], cambiar [[q1]] desplaza la curva verticalmente (multiplica todos los valores de [[F_C]] por el factor de cambio), pero no altera la forma hiperbólica."
          en: "On the [[F_C]] versus [[r]] graph, changing [[q1]] shifts the curve vertically (multiplies all [[F_C]] values by the change factor), but does not alter the hyperbolic shape."
    likely_errors:
      - id: q1_error_units
        when: "true"
        status: warning
        text:
          es: "Error frecuente: introducir [[q1]] en microcoulombios (µC) sin multiplicar por 10^-6. Siempre convertir a culombios antes de sustituir en la fórmula."
          en: "Common error: entering [[q1]] in microcoulombs (µC) without multiplying by 10^-6. Always convert to coulombs before substituting in the formula."
    next_step_rules:
      - id: q1_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[q1]] conocida, el campo eléctrico que crea a distancia [[r]] es [[E_C]], calculable mediante la segunda fórmula del leaf."
          en: "With [[q1]] known, the electric field it creates at distance [[r]] is [[E_C]], calculable using the second formula of the leaf."

  q2:
    magnitude_type: signed_parameter
    semantic_role:
      es: Segunda carga eléctrica puntual que interviene en la interacción
      en: Second point electric charge involved in the interaction
    summary_rules:
      - id: q2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q2]] resume la carga sobre la que se calcula la fuerza. Su signo, combinado con el de [[q1]], determina si [[F_C]] indica atracción o repulsión. La magnitud depende linealmente de [[q2]]."
          en: "[[q2]] summarises the charge on which the force is calculated. Its sign, combined with that of [[q1]], determines whether [[F_C]] indicates attraction or repulsion. The magnitude depends linearly on [[q2]]."
    physical_reading_rules:
      - id: q2_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q2]] actúa simétricamente con [[q1]] en la ley de Coulomb: por la tercera ley de Newton, la fuerza que [[q1]] ejerce sobre [[q2]] es igual y contraria a la que [[q2]] ejerce sobre [[q1]]. La interacción eléctrica es siempre mutua."
          en: "[[q2]] acts symmetrically with [[q1]] in Coulomb's law: by Newton's third law, the force that [[q1]] exerts on [[q2]] is equal and opposite to the force that [[q2]] exerts on [[q1]]. The electric interaction is always mutual."
    coherence_rules:
      - id: q2_coherence_zero
        when: "q2 == 0"
        status: warning
        text:
          es: "[[q2]] es cero: no hay fuerza sobre ella aunque exista campo. Comprueba si es un caso límite intencionado (carga de prueba infinitesimal)."
          en: "[[q2]] is zero: there is no force on it even though a field exists. Check whether this is an intentional limit case (infinitesimal test charge)."
      - id: q2_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[q2]] es coherente con las unidades SI. La ley de Coulomb es simétrica en [[q1]] y [[q2]]: intercambiarlos no cambia el módulo de [[F_C]], solo su dirección."
          en: "The value of [[q2]] is consistent with SI units. Coulomb's law is symmetric in [[q1]] and [[q2]]: swapping them does not change the magnitude of [[F_C]], only its direction."
    model_validity_rules:
      - id: q2_validity_default
        when: "true"
        status: ok
        text:
          es: "[[q2]] debe ser una carga puntual. Si es una carga extendida, la fórmula de Coulomb solo es exacta si la distribución es esférica y se evalúa la fuerza desde fuera."
          en: "[[q2]] must be a point charge. If it is an extended charge, Coulomb's formula is exact only if the distribution is spherical and the force is evaluated from outside."
    graph_rules:
      - id: q2_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[F_C]] frente a [[r]], [[q2]] actúa como factor de escala vertical igual que [[q1]]. Modificar [[q2]] desplaza la curva hacia arriba o hacia abajo proporcionalmente."
          en: "On the [[F_C]] versus [[r]] graph, [[q2]] acts as a vertical scale factor just like [[q1]]. Modifying [[q2]] shifts the curve up or down proportionally."
    likely_errors:
      - id: q2_error_confuse_test_charge
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[q2]] con la carga de prueba infinitesimal del campo eléctrico. En Coulomb, [[q2]] es una carga real finita que también ejerce fuerza sobre [[q1]]."
          en: "Common error: confusing [[q2]] with the infinitesimal test charge of the electric field. In Coulomb's law, [[q2]] is a real finite charge that also exerts force on [[q1]]."
    next_step_rules:
      - id: q2_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[q2]] conocida y [[F_C]] calculada, puedes verificar que [[E_C]] en el punto donde se encuentra [[q2]] es exactamente [[F_C]] dividida entre [[q2]]."
          en: "With [[q2]] known and [[F_C]] calculated, you can verify that [[E_C]] at the point where [[q2]] sits is exactly [[F_C]] divided by [[q2]]."

  r:
    magnitude_type: positive_scalar
    semantic_role:
      es: Distancia entre los centros de las dos cargas puntuales
      en: Distance between the centres of the two point charges
    summary_rules:
      - id: r_summary_large
        when: "r > 1"
        status: ok
        text:
          es: "[[r]] mayor de 1 m indica que las cargas están en el rango de escala humana. La fuerza eléctrica a esta distancia decrece hasta valores muy pequeños salvo que las cargas sean muy grandes."
          en: "[[r]] greater than 1 m indicates that the charges are at human scale. The electric force at this distance decreases to very small values unless the charges are very large."
      - id: r_summary_atomic
        when: "r < 1e-9"
        status: ok
        text:
          es: "[[r]] menor de 10^-9 m (1 nm) está en el rango atómico o subatómico. La fuerza de Coulomb domina la ligadura electrónica a estas escalas, aunque se debe verificar que el modelo puntual siga siendo válido."
          en: "[[r]] below 10^-9 m (1 nm) is in the atomic or subatomic range. Coulomb's force dominates electronic bonding at these scales, although the point-charge model validity should be verified."
      - id: r_summary_default
        when: "true"
        status: ok
        text:
          es: "[[r]] describe la separación espacial entre las cargas. La fuerza [[F_C]] depende inversamente del cuadrado de [[r]]: duplicar la distancia reduce la fuerza a un cuarto."
          en: "[[r]] describes the spatial separation between the charges. The force [[F_C]] depends inversely on the square of [[r]]: doubling the distance reduces the force to one quarter."
    physical_reading_rules:
      - id: r_reading_default
        when: "true"
        status: ok
        text:
          es: "La dependencia 1/[[r]]^2 de [[F_C]] es la característica definitoria de la ley de Coulomb. Esta ley de cuadrado inverso también aparece en la gravitación universal de Newton, con la misma estructura matemática pero origen físico distinto."
          en: "The 1/[[r]]^2 dependence of [[F_C]] is the defining characteristic of Coulomb's law. This inverse-square law also appears in Newton's universal gravitation, with the same mathematical structure but a different physical origin."
    coherence_rules:
      - id: r_coherence_zero
        when: "r <= 0"
        status: error
        text:
          es: "[[r]] debe ser estrictamente positivo. Un valor nulo o negativo no tiene sentido físico en el modelo de carga puntual."
          en: "[[r]] must be strictly positive. A zero or negative value has no physical meaning in the point-charge model."
      - id: r_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[r]] tiene valor positivo coherente con una distancia física real. Comprueba que esté expresado en metros para que el resultado de [[F_C]] sea en newtons."
          en: "[[r]] has a positive value consistent with a real physical distance. Check that it is expressed in metres so that the result of [[F_C]] is in newtons."
    model_validity_rules:
      - id: r_validity_nuclear
        when: "r < 1e-15"
        status: error
        text:
          es: "A distancias menores de 10^-15 m (radio nuclear clásico) el modelo de Coulomb es inválido. Las fuerzas nucleares fuertes dominan a esta escala."
          en: "At distances below 10^-15 m (classical nuclear radius) Coulomb's model is invalid. The nuclear strong forces dominate at this scale."
      - id: r_validity_default
        when: "true"
        status: ok
        text:
          es: "Para [[r]] mayor de 10^-15 m y velocidades mucho menores que c, el modelo de Coulomb es válido con alta precisión."
          en: "For [[r]] above 10^-15 m and velocities much less than c, Coulomb's model is valid with high precision."
    graph_rules:
      - id: r_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[F_C]] frente a [[r]], la posición horizontal del punto calculado indica en qué zona de la curva hiperbólica opera el sistema. Si [[r]] es pequeño, estamos en la zona de fuerte curvatura; si [[r]] es grande, la curva es casi plana."
          en: "On the [[F_C]] versus [[r]] graph, the horizontal position of the calculated point indicates which zone of the hyperbolic curve the system operates in. Small [[r]] means strong curvature; large [[r]] means an almost flat curve."
    likely_errors:
      - id: r_error_linear
        when: "true"
        status: warning
        text:
          es: "Error crítico: elevar [[r]] a la primera potencia en lugar de al cuadrado. Si [[r]] aparece sin exponente dos en el denominador, el resultado puede ser erróneo por varios órdenes de magnitud."
          en: "Critical error: raising [[r]] to the first power instead of squaring it. If [[r]] appears without exponent two in the denominator, the result can be wrong by several orders of magnitude."
    next_step_rules:
      - id: r_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[r]] definida, puedes comparar la fuerza en dos distancias distintas para verificar el factor cuadrático: la razón [[F_C]](r₁)/[[F_C]](r₂) debe ser exactamente (r₂/r₁)^2."
          en: "With [[r]] defined, you can compare the force at two different distances to verify the quadratic factor: the ratio [[F_C]](r₁)/[[F_C]](r₂) must be exactly (r₂/r₁)^2."

  E_C:
    magnitude_type: signed_field
    semantic_role:
      es: Campo eléctrico creado por la carga q1 en el punto donde se encuentra q2
      en: Electric field created by charge q1 at the point where q2 is located
    summary_rules:
      - id: ec_summary_positive
        when: "E_C > 0"
        status: ok
        text:
          es: "[[E_C]] positivo indica que el campo apunta hacia fuera de [[q1]] (carga positiva). En este punto, una carga de prueba positiva experimentaría una fuerza en la misma dirección que [[E_C]]."
          en: "Positive [[E_C]] indicates that the field points away from [[q1]] (positive charge). At this point, a positive test charge would experience a force in the same direction as [[E_C]]."
      - id: ec_summary_negative
        when: "E_C < 0"
        status: ok
        text:
          es: "[[E_C]] negativo indica que el campo apunta hacia [[q1]] (carga negativa). Una carga de prueba positiva en este punto sería atraída hacia [[q1]]."
          en: "Negative [[E_C]] indicates that the field points towards [[q1]] (negative charge). A positive test charge at this point would be attracted towards [[q1]]."
      - id: ec_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_C]] describe la intensidad y el sentido del campo eléctrico de [[q1]] en un punto a distancia [[r]]. El campo depende de [[q1]] y de [[r]] pero no de [[q2]]: existe aunque no haya segunda carga."
          en: "[[E_C]] describes the intensity and direction of the electric field of [[q1]] at a point at distance [[r]]. The field depends on [[q1]] and [[r]] but not on [[q2]]: it exists even without a second charge."
    physical_reading_rules:
      - id: ec_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E_C]] indica la fuerza por unidad de carga que experimentaría cualquier carga colocada en ese punto. La fuerza sobre [[q2]] es el producto de [[E_C]] por [[q2]]. Esta relación permite separar la propiedad del campo del valor de la carga de prueba."
          en: "[[E_C]] indicates the force per unit charge that any charge placed at that point would experience. The force on [[q2]] is the product of [[E_C]] by [[q2]]. This relation allows the field property to be separated from the value of the test charge."
    coherence_rules:
      - id: ec_coherence_default
        when: "true"
        status: ok
        text:
          es: "Comprueba que [[E_C]] sea coherente con [[F_C]]: el cociente de [[F_C]] entre [[q2]] debe igualar a [[E_C]]. Si no coinciden, hay un error en alguno de los dos cálculos."
          en: "Check that [[E_C]] is consistent with [[F_C]]: the ratio of [[F_C]] to [[q2]] must equal [[E_C]]. If they do not match, there is an error in one of the two calculations."
    model_validity_rules:
      - id: ec_validity_default
        when: "true"
        status: ok
        text:
          es: "El campo [[E_C]] es válido para una carga puntual en vacío o en un dieléctrico uniforme. A distancias nucleares el modelo falla de la misma manera que la fuerza de Coulomb."
          en: "The field [[E_C]] is valid for a point charge in vacuum or in a uniform dielectric. At nuclear distances the model fails in the same way as Coulomb's force."
    graph_rules:
      - id: ec_graph_default
        when: "true"
        status: ok
        text:
          es: "La gráfica [[E_C]] frente a [[r]] tiene la misma forma hiperbólica cuadrática que [[F_C]] frente a [[r]], pero el eje vertical no depende de [[q2]]. Compara ambas curvas: la razón [[F_C]]/[[E_C]] en cada punto es exactamente [[q2]]."
          en: "The [[E_C]] versus [[r]] graph has the same quadratic hyperbolic shape as [[F_C]] versus [[r]], but the vertical axis does not depend on [[q2]]. Compare both curves: the ratio [[F_C]]/[[E_C]] at each point is exactly [[q2]]."
    likely_errors:
      - id: ec_error_q2_dependence
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que [[E_C]] depende de [[q2]]. El campo es una propiedad del espacio creada solo por [[q1]]; [[q2]] no lo modifica, solo lo siente."
          en: "Common error: believing that [[E_C]] depends on [[q2]]. The field is a property of space created only by [[q1]]; [[q2]] does not modify it, it only feels it."
    next_step_rules:
      - id: ec_next_superposition
        when: "true"
        status: ok
        text:
          es: "Una vez conocido [[E_C]] de [[q1]], puedes aplicar el principio de superposición para obtener el campo total de varias cargas: sumar vectorialmente los campos de cada carga por separado."
          en: "Once [[E_C]] from [[q1]] is known, you can apply the superposition principle to get the total field from several charges: add the fields of each charge vectorially."

cross_checks:
  - id: cc_force_field_ratio
    condition: "abs(F_C / E_C - q2) > 1e-8"
    message:
      es: "Inconsistencia entre [[F_C]] y [[E_C]]: el cociente debe ser exactamente [[q2]]. Revisa los cálculos."
      en: "Inconsistency between [[F_C]] and [[E_C]]: the ratio must be exactly [[q2]]. Review the calculations."

error_patterns:
  - id: ep_inverse_square
    detect_when: "student_result_differs_by_factor_4_when_r_doubled"
    message:
      es: "Error de cuadrado inverso detectado: al duplicar [[r]], [[F_C]] debe caer a un cuarto. Si cayó a la mitad, se usó 1/[[r]] en lugar de 1/[[r]]^2."
      en: "Inverse-square error detected: when [[r]] doubles, [[F_C]] must fall to one quarter. If it fell by half, 1/[[r]] was used instead of 1/[[r]]^2."
  - id: ep_unit_mismatch
    detect_when: "charge_not_in_coulombs"
    message:
      es: "Error de unidades: usar microcoulombios sin convertir produce resultados 10^-12 veces demasiado pequeños."
      en: "Units error: using microcoulombs without converting produces results 10^-12 times too small."

graph_binding:
  channels:
    - id: y_axis_main
      magnitude: F_C
      role: dependent_variable
    - id: x_axis_main
      magnitude: r
      role: independent_variable
    - id: y_axis_secondary
      magnitude: E_C
      role: secondary_dependent

mini_graph:
  enabled: true
  preferred_type: Coord
  default_view: "F_C vs r"

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
