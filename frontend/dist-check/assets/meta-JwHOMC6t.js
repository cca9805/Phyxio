const e=`id: aceleracion-relativa\r
nombre:\r
  es: Aceleracion relativa\r
  en: Relative Acceleration\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: sistemas-de-referencia\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fundamentos/sistemas-de-referencia/aceleracion-relativa\r
orden: 212123\r
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
icon: 🚀\r
descripcion: Estudio de cómo cambia la aceleración de un objeto según el sistema de\r
  referencia, incluyendo sistemas no inerciales.\r
description_en: Study of how an object's acceleration changes according to the reference\r
  frame, including non-inertial systems.\r
tags:\r
  es:\r
  - aceleracion relativa\r
  - sistemas de referencia\r
  - composicion de aceleraciones\r
  - galileo\r
  - cinematica\r
  en:\r
  - relative acceleration\r
  - reference frames\r
  - acceleration composition\r
  - galilean\r
  - kinematics\r
pregunta_fisica_central:\r
  es: ¿Cómo se transforma el vector aceleración de una partícula al cambiar de sistema de referencia en traslación?\r
  en: How does the acceleration vector of a particle transform when switching between translating reference frames?\r
representacion_dominante: Dcl\r
magnitud_dominante: a_rel\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-relativo/velocidad-relativa\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mrua\r
graficos:\r
- Dcl\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 4\r
tiempo_estimado_min: 90\r
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
    preferred_type: Dcl\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{e as default};
