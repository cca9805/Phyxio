const e=`version: 1\r
magnitudes:\r
\r
  - id: W\r
    symbol: 'W'\r
    nombre: { es: "trabajo rotacional", en: "rotational work" }\r
    descripcion: { es: "trabajo rotacional usada para interpretar trabajo y torque.", en: "rotational work used to interpret work and torque." }\r
    unidad_si: "J"\r
    dimension: "M L^2 T^-2"\r
    is_vector: false\r
    components: []\r
    category: "rotational_energy"\r
    physical_role: { es: "transferencia de energía", en: "transferencia de energía" }\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    common_mistake: { es: "Usar W sin comprobar signo, eje o unidades.", en: "Using W without checking sign, axis, or units." }\r
    typical_range: { es: "Depende del sistema y debe contrastarse con el orden de magnitud.", en: "Context dependent and must be checked against order of magnitude." }\r
    sign_behavior:\r
      has_sign: true\r
      meaning: { es: "El signo indica transferencia positiva o negativa según el convenio.", en: "The sign indicates positive or negative transfer according to convention." }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "Cero indica ausencia de esa contribución o caso límite.", en: "Zero indicates absence of that contribution or a limiting case." }\r
    value_nature:\r
      kind: "signed_scalar"\r
      nonnegative_only: false\r
      expected_interval: "(-inf,+inf)"\r
    interpretation_role:\r
      primary_for: ["trabajo-y-torque"]\r
      secondary_for: ["energia-rotacional"]\r
    graph_binding:\r
      channels: ["axis", "slope", "area"]\r
    pedagogical_notes: { es: "Declarar eje y convenio antes de interpretar.", en: "Declare axis and convention before interpreting." }\r
\r
  - id: tau\r
    symbol: 'tau'\r
    nombre: { es: "torque", en: "torque" }\r
    descripcion: { es: "torque usada para interpretar trabajo y torque.", en: "torque used to interpret work and torque." }\r
    unidad_si: "N m"\r
    dimension: "M L^2 T^-2"\r
    is_vector: false\r
    components: []\r
    category: "rotational_energy"\r
    physical_role: { es: "acción rotacional", en: "acción rotacional" }\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    common_mistake: { es: "Usar tau sin comprobar signo, eje o unidades.", en: "Using tau without checking sign, axis, or units." }\r
    typical_range: { es: "Depende del sistema y debe contrastarse con el orden de magnitud.", en: "Context dependent and must be checked against order of magnitude." }\r
    sign_behavior:\r
      has_sign: true\r
      meaning: { es: "El signo indica transferencia positiva o negativa según el convenio.", en: "The sign indicates positive or negative transfer according to convention." }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "Cero indica ausencia de esa contribución o caso límite.", en: "Zero indicates absence of that contribution or a limiting case." }\r
    value_nature:\r
      kind: "signed_scalar"\r
      nonnegative_only: false\r
      expected_interval: "(-inf,+inf)"\r
    interpretation_role:\r
      primary_for: ["trabajo-y-torque"]\r
      secondary_for: ["energia-rotacional"]\r
    graph_binding:\r
      channels: ["axis", "slope", "area"]\r
    pedagogical_notes: { es: "Declarar eje y convenio antes de interpretar.", en: "Declare axis and convention before interpreting." }\r
\r
  - id: theta\r
    symbol: 'theta'\r
    nombre: { es: "desplazamiento angular", en: "angular displacement" }\r
    descripcion: { es: "desplazamiento angular usada para interpretar trabajo y torque.", en: "angular displacement used to interpret work and torque." }\r
    unidad_si: "rad"\r
    dimension: "1"\r
    is_vector: false\r
    components: []\r
    category: "rotational_energy"\r
    physical_role: { es: "variable geométrica", en: "variable geométrica" }\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    common_mistake: { es: "Usar theta sin comprobar signo, eje o unidades.", en: "Using theta without checking sign, axis, or units." }\r
    typical_range: { es: "Depende del sistema y debe contrastarse con el orden de magnitud.", en: "Context dependent and must be checked against order of magnitude." }\r
    sign_behavior:\r
      has_sign: true\r
      meaning: { es: "El signo indica transferencia positiva o negativa según el convenio.", en: "The sign indicates positive or negative transfer according to convention." }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "Cero indica ausencia de esa contribución o caso límite.", en: "Zero indicates absence of that contribution or a limiting case." }\r
    value_nature:\r
      kind: "signed_scalar"\r
      nonnegative_only: false\r
      expected_interval: "(-inf,+inf)"\r
    interpretation_role:\r
      primary_for: ["trabajo-y-torque"]\r
      secondary_for: ["energia-rotacional"]\r
    graph_binding:\r
      channels: ["axis", "slope", "area"]\r
    pedagogical_notes: { es: "Declarar eje y convenio antes de interpretar.", en: "Declare axis and convention before interpreting." }\r
\r
  - id: P\r
    symbol: 'P'\r
    nombre: { es: "potencia angular", en: "angular power" }\r
    descripcion: { es: "potencia angular usada para interpretar trabajo y torque.", en: "angular power used to interpret work and torque." }\r
    unidad_si: "W"\r
    dimension: "M L^2 T^-3"\r
    is_vector: false\r
    components: []\r
    category: "rotational_energy"\r
    physical_role: { es: "ritmo de transferencia", en: "ritmo de transferencia" }\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    common_mistake: { es: "Usar P sin comprobar signo, eje o unidades.", en: "Using P without checking sign, axis, or units." }\r
    typical_range: { es: "Depende del sistema y debe contrastarse con el orden de magnitud.", en: "Context dependent and must be checked against order of magnitude." }\r
    sign_behavior:\r
      has_sign: true\r
      meaning: { es: "El signo indica transferencia positiva o negativa según el convenio.", en: "The sign indicates positive or negative transfer according to convention." }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "Cero indica ausencia de esa contribución o caso límite.", en: "Zero indicates absence of that contribution or a limiting case." }\r
    value_nature:\r
      kind: "signed_scalar"\r
      nonnegative_only: false\r
      expected_interval: "(-inf,+inf)"\r
    interpretation_role:\r
      primary_for: ["trabajo-y-torque"]\r
      secondary_for: ["energia-rotacional"]\r
    graph_binding:\r
      channels: ["axis", "slope", "area"]\r
    pedagogical_notes: { es: "Declarar eje y convenio antes de interpretar.", en: "Declare axis and convention before interpreting." }\r
\r
  - id: omega\r
    symbol: 'omega'\r
    nombre: { es: "velocidad angular", en: "angular speed" }\r
    descripcion: { es: "velocidad angular usada para interpretar trabajo y torque.", en: "angular speed used to interpret work and torque." }\r
    unidad_si: "rad/s"\r
    dimension: "T^-1"\r
    is_vector: false\r
    components: []\r
    category: "rotational_energy"\r
    physical_role: { es: "variable cinemática", en: "variable cinemática" }\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    common_mistake: { es: "Usar omega sin comprobar signo, eje o unidades.", en: "Using omega without checking sign, axis, or units." }\r
    typical_range: { es: "Depende del sistema y debe contrastarse con el orden de magnitud.", en: "Context dependent and must be checked against order of magnitude." }\r
    sign_behavior:\r
      has_sign: true\r
      meaning: { es: "El signo indica transferencia positiva o negativa según el convenio.", en: "The sign indicates positive or negative transfer according to convention." }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "Cero indica ausencia de esa contribución o caso límite.", en: "Zero indicates absence of that contribution or a limiting case." }\r
    value_nature:\r
      kind: "signed_scalar"\r
      nonnegative_only: false\r
      expected_interval: "(-inf,+inf)"\r
    interpretation_role:\r
      primary_for: ["trabajo-y-torque"]\r
      secondary_for: ["energia-rotacional"]\r
    graph_binding:\r
      channels: ["axis", "slope", "area"]\r
    pedagogical_notes: { es: "Declarar eje y convenio antes de interpretar.", en: "Declare axis and convention before interpreting." }\r
`;export{e as default};
