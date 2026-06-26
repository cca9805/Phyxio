const e=`formulas:
  - id: velocidad_longitudinal_barra
    title:
      es: Velocidad de onda longitudinal en barra esbelta
      en: Longitudinal wave speed in a slender bar
    equation: "c_b = sqrt(E / rho)"
    latex: "c_b = \\\\sqrt{\\\\dfrac{E}{\\\\rho}}"
    variables:
      - id: v_barra
        role: target
      - id: E_young
        role: input
      - id: rho_vol
        role: input
    rearrangements:
      - target: E_young
        equation: "E = rho * c_b^2"
        latex: "E = \\\\rho\\\\,c_b^2"
      - target: rho_vol
        equation: "rho = E / c_b^2"
        latex: "\\\\rho = \\\\dfrac{E}{c_b^2}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: La velocidad de propagacion de ondas longitudinales en una barra esbelta depende exclusivamente de la rigidez elastica y la densidad del material, sin influencia de la geometria de la seccion ni de la frecuencia.
      en: The propagation speed of longitudinal waves in a slender bar depends exclusively on elastic stiffness and material density, without influence from section geometry or frequency.
    constraints:
      - "E > 0"
      - "rho > 0"
    validity:
      es: Valida para barras donde la longitud de onda es mucho mayor que las dimensiones de la seccion transversal (hipotesis de barra esbelta). No aplica a medios infinitos donde interviene el coeficiente de Poisson.
      en: Valid for bars where the wavelength is much larger than cross-section dimensions (slender bar hypothesis). Does not apply to infinite media where Poisson's ratio is involved.
    dimension_check: "[M L^-1 T^-2] / [M L^-3] = [L^2 T^-2]; sqrt -> [L T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - velocidad
      - no_dispersiva
      - material
    result_semantics:
      target: v_barra
      kind: scalar_unsigned
      sign_meaning:
        es: Siempre positiva, representa rapidez de propagacion.
        en: Always positive, represents propagation speed.
      absolute_value_meaning:
        es: "Para acero 5100 m/s, aluminio 5090 m/s. Valores superiores a 7000 m/s indican error de unidades."
        en: "For steel 5100 m/s, aluminium 5090 m/s. Values above 7000 m/s indicate unit error."
    domain_checks:
      - "v_barra > 0"
      - "v_barra < 7000"
    coherence_checks:
      - "v_barra debe ser menor que la velocidad de ondas P en el mismo material"
      - "v_barra aumenta si E aumenta o rho disminuye"
    graph_implications:
      - type: Coord
        axes:
          x: rho_vol
          y: v_barra
        description:
          es: Curva v_barra vs densidad para E fijo, mostrando la dependencia inversa con la raiz cuadrada.
          en: v_barra vs density curve for fixed E, showing inverse square-root dependence.
    pedagogical_triggers:
      - trigger: v_barra_alta
        condition: "v_barra > 6000"
        message:
          es: Velocidad inusualmente alta. Verificar que E y rho corresponden al mismo material y estan en unidades SI.
          en: Unusually high speed. Verify that E and rho correspond to the same material and are in SI units.

  - id: impedancia_barra
    title:
      es: Impedancia mecanica longitudinal de la barra
      en: Longitudinal mechanical impedance of the bar
    equation: "Z = rho * A * c_b"
    latex: "Z = \\\\rho\\\\,A\\\\,c_b"
    variables:
      - id: Z_barra
        role: target
      - id: rho_vol
        role: input
      - id: A_seccion
        role: input
      - id: v_barra
        role: input
    rearrangements:
      - target: A_seccion
        equation: "A = Z / (rho * c_b)"
        latex: "A = \\\\dfrac{Z}{\\\\rho\\\\,c_b}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: La impedancia mecanica relaciona la fuerza axial con la velocidad de particula en una onda progresiva. Determina la reflexion y transmision en discontinuidades.
      en: Mechanical impedance relates axial force to particle velocity in a progressive wave. Determines reflection and transmission at discontinuities.
    constraints:
      - "rho > 0"
      - "A > 0"
      - "c_b > 0"
    validity:
      es: Valida para ondas planas progresivas en barras de seccion uniforme.
      en: Valid for plane progressive waves in bars of uniform section.
    dimension_check: "[M L^-3] * [L^2] * [L T^-1] = [M T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - impedancia
      - reflexion
      - transmision
    result_semantics:
      target: Z_barra
      kind: scalar_unsigned
      sign_meaning:
        es: Siempre positiva en ondas progresivas.
        en: Always positive for progressive waves.
      absolute_value_meaning:
        es: "Para acero con A de 1 cm2, Z es del orden de 40 kg/s. Valores negativos indican error."
        en: "For steel with A of 1 cm2, Z is of order 40 kg/s. Negative values indicate error."
    domain_checks:
      - "Z_barra > 0"
      - "Z_barra < 1e7"
    coherence_checks:
      - "Z_barra debe ser consistente con A * sqrt(E * rho)"
      - "Z_barra aumenta si A, rho o v_barra aumentan"
    graph_implications:
      - type: Coord
        axes:
          x: A_seccion
          y: Z_barra
        description:
          es: Relacion lineal entre impedancia y area para un material dado.
          en: Linear relationship between impedance and area for a given material.
    pedagogical_triggers:
      - trigger: Z_mismatch
        condition: "Z_ratio > 3"
        message:
          es: Gran desajuste de impedancia en la union. Esperar reflexion significativa.
          en: Large impedance mismatch at junction. Expect significant reflection.

  - id: relacion_dispersion_barra
    title:
      es: Relacion de dispersion lineal en barra
      en: Linear dispersion relation in bar
    equation: "omega = c_b * k"
    latex: "\\\\omega = c_b\\\\,k"
    variables:
      - id: omega
        role: target
      - id: v_barra
        role: input
      - id: k_long
        role: input
    rearrangements:
      - target: k_long
        equation: "k = omega / c_b"
        latex: "k = \\\\dfrac{\\\\omega}{c_b}"
      - target: v_barra
        equation: "c_b = omega / k"
        latex: "c_b = \\\\dfrac{\\\\omega}{k}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: La relacion omega-k es lineal, lo que significa ausencia de dispersion. Todas las frecuencias viajan a la misma velocidad y los pulsos no se deforman.
      en: The omega-k relation is linear, meaning no dispersion. All frequencies travel at the same speed and pulses do not deform.
    constraints:
      - "c_b > 0"
      - "k >= 0"
    validity:
      es: Valida mientras la longitud de onda sea mucho mayor que las dimensiones transversales de la barra. A frecuencias muy altas aparecen correcciones dispersivas por inercia lateral (Rayleigh-Love).
      en: Valid as long as wavelength is much larger than transverse dimensions. At very high frequencies, dispersive corrections from lateral inertia appear (Rayleigh-Love).
    dimension_check: "[L T^-1] * [L^-1] = [T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - dispersion
      - lineal
      - no_dispersiva
    result_semantics:
      target: omega
      kind: scalar_unsigned
      sign_meaning:
        es: Positiva por convenio.
        en: Positive by convention.
      absolute_value_meaning:
        es: "A 1 kHz en acero, k vale aproximadamente 1.23 rad/m."
        en: "At 1 kHz in steel, k is approximately 1.23 rad/m."
    domain_checks:
      - "omega >= 0"
      - "omega/k debe coincidir con v_barra"
    coherence_checks:
      - "v_fase (omega/k) debe ser identica a v_grupo (d omega/dk)"
      - "omega aumenta linealmente con k"
    graph_implications:
      - type: Coord
        axes:
          x: k_long
          y: omega
        description:
          es: Recta que pasa por el origen con pendiente igual a v_barra.
          en: Straight line through origin with slope equal to v_barra.
    pedagogical_triggers:
      - trigger: dispersion_falsa
        condition: "abs(v_fase - v_grupo) > 0.01 * v_fase"
        message:
          es: Diferencia entre velocidad de fase y grupo detectada. El modelo de barra esbelta no predice dispersion; revisar datos.
          en: Phase-group velocity difference detected. The slender bar model predicts no dispersion; check data.

  - id: longitud_onda_longitudinal
    title:
      es: Longitud de onda longitudinal en barra
      en: Longitudinal wavelength in bar
    equation: "lambda = c_b / f"
    latex: "\\\\lambda = \\\\dfrac{c_b}{f}"
    variables:
      - id: lambda_long
        role: target
      - id: v_barra
        role: input
      - id: omega
        role: input
    rearrangements:
      - target: v_barra
        equation: "c_b = lambda * f"
        latex: "c_b = \\\\lambda\\\\,f"
    category: derived
    relation_type: definition
    physical_meaning:
      es: La longitud de onda disminuye linealmente con la frecuencia. Es la escala espacial fundamental para comparar con las dimensiones de la barra y verificar la validez del modelo.
      en: Wavelength decreases linearly with frequency. It is the fundamental spatial scale for comparison with bar dimensions to verify model validity.
    constraints:
      - "c_b > 0"
      - "f > 0"
    validity:
      es: Valida en todo el rango donde el modelo de barra esbelta se sostiene (lambda mayor que unas 6 veces la dimension transversal mayor).
      en: Valid throughout the range where the slender bar model holds (lambda greater than about 6 times the largest transverse dimension).
    dimension_check: "[L T^-1] / [T^-1] = [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - longitud_onda
      - escala
      - validez
    result_semantics:
      target: lambda_long
      kind: scalar_unsigned
      sign_meaning:
        es: Siempre positiva.
        en: Always positive.
      absolute_value_meaning:
        es: "A 1 kHz en acero, lambda vale unos 5.1 m. A 100 kHz, 5.1 cm."
        en: "At 1 kHz in steel, lambda is about 5.1 m. At 100 kHz, 5.1 cm."
    domain_checks:
      - "lambda_long > 0"
      - "lambda_long > 6 * d_transversal para validez del modelo"
    coherence_checks:
      - "lambda_long * f debe dar v_barra"
      - "lambda_long disminuye si la frecuencia aumenta"
    graph_implications:
      - type: Coord
        axes:
          x: omega
          y: lambda_long
        description:
          es: Hiperbola descendente, mostrando la relacion inversa entre frecuencia y longitud de onda.
          en: Descending hyperbola showing inverse relation between frequency and wavelength.
    pedagogical_triggers:
      - trigger: lambda_corta
        condition: "lambda_long < 6 * d_transversal"
        message:
          es: Longitud de onda comparable a la seccion. El modelo unidimensional puede no ser preciso.
          en: Wavelength comparable to section. The one-dimensional model may not be accurate.
`;export{e as default};
