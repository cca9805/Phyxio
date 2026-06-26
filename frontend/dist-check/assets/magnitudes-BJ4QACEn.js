const n=`version: 5
magnitudes:
- id: I1
  symbol: I_1
  nombre:
    es: corriente de rama 1
    en: Branch Current 1
  unidad_si: A
  descripcion:
    es: Corriente de una rama entrante o saliente en un nodo de análisis.
    en: Current of one branch entering or leaving a node in the analysis.
  dimension: I
  is_vector: false
  components: []
  category: variable
  physical_role: physical_quantity
  used_in: [ kcl_nodo ]
  common_mistake: Cambiar su signo a mitad del sistema por confusión de sentido.
  typical_range: Corrientes de miliamperios a amperios según escala de red.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende del sentido de referencia elegido.
      en: Sign depends on chosen reference direction.
  zero_behavior:
    allowed: true
    meaning:
      es: Corriente nula representa rama sin flujo neto de carga.
      en: Zero current means branch with no net charge flow.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Conviene fijar flecha de referencia antes de escribir ecuaciones.
- id: I2
  symbol: I_2
  nombre:
    es: corriente de rama 2
    en: Branch Current 2
  unidad_si: A
  descripcion:
    es: Segunda corriente de rama usada en balance nodal.
    en: Second branch current used in nodal balance.
  dimension: I
  is_vector: false
  components: []
  category: variable
  physical_role: physical_quantity
  used_in: [ kcl_nodo ]
  common_mistake: Forzarla positiva aunque el resultado indique sentido opuesto.
  typical_range: Similar a I1 en redes de distribución básica.
  sign_behavior:
    has_sign: true
    meaning:
      es: Signo positivo o negativo según convención de orientación.
      en: Positive or negative sign according to orientation convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede anularse si la rama queda sin diferencia de potencial efectiva.
      en: It can be zero if branch has no effective potential difference.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Mantener coherencia con I1 e I3 en la misma convención algebraica.
- id: I3
  symbol: I_3
  nombre:
    es: corriente de rama 3
    en: Branch Current 3
  unidad_si: A
  descripcion:
    es: Corriente resultante de balance en el nodo principal del ejemplo base.
    en: Resulting current from balance at main node in the base example.
  dimension: I
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ kcl_nodo ]
  common_mistake: Interpretarla sin revisar el sentido asumido en el planteamiento.
  typical_range: Depende de suma algebraica entre corrientes de rama.
  sign_behavior:
    has_sign: true
    meaning:
      es: Si es negativa, el sentido real es opuesto al supuesto.
      en: If negative, actual direction is opposite to the assumed one.
  zero_behavior:
    allowed: true
    meaning:
      es: Valor nulo implica equilibrio exacto de corrientes de entrada y salida.
      en: Zero value implies exact balance between entering and leaving currents.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ analisis-nodal ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Es magnitud dominante para validar conservación de carga.
- id: Vs
  symbol: V_s
  nombre:
    es: tensión de fuente
    en: Source Voltage
  unidad_si: V
  descripcion:
    es: Fuerza electromotriz que alimenta una malla resistiva.
    en: Electromotive source that supplies a resistive mesh.
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ kvl_malla ]
  common_mistake: Mezclar valor nominal de fuente con valor bajo carga sin aclararlo.
  typical_range: Desde pocos voltios hasta cientos según circuito.
  sign_behavior:
    has_sign: true
    meaning:
      es: Su signo en ecuación depende del recorrido de malla.
      en: Its sign in equations depends on mesh traversal direction.
  zero_behavior:
    allowed: true
    meaning:
      es: Sin fuente no hay excitación forzada de la malla.
      en: Without source there is no forced mesh excitation.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ analisis-de-mallas ]
  graph_binding:
    channels: [ tension ]
  pedagogical_notes: Debe conservar coherencia de polaridad en todo el lazo.
- id: I
  symbol: I
  nombre:
    es: corriente de malla
    en: Mesh Current
  unidad_si: A
  descripcion:
    es: Corriente asociada a una malla equivalente en análisis por lazos.
    en: Current associated with an equivalent loop in mesh analysis.
  dimension: I
  is_vector: false
  components: []
  category: variable
  physical_role: physical_quantity
  used_in: [ kvl_malla, ohm_aux ]
  common_mistake: Cambiar convención de giro entre ecuaciones consecutivas.
  typical_range: Definida por fuente y resistencia equivalente de lazo.
  sign_behavior:
    has_sign: true
    meaning:
      es: Valor negativo indica giro real contrario al supuesto.
      en: Negative value indicates real loop direction opposite to assumption.
  zero_behavior:
    allowed: true
    meaning:
      es: Corriente nula aparece en malla balanceada sin excitación neta.
      en: Zero current appears in balanced loop with no net excitation.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ analisis-de-mallas ]
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Conviene validar su signo antes de inferir potencia disipada.
- id: R1
  symbol: R_1
  nombre:
    es: resistencia 1
    en: Resistance 1
  unidad_si: ohm
  descripcion:
    es: Primera resistencia de la malla en la ecuación de KVL.
    en: First mesh resistance in KVL equation.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ kvl_malla ]
  common_mistake: Introducir unidad en kiloohm sin convertir a ohm.
  typical_range: De fracciones a miles de ohm según topología.
  sign_behavior:
    has_sign: false
    meaning:
      es: En modelo pasivo ideal se trata como magnitud positiva.
      en: In ideal passive model it is treated as positive magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Valor nulo idealiza cortocircuito del tramo correspondiente.
      en: Zero value idealizes short circuit in that segment.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ analisis-de-mallas ]
  graph_binding:
    channels: [ resistencia ]
  pedagogical_notes: Debe mantenerse en la misma escala de unidades que R2.
- id: R2
  symbol: R_2
  nombre:
    es: resistencia 2
    en: Resistance 2
  unidad_si: ohm
  descripcion:
    es: Segunda resistencia del lazo usado en balance de tensiones.
    en: Second loop resistance used in voltage balance.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ kvl_malla ]
  common_mistake: Olvidarla en la suma de caídas cuando hay varias ramas.
  typical_range: Similar a R1 en ejemplos didácticos de DC.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se modela como positiva para elementos pasivos.
      en: It is modeled as positive for passive elements.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede idealizarse nula en casos de conexión directa.
      en: It can be idealized as zero in direct connection cases.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ analisis-de-mallas ]
  graph_binding:
    channels: [ resistencia ]
  pedagogical_notes: Mantenerla explícita evita errores de omisión en KVL.
- id: V
  symbol: V
  nombre:
    es: caída de tensión
    en: Voltage Drop
  unidad_si: V
  descripcion:
    es: Diferencia de potencial en un elemento resistivo de la red.
    en: Potential difference across a resistive element in the network.
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ ohm_aux ]
  common_mistake: Asignar su signo sin respetar el sentido de recorrido.
  typical_range: Determinada por corriente de rama y resistencia local.
  sign_behavior:
    has_sign: true
    meaning:
      es: Cambia con elección de referencia de polaridad.
      en: It changes with selected polarity reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Nula cuando no hay caída en el elemento considerado.
      en: It is zero when no drop exists in the considered element.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '(-inf, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ ley-de-ohm ]
  graph_binding:
    channels: [ tension ]
  pedagogical_notes: Es útil para contrastar cierres de lazo en mallas complejas.
- id: R
  symbol: R
  nombre:
    es: resistencia equivalente local
    en: Local Equivalent Resistance
  unidad_si: ohm
  descripcion:
    es: Parámetro resistivo genérico en relación auxiliar de Ohm.
    en: Generic resistive parameter in auxiliary Ohm relation.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ ohm_aux ]
  common_mistake: Mezclarla con suma de resistencias no equivalentes.
  typical_range: Positiva y dependiente del tramo analizado.
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud no negativa en modelo resistivo pasivo.
      en: Non-negative magnitude in passive resistive model.
  zero_behavior:
    allowed: true
    meaning:
      es: Cero idealiza un conductor sin caída de tensión.
      en: Zero idealizes conductor with no voltage drop.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ leyes-de-kirchhoff ]
    secondary_for: [ ley-de-ohm ]
  graph_binding:
    channels: [ resistencia ]
  pedagogical_notes: Aclara conexión entre relación de malla y caída local.
`;export{n as default};
