const e=`version: 2\r
id: interpretacion-circuitos-rlc\r
leaf_id: circuitos-rlc\r
nombre:\r
  es: Interpretacion de circuitos rlc\r
  en: Interpretation of RLC circuits\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-alterna\r
  parent_id: corriente-alterna\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-alterna/circuitos-rlc\r
dependencies:\r
  formulas:\r
  - impedancia_rlc\r
  - corriente_total\r
  - desfase_rlc\r
  - potencia_activa\r
  - potencia_reactiva\r
  - potencia_aparente\r
  magnitudes:\r
  - Z\r
  - R\r
  - Xl\r
  - Xc\r
  - I\r
  - V\r
  - phi\r
  - P\r
  - Q\r
  - S\r
output_contract:\r
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
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
      es: Lectura estructural\r
      en: Structural reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  Z:\r
    summary_rules:\r
    - id: z_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Z resume la oposicion total de la rama RLC y controla directamente la corriente eficaz.\r
        en: Z summarizes total opposition of the RLC branch and directly controls effective current.\r
    physical_reading_rules:\r
    - id: z_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Z se acerca a R, la carga esta cerca de compensacion reactiva y la corriente puede crecer para una misma tension.\r
        en: If Z approaches R, the load is close to reactive compensation and current may grow for the same voltage.\r
    coherence_rules:\r
    - id: z_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Z no debe ser menor que R en el modelo serie lineal del leaf.\r
        en: Z must not be smaller than R in the linear series model of the leaf.\r
    model_validity_rules:\r
    - id: z_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura de Z es valida si Xl y Xc fueron calculadas a una misma frecuencia y con elementos lineales.\r
        en: Z reading is valid if Xl and Xc were computed at the same frequency and with linear elements.\r
    graph_rules:\r
    - id: z_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Z se interpreta como modulo asociado al desequilibrio reactivo Xl menos Xc.\r
        en: In Coord, Z is interpreted as magnitude associated with reactive imbalance Xl minus Xc.\r
    likely_errors:\r
    - id: z_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: sumar R, Xl y Xc de forma escalar sin respetar la cuadratura.'\r
        en: 'Common mistake: adding R, Xl, and Xc as scalars without respecting quadrature.'\r
    next_step_rules:\r
    - id: z_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Z para contrastar si la corriente prevista es aceptable para fuente y cableado.\r
        en: Use Z to contrast whether predicted current is acceptable for source and wiring.\r
  I:\r
    summary_rules:\r
    - id: i_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I es la demanda eficaz total que la fuente debe entregar al circuito serie.\r
        en: I is the total effective demand that the source must deliver to the series circuit.\r
    physical_reading_rules:\r
    - id: i_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una I alta no implica automaticamente gran potencia util si el desfase sigue siendo importante.\r
        en: High current does not automatically imply large useful power if phase shift remains important.\r
    coherence_rules:\r
    - id: i_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si Z baja a tension fija, I debe subir de forma coherente.\r
        en: If Z decreases at fixed voltage, current must rise coherently.\r
    model_validity_rules:\r
    - id: i_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura es valida solo si V y Z estan en RMS y el circuito ya esta en estacionario sinusoidal.\r
        en: Reading is valid only if V and Z are RMS and the circuit is already in sinusoidal steady state.\r
    graph_rules:\r
    - id: i_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En una lectura estructural, I responde de forma inversa al modulo de Z.\r
        en: In structural reading, current responds inversely to impedance magnitude.\r
    likely_errors:\r
    - id: i_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: usar tension pico con corriente RMS y distorsionar el resultado.'\r
        en: 'Frequent error: using peak voltage with RMS current and distorting the result.'\r
    next_step_rules:\r
    - id: i_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta si la corriente calculada obliga a redimensionar conductores o protecciones.\r
        en: Check whether computed current forces cable or protection resizing.\r
  phi:\r
    summary_rules:\r
    - id: phi_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Phi traduce el equilibrio entre respuesta inductiva y capacitiva del circuito.\r
        en: Phase shift translates balance between inductive and capacitive response.\r
    physical_reading_rules:\r
    - id: phi_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Phi positiva indica dominio inductivo; phi negativa indica dominio capacitivo; phi cercana a cero indica compensacion.\r
        en: Positive phase shift indicates inductive dominance; negative shift indicates capacitive dominance; near-zero shift indicates compensation.\r
    coherence_rules:\r
    - id: phi_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de phi debe coincidir con el signo de Xl menos Xc en la convencion del leaf.\r
        en: Phase sign must match the sign of Xl minus Xc in the leaf convention.\r
    model_validity_rules:\r
    - id: phi_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La interpretacion de phi requiere una sola frecuencia de trabajo y una convencion de signos consistente.\r
        en: Interpreting phase shift requires one operating frequency and a consistent sign convention.\r
    graph_rules:\r
    - id: phi_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Graficamente, phi se vincula al cambio de caracter del circuito al cruzar la compensacion reactiva.\r
        en: Graphically, phase shift is linked to the character change when reactive compensation is crossed.\r
    likely_errors:\r
    - id: phi_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: quedarse con el modulo del angulo y perder el signo fisico del regimen.'\r
        en: 'Common mistake: keeping only the angle magnitude and losing the physical sign of the regime.'\r
    next_step_rules:\r
    - id: phi_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa phi para decidir si conviene compensar la carga.\r
        en: Use phase shift to decide whether the load should be compensated.\r
  P:\r
    summary_rules:\r
    - id: p_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P mide la parte de la demanda electrica que realmente se transforma en transferencia media neta.\r
        en: Active power measures the part of electrical demand that truly becomes net average transfer.\r
    physical_reading_rules:\r
    - id: p_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si P es modesta pero I es alta, el problema operativo suele ser bajo factor de potencia.\r
        en: If active power is modest but current is high, the operational issue is usually poor power factor.\r
    coherence_rules:\r
    - id: p_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: P debe ser menor o igual que S para este modelo pasivo.\r
        en: Active power must be less than or equal to apparent power in this passive model.\r
    model_validity_rules:\r
    - id: p_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura es valida si V, I y phi proceden del mismo estado estacionario.\r
        en: Reading is valid if V, I, and phase shift come from the same steady state.\r
    graph_rules:\r
    - id: p_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Estructuralmente, P es la proyeccion util de la demanda total del circuito.\r
        en: Structurally, active power is the useful projection of total circuit demand.\r
    likely_errors:\r
    - id: p_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: confundir P con la potencia total exigida a la fuente.'\r
        en: 'Frequent error: confusing active power with total power demanded from the source.'\r
    next_step_rules:\r
    - id: p_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Compara P con S para valorar si la instalacion necesita correccion del factor de potencia.\r
        en: Compare active and apparent power to assess whether power-factor correction is needed.\r
  Q:\r
    summary_rules:\r
    - id: q_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Q cuantifica el intercambio alterno de energia asociado al desfase del circuito.\r
        en: Reactive power quantifies the alternating energy exchange associated with phase shift.\r
    physical_reading_rules:\r
    - id: q_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Q positiva describe dominio inductivo; Q negativa describe dominio capacitivo.\r
        en: Positive reactive power describes inductive dominance; negative reactive power describes capacitive dominance.\r
    coherence_rules:\r
    - id: q_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si phi se aproxima a cero, Q debe reducirse de forma marcada.\r
        en: If phase shift approaches zero, reactive power should decrease sharply.\r
    model_validity_rules:\r
    - id: q_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La interpretacion del signo de Q depende de mantener la convencion declarada para phi.\r
        en: Interpreting the sign of reactive power depends on preserving the declared convention for phase shift.\r
    graph_rules:\r
    - id: q_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En Coord, Q indica de que lado del equilibrio reactivo opera el circuito.\r
        en: In Coord, reactive power indicates on which side of reactive balance the circuit operates.\r
    likely_errors:\r
    - id: q_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: llamar desperdicio a toda potencia reactiva sin analizar su papel dinamico.'\r
        en: 'Common mistake: calling all reactive power waste without analyzing its dynamic role.'\r
    next_step_rules:\r
    - id: q_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Q para decidir si conviene compensar con elementos reactivos adicionales.\r
        en: Use reactive power to decide whether additional reactive elements are convenient.\r
  S:\r
    summary_rules:\r
    - id: s_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: S fija la demanda total que ve la fuente aunque una parte no se convierta en potencia activa.\r
        en: Apparent power sets total demand seen by the source even if part of it does not become active power.\r
    physical_reading_rules:\r
    - id: s_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: S gobierna dimensionado electrico de generadores, inversores, transformadores y conductores.\r
        en: Apparent power governs electrical sizing of generators, inverters, transformers, and conductors.\r
    coherence_rules:\r
    - id: s_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: S debe ser mayor o igual que P en este leaf.\r
        en: Apparent power must be greater than or equal to active power in this leaf.\r
    model_validity_rules:\r
    - id: s_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La lectura de S es valida si se preserva la definicion RMS de V e I.\r
        en: Apparent-power reading is valid if RMS definition of V and I is preserved.\r
    graph_rules:\r
    - id: s_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En lectura estructural, S es el techo de demanda total sobre el que se proyectan P y Q.\r
        en: In structural reading, apparent power is the total-demand ceiling onto which active and reactive power project.\r
    likely_errors:\r
    - id: s_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: dimensionar una fuente solo con P y olvidar el peso de S.'\r
        en: 'Frequent error: sizing a source only with active power and forgetting apparent power.'\r
    next_step_rules:\r
    - id: s_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cruza S con limites de fuente y proteccion para evaluar margen de operacion.\r
        en: Cross apparent power with source and protection limits to evaluate operating margin.\r
`;export{e as default};
