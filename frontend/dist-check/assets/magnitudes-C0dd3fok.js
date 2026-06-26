const e=`magnitudes:

  - id: I_cuerpo
    symbol: I_{cuerpo}
    nombre:
      es: Corriente a través del cuerpo
      en: Current through the body
    descripcion:
      es: Intensidad de corriente eléctrica que circula por el cuerpo humano en un evento de contacto eléctrico. Determina directamente la gravedad de los efectos fisiológicos.
      en: Electric current intensity flowing through the human body during an electrical contact event. Directly determines the severity of physiological effects.
    unidad_si: A
    dimension: "[I]"
    is_vector: false
    components: null
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml (corriente_corporal)
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Confundir la corriente que circula por el cuerpo con la corriente nominal del circuito; el cuerpo humano actúa como resistencia en derivación y puede recibir solo una fracción de la corriente total."
    typical_range: "1 mA (umbral percepción) a 100 mA (fibrilación ventricular). Por encima de 100 mA el riesgo es mortal."
    sign_behavior:
      has_sign: false
      meaning:
        es: La corriente corporal se trata como magnitud positiva; el sentido anatómico (mano-pie) determina el riesgo pero no su signo algebraico en este modelo.
        en: Body current is treated as a positive magnitude; the anatomical path (hand-foot) determines risk but not its algebraic sign in this model.
    zero_behavior:
      allowed: true
      meaning:
        es: Corriente cero indica ausencia de contacto eléctrico o circuito abierto; no hay riesgo eléctrico.
        en: Zero current indicates no electrical contact or open circuit; no electrical hazard.
    value_nature:
      kind: state
      nonnegative_only: true
      expected_interval: "[0, 0.1] A en exposición doméstica"
    interpretation_role:
      primary_for: evaluación de peligrosidad del contacto eléctrico
      secondary_for: dimensionado de protecciones diferenciales
    graph_binding:
      channels: [label_annotation]
    pedagogical_notes:
      es: La corriente corporal, no la tensión, es el agente directo de daño. 10 mA producen tetanización muscular; 30 mA activan el diferencial estándar; 100 mA pueden causar fibrilación ventricular en menos de 1 segundo.
      en: Body current, not voltage, is the direct damage agent. 10 mA causes muscle tetanization; 30 mA triggers the standard differential breaker; 100 mA can cause ventricular fibrillation in under 1 second.

  - id: R_cuerpo
    symbol: R_{cuerpo}
    nombre:
      es: Resistencia eléctrica del cuerpo humano
      en: Electrical resistance of the human body
    descripcion:
      es: Resistencia total que opone el cuerpo humano al paso de la corriente eléctrica. Varía enormemente con la condición de la piel (seca, húmeda), la superficie de contacto y la trayectoria anatómica.
      en: Total resistance the human body opposes to electric current flow. Varies greatly with skin condition (dry, wet), contact area and anatomical path.
    unidad_si: "Ω"
    dimension: "[M L² T⁻³ I⁻²]"
    is_vector: false
    components: null
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml (corriente_corporal)
      - teoria.md
      - ejemplos.md
    common_mistake: "Asumir que la resistencia corporal es siempre alta y protege automáticamente; en condiciones húmedas puede caer por debajo de 1000 Ω, haciendo que 230 V produzcan corrientes superiores a 200 mA."
    typical_range: "1000 Ω (piel húmeda) a 100 000 Ω (piel seca). Valor de diseño normativo: 1000 Ω (IEC 60479)."
    sign_behavior:
      has_sign: false
      meaning:
        es: La resistencia corporal es siempre positiva; no tiene signo físico relevante en este modelo.
        en: Body resistance is always positive; no relevant physical sign in this model.
    zero_behavior:
      allowed: false
      meaning:
        es: Resistencia cero implicaría cortocircuito directo a través del cuerpo; físicamente imposible pero representa el peor escenario de cálculo conservador.
        en: Zero resistance would imply direct short circuit through the body; physically impossible but represents the worst-case conservative calculation scenario.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: "[500, 100000] Ω según condiciones"
    interpretation_role:
      primary_for: cálculo de la corriente corporal a partir de la tensión de contacto
      secondary_for: evaluación del factor agravante humedad-contacto
    graph_binding:
      channels: [label_annotation]
    pedagogical_notes:
      es: El valor normativo de 1000 Ω (IEC 60479) es el peor caso razonable para piel húmeda con buena superficie de contacto. Las protecciones diferenciales se diseñan asumiendo este valor para garantizar la desconexión antes de que la corriente alcance 30 mA.
      en: The normative value of 1000 Ω (IEC 60479) is the reasonable worst case for wet skin with good contact area. Differential protections are designed assuming this value to guarantee disconnection before current reaches 30 mA.

  - id: V_contacto
    symbol: V_c
    nombre:
      es: Tensión de contacto
      en: Contact voltage
    descripcion:
      es: Diferencia de potencial eléctrico que queda aplicada entre los dos puntos del cuerpo humano que están en contacto con partes de la instalación. Puede ser diferente de la tensión de la red si existe resistencia de tierra.
      en: Electric potential difference applied between the two body contact points with parts of the installation. May differ from grid voltage if ground resistance exists.
    unidad_si: V
    dimension: "[M L² T⁻³ I⁻¹]"
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml (corriente_corporal)
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Identificar la tensión de contacto con la tensión de red (230 V); en muchos contactos indirectos la tensión real es inferior debido a la resistencia de tierra y el neutro, aunque puede seguir siendo peligrosa."
    typical_range: "0 V (sin contacto) a 230 V (contacto directo con fase). Umbral de seguridad normativo: 50 V AC (IEC 60364)."
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica la polaridad del contacto (fase a tierra positiva, neutro a tierra negativa), pero para el análisis de seguridad se usa el valor absoluto.
        en: Sign indicates contact polarity (phase to ground positive, neutral to ground negative), but the absolute value is used for safety analysis.
    zero_behavior:
      allowed: true
      meaning:
        es: Tensión de contacto cero indica ausencia de diferencia de potencial peligrosa; el cuerpo no circula corriente significativa.
        en: Zero contact voltage indicates absence of dangerous potential difference; the body does not carry significant current.
    value_nature:
      kind: state
      nonnegative_only: false
      expected_interval: "[-230, 230] V; peligroso por encima de 50 V AC"
    interpretation_role:
      primary_for: determinación de la corriente corporal resultante
      secondary_for: clasificación del tipo de contacto (directo o indirecto)
    graph_binding:
      channels: [label_annotation]
    pedagogical_notes:
      es: Los 50 V AC como límite de seguridad se derivan de que, con R_cuerpo = 1000 Ω, producen exactamente 50 mA. La norma lo fija como umbral porque por encima de este valor los efectos pueden ser graves incluso con exposiciones breves.
      en: The 50 V AC safety limit derives from the fact that, with R_cuerpo = 1000 Ω, it produces exactly 50 mA. The standard sets this threshold because above it effects can be severe even with brief exposures.

  - id: I_diferencial
    symbol: I_{diff}
    nombre:
      es: Corriente de disparo del diferencial
      en: Residual current device trip current
    descripcion:
      es: Umbral de corriente de fuga a tierra que activa el disparo del interruptor diferencial, cortando el suministro para proteger frente a contactos eléctricos peligrosos.
      en: Leakage current to ground threshold that triggers the residual current device (RCD), cutting supply to protect against dangerous electrical contacts.
    unidad_si: A
    dimension: "[I]"
    is_vector: false
    components: null
    category: parameter
    physical_role: derived
    used_in:
      - teoria.md
      - ejemplos.md
      - aplicaciones.md
    common_mistake: "Creer que un diferencial de 30 mA es infalible ante cualquier electrocución; el tiempo de disparo (< 30 ms) y la trayectoria anatómica también condicionan la supervivencia."
    typical_range: "10 mA (alta sensibilidad, baños), 30 mA (uso general doméstico), 300 mA (protección contra incendios)."
    sign_behavior:
      has_sign: false
      meaning:
        es: Valor positivo; es un umbral de disparo, no tiene sentido de circulación relevante para el alumno.
        en: Positive value; it is a trip threshold, not a directional quantity relevant for the student.
    zero_behavior:
      allowed: false
      meaning:
        es: Un diferencial con umbral cero desconectaría ante cualquier desequilibrio, incluyendo fugas parásitas normales de la instalación.
        en: A zero-threshold differential would disconnect at any imbalance, including normal parasitic leakage in the installation.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: "[0.01, 0.3] A según normativa"
    interpretation_role:
      primary_for: evaluación del nivel de protección frente a contactos eléctricos
      secondary_for: selección del tipo de diferencial según zona de la instalación
    graph_binding:
      channels: [label_annotation]
    pedagogical_notes:
      es: El diferencial de 30 mA doméstico estándar se activa antes de que la corriente corporal alcance el umbral de fibrilación (100 mA) con un margen seguro. El de 10 mA protege incluso frente a corrientes de tetanización en zonas húmedas.
      en: The standard 30 mA domestic differential activates before body current reaches the fibrillation threshold (100 mA) with a safe margin. The 10 mA type protects even against tetanization currents in wet areas.

  - id: I_segura
    symbol: I_{seg}
    nombre:
      es: Corriente de seguridad máxima
      en: Maximum safe current
    descripcion:
      es: Valor límite de corriente eléctrica que puede circular por el cuerpo humano sin producir efectos fisiológicos peligrosos permanentes. Definida por norma IEC 60479 en función del tiempo de exposición.
      en: Limit value of electric current that can flow through the human body without producing permanent dangerous physiological effects. Defined by IEC 60479 standard as a function of exposure time.
    unidad_si: A
    dimension: "[I]"
    is_vector: false
    components: null
    category: parameter
    physical_role: parameter
    used_in:
      - teoria.md
      - interpretacion.yaml
    common_mistake: "Tratar la corriente de seguridad como un umbral fijo e independiente del tiempo; la norma IEC 60479 establece que el peligro depende del producto I×t (amperios por segundos de exposición)."
    typical_range: "< 0.5 mA (imperceptible), 0.5-10 mA (percepción sin peligro), 10-30 mA (zona de peligro con protección RCD), > 30 mA (peligroso sin desconexión rápida)."
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positiva; es un umbral fisiológico, no una magnitud con sentido de circulación.
        en: Always positive; it is a physiological threshold, not a directional quantity.
    zero_behavior:
      allowed: true
      meaning:
        es: Corriente cero es completamente segura; representa ausencia de contacto eléctrico.
        en: Zero current is completely safe; it represents absence of electrical contact.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: "[0, 0.03] A para uso doméstico seguro"
    interpretation_role:
      primary_for: clasificación del nivel de peligro en contactos eléctricos
      secondary_for: verificación del cumplimiento de la protección diferencial
    graph_binding:
      channels: [label_annotation]
    pedagogical_notes:
      es: Los 30 mA como límite de los diferenciales domésticos corresponden al umbral superior de la zona de "peligro manejable" de IEC 60479. Por debajo de este valor y con desconexión en menos de 30 ms, el riesgo de fibrilación ventricular es estadísticamente bajo.
      en: The 30 mA limit of domestic differentials corresponds to the upper boundary of the "manageable danger" zone of IEC 60479. Below this value with disconnection in under 30 ms, the statistical risk of ventricular fibrillation is low.

  - id: margen
    symbol: margen
    nombre:
      es: Margen de protección diferencial
      en: Differential protection margin
    descripcion:
      es: Cociente adimensional entre la corriente de disparo del diferencial y la corriente corporal calculada. Valores mayores que 1 indican protección efectiva; menores que 1 indican que el diferencial no dispararía en ese escenario.
      en: Dimensionless ratio between the RCD trip current and the calculated body current. Values above 1 indicate effective protection; below 1 indicate the RCD would not trip in that scenario.
    unidad_si: "-"
    dimension: "[1]"
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - formulas.yaml (margen_proteccion)
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Calcular el cociente invertido (I_cuerpo / I_diferencial) e interpretar valores mayores que 1 como señal de peligro, cuando en realidad el margen correcto es I_diferencial / I_cuerpo y valores mayores que 1 son seguros."
    typical_range: "0.1 (protección muy insuficiente) a 10 (protección muy holgada). El valor mínimo recomendado en diseño normativo es ≥ 1."
    sign_behavior:
      has_sign: false
      meaning:
        es: El margen es siempre positivo; es un cociente de dos corrientes positivas. Un valor negativo indicaría error de cálculo.
        en: The margin is always positive; it is a ratio of two positive currents. A negative value would indicate a calculation error.
    zero_behavior:
      allowed: false
      meaning:
        es: Margen cero implicaría que el diferencial tiene umbral nulo, lo cual es físicamente imposible en dispositivos reales.
        en: Zero margin would imply the RCD has a zero threshold, which is physically impossible in real devices.
    value_nature:
      kind: state
      nonnegative_only: true
      expected_interval: "[0.1, 10] en escenarios domésticos reales"
    interpretation_role:
      primary_for: evaluación de la efectividad de la protección diferencial en el escenario analizado
      secondary_for: selección de umbral de diferencial adecuado para el escenario
    graph_binding:
      channels: [label_annotation]
    pedagogical_notes:
      es: Un margen de 3 significa que la corriente corporal del escenario tendría que triplicarse para que el diferencial dejase de proteger. En diseño de instalaciones se recomienda un margen mínimo de 1 con umbral estándar de 30 mA; en zonas húmedas se usa 10 mA para aumentar el margen frente a variaciones de resistencia corporal.
      en: A margin of 3 means the scenario body current would have to triple for the RCD to stop protecting. Installation design recommends a minimum margin of 1 with a standard 30 mA threshold; in wet areas 10 mA is used to increase the margin against body resistance variations.

  - id: ratio_seguridad
    symbol: S_r
    nombre:
      es: Cociente de seguridad fisiológica
      en: Physiological safety ratio
    descripcion:
      es: Cociente adimensional entre la corriente corporal calculada y la corriente de seguridad máxima permitida. Valores menores que 1 indican seguridad; mayores que 1 indican que se supera el límite seguro de exposición.
      en: Dimensionless ratio between the calculated body current and the maximum safe current allowed. Values below 1 indicate safety; values above 1 indicate that the safe exposure limit is exceeded.
    unidad_si: "-"
    dimension: "[1]"
    is_vector: false
    components: null
    category: derived
    physical_role: derived
    used_in:
      - formulas.yaml (ratio_seguridad)
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Creer que cualquier corriente que no cause fibrilación inmediata es segura, cuando en realidad corrientes por encima del umbral de tetanización ya son peligrosas debido a la imposibilidad de soltar el conductor."
    typical_range: "0.01 (completamente seguro) a 5 (extremadamente peligroso). El valor seguro de diseño es < 1."
    sign_behavior:
      has_sign: false
      meaning:
        es: Siempre positivo; cociente de dos magnitudes de corriente positivas.
        en: Always positive; ratio of two positive current magnitudes.
    zero_behavior:
      allowed: true
      meaning:
        es: Cero indica corriente corporal cero; escenario de seguridad absoluta.
        en: Zero indicates zero body current; scenario of absolute safety.
    value_nature:
      kind: state
      nonnegative_only: true
      expected_interval: "[0, 5] en contactos reales"
    interpretation_role:
      primary_for: evaluación del nivel de peligro fisiológico del contacto
      secondary_for: verificación del cumplimiento de la norma de seguridad
    graph_binding:
      channels: [label_annotation]
    pedagogical_notes:
      es: El ratio de seguridad evalúa el peligro fisiológico neto. Si es superior a 1, la corriente supera los límites normativos tolerables para el cuerpo y existe riesgo de lesiones o muerte si la exposición no es extremadamente breve.
      en: The safety ratio evaluates the net physiological danger. If above 1, the current exceeds tolerable normative limits for the body and there is risk of injury or death if exposure is not extremely brief.


`;export{e as default};
