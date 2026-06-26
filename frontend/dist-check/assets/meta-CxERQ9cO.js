const n=`id: rozamiento-estatico
nombre:
  es: Rozamiento estatico
  en: Static Friction
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: rozamiento\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/rozamiento-estatico\r
orden: 212231\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 📘
descripcion: Fuerza de contacto que se ajusta para impedir el deslizamiento hasta un limite maximo.
description_en: Contact force that adjusts to prevent sliding up to a maximum limit.
tags:
  es:
  - dinamica
  - rozamiento
  - rozamiento-estatico
  - adherencia
  - contacto
  - equilibrio
  en:
  - dynamics
  - friction
  - static-friction
  - adhesion
  - contact
  - equilibrium
prerequisitos:\r
- fundamentos/conceptos-estructurales/sistema-fisico\r
- fundamentos/conceptos-estructurales/estado-del-sistema\r
- fundamentos/conceptos-estructurales/interacciones-y-fuerzas\r
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
- fisica-clasica/mecanica/dinamica/fuerzas/normal/normal-en-planos\r
- fisica-clasica/mecanica/dinamica/fundamentos/diagramas-de-fuerzas/diagramas-cuerpo-libre\r
graficos:\r
- Coord\r
- Dcl\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 2\r
tiempo_estimado_min: 55
pregunta_fisica_central:
  es: ¿Como se ajusta el rozamiento estatico hasta su limite sin que haya deslizamiento?
  en: How does static friction adjust up to its limit without sliding?
representacion_dominante: Coord
magnitud_dominante: fs
interpretacion:
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretacion\r
      en: Interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Coord\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{n as default};
