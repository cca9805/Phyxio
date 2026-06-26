const n=`id: descomposicion-vectorial
nombre:
  es: Descomposicion vectorial
  en: Vector Resolution into Components
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: diagramas-de-fuerzas
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/descomposicion-vectorial
orden: 212133
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
icon: 📘
descripcion: Técnica para proyectar fuerzas en ejes elegidos y convertir ecuaciones
  vectoriales en escalares resolubles.
description_en: Technique for projecting forces onto chosen axes to convert vector
  equations into solvable scalar ones.
tags:
  es:
  - vectores
  - componentes
  - proyecciones
  - dinamica
  - diagramas
  en:
  - vectors
  - components
  - projections
  - dynamics
  - diagrams
prerequisitos:
- fundamentos/conceptos-estructurales/sistema-fisico
- fundamentos/conceptos-estructurales/interacciones-y-fuerzas
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez
- fundamentos/vectores-y-componentes
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre
graficos:
- Coord
- Dcl
- Svg
physical_role:
  es: método de resolución
  en: problem-solving method
dificultad: 3
tiempo_estimado_min: 60
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
pregunta_fisica_central:
  es: "¿Cómo se descompone un vector en componentes horizontal y vertical?"
  en: "How is a vector resolved into horizontal and vertical components?"
representacion_dominante: Coord
magnitud_dominante: F
`;export{n as default};
