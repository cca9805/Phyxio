const e=`version: 5
magnitudes:
- id: a_abs
  symbol: \\vec a
  nombre:
    es: aceleracion absoluta
    en: absolute acceleration
  unidad_si: m/s^2
  descripcion:
    es: aceleracion absoluta dentro del modelo avanzado del leaf.
    en: absolute acceleration inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: a_abs
  used_in: &id001
  - aceleracion_rotante_general
  - fuerza_coriolis_vectorial
  - fuerza_centrifuga_vectorial
  - fuerza_euler
  common_mistake: Usar a_abs sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: a_abs debe interpretarse junto con las hipotesis del leaf.
- id: a_rel
  symbol: \\vec a_{rel}
  nombre:
    es: aceleracion relativa
    en: relative acceleration
  unidad_si: m/s^2
  descripcion:
    es: aceleracion relativa dentro del modelo avanzado del leaf.
    en: relative acceleration inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: a_rel
  used_in: *id001
  common_mistake: Usar a_rel sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: a_rel debe interpretarse junto con las hipotesis del leaf.
- id: a_O
  symbol: \\vec a_O
  nombre:
    es: aceleracion del origen
    en: origin acceleration
  unidad_si: m/s^2
  descripcion:
    es: aceleracion del origen dentro del modelo avanzado del leaf.
    en: origin acceleration inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: a_O
  used_in: *id001
  common_mistake: Usar a_O sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: a_O debe interpretarse junto con las hipotesis del leaf.
- id: Omega
  symbol: \\vec\\Omega
  nombre:
    es: velocidad angular del marco
    en: frame angular velocity
  unidad_si: rad/s
  descripcion:
    es: velocidad angular del marco dentro del modelo avanzado del leaf.
    en: frame angular velocity inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: Omega
  used_in: *id001
  common_mistake: Usar Omega sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Omega debe interpretarse junto con las hipotesis del leaf.
- id: alpha
  symbol: \\dot{\\vec\\Omega}
  nombre:
    es: aceleracion angular del marco
    en: frame angular acceleration
  unidad_si: rad/s^2
  descripcion:
    es: aceleracion angular del marco dentro del modelo avanzado del leaf.
    en: frame angular acceleration inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: alpha
  used_in: *id001
  common_mistake: Usar alpha sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: alpha debe interpretarse junto con las hipotesis del leaf.
- id: r
  symbol: \\vec r
  nombre:
    es: posicion relativa
    en: relative position
  unidad_si: m
  descripcion:
    es: posicion relativa dentro del modelo avanzado del leaf.
    en: relative position inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: r
  used_in: *id001
  common_mistake: Usar r sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: r debe interpretarse junto con las hipotesis del leaf.
- id: v_rel
  symbol: \\vec v_{rel}
  nombre:
    es: velocidad relativa
    en: relative velocity
  unidad_si: m/s
  descripcion:
    es: velocidad relativa dentro del modelo avanzado del leaf.
    en: relative velocity inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: v_rel
  used_in: *id001
  common_mistake: Usar v_rel sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: v_rel debe interpretarse junto con las hipotesis del leaf.
- id: F_E
  symbol: \\vec F_E
  nombre:
    es: fuerza de Euler
    en: Euler force
  unidad_si: N
  descripcion:
    es: fuerza de Euler dentro del modelo avanzado del leaf.
    en: Euler force inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: F_E
  used_in: *id001
  common_mistake: Usar F_E sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: F_E debe interpretarse junto con las hipotesis del leaf.
- id: m
  symbol: m
  nombre:
    es: masa
    en: mass
  unidad_si: kg
  descripcion:
    es: masa dentro del modelo avanzado del leaf.
    en: mass inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: m
  used_in: *id001
  common_mistake: Usar m sin comprobar dominio, unidades y significado fisico.
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
    - marco-rotante-general
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: m debe interpretarse junto con las hipotesis del leaf.
`;export{e as default};
