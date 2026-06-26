const e=`version: "v5"
id: interpretacion_generadores
leaf_id: generadores

nombre:
  es: Interpretación de los generadores eléctricos
  en: Interpretation of electrical generators

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: induccion-electromagnetica
  parent_id: aplicaciones
  ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/aplicaciones/generadores

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación física
    en: Physical interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_rules: 3
    show_warnings: true

dependencies:
  formulas:
    - flujo_maximo_generador
    - amplitud_fem_generador
    - fem_media_generador
    - eficiencia_generador
    - potencia_util_generador
  magnitudes:
    - N
    - B
    - A
    - omega
    - Phi_B
    - DeltaPhi_B
    - Delta_t
    - epsilon
    - epsilon_0
    - P_mec
    - P_elec
    - eta

global_context:
  physical_domain:
    es: Electromagnetismo clásico — conversión de trabajo mecánico en fem eléctrica mediante variación controlada de flujo magnético.
    en: Classical electromagnetism — conversion of mechanical work into electrical emf through controlled magnetic flux variation.
  axis_convention:
    es: "La fem positiva se toma en la dirección convencional de la corriente inducida; el rendimiento está acotado entre 0 y 1."
    en: "Positive emf is taken in the conventional direction of induced current; efficiency is bounded between 0 and 1."
  standard_assumptions:
    - "Bobina plana con campo magnético aproximadamente uniforme"
    - "Modelo sinusoidal ideal para la fem de amplitud constante"
    - "Pérdidas globales resumidas en un solo rendimiento constante"
    - "Régimen estacionario — no se describen transitorios de arranque"
  standard_warnings:
    - "El modelo ideal no incluye saturación del núcleo magnético"
    - "El rendimiento real varía con la carga y la temperatura"
    - "Las unidades deben ser coherentes: ángulos en radianes, tiempos en segundos, flujo en webers"

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

  epsilon_0:
    magnitude_type: positive_scalar
    semantic_role:
      es: Amplitud de la fem sinusoidal ideal producida por el generador rotatorio
      en: Amplitude of the ideal sinusoidal emf produced by the rotating generator
    summary_rules:
      - id: eps0_summary_high
        when: "epsilon_0 > 400"
        status: ok
        text:
          es: "[[epsilon_0]] supera 400 V. Este rango corresponde a generadores de media tensión o a parámetros que exceden el modelo educativo. Verifica que [[N]], [[B]], [[A]] y [[omega]] estén en unidades SI."
          en: "[[epsilon_0]] exceeds 400 V. This range corresponds to medium-voltage generators or parameters beyond the educational model. Verify that [[N]], [[B]], [[A]] and [[omega]] are in SI units."
      - id: eps0_summary_zero
        when: "epsilon_0 == 0"
        status: warning
        text:
          es: "[[epsilon_0]] es nula. Revisa que [[N]], [[B]], [[A]] y [[omega]] sean todos estrictamente positivos."
          en: "[[epsilon_0]] is zero. Check that [[N]], [[B]], [[A]] and [[omega]] are all strictly positive."
      - id: eps0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon_0]] resume el pico de tensión ideal que el generador puede producir. Depende linealmente de [[N]], [[B]], [[A]] y [[omega]]: duplicar cualquiera de ellos duplica la amplitud."
          en: "[[epsilon_0]] summarises the ideal voltage peak the generator can produce. It depends linearly on [[N]], [[B]], [[A]] and [[omega]]: doubling any one of them doubles the amplitude."
    physical_reading_rules:
      - id: eps0_reading_omega
        when: "true"
        status: ok
        text:
          es: "[[omega]] es el factor de rapidez: controla cuántas veces por segundo cambia el flujo. Girar más rápido aumenta [[epsilon_0]] proporcionalmente, igual que incrementar [[N]] o [[B]] o [[A]]."
          en: "[[omega]] is the speed factor: it controls how many times per second the flux changes. Spinning faster increases [[epsilon_0]] proportionally, just like increasing [[N]], [[B]], or [[A]]."
    coherence_rules:
      - id: eps0_coherence_zero_factor
        when: "N == 0 or B == 0 or A == 0 or omega == 0"
        status: error
        text:
          es: "Uno de los factores (N, B, A, omega) es nulo: [[epsilon_0]] debe ser cero. Si el resultado no lo es, hay un error de sustitución."
          en: "One of the factors (N, B, A, omega) is zero: [[epsilon_0]] must be zero. If the result is not, there is a substitution error."
      - id: eps0_coherence_default
        when: "true"
        status: ok
        text:
          es: "Comprueba que [[epsilon_0]] sea igual a [[Phi_B]] multiplicado por [[omega]]. Si difieren, revisa la sustitución de [[N]], [[B]] y [[A]]."
          en: "Check that [[epsilon_0]] equals [[Phi_B]] multiplied by [[omega]]. If they differ, review the substitution of [[N]], [[B]] and [[A]]."
    model_validity_rules:
      - id: eps0_validity_saturation
        when: "B > 2"
        status: warning
        text:
          es: "Con [[B]] mayor de 2 T el núcleo magnético puede saturarse; el modelo lineal ideal sobreestima [[epsilon_0]]."
          en: "With [[B]] above 2 T the magnetic core may saturate; the ideal linear model overestimates [[epsilon_0]]."
      - id: eps0_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para campo uniforme, bobina plana, régimen sinusoidal estable y sin saturación de núcleo."
          en: "The model is valid for uniform field, flat coil, stable sinusoidal regime, and no core saturation."
    graph_rules:
      - id: eps0_graph_linear
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[epsilon_0]] frente a [[omega]], el punto calculado cae sobre una recta de pendiente [[Phi_B]]. Si [[omega]] se duplica, [[epsilon_0]] se duplica exactamente."
          en: "On the [[epsilon_0]] versus [[omega]] graph, the calculated point lies on a line with slope [[Phi_B]]. If [[omega]] doubles, [[epsilon_0]] doubles exactly."
    likely_errors:
      - id: eps0_error_rms
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[epsilon_0]] como si fuera el valor eficaz. El valor eficaz es [[epsilon_0]] dividido por la raíz de dos. Para potencia media en una carga resistiva usa siempre el valor eficaz."
          en: "Common error: using [[epsilon_0]] as if it were the rms value. The rms value is [[epsilon_0]] divided by the square root of two. For mean power in a resistive load, always use the rms value."
      - id: eps0_error_units
        when: "true"
        status: warning
        text:
          es: "Error de unidades: si [[omega]] está en rpm en lugar de rad/s, el resultado es un factor 2π/60 erróneo. Convierte siempre a rad/s antes de sustituir."
          en: "Units error: if [[omega]] is in rpm instead of rad/s, the result is off by a factor of 2π/60. Always convert to rad/s before substituting."
    next_step_rules:
      - id: eps0_next_rms
        when: "true"
        status: ok
        text:
          es: "Con [[epsilon_0]] conocida, el valor eficaz es [[epsilon_0]] / √2. Divide entre [[omega]] para obtener [[Phi_B]] y verificar el enlace de flujo."
          en: "With [[epsilon_0]] known, the rms value is [[epsilon_0]] / √2. Divide by [[omega]] to get [[Phi_B]] and verify the flux linkage."

  Phi_B:
    magnitude_type: positive_scalar
    semantic_role:
      es: Flujo magnético máximo enlazado por la bobina con el campo exterior
      en: Maximum magnetic flux linked by the coil with the external field
    summary_rules:
      - id: PhiB_summary_zero
        when: "Phi_B == 0"
        status: warning
        text:
          es: "[[Phi_B]] es nulo. Alguno de los factores N, B o A es cero."
          en: "[[Phi_B]] is zero. One of the factors N, B or A is zero."
      - id: PhiB_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Phi_B]] cuantifica la reserva magnética disponible. Un flujo mayor permite inducir más fem por el mismo giro."
          en: "[[Phi_B]] quantifies the available magnetic reserve. Larger flux allows inducing more emf for the same rotation."
    physical_reading_rules:
      - id: PhiB_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Phi_B]] aumenta si se incrementa [[N]], [[B]] o [[A]]. No depende de [[omega]]: es una magnitud de estado, no de rapidez."
          en: "[[Phi_B]] increases if [[N]], [[B]] or [[A]] is increased. It does not depend on [[omega]]: it is a state quantity, not a rate quantity."
    coherence_rules:
      - id: PhiB_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verifica que [[Phi_B]] sea igual a N × B × A. Si [[epsilon_0]] y [[omega]] son conocidas, [[Phi_B]] debe coincidir con [[epsilon_0]] / [[omega]]."
          en: "Verify that [[Phi_B]] equals N × B × A. If [[epsilon_0]] and [[omega]] are known, [[Phi_B]] must match [[epsilon_0]] / [[omega]]."
    model_validity_rules:
      - id: PhiB_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo supone campo uniforme y orientación de máximo enlace. Si el campo no es perpendicular al área, el flujo real es menor."
          en: "The model assumes uniform field and maximum-linkage orientation. If the field is not perpendicular to the area, the real flux is smaller."
    graph_rules:
      - id: PhiB_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[epsilon_0]] frente a [[omega]], [[Phi_B]] es la pendiente de la recta. Un mayor [[Phi_B]] corresponde a una recta más inclinada."
          en: "On the [[epsilon_0]] versus [[omega]] graph, [[Phi_B]] is the slope of the line. Larger [[Phi_B]] corresponds to a steeper line."
    likely_errors:
      - id: PhiB_error_field_confusion
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[B]] (campo magnético) con [[Phi_B]] (flujo). El flujo incluye geometría y espiras; el campo no."
          en: "Common error: confusing [[B]] (magnetic field) with [[Phi_B]] (flux). Flux includes geometry and turns; field does not."
    next_step_rules:
      - id: PhiB_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[Phi_B]] conocido, la amplitud de la fem es [[Phi_B]] × [[omega]]. Aumentar [[omega]] es la forma más directa de incrementar [[epsilon_0]] manteniendo fija la geometría."
          en: "With [[Phi_B]] known, the emf amplitude is [[Phi_B]] × [[omega]]. Increasing [[omega]] is the most direct way to raise [[epsilon_0]] with fixed geometry."

  epsilon:
    magnitude_type: signed_scalar
    semantic_role:
      es: Fem media inducida por un cambio de flujo magnético en un intervalo de tiempo
      en: Mean emf induced by a magnetic flux change over a time interval
    summary_rules:
      - id: eps_summary_zero
        when: "epsilon == 0"
        status: ok
        text:
          es: "[[epsilon]] media es nula: el flujo no ha cambiado neto en el intervalo, o el cambio de flujo es cero."
          en: "Mean [[epsilon]] is zero: the flux has not changed net over the interval, or the flux change is zero."
      - id: eps_summary_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon]] mide la rapidez media del cambio de [[Phi_B]]: cuanto más rápido cambia el flujo, mayor es la fem media. El signo indica la polaridad inducida según la ley de Lenz."
          en: "[[epsilon]] measures the average rate of change of [[Phi_B]]: the faster the flux changes, the larger the mean emf. The sign indicates induced polarity according to Lenz's law."
    physical_reading_rules:
      - id: eps_reading_default
        when: "true"
        status: ok
        text:
          es: "El mismo [[DeltaPhi_B]] produce más [[epsilon]] si [[Delta_t]] es menor. La fem media es inversamente proporcional al intervalo temporal."
          en: "The same [[DeltaPhi_B]] produces more [[epsilon]] if [[Delta_t]] is smaller. Mean emf is inversely proportional to the time interval."
    coherence_rules:
      - id: eps_coherence_zero_DeltaPhi
        when: "DeltaPhi_B == 0"
        status: ok
        text:
          es: "Cambio de flujo nulo implica [[epsilon]] media nula. El generador no produce fem sin variación de flujo."
          en: "Zero flux change implies zero mean [[epsilon]]. The generator produces no emf without flux variation."
      - id: eps_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verifica que [[epsilon]] sea el cociente de [[DeltaPhi_B]] entre [[Delta_t]]. Si obtienes un valor distinto, revisa las unidades de flujo (Wb) y de tiempo (s)."
          en: "Verify that [[epsilon]] is the ratio of [[DeltaPhi_B]] to [[Delta_t]]. If you get a different value, check flux units (Wb) and time units (s)."
    model_validity_rules:
      - id: eps_validity_default
        when: "true"
        status: ok
        text:
          es: "La fem media es válida para intervalos finitos con cambio de flujo conocido. No describe la forma instantánea de la señal."
          en: "Mean emf is valid for finite intervals with known flux change. It does not describe the instantaneous signal shape."
    graph_rules:
      - id: eps_graph_default
        when: "true"
        status: ok
        text:
          es: "En una gráfica [[epsilon]] frente a [[Delta_t]], el punto calculado cae sobre una hipérbola: reducir el intervalo aumenta la fem media para el mismo cambio de flujo."
          en: "On an [[epsilon]] versus [[Delta_t]] graph, the calculated point lies on a hyperbola: reducing the interval increases mean emf for the same flux change."
    likely_errors:
      - id: eps_error_max_flux
        when: "true"
        status: warning
        text:
          es: "Error frecuente: sustituir [[Phi_B]] máximo en lugar del cambio [[DeltaPhi_B]]. La fem media depende de la variación de flujo, no de su valor absoluto."
          en: "Common error: substituting maximum [[Phi_B]] instead of the change [[DeltaPhi_B]]. Mean emf depends on flux variation, not on its absolute value."
    next_step_rules:
      - id: eps_next_default
        when: "true"
        status: ok
        text:
          es: "Determina la polaridad con la ley de Lenz si el circuito requiere saber el sentido de la corriente inducida."
          en: "Determine polarity with Lenz's law if the circuit requires knowing the direction of the induced current."

  eta:
    magnitude_type: positive_scalar
    semantic_role:
      es: Fracción de la potencia mecánica de entrada que aparece como potencia eléctrica útil
      en: Fraction of mechanical input power that appears as useful electrical power
    summary_rules:
      - id: eta_summary_above_one
        when: "eta > 1"
        status: error
        text:
          es: "[[eta]] mayor que uno viola la conservación de la energía. Probablemente se usó un porcentaje como número entero (p.ej., 78 en lugar de 0.78)."
          en: "[[eta]] above one violates energy conservation. A percentage was probably used as a whole number (e.g. 78 instead of 0.78)."
      - id: eta_summary_high
        when: "eta > 0.95"
        status: ok
        text:
          es: "[[eta]] mayor de 0.95 indica pérdidas menores del 5 %. Es un valor muy alto, típico de grandes generadores industriales bien diseñados."
          en: "[[eta]] above 0.95 indicates losses below 5 %. This is a very high value, typical of large, well-designed industrial generators."
      - id: eta_summary_default
        when: "true"
        status: ok
        text:
          es: "[[eta]] expresa la calidad de la conversión: una fracción [[eta]] de [[P_mec]] se convierte en [[P_elec]] útil; el resto (1 − [[eta]]) se disipa como calor, rozamiento o pérdidas magnéticas."
          en: "[[eta]] expresses the quality of conversion: a fraction [[eta]] of [[P_mec]] becomes useful [[P_elec]]; the rest (1 − [[eta]]) is dissipated as heat, friction, or magnetic losses."
    physical_reading_rules:
      - id: eta_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[eta]] alto no significa que el generador produzca más energía, sino que pierde menos. La fuente de energía sigue siendo la entrada mecánica [[P_mec]]."
          en: "High [[eta]] does not mean the generator produces more energy; it means it loses less. The energy source remains the mechanical input [[P_mec]]."
    coherence_rules:
      - id: eta_coherence_above_one
        when: "eta > 1"
        status: error
        text:
          es: "Inconsistencia energética: [[P_elec]] supera [[P_mec]]. Revisa si [[eta]] fue introducido como porcentaje entero."
          en: "Energy inconsistency: [[P_elec]] exceeds [[P_mec]]. Check whether [[eta]] was entered as a whole-number percentage."
      - id: eta_coherence_default
        when: "true"
        status: ok
        text:
          es: "Comprueba que [[P_elec]] sea igual a [[eta]] × [[P_mec]]. Si no coinciden, revisa la conversión del porcentaje."
          en: "Check that [[P_elec]] equals [[eta]] × [[P_mec]]. If they do not match, review the percentage conversion."
    model_validity_rules:
      - id: eta_validity_transient
        when: "true"
        status: info
        text:
          es: "[[eta]] es válido solo en régimen estacionario. Durante el arranque o la desconexión, las pérdidas instantáneas pueden ser mayores."
          en: "[[eta]] is valid only in steady-state. During startup or disconnection, instantaneous losses can be larger."
    graph_rules:
      - id: eta_graph_default
        when: "true"
        status: ok
        text:
          es: "En una gráfica [[P_elec]] frente a [[P_mec]], [[eta]] es la pendiente de la recta. Una línea de pendiente 1 corresponde a conversión perfecta; la pendiente real siempre es menor."
          en: "On a [[P_elec]] versus [[P_mec]] graph, [[eta]] is the slope of the line. A slope of 1 means perfect conversion; the real slope is always less."
    likely_errors:
      - id: eta_error_percentage
        when: "true"
        status: warning
        text:
          es: "Error crítico: usar el porcentaje como entero. Si el problema dice 78 %, debes usar 0.78, no 78. Un [[eta]] entero produce [[P_elec]] cien veces mayor que la entrada."
          en: "Critical error: using the percentage as a whole number. If the problem states 78 %, use 0.78, not 78. An integer [[eta]] produces [[P_elec]] one hundred times larger than the input."
    next_step_rules:
      - id: eta_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[eta]] y [[P_mec]] conocidos, calcula [[P_elec]] = [[eta]] × [[P_mec]]. Para mejorar el diseño, identifica qué pérdidas dominan: mecánicas, eléctricas o magnéticas."
          en: "With [[eta]] and [[P_mec]] known, compute [[P_elec]] = [[eta]] × [[P_mec]]. To improve design, identify which losses dominate: mechanical, electrical, or magnetic."

  P_elec:
    magnitude_type: positive_scalar
    semantic_role:
      es: Potencia eléctrica entregada al circuito externo después de descontar las pérdidas internas
      en: Electrical power delivered to the external circuit after subtracting internal losses
    summary_rules:
      - id: Pelec_summary_above_Pmec
        when: "P_elec > P_mec"
        status: error
        text:
          es: "[[P_elec]] supera [[P_mec]]: violación de conservación de la energía. Revisa [[eta]] o [[P_mec]]."
          en: "[[P_elec]] exceeds [[P_mec]]: energy conservation violation. Check [[eta]] or [[P_mec]]."
      - id: Pelec_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P_elec]] es la potencia realmente disponible para la carga. Siempre es menor o igual que [[P_mec]] porque las pérdidas reducen la fracción útil."
          en: "[[P_elec]] is the power actually available to the load. It is always less than or equal to [[P_mec]] because losses reduce the useful fraction."
    physical_reading_rules:
      - id: Pelec_reading_default
        when: "true"
        status: ok
        text:
          es: "[[P_elec]] depende de dos factores: cuánta energía entra ([[P_mec]]) y cuán eficientemente se convierte ([[eta]]). Mejorar cualquiera de los dos aumenta la salida útil."
          en: "[[P_elec]] depends on two factors: how much energy enters ([[P_mec]]) and how efficiently it is converted ([[eta]]). Improving either increases useful output."
    coherence_rules:
      - id: Pelec_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verifica que [[P_elec]] sea igual a [[eta]] × [[P_mec]] y que no supere [[P_mec]]."
          en: "Verify that [[P_elec]] equals [[eta]] × [[P_mec]] and that it does not exceed [[P_mec]]."
    model_validity_rules:
      - id: Pelec_validity_default
        when: "true"
        status: info
        text:
          es: "El cálculo describe potencia media en régimen estable. Los picos transitorios de arranque pueden ser mayores o menores."
          en: "The calculation describes average power in steady operation. Startup transient peaks can be higher or lower."
    graph_rules:
      - id: Pelec_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[P_elec]] frente a [[P_mec]], la separación respecto a la recta de pendiente 1 representa las pérdidas totales del generador."
          en: "On the [[P_elec]] versus [[P_mec]] graph, the separation from the unit-slope line represents the total losses of the generator."
    likely_errors:
      - id: Pelec_error_emf_confusion
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[epsilon_0]] (tensión) con [[P_elec]] (potencia). La potencia eléctrica entregada no se obtiene directamente de la amplitud de la fem sin conocer la corriente o la resistencia de carga."
          en: "Common error: confusing [[epsilon_0]] (voltage) with [[P_elec]] (power). Delivered electrical power is not obtained directly from the emf amplitude without knowing the current or load resistance."
    next_step_rules:
      - id: Pelec_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[P_elec]] calculada, compara con la demanda real de la carga. Si la carga requiere más potencia, aumenta [[P_mec]] o mejora [[eta]]."
          en: "With [[P_elec]] computed, compare with the real load demand. If the load requires more power, increase [[P_mec]] or improve [[eta]]."

cross_checks:
  - id: cc_energia_conservada
    condition: "P_elec <= P_mec"
    message:
      es: "Inconsistencia energética: [[P_elec]] no puede superar [[P_mec]]. Revisa [[eta]] o las potencias introducidas."
      en: "Energy inconsistency: [[P_elec]] cannot exceed [[P_mec]]. Check [[eta]] or the power values entered."
  - id: cc_eps0_phi_omega
    condition: "abs(epsilon_0 - Phi_B * omega) > 1e-6"
    message:
      es: "Inconsistencia entre [[epsilon_0]], [[Phi_B]] y [[omega]]: debe cumplirse [[epsilon_0]] = [[Phi_B]] × [[omega]]."
      en: "Inconsistency among [[epsilon_0]], [[Phi_B]] and [[omega]]: [[epsilon_0]] = [[Phi_B]] × [[omega]] must hold."

error_patterns:
  - id: ep_porcentaje_entero
    detect_when: "eta > 1"
    message:
      es: "Error de escala detectado: [[eta]] mayor que uno sugiere que se usó un porcentaje como número entero en vez de fracción decimal."
      en: "Scale error detected: [[eta]] above one suggests a percentage was used as a whole number instead of a decimal fraction."
  - id: ep_flujo_maximo_vs_cambio
    detect_when: "epsilon_calculation_uses_Phi_B_instead_of_DeltaPhi_B"
    message:
      es: "Posible confusión entre flujo máximo y cambio de flujo: la fem media usa [[DeltaPhi_B]], no [[Phi_B]]."
      en: "Possible confusion between maximum flux and flux change: mean emf uses [[DeltaPhi_B]], not [[Phi_B]]."

graph_binding:
  channels:
    - id: y_axis_main
      magnitude: epsilon_0
      role: dependent_variable
    - id: x_axis_main
      magnitude: omega
      role: independent_variable
    - id: y_axis_secondary
      magnitude: Phi_B
      role: secondary_dependent

mini_graph:
  enabled: true
  preferred_type: Coord
  default_view: "epsilon_0 vs omega"

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
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true

`;export{e as default};
