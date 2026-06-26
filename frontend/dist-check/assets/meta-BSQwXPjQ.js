const n=`id: identificacion-de-fuerzas
nombre:
  es: Identificacion de fuerzas
  en: Identifying Forces
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: diagramas-de-fuerzas
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/identificacion-de-fuerzas
orden: 212131
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  en:
  - Secondary
  - Upper Secondary
  - University
icon: 🔄
descripcion: Identificar fuerzas reales y evitar fuerzas inventadas en un sistema
  físico.
description_en: Identify real forces and avoid invented forces in a physical system.
tags:
  es:
  - fuerzas
  - diagramas
  - contacto
  - peso
  - normal
  - rozamiento
  en:
  - forces
  - diagrams
  - contact
  - weight
  - normal
  - friction
prerequisitos:
- fisica-clasica/mecanica/cinematica/magnitudes-cinematicas
- fisica-clasica/matematicas-aplicadas/vectores/representacion-vectorial
graficos:
- Dcl
- Svg
physical_role:
  es: método de resolución
  en: problem-solving method
dificultad: 2
tiempo_estimado_min: 70
pregunta_fisica_central:
  es: "¿Qué fuerzas reales actúan sobre el sistema y cómo se determina cuál es su agente físico?"
  en: "What real forces act on the system and how is each one's physical agent determined?"
representacion_dominante: Dcl
magnitud_dominante: P
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Dcl
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
