const e=`version: 1
ui:
  default_formula: conservacion_mecanica
formulas:
- id: conservacion_mecanica
  title:
    es: Conservacion de energia mecanica
    en: Mechanical energy conservation
  equation: Ki + Ui = Kf + Uf
  latex: K_i + U_i = K_f + U_f
  rearrangements:
  - target: Kf
    equation: Kf = Ki + Ui - Uf
    latex: K_f = K_i + U_i - U_f
  - target: Uf
    equation: Uf = Ki + Ui - Kf
    latex: U_f = K_i + U_i - K_f
  category: fundamental
  relation_type: conservation_law
  physical_meaning:
    es: En ausencia de trabajo no conservativo, la energia mecanica total se mantiene entre estado inicial y final.
    en: In the absence of non-conservative work, total mechanical energy remains unchanged between initial and final states.
  constraints:
  - sistema bien definido
  - fuerzas disipativas despreciables o ausentes
  - referencia de energia potencial consistente
  validity:
    es: Válida para modelos mecánicos clásicos donde las fuerzas activas relevantes son conservativas.
    en: Valid in classical mechanical models where relevant active forces are conservative.
  dimension_check: todos los terminos expresan energia en julios
  calculable: true
  motivo_no_calculable: null
  used_in:
  - principio-de-conservacion
  interpretation_tags:
  - conservacion
  - energia-mecanica
  result_semantics:
    target: Kf
    kind: scalar
    sign_meaning:
      es: El signo de cada termino depende de la referencia elegida para U.
      en: Each term sign depends on the chosen reference for U.
    absolute_value_meaning:
      es: El valor absoluto cuantifica el reparto energetico entre estados.
      en: The absolute value quantifies energy partition between states.
  domain_checks:
  - expr: Ki + Ui >= 0
    message:
      es: Revisa si la energia inicial total fue definida de forma consistente.
      en: Check whether initial total energy was defined consistently.
  coherence_checks:
  - expr: 'true'
    message:
      es: Usa la misma cota de referencia para Ui y Uf.
      en: Use the same reference baseline for Ui and Uf.
  graph_implications:
  - En Coord, la suma K+U debe permanecer constante en modelo ideal.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Antes de sustituir numeros, confirma que no haya rozamiento neto.
      en: Before substituting values, confirm no net frictional dissipation exists.
- id: energia_mecanica_total
  title:
    es: Energia mecanica total
    en: Total mechanical energy
  equation: Em = K + U
  latex: E_m = K + U
  rearrangements:
  - target: Em
    equation: Em = K + U
    latex: E_m = K + U
  category: structural
  relation_type: definition
  physical_meaning:
    es: Define la energia mecanica como suma de contribuciones cinetica y potencial en un estado.
    en: Defines mechanical energy as the sum of kinetic and potential contributions at a given state.
  constraints:
  - definicion de estado mecanico
  - expresion de K y U adaptada al sistema
  - unidades SI coherentes
  validity:
    es: Siempre válida como definición dentro de mecánica clásica.
    en: Always valid as a definition in classical mechanics.
  dimension_check: ambos terminos en julios
  calculable: false
  motivo_no_calculable:
    es: Es una definicion general; para calcular Em se requiere especificar K y U del problema.
    en: It is a general definition; computing Em requires explicit K and U for the problem.
  used_in:
  - principio-de-conservacion
  interpretation_tags:
  - definicion
  - estado
  result_semantics:
    target: Em
    kind: scalar
    sign_meaning:
      es: El signo depende de la referencia de U y del convenio adoptado.
      en: The sign depends on the U reference and chosen convention.
    absolute_value_meaning:
      es: Representa el contenido energetico mecanico total del estado.
      en: Represents total mechanical energy content of the state.
  domain_checks:
  - expr: K >= 0
    message:
      es: La energia cinetica no puede ser negativa.
      en: Kinetic energy cannot be negative.
  coherence_checks:
  - expr: 'true'
    message:
      es: Evita mezclar expresiones de U con referencias incompatibles.
      en: Avoid mixing U expressions with incompatible reference baselines.
  graph_implications:
  - En representaciones Coord se visualiza como suma punto a punto de K y U.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Distingue entre definicion (Em=K+U) y ley de conservacion.
      en: Distinguish between definition (Em=K+U) and conservation law.
- id: balance_con_no_conservativas
  title:
    es: Balance con trabajo no conservativo
    en: Balance with non-conservative work
  equation: Wnc = (Kf + Uf) - (Ki + Ui)
  latex: W_{nc} = (K_f + U_f) - (K_i + U_i)
  rearrangements:
  - target: Wnc
    equation: Wnc = (Kf + Uf) - (Ki + Ui)
    latex: W_{nc} = (K_f + U_f) - (K_i + U_i)
  - target: Kf
    equation: Kf = Ki + Ui + Wnc - Uf
    latex: K_f = K_i + U_i + W_{nc} - U_f
  category: derived
  relation_type: energy_balance
  physical_meaning:
    es: Cuantifica el intercambio mecanico no conservativo que rompe la constancia de la energia mecanica.
    en: Quantifies non-conservative mechanical exchange that breaks constant mechanical energy.
  constraints:
  - estados inicial y final definidos
  - identificacion explicita de fuerzas disipativas
  - signos consistentes para trabajo
  validity:
    es: Válida para balances energéticos entre dos estados con aporte o disipación no conservativa.
    en: Valid for state-to-state energy balances with non-conservative input or dissipation.
  dimension_check: todos los terminos en julios
  calculable: true
  motivo_no_calculable: null
  used_in:
  - principio-de-conservacion
  interpretation_tags:
  - no-conservativo
  - disipacion
  result_semantics:
    target: Wnc
    kind: scalar
    sign_meaning:
      es: Wnc<0 suele indicar disipacion neta; Wnc>0 aporte externo.
      en: Wnc<0 usually indicates net dissipation; Wnc>0 external input.
    absolute_value_meaning:
      es: Mide la magnitud del intercambio no conservativo.
      en: Measures the magnitude of non-conservative exchange.
  domain_checks:
  - expr: 'true'
    message:
      es: Verifica que Ui y Uf usen la misma referencia potencial.
      en: Verify Ui and Uf use the same potential baseline.
  coherence_checks:
  - expr: 'true'
    message:
      es: Si Wnc es grande, revisa que no falte otra transferencia de energia.
      en: If Wnc is large, review whether another energy transfer was omitted.
  graph_implications:
  - En Coord, una variación de K+U se interpreta como Wnc acumulado.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: No impongas conservacion mecanica si ya identificaste rozamiento apreciable.
      en: Do not enforce mechanical conservation after identifying significant friction.
`;export{e as default};
