const e=`version: "2.0"
formulas:

  - id: diferencia_potencial_trabajo
    title:
      es: Diferencia de potencial a partir del trabajo
      en: Potential difference from work
    equation: "V_AB = W_AB / q"
    latex: "V_{AB} = \\\\frac{W_{AB}}{q}  % q V_BA"
    rearrangements:
      - target: W_AB
        equation: "W_AB = q * V_AB"
        latex: "W_{AB} = q \\\\cdot V_{AB}"
      - target: q
        equation: "q = W_AB / V_AB"
        latex: "q = \\\\frac{W_{AB}}{V_{AB}}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La diferencia de potencial entre A y B es el trabajo realizado por el campo eléctrico por unidad de carga positiva al desplazar esa carga de A a B. Define [[V_AB]] como magnitud independiente de la carga de prueba."
      en: "The potential difference between A and B is the work done by the electric field per unit positive charge when displacing that charge from A to B. Defines [[V_AB]] as a magnitude independent of the test charge."
    constraints:
      - "q ≠ 0 (la carga de prueba no puede ser nula)"
      - "El trabajo debe ser el realizado por la fuerza eléctrica, no por fuerzas externas"
    validity:
      es: "Válida para cualquier campo eléctrico y cualquier trayectoria entre A y B, dado que el campo eléctrico es conservativo."
      en: "Valid for any electric field and any path between A and B, since the electric field is conservative."
    dimension_check: "[M L² T⁻³ I⁻¹] = [M L² T⁻²] / [I T] ✓"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - cálculo de la diferencia de potencial a partir del trabajo medido
      - determinación del trabajo al conocer la diferencia de potencial y la carga
    interpretation_tags:
      - voltaje_positivo
      - voltaje_negativo
      - trabajo_cero
      - carga_positiva
      - carga_negativa
    result_semantics:
      target: V_AB
      kind: scalar_signed
      sign_meaning:
        es: "Positivo: el campo realiza trabajo positivo al mover una carga positiva de A a B (A está a mayor potencial). Negativo: el campo frena a la carga positiva (B está a mayor potencial)."
        en: "Positive: the field does positive work moving a positive charge from A to B (A is at higher potential). Negative: the field opposes the positive charge (B is at higher potential)."
      absolute_value_meaning:
        es: "El módulo de [[V_AB]] mide cuánto trabajo por unidad de carga se necesita para mover la carga entre esos dos puntos, independientemente del signo de la carga."
        en: "The magnitude of [[V_AB]] measures how much work per unit charge is needed to move the charge between those two points, regardless of the sign of the charge."
    domain_checks:
      - "q ≠ 0"
      - "W_AB puede ser cualquier real"
      - "V_AB puede ser cualquier real"
    coherence_checks:
      - "Si V_AB > 0 y q > 0, entonces W_AB > 0: coherente"
      - "Si V_AB > 0 y q < 0, entonces W_AB < 0: el campo frena a la carga negativa"
      - "Si W_AB y q tienen el mismo signo, V_AB > 0"
      - "V_BA es el opuesto de V_AB: si se invierten los subíndices, el signo del trabajo se invierte"
    graph_implications:
      - "En el gráfico V_AB vs E_unif la relación es lineal con pendiente d_AB"
      - "En el gráfico W_AB vs q la relación es lineal con pendiente V_AB"
    pedagogical_triggers:
      - "Si el alumno obtiene V_AB negativo con trabajo positivo y carga positiva, hay un error de signo"
      - "Si V_AB depende del valor de q en el cálculo, el alumno ha cometido un error conceptual"

  - id: diferencia_potencial_campo_uniforme
    title:
      es: Diferencia de potencial en campo uniforme
      en: Potential difference in uniform field
    equation: "V_AB = E_unif * d_AB"
    latex: "V_{AB} = E \\\\cdot d_{AB}  % E_unif"
    rearrangements:
      - target: E_unif
        equation: "E_unif = V_AB / d_AB"
        latex: "E = \\\\frac{V_{AB}}{d_{AB}}"
      - target: d_AB
        equation: "d_AB = V_AB / E_unif"
        latex: "d_{AB} = \\\\frac{V_{AB}}{E}"
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: "En un campo eléctrico uniforme, la diferencia de potencial entre dos puntos es proporcional a la distancia entre ellos medida en la dirección del campo. Esta relación es la base del funcionamiento de los condensadores de placas paralelas."
      en: "In a uniform electric field, the potential difference between two points is proportional to the distance between them measured along the field direction. This relation is the basis of parallel-plate capacitor operation."
    constraints:
      - "El campo debe ser uniforme en toda la región entre A y B"
      - "d_AB es la proyección del desplazamiento sobre la dirección del campo"
      - "d_AB > 0"
    validity:
      es: "Válida únicamente en campos uniformes (condensador plano, campo entre placas paralelas). En campos no uniformes se requiere la integral de línea."
      en: "Valid only in uniform fields (flat capacitor, field between parallel plates). Non-uniform fields require line integration."
    dimension_check: "[M L² T⁻³ I⁻¹] = [M L T⁻³ I⁻¹] · [L] ✓"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - diseño y análisis de condensadores de placas paralelas
      - cálculo del campo eléctrico a partir de la tensión y la separación
    interpretation_tags:
      - campo_uniforme
      - condensador_plano
      - voltaje_distancia
    result_semantics:
      target: V_AB
      kind: scalar_signed
      sign_meaning:
        es: "Positivo si el desplazamiento va en el sentido del campo (de mayor a menor potencial). El potencial disminuye en la dirección del campo."
        en: "Positive if the displacement is in the direction of the field (from higher to lower potential). Potential decreases along the field direction."
      absolute_value_meaning:
        es: "Un mayor campo o una mayor separación producen una mayor diferencia de potencial. Duplicar el campo o la distancia duplica [[V_AB]]."
        en: "A larger field or larger separation produces a larger potential difference. Doubling the field or distance doubles [[V_AB]]."
    domain_checks:
      - "E_unif > 0"
      - "d_AB > 0"
      - "V_AB > 0 para desplazamiento en dirección del campo"
    coherence_checks:
      - "Si V_AB crece pero E_unif y d_AB no cambian, hay error en los datos"
      - "V_AB debe ser cero si el desplazamiento es perpendicular al campo"
    graph_implications:
      - "En el gráfico V_AB vs E_unif la relación es lineal con pendiente d_AB"
      - "En el gráfico V_AB vs d_AB la relación es lineal con pendiente E_unif"
    pedagogical_triggers:
      - "Si el alumno calcula V_AB con la distancia total de la trayectoria curva, debe corregirse usando la proyección sobre el campo"
      - "Si E_unif obtenido tiene unidades de V/m², hay error dimensional: falta dividir solo entre d_AB, no entre d_AB²"
`;export{e as default};
