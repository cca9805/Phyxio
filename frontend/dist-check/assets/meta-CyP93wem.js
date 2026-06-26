const e=`id: cambio-de-velocidad
nombre:
  es: Cambio de velocidad
  en: Change in Wave Speed
area: fisica-clasica
bloque: ondas
subbloque: fenomenos-ondulatorios
parent_id: refraccion
ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/cambio-de-velocidad
orden: 233220
type: leaf
niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
    - EXTRACURRICULAR
  en:
    - Secondary
    - Upper Secondary
    - University
    - Extracurricular
icon: 📘
descripcion: Velocidad de ondas en diferentes medios e indice de refraccion
description_en: Wave speed in different media and refractive index
tags:
  es:
    - velocidad
    - indice de refraccion
    - medio material
    - luz
    - optica
    - ondas
  en:
    - speed
    - refractive index
    - material medium
    - light
    - optics
    - waves
prerequisitos:
  - fisica-clasica/ondas/concepto-de-onda
  - fisica-clasica/ondas/velocidad-de-propagacion
graficos:
  - Coord
  - Svg
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 25

representacion_dominante: Coord
magnitud_dominante: v_medio

pregunta_fisica_central:
  es: ¿Como cambia la velocidad de una onda al pasar de un medio a otro en un proceso de refraccion, que determina esa velocidad reducida y como se relaciona con el indice del material?
  en: How does wave speed change when passing from one medium to another in a refraction process, what determines that reduced speed, and how does it relate to the material's refractive index?

nucleo_didactico:
  idea_fisica_dominante:
    es: La velocidad de propagacion de una onda depende de las propiedades fisicas del medio, siendo menor en medios mas densos o refringentes.
    en: The propagation speed of a wave depends on the physical properties of the medium, being lower in denser or more refractive media.
  magnitudes_nucleo:
    - c_vacio
    - v_medio
    - n_indice
  formulas_nucleo:
    - velocidad_medio
    - indice_refraccion
  error_conceptual_dominante:
    es: Confundir la velocidad de la luz en vacio con su velocidad en medios materiales, asumiendo que la luz siempre viaja a la misma velocidad.
    en: Confusing the speed of light in vacuum with its speed in material media, assuming light always travels at the same speed.
  criterio_de_aplicabilidad:
    es: El modelo aplica cuando la onda atraviesa medios transparentes homogeneos e isotropos sin absorcion significativa.
    en: The model applies when the wave traverses homogeneous, isotropic, transparent media without significant absorption.
  criterio_de_fallo_del_modelo:
    es: El modelo falla en medios dispersivos donde el indice depende fuertemente de la frecuencia, o en medios absorbentes/opacos.
    en: The model fails in dispersive media where the index strongly depends on frequency, or in absorbing/opaque media.

interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion
      en: Interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
  output_policy:
    show_summary_first: true
    max_inline_messages: 4
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
