const n=`id: ondas-transversales-y-longitudinales
nombre:
  es: Ondas transversales y longitudinales
  en: Transverse and Longitudinal Waves
area: fisica-clasica
bloque: ondas
subbloque: fundamentos
parent_id: fundamentos
ruta_relativa: fisica-clasica/ondas/fundamentos/ondas-transversales-y-longitudinales
orden: 231300
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: 📘
descripcion: Clasifica ondas segun la orientacion de la perturbacion respecto al avance.
description_en: Classifies waves by disturbance orientation relative to propagation.
tags:
  es: [ondas, transversal, longitudinal, perturbacion, propagacion, clasificacion]
  en: [waves, transverse, longitudinal, disturbance, propagation, classification]
prerequisitos:
  - fisica-clasica/ondas/fundamentos/concepto-de-onda
graficos: [Coord, Svg]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 2
tiempo_estimado_min: 24
representacion_dominante: Coord
magnitud_dominante: C_T
pregunta_fisica_central:
  es: ¿Como se distingue una onda transversal de una longitudinal al comparar perturbacion y propagacion?
  en: How is a transverse wave distinguished from a longitudinal wave by comparing disturbance and propagation?
nucleo:
  magnitudes: [A, u_perp, u_parallel, C_T, C_L]
  formulas: [coeficiente_transversal, coeficiente_longitudinal]
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
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{n as default};
