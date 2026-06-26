const r=`id: interruptores\r
type: leaf\r
orden: 298400\r
titulo: Interruptores\r
titulo_en: Switches\r
descripcion: 'Interruptores: maniobra ON/OFF, resistencia R_on y perdida P_on = I2 R_on.'\r
description_en: 'Switches: ON/OFF operation, resistance R_on and loss P_on = I2 R_on.'\r
nombre:\r
  es: Interruptores\r
  en: Switches\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  - EXTRACURRICULAR\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
  - Extracurricular\r
icon: "✅"\r
ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/interruptores\r
area: fisica-clasica\r
bloque: electromagnetismo\r
subbloque: electricidad-domestica\r
parent_id: electricidad-domestica\r
graficos: []\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
representacion_dominante: none\r
magnitud_dominante: P_on\r
dificultad: 2\r
tiempo_estimado_min: 25\r
pregunta_fisica_central:\r
  es: '¿Cuanta energia disipa un interruptor real al conducir corriente y cuando esa perdida se convierte en riesgo termico?'\r
  en: 'How much energy does a real switch dissipate when conducting current, and when does that loss become a thermal risk?'\r
tags:\r
  es:\r
  - interruptor\r
  - resistencia ON\r
  - perdida resistiva\r
  - circuito domestico\r
  - maniobra\r
  - disipacion\r
  en:\r
  - switch\r
  - ON resistance\r
  - resistive loss\r
  - domestic circuit\r
  - switching\r
  - dissipation\r
prerequisitos:\r
  - fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    tab_label:\r
      es: Interpretacion\r
      en: Interpretation\r
    show_summary: true\r
    show_physical_reading: true\r
    show_coherence: true\r
    show_model_validity: true\r
    show_graph_reading: false\r
    show_likely_errors: true\r
    show_next_step: true\r
    inline_calculator: true\r
    inline_graph: false\r
    dedicated_tab: true\r
  mini_graph:\r
    enabled: false\r
    preferred_type: none\r
  output_policy:\r
    show_formula_derivation: true\r
    show_graph: false\r
    show_interpretation: true\r
    max_inline_messages: 3\r
    show_summary_first: true\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    use_formulas: true\r
    use_magnitudes: true\r
    use_graph: false\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: false\r
`;export{r as default};
