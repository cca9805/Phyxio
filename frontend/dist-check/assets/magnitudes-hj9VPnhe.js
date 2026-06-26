const e=`version: 5\r
topic:\r
  id: energia-y-momento-de-la-onda-em\r
  title:\r
    es: Energia y momento de la onda em\r
    en: Energy and Momentum of an Electromagnetic Wave\r
\r
magnitudes:\r
  - id: E0
    symbol: "E_0"
    nombre:\r
      es: campo electrico eficaz\r
      en: rms electric field\r
    descripcion:\r
      es: Valor eficaz del campo electrico de una onda plana armonica.\r
      en: Root-mean-square electric field of a harmonic plane wave.\r
    unidad_si: "V/m"\r
    dimension: "[M L T^-3 I^-1]"\r
    is_vector: false\r
    components: []\r
    category: fundamental\r
    physical_role: core_physical_quantity\r
    used_in: [densidad_energia_rms, relacion_campos_rms]\r
    common_mistake:\r
      es: Confundirlo con amplitud maxima y perder el factor medio de energia.\r
      en: Confusing it with peak amplitude and losing the averaging factor.\r
    typical_range: "1e0 a 1e6 V/m en ondas clasicas no ionizantes"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Se usa como modulo eficaz no negativo del campo oscilante.\r
        en: It is used as a nonnegative rms magnitude of the oscillating field.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Sin campo electrico eficaz no hay onda energetica en este modelo.\r
        en: With no rms electric field there is no energetic wave in this model.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "E0 >= 0"\r
    interpretation_role:\r
      primary_for: [amplitud_energetica, estimacion_intensidad]\r
      secondary_for: [comparacion_con_B0]\r
    graph_binding:\r
      channels: [electric_field_scale]\r
    pedagogical_notes:
      es: Es la puerta entre el campo visible de la onda y su transporte energetico medio.
      en: It links the visible wave field to the average transported energy.

  - id: E
    symbol: "E"
    nombre:
      es: campo electrico instantaneo representado
      en: represented instantaneous electric field
    descripcion:
      es: Campo electrico visual usado por el grafico Svg compartido de onda electromagnetica.
      en: Visual electric field used by the shared electromagnetic-wave Svg graph.
    unidad_si: "V/m"
    dimension: "[M L T^-3 I^-1]"
    is_vector: false
    components: []
    category: state
    physical_role: external_reference
    used_in: [grafico_svg_onda]
    common_mistake:
      es: "Confundir el campo instantaneo visual [[E]] con el valor eficaz [[E0]] usado en energia media."
      en: "Confusing the visual instantaneous field [[E]] with the rms value [[E0]] used for average energy."
    typical_range: "1e0 a 1e6 V/m en representaciones clasicas"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo representa la fase instantanea del campo en el dibujo de onda.
        en: The sign represents the instantaneous phase of the field in the wave diagram.
    zero_behavior:
      allowed: true
      meaning:
        es: Cero puede aparecer en un nodo temporal o espacial de la oscilacion.
        en: Zero can appear at a temporal or spatial node of the oscillation.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for: [visualizacion_svg]
      secondary_for: [comparacion_con_E0]
    graph_binding:
      channels: [svg_electric_field]
    pedagogical_notes:
      es: "[[E]] existe para sincronizar el Svg reutilizado; los calculos energeticos usan [[E0]]."
      en: "[[E]] exists to synchronize the reused Svg; energy calculations use [[E0]]."

  - id: B0
    symbol: "B_0"
    nombre:\r
      es: campo magnetico eficaz\r
      en: rms magnetic field\r
    descripcion:\r
      es: Valor eficaz del campo magnetico asociado al campo electrico de la onda plana.\r
      en: Root-mean-square magnetic field associated with the electric field in a plane wave.\r
    unidad_si: "T"\r
    dimension: "[M T^-2 I^-1]"\r
    is_vector: false\r
    components: []\r
    category: fundamental\r
    physical_role: core_physical_quantity\r
    used_in: [relacion_campos_rms]\r
    common_mistake:\r
      es: Esperar que tenga el mismo valor numerico que el campo electrico en unidades SI.\r
      en: Expecting the same numerical value as the electric field in SI units.\r
    typical_range: "1e-9 a 1e-3 T para radiacion cotidiana o tecnica"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Se interpreta como modulo eficaz perpendicular al campo electrico.\r
        en: It is interpreted as the rms magnitude perpendicular to the electric field.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Si desaparece, desaparece tambien el acoplamiento transversal de la onda.\r
        en: If it vanishes, the transverse wave coupling also vanishes.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "B0 >= 0"\r
    interpretation_role:\r
      primary_for: [acoplamiento_campos]\r
      secondary_for: [diagnostico_unidades_si]\r
    graph_binding:\r
      channels: [magnetic_field_scale]\r
    pedagogical_notes:\r
      es: Sirve para recordar que energia y momento no son solo electricos, sino electromagneticos.\r
      en: It reminds students that the energy and momentum are electromagnetic, not only electric.\r
\r
  - id: epsilon0\r
    symbol: "\\\\varepsilon_0"\r
    nombre:\r
      es: permitividad del vacio\r
      en: vacuum permittivity\r
    descripcion:\r
      es: Constante que mide la respuesta electrica del vacio y fija la escala energetica del campo.\r
      en: Constant measuring the electric response of vacuum and setting the field energy scale.\r
    unidad_si: "F/m"\r
    dimension: "[M^-1 L^-3 T^4 I^2]"\r
    is_vector: false\r
    components: []\r
    category: constant\r
    physical_role: core_physical_quantity\r
    used_in: [densidad_energia_rms]\r
    common_mistake:\r
      es: Tratarla como un coeficiente ajustable del material cuando el modelo es de vacio.\r
      en: Treating it as a tunable material coefficient when the model is for vacuum.\r
    typical_range: "8.854e-12 F/m"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Es positiva; una permitividad negativa no pertenece a este modelo de vacio.\r
        en: It is positive; negative permittivity is outside this vacuum model.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Un valor nulo destruiria la escala de energia del campo electrico.\r
        en: A zero value would destroy the electric-field energy scale.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "epsilon0 > 0"\r
    interpretation_role:\r
      primary_for: [escala_constitutiva]\r
      secondary_for: [revision_dimensional]\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes:\r
      es: Debe verse como constante de conversion fisica entre campo eficaz y energia volumetrica.\r
      en: It should be seen as the physical conversion constant between rms field and volume energy.\r
\r
  - id: c\r
    symbol: "c"\r
    nombre:\r
      es: velocidad de la luz en el vacio\r
      en: speed of light in vacuum\r
    descripcion:\r
      es: Velocidad de propagacion que conecta energia, intensidad y momento en una onda EM plana.\r
      en: Propagation speed connecting energy, intensity, and momentum in a plane EM wave.\r
    unidad_si: "m/s"\r
    dimension: "[L T^-1]"\r
    is_vector: false\r
    components: []\r
    category: constant\r
    physical_role: core_physical_quantity\r
    used_in: [relacion_campos_rms, intensidad_media_onda, densidad_momento_onda, presion_radiacion_absorbente]\r
    common_mistake:\r
      es: Usarla solo como velocidad y no como factor que convierte densidad en flujo.\r
      en: Using it only as a speed and not as the factor converting density into flux.\r
    typical_range: "2.99792458e8 m/s en el vacio"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: En estas formulas es una rapidez positiva de propagacion.\r
        en: In these formulas it is a positive propagation speed.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Un valor nulo eliminaria la propagacion de la onda.\r
        en: A zero value would eliminate wave propagation.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "c > 0"\r
    interpretation_role:\r
      primary_for: [conversion_flujo_momento]\r
      secondary_for: [escala_relativista]\r
    graph_binding:\r
      channels: [slope_factor]\r
    pedagogical_notes:\r
      es: En este leaf, [[c]] no solo desplaza la onda; marca la pendiente entre energia y flujo.\r
      en: In this leaf, [[c]] does not only move the wave; it sets the slope between energy and flux.\r
\r
  - id: u_EM\r
    symbol: "u_{EM}"\r
    nombre:\r
      es: densidad media de energia electromagnetica\r
      en: average electromagnetic energy density\r
    descripcion:\r
      es: Energia media almacenada por unidad de volumen en el campo de la onda.\r
      en: Average energy stored per unit volume in the wave field.\r
    unidad_si: "J/m^3"\r
    dimension: "[M L^-1 T^-2]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role: core_physical_quantity\r
    used_in: [densidad_energia_rms, intensidad_media_onda, densidad_momento_onda]\r
    common_mistake:\r
      es: Confundir energia por volumen con energia total de un pulso finito.\r
      en: Confusing energy per volume with the total energy of a finite pulse.\r
    typical_range: "1e-12 a 1e-2 J/m^3 en radiacion clasica comun"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Es no negativa porque mide energia almacenada en el campo.\r
        en: It is nonnegative because it measures field energy storage.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Cero indica ausencia de transporte energetico electromagnetico local.\r
        en: Zero indicates no local electromagnetic energy transport.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "u_EM >= 0"\r
    interpretation_role:\r
      primary_for: [energia_por_volumen]\r
      secondary_for: [diagnostico_de_intensidad]\r
    graph_binding:\r
      channels: [x_energy_density]\r
    pedagogical_notes:\r
      es: Es la magnitud que permite ver la onda como energia distribuida en el espacio.\r
      en: It lets students see the wave as energy distributed through space.\r
\r
  - id: S_med
    symbol: "S_{med}"
    nombre:\r
      es: intensidad media de Poynting\r
      en: average Poynting intensity\r
    descripcion:\r
      es: Flujo medio de energia electromagnetica que cruza una unidad de area por unidad de tiempo.\r
      en: Average electromagnetic energy flux crossing unit area per unit time.\r
    unidad_si: "W/m^2"\r
    dimension: "[M T^-3]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role: core_physical_quantity\r
    used_in: [intensidad_media_onda, presion_radiacion_absorbente, potencia_incidente_area]\r
    common_mistake:\r
      es: Leerla como energia total y no como potencia por area.\r
      en: Reading it as total energy rather than power per area.\r
    typical_range: "1e-3 a 1e4 W/m^2 en situaciones clasicas habituales"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Aqui es el modulo medio dirigido en el sentido de propagacion.\r
        en: Here it is the average magnitude directed along propagation.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Cero significa que no atraviesa energia neta por la superficie.\r
        en: Zero means no net energy crosses the surface.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "S_med >= 0"\r
    interpretation_role:\r
      primary_for: [flujo_energetico, presion_radiacion]\r
      secondary_for: [potencia_sobre_area]\r
    graph_binding:\r
      channels: [y_intensity, star_value]\r
    pedagogical_notes:\r
      es: Es la magnitud dominante porque convierte el campo oscilante en energia disponible por area.\r
      en: It is dominant because it turns an oscillating field into usable energy per area.\r
\r
  - id: g_EM\r
    symbol: "g_{EM}"\r
    nombre:\r
      es: densidad de momento electromagnetico\r
      en: electromagnetic momentum density\r
    descripcion:\r
      es: Momento lineal transportado por unidad de volumen en la onda electromagnetica.\r
      en: Linear momentum transported per unit volume in the electromagnetic wave.\r
    unidad_si: "N s/m^3"\r
    dimension: "[M L^-2 T^-1]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role: core_physical_quantity\r
    used_in: [densidad_momento_onda]\r
    common_mistake:\r
      es: Pensar que una onda sin masa no puede transportar momento.\r
      en: Thinking that a massless wave cannot transport momentum.\r
    typical_range: "1e-20 a 1e-10 N s/m^3 en radiacion debil o solar"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Se usa como modulo en la direccion de propagacion.\r
        en: It is used as a magnitude along the propagation direction.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Cero implica ausencia de momento electromagnetico local.\r
        en: Zero implies no local electromagnetic momentum.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "g_EM >= 0"\r
    interpretation_role:\r
      primary_for: [momento_por_volumen]\r
      secondary_for: [presion_de_radiacion]\r
    graph_binding:\r
      channels: [momentum_density_readout]\r
    pedagogical_notes:\r
      es: Hace visible que el transporte de energia de la onda lleva asociado transporte de momento.\r
      en: It makes visible that wave energy transport carries momentum transport with it.\r
\r
  - id: p_rad\r
    symbol: "p_{rad}"\r
    nombre:\r
      es: presion de radiacion absorbida\r
      en: absorbed radiation pressure\r
    descripcion:\r
      es: Presion ejercida por una onda electromagnetica cuando su energia se absorbe en una superficie.\r
      en: Pressure exerted by an electromagnetic wave when its energy is absorbed at a surface.\r
    unidad_si: "Pa"\r
    dimension: "[M L^-1 T^-2]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role: core_physical_quantity\r
    used_in: [presion_radiacion_absorbente]\r
    common_mistake:\r
      es: Duplicarla siempre como si toda superficie fuese reflectante.\r
      en: Doubling it automatically as if every surface were perfectly reflecting.\r
    typical_range: "1e-12 a 1e-4 Pa en radiacion clasica no extrema"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Se toma como magnitud positiva normal a la superficie absorbente.\r
        en: It is taken as a positive magnitude normal to the absorbing surface.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Cero indica intensidad nula o ausencia de absorcion efectiva.\r
        en: Zero indicates zero intensity or no effective absorption.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "p_rad >= 0"\r
    interpretation_role:\r
      primary_for: [empuje_sobre_superficie]\r
      secondary_for: [momento_transportado]\r
    graph_binding:\r
      channels: [pressure_readout]\r
    pedagogical_notes:\r
      es: Conecta una onda aparentemente intangible con una fuerza mecanica medible.\r
      en: It connects an apparently intangible wave with a measurable mechanical force.\r
\r
  - id: A\r
    symbol: "A"\r
    nombre:\r
      es: area iluminada\r
      en: illuminated area\r
    descripcion:\r
      es: Superficie efectiva que intercepta la intensidad media de la onda.\r
      en: Effective surface intercepting the wave average intensity.\r
    unidad_si: "m^2"\r
    dimension: "[L^2]"\r
    is_vector: false\r
    components: []\r
    category: parameter\r
    physical_role: core_physical_quantity\r
    used_in: [potencia_incidente_area]\r
    common_mistake:\r
      es: Usar el area geometrica total aunque solo una parte reciba la onda.\r
      en: Using total geometric area even when only part receives the wave.\r
    typical_range: "1e-6 a 1e6 m^2 segun detector, panel o vela solar"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: El area efectiva es una magnitud geometrica positiva.\r
        en: Effective area is a positive geometric magnitude.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Area nula implica potencia interceptada nula.\r
        en: Zero area implies zero intercepted power.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "A >= 0"\r
    interpretation_role:\r
      primary_for: [potencia_total]\r
      secondary_for: [escalado_dispositivo]\r
    graph_binding:\r
      channels: [area_control]\r
    pedagogical_notes:\r
      es: Diferencia intensidad local de potencia total interceptada por un objeto real.\r
      en: It separates local intensity from total power intercepted by a real object.\r
\r
  - id: P_rad\r
    symbol: "P_{rad}"\r
    nombre:\r
      es: potencia electromagnetica incidente\r
      en: incident electromagnetic power\r
    descripcion:\r
      es: Potencia total que la onda entrega sobre un area iluminada.\r
      en: Total power delivered by the wave over an illuminated area.\r
    unidad_si: "W"\r
    dimension: "[M L^2 T^-3]"\r
    is_vector: false\r
    components: []\r
    category: derived\r
    physical_role: core_physical_quantity\r
    used_in: [potencia_incidente_area]\r
    common_mistake:\r
      es: Confundirla con la intensidad media y olvidar multiplicar por el area efectiva.\r
      en: Confusing it with average intensity and forgetting to multiply by effective area.\r
    typical_range: "1e-9 a 1e9 W segun area e intensidad"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Es una potencia transferida no negativa en el modelo absorbente.\r
        en: It is a nonnegative transferred power in the absorbing model.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Cero aparece si la intensidad o el area efectiva son nulas.\r
        en: Zero occurs if either intensity or effective area is zero.\r
    value_nature:\r
      kind: scalar_unsigned\r
      nonnegative_only: true\r
      expected_interval: "P_rad >= 0"\r
    interpretation_role:\r
      primary_for: [energia_recibida_por_dispositivo]\r
      secondary_for: [dimensionamiento_area]\r
    graph_binding:\r
      channels: [power_readout]\r
    pedagogical_notes:\r
      es: Obliga a distinguir una propiedad local de la onda de una entrega total a un sistema.\r
      en: It forces the distinction between a local wave property and total delivery to a system.\r
\r
`;export{e as default};
