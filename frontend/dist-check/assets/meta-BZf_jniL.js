const n=`id: reflexion-y-transmision-en-solidos
nombre:
  es: Reflexion y transmision en solidos
  en: Reflection and Transmission in Solids
area: fisica-clasica
bloque: ondas
subbloque: ondas-mecanicas
parent_id: ondas-en-solidos
ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/reflexion-y-transmision-en-solidos
orden: 232400
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
icon: "🎶"
descripcion: Reflexion y transmision de ondas elasticas en interfaces entre solidos con diferente impedancia acustica.
description_en: Reflection and transmission of elastic waves at interfaces between solids with different acoustic impedance.
tags:
  es:
    - reflexion
    - transmision
    - impedancia acustica
    - coeficiente de reflexion
    - coeficiente de transmision
    - interfaz
  en:
    - reflection
    - transmission
    - acoustic impedance
    - reflection coefficient
    - transmission coefficient
    - interface
prerequisitos:
  - fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/propiedades-elasticas-del-solido
  - fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos
graficos:
  - Coord
  - Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 30
representacion_dominante: Coord
magnitud_dominante: R_amp
pregunta_fisica_central:
  es: "Que fraccion de la energia de una onda elastica se refleja y que fraccion se transmite cuando la onda encuentra una interfaz entre dos solidos?"
  en: "What fraction of the energy of an elastic wave is reflected and what fraction is transmitted when the wave encounters an interface between two solids?"
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
