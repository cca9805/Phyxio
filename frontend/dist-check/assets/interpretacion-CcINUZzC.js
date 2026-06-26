const e=`version: "v5"
id: interp-carga-electrica
leaf_id: carga-electrica

nombre:
  es: Interpretación de la carga eléctrica
  en: Interpretation of electric charge

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: fundamentos
  parent_id: fundamentos
  ruta_relativa: fisica-clasica/electromagnetismo/fundamentos/carga-electrica

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
    max_sections: 3

dependencies:
  formulas:
    - cuantizacion_carga
    - carga_neta_sistema
  magnitudes:
    - q
    - e
    - n
    - q_neta
    - q_pos
    - q_neg

global_context:
  physical_domain:
    es: "Electrostática fundamental. La carga eléctrica es una propiedad intrínseca de la materia; su cuantización y conservación rigen todos los fenómenos electromagnéticos."
    en: "Fundamental electrostatics. Electric charge is an intrinsic property of matter; its quantization and conservation govern all electromagnetic phenomena."
  axis_convention:
    es: "La carga positiva corresponde a déficit de electrones; la negativa a exceso de electrones. El eje de la gráfica muestra q en culombios frente al número entero n de cargas elementales."
    en: "Positive charge corresponds to electron deficit; negative to electron excess. The graph axis shows q in coulombs versus the integer number n of elementary charges."
  standard_assumptions:
    - "Las partículas portadoras de carga son protones (positivos) y electrones (negativos)"
    - "La carga elemental e es positiva por definición"
    - "El número n es siempre entero en condiciones ordinarias"
    - "Los quarks no se observan libres a escala macroscópica"
  standard_warnings:
    - "q negativa no implica ausencia de carga, sino exceso de electrones"
    - "Un resultado no múltiplo de e indica error de cálculo o datos inconsistentes"
    - "La carga neta cero no significa que no haya cargas internas"

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
  q:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Carga eléctrica total de un objeto; determina su comportamiento frente a campos eléctricos y magnéticos."
      en: "Total electric charge of an object; determines its behavior in electric and magnetic fields."
    summary_rules:
      - id: q_summary_positive
        when: "q > 0"
        status: ok
        text:
          es: "[[q]] es positiva: el objeto tiene déficit de electrones respecto a protones. Indica que el objeto ejerce y experimenta fuerzas atractivas sobre cargas negativas y repulsivas sobre cargas positivas."
          en: "[[q]] is positive: the object has fewer electrons than protons. This indicates it exerts and experiences attractive forces on negative charges and repulsive forces on positive ones."
      - id: q_summary_negative
        when: "q < 0"
        status: ok
        text:
          es: "[[q]] es negativa: el objeto tiene exceso de electrones. Indica atracción hacia cargas positivas y repulsión hacia otras cargas negativas. El módulo resume cuánta carga está desequilibrada."
          en: "[[q]] is negative: the object has an excess of electrons. Indicates attraction toward positive charges and repulsion toward other negative charges. The magnitude summarizes how much charge is imbalanced."
      - id: q_summary_zero
        when: "q == 0"
        status: ok
        text:
          es: "[[q]] es nula: el objeto es eléctricamente neutro. Significa que protones y electrones se compensan exactamente; a grandes distancias no ejerce campo eléctrico neto."
          en: "[[q]] is zero: the object is electrically neutral. This means protons and electrons exactly balance; at large distances it exerts no net electric field."
      - id: q_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q]] resume el estado eléctrico del objeto. Su signo indica el tipo de desequilibrio de cargas y depende del número de electrones transferidos."
          en: "[[q]] summarizes the electrical state of the object. Its sign indicates the type of charge imbalance and depends on the number of transferred electrons."
    physical_reading_rules:
      - id: q_reading_large
        when: "abs(q) > 1e-6"
        status: ok
        text:
          es: "[[q]] supera el microcoulombio: carga macroscópica típica de objetos electrizados por fricción o por contacto con fuentes de alta tensión. Es suficiente para producir efectos visibles como atracción de papel."
          en: "[[q]] exceeds one microcoulomb: macroscopic charge typical of objects electrified by friction or high-voltage contact. Sufficient to produce visible effects such as attracting paper."
      - id: q_reading_small
        when: "abs(q) <= 1e-6 and abs(q) > 0"
        status: ok
        text:
          es: "[[q]] está en el rango submicrocoulombio: carga pequeña pero detectable con electrómetros. Corresponde a millones de cargas elementales, lo que refleja la pequeñez de [[e]]."
          en: "[[q]] is in the sub-microcoulomb range: small but detectable with electrometers. Corresponds to millions of elementary charges, reflecting the smallness of [[e]]."
      - id: q_reading_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[q]] indica el desequilibrio eléctrico del objeto. Su magnitud depende del número de electrones ganados o perdidos multiplicado por [[e]]."
          en: "The value of [[q]] indicates the electrical imbalance of the object. Its magnitude depends on the number of electrons gained or lost multiplied by [[e]]."
    coherence_rules:
      - id: q_coherence_quantized
        when: "abs(q / 1.602e-19 - round(q / 1.602e-19)) > 0.01"
        status: warning
        text:
          es: "El resultado no es múltiplo exacto de [[e]]. Verificar si se trabaja con carga continua (modelo aproximado) o si hay error de unidades."
          en: "The result is not an exact multiple of [[e]]. Check whether you are working with continuous charge (approximate model) or if there is a units error."
      - id: q_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q]] es coherente con la cuantización de la carga si es múltiplo de [[e]]. Para carga macroscópica, el modelo continuo es una aproximación válida."
          en: "[[q]] is consistent with charge quantization if it is a multiple of [[e]]. For macroscopic charge, the continuous model is a valid approximation."
    model_validity_rules:
      - id: q_validity_classical
        when: "abs(q) > 1e-19"
        status: ok
        text:
          es: "La descripción clásica de la carga eléctrica es válida. El modelo puntual es adecuado cuando las distancias son mucho mayores que el tamaño del objeto cargado."
          en: "The classical description of electric charge is valid. The point model is adequate when distances are much larger than the size of the charged object."
      - id: q_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo clásico de carga puntual es válido para objetos macroscópicos. Falla cuando se estudian distribuciones a escala atómica o efectos cuánticos."
          en: "The classical point charge model is valid for macroscopic objects. It fails when studying distributions at atomic scale or quantum effects."
    graph_rules:
      - id: q_graph_on_line
        when: "true"
        status: ok
        text:
          es: "En la gráfica q vs n, [[q]] debe caer exactamente sobre la recta de pendiente [[e]]. Un punto fuera de la recta indica carga no cuantizada o error de datos."
          en: "In the q vs n graph, [[q]] should fall exactly on the line with slope [[e]]. A point off the line indicates non-quantized charge or data error."
    likely_errors:
      - id: q_error_sign
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir el signo de [[q]] cuando el objeto pierde electrones (queda positivo) o gana electrones (queda negativo). La clave es que los electrones son negativos."
          en: "Common error: confusing the sign of [[q]] when the object loses electrons (becomes positive) or gains electrons (becomes negative). Key: electrons are negative."
      - id: q_error_units
        when: "abs(q) > 1"
        status: warning
        text:
          es: "[[q]] superior a 1 C es inusual en electrostática ordinaria. Verificar si las unidades son correctas (no mezclar µC con C) y si el escenario es físicamente realista."
          en: "[[q]] above 1 C is unusual in ordinary electrostatics. Check units are correct (do not mix µC with C) and whether the scenario is physically realistic."
    next_step_rules:
      - id: q_next_coulomb
        when: "abs(q) > 0"
        status: ok
        text:
          es: "Con [[q]] calculada, el siguiente paso natural es aplicar la ley de Coulomb para calcular la fuerza entre esta carga y otra, o calcular el campo eléctrico generado."
          en: "With [[q]] calculated, the natural next step is to apply Coulomb's law to find the force between this charge and another, or to calculate the generated electric field."
      - id: q_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar cómo [[q]] determina la fuerza en la ley de Coulomb o el flujo eléctrico en la ley de Gauss."
          en: "Explore how [[q]] determines the force in Coulomb's law or the electric flux in Gauss's law."

  n:
    magnitude_type: integer_count
    semantic_role:
      es: "Número entero de cargas elementales que constituyen la carga total del objeto."
      en: "Integer number of elementary charges that make up the total charge of the object."
    summary_rules:
      - id: n_summary_positive
        when: "n > 0"
        status: ok
        text:
          es: "[[n]] positivo indica que el objeto tiene déficit de [[n]] electrones respecto a un estado neutro. Cada unidad de [[n]] representa 1.602×10⁻¹⁹ C de carga."
          en: "Positive [[n]] indicates the object has a deficit of [[n]] electrons relative to neutral state. Each unit of [[n]] represents 1.602×10⁻¹⁹ C of charge."
      - id: n_summary_negative
        when: "n < 0"
        status: ok
        text:
          es: "[[n]] negativo indica exceso de electrones. El módulo de [[n]] resume cuántos electrones extra tiene el objeto por encima de la neutralidad."
          en: "Negative [[n]] indicates an excess of electrons. The magnitude of [[n]] summarizes how many extra electrons the object has above neutrality."
      - id: n_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n]] describe el estado de electrización del objeto como conteo de cargas elementales. Su valor entero es la manifestación directa de la cuantización de la carga."
          en: "[[n]] describes the electrification state of the object as a count of elementary charges. Its integer value is the direct manifestation of charge quantization."
    physical_reading_rules:
      - id: n_reading_large
        when: "abs(n) > 1e12"
        status: ok
        text:
          es: "[[n]] supera el billón de cargas elementales: carga macroscópica significativa. En este régimen, el modelo continuo de carga es indistinguible del discreto."
          en: "[[n]] exceeds one trillion elementary charges: significant macroscopic charge. In this regime, the continuous charge model is indistinguishable from the discrete one."
      - id: n_reading_default
        when: "true"
        status: ok
        text:
          es: "[[n]] indica cuántas cargas elementales han sido transferidas. Depende directamente de [[q]] y [[e]] mediante la cuantización de la carga."
          en: "[[n]] indicates how many elementary charges have been transferred. It depends directly on [[q]] and [[e]] through charge quantization."
    coherence_rules:
      - id: n_coherence_integer
        when: "abs(n - round(n)) > 0.01"
        status: error
        text:
          es: "[[n]] no es entero: resultado físicamente imposible en el modelo cuántico. Revisar los datos de entrada y las unidades de [[q]] y [[e]]."
          en: "[[n]] is not an integer: physically impossible result in the quantum model. Review input data and units of [[q]] and [[e]]."
      - id: n_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[n]] entero es coherente con la cuantización de la carga. La integridad del valor confirma que los datos son físicamente consistentes."
          en: "Integer [[n]] is consistent with charge quantization. The integrality of the value confirms that the data are physically consistent."
    model_validity_rules:
      - id: n_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de cuantización es válido para toda escala macroscópica y atómica. Solo falla al intentar aislar quarks, donde la carga es fracción de [[e]] pero nunca se observan libres."
          en: "The quantization model is valid at all macroscopic and atomic scales. It only fails when trying to isolate quarks, where charge is a fraction of [[e]] but they are never observed free."
    graph_rules:
      - id: n_graph_axis
        when: "true"
        status: ok
        text:
          es: "[[n]] ocupa el eje horizontal de la gráfica q vs n. Cada punto entero sobre el eje corresponde a un estado de electrización físicamente posible."
          en: "[[n]] occupies the horizontal axis of the q vs n graph. Each integer point on the axis corresponds to a physically possible electrification state."
    likely_errors:
      - id: n_error_continuous
        when: "true"
        status: warning
        text:
          es: "Error frecuente: calcular [[n]] como variable continua. Si el resultado tiene decimales, siempre es un error; la carga solo existe en múltiplos enteros de [[e]]."
          en: "Common error: treating [[n]] as a continuous variable. If the result has decimals, it is always an error; charge only exists in integer multiples of [[e]]."
    next_step_rules:
      - id: n_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[n]] calculado, verificar que [[q]] sea exactamente n·e y usar [[q]] para calcular fuerzas coulombianas o flujos eléctricos en problemas posteriores."
          en: "With [[n]] calculated, verify that [[q]] equals exactly n·e and use [[q]] to calculate Coulomb forces or electric fluxes in subsequent problems."

  e:
    magnitude_type: fundamental_constant
    semantic_role:
      es: "Carga mínima observable en partículas libres; unidad indivisible de la carga eléctrica."
      en: "Minimum observable charge in free particles; indivisible unit of electric charge."
    summary_rules:
      - id: e_summary_default
        when: "true"
        status: ok
        text:
          es: "[[e]] es la carga elemental, constante fundamental de la naturaleza. Su valor indica la escala mínima de carga observable y depende del cociente entre la carga total [[q]] y el número entero [[n]]."
          en: "[[e]] is the elementary charge, a fundamental constant of nature. Its value indicates the minimum observable charge scale and depends on the ratio of total charge [[q]] to the integer [[n]]."
    physical_reading_rules:
      - id: e_reading_default
        when: "true"
        status: ok
        text:
          es: "[[e]] aproximadamente 1.602×10⁻¹⁹ C. Un resultado muy diferente indica error de unidades o de datos. Su pequeñez explica por qué los objetos macroscópicos parecen tener carga continua."
          en: "[[e]] approximately 1.602×10⁻¹⁹ C. A very different result indicates a units or data error. Its smallness explains why macroscopic objects appear to have continuous charge."
    coherence_rules:
      - id: e_coherence_value
        when: "abs(e - 1.602e-19) > 1e-21"
        status: warning
        text:
          es: "[[e]] calculada difiere del valor estándar. Esto indica un error de datos, ya que la carga elemental es una constante universal invariable."
          en: "Calculated [[e]] differs from the standard value. This indicates a data error, since the elementary charge is an invariable universal constant."
      - id: e_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[e]] coherente con el valor estándar de la constante fundamental. Los datos de entrada son físicamente consistentes."
          en: "[[e]] consistent with the standard value of the fundamental constant. Input data are physically consistent."
    model_validity_rules:
      - id: e_validity_default
        when: "true"
        status: ok
        text:
          es: "[[e]] es constante en todas las condiciones conocidas. No existe modelo físico válido que prediga un valor diferente para la carga elemental en materia ordinaria."
          en: "[[e]] is constant under all known conditions. No valid physical model predicts a different value for the elementary charge in ordinary matter."
    graph_rules:
      - id: e_graph_slope
        when: "true"
        status: ok
        text:
          es: "[[e]] es la pendiente de la recta q vs n. Un ajuste experimental a esa recta permite medir [[e]] directamente, como hizo Millikan con su experimento de la gota de aceite."
          en: "[[e]] is the slope of the q vs n line. An experimental fit to that line allows direct measurement of [[e]], as Millikan did with his oil drop experiment."
    likely_errors:
      - id: e_error_electron
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar -1.602×10⁻¹⁹ C en lugar de +1.602×10⁻¹⁹ C para [[e]]. La carga elemental es positiva por definición; el signo negativo del electrón queda en [[n]]."
          en: "Common error: using -1.602×10⁻¹⁹ C instead of +1.602×10⁻¹⁹ C for [[e]]. The elementary charge is positive by definition; the electron's negative sign is carried by [[n]]."
    next_step_rules:
      - id: e_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[e]] confirmada, usar la cuantización de la carga para determinar cuántos electrones han sido transferidos en un proceso de electrización concreto."
          en: "With [[e]] confirmed, use charge quantization to determine how many electrons were transferred in a specific electrification process."

  q_neta:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Balance neto de cargas en el sistema; determina el campo eléctrico generado a grandes distancias."
      en: "Net charge balance of the system; determines the electric field generated at large distances."
    summary_rules:
      - id: q_neta_summary_positive
        when: "q_neta > 0"
        status: ok
        text:
          es: "[[q_neta]] positiva indica que el sistema tiene más carga positiva que negativa. A grandes distancias el sistema se comporta como una carga puntual positiva de ese valor."
          en: "Positive [[q_neta]] indicates the system has more positive than negative charge. At large distances the system behaves as a positive point charge of that value."
      - id: q_neta_summary_negative
        when: "q_neta < 0"
        status: ok
        text:
          es: "[[q_neta]] negativa indica exceso de carga negativa en el sistema. Resume el desequilibrio de cargas y depende de la suma algebraica de [[q_pos]] y [[q_neg]]."
          en: "Negative [[q_neta]] indicates excess negative charge in the system. It summarizes the charge imbalance and depends on the algebraic sum of [[q_pos]] and [[q_neg]]."
      - id: q_neta_summary_zero
        when: "q_neta == 0"
        status: ok
        text:
          es: "[[q_neta]] nula indica sistema eléctricamente neutro. Las cargas positivas y negativas se compensan exactamente; el campo eléctrico neto a grandes distancias es nulo."
          en: "Zero [[q_neta]] indicates an electrically neutral system. Positive and negative charges exactly cancel; the net electric field at large distances is zero."
      - id: q_neta_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q_neta]] resume el balance eléctrico del sistema. Su conservación indica que la carga no se crea ni se destruye en sistemas aislados."
          en: "[[q_neta]] summarizes the electrical balance of the system. Its conservation indicates that charge is neither created nor destroyed in isolated systems."
    physical_reading_rules:
      - id: q_neta_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q_neta]] mide el desequilibrio eléctrico global del sistema. Para sistemas con distribución interna compleja, [[q_neta]] determina solo el campo a larga distancia; el campo cercano puede ser muy diferente."
          en: "[[q_neta]] measures the global electrical imbalance of the system. For systems with complex internal distribution, [[q_neta]] determines only the far-field; the near field can be very different."
    coherence_rules:
      - id: q_neta_coherence_conservation
        when: "true"
        status: ok
        text:
          es: "Verificar que [[q_neta]] del sistema final coincide con [[q_neta]] del sistema inicial si no ha habido intercambio con el exterior. La conservación de la carga es una ley exacta."
          en: "Verify that [[q_neta]] of the final system equals [[q_neta]] of the initial system if there has been no exchange with the exterior. Charge conservation is an exact law."
    model_validity_rules:
      - id: q_neta_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de carga neta como suma algebraica es exactamente válido. Solo el enfoque puntual deja de ser válido cuando las distancias son comparables al tamaño del sistema."
          en: "The net charge as algebraic sum model is exactly valid. Only the point charge approximation fails when distances are comparable to the system size."
    graph_rules:
      - id: q_neta_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q_neta]] en la gráfica q vs n cae sobre la misma recta que [[q]] individual; su posición sobre el eje vertical confirma si el sistema está cargado o neutro."
          en: "[[q_neta]] on the q vs n graph falls on the same line as individual [[q]]; its position on the vertical axis confirms whether the system is charged or neutral."
    likely_errors:
      - id: q_neta_error_modules
        when: "true"
        status: warning
        text:
          es: "Error frecuente: sumar los módulos de [[q_pos]] y [[q_neg]] en lugar de hacer la suma algebraica. Si hay 5 µC positivos y 3 µC negativos, la carga neta es 2 µC, no 8 µC."
          en: "Common error: adding the magnitudes of [[q_pos]] and [[q_neg]] instead of the algebraic sum. If there are 5 µC positive and 3 µC negative, the net charge is 2 µC, not 8 µC."
    next_step_rules:
      - id: q_neta_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[q_neta]] calculada, verificar conservación respecto al estado inicial y usar el resultado para calcular el campo eléctrico o la fuerza coulombiana del sistema."
          en: "With [[q_neta]] calculated, verify conservation relative to the initial state and use the result to compute the electric field or Coulomb force of the system."

  q_pos:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Componente positiva de la carga del sistema; contribución de los protones al balance eléctrico."
      en: "Positive charge component of the system; proton contribution to the electrical balance."
    summary_rules:
      - id: q_pos_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q_pos]] indica la carga positiva total del sistema. En electrostática ordinaria, [[q_pos]] permanece prácticamente constante ya que los protones no se transfieren; lo que varía es [[q_neg]]."
          en: "[[q_pos]] indicates the total positive charge of the system. In ordinary electrostatics, [[q_pos]] remains practically constant since protons are not transferred; what varies is [[q_neg]]."
    physical_reading_rules:
      - id: q_pos_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q_pos]] mide la contribución de protones a la carga total. En procesos de electrización macroscópica, [[q_pos]] no cambia: solo se transfieren electrones entre objetos."
          en: "[[q_pos]] measures the proton contribution to the total charge. In macroscopic electrification processes, [[q_pos]] does not change: only electrons are transferred between objects."
    coherence_rules:
      - id: q_pos_coherence_nonneg
        when: "q_pos < 0"
        status: error
        text:
          es: "[[q_pos]] no puede ser negativa por definición. Revisar la asignación de signos en el problema."
          en: "[[q_pos]] cannot be negative by definition. Review sign assignments in the problem."
      - id: q_pos_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q_pos]] no negativa, coherente con la definición de carga positiva total."
          en: "Non-negative [[q_pos]], consistent with the definition of total positive charge."
    model_validity_rules:
      - id: q_pos_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de carga positiva como suma de protones es válido en toda electrostática clásica. Falla en física nuclear donde los protones pueden transformarse en otras partículas."
          en: "The model of positive charge as proton sum is valid throughout classical electrostatics. It fails in nuclear physics where protons can transform into other particles."
    graph_rules:
      - id: q_pos_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q_pos]] contribuye al punto de la gráfica q_neta vs n desplazando el origen hacia valores positivos."
          en: "[[q_pos]] contributes to the q_neta vs n graph by shifting the origin toward positive values."
    likely_errors:
      - id: q_pos_error_sign
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asignar signo negativo a [[q_pos]] pensando que es la carga de los electrones positrones. Recordar que [[q_pos]] es siempre no negativa."
          en: "Common error: assigning a negative sign to [[q_pos]] thinking it represents positron charge. Remember that [[q_pos]] is always non-negative."
    next_step_rules:
      - id: q_pos_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[q_pos]] junto con [[q_neg]] para calcular [[q_neta]] y determinar el estado eléctrico final del sistema tras un proceso de electrización."
          en: "Use [[q_pos]] together with [[q_neg]] to calculate [[q_neta]] and determine the final electrical state of the system after an electrification process."

  q_neg:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Componente negativa de la carga del sistema; contribución de los electrones al balance eléctrico."
      en: "Negative charge component of the system; electron contribution to the electrical balance."
    summary_rules:
      - id: q_neg_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q_neg]] indica la carga negativa total del sistema, siempre no positiva. En procesos de electrización ordinarios, [[q_neg]] es la magnitud que cambia porque los electrones son los portadores transferibles."
          en: "[[q_neg]] indicates the total negative charge of the system, always non-positive. In ordinary electrification, [[q_neg]] is the quantity that changes because electrons are the transferable carriers."
    physical_reading_rules:
      - id: q_neg_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q_neg]] mide cuánta carga de electrones contiene el sistema. Su valor se vuelve más negativo cuando el objeto gana electrones y menos negativo cuando los pierde."
          en: "[[q_neg]] measures how much electron charge the system contains. Its value becomes more negative when the object gains electrons and less negative when it loses them."
    coherence_rules:
      - id: q_neg_coherence_nonpos
        when: "q_neg > 0"
        status: error
        text:
          es: "[[q_neg]] no puede ser positiva por definición. Revisar la asignación de signos: la carga negativa total siempre es no positiva."
          en: "[[q_neg]] cannot be positive by definition. Review sign assignments: total negative charge is always non-positive."
      - id: q_neg_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q_neg]] no positiva, coherente con su definición como carga de electrones del sistema."
          en: "Non-positive [[q_neg]], consistent with its definition as the electron charge of the system."
    model_validity_rules:
      - id: q_neg_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[q_neg]] como suma de cargas de electrones es válido en toda electrostática clásica. En plasmas y física cuántica pueden aparecer antipartículas positivas que complican este esquema."
          en: "The model of [[q_neg]] as sum of electron charges is valid throughout classical electrostatics. In plasmas and quantum physics, positive antiparticles may appear and complicate this scheme."
    graph_rules:
      - id: q_neg_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q_neg]] contribuye al punto de la gráfica q_neta vs n desplazando la carga total hacia valores negativos."
          en: "[[q_neg]] contributes to the q_neta vs n graph by shifting the total charge toward negative values."
    likely_errors:
      - id: q_neg_error_magnitude
        when: "true"
        status: warning
        text:
          es: "Error frecuente: trabajar con el módulo de [[q_neg]] y olvidar el signo al sumar con [[q_pos]]. La suma algebraica correcta produce un resultado diferente del que da la suma de módulos."
          en: "Common error: working with the magnitude of [[q_neg]] and forgetting the sign when adding with [[q_pos]]. The correct algebraic sum produces a different result than the sum of magnitudes."
    next_step_rules:
      - id: q_neg_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[q_neg]] junto con [[q_pos]] para calcular [[q_neta]]. Si [[q_neg]] aumentó en módulo respecto al estado inicial, el objeto ha ganado electrones por esa diferencia dividida por [[e]]."
          en: "Use [[q_neg]] together with [[q_pos]] to calculate [[q_neta]]. If [[q_neg]] increased in magnitude relative to the initial state, the object gained electrons equal to that difference divided by [[e]]."

cross_checks:
  - id: cross_cuantizacion_vs_neta
    description:
      es: "Verificar que q_neta es consistente con n·e: si la cuantización y la suma de componentes dan valores distintos, hay error en los datos de entrada."
      en: "Verify that q_neta is consistent with n·e: if quantization and component sum give different values, there is an error in the input data."

error_patterns:
  - id: error_signo_q
    pattern: "q_pos > 0 and q_neg > 0"
    message:
      es: "Ambas componentes con el mismo signo: revisar la convención de signos para q_neg."
      en: "Both components with the same sign: review sign convention for q_neg."
  - id: error_n_fraccionario
    pattern: "abs(n - round(n)) > 0.01"
    message:
      es: "n no entero: la cuantización de la carga exige que n sea exactamente entero."
      en: "Non-integer n: charge quantization requires n to be exactly an integer."

graph_binding:
  leaf_id: carga-electrica
  graph_type: Coord
  axes:
    x: n
    y: q
  semantic_mapping:
    x_variable: n
    y_variable: q
    slope: e
  interpretation_link:
    target: q
    formula: cuantizacion_carga

mini_graph:
  enabled: true
  type: Coord
  variables:
    x: n
    y: q

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
