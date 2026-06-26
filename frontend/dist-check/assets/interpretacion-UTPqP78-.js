const e=`version: "5.0"
id: interp-sistema-aislado
leaf_id: sistema-aislado

nombre:
  es: Interpretación — Sistema aislado
  en: Interpretation — Isolated System

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: fundamentos
  parent_id: sistemas-termodinamicos
  ruta_relativa: fisica-clasica/termodinamica/fundamentos/sistemas-termodinamicos/sistema-aislado

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
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
    max_sections: 3
    priority: [summary, likely_errors, coherence]

dependencies:
  formulas:
    - primer_principio_aislado
    - entropia_aislado
  magnitudes:
    - U
    - DeltaU
    - Q_ais
    - W_ais
    - S_ais

global_context:
  physical_domain:
    es: "Termodinámica clásica. Sistema aislado: frontera rígida, adiabática e impermeable que impide todo intercambio de energía y materia con el entorno."
    en: "Classical thermodynamics. Isolated system: rigid, adiabatic, impermeable boundary that prevents all energy and matter exchange with the surroundings."
  axis_convention:
    es: "Convenio de signo IUPAC: calor positivo cuando entra al sistema, trabajo positivo cuando entra al sistema (convención química). En sistema aislado ambos son nulos."
    en: "IUPAC sign convention: heat positive when entering the system, work positive when entering the system (chemistry convention). In an isolated system both are zero."
  standard_assumptions:
    - "Frontera perfectamente adiabática (sin conducción, convección ni radiación)"
    - "Frontera rígida (sin variación de volumen externo)"
    - "Frontera impermeable (sin flujo de materia)"
    - "Sistema macroscópico en régimen clásico"
  standard_warnings:
    - "Ningún sistema real es perfectamente aislado; siempre existen fugas pequeñas"
    - "Los procesos internos (mezcla, reacción química) no violan el aislamiento"
    - "La entropía del sistema aislado nunca disminuye (segundo principio)"

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

  DeltaU:
    magnitude_type: derived
    semantic_role:
      es: "Indicador operativo del aislamiento energético del sistema."
      en: "Operational indicator of the system's energetic isolation."
    summary_rules:
      - id: deltaU_summary_zero
        when: "DeltaU == 0"
        status: ok
        text:
          es: "[[DeltaU]] es nulo. Esto indica que el aislamiento es efectivo y que ni calor ni trabajo han cruzado la frontera del sistema durante el proceso."
          en: "[[DeltaU]] is zero. This indicates that isolation is effective and that neither heat nor work has crossed the system boundary during the process."
      - id: deltaU_summary_nonzero
        when: "DeltaU != 0"
        status: warning
        text:
          es: "[[DeltaU]] es distinto de cero. El sistema no se comporta como un sistema aislado ideal: hay transferencia energética no contabilizada. Revisar las condiciones de la frontera."
          en: "[[DeltaU]] is non-zero. The system is not behaving as an ideal isolated system: there is unaccounted energy transfer. Review the boundary conditions."
      - id: deltaU_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaU]] resume la variación de energía interna del sistema. En sistema aislado ideal, su valor indica si el aislamiento fue efectivo o si hubo fugas."
          en: "[[DeltaU]] summarizes the change in internal energy of the system. In an ideal isolated system, its value indicates whether isolation was effective or if leakage occurred."
    physical_reading_rules:
      - id: deltaU_reading_zero
        when: "DeltaU == 0"
        status: ok
        text:
          es: "Variación nula de [[DeltaU]] significa que la energía interna total del sistema no ha cambiado. Los procesos internos (redistribución térmica, mezcla) ocurren sin alterar la energía total."
          en: "Zero [[DeltaU]] means the total internal energy of the system has not changed. Internal processes (thermal redistribution, mixing) occur without altering the total energy."
      - id: deltaU_reading_positive
        when: "DeltaU > 0"
        status: warning
        text:
          es: "[[DeltaU]] positivo indica que el sistema ha ganado energía del exterior. Esto es incompatible con el aislamiento declarado. La frontera permite entrada de calor o trabajo."
          en: "Positive [[DeltaU]] indicates the system has gained energy from outside. This is incompatible with the declared isolation. The boundary allows heat or work to enter."
      - id: deltaU_reading_negative
        when: "DeltaU < 0"
        status: warning
        text:
          es: "[[DeltaU]] negativo indica que el sistema ha perdido energía hacia el exterior. El aislamiento no es efectivo: revisa si la frontera es realmente adiabática y rígida."
          en: "Negative [[DeltaU]] indicates the system has lost energy to the exterior. Isolation is not effective: check whether the boundary is truly adiabatic and rigid."
      - id: deltaU_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaU]] representa la variación de energía interna causada exclusivamente por transferencias a través de la frontera. En sistema aislado, [[Q_ais]] y [[W_ais]] son nulos, por lo que [[DeltaU]] depende solo de procesos internos."
          en: "[[DeltaU]] represents the change in internal energy caused exclusively by transfers through the boundary. In an isolated system, [[Q_ais]] and [[W_ais]] are zero, so [[DeltaU]] depends only on internal processes."
    coherence_rules:
      - id: deltaU_coherence_aislado
        when: "Q_ais == 0 and W_ais == 0"
        status: ok
        text:
          es: "Con [[Q_ais]] y [[W_ais]] nulos, el primer principio confirma que [[DeltaU]] debe ser cero. La coherencia energética del sistema aislado está verificada."
          en: "With zero [[Q_ais]] and [[W_ais]], the first law confirms that [[DeltaU]] must be zero. The energetic coherence of the isolated system is verified."
      - id: deltaU_coherence_inconsistente
        when: "DeltaU != 0"
        status: error
        text:
          es: "Incoherencia detectada: [[DeltaU]] es distinto de cero pero el sistema se declara aislado. Verificar si [[Q_ais]] o [[W_ais]] son realmente nulos en este caso."
          en: "Inconsistency detected: [[DeltaU]] is non-zero but the system is declared isolated. Verify whether [[Q_ais]] or [[W_ais]] are truly zero in this case."
      - id: deltaU_coherence_default
        when: "true"
        status: ok
        text:
          es: "El primer principio en sistema aislado exige que [[DeltaU]] sea cero. Cualquier discrepancia revela una violación del aislamiento o un error de suposición."
          en: "The first law in an isolated system requires [[DeltaU]] to be zero. Any discrepancy reveals a violation of isolation or an assumption error."
    model_validity_rules:
      - id: deltaU_validity_ok
        when: "DeltaU == 0"
        status: ok
        text:
          es: "El modelo de sistema aislado ideal es válido: [[DeltaU]] nulo confirma que las hipótesis de frontera se cumplen en este cálculo."
          en: "The ideal isolated system model is valid: zero [[DeltaU]] confirms that the boundary assumptions hold in this calculation."
      - id: deltaU_validity_fuga
        when: "DeltaU != 0"
        status: warning
        text:
          es: "El modelo de sistema aislado pierde validez cuando [[DeltaU]] es distinto de cero. En sistemas reales, usar modelos de sistema cerrado o abierto según la frontera real."
          en: "The isolated system model loses validity when [[DeltaU]] is non-zero. In real systems, use closed or open system models according to the actual boundary."
      - id: deltaU_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de sistema aislado es una idealización. Su validez depende de que la frontera sea prácticamente adiabática, rígida e impermeable durante el tiempo del proceso."
          en: "The isolated system model is an idealization. Its validity depends on the boundary being practically adiabatic, rigid, and impermeable during the duration of the process."
    graph_rules:
      - id: deltaU_graph_horizontal
        when: "DeltaU == 0"
        status: ok
        text:
          es: "En la gráfica de energía vs proceso, [[DeltaU]] se representa como una línea horizontal en cero, confirmando la invariancia energética del sistema aislado."
          en: "In the energy vs. process graph, [[DeltaU]] appears as a horizontal line at zero, confirming the energetic invariance of the isolated system."
      - id: deltaU_graph_pendiente
        when: "DeltaU != 0"
        status: warning
        text:
          es: "Una pendiente no nula en la gráfica de [[DeltaU]] vs proceso indica que hay intercambio energético con el entorno. El sistema no es aislado en la práctica."
          en: "A non-zero slope in the [[DeltaU]] vs. process graph indicates energy exchange with the surroundings. The system is not isolated in practice."
      - id: deltaU_graph_default
        when: "true"
        status: ok
        text:
          es: "La gráfica de [[DeltaU]] vs tiempo o proceso debe ser constante en cero para un sistema aislado ideal. Desviaciones indican fugas o errores de modelado."
          en: "The [[DeltaU]] vs. time or process graph should be constant at zero for an ideal isolated system. Deviations indicate leakage or modeling errors."
    likely_errors:
      - id: deltaU_error_proceso_interno
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que los procesos internos (reacciones, mezcla, difusión) cambian [[DeltaU]] del sistema aislado. Solo los intercambios de frontera afectan [[DeltaU]] total."
          en: "Common error: believing that internal processes (reactions, mixing, diffusion) change [[DeltaU]] of the isolated system. Only boundary exchanges affect total [[DeltaU]]."
      - id: deltaU_error_confundir_U
        when: "true"
        status: warning
        text:
          es: "Error de confusión: tomar [[U]] (valor absoluto de energía interna) en lugar de [[DeltaU]] (variación) al aplicar el primer principio. El primer principio trabaja con diferencias, no con valores absolutos."
          en: "Confusion error: using [[U]] (absolute internal energy value) instead of [[DeltaU]] (change) when applying the first law. The first law works with differences, not absolute values."
      - id: deltaU_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que el valor de [[DeltaU]] sea cero antes de concluir que el sistema está aislado. Un valor distinto de cero requiere revisar las condiciones de frontera."
          en: "Verify that [[DeltaU]] is zero before concluding that the system is isolated. A non-zero value requires reviewing the boundary conditions."
    next_step_rules:
      - id: deltaU_next_entropia
        when: "DeltaU == 0"
        status: ok
        text:
          es: "Con el balance energético verificado, el siguiente paso es analizar la variación de [[S_ais]] para determinar si el proceso es reversible o irreversible."
          en: "With the energy balance verified, the next step is to analyze the change in [[S_ais]] to determine whether the process is reversible or irreversible."
      - id: deltaU_next_revisar_frontera
        when: "DeltaU != 0"
        status: warning
        text:
          es: "Antes de continuar, revisar si la frontera es realmente aislante. Considerar usar el modelo de sistema cerrado si hay intercambio de calor o trabajo."
          en: "Before continuing, verify whether the boundary is truly isolating. Consider using the closed system model if there is heat or work exchange."
      - id: deltaU_next_default
        when: "true"
        status: ok
        text:
          es: "Después de verificar [[DeltaU]], comparar con el resultado de [[S_ais]] para tener una imagen completa del comportamiento termodinámico del sistema aislado."
          en: "After verifying [[DeltaU]], compare with the result of [[S_ais]] to get a complete picture of the thermodynamic behavior of the isolated system."

  Q_ais:
    magnitude_type: parameter
    semantic_role:
      es: "Confirma que la frontera del sistema es adiabática."
      en: "Confirms that the system boundary is adiabatic."
    summary_rules:
      - id: qais_summary_zero
        when: "Q_ais == 0"
        status: ok
        text:
          es: "[[Q_ais]] es nulo. La frontera del sistema es adiabática, lo que indica que no hay transferencia de calor hacia ni desde el entorno."
          en: "[[Q_ais]] is zero. The system boundary is adiabatic, indicating no heat transfer to or from the surroundings."
      - id: qais_summary_nonzero
        when: "Q_ais != 0"
        status: error
        text:
          es: "[[Q_ais]] distinto de cero. El sistema no es aislado respecto al calor. La frontera no puede considerarse adiabática en este caso."
          en: "[[Q_ais]] is non-zero. The system is not isolated with respect to heat. The boundary cannot be considered adiabatic in this case."
      - id: qais_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Q_ais]] resume el intercambio de calor a través de la frontera. En sistema aislado ideal, su valor indica si la condición adiabática de la frontera se cumple."
          en: "[[Q_ais]] summarizes the heat exchange through the boundary. In an ideal isolated system, its value indicates whether the adiabatic condition of the boundary holds."
    physical_reading_rules:
      - id: qais_reading_zero
        when: "Q_ais == 0"
        status: ok
        text:
          es: "[[Q_ais]] nulo confirma que no existe gradiente térmico efectivo entre el sistema y el entorno, o bien que la frontera tiene resistencia térmica infinita. El estado térmico interno puede seguir evolucionando."
          en: "Zero [[Q_ais]] confirms that there is no effective thermal gradient between the system and the surroundings, or that the boundary has infinite thermal resistance. The internal thermal state may still evolve."
      - id: qais_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Q_ais]] mide la energía que cruza la frontera como calor. En un sistema aislado, esta magnitud debe ser nula por definición de la frontera adiabática."
          en: "[[Q_ais]] measures the energy crossing the boundary as heat. In an isolated system, this quantity must be zero by definition of the adiabatic boundary."
    coherence_rules:
      - id: qais_coherence_ok
        when: "Q_ais == 0"
        status: ok
        text:
          es: "[[Q_ais]] nulo es coherente con el modelo de sistema aislado. La condición adiabática de la frontera está verificada."
          en: "Zero [[Q_ais]] is coherent with the isolated system model. The adiabatic condition of the boundary is verified."
      - id: qais_coherence_error
        when: "Q_ais != 0"
        status: error
        text:
          es: "[[Q_ais]] no nulo es incoherente con el sistema aislado. Verificar si el sistema es en realidad un sistema cerrado que intercambia calor."
          en: "Non-zero [[Q_ais]] is incoherent with the isolated system. Check if the system is actually a closed system that exchanges heat."
      - id: qais_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia del sistema aislado requiere [[Q_ais]] nulo junto con [[W_ais]] nulo. Ambas condiciones deben satisfacerse simultáneamente."
          en: "The coherence of the isolated system requires zero [[Q_ais]] together with zero [[W_ais]]. Both conditions must be satisfied simultaneously."
    model_validity_rules:
      - id: qais_validity_ok
        when: "Q_ais == 0"
        status: ok
        text:
          es: "El modelo de frontera adiabática es válido. En sistemas reales, la validez depende de la capacidad aislante del material de la frontera y del tiempo del proceso."
          en: "The adiabatic boundary model is valid. In real systems, validity depends on the insulating capacity of the boundary material and the duration of the process."
      - id: qais_validity_limite
        when: "Q_ais != 0"
        status: warning
        text:
          es: "La hipótesis de frontera adiabática falla. Para tiempos largos o materiales con baja resistencia térmica, el modelo de sistema aislado no es aplicable."
          en: "The adiabatic boundary assumption fails. For long durations or materials with low thermal resistance, the isolated system model is not applicable."
      - id: qais_validity_default
        when: "true"
        status: ok
        text:
          es: "La validez de la condición [[Q_ais]] nulo depende de la calidad del aislamiento térmico de la frontera. Un recipiente Dewar es un ejemplo práctico de buena aproximación."
          en: "The validity of the zero [[Q_ais]] condition depends on the quality of the thermal insulation of the boundary. A Dewar flask is a practical example of a good approximation."
    graph_rules:
      - id: qais_graph_default
        when: "true"
        status: ok
        text:
          es: "En la representación gráfica del balance energético, [[Q_ais]] aparece como una barra o flecha nula que apunta a la frontera, reforzando visualmente el aislamiento térmico."
          en: "In the graphical representation of the energy balance, [[Q_ais]] appears as a zero bar or arrow pointing at the boundary, visually reinforcing thermal isolation."
    likely_errors:
      - id: qais_error_confundir_temperatura
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que [[Q_ais]] es nulo porque el sistema está frío. La temperatura interna no determina si hay intercambio de calor; lo determina la naturaleza de la frontera."
          en: "Common error: believing [[Q_ais]] is zero because the system is cold. The internal temperature does not determine whether heat is exchanged; the nature of the boundary does."
      - id: qais_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar siempre que la anulación de [[Q_ais]] proviene de una propiedad de la frontera (adiabática), no de una suposición sobre el estado del sistema."
          en: "Always verify that the annulment of [[Q_ais]] stems from a boundary property (adiabatic), not from an assumption about the system state."
    next_step_rules:
      - id: qais_next_w
        when: "Q_ais == 0"
        status: ok
        text:
          es: "Con [[Q_ais]] verificado como nulo, el siguiente paso es confirmar que [[W_ais]] también es nulo para completar las condiciones del sistema aislado."
          en: "With [[Q_ais]] verified as zero, the next step is to confirm that [[W_ais]] is also zero to complete the conditions of the isolated system."
      - id: qais_next_default
        when: "true"
        status: ok
        text:
          es: "Después de analizar [[Q_ais]], verificar [[W_ais]] y obtener [[DeltaU]] para completar el primer principio aplicado al sistema aislado."
          en: "After analyzing [[Q_ais]], verify [[W_ais]] and obtain [[DeltaU]] to complete the first law applied to the isolated system."

  W_ais:
    magnitude_type: parameter
    semantic_role:
      es: "Confirma que la frontera del sistema es rígida e impermeable al trabajo mecánico."
      en: "Confirms that the system boundary is rigid and impermeable to mechanical work."
    summary_rules:
      - id: wais_summary_zero
        when: "W_ais == 0"
        status: ok
        text:
          es: "[[W_ais]] es nulo. La frontera del sistema es rígida, lo que indica que no hay trabajo mecánico intercambiado con el entorno."
          en: "[[W_ais]] is zero. The system boundary is rigid, indicating no mechanical work exchanged with the surroundings."
      - id: wais_summary_nonzero
        when: "W_ais != 0"
        status: error
        text:
          es: "[[W_ais]] distinto de cero. El sistema no está aislado respecto al trabajo. La frontera no puede considerarse rígida en este caso."
          en: "[[W_ais]] is non-zero. The system is not isolated with respect to work. The boundary cannot be considered rigid in this case."
      - id: wais_summary_default
        when: "true"
        status: ok
        text:
          es: "[[W_ais]] resume el intercambio de trabajo a través de la frontera. En sistema aislado ideal, indica si la condición de frontera rígida se cumple."
          en: "[[W_ais]] summarizes the work exchange through the boundary. In an ideal isolated system, it indicates whether the rigid boundary condition holds."
    physical_reading_rules:
      - id: wais_reading_zero
        when: "W_ais == 0"
        status: ok
        text:
          es: "[[W_ais]] nulo indica que no hay desplazamiento de la frontera ni fuerzas externas actuando sobre el sistema. El volumen del sistema y su posición en el entorno permanecen constantes."
          en: "Zero [[W_ais]] indicates no displacement of the boundary and no external forces acting on the system. The system volume and its position in the surroundings remain constant."
      - id: wais_reading_default
        when: "true"
        status: ok
        text:
          es: "[[W_ais]] mide la energía que cruza la frontera como trabajo. En sistema aislado, esta magnitud debe ser nula por definición de la frontera rígida."
          en: "[[W_ais]] measures the energy crossing the boundary as work. In an isolated system, this quantity must be zero by definition of the rigid boundary."
    coherence_rules:
      - id: wais_coherence_ok
        when: "W_ais == 0"
        status: ok
        text:
          es: "[[W_ais]] nulo es coherente con el modelo de sistema aislado. La condición de frontera rígida está verificada."
          en: "Zero [[W_ais]] is coherent with the isolated system model. The rigid boundary condition is verified."
      - id: wais_coherence_error
        when: "W_ais != 0"
        status: error
        text:
          es: "[[W_ais]] no nulo es incoherente con la condición de sistema aislado. Revisar si el sistema tiene una frontera deformable."
          en: "Non-zero [[W_ais]] is incoherent with the isolated system condition. Check if the system has a deformable boundary."
      - id: wais_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia del aislamiento mecánico requiere [[W_ais]] nulo. Junto con [[Q_ais]] nulo, completa las dos condiciones de frontera del sistema aislado."
          en: "The coherence of mechanical isolation requires zero [[W_ais]]. Together with zero [[Q_ais]], this completes the two boundary conditions of the isolated system."
    model_validity_rules:
      - id: wais_validity_ok
        when: "W_ais == 0"
        status: ok
        text:
          es: "El modelo de frontera rígida es válido. En sistemas reales, un recipiente metálico grueso con cierre hermético es una buena aproximación de frontera rígida."
          en: "The rigid boundary model is valid. In real systems, a thick metallic container with hermetic seal is a good approximation of a rigid boundary."
      - id: wais_validity_limite
        when: "W_ais != 0"
        status: warning
        text:
          es: "La hipótesis de frontera rígida falla cuando el sistema puede comprimir o expandir su entorno. En ese caso, usar el modelo de sistema cerrado con trabajo de presión-volumen."
          en: "The rigid boundary assumption fails when the system can compress or expand its surroundings. In that case, use the closed system model with pressure-volume work."
      - id: wais_validity_default
        when: "true"
        status: ok
        text:
          es: "La validez de [[W_ais]] nulo depende de que la frontera sea prácticamente indeformable durante el tiempo del proceso."
          en: "The validity of zero [[W_ais]] depends on the boundary being practically undeformable during the duration of the process."
    graph_rules:
      - id: wais_graph_default
        when: "true"
        status: ok
        text:
          es: "En la representación gráfica del balance energético, [[W_ais]] aparece como una barra nula en la dirección mecánica, reforzando la condición de frontera rígida."
          en: "In the graphical representation of the energy balance, [[W_ais]] appears as a zero bar in the mechanical direction, reinforcing the rigid boundary condition."
    likely_errors:
      - id: wais_error_trabajo_interno
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir el trabajo realizado por un émbolo interno con el trabajo de frontera. Un émbolo dentro del sistema redistribuye energía internamente pero no cruza la frontera exterior."
          en: "Common error: confusing the work done by an internal piston with boundary work. A piston inside the system redistributes energy internally but does not cross the outer boundary."
      - id: wais_error_default
        when: "true"
        status: warning
        text:
          es: "La condición [[W_ais]] nulo significa que la frontera exterior es rígida. Los procesos mecánicos internos (compresión local, vibraciones) no afectan este balance."
          en: "The zero [[W_ais]] condition means the outer boundary is rigid. Internal mechanical processes (local compression, vibrations) do not affect this balance."
    next_step_rules:
      - id: wais_next_deltau
        when: "W_ais == 0"
        status: ok
        text:
          es: "Con [[W_ais]] y [[Q_ais]] nulos, calcular [[DeltaU]] mediante el primer principio confirma el aislamiento completo del sistema."
          en: "With zero [[W_ais]] and [[Q_ais]], computing [[DeltaU]] via the first law confirms the complete isolation of the system."
      - id: wais_next_default
        when: "true"
        status: ok
        text:
          es: "Después de verificar [[W_ais]], completar el análisis con [[Q_ais]] y [[DeltaU]] para obtener el cuadro completo del primer principio en el sistema aislado."
          en: "After verifying [[W_ais]], complete the analysis with [[Q_ais]] and [[DeltaU]] to obtain the complete picture of the first law in the isolated system."

  S_ais:
    magnitude_type: state
    semantic_role:
      es: "Determina la dirección espontánea del proceso y el grado de irreversibilidad en el sistema aislado."
      en: "Determines the spontaneous direction of the process and the degree of irreversibility in the isolated system."
    summary_rules:
      - id: sais_summary_positive
        when: "S_ais > 0"
        status: ok
        text:
          es: "[[S_ais]] positivo indica un proceso espontáneo e irreversible. El desorden microscópico ha aumentado, y el sistema evoluciona hacia un estado de mayor equilibrio. Este resultado es el más frecuente en sistemas reales."
          en: "Positive [[S_ais]] indicates a spontaneous, irreversible process. Microscopic disorder has increased, and the system evolves toward a state of greater equilibrium. This result is most common in real systems."
      - id: sais_summary_zero
        when: "S_ais == 0"
        status: ok
        text:
          es: "[[S_ais]] nulo describe un proceso reversible ideal. En la práctica, ningún proceso macroscópico es completamente reversible; este resultado es teórico y sirve como límite ideal."
          en: "Zero [[S_ais]] describes an ideal reversible process. In practice, no macroscopic process is completely reversible; this result is theoretical and serves as an ideal limit."
      - id: sais_summary_negative
        when: "S_ais < 0"
        status: error
        text:
          es: "[[S_ais]] negativo es imposible en un sistema aislado. Este resultado indica un error en el cálculo, en la definición del sistema o en la aplicación del segundo principio."
          en: "Negative [[S_ais]] is impossible in an isolated system. This result indicates an error in the calculation, in the system definition, or in the application of the second law."
      - id: sais_summary_default
        when: "true"
        status: ok
        text:
          es: "[[S_ais]] describe el incremento de entropía en el sistema aislado y resume si el proceso es espontáneo, reversible o físicamente imposible. Indica la dirección temporal de la evolución del sistema."
          en: "[[S_ais]] describes the entropy increment in the isolated system and summarizes whether the process is spontaneous, reversible, or physically impossible. It indicates the temporal direction of the system evolution."
    physical_reading_rules:
      - id: sais_reading_positive
        when: "S_ais > 0"
        status: ok
        text:
          es: "El sistema evoluciona de forma espontánea hacia un estado de mayor desorden microscópico. La energía interna total se conserva, pero se distribuye de manera más uniforme entre los grados de libertad microscópicos."
          en: "The system evolves spontaneously toward a state of greater microscopic disorder. The total internal energy is conserved, but it is distributed more uniformly among the microscopic degrees of freedom."
      - id: sais_reading_zero
        when: "S_ais == 0"
        status: ok
        text:
          es: "El proceso es reversible ideal. Toda la energía transferida internamente podría en principio revertirse sin costo entrópico. Este caso límite es útil como referencia teórica del máximo rendimiento."
          en: "The process is ideally reversible. All internally transferred energy could in principle be reversed without entropic cost. This limiting case is useful as a theoretical reference for maximum efficiency."
      - id: sais_reading_default
        when: "true"
        status: ok
        text:
          es: "La variación de [[S_ais]] mide cuánto desorden microscópico ha generado el proceso. Cuanto mayor sea su valor, mayor es la irreversibilidad y menor la posibilidad de recuperar el estado inicial."
          en: "The change in [[S_ais]] measures how much microscopic disorder the process has generated. The larger its value, the greater the irreversibility and the less the possibility of recovering the initial state."
    coherence_rules:
      - id: sais_coherence_ok
        when: "S_ais >= 0"
        status: ok
        text:
          es: "[[S_ais]] mayor o igual a cero es coherente con el segundo principio aplicado a un sistema aislado. El resultado es físicamente consistente."
          en: "[[S_ais]] greater than or equal to zero is coherent with the second law applied to an isolated system. The result is physically consistent."
      - id: sais_coherence_error
        when: "S_ais < 0"
        status: error
        text:
          es: "[[S_ais]] negativo viola el segundo principio de la termodinámica para sistemas aislados. Revisar la definición del sistema, los límites de la frontera y los cálculos realizados."
          en: "Negative [[S_ais]] violates the second law of thermodynamics for isolated systems. Review the system definition, boundary limits, and calculations performed."
      - id: sais_coherence_default
        when: "true"
        status: ok
        text:
          es: "El segundo principio impone que [[S_ais]] sea siempre mayor o igual a cero en un sistema aislado. Esta restricción es absoluta y no tiene excepciones en sistemas macroscópicos."
          en: "The second law imposes that [[S_ais]] be always greater than or equal to zero in an isolated system. This constraint is absolute and has no exceptions in macroscopic systems."
    model_validity_rules:
      - id: sais_validity_ok
        when: "S_ais >= 0"
        status: ok
        text:
          es: "El modelo termodinámico es internamente coherente. El segundo principio se cumple y el análisis de irreversibilidad es válido."
          en: "The thermodynamic model is internally coherent. The second law is satisfied and the irreversibility analysis is valid."
      - id: sais_validity_fluctuaciones
        when: "S_ais == 0"
        status: warning
        text:
          es: "El proceso reversible ideal es un límite inalcanzable en la práctica. Para procesos reales, esperar siempre [[S_ais]] estrictamente positivo. Un resultado de cero exacto sugiere que se ha idealizado en exceso el sistema."
          en: "The ideal reversible process is an unachievable limit in practice. For real processes, always expect strictly positive [[S_ais]]. An exact zero result suggests the system has been over-idealized."
      - id: sais_validity_default
        when: "true"
        status: ok
        text:
          es: "La validez del análisis de [[S_ais]] depende de que el sistema esté bien definido como aislado y de que los cálculos de calor y temperatura sean correctos."
          en: "The validity of the [[S_ais]] analysis depends on the system being well defined as isolated and on the heat and temperature calculations being correct."
    graph_rules:
      - id: sais_graph_creciente
        when: "S_ais > 0"
        status: ok
        text:
          es: "En la gráfica de [[S_ais]] vs tiempo, una curva monotónicamente creciente confirma la irreversibilidad del proceso. La pendiente es proporcional a la tasa de generación de entropía."
          en: "In the [[S_ais]] vs. time graph, a monotonically increasing curve confirms the irreversibility of the process. The slope is proportional to the rate of entropy generation."
      - id: sais_graph_plano
        when: "S_ais == 0"
        status: ok
        text:
          es: "Una curva horizontal en la gráfica de [[S_ais]] vs tiempo indica proceso reversible. Es el caso límite teórico; en la práctica la curva siempre tiene pendiente positiva."
          en: "A horizontal curve in the [[S_ais]] vs. time graph indicates a reversible process. This is the theoretical limiting case; in practice the curve always has a positive slope."
      - id: sais_graph_default
        when: "true"
        status: ok
        text:
          es: "La gráfica de [[S_ais]] vs tiempo en un sistema aislado debe ser siempre no decreciente. Un descenso indica error de modelado o que el sistema no está realmente aislado."
          en: "The [[S_ais]] vs. time graph in an isolated system must always be non-decreasing. A decrease indicates a modeling error or that the system is not truly isolated."
    likely_errors:
      - id: sais_error_entorno
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir la entropía del sistema aislado con la entropía del entorno o del universo. En sistema aislado, solo cuenta la entropía del sistema, que no puede disminuir."
          en: "Common error: confusing the entropy of the isolated system with the entropy of the surroundings or the universe. In an isolated system, only the system entropy counts, and it cannot decrease."
      - id: sais_error_invertir
        when: "S_ais < 0"
        status: error
        text:
          es: "Resultado imposible: [[S_ais]] negativo en sistema aislado. Es probable que se haya invertido el signo de la variación de entropía o que el sistema no esté correctamente definido como aislado."
          en: "Impossible result: negative [[S_ais]] in an isolated system. It is likely that the sign of the entropy change has been inverted or that the system is not correctly defined as isolated."
      - id: sais_error_default
        when: "true"
        status: warning
        text:
          es: "Comprobar siempre que [[S_ais]] sea mayor o igual a cero antes de interpretar el proceso. Un valor negativo es la señal más clara de un error conceptual o de cálculo."
          en: "Always verify that [[S_ais]] is greater than or equal to zero before interpreting the process. A negative value is the clearest signal of a conceptual or calculation error."
    next_step_rules:
      - id: sais_next_equilibrio
        when: "S_ais > 0"
        status: ok
        text:
          es: "Con [[S_ais]] positivo confirmado, el siguiente paso conceptual es estudiar el estado de equilibrio final: en ese estado, [[S_ais]] alcanza su máximo y los procesos espontáneos cesan."
          en: "With positive [[S_ais]] confirmed, the next conceptual step is to study the final equilibrium state: at that state, [[S_ais]] reaches its maximum and spontaneous processes cease."
      - id: sais_next_comparar
        when: "S_ais == 0"
        status: ok
        text:
          es: "Con proceso reversible ideal identificado, el siguiente paso es comparar con un proceso real para cuantificar la irreversibilidad introducida por fricción, gradientes de temperatura o mezcla."
          en: "With an ideal reversible process identified, the next step is to compare with a real process to quantify the irreversibility introduced by friction, temperature gradients, or mixing."
      - id: sais_next_default
        when: "true"
        status: ok
        text:
          es: "Después de analizar [[S_ais]], explorar cómo se relaciona la variación de entropía con el equilibrio termodinámico y con las condiciones de frontera del sistema aislado."
          en: "After analyzing [[S_ais]], explore how the entropy change relates to thermodynamic equilibrium and the boundary conditions of the isolated system."

cross_checks:
  - id: primera_segunda_ley_consistencia
    description:
      es: "Verificar que DeltaU nulo y S_ais mayor o igual a cero son simultáneamente consistentes con las condiciones del sistema aislado."
      en: "Verify that zero DeltaU and non-negative S_ais are simultaneously consistent with the isolated system conditions."
    condition: "DeltaU == 0 and S_ais >= 0"
    status_if_false: warning

error_patterns:
  - id: patron_fuga_termica
    detect_when: "DeltaU != 0 and Q_ais != 0"
    description:
      es: "Se detecta fuga térmica: [[Q_ais]] distinto de cero produce [[DeltaU]] distinto de cero. La frontera no es adiabática."
      en: "Thermal leakage detected: non-zero [[Q_ais]] produces non-zero [[DeltaU]]. The boundary is not adiabatic."
  - id: patron_fuga_mecanica
    detect_when: "DeltaU != 0 and W_ais != 0"
    description:
      es: "Se detecta fuga mecánica: [[W_ais]] distinto de cero produce [[DeltaU]] distinto de cero. La frontera no es rígida."
      en: "Mechanical leakage detected: non-zero [[W_ais]] produces non-zero [[DeltaU]]. The boundary is not rigid."

graph_binding:
  enabled: true
  preferred_type: Coord
  axes:
    x: proceso
    y: DeltaU
  series:
    - id: deltaU_vs_proceso
      magnitudes: [DeltaU]
      color: primary
    - id: S_vs_proceso
      magnitudes: [S_ais]
      color: secondary

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
