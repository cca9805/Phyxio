const e=`version: 5
magnitudes:
- id: tau1
  symbol: \\tau_1
  nombre:
    es: torque eje 1
    en: axis 1 torque
  unidad_si: N*m
  descripcion:
    es: torque eje 1 dentro del modelo avanzado del leaf.
    en: axis 1 torque inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: tau1
  used_in: &id001
  - momento_angular_tensorial
  - euler_eje_1
  - euler_eje_2
  - euler_eje_3
  common_mistake: Usar tau1 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: tau1 debe interpretarse junto con las hipotesis del leaf.
- id: tau2
  symbol: \\tau_2
  nombre:
    es: torque eje 2
    en: axis 2 torque
  unidad_si: N*m
  descripcion:
    es: torque eje 2 dentro del modelo avanzado del leaf.
    en: axis 2 torque inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: tau2
  used_in: *id001
  common_mistake: Usar tau2 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: tau2 debe interpretarse junto con las hipotesis del leaf.
- id: tau3
  symbol: \\tau_3
  nombre:
    es: torque eje 3
    en: axis 3 torque
  unidad_si: N*m
  descripcion:
    es: torque eje 3 dentro del modelo avanzado del leaf.
    en: axis 3 torque inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: tau3
  used_in: *id001
  common_mistake: Usar tau3 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: tau3 debe interpretarse junto con las hipotesis del leaf.
- id: I1
  symbol: I_1
  nombre:
    es: momento principal 1
    en: principal moment 1
  unidad_si: kg*m^2
  descripcion:
    es: momento principal 1 dentro del modelo avanzado del leaf.
    en: principal moment 1 inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: I1
  used_in: *id001
  common_mistake: Usar I1 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: I1 debe interpretarse junto con las hipotesis del leaf.
- id: I2
  symbol: I_2
  nombre:
    es: momento principal 2
    en: principal moment 2
  unidad_si: kg*m^2
  descripcion:
    es: momento principal 2 dentro del modelo avanzado del leaf.
    en: principal moment 2 inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: I2
  used_in: *id001
  common_mistake: Usar I2 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: I2 debe interpretarse junto con las hipotesis del leaf.
- id: I3
  symbol: I_3
  nombre:
    es: momento principal 3
    en: principal moment 3
  unidad_si: kg*m^2
  descripcion:
    es: momento principal 3 dentro del modelo avanzado del leaf.
    en: principal moment 3 inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: I3
  used_in: *id001
  common_mistake: Usar I3 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: I3 debe interpretarse junto con las hipotesis del leaf.
- id: omega1
  symbol: \\omega_1
  nombre:
    es: velocidad angular eje 1
    en: angular velocity axis 1
  unidad_si: rad/s
  descripcion:
    es: velocidad angular eje 1 dentro del modelo avanzado del leaf.
    en: angular velocity axis 1 inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: omega1
  used_in: *id001
  common_mistake: Usar omega1 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: omega1 debe interpretarse junto con las hipotesis del leaf.
- id: omega2
  symbol: \\omega_2
  nombre:
    es: velocidad angular eje 2
    en: angular velocity axis 2
  unidad_si: rad/s
  descripcion:
    es: velocidad angular eje 2 dentro del modelo avanzado del leaf.
    en: angular velocity axis 2 inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: omega2
  used_in: *id001
  common_mistake: Usar omega2 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: omega2 debe interpretarse junto con las hipotesis del leaf.
- id: omega3
  symbol: \\omega_3
  nombre:
    es: velocidad angular eje 3
    en: angular velocity axis 3
  unidad_si: rad/s
  descripcion:
    es: velocidad angular eje 3 dentro del modelo avanzado del leaf.
    en: angular velocity axis 3 inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: omega3
  used_in: *id001
  common_mistake: Usar omega3 sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: omega3 debe interpretarse junto con las hipotesis del leaf.
- id: L
  symbol: \\vec L
  nombre:
    es: momento angular
    en: angular momentum
  unidad_si: kg*m^2/s
  descripcion:
    es: momento angular dentro del modelo avanzado del leaf.
    en: angular momentum inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: L
  used_in: *id001
  common_mistake: Usar L sin comprobar dominio, unidades y significado fisico.
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
    - ecuaciones-de-euler
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: L debe interpretarse junto con las hipotesis del leaf.
`;export{e as default};
