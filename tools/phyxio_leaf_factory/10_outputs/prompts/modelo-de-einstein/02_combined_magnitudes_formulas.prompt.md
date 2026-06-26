# PROMPT YAML 02-03 | magnitudes.yaml + formulas.yaml

Create a downloadable ZIP file named `modelo-de-einstein_formulas_magnitudes.zip`.
The ZIP must contain exactly two files at the ZIP root: `formulas.yaml` and `magnitudes.yaml`.
Do not print the YAML contents in the chat.
Do not use file markers, Markdown fences, or nested folders.

Each downloaded YAML file must contain raw valid YAML only.

Canonical map context. Use these values exactly where meta.yaml requires canonical fields:
id: modelo-de-einstein
nombre: {'es': 'Modelo de einstein', 'en': 'Einstein Model'}
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: sistemas-modelo
parent_id: solidos-y-calor-especifico
ruta_relativa: fisica-clasica/termodinamica-estadistica/sistemas-modelo/solidos-y-calor-especifico/modelo-de-einstein
orden: 275310
niveles: {'es': ['ESO', 'BACHILLERATO', 'UNIVERSIDAD', 'EXTRACURRICULAR'], 'en': ['Secondary', 'Upper Secondary', 'University', 'Extracurricular']}
icon: 🌡
graficos: ['Coord']
physical_role: {'es': 'concepto físico', 'en': 'physical concept'}

Current magnitudes.yaml:
MAGNITUDES_ACTUAL_INICIO
version: 5.0.0
magnitudes:
- id: temperatura
  symbol: T
  nombre:
    es: temperatura
    en: temperature
  descripcion:
    es: Temperatura absoluta del sólido.
    en: Absolute temperature of the solid.
  unidad_si: K
  dimension: Theta
  is_vector: false
  components: []
  category: thermodynamic_state
  physical_role: independent_variable
  used_in:
  - parametro_reducido_einstein
  - calor_especifico_molar_einstein
  - energia_interna_einstein
  - capacidad_calorifica_total_einstein
  common_mistake: Usar grados Celsius dentro de exponentes en lugar de kelvin.
  typical_range: 1 K a 2000 K
  sign_behavior:
    has_sign: false
    meaning:
      es: La temperatura absoluta no lleva signo en este modelo.
      en: Absolute temperature has no sign in this model.
  zero_behavior:
    allowed: false
    meaning:
      es: T=0 es un límite; no se sustituye directamente en las expresiones exponenciales.
      en: T=0 is a limit; it is not directly substituted in exponential expressions.
  value_nature:
    kind: positive_scalar
    nonnegative_only: true
    expected_interval: T>0
  interpretation_role:
    primary_for:
    - parametro_reducido_einstein
    - calor_especifico_molar_einstein
    secondary_for:
    - energia_interna_einstein
  graph_binding:
    channels:
    - xAxis
    role: independent_axis
  pedagogical_notes:
    es: Controla cuánta excitación térmica supera la separación cuántica vibracional.
    en: Controls how much thermal excitation overcomes the vibrational quantum spacing.
- id: temperatura_einstein
  symbol: theta_E
  nombre:
    es: temperatura de Einstein
    en: Einstein temperature
  descripcion:
    es: Escala térmica asociada a la frecuencia vibracional del sólido.
    en: Thermal scale associated with the solid vibrational frequency.
  unidad_si: K
  dimension: Theta
  is_vector: false
  components: []
  category: material_parameter
  physical_role: parameter
  used_in:
  - temperatura_einstein_frecuencia
  - parametro_reducido_einstein
  - calor_especifico_molar_einstein
  - energia_interna_einstein
  - capacidad_calorifica_total_einstein
  common_mistake: Interpretarla como la temperatura real del sólido.
  typical_range: 50 K a 1500 K
  sign_behavior:
    has_sign: false
    meaning:
      es: Debe ser positiva; codifica rigidez vibracional efectiva.
      en: It must be positive; it encodes effective vibrational stiffness.
  zero_behavior:
    allowed: false
    meaning:
      es: theta_E=0 destruiría la escala cuántica del modelo.
      en: theta_E=0 would destroy the quantum scale of the model.
  value_nature:
    kind: positive_scalar
    nonnegative_only: true
    expected_interval: theta_E>0
  interpretation_role:
    primary_for:
    - temperatura_einstein_frecuencia
    - calor_especifico_molar_einstein
    secondary_for:
    - parametro_reducido_einstein
  graph_binding:
    channels:
    - parameter
    - constant
    role: curve_parameter
  pedagogical_notes:
    es: Una theta_E alta retrasa la aproximación al límite clásico 3R.
    en: A high theta_E delays the approach to the classical 3R limit.
- id: parametro_reducido
  symbol: x
  nombre:
    es: parámetro reducido
    en: reduced parameter
  descripcion:
    es: Cociente theta_E/T que mide el régimen cuántico térmico.
    en: Ratio theta_E/T measuring the thermal quantum regime.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: dimensionless_ratio
  physical_role: auxiliary_variable
  used_in:
  - parametro_reducido_einstein
  common_mistake: Pensar que x grande significa temperatura alta.
  typical_range: 0.01 a 100
  sign_behavior:
    has_sign: false
    meaning:
      es: Es positivo si T y theta_E son positivos.
      en: It is positive if T and theta_E are positive.
  zero_behavior:
    allowed: false
    meaning:
      es: x=0 es solo un límite de temperatura infinita o theta_E nula.
      en: x=0 is only a limit of infinite temperature or zero theta_E.
  value_nature:
    kind: dimensionless_positive
    nonnegative_only: true
    expected_interval: x>0
  interpretation_role:
    primary_for:
    - parametro_reducido_einstein
    secondary_for:
    - calor_especifico_molar_einstein
  graph_binding:
    channels:
    - parameter
    role: reduced_coordinate
  pedagogical_notes:
    es: Resume la competencia entre energía térmica y separación cuántica.
    en: Summarizes the competition between thermal energy and quantum spacing.
- id: calor_especifico_molar_volumen_constante
  symbol: C_Vm
  nombre:
    es: calor específico molar a volumen constante
    en: molar heat capacity at constant volume
  descripcion:
    es: Energía molar requerida por kelvin a volumen constante.
    en: Molar energy required per kelvin at constant volume.
  unidad_si: J mol^-1 K^-1
  dimension: M L^2 T^-2 N^-1 Theta^-1
  is_vector: false
  components: []
  category: thermal_response
  physical_role: dependent_variable
  used_in:
  - calor_especifico_molar_einstein
  common_mistake: Confundirlo con C_V total o imponer 3R a cualquier temperatura.
  typical_range: 0 a 25 J mol^-1 K^-1
  sign_behavior:
    has_sign: false
    meaning:
      es: Debe ser no negativo en un sólido estable descrito por el modelo.
      en: It must be non-negative in a stable solid described by the model.
  zero_behavior:
    allowed: true
    meaning:
      es: C_Vm≈0 aparece como límite de baja temperatura por congelación cuántica.
      en: C_Vm≈0 appears as the low-temperature limit due to quantum freezing.
  value_nature:
    kind: positive_response
    nonnegative_only: true
    expected_interval: 0<=C_Vm<=3*R
  interpretation_role:
    primary_for:
    - calor_especifico_molar_einstein
    secondary_for: []
  graph_binding:
    channels:
    - yAxis
    role: dependent_axis
  pedagogical_notes:
    es: 'Es la magnitud clave: muestra cómo el sólido deja de obedecer equipartición a baja temperatura.'
    en: 'It is the key quantity: it shows how the solid stops obeying equipartition at low temperature.'
- id: capacidad_calorifica_volumen_constante
  symbol: C_V
  nombre:
    es: capacidad calorífica a volumen constante
    en: heat capacity at constant volume
  descripcion:
    es: Capacidad calorífica total del sólido a volumen constante.
    en: Total heat capacity of the solid at constant volume.
  unidad_si: J K^-1
  dimension: M L^2 T^-2 Theta^-1
  is_vector: false
  components: []
  category: thermal_response
  physical_role: dependent_variable
  used_in:
  - capacidad_calorifica_total_einstein
  common_mistake: Mezclar una cantidad total con una cantidad molar.
  typical_range: 0 a 10^6 J K^-1
  sign_behavior:
    has_sign: false
    meaning:
      es: Debe ser no negativa.
      en: It must be non-negative.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede tender a cero a baja temperatura sin anular la energía de punto cero.
      en: It can tend to zero at low temperature without canceling zero-point energy.
  value_nature:
    kind: positive_response
    nonnegative_only: true
    expected_interval: C_V>=0
  interpretation_role:
    primary_for:
    - capacidad_calorifica_total_einstein
    secondary_for:
    - energia_interna_einstein
  graph_binding:
    channels:
    - none
    role: none
  pedagogical_notes:
    es: Depende del tamaño del sistema, a diferencia del valor molar.
    en: It depends on system size, unlike the molar value.
- id: energia_interna
  symbol: U
  nombre:
    es: energía interna
    en: internal energy
  descripcion:
    es: Energía vibracional almacenada en los osciladores del sólido.
    en: Vibrational energy stored in the solid oscillators.
  unidad_si: J
  dimension: M L^2 T^-2
  is_vector: false
  components: []
  category: state_function
  physical_role: state_quantity
  used_in:
  - energia_interna_einstein
  common_mistake: Creer que calor específico cero implica energía interna cero.
  typical_range: 0 a 10^6 J
  sign_behavior:
    has_sign: false
    meaning:
      es: Con la referencia de punto cero incluida es positiva.
      en: With zero-point reference included, it is positive.
  zero_behavior:
    allowed: false
    meaning:
      es: No es cero a T=0 si se incluye energía de punto cero.
      en: It is not zero at T=0 if zero-point energy is included.
  value_nature:
    kind: positive_energy
    nonnegative_only: true
    expected_interval: U>0
  interpretation_role:
    primary_for:
    - energia_interna_einstein
    secondary_for:
    - calor_especifico_molar_einstein
  graph_binding:
    channels:
    - none
    role: none
  pedagogical_notes:
    es: Su derivada respecto a la temperatura está conectada con la capacidad calorífica.
    en: Its derivative with respect to temperature is connected to heat capacity.
- id: numero_atomos
  symbol: N
  nombre:
    es: número de átomos
    en: number of atoms
  descripcion:
    es: Cantidad de átomos modelados como osciladores independientes.
    en: Number of atoms modeled as independent oscillators.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: amount
  physical_role: system_size
  used_in:
  - energia_interna_einstein
  - capacidad_calorifica_total_einstein
  common_mistake: Confundir N con moles n.
  typical_range: 10^20 a 10^25
  sign_behavior:
    has_sign: false
    meaning:
      es: Es positivo y no lleva signo.
      en: It is positive and has no sign.
  zero_behavior:
    allowed: false
    meaning:
      es: N=0 no representa un sólido físico.
      en: N=0 does not represent a physical solid.
  value_nature:
    kind: positive_count
    nonnegative_only: true
    expected_interval: N>0
  interpretation_role:
    primary_for:
    - capacidad_calorifica_total_einstein
    secondary_for:
    - energia_interna_einstein
  graph_binding:
    channels:
    - constant
    role: scale_parameter
  pedagogical_notes:
    es: Escala magnitudes totales, no molarizadas.
    en: It scales total, not molarized, quantities.
- id: constante_boltzmann
  symbol: k_B
  nombre:
    es: constante de Boltzmann
    en: Boltzmann constant
  descripcion:
    es: Constante que conecta energía microscópica y temperatura.
    en: Constant connecting microscopic energy and temperature.
  unidad_si: J K^-1
  dimension: M L^2 T^-2 Theta^-1
  is_vector: false
  components: []
  category: constant
  physical_role: physical_constant
  used_in:
  - temperatura_einstein_frecuencia
  - energia_interna_einstein
  - capacidad_calorifica_total_einstein
  common_mistake: Tratarla como variable ajustable del material.
  typical_range: 1.380649e-23 J K^-1
  sign_behavior:
    has_sign: false
    meaning:
      es: Es una constante positiva.
      en: It is a positive constant.
  zero_behavior:
    allowed: false
    meaning:
      es: No puede anularse en el modelo.
      en: It cannot vanish in the model.
  value_nature:
    kind: positive_constant
    nonnegative_only: true
    expected_interval: k_B>0
  interpretation_role:
    primary_for:
    - temperatura_einstein_frecuencia
    secondary_for:
    - energia_interna_einstein
  graph_binding:
    channels:
    - constant
    role: constant
  pedagogical_notes:
    es: Permite leer k_B*T como escala de energía térmica.
    en: It allows k_B*T to be read as a thermal energy scale.
- id: constante_gases
  symbol: R
  nombre:
    es: constante de los gases
    en: gas constant
  descripcion:
    es: Constante molar R=N_A k_B usada en la versión molar.
    en: Molar constant R=N_A k_B used in the molar version.
  unidad_si: J mol^-1 K^-1
  dimension: M L^2 T^-2 N^-1 Theta^-1
  is_vector: false
  components: []
  category: constant
  physical_role: physical_constant
  used_in:
  - calor_especifico_molar_einstein
  common_mistake: Olvidar que 3R es el límite por mol, no por átomo.
  typical_range: 8.314462618 J mol^-1 K^-1
  sign_behavior:
    has_sign: false
    meaning:
      es: Es positiva.
      en: It is positive.
  zero_behavior:
    allowed: false
    meaning:
      es: R=0 no tiene sentido físico.
      en: R=0 has no physical meaning.
  value_nature:
    kind: positive_constant
    nonnegative_only: true
    expected_interval: R>0
  interpretation_role:
    primary_for:
    - calor_especifico_molar_einstein
    secondary_for: []
  graph_binding:
    channels:
    - constant
    role: limit_scale
  pedagogical_notes:
    es: Fija el límite clásico de Dulong-Petit, 3R.
    en: It sets the classical Dulong-Petit limit, 3R.
- id: frecuencia_angular_einstein
  symbol: omega_E
  nombre:
    es: frecuencia angular de Einstein
    en: Einstein angular frequency
  descripcion:
    es: Frecuencia vibracional única asignada a todos los osciladores.
    en: Single vibrational frequency assigned to all oscillators.
  unidad_si: rad s^-1
  dimension: T^-1
  is_vector: false
  components: []
  category: material_parameter
  physical_role: parameter
  used_in:
  - temperatura_einstein_frecuencia
  common_mistake: Suponer que un sólido real tiene exactamente una sola frecuencia.
  typical_range: 10^12 a 10^14 rad s^-1
  sign_behavior:
    has_sign: false
    meaning:
      es: Debe ser positiva.
      en: It must be positive.
  zero_behavior:
    allowed: false
    meaning:
      es: omega_E=0 eliminaría la cuantización vibracional.
      en: omega_E=0 would remove vibrational quantization.
  value_nature:
    kind: positive_scalar
    nonnegative_only: true
    expected_interval: omega_E>0
  interpretation_role:
    primary_for:
    - temperatura_einstein_frecuencia
    secondary_for:
    - calor_especifico_molar_einstein
  graph_binding:
    channels:
    - constant
    role: material_parameter
  pedagogical_notes:
    es: 'Es la gran idealización del modelo: toda la red vibra con una frecuencia efectiva.'
    en: 'It is the model''s major idealization: the whole lattice vibrates with one effective frequency.'
- id: constante_planck_reducida
  symbol: hbar
  nombre:
    es: constante de Planck reducida
    en: reduced Planck constant
  descripcion:
    es: Constante cuánti

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]
MAGNITUDES_ACTUAL_FIN

Current formulas.yaml:
FORMULAS_ACTUAL_INICIO
version: 5.0.0
ui:
  default_formula: calor_especifico_molar_einstein
formulas:
- id: parametro_reducido_einstein
  title:
    es: Parámetro reducido de Einstein
    en: Einstein reduced parameter
  equation: x=theta_E/T
  latex: x=\frac{\theta_E}{T}
  rearrangements:
  - target: theta_E
    equation: theta_E=x*T
    latex: \theta_E=xT
  - target: T
    equation: T=theta_E/x
    latex: T=\frac{\theta_E}{x}
  category: termodinamica_estadistica
  relation_type: definition
  physical_meaning:
    es: Compara la temperatura de Einstein con la temperatura real del sólido.
    en: Compares the Einstein temperature with the actual temperature of the solid.
  constraints:
    es: T debe ser positiva y theta_E debe ser positiva.
    en: T must be positive and theta_E must be positive.
  validity:
    es: Útil en el modelo de Einstein para expresar el régimen térmico cuántico.
    en: Useful in the Einstein model to express the quantum thermal regime.
  dimension_check: '[x]=1 porque theta_E y T son temperaturas.'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - calor_especifico_molar_einstein
  - energia_interna_einstein
  interpretation_tags:
  - temperatura
  - regimen_cuantico
  - variable_reducida
  result_semantics:
    target: parametro_reducido
    kind: dimensionless_ratio
    sign_meaning:
      es: Siempre positivo; valores grandes indican baja temperatura frente a theta_E.
      en: Always positive; large values indicate low temperature relative to theta_E.
    absolute_value_meaning:
      es: Mide cuán congelados están los modos vibracionales.
      en: Measures how frozen the vibrational modes are.
  domain_checks:
  - id: temperatura_positiva
    condition: T>0
    message:
      es: La temperatura absoluta debe ser mayor que cero.
      en: Absolute temperature must be greater than zero.
  - id: theta_positiva
    condition: theta_E>0
    message:
      es: La temperatura de Einstein debe ser positiva.
      en: Einstein temperature must be positive.
  coherence_checks:
  - id: x_adimensional
    condition: dimension(x)==1
    message:
      es: x no puede tener unidades.
      en: x cannot have units.
  graph_implications:
    es: 'Puede usarse como eje horizontal alternativo: al crecer x, disminuye el calor específico.'
    en: 'It can be used as an alternative horizontal axis: as x grows, heat capacity decreases.'
  pedagogical_triggers:
  - es: Si x es grande, no significa temperatura alta sino T baja respecto a theta_E.
    en: If x is large, it does not mean high temperature but low T relative to theta_E.
- id: temperatura_einstein_frecuencia
  title:
    es: Temperatura de Einstein
    en: Einstein temperature
  equation: theta_E=hbar*omega_E/k_B
  latex: \theta_E=\frac{\hbar\omega_E}{k_B}
  rearrangements:
  - target: omega_E
    equation: omega_E=theta_E*k_B/hbar
    latex: \omega_E=\frac{\theta_E k_B}{\hbar}
  category: termodinamica_estadistica
  relation_type: definition
  physical_meaning:
    es: Traduce la frecuencia vibracional característica del sólido a una escala de temperatura.
    en: Converts the characteristic vibrational frequency of the solid into a temperature scale.
  constraints:
    es: omega_E, hbar y k_B son positivos.
    en: omega_E, hbar, and k_B are positive.
  validity:
    es: Supone que todos los átomos vibran con una única frecuencia de Einstein.
    en: Assumes all atoms vibrate with a single Einstein frequency.
  dimension_check: '[theta_E]=K porque [hbar*omega_E]=J y [k_B]=J/K.'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - parametro_reducido_einstein
  - calor_especifico_molar_einstein
  - energia_interna_einstein
  interpretation_tags:
  - escala_termica
  - frecuencia
  - cuantizacion
  result_semantics:
    target: temperatura_einstein
    kind: positive_scale
    sign_meaning:
      es: Debe ser positiva; no representa una temperatura de enfriamiento.
      en: It must be positive; it is not a cooling temperature.
    absolute_value_meaning:
      es: Cuanto mayor es theta_E, más temperatura se necesita para activar vibraciones.
      en: The larger theta_E is, the more temperature is needed to activate vibrations.
  domain_checks:
  - id: frecuencia_positiva
    condition: omega_E>0
    message:
      es: La frecuencia angular debe ser positiva.
      en: Angular frequency must be positive.
  coherence_checks:
  - id: energia_temperatura
    condition: dimension(hbar*omega_E/k_B)==K
    message:
      es: La conversión energía-temperatura debe dar kelvin.
      en: The energy-temperature conversion must give kelvin.
  graph_implications:
    es: 'theta_E desplaza la curva de calor específico: materiales con theta_E mayor alcanzan el límite clásico más tarde.'
    en: 'theta_E shifts the heat capacity curve: materials with larger theta_E reach the classical limit later.'
  pedagogical_triggers:
  - es: No confundas theta_E con la temperatura T medida del sólido.
    en: Do not confuse theta_E with the measured temperature T of the solid.
- id: calor_especifico_molar_einstein
  title:
    es: Calor específico molar de Einstein
    en: Einstein molar heat capacity
  equation: C_Vm=3*R*(theta_E/T)^2*exp(theta_E/T)/(exp(theta_E/T)-1)^2
  latex: C_{V,m}=3R\left(\frac{\theta_E}{T}\right)^2\frac{e^{\theta_E/T}}{(e^{\theta_E/T}-1)^2}
  rearrangements: []
  category: termodinamica_estadistica
  relation_type: constitutive_model
  physical_meaning:
    es: Da el calor específico molar a volumen constante de un sólido tratado como osciladores cuánticos idénticos.
    en: Gives the constant-volume molar heat capacity of a solid treated as identical quantum oscillators.
  constraints:
    es: T>0, theta_E>0 y el sólido se aproxima por una sola frecuencia vibracional.
    en: T>0, theta_E>0, and the solid is approximated by a single vibrational frequency.
  validity:
    es: Describe la caída cuántica a baja temperatura y recupera 3R a alta temperatura, pero no reproduce exactamente la ley
      T³ de Debye.
    en: It describes the quantum drop at low temperature and recovers 3R at high temperature, but does not exactly reproduce
      Debye's T³ law.
  dimension_check: '[C_Vm]=J mol^-1 K^-1 porque R tiene esa unidad y el factor restante es adimensional.'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - grafica_calor_temperatura_einstein
  interpretation_tags:
  - calor_especifico
  - temperatura
  - limite_clasico
  - congelacion_cuantica
  result_semantics:
    target: calor_especifico_molar_volumen_constante
    kind: positive_response
    sign_meaning:
      es: Debe ser no negativo; un valor negativo no es físico en este modelo.
      en: It must be non-negative; a negative value is not physical in this model.
    absolute_value_meaning:
      es: Mide la energía molar adicional necesaria por kelvin a volumen constante.
      en: Measures the additional molar energy required per kelvin at constant volume.
  domain_checks:
  - id: temperatura_no_cero
    condition: T>0
    message:
      es: La fórmula no acepta T igual a cero en evaluación directa.
      en: The formula does not accept T equal to zero in direct evaluation.
  - id: theta_no_cero
    condition: theta_E>0
    message:
      es: theta_E debe ser positiva para definir la escala del modelo.
      en: theta_E must be positive to define the model scale.
  coherence_checks:
  - id: limite_dulong_petit
    condition: T>>theta_E implies C_Vm≈3*R
    message:
      es: A alta temperatura debe acercarse a 3R.
      en: At high temperature it must approach 3R.
  - id: limite_baja_T
    condition: T<<theta_E implies C_Vm≈0
    message:
      es: A baja temperatura debe tender a cero.
      en: At low temperature it must tend to zero.
  graph_implications:
    es: La gráfica C_Vm frente a T sube desde cero y se aproxima asintóticamente a 3R.
    en: The C_Vm versus T graph rises from zero and approaches 3R asymptotically.
  pedagogical_triggers:
  - es: 'El límite 3R no vale a baja temperatura: ahí dominan los efectos cuánticos.'
    en: 'The 3R limit does not apply at low temperature: quantum effects dominate there.'
- id: energia_interna_einstein
  title:
    es: Energía interna de Einstein
    en: Einstein internal energy
  equation: U=3*N*k_B*theta_E*(1/2+1/(exp(theta_E/T)-1))
  latex: U=3Nk_B\theta_E\left(\frac{1}{2}+\frac{1}{e^{\theta_E/T}-1}\right)
  rearrangements: []
  category: termodinamica_estadistica
  relation_type: state_function
  physical_meaning:
    es: Representa la energía vibracional total incluyendo energía de punto cero y excitación térmica.
    en: Represents total vibrational energy including zero-point energy and thermal excitation.
  constraints:
    es: N, k_B, theta_E y T son positivos; los osciladores se consideran independientes.
    en: N, k_B, theta_E, and T are positive; the oscillators are considered independent.
  validity:
    es: Válida dentro del modelo de osciladores armónicos cuánticos idénticos e independientes.
    en: Valid within the model of identical independent quantum harmonic oscillators.
  dimension_check: '[U]=J porque N es adimensional y k_B*theta_E es energía.'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - calor_especifico_molar_einstein
  interpretation_tags:
  - energia_interna
  - punto_cero
  - excitacion_termica
  result_semantics:
    target: energia_interna
    kind: positive_energy
    sign_meaning:
      es: Es positiva con la referencia que incluye energía de punto cero.
      en: It is positive with the reference including zero-point energy.
    absolute_value_meaning:
      es: Indica la energía vibracional almacenada en el sólido.
      en: Indicates the vibrational energy stored in the solid.
  domain_checks:
  - id: numero_atomos_positivo
    condition: N>0
    message:
      es: El número de átomos debe ser positivo.
      en: The number of atoms must be positive.
  coherence_checks:
  - id: crece_con_temperatura
    condition: dU/dT>=0
    message:
      es: La energía interna debe crecer con la temperatura.
      en: Internal energy must increase with temperature.
  graph_implications:
    es: La pendiente térmica de U está relacionada con la capacidad calorífica.
    en: The thermal slope of U is related to heat capacity.
  pedagogical_triggers:
  - es: La energía de punto cero no implica calor específico distinto de cero a T muy baja.
    en: Zero-point energy does not imply nonzero heat capacity at very low T.
- id: capacidad_calorifica_total_einstein
  title:
    es: Capacidad calorífica total de Einstein
    en: Einstein total heat capacity
  equation: C_V=3*N*k_B*(theta_E/T)^2*exp(theta_E/T)/(exp(theta_E/T)-1)^2
  latex: C_V=3Nk_B\left(\frac{\theta_E}{T}\right)^2\frac{e^{\theta_E/T}}{(e^{\theta_E/T}-1)^2}
  rearrangements: []
  category: termodinamica_estadistica
  relation_type: constitutive_model
  physical_meaning:
    es: Relaciona la capacidad calorífica total con el número de átomos del sólido.
    en: Relates total heat capacity to the number of atoms in the solid.
  constraints:
    es: N>0, T>0 y theta_E>0.
    en: N>0, T>0, and theta_E>0.
  validity:
    es: Usa la misma aproximación de frecuencia única que el modelo de Einstein.
    en: Uses the same single-frequency approximation as the Einstein model.
  dimension_check: '[C_V]=J K^-1 porque N es adimensional y k_B aporta J/K.'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - calor_especifico_molar_einstein
  interpretation_tags:
  - capacidad_calorifica
  - sistema_total
  - numero_atomos
  result_semantics:
    target: capacidad_calorifica_volumen_constante
    kind: positive_response
    sign_meaning:
      es: Debe ser no negativa.
      en: It must be non-negative.
    absolute_value_meaning:
      es: Mide la energía total necesaria para elevar un kelvin el sólido.
      en: Measures the total energy needed to raise the solid by one kelvin.
  domain_checks:
  - id: N_positivo
    condition: N>0
    message:
      es: N debe ser positivo.
      en: N must be positive.
  coherence_checks:
  - id: proporcional_a_N
    condition: C_V proportional N
    message:
      es: Duplicar N duplica C_V si T y theta_E no cambian.
      en: Doubling N doubles C_V if T and theta_E do not change.
  graph_implications:
    es: Escala verticalmente la curva según el tamaño del sistema.
    en: It vertically scales the curve according to system size.
  pedagogical_triggers:
  - es: No mezcles capacidad total C_V con calor específico molar C_Vm.
    en: Do not mix total heat capacity C_V with molar heat capacity C_Vm.
FORMULAS_ACTUAL_FIN

formulas.yaml contract:
- version must be "5.0.0".
- ui.default_formula must be the main formula id.
- formulas must be a non-empty list of domain formulas.
- Every formula must use the v5 field names exactly. Do not use legacy keys nombre, descripcion, used, limits, common_mistakes, or result_semantics.meaning/sign/unit.
- Every formula requires exactly these top-level fields: id, title, equation, latex, rearrangements, category, relation_type, physical_meaning, constraints, validity, dimension_check, calculable, motivo_no_calculable, used_in, interpretation_tags, result_semantics, domain_checks, coherence_checks, graph_implications, pedagogical_triggers.
- title, physical_meaning, and validity must be bilingual blocks with es and en.
- result_semantics requires target, kind, sign_meaning.es/en, absolute_value_meaning.es/en.
- rearrangements must include all physically useful solved forms, each with target, equation, latex.
- In equation and rearrangements.equation, write explicit multiplication with `*`: use `j*A`, not `jA`; use `epsilon*sigma*A*T^4`, not implicit products.
- latex fields must not include delimiters \( \) or \[ \].
- result_semantics.target must be a magnitude id that exists in magnitudes.yaml.

Required formula item shape:
- id: ley_x
  title: {es: "...", en: "..."}
  equation: "P = epsilon*sigma*A*T^4"
  latex: "P = \\varepsilon \\sigma A T^4"
  rearrangements:
    - target: temperatura_absoluta
      equation: "T = (P/(epsilon*sigma*A))^(1/4)"
      latex: "T = \\left(\\frac{P}{\\varepsilon \\sigma A}\\right)^{1/4}"
  category: "law"
  relation_type: "proportional_power"
  physical_meaning: {es: "...", en: "..."}
  constraints: {es: "...", en: "..."}
  validity: {es: "...", en: "..."}
  dimension_check: "..."
  calculable: true
  motivo_no_calculable: ""
  used_in: [potencia_radiada, temperatura_absoluta]
  interpretation_tags: [nonlinear, fourth_power]
  result_semantics:
    target: potencia_radiada
    kind: scalar_nonnegative
    sign_meaning: {es: "...", en: "..."}
    absolute_value_meaning: {es: "...", en: "..."}
  domain_checks: [{id: dominio, rule: "...", message: {es: "...", en: "..."}}]
  coherence_checks: [{id: coherencia, rule: "...", message: {es: "...", en: "..."}}]
  graph_implications: {coord: {shape: "...", x: "...", y: "..."}}
  pedagogical_triggers: [{id: error_tipico, condition: "...", feedback: {es: "...", en: "..."}}]

magnitudes.yaml contract:
- version must be "5.0.0".
- magnitudes must include every input, parameter, constant, component, and calculable result needed by formulas and interpretation.
- Every magnitude requires exactly these top-level fields: id, symbol, nombre, descripcion, unidad_si, dimension, is_vector, components, category, physical_role, used_in, common_mistake, typical_range, sign_behavior, zero_behavior, value_nature, interpretation_role, graph_binding, pedagogical_notes.
- nombre, descripcion, sign_behavior.meaning, zero_behavior.meaning, and pedagogical_notes must be bilingual blocks with es and en.
- graph_binding is mandatory for every magnitude. Do not use graph_role.
- graph_binding.channels must be a list. Use values such as xAxis, yAxis, parameter, constant, none.
- pedagogical_notes.es/en must contain useful explanatory text, not empty strings.
- ids must be lowercase ASCII with underscores, no spaces, no accents.
- used_in must reference formula ids from formulas.yaml.
- If a formula uses a magnitude id, that magnitude must exist.
- If a magnitude is calculable, at least one formula should target it.

Required magnitude item shape:
- id: temperatura_absoluta
  symbol: T
  nombre: {es: "...", en: "..."}
  descripcion: {es: "...", en: "..."}
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: estado_termico
  physical_role: variable_independiente
  used_in: [ley_stefan_boltzmann]
  common_mistake: "..."
  typical_range: "..."
  sign_behavior:
    has_sign: false
    meaning: {es: "...", en: "..."}
  zero_behavior:
    allowed: true
    meaning: {es: "...", en: "..."}
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "T >= 0 K"
  interpretation_role:
    primary_for: [ley_stefan_boltzmann]
    secondary_for: []
  graph_binding:
    channels: [xAxis]
  pedagogical_notes:
    es: "..."
    en: "..."

Physics quality:
- Include only formulas that belong to this leaf's physics domain.
- Include assumptions and validity limits that distinguish this leaf from neighboring concepts.
- Prefer standard physics notation and correct SI dimensions.
