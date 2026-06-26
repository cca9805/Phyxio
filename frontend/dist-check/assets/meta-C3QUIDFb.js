const n=`id: ondas-transversales-de-corte
nombre:
  es: Ondas transversales de corte
  en: Transverse Shear Waves
area: fisica-clasica
bloque: ondas
subbloque: ondas-mecanicas
parent_id: ondas-en-solidos
ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-transversales-de-corte
orden: 232350
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
icon: "🔉"
descripcion: Ondas transversales de corte en solidos elasticos isotropos, velocidad y polarizacion.
description_en: Transverse shear waves in isotropic elastic solids, velocity and polarisation.
tags:
  es:
    - ondas transversales
    - ondas de corte
    - ondas S
    - cizalla
    - elasticidad
  en:
    - transverse waves
    - shear waves
    - S waves
    - shear
    - elasticity
prerequisitos:
  - fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/propiedades-elasticas-del-solido
graficos:
  - Coord
  - Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25
representacion_dominante: Coord
magnitud_dominante: v_s
pregunta_fisica_central:
  es: "Por que las ondas transversales de corte solo se propagan en solidos y que relacion tiene su velocidad con la rigidez del material?"
  en: "Why do transverse shear waves only propagate in solids and how does their velocity relate to material stiffness?"
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
