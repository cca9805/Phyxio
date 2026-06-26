const e=`version: 5\r
id: interpretacion-rueda-y-eje\r
leaf_id: rueda-y-eje\r
nombre:\r
  es: "Interpretación experta de la física de la rueda y el eje"\r
  en: "Expert interpretation of wheel-and-axle physics"\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: aplicaciones\r
  parent_id: maquinas-simples\r
  ruta_relativa: fisica-clasica/mecanica/aplicaciones/maquinas-simples/rueda-y-eje\r
\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
\r
result_blocks:\r
  summary:\r
    title:\r
      es: "Resumen del equilibrio de torques"\r
      en: "Torque balance summary"\r
  physical_reading:\r
    title:\r
      es: "Análisis físico profundo"\r
      en: "Deep physical analysis"\r
  coherence:\r
    title:\r
      es: "Validación de coherencia"\r
      en: "Coherence validation"\r
  model_validity:\r
    title:\r
      es: "Límites del modelo y suposiciones"\r
      en: "Model limits and assumptions"\r
  graph_reading:\r
    title:\r
      es: "Lectura del diagrama rueda-eje"\r
      en: "Wheel-axle diagram reading"\r
  likely_errors:\r
    title:\r
      es: "Detección proactiva de errores"\r
      en: "Proactive error detection"\r
  next_step:\r
    title:\r
      es: "Ruta de aprendizaje sugerida"\r
      en: "Suggested learning path"\r
\r
ui:\r
  enabled: true\r
  display_modes:\r
  - calculator_inline\r
  - graph_inline\r
  - dedicated_tab\r
  - modal\r
  labels:\r
  - wheel_and_axle\r
  - mechanical_advantage\r
  - torque_balance\r
  priority_order:\r
  - summary_rules\r
  - physical_reading_rules\r
  - coherence_rules\r
  - model_validity_rules\r
  - graph_rules\r
  - likely_errors\r
  - next_step_rules\r
  inline_limits: 3\r
\r
dependencies:\r
  formulas:\r
  - ley_rueda_ideal\r
  - ventaja_mecanica_ideal\r
  - ley_rueda_real\r
  - ventaja_mecanica_real\r
  - relacion_desplazamientos\r
  - balance_energia_rueda\r
  - torque\r
  magnitudes:\r
  - FR\r
  - Fr\r
  - R\r
  - r\r
  - eta\r
  - VM\r
  - VM_real\r
  - sR\r
  - sr\r
  - tau\r
\r
global_context:\r
  physical_domain:\r
    es: "Estática y cinemática de la rueda y el eje; equilibrio de torques, ventaja mecánica y rendimiento."\r
    en: "Statics and kinematics of the wheel and axle; torque balance, mechanical advantage, and efficiency."\r
  axis_convention:\r
    es: "Fuerzas tangenciales positivas en la dirección del giro útil. Torques medidos respecto al eje de rotación común."\r
    en: "Tangential forces positive in the direction of useful rotation. Torques measured about the common axis of rotation."\r
  standard_assumptions:\r
  - Rueda y eje son rígidos y solidarios: comparten el mismo ángulo de giro.\r
  - Masa de la rueda y del eje despreciables frente a las fuerzas aplicadas.\r
  - Rozamiento modelado exclusivamente mediante el rendimiento eta.\r
  - El radio de la rueda es siempre mayor que el radio del eje (R > r).\r
  standard_warnings:\r
  - "Regla de Oro: lo que ganas en fuerza lo pagas en recorrido de arco en la rueda."\r
  - "El torque de entrada y el torque de salida se miden sobre el mismo eje; no son independientes."\r
  - "Un rendimiento bajo (eta < 0.7) puede hacer que la ventaja mecánica real sea menor que 1, convirtiendo la máquina en un multiplicador de recorrido en vez de fuerza."\r
\r
targets:\r
  FR:\r
    magnitude_type: fuerza\r
    semantic_role:\r
      es: "Esfuerzo aplicado en la rueda"\r
      en: "Effort applied at the wheel"\r
    summary_rules:\r
    - id: fr_sum_ideal_ok\r
      when: "result < Fr"\r
      status: ok\r
      text:\r
        es: "El esfuerzo [[FR]] es menor que la resistencia [[Fr]], lo que confirma ventaja mecánica positiva. La razón de radios R/r amplifica la fuerza en el eje."\r
        en: "Effort [[FR]] is less than resistance [[Fr]], confirming positive mechanical advantage. The radius ratio R/r amplifies force at the axle."\r
    - id: fr_sum_equal\r
      when: "result == Fr"\r
      status: info\r
      text:\r
        es: "El esfuerzo coincide con la resistencia: la razón de radios es 1 o el rendimiento compensa exactamente la ventaja geométrica. No hay beneficio mecánico neto."\r
        en: "Effort equals resistance: the radius ratio is 1 or efficiency exactly offsets the geometric advantage. No net mechanical benefit."\r
    - id: fr_sum_high\r
      when: "result > Fr"\r
      status: warning\r
      text:\r
        es: "El esfuerzo [[FR]] supera la resistencia [[Fr]]. Si R > r, esto apunta a un rendimiento muy bajo. Verifica el valor de [[eta]]."\r
        en: "Effort [[FR]] exceeds resistance [[Fr]]. If R > r, this points to very low efficiency. Check the value of [[eta]]."\r
    physical_reading_rules:\r
    - id: fr_read_torque\r
      when: "true"\r
      status: info\r
      text:\r
        es: "El esfuerzo [[FR]] genera un torque FR·R que debe igualar el torque de la resistencia Fr·r. A mayor radio de rueda, menor esfuerzo necesario para el mismo torque en el eje."\r
        en: "Effort [[FR]] generates a torque FR·R that must balance the resistance torque Fr·r. The larger the wheel radius, the less effort needed for the same axle torque."\r
    - id: fr_read_energy\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Por la regla de oro, [[FR]] se aplica en un radio grande y recorre un arco grande [[sR]]; el producto FR·sR es el trabajo de entrada que parcialmente se convierte en trabajo útil Fr·sr."\r
        en: "By the golden rule, [[FR]] is applied at a large radius and travels a large arc [[sR]]; the product FR·sR is the input work that is partially converted into useful work Fr·sr."\r
    coherence_rules:\r
    - id: fr_coh_neg\r
      when: "result <= 0"\r
      status: danger\r
      text:\r
        es: "Incoherencia: el esfuerzo debe ser estrictamente positivo."\r
        en: "Incoherent: effort must be strictly positive."\r
    - id: fr_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[FR]] positivo y coherente con la geometría del sistema."\r
        en: "[[FR]] positive and coherent with the system geometry."\r
    model_validity_rules:\r
    - id: fr_mod_real\r
      when: "true"\r
      status: info\r
      text:\r
        es: "En el modelo ideal (eta = 1), [[FR]] = Fr·r/R. En sistemas reales, [[FR]] aumenta porque parte del torque de entrada se disipa en rozamiento."\r
        en: "In the ideal model (eta = 1), [[FR]] = Fr·r/R. In real systems, [[FR]] increases because part of the input torque is dissipated by friction."\r
    graph_rules:\r
    - id: fr_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[FR]] se representa como una flecha tangencial sobre el borde exterior de la rueda grande, apuntando en el sentido del giro útil."\r
        en: "[[FR]] is shown as a tangential arrow on the outer edge of the large wheel, pointing in the direction of useful rotation."\r
    likely_errors:\r
    - id: fr_err_radii\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: confundir qué radio corresponde a la rueda y cuál al eje. [[FR]] siempre actúa sobre el radio mayor [[R]]."\r
        en: "Common error: confusing which radius belongs to the wheel and which to the axle. [[FR]] always acts on the larger radius [[R]]."\r
    next_step_rules:\r
    - id: fr_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Calcula el arco recorrido [[sR]] para verificar la regla de oro: FR·sR debe ser mayor o igual que Fr·sr."\r
        en: "Calculate the arc traveled [[sR]] to verify the golden rule: FR·sR must be greater than or equal to Fr·sr."\r
\r
  Fr:\r
    magnitude_type: fuerza\r
    semantic_role:\r
      es: "Resistencia o fuerza de salida en el eje"\r
      en: "Resistance or output force at the axle"\r
    summary_rules:\r
    - id: frr_sum_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "La resistencia [[Fr]] en el eje es la fuerza útil obtenida. Es [[VM]] veces el esfuerzo [[FR]] aplicado en la rueda, en el modelo ideal."\r
        en: "The resistance [[Fr]] at the axle is the useful output force. It equals [[VM]] times the effort [[FR]] applied at the wheel, in the ideal model."\r
    physical_reading_rules:\r
    - id: frr_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[Fr]] actúa sobre el eje de radio pequeño [[r]]. Su torque resistente Fr·r debe ser equilibrado por el torque motor FR·R. Cuanto mayor sea la razón R/r, mayor puede ser [[Fr]] para el mismo [[FR]]."\r
        en: "[[Fr]] acts on the small-radius axle [[r]]. Its resistive torque Fr·r must be balanced by the driving torque FR·R. The greater the ratio R/r, the larger [[Fr]] can be for the same [[FR]]."\r
    coherence_rules:\r
    - id: frr_coh_neg\r
      when: "result <= 0"\r
      status: danger\r
      text:\r
        es: "La resistencia debe ser positiva."\r
        en: "The resistance must be positive."\r
    - id: frr_coh_vm\r
      when: "result > FR * (R / r) * 1.05"\r
      status: warning\r
      text:\r
        es: "[[Fr]] supera en más de un 5% la predicción del modelo ideal. Revisa si los datos de radios son correctos."\r
        en: "[[Fr]] exceeds the ideal model prediction by more than 5%. Check whether the radius data are correct."\r
    - id: frr_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[Fr]] coherente con la razón de radios y el esfuerzo aplicado."\r
        en: "[[Fr]] coherent with the radius ratio and applied effort."\r
    model_validity_rules:\r
    - id: frr_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Válido mientras la masa del eje y sus cargas dinámicas sean despreciables. En aplicaciones de alta velocidad, los efectos inerciales modifican el balance."\r
        en: "Valid as long as axle mass and dynamic loads are negligible. In high-speed applications, inertial effects modify the balance."\r
    graph_rules:\r
    - id: frr_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[Fr]] se representa como una flecha tangencial sobre el eje pequeño, opuesta al sentido del giro, indicando su carácter resistente."\r
        en: "[[Fr]] is shown as a tangential arrow on the small axle, opposite to the rotation direction, indicating its resistive character."\r
    likely_errors:\r
    - id: frr_err_weight\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: en muchos problemas [[Fr]] representa el peso de una carga que cuelga del eje. Asegúrate de convertir la masa a Newtons antes de sustituir."\r
        en: "Common error: in many problems [[Fr]] represents the weight of a load hanging from the axle. Make sure to convert mass to Newtons before substituting."\r
    next_step_rules:\r
    - id: frr_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Calcula la ventaja mecánica real [[VM_real]] para saber cuánto afecta el rozamiento al rendimiento del sistema."\r
        en: "Calculate the real mechanical advantage [[VM_real]] to see how much friction affects system efficiency."\r
\r
  VM:\r
    magnitude_type: adimensional\r
    semantic_role:\r
      es: "Ventaja mecánica ideal"\r
      en: "Ideal mechanical advantage"\r
    summary_rules:\r
    - id: vm_sum_high\r
      when: "result >= 5"\r
      status: ok\r
      text:\r
        es: "Ventaja mecánica [[VM]] elevada: la rueda multiplica la fuerza por un factor de [[VM]]. Recuerda que el arco de entrada es [[VM]] veces el arco de salida."\r
        en: "High mechanical advantage [[VM]]: the wheel multiplies force by a factor of [[VM]]. Remember the input arc is [[VM]] times the output arc."\r
    - id: vm_sum_low\r
      when: "result < 2"\r
      status: warning\r
      text:\r
        es: "Ventaja mecánica [[VM]] menor que 2: la rueda apenas amplifica la fuerza. Considera aumentar la relación R/r si el objetivo es reducir el esfuerzo."\r
        en: "Mechanical advantage [[VM]] less than 2: the wheel barely amplifies force. Consider increasing the R/r ratio if the goal is to reduce effort."\r
    - id: vm_sum_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "La ventaja mecánica ideal [[VM]] es igual a la razón de radios R/r. Cuanto mayor sea esta razón, menor esfuerzo requiere el operador."\r
        en: "The ideal mechanical advantage [[VM]] equals the radius ratio R/r. The greater this ratio, the less effort the operator needs."\r
    physical_reading_rules:\r
    - id: vm_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[VM]] no depende de las fuerzas ni de la velocidad, solo de la geometría del sistema. Es una propiedad intrínseca del diseño. En el modelo real, la VM efectiva es [[VM]] multiplicada por [[eta]]."\r
        en: "[[VM]] depends only on the geometry of the system, not on forces or speed. It is an intrinsic design property. In the real model, the effective MA is [[VM]] multiplied by [[eta]]."\r
    coherence_rules:\r
    - id: vm_coh_lt1\r
      when: "result < 1"\r
      status: danger\r
      text:\r
        es: "VM menor que 1: la rueda pierde fuerza en vez de ganarla. Verifica que R > r; si es intencional, el sistema es un multiplicador de velocidad."\r
        en: "MA less than 1: the wheel loses force instead of gaining it. Check that R > r; if intentional, the system is a speed multiplier."\r
    - id: vm_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[VM]] mayor o igual que 1, coherente con R ≥ r."\r
        en: "[[VM]] greater than or equal to 1, coherent with R ≥ r."\r
    model_validity_rules:\r
    - id: vm_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Esta es la VM ideal. Para obtener la VM real, multiplica por [[eta]]: VM_real = eta · R/r."\r
        en: "This is the ideal MA. To obtain the real MA, multiply by [[eta]]: VM_real = eta · R/r."\r
    graph_rules:\r
    - id: vm_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "En el diagrama, [[VM]] se lee como la razón visual entre las longitudes de los dos radios representados."\r
        en: "In the diagram, [[VM]] is read as the visual ratio between the lengths of the two represented radii."\r
    likely_errors:\r
    - id: vm_err_eta\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar [[VM]] ideal en problemas reales sin aplicar [[eta]]. La VM real es siempre menor que la ideal."\r
        en: "Common error: using ideal [[VM]] in real problems without applying [[eta]]. Real MA is always less than ideal MA."\r
    next_step_rules:\r
    - id: vm_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Calcula ahora [[VM_real]] multiplicando [[VM]] por [[eta]] para conocer la ventaja efectiva en el sistema real."\r
        en: "Now calculate [[VM_real]] by multiplying [[VM]] by [[eta]] to find the effective advantage in the real system."\r
\r
  VM_real:\r
    magnitude_type: adimensional\r
    semantic_role:\r
      es: "Ventaja mecánica real"\r
      en: "Real mechanical advantage"\r
    summary_rules:\r
    - id: vmr_sum_gt1\r
      when: "result >= 1"\r
      status: ok\r
      text:\r
        es: "Ventaja mecánica real [[VM_real]] ≥ 1: a pesar de las pérdidas, el sistema sigue amplificando la fuerza. El rendimiento [[eta]] es suficientemente alto."\r
        en: "Real mechanical advantage [[VM_real]] ≥ 1: despite losses, the system still amplifies force. Efficiency [[eta]] is sufficiently high."\r
    - id: vmr_sum_lt1\r
      when: "result < 1"\r
      status: warning\r
      text:\r
        es: "Ventaja mecánica real [[VM_real]] menor que 1: las pérdidas superan la ganancia geométrica. El sistema no es eficaz para amplificar fuerza en estas condiciones."\r
        en: "Real mechanical advantage [[VM_real]] less than 1: losses exceed the geometric gain. The system is not effective for force amplification under these conditions."\r
    physical_reading_rules:\r
    - id: vmr_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[VM_real]] integra la geometría ([[R]]/[[r]]) y el rendimiento ([[eta]]). La diferencia VM - VM_real cuantifica la penalización por rozamiento: es la fracción de ventaja mecánica 'consumida' por la fricción."\r
        en: "[[VM_real]] integrates geometry ([[R]]/[[r]]) and efficiency ([[eta]]). The difference VM - VM_real quantifies the friction penalty: the fraction of mechanical advantage 'consumed' by friction."\r
    coherence_rules:\r
    - id: vmr_coh_gt_vm\r
      when: "result > VM * 1.01"\r
      status: danger\r
      text:\r
        es: "La VM real no puede superar la VM ideal. Revisa el valor de [[eta]]: debe estar entre 0 y 1."\r
        en: "Real MA cannot exceed ideal MA. Check the value of [[eta]]: it must be between 0 and 1."\r
    - id: vmr_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[VM_real]] coherente: está entre 0 y [[VM]], conforme a eta ∈ (0, 1]."\r
        en: "[[VM_real]] coherent: it is between 0 and [[VM]], consistent with eta ∈ (0, 1]."\r
    model_validity_rules:\r
    - id: vmr_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Válido cuando el rozamiento es estacionario y uniforme, modelable con un único [[eta]]. En mecanismos con múltiples contactos, cada par tiene su propio rendimiento parcial."\r
        en: "Valid when friction is steady and uniform, modelable with a single [[eta]]. In mechanisms with multiple contacts, each pair has its own partial efficiency."\r
    graph_rules:\r
    - id: vmr_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "En el gráfico de ventaja frente a radios, [[VM_real]] aparece como una recta de pendiente [[eta]]·(1/r) en función de [[R]]."\r
        en: "In the advantage-vs-radius plot, [[VM_real]] appears as a line with slope [[eta]]·(1/r) as a function of [[R]]."\r
    likely_errors:\r
    - id: vmr_err_swap\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: calcular VM_real como R/(eta·r) en vez de eta·R/r. La fórmula correcta es VM_real = eta·R/r."\r
        en: "Common error: computing VM_real as R/(eta·r) instead of eta·R/r. The correct formula is VM_real = eta·R/r."\r
    next_step_rules:\r
    - id: vmr_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Verifica el balance energético: compara FR·sR con Fr·sr y comprueba que la diferencia equivale a (1-eta)·Fr·sr."\r
        en: "Verify the energy balance: compare FR·sR with Fr·sr and check that the difference equals (1-eta)·Fr·sr."\r
\r
  eta:\r
    magnitude_type: adimensional\r
    semantic_role:\r
      es: "Rendimiento mecánico del sistema"\r
      en: "Mechanical efficiency of the system"\r
    summary_rules:\r
    - id: eta_sum_high\r
      when: "result >= 0.9"\r
      status: ok\r
      text:\r
        es: "Rendimiento [[eta]] ≥ 90%: sistema bien lubricado y con tolerancias ajustadas. Las pérdidas son menores del 10%."\r
        en: "Efficiency [[eta]] ≥ 90%: well-lubricated system with tight tolerances. Losses are less than 10%."\r
    - id: eta_sum_mid\r
      when: "result >= 0.7 and result < 0.9"\r
      status: info\r
      text:\r
        es: "Rendimiento [[eta]] entre 70% y 90%: valor típico de mecanismos industriales con rozamiento moderado."\r
        en: "Efficiency [[eta]] between 70% and 90%: typical value for industrial mechanisms with moderate friction."\r
    - id: eta_sum_low\r
      when: "result < 0.7"\r
      status: warning\r
      text:\r
        es: "Rendimiento [[eta]] por debajo del 70%: sistema con rozamiento elevado. Más de 30% de la energía de entrada se disipa como calor. Considerar relubricación o rediseño."\r
        en: "Efficiency [[eta]] below 70%: system with high friction. More than 30% of input energy is dissipated as heat. Consider re-lubrication or redesign."\r
    physical_reading_rules:\r
    - id: eta_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[eta]] resume todas las pérdidas internas: rozamiento en los cojinetes del eje, rigidez de transmisiones y deformaciones elásticas. No es una propiedad geométrica sino una característica del material y el mantenimiento."\r
        en: "[[eta]] summarizes all internal losses: bearing friction, transmission stiffness, and elastic deformations. It is not a geometric property but a characteristic of the material and maintenance."\r
    coherence_rules:\r
    - id: eta_coh_range\r
      when: "result <= 0 or result > 1"\r
      status: danger\r
      text:\r
        es: "El rendimiento debe estar en (0, 1]. Un valor fuera de este rango indica error de datos o de fórmula."\r
        en: "Efficiency must be in (0, 1]. A value outside this range indicates a data or formula error."\r
    - id: eta_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[eta]] dentro del rango físicamente admisible (0, 1]."\r
        en: "[[eta]] within the physically admissible range (0, 1]."\r
    model_validity_rules:\r
    - id: eta_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Este modelo asume [[eta]] constante e independiente de la velocidad y la carga. En sistemas reales, [[eta]] disminuye a velocidades muy bajas (rozamiento estático) y a cargas muy altas (deformación)."\r
        en: "This model assumes constant [[eta]] independent of speed and load. In real systems, [[eta]] decreases at very low speeds (static friction) and at very high loads (deformation)."\r
    graph_rules:\r
    - id: eta_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "En el gráfico de [[VM_real]] frente a R/r, [[eta]] es la pendiente de la recta; un [[eta]] menor rota la recta hacia el eje horizontal."\r
        en: "In the [[VM_real]] vs R/r plot, [[eta]] is the slope of the line; a lower [[eta]] rotates the line toward the horizontal axis."\r
    likely_errors:\r
    - id: eta_err_ideal\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: asumir [[eta]] = 1 en todos los problemas. Salvo que el enunciado indique explícitamente 'sistema ideal', siempre hay pérdidas."\r
        en: "Common error: assuming [[eta]] = 1 in all problems. Unless the problem explicitly states 'ideal system', there are always losses."\r
    next_step_rules:\r
    - id: eta_next\r
      when: "result < 0.85"\r
      status: info\r
      text:\r
        es: "Con [[eta]] < 0.85 el efecto sobre la VM real es significativo. Evalúa si aumentar R para compensar las pérdidas es factible en el diseño."\r
        en: "With [[eta]] < 0.85 the effect on real MA is significant. Evaluate whether increasing R to compensate for losses is feasible in the design."\r
    - id: eta_next_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Usa [[eta]] para calcular [[VM_real]] y el esfuerzo [[FR]] real que debe aplicar el operador."\r
        en: "Use [[eta]] to calculate [[VM_real]] and the real effort [[FR]] the operator must apply."\r
\r
  R:\r
    magnitude_type: longitud\r
    semantic_role:\r
      es: "Radio de la rueda (brazo de entrada)"\r
      en: "Wheel radius (input arm)"\r
    summary_rules:\r
    - id: R_sum_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El radio de la rueda [[R]] define el brazo de entrada. Aumentarlo es la palanca de diseño más directa para incrementar la ventaja mecánica sin cambiar el eje."\r
        en: "The wheel radius [[R]] defines the input arm. Increasing it is the most direct design lever for raising mechanical advantage without changing the axle."\r
    physical_reading_rules:\r
    - id: R_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[R]] determina cuánto arco recorre la mano del operador por cada vuelta completa (2π·R). A mayor [[R]], mayor recorrido pero menor fuerza requerida."\r
        en: "[[R]] determines how much arc the operator's hand travels per full turn (2π·R). Greater [[R]] means greater travel but less required force."\r
    coherence_rules:\r
    - id: R_coh_lt_r\r
      when: "result <= r"\r
      status: danger\r
      text:\r
        es: "[[R]] debe ser mayor que [[r]] para que haya ventaja mecánica. Si R ≤ r el sistema pierde fuerza."\r
        en: "[[R]] must be greater than [[r]] for mechanical advantage to exist. If R ≤ r the system loses force."\r
    - id: R_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[R]] mayor que [[r]], condición necesaria para ventaja mecánica positiva."\r
        en: "[[R]] greater than [[r]], necessary condition for positive mechanical advantage."\r
    model_validity_rules:\r
    - id: R_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "El modelo trata [[R]] como constante. En sistemas con cuerda enrollada, el radio efectivo varía con el número de capas; en ese caso usar el radio promedio."\r
        en: "The model treats [[R]] as constant. In rope-winding systems, the effective radius varies with the number of layers; in that case use the average radius."\r
    graph_rules:\r
    - id: R_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[R]] se visualiza en el diagrama como la distancia desde el centro de rotación hasta el punto de aplicación de [[FR]] en la rueda exterior."\r
        en: "[[R]] is visualized in the diagram as the distance from the rotation center to the point of application of [[FR]] on the outer wheel."\r
    likely_errors:\r
    - id: R_err_diameter\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: confundir radio con diámetro. Si el enunciado da el diámetro de la rueda, divide entre 2 antes de usarlo en la fórmula."\r
        en: "Common error: confusing radius with diameter. If the problem gives the wheel diameter, divide by 2 before using it in the formula."\r
    next_step_rules:\r
    - id: R_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Con [[R]] y [[r]] conocidos, calcula [[VM]] = R/r y compara con el valor requerido por el diseño."\r
        en: "With [[R]] and [[r]] known, calculate [[VM]] = R/r and compare with the value required by the design."\r
\r
  r:\r
    magnitude_type: longitud\r
    semantic_role:\r
      es: "Radio del eje (brazo de salida)"\r
      en: "Axle radius (output arm)"\r
    summary_rules:\r
    - id: r_sum_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El radio del eje [[r]] define el brazo de salida. Reducirlo aumenta la ventaja mecánica pero disminuye la resistencia mecánica del eje y el arco de salida por vuelta."\r
        en: "The axle radius [[r]] defines the output arm. Reducing it increases mechanical advantage but decreases the axle's mechanical strength and output arc per turn."\r
    physical_reading_rules:\r
    - id: r_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[r]] determina el arco que recorre el punto de aplicación de [[Fr]] por vuelta completa (2π·r). A menor [[r]], mayor fuerza disponible pero menor recorrido por vuelta."\r
        en: "[[r]] determines the arc traveled by the application point of [[Fr]] per full turn (2π·r). Smaller [[r]] means greater available force but less travel per turn."\r
    coherence_rules:\r
    - id: r_coh_gt_R\r
      when: "result >= R"\r
      status: danger\r
      text:\r
        es: "[[r]] debe ser menor que [[R]]. Si r ≥ R la máquina no amplifica la fuerza."\r
        en: "[[r]] must be less than [[R]]. If r ≥ R the machine does not amplify force."\r
    - id: r_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[r]] menor que [[R]], condición correcta para ventaja mecánica positiva."\r
        en: "[[r]] less than [[R]], correct condition for positive mechanical advantage."\r
    model_validity_rules:\r
    - id: r_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[r]] debe ser suficientemente grande para soportar el torque Fr·r sin deformarse. La resistencia estructural del eje impone un mínimo práctico para [[r]]."\r
        en: "[[r]] must be large enough to withstand the torque Fr·r without deforming. The structural strength of the axle imposes a practical minimum for [[r]]."\r
    graph_rules:\r
    - id: r_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[r]] se visualiza en el diagrama como la distancia desde el centro de rotación hasta el punto de aplicación de [[Fr]] en el eje interior."\r
        en: "[[r]] is visualized as the distance from the rotation center to the point of application of [[Fr]] on the inner axle."\r
    likely_errors:\r
    - id: r_err_swap\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: intercambiar [[R]] y [[r]] en la fórmula. Recuerda: el esfuerzo actúa en el radio grande [[R]] y la resistencia en el radio pequeño [[r]]."\r
        en: "Common error: swapping [[R]] and [[r]] in the formula. Remember: effort acts on the large radius [[R]] and resistance on the small radius [[r]]."\r
    next_step_rules:\r
    - id: r_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Con [[R]] y [[r]] definidos, computa la VM ideal y evalúa si el diseño cumple el requerimiento de reducción de esfuerzo."\r
        en: "With [[R]] and [[r]] defined, compute the ideal MA and evaluate whether the design meets the effort-reduction requirement."\r
\r
  sR:\r
    magnitude_type: longitud\r
    semantic_role:\r
      es: "Arco recorrido en la rueda (entrada)"\r
      en: "Arc traveled at the wheel (input)"\r
    summary_rules:\r
    - id: sR_sum_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El arco de entrada [[sR]] es el recorrido que realiza la mano del operador. Es [[VM]] veces mayor que el arco de salida [[sr]]: esa es la contrapartida cinemática de la ventaja mecánica."\r
        en: "The input arc [[sR]] is the travel of the operator's hand. It is [[VM]] times greater than the output arc [[sr]]: that is the kinematic trade-off of mechanical advantage."\r
    physical_reading_rules:\r
    - id: sR_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[sR]] y [[sr]] se relacionan por la restricción cinemática sR = (R/r)·sr. Esta ecuación expresa la regla de oro: trabajo de entrada ≈ trabajo de salida (en el modelo ideal)."\r
        en: "[[sR]] and [[sr]] are related by the kinematic constraint sR = (R/r)·sr. This equation expresses the golden rule: input work ≈ output work (in the ideal model)."\r
    coherence_rules:\r
    - id: sR_coh_lt_sr\r
      when: "result < sr"\r
      status: warning\r
      text:\r
        es: "[[sR]] menor que [[sr]] implica VM < 1: la rueda está perdiendo fuerza. Verifica que R > r."\r
        en: "[[sR]] less than [[sr]] implies VM < 1: the wheel is losing force. Check that R > r."\r
    - id: sR_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[sR]] mayor que [[sr]], coherente con [[R]] > [[r]] y ventaja mecánica positiva."\r
        en: "[[sR]] greater than [[sr]], coherent with [[R]] > [[r]] and positive mechanical advantage."\r
    model_validity_rules:\r
    - id: sR_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Válido para giro rígido. Si hay deslizamiento entre la cuerda y la rueda, el arco real puede ser menor que el calculado."\r
        en: "Valid for rigid rotation. If there is slip between the rope and the wheel, the actual arc may be less than calculated."\r
    graph_rules:\r
    - id: sR_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[sR]] se visualiza como la longitud del arco trazado sobre el borde de la rueda grande para el ángulo de giro considerado."\r
        en: "[[sR]] is visualized as the length of the arc traced on the outer wheel edge for the considered rotation angle."\r
    likely_errors:\r
    - id: sR_err_angle\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: usar el ángulo en grados en vez de radianes. La fórmula sR = R·θ requiere θ en radianes."\r
        en: "Common error: using angle in degrees instead of radians. The formula sR = R·θ requires θ in radians."\r
    next_step_rules:\r
    - id: sR_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Comprueba el balance energético: FR·[[sR]] debe ser mayor o igual que Fr·[[sr]], siendo la diferencia la energía disipada (1-eta)·Fr·sr."\r
        en: "Check the energy balance: FR·[[sR]] must be greater than or equal to Fr·[[sr]], the difference being the dissipated energy (1-eta)·Fr·sr."\r
\r
  sr:\r
    magnitude_type: longitud\r
    semantic_role:\r
      es: "Arco recorrido en el eje (salida)"\r
      en: "Arc traveled at the axle (output)"\r
    summary_rules:\r
    - id: sr_sum_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El arco de salida [[sr]] es el desplazamiento útil obtenido en el eje. Es el recorrido de la carga, el tornillo o el cable que el sistema mueve."\r
        en: "The output arc [[sr]] is the useful displacement obtained at the axle. It is the travel of the load, screw, or cable the system moves."\r
    physical_reading_rules:\r
    - id: sr_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[sr]] = sR·(r/R). Para obtener más recorrido en el eje por vuelta hay que aumentar [[r]] o reducir [[R]], lo que reduce la ventaja mecánica. Este es el compromiso diseño-fuerza-recorrido."\r
        en: "[[sr]] = sR·(r/R). To get more axle travel per turn, [[r]] must increase or [[R]] decrease, which reduces mechanical advantage. This is the design force-travel trade-off."\r
    coherence_rules:\r
    - id: sr_coh_neg\r
      when: "result <= 0"\r
      status: danger\r
      text:\r
        es: "El arco de salida debe ser positivo."\r
        en: "The output arc must be positive."\r
    - id: sr_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[sr]] positivo y menor que [[sR]], coherente con la restricción cinemática."\r
        en: "[[sr]] positive and less than [[sR]], coherent with the kinematic constraint."\r
    model_validity_rules:\r
    - id: sr_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[sr]] es lineal en el ángulo de giro. Para movimientos angulares grandes conviene verificar que el sistema no llega a sus topes mecánicos."\r
        en: "[[sr]] is linear in the rotation angle. For large angular movements, verify that the system does not reach its mechanical stops."\r
    graph_rules:\r
    - id: sr_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[sr]] se visualiza como el arco trazado en el eje pequeño; es proporcional a [[sR]] con factor r/R."\r
        en: "[[sr]] is visualized as the arc traced on the small axle; it is proportional to [[sR]] with factor r/R."\r
    likely_errors:\r
    - id: sr_err_full_turn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: calcular [[sr]] para media vuelta usando el arco de vuelta completa. Verifica que el ángulo usado corresponde al movimiento real del sistema."\r
        en: "Common error: computing [[sr]] for half a turn using the full-turn arc. Verify that the angle used corresponds to the system's actual movement."\r
    next_step_rules:\r
    - id: sr_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Verifica que [[sr]] sea consistente con [[sR]]: el cociente [[sR]]/[[sr]] debe ser igual a R/r. Si el enunciado da [θ], convierte primero a arco con sr = [[r]]·θ."\r
        en: "Verify that [[sr]] is consistent with [[sR]]: the ratio [[sR]]/[[sr]] must equal R/r. If the problem gives [θ], convert to arc first with sr = [[r]]·θ."\r
\r
  tau:\r
    magnitude_type: momento\r
    semantic_role:\r
      es: "Torque o momento de fuerza generado en la rueda o el eje"\r
      en: "Torque or moment of force generated at the wheel or axle"\r
    summary_rules:\r
    - id: tau_sum_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El torque [[tau]] representa la capacidad de giro. En equilibrio, el torque en la rueda y en el eje son iguales."\r
        en: "Torque [[tau]] represents the rotational capacity. At equilibrium, the torques at the wheel and axle are equal."\r
    physical_reading_rules:\r
    - id: tau_read_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[tau]] igual a FR multiplicado por R. Aumentar [[R]] aumenta el torque disponible sin incrementar [[FR]]."\r
        en: "[[tau]] equals FR multiplied by R. Increasing [[R]] increases available torque without raising [[FR]]."\r
    coherence_rules:\r
    - id: tau_coh_pos\r
      when: "result <= 0"\r
      status: danger\r
      text:\r
        es: "El torque debe ser positivo para que exista efecto de giro útil."\r
        en: "Torque must be positive for useful rotation to exist."\r
    - id: tau_coh_ok\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[tau]] positivo y coherente con la geometría del sistema."\r
        en: "[[tau]] positive and coherent with the system geometry."\r
    model_validity_rules:\r
    - id: tau_mod_ok\r
      when: "true"\r
      status: info\r
      text:\r
        es: "La fórmula de torque asume fuerza tangencial pura. Si la fuerza tiene componente radial, el torque efectivo es menor."\r
        en: "The torque formula assumes pure tangential force. If the force has a radial component, the effective torque is smaller."\r
    graph_rules:\r
    - id: tau_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: "[[tau]] no se visualiza directamente; se infiere del equilibrio entre los vectores de fuerza y los radios en el diagrama."\r
        en: "[[tau]] is not directly visualized; it is inferred from the force-vector and radius equilibrium in the diagram."\r
    likely_errors:\r
    - id: tau_err_sum\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: sumar torques en lugar de igualarlos. En equilibrio, torque de rueda igual a torque de eje."\r
        en: "Common error: adding torques instead of equating them. At equilibrium, wheel torque equals axle torque."\r
    next_step_rules:\r
    - id: tau_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Usa el equilibrio de torques para deducir [[FR]] si conoces [[Fr]], [[R]] y [[r]]."\r
        en: "Use torque equilibrium to derive [[FR]] if you know [[Fr]], [[R]], and [[r]]."\r
    next_step_rules:\r
    - id: sr_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Con [[sr]] calculado, evalúa si el recorrido útil es suficiente para la aplicación. Si no lo es, considera aumentar [[r]] o usar un tren de engranajes en cascada."\r
        en: "With [[sr]] calculated, assess whether the useful travel is sufficient for the application. If not, consider increasing [[r]] or using a cascaded gear train."\r
\r
mini_graph:\r
  enabled: true\r
  preferred_type: Coord\r
  fallback_type: Svg\r
  caption:\r
    es: "Ventaja mecánica real frente a razón de radios R/r"\r
    en: "Real mechanical advantage vs radius ratio R/r"\r
`;export{e as default};
