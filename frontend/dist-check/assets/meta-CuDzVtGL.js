const n=`id: tensor-de-inercia\r
nombre:\r
  es: Tensor de Inercia\r
  en: Inertia Tensor\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: rotacion\r
parent_id: momento-de-inercia\r
ruta_relativa: fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia/tensor-de-inercia
orden: 212444\r
type: leaf\r
niveles:\r
  es:\r
  - UNIVERSIDAD\r
  en:\r
  - University\r
icon: 🧱\r
descripcion: Como el tensor y el producto de inercia desalinean L y omega.\r
description_en: How the inertia tensor and product of inertia misalign L and omega.\r
tags:\r
  es:\r
  - tensor-de-inercia\r
  - producto-de-inercia\r
  - ejes-principales\r
  - momento-angular\r
  - dinamica-rotacional\r
  - cuerpo-rigido\r
  en:\r
  - inertia-tensor\r
  - product-of-inertia\r
  - principal-axes\r
  - angular-momentum\r
  - rotational-dynamics\r
  - rigid-body\r
prerequisitos:\r
- definicion-momento-de-inercia\r
- matrices-y-determinantes\r
graficos:\r
- Svg\r
pregunta_fisica_central:\r
  es: ¿Como cambia la direccion de L cuando el tensor de inercia tiene productos de\r
    inercia no nulos?\r
  en: How does the direction of L change when the inertia tensor has nonzero products\r
    of inertia?\r
representacion_dominante: Svg\r
magnitud_dominante: tensor_inercia\r
physical_role:\r
  es: concepto físico\r
  en: physical concept\r
dificultad: 5\r
tiempo_estimado_min: 60\r
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
titulo: Tensor de Inercia\r
titulo_en: Inertia Tensor\r
`;export{n as default};
