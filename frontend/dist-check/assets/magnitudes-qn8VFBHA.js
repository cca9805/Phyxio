const n=`version: 1
magnitudes:
- id: v1
  symbol: v_1
  nombre:
    es: velocidad en la sección ancha
    en: velocity in wide section
  descripcion:
    es: Velocidad del fluido antes de entrar en el estrechamiento.
    en: Fluid velocity before entering the constriction.
  unidad_si: m/s
  dimension: L*T^-1
  is_vector: false
  components: null
  category: kinematic
  physical_role: state_variable
  used_in:
  - efecto-venturi
  common_mistake:
    es: Confundir v1 con la velocidad en la garganta (v2).
    en: Confusing v1 with the throat velocity (v2).
  typical_range:
    es: "0.1 - 5 m/s en tuberías comunes."
    en: "0.1 - 5 m/s in common pipes."
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud de la velocidad en un flujo estacionario.
      en: Velocity magnitude in steady flow.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica fluido en reposo.
      en: Indicates fluid at rest.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels:
    - x_axis
  pedagogical_notes:
    es: Se relaciona inversamente con el área por la ecuación de continuidad.
    en: Inversely related to area through the continuity equation.
- id: v2
  symbol: v_2
  nombre:
    es: velocidad en el estrechamiento
    en: velocity in constriction
  descripcion:
    es: Velocidad del fluido al atravesar la sección estrecha (garganta).
    en: Fluid velocity when crossing the narrow section (throat).
  unidad_si: m/s
  dimension: L*T^-1
  is_vector: false
  components: null
  category: kinematic
  physical_role: state_variable
  used_in:
  - efecto-venturi
  common_mistake:
    es: Olvidar que es siempre mayor que v1 en un estrechamiento.
    en: Forgetting it is always greater than v1 in a narrowing.
  typical_range:
    es: Superior a v1 por el factor de áreas.
    en: Higher than v1 by the area factor.
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud de la velocidad en la garganta.
      en: Velocity magnitude in the throat.
  zero_behavior:
    allowed: true
    meaning:
      es: Flujo nulo.
      en: Zero flow.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Es la magnitud estrella que explica la caída de presión.
    en: The star magnitude explaining the pressure drop.
- id: A1
  symbol: A_1
  nombre:
    es: área de la sección ancha
    en: area of wide section
  descripcion:
    es: Área de la sección transversal de la tubería principal.
    en: Cross-sectional area of the main pipe.
  unidad_si: m^2
  dimension: L^2
  is_vector: false
  components: null
  category: geometric
  physical_role: parameter
  used_in:
  - efecto-venturi
  common_mistake:
    es: No usar unidades de área (m²) si se da el diámetro.
    en: Not using area units (m²) if diameter is given.
  typical_range:
    es: Mayor que A2.
    en: Greater than A2.
  sign_behavior:
    has_sign: false
    meaning:
      es: Área geométrica.
      en: Geometric area.
  zero_behavior:
    allowed: false
    meaning:
      es: Una sección nula bloquea el flujo.
      en: A zero section blocks the flow.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Determina la velocidad inicial para un caudal dado.
    en: Determines initial velocity for a given flow rate.
- id: A2
  symbol: A_2
  nombre:
    es: área en el estrechamiento
    en: area in constriction
  descripcion:
    es: Área de la sección transversal en la garganta del tubo.
    en: Cross-sectional area at the pipe throat.
  unidad_si: m^2
  dimension: L^2
  is_vector: false
  components: null
  category: geometric
  physical_role: parameter
  used_in:
  - efecto-venturi
  common_mistake:
    es: Confundir con el radio o el diámetro.
    en: Confusing with radius or diameter.
  typical_range:
    es: Menor que A1.
    en: Smaller than A1.
  sign_behavior:
    has_sign: false
    meaning:
      es: Área geométrica restringida.
      en: Restricted geometric area.
  zero_behavior:
    allowed: false
    meaning:
      es: Obstrucción total.
      en: Total obstruction.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Su reducción es la causa física del aumento de velocidad.
    en: Its reduction is the physical cause of the velocity increase.
- id: p1
  symbol: p_1
  nombre:
    es: presión en la sección ancha
    en: pressure in wide section
  descripcion:
    es: Presión estática del fluido antes del estrechamiento.
    en: Static fluid pressure before the constriction.
  unidad_si: Pa
  dimension: M*L^-1*T^-2
  is_vector: false
  components: null
  category: dynamic
  physical_role: state_variable
  used_in:
  - efecto-venturi
  common_mistake:
    es: Creer que la presión es mayor donde la velocidad es mayor.
    en: Believing pressure is higher where velocity is higher.
  typical_range:
    es: Superior a p2.
    en: Higher than p2.
  sign_behavior:
    has_sign: false
    meaning:
      es: Presión absoluta o relativa.
      en: Absolute or relative pressure.
  zero_behavior:
    allowed: true
    meaning:
      es: Vacío o presión de referencia.
      en: Vacuum or reference pressure.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Es la presión de entrada del sistema.
    en: System inlet pressure.
- id: p2
  symbol: p_2
  nombre:
    es: presión en el estrechamiento
    en: pressure in constriction
  descripcion:
    es: Presión estática del fluido en la sección estrecha.
    en: Static fluid pressure in the narrow section.
  unidad_si: Pa
  dimension: M*L^-1*T^-2
  is_vector: false
  components: null
  category: dynamic
  physical_role: state_variable
  used_in:
  - efecto-venturi
  common_mistake:
    es: Esperar un aumento de presión al aumentar la velocidad.
    en: Expecting a pressure increase as velocity increases.
  typical_range:
    es: Inferior a p1.
    en: Lower than p1.
  sign_behavior:
    has_sign: false
    meaning:
      es: Presión en la zona de alta velocidad.
      en: Pressure in the high-velocity zone.
  zero_behavior:
    allowed: true
    meaning:
      es: Posible succión si es menor que la atmosférica.
      en: Possible suction if lower than atmospheric.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: La caída de presión en este punto es el efecto Venturi.
    en: The pressure drop at this point is the Venturi effect.
- id: rho
  symbol: \\rho
  nombre:
    es: densidad del fluido
    en: fluid density
  descripcion:
    es: Masa por unidad de volumen del fluido incompresible.
    en: Mass per unit volume of the incompressible fluid.
  unidad_si: kg/m^3
  dimension: M*L^-3
  is_vector: false
  components: null
  category: fundamental
  physical_role: parameter
  used_in:
  - efecto-venturi
  common_mistake:
    es: Usar densidad de un gas en regímenes compresibles.
    en: Using gas density in compressible regimes.
  typical_range:
    es: 1000 kg/m^3 para agua.
    en: 1000 kg/m^3 for water.
  sign_behavior:
    has_sign: false
    meaning:
      es: Concentración de masa.
      en: Mass concentration.
  zero_behavior:
    allowed: false
    meaning:
      es: Sin fluido no hay efecto Venturi.
      en: Without fluid there is no Venturi effect.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Inercia del fluido que determina la magnitud de la caída de presión.
    en: Fluid inertia determining the magnitude of the pressure drop.
- id: dp
  symbol: \\Delta p
  nombre:
    es: caída de presión
    en: pressure drop
  descripcion:
    es: Diferencia de presión entre la sección ancha y el estrechamiento (p1 - p2).
    en: Pressure difference between the wide section and the constriction (p1 - p2).
  unidad_si: Pa
  dimension: M*L^-1*T^-2
  is_vector: false
  components: null
  category: dynamic
  physical_role: performance_metric
  used_in:
  - efecto-venturi
  common_mistake:
    es: Restar p2 - p1 (que daría negativo).
    en: Subtracting p2 - p1 (which would be negative).
  typical_range:
    es: Positiva en un estrechamiento.
    en: Positive in a narrowing.
  sign_behavior:
    has_sign: true
    meaning:
      es: Diferencia de presión neta.
      en: Net pressure difference.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica áreas iguales o reposo.
      en: Indicates equal areas or rest.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels:
    - y_axis
  pedagogical_notes:
    es: Es la variable dependiente principal en los gráficos de Venturi.
    en: Primary dependent variable in Venturi graphs.
- id: Q
  symbol: Q
  nombre:
    es: caudal volumétrico
    en: volumetric flow rate
  descripcion:
    es: Volumen de fluido que atraviesa una sección por unidad de tiempo.
    en: Volume of fluid passing through a section per unit of time.
  unidad_si: m^3/s
  dimension: L^3*T^-1
  is_vector: false
  components: null
  category: kinematic
  physical_role: state_variable
  used_in:
  - efecto-venturi
  common_mistake:
    es: Confundir caudal con velocidad.
    en: Confusing flow rate with velocity.
  typical_range:
    es: "0.001 - 1 m^3/s."
    en: "0.001 - 1 m^3/s."
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud del flujo volumétrico.
      en: Volumetric flow magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Sin flujo.
      en: No flow.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - efecto-venturi
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: Es la constante que vincula todas las secciones del tubo.
    en: The constant linking all tube sections.
`;export{n as default};
