const e=`magnitudes:

  - id: C
    symbol: C
    nombre:
      es: Capacidad eléctrica
      en: Electric capacitance
    descripcion:
      es: Capacidad de un condensador para almacenar carga eléctrica por unidad de tensión aplicada entre sus armaduras.
      en: Ability of a capacitor to store electric charge per unit of voltage applied between its plates.
    unidad_si: F
    dimension: "[M^-1 L^-2 T^4 I^2]"
    is_vector: false
    components: null
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Confundir la capacidad C (propiedad del dispositivo, constante para geometría fija) con la carga Q almacenada (variable según la tensión aplicada). Aumentar la tensión no cambia C, solo Q."
    typical_range: "1 pF (condensadores de precisión) a varios F (supercondensadores). En circuitos domésticos típicos: 1 nF a 100 µF."
    sign_behavior:
      has_sign: false
      meaning:
        es: La capacidad es siempre positiva; es una propiedad geométrica y material del condensador, nunca negativa.
        en: Capacitance is always positive; it is a geometric and material property of the capacitor, never negative.
    zero_behavior:
      allowed: false
      meaning:
        es: Una capacidad nula implicaría un condensador que no almacena ninguna carga, lo cual no es físicamente realizable para un dispositivo con armaduras reales.
        en: Zero capacitance would imply a capacitor storing no charge at all, not physically realizable for a device with real plates.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: "[1e-12, 1] F en aplicaciones convencionales"
    interpretation_role:
      primary_for: evaluación de la capacidad de almacenamiento del condensador
      secondary_for: cálculo de la carga y la energía almacenadas para una tensión dada
    graph_binding:
      channels: [y_axis_label, slope_annotation]
    pedagogical_notes:
      es: La capacidad C es la pendiente de la recta Q vs V en el gráfico. Un condensador de mayor capacidad almacena más carga para la misma diferencia de potencial. Este es el primer concepto que conecta la geometría física del condensador con su comportamiento eléctrico cuantificable.
      en: Capacitance C is the slope of the Q vs V graph. A capacitor with higher capacitance stores more charge for the same potential difference. This is the first concept connecting the physical geometry of the capacitor with its quantifiable electrical behavior.

  - id: Q
    symbol: Q
    nombre:
      es: Carga almacenada
      en: Stored charge
    descripcion:
      es: Cantidad de carga eléctrica acumulada en cada armadura del condensador cuando se le aplica una diferencia de potencial.
      en: Amount of electric charge accumulated on each plate of the capacitor when a potential difference is applied.
    unidad_si: C
    dimension: "[T I]"
    is_vector: false
    components: null
    category: state
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Creer que las dos armaduras acumulan la misma carga del mismo signo. En realidad una armadura acumula +Q y la otra −Q; la carga neta del condensador es cero."
    typical_range: "1 pC a varios C dependiendo de la capacidad y la tensión aplicada. Para un condensador de 100 µF a 230 V: Q = 23 mC."
    sign_behavior:
      has_sign: true
      meaning:
        es: Por convención, Q representa la carga positiva acumulada en la armadura conectada al polo positivo. La armadura negativa acumula −Q. Siempre se trabaja con el valor positivo en los cálculos de energía y capacidad.
        en: By convention, Q represents the positive charge accumulated on the plate connected to the positive pole. The negative plate accumulates −Q. The positive value is always used in energy and capacitance calculations.
    zero_behavior:
      allowed: true
      meaning:
        es: Q = 0 significa que el condensador está descargado; no existe diferencia de potencial entre sus armaduras y no almacena energía.
        en: Q = 0 means the capacitor is discharged; there is no potential difference between its plates and it stores no energy.
    value_nature:
      kind: state
      nonnegative_only: false
      expected_interval: "[-100 C, 100 C] en aplicaciones convencionales; magnitud siempre positiva en contexto de carga"
    interpretation_role:
      primary_for: evaluación de la cantidad de electricidad almacenada en el condensador
      secondary_for: verificación de la proporcionalidad Q = C·V entre carga y tensión
    graph_binding:
      channels: [y_axis, point_annotation]
    pedagogical_notes:
      es: Q es la magnitud que más directamente conecta la electricidad estática (carga) con los circuitos eléctricos (corriente = dQ/dt). Entender que Q aumenta linealmente con V para C constante es el núcleo del modelo de condensador ideal.
      en: Q is the quantity that most directly connects electrostatics (charge) with electric circuits (current = dQ/dt). Understanding that Q increases linearly with V for constant C is the core of the ideal capacitor model.

  - id: V
    symbol: V
    nombre:
      es: Diferencia de potencial
      en: Potential difference
    descripcion:
      es: Tensión aplicada entre las dos armaduras del condensador; determina la carga almacenada y la energía acumulada.
      en: Voltage applied between the two plates of the capacitor; determines stored charge and accumulated energy.
    unidad_si: V
    dimension: "[M L^2 T^-3 I^-1]"
    is_vector: false
    components: null
    category: fundamental
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Confundir la tensión de carga V (diferencia de potencial entre armaduras) con la tensión de ruptura del dieléctrico (tensión máxima admisible). Superar la tensión nominal destruye el condensador aunque no cambie la fórmula C = Q/V."
    typical_range: "1 V (condensadores de señal) a miles de voltios (condensadores de potencia). Tensión nominal doméstica de referencia: 230 V."
    sign_behavior:
      has_sign: true
      meaning:
        es: La polaridad de V determina qué armadura es positiva. Para condensadores no polarizados, V puede tomar cualquier signo. Para condensadores electrolíticos, V debe respetar la polaridad marcada.
        en: The polarity of V determines which plate is positive. For non-polarized capacitors, V can take any sign. For electrolytic capacitors, V must respect the marked polarity.
    zero_behavior:
      allowed: true
      meaning:
        es: V = 0 corresponde a un condensador descargado con Q = 0 y energía almacenada nula.
        en: V = 0 corresponds to a discharged capacitor with Q = 0 and zero stored energy.
    value_nature:
      kind: state
      nonnegative_only: false
      expected_interval: "[-10000 V, 10000 V] según la aplicación; tensión máxima limitada por el dieléctrico"
    interpretation_role:
      primary_for: cálculo de la carga Q y de la energía almacenada E
      secondary_for: verificación del límite de tensión nominal del condensador
    graph_binding:
      channels: [x_axis, point_annotation]
    pedagogical_notes:
      es: La tensión V es la causa directa de la carga Q; C actúa como la constante de proporcionalidad. Visualizar la recta Q = C·V en el gráfico (eje X = V, eje Y = Q) ayuda a consolidar la relación lineal y a identificar C como la pendiente.
      en: Voltage V is the direct cause of charge Q; C acts as the proportionality constant. Visualizing the line Q = C·V on the graph (X axis = V, Y axis = Q) helps consolidate the linear relationship and identify C as the slope.

  - id: E_cap
    symbol: E
    nombre:
      es: Energía almacenada en el condensador
      en: Energy stored in the capacitor
    descripcion:
      es: Energía potencial eléctrica acumulada en el campo eléctrico entre las armaduras del condensador cuando está cargado.
      en: Electric potential energy accumulated in the electric field between the plates of the capacitor when charged.
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: null
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake: "Calcular la energía como E = Q·V en lugar de E = (1/2)·C·V². El factor 1/2 se omite frecuentemente porque parece arbitrario; en realidad surge de integrar el trabajo de carga desde V=0 hasta V final."
    typical_range: "1 µJ (condensadores de señal) a varios kJ (condensadores de potencia y supercondensadores). Un condensador de 1000 µF a 230 V almacena unos 26.5 J."
    sign_behavior:
      has_sign: false
      meaning:
        es: La energía almacenada es siempre positiva o nula; representa energía potencial que puede recuperarse en la descarga.
        en: Stored energy is always positive or zero; it represents potential energy that can be recovered during discharge.
    zero_behavior:
      allowed: true
      meaning:
        es: E = 0 cuando el condensador está descargado (V = 0 o Q = 0). Ninguna energía está disponible para el circuito externo.
        en: E = 0 when the capacitor is discharged (V = 0 or Q = 0). No energy is available to the external circuit.
    value_nature:
      kind: state
      nonnegative_only: true
      expected_interval: "[0, varios kJ] según capacidad y tensión"
    interpretation_role:
      primary_for: evaluación de la energía disponible para descargar en el circuito externo
      secondary_for: comparación entre diferentes condensadores para la misma tensión de carga
    graph_binding:
      channels: [area_annotation, label_annotation]
    pedagogical_notes:
      es: La energía almacenada corresponde al área del triángulo bajo la recta Q = C·V en el gráfico Q vs V, entre V = 0 y el valor de V considerado. Esta interpretación geométrica del factor 1/2 es uno de los vínculos más potentes entre el gráfico y la física del condensador.
      en: Stored energy corresponds to the area of the triangle below the line Q = C·V on the Q vs V graph, between V = 0 and the considered V value. This geometric interpretation of the 1/2 factor is one of the most powerful links between the graph and the physics of the capacitor.

  - id: C_plana
    symbol: C_0
    nombre:
      es: Capacidad geométrica del condensador plano
      en: Geometric capacitance of the parallel-plate capacitor
    descripcion:
      es: Capacidad calculada a partir de la geometría y el material dieléctrico de un condensador de placas planas paralelas.
      en: Capacitance calculated from the geometry and dielectric material of a parallel-plate capacitor.
    unidad_si: F
    dimension: "[M^-1 L^-2 T^4 I^2]"
    is_vector: false
    components: null
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - interpretacion.yaml
    common_mistake: "Suponer que duplicar la separación entre armaduras reduce la capacidad a la mitad, sin tener en cuenta que la fórmula C = ε·A/d es válida solo en el modelo de condensador ideal con campo uniforme (d << √A)."
    typical_range: "1 pF a 1 µF para condensadores geométricamente simples. Para supercondensadores con dieléctrico especial y gran superficie: hasta varios faradios."
    sign_behavior:
      has_sign: false
      meaning:
        es: La capacidad geométrica es siempre positiva; depende únicamente de la permitividad, el área y la separación, todas magnitudes positivas.
        en: Geometric capacitance is always positive; it depends only on permittivity, area, and separation, all positive quantities.
    zero_behavior:
      allowed: false
      meaning:
        es: C = 0 requeriría área nula o separación infinita, ambas condiciones físicamente irrealizables en un condensador real.
        en: C = 0 would require zero area or infinite separation, both physically unrealizable in a real capacitor.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: "[1e-12, 1] F para geometrías convencionales"
    interpretation_role:
      primary_for: vinculación entre geometría física del condensador y su comportamiento eléctrico
      secondary_for: cálculo del efecto del dieléctrico mediante la permitividad relativa
    graph_binding:
      channels: [slope_annotation]
    pedagogical_notes:
      es: Esta fórmula es el puente entre el diseño físico de un condensador (área A, separación d, material dieléctrico ε) y su capacidad eléctrica C. Permite entender por qué los condensadores electrolíticos de gran capacidad tienen capas dieléctricas extremadamente delgadas y grandes superficies plegadas.
      en: This formula bridges the physical design of a capacitor (area A, separation d, dielectric material ε) and its electrical capacitance C. It explains why high-capacitance electrolytic capacitors have extremely thin dielectric layers and large folded surfaces.

  - id: epsilon
    symbol: "ε"
    nombre:
      es: Permitividad del dieléctrico
      en: Dielectric permittivity
    descripcion:
      es: Propiedad del material dieléctrico interpuesto entre las armaduras que cuantifica su capacidad para polarizarse y reducir el campo eléctrico efectivo.
      en: Property of the dielectric material between the plates quantifying its ability to polarize and reduce the effective electric field.
    unidad_si: "F/m"
    dimension: "[M^-1 L^-3 T^4 I^2]"
    is_vector: false
    components: null
    category: parameter
    physical_role: parameter
    used_in:
      - formulas.yaml
      - teoria.md
      - interpretacion.yaml
    common_mistake: "Confundir la permitividad absoluta ε con la permitividad relativa εᵣ (constante dieléctrica). La relación es ε = ε₀·εᵣ donde ε₀ = 8.854×10⁻¹² F/m es la permitividad del vacío."
    typical_range: "ε₀ = 8.854×10⁻¹² F/m (vacío/aire) hasta ε₀·10000 para materiales cerámicos con alta constante dieléctrica."
    sign_behavior:
      has_sign: false
      meaning:
        es: La permitividad es siempre positiva; cuantifica una propiedad del material, no una dirección.
        en: Permittivity is always positive; it quantifies a material property, not a direction.
    zero_behavior:
      allowed: false
      meaning:
        es: Permitividad nula implicaría que el material no responde al campo eléctrico, lo cual no existe en ningún material físico real.
        en: Zero permittivity would imply the material does not respond to the electric field, which does not exist in any real physical material.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: "[8.854e-12, 0.1] F/m según el material dieléctrico"
    interpretation_role:
      primary_for: determinación de la capacidad geométrica según el material dieléctrico empleado
      secondary_for: comparación de materiales dieléctricos mediante su constante dieléctrica relativa
    graph_binding:
      channels: [slope_annotation]
    pedagogical_notes:
      es: La permitividad ε conecta la física de los materiales con la electrostática. Insertar un dieléctrico de εᵣ = 4 entre las armaduras de un condensador cuadruplica su capacidad sin cambiar la geometría. Este efecto es la base del diseño de condensadores de alta densidad de energía.
      en: Permittivity ε connects material physics with electrostatics. Inserting a dielectric of εᵣ = 4 between the plates of a capacitor quadruples its capacitance without changing the geometry. This effect is the basis for designing high-energy-density capacitors.
`;export{e as default};
