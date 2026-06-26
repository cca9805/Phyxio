const n=`id: modos-en-placas-y-membranas
orden: 232440
nombre:
  es: Modos en placas y membranas
  en: Modes in Plates and Membranes
area: fisica-clasica
bloque: ondas
subbloque: ondas-mecanicas
parent_id: ondas-en-solidos
descripcion: "Frecuencias y patrones nodales de modos vibratorios en placas y membranas."
description_en: "Modal frequencies and nodal patterns of vibratory modes in plates and membranes."
ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/modos-en-placas-y-membranas
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
icon: 🧱
graficos:
- Coord
- Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 4
tiempo_estimado_min: 50
representacion_dominante: Coord
magnitud_dominante: f_mn
pregunta_fisica_central:
  es: "¿Cómo determinan la geometría y las propiedades del material las frecuencias y los patrones nodales de los modos vibratorios en placas y membranas?"
  en: "How do geometry and material properties determine the frequencies and nodal patterns of vibratory modes in plates and membranes?"
tags:
  es:
  - modos vibratorios
  - placas elasticas
  - membranas vibrantes
  - patrones nodales
  - frecuencia modal
  en:
  - vibratory modes
  - elastic plates
  - vibrating membranes
  - nodal patterns
  - modal frequency
prerequisitos:
- fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/resonancia-y-modos-en-barras
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
