const n=`id: formulacion-de-kelvin-planck
nombre:
  es: Formulacion de kelvin planck
  en: Kelvin-Planck Statement
area: fisica-clasica
bloque: termodinamica
subbloque: entropia-y-segunda-ley
parent_id: segunda-ley-de-la-termodinamica
ruta_relativa: fisica-clasica/termodinamica/entropia-y-segunda-ley/segunda-ley-de-la-termodinamica/formulacion-de-kelvin-planck
orden: 255110
type: leaf
niveles:
  es:
    - ESO
    - BACHILLERATO
    - UNIVERSIDAD
  en:
    - Secondary
    - Upper Secondary
    - University
icon: 📘
descripcion: Enunciado de Kelvin-Planck sobre limites de maquinas termicas ciclicas.
description_en: Kelvin-Planck statement on limits of cyclic heat engines.
tags:
  es:
    - termodinamica
    - segunda ley
    - kelvin-planck
    - maquinas termicas
    - eficiencia
  en:
    - thermodynamics
    - second law
    - kelvin-planck
    - heat engines
    - efficiency
prerequisitos:
  - fisica-clasica/termodinamica/principios-basicos/calor-y-trabajo
  - fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos
graficos:
  - Coord
physical_role:
  es: ley física
  en: physical law
dificultad: 3
tiempo_estimado_min: 25
pregunta_fisica_central:
  es: Por que una maquina termica ciclica no puede convertir todo el calor de un unico foco en trabajo util?
  en: Why can a cyclic heat engine not convert all heat from one reservoir into useful work?
representacion_dominante: Coord
magnitud_dominante: eta
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: true
    inline_graph: true
    dedicated_tab: true
    tab_label:
      es: Interpretacion fisica
      en: Physical interpretation
  mini_graph:
    enabled: true
    preferred_type: Coord
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
