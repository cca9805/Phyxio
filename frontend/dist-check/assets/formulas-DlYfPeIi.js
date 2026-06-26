const e=`version: 1
topic:
  id: trabajo-de-fuerzas-no-conservativas
  title:
    es: Trabajo de fuerzas no conservativas
    en: Work done by non-conservative forces
variables:
- id: Wnc
  symbol: W_{nc}
  name:
    es: trabajo no conservativo
    en: non-conservative work
  si_unit: J
- id: Emi
  symbol: E_{m,i}
  name:
    es: energia mecanica inicial
    en: initial mechanical energy
  si_unit: J
- id: Emf
  symbol: E_{m,f}
  name:
    es: energia mecanica final
    en: final mechanical energy
  si_unit: J
- id: dEm
  symbol: \\Delta E_m
  name:
    es: variacion de energia mecanica
    en: change in mechanical energy
  si_unit: J
- id: Ki
  symbol: K_i
  name:
    es: energia cinetica inicial
    en: initial kinetic energy
  si_unit: J
- id: Ui
  symbol: U_i
  name:
    es: energia potencial inicial
    en: initial potential energy
  si_unit: J
- id: Kf
  symbol: K_f
  name:
    es: energia cinetica final
    en: final kinetic energy
  si_unit: J
- id: Uf
  symbol: U_f
  name:
    es: energia potencial final
    en: final potential energy
  si_unit: J
formulas:
- id: balance_general_no_conservativo
  title:
    es: Balance general con trabajo no conservativo
    en: General balance with non-conservative work
  equation: Emf = Emi + Wnc
  latex: E_{m,f}=E_{m,i}+W_{nc}
  rearrangements:
  - target: Emf
    equation: Emf = Emi + Wnc
    latex: E_{m,f}=E_{m,i}+W_{nc}
  - target: Emi
    equation: Emi = Emf - Wnc
    latex: E_{m,i}=E_{m,f}-W_{nc}
  - target: Wnc
    equation: Wnc = Emf - Emi
    latex: W_{nc}=E_{m,f}-E_{m,i}
  constraints: []
  category: fundamental
  relation_type: energy_relation
  physical_meaning:
    es: Expresa que el trabajo no conservativo modifica la energia mecanica disponible entre dos estados.
    en: It states that non-conservative work changes the mechanical energy available between two states.
  validity:
    es: Valida cuando el sistema esta bien delimitado y las energias inicial y final se comparan en el mismo modelo.
    en: Valid when the system is clearly defined and initial and final energies are compared within the same model.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - balances energeticos con fuerzas no conservativas
  interpretation_tags:
  - trabajo
  - energia
  - no-conservativo
  result_semantics:
    target: Emf
    meaning: El resultado muestra cuanta energia mecanica queda despues de sumar el trabajo no conservativo.
  domain_checks:
  - expr: 'true'
    message:
      es: Verifica que el signo de Wnc responda al agente no conservativo descrito.
      en: Check that the sign of Wnc matches the non-conservative agent being modeled.
  coherence_checks:
  - expr: 'true'
    message:
      es: Comprueba que Emi, Emf y Wnc compartan unidades de energia.
      en: Check that Emi, Emf, and Wnc all use energy units.
  graph_implications:
  - La grafica debe mostrar que la energia mecanica sube si Wnc es positivo y baja si Wnc es negativo.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Decide primero si el proceso gana o pierde energia mecanica antes de sustituir numeros.
      en: Decide first whether the process gains or loses mechanical energy before substituting numbers.
- id: trabajo_no_conservativo_por_estados
  title:
    es: Trabajo no conservativo entre estados
    en: Non-conservative work between states
  equation: Wnc = (Kf + Uf) - (Ki + Ui)
  latex: W_{nc}=(K_f+U_f)-(K_i+U_i)
  rearrangements:
  - target: Wnc
    equation: Wnc = (Kf + Uf) - (Ki + Ui)
    latex: W_{nc}=(K_f+U_f)-(K_i+U_i)
  - target: Kf
    equation: Kf = Ki + Ui + Wnc - Uf
    latex: K_f=K_i+U_i+W_{nc}-U_f
  - target: Uf
    equation: Uf = Ki + Ui + Wnc - Kf
    latex: U_f=K_i+U_i+W_{nc}-K_f
  constraints: []
  category: fundamental
  relation_type: energy_relation
  physical_meaning:
    es: Descompone el balance en energias cineticas y potenciales de los estados inicial y final.
    en: It decomposes the balance into the kinetic and potential energies of the initial and final states.
  validity:
    es: Valida cuando las contribuciones cineticas y potenciales relevantes estan identificadas de forma consistente.
    en: Valid when the relevant kinetic and potential contributions are identified consistently.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - comparacion explicita de estados energeticos
  interpretation_tags:
  - estados
  - balance
  - energia
  result_semantics:
    target: Wnc
    meaning: El resultado cuantifica el aporte o la perdida mecanica causada por interacciones no conservativas.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que no falte ninguna energia de estado relevante.
      en: Check that no relevant state-energy contribution is missing.
  coherence_checks:
  - expr: 'true'
    message:
      es: Si el sistema es conservativo, esta expresion debe devolver Wnc igual a cero.
      en: If the system is conservative, this expression must return Wnc equal to zero.
  graph_implications:
  - La lectura por estados debe conectar el salto de energia mecanica con el valor de Wnc.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Usa esta forma cuando el enunciado separa energia cinetica y potencial en ambos estados.
      en: Use this form when the statement separates kinetic and potential energy in both states.
- id: energia_mecanica_inicial_componentes
  title:
    es: Energia mecanica inicial por componentes
    en: Initial mechanical energy by components
  equation: Emi = Ki + Ui
  latex: E_{m,i}=K_i+U_i
  rearrangements:
  - target: Emi
    equation: Emi = Ki + Ui
    latex: E_{m,i}=K_i+U_i
  constraints:
  - expr: Ki >= 0
    message:
      es: Ki debe ser no negativa.
      en: Ki must be non-negative.
  category: auxiliary
  relation_type: energy_relation
  physical_meaning:
    es: Agrupa en el estado inicial la energia cinetica y la energia potencial relevantes.
    en: It groups the relevant initial kinetic and potential energies.
  validity:
    es: Valida si Ki y Ui se han definido respecto al mismo sistema y referencia.
    en: Valid if Ki and Ui refer to the same system and reference.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - construccion de Emi
  interpretation_tags:
  - estado-inicial
  - energia
  result_semantics:
    target: Emi
    meaning: El resultado fija la energia mecanica de partida del proceso.
  domain_checks:
  - expr: 'true'
    message:
      es: Revisa que la referencia de energia potencial sea coherente con el estado final.
      en: Check that the potential-energy reference is coherent with the final state.
  coherence_checks:
  - expr: 'true'
    message:
      es: Ki y Ui deben sumarse como energias del mismo estado.
      en: Ki and Ui must be added as energies of the same state.
  graph_implications:
  - Emi actua como nivel inicial de la curva de energia mecanica.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: No mezcles datos iniciales con datos finales en la misma suma.
      en: Do not mix initial and final data in the same sum.
- id: energia_mecanica_final_componentes
  title:
    es: Energia mecanica final por componentes
    en: Final mechanical energy by components
  equation: Emf = Kf + Uf
  latex: E_{m,f}=K_f+U_f
  rearrangements:
  - target: Emf
    equation: Emf = Kf + Uf
    latex: E_{m,f}=K_f+U_f
  constraints:
  - expr: Kf >= 0
    message:
      es: Kf debe ser no negativa.
      en: Kf must be non-negative.
  category: auxiliary
  relation_type: energy_relation
  physical_meaning:
    es: Agrupa en el estado final la energia cinetica y la energia potencial relevantes.
    en: It groups the relevant final kinetic and potential energies.
  validity:
    es: Valida si Kf y Uf describen el mismo estado final del sistema.
    en: Valid if Kf and Uf describe the same final state of the system.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - construccion de Emf
  interpretation_tags:
  - estado-final
  - energia
  result_semantics:
    target: Emf
    meaning: El resultado fija la energia mecanica que queda al terminar el proceso.
  domain_checks:
  - expr: 'true'
    message:
      es: Revisa que el estado final corresponda realmente al instante pedido.
      en: Check that the final state corresponds to the requested instant.
  coherence_checks:
  - expr: 'true'
    message:
      es: Kf y Uf deben pertenecer al mismo cierre energetico.
      en: Kf and Uf must belong to the same energy closure.
  graph_implications:
  - Emf actua como nivel final de la curva de energia mecanica.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Identifica si la energia final es mayor o menor que la inicial antes de cerrar el balance.
      en: Identify whether final energy is larger or smaller than initial energy before closing the balance.
- id: variacion_energia_mecanica_no_conservativa
  title:
    es: Variacion de energia mecanica por trabajo no conservativo
    en: Mechanical-energy change due to non-conservative work
  equation: dEm = Wnc
  latex: \\Delta E_m=W_{nc}
  rearrangements:
  - target: dEm
    equation: dEm = Wnc
    latex: \\Delta E_m=W_{nc}
  - target: Wnc
    equation: Wnc = dEm
    latex: W_{nc}=\\Delta E_m
  constraints: []
  category: fundamental
  relation_type: energy_relation
  physical_meaning:
    es: Resume el nexo causal entre trabajo no conservativo y cambio firmado de energia mecanica.
    en: It summarizes the causal link between non-conservative work and signed mechanical-energy change.
  validity:
    es: Valida cuando dEm representa la diferencia Emf menos Emi del mismo sistema.
    en: Valid when dEm represents Emf minus Emi for the same system.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - lectura conceptual del signo de la variacion energetica
  interpretation_tags:
  - variacion
  - energia
  - signo
  result_semantics:
    target: dEm
    meaning: El resultado indica si la energia mecanica aumenta, disminuye o permanece constante.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que una perdida mecanica se lea con dEm negativa y Wnc negativo.
      en: Check that a mechanical loss is read with negative dEm and negative Wnc.
  coherence_checks:
  - expr: 'true'
    message:
      es: dEm debe coincidir con Emf menos Emi.
      en: dEm must match Emf minus Emi.
  graph_implications:
  - El signo de la pendiente energetica debe concordar con el signo de Wnc.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Usa dEm para traducir el balance algebraico a una lectura fisica inmediata.
      en: Use dEm to translate the algebraic balance into an immediate physical reading.
- id: relacion_completa_entre_estados
  title:
    es: Relacion completa entre estados
    en: Complete state-to-state relation
  equation: Kf + Uf = Ki + Ui + Wnc
  latex: K_f+U_f=K_i+U_i+W_{nc}
  rearrangements:
  - target: Kf
    equation: Kf = Ki + Ui + Wnc - Uf
    latex: K_f=K_i+U_i+W_{nc}-U_f
  - target: Uf
    equation: Uf = Ki + Ui + Wnc - Kf
    latex: U_f=K_i+U_i+W_{nc}-K_f
  constraints: []
  category: operational
  relation_type: energy_relation
  physical_meaning:
    es: Integra en una sola expresion las energias de ambos estados y el efecto total de las fuerzas no conservativas.
    en: It integrates both state energies and the total effect of non-conservative forces into one expression.
  validity:
    es: Valida para problemas entre dos estados definidos con el mismo sistema y referencias energeticas compatibles.
    en: Valid for two-state problems defined for the same system with compatible energy references.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - resolucion directa de problemas de estado inicial y final
  interpretation_tags:
  - balance
  - estados
  - resolucion
  result_semantics:
    target: Kf
    meaning: El resultado permite cerrar una magnitud final cuando el trabajo no conservativo ya esta identificado.
  domain_checks:
  - expr: 'true'
    message:
      es: Confirma que todas las magnitudes pertenecen al mismo tramo del proceso.
      en: Confirm that all quantities belong to the same segment of the process.
  coherence_checks:
  - expr: 'true'
    message:
      es: Si Wnc es cero, la relacion debe recuperar el balance conservativo.
      en: If Wnc is zero, the relation must recover the conservative balance.
  graph_implications:
  - La diferencia entre niveles inicial y final debe coincidir con el trabajo no conservativo acumulado.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Es la forma mas util cuando el problema pide despejar una energia final concreta.
      en: It is the most useful form when the problem asks for a specific final energy.
ui:
  default_formula: balance_general_no_conservativo
  groups:
  - title:
      es: Balance general
      en: General balance
    items:
    - balance_general_no_conservativo
    - variacion_energia_mecanica_no_conservativa
  - title:
      es: Estados energeticos
      en: Energy states
    items:
    - energia_mecanica_inicial_componentes
    - energia_mecanica_final_componentes
    - trabajo_no_conservativo_por_estados
    - relacion_completa_entre_estados
`;export{e as default};
