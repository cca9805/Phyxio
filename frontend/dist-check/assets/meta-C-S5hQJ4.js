const e=`id: autoinduccion
nombre:
  es: Autoinduccion
  en: Self-Inductance
area: fisica-clasica
bloque: electromagnetismo
subbloque: induccion-electromagnetica
parent_id: inductancia
ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion
orden: 2100410
type: leaf
niveles:
  es:
    - UNIVERSIDAD
  en:
    - University
icon: 🧪
descripcion: Relaciona cambio de corriente, flujo enlazado, fem inducida y energia magnetica almacenada.
description_en: Relates current change, linked flux, induced emf, and stored magnetic energy.
tags:
  es:
    - autoinduccion
    - inductancia
    - flujo
    - fem
    - energia
  en:
    - self-inductance
    - inductance
    - flux
    - emf
    - energy
prerequisitos:
  - fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico
  - fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday
graficos:
  - Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 40
representacion_dominante: Coord
magnitud_dominante: L
idea_fisica_dominante:
  es: Una bobina se opone a los cambios de su propia corriente porque el flujo magnetico que ella crea cambia con esa corriente.
  en: A coil opposes changes in its own current because the magnetic flux it creates changes with that current.
pregunta_fisica_central:
  es: ¿Como determina la autoinduccion la fem que se opone a un cambio de corriente en una bobina?
  en: How does self-inductance determine the emf that opposes a current change in a coil?
error_conceptual_dominante:
  es: Creer que la inductancia se opone a la corriente, cuando se opone al cambio de corriente.
  en: Believing that inductance opposes current, when it opposes current change.
criterio_de_aplicabilidad:
  es: El modelo lineal aplica si la geometria y el material mantienen una relacion casi proporcional entre corriente y flujo enlazado.
  en: The linear model applies if geometry and material keep an almost proportional relation between current and linked flux.
criterio_de_fallo_del_modelo:
  es: Falla con saturacion magnetica, resistencia dominante, acoplos externos importantes o cambios tan rapidos que aparecen parasitos.
  en: It fails with magnetic saturation, dominant resistance, important external coupling, or changes fast enough for parasitics to appear.
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
    max_inline_messages: 2
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
