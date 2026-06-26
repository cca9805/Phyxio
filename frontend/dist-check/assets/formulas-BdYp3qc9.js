const e=`version: 1
ui:
  default_formula: req_serie
formulas:
- id: req_serie
  title:
    es: Resistencia equivalente en serie
    en: Equivalent resistance in series
  equation: Req = R1 + R2 + R3
  latex: R_{eq} = R_1 + R_2 + R_3
  rearrangements:
  - target: Req
    equation: Req = R1 + R2 + R3
    latex: R_{eq} = R_1 + R_2 + R_3
    constraints: []
  category: fundamental
  relation_type: algebraic_relation
  physical_meaning:
    es: En serie, la oposicion total al paso de corriente es la suma directa de las resistencias individuales.
    en: In series, the total opposition to current flow is the direct sum of individual resistances.
  constraints: Resistores lineales en una sola rama de corriente.
  validity:
    es: Valida en circuitos DC con componentes ohmicos y conexiones en serie ideal.
    en: Valid for DC circuits with ohmic components connected in ideal series.
  dimension_check: ohm = ohm + ohm + ohm
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  interpretation_tags:
  - equivalencia
  - serie
  - resistencia_total
  result_semantics:
    target: Req
    kind: aggregate_quantity
    sign_meaning:
      es: Para resistores pasivos el resultado es no negativo.
      en: For passive resistors the result is non-negative.
    absolute_value_meaning:
      es: Cuanto mayor es Req, menor corriente para una misma fuente.
      en: The larger Req is, the lower current for the same source.
  domain_checks:
  - expr: R1 >= 0 and R2 >= 0 and R3 >= 0
    message:
      es: Cada resistencia debe ser no negativa en el modelo pasivo.
      en: Each resistance must be non-negative in the passive model.
  coherence_checks:
  - expr: Req >= R1 and Req >= R2 and Req >= R3
    message:
      es: En serie, la equivalente no puede ser menor que una resistencia individual positiva.
      en: In series, equivalent resistance cannot be smaller than any positive individual resistor.
  graph_implications:
  - Si aumenta cualquier Ri, aumenta Req y disminuye la pendiente I versus Vt.
  pedagogical_triggers:
  - when: Req == R1
    message:
      es: Si Req coincide con R1, revisa si R2 y R3 fueron ingresadas como cero.
      en: If Req matches R1, check whether R2 and R3 were entered as zero.

- id: i_total
  title:
    es: Corriente total de la rama
    en: Total branch current
  equation: I = Vt / Req
  latex: I = \\frac{V_t}{R_{eq}}
  rearrangements:
  - target: I
    equation: I = Vt / Req
    latex: I = \\frac{V_t}{R_{eq}}
    constraints:
    - Req != 0
  category: fundamental
  relation_type: algebraic_relation
  physical_meaning:
    es: La corriente en toda la serie depende del voltaje aplicado y de la resistencia equivalente total.
    en: Current in the whole series chain depends on applied voltage and total equivalent resistance.
  constraints: Requiere Req distinta de cero.
  validity:
    es: Valida para regimen estacionario DC y modelo lineal ohmico.
    en: Valid for steady-state DC under linear ohmic behavior.
  dimension_check: A = V / ohm
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  interpretation_tags:
  - ley_de_ohm_global
  - corriente_comun
  result_semantics:
    target: I
    kind: flow_rate
    sign_meaning:
      es: El signo depende de la orientacion de referencia del circuito.
      en: Sign depends on the chosen circuit orientation reference.
    absolute_value_meaning:
      es: Magnitudes altas de I implican mayor disipacion termica.
      en: Larger I magnitudes imply higher thermal dissipation.
  domain_checks:
  - expr: Req > 0
    message:
      es: Req debe ser mayor que cero para evitar division invalida.
      en: Req must be greater than zero to avoid invalid division.
  coherence_checks:
  - expr: abs(I * Req - Vt) < 1e-9
    message:
      es: Debe cumplirse consistencia entre I, Req y Vt.
      en: Consistency between I, Req and Vt must hold.
  graph_implications:
  - Con Vt fija, I decrece de forma inversa al aumentar Req.
  pedagogical_triggers:
  - when: I == 0
    message:
      es: Corriente nula sugiere fuente nula o circuito abierto en el modelo ideal.
      en: Zero current suggests null source or open circuit in the ideal model.

- id: caida_ohm
  title:
    es: Caida de tension en un elemento
    en: Voltage drop on one element
  equation: Vi = I * Ri
  latex: V_i = I \\cdot R_i
  rearrangements:
  - target: Vi
    equation: Vi = I * Ri
    latex: V_i = I \\cdot R_i
    constraints: []
  - target: Ri
    equation: Ri = Vi / I
    latex: R_i = \\frac{V_i}{I}
    constraints:
    - I != 0
  category: fundamental
  relation_type: algebraic_relation
  physical_meaning:
    es: Cada resistor produce una caida proporcional a la corriente comun y a su valor resistivo.
    en: Each resistor produces a drop proportional to common current and its resistance value.
  constraints: Aplica a componentes ohmicos lineales.
  validity:
    es: Valida en el dominio lineal donde V e I mantienen proporcionalidad local.
    en: Valid in the linear domain where V and I keep local proportionality.
  dimension_check: V = A * ohm
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  interpretation_tags:
  - reparto_de_tension
  - ohm_local
  result_semantics:
    target: Vi
    kind: local_drop
    sign_meaning:
      es: El signo depende del recorrido elegido al aplicar ley de mallas.
      en: Sign depends on traversal direction selected for loop equations.
    absolute_value_meaning:
      es: Una Vi mayor indica mayor fraccion de Vt sobre ese elemento.
      en: A larger Vi means a larger fraction of Vt across that element.
  domain_checks:
  - expr: Ri >= 0
    message:
      es: Ri debe ser no negativa en el modelo pasivo.
      en: Ri must be non-negative in the passive model.
  coherence_checks:
  - expr: abs(Vi) <= abs(Vt) + 1e-9
    message:
      es: En serie ideal, una caida individual no debe exceder en modulo a la fuente total.
      en: In ideal series, an individual drop should not exceed total source magnitude.
  graph_implications:
  - Para I fija, Vi crece linealmente con Ri.
  pedagogical_triggers:
  - when: Ri == 0
    message:
      es: Si Ri es cero, ese elemento no aporta caida de tension ideal.
      en: If Ri is zero, that element contributes no ideal voltage drop.

- id: divisor
  title:
    es: Divisor de tension en serie
    en: Series voltage divider
  equation: Vi = Vt * Ri / Req
  latex: V_i = V_t \\cdot \\frac{R_i}{R_{eq}}
  rearrangements:
  - target: Vi
    equation: Vi = Vt * Ri / Req
    latex: V_i = V_t \\cdot \\frac{R_i}{R_{eq}}
    constraints:
    - Req != 0
  category: structural
  relation_type: ratio_relation
  physical_meaning:
    es: La fraccion de tension asignada a un elemento depende de su fraccion resistiva dentro del total.
    en: The voltage share on one element depends on its resistance fraction within total resistance.
  constraints: Requiere conexion estrictamente en serie y salida sin carga significativa.
  validity:
    es: Valida cuando la carga externa no altera de forma apreciable el reparto original.
    en: Valid when external load does not significantly alter original distribution.
  dimension_check: V = V * ohm / ohm
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  interpretation_tags:
  - divisor
  - proporcionalidad
  result_semantics:
    target: Vi
    kind: proportional_allocation
    sign_meaning:
      es: Conserva el signo de Vt si Ri y Req son positivas.
      en: Keeps Vt sign when Ri and Req are positive.
    absolute_value_meaning:
      es: Cuanto mayor Ri respecto de Req, mayor fraccion de Vt recibe.
      en: The larger Ri relative to Req, the larger Vt fraction it receives.
  domain_checks:
  - expr: Req > 0
    message:
      es: Req debe ser positiva para aplicar el divisor.
      en: Req must be positive to apply divider relation.
  coherence_checks:
  - expr: Ri <= Req + 1e-9
    message:
      es: En serie, la resistencia individual no debe exceder Req.
      en: In series, individual resistance should not exceed Req.
  graph_implications:
  - El reparto de Vi se desplaza hacia elementos de mayor Ri.
  pedagogical_triggers:
  - when: Ri == Req
    message:
      es: Si Ri coincide con Req, el resto de resistencias es despreciable o nulo.
      en: If Ri matches Req, remaining resistances are negligible or zero.

- id: Req_formula
  title:
    es: Formula operativa de resistencia equivalente
    en: Operational equivalent-resistance formula
  equation: Req = R1 + R2 + R3
  latex: R_{eq} = R_1 + R_2 + R_3
  rearrangements:
  - target: Req
    equation: Req = R1 + R2 + R3
    latex: R_{eq} = R_1 + R_2 + R_3
    constraints: []
  category: operational
  relation_type: algebraic_relation
  physical_meaning:
    es: Forma compacta usada en resolucion rapida de problemas con tres resistores en serie.
    en: Compact form used in fast solving of three-resistor series problems.
  constraints: Los tres resistores pertenecen a la misma rama serie.
  validity:
    es: Equivalente a req_serie en el caso de tres elementos explicitos.
    en: Equivalent to req_serie for the explicit three-element case.
  dimension_check: ohm = ohm + ohm + ohm
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - atajo
  - calculo_directo
  result_semantics:
    target: Req
    kind: aggregate_quantity
    sign_meaning:
      es: No negativa para resistores pasivos.
      en: Non-negative for passive resistors.
    absolute_value_meaning:
      es: Define el nivel global de oposicion al paso de corriente.
      en: Defines global opposition level to current flow.
  domain_checks:
  - expr: R1 >= 0 and R2 >= 0 and R3 >= 0
    message:
      es: Resistencias individuales no negativas.
      en: Individual resistances must be non-negative.
  coherence_checks:
  - expr: Req >= 0
    message:
      es: Req no puede ser negativa en este modelo.
      en: Req cannot be negative in this model.
  graph_implications:
  - Un aumento de cualquier termino eleva Req.
  pedagogical_triggers:
  - when: Req < 1
    message:
      es: "Req muy baja: revisa si alguna entrada estaba en kiloohm y no en ohm."
      en: "Very low Req: check whether any input was in kiloohms but entered as ohms."

- id: Vi_formula
  title:
    es: Formula operativa de caida local
    en: Operational local-drop formula
  equation: Vi = I * Ri
  latex: V_i = I \\cdot R_i
  rearrangements:
  - target: Vi
    equation: Vi = I * Ri
    latex: V_i = I \\cdot R_i
    constraints: []
  category: operational
  relation_type: algebraic_relation
  physical_meaning:
    es: Permite calcular rapidamente la caida en un elemento concreto con corriente conocida.
    en: Allows quick computation of one element drop with known current.
  constraints: Corriente uniforme en la rama serie.
  validity:
    es: Valida para resistores lineales en regimen estacionario.
    en: Valid for linear resistors under steady-state conditions.
  dimension_check: V = A * ohm
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - caida_local
  - ohm
  result_semantics:
    target: Vi
    kind: local_drop
    sign_meaning:
      es: Sigue la convencion de polaridad y sentido elegidos.
      en: Follows chosen polarity and direction conventions.
    absolute_value_meaning:
      es: Cuantifica la porcion de Vt consumida por el elemento.
      en: Quantifies the fraction of Vt consumed by the element.
  domain_checks:
  - expr: Ri >= 0
    message:
      es: Ri debe ser no negativa.
      en: Ri must be non-negative.
  coherence_checks:
  - expr: abs(Vi) <= abs(Vt) + 1e-9
    message:
      es: Vi no debe exceder en modulo la fuente total.
      en: Vi should not exceed total source magnitude.
  graph_implications:
  - Vi escala linealmente con Ri si I se mantiene constante.
  pedagogical_triggers:
  - when: I == 0
    message:
      es: Si I es cero, toda caida local ideal es cero.
      en: If I is zero, every ideal local drop is zero.

- id: I_formula
  title:
    es: Formula operativa de corriente total
    en: Operational total-current formula
  equation: I = Vt / Req
  latex: I = \\frac{V_t}{R_{eq}}
  rearrangements:
  - target: I
    equation: I = Vt / Req
    latex: I = \\frac{V_t}{R_{eq}}
    constraints:
    - Req != 0
  category: operational
  relation_type: algebraic_relation
  physical_meaning:
    es: Relacion directa para obtener la corriente de la rama completa desde la fuente y la equivalente.
    en: Direct relation to obtain full branch current from source voltage and equivalent resistance.
  constraints: Req distinta de cero.
  validity:
    es: Misma validez que i_total en modelo lineal DC.
    en: Same validity as i_total in linear DC model.
  dimension_check: A = V / ohm
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - corriente_global
  - ley_de_ohm
  result_semantics:
    target: I
    kind: flow_rate
    sign_meaning:
      es: Determinado por la orientacion de referencia.
      en: Determined by reference orientation.
    absolute_value_meaning:
      es: Fija el nivel de disipacion en toda la cadena.
      en: Sets dissipation level across entire chain.
  domain_checks:
  - expr: Req > 0
    message:
      es: Req debe ser positiva para este calculo.
      en: Req must be positive for this calculation.
  coherence_checks:
  - expr: abs(I * Req - Vt) < 1e-9
    message:
      es: Coherencia algebraica de la ley de Ohm global.
      en: Algebraic consistency of global Ohm law.
  graph_implications:
  - Si Vt se duplica con Req fija, I tambien se duplica.
  pedagogical_triggers:
  - when: abs(I) > 2
    message:
      es: "Corriente elevada: verificar potencia y seguridad del componente."
      en: "High current: verify component power and safety."

- id: Vt_formula
  title:
    es: Cierre de malla de tension
    en: Voltage loop closure
  equation: Vt = Vi1 + Vi2 + Vi3
  latex: V_t = V_{i1} + V_{i2} + V_{i3}
  rearrangements:
  - target: Vt
    equation: Vt = Vi1 + Vi2 + Vi3
    latex: V_t = V_{i1} + V_{i2} + V_{i3}
    constraints: []
  category: structural
  relation_type: conservation_relation
  physical_meaning:
    es: Expresa el balance energetico de una malla serie donde la fuente se reparte en caidas individuales.
    en: Expresses energy balance in a series loop where source voltage is distributed into individual drops.
  constraints: Convencion de signos consistente en todas las caidas.
  validity:
    es: Valida en malla unica ideal bajo ley de voltajes de Kirchhoff.
    en: Valid in an ideal single loop under Kirchhoff voltage law.
  dimension_check: V = V + V + V
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  interpretation_tags:
  - kvl
  - balance_de_malla
  result_semantics:
    target: Vt
    kind: conservation_balance
    sign_meaning:
      es: Depende de la orientacion de recorrido elegida para la malla.
      en: Depends on traversal orientation selected for loop.
    absolute_value_meaning:
      es: Determina el total disponible para repartirse en los elementos.
      en: Sets total available amount to be distributed among elements.
  domain_checks:
  - expr: true
    message:
      es: Verificar polaridades antes de sumar caidas.
      en: Verify polarities before summing drops.
  coherence_checks:
  - expr: abs(Vt - (Vi1 + Vi2 + Vi3)) < 1e-9
    message:
      es: La suma de caidas debe cerrar con la fuente.
      en: Sum of drops must close with source voltage.
  graph_implications:
  - Si aumenta una caida individual con Vt fija, otra debe reducirse o cambiar la corriente.
  pedagogical_triggers:
  - when: abs(Vt - (Vi1 + Vi2 + Vi3)) > 0.1
    message:
      es: "Cierre de malla inconsistente: revisar signos y unidades."
      en: "Inconsistent loop closure: review signs and units."
`;export{e as default};
