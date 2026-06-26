const e=`magnitudes:

- id: v_us
  symbol: v_us
  nombre:
    es: Velocidad de propagación ultrasónica
    en: Ultrasonic propagation speed
  descripcion:
    es: Velocidad a la que se propaga el pulso ultrasónico en el material ensayado.
    en: Speed at which the ultrasonic pulse propagates through the tested material.
  unidad_si: m/s
  dimension: "[L T⁻¹]"
  is_vector: false
  components: []
  category: fundamental
  physical_role: core_physical_quantity
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Confundir la velocidad en acero con la del agua o el aire; cada material tiene su propia velocidad."
  typical_range: "500 m/s (agua, ondas de cizalladura) a 6000 m/s (acero, ondas longitudinales)"
  sign_behavior:
    has_sign: false
    meaning:
      es: La velocidad ultrasónica es siempre positiva; no tiene sentido físico negativo en este contexto.
      en: Ultrasonic speed is always positive; a negative value has no physical meaning here.
  zero_behavior:
    allowed: false
    meaning:
      es: Velocidad cero indicaría ausencia de propagación; el material no transmitiría la onda, lo que señala error de configuración.
      en: Zero speed would indicate no propagation; the material would not transmit the wave, signalling a configuration error.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[500, 6000] m/s para sólidos y líquidos técnicos"
  interpretation_role:
    primary_for:
    - calculo_profundidad_defecto
    - calibracion_del_equipo
    secondary_for:
    - identificacion_de_material
  graph_binding:
    channels:
    - eje_y_velocidad
    - color_material
  pedagogical_notes:
    es: "La velocidad ultrasónica es característica del material, no del transductor. Cambiar la frecuencia del transductor no altera [[v_us]]. Solo un cambio de material o temperatura modifica este valor."
    en: "Ultrasonic speed is a material property, not a transducer property. Changing transducer frequency does not alter [[v_us]]. Only a material or temperature change modifies this value."

- id: t_vuelo
  symbol: t_vuelo
  nombre:
    es: Tiempo de vuelo
    en: Time of flight
  descripcion:
    es: Tiempo transcurrido entre la emisión del pulso ultrasónico y la recepción del eco reflejado.
    en: Time elapsed between the emission of the ultrasonic pulse and the reception of the reflected echo.
  unidad_si: s
  dimension: "[T]"
  is_vector: false
  components: []
  category: fundamental
  physical_role: core_physical_quantity
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Olvidar que el pulso recorre la distancia dos veces (ida y vuelta); usar t_vuelo directamente como distancia sin dividir entre dos."
  typical_range: "1 µs a 500 µs en ensayos industriales de piezas metálicas"
  sign_behavior:
    has_sign: false
    meaning:
      es: El tiempo de vuelo es siempre positivo; un valor negativo o nulo indica ausencia de eco o error de medida.
      en: Time of flight is always positive; a zero or negative value indicates no echo or measurement error.
  zero_behavior:
    allowed: false
    meaning:
      es: Tiempo cero implicaría que el eco llega antes de emitirse el pulso; es físicamente imposible.
      en: Zero time would imply the echo arrives before the pulse is emitted; physically impossible.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[1×10⁻⁶, 5×10⁻⁴] s"
  interpretation_role:
    primary_for:
    - calculo_profundidad_defecto
    - medicion_espesor
    secondary_for:
    - deteccion_de_inclusion
  graph_binding:
    channels:
    - eje_x_tiempo
    - pulso_asc
  pedagogical_notes:
    es: "[[t_vuelo]] es la variable que mide directamente el equipo de ultrasonidos. Todo el diagnóstico comienza aquí: convertir tiempo en profundidad requiere conocer [[v_us]] y recordar el factor 2 del recorrido ida-vuelta."
    en: "[[t_vuelo]] is the variable directly measured by the ultrasound equipment. All diagnosis starts here: converting time to depth requires knowing [[v_us]] and remembering the factor-of-2 for the round trip."

- id: d_defecto
  symbol: d_defecto
  nombre:
    es: Profundidad del defecto
    en: Defect depth
  descripcion:
    es: Distancia desde la superficie de entrada del transductor hasta el defecto detectado en el material.
    en: Distance from the transducer entry surface to the detected defect in the material.
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Calcular la profundidad como el producto directo de velocidad por tiempo sin dividir entre dos, obteniendo el doble del valor real."
  typical_range: "0.5 mm a varios metros según el material y la aplicación"
  sign_behavior:
    has_sign: false
    meaning:
      es: La profundidad es siempre positiva; describe una distancia geométrica desde la superficie.
      en: Depth is always positive; it describes a geometric distance from the surface.
  zero_behavior:
    allowed: false
    meaning:
      es: Profundidad cero indicaría un defecto en la propia superficie, que se identifica por otros métodos.
      en: Zero depth would indicate a surface defect, identified by other methods.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0.5×10⁻³, 5] m"
  interpretation_role:
    primary_for:
    - diagnostico_integridad_estructural
    - clasificacion_de_defecto
    secondary_for:
    - informe_de_ensayo
  graph_binding:
    channels:
    - eje_y_profundidad
    - marcador_defecto
  pedagogical_notes:
    es: "[[d_defecto]] es el resultado final del ensayo ultrasónico de detección. Su fiabilidad depende de la precisión de [[v_us]] (propiedad del material) y de [[t_vuelo]] (medida instrumental). Un error del 5 % en [[v_us]] se traduce directamente en un error del 5 % en [[d_defecto]]."
    en: "[[d_defecto]] is the final result of the ultrasonic detection test. Its reliability depends on the accuracy of [[v_us]] (material property) and [[t_vuelo]] (instrumental measurement). A 5% error in [[v_us]] translates directly into a 5% error in [[d_defecto]]."

- id: Z_ac
  symbol: Z_ac
  nombre:
    es: Impedancia acústica
    en: Acoustic impedance
  descripcion:
    es: Producto de la densidad del medio por la velocidad de propagación ultrasónica; determina la reflexión y transmisión en interfaces.
    en: Product of medium density and ultrasonic propagation speed; determines reflection and transmission at interfaces.
  unidad_si: "kg m⁻² s⁻¹"
  dimension: "[M L⁻² T⁻¹]"
  is_vector: false
  components: []
  category: fundamental
  physical_role: core_physical_quantity
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Confundir impedancia acústica con impedancia eléctrica; aunque el nombre es análogo, las unidades y el significado físico son completamente distintos."
  typical_range: "1.5 MRayl (agua) a 45 MRayl (acero); 1 Rayl = 1 kg m⁻² s⁻¹"
  sign_behavior:
    has_sign: false
    meaning:
      es: La impedancia acústica es siempre positiva; es un producto de densidad y velocidad, ambas cantidades positivas.
      en: Acoustic impedance is always positive; it is a product of density and speed, both positive quantities.
  zero_behavior:
    allowed: false
    meaning:
      es: Impedancia nula implicaría densidad cero o velocidad cero, ambas físicamente imposibles en un medio real.
      en: Zero impedance would imply zero density or zero speed, both physically impossible in a real medium.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[1.5×10⁶, 4.5×10⁷] kg m⁻² s⁻¹"
  interpretation_role:
    primary_for:
    - calculo_coeficiente_reflexion
    - seleccion_de_acoplante
    secondary_for:
    - identificacion_de_material
  graph_binding:
    channels:
    - eje_y_impedancia
    - color_interfaz
  pedagogical_notes:
    es: "[[Z_ac]] gobierna cuánta energía se refleja y cuánta se transmite en cada interfaz. Si dos materiales tienen la misma [[Z_ac]], toda la energía pasa; si difieren mucho (como acero y aire), casi toda se refleja. Esta es la razón por la que se usa gel acoplante en los ensayos."
    en: "[[Z_ac]] governs how much energy is reflected and how much is transmitted at each interface. If two materials share the same [[Z_ac]], all energy passes through; if they differ greatly (like steel and air), almost all is reflected. This is why coupling gel is used in testing."

- id: R_ac
  symbol: R_ac
  nombre:
    es: Coeficiente de reflexión acústica
    en: Acoustic reflection coefficient
  descripcion:
    es: Fracción de la amplitud de la onda incidente que se refleja en una interfaz entre dos medios de distinta impedancia acústica.
    en: Fraction of the incident wave amplitude reflected at an interface between two media of different acoustic impedance.
  unidad_si: adimensional
  dimension: "[1]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in:
  - formulas
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Confundir el coeficiente de reflexión en amplitud con el coeficiente en intensidad; el de intensidad es el cuadrado del de amplitud."
  typical_range: "0 (interfaz perfectamente acoplada) a 1 (interfaz acero-aire, reflexión casi total)"
  sign_behavior:
    has_sign: true
    meaning:
      es: "Un valor positivo indica que la onda reflejada mantiene la fase de la incidente (el segundo medio es más rígido). Un valor negativo indica inversión de fase (el segundo medio es menos rígido)."
      en: "A positive value indicates the reflected wave maintains the incident phase (the second medium is stiffer). A negative value indicates phase inversion (the second medium is less stiff)."
  zero_behavior:
    allowed: true
    meaning:
      es: Coeficiente cero implica adaptación perfecta de impedancias; toda la energía se transmite y no se genera eco.
      en: Zero coefficient implies perfect impedance matching; all energy is transmitted and no echo is generated.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "[-1, 1]"
  interpretation_role:
    primary_for:
    - calculo_amplitud_eco
    - diagnostico_tipo_defecto
    secondary_for:
    - diseño_de_acoplante
  graph_binding:
    channels:
    - eje_y_reflexion
    - color_interfaz
  pedagogical_notes:
    es: "[[R_ac]] próximo a 1 o a -1 significa que la interfaz es muy reflectante (discontinuidad mecánica severa). Un defecto de tipo fisura tiene [[R_ac]] próximo a 1 porque el interior de la fisura es aire. Un defecto de tipo inclusión metálica puede tener [[R_ac]] cercano a cero si su impedancia se acerca a la del material base."
    en: "[[R_ac]] close to 1 or -1 means the interface is highly reflective (severe mechanical discontinuity). A crack-type defect has [[R_ac]] close to 1 because the crack interior is air. A metallic inclusion defect may have [[R_ac]] close to zero if its impedance approaches that of the base material."

- id: rho_mat
  symbol: rho_mat
  nombre:
    es: Densidad del material
    en: Material density
  descripcion:
    es: Masa por unidad de volumen del material en el que se propaga la onda ultrasónica.
    en: Mass per unit volume of the material through which the ultrasonic wave propagates.
  unidad_si: "kg/m³"
  dimension: "[M L⁻³]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - formulas
  - teoria
  - interpretacion
  common_mistake: "Usar la densidad del material acoplante en lugar de la del material ensayado al calcular [[Z_ac]]."
  typical_range: "1000 kg/m³ (agua) a 7800 kg/m³ (acero)"
  sign_behavior:
    has_sign: false
    meaning:
      es: La densidad es siempre positiva; un valor negativo o nulo es físicamente imposible para un material sólido o líquido.
      en: Density is always positive; a negative or zero value is physically impossible for a solid or liquid material.
  zero_behavior:
    allowed: false
    meaning:
      es: Densidad cero implicaría vacío; los ultrasonidos no se propagan en el vacío.
      en: Zero density would imply vacuum; ultrasound does not propagate in vacuum.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[800, 19300] kg/m³ para materiales técnicos"
  interpretation_role:
    primary_for:
    - calculo_impedancia_acustica
    secondary_for:
    - identificacion_de_material
  graph_binding:
    channels:
    - parametro_material
  pedagogical_notes:
    es: "[[rho_mat]] entra en el cálculo de [[Z_ac]] multiplicada por [[v_us]]. En la práctica del ensayo no se mide directamente; se toma de tablas de propiedades del material. Una incertidumbre en [[rho_mat]] se propaga linealmente a [[Z_ac]] y al coeficiente [[R_ac]]."
    en: "[[rho_mat]] enters the calculation of [[Z_ac]] multiplied by [[v_us]]. In practice it is not directly measured; it is taken from material property tables. Uncertainty in [[rho_mat]] propagates linearly to [[Z_ac]] and to the coefficient [[R_ac]]."
`;export{e as default};
