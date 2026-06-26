const e=`\uFEFFversion: "5.0"\r
id: interp_cambios_de_estado\r
leaf_id: cambios-de-estado\r
\r
nombre:\r
  es: Interpretacin de los cambios de estado\r
  en: Interpretation of phase changes\r
\r
scope:\r
  area: fisica-clasica\r
  bloque: termodinamica\r
  subbloque: calor-y-efectos-termicos\r
  parent_id: calor-y-efectos-termicos\r
  ruta_relativa: fisica-clasica/termodinamica/calor-y-efectos-termicos/cambios-de-estado\r
\r
ui:\r
  enabled: true\r
  display_modes:\r
    calculator_inline: true\r
    graph_inline: true\r
    dedicated_tab: true\r
    modal: false\r
  labels:\r
    es: Interpretacin\r
    en: Interpretation\r
  priority_order:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
  inline_limits:\r
    max_blocks: 3\r
    max_rules_per_block: 2\r
\r
dependencies:\r
  formulas:\r
    - calor_latente_general\r
    - temperatura_transicion_constante\r
    - calor_latente_fusion\r
    - calor_latente_vaporizacion\r
  magnitudes:\r
    - Q_lat\r
    - L\r
    - m\r
    - T_trans\r
\r
global_context:\r
  physical_domain:\r
    es: "Transiciones entre estados de la materia a temperatura constante mediante intercambio de calor latente. El calor no produce variacin de temperatura sino cambio de estructura molecular."\r
    en: "Transitions between states of matter at constant temperature through latent heat exchange. Heat does not produce temperature change but changes molecular structure."\r
  axis_convention:\r
    es: "Q_lat > 0 si la sustancia absorbe calor (endotrmica: fusin, vaporizacin, sublimacin). Q_lat < 0 si la sustancia cede calor (exotrmica: solidificacin, condensacin, deposicin)."\r
    en: "Q_lat > 0 if the substance absorbs heat (endothermic: melting, vaporization, sublimation). Q_lat < 0 if the substance releases heat (exothermic: solidification, condensation, deposition)."\r
  standard_assumptions:\r
    - "Proceso a presin constante"\r
    - "Temperatura constante e igual a T_trans durante toda la transicin"\r
    - "L constante en el rango de presin del problema"\r
    - "Transicin completa: toda la masa m cambia de estado (salvo mencin explcita de transicin parcial)"\r
  standard_warnings:\r
    - "No confundir calor latente de fusin L_f con calor latente de vaporizacin L_v: difieren en un factor 510"\r
    - "Durante un cambio de estado, la temperatura permanece constante aunque se siga suministrando calor"\r
    - "L_v depende de la presin; usar el valor tabulado a la presin del problema"\r
\r
result_blocks:\r
  summary:\r
    enabled: true\r
    order: 1\r
    title:\r
      es: Resumen\r
      en: Summary\r
  physical_reading:\r
    enabled: true\r
    order: 2\r
    title:\r
      es: Lectura fsica\r
      en: Physical reading\r
  coherence:\r
    enabled: true\r
    order: 3\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    enabled: true\r
    order: 4\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    enabled: true\r
    order: 5\r
    title:\r
      es: Lectura grfica\r
      en: Graph reading\r
  likely_errors:\r
    enabled: true\r
    order: 6\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    enabled: true\r
    order: 7\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
\r
targets:\r
\r
  Q_lat:\r
    magnitude_type: scalar_signed\r
    semantic_role:\r
      es: "Energa total intercambiada durante el cambio de estado; variable de proceso sin cambio de temperatura asociado."\r
      en: "Total energy exchanged during the phase change; process variable with no associated temperature change."\r
    summary_rules:\r
      - id: Q_lat_summary_fusion\r
        when: "Q_lat > 0 && tipo == fusion"\r
        status: ok\r
        text:\r
          es: "[[Q_lat]] positivo indica que la sustancia absorbe energa para fundirse. La temperatura se mantiene constante a [[T_trans]] mientras dura la fusin, independientemente de cunto calor adicional se suministre."\r
          en: "Positive [[Q_lat]] indicates the substance absorbs energy to melt. Temperature remains constant at [[T_trans]] throughout the melting process, regardless of how much additional heat is supplied."\r
      - id: Q_lat_summary_vaporizacion\r
        when: "Q_lat > 0 && tipo == vaporizacion"\r
        status: ok\r
        text:\r
          es: "[[Q_lat]] positivo indica que la sustancia absorbe energa para vaporizarse. Este calor se destina a romper las fuerzas intermoleculares del lquido; la temperatura permanece constante a [[T_trans]] durante toda la vaporizacin."\r
          en: "Positive [[Q_lat]] indicates the substance absorbs energy to vaporize. This heat breaks the intermolecular forces of the liquid; temperature remains constant at [[T_trans]] throughout vaporization."\r
      - id: Q_lat_summary_solidificacion\r
        when: "Q_lat < 0"\r
        status: ok\r
        text:\r
          es: "[[Q_lat]] negativo indica que la sustancia cede calor al entorno durante una transicin exotrmica (solidificacin o condensacin). La temperatura se mantiene constante a [[T_trans]] mientras dura la transicin."\r
          en: "Negative [[Q_lat]] indicates the substance releases heat to the surroundings during an exothermic transition (solidification or condensation). Temperature remains constant at [[T_trans]] throughout the transition."\r
      - id: Q_lat_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[Q_lat]] es la energa total de transicin de fase para la masa [[m]] de sustancia. Su valor es [[m]]  [[L]] donde [[L]] es el calor latente especfico del material para esta transicin."\r
          en: "[[Q_lat]] is the total phase transition energy for mass [[m]] of substance. Its value is [[m]]  [[L]] where [[L]] is the specific latent heat of the material for this transition."\r
    physical_reading_rules:\r
      - id: Q_lat_reading_microscopic\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "La energa [[Q_lat]] no se usa para acelerar las molculas (lo que aumentara la temperatura) sino para modificar la estructura molecular: separar los tomos del cristal en la fusin, o vencer las fuerzas de cohesin del lquido en la vaporizacin. Por eso la temperatura no vara durante el proceso."\r
          en: "The energy [[Q_lat]] is not used to accelerate molecules (which would raise temperature) but to modify molecular structure: separating atoms from the crystal lattice during melting, or overcoming the cohesive forces of the liquid during vaporization. This is why temperature does not change during the process."\r
    coherence_rules:\r
      - id: Q_lat_coherence_zero\r
        when: "Q_lat == 0"\r
        status: error\r
        text:\r
          es: "[[Q_lat]] nulo es incompatible con un cambio de estado real. Verificar que [[m]] > 0 y [[L]] > 0."\r
          en: "Zero [[Q_lat]] is incompatible with a real phase change. Verify that [[m]] > 0 and [[L]] > 0."\r
      - id: Q_lat_coherence_sign_direction\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "El signo de [[Q_lat]] debe ser coherente con la direccin de la transicin: positivo para transiciones endotrmicas (fusin, vaporizacin, sublimacin) y negativo para exotrmicas (solidificacin, condensacin, deposicin)."\r
          en: "The sign of [[Q_lat]] must be consistent with the direction of the transition: positive for endothermic transitions (melting, vaporization, sublimation) and negative for exothermic ones (solidification, condensation, deposition)."\r
    model_validity_rules:\r
      - id: Q_lat_validity_complete_transition\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "La frmula [[Q_lat]] = [[m]]  [[L]] es vlida para la transicin completa de toda la masa [[m]]. Si la energa disponible es inferior a [[m]]  [[L]], solo cambia de estado una fraccin de masa igual a Q_lat_disponible / [[L]] y el sistema queda a [[T_trans]] con dos fases coexistiendo."\r
          en: "The formula [[Q_lat]] = [[m]]  [[L]] is valid for the complete transition of the entire mass [[m]]. If the available energy is less than [[m]]  [[L]], only a fraction of mass equal to Q_lat_available / [[L]] changes state and the system remains at [[T_trans]] with two coexisting phases."\r
    graph_rules:\r
      - id: Q_lat_graph_plateau\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En la grfica de temperatura frente al calor suministrado acumulado, [[Q_lat]] corresponde al tramo horizontal (meseta) a temperatura [[T_trans]]. La anchura horizontal de la meseta es exactamente [[Q_lat]] = [[m]]  [[L]]. Cuanto mayor [[L]], ms ancha la meseta."\r
          en: "In the graph of temperature vs. cumulative heat supplied, [[Q_lat]] corresponds to the horizontal segment (plateau) at temperature [[T_trans]]. The horizontal width of the plateau is exactly [[Q_lat]] = [[m]]  [[L]]. The larger [[L]], the wider the plateau."\r
    likely_errors:\r
      - id: Q_lat_error_temperature_during\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Error frecuente: suponer que la temperatura sigue subiendo mientras se suministra [[Q_lat]]. Durante el cambio de estado, toda la energa se destina al cambio de estructura molecular y la temperatura permanece exactamente constante a [[T_trans]]."\r
          en: "Common error: assuming temperature continues to rise while [[Q_lat]] is supplied. During the phase change, all energy goes to changing molecular structure and temperature remains exactly constant at [[T_trans]]."\r
    next_step_rules:\r
      - id: Q_lat_next_complete_process\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Si el problema involucra un proceso completo de calentamiento con cambio de estado, el calor total es la suma de los calores sensibles de cada fase (usando [[m]]  c  DeltaT para cada tramo) ms [[Q_lat]] del cambio de estado. Verificar con un diagrama de tramos."\r
          en: "If the problem involves a complete heating process with phase change, the total heat is the sum of sensible heats for each phase (using [[m]]  c  DeltaT for each segment) plus [[Q_lat]] for the phase change. Verify with a segment diagram."\r
\r
  L:\r
    magnitude_type: scalar_unsigned\r
    semantic_role:\r
      es: "Calor latente especfico del material para la transicin dada; propiedad intensiva que caracteriza la energa de la transicin por unidad de masa."\r
      en: "Specific latent heat of the material for the given transition; intensive property characterizing the transition energy per unit mass."\r
    summary_rules:\r
      - id: L_summary_water_fusion\r
        when: "L > 330000 && L < 340000"\r
        status: ok\r
        text:\r
          es: "[[L]] est en el rango del calor latente de fusin del agua (334 000 J/kg). Si el material es hielo/agua, el valor es consistente con el dato tabulado estndar."\r
          en: "[[L]] is in the range of the latent heat of fusion of water (334 000 J/kg). If the material is ice/water, the value is consistent with the standard tabulated datum."\r
      - id: L_summary_water_vap\r
        when: "L > 2200000 && L < 2300000"\r
        status: ok\r
        text:\r
          es: "[[L]] est en el rango del calor latente de vaporizacin del agua (2 260 000 J/kg a 100 C). Si el material es agua, el valor es consistente con el dato tabulado a presin estndar."\r
          en: "[[L]] is in the range of the latent heat of vaporization of water (2 260 000 J/kg at 100 C). If the material is water, the value is consistent with the tabulated datum at standard pressure."\r
      - id: L_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[L]] es la energa por kilogramo necesaria para completar la transicin de fase de este material. Multiplicado por [[m]], da el calor latente total [[Q_lat]] de la muestra."\r
          en: "[[L]] is the energy per kilogram needed to complete the phase transition of this material. Multiplied by [[m]], it gives the total latent heat [[Q_lat]] of the sample."\r
    physical_reading_rules:\r
      - id: L_reading_molecular\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[L]] refleja la fortaleza de las fuerzas intermoleculares que deben romperse durante la transicin. Materiales con enlaces ms fuertes tienen [[L]] mayor. El agua tiene un [[L]] de vaporizacin excepcionalmente alto debido a sus puentes de hidrgeno, lo que la hace un refrigerante y regulador trmico extraordinariamente eficaz."\r
          en: "[[L]] reflects the strength of the intermolecular forces that must be broken during the transition. Materials with stronger bonds have larger [[L]]. Water has an exceptionally high vaporization [[L]] due to its hydrogen bonds, making it an extraordinarily effective coolant and thermal regulator."\r
    coherence_rules:\r
      - id: L_coherence_negative\r
        when: "L < 0"\r
        status: error\r
        text:\r
          es: "[[L]] negativo es fsicamente imposible. Es una propiedad intensiva siempre positiva del material. Revisar el planteamiento: el signo del proceso se refleja en [[Q_lat]], no en [[L]]."\r
          en: "Negative [[L]] is physically impossible. It is always a positive intensive property of the material. Check the setup: the sign of the process is reflected in [[Q_lat]], not in [[L]]."\r
      - id: L_coherence_vap_vs_fus\r
        when: "L < 50000"\r
        status: warning\r
        text:\r
          es: "[[L]] muy pequeo (inferior a 50 000 J/kg) es inusual para materiales comunes. Verificar las unidades: si L est en J/g en lugar de J/kg, el valor debe multiplicarse por 1000."\r
          en: "Very small [[L]] (below 50 000 J/kg) is unusual for common materials. Check units: if L is in J/g instead of J/kg, the value must be multiplied by 1000."\r
      - id: L_coherence_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[L]] es positivo y dentro del rango fsicamente razonable para el material y tipo de transicin indicados."\r
          en: "[[L]] is positive and within the physically reasonable range for the indicated material and transition type."\r
    model_validity_rules:\r
      - id: L_validity_pressure\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "El valor de [[L]] es vlido a la presin del problema. Para [[L]] de fusin, la variacin con la presin es pequea y normalmente despreciable. Para [[L]] de vaporizacin, la variacin con la presin es significativa: a presiones muy distintas de la estndar, usar el valor de [[L]] a la presin de operacin."\r
          en: "The value of [[L]] is valid at the pressure of the problem. For melting [[L]], the variation with pressure is small and usually negligible. For vaporization [[L]], the variation with pressure is significant: at pressures very different from standard, use the value of [[L]] at the operating pressure."\r
    graph_rules:\r
      - id: L_graph_plateau_width\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En la grfica T vs calor suministrado, [[L]] determina la anchura relativa de la meseta del cambio de estado (dividida por [[m]]). Un material con [[L]] grande tendr una meseta proporcionalmente ms ancha que un tramo de calentamiento sensible con el mismo calor suministrado."\r
          en: "In the T vs. heat supplied graph, [[L]] determines the relative width of the phase change plateau (divided by [[m]]). A material with large [[L]] will have a proportionally wider plateau than a sensible heating segment with the same supplied heat."\r
    likely_errors:\r
      - id: L_error_swap_fus_vap\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Error muy frecuente: usar [[L]] de fusin cuando el problema involucra vaporizacin, o viceversa. Para el agua, L_v / L_f  6.8. Si el resultado parece unas 7 veces demasiado pequeo o demasiado grande, es probable que se hayan intercambiado L_f y L_v."\r
          en: "Very common error: using [[L]] for melting when the problem involves vaporization, or vice versa. For water, L_v / L_f  6.8. If the result seems about 7 times too small or too large, L_f and L_v have likely been swapped."\r
    next_step_rules:\r
      - id: L_next_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Con [[L]] determinado, calcular [[Q_lat]] = [[m]]  [[L]] e incorporarlo al balance calorimtrico total como un tramo adicional a temperatura constante [[T_trans]]. Si [[L]] es incgnita, despejarlo como [[L]] = [[Q_lat]] / [[m]]."\r
          en: "With [[L]] determined, compute [[Q_lat]] = [[m]]  [[L]] and incorporate it into the total calorimetric balance as an additional segment at constant temperature [[T_trans]]. If [[L]] is the unknown, solve as [[L]] = [[Q_lat]] / [[m]]."\r
\r
  m:\r
    magnitude_type: scalar_unsigned\r
    semantic_role:\r
      es: "Masa de la sustancia que completa la transicin de fase; puede ser dato o incgnita segn el tipo de problema."\r
      en: "Mass of the substance that completes the phase transition; can be given data or unknown depending on the problem type."\r
    summary_rules:\r
      - id: m_summary_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[m]] determina el calor latente total [[Q_lat]] de forma lineal: duplicar [[m]] duplica [[Q_lat]]. En problemas donde la energa disponible es limitada, [[m]] que cambia de estado puede ser inferior a la masa total si no hay energa suficiente para completar la transicin."\r
          en: "[[m]] determines the total latent heat [[Q_lat]] linearly: doubling [[m]] doubles [[Q_lat]]. In problems where available energy is limited, the [[m]] that changes state may be less than the total mass if there is not enough energy to complete the transition."\r
    physical_reading_rules:\r
      - id: m_reading_partial\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Si la energa disponible Q_disponible es menor que m_total  [[L]], solo cambia de estado la fraccin m_cambia = Q_disponible / [[L]]. El sistema queda a [[T_trans]] con m_cambia en la nueva fase y el resto en la fase original. Esta situacin de equilibrio bifsico es fsica y termodinmicamente estable."\r
          en: "If the available energy Q_available is less than m_total  [[L]], only the fraction m_changes = Q_available / [[L]] changes state. The system remains at [[T_trans]] with m_changes in the new phase and the rest in the original phase. This two-phase equilibrium situation is physically and thermodynamically stable."\r
    coherence_rules:\r
      - id: m_coherence_positive\r
        when: "m <= 0"\r
        status: error\r
        text:\r
          es: "[[m]] debe ser estrictamente positiva. Una masa nula o negativa no tiene sentido fsico para la sustancia que cambia de estado."\r
          en: "[[m]] must be strictly positive. Zero or negative mass has no physical meaning for the substance undergoing the phase change."\r
      - id: m_coherence_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "[[m]] es positiva y consistente con el problema planteado."\r
          en: "[[m]] is positive and consistent with the problem as stated."\r
    model_validity_rules:\r
      - id: m_validity_total\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "El modelo asume que toda la masa [[m]] completa la transicin. Si la energa disponible es insuficiente, la masa que cambia de estado es m_parcial = Q_disponible / [[L]], y el sistema queda a [[T_trans]] con mezcla de fases."\r
          en: "The model assumes the entire mass [[m]] completes the transition. If available energy is insufficient, the mass that changes state is m_partial = Q_available / [[L]], and the system remains at [[T_trans]] as a mixture of phases."\r
    graph_rules:\r
      - id: m_graph_plateau_width\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "En la grfica T vs calor suministrado, la anchura de la meseta del cambio de estado es proporcional a [[m]]. Duplicar [[m]] duplica la anchura de la meseta a [[T_trans]]."\r
          en: "In the T vs. heat supplied graph, the width of the phase change plateau is proportional to [[m]]. Doubling [[m]] doubles the width of the plateau at [[T_trans]]."\r
    likely_errors:\r
      - id: m_error_grams\r
        when: "m < 0.01"\r
        status: warning\r
        text:\r
          es: "[[m]] muy pequea. Verificar si el valor est en gramos en lugar de kilogramos. Con [[L]] en J/kg, [[m]] debe estar en kg."\r
          en: "Very small [[m]]. Check whether the value is in grams instead of kilograms. With [[L]] in J/kg, [[m]] must be in kg."\r
      - id: m_error_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Error frecuente en problemas de calorimetra con cambio de estado: suponer que toda la masa cambia de estado cuando la energa disponible puede ser insuficiente. Siempre verificar si Q_disponible  [[m]]  [[L]] antes de aplicar la frmula completa."\r
          en: "Common error in calorimetry problems with phase change: assuming all the mass changes state when the available energy may be insufficient. Always verify whether Q_available  [[m]]  [[L]] before applying the full formula."\r
    next_step_rules:\r
      - id: m_next_default\r
        when: "true"\r
        status: ok\r
        text:\r
          es: "Con [[m]] determinada, calcular [[Q_lat]] = [[m]]  [[L]] e incluirlo en el balance calorimtrico global. Si [[m]] es la incgnita de cunta masa puede cambiar de estado con una energa disponible dada, despejar [[m]] = Q_disponible / [[L]]."\r
          en: "With [[m]] determined, compute [[Q_lat]] = [[m]]  [[L]] and include it in the overall calorimetric balance. If [[m]] is the unknown for how much mass can change state with a given available energy, solve [[m]] = Q_available / [[L]]."\r
\r
  T_trans:
    magnitude_type: scalar
    semantic_role:
      es: "Temperatura constante de coexistencia de fases durante el cambio de estado."
      en: "Constant phase-coexistence temperature during the phase change."
    summary_rules:
      - id: T_trans_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T_trans]] fija la temperatura de la meseta: mientras haya dos fases, el calor cambia estado y no temperatura."
          en: "[[T_trans]] fixes the plateau temperature: while two phases remain, heat changes state rather than temperature."
    physical_reading_rules:
      - id: T_trans_reading_plateau
        when: "true"
        status: ok
        text:
          es: "Una lectura estable en [[T_trans]] indica coexistencia de fases; el ancho de esa meseta esta controlado por [[Q_lat]]."
          en: "A stable reading at [[T_trans]] indicates phase coexistence; the width of that plateau is controlled by [[Q_lat]]."
    coherence_rules:
      - id: T_trans_coherence_phase
        when: "true"
        status: ok
        text:
          es: "Si la temperatura cambia mientras se afirma que hay dos fases, revisar el modelo o la pureza de la sustancia."
          en: "If temperature changes while two phases are assumed, check the model or the purity of the substance."
    model_validity_rules:
      - id: T_trans_validity_pressure
        when: "true"
        status: ok
        text:
          es: "[[T_trans]] depende de presion y composicion; no usar valores de agua pura para soluciones o alta presion."
          en: "[[T_trans]] depends on pressure and composition; do not use pure-water values for solutions or high pressure."
    graph_rules:
      - id: T_trans_graph_height
        when: "true"
        status: ok
        text:
          es: "En la grafica temperatura-calor, [[T_trans]] es la altura de la meseta horizontal."
          en: "In the temperature-heat graph, [[T_trans]] is the height of the horizontal plateau."
    likely_errors:
      - id: T_trans_error_wrong_value
        when: "true"
        status: ok
        text:
          es: "Error frecuente: usar [[T_trans]] estandar cuando el enunciado cambia presion, pureza o material."
          en: "Common error: using a standard [[T_trans]] when the statement changes pressure, purity, or material."
    next_step_rules:
      - id: T_trans_next_balance
        when: "true"
        status: ok
        text:
          es: "Con [[T_trans]] identificada, separar el balance en tramos sensibles y tramo latente."
          en: "Once [[T_trans]] is identified, split the balance into sensible segments and the latent segment."
cross_checks:\r
  - id: energy_sufficient_for_full_transition\r
    check: "Verificar que la energa disponible es al menos igual a m  L antes de asumir transicin completa"\r
    action: "Si Q_disponible < m  L, calcular la masa parcial que cambia de estado como m_parcial = Q_disponible / L y el sistema queda a T_trans"\r
  - id: L_type_matches_transition\r
    check: "El tipo de L (fusin o vaporizacin) debe coincidir con la transicin descrita en el problema"\r
    action: "Si el problema describe ebullicin pero se us L_f en lugar de L_v, recalcular con el valor correcto"\r
\r
error_patterns:\r
  - id: temperature_rises_during_phase_change\r
    description:\r
      es: "El alumno supone que la temperatura sigue subiendo mientras la sustancia cambia de estado."\r
      en: "The student assumes temperature continues to rise while the substance undergoes phase change."\r
  - id: swap_L_fusion_vaporization\r
    description:\r
      es: "Se usa el calor latente de fusin para un problema de vaporizacin, o viceversa."\r
      en: "The latent heat of fusion is used for a vaporization problem, or vice versa."\r
  - id: insufficient_energy_ignored\r
    description:\r
      es: "Se asume transicin completa sin verificar si la energa disponible es suficiente para Q_lat = m  L."\r
      en: "Complete transition is assumed without checking whether available energy is sufficient for Q_lat = m  L."\r
\r
graph_binding:\r
  tipo: Coord\r
  eje_x: Q_acumulado\r
  eje_y: T_trans\r
  magnitud_estrella: Q_lat\r
\r
mini_graph:\r
  enabled: true\r
  preferred_type: Coord\r
\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
  inline_mode:\r
    max_sections: 2\r
    priority:\r
      - summary\r
      - likely_errors\r
  extended_mode:\r
    show_all: true\r
\r
\r
`;export{e as default};
