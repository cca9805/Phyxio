const e=`version: 1\r
magnitudes:\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: Momento de inercia\r
    en: Moment of inertia\r
  descripcion:\r
    es: Magnitud que cuantifica la resistencia rotacional de un cuerpo rígido para una geometría y eje específicos.\r
    en: Quantity that quantifies the rotational resistance of a rigid body for a specific geometry and axis.\r
  unidad_si: kg·m²\r
  dimension: ML²\r
  is_vector: false\r
  components: null\r
  category:\r
    es: derivada\r
    en: derived\r
  physical_role:\r
    es: parámetro\r
    en: parameter\r
  used_in:\r
  - aro-fino\r
  - disco-macizo\r
  - esfera-maciza\r
  - barra-centro\r
  - barra-extremo\r
  - placa-rectangular\r
  common_mistake:\r
    es: Usar el momento de inercia respecto al centro de masas cuando el giro ocurre en un borde.\r
    en: Using the moment of inertia relative to the center of mass when rotation occurs at an edge.\r
  typical_range:\r
    es: Depende de la escala del objeto (desde $10^{-6}$ hasta $10^6\\text{ kg}\\cdot\\text{m}^2$).\r
    en: Depends on the object's scale (from $10^{-6}$ to $10^6\\text{ kg}\\cdot\\text{m}^2$).\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades y eje de referencia al usar I.\r
    en: Check units and reference axis when using I.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa\r
    en: Mass\r
  descripcion:\r
    es: Masa total del cuerpo rígido.\r
    en: Total mass of the rigid body.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category:\r
    es: fundamental\r
    en: fundamental\r
  physical_role:\r
    es: parámetro\r
    en: parameter\r
  used_in:\r
  - aro-fino\r
  - disco-macizo\r
  - esfera-maciza\r
  - barra-centro\r
  - barra-extremo\r
  - placa-rectangular\r
  common_mistake:\r
    es: Ignorar que la inercia depende de cómo se distribuye esta masa, no solo de su valor total.\r
    en: Ignoring that inertia depends on how this mass is distributed, not just its total value.\r
  typical_range:\r
    es: Variable según el sistema.\r
    en: Variable depending on the system.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades y eje de referencia al usar m.\r
    en: Check units and reference axis when using m.\r
- id: R\r
  symbol: R\r
  nombre:\r
    es: Radio\r
    en: Radius\r
  descripcion:\r
    es: Distancia característica desde el eje a la periferia en cuerpos con simetría circular (aros, discos, esferas).\r
    en: Characteristic distance from the axis to the periphery in bodies with circular symmetry (rings, disks, spheres).\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - aro-fino\r
  - disco-macizo\r
  - esfera-maciza\r
  common_mistake:\r
    es: Confundir el radio exterior con el radio medio en cilindros de pared gruesa.\r
    en: Confusing the outer radius with the mean radius in thick-walled cylinders.\r
  typical_range:\r
    es: $10^{-2}$ a $10^1\\text{ m}$.\r
    en: $10^{-2}$ to $10^1\\text{ m}$.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades y eje de referencia al usar R.\r
    en: Check units and reference axis when using R.\r
- id: L\r
  symbol: L\r
  nombre:\r
    es: Longitud\r
    en: Length\r
  descripcion:\r
    es: Dimensión principal de una barra o varilla larga y delgada.\r
    en: Main dimension of a long, thin rod or bar.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - barra-centro\r
  - barra-extremo\r
  common_mistake:\r
    es: Usar la longitud total cuando la fórmula requiere la mitad de la longitud.\r
    en: Using the total length when the formula requires half the length.\r
  typical_range:\r
    es: $10^{-1}$ a $10^1\\text{ m}$.\r
    en: $10^{-1}$ to $10^1\\text{ m}$.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades y eje de referencia al usar L.\r
    en: Check units and reference axis when using L.\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: Lado a\r
    en: Side a\r
  descripcion:\r
    es: Primera dimensión (ancho) de una placa rectangular.\r
    en: First dimension (width) of a rectangular plate.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - placa-rectangular\r
  common_mistake:\r
    es: Intercambiar los lados 'a' y 'b' en geometrías donde el eje no es central.\r
    en: Interchanging sides 'a' and 'b' in geometries where the axis is not central.\r
  typical_range:\r
    es: $10^{-1}$ a $10^1\\text{ m}$.\r
    en: $10^{-1}$ to $10^1\\text{ m}$.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades y eje de referencia al usar a.\r
    en: Check units and reference axis when using a.\r
- id: b\r
  symbol: b\r
  nombre:\r
    es: Lado b\r
    en: Side b\r
  descripcion:\r
    es: Segunda dimensión (alto) de una placa rectangular.\r
    en: Second dimension (height) of a rectangular plate.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: parameter\r
  used_in:\r
  - placa-rectangular\r
  common_mistake:\r
    es: Olvidar elevar al cuadrado ambos lados en la fórmula de la placa.\r
    en: Forgetting to square both sides in the plate formula.\r
  typical_range:\r
    es: $10^{-1}$ a $10^1\\text{ m}$.\r
    en: $10^{-1}$ to $10^1\\text{ m}$.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en este leaf.\r
      en: Used as a non-negative magnitude in this leaf.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El valor cero marca el caso limite sin efecto rotacional asociado.\r
      en: Zero marks the limiting case with no associated rotational effect.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - comprobacion-de-coherencia\r
  graph_binding:\r
    channels: []\r
  pedagogical_notes:\r
    es: Verificar unidades y eje de referencia al usar b.\r
    en: Check units and reference axis when using b.\r
`;export{e as default};
