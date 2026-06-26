const n=`id: enunciado-y-condiciones-de-aplicacion
nombre:
  es: "Enunciado y condiciones de aplicacion"
  en: "Statement and Conditions for Application"
area: fisica-clasica
bloque: mecanica
subbloque: cantidad-de-movimiento
parent_id: principio-de-conservacion
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion
orden: 215211
type: leaf
niveles:
  es:
  - BACHILLERATO
  - UNIVERSIDAD
  en:
  - Upper Secondary
  - University
icon: ⚖️
descripcion: "Enunciado preciso del principio y condiciones físicas mínimas para aplicarlo."
description_en: "Precise statement of the principle and minimum physical conditions required to apply it."
tags:
  es:
    - conservacion-momento
    - sistema-aislado
    - condiciones-de-aplicacion
    - momento-total
    - criterio-fisico
  en:
    - momentum-conservation
    - isolated-system
    - conditions-of-application
    - total-momentum
    - physical-criterion
prerequisitos:
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/sistemas-aislados
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa
pregunta_fisica_central:
  es: "¿Cuáles son las condiciones mínimas para que el momento lineal total se conserve?"
  en: "What are the minimum conditions for total linear momentum to be conserved?"
graficos:
- Svg
representacion_dominante: Svg
magnitud_dominante: momento_lineal_total
physical_role:
  es: "criterio de aplicacion fisica"
  en: "physical applicability criterion"
dificultad: 3
tiempo_estimado_min: 55
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Svg
  output_policy:
    show_summary_first: true
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
