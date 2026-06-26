const e=`- id: profundidad_defecto\r
  title:\r
    es: Profundidad del defecto por tiempo de vuelo\r
    en: Defect depth from time of flight\r
  equation: "d_defecto = v_us * t_vuelo / 2"\r
  latex: "d_{defecto} = \\\\frac{v_{us} \\\\cdot t_{vuelo}}{2}  % v_us t_vuelo d_defecto"\r
  rearrangements:\r
    - target: d_defecto\r
      equation: "d_defecto = v_us * t_vuelo / 2"\r
      latex: "d_{defecto} = \\\\frac{v_{us} \\\\cdot t_{vuelo}}{2}"\r
    - target: v_us\r
      equation: "v_us = 2 * d_defecto / t_vuelo"\r
      latex: "v_{us} = \\\\frac{2 \\\\cdot d_{defecto}}{t_{vuelo}}"\r
    - target: t_vuelo\r
      equation: "t_vuelo = 2 * d_defecto / v_us"\r
      latex: "t_{vuelo} = \\\\frac{2 \\\\cdot d_{defecto}}{v_{us}}"\r
  category: fundamental\r
  relation_type: definition\r
  physical_meaning:\r
    es: "El pulso ultrasónico recorre la distancia desde el transductor al defecto y regresa. El factor 2 en el denominador corrige este doble recorrido. Conocida [[v_us]] del material, [[t_vuelo]] medido por el equipo permite calcular [[d_defecto]] con precisión."\r
    en: "The ultrasonic pulse travels from the transducer to the defect and back. The factor 2 in the denominator corrects for this round trip. Given the known [[v_us]] of the material, the equipment-measured [[t_vuelo]] allows [[d_defecto]] to be calculated accurately."\r
  constraints:\r
    - "v_us > 0"\r
    - "t_vuelo > 0"\r
    - "d_defecto > 0"\r
  validity:\r
    es: "Válida cuando el pulso se propaga en un medio homogéneo sin discontinuidades intermedias que alteren la velocidad. Falla si hay gradientes de temperatura, zonas de porosidad variable o reflexiones múltiples no separadas en tiempo."\r
    en: "Valid when the pulse propagates in a homogeneous medium without intermediate discontinuities that alter the speed. Fails if there are temperature gradients, variable porosity zones or multiple reflections not separated in time."\r
  dimension_check: "[L] = [L T⁻¹] · [T] / 1 = [L] ✓"\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
    - teoria\r
    - ejemplos\r
    - interpretacion\r
  interpretation_tags:\r
    - tiempo_de_vuelo\r
    - deteccion_de_defecto\r
    - calibracion\r
  result_semantics:\r
    target: d_defecto\r
    kind: scalar_unsigned\r
    sign_meaning:\r
      es: "La profundidad del defecto es siempre positiva; un valor negativo indicaría error de cálculo o de configuración del equipo."\r
      en: "Defect depth is always positive; a negative value would indicate a calculation or equipment configuration error."\r
    absolute_value_meaning:\r
      es: "El valor en metros indica a qué distancia de la superficie de entrada se localiza la discontinuidad detectada. Valores inferiores a 1 mm requieren transductores de alta frecuencia y resolución temporal elevada."\r
      en: "The value in metres indicates at what distance from the entry surface the detected discontinuity is located. Values below 1 mm require high-frequency transducers and high temporal resolution."\r
  domain_checks:\r
    - "d_defecto > 0"\r
    - "d_defecto < espesor_pieza"\r
  coherence_checks:\r
    - "d_defecto aumenta si t_vuelo aumenta con v_us fijo"\r
    - "d_defecto disminuye si v_us aumenta con t_vuelo fijo"\r
  graph_implications:\r
    - "En el osciloscopio A-scan, la posición del eco de defecto en el eje temporal indica d_defecto: mayor tiempo equivale a mayor profundidad"\r
    - "La amplitud del eco relaciona la extensión del defecto, no su profundidad"\r
  pedagogical_triggers:\r
    - "Si d_defecto resulta mayor que el espesor de la pieza, el alumno olvidó el factor 2 o usó unidades inconsistentes"\r
    - "Si el resultado es el doble del esperado, el factor 2 fue omitido en el denominador"\r
\r
- id: impedancia_acustica\r
  title:\r
    es: Impedancia acústica del medio\r
    en: Acoustic impedance of the medium\r
  equation: "Z_ac = rho_mat * v_us"\r
  latex: "Z_{ac} = rho_{mat} \\\\cdot v_{us}  % Z_ac rho_mat v_us"\r
  rearrangements:\r
    - target: Z_ac\r
      equation: "Z_ac = rho_mat * v_us"\r
      latex: "Z_{ac} = rho_{mat} \\\\cdot v_{us}"\r
    - target: rho_mat\r
      equation: "rho_mat = Z_ac / v_us"\r
      latex: "rho_{mat} = \\\\frac{Z_{ac}}{v_{us}}"\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "La impedancia acústica [[Z_ac]] es el producto de la densidad del medio [[rho_mat]] por la velocidad de propagación [[v_us]]. Cuantifica la resistencia del medio al paso de la onda; una diferencia de [[Z_ac]] entre dos medios produce reflexión en su interfaz."\r
    en: "Acoustic impedance [[Z_ac]] is the product of medium density [[rho_mat]] and propagation speed [[v_us]]. It quantifies the medium's resistance to wave passage; a difference in [[Z_ac]] between two media produces reflection at their interface."\r
  constraints:\r
    - "rho_mat > 0"\r
    - "v_us > 0"\r
  validity:\r
    es: "Válida para ondas planas en medios homogéneos e isótropos. En medios anisótropos como composites de fibra, la impedancia depende de la dirección de propagación."\r
    en: "Valid for plane waves in homogeneous, isotropic media. In anisotropic media such as fibre composites, impedance depends on the propagation direction."\r
  dimension_check: "[M L⁻² T⁻¹] = [M L⁻³] · [L T⁻¹] ✓"\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
    - teoria\r
    - ejemplos\r
    - interpretacion\r
  interpretation_tags:\r
    - impedancia_acustica\r
    - adaptacion_de_medios\r
    - reflexion_transmision\r
  result_semantics:\r
    target: Z_ac\r
    kind: scalar_unsigned\r
    sign_meaning:\r
      es: "La impedancia acústica es siempre positiva; es un producto de dos cantidades positivas."\r
      en: "Acoustic impedance is always positive; it is a product of two positive quantities."\r
    absolute_value_meaning:\r
      es: "El valor en kg m⁻² s⁻¹ (rayl) indica la rigidez acústica del medio. El agua tiene aproximadamente 1.5 MRayl y el acero aproximadamente 45 MRayl."\r
      en: "The value in kg m⁻² s⁻¹ (rayl) indicates the acoustic stiffness of the medium. Water has approximately 1.5 MRayl and steel approximately 45 MRayl."\r
  domain_checks:\r
    - "Z_ac > 0"\r
    - "Z_ac >= 1.5e6 para medios acuosos"\r
  coherence_checks:\r
    - "Z_ac aumenta si rho_mat aumenta con v_us fijo"\r
    - "Z_ac de acero debe ser aproximadamente 30 veces mayor que la de agua"\r
  graph_implications:\r
    - "En gráfica de materiales, Z_ac crece con la densidad y con la rigidez; metales pesados y rígidos tienen los valores más altos"\r
  pedagogical_triggers:\r
    - "Si Z_ac resulta inferior a 1 MRayl para un metal, verificar si se usaron unidades CGS en lugar de SI"\r
    - "Si el alumno pregunta por qué se necesita gel en la sonda, relacionar con la diferencia de Z_ac entre piel y transductor"\r
\r
- id: coeficiente_reflexion\r
  title:\r
    es: Coeficiente de reflexión acústica en amplitud\r
    en: Acoustic reflection coefficient in amplitude\r
  equation: "R_ac = (Z_ac2 - Z_ac1) / (Z_ac2 + Z_ac1)"\r
  latex: "R_{ac} = \\\\frac{Z_{ac2} - Z_{ac1}}{Z_{ac2} + Z_{ac1}}  % R_ac Z_ac"\r
  rearrangements:\r
    - target: R_ac\r
      equation: "R_ac = (Z_ac2 - Z_ac1) / (Z_ac2 + Z_ac1)"\r
      latex: "R_{ac} = \\\\frac{Z_{ac2} - Z_{ac1}}{Z_{ac2} + Z_{ac1}}"\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "[[R_ac]] cuantifica qué fracción de la amplitud de presión se refleja en una interfaz entre dos medios con impedancias [[Z_ac]] distintas. Su signo indica si la onda reflejada está en fase o en contrafase con la incidente."\r
    en: "[[R_ac]] quantifies what fraction of the pressure amplitude is reflected at an interface between two media with different [[Z_ac]]. Its sign indicates whether the reflected wave is in phase or in antiphase with the incident wave."\r
  constraints:\r
    - "Z_ac1 > 0"\r
    - "Z_ac2 > 0"\r
    - "Z_ac1 + Z_ac2 > 0"\r
  validity:\r
    es: "Válida en la aproximación de incidencia normal y medios de extensión infinita. Para incidencia oblicua se requieren las ecuaciones de Fresnel acústico."\r
    en: "Valid in the normal-incidence approximation with infinite-extent media. For oblique incidence, acoustic Fresnel equations are required."\r
  dimension_check: "[1] = [M L⁻² T⁻¹] / [M L⁻² T⁻¹] = adimensional ✓"\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
    - teoria\r
    - ejemplos\r
    - interpretacion\r
  interpretation_tags:\r
    - reflexion_interfaz\r
    - contraste_acustico\r
    - deteccion_de_defecto\r
  result_semantics:\r
    target: R_ac\r
    kind: scalar_signed\r
    sign_meaning:\r
      es: "Positivo indica que el segundo medio es más rígido (mayor Z_ac); la onda reflejada está en fase con la incidente. Negativo indica que el segundo medio es más blando; la onda reflejada está en contrafase."\r
      en: "Positive means the second medium is stiffer (higher Z_ac); the reflected wave is in phase with the incident one. Negative means the second medium is softer; the reflected wave is in antiphase."\r
    absolute_value_meaning:\r
      es: "El módulo indica la fracción de amplitud reflejada. Para una fisura llena de aire, es próximo a 1, lo que produce un eco muy intenso y fácilmente detectable."\r
      en: "The magnitude indicates the fraction of amplitude reflected. For an air-filled crack, it is close to 1, producing a very intense and easily detectable echo."\r
  domain_checks:\r
    - "R_ac >= -1"\r
    - "R_ac <= 1"\r
  coherence_checks:\r
    - "R_ac próximo a 1 o -1 indica discontinuidad severa (fisura, poro, inclusión de aire)"\r
    - "R_ac próximo a 0 indica adaptación acústica buena o inclusión de material similar"\r
  graph_implications:\r
    - "En el A-scan, la amplitud del eco es proporcional al módulo de R_ac; mayor módulo produce pico más alto"\r
    - "El signo de R_ac determina la polaridad del eco; un cambio de fase visible en el osciloscopio indica R_ac negativo"\r
  pedagogical_triggers:\r
    - "Si el alumno obtiene R_ac mayor que 1 en módulo, ha calculado el cociente invertido o ha cometido error algebraico"\r
    - "Si el resultado es cero para acero-agua, verificar que no se han usado las mismas impedancias para ambos medios"\r
`;export{e as default};
