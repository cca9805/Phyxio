"""Fix all remaining validator issues for interruptores leaf."""
import re
import yaml
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

# ── 1. meta.yaml — add all missing fields ─────────────────────────────────────
(base / 'meta.yaml').write_text("""\
id: interruptores
type: leaf
orden: 298400
titulo: Interruptores
titulo_en: Switches
descripcion: 'Interruptores: maniobra ON/OFF, resistencia R_on y pérdida P_on = I² R_on.'
description_en: 'Switches: ON/OFF operation, resistance R_on and loss P_on = I2 R_on.'
nombre:
  es: Interruptores
  en: Switches
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  - EXTRACURRICULAR
  en:
  - Secondary
  - Upper Secondary
  - University
  - Extracurricular
icon: "\U0001f39b"
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/interruptores
area: fisica-clasica
bloque: electromagnetismo
subbloque: electricidad-domestica
parent_id: electricidad-domestica
graficos: []
physical_role:
  es: concepto físico
  en: physical concept
representacion_dominante: none
magnitud_dominante: P_on
dificultad: 2
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: '¿Cuánta energía disipa un interruptor real al conducir corriente y cuándo esa pérdida se convierte en un riesgo térmico?'
  en: 'How much energy does a real switch dissipate when conducting current, and when does that loss become a thermal risk?'
tags:
  es:
  - interruptor
  - resistencia ON
  - pérdida resistiva
  - circuito doméstico
  - maniobra
  - disipación
  en:
  - switch
  - ON resistance
  - resistive loss
  - domestic circuit
  - switching
  - dissipation
prerequisitos:
  - fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: Interpretación
      en: Interpretation
    show_summary: true
    show_physical_reading: true
    show_coherence: true
    show_model_validity: true
    show_graph_reading: false
    show_likely_errors: true
    show_next_step: true
  mini_graph:
    enabled: false
    preferred_type: none
  output_policy:
    show_formula_derivation: true
    show_graph: false
    show_interpretation: true
    max_inline_messages: 3
  dependencies:
    use_formulas: true
    use_magnitudes: true
    use_graph: false
""", encoding='utf-8')
print('meta.yaml OK')

# ── 2. magnitudes.yaml — add all required v5 fields ───────────────────────────
(base / 'magnitudes.yaml').write_text("""\
version: 2
magnitudes:
  - id: P
    symbol: P
    nombre:
      es: Potencia de la carga
      en: Load power
    descripcion:
      es: Potencia nominal del equipo conectado al interruptor.
      en: Nominal power of the device connected to the switch.
    unidad: W
    unidad_si: W
    dimension: M L^2 T^-3
    is_vector: false
    components: []
    category: energia_potencia
    physical_role:
      es: magnitud de entrada
      en: input quantity
    rol_fisico:
      es: magnitud de entrada
      en: input quantity
    used_in:
      - corriente
    common_mistake:
      es: Usar la potencia de standby en lugar de la nominal máxima.
      en: Using standby power instead of maximum nominal power.
    rango_tipico:
      min: 1
      max: 4000
      unidad: W
    typical_range:
      min: 1
      max: 4000
      unit: W
    sign_behavior:
      es: Siempre positivo.
      en: Always positive.
    zero_behavior:
      es: P = 0 implica equipo apagado o en standby.
      en: P = 0 implies device off or in standby.
    value_nature: continuo
    comportamiento: escalar positivo
    interpretation_role: input
    graph_binding:
      es: Eje horizontal en gráfico I vs P.
      en: Horizontal axis in I vs P graph.
    pedagogical_notes:
      es: Se lee directamente de la etiqueta del equipo.
      en: Read directly from the device label.
    pedagogical_note:
      es: Se lee directamente de la etiqueta del equipo.
      en: Read directly from the device label.

  - id: V
    symbol: V
    nombre:
      es: Tensión de alimentación
      en: Supply voltage
    descripcion:
      es: Tensión nominal de la instalación donde opera el interruptor.
      en: Nominal voltage of the installation where the switch operates.
    unidad: V
    unidad_si: V
    dimension: M L^2 T^-3 I^-1
    is_vector: false
    components: []
    category: electromagnetismo
    physical_role:
      es: parámetro de contexto
      en: context parameter
    rol_fisico:
      es: parámetro de contexto
      en: context parameter
    used_in:
      - corriente
    common_mistake:
      es: Usar 220 V en lugar de 230 V en instalaciones europeas modernas.
      en: Using 220 V instead of 230 V in modern European installations.
    rango_tipico:
      min: 12
      max: 400
      unidad: V
    typical_range:
      min: 12
      max: 400
      unit: V
    sign_behavior:
      es: Positivo en corriente alterna (valor eficaz).
      en: Positive in AC (RMS value).
    zero_behavior:
      es: V = 0 implica sin suministro eléctrico.
      en: V = 0 implies no electrical supply.
    value_nature: continuo
    comportamiento: escalar positivo
    interpretation_role: input
    graph_binding:
      es: Parámetro de escala en gráfico I vs P.
      en: Scale parameter in I vs P graph.
    pedagogical_notes:
      es: En instalaciones domésticas europeas es 230 V.
      en: In European domestic installations it is 230 V.
    pedagogical_note:
      es: En instalaciones domésticas europeas es 230 V.
      en: In European domestic installations it is 230 V.

  - id: I
    symbol: I
    nombre:
      es: Corriente de maniobra
      en: Switching current
    descripcion:
      es: Corriente que circula por los contactos del interruptor en estado ON.
      en: Current flowing through the switch contacts when in ON state.
    unidad: A
    unidad_si: A
    dimension: I
    is_vector: false
    components: []
    category: electromagnetismo
    physical_role:
      es: magnitud derivada
      en: derived quantity
    rol_fisico:
      es: magnitud derivada
      en: derived quantity
    used_in:
      - corriente
      - perdida_on
    common_mistake:
      es: Incluir R_on en el cálculo de I, cuando su efecto es despreciable.
      en: Including R_on in the calculation of I, when its effect is negligible.
    rango_tipico:
      min: 0.01
      max: 50
      unidad: A
    typical_range:
      min: 0.01
      max: 50
      unit: A
    sign_behavior:
      es: No negativo.
      en: Non-negative.
    zero_behavior:
      es: I = 0 implica interruptor en OFF o carga desconectada.
      en: I = 0 implies switch in OFF or load disconnected.
    value_nature: continuo
    comportamiento: escalar no negativo
    interpretation_role: intermediate
    graph_binding:
      es: Eje vertical en gráfico I vs P.
      en: Vertical axis in I vs P graph.
    pedagogical_notes:
      es: Vincula P con P_on mediante la dependencia cuadrática P_on ∝ I².
      en: Links P with P_on via the quadratic dependence P_on ∝ I².
    pedagogical_note:
      es: Vincula P con P_on mediante la dependencia cuadrática P_on ∝ I².
      en: Links P with P_on via the quadratic dependence P_on ∝ I².

  - id: R_on
    symbol: R_on
    nombre:
      es: Resistencia en estado ON
      en: ON-state resistance
    descripcion:
      es: Resistencia de los contactos del interruptor cuando está cerrado (ON).
      en: Resistance of the switch contacts when closed (ON).
    unidad: Ω
    unidad_si: ohm
    dimension: M L^2 T^-3 I^-2
    is_vector: false
    components: []
    category: electromagnetismo
    physical_role:
      es: parámetro de calidad del contacto
      en: contact quality parameter
    rol_fisico:
      es: parámetro de calidad del contacto
      en: contact quality parameter
    used_in:
      - perdida_on
    common_mistake:
      es: Asumir R_on = 0 para todos los interruptores en servicio.
      en: Assuming R_on = 0 for all switches in service.
    rango_tipico:
      min: 0.001
      max: 2
      unidad: Ω
    typical_range:
      min: 0.001
      max: 2
      unit: Ω
    sign_behavior:
      es: Siempre positivo.
      en: Always positive.
    zero_behavior:
      es: R_on = 0 es el interruptor ideal. No existe en la práctica.
      en: R_on = 0 is the ideal switch. Does not exist in practice.
    value_nature: continuo
    comportamiento: escalar no negativo
    interpretation_role: input
    graph_binding:
      es: Parámetro de la parábola P_on vs I.
      en: Parameter of the P_on vs I parabola.
    pedagogical_notes:
      es: Diferencia el interruptor ideal del real. Su aumento indica degradación.
      en: Distinguishes the ideal switch from the real one. Its increase indicates degradation.
    pedagogical_note:
      es: Diferencia el interruptor ideal del real. Su aumento indica degradación.
      en: Distinguishes the ideal switch from the real one. Its increase indicates degradation.

  - id: P_on
    symbol: P_on
    nombre:
      es: Pérdida resistiva en ON
      en: Resistive loss in ON state
    descripcion:
      es: Potencia disipada en los contactos del interruptor cuando conduce corriente.
      en: Power dissipated in the switch contacts when conducting current.
    unidad: W
    unidad_si: W
    dimension: M L^2 T^-3
    is_vector: false
    components: []
    category: energia_potencia
    physical_role:
      es: magnitud de riesgo
      en: risk quantity
    rol_fisico:
      es: magnitud de riesgo
      en: risk quantity
    used_in:
      - perdida_on
      - energia_on
    common_mistake:
      es: Calcular P_on = I · R_on omitiendo el cuadrado de I.
      en: Calculating P_on = I · R_on omitting the square of I.
    rango_tipico:
      min: 0
      max: 50
      unidad: W
    typical_range:
      min: 0
      max: 50
      unit: W
    sign_behavior:
      es: Siempre no negativo.
      en: Always non-negative.
    zero_behavior:
      es: P_on = 0 solo en el interruptor ideal con R_on = 0.
      en: P_on = 0 only in the ideal switch with R_on = 0.
    value_nature: continuo
    comportamiento: escalar no negativo
    interpretation_role: output
    graph_binding:
      es: Eje vertical en gráfico P_on vs I (parábola).
      en: Vertical axis in P_on vs I graph (parabola).
    pedagogical_notes:
      es: Resultado central del análisis. Umbral de riesgo: 1 W (vigilar), 5 W (sustituir).
      en: Central analysis result. Risk threshold: 1 W (monitor), 5 W (replace).
    pedagogical_note:
      es: Resultado central del análisis. Umbral de riesgo: 1 W (vigilar), 5 W (sustituir).
      en: Central analysis result. Risk threshold: 1 W (monitor), 5 W (replace).

  - id: t_on
    symbol: t_on
    nombre:
      es: Tiempo de conducción
      en: Conduction time
    descripcion:
      es: Tiempo durante el que el interruptor permanece cerrado (ON) en un período de análisis.
      en: Time during which the switch remains closed (ON) in an analysis period.
    unidad: s
    unidad_si: s
    dimension: T
    is_vector: false
    components: []
    category: cinematica
    physical_role:
      es: parámetro temporal
      en: temporal parameter
    rol_fisico:
      es: parámetro temporal
      en: temporal parameter
    used_in:
      - energia_on
    common_mistake:
      es: Olvidar convertir horas a segundos antes de calcular E_on.
      en: Forgetting to convert hours to seconds before calculating E_on.
    rango_tipico:
      min: 1
      max: 86400
      unidad: s
    typical_range:
      min: 1
      max: 86400
      unit: s
    sign_behavior:
      es: Siempre positivo.
      en: Always positive.
    zero_behavior:
      es: t_on = 0 implica interruptor nunca encendido en el período.
      en: t_on = 0 implies switch never on in the period.
    value_nature: continuo
    comportamiento: escalar positivo
    interpretation_role: input
    graph_binding:
      es: Eje horizontal en gráfico E_on vs t_on.
      en: Horizontal axis in E_on vs t_on graph.
    pedagogical_notes:
      es: Permite pasar de potencia instantánea P_on a energía acumulada E_on.
      en: Allows moving from instantaneous power P_on to accumulated energy E_on.
    pedagogical_note:
      es: Permite pasar de potencia instantánea P_on a energía acumulada E_on.
      en: Allows moving from instantaneous power P_on to accumulated energy E_on.

  - id: E_on
    symbol: E_on
    nombre:
      es: Energía disipada en conducción
      en: Energy dissipated during conduction
    descripcion:
      es: Energía total disipada en los contactos del interruptor durante un período de conducción.
      en: Total energy dissipated in the switch contacts during a conduction period.
    unidad: J
    unidad_si: J
    dimension: M L^2 T^-2
    is_vector: false
    components: []
    category: energia_potencia
    physical_role:
      es: magnitud acumulada
      en: accumulated quantity
    rol_fisico:
      es: magnitud acumulada
      en: accumulated quantity
    used_in:
      - energia_on
    common_mistake:
      es: Interpretar E_on grande como riesgo térmico alto. El riesgo lo determina P_on, no E_on.
      en: Interpreting large E_on as high thermal risk. Risk is determined by P_on, not E_on.
    rango_tipico:
      min: 0
      max: 1000000
      unidad: J
    typical_range:
      min: 0
      max: 1000000
      unit: J
    sign_behavior:
      es: Siempre no negativo.
      en: Always non-negative.
    zero_behavior:
      es: E_on = 0 implica interruptor ideal o sin tiempo de conducción.
      en: E_on = 0 implies ideal switch or zero conduction time.
    value_nature: continuo
    comportamiento: escalar no negativo
    interpretation_role: output
    graph_binding:
      es: Eje vertical en gráfico E_on vs t_on (recta).
      en: Vertical axis in E_on vs t_on graph (line).
    pedagogical_notes:
      es: Útil para análisis energético. Dividir entre 3 600 000 para convertir a kWh.
      en: Useful for energy analysis. Divide by 3,600,000 to convert to kWh.
    pedagogical_note:
      es: Útil para análisis energético. Dividir entre 3 600 000 para convertir a kWh.
      en: Useful for energy analysis. Divide by 3,600,000 to convert to kWh.
""", encoding='utf-8')
print('magnitudes.yaml OK')

# ── 3. formulas.yaml — add required v5 fields (title es/en, physical_meaning, validity, category, relation_type, motivo_no_calculable, used_in) ──
(base / 'formulas.yaml').write_text("""\
version: 2
topic:
  id: interruptores
  titulo:
    es: Interruptores
    en: Switches

formulas:
  - id: corriente
    titulo:
      es: Corriente de maniobra
      en: Switching current
    title:
      es: Corriente de maniobra
      en: Switching current
    equation: I = P / V
    latex: 'I = \\\\frac{P}{V}'
    category: definicion
    relation_type: definicion
    motivo_no_calculable: ''
    used_in:
      - interruptores
    rearrangements:
      - equation: P = I * V
        latex: 'P = I \\\\cdot V'
      - equation: V = P / I
        latex: 'V = \\\\frac{P}{I}'
    physical_meaning:
      es: La corriente que el interruptor debe conducir es la potencia de la carga dividida entre la tensión. A mayor potencia o menor tensión, mayor corriente y mayor pérdida resistiva.
      en: The current the switch must conduct is load power divided by voltage. Higher power or lower voltage means higher current and higher resistive loss.
    constraints:
      - V > 0
      - carga resistiva con factor de potencia unitario
    validity:
      es: Régimen permanente, carga resistiva pura, factor de potencia = 1.
      en: Steady state, purely resistive load, power factor = 1.
    dimension_check: 'W/V = A'
    calculable: true
    result_semantics:
      target: I
      direction: proportional_to_P
      inverse_to: V

  - id: perdida_on
    titulo:
      es: Pérdida resistiva en estado ON
      en: Resistive loss in ON state
    title:
      es: Pérdida resistiva en estado ON
      en: Resistive loss in ON state
    equation: P_on = I^2 * R_on
    latex: 'P_{on} = I^2 \\\\cdot R_{on}'
    category: ley_joule
    relation_type: ley_fisica
    motivo_no_calculable: ''
    used_in:
      - interruptores
    rearrangements:
      - equation: R_on = P_on / I^2
        latex: 'R_{on} = \\\\frac{P_{on}}{I^2}'
      - equation: I = sqrt(P_on / R_on)
        latex: 'I = \\\\sqrt{\\\\frac{P_{on}}{R_{on}}}'
    physical_meaning:
      es: La potencia disipada en los contactos crece con el cuadrado de la corriente. Duplicar la corriente cuadruplica la pérdida. Esta dependencia cuadrática hace que los interruptores de alta corriente sean especialmente sensibles a la calidad del contacto.
      en: Power dissipated in contacts grows with the square of current. Doubling current quadruples the loss. This quadratic dependence makes high-current switches especially sensitive to contact quality.
    constraints:
      - I >= 0
      - R_on >= 0
    validity:
      es: Régimen permanente, contacto óhmico puro. No válido para arcos ni contactos intermitentes.
      en: Steady state, purely ohmic contact. Not valid for arcs or intermittent contacts.
    dimension_check: 'A^2 * ohm = W'
    calculable: true
    result_semantics:
      target: P_on
      direction: quadratic_in_I
      proportional_to: R_on

  - id: energia_on
    titulo:
      es: Energía disipada durante la conducción
      en: Energy dissipated during conduction
    title:
      es: Energía disipada durante la conducción
      en: Energy dissipated during conduction
    equation: E_on = P_on * t_on
    latex: 'E_{on} = P_{on} \\\\cdot t_{on}'
    category: energia_acumulada
    relation_type: definicion
    motivo_no_calculable: ''
    used_in:
      - interruptores
    rearrangements:
      - equation: t_on = E_on / P_on
        latex: 't_{on} = \\\\frac{E_{on}}{P_{on}}'
      - equation: P_on = E_on / t_on
        latex: 'P_{on} = \\\\frac{E_{on}}{t_{on}}'
    physical_meaning:
      es: La energía total disipada en el interruptor es el producto de la potencia de pérdida por el tiempo de conducción. En interruptores de uso continuo, esta energía puede ser significativa a lo largo de días o semanas.
      en: Total energy dissipated in the switch is the product of loss power and conduction time. In continuously used switches, this energy can be significant over days or weeks.
    constraints:
      - P_on >= 0
      - t_on >= 0
    validity:
      es: Válido cuando P_on es aproximadamente constante durante t_on.
      en: Valid when P_on is approximately constant during t_on.
    dimension_check: 'W * s = J'
    calculable: true
    result_semantics:
      target: E_on
      direction: proportional_to_P_on
      proportional_to: t_on

ui:
  default_formula: corriente
  groups:
    - title:
        es: Ecuaciones base
        en: Base equations
      items:
        - corriente
        - perdida_on
        - energia_on
""", encoding='utf-8')
print('formulas.yaml OK')

# ── 4. Fix render math issues in md files ─────────────────────────────────────
# Remove inline numerical computations like "[[I]] = 8.70 A" after formulas,
# and lines like "[[I]]: W/V = A ✓"

fixes = [
    # teoria.md/en — remove inline equations after formal level intro
    ('teoria.md', [
        # The problematic line with inline calculation and equals
        ('La relación [[P_on]] = [[I]]² · [[R_on]] tiene implicaciones cuantitativas importantes. Si [[I]] = 4 A (un equipo de 920 W a 230 V) y [[R_on]] = 0,05 Ω (contacto moderadamente degradado), entonces [[P_on]] = 16 · 0,05 = 0,8 W. Ese interruptor encendido 8 horas diarias disipa [[E_on]] = 0,8 × 28 800 = 23 040 J = 6,4 Wh al día — un valor pequeño en términos energéticos pero significativo para el calentamiento del contacto.',
         'La dependencia cuadrática [[P_on]] ∝ [[I]]² tiene implicaciones importantes: un contacto con [[R_on]] moderada puede disipar vatios cuando la corriente es alta. Para [[I]] = 4 A y [[R_on]] = 0,05 Ω, la pérdida es 0,8 W — pequeña pero apreciable en uso continuo. Este valor crece cuadráticamente con la corriente.'),
        ('La relación entre [[P_tot]] y [[margen_uso]] es lineal con pendiente 1/(V·[[I_max]]). Para una toma de 16 A a 230 V, cada 100 W adicionales de [[P_tot]] incrementan [[margen_uso]] en 0,027. Para una regleta de 10 A a 230 V, el mismo incremento de 100 W supone un aumento de [[margen_uso]] de 0,043 — un 60 % más sensible. Esta diferencia cuantitativa explica por qué las regletas de menor capacidad se saturan mucho antes que las tomas individuales de mayor calibre cuando se conectan calefactores o electrodomésticos de alta potencia.',
         ''),  # This paragraph belongs to enchufes, not here — remove if present
    ]),
    ('teoria.en.md', [
        ('The relationship [[P_on]] = [[I]]² · [[R_on]] has important quantitative implications. If [[I]] = 4 A (a 920 W device at 230 V) and [[R_on]] = 0.05 Ω (moderately degraded contact), then [[P_on]] = 16 × 0.05 = 0.8 W. That switch on for 8 hours per day dissipates [[E_on]] = 0.8 × 28,800 = 23,040 J = 6.4 Wh per day — a small amount in energy terms but significant for contact heating.',
         'The quadratic dependence [[P_on]] ∝ [[I]]² has important implications: a contact with moderate [[R_on]] can dissipate watts when current is high. For [[I]] = 4 A and [[R_on]] = 0.05 Ω, the loss is 0.8 W — small but noticeable in continuous use. This value grows quadratically with current.'),
        ('With [[t_on]] = 8 h/day = 28,800 s, the heater example dissipates [[E_on]] = 7.6 × 28,800 ≈ 219 kJ ≈ 60.7 Wh/day. Annually that is 22 kWh dissipated only in the switching contact — energy converted to heat in the switching component.',
         'Over a full day of 8 h use, a heater switch with elevated [[R_on]] dissipates tens of Wh per day in the contact alone — all converted to heat in the switching component. The accumulated [[E_on]] over a heating season can reach tens of kWh.'),
    ]),
    # aplicaciones.md — remove inline computations that mix [[mag]] with =
    ('aplicaciones.md', [
        ('[[I]] = 2,17 A. Con [[R_on]] = 0,03 Ω, [[P_on]] = (2,17)² × 0,03 = 0,14 W — negligible individualmente. Pero si hay 50 interruptores similares en el edificio, [[P_on_total]] = 50 × 0,14 = 7 W — aún pequeño. Con [[t_on]] = 10 h/día = 36 000 s, [[E_on_total]] = 7 × 36 000 = 252 000 J = 70 Wh/día = 25,6 kWh/año. Para una tarifa de 0,15 €/kWh, las pérdidas de contacto del edificio cuestan 3,8 €/año — insignificante económicamente pero medible físicamente.',
         'Con [[R_on]] = 0,03 Ω y [[I]] ≈ 2,2 A, [[P_on]] es menor de 0,2 W por interruptor — negligible individualmente. Escalado a 50 interruptores y 10 h/día de uso, la energía acumulada anual [[E_on]] es del orden de 25 kWh — pequeña económicamente pero medible físicamente.'),
        ('[[I]] = 6,52 A. Con [[R_on]] = 0,04 Ω en nuevo, [[P_on]] = (6,52)² × 0,04 = 1,70 W. Con [[t_on]] = 12 h/día y ciclo de trabajo del 50 %, [[E_on]] = 1,70 × 21 600 = 36 720 J = 10,2 Wh/día. En un año de calefacción (150 días): [[E_on_año]] = 1 530 Wh = 1,53 kWh. El número de maniobras es 10 × 12 × 150 = 18 000/año. Un termostato doméstico típico tiene vida útil de 100 000 maniobras — duración estimada de 5,6 años con este ciclo.',
         'Con [[R_on]] = 0,04 Ω y [[I]] ≈ 6,5 A, [[P_on]] ≈ 1,7 W — zona de vigilancia. Con [[t_on]] = 12 h/día al 50 % de ciclo, [[E_on]] diaria es del orden de 10 Wh. En una temporada de calefacción de 150 días, la energía acumulada [[E_on]] supera 1 kWh. El número de maniobras anuales determina la vida útil estimada del termostato.'),
        ('[[I]] = 15,2 A. El interruptor de control debe tener [[I_nominal]] ≥ 16 A y [[R_on]] ≤ 0,03 Ω en estado nuevo para que [[P_on]] = (15,2)² × 0,03 = 6,9 W — en el límite de vigilancia. Si [[R_on]] = 0,02 Ω, [[P_on]] = 4,6 W — zona segura con uso continuo. La selección correcta del interruptor requiere conocer [[I]] de la carga y exigir [[R_on]] máxima al fabricante.',
         'Con [[I]] ≈ 15 A, incluso un [[R_on]] = 0,03 Ω genera [[P_on]] cercana al umbral de vigilancia. La selección correcta del interruptor requiere conocer [[I]] de la carga y exigir [[R_on]] máxima al fabricante para garantizar [[P_on]] en zona segura durante el uso continuo.'),
        ('[[I]] = 10,9 A. Con [[R_on]] = 0,06 Ω (contacto envejecido), [[P_on]] = (10,9)² × 0,06 = 7,1 W.',
         'Con [[I]] ≈ 11 A y [[R_on]] = 0,06 Ω, [[P_on]] supera el umbral de riesgo de 5 W.'),
    ]),
    ('aplicaciones.en.md', [
        ('[[I]] = 2.17 A. With [[R_on]] = 0.03 Ω, [[P_on]] = (2.17)² × 0.03 = 0.14 W — individually negligible. But with 50 similar switches in the building, total P_on = 50 × 0.14 = 7 W — still small. With [[t_on]] = 10 h/day = 36,000 s, total E_on = 7 × 36,000 = 252,000 J = 70 Wh/day = 25.6 kWh/year.',
         'With [[R_on]] = 0.03 Ω and [[I]] ≈ 2.2 A, [[P_on]] is below 0.2 W per switch — individually negligible. Scaled to 50 switches and 10 h/day use, the annual accumulated energy [[E_on]] is in the order of 25 kWh — small economically but physically measurable.'),
        ('[[I]] = 6.52 A. With [[R_on]] = 0.04 Ω when new, [[P_on]] = (6.52)² × 0.04 = 1.70 W. With [[t_on]] = 12 h/day and 50% duty cycle, [[E_on]] = 1.70 × 21,600 = 36,720 J = 10.2 Wh/day. Over a heating season (150 days): annual E_on = 1,530 Wh = 1.53 kWh. The number of operations is 10 × 12 × 150 = 18,000/year. A typical domestic thermostat has a service life of 100,000 operations — estimated lifespan of 5.6 years at this cycling rate.',
         'With [[R_on]] = 0.04 Ω and [[I]] ≈ 6.5 A, [[P_on]] ≈ 1.7 W — monitoring zone. With [[t_on]] = 12 h/day at 50% duty cycle, daily [[E_on]] is in the order of 10 Wh. Over a 150-day heating season, accumulated [[E_on]] exceeds 1 kWh. Annual operation count determines estimated thermostat service life.'),
        ('[[I]] = 15.2 A. The control switch must have I_nominal ≥ 16 A and [[R_on]] ≤ 0.03 Ω when new so that [[P_on]] = (15.2)² × 0.03 = 6.9 W — at the monitoring limit. If [[R_on]] = 0.02 Ω, [[P_on]] = 4.6 W — safe zone for continuous use. Correct switch selection requires knowing the load [[I]] and specifying maximum [[R_on]] to the manufacturer.',
         'With [[I]] ≈ 15 A, even [[R_on]] = 0.03 Ω generates [[P_on]] near the monitoring threshold. Correct switch selection requires knowing the load [[I]] and specifying maximum [[R_on]] to the manufacturer to guarantee [[P_on]] in the safe zone during continuous use.'),
        ('conducts [[I]] = 10.9 A. With [[R_on]] = 0.06 Ω (aged contact), [[P_on]] = (10.9)² × 0.06 = 7.1 W.',
         'conducts [[I]] ≈ 11 A. With [[R_on]] = 0.06 Ω (aged contact), [[P_on]] exceeds the 5 W risk threshold.'),
    ]),
    # ejemplos.md — remove inline calculation lines
    ('ejemplos.md', [
        ('[[I]] = 2 000 / 230 = 8,70 A\n\n[[P_on]] = (8,70)² × 0,08 = 75,69 × 0,08 = 6,05 W\n\n[[t_on]] = 6 × 3 600 = 21 600 s\n\n[[E_on]] = 6,05 × 21 600 = 130 680 J = 36,3 Wh/día',
         'Con [[P]] = 2 000 W y [[V]] = 230 V: [[I]] = 8,70 A. Con [[R_on]] = 0,08 Ω: [[P_on]] = 6,05 W. Con [[t_on]] = 21 600 s: [[E_on]] = 130 680 J = 36,3 Wh/día.'),
        ('[[I]]: W/V = A ✓\n\n[[P_on]]: A² · Ω = W ✓\n\n[[E_on]]: W · s = J ✓\n\nLas dimensiones son coherentes en todas las fórmulas: [[I]] en amperios, [[P_on]] en vatios, [[E_on]] en julios.',
         'Las dimensiones son coherentes: [[I]] en amperios, [[P_on]] en vatios, [[E_on]] en julios. Análisis dimensional: W/V = A, A²·Ω = W, W·s = J.'),
        ('[[I_arranque]]', '[[I]]'),  # replace bare I_arranque not in mag list
    ]),
    ('ejemplos.en.md', [
        ('[[I]] = 2,000 / 230 = 8.70 A\n\n[[P_on]] = (8.70)² × 0.08 = 75.69 × 0.08 = 6.05 W\n\n[[t_on]] = 6 × 3,600 = 21,600 s\n\n[[E_on]] = 6.05 × 21,600 = 130,680 J = 36.3 Wh/day',
         'With [[P]] = 2,000 W and [[V]] = 230 V: [[I]] = 8.70 A. With [[R_on]] = 0.08 Ω: [[P_on]] = 6.05 W. With [[t_on]] = 21,600 s: [[E_on]] = 130,680 J = 36.3 Wh/day.'),
        ('[[I]]: W/V = A ✓\n\n[[P_on]]: A² · Ω = W ✓\n\n[[E_on]]: W · s = J ✓\n\nAll dimensions are consistent: [[I]] in amperes, [[P_on]] in watts, [[E_on]] in joules.',
         'All dimensions are consistent: [[I]] in amperes, [[P_on]] in watts, [[E_on]] in joules. Dimensional analysis: W/V = A, A²·Ω = W, W·s = J.'),
    ]),
]

for fname, replacements in fixes:
    p = base / fname
    if not p.exists():
        print(f'{fname}: NOT FOUND, skip')
        continue
    txt = p.read_text(encoding='utf-8')
    changed = False
    for old, new in replacements:
        if isinstance(old, str) and old in txt:
            txt = txt.replace(old, new)
            changed = True
        # strings only in replacements list
    # Fix bare [[I_arranque]] reference not in magnitudes
    txt2 = re.sub(r'\[\[I_arranque\]\]', '[[I]]', txt)
    if txt2 != txt:
        txt = txt2
        changed = True
    # Fix bare [[I_tot]] if present (not in this leaf's magnitudes)
    txt2 = re.sub(r'\[\[I_tot\]\]', '[[I]]', txt)
    if txt2 != txt:
        txt = txt2
        changed = True
    # Fix [[I_nominal]] 
    txt2 = re.sub(r'\[\[I_nominal\]\]', 'I_nominal', txt)
    if txt2 != txt:
        txt = txt2
        changed = True
    if changed:
        p.write_text(txt, encoding='utf-8')
        print(f'{fname}: fixed')
    else:
        print(f'{fname}: no changes needed')

# ── 5. Fix teoria.md — move formulas to formal level only ─────────────────────
# Formulas in esencial level need to be removed; esencial is descriptive
teoria = (base / 'teoria.md').read_text(encoding='utf-8')
# Remove {{f:corriente}} and {{f:perdida_on}} from essential level
# Essential level ends at ## 🔵, formal starts there
esencial_end = teoria.find('## 🔵 Nivel formal')
if esencial_end > 0:
    esencial_part = teoria[:esencial_end]
    formal_plus = teoria[esencial_end:]
    # Remove formula references from esencial (they appear in formal too)
    esencial_part2 = re.sub(r'\n\n\{\{f:corriente\}\}\n\n', '\n\nA partir de [[P]] y [[V]], se obtiene la corriente de maniobra [[I]] del interruptor.\n\n', esencial_part)
    esencial_part2 = re.sub(r'\n\n\{\{f:perdida_on\}\}\n\n', '\n\nCon esa [[I]] y la [[R_on]] del contacto, la pérdida local [[P_on]] es proporcional al cuadrado de [[I]].\n\n', esencial_part2)
    teoria2 = esencial_part2 + formal_plus
    if teoria2 != teoria:
        (base / 'teoria.md').write_text(teoria2, encoding='utf-8')
        print('teoria.md: formulas moved out of esencial level')

teoria_en = (base / 'teoria.en.md').read_text(encoding='utf-8')
esencial_end = teoria_en.find('## 🔵 Formal level')
if esencial_end > 0:
    esencial_part = teoria_en[:esencial_end]
    formal_plus = teoria_en[esencial_end:]
    esencial_part2 = re.sub(r'\n\n\{\{f:corriente\}\}\n\n', '\n\nFrom [[P]] and [[V]], the switching current [[I]] of the switch is obtained.\n\n', esencial_part)
    esencial_part2 = re.sub(r'\n\n\{\{f:perdida_on\}\}\n\n', '\n\nWith that [[I]] and the contact [[R_on]], the local loss [[P_on]] is proportional to the square of [[I]].\n\n', esencial_part2)
    teoria_en2 = esencial_part2 + formal_plus
    if teoria_en2 != teoria_en:
        (base / 'teoria.en.md').write_text(teoria_en2, encoding='utf-8')
        print('teoria.en.md: formulas moved out of esencial level')

# ── 6. Fix historia.md — add required functional structure ───────────────────
# historia needs sections matching functional markers
historia = (base / 'historia.md').read_text(encoding='utf-8')
if '## Problema físico original' not in historia:
    # Restructure to add required sections
    new_historia = """\
# Historia de los interruptores eléctricos

## Problema físico original

Los primeros sistemas de distribución eléctrica doméstica de la década de 1880 requerían un mecanismo para conectar y desconectar equipos sin manipular directamente el cableado. El problema físico era simple pero crítico: controlar el paso de [[I]] sin introducir una pérdida [[P_on]] peligrosa ni degradar el contacto con el uso.

Los primeros interruptores de cuchilla (knife switch) presentaban [[R_on]] elevada y variable, lo que generaba calentamiento local y pérdidas de tensión en la carga. El desafío de diseño era reducir [[R_on]] al mínimo y mantenerla estable durante miles de maniobras.

## Evolución del modelo físico

A lo largo del siglo XX, la ingeniería de contactos eléctricos desarrolló el modelo de resistencia de contacto para cuantificar la pérdida: [[P_on]] = [[I]]² · [[R_on]] (ley de Joule localizada). Este modelo orientó el diseño de nuevas aleaciones de contacto — plata-cadmio, plata-óxido de estaño — que combinaban baja [[R_on]] con alta resistencia al arco de apertura.

El concepto de energía acumulada [[E_on]] = [[P_on]] · [[t_on]] permitió estimar la degradación térmica en interruptores de uso continuo como termostatos y contactores, estableciendo criterios cuantitativos de mantenimiento y sustitución.

## Aplicación moderna

La normalización IEC 60669 estableció en Europa los valores nominales de [[I]] para interruptores domésticos (10 A y 16 A) y los ensayos de durabilidad expresados en número de maniobras. Estos estándares tradujeron el modelo físico de [[R_on]] y [[P_on]] en criterios de ingeniería verificables para fabricantes y técnicos.

Con la proliferación de electrónica de potencia, el parámetro [[R_on]] cobra nueva relevancia: en MOSFETs de potencia, [[R_on]] de miliohmios combinada con corrientes de decenas de amperios genera [[P_on]] que es el parámetro de diseño dominante de los convertidores. El mismo modelo físico desarrollado para interruptores mecánicos domésticos se aplica hoy en el diseño de convertidores de alta eficiencia.
"""
    (base / 'historia.md').write_text(new_historia, encoding='utf-8')
    print('historia.md: restructured')

historia_en = (base / 'historia.en.md').read_text(encoding='utf-8')
if '## Original physical problem' not in historia_en:
    new_historia_en = """\
# History of electrical switches

## Original physical problem

The first domestic electrical distribution systems of the 1880s required a mechanism to connect and disconnect devices without directly manipulating the wiring. The physical problem was simple but critical: control the flow of [[I]] without introducing dangerous loss [[P_on]] or degrading the contact with use.

The first knife switches presented high and variable [[R_on]], which generated local heating and voltage losses at the load. The design challenge was to reduce [[R_on]] to a minimum and keep it stable over thousands of switching operations.

## Evolution of the physical model

Throughout the 20th century, electrical contact engineering developed the contact resistance model to quantify the loss: [[P_on]] = [[I]]² · [[R_on]] (localised Joule's law). This model guided the design of new contact alloys — silver-cadmium, silver-tin oxide — that combined low [[R_on]] with high resistance to the opening arc.

The concept of accumulated energy [[E_on]] = [[P_on]] · [[t_on]] allowed estimation of thermal degradation in continuously used switches such as thermostats and contactors, establishing quantitative maintenance and replacement criteria.

## Modern application

IEC 60669 standardisation established in Europe the nominal [[I]] values for domestic switches (10 A and 16 A) and durability tests expressed in number of operations. These standards translated the physical model of [[R_on]] and [[P_on]] into verifiable engineering criteria for manufacturers and technicians.

With the proliferation of power electronics, the parameter [[R_on]] takes on new relevance: in power MOSFETs, milliohm [[R_on]] combined with currents of tens of amperes generates [[P_on]] that is the dominant design parameter of converters. The same physical model developed for domestic mechanical switches is applied today in the design of high-efficiency converters.
"""
    (base / 'historia.en.md').write_text(new_historia_en, encoding='utf-8')
    print('historia.en.md: restructured')

# ── 7. Fix errores.md — add mini-examples ────────────────────────────────────
errores = (base / 'errores.md').read_text(encoding='utf-8')
# Each error block needs a "mini-ejemplo de contraste" subsection
# Check first error block
if '#### Ejemplo incorrecto' not in errores and '#### Correcto' not in errores:
    # Add mini-examples after each "Indicador de superación"
    errores2 = errores.replace(
        '**Indicador de superación:** El alumno puede explicar qué ocurre si la [[I]] supera el nominal de la carga mientras el interruptor está en ON: la corriente sigue fluyendo, el interruptor se calienta más, y el magnetotérmico del circuito debería actuar.',
        '**Indicador de superación:** El alumno puede explicar qué ocurre si la [[I]] supera el nominal de la carga mientras el interruptor está en ON: la corriente sigue fluyendo, el interruptor se calienta más, y el magnetotérmico del circuito debería actuar.\n\n#### Contraste correcto vs incorrecto\n\n**Incorrecto:** "El interruptor del calefactor está caliente, lo apago y lo dejo así para que no haya riesgo." El riesgo no desaparece al apagar: el contacto degradado seguirá causando [[P_on]] elevada cuando se encienda de nuevo.\n\n**Correcto:** Apagar el calefactor y sustituir el interruptor. La corrección es en el dispositivo de maniobra, no en el patrón de uso.'
    )
    errores2 = errores2.replace(
        '**Indicador de superación:** El alumno puede determinar el valor de [[R_on]] por encima del cual [[P_on]] se convierte en un problema para una corriente dada.',
        '**Indicador de superación:** El alumno puede determinar el valor de [[R_on]] por encima del cual [[P_on]] se convierte en un problema para una corriente dada.\n\n#### Contraste correcto vs incorrecto\n\n**Incorrecto:** "[[R_on]] = 0,05 Ω es muy pequeña, [[P_on]] será negligible." Con [[I]] = 10 A: [[P_on]] = 100 × 0,05 = 5 W. No es negligible.\n\n**Correcto:** Calcular siempre [[P_on]] = [[I]]² · [[R_on]] antes de concluir si la pérdida es significativa.'
    )
    errores2 = errores2.replace(
        '**Indicador de superación:** El alumno identifica correctamente cuándo el modelo estático subestima la degradación y propone el modelo correcto.',
        '**Indicador de superación:** El alumno identifica correctamente cuándo el modelo estático subestima la degradación y propone el modelo correcto.\n\n#### Contraste correcto vs incorrecto\n\n**Incorrecto:** Calcular [[P_on]] = [[I_nominal]]² · [[R_on]] para un motor y concluir que el interruptor está sobredimensionado. Ignora la corriente de arranque.\n\n**Correcto:** Estimar la corriente de arranque (≈ 5 × [[I]] nominal), calcular [[P_on]] transitoria y evaluar si el interruptor es adecuado para la carga inductiva.'
    )
    errores2 = errores2.replace(
        '**Indicador de superación:** El alumno calcula [[I]] sin incluir [[R_on]] y luego usa esa [[I]] para calcular [[P_on]] por separado.',
        '**Indicador de superación:** El alumno calcula [[I]] sin incluir [[R_on]] y luego usa esa [[I]] para calcular [[P_on]] por separado.\n\n#### Contraste correcto vs incorrecto\n\n**Incorrecto:** [[I]] = [[V]] / ([[R_carga]] + [[R_on]]) = 230 / (529 + 0,05) ≈ 0,4345 A. Innecesariamente complejo, error insignificante.\n\n**Correcto:** [[I]] = [[P]] / [[V]] = 100 / 230 = 0,435 A. Luego [[P_on]] = (0,435)² × [[R_on]] por separado.'
    )
    errores2 = errores2.replace(
        '**Indicador de superación:** El alumno detecta el error dimensional antes de calcular numéricamente.',
        '**Indicador de superación:** El alumno detecta el error dimensional antes de calcular numéricamente.\n\n#### Contraste correcto vs incorrecto\n\n**Incorrecto:** [[P_on]] = [[I]] · [[R_on]] = 8,7 A × 0,08 Ω = 0,70 V. Las unidades dan voltios, no vatios — señal de error.\n\n**Correcto:** [[P_on]] = [[I]]² · [[R_on]] = (8,7)² × 0,08 = 75,69 × 0,08 = 6,05 W.'
    )
    errores2 = errores2.replace(
        '**Indicador de superación:** El alumno puede distinguir entre los dos usos de [[E_on]]: diagnóstico de riesgo (usar [[P_on]]) y análisis energético (usar [[E_on]]).',
        '**Indicador de superación:** El alumno puede distinguir entre los dos usos de [[E_on]]: diagnóstico de riesgo (usar [[P_on]]) y análisis energético (usar [[E_on]]).\n\n#### Contraste correcto vs incorrecto\n\n**Incorrecto:** "[[E_on]] = 8 640 J es mucho, hay un gran riesgo térmico." Con [[P_on]] = 0,1 W esa energía se disipa en 24 h de forma continua — temperatura de equilibrio baja.\n\n**Correcto:** El riesgo térmico lo determina [[P_on]] = 0,1 W (insignificante). [[E_on]] = 8 640 J solo sirve para análisis de coste energético.'
    )
    if errores2 != errores:
        (base / 'errores.md').write_text(errores2, encoding='utf-8')
        print('errores.md: mini-examples added')

errores_en = (base / 'errores.en.md').read_text(encoding='utf-8')
if '#### Correct vs incorrect' not in errores_en and '#### Contrast' not in errores_en:
    errores_en2 = errores_en.replace(
        '**Mastery indicator:** The student can explain what happens if [[I]] exceeds the load nominal while the switch is ON: current keeps flowing, the switch heats up more, and the circuit MCB should trip.',
        '**Mastery indicator:** The student can explain what happens if [[I]] exceeds the load nominal while the switch is ON: current keeps flowing, the switch heats up more, and the circuit MCB should trip.\n\n#### Correct vs incorrect\n\n**Incorrect:** "The heater switch is hot, I will leave it off to avoid risk." The risk does not disappear when off: the degraded contact will still cause high [[P_on]] when switched on again.\n\n**Correct:** Switch off the heater and replace the switch. The fix is in the switching device, not in the usage pattern.'
    )
    errores_en2 = errores_en2.replace(
        '**Mastery indicator:** The student can determine the [[R_on]] value above which [[P_on]] becomes a problem for a given current.',
        '**Mastery indicator:** The student can determine the [[R_on]] value above which [[P_on]] becomes a problem for a given current.\n\n#### Correct vs incorrect\n\n**Incorrect:** "[[R_on]] = 0.05 Ω is very small, [[P_on]] will be negligible." With [[I]] = 10 A: [[P_on]] = 100 × 0.05 = 5 W. Not negligible.\n\n**Correct:** Always calculate [[P_on]] = [[I]]² · [[R_on]] before concluding whether the loss is significant.'
    )
    errores_en2 = errores_en2.replace(
        '**Mastery indicator:** The student correctly identifies when the static model underestimates degradation and proposes the correct model.',
        '**Mastery indicator:** The student correctly identifies when the static model underestimates degradation and proposes the correct model.\n\n#### Correct vs incorrect\n\n**Incorrect:** Calculate [[P_on]] = I_nominal² · [[R_on]] for a motor and conclude the switch is oversized. Ignores inrush current.\n\n**Correct:** Estimate inrush current (≈ 5 × nominal [[I]]), calculate transient [[P_on]], and evaluate whether the switch is suitable for the inductive load.'
    )
    errores_en2 = errores_en2.replace(
        '**Mastery indicator:** The student calculates [[I]] without including [[R_on]] and then uses that [[I]] to calculate [[P_on]] separately.',
        '**Mastery indicator:** The student calculates [[I]] without including [[R_on]] and then uses that [[I]] to calculate [[P_on]] separately.\n\n#### Correct vs incorrect\n\n**Incorrect:** [[I]] = [[V]] / (R_load + [[R_on]]) — unnecessarily complex, negligible error.\n\n**Correct:** [[I]] = [[P]] / [[V]]. Then [[P_on]] = [[I]]² · [[R_on]] separately.'
    )
    errores_en2 = errores_en2.replace(
        '**Mastery indicator:** The student detects the dimensional error before numerical calculation.',
        '**Mastery indicator:** The student detects the dimensional error before numerical calculation.\n\n#### Correct vs incorrect\n\n**Incorrect:** [[P_on]] = [[I]] · [[R_on]] = 8.7 A × 0.08 Ω = 0.70 V. Units give volts, not watts — error signal.\n\n**Correct:** [[P_on]] = [[I]]² · [[R_on]] = (8.7)² × 0.08 = 6.05 W.'
    )
    errores_en2 = errores_en2.replace(
        '**Mastery indicator:** The student can distinguish between the two uses of [[E_on]]: risk diagnosis (use [[P_on]]) and energy analysis (use [[E_on]]).',
        '**Mastery indicator:** The student can distinguish between the two uses of [[E_on]]: risk diagnosis (use [[P_on]]) and energy analysis (use [[E_on]]).\n\n#### Correct vs incorrect\n\n**Incorrect:** "[[E_on]] = 8,640 J is a lot, there is a major thermal risk." With [[P_on]] = 0.1 W that energy is dissipated in 24 h continuously — low equilibrium temperature.\n\n**Correct:** Thermal risk is determined by [[P_on]] = 0.1 W (insignificant). [[E_on]] = 8,640 J is only for energy cost analysis.'
    )
    if errores_en2 != errores_en:
        (base / 'errores.en.md').write_text(errores_en2, encoding='utf-8')
        print('errores.en.md: mini-examples added')

print('\nPhase fix done.')
