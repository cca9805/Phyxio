const n=`version: 5
magnitudes:
- id: Xl
  symbol: X_L
  nombre:
    es: reactancia inductiva
    en: Inductive Reactance
  unidad_si: ohm
  descripcion:
    es: Oposición al paso de corriente alterna debida al inductor, dependiente de frecuencia.
    en: Opposition to alternating current caused by the inductor, frequency-dependent.
  dimension: ML^2T^{-3}I^{-2}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ reactancia_inductiva, corriente_inductiva, reactiva_inductiva ]
  common_mistake: Tratarla como resistencia activa constante.
  typical_range: Aumenta al aumentar frecuencia o inductancia.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se usa como magnitud positiva de oposición.
      en: Used as a positive opposition magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: En el límite de frecuencia nula puede tender a cero en ideal.
      en: In the zero-frequency limit it may tend to zero in ideal model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ reactancia-inductiva ]
    secondary_for: [ corriente-alterna ]
  graph_binding:
    channels: [ reactancia ]
  pedagogical_notes: Es clave distinguir oposición inductiva de disipación resistiva.
- id: omega
  symbol: \\omega
  nombre:
    es: frecuencia angular
    en: Angular Frequency
  unidad_si: rad/s
  descripcion:
    es: Rapidez angular de oscilación asociada a la señal alterna.
    en: Angular oscillation rate associated with the AC signal.
  dimension: T^{-1}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ reactancia_inductiva, omega_f ]
  common_mistake: Sustituir omega por f sin factor 2pi.
  typical_range: No negativa en señales periódicas estándar.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se interpreta como tasa positiva.
      en: Interpreted as a positive rate.
  zero_behavior:
    allowed: true
    meaning:
      es: Con omega nula no hay alternancia periódica efectiva.
      en: With zero angular frequency there is no effective periodic alternation.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ reactancia-inductiva ]
    secondary_for: []
  graph_binding:
    channels: [ frecuencia ]
  pedagogical_notes: Controla la escala temporal del fenómeno inductivo.
- id: L
  symbol: L
  nombre:
    es: inductancia
    en: Inductance
  unidad_si: H
  descripcion:
    es: Capacidad de una bobina para almacenar energía en campo magnético.
    en: Ability of a coil to store energy in magnetic field.
  dimension: ML^2T^{-2}I^{-2}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ reactancia_inductiva ]
  common_mistake: No convertir milihenrios a henrios.
  typical_range: Positiva y definida por geometría y material del inductor.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se considera no negativa en elementos pasivos.
      en: Considered non-negative in passive elements.
  zero_behavior:
    allowed: true
    meaning:
      es: Si es cero desaparece el efecto inductivo ideal.
      en: If zero, ideal inductive effect disappears.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ reactancia-inductiva ]
    secondary_for: []
  graph_binding:
    channels: [ parametro ]
  pedagogical_notes: Su efecto en reactancia es proporcional a frecuencia angular.
- id: f
  symbol: f
  nombre:
    es: frecuencia
    en: Frequency
  unidad_si: Hz
  descripcion:
    es: Número de ciclos por segundo de la señal de excitación.
    en: Number of cycles per second of the excitation signal.
  dimension: T^{-1}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ omega_f ]
  common_mistake: Mezclar Hz y rad/s en la misma sustitución.
  typical_range: No negativa en régimen periódico.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se usa como magnitud de tasa temporal.
      en: Used as a temporal-rate magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: En cero la reactancia inductiva ideal tiende a nula.
      en: At zero frequency, ideal inductive reactance tends to zero.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ reactancia-inductiva ]
    secondary_for: []
  graph_binding:
    channels: [ frecuencia ]
  pedagogical_notes: Determina el aumento de oposición inductiva con régimen más rápido.
- id: V
  symbol: V
  nombre:
    es: tension eficaz
    en: RMS Voltage
  unidad_si: V
  descripcion:
    es: Tensión eficaz aplicada a la rama inductiva.
    en: RMS voltage applied to the inductive branch.
  dimension: ML^2T^{-3}I^{-1}
  is_vector: false
  components: []
  category: parameter
  physical_role: physical_quantity
  used_in: [ corriente_inductiva, reactiva_inductiva ]
  common_mistake: Mezclar tensión pico con corriente RMS.
  typical_range: Positiva como magnitud eficaz de entrada.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se usa como magnitud RMS no negativa.
      en: Used as a non-negative RMS magnitude.
  zero_behavior:
    allowed: true
    meaning:
      es: Si es cero no hay corriente inductiva forzada.
      en: If zero there is no forced inductive current.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: []
    secondary_for: [ reactancia-inductiva ]
  graph_binding:
    channels: [ excitacion ]
  pedagogical_notes: Debe mantenerse coherente con régimen y forma de onda.
- id: Il
  symbol: I_L
  nombre:
    es: corriente inductiva eficaz
    en: RMS Inductive Current
  unidad_si: A
  descripcion:
    es: Corriente eficaz que circula por la rama inductiva en AC.
    en: RMS current flowing through the inductive branch in AC.
  dimension: I
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ corriente_inductiva, reactiva_inductiva ]
  common_mistake: Omitir dependencia con frecuencia al estimarla.
  typical_range: Disminuye al aumentar reactancia inductiva.
  sign_behavior:
    has_sign: false
    meaning:
      es: Se reporta como valor eficaz positivo.
      en: Reported as a positive RMS value.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede ser cero por falta de excitación.
      en: Can be zero with no excitation.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ reactancia-inductiva ]
    secondary_for: []
  graph_binding:
    channels: [ corriente ]
  pedagogical_notes: Conecta oposición inductiva con exigencia de corriente de línea.
- id: Ql
  symbol: Q_L
  nombre:
    es: potencia reactiva inductiva
    en: Inductive Reactive Power
  unidad_si: var
  descripcion:
    es: Magnitud de intercambio reactivo asociado a la rama inductiva.
    en: Magnitude of reactive exchange associated with the inductive branch.
  dimension: ML^2T^{-3}
  is_vector: false
  components: []
  category: derived
  physical_role: physical_quantity
  used_in: [ reactiva_inductiva ]
  common_mistake: Interpretarla como consumo activo neto.
  typical_range: Proporcional a tensión y corriente de rama.
  sign_behavior:
    has_sign: false
    meaning:
      es: En este leaf se usa como magnitud positiva; el signo se discute aparte.
      en: In this leaf it is treated as positive magnitude; sign is discussed separately.
  zero_behavior:
    allowed: true
    meaning:
      es: Se anula sin excitación o sin corriente de rama.
      en: It vanishes without excitation or branch current.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: '[0, inf)'
  interpretation_role:
    primary_for: [ reactancia-inductiva ]
    secondary_for: [ potencia-reactiva ]
  graph_binding:
    channels: [ potencia ]
  pedagogical_notes: Útil para evaluar compensación y calidad de potencia.
`;export{n as default};
