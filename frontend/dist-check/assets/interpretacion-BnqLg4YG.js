const e=`version: "2.0"
id: interp-campo-magnetico
leaf_id: campo-magnetico

nombre:
  es: Interpretación del campo magnético
  en: Magnetic field interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: magnetismo
  parent_id: magnetismo
  ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/campo-magnetico

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
    en: Interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority:
      - summary
      - likely_errors

dependencies:
  formulas:
    - fuerza_lorentz_magnetica
    - campo_hilo_recto
  magnitudes:
    - B
    - F_m
    - q
    - v
    - mu_0
    - I
    - r

global_context:
  physical_domain:
    es: Electrodinámica clásica en el vacío o en medios lineales homogéneos; cargas y corrientes estacionarias.
    en: Classical electrodynamics in vacuum or homogeneous linear media; stationary charges and currents.
  axis_convention:
    es: La regla de la mano derecha relaciona el sentido de la corriente I con el sentido de circulación del campo B alrededor del hilo.
    en: The right-hand rule relates the direction of current I to the circulation direction of field B around the wire.
  standard_assumptions:
    - Hilo recto muy largo comparado con la distancia de evaluación
    - Vacío o permitividad y permeabilidad constantes
    - Corrientes estacionarias (sin variación temporal)
  standard_warnings:
    - "El modelo falla para r menor que el radio del conductor"
    - "Para hilos finitos usar la ley de Biot-Savart con integración"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen del campo
      en: Field summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia física
      en: Physical coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del gráfico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores frecuentes
      en: Frequent errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:
  B:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Intensidad del campo magnético en el punto evaluado."
      en: "Magnetic field strength at the evaluated point."
    summary_rules:
      - id: B_summary_high
        when: "B > 1"
        status: warning
        text:
          es: "[[B]] superior a 1 T es un campo muy intenso, típico de imanes superconductores. Verificar la corriente fuente y la distancia introducidas."
          en: "[[B]] above 1 T is a very intense field, typical of superconducting magnets. Check the source current and distance entered."
      - id: B_summary_zero
        when: "B == 0"
        status: ok
        text:
          es: "[[B]] nulo: el punto evaluado es un punto de equilibrio magnético o está en una zona de cancelación entre fuentes opuestas."
          en: "Zero [[B]]: the evaluated point is a magnetic equilibrium point or lies in a cancellation zone between opposing sources."
      - id: B_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B]] resume la intensidad del campo magnético: indica cuántos teslas actúan en ese punto del espacio, es decir, qué fuerza experimentaría una carga con velocidad unitaria perpendicular al campo."
          en: "[[B]] summarizes the magnetic field strength: it indicates how many teslas act at that point in space, i.e., what force a unit-velocity charge perpendicular to the field would experience."
    physical_reading_rules:
      - id: B_reading_force
        when: "B > 0"
        status: ok
        text:
          es: "Una carga [[q]] moviéndose con velocidad [[v]] perpendicular al campo experimentaría una fuerza de módulo |q|·v·[[B]]. La dirección de esa fuerza es perpendicular tanto a [[v]] como a [[B]]."
          en: "A charge [[q]] moving with velocity [[v]] perpendicular to the field would experience a force of magnitude |q|·v·[[B]]. The direction of that force is perpendicular to both [[v]] and [[B]]."
      - id: B_reading_default
        when: "true"
        status: ok
        text:
          es: "[[B]] es la magnitud que cuantifica la influencia magnética del espacio. Cuanto mayor es [[B]], más intensa es la desviación de cualquier carga en movimiento que pase por ese punto."
          en: "[[B]] is the quantity that quantifies the magnetic influence of space. The larger [[B]], the more intense the deflection of any moving charge passing through that point."
    coherence_rules:
      - id: B_coherence_positive
        when: "B >= 0"
        status: ok
        text:
          es: "El módulo de [[B]] es no negativo: coherente."
          en: "The magnitude of [[B]] is non-negative: coherent."
      - id: B_coherence_negative
        when: "B < 0"
        status: error
        text:
          es: "El módulo de [[B]] no puede ser negativo. Revisar los valores de [[I]] y [[r]] introducidos."
          en: "The magnitude of [[B]] cannot be negative. Check the values of [[I]] and [[r]] entered."
      - id: B_coherence_default
        when: "true"
        status: ok
        text:
          es: "Valor de [[B]] dentro del rango esperado para electrodinámica clásica."
          en: "Value of [[B]] within the expected range for classical electrodynamics."
    model_validity_rules:
      - id: B_validity_high
        when: "B > 10"
        status: warning
        text:
          es: "Campos superiores a 10 T requieren tecnología superconductora. En condiciones de laboratorio ordinarias, verificar la coherencia de las entradas."
          en: "Fields above 10 T require superconducting technology. Under ordinary laboratory conditions, verify the consistency of inputs."
      - id: B_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de hilo recto infinito es válido para [[r]] mucho menor que la longitud del conductor y mayor que su radio."
          en: "The infinite straight-wire model is valid for [[r]] much smaller than the conductor length and larger than its radius."
    graph_rules:
      - id: B_graph_decay
        when: "B > 0"
        status: ok
        text:
          es: "En la gráfica [[B]] vs [[r]], este punto cae sobre la curva hiperbólica 1/r. Moverse hacia la derecha (mayor [[r]]) mueve el punto hacia abajo de forma inversamente proporcional."
          en: "On the [[B]] vs [[r]] graph, this point falls on the 1/r hyperbolic curve. Moving right (larger [[r]]) moves the point downward inversely proportionally."
      - id: B_graph_default
        when: "true"
        status: ok
        text:
          es: "La curva B vs r del hilo recto es menos abrupta que la curva E vs r de una carga puntual: decae con 1/r en lugar de 1/r²."
          en: "The B vs r curve of the straight wire is less steep than the E vs r curve of a point charge: it decays as 1/r instead of 1/r²."
    likely_errors:
      - id: B_error_squared
        when: "true"
        status: warning
        text:
          es: "Error frecuente: elevar [[r]] al cuadrado en la fórmula del hilo recto. El campo de un hilo recto decae con 1/r, no con 1/r²."
          en: "Common mistake: squaring [[r]] in the straight-wire formula. The field of a straight wire decays as 1/r, not 1/r²."
      - id: B_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[B]] con [[F_m]]. El campo existe independientemente de si hay cargas en movimiento presentes."
          en: "Common mistake: confusing [[B]] with [[F_m]]. The field exists independently of whether moving charges are present."
    next_step_rules:
      - id: B_next_force
        when: "B > 0"
        status: ok
        text:
          es: "Con [[B]] calculado, aplicar la fuerza de Lorentz para obtener [[F_m]] sobre cualquier carga [[q]] en movimiento con velocidad [[v]]."
          en: "With [[B]] computed, apply the Lorentz force to get [[F_m]] on any moving charge [[q]] with velocity [[v]]."
      - id: B_next_default
        when: "true"
        status: ok
        text:
          es: "El siguiente paso natural es calcular el flujo magnético integrando [[B]] sobre una superficie, o estudiar la inducción electromagnética."
          en: "The natural next step is to compute the magnetic flux by integrating [[B]] over a surface, or to study electromagnetic induction."

  F_m:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Fuerza magnética sobre la carga en movimiento evaluada."
      en: "Magnetic force on the evaluated moving charge."
    summary_rules:
      - id: Fm_summary_zero_angle
        when: "F_m == 0"
        status: ok
        text:
          es: "[[F_m]] nula: la velocidad [[v]] es paralela o antiparalela a [[B]], o la carga [[q]] es nula."
          en: "Zero [[F_m]]: velocity [[v]] is parallel or antiparallel to [[B]], or charge [[q]] is zero."
      - id: Fm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[F_m]] resume la fuerza magnética sobre la carga. Al ser siempre perpendicular a [[v]], no modifica la rapidez de la partícula sino solo su dirección de movimiento."
          en: "[[F_m]] summarizes the magnetic force on the charge. Being always perpendicular to [[v]], it changes the particle's direction but not its speed."
    physical_reading_rules:
      - id: Fm_reading_default
        when: "true"
        status: ok
        text:
          es: "[[F_m]] curva la trayectoria de la partícula sin acelerar ni desacelerar. Para una partícula de masa conocida, dividir [[F_m]] por esa masa da la aceleración centrípeta."
          en: "[[F_m]] curves the particle trajectory without accelerating or decelerating it. For a particle of known mass, dividing [[F_m]] by that mass gives the centripetal acceleration."
    coherence_rules:
      - id: Fm_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[F_m]] debería ser coherente con el producto |q|·v·B·sin(θ). Si el ángulo θ entre [[v]] y [[B]] no es 90°, el resultado es menor que el máximo posible."
          en: "[[F_m]] should be consistent with the product |q|·v·B·sin(θ). If the angle θ between [[v]] and [[B]] is not 90°, the result is less than the maximum possible."
    model_validity_rules:
      - id: Fm_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de fuerza de Lorentz es válido para v << c. Para velocidades relativistas, la masa efectiva aumenta y la fuerza centrípeta real es mayor."
          en: "The Lorentz force model is valid for v << c. For relativistic speeds, the effective mass increases and the actual centripetal force is larger."
    graph_rules:
      - id: Fm_graph_default
        when: "true"
        status: ok
        text:
          es: "[[F_m]] no aparece directamente en la gráfica B vs r, pero se obtiene multiplicando el valor leído en el eje y por |q|·v·sin(θ)."
          en: "[[F_m]] does not appear directly on the B vs r graph, but is obtained by multiplying the y-axis value by |q|·v·sin(θ)."
    likely_errors:
      - id: Fm_error_work
        when: "true"
        status: warning
        text:
          es: "Error frecuente: calcular el trabajo realizado por [[F_m]]. La fuerza magnética nunca realiza trabajo porque siempre es perpendicular al desplazamiento."
          en: "Common mistake: computing work done by [[F_m]]. The magnetic force never does work because it is always perpendicular to the displacement."
    next_step_rules:
      - id: Fm_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[F_m]] calculada, aplicar la segunda ley de Newton para obtener el radio de curvatura de la trayectoria."
          en: "With [[F_m]] computed, apply Newton's second law to get the radius of curvature of the trajectory."

  q:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Carga eléctrica de la partícula que interactúa con el campo magnético."
      en: "Electric charge of the particle interacting with the magnetic field."
    summary_rules:
      - id: q_summary_positive
        when: "q > 0"
        status: ok
        text:
          es: "[[q]] positiva: la fuerza magnética sigue el sentido del producto vectorial v × B."
          en: "Positive [[q]]: the magnetic force follows the direction of the cross product v × B."
      - id: q_summary_negative
        when: "q < 0"
        status: ok
        text:
          es: "[[q]] negativa: la fuerza magnética es opuesta al producto vectorial v × B."
          en: "Negative [[q]]: the magnetic force is opposite to the cross product v × B."
      - id: q_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q]] determina tanto la magnitud (a través de |q|) como el sentido de [[F_m]]."
          en: "[[q]] determines both the magnitude (through |q|) and the direction of [[F_m]]."
    physical_reading_rules:
      - id: q_reading_default
        when: "true"
        status: ok
        text:
          es: "Partículas con [[q]] de signo opuesto en el mismo campo [[B]] se curvan en sentidos contrarios. Esto es la base del espectrómetro de masas y del ciclotrón."
          en: "Particles with opposite-sign [[q]] in the same field [[B]] curve in opposite directions. This is the basis of the mass spectrometer and the cyclotron."
    coherence_rules:
      - id: q_coherence_zero
        when: "q == 0"
        status: error
        text:
          es: "[[q]] nula implica [[F_m]] nula; la partícula no interactúa con el campo magnético."
          en: "Zero [[q]] implies zero [[F_m]]; the particle does not interact with the magnetic field."
      - id: q_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q]] no nula: interacción magnética bien definida."
          en: "Non-zero [[q]]: magnetic interaction well defined."
    model_validity_rules:
      - id: q_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para partículas puntuales clásicas. Para electrones en orbitales atómicos se requiere mecánica cuántica."
          en: "The model is valid for classical point particles. For electrons in atomic orbitals quantum mechanics is required."
    graph_rules:
      - id: q_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q]] no aparece en la gráfica B vs r; su efecto se manifiesta en [[F_m]]."
          en: "[[q]] does not appear on the B vs r graph; its effect manifests in [[F_m]]."
    likely_errors:
      - id: q_error_static
        when: "true"
        status: warning
        text:
          es: "Error frecuente: aplicar la fuerza magnética a una carga en reposo. Solo las cargas en movimiento interactúan con [[B]]."
          en: "Common mistake: applying the magnetic force to a charge at rest. Only moving charges interact with [[B]]."
    next_step_rules:
      - id: q_next_default
        when: "true"
        status: ok
        text:
          es: "Combinar [[q]] con la velocidad [[v]] y el campo [[B]] para calcular el radio de curvatura de la trayectoria circular."
          en: "Combine [[q]] with velocity [[v]] and field [[B]] to compute the radius of curvature of the circular trajectory."

  v:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Rapidez de la carga que determina la magnitud de la fuerza magnética."
      en: "Speed of the charge that determines the magnetic force magnitude."
    summary_rules:
      - id: v_summary_zero
        when: "v == 0"
        status: error
        text:
          es: "[[v]] nula: la carga está en reposo y no experimenta fuerza magnética alguna."
          en: "Zero [[v]]: the charge is at rest and experiences no magnetic force whatsoever."
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v]] determina junto con [[B]] y el ángulo θ la magnitud de [[F_m]]. A mayor rapidez, mayor fuerza de desviación."
          en: "[[v]] together with [[B]] and angle θ determines the magnitude of [[F_m]]. Greater speed means greater deflection force."
    physical_reading_rules:
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "Duplicar [[v]] duplica [[F_m]] y también duplica el radio de curvatura para una partícula de masa dada. La trayectoria circular es más grande pero la rapidez se conserva."
          en: "Doubling [[v]] doubles [[F_m]] and also doubles the radius of curvature for a given-mass particle. The circular trajectory is larger but the speed is conserved."
    coherence_rules:
      - id: v_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[v]] no negativa: coherente. Verificar que [[v]] sea menor que c = 3×10⁸ m/s para que el modelo clásico sea válido."
          en: "Non-negative [[v]]: coherent. Verify that [[v]] is below c = 3×10⁸ m/s for the classical model to be valid."
    model_validity_rules:
      - id: v_validity_relativistic
        when: "v > 3e7"
        status: warning
        text:
          es: "[[v]] superior al 10% de la velocidad de la luz. Los efectos relativistas superan el 1%; la masa efectiva aumenta y la fuerza real difiere del resultado clásico."
          en: "[[v]] exceeding 10% of the speed of light. Relativistic effects exceed 1%; the effective mass increases and the actual force differs from the classical result."
      - id: v_validity_default
        when: "true"
        status: ok
        text:
          es: "[[v]] en rango no relativista: el modelo clásico de la fuerza de Lorentz es aplicable."
          en: "[[v]] in non-relativistic range: the classical Lorentz force model is applicable."
    graph_rules:
      - id: v_graph_default
        when: "true"
        status: ok
        text:
          es: "[[v]] no aparece directamente en la gráfica B vs r; su efecto se ve en [[F_m]]."
          en: "[[v]] does not appear directly on the B vs r graph; its effect shows in [[F_m]]."
    likely_errors:
      - id: v_error_angle
        when: "true"
        status: warning
        text:
          es: "Error frecuente: no considerar el ángulo entre [[v]] y [[B]]. Si [[v]] es paralela a [[B]], la fuerza es cero sin importar la rapidez."
          en: "Common mistake: not considering the angle between [[v]] and [[B]]. If [[v]] is parallel to [[B]], the force is zero regardless of speed."
    next_step_rules:
      - id: v_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[v]] para calcular el radio de curvatura r = mv/(|q|·B) y describir la trayectoria circular completa."
          en: "Use [[v]] to compute the radius of curvature r = mv/(|q|·B) and describe the complete circular trajectory."

  I:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Corriente eléctrica que genera el campo magnético del hilo recto."
      en: "Electric current generating the straight-wire magnetic field."
    summary_rules:
      - id: I_summary_positive
        when: "I > 0"
        status: ok
        text:
          es: "[[I]] positiva: el campo circula en sentido antihorario visto desde la dirección de la corriente (regla de la mano derecha)."
          en: "Positive [[I]]: the field circulates counterclockwise when viewed from the current direction (right-hand rule)."
      - id: I_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I]] determina linealmente la intensidad de [[B]]: duplicar la corriente duplica el campo en todo punto."
          en: "[[I]] linearly determines [[B]] strength: doubling the current doubles the field everywhere."
    physical_reading_rules:
      - id: I_reading_default
        when: "true"
        status: ok
        text:
          es: "El campo magnético de un hilo recto es proporcional a [[I]] e inversamente proporcional a [[r]]. Un cable doméstico de 10 A genera a 1 cm un campo de aproximadamente 200 μT, unas cuatro veces el campo terrestre."
          en: "The magnetic field of a straight wire is proportional to [[I]] and inversely proportional to [[r]]. A domestic cable of 10 A generates at 1 cm a field of about 200 μT, roughly four times the Earth's field."
    coherence_rules:
      - id: I_coherence_zero
        when: "I == 0"
        status: error
        text:
          es: "[[I]] nula no genera campo magnético. Revisar los datos de entrada."
          en: "Zero [[I]] generates no magnetic field. Check input data."
      - id: I_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[I]] no nula: campo bien definido."
          en: "Non-zero [[I]]: field well defined."
    model_validity_rules:
      - id: I_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de hilo infinito es válido para [[r]] mucho menor que la longitud del conductor. Para hilos de longitud finita, la fórmula sobreestima el campo cerca de los extremos."
          en: "The infinite-wire model is valid for [[r]] much smaller than the conductor length. For finite wires, the formula overestimates the field near the ends."
    graph_rules:
      - id: I_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica B vs r, [[I]] escala verticalmente la curva: aumentarla sube toda la hipérbola; reducirla la baja."
          en: "On the B vs r graph, [[I]] scales the curve vertically: increasing it raises the entire hyperbola; decreasing it lowers it."
    likely_errors:
      - id: I_error_direction
        when: "true"
        status: warning
        text:
          es: "Error frecuente: ignorar el sentido de [[I]] al determinar la dirección del campo. El sentido de [[I]] define completamente la orientación circular de [[B]] alrededor del hilo."
          en: "Common mistake: ignoring the direction of [[I]] when determining the field direction. The direction of [[I]] completely defines the circular orientation of [[B]] around the wire."
    next_step_rules:
      - id: I_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar la fuerza entre dos hilos paralelos: si ambos conducen corriente en el mismo sentido se atraen; si en sentidos opuestos se repelen."
          en: "Explore the force between two parallel wires: if both carry current in the same direction they attract; if in opposite directions they repel."

  r:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Distancia perpendicular desde el hilo conductor al punto de evaluación del campo."
      en: "Perpendicular distance from the conductor to the field evaluation point."
    summary_rules:
      - id: r_summary_small
        when: "r < 1e-3"
        status: warning
        text:
          es: "[[r]] menor que 1 mm puede estar dentro del conductor real. El modelo de hilo recto no es válido en el interior del conductor."
          en: "[[r]] less than 1 mm may be inside the real conductor. The straight-wire model is not valid inside the conductor."
      - id: r_summary_default
        when: "true"
        status: ok
        text:
          es: "[[r]] resume la separación geométrica al hilo. Duplicar [[r]] divide [[B]] exactamente a la mitad, una dependencia 1/r lineal, más suave que la 1/r² del campo eléctrico."
          en: "[[r]] summarizes the geometric separation from the wire. Doubling [[r]] halves [[B]] exactly, a linear 1/r dependence, softer than the 1/r² of the electric field."
    physical_reading_rules:
      - id: r_reading_default
        when: "true"
        status: ok
        text:
          es: "La dependencia 1/r del campo de hilo recto es consecuencia de la geometría cilíndrica: la superficie que rodea al hilo crece linealmente con [[r]], no cuadráticamente como la esfera de carga puntual."
          en: "The 1/r dependence of the straight-wire field is a consequence of cylindrical geometry: the surface surrounding the wire grows linearly with [[r]], not quadratically like the sphere of a point charge."
    coherence_rules:
      - id: r_coherence_positive
        when: "r > 0"
        status: ok
        text:
          es: "[[r]] positiva: coherente."
          en: "Positive [[r]]: coherent."
      - id: r_coherence_zero
        when: "r <= 0"
        status: error
        text:
          es: "[[r]] debe ser estrictamente positiva. El campo diverge para r tendiendo a cero en el modelo de hilo recto."
          en: "[[r]] must be strictly positive. The field diverges as r tends to zero in the straight-wire model."
    model_validity_rules:
      - id: r_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para r mayor que el radio del conductor y mucho menor que la longitud del hilo. Para r comparable a la longitud del hilo, usar la ley de Biot-Savart integrada."
          en: "The model is valid for r larger than the conductor radius and much smaller than the wire length. For r comparable to the wire length, use integrated Biot-Savart law."
    graph_rules:
      - id: r_graph_xaxis
        when: "true"
        status: ok
        text:
          es: "[[r]] es la variable del eje horizontal en la gráfica B vs r. El punto calculado se ubica en la abscisa correspondiente a [[r]], sobre la curva 1/r."
          en: "[[r]] is the horizontal-axis variable on the B vs r graph. The computed point is located at the abscissa corresponding to [[r]], on the 1/r curve."
    likely_errors:
      - id: r_error_squared
        when: "true"
        status: warning
        text:
          es: "Error frecuente: elevar [[r]] al cuadrado en la fórmula del hilo recto. La dependencia correcta es 1/r para el hilo, no 1/r² como en el campo eléctrico de carga puntual."
          en: "Common mistake: squaring [[r]] in the straight-wire formula. The correct dependence is 1/r for the wire, not 1/r² as in the point-charge electric field."
    next_step_rules:
      - id: r_next_default
        when: "true"
        status: ok
        text:
          es: "Variar [[r]] para explorar cómo cambia [[B]] y comparar con la gráfica 1/r. Identificar el punto donde [[B]] alcanza la mitad de su valor actual."
          en: "Vary [[r]] to explore how [[B]] changes and compare with the 1/r graph. Identify the point where [[B]] reaches half its current value."

cross_checks:
  - "Si B calculado por fuerza de Lorentz y B calculado por campo de hilo difieren, verificar coherencia de q, v, F_m, I y r."

error_patterns:
  - id: ep_units
    description:
      es: "Mezcla de unidades: distancia en cm en lugar de m produce un campo 100 veces mayor."
      en: "Unit mixing: distance in cm instead of m yields a field 100 times larger."
  - id: ep_r_vs_r2
    description:
      es: "Confundir 1/r (hilo recto) con 1/r² (carga puntual): error sistemático que subestima la intensidad a distancias cercanas."
      en: "Confusing 1/r (straight wire) with 1/r² (point charge): systematic error underestimating strength at close distances."

graph_binding:
  type: Coord
  x_variable: r
  y_variable: B
  curve_family: "1/r"

mini_graph:
  enabled: true
  preferred_type: Coord
  x_label:
    es: "r (m)"
    en: "r (m)"
  y_label:
    es: "B (T)"
    en: "B (T)"

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
