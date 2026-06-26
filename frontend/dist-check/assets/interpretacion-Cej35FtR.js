const e=`version: 1\r
id: interpretacion-teorema-de-ejes-paralelos\r
leaf_id: teorema-de-ejes-paralelos\r
nombre:\r
  es: Interpretacion del teorema de ejes paralelos\r
  en: Interpretation of parallel axis theorem\r
scope:\r
  es: lectura numerica de Steiner, coherencia de ejes y errores de distancia al centro de masa\r
  en: numerical reading of Steiner theorem, axis coherence, and center-of-mass distance mistakes\r
dependencies:\r
  magnitudes:\r
  - I\r
  - Icm\r
  - alpha\r
  - d\r
  - m\r
  - tau\r
  formulas:\r
  - respuesta-rotacional\r
  - steiner-directa\r
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
      es: Errores comunes\r
      en: Common errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  I:\r
    summary_rules:\r
    - id: I_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: "Alejar el eje del centro de masas aumenta I cuadraticamente con d. Cuanto mayor es d, mas domina el termino de traslacion m*d^2 sobre Icm, lo que significa que el sistema se vuelve progresivamente mas resistente al giro. Esto implica que I es siempre mayor que Icm para cualquier eje paralelo desplazado."\r
        en: "Moving the axis away from the center of mass increases I quadratically with d. The larger d is, the more the translational term m*d^2 dominates over Icm, which means the system becomes progressively more resistant to rotation. This implies I is always greater than Icm for any displaced parallel axis."\r
    coherence_rules:\r
    - id: I_coherence_bound\r
      when: I >= Icm\r
      status: ok\r
      text:\r
        es: Para ejes paralelos, I no debe ser menor que Icm.\r
        en: For parallel axes, I should not be lower than Icm.\r
    physical_reading_rules:\r
    - id: I_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Alejar el eje del centro de masa aumenta la inercia de giro.\r
        en: Moving axis away from center of mass increases rotational inertia.\r
    model_validity_rules:\r
    - id: I_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Requiere ejes paralelos y cuerpo rigido.\r
        en: Requires parallel axes and a rigid body.\r
    graph_rules:\r
    - id: I_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La curva I-d debe crecer de forma cuadratica.\r
        en: I-d curve should grow quadratically.\r
    likely_errors:\r
    - id: I_error_cm\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: "Confundir I con Icm: el alumno suele pensar que steiner-directa traslada I entre cualquier par de ejes arbitrarios sin necesidad de pasar por el centro de masas. Esto produce un I incorrecto que puede resultar menor que Icm. Tambien se suele olvidar elevar d al cuadrado, lo que rompe la coherencia dimensional."\r
        en: "Confuse I with Icm: students often believe that steiner-directa translates I between any pair of parallel axes without going through the center of mass. This produces an incorrect I that may be smaller than Icm. Students also tend to forget squaring d, which breaks dimensional coherence."\r
    next_step_rules:\r
    - id: I_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con I y tau calcula alpha para evaluar respuesta dinamica.\r
        en: With I and tau, compute alpha to evaluate dynamic response.\r
  d:\r
    summary_rules:\r
    - id: d_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: d mide el desplazamiento entre eje central y eje paralelo nuevo.\r
        en: d measures displacement between central axis and new parallel axis.\r
    coherence_rules:\r
    - id: d_coherence_nonneg\r
      when: d >= 0\r
      status: ok\r
      text:\r
        es: d se interpreta como distancia y no puede ser negativa.\r
        en: d is a distance and cannot be negative.\r
    physical_reading_rules:\r
    - id: d_physical_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Pequenos cambios en d pueden cambiar mucho I por dependencia cuadratica.\r
        en: Small changes in d can strongly modify I due to quadratic dependence.\r
    model_validity_rules:\r
    - id: d_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: d debe medirse en la perpendicular correcta entre ejes.\r
        en: d must be measured on the correct perpendicular between axes.\r
    graph_rules:\r
    - id: d_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si d aumenta, I debe crecer de manera monotona.\r
        en: As d increases, I should increase monotonically.\r
    likely_errors:\r
    - id: d_error_units\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: introducir d en cm mientras el resto esta en m.'\r
        en: 'Common error: entering d in cm while the rest is in m.'\r
    next_step_rules:\r
    - id: d_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica sensibilidad de I ante incertidumbre de medida en d.\r
        en: Check sensitivity of I to measurement uncertainty in d.\r
  Icm:\r
    summary_rules:\r
    - id: Icm_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Icm: lectura resumida disponible.'\r
        en: 'Icm: summary reading available.'\r
    coherence_rules:\r
    - id: Icm_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Icm: verificar coherencia con el resto de variables.'\r
        en: 'Icm: check coherence with the rest of the variables.'\r
    physical_reading_rules:\r
    - id: Icm_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Icm: interpretar en el contexto fisico del problema.'\r
        en: 'Icm: interpret within the physical context of the problem.'\r
    model_validity_rules:\r
    - id: Icm_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Icm: confirmar hipotesis y rango de validez del modelo.'\r
        en: 'Icm: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: Icm_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Icm: revisar correspondencia con la representacion grafica.'\r
        en: 'Icm: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: Icm_likely_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: usar Icm sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using Icm without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: Icm_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar Icm con una ecuacion independiente.'\r
        en: 'Next step: cross-check Icm with an independent equation.'\r
  alpha:\r
    summary_rules:\r
    - id: alpha_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'alpha: lectura resumida disponible.'\r
        en: 'alpha: summary reading available.'\r
    coherence_rules:\r
    - id: alpha_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'alpha: verificar coherencia con el resto de variables.'\r
        en: 'alpha: check coherence with the rest of the variables.'\r
    physical_reading_rules:\r
    - id: alpha_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'alpha: interpretar en el contexto fisico del problema.'\r
        en: 'alpha: interpret within the physical context of the problem.'\r
    model_validity_rules:\r
    - id: alpha_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'alpha: confirmar hipotesis y rango de validez del modelo.'\r
        en: 'alpha: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: alpha_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'alpha: revisar correspondencia con la representacion grafica.'\r
        en: 'alpha: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: alpha_likely_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: usar alpha sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using alpha without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: alpha_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar alpha con una ecuacion independiente.'\r
        en: 'Next step: cross-check alpha with an independent equation.'\r
  tau:\r
    summary_rules:\r
    - id: tau_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'tau: lectura resumida disponible.'\r
        en: 'tau: summary reading available.'\r
    coherence_rules:\r
    - id: tau_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'tau: verificar coherencia con el resto de variables.'\r
        en: 'tau: check coherence with the rest of the variables.'\r
    physical_reading_rules:\r
    - id: tau_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'tau: interpretar en el contexto fisico del problema.'\r
        en: 'tau: interpret within the physical context of the problem.'\r
    model_validity_rules:\r
    - id: tau_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'tau: confirmar hipotesis y rango de validez del modelo.'\r
        en: 'tau: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: tau_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'tau: revisar correspondencia con la representacion grafica.'\r
        en: 'tau: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: tau_likely_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: usar tau sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using tau without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: tau_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar tau con una ecuacion independiente.'\r
        en: 'Next step: cross-check tau with an independent equation.'\r
`;export{e as default};
