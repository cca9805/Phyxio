const e=`ui:
  default_formula: capacitancia_dielectrico

formulas:

  - id: capacitancia_dielectrico
    title:
      es: Capacitancia con dieléctrico
      en: Capacitance with dielectric
    equation: "C_d = epsilon_r * C_0"
    latex: "C_d = \\\\varepsilon_r \\\\, C_0"
    rearrangements:
      - target: epsilon_r
        equation: "epsilon_r = C_d / C_0"
        latex: "\\\\varepsilon_r = \\\\frac{C_d}{C_0}"
      - target: C_0
        equation: "C_0 = C_d / epsilon_r"
        latex: "C_0 = \\\\frac{C_d}{\\\\varepsilon_r}"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: >
        Al introducir un dieléctrico de constante epsilon_r entre las placas, la capacitancia aumenta en ese mismo factor. El material polarizado reduce el campo interior, lo que permite acumular más carga a la misma tensión.
      en: >
        Inserting a dielectric of constant epsilon_r between the plates increases the capacitance by that same factor. The polarised material reduces the internal field, allowing more charge to be stored at the same voltage.
    constraints:
      - Dieléctrico lineal, homogéneo e isótropo (LHI)
      - Campo aplicado muy por debajo de la tensión de ruptura
      - Dieléctrico rellena completamente el espacio entre placas
    validity:
      es: Válida en el régimen lineal (epsilon_r constante), alejado de la saturación de la polarización y de la tensión de ruptura dieléctrica.
      en: Valid in the linear regime (constant epsilon_r), well below polarisation saturation and dielectric breakdown voltage.
    dimension_check: "[F] = [adimensional] * [F] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - diseño de condensadores reales
      - selección de material dieléctrico
    interpretation_tags:
      - capacitancia amplificada
      - factor de mejora por dieléctrico
      - comparación vacío vs material
    result_semantics:
      target: C_d
      kind: output_quantity
      sign_meaning:
        es: Siempre positivo; un valor negativo indicaría error de cálculo o datos de entrada incorrectos.
        en: Always positive; a negative value would indicate a calculation error or incorrect input data.
      absolute_value_meaning:
        es: Cuanto mayor es C_d, más carga almacena el condensador a la misma tensión, lo que indica un dieléctrico más efectivo (mayor epsilon_r) o mejor geometría.
        en: The larger C_d, the more charge the capacitor stores at the same voltage, indicating a more effective dielectric (larger epsilon_r) or better geometry.
    domain_checks:
      - condition: "epsilon_r >= 1"
        message:
          es: epsilon_r debe ser mayor o igual a 1. Valores menores que 1 son físicamente imposibles para materiales pasivos.
          en: epsilon_r must be greater than or equal to 1. Values below 1 are physically impossible for passive materials.
      - condition: "C_0 > 0"
        message:
          es: C_0 debe ser positivo. Un condensador vacío no puede tener capacitancia nula o negativa.
          en: C_0 must be positive. A vacuum capacitor cannot have zero or negative capacitance.
    coherence_checks:
      - condition: "C_d >= C_0"
        message:
          es: C_d debe ser mayor o igual a C_0. Si C_d < C_0, el material estaría reduciendo la capacitancia, lo que contradice la definición de dieléctrico lineal.
          en: C_d must be greater than or equal to C_0. If C_d < C_0, the material would be reducing the capacitance, contradicting the definition of a linear dielectric.
    graph_implications:
      - El gráfico C_d frente a epsilon_r es una recta de pendiente C_0 y ordenada en el origen cero.
      - Para epsilon_r fijo, C_d aumenta linealmente con C_0 (área/separación del condensador).
    pedagogical_triggers:
      - trigger: "epsilon_r = 1"
        message:
          es: "Con epsilon_r igual a 1 el material es vacío o aire: no hay amplificación de capacitancia."
          en: "With epsilon_r equal to 1 the material is vacuum or air — no capacitance amplification."
      - trigger: "epsilon_r >> 1"
        message:
          es: "Valores muy altos (titanato de bario, aprox. 10 000) permiten condensadores muy compactos con alta C_d."
          en: "Very high values (barium titanate, approx. 10 000) enable very compact capacitors with high C_d."

  - id: campo_en_dielectrico
    title:
      es: Campo eléctrico reducido en el dieléctrico
      en: Reduced electric field inside the dielectric
    equation: "E_d = E_ext / epsilon_r"
    latex: "E_d = \\\\frac{E_{\\\\text{ext}}}{\\\\varepsilon_r}  % E_d epsilon_r"
    rearrangements:
      - target: epsilon_r
        equation: "epsilon_r = E_ext / E_d"
        latex: "\\\\varepsilon_r = \\\\frac{E_{\\\\text{ext}}}{E_d}"
      - target: E_d
        equation: "E_d = E_ext / epsilon_r"
        latex: "E_d = \\\\frac{E_{\\\\text{ext}}}{\\\\varepsilon_r}"
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: >
        La polarización del material crea un campo opuesto al externo que reduce el campo resultante en un factor epsilon_r. A mayor constante dieléctrica, mayor apantallamiento del campo original.
      en: >
        The polarisation of the material creates a field opposing the external one, reducing the resultant field by a factor epsilon_r. The larger the dielectric constant, the stronger the shielding of the original field.
    constraints:
      - Dieléctrico lineal, homogéneo e isótropo
      - Campo externo uniforme (condensador plano ideal)
      - Sin cargas libres dentro del dieléctrico
    validity:
      es: Válida para dieléctricos lineales en geometría de condensador plano con campo externo uniforme.
      en: Valid for linear dielectrics in a parallel-plate capacitor geometry with uniform external field.
    dimension_check: "[V/m] = [V/m] / [adimensional] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - análisis de ruptura dieléctrica
      - diseño de aislantes eléctricos
    interpretation_tags:
      - apantallamiento de campo
      - reducción por polarización
    result_semantics:
      target: E_d
      kind: output_quantity
      sign_meaning:
        es: El signo sigue la dirección del campo externo; negativo si el campo externo se toma negativo por convención.
        en: The sign follows the direction of the external field; negative if the external field is taken as negative by convention.
      absolute_value_meaning:
        es: Cuanto menor es |E_d| respecto al campo externo, mayor es el apantallamiento. Si |E_d| se acerca a la tensión de ruptura del material, el dieléctrico falla.
        en: The smaller |E_d| compared to the external field, the greater the shielding. If |E_d| approaches the breakdown field of the material, the dielectric fails.
    domain_checks:
      - condition: "epsilon_r >= 1"
        message:
          es: epsilon_r debe ser al menos 1. Valores menores indicarían un material que amplifica el campo, físicamente imposible en pasivos.
          en: epsilon_r must be at least 1. Lower values would indicate a material that amplifies the field, physically impossible in passive materials.
    coherence_checks:
      - condition: "abs(E_d) <= abs(E_ext)"
        message:
          es: El campo en el dieléctrico no puede superar el campo externo aplicado. Un valor mayor indica error.
          en: The field inside the dielectric cannot exceed the applied external field. A larger value indicates an error.
    graph_implications:
      - E_d frente a epsilon_r es una hipérbola decreciente a campo externo fijo.
    pedagogical_triggers:
      - trigger: "epsilon_r = 1"
        message:
          es: Sin dieléctrico (vacío), el campo interior es igual al externo. No hay reducción.
          en: Without dielectric (vacuum), the interior field equals the external field. No reduction.

  - id: polarizacion_dielectrico
    title:
      es: Polarización eléctrica del dieléctrico
      en: Electric polarisation of the dielectric
    equation: "P_pol = epsilon_0 * (epsilon_r - 1) * E_d"
    latex: "P_{pol} = \\\\varepsilon_0 (\\\\varepsilon_r - 1) E_d"
    rearrangements:
      - target: epsilon_r
        equation: "epsilon_r = 1 + P_pol / (epsilon_0 * E_d)"
        latex: "\\\\varepsilon_r = 1 + \\\\frac{P_{pol}}{\\\\varepsilon_0 E_d}"
      - target: E_d
        equation: "E_d = P_pol / (epsilon_0 * (epsilon_r - 1))"
        latex: "E_d = \\\\frac{P_{pol}}{\\\\varepsilon_0 (\\\\varepsilon_r - 1)}"
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: >
        La polarización P_pol cuantifica el momento dipolar por unidad de volumen inducido por el campo E_d. Es proporcional al campo interior y al factor de susceptibilidad eléctrica (epsilon_r - 1).
      en: >
        The polarisation P_pol quantifies the dipole moment per unit volume induced by the field E_d. It is proportional to the interior field and to the electric susceptibility factor (epsilon_r - 1).
    constraints:
      - Dieléctrico lineal (susceptibilidad constante)
      - Campo uniforme en el interior del material
    validity:
      es: Válida para dieléctricos lineales isótropos a campo moderado, por debajo de la saturación.
      en: Valid for linear isotropic dielectrics at moderate field, below saturation.
    dimension_check: "[C/m²] = [F/m][V/m] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - interpretación del apantallamiento de campo
      - conexión microscópica-macroscópica del dieléctrico
    interpretation_tags:
      - polarización volumétrica
      - susceptibilidad eléctrica
    result_semantics:
      target: P_pol
      kind: output_quantity
      sign_meaning:
        es: "P_pol sigue la dirección del campo externo: positiva cuando los dipolos se alinean con el campo."
        en: "P_pol follows the direction of the external field: positive when dipoles align with the field."
      absolute_value_meaning:
        es: "Cuanto mayor es |P_pol|, mayor es la densidad de carga superficial ligada que se opone al campo externo."
        en: "The larger |P_pol|, the greater the bound surface charge density opposing the external field."
    domain_checks:
      - condition: "epsilon_r >= 1"
        message:
          es: "(epsilon_r - 1) debe ser no negativo. Si epsilon_r < 1, la polarización tendría signo contrario al campo, físicamente imposible en pasivos."
          en: "(epsilon_r - 1) must be non-negative. If epsilon_r < 1, the polarisation would oppose the field direction, physically impossible in passive materials."
    coherence_checks:
      - condition: "P_pol >= 0 when E_d >= 0"
        message:
          es: La polarización debe tener el mismo signo que el campo inductor en materiales pasivos lineales.
          en: Polarisation must have the same sign as the inducing field in linear passive materials.
    graph_implications:
      - P_pol frente a E_d es una recta de pendiente epsilon_0*(epsilon_r-1) para un material dado.
    pedagogical_triggers:
      - trigger: "epsilon_r = 1"
        message:
          es: "Con epsilon_r igual a 1 (vacío): P_pol es cero, no hay polarización macroscópica."
          en: "With epsilon_r equal to 1 (vacuum): P_pol is zero, there is no macroscopic polarisation."
`;export{e as default};
