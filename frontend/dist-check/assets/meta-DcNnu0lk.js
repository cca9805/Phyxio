const e=`id: electromagneticas
nombre:
  es: Electromagneticas
  en: Electromagnetic Waves
area: fisica-clasica
bloque: ondas
subbloque: fundamentos
parent_id: tipos-de-ondas
ruta_relativa: fisica-clasica/ondas/fundamentos/tipos-de-ondas/electromagneticas
orden: 231220
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: 🧲
descripcion: Ondas transversales de campos electricos y magneticos que no requieren medio material.
description_en: Transverse electric and magnetic field waves that do not require a material medium.
tags:
  es: [ondas, electromagnetismo, campo electrico, campo magnetico, luz, vacio]
  en: [waves, electromagnetism, electric field, magnetic field, light, vacuum]
prerequisitos:
  - fisica-clasica/ondas/fundamentos/concepto-de-onda
  - fisica-clasica/ondas/fundamentos/ondas-transversales-y-longitudinales
  - fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda
graficos: [Coord]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 24
representacion_dominante: Coord
magnitud_dominante: E0
pregunta_fisica_central:
  es: ¿Cómo se reconoce una onda electromagnética por el acoplamiento transversal entre campo eléctrico, campo magnético y propagación?
  en: How is an electromagnetic wave recognized from the transverse coupling between electric field, magnetic field, and propagation?
nucleo:
  magnitudes: [E0, B0, c, lambda, f]
  formulas: [onda_em_velocidad, relacion_campos_em]
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
`;export{e as default};
