const n=`id: magnitudes-angulares\r
nombre:\r
  es: Magnitudes angulares\r
  en: Angular Quantities\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: fundamentos\r
ruta_relativa: fisica-clasica/mecanica/rotacion/fundamentos/magnitudes-angulares\r
orden: 211310\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: ⚙️\r
descripcion: Definición formal de ángulo, velocidad y aceleración angular como base\r
  para describir sistemas en rotación.\r
description_en: Formal definition of angle, angular velocity, and angular acceleration\r
  as the basis for describing rotating systems.\r
tags:\r
  es:\r
  - rotacion\r
  - angular\r
  - radianes\r
  - frecuencia\r
  - periodo\r
  en:\r
  - rotation\r
  - angular\r
  - radians\r
  - frequency\r
  - period\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/magnitudes-cinematicas\r
graficos:\r
- Coord\r
physical_role:\r
  es: magnitud física\r
  en: physical quantity\r
dificultad: 2\r
tiempo_estimado_min: 45\r
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
pregunta_fisica_central:\r
  es: ¿Qué magnitudes angulares son necesarias para describir cuantitativamente un\r
    sistema en rotación?\r
  en: Which angular quantities are needed to describe a rotating system quantitatively?\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad-angular\r
bloque_en: Rotation\r
subbloque_en: Rotation Fundamentals\r
titulo: Magnitudes angulares\r
titulo_en: Angular Quantities\r
`;export{n as default};
