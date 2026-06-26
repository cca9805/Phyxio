const e=`version: 1
id: compresibilidad
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: fundamentos
orden: 218140
nombre:
  es: "Compresibilidad"
  en: "Compressibility"
titulo:
  es: "Compresibilidad y Módulo Volumétrico"
  en: "Compressibility and Bulk Modulus"
icon: "💧"
ruta_relativa: fisica-clasica/mecanica/fluidos/fundamentos/compresibilidad
niveles:
  es: ["ESO", "BACHILLERATO", "UNIVERSIDAD"]
  en: ["Secondary", "Upper Secondary", "University"]
dificultad: 2
tiempo_estimado_min: 55
descripcion: "Estudio de la respuesta de los fluidos ante variaciones de presión y su módulo volumétrico."
description_en: "Study of fluid response to pressure variations and their bulk modulus."
descripcion_corta:
  es: "Compresibilidad y módulo volumétrico."
  en: "Compressibility and bulk modulus."
pregunta_fisica_central:
  es: "¿Cómo cambia el volumen de un fluido ante un aumento de presión?"
  en: "How does fluid volume change under pressure increase?"
representacion_dominante: Coord
magnitud_dominante: B
physical_role:
  es: "concepto físico"
  en: "physical concept"
tags:
  es: ["fluidos", "fundamentos", "compresibilidad", "modulo-volumetrico", "presion"]
  en: ["fluids", "fundamentals", "compressibility", "bulk-modulus", "pressure"]
prerequisitos:
- fisica-clasica/mecanica/fluidos/fundamentos/presion
- fisica-clasica/mecanica/fluidos/fundamentos/densidad
graficos:
- Coord
- Svg
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    tab_label:
      es: "Ver Interpretación"
      en: "View Interpretation"
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    show_on_calculate: true
    allow_manual_trigger: true
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    show_warnings: true
    show_likely_errors: true
    max_inline_messages: 3
    show_coherence_alerts: true
    show_model_limits: true
  dependencies:
    requires_magnitudes: true
    requires_formulas: true
    supports_graph_binding: true
`;export{e as default};
