const e=`version: 5\r
topic:\r
  id: energia-y-momento-de-la-onda-em\r
  title:\r
    es: Energia y momento de la onda em\r
    en: Energy and Momentum of an Electromagnetic Wave\r
\r
formulas:\r
  - id: relacion_campos_rms\r
    title:\r
      es: Relacion eficaz entre campos\r
      en: RMS field relation\r
    equation: B0 = E0 / c\r
    latex: B_0 = \\frac{E_0}{c}\r
    category: derived\r
    relation_type: constitutive_relation\r
    physical_meaning:\r
      es: Vincula las escalas eficaces electrica y magnetica de una onda plana en el vacio.\r
      en: Links the electric and magnetic rms scales of a plane wave in vacuum.\r
    constraints: [E0 >= 0, c > 0]\r
    validity:\r
      es: Valida para onda plana transversal en el vacio o medio no dispersivo equivalente.\r
      en: Valid for a transverse plane wave in vacuum or an equivalent nondispersive medium.\r
    dimension_check: "[M T^-2 I^-1] = [M L T^-3 I^-1] / [L T^-1]"\r
    calculable: true\r
    motivo_no_calculable:\r
      es: Requiere el campo electrico eficaz y la velocidad de propagacion.\r
      en: Requires the rms electric field and propagation speed.\r
    used_in: [acoplamiento_campos]\r
    interpretation_tags: [campos, acoplamiento]\r
    result_semantics:\r
      target: B0\r
      kind: core_physical_quantity\r
      sign_meaning:\r
        es: El resultado es un modulo eficaz no negativo.\r
        en: The result is a nonnegative rms magnitude.\r
      absolute_value_meaning:\r
        es: Escala magnetica asociada al campo electrico de la misma onda.\r
        en: Magnetic scale associated with the electric field of the same wave.\r
    domain_checks:\r
      - condition: "c > 0"\r
        message:\r
          es: "La velocidad de propagacion debe ser positiva."\r
          en: "Propagation speed must be positive."\r
        severity: error\r
    coherence_checks:\r
      - condition: "B0 >= 0"\r
        message:\r
          es: "El campo magnetico eficaz no puede ser negativo."\r
          en: "The rms magnetic field cannot be negative."\r
        severity: error\r
    graph_implications:\r
      es: "Ajusta la escala magnetica del esquema transversal Svg."\r
      en: "Adjusts the magnetic scale in the transverse Svg diagram."\r
    pedagogical_triggers: [confundir_escalas_si]\r
    rearrangements:\r
      - target: B0\r
        equation: B0 = E0 / c\r
        latex: B_0 = \\frac{E_0}{c}\r
      - target: E0\r
        equation: E0 = B0 * c\r
        latex: E_0 = B_0 \\cdot c\r
      - target: c\r
        equation: c = E0 / B0\r
        latex: c = \\frac{E_0}{B_0}\r
    variables: [B0, E0, c]\r
\r
  - id: densidad_energia_rms\r
    title:\r
      es: Densidad media de energia desde el campo eficaz\r
      en: Average energy density from rms field\r
    equation: u_EM = epsilon0 * E0^2\r
    latex: u_{EM} = \\varepsilon_0 \\cdot E_0^2\r
    category: derived\r
    relation_type: constitutive_relation
    physical_meaning:\r
      es: Convierte el campo electrico eficaz en energia electromagnetica media por volumen.\r
      en: Converts rms electric field into average electromagnetic energy per volume.\r
    constraints: [epsilon0 > 0, E0 >= 0]\r
    validity:\r
      es: Valida para onda plana armonica en el vacio usando valores eficaces.\r
      en: Valid for a harmonic plane wave in vacuum using rms values.\r
    dimension_check: "[M L^-1 T^-2] = [M^-1 L^-3 T^4 I^2] * [M L T^-3 I^-1]^2"\r
    calculable: true\r
    motivo_no_calculable:\r
      es: Requiere conocer el campo electrico eficaz y la permitividad del vacio.\r
      en: Requires the rms electric field and vacuum permittivity.\r
    used_in: [energia_volumetrica]\r
    interpretation_tags: [energia, campo]\r
    result_semantics:\r
      target: u_EM\r
      kind: core_physical_quantity\r
      sign_meaning:\r
        es: Siempre no negativa porque depende del cuadrado del campo.\r
        en: Always nonnegative because it depends on the square of the field.\r
      absolute_value_meaning:\r
        es: Energia media contenida en cada metro cubico de frente de onda.\r
        en: Average energy contained in each cubic metre of wavefront.\r
    domain_checks:\r
      - condition: "epsilon0 > 0"\r
        message:\r
          es: "La permitividad usada debe ser positiva."\r
          en: "The permittivity used must be positive."\r
        severity: error\r
    coherence_checks:\r
      - condition: "u_EM >= 0"\r
        message:\r
          es: "La densidad de energia no puede ser negativa."\r
          en: "Energy density cannot be negative."\r
        severity: error\r
    graph_implications:\r
      es: "Proporciona el eje horizontal del grafico de energia frente a intensidad."\r
      en: "Provides the horizontal axis of the energy-versus-intensity graph."\r
    pedagogical_triggers: [olvidar_promedio_rms]\r
    rearrangements:\r
      - target: u_EM
        equation: u_EM = epsilon0 * E0^2
        latex: u_{EM} = \\varepsilon_0 \\cdot E_0^2
      - target: epsilon0
        equation: epsilon0 = u_EM / E0^2
        latex: \\varepsilon_0 = \\frac{u_{EM}}{E_0^2}
    variables: [u_EM, epsilon0, E0]
\r
  - id: intensidad_media_onda\r
    title:\r
      es: Intensidad media transportada\r
      en: Transported average intensity\r
    equation: S_med = c * u_EM\r
    latex: S_{med} = c \\cdot u_{EM}
    category: fundamental\r
    relation_type: average_relation
    physical_meaning:\r
      es: La energia por volumen se convierte en flujo de energia al avanzar a la velocidad de la onda.\r
      en: Energy per volume becomes energy flux as it advances at the wave speed.\r
    constraints: [c > 0, u_EM >= 0]\r
    validity:\r
      es: Valida para flujo medio de una onda plana que transporta energia perpendicular al frente.\r
      en: Valid for the average flux of a plane wave transporting energy normal to the front.\r
    dimension_check: "[M T^-3] = [L T^-1] * [M L^-1 T^-2]"\r
    calculable: true\r
    motivo_no_calculable:\r
      es: Requiere densidad de energia media y velocidad de propagacion.\r
      en: Requires average energy density and propagation speed.\r
    used_in: [flujo_energetico]\r
    interpretation_tags: [intensidad, energia]\r
    result_semantics:\r
      target: S_med\r
      kind: core_physical_quantity\r
      sign_meaning:\r
        es: Se usa como modulo medio positivo del flujo de Poynting.\r
        en: It is used as the positive average magnitude of Poynting flux.\r
      absolute_value_meaning:\r
        es: Potencia por metro cuadrado que cruza la superficie.\r
        en: Power per square metre crossing the surface.\r
    domain_checks:\r
      - condition: "S_med >= 0"\r
        message:\r
          es: "La intensidad media no puede ser negativa en modulo."\r
          en: "Average intensity cannot be negative as a magnitude."\r
        severity: error\r
    coherence_checks:\r
      - condition: "S_med < 1e20"\r
        message:\r
          es: "Una intensidad mayor corresponde a regimen extremo fuera del modelo clasico cotidiano."\r
          en: "A larger intensity corresponds to an extreme regime outside everyday classical use."\r
        severity: warning\r
    graph_implications:\r
      es: "Define la pendiente del grafico Coord entre energia por volumen e intensidad."\r
      en: "Defines the Coord graph slope between energy per volume and intensity."\r
    pedagogical_triggers: [confundir_intensidad_energia_total]\r
    rearrangements:\r
      - target: S_med\r
        equation: S_med = c * u_EM\r
        latex: S_{med} = c \\cdot u_{EM}
      - target: u_EM\r
        equation: u_EM = S_med / c\r
        latex: u_{EM} = \\frac{S_{med}}{c}
      - target: c\r
        equation: c = S_med / u_EM\r
        latex: c = \\frac{S_{med}}{u_{EM}}
    variables: [S_med, c, u_EM]\r
\r
  - id: densidad_momento_onda\r
    title:\r
      es: Densidad de momento de la onda\r
      en: Wave momentum density\r
    equation: g_EM = u_EM / c\r
    latex: g_{EM} = \\frac{u_{EM}}{c}\r
    category: derived\r
    relation_type: constitutive_relation
    physical_meaning:\r
      es: Relaciona energia almacenada con momento lineal transportado por unidad de volumen.\r
      en: Relates stored energy with linear momentum transported per unit volume.\r
    constraints: [u_EM >= 0, c > 0]\r
    validity:\r
      es: Valida para radiacion electromagnetica libre con transporte paralelo a la propagacion.\r
      en: Valid for free electromagnetic radiation with transport parallel to propagation.\r
    dimension_check: "[M L^-2 T^-1] = [M L^-1 T^-2] / [L T^-1]"\r
    calculable: true\r
    motivo_no_calculable:\r
      es: Requiere densidad de energia media y velocidad de propagacion.\r
      en: Requires average energy density and propagation speed.\r
    used_in: [momento_electromagnetico]\r
    interpretation_tags: [momento, energia]\r
    result_semantics:\r
      target: g_EM\r
      kind: core_physical_quantity\r
      sign_meaning:\r
        es: Se lee como modulo de momento por volumen en la direccion de avance.\r
        en: It is read as momentum-per-volume magnitude along propagation.\r
      absolute_value_meaning:\r
        es: Cantidad de momento lineal electromagnetico contenida en un metro cubico.\r
        en: Amount of electromagnetic linear momentum contained in one cubic metre.\r
    domain_checks:\r
      - condition: "c > 0"\r
        message:\r
          es: "La velocidad usada para convertir energia en momento debe ser positiva."\r
          en: "The speed used to convert energy into momentum must be positive."\r
        severity: error\r
    coherence_checks:\r
      - condition: "g_EM >= 0"\r
        message:\r
          es: "La densidad de momento como modulo no puede ser negativa."\r
          en: "Momentum density as a magnitude cannot be negative."\r
        severity: error\r
    graph_implications:\r
      es: "Aparece como lectura secundaria junto a la presion en la tarjeta del grafico."\r
      en: "Appears as a secondary readout with pressure in the graph card."\r
    pedagogical_triggers: [onda_sin_masa_sin_momento]\r
    rearrangements:\r
      - target: g_EM\r
        equation: g_EM = u_EM / c\r
        latex: g_{EM} = \\frac{u_{EM}}{c}\r
      - target: u_EM\r
        equation: u_EM = g_EM * c\r
        latex: u_{EM} = g_{EM} \\cdot c\r
    variables: [g_EM, u_EM, c]\r
\r
  - id: presion_radiacion_absorbente\r
    title:\r
      es: Presion de radiacion sobre absorbente\r
      en: Radiation pressure on an absorber\r
    equation: p_rad = S_med / c\r
    latex: p_{rad} = \\frac{S_{med}}{c}
    category: derived\r
    relation_type: constitutive_relation
    physical_meaning:\r
      es: Convierte el flujo de energia absorbida en presion mecanica sobre una superficie.\r
      en: Converts absorbed energy flux into mechanical pressure on a surface.\r
    constraints: [S_med >= 0, c > 0]\r
    validity:\r
      es: Valida para incidencia normal y absorcion ideal sin reflexion especular dominante.\r
      en: Valid for normal incidence and ideal absorption without dominant specular reflection.\r
    dimension_check: "[M L^-1 T^-2] = [M T^-3] / [L T^-1]"\r
    calculable: true\r
    motivo_no_calculable:\r
      es: Requiere la intensidad media incidente y la velocidad de la luz.\r
      en: Requires incident average intensity and the speed of light.\r
    used_in: [presion_mecanica]\r
    interpretation_tags: [presion, momento]\r
    result_semantics:\r
      target: p_rad\r
      kind: core_physical_quantity\r
      sign_meaning:\r
        es: Positiva si la onda empuja en la normal de la superficie.\r
        en: Positive if the wave pushes along the surface normal.\r
      absolute_value_meaning:\r
        es: Fuerza por area debida al momento electromagnetico absorbido.\r
        en: Force per area due to absorbed electromagnetic momentum.\r
    domain_checks:\r
      - condition: "S_med >= 0"\r
        message:\r
          es: "La intensidad incidente debe ser no negativa."\r
          en: "Incident intensity must be nonnegative."\r
        severity: error\r
    coherence_checks:\r
      - condition: "p_rad < 1e8"\r
        message:\r
          es: "Presion enorme: revisar si el regimen sigue siendo una onda clasica absorbida."\r
          en: "Huge pressure: check whether the regime is still a classical absorbed wave."\r
        severity: warning\r
    graph_implications:\r
      es: "Muestra la consecuencia mecanica de aumentar la intensidad de la onda."\r
      en: "Shows the mechanical consequence of increasing wave intensity."\r
    pedagogical_triggers: [doblar_presion_sin_reflexion]\r
    rearrangements:\r
      - target: p_rad\r
        equation: p_rad = S_med / c\r
        latex: p_{rad} = \\frac{S_{med}}{c}
      - target: S_med\r
        equation: S_med = p_rad * c\r
        latex: S_{med} = p_{rad} \\cdot c
    variables: [p_rad, S_med, c]\r
\r
  - id: potencia_incidente_area\r
    title:\r
      es: Potencia incidente sobre area\r
      en: Incident power on area\r
    equation: P_rad = S_med * A\r
    latex: P_{rad} = S_{med} \\cdot A
    category: derived\r
    relation_type: average_relation
    physical_meaning:\r
      es: Escala la intensidad local a la potencia total interceptada por una superficie.\r
      en: Scales local intensity into total power intercepted by a surface.\r
    constraints: [S_med >= 0, A >= 0]\r
    validity:\r
      es: Valida si la intensidad es aproximadamente uniforme sobre el area efectiva.\r
      en: Valid if intensity is approximately uniform over the effective area.\r
    dimension_check: "[M L^2 T^-3] = [M T^-3] * [L^2]"\r
    calculable: true\r
    motivo_no_calculable:\r
      es: Requiere intensidad media y area iluminada efectiva.\r
      en: Requires average intensity and effective illuminated area.\r
    used_in: [potencia_total]\r
    interpretation_tags: [potencia, area]\r
    result_semantics:\r
      target: P_rad\r
      kind: core_physical_quantity\r
      sign_meaning:\r
        es: Es no negativa para una superficie que intercepta energia incidente.\r
        en: It is nonnegative for a surface intercepting incident energy.\r
      absolute_value_meaning:\r
        es: Potencia total recibida por el objeto iluminado.\r
        en: Total power received by the illuminated object.\r
    domain_checks:\r
      - condition: "A >= 0"\r
        message:\r
          es: "El area efectiva no puede ser negativa."\r
          en: "Effective area cannot be negative."\r
        severity: error\r
    coherence_checks:\r
      - condition: "P_rad >= 0"\r
        message:\r
          es: "La potencia incidente debe ser no negativa."\r
          en: "Incident power must be nonnegative."\r
        severity: error\r
    graph_implications:\r
      es: "Relaciona la lectura de intensidad con un dispositivo de area finita."\r
      en: "Relates the intensity reading to a finite-area device."\r
    pedagogical_triggers: [confundir_intensidad_y_potencia]\r
    rearrangements:\r
      - target: P_rad\r
        equation: P_rad = S_med * A\r
        latex: P_{rad} = S_{med} \\cdot A
      - target: S_med\r
        equation: S_med = P_rad / A\r
        latex: S_{med} = \\frac{P_{rad}}{A}
      - target: A\r
        equation: A = P_rad / S_med\r
        latex: A = \\frac{P_{rad}}{S_{med}}
    variables: [P_rad, S_med, A]\r
\r
ui:\r
  default_formula: intensidad_media_onda\r
  groups:\r
    - title:\r
        es: Campos y energia\r
        en: Fields and energy\r
      items:\r
        - relacion_campos_rms\r
        - densidad_energia_rms\r
        - intensidad_media_onda\r
    - title:\r
        es: Momento y accion mecanica\r
        en: Momentum and mechanical action\r
      items:\r
        - densidad_momento_onda\r
        - presion_radiacion_absorbente\r
        - potencia_incidente_area\r
\r
`;export{e as default};
