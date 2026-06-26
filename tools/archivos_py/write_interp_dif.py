from pathlib import Path

content = """\
version: 2
leaf_id: diferencial-y-magnetotermico

targets:
  I:
    title:
      es: Corriente de carga del circuito
      en: Circuit load current
    physical_reading:
      es: Indica cuánta corriente circula por el circuito. Si supera I_n, el magnetotérmico puede actuar.
      en: Indicates how much current flows through the circuit. If it exceeds I_n, the MCB may trip.
    coherence:
      es: Debe ser coherente con la potencia conectada y la tensión de suministro.
      en: Must be consistent with connected power and supply voltage.
    model_validity:
      es: Válido para cargas resistivas puras. En cargas inductivas o capacitivas la corriente real puede diferir.
      en: Valid for purely resistive loads. For inductive or capacitive loads, real current may differ.
    graph_reading:
      es: Valores altos indican operación cerca del límite del magnetotérmico.
      en: High values indicate operation close to the MCB limit.
    likely_errors:
      es:
        - Confundir la corriente total con el desequilibrio diferencial.
        - Usar potencia total de vivienda en vez de la del circuito concreto.
        - Olvidar convertir de W a kW antes de dividir por V.
      en:
        - Confusing total current with differential imbalance.
        - Using total household power instead of the specific circuit power.
        - Forgetting to convert from W to kW before dividing by V.
    next_step:
      es: Calcular margen_termico = I / I_n para evaluar proximidad al disparo.
      en: Calculate margen_termico = I / I_n to evaluate proximity to trip.
    output_contract:
      units: A
      range: "0 – 100 A (residencial)"
      sign: positivo
    result_blocks:
      - condition:
          es: margen_termico >= 1
          en: margen_termico >= 1
        message:
          es: Sobrecarga activa. El magnetotérmico puede actuar en minutos si la carga se mantiene.
          en: Active overload. The MCB may trip within minutes if the load is sustained.
        severity: warning
      - condition:
          es: 0.8 <= margen_termico < 1
          en: 0.8 <= margen_termico < 1
        message:
          es: Operación cerca del límite. Margen reducido para cargas transitorias.
          en: Operation near the limit. Reduced margin for transient loads.
        severity: info
      - condition:
          es: margen_termico < 0.8
          en: margen_termico < 0.8
        message:
          es: Margen térmico amplio. El circuito opera con capacidad de reserva.
          en: Ample thermal margin. The circuit operates with reserve capacity.
        severity: ok

  I_delta:
    title:
      es: Desequilibrio diferencial fase-neutro
      en: Phase-neutral differential imbalance
    physical_reading:
      es: Representa la corriente que no regresa por el neutro, es decir, la fuga a tierra. Si supera I_dn, el diferencial actúa.
      en: Represents the current not returning via neutral — i.e., the earth leakage. If it exceeds I_dn, the RCD trips.
    coherence:
      es: En una instalación sin fugas, I_delta debe ser prácticamente cero. Valores apreciables indican defecto de aislamiento.
      en: In a leak-free installation, I_delta should be practically zero. Appreciable values indicate insulation defect.
    model_validity:
      es: Válido para corriente alterna estándar. Para corrientes pulsantes de CC se requiere diferencial tipo A.
      en: Valid for standard AC. For pulsating DC currents, type A RCD is required.
    graph_reading:
      es: Cualquier valor superior a I_dn indica disparo inminente o activo del diferencial.
      en: Any value above I_dn indicates imminent or active RCD trip.
    likely_errors:
      es:
        - Comparar I_delta en mA con I de carga en A sin convertir unidades.
        - Asumir que I_delta = 0 porque no hay disparo.
        - Confundir I_delta con la corriente total del circuito.
      en:
        - Comparing I_delta in mA with load I in A without unit conversion.
        - Assuming I_delta = 0 because there is no trip.
        - Confusing I_delta with the total circuit current.
    next_step:
      es: Calcular margen_dif = I_delta / I_dn para cuantificar proximidad al disparo diferencial.
      en: Calculate margen_dif = I_delta / I_dn to quantify proximity to RCD trip.
    output_contract:
      units: A (o mA)
      range: "0 – I_dn típico: 0.030 A (30 mA)"
      sign: positivo
    result_blocks:
      - condition:
          es: margen_dif >= 1
          en: margen_dif >= 1
        message:
          es: Fuga superior al umbral. El diferencial actúa o debe actuar. Identificar origen de la fuga.
          en: Leakage above threshold. The RCD trips or should trip. Identify the leakage source.
        severity: warning
      - condition:
          es: 0.5 <= margen_dif < 1
          en: 0.5 <= margen_dif < 1
        message:
          es: Fuga apreciable sin disparo. Puede indicar degradación progresiva del aislamiento.
          en: Appreciable leakage without trip. May indicate progressive insulation degradation.
        severity: info
      - condition:
          es: margen_dif < 0.5
          en: margen_dif < 0.5
        message:
          es: Desequilibrio mínimo. Instalación dentro de parámetros normales.
          en: Minimal imbalance. Installation within normal parameters.
        severity: ok

  margen_termico:
    title:
      es: Margen de carga térmica del magnetotérmico
      en: MCB thermal load margin
    physical_reading:
      es: Fracción de la corriente nominal consumida. Indica qué tan cerca está el circuito del límite de disparo del magnetotérmico.
      en: Fraction of the nominal current consumed. Indicates how close the circuit is to the MCB trip threshold.
    coherence:
      es: Debe ser coherente con I calculada y el calibre I_n instalado.
      en: Must be consistent with calculated I and the installed rating I_n.
    model_validity:
      es: Válido en régimen estacionario. Los transitorios de arranque pueden superar brevemente margen_termico = 1 sin disparo.
      en: Valid in steady state. Startup transients may briefly exceed margen_termico = 1 without tripping.
    graph_reading:
      es: Valores superiores a 1 indican sobrecarga activa. Valores entre 0.8 y 1 indican operación con margen reducido.
      en: Values above 1 indicate active overload. Values between 0.8 and 1 indicate reduced-margin operation.
    likely_errors:
      es:
        - Calcular margen_termico con la corriente total de vivienda en vez del circuito concreto.
        - Usar I_n del diferencial en lugar del magnetotérmico.
      en:
        - Calculating margen_termico with total household current instead of the specific circuit.
        - Using I_n of the RCD instead of the MCB.
    next_step:
      es: Si margen_termico > 0.8, considerar redistribución de cargas o revisión del calibre del circuito.
      en: If margen_termico > 0.8, consider load redistribution or circuit rating revision.
    output_contract:
      units: adimensional
      range: "0 – ∞ (>1 = sobrecarga)"
      sign: positivo
    result_blocks:
      - condition:
          es: margen_termico >= 1
          en: margen_termico >= 1
        message:
          es: Sobrecarga del magnetotérmico. Reducir carga o revisar calibre con criterio técnico.
          en: MCB overload. Reduce load or review rating with technical justification.
        severity: warning
      - condition:
          es: margen_termico < 1
          en: margen_termico < 1
        message:
          es: Dentro del calibre nominal. Sin riesgo de disparo por sobrecorriente sostenida.
          en: Within nominal rating. No risk of sustained overcurrent trip.
        severity: ok

  margen_dif:
    title:
      es: Margen de disparo diferencial
      en: RCD trip margin
    physical_reading:
      es: Fracción del umbral diferencial alcanzado. Valores iguales o superiores a 1 indican disparo inminente o activo.
      en: Fraction of the differential threshold reached. Values equal to or above 1 indicate imminent or active trip.
    coherence:
      es: Debe ser coherente con I_delta calculado y la sensibilidad I_dn del diferencial instalado.
      en: Must be consistent with calculated I_delta and the installed RCD sensitivity I_dn.
    model_validity:
      es: Válido para diferencial tipo AC en corriente alterna pura. Puede subestimar riesgo en circuitos con electrónica.
      en: Valid for type AC RCD with pure AC. May underestimate risk in circuits with electronics.
    graph_reading:
      es: Valores entre 0.5 y 1 señalan zona de vigilancia. Por encima de 1, disparo activo.
      en: Values between 0.5 and 1 indicate a monitoring zone. Above 1, active trip.
    likely_errors:
      es:
        - Interpretar margen_dif < 1 como ausencia total de fuga.
        - Subir I_dn para reducir margen_dif en vez de corregir la fuga.
      en:
        - Interpreting margen_dif < 1 as complete absence of leakage.
        - Raising I_dn to reduce margen_dif instead of correcting the leakage.
    next_step:
      es: Si margen_dif > 0.5, inspeccionar circuito y aparatos en busca de degradación de aislamiento.
      en: If margen_dif > 0.5, inspect circuit and appliances for insulation degradation.
    output_contract:
      units: adimensional
      range: "0 – ∞ (>1 = disparo diferencial)"
      sign: positivo
    result_blocks:
      - condition:
          es: margen_dif >= 1
          en: margen_dif >= 1
        message:
          es: Umbral diferencial superado. Corregir origen de la fuga antes de rearmar.
          en: Differential threshold exceeded. Correct leakage source before resetting.
        severity: warning
      - condition:
          es: margen_dif < 1
          en: margen_dif < 1
        message:
          es: Por debajo del umbral de disparo diferencial.
          en: Below the RCD trip threshold.
        severity: ok

  P_lim:
    title:
      es: Potencia límite magnetotérmica
      en: MCB power limit
    physical_reading:
      es: Potencia máxima aproximada que puede conectarse al circuito antes de que el magnetotérmico actúe por sobrecorriente.
      en: Approximate maximum power that can be connected to the circuit before the MCB trips for overcurrent.
    coherence:
      es: Estimación para carga resistiva a tensión nominal. La potencia real admisible puede ser menor en cargas inductivas.
      en: Estimate for resistive load at nominal voltage. Real admissible power may be lower for inductive loads.
    model_validity:
      es: Válido como estimación de primer orden. Para planificación precisa se requiere la curva de tiempo-corriente.
      en: Valid as a first-order estimate. Precise planning requires the time-current curve.
    graph_reading:
      es: Comparar con la suma de potencias conectadas al circuito para evaluar margen disponible.
      en: Compare with the sum of connected powers in the circuit to evaluate available margin.
    likely_errors:
      es:
        - Usar P_lim como límite exacto ignorando cargas inductivas y transitorios de arranque.
        - Confundir P_lim del circuito con la potencia contratada total de la vivienda.
      en:
        - Using P_lim as an exact limit ignoring inductive loads and startup transients.
        - Confusing circuit P_lim with the total contracted power of the home.
    next_step:
      es: Si la carga prevista supera 0.8 × P_lim, considerar redistribución o revisión del calibre.
      en: If planned load exceeds 0.8 × P_lim, consider redistribution or rating review.
    output_contract:
      units: W
      range: "0 – 10 000 W (residencial)"
      sign: positivo
    result_blocks:
      - condition:
          es: P_carga >= P_lim
          en: P_carga >= P_lim
        message:
          es: Carga supera el límite magnetotérmico estimado. Esperable sobrecarga.
          en: Load exceeds estimated MCB limit. Overload expected.
        severity: warning
      - condition:
          es: P_carga < P_lim
          en: P_carga < P_lim
        message:
          es: Carga dentro del límite magnetotérmico estimado.
          en: Load within estimated MCB limit.
        severity: ok
"""

p = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico/interpretacion.yaml')
p.write_text(content, encoding='utf-8')
print('Written interpretacion.yaml,', len(content.splitlines()), 'lines')
