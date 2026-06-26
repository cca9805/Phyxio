const e=`version: 1\r
formulas:\r
  - id: trans_galileo_pos\r
    title:\r
      es: Transformacion galileana de posicion\r
      en: Galilean position transformation\r
    equation: x = x_prime + x0 + v_f*t\r
    latex: x = x' + x_0 + v_f\\, t\r
    rearrangements: []\r
    category: fundamental\r
    relation_type: constitutive_relation\r
    physical_meaning:\r
      es: Relaciona el vector de posición[[r_vec]]medido desde un marco[[frame_sigma]]con la posición del mismo móvil en un marco que se desplaza con velocidad[[v_frame]].\r
      en: Relates the position vector[[r_vec]]measured from one reference frame[[frame_sigma]]to the position of the same body in a frame moving with velocity[[v_frame]].\r
    constraints:\r
      - movimiento relativo uniforme entre marcos\r
      - ejes paralelos y orígenes definidos\r
      - tiempo clásico común[[t_global]]\r
    validity:\r
      es: Válida en mecánica clásica para marcos inerciales o aproximadamente inerciales.\r
      en: Valid in classical mechanics for inertial or approximately inertial frames.\r
    dimension_check: "[L] = [L] + [L/T][T] = [L]"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - Cambio de observador entre andén, vagón, cinta o cámara móvil.\r
    interpretation_tags:\r
      - sistemas-referencia\r
      - frame_sigma\r
      - r_vec\r
      - v_frame\r
    result_semantics:\r
      target: r_vec\r
      meaning: Sirve para interpretar cómo cambia la descripción del movimiento al cambiar de marco.\r
    domain_checks:\r
      - expr: "true"\r
        message:\r
          es: Verifica que la velocidad relativa entre marcos sea constante durante el intervalo analizado.\r
          en: Check that the relative velocity between frames remains constant over the analyzed interval.\r
    coherence_checks:\r
      - expr: "true"\r
        message:\r
          es: Comprueba que el vector de posición, la velocidad del marco y el tiempo clásico usan la misma convención de signos y el mismo eje.\r
          en: Check that the position vector, the frame velocity, and the classical time use the same sign convention and axis.\r
    graph_implications:\r
      - El gráfico debe mostrar que cambiar el marco[[frame_sigma]]desplaza la descripción sin cambiar el evento físico.\r
    pedagogical_triggers:\r
      - when: "true"\r
        message:\r
          es: Si cambia el observador, revisa primero el origen y el signo antes de comparar posiciones o velocidades.\r
          en: If the observer changes, review origin and sign before comparing positions or velocities.\r
  - id: invarianza_distancia\r
    title:\r
      es: Invarianza clásica de la distancia\r
      en: Classical distance invariance\r
    equation: Delta_x = Delta_x_prime\r
    latex: \\Delta x = \\Delta x'\r
    rearrangements: []\r
    category: structural\r
    relation_type: identity\r
    physical_meaning:\r
      es: En mecánica clásica, dos marcos inerciales describen la misma separación espacial si comparan simultáneamente los mismos puntos.\r
      en: In classical mechanics, two inertial frames describe the same spatial separation when they compare the same points simultaneously.\r
    constraints:\r
      - simultaneidad clásica\r
      - misma configuración geométrica\r
    validity:\r
      es: Propia del marco galileano; deja de ser exacta fuera del régimen clásico.\r
      en: Proper to the Galilean framework; it ceases to be exact outside the classical regime.\r
    dimension_check: "[L] = [L]"\r
    calculable: false\r
    motivo_no_calculable: null\r
    used_in:\r
      - Comparación de distancias entre observadores inerciales.\r
    interpretation_tags:\r
      - sistemas-referencia\r
      - frame_sigma\r
    result_semantics:\r
      target: O\r
      meaning: Ayuda a distinguir entre cambio de descripción y cambio real del objeto medido.\r
    domain_checks:\r
      - expr: "true"\r
        message:\r
          es: Asegura que la comparación de distancias se hace para los mismos eventos y con la misma simultaneidad clásica.\r
          en: Ensure that distance comparison is made for the same events and with the same classical simultaneity.\r
    coherence_checks:\r
      - expr: "true"\r
        message:\r
          es: Revisa que no se comparen segmentos tomados en instantes distintos como si fueran el mismo intervalo.\r
          en: Check that segments taken at different instants are not compared as if they were the same interval.\r
    graph_implications:\r
      - El gráfico debe dejar claro que el cambio de origen no deforma la distancia entre dos puntos medidos a la vez.\r
    pedagogical_triggers:\r
      - when: "true"\r
        message:\r
          es: Si la distancia cambia al pasar de un marco a otro, revisa si has mezclado eventos o tiempos distintos.\r
          en: If distance changes when moving from one frame to another, review whether different events or times were mixed.\r
  - id: invarianza_tiempo\r
    title:\r
      es: Invarianza del tiempo clásico\r
      en: Invariance of classical time\r
    equation: Delta_t = Delta_t_prime\r
    latex: \\Delta t = \\Delta t'\r
    rearrangements: []\r
    category: structural\r
    relation_type: identity\r
    physical_meaning:\r
      es: En el marco galileano, todos los observadores comparten el mismo parámetro temporal[[t_global]]aunque no compartan origen espacial.\r
      en: In the Galilean framework, all observers share the same temporal parameter[[t_global]]even if they do not share the same spatial origin.\r
    constraints:\r
      - relojes sincronizados en el régimen clásico\r
    validity:\r
      es: Válida solo en mecánica clásica no relativista.\r
      en: Valid only in non-relativistic classical mechanics.\r
    dimension_check: "[T] = [T]"\r
    calculable: false\r
    motivo_no_calculable: null\r
    used_in:\r
      - Comparación de cronómetros entre observadores clásicos.\r
    interpretation_tags:\r
      - sistemas-referencia\r
      - t_global\r
    result_semantics:\r
      target: O\r
      meaning: Permite comparar descripciones sin introducir una dilatación temporal ajena al leaf.\r
    domain_checks:\r
      - expr: "true"\r
        message:\r
          es: Verifica que el problema sigue en el dominio clásico donde todos comparten el mismo tiempo.\r
          en: Check that the problem remains in the classical domain where all observers share the same time.\r
    coherence_checks:\r
      - expr: "true"\r
        message:\r
          es: Comprueba que el mismo instante se usa en ambos marcos antes de comparar posiciones o velocidades.\r
          en: Check that the same instant is used in both frames before comparing positions or velocities.\r
    graph_implications:\r
      - El gráfico debe mostrar un único reloj común para los dos marcos comparados.\r
    pedagogical_triggers:\r
      - when: "true"\r
        message:\r
          es: Si parece necesario cambiar el tiempo al cambiar de observador, probablemente has salido del modelo galileano.\r
          en: If changing the observer seems to require changing time itself, you have probably left the Galilean model.\r
  - id: trans_galileo_vel\r
    title:\r
      es: Transformación galileana de velocidad\r
      en: Galilean velocity transformation\r
    equation: v = v_prime + v_frame\r
    latex: v = v' + v_f \\quad (\\Sigma)\r
    rearrangements:\r
      - target: v_prime\r
        equation: v_prime = v - v_frame\r
        latex: v' = v - v_f\r
        constraints: []\r
      - target: v_frame\r
        equation: v_frame = v - v_prime\r
        latex: v_f = v - v'\r
        constraints: []\r
    category: fundamental\r
    relation_type: constitutive_relation\r
    physical_meaning:\r
      es: Relaciona la velocidad medida en un marco con la velocidad medida en otro que se traslada uniformemente.\r
      en: Relates the velocity measured in one frame to the velocity measured in another frame moving uniformly.\r
    constraints:\r
      - movimiento relativo uniforme entre marcos\r
      - ejes paralelos\r
      - tiempo clásico común\r
    validity:\r
      es: Válida en mecánica clásica no relativista para marcos inerciales o aproximadamente inerciales.\r
      en: Valid in non-relativistic classical mechanics for inertial or approximately inertial frames.\r
    dimension_check: "[L/T] = [L/T] + [L/T]"\r
    calculable: true\r
    motivo_no_calculable: null\r
    used_in:\r
      - Traducción galileana entre observadores.\r
    interpretation_tags:\r
      - sistemas-referencia\r
      - v_frame\r
    result_semantics:\r
      target: v\r
      meaning: Permite traducir velocidades entre observadores sin cambiar el evento físico descrito.\r
    domain_checks:\r
      - expr: "true"\r
        message:\r
          es: Verifica que la velocidad relativa entre marcos sea constante.\r
          en: Check that the relative velocity between frames is constant.\r
    coherence_checks:\r
      - expr: "true"\r
        message:\r
          es: Comprueba que la velocidad del móvil, la velocidad relativa y la del marco usan la misma convención de signos.\r
          en: Check that the body's velocity, relative velocity, and frame velocity use the same sign convention.\r
\r
    graph_implications:\r
      - En una grafica velocidad-tiempo, cambiar de marco desplaza verticalmente las velocidades por v_frame.\r
    pedagogical_triggers:\r
      - when: "true"\r
        message:\r
          es: Antes de sumar velocidades, identifica que velocidad pertenece al objeto y cual al marco.\r
          en: Before adding velocities, identify which velocity belongs to the body and which belongs to the frame.\r
`;export{e as default};
