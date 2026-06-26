const n=`version: 1\r
magnitudes:\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: momento de inercia\r
    en: moment of inertia\r
  descripcion:\r
    es: Inercia rotacional del cuerpo rigido respecto al eje de giro.\r
    en: Rotational inertia of the rigid body about the pivot axis.\r
  unidad_si: kg*m^2\r
  dimension: M L^2\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Tratar I como constante geometrica universal sin revisar eje real de giro.\r
  typical_range: 0.01 a 10 kg*m^2 en montajes de laboratorio y prototipos mecanicos.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El momento de inercia es no negativo para distribuciones fisicas de masa.\r
      en: Moment of inertia is non-negative for physical mass distributions.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: I nulo anula la dinamica rotacional del sistema modelado.\r
      en: Zero I collapses rotational dynamics in this model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, 100]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - slider_inertia\r
  pedagogical_notes: A mayor I, mayor resistencia a cambiar estado angular.\r
\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: masa\r
    en: mass\r
  descripcion:\r
    es: Masa total del cuerpo que oscila alrededor del eje fijo.\r
    en: Total mass of the body oscillating around a fixed axis.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Confundir masa con peso y usar newtons en lugar de kilogramos.\r
  typical_range: 0.1 a 30 kg segun aplicacion didactica o industrial.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La masa se considera positiva en todo escenario fisico del leaf.\r
      en: Mass is treated as positive in every physical scenario of the leaf.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Masa nula elimina el sistema dinamico considerado.\r
      en: Zero mass removes the considered dynamic system.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, 100]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - slider_mass\r
  pedagogical_notes: La masa influye en la dinamica junto a I y d, no de forma aislada.\r
\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: aceleracion gravitatoria\r
    en: gravitational acceleration\r
  descripcion:\r
    es: Intensidad local del campo gravitatorio que produce el torque restaurador.\r
    en: Local gravitational field intensity producing restoring torque.\r
  unidad_si: m/s^2\r
  dimension: L T^-2\r
  is_vector: false\r
  components: null\r
  category: environmental\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Usar valores de g sin justificar entorno o altitud.\r
  typical_range: 9.78 a 9.83 m/s^2 cerca de la superficie terrestre.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud positiva para escalar el torque gravitatorio.\r
      en: It is used as a positive magnitude scaling gravitational torque.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: g nula implica ausencia de restauracion gravitatoria en el modelo.\r
      en: Zero g implies no gravitational restoration in this model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, 20]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - constant_gravity\r
  pedagogical_notes: Variaciones pequenas de g cambian el periodo de forma medible en precision.\r
\r
- id: d\r
  symbol: d\r
  nombre:\r
    es: distancia al centro de masas\r
    en: pivot-to-center distance\r
  descripcion:\r
    es: Distancia entre el eje de giro y el centro de masas del cuerpo.\r
    en: Distance between pivot axis and body center of mass.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: geometric\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Medir d desde un borde en vez de desde el eje real del soporte.\r
  typical_range: 0.01 a 2 m segun tamano de prototipo.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se trata como longitud positiva definida por geometria del sistema.\r
      en: It is handled as a positive length set by system geometry.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: d nula elimina torque gravitatorio y deja de ser pendulo fisico clasico.\r
      en: Zero d removes gravitational torque and breaks the classical physical pendulum model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, 10]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - slider_distance\r
  pedagogical_notes: d controla la palanca gravitatoria y modifica el periodo junto con I.\r
\r
- id: omega0\r
  symbol: omega0\r
  nombre:\r
    es: pulsacion natural\r
    en: natural angular frequency\r
  descripcion:\r
    es: Frecuencia angular propia para oscilaciones pequenas en torno al equilibrio.\r
    en: Natural angular frequency for small oscillations around equilibrium.\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Confundir rad/s con Hz y comparar magnitudes sin conversion.\r
  typical_range: 0.2 a 20 rad/s en escenarios educativos y mecanicos.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se reporta positiva como escala de rapidez angular del ciclo.\r
      en: It is reported positive as angular speed scale of the cycle.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: omega0 nula implica ausencia de oscilacion restauradora.\r
      en: Zero omega0 implies no restoring oscillation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, 50]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - natural_rate\r
  pedagogical_notes: Permite pasar de parametros geometricos a escala temporal del movimiento.\r
\r
- id: T\r
  symbol: T\r
  nombre:\r
    es: periodo\r
    en: period\r
  descripcion:\r
    es: Tiempo requerido para completar una oscilacion angular completa.\r
    en: Time required to complete one full angular oscillation.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Medir medio ciclo y reportarlo como periodo completo.\r
  typical_range: 0.1 a 20 s en montaje de aula y banco.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El periodo es una duracion siempre positiva.\r
      en: Period is always a positive duration.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Periodo nulo no tiene significado fisico en este modelo.\r
      en: Zero period has no physical meaning in this model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, 100]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - cycle_time\r
  pedagogical_notes: Una variacion pequena de T puede evidenciar cambio en I o en d.\r
\r
- id: f\r
  symbol: f\r
  nombre:\r
    es: frecuencia\r
    en: frequency\r
  descripcion:\r
    es: Numero de ciclos por segundo en el regimen lineal del pendulo.\r
    en: Number of cycles per second in linear pendulum regime.\r
  unidad_si: Hz\r
  dimension: T^-1\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Comparar f con omega0 sin dividir por dos pi.\r
  typical_range: 0.05 a 5 Hz en la mayoria de practicas.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como conteo positivo de ciclos por unidad de tiempo.\r
      en: It is used as a positive cycle count per unit time.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: f nula implica ausencia de oscilacion periodica.\r
      en: Zero frequency implies no periodic oscillation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: (0, 20]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - cyclic_rate\r
  pedagogical_notes: Facilita comparacion con espectros de excitacion externa.\r
\r
- id: theta\r
  symbol: theta\r
  nombre:\r
    es: desplazamiento angular\r
    en: angular displacement\r
  descripcion:\r
    es: Angulo instantaneo respecto a la posicion de equilibrio estable.\r
    en: Instantaneous angle relative to stable equilibrium position.\r
  unidad_si: rad\r
  dimension: 1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Usar grados en formulas linealizadas sin conversion a radianes.\r
  typical_range: -0.35 a 0.35 rad para aproximacion de angulos pequenos.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica hacia que lado del equilibrio gira el cuerpo.\r
      en: Sign indicates on which side of equilibrium the body rotates.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: theta nula marca paso por equilibrio, no necesariamente reposo angular.\r
      en: Zero theta marks equilibrium crossing, not necessarily angular rest.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [ -3.2, 3.2 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - angle_trace\r
  pedagogical_notes: En el regimen lineal se espera respuesta casi sinusoidal de theta.\r
\r
- id: theta_dd\r
  symbol: theta_dd\r
  nombre:\r
    es: aceleracion angular\r
    en: angular acceleration\r
  descripcion:\r
    es: Segunda derivada temporal del angulo, ligada al torque neto.\r
    en: Second time derivative of angle, linked to net torque.\r
  unidad_si: rad/s^2\r
  dimension: T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - pendulo-fisico\r
  common_mistake: Interpretar theta_dd como velocidad angular.\r
  typical_range: -100 a 100 rad/s^2 segun amplitud y geometria.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica direccion instantanea de curvatura dinamica angular.\r
      en: Sign indicates instantaneous direction of angular dynamical curvature.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: theta_dd nula puede aparecer en puntos de inflexion dinamica.\r
      en: Zero theta_dd may occur at dynamical inflection points.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [ -500, 500 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-fisico\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - angular_acceleration\r
  pedagogical_notes: En el modelo lineal, theta_dd es proporcional y opuesta a theta.\r
`;export{n as default};
