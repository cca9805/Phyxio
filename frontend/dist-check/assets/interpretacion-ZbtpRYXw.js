const e=`version: 5
id: presion-interp
leaf_id: presion
scope: local
nombre:
  es: "Análisis de Presión"
  en: "Pressure Analysis"

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step

result_blocks:
  summary:
    title:
      es: "Resumen de Presión"
      en: "Pressure Summary"
  physical_reading:
    title:
      es: "Lectura Física"
      en: "Physical Reading"
  coherence:
    title:
      es: "Coherencia de Carga"
      en: "Load Coherence"
  model_validity:
    title:
      es: "Validez del Modelo"
      en: "Model Validity"
  graph_reading:
    title:
      es: "Análisis Gráfico"
      en: "Graphic Analysis"
  likely_errors:
    title:
      es: "Errores Comunes"
      en: "Common Errors"
  next_step:
    title:
      es: "Progresión Sugerida"
      en: "Suggested Progression"

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [A, F, p, p_abs, p_atm, p_man]
  formulas: [presion_abs, presion_mec]

targets:
  p:
    summary_rules:
      - id: p-val
        when: p > 0
        status: success
        text:
          es: "La presión [[p]] indica la intensidad de la fuerza distribuida sobre la superficie de contacto."
          en: "The pressure [[p]] indicates the intensity of the force distributed over the contact surface."
    physical_reading_rules:
      - id: p-phys
        when: p > 1e6
        status: warning
        text:
          es: "Dado que la presión es muy alta, el material de las paredes podría sufrir deformaciones críticas."
          en: "Since the pressure is very high, the wall material could undergo critical deformations."
    coherence_rules:
      - id: p-coh
        when: p > 0
        status: success
        text:
          es: "La presión es coherente con la fuerza y el área declaradas."
          en: "The pressure is coherent with the declared force and area."
    model_validity_rules:
      - id: p-valid
        when: p > 0
        status: success
        text:
          es: "Válido bajo el modelo de medio continuo."
          en: "Valid under the continuum model."
    graph_rules:
      - id: p-graph
        when: p > 0
        status: success
        text:
          es: "La posición vertical en el gráfico refleja la magnitud de la carga."
          en: "The vertical position on the graph reflects the load magnitude."
          es: "La posición vertical en el gráfico refleja la magnitud de la carga. Esta representación lineal facilita la identificación de tendencias de carga o descarga, permitiendo predecir cambios en la estabilidad del sistema ante variaciones en la fuerza aplicada."
          en: "The vertical position on the graph reflects the load magnitude. This linear representation facilitates the identification of loading or unloading trends, allowing for the prediction of changes in system stability due to variations in the applied force."
    likely_errors:
      - id: p-err-neg
        when: p < 0
        status: error
        text:
          es: "Error Conceptual Crítico: La presión absoluta no puede ser negativa en mecánica de medios continuos. Si obtuvo este resultado, verifique si ha confundido la presión absoluta con la manométrica o si ha cometido un error de signo al despejar la fuerza normal. En sistemas físicos, una presión 'negativa' a menudo representa una tensión de tracción que el fluido no puede soportar, indicando que el modelo de cálculo es inapropiado para las condiciones de contorno definidas."
          en: "Critical Conceptual Error: Absolute pressure cannot be negative in continuum mechanics. If you obtained this result, check if you confused absolute pressure with gauge pressure or if you made a sign error when solving for the normal force. In physical systems, 'negative' pressure often represents a tensile stress that the fluid cannot sustain, indicating that the calculation model is inappropriate for the defined boundary conditions."
      - id: p-err-zero
        when: p == 0
        status: warning
        text:
          es: "Aviso de Singularidad Física: Una presión nula implica ausencia total de colisiones moleculares o vacío absoluto. En un contexto de ingeniería, esto suele indicar un error en la toma de datos, la pérdida total de contención del fluido, o que el sensor de presión está mal calibrado o desconectado del sistema activo."
          en: "Physical Singularity Warning: Zero pressure implies a total absence of molecular collisions or an absolute vacuum. In an engineering context, this usually indicates an error in data collection, a total loss of fluid containment, or that the pressure sensor is miscalibrated or disconnected from the active system."
    next_step_rules:
      - id: p-next
        when: p > 0
        status: info
        text:
          es: "Analice ahora el empuje si el sistema está sumergido. La interacción entre la presión interna y la presión hidrostática externa definirá las fuerzas netas resultantes y el comportamiento de flotabilidad del sistema bajo diversas profundidades."
          en: "Now analyze the buoyancy if the system is submerged. The interaction between internal pressure and external hydrostatic pressure will define the resulting net forces and the system's buoyancy behavior at various depths."

  p_abs:
    summary_rules:
      - id: abs-val
        when: p_abs > 0
        status: success
        text:
          es: "La presión absoluta [[p_abs]] es el estado real respecto al vacío."
          en: "Absolute pressure [[p_abs]] is the real state relative to vacuum."
    physical_reading_rules:
      - id: abs-phys
        when: p_abs < p_atm
        status: warning
        text:
          es: "Debido a que es menor que la atmósfera, hay un vacío parcial."
          en: "Because it is lower than the atmosphere, there is a partial vacuum."
    coherence_rules:
      - id: abs-coh
        when: p_abs > 0
        status: success
        text:
          es: "Valor absoluto coherente con las escalas físicas ordinarias."
          en: "Absolute value coherent with ordinary physical scales."
    model_validity_rules:
      - id: abs-valid
        when: p_abs > 0
        status: success
        text:
          es: "Modelo válido para fluidos en fase simple."
          en: "Model valid for single-phase fluids."
    graph_rules:
      - id: abs-graph
        when: p_abs > 0
        status: info
        text:
          es: "El gráfico incorpora el offset atmosférico."
          en: "The graph incorporates the atmospheric offset."
    likely_errors:
      - id: abs-err-neg
        when: p_abs < 0
        status: error
        text:
          es: "Violación Física: La presión absoluta negativa no existe en mecánica clásica."
          en: "Physical Violation: Negative absolute pressure does not exist in classical mechanics."
    next_step_rules:
      - id: abs-next
        when: p_abs > 0
        status: info
        text:
          es: "Compare con el límite de rotura del tanque."
          en: "Compare with the tank's burst limit."

  F:
    summary_rules:
      - id: f-val
        when: F > 0
        status: success
        text:
          es: "La fuerza normal [[F]] es la carga mecánica aplicada."
          en: "The normal force [[F]] is the applied mechanical load."
    physical_reading_rules:
      - id: f-phys
        when: F > 0
        status: info
        text:
          es: "Como la carga es positiva, empuja contra la superficie."
          en: "As the load is positive, it pushes against the surface."
    coherence_rules:
      - id: f-coh
        when: F > 0
        status: success
        text:
          es: "Fuerza consistente con el área y la presión medidas."
          en: "Force consistent with the measured area and pressure."
    model_validity_rules:
      - id: f-valid
        when: F > 0
        status: success
        text:
          es: "Válido para cargas estáticas."
          en: "Valid for static loads."
    graph_rules:
      - id: f-graph
        when: F > 0
        status: success
        text:
          es: "Variable independiente en el eje horizontal."
          en: "Independent variable on the horizontal axis."
    likely_errors:
      - id: f-err-neg
        when: F < 0
        status: error
        text:
          es: "Error de Signo: Use el módulo de la fuerza normal para el cálculo de presión."
          en: "Sign Error: Use the magnitude of the normal force for pressure calculation."
    next_step_rules:
      - id: f-next
        when: F > 0
        status: info
        text:
          es: "Calcule el esfuerzo cortante si hay movimiento."
          en: "Calculate the shear stress if there is motion."

  A:
    summary_rules:
      - id: a-val
        when: A > 0
        status: success
        text:
          es: "El área [[A]] determina la distribución espacial de la fuerza."
          en: "The area [[A]] determines the spatial distribution of the force."
    physical_reading_rules:
      - id: a-phys
        when: A < 0.001
        status: warning
        text:
          es: "Dado que el área es pequeña, se produce una gran concentración de carga."
          en: "Since the area is small, a high load concentration occurs."
    coherence_rules:
      - id: a-coh
        when: A > 0
        status: success
        text:
          es: "Geometría consistente con las dimensiones del sistema."
          en: "Geometry consistent with the system's dimensions."
    model_validity_rules:
      - id: a-valid
        when: A > 1e-10
        status: success
        text:
          es: "Área suficiente para el modelo macroscópico."
          en: "Sufficient area for the macroscopic model."
    graph_rules:
      - id: a-graph
        when: A > 0
        status: success
        text:
          es: "Eje de control para la respuesta de presión."
          en: "Control axis for pressure response."
    likely_errors:
      - id: a-err-zero
        when: A <= 0
        status: error
        text:
          es: "Error de Geometría: El área debe ser estrictamente positiva para ser físicamente válida."
          en: "Geometry Error: Area must be strictly positive to be physically valid."
    next_step_rules:
      - id: a-next
        when: A > 0
        status: info
        text:
          es: "Aumente el área para reducir la presión operativa."
          en: "Increase the area to reduce operating pressure."

  p_man:
    summary_rules:
      - id: man-val
        when: p_man != 0
        status: success
        text:
          es: "La presión manométrica [[p_man]] es el exceso respecto a la atmósfera."
          en: "Gauge pressure [[p_man]] is the excess relative to the atmosphere."
    physical_reading_rules:
      - id: man-phys
        when: p_man < 0
        status: warning
        text:
          es: "Debido al valor negativo, la atmósfera empuja hacia adentro del sistema."
          en: "Due to the negative value, the atmosphere pushes into the system."
    coherence_rules:
      - id: man-coh
        when: p_man > -p_atm
        status: success
        text:
          es: "Valor manométrico físicamente posible."
          en: "Gauge value physically possible."
    model_validity_rules:
      - id: man-valid
        when: p_man != 0
        status: success
        text:
          es: "Válido para lecturas de instrumentos estándar."
          en: "Valid for standard instrument readings."
    graph_rules:
      - id: man-graph
        when: p_man != 0
        status: info
        text:
          es: "Visualización de la diferencia relativa de presión."
          en: "Visualization of the relative pressure difference."
    likely_errors:
      - id: man-err-limit
        when: p_man < -p_atm
        status: error
        text:
          es: "Límite de Vacío: No se puede bajar de la presión de vacío absoluto."
          en: "Vacuum Limit: You cannot drop below absolute vacuum pressure."
    next_step_rules:
      - id: man-next
        when: p_man != 0
        status: info
        text:
          es: "Sume la presión atmosférica para obtener la absoluta."
          en: "Add atmospheric pressure to obtain the absolute one."

  p_atm:
    summary_rules:
      - id: atm-val
        when: p_atm > 0
        status: success
        text:
          es: "La presión atmosférica [[p_atm]] actúa como referencia ambiental."
          en: "Atmospheric pressure [[p_atm]] acts as an environmental reference."
    physical_reading_rules:
      - id: atm-phys
        when: p_atm > 0
        status: info
        text:
          es: "Como es la presión local, condiciona las lecturas de los manómetros."
          en: "As it is the local pressure, it conditions the manometer readings."
    coherence_rules:
      - id: atm-coh
        when: p_atm > 80000 and p_atm < 120000
        status: success
        text:
          es: "Valor atmosférico consistente con altitudes terrestres habitables."
          en: "Atmospheric value consistent with habitable Earth altitudes."
    model_validity_rules:
      - id: atm-valid
        when: p_atm > 0
        status: success
        text:
          es: "Referencia válida para el entorno de trabajo."
          en: "Valid reference for the work environment."
    graph_rules:
      - id: atm-graph
        when: p_atm > 0
        status: info
        text:
          es: "Nivel de base en el eje de presiones."
          en: "Baseline level on the pressure axis."
    likely_errors:
      - id: atm-err-neg
        when: p_atm <= 0
        status: error
        text:
          es: "Error de Referencia: La presión atmosférica debe ser positiva."
          en: "Reference Error: Atmospheric pressure must be positive."
    next_step_rules:
      - id: atm-next
        when: p_atm > 0
        status: info
        text:
          es: "Considere cambios por altitud si el sistema se desplaza."
          en: "Consider changes due to altitude if the system moves."
`;export{e as default};
