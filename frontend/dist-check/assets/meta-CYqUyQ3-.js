const n=`version: 5\r
id: energia-en-mhs\r
type: leaf\r
nombre:\r
  es: Energia en mhs\r
  en: Energy in Simple Harmonic Motion\r
titulo:\r
  es: Energia en mhs\r
  en: Energy in Simple Harmonic Motion\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: oscilaciones\r
parent_id: mhs\r
ruta_relativa: fisica-clasica/mecanica/oscilaciones/mhs/energia-en-mhs\r
orden: 217120\r
icon: 📘\r
descripcion: "Subtema: Energia en Mhs. Teoria, formulas, ejemplos y aplicaciones."\r
description_en: "Content about Energy In Mhs."\r
tags:\r
  es: [ oscilaciones, mhs, energia ]\r
  en: [ oscillations, shm, energy ]\r
prerequisitos:\r
- fisica-clasica/mecanica/trabajo-y-energia/energia-potencial-elastica\r
- fisica-clasica/mecanica/oscilaciones/mhs/ecuacion-movimiento\r
niveles:\r
  es: [ ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR ]\r
  en: [ Secondary, Upper Secondary, University, Extracurricular ]\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
graficos: [ Coord ]\r
representacion_dominante: Coord\r
magnitud_dominante: E\r
pregunta_fisica_central:\r
  es: "¿Como se intercambian [[K]] y [[U]] sin cambiar [[E]] total en un oscilador armonico simple ideal?"\r
  en: "How do [[K]] and [[U]] exchange while total [[E]] remains unchanged in an ideal simple harmonic oscillator?"\r
dificultad: 2\r
tiempo_estimado_min: 55\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    tab_label:\r
      es: Interpretacion\r
      en: Interpretation\r
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
`;export{n as default};
