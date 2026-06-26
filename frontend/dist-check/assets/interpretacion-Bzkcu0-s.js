const e=`version: "1.0"
id: reflexion-y-transmision-en-solidos-interp
leaf_id: reflexion-y-transmision-en-solidos

nombre:
  es: Interpretacion de reflexion y transmision en solidos
  en: Interpretation of reflection and transmission in solids

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/reflexion-y-transmision-en-solidos

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
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
    - coeficiente_reflexion_amplitud
    - coeficiente_transmision_amplitud
    - coeficiente_reflexion_energia
    - coeficiente_transmision_energia
    - impedancia_acustica
  magnitudes:
    - R_amp
    - T_amp
    - R_E
    - T_E
    - Z_1
    - Z_2
    - Z_medio
    - rho_medio
    - v_onda

global_context:
  physical_domain:
    es: "Reflexion y transmision de ondas elasticas en interfaces entre solidos"
    en: "Reflection and transmission of elastic waves at interfaces between solids"
  axis_convention:
    es: "Eje x: cociente de impedancias Z_2/Z_1. Eje y: coeficientes de reflexion o transmision."
    en: "X axis: impedance ratio Z_2/Z_1. Y axis: reflection or transmission coefficients."
  standard_assumptions:
    - id: incidencia_normal
      text:
        es: "Incidencia normal a la interfaz."
        en: "Normal incidence at the interface."
    - id: interfaz_plana
      text:
        es: "Interfaz plana, infinita y perfectamente unida."
        en: "Flat, infinite and perfectly bonded interface."
    - id: medios_isotropos
      text:
        es: "Medios homogeneos, isotropos, elasticos lineales."
        en: "Homogeneous, isotropic, linearly elastic media."
  standard_warnings:
    - id: incidencia_oblicua
      text:
        es: "Si la incidencia no es normal, aparece conversion de modo y se necesitan ecuaciones de Zoeppritz."
        en: "If incidence is not normal, mode conversion appears and Zoeppritz equations are needed."

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
      es: Lectura fisica
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
      es: Lectura del grafico
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
  R_amp:
    magnitude_type: coefficient
    semantic_role:
      es: "Fraccion de amplitud reflejada y fase de la onda reflejada."
      en: "Fraction of reflected amplitude and phase of reflected wave."
    summary_rules:
      - id: ramp_summary_zero
        when: "abs(R_amp) < 0.01"
        status: ok
        text:
          es: "[[R_amp]] cercano a cero indica acoplamiento casi perfecto. Practicamente no hay reflexion."
          en: "[[R_amp]] near zero indicates nearly perfect matching. Practically no reflection."
      - id: ramp_summary_high
        when: "abs(R_amp) > 0.8"
        status: ok
        text:
          es: "[[R_amp]] cercano a la unidad indica contraste de impedancias extremo. La mayor parte de la onda se refleja."
          en: "[[R_amp]] near unity indicates extreme impedance contrast. Most of the wave is reflected."
      - id: ramp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[R_amp]] indica la fraccion de amplitud reflejada. Su signo revela si hay inversion de fase."
          en: "[[R_amp]] indicates the fraction of reflected amplitude. Its sign reveals whether there is phase inversion."
    physical_reading_rules:
      - id: ramp_reading_positive
        when: "R_amp > 0"
        status: ok
        text:
          es: "R positivo: el segundo medio tiene mayor impedancia. La onda reflejada mantiene la fase de la incidente."
          en: "Positive R: the second medium has higher impedance. The reflected wave maintains the incident phase."
      - id: ramp_reading_negative
        when: "R_amp < 0"
        status: ok
        text:
          es: "R negativo: el segundo medio tiene menor impedancia. La onda reflejada invierte la fase."
          en: "Negative R: the second medium has lower impedance. The reflected wave inverts its phase."
      - id: ramp_reading_default
        when: "true"
        status: ok
        text:
          es: "[[R_amp]] depende del cociente de impedancias. Un valor nulo indica impedancias identicas."
          en: "[[R_amp]] depends on the impedance ratio. A zero value indicates identical impedances."
    coherence_rules:
      - id: ramp_coherence_range
        when: "abs(R_amp) > 1"
        status: error
        text:
          es: "[[R_amp]] fuera del rango [-1, 1]. Revisar el calculo de impedancias."
          en: "[[R_amp]] outside range [-1, 1]. Review impedance calculation."
      - id: ramp_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[R_amp]] esta entre -1 y 1 y que su signo es coherente con la relacion Z_2/Z_1."
          en: "Verify that [[R_amp]] is between -1 and 1 and its sign is consistent with the Z_2/Z_1 ratio."
    model_validity_rules:
      - id: ramp_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es valido para incidencia normal en interfaz plana perfectamente unida."
          en: "The model is valid for normal incidence at a flat perfectly bonded interface."
    graph_rules:
      - id: ramp_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica R vs Z_2/Z_1, R cruza por cero cuando Z_2 es igual a Z_1 y se satura en los extremos."
          en: "In the R vs Z_2/Z_1 graph, R crosses zero when Z_2 equals Z_1 and saturates at the extremes."
    likely_errors:
      - id: ramp_error_sign
        when: "true"
        status: warning
        text:
          es: "Verificar el orden de las impedancias en la formula: Z_2 menos Z_1 en el numerador (medio 1 es el de incidencia)."
          en: "Check the impedance order in the formula: Z_2 minus Z_1 in the numerator (medium 1 is the incidence medium)."
    next_step_rules:
      - id: ramp_next_default
        when: "true"
        status: ok
        text:
          es: "Elevar al cuadrado para obtener [[R_E]] y verificar la conservacion de energia con [[T_E]]."
          en: "Square to obtain [[R_E]] and verify energy conservation with [[T_E]]."

  T_amp:
    magnitude_type: coefficient
    semantic_role:
      es: "Fraccion de amplitud que penetra en el segundo medio."
      en: "Fraction of amplitude penetrating the second medium."
    summary_rules:
      - id: tamp_summary_high
        when: "T_amp > 1.5"
        status: ok
        text:
          es: "[[T_amp]] mayor que 1: la amplitud crece en el segundo medio (impedancia menor). No viola la conservacion de energia."
          en: "[[T_amp]] greater than 1: amplitude grows in the second medium (lower impedance). Does not violate energy conservation."
      - id: tamp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T_amp]] indica la fraccion de amplitud transmitida. Combinado con [[R_amp]], satisface la continuidad de desplazamiento."
          en: "[[T_amp]] indicates the transmitted amplitude fraction. Combined with [[R_amp]], it satisfies displacement continuity."
    physical_reading_rules:
      - id: tamp_reading_default
        when: "true"
        status: ok
        text:
          es: "La amplitud transmitida depende del cociente 2*Z_1 / (Z_1 + Z_2). Crece cuando Z_2 disminuye."
          en: "Transmitted amplitude depends on the ratio 2*Z_1 / (Z_1 + Z_2). Grows when Z_2 decreases."
    coherence_rules:
      - id: tamp_coherence_range
        when: "T_amp < 0 || T_amp > 2"
        status: error
        text:
          es: "[[T_amp]] fuera del rango [0, 2]. Revisar los valores de impedancia."
          en: "[[T_amp]] outside range [0, 2]. Review impedance values."
      - id: tamp_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[T_amp]] esta entre 0 y 2 y que 1 + R es igual a T (continuidad)."
          en: "Verify that [[T_amp]] is between 0 and 2 and that 1 + R equals T (continuity)."
    model_validity_rules:
      - id: tamp_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido en incidencia normal. En incidencia oblicua, T depende tambien del angulo."
          en: "Valid at normal incidence. At oblique incidence, T also depends on the angle."
    graph_rules:
      - id: tamp_graph_default
        when: "true"
        status: ok
        text:
          es: "[[T_amp]] vale 1 cuando las impedancias coinciden y decrece/crece simetricamente con el contraste."
          en: "[[T_amp]] equals 1 when impedances match and decreases/increases symmetrically with contrast."
    likely_errors:
      - id: tamp_error_energy
        when: "true"
        status: warning
        text:
          es: "No confundir T > 1 con violacion de conservacion. La energia se verifica con [[T_E]], no con [[T_amp]]."
          en: "Do not confuse T > 1 with conservation violation. Energy is verified with [[T_E]], not [[T_amp]]."
    next_step_rules:
      - id: tamp_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[T_E]] para verificar la fraccion de energia efectivamente transmitida."
          en: "Calculate [[T_E]] to verify the fraction of energy actually transmitted."

  R_E:
    magnitude_type: coefficient
    semantic_role:
      es: "Fraccion de energia incidente reflejada."
      en: "Fraction of incident energy reflected."
    summary_rules:
      - id: re_summary_total
        when: "R_E > 0.95"
        status: ok
        text:
          es: "Reflexion casi total: mas del 95 % de la energia rebota. Contraste de impedancias extremo."
          en: "Nearly total reflection: more than 95% of energy bounces back. Extreme impedance contrast."
      - id: re_summary_default
        when: "true"
        status: ok
        text:
          es: "[[R_E]] indica la fraccion de potencia reflejada. Su complemento a 1 es la transmision energetica."
          en: "[[R_E]] indicates the fraction of reflected power. Its complement to 1 is the energy transmission."
    physical_reading_rules:
      - id: re_reading_default
        when: "true"
        status: ok
        text:
          es: "[[R_E]] es el cuadrado de [[R_amp]]. Siempre positivo. Determina cuanta señal de eco se recibe."
          en: "[[R_E]] is the square of [[R_amp]]. Always positive. Determines how much echo signal is received."
    coherence_rules:
      - id: re_coherence_conservation
        when: "abs(R_E + T_E - 1) > 0.01"
        status: error
        text:
          es: "La suma [[R_E]] + [[T_E]] no es 1. Se viola la conservacion de energia. Revisar el calculo."
          en: "The sum [[R_E]] + [[T_E]] is not 1. Energy conservation is violated. Review calculation."
      - id: re_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que 0 <= [[R_E]] <= 1 y que [[R_E]] + [[T_E]] sume exactamente 1."
          en: "Verify that 0 <= [[R_E]] <= 1 and that [[R_E]] + [[T_E]] sums to exactly 1."
    model_validity_rules:
      - id: re_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume interfaz ideal sin disipacion. En interfaces reales puede haber perdidas adicionales."
          en: "The model assumes an ideal interface without dissipation. Real interfaces may have additional losses."
    graph_rules:
      - id: re_graph_default
        when: "true"
        status: ok
        text:
          es: "[[R_E]] es una parabola que vale 0 cuando Z_2/Z_1 es 1 y se acerca a 1 en los extremos."
          en: "[[R_E]] is a parabola that equals 0 when Z_2/Z_1 is 1 and approaches 1 at the extremes."
    likely_errors:
      - id: re_error_default
        when: "true"
        status: warning
        text:
          es: "Recordar que [[R_E]] es el cuadrado de [[R_amp]], no su valor absoluto."
          en: "Remember that [[R_E]] is the square of [[R_amp]], not its absolute value."
    next_step_rules:
      - id: re_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[T_E]] como 1 - [[R_E]] y comparar con el resultado directo para verificar coherencia."
          en: "Calculate [[T_E]] as 1 - [[R_E]] and compare with the direct result to verify coherence."

  T_E:
    magnitude_type: coefficient
    semantic_role:
      es: "Fraccion de energia incidente transmitida al segundo medio."
      en: "Fraction of incident energy transmitted to the second medium."
    summary_rules:
      - id: te_summary_perfect
        when: "T_E > 0.99"
        status: ok
        text:
          es: "Transmision casi perfecta: las impedancias son practicamente iguales."
          en: "Nearly perfect transmission: impedances are practically equal."
      - id: te_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T_E]] indica la eficiencia de transmision energetica a traves de la interfaz."
          en: "[[T_E]] indicates the energy transmission efficiency through the interface."
    physical_reading_rules:
      - id: te_reading_default
        when: "true"
        status: ok
        text:
          es: "[[T_E]] depende del producto 4*Z_1*Z_2 dividido entre (Z_1+Z_2) al cuadrado. Es maximo cuando Z_1 es igual a Z_2."
          en: "[[T_E]] depends on the product 4*Z_1*Z_2 divided by (Z_1+Z_2) squared. Maximum when Z_1 equals Z_2."
    coherence_rules:
      - id: te_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que 0 <= [[T_E]] <= 1 y que coincide con 1 - [[R_E]]."
          en: "Verify that 0 <= [[T_E]] <= 1 and that it matches 1 - [[R_E]]."
    model_validity_rules:
      - id: te_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para interfaz ideal. En presencia de capas intermedias, el resultado puede diferir."
          en: "Valid for ideal interface. In the presence of intermediate layers, the result may differ."
    graph_rules:
      - id: te_graph_default
        when: "true"
        status: ok
        text:
          es: "[[T_E]] es complementario a [[R_E]]: alcanza su maximo (1) cuando el cociente de impedancias es 1."
          en: "[[T_E]] is complementary to [[R_E]]: reaches its maximum (1) when impedance ratio is 1."
    likely_errors:
      - id: te_error_default
        when: "true"
        status: warning
        text:
          es: "No confundir [[T_E]] con [[T_amp]]. La amplitud puede superar 1, pero la energia transmitida nunca excede la incidente."
          en: "Do not confuse [[T_E]] with [[T_amp]]. Amplitude can exceed 1, but transmitted energy never exceeds the incident."
    next_step_rules:
      - id: te_next_default
        when: "true"
        status: ok
        text:
          es: "Si se necesita maximizar [[T_E]], considerar el diseño de una capa de adaptacion de impedancia."
          en: "If maximising [[T_E]] is needed, consider designing an impedance-matching layer."

  Z_medio:
    magnitude_type: impedance
    semantic_role:
      es: "Resistencia del medio al paso de la onda."
      en: "Medium resistance to wave passage."
    summary_rules:
      - id: zm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Z_medio]] resume en un solo valor la capacidad del medio de oponerse al paso de la onda. Es el dato de entrada para calcular los coeficientes de reflexion."
          en: "[[Z_medio]] summarises in a single value the medium's capacity to oppose wave passage. It is the input for calculating reflection coefficients."
    physical_reading_rules:
      - id: zm_reading_default
        when: "true"
        status: ok
        text:
          es: "La impedancia depende del producto densidad-velocidad. Medios densos y rigidos tienen impedancia alta."
          en: "Impedance depends on the density-velocity product. Dense and stiff media have high impedance."
    coherence_rules:
      - id: zm_coherence_positive
        when: "Z_medio <= 0"
        status: error
        text:
          es: "[[Z_medio]] debe ser positivo. Un valor nulo o negativo indica error en los datos de entrada."
          en: "[[Z_medio]] must be positive. A zero or negative value indicates input data error."
      - id: zm_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[Z_medio]] tiene unidades correctas (Pa·s/m) y es del orden esperado."
          en: "Verify that [[Z_medio]] has correct units (Pa·s/m) and is of the expected order."
    model_validity_rules:
      - id: zm_validity_default
        when: "true"
        status: ok
        text:
          es: "La impedancia es una propiedad del medio, independiente de la frecuencia en el modelo elastico lineal."
          en: "Impedance is a medium property, independent of frequency in the linear elastic model."
    graph_rules:
      - id: zm_graph_default
        when: "true"
        status: ok
        text:
          es: "El cociente Z_2/Z_1 es el parametro relevante en la grafica de coeficientes."
          en: "The Z_2/Z_1 ratio is the relevant parameter in the coefficients graph."
    likely_errors:
      - id: zm_error_units
        when: "true"
        status: warning
        text:
          es: "Verificar unidades: densidad en kg/m³ y velocidad en m/s para obtener impedancia en Pa·s/m."
          en: "Check units: density in kg/m³ and velocity in m/s to obtain impedance in Pa·s/m."
    next_step_rules:
      - id: zm_next_default
        when: "true"
        status: ok
        text:
          es: "Con ambas impedancias calculadas, proceder a los coeficientes de reflexion y transmision."
          en: "With both impedances calculated, proceed to reflection and transmission coefficients."

  Z_1:
    magnitude_type: impedance
    semantic_role:
      es: "Impedancia acustica del medio incidente."
      en: "Acoustic impedance of the incident medium."
    summary_rules:
      - id: z1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Z_1]] caracteriza el medio desde el que llega la onda. Su contraste con [[Z_2]] determina el signo y la magnitud de la reflexion."
          en: "[[Z_1]] characterises the medium from which the wave arrives. Its contrast with [[Z_2]] determines reflection sign and magnitude."
    physical_reading_rules:
      - id: z1_reading_default
        when: "true"
        status: ok
        text:
          es: "Si [[Z_1]] es mucho mayor que [[Z_2]], la reflexion tiende a invertir fase y la transmision puede tener amplitud mayor que uno."
          en: "If [[Z_1]] is much greater than [[Z_2]], reflection tends to invert phase and transmission amplitude may exceed one."
    coherence_rules:
      - id: z1_coherence_positive
        when: "Z_1 <= 0"
        status: error
        text:
          es: "[[Z_1]] debe ser positiva; revisar densidad y velocidad del medio incidente."
          en: "[[Z_1]] must be positive; review density and velocity of the incident medium."
      - id: z1_coherence_default
        when: "true"
        status: ok
        text:
          es: "Usar [[Z_1]] siempre como medio de incidencia para no invertir el signo de [[R_amp]]."
          en: "Use [[Z_1]] always as the incidence medium to avoid inverting the sign of [[R_amp]]."
    model_validity_rules:
      - id: z1_validity_default
        when: "true"
        status: ok
        text:
          es: "La definicion de [[Z_1]] es valida para onda plana en medio homogeneo e isotropo."
          en: "The definition of [[Z_1]] is valid for a plane wave in a homogeneous isotropic medium."
    graph_rules:
      - id: z1_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[Z_1]] fija la escala del cociente [[Z_2]]/[[Z_1]]."
          en: "On the graph, [[Z_1]] sets the scale of the [[Z_2]]/[[Z_1]] ratio."
    likely_errors:
      - id: z1_error_swap
        when: "true"
        status: warning
        text:
          es: "No intercambiar [[Z_1]] y [[Z_2]]: cambia el signo de [[R_amp]]."
          en: "Do not swap [[Z_1]] and [[Z_2]]: it changes the sign of [[R_amp]]."
    next_step_rules:
      - id: z1_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[Z_1]] con [[Z_2]] para estimar si domina reflexion o transmision."
          en: "Compare [[Z_1]] with [[Z_2]] to estimate whether reflection or transmission dominates."

  Z_2:
    magnitude_type: impedance
    semantic_role:
      es: "Impedancia acustica del medio transmitido."
      en: "Acoustic impedance of the transmitted medium."
    summary_rules:
      - id: z2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Z_2]] caracteriza el medio al que intenta pasar la onda. Su relacion con [[Z_1]] controla el reparto energetico."
          en: "[[Z_2]] characterises the medium the wave tries to enter. Its relation to [[Z_1]] controls energy partition."
    physical_reading_rules:
      - id: z2_reading_default
        when: "true"
        status: ok
        text:
          es: "Si [[Z_2]] supera a [[Z_1]], la reflexion no invierte fase; si es menor, la reflexion invierte fase."
          en: "If [[Z_2]] exceeds [[Z_1]], reflection does not invert phase; if it is smaller, reflection inverts phase."
    coherence_rules:
      - id: z2_coherence_positive
        when: "Z_2 <= 0"
        status: error
        text:
          es: "[[Z_2]] debe ser positiva; revisar densidad y velocidad del medio transmitido."
          en: "[[Z_2]] must be positive; review density and velocity of the transmitted medium."
      - id: z2_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[Z_2]] corresponde al segundo medio y no al medio incidente."
          en: "Verify that [[Z_2]] corresponds to the second medium, not the incident medium."
    model_validity_rules:
      - id: z2_validity_default
        when: "true"
        status: ok
        text:
          es: "La definicion de [[Z_2]] asume medio transmitido homogeneo y contacto ideal en la interfaz."
          en: "The definition of [[Z_2]] assumes a homogeneous transmitted medium and ideal contact at the interface."
    graph_rules:
      - id: z2_graph_default
        when: "true"
        status: ok
        text:
          es: "Variar [[Z_2]] respecto a [[Z_1]] desplaza el punto sobre la curva de coeficientes."
          en: "Varying [[Z_2]] relative to [[Z_1]] moves the point along the coefficient curve."
    likely_errors:
      - id: z2_error_swap
        when: "true"
        status: warning
        text:
          es: "Asignar mal [[Z_2]] puede convertir una reflexion con inversion en una sin inversion."
          en: "Assigning [[Z_2]] incorrectly can turn phase-inverting reflection into non-inverting reflection."
    next_step_rules:
      - id: z2_next_default
        when: "true"
        status: ok
        text:
          es: "Usar el cociente [[Z_2]]/[[Z_1]] para leer [[R_amp]], [[R_E]] y [[T_E]]."
          en: "Use the [[Z_2]]/[[Z_1]] ratio to read [[R_amp]], [[R_E]] and [[T_E]]."

  rho_medio:
    magnitude_type: material_property
    semantic_role:
      es: "Densidad del medio usada para calcular impedancia."
      en: "Medium density used to calculate impedance."
    summary_rules:
      - id: rho_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_medio]] entra en la impedancia como producto con [[v_onda]]. Una densidad mayor aumenta la impedancia si la velocidad se mantiene."
          en: "[[rho_medio]] enters impedance as a product with [[v_onda]]. Higher density increases impedance if velocity is unchanged."
    physical_reading_rules:
      - id: rho_reading_default
        when: "true"
        status: ok
        text:
          es: "La densidad mide inercia del medio: cuanto mayor es, mayor esfuerzo requiere una misma velocidad de particula."
          en: "Density measures medium inertia: the larger it is, the more stress is needed for the same particle velocity."
    coherence_rules:
      - id: rho_coherence_positive
        when: "rho_medio <= 0"
        status: error
        text:
          es: "[[rho_medio]] debe ser positiva para un medio material."
          en: "[[rho_medio]] must be positive for a material medium."
      - id: rho_coherence_default
        when: "true"
        status: ok
        text:
          es: "Usar [[rho_medio]] en kg/m3 antes de multiplicar por [[v_onda]]."
          en: "Use [[rho_medio]] in kg/m3 before multiplying by [[v_onda]]."
    model_validity_rules:
      - id: rho_validity_default
        when: "true"
        status: ok
        text:
          es: "Se supone densidad uniforme en cada semiespacio."
          en: "Uniform density is assumed in each half-space."
    graph_rules:
      - id: rho_graph_default
        when: "true"
        status: ok
        text:
          es: "[[rho_medio]] no suele ser el eje del grafico; modifica la impedancia que alimenta el cociente."
          en: "[[rho_medio]] is usually not the graph axis; it modifies the impedance feeding the ratio."
    likely_errors:
      - id: rho_error_units
        when: "true"
        status: warning
        text:
          es: "No mezclar g/cm3 con kg/m3; el error cambia directamente la impedancia."
          en: "Do not mix g/cm3 with kg/m3; the error directly changes impedance."
    next_step_rules:
      - id: rho_next_default
        when: "true"
        status: ok
        text:
          es: "Multiplicar [[rho_medio]] por [[v_onda]] para obtener [[Z_medio]]."
          en: "Multiply [[rho_medio]] by [[v_onda]] to obtain [[Z_medio]]."

  v_onda:
    magnitude_type: wave_speed
    semantic_role:
      es: "Velocidad de propagacion usada para calcular impedancia."
      en: "Propagation speed used to calculate impedance."
    summary_rules:
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_onda]] conecta las propiedades elasticas del medio con su impedancia acustica."
          en: "[[v_onda]] connects the elastic properties of the medium with its acoustic impedance."
    physical_reading_rules:
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "Para ondas longitudinales se usa velocidad P; para ondas de corte se usa velocidad S."
          en: "For longitudinal waves use P-wave speed; for shear waves use S-wave speed."
    coherence_rules:
      - id: v_coherence_positive
        when: "v_onda <= 0"
        status: error
        text:
          es: "[[v_onda]] debe ser positiva."
          en: "[[v_onda]] must be positive."
      - id: v_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[v_onda]] corresponde al tipo de onda que incide en la interfaz."
          en: "Verify that [[v_onda]] corresponds to the wave type incident on the interface."
    model_validity_rules:
      - id: v_validity_default
        when: "true"
        status: ok
        text:
          es: "La velocidad se toma constante en cada medio para el modelo de incidencia normal."
          en: "Speed is taken as constant in each medium for the normal-incidence model."
    graph_rules:
      - id: v_graph_default
        when: "true"
        status: ok
        text:
          es: "[[v_onda]] afecta al grafico a traves de [[Z_medio]] y del cociente de impedancias."
          en: "[[v_onda]] affects the graph through [[Z_medio]] and the impedance ratio."
    likely_errors:
      - id: v_error_mode
        when: "true"
        status: warning
        text:
          es: "No usar velocidad longitudinal si el problema se refiere a una onda de corte, ni viceversa."
          en: "Do not use longitudinal speed if the problem refers to a shear wave, or vice versa."
    next_step_rules:
      - id: v_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_onda]] y [[rho_medio]], calcular [[Z_medio]] antes de los coeficientes."
          en: "With [[v_onda]] and [[rho_medio]], calculate [[Z_medio]] before the coefficients."

cross_checks:
  - id: check_energy_conservation
    description:
      es: "Verificar conservacion de energia: [[R_E]] + [[T_E]] debe ser 1."
      en: "Verify energy conservation: [[R_E]] + [[T_E]] must be 1."
    when: "R_E >= 0 && T_E >= 0"
    expected: "abs(R_E + T_E - 1) < 0.01"
    on_fail:
      status: error
      text:
        es: "La conservacion de energia no se cumple. Revisar el calculo de coeficientes."
        en: "Energy conservation is not satisfied. Review coefficient calculation."
  - id: check_continuity
    description:
      es: "Verificar continuidad de desplazamiento: 1 + [[R_amp]] debe ser igual a [[T_amp]]."
      en: "Verify displacement continuity: 1 + [[R_amp]] must equal [[T_amp]]."
    when: "true"
    expected: "abs(1 + R_amp - T_amp) < 0.01"
    on_fail:
      status: error
      text:
        es: "La continuidad de desplazamiento no se cumple. Los coeficientes son inconsistentes."
        en: "Displacement continuity is not satisfied. Coefficients are inconsistent."

error_patterns:
  - id: ep_T_greater_than_1
    detect_when: "T_amp > 1"
    text:
      es: "[[T_amp]] mayor que 1 no indica error. Verificar que [[T_E]] es menor o igual que 1."
      en: "[[T_amp]] greater than 1 does not indicate error. Verify that [[T_E]] is less than or equal to 1."
  - id: ep_R_out_of_range
    detect_when: "abs(R_amp) > 1"
    text:
      es: "[[R_amp]] fuera del rango fisico [-1, 1]. Revisar el calculo de impedancias."
      en: "[[R_amp]] outside physical range [-1, 1]. Review impedance calculation."

graph_binding:
  primary_graph: Coord
  x_axis: "Z_2/Z_1"
  y_axis: "R_amp, T_amp, R_E, T_E"
  description:
    es: "Coeficientes de reflexion y transmision en funcion del cociente de impedancias."
    en: "Reflection and transmission coefficients as a function of impedance ratio."

mini_graph:
  enabled: true
  preferred_type: Coord

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
