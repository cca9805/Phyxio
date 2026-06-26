const n=`version: "v5"
id: ley-de-biot-savart
nombre:
  es: Ley de biot savart
  en: Biot-Savart Law

area: fisica-clasica
bloque: electromagnetismo
subbloque: magnetismo
parent_id: fuentes-del-campo-magnetico
ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-biot-savart
orden: 299310
type: leaf

niveles:
  es:
    - BACHILLERATO
    - UNIVERSIDAD
  en:
    - Upper Secondary
    - University

icon: "📘"

descripcion: "Subtema: Ley de Biot Savart. Teoria, formulas, ejemplos y aplicaciones."
description_en: "Content about Law Of Biot Savart."

tags:
  es:
    - ley de Biot Savart
    - campo magnetico
    - corriente electrica
    - elemento de corriente
    - hilo recto
    - espira
  en:
    - Biot Savart law
    - magnetic field
    - electric current
    - current element
    - straight wire
    - loop

prerequisitos:
  - fisica-clasica/electromagnetismo/magnetismo/campo-magnetico

graficos:
  - Coord

physical_role:
  es: ley física
  en: physical law

representacion_dominante: Coord
magnitud_dominante: B

pregunta_fisica_central:
  es: "¿Cómo calcula la ley de Biot Savart el campo magnetico sumando contribuciones de corriente?"
  en: "How does the Biot-Savart law calculate magnetic field by adding current contributions?"

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
      es: Interpretacion
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
