const e=`id: diagramas-cuerpo-libre
nombre:
  es: Diagramas cuerpo libre
  en: Free-Body Diagrams
area: fisica-clasica
bloque: mecanica
subbloque: dinamica
parent_id: diagramas-de-fuerzas
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre
orden: 212132
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
icon: 🧪
descripcion: Método para aislar un cuerpo, representar sus fuerzas externas y obtener ecuaciones por ejes sin mezclar fuerzas internas y componentes.
description_en: Method for isolating a body, drawing its external forces and obtaining axis-based equations without mixing internal forces or components.
tags:
  es:
    - dinamica
    - diagrama-cuerpo-libre
    - fuerzas
    - ejes
    - newton
  en:
    - dynamics
    - free-body-diagram
    - forces
    - axes
    - newton
pregunta_fisica_central:
  es: ¿Qué fuerzas externas actúan realmente sobre el sistema y cómo se proyectan en ejes para explicar su equilibrio o aceleración?
  en: Which external forces actually act on the system and how are they projected onto axes to explain its equilibrium or acceleration?
representacion_dominante: Coord
magnitud_dominante: Fext
prerequisitos:
  - fundamentos/conceptos-estructurales/sistema-fisico
  - fundamentos/conceptos-estructurales/interacciones-y-fuerzas
  - fundamentos/conceptos-estructurales/fuerza-neta-y-resultante
  - fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez
  - fundamentos/conceptos-estructurales/equilibrio-general
  - fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/identificacion-de-fuerzas
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
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
