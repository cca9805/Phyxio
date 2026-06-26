const n=`id: impulso-externo-y-ruptura-de-la-conservacion\r
nombre:\r
  es: Impulso externo y ruptura de la conservacion\r
  en: External Impulse and Breakdown of Conservation\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: cantidad-de-movimiento\r
parent_id: principio-de-conservacion\r
ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion\r
orden: 215213\r
type: leaf\r
niveles:\r
  es:\r
  - BACHILLERATO\r
  - UNIVERSIDAD\r
  en:\r
  - Upper Secondary\r
  - University\r
icon: 🔨\r
descripcion: Cuándo un impulso externo rompe la conservación y cómo estimar si su\r
  efecto es despreciable.\r
description_en: When an external impulse breaks conservation and how to estimate whether\r
  its effect is negligible.\r
tags:\r
  es:\r
    - impulso-externo\r
    - conservacion-momento\r
    - validez\r
    - sistema-aislado\r
    - aproximaciones\r
  en:\r
    - external-impulse\r
    - momentum-conservation\r
    - validity\r
    - isolated-system\r
    - approximations\r
prerequisitos:\r
- fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/impulso\r
- fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas\r
pregunta_fisica_central:\r
  es: "¿Cuándo un impulso externo rompe la conservación del momento lineal?"\r
  en: "When does an external impulse break the conservation of linear momentum?"\r
graficos:\r
- Svg\r
- Coord\r
representacion_dominante: Svg\r
magnitud_dominante: impulso externo\r
physical_role:\r
  es: criterio de validez fisica\r
  en: physical validity criterion\r
dificultad: 3\r
tiempo_estimado_min: 45\r
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
`;export{n as default};
