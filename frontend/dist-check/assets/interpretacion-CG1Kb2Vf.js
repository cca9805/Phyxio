const e=`version: '5'\r
id: interpretacion_ondas_estacionarias\r
leaf_id: ondas-estacionarias\r
nombre:\r
  es: Interpretacion de ondas estacionarias en cuerdas con extremos fijos\r
  en: Interpretation of standing waves in strings with fixed ends\r
scope:\r
  formulas:\r
  - longitud_onda_estacionaria\r
  - frecuencia_estacionaria\r
  - funcion_onda_estacionaria\r
  - posicion_nodos\r
  - posicion_vientres\r
  - frecuencia_fundamental\r
  targets:\r
  - longitud_onda_estacionaria\r
  - frecuencia_modo\r
  - longitud_cuerda\r
  - numero_armonico\r
  - velocidad_propagacion\r
  - amplitud_maxima\r
  - desplazamiento_transversal\r
  - posicion_nodo\r
  - posicion_vientre\r
  - frecuencia_fundamental\r
  - indice_nodo\r
ui:\r
  default_formula: frecuencia_estacionaria\r
  default_target: f_n\r
  show_graph: true\r
  graph_type: Coord\r
dependencies:\r
  requires_formulas: true\r
  requires_magnitudes: true\r
  supports_graph_binding: true\r
  magnitudes:\r
  - longitud_cuerda\r
  - velocidad_propagacion\r
  - frecuencia_fundamental\r
  - frecuencia_modo\r
  - longitud_onda_estacionaria\r
  - numero_armonico\r
  - amplitud_maxima\r
  - desplazamiento_transversal\r
  - posicion_nodo\r
  - posicion_vientre\r
  - indice_nodo\r
  formulas:\r
  - longitud_onda_estacionaria\r
  - frecuencia_estacionaria\r
  - funcion_onda_estacionaria\r
  - posicion_nodos\r
  - posicion_vientres\r
  - frecuencia_fundamental\r
global_context:\r
  es: Las ondas estacionarias en cuerdas con extremos fijos resultan de la superposicion de dos ondas viajeras de igual amplitud\r
    y frecuencia que se propagan en sentidos opuestos. Las condiciones de contorno cuantizan el sistema, permitiendo solo\r
    frecuencias discretas que forman una serie armonica completa. El modo n-esimo contiene exactamente n vientres y n+1 nodos.\r
  en: Standing waves in strings with fixed ends result from the superposition of two traveling waves of equal amplitude and\r
    frequency propagating in opposite directions. Boundary conditions quantize the system, allowing only discrete frequencies\r
    that form a complete harmonic series. The n-th mode contains exactly n antinodes and n+1 nodes.\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura del grafico\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  longitud_onda_estacionaria:\r
    magnitude_type: derived\r
    semantic_role:\r
      es: Longitud de onda del modo estacionario n-esimo\r
      en: Wavelength of the n-th stationary mode\r
    summary_rules:\r
    - id: lambda_summary_large\r
      when: lambda_n > L\r
      text:\r
        es: '[[lambda_n]] excede la longitud fisica de la cuerda, indicando que el modo es de bajo orden (fundamental o segundo\r
          armonico).'\r
        en: '[[lambda_n]] exceeds the physical length of the string, indicating a low-order mode (fundamental or second harmonic).'\r
      status: ok\r
    - id: lambda_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[lambda_n]] describe la periodicidad espacial del patron estacionario. Cada modo contiene exactamente n medias\r
          longitudes de onda.'\r
        en: '[[lambda_n]] describes the spatial periodicity of the stationary pattern. Each mode contains exactly n half-wavelengths.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: lambda_reading_pattern\r
      when: 'true'\r
      text:\r
        es: Este valor indica la distancia entre dos puntos consecutivos que vibran en fase. En el modo n-esimo, hay [[n]]\r
          segmentos de longitud media longitud de onda.\r
        en: This value indicates the distance between two consecutive points vibrating in phase. In the n-th mode, there are\r
          [[n]] segments of half-wavelength length.\r
      status: ok\r
    coherence_rules:\r
    - id: lambda_coherence_positive\r
      when: lambda_n > 0\r
      text:\r
        es: La longitud de onda es positiva, coherente con una onda fisica real.\r
        en: Wavelength is positive, coherent with a real physical wave.\r
      status: ok\r
    - id: lambda_coherence_relation\r
      when: lambda_n == 2 * L / n\r
      text:\r
        es: La relacion entre [[lambda_n]], [[L]] y [[n]] es consistente con las condiciones de contorno de extremos fijos.\r
        en: The relation between [[lambda_n]], [[L]] and [[n]] is consistent with fixed-end boundary conditions.\r
      status: ok\r
    model_validity_rules:\r
    - id: lambda_validity_quantization\r
      when: n >= 1 and n == int(n)\r
      text:\r
        es: El numero de modo [[n]] es entero positivo, cumpliendo la cuantizacion requerida.\r
        en: The mode number [[n]] is a positive integer, fulfilling required quantization.\r
      status: ok\r
    graph_rules:\r
    - id: lambda_graph_pattern\r
      when: 'true'\r
      text:\r
        es: '[[lambda_n]] determina la escala espacial de la envolvente sinusoidal mostrada en el grafico. Cada ciclo completo\r
          corresponde a una longitud de onda.'\r
        en: '[[lambda_n]] determines the spatial scale of the sinusoidal envelope shown in the graph. Each complete cycle\r
          corresponds to a wavelength.'\r
      status: ok\r
    likely_errors:\r
    - id: lambda_error_confusion\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: confundir la longitud de onda de la onda estacionaria con la de las ondas viajeras componentes.\r
          Son identicas en magnitud pero el patron es diferente.'\r
        en: 'Frequent error: confusing the standing wave wavelength with that of the component traveling waves. They are identical\r
          in magnitude but the pattern is different.'\r
      status: ok\r
    next_step_rules:\r
    - id: lambda_next_nodes\r
      when: 'true'\r
      text:\r
        es: Use [[lambda_n]] para calcular la posicion exacta de los nodos ubicados a multiplos enteros de media longitud\r
          de onda desde los extremos.\r
        en: Use [[lambda_n]] to calculate the exact position of nodes located at integer multiples of half-wavelength from\r
          the ends.\r
      status: ok\r
  frecuencia_modo:\r
    magnitude_type: derived\r
    semantic_role:\r
      es: Frecuencia de oscilacion del modo n-esimo\r
      en: Oscillation frequency of the n-th mode\r
    summary_rules:\r
    - id: fn_summary_audible\r
      when: f_n > 20 and f_n < 20000\r
      text:\r
        es: '[[f_n]] cae dentro del rango audible humano, correspondiendo a un tono musical percibible.'\r
        en: '[[f_n]] falls within the human audible range, corresponding to a perceivable musical tone.'\r
      status: ok\r
    - id: fn_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[f_n]] es la frecuencia a la que todos los puntos de la cuerda oscilan simultaneamente en el modo n-esimo.'\r
        en: '[[f_n]] is the frequency at which all points of the string oscillate simultaneously in the n-th mode.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: fn_reading_harmonic\r
      when: 'true'\r
      text:\r
        es: Este valor representa la frecuencia de resonancia del modo estacionario. El sistema solo responde eficientemente\r
          a frecuencias que son multiplos enteros de la fundamental.\r
        en: This value represents the resonance frequency of the stationary mode. The system only responds efficiently to\r
          frequencies that are integer multiples of the fundamental.\r
      status: ok\r
    coherence_rules:\r
    - id: fn_coherence_positive\r
      when: f_n > 0\r
      text:\r
        es: La frecuencia es positiva, coherente con una vibracion real.\r
        en: Frequency is positive, coherent with real vibration.\r
      status: ok\r
    - id: fn_coherence_scaling\r
      when: n > 0\r
      text:\r
        es: La frecuencia escala linealmente con [[n]], como esperado para el espectro armonico de una cuerda con extremos\r
          fijos.\r
        en: Frequency scales linearly with [[n]], as expected for the harmonic spectrum of a string with fixed ends.\r
      status: ok\r
    model_validity_rules:\r
    - id: fn_validity_range\r
      when: f_n > 10 and f_n < 20000\r
      text:\r
        es: La frecuencia esta en el rango audible humano tipico.\r
        en: Frequency is within typical human audible range.\r
      status: ok\r
    graph_rules:\r
    - id: fn_graph_temporal\r
      when: 'true'\r
      text:\r
        es: '[[f_n]] determina la frecuencia temporal de oscilacion observada en la animacion del grafico. Todos los puntos\r
          vibran a esta misma frecuencia.'\r
        en: '[[f_n]] determines the temporal oscillation frequency observed in the graph animation. All points vibrate at\r
          this same frequency.'\r
      status: ok\r
    likely_errors:\r
    - id: fn_error_ends\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: usar la formula para un extremo fijo y otro libre, que produce solo armonicos impares. Aqui\r
          ambos extremos estan fijos.'\r
        en: 'Frequent error: using the formula for one fixed end and one free end, which produces only odd harmonics. Here\r
          both ends are fixed.'\r
      status: ok\r
    next_step_rules:\r
    - id: fn_next_harmonics\r
      when: 'true'\r
      text:\r
        es: Analice como la serie armonica [[f_n]] = n [[f_1]] genera el timbre caracteristico de instrumentos de cuerda.\r
        en: Analyze how the harmonic series [[f_n]] = n [[f_1]] generates the characteristic timbre of string instruments.\r
      status: ok\r
  longitud_cuerda:\r
    magnitude_type: core\r
    semantic_role:\r
      es: Longitud geometrica de la cuerda vibrante\r
      en: Geometric length of the vibrating string\r
    summary_rules:\r
    - id: L_summary_range\r
      when: L > 0.1 and L < 10\r
      text:\r
        es: '[[L]] esta en el rango tipico de instrumentos musicales de cuerda (decimetros a metros).'\r
        en: '[[L]] is in the typical range of string musical instruments (decimeters to meters).'\r
      status: ok\r
    - id: L_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[L]] define el dominio espacial donde se establece el patron estacionario y determina junto con [[n]] las longitudes\r
          de onda permitidas.'\r
        en: '[[L]] defines the spatial domain where the stationary pattern establishes itself and determines, together with\r
          [[n]], the allowed wavelengths.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: L_reading_boundary\r
      when: 'true'\r
      text:\r
        es: Este parametro geometrico establece las condiciones de contorno. Los extremos fijos en x=0 y x=[[L]] obligan a\r
          nodos en esos puntos.\r
        en: This geometric parameter establishes the boundary conditions. Fixed ends at x=0 and x=[[L]] force nodes at those\r
          points.\r
      status: ok\r
    coherence_rules:\r
    - id: L_coherence_positive\r
      when: L > 0\r
      text:\r
        es: La longitud es positiva, coherente con una cuerda real.\r
        en: Length is positive, coherent with a real string.\r
      status: ok\r
    model_validity_rules:\r
    - id: L_validity_macroscopic\r
      when: L > 0.01\r
      text:\r
        es: La longitud es macroscopica, valida para el modelo continuo de cuerda.\r
        en: Length is macroscopic, valid for the continuous string model.\r
      status: ok\r
    graph_rules:\r
    - id: L_graph_axis\r
      when: 'true'\r
      text:\r
        es: '[[L]] determina el limite del eje horizontal en el grafico de la onda estacionaria. Los nodos siempre aparecen\r
          en los extremos del intervalo [0, [[L]]].'\r
        en: '[[L]] determines the limit of the horizontal axis in the standing wave graph. Nodes always appear at the ends\r
          of the interval [0, [[L]]].'\r
      status: ok\r
    likely_errors:\r
    - id: L_error_vibrating\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: usar la longitud total de la cuerda en el instrumento en lugar de la porcion que realmente vibra\r
          entre dos puntos de contacto.'\r
        en: 'Frequent error: using the total string length on the instrument instead of the portion that actually vibrates\r
          between two contact points.'\r
      status: ok\r
    next_step_rules:\r
    - id: L_next_nodes\r
      when: 'true'\r
      text:\r
        es: Calcule las posiciones de los nodos intermedios usando [[L]] y [[n]] mediante la formula x = m [[L]]/n.\r
        en: Calculate the positions of intermediate nodes using [[L]] and [[n]] via the formula x = m [[L]]/n.\r
      status: ok\r
  numero_armonico:\r
    magnitude_type: core\r
    semantic_role:\r
      es: Indice de modo o numero armonico\r
      en: Mode index or harmonic number\r
    summary_rules:\r
    - id: n_summary_fundamental\r
      when: n == 1\r
      text:\r
        es: El modo fundamental corresponde a [[n]] igual a 1, con una sola media longitud de onda en la cuerda.\r
        en: The fundamental mode corresponds to [[n]] equal to 1, with a single half-wavelength in the string.\r
      status: ok\r
    - id: n_summary_harmonics\r
      when: n > 1\r
      text:\r
        es: El modo [[n]]-esimo contiene [[n]] medias longitudes de onda y corresponde al armonico de orden [[n]].\r
        en: The [[n]]-th mode contains [[n]] half-wavelengths and corresponds to the [[n]]-th order harmonic.\r
      status: ok\r
    - id: n_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[n]] etiqueta discretamente cada modo estacionario permitido, cuantizando el espectro de frecuencias.'\r
        en: '[[n]] discretely labels each allowed stationary mode, quantizing the frequency spectrum.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: n_reading_quantization\r
      when: 'true'\r
      text:\r
        es: Este numero entero positivo es la fuente de la cuantizacion. Solo valores discretos de [[n]] producen soluciones\r
          fisicamente validas que satisfacen las condiciones de contorno.\r
        en: This positive integer is the source of quantization. Only discrete values of [[n]] produce physically valid solutions\r
          satisfying the boundary conditions.\r
      status: ok\r
    coherence_rules:\r
    - id: n_coherence_integer\r
      when: n >= 1 and n == int(n)\r
      text:\r
        es: '[[n]] es entero positivo, coherente con la cuantizacion del sistema.'\r
        en: '[[n]] is a positive integer, coherent with system quantization.'\r
      status: ok\r
    model_validity_rules:\r
    - id: n_validity_low\r
      when: n <= 10\r
      text:\r
        es: El modo es de bajo orden, donde el modelo ideal de cuerda sin rigidez es altamente preciso.\r
        en: The mode is of low order, where the ideal string model without stiffness is highly accurate.\r
      status: ok\r
    graph_rules:\r
    - id: n_graph_loops\r
      when: 'true'\r
      text:\r
        es: '[[n]] determina el numero de vientres (bucles) visibles en el grafico de la onda estacionaria. Cada vientre corresponde\r
          a una media longitud de onda.'\r
        en: '[[n]] determines the number of antinodes (loops) visible in the standing wave graph. Each antinode corresponds\r
          to a half-wavelength.'\r
      status: ok\r
    likely_errors:\r
    - id: n_error_zero\r
      when: n == 0\r
      text:\r
        es: 'Error critico: n=0 no representa un modo fisico valido. La cuerda en reposo no es un modo de vibracion.'\r
        en: 'Critical error: n=0 does not represent a valid physical mode. The string at rest is not a vibration mode.'\r
      status: ok\r
    next_step_rules:\r
    - id: n_next_overtones\r
      when: 'true'\r
      text:\r
        es: Explore los sobretonos y su relacion con el timbre musical. Cada instrumento tiene una distribucion caracteristica\r
          de amplitudes entre modos.\r
        en: Explore overtones and their relation to musical timbre. Each instrument has a characteristic distribution of amplitudes\r
          among modes.\r
      status: ok\r
  velocidad_propagacion:\r
    magnitude_type: core\r
    semantic_role:\r
      es: Velocidad de propagacion de ondas transversales\r
      en: Propagation velocity of transverse waves\r
    summary_rules:\r
    - id: v_summary_typical\r
      when: v > 50 and v < 500\r
      text:\r
        es: '[[v]] esta en el rango tipico de cuerdas de instrumentos musicales (decenas a centenares de m/s).'\r
        en: '[[v]] is in the typical range of musical instrument strings (tens to hundreds of m/s).'\r
      status: ok\r
    - id: v_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[v]] determina cuanto tarda una perturbacion en recorrer la cuerda y cuantas oscilaciones caben en el tiempo\r
          de viaje de ida y vuelta.'\r
        en: '[[v]] determines how long a disturbance takes to travel the string and how many oscillations fit in the round-trip\r
          travel time.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: v_reading_medium\r
      when: 'true'\r
      text:\r
        es: Esta velocidad es propiedad del medio (cuerda) y depende de su tension y densidad lineal. Es identica para todos\r
          los modos en una cuerda dada.\r
        en: This velocity is a property of the medium (string) and depends on its tension and linear density. Is identical\r
          for all modes in a given string.\r
      status: ok\r
    coherence_rules:\r
    - id: v_coherence_positive\r
      when: v > 0\r
      text:\r
        es: La velocidad es positiva, coherente con propagacion real.\r
        en: Velocity is positive, coherent with real propagation.\r
      status: ok\r
    model_validity_rules:\r
    - id: v_validity_string\r
      when: v < 1000\r
      text:\r
        es: La velocidad es consistente con ondas transversales en cuerdas tensas ordinarias.\r
        en: Velocity is consistent with transverse waves in ordinary tense strings.\r
      status: ok\r
    graph_rules:\r
    - id: v_graph_speed\r
      when: 'true'\r
      text:\r
        es: '[[v]] no afecta directamente la forma espacial del grafico, pero determina la frecuencia temporal de oscilacion\r
          junto con la longitud.'\r
        en: '[[v]] does not directly affect the spatial shape of the graph, but determines the temporal oscillation frequency\r
          together with length.'\r
      status: ok\r
    likely_errors:\r
    - id: v_error_sound\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: confundir la velocidad de propagacion en la cuerda con la velocidad del sonido en el aire. Son\r
          fenomenos distintos con valores muy diferentes.'\r
        en: 'Frequent error: confusing the propagation velocity in the string with the speed of sound in air. These are distinct\r
          phenomena with very different values.'\r
      status: ok\r
    next_step_rules:\r
    - id: v_next_tension\r
      when: 'true'\r
      text:\r
        es: Relacione [[v]] con la tension y densidad lineal mediante v = sqrt(T/μ) para entender como afinar un instrumento.\r
        en: Relate [[v]] to tension and linear density via v = sqrt(T/μ) to understand how to tune an instrument.\r
      status: ok\r
  amplitud_maxima:\r
    magnitude_type: core\r
    semantic_role:\r
      es: Amplitud de las ondas viajeras componentes\r
      en: Amplitude of component traveling waves\r
    summary_rules:\r
    - id: A_summary_small\r
      when: A < 0.01\r
      text:\r
        es: '[[A]] es pequena comparada con la longitud de onda, validando el modelo lineal de pequenas oscilaciones.'\r
        en: '[[A]] is small compared to wavelength, validating the small oscillation linear model.'\r
      status: ok\r
    - id: A_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[A]] controla la intensidad de la vibracion sin afectar las frecuencias ni las formas de los modos en el modelo\r
          lineal.'\r
        en: '[[A]] controls the intensity of vibration without affecting frequencies or mode shapes in the linear model.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: A_reading_energy\r
      when: 'true'\r
      text:\r
        es: La amplitud determina la energia almacenada en la onda estacionaria. Los vientres alcanzan amplitud maxima de\r
          2[[A]].\r
        en: Amplitude determines the energy stored in the standing wave. Antinodes reach maximum amplitude of 2[[A]].\r
      status: ok\r
    coherence_rules:\r
    - id: A_coherence_positive\r
      when: A > 0\r
      text:\r
        es: La amplitud es positiva, coherente con una oscilacion real.\r
        en: Amplitude is positive, coherent with real oscillation.\r
      status: ok\r
    - id: A_coherence_small\r
      when: A < L / 10\r
      text:\r
        es: La amplitud es pequena comparada con la longitud de la cuerda, consistente con el modelo lineal.\r
        en: Amplitude is small compared to string length, consistent with the linear model.\r
      status: ok\r
    model_validity_rules:\r
    - id: A_validity_linear\r
      when: A < 0.1 * lambda_n\r
      text:\r
        es: La amplitud satisface la condicion de pequenas oscilaciones para la validez del modelo lineal.\r
        en: Amplitude satisfies the small oscillation condition for linear model validity.\r
      status: ok\r
    graph_rules:\r
    - id: A_graph_envelope\r
      when: 'true'\r
      text:\r
        es: '[[A]] determina la escala vertical del grafico. La envolvente sinusoidal oscila entre valores de amplitud maxima\r
          +-2[[A]] en los vientres.'\r
        en: '[[A]] determines the vertical scale of the graph. The sinusoidal envelope oscillates between maximum amplitude\r
          values +-2[[A]] at antinodes.'\r
      status: ok\r
    likely_errors:\r
    - id: A_error_maximum\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: confundir la amplitud [[A]] de cada onda viajera con la amplitud maxima 2[[A]] que alcanzan\r
          los vientres en la superposicion.'\r
        en: 'Frequent error: confusing the amplitude [[A]] of each traveling wave with the maximum amplitude 2[[A]] reached\r
          by antinodes in the superposition.'\r
      status: ok\r
    next_step_rules:\r
    - id: A_next_energy\r
      when: 'true'\r
      text:\r
        es: Calcule la energia total de la onda estacionaria proporcional al cuadrado de la amplitud y a la frecuencia.\r
        en: Calculate the total energy of the standing wave proportional to the square of amplitude and frequency.\r
      status: ok\r
  desplazamiento_transversal:\r
    magnitude_type: state\r
    semantic_role:\r
      es: Desplazamiento transversal instantaneo de un punto de la cuerda\r
      en: Instantaneous transverse displacement of a string point\r
    summary_rules:\r
    - id: y_summary_zero\r
      when: y == 0\r
      text:\r
        es: '[[y]] es cero, lo que indica que el punto se encuentra en su posicion de equilibrio o coincide con un nodo del\r
          patron estacionario.'\r
        en: '[[y]] is zero, indicating the point is at its equilibrium position or coincides with a node of the stationary\r
          pattern.'\r
      status: ok\r
    - id: y_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[y]] representa el desplazamiento transversal en el punto y el instante especificados. Su valor varia entre\r
          -2A y 2A segun la posicion y el tiempo.'\r
        en: '[[y]] represents the transverse displacement at the specified point and instant. Its value varies between -2A\r
          and 2A according to position and time.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: y_reading_field\r
      when: 'true'\r
      text:\r
        es: Este valor es la variable de campo de la onda estacionaria en un punto concreto. La separacion de variables permite\r
          interpretar la parte espacial y temporal por separado.\r
        en: This value is the standing wave field variable at a concrete point. The separation of variables allows interpreting\r
          the spatial and temporal parts separately.\r
      status: ok\r
    coherence_rules:\r
    - id: y_coherence_bound\r
      when: 'true'\r
      text:\r
        es: 'El desplazamiento esta acotado por la amplitud maxima: el valor absoluto de [[y]] no puede superar 2[[A]] en\r
          ningun punto ni instante.'\r
        en: 'The displacement is bounded by maximum amplitude: the absolute value of [[y]] cannot exceed 2[[A]] at any point\r
          or instant.'\r
      status: ok\r
    model_validity_rules:\r
    - id: y_validity_small\r
      when: 'true'\r
      text:\r
        es: El modelo lineal es valido cuando [[y]] es mucho menor que la longitud de la cuerda, garantizando que la aproximacion\r
          de pequenas oscilaciones es correcta.\r
        en: The linear model is valid when [[y]] is much smaller than string length, ensuring the small oscillations approximation\r
          holds.\r
      status: ok\r
    graph_rules:\r
    - id: y_graph_profile\r
      when: 'true'\r
      text:\r
        es: El grafico muestra el perfil de [[y]] frente a la posicion x en un instante dado. Los nodos aparecen como ceros\r
          permanentes y los vientres como puntos de maxima excursion.\r
        en: The graph shows the profile of [[y]] versus position x at a given instant. Nodes appear as permanent zeros and\r
          antinodes as points of maximum excursion.\r
      status: ok\r
    likely_errors:\r
    - id: y_error_node\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: asumir que [[y]] es cero en nodos a causa de que la velocidad es nula. Los nodos tienen amplitud\r
          cero permanentemente, no solo velocidad baja.'\r
        en: 'Frequent error: assuming [[y]] is zero at nodes because velocity is zero there. Nodes have permanently zero amplitude,\r
          not just low velocity.'\r
      status: ok\r
    next_step_rules:\r
    - id: y_next_velocity\r
      when: 'true'\r
      text:\r
        es: Derive [[y]] respecto al tiempo para obtener la velocidad transversal del punto, que es maxima cuando los vientres\r
          pasan por el equilibrio.\r
        en: Differentiate [[y]] with respect to time to obtain the transverse velocity of the point, which is maximum when\r
          antinodes pass through equilibrium.\r
      status: ok\r
  posicion_nodo:\r
    magnitude_type: derived\r
    semantic_role:\r
      es: Posicion a lo largo de la cuerda donde la amplitud es siempre nula\r
      en: Position along the string where amplitude is always zero\r
    summary_rules:\r
    - id: xnodo_summary_ends\r
      when: x_nodo == 0 or x_nodo == L\r
      text:\r
        es: '[[x_nodo]] coincide con uno de los extremos fijos de la cuerda, que son siempre nodos por condicion de contorno\r
          independientemente del modo.'\r
        en: '[[x_nodo]] coincides with one of the fixed ends of the string, which are always nodes by boundary condition regardless\r
          of the mode.'\r
      status: ok\r
    - id: xnodo_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[x_nodo]] marca una posicion de interferencia destructiva permanente donde la amplitud de oscilacion es siempre\r
          cero para cualquier instante.'\r
        en: '[[x_nodo]] marks a position of permanent destructive interference where oscillation amplitude is always zero\r
          at any instant.'\r
      status: ok\r
    physical_reading_rules:\r
    - id: xnodo_reading_pattern\r
      when: 'true'\r
      text:\r
        es: Este punto es un nodo del patron estacionario. Aunque no se desplaza, experimenta maximas variaciones de tension\r
          en los momentos de mayor curvatura de la cuerda.\r
        en: This point is a node of the stationary pattern. Although it does not displace, it experiences maximum tension\r
          variations at moments of greatest string curvature.\r
      status: ok\r
    coherence_rules:\r
    - id: xnodo_coherence_range\r
      when: x_nodo >= 0 and x_nodo <= L\r
      text:\r
        es: La posicion del nodo esta dentro del dominio fisico de la cuerda, coherente con los limites de la longitud vibrante.\r
        en: The node position is within the physical domain of the string, coherent with the vibrating length limits.\r
      status: ok\r
    model_validity_rules:\r
    - id: xnodo_validity_integer\r
      when: 'true'\r
      text:\r
        es: La posicion del nodo es valida cuando [[m]] es entero en el rango de 0 a [[n]]. Valores no enteros de m indicarian\r
          error en el calculo.\r
        en: The node position is valid when [[m]] is an integer in the range 0 to [[n]]. Non-integer values of m would indicate\r
          a calculation error.\r
      status: ok\r
    graph_rules:\r
    - id: xnodo_graph_marker\r
      when: 'true'\r
      text:\r
        es: '[[x_nodo]] aparece como marcador sobre el eje x del grafico donde la envolvente de amplitud cruza el cero. Los\r
          extremos siempre estan marcados.'\r
        en: '[[x_nodo]] appears as a marker on the x-axis of the graph where the amplitude envelope crosses zero. The ends\r
          are always marked.'\r
      status: ok\r
    likely_errors:\r
    - id: xnodo_error_velocity\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: creer que en los nodos la velocidad transversal es nula. La velocidad transversal en el nodo\r
          es cero solo en los instantes de maxima amplitud general, no permanentemente.'\r
        en: 'Frequent error: believing transverse velocity is zero at nodes. Transverse velocity at a node is zero only at\r
          instants of maximum general amplitude, not permanently.'\r
      status: ok\r
    next_step_rules:\r
    - id: xnodo_next_spacing\r
      when: 'true'\r
      text:\r
        es: Compare la separacion entre nodos consecutivos con la media longitud de onda del modo. Deben ser iguales, lo que\r
          sirve como verificacion de consistencia.\r
        en: Compare the spacing between consecutive nodes with the half-wavelength of the mode. They should be equal, which\r
          serves as a consistency check.\r
      status: ok\r
  posicion_vientre:\r
    magnitude_type: derived\r
    semantic_role:\r
      es: Posicion a lo largo de la cuerda donde la amplitud es maxima (2A)\r
      en: Position along the string where amplitude is maximum (2A)\r
    summary_rules:\r
    - id: xvientre_summary_first\r
      when: 'true'\r
      text:\r
        es: '[[x_vientre]] marca el punto de mayor excursion del patron estacionario en el modo dado. La amplitud maxima en\r
          este punto es exactamente el doble de la amplitud de cada onda viajera.'\r
        en: '[[x_vientre]] marks the point of greatest excursion of the stationary pattern in the given mode. The maximum\r
          amplitude at this point is exactly double the amplitude of each traveling wave.'\r
      status: ok\r
    - id: xvientre_summary_default\r
      when: 'true'\r
      text:\r
        es: Este punto de interferencia constructiva permanente oscila entre -2[[A]] y +2[[A]] con la frecuencia del modo,\r
          mientras sus vecinos inmediatos tienen menor amplitud.\r
        en: This point of permanent constructive interference oscillates between -2[[A]] and +2[[A]] at the mode frequency,\r
          while its immediate neighbors have smaller amplitude.\r
      status: ok\r
    physical_reading_rules:\r
    - id: xvientre_reading_midpoint\r
      when: 'true'\r
      text:\r
        es: El vientre se ubica exactamente en el punto medio entre dos nodos consecutivos. Es el punto donde la energia cinetica\r
          de la cuerda es maxima cuando el patron pasa por el equilibrio.\r
        en: The antinode is located exactly at the midpoint between two consecutive nodes. It is the point where the kinetic\r
          energy of the string is maximum when the pattern passes through equilibrium.\r
      status: ok\r
    coherence_rules:\r
    - id: xvientre_coherence_range\r
      when: x_vientre > 0 and x_vientre < L\r
      text:\r
        es: La posicion del vientre esta estrictamente dentro del dominio, nunca en los extremos, coherente con las condiciones\r
          de contorno de extremos fijos.\r
        en: The antinode position is strictly inside the domain, never at the ends, coherent with fixed-end boundary conditions.\r
      status: ok\r
    model_validity_rules:\r
    - id: xvientre_validity_midpoint\r
      when: 'true'\r
      text:\r
        es: La posicion es valida cuando [[m]] es entero en el rango de 1 a [[n]]. Cada modo tiene exactamente [[n]] vientres\r
          equiespaciados dentro de la cuerda.\r
        en: The position is valid when [[m]] is an integer in the range 1 to [[n]]. Each mode has exactly [[n]] equally spaced\r
          antinodes inside the string.\r
      status: ok\r
    graph_rules:\r
    - id: xvientre_graph_peak\r
      when: 'true'\r
      text:\r
        es: '[[x_vientre]] corresponde al maximo de la envolvente de amplitud sinusoidal visible en el grafico. En la animacion,\r
          este punto oscila con la mayor excursion visible.'\r
        en: '[[x_vientre]] corresponds to the maximum of the sinusoidal amplitude envelope visible in the graph. In the animation,\r
          this point oscillates with the greatest visible excursion.'\r
      status: ok\r
    likely_errors:\r
    - id: xvientre_error_count\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: contar los extremos como vientres o incluir un vientre de mas. En ambos extremos fijos siempre\r
          hay nodos, nunca vientres.'\r
        en: 'Frequent error: counting the ends as antinodes or including an extra antinode. Both fixed ends always have nodes,\r
          never antinodes.'\r
      status: ok\r
    next_step_rules:\r
    - id: xvientre_next_amplitude\r
      when: 'true'\r
      text:\r
        es: Calcule la amplitud maxima en el vientre como 2[[A]] y compare con la amplitud del nodo (cero) para visualizar\r
          el contraste del patron estacionario.\r
        en: Calculate the maximum amplitude at the antinode as 2[[A]] and compare with the node amplitude (zero) to visualize\r
          the contrast of the stationary pattern.\r
      status: ok\r
  frecuencia_fundamental:\r
    magnitude_type: derived\r
    semantic_role:\r
      es: Frecuencia fundamental, base de la serie armonica\r
      en: Fundamental frequency, base of the harmonic series\r
    summary_rules:\r
    - id: f1_summary_audible\r
      when: f_1 > 20 and f_1 < 2000\r
      text:\r
        es: '[[f_1]] cae en el rango audible tipico de instrumentos de cuerda. Es el tono mas grave que la cuerda puede producir\r
          con extremos fijos.'\r
        en: '[[f_1]] falls in the typical audible range of string instruments. It is the lowest pitch the string can produce\r
          with fixed ends.'\r
      status: ok\r
    - id: f1_summary_default\r
      when: 'true'\r
      text:\r
        es: '[[f_1]] es la frecuencia del primer modo y la base de toda la serie armonica. Todos los modos superiores tienen\r
          frecuencias que son multiplos enteros de [[f_1]].'\r
        en: '[[f_1]] is the first mode frequency and the base of the entire harmonic series. All higher modes have frequencies\r
          that are integer multiples of [[f_1]].'\r
      status: ok\r
    physical_reading_rules:\r
    - id: f1_reading_harmonic\r
      when: 'true'\r
      text:\r
        es: La frecuencia fundamental corresponde al patron con un solo vientre central y dos nodos en los extremos. Aumentar\r
          la tension o reducir la longitud eleva [[f_1]] y afina la cuerda.\r
        en: The fundamental frequency corresponds to the pattern with a single central antinode and two nodes at the ends.\r
          Increasing tension or reducing length raises [[f_1]] and tunes the string up.\r
      status: ok\r
    coherence_rules:\r
    - id: f1_coherence_positive\r
      when: f_1 > 0\r
      text:\r
        es: La frecuencia fundamental es positiva, coherente con una cuerda real en tension y longitud finitas.\r
        en: The fundamental frequency is positive, coherent with a real string of finite tension and length.\r
      status: ok\r
    model_validity_rules:\r
    - id: f1_validity_range\r
      when: f_1 > 10 and f_1 < 20000\r
      text:\r
        es: La frecuencia fundamental esta en el rango audible humano, validando el modelo para instrumentos musicales de\r
          cuerda convencionales.\r
        en: The fundamental frequency is in the human audible range, validating the model for conventional string musical\r
          instruments.\r
      status: ok\r
    graph_rules:\r
    - id: f1_graph_base\r
      when: 'true'\r
      text:\r
        es: '[[f_1]] aparece como la primera linea espectral en el grafico de frecuencias. Las lineas superiores a 2[[f_1]],\r
          3[[f_1]], etc., corresponden a los armonicos.'\r
        en: '[[f_1]] appears as the first spectral line in the frequency graph. Lines above at 2[[f_1]], 3[[f_1]], etc., correspond\r
          to the harmonics.'\r
      status: ok\r
    likely_errors:\r
    - id: f1_error_confusion\r
      when: 'true'\r
      text:\r
        es: 'Error frecuente: confundir la frecuencia fundamental con la de algun modo superior. [[f_1]] es el valor para\r
          n=1; para n=2 la frecuencia es exactamente el doble.'\r
        en: 'Frequent error: confusing the fundamental frequency with that of a higher mode. [[f_1]] is the value for n=1;\r
          for n=2 the frequency is exactly double.'\r
      status: ok\r
    next_step_rules:\r
    - id: f1_next_harmonics\r
      when: 'true'\r
      text:\r
        es: Calcule los primeros cinco armonicos multiplicando [[f_1]] por 1, 2, 3, 4 y 5 para analizar el espectro completo\r
          y el timbre resultante.\r
        en: Calculate the first five harmonics by multiplying [[f_1]] by 1, 2, 3, 4 and 5 to analyze the complete spectrum\r
          and resulting timbre.\r
      status: ok\r
  indice_nodo:\r
    magnitude_type: index\r
    semantic_role:\r
      es: Indice entero que numera nodos o vientres dentro de un modo\r
      en: Integer index numbering nodes or antinodes within a mode\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: '[[indice_nodo]] etiqueta el nodo o vientre dentro del modo.'\r
        en: '[[indice_nodo]] labels the node or antinode within the mode.'\r
    physical_reading_rules:\r
    - id: m_reading\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El valor [[indice_nodo]] determina cual nodo o vientre se localiza dentro del patron estacionario.\r
        en: The value [[indice_nodo]] determines which node or antinode is located within the stationary pattern.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'Para nodos: [[indice_nodo]] debe estar entre 0 y [[numero_armonico]]. Para vientres: entre 1 y [[numero_armonico]].'\r
        en: 'For nodes: [[indice_nodo]] must be between 0 and [[numero_armonico]]. For antinodes: between 1 and [[numero_armonico]].'\r
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El indice [[indice_nodo]] es valido en el modelo lineal con extremos fijos para cualquier modo entero positivo.\r
        en: The index [[indice_nodo]] is valid in the linear model with fixed ends for any positive integer mode.\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Los valores de [[indice_nodo]] corresponden a las marcas de nodos y vientres en el grafico del patron estacionario.\r
        en: The values of [[indice_nodo]] correspond to the node and antinode marks in the stationary pattern graph.\r
    likely_errors:\r
    - id: m_error\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: 'Confundir el indice [[indice_nodo]] con el numero de modo [[numero_armonico]]: el primero numera posiciones dentro\r
          de un modo, el segundo identifica el modo completo.'\r
        en: 'Confusing index [[indice_nodo]] with mode number [[numero_armonico]]: the former numbers positions within a mode,\r
          the latter identifies the complete mode.'\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Usar [[indice_nodo]] para calcular posiciones exactas [[posicion_nodo]] y [[posicion_vientre]] y verificar que\r
          su conteo coincide con [[numero_armonico]]+1 nodos y [[numero_armonico]] vientres.\r
        en: Use [[indice_nodo]] to compute exact positions [[posicion_nodo]] and [[posicion_vientre]] and verify that their\r
          count matches [[numero_armonico]]+1 nodes and [[numero_armonico]] antinodes.\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
  inline_mode:\r
    max_sections: 2\r
    priority:\r
    - summary\r
    - likely_errors\r
  extended_mode:\r
    show_all: true\r
`;export{e as default};
