const n=`id: rozamiento-dinamico
nombre:
  es: Rozamiento dinamico
  en: Kinetic Friction
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: rozamiento\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/rozamiento-dinamico\r
orden: 212232\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 🧪
descripcion: Fuerza de contacto que se opone al deslizamiento ya iniciado entre dos superficies.
description_en: Contact force that opposes sliding once relative motion has started.
tags:
  es:
  - dinamica
  - rozamiento
  - rozamiento-dinamico
  - deslizamiento
  - contacto
  - disipacion
  en:
  - dynamics
  - friction
  - kinetic-friction
  - sliding
  - contact
  - dissipation
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/fuerzas/rozamiento/rozamiento-estatico\r
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
  es: ¿Como se determina el rozamiento dinamico cuando ya existe deslizamiento?
  en: How is kinetic friction determined once sliding already exists?
representacion_dominante: Coord
magnitud_dominante: fk
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
