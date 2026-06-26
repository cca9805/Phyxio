const e=`id: resistencia-y-ley-de-ohm
nombre:
  es: Resistencia y ley de ohm
  en: Resistance and Ohm's Law
area: fisica-clasica
bloque: electromagnetismo
subbloque: corriente-electrica
parent_id: corriente-electrica
ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/resistencia-y-ley-de-ohm
orden: 293200
type: leaf
niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Secondary
    - Upper Secondary
    - University
    - Extracurricular
icon: "🔱"
descripcion: "Subtema: Resistencia y Ley de Ohm. Teoría, fórmulas, ejemplos y aplicaciones."
description_en: "Study of electrical resistance and Ohm's Law, covering geometric factors and conduction models."
tags:
  es:
    - electromagnetismo
    - corriente-electrica
    - ley-de-ohm
    - resistencia
  en:
    - electromagnetism
    - electric-current
    - ohms-law
    - resistance
prerequisitos:
  - fisica-clasica/electromagnetismo/corriente-electrica/intensidad-de-corriente
graficos:
  - Coord
physical_role:
  es: ley física
  en: physical law
dificultad: 2
tiempo_estimado_min: 30
pregunta_fisica_central:
  es: "¿Cómo determina la naturaleza y geometría de un material su oposición al flujo de carga eléctrica?"
  en: "How do the nature and geometry of a material determine its opposition to electric charge flow?"
representacion_dominante: Coord
magnitud_dominante: R
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Laboratorio de Ohm
      en: Ohm's Lab
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
