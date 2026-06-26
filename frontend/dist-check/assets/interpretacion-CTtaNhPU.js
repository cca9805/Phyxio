const e=`version: 2
id: interpretacion-coeficiente-de-restitucion
leaf_id: coeficiente-de-restitucion
nombre:
  es: Interpretación del Coeficiente de Restitución
  en: Interpretation of the Coefficient of Restitution
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: colisiones
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion
dependencies:
  formulas:
    - e
    - rango_e
    - v1f_from_e
    - vrel_f
    - perdida_energia
    - e_desde_alturas
    - altura_rebote
    - mu
  magnitudes:
    - e
    - v1i
    - v2i
    - v1f
    - v2f
    - m1
    - m2
    - mu
    - DeltaK
    - h0
    - hf
    - hn
    - n
    - vrel_f
output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
result_blocks:
  summary:
    title:
      es: Resumen del Impacto
      en: Impact Summary
  physical_reading:
    title:
      es: Lectura Causal de la Colisión
      en: Causal Collision Reading
  coherence:
    title:
      es: Validación de Coherencia Interna
      en: Internal Coherence Validation
  model_validity:
    title:
      es: Auditoría del Dominio de Validez
      en: Validity Domain Audit
  graph_reading:
    title:
      es: Diagnóstico de Visualización
      en: Visualization Diagnosis
  likely_errors:
    title:
      es: Errores Conceptuales Frecuentes
      en: Common Conceptual Errors
  next_step:
    title:
      es: Progresión Didáctica
      en: Didactic Progression
targets:
  e:
    summary_rules:
      - id: e_summary_classification
        when: "true"
        status: info
        text:
          es: "El coeficiente de restitución e indica qué fracción de la velocidad relativa de acercamiento sobrevive al impacto como velocidad relativa de separación; resume en un solo número adimensional toda la física del contacto."
          en: "The coefficient of restitution e indicates what fraction of the approach relative speed survives the impact as separation relative speed; it summarizes all the contact physics in a single dimensionless number."
      - id: e_summary_spectrum
        when: "true"
        status: info
        text:
          es: "El valor de e clasifica el choque dentro del espectro elástico: e igual a 1 significa colisión perfectamente elástica sin pérdida de energía cinética; e igual a 0 significa colisión totalmente inelástica donde los cuerpos quedan unidos; valores intermedios indican choques parcialmente inelásticos."
          en: "The value of e classifies the collision within the elastic spectrum: e equal to 1 means a perfectly elastic collision with no kinetic energy loss; e equal to 0 means a perfectly inelastic collision where bodies stick together; intermediate values indicate partially inelastic collisions."
    physical_reading_rules:
      - id: e_physical_causal
        when: "true"
        status: info
        text:
          es: "Porque e mide la eficiencia de devolución de energía elástica del material, un e alto indica que el material almacena la deformación y la devuelve casi por completo; un e bajo indica que la energía se disipa en calor, sonido y deformación plástica permanente. Por tanto, e depende del par de materiales en contacto, de la geometría de la superficie y, en materiales reales, de la velocidad de impacto."
          en: "Because e measures the elastic energy return efficiency of the material, a high e indicates the material stores the deformation and returns it almost completely; a low e indicates the energy is dissipated into heat, sound, and permanent plastic deformation. Therefore, e depends on the pair of materials in contact, the surface geometry, and in real materials, the impact speed."
      - id: e_physical_energy_link
        when: "true"
        status: info
        text:
          es: "La conexión energética es directa: la fracción de energía cinética relativa perdida es exactamente (1 - e²). Esto significa que e no escala linealmente con la energía; una reducción de e de 1.0 a 0.7 implica una pérdida del 51% de la energía cinética relativa, no del 30%."
          en: "The energy connection is direct: the fraction of relative kinetic energy lost is exactly (1 - e²). This means e does not scale linearly with energy; a reduction of e from 1.0 to 0.7 implies a 51% loss of relative kinetic energy, not 30%."
    coherence_rules:
      - id: e_coherence_range
        when: "e >= 0 and e <= 1"
        status: ok
        text:
          es: "El valor de e está dentro del rango físico ordinario [0, 1], lo que indica un choque sin fuentes internas de energía."
          en: "The value of e is within the ordinary physical range [0, 1], indicating a collision without internal energy sources."
      - id: e_coherence_superelastic
        when: "e > 1"
        status: warning
        text:
          es: "e mayor que 1 indica una colisión superelástica: los cuerpos se separan más rápido de lo que se acercaron. Verifica si hay una fuente interna de energía (explosión, resorte precargado) o si hay un error de signos en las velocidades."
          en: "e greater than 1 indicates a superelastic collision: the bodies separate faster than they approached. Verify if there is an internal energy source (explosion, preloaded spring) or a sign error in the velocities."
      - id: e_coherence_negative
        when: "e < 0"
        status: error
        text:
          es: "e negativo es físicamente imposible en un choque ordinario; revisa el orden de las velocidades en el numerador y denominador de la definición."
          en: "Negative e is physically impossible in an ordinary collision; check the velocity order in the numerator and denominator of the definition."
    model_validity_rules:
      - id: e_validity_constant
        when: "true"
        status: ok
        text:
          es: "El modelo asume e constante durante el impacto. Esta aproximación deja de valer cuando la velocidad de impacto es tan alta que provoca deformaciones plásticas masivas o fragmentación, o cuando la temperatura del material cambia significativamente entre ensayos sucesivos."
          en: "The model assumes constant e during impact. This approximation breaks down when the impact speed is so high that it causes massive plastic deformations or fragmentation, or when the material temperature changes significantly between successive tests."
    graph_rules:
      - id: e_graph_spectrum
        when: "true"
        status: info
        text:
          es: "En el gráfico, e define la pendiente de la recta que relaciona la velocidad relativa de separación con la velocidad relativa de acercamiento. Una pendiente de 45 grados corresponde a e igual a 1 (elástico perfecto); una pendiente nula corresponde a e igual a 0 (totalmente inelástico)."
          en: "In the graph, e defines the slope of the line relating the separation relative speed to the approach relative speed. A 45-degree slope corresponds to e equal to 1 (perfectly elastic); zero slope corresponds to e equal to 0 (perfectly inelastic)."
    likely_errors:
      - id: e_error_sign_convention
        when: "true"
        status: warning
        text:
          es: "Error frecuente: invertir el orden de las velocidades en la definición. El numerador debe contener la velocidad relativa de separación (v2f - v1f) y el denominador la de acercamiento (v1i - v2i). Intercambiarlos produce un e con signo incorrecto."
          en: "Frequent error: reversing the velocity order in the definition. The numerator must contain the separation relative velocity (v2f - v1f) and the denominator the approach one (v1i - v2i). Swapping them produces an e with incorrect sign."
    next_step_rules:
      - id: e_next_connect_energy
        when: "true"
        status: tip
        text:
          es: "Ahora calcula la pérdida de energía cinética con la fórmula perdida_energia usando la masa reducida mu y la velocidad relativa de acercamiento. Compara el resultado con la energía cinética total para evaluar la severidad del impacto."
          en: "Now calculate the kinetic energy loss with the perdida_energia formula using the reduced mass mu and the approach relative speed. Compare the result with the total kinetic energy to evaluate the impact severity."

  v2f:
    summary_rules:
      - id: v2f_summary_result
        when: "true"
        status: info
        text:
          es: "La velocidad final v2f del cuerpo 2 describe el estado cinemático de salida tras el contacto; depende de e y de las velocidades iniciales de ambos cuerpos a través de la ecuación de restitución."
          en: "The final velocity v2f of body 2 describes the output kinematic state after contact; it depends on e and the initial velocities of both bodies through the restitution equation."
    physical_reading_rules:
      - id: v2f_physical_causal
        when: "true"
        status: info
        text:
          es: "v2f aumenta cuando e crece porque el choque devuelve más velocidad relativa al cuerpo 2. Si e es 1, v2f alcanza el máximo rebote posible; si e es 0, v2f iguala a v1f y los cuerpos salen juntos."
          en: "v2f increases when e grows because the collision returns more relative speed to body 2. If e is 1, v2f reaches the maximum possible rebound; if e is 0, v2f equals v1f and the bodies exit together."
    coherence_rules:
      - id: v2f_coherence_momentum
        when: "true"
        status: ok
        text:
          es: "Verifica que el momento lineal total se conserve: m1*v1i + m2*v2i debe ser igual a m1*v1f + m2*v2f."
          en: "Verify that total linear momentum is conserved: m1*v1i + m2*v2i must equal m1*v1f + m2*v2f."
    model_validity_rules:
      - id: v2f_validity_regime
        when: "true"
        status: ok
        text:
          es: "El valor de v2f es válido bajo las hipótesis de cuerpos rígidos y marco inercial."
          en: "The value of v2f is valid under the assumptions of rigid bodies and inertial frame."
    graph_rules:
      - id: v2f_graph_axis
        when: "true"
        status: info
        text:
          es: "En el gráfico de velocidades finales vs e, v2f crece linealmente con e para velocidades iniciales fijas."
          en: "In the final velocities vs e graph, v2f grows linearly with e for fixed initial velocities."
    likely_errors:
      - id: v2f_error_swap
        when: "true"
        status: warning
        text:
          es: "Confundir v2f con v1f es un error habitual; asegúrate de que el subíndice coincide con el cuerpo correspondiente."
          en: "Confusing v2f with v1f is a common error; make sure the subscript matches the corresponding body."
    next_step_rules:
      - id: v2f_next_energy
        when: "true"
        status: tip
        text:
          es: "Calcula la energía cinética final de cada cuerpo para completar el balance energético del sistema."
          en: "Calculate the final kinetic energy of each body to complete the system's energy balance."

  v1f:
    summary_rules:
      - id: v1f_summary_result
        when: "true"
        status: info
        text:
          es: "La velocidad final v1f del cuerpo 1 resume cómo responde el cuerpo incidente al contacto; puede invertir su sentido si el choque es suficientemente elástico."
          en: "The final velocity v1f of body 1 summarizes how the incident body responds to contact; it may reverse direction if the collision is sufficiently elastic."
    physical_reading_rules:
      - id: v1f_physical_causal
        when: "true"
        status: info
        text:
          es: "Si e es alto y m1 es menor que m2, v1f puede cambiar de signo: el cuerpo 1 rebota hacia atrás."
          en: "If e is high and m1 is less than m2, v1f can change sign: body 1 bounces backward."
    coherence_rules:
      - id: v1f_coherence_direction
        when: "true"
        status: ok
        text:
          es: "Comprueba que el signo de v1f sea consistente con la física del problema y el eje elegido."
          en: "Check that the sign of v1f is consistent with the problem physics and the chosen axis."
    model_validity_rules:
      - id: v1f_validity_regime
        when: "true"
        status: ok
        text:
          es: "v1f asume que el modelo de colisión instantánea es válido."
          en: "v1f assumes the instantaneous collision model is valid."
    graph_rules:
      - id: v1f_graph_symmetry
        when: "true"
        status: info
        text:
          es: "En el gráfico de velocidades finales, la separación entre v1f y v2f es proporcional a e."
          en: "In the final velocities graph, the separation between v1f and v2f is proportional to e."
    likely_errors:
      - id: v1f_error_equal_mass
        when: "true"
        status: warning
        text:
          es: "En colisiones entre masas iguales con e=1, los cuerpos intercambian sus velocidades."
          en: "In equal-mass collisions with e=1, the bodies exchange their velocities."
    next_step_rules:
      - id: v1f_next_verify
        when: "true"
        status: tip
        text:
          es: "Verifica que v1f y v2f satisfagan simultáneamente la conservación del momento y la ecuación de restitución."
          en: "Verify that v1f and v2f simultaneously satisfy momentum conservation and the restitution equation."

  DeltaK:
    summary_rules:
      - id: DeltaK_summary_dissipation
        when: "true"
        status: info
        text:
          es: "La pérdida de energía cinética DeltaK cuantifica la energía transformada en calor, sonido y deformación permanente durante el impacto."
          en: "The kinetic energy loss DeltaK quantifies the energy transformed into heat, sound, and permanent deformation during impact."
    physical_reading_rules:
      - id: DeltaK_physical_causal
        when: "true"
        status: info
        text:
          es: "Porque DeltaK depende de e al cuadrado, la disipación es desproporcionadamente sensible a cambios en e cerca del límite elástico."
          en: "Because DeltaK depends on e squared, dissipation is disproportionately sensitive to changes in e near the elastic limit."
    coherence_rules:
      - id: DeltaK_coherence_nonneg
        when: "DeltaK >= 0"
        status: ok
        text:
          es: "DeltaK debe ser no negativo: representa energía disipada, no ganada."
          en: "DeltaK must be non-negative: it represents dissipated energy, not gained energy."
    model_validity_rules:
      - id: DeltaK_validity_assumptions
        when: "true"
        status: ok
        text:
          es: "La fórmula de DeltaK asume que e resume correctamente todas las pérdidas internas del contacto."
          en: "The DeltaK formula assumes that e correctly summarizes all internal contact losses."
    graph_rules:
      - id: DeltaK_graph_parabola
        when: "true"
        status: info
        text:
          es: "En un gráfico de DeltaK frente a e, la curva es una parábola invertida que vale cero en e=1."
          en: "In a graph of DeltaK versus e, the curve is an inverted parabola that equals zero at e=1."
    likely_errors:
      - id: DeltaK_error_mass
        when: "true"
        status: warning
        text:
          es: "Error grave: usar la masa total en lugar de la masa reducida mu en la fórmula de pérdida de energía."
          en: "Serious error: using the total mass instead of the reduced mass mu in the energy loss formula."
    next_step_rules:
      - id: DeltaK_next_compare
        when: "true"
        status: tip
        text:
          es: "Compara DeltaK con la energía cinética inicial para obtener el porcentaje de energía disipada."
          en: "Compare DeltaK with the initial kinetic energy to obtain the percentage of energy dissipated."

  hf:
    summary_rules:
      - id: hf_summary_bounce
        when: "true"
        status: info
        text:
          es: "La altura de rebote hf resume la respuesta experimental del sistema al impacto vertical; permite obtener e sin medir velocidades."
          en: "The bounce height hf summarizes the experimental response of the system to vertical impact; it allows obtaining e without measuring velocities."
    physical_reading_rules:
      - id: hf_physical_causal
        when: "true"
        status: info
        text:
          es: "Porque hf/h0 es igual a e², una pequeña reducción en e produce una caída drástica en la altura de rebote."
          en: "Because hf/h0 equals e², a small reduction in e produces a drastic drop in the bounce height."
    coherence_rules:
      - id: hf_coherence_range
        when: "hf <= h0"
        status: ok
        text:
          es: "hf menor o igual que h0 es coherente con un choque ordinario donde se pierde o conserva energía."
          en: "hf less than or equal to h0 is consistent with an ordinary collision where energy is lost or conserved."
    model_validity_rules:
      - id: hf_validity_air
        when: "true"
        status: ok
        text:
          es: "El modelo asume caída libre; la resistencia del aire puede reducir el valor aparente de e."
          en: "The model assumes free fall; air resistance can reduce the apparent value of e."
    graph_rules:
      - id: hf_graph_decay
        when: "true"
        status: info
        text:
          es: "En un gráfico de altura frente al número de rebote, la curva es un decaimiento geométrico."
          en: "In a height versus bounce number graph, the curve is a geometric decay."
    likely_errors:
      - id: hf_error_sqrt
        when: "true"
        status: warning
        text:
          es: "Olvidar la raíz cuadrada al calcular e desde alturas dará un resultado incorrecto (e²)."
          en: "Forgetting the square root when calculating e from heights will give an incorrect result (e²)."
    next_step_rules:
      - id: hf_next_successive
        when: "true"
        status: tip
        text:
          es: "Usa la fórmula altura_rebote para predecir la altura después de varios botes consecutivos."
          en: "Use the altura_rebote formula to predict the height after several consecutive bounces."

  hn:
    summary_rules:
      - id: hn_summary_bounces
        when: "true"
        status: info
        text:
          es: "La magnitud hn describe la altura máxima después de n botes; permite modelar la pérdida acumulada de energía."
          en: "The magnitude hn describes the maximum height after n bounces; it allows modeling the cumulative energy loss."
    physical_reading_rules:
      - id: hn_physical_decay
        when: "true"
        status: info
        text:
          es: "La altura decae exponencialmente con el número de botes; cada impacto reduce la energía en un factor e²."
          en: "The height decays exponentially with the number of bounces; each impact reduces the energy by a factor of e²."
    coherence_rules:
      - id: hn_coherence_sequence
        when: "true"
        status: ok
        text:
          es: "Verifica que hn sea siempre menor que h_{n-1} para choques inelásticos."
          en: "Verify that hn is always less than h_{n-1} for inelastic collisions."
    model_validity_rules:
      - id: hn_validity_const_e
        when: "true"
        status: ok
        text:
          es: "Asume que e se mantiene constante en cada uno de los botes."
          en: "Assumes that e remains constant in each of the bounces."
    graph_rules:
      - id: hn_graph_envelope
        when: "true"
        status: info
        text:
          es: "hn define la envolvente de la trayectoria de una pelota que rebota."
          en: "hn defines the envelope of the trajectory of a bouncing ball."
    likely_errors:
      - id: hn_error_exponent
        when: "true"
        status: warning
        text:
          es: "Error común: usar n como exponente en lugar de 2n en la fórmula de altura."
          en: "Common error: using n as exponent instead of 2n in the height formula."
    next_step_rules:
      - id: hn_next_total_dist
        when: "true"
        status: tip
        text:
          es: "Calcula la distancia total recorrida sumando la serie geométrica de alturas."
          en: "Calculate the total distance traveled by summing the geometric series of heights."

  n:
    summary_rules:
      - id: n_summary_counter
        when: "true"
        status: info
        text:
          es: "n representa el número de impactos o rebotes analizados en la secuencia."
          en: "n represents the number of impacts or bounces analyzed in the sequence."
    physical_reading_rules:
      - id: n_physical_step
        when: "true"
        status: info
        text:
          es: "Un n elevado revela cuán persistente es el movimiento a pesar de las pérdidas en cada contacto."
          en: "A high n reveals how persistent the movement is despite losses in each contact."
    coherence_rules:
      - id: n_coherence_integer
        when: "true"
        status: ok
        text:
          es: "n debe ser un número entero positivo en el contexto de botes sucesivos."
          en: "n must be a positive integer in the context of successive bounces."
    model_validity_rules:
      - id: n_validity_limit
        when: "true"
        status: ok
        text:
          es: "Válido mientras el tiempo de contacto sea despreciable frente al tiempo de vuelo."
          en: "Valid as long as the contact time is negligible compared to the flight time."
    graph_rules:
      - id: n_graph_step
        when: "true"
        status: info
        text:
          es: "Representa el eje horizontal en los diagramas de decaimiento de altura por botes."
          en: "Represents the horizontal axis in the height decay by bounces diagrams."
    likely_errors:
      - id: n_error_off_by_one
        when: "true"
        status: warning
        text:
          es: "Cuidado con los errores de 'desfase por uno' al contar el número de rebotes vs caídas."
          en: "Watch out for 'off-by-one' errors when counting the number of bounces vs drops."
    next_step_rules:
      - id: n_next_total_time
        when: "true"
        status: tip
        text:
          es: "Usa n para calcular el tiempo total hasta que la pelota se detiene (serie de tiempos de vuelo)."
          en: "Use n to calculate the total time until the ball stops (series of flight times)."

  mu:
    summary_rules:
      - id: mu_summary_inertia
        when: "true"
        status: info
        text:
          es: "La masa reducida mu representa la inercia efectiva del sistema para el movimiento relativo; simplifica un problema de dos cuerpos a uno solo equivalente."
          en: "The reduced mass mu represents the system's effective inertia for relative motion; it simplifies a two-body problem to an equivalent single one."
    physical_reading_rules:
      - id: mu_physical_limit
        when: "true"
        status: info
        text:
          es: "Porque mu es siempre menor o igual que la menor de las dos masas, el comportamiento del choque está dominado por el cuerpo más ligero."
          en: "Because mu is always less than or equal to the smaller of the two masses, the collision behavior is dominated by the lighter body."
    coherence_rules:
      - id: mu_coherence_calc
        when: "true"
        status: ok
        text:
          es: "Verifica que mu sea menor que m1 y m2; si es mayor, hay un error en el producto o la suma de las masas."
          en: "Verify that mu is less than m1 and m2; if it is larger, there is an error in the product or sum of the masses."
    model_validity_rules:
      - id: mu_validity_isolated
        when: "true"
        status: ok
        text:
          es: "Válido para sistemas aislados donde la masa total se mantiene constante."
          en: "Valid for isolated systems where total mass remains constant."
    graph_rules:
      - id: mu_graph_scale
        when: "true"
        status: info
        text:
          es: "Actúa como un factor de escala global para la energía cinética relativa."
          en: "Acts as a global scale factor for relative kinetic energy."
    likely_errors:
      - id: mu_error_total
        when: "true"
        status: warning
        text:
          es: "No confundir mu con la masa total del sistema (m1 + m2)."
          en: "Do not confuse mu with the total system mass (m1 + m2)."
    next_step_rules:
      - id: mu_next_energy
        when: "true"
        status: tip
        text:
          es: "Usa mu en la fórmula de pérdida de energía cinética para cuantificar el impacto."
          en: "Use mu in the kinetic energy loss formula to quantify the impact."

  vrel_f:

    summary_rules:
      - id: vrelf_summary_sep
        when: "true"
        status: info
        text:
          es: "La velocidad relativa de separación vrel_f indica con qué rapidez se alejan los cuerpos tras el impacto."
          en: "The relative separation speed vrel_f indicates how fast the bodies move away after impact."
    physical_reading_rules:
      - id: vrelf_physical_mod
        when: "true"
        status: info
        text:
          es: "vrel_f es siempre menor o igual que la velocidad de acercamiento en choques pasivos."
          en: "vrel_f is always less than or equal to the approach speed in passive collisions."
    coherence_rules:
      - id: vrelf_coherence_e
        when: "true"
        status: ok
        text:
          es: "vrel_f debe ser consistente con el producto de e por la velocidad relativa inicial."
          en: "vrel_f must be consistent with the product of e and the initial relative velocity."
    model_validity_rules:
      - id: vrelf_validity_1d
        when: "true"
        status: ok
        text:
          es: "Válido para la componente normal de la velocidad relativa en el punto de contacto."
          en: "Valid for the normal component of relative velocity at the contact point."
    graph_rules:
      - id: vrelf_graph_slope
        when: "true"
        status: info
        text:
          es: "Representa el resultado directo de aplicar la transformación de e a la condición inicial."
          en: "Represents the direct result of applying the e transformation to the initial condition."
    likely_errors:
      - id: vrelf_error_sign
        when: "true"
        status: warning
        text:
          es: "Error común: no respetar la convención de signos al calcular la diferencia de velocidades."
          en: "Common error: not respecting the sign convention when calculating the velocity difference."
    next_step_rules:
      - id: vrelf_next_impulse
        when: "true"
        status: tip
        text:
          es: "Usa vrel_f para calcular el impulso neto transferido durante el choque."
          en: "Use vrel_f to calculate the net impulse transferred during the collision."
`;export{e as default};
