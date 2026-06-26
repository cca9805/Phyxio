const e=`version: 5
magnitudes:
- id: Routh
  symbol: R
  nombre:
    es: routhiano
    en: Routhian
  unidad_si: J
  descripcion:
    es: routhiano dentro del modelo avanzado del leaf.
    en: Routhian inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Routh
  used_in: &id001
  - momento_ciclico
  - definicion_routhiano
  - ecuacion_routh_no_ciclica
  - energia_reducida_routh
  common_mistake: Usar Routh sin comprobar dominio, unidades y significado fisico.
  typical_range: Depende del sistema y de la escala elegida.
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la convencion y del eje o referencia elegidos.
      en: It depends on the convention and chosen axis or reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser un limite fisico, una referencia o una condicion especial.
      en: It may be a physical limit, a reference, or a special condition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - routhiano-y-coordenadas-ciclicas
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Routh debe interpretarse junto con las hipotesis del leaf.
- id: Lagr
  symbol: L
  nombre:
    es: lagrangiano
    en: Lagrangian
  unidad_si: J
  descripcion:
    es: lagrangiano dentro del modelo avanzado del leaf.
    en: Lagrangian inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Lagr
  used_in: *id001
  common_mistake: Usar Lagr sin comprobar dominio, unidades y significado fisico.
  typical_range: Depende del sistema y de la escala elegida.
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la convencion y del eje o referencia elegidos.
      en: It depends on the convention and chosen axis or reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser un limite fisico, una referencia o una condicion especial.
      en: It may be a physical limit, a reference, or a special condition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - routhiano-y-coordenadas-ciclicas
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Lagr debe interpretarse junto con las hipotesis del leaf.
- id: pa
  symbol: p_\\alpha
  nombre:
    es: momento canonico ciclico
    en: cyclic canonical momentum
  unidad_si: context-dependent
  descripcion:
    es: momento canonico ciclico dentro del modelo avanzado del leaf.
    en: cyclic canonical momentum inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: pa
  used_in: *id001
  common_mistake: Usar pa sin comprobar dominio, unidades y significado fisico.
  typical_range: Depende del sistema y de la escala elegida.
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la convencion y del eje o referencia elegidos.
      en: It depends on the convention and chosen axis or reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser un limite fisico, una referencia o una condicion especial.
      en: It may be a physical limit, a reference, or a special condition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - routhiano-y-coordenadas-ciclicas
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: pa debe interpretarse junto con las hipotesis del leaf.
- id: qa
  symbol: q_\\alpha
  nombre:
    es: coordenada ciclica
    en: cyclic coordinate
  unidad_si: context-dependent
  descripcion:
    es: coordenada ciclica dentro del modelo avanzado del leaf.
    en: cyclic coordinate inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: qa
  used_in: *id001
  common_mistake: Usar qa sin comprobar dominio, unidades y significado fisico.
  typical_range: Depende del sistema y de la escala elegida.
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la convencion y del eje o referencia elegidos.
      en: It depends on the convention and chosen axis or reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser un limite fisico, una referencia o una condicion especial.
      en: It may be a physical limit, a reference, or a special condition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - routhiano-y-coordenadas-ciclicas
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: qa debe interpretarse junto con las hipotesis del leaf.
- id: qdot_a
  symbol: \\dot q_\\alpha
  nombre:
    es: velocidad ciclica
    en: cyclic velocity
  unidad_si: context-dependent
  descripcion:
    es: velocidad ciclica dentro del modelo avanzado del leaf.
    en: cyclic velocity inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: qdot_a
  used_in: *id001
  common_mistake: Usar qdot_a sin comprobar dominio, unidades y significado fisico.
  typical_range: Depende del sistema y de la escala elegida.
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la convencion y del eje o referencia elegidos.
      en: It depends on the convention and chosen axis or reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser un limite fisico, una referencia o una condicion especial.
      en: It may be a physical limit, a reference, or a special condition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - routhiano-y-coordenadas-ciclicas
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: qdot_a debe interpretarse junto con las hipotesis del leaf.
- id: qi
  symbol: q_i
  nombre:
    es: coordenada no ciclica
    en: non-cyclic coordinate
  unidad_si: context-dependent
  descripcion:
    es: coordenada no ciclica dentro del modelo avanzado del leaf.
    en: non-cyclic coordinate inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: qi
  used_in: *id001
  common_mistake: Usar qi sin comprobar dominio, unidades y significado fisico.
  typical_range: Depende del sistema y de la escala elegida.
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la convencion y del eje o referencia elegidos.
      en: It depends on the convention and chosen axis or reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser un limite fisico, una referencia o una condicion especial.
      en: It may be a physical limit, a reference, or a special condition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - routhiano-y-coordenadas-ciclicas
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: qi debe interpretarse junto con las hipotesis del leaf.
- id: E
  symbol: E
  nombre:
    es: energia reducida
    en: reduced energy
  unidad_si: J
  descripcion:
    es: energia reducida dentro del modelo avanzado del leaf.
    en: reduced energy inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: E
  used_in: *id001
  common_mistake: Usar E sin comprobar dominio, unidades y significado fisico.
  typical_range: Depende del sistema y de la escala elegida.
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la convencion y del eje o referencia elegidos.
      en: It depends on the convention and chosen axis or reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser un limite fisico, una referencia o una condicion especial.
      en: It may be a physical limit, a reference, or a special condition.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for:
    - routhiano-y-coordenadas-ciclicas
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: E debe interpretarse junto con las hipotesis del leaf.
`;export{e as default};
