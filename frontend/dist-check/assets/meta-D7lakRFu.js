const n=`version: 5\r
id: hamilton-jacobi\r
nombre:\r
  es: Hamilton-Jacobi\r
  en: Hamilton-Jacobi Theory\r
titulo:\r
  es: Hamilton-Jacobi\r
  en: Hamilton-Jacobi Theory\r
type: leaf\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: mecanica-analitica\r
parent_id: hamiltoniano\r
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/hamilton-jacobi\r
orden: 219450\r
dificultad: 5\r
tiempo_estimado_min: 75\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🧭\r
descripcion: Reduccion de la dinamica mediante la funcion principal de accion.\r
description_en: Dynamical reduction through the principal action function.\r
descripcion_corta: Reduccion de la dinamica mediante la funcion principal de accion.\r
magnitud_dominante: S\r
representacion_dominante: none\r
physical_role:\r
  es: método de resolución\r
  en: resolution method\r
pregunta_fisica_central:\r
  es: ¿Como convierte Hamilton-Jacobi la dinamica en una ecuacion para la accion principal?\r
  en: How does Hamilton-Jacobi turn dynamics into an equation for the principal action?\r
prerequisitos:\r
- fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/ecuaciones-de-hamilton\r
tags:\r
  es:\r
  - hamilton-jacobi\r
  - accion\r
  - hamiltoniano\r
  - integrabilidad\r
  en:\r
  - hamilton-jacobi\r
  - action\r
  - hamiltonian\r
  - integrability\r
objetivos:\r
- es: Reconocer el objeto matematico central del leaf.\r
  en: Recognize the central mathematical object of the leaf.\r
- es: Aplicar sus formulas sin perder el dominio fisico.\r
  en: Apply its formulas without losing the physical domain.\r
- es: Usarlo como criterio avanzado de modelado.\r
  en: Use it as an advanced modeling criterion.\r
suposiciones:\r
- es: Sistema clasico regular dentro del dominio analitico declarado.\r
  en: Regular classical system within the declared analytical domain.\r
- es: Variables suaves y compatibles con las coordenadas elegidas.\r
  en: Smooth variables compatible with the chosen coordinates.\r
competencias_lomloe:\r
- STEM\r
- modelizacion\r
- razonamiento_cientifico\r
- resolucion_problemas\r
graficos: []\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    tab_label:\r
      es: Lectura avanzada\r
      en: Advanced reading\r
    inline_calculator: true\r
    inline_graph: false\r
    dedicated_tab: true\r
    show_summary: true\r
    show_physical_reading: true\r
    show_coherence: true\r
    show_model_validity: true\r
    show_graph_reading: true\r
    show_likely_errors: true\r
    show_next_step: true\r
  mini_graph:\r
    enabled: false\r
    preferred_type: Coord\r
  output_policy:\r
    show_summary_first: true\r
    show_warnings: true\r
    show_likely_errors: true\r
    max_inline_messages: 3\r
    show_status_icons: true\r
    allow_collapsible_sections: true\r
  dependencies:\r
    requires_magnitudes: true\r
    requires_formulas: true\r
    supports_graph_binding: false\r
`;export{n as default};
