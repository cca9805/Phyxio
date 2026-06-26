const e=`version: 5
magnitudes:
- id: omega
  symbol: \\vec\\omega
  nombre:
    es: vorticidad
    en: vorticity
  unidad_si: 1/s
  descripcion:
    es: vorticidad dentro del modelo avanzado del leaf.
    en: vorticity inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: omega
  used_in: &id001
  - definicion_vorticidad
  - definicion_circulacion
  - teorema_kelvin
  - kutta_joukowski
  common_mistake: Usar omega sin comprobar dominio, unidades y significado fisico.
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
    - vorticidad-y-circulacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: omega debe interpretarse junto con las hipotesis del leaf.
- id: v
  symbol: \\vec v
  nombre:
    es: velocidad del fluido
    en: fluid velocity
  unidad_si: m/s
  descripcion:
    es: velocidad del fluido dentro del modelo avanzado del leaf.
    en: fluid velocity inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: v
  used_in: *id001
  common_mistake: Usar v sin comprobar dominio, unidades y significado fisico.
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
    - vorticidad-y-circulacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: v debe interpretarse junto con las hipotesis del leaf.
- id: Gamma
  symbol: \\Gamma
  nombre:
    es: circulacion
    en: circulation
  unidad_si: m^2/s
  descripcion:
    es: circulacion dentro del modelo avanzado del leaf.
    en: circulation inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Gamma
  used_in: *id001
  common_mistake: Usar Gamma sin comprobar dominio, unidades y significado fisico.
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
    - vorticidad-y-circulacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Gamma debe interpretarse junto con las hipotesis del leaf.
- id: C
  symbol: C
  nombre:
    es: contorno material
    en: material contour
  unidad_si: none
  descripcion:
    es: contorno material dentro del modelo avanzado del leaf.
    en: material contour inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: C
  used_in: *id001
  common_mistake: Usar C sin comprobar dominio, unidades y significado fisico.
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
    - vorticidad-y-circulacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: C debe interpretarse junto con las hipotesis del leaf.
- id: rho
  symbol: \\rho
  nombre:
    es: densidad
    en: density
  unidad_si: kg/m^3
  descripcion:
    es: densidad dentro del modelo avanzado del leaf.
    en: density inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: rho
  used_in: *id001
  common_mistake: Usar rho sin comprobar dominio, unidades y significado fisico.
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
    - vorticidad-y-circulacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: rho debe interpretarse junto con las hipotesis del leaf.
- id: Vinf
  symbol: V_\\infty
  nombre:
    es: velocidad libre
    en: free-stream speed
  unidad_si: m/s
  descripcion:
    es: velocidad libre dentro del modelo avanzado del leaf.
    en: free-stream speed inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Vinf
  used_in: *id001
  common_mistake: Usar Vinf sin comprobar dominio, unidades y significado fisico.
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
    - vorticidad-y-circulacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Vinf debe interpretarse junto con las hipotesis del leaf.
- id: Lprime
  symbol: L^\\prime
  nombre:
    es: sustentacion por unidad de longitud
    en: lift per unit length
  unidad_si: N/m
  descripcion:
    es: sustentacion por unidad de longitud dentro del modelo avanzado del leaf.
    en: lift per unit length inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: Lprime
  used_in: *id001
  common_mistake: Usar Lprime sin comprobar dominio, unidades y significado fisico.
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
    - vorticidad-y-circulacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Lprime debe interpretarse junto con las hipotesis del leaf.
`;export{e as default};
