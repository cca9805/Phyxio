const e=`version: 5
id: principio-f-interp
leaf_id: principio-fundamental-de-la-hidrostatica
scope: local
nombre:
  es: Análisis del Principio Fundamental
  en: Fundamental Principle Analysis

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
      es: Resumen del Equilibrio
      en: Equilibrium Summary
  physical_reading:
    title:
      es: Lectura Física
      en: Physical Reading
  coherence:
    title:
      es: Coherencia y Diferencial
      en: Coherence and Differential
  model_validity:
    title:
      es: Validez del Modelo
      en: Model Validity
  graph_reading:
    title:
      es: Análisis Gráfico
      en: Graphical Analysis
  likely_errors:
    title:
      es: Errores Comunes
      en: Common Errors
  next_step:
    title:
      es: Siguientes Pasos
      en: Next Steps

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes:
    - p1
    - p2
    - rho
    - g
    - z1
    - z2
    - dp
    - dz
  formulas:
    - equilibrio_hidro
    - salto_hidro

targets:
  p2:
    summary_rules:
      - id: p2-val
        when: p2 > 0
        status: success
        text:
          es: La presión resultante [[p2]] describe el estado final tras considerar el cambio de cota vertical.
          en: The resulting pressure [[p2]] describes the final state after considering the vertical elevation change.
    physical_reading_rules:
      - id: p2-meaning
        when: z2 < z1
        status: success
        text:
          es: Significa que la presión aumenta porque el punto 2 está situado a una cota inferior al punto 1.
          en: It means that pressure increases because point 2 is located at a lower elevation than point 1.
      - id: p2-meaning-up
        when: z2 > z1
        status: success
        text:
          es: Indica una disminución de presión porque el punto 2 está más elevado que el punto de referencia.
          en: Indicates a pressure decrease because point 2 is higher than the reference point.
    coherence_rules:
      - id: p2-coh
        when: p2 > 0
        status: success
        text:
          es: El resultado es coherente porque respeta la dirección del gradiente gravitatorio.
          en: The result is coherent because it respects the direction of the gravitational gradient.
    model_validity_rules:
      - id: p2-valid
        when: p2 > 0
        status: success
        text:
          es: Válido asumiendo que el fluido es incompresible y no existen flujos dinámicos.
          en: Valid assuming the fluid is incompressible and no dynamic flows exist.
    graph_rules:
      - id: p2-graph
        when: p2 > 0
        status: success
        text:
          es: La presión [[p2]] se representa como la coordenada horizontal en el perfil de presiones del gráfico Coord.
          en: Pressure [[p2]] is represented as the horizontal coordinate in the pressure profile of the Coord graph.
    likely_errors:
      - id: err-p2-sign
        when: p2 < p1 and z2 < z1
        status: error
        text:
          es: ¡Error! Has podido confundir los signos. Si bajas (z2 < z1), la presión [[p2]] debe ser mayor que [[p1]].
          en: Error! You may have confused the signs. If you go down (z2 < z1), pressure [[p2]] must be greater than [[p1]].
    next_step_rules:
      - id: next-p2-pascal
        when: p2 > 0
        status: info
        text:
          es: Aplica el Principio de Pascal para ver cómo se transmite este cambio.
          en: Apply Pascal's Principle to see how this change is transmitted.

  p1:
    summary_rules:
      - id: p1-val
        when: p1 > 0
        status: success
        text:
          es: La presión inicial [[p1]] describe la carga de referencia en la primera cota del sistema.
          en: The initial pressure [[p1]] describes the reference load at the system's first elevation.
    physical_reading_rules:
      - id: p1-meaning
        when: p1 > 0
        status: success
        text:
          es: Indica el punto de partida hidrostático desde el cual se calcula la variación hacia la cota 2.
          en: Indicates the hydrostatic starting point from which the variation toward elevation 2 is calculated.
    coherence_rules:
      - id: p1-coh
        when: p1 > 0
        status: success
        text:
          es: Coherente porque permite establecer el balance de fuerzas estáticas.
          en: Coherent because it allows establishing the balance of static forces.
    model_validity_rules:
      - id: p1-model
        when: p1 > 0
        status: success
        text:
          es: Válido para fluidos en reposo absoluto.
          en: Valid for fluids at absolute rest.
    graph_rules:
      - id: p1-graph
        when: p1 > 0
        status: success
        text:
          es: Representa la intersección o punto inicial en el eje de presiones.
          en: Represents the intersection or starting point on the pressure axis.
    likely_errors:
      - id: err-p1-neg
        when: p1 < 0
        status: error
        text:
          es: Error, una presión absoluta [[p1]] negativa no es físicamente posible en este modelo.
          en: Error, a negative absolute pressure [[p1]] is not physically possible in this model.
    next_step_rules:
      - id: next-p1-estatica
        when: p1 > 0
        status: info
        text:
          es: Revisa el concepto de presión atmosférica si el punto 1 está en la superficie.
          en: Review the concept of atmospheric pressure if point 1 is at the surface.

  dp:
    summary_rules:
      - id: dp-val
        when: dp != 0
        status: success
        text:
          es: El salto de presión [[dp]] describe la variación neta debida al cambio de altura.
          en: The pressure jump [[dp]] describes the net variation due to height change.
    physical_reading_rules:
      - id: dp-meaning
        when: dp > 0
        status: success
        text:
          es: Significa que la presión ha aumentado porque el diferencial de cota es negativo (descenso).
          en: It means pressure has increased because the elevation differential is negative (descent).
    coherence_rules:
      - id: dp-coh
        when: dp != 0
        status: success
        text:
          es: Es coherente porque el fluido ejerce una fuerza proporcional al peso de la columna desplazada.
          en: It is coherent because the fluid exerts a force proportional to the displaced column's weight.
    model_validity_rules:
      - id: dp-valid
        when: dp != 0
        status: success
        text:
          es: Válido si la densidad [[rho]] se mantiene constante en el intervalo analizado.
          en: Valid if density [[rho]] remains constant in the analyzed interval.
    graph_rules:
      - id: dp-graph
        when: dp != 0
        status: success
        text:
          es: Se visualiza como la longitud del vector de carga en el perfil SVG.
          en: It is visualized as the length of the load vector in the SVG profile.
    likely_errors:
      - id: err-dp-rho
        when: dp > 1e9
        status: warning
        text:
          es: ¡Cuidado! Un [[dp]] tan elevado suele indicar un error al olvidar las unidades de la densidad [[rho]].
          en: Careful! Such a high [[dp]] usually indicates an error when forgetting the units of density [[rho]].
    next_step_rules:
      - id: next-dp-manometros
        when: dp != 0
        status: info
        text:
          es: Estudia la aplicación de manómetros para ver cómo medir este [[dp]] experimentalmente.
          en: Study the application of manometers to see how to measure this [[dp]] experimentally.
`;export{e as default};
