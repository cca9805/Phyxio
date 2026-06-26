const e=`version: 1.0.0
leaf_id: formulacion-de-clausius
ui:
  default_formula: flujo_calor_clausius
formulas:
  - id: flujo_calor_clausius
    title:
      es: Flujo espontaneo de calor (Enunciado de Clausius)
      en: Spontaneous heat flow (Clausius Statement)
    equation: Q > 0 cuando T_A > T_B
    latex: "Q > 0, T_A > T_B"
    rearrangements:
      - target: Q
        equation: Q > 0 si T_A > T_B
        latex: "Q > 0, T_A > T_B"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: El calor fluye espontaneamente de los cuerpos a mayor temperatura hacia los de menor temperatura. Este flujo unidireccional define la irreversibilidad termica fundamental.
      en: Heat flows spontaneously from bodies at higher temperature toward those at lower temperature. This unidirectional flow defines fundamental thermal irreversibility.
    constraints:
      - Proceso espontaneo sin trabajo externo
      - Sistemas en contacto termico
      - Temperaturas bien definidas
    validity:
      es: Válido para todos los procesos termicos macroscopicos espontaneos. No aplica a procesos microscopicos reversibles o con fluctuaciones cuanticas.
      en: Valid for all spontaneous macroscopic thermal processes. Does not apply to reversible microscopic processes or quantum fluctuations.
    dimension_check:
      es: Q tiene dimensiones de energia [M L² T⁻²]. La condicion T_A > T_B es adimensional.
      en: Q has dimensions of energy [M L² T⁻²]. The condition T_A > T_B is dimensionless.
    calculable: false
    motivo_no_calculable: Es una declaracion cualitativa de principio fisico, no una formula cuantitativa.
    used_in:
      - Analisis de direccion de procesos termicos
      - Determinacion de equilibrio termico
      - Diseno de sistemas termicos
    interpretation_tags:
      - irreversibilidad
      - direccion_procesos
      - equilibrio_termico
      - flujo_calor
    result_semantics:
      target: Q
      kind: directional_flow
      sign_meaning:
        es: El signo de Q indica la direccion del flujo respecto al sistema considerado.
        en: The sign of Q indicates the direction of flow relative to the considered system.
      absolute_value_meaning:
        es: Magnitud del calor transferido durante el proceso.
        en: Magnitude of heat transferred during the process.
    domain_checks:
      - condition: T_A > 0 and T_B > 0
        message:
          es: Las temperaturas absolutas deben ser positivas.
          en: Absolute temperatures must be positive.
      - condition: T_A == T_B
        message:
          es: Equilibrio termico alcanzado. No hay flujo neto de calor.
          en: Thermal equilibrium reached. No net heat flow.
    coherence_checks:
      - check: Si T_A > T_B, entonces Q fluye A -> B
        es: Coherente con enunciado de Clausius
        en: Consistent with Clausius statement
      - check: Si T_A < T_B, entonces Q fluye B -> A
        es: Coherente con enunciado de Clausius (flujo inverso espontaneo)
        en: Consistent with Clausius statement (spontaneous reverse flow)
    graph_implications:
      - channel: heat_flow_arrow
        mapping: Direccion del vector de flujo de calor
      - channel: temperature_indicator
        mapping: Color o posicion indica T_A vs T_B
    pedagogical_triggers:
      - error: "Flujo Q de frio a caliente sin trabajo"
        detection: Q > 0 cuando T_A < T_B sin W
        message:
          es: "Violacion del enunciado de Clausius: el calor no fluye espontaneamente de frio a caliente."
          en: "Violation of Clausius statement: heat does not flow spontaneously from cold to hot."

  - id: trabajo_reversion_clausius
    title:
      es: Trabajo necesario para revertir flujo termico
      en: Work required to reverse heat flow
    equation: W_min = Q * (T_A - T_B) / T_B
    latex: "W_{\\\\text{min}} = Q \\\\cdot \\\\frac{T_A - T_B}{T_B}"
    rearrangements:
      - target: W_min
        equation: W_min = Q * (T_A - T_B) / T_B
        latex: "W_{\\\\text{min}} = Q \\\\cdot \\\\frac{T_A - T_B}{T_B}"
      - target: Q
        equation: Q = W_min * T_B / (T_A - T_B)
        latex: "Q = W_{\\\\text{min}} \\\\cdot \\\\frac{T_B}{T_A - T_B}"
      - target: DeltaT
        equation: T_A - T_B = W_min * T_B / Q
        latex: "T_A - T_B = W_{\\\\text{min}} \\\\cdot \\\\frac{T_B}{Q}"
    category: derived
    relation_type: derived_relation
    physical_meaning:
      es: El trabajo minimo necesario para transferir una cantidad Q de calor desde una temperatura menor T_B hacia una mayor T_A, violando la direccion espontanea.
      en: Minimum work required to transfer a quantity Q of heat from a lower temperature T_B to a higher T_A, violating the spontaneous direction.
    constraints:
      - Proceso ciclico reversible
      - T_A > T_B
      - Q > 0
    validity:
      es: Aplica a refrigeradores y bombas de calor ideales. En dispositivos reales, se requiere mas trabajo debido a irreversibilidades.
      en: Applies to ideal refrigerators and heat pumps. In real devices, more work is required due to irreversibilities.
    dimension_check:
      es: W_min [J] = Q [J] * (T_A - T_B) [K] / T_B [K]. Las temperaturas se cancelan adimensionalmente.
      en: W_min [J] = Q [J] * (T_A - T_B) [K] / T_B [K]. Temperatures cancel dimensionlessly.
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Diseno de refrigeradores
      - Bombas de calor
      - Analisis de eficiencia de ciclo inverso
    interpretation_tags:
      - trabajo_minimo
      - refrigeracion
      - bomba_calor
      - ciclo_inverso
    result_semantics:
      target: W_min
      kind: energy_required
      sign_meaning:
        es: Siempre positivo; representa trabajo que debe suministrarse al sistema.
        en: Always positive; represents work that must be supplied to the system.
      absolute_value_meaning:
        es: Energia minima necesaria para forzar el flujo inverso de calor.
        en: Minimum energy required to force reverse heat flow.
    domain_checks:
      - condition: T_A > T_B
        message:
          es: La temperatura del foco caliente debe ser mayor que la del frio.
          en: Hot reservoir temperature must be greater than cold reservoir temperature.
      - condition: Q > 0
        message:
          es: La cantidad de calor a transferir debe ser positiva.
          en: The amount of heat to transfer must be positive.
      - condition: W_min >= 0
        message:
          es: El trabajo requerido no puede ser negativo.
          en: Required work cannot be negative.
    coherence_checks:
      - check: W_min proporcional a Q
        es: Mayor cantidad de calor requiere mas trabajo
        en: Greater heat quantity requires more work
      - check: W_min aumenta con (T_A - T_B)
        es: Mayor diferencia de temperatura requiere mas trabajo
        en: Greater temperature difference requires more work
      - check: W_min disminuye cuando T_B aumenta (con DeltaT fijo)
        es: A mayor temperatura del sumidero, menor trabajo requerido
        en: Higher sink temperature requires less work
    graph_implications:
      - channel: work_input_indicator
        mapping: Magnitud visual proporcional a W_min
      - channel: temperature_difference_indicator
        mapping: Relacion con (T_A - T_B)
    pedagogical_triggers:
      - error: "W negativo (producir trabajo al revertir flujo)"
        detection: W_min < 0
        message:
          es: "Imposible: revertir el flujo termico requiere aporte de trabajo, no lo produce."
          en: "Impossible: reversing heat flow requires work input, does not produce it."
      - error: "T_A <= T_B con W > 0"
        detection: T_A <= T_B and W > 0
        message:
          es: "Incoherencia: si T_A <= T_B, el flujo espontaneo ya va en la direccion deseada."
          en: "Inconsistency: if T_A <= T_B, spontaneous flow already goes in the desired direction."

  - id: eficiencia_carnot_refrigeracion
    title:
      es: Coeficiente de eficiencia de refrigeracion (Carnot)
      en: Refrigeration efficiency coefficient (Carnot)
    equation: COP_R = T_B / (T_A - T_B)
    latex: "COP_R = T_B/(T_A - T_B)"
    rearrangements:
      - target: COP_R
        equation: COP_R = T_B / (T_A - T_B)
        latex: "COP_R = T_B/(T_A - T_B)"
      - target: T_B
        equation: T_B = COP_R * (T_A - T_B)
        latex: "T_B = COP_R * (T_A - T_B)"
      - target: DeltaT
        equation: T_A - T_B = T_B / COP_R
        latex: "T_A - T_B = T_B/COP_R"
    category: derived
    relation_type: derived_relation
    physical_meaning:
      es: Relacion entre el calor extraido del foco frio y el trabajo necesario. Mayor COP implica mejor eficiencia energetica del refrigerador.
      en: Ratio between heat extracted from cold reservoir and required work. Higher COP implies better energy efficiency of the refrigerator.
    constraints:
      - Ciclo reversible de Carnot
      - T_A > T_B > 0
    validity:
      es: Limite teorico maximo. Dispositivos reales tienen COP inferior debido a irreversibilidades.
      en: Theoretical maximum limit. Real devices have lower COP due to irreversibilities.
    dimension_check:
      es: COP_R es adimensional [1] = [K] / [K].
      en: COP_R is dimensionless [1] = [K] / [K].
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Evaluacion de refrigeradores
      - Comparacion de eficiencias
      - Diseno de sistemas de frio
    interpretation_tags:
      - eficiencia_refrigeracion
      - limite_carnot
      - COP
      - rendimiento
    result_semantics:
      target: COP_R
      kind: efficiency_coefficient
      sign_meaning:
        es: Siempre positivo. Valores tipicos entre 1 y 10 para aplicaciones domesticas.
        en: Always positive. Typical values between 1 and 10 for domestic applications.
      absolute_value_meaning:
        es: Calor extraido por unidad de trabajo invertido. COP_R = 3 significa extraer 3 J de calor por cada J de trabajo.
        en: Heat extracted per unit of work invested. COP_R = 3 means extracting 3 J of heat per J of work.
    domain_checks:
      - condition: T_A > T_B
        message:
          es: Se requiere gradiente termico positivo.
          en: Positive thermal gradient required.
      - condition: T_B > 0
        message:
          es: La temperatura del foco frio debe ser positiva.
          en: Cold reservoir temperature must be positive.
      - condition: COP_R > 0
        message:
          es: El coeficiente de eficiencia debe ser positivo.
          en: Efficiency coefficient must be positive.
    coherence_checks:
      - check: COP_R aumenta cuando T_B se acerca a T_A
        es: Cerca del equilibrio termico se requiere menos trabajo
        en: Near thermal equilibrium less work is required
      - check: COP_R disminuye cuando DeltaT aumenta
        es: Mayores diferencias de temperatura son mas dificiles de mantener
        en: Greater temperature differences are harder to maintain
    graph_implications:
      - channel: efficiency_indicator
        mapping: Color o barra proporcional a COP_R
      - channel: temperature_difference_indicator
        mapping: Relacion inversa con DeltaT
    pedagogical_triggers:
      - error: "COP_R < 1 (menos calor extraido que trabajo invertido)"
        detection: COP_R < 1
        message:
          es: "Advertencia: COP bajo indica refrigerador poco eficiente o condiciones extremas de operacion."
          en: "Warning: Low COP indicates inefficient refrigerator or extreme operating conditions."

  - id: entropia_transferencia
    title:
      es: Cambio de entropia en transferencia de calor
      en: Entropy change in heat transfer
    equation: Delta S = Q / T
    latex: "\\\\Delta S = \\\\frac{Q}{T}"
    rearrangements:
      - target: DeltaS
        equation: Delta S = Q / T
        latex: "\\\\Delta S = \\\\frac{Q}{T}"
      - target: Q
        equation: Q = T * Delta S
        latex: "Q = T \\\\cdot \\\\Delta S"
      - target: T
        equation: T = Q / Delta S
        latex: "T = \\\\frac{Q}{\\\\Delta S}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: La entropia es una medida de la irreversibilidad del proceso. En transferencia espontanea, la entropia total del universo aumenta.
      en: Entropy is a measure of process irreversibility. In spontaneous transfer, total universe entropy increases.
    constraints:
      - Proceso cuasi-estatico reversible
      - Temperatura constante durante transferencia
    validity:
      es: Define entropia en procesos reversibles. Para procesos irreversibles reales, Delta S_universo > 0.
      en: Defines entropy in reversible processes. For real irreversible processes, Delta S_universe > 0.
    dimension_check:
      es: Delta S [J/K] = Q [J] / T [K].
      en: Delta S [J/K] = Q [J] / T [K].
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Calculo de entropia
      - Analisis de irreversibilidad
      - Balance de segunda ley
    interpretation_tags:
      - entropia
      - irreversibilidad
      - segunda_ley
      - desorden
    result_semantics:
      target: DeltaS
      kind: entropy_change
      sign_meaning:
        es: Positivo cuando el sistema absorbe calor; negativo cuando lo cede.
        en: Positive when system absorbs heat; negative when it releases heat.
      absolute_value_meaning:
        es: Magnitud del cambio entropico asociado a la transferencia termica.
        en: Magnitude of entropy change associated with thermal transfer.
    domain_checks:
      - condition: T > 0
        message:
          es: La temperatura absoluta debe ser positiva.
          en: Absolute temperature must be positive.
      - condition: DeltaS != 0 implies Q != 0
        message:
          es: Sin transferencia de calor, no hay cambio de entropia en proceso reversible.
          en: Without heat transfer, there is no entropy change in reversible process.
    coherence_checks:
      - check: Delta S_universo >= 0
        es: El principio de aumento de entropia debe cumplirse siempre
        en: Entropy increase principle must always be satisfied
      - check: A mayor T, menor Delta S para Q fijo
        es: A temperaturas altas, la misma Q produce menos entropia
        en: At high temperatures, same Q produces less entropy
    graph_implications:
      - channel: entropy_indicator
        mapping: Magnitud visual proporcional a Delta S
    pedagogical_triggers:
      - error: "Delta S_universo < 0 (violacion segunda ley)"
        detection: Delta_S_universo < 0
        message:
          es: "Violacion de la segunda ley: la entropia del universo no puede disminuir."
          en: "Second law violation: universe entropy cannot decrease."
`;export{e as default};
