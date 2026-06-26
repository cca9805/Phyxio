const e=`version: 1\r
magnitudes:\r
  - id: O\r
    symbol: O\r
    nombre:\r
      es: origen del sistema de referencia\r
      en: origin of the reference system\r
    descripcion:\r
      es: Punto geométrico fijo respecto al observador que sirve como referencia para medir posiciones (coordenada cero).\r
      en: Fixed geometric point relative to the observer that serves as a reference for measuring positions (zero coordinate).\r
    unidad_si: "1"\r
    dimension: "1"\r
    is_vector: false\r
    components: null\r
    category: derived\r
    physical_role: physical_quantity\r
    used_in:\r
      - sistemas-referencia\r
    common_mistake: No confundas el origen[[O]]con el centro de masas u otra magnitud de posición absoluta.\r
    typical_range: Depende del contexto físico del problema.\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: El origen no tiene signo; define el punto cero de la escala.\r
        en: The origin has no sign; it defines the zero point of the scale.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: El valor cero del origen es la referencia para todas las demás posiciones.\r
        en: The zero value of the origin is the reference for all other positions.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: true\r
      expected_interval: Context-dependent\r
    interpretation_role:\r
      primary_for:\r
        - sistemas-referencia\r
      secondary_for: []\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes: Fija el origen[[O]]siempre al principio del problema para evitar confusiones de signos.\r
  - id: frame_sigma\r
    symbol: '\\Sigma'\r
    nombre:\r
      es: marco de referencia\r
      en: reference frame\r
    descripcion:\r
      es: Conjunto de puntos del espacio cuya distancia mutua es constante en el tiempo, asociado a un estado de movimiento.\r
      en: Set of space points whose mutual distance is constant over time, associated with a state of motion.\r
    unidad_si: "1"\r
    dimension: "1"\r
    is_vector: false\r
    components: null\r
    category: derived\r
    physical_role: physical_quantity\r
    used_in:\r
      - sistemas-referencia\r
    common_mistake: No confundas el marco de referencia[[frame_sigma]]con un simple punto de origen.\r
    typical_range: Depende del contexto físico del problema.\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: El marco[[frame_sigma]]no tiene signo; es el escenario de la descripción.\r
        en: The frame[[frame_sigma]]has no sign; it is the description's setting.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Un marco[[frame_sigma]]no toma valores numéricos en sí mismo.\r
        en: A frame[[frame_sigma]]does not take numerical values itself.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: true\r
      expected_interval: Context-dependent\r
    interpretation_role:\r
      primary_for:\r
        - sistemas-referencia\r
      secondary_for: []\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes: El marco[[frame_sigma]]debe declararse antes de definir cualquier vector de posición.\r
  - id: r_vec\r
    symbol: '\\overrightarrow{r}'\r
    nombre:\r
      es: vector de posición\r
      en: position vector\r
    descripcion:\r
      es: Vector que une el origen del sistema de referencia con la posición instantánea de la partícula.\r
      en: Vector connecting the origin of the reference system with the particle's instantaneous position.\r
    unidad_si: m\r
    dimension: L\r
    is_vector: true\r
    components:\r
      - r_vec_x\r
      - r_vec_y\r
    category: derived\r
    physical_role: physical_quantity\r
    used_in:\r
      - sistemas-referencia\r
    common_mistake: No confundir el vector[[r_vec]]con la distancia recorrida o el desplazamiento.\r
    typical_range: Depende del contexto físico del problema.\r
    sign_behavior:\r
      has_sign: true\r
      meaning:\r
        es: El signo de las componentes de[[r_vec]]indica hacia qué lado del origen está el móvil.\r
        en: The sign of[[r_vec]]components indicates which side of the origin the body is on.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: El valor cero significa que el móvil está exactamente sobre el origen[[O]].\r
        en: Zero value means the body is exactly at the origin[[O]].\r
    value_nature:\r
      kind: vector_projection\r
      nonnegative_only: false\r
      expected_interval: Context-dependent\r
    interpretation_role:\r
      primary_for:\r
        - sistemas-referencia\r
      secondary_for: []\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes: Recuerda que[[r_vec]]cambia si cambias de origen[[O]]aunque el objeto no se mueva.\r
  - id: v_frame\r
    symbol: '\\overrightarrow{v}_f'\r
    nombre:\r
      es: velocidad del marco móvil\r
      en: frame velocity\r
    descripcion:\r
      es: Velocidad a la que se desplaza un sistema de referencia respecto a otro considerado "fijo".\r
      en: Velocity at which one reference system moves relative to another considered "fixed."\r
    unidad_si: m/s\r
    dimension: L T^-1\r
    is_vector: true\r
    components:\r
      - v_frame_x\r
      - v_frame_y\r
    category: derived\r
    physical_role: physical_quantity\r
    used_in:\r
      - sistemas-referencia\r
    common_mistake: No confundas la velocidad del marco[[v_frame]]con la velocidad interna del móvil.\r
    typical_range: Depende del contexto físico del problema.\r
    sign_behavior:\r
      has_sign: true\r
      meaning:\r
        es: El signo indica el sentido del desplazamiento del marco móvil respecto al fijo.\r
        en: The sign indicates the moving frame's direction relative to the fixed one.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Si la velocidad[[v_frame]]es cero, ambos marcos están en reposo relativo.\r
        en: If the velocity[[v_frame]]is zero, both frames are at relative rest.\r
    value_nature:\r
      kind: vector_projection\r
      nonnegative_only: false\r
      expected_interval: Context-dependent\r
    interpretation_role:\r
      primary_for:\r
        - sistemas-referencia\r
      secondary_for: []\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes: Usa[[v_frame]]solo para traducir descripciones entre marcos galileanos.\r
  - id: t_global\r
    symbol: t\r
    nombre:\r
      es: tiempo universal clásico\r
      en: classical universal time\r
    descripcion:\r
      es: Parámetro escalar que fluye de forma idéntica para todos los observadores en mecánica clásica.\r
      en: Scalar parameter that flows identically for all observers in classical mechanics.\r
    unidad_si: s\r
    dimension: "1"\r
    is_vector: false\r
    components: null\r
    category: derived\r
    physical_role: physical_quantity\r
    used_in:\r
      - sistemas-referencia\r
    common_mistake: No creas que el tiempo[[t_global]]cambia al cambiar de observador en este modelo.\r
    typical_range: Depende del contexto físico del problema.\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: El tiempo clásico suele tomarse como positivo y creciente.\r
        en: Classical time is usually taken as positive and increasing.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: El tiempo[[t_global]]igual a cero define el instante de inicio de la cronología común.\r
        en: Time[[t_global]]equals zero defines the start of the common chronology.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: true\r
      expected_interval: Context-dependent\r
    interpretation_role:\r
      primary_for:\r
        - sistemas-referencia\r
      secondary_for: []\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes: El[[t_global]]es la única magnitud que no cambia al aplicar una transformación de Galileo.\r
  - id: v\r
    symbol: v\r
    nombre:\r
      es: velocidad en el marco de referencia\r
      en: velocity in the reference frame\r
    descripcion:\r
      es: Velocidad del móvil medida desde el marco de referencia principal.\r
      en: Velocity of the body measured from the main reference frame.\r
    unidad_si: m/s\r
    dimension: L T^-1\r
    is_vector: false\r
    components: null\r
    category: derived\r
    physical_role: physical_quantity\r
    used_in:\r
      - sistemas-referencia\r
    common_mistake: No confundas la velocidad observada[[v]]con la velocidad interna[[v_prime]].\r
    typical_range: Depende del contexto físico del problema.\r
    sign_behavior:\r
      has_sign: true\r
      meaning:\r
        es: El signo indica sentido respecto a la convención elegida en el marco fijo.\r
        en: The sign indicates direction under the fixed frame convention.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: El valor cero significa que el móvil está en reposo respecto al marco fijo.\r
        en: Zero value means the body is at rest relative to the fixed frame.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: false\r
      expected_interval: Context-dependent\r
    interpretation_role:\r
      primary_for:\r
        - sistemas-referencia\r
      secondary_for: []\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes: La velocidad[[v]]es el resultado de sumar la velocidad interna y la del marco móvil.\r
  - id: v_prime\r
    symbol: v'\r
    nombre:\r
      es: velocidad en el marco móvil\r
      en: velocity in the moving frame\r
    descripcion:\r
      es: Velocidad del móvil medida desde el marco que se traslada respecto al principal.\r
      en: Velocity of the body measured from the frame moving relative to the main one.\r
    unidad_si: m/s\r
    dimension: L T^-1\r
    is_vector: false\r
    components: null\r
    category: derived\r
    physical_role: physical_quantity\r
    used_in:\r
      - sistemas-referencia\r
    common_mistake: No confundas la velocidad relativa[[v_prime]]con la velocidad absoluta[[v]].\r
    typical_range: Depende del contexto físico del problema.\r
    sign_behavior:\r
      has_sign: true\r
      meaning:\r
        es: El signo indica sentido respecto a los ejes del marco móvil[[frame_sigma]].\r
        en: The sign indicates direction under the moving frame's axes[[frame_sigma]].\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: El valor cero significa que el móvil está en reposo para el observador móvil.\r
        en: Zero value means the body is at rest for the moving observer.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: false\r
      expected_interval: Context-dependent\r
    interpretation_role:\r
      primary_for:\r
        - sistemas-referencia\r
      secondary_for: []\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes: Usa[[v_prime]]para describir el movimiento como si el marco móvil estuviera en reposo.\r
\r
`;export{e as default};
