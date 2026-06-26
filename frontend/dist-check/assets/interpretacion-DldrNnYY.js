const e=`version: 1
id: interpretacion_sustentacion
leaf_id: sustentacion
nombre:
  es: Interpretación de la sustentación
  en: Lift interpretation
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: fluidos
  parent_id: aplicaciones-de-bernoulli
  ruta_relativa: fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/aplicaciones-de-bernoulli/sustentacion
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
    en: Interpretation
  priority_order:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
  inline_limits:
    summary: 1
    physical_reading: 1
    coherence: 1
dependencies:
  formulas:
  - sustentacion_general
  - bernoulli_diferencia_presion
  - fuerza_por_presion
  - equilibrio_vuelo
  magnitudes:
  - L
  - rho
  - v
  - S
  - C_L
  - dp
  - v_sup
  - v_inf
  - m
  - g
  - W
global_context:
  physical_domain:
    es: Sustentación aerodinámica en régimen subsonico bajo.
    en: Aerodynamic lift in low-subsonic regime.
  axis_convention:
    es: Sustentación positiva hacia arriba.
    en: Positive lift points upward.
  standard_assumptions:
  - flujo estacionario
  - perfil antes de pérdida
  - densidad aproximadamente constante
  standard_warnings:
  - No aplicar cerca de pérdida sin corregir C_L.
result_blocks:
  summary:
    enabled: true
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    title:
      es: Lectura gráfica
      en: Graph reading
  likely_errors:
    enabled: true
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    title:
      es: Siguiente paso
      en: Next step
targets:
  L:
    magnitude_type: scalar
    semantic_role:
      es: resultante vertical de sustentación
      en: vertical lift resultant
    summary_rules:
    - when: 'true'
      text:
        es: L resume el efecto aerodinámico calculado para las condiciones introducidas.
        en: L summarizes the aerodynamic effect computed for the entered conditions.
      id: L_summary_rules_1
      status: info
    physical_reading_rules:
    - when: result > 0
      text:
        es: El resultado indica una contribución de sustentación positiva según el
          convenio del leaf.
        en: The result indicates a positive lift contribution according to the leaf
          convention.
      id: L_physical_reading_rules_1
      status: info
    - when: 'true'
      text:
        es: Lee el valor junto con velocidad, densidad y geometría.
        en: Read the value together with speed, density and geometry.
      id: L_physical_reading_rules_2
      status: info
    coherence_rules:
    - when: result < 0
      text:
        es: Revisa el signo del coeficiente o del contraste de presión.
        en: Check the sign of the coefficient or pressure contrast.
      id: L_coherence_rules_1
      status: info
    - when: 'true'
      text:
        es: El resultado es coherente si pertenece al orden de magnitud esperado para
          el sistema.
        en: The result is coherent if it lies in the expected order of magnitude for
          the system.
      id: L_coherence_rules_2
      status: info
    model_validity_rules:
    - when: 'true'
      text:
        es: La lectura supone flujo adherido, régimen subsonico bajo y coeficiente
          compatible con el perfil.
        en: The reading assumes attached flow, low-subsonic regime, and a coefficient
          compatible with the airfoil.
      id: L_model_validity_rules_1
      status: info
    graph_rules:
    - when: 'true'
      text:
        es: En Coord el efecto aparece como crecimiento con la velocidad; en SVG se
          ve como flecha y campo de presión.
        en: In Coord it appears as growth with speed; in SVG it appears as arrow and
          pressure field.
      id: L_graph_rules_1
      status: info
    likely_errors:
    - when: 'true'
      text:
        es: 'No confundas una fuerza grande con modelo válido: cerca de pérdida el
          coeficiente deja de comportarse suavemente.'
        en: 'Do not confuse a large force with a valid model: near stall the coefficient
          no longer behaves smoothly.'
      id: L_likely_errors_1
      status: info
    next_step_rules:
    - when: 'true'
      text:
        es: Compara con el peso o con el margen de maniobra para interpretar el vuelo.
        en: Compare with weight or maneuver margin to interpret flight.
      id: L_next_step_rules_1
      status: info
  dp:
    magnitude_type: scalar
    semantic_role:
      es: contraste de presión extradós-intradós
      en: upper-lower pressure contrast
    summary_rules:
    - when: 'true'
      text:
        es: dp resume el efecto aerodinámico calculado para las condiciones introducidas.
        en: dp summarizes the aerodynamic effect computed for the entered conditions.
      id: dp_summary_rules_1
      status: info
    physical_reading_rules:
    - when: result > 0
      text:
        es: El resultado indica una contribución de sustentación positiva según el
          convenio del leaf.
        en: The result indicates a positive lift contribution according to the leaf
          convention.
      id: dp_physical_reading_rules_1
      status: info
    - when: 'true'
      text:
        es: Lee el valor junto con velocidad, densidad y geometría.
        en: Read the value together with speed, density and geometry.
      id: dp_physical_reading_rules_2
      status: info
    coherence_rules:
    - when: result < 0
      text:
        es: Revisa el signo del coeficiente o del contraste de presión.
        en: Check the sign of the coefficient or pressure contrast.
      id: dp_coherence_rules_1
      status: info
    - when: 'true'
      text:
        es: El resultado es coherente si pertenece al orden de magnitud esperado para
          el sistema.
        en: The result is coherent if it lies in the expected order of magnitude for
          the system.
      id: dp_coherence_rules_2
      status: info
    model_validity_rules:
    - when: 'true'
      text:
        es: La lectura supone flujo adherido, régimen subsonico bajo y coeficiente
          compatible con el perfil.
        en: The reading assumes attached flow, low-subsonic regime, and a coefficient
          compatible with the airfoil.
      id: dp_model_validity_rules_1
      status: info
    graph_rules:
    - when: 'true'
      text:
        es: En Coord el efecto aparece como crecimiento con la velocidad; en SVG se
          ve como flecha y campo de presión.
        en: In Coord it appears as growth with speed; in SVG it appears as arrow and
          pressure field.
      id: dp_graph_rules_1
      status: info
    likely_errors:
    - when: 'true'
      text:
        es: 'No confundas una fuerza grande con modelo válido: cerca de pérdida el
          coeficiente deja de comportarse suavemente.'
        en: 'Do not confuse a large force with a valid model: near stall the coefficient
          no longer behaves smoothly.'
      id: dp_likely_errors_1
      status: info
    next_step_rules:
    - when: 'true'
      text:
        es: Compara con el peso o con el margen de maniobra para interpretar el vuelo.
        en: Compare with weight or maneuver margin to interpret flight.
      id: dp_next_step_rules_1
      status: info
cross_checks:
- id: lift_weight
  detect_when: L > 0
  message:
    es: Compara L con el peso W para decidir si hay margen de vuelo.
    en: Compare L with weight W to decide whether there is flight margin.
error_patterns:
- id: bernoulli_unico
  detect_when: 'true'
  message:
    es: 'Error típico: atribuir la sustentación solo a que el aire recorre más distancia
      arriba.'
    en: 'Typical error: attributing lift only to longer upper-surface travel.'
graph_binding:
  enabled: true
  channels:
  - L
  - v
  - rho
  - S
  - C_L
  - dp
mini_graph:
  enabled: true
  preferred_type: Coord
output_contract:
  calculator_inline: true
  graph_inline: true
  dedicated_tab: true
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
`;export{e as default};
