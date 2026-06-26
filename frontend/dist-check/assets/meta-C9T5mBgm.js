const n=`id: energia-de-una-onda

nombre:
  es: Energia de una onda
  en: Energy of a Wave

area: fisica-clasica
bloque: ondas
subbloque: energia-y-transporte
parent_id: energia-y-transporte
ruta_relativa: fisica-clasica/ondas/energia-y-transporte/energia-de-una-onda
orden: 237100
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

icon: "🔊"

graficos:
  - Coord
  - Svg

physical_role:
  es: concepto físico
  en: physical concept

descripcion: Subtema sobre la energía transportada por ondas mecánicas y electromagnéticas, incluyendo su densidad y distribución.
description_en: Topic about energy carried by mechanical and electromagnetic waves, including its density and distribution.

tags:
  es:
    - energía
    - ondas
    - transporte energético
    - densidad energía
    - potencia ondulatoria
  en:
    - energy
    - waves
    - energy transport
    - energy density
    - wave power

prerequisitos:
  - fisica-clasica/ondas/fundamentos/ecuacion-de-onda
  - fisica-clasica/mecanica/oscilaciones/oscilador-masa-muelle

dificultad: 3
tiempo_estimado_min: 25

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
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true

pregunta_fisica_central:
  es: "¿Cómo se distribuye la energía en una onda y qué factores determinan cuánta energía transporta?"
  en: "How is energy distributed in a wave and what factors determine how much energy it transports?"

representacion_dominante: Coord
magnitud_dominante: E_onda
`;export{n as default};
