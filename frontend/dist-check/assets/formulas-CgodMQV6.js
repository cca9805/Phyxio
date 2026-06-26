const e=`version: 2
formulas:
  - id: fuerza_ideal_poleas
    title:
      es: fuerza ideal en un polipasto
      en: ideal force in a pulley block
    equation: F = W / nSel
    latex: 'F = \\frac{W}{n}'
    rearrangements:
      - target: F
        equation: F = W / nSel
        latex: 'F = \\frac{W}{n}'
      - target: W
        equation: W = F * nSel
        latex: 'W = F \\cdot n'
      - target: nSel
        equation: nSel = W / F
        latex: 'n = \\frac{W}{F}'
    category: static
    relation_type: physical_law
    physical_meaning:
      es: En un sistema ideal, la carga se reparte entre los tramos activos y la fuerza requerida disminuye en la misma proporción.
      en: In an ideal system, the load is shared by the active segments and the required force decreases by the same factor.
    constraints:
      es: nSel > 0, tensión igual en todos los tramos, cuerda sin masa y poleas sin rozamiento apreciable.
      en: nSel > 0, equal tension in all segments, massless rope and negligible pulley friction.
    dimension_check: '[MLT^-2] = [MLT^-2] / [1]'
    calculable: true
    motivo_no_calculable: No aplica.
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    validity:
      es: Válida para un polipasto ideal con tramos activos bien identificados y sin pérdidas apreciables.
      en: Valid for an ideal pulley block with correctly identified active segments and negligible losses.
    validity_es_en:
      es: Modelo ideal sin rozamiento significativo y con tensión uniforme.
      en: Ideal model without significant friction and with uniform tension.
    interpretation_tags:
      - ventaja_mecanica
      - reparto_de_carga
      - poleas
      - esfuerzo
    result_semantics:
      es: El resultado expresa la fuerza que debe ejercer el operador en el extremo libre de la cuerda.
      en: The result expresses the force that the operator must exert at the free end of the rope.
    domain_checks:
      es:
        - Si nSel vale 1, la fuerza coincide con el peso.
        - Si nSel aumenta, la fuerza ideal disminuye.
        - La fuerza no debe superar al peso en el modelo ideal con nSel mayor o igual que 1.
      en:
        - If nSel equals 1, the force matches the weight.
        - If nSel increases, the ideal force decreases.
        - The force should not exceed the weight in the ideal model with nSel greater than or equal to 1.
    coherence_checks:
      es:
        - W debe estar en newton.
        - nSel debe ser adimensional y positivo.
        - F debe quedar también en newton.
      en:
        - W must be in newtons.
        - nSel must be dimensionless and positive.
        - F must also be in newtons.
    graph_implications:
      es:
        - La relación entre F y nSel es inversa.
        - La representación muestra descenso de F al aumentar nSel.
      en:
        - The relation between F and nSel is inverse.
        - The representation shows a decrease of F as nSel increases.
    pedagogical_triggers:
      es:
        - Pedir al alumno que cuente solo los tramos que sostienen la carga.
        - Comparar explícitamente fuerza aplicada y peso.
      en:
        - Ask the student to count only the segments that support the load.
        - Explicitly compare applied force and weight.

  - id: traccion_cable_poleas
    target: dx_pull
    title:
      es: relación entre desplazamiento de carga y cuerda
      en: relation between load displacement and pulled rope
    equation: dx_pull = nSel * dx_load
    latex: 'dx_{pull} = n \\cdot dx_{load} % dx_load'
    rearrangements:
      - target: dx_pull
        equation: dx_pull = nSel * dx_load
        latex: 'dx_{pull} = n \\cdot dx_{load}'
      - target: dx_load
        equation: dx_load = dx_pull / nSel
        latex: 'dx_{load} = \\frac{dx_{pull}}{n}'
      - target: nSel
        equation: nSel = dx_pull / dx_load
        latex: 'n = \\frac{dx_{pull}}{dx_{load}}'
    category: kinematics
    relation_type: geometric_relation
    physical_meaning:
      es: Reducir la fuerza exige tirar más cuerda; el aumento de tramos multiplica el recorrido que debe aportar el operador.
      en: Reducing the force requires pulling more rope; increasing the number of segments multiplies the travel that the operator must provide.
    constraints:
      es: nSel > 0, cuerda inextensible y montaje compatible con el modelo ideal.
      en: nSel > 0, inextensible rope and assembly compatible with the ideal model.
    dimension_check: '[L] = [1] * [L]'
    calculable: true
    motivo_no_calculable: No aplica.
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    validity:
      es: Válida cuando la cuerda no se estira de forma apreciable y el recuento de tramos activos es correcto.
      en: Valid when the rope does not stretch appreciably and the count of active segments is correct.
    validity_es_en:
      es: Relación geométrica ideal con cuerda inextensible.
      en: Ideal geometric relation with an inextensible rope.
    interpretation_tags:
      - recorrido
      - restriccion_geometrica
      - poleas
      - energia
    result_semantics:
      es: El resultado expresa cuánta cuerda debe recoger el operador para lograr un ascenso dado de la carga.
      en: The result expresses how much rope the operator must pull to obtain a given rise of the load.
    domain_checks:
      es:
        - Si nSel vale 1, dx_pull coincide con dx_load.
        - Si nSel aumenta, dx_pull aumenta para un mismo dx_load.
        - En montajes ideales relevantes, dx_pull no debe ser menor que dx_load.
      en:
        - If nSel equals 1, dx_pull matches dx_load.
        - If nSel increases, dx_pull increases for the same dx_load.
        - In relevant ideal setups, dx_pull should not be smaller than dx_load.
    coherence_checks:
      es:
        - dx_load y dx_pull deben expresarse en la misma unidad de longitud.
        - nSel debe ser positivo y adimensional.
        - El resultado debe quedar en metros u otra unidad coherente de longitud.
      en:
        - dx_load and dx_pull must be expressed in the same unit of length.
        - nSel must be positive and dimensionless.
        - The result must be in meters or another coherent length unit.
    graph_implications:
      es:
        - La relación entre dx_pull y dx_load es lineal.
        - La pendiente de la recta coincide con nSel.
      en:
        - The relation between dx_pull and dx_load is linear.
        - The slope of the line is equal to nSel.
    pedagogical_triggers:
      es:
        - Conectar el resultado con el trabajo mecánico.
        - Preguntar qué se gana y qué se paga al aumentar nSel.
      en:
        - Connect the result with mechanical work.
        - Ask what is gained and what is paid when nSel increases.
`;export{e as default};
