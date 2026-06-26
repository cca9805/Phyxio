const e=`version: 5
magnitudes:
- id: B
  symbol: B
  nombre:
    es: propiedad extensiva
    en: extensive property
  unidad_si: context-dependent
  descripcion:
    es: propiedad extensiva dentro del modelo avanzado del leaf.
    en: extensive property inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: B
  used_in: &id001
  - rtt_general
  - balance_masa_control
  - flujo_masico
  - balance_momento_control
  common_mistake: Usar B sin comprobar dominio, unidades y significado fisico.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: B debe interpretarse junto con las hipotesis del leaf.
- id: b
  symbol: b
  nombre:
    es: propiedad especifica
    en: specific property
  unidad_si: context-dependent
  descripcion:
    es: propiedad especifica dentro del modelo avanzado del leaf.
    en: specific property inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: b
  used_in: *id001
  common_mistake: Usar b sin comprobar dominio, unidades y significado fisico.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: b debe interpretarse junto con las hipotesis del leaf.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: rho debe interpretarse junto con las hipotesis del leaf.
- id: V
  symbol: V_{CV}
  nombre:
    es: volumen de control
    en: control volume
  unidad_si: m^3
  descripcion:
    es: volumen de control dentro del modelo avanzado del leaf.
    en: control volume inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: V
  used_in: *id001
  common_mistake: Usar V sin comprobar dominio, unidades y significado fisico.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: V debe interpretarse junto con las hipotesis del leaf.
- id: A
  symbol: A_{CS}
  nombre:
    es: superficie de control
    en: control surface
  unidad_si: m^2
  descripcion:
    es: superficie de control dentro del modelo avanzado del leaf.
    en: control surface inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: A
  used_in: *id001
  common_mistake: Usar A sin comprobar dominio, unidades y significado fisico.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: A debe interpretarse junto con las hipotesis del leaf.
- id: vrel
  symbol: \\vec v_{rel}
  nombre:
    es: velocidad relativa al control
    en: relative velocity to control
  unidad_si: m/s
  descripcion:
    es: velocidad relativa al control dentro del modelo avanzado del leaf.
    en: relative velocity to control inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: vrel
  used_in: *id001
  common_mistake: Usar vrel sin comprobar dominio, unidades y significado fisico.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: vrel debe interpretarse junto con las hipotesis del leaf.
- id: n
  symbol: \\vec n
  nombre:
    es: normal saliente
    en: outward normal
  unidad_si: none
  descripcion:
    es: normal saliente dentro del modelo avanzado del leaf.
    en: outward normal inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: true
  components: []
  category: derived
  physical_role: n
  used_in: *id001
  common_mistake: Usar n sin comprobar dominio, unidades y significado fisico.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: n debe interpretarse junto con las hipotesis del leaf.
- id: mdot
  symbol: \\dot m
  nombre:
    es: caudal masico
    en: mass flow rate
  unidad_si: kg/s
  descripcion:
    es: caudal masico dentro del modelo avanzado del leaf.
    en: mass flow rate inside the advanced model of the leaf.
  dimension: context-dependent
  is_vector: false
  components: []
  category: derived
  physical_role: mdot
  used_in: *id001
  common_mistake: Usar mdot sin comprobar dominio, unidades y significado fisico.
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
    - teorema-de-transporte-de-reynolds
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: mdot debe interpretarse junto con las hipotesis del leaf.
`;export{e as default};
