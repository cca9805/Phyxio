const e=`version: 1.0.0
leaf_id: equilibrio-termodinamico
ui:
  default_formula: equilibrio_termico
formulas:
  - id: equilibrio_termico
    title: { es: Condicion de equilibrio termico, en: Thermal equilibrium condition }
    equation: DeltaT = 0
    latex: "DeltaT = 0"
    rearrangements:
      - { target: DeltaT, equation: DeltaT = 0, latex: "DeltaT = 0" }
      - { target: T, equation: T_1 = T_2, latex: "T_1 = T_2" }
    category: fundamental
    relation_type: equilibrium_condition
    physical_meaning: { es: No hay flujo neto de calor entre partes en contacto cuando sus temperaturas se igualan., en: There is no net heat flow between contacting parts when their temperatures equalize. }
    constraints: [contacto termico, variables definidas, estado macroscopico]
    validity: { es: Valida para sistemas macroscopicos con temperatura bien definida y sin gradientes internos relevantes., en: Valid for macroscopic systems with defined temperature and no relevant internal gradients. }
    dimension_check: { es: "Diferencia de temperaturas con dimension \`[Theta]\`; el cero representa igualdad.", en: "Temperature difference with dimension \`[Theta]\`; zero represents equality." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [equilibrio_termico, gradiente_nulo, temperatura]
    result_semantics:
      target: DeltaT
      kind: equilibrium_diagnostic
      sign_meaning: { es: El signo indica que subsistema esta mas caliente., en: The sign indicates which subsystem is hotter. }
      absolute_value_meaning: { es: Distancia termica al equilibrio., en: Thermal distance from equilibrium. }
    domain_checks:
      - { condition: "abs(DeltaT) == 0", message: { es: "Equilibrio termico ideal.", en: "Ideal thermal equilibrium." } }
    coherence_checks:
      - { check: "DeltaT no nulo implica evolucion posible", es: "Aun no hay equilibrio termico.", en: "Thermal equilibrium has not yet been reached." }
    graph_implications:
      - { channel: thermal_equalization, mapping: "Desaparicion de flecha de calor." }
    pedagogical_triggers:
      - { error: "Declarar equilibrio con DeltaT apreciable", detection: "abs(DeltaT) > 0", message: { es: "Si hay diferencia de temperatura, queda impulso termico.", en: "If temperature differs, a thermal drive remains." } }

  - id: igualdad_temperatura
    title: { es: Igualdad de temperatura de equilibrio, en: Equal temperature at equilibrium }
    equation: T_1 = T_2
    latex: "T_1 = T_2"
    rearrangements:
      - { target: T, equation: T_1 = T_2, latex: "T_1 = T_2" }
    category: diagnostic
    relation_type: intensive_equality
    physical_meaning: { es: Las partes en contacto termico comparten una temperatura comun cuando no queda flujo neto de calor., en: Parts in thermal contact share a common temperature when no net heat flow remains. }
    constraints: [contacto termico, temperatura definida, equilibrio local]
    validity: { es: Valida si cada parte puede describirse con una temperatura macroscopica., en: Valid if each part can be described by a macroscopic temperature. }
    dimension_check: { es: "Ambos lados tienen dimension \`[Theta]\`.", en: "Both sides have dimension \`[Theta]\`." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [temperatura_comun, equilibrio_termico]
    result_semantics:
      target: T
      kind: intensive_state
      sign_meaning: { es: "No aplica como signo; es igualdad de estado.", en: "Not a sign reading; it is a state equality." }
      absolute_value_meaning: { es: "Valor comun de temperatura en equilibrio.", en: "Common equilibrium temperature value." }
    domain_checks:
      - { condition: "T > 0", message: { es: "Temperatura absoluta fisicamente admisible.", en: "Physically admissible absolute temperature." } }
    coherence_checks:
      - { check: "T_1 igual a T_2 implica DeltaT nulo", es: "Consistente con el criterio termico.", en: "Consistent with the thermal criterion." }
    graph_implications:
      - { channel: thermal_channel, mapping: "Los indicadores termicos convergen al mismo valor." }
    pedagogical_triggers:
      - { error: "Usar dos temperaturas en un estado de equilibrio termico", detection: "T_1 != T_2", message: { es: "Si hay equilibrio termico, debe existir una temperatura comun.", en: "If thermal equilibrium holds, a common temperature must exist." } }

  - id: equilibrio_mecanico
    title: { es: Condicion de equilibrio mecanico, en: Mechanical equilibrium condition }
    equation: DeltaP = 0
    latex: "DeltaP = 0"
    rearrangements:
      - { target: DeltaP, equation: DeltaP = 0, latex: "DeltaP = 0" }
      - { target: P, equation: P_1 = P_2, latex: "P_1 = P_2" }
    category: fundamental
    relation_type: equilibrium_condition
    physical_meaning: { es: Una frontera movil no experimenta empuje neto cuando las presiones efectivas se equilibran., en: A movable boundary has no net push when effective pressures balance. }
    constraints: [frontera movil, presiones efectivas, fuerzas externas incluidas]
    validity: { es: Valida si las presiones relevantes y fuerzas externas sobre la frontera estan contabilizadas., en: Valid if relevant pressures and external forces on the boundary are accounted for. }
    dimension_check: { es: "Diferencia de presion con dimension \`[M L⁻¹ T⁻²]\`; el cero indica igualdad mecanica.", en: "Pressure difference with dimension \`[M L⁻¹ T⁻²]\`; zero indicates mechanical equality." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [equilibrio_mecanico, presion, frontera]
    result_semantics:
      target: DeltaP
      kind: equilibrium_diagnostic
      sign_meaning: { es: El signo indica sentido de empuje neto., en: The sign indicates net-push direction. }
      absolute_value_meaning: { es: Distancia mecanica al equilibrio., en: Mechanical distance from equilibrium. }
    domain_checks:
      - { condition: "abs(DeltaP) == 0", message: { es: "Equilibrio mecanico ideal.", en: "Ideal mechanical equilibrium." } }
    coherence_checks:
      - { check: "DeltaP no nulo mueve frontera si puede desplazarse", es: "Aun hay fuerza termodinamica mecanica.", en: "A mechanical thermodynamic force remains." }
    graph_implications:
      - { channel: pressure_arrow, mapping: "Flecha de empuje desaparece al equilibrar presiones." }
    pedagogical_triggers:
      - { error: "Ignorar peso o presion exterior", detection: "DeltaP != 0", message: { es: "Incluye presiones efectivas y fuerzas externas.", en: "Include effective pressures and external forces." } }

  - id: igualdad_presion
    title: { es: Igualdad de presion efectiva, en: Equal effective pressure }
    equation: P_1 = P_2
    latex: "P_1 = P_2"
    rearrangements:
      - { target: P, equation: P_1 = P_2, latex: "P_1 = P_2" }
    category: diagnostic
    relation_type: intensive_equality
    physical_meaning: { es: Una frontera movil queda sin empuje neto cuando las presiones efectivas de ambos lados se compensan., en: A movable boundary has no net push when effective pressures on both sides balance. }
    constraints: [frontera movil, presiones efectivas, equilibrio mecanico]
    validity: { es: Valida si la frontera puede moverse y se han incluido fuerzas externas equivalentes., en: Valid if the boundary can move and equivalent external forces have been included. }
    dimension_check: { es: "Ambos lados tienen dimension \`[M L⁻¹ T⁻²]\`.", en: "Both sides have dimension \`[M L⁻¹ T⁻²]\`." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [presion_comun, equilibrio_mecanico]
    result_semantics:
      target: P
      kind: intensive_state
      sign_meaning: { es: "No aplica como signo; es igualdad de presiones efectivas.", en: "Not a sign reading; it is equality of effective pressures." }
      absolute_value_meaning: { es: "Presion comun compatible con la frontera movil.", en: "Common pressure compatible with the movable boundary." }
    domain_checks:
      - { condition: "P > 0", message: { es: "Presion absoluta positiva.", en: "Positive absolute pressure." } }
    coherence_checks:
      - { check: "P_1 igual a P_2 implica DeltaP nulo", es: "Consistente con el criterio mecanico.", en: "Consistent with the mechanical criterion." }
    graph_implications:
      - { channel: pressure_arrow, mapping: "Los empujes opuestos se dibujan con igual peso visual." }
    pedagogical_triggers:
      - { error: "Olvidar presion externa", detection: "P_1 != P_2", message: { es: "Compara presiones efectivas, no solo lecturas internas.", en: "Compare effective pressures, not only internal readings." } }

  - id: equilibrio_material
    title: { es: Igualdad de potencial quimico, en: Equal chemical potential }
    equation: mu_1 = mu_2
    latex: "\\\\mu_1 = \\\\mu_2"
    rearrangements:
      - { target: mu, equation: mu_1 = mu_2, latex: "\\\\mu_1 = \\\\mu_2" }
    category: diagnostic
    relation_type: intensive_equality
    physical_meaning: { es: Si dos regiones pueden intercambiar materia, la transferencia neta se detiene cuando sus potenciales quimicos se igualan., en: If two regions can exchange matter, net transfer stops when their chemical potentials equalize. }
    constraints: [intercambio material permitido, especies definidas, temperatura y presion compatibles]
    validity: { es: Valida para equilibrio material de una especie bajo restricciones especificadas., en: Valid for material equilibrium of a species under specified constraints. }
    dimension_check: { es: "Ambos lados representan energia por cantidad de sustancia.", en: "Both sides represent energy per amount of substance." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, modelos, interpretacion]
    interpretation_tags: [potencial_quimico, equilibrio_material]
    result_semantics:
      target: mu
      kind: intensive_state
      sign_meaning: { es: "La diferencia de mu fija el sentido de difusion; la igualdad borra ese sentido.", en: "The difference in mu sets diffusion direction; equality removes that direction." }
      absolute_value_meaning: { es: "Potencial comun compatible con transferencia material nula.", en: "Common potential compatible with zero net material transfer." }
    domain_checks:
      - { condition: "mu_1 == mu_2", message: { es: "Equilibrio material ideal.", en: "Ideal material equilibrium." } }
    coherence_checks:
      - { check: "mu diferente implica transferencia neta posible", es: "Aun no hay equilibrio material.", en: "Material equilibrium has not yet been reached." }
    graph_implications:
      - { channel: material_channel, mapping: "La flecha de difusion desaparece." }
    pedagogical_triggers:
      - { error: "Confundir igualdad de concentracion con igualdad de mu", detection: "mu_1 != mu_2", message: { es: "La condicion general es igualdad de potencial quimico.", en: "The general condition is equality of chemical potential." } }

  - id: equilibrio_general
    title: { es: Afinidades nulas en equilibrio completo, en: Vanishing affinities at complete equilibrium }
    equation: A = 0
    latex: "A = 0"
    rearrangements:
      - { target: A, equation: A = 0, latex: "A = 0" }
    category: fundamental
    relation_type: equilibrium_condition
    physical_meaning: { es: En equilibrio termodinamico completo no queda impulso interno capaz de producir evolucion espontanea permitida., en: At complete thermodynamic equilibrium no internal drive remains capable of producing an allowed spontaneous evolution. }
    constraints: [sistema compatible con restricciones, procesos permitidos identificados]
    validity: { es: "Criterio general: depende de que variables puedan intercambiarse o relajarse.", en: "General criterion: depends on which variables can be exchanged or relaxed." }
    dimension_check: { es: "La dimension de [[A]] depende del proceso; la condicion de equilibrio es valor nulo.", en: "The dimension of [[A]] depends on the process; equilibrium condition is zero value." }
    calculable: false
    motivo_no_calculable: Requiere especificar el proceso generalizado y la variable conjugada.
    used_in: [teoria, modelos, interpretacion]
    interpretation_tags: [afinidad, equilibrio_completo, segunda_ley]
    result_semantics:
      target: A
      kind: generalized_drive
      sign_meaning: { es: El signo indica sentido espontaneo si el proceso esta permitido., en: The sign indicates spontaneous direction if the process is allowed. }
      absolute_value_meaning: { es: Intensidad del impulso hacia equilibrio., en: Strength of the drive toward equilibrium. }
    domain_checks:
      - { condition: "A == 0", message: { es: "No queda afinidad para ese proceso.", en: "No affinity remains for that process." } }
    coherence_checks:
      - { check: "A no nula implica no equilibrio completo", es: "Hay relajacion posible.", en: "Relaxation is still possible." }
    graph_implications:
      - { channel: affinity_meter, mapping: "Indicador central se apaga en equilibrio." }
    pedagogical_triggers:
      - { error: "Reducir equilibrio a temperatura solamente", detection: "A != 0", message: { es: "Tambien revisa presion y potencial quimico.", en: "Also check pressure and chemical potential." } }
`;export{e as default};
