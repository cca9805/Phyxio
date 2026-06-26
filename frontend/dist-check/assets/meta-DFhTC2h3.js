const e=`id: tension-y-potencia-en-casa
type: leaf
orden: 298200
nombre:
  es: 'Tension y potencia en casa'
  en: 'Voltage and Power at Home'
area: fisica-clasica
bloque: electromagnetismo
subbloque: electricidad-domestica
parent_id: electricidad-domestica
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
icon: "🔦"
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/tension-y-potencia-en-casa
descripcion: 'Traducción de magnitudes eléctricas a decisiones técnicas domésticas de consumo seguro y eficiente.'
description_en: 'Translation of electrical magnitudes into domestic technical decisions for safe and efficient consumption.'
dificultad: 3
tiempo_estimado_min: 35
prerequisitos:
  - fundamentos/magnitudes-y-unidades
  - fisica-clasica/electromagnetismo/electricidad-domestica/red-electrica
  - fisica-clasica/electromagnetismo/corriente-electrica/intensidad-de-corriente
  - fisica-clasica/electromagnetismo/corriente-electrica/resistencia-y-ley-de-ohm
  - fisica-clasica/electromagnetismo/corriente-electrica/potencia-electrica
tags:
  es:
    - electricidad-domestica
    - tension
    - potencia
    - corriente
    - resistencia
    - seguridad-electrica
  en:
    - household-electricity
    - voltage
    - power
    - current
    - resistance
    - electrical-safety
tipo_conceptual: método de resolución
magnitud_dominante: P
representacion_dominante: none
nucleo_operativo:
  magnitudes_nucleo:
    - V
    - I
    - P
    - R
    - E_kWh
  formulas_nucleo:
    - potencia_base
    - corriente_por_resistencia
    - potencia_resistiva
    - energia
  error_conceptual_dominante:
    es: |
      Confundir resistencia alta/baja con dato abstracto sin traducirlo a corriente y potencia real.
      Pensar que una resistencia muy alta siempre implica peligro, cuando en realidad a 230 V una
      resistencia alta limita la corriente y reduce el riesgo; el peligro real viene de resistencias
      bajas que disparan corrientes enormes.
    en: |
      Confusing high/low resistance with abstract data without translating it to real current and power.
      Thinking that very high resistance always implies danger, when at 230 V high resistance actually
      limits current and reduces risk; real danger comes from low resistances that trigger huge currents.
  criterio_de_aplicabilidad:
    es: |
      El método es aplicable a instalaciones domésticas monofásicas estándar (230 V), con cargas
      resistivas y equipos de consumo típico. No aplica a instalaciones industriales trifásicas,
      circuitos de alta tensión, ni cargas con comportamiento no lineal sin compensación.
    en: |
      The method applies to standard single-phase domestic installations (230 V), with resistive
      loads and typical consumption equipment. Not applicable to three-phase industrial installations,
      high voltage circuits, or loads with nonlinear behavior without compensation.
  criterio_de_fallo_del_modelo:
    es: |
      El modelo falla cuando se ignoran picos de arranque de motores, se mezclan unidades sin
      conversión (kW con V), o cuando la resistencia de contacto en conectores introduce caídas
      de tensión significativas no contempladas en el modelo ideal.
    en: |
      The model fails when motor startup peaks are ignored, units are mixed without conversion
      (kW with V), or when contact resistance in connectors introduces significant voltage drops
      not considered in the ideal model.
graficos: []
physical_role:
  es: magnitud física
  en: physical quantity
pregunta_fisica_central:
  es: ¿Cómo se traducen magnitudes eléctricas abstractas (tensión, corriente, potencia) a decisiones domésticas concretas de uso seguro y eficiente?
  en: How are abstract electrical magnitudes (voltage, current, power) translated into concrete domestic decisions for safe and efficient use?
idea_fisica_dominante:
  es: |
    En electricidad doméstica, una magnitud solo adquiere significado operativo cuando se relaciona
    con las demás: la tensión [[V]] es el "empuje" disponible, la resistencia [[R]] limita o libera
    el flujo, la corriente [[I]] es el flujo resultante, y la potencia [[P]] es el ritmo de consumo.
    La seguridad y eficiencia dependen de gestionar estas cuatro magnitudes como sistema interconectado.
  en: |
    In domestic electricity, a magnitude only acquires operational meaning when related to the others:
    voltage [[V]] is the available "push", resistance [[R]] limits or releases flow, current [[I]] is the
    resulting flow, and power [[P]] is the consumption rate. Safety and efficiency depend on managing
    these four magnitudes as an interconnected system.
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: false
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: false
    preferred_type: none
  output_policy:
    show_summary_first: true
    show_intermediate_results: true
    show_final_results: true
    show_warnings: true
    show_errors: true
    show_likely_errors: true
    max_inline_messages: 5
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: false
    auto_suggest: true
    auto_complete: true
    highlight_related: true
`;export{e as default};
