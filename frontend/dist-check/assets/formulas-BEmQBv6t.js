const e=`version: 1\r
formulas:\r
- id: composicion_aceleracion_galileana\r
  title:\r
    es: Composición Galileana de Aceleraciones\r
    en: Galilean Acceleration Composition\r
  equation: a_rel = a_A - a_B\r
  latex: \\vec{a}_{A/B}(t) = \\vec{a}_A(t) - \\vec{a}_B(t)\r
  rearrangements:\r
  - target: a_rel\r
    latex: \\vec{a}_{A/B}(t) = \\vec{a}_A(t) - \\vec{a}_B(t)\r
    equation: a_rel = a_A - a_B\r
    constraints: []\r
  - target: a_A\r
    latex: \\vec{a}_A = \\vec{a}_{A/B} + \\vec{a}_B\r
    equation: a_A = a_rel + a_B\r
    constraints: []\r
  - target: a_B\r
    latex: \\vec{a}_B = \\vec{a}_A - \\vec{a}_{A/B}\r
    equation: a_B = a_A - a_rel\r
    constraints: []\r
  category: fundamental\r
  relation_type: kinematic_transformation\r
  physical_meaning:\r
    es: Establece que la aceleración relativa entre dos objetos (o sistemas) es la\r
      diferencia vectorial de sus aceleraciones medidas desde un sistema inercial.\r
    en: Establishes that the relative acceleration between two objects (or systems)\r
      is the vector difference of their accelerations measured from an inertial frame.\r
  constraints:\r
  - es: Mecánica clásica (v << c)\r
    en: Classical mechanics (v << c)\r
  - es: Sistemas en traslación (sin rotación)\r
    en: Systems in translation (no rotation)\r
  validity:\r
    es: Válido para cualquier par de sistemas de referencia en movimiento relativo\r
      de traslación. No aplica si hay rotación relativa.\r
    en: Valid for any pair of reference frames in relative translational motion. Does\r
      not apply if there is relative rotation.\r
  dimension_check: '[L T^{-2}] = [L T^{-2}] - [L T^{-2}]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - es: Transformación de aceleraciones entre sistemas\r
    en: Transformation of accelerations between systems\r
  - es: Análisis de sistemas no inerciales\r
    en: Analysis of non-inertial systems\r
  - es: Cálculo de fuerzas ficticias\r
    en: Calculation of fictitious forces\r
  interpretation_tags:\r
  - kinematic_composition\r
  - reference_frame_transformation\r
  - relative_motion\r
  result_semantics:\r
    target: a_rel\r
    meaning: Resulta util para interpretar a_rel en el contexto del leaf.\r
  domain_checks:\r
  - condition: abs(a_A) < 0.1*c\r
    message:\r
      es: 'Advertencia: aceleración de A cercana a límites relativistas. Modelo clásico\r
        puede no ser válido.'\r
      en: 'Warning: acceleration of A near relativistic limits. Classical model may\r
        not be valid.'\r
  - condition: abs(a_B) < 0.1*c\r
    message:\r
      es: 'Advertencia: aceleración de B cercana a límites relativistas. Modelo clásico\r
        puede no ser válido.'\r
      en: 'Warning: acceleration of B near relativistic limits. Classical model may\r
        not be valid.'\r
  coherence_checks:\r
  - check: if a_B == 0 then a_rel == a_A\r
    message:\r
      es: Si el sistema B es inercial (a_B=0), la aceleración relativa debe coincidir\r
        con la de A.\r
      en: If system B is inertial (a_B=0), relative acceleration must match that of\r
        A.\r
  - check: units(a_rel) == units(a_A) == units(a_B)\r
    message:\r
      es: Todas las aceleraciones deben estar en las mismas unidades.\r
      en: All accelerations must be in the same units.\r
  graph_implications:\r
  - if: a_rel > 0\r
    then:\r
      es: Flecha de aceleración relativa apunta en dirección positiva del eje.\r
      en: Relative acceleration arrow points in positive axis direction.\r
  - if: a_rel == 0\r
    then:\r
      es: Ambos objetos aceleran idénticamente. Velocidad relativa constante.\r
      en: Both objects accelerate identically. Constant relative velocity.\r
  - if: a_rel < 0\r
    then:\r
      es: Aceleración relativa apunta en dirección negativa. A desacelera respecto\r
        a B.\r
      en: Relative acceleration points in negative direction. A decelerates relative\r
        to B.\r
  pedagogical_triggers:\r
  - condition: abs(a_rel) > abs(a_A) and abs(a_rel) > abs(a_B)\r
    warning:\r
      es: La aceleración relativa puede ser mayor que las individuales si ambas tienen\r
        sentidos opuestos.\r
      en: Relative acceleration can be greater than individual ones if both have opposite\r
        directions.\r
  - condition: a_rel == 0 and (a_A != 0 or a_B != 0)\r
    hint:\r
      es: Si a_rel=0 pero a_A≠0 o a_B≠0, significa que ambos aceleran igual. Están\r
        en movimiento relativo uniforme.\r
      en: If a_rel=0 but a_A≠0 or a_B≠0, it means both accelerate equally. They are\r
        in uniform relative motion.\r
- id: invarianza_aceleracion_inercial\r
  title:\r
    es: Invarianza de Aceleración en Sistemas Inerciales\r
    en: Invariance of Acceleration in Inertial Frames\r
  equation: a_rel = a_A\r
  latex: \\vec{a}_{A/B} = \\vec{a}_A\r
  rearrangements: []\r
  category: auxiliary\r
  relation_type: physical_law\r
  physical_meaning:\r
    es: Si el sistema B se mueve con velocidad constante respecto al sistema inercial\r
      (a_B=0), ambos observadores miden la misma aceleración para el objeto A.\r
    en: If system B moves with constant velocity relative to the inertial system (a_B=0),\r
      both observers measure the same acceleration for object A.\r
  constraints:\r
  - es: a_B = 0 (sistema B inercial)\r
    en: a_B = 0 (system B inertial)\r
  - es: Sin rotación relativa\r
    en: No relative rotation\r
  validity:\r
    es: Base del Principio de Relatividad de Galileo. Válido en mecánica clásica para\r
      transformaciones entre sistemas inerciales.\r
    en: Basis of Galileo's Principle of Relativity. Valid in classical mechanics for\r
      transformations between inertial systems.\r
  dimension_check: '[L T^{-2}] = [L T^{-2}]'\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una identidad de invarianza válida solo bajo la condición a_B = 0; no aporta\r
      un cálculo independiente sin esa hipótesis del marco.\r
    en: It is an invariance identity valid only under the condition a_B = 0; it does\r
      not provide an independent computation without that frame hypothesis.\r
  used_in:\r
  - es: Demostración de que las leyes de Newton tienen la misma forma en todos los\r
      sistemas inerciales\r
    en: Demonstration that Newton's laws have the same form in all inertial systems\r
  interpretation_tags:\r
  - galilean_relativity\r
  - inertial_invariance\r
  - physical_law\r
  result_semantics:\r
    target: a_rel\r
    meaning: Resulta util para interpretar a_rel en el contexto del leaf.\r
  domain_checks:\r
  - condition: a_B == 0\r
    message:\r
      es: Esta relación solo es válida si el sistema B es estrictamente inercial (a_B=0).\r
      en: This relation is only valid if system B is strictly inertial (a_B=0).\r
  coherence_checks:\r
  - check: if a_B != 0 then error\r
    message:\r
      es: Si a_B ≠ 0, esta fórmula no aplica. Usa la fórmula general de composición\r
        galileana.\r
      en: If a_B ≠ 0, this formula does not apply. Use the general Galilean composition\r
        formula.\r
  graph_implications:\r
  - if: a_B == 0\r
    then:\r
      es: Los vectores de aceleración de A medidos desde ambos sistemas se superponen\r
        completamente.\r
      en: The acceleration vectors of A measured from both systems overlap completely.\r
  pedagogical_triggers:\r
  - condition: a_B != 0\r
    error:\r
      es: 'ERROR: Intentas usar invarianza de aceleración pero el sistema B no es\r
        inercial. La aceleración NO es invariante si el observador acelera.'\r
      en: 'ERROR: You''re trying to use acceleration invariance but system B is not\r
        inertial. Acceleration is NOT invariant if the observer accelerates.'\r
`;export{e as default};
