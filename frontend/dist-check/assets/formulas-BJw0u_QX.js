const e=`version: 5
formulas:
  - id: presion_mec
    title:
      es: "Definición Mecánica de Presión"
      en: "Mechanical Definition of Pressure"
    equation: "p = F / A"
    latex: "p = \\\\frac{F}{A}"
    rearrangements:
      - target: p
        equation: "p = F / A"
        latex: "p = \\\\frac{F}{A}"
      - target: F
        equation: "F = p * A"
        latex: "F = p \\\\cdot A"
      - target: A
        equation: "A = F / p"
        latex: "A = \\\\frac{F}{p}"
    physical_meaning:
      es: "La presión es la fuerza normal distribuida uniformemente sobre una superficie."
      en: "Pressure is the normal force distributed uniformly over a surface."
    category: "definicion"
    relation_type: "causal"
    constraints: ["F >= 0", "A > 0"]
    validity:
      es: "Válido para fuerzas perpendiculares a la superficie."
      en: "Valid for forces perpendicular to the surface."
    dimension_check: "M L⁻¹ T⁻² = (M L T⁻²) / (L²)"
    calculable: true
    motivo_no_calculable: null
    used_in: ["estatica", "dinamica_fluidos"]
    interpretation_tags: ["definicion", "distribucion"]
    result_semantics: "intensiva"
    domain_checks:
      - condition: "A < 1e-10"
        severity: "error"
        message:
          es: "El área es demasiado pequeña; el modelo de medio continuo podría fallar."
          en: "The area is too small; the continuum model might fail."
    coherence_checks:
      - condition: "p > 1e11"
        severity: "warning"
        message:
          es: "Presión extremadamente alta, comparable a presiones estelares."
          en: "Extremely high pressure, comparable to stellar pressures."
    graph_implications:
      es: "Pendiente de la recta F vs A si p es constante."
      en: "Slope of the F vs A line if p is constant."
    pedagogical_triggers: ["efecto_punta", "distribucion_carga"]

  - id: presion_abs
    title:
      es: "Presión Absoluta"
      en: "Absolute Pressure"
    equation: "p_abs = p_atm + p_man"
    latex: "p_{abs} = p_{atm} + p_{man}"
    rearrangements:
      - target: p_abs
        equation: "p_abs = p_atm + p_man"
        latex: "p_{abs} = p_{atm} + p_{man}"
      - target: p_man
        equation: "p_man = p_abs - p_atm"
        latex: "p_{man} = p_{abs} - p_{atm}"
    physical_meaning:
      es: "Relación entre la presión total y la presión atmosférica de referencia."
      en: "Relationship between total pressure and atmospheric reference pressure."
    category: "balance"
    relation_type: "identidad"
    constraints: ["p_abs >= 0"]
    validity:
      es: "Válido en cualquier fluido bajo condiciones estables."
      en: "Valid in any fluid under stable conditions."
    dimension_check: "M L⁻¹ T⁻² = M L⁻¹ T⁻² + M L⁻¹ T⁻²"
    calculable: true
    motivo_no_calculable: null
    used_in: ["hidrostatica", "manometria"]
    interpretation_tags: ["referencia", "escala"]
    result_semantics: "absoluta"
    domain_checks:
      - condition: "p_abs < 0"
        severity: "error"
        message:
          es: "La presión absoluta no puede ser negativa (violación física)."
          en: "Absolute pressure cannot be negative (physical violation)."
    coherence_checks:
      - condition: "p_man < -p_atm"
        severity: "error"
        message:
          es: "Vacío imposible: la presión manométrica no puede bajar del vacío absoluto."
          en: "Impossible vacuum: gauge pressure cannot drop below absolute vacuum."
    graph_implications:
      es: "Desplazamiento vertical (offset) respecto al origen."
      en: "Vertical displacement (offset) relative to the origin."
    pedagogical_triggers: ["vacio_parcial", "sobrepresion"]
`;export{e as default};
