const e=`version: 1\r
magnitudes:\r
  - id: Erot\r
    symbol: E_rot\r
    nombre: { es: "energía cinética rotacional", en: "rotational kinetic energy" }\r
    descripcion: { es: "Energía asociada a la rotación macroscópica de un cuerpo rígido respecto a un eje.", en: "Energy associated with macroscopic rigid-body rotation about an axis." }\r
    unidad_si: "J"\r
    dimension: "M L^2 T^-2"\r
    is_vector: false\r
    components: []\r
    category: "energy"\r
    physical_role: { es: "magnitud escalar de estado mecánico", en: "scalar mechanical state quantity" }\r
    used_in: ["teoria", "ejemplos", "aplicaciones", "interpretacion"]\r
    common_mistake: { es: "Tratarla como vector o asignarle signo por el sentido de giro.", en: "Treating it as a vector or assigning a sign from the rotation direction." }\r
    typical_range: { es: "desde fracciones de joule en laboratorio hasta megajoules en volantes industriales", en: "from fractions of a joule in a lab to megajoules in industrial flywheels" }\r
    sign_behavior:\r
      has_sign: false\r
      meaning: { es: "es no negativa si I y omega son reales", en: "it is non-negative when I and omega are real" }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "vale cero si no hay rotación o si la inercia efectiva del modelo es nula", en: "it is zero if there is no rotation or if the effective inertia is zero in the model" }\r
    value_nature:\r
      kind: "scalar_nonnegative"\r
      nonnegative_only: true\r
      expected_interval: "[0, +inf)"\r
    interpretation_role:\r
      primary_for: ["energy_balance", "work_energy"]\r
      secondary_for: ["rolling_motion", "power_transfer"]\r
    graph_binding:\r
      channels: ["vertical_axis", "area_equivalent"]\r
    pedagogical_notes: { es: "Debe leerse como reserva de trabajo mecánico ligada al giro.", en: "It should be read as a reserve of mechanical work tied to rotation." }\r
\r
  - id: I\r
    symbol: I\r
    nombre: { es: "momento de inercia", en: "moment of inertia" }\r
    descripcion: { es: "Medida escalar de la resistencia del cuerpo a cambiar su rotación alrededor del eje elegido.", en: "Scalar measure of resistance to changing rotation about the selected axis." }\r
    unidad_si: "kg m^2"\r
    dimension: "M L^2"\r
    is_vector: false\r
    components: []\r
    category: "inertia"\r
    physical_role: { es: "parámetro geométrico-dinámico del modelo", en: "geometric-dynamic model parameter" }\r
    used_in: ["teoria", "modelos", "ejemplos", "aplicaciones"]\r
    common_mistake: { es: "Usar siempre m R^2 aunque la masa no esté concentrada en el borde.", en: "Always using m R^2 even when the mass is not concentrated at the rim." }\r
    typical_range: { es: "depende fuertemente de la masa, del radio efectivo y del eje", en: "strongly depends on mass, effective radius, and axis" }\r
    sign_behavior:\r
      has_sign: false\r
      meaning: { es: "para un eje principal físico es positivo", en: "for a physical principal axis it is positive" }\r
    zero_behavior:\r
      allowed: false\r
      meaning: { es: "un cuerpo real extendido no tiene inercia nula alrededor de un eje material relevante", en: "a real extended body does not have zero inertia around a relevant material axis" }\r
    value_nature:\r
      kind: "scalar_positive"\r
      nonnegative_only: true\r
      expected_interval: "(0, +inf)"\r
    interpretation_role:\r
      primary_for: ["energy_storage", "axis_selection"]\r
      secondary_for: ["torque_response"]\r
    graph_binding:\r
      channels: ["curve_parameter", "slope_parameter"]\r
    pedagogical_notes: { es: "Cambiar el eje cambia la energía para la misma omega.", en: "Changing the axis changes the energy for the same omega." }\r
\r
  - id: omega\r
    symbol: omega\r
    nombre: { es: "velocidad angular", en: "angular speed" }\r
    descripcion: { es: "Ritmo de cambio angular que fija cuánto giro ocurre por unidad de tiempo.", en: "Rate of angular change that sets how much rotation occurs per unit time." }\r
    unidad_si: "rad/s"\r
    dimension: "T^-1"\r
    is_vector: true\r
    components: ["omega_x", "omega_y", "omega_z"]\r
    category: "kinematics"\r
    physical_role: { es: "variable cinemática dominante", en: "dominant kinematic variable" }\r
    used_in: ["teoria", "ejemplos", "graficos", "interpretacion"]\r
    common_mistake: { es: "Usar rpm directamente sin convertir a radianes por segundo.", en: "Using rpm directly without converting to radians per second." }\r
    typical_range: { es: "desde menos de 1 rad/s en maquinaria lenta hasta miles de rad/s en rotores rápidos", en: "from below 1 rad/s in slow machinery to thousands of rad/s in fast rotors" }\r
    sign_behavior:\r
      has_sign: true\r
      meaning: { es: "el signo indica orientación, pero la energía depende de omega al cuadrado", en: "the sign indicates orientation, but energy depends on omega squared" }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "omega cero implica energía rotacional cero en el modelo rígido", en: "zero omega implies zero rotational energy in the rigid model" }\r
    value_nature:\r
      kind: "signed_scalar_or_vector_component"\r
      nonnegative_only: false\r
      expected_interval: "(-inf, +inf)"\r
    interpretation_role:\r
      primary_for: ["quadratic_growth", "state_comparison"]\r
      secondary_for: ["power"]\r
    graph_binding:\r
      channels: ["horizontal_axis", "quadratic_input"]\r
    pedagogical_notes: { es: "Duplicar omega cuadruplica la energía si I permanece fijo.", en: "Doubling omega quadruples the energy if I remains fixed." }\r
\r
  - id: Wrot\r
    symbol: W_rot\r
    nombre: { es: "trabajo rotacional", en: "rotational work" }\r
    descripcion: { es: "Trabajo realizado por torques externos que cambia la energía rotacional del sistema.", en: "Work done by external torques that changes the rotational energy of the system." }\r
    unidad_si: "J"\r
    dimension: "M L^2 T^-2"\r
    is_vector: false\r
    components: []\r
    category: "work"\r
    physical_role: { es: "intercambio de energía", en: "energy transfer" }\r
    used_in: ["teoria", "ejemplos", "aplicaciones"]\r
    common_mistake: { es: "Sumar trabajos internos que se cancelan dentro del sistema elegido.", en: "Adding internal works that cancel within the chosen system." }\r
    typical_range: { es: "comparable a la variación de energía rotacional medida", en: "comparable to the measured rotational energy change" }\r
    sign_behavior:\r
      has_sign: true\r
      meaning: { es: "positivo si aumenta la energía rotacional y negativo si la reduce", en: "positive if it increases rotational energy and negative if it reduces it" }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "puede ser cero si no hay desplazamiento angular neto o si el trabajo positivo y negativo se compensan", en: "it may be zero if there is no net angular displacement or positive and negative work cancel" }\r
    value_nature:\r
      kind: "signed_scalar"\r
      nonnegative_only: false\r
      expected_interval: "(-inf, +inf)"\r
    interpretation_role:\r
      primary_for: ["work_energy"]\r
      secondary_for: ["loss_analysis"]\r
    graph_binding:\r
      channels: ["area_under_torque_angle"]\r
    pedagogical_notes: { es: "No es una energía almacenada, sino una transferencia.", en: "It is not stored energy but a transfer." }\r
\r
  - id: Eroti\r
    symbol: E_rot,i\r
    nombre: { es: "energía rotacional inicial", en: "initial rotational energy" }\r
    descripcion: { es: "Valor de energía rotacional antes del proceso analizado.", en: "Rotational energy value before the analyzed process." }\r
    unidad_si: "J"\r
    dimension: "M L^2 T^-2"\r
    is_vector: false\r
    components: []\r
    category: "initial_state"\r
    physical_role: { es: "estado inicial", en: "initial state" }\r
    used_in: ["ejemplos", "interpretacion"]\r
    common_mistake: { es: "Tomarla como cero sin justificar el estado inicial.", en: "Taking it as zero without justifying the initial state." }\r
    typical_range: { es: "depende de I y de omega inicial", en: "depends on I and initial omega" }\r
    sign_behavior:\r
      has_sign: false\r
      meaning: { es: "no negativa", en: "non-negative" }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "cero si el cuerpo parte sin giro", en: "zero if the body starts without spin" }\r
    value_nature:\r
      kind: "scalar_nonnegative"\r
      nonnegative_only: true\r
      expected_interval: "[0, +inf)"\r
    interpretation_role:\r
      primary_for: ["state_change"]\r
      secondary_for: ["energy_balance"]\r
    graph_binding:\r
      channels: ["initial_marker"]\r
    pedagogical_notes: { es: "Conviene etiquetarla para no mezclar estado inicial y final.", en: "It should be labeled to avoid mixing initial and final states." }\r
\r
  - id: Erotf\r
    symbol: E_rot,f\r
    nombre: { es: "energía rotacional final", en: "final rotational energy" }\r
    descripcion: { es: "Valor de energía rotacional después del proceso analizado.", en: "Rotational energy value after the analyzed process." }\r
    unidad_si: "J"\r
    dimension: "M L^2 T^-2"\r
    is_vector: false\r
    components: []\r
    category: "final_state"\r
    physical_role: { es: "estado final", en: "final state" }\r
    used_in: ["ejemplos", "interpretacion"]\r
    common_mistake: { es: "Compararla con el trabajo sin restar la energía inicial.", en: "Comparing it with work without subtracting the initial energy." }\r
    typical_range: { es: "depende de I y de omega final", en: "depends on I and final omega" }\r
    sign_behavior:\r
      has_sign: false\r
      meaning: { es: "no negativa", en: "non-negative" }\r
    zero_behavior:\r
      allowed: true\r
      meaning: { es: "cero si el cuerpo termina sin giro", en: "zero if the body ends without spin" }\r
    value_nature:\r
      kind: "scalar_nonnegative"\r
      nonnegative_only: true\r
      expected_interval: "[0, +inf)"\r
    interpretation_role:\r
      primary_for: ["state_change"]\r
      secondary_for: ["energy_balance"]\r
    graph_binding:\r
      channels: ["final_marker"]\r
    pedagogical_notes: { es: "Debe cerrar el balance con trabajo externo y pérdidas explícitas.", en: "It must close the balance with external work and explicit losses." }\r
`;export{e as default};
