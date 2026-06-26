const e=`version: "2.0"
magnitudes:

  - id: E
    symbol: "E"
    nombre:
      es: Campo eléctrico
      en: Electric field
    unidad_si: "V/m"
    dimension: "M L T⁻³ I⁻¹"
    tipo: vector
    is_vector: true
    components: [Ex, Ey, Ez]
    category: fundamental
    physical_role: core_physical_quantity
    descripcion:
      es: "Magnitud vectorial que cuantifica la fuerza por unidad de carga positiva de prueba. Las líneas de campo indican su dirección y sentido; la densidad de líneas es proporcional a su módulo."
      en: "Vector quantity quantifying the force per unit positive test charge. Field lines indicate its direction and sense; line density is proportional to its magnitude."
    used_in:
      - definición de líneas de campo
      - cálculo del flujo eléctrico
      - ley de Gauss
    common_mistake: "Confundir el módulo de E con la fuerza sobre la carga; E es fuerza por unidad de carga, no fuerza absoluta."
    typical_range: "100 V/m (atmósfera) a 10⁷ V/m (junto a cargas puntuales pequeñas)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El módulo de E es siempre positivo; el sentido se indica con las líneas de campo orientadas."
        en: "The magnitude of E is always positive; the sense is indicated by the oriented field lines."
    zero_behavior:
      allowed: true
      meaning:
        es: "E nulo indica punto de equilibrio donde las contribuciones de todas las cargas se cancelan; no hay líneas de campo en ese punto."
        en: "Zero E indicates an equilibrium point where contributions from all charges cancel; no field lines pass through that point."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, +∞)"
    interpretation_role:
      primary_for: [lectura de densidad de líneas, dirección y sentido del campo]
      secondary_for: [cálculo de flujo, verificación de simetría]
    graph_binding:
      channels: [y_axis, color_intensity, arrow_direction]
    pedagogical_notes:
      es: "En el diagrama de líneas de campo, E se lee visualmente: mayor densidad de líneas implica mayor E. Es la única magnitud vectorial del leaf y la que da sentido a todas las demás."
      en: "In a field line diagram, E is read visually: higher line density implies larger E. It is the only vector magnitude of the leaf and gives meaning to all others."

  - id: rho_lineas
    symbol: "ρ_L"
    nombre:
      es: Densidad de líneas de campo
      en: Field line density
    unidad_si: "líneas/m²"
    dimension: "L⁻²"
    tipo: escalar
    is_vector: false
    components: []
    category: derived
    physical_role: derived
    descripcion:
      es: "Número de líneas de campo por unidad de área perpendicular al campo. Es proporcional al módulo de E."
      en: "Number of field lines per unit area perpendicular to the field. It is proportional to the magnitude of E."
    used_in:
      - lectura visual del diagrama de campo
      - comparación de intensidades relativas de E
    common_mistake: "Asumir que la densidad de líneas tiene un valor absoluto universal; depende del número de líneas elegido por el autor del diagrama."
    typical_range: "1 a 10⁴ líneas/m² (valor representacional dependiente del diagrama)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positiva; el sentido del campo se indica con las flechas de las líneas, no con la densidad."
        en: "Always positive; the field sense is indicated by the line arrows, not by the density."
    zero_behavior:
      allowed: true
      meaning:
        es: "Densidad nula en el punto neutro donde E es cero; no hay líneas en ese punto del espacio."
        en: "Zero density at the neutral point where E is zero; no lines pass through that point in space."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, +∞)"
    interpretation_role:
      primary_for: [estimación visual de la intensidad relativa del campo]
      secondary_for: [lectura del flujo proporcional]
    graph_binding:
      channels: [line_spacing, color_density]
    pedagogical_notes:
      es: "La densidad de líneas es la herramienta de lectura visual clave del leaf. Duplicar la densidad equivale aproximadamente a duplicar E en esa zona del diagrama."
      en: "Line density is the key visual reading tool of the leaf. Doubling the density approximately corresponds to doubling E in that region of the diagram."

  - id: phi_E
    symbol: "Φ_E"
    nombre:
      es: Flujo eléctrico
      en: Electric flux
    unidad_si: "V·m"
    dimension: "M L³ T⁻³ I⁻¹"
    tipo: escalar
    is_vector: false
    components: []
    category: derived
    physical_role: derived
    descripcion:
      es: "Integral del campo eléctrico sobre una superficie. Cuenta cuántas líneas de campo atraviesan la superficie, ponderadas por el coseno del ángulo con la normal."
      en: "Integral of the electric field over a surface. Counts how many field lines cross the surface, weighted by the cosine of the angle with the normal."
    used_in:
      - ley de Gauss
      - cálculo de capacitancia por simetría
      - diseño de blindajes
    common_mistake: "Calcular el flujo sin el factor coseno; si el campo es paralelo a la superficie, el flujo es cero aunque E sea intenso."
    typical_range: "10⁻³ a 10⁶ V·m según la geometría y la carga encerrada"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positivo si las líneas salen de la superficie (campo apunta hacia afuera); negativo si entran. El signo depende de la orientación elegida para la normal."
        en: "Positive if lines exit the surface (field points outward); negative if they enter. The sign depends on the chosen orientation of the normal."
    zero_behavior:
      allowed: true
      meaning:
        es: "Flujo nulo cuando el campo es tangente a la superficie (sin líneas que la atraviesen) o cuando la carga neta encerrada es cero."
        en: "Zero flux when the field is tangential to the surface (no lines cross it) or when the net enclosed charge is zero."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞)"
    interpretation_role:
      primary_for: [ley de Gauss, diseño de superficies gaussianas]
      secondary_for: [verificación de consistencia del diagrama de campo]
    graph_binding:
      channels: [area_under_curve, line_count_through_surface]
    pedagogical_notes:
      es: "El flujo es la magnitud cuantitativa que conecta las líneas de campo (visualización) con la ley de Gauss (herramienta de cálculo). Entender su dependencia del ángulo es esencial para el leaf."
      en: "Flux is the quantitative magnitude connecting field lines (visualization) with Gauss's law (computation tool). Understanding its angular dependence is essential for this leaf."

  - id: q_fuente
    symbol: "q"
    nombre:
      es: Carga fuente
      en: Source charge
    unidad_si: "C"
    dimension: "I T"
    tipo: escalar
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    descripcion:
      es: "Carga eléctrica que origina el campo. El número de líneas de campo que salen de una carga es proporcional a su valor absoluto. El signo determina si las líneas nacen (positiva) o terminan (negativa) en la carga."
      en: "Electric charge that creates the field. The number of field lines leaving a charge is proportional to its absolute value. The sign determines whether lines originate (positive) or terminate (negative) at the charge."
    used_in:
      - determinación del número de líneas por carga en un diagrama
      - ley de Gauss (carga encerrada)
      - ejemplo tipo examen del leaf
    common_mistake: "Asignar el mismo número de líneas a cargas de distinto valor absoluto; el número de líneas debe ser proporcional al módulo de la carga."
    typical_range: "10⁻¹² C (experimentos de gotitas) a 10⁻⁶ C (capacitores de laboratorio)"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positivo: las líneas salen de la carga (fuente de campo). Negativo: las líneas entran en la carga (sumidero de campo)."
        en: "Positive: lines leave the charge (field source). Negative: lines enter the charge (field sink)."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una carga nula no genera ni absorbe líneas de campo; no es una fuente útil en el diagrama."
        en: "A zero charge generates or absorbs no field lines; it is not a useful source in the diagram."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-∞, +∞) \\ {0}"
    interpretation_role:
      primary_for: [determinación del número de líneas, ley de Gauss]
      secondary_for: [interpretación del diagrama dipolar]
    graph_binding:
      channels: [line_count_at_source, source_marker]
    pedagogical_notes:
      es: "La carga fuente es el origen geométrico de las líneas de campo. Antes de trazar cualquier diagrama, se debe asignar un número de líneas proporcional al módulo de cada carga presente."
      en: "The source charge is the geometric origin of field lines. Before drawing any diagram, a number of lines proportional to the absolute value of each charge must be assigned."

  - id: angulo_campo
    symbol: "θ"
    nombre:
      es: Ángulo entre el campo y la normal
      en: Angle between field and normal
    unidad_si: "rad"
    dimension: "adimensional"
    tipo: escalar
    is_vector: false
    components: []
    category: parameter
    physical_role: derived
    descripcion:
      es: "Ángulo entre el vector campo eléctrico E y la normal exterior a una superficie. Determina la fracción del flujo que atraviesa esa superficie."
      en: "Angle between the electric field vector E and the outward normal to a surface. Determines the fraction of flux crossing that surface."
    used_in:
      - cálculo del flujo eléctrico
      - diseño de superficies gaussianas
      - interpretación de flujo nulo
    common_mistake: "Medir el ángulo respecto a la superficie en lugar de respecto a la normal; el error invierte o distorsiona el factor coseno."
    typical_range: "0 a π rad (0° a 180°)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El ángulo siempre se define entre 0 y π; el signo del flujo depende de si el campo apunta hacia dentro o hacia fuera de la superficie cerrada."
        en: "The angle is always defined between 0 and π; the sign of the flux depends on whether the field points inward or outward through the closed surface."
    zero_behavior:
      allowed: true
      meaning:
        es: "Ángulo nulo cuando el campo es perpendicular a la superficie: el flujo es máximo (todas las líneas la atraviesan)."
        en: "Zero angle when the field is perpendicular to the surface: flux is maximum (all lines cross it)."
    value_nature:
      kind: angle
      nonnegative_only: true
      expected_interval: "[0, π]"
    interpretation_role:
      primary_for: [cálculo del flujo eléctrico]
      secondary_for: [lectura de orientación de superficies en diagramas]
    graph_binding:
      channels: [angle_marker]
    pedagogical_notes:
      es: "El ángulo entre E y la normal es la trampa más frecuente en el cálculo de flujo. Siempre medir respecto a la normal exterior, no respecto al plano de la superficie."
      en: "The angle between E and the normal is the most frequent trap in flux calculations. Always measure with respect to the outward normal, not with respect to the surface plane."
`;export{e as default};
