const e=`version: "5.0"
id: interp-impedancia-mecanica-en-solidos
leaf_id: impedancia-mecanica-en-solidos

nombre:
  es: "Interpretación — Impedancia mecánica en sólidos"
  en: "Interpretation — Mechanical Impedance in Solids"

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    summary:
      es: Resumen
      en: Summary
    physical_reading:
      es: Lectura física
      en: Physical reading
    coherence:
      es: Coherencia
      en: Coherence
    model_validity:
      es: Validez del modelo
      en: Model validity
    graph_reading:
      es: Lectura del gráfico
      en: Graph reading
    likely_errors:
      es: Errores probables
      en: Likely errors
    next_step:
      es: Siguiente paso
      en: Next step
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_messages: 4
    show_warnings: true

dependencies:
  formulas:
    - impedancia_mecanica
    - coeficiente_reflexion_impedancia
    - coeficiente_transmision_impedancia
  magnitudes:
    - Z_mec
    - rho
    - c_s
    - A_sec
    - R_Z
    - T_Z

global_context:
  physical_domain:
    es: "Propagación de ondas mecánicas en sólidos y transmisión en interfaces"
    en: "Mechanical wave propagation in solids and transmission at interfaces"
  axis_convention:
    es: "Dirección de propagación positiva hacia la derecha; Z₁ es el medio incidente"
    en: "Positive propagation direction to the right; Z₁ is the incident medium"
  standard_assumptions:
    - "Ondas planas en incidencia normal"
    - "Materiales linealmente elásticos"
    - "Sección transversal constante en cada medio"
  standard_warnings:
    - "No aplicar a incidencia oblicua sin ecuaciones de Zoeppritz"
    - "No confundir impedancia mecánica (kg/s) con impedancia acústica específica (Pa·s/m)"

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
  Z_mec:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Resistencia del sólido al movimiento vibratorio"
      en: "Solid's resistance to vibratory motion"
    summary_rules:
      - id: Z_mec_summary_default
        when: "true"
        status: ok
        text:
          es: "La impedancia mecánica calculada es [[Z_mec]]. Indica la resistencia del medio al movimiento vibratorio, combinando densidad [[rho]], velocidad [[c_s]] y sección [[A_sec]]."
          en: "Calculated mechanical impedance is [[Z_mec]]. It indicates the medium's resistance to vibratory motion, combining density [[rho]], velocity [[c_s]] and section [[A_sec]]."
      - id: Z_mec_summary_high
        when: "Z_mec > 1e6"
        status: ok
        text:
          es: "Impedancia alta (> 10⁶ kg/s), típica de barras metálicas gruesas. El medio ofrece gran resistencia al movimiento vibratorio."
          en: "High impedance (> 10⁶ kg/s), typical of thick metal bars. The medium offers high resistance to vibratory motion."
      - id: Z_mec_summary_low
        when: "Z_mec < 1e4"
        status: warning
        text:
          es: "Impedancia baja (< 10⁴ kg/s), típica de polímeros o secciones muy finas. El medio vibra fácilmente ante cualquier excitación."
          en: "Low impedance (< 10⁴ kg/s), typical of polymers or very thin sections. The medium vibrates easily under any excitation."
    physical_reading_rules:
      - id: Z_mec_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Z_mec]] combina las propiedades del material ([[rho]] y [[c_s]]) con la geometría ([[A_sec]]). Un aumento de cualquiera de los tres factores eleva la impedancia proporcionalmente."
          en: "[[Z_mec]] combines material properties ([[rho]] and [[c_s]]) with geometry ([[A_sec]]). An increase in any of the three factors raises impedance proportionally."
    coherence_rules:
      - id: Z_mec_coherence_negative
        when: "Z_mec < 0"
        status: error
        text:
          es: "Impedancia negativa es físicamente imposible. Revisar que [[rho]], [[c_s]] y [[A_sec]] sean positivos."
          en: "Negative impedance is physically impossible. Check that [[rho]], [[c_s]] and [[A_sec]] are positive."
      - id: Z_mec_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[Z_mec]] esté entre 10³ y 10⁸ kg/s para sólidos de ingeniería típicos."
          en: "Verify that [[Z_mec]] is between 10³ and 10⁸ kg/s for typical engineering solids."
    model_validity_rules:
      - id: Z_mec_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido si la longitud de onda es mucho mayor que las dimensiones transversales de la sección. A frecuencias altas, la impedancia se vuelve función de la frecuencia y se necesitan modelos modales."
          en: "The model is valid if wavelength is much larger than the transverse dimensions of the section. At high frequencies, impedance becomes frequency-dependent and modal models are needed."
    graph_rules:
      - id: Z_mec_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica, [[Z_mec]] aparece como parámetro de entrada. Materiales más densos y rígidos producen mayor impedancia y menor [[T_Z]]."
          en: "In the graph, [[Z_mec]] appears as input parameter. Denser, stiffer materials produce higher impedance and lower [[T_Z]]."
    likely_errors:
      - id: Z_mec_error_units
        when: "Z_mec < 100"
        status: warning
        text:
          es: "Valor extremadamente bajo. Posible error de unidades en [[A_sec]] (cm² sin convertir a m²)."
          en: "Extremely low value. Possible unit error in [[A_sec]] (cm² not converted to m²)."
      - id: Z_mec_error_confusion
        when: "true"
        status: warning
        text:
          es: "Verificar que no se confunde impedancia mecánica (kg/s) con impedancia acústica específica (Pa·s/m, sin multiplicar por [[A_sec]])."
          en: "Verify that mechanical impedance (kg/s) is not confused with specific acoustic impedance (Pa·s/m, without multiplying by [[A_sec]])."
    next_step_rules:
      - id: Z_mec_next_default
        when: "true"
        status: ok
        text:
          es: "Con la impedancia calculada, el siguiente paso es determinar [[R_Z]] y [[T_Z]] en la interfaz con otro medio para evaluar la eficiencia de transmisión."
          en: "With calculated impedance, the next step is to determine [[R_Z]] and [[T_Z]] at the interface with another medium to evaluate transmission efficiency."

  R_Z:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Fracción de amplitud de velocidad reflejada en la interfaz"
      en: "Fraction of velocity amplitude reflected at the interface"
    summary_rules:
      - id: R_Z_summary_default
        when: "true"
        status: ok
        text:
          es: "El coeficiente de reflexión es [[R_Z]]. Indica qué fracción de la amplitud de velocidad se refleja en la interfaz entre ambos medios."
          en: "Reflection coefficient is [[R_Z]]. It indicates what fraction of velocity amplitude is reflected at the interface between both media."
      - id: R_Z_summary_low
        when: "abs(R_Z) < 0.1"
        status: ok
        text:
          es: "Reflexión muy baja (|R| < 0.1). La interfaz está bien adaptada y la mayor parte de la energía vibratoria se transmite al segundo medio."
          en: "Very low reflection (|R| < 0.1). The interface is well matched and most vibratory energy is transmitted to the second medium."
      - id: R_Z_summary_high
        when: "abs(R_Z) > 0.8"
        status: warning
        text:
          es: "Reflexión alta (|R| > 0.8). La interfaz actúa casi como barrera total. Considerar capa de adaptación de impedancias."
          en: "High reflection (|R| > 0.8). The interface acts nearly as a total barrier. Consider impedance matching layer."
    physical_reading_rules:
      - id: R_Z_reading_positive
        when: "R_Z > 0"
        status: ok
        text:
          es: "Signo positivo: el medio receptor tiene mayor [[Z_mec]]. La onda reflejada mantiene la fase de la velocidad incidente."
          en: "Positive sign: receiving medium has higher [[Z_mec]]. Reflected wave maintains incident velocity phase."
      - id: R_Z_reading_negative
        when: "R_Z < 0"
        status: ok
        text:
          es: "Signo negativo: el medio receptor tiene menor [[Z_mec]]. La onda reflejada invierte la fase respecto a la incidente."
          en: "Negative sign: receiving medium has lower [[Z_mec]]. Reflected wave inverts phase relative to incident."
      - id: R_Z_reading_default
        when: "true"
        status: ok
        text:
          es: "La fracción de potencia reflejada es el cuadrado de [[R_Z]]. La fracción de potencia transmitida es uno menos ese cuadrado."
          en: "Power fraction reflected is the square of [[R_Z]]. Power fraction transmitted is one minus that square."
    coherence_rules:
      - id: R_Z_coherence_impossible
        when: "abs(R_Z) > 1"
        status: error
        text:
          es: "ERROR: |[[R_Z]]| > 1 es físicamente imposible. Verificar que Z₁ y Z₂ no están intercambiados en la fórmula."
          en: "ERROR: |[[R_Z]]| > 1 is physically impossible. Verify that Z₁ and Z₂ are not swapped in the formula."
      - id: R_Z_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar consistencia: [[T_Z]] debe ser igual a uno más [[R_Z]], y el balance de potencias debe cerrar."
          en: "Verify consistency: [[T_Z]] must equal one plus [[R_Z]], and the power balance must close."
    model_validity_rules:
      - id: R_Z_validity_default
        when: "true"
        status: ok
        text:
          es: "La fórmula de [[R_Z]] solo es válida para incidencia normal. Para ángulos oblicuos aparece conversión de modos y se necesitan las ecuaciones de Zoeppritz."
          en: "The [[R_Z]] formula is only valid for normal incidence. For oblique angles mode conversion appears and Zoeppritz equations are needed."
    graph_rules:
      - id: R_Z_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica, [[R_Z]] varía entre -1 y +1 según el ratio de impedancias. Cruza cero cuando ambas impedancias son iguales (adaptación perfecta)."
          en: "In the graph, [[R_Z]] varies between -1 and +1 according to the impedance ratio. Crosses zero when both impedances are equal (perfect matching)."
    likely_errors:
      - id: R_Z_error_swap
        when: "abs(R_Z) > 1"
        status: error
        text:
          es: "Has intercambiado Z₁ y Z₂ en la fórmula, o hay error en los datos de [[Z_mec]] de alguno de los medios."
          en: "You have swapped Z₁ and Z₂ in the formula, or there is an error in [[Z_mec]] data for one of the media."
      - id: R_Z_error_amplitude
        when: "true"
        status: warning
        text:
          es: "Recuerda que [[R_Z]] es en amplitud de velocidad. La fracción de energía reflejada es el cuadrado, no el valor directo."
          en: "Remember [[R_Z]] is in velocity amplitude. Energy fraction reflected is the square, not the direct value."
    next_step_rules:
      - id: R_Z_next_matching
        when: "abs(R_Z) > 0.5"
        status: ok
        text:
          es: "Reflexión significativa. El siguiente paso es evaluar si conviene diseñar una capa de adaptación con impedancia intermedia entre ambos medios para reducir la reflexión."
          en: "Significant reflection. The next step is to evaluate whether a matching layer with impedance intermediate between both media should be designed to reduce reflection."
      - id: R_Z_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular la potencia transmitida y verificar si cumple las especificaciones del diseño de la unión o sistema de acoplamiento."
          en: "Calculate transmitted power and verify if it meets the design specifications for the joint or coupling system."

  T_Z:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Fracción de amplitud de velocidad transmitida a través de la interfaz"
      en: "Fraction of velocity amplitude transmitted through the interface"
    summary_rules:
      - id: T_Z_summary_default
        when: "true"
        status: ok
        text:
          es: "El coeficiente de transmisión es [[T_Z]]. Indica la fracción de velocidad de partícula que pasa al segundo medio en la interfaz."
          en: "Transmission coefficient is [[T_Z]]. It indicates the fraction of particle velocity that passes to the second medium at the interface."
      - id: T_Z_summary_over1
        when: "T_Z > 1"
        status: ok
        text:
          es: "[[T_Z]] supera la unidad en amplitud. Esto es físicamente correcto cuando el medio receptor tiene menor [[Z_mec]]; la velocidad aumenta pero la potencia se conserva."
          en: "[[T_Z]] exceeds unity in amplitude. This is physically correct when the receiving medium has lower [[Z_mec]]; velocity increases but power is conserved."
    physical_reading_rules:
      - id: T_Z_reading_default
        when: "true"
        status: ok
        text:
          es: "[[T_Z]] es igual a uno más [[R_Z]]. Valor 1 indica adaptación perfecta de impedancias. Puede superar 1 sin violar la conservación de energía porque la potencia depende también de [[Z_mec]]."
          en: "[[T_Z]] equals one plus [[R_Z]]. Value 1 indicates perfect impedance matching. Can exceed 1 without violating energy conservation because power also depends on [[Z_mec]]."
    coherence_rules:
      - id: T_Z_coherence_over2
        when: "T_Z > 2"
        status: error
        text:
          es: "ERROR: [[T_Z]] > 2 es imposible. El máximo teórico es 2. Revisar el cálculo algebraico completo."
          en: "ERROR: [[T_Z]] > 2 is impossible. Theoretical maximum is 2. Review the complete algebraic calculation."
      - id: T_Z_coherence_negative
        when: "T_Z <= 0"
        status: error
        text:
          es: "ERROR: [[T_Z]] nulo o negativo es imposible para la amplitud transmitida. Verificar signos en la fórmula."
          en: "ERROR: [[T_Z]] zero or negative is impossible for transmitted amplitude. Check signs in the formula."
      - id: T_Z_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[T_Z]] es igual a uno más [[R_Z]] como test de consistencia algebraica del cálculo."
          en: "Verify that [[T_Z]] equals one plus [[R_Z]] as algebraic consistency test for the calculation."
    model_validity_rules:
      - id: T_Z_validity_default
        when: "true"
        status: ok
        text:
          es: "Válido para ondas planas en incidencia normal. Las mismas limitaciones de frecuencia y geometría que aplican a [[R_Z]] son relevantes aquí."
          en: "Valid for plane waves at normal incidence. The same frequency and geometry limitations that apply to [[R_Z]] are relevant here."
    graph_rules:
      - id: T_Z_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica, [[T_Z]] varía entre 0 y 2. Cuando el ratio de impedancias es 1, [[T_Z]] es exactamente 1. Tiende a 2 cuando el medio receptor es mucho más rígido."
          en: "In the graph, [[T_Z]] varies between 0 and 2. When impedance ratio is 1, [[T_Z]] is exactly 1. Tends to 2 when receiving medium is much stiffer."
    likely_errors:
      - id: T_Z_error_over1
        when: "T_Z > 1"
        status: ok
        text:
          es: "No es un error que [[T_Z]] supere 1. Es amplitud de velocidad, no energía. La potencia transmitida sigue siendo menor o igual a la incidente."
          en: "It is not an error that [[T_Z]] exceeds 1. This is velocity amplitude, not energy. Transmitted power is still less than or equal to incident."
      - id: T_Z_error_default
        when: "true"
        status: warning
        text:
          es: "Si [[T_Z]] > 2, hay error de cálculo seguro. El máximo teórico es 2 y se alcanza solo cuando [[Z_mec]] del receptor tiende a infinito."
          en: "If [[T_Z]] > 2, there is a certain calculation error. Theoretical maximum is 2 and is reached only when receiving [[Z_mec]] tends to infinity."
    next_step_rules:
      - id: T_Z_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[R_Z]] y [[T_Z]] calculados, el siguiente paso es obtener la fracción de potencia transmitida para evaluar la eficiencia energética de la unión entre los dos sólidos."
          en: "With [[R_Z]] and [[T_Z]] calculated, the next step is to obtain the transmitted power fraction to evaluate the energy efficiency of the joint between the two solids."

  rho:
    magnitude_type: fundamental
    semantic_role:
      es: "Densidad del material que determina la inercia del medio"
      en: "Material density that determines the medium's inertia"
    summary_rules:
      - id: rho_summary_default
        when: "true"
        status: ok
        text:
          es: "La densidad [[rho]] del material es uno de los tres factores que determinan [[Z_mec]]. Materiales más densos tienen mayor impedancia a igualdad de velocidad y sección."
          en: "Material density [[rho]] is one of three factors determining [[Z_mec]]. Denser materials have higher impedance for equal velocity and section."
    physical_reading_rules:
      - id: rho_reading_default
        when: "true"
        status: ok
        text:
          es: "[[rho]] representa la masa por unidad de volumen del sólido. Interviene linealmente en [[Z_mec]]: duplicar la densidad duplica la impedancia si [[c_s]] y [[A_sec]] no cambian."
          en: "[[rho]] represents mass per unit volume of the solid. It enters linearly in [[Z_mec]]: doubling density doubles impedance if [[c_s]] and [[A_sec]] do not change."
    coherence_rules:
      - id: rho_coherence_default
        when: "true"
        status: ok
        text:
          es: "Para sólidos de ingeniería, [[rho]] típica va de 900 kg/m³ (polímeros) a 19300 kg/m³ (tungsteno). Valores fuera de este rango sugieren error."
          en: "For engineering solids, typical [[rho]] ranges from 900 kg/m³ (polymers) to 19300 kg/m³ (tungsten). Values outside this range suggest error."
    model_validity_rules:
      - id: rho_validity_default
        when: "true"
        status: ok
        text:
          es: "Se asume [[rho]] uniforme en todo el volumen. Si hay gradientes de densidad, el modelo de impedancia simple no aplica localmente."
          en: "Uniform [[rho]] throughout the volume is assumed. If density gradients exist, the simple impedance model does not apply locally."
    graph_rules:
      - id: rho_graph_default
        when: "true"
        status: ok
        text:
          es: "[[rho]] no aparece directamente en la gráfica pero influye en [[Z_mec]] que determina la posición en el eje de impedancias."
          en: "[[rho]] does not appear directly in the graph but influences [[Z_mec]] which determines position on the impedance axis."
    likely_errors:
      - id: rho_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar la densidad en g/cm³ sin convertir a kg/m³. La conversión es multiplicar por 1000."
          en: "Common error: using density in g/cm³ without converting to kg/m³. Conversion is multiplication by 1000."
    next_step_rules:
      - id: rho_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho]] conocida, buscar [[c_s]] del mismo material en tablas para poder calcular [[Z_mec]] completa."
          en: "With [[rho]] known, look up [[c_s]] for the same material in tables to calculate complete [[Z_mec]]."

  c_s:
    magnitude_type: fundamental
    semantic_role:
      es: "Velocidad de propagación de la onda en el sólido"
      en: "Wave propagation speed in the solid"
    summary_rules:
      - id: c_s_summary_default
        when: "true"
        status: ok
        text:
          es: "La velocidad [[c_s]] determina la rapidez de propagación de la onda y es el segundo factor en [[Z_mec]]. Depende del módulo elástico y de [[rho]]."
          en: "Velocity [[c_s]] determines wave propagation speed and is the second factor in [[Z_mec]]. Depends on elastic modulus and [[rho]]."
    physical_reading_rules:
      - id: c_s_reading_default
        when: "true"
        status: ok
        text:
          es: "[[c_s]] relaciona la rigidez del material con su densidad. Materiales rígidos y ligeros (aluminio) tienen alta velocidad; materiales pesados y blandos (plomo) tienen baja velocidad."
          en: "[[c_s]] relates material stiffness to its density. Stiff, light materials (aluminium) have high velocity; heavy, soft materials (lead) have low velocity."
    coherence_rules:
      - id: c_s_coherence_default
        when: "true"
        status: ok
        text:
          es: "Para ondas longitudinales en sólidos, [[c_s]] típica va de 1000 m/s (caucho) a 12000 m/s (diamante). Valores fuera de este rango indican error."
          en: "For longitudinal waves in solids, typical [[c_s]] ranges from 1000 m/s (rubber) to 12000 m/s (diamond). Values outside this range indicate error."
    model_validity_rules:
      - id: c_s_validity_default
        when: "true"
        status: ok
        text:
          es: "Se asume [[c_s]] constante (no dispersiva). A frecuencias muy altas o en materiales viscoelásticos, la velocidad puede depender de la frecuencia."
          en: "Constant (non-dispersive) [[c_s]] is assumed. At very high frequencies or in viscoelastic materials, velocity may depend on frequency."
    graph_rules:
      - id: c_s_graph_default
        when: "true"
        status: ok
        text:
          es: "[[c_s]] influye en [[Z_mec]] que a su vez determina [[R_Z]] y [[T_Z]] mostrados en la gráfica interactiva."
          en: "[[c_s]] influences [[Z_mec]] which in turn determines [[R_Z]] and [[T_Z]] shown in the interactive graph."
    likely_errors:
      - id: c_s_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir velocidad longitudinal con transversal. En acero, la longitudinal es 5900 m/s y la transversal 3200 m/s. Usar la correcta según el modo de onda."
          en: "Common error: confusing longitudinal with transverse velocity. In steel, longitudinal is 5900 m/s and transverse 3200 m/s. Use the correct one for the wave mode."
    next_step_rules:
      - id: c_s_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[c_s]] y [[rho]] conocidas, multiplicar por [[A_sec]] para obtener [[Z_mec]] del medio y poder calcular reflexión y transmisión en interfaces."
          en: "With [[c_s]] and [[rho]] known, multiply by [[A_sec]] to obtain [[Z_mec]] of the medium and calculate reflection and transmission at interfaces."

  A_sec:
    magnitude_type: fundamental
    semantic_role:
      es: "Área de la sección transversal que define la geometría del medio"
      en: "Cross-sectional area that defines the medium geometry"
    summary_rules:
      - id: A_sec_summary_default
        when: "true"
        status: ok
        text:
          es: "La sección transversal [[A_sec]] es el tercer factor en [[Z_mec]]. A mayor área, mayor impedancia mecánica a igualdad de material."
          en: "Cross-sectional area [[A_sec]] is the third factor in [[Z_mec]]. Larger area means higher mechanical impedance for the same material."
    physical_reading_rules:
      - id: A_sec_reading_default
        when: "true"
        status: ok
        text:
          es: "[[A_sec]] entra linealmente en [[Z_mec]]: duplicar la sección duplica la impedancia. Un cambio brusco de sección crea una interfaz de reflexión incluso en el mismo material."
          en: "[[A_sec]] enters linearly in [[Z_mec]]: doubling the section doubles impedance. An abrupt section change creates a reflection interface even in the same material."
    coherence_rules:
      - id: A_sec_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[A_sec]] se expresa en m². Error frecuente: usar cm² o mm² sin convertir. Para un círculo de diámetro d, el área es π·d²/4."
          en: "Verify that [[A_sec]] is expressed in m². Common error: using cm² or mm² without converting. For a circle of diameter d, area is π·d²/4."
    model_validity_rules:
      - id: A_sec_validity_default
        when: "true"
        status: ok
        text:
          es: "Se asume [[A_sec]] constante en la vecindad de la interfaz. Si varía gradualmente (secciones cónicas), aparecen reflexiones distribuidas no capturadas por el modelo simple."
          en: "Constant [[A_sec]] near the interface is assumed. If it varies gradually (conical sections), distributed reflections appear that the simple model does not capture."
    graph_rules:
      - id: A_sec_graph_default
        when: "true"
        status: ok
        text:
          es: "[[A_sec]] no se muestra directamente en la gráfica pero modifica [[Z_mec]] de cada medio, afectando los coeficientes [[R_Z]] y [[T_Z]] representados."
          en: "[[A_sec]] is not shown directly in the graph but modifies [[Z_mec]] of each medium, affecting the represented [[R_Z]] and [[T_Z]] coefficients."
    likely_errors:
      - id: A_sec_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[A_sec]] en cm² o mm² sin convertir a m². Un factor 10⁴ o 10⁶ de error en el área se traduce directamente en el mismo factor de error en [[Z_mec]]."
          en: "Common error: using [[A_sec]] in cm² or mm² without converting to m². A factor of 10⁴ or 10⁶ error in area translates directly to the same error factor in [[Z_mec]]."
    next_step_rules:
      - id: A_sec_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[A_sec]] determinada, combinar con [[rho]] y [[c_s]] del material para obtener [[Z_mec]] completa del medio."
          en: "With [[A_sec]] determined, combine with [[rho]] and [[c_s]] of the material to obtain complete [[Z_mec]] of the medium."

cross_checks:
  - check: "T_Z == 1 + R_Z"
    tolerance: 0.001
    message:
      es: "La relación T = 1 + R debe cumplirse. Si no, hay error de cálculo."
      en: "The relation T = 1 + R must hold. If not, there is a calculation error."

error_patterns:
  - pattern: "confundir_impedancias"
    detect_when: "Z_mec units match rayl instead of kg/s"
    message:
      es: "Estás calculando impedancia acústica específica (ρc) en lugar de impedancia mecánica (ρcA). Multiplica por el área."
      en: "You are calculating specific acoustic impedance (ρc) instead of mechanical impedance (ρcA). Multiply by area."

graph_binding:
  enabled: true
  preferred_type: Coord
  sync_variables:
    - Z_mec
    - R_Z
    - T_Z

mini_graph:
  enabled: true
  preferred_type: Coord

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
