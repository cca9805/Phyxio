const e=`version: 5\r
id: campo-y-potencial-gravitatorio-interp\r
leaf_id: campo-y-potencial-gravitatorio\r
scope: local\r
nombre:\r
  es: "Análisis de Campo y Potencial"\r
  en: "Field and Potential Analysis"\r
\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
\r
result_blocks:\r
  summary:\r
    title: { es: "Resumen físico", en: "Physical summary" }\r
  physical_reading:\r
    title: { es: "Lectura física", en: "Physical reading" }\r
  coherence:\r
    title: { es: "Coherencia de datos", en: "Data coherence" }\r
  model_validity:\r
    title: { es: "Validez del modelo", en: "Model validity" }\r
  graph_reading:\r
    title: { es: "Lectura del gráfico", en: "Graph reading" }\r
  likely_errors:\r
    title: { es: "Errores probables", en: "Likely errors" }\r
  next_step:\r
    title: { es: "Siguiente paso", en: "Next step" }\r
\r
dependencies:\r
  requires_magnitudes: true\r
  requires_formulas: true\r
  supports_graph_binding: true\r
  magnitudes: [ G, M, m, r, g, V, U, DeltaV, DeltaU, Wg, ri, rf, gi, gf ]\r
  formulas: [ campo_puntual, potencial_puntual, energia_desde_potencial, cambio_energia_potencial, trabajo_gravitatorio, relacion_campo_potencial_conceptual, superposicion_campos_conceptual, superposicion_potenciales_conceptual ]\r
\r
targets:\r
  g:\r
    summary_rules:\r
    - id: g-range-ok\r
      when: g > 0\r
      status: success\r
      text:\r
        es: "El campo [[g]] es físicamente coherente y describe aceleración radial hacia la fuente."\r
        en: "Field [[g]] is physically coherent and describes radial acceleration toward the source."\r
    physical_reading_rules:\r
    - id: g-distance-link\r
      when: g > 0\r
      status: info\r
      text:\r
        es: "Si la distancia [[r]] aumenta, [[g]] debe disminuir de forma marcada por dependencia inversa cuadrática."\r
        en: "If distance [[r]] increases, [[g]] must decrease strongly due to inverse-square dependence."\r
    coherence_rules:\r
    - id: g-coherence\r
      when: g > 0 and r > 0 and M > 0\r
      status: success\r
      text:\r
        es: "Coherencia confirmada entre [[g]], [[r]] y [[M]] en régimen clásico."\r
        en: "Coherence confirmed among [[g]], [[r]], and [[M]] in the classical regime."\r
    model_validity_rules:\r
    - id: g-validity\r
      when: r > 0\r
      status: success\r
      text:\r
        es: "Válido para masa puntual o distribución esférica equivalente."\r
        en: "Valid for a point mass or equivalent spherical distribution."\r
    graph_rules:\r
    - id: g-graph\r
      when: g > 0\r
      status: info\r
      text:\r
        es: "En Coord, la curva de [[g]] se empina cerca de radios pequeños."\r
        en: "In Coord, the [[g]] curve steepens at small radii."\r
    likely_errors:\r
    - id: g-neg\r
      when: g <= 0\r
      status: error\r
      text:\r
        es: "Error conceptual: confundir signo vectorial con módulo de [[g]] genera lectura física incorrecta. Revisar unidades y distancia [[r]]."\r
        en: "Conceptual error: confusing vector sign with [[g]] magnitude leads to wrong physical reading. Check units and distance [[r]]."\r
    - id: g-m-swap\r
      when: M <= m\r
      status: warning\r
      text:\r
        es: "Posible error conceptual: revisar si se intercambiaron [[M]] y [[m]] en el planteamiento."\r
        en: "Possible conceptual mistake: check whether [[M]] and [[m]] were swapped in setup."\r
    next_step_rules:\r
    - id: g-next\r
      when: g > 0\r
      status: info\r
      text:\r
        es: "Comparar [[gi]] y [[gf]] para estimar variación de aceleración entre estados."\r
        en: "Compare [[gi]] and [[gf]] to estimate acceleration variation between states."\r
\r
  V:\r
    summary_rules:\r
    - id: v-sign\r
      when: V < 0\r
      status: success\r
      text:\r
        es: "Con referencia en infinito, [[V]] negativo es el resultado esperado."\r
        en: "With infinity as reference, negative [[V]] is expected."\r
    physical_reading_rules:\r
    - id: v-well\r
      when: V < 0\r
      status: info\r
      text:\r
        es: "Un [[V]] más negativo indica un pozo gravitatorio más profundo."\r
        en: "A more negative [[V]] indicates a deeper gravitational well."\r
    coherence_rules:\r
    - id: v-coh\r
      when: V < 0 and r > 0\r
      status: success\r
      text:\r
        es: "Coherencia entre signo de [[V]] y distancia radial [[r]]."\r
        en: "Coherence between [[V]] sign and radial distance [[r]]."\r
    model_validity_rules:\r
    - id: v-validity\r
      when: r > 0\r
      status: success\r
      text:\r
        es: "Modelo compatible con referencia energética explícita y régimen clásico."\r
        en: "Model compatible with explicit energy reference and classical regime."\r
    graph_rules:\r
    - id: v-graph\r
      when: V < 0\r
      status: info\r
      text:\r
        es: "La lectura de [[DeltaV]] entre dos radios anticipa cambio de trabajo por unidad de masa."\r
        en: "Reading [[DeltaV]] between two radii anticipates work change per unit mass."\r
    likely_errors:\r
    - id: v-positive\r
      when: V > 0\r
      status: warning\r
      text:\r
        es: "Error conceptual probable: [[V]] positiva sugiere referencia distinta o confusión de signo en potencial gravitatorio."\r
        en: "Likely conceptual error: positive [[V]] suggests a different reference or a gravitational-potential sign mistake."\r
    - id: v-ref-missing\r
      when: V != 0\r
      status: info\r
      text:\r
        es: "Comprobación conceptual: validar que la referencia energética esté declarada antes de interpretar [[V]]."\r
        en: "Conceptual check: confirm energy reference is declared before interpreting [[V]]."\r
    next_step_rules:\r
    - id: v-next\r
      when: V < 0 and m > 0\r
      status: info\r
      text:\r
        es: "Usar [[U]] con [[m]] para cerrar el balance energético del caso."\r
        en: "Use [[U]] with [[m]] to close the case energy balance."\r
\r
  DeltaU:\r
    summary_rules:\r
    - id: du-summary\r
      when: ri > 0 and rf > 0\r
      status: success\r
      text:\r
        es: "El cambio [[DeltaU]] conecta de forma directa estado inicial y final del sistema."\r
        en: "The [[DeltaU]] change directly connects the initial and final system states."\r
    physical_reading_rules:\r
    - id: du-reading\r
      when: ri > 0 and rf > 0\r
      status: info\r
      text:\r
        es: "Si [[rf]] es mayor que [[ri]], el sistema suele ganar energía potencial."\r
        en: "If [[rf]] is greater than [[ri]], the system typically gains potential energy."\r
    coherence_rules:\r
    - id: du-coh\r
      when: Wg + DeltaU == 0\r
      status: success\r
      text:\r
        es: "Coherencia energética: [[Wg]] y [[DeltaU]] cumplen conservación en régimen conservativo."\r
        en: "Energy coherence: [[Wg]] and [[DeltaU]] satisfy conservation in a conservative regime."\r
    model_validity_rules:\r
    - id: du-validity\r
      when: ri > 0 and rf > 0\r
      status: success\r
      text:\r
        es: "Válido mientras ri y rf se midan desde la misma referencia geométrica."\r
        en: "Valid as long as ri and rf are measured from the same geometric reference."\r
    graph_rules:\r
    - id: du-graph\r
      when: ri > 0 and rf > 0\r
      status: info\r
      text:\r
        es: "El área efectiva entre niveles de potencial resume el signo de [[DeltaU]]."\r
        en: "Effective area between potential levels summarizes the sign of [[DeltaU]]."\r
    likely_errors:\r
    - id: du-order\r
      when: ri == rf\r
      status: warning\r
      text:\r
        es: "Caso degenerado: si [[ri]] coincide con [[rf]], [[DeltaU]] debe anularse."\r
        en: "Degenerate case: if [[ri]] equals [[rf]], [[DeltaU]] should vanish."\r
    - id: du-sign-link\r
      when: Wg == DeltaU\r
      status: warning\r
      text:\r
        es: "Error conceptual: en interacción conservativa, [[Wg]] no debe tener el mismo signo que [[DeltaU]]."\r
        en: "Conceptual error: in conservative interaction, [[Wg]] should not share the same sign as [[DeltaU]]."\r
    next_step_rules:\r
    - id: du-next\r
      when: ri > 0 and rf > 0\r
      status: info\r
      text:\r
        es: "Verificar consistencia con la relación de trabajo [[Wg]] para cerrar interpretación."\r
        en: "Check consistency with work relation [[Wg]] to close interpretation."\r
\r
  U:\r
    summary_rules:\r
    - id: u-summary\r
      when: m > 0\r
      status: success\r
      text:\r
        es: "[[U]] resume la energía gravitatoria del estado para la masa de prueba."\r
        en: "[[U]] summarizes the state's gravitational energy for the test mass."\r
    physical_reading_rules:\r
    - id: u-reading\r
      when: m > 0\r
      status: info\r
      text:\r
        es: "Cambios en [[U]] reflejan cambios reales de configuración espacial del sistema."\r
        en: "Changes in [[U]] reflect real spatial-configuration changes of the system."\r
    coherence_rules:\r
    - id: u-coh\r
      when: m > 0\r
      status: success\r
      text:\r
        es: "Coherencia: [[U]] escala linealmente con la masa de prueba [[m]]."\r
        en: "Coherence: [[U]] scales linearly with test mass [[m]]."\r
    model_validity_rules:\r
    - id: u-valid\r
      when: m > 0\r
      status: success\r
      text:\r
        es: "Válido si la masa de prueba no altera de forma apreciable el campo de la fuente."\r
        en: "Valid if the test mass does not significantly alter the source field."\r
    graph_rules:\r
    - id: u-graph\r
      when: m > 0\r
      status: info\r
      text:\r
        es: "[[U]] puede inferirse desde la lectura de [[V]] multiplicada por [[m]]."\r
        en: "[[U]] can be inferred from [[V]] reading multiplied by [[m]]."\r
    likely_errors:\r
    - id: u-miss-m\r
      when: m <= 0\r
      status: error\r
      text:\r
        es: "Error conceptual: [[U]] requiere una masa de prueba [[m]] positiva y definida."\r
        en: "Conceptual error: [[U]] requires a positive, defined test mass [[m]]."\r
    next_step_rules:\r
    - id: u-next\r
      when: m > 0\r
      status: info\r
      text:\r
        es: "Comparar [[U]] entre estados para interpretar el signo de [[DeltaU]]."\r
        en: "Compare [[U]] across states to interpret the sign of [[DeltaU]]."\r
\r
  Wg:\r
    summary_rules:\r
    - id: wg-summary\r
      when: Wg == Wg\r
      status: success\r
      text:\r
        es: "[[Wg]] cuantifica el trabajo gravitatorio entre estados."\r
        en: "[[Wg]] quantifies gravitational work between states."\r
    physical_reading_rules:\r
    - id: wg-reading\r
      when: Wg == Wg\r
      status: info\r
      text:\r
        es: "El signo de [[Wg]] se interpreta junto con [[DeltaU]] y sentido del desplazamiento radial."\r
        en: "The sign of [[Wg]] is interpreted together with [[DeltaU]] and radial-motion direction."\r
    coherence_rules:\r
    - id: wg-coh\r
      when: Wg + DeltaU == 0\r
      status: success\r
      text:\r
        es: "Coherencia conservativa entre trabajo y cambio de energía potencial."\r
        en: "Conservative coherence between work and potential-energy change."\r
    model_validity_rules:\r
    - id: wg-valid\r
      when: Wg == Wg\r
      status: success\r
      text:\r
        es: "Válido en interacción gravitatoria conservativa sin disipación relevante."\r
        en: "Valid under conservative gravitational interaction without relevant dissipation."\r
    graph_rules:\r
    - id: wg-graph\r
      when: Wg == Wg\r
      status: info\r
      text:\r
        es: "La separación de niveles de potencial sugiere el trabajo intercambiado."\r
        en: "Potential-level separation suggests exchanged work."\r
    likely_errors:\r
    - id: wg-sign\r
      when: Wg == DeltaU\r
      status: warning\r
      text:\r
        es: "Error conceptual probable: revisar relación de signo entre [[Wg]] y [[DeltaU]]."\r
        en: "Likely conceptual mistake: check sign relation between [[Wg]] and [[DeltaU]]."\r
    next_step_rules:\r
    - id: wg-next\r
      when: Wg == Wg\r
      status: info\r
      text:\r
        es: "Usar [[Wg]] para cerrar balance con cambios de energía cinética si el problema lo requiere."\r
        en: "Use [[Wg]] to close balance with kinetic-energy changes when required."\r
\r
config:\r
  decimal_places: 3\r
  show_graphs: true\r
`;export{e as default};
