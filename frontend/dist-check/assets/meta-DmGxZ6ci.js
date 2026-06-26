const e=`version: "2.0"
id: campo-electrico

nombre:
  es: Campo electrico
  en: Electric Field

area: fisica-clasica
bloque: electromagnetismo
subbloque: fundamentos
parent_id: fundamentos
ruta_relativa: fisica-clasica/electromagnetismo/fundamentos/campo-electrico
orden: 291200
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

icon: 🔌

descripcion: Magnitud vectorial que describe la fuerza eléctrica por unidad de carga en cada punto del espacio.
description_en: Vector quantity describing the electric force per unit charge at each point in space.

tags:
  es:
    - campo eléctrico
    - fuerza eléctrica
    - carga de prueba
    - electrostática
    - ley de Coulomb
    - líneas de campo
  en:
    - electric field
    - electric force
    - test charge
    - electrostatics
    - Coulomb law
    - field lines

prerequisitos:
  - fisica-clasica/electromagnetismo/fundamentos/ley-de-coulomb

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 2
tiempo_estimado_min: 45

representacion_dominante: Coord
magnitud_dominante: E

pregunta_fisica_central:
  es: "¿Qué magnitud describe la capacidad de una carga para ejercer fuerza sobre cualquier otra carga en ese punto del espacio, y cómo varía con la distancia a la carga fuente?"
  en: "What quantity describes the ability of a charge to exert a force on any other charge placed at that point in space, and how does it vary with distance from the source charge?"

interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretación
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
