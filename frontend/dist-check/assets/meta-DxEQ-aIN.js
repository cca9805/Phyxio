const n=`version: 5\r
id: ecuacion-movimiento\r
type: leaf\r
nombre:\r
  es: Ecuacion movimiento\r
  en: Equation of Motion in Simple Harmonic Motion\r
titulo:\r
  es: Ecuacion movimiento\r
  en: Equation of Motion in Simple Harmonic Motion\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: oscilaciones\r
parent_id: mhs\r
ruta_relativa: fisica-clasica/mecanica/oscilaciones/mhs/ecuacion-movimiento\r
orden: 217110\r
icon: ⚙️\r
descripcion: "Subtema: Ecuacion Movimiento. Teoria, formulas, ejemplos y aplicaciones."\r
description_en: "Content about Ecuacion Motion."\r
tags:\r
  es: [ oscilaciones, mhs, ecuacion_movimiento ]\r
  en: [ oscillations, shm, equation_of_motion ]\r
prerequisitos:\r
- fisica-clasica/mecanica/dinamica/fuerzas/fuerza-elastica/ley-de-hooke\r
niveles:\r
  es: [ ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR ]\r
  en: [ Secondary, Upper Secondary, University, Extracurricular ]\r
physical_role:\r
  es: ley física\r
  en: physical law\r
graficos: [ Coord ]\r
representacion_dominante: Coord\r
magnitud_dominante: x\r
pregunta_fisica_central:\r
  es: "¿Como conecta la ecuacion de movimiento del MHS la evolucion temporal de [[x]], [[v]] y [[a]] bajo hipotesis lineales?"\r
  en: "How does the SHM equation of motion connect time evolution of [[x]], [[v]], and [[a]] under linear assumptions?"\r
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
    show_warnings: true\r
    show_likely_errors: true\r
    max_inline_messages: 3\r
  dependencies:\r
    requires_formulas: true\r
    requires_magnitudes: true\r
    supports_graph_binding: true\r
`;export{n as default};
