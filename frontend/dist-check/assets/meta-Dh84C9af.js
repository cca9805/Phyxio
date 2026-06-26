const e=`id: procesos-reversibles

nombre:
  es: Procesos reversibles
  en: Reversible Processes

area: fisica-clasica
bloque: termodinamica
subbloque: entropia-y-segunda-ley
parent_id: entropia-y-segunda-ley
ruta_relativa: fisica-clasica/termodinamica/entropia-y-segunda-ley/procesos-reversibles
orden: 255300
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

icon: 🧪

descripcion: "Procesos termodinámicos reversibles: condiciones de reversibilidad, entropía del universo nula, eficiencia máxima de Carnot y límite ideal de operación."
description_en: "Reversible thermodynamic processes: reversibility conditions, zero universe entropy change, maximum Carnot efficiency and ideal operating limit."

tags:
  es:
    - proceso reversible
    - entropía del universo
    - ciclo de Carnot
    - eficiencia máxima
    - segunda ley
    - límite ideal
  en:
    - reversible process
    - universe entropy
    - Carnot cycle
    - maximum efficiency
    - second law
    - ideal limit

prerequisitos:
  - fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/definicion
  - fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/variacion-de-entropia

graficos:
  - Coord

physical_role:
  es: ley física
  en: physical law

dificultad: 3
tiempo_estimado_min: 35

pregunta_fisica_central:
  es: "¿Bajo qué condiciones un proceso termodinámico no genera entropía en el universo y qué consecuencias tiene esto para la eficiencia máxima alcanzable?"
  en: "Under what conditions does a thermodynamic process not generate entropy in the universe and what consequences does this have for the maximum achievable efficiency?"

representacion_dominante: Coord
magnitud_dominante: DeltaS_univ

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
    max_inline_messages: 3
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: true
`;export{e as default};
