const e=`version: 5\r
id: ligaduras-y-grados-de-libertad\r
nombre:\r
  es: Ligaduras y grados de libertad\r
  en: Constraints and Degrees of Freedom\r
titulo:\r
  es: Ligaduras y grados de libertad\r
  en: Constraints and Degrees of Freedom\r
type: leaf\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: mecanica-analitica\r
parent_id: mecanica-analitica\r
ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/ligaduras-y-grados-de-libertad\r
orden: 219200\r
dificultad: 3\r
tiempo_estimado_min: 60\r
niveles:\r
  es: [ UNIVERSIDAD ]\r
  en: [ University ]\r
icon: "🧪"\r
descripcion: Ligaduras y grados de libertad en sistemas mecánicos con restricciones independientes.\r
description_en: Constraints and degrees of freedom in mechanical systems with independent restrictions.\r
descripcion_corta: Conteo estructural de grados de libertad y elección de coordenadas bajo ligaduras.\r
magnitud_dominante: f\r
representacion_dominante: Coord\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
pregunta_fisica_central:\r
  es: "¿Cómo determinan las ligaduras independientes el número de grados de libertad y la elección de coordenadas generalizadas?"\r
  en: "How do independent constraints determine the number of degrees of freedom and the choice of generalized coordinates?"\r
prerequisitos:\r
- fundamentos/vectores-y-componentes\r
tags:\r
  es: [ ligaduras, grados-de-libertad, modelizacion, mecanica-analitica ]\r
  en: [ constraints, degrees-of-freedom, modeling, analytical-mechanics ]\r
objetivos:\r
- es: Identificar ligaduras independientes y traducirlas en reducción efectiva de coordenadas.\r
  en: Identify independent constraints and translate them into an effective coordinate reduction.\r
- es: Contar grados de libertad de forma trazable en presencia de ligaduras holónomas.\r
  en: Count degrees of freedom consistently in the presence of holonomic constraints.\r
- es: Elegir coordenadas generalizadas convenientes para simplificar el modelo dinámico.\r
  en: Choose convenient generalized coordinates to simplify the dynamic model.\r
suposiciones:\r
- es: Sistema clásico con ligaduras ideales e independientes en el dominio operativo analizado.\r
  en: Classical system with ideal, independent constraints in the analyzed operating domain.\r
- es: Coordenadas generalizadas bien definidas e invertibles localmente en la configuración de trabajo.\r
  en: Generalized coordinates are well defined and locally invertible in the working configuration.\r
competencias_lomloe: [ STEM, modelizacion, razonamiento_cientifico, resolucion_problemas ]\r
graficos: [ Coord ]\r
interpretacion:\r
  enabled: true\r
  archivo: interpretacion.yaml\r
  ui:\r
    tab_label:\r
      es: Lectura de ligaduras\r
      en: Constraint Reading\r
    inline_calculator: true\r
    inline_graph: true\r
    dedicated_tab: true\r
    show_summary: true\r
    show_physical_reading: true\r
    show_coherence: true\r
    show_model_validity: true\r
    show_graph_reading: true\r
    show_likely_errors: true\r
    show_next_step: true\r
  mini_graph:\r
    enabled: true\r
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
    supports_graph_binding: true\r
`;export{e as default};
