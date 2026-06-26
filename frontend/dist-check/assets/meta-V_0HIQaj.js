const n=`version: "v5"
id: campo-magnetico

nombre:
  es: Campo magnetico
  en: Magnetic Field

area: fisica-clasica
bloque: electromagnetismo
subbloque: magnetismo
parent_id: magnetismo
ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/campo-magnetico
orden: 299100
type: leaf

niveles:
  es:
    - BACHILLERATO
  en:
    - Upper Secondary

icon: "📌"

descripcion: "Subtema: Campo Magnetico. Teoría, fórmulas, ejemplos y aplicaciones."
description_en: Content about Magnetic Field.

tags:
  es:
    - campo magnético
    - fuerza de Lorentz
    - corriente eléctrica
    - inducción magnética
    - flujo magnético
    - regla de la mano derecha
  en:
    - magnetic field
    - Lorentz force
    - electric current
    - magnetic induction
    - magnetic flux
    - right-hand rule

prerequisitos:
  - fisica-clasica/electromagnetismo/fundamentos/carga-electrica
  - fisica-clasica/electromagnetismo/fundamentos/fuerzas-electromagneticas/fuerza-de-lorentz

graficos:
  - Coord

physical_role:
  es: concepto físico
  en: physical concept

dificultad: 3
tiempo_estimado_min: 50

representacion_dominante: Coord
magnitud_dominante: B

pregunta_fisica_central:
  es: "¿Qué magnitud describe la capacidad de una corriente o carga en movimiento para ejercer fuerza sobre otras cargas en movimiento, y cómo varía esa magnitud con la distancia a la fuente?"
  en: "What quantity describes the ability of a current or moving charge to exert a force on other moving charges, and how does that quantity vary with the distance from the source?"

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
`;export{n as default};
