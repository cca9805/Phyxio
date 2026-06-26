const e=`- id: Z_mec
  symbol: Z_mec
  nombre:
    es: Impedancia mecánica
    en: Mechanical impedance
  descripcion:
    es: Cociente entre la fuerza aplicada y la velocidad de partícula resultante en un punto del sólido.
    en: Ratio of applied force to resulting particle velocity at a point in the solid.
  unidad_si: "kg/s"
  dimension: "[M T⁻¹]"
  is_vector: false
  components: null
  category: fundamental
  physical_role: core_physical_quantity
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Confundir impedancia mecánica (Z = ρcA) con impedancia acústica específica (z = ρc). La primera incluye el área de la sección."
  typical_range: "10³ kg/s (polímeros finos) a 10⁸ kg/s (barras gruesas de acero)"
  sign_behavior:
    has_sign: false
    meaning:
      es: La impedancia mecánica es siempre positiva; un valor negativo indicaría error en los datos de entrada.
      en: Mechanical impedance is always positive; a negative value would indicate an error in input data.
  zero_behavior:
    allowed: false
    meaning:
      es: Impedancia cero implicaría que no hay resistencia al movimiento; esto no ocurre en ningún sólido real.
      en: Zero impedance would imply no resistance to motion; this does not occur in any real solid.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[10³, 10⁸] kg/s para sólidos de ingeniería"
  interpretation_role:
    primary_for:
    - calculo_reflexion_transmision
    - adaptacion_impedancias
    secondary_for:
    - transferencia_energia
  graph_binding:
    channels:
    - eje_y_impedancia
    - color_material
  pedagogical_notes:
    es: "[[Z_mec]] es la magnitud central de este leaf. Gobierna cuánta energía pasa de un sólido a otro. Si dos piezas tienen la misma [[Z_mec]], toda la energía se transfiere sin reflexión. Si difieren mucho, la mayor parte de la energía se refleja en la interfaz."
    en: "[[Z_mec]] is the central magnitude of this leaf. It governs how much energy passes from one solid to another. If two parts have the same [[Z_mec]], all energy transfers without reflection. If they differ greatly, most energy reflects at the interface."

- id: rho
  symbol: rho
  nombre:
    es: Densidad del sólido
    en: Solid density
  descripcion:
    es: Masa por unidad de volumen del material sólido en el que se propaga la onda.
    en: Mass per unit volume of the solid material through which the wave propagates.
  unidad_si: "kg/m³"
  dimension: "[M L⁻³]"
  is_vector: false
  components: null
  category: parameter
  physical_role: material_property
  used_in:
  - formulas
  - teoria
  - ejemplos
  common_mistake: "Usar la densidad de un material diferente al de la pieza real; por ejemplo, usar la densidad del acero inoxidable cuando la pieza es de acero al carbono."
  typical_range: "900 kg/m³ (polímeros) a 19300 kg/m³ (tungsteno)"
  sign_behavior:
    has_sign: false
    meaning:
      es: La densidad es siempre positiva para cualquier material sólido.
      en: Density is always positive for any solid material.
  zero_behavior:
    allowed: false
    meaning:
      es: Densidad cero implicaría vacío; las ondas mecánicas no se propagan en el vacío.
      en: Zero density would imply vacuum; mechanical waves do not propagate in vacuum.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[900, 19300] kg/m³"
  interpretation_role:
    primary_for:
    - calculo_impedancia
    secondary_for:
    - identificacion_material
  graph_binding:
    channels:
    - parametro_material
  pedagogical_notes:
    es: "[[rho]] entra directamente en el cálculo de [[Z_mec]]. Un aumento de densidad incrementa la impedancia y hace que la interfaz sea más reflectante frente a materiales ligeros."
    en: "[[rho]] enters directly into the calculation of [[Z_mec]]. An increase in density raises impedance and makes the interface more reflective against lighter materials."

- id: c_s
  symbol: c_s
  nombre:
    es: Velocidad de fase en el sólido
    en: Phase velocity in the solid
  descripcion:
    es: Velocidad a la que se propaga la perturbación mecánica (onda longitudinal o transversal) en el sólido.
    en: Speed at which the mechanical disturbance (longitudinal or transverse wave) propagates in the solid.
  unidad_si: m/s
  dimension: "[L T⁻¹]"
  is_vector: false
  components: null
  category: parameter
  physical_role: material_property
  used_in:
  - formulas
  - teoria
  - ejemplos
  common_mistake: "No distinguir entre velocidad longitudinal y transversal; en acero la longitudinal (~5900 m/s) es casi el doble de la transversal (~3200 m/s)."
  typical_range: "1000 m/s (caucho) a 6400 m/s (acero, onda longitudinal)"
  sign_behavior:
    has_sign: false
    meaning:
      es: La velocidad de fase es siempre positiva; indica rapidez de propagación, no dirección.
      en: Phase velocity is always positive; it indicates propagation speed, not direction.
  zero_behavior:
    allowed: false
    meaning:
      es: Velocidad cero indicaría que la onda no se propaga; esto no ocurre en sólidos con módulo elástico finito.
      en: Zero velocity would indicate no propagation; this does not occur in solids with finite elastic modulus.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[1000, 6400] m/s para sólidos comunes"
  interpretation_role:
    primary_for:
    - calculo_impedancia
    secondary_for:
    - tiempo_propagacion
  graph_binding:
    channels:
    - parametro_velocidad
  pedagogical_notes:
    es: "[[c_s]] depende del módulo elástico y la densidad del material. En la fórmula de impedancia, un aumento de [[c_s]] incrementa [[Z_mec]] proporcionalmente. Materiales rígidos y ligeros (como el aluminio) pueden tener alta velocidad pero impedancia moderada por su baja densidad."
    en: "[[c_s]] depends on the elastic modulus and density of the material. In the impedance formula, an increase in [[c_s]] raises [[Z_mec]] proportionally. Stiff, light materials (like aluminium) can have high velocity but moderate impedance due to low density."

- id: A_sec
  symbol: A_sec
  nombre:
    es: Área de la sección transversal
    en: Cross-sectional area
  descripcion:
    es: Área de la sección perpendicular a la dirección de propagación de la onda en el sólido.
    en: Area of the cross-section perpendicular to the wave propagation direction in the solid.
  unidad_si: "m²"
  dimension: "[L²]"
  is_vector: false
  components: null
  category: parameter
  physical_role: geometric_parameter
  used_in:
  - formulas
  - teoria
  - ejemplos
  common_mistake: "Olvidar convertir de cm² a m² al calcular la impedancia; un error de factor 10⁻⁴ altera el resultado drásticamente."
  typical_range: "10⁻⁶ m² (alambres finos) a 10⁻¹ m² (vigas estructurales)"
  sign_behavior:
    has_sign: false
    meaning:
      es: El área es siempre positiva; representa una superficie física.
      en: Area is always positive; it represents a physical surface.
  zero_behavior:
    allowed: false
    meaning:
      es: Área cero implicaría un medio sin sección; la onda no puede propagarse.
      en: Zero area would imply a medium with no cross-section; the wave cannot propagate.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[10⁻⁶, 10⁻¹] m²"
  interpretation_role:
    primary_for:
    - calculo_impedancia
    secondary_for:
    - geometria_pieza
  graph_binding:
    channels:
    - parametro_geometria
  pedagogical_notes:
    es: "[[A_sec]] diferencia la impedancia mecánica de la impedancia acústica específica. Una barra gruesa tiene mayor [[Z_mec]] que una fina del mismo material, lo que afecta directamente la reflexión en uniones."
    en: "[[A_sec]] differentiates mechanical impedance from specific acoustic impedance. A thick bar has higher [[Z_mec]] than a thin one of the same material, directly affecting reflection at joints."

- id: R_Z
  symbol: R_Z
  nombre:
    es: Coeficiente de reflexión en amplitud
    en: Amplitude reflection coefficient
  descripcion:
    es: Fracción de la amplitud de velocidad de partícula que se refleja en la interfaz entre dos medios.
    en: Fraction of particle velocity amplitude reflected at the interface between two media.
  unidad_si: adimensional
  dimension: "[1]"
  is_vector: false
  components: null
  category: derived
  physical_role: transfer_ratio
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Confundir coeficiente de reflexión en amplitud con coeficiente de reflexión en energía; el segundo es el cuadrado del primero."
  typical_range: "-1 a 1"
  sign_behavior:
    has_sign: true
    meaning:
      es: Signo positivo indica que el medio 2 es más rígido; signo negativo indica que el medio 2 es más blando.
      en: Positive sign means medium 2 is stiffer; negative sign means medium 2 is softer.
  zero_behavior:
    allowed: true
    meaning:
      es: Coeficiente cero implica adaptación perfecta de impedancias; toda la energía se transmite.
      en: Zero coefficient implies perfect impedance matching; all energy is transmitted.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "[-1, 1]"
  interpretation_role:
    primary_for:
    - diagnostico_interfaz
    - eficiencia_transmision
    secondary_for:
    - deteccion_desacoplo
  graph_binding:
    channels:
    - eje_y_reflexion
    - color_interfaz
  pedagogical_notes:
    es: "[[R_Z]] permite diagnosticar la calidad de una unión mecánica. Un valor próximo a cero indica buen acoplamiento energético. Un valor próximo a ±1 indica que la interfaz actúa como barrera y la mayor parte de la energía se refleja."
    en: "[[R_Z]] allows diagnosing the quality of a mechanical joint. A value close to zero indicates good energy coupling. A value close to ±1 indicates the interface acts as a barrier and most energy is reflected."

- id: T_Z
  symbol: T_Z
  nombre:
    es: Coeficiente de transmisión en amplitud
    en: Amplitude transmission coefficient
  descripcion:
    es: Fracción de la amplitud de velocidad de partícula que se transmite al segundo medio en la interfaz.
    en: Fraction of particle velocity amplitude transmitted into the second medium at the interface.
  unidad_si: adimensional
  dimension: "[1]"
  is_vector: false
  components: null
  category: derived
  physical_role: transfer_ratio
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Creer que T_Z no puede superar 1; en amplitud de velocidad sí puede (hasta 2), aunque la energía siempre se conserva."
  typical_range: "0 a 2"
  sign_behavior:
    has_sign: false
    meaning:
      es: El coeficiente de transmisión es siempre positivo; la onda transmitida no invierte fase.
      en: The transmission coefficient is always positive; the transmitted wave does not invert phase.
  zero_behavior:
    allowed: false
    meaning:
      es: Transmisión cero implicaría reflexión total, que solo ocurre en el límite teórico de Z2 = 0 o Z1 → ∞.
      en: Zero transmission would imply total reflection, which only occurs in the theoretical limit of Z2 = 0 or Z1 → ∞.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, 2]"
  interpretation_role:
    primary_for:
    - eficiencia_transmision
    secondary_for:
    - diseno_acoplamiento
  graph_binding:
    channels:
    - eje_y_transmision
    - color_interfaz
  pedagogical_notes:
    es: "[[T_Z]] complementa a [[R_Z]] y satisface 1 + [[R_Z]] = [[T_Z]]. Un valor de [[T_Z]] cercano a 1 indica buena transferencia. Que [[T_Z]] pueda superar 1 sorprende al alumno, pero es consistente con la conservación de energía porque la potencia depende también de la impedancia del medio receptor."
    en: "[[T_Z]] complements [[R_Z]] and satisfies 1 + [[R_Z]] = [[T_Z]]. A value of [[T_Z]] close to 1 indicates good transfer. That [[T_Z]] can exceed 1 surprises students, but it is consistent with energy conservation because power also depends on the receiver medium's impedance."
`;export{e as default};
