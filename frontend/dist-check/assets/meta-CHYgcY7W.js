const e=`version: "2.0"
id: ley-de-coulomb

nombre:
  es: Ley de coulomb
  en: Coulomb's Law

area: fisica-clasica
bloque: electromagnetismo
subbloque: electrostatica
parent_id: electrostatica
ruta_relativa: fisica-clasica/electromagnetismo/electrostatica/ley-de-coulomb
orden: 292100
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

icon: 🧲

descripcion: Ley fundamental de la fuerza entre cargas electricas en reposo.
description_en: Fundamental law governing force between static electric charges.

tags:
  es:
    - fuerza electrostática
    - carga eléctrica
    - interacción coulombiana
    - electrostática
    - campo eléctrico
    - ley inversa del cuadrado
  en:
    - electrostatic force
    - electric charge
    - Coulomb interaction
    - electrostatics
    - electric field
    - inverse square law

prerequisitos:
  - fisica-clasica/mecanica/dinamica/segunda-ley-de-newton

graficos:
  - Coord

physical_role:
  es: ley física
  en: physical law

dificultad: 2
tiempo_estimado_min: 45

representacion_dominante: Coord
magnitud_dominante: F_C

pregunta_fisica_central:
  es: "¿De qué depende la fuerza que ejercen dos cargas puntuales entre sí y cómo varía con la distancia?"
  en: "What determines the force between two point charges and how does it vary with distance?"

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
