const n=`version: 1\r
formulas:\r
- id: aro-fino\r
  title:\r
    es: Aro Fino o Cilindro Hueco de pared delgada\r
    en: Thin Ring or Thin-walled Hollow Cylinder\r
  equation: I = m * R^2\r
  latex: I = m R^2\r
  rearrangements:\r
  - target: I\r
    equation: I = m * R^2\r
    latex: I = mR^2\r
  - target: m\r
    equation: m = I / R^2\r
    latex: m = \\frac{I}{R^2}\r
  - target: R\r
    equation: R = sqrt(I / m)\r
    latex: R = \\sqrt{\\frac{I}{m}}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Toda la masa se encuentra concentrada a la misma distancia R del eje de giro.\r
    en: All mass is concentrated at the same distance R from the rotation axis.\r
  constraints:\r
    es: Masa distribuida uniformemente en la periferia.\r
    en: Mass uniformly distributed on the periphery.\r
  validity:\r
    es: Geometrías anulares y cilindros muy delgados.\r
    en: Ring geometries and very thin cylinders.\r
  dimension_check: '[M L^2] = [M] * [L^2]'\r
  calculable: true\r
  motivo_no_calculable: No aplica. Formula calculable con datos suficientes.\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  interpretation_tags:\r
  - aro-fino\r
  - rotational_dynamics\r
  result_semantics:\r
    target: m\r
    kind: scalar\r
    sign_meaning:\r
      es: El signo depende de la convencion de ejes adoptada.\r
      en: Sign depends on the adopted axis convention.\r
    absolute_value_meaning:\r
      es: El modulo expresa la intensidad del efecto rotacional.\r
      en: Magnitude expresses rotational effect intensity.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
- id: disco-macizo\r
  title:\r
    es: Disco Macizo o Cilindro Sólido\r
    en: Solid Disk or Solid Cylinder\r
  equation: I = 0.5 * m * R^2\r
  latex: I = \\frac{1}{2} m R^2\r
  rearrangements:\r
  - target: I\r
    equation: I = 0.5 * m * R^2\r
    latex: I = \\frac{1}{2}mR^2\r
  - target: m\r
    equation: m = 2 * I / R^2\r
    latex: m = \\frac{2I}{R^2}\r
  - target: R\r
    equation: R = sqrt(2 * I / m)\r
    latex: R = \\sqrt{\\frac{2I}{m}}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: La masa se distribuye uniformemente desde el eje hasta el radio R.\r
    en: Mass is uniformly distributed from the axis up to radius R.\r
  constraints:\r
    es: Objeto homogéneo, eje de simetría central.\r
    en: Homogeneous object, central symmetry axis.\r
  validity:\r
    es: Ruedas solidas, poleas, cilindros de máquinas.\r
    en: Solid wheels, pulleys, machine cylinders.\r
  dimension_check: '[M L^2] = [M] * [L^2]'\r
  calculable: true\r
  motivo_no_calculable: No aplica. Formula calculable con datos suficientes.\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  interpretation_tags:\r
  - disco-macizo\r
  - rotational_dynamics\r
  result_semantics:\r
    target: I\r
    kind: scalar\r
    sign_meaning:\r
      es: El signo depende de la convencion de ejes adoptada.\r
      en: Sign depends on the adopted axis convention.\r
    absolute_value_meaning:\r
      es: El modulo expresa la intensidad del efecto rotacional.\r
      en: Magnitude expresses rotational effect intensity.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
- id: barra-centro\r
  title:\r
    es: Barra Delgada (Eje por el centro)\r
    en: Thin Rod (Axis through center)\r
  equation: I = (1/12) * m * L^2\r
  latex: I = \\frac{1}{12} m L^2\r
  rearrangements:\r
  - target: I\r
    equation: I = (1/12) * m * L^2\r
    latex: I = \\frac{1}{12}mL^2\r
  - target: m\r
    equation: m = 12 * I / L^2\r
    latex: m = \\frac{12I}{L^2}\r
  - target: L\r
    equation: L = sqrt(12 * I / m)\r
    latex: L = \\sqrt{\\frac{12I}{m}}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Resistencia a la rotación de una varilla cuando gira sobre su punto medio.\r
    en: Rotational resistance of a rod when spinning about its midpoint.\r
  constraints:\r
    es: Varilla muy delgada comparada con su longitud.\r
    en: Very thin rod compared to its length.\r
  validity:\r
    es: Estructuras lineales, palancas centradas.\r
    en: Linear structures, centered levers.\r
  dimension_check: '[M L^2] = [M] * [L^2]'\r
  calculable: true\r
  motivo_no_calculable: No aplica. Formula calculable con datos suficientes.\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  interpretation_tags:\r
  - barra-centro\r
  - rotational_dynamics\r
  result_semantics:\r
    target: m\r
    kind: scalar\r
    sign_meaning:\r
      es: El signo depende de la convencion de ejes adoptada.\r
      en: Sign depends on the adopted axis convention.\r
    absolute_value_meaning:\r
      es: El modulo expresa la intensidad del efecto rotacional.\r
      en: Magnitude expresses rotational effect intensity.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
- id: barra-extremo\r
  title:\r
    es: Barra Delgada (Eje por un extremo)\r
    en: Thin Rod (Axis through one end)\r
  equation: I = (1/3) * m * L^2\r
  latex: I = \\frac{1}{3} m L^2\r
  rearrangements:\r
  - target: I\r
    equation: I = (1/3) * m * L^2\r
    latex: I = \\frac{1}{3}mL^2\r
  - target: m\r
    equation: m = 3 * I / L^2\r
    latex: m = \\frac{3I}{L^2}\r
  - target: L\r
    equation: L = sqrt(3 * I / m)\r
    latex: L = \\sqrt{\\frac{3I}{m}}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: La inercia aumenta significativamente al alejar el eje del centro de masas.\r
    en: Inertia increases significantly by moving the axis away from the center of\r
      mass.\r
  constraints:\r
    es: Varilla delgada, eje perpendicular.\r
    en: Thin rod, perpendicular axis.\r
  validity:\r
    es: Péndulos físicos, bates de béisbol, hélices.\r
    en: Physical pendulums, baseball bats, propellers.\r
  dimension_check: '[M L^2] = [M] * [L^2]'\r
  calculable: true\r
  motivo_no_calculable: No aplica. Formula calculable con datos suficientes.\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  interpretation_tags:\r
  - barra-extremo\r
  - rotational_dynamics\r
  result_semantics:\r
    target: m\r
    kind: scalar\r
    sign_meaning:\r
      es: El signo depende de la convencion de ejes adoptada.\r
      en: Sign depends on the adopted axis convention.\r
    absolute_value_meaning:\r
      es: El modulo expresa la intensidad del efecto rotacional.\r
      en: Magnitude expresses rotational effect intensity.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
- id: esfera-maciza\r
  title:\r
    es: Esfera Maciza Homogénea\r
    en: Homogeneous Solid Sphere\r
  equation: I = 0.4 * m * R^2\r
  latex: I = \\frac{2}{5} m R^2\r
  rearrangements:\r
  - target: I\r
    equation: I = 0.4 * m * R^2\r
    latex: I = \\frac{2}{5}mR^2\r
  - target: m\r
    equation: m = 2.5 * I / R^2\r
    latex: m = \\frac{5I}{2R^2}\r
  - target: R\r
    equation: R = sqrt(2.5 * I / m)\r
    latex: R = \\sqrt{\\frac{5I}{2m}}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: Geometría más eficiente para concentrar masa cerca del eje en 3D.\r
    en: Most efficient geometry to concentrate mass near the axis in 3D.\r
  constraints:\r
    es: Esfera perfecta de densidad uniforme.\r
    en: Perfect sphere of uniform density.\r
  validity:\r
    es: Planetas, rodantes esféricos, canicas.\r
    en: Planets, spherical rollers, marbles.\r
  dimension_check: '[M L^2] = [M] * [L^2]'\r
  calculable: true\r
  motivo_no_calculable: No aplica. Formula calculable con datos suficientes.\r
  used_in:\r
  - teoria.md\r
  - ejemplos.md\r
  interpretation_tags:\r
  - esfera-maciza\r
  - rotational_dynamics\r
  result_semantics:\r
    target: m\r
    kind: scalar\r
    sign_meaning:\r
      es: El signo depende de la convencion de ejes adoptada.\r
      en: Sign depends on the adopted axis convention.\r
    absolute_value_meaning:\r
      es: El modulo expresa la intensidad del efecto rotacional.\r
      en: Magnitude expresses rotational effect intensity.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
- id: placa-rectangular\r
  title:\r
    es: Placa Rectangular Delgada (Eje por el centro)\r
    en: Thin Rectangular Plate (Axis through center)\r
  equation: I = (1/12) * m * (a^2 + b^2)\r
  latex: I = \\frac{1}{12}m(a^2 + b^2)\r
  rearrangements:\r
  - target: I\r
    equation: I = (1/12) * m * (a^2 + b^2)\r
    latex: I = \\frac{1}{12}m(a^2 + b^2)\r
  - target: m\r
    equation: m = 12 * I / (a^2 + b^2)\r
    latex: m = \\frac{12I}{a^2 + b^2}\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: La inercia depende de ambas dimensiones en el plano perpendicular al eje.\r
    en: Inertia depends on both dimensions in the plane perpendicular to the axis.\r
  constraints:\r
    es: Placa delgada girando perpendicular a su plano.\r
    en: Thin plate rotating perpendicular to its plane.\r
  validity:\r
    es: Paneles solares, puertas, aspas de ventilador.\r
    en: Solar panels, doors, fan blades.\r
  dimension_check: '[M L^2] = [M] * [L^2]'\r
  calculable: true\r
  motivo_no_calculable: No aplica. Formula calculable con datos suficientes.\r
  used_in:\r
  - teoria.md\r
  interpretation_tags:\r
  - placa-rectangular\r
  - rotational_dynamics\r
  result_semantics:\r
    target: m\r
    kind: scalar\r
    sign_meaning:\r
      es: El signo depende de la convencion de ejes adoptada.\r
      en: Sign depends on the adopted axis convention.\r
    absolute_value_meaning:\r
      es: El modulo expresa la intensidad del efecto rotacional.\r
      en: Magnitude expresses rotational effect intensity.\r
  domain_checks:\r
  - condition: input_values_within_valid_range\r
    message:\r
      es: Verificar que los datos de entrada esten dentro del dominio fisico de la\r
        formula.\r
      en: Check that input values are inside the formula physical domain.\r
  coherence_checks:\r
  - check: result_consistent_with_units_and_signs\r
    warning:\r
      es: Revisar signos y unidades si el resultado contradice la lectura fisica esperada.\r
      en: Review signs and units if result contradicts expected physical reading.\r
  graph_implications:\r
  - if: graph_available\r
    then:\r
      es: Representar la tendencia del resultado en el grafico asociado para lectura\r
        cualitativa.\r
      en: Represent result trend in associated graph for qualitative reading.\r
  pedagogical_triggers:\r
  - condition: common_sign_or_units_error\r
    hint:\r
      es: Comprobar unidades SI y coherencia de signo antes de interpretar el valor\r
        final.\r
      en: Check SI units and sign consistency before interpreting final value.\r
`;export{n as default};
