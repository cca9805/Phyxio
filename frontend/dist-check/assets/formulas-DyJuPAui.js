const e=`- id: ley_lenz_faraday
  title:
    es: Ley de Lenz en la forma de Faraday
    en: Lenz law in Faraday form
  equation: "epsilon_ind = -N * DeltaPhi_B / Deltat"
  latex: "\\\\varepsilon_{ind} = -N\\\\,\\\\frac{\\\\Delta \\\\Phi_B}{\\\\Delta t}  % epsilon_ind N DeltaPhi_B Deltat"
  rearrangements:
    - target: epsilon_ind
      equation: "epsilon_ind = -N * DeltaPhi_B / Deltat"
      latex: "\\\\varepsilon_{ind} = -N\\\\,\\\\frac{\\\\Delta \\\\Phi_B}{\\\\Delta t}  % epsilon_ind N DeltaPhi_B Deltat"
    - target: DeltaPhi_B
      equation: "DeltaPhi_B = -epsilon_ind * Deltat / N"
      latex: "\\\\Delta \\\\Phi_B = -\\\\frac{\\\\varepsilon_{ind}\\\\,\\\\Delta t}{N}  % DeltaPhi_B epsilon_ind Deltat N"
    - target: Deltat
      equation: "Deltat = -N * DeltaPhi_B / epsilon_ind"
      latex: "\\\\Delta t = -\\\\frac{N\\\\,\\\\Delta \\\\Phi_B}{\\\\varepsilon_{ind}}  % Deltat N DeltaPhi_B epsilon_ind"
    - target: N
      equation: "N = -epsilon_ind * Deltat / DeltaPhi_B"
      latex: "N = -\\\\frac{\\\\varepsilon_{ind}\\\\,\\\\Delta t}{\\\\Delta \\\\Phi_B}  % N epsilon_ind Deltat DeltaPhi_B"
  category: fundamental
  relation_type: average_relation
  physical_meaning:
    es: "El signo negativo indica que la fem inducida se opone al cambio de flujo enlazado."
    en: "The negative sign indicates that induced emf opposes linked flux change."
  constraints:
    - circuito definido
    - normal de superficie elegida
    - intervalo temporal positivo
  validity:
    es: "Valida para leer polaridad media en un cambio finito de flujo."
    en: "Valid for reading average polarity in a finite flux change."
  dimension_check: "Wb dividido por s produce V; N es adimensional."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [lenz, polaridad, oposicion]
  result_semantics:
    target: epsilon_ind
    kind: signed_quantity
    sign_meaning:
      es: "El signo fija polaridad opuesta al cambio de flujo."
      en: "The sign fixes polarity opposite to flux change."
    absolute_value_meaning:
      es: "Mayor modulo indica mayor fem inducida, no cambio de regla de Lenz."
      en: "Larger magnitude indicates larger induced emf, not a change in Lenz rule."
  domain_checks:
    - id: dt_positive
      when: "Deltat > 0"
      status: ok
      message:
        es: "Intervalo positivo permite leer una fem media."
        en: "Positive interval allows reading an average emf."
  coherence_checks:
    - id: no_change_no_polarity
      when: "DeltaPhi_B == 0"
      status: ok
      message:
        es: "Sin cambio de flujo no hay polaridad inducida media."
        en: "Without flux change there is no average induced polarity."
  graph_implications:
    - "epsilon_ind tiene signo opuesto a DeltaPhi_B dividido por Deltat."
  pedagogical_triggers:
    - "No decir que la induccion se opone al campo; se opone al cambio."
- id: tasa_cambio_flujo
  title:
    es: Rapidez media de cambio de flujo
    en: Average flux-change rate
  equation: "r_Phi = DeltaPhi_B / Deltat"
  latex: "r_{\\\\Phi} = \\\\frac{\\\\Delta \\\\Phi_B}{\\\\Delta t}  % r_Phi DeltaPhi_B Deltat"
  rearrangements:
    - target: r_Phi
      equation: "r_Phi = DeltaPhi_B / Deltat"
      latex: "r_{\\\\Phi} = \\\\frac{\\\\Delta \\\\Phi_B}{\\\\Delta t}  % r_Phi DeltaPhi_B Deltat"
    - target: DeltaPhi_B
      equation: "DeltaPhi_B = r_Phi * Deltat"
      latex: "\\\\Delta \\\\Phi_B = r_{\\\\Phi}\\\\,\\\\Delta t  % DeltaPhi_B r_Phi Deltat"
    - target: Deltat
      equation: "Deltat = DeltaPhi_B / r_Phi"
      latex: "\\\\Delta t = \\\\frac{\\\\Delta \\\\Phi_B}{r_{\\\\Phi}}  % Deltat DeltaPhi_B r_Phi"
  category: derived
  relation_type: average_relation
  physical_meaning:
    es: "La rapidez de cambio de flujo resume el cambio que la induccion debe oponer."
    en: "Flux-change rate summarizes the change that induction must oppose."
  constraints:
    - intervalo temporal positivo
  validity:
    es: "Valida como pendiente media de flujo en el intervalo."
    en: "Valid as average flux slope over the interval."
  dimension_check: "Wb dividido por s produce Wb/s."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [pendiente, cambio]
  result_semantics:
    target: r_Phi
    kind: signed_quantity
    sign_meaning:
      es: "El signo indica si el flujo aumenta o disminuye."
      en: "The sign indicates whether flux increases or decreases."
    absolute_value_meaning:
      es: "Mayor modulo indica cambio de flujo mas rapido."
      en: "Larger magnitude indicates faster flux change."
  domain_checks:
    - id: finite_rate
      when: "Deltat > 0"
      status: ok
      message:
        es: "La rapidez media queda definida."
        en: "Average rate is defined."
  coherence_checks:
    - id: zero_rate
      when: "r_Phi == 0"
      status: ok
      message:
        es: "Rapidez nula implica ausencia de fem inducida media."
        en: "Zero rate implies absence of average induced emf."
  graph_implications:
    - "r_Phi es el eje de control para la polaridad inducida."
  pedagogical_triggers:
    - "Conservar el signo de r_Phi antes de aplicar Lenz."
- id: ley_lenz_tasa
  title:
    es: Oposicion de Lenz con rapidez de flujo
    en: Lenz opposition with flux rate
  equation: "epsilon_ind = -N * r_Phi"
  latex: "\\\\varepsilon_{ind} = -N\\\\,r_{\\\\Phi}  % epsilon_ind N r_Phi"
  rearrangements:
    - target: epsilon_ind
      equation: "epsilon_ind = -N * r_Phi"
      latex: "\\\\varepsilon_{ind} = -N\\\\,r_{\\\\Phi}  % epsilon_ind N r_Phi"
    - target: r_Phi
      equation: "r_Phi = -epsilon_ind / N"
      latex: "r_{\\\\Phi} = -\\\\frac{\\\\varepsilon_{ind}}{N}  % r_Phi epsilon_ind N"
    - target: N
      equation: "N = -epsilon_ind / r_Phi"
      latex: "N = -\\\\frac{\\\\varepsilon_{ind}}{r_{\\\\Phi}}  % N epsilon_ind r_Phi"
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: "La fem inducida tiene signo opuesto a la rapidez de cambio de flujo."
    en: "Induced emf has sign opposite to flux-change rate."
  constraints:
    - convencion de signo fija
    - espiras equivalentes
  validity:
    es: "Valida cuando r_Phi representa la variacion media por espira."
    en: "Valid when r_Phi represents average variation per turn."
  dimension_check: "Wb/s produce V al multiplicar por N."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion, grafico]
  interpretation_tags: [signo, oposicion]
  result_semantics:
    target: epsilon_ind
    kind: signed_quantity
    sign_meaning:
      es: "El signo de epsilon_ind debe ser opuesto al de r_Phi."
      en: "The sign of epsilon_ind must be opposite to r_Phi."
    absolute_value_meaning:
      es: "Mayor modulo indica respuesta mas intensa frente al cambio."
      en: "Larger magnitude indicates stronger response against the change."
  domain_checks:
    - id: N_positive
      when: "N > 0"
      status: ok
      message:
        es: "Numero de espiras positivo coherente."
        en: "Positive number of turns is coherent."
  coherence_checks:
    - id: sign_opposition
      when: "true"
      status: ok
      message:
        es: "La polaridad debe oponerse al signo de r_Phi."
        en: "Polarity must oppose the sign of r_Phi."
  graph_implications:
    - "La recta epsilon_ind frente a r_Phi tiene pendiente negativa."
  pedagogical_triggers:
    - "Leer la pendiente negativa como Lenz, no como perdida de energia."
- id: regla_signos_lenz
  title:
    es: Regla de signos de Lenz
    en: Lenz sign rule
  equation: "s_ind = -s_flujo"
  latex: "s_{ind} = -s_{\\\\Phi}  % s_ind s_flujo"
  rearrangements:
    - target: s_ind
      equation: "s_ind = -s_flujo"
      latex: "s_{ind} = -s_{\\\\Phi}  % s_ind s_flujo"
    - target: s_flujo
      equation: "s_flujo = -s_ind"
      latex: "s_{\\\\Phi} = -s_{ind}  % s_flujo s_ind"
  category: conceptual
  relation_type: constitutive_relation
  physical_meaning:
    es: "El sentido inducido es opuesto al sentido del cambio de flujo."
    en: "The induced sense is opposite to the sense of flux change."
  constraints:
    - normal elegida
    - signo de cambio definido
  validity:
    es: "Valida como regla conceptual de polaridad, no como calculo de modulo."
    en: "Valid as conceptual polarity rule, not as magnitude calculation."
  dimension_check: "Ambos signos son adimensionales."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [polaridad, direccion]
  result_semantics:
    target: s_ind
    kind: signed_direction
    sign_meaning:
      es: "El signo inducido debe ser contrario al cambio de flujo."
      en: "The induced sign must be contrary to flux change."
    absolute_value_meaning:
      es: "El modulo solo indica presencia de una orientacion inducida."
      en: "Magnitude only indicates presence of induced orientation."
  domain_checks:
    - id: sign_range
      when: "true"
      status: ok
      message:
        es: "La regla solo codifica signos conceptuales."
        en: "The rule only encodes conceptual signs."
  coherence_checks:
    - id: same_sign_error
      when: "s_ind == s_flujo"
      status: warning
      message:
        es: "Mismo signo sugiere que se perdio la oposicion de Lenz."
        en: "Same sign suggests Lenz opposition was lost."
  graph_implications:
    - "s_ind se refleja respecto a s_flujo."
  pedagogical_triggers:
    - "Distinguir sentido inducido de sentido del flujo existente."
`;export{e as default};
