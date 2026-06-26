const e=`version: 2\r
id: interpretacion-leyes-de-kirchhoff\r
leaf_id: leyes-de-kirchhoff\r
nombre:\r
  es: Interpretacion de leyes de kirchhoff\r
  en: Interpretation of Kirchhoff's laws\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-electrica\r
  parent_id: circuitos-de-corriente-continua\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/circuitos-de-corriente-continua/leyes-de-kirchhoff\r
dependencies:\r
  formulas:\r
  - kcl_nodo\r
  - kvl_malla\r
  - ohm_aux\r
  magnitudes:\r
  - I1\r
  - I2\r
  - I3\r
  - Vs\r
  - I\r
  - R1\r
  - R2\r
  - V\r
  - R\r
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
  I1:\r
    summary_rules:\r
    - id: i1_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I1 es una corriente de rama que participa en el cierre nodal.\r
        en: I1 is a branch current that participates in nodal closure.\r
    physical_reading_rules:\r
    - id: i1_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su magnitud indica aporte de una rama al reparto total de corriente.\r
        en: Its magnitude indicates one branch contribution to total current split.\r
    coherence_rules:\r
    - id: i1_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser coherente con I2 e I3 en la ecuacion de nodo.\r
        en: It must be coherent with I2 and I3 in the node equation.\r
    model_validity_rules:\r
    - id: i1_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Valida en regimen estacionario y conexion de rama bien definida.\r
        en: Valid in steady operation with well-defined branch connection.\r
    graph_rules:\r
    - id: i1_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se visualiza como flujo en una rama del nodo principal.\r
        en: It is visualized as flow in one branch of the main node.\r
    likely_errors:\r
    - id: i1_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: medir I1 con referencia opuesta a la usada en el modelo.'\r
        en: 'Common error: measuring I1 with opposite reference to the model.'\r
    next_step_rules:\r
    - id: i1_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Confirmar referencia de sentido antes de comparar con I3.\r
        en: Confirm direction reference before comparing against I3.\r
  I2:\r
    summary_rules:\r
    - id: i2_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I2 completa el reparto de corriente en el nodo junto con I1 e I3.\r
        en: I2 completes node current split together with I1 and I3.\r
    physical_reading_rules:\r
    - id: i2_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permite evaluar desbalance de carga entre ramas paralelas.\r
        en: It helps evaluate load imbalance between parallel branches.\r
    coherence_rules:\r
    - id: i2_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe cerrar el balance nodal con convencion de signos consistente.\r
        en: It must close nodal balance with consistent sign convention.\r
    model_validity_rules:\r
    - id: i2_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Valida cuando la rama no presenta no linealidad dominante.\r
        en: Valid when branch does not show dominant nonlinearity.\r
    graph_rules:\r
    - id: i2_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se interpreta como contribucion de la segunda rama del nodo.\r
        en: It is interpreted as contribution of the second node branch.\r
    likely_errors:\r
    - id: i2_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: mezclar medicion instantanea con datos de otro estado.'\r
        en: 'Common error: mixing instantaneous measurement with another state data.'\r
    next_step_rules:\r
    - id: i2_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrastar I2 con variacion de carga de su rama asociada.\r
        en: Contrast I2 with load variation of its associated branch.\r
  I3:\r
    summary_rules:\r
    - id: i3_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I3 representa corriente cerrada por balance de carga en nodo.\r
        en: Branch current 3 represents current closed by node charge balance.\r
    physical_reading_rules:\r
    - id: i3_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su signo confirma si el sentido real coincide con la referencia elegida.\r
        en: Its sign confirms whether real direction matches chosen reference.\r
    coherence_rules:\r
    - id: i3_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe satisfacer ecuación nodal junto con I1 e I2.\r
        en: It must satisfy nodal equation with branch currents 1 and 2.\r
    model_validity_rules:\r
    - id: i3_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válida si el nodo está correctamente definido y sin ramas omitidas.\r
        en: Valid if node is correctly defined and no branch is omitted.\r
    graph_rules:\r
    - id: i3_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se interpreta como cierre de flujo de carga en diagrama nodal.\r
        en: It is interpreted as charge-flow closure in nodal diagram.\r
    likely_errors:\r
    - id: i3_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: invertir signo de una rama sin ajustar el resto del balance.'\r
        en: 'Common mistake: flipping one branch sign without updating full balance.'\r
    next_step_rules:\r
    - id: i3_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica continuidad del balance en nodos adicionales de la red.\r
        en: Verify closure continuity in additional network nodes.\r
  Vs:\r
    summary_rules:\r
    - id: vs_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Vs es excitación de malla que se reparte en caídas resistivas.\r
        en: Source voltage is loop excitation distributed into resistive drops.\r
    physical_reading_rules:\r
    - id: vs_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Determina escala de corriente de malla junto con resistencia total del lazo.\r
        en: It sets mesh-current scale together with total loop resistance.\r
    coherence_rules:\r
    - id: vs_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe cerrar KVL con mismo sentido de recorrido en todos los términos.\r
        en: It must close KVL with same traversal direction in all terms.\r
    model_validity_rules:\r
    - id: vs_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpretación robusta en circuito DC lumped con parámetros estables.\r
        en: Interpretation is robust in lumped DC circuit with stable parameters.\r
    graph_rules:\r
    - id: vs_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se visualiza como salto de potencial que impulsa el lazo.\r
        en: It is visualized as potential rise driving the loop.\r
    likely_errors:\r
    - id: vs_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: mezclar polaridades distintas en una misma ecuación de malla.'\r
        en: 'Frequent error: mixing different polarities in one mesh equation.'\r
    next_step_rules:\r
    - id: vs_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta el valor con caídas locales obtenidas por ley de Ohm.\r
        en: Contrast value against local drops from Ohm relation.\r
  V:\r
    summary_rules:\r
    - id: v_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: V representa caída local compatible con corriente de tramo y resistencia.\r
        en: Voltage drop represents local fall compatible with segment current and resistance.\r
    physical_reading_rules:\r
    - id: v_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permite auditar qué elemento concentra mayor diferencia de potencial.\r
        en: It helps audit which element concentrates largest potential difference.\r
    coherence_rules:\r
    - id: v_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantener consistencia con I y R del mismo tramo físico.\r
        en: It must remain consistent with current and resistance of same segment.\r
    model_validity_rules:\r
    - id: v_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válida para tramo óhmico lineal sin cambios térmicos dominantes.\r
        en: Valid for linear ohmic segment without dominant thermal shifts.\r
    graph_rules:\r
    - id: v_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se interpreta en el esquema como caída de potencial entre nodos.\r
        en: It is interpreted in scheme as potential drop between nodes.\r
    likely_errors:\r
    - id: v_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar corriente de una rama con resistencia de otra.'\r
        en: 'Common mistake: using one branch current with another branch resistance.'\r
    next_step_rules:\r
    - id: v_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Integra caídas locales para contrastar cierre global de malla.\r
        en: Integrate local drops to contrast global mesh closure.\r
  I:\r
    summary_rules:\r
    - id: i_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I representa corriente de lazo usada para distribuir caidas resistivas.\r
        en: I represents loop current used to distribute resistive drops.\r
    physical_reading_rules:\r
    - id: i_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su valor conecta excitacion Vs con respuesta resistiva global.\r
        en: Its value connects source excitation to global resistive response.\r
    coherence_rules:\r
    - id: i_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser consistente con KVL y con relacion local de tramo.\r
        en: It must remain consistent with KVL and local segment relation.\r
    model_validity_rules:\r
    - id: i_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Valida en lazo DC con parametros aproximadamente lineales.\r
        en: Valid in DC loop with approximately linear parameters.\r
    graph_rules:\r
    - id: i_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se visualiza como corriente comun de la malla principal.\r
        en: It is visualized as common current in the main loop.\r
    likely_errors:\r
    - id: i_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: usar resistencia total incorrecta al estimar I.'\r
        en: 'Common error: using incorrect total resistance when estimating I.'\r
    next_step_rules:\r
    - id: i_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verificar tendencia de I ante cambios esperados de resistencia equivalente.\r
        en: Verify current trend under expected equivalent-resistance changes.\r
  R:\r
    summary_rules:\r
    - id: r_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: R representa resistencia local que vincula corriente con caida de tension.\r
        en: R represents local resistance linking current and voltage drop.\r
    physical_reading_rules:\r
    - id: r_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambios en R alteran reparto de potencial y disipacion del tramo.\r
        en: Changes in R alter potential distribution and segment dissipation.\r
    coherence_rules:\r
    - id: r_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe corresponder al mismo tramo donde se usan I y V.\r
        en: It must correspond to the same segment where I and V are used.\r
    model_validity_rules:\r
    - id: r_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Valida si el comportamiento resistivo es dominante en la ventana de analisis.\r
        en: Valid if resistive behavior is dominant in the analysis window.\r
    graph_rules:\r
    - id: r_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se interpreta como parametro de tramo en el esquema equivalente.\r
        en: It is interpreted as a segment parameter in the equivalent scheme.\r
    likely_errors:\r
    - id: r_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: usar valor nominal de R cuando hay degradacion de contacto.'\r
        en: 'Common error: using nominal R while contact degradation is present.'\r
    next_step_rules:\r
    - id: r_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrastar R estimada con medicion independiente del mismo tramo.\r
        en: Contrast estimated R against independent measurement of the same segment.\r
`;export{e as default};
