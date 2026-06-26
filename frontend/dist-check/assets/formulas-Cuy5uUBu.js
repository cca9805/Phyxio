const e=`version: v5
leaf_id: flujo-de-energia
formulas:
  - id: flujo_energia_densidad
    title:
      es: Flujo de energía desde densidad
      en: Energy flux from density
    equation: "S_flujo = u_energia * v"
    latex: "S = u \\\\, v"
    rearrangements:
      - target: S_flujo
        equation: "S_flujo = u_energia * v"
        latex: "S = u \\\\, v"
      - target: u_energia
        equation: "u_energia = S_flujo / v"
        latex: "u = \\\\frac{S}{v}"
      - target: v
        equation: "v = S_flujo / u_energia"
        latex: "v = \\\\frac{S}{u}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: El flujo de energía es el producto de la densidad de energía almacenada en el medio por la velocidad a la que esa energía se propaga.
      en: Energy flux is the product of energy density stored in the medium by the velocity at which that energy propagates.
    constraints:
      - "v ≠ 0 (requiere propagación)"
      - "u_energia ≥ 0 (densidad no negativa)"
    validity:
      es: Válida para cualquier onda progresiva en medios no disipativos. En medios absorbentes, el flujo disminuye con la distancia recorrida.
      en: Valid for any progressive wave in non-dissipative media. In absorbing media, flux decreases with distance traveled.
    dimension_check: "[M L⁻¹ T⁻²] · [L T⁻¹] = [M T⁻³] = W/m² ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Transporte energético en ondas mecánicas
      - Cálculo de intensidad en acústica
      - Vector de Poynting en electromagnetismo
    interpretation_tags:
      - flujo_energia
      - transporte_onda
      - relacion_densidad_velocidad
    result_semantics:
      target: S_flujo
      kind: flux_density
      sign_meaning:
        es: Signo positivo indica flujo en dirección de propagación positiva; negativo indica dirección opuesta.
        en: Positive sign indicates flux in positive propagation direction; negative indicates opposite direction.
      absolute_value_meaning:
        es: Magnitud del flujo de energía en watts por metro cuadrado.
        en: Magnitude of energy flux in watts per square meter.
    domain_checks:
      - condition: "S_flujo >= 0"
        message:
          es: "El flujo de energía debe ser no negativo cuando se considera magnitud escalar"
          en: "Energy flux must be non-negative when considered as scalar magnitude"
    coherence_checks:
      - "Si u_energia ≈ 0, entonces S_flujo ≈ 0 (sin energía no hay flujo)"
      - "Si |v| es muy grande, S_flujo puede ser grande incluso con u_energia moderada"
    graph_implications:
      - "S_flujo se visualiza mediante flechas cuya longitud proporcional representa magnitud"
      - "La dirección de las flechas indica la dirección del flujo energético"
    pedagogical_triggers:
      - error: "Confundir flujo con densidad de energía"
        detection: "Si el alumno usa u_energia como respuesta para flujo"
        message:
          es: "Recuerda: la densidad de energía es 'combustible' almacenado, el flujo es 'combustible' en movimiento."
          en: "Remember: energy density is stored 'fuel', flux is 'fuel' in motion."

  - id: flujo_energia_cuerda
    title:
      es: Flujo de energía en ondas de cuerda
      en: Energy flux in string waves
    equation: "S_flujo = 0.5 * mu * omega^2 * A^2 * v"
    latex: "S = \\\\frac{1}{2} \\\\mu \\\\omega^{2} A^{2} v"
    rearrangements:
      - target: S_flujo
        equation: "S_flujo = 0.5 * mu * omega^2 * A^2 * v"
        latex: "S = \\\\frac{1}{2} \\\\mu \\\\omega^{2} A^{2} v"
      - target: A
        equation: "A = sqrt(2 * S_flujo / (mu * omega^2 * v))"
        latex: "A = \\\\sqrt{\\\\frac{2S}{\\\\mu \\\\omega^{2} v}}"
      - target: omega
        equation: "omega = sqrt(2 * S_flujo / (mu * A^2 * v))"
        latex: "\\\\omega = \\\\sqrt{\\\\frac{2S}{\\\\mu A^{2} v}}"
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: Para ondas transversales en cuerdas, el flujo depende de la densidad lineal, la frecuencia angular, el cuadrado de la amplitud y la velocidad de propagación.
      en: For transverse waves on strings, flux depends on linear density, angular frequency, amplitude squared, and propagation velocity.
    constraints:
      - "mu > 0 (la cuerda debe tener masa)"
      - "omega > 0 (requiere oscilación)"
      - "A ≥ 0 (amplitud no negativa)"
      - "v ≠ 0 (requiere propagación)"
    validity:
      es: Aplica a ondas transversales en cuerdas ideales bajo pequeñas oscilaciones. Para amplitudes grandes, aparecen efectos no lineales que modifican la relación.
      en: Applies to transverse waves on ideal strings under small oscillations. For large amplitudes, nonlinear effects appear that modify the relationship.
    dimension_check: "[M L⁻¹] · [T⁻¹]² · [L]² · [L T⁻¹] = [M T⁻³] = W/m² ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Diseño de instrumentos musicales de cuerda
      - Transmisión de energía mediante cuerdas vibrantes
      - Análisis de potencia en ondas mecánicas
    interpretation_tags:
      - flujo_cuerda
      - dependencia_amplitud_cuadrada
      - dependencia_frecuencia_cuadrada
    result_semantics:
      target: S_flujo
      kind: flux_density
      sign_meaning:
        es: El signo depende de la dirección de propagación elegida como positiva.
        en: Sign depends on the propagation direction chosen as positive.
      absolute_value_meaning:
        es: Potencia transmitida por unidad de longitud perpendicular a la cuerda.
        en: Power transmitted per unit length perpendicular to the string.
    domain_checks:
      - condition: "S_flujo >= 0"
        message:
          es: "El flujo de energía en cuerdas debe ser no negativo"
          en: "Energy flux in strings must be non-negative"
    coherence_checks:
      - "Si A = 0, entonces S_flujo = 0 (sin amplitud no hay onda ni flujo)"
      - "S_flujo proporcional a A²: duplicar amplitud cuadruplica el flujo"
      - "S_flujo proporcional a ω²: duplicar frecuencia cuadruplica el flujo"
    graph_implications:
      - "La amplitud A controla visualmente el 'grosor' de la representación del flujo"
      - "El flujo máximo coincide con los máximos de velocidad transversal en la cuerda"
    pedagogical_triggers:
      - error: "Olvidar el factor 1/2"
        detection: "Si resultado S_flujo es aproximadamente el doble del esperado"
        message:
          es: "Verifica si incluiste el factor 1/2 de la media temporal. La potencia instantánea oscila, su media es la mitad del máximo."
          en: "Check if you included the 1/2 factor from temporal averaging. Instantaneous power oscillates, its average is half the maximum."
      - error: "Confundir omega con f"
        detection: "Si resultado es aproximadamente 40 veces mayor (factor (2π)²)"
        message:
          es: "¿Usaste ω = 2πf? Si introdujiste f en Hz en lugar de ω en rad/s, el resultado será incorrecto por factor 4π² ≈ 39.5."
          en: "Did you use ω = 2πf? If you entered f in Hz instead of ω in rad/s, the result will be off by factor 4π² ≈ 39.5."

  - id: potencia_desde_flujo
    title:
      es: Potencia desde flujo de energía
      en: Power from energy flux
    equation: "P_onda = S_flujo * A_seccion"
    latex: "P = S \\\\, A_{\\\\perp}"
    rearrangements:
      - target: P_onda
        equation: "P_onda = S_flujo * A_seccion"
        latex: "P = S \\\\, A_{\\\\perp}"
      - target: S_flujo
        equation: "S_flujo = P_onda / A_seccion"
        latex: "S = \\\\frac{P}{A_{\\\\perp}}"
      - target: A_seccion
        equation: "A_seccion = P_onda / S_flujo"
        latex: "A_{\\\\perp} = \\\\frac{P}{S}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: La potencia total transportada por la onda es el producto del flujo de energía por el área perpendicular a la dirección de propagación.
      en: The total power transported by the wave is the product of energy flux by the area perpendicular to the propagation direction.
    constraints:
      - "S_flujo ≥ 0 (flujo no negativo)"
      - "A_seccion > 0 (área debe ser positiva)"
    validity:
      es: Válida para flujos uniformes sobre superficies planas. Para superficies curvas o flujos no uniformes, requiere integración.
      en: Valid for uniform fluxes over flat surfaces. For curved surfaces or non-uniform fluxes, integration is required.
    dimension_check: "[M T⁻³] · [L²] = [M L² T⁻³] = W ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - Cálculo de potencia total radiada
      - Diseño de receptores de energía
      - Balance energético de sistemas
    interpretation_tags:
      - potencia_total
      - flujo_integrado
      - area_perpendicular
    result_semantics:
      target: P_onda
      kind: power
      sign_meaning:
        es: La potencia es siempre no negativa.
        en: Power is always non-negative.
      absolute_value_meaning:
        es: Energía transportada por segundo a través de la sección considerada.
        en: Energy transported per second through the considered section.
    domain_checks:
      - condition: "P_onda >= 0"
        message:
          es: "La potencia debe ser no negativa"
          en: "Power must be non-negative"
    coherence_checks:
      - "Si A_seccion crece, P_onda crece proporcionalmente (mismo flujo, más área)"
      - "Si S_flujo = 0, entonces P_onda = 0 (sin flujo no hay potencia)"
    graph_implications:
      - "El área A_seccion se visualiza como la sección transversal interceptada por el flujo"
      - "La potencia se representa como una magnitud acumulativa sobre la sección"
    pedagogical_triggers:
      - error: "Usar área total en lugar de área perpendicular"
        detection: "Si resultado P_onda es menor que el esperado por factor cos(θ)"
        message:
          es: "Verifica que usaste el área perpendicular a la propagación. Si la superficie está inclinada, usa A·cos(θ)."
          en: "Verify you used the area perpendicular to propagation. If the surface is inclined, use A·cos(θ)."
`;export{e as default};
