const e=`version: 5
id: principio-de-arquimedes-interp
leaf_id: principio-de-arquimedes
scope: local
nombre:
  es: Análisis de Flotación y Empuje
  en: Flotation and Buoyancy Analysis

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
      es: Resumen del Cálculo Boyante
      en: Buoyancy Calculation Summary
  physical_reading:
    title:
      es: Lectura Física del Empuje
      en: Physical Reading of Buoyancy
  coherence:
    title:
      es: Coherencia y Consistencia
      en: Coherence and Consistency
  model_validity:
    title:
      es: Validez del Modelo de Arquímedes
      en: Archimedes Model Validity
  graph_reading:
    title:
      es: Análisis Gráfico de Fuerzas
      en: Graphical Force Analysis
  likely_errors:
    title:
      es: Errores Conceptuales Comunes
      en: Common Errors
  next_step:
    title:
      es: Progresión de Aprendizaje
      en: Learning Progression

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes:
    - E
    - rho_f
    - V_des
    - W
    - W_ap
    - g
  formulas:
    - ley_arquimedes
    - peso_aparente

targets:
  E:
    summary_rules:
      - id: e-buoyancy-val
        when: E > 0
        status: success
        text:
          es: "El empuje calculado [[E]] describe la fuerza ascendente que el fluido ejerce sobre el cuerpo sumergido."
          en: "The calculated buoyancy [[E]] describes the upward force that the fluid exerts on the submerged body."
    physical_reading_rules:
      - id: e-buoyancy-meaning
        when: E > 0
        status: success
        text:
          es: "Significa que el fluido está soportando parte o la totalidad del peso del objeto porque el gradiente de presión genera una fuerza neta hacia arriba."
          en: "It means that the fluid is supporting part or all of the object's weight because the pressure gradient generates a net upward force."
    coherence_rules:
      - id: e-buoyancy-density
        when: E > 0
        status: success
        text:
          es: "Es coherente porque el valor depende directamente de la densidad del fluido [[rho_f]] y del volumen desalojado [[V_des]]."
          en: "It is coherent because the value depends directly on the fluid density [[rho_f]] and the displaced volume [[V_des]]."
    model_validity_rules:
      - id: e-buoyancy-static
        when: E > 0
        status: success
        text:
          es: "El valor es válido asumiendo que el fluido está en reposo y es incompresible."
          en: "The value is valid assuming the fluid is at rest and incompressible."
    graph_rules:
      - id: e-buoyancy-graph
        when: E > 0
        status: success
        text:
          es: "La fuerza se visualiza como un vector azul hacia arriba en el DCL y como la barra principal en el gráfico de balance."
          en: "The force is visualized as a blue upward vector in the DCL and as the main bar in the balance graph."
    likely_errors:
      - id: err-e-weight
        when: E == W
        status: info
        text:
          es: "¡Cuidado! Si el empuje iguala al peso, el cuerpo está en flotación neutra; cualquier cambio en el volumen sumergido romperá este equilibrio."
          en: "Caution! If buoyancy equals weight, the body is in neutral flotation; any change in submerged volume will break this equilibrium."
    next_step_rules:
      - id: next-e-flotacion
        when: E > 0
        status: info
        text:
          es: "Explora cómo varía el empuje al cambiar la densidad del líquido en el simulador."
          en: "Explore how buoyancy varies when changing the liquid density in the simulator."

  rho_f:
    summary_rules:
      - id: rho-density-val
        when: rho_f > 0
        status: success
        text:
          es: "La densidad del fluido [[rho_f]] define la intensidad del medio que genera el empuje."
          en: "The fluid density [[rho_f]] defines the intensity of the medium that generates buoyancy."
    physical_reading_rules:
      - id: rho-density-meaning
        when: rho_f > 1000
        status: success
        text:
          es: "Indica que el medio es más denso que el agua pura, lo que facilita la flotación porque se desplaza más masa por unidad de volumen."
          en: "Indicates that the medium is denser than pure water, which facilitates flotation because more mass is displaced per unit of volume."
    coherence_rules:
      - id: rho-density-pos
        when: rho_f > 0
        status: success
        text:
          es: "Es coherente que la densidad sea positiva ya que representa una propiedad material real."
          en: "It is coherent that the density is positive as it represents a real material property."
    model_validity_rules:
      - id: rho-density-const
        when: rho_f > 0
        status: success
        text:
          es: "Se asume que la densidad es uniforme en todo el volumen ocupado por el cuerpo sumergido."
          en: "It is assumed that the density is uniform throughout the volume occupied by the submerged body."
    graph_rules:
      - id: rho-density-control
        when: rho_f > 0
        status: success
        text:
          es: "Este valor controla directamente la magnitud del empuje en las visualizaciones dinámicas."
          en: "This value directly controls the magnitude of buoyancy in the dynamic visualizations."
    likely_errors:
      - id: err-rho-obj
        when: rho_f < 0
        status: error
        text:
          es: "Error crítico: La densidad no puede ser negativa en sistemas físicos reales."
          en: "Critical error: Density cannot be negative in real physical systems."
    next_step_rules:
      - id: next-rho-bernoulli
        when: rho_f > 0
        status: info
        text:
          es: "Estudia cómo la densidad afecta a la dinámica de fluidos en movimiento."
          en: "Study how density affects the dynamics of moving fluids."

  V_des:
    summary_rules:
      - id: vdes-vol-val
        when: V_des > 0
        status: success
        text:
          es: "El volumen desplazado [[V_des]] representa la porción de espacio que el objeto ha robado al fluido."
          en: "The displaced volume [[V_des]] represents the portion of space that the object has stolen from the fluid."
    physical_reading_rules:
      - id: vdes-vol-meaning
        when: V_des > 0
        status: success
        text:
          es: "Indica la magnitud de la interacción geométrica entre el sólido y el líquido; a mayor volumen, mayor capacidad de carga."
          en: "Indicates the magnitude of the geometric interaction between the solid and the liquid; the larger the volume, the greater the load capacity."
    coherence_rules:
      - id: vdes-vol-check
        when: V_des > 0
        status: success
        text:
          es: "Es coherente porque el empuje aumenta linealmente con este valor según la ley de Arquímedes."
          en: "It is coherent because buoyancy increases linearly with this value according to Archimedes' law."
    model_validity_rules:
      - id: vdes-vol-geom
        when: V_des > 0
        status: success
        text:
          es: "Válido mientras la forma del objeto sea bien definida y el fluido lo rodee completamente."
          en: "Valid as long as the object's shape is well-defined and the fluid completely surrounds it."
    graph_rules:
      - id: vdes-vol-graph
        when: V_des > 0
        status: success
        text:
          es: "Se representa visualmente como la región sombreada bajo el nivel del agua en el gráfico SVG."
          en: "It is represented visually as the shaded region below the water level in the SVG graph."
    likely_errors:
      - id: err-vdes-total
        when: V_des > 0
        status: warning
        text:
          es: "¡Cuidado! No confundas el volumen total del objeto con el volumen sumergido si el cuerpo flota."
          en: "Caution! Do not confuse the object's total volume with the submerged volume if the body floats."
    next_step_rules:
      - id: next-vdes-naval
        when: V_des > 0
        status: info
        text:
          es: "Investiga cómo el diseño del casco de un barco maximiza [[V_des]] para aumentar el empuje."
          en: "Investigate how a ship's hull design maximizes [[V_des]] to increase buoyancy."

  W:
    summary_rules:
      - id: w-weight-val
        when: W > 0
        status: success
        text:
          es: "El peso real [[W]] representa la fuerza gravitatoria total que tira del objeto hacia abajo."
          en: "The real weight [[W]] represents the total gravitational force pulling the object downward."
    physical_reading_rules:
      - id: w-weight-meaning
        when: W > 0
        status: success
        text:
          es: "Es la fuerza que el empuje debe vencer para que el cuerpo pueda flotar."
          en: "It is the force that buoyancy must overcome for the body to float."
    coherence_rules:
      - id: w-weight-pos
        when: W > 0
        status: success
        text:
          es: "Es coherente que sea positivo y dependa de la masa del objeto y la gravedad [[g]]."
          en: "It is coherent that it is positive and depends on the object's mass and gravity [[g]]."
    model_validity_rules:
      - id: w-weight-const
        when: W > 0
        status: success
        text:
          es: "Válido en la superficie terrestre con gravedad estándar."
          en: "Valid on the Earth's surface with standard gravity."
    graph_rules:
      - id: w-weight-graph
        when: W > 0
        status: success
        text:
          es: "Se representa como un vector naranja hacia abajo en el DCL."
          en: "It is represented as an orange downward vector in the DCL."
    likely_errors:
      - id: err-w-vacuum
        when: W > 0
        status: info
        text:
          es: "Recuerda que el peso real no cambia aunque el objeto esté sumergido."
          en: "Remember that real weight does not change even if the object is submerged."
    next_step_rules:
      - id: next-w-gravity
        when: W > 0
        status: info
        text:
          es: "Revisa la ley de gravitación universal para entender el origen de [[W]]."
          en: "Review the law of universal gravitation to understand the origin of [[W]]."

  W_ap:
    summary_rules:
      - id: wap-weight-val
        when: W_ap >= 0
        status: success
        text:
          es: "El peso aparente [[W_ap]] es la carga neta que se percibe cuando el cuerpo está sumergido."
          en: "The apparent weight [[W_ap]] is the net load perceived when the body is submerged."
    physical_reading_rules:
      - id: wap-weight-meaning
        when: W_ap > 0
        status: success
        text:
          es: "Indica que el objeto todavía tiende a hundirse, pero con una fuerza reducida por el empuje [[E]]."
          en: "Indicates that the object still tends to sink, but with a force reduced by buoyancy [[E]]."
    coherence_rules:
      - id: wap-weight-check
        when: W_ap < W
        status: success
        text:
          es: "Es coherente porque el empuje siempre resta valor al peso real en este medio."
          en: "It is coherent because buoyancy always subtracts value from the real weight in this medium."
    model_validity_rules:
      - id: wap-weight-valid
        when: W_ap >= 0
        status: success
        text:
          es: "Válido para cuerpos que no flotan espontáneamente."
          en: "Valid for bodies that do not float spontaneously."
    graph_rules:
      - id: wap-weight-result
        when: W_ap > 0
        status: success
        text:
          es: "Representa la fuerza resultante en el balance estático."
          en: "Represents the resultant force in the static balance."
    likely_errors:
      - id: err-wap-zero
        when: W_ap == 0
        status: info
        text:
          es: "Si es cero, el cuerpo está en equilibrio perfecto de flotación."
          en: "If it is zero, the body is in perfect flotation equilibrium."
    next_step_rules:
      - id: next-wap-dynamics
        when: W_ap > 0
        status: info
        text:
          es: "Usa la segunda ley de Newton para calcular la aceleración si soltamos el cuerpo."
          en: "Use Newton's second law to calculate acceleration if the body is released."
`;export{e as default};
