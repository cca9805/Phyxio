const r=`id: diagramas-pv\r
nombre:\r
  es: Diagramas pv\r
  en: P-V Diagrams\r
area: fisica-clasica\r
bloque: termodinamica\r
subbloque: gases-y-modelos\r
parent_id: gases-y-modelos\r
ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/diagramas-pv\r
orden: 253500\r
type: leaf\r
niveles:\r
  es: [ BACHILLERATO ]\r
  en: [ Upper Secondary ]\r
icon: 🧪\r
descripcion: "Subtema: Diagramas p-V. Teoría, fórmulas, ejemplos y aplicaciones."\r
description_en: "Subtopic: P-V diagrams. Theory, formulas, examples and applications."\r
tags:\r
  es: [ diagramas, p-v, termodinamica, gases, trabajo ]\r
  en: [ diagrams, p-v, thermodynamics, gases, work ]\r
prerequisitos:\r
- fisica-clasica/termodinamica/gases-y-modelos/gas-ideal\r
- fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos\r
graficos: [ Coord, Svg ]\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 3\r
tiempo_estimado_min: 30\r
pregunta_fisica_central:\r
  es: ¿Cómo se interpreta el trabajo y la forma de un proceso en un diagrama p-V?\r
  en: How is work and the shape of a process interpreted in a P-V diagram?\r
representacion_dominante: Coord\r
magnitud_dominante: P\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretacion fisica\r
      en: Physical interpretation\r
  mini_graph:\r
    enabled: true\r
    preferred_type: Svg\r
  output_policy:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
    show_warnings: true\r
    show_likely_errors: true\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{r as default};
