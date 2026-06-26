const n=`id: traslacion-y-rotacion\r
nombre:\r
  es: Traslacion y rotacion\r
  en: Translation and Rotation\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: sistemas-mixtos\r
ruta_relativa: fisica-clasica/mecanica/dinamica/aplicaciones/sistemas-mixtos/traslacion-y-rotacion\r
orden: 212721\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
icon: 🧪\r
descripcion: Estudio de sistemas donde los cuerpos se desplazan y rotan simultáneamente,\r
  vinculados por cuerdas o contacto tangencial.\r
description_en: Study of systems where bodies translate and rotate simultaneously,\r
  linked by ropes or tangential contact.\r
tags:\r
  es:\r
  - dinamica\r
  - rotacion\r
  - traslacion\r
  - momento-inercia\r
  - rodadura\r
  en:\r
  - dynamics\r
  - rotation\r
  - translation\r
  - moment-of-inertia\r
  - rolling\r
pregunta_fisica_central:\r
  es: "¿Cómo se acoplan la aceleración lineal y la angular cuando un cuerpo rígido traslada y rota simultáneamente?"\r
  en: "How do linear and angular acceleration couple when a rigid body simultaneously translates and rotates?"\r
representacion_dominante: Coord\r
magnitud_dominante: alpha\r
prerequisitos:\r
- leyes-de-newton\r
- dinamica-rotacional\r
- relacion-lineal-angular\r
- diagramas-cuerpo-libre\r
graficos:\r
- Coord\r
physical_role:\r
  es: modelo físico\r
  en: physical model\r
dificultad: 4\r
tiempo_estimado_min: 75\r
interpretacion:\r
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
