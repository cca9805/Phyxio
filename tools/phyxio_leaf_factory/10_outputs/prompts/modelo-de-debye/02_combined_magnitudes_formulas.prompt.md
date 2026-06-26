# PROMPT YAML 02-03 | magnitudes.yaml + formulas.yaml

Create a downloadable ZIP file named `modelo-de-debye_formulas_magnitudes.zip`.
The ZIP must contain exactly two files at the ZIP root: `formulas.yaml` and `magnitudes.yaml`.
Do not print the YAML contents in the chat.
Do not use file markers, Markdown fences, or nested folders.

Each downloaded YAML file must contain raw valid YAML only.

Canonical map context. Use these values exactly where meta.yaml requires canonical fields:
id: modelo-de-debye
nombre: {'es': 'Modelo de debye', 'en': 'Debye Model'}
area: fisica-clasica
bloque: termodinamica-estadistica
subbloque: sistemas-modelo
parent_id: solidos-y-calor-especifico
ruta_relativa: fisica-clasica/termodinamica-estadistica/sistemas-modelo/solidos-y-calor-especifico/modelo-de-debye
orden: 275320
niveles: {'es': ['ESO', 'BACHILLERATO', 'UNIVERSIDAD', 'EXTRACURRICULAR'], 'en': ['Secondary', 'Upper Secondary', 'University', 'Extracurricular']}
icon: ✅
graficos: ['Coord']
physical_role: {'es': 'concepto físico', 'en': 'physical concept'}

Current magnitudes.yaml:
MAGNITUDES_ACTUAL_INICIO
version: 5.0.0
magnitudes:
- id: calor_especifico
  symbol: C_V
  nombre:
    es: calor específico
    en: heat capacity
  descripcion:
    es: Energía necesaria para elevar un kelvin la temperatura del sólido.
    en: Energy needed to raise the solid temperature by one kelvin.
  unidad_si: J/K
  dimension: M L^2 T^-2 Θ^-1
  is_vector: false
  components: []
  category: response
  physical_role: resultado térmico
  used_in:
  - calor_especifico_debye_baja_temperatura
  - limite_dulong_petit
  - calor_especifico_debye_integral
  common_mistake: Confundir calor específico total con calor específico molar.
  typical_range: 0 a 3Nk_B en la contribución vibracional armónica.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - calor_especifico_debye_integral
    secondary_for:
    - calor_especifico_debye_baja_temperatura
    - limite_dulong_petit
  graph_binding:
    channels:
    - yAxis
    preferred_axis: yAxis
  pedagogical_notes:
    es: Usa [[calor_especifico]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[calor_especifico]] within the Debye regime and always check SI units.
- id: calor_especifico_molar
  symbol: C_m
  nombre:
    es: calor específico molar
    en: molar heat capacity
  descripcion:
    es: Calor específico por mol de átomos del sólido.
    en: Heat capacity per mole of atoms in the solid.
  unidad_si: J/(mol*K)
  dimension: M L^2 T^-2 Θ^-1 N^-1
  is_vector: false
  components: []
  category: response
  physical_role: magnitud dominante
  used_in:
  - limite_dulong_petit
  common_mistake: Usar 3k_B en lugar de 3R para magnitudes molares.
  typical_range: 0 a aproximadamente 24.94 J/(mol*K) en el límite clásico.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - limite_dulong_petit
    secondary_for:
    - calor_especifico_debye_integral
  graph_binding:
    channels:
    - yAxis
    preferred_axis: yAxis
  pedagogical_notes:
    es: Usa [[calor_especifico_molar]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[calor_especifico_molar]] within the Debye regime and always check SI units.
- id: temperatura
  symbol: T
  nombre:
    es: temperatura
    en: temperature
  descripcion:
    es: Temperatura absoluta del sólido en equilibrio térmico.
    en: Absolute temperature of the solid in thermal equilibrium.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: thermal_state
  physical_role: variable independiente
  used_in:
  - variable_reducida_debye
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  common_mistake: Usar Celsius en cocientes térmicos.
  typical_range: 1 K a 1000 K según el material.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - variable_reducida_debye
  graph_binding:
    channels:
    - xAxis
    preferred_axis: xAxis
  pedagogical_notes:
    es: Usa [[temperatura]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[temperatura]] within the Debye regime and always check SI units.
- id: temperatura_debye
  symbol: ΘD
  nombre:
    es: temperatura de Debye
    en: Debye temperature
  descripcion:
    es: Temperatura característica asociada a la frecuencia máxima de fonones del sólido.
    en: Characteristic temperature associated with the maximum phonon frequency of the solid.
  unidad_si: K
  dimension: Θ
  is_vector: false
  components: []
  category: material_parameter
  physical_role: parámetro de material
  used_in:
  - temperatura_debye
  - variable_reducida_debye
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  common_mistake: Tratarla como temperatura ambiental.
  typical_range: Decenas a miles de kelvin.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - temperatura_debye
    secondary_for:
    - variable_reducida_debye
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Usa [[temperatura_debye]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[temperatura_debye]] within the Debye regime and always check SI units.
- id: frecuencia_debye
  symbol: ωD
  nombre:
    es: frecuencia de Debye
    en: Debye frequency
  descripcion:
    es: Frecuencia angular máxima del espectro de Debye.
    en: Maximum angular frequency of the Debye spectrum.
  unidad_si: rad/s
  dimension: T^-1
  is_vector: false
  components: []
  category: spectral_cutoff
  physical_role: corte espectral
  used_in:
  - temperatura_debye
  common_mistake: Confundir frecuencia angular con frecuencia en Hz sin factor 2π.
  typical_range: 10^12 a 10^14 rad/s.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for:
    - temperatura_debye
    secondary_for: []
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Usa [[frecuencia_debye]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[frecuencia_debye]] within the Debye regime and always check SI units.
- id: hbar
  symbol: ℏ
  nombre:
    es: constante de Planck reducida
    en: reduced Planck constant
  descripcion:
    es: Constante cuántica que convierte frecuencia angular en energía.
    en: Quantum constant converting angular frequency into energy.
  unidad_si: J*s
  dimension: M L^2 T^-1
  is_vector: false
  components: []
  category: constant
  physical_role: constante física
  used_in:
  - temperatura_debye
  common_mistake: Cambiar ℏ por h sin ajustar 2π.
  typical_range: 1.054e-34 J*s.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - temperatura_debye
  graph_binding:
    channels:
    - constant
    preferred_axis: constant
  pedagogical_notes:
    es: Usa [[hbar]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[hbar]] within the Debye regime and always check SI units.
- id: constante_boltzmann
  symbol: k_B
  nombre:
    es: constante de Boltzmann
    en: Boltzmann constant
  descripcion:
    es: Constante que conecta temperatura absoluta con energía térmica.
    en: Constant connecting absolute temperature with thermal energy.
  unidad_si: J/K
  dimension: M L^2 T^-2 Θ^-1
  is_vector: false
  components: []
  category: constant
  physical_role: constante física
  used_in:
  - temperatura_debye
  - calor_especifico_debye_baja_temperatura
  - limite_dulong_petit
  - calor_especifico_debye_integral
  common_mistake: Olvidar que k_B usa kelvin absoluto.
  typical_range: 1.381e-23 J/K.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - limite_dulong_petit
  graph_binding:
    channels:
    - constant
    preferred_axis: constant
  pedagogical_notes:
    es: Usa [[constante_boltzmann]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[constante_boltzmann]] within the Debye regime and always check SI units.
- id: constante_gases
  symbol: R
  nombre:
    es: constante de los gases
    en: gas constant
  descripcion:
    es: Constante molar equivalente a N_A k_B.
    en: Molar constant equal to N_A k_B.
  unidad_si: J/(mol*K)
  dimension: M L^2 T^-2 Θ^-1 N^-1
  is_vector: false
  components: []
  category: constant
  physical_role: constante molar
  used_in:
  - limite_dulong_petit
  common_mistake: Mezclar R con k_B sin convertir moles a partículas.
  typical_range: 8.314 J/(mol*K).
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - limite_dulong_petit
  graph_binding:
    channels:
    - constant
    preferred_axis: constant
  pedagogical_notes:
    es: Usa [[constante_gases]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[constante_gases]] within the Debye regime and always check SI units.
- id: numero_atomos
  symbol: N
  nombre:
    es: número de átomos
    en: number of atoms
  descripcion:
    es: Cantidad de átomos vibrantes incluidos en el sólido modelado.
    en: Number of vibrating atoms included in the modeled solid.
  unidad_si: '1'
  dimension: '1'
  is_vector: false
  components: []
  category: count
  physical_role: tamaño del sistema
  used_in:
  - calor_especifico_debye_baja_temperatura
  - limite_dulong_petit
  - calor_especifico_debye_integral
  common_mistake: Usar número de moles donde se pide número de átomos.
  typical_range: Desde 1 hasta escala macroscópica.
  sign_behavior:
    has_sign: false
    meaning:
      es: No se interpreta con signo algebraico; físicamente se espera valor no negativo.
      en: It is not interpreted through algebraic sign; physically a nonnegative value is expected.
  zero_behavior:
    allowed: false
    meaning:
      es: El valor cero representa ausencia de contribución térmica o límite ideal cuando el modelo lo permite.
      en: Zero represents absence of thermal contribution or an ideal limit when the model allows it.
  value_nature:
    kind: real
    nonnegative_only: true
    expected_interval: '[0, +∞)'
  interpretation_role:
    primary_for: []
    secondary_for:
    - calor_especifico_debye_integral
  graph_binding:
    channels:
    - parameter
    preferred_axis: parameter
  pedagogical_notes:
    es: Usa [[numero_atomos]] dentro del régimen de Debye y comprueba siempre unidades SI.
    en: Use [[numero_atomos]] within the Debye regime and always check SI units.
- id: temperatura_reducida
  symbol: x
  nombre:

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]
MAGNITUDES_ACTUAL_FIN

Current formulas.yaml:
FORMULAS_ACTUAL_INICIO
version: 5.0.0
ui:
  default_formula: calor_especifico_debye_integral
formulas:
- id: temperatura_debye
  title:
    es: Temperatura de Debye
    en: Debye temperature
  equation: theta_D=hbar*omega_D/k_B
  latex: \Theta_D=\frac{\hbar\omega_D}{k_B}
  rearrangements:
  - id: despeje_frecuencia_debye
    target: frecuencia_debye
    equation: omega_D=k_B*theta_D/hbar
    latex: \omega_D=\frac{k_B\Theta_D}{\hbar}
  - id: despeje_hbar
    target: hbar
    equation: hbar=k_B*theta_D/omega_D
    latex: \hbar=\frac{k_B\Theta_D}{\omega_D}
  category: termodinamica-estadistica
  relation_type: definition
  physical_meaning:
    es: Convierte la frecuencia máxima del espectro de Debye en una temperatura característica del sólido.
    en: Converts the maximum Debye spectrum frequency into a characteristic temperature of the solid.
  constraints:
    es: Requiere frecuencia de corte positiva y constantes físicas positivas.
    en: Requires a positive cutoff frequency and positive physical constants.
  validity:
    es: Útil cuando el sólido puede describirse mediante modos acústicos colectivos hasta una frecuencia de corte.
    en: Useful when the solid can be described by collective acoustic modes up to a cutoff frequency.
  dimension_check: '[K]=([J*s]*[s^-1])/[J*K^-1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  interpretation_tags:
  - escala_termica
  - corte_fononico
  - comparacion_T_theta
  result_semantics:
    target: temperatura_debye
    kind: scale
    sign_meaning:
      es: Debe ser positiva; un valor negativo no tiene sentido físico.
      en: It must be positive; a negative value has no physical meaning.
    absolute_value_meaning:
      es: Indica la temperatura a partir de la cual se excita gran parte del espectro vibracional.
      en: Indicates the temperature above which much of the vibrational spectrum is excited.
  domain_checks:
  - id: theta_positive
    condition: theta_D>0
    message:
      es: La temperatura de Debye debe ser positiva.
      en: Debye temperature must be positive.
  coherence_checks:
  - id: omega_positive
    condition: omega_D>0
    message:
      es: La frecuencia de Debye debe ser positiva.
      en: Debye frequency must be positive.
  graph_implications:
    es: Fija la escala horizontal cuando se representa el calor específico frente a T/ΘD.
    en: Sets the horizontal scale when plotting heat capacity versus T/ΘD.
  pedagogical_triggers:
  - id: confundir_con_temperatura_actual
    text:
      es: No confundas ΘD con la temperatura real del experimento.
      en: Do not confuse ΘD with the actual experimental temperature.
- id: variable_reducida_debye
  title:
    es: Temperatura reducida de Debye
    en: Reduced Debye temperature
  equation: x=T/theta_D
  latex: x=\frac{T}{\Theta_D}
  rearrangements:
  - id: despeje_temperatura
    target: temperatura
    equation: T=x*theta_D
    latex: T=x\Theta_D
  - id: despeje_temperatura_debye
    target: temperatura_debye
    equation: theta_D=T/x
    latex: \Theta_D=\frac{T}{x}
  category: termodinamica-estadistica
  relation_type: scaling
  physical_meaning:
    es: Compara la temperatura del sólido con la escala vibracional marcada por la temperatura de Debye.
    en: Compares the solid temperature with the vibrational scale set by the Debye temperature.
  constraints:
    es: T y ΘD deben estar en kelvin y ΘD no puede ser cero.
    en: T and ΘD must be in kelvin and ΘD cannot be zero.
  validity:
    es: Sirve para decidir si domina el régimen cuántico frío o el límite clásico de alta temperatura.
    en: It indicates whether the cold quantum regime or the high-temperature classical limit dominates.
  dimension_check: '[1]=[K]/[K]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - calor_especifico_debye_baja_temperatura
  - calor_especifico_debye_integral
  - limite_dulong_petit
  interpretation_tags:
  - variable_adimensional
  - regimen_termico
  - comparacion
  result_semantics:
    target: temperatura_reducida
    kind: ratio
    sign_meaning:
      es: Debe ser positiva si T y ΘD son físicas.
      en: It must be positive if T and ΘD are physical.
    absolute_value_meaning:
      es: Valores mucho menores que 1 indican régimen cuántico de baja temperatura; valores grandes se acercan al límite clásico.
      en: Values much less than 1 indicate a low-temperature quantum regime; large values approach the classical limit.
  domain_checks:
  - id: theta_not_zero
    condition: theta_D>0
    message:
      es: No se puede dividir por una temperatura de Debye nula.
      en: Cannot divide by a zero Debye temperature.
  coherence_checks:
  - id: x_regime
    condition: x>=0
    message:
      es: La temperatura reducida no debe ser negativa.
      en: Reduced temperature should not be negative.
  graph_implications:
    es: Es la magnitud natural del eje horizontal en la curva de Debye.
    en: It is the natural quantity on the horizontal axis of the Debye curve.
  pedagogical_triggers:
  - id: usar_celsius
    text:
      es: Usar grados Celsius rompe la interpretación de T/ΘD.
      en: Using Celsius breaks the interpretation of T/ΘD.
- id: calor_especifico_debye_baja_temperatura
  title:
    es: Ley T cúbica de Debye
    en: Debye cubic low-temperature law
  equation: C_V=(12*pi^4/5)*N*k_B*(T/theta_D)^3
  latex: C_V=\frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3
  rearrangements:
  - id: despeje_numero_atomos
    target: numero_atomos
    equation: N=C_V/((12*pi^4/5)*k_B*(T/theta_D)^3)
    latex: N=\frac{C_V}{(12\pi^4/5)k_B(T/\Theta_D)^3}
  - id: despeje_temperatura_aproximada
    target: temperatura
    equation: T=theta_D*(C_V/((12*pi^4/5)*N*k_B))^(1/3)
    latex: T=\Theta_D\left(\frac{C_V}{(12\pi^4/5)Nk_B}\right)^{1/3}
  category: termodinamica-estadistica
  relation_type: approximation
  physical_meaning:
    es: Predice que a baja temperatura solo se excita una fracción pequeña de modos acústicos y el calor específico crece
      como T cúbica.
    en: Predicts that at low temperature only a small fraction of acoustic modes is excited and heat capacity grows cubically
      with T.
  constraints:
    es: Requiere T mucho menor que ΘD y un sólido cristalino con modos acústicos dominantes.
    en: Requires T much smaller than ΘD and a crystalline solid dominated by acoustic modes.
  validity:
    es: Adecuada típicamente para T/ΘD menor que 0.1, antes de que el espectro completo participe.
    en: Typically appropriate for T/ΘD below 0.1, before the full spectrum participates.
  dimension_check: '[J*K^-1]=[1]*[1]*[J*K^-1]*[1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - estimacion_baja_temperatura
  - comparacion_experimental
  interpretation_tags:
  - baja_temperatura
  - ley_cubica
  - fonones_acusticos
  result_semantics:
    target: calor_especifico
    kind: response
    sign_meaning:
      es: Debe ser positivo; un valor negativo indica datos o modelo incorrectos.
      en: It must be positive; a negative value indicates wrong data or model.
    absolute_value_meaning:
      es: Mide cuánta energía debe añadirse para aumentar un kelvin la temperatura del sólido.
      en: Measures how much energy must be added to raise the solid temperature by one kelvin.
  domain_checks:
  - id: low_temp_domain
    condition: T/theta_D<0.1
    message:
      es: La ley cúbica solo es fiable en baja temperatura.
      en: The cubic law is reliable only at low temperature.
  coherence_checks:
  - id: cv_less_dulong
    condition: C_V<3*N*k_B
    message:
      es: En baja temperatura el calor específico debe quedar por debajo del límite de Dulong-Petit.
      en: At low temperature heat capacity should remain below the Dulong-Petit limit.
  graph_implications:
    es: La curva arranca casi horizontal y se curva hacia arriba con dependencia cúbica.
    en: The curve starts almost flat and bends upward with cubic dependence.
  pedagogical_triggers:
  - id: aplicar_t_cubica_fuera_rango
    text:
      es: No extiendas la ley T³ hasta temperaturas comparables con ΘD.
      en: Do not extend the T³ law to temperatures comparable with ΘD.
- id: limite_dulong_petit
  title:
    es: Límite de Dulong-Petit
    en: Dulong-Petit limit
  equation: C_V=3*N*k_B
  latex: C_V=3Nk_B
  rearrangements:
  - id: despeje_numero_atomos_dulong
    target: numero_atomos
    equation: N=C_V/(3*k_B)
    latex: N=\frac{C_V}{3k_B}
  - id: calor_especifico_molar_dulong
    target: calor_especifico_molar
    equation: C_m=3*R
    latex: C_m=3R
  category: termodinamica-estadistica
  relation_type: limit
  physical_meaning:
    es: Da el valor clásico de alta temperatura cuando cada átomo aporta tres modos vibracionales equipartidos.
    en: Gives the high-temperature classical value when each atom contributes three equipartitioned vibrational modes.
  constraints:
    es: Requiere T mayor o comparable con ΘD y comportamiento armónico sin efectos electrónicos dominantes.
    en: Requires T greater than or comparable to ΘD and harmonic behavior without dominant electronic effects.
  validity:
    es: Funciona como límite superior clásico de la contribución vibracional en muchos sólidos simples.
    en: Works as the classical upper limit of the vibrational contribution in many simple solids.
  dimension_check: '[J*K^-1]=[1]*[1]*[J*K^-1]'
  calculable: true
  motivo_no_calculable: ''
  used_in:
  - limite_alta_temperatura
  - calor_especifico_molar
  interpretation_tags:
  - alta_temperatura
  - limite_clasico
  - equiparticion
  result_semantics:
    target: calor_especifico
    kind: limit
    sign_meaning:
      es: El límite es positivo porque añadir temperatura requiere aportar energía.
      en: The limit is positive because raising temperature requires adding energy.
    absolute_value_meaning:
      es: Representa el máximo clásico vibracional antes de introducir correcciones no armónicas o electrónicas.
      en: Represents the classical vibrational maximum before adding anharmonic or electronic corrections.
  domain_checks:
  - id: high_temp_domain
    condition: T/theta_D>=1
    message:
      es: El límite clásico se alcanza cuando T es comparable o mayor que ΘD.
      en: The classical limit is reached when T is comparable to or greater than ΘD.
  coherence_checks:
  - id: molar_3r
    condition: C_m≈3*R
    message:
      es: Por mol, el valor esperado se acerca a 3R.
      en: Per mole, the expected value approaches 3R.
  graph_implications:
    es: La curva se aproxima a una meseta horizontal.
    en: The curve approaches a horizontal plateau.
  pedagogical_triggers:
  - id: olvidar_limite
    text:
      es: Un crecimiento indefinido de C_V con T contradice el límite clásico.
      en: An unlimited growth of C_V with T contradicts the classical limit.
- id: calor_especifico_debye_integral
  title:
    es: Calor específico integral de Debye
    en: Debye integral heat capacity
  equation: C_V=9*N*k_B*(T/theta_D)^3*D3(theta_D/T)
  latex: C_V=9Nk_B\left(\frac{T}{\Theta_D}\right)^3D_3\left(\frac{\Theta_D}{T}\right)
  rearrangements: []
  category: termodinamica-estadistica
  relation_type: model
  physical_meaning:
    es: Resume la suma de modos fonónicos con densidad de estados de Debye entre baja y alta temperatura.
    en: Summarizes the phonon mode sum with Debye density of states between low and high temperature.
  constraints:
    es: D3 representa la integral de Debye y suele evaluarse numéricamente; T y ΘD deben ser positivos.
    en: D3 represents the Debye integral and is usually evaluated numerically; T and ΘD must be positive.
  validity:
    es: Modelo central para sólidos cristalinos simples donde los fonones acústicos dominan el calor específico.
    en: Central model for simple crystalline solids where acoustic phonons dominate heat capacity.
  dimension_check: '[J*K^-1]=[1]*[1]*[J*K^-1]*[1]*[1]'
  calculable: false
  motivo_no_calculable: Requiere evaluar una integral especial de Debye o una tabla numérica.
  used_in:
  - curva_debye
  - ajuste_temperatura_debye
  interpretation_tags:
  - integral_debye
  - curva_completa
  - fonones
  result_semantics:
    target: calor_especifico
    kind: model_output
    sign_meaning:
      es: Debe ser positivo y crecer hacia una meseta al aumentar T.
      en: It must be positive and grow toward a plateau as T increases.
    absolute_value_meaning:
      es: Cuantifica la respuesta térmica vibracional completa predicha por el modelo de Debye.
      en: Quantifies the full vibrational thermal response predicted by the Debye model.
  domain_checks:
  - id: positive_temperatures
    condition: T>0 and theta_D>0
    message:
      es: La integral de Debye necesita temperaturas positivas.
      en: The Debye integral needs positive temperatures.
  coherence_checks:
  - id: low_high_limits
    condition: C_V approaches T^3 at low T and 3*N*k_B at high T
    message:
      es: La curva debe unir la ley T³ con el límite de Dulong-Petit.
      en: The curve must connect the T³ law with the Dulong-Petit limit.
  graph_implications:
    es: La gráfica normalizada debe crecer desde cero hasta una meseta cerca de 3R por mol.
    en: The normalized graph should rise from zero to a plateau near 3R per mole.
  pedagogical_triggers:
  - id: integral_no_es_constante
    text:
      es: La función de Debye no es una constante; cambia con ΘD/T.
      en: The Debye function is not constant; it changes with ΘD/T.
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
