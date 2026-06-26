const e=`leaf_id: intensivas\r
formulas:\r
- id: criterio_intensividad\r
  title:\r
    es: Criterio de intensividad por escalado\r
    en: Scaling criterion for intensivity\r
  title_es_en:\r
    es: Criterio de intensividad por escalado\r
    en: Scaling criterion for intensivity\r
  equation: X_int(lambda sistema) = X_int(sistema)\r
  latex: X_{\\mathrm{int}}(\\lambda\\,\\mathrm{sistema})=X_{\\mathrm{int}}(\\mathrm{sistema})\r
  category: definicion\r
  relation_type: proportionality\r
  validity:\r
    es: Valida al escalar una muestra manteniendo el mismo estado local y la misma composicion.\r
    en: Valid when scaling a sample while keeping the same local state and composition.\r
  validity_es_en:\r
    es: Misma sustancia\r
    misma fase y equilibrio interno razonable.: null\r
    en: Same substance\r
    same phase: null\r
    and reasonable internal equilibrium.: null\r
  dimension_check:\r
    es: Ambos lados tienen la misma dimension que X_int.\r
    en: Both sides have the same dimension as X_int.\r
  calculable: true\r
  motivo_no_calculable: ''\r
  variables:\r
  - X_int\r
  - lambda_escala\r
  targets:\r
  - X_int\r
  - lambda_escala\r
  used_in:\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  interpretation_tags:\r
  - escala\r
  - estado\r
  - intensiva\r
  domain_checks:\r
  - lambda_escala > 0\r
  - estado_local_constante\r
  coherence_checks:\r
  - X_int_no_se_suma\r
  - misma_referencia\r
  graph_implications:\r
  - curva_horizontal_frente_a_escala\r
  pedagogical_triggers:\r
  - error: Duplicar temperatura al duplicar muestra\r
    detection: T_final = 2 T_inicial\r
    message:\r
      es: La temperatura no se duplica por tener dos copias iguales.\r
      en: Temperature does not double because there are two equal copies.\r
  physical_meaning:\r
    es: Una variable intensiva caracteriza el estado\r
    no la cantidad total de sistema.: null\r
    en: An intensive variable characterizes state\r
    not total amount of system.: null\r
  rearrangements:\r
  - target: X_int\r
    equation: X_int(lambda sistema) = X_int(sistema)\r
    latex: X_{\\mathrm{int}}(\\lambda\\,\\mathrm{sistema})=X_{\\mathrm{int}}(\\mathrm{sistema})\r
  constraints:\r
  - mismo sistema de referencia\r
  - variables compatibles\r
  result_semantics:\r
    target: X_int\r
    kind: proportionality\r
    sign_meaning:\r
      es: Depende de la magnitud intensiva evaluada.\r
      en: Depends on the intensive magnitude being evaluated.\r
    absolute_value_meaning:\r
      es: Lectura de estado o propiedad normalizada.\r
      en: State reading or normalized property.\r
- id: igualdad_equilibrio_intensivo\r
  title:\r
    es: Igualdad intensiva en equilibrio\r
    en: Intensive equality at equilibrium\r
  title_es_en:\r
    es: Igualdad intensiva en equilibrio\r
    en: Intensive equality at equilibrium\r
  equation: X_int,A = X_int,B\r
  latex: X_{\\mathrm{int},A}=X_{\\mathrm{int},B}\r
  category: equilibrio\r
  relation_type: equality\r
  validity:\r
    es: Aplica cuando dos partes pueden intercambiar la cantidad conjugada y han alcanzado equilibrio.\r
    en: Applies when two parts can exchange the conjugate amount and have reached equilibrium.\r
  validity_es_en:\r
    es: Contacto fisico adecuado y sin barrera que mantenga diferencias internas.\r
    en: Adequate physical contact and no barrier maintaining internal differences.\r
  dimension_check:\r
    es: Las dos variables comparadas deben ser de la misma magnitud y unidad.\r
    en: The compared variables must have the same magnitude and unit.\r
  calculable: true\r
  motivo_no_calculable: ''\r
  variables:\r
  - X_int\r
  - T\r
  - P\r
  targets:\r
  - X_int\r
  - T\r
  - P\r
  used_in:\r
  - teoria.md\r
  - teoria.en.md\r
  - errores.md\r
  - errores.en.md\r
  interpretation_tags:\r
  - equilibrio\r
  - igualdad\r
  - frontera\r
  domain_checks:\r
  - subsistemas_comparables\r
  - intercambio_permitido\r
  coherence_checks:\r
  - misma_variable\r
  - misma_unidad\r
  graph_implications:\r
  - niveles_se_igualan\r
  pedagogical_triggers:\r
  - error: Confundir equilibrio con cantidades iguales\r
    detection: m_A = m_B como criterio de equilibrio\r
    message:\r
      es: El equilibrio se reconoce por igualdad de intensivas, no por masas iguales.\r
      en: Equilibrium is recognized by equality of intensives, not equal masses.\r
  physical_meaning:\r
    es: Una diferencia intensiva indica tendencia a intercambio; la igualdad borra esa tendencia macroscópica.\r
    en: An intensive difference indicates exchange tendency; equality removes that macroscopic tendency.\r
  rearrangements:\r
  - target: X_int\r
    equation: X_int,A = X_int,B\r
    latex: X_{\\mathrm{int},A}=X_{\\mathrm{int},B}\r
  constraints:\r
  - mismo sistema de referencia\r
  - variables compatibles\r
  result_semantics:\r
    target: X_int\r
    kind: equality\r
    sign_meaning:\r
      es: Depende de la magnitud intensiva evaluada.\r
      en: Depends on the intensive magnitude being evaluated.\r
    absolute_value_meaning:\r
      es: Lectura de estado o propiedad normalizada.\r
      en: State reading or normalized property.\r
- id: densidad_intensiva\r
  title:\r
    es: Densidad como variable intensiva\r
    en: Density as an intensive variable\r
  title_es_en:\r
    es: Densidad como variable intensiva\r
    en: Density as an intensive variable\r
  equation: rho = m / V\r
  latex: \\rho=\\frac{m}{V}\r
  category: definicion\r
  relation_type: quotient\r
  validity:\r
    es: Valida para una region donde masa y volumen se refieren al mismo sistema o elemento material.\r
    en: Valid for a region where mass and volume refer to the same system or material element.\r
  validity_es_en:\r
    es: Requiere volumen positivo y muestra representativa.\r
    en: Requires positive volume and representative sample.\r
  dimension_check:\r
    es: kg dividido por m3 da kg/m3.\r
    en: kg divided by m3 gives kg/m3.\r
  calculable: true\r
  motivo_no_calculable: ''\r
  variables:\r
  - rho\r
  - m\r
  - V\r
  targets:\r
  - rho\r
  - m\r
  - V\r
  used_in:\r
  - teoria.md\r
  - teoria.en.md\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  interpretation_tags:\r
  - cociente\r
  - normalizacion\r
  - material\r
  domain_checks:\r
  - V > 0\r
  - misma_muestra\r
  coherence_checks:\r
  - m_y_V_escalan_juntos\r
  graph_implications:\r
  - rho_constante_al_escalar\r
  pedagogical_triggers:\r
  - error: Identificar densidad con masa\r
    detection: rho aumenta solo porque m aumenta\r
    message:\r
      es: Si el volumen aumenta en la misma proporcion, la densidad no cambia.\r
      en: If volume increases by the same proportion, density does not change.\r
  physical_meaning:\r
    es: La densidad mide concentracion de masa\r
    no masa total.: null\r
    en: Density measures mass concentration\r
    not total mass.: null\r
  rearrangements:\r
  - target: rho\r
    equation: rho = m / V\r
    latex: \\rho=\\frac{m}{V}\r
  constraints:\r
  - mismo sistema de referencia\r
  - variables compatibles\r
  result_semantics:\r
    target: rho\r
    kind: quotient\r
    sign_meaning:\r
      es: Depende de la magnitud intensiva evaluada.\r
      en: Depends on the intensive magnitude being evaluated.\r
    absolute_value_meaning:\r
      es: Lectura de estado o propiedad normalizada.\r
      en: State reading or normalized property.\r
- id: promedio_ponderado_intensivo\r
  title:\r
    es: Promedio ponderado de una intensiva\r
    en: Weighted average of an intensive variable\r
  title_es_en:\r
    es: Promedio ponderado de una intensiva\r
    en: Weighted average of an intensive variable\r
  equation: X_int_final = (m_A X_A + m_B X_B) / (m_A + m_B)\r
  latex: X_{int,final}=\\frac{m_A X_A+m_B X_B}{m_A+m_B}\r
  category: promedio\r
  relation_type: weighted_average\r
  validity:\r
    es: Aproximacion util cuando la propiedad se promedia con una cantidad extensiva compatible y no hay efectos no lineales dominantes.\r
    en: Useful approximation when the property is averaged with a compatible extensive amount and no dominant nonlinear effects exist.\r
  validity_es_en:\r
    es: Adecuada para estimaciones de mezcla simple con cantidades positivas.\r
    en: Suitable for simple mixture estimates with positive amounts.\r
  dimension_check:\r
    es: El numerador tiene unidad masa por X y el denominador masa; queda la unidad de X.\r
    en: The numerator has mass times X and the denominator mass; the unit of X remains.\r
  calculable: true\r
  motivo_no_calculable: ''\r
  variables:\r
  - X_int\r
  - X_A\r
  - X_B\r
  - m\r
  targets:\r
  - X_int\r
  - X_A\r
  - X_B\r
  - m\r
  used_in:\r
  - ejemplos.md\r
  - ejemplos.en.md\r
  - aplicaciones.md\r
  - aplicaciones.en.md\r
  interpretation_tags:\r
  - ponderacion\r
  - promedio\r
  domain_checks:\r
  - m_A > 0\r
  - m_B > 0\r
  - misma_propiedad\r
  coherence_checks:\r
  - no_media_aritmetica_sin_pesos\r
  graph_implications:\r
  - valor_final_entre_extremos\r
  pedagogical_triggers:\r
  - error: Usar media simple con masas distintas\r
    detection: X_final = (X_A + X_B)/2\r
    message:\r
      es: Con cantidades distintas, la intensiva final debe ponderarse.\r
      en: With different amounts, the final intensive value must be weighted.\r
  physical_meaning:\r
    es: Una intensiva de mezcla suele quedar entre los valores iniciales\r
    desplazada hacia la parte con mas cantidad.: null\r
    en: A mixture intensive usually lies between initial values\r
    shifted toward the larger amount.: null\r
  rearrangements:\r
  - target: X_int\r
    equation: X_int_final = (m_A X_A + m_B X_B) / (m_A + m_B)\r
    latex: X_{int,final}=\\frac{m_A X_A+m_B X_B}{m_A+m_B}\r
  constraints:\r
  - mismo sistema de referencia\r
  - variables compatibles\r
  result_semantics:\r
    target: X_int\r
    kind: weighted_average\r
    sign_meaning:\r
      es: Depende de la magnitud intensiva evaluada.\r
      en: Depends on the intensive magnitude being evaluated.\r
    absolute_value_meaning:\r
      es: Lectura de estado o propiedad normalizada.\r
      en: State reading or normalized property.\r
`;export{e as default};
