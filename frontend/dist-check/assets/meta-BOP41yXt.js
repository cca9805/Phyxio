const e=`id: fase
nombre:
  es: Fase
  en: Phase
area: fisica-clasica
bloque: ondas
subbloque: fundamentos
parent_id: magnitudes-ondulatorias
ruta_relativa: fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/fase
orden: 231440
type: leaf
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD, EXTRACURRICULAR]
  en: [Secondary, Upper Secondary, University, Extracurricular]
icon: 🧪
descripcion: Lectura física de la fase en una onda periódica.
description_en: Physical reading of phase in a periodic wave.
tags:
  es: [ondas, fase, desfase, periodo, longitud de onda, propagacion]
  en: [waves, phase, phase difference, period, wavelength, propagation]
prerequisitos:
  - fisica-clasica/ondas/fundamentos/concepto-de-onda
  - fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda
graficos: [Coord]
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 2
tiempo_estimado_min: 22
representacion_dominante: Coord
magnitud_dominante: phi
pregunta_fisica_central:
  es: ¿Cómo permite la fase saber si dos puntos de una onda están en el mismo estado de oscilación?
  en: How does phase tell whether two points of a wave are in the same oscillation state?
nucleo:
  magnitudes: [phi, phi0, Delta_phi, k, omega, v_phi]
  formulas: [fase_armonica, diferencia_fase, velocidad_fase_phi]
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
