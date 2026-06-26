const e=`version: 2\r
id: interpretacion-resistencias-en-paralelo\r
leaf_id: resistencias-en-paralelo\r
nombre:\r
  es: Interpretacion de resistencias en paralelo\r
  en: Interpretation of resistors in parallel\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-electrica\r
  parent_id: circuitos-de-corriente-continua\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/circuitos-de-corriente-continua/resistencias-en-paralelo\r
dependencies:\r
  formulas:\r
  - req_reciproco\r
  - req_dos_ramas\r
  - corriente_rama_1\r
  - corriente_rama_2\r
  - corriente_rama_3\r
  - corriente_total\r
  - geq_suma\r
  - geq_reciproco\r
  magnitudes:\r
  - Req\r
  - R1\r
  - R2\r
  - R3\r
  - V\r
  - I1\r
  - I2\r
  - I3\r
  - It\r
  - Geq\r
  - G1\r
  - G2\r
  - G3\r
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
  Req:\r
    summary_rules:\r
    - id: req_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: Req resume la oposición total del conjunto paralelo frente a la fuente.\r
        en: Req summarizes total opposition of the parallel network seen by source.\r
    physical_reading_rules:\r
    - id: req_read\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si se añade una rama conductora, Req tiende a disminuir.\r
        en: Adding a conductive branch tends to reduce Req.\r
    coherence_rules:\r
    - id: req_coh\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe permanecer por debajo de cada resistencia de rama activa.\r
        en: It should remain below each active branch resistance.\r
    model_validity_rules:\r
    - id: req_val\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Válida para ramas lineales conectadas entre los mismos dos nodos.\r
        en: Valid for linear branches connected across the same two nodes.\r
    graph_rules:\r
    - id: req_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se interpreta como pendiente global entre tensión y corriente total.\r
        en: Interpreted as global slope between voltage and total current.\r
    likely_errors:\r
    - id: req_err\r
      when: "true"\r
      status: warning\r
      text:\r
        es: 'Error común: sumar resistencias directamente como si fuera serie.'\r
        en: 'Common error: directly summing resistors as if it were series.'\r
    next_step_rules:\r
    - id: req_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contrastar Req con medición de It para la misma V aplicada.\r
        en: Compare Req against measured It for same applied V.\r
  It:\r
    summary_rules:\r
    - id: it_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: It es la corriente que la fuente entrega al nodo de distribución.\r
        en: It is the current supplied by source to distribution node.\r
    physical_reading_rules:\r
    - id: it_read\r
      when: "true"\r
      status: info\r
      text:\r
        es: Refleja el consumo agregado de todas las ramas activas.\r
        en: It reflects aggregated demand of all active branches.\r
    coherence_rules:\r
    - id: it_coh\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe cerrar la suma nodal con I1, I2 e I3.\r
        en: It must close nodal sum with I1, I2 and I3.\r
    model_validity_rules:\r
    - id: it_val\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Válida en régimen estacionario sin acumulación neta de carga en nodo.\r
        en: Valid in steady regime with no net charge accumulation at node.\r
    graph_rules:\r
    - id: it_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Es la ordenada del punto operativo para una tensión de trabajo dada.\r
        en: It is the operating-point ordinate for a given working voltage.\r
    likely_errors:\r
    - id: it_err\r
      when: "true"\r
      status: warning\r
      text:\r
        es: 'Error común: omitir una rama en la suma total.'\r
        en: 'Common error: omitting one branch in total sum.'\r
    next_step_rules:\r
    - id: it_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Revisar protección de fuente con margen respecto a It calculada.\r
        en: Check source protection margin against computed It.\r
  I1:\r
    summary_rules:\r
    - id: i1_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: I1 cuantifica la demanda de la rama asociada a R1.\r
        en: I1 quantifies branch demand associated with R1.\r
    physical_reading_rules:\r
    - id: i1_read\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si R1 disminuye con V fija, I1 crece y puede dominar potencia.\r
        en: If R1 decreases at fixed V, I1 rises and may dominate power.\r
    coherence_rules:\r
    - id: i1_coh\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe usar la misma referencia de polaridad que I2 e I3.\r
        en: Must use same polarity reference as I2 and I3.\r
    model_validity_rules:\r
    - id: i1_val\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Requiere comportamiento óhmico en la rama 1.\r
        en: Requires ohmic behavior in branch 1.\r
    graph_rules:\r
    - id: i1_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Puede representarse como fracción de It frente a variación de R1.\r
        en: Can be represented as fraction of It versus R1 variation.\r
    likely_errors:\r
    - id: i1_err\r
      when: "true"\r
      status: warning\r
      text:\r
        es: 'Error común: usar R2 en la sustitución de I1.'\r
        en: 'Common error: using R2 while substituting I1.'\r
    next_step_rules:\r
    - id: i1_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Compara I1 con límite térmico de la rama 1.\r
        en: Compare I1 with branch 1 thermal limit.\r
  Geq:\r
    summary_rules:\r
    - id: geq_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: Geq expresa la capacidad total de conducción del paralelo.\r
        en: Geq expresses total conduction capability of the parallel network.\r
    physical_reading_rules:\r
    - id: geq_read\r
      when: "true"\r
      status: info\r
      text:\r
        es: A mayor Geq, menor Req y mayor demanda potencial de corriente.\r
        en: Higher Geq means lower Req and potentially higher current demand.\r
    coherence_rules:\r
    - id: geq_coh\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe coincidir con suma de G1, G2 y G3 para ramas activas.\r
        en: Must match sum of G1, G2 and G3 for active branches.\r
    model_validity_rules:\r
    - id: geq_val\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Válida en régimen lineal sin componentes reactivos dominantes.\r
        en: Valid in linear regime with no dominant reactive components.\r
    graph_rules:\r
    - id: geq_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se interpreta como pendiente de la curva I-V equivalente.\r
        en: Interpreted as slope of equivalent I-V curve.\r
    likely_errors:\r
    - id: geq_err\r
      when: "true"\r
      status: warning\r
      text:\r
        es: 'Error común: usar siemens y ohm en la misma suma.'\r
        en: 'Common error: mixing siemens and ohms in same sum.'\r
    next_step_rules:\r
    - id: geq_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Verificar coherencia de Geq con Req mediante relación recíproca.\r
        en: Verify Geq consistency with Req through reciprocal relation.\r
  I2:\r
    summary_rules:\r
    - id: i2_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: I2 representa el aporte de corriente de la segunda rama del paralelo.\r
        en: I2 represents branch-current contribution of the second parallel path.\r
    physical_reading_rules:\r
    - id: i2_read\r
      when: "true"\r
      status: info\r
      text:\r
        es: Su valor cae cuando R2 aumenta bajo tensión común constante.\r
        en: Its value drops when R2 rises under constant common voltage.\r
    coherence_rules:\r
    - id: i2_coh\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe sumar con I1 e I3 para reproducir It.\r
        en: It must sum with I1 and I3 to reproduce It.\r
    model_validity_rules:\r
    - id: i2_val\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Válida en rama predominantemente óhmica y lineal.\r
        en: Valid in predominantly ohmic and linear branch behavior.\r
    graph_rules:\r
    - id: i2_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Se interpreta como porción intermedia del reparto de corriente.\r
        en: It is interpreted as intermediate share of current distribution.\r
    likely_errors:\r
    - id: i2_err\r
      when: "true"\r
      status: warning\r
      text:\r
        es: 'Error conceptual: confundir I2 con It en la lectura de fuente.'\r
        en: 'Conceptual error: confusing I2 with It at source-level reading.'\r
    next_step_rules:\r
    - id: i2_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Contrastar I2 con límites de operación de la rama 2.\r
        en: Compare I2 against operational limits of branch 2.\r
  I3:\r
    summary_rules:\r
    - id: i3_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: I3 es la corriente asociada a la tercera rama del paralelo.\r
        en: I3 is the current associated with the third parallel branch.\r
    physical_reading_rules:\r
    - id: i3_read\r
      when: "true"\r
      status: info\r
      text:\r
        es: Disminuye cuando R3 aumenta para la misma tensión aplicada.\r
        en: It decreases as R3 increases under the same applied voltage.\r
    coherence_rules:\r
    - id: i3_coh\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe integrarse al cierre nodal junto con I1 e I2.\r
        en: It must integrate nodal closure together with I1 and I2.\r
    model_validity_rules:\r
    - id: i3_val\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Válida cuando la rama 3 está conectada y modelada como resistiva.\r
        en: Valid when branch 3 is connected and modeled as resistive.\r
    graph_rules:\r
    - id: i3_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Aporta la tercera fracción de corriente en la lectura gráfica.\r
        en: It contributes the third current fraction in graph reading.\r
    likely_errors:\r
    - id: i3_err\r
      when: "true"\r
      status: warning\r
      text:\r
        es: 'Error conceptual: dejar I3 fija aunque cambie R3.'\r
        en: 'Conceptual error: keeping I3 fixed while R3 changes.'\r
    next_step_rules:\r
    - id: i3_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Revisar sensibilidad de I3 frente a cambios de carga en rama 3.\r
        en: Check I3 sensitivity against load changes in branch 3.\r
  R1:\r
    summary_rules:\r
    - id: r1_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: R1 es el parámetro resistivo que controla I1 para tensión común.\r
        en: R1 is the resistive parameter controlling I1 under common voltage.\r
    physical_reading_rules:\r
    - id: r1_read\r
      when: "true"\r
      status: info\r
      text:\r
        es: Su disminución aumenta corriente de rama y potencia local.\r
        en: Its decrease raises branch current and local power demand.\r
    coherence_rules:\r
    - id: r1_coh\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Debe corresponder a la rama usada en el cálculo de I1.\r
        en: It must match the branch used in I1 computation.\r
    model_validity_rules:\r
    - id: r1_val\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Modelo válido mientras la rama conserve comportamiento lineal.\r
        en: Model remains valid while branch behavior stays linear.\r
    graph_rules:\r
    - id: r1_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambia la pendiente efectiva de respuesta corriente-tensión de su rama.\r
        en: It changes effective slope of branch current-voltage response.\r
    likely_errors:\r
    - id: r1_err\r
      when: "true"\r
      status: warning\r
      text:\r
        es: 'Error conceptual: usar R1 nominal sin considerar desvío térmico.'\r
        en: 'Conceptual error: using nominal R1 without thermal drift consideration.'\r
    next_step_rules:\r
    - id: r1_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Verificar R1 efectiva si el reparto de corriente no coincide con el esperado.\r
        en: Verify effective R1 when current sharing does not match expectation.\r
`;export{e as default};
