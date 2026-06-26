const e=`version: 1
id: flujo-en-tuberias
type: leaf
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: fluidos-reales
orden: 218510
nombre:
  es: "Flujo en tuberias"
  en: "Pipe Flow"
titulo:
  es: "Flujo en Tuberías"
  en: "Pipe Flow"
icon: 💧
ruta_relativa: fisica-clasica/mecanica/fluidos/fluidos-reales/flujo-en-tuberias
niveles:
  es: ["ESO", "BACHILLERATO", "UNIVERSIDAD"]
  en: ["Secondary", "Upper Secondary", "University"]
dificultad: 4
tiempo_estimado_min: 55
descripcion: Cálculo de pérdidas de presión por fricción en tuberías comerciales.
description_en: Calculation of pressure losses due to friction in commercial pipes.
descripcion_corta:
  es: "Pérdidas por fricción en tuberías."
  en: "Friction losses in pipes."
pregunta_fisica_central:
  es: "¿Cómo influye la fricción en la caída de presión en una tubería?"
  en: "How does friction influence the pressure drop in a pipe?"
representacion_dominante: Coord
magnitud_dominante: dp
physical_role:
  es: "concepto físico"
  en: "physical concept"
tags:
  es: ["fluidos", "fluidos-reales", "tuberias", "friccion", "caida-presion"]
  en: ["fluids", "real-fluids", "pipes", "friction", "pressure-drop"]
prerequisitos:
- fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuacion-de-bernoulli
- fisica-clasica/mecanica/fluidos/viscosidad-y-regimenes/viscosidad
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
recursos_externos:
- nombre:
    es: "Simulador de Pérdida de Carga"
    en: "Pressure Drop Simulator"
  url: "https://www.engineeringtoolbox.com/darcy-weisbach-equation-d_646.html"
  tipo: "simulador"
`;export{e as default};
