const n=`id: mcua\r
nombre:\r
  es: Mcua\r
  en: Uniformly Accelerated Circular Motion\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-circular\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-circular/mcua\r
orden: 211220\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
icon: 🌀\r
descripcion: Modelo cinemático de trayectoria circular con aceleración angular constante,\r
  implicando cambios uniformes en la velocidad angular.\r
description_en: Kinematic model of a circular path with constant angular acceleration,\r
  implying uniform changes in angular velocity.\r
tags:\r
  es:\r
  - cinematica\r
  - mcua\r
  - aceleracion-angular\r
  - movimiento-circular\r
  en:\r
  - kinematics\r
  - ucam\r
  - angular-acceleration\r
  - circular-motion\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-circular/mcu\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mrua\r
- matematicas/trigonometria-y-geometria/funciones-trigonometricas\r
- fisica-clasica/mecanica/cinematica/rotacion/magnitudes-angulares\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
dificultad: 4\r
tiempo_estimado_min: 75\r
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
pregunta_fisica_central:\r
  es: ¿Cómo evoluciona la velocidad angular cuando una trayectoria circular mantiene\r
    aceleración angular constante?\r
  en: How does angular velocity evolve when circular motion has constant angular acceleration?\r
representacion_dominante: Coord\r
magnitud_dominante: velocidad-angular\r
`;export{n as default};
