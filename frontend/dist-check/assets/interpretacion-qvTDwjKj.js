const e=`version: 5
id: manometros-interp
leaf_id: manometros
scope: local
nombre:
  es: Análisis de Medición Manométrica
  en: Manometric Measurement Analysis

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
      es: Resumen de Presión
      en: Pressure Summary
  physical_reading:
    title:
      es: Significado Físico
      en: Physical Meaning
  coherence:
    title:
      es: Coherencia del Sistema
      en: System Coherence
  model_validity:
    title:
      es: Validez de la Medición
      en: Measurement Validity
  graph_reading:
    title:
      es: Interpretación Visual
      en: Visual Interpretation
  likely_errors:
    title:
      es: Posibles Errores
      en: Possible Errors
  next_step:
    title:
      es: Pasos Siguientes
      en: Next Steps

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [dp, rho, g, dh, p1, p2]
  formulas: [manometro, presion_relativa]

targets:
  dp:
    summary_rules:
      - id: dp-val
        when: dp != 0
        status: success
        text:
          es: "La diferencia de presión [[dp]] es de {{dp}} Pa, lo que representa el desequilibrio hidrostático compensado por la altura."
          en: "The pressure difference [[dp]] is {{dp}} Pa, representing the hydrostatic imbalance compensated by height."
    physical_reading_rules:
      - id: dp-meaning
        when: dp > 0
        status: success
        text:
          es: "Indica que la presión en la rama derecha es mayor que en la izquierda, desplazando el fluido."
          en: "Indicates that the pressure in the right branch is higher than in the left, displacing the fluid."
    coherence_rules:
      - id: dp-dh-check
        when: dp > 0 and dh > 0
        status: success
        text:
          es: "Coherente: un desnivel positivo corresponde a una diferencia de presión positiva según la ley de Pascal."
          en: "Coherent: a positive level gap corresponds to a positive pressure difference according to Pascal's law."
    model_validity_rules:
      - id: dp-fluid-static
        when: dp > 0
        status: success
        text:
          es: "Válido mientras el fluido manométrico esté en reposo absoluto."
          en: "Valid as long as the manometric fluid is at absolute rest."
    graph_rules:
      - id: dp-graph
        when: dp > 0
        status: success
        text:
          es: "Se observa como el desplazamiento vertical en el SVG y la ordenada en el gráfico Coord."
          en: "It is observed as the vertical displacement in the SVG and the ordinate in the Coord graph."
    likely_errors:
      - id: err-dp-abs
        when: dp > 10^6
        status: warning
        text:
          es: "Error conceptual: Diferencias de presión extremas podrían invalidar la hipótesis de incompresibilidad si el fluido fuera un gas."
          en: "Conceptual error: Extreme pressure differences could invalidate the incompressibility hypothesis if the fluid were a gas."
    next_step_rules:
      - id: next-dp-barometer
        when: dp > 0
        status: info
        text:
          es: "Investiga cómo un barómetro usa este mismo principio para medir la presión atmosférica absoluta."
          en: "Investigate how a barometer uses this same principle to measure absolute atmospheric pressure."

  p2:
    summary_rules:
      - id: p2-val
        when: p2 > 0
        status: success
        text:
          es: "La presión absoluta del gas [[p2]] alcanza {{p2}} Pa, integrando la referencia y el salto manométrico."
          en: "The absolute gas pressure [[p2]] reaches {{p2}} Pa, integrating the reference and the manometric jump."
    physical_reading_rules:
      - id: p2-atm
        when: p2 > 101325
        status: success
        text:
          es: "La presión del gas es superior a la presión atmosférica, lo que se traduce en una fuerza neta hacia afuera."
          en: "The gas pressure is higher than atmospheric pressure, which translates into a net outward force."
    coherence_rules:
      - id: p2-p1-check
        when: p2 > p1
        status: success
        text:
          es: "Coherente con el sentido del desnivel observado: la rama del gas empuja más que la referencia."
          en: "Coherent with the observed level gap direction: the gas branch pushes more than the reference."
    model_validity_rules:
      - id: p2-range
        when: p2 > 0
        status: success
        text:
          es: "La medición es confiable dentro del rango de escala del manómetro físico."
          en: "The measurement is reliable within the physical manometer's scale range."
    graph_rules:
      - id: p2-dcl
        when: p2 > 0
        status: success
        text:
          es: "Corresponde a la magnitud de la fuerza F_R en el diagrama de cuerpo libre (DCL)."
          en: "Corresponds to the magnitude of the force F_R in the free body diagram (FBD)."
    likely_errors:
      - id: err-p2-rel
        when: p2 < 1000
        status: warning
        text:
          es: "Error de interpretación: Confundir presión absoluta con relativa podría llevar a resultados negativos imposibles."
          en: "Interpretation error: Confusing absolute with relative pressure could lead to impossible negative results."
    next_step_rules:
      - id: next-p2-ideal-gas
        when: p2 > 0
        status: info
        text:
          es: "Usa este valor en la ecuación de gases ideales para hallar la temperatura del gas."
          en: "Use this value in the ideal gas equation to find the gas temperature."

  rho:
    summary_rules:
      - id: rho-val
        when: rho > 0
        status: success
        text:
          es: "El líquido manométrico tiene una densidad [[rho]] = {{rho}} kg/m^3, determinando la escala del instrumento."
          en: "The manometric liquid has a density [[rho]] = {{rho}} kg/m^3, determining the instrument's scale."
    physical_reading_rules:
      - id: rho-mercury
        when: rho > 13000
        status: success
        text:
          es: "Densidad del mercurio: permite medir presiones altas con instrumentos compactos."
          en: "Mercury density: allows measuring high pressures with compact instruments."
    coherence_rules:
      - id: rho-positive
        when: rho > 0
        status: success
        text:
          es: "Propiedad física consistente para un líquido incompresible."
          en: "Consistent physical property for an incompressible liquid."
    model_validity_rules:
      - id: rho-const
        when: rho > 0
        status: success
        text:
          es: "Se asume líquido homogéneo sin variaciones locales de densidad por temperatura."
          en: "Assumes homogeneous liquid without local density variations due to temperature."
    graph_rules:
      - id: rho-slope
        when: rho > 0
        status: success
        text:
          es: "Determina la sensibilidad del gráfico Coord; una mayor densidad reduce la pendiente dh/dp."
          en: "Determines the sensitivity of the Coord graph; higher density reduces the dh/dp slope."
    likely_errors:
      - id: err-rho-wrong
        when: rho < 500
        status: warning
        text:
          es: "Error de datos: Densidad físicamente implausible para un líquido de medida estándar."
          en: "Data error: Physically implausible density for a standard measurement liquid."
    next_step_rules:
      - id: next-rho-fluids
        when: rho > 0
        status: info
        text:
          es: "Explora cómo cambia el desnivel [[dh]] si sustituyes el mercurio por agua."
          en: "Explore how the level gap [[dh]] changes if you replace mercury with water."

  dh:
    summary_rules:
      - id: dh-val
        when: dh >= 0
        status: success
        text:
          es: "El desnivel observado [[dh]] es de {{dh}} m, siendo la variable geométrica clave del sistema."
          en: "The observed level gap [[dh]] is {{dh}} m, being the key geometric variable of the system."
    physical_reading_rules:
      - id: dh-meaning
        when: dh > 0.1
        status: success
        text:
          es: "Desnivel macroscópico que garantiza una lectura visual fiable y precisa."
          en: "Macroscopic level gap that guarantees a reliable and precise visual reading."
    coherence_rules:
      - id: dh-zero
        when: dh == 0
        status: info
        text:
          es: "Ausencia de desnivel: las presiones en ambas ramas son idénticas (equilibrio neutro)."
          en: "Absence of level gap: pressures in both branches are identical (neutral equilibrium)."
    model_validity_rules:
      - id: dh-capillary
        when: dh < 0.005 and dh > 0
        status: warning
        text:
          es: "Riesgo de validez: Desniveles mínimos pueden estar falseados por efectos de capilaridad."
          en: "Validity risk: Minimal level gaps may be falsified by capillarity effects."
    graph_rules:
      - id: dh-svg
        when: dh >= 0
        status: success
        text:
          es: "Representado visualmente por la asimetría de las columnas en el SVG."
          en: "Visually represented by the column asymmetry in the SVG."
    likely_errors:
      - id: err-dh-neg
        when: dh < 0
        status: error
        text:
          es: "Error geométrico: Un desnivel negativo es físicamente imposible como magnitud escalar de altura."
          en: "Geometric error: A negative level gap is physically impossible as a scalar height magnitude."
    next_step_rules:
      - id: next-dh-precision
        when: dh > 0
        status: info
        text:
          es: "Considera el uso de un manómetro inclinado para aumentar la resolución de la medida."
          en: "Consider using an inclined manometer to increase measurement resolution."
`;export{e as default};
