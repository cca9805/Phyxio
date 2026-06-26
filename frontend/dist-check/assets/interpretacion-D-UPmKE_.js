const e=`version: "2.0"
id: interp-ley-de-coulomb
leaf_id: ley-de-coulomb

nombre:
  es: "Interpretación — Ley de Coulomb"
  en: "Interpretation — Coulomb's Law"

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electrostatica
  parent_id: electrostatica
  ruta_relativa: fisica-clasica/electromagnetismo/electrostatica/ley-de-coulomb

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: "Interpretación física de la fuerza de Coulomb"
    en: "Physical interpretation of Coulomb's force"
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - fuerza_coulomb
    - campo_electrico_coulomb
  magnitudes:
    - F_C
    - q1
    - q2
    - r12
    - k_e
    - E_C

global_context:
  physical_domain:
    es: "Fuerza electrostática entre dos cargas puntuales en el vacío según la ley de Coulomb."
    en: "Electrostatic force between two point charges in vacuum according to Coulomb's law."
  axis_convention:
    es: "Eje x representa la distancia entre cargas [[r12]] en metros; eje y representa la fuerza [[F_C]] en Newtons."
    en: "The x-axis represents the distance between charges [[r12]] in metres; the y-axis represents the force [[F_C]] in Newtons."
  standard_assumptions:
    - "Cargas puntuales (dimensiones despreciables)"
    - "Régimen electrostático (cargas en reposo)"
    - "Vacío (permitividad del vacío)"
  standard_warnings:
    - "A distancias sub-nanométricas el modelo clásico de Coulomb deja de ser válido."
    - "En medios dieléctricos la fuerza se reduce por el factor de permitividad relativa."

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
    summary_rules:
      - id: F_C_summary_large
        when: "result > 1"
        status: ok
        text:
          es: "[[F_C]] indica una fuerza electrostática superior a 1 N, propia de cargas de escala macroscópica (microcoulombios) a distancias de centímetros. Este valor domina sobre la gravedad en objetos ligeros y es detectable con dinamómetros de precisión."
          en: "[[F_C]] indicates an electrostatic force above 1 N, characteristic of macroscopic-scale charges (microcoulombs) at centimetre distances. This value dominates gravity for light objects and is detectable with precision dynamometers."
      - id: F_C_summary_micro
        when: "result < 1e-6"
        status: ok
        text:
          es: "[[F_C]] inferior a 1 μN indica cargas muy pequeñas o distancias grandes. Este régimen describe interacciones entre partículas cargadas a escala atómica o molecular."
          en: "[[F_C]] below 1 μN indicates very small charges or large distances. This regime describes interactions between charged particles at the atomic or molecular scale."
      - id: F_C_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_C]] resume la fuerza electrostática entre [[q1]] y [[q2]]. Su valor depende del producto de las cargas y decrece con el cuadrado de [[r12]]: doblar la distancia reduce [[F_C]] a una cuarta parte."
          en: "[[F_C]] summarises the electrostatic force between [[q1]] and [[q2]]. Its value depends on the product of the charges and decreases with the square of [[r12]]: doubling the distance reduces [[F_C]] to one quarter."
    physical_reading_rules:
      - id: F_C_reading_repulsive
        when: "true"
        status: ok
        text:
          es: "[[F_C]] resulta del producto de [[k_e]], los valores absolutos de las cargas y el inverso del cuadrado de [[r12]]. Físicamente, indica la intensidad de la interacción electrostática: cuánto mayor es [[F_C]], mayor es la aceleración que experimentan las cargas si son libres de moverse."
          en: "[[F_C]] results from the product of [[k_e]], the absolute values of the charges, and the inverse of the square of [[r12]]. Physically, it indicates the intensity of the electrostatic interaction: the larger [[F_C]], the greater the acceleration the charges experience if free to move."
    coherence_rules:
      - id: F_C_coherence_positive
        when: "result < 0"
        status: error
        text:
          es: "[[F_C]] negativa es físicamente imposible: es un módulo vectorial, siempre no negativo. Revisar si se está usando la fórmula con el valor del producto de cargas en lugar del módulo del producto."
          en: "Negative [[F_C]] is physically impossible: it is a vector magnitude, always non-negative. Check whether the formula is being used with the signed product of charges instead of its absolute value."
      - id: F_C_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[F_C]] debe disminuir si [[r12]] aumenta. Si se observa lo contrario, hay un error en la entrada de datos o en la fórmula aplicada."
          en: "[[F_C]] must decrease if [[r12]] increases. If the opposite is observed, there is a data entry error or an error in the applied formula."
    model_validity_rules:
      - id: F_C_validity_point_charge
        when: "r12 < 1e-9"
        status: warning
        text:
          es: "A distancias menores de 1 nm el modelo de carga puntual pierde validez: la estructura interna de los átomos y la mecánica cuántica son determinantes. [[F_C]] calculada en ese rango es una extrapolación sin fundamento físico."
          en: "At distances below 1 nm the point charge model loses validity: the internal structure of atoms and quantum mechanics become determinant. [[F_C]] computed in that range is an extrapolation without physical basis."
      - id: F_C_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de Coulomb es válido para cargas puntuales en vacío y velocidades mucho menores que la luz. En dieléctricos, dividir [[k_e]] por la permitividad relativa del medio. En presencia de conductores cercanos, la redistribución de cargas inducidas modifica la fuerza real."
          en: "Coulomb's model is valid for point charges in vacuum at velocities much less than the speed of light. In dielectrics, divide [[k_e]] by the relative permittivity of the medium. In the presence of nearby conductors, the redistribution of induced charges modifies the actual force."
    graph_rules:
      - id: F_C_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[F_C]] frente a [[r12]], el valor calculado se sitúa sobre la hipérbola cuadrática. Las zonas de la curva con alta densidad de puntos (pequeño [[r12]]) corresponden a fuerzas grandes; el eje asintótico horizontal indica que la fuerza tiende a cero para distancias grandes."
          en: "In the [[F_C]] versus [[r12]] graph, the computed value lies on the quadratic hyperbola. Regions of the curve with high point density (small [[r12]]) correspond to large forces; the horizontal asymptote indicates that the force approaches zero for large distances."
    likely_errors:
      - id: F_C_error_cuadrado
        when: "true"
        status: warning
        text:
          es: "Error habitual: calcular [[F_C]] dividiendo entre [[r12]] en lugar de entre [[r12]] al cuadrado. Esto sobreestima la fuerza a distancias grandes y subestima la dependencia espacial. Si [[F_C]] calculada es el doble del valor correcto, es probable este error."
          en: "Common error: computing [[F_C]] by dividing by [[r12]] instead of [[r12]] squared. This overestimates the force at large distances and underestimates the spatial dependence. If the computed [[F_C]] is twice the correct value, this error is likely."
    next_step_rules:
      - id: F_C_next_campo
        when: "true"
        status: ok
        text:
          es: "Con [[F_C]] calculada, el siguiente paso es dividirla entre la carga de prueba [[q2]] para obtener el campo eléctrico [[F_C]] por unidad de carga. Esto conecta la ley de Coulomb con la definición del campo eléctrico y permite extender el análisis a sistemas de múltiples cargas."
          en: "With [[F_C]] computed, the next step is to divide it by the test charge [[q2]] to obtain the electric field as force per unit charge. This connects Coulomb's law with the definition of the electric field and allows extending the analysis to multi-charge systems."

  r12:
    summary_rules:
      - id: r12_summary_small
        when: "result < 0.01"
        status: warning
        text:
          es: "[[r12]] menor de 1 cm indica una interacción de corto alcance. A estas distancias la fuerza [[F_C]] puede ser muy intensa y el modelo de carga puntual requiere verificación cuidadosa: las dimensiones físicas de los objetos pueden ser comparables a [[r12]]."
          en: "[[r12]] below 1 cm indicates a short-range interaction. At these distances [[F_C]] can be very intense and the point charge model requires careful verification: the physical dimensions of the objects may be comparable to [[r12]]."
      - id: r12_summary_default
        when: "true"
        status: ok
        text:
          es: "[[r12]] resume la separación espacial entre las cargas. Su valor depende de [[F_C]] y de los módulos de [[q1]] y [[q2]]: a mayor distancia, menor fuerza. La dependencia es cuadrática, no lineal."
          en: "[[r12]] summarises the spatial separation between the charges. Its value depends on [[F_C]] and the magnitudes of [[q1]] and [[q2]]: greater distance means smaller force. The dependence is quadratic, not linear."
    physical_reading_rules:
      - id: r12_reading_default
        when: "true"
        status: ok
        text:
          es: "[[r12]] resulta de despejar la distancia a partir de [[F_C]] conocida. Físicamente indica a qué separación se produce la fuerza medida: si [[r12]] es grande y [[F_C]] sigue siendo apreciable, las cargas son necesariamente grandes en módulo."
          en: "[[r12]] results from solving for the distance given a known [[F_C]]. Physically it indicates the separation at which the measured force occurs: if [[r12]] is large and [[F_C]] is still appreciable, the charges must necessarily be large in magnitude."
    coherence_rules:
      - id: r12_coherence_positive
        when: "result <= 0"
        status: error
        text:
          es: "[[r12]] nula o negativa es físicamente imposible. Un resultado nulo indica que las cargas están en el mismo punto (singularidad del modelo); un resultado negativo indica error de cálculo."
          en: "Zero or negative [[r12]] is physically impossible. A zero result indicates charges at the same point (model singularity); a negative result indicates a calculation error."
      - id: r12_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[r12]] calculada es coherente si es positiva y si la fuerza [[F_C]] disminuye al aumentarla. Verificar que las unidades sean metros: usar centímetros sin conversión es una fuente frecuente de error de cuatro órdenes de magnitud."
          en: "Computed [[r12]] is coherent if positive and if [[F_C]] decreases when it increases. Verify that units are metres: using centimetres without conversion is a frequent source of four-order-of-magnitude errors."
    model_validity_rules:
      - id: r12_validity_default
        when: "true"
        status: ok
        text:
          es: "[[r12]] debe ser mayor que la dimensión física de las cargas para que el modelo puntual sea válido. Si [[r12]] es comparable al tamaño de los objetos cargados, la fuerza real difiere de la predicha por Coulomb porque la distribución superficial de carga no es puntual."
          en: "[[r12]] must be larger than the physical size of the charges for the point model to be valid. If [[r12]] is comparable to the size of the charged objects, the actual force differs from Coulomb's prediction because the surface charge distribution is not point-like."
    graph_rules:
      - id: r12_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[F_C]] vs [[r12]], [[r12]] es el eje x. La hipérbola cuadrática muestra que pequeños cambios en [[r12]] cerca del origen producen grandes cambios en [[F_C]], mientras que los mismos cambios a distancias grandes son casi imperceptibles en la fuerza."
          en: "In the [[F_C]] vs [[r12]] graph, [[r12]] is the x-axis. The quadratic hyperbola shows that small changes in [[r12]] near the origin produce large changes in [[F_C]], while the same changes at large distances are almost imperceptible in the force."
    likely_errors:
      - id: r12_error_unidades
        when: "true"
        status: warning
        text:
          es: "Error frecuente: introducir [[r12]] en centímetros sin convertir a metros. Como [[r12]] entra al cuadrado, este error multiplica el resultado de [[F_C]] por 10000, no por 100."
          en: "Frequent error: entering [[r12]] in centimetres without converting to metres. Since [[r12]] enters squared, this error multiplies the result of [[F_C]] by 10000, not by 100."
    next_step_rules:
      - id: r12_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[r12]] determinada, el siguiente paso es analizar cómo varía [[F_C]] en torno a ese punto: un incremento o decremento del diez por ciento en [[r12]] produce aproximadamente el veinte por ciento de cambio en [[F_C]] en el sentido opuesto."
          en: "With [[r12]] determined, the next step is to analyse how [[F_C]] varies around that point: a ten percent increase or decrease in [[r12]] produces approximately a twenty percent change in [[F_C]] in the opposite direction."

  q1:
    summary_rules:
      - id: q1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q1]] resume la carga eléctrica de la primera fuente. Su valor absoluto indica qué proporción de la fuerza total proviene de este factor, junto con [[q2]] y [[r12]]. El signo de [[q1]] determina, junto con el de [[q2]], si la interacción es atractiva o repulsiva."
          en: "[[q1]] summarises the electric charge of the first source. Its absolute value indicates what proportion of the total force comes from this factor, together with [[q2]] and [[r12]]. The sign of [[q1]], combined with that of [[q2]], determines whether the interaction is attractive or repulsive."
    physical_reading_rules:
      - id: q1_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q1]] resulta de despejar la carga a partir de [[F_C]], [[r12]] y [[q2]] conocidos. Físicamente indica cuánta carga debe tener el primer objeto para producir la fuerza observada a la distancia dada con la segunda carga conocida."
          en: "[[q1]] results from solving for the charge given known [[F_C]], [[r12]], and [[q2]]. Physically it indicates how much charge the first object must carry to produce the observed force at the given distance with the second known charge."
    coherence_rules:
      - id: q1_coherence_default
        when: "true"
        status: ok
        text:
          es: "El módulo de [[q1]] calculado debe ser coherente con la escala del sistema: cargas de laboratorio típicas van desde nanocoulombios hasta decenas de microcoulombios. Un resultado en coulombios indica un sistema de escala industrial o un error de entrada."
          en: "The magnitude of computed [[q1]] must be coherent with the scale of the system: typical laboratory charges range from nanocoulombs to tens of microcoulombs. A result in coulombs indicates an industrial-scale system or a data entry error."
    model_validity_rules:
      - id: q1_validity_default
        when: "true"
        status: ok
        text:
          es: "El despeje de [[q1]] a partir de [[F_C]] asume que [[q2]] y [[r12]] son conocidos con precisión. En la práctica, las cargas superficiales se redistribuyen si hay conductores cercanos, lo que introduce incertidumbre en el valor efectivo de [[q1]]."
          en: "Solving for [[q1]] from [[F_C]] assumes [[q2]] and [[r12]] are precisely known. In practice, surface charges redistribute if nearby conductors are present, introducing uncertainty in the effective value of [[q1]]."
    graph_rules:
      - id: q1_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q1]] no aparece directamente en el eje del gráfico [[F_C]] vs [[r12]], pero escala la curva verticalmente: duplicar [[q1]] duplica la ordenada de toda la hipérbola, manteniendo su forma."
          en: "[[q1]] does not appear directly on the axis of the [[F_C]] vs [[r12]] graph, but it scales the curve vertically: doubling [[q1]] doubles the ordinate of the entire hyperbola, maintaining its shape."
    likely_errors:
      - id: q1_error_signo
        when: "true"
        status: warning
        text:
          es: "Error habitual: ignorar el valor absoluto de [[q1]] en la fórmula escalar y usar directamente el valor con signo, lo que puede dar [[F_C]] negativa. El módulo de la fuerza es siempre positivo; el signo de la interacción se trata vectorialmente por separado."
          en: "Common error: ignoring the absolute value of [[q1]] in the scalar formula and using the signed value directly, which can give a negative [[F_C]]. The force magnitude is always positive; the sign of the interaction is handled vectorially as a separate step."
    next_step_rules:
      - id: q1_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[q1]] determinada, el siguiente paso es calcular el campo eléctrico que genera en los puntos del espacio relevantes para el problema, dividiendo [[F_C]] entre [[q2]] o usando directamente la definición de campo eléctrico de carga puntual."
          en: "With [[q1]] determined, the next step is to compute the electric field it generates at the relevant points in space, either by dividing [[F_C]] by [[q2]] or by directly using the point charge electric field definition."

  q2:
    summary_rules:
      - id: q2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q2]] resume la carga eléctrica de la segunda fuente de la interacción. Su rol es simétrico al de [[q1]]: el módulo de [[F_C]] depende del producto de ambas y la dirección de la fuerza sobre [[q2]] es opuesta a la fuerza sobre [[q1]]."
          en: "[[q2]] summarises the electric charge of the second source in the interaction. Its role is symmetric to that of [[q1]]: the magnitude of [[F_C]] depends on the product of both, and the direction of the force on [[q2]] is opposite to the force on [[q1]]."
    physical_reading_rules:
      - id: q2_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q2]] resulta de despejar la segunda carga a partir de [[F_C]], [[r12]] y [[q1]] conocidos. Físicamente indica cuánta carga debe tener el segundo objeto para que la interacción produzca la fuerza observada."
          en: "[[q2]] results from solving for the second charge given known [[F_C]], [[r12]], and [[q1]]. Physically it indicates how much charge the second object must carry for the interaction to produce the observed force."
    coherence_rules:
      - id: q2_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q2]] calculada debe tener escala coherente con el sistema analizado. Si el resultado supera 1 mC en un sistema de laboratorio, hay probablemente un error de unidades en [[F_C]] o en [[r12]]."
          en: "Computed [[q2]] must have a scale coherent with the analysed system. If the result exceeds 1 mC in a laboratory system, there is probably a units error in [[F_C]] or [[r12]]."
    model_validity_rules:
      - id: q2_validity_default
        when: "true"
        status: ok
        text:
          es: "El despeje de [[q2]] es válido mientras [[q1]] y [[r12]] sean conocidos con suficiente precisión y el sistema sea electrostático. Si [[q2]] es la carga de una partícula subatómica, el valor está cuantizado y solo puede ser múltiplo de la carga del electrón."
          en: "Solving for [[q2]] is valid as long as [[q1]] and [[r12]] are known with sufficient precision and the system is electrostatic. If [[q2]] is the charge of a subatomic particle, the value is quantised and can only be a multiple of the electron charge."
    graph_rules:
      - id: q2_graph_default
        when: "true"
        status: ok
        text:
          es: "Al igual que [[q1]], [[q2]] no aparece en el eje del gráfico pero escala la curva hiperbólica verticalmente. La simetría del producto [[q1]]·[[q2]] implica que intercambiar sus valores no cambia la curva."
          en: "Like [[q1]], [[q2]] does not appear on the graph axis but scales the hyperbolic curve vertically. The symmetry of the product [[q1]]·[[q2]] implies that swapping their values does not change the curve."
    likely_errors:
      - id: q2_error_simetria
        when: "true"
        status: warning
        text:
          es: "Error conceptual frecuente: creer que la fuerza sobre [[q2]] es distinta (en módulo) de la fuerza sobre [[q1]]. La tercera ley de Newton garantiza que ambas fuerzas tienen el mismo módulo [[F_C]], aunque sentidos opuestos. El carácter asimétrico de su nombre no implica asimetría en la interacción."
          en: "Frequent conceptual error: believing that the force on [[q2]] differs in magnitude from the force on [[q1]]. Newton's third law guarantees that both forces have the same magnitude [[F_C]], though opposite directions. The asymmetric naming does not imply asymmetry in the interaction."
    next_step_rules:
      - id: q2_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[q2]] determinada, el siguiente paso es verificar si la interacción es atractiva o repulsiva comparando los signos de [[q1]] y [[q2]], y calcular la aceleración resultante si la masa de la partícula es conocida."
          en: "With [[q2]] determined, the next step is to verify whether the interaction is attractive or repulsive by comparing the signs of [[q1]] and [[q2]], and to compute the resulting acceleration if the particle mass is known."

  E_C:
    summary_rules:
      - id: E_C_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_C]] resume el campo eléctrico generado por [[q1]] a distancia [[r12]]. Su valor indica la fuerza por unidad de carga en ese punto: depende exclusivamente de [[q1]] y [[r12]], no de la carga de prueba que se coloque ahí."
          en: "[[E_C]] summarises the electric field generated by [[q1]] at distance [[r12]]. Its value indicates the force per unit charge at that point: it depends exclusively on [[q1]] and [[r12]], not on the test charge placed there."
    physical_reading_rules:
      - id: E_C_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E_C]] resulta de dividir la fuerza de Coulomb entre la carga de prueba. Físicamente indica con qué fuerza se aceleraría una carga de 1 C colocada en ese punto: cuanto mayor es [[E_C]], mayor es la aceleración de cualquier carga de prueba en esa posición."
          en: "[[E_C]] results from dividing the Coulomb force by the test charge. Physically it indicates the force that would accelerate a 1 C charge placed at that point: the larger [[E_C]], the greater the acceleration of any test charge at that position."
    coherence_rules:
      - id: E_C_coherence_positive
        when: "result < 0"
        status: error
        text:
          es: "[[E_C]] negativa es físicamente imposible como módulo. Revisar si se está usando el signo de [[q1]] en lugar de su valor absoluto."
          en: "Negative [[E_C]] is physically impossible as a magnitude. Check whether the sign of [[q1]] is being used instead of its absolute value."
      - id: E_C_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[E_C]] debe disminuir si [[r12]] aumenta. El campo eléctrico sigue la misma ley inversa del cuadrado que [[F_C]]."
          en: "[[E_C]] must decrease if [[r12]] increases. The electric field follows the same inverse-square law as [[F_C]]."
    model_validity_rules:
      - id: E_C_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de campo puntual es válido cuando [[r12]] es mucho mayor que el tamaño físico de la carga fuente. En presencia de dieléctrico, dividir [[k_e]] por la permitividad relativa. A distancias subatómicas el modelo clásico pierde validez."
          en: "The point field model is valid when [[r12]] is much larger than the physical size of the source charge. In a dielectric, divide [[k_e]] by the relative permittivity. At subatomic distances the classical model loses validity."
    graph_rules:
      - id: E_C_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[E_C]] vs [[r12]], la curva sigue la misma hipérbola cuadrática que [[F_C]]. La forma es idéntica; solo cambia la escala vertical según el valor de [[q1]]."
          en: "In the [[E_C]] vs [[r12]] graph, the curve follows the same quadratic hyperbola as [[F_C]]. The shape is identical; only the vertical scale changes according to [[q1]]."
    likely_errors:
      - id: E_C_error_q2_dependence
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que [[E_C]] depende de la carga de prueba. [[E_C]] es una propiedad del espacio creada por [[q1]]; no cambia al sustituir la carga de prueba por otra diferente."
          en: "Frequent error: believing [[E_C]] depends on the test charge. [[E_C]] is a property of space created by [[q1]]; it does not change when the test charge is replaced by a different one."
    next_step_rules:
      - id: E_C_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[E_C]] calculado, el siguiente paso es multiplicar por la carga de prueba para obtener la fuerza [[F_C]] sobre esa carga, o integrar el campo de distribuciones extendidas usando el principio de superposición."
          en: "With [[E_C]] computed, the next step is to multiply by the test charge to obtain the force [[F_C]] on that charge, or to integrate the field of extended distributions using the superposition principle."

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
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
