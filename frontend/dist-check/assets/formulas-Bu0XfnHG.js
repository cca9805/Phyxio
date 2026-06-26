const e=`formulas:

  - id: primer_principio_aislado
    title:
      es: Primer principio en sistema aislado
      en: First law for an isolated system
    equation: "DeltaU = Q_ais + W_ais"
    latex: "\\\\Delta U = Q + W"
    rearrangements:
      - target: DeltaU
        equation: "DeltaU = Q_ais + W_ais"
        latex: "\\\\Delta U = Q + W"
      - target: Q_ais
        equation: "Q_ais = DeltaU - W_ais"
        latex: "Q = \\\\Delta U - W"
      - target: W_ais
        equation: "W_ais = DeltaU - Q_ais"
        latex: "W = \\\\Delta U - Q"
    domain_checks:
      - "DeltaU == 0 si Q_ais == 0 y W_ais == 0"
      - "Q_ais == 0 para frontera adiabática verificada"
      - "W_ais == 0 para frontera rígida verificada"
    coherence_checks:
      - "DeltaU != 0 cuando Q_ais == 0 y W_ais == 0 indica error de modelado"
      - "DeltaU < 0 en sistema declarado aislado es físicamente sospechoso"
    graph_implications:
      - "Gráfica DeltaU vs tiempo: línea horizontal en cero para sistema aislado ideal"
      - "Cualquier pendiente en la gráfica indica violación del aislamiento"
    pedagogical_triggers:
      - "Si el alumno obtiene DeltaU distinto de cero, cuestionar si la frontera es realmente adiabática y rígida"
      - "Recordar que procesos internos no cambian DeltaU total del sistema aislado"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "En un sistema aislado, la variación de energía interna es siempre nula porque ni el calor ni el trabajo se intercambian con el entorno. La fórmula general del primer principio se reduce a [[DeltaU]] igual a cero cuando [[Q_ais]] y [[W_ais]] son ambos nulos."
      en: "In an isolated system, the change in internal energy is always zero because neither heat nor work is exchanged with the surroundings. The general first-law equation reduces to zero [[DeltaU]] when both [[Q_ais]] and [[W_ais]] are zero."
    constraints:
      - "Frontera perfectamente adiabática: [[Q_ais]] = 0"
      - "Frontera rígida e impermeable: [[W_ais]] = 0"
      - "Sin flujo de materia a través de la frontera"
    validity:
      es: "Válido para cualquier sistema macroscópico cuya frontera no permite transferencia de calor, trabajo ni materia. Idealmente aplicable; en la práctica, ningún sistema es perfectamente aislado."
      en: "Valid for any macroscopic system whose boundary allows no heat, work, or matter transfer. Ideally applicable; in practice, no system is perfectly isolated."
    dimension_check: "[M L^2 T^-2] = [M L^2 T^-2] + [M L^2 T^-2]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "verificación del aislamiento termodinámico"
      - "análisis energético de recipientes Dewar"
      - "modelado de universo termodinámico"
    interpretation_tags:
      - "balance_energetico"
      - "condicion_aislamiento"
      - "primer_principio"
    result_semantics:
      target: DeltaU
      kind: "balance_energetico"
      sign_meaning:
        es: "[[DeltaU]] siempre nulo en sistema aislado ideal indica que no hubo transferencia de energía. Un valor distinto de cero indica fuga o error en las suposiciones de frontera."
        en: "Zero [[DeltaU]] in an ideal isolated system indicates no energy transfer occurred. A non-zero value indicates leakage or an error in boundary assumptions."
      absolute_value_meaning:
        es: "El valor absoluto de [[DeltaU]] cuantifica la magnitud de cualquier fuga energética accidental respecto al estado inicial."
        en: "The absolute value of [[DeltaU]] quantifies the magnitude of any accidental energy leakage relative to the initial state."
    domain_checks:
      - "DeltaU == 0 si Q_ais == 0 y W_ais == 0"
      - "Q_ais == 0 para frontera adiabática verificada"
      - "W_ais == 0 para frontera rígida verificada"
    coherence_checks:
      - "DeltaU != 0 cuando Q_ais == 0 y W_ais == 0 indica error de modelado"
      - "DeltaU < 0 en sistema declarado aislado es físicamente sospechoso"
    graph_implications:
      - "Gráfica DeltaU vs tiempo: línea horizontal en cero para sistema aislado ideal"
      - "Cualquier pendiente en la gráfica indica violación del aislamiento"
    pedagogical_triggers:
      - "Si el alumno obtiene DeltaU distinto de cero, cuestionar si la frontera es realmente adiabática y rígida"
      - "Recordar que procesos internos (mezcla, reacción) no cambian DeltaU total del sistema aislado"

  - id: entropia_aislado
    title:
      es: Segundo principio en sistema aislado
      en: Second law for an isolated system
    equation: "S_ais >= 0"
    latex: "\\\\Delta S \\\\geq 0"
    rearrangements:
      - target: S_ais
        equation: "S_ais >= 0"
        latex: "\\\\Delta S \\\\geq 0"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La entropía de un sistema aislado nunca disminuye. Los procesos espontáneos producen un incremento de [[S_ais]], mientras que los procesos reversibles ideales mantienen la entropía constante. Esta desigualdad define la dirección temporal de los procesos."
      en: "The entropy of an isolated system never decreases. Spontaneous processes produce an increase in [[S_ais]], while ideal reversible processes keep entropy constant. This inequality defines the temporal direction of processes."
    constraints:
      - "Sistema perfectamente aislado: sin intercambio de Q ni W con el entorno"
      - "Aplicable a procesos macro y microscópicos bajo hipótesis estadística"
    validity:
      es: "Universal dentro del marco de la termodinámica clásica y estadística. No tiene excepciones conocidas en sistemas macroscópicos."
      en: "Universal within the framework of classical and statistical thermodynamics. No known exceptions in macroscopic systems."
    dimension_check: "[M L^2 T^-2 Theta^-1] >= 0"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "determinación de la dirección espontánea de procesos"
      - "clasificación de procesos reversibles e irreversibles"
      - "fundamento del segundo principio de la termodinámica"
    domain_checks:
      - "S_ais >= 0 siempre para sistema aislado"
      - "S_ais == 0 solo para proceso reversible ideal"
    coherence_checks:
      - "S_ais < 0 es señal de error en el cálculo o en la definición del sistema"
      - "S_ais muy grande sugiere proceso altamente irreversible; verificar condiciones"
    graph_implications:
      - "Gráfica S vs tiempo: monotónicamente creciente o constante"
      - "Descenso en la gráfica de S vs t indica error de modelado o sistema no aislado"
    pedagogical_triggers:
      - "Si el alumno obtiene DeltaS negativo, revisar si el sistema está realmente aislado"
      - "Distinguir entre S total del universo y S de subsistemas individuales"
    interpretation_tags:
      - "segundo_principio"
      - "irreversibilidad"
      - "flecha_del_tiempo"
    result_semantics:
      target: S_ais
      kind: "criterio_espontaneidad"
      sign_meaning:
        es: "[[S_ais]] mayor que cero indica proceso irreversible espontáneo. [[S_ais]] igual a cero indica proceso reversible ideal. Un valor negativo es imposible en sistema aislado."
        en: "[[S_ais]] greater than zero indicates a spontaneous irreversible process. Zero [[S_ais]] indicates an ideal reversible process. A negative value is impossible in an isolated system."
      absolute_value_meaning:
        es: "El valor de [[S_ais]] cuantifica el grado de irreversibilidad: mayor valor implica mayor desorden generado y menor posibilidad de recuperar el estado inicial."
        en: "The value of [[S_ais]] quantifies the degree of irreversibility: a larger value implies greater disorder generated and less chance of recovering the initial state."
    domain_checks:
      - "S_ais >= 0 siempre para sistema aislado"
      - "S_ais == 0 solo para proceso reversible ideal"
    coherence_checks:
      - "S_ais < 0 es señal de error en el cálculo o en la definición del sistema"
      - "S_ais muy grande sugiere proceso altamente irreversible; verificar condiciones"
    graph_implications:
      - "Gráfica S vs tiempo: monotónicamente creciente o constante"
      - "Descenso en la gráfica de S vs t indica error de modelado o sistema no aislado"
    pedagogical_triggers:
      - "Si el alumno obtiene DeltaS negativo, revisar si el sistema está realmente aislado o si confunde entropía del sistema con entropía del entorno"
      - "Distinguir entre S total del universo (siempre crece) y S de subsistemas individuales (puede decrecer si hay intercambio)"
`;export{e as default};
