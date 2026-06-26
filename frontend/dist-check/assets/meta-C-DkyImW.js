const n=`id: dispersion-angular-en-colisiones-2d
nombre:
  es: Dispersion angular en colisiones 2d
  en: Dispersion Angular in Collisions 2d
area: fisica-clasica
bloque: mecanica
subbloque: cantidad-de-movimiento
parent_id: colisiones
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/dispersion-angular-en-colisiones-2d
orden: 215238
type: leaf
niveles:
  es: [UNIVERSIDAD, EXTRACURRICULAR]
  en: [University, Extracurricular]
icon: 🔭
descripcion: Contenido sobre Dispersion angular en colisiones 2d.
description_en: Content about Dispersion Angular In Colisiones 2D.
tags:
  es: [dispersión, colisiones-2d, momento-vectorial, ángulos, mecánica]
  en: [scattering, 2d-collisions, vector-momentum, angles, mechanics]
prerequisitos:
  - fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-2d
pregunta_fisica_central:
  es: "¿Cómo afecta el ángulo de dispersión [[theta1]] a la velocidad final [[v1f]] del proyectil?"
  en: "How does the scattering angle [[theta1]] affect the final velocity [[v1f]] of the projectile?"
graficos:
  - Coord
  - Svg
representacion_dominante: Coord
magnitud_dominante: v1f
physical_role:
  es: fenómeno físico
  en: physical phenomenon
dificultad: 4
tiempo_estimado_min: 60
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
    config:
      axes:
        x: { label: { es: "v1i", en: "v1i" } }
        y: { label: { es: "v1f", en: "v1f" } }
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
