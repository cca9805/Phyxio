const e=`id: peso-en-diferentes-contextos\r
nombre:\r
  es: Peso en diferentes contextos\r
  en: Weight in Different Contexts\r
area: fisica-clasica\r
bloque: mecanica\r
subbloque: dinamica\r
parent_id: peso\r
ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/peso/peso-en-diferentes-contextos\r
orden: 212212\r
type: leaf\r
niveles:\r
  es:\r
  - ESO\r
  en:\r
  - Secondary\r
icon: 🏋️\r
descripcion: El peso depende del campo gravitatorio y del marco de referencia usado\r
  para describir el sistema. Este leaf distingue peso\r
description_en: Weight in Different Contexts. Conceptual overview, key equations,\r
  solved examples, and practical applications.\r
tags:\r
  es:\r
  - dinamica\r
  - fuerzas\r
  - peso\r
  - gravedad\r
  - contexto\r
  - peso-aparente\r
  en:\r
  - dynamics\r
  - forces\r
  - weight\r
  - gravity\r
  - context\r
  - apparent-weight\r
representacion_dominante: coord\r
magnitud_dominante: Pap\r
pregunta_fisica_central:\r
  es: ¿Cómo cambia la fuerza de soporte detectada por un sensor cuando varía la gravedad o la aceleración del sistema?\r
  en: How does the support force detected by a sensor change when gravity or system acceleration varies?\r
prerequisitos:\r
- fundamentos/conceptos-estructurales/sistema-fisico\r
- fundamentos/conceptos-estructurales/estado-del-sistema\r
- fundamentos/conceptos-estructurales/interacciones-y-fuerzas\r
- fundamentos/conceptos-estructurales/fuerza-neta-y-resultante\r
- fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez\r
- fisica-clasica/mecanica/dinamica/fuerzas/peso/definicion-y-expresion\r
- fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa\r
graficos:\r
- Coord\r
- Dcl\r
physical_role:\r
  es: modelo físico\r
  en: physical model\r
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
`;export{e as default};
