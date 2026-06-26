const e=`version: 5
id: leyes-de-kepler-interp
leaf_id: leyes-de-kepler
scope: local
nombre:
  es: Lectura de leyes de Kepler
  en: Kepler's laws reading

output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]

result_blocks:
  summary: { title: { es: Resumen del resultado, en: Result summary } }
  physical_reading: { title: { es: Lectura fisica causal, en: Causal physical reading } }
  coherence: { title: { es: Coherencia de datos, en: Data coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente paso, en: Next step } }

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [G, M, mu, a, b, e, r, theta, T, T1, T2, a1, a2, A, dA_dt, L, m]
  formulas: [parametro_gravitatorio, primera_ley_polar, relacion_semiejes, velocidad_areal_constante, relacion_momento_angular_conceptual, tercera_ley_absoluta, tercera_ley_mu, tercera_ley_comparativa]

targets:
  a:
    summary_rules:
      - id: a-summary
        when: a > 0
        status: success
        text: { es: "[[a]] positiva fija el tamano orbital usado por la tercera ley.", en: "Positive [[a]] fixes the orbital size used by the third law." }
    physical_reading_rules:
      - id: a-phys
        when: a > 0
        status: success
        text: { es: "A mayor [[a]], mayor [[T]]; el crecimiento no es lineal sino de potencia tres medios.", en: "Larger [[a]] gives larger [[T]]; the growth is not linear but three-halves power." }
    coherence_rules:
      - id: a-coh
        when: a > 0
        status: success
        text: { es: "[[a]] debe usarse como semieje mayor, no como [[r]] instantaneo salvo orbita circular.", en: "[[a]] must be used as semi-major axis, not instantaneous [[r]] except in a circular orbit." }
    model_validity_rules:
      - id: a-valid
        when: a > 0
        status: success
        text: { es: "La lectura supone orbita kepleriana alrededor de una masa central dominante.", en: "The reading assumes a Keplerian orbit around a dominant central mass." }
    graph_rules:
      - id: a-graph
        when: a > 0
        status: info
        text: { es: "En Coord, [[a]] organiza la curva de [[T]] y permite comparar orbitas.", en: "In Coord, [[a]] organizes the [[T]] curve and enables orbit comparison." }
    likely_errors:
      - id: a-error
        when: a <= 0
        status: error
        text: { es: "Error conceptual probable: confundir [[a]] con una distancia cualquiera y usarla nula o negativa destruye la elipse kepleriana.", en: "Likely conceptual mistake: confusing [[a]] with any distance and using it as zero or negative destroys the Keplerian ellipse." }
    next_step_rules:
      - id: a-next
        when: a > 0
        status: info
        text: { es: "Comprueba si necesitas la forma con [[G]] y [[M]] o la comparacion con [[a1]] y [[a2]].", en: "Check whether you need the form with [[G]] and [[M]] or the comparison with [[a1]] and [[a2]]." }

  T:
    summary_rules:
      - id: T-summary
        when: T > 0
        status: success
        text: { es: "[[T]] positivo representa una revolucion orbital completa.", en: "Positive [[T]] represents one complete orbital revolution." }
    physical_reading_rules:
      - id: T-phys
        when: T > 0
        status: success
        text: { es: "[[T]] depende de [[a]] y de la escala gravitatoria [[mu]], no de la masa ligera en el modelo ideal.", en: "[[T]] depends on [[a]] and gravitational scale [[mu]], not on the light mass in the ideal model." }
    coherence_rules:
      - id: T-coh
        when: T > 0
        status: success
        text: { es: "Si [[T]] sale negativo o nulo, hay error de dominio o de unidades.", en: "If [[T]] is negative or zero, there is a domain or unit error." }
    model_validity_rules:
      - id: T-valid
        when: T > 0
        status: success
        text: { es: "El periodo calculado ignora perturbaciones y maniobras propulsivas.", en: "The computed period ignores perturbations and propulsive maneuvers." }
    graph_rules:
      - id: T-graph
        when: T > 0
        status: info
        text: { es: "La grafica debe mostrar que [[T]] crece rapidamente cuando crece [[a]].", en: "The graph should show that [[T]] grows rapidly as [[a]] grows." }
    likely_errors:
      - id: T-error
        when: T <= 0
        status: error
        text: { es: "Error conceptual probable: un periodo orbital fisico no puede ser negativo.", en: "Likely conceptual error: a physical orbital period cannot be negative." }
    next_step_rules:
      - id: T-next
        when: T > 0
        status: info
        text: { es: "Interpreta [[T]] como escala global de orbita, no como rapidez local.", en: "Interpret [[T]] as a global orbital scale, not as local speed." }

  e:
    summary_rules:
      - id: e-summary
        when: e >= 0 and e < 1
        status: success
        text: { es: "[[e]] esta en rango eliptico; la primera ley describe una orbita ligada.", en: "[[e]] is in elliptical range; the first law describes a bound orbit." }
    physical_reading_rules:
      - id: e-phys
        when: e >= 0
        status: success
        text: { es: "[[e]] controla la forma y la variacion de [[r]], no el periodo por si sola.", en: "[[e]] controls shape and variation of [[r]], not period by itself." }
    coherence_rules:
      - id: e-coh
        when: e < 1
        status: success
        text: { es: "Para aplicar formulas de elipse, [[e]] debe ser menor que 1.", en: "To apply ellipse formulas, [[e]] must be less than 1." }
    model_validity_rules:
      - id: e-valid
        when: e < 1
        status: success
        text: { es: "La interpretacion es de orbita ligada; si [[e]] alcanza 1 cambia el tipo de trayectoria.", en: "The interpretation is for a bound orbit; if [[e]] reaches 1 the trajectory type changes." }
    graph_rules:
      - id: e-graph
        when: e >= 0
        status: info
        text: { es: "En Svg, aumentar [[e]] separa el foco del centro y hace mas variable [[r]].", en: "In Svg, increasing [[e]] separates the focus from the center and makes [[r]] more variable." }
    likely_errors:
      - id: e-error
        when: e >= 1
        status: warning
        text: { es: "Error conceptual probable: con [[e]] >= 1 ya no estas usando una elipse kepleriana ligada.", en: "Likely conceptual error: with [[e]] >= 1 you are no longer using a bound Keplerian ellipse." }
    next_step_rules:
      - id: e-next
        when: e < 1
        status: info
        text: { es: "Usa [[theta]] para localizar el punto y calcular [[r]].", en: "Use [[theta]] to locate the point and compute [[r]]." }

  dA_dt:
    summary_rules:
      - id: areal-summary
        when: dA_dt > 0
        status: success
        text: { es: "[[dA_dt]] constante expresa la segunda ley de Kepler.", en: "Constant [[dA_dt]] expresses Kepler's second law." }
    physical_reading_rules:
      - id: areal-phys
        when: dA_dt > 0
        status: success
        text: { es: "La rapidez lineal puede cambiar aunque el barrido de area sea constante.", en: "Linear speed may change even though swept area stays constant." }
    coherence_rules:
      - id: areal-coh
        when: dA_dt > 0
        status: success
        text: { es: "Compara areas barridas en tiempos iguales, no arcos recorridos iguales.", en: "Compare swept areas in equal times, not equal traveled arcs." }
    model_validity_rules:
      - id: areal-valid
        when: dA_dt > 0
        status: success
        text: { es: "La constancia requiere fuerza central sin par externo apreciable.", en: "Constancy requires a central force with no appreciable external torque." }
    graph_rules:
      - id: areal-graph
        when: dA_dt > 0
        status: info
        text: { es: "En Svg, el sector desde el foco es la lectura visual de la segunda ley.", en: "In Svg, the sector from the focus is the visual reading of the second law." }
    likely_errors:
      - id: areal-error
        when: dA_dt <= 0
        status: warning
        text: { es: "Error conceptual probable: una velocidad areal no positiva indica mala definicion del sentido o del intervalo.", en: "Likely conceptual error: a non-positive areal velocity indicates a bad definition of direction or interval." }
    next_step_rules:
      - id: areal-next
        when: dA_dt > 0
        status: info
        text: { es: "Compara areas en tiempos iguales antes de hablar de rapidez lineal.", en: "Compare areas in equal times before discussing linear speed." }

  mu:
    summary_rules:
      - id: mu-summary
        when: mu > 0
        status: success
        text: { es: "[[mu]] positiva fija la escala gravitatoria del sistema central.", en: "Positive [[mu]] fixes the gravitational scale of the central system." }
    physical_reading_rules:
      - id: mu-phys
        when: mu > 0
        status: success
        text: { es: "[[mu]] condensa [[G]] y [[M]] para leer periodos sin repetir ambos datos.", en: "[[mu]] condenses [[G]] and [[M]] to read periods without repeating both data." }
    coherence_rules:
      - id: mu-coh
        when: mu > 0
        status: success
        text: { es: "[[mu]] debe ser positiva si [[M]] representa una masa central fisica.", en: "[[mu]] must be positive if [[M]] represents a physical central mass." }
    model_validity_rules:
      - id: mu-valid
        when: mu > 0
        status: success
        text: { es: "La lectura con [[mu]] supone masa central dominante.", en: "The reading with [[mu]] assumes a dominant central mass." }
    graph_rules:
      - id: mu-graph
        when: mu > 0
        status: info
        text: { es: "En Coord, [[mu]] cambia la escala vertical de la relacion periodo-semieje.", en: "In Coord, [[mu]] changes the vertical scale of the period-axis relation." }
    likely_errors:
      - id: mu-error
        when: mu <= 0
        status: error
        text: { es: "Error conceptual probable: [[mu]] no debe tratarse como una masa negativa o nula.", en: "Likely conceptual error: [[mu]] should not be treated as zero or negative mass." }
    next_step_rules:
      - id: mu-next
        when: mu > 0
        status: info
        text: { es: "Usa [[mu]] directamente si el problema lo proporciona.", en: "Use [[mu]] directly if the problem provides it." }

  M:
    summary_rules:
      - id: M-summary
        when: M > 0
        status: success
        text: { es: "[[M]] positiva representa la masa central que fija el reloj orbital.", en: "Positive [[M]] represents the central mass fixing the orbital clock." }
    physical_reading_rules:
      - id: M-phys
        when: M > 0
        status: success
        text: { es: "A igual [[a]], una [[M]] mayor reduce [[T]].", en: "For equal [[a]], larger [[M]] reduces [[T]]." }
    coherence_rules:
      - id: M-coh
        when: M > 0
        status: success
        text: { es: "[[M]] debe pertenecer al cuerpo central, no al satelite ligero.", en: "[[M]] must belong to the central body, not the light satellite." }
    model_validity_rules:
      - id: M-valid
        when: M > 0
        status: success
        text: { es: "La tercera ley absoluta requiere que [[M]] domine el sistema.", en: "The absolute third law requires [[M]] to dominate the system." }
    graph_rules:
      - id: M-graph
        when: M > 0
        status: info
        text: { es: "En la grafica, cambiar [[M]] equivale a cambiar [[mu]].", en: "On the graph, changing [[M]] is equivalent to changing [[mu]]." }
    likely_errors:
      - id: M-error
        when: M <= 0
        status: error
        text: { es: "Error conceptual probable: una masa central nula o negativa no define una orbita kepleriana.", en: "Likely conceptual error: zero or negative central mass does not define a Keplerian orbit." }
    next_step_rules:
      - id: M-next
        when: M > 0
        status: info
        text: { es: "Comprueba si puedes sustituir [[G]] y [[M]] por [[mu]].", en: "Check whether [[G]] and [[M]] can be replaced by [[mu]]." }

  b:
    summary_rules:
      - id: b-summary
        when: b > 0
        status: success
        text: { es: "[[b]] mide el ancho menor de la elipse.", en: "[[b]] measures the minor width of the ellipse." }
    physical_reading_rules:
      - id: b-phys
        when: b > 0
        status: success
        text: { es: "[[b]] cambia con [[e]] y describe forma, no periodo.", en: "[[b]] changes with [[e]] and describes shape, not period." }
    coherence_rules:
      - id: b-coh
        when: b > 0
        status: success
        text: { es: "En una elipse, [[b]] no debe superar a [[a]].", en: "In an ellipse, [[b]] should not exceed [[a]]." }
    model_validity_rules:
      - id: b-valid
        when: b > 0
        status: success
        text: { es: "[[b]] pertenece al modelo eliptico ligado.", en: "[[b]] belongs to the bound elliptical model." }
    graph_rules:
      - id: b-graph
        when: b > 0
        status: info
        text: { es: "En Svg, [[b]] controla la altura visual de la elipse.", en: "In Svg, [[b]] controls the visual height of the ellipse." }
    likely_errors:
      - id: b-error
        when: b <= 0
        status: error
        text: { es: "Error conceptual probable: [[b]] no puede ser nulo en una elipse fisica no degenerada.", en: "Likely conceptual error: [[b]] cannot be zero in a non-degenerate physical ellipse." }
    next_step_rules:
      - id: b-next
        when: b > 0
        status: info
        text: { es: "Compara [[b]] con [[a]] para leer la excentricidad.", en: "Compare [[b]] with [[a]] to read eccentricity." }

  r:
    summary_rules:
      - id: r-summary
        when: r > 0
        status: success
        text: { es: "[[r]] positiva mide la distancia instantanea desde el foco.", en: "Positive [[r]] measures instantaneous distance from the focus." }
    physical_reading_rules:
      - id: r-phys
        when: r > 0
        status: success
        text: { es: "[[r]] cambia durante una elipse aunque [[a]] sea fijo.", en: "[[r]] changes during an ellipse although [[a]] is fixed." }
    coherence_rules:
      - id: r-coh
        when: r > 0
        status: success
        text: { es: "[[r]] debe medirse desde el foco ocupado por [[M]].", en: "[[r]] must be measured from the focus occupied by [[M]]." }
    model_validity_rules:
      - id: r-valid
        when: r > 0
        status: success
        text: { es: "La lectura de [[r]] pertenece a la elipse focal.", en: "The reading of [[r]] belongs to the focal ellipse." }
    graph_rules:
      - id: r-graph
        when: r > 0
        status: info
        text: { es: "En Svg, [[r]] es el segmento desde el foco al satelite.", en: "In Svg, [[r]] is the segment from focus to satellite." }
    likely_errors:
      - id: r-error
        when: r <= 0
        status: error
        text: { es: "Error conceptual probable: [[r]] nula o negativa no describe una distancia orbital.", en: "Likely conceptual error: zero or negative [[r]] does not describe orbital distance." }
    next_step_rules:
      - id: r-next
        when: r > 0
        status: info
        text: { es: "Usa [[theta]] si necesitas localizar el punto de la orbita.", en: "Use [[theta]] if you need to locate the orbital point." }

  T2:
    summary_rules:
      - id: T2-summary
        when: T2 > 0
        status: success
        text: { es: "[[T2]] es el periodo estimado de la segunda orbita comparada.", en: "[[T2]] is the estimated period of the second compared orbit." }
    physical_reading_rules:
      - id: T2-phys
        when: T2 > 0
        status: success
        text: { es: "[[T2]] crece con la potencia tres medios del cambio de semieje.", en: "[[T2]] grows with the three-halves power of the semi-major-axis change." }
    coherence_rules:
      - id: T2-coh
        when: T2 > 0
        status: success
        text: { es: "[[T2]] solo es comparable con [[T1]] si comparten masa central.", en: "[[T2]] is comparable with [[T1]] only if they share central mass." }
    model_validity_rules:
      - id: T2-valid
        when: T2 > 0
        status: success
        text: { es: "La comparacion presupone el mismo [[M]].", en: "The comparison assumes the same [[M]]." }
    graph_rules:
      - id: T2-graph
        when: T2 > 0
        status: info
        text: { es: "En Coord, [[T2]] se lee como segundo punto de la curva.", en: "In Coord, [[T2]] is read as the second point on the curve." }
    likely_errors:
      - id: T2-error
        when: T2 <= 0
        status: error
        text: { es: "Error conceptual probable: [[T2]] no puede ser periodo no positivo.", en: "Likely conceptual error: [[T2]] cannot be non-positive period." }
    next_step_rules:
      - id: T2-next
        when: T2 > 0
        status: info
        text: { es: "Compara el factor [[T2]]/[[T1]] con el factor [[a2]]/[[a1]].", en: "Compare the [[T2]]/[[T1]] factor with the [[a2]]/[[a1]] factor." }

  a2:
    summary_rules:
      - id: a2-summary
        when: a2 > 0
        status: success
        text: { es: "[[a2]] es el tamano de la segunda orbita comparada.", en: "[[a2]] is the size of the second compared orbit." }
    physical_reading_rules:
      - id: a2-phys
        when: a2 > 0
        status: success
        text: { es: "El cambio de [[a2]] frente a [[a1]] se amplifica en el periodo.", en: "The change from [[a1]] to [[a2]] is amplified in the period." }
    coherence_rules:
      - id: a2-coh
        when: a2 > 0
        status: success
        text: { es: "[[a2]] y [[a1]] deben estar en unidades compatibles.", en: "[[a2]] and [[a1]] must be in compatible units." }
    model_validity_rules:
      - id: a2-valid
        when: a2 > 0
        status: success
        text: { es: "La comparacion con [[a2]] exige misma masa central.", en: "The comparison with [[a2]] requires the same central mass." }
    graph_rules:
      - id: a2-graph
        when: a2 > 0
        status: info
        text: { es: "En Coord, [[a2]] desplaza el segundo punto hacia otro periodo.", en: "In Coord, [[a2]] moves the second point toward another period." }
    likely_errors:
      - id: a2-error
        when: a2 <= 0
        status: error
        text: { es: "Error conceptual probable: [[a2]] no puede representar un semieje no positivo.", en: "Likely conceptual error: [[a2]] cannot represent a non-positive semi-major axis." }
    next_step_rules:
      - id: a2-next
        when: a2 > 0
        status: info
        text: { es: "Usa el cociente [[a2]]/[[a1]], no una resta de semiejes.", en: "Use the ratio [[a2]]/[[a1]], not a subtraction of axes." }
    next_step_rules:
      - id: areal-next
        when: dA_dt > 0
        status: info
        text: { es: "Relaciona la lectura areal con [[L]] si necesitas una explicacion newtoniana.", en: "Relate the areal reading to [[L]] if you need a Newtonian explanation." }

config:
  decimal_places: 4
  show_graphs: true
`;export{e as default};
