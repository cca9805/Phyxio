const n=`version: 1\r
magnitudes:\r
- id: J\r
  symbol: J\r
  nombre:\r
    es: impulso\r
    en: impulse\r
  descripcion:\r
    es: Cambio de cantidad de movimiento producido por una fuerza neta durante un\r
      intervalo de tiempo.\r
    en: Change in momentum produced by a net force over a time interval.\r
  unidad_si: N·s\r
  dimension: M L T^-1\r
  is_vector: true\r
  components:\r
  - Jx\r
  - Jy\r
  category: derived\r
  physical_role: efecto acumulado de una fuerza\r
  used_in:\r
  - impulso_integral\r
  - impulso_area_curva\r
  - impulso_fuerza_media\r
  - impulso_fuerza_constante\r
  - teorema_impulso_momento\r
  - impulso_masa_cambio_velocidad\r
  - impulso_momento_masa_velocidad\r
  - fuerza_media_cambio_momento\r
  - velocidad_final_impulso\r
  - impulso_fuerza_triangular\r
  common_mistake: Confundir impulso con fuerza instantánea o tratarlo como siempre\r
    positivo.\r
  typical_range: Desde 10^-2 N·s en impactos pequeños hasta 10^5 N·s o más en choques\r
    macroscópicos.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica el sentido del cambio de momento respecto al eje elegido.\r
      en: The sign indicates the direction of momentum change relative to the chosen\r
        axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Impulso nulo significa que no hay cambio neto de cantidad de movimiento\r
        en el eje analizado.\r
      en: Zero impulse means no net momentum change along the analyzed axis.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - impulso\r
    - cambio_momento\r
    secondary_for:\r
    - fuerza_media\r
    - velocidad_final\r
  graph_binding:\r
    channels:\r
    - area_force_time\r
    - impulse_arrow\r
  pedagogical_notes: El impulso debe interpretarse como área bajo F(t) o como cambio\r
    de momento, no como fuerza.\r
- id: F\r
  symbol: F\r
  nombre:\r
    es: fuerza neta\r
    en: net force\r
  descripcion:\r
    es: Fuerza resultante aplicada al sistema durante la interacción.\r
    en: Resultant force applied to the system during the interaction.\r
  unidad_si: N\r
  dimension: M L T^-2\r
  is_vector: true\r
  components:\r
  - Fx\r
  - Fy\r
  category: derived\r
  physical_role: causa dinámica\r
  used_in:\r
  - impulso_integral\r
  - impulso_area_curva\r
  - impulso_fuerza_constante\r
  common_mistake: Usar fuerza máxima o fuerza instantánea como si siempre fuera fuerza\r
    media.\r
  typical_range: Desde menos de 1 N hasta 10^5 N en impactos intensos.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica el sentido de la fuerza respecto al eje elegido.\r
      en: The sign indicates the direction of force relative to the chosen axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Fuerza neta nula implica que no se acumula impulso en ese instante o intervalo.\r
      en: Zero net force means no impulse accumulates at that instant or interval.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - impulso_integral\r
    - impulso_fuerza_constante\r
    secondary_for:\r
    - area_bajo_curva\r
  graph_binding:\r
    channels:\r
    - force_time_curve\r
  pedagogical_notes: En impulso importa la fuerza neta durante el intervalo, no solo\r
    su valor máximo.\r
- id: dt\r
  symbol: \\Delta t\r
  nombre:\r
    es: intervalo de tiempo\r
    en: time interval\r
  descripcion:\r
    es: Duración del contacto o de la interacción durante la que se acumula impulso.\r
    en: Duration of the contact or interaction over which impulse accumulates.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: duración de interacción\r
  used_in:\r
  - impulso_integral\r
  - impulso_fuerza_media\r
  - fuerza_media_cambio_momento\r
  - impulso_fuerza_constante\r
  - impulso_fuerza_triangular\r
  common_mistake: Creer que aumentar el tiempo cambia necesariamente el impulso cuando\r
    el cambio de momento está fijado.\r
  typical_range: Desde 10^-4 s en impactos muy breves hasta varios segundos en frenadas\r
    suaves.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Un intervalo de tiempo físico se toma positivo.\r
      en: A physical time interval is taken as positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: dt igual a cero haría indefinida la fuerza media.\r
      en: dt equal to zero would make average force undefined.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, inf)\r
  interpretation_role:\r
    primary_for:\r
    - fuerza_media\r
    - tiempo_contacto\r
    secondary_for:\r
    - impulso\r
  graph_binding:\r
    channels:\r
    - time_width\r
  pedagogical_notes: Para el mismo cambio de momento, aumentar dt reduce la fuerza\r
    media.\r
- id: Fmed\r
  symbol: F_{med}\r
  nombre:\r
    es: fuerza media\r
    en: average force\r
  descripcion:\r
    es: Fuerza constante equivalente que produciría el mismo impulso durante el mismo\r
      intervalo.\r
    en: Equivalent constant force that would produce the same impulse over the same\r
      interval.\r
  unidad_si: N\r
  dimension: M L T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: fuerza equivalente\r
  used_in:\r
  - impulso_fuerza_media\r
  - fuerza_media_cambio_momento\r
  common_mistake: Confundir fuerza media con fuerza máxima durante el impacto.\r
  typical_range: Desde pocos newtons en interacciones suaves hasta 10^5 N o más en\r
    choques.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica el sentido de la fuerza media respecto al eje elegido.\r
      en: The sign indicates the direction of average force relative to the chosen\r
        axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Fuerza media nula implica impulso neto nulo en el intervalo.\r
      en: Zero average force implies zero net impulse over the interval.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - fuerza_media\r
    - impacto\r
    secondary_for:\r
    - impulso\r
  graph_binding:\r
    channels:\r
    - average_force_level\r
  pedagogical_notes: Fmed resume toda la curva F(t); no describe necesariamente la\r
    fuerza real en cada instante.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa del cuerpo o sistema cuya cantidad de movimiento cambia.\r
    en: Mass of the body or system whose momentum changes.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: inercia del sistema\r
  used_in:\r
  - impulso_masa_cambio_velocidad\r
  - impulso_momento_masa_velocidad\r
  - velocidad_final_impulso\r
  - cambio_momento_componentes\r
  common_mistake: Usar esta relación cuando la masa cambia durante la interacción.\r
  typical_range: Depende del sistema; desde gramos hasta toneladas en problemas clásicos.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa clásica es positiva.\r
      en: Classical mass is positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Masa nula no permite aplicar las fórmulas clásicas de impulso con m.\r
      en: Zero mass does not allow classical impulse formulas involving m.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, inf)\r
  interpretation_role:\r
    primary_for:\r
    - cambio_velocidad\r
    secondary_for:\r
    - momento\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes: Las fórmulas con m presuponen masa constante.\r
- id: p_inicial\r
  symbol: p_i\r
  nombre:\r
    es: momento inicial\r
    en: initial momentum\r
  descripcion:\r
    es: Cantidad de movimiento del sistema antes de la interacción.\r
    en: Momentum of the system before the interaction.\r
  unidad_si: kg·m/s\r
  dimension: M L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: estado inicial\r
  used_in:\r
  - teorema_impulso_momento\r
  - cambio_momento\r
  common_mistake: Olvidar el signo de la velocidad inicial al calcular el momento.\r
  typical_range: Depende de la masa y velocidad del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica dirección del momento inicial respecto al eje elegido.\r
      en: The sign indicates the direction of initial momentum relative to the chosen\r
        axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Momento inicial nulo indica reposo inicial o cancelación en el eje considerado.\r
      en: Zero initial momentum indicates initial rest or cancellation along the considered\r
        axis.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - estado_inicial\r
    secondary_for:\r
    - cambio_momento\r
  graph_binding:\r
    channels:\r
    - initial_state\r
  pedagogical_notes: p_inicial y p_final deben referirse al mismo sistema y al mismo\r
    eje.\r
- id: p_final\r
  symbol: p_f\r
  nombre:\r
    es: momento final\r
    en: final momentum\r
  descripcion:\r
    es: Cantidad de movimiento del sistema después de la interacción.\r
    en: Momentum of the system after the interaction.\r
  unidad_si: kg·m/s\r
  dimension: M L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: estado final\r
  used_in:\r
  - teorema_impulso_momento\r
  - cambio_momento\r
  common_mistake: Restar en orden incorrecto y cambiar el signo de DeltaP.\r
  typical_range: Depende de la masa y velocidad final del sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica dirección del momento final respecto al eje elegido.\r
      en: The sign indicates the direction of final momentum relative to the chosen\r
        axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Momento final nulo indica reposo final o cancelación en el eje considerado.\r
      en: Zero final momentum indicates final rest or cancellation along the considered\r
        axis.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - estado_final\r
    secondary_for:\r
    - cambio_momento\r
  graph_binding:\r
    channels:\r
    - final_state\r
  pedagogical_notes: El momento final debe calcularse con el mismo convenio de signos\r
    que el inicial.\r
- id: DeltaP\r
  symbol: \\Delta p\r
  nombre:\r
    es: cambio de momento\r
    en: momentum change\r
  descripcion:\r
    es: Diferencia entre el momento final y el momento inicial del sistema.\r
    en: Difference between final and initial momentum of the system.\r
  unidad_si: kg·m/s\r
  dimension: M L T^-1\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: cambio de estado\r
  used_in:\r
  - cambio_momento\r
  - teorema_impulso_momento\r
  - fuerza_media_cambio_momento\r
  - impulso_momento_masa_velocidad\r
  common_mistake: Confundir DeltaP con el momento final o calcular p_inicial - p_final\r
    en lugar de p_final - p_inicial.\r
  typical_range: Depende de la masa y de la variación de velocidad.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica el sentido del cambio de momento.\r
      en: The sign indicates the direction of momentum change.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: DeltaP nulo indica que el momento no cambia en el eje analizado.\r
      en: Zero DeltaP means momentum does not change along the analyzed axis.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - cambio_momento\r
    - impulso\r
    secondary_for:\r
    - fuerza_media\r
  graph_binding:\r
    channels:\r
    - momentum_change_arrow\r
  pedagogical_notes: DeltaP es igual al impulso neto si se usa el mismo sistema y\r
    eje.\r
- id: v0\r
  symbol: v_0\r
  nombre:\r
    es: velocidad inicial\r
    en: initial velocity\r
  descripcion:\r
    es: Velocidad del cuerpo antes de recibir el impulso.\r
    en: Velocity of the body before receiving the impulse.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: estado cinemático inicial\r
  used_in:\r
  - impulso_masa_cambio_velocidad\r
  - impulso_momento_masa_velocidad\r
  - velocidad_final_impulso\r
  common_mistake: Tomar la rapidez como siempre positiva e ignorar el sentido.\r
  typical_range: Depende del problema; desde valores pequeños hasta cientos de m/s\r
    en mecánica clásica.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido de la velocidad inicial respecto al eje elegido.\r
      en: The sign indicates the direction of initial velocity relative to the chosen\r
        axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Velocidad inicial nula indica reposo inicial en el eje analizado.\r
      en: Zero initial velocity indicates initial rest along the analyzed axis.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - estado_inicial\r
    secondary_for:\r
    - velocidad_final\r
  graph_binding:\r
    channels:\r
    - initial_velocity_arrow\r
  pedagogical_notes: En problemas de rebote el signo de v0 es esencial.\r
- id: vF\r
  symbol: v_f\r
  nombre:\r
    es: velocidad final\r
    en: final velocity\r
  descripcion:\r
    es: Velocidad del cuerpo después de recibir el impulso.\r
    en: Velocity of the body after receiving the impulse.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: estado cinemático final\r
  used_in:\r
  - impulso_masa_cambio_velocidad\r
  - impulso_momento_masa_velocidad\r
  - velocidad_final_impulso\r
  common_mistake: Ignorar que puede tener signo contrario a la velocidad inicial.\r
  typical_range: Depende del problema y del impulso aplicado.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido de la velocidad final respecto al eje elegido.\r
      en: The sign indicates the direction of final velocity relative to the chosen\r
        axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Velocidad final nula indica que el cuerpo queda detenido en el eje analizado.\r
      en: Zero final velocity indicates the body stops along the analyzed axis.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - velocidad_final\r
    secondary_for:\r
    - impulso\r
  graph_binding:\r
    channels:\r
    - final_velocity_arrow\r
  pedagogical_notes: vF debe mantener el mismo eje y convenio de signos que v0.\r
- id: Fmax\r
  symbol: F_{max}\r
  nombre:\r
    es: fuerza máxima\r
    en: maximum force\r
  descripcion:\r
    es: Valor máximo de la fuerza en un perfil fuerza-tiempo, especialmente en perfiles\r
      triangulares.\r
    en: Maximum value of force in a force-time profile, especially triangular profiles.\r
  unidad_si: N\r
  dimension: M L T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: pico de fuerza\r
  used_in:\r
  - impulso_fuerza_triangular\r
  common_mistake: Confundir Fmax con Fmed; en una fuerza triangular Fmed suele ser\r
    Fmax/2.\r
  typical_range: Depende del impacto; puede ser mucho mayor que la fuerza media.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Fmax representa una magnitud máxima y se toma no negativa.\r
      en: Fmax represents a maximum magnitude and is taken as nonnegative.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Fmax cero implica ausencia de fuerza en el perfil considerado.\r
      en: Zero Fmax means no force in the considered profile.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, inf)'\r
  interpretation_role:\r
    primary_for:\r
    - fuerza_triangular\r
    secondary_for:\r
    - area_bajo_curva\r
  graph_binding:\r
    channels:\r
    - peak_force\r
  pedagogical_notes: Fmax no debe sustituirse por Fmed salvo que el perfil lo justifique.\r
- id: Jx\r
  symbol: J_x\r
  nombre:\r
    es: componente x del impulso\r
    en: x-component of impulse\r
  descripcion:\r
    es: Componente del impulso o del cambio de momento sobre el eje x.\r
    en: Component of impulse or momentum change along the x-axis.\r
  unidad_si: N·s\r
  dimension: M L T^-1\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: componente vectorial\r
  used_in:\r
  - cambio_momento_componentes\r
  common_mistake: Sumar componentes de ejes distintos o perder el signo.\r
  typical_range: Depende de la proyección del movimiento en x.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido sobre el eje x.\r
      en: The sign indicates direction along the x-axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Jx cero indica que no hay cambio de momento en x.\r
      en: Zero Jx means no momentum change along x.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - componentes\r
    secondary_for:\r
    - impulso\r
  graph_binding:\r
    channels:\r
    - impulse_x\r
  pedagogical_notes: Jx debe calcularse con velocidades proyectadas en el mismo eje.\r
- id: Jy\r
  symbol: J_y\r
  nombre:\r
    es: componente y del impulso\r
    en: y-component of impulse\r
  descripcion:\r
    es: Componente del impulso o del cambio de momento sobre el eje y.\r
    en: Component of impulse or momentum change along the y-axis.\r
  unidad_si: N·s\r
  dimension: M L T^-1\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: componente vectorial\r
  used_in:\r
  - cambio_momento_componentes\r
  common_mistake: Tratar Jy como si tuviera el mismo valor que Jx por simetría inexistente.\r
  typical_range: Depende de la proyección del movimiento en y.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido sobre el eje y.\r
      en: The sign indicates direction along the y-axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Jy cero indica que no hay cambio de momento en y.\r
      en: Zero Jy means no momentum change along y.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - componentes\r
    secondary_for:\r
    - impulso\r
  graph_binding:\r
    channels:\r
    - impulse_y\r
  pedagogical_notes: Jy solo tiene sentido después de fijar claramente el eje y.\r
- id: vix\r
  symbol: v_{ix}\r
  nombre:\r
    es: velocidad inicial en x\r
    en: initial x-velocity\r
  descripcion:\r
    es: Componente x de la velocidad inicial.\r
    en: x-component of the initial velocity.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: componente cinemática inicial\r
  used_in:\r
  - cambio_momento_componentes\r
  common_mistake: Usar rapidez inicial en lugar de componente x.\r
  typical_range: Depende del movimiento en el eje x.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido inicial sobre x.\r
      en: The sign indicates initial direction along x.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: vix cero indica ausencia de movimiento inicial en x.\r
      en: Zero vix indicates no initial motion along x.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - componentes\r
    secondary_for:\r
    - estado_inicial\r
  graph_binding:\r
    channels:\r
    - velocity_initial_x\r
  pedagogical_notes: Debe compartir eje y signo con vfx.\r
- id: vfx\r
  symbol: v_{fx}\r
  nombre:\r
    es: velocidad final en x\r
    en: final x-velocity\r
  descripcion:\r
    es: Componente x de la velocidad final.\r
    en: x-component of the final velocity.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: componente cinemática final\r
  used_in:\r
  - cambio_momento_componentes\r
  common_mistake: No cambiar el signo en rebotes o inversiones de sentido.\r
  typical_range: Depende del movimiento final en x.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido final sobre x.\r
      en: The sign indicates final direction along x.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: vfx cero indica ausencia de movimiento final en x.\r
      en: Zero vfx indicates no final motion along x.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - componentes\r
    secondary_for:\r
    - estado_final\r
  graph_binding:\r
    channels:\r
    - velocity_final_x\r
  pedagogical_notes: Debe compararse con vix usando el mismo eje.\r
- id: viy\r
  symbol: v_{iy}\r
  nombre:\r
    es: velocidad inicial en y\r
    en: initial y-velocity\r
  descripcion:\r
    es: Componente y de la velocidad inicial.\r
    en: y-component of the initial velocity.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: componente cinemática inicial\r
  used_in:\r
  - cambio_momento_componentes\r
  common_mistake: Suponer viy nula sin justificar el sistema de ejes.\r
  typical_range: Depende del movimiento en el eje y.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido inicial sobre y.\r
      en: The sign indicates initial direction along y.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: viy cero indica ausencia de movimiento inicial en y.\r
      en: Zero viy indicates no initial motion along y.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - componentes\r
    secondary_for:\r
    - estado_inicial\r
  graph_binding:\r
    channels:\r
    - velocity_initial_y\r
  pedagogical_notes: Solo debe usarse si el eje y está definido.\r
- id: vfy\r
  symbol: v_{fy}\r
  nombre:\r
    es: velocidad final en y\r
    en: final y-velocity\r
  descripcion:\r
    es: Componente y de la velocidad final.\r
    en: y-component of the final velocity.\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: componente cinemática final\r
  used_in:\r
  - cambio_momento_componentes\r
  common_mistake: Mezclar componente y con rapidez total.\r
  typical_range: Depende del movimiento final en el eje y.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido final sobre y.\r
      en: The sign indicates final direction along y.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: vfy cero indica ausencia de movimiento final en y.\r
      en: Zero vfy indicates no final motion along y.\r
  value_nature:\r
    kind: scalar_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for:\r
    - componentes\r
    secondary_for:\r
    - estado_final\r
  graph_binding:\r
    channels:\r
    - velocity_final_y\r
  pedagogical_notes: Debe compararse con viy usando el mismo eje.\r
- id: p\r
  symbol: p\r
  nombre:\r
    es: cantidad de movimiento\r
    en: momentum\r
  descripcion:\r
    es: 'Magnitud de soporte: cantidad de movimiento'\r
    en: 'Support magnitude: momentum'\r
  unidad_si: kg·m/s\r
  dimension: M L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: variable de estado\r
  used_in: []\r
  common_mistake:\r
    es: Confundir con otras magnitudes similares.\r
    en: Confuse with other similar magnitudes.\r
  typical_range: Variable según el sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Indica dirección o sentido.\r
      en: Indicates direction or sense.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Indica ausencia de la magnitud.\r
      en: Indicates absence of the magnitude.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Importante para el contexto del leaf.\r
    en: Important for the leaf context.\r
- id: W\r
  symbol: W\r
  nombre:\r
    es: trabajo\r
    en: work\r
  descripcion:\r
    es: 'Magnitud de soporte: trabajo'\r
    en: 'Support magnitude: work'\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parámetro energético\r
  used_in: []\r
  common_mistake:\r
    es: Confundir con otras magnitudes similares.\r
    en: Confuse with other similar magnitudes.\r
  typical_range: Variable según el sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Indica dirección o sentido.\r
      en: Indicates direction or sense.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Indica ausencia de la magnitud.\r
      en: Indicates absence of the magnitude.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Importante para el contexto del leaf.\r
    en: Important for the leaf context.\r
- id: dp\r
  symbol: dp\r
  nombre:\r
    es: diferencial de momento\r
    en: momentum differential\r
  descripcion:\r
    es: 'Magnitud de soporte: diferencial de momento'\r
    en: 'Support magnitude: momentum differential'\r
  unidad_si: kg·m/s\r
  dimension: M L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: variable de estado\r
  used_in: []\r
  common_mistake:\r
    es: Confundir con otras magnitudes similares.\r
    en: Confuse with other similar magnitudes.\r
  typical_range: Variable según el sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Indica dirección o sentido.\r
      en: Indicates direction or sense.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Indica ausencia de la magnitud.\r
      en: Indicates absence of the magnitude.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Importante para el contexto del leaf.\r
    en: Important for the leaf context.\r
- id: dr\r
  symbol: dr\r
  nombre:\r
    es: diferencial de posición\r
    en: position differential\r
  descripcion:\r
    es: 'Magnitud de soporte: diferencial de posición'\r
    en: 'Support magnitude: position differential'\r
  unidad_si: m\r
  dimension: L\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: variable de estado\r
  used_in: []\r
  common_mistake:\r
    es: Confundir con otras magnitudes similares.\r
    en: Confuse with other similar magnitudes.\r
  typical_range: Variable según el sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Indica dirección o sentido.\r
      en: Indicates direction or sense.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Indica ausencia de la magnitud.\r
      en: Indicates absence of the magnitude.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Importante para el contexto del leaf.\r
    en: Important for the leaf context.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad\r
    en: velocity\r
  descripcion:\r
    es: 'Magnitud de soporte: velocidad'\r
    en: 'Support magnitude: velocity'\r
  unidad_si: m/s\r
  dimension: L T^-1\r
  is_vector: true\r
  components: null\r
  category: derived\r
  physical_role: variable de estado\r
  used_in: []\r
  common_mistake:\r
    es: Confundir con otras magnitudes similares.\r
    en: Confuse with other similar magnitudes.\r
  typical_range: Variable según el sistema.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Indica dirección o sentido.\r
      en: Indicates direction or sense.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Indica ausencia de la magnitud.\r
      en: Indicates absence of the magnitude.\r
  value_nature:\r
    kind: vector_projection\r
    nonnegative_only: false\r
    expected_interval: (-inf, inf)\r
  interpretation_role:\r
    primary_for: []\r
    secondary_for: []\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Importante para el contexto del leaf.\r
    en: Important for the leaf context.\r
`;export{n as default};
