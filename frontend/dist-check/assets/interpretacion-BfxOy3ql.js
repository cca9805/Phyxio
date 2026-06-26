const e=`version: 1.0.0\r
id: diagramas-pv-interpretacion\r
leaf_id: diagramas-pv\r
nombre: { es: Interpretacion de diagramas p-V, en: P-V diagrams interpretation }\r
scope:\r
  area: fisica-clasica\r
  bloque: termodinamica\r
  subbloque: gases-y-modelos\r
  parent_id: gases-y-modelos\r
  ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/diagramas-pv\r
ui:\r
  enabled: true\r
  display_modes:\r
    calculator_inline: true\r
    graph_inline: true\r
    dedicated_tab: true\r
    modal: false\r
  labels:\r
    es: { summary: Resumen fisico, reading: Lectura del resultado, coherence: Coherencia, validity: Validez del modelo, graph: Lectura grafica, errors: Errores probables, next_step: Siguiente paso }\r
    en: { summary: Physical summary, reading: Result reading, coherence: Coherence, validity: Model validity, graph: Graph reading, errors: Likely errors, next_step: Next step }\r
  priority_order: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
  inline_limits:\r
    max_summary_chars: 200\r
    max_warnings: 2\r
dependencies:\r
  formulas: [ gas_ideal, trabajo_isobarico ]\r
  magnitudes: [ P, V, T, n, R, W, DeltaV ]\r
global_context:\r
  physical_domain: { es: Diagramas p-V y trabajo en termodinamica de gases, en: P-V diagrams and work in gas thermodynamics }\r
  axis_convention: { es: "El eje horizontal muestra [[V]] y el vertical muestra [[P]].", en: "The horizontal axis shows [[V]] and the vertical axis shows [[P]]." }\r
  standard_assumptions: [ gas ideal, proceso conocido, variables macroscopicas ]\r
  standard_warnings: [ "No todas las trayectorias son isobaricas ni isotermicas." ]\r
output_contract:\r
  format: structured_text\r
  include_emojis: true\r
  max_lines_per_section: 5\r
  truncate_long_values: true\r
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
result_blocks:\r
  summary: { enabled: true, priority: 1, title: { es: Resumen fisico, en: Physical summary } }\r
  physical_reading: { enabled: true, priority: 2, title: { es: Lectura fisica, en: Physical reading } }\r
  coherence: { enabled: true, priority: 3, title: { es: Coherencia, en: Coherence } }\r
  model_validity: { enabled: true, priority: 4, title: { es: Validez del modelo, en: Model validity } }\r
  graph_reading: { enabled: true, priority: 5, title: { es: Lectura grafica, en: Graph reading } }\r
  likely_errors: { enabled: true, priority: 6, title: { es: Errores probables, en: Likely errors } }\r
  next_step: { enabled: true, priority: 7, title: { es: Siguiente paso, en: Next step } }\r
targets:\r
  P:\r
    magnitude_type: P\r
    semantic_role: { es: Presion dentro del proceso, en: Process pressure }\r
    summary_rules:\r
    - id: p_summary_default\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "La presion calculada define la altura de la curva en el diagrama p-V y condiciona el trabajo del proceso."\r
        en: "The calculated pressure defines the curve height in the P-V diagram and conditions the work of the process."\r
    physical_reading_rules:\r
    - id: p_physical_reading\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[P]] describe la fuerza por unidad de area que el gas ejerce sobre las paredes del recipiente."\r
        en: "[[P]] describes the force per unit area that the gas exerts on the container walls."\r
    coherence_rules:\r
    - id: p_coherence_positive\r
      when: "P > 0"\r
      status: ok\r
      text:\r
        es: "Una presion positiva es coherente con el modelo de gas ideal."\r
        en: "Positive pressure is coherent with the ideal gas model."\r
    model_validity_rules:\r
    - id: p_model_validity\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Este valor de presion es valido siempre que el proceso mantenga un gas ideal y no se alcancen densidades liquidas."\r
        en: "This pressure value is valid as long as the process keeps an ideal gas and does not reach liquid-like densities."\r
    graph_rules:\r
    - id: p_graph_reading\r
      when: "true"\r
      status: info\r
      text:\r
        es: "En el grafico, [[P]] corresponde a la altura de cada punto sobre el eje vertical."\r
        en: "On the graph, [[P]] corresponds to the height of each point above the vertical axis."\r
    likely_errors:\r
    - id: p_likely_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "No confundas una presion alta con mayor trabajo si el cambio de volumen es muy pequeño."\r
        en: "Do not confuse high pressure with more work if the volume change is very small."\r
    next_step_rules:\r
    - id: p_next_step\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Comprueba tambien [[DeltaV]] para saber si el proceso produce expansion o compresion neta."\r
        en: "Also check [[DeltaV]] to determine whether the process produces net expansion or compression."\r
\r
  V:\r
    magnitude_type: V\r
    semantic_role: { es: Volumen del estado, en: State volume }\r
    summary_rules:\r
    - id: v_summary_default\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El volumen marca la posicion horizontal de la trayectoria y el tamaño del trabajo si la presion es constante."\r
        en: "Volume marks the horizontal position of the trajectory and the work magnitude if pressure is constant."\r
    physical_reading_rules:\r
    - id: v_physical_reading\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[V]] indica cuanto espacio ocupa el gas y cuanto puede cambiar durante el proceso."\r
        en: "[[V]] indicates how much space the gas occupies and how much it can change during the process."\r
    coherence_rules:\r
    - id: v_coherence_positive\r
      when: "V > 0"\r
      status: ok\r
      text:\r
        es: "Un volumen positivo es coherente con la interpretacion fisica de un gas."\r
        en: "A positive volume is coherent with the physical interpretation of a gas."\r
    model_validity_rules:\r
    - id: v_model_validity\r
      when: "true"\r
      status: info\r
      text:\r
        es: "El modelo de gas ideal exige que el volumen este bien definido y no colapse."\r
        en: "The ideal gas model requires that volume be well defined and not collapse."\r
    graph_rules:\r
    - id: v_graph_reading\r
      when: "true"\r
      status: info\r
      text:\r
        es: "El eje horizontal refleja el desplazamiento volumetrico del proceso."\r
        en: "The horizontal axis reflects the volumetric displacement of the process."\r
    likely_errors:\r
    - id: v_likely_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "No interpretes el volumen absoluto como trabajo; el trabajo depende del cambio de volumen."\r
        en: "Do not interpret absolute volume as work; work depends on volume change."\r
    next_step_rules:\r
    - id: v_next_step\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Relaciona [[V]] con [[P]] para ver si el proceso sigue una curva isotermica o una linea recta."\r
        en: "Relate [[V]] to [[P]] to see whether the process follows an isothermal curve or a straight line."\r
\r
  T:\r
    magnitude_type: T\r
    semantic_role: { es: Temperatura del gas, en: Gas temperature }\r
    summary_rules:\r
    - id: t_summary_default\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "La temperatura determina la familia de curvas del gas ideal en el diagrama p-V."\r
        en: "Temperature determines the family of ideal gas curves in the P-V diagram."\r
    physical_reading_rules:\r
    - id: t_physical_reading\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[T]] se interpreta como la energia termica media de las moleculas del gas."\r
        en: "[[T]] is interpreted as the average thermal energy of the gas molecules."\r
    coherence_rules:\r
    - id: t_coherence_positive\r
      when: "T > 0"\r
      status: ok\r
      text:\r
        es: "La temperatura absoluta positiva es necesaria para el modelo de gas ideal."\r
        en: "Positive absolute temperature is necessary for the ideal gas model."\r
    model_validity_rules:\r
    - id: t_model_validity\r
      when: "true"\r
      status: info\r
      text:\r
        es: "La representacion termica es valida siempre que el gas permanezca ideal y no condense."\r
        en: "The thermal representation is valid as long as the gas remains ideal and does not condense."\r
    graph_rules:\r
    - id: t_graph_reading\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Las isotermas de mayor temperatura ocupan posiciones mas altas en el diagrama p-V."\r
        en: "Higher temperature isotherms occupy higher positions in the P-V diagram."\r
    likely_errors:\r
    - id: t_likely_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "No reemplaces [[T]] con calor o energia interna sin justificar la relacion termodinamica."\r
        en: "Do not replace [[T]] with heat or internal energy without thermodynamic justification."\r
    next_step_rules:\r
    - id: t_next_step\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Analiza mas alla de la curva: compara la forma con otras isotermas a diferentes [[T]]."\r
        en: "Analyze beyond the curve: compare the shape with other isotherms at different [[T]]."\r
\r
  W:\r
    magnitude_type: W\r
    semantic_role: { es: Trabajo mecanico, en: Mechanical work }\r
    summary_rules:\r
    - id: w_summary_default\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El trabajo mecanico se lee como el area bajo la trayectoria en el diagrama p-V."\r
        en: "Mechanical work is read as the area under the trajectory in the P-V diagram."\r
    physical_reading_rules:\r
    - id: w_physical_reading\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[W]] mide la energia transferida durante la expansion o compresion del gas."\r
        en: "[[W]] measures the energy transferred during the gas expansion or compression."\r
    coherence_rules:\r
    - id: w_coherence_sign\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El signo de [[W]] depende de si el gas realiza trabajo o si el entorno lo comprime."\r
        en: "The sign of [[W]] depends on whether the gas does work or the environment compresses it."\r
    model_validity_rules:\r
    - id: w_model_validity\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Este calculo de trabajo es valido para un proceso donde la presion es conocida y el cambio de volumen es apreciable."\r
        en: "This work calculation is valid for a process where pressure is known and volume change is appreciable."\r
    graph_rules:\r
    - id: w_graph_reading\r
      when: "true"\r
      status: info\r
      text:\r
        es: "El area debajo de la curva p-V con el eje de volumen representa [[W]] para un proceso isobarico."\r
        en: "The area under the P-V curve with the volume axis represents [[W]] for an isobaric process."\r
    likely_errors:\r
    - id: w_likely_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "No asumas que un area mayor siempre significa mas trabajo si el signo es invertido."\r
        en: "Do not assume that a larger area always means more work if the sign is inverted."\r
    next_step_rules:\r
    - id: w_next_step\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Verifica si el trabajo calculado es de expansion o de compresion usando [[DeltaV]]."\r
        en: "Verify whether the calculated work is expansion or compression using [[DeltaV]]."\r
\r
  DeltaV:\r
    magnitude_type: DeltaV\r
    semantic_role: { es: Cambio de volumen, en: Volume change }\r
    summary_rules:\r
    - id: dv_summary_default\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "[[DeltaV]] indica la direccion del proceso: expansion positiva o compresion negativa."\r
        en: "[[DeltaV]] indicates the process direction: positive expansion or negative compression."\r
    physical_reading_rules:\r
    - id: dv_physical_reading\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "El signo de [[DeltaV]] muestra si el gas se expande o se comprime."\r
        en: "The sign of [[DeltaV]] shows whether the gas expands or compresses."\r
    coherence_rules:\r
    - id: dv_coherence\r
      when: "true"\r
      status: ok\r
      text:\r
        es: "Un cambio de volumen nulo significa que el proceso es isocorico y el trabajo mecanico es cero."\r
        en: "A zero volume change means the process is isochoric and the mechanical work is zero."\r
    model_validity_rules:\r
    - id: dv_model_validity\r
      when: "true"\r
      status: info\r
      text:\r
        es: "DeltaV solo es util para calcular trabajo si la presion utilizada en la expresion es representativa del proceso."\r
        en: "DeltaV is only useful to calculate work if the pressure used in the expression is representative of the process."\r
    graph_rules:\r
    - id: dv_graph_reading\r
      when: "true"\r
      status: info\r
      text:\r
        es: "El deslizamiento horizontal de la trayectoria en el diagrama p-V corresponde a [[DeltaV]]."\r
        en: "The horizontal displacement of the trajectory in the P-V diagram corresponds to [[DeltaV]]."\r
    likely_errors:\r
    - id: dv_likely_error\r
      when: "true"\r
      status: warning\r
      text:\r
        es: "No confundas el cambio de volumen con el volumen absoluto inicial o final."\r
        en: "Do not confuse volume change with absolute initial or final volume."\r
    next_step_rules:\r
    - id: dv_next_step\r
      when: "true"\r
      status: info\r
      text:\r
        es: "Combina [[DeltaV]] con [[P]] para comprobar si el trabajo puede calcularse como area en el diagrama."\r
        en: "Combine [[DeltaV]] with [[P]] to check whether work can be calculated as area in the diagram."\r
`;export{e as default};
