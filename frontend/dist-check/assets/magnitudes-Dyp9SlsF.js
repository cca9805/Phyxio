const e=`magnitudes:

  - id: Q_lat
    symbol: "Q_{lat}"
    nombre:
      es: Calor latente total
      en: Total latent heat
    descripcion:
      es: Energía térmica intercambiada por una masa m de sustancia durante un cambio de estado completo a temperatura constante. Es positiva si la sustancia absorbe calor (fusión, vaporización, sublimación) y negativa si lo cede (solidificación, condensación, deposición). No produce variación de temperatura durante el proceso.
      en: Thermal energy exchanged by a mass m of substance during a complete phase change at constant temperature. It is positive if the substance absorbs heat (melting, vaporization, sublimation) and negative if it releases heat (solidification, condensation, deposition). It produces no temperature change during the process.
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - calor latente de fusión
      - calor latente de vaporización
      - balance calorimétrico con cambio de estado
    common_mistake: "Confundir el calor latente total Q_lat (extensivo, depende de m) con el calor latente específico L (intensivo, propiedad del material). Q_lat = m · L."
    typical_range: "Desde kJ para pequeñas muestras de laboratorio hasta GJ en aplicaciones industriales de condensación de vapor."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Q_lat > 0: la sustancia absorbe calor y experimenta una transición endotérmica (sólido → líquido, líquido → gas, sólido → gas). Q_lat < 0: la sustancia cede calor y experimenta una transición exotérmica (gas → líquido, líquido → sólido, gas → sólido)."
        en: "Q_lat > 0: the substance absorbs heat and undergoes an endothermic transition (solid → liquid, liquid → gas, solid → gas). Q_lat < 0: the substance releases heat and undergoes an exothermic transition (gas → liquid, liquid → solid, gas → solid)."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un calor latente total nulo implicaría masa nula o que no ha habido cambio de estado. En el contexto de este leaf, Q_lat siempre es distinto de cero cuando hay transición de fase real."
        en: "Zero total latent heat would imply zero mass or no actual phase change. In the context of this leaf, Q_lat is always nonzero when a real phase transition occurs."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any nonzero value"
    interpretation_role:
      primary_for:
        - cálculo de la energía necesaria para completar un cambio de estado
        - balance calorimétrico de sistemas con transición de fase
      secondary_for:
        - diseño de sistemas de almacenamiento de energía por calor latente
    graph_binding:
      channels:
        - eje_y_Q
    pedagogical_notes:
      es: "El concepto clave es que Q_lat se intercambia sin variación de temperatura. En la gráfica calor vs temperatura de un proceso de calentamiento continuo, Q_lat corresponde a los tramos horizontales (temperatura constante) mientras que el calor sensible corresponde a los tramos inclinados."
      en: "The key concept is that Q_lat is exchanged without temperature change. In a heat vs. temperature graph of a continuous heating process, Q_lat corresponds to the horizontal segments (constant temperature) while sensible heat corresponds to the inclined segments."

  - id: L
    symbol: "L"
    nombre:
      es: Calor latente específico
      en: Specific latent heat
    descripcion:
      es: Energía por unidad de masa necesaria para que una sustancia complete un cambio de estado a temperatura y presión constantes. Es una propiedad intensiva del material y del tipo de transición (fusión, vaporización, sublimación). También llamado calor latente másico.
      en: Energy per unit mass required for a substance to complete a phase change at constant temperature and pressure. It is an intensive property of the material and of the type of transition (melting, vaporization, sublimation). Also called specific latent heat.
    unidad_si: "J/kg"
    dimension: "[L^2 T^-2]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - calor latente de fusión
      - calor latente de vaporización
    common_mistake: "Usar el calor latente de fusión (L_f) cuando el problema involucra vaporización, o viceversa. Los valores difieren en un factor de 5 a 10 para la mayoría de los materiales."
    typical_range: "L_fusión agua: 334 000 J/kg; L_vaporización agua: 2 260 000 J/kg; L_fusión hierro: 272 000 J/kg."
    sign_behavior:
      has_sign: false
      meaning:
        es: "L es siempre positivo como propiedad del material. El signo de Q_lat se determina por la dirección de la transición: positivo si la sustancia absorbe calor, negativo si lo cede."
        en: "L is always positive as a material property. The sign of Q_lat is determined by the direction of the transition: positive if the substance absorbs heat, negative if it releases heat."
    zero_behavior:
      allowed: false
      meaning:
        es: "L nulo es físicamente imposible para cualquier transición de fase real en sustancias termodinámicamente estables."
        en: "Zero L is physically impossible for any real phase transition in thermodynamically stable substances."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - cálculo del calor latente total Q_lat para una masa dada
        - identificación del tipo de transición y del material
      secondary_for:
        - comparación de la eficiencia de distintos materiales de cambio de fase para almacenamiento de energía
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El calor latente de vaporización del agua (2 260 000 J/kg) es casi 7 veces mayor que el de fusión (334 000 J/kg). Esta diferencia explica por qué una quemadura por vapor de agua a 100 °C es mucho más grave que una quemadura por agua líquida a la misma temperatura: el vapor cede adicionalmente su calor de condensación al contactar con la piel."
      en: "The latent heat of vaporization of water (2 260 000 J/kg) is almost 7 times greater than its latent heat of fusion (334 000 J/kg). This difference explains why a steam burn at 100 °C is much more severe than a liquid water burn at the same temperature: the steam additionally releases its heat of condensation upon contact with the skin."

  - id: m
    symbol: "m"
    nombre:
      es: Masa de la sustancia
      en: Mass of the substance
    descripcion:
      es: Masa de la sustancia que experimenta el cambio de estado. Junto con el calor latente específico L, determina el calor latente total Q_lat que se intercambia durante la transición completa.
      en: Mass of the substance undergoing the phase change. Together with the specific latent heat L, it determines the total latent heat Q_lat exchanged during the complete transition.
    unidad_si: kg
    dimension: "[M]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: input_parameter
    used_in:
      - calor latente de fusión
      - calor latente de vaporización
    common_mistake: "Introducir la masa en gramos en lugar de kilogramos cuando L está en J/kg, obteniendo un calor latente total mil veces menor al correcto."
    typical_range: "Desde gramos en experimentos de laboratorio hasta toneladas en aplicaciones industriales de cambio de fase."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La masa es siempre positiva. El signo de Q_lat no viene de m sino de la dirección de la transición."
        en: "Mass is always positive. The sign of Q_lat does not come from m but from the direction of the transition."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una masa nula implica que no hay sustancia en transición y por tanto Q_lat = 0. Sin sentido físico en este contexto."
        en: "Zero mass implies no substance in transition and therefore Q_lat = 0. No physical meaning in this context."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - determinación del calor latente total de la muestra
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "En problemas de cambios de estado, m puede ser incógnita cuando se pregunta cuánta masa de una sustancia puede cambiar de estado con una energía disponible dada. Se despeja directamente como m = Q_lat / L."
      en: "In phase change problems, m can be the unknown when the question asks how much mass of a substance can change state with a given available energy. It is solved directly as m = Q_lat / L."

  - id: T_trans
    symbol: "T_{trans}"
    nombre:
      es: Temperatura de transición
      en: Transition temperature
    descripcion:
      es: Temperatura a la cual ocurre el cambio de estado a presión dada. Para la fusión es el punto de fusión, para la vaporización es el punto de ebullición. Durante el cambio de estado, la temperatura del sistema permanece constante e igual a T_trans mientras coexisten las dos fases.
      en: Temperature at which the phase change occurs at a given pressure. For melting it is the melting point, for vaporization it is the boiling point. During the phase change, the system temperature remains constant and equal to T_trans while both phases coexist.
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: []
    category: parameter
    physical_role: input_parameter
    used_in:
      - balance calorimétrico con cambio de estado
      - diagrama calor-temperatura de proceso completo
    common_mistake: "Suponer que la temperatura sigue aumentando durante el cambio de estado, confundiendo el proceso de cambio de estado con el de calentamiento sensible."
    typical_range: "0 °C (273.15 K) para fusión del agua a presión estándar; 100 °C (373.15 K) para ebullición del agua a presión estándar."
    sign_behavior:
      has_sign: false
      meaning:
        es: "T_trans es siempre positiva en kelvin. En grados Celsius puede ser negativa (por ejemplo, punto de fusión del mercurio: −38.8 °C)."
        en: "T_trans is always positive in kelvin. In degrees Celsius it can be negative (for example, melting point of mercury: −38.8 °C)."
    zero_behavior:
      allowed: true
      meaning:
        es: "T_trans = 0 °C (273.15 K) es el punto de fusión del agua a presión estándar. Es un valor perfectamente físico y el más frecuente en problemas de bachillerato."
        en: "T_trans = 0 °C (273.15 K) is the melting point of water at standard pressure. It is a perfectly physical value and the most common in secondary school problems."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞) en K"
    interpretation_role:
      primary_for:
        - determinación del tramo horizontal en la gráfica calor-temperatura
        - verificación de si el sistema alcanza la transición de fase o se queda antes
      secondary_for:
        - diseño de materiales de cambio de fase para aplicaciones de almacenamiento térmico
    graph_binding:
      channels:
        - eje_y_T
    pedagogical_notes:
      es: "En la gráfica de temperatura frente al calor suministrado, T_trans es el valor constante del tramo horizontal. Su duración horizontal (anchura en energía) es proporcional a Q_lat = m · L. Cuanto mayor L, más ancho el tramo horizontal."
      en: "In the graph of temperature vs. heat supplied, T_trans is the constant value of the horizontal segment. Its horizontal extent (width in energy) is proportional to Q_lat = m · L. The larger L, the wider the horizontal segment."
`;export{e as default};
