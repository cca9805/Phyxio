const e=`version: "2.0"
id: interp-campo-electrico
leaf_id: campo-electrico

nombre:
  es: Interpretación del campo eléctrico
  en: Electric field interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: fundamentos
  parent_id: fundamentos
  ruta_relativa: fisica-clasica/electromagnetismo/fundamentos/campo-electrico

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
    en: Interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority:
      - summary
      - likely_errors

dependencies:
  formulas:
    - campo_electrico_definicion
    - campo_electrico_coulomb
  magnitudes:
    - E
    - F_e
    - q_0
    - k_e
    - q_fuente
    - r

global_context:
  physical_domain:
    es: Electrostática clásica en el vacío o en medios lineales homogéneos.
    en: Classical electrostatics in vacuum or homogeneous linear media.
  axis_convention:
    es: El eje radial positivo apunta desde la carga fuente hacia el punto de evaluación.
    en: The positive radial axis points from the source charge toward the evaluation point.
  standard_assumptions:
    - Cargas puntuales en reposo (electrostática)
    - Vacío o permitividad constante
    - Radio de evaluación mayor que el radio clásico del electrón
  standard_warnings:
    - "El modelo falla para r muy pequeño (escala sub-atómica)"
    - "En medios materiales reemplazar k_e por k_e dividido entre la permitividad relativa"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen del campo
      en: Field summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia física
      en: Physical coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del gráfico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores frecuentes
      en: Frequent errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:
  E:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Intensidad del campo eléctrico en el punto evaluado."
      en: "Electric field strength at the evaluated point."
    summary_rules:
      - id: E_summary_high
        when: "E > 1e6"
        status: warning
        text:
          es: "[[E]] indica un campo muy intenso (mayor de un millón de N/C). Este valor domina el comportamiento de cualquier carga en ese punto y puede ionizar gases."
          en: "[[E]] indicates a very intense field (above one million N/C). This value dominates the behavior of any charge at that point and can ionize gases."
      - id: E_summary_zero
        when: "E == 0"
        status: ok
        text:
          es: "[[E]] es nulo: el punto evaluado es un punto de equilibrio electrostático o está en el interior de un conductor."
          en: "[[E]] is zero: the evaluated point is an electrostatic equilibrium point or lies inside a conductor."
      - id: E_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E]] resume la intensidad del campo eléctrico: indica cuántos newtons de fuerza actuarían sobre cada culombio de carga positiva colocada en ese punto."
          en: "[[E]] summarizes the electric field strength: it indicates how many newtons of force would act on each coulomb of positive charge placed at that point."
    physical_reading_rules:
      - id: E_reading_coulomb
        when: "E > 0"
        status: ok
        text:
          es: "Una carga positiva colocada aquí experimentaría una fuerza de [[E]] N por cada culombio de carga. Una carga negativa experimentaría la misma fuerza en dirección opuesta."
          en: "A positive charge placed here would experience a force of [[E]] N per coulomb of charge. A negative charge would experience the same force in the opposite direction."
      - id: E_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E]] permite calcular la fuerza sobre cualquier carga q en ese punto multiplicando por q. Cuanto mayor es [[E]], más intensa es la interacción eléctrica."
          en: "[[E]] allows computing the force on any charge q at that point by multiplying by q. The larger [[E]], the more intense the electrical interaction."
    coherence_rules:
      - id: E_coherence_positive
        when: "E >= 0"
        status: ok
        text:
          es: "El módulo de [[E]] es no negativo: coherente."
          en: "The magnitude of [[E]] is non-negative: coherent."
      - id: E_coherence_negative
        when: "E < 0"
        status: error
        text:
          es: "El módulo de [[E]] no puede ser negativo. Revisar los valores de [[F_e]] y [[q_0]] introducidos."
          en: "The magnitude of [[E]] cannot be negative. Check the values of [[F_e]] and [[q_0]] entered."
      - id: E_coherence_default
        when: "true"
        status: ok
        text:
          es: "Valor de [[E]] dentro del rango esperado para electrostática clásica."
          en: "Value of [[E]] within the expected range for classical electrostatics."
    model_validity_rules:
      - id: E_validity_large
        when: "E > 3e6"
        status: warning
        text:
          es: "Campos superiores a 3×10⁶ N/C pueden ionizar el aire. El modelo de campo estático sigue siendo válido, pero el entorno deja de ser pasivo."
          en: "Fields above 3×10⁶ N/C can ionize air. The static field model remains valid, but the environment is no longer passive."
      - id: E_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de campo eléctrico clásico es válido para [[r]] mucho mayor que el radio sub-atómico y para cargas en reposo."
          en: "The classical electric field model is valid for [[r]] much larger than sub-atomic radii and for charges at rest."
    graph_rules:
      - id: E_graph_decay
        when: "E > 0"
        status: ok
        text:
          es: "En la gráfica [[E]] vs [[r]], este punto cae sobre la curva hiperbólica 1/r². Moverse hacia la derecha (mayor [[r]]) mueve el punto hacia abajo de forma no lineal."
          en: "On the [[E]] vs [[r]] graph, this point falls on the 1/r² hyperbolic curve. Moving right (larger [[r]]) moves the point downward nonlinearly."
      - id: E_graph_default
        when: "true"
        status: ok
        text:
          es: "La curva E vs r muestra la dependencia inversa cuadrática característica del campo de carga puntual."
          en: "The E vs r curve shows the characteristic inverse-square dependence of the point-charge field."
    likely_errors:
      - id: E_error_linear
        when: "true"
        status: warning
        text:
          es: "Error frecuente: suponer que [[E]] varía linealmente con [[r]]. La dependencia real es 1/r², no 1/r."
          en: "Common mistake: assuming [[E]] varies linearly with [[r]]. The actual dependence is 1/r², not 1/r."
      - id: E_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: calcular [[E]] a partir de la fuerza sin dividir entre [[q_0]], obteniendo la fuerza en lugar del campo."
          en: "Common mistake: computing [[E]] from the force without dividing by [[q_0]], obtaining force instead of field."
    next_step_rules:
      - id: E_next_force
        when: "E > 0"
        status: ok
        text:
          es: "Con [[E]] calculado, aplicar la definición para obtener [[F_e]] sobre cualquier carga [[q_0]] de interés. Continuar con energía potencial eléctrica."
          en: "With [[E]] computed, apply the definition to get [[F_e]] on any charge [[q_0]] of interest. Continue with electric potential energy."
      - id: E_next_default
        when: "true"
        status: ok
        text:
          es: "El siguiente paso natural es calcular la diferencia de potencial eléctrico integrando [[E]] a lo largo de un camino."
          en: "The natural next step is to compute the electric potential difference by integrating [[E]] along a path."

  F_e:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Fuerza eléctrica sobre la carga de prueba en el punto evaluado."
      en: "Electric force on the test charge at the evaluated point."
    summary_rules:
      - id: Fe_summary_positive
        when: "F_e > 0"
        status: ok
        text:
          es: "[[F_e]] positiva indica que la fuerza actúa en la dirección del campo; la carga de prueba [[q_0]] es positiva y el campo la empuja en sentido del campo."
          en: "Positive [[F_e]] indicates the force acts along the field direction; the test charge [[q_0]] is positive and the field pushes it along the field."
      - id: Fe_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_e]] resume la fuerza eléctrica que dependería de la carga de prueba específica introducida. Depende tanto del campo como del valor de [[q_0]]."
          en: "[[F_e]] summarizes the electric force that would depend on the specific test charge entered. It depends on both the field and the value of [[q_0]]."
    physical_reading_rules:
      - id: Fe_reading_default
        when: "true"
        status: ok
        text:
          es: "[[F_e]] indica la aceleración que adquiriría una partícula de masa conocida. Para un electrón (9.11×10⁻³¹ kg), dividir [[F_e]] por esa masa da la aceleración."
          en: "[[F_e]] indicates the acceleration a particle of known mass would acquire. For an electron (9.11×10⁻³¹ kg), dividing [[F_e]] by that mass gives the acceleration."
    coherence_rules:
      - id: Fe_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[F_e]] debería tener el mismo signo que el producto E · q_0. Si el resultado tiene signo contrario, revisar los signos de entrada."
          en: "[[F_e]] should have the same sign as the product E · q_0. If the result has the opposite sign, review input signs."
    model_validity_rules:
      - id: Fe_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido mientras [[q_0]] sea suficientemente pequeña para no perturbar las cargas fuente. Para cargas macroscópicas, el campo calculado puede diferir del real."
          en: "The model is valid as long as [[q_0]] is small enough not to disturb the source charges. For macroscopic charges, the computed field may differ from the real one."
    graph_rules:
      - id: Fe_graph_default
        when: "true"
        status: ok
        text:
          es: "[[F_e]] no aparece directamente en la gráfica E vs r, pero se obtiene multiplicando el valor leído en el eje y por [[q_0]]."
          en: "[[F_e]] does not appear directly on the E vs r graph, but is obtained by multiplying the y-axis value by [[q_0]]."
    likely_errors:
      - id: Fe_error_field
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[F_e]] con [[E]]. El campo [[E]] es por unidad de carga; [[F_e]] es la fuerza real sobre [[q_0]]."
          en: "Common mistake: confusing [[F_e]] with [[E]]. The field [[E]] is per unit charge; [[F_e]] is the actual force on [[q_0]]."
    next_step_rules:
      - id: Fe_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[F_e]] calculada, aplicar la segunda ley de Newton para obtener la aceleración de la carga y describir su movimiento."
          en: "With [[F_e]] computed, apply Newton's second law to get the charge acceleration and describe its motion."

  q_0:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Carga de prueba usada para definir o medir el campo en el punto."
      en: "Test charge used to define or measure the field at the point."
    summary_rules:
      - id: q0_summary_small
        when: "q_0 < 1e-12"
        status: ok
        text:
          es: "[[q_0]] es suficientemente pequeña para ser una carga de prueba ideal; la perturbación sobre las cargas fuente es despreciable."
          en: "[[q_0]] is small enough to serve as an ideal test charge; the disturbance on source charges is negligible."
      - id: q0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q_0]] resume el valor de la carga de prueba introducida. Su signo indica si la fuerza resultante sigue o se opone a [[E]]."
          en: "[[q_0]] summarizes the test charge value entered. Its sign indicates whether the resulting force follows or opposes [[E]]."
    physical_reading_rules:
      - id: q0_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q_0]] positiva indica que la fuerza sobre ella es paralela a [[E]]; [[q_0]] negativa indica fuerza antiparalela."
          en: "Positive [[q_0]] means the force on it is parallel to [[E]]; negative [[q_0]] means the force is antiparallel."
    coherence_rules:
      - id: q0_coherence_zero
        when: "q_0 == 0"
        status: error
        text:
          es: "[[q_0]] no puede ser cero: la definición divide entre [[q_0]] y resulta indeterminada."
          en: "[[q_0]] cannot be zero: the definition divides by [[q_0]] and becomes undefined."
      - id: q0_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q_0]] no nula: definición del campo bien establecida."
          en: "Non-zero [[q_0]]: field definition well established."
    model_validity_rules:
      - id: q0_validity_large
        when: "q_0 > 1e-9"
        status: warning
        text:
          es: "[[q_0]] mayor de 1 nC puede alterar la distribución de cargas fuente. El campo medido podría diferir del campo sin carga de prueba."
          en: "[[q_0]] larger than 1 nC may alter the source charge distribution. The measured field could differ from the field without the test charge."
      - id: q0_validity_default
        when: "true"
        status: ok
        text:
          es: "En el límite q_0 → 0, el campo definido es una propiedad pura del espacio generado por las cargas fuente."
          en: "In the limit q_0 → 0, the defined field is a pure property of the space generated by the source charges."
    graph_rules:
      - id: q0_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q_0]] no aparece directamente en la gráfica E vs r; su efecto se ve en [[F_e]] = E · q_0."
          en: "[[q_0]] does not appear directly on the E vs r graph; its effect shows in [[F_e]] = E · q_0."
    likely_errors:
      - id: q0_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: dejar [[q_0]] con el valor de la carga de interés real en lugar de usar la definición operativa con carga de prueba tendiente a cero."
          en: "Common mistake: setting [[q_0]] to the real charge of interest instead of using the operational definition with test charge tending to zero."
    next_step_rules:
      - id: q0_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[q_0]] para calcular [[F_e]] sobre la carga real de interés. Si [[q_0]] es la carga real del problema, continuar con dinámica."
          en: "Use [[q_0]] to compute [[F_e]] on the actual charge of interest. If [[q_0]] is the real charge of the problem, continue with dynamics."

  r:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Distancia desde la carga fuente al punto de evaluación del campo."
      en: "Distance from source charge to the field evaluation point."
    summary_rules:
      - id: r_summary_small
        when: "r < 1e-10"
        status: error
        text:
          es: "[[r]] es menor que el radio atómico. El modelo de carga puntual no es válido a esta escala; se requiere mecánica cuántica."
          en: "[[r]] is smaller than the atomic radius. The point-charge model is invalid at this scale; quantum mechanics is required."
      - id: r_summary_default
        when: "true"
        status: ok
        text:
          es: "[[r]] resume la separación geométrica que determina la intensidad del campo. Duplicar [[r]] disminuye [[E]] a una cuarta parte, lo que indica la fuerte dependencia con la distancia."
          en: "[[r]] summarizes the geometric separation that determines the field strength. Doubling [[r]] reduces [[E]] to one quarter, which indicates the strong distance dependence."
    physical_reading_rules:
      - id: r_reading_default
        when: "true"
        status: ok
        text:
          es: "Cada vez que [[r]] aumenta un factor de dos, el campo [[E]] disminuye un factor de cuatro. Esta ley cuadrática inversa es la firma del campo de carga puntual."
          en: "Every time [[r]] increases by a factor of two, the field [[E]] decreases by a factor of four. This inverse-square law is the signature of the point-charge field."
    coherence_rules:
      - id: r_coherence_positive
        when: "r > 0"
        status: ok
        text:
          es: "[[r]] positiva: coherente."
          en: "Positive [[r]]: coherent."
      - id: r_coherence_zero
        when: "r <= 0"
        status: error
        text:
          es: "[[r]] debe ser estrictamente positiva. El campo diverge para r tendiendo a cero."
          en: "[[r]] must be strictly positive. The field diverges as r tends to zero."
    model_validity_rules:
      - id: r_validity_default
        when: "true"
        status: ok
        text:
          es: "Para r > 2.8×10⁻¹⁵ m (radio clásico del electrón), el modelo de carga puntual es aplicable. Por debajo de esta escala, la física cuántica y nuclear toma el relevo."
          en: "For r > 2.8×10⁻¹⁵ m (classical electron radius), the point-charge model applies. Below this scale, quantum and nuclear physics take over."
    graph_rules:
      - id: r_graph_xaxis
        when: "true"
        status: ok
        text:
          es: "[[r]] es la variable del eje horizontal en la gráfica E vs r. El punto calculado se ubica en la abscisa correspondiente a [[r]], sobre la curva 1/r²."
          en: "[[r]] is the horizontal-axis variable on the E vs r graph. The computed point is located at the abscissa corresponding to [[r]], on the 1/r² curve."
    likely_errors:
      - id: r_error_linear
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar elevar [[r]] al cuadrado en la fórmula de Coulomb, obteniendo un campo que varía como 1/r en lugar de 1/r²."
          en: "Common mistake: forgetting to square [[r]] in Coulomb's formula, getting a field varying as 1/r instead of 1/r²."
    next_step_rules:
      - id: r_next_default
        when: "true"
        status: ok
        text:
          es: "Variar [[r]] para explorar cómo cambia [[E]] y comparar con la gráfica. Identificar el punto donde [[E]] alcanza la mitad de su valor actual."
          en: "Vary [[r]] to explore how [[E]] changes and compare with the graph. Identify the point where [[E]] reaches half its current value."

  q_fuente:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Carga puntual que genera el campo eléctrico evaluado."
      en: "Point charge generating the evaluated electric field."
    summary_rules:
      - id: qf_summary_positive
        when: "q_fuente > 0"
        status: ok
        text:
          es: "[[q_fuente]] positiva: el campo generado apunta radialmente hacia afuera desde la carga, lo que indica una fuente de líneas de campo."
          en: "Positive [[q_fuente]]: the generated field points radially outward from the charge, indicating a field-line source."
      - id: qf_summary_negative
        when: "q_fuente < 0"
        status: ok
        text:
          es: "[[q_fuente]] negativa: el campo generado apunta radialmente hacia adentro, lo que indica un sumidero de líneas de campo."
          en: "Negative [[q_fuente]]: the generated field points radially inward, indicating a field-line sink."
      - id: qf_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q_fuente]] describe y determina la distribución radial del campo eléctrico: mayor módulo de [[q_fuente]] aumenta proporcionalmente la intensidad de [[E]]."
          en: "[[q_fuente]] describes and determines the radial field distribution: larger magnitude of [[q_fuente]] proportionally increases [[E]]."
    physical_reading_rules:
      - id: qf_reading_default
        when: "true"
        status: ok
        text:
          es: "La magnitud de [[q_fuente]] escala linealmente con [[E]]: duplicar la carga fuente duplica el campo en todo punto. El signo determina si las líneas de campo salen o entran."
          en: "The magnitude of [[q_fuente]] scales linearly with [[E]]: doubling the source charge doubles the field everywhere. The sign determines whether field lines exit or enter."
    coherence_rules:
      - id: qf_coherence_zero
        when: "q_fuente == 0"
        status: error
        text:
          es: "[[q_fuente]] nula no genera campo eléctrico. Revisar los datos de entrada."
          en: "Zero [[q_fuente]] generates no electric field. Check input data."
      - id: qf_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q_fuente]] no nula: campo bien definido."
          en: "Non-zero [[q_fuente]]: field well defined."
    model_validity_rules:
      - id: qf_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de carga puntual es válido cuando el tamaño físico de la carga fuente es despreciable frente a [[r]]. Para objetos extendidos usar integración o la ley de Gauss."
          en: "The point-charge model is valid when the physical size of the source charge is negligible compared to [[r]]. For extended objects use integration or Gauss's law."
    graph_rules:
      - id: qf_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica E vs r, [[q_fuente]] escala verticalmente la curva: aumentarla sube toda la hipérbola; reducirla la baja."
          en: "On the E vs r graph, [[q_fuente]] scales the curve vertically: increasing it raises the entire hyperbola; decreasing it lowers it."
    likely_errors:
      - id: qf_error_sign
        when: "true"
        status: warning
        text:
          es: "Error frecuente: ignorar el signo de [[q_fuente]] al determinar la dirección del campo, asumiendo que el campo siempre apunta hacia afuera."
          en: "Common mistake: ignoring the sign of [[q_fuente]] when determining field direction, assuming the field always points outward."
    next_step_rules:
      - id: qf_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar el principio de superposición: si existen múltiples cargas fuente, calcular el campo de cada una y sumar vectorialmente."
          en: "Explore the superposition principle: if multiple source charges exist, compute each field and add vectorially."

cross_checks:
  - "Si E calculado por definición y E calculado por Coulomb difieren, verificar consistencia de q_0, F_e, q_fuente y r."

error_patterns:
  - id: ep_units
    description:
      es: "Mezcla de unidades: distancia en cm en lugar de m produce un campo 10⁴ veces mayor."
      en: "Unit mixing: distance in cm instead of m yields a field 10⁴ times larger."
  - id: ep_r_squared
    description:
      es: "Olvido del cuadrado en r: error sistemático de cálculo que subestima la dependencia con la distancia."
      en: "Forgetting r²: systematic computation error that underestimates the distance dependence."

graph_binding:
  type: Coord
  x_variable: r
  y_variable: E
  curve_family: "1/r²"

mini_graph:
  enabled: true
  preferred_type: Coord
  x_label:
    es: "r (m)"
    en: "r (m)"
  y_label:
    es: "E (N/C)"
    en: "E (N/C)"

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
