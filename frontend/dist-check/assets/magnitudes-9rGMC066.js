const e=`version: 1\r
magnitudes:\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: momento lineal total\r
    en: total linear momentum\r
  descripcion:\r
    es: Momento lineal total asociado a este subtema.\r
    en: Total linear momentum associated with this topic.\r
  unidad_si: kg*m/s\r
  dimension: '1'\r
  is_vector: true\r
  components:\r
  - P_x\r
  - P_y\r
  category: derived\r
  physical_role: gravitational_force\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir P con otra magnitud cercana dentro de balance de momento con flujo de masa.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar P con una definicion estable antes de sustituir valores.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa del sistema o cuerpo considerado.\r
    en: Mass of the considered body or system.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir m con otra magnitud cercana dentro de balance de momento con flujo de masa.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar m con una definicion estable antes de sustituir valores.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad\r
    en: velocity\r
  descripcion:\r
    es: Velocidad del sistema de masa variable proyectada sobre el eje de análisis.\r
    en: Velocity of the variable-mass system projected onto the analysis axis.\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir v con u; v es la velocidad del sistema respecto a un referencial inercial, u es la velocidad relativa del flujo respecto al sistema.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección respecto al eje positivo elegido.\r
      en: The sign indicates the direction relative to the chosen positive axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar v con una definicion estable antes de sustituir valores.\r
- id: Fext\r
  symbol: F_{ext}\r
  nombre:\r
    es: fuerza externa neta\r
    en: net external force\r
  descripcion:\r
    es: Suma vectorial de todas las fuerzas externas que actúan sobre el sistema abierto (excluye el empuje por flujo de masa, que ya está capturado en el término u·ṁ).\r
    en: Vector sum of all external forces acting on the open system (excludes thrust from mass flow, which is already captured in the u·ṁ term).\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Incluir el empuje por flujo de masa dentro de Fext; ese término se contabiliza por separado como u·mdot en la ecuación de balance.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica la dirección respecto al eje positivo elegido; puede ser negativo si la fuerza se opone al movimiento.\r
      en: The sign indicates the direction relative to the chosen positive axis; can be negative if the force opposes motion.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Fext con una definicion estable antes de sustituir valores.\r
- id: u\r
  symbol: u\r
  nombre:\r
    es: velocidad relativa del flujo\r
    en: relative flow velocity\r
  descripcion:\r
    es: Velocidad de la masa que cruza la frontera del sistema, medida relativa al sistema. Para un cohete que expulsa gases hacia atrás, u es negativa (si el eje positivo apunta en la dirección de movimiento). Su magnitud coincide con ve de la ecuación de Tsiolkovsky (ve = |u|).\r
    en: Velocity of the mass crossing the system boundary, measured relative to the system. For a rocket ejecting gases rearward, u is negative (if the positive axis points in the direction of motion). Its magnitude equals the exhaust velocity ve from the Tsiolkovsky equation (ve = |u|).\r
  unidad_si: m/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir u (velocidad relativa vectorial del flujo) con ve (magnitud escalar positiva). Para un cohete, u < 0 y ve = |u| > 0.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Negativa si la masa sale en dirección opuesta al eje positivo (caso cohete típico); positiva si la masa entra en la dirección positiva.\r
      en: Negative if mass exits opposite to the positive axis (typical rocket case); positive if mass enters in the positive direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar u con una definicion estable antes de sustituir valores.\r
- id: mdot\r
  symbol: \\dot m\r
  nombre:\r
    es: caudal masico\r
    en: mass-flow rate\r
  descripcion:\r
    es: Tasa de flujo de masa.\r
    en: Mass-flow rate.\r
  unidad_si: kg/s\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir mdot con otra magnitud cercana dentro de balance de momento con flujo de masa.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El signo depende de la convencion elegida cuando procede.\r
      en: The sign depends on the chosen convention when applicable.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero debe interpretarse segun el modelo y el contexto.\r
      en: Zero must be interpreted according to the model and context.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar mdot con una definicion estable antes de sustituir valores.\r
- id: dPdt\r
  symbol: dP/dt\r
  nombre:\r
    es: derivada temporal del momento\r
    en: time derivative of momentum\r
  descripcion:\r
    es: Tasa de cambio del momento lineal del sistema; equivale a la suma de fuerzas externas más el transporte de momento por flujo de masa.\r
    en: Rate of change of the system's linear momentum; equals the sum of external forces plus the momentum transport by mass flow.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir dPdt con m*dvdt; en sistemas de masa variable dPdt ≠ m*dvdt porque dm/dt ≠ 0.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo si el momento del sistema aumenta; negativo si disminuye.\r
      en: Positive if the system momentum increases; negative if it decreases.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: En régimen estacionario el momento del sistema no cambia en el instante considerado.\r
      en: In the steady regime the system momentum does not change at the considered instant.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar dPdt con una definicion estable antes de sustituir valores.\r
- id: dvdt\r
  symbol: dv/dt\r
  nombre:\r
    es: aceleración del sistema\r
    en: system acceleration\r
  descripcion:\r
    es: Derivada temporal de la velocidad del sistema de masa variable.\r
    en: Time derivative of the velocity of the variable-mass system.\r
  unidad_si: m/s^2\r
  dimension: LT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir dvdt con dPdt; dvdt ≠ dPdt/m cuando la masa varía con el tiempo.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positiva si el sistema acelera en la dirección positiva elegida.\r
      en: Positive if the system accelerates in the chosen positive direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Velocidad constante (no necesariamente en reposo).\r
      en: Constant velocity (not necessarily at rest).\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: dvdt es la aceleración instantánea; distinta de dPdt/m cuando m varía.\r
- id: Ft\r
  symbol: F_t\r
  nombre:\r
    es: fuerza de empuje\r
    en: thrust force\r
  descripcion:\r
    es: Fuerza reactiva debida a la eyección o acumulación de masa.\r
    en: Reactive force due to mass ejection or accumulation.\r
  unidad_si: N\r
  dimension: LMT^{-2}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir Ft con Fext; el empuje es la fuerza interna por flujo de masa, no la fuerza externa.\r
  typical_range: Depende del contexto fisico del problema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende de la dirección del flujo relativo respecto al sistema.\r
      en: Sign depends on the direction of relative flow with respect to the system.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Sin flujo de masa, el empuje es nulo.\r
      en: Without mass flow, thrust is zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Usar Ft con una definicion estable antes de sustituir valores.\r
- id: ve\r
  symbol: v_e\r
  nombre:\r
    es: velocidad de exhaust efectiva\r
    en: effective exhaust velocity\r
  descripcion:\r
    es: Velocidad de los gases expulsados relativa al cohete, tomada como magnitud positiva en la ecuación de Tsiolkovsky.\r
    en: Speed of ejected gases relative to the rocket, taken as a positive magnitude in the Tsiolkovsky equation.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir ve (magnitud positiva) con u (velocidad relativa vectorial, negativa para un cohete).\r
  typical_range: 1000–5000 m/s para propulsión química; hasta 80 000 m/s para propulsión iónica.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva; la dirección está implícita en la formulación de Tsiolkovsky.\r
      en: Always positive; direction is implicit in the Tsiolkovsky formulation.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una velocidad de exhaust nula no tiene sentido físico.\r
      en: A zero exhaust velocity has no physical meaning.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: 1000–80000 m/s\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Para cohetes químicos típicos, ve ≈ 2500–4500 m/s (Isp ≈ 250–460 s).\r
- id: m0\r
  symbol: m_0\r
  nombre:\r
    es: masa inicial\r
    en: initial mass\r
  descripcion:\r
    es: Masa total del cohete al inicio de la maniobra (incluye combustible).\r
    en: Total rocket mass at the start of the maneuver (includes fuel).\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Incluir solo la masa estructural y olvidar la masa de combustible.\r
  typical_range: Depende del tamaño del cohete.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva.\r
      en: Always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa inicial nula no tiene sentido físico.\r
      en: A zero initial mass has no physical meaning.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: m0 = masa estructural + masa de combustible. La razón m0/mf es la razón de masas del cohete.\r
- id: mf\r
  symbol: m_f\r
  nombre:\r
    es: masa final\r
    en: final mass\r
  descripcion:\r
    es: Masa del cohete al finalizar la maniobra (sin el combustible consumido).\r
    en: Rocket mass at the end of the maneuver (without the consumed fuel).\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir mf con la masa de combustible; mf es la masa total remanente.\r
  typical_range: Depende del tamaño del cohete.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva.\r
      en: Always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Una masa final nula no tiene sentido físico.\r
      en: A zero final mass has no physical meaning.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: Context-dependent\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: mf = m0 - masa de combustible quemado. Siempre mf < m0 para un cohete activo.\r
- id: Delta_v\r
  symbol: \\Delta v\r
  nombre:\r
    es: incremento de velocidad (delta-v)\r
    en: velocity increment (delta-v)\r
  descripcion:\r
    es: Ganancia total de velocidad del cohete al consumir combustible desde m0 hasta mf, en ausencia de fuerzas externas.\r
    en: Total velocity gain of the rocket when consuming fuel from m0 to mf, in the absence of external forces.\r
  unidad_si: m/s\r
  dimension: LT^{-1}\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - balance-de-momento-con-flujo-de-masa\r
  common_mistake: Confundir delta-v con la velocidad final; delta-v es el cambio de velocidad relativo al estado inicial.\r
  typical_range: 100–12 000 m/s para maniobras orbitales.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: En la ecuación de Tsiolkovsky, Delta_v es la magnitud del cambio de velocidad.\r
      en: In the Tsiolkovsky equation, Delta_v is the magnitude of the velocity change.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Sin combustión, no hay cambio de velocidad.\r
      en: Without combustion, there is no velocity change.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: 0–12000 m/s\r
  interpretation_role:\r
    primary_for:\r
    - balance-de-momento-con-flujo-de-masa\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: El delta-v es la métrica fundamental en ingeniería astronáutica para caracterizar maniobras.\r
`;export{e as default};
