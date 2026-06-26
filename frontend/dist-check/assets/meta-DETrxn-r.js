const e=`version: "2.0"
id: energia-potencial-electrica

nombre:
  es: Energia potencial electrica
  en: Electric Potential Energy

area: fisica-clasica
bloque: electromagnetismo
subbloque: electrostatica
parent_id: potencial-electrico
ruta_relativa: fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/energia-potencial-electrica
orden: 292320
type: leaf

niveles:
  es:
    - BACHILLERATO
  en:
    - Upper Secondary

icon: 🧪

descripcion: Energía almacenada en un sistema de cargas por su configuración en el campo eléctrico.
description_en: Energy stored in a charge system due to its configuration in the electric field.

tags:
  es:
    - energía potencial eléctrica
    - trabajo eléctrico
    - sistema de cargas
    - potencial eléctrico
    - electrostática
    - conservación de energía
  en:
    - electric potential energy
    - electric work
    - charge system
    - electric potential
    - electrostatics
    - energy conservation

prerequisitos:
  - fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/diferencia-de-potencial

graficos:
  - Coord

physical_role:
  es: magnitud física
  en: physical quantity

dificultad: 2
tiempo_estimado_min: 45

representacion_dominante: Coord
magnitud_dominante: U_e

pregunta_fisica_central:
  es: "¿Cuánta energía almacena un sistema de cargas eléctricas en función de su geometría, y cómo cambia cuando una carga se mueve dentro del campo?"
  en: "How much energy does a system of electric charges store depending on its geometry, and how does it change when a charge moves within the field?"

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
