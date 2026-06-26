const n=`id: tiro-parabolico\r
nombre:\r
  es: Tiro parabolico\r
  en: Projectile Motion\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cinematica\r
parent_id: movimiento-en-dos-dimensiones\r
ruta_relativa: fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-parabolico\r
orden: 211530\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Secondary\r
  - Upper Secondary\r
  - University\r
icon: 🏹\r
descripcion: Modelo cinemático bidimensional que describe la trayectoria parabólica\r
  bajo gravedad constante e independencia de movimientos en los ejes.\r
description_en: Two-dimensional kinematic model describing parabolic trajectory under\r
  constant gravity and independence of motion across axes.\r
tags:\r
  es:\r
  - cinematica\r
  - tiro-parabolico\r
  - proyectiles\r
  - alcance\r
  - parabola\r
  - balistica\r
  en:\r
  - kinematics\r
  - projectile-motion\r
  - projectiles\r
  - range\r
  - parabola\r
  - ballistics\r
prerequisitos:\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru\r
- fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mrua\r
- matematicas/trigonometria-y-geometria/funciones-trigonometricas\r
- fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-horizontal\r
graficos:\r
- Coord\r
- Svg\r
physical_role:\r
  es: fenómeno físico\r
  en: physical phenomenon\r
dificultad: 3\r
tiempo_estimado_min: 50\r
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
  es: ¿Cómo determinan la velocidad inicial y el ángulo de lanzamiento la trayectoria,\r
    el alcance y la altura máxima?\r
  en: How do initial speed and launch angle determine the trajectory, range, and maximum\r
    height?\r
representacion_dominante: Coord\r
magnitud_dominante: alcance\r
`;export{n as default};
