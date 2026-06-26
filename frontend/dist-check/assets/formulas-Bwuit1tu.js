const e=`version: 5
topic:
  id: espectro-electromagnetico
  title:
    es: Espectro electromagnetico
    en: Electromagnetic Spectrum

formulas:
  - id: relacion_dispersion_espectral
    title: { es: Relacion entre longitud de onda y frecuencia, en: Wavelength-frequency relation }
    equation: c = lambda * f
    latex: c = \\lambda \\cdot f
    category: fundamental
    relation_type: average_relation
    physical_meaning:
      es: Ordena el espectro conectando escala espacial y ritmo temporal en el vacio.
      en: Orders the spectrum by connecting spatial scale and temporal rate in vacuum.
    constraints: [lambda > 0, f > 0, c > 0]
    validity:
      es: Valida para ondas electromagneticas en el vacio o como primera aproximacion en aire.
      en: Valid for electromagnetic waves in vacuum or as a first approximation in air.
    dimension_check: "[L T^-1] = [L] * [T^-1]"
    calculable: true
    motivo_no_calculable:
      es: Requiere dos de las tres magnitudes [[lambda]], [[f]] y [[c]].
      en: Requires two of [[lambda]], [[f]], and [[c]].
    used_in: [clasificacion_espectral]
    interpretation_tags: [dispersion, escala]
    result_semantics:
      target: f
      kind: core_physical_quantity
      sign_meaning: { es: La frecuencia es positiva y ordena la region espectral., en: Frequency is positive and orders the spectral region. }
      absolute_value_meaning: { es: Ritmo de oscilacion que distingue radio, visible, ultravioleta y rayos X., en: Oscillation rate distinguishing radio, visible, ultraviolet, and X rays. }
    domain_checks:
      - condition: "lambda > 0"
        message: { es: "La longitud de onda debe ser positiva.", en: "Wavelength must be positive." }
        severity: error
    coherence_checks:
      - condition: "f > 0"
        message: { es: "La frecuencia calculada debe ser positiva.", en: "Computed frequency must be positive." }
        severity: error
    graph_implications:
      es: "Define la curva decreciente entre [[lambda]] y [[f]] en escala logaritmica."
      en: "Defines the decreasing curve between [[lambda]] and [[f]] on a logarithmic scale."
    pedagogical_triggers: [invertir_lambda_f]
    rearrangements:
      - target: f
        equation: f = c / lambda
        latex: f = \\frac{c}{\\lambda}
      - target: lambda
        equation: lambda = c / f
        latex: \\lambda = \\frac{c}{f}
      - target: c
        equation: c = lambda * f
        latex: c = \\lambda \\cdot f
    variables: [lambda, f, c]

  - id: energia_foton
    title: { es: Energia de un foton, en: Photon energy }
    equation: E_foton = h * f
    latex: E_{foton} = h \\cdot f
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: Convierte la frecuencia de la radiacion en energia de cada foton individual.
      en: Converts radiation frequency into the energy of each individual photon.
    constraints: [h > 0, f > 0]
    validity:
      es: Valida para lectura cuantica elemental de radiacion electromagnetica.
      en: Valid for an elementary quantum reading of electromagnetic radiation.
    dimension_check: "[M L^2 T^-2] = [M L^2 T^-1] * [T^-1]"
    calculable: true
    motivo_no_calculable:
      es: Requiere frecuencia y constante de Planck.
      en: Requires frequency and Planck constant.
    used_in: [energia_por_foton]
    interpretation_tags: [energia, foton]
    result_semantics:
      target: E_foton
      kind: core_physical_quantity
      sign_meaning: { es: La energia por foton es positiva., en: Photon energy is positive. }
      absolute_value_meaning: { es: Energia de un cuanto de radiacion en la region espectral estudiada., en: Energy of one radiation quantum in the spectral region studied. }
    domain_checks:
      - condition: "h > 0"
        message: { es: "La constante de Planck debe ser positiva.", en: "Planck constant must be positive." }
        severity: error
    coherence_checks:
      - condition: "E_foton > 0"
        message: { es: "La energia fotonica debe ser positiva.", en: "Photon energy must be positive." }
        severity: error
    graph_implications:
      es: "Muestra que la energia aumenta hacia frecuencias altas."
      en: "Shows that energy increases toward high frequencies."
    pedagogical_triggers: [confundir_foton_intensidad]
    rearrangements:
      - target: E_foton
        equation: E_foton = h * f
        latex: E_{foton} = h \\cdot f
      - target: f
        equation: f = E_foton / h
        latex: f = \\frac{E_{foton}}{h}
      - target: h
        equation: h = E_foton / f
        latex: h = \\frac{E_{foton}}{f}
    variables: [E_foton, h, f]

ui:
  default_formula: relacion_dispersion_espectral
  groups:
    - title: { es: Orden espectral, en: Spectral order }
      items: [relacion_dispersion_espectral, energia_foton]
`;export{e as default};
