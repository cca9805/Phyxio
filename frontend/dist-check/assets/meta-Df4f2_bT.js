const r=`id: adiabatico\r
nombre:\r
  es: Adiabatico\r
  en: Adiabatic Process\r
area: fisica-clasica\r
bloque: termodinamica\r
subbloque: gases-y-modelos\r
parent_id: procesos-termodinamicos\r
ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/adiabatico\r
orden: 253440\r
type: leaf\r
niveles:\r
  es: [BACHILLERATO, EXTRACURRICULAR]\r
  en: [Upper Secondary, Extracurricular]\r
icon: 📘\r
descripcion: "Proceso adiabatico: sin intercambio de calor, trabajo transforma energia interna."\r
description_en: "Adiabatic process: no heat exchange, work transforms internal energy."\r
tags:\r
  es: [adiabatico, primer principio, trabajo, gas ideal, expansion]\r
  en: [adiabatic, first law, work, ideal gas, expansion]\r
prerequisitos:\r
  - fisica-clasica/termodinamica/fundamentos/primer-principio\r
  - fisica-clasica/termodinamica/gases-y-modelos/gas-ideal\r
graficos: [Coord]\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 4\r
tiempo_estimado_min: 30\r
pregunta_fisica_central:\r
  es: "¿Como cambia la temperatura de un gas cuando realiza o recibe trabajo sin intercambiar calor con el entorno?"\r
  en: "How does a gas temperature change when it performs or receives work without exchanging heat with its surroundings?"\r
representacion_dominante: Coord\r
magnitud_dominante: T\r
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
    preferred_type: Coord\r
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
