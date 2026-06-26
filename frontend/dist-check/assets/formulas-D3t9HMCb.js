const n=`version: 1
ui:
  default_formula: condicion_rodadura_puente
formulas:
- id: condicion_rodadura_puente
  title:
    es: Rodadura como puente entre traslación y rotación
    en: Rolling as a bridge between translation and rotation
  equation: v_cm = omega * R
  latex: v_{cm}=\\omega R
  rearrangements:
  - target: v_cm
    equation: v_cm = omega * R
    latex: v_{cm}=\\omega R
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Por qué rodar significa combinar traslación del centro de masas y rotación
      del sólido.
    en: Why does rolling mean combining center-of-mass translation and rigid-body
      rotation.
  constraints:
  - modelo de sólido rígido
  - eje de giro definido
  - convención de signos estable
  validity:
    es: Válida cuando el movimiento puede modelarse como rotación rígida o rodadura
      ideal según el leaf.
    en: Valid when the motion can be modeled as rigid rotation or ideal rolling according
      to the leaf.
  dimension_check: coherente dimensionalmente con las magnitudes declaradas
  calculable: true
  motivo_no_calculable: null
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  interpretation_tags:
  - rotacion
  - rodadura-como-puente-entre-traslacion-y-rotacion
  result_semantics:
    target: v_cm
    kind: scalar
    sign_meaning:
      es: El signo indica sentido o proyección según la convención.
      en: The sign indicates direction or projection according to the convention.
    absolute_value_meaning:
      es: El módulo mide la intensidad física del efecto.
      en: The magnitude measures the physical strength of the effect.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que el modelo de rotación o rodadura sea aplicable.
      en: Check that the rotation or rolling model applies.
  coherence_checks:
  - expr: 'true'
    message:
      es: Verifica unidades, signos y orden de magnitud.
      en: Check units, signs, and order of magnitude.
  graph_implications:
  - SVG de rueda con centro de masas, velocidad del centro, giro y punto instantáneo
    de contacto; Coord opcional \\(v_{cm}\\) frente a \\(\\omega R\\).
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Distingue siempre traslación, rotación y rodadura antes de elegir fórmula.
      en: Always distinguish translation, rotation, and rolling before choosing a
        formula.
- id: aceleracion_rodadura_puente
  title:
    es: Puente entre aceleración lineal y angular
    en: Bridge between linear and angular acceleration
  equation: a_cm = alpha * R
  latex: a_{cm}=\\alpha R
  rearrangements:
  - target: a_cm
    equation: a_cm = alpha * R
    latex: a_{cm}=\\alpha R
  category: derived
  relation_type: constraint
  physical_meaning:
    es: Conecta aceleración del centro y aceleración angular cuando la rodadura sin deslizamiento se mantiene.
    en: Connects center acceleration and angular acceleration when no-slip rolling holds.
  constraints:
  - rodadura sin deslizamiento
  - radio constante
  - eje definido
  validity:
    es: Válida mientras el contacto no patine y el radio efectivo sea constante.
    en: Valid while contact does not slip and effective radius is constant.
  dimension_check: aceleración lineal en m/s^2
  calculable: true
  motivo_no_calculable: null
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  interpretation_tags:
  - rodadura
  - puente
  result_semantics:
    target: a_cm
    kind: scalar
    sign_meaning:
      es: El signo sigue la convención de avance y giro.
      en: The sign follows the advance and spin convention.
    absolute_value_meaning:
      es: Mide la tasa de cambio de la velocidad del centro.
      en: Measures the rate of change of center velocity.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que la rodadura sin deslizamiento sigue siendo válida.
      en: Check that no-slip rolling remains valid.
  coherence_checks:
  - expr: 'true'
    message:
      es: Revisa que a_cm, alpha y R usen la misma convención.
      en: Check that a_cm, alpha, and R use the same convention.
  graph_implications:
  - Coord puede comparar aceleración lineal y angular escalada por radio.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: No conectes aceleraciones lineales y angulares sin radio.
      en: Do not connect linear and angular accelerations without radius.
- id: desplazamiento_rodadura_puente
  title:
    es: Puente entre desplazamiento y ángulo girado
    en: Bridge between displacement and turned angle
  equation: s_cm = theta * R
  latex: s_{cm}=\\theta R
  rearrangements:
  - target: theta
    equation: theta = s_cm / R
    latex: \\theta=\\frac{s_{cm}}{R}
  category: derived
  relation_type: constraint
  physical_meaning:
    es: Conecta distancia recorrida por el centro con ángulo girado en rodadura ideal.
    en: Connects distance traveled by the center with turned angle under ideal rolling.
  constraints:
  - rodadura sin deslizamiento
  - radio constante
  - superficie fija
  validity:
    es: Válida para contacto sin deslizamiento y radio efectivo constante.
    en: Valid for no-slip contact and constant effective radius.
  dimension_check: longitud en metros
  calculable: true
  motivo_no_calculable: null
  used_in:
  - rodadura-como-puente-entre-traslacion-y-rotacion
  interpretation_tags:
  - rodadura
  - desplazamiento
  result_semantics:
    target: theta
    kind: scalar
    sign_meaning:
      es: El signo indica sentido de giro.
      en: The sign indicates spin direction.
    absolute_value_meaning:
      es: Mide cuánto ha girado la rueda para un avance dado.
      en: Measures how much the wheel has turned for a given advance.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que la distancia se mida sobre la trayectoria del centro.
      en: Check that distance is measured along the center path.
  coherence_checks:
  - expr: 'true'
    message:
      es: Revisa que theta esté en radianes.
      en: Check that theta is in radians.
  graph_implications:
  - El SVG muestra avance del centro y giro acumulado.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Usa radianes cuando conectes ángulo y longitud.
      en: Use radians when connecting angle and length.
`;export{n as default};
