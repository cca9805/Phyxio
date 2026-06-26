const n=`magnitudes:
  - id: Phi_B
    symbol: "\\\\Phi_B"
    nombre:
      es: Flujo magnetico
      en: Magnetic flux
    descripcion:
      es: Cantidad de campo magnetico que atraviesa una superficie orientada.
      en: Amount of magnetic field crossing an oriented surface.
    unidad_si: Wb
    dimension: "[M L² T⁻² I⁻¹]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - lectura_geometrica
      - ley_de_faraday
      - calculo_induccion
    common_mistake: Confundir flujo con campo magnetico local.
    typical_range: "10⁻⁶ Wb – 1 Wb en bobinas y superficies de laboratorio"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica si el campo atraviesa la superficie en el sentido elegido por la normal o en sentido contrario.
        en: The sign indicates whether the field crosses the surface along the chosen normal or opposite to it.
    zero_behavior:
      allowed: true
      meaning:
        es: Flujo nulo significa campo tangente, area nula o cancelacion entre aportes opuestos.
        en: Zero flux means tangent field, zero area, or cancellation between opposite contributions.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - lectura_de_acoplamiento
        - induccion_por_cambio
      secondary_for:
        - estimacion_de_fem
    graph_binding:
      channels:
        - eje_y_flujo
        - valor_interpretado
    pedagogical_notes:
      es: "El flujo no mide cuan fuerte es el campo en un punto, sino cuanto campo atraviesa una superficie con una orientacion elegida."
      en: "Flux does not measure how strong the field is at one point, but how much field crosses a surface with a chosen orientation."

  - id: B
    symbol: "B"
    nombre:
      es: Campo magnetico uniforme
      en: Uniform magnetic field
    descripcion:
      es: Intensidad del campo magnetico supuesto uniforme en la region atravesada por la superficie.
      en: Magnetic field strength assumed uniform over the region crossed by the surface.
    unidad_si: T
    dimension: "[M T⁻² I⁻¹]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in:
      - flujo_uniforme
      - proyeccion_normal
      - flujo_maximo
    common_mistake: Usar el modulo de campo sin revisar la orientacion de la superficie.
    typical_range: "10⁻⁵ T en la Tierra, 0.01 T – 2 T en imanes de laboratorio"
    sign_behavior:
      has_sign: false
      meaning:
        es: En este leaf se usa el modulo del campo; el signo queda en la orientacion de la normal.
        en: This leaf uses the field magnitude; sign is carried by the surface normal orientation.
    zero_behavior:
      allowed: true
      meaning:
        es: Campo nulo produce flujo nulo para cualquier area y orientacion.
        en: Zero field produces zero flux for any area and orientation.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, 10] T"
    interpretation_role:
      primary_for:
        - intensidad_de_acoplamiento
      secondary_for:
        - comparacion_de_fuentes
    graph_binding:
      channels:
        - control_campo
    pedagogical_notes:
      es: "Aumentar [[B]] solo aumenta el flujo si la superficie realmente presenta componente normal al campo."
      en: "Increasing [[B]] increases flux only if the surface actually presents a normal component to the field."

  - id: A
    symbol: "A"
    nombre:
      es: Area de la superficie
      en: Surface area
    descripcion:
      es: Area atravesada por el campo magnetico en la superficie elegida.
      en: Area crossed by the magnetic field on the chosen surface.
    unidad_si: m²
    dimension: "[L²]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - flujo_uniforme
      - flujo_maximo
    common_mistake: Usar el area total de una pieza aunque solo una parte este dentro del campo.
    typical_range: "10⁻⁴ m² – 10 m² en bobinas y lazos conductores"
    sign_behavior:
      has_sign: false
      meaning:
        es: El area es no negativa; la orientacion se representa con la normal y el factor de proyeccion.
        en: Area is nonnegative; orientation is represented by the normal and projection factor.
    zero_behavior:
      allowed: true
      meaning:
        es: Area nula implica flujo nulo aunque exista campo magnetico.
        en: Zero area implies zero flux even if a magnetic field exists.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, 100] m²"
    interpretation_role:
      primary_for:
        - escala_geometrica
      secondary_for:
        - diseno_de_bobinas
    graph_binding:
      channels:
        - control_area
    pedagogical_notes:
      es: "El area relevante es la que intercepta el campo, no necesariamente la superficie fisica completa del objeto."
      en: "The relevant area is the one intercepting the field, not necessarily the object's full physical surface."

  - id: cos_theta
    symbol: "c_\\\\theta"
    nombre:
      es: Factor de orientacion
      en: Orientation factor
    descripcion:
      es: Proyeccion adimensional que mide la alineacion entre el campo magnetico y la normal de la superficie.
      en: Dimensionless projection measuring alignment between the magnetic field and the surface normal.
    unidad_si: adimensional
    dimension: "[1]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - flujo_uniforme
      - proyeccion_normal
    common_mistake: Tomar el angulo con el plano de la superficie en lugar de tomarlo con la normal.
    typical_range: "-1 – 1"
    sign_behavior:
      has_sign: true
      meaning:
        es: Signo positivo indica campo en el sentido de la normal; signo negativo indica sentido opuesto.
        en: Positive sign indicates field along the normal; negative sign indicates the opposite direction.
    zero_behavior:
      allowed: true
      meaning:
        es: Valor cero significa campo tangente a la superficie y por tanto flujo nulo.
        en: Zero value means field tangent to the surface and therefore zero flux.
    value_nature:
      kind: ratio
      nonnegative_only: false
      expected_interval: "[-1, 1]"
    interpretation_role:
      primary_for:
        - lectura_de_orientacion
      secondary_for:
        - signo_del_flujo
    graph_binding:
      channels:
        - control_orientacion
    pedagogical_notes:
      es: "Este factor concentra toda la informacion angular sin forzar al alumno a escribir trigonometria fuera de las formulas declaradas."
      en: "This factor concentrates the angular information without forcing the student to write trigonometry outside declared formulas."

  - id: B_perp
    symbol: "B_\\\\perp"
    nombre:
      es: Componente normal del campo
      en: Normal field component
    descripcion:
      es: Parte del campo magnetico que atraviesa perpendicularmente la superficie.
      en: Part of the magnetic field crossing the surface perpendicularly.
    unidad_si: T
    dimension: "[M T⁻² I⁻¹]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - proyeccion_normal
      - lectura_grafica
    common_mistake: Creer que todo el campo contribuye al flujo aunque sea tangente.
    typical_range: "-2 T – 2 T en montajes de laboratorio"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica el sentido de cruce respecto a la normal de la superficie.
        en: The sign indicates the crossing direction relative to the surface normal.
    zero_behavior:
      allowed: true
      meaning:
        es: Componente normal nula implica que el campo no atraviesa la superficie.
        en: Zero normal component means the field does not cross the surface.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - diagnostico_de_orientacion
      secondary_for:
        - simplificacion_del_calculo
    graph_binding:
      channels:
        - eje_y_componente_normal
    pedagogical_notes:
      es: "Si [[B_perp]] es pequeño, el flujo tambien lo sera aunque [[B]] sea grande."
      en: "If [[B_perp]] is small, flux will also be small even when [[B]] is large."

  - id: Phi_max
    symbol: "\\\\Phi_{max}"
    nombre:
      es: Flujo maximo
      en: Maximum flux
    descripcion:
      es: Flujo que se obtiene cuando el campo atraviesa la superficie perpendicularmente en el sentido positivo.
      en: Flux obtained when the field crosses the surface perpendicularly in the positive direction.
    unidad_si: Wb
    dimension: "[M L² T⁻² I⁻¹]"
    is_vector: false
    components: []
    category: derived
    physical_role: secondary_quantity
    used_in:
      - escala_maxima
      - comparacion_de_orientacion
    common_mistake: Identificar siempre el flujo real con el flujo maximo.
    typical_range: "10⁻⁶ Wb – 10 Wb segun campo y area"
    sign_behavior:
      has_sign: false
      meaning:
        es: Es una escala maxima positiva usada como referencia.
        en: It is a positive maximum scale used as a reference.
    zero_behavior:
      allowed: true
      meaning:
        es: Flujo maximo nulo indica que falta campo o area efectiva.
        en: Zero maximum flux indicates missing field or effective area.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, 100] Wb"
    interpretation_role:
      primary_for:
        - escala_de_referencia
      secondary_for:
        - comparacion_con_flujo_real
    graph_binding:
      channels:
        - referencia_flujo_maximo
    pedagogical_notes:
      es: "Comparar [[Phi_B]] con [[Phi_max]] ayuda a separar tamano fisico y orientacion."
      en: "Comparing [[Phi_B]] with [[Phi_max]] helps separate physical size from orientation."

  - id: Phi_i
    symbol: "\\\\Phi_i"
    nombre:
      es: Flujo inicial
      en: Initial flux
    descripcion:
      es: Valor del flujo magnetico antes de un cambio de campo, area u orientacion.
      en: Magnetic flux before a change in field, area, or orientation.
    unidad_si: Wb
    dimension: "[M L² T⁻² I⁻¹]"
    is_vector: false
    components: []
    category: state
    physical_role: secondary_quantity
    used_in:
      - variacion_flujo
    common_mistake: Confundir el flujo inicial con el flujo maximo posible.
    typical_range: "-10 Wb – 10 Wb"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo depende de la orientacion elegida para la normal.
        en: The sign depends on the chosen normal orientation.
    zero_behavior:
      allowed: true
      meaning:
        es: Flujo inicial nulo puede indicar campo tangente o cancelacion inicial.
        en: Zero initial flux may indicate tangent field or initial cancellation.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - estado_inicial
      secondary_for:
        - calculo_de_cambio
    graph_binding:
      channels:
        - punto_inicial
    pedagogical_notes:
      es: "La induccion depende del cambio de flujo; por eso [[Phi_i]] debe conservar su signo."
      en: "Induction depends on flux change, so [[Phi_i]] must retain its sign."

  - id: Phi_f
    symbol: "\\\\Phi_f"
    nombre:
      es: Flujo final
      en: Final flux
    descripcion:
      es: Valor del flujo magnetico despues de un cambio de campo, area u orientacion.
      en: Magnetic flux after a change in field, area, or orientation.
    unidad_si: Wb
    dimension: "[M L² T⁻² I⁻¹]"
    is_vector: false
    components: []
    category: state
    physical_role: secondary_quantity
    used_in:
      - variacion_flujo
    common_mistake: Usar solo el valor absoluto y perder el sentido del cambio.
    typical_range: "-10 Wb – 10 Wb"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo conserva el sentido de cruce final respecto a la normal.
        en: The sign keeps the final crossing direction relative to the normal.
    zero_behavior:
      allowed: true
      meaning:
        es: Flujo final nulo indica que el estado final ya no atraviesa la superficie netamente.
        en: Zero final flux means the final state no longer crosses the surface net.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - estado_final
      secondary_for:
        - calculo_de_cambio
    graph_binding:
      channels:
        - punto_final
    pedagogical_notes:
      es: "Comparar [[Phi_f]] con [[Phi_i]] revela si el cambio favorece o se opone al flujo elegido."
      en: "Comparing [[Phi_f]] with [[Phi_i]] reveals whether the change favors or opposes the chosen flux."

  - id: DeltaPhi
    symbol: "\\\\Delta\\\\Phi_B"
    nombre:
      es: Variacion de flujo magnetico
      en: Magnetic flux change
    descripcion:
      es: Diferencia entre el flujo final y el flujo inicial.
      en: Difference between final flux and initial flux.
    unidad_si: Wb
    dimension: "[M L² T⁻² I⁻¹]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - ley_de_faraday
      - diagnostico_de_induccion
    common_mistake: Usar solo el flujo final cuando la induccion depende del cambio.
    typical_range: "10⁻⁶ Wb – 10 Wb en procesos usuales"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica si el flujo aumenta o disminuye respecto a la normal elegida.
        en: The sign indicates whether flux increases or decreases relative to the chosen normal.
    zero_behavior:
      allowed: true
      meaning:
        es: Cambio nulo implica ausencia de induccion por variacion de flujo.
        en: Zero change implies no induction due to flux variation.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - induccion_electromagnetica
      secondary_for:
        - lectura_de_lenz
    graph_binding:
      channels:
        - variacion_vertical
    pedagogical_notes:
      es: "La ley de Faraday usa la variacion de flujo; un flujo grande pero constante no induce por si solo."
      en: "Faraday's law uses flux change; a large but constant flux does not induce by itself."
`;export{n as default};
