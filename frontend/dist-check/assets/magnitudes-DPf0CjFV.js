const e=`version: 5
magnitudes:
- id: HT
  symbol: H_T
  nombre:
    es: hamiltoniano total
    en: total Hamiltonian
  unidad_si: J
  descripcion:
    es: hamiltoniano total dentro del modelo avanzado del leaf.
    en: total Hamiltonian inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: HT
  used_in: &id001
  - hamiltoniano_total_dirac
  - matriz_ligaduras_dirac
  - corchete_dirac
  - evolucion_con_ligaduras
  common_mistake: Usar HT sin comprobar dominio, unidades y significado fisico.
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
    - sistemas-con-ligaduras-y-dirac
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: HT debe interpretarse junto con las hipotesis del leaf.
- id: Hc
  symbol: H_c
  nombre:
    es: hamiltoniano canonico
    en: canonical Hamiltonian
  unidad_si: J
  descripcion:
    es: hamiltoniano canonico dentro del modelo avanzado del leaf.
    en: canonical Hamiltonian inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Hc
  used_in: *id001
  common_mistake: Usar Hc sin comprobar dominio, unidades y significado fisico.
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
    - sistemas-con-ligaduras-y-dirac
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Hc debe interpretarse junto con las hipotesis del leaf.
- id: phi_a
  symbol: \\phi_\\alpha
  nombre:
    es: ligadura
    en: constraint
  unidad_si: context-dependent
  descripcion:
    es: ligadura dentro del modelo avanzado del leaf.
    en: constraint inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: phi_a
  used_in: *id001
  common_mistake: Usar phi_a sin comprobar dominio, unidades y significado fisico.
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
    - sistemas-con-ligaduras-y-dirac
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: phi_a debe interpretarse junto con las hipotesis del leaf.
- id: lambda_a
  symbol: \\lambda_\\alpha
  nombre:
    es: multiplicador
    en: multiplier
  unidad_si: context-dependent
  descripcion:
    es: multiplicador dentro del modelo avanzado del leaf.
    en: multiplier inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: lambda_a
  used_in: *id001
  common_mistake: Usar lambda_a sin comprobar dominio, unidades y significado fisico.
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
    - sistemas-con-ligaduras-y-dirac
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: lambda_a debe interpretarse junto con las hipotesis del leaf.
- id: Cab
  symbol: C_{\\alpha\\beta}
  nombre:
    es: matriz de ligaduras
    en: constraint matrix
  unidad_si: context-dependent
  descripcion:
    es: matriz de ligaduras dentro del modelo avanzado del leaf.
    en: constraint matrix inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Cab
  used_in: *id001
  common_mistake: Usar Cab sin comprobar dominio, unidades y significado fisico.
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
    - sistemas-con-ligaduras-y-dirac
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Cab debe interpretarse junto con las hipotesis del leaf.
- id: Fobs
  symbol: F
  nombre:
    es: observable
    en: observable
  unidad_si: context-dependent
  descripcion:
    es: observable dentro del modelo avanzado del leaf.
    en: observable inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Fobs
  used_in: *id001
  common_mistake: Usar Fobs sin comprobar dominio, unidades y significado fisico.
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
    - sistemas-con-ligaduras-y-dirac
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Fobs debe interpretarse junto con las hipotesis del leaf.
- id: DB
  symbol: \\{F,G\\}_D
  nombre:
    es: corchete de Dirac
    en: Dirac bracket
  unidad_si: context-dependent
  descripcion:
    es: corchete de Dirac dentro del modelo avanzado del leaf.
    en: Dirac bracket inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: DB
  used_in: *id001
  common_mistake: Usar DB sin comprobar dominio, unidades y significado fisico.
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
    - sistemas-con-ligaduras-y-dirac
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: DB debe interpretarse junto con las hipotesis del leaf.
`;export{e as default};
