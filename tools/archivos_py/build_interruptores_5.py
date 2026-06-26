"""Build interruptores leaf - interpretacion.yaml."""
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

(base / 'interpretacion.yaml').write_text("""\
version: 2
id: interpretacion-interruptores
leaf_id: interruptores
nombre:
  es: Interpretacion de Interruptores
  en: Interpretation of Switches
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electricidad-domestica
  parent_id: electricidad-domestica
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/interruptores
dependencies:
  formulas:
  - corriente
  - perdida_on
  - energia_on
  magnitudes:
  - P
  - V
  - I
  - R_on
  - P_on
  - t_on
  - E_on
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
result_blocks:
  summary:
    title:
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  P_on:
    summary_rules:
    - id: Pon_high
      when: 'P_on > 5'
      status: error
      text:
        es: 'P_on > 5 W: disipacion de contacto elevada. Riesgo termico local significativo. Inspeccionar y sustituir el interruptor.'
        en: 'P_on > 5 W: high contact dissipation. Significant local thermal risk. Inspect and replace the switch.'
    - id: Pon_medium
      when: 'P_on >= 1 and P_on <= 5'
      status: warning
      text:
        es: 'P_on entre 1 y 5 W: disipacion moderada. Vigilar la temperatura del interruptor en uso continuo.'
        en: 'P_on between 1 and 5 W: moderate dissipation. Monitor switch temperature in continuous use.'
    - id: Pon_ok
      when: 'P_on < 1'
      status: ok
      text:
        es: 'P_on < 1 W: disipacion de contacto baja. Sin riesgo termico apreciable en condiciones normales.'
        en: 'P_on < 1 W: low contact dissipation. No appreciable thermal risk under normal conditions.'
    coherence_rules:
    - id: Pon_coherence
      when: 'true'
      status: ok
      text:
        es: 'P_on = I^2 * R_on. Verificar que I esta en amperios y R_on en ohmios para obtener P_on en vatios.'
        en: 'P_on = I^2 * R_on. Verify I is in amperes and R_on in ohms to get P_on in watts.'
    physical_reading_rules:
    - id: Pon_physical
      when: 'P_on >= 1'
      status: warning
      text:
        es: 'P_on >= 1 W indica calentamiento apreciable del contacto. La dependencia cuadratica en I hace que duplicar la carga cuadruplique la disipacion.'
        en: 'P_on >= 1 W indicates noticeable contact heating. The quadratic dependence on I means doubling the load quadruples dissipation.'
    model_validity_rules:
    - id: Pon_validity
      when: 'true'
      status: ok
      text:
        es: 'El modelo P_on = I^2 * R_on es valido en regimen permanente con carga resistiva. Para cargas inductivas o ciclos frecuentes, el modelo estatico puede subestimar la degradacion real.'
        en: 'The model P_on = I^2 * R_on is valid in steady state with resistive load. For inductive loads or frequent cycles, the static model may underestimate actual degradation.'
    graph_rules:
    - id: Pon_graph
      when: 'true'
      status: info
      text:
        es: 'P_on se puede representar como curva parabolica en funcion de I a R_on fija. La forma parabolica ilustra la dependencia cuadratica.'
        en: 'P_on can be represented as a parabolic curve vs I at fixed R_on. The parabolic shape illustrates the quadratic dependence.'
    likely_errors:
    - id: Pon_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: calcular P_on = I * R_on omitiendo el cuadrado de I. Verificar dimensionalmente: A^2 * ohm = W, no A * ohm = V.'
        en: 'Frequent error: calculating P_on = I * R_on omitting the square of I. Check dimensionally: A^2 * ohm = W, not A * ohm = V.'
    next_step_rules:
    - id: Pon_next
      when: 'P_on >= 1'
      status: warning
      text:
        es: 'Con P_on >= 1 W, calcular E_on = P_on * t_on para el periodo de uso y evaluar si la disipacion acumulada es relevante.'
        en: 'With P_on >= 1 W, calculate E_on = P_on * t_on for the usage period and evaluate whether accumulated dissipation is relevant.'
  E_on:
    summary_rules:
    - id: Eon_summary
      when: 'true'
      status: info
      text:
        es: 'E_on es la energia total disipada en los contactos durante el periodo de conduccion. Se usa para analisis energetico, no como criterio de riesgo termico (ese es P_on).'
        en: 'E_on is the total energy dissipated in the contacts during the conduction period. Used for energy analysis, not as thermal risk criterion (that is P_on).'
    coherence_rules:
    - id: Eon_coherence
      when: 'true'
      status: ok
      text:
        es: 'E_on = P_on * t_on. Con t_on en segundos y P_on en vatios, E_on en julios. Para convertir a Wh: E_on / 3600.'
        en: 'E_on = P_on * t_on. With t_on in seconds and P_on in watts, E_on in joules. To convert to Wh: E_on / 3600.'
    physical_reading_rules:
    - id: Eon_physical
      when: 'true'
      status: info
      text:
        es: 'E_on grande no implica riesgo termico alto. El riesgo depende de P_on (potencia instantanea), no de E_on (energia acumulada). Un calentamiento de 0.1 W durante un dia da E_on grande pero temperatura de equilibrio baja.'
        en: 'Large E_on does not imply high thermal risk. Risk depends on P_on (instantaneous power), not E_on (accumulated energy). Heating of 0.1 W for a day gives large E_on but low equilibrium temperature.'
    model_validity_rules:
    - id: Eon_validity
      when: 'true'
      status: ok
      text:
        es: 'E_on = P_on * t_on es valido cuando P_on es aproximadamente constante durante t_on. Para ciclos de carga variable, E_on = integral de P_on dt.'
        en: 'E_on = P_on * t_on is valid when P_on is approximately constant during t_on. For variable load cycles, E_on = integral of P_on dt.'
    graph_rules:
    - id: Eon_graph
      when: 'true'
      status: info
      text:
        es: 'E_on crece linealmente con t_on a P_on fija. La pendiente es P_on.'
        en: 'E_on grows linearly with t_on at fixed P_on. The slope is P_on.'
    likely_errors:
    - id: Eon_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: interpretar E_on grande como riesgo termico alto. E_on es energia acumulada; el riesgo termico lo determina P_on (la tasa de disipacion instantanea).'
        en: 'Frequent error: interpreting large E_on as high thermal risk. E_on is accumulated energy; thermal risk is determined by P_on (the instantaneous dissipation rate).'
    next_step_rules:
    - id: Eon_next
      when: 'true'
      status: info
      text:
        es: 'Con E_on calculada, dividir entre 3 600 000 para obtener kWh y estimar el coste energetico de las perdidas del interruptor.'
        en: 'With E_on calculated, divide by 3,600,000 to get kWh and estimate the energy cost of switch losses.'
  I:
    summary_rules:
    - id: I_summary
      when: 'true'
      status: info
      text:
        es: 'I es la corriente que el interruptor debe conducir. Se calcula como P/V para cargas resistivas. Define el dimensionamiento del interruptor y es la entrada para calcular P_on.'
        en: 'I is the current the switch must conduct. Calculated as P/V for resistive loads. Defines switch sizing and is the input for calculating P_on.'
    coherence_rules:
    - id: I_coherence
      when: 'true'
      status: ok
      text:
        es: 'I = P/V. Con V = 230 V, un equipo de 2300 W demanda I = 10 A. Verificar que P esta en vatios y V en voltios.'
        en: 'I = P/V. With V = 230 V, a 2300 W device demands I = 10 A. Verify P is in watts and V in volts.'
    physical_reading_rules:
    - id: I_physical
      when: 'true'
      status: info
      text:
        es: 'I determina cuanto se calienta el interruptor: P_on crece con I al cuadrado. Un interruptor de calefactor conduce 30-50 veces mas corriente que uno de iluminacion, generando 900-2500 veces mas calor en el contacto.'
        en: 'I determines how much the switch heats up: P_on grows with I squared. A heater switch conducts 30-50 times more current than a lighting switch, generating 900-2500 times more heat at the contact.'
    model_validity_rules:
    - id: I_validity
      when: 'true'
      status: ok
      text:
        es: 'I = P/V es valido para cargas con factor de potencia unitario. Para cargas inductivas o capacitivas, la corriente real puede ser mayor que P/V.'
        en: 'I = P/V is valid for unity power factor loads. For inductive or capacitive loads, actual current may be greater than P/V.'
    graph_rules:
    - id: I_graph
      when: 'true'
      status: info
      text:
        es: 'I crece linealmente con P a V fija. En el eje horizontal P (vatios), el eje vertical I (amperios) tiene pendiente 1/V.'
        en: 'I grows linearly with P at fixed V. On the horizontal axis P (watts), the vertical axis I (amperes) has slope 1/V.'
    likely_errors:
    - id: I_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: incluir R_on en el calculo de I. R_on es tipicamente 0.01-0.1 ohm frente a R_carga de cientos de ohmios — su efecto sobre I es despreciable.'
        en: 'Frequent error: including R_on in the calculation of I. R_on is typically 0.01-0.1 ohm vs R_load of hundreds of ohms — its effect on I is negligible.'
    next_step_rules:
    - id: I_next
      when: 'true'
      status: info
      text:
        es: 'Con I calculada, verificar que I <= I_nominal del interruptor y calcular P_on = I^2 * R_on para estimar el riesgo termico.'
        en: 'With I calculated, verify I <= nominal switch current and calculate P_on = I^2 * R_on to estimate thermal risk.'
  R_on:
    summary_rules:
    - id: Ron_summary
      when: 'true'
      status: info
      text:
        es: 'R_on es la resistencia de los contactos del interruptor en estado ON. Es el parametro de calidad del contacto: bajo en interruptores nuevos, alto en envejecidos o degradados.'
        en: 'R_on is the resistance of switch contacts in ON state. It is the contact quality parameter: low in new switches, high in aged or degraded ones.'
    coherence_rules:
    - id: Ron_coherence
      when: 'true'
      status: ok
      text:
        es: 'R_on tipica en interruptor nuevo: 0.01-0.05 ohm. Envejecido: 0.05-0.2 ohm. Degradado: 0.2-0.5 ohm. Por encima de 0.5 ohm: sustituir.'
        en: 'Typical R_on in new switch: 0.01-0.05 ohm. Aged: 0.05-0.2 ohm. Degraded: 0.2-0.5 ohm. Above 0.5 ohm: replace.'
    physical_reading_rules:
    - id: Ron_physical
      when: 'true'
      status: info
      text:
        es: 'R_on es el parametro que diferencia el interruptor ideal (R_on = 0) del real. No es directamente observable, pero sus efectos (calentamiento, decoloracion) si lo son.'
        en: 'R_on is the parameter that distinguishes the ideal switch (R_on = 0) from the real one. It is not directly observable, but its effects (heating, discolouration) are.'
    model_validity_rules:
    - id: Ron_validity
      when: 'true'
      status: ok
      text:
        es: 'R_on como resistencia estatica es valida en regimen permanente. Para arcos intermitentes o contacto muy degradado, la disipacion real puede ser mayor que I^2 * R_on.'
        en: 'R_on as static resistance is valid in steady state. For intermittent arcing or severely degraded contact, actual dissipation may be greater than I^2 * R_on.'
    graph_rules:
    - id: Ron_graph
      when: 'true'
      status: info
      text:
        es: 'R_on aparece como parametro de la curva parabolica P_on vs I. Mayor R_on desplaza la parabola hacia arriba.'
        en: 'R_on appears as a parameter of the parabolic P_on vs I curve. Higher R_on shifts the parabola upward.'
    likely_errors:
    - id: Ron_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: asumir R_on = 0 para todos los interruptores. Incluso interruptores nuevos tienen R_on > 0; los envejecidos pueden tener R_on diez veces mayor.'
        en: 'Frequent error: assuming R_on = 0 for all switches. Even new switches have R_on > 0; aged ones can have R_on ten times higher.'
    next_step_rules:
    - id: Ron_next
      when: 'true'
      status: info
      text:
        es: 'Con R_on estimada o medida, calcular P_on = I^2 * R_on. Si P_on > 5 W, proceder a la inspeccion y sustitucion del interruptor.'
        en: 'With R_on estimated or measured, calculate P_on = I^2 * R_on. If P_on > 5 W, proceed to switch inspection and replacement.'
  P:
    summary_rules:
    - id: P_summary
      when: 'true'
      status: info
      text:
        es: 'P es la potencia nominal de la carga que controla el interruptor. Es el dato de entrada mas accesible para calcular I = P/V.'
        en: 'P is the nominal power of the load controlled by the switch. It is the most accessible input data for calculating I = P/V.'
    coherence_rules:
    - id: P_coherence
      when: 'true'
      status: ok
      text:
        es: 'P debe estar en vatios. Si la etiqueta indica kW, multiplicar por 1000. Para cargas resistivas, P activa = P aparente.'
        en: 'P must be in watts. If the label shows kW, multiply by 1000. For resistive loads, active P = apparent P.'
    physical_reading_rules:
    - id: P_physical
      when: 'true'
      status: info
      text:
        es: 'P de la carga determina I = P/V y por tanto P_on = I^2 * R_on. Duplicar P cuadruplica P_on a R_on constante.'
        en: 'Load P determines I = P/V and therefore P_on = I^2 * R_on. Doubling P quadruples P_on at constant R_on.'
    model_validity_rules:
    - id: P_validity
      when: 'true'
      status: ok
      text:
        es: 'P nominal es el consumo maximo del equipo. Para seguridad, usar siempre P nominal maximo para dimensionar el interruptor.'
        en: 'Nominal P is maximum device consumption. For safety, always use maximum nominal P to size the switch.'
    graph_rules:
    - id: P_graph
      when: 'true'
      status: info
      text:
        es: 'P aparece en el eje horizontal del grafico I vs P. I crece linealmente con P a V fija.'
        en: 'P appears on the horizontal axis of the I vs P graph. I grows linearly with P at fixed V.'
    likely_errors:
    - id: P_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: usar la potencia de standby en lugar de la potencia maxima. Para calculos de seguridad usar siempre la potencia nominal maxima del equipo.'
        en: 'Frequent error: using standby power instead of maximum power. For safety calculations always use maximum nominal device power.'
    next_step_rules:
    - id: P_next
      when: 'true'
      status: info
      text:
        es: 'Con P conocida, calcular I = P/V y luego P_on = I^2 * R_on para evaluar el riesgo termico del interruptor.'
        en: 'With P known, calculate I = P/V and then P_on = I^2 * R_on to evaluate switch thermal risk.'
  V:
    summary_rules:
    - id: V_summary
      when: 'true'
      status: info
      text:
        es: 'V es la tension de la instalacion. En Europa, 230 V a 50 Hz. Define la corriente I = P/V para una carga de potencia P dada.'
        en: 'V is the installation voltage. In Europe, 230 V at 50 Hz. Defines current I = P/V for a given load power P.'
    coherence_rules:
    - id: V_coherence
      when: 'true'
      status: ok
      text:
        es: 'En instalaciones residenciales europeas V = 230 V. A mayor V, menor I para la misma P, y por tanto menor P_on.'
        en: 'In European residential installations V = 230 V. Higher V means lower I for the same P, and therefore lower P_on.'
    physical_reading_rules:
    - id: V_physical
      when: 'true'
      status: info
      text:
        es: 'V define la escala de corriente: I = P/V. En instalaciones de 110 V (EE.UU.), la misma potencia requiere el doble de corriente y cuatro veces mas P_on en el interruptor.'
        en: 'V defines the current scale: I = P/V. In 110 V installations (US), the same power requires double the current and four times more P_on in the switch.'
    model_validity_rules:
    - id: V_validity
      when: 'true'
      status: ok
      text:
        es: 'V = 230 V es el valor nominal. Las fluctuaciones normales de tension afectan levemente a I pero el efecto sobre P_on es pequeno en condiciones de red estable.'
        en: 'V = 230 V is the nominal value. Normal voltage fluctuations slightly affect I but the effect on P_on is small under stable grid conditions.'
    graph_rules:
    - id: V_graph
      when: 'true'
      status: info
      text:
        es: 'V aparece como parametro de escala en el grafico I vs P: la pendiente de la recta I = P/V es 1/V.'
        en: 'V appears as a scale parameter in the I vs P graph: the slope of the line I = P/V is 1/V.'
    likely_errors:
    - id: V_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: usar V = 220 V en lugar de 230 V. La diferencia del 4% introduce un error sistematico del 4% en I y del 8% en P_on.'
        en: 'Frequent error: using V = 220 V instead of 230 V. The 4% difference introduces a 4% systematic error in I and 8% in P_on.'
    next_step_rules:
    - id: V_next
      when: 'true'
      status: info
      text:
        es: 'Con V conocida (230 V en Europa), calcular I = P/V para obtener la corriente de maniobra del interruptor.'
        en: 'With V known (230 V in Europe), calculate I = P/V to obtain the switch switching current.'
  t_on:
    summary_rules:
    - id: ton_summary
      when: 'true'
      status: info
      text:
        es: 't_on es el tiempo de conduccion del interruptor en el periodo de analisis. Junto con P_on determina la energia acumulada E_on.'
        en: 't_on is the switch conduction time in the analysis period. Together with P_on it determines accumulated energy E_on.'
    coherence_rules:
    - id: ton_coherence
      when: 'true'
      status: ok
      text:
        es: 't_on debe estar en segundos para obtener E_on en julios. 1 hora = 3600 s; 1 dia = 86 400 s; 1 anno = 31 536 000 s.'
        en: 't_on must be in seconds to get E_on in joules. 1 hour = 3600 s; 1 day = 86,400 s; 1 year = 31,536,000 s.'
    physical_reading_rules:
    - id: ton_physical
      when: 'true'
      status: info
      text:
        es: 't_on permite escalar el analisis termico de instantaneo (P_on) a acumulado (E_on). Para interruptores de uso continuo, t_on puede ser miles de horas al anno.'
        en: 't_on allows scaling the thermal analysis from instantaneous (P_on) to accumulated (E_on). For continuously used switches, t_on can be thousands of hours per year.'
    model_validity_rules:
    - id: ton_validity
      when: 'true'
      status: ok
      text:
        es: 'E_on = P_on * t_on asume P_on constante. Si la carga varia durante t_on, E_on es una estimacion del orden de magnitud.'
        en: 'E_on = P_on * t_on assumes constant P_on. If the load varies during t_on, E_on is an order-of-magnitude estimate.'
    graph_rules:
    - id: ton_graph
      when: 'true'
      status: info
      text:
        es: 'E_on vs t_on es una recta de pendiente P_on. Un interruptor con mayor P_on acumula energia mas rapidamente.'
        en: 'E_on vs t_on is a line with slope P_on. A switch with higher P_on accumulates energy faster.'
    likely_errors:
    - id: ton_error
      when: 'true'
      status: warning
      text:
        es: 'Error frecuente: olvidar convertir horas a segundos antes de calcular E_on. E_on = P_on * (horas * 3600).'
        en: 'Frequent error: forgetting to convert hours to seconds before calculating E_on. E_on = P_on * (hours * 3600).'
    next_step_rules:
    - id: ton_next
      when: 'true'
      status: info
      text:
        es: 'Con t_on y P_on calculados, obtener E_on = P_on * t_on y convertir a Wh dividiendo entre 3600 para una interpretacion energetica intuitiva.'
        en: 'With t_on and P_on calculated, obtain E_on = P_on * t_on and convert to Wh by dividing by 3600 for an intuitive energy interpretation.'
""", encoding='utf-8')
print('interpretacion.yaml OK')

print('\nPhase 5 done.')
