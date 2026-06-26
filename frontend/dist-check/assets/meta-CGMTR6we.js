const e=`id: ley-de-lenz
nombre:
  es: Ley de lenz
  en: Lenz's Law
area: fisica-clasica
bloque: electromagnetismo
subbloque: induccion-electromagnetica
parent_id: induccion-electromagnetica
ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-lenz
orden: 2100300
type: leaf
niveles:
  es:
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Upper Secondary
    - University
    - Extracurricular
icon: 🧲
descripcion: Interpreta la polaridad inducida como oposición al cambio de flujo magnetico.
description_en: Interprets induced polarity as opposition to magnetic flux change.
tags:
  es:
    - lenz
    - induccion
    - polaridad
    - flujo
    - oposicion
  en:
    - lenz
    - induction
    - polarity
    - flux
    - opposition
prerequisitos:
  - fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico
  - fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday
graficos:
  - Coord
physical_role:
  es: ley física
  en: physical law
dificultad: 4
tiempo_estimado_min: 40
representacion_dominante: Coord
magnitud_dominante: epsilon_ind
idea_fisica_dominante:
  es: La fem inducida aparece con polaridad que se opone al cambio de flujo que la produce.
  en: Induced emf appears with polarity opposing the flux change that produces it.
pregunta_fisica_central:
  es: ¿Como fija la ley de Lenz el sentido de la fem inducida frente a un cambio de flujo?
  en: How does Lenz's law set the direction of induced emf against a flux change?
error_conceptual_dominante:
  es: Creer que la induccion siempre se opone al campo magnetico, cuando se opone a su cambio.
  en: Believing induction always opposes magnetic field, when it opposes its change.
criterio_de_aplicabilidad:
  es: Aplica cuando puede identificarse un cambio de flujo enlazado y la polaridad inducida asociada.
  en: It applies when linked flux change and the associated induced polarity can be identified.
criterio_de_fallo_del_modelo:
  es: Falla como regla simple si no se define la superficie, la normal o la convencion de corriente.
  en: It fails as a simple rule if surface, normal, or current convention is not defined.
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
