const n=`version: 5
magnitudes:
- id: Req
  symbol: R_{eq}
  nombre:
    es: resistencia equivalente
    en: Equivalent Resistance
  unidad_si: ohm
  descripcion:
    es: Resistencia única que sustituye a una red de ramas resistivas en paralelo.
    en: Single resistance that replaces a network of resistive parallel branches.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ req_reciproco, req_dos_ramas, geq_reciproco ]
  common_mistake: Creer que su valor es mayor que la menor resistencia de rama.
  typical_range: Menor que la resistencia mínima de la red en paralelo.
  sign_behavior:
    has_sign: false
    meaning:
      es: En redes pasivas se modela como magnitud no negativa.
      en: In passive networks it is modeled as a non-negative quantity.
  zero_behavior:
    allowed: true
    meaning:
      es: Valor nulo idealiza un cortocircuito equivalente.
      en: Zero value idealizes an equivalent short circuit.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-de-circuitos-dc ]
  graph_binding:
    channels: [ resistencia ]
  pedagogical_notes: Es la magnitud dominante para evaluar impacto global de añadir ramas.
- id: R1
  symbol: R_1
  nombre:
    es: resistencia de rama 1
    en: Branch Resistance 1
  unidad_si: ohm
  descripcion:
    es: Resistencia de la primera rama conectada entre los mismos nodos del paralelo.
    en: Resistance of the first branch connected between the same parallel nodes.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ req_reciproco, req_dos_ramas, corriente_rama_1 ]
  common_mistake: Mezclar unidades entre ohm y kiloohm sin convertir.
  typical_range: Positiva y del orden de ohm a kiloohm según la carga.
  sign_behavior:
    has_sign: false
    meaning:
      es: En modelo resistivo pasivo se toma no negativa.
      en: In passive resistive modeling it is treated as non-negative.
  zero_behavior:
    allowed: true
    meaning:
      es: Valor nulo idealiza rama en cortocircuito.
      en: Zero value idealizes a shorted branch.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ resistencia ]
  pedagogical_notes: Si disminuye, la corriente de su rama crece para misma tensión.
- id: R2
  symbol: R_2
  nombre:
    es: resistencia de rama 2
    en: Branch Resistance 2
  unidad_si: ohm
  descripcion:
    es: Resistencia de la segunda rama del montaje en paralelo.
    en: Resistance of the second branch of the parallel network.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ req_reciproco, req_dos_ramas, corriente_rama_2 ]
  common_mistake: Omitir su aporte en la suma de conductancias.
  typical_range: Positiva en la ventana de operación del circuito.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se modela como magnitud no negativa.
      en: It is modeled as non-negative magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero representa derivación ideal de rama.
      en: Zero represents an ideal branch bypass.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ resistencia ]
  pedagogical_notes: Su comparación con R1 explica el reparto de corriente.
- id: R3
  symbol: R_3
  nombre:
    es: resistencia de rama 3
    en: Branch Resistance 3
  unidad_si: ohm
  descripcion:
    es: Resistencia de la tercera rama incluida en el cálculo general del paralelo.
    en: Resistance of the third branch included in the general parallel computation.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ req_reciproco, corriente_rama_3 ]
  common_mistake: Mantenerla en ecuación aunque la rama no esté realmente conectada.
  typical_range: Positiva en redes pasivas de baja frecuencia.
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud no negativa en modelo lineal resistivo.
      en: Non-negative magnitude in linear resistive model.
  zero_behavior:
    allowed: true
    meaning:
      es: Si tiende a cero domina la conducción total.
      en: If it tends to zero it dominates total conduction.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ resistencia ]
  pedagogical_notes: Ayuda a extender del caso de dos ramas al caso general.
- id: V
  symbol: V
  nombre:
    es: tensión común del paralelo
    en: Common Parallel Voltage
  unidad_si: V
  descripcion:
    es: Diferencia de potencial idéntica en todas las ramas conectadas en paralelo.
    en: Potential difference that is identical across all branches in parallel.
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ corriente_rama_1, corriente_rama_2, corriente_rama_3 ]
  common_mistake: Tratarla como magnitud distinta en cada rama de un paralelo ideal.
  typical_range: Fijada por fuente y caída en nodos de alimentación.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende de la polaridad de referencia elegida.
      en: Sign depends on the chosen polarity reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero implica ausencia de excitación de tensión neta en ramas.
      en: Zero means no net voltage excitation across branches.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ ley-de-ohm ]
  graph_binding:
    channels: [ tension ]
  pedagogical_notes: Es la misma para todas las ramas del paralelo ideal.
- id: I1
  symbol: I_1
  nombre:
    es: corriente de rama 1
    en: Branch Current 1
  unidad_si: A
  descripcion:
    es: Corriente que circula por la rama asociada a R1.
    en: Current flowing through the branch associated with R1.
  dimension: I
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ corriente_rama_1, corriente_total ]
  common_mistake: Asumir igualdad con otras ramas sin comparar resistencias.
  typical_range: Proporcional a V e inversa de R1.
  sign_behavior:
    has_sign: true
    meaning:
      es: Puede ser negativa si la referencia de sentido se define en oposición al flujo real.
      en: It may be negative if reference direction opposes actual flow.
  zero_behavior:
    allowed: true
    meaning:
      es: Se anula cuando no hay tensión o la rama queda abierta efectivamente.
      en: It becomes zero when no voltage exists or branch is effectively open.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Es útil para identificar rama térmicamente más exigida.
- id: I2
  symbol: I_2
  nombre:
    es: corriente de rama 2
    en: Branch Current 2
  unidad_si: A
  descripcion:
    es: Corriente de la segunda rama del paralelo.
    en: Current of the second branch of the parallel network.
  dimension: I
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ corriente_rama_2, corriente_total ]
  common_mistake: Usar R1 para calcular I2 por error de sustitución.
  typical_range: Ajustada por la relación entre V y R2.
  sign_behavior:
    has_sign: true
    meaning:
      es: Signo ligado al sentido de referencia en la rama 2.
      en: Sign is tied to reference direction in branch 2.
  zero_behavior:
    allowed: true
    meaning:
      es: Nula cuando no hay conducción efectiva en la rama.
      en: Zero when there is no effective conduction in branch.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Facilita verificar reparto de corriente no uniforme.
- id: I3
  symbol: I_3
  nombre:
    es: corriente de rama 3
    en: Branch Current 3
  unidad_si: A
  descripcion:
    es: Corriente de la tercera rama en configuración de tres ramas.
    en: Current through third branch in a three-branch configuration.
  dimension: I
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ corriente_rama_3, corriente_total ]
  common_mistake: Incluirla en suma total aun cuando la rama fue retirada del circuito.
  typical_range: Similar de orden a otras corrientes de rama según resistencias.
  sign_behavior:
    has_sign: true
    meaning:
      es: Cambia de signo con la referencia adoptada.
      en: Its sign changes with adopted reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser nula si no existe conducción en la rama.
      en: It can be zero if there is no branch conduction.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Completa el balance de corrientes del nodo de alimentación.
- id: It
  symbol: I_t
  nombre:
    es: corriente total
    en: Total Current
  unidad_si: A
  descripcion:
    es: Corriente entregada por la fuente al conjunto paralelo.
    en: Current supplied by source to the complete parallel network.
  dimension: I
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ corriente_total ]
  common_mistake: Igualarla a una sola corriente de rama.
  typical_range: Suma algebraica de corrientes de ramas activas.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende de convención en nodo de entrada.
      en: Sign depends on convention at input node.
  zero_behavior:
    allowed: true
    meaning:
      es: Nula si no hay excitación o todas las ramas quedan abiertas.
      en: Zero if no excitation exists or all branches are effectively open.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ conservacion-de-carga ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Es la variable de verificación principal en análisis nodal.
- id: Geq
  symbol: G_{eq}
  nombre:
    es: conductancia equivalente
    en: Equivalent Conductance
  unidad_si: S
  descripcion:
    es: Conductancia total del paralelo, suma de conductancias de rama.
    en: Total conductance of parallel network, sum of branch conductances.
  dimension: M^{-1}L^{-2}T^3I^2
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ geq_suma, geq_reciproco ]
  common_mistake: Confundirla con resistencia equivalente sin invertir.
  typical_range: Aumenta al añadir ramas en paralelo.
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud no negativa en redes pasivas.
      en: Non-negative in passive networks.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero implica ausencia de camino conductor efectivo.
      en: Zero implies no effective conducting path.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-de-conductancias ]
  graph_binding:
    channels: [ conductancia ]
  pedagogical_notes: Permite lectura rápida de cambios por ramas adicionales.
- id: G1
  symbol: G_1
  nombre:
    es: conductancia de rama 1
    en: Branch Conductance 1
  unidad_si: S
  descripcion:
    es: Conductancia asociada a R1.
    en: Conductance associated with R1.
  dimension: M^{-1}L^{-2}T^3I^2
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ geq_suma ]
  common_mistake: No convertirla correctamente desde R1.
  typical_range: Positiva e inversa de R1.
  sign_behavior:
    has_sign: false
    meaning:
      es: No negativa para resistencia pasiva.
      en: Non-negative for passive resistance.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero para rama abierta ideal.
      en: Zero for ideal open branch.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-de-conductancias ]
  graph_binding:
    channels: [ conductancia ]
  pedagogical_notes: Facilita sumar aportes en paralelo sin fracciones anidadas.
- id: G2
  symbol: G_2
  nombre:
    es: conductancia de rama 2
    en: Branch Conductance 2
  unidad_si: S
  descripcion:
    es: Conductancia de la segunda rama del paralelo.
    en: Conductance of second branch in parallel network.
  dimension: M^{-1}L^{-2}T^3I^2
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ geq_suma ]
  common_mistake: Mantener valor en ohm en lugar de siemens.
  typical_range: Positiva para ramas resistivas pasivas.
  sign_behavior:
    has_sign: false
    meaning:
      es: No negativa en modelo lineal.
      en: Non-negative in linear model.
  zero_behavior:
    allowed: true
    meaning:
      es: Nula para rama sin conducción.
      en: Zero for non-conducting branch.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-de-conductancias ]
  graph_binding:
    channels: [ conductancia ]
  pedagogical_notes: Mejora lectura comparativa de reparto de corriente.
- id: G3
  symbol: G_3
  nombre:
    es: conductancia de rama 3
    en: Branch Conductance 3
  unidad_si: S
  descripcion:
    es: Conductancia correspondiente a la tercera rama del paralelo.
    en: Conductance corresponding to third branch in parallel network.
  dimension: M^{-1}L^{-2}T^3I^2
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ geq_suma ]
  common_mistake: Omitirla cuando la red tiene tres ramas activas.
  typical_range: No negativa en operación pasiva.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se asume no negativa en ramas resistivas.
      en: Assumed non-negative in resistive branches.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero si la rama no conduce.
      en: Zero if branch does not conduct.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ resistencias-en-paralelo ]
    secondary_for: [ analisis-de-conductancias ]
  graph_binding:
    channels: [ conductancia ]
  pedagogical_notes: Completa la forma general de suma de conductancias.
`;export{n as default};
