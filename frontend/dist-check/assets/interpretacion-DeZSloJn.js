const e=`version: 2\r
id: interpretacion-pendulo-simple\r
leaf_id: pendulo-simple\r
nombre:\r
  es: Interpretación del péndulo simple\r
  en: Interpretation of the simple pendulum\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: oscilaciones\r
  parent_id: oscilaciones\r
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/pendulo-simple\r
dependencies:\r
  formulas:\r
  - omega0_ps\r
  - periodo_ps\r
  - frecuencia_ps\r
  - ecuacion_angular_ps\r
  - ecuacion_no_lineal_ps\r
  - energia_ps\r
  magnitudes:\r
  - L\r
  - g\r
  - theta\r
  - theta0\r
  - omega0\r
  - T\r
  - f\r
  - t\r
  - phi\r
  - theta_dot\r
  - theta_dd\r
  - E\r
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
      es: Resumen físico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura física\r
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
      es: Lectura gráfica\r
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
  L:\r
    summary_rules:\r
    - id: L_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La longitud fija la escala temporal junto con la gravedad.\r
        en: Length sets the time scale together with gravity.\r
    physical_reading_rules:\r
    - id: L_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si L crece, el periodo aumenta porque la restauración tarda más en completar un ciclo.\r
        en: If L grows, the period increases because restoration takes longer to complete a cycle.\r
    coherence_rules:\r
    - id: L_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La longitud debe ser positiva y medirse desde el punto de suspensión.\r
        en: Length must be positive and measured from the suspension point.\r
    model_validity_rules:\r
    - id: L_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La relación lineal es válida solo con ángulos pequeños.\r
        en: The linear relation is valid only for small angles.\r
    graph_rules:\r
    - id: L_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La gráfica del periodo crece al aumentar L.\r
        en: The period graph rises as L increases.\r
    likely_errors:\r
    - id: L_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: medir L desde la masa y no desde el punto de suspensión."\r
        en: "Common mistake: measuring L from the mass instead of the suspension point."\r
    next_step_rules:\r
    - id: L_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa L para diseñar un periodo objetivo o verificar un experimento.\r
        en: Use L to design a target period or verify an experiment.\r
\r
  g:\r
    summary_rules:\r
    - id: g_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La gravedad determina la rapidez de la oscilación para una longitud dada.\r
        en: Gravity determines the oscillation speed for a given length.\r
    physical_reading_rules:\r
    - id: g_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Un g mayor hace que el periodo disminuya porque la restauración es más intensa.\r
        en: A larger g makes the period smaller because restoration is stronger.\r
    coherence_rules:\r
    - id: g_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El valor de g debe corresponder al entorno físico real.\r
        en: The value of g must correspond to the real physical environment.\r
    model_validity_rules:\r
    - id: g_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Cambios grandes de entorno exigen recalcular el modelo.\r
        en: Large environment changes require recalculating the model.\r
    graph_rules:\r
    - id: g_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La dependencia con g es inversa en el periodo.\r
        en: The dependence on g is inverse in the period.\r
    likely_errors:\r
    - id: g_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: usar g genérico sin justificar ubicación o unidades."\r
        en: "Common mistake: using generic g without justifying location or units."\r
    next_step_rules:\r
    - id: g_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Verifica g antes de comparar resultados entre laboratorios o planetas.\r
        en: Verify g before comparing results across labs or planets.\r
\r
  theta:\r
    summary_rules:\r
    - id: theta_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: El ángulo indica el estado instantáneo del péndulo respecto al equilibrio.\r
        en: The angle indicates the pendulum's instantaneous state relative to equilibrium.\r
    physical_reading_rules:\r
    - id: theta_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: El signo de theta muestra hacia qué lado se mueve el cuerpo y si la restauración actúa.\r
        en: The sign of theta shows which side the body moves to and whether restoration acts.\r
    coherence_rules:\r
    - id: theta_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Theta debe mantenerse en radianes cuando se usa la aproximación lineal.\r
        en: Theta must be kept in radians when using the linear approximation.\r
    model_validity_rules:\r
    - id: theta_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si theta deja de ser pequeña, la forma lineal ya no es suficiente.\r
        en: If theta stops being small, the linear form is no longer sufficient.\r
    graph_rules:\r
    - id: theta_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La gráfica de theta(t) muestra máximos, mínimos y cruces por equilibrio.\r
        en: The theta(t) graph shows maxima, minima, and equilibrium crossings.\r
    likely_errors:\r
    - id: theta_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: mezclar grados con radianes en la ecuación de movimiento."\r
        en: "Common mistake: mixing degrees and radians in the motion equation."\r
    next_step_rules:\r
    - id: theta_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa theta para decidir si debes pasar al modelo no lineal.\r
        en: Use theta to decide whether to move to the nonlinear model.\r
\r
  theta0:\r
    summary_rules:\r
    - id: theta0_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La amplitud fija el tamaño del desplazamiento inicial.\r
        en: Amplitude sets the size of the initial displacement.\r
    physical_reading_rules:\r
    - id: theta0_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Una amplitud mayor puede cambiar el periodo real y desplazar la lectura lineal.\r
        en: A larger amplitude can change the real period and shift the linear reading.\r
    coherence_rules:\r
    - id: theta0_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La amplitud debe ser no negativa y coherente con el modelo escogido.\r
        en: Amplitude must be non-negative and coherent with the chosen model.\r
    model_validity_rules:\r
    - id: theta0_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si theta0 es grande, conviene usar la ecuación no lineal.\r
        en: If theta0 is large, the nonlinear equation should be used.\r
    graph_rules:\r
    - id: theta0_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La amplitud controla la separación entre máximos en theta(t).\r
        en: Amplitude controls the spacing between maxima in theta(t).\r
    likely_errors:\r
    - id: theta0_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: asumir que cualquier amplitud sirve para el periodo lineal."\r
        en: "Common mistake: assuming any amplitude works for the linear period."\r
    next_step_rules:\r
    - id: theta0_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Revisa theta0 antes de decidir si la aproximación es fiable.\r
        en: Check theta0 before deciding whether the approximation is reliable.\r
\r
  omega0:\r
    summary_rules:\r
    - id: omega0_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La pulsación natural resume la rapidez angular propia del sistema.\r
        en: The natural angular frequency summarizes the system's intrinsic angular pace.\r
    physical_reading_rules:\r
    - id: omega0_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si omega0 sube, el sistema completa ciclos más rápido porque la restauración es más intensa.\r
        en: If omega0 rises, the system completes cycles faster because restoration is stronger.\r
    coherence_rules:\r
    - id: omega0_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Omega0 debe ser positiva y compatible con T y f.\r
        en: Omega0 must be positive and compatible with T and f.\r
    model_validity_rules:\r
    - id: omega0_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La pulsación lineal solo describe bien ángulos pequeños.\r
        en: The linear angular frequency only describes small angles well.\r
    graph_rules:\r
    - id: omega0_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Omega0 es la escala inversa que organiza la gráfica del periodo.\r
        en: Omega0 is the inverse scale that organizes the period graph.\r
    likely_errors:\r
    - id: omega0_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: confundir omega0 con frecuencia en Hz."\r
        en: "Common mistake: confusing omega0 with frequency in Hz."\r
    next_step_rules:\r
    - id: omega0_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa omega0 para anticipar si la respuesta será rápida o lenta.\r
        en: Use omega0 to anticipate whether the response will be fast or slow.\r
\r
  T:\r
    summary_rules:\r
    - id: T_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: El periodo es la magnitud temporal más directa para comparar ensayos.\r
        en: Period is the most direct time quantity for comparing trials.\r
    physical_reading_rules:\r
    - id: T_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Un T mayor significa oscilaciones más lentas porque cada ciclo tarda más.\r
        en: A larger T means slower oscillations because each cycle takes longer.\r
    coherence_rules:\r
    - id: T_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: T debe ser positiva y consistente con omega0 y f.\r
        en: T must be positive and consistent with omega0 and f.\r
    model_validity_rules:\r
    - id: T_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: T lineal es útil solo cuando la amplitud es pequeña.\r
        en: The linear T is useful only when the amplitude is small.\r
    graph_rules:\r
    - id: T_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La curva T(L) es una referencia directa del modelo.\r
        en: The T(L) curve is a direct reference of the model.\r
    likely_errors:\r
    - id: T_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: tomar medio periodo como si fuera T completo."\r
        en: "Common mistake: taking half a period as if it were the full T."\r
    next_step_rules:\r
    - id: T_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Compara T con f para comprobar coherencia numérica.\r
        en: Compare T with f to check numerical coherence.\r
\r
  f:\r
    summary_rules:\r
    - id: f_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La frecuencia mide ciclos por segundo y es el inverso del periodo.\r
        en: Frequency measures cycles per second and is the inverse of period.\r
    physical_reading_rules:\r
    - id: f_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si f sube, el tiempo entre repeticiones disminuye porque el ciclo se acelera.\r
        en: If f rises, the time between repetitions decreases because the cycle speeds up.\r
    coherence_rules:\r
    - id: f_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: F debe ser positiva y compatible con T.\r
        en: F must be positive and compatible with T.\r
    model_validity_rules:\r
    - id: f_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La interpretación en Hz vale mientras el movimiento siga siendo periódico.\r
        en: The Hz interpretation holds while the motion remains periodic.\r
    graph_rules:\r
    - id: f_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: F permite leer la rapidez del ciclo de forma directa.\r
        en: F lets you read cycle speed directly.\r
    likely_errors:\r
    - id: f_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: mezclar Hz con rad/s sin convertir."\r
        en: "Common mistake: mixing Hz and rad/s without converting."\r
    next_step_rules:\r
    - id: f_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa f para comparar el péndulo con otras oscilaciones.\r
        en: Use f to compare the pendulum with other oscillations.\r
\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: El tiempo organiza la evolución de las variables del péndulo.\r
        en: Time organizes the evolution of the pendulum variables.\r
    physical_reading_rules:\r
    - id: t_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: t permite leer máximos, mínimos y cruces de equilibrio como eventos sucesivos.\r
        en: t lets you read maxima, minima, and equilibrium crossings as successive events.\r
    coherence_rules:\r
    - id: t_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: t debe usarse como variable temporal no negativa en el intervalo observado.\r
        en: t must be used as a non-negative time variable in the observed interval.\r
    model_validity_rules:\r
    - id: t_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La referencia temporal debe ser coherente con las condiciones iniciales.\r
        en: The time reference must be coherent with the initial conditions.\r
    graph_rules:\r
    - id: t_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: El eje temporal conecta las medidas con la solución analítica.\r
        en: The time axis connects measurements to the analytic solution.\r
    likely_errors:\r
    - id: t_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: comparar tiempos sin fijar el mismo origen."\r
        en: "Common mistake: comparing times without fixing the same origin."\r
    next_step_rules:\r
    - id: t_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Define t = 0 antes de discutir la fase.\r
        en: Define t = 0 before discussing the phase.\r
\r
  phi:\r
    summary_rules:\r
    - id: phi_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La fase inicial desplaza la solución en el tiempo.\r
        en: The initial phase shifts the solution in time.\r
    physical_reading_rules:\r
    - id: phi_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Phi cambia cuándo aparecen máximos y mínimos, no la física del periodo.\r
        en: Phi changes when maxima and minima appear, not the physics of the period.\r
    coherence_rules:\r
    - id: phi_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La fase debe poder interpretarse como un desfase angular.\r
        en: The phase must be interpretable as an angular offset.\r
    model_validity_rules:\r
    - id: phi_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Phi no cambia el periodo, solo el punto de partida temporal.\r
        en: Phi does not change the period, only the temporal starting point.\r
    graph_rules:\r
    - id: phi_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La fase desplaza la gráfica sin cambiar su forma básica.\r
        en: The phase shifts the graph without changing its basic shape.\r
    likely_errors:\r
    - id: phi_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: atribuir a phi un cambio de longitud o gravedad."\r
        en: "Common mistake: attributing a change in length or gravity to phi."\r
    next_step_rules:\r
    - id: phi_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa phi para ajustar la condición inicial observada.\r
        en: Use phi to fit the observed initial condition.\r
\r
  theta_dot:\r
    summary_rules:\r
    - id: theta_dot_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La velocidad angular conecta movimiento y energía cinética.\r
        en: Angular velocity connects motion and kinetic energy.\r
    physical_reading_rules:\r
    - id: theta_dot_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: theta_dot cambia de signo cuando el cuerpo invierte el sentido.\r
        en: theta_dot changes sign when the body reverses direction.\r
    coherence_rules:\r
    - id: theta_dot_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Theta_dot debe ser coherente con theta y con la energía.\r
        en: Theta_dot must be coherent with theta and with energy.\r
    model_validity_rules:\r
    - id: theta_dot_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La magnitud es útil en el modelo ideal y también en el análisis energético.\r
        en: The magnitude is useful in the ideal model and in energy analysis.\r
    graph_rules:\r
    - id: theta_dot_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La velocidad angular es una lectura derivada de la gráfica de theta.\r
        en: Angular velocity is a derived reading from the theta graph.\r
    likely_errors:\r
    - id: theta_dot_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: confundir velocidad angular con pulsación natural."\r
        en: "Common mistake: confusing angular velocity with natural angular frequency."\r
    next_step_rules:\r
    - id: theta_dot_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa theta_dot para cerrar balances de energía.\r
        en: Use theta_dot to close energy balances.\r
\r
  theta_dd:\r
    summary_rules:\r
    - id: theta_dd_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La aceleración angular revela la restauración instantánea.\r
        en: Angular acceleration reveals the instantaneous restoration.\r
    physical_reading_rules:\r
    - id: theta_dd_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Theta_dd apunta hacia el equilibrio cuando el péndulo se aleja de él.\r
        en: Theta_dd points toward equilibrium when the pendulum moves away from it.\r
    coherence_rules:\r
    - id: theta_dd_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Theta_dd debe ser coherente con la ecuación no lineal.\r
        en: Theta_dd must be coherent with the nonlinear equation.\r
    model_validity_rules:\r
    - id: theta_dd_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Su lectura dinámica es más útil cuando la amplitud no es pequeña.\r
        en: Its dynamic reading is more useful when the amplitude is not small.\r
    graph_rules:\r
    - id: theta_dd_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La curvatura temporal se refleja en theta_dd.\r
        en: Temporal curvature is reflected in theta_dd.\r
    likely_errors:\r
    - id: theta_dd_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: creer que theta_dd y theta_dot son lo mismo."\r
        en: "Common mistake: thinking theta_dd and theta_dot are the same."\r
    next_step_rules:\r
    - id: theta_dd_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa theta_dd para decidir si la linealización sigue siendo válida.\r
        en: Use theta_dd to decide whether linearization remains valid.\r
\r
  E:\r
    summary_rules:\r
    - id: E_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La energía resume el intercambio entre velocidad y desplazamiento.\r
        en: Energy summarizes the exchange between speed and displacement.\r
    physical_reading_rules:\r
    - id: E_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: E permanece constante en el modelo ideal sin rozamiento.\r
        en: E remains constant in the ideal frictionless model.\r
    coherence_rules:\r
    - id: E_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La energía debe ser coherente con theta y theta_dot.\r
        en: Energy must be coherent with theta and theta_dot.\r
    model_validity_rules:\r
    - id: E_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La energía es especialmente útil cuando la amplitud deja de ser pequeña.\r
        en: Energy is especially useful when amplitude stops being small.\r
    graph_rules:\r
    - id: E_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La gráfica de energía ayuda a interpretar amplitudes finitas.\r
        en: The energy graph helps interpret finite amplitudes.\r
    likely_errors:\r
    - id: E_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error común: olvidar la parte potencial o la cinética."\r
        en: "Common mistake: forgetting the potential or kinetic part."\r
    next_step_rules:\r
    - id: E_next\r
      when: "true"\r
      status: tip\r
      text:\r
        es: Usa E para confirmar si conviene pasar al modelo no lineal.\r
        en: Use E to confirm whether you should move to the nonlinear model.\r
`;export{e as default};
