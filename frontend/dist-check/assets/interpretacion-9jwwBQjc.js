const e=`version: 2\r
id: interpretacion-resistencias-en-serie\r
leaf_id: resistencias-en-serie\r
nombre:\r
  es: Interpretacion de resistencias en serie\r
  en: Interpretation of resistors in series\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-electrica\r
  parent_id: circuitos-de-corriente-continua\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-electrica/circuitos-de-corriente-continua/resistencias-en-serie\r
dependencies:\r
  formulas:\r
  - req_serie\r
  - i_total\r
  - caida_ohm\r
  - divisor\r
  - Req_formula\r
  - I_formula\r
  - Vi_formula\r
  - Vt_formula\r
  magnitudes:\r
  - Req\r
  - R1\r
  - R2\r
  - R3\r
  - Vt\r
  - I\r
  - Vi\r
  - Ri\r
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
  Req:\r
    summary_rules:\r
    - id: req_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: Al sumar resistencias en serie aumenta Req y, para la misma Vt, disminuye I; por eso baja la potencia global transferida y se reduce la exigencia termica promedio del conjunto.\r
        en: Summing series resistances increases Req and, for the same Vt, reduces I; therefore global transferred power drops and average thermal stress on the chain decreases.\r
    coherence_rules:\r
    - id: req_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Req debe ser al menos tan grande como cualquiera de las resistencias individuales positivas.\r
        en: Req must be at least as large as any positive individual resistor.\r
    physical_reading_rules:\r
    - id: req_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Un incremento de Req reduce I para la misma fuente, lo que limita potencia y calentamiento.\r
        en: An increase in Req reduces I for the same source, limiting power and heating.\r
    model_validity_rules:\r
    - id: req_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La suma simple es valida en resistores ohmicos lineales conectados en serie ideal.\r
        en: Simple summation is valid for linear ohmic resistors connected in ideal series.\r
    graph_rules:\r
    - id: req_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En una grafica I contra Vt, mayor Req se refleja como menor pendiente.\r
        en: In an I versus Vt graph, larger Req appears as a lower slope.\r
    likely_errors:\r
    - id: req_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error frecuente: aplicar formula de paralelo y obtener Req menor que una resistencia individual."\r
        en: "Common error: applying parallel formula and getting Req smaller than an individual resistor."\r
    next_step_rules:\r
    - id: req_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Con Req calculada, estima I con la fuente real y verifica potencia por componente.\r
        en: With Req computed, estimate I using the real source and verify component power.\r
\r
  I:\r
    summary_rules:\r
    - id: i_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La corriente es comun en toda la serie y se determina por la razon Vt sobre Req.\r
        en: Current is common throughout the series and is determined by Vt over Req.\r
    coherence_rules:\r
    - id: i_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si I se calcula con Vt y Req, debe reproducir cada Vi al usar Vi igual a I por Ri.\r
        en: If I is computed from Vt and Req, it must reproduce each Vi using Vi equals I times Ri.\r
    physical_reading_rules:\r
    - id: i_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Mayor corriente implica mayor tasa de disipacion en cada resistor de la cadena.\r
        en: Higher current implies higher dissipation rate in each resistor of the chain.\r
    model_validity_rules:\r
    - id: i_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El resultado es confiable en regimen estacionario y sin efectos de temperatura dominantes.\r
        en: The result is reliable in steady state and without dominant temperature effects.\r
    graph_rules:\r
    - id: i_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: La lectura de I en coord favorece comparar linealidad de la respuesta para distintos Vt.\r
        en: Reading I in coord mode helps compare response linearity for different Vt values.\r
    likely_errors:\r
    - id: i_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error habitual: dividir Vt por una Ri en lugar de por Req y sobreestimar la corriente."\r
        en: "Common mistake: divide Vt by one Ri instead of Req and overestimate current."\r
    next_step_rules:\r
    - id: i_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa la corriente obtenida para calcular caidas individuales y verificar KVL.\r
        en: Use computed current to calculate individual drops and verify KVL.\r
\r
  Vi:\r
    summary_rules:\r
    - id: vi_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cada caida de tension es proporcional a la resistencia del elemento para una corriente comun.\r
        en: Each voltage drop is proportional to element resistance for a common current.\r
    coherence_rules:\r
    - id: vi_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La suma de todas las Vi debe cerrar con Vt en magnitud y signo segun la convencion elegida.\r
        en: Sum of all Vi values must close with Vt in magnitude and sign under the chosen convention.\r
    physical_reading_rules:\r
    - id: vi_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Una Vi grande identifica el componente que absorbe mayor fraccion energetica de la fuente.\r
        en: A large Vi identifies the component absorbing the largest energy fraction from the source.\r
    model_validity_rules:\r
    - id: vi_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: El reparto proporcional es valido si no hay cargas adicionales conectadas al divisor.\r
        en: Proportional distribution is valid if no extra loads are attached to the divider.\r
    graph_rules:\r
    - id: vi_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En una visualizacion de barras, la suma de segmentos Vi debe igualar la barra total Vt.\r
        en: In a bar-style view, sum of Vi segments should equal total Vt bar.\r
    likely_errors:\r
    - id: vi_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error comun: asignar la misma Vi a resistencias distintas cuando sus valores no son iguales."\r
        en: "Common error: assigning equal Vi to different resistors when their values are not equal."\r
    next_step_rules:\r
    - id: vi_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Compara Vi medidas con calculadas para detectar tolerancias o conexion incorrecta.\r
        en: Compare measured and computed Vi to detect tolerances or incorrect wiring.\r
\r
  Ri:\r
    summary_rules:\r
    - id: ri_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: Ri representa cualquier resistor individual y gobierna su peso en el divisor de tension.\r
        en: Ri represents any individual resistor and governs its weight in voltage division.\r
    coherence_rules:\r
    - id: ri_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Ri debe mantenerse no negativa en el modelo pasivo para conservar coherencia fisica.\r
        en: Ri must remain non-negative in passive model to preserve physical coherence.\r
    physical_reading_rules:\r
    - id: ri_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: A mayor Ri, mayor caida local y menor margen para el resto de elementos con Vt fija.\r
        en: Larger Ri means larger local drop and less remaining margin for other elements at fixed Vt.\r
    model_validity_rules:\r
    - id: ri_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Si el resistor cambia fuertemente con temperatura, la linealidad asumida puede degradarse.\r
        en: If resistor varies strongly with temperature, assumed linearity may degrade.\r
    graph_rules:\r
    - id: ri_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: Cambios de Ri desplazan la proporcion Vi sobre Vt en la lectura grafica del divisor.\r
        en: Changes in Ri shift Vi over Vt proportion in divider graph reading.\r
    likely_errors:\r
    - id: ri_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error tipico: confundir Ri con Req y aplicar mal la ecuacion local."\r
        en: "Typical error: confusing Ri with Req and misapplying local equation."\r
    next_step_rules:\r
    - id: ri_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Ajusta Ri para lograr la Vi objetivo y luego valida potencia maxima permitida.\r
        en: Tune Ri to achieve target Vi, then validate maximum allowed power.\r
\r
  Vt:\r
    summary_rules:\r
    - id: vt_summary\r
      when: "true"\r
      status: info\r
      text:\r
        es: La tension total de fuente fija el presupuesto energetico disponible para repartir entre las caidas de la malla serie.\r
        en: Total source voltage sets the available energy budget to be distributed among series-loop drops.\r
    coherence_rules:\r
    - id: vt_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: La suma algebraica de las caidas debe reconstruir Vt bajo una sola convencion de signos.\r
        en: Algebraic sum of drops must reconstruct Vt under a single sign convention.\r
    physical_reading_rules:\r
    - id: vt_physical\r
      when: "true"\r
      status: info\r
      text:\r
        es: Si Vt aumenta con resistencias fijas, aumenta la corriente comun y con ello la exigencia termica del conjunto.\r
        en: If Vt increases with fixed resistances, common current rises and so does chain thermal stress.\r
    model_validity_rules:\r
    - id: vt_validity\r
      when: "true"\r
      status: ok\r
      text:\r
        es: Este analisis supone fuente de tension estable; caidas internas de fuente degradan la prediccion ideal.\r
        en: This analysis assumes a stable voltage source; internal source drops degrade ideal prediction.\r
    graph_rules:\r
    - id: vt_graph\r
      when: "true"\r
      status: info\r
      text:\r
        es: En una lectura grafica de reparto, Vt aparece como la barra total que se descompone en segmentos Vi.\r
        en: In a distribution graph, Vt appears as the total bar decomposed into Vi segments.\r
    likely_errors:\r
    - id: vt_warn\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "Error comun: mezclar Vt con una caida local y perder el cierre de malla."\r
        en: "Common error: mixing Vt with a local drop and breaking loop closure."\r
    next_step_rules:\r
    - id: vt_next\r
      when: "true"\r
      status: info\r
      text:\r
        es: Usa Vt medida para recalcular I y comparar con el valor esperado por diseno nominal.\r
        en: Use measured Vt to recompute I and compare against nominal design expectation.\r
`;export{e as default};
