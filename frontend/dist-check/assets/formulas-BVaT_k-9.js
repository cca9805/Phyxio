const e=`version: 5
topic:
  id: magnitudes-alternas
  title:
    es: Magnitudes alternas
    en: AC Quantities
variables:
- id: v_t
  symbol: v(t)
  name:
    es: tension instantanea
    en: Instantaneous Voltage
  si_unit: V
- id: Vmax
  symbol: V_{max}
  name:
    es: amplitud de tension
    en: Voltage Amplitude
  si_unit: V
- id: Vrms
  symbol: V_{rms}
  name:
    es: tension eficaz
    en: RMS Voltage
  si_unit: V
- id: Irms
  symbol: I_{rms}
  name:
    es: corriente eficaz
    en: RMS Current
  si_unit: A
- id: omega
  symbol: \\omega
  name:
    es: frecuencia angular
    en: Angular Frequency
  si_unit: rad/s
- id: f
  symbol: f
  name:
    es: frecuencia
    en: Frequency
  si_unit: Hz
- id: T
  symbol: T
  name:
    es: periodo
    en: Period
  si_unit: s
- id: phi
  symbol: \\phi
  name:
    es: desfase
    en: Phase Shift
  si_unit: rad
- id: P
  symbol: P
  name:
    es: potencia activa
    en: Active Power
  si_unit: W
- id: t
  symbol: t
  name:
    es: tiempo
    en: Time
  si_unit: s
formulas:
- id: senal_sinusoidal
  title:
    es: Señal sinusoidal instantánea
    en: Instantaneous sinusoidal signal
  equation: v_t = Vmax*sin(omega*t + phi)
  latex: v(t)=V_{max}\\sin(\\omega t+\\phi)
  rearrangements:
  - target: v_t
    equation: v_t = Vmax*sin(omega*t + phi)
    latex: v(t)=V_{max}\\sin(\\omega t+\\phi)
  constraints:
  - expr: Vmax >= 0
    message:
      es: La amplitud se usa como magnitud no negativa.
      en: Amplitude is used as a non-negative magnitude.
  category: structural
  relation_type: temporal_profile
  physical_meaning:
    es: Describe la evolución temporal de la tensión instantánea para una señal sinusoidal ideal.
    en: Describes temporal voltage evolution for an ideal sinusoidal signal.
  validity:
    es: Válida para régimen sinusoidal con frecuencia y fase bien definidas.
    en: Valid for sinusoidal regime with well-defined frequency and phase.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - lectura temporal de señales
  - relación entre fase y valor instantáneo
  interpretation_tags: [ senal, temporal, fase, amplitud ]
  result_semantics:
    target: v_t
    meaning: El resultado expresa el estado instantáneo de la señal en el tiempo.
  domain_checks:
  - expr: "true"
    message:
      es: omega y t deben estar en unidades consistentes para el argumento sinusoidal.
      en: Angular frequency and time must use consistent units in sine argument.
  coherence_checks:
  - expr: "true"
    message:
      es: El valor instantáneo debe permanecer acotado por Vmax en magnitud.
      en: Instantaneous value must remain bounded by amplitude in magnitude.
  graph_implications:
  - Representa forma temporal de la onda y desplazamiento de fase.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Distingue siempre valor instantáneo de valor eficaz.
      en: Always distinguish instantaneous value from RMS value.
- id: omega_f
  title:
    es: Relación entre frecuencia angular y frecuencia
    en: Angular-frequency to frequency relation
  equation: omega = 2*pi*f
  latex: \\omega=2\\pi f
  rearrangements:
  - target: omega
    equation: omega = 2*pi*f
    latex: \\omega=2\\pi f
  constraints:
  - expr: f >= 0
    message:
      es: La frecuencia no puede ser negativa en este contexto.
      en: Frequency cannot be negative in this context.
  category: operative
  relation_type: conversion
  physical_meaning:
    es: Convierte ciclos por segundo en velocidad angular de oscilación.
    en: Converts cycles per second into angular oscillation rate.
  validity:
    es: Válida para señales periódicas de frecuencia única.
    en: Valid for single-frequency periodic signals.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - conversión de unidades
  - cálculo temporal y fasorial
  interpretation_tags: [ frecuencia, conversion, radian ]
  result_semantics:
    target: omega
    meaning: El resultado fija la rapidez angular de variación de fase.
  domain_checks:
  - expr: "true"
    message:
      es: Si f está en Hz, omega queda en rad/s.
      en: If frequency is in Hz, angular frequency is in rad/s.
  coherence_checks:
  - expr: "true"
    message:
      es: A mayor f, omega debe aumentar proporcionalmente.
      en: Larger frequency must produce proportionally larger angular frequency.
  graph_implications:
  - Ajusta la densidad de ciclos en el eje temporal.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No reemplaces omega por f sin el factor 2π.
      en: Do not replace angular frequency with frequency without 2π factor.
- id: periodo
  title:
    es: Relación entre período y frecuencia
    en: Period-frequency relation
  equation: T = 1/f
  latex: T=\\frac{1}{f}
  rearrangements:
  - target: T
    equation: T = 1/f
    latex: T=\\frac{1}{f}
  constraints:
  - expr: f > 0
    message:
      es: La frecuencia debe ser positiva para definir un período finito.
      en: Frequency must be positive to define a finite period.
  category: operative
  relation_type: inverse_relation
  physical_meaning:
    es: Vincula la escala temporal del ciclo con su ritmo de repetición.
    en: Links cycle time scale with repetition rate.
  validity:
    es: Válida para señales periódicas en régimen estacionario.
    en: Valid for periodic signals in steady regime.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - análisis temporal de ciclos
  - conversión entre dominios
  interpretation_tags: [ periodo, frecuencia, ciclo ]
  result_semantics:
    target: T
    meaning: El resultado indica la duración temporal de un ciclo completo.
  domain_checks:
  - expr: "true"
    message:
      es: Con frecuencia muy baja, el período crece y exige ventanas temporales mayores.
      en: With low frequency, period grows and requires larger time windows.
  coherence_checks:
  - expr: "true"
    message:
      es: Si f aumenta, T debe disminuir en forma inversa.
      en: If frequency rises, period must decrease inversely.
  graph_implications:
  - Define separación temporal entre máximos consecutivos.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Evita escribir T = 2π/f; esa relación corresponde a omega.
      en: Avoid writing T = 2π/f; that relation belongs to angular frequency.
- id: valor_eficaz
  title:
    es: Conversión pico a valor eficaz en senoide pura
    en: Peak-to-RMS conversion in pure sine
  equation: Vrms = Vmax/sqrt(2)
  latex: V_{rms}=\\frac{V_{max}}{\\sqrt{2}}
  rearrangements:
  - target: Vrms
    equation: Vrms = Vmax/sqrt(2)
    latex: V_{rms}=\\frac{V_{max}}{\\sqrt{2}}
  constraints:
  - expr: Vmax >= 0
    message:
      es: La amplitud debe ser no negativa.
      en: Amplitude must be non-negative.
  category: energetic
  relation_type: conversion
  physical_meaning:
    es: Traduce amplitud de senoide pura a valor equivalente en potencia continua.
    en: Translates pure-sine amplitude into continuous-power equivalent value.
  validity:
    es: Válida solo para forma de onda sinusoidal pura.
    en: Valid only for pure sinusoidal waveform.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - interpretación de mediciones RMS
  - cálculo de potencia activa
  interpretation_tags: [ rms, amplitud, potencia ]
  result_semantics:
    target: Vrms
    meaning: El resultado permite comparar señales AC con equivalentes DC de potencia.
  domain_checks:
  - expr: "true"
    message:
      es: Si hay distorsión significativa, esta conversión deja de ser exacta.
      en: With significant distortion, this conversion is no longer exact.
  coherence_checks:
  - expr: "true"
    message:
      es: Vrms debe ser menor o igual que Vmax.
      en: RMS voltage must be less than or equal to peak voltage.
  graph_implications:
  - Relaciona amplitud de la onda con valor operativo de red.
  pedagogical_triggers:
  - when: "true"
    message:
      es: No confundas promedio algebraico con RMS.
      en: Do not confuse algebraic average with RMS.
- id: potencia_activa
  title:
    es: Potencia activa en corriente alterna
    en: Active power in AC
  equation: P = Vrms*Irms*cos(phi)
  latex: P=V_{rms}I_{rms}\\cos\\phi
  rearrangements:
  - target: P
    equation: P = Vrms*Irms*cos(phi)
    latex: P=V_{rms}I_{rms}\\cos\\phi
  constraints:
  - expr: Vrms >= 0 and Irms >= 0
    message:
      es: Se usan magnitudes RMS no negativas.
      en: Non-negative RMS magnitudes are used.
  category: energetic
  relation_type: power_relation
  physical_meaning:
    es: Determina la fracción de potencia aparente que se convierte en transferencia media neta.
    en: Determines the fraction of apparent power converted into net mean transfer.
  validity:
    es: Válida para análisis sinusoidal con definición coherente de desfase.
    en: Valid for sinusoidal analysis with coherent phase-shift definition.
  dimension_check: coherente dimensionalmente en unidades SI
  calculable: true
  motivo_no_calculable: null
  used_in:
  - eficiencia energética
  - análisis de factor de potencia
  interpretation_tags: [ potencia, rms, desfase, coseno ]
  result_semantics:
    target: P
    meaning: El resultado cuantifica potencia útil media transferida en AC.
  domain_checks:
  - expr: "true"
    message:
      es: Vrms, Irms y phi deben corresponder al mismo estado estacionario.
      en: RMS voltage, RMS current, and phase shift must belong to the same steady state.
  coherence_checks:
  - expr: "true"
    message:
      es: Si cos(phi) disminuye, P debe disminuir para Vrms e Irms fijos.
      en: If cosine factor decreases, active power must decrease at fixed RMS values.
  graph_implications:
  - Muestra impacto del desfase sobre transferencia útil.
  pedagogical_triggers:
  - when: "true"
    message:
      es: Evita omitir cos(phi); sin ese factor se sobreestima P.
      en: Avoid dropping cosine factor; without it, active power is overestimated.
ui:
  default_formula: senal_sinusoidal
  groups:
  - title:
      es: Basicas
      en: Basics
    items:
    - senal_sinusoidal
    - omega_f
    - periodo
    - valor_eficaz
    - potencia_activa
`;export{e as default};
