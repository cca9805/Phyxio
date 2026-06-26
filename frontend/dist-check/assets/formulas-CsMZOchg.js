const e=`version: 1\r
formulas:\r
- id: criterio_no_inercial\r
  title:\r
    es: Criterio de no inercialidad\r
    en: Non-inertial-frame criterion\r
  equation: a_marco != 0\r
  latex: \\vec{a}_{marco} \\neq \\vec{0}\r
  rearrangements: []\r
  category: kinematic_law\r
  relation_type: equation\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Criterio conceptual de clasificación. Identifica si un marco es no inercial\r
      al medir su aceleración respecto a un marco inercial.\r
    en: Conceptual classification criterion. Identifies if a frame is non-inertial\r
      by measuring its acceleration relative to an inertial frame.\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  interpretation_tags:\r
  - diagnostic_criterion\r
  - frame_classification\r
  - non_inertiality_test\r
  result_semantics:\r
    target: a_marco\r
    meaning: Resulta util para interpretar a_marco en el contexto del leaf.\r
  domain_checks:\r
  - condition: can_measure_frame_acceleration\r
    message:\r
      es: Para aplicar este criterio, necesitas identificar un sistema inercial de\r
        referencia externo desde el cual medir a_marco.\r
      en: To apply this criterion, you need to identify an external inertial reference\r
        system from which to measure a_frame.\r
  - condition: a_marco > 0.01 m/s²\r
    message:\r
      es: Aceleraciones detectables con instrumentos comunes. El marco es claramente\r
        no inercial.\r
      en: Detectable accelerations with common instruments. Frame is clearly non-inertial.\r
  - condition: a_marco < 0.001 m/s²\r
    message:\r
      es: Aceleraciones muy pequeñas. El marco es aproximadamente inercial para la\r
        mayoría de experimentos.\r
      en: Very small accelerations. Frame is approximately inertial for most experiments.\r
  coherence_checks:\r
  - check: if a_marco == 0 and fictitious_forces_present\r
    critical:\r
      es: 'INCOHERENCIA CRÍTICA: Si a_marco = 0, NO deben existir fuerzas ficticias.\r
        Revisa tu identificación del marco.'\r
      en: 'CRITICAL INCOHERENCE: If a_frame = 0, fictitious forces must NOT exist.\r
        Review your frame identification.'\r
  - check: if measuring_from_non_inertial_frame\r
    warning:\r
      es: 'ADVERTENCIA: Estás midiendo a_marco desde otro marco no inercial. Primero\r
        identifica un marco inercial válido.'\r
      en: 'WARNING: You''re measuring a_frame from another non-inertial frame. First\r
        identify a valid inertial frame.'\r
  graph_implications:\r
  - if: a_marco != 0\r
    then:\r
      es: Todos los objetos en reposo dentro del marco experimentan aparentemente\r
        una fuerza ficticia -m·a_marco (vectores hacia atrás).\r
      en: All objects at rest within frame apparently experience a fictitious force\r
        -m·a_frame (vectors backward).\r
  - if: a_marco increases_with_time\r
    then:\r
      es: La fuerza ficticia varía en el tiempo. Graficar F_ficticia(t) = -m·a_marco(t).\r
      en: Fictitious force varies with time. Plot F_fictitious(t) = -m·a_frame(t).\r
  pedagogical_triggers:\r
  - condition: user_thinks_constant_velocity_is_non_inertial\r
    error:\r
      es: 'ERROR CONCEPTUAL: Velocidad constante del marco NO implica no inercialidad.\r
        Solo la ACELERACIÓN lo hace.'\r
      en: 'CONCEPTUAL ERROR: Constant frame velocity does NOT imply non-inertiality.\r
        Only ACCELERATION does.'\r
  - condition: user_only_checks_rotation\r
    warning:\r
      es: 'ADVERTENCIA: No olvides revisar traslación acelerada. Un marco puede ser\r
        no inercial sin rotar.'\r
      en: 'WARNING: Don''t forget to check accelerated translation. A frame can be\r
        non-inertial without rotating.'\r
  - condition: confused_about_earth_reference\r
    hint:\r
      es: 'PISTA: La Tierra rota a ω=7.27×10⁻⁵ rad/s, así que es aproximadamente inercial\r
        solo para experimentos < 1 minuto.'\r
      en: 'HINT: Earth rotates at ω=7.27×10⁻⁵ rad/s, so it''s approximately inertial\r
        only for experiments < 1 minute.'\r
- id: fuerza_ficticia_traslacion\r
  title:\r
    es: Fuerza ficticia en traslación acelerada\r
    en: Fictitious force in accelerated translation\r
  equation: F_ficticia = -m * a_marco\r
  latex: \\vec{F}_f = -m \\vec{a}_{marco}\r
  rearrangements:\r
  - target: F_ficticia\r
    equation: F_ficticia = -m * a_marco\r
    latex: \\vec{F}_f = -m \\vec{a}_{marco}\r
    constraints: []\r
  - target: a_marco\r
    equation: a_marco = -F_ficticia / m\r
    latex: \\vec{a}_{marco} = -\\frac{\\vec{F}_f}{m}\r
    constraints: []\r
  - target: m\r
    equation: m = -F_ficticia / a_marco\r
    latex: m = -\\frac{\\vec{F}_f}{\\vec{a}_{marco}}\r
    constraints: []\r
  category: kinematic_law\r
  relation_type: equation\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  interpretation_tags:\r
  - fictitious_force\r
  - translational_acceleration\r
  - inertial_effect\r
  result_semantics:\r
    target: F_ficticia\r
    meaning: Resulta util para interpretar F_ficticia en el contexto del leaf.\r
  domain_checks:\r
  - condition: m <= 0\r
    message:\r
      es: 'ERROR: La masa debe ser positiva. Revisar valor de entrada.'\r
      en: 'ERROR: Mass must be positive. Check input value.'\r
  - condition: a_marco_varies_with_time\r
    message:\r
      es: 'ADVERTENCIA: Si a_marco varía con el tiempo, F_ficticia también varía.\r
        Recalcular para cada instante.'\r
      en: 'WARNING: If a_frame varies with time, F_fictitious also varies. Recalculate\r
        for each instant.'\r
  - condition: frame_also_rotating\r
    message:\r
      es: 'ADVERTENCIA: Si el marco también rota, deben añadirse F_centrífuga y F_Coriolis.\r
        Esta fórmula solo cubre traslación.'\r
      en: 'WARNING: If frame also rotates, F_centrifugal and F_Coriolis must be added.\r
        This formula only covers translation.'\r
  coherence_checks:\r
  - check: vector_direction(F_ficticia) == -vector_direction(a_marco)\r
    critical:\r
      es: 'CRÍTICO: F_ficticia debe apuntar exactamente opuesta a a_marco. Si no,\r
        error de signo.'\r
      en: 'CRITICAL: F_fictitious must point exactly opposite to a_frame. If not,\r
        sign error.'\r
  - check: if a_marco == 0\r
    info:\r
      es: Si a_marco = 0, entonces F_ficticia = 0. El marco es inercial.\r
      en: If a_frame = 0, then F_fictitious = 0. Frame is inertial.\r
  graph_implications:\r
  - if: a_marco constant\r
    then:\r
      es: F_ficticia es uniforme en todo el espacio del marco. Todos los objetos sienten\r
        la misma fuerza por unidad de masa (-a_marco).\r
      en: F_fictitious is uniform throughout frame space. All objects feel same force\r
        per unit mass (-a_frame).\r
  - if: a_marco accelerating_forward\r
    then:\r
      es: Visualizar vector F_ficticia apuntando hacia atrás en todos los objetos.\r
        Graficar como campo vectorial uniforme.\r
      en: Visualize F_fictitious vector pointing backward on all objects. Plot as\r
        uniform vector field.\r
  pedagogical_triggers:\r
  - condition: user_forgets_minus_sign\r
    error:\r
      es: 'ERROR MUY COMÚN: Olvidar el signo negativo. F_ficticia = -m·a_marco, NO\r
        +m·a_marco.'\r
      en: 'VERY COMMON ERROR: Forgetting minus sign. F_fictitious = -m·a_frame, NOT\r
        +m·a_frame.'\r
  - condition: user_includes_in_inertial_FBD\r
    error:\r
      es: 'ERROR GRAVE: Intentas dibujar F_ficticia en un diagrama de cuerpo libre\r
        inercial. Esta fuerza SOLO existe dentro del marco acelerado.'\r
      en: 'SERIOUS ERROR: Trying to draw F_fictitious in inertial free-body diagram.\r
        This force ONLY exists inside accelerated frame.'\r
  - condition: user_asks_what_exerts_force\r
    clarification:\r
      es: 'ACLARACIÓN: F_ficticia NO tiene agente físico. No hay cuerpo que la ejerza.\r
        Es un artificio matemático para mantener ΣF=ma en el marco acelerado.'\r
      en: 'CLARIFICATION: F_fictitious has NO physical agent. No body exerts it. It''s\r
        a mathematical device to maintain ΣF=ma in accelerated frame.'\r
- id: dinamica_en_no_inercial\r
  title:\r
    es: Segunda ley en marco no inercial\r
    en: Second law in non-inertial frame\r
  equation: F_real + F_ficticia = m * a_rel\r
  latex: \\sum \\vec{F}_{reales} + \\vec{F}_f = m \\vec{a}_{rel}\r
  rearrangements:\r
  - target: a_rel\r
    equation: a_rel = (F_real + F_ficticia) / m\r
    latex: \\vec{a}_{rel} = \\frac{\\sum \\vec{F}_{reales} + \\vec{F}_f}{m}\r
    constraints: []\r
  - target: F_real\r
    equation: F_real = m * a_rel - F_ficticia\r
    latex: \\sum \\vec{F}_{reales} = m \\vec{a}_{rel} - \\vec{F}_f\r
    constraints: []\r
  - target: F_ficticia\r
    equation: F_ficticia = m * a_rel - F_real\r
    latex: \\vec{F}_f = m \\vec{a}_{rel} - \\sum \\vec{F}_{reales}\r
    constraints: []\r
  category: kinematic_law\r
  relation_type: equation\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  interpretation_tags:\r
  - modified_newtons_second_law\r
  - non_inertial_dynamics\r
  - force_balance_with_fictitious\r
  result_semantics:\r
    target: a_rel\r
    meaning: Resulta util para interpretar a_rel en el contexto del leaf.\r
  domain_checks:\r
  - condition: m <= 0\r
    message:\r
      es: 'ERROR: Masa debe ser positiva.'\r
      en: 'ERROR: Mass must be positive.'\r
  - condition: forgot_to_include_fictitious_force\r
    message:\r
      es: 'ERROR COMÚN: ¿Incluiste F_ficticia = -m·a_marco en la suma? Sin ella, la\r
        ecuación solo es válida en sistemas inerciales.'\r
      en: 'COMMON ERROR: Did you include F_fictitious = -m·a_frame in sum? Without\r
        it, equation only valid in inertial systems.'\r
  - condition: object_at_rest_in_frame\r
    message:\r
      es: Si el objeto está en reposo dentro del marco (a_rel=0), entonces F_real\r
        + F_ficticia = 0. Fuerzas se cancelan exactamente.\r
      en: If object is at rest within frame (a_rel=0), then F_real + F_fictitious\r
        = 0. Forces cancel exactly.\r
  coherence_checks:\r
  - check: if a_rel == 0 then F_real + F_ficticia == 0\r
    info:\r
      es: Equilibrio dinámico dentro del marco. Las fuerzas reales compensan exactamente\r
        la fuerza ficticia.\r
      en: Dynamic equilibrium within frame. Real forces exactly compensate fictitious\r
        force.\r
  - check: if F_ficticia == 0 and a_marco != 0\r
    critical:\r
      es: 'INCOHERENCIA: Si el marco acelera (a_marco≠0), debe existir F_ficticia.\r
        Revisa tu cálculo.'\r
      en: 'INCOHERENCE: If frame accelerates (a_frame≠0), F_fictitious must exist.\r
        Check your calculation.'\r
  graph_implications:\r
  - if: a_rel == 0\r
    then:\r
      es: Objeto en reposo dentro del marco. Visualizar F_real y F_ficticia como vectores\r
        opuestos de igual magnitud.\r
      en: Object at rest within frame. Visualize F_real and F_fictitious as opposite\r
        vectors of equal magnitude.\r
  - if: a_rel != 0\r
    then:\r
      es: 'Objeto acelerando dentro del marco. Visualizar suma vectorial: F_real +\r
        F_ficticia apunta en dirección de a_rel.'\r
      en: 'Object accelerating within frame. Visualize vector sum: F_real + F_fictitious\r
        points in direction of a_rel.'\r
  pedagogical_triggers:\r
  - condition: user_uses_in_inertial_frame\r
    error:\r
      es: 'ERROR: Esta ecuación es para marcos NO inerciales. En sistemas inerciales\r
        usa ΣF_reales = m·a (sin términos ficticios).'\r
      en: 'ERROR: This equation is for NON-inertial frames. In inertial systems use\r
        ΣF_real = m·a (no fictitious terms).'\r
  - condition: user_confuses_a_rel_with_a_marco\r
    error:\r
      es: 'ERROR CONCEPTUAL: a_rel es la aceleración del OBJETO dentro del marco.\r
        a_marco es la aceleración del MARCO respecto a un SRI.'\r
      en: 'CONCEPTUAL ERROR: a_rel is OBJECT''s acceleration within frame. a_frame\r
        is FRAME''s acceleration relative to IRF.'\r
  - condition: pendulum_example\r
    hint:\r
      es: 'EJEMPLO CLÁSICO: Péndulo inclinado en vagón acelerando. Si péndulo en reposo\r
        (a_rel=0), entonces Tensión + Peso + F_ficticia = 0.'\r
      en: 'CLASSIC EXAMPLE: Tilted pendulum in accelerating carriage. If pendulum\r
        at rest (a_rel=0), then Tension + Weight + F_fictitious = 0.'\r
- id: fuerza_centrifuga\r
  title:\r
    es: Fuerza centrífuga en marcos rotantes\r
    en: Centrifugal force in rotating frames\r
  equation: F_centrifuga = m * omega^2 * r\r
  latex: \\vec{F}_{cf} = m \\omega^2 \\vec{r}\r
  rearrangements:\r
  - target: F_centrifuga\r
    equation: F_centrifuga = m * omega^2 * r\r
    latex: \\vec{F}_{cf} = m \\omega^2 \\vec{r}\r
    constraints: []\r
  - target: omega\r
    equation: omega = sqrt(F_centrifuga / (m * r))\r
    latex: \\omega = \\sqrt{\\frac{F_{cf}}{m \\cdot r}}\r
    constraints: []\r
  - target: r\r
    equation: r = F_centrifuga / (m * omega^2)\r
    latex: r = \\frac{F_{cf}}{m \\omega^2}\r
    constraints: []\r
  category: kinematic_law\r
  relation_type: equation\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  interpretation_tags:\r
  - centrifugal_force\r
  - rotating_frame\r
  - radial_fictitious_force\r
  result_semantics:\r
    target: F_centrifuga\r
    meaning: Resulta util para interpretar F_centrifuga en el contexto del leaf.\r
  domain_checks:\r
  - condition: m <= 0 or r <= 0\r
    message:\r
      es: 'ERROR: Masa y radio deben ser positivos.'\r
      en: 'ERROR: Mass and radius must be positive.'\r
  - condition: omega == 0\r
    message:\r
      es: Si ω = 0, no hay rotación. F_centrífuga = 0. El marco no es rotante.\r
      en: If ω = 0, no rotation. F_centrifugal = 0. Frame is not rotating.\r
  - condition: r == 0\r
    message:\r
      es: Si r = 0, el objeto está sobre el eje de rotación. F_centrífuga = 0, pero\r
        puede sentir F_Coriolis si se mueve.\r
      en: If r = 0, object is on rotation axis. F_centrifugal = 0, but may feel F_Coriolis\r
        if moving.\r
  - condition: omega very_large\r
    message:\r
      es: 'ADVERTENCIA: ω muy grande puede generar fuerzas centrífugas extremas. Centrífugas\r
        de laboratorio alcanzan 10⁵ g.'\r
      en: 'WARNING: Very large ω can generate extreme centrifugal forces. Lab centrifuges\r
        reach 10⁵ g.'\r
  coherence_checks:\r
  - check: vector_direction(F_centrifuga) == radial_outward\r
    critical:\r
      es: 'CRÍTICO: F_centrífuga debe apuntar radialmente hacia afuera. Si apunta\r
        hacia dentro, confundes con fuerza centrípeta (real).'\r
      en: 'CRITICAL: F_centrifugal must point radially outward. If pointing inward,\r
        you''re confusing with centripetal force (real).'\r
  - check: if in_inertial_frame\r
    error:\r
      es: 'ERROR: F_centrífuga NO existe en marcos inerciales. Solo usa esta fuerza\r
        dentro del marco rotante.'\r
      en: 'ERROR: F_centrifugal does NOT exist in inertial frames. Only use this force\r
        inside rotating frame.'\r
  graph_implications:\r
  - if: omega constant\r
    then:\r
      es: F_centrífuga aumenta linealmente con r. Graficar como vectores radiales\r
        crecientes hacia afuera.\r
      en: F_centrifugal increases linearly with r. Plot as radial vectors growing\r
        outward.\r
  - if: comparing different_masses\r
    then:\r
      es: Masas mayores sienten mayor F_centrífuga (proporcional a m). Visualizar\r
        vectores más largos para objetos más masivos.\r
      en: Greater masses feel greater F_centrifugal (proportional to m). Visualize\r
        longer vectors for more massive objects.\r
  pedagogical_triggers:\r
  - condition: user_confuses_with_centripetal\r
    error:\r
      es: 'ERROR GRAVÍSIMO: F_centrífuga (ficticia, hacia afuera) ≠ F_centrípeta (real,\r
        hacia adentro). En SRI solo existe la centrípeta.'\r
      en: 'VERY SERIOUS ERROR: F_centrifugal (fictitious, outward) ≠ F_centripetal\r
        (real, inward). In IRF only centripetal exists.'\r
  - condition: carousel_example\r
    hint:\r
      es: 'EJEMPLO: En un carrusel, sientes que ''te empujan hacia afuera''. Eso es\r
        F_centrífuga (dentro del marco rotante). Desde fuera, es solo tu inercia.'\r
      en: 'EXAMPLE: On carousel, you feel ''pushed outward''. That''s F_centrifugal\r
        (inside rotating frame). From outside, it''s just your inertia.'\r
  - condition: earth_example\r
    hint:\r
      es: En la Tierra (ω=7.27×10⁻⁵ rad/s, r_ecuador=6.37×10⁶ m), F_cf ≈ 0.3% del\r
        peso. Perceptible en básculas de precisión.\r
      en: On Earth (ω=7.27×10⁻⁵ rad/s, r_equator=6.37×10⁶ m), F_cf ≈ 0.3% of weight.\r
        Noticeable on precision scales.\r
- id: fuerza_coriolis\r
  title:\r
    es: Fuerza de Coriolis en marcos rotantes\r
    en: Coriolis force in rotating frames\r
  equation: F_coriolis = -2 * m * (omega × v_rel)\r
  latex: \\vec{F}_{cor} = -2m (\\vec{\\omega} \\times \\vec{v}_{rel})\r
  rearrangements: []\r
  category: kinematic_law\r
  relation_type: equation\r
  physical_meaning:\r
    es: Relación física fundamental de este leaf.\r
    en: Fundamental physical relationship of this leaf.\r
  constraints:\r
  - Classical mechanics validity conditions.\r
  validity:\r
    es: Válido en mecánica clásica newtoniana.\r
    en: Valid in classical Newtonian mechanics.\r
  dimension_check: dimensionally consistent\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Requiere producto vectorial completo y conocimiento de la dirección de ω y\r
      v_rel. Generalmente se resuelve por componentes en problemas específicos.\r
    en: Requires full vector product and knowledge of ω and v_rel directions. Generally\r
      solved component-wise in specific problems.\r
  used_in:\r
  - sistemas-no-inerciales-intro\r
  interpretation_tags:\r
  - coriolis_force\r
  - rotating_frame\r
  - velocity_dependent_fictitious\r
  result_semantics:\r
    target: F_coriolis\r
    meaning: Resulta util para interpretar F_coriolis en el contexto del leaf.\r
  domain_checks:\r
  - condition: v_rel == 0\r
    message:\r
      es: Si v_rel = 0, entonces F_Coriolis = 0. La fuerza de Coriolis SOLO actúa\r
        sobre objetos en movimiento dentro del marco rotante.\r
      en: If v_rel = 0, then F_Coriolis = 0. Coriolis force ONLY acts on moving objects\r
        within rotating frame.\r
  - condition: omega == 0\r
    message:\r
      es: Si ω = 0, no hay rotación. F_Coriolis = 0.\r
      en: If ω = 0, no rotation. F_Coriolis = 0.\r
  - condition: v_rel_parallel_to_omega\r
    message:\r
      es: Si v_rel ‖ ω, el producto vectorial es cero. F_Coriolis = 0 (movimiento\r
        paralelo al eje de rotación no siente Coriolis).\r
      en: If v_rel ‖ ω, vector product is zero. F_Coriolis = 0 (motion parallel to\r
        rotation axis doesn't feel Coriolis).\r
  - condition: earth_scale_phenomenon\r
    message:\r
      es: 'En la Tierra, F_Coriolis es pequeña (~10⁻⁴ N para persona caminando) pero\r
        crucial en fenómenos de gran escala: huracanes, corrientes oceánicas.'\r
      en: 'On Earth, F_Coriolis is small (~10⁻⁴ N for walking person) but crucial\r
        in large-scale phenomena: hurricanes, ocean currents.'\r
  coherence_checks:\r
  - check: vector_perpendicular(F_coriolis, v_rel)\r
    info:\r
      es: F_Coriolis siempre perpendicular a v_rel. Esto causa DESVIACIÓN de trayectorias,\r
        no cambio de rapidez.\r
      en: F_Coriolis always perpendicular to v_rel. This causes trajectory DEVIATION,\r
        not speed change.\r
  - check: if_rotating_hemisphere\r
    info:\r
      es: En Hemisferio Norte (ω apunta hacia arriba), objetos moviéndose hacia adelante\r
        se desvían a la DERECHA.\r
      en: In Northern Hemisphere (ω points upward), objects moving forward deviate\r
        to the RIGHT.\r
  graph_implications:\r
  - if: v_rel increasing\r
    then:\r
      es: F_Coriolis aumenta linealmente con v_rel. Objetos rápidos sienten mayor\r
        desviación.\r
      en: F_Coriolis increases linearly with v_rel. Fast objects feel greater deviation.\r
  - if: trajectory_plot\r
    then:\r
      es: Graficar trayectorias curvas en el marco rotante. Desde marco inercial,\r
        la trayectoria es recta (sin fuerzas laterales reales).\r
      en: Plot curved trajectories in rotating frame. From inertial frame, trajectory\r
        is straight (no real lateral forces).\r
  pedagogical_triggers:\r
  - condition: user_expects_coriolis_on_stationary_object\r
    error:\r
      es: 'ERROR: F_Coriolis es CERO si el objeto está quieto en el marco rotante.\r
        Solo actúa sobre objetos en movimiento relativo.'\r
      en: 'ERROR: F_Coriolis is ZERO if object is still in rotating frame. Only acts\r
        on objects in relative motion.'\r
  - condition: hurricane_example\r
    hint:\r
      es: 'EJEMPLO: Huracanes giran por F_Coriolis. Aire se mueve hacia el centro\r
        (v_rel grande), Coriolis lo desvía → rotación antihoraria (HN) / horaria (HS).'\r
      en: 'EXAMPLE: Hurricanes rotate due to F_Coriolis. Air moves toward center (large\r
        v_rel), Coriolis deflects it → counterclockwise (NH) / clockwise (SH).'\r
  - condition: sink_drain_myth\r
    clarification:\r
      es: 'MITO PARCIAL: Remolinos en lavabos NO son por Coriolis (demasiado pequeño).\r
        Son por asimetrías del lavabo. Coriolis solo domina en escalas > 1 km.'\r
      en: 'PARTIAL MYTH: Sink vortices are NOT due to Coriolis (too small). They''re\r
        from sink asymmetries. Coriolis only dominates at scales > 1 km.'\r
`;export{e as default};
