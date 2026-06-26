const n=`version: 5
magnitudes:
- id: v_t
  symbol: v(t)
  nombre:
    es: tension instantanea
    en: Instantaneous Voltage
  unidad_si: V
  descripcion:
    es: Valor de la tensión en un instante del tiempo dentro de una señal alterna.
    en: Voltage value at a specific instant in an alternating signal.
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: []
  category: state
  physical_role: physical_quantity
  used_in: [ senal_sinusoidal ]
  common_mistake: Confundir valor instantaneo con valor eficaz.
  typical_range: Oscila entre -Vmax y Vmax en senoidal pura.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende de la fase instantanea respecto al origen temporal.
      en: The sign depends on instantaneous phase relative to time origin.
  zero_behavior:
    allowed: true
    meaning:
      es: Cruza por cero dos veces por ciclo en senoidal pura.
      en: It crosses zero twice per cycle in a pure sine wave.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: [ magnitudes-alternas ]
    secondary_for: []
  graph_binding:
    channels: [ temporal ]
  pedagogical_notes: Ayuda a distinguir magnitud temporal de magnitudes resumen como RMS.
- id: Vmax
  symbol: V_{max}
  nombre:
    es: amplitud de tension
    en: Voltage Amplitude
  unidad_si: V
  descripcion:
    es: Valor pico de la tensión alterna en una señal periódica.
    en: Peak value of alternating voltage in a periodic signal.
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ senal_sinusoidal, valor_eficaz ]
  common_mistake: Tomar Vmax como lectura directa de multimetro RMS.
  typical_range: Positiva como amplitud de referencia.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se usa como magnitud positiva de pico.
      en: It is used as a positive peak magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Si es cero no hay oscilación de tensión.
      en: If zero, there is no voltage oscillation.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ magnitudes-alternas ]
  graph_binding:
    channels: [ amplitud ]
  pedagogical_notes: Debe convertirse a Vrms para análisis de potencia media.
- id: Vrms
  symbol: V_{rms}
  nombre:
    es: tension eficaz
    en: RMS Voltage
  unidad_si: V
  descripcion:
    es: Valor equivalente en potencia a una tensión continua.
    en: Voltage value equivalent in power to a direct-current voltage.
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ valor_eficaz, potencia_activa ]
  common_mistake: Usar Vrms sin verificar que la onda sea senoidal pura.
  typical_range: Positiva y dependiente de amplitud y forma de onda.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se reporta como magnitud no negativa.
      en: It is reported as a non-negative magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Indica ausencia de excitación efectiva.
      en: Indicates absence of effective excitation.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ magnitudes-alternas ]
    secondary_for: []
  graph_binding:
    channels: [ rms ]
  pedagogical_notes: Es la magnitud operativa clave en red eléctrica y facturación.
- id: Irms
  symbol: I_{rms}
  nombre:
    es: corriente eficaz
    en: RMS Current
  unidad_si: A
  descripcion:
    es: Corriente equivalente en potencia a una corriente continua.
    en: Current equivalent in power to a direct-current current.
  dimension: I
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ potencia_activa ]
  common_mistake: Mezclar Irms con corriente pico en la misma expresión de potencia.
  typical_range: Positiva y condicionada por carga y excitación.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se usa como magnitud eficaz no negativa.
      en: It is used as a non-negative effective magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Si vale cero no hay transferencia de potencia activa.
      en: If zero, there is no active power transfer.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ magnitudes-alternas ]
  graph_binding:
    channels: [ rms ]
  pedagogical_notes: Debe mantenerse en RMS para coherencia con Vrms y P.
- id: omega
  symbol: \\omega
  nombre:
    es: frecuencia angular
    en: Angular Frequency
  unidad_si: rad/s
  descripcion:
    es: Ritmo angular de variación temporal de la señal periódica.
    en: Angular rate of temporal variation in the periodic signal.
  dimension: T^{-1}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ senal_sinusoidal, omega_f ]
  common_mistake: Usar frecuencia en Hz donde se requiere omega en rad/s.
  typical_range: Positiva para análisis temporal estándar.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se toma no negativa en este leaf.
      en: It is taken as non-negative in this leaf.
  zero_behavior:
    allowed: true
    meaning:
      es: Señal constante sin oscilación temporal.
      en: Constant signal with no temporal oscillation.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ magnitudes-alternas ]
    secondary_for: [ reactancia ]
  graph_binding:
    channels: [ frecuencia ]
  pedagogical_notes: Conecta descripción temporal con cálculo de reactancias.
- id: f
  symbol: f
  nombre:
    es: frecuencia
    en: Frequency
  unidad_si: Hz
  descripcion:
    es: Número de ciclos completos por segundo.
    en: Number of complete cycles per second.
  dimension: T^{-1}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ omega_f, periodo ]
  common_mistake: Confundir Hz con rad/s sin factor 2π.
  typical_range: Mayor o igual a cero según sistema físico.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se interpreta como tasa positiva de repetición.
      en: Interpreted as a positive repetition rate.
  zero_behavior:
    allowed: true
    meaning:
      es: Frecuencia nula implica ausencia de alternancia periódica.
      en: Zero frequency implies no periodic alternation.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ magnitudes-alternas ]
    secondary_for: [ reactancia ]
  graph_binding:
    channels: [ frecuencia ]
  pedagogical_notes: Es la magnitud de entrada más común en instrumentación.
- id: T
  symbol: T
  nombre:
    es: periodo
    en: Period
  unidad_si: s
  descripcion:
    es: Tiempo que tarda la señal en completar un ciclo.
    en: Time the signal takes to complete one cycle.
  dimension: T
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ periodo ]
  common_mistake: Usar T = 2π/f en lugar de T = 1/f.
  typical_range: Positivo para señal periódica física.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se toma positivo como escala temporal del ciclo.
      en: Taken as positive cycle time scale.
  zero_behavior:
    allowed: false
    meaning:
      es: T no puede ser cero en señal periódica física.
      en: Period cannot be zero in a physical periodic signal.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '(0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ magnitudes-alternas ]
  graph_binding:
    channels: [ periodo ]
  pedagogical_notes: Es la forma temporal complementaria de la frecuencia.
- id: phi
  symbol: \\phi
  nombre:
    es: desfase
    en: Phase Shift
  unidad_si: rad
  descripcion:
    es: Diferencia de fase entre dos señales sinusoidales comparadas.
    en: Phase difference between two compared sinusoidal signals.
  dimension: '1'
  is_vector: false
  components: []
  category: state
  physical_role: physical_quantity
  used_in: [ senal_sinusoidal, potencia_activa ]
  common_mistake: Tratar el desfase como dato decorativo sin efecto energético.
  typical_range: Contextual, frecuentemente entre -pi y pi.
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo indica adelanto o atraso relativo entre señales.
      en: The sign indicates relative lead or lag between signals.
  zero_behavior:
    allowed: true
    meaning:
      es: Señales en fase, máximo cos(phi) en magnitud.
      en: Signals in phase, maximum cosine factor in magnitude.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: '[-pi, pi]'
  interpretation_role:
    primary_for: [ magnitudes-alternas ]
    secondary_for: [ reactancia ]
  graph_binding:
    channels: [ fase ]
  pedagogical_notes: Conecta forma temporal con transferencia de potencia activa.
- id: P
  symbol: P
  nombre:
    es: potencia activa
    en: Active Power
  unidad_si: W
  descripcion:
    es: Potencia media neta transferida en corriente alterna.
    en: Net mean power transferred in alternating current.
  dimension: ML^2T^{-3}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ potencia_activa ]
  common_mistake: Calcular P sin incluir el factor cos(phi).
  typical_range: No negativa en carga pasiva convencional.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se reporta positiva para consumo en este nivel.
      en: Reported as positive for consumption at this level.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede anularse con corriente nula o cos(phi) nulo.
      en: May vanish with zero current or zero cosine factor.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ magnitudes-alternas ]
    secondary_for: []
  graph_binding:
    channels: [ potencia ]
  pedagogical_notes: Es la magnitud energética de referencia para trabajo útil.
- id: t
  symbol: t
  nombre:
    es: tiempo
    en: Time
  unidad_si: s
  descripcion:
    es: Variable independiente usada para describir evolución temporal de la señal.
    en: Independent variable used to describe temporal signal evolution.
  dimension: T
  is_vector: false
  components: []
  category: state
  physical_role: physical_quantity
  used_in: [ senal_sinusoidal ]
  common_mistake: Olvidar consistencia de unidades al usar omega en rad/s.
  typical_range: Contextual según ventana temporal de análisis.
  sign_behavior:
    has_sign: true
    meaning:
      es: Puede definirse con origen temporal positivo o negativo.
      en: Can be defined with positive or negative temporal origin.
  zero_behavior:
    allowed: true
    meaning:
      es: Marca el origen de fase elegido para la señal.
      en: Marks the chosen phase origin for the signal.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: context-dependent
  interpretation_role:
    primary_for: []
    secondary_for: [ magnitudes-alternas ]
  graph_binding:
    channels: [ eje_t ]
  pedagogical_notes: Debe mantenerse explícito para interpretar correctamente fase y ciclo.
`;export{n as default};
