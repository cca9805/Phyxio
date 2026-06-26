const e=`version: "v5"
id: ley-de-ampere
nombre:
  es: Ley de ampere
  en: Ampere's Law

area: fisica-clasica
bloque: electromagnetismo
subbloque: magnetismo
parent_id: fuentes-del-campo-magnetico
ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-ampere
orden: 299320
type: leaf

niveles:
  es:
    - BACHILLERATO
    - UNIVERSIDAD
  en:
    - Upper Secondary
    - University

icon: "🧲"

descripcion: "Subtema: Ley de Ampere. Teoría, fórmulas, ejemplos y aplicaciones."
description_en: Content about Law Of Ampere.

tags:
  es:
    - ley de Ampere
    - campo magnetico
    - corriente encerrada
    - circulacion magnetica
    - simetria magnetica
    - solenoide
  en:
    - Ampere law
    - magnetic field
    - enclosed current
    - magnetic circulation
    - magnetic symmetry
    - solenoid

prerequisitos:
  - fisica-clasica/electromagnetismo/magnetismo/campo-magnetico
  - fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-biot-savart

graficos:
  - Coord

physical_role:
  es: ley física
  en: physical law

representacion_dominante: Coord
magnitud_dominante: B

pregunta_fisica_central:
  es: "¿Cómo relaciona la ley de Ampere la circulación del campo magnetico con la corriente encerrada por una curva cerrada?"
  en: "How does Ampere's law relate magnetic-field circulation to the current enclosed by a closed curve?"

dificultad: 4
tiempo_estimado_min: 45

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
