const e=`version: 5
topic:
  id: coherencia
  title:
    es: Coherencia
    en: Coherence

formulas:
  - id: longitud_coherencia
    title: { es: Longitud de coherencia temporal, en: Temporal coherence length }
    equation: L_c = c * tau_c
    latex: L_c = c \\cdot \\tau_c
    category: fundamental
    relation_type: propagation_relation
    physical_meaning: { es: Convierte estabilidad temporal de fase en distancia de coherencia., en: Converts temporal phase stability into coherence distance. }
    constraints: [c > 0, tau_c > 0]
    validity: { es: Valida para propagacion en aire o vacio como primera aproximacion., en: Valid for propagation in air or vacuum as a first approximation. }
    dimension_check: "[L] = [L T^-1] * [T]"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[c]] y [[tau_c]].", en: "Requires [[c]] and [[tau_c]]." }
    used_in: [escala_coherencia]
    interpretation_tags: [coherencia_temporal, longitud]
    result_semantics:
      target: L_c
      kind: core_physical_quantity
      sign_meaning: { es: La longitud de coherencia es positiva., en: Coherence length is positive. }
      absolute_value_meaning: { es: Distancia maxima aproximada para mantener interferencia estable., en: Approximate maximum distance for keeping stable interference. }
    domain_checks:
      - condition: "tau_c > 0"
        message: { es: "El tiempo de coherencia debe ser positivo.", en: "Coherence time must be positive." }
        severity: error
    coherence_checks:
      - condition: "L_c > 0"
        message: { es: "La longitud de coherencia debe ser positiva.", en: "Coherence length must be positive." }
        severity: error
    graph_implications: { es: "Fija la escala que se compara con [[Delta_L]].", en: "Sets the scale compared with [[Delta_L]]." }
    pedagogical_triggers: [confundir_duracion_y_coherencia]
    rearrangements:
      - target: L_c
        equation: L_c = c * tau_c
        latex: L_c = c \\cdot \\tau_c
      - target: tau_c
        equation: tau_c = L_c / c
        latex: \\tau_c = \\frac{L_c}{c}
      - target: c
        equation: c = L_c / tau_c
        latex: c = \\frac{L_c}{\\tau_c}
    variables: [L_c, c, tau_c]

  - id: coherencia_relativa
    title: { es: Coherencia relativa por desajuste de camino, en: Relative coherence from path mismatch }
    equation: C_rel = L_c / (L_c + Delta_L)
    latex: C_{rel} = \\frac{L_c}{L_c + \\Delta L}
    category: derived
    relation_type: model_relation
    physical_meaning: { es: Estima como cae la coherencia observable al crecer la diferencia de camino., en: Estimates how observable coherence falls as path difference grows. }
    constraints: [L_c > 0, Delta_L >= 0]
    validity: { es: Modelo pedagogico monotono para comparar escalas de camino y coherencia., en: Monotonic pedagogical model for comparing path and coherence scales. }
    dimension_check: "[1] = [L] / [L]"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[L_c]] y [[Delta_L]].", en: "Requires [[L_c]] and [[Delta_L]]." }
    used_in: [franjas_visibles]
    interpretation_tags: [contraste, camino]
    result_semantics:
      target: C_rel
      kind: core_physical_quantity
      sign_meaning: { es: La coherencia relativa es no negativa., en: Relative coherence is nonnegative. }
      absolute_value_meaning: { es: Indicador de supervivencia de franjas por desajuste de camino., en: Indicator of fringe survival under path mismatch. }
    domain_checks:
      - condition: "Delta_L >= 0"
        message: { es: "La diferencia de camino debe ser no negativa.", en: "Path difference must be nonnegative." }
        severity: error
    coherence_checks:
      - condition: "C_rel >= 0"
        message: { es: "La coherencia relativa debe ser no negativa.", en: "Relative coherence must be nonnegative." }
        severity: error
    graph_implications: { es: "Genera una curva decreciente de [[C_rel]] frente a [[Delta_L]].", en: "Generates a decreasing curve of [[C_rel]] versus [[Delta_L]]." }
    pedagogical_triggers: [camino_mayor_que_coherencia]
    rearrangements:
      - target: C_rel
        equation: C_rel = L_c / (L_c + Delta_L)
        latex: C_{rel} = \\frac{L_c}{L_c + \\Delta L}
      - target: Delta_L
        equation: Delta_L = L_c * (1 - C_rel) / C_rel
        latex: \\Delta L = \\frac{L_c(1-C_{rel})}{C_{rel}}
      - target: L_c
        equation: L_c = C_rel * Delta_L / (1 - C_rel)
        latex: L_c = \\frac{C_{rel}\\Delta L}{1-C_{rel}}
    variables: [C_rel, L_c, Delta_L]

  - id: visibilidad_franjas
    title: { es: Visibilidad de franjas, en: Fringe visibility }
    equation: V = (I_max - I_min) / (I_max + I_min)
    latex: V = \\frac{I_{max}-I_{min}}{I_{max}+I_{min}}
    category: experimental
    relation_type: measurement_relation
    physical_meaning: { es: Mide el contraste observable entre franjas brillantes y oscuras., en: Measures observable contrast between bright and dark fringes. }
    constraints: [I_max > 0, I_min >= 0, I_max >= I_min]
    validity: { es: Valida cuando maximos y minimos se miden con el mismo detector y fondo controlado., en: Valid when maxima and minima are measured with the same detector and controlled background. }
    dimension_check: "[1] = [M T^-3] / [M T^-3]"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[I_max]] e [[I_min]].", en: "Requires [[I_max]] and [[I_min]]." }
    used_in: [contraste_experimental]
    interpretation_tags: [visibilidad, franjas]
    result_semantics:
      target: V
      kind: core_physical_quantity
      sign_meaning: { es: La visibilidad se interpreta entre cero y uno., en: Visibility is interpreted between zero and one. }
      absolute_value_meaning: { es: Contraste experimental del patron de interferencia., en: Experimental contrast of the interference pattern. }
    domain_checks:
      - condition: "I_max >= I_min"
        message: { es: "El maximo debe ser mayor o igual que el minimo.", en: "The maximum must be greater than or equal to the minimum." }
        severity: error
    coherence_checks:
      - condition: "V >= 0"
        message: { es: "La visibilidad debe ser no negativa.", en: "Visibility must be nonnegative." }
        severity: error
    graph_implications: { es: "Relaciona coherencia con contraste medido en franjas.", en: "Relates coherence to measured fringe contrast." }
    pedagogical_triggers: [confundir_visibilidad_intensidad]
    rearrangements:
      - target: V
        equation: V = (I_max - I_min) / (I_max + I_min)
        latex: V = \\frac{I_{max}-I_{min}}{I_{max}+I_{min}}
    variables: [V, I_max, I_min]

ui:
  default_formula: coherencia_relativa
  groups:
    - title: { es: Coherencia y franjas, en: Coherence and fringes }
      items: [longitud_coherencia, coherencia_relativa, visibilidad_franjas]
`;export{e as default};
