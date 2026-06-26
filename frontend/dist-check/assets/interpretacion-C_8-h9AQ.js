const e=`version: 2\r
id: interpretacion-interruptores\r
leaf_id: interruptores\r
nombre:\r
  es: Interpretacion de Interruptores\r
  en: Interpretation of Switches\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: electricidad-domestica\r
  parent_id: electricidad-domestica\r
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/interruptores\r
dependencies:\r
  formulas:\r
  - corriente\r
  - perdida_on\r
  - energia_on\r
  magnitudes:\r
  - P\r
  - V\r
  - I\r
  - R_on\r
  - P_on\r
  - t_on\r
  - E_on\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura del grafico\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  P_on:\r
    summary_rules:\r
    - id: Pon_high\r
      when: 'P_on > 5'\r
      status: error\r
      text:\r
        es: 'P_on > 5 W: disipacion de contacto elevada. Riesgo termico local significativo. Inspeccionar y sustituir el interruptor.'\r
        en: 'P_on > 5 W: high contact dissipation. Significant local thermal risk. Inspect and replace the switch.'\r
    - id: Pon_medium\r
      when: 'P_on >= 1 and P_on <= 5'\r
      status: warning\r
      text:\r
        es: 'P_on entre 1 y 5 W: disipacion moderada. Vigilar la temperatura del interruptor en uso continuo.'\r
        en: 'P_on between 1 and 5 W: moderate dissipation. Monitor switch temperature in continuous use.'\r
    - id: Pon_ok\r
      when: 'P_on < 1'\r
      status: ok\r
      text:\r
        es: 'P_on < 1 W: disipacion de contacto baja. Sin riesgo termico apreciable en condiciones normales.'\r
        en: 'P_on < 1 W: low contact dissipation. No appreciable thermal risk under normal conditions.'\r
    coherence_rules:\r
    - id: Pon_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'P_on = I^2 * R_on. Verificar que I esta en amperios y R_on en ohmios para obtener P_on en vatios.'\r
        en: 'P_on = I^2 * R_on. Verify I is in amperes and R_on in ohms to get P_on in watts.'\r
    physical_reading_rules:\r
    - id: Pon_physical\r
      when: 'P_on >= 1'\r
      status: warning\r
      text:\r
        es: 'P_on >= 1 W indica calentamiento apreciable del contacto. La dependencia cuadratica en I hace que duplicar la carga cuadruplique la disipacion.'\r
        en: 'P_on >= 1 W indicates noticeable contact heating. The quadratic dependence on I means doubling the load quadruples dissipation.'\r
    model_validity_rules:\r
    - id: Pon_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'El modelo P_on = I^2 * R_on es valido en regimen permanente con carga resistiva. Para cargas inductivas o ciclos frecuentes, el modelo estatico puede subestimar la degradacion real.'\r
        en: 'The model P_on = I^2 * R_on is valid in steady state with resistive load. For inductive loads or frequent cycles, the static model may underestimate actual degradation.'\r
    graph_rules:\r
    - id: Pon_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'P_on se puede representar como curva parabolica en funcion de I a R_on fija. La forma parabolica ilustra la dependencia cuadratica.'\r
        en: 'P_on can be represented as a parabolic curve vs I at fixed R_on. The parabolic shape illustrates the quadratic dependence.'\r
    likely_errors:\r
    - id: Pon_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: calcular P_on = I * R_on omitiendo el cuadrado de I. Verificar dimensionalmente: A^2 * ohm = W, no A * ohm = V.'\r
        en: 'Frequent error: calculating P_on = I * R_on omitting the square of I. Check dimensionally: A^2 * ohm = W, not A * ohm = V.'\r
    next_step_rules:\r
    - id: Pon_next\r
      when: 'P_on >= 1'\r
      status: warning\r
      text:\r
        es: 'Con P_on >= 1 W, calcular E_on = P_on * t_on para el periodo de uso y evaluar si la disipacion acumulada es relevante.'\r
        en: 'With P_on >= 1 W, calculate E_on = P_on * t_on for the usage period and evaluate whether accumulated dissipation is relevant.'\r
  E_on:\r
    summary_rules:\r
    - id: Eon_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'E_on es la energia total disipada en los contactos durante el periodo de conduccion. Se usa para analisis energetico, no como criterio de riesgo termico (ese es P_on).'\r
        en: 'E_on is the total energy dissipated in the contacts during the conduction period. Used for energy analysis, not as thermal risk criterion (that is P_on).'\r
    coherence_rules:\r
    - id: Eon_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'E_on = P_on * t_on. Con t_on en segundos y P_on en vatios, E_on en julios. Para convertir a Wh: E_on / 3600.'\r
        en: 'E_on = P_on * t_on. With t_on in seconds and P_on in watts, E_on in joules. To convert to Wh: E_on / 3600.'\r
    physical_reading_rules:\r
    - id: Eon_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'E_on grande no implica riesgo termico alto. El riesgo depende de P_on (potencia instantanea), no de E_on (energia acumulada). Un calentamiento de 0.1 W durante un dia da E_on grande pero temperatura de equilibrio baja.'\r
        en: 'Large E_on does not imply high thermal risk. Risk depends on P_on (instantaneous power), not E_on (accumulated energy). Heating of 0.1 W for a day gives large E_on but low equilibrium temperature.'\r
    model_validity_rules:\r
    - id: Eon_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'E_on = P_on * t_on es valido cuando P_on es aproximadamente constante durante t_on. Para ciclos de carga variable, E_on = integral de P_on dt.'\r
        en: 'E_on = P_on * t_on is valid when P_on is approximately constant during t_on. For variable load cycles, E_on = integral of P_on dt.'\r
    graph_rules:\r
    - id: Eon_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'E_on crece linealmente con t_on a P_on fija. La pendiente es P_on.'\r
        en: 'E_on grows linearly with t_on at fixed P_on. The slope is P_on.'\r
    likely_errors:\r
    - id: Eon_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: interpretar E_on grande como riesgo termico alto. E_on es energia acumulada; el riesgo termico lo determina P_on (la tasa de disipacion instantanea).'\r
        en: 'Frequent error: interpreting large E_on as high thermal risk. E_on is accumulated energy; thermal risk is determined by P_on (the instantaneous dissipation rate).'\r
    next_step_rules:\r
    - id: Eon_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Con E_on calculada, dividir entre 3 600 000 para obtener kWh y estimar el coste energetico de las perdidas del interruptor.'\r
        en: 'With E_on calculated, divide by 3,600,000 to get kWh and estimate the energy cost of switch losses.'\r
  I:\r
    summary_rules:\r
    - id: I_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'I es la corriente que el interruptor debe conducir. Se calcula como P/V para cargas resistivas. Define el dimensionamiento del interruptor y es la entrada para calcular P_on.'\r
        en: 'I is the current the switch must conduct. Calculated as P/V for resistive loads. Defines switch sizing and is the input for calculating P_on.'\r
    coherence_rules:\r
    - id: I_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'I = P/V. Con V = 230 V, un equipo de 2300 W demanda I = 10 A. Verificar que P esta en vatios y V en voltios.'\r
        en: 'I = P/V. With V = 230 V, a 2300 W device demands I = 10 A. Verify P is in watts and V in volts.'\r
    physical_reading_rules:\r
    - id: I_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'I determina cuanto se calienta el interruptor: P_on crece con I al cuadrado. Un interruptor de calefactor conduce 30-50 veces mas corriente que uno de iluminacion, generando 900-2500 veces mas calor en el contacto.'\r
        en: 'I determines how much the switch heats up: P_on grows with I squared. A heater switch conducts 30-50 times more current than a lighting switch, generating 900-2500 times more heat at the contact.'\r
    model_validity_rules:\r
    - id: I_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'I = P/V es valido para cargas con factor de potencia unitario. Para cargas inductivas o capacitivas, la corriente real puede ser mayor que P/V.'\r
        en: 'I = P/V is valid for unity power factor loads. For inductive or capacitive loads, actual current may be greater than P/V.'\r
    graph_rules:\r
    - id: I_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'I crece linealmente con P a V fija. En el eje horizontal P (vatios), el eje vertical I (amperios) tiene pendiente 1/V.'\r
        en: 'I grows linearly with P at fixed V. On the horizontal axis P (watts), the vertical axis I (amperes) has slope 1/V.'\r
    likely_errors:\r
    - id: I_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: incluir R_on en el calculo de I. R_on es tipicamente 0.01-0.1 ohm frente a R_carga de cientos de ohmios — su efecto sobre I es despreciable.'\r
        en: 'Frequent error: including R_on in the calculation of I. R_on is typically 0.01-0.1 ohm vs R_load of hundreds of ohms — its effect on I is negligible.'\r
    next_step_rules:\r
    - id: I_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Con I calculada, verificar que I <= I_nominal del interruptor y calcular P_on = I^2 * R_on para estimar el riesgo termico.'\r
        en: 'With I calculated, verify I <= nominal switch current and calculate P_on = I^2 * R_on to estimate thermal risk.'\r
  R_on:\r
    summary_rules:\r
    - id: Ron_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'R_on es la resistencia de los contactos del interruptor en estado ON. Es el parametro de calidad del contacto: bajo en interruptores nuevos, alto en envejecidos o degradados.'\r
        en: 'R_on is the resistance of switch contacts in ON state. It is the contact quality parameter: low in new switches, high in aged or degraded ones.'\r
    coherence_rules:\r
    - id: Ron_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'R_on tipica en interruptor nuevo: 0.01-0.05 ohm. Envejecido: 0.05-0.2 ohm. Degradado: 0.2-0.5 ohm. Por encima de 0.5 ohm: sustituir.'\r
        en: 'Typical R_on in new switch: 0.01-0.05 ohm. Aged: 0.05-0.2 ohm. Degraded: 0.2-0.5 ohm. Above 0.5 ohm: replace.'\r
    physical_reading_rules:\r
    - id: Ron_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'R_on es el parametro que diferencia el interruptor ideal (R_on = 0) del real. No es directamente observable, pero sus efectos (calentamiento, decoloracion) si lo son.'\r
        en: 'R_on is the parameter that distinguishes the ideal switch (R_on = 0) from the real one. It is not directly observable, but its effects (heating, discolouration) are.'\r
    model_validity_rules:\r
    - id: Ron_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'R_on como resistencia estatica es valida en regimen permanente. Para arcos intermitentes o contacto muy degradado, la disipacion real puede ser mayor que I^2 * R_on.'\r
        en: 'R_on as static resistance is valid in steady state. For intermittent arcing or severely degraded contact, actual dissipation may be greater than I^2 * R_on.'\r
    graph_rules:\r
    - id: Ron_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'R_on aparece como parametro de la curva parabolica P_on vs I. Mayor R_on desplaza la parabola hacia arriba.'\r
        en: 'R_on appears as a parameter of the parabolic P_on vs I curve. Higher R_on shifts the parabola upward.'\r
    likely_errors:\r
    - id: Ron_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: asumir R_on = 0 para todos los interruptores. Incluso interruptores nuevos tienen R_on > 0; los envejecidos pueden tener R_on diez veces mayor.'\r
        en: 'Frequent error: assuming R_on = 0 for all switches. Even new switches have R_on > 0; aged ones can have R_on ten times higher.'\r
    next_step_rules:\r
    - id: Ron_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Con R_on estimada o medida, calcular P_on = I^2 * R_on. Si P_on > 5 W, proceder a la inspeccion y sustitucion del interruptor.'\r
        en: 'With R_on estimated or measured, calculate P_on = I^2 * R_on. If P_on > 5 W, proceed to switch inspection and replacement.'\r
  P:\r
    summary_rules:\r
    - id: P_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'P es la potencia nominal de la carga que controla el interruptor. Es el dato de entrada mas accesible para calcular I = P/V.'\r
        en: 'P is the nominal power of the load controlled by the switch. It is the most accessible input data for calculating I = P/V.'\r
    coherence_rules:\r
    - id: P_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'P debe estar en vatios. Si la etiqueta indica kW, multiplicar por 1000. Para cargas resistivas, P activa = P aparente.'\r
        en: 'P must be in watts. If the label shows kW, multiply by 1000. For resistive loads, active P = apparent P.'\r
    physical_reading_rules:\r
    - id: P_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'P de la carga determina I = P/V y por tanto P_on = I^2 * R_on. Duplicar P cuadruplica P_on a R_on constante.'\r
        en: 'Load P determines I = P/V and therefore P_on = I^2 * R_on. Doubling P quadruples P_on at constant R_on.'\r
    model_validity_rules:\r
    - id: P_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'P nominal es el consumo maximo del equipo. Para seguridad, usar siempre P nominal maximo para dimensionar el interruptor.'\r
        en: 'Nominal P is maximum device consumption. For safety, always use maximum nominal P to size the switch.'\r
    graph_rules:\r
    - id: P_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'P aparece en el eje horizontal del grafico I vs P. I crece linealmente con P a V fija.'\r
        en: 'P appears on the horizontal axis of the I vs P graph. I grows linearly with P at fixed V.'\r
    likely_errors:\r
    - id: P_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: usar la potencia de standby en lugar de la potencia maxima. Para calculos de seguridad usar siempre la potencia nominal maxima del equipo.'\r
        en: 'Frequent error: using standby power instead of maximum power. For safety calculations always use maximum nominal device power.'\r
    next_step_rules:\r
    - id: P_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Con P conocida, calcular I = P/V y luego P_on = I^2 * R_on para evaluar el riesgo termico del interruptor.'\r
        en: 'With P known, calculate I = P/V and then P_on = I^2 * R_on to evaluate switch thermal risk.'\r
  V:\r
    summary_rules:\r
    - id: V_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'V es la tension de la instalacion. En Europa, 230 V a 50 Hz. Define la corriente I = P/V para una carga de potencia P dada.'\r
        en: 'V is the installation voltage. In Europe, 230 V at 50 Hz. Defines current I = P/V for a given load power P.'\r
    coherence_rules:\r
    - id: V_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'En instalaciones residenciales europeas V = 230 V. A mayor V, menor I para la misma P, y por tanto menor P_on.'\r
        en: 'In European residential installations V = 230 V. Higher V means lower I for the same P, and therefore lower P_on.'\r
    physical_reading_rules:\r
    - id: V_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'V define la escala de corriente: I = P/V. En instalaciones de 110 V (EE.UU.), la misma potencia requiere el doble de corriente y cuatro veces mas P_on en el interruptor.'\r
        en: 'V defines the current scale: I = P/V. In 110 V installations (US), the same power requires double the current and four times more P_on in the switch.'\r
    model_validity_rules:\r
    - id: V_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'V = 230 V es el valor nominal. Las fluctuaciones normales de tension afectan levemente a I pero el efecto sobre P_on es pequeno en condiciones de red estable.'\r
        en: 'V = 230 V is the nominal value. Normal voltage fluctuations slightly affect I but the effect on P_on is small under stable grid conditions.'\r
    graph_rules:\r
    - id: V_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'V aparece como parametro de escala en el grafico I vs P: la pendiente de la recta I = P/V es 1/V.'\r
        en: 'V appears as a scale parameter in the I vs P graph: the slope of the line I = P/V is 1/V.'\r
    likely_errors:\r
    - id: V_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: usar V = 220 V en lugar de 230 V. La diferencia del 4% introduce un error sistematico del 4% en I y del 8% en P_on.'\r
        en: 'Frequent error: using V = 220 V instead of 230 V. The 4% difference introduces a 4% systematic error in I and 8% in P_on.'\r
    next_step_rules:\r
    - id: V_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Con V conocida (230 V en Europa), calcular I = P/V para obtener la corriente de maniobra del interruptor.'\r
        en: 'With V known (230 V in Europe), calculate I = P/V to obtain the switch switching current.'\r
  t_on:\r
    summary_rules:\r
    - id: ton_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't_on es el tiempo de conduccion del interruptor en el periodo de analisis. Junto con P_on determina la energia acumulada E_on.'\r
        en: 't_on is the switch conduction time in the analysis period. Together with P_on it determines accumulated energy E_on.'\r
    coherence_rules:\r
    - id: ton_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 't_on debe estar en segundos para obtener E_on en julios. 1 hora = 3600 s; 1 dia = 86 400 s; 1 anno = 31 536 000 s.'\r
        en: 't_on must be in seconds to get E_on in joules. 1 hour = 3600 s; 1 day = 86,400 s; 1 year = 31,536,000 s.'\r
    physical_reading_rules:\r
    - id: ton_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't_on permite escalar el analisis termico de instantaneo (P_on) a acumulado (E_on). Para interruptores de uso continuo, t_on puede ser miles de horas al anno.'\r
        en: 't_on allows scaling the thermal analysis from instantaneous (P_on) to accumulated (E_on). For continuously used switches, t_on can be thousands of hours per year.'\r
    model_validity_rules:\r
    - id: ton_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'E_on = P_on * t_on asume P_on constante. Si la carga varia durante t_on, E_on es una estimacion del orden de magnitud.'\r
        en: 'E_on = P_on * t_on assumes constant P_on. If the load varies during t_on, E_on is an order-of-magnitude estimate.'\r
    graph_rules:\r
    - id: ton_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'E_on vs t_on es una recta de pendiente P_on. Un interruptor con mayor P_on acumula energia mas rapidamente.'\r
        en: 'E_on vs t_on is a line with slope P_on. A switch with higher P_on accumulates energy faster.'\r
    likely_errors:\r
    - id: ton_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: olvidar convertir horas a segundos antes de calcular E_on. E_on = P_on * (horas * 3600).'\r
        en: 'Frequent error: forgetting to convert hours to seconds before calculating E_on. E_on = P_on * (hours * 3600).'\r
    next_step_rules:\r
    - id: ton_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Con t_on y P_on calculados, obtener E_on = P_on * t_on y convertir a Wh dividiendo entre 3600 para una interpretacion energetica intuitiva.'\r
        en: 'With t_on and P_on calculated, obtain E_on = P_on * t_on and convert to Wh by dividing by 3600 for an intuitive energy interpretation.'\r
`;export{e as default};
