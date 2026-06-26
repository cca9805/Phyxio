const e=`version: 1\r
id: interpretacion-ejemplos-clasicos\r
leaf_id: ejemplos-clasicos\r
nombre:\r
  es: Interpretacion de ejemplos clasicos de rodadura\r
  en: Interpretation of classic rolling examples\r
scope:\r
  es: lectura de calculadora, coherencia fisica y deteccion de deslizamiento\r
  en: calculator reading, physical coherence, and slip detection\r
dependencies:\r
  magnitudes:\r
  - R\r
  - delta\r
  - n\r
  - omega\r
  - v\r
  formulas:\r
  - condicion_rodadura\r
  - conversion_rpm_rad\r
  - residuo_rodadura\r
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
      es: Resumen\r
      en: Summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia fisica\r
      en: Physical coherence\r
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
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v representa el avance lineal instantaneo del sistema.\r
        en: v represents the instantaneous linear advance of the system.\r
    physical_reading_rules:\r
    - id: v_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su modulo aumenta cuando la rueda cubre mas distancia por unidad de tiempo.\r
        en: Its magnitude grows when the wheel covers more distance per unit time.\r
    coherence_rules:\r
    - id: v_coherence\r
      when: abs(delta) <= 0.5\r
      status: ok\r
      text:\r
        es: v es coherente con rodadura casi pura dentro del umbral de residual.\r
        en: v is coherent with near-pure rolling within residual threshold.\r
    model_validity_rules:\r
    - id: v_validity\r
      when: R > 0\r
      status: info\r
      text:\r
        es: La lectura de v es valida si R es positivo y el contacto es continuo.\r
        en: v reading is valid if R is positive and contact remains continuous.\r
    graph_rules:\r
    - id: v_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En la grafica, comparar v contra omega*R confirma acoplamiento cinematica.\r
        en: On the graph, comparing v against omega*R confirms kinematic coupling.\r
    likely_errors:
    - id: v_error
      when: abs(v) > 60
      status: warning
      text:
        es: Un error frecuente es confundir la velocidad lineal media con una lectura instantanea o mezclar m/s con km/h; revisa unidades y ventana temporal.
        en: A common mistake is to confuse average linear speed with an instantaneous reading or to mix m/s with km/h; recheck units and time window.
    next_step_rules:\r
    - id: v_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Calcula delta para decidir si hay derrape o patinamiento.\r
        en: Compute delta to decide whether skidding or spin-out is present.\r
  omega:\r
    summary_rules:\r
    - id: omega_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omega cuantifica la velocidad de giro del cuerpo.\r
        en: omega quantifies body rotation speed.\r
    physical_reading_rules:\r
    - id: omega_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Debe crecer en paralelo con v cuando R permanece constante.\r
        en: It should grow with v when R stays constant.\r
    coherence_rules:\r
    - id: omega_coherence\r
      when: abs(delta) <= 0.5\r
      status: ok\r
      text:\r
        es: omega es compatible con el valor lineal reportado en v.\r
        en: omega is compatible with the reported linear value in v.\r
    model_validity_rules:\r
    - id: omega_validity\r
      when: R > 0\r
      status: info\r
      text:\r
        es: La interpretacion requiere radio positivo y convenio de signo consistente.\r
        en: Interpretation requires positive radius and consistent sign convention.\r
    graph_rules:\r
    - id: omega_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La curva angular debe mantener relacion estable con la curva lineal.\r
        en: Angular curve should keep a stable relation with linear curve.\r
    likely_errors:
    - id: omega_error
      when: abs(omega) > 500
      status: warning
      text:
        es: Posible confusion entre rpm y rad/s; muchos alumnos suponen que n y omega son el mismo dato y sobredimensionan el giro.
        en: Possible confusion between rpm and rad/s; many learners assume n and omega are the same datum and overscale rotation.
    next_step_rules:\r
    - id: omega_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si n esta disponible, valida conversion_rpm_rad para cerrar consistencia.\r
        en: If n is available, validate conversion_rpm_rad to close consistency checks.\r
  R:\r
    summary_rules:\r
    - id: R_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: R fija la escala geometrica del acoplamiento de rodadura.\r
        en: R sets geometric scale for rolling coupling.\r
    physical_reading_rules:\r
    - id: R_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambios en R alteran la conversion directa entre giro y avance.\r
        en: Changes in R alter direct conversion between spin and advance.\r
    coherence_rules:\r
    - id: R_coherence\r
      when: R > 0\r
      status: ok\r
      text:\r
        es: R positivo conserva interpretacion fisica del problema.\r
        en: Positive R preserves physical interpretation of the problem.\r
    model_validity_rules:\r
    - id: R_validity\r
      when: R > 0\r
      status: info\r
      text:\r
        es: El modelo deja de ser util si R es cero o negativo.\r
        en: Model stops being useful if R is zero or negative.\r
    graph_rules:\r
    - id: R_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafica, R actua como factor de pendiente entre v y omega.\r
        en: On the graph, R acts as a slope factor between v and omega.\r
    likely_errors:\r
    - id: R_error\r
      when: R <= 0\r
      status: warning\r
      text:\r
        es: R no valida; corregir geometria o unidad usada.\r
        en: Invalid R; correct geometry or selected unit.\r
    next_step_rules:\r
    - id: R_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Recalcula omega con el valor corregido de R.\r
        en: Recompute omega with corrected R value.\r
  delta:\r
    summary_rules:\r
    - id: delta_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: delta resume la desviacion respecto a rodadura ideal.\r
        en: delta summarizes deviation from ideal rolling.\r
    physical_reading_rules:\r
    - id: delta_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su signo orienta el tipo de deslizamiento observado.\r
        en: Its sign indicates observed slip type.\r
    coherence_rules:\r
    - id: delta_coherence\r
      when: abs(delta) <= 0.5\r
      status: ok\r
      text:\r
        es: El sistema opera en zona de rodadura casi pura.\r
        en: System operates in near-pure rolling zone.\r
    model_validity_rules:\r
    - id: delta_validity\r
      when: R > 0\r
      status: info\r
      text:\r
        es: El diagnostico es robusto si las entradas se midieron en el mismo instante.\r
        en: Diagnosis is robust if inputs were measured at the same instant.\r
    graph_rules:\r
    - id: delta_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cruces por cero de delta marcan cambios de regimen.\r
        en: Zero crossings of delta mark regime changes.\r
    likely_errors:
    - id: delta_error
      when: abs(delta) > 0.5
      status: warning
      text:
        es: Un error habitual es culpar solo al contacto; antes conviene revisar sincronizacion, radio efectivo y conversion de n a omega.
        en: A common mistake is to blame contact alone; first review timing, effective radius, and conversion from n to omega.
    next_step_rules:\r
    - id: delta_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Evalua causas mecanicas del residuo y decide accion correctiva.\r
        en: Evaluate mechanical causes of residual and decide corrective action.\r
  n:\r
    summary_rules:\r
    - id: n_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: n aporta la lectura instrumental en rpm.\r
        en: n provides instrumentation reading in rpm.\r
    physical_reading_rules:\r
    - id: n_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permite estimar omega antes de aplicar la condicion de rodadura.\r
        en: It allows estimating omega before applying rolling condition.\r
    coherence_rules:\r
    - id: n_coherence\r
      when: n >= 0\r
      status: ok\r
      text:\r
        es: n no negativa mantiene convenio operativo simple en este leaf.\r
        en: Non-negative n maintains a simple operating convention in this leaf.\r
    model_validity_rules:\r
    - id: n_validity\r
      when: n >= 0\r
      status: info\r
      text:\r
        es: Valores negativos requieren convenio adicional no cubierto aqui.\r
        en: Negative values require extra convention not covered here.\r
    graph_rules:\r
    - id: n_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Graficar n y omega ayuda a detectar conversiones inconsistentes.\r
        en: Plotting n and omega helps detect inconsistent conversions.\r
    likely_errors:
    - id: n_error
      when: n > 6000
      status: warning
      text:
        es: n muy alta para escenario didactico; puede haber saturacion del sensor o confusion entre frecuencia y conteo acumulado.
        en: n is very high for a didactic scenario; there may be sensor saturation or confusion between frequency and accumulated count.
    next_step_rules:\r
    - id: n_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Convierte n con conversion_rpm_rad y cierra chequeo de unidades.\r
        en: Convert n using conversion_rpm_rad and close unit checks.\r
`;export{e as default};
