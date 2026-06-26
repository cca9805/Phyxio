const e=`version: 5
topic:
  id: pendulo-fisico-avanzado
  title: { es: Pendulo fisico avanzado, en: Advanced Physical Pendulum }
formulas:
- id: ecuacion_no_lineal_pf
  title: { es: Ecuacion no lineal exacta, en: Exact nonlinear equation }
  equation: I_O*theta_dd + m*g*d*sin(theta) = 0
  latex: I_O\\theta_{dd}+mgd\\sin\\theta=0
  category: dinamica_no_lineal
  relation_type: ecuacion_diferencial
  physical_meaning: { es: Plantea el balance entre inercia angular y torque gravitatorio sin aproximar el seno., en: States the balance between angular inertia and gravitational torque without approximating the sine. }
  constraints: [ I_O > 0, m > 0, g > 0, d > 0 ]
  validity: { es: Valida para cuerpo rigido, pivote fijo, gravedad uniforme y rozamiento despreciable., en: Valid for a rigid body, fixed pivot, uniform gravity, and negligible friction. }
  dimension_check: "[N m] = [N m]"
  calculable: false
  motivo_no_calculable: { es: "Requiere resolver una ecuacion diferencial no lineal.", en: "Requires solving a nonlinear differential equation." }
  used_in: [ omega0_pf_av, energia_pf_av ]
  interpretation_tags: [ dinamica, no_lineal, torque ]
  result_semantics:
    target: theta_dd
    kind: dynamic_response
  domain_checks: [ I_O > 0, d > 0 ]
  coherence_checks: [ torque_gravitatorio ]
  graph_implications: "El Svg debe mostrar que [[theta]] es el angulo real respecto al equilibrio."
  pedagogical_triggers: [ seno_exacto, amplitud_finita ]
  rearrangements:
  - target: theta_dd
    equation: -m*g*d*sin(theta)/I_O
  variables: [ I_O, theta_dd, m, g, d, theta ]
- id: omega0_pf_av
  title: { es: Pulsacion natural linealizada, en: Linearized natural angular frequency }
  equation: omega0 = sqrt(m*g*d/I_O)
  latex: \\omega_0=\\sqrt{\\frac{mgd}{I_O}}
  category: linealizacion
  relation_type: frecuencia_natural
  physical_meaning: { es: Da la escala temporal para pequenas oscilaciones alrededor del equilibrio., en: Gives the time scale for small oscillations around equilibrium. }
  constraints: [ I_O > 0, m > 0, g > 0, d > 0 ]
  validity: { es: Valida cuando el angulo es pequeno y el seno puede aproximarse por el angulo., en: Valid when the angle is small and sine can be approximated by the angle. }
  dimension_check: "[T^-1] = sqrt([kg][m s^-2][m]/[kg m^2])"
  calculable: true
  motivo_no_calculable: { es: "Requiere [[m]], [[g]], [[d]] e [[I_O]].", en: "Requires [[m]], [[g]], [[d]], and [[I_O]]." }
  used_in: [ periodo_lineal_pf_av ]
  interpretation_tags: [ frecuencia, linealizacion, pequenas_oscilaciones ]
  result_semantics:
    target: omega0
    kind: characteristic_rate
  domain_checks: [ I_O > 0, d > 0 ]
  coherence_checks: [ omega0 > 0 ]
  graph_implications: "Al variar [[d]] o [[I_O]], cambia [[omega0]]."
  pedagogical_triggers: [ aproximacion_angular, frecuencia_propia ]
  rearrangements:
  - target: omega0
    equation: sqrt(m*g*d/I_O)
  - target: I_O
    equation: m*g*d/(omega0^2)
  - target: d
    equation: I_O*(omega0^2)/(m*g)
  variables: [ omega0, m, g, d, I_O ]
- id: periodo_lineal_pf_av
  title: { es: Periodo lineal, en: Linear period }
  equation: T0 = 2*pi*sqrt(I_O/(m*g*d))
  latex: T_0=2\\pi\\sqrt{\\frac{I_O}{mgd}}
  category: periodo
  relation_type: periodo_lineal
  physical_meaning: { es: Calcula el periodo de pequenas oscilaciones del cuerpo rigido., en: Computes the small-oscillation period of the rigid body. }
  constraints: [ I_O > 0, m > 0, g > 0, d > 0 ]
  validity: { es: Valida para oscilaciones pequenas, pivote fijo y cuerpo rigido., en: Valid for small oscillations, fixed pivot, and rigid body. }
  dimension_check: "[T] = sqrt([kg m^2]/([kg][m s^-2][m]))"
  calculable: true
  motivo_no_calculable: { es: "Requiere [[I_O]], [[m]], [[g]] y [[d]].", en: "Requires [[I_O]], [[m]], [[g]], and [[d]]." }
  used_in: [ longitud_equivalente_pf_av ]
  interpretation_tags: [ periodo, medicion, lineal ]
  result_semantics:
    target: T0
    kind: characteristic_time
  domain_checks: [ I_O > 0, d > 0 ]
  coherence_checks: [ T0 > 0 ]
  graph_implications: "La grafica Coord puede mostrar [[T0]] frente a [[d]]."
  pedagogical_triggers: [ periodo_medido, inferencia_inercia ]
  rearrangements:
  - target: T0
    equation: 2*pi*sqrt(I_O/(m*g*d))
  - target: I_O
    equation: (T0^2*m*g*d)/(4*pi^2)
  - target: d
    equation: (4*pi^2*I_O)/(T0^2*m*g)
  variables: [ T0, I_O, m, g, d ]
- id: steiner_pf_av
  title: { es: Teorema de ejes paralelos, en: Parallel-axis theorem }
  equation: I_O = I_cm + m*d^2
  latex: I_O=I_{CM}+md^2
  category: geometria_inercial
  relation_type: ejes_paralelos
  physical_meaning: { es: Relaciona la inercia respecto al pivote con la inercia del centro de masas., en: Relates pivot inertia to center-of-mass inertia. }
  constraints: [ m > 0, I_cm > 0, d >= 0, I_O >= I_cm ]
  validity: { es: Valida para ejes paralelos y cuerpo rigido., en: Valid for parallel axes and a rigid body. }
  dimension_check: "[kg m^2] = [kg m^2] + [kg][m^2]"
  calculable: true
  motivo_no_calculable: { es: "Requiere [[I_cm]], [[m]] y [[d]].", en: "Requires [[I_cm]], [[m]], and [[d]]." }
  used_in: [ periodo_lineal_pf_av, longitud_equivalente_pf_av ]
  interpretation_tags: [ steiner, pivote, inercia ]
  result_semantics:
    target: I_O
    kind: inertia_about_pivot
  domain_checks: [ I_O >= I_cm, m > 0 ]
  coherence_checks: [ I_O > 0 ]
  graph_implications: "El Svg debe distinguir pivote, centro de masas y distancia [[d]]."
  pedagogical_triggers: [ eje_real, distribucion_de_masa ]
  rearrangements:
  - target: I_O
    equation: I_cm + m*d^2
  - target: I_cm
    equation: I_O - m*d^2
  - target: d
    equation: sqrt((I_O - I_cm)/m)
  variables: [ I_O, I_cm, m, d ]
- id: longitud_equivalente_pf_av
  title: { es: Longitud equivalente, en: Equivalent length }
  equation: leq = I_O/(m*d)
  latex: \\ell_{eq}=\\frac{I_O}{md}
  category: equivalencia
  relation_type: pendulo_simple_equivalente
  physical_meaning: { es: Da la longitud de un pendulo simple con el mismo periodo lineal., en: Gives the simple-pendulum length with the same linear period. }
  constraints: [ I_O > 0, m > 0, d > 0 ]
  validity: { es: Valida como equivalencia de pequenas oscilaciones, no como longitud geometrica real., en: Valid as a small-oscillation equivalence, not as a real geometric length. }
  dimension_check: "[m] = [kg m^2]/([kg][m])"
  calculable: true
  motivo_no_calculable: { es: "Requiere [[I_O]], [[m]] y [[d]].", en: "Requires [[I_O]], [[m]], and [[d]]." }
  used_in: [ periodo_lineal_pf_av ]
  interpretation_tags: [ equivalencia, longitud, comparacion ]
  result_semantics:
    target: leq
    kind: equivalent_length
  domain_checks: [ d > 0, m > 0 ]
  coherence_checks: [ leq > 0 ]
  graph_implications: "[[leq]] ayuda a comparar el cuerpo rigido con un pendulo simple."
  pedagogical_triggers: [ comparacion_simple_fisico, intuicion ]
  rearrangements:
  - target: leq
    equation: I_O/(m*d)
  - target: I_O
    equation: leq*m*d
  - target: d
    equation: I_O/(m*leq)
  variables: [ leq, I_O, m, d ]
- id: energia_pf_av
  title: { es: Energia mecanica, en: Mechanical energy }
  equation: E = 0.5*I_O*theta_dot^2 + m*g*d*(1-cos(theta))
  latex: E=\\frac{1}{2}I_O\\theta_d^2+mgd(1-\\cos\\theta)
  category: energia
  relation_type: conservacion_energetica
  physical_meaning: { es: Expresa la energia conservada del pendulo fisico ideal., en: Expresses conserved energy of the ideal physical pendulum. }
  constraints: [ I_O > 0, m > 0, g > 0, d > 0 ]
  validity: { es: Valida sin rozamiento y con pivote fijo; permite analizar amplitudes finitas., en: Valid without friction and with fixed pivot; allows analysis of finite amplitudes. }
  dimension_check: "[J] = [kg m^2][s^-2] + [kg][m s^-2][m]"
  calculable: true
  motivo_no_calculable: { es: "Requiere [[I_O]], [[theta_dot]], [[m]], [[g]], [[d]] y [[theta]].", en: "Requires [[I_O]], [[theta_dot]], [[m]], [[g]], [[d]], and [[theta]]." }
  used_in: [ ecuacion_no_lineal_pf ]
  interpretation_tags: [ energia, amplitud_finita, conservacion ]
  result_semantics:
    target: E
    kind: energy_integral
  domain_checks: [ I_O > 0, d > 0 ]
  coherence_checks: [ E >= 0 ]
  graph_implications: "El Svg puede mostrar conversion entre energia potencial y cinetica."
  pedagogical_triggers: [ energia_rotacional, no_linealidad ]
  rearrangements:
  - target: E
    equation: 0.5*I_O*theta_dot^2 + m*g*d*(1-cos(theta))
  variables: [ E, I_O, theta_dot, m, g, d, theta ]
ui:
  default_formula: periodo_lineal_pf_av
  groups:
  - title: { es: Linealizacion y periodo, en: Linearization and period }
    items: [ omega0_pf_av, periodo_lineal_pf_av, longitud_equivalente_pf_av ]
  - title: { es: Inercia y energia, en: Inertia and energy }
    items: [ steiner_pf_av, ecuacion_no_lineal_pf, energia_pf_av ]
`;export{e as default};
