const e=`\uFEFFversion: 2\r
id: interpretacion-oscilador-masa-muelle\r
leaf_id: oscilador-masa-muelle\r
nombre:\r
  es: Interpretacion del oscilador masa muelle\r
  en: Interpretation of the mass-spring oscillator\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: oscilaciones\r
  parent_id: oscilaciones\r
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/oscilador-masa-muelle\r
dependencies:\r
  formulas:\r
  - pulsacion_natural\r
  - periodo_muelle\r
  - frecuencia_muelle\r
  - ecuacion_oscilacion\r
  - ley_hooke_conceptual\r
  magnitudes:\r
  - m\r
  - k\r
  - omega0\r
  - T\r
  - f\r
  - A\r
  - x\r
  - t\r
  - phi\r
  - F\r
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
      es: Lectura grafica\r
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
  omega0:\r
    summary_rules:\r
    - id: omega0_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La pulsacion natural fija la escala temporal del oscilador para condiciones lineales.\r
        en: Natural angular frequency sets the oscillator time scale under linear conditions.\r
    coherence_rules:\r
    - id: omega0_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser positiva y consistente con la pareja masa-rigidez usada.\r
        en: It must be positive and consistent with the mass-stiffness pair in use.\r
    physical_reading_rules:\r
    - id: omega0_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si aumenta k con m fija, la oscilacion se acelera porque el sistema recupera antes el equilibrio.\r
        en: If k increases at fixed m, oscillation speeds up because equilibrium is restored earlier.\r
    model_validity_rules:\r
    - id: omega0_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Es valida cuando el muelle permanece en su zona elastica y no hay no linealidades dominantes.\r
        en: It is valid when the spring stays in its elastic zone and dominant nonlinearities are absent.\r
    graph_rules:\r
    - id: omega0_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se observa por la separacion temporal entre picos de la grafica de desplazamiento.\r
        en: It is observed through peak spacing in the displacement graph.\r
    likely_errors:\r
    - id: omega0_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No confundas radianes por segundo con hertz; f es omega0 dividido entre 2 pi.\r
        en: Do not confuse radians per second with hertz; f equals omega0 divided by 2 pi.\r
    next_step_rules:\r
    - id: omega0_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa omega0 para construir la evolucion temporal en la ecuacion de oscilacion.\r
        en: Use omega0 to build time evolution in the oscillation equation.\r
\r
  k:\r
    summary_rules:\r
    - id: k_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La rigidez cuantifica cuanto aumenta la fuerza restauradora por unidad de deformacion.\r
        en: Stiffness quantifies how restoring force grows per unit deformation.\r
    coherence_rules:\r
    - id: k_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Valores negativos de k no representan un equilibrio estable en este leaf.\r
        en: Negative k values do not represent stable equilibrium in this leaf.\r
    physical_reading_rules:\r
    - id: k_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Un muelle mas rigido reduce el periodo y aumenta la fuerza necesaria para la misma amplitud.\r
        en: A stiffer spring reduces period and increases required force for the same amplitude.\r
    model_validity_rules:\r
    - id: k_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si la deformacion supera la zona lineal, el valor efectivo de k deja de ser constante.\r
        en: If deformation exceeds linear range, the effective k is no longer constant.\r
    graph_rules:\r
    - id: k_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En la curva F-x, k es el valor absoluto de la pendiente.\r
        en: In the F-x curve, k is the absolute value of slope.\r
    likely_errors:\r
    - id: k_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No introduzcas N en lugar de N/m al cargar la rigidez.\r
        en: Do not enter N instead of N/m when inputting stiffness.\r
    next_step_rules:\r
    - id: k_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contrasta el k identificado con el periodo experimental para verificar consistencia.\r
        en: Contrast identified k with experimental period to verify consistency.\r
\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La masa controla la inercia y ralentiza la respuesta oscilatoria cuando aumenta.\r
        en: Mass controls inertia and slows oscillatory response as it increases.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe expresarse en kilogramos para mantener coherencia dimensional.\r
        en: It must be expressed in kilograms to keep dimensional consistency.\r
    physical_reading_rules:\r
    - id: m_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: A igualdad de k, duplicar m incrementa el periodo por raiz de dos.\r
        en: At fixed k, doubling m increases period by square root of two.\r
    model_validity_rules:\r
    - id: m_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El modelo supone masa concentrada; distribuciones extensas requieren correccion modal.\r
        en: The model assumes lumped mass; distributed masses require modal correction.\r
    graph_rules:\r
    - id: m_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Mayor masa desplaza los picos de x(t) hacia tiempos mas largos.\r
        en: Larger mass shifts x(t) peaks toward later times.\r
    likely_errors:\r
    - id: m_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No confundas masa con peso; si partes de N, divide por g para obtener kg.\r
        en: Do not confuse mass with weight; if starting from N, divide by g to obtain kg.\r
    next_step_rules:\r
    - id: m_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Evalua sensibilidad variando m para estimar tolerancias de diseno.\r
        en: Evaluate sensitivity by varying m to estimate design tolerances.\r
\r
  T:\r
    summary_rules:\r
    - id: T_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: El periodo resume cuanto tarda el sistema en repetir estado dinamico.\r
        en: Period summarises how long the system takes to repeat a dynamical state.\r
    coherence_rules:\r
    - id: T_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe ser positivo y coherente con la frecuencia medida.\r
        en: It must be positive and coherent with measured frequency.\r
    physical_reading_rules:\r
    - id: T_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Periodos grandes indican respuesta lenta por inercia alta o rigidez baja.\r
        en: Large periods indicate slow response due to high inertia or low stiffness.\r
    model_validity_rules:\r
    - id: T_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El periodo observado debe mantenerse casi constante para afirmar regimen armonico lineal.\r
        en: Observed period should remain nearly constant to claim linear harmonic regime.\r
    graph_rules:\r
    - id: T_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se mide entre dos maximos consecutivos o dos cruces equivalentes de fase.\r
        en: It is measured between consecutive maxima or equivalent phase crossings.\r
    likely_errors:\r
    - id: T_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: Medir medio ciclo y llamarlo periodo duplica el error en frecuencia.\r
        en: Measuring half a cycle and calling it period doubles frequency error.\r
    next_step_rules:\r
    - id: T_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Convierte T a f para comparar con especificaciones de operacion.\r
        en: Convert T to f to compare with operation specifications.\r
\r
  f:\r
    summary_rules:\r
    - id: f_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La frecuencia indica cuantos ciclos completos ocurren cada segundo.\r
        en: Frequency indicates how many full cycles occur each second.\r
    coherence_rules:\r
    - id: f_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe satisfacer f multiplicada por T cercana a uno.\r
        en: It should satisfy f times T close to one.\r
    physical_reading_rules:\r
    - id: f_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Al subir f, aumenta el numero de oscilaciones observadas en una ventana fija.\r
        en: As f rises, more oscillations are observed in a fixed window.\r
    model_validity_rules:\r
    - id: f_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Comparar frecuencia medida y teorica permite detectar amortiguamiento no modelado.\r
        en: Comparing measured and theoretical frequency helps detect unmodelled damping.\r
    graph_rules:\r
    - id: f_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se estima contando ciclos y dividiendo por el tiempo total observado.\r
        en: It is estimated by counting cycles and dividing by total observed time.\r
    likely_errors:\r
    - id: f_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No mezcles Hz y rad/s sin conversion explicita por 2 pi.\r
        en: Do not mix Hz and rad/s without explicit conversion by 2 pi.\r
    next_step_rules:\r
    - id: f_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa f para verificar alejamiento o cercania a un forzamiento externo periodico.\r
        en: Use f to verify distance from an external periodic forcing.\r
\r
  x:\r
    summary_rules:\r
    - id: x_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: El desplazamiento instantaneo ubica la masa respecto al equilibrio con signo.\r
        en: Instant displacement locates the mass relative to equilibrium with sign.\r
    coherence_rules:\r
    - id: x_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El valor absoluto de x no debe superar la amplitud en el modelo armonico ideal.\r
        en: Absolute x should not exceed amplitude in ideal harmonic model.\r
    physical_reading_rules:\r
    - id: x_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambios de signo en x identifican cruces de equilibrio y cambio de direccion de fuerza.\r
        en: Sign changes in x identify equilibrium crossings and force-direction changes.\r
    model_validity_rules:\r
    - id: x_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si aparecen recortes o asimetrias fuertes en x(t), revisa no linealidades.\r
        en: If strong clipping or asymmetry appears in x(t), check nonlinear effects.\r
    graph_rules:\r
    - id: x_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En x(t), picos y valles delimitan amplitud y periodo del movimiento.\r
        en: In x(t), peaks and troughs define motion amplitude and period.\r
    likely_errors:\r
    - id: x_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: No confundas desplazamiento con distancia recorrida acumulada.\r
        en: Do not confuse displacement with accumulated travelled distance.\r
    next_step_rules:\r
    - id: x_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa x para calcular energia potencial elastica en diferentes instantes.\r
        en: Use x to compute elastic potential energy at different instants.\r
\r
  F:\r
    summary_rules:\r
    - id: F_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La fuerza restauradora apunta al equilibrio y es proporcional al desplazamiento en modulo.\r
        en: Restoring force points to equilibrium and is proportional to displacement magnitude.\r
    coherence_rules:\r
    - id: F_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El signo de F debe ser opuesto al de x para mantener estabilidad local.\r
        en: F sign should oppose x sign to maintain local stability.\r
    physical_reading_rules:\r
    - id: F_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cuando la masa se aleja mas del equilibrio, la fuerza de retorno crece.\r
        en: As mass moves farther from equilibrium, restoring force grows.\r
    model_validity_rules:\r
    - id: F_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La proporcionalidad lineal se rompe si el material entra en deformacion no elastica.\r
        en: Linear proportionality breaks when material enters non-elastic deformation.\r
    graph_rules:\r
    - id: F_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En F-x, la pendiente negativa constante confirma comportamiento hookeano lineal.\r
        en: In F-x, constant negative slope confirms linear Hookean behaviour.\r
    likely_errors:\r
    - id: F_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: Ignorar el signo en la ley conceptual impide interpretar direccion de movimiento.\r
        en: Ignoring the sign in conceptual law prevents direction interpretation.\r
    next_step_rules:\r
    - id: F_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Combina F con x para estimar energia almacenada y margen de seguridad estructural.\r
        en: Combine F with x to estimate stored energy and structural safety margin.\r
`;export{e as default};
