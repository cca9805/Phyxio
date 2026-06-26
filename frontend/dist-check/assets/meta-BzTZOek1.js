const n=`id: propiedades-elasticas-del-solido
nombre:
  es: Propiedades elasticas del solido
  en: Elastic Properties of Solids
area: fisica-clasica
bloque: ondas
subbloque: ondas-mecanicas
parent_id: ondas-en-solidos
ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/propiedades-elasticas-del-solido
orden: 232320
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
icon: "⚙"
descripcion: Modulos elasticos fundamentales del solido isotropo, relacion tension-deformacion y constantes de Lame.
description_en: Fundamental elastic moduli of isotropic solids, stress-strain relationship and Lame constants.
tags:
  es:
    - modulo de Young
    - modulo de cizalla
    - modulo de compresibilidad
    - coeficiente de Poisson
    - constantes elasticas
    - ley de Hooke
  en:
    - Young modulus
    - shear modulus
    - bulk modulus
    - Poisson ratio
    - elastic constants
    - Hooke law
prerequisitos:
  - fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/introduccion
graficos:
  - Coord
  - Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 30
representacion_dominante: Coord
magnitud_dominante: E_young
pregunta_fisica_central:
  es: "Como se relacionan los modulos elasticos de un solido isotropo con su respuesta mecanica a distintos tipos de esfuerzo?"
  en: "How do the elastic moduli of an isotropic solid relate to its mechanical response under different types of stress?"
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
