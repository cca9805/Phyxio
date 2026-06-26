const e=`magnitudes:

  - id: epsilon_r
    symbol: "\\\\varepsilon_r"
    nombre:
      es: Constante dieléctrica relativa
      en: Relative permittivity
    descripcion:
      es: Cociente entre la permitividad del dieléctrico y la del vacío. Indica cuántas veces el material debilita el campo eléctrico aplicado respecto al vacío.
      en: Ratio of the permittivity of the dielectric to that of vacuum. Indicates how many times the material weakens the applied electric field compared to vacuum.
    unidad_si: "-"
    dimension: adimensional
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - capacitancia con dieléctrico
      - campo en condensador relleno
      - polarización del material
    common_mistake: >
      Confundir epsilon_r con la permitividad absoluta epsilon. epsilon_r es adimensional y siempre mayor o igual a 1; epsilon tiene unidades F/m.
    typical_range: "De 1 (vacío) a ~10 000 (titanato de bario). Vidrio ≈ 7, agua líquida ≈ 80, aire ≈ 1.0006."
    sign_behavior:
      has_sign: false
      meaning:
        es: epsilon_r es siempre positivo y mayor o igual a 1 para cualquier material dieléctrico lineal.
        en: epsilon_r is always positive and greater than or equal to 1 for any linear dielectric material.
    zero_behavior:
      allowed: false
      meaning:
        es: epsilon_r menor que 1 no existe para materiales pasivos; valdría 1 exactamente solo en el vacío perfecto.
        en: epsilon_r below 1 does not occur for passive materials; it equals 1 exactly only in perfect vacuum.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "[1, 10000]"
    interpretation_role:
      primary_for: capacitancia con dieléctrico
      secondary_for: campo eléctrico interior reducido
    graph_binding:
      channels:
        - axis: y
          role: output_curve
          description: "Capacitancia en función de epsilon_r (curva lineal ascendente)"
    pedagogical_notes:
      es: >
        epsilon_r es el parámetro que conecta la física microscópica (dipoles que se alinean) con el efecto macroscópico observable (mayor capacitancia). Comprender que epsilon_r > 1 porque los dipoles crean un campo opuesto que reduce el campo neto es la clave para entender todos los dieléctricos.
      en: >
        epsilon_r is the parameter connecting microscopic physics (aligning dipoles) with the observable macroscopic effect (higher capacitance). Understanding that epsilon_r > 1 because dipoles create an opposing field that reduces the net field is the key to understanding all dielectrics.

  - id: C_d
    symbol: "C_d"
    nombre:
      es: Capacitancia con dieléctrico
      en: Capacitance with dielectric
    descripcion:
      es: Capacidad del condensador cuando el espacio entre placas está relleno con un material dieléctrico de constante epsilon_r. Es epsilon_r veces la capacitancia en vacío.
      en: Capacitance of the capacitor when the gap is filled with a dielectric material of constant epsilon_r. It equals epsilon_r times the vacuum capacitance.
    unidad_si: "F"
    dimension: "[M^{-1} L^{-2} T^4 I^2]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - cálculo de energía almacenada con dieléctrico
      - diseño de condensadores reales
    common_mistake: >
      Sumar C_0 más alguna cantidad relacionada con epsilon_r en lugar de multiplicar. La relación es C_d = epsilon_r * C_0, no C_d = C_0 + epsilon_r.
    typical_range: "Desde pF (condensadores de precisión) hasta mF (supercondensadores con dieléctrico de alta epsilon_r)."
    sign_behavior:
      has_sign: false
      meaning:
        es: C_d es siempre positivo; una capacitancia negativa no tiene significado físico en este contexto.
        en: C_d is always positive; a negative capacitance has no physical meaning in this context.
    zero_behavior:
      allowed: false
      meaning:
        es: C_d nulo implicaría epsilon_r nulo o área nula, ambos físicamente imposibles en un condensador real.
        en: Zero C_d would imply zero epsilon_r or zero area, both physically impossible for a real capacitor.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "[1e-12, 1e-1]"
    interpretation_role:
      primary_for: almacenamiento de carga y energía
      secondary_for: comparación con condensador en vacío
    graph_binding:
      channels:
        - axis: y
          role: output_value
          description: "Valor de C_d en el eje vertical del gráfico capacitancia vs epsilon_r"
    pedagogical_notes:
      es: >
        C_d es el resultado observable y medible en laboratorio. Su proporcionalidad directa con epsilon_r hace que el gráfico sea una recta, lo que facilita verificar experimentalmente el modelo lineal del dieléctrico.
      en: >
        C_d is the observable and measurable result in the laboratory. Its direct proportionality to epsilon_r makes the graph a straight line, making it easy to verify the linear dielectric model experimentally.

  - id: C_0
    symbol: "C_0"
    nombre:
      es: Capacitancia en vacío
      en: Vacuum capacitance
    descripcion:
      es: Capacidad del condensador sin dieléctrico (solo vacío entre placas). Para un condensador plano, depende del área de las placas y de la separación entre ellas.
      en: Capacitance of the capacitor without dielectric (vacuum only between plates). For a parallel-plate capacitor it depends on plate area and separation.
    unidad_si: "F"
    dimension: "[M^{-1} L^{-2} T^4 I^2]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - referencia para calcular C_d
      - diseño geométrico del condensador
    common_mistake: >
      Olvidar que C_0 depende solo de la geometría (área y separación), no del voltaje ni de la carga almacenada.
    typical_range: "Desde pF (condensadores de aire de pequeña área) hasta nF (geometrías con gran área y pequeña separación)."
    sign_behavior:
      has_sign: false
      meaning:
        es: C_0 es siempre positivo; viene determinado por parámetros geométricos.
        en: C_0 is always positive; it is determined by geometric parameters.
    zero_behavior:
      allowed: false
      meaning:
        es: C_0 nulo requeriría área nula o separación infinita, condiciones no realizables.
        en: Zero C_0 would require zero area or infinite separation, conditions that cannot be realised.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "[1e-12, 1e-9]"
    interpretation_role:
      primary_for: referencia geométrica del condensador
      secondary_for: factor de escala en la relación C_d = epsilon_r * C_0
    graph_binding:
      channels:
        - axis: parameter
          role: input_reference
          description: "C_0 es la ordenada en el origen del gráfico lineal C_d vs epsilon_r"
    pedagogical_notes:
      es: >
        C_0 actúa como referencia experimental: medir C_0 (con aire entre placas) y luego medir C_d (con dieléctrico) permite determinar epsilon_r directamente como el cociente C_d/C_0.
      en: >
        C_0 serves as an experimental reference: measuring C_0 (with air between plates) and then C_d (with dielectric) allows determining epsilon_r directly as the ratio C_d/C_0.

  - id: E_d
    symbol: "E_d"
    nombre:
      es: Campo eléctrico en el dieléctrico
      en: Electric field inside the dielectric
    descripcion:
      es: Intensidad del campo eléctrico resultante dentro del material dieléctrico. Es el campo externo aplicado dividido entre epsilon_r.
      en: Resultant electric field intensity inside the dielectric material. It equals the applied external field divided by epsilon_r.
    unidad_si: "V/m"
    dimension: "[M L T^{-3} I^{-1}]"
    is_vector: true
    components: ["E_d_x", "E_d_y", "E_d_z"]
    category: state
    physical_role: core_physical_quantity
    used_in:
      - tensión de ruptura del dieléctrico
      - diseño de aislamiento eléctrico
    common_mistake: >
      Creer que E_d es mayor que el campo aplicado. El campo en el dieléctrico es siempre menor o igual al campo externo, nunca mayor, porque los dipoles se oponen al campo aplicado.
    typical_range: "Inferior al campo en vacío por un factor epsilon_r. Tensión de ruptura típica: 1–300 MV/m según material."
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica la dirección del campo resultante. Positivo según la convención de la dirección del campo externo aplicado.
        en: The sign indicates the direction of the resultant field. Positive along the convention of the applied external field direction.
    zero_behavior:
      allowed: false
      meaning:
        es: E_d nulo implicaría campo externo nulo o epsilon_r infinito (conductor perfecto), fuera del régimen dieléctrico lineal.
        en: Zero E_d would imply zero external field or infinite epsilon_r (perfect conductor), outside the linear dielectric regime.
    value_nature:
      kind: scalar_with_sign
      nonnegative_only: false
      expected_interval: "(-300e6, 300e6)"
    interpretation_role:
      primary_for: campo neto reducido por polarización
      secondary_for: tensión de ruptura y riesgo de fallo del aislamiento
    graph_binding:
      channels:
        - axis: y
          role: secondary_curve
          description: "E_d se puede mostrar como curva decreciente frente a epsilon_r a campo externo fijo"
    pedagogical_notes:
      es: >
        E_d es la magnitud que conecta la respuesta macroscópica del dieléctrico con el campo externo. Que E_d = E_ext / epsilon_r sintetiza toda la física de la polarización: los dipoles se oponen al campo, lo reducen en un factor epsilon_r y esa reducción es la firma del dieléctrico.
      en: >
        E_d is the magnitude that connects the macroscopic response of the dielectric to the external field. That E_d = E_ext / epsilon_r synthesises all the physics of polarisation: dipoles oppose the field, reduce it by epsilon_r, and that reduction is the signature of the dielectric.

  - id: P_pol
    symbol: "\\\\mathbf{P}"
    nombre:
      es: Polarización eléctrica
      en: Electric polarisation
    descripcion:
      es: Momento dipolar por unidad de volumen del material dieléctrico. Cuantifica la densidad de alineación de los dipoles microscópicos bajo el campo aplicado.
      en: Dipole moment per unit volume of the dielectric material. Quantifies the density of alignment of microscopic dipoles under the applied field.
    unidad_si: "C/m²"
    dimension: "[L^{-2} T I]"
    is_vector: true
    components: ["P_x", "P_y", "P_z"]
    category: state
    physical_role: derived
    used_in:
      - enlace entre modelo microscópico y respuesta macroscópica
      - cálculo de cargas de polarización superficiales
    common_mistake: >
      Confundir polarización P con campo de desplazamiento D. P tiene unidades C/m² igual que D, pero P es solo la contribución de los dipolos del material, mientras que D incluye también la contribución del campo libre.
    typical_range: "De cero (sin campo) hasta valores de saturación del orden de C/m² en ferroeléctricos."
    sign_behavior:
      has_sign: true
      meaning:
        es: P apunta en la dirección del campo eléctrico resultante para dieléctricos lineales con epsilon_r > 1.
        en: P points along the direction of the resultant electric field for linear dielectrics with epsilon_r > 1.
    zero_behavior:
      allowed: true
      meaning:
        es: P nulo cuando no hay campo externo aplicado (dieléctrico no polar no perturbado) o cuando el campo es nulo.
        en: Zero P when no external field is applied (unperturbed non-polar dielectric) or when the field is zero.
    value_nature:
      kind: scalar_with_sign
      nonnegative_only: false
      expected_interval: "(-1, 1)"
    interpretation_role:
      primary_for: mecanismo microscópico de apantallamiento
      secondary_for: carga de polarización superficial en interfaces
    graph_binding:
      channels:
        - axis: secondary
          role: derived_quantity
          description: "P proporcional al campo externo en el régimen lineal; no es el eje principal del gráfico Coord"
    pedagogical_notes:
      es: >
        P es el puente entre el mundo microscópico (dipoles individuales) y la macromagnitud observable epsilon_r. Comprender que P genera cargas superficiales opuestas a las libres explica por qué el campo neto dentro del dieléctrico es menor que el aplicado.
      en: >
        P is the bridge between the microscopic world (individual dipoles) and the observable macroquantity epsilon_r. Understanding that P generates surface charges opposing the free charges explains why the net field inside the dielectric is smaller than the applied field.
`;export{e as default};
