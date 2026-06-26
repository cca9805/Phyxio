const e=`- id: fuerza_lorentz_total
  title:
    es: Fuerza de Lorentz total
    en: Total Lorentz force
  equation: "F_L = q * E + q * v * B * sin_theta"
  latex: "F_L = q\\\\,E + |q|\\\\,v\\\\,B\\\\,\\\\sin\\\\theta"
  rearrangements:
    - target: F_L
      equation: "F_L = q * E + q * v * B * sin_theta"
      latex: "F_L = q\\\\,E + |q|\\\\,v\\\\,B\\\\,\\\\sin\\\\theta"
    - target: q
      equation: "q = F_L / (E + v * B * sin_theta)"
      latex: "q = \\\\frac{F_L}{E + v\\\\,B\\\\,\\\\sin\\\\theta}"
    - target: E
      equation: "E = (F_L - q * v * B * sin_theta) / q"
      latex: "E = \\\\frac{F_L - |q|\\\\,v\\\\,B\\\\,\\\\sin\\\\theta}{q}"
    - target: v
      equation: "v = (F_L - q * E) / (q * B * sin_theta)"
      latex: "v = \\\\frac{F_L - q\\\\,E}{|q|\\\\,B\\\\,\\\\sin\\\\theta}"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "Fuerza total sobre una carga q que se mueve con velocidad v en presencia simultánea de campo eléctrico E y campo magnético B. La componente eléctrica actúa independientemente de la velocidad; la magnética solo actúa sobre cargas en movimiento y es siempre perpendicular a v."
    en: "Total force on a charge q moving with velocity v in the simultaneous presence of electric field E and magnetic field B. The electric component acts independently of velocity; the magnetic one acts only on moving charges and is always perpendicular to v."
  constraints:
    - "v << c (régimen no relativista)"
    - "Campo uniforme o evaluado localmente en la posición de la carga"
    - "sin_theta es el seno del ángulo entre v y B"
    - "La expresión da el módulo; la dirección requiere el producto vectorial"
  validity:
    es: "Válida en electrodinámica clásica para velocidades v << c. Para velocidades relativistas se debe usar la fuerza de Lorentz covariante con el cuadrivector momento-energía. En medios materiales, E y B son los campos macroscópicos locales."
    en: "Valid in classical electrodynamics for velocities v << c. For relativistic speeds the covariant Lorentz force with the four-momentum vector must be used. In material media, E and B are the local macroscopic fields."
  dimension_check: "[C]·[V/m] + [C]·[m/s]·[T] = [N] + [N] = [N] ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - selector de velocidades de Wien
    - espectrómetro de masas
    - movimiento helicoidal en campo magnético uniforme
    - tubo de rayos catódicos
  interpretation_tags:
    - fuerza_total_electromagnetica
    - suma_componentes
    - dependencia_velocidad
  result_semantics:
    target: F_L
    kind: scalar_unsigned
    sign_meaning:
      es: "F_L es el módulo de la fuerza total; la dirección se determina vectorialmente. El signo de q afecta la dirección de ambas componentes."
      en: "F_L is the magnitude of the total force; direction is determined vectorially. The sign of q affects the direction of both components."
    absolute_value_meaning:
      es: "Intensidad de la fuerza total en newtons que actúa sobre la partícula cargada en el campo electromagnético."
      en: "Total force magnitude in newtons acting on the charged particle in the electromagnetic field."
  domain_checks:
    - "v >= 0"
    - "B >= 0"
    - "E >= 0"
    - "0 <= sin_theta <= 1"
  coherence_checks:
    - "Si v es cero, F_L debe reducirse a q·E (fuerza puramente eléctrica)"
    - "Si E es cero, F_L debe reducirse a |q|·v·B·sin_theta (fuerza puramente magnética)"
    - "Si sin_theta es cero, la componente magnética es nula"
  graph_implications:
    - "En la gráfica F_L vs v, la curva es lineal con pendiente |q|·B·sin_theta; el valor a v=0 corresponde a la fuerza eléctrica q·E"
  pedagogical_triggers:
    - "Si el alumno obtiene F_L=0 cuando E no es cero pero v=0, revisar si omitió la componente eléctrica"
    - "Si la fuerza crece sin límite con v, recordar que el modelo clásico falla para v cercana a c"

- id: fuerza_magnetica_modulo
  title:
    es: Módulo de la fuerza magnética de Lorentz
    en: Magnitude of the magnetic Lorentz force
  equation: "F_m = q * v * B * sin_theta"
  latex: "F_m = |q|\\\\,v\\\\,B\\\\,\\\\sin\\\\theta"
  rearrangements:
    - target: F_m
      equation: "F_m = q * v * B * sin_theta"
      latex: "F_m = |q|\\\\,v\\\\,B\\\\,\\\\sin\\\\theta"
    - target: B
      equation: "B = F_m / (q * v * sin_theta)"
      latex: "B = \\\\frac{F_m}{|q|\\\\,v\\\\,\\\\sin\\\\theta}"
    - target: v
      equation: "v = F_m / (q * B * sin_theta)"
      latex: "v = \\\\frac{F_m}{|q|\\\\,B\\\\,\\\\sin\\\\theta}"
    - target: q
      equation: "q = F_m / (v * B * sin_theta)"
      latex: "q = \\\\frac{F_m}{v\\\\,B\\\\,\\\\sin\\\\theta}"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "Módulo de la componente magnética de la fuerza de Lorentz. Depende del módulo de la carga, de la velocidad, del campo magnético y del ángulo entre v y B. Es máxima cuando v y B son perpendiculares y nula cuando son paralelos."
    en: "Magnitude of the magnetic component of the Lorentz force. Depends on the magnitude of the charge, velocity, magnetic field and the angle between v and B. Maximum when v and B are perpendicular, zero when parallel."
  constraints:
    - "Carga en movimiento (v > 0)"
    - "Campo magnético no nulo (B > 0)"
    - "Ángulo θ entre v y B: 0 ≤ θ ≤ 180°"
    - "v << c"
  validity:
    es: "Válida en el régimen clásico no relativista. Para velocidades relativistas la masa efectiva aumenta con el factor de Lorentz. La fórmula da el módulo; la dirección es perpendicular al plano formado por v y B."
    en: "Valid in the classical non-relativistic regime. For relativistic speeds the effective mass increases with the Lorentz factor. The formula gives the magnitude; direction is perpendicular to the plane formed by v and B."
  dimension_check: "[C]·[m/s]·[T] = [C]·[m/s]·[kg/(A·s²)] = [N] ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - movimiento circular de partículas cargadas
    - espectrómetro de masas
    - aceleradores de partículas
    - auroras boreales
  interpretation_tags:
    - fuerza_perpendicular
    - no_realiza_trabajo
    - dependencia_angular
  result_semantics:
    target: F_m
    kind: scalar_unsigned
    sign_meaning:
      es: "F_m es siempre no negativa. La dirección de la fuerza magnética se determina por el producto vectorial q(v×B) y depende del signo de q."
      en: "F_m is always non-negative. The direction of the magnetic force is determined by the cross product q(v×B) and depends on the sign of q."
    absolute_value_meaning:
      es: "Intensidad de la fuerza magnética en newtons; mide cuánto desvía el campo magnético la trayectoria de la partícula."
      en: "Magnetic force strength in newtons; measures how much the magnetic field deflects the particle trajectory."
  domain_checks:
    - "F_m >= 0"
    - "v >= 0"
    - "B >= 0"
    - "0 <= sin_theta <= 1"
  coherence_checks:
    - "Si sin_theta es cero (v paralela a B), F_m debe ser cero independientemente de v y B"
    - "Si sin_theta es 1 (v perpendicular a B), F_m alcanza su valor máximo |q|·v·B"
  graph_implications:
    - "En la gráfica F_m vs v con B y sin_theta fijos, la curva es una recta que pasa por el origen con pendiente |q|·B·sin_theta"
  pedagogical_triggers:
    - "Si el alumno obtiene F_m no nula cuando v es paralela a B, revisar el factor sin_theta"
    - "Si el resultado supera q·v·B, hay un error: ese es el máximo posible con sin_theta=1"
`;export{e as default};
