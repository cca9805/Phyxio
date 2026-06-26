const e=`version: "5.0"
id: interp-aplicaciones-ultrasonidos-y-ensayos
leaf_id: aplicaciones-ultrasonidos-y-ensayos

nombre:
  es: Interpretación — Aplicaciones de ultrasonidos y ensayos
  en: Interpretation — Ultrasound and Testing Applications

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/aplicaciones-ultrasonidos-y-ensayos

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    summary:
      es: Resumen
      en: Summary
    physical_reading:
      es: Lectura física
      en: Physical reading
    coherence:
      es: Coherencia
      en: Coherence
    model_validity:
      es: Validez del modelo
      en: Model validity
    graph_reading:
      es: Lectura del gráfico
      en: Graph reading
    likely_errors:
      es: Errores probables
      en: Likely errors
    next_step:
      es: Siguiente paso
      en: Next step
  priority_order:
    - summary
    - likely_errors
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - next_step
  inline_limits:
    max_messages: 4
    show_warnings: true

dependencies:
  formulas:
    - profundidad_defecto
    - impedancia_acustica
    - coeficiente_reflexion
  magnitudes:
    - v_us
    - t_vuelo
    - d_defecto
    - Z_ac
    - R_ac
    - rho_mat

global_context:
  physical_domain:
    es: "Ensayos no destructivos por ultrasonidos (END-US). El sistema emite pulsos de presión a frecuencias entre 0.5 MHz y 20 MHz en un sólido o líquido y registra los ecos para localizar defectos internos y medir propiedades del material."
    en: "Non-destructive ultrasonic testing (UT-NDT). The system emits pressure pulses at frequencies between 0.5 MHz and 20 MHz in a solid or liquid and records echoes to locate internal defects and measure material properties."
  axis_convention:
    es: "Eje de profundidad positivo hacia el interior de la pieza desde la cara de entrada del transductor."
    en: "Depth axis positive towards the interior of the part from the transducer entry face."
  standard_assumptions:
    - "Propagación lineal sin saturación"
    - "Material homogéneo en la zona de inspección"
    - "Temperatura constante durante el ensayo"
    - "Incidencia normal del haz sobre el defecto"
  standard_warnings:
    - "La velocidad [[v_us]] debe calibrarse en una muestra del mismo material a la misma temperatura"
    - "En materiales anisótropos (composites), la velocidad varía con la dirección"
    - "Los gradientes de temperatura pueden introducir errores superiores al 3 %"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
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
      es: Coherencia
      en: Coherence
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
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:

  d_defecto:
    magnitude_type: derived
    semantic_role:
      es: "Profundidad del defecto detectado a partir del tiempo de vuelo medido"
      en: "Depth of the detected defect calculated from the measured time of flight"
    summary_rules:
      - id: d_defecto_summary_small
        when: "d_defecto < 0.01"
        status: warning
        text:
          es: "[[d_defecto]] es inferior a 10 mm. Este resultado indica un defecto muy superficial; la zona ciega del transductor podría enmascarar la señal. Revisar el tiempo muerto del equipo."
          en: "[[d_defecto]] is less than 10 mm. This result indicates a very shallow defect; the transducer dead zone could mask the signal. Check the equipment dead time."
      - id: d_defecto_summary_normal
        when: "d_defecto >= 0.01"
        status: ok
        text:
          es: "[[d_defecto]] indica la distancia desde la superficie de entrada hasta la discontinuidad detectada. El resultado depende de [[v_us]] del material y de [[t_vuelo]] medido con precisión."
          en: "[[d_defecto]] indicates the distance from the entry surface to the detected discontinuity. The result depends on [[v_us]] of the material and the precisely measured [[t_vuelo]]."
      - id: d_defecto_summary_default
        when: "true"
        status: ok
        text:
          es: "[[d_defecto]] resume la localización axial del defecto en el ensayo ultrasónico. Un error del 1 % en [[v_us]] se traduce directamente en un error del 1 % en [[d_defecto]]."
          en: "[[d_defecto]] summarises the axial location of the defect in the ultrasonic test. A 1% error in [[v_us]] translates directly into a 1% error in [[d_defecto]]."
    physical_reading_rules:
      - id: d_defecto_reading_shallow
        when: "d_defecto < 0.005"
        status: warning
        text:
          es: "Profundidad inferior a 5 mm. La resolución axial del equipo depende de la duración del pulso; con frecuencias menores de 1 MHz, dos defectos a esta profundidad pueden solaparse y no resolverse como señales independientes."
          en: "Depth less than 5 mm. The axial resolution of the equipment depends on pulse duration; at frequencies below 1 MHz, two defects at this depth may overlap and not be resolved as independent signals."
      - id: d_defecto_reading_default
        when: "true"
        status: ok
        text:
          es: "La profundidad del defecto resulta de dividir entre dos el producto de [[v_us]] y [[t_vuelo]]. Físicamente, el factor 2 compensa el doble recorrido del pulso: va hasta el defecto y regresa al transductor receptor. Mayor [[t_vuelo]] implica mayor [[d_defecto]] de forma lineal."
          en: "Defect depth results from dividing by two the product of [[v_us]] and [[t_vuelo]]. Physically, the factor 2 compensates for the round-trip: the pulse travels to the defect and returns to the receiving transducer. Higher [[t_vuelo]] linearly implies greater [[d_defecto]]."
    coherence_rules:
      - id: d_defecto_coherence_positive
        when: "d_defecto > 0"
        status: ok
        text:
          es: "[[d_defecto]] es positiva, como se espera para una distancia geométrica desde la superficie."
          en: "[[d_defecto]] is positive, as expected for a geometric distance from the surface."
      - id: d_defecto_coherence_zero
        when: "d_defecto <= 0"
        status: error
        text:
          es: "[[d_defecto]] nula o negativa es físicamente imposible. Verificar que [[t_vuelo]] y [[v_us]] son positivos y que se aplicó correctamente el factor 2."
          en: "Zero or negative [[d_defecto]] is physically impossible. Check that [[t_vuelo]] and [[v_us]] are positive and that the factor 2 was correctly applied."
      - id: d_defecto_coherence_default
        when: "true"
        status: ok
        text:
          es: "Los valores son coherentes. Confirmar que [[v_us]] corresponde al material real ensayado a la temperatura de trabajo."
          en: "Values are coherent. Confirm that [[v_us]] corresponds to the actual tested material at the working temperature."
    model_validity_rules:
      - id: d_defecto_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de tiempo de vuelo es válido para materiales homogéneos con [[v_us]] uniforme. Deja de ser fiable si la pieza tiene gradientes de densidad, cambios de fase metalúrgicos o zonas de porosidad variable que alteran localmente [[v_us]]. En esos casos, la profundidad calculada puede diferir de la real en más del 5 %."
          en: "The time-of-flight model is valid for homogeneous materials with uniform [[v_us]]. It becomes unreliable if the part has density gradients, metallurgical phase changes, or variable porosity zones that locally alter [[v_us]]. In such cases, the calculated depth may differ from the actual by more than 5%."
    graph_rules:
      - id: d_defecto_graph_default
        when: "true"
        status: ok
        text:
          es: "En el A-scan, la posición temporal del eco de defecto es proporcional a [[d_defecto]]. Un defecto más profundo produce un eco desplazado hacia la derecha en el eje de tiempo. El marcador de escala del osciloscopio permite leer [[d_defecto]] directamente si [[v_us]] está calibrada."
          en: "In the A-scan, the temporal position of the defect echo is proportional to [[d_defecto]]. A deeper defect produces an echo shifted to the right on the time axis. The oscilloscope scale marker allows reading [[d_defecto]] directly if [[v_us]] is calibrated."
    likely_errors:
      - id: d_defecto_error_factor2
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar el factor 2 del recorrido de ida y vuelta. Esto produce un valor de [[d_defecto]] el doble del real. Si el resultado parece excesivo respecto al espesor de la pieza, revisar si se dividió entre 2."
          en: "Common error: forgetting the factor-of-2 for the round trip. This yields a [[d_defecto]] value twice the real one. If the result seems excessive relative to the part thickness, check whether division by 2 was applied."
      - id: d_defecto_error_units
        when: "true"
        status: warning
        text:
          es: "Error de unidades: [[t_vuelo]] en microsegundos debe convertirse a segundos antes de multiplicar por [[v_us]] en m/s. Un olvido de este paso da [[d_defecto]] un millón de veces mayor."
          en: "Units error: [[t_vuelo]] in microseconds must be converted to seconds before multiplying by [[v_us]] in m/s. Missing this step gives [[d_defecto]] a million times larger."
    next_step_rules:
      - id: d_defecto_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[d_defecto]] calculada, el siguiente paso es estimar la extensión lateral del defecto analizando el ancho del eco en el A-scan y comparándolo con la apertura del haz. Después, relacionar [[R_ac]] con el tipo de defecto más probable."
          en: "With [[d_defecto]] calculated, the next step is to estimate the lateral extent of the defect by analysing the echo width in the A-scan and comparing it with the beam aperture. Then relate [[R_ac]] to the most probable defect type."

  v_us:
    magnitude_type: fundamental
    semantic_role:
      es: "Velocidad de propagación ultrasónica del material, usada para convertir tiempo en profundidad"
      en: "Ultrasonic propagation speed of the material, used to convert time to depth"
    summary_rules:
      - id: v_us_summary_low
        when: "v_us < 2000"
        status: warning
        text:
          es: "[[v_us]] inferior a 2000 m/s indica un medio líquido o un polímero blando. Si se ensaya un metal, este valor indica error de calibración o confusión con la velocidad de cizalladura."
          en: "[[v_us]] below 2000 m/s indicates a liquid medium or soft polymer. If testing a metal, this value suggests calibration error or confusion with the shear wave speed."
      - id: v_us_summary_metal
        when: "v_us >= 5000"
        status: ok
        text:
          es: "[[v_us]] en el rango de 5000 a 6500 m/s es consistente con metales ferrosos como acero o hierro. Este resultado indica que la calibración del equipo en material ferroso es correcta."
          en: "[[v_us]] in the 5000–6500 m/s range is consistent with ferrous metals such as steel or iron. This result indicates that the equipment calibration for ferrous material is correct."
      - id: v_us_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_us]] resume la propiedad más importante del material para el ensayo ultrasónico. Depende del módulo elástico y de la densidad del material; un cambio de temperatura de 10 °C puede variar [[v_us]] hasta un 0.5 %."
          en: "[[v_us]] summarises the most important material property for ultrasonic testing. It depends on the elastic modulus and density of the material; a 10 °C temperature change can vary [[v_us]] by up to 0.5%."
    physical_reading_rules:
      - id: v_us_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_us]] refleja la rigidez elástica del material dividida por su densidad (en la aproximación de onda longitudinal). Materiales más rígidos y menos densos tienen mayor [[v_us]]. Esta dependencia permite usar la velocidad ultrasónica como indicador de calidad del material."
          en: "[[v_us]] reflects the elastic stiffness of the material divided by its density (in the longitudinal wave approximation). Stiffer and less dense materials have higher [[v_us]]. This dependence allows ultrasonic velocity to be used as a material quality indicator."
    coherence_rules:
      - id: v_us_coherence_positive
        when: "v_us > 0"
        status: ok
        text:
          es: "[[v_us]] es positiva, lo cual es físicamente necesario para una velocidad de propagación."
          en: "[[v_us]] is positive, which is physically necessary for a propagation speed."
      - id: v_us_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[v_us]] es consistente con el material declarado. Para acero, el rango típico de ondas longitudinales es 5800–6000 m/s; para aluminio, 6200–6400 m/s; para agua, 1480–1500 m/s."
          en: "Verify that [[v_us]] is consistent with the declared material. For steel, the typical longitudinal wave range is 5800–6000 m/s; for aluminium, 6200–6400 m/s; for water, 1480–1500 m/s."
    model_validity_rules:
      - id: v_us_validity_default
        when: "true"
        status: ok
        text:
          es: "[[v_us]] es válida como constante solo cuando la temperatura, la composición y la dirección de propagación son uniformes. En materiales con gradientes térmicos o texturas cristalográficas fuertes, la velocidad varía posicionalmente y el modelo de velocidad constante introduce errores sistemáticos."
          en: "[[v_us]] is valid as a constant only when temperature, composition and propagation direction are uniform. In materials with thermal gradients or strong crystallographic textures, velocity varies positionally and the constant-velocity model introduces systematic errors."
    graph_rules:
      - id: v_us_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico de calibración, la pendiente de la curva profundidad-tiempo es igual a [[v_us]] dividida entre 2. Una pendiente más pronunciada indica mayor [[v_us]] en el material ensayado."
          en: "In the calibration graph, the slope of the depth-time curve equals [[v_us]] divided by 2. A steeper slope indicates higher [[v_us]] in the tested material."
    likely_errors:
      - id: v_us_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: aplicar la velocidad del acero estándar (5900 m/s) a una aleación con tratamiento térmico diferente. Los tratamientos de temple o recocido pueden cambiar [[v_us]] hasta un 2 %, suficiente para introducir errores de posición de 2 mm en piezas gruesas."
          en: "Common error: applying standard steel speed (5900 m/s) to an alloy with a different heat treatment. Hardening or annealing treatments can change [[v_us]] by up to 2%, enough to introduce 2 mm position errors in thick parts."
    next_step_rules:
      - id: v_us_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_us]] determinada, calcular [[Z_ac]] multiplicando por [[rho_mat]]. Esto permite evaluar el contraste acústico con el material del acoplante y predecir cuánta energía entra efectivamente en la pieza."
          en: "With [[v_us]] determined, calculate [[Z_ac]] by multiplying by [[rho_mat]]. This allows evaluating the acoustic contrast with the coupling material and predicting how much energy effectively enters the part."

  t_vuelo:
    magnitude_type: fundamental
    semantic_role:
      es: "Tiempo de vuelo medido entre el pulso emitido y el eco recibido"
      en: "Time of flight measured between the emitted pulse and the received echo"
    summary_rules:
      - id: t_vuelo_summary_default
        when: "true"
        status: ok
        text:
          es: "[[t_vuelo]] indica el tiempo que el pulso ultrasónico tarda en recorrer la distancia ida-vuelta hasta el defecto o la pared trasera. Depende exclusivamente de [[d_defecto]] y [[v_us]]; es la variable medida directamente por el equipo."
          en: "[[t_vuelo]] indicates the time the ultrasonic pulse takes to travel the round-trip distance to the defect or back wall. It depends exclusively on [[d_defecto]] and [[v_us]]; it is the variable directly measured by the equipment."
    physical_reading_rules:
      - id: t_vuelo_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[t_vuelo]] mayor indica que el defecto está más lejos del transductor. En una pieza de 50 mm de espesor con [[v_us]] de 5900 m/s, el eco de la pared trasera aparece a aproximadamente 17 µs. Un eco antes de ese tiempo señala un defecto interno."
          en: "A larger [[t_vuelo]] indicates the defect is further from the transducer. In a 50 mm thick part with [[v_us]] of 5900 m/s, the back-wall echo appears at approximately 17 µs. An echo before that time signals an internal defect."
    coherence_rules:
      - id: t_vuelo_coherence_positive
        when: "t_vuelo > 0"
        status: ok
        text:
          es: "[[t_vuelo]] positivo es físicamente correcto para un tiempo de propagación."
          en: "Positive [[t_vuelo]] is physically correct for a propagation time."
      - id: t_vuelo_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[t_vuelo]] es inferior al tiempo de eco de la pared trasera; si no, el eco detectado podría ser una reflexión múltiple o un artefacto de equipo."
          en: "Verify that [[t_vuelo]] is less than the back-wall echo time; otherwise, the detected echo could be a multiple reflection or equipment artefact."
    model_validity_rules:
      - id: t_vuelo_validity_default
        when: "true"
        status: ok
        text:
          es: "[[t_vuelo]] es válido cuando existe un único eco distinguible del ruido de fondo. En materiales de grano grueso, el ruido de dispersión de grano puede enmascarar ecos de defectos pequeños y hacer que [[t_vuelo]] corresponda al primer máximo del ruido en lugar de a un defecto real."
          en: "[[t_vuelo]] is valid when there is a single echo distinguishable from background noise. In coarse-grained materials, grain scattering noise can mask echoes from small defects and cause [[t_vuelo]] to correspond to the first noise maximum rather than a real defect."
    graph_rules:
      - id: t_vuelo_graph_default
        when: "true"
        status: ok
        text:
          es: "En el A-scan, [[t_vuelo]] corresponde a la posición horizontal del pico del eco. El eje horizontal del osciloscopio está calibrado en tiempo o en profundidad equivalente según la [[v_us]] introducida."
          en: "In the A-scan, [[t_vuelo]] corresponds to the horizontal position of the echo peak. The oscilloscope horizontal axis is calibrated in time or equivalent depth according to the entered [[v_us]]."
    likely_errors:
      - id: t_vuelo_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: medir [[t_vuelo]] desde el centro del pulso en lugar de desde el frente de onda. Esto introduce un desplazamiento sistemático igual a la mitad de la duración del pulso, que en transductores de baja frecuencia puede superar 1 µs."
          en: "Common error: measuring [[t_vuelo]] from the centre of the pulse instead of from the wave front. This introduces a systematic offset equal to half the pulse duration, which in low-frequency transducers can exceed 1 µs."
    next_step_rules:
      - id: t_vuelo_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[t_vuelo]] medido y [[v_us]] calibrada, calcular [[d_defecto]]. Si hay dudas sobre [[v_us]], repetir la medida en una muestra de referencia de espesor conocido del mismo material."
          en: "With [[t_vuelo]] measured and [[v_us]] calibrated, calculate [[d_defecto]]. If [[v_us]] is uncertain, repeat the measurement on a reference sample of known thickness of the same material."

  Z_ac:
    magnitude_type: fundamental
    semantic_role:
      es: "Impedancia acústica del medio, que determina reflexión y transmisión en interfaces"
      en: "Acoustic impedance of the medium, which determines reflection and transmission at interfaces"
    summary_rules:
      - id: Z_ac_summary_high
        when: "Z_ac > 1e7"
        status: ok
        text:
          es: "[[Z_ac]] superior a 10 MRayl indica un metal o material cerámico denso. Este resultado indica fuerte reflexión en la interfaz con medios como agua o gel acoplante, lo que justifica el uso de transductores de alta potencia."
          en: "[[Z_ac]] above 10 MRayl indicates a metal or dense ceramic. This result indicates strong reflection at the interface with media such as water or coupling gel, justifying the use of high-power transducers."
      - id: Z_ac_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Z_ac]] resume la resistencia acústica del medio. Depende linealmente de [[rho_mat]] y de [[v_us]]. La diferencia de [[Z_ac]] entre dos medios en contacto determina cuánta energía se refleja y cuánta se transmite en la interfaz."
          en: "[[Z_ac]] summarises the acoustic resistance of the medium. It depends linearly on [[rho_mat]] and [[v_us]]. The difference in [[Z_ac]] between two media in contact determines how much energy is reflected and how much is transmitted at the interface."
    physical_reading_rules:
      - id: Z_ac_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Z_ac]] alta implica que la onda necesita mayor presión para producir el mismo desplazamiento de partícula. En la interfaz con un medio de menor [[Z_ac]], la mayor parte de la energía se refleja. Esto es la base física de por qué el aire actúa como barrera casi total para los ultrasonidos en sólidos."
          en: "High [[Z_ac]] implies the wave requires greater pressure to produce the same particle displacement. At the interface with a lower [[Z_ac]] medium, most energy is reflected. This is the physical basis for why air acts as a near-total barrier for ultrasound in solids."
    coherence_rules:
      - id: Z_ac_coherence_positive
        when: "Z_ac > 0"
        status: ok
        text:
          es: "[[Z_ac]] positiva, coherente con la definición como producto de dos cantidades positivas."
          en: "Positive [[Z_ac]], coherent with the definition as the product of two positive quantities."
      - id: Z_ac_coherence_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[Z_ac]] calculada con valores tabulados del material. Una desviación superior al 10 % respecto al valor de referencia sugiere error en [[rho_mat]] o en [[v_us]] de entrada."
          en: "Compare the calculated [[Z_ac]] with tabulated values for the material. A deviation greater than 10% from the reference value suggests an error in the input [[rho_mat]] or [[v_us]]."
    model_validity_rules:
      - id: Z_ac_validity_default
        when: "true"
        status: ok
        text:
          es: "[[Z_ac]] como producto escalar es válida para incidencia normal. Para incidencia oblicua, la impedancia efectiva depende del ángulo y requiere el cálculo de la impedancia normal de onda en función del ángulo de refracción."
          en: "[[Z_ac]] as a scalar product is valid for normal incidence. For oblique incidence, the effective impedance depends on angle and requires calculating the wave normal impedance as a function of the refraction angle."
    graph_rules:
      - id: Z_ac_graph_default
        when: "true"
        status: ok
        text:
          es: "En gráficas de materiales ordenados por [[Z_ac]], los materiales con mayor [[Z_ac]] aparecen en la parte superior. La separación entre la [[Z_ac]] de la pieza y la del acoplante en el gráfico indica visualmente el grado de desadaptación."
          en: "In graphs of materials ordered by [[Z_ac]], materials with higher [[Z_ac]] appear at the top. The separation between the part's [[Z_ac]] and the coupling agent's on the graph visually indicates the degree of mismatch."
    likely_errors:
      - id: Z_ac_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[Z_ac]] en unidades CGS (g cm⁻² s⁻¹) en fórmulas SI. La conversión es 1 Rayl SI equivale a 10 Rayl CGS. Mezclar sistemas de unidades puede producir un [[R_ac]] completamente erróneo."
          en: "Common error: using [[Z_ac]] in CGS units (g cm⁻² s⁻¹) in SI formulas. The conversion is 1 SI Rayl equals 10 CGS Rayl. Mixing unit systems can produce a completely erroneous [[R_ac]]."
    next_step_rules:
      - id: Z_ac_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[Z_ac]] del material ensayado y del acoplante conocidas, calcular [[R_ac]] para cuantificar las pérdidas de energía en la entrada del haz. Si [[R_ac]] supera 0.9, considerar acoplantes especiales o inmersión en agua para mejorar la transferencia."
          en: "With [[Z_ac]] of the tested material and the coupling agent known, calculate [[R_ac]] to quantify energy losses at beam entry. If [[R_ac]] exceeds 0.9, consider special coupling agents or water immersion to improve transfer."

  R_ac:
    magnitude_type: derived
    semantic_role:
      es: "Coeficiente de reflexión acústica en amplitud en la interfaz entre dos medios"
      en: "Acoustic reflection coefficient in amplitude at the interface between two media"
    summary_rules:
      - id: R_ac_summary_near_one
        when: "R_ac > 0.9"
        status: ok
        text:
          es: "[[R_ac]] próximo a 1 indica una interfaz muy reflectante, típica de una fisura o poro lleno de aire en un metal. Este resultado resume que casi toda la energía incidente se refleja; el defecto genera un eco intenso y es fácilmente detectable."
          en: "[[R_ac]] close to 1 indicates a highly reflective interface, typical of an air-filled crack or pore in a metal. This result summarises that almost all incident energy is reflected; the defect generates an intense echo and is easily detectable."
      - id: R_ac_summary_near_zero
        when: "R_ac < 0.1 && R_ac > -0.1"
        status: warning
        text:
          es: "[[R_ac]] próximo a cero indica buena adaptación de impedancias. Depende de si los dos medios tienen [[Z_ac]] similares. Si el defecto esperado es una fisura, este valor sugiere que no existe discontinuidad significativa o que la interfaz está llena de un material con [[Z_ac]] parecida."
          en: "[[R_ac]] close to zero indicates good impedance matching. It depends on whether the two media have similar [[Z_ac]]. If the expected defect is a crack, this value suggests no significant discontinuity or that the interface is filled with a material of similar [[Z_ac]]."
      - id: R_ac_summary_default
        when: "true"
        status: ok
        text:
          es: "[[R_ac]] resume el contraste acústico en la interfaz. Su signo indica si hay inversión de fase en el eco reflejado, lo que permite distinguir si el segundo medio es más blando o más rígido que el primero. Su módulo indica la fracción de amplitud reflejada."
          en: "[[R_ac]] summarises the acoustic contrast at the interface. Its sign indicates whether there is phase inversion in the reflected echo, allowing to distinguish whether the second medium is softer or stiffer than the first. Its magnitude indicates the fraction of amplitude reflected."
    physical_reading_rules:
      - id: R_ac_reading_default
        when: "true"
        status: ok
        text:
          es: "Módulo de [[R_ac]] cercano a 1: la interfaz es casi perfectamente reflectante; ocurre en contactos sólido-aire o sólido-vacío. Módulo cercano a 0: los dos medios tienen casi la misma rigidez acústica; hay escasa reflexión. El signo negativo implica que la onda reflejada llega con presión de signo opuesto a la incidente."
          en: "Magnitude of [[R_ac]] close to 1: the interface is nearly perfectly reflective; this occurs at solid-air or solid-vacuum contacts. Magnitude close to 0: the two media have nearly the same acoustic stiffness; there is little reflection. Negative sign implies the reflected wave arrives with opposite-sign pressure to the incident wave."
    coherence_rules:
      - id: R_ac_coherence_range
        when: "R_ac >= -1 && R_ac <= 1"
        status: ok
        text:
          es: "[[R_ac]] dentro del rango físicamente válido entre -1 y 1."
          en: "[[R_ac]] within the physically valid range between -1 and 1."
      - id: R_ac_coherence_out_of_range
        when: "R_ac > 1 || R_ac < -1"
        status: error
        text:
          es: "[[R_ac]] fuera del rango [-1, 1] es físicamente imposible. Verificar que [[Z_ac]] de ambos medios está en las mismas unidades SI."
          en: "[[R_ac]] outside the [-1, 1] range is physically impossible. Verify that [[Z_ac]] of both media is in the same SI units."
      - id: R_ac_coherence_default
        when: "true"
        status: ok
        text:
          es: "El módulo de [[R_ac]] cuadrado da la fracción de intensidad reflejada; el complemento a 1 es la fracción transmitida. Verificar que la suma reflectancia más transmitancia en intensidad es 1."
          en: "The squared magnitude of [[R_ac]] gives the fraction of reflected intensity; the complement to 1 is the transmitted fraction. Verify that the sum of reflectance and transmittance in intensity equals 1."
    model_validity_rules:
      - id: R_ac_validity_default
        when: "true"
        status: ok
        text:
          es: "La fórmula de [[R_ac]] es válida bajo incidencia normal y ondas planas. En haces enfocados o en incidencia oblicua, la reflexión depende también del ángulo de incidencia. En superficies rugosas, el eco se dispersa angularmente y la amplitud efectivamente recibida es menor que la predicha por la fórmula plana."
          en: "The [[R_ac]] formula is valid under normal incidence and plane waves. In focused beams or oblique incidence, reflection also depends on the angle of incidence. On rough surfaces, the echo is angularly scattered and the effectively received amplitude is less than predicted by the plane formula."
    graph_rules:
      - id: R_ac_graph_default
        when: "true"
        status: ok
        text:
          es: "En el A-scan, la altura del pico del eco es proporcional al módulo de [[R_ac]]. Un cambio de polaridad del eco (invertido respecto al pulso de entrada) indica [[R_ac]] negativo, es decir, el defecto está lleno de un material más blando que la matriz."
          en: "In the A-scan, the echo peak height is proportional to the magnitude of [[R_ac]]. A polarity change of the echo (inverted relative to the entry pulse) indicates negative [[R_ac]], meaning the defect is filled with a softer material than the matrix."
    likely_errors:
      - id: R_ac_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir el coeficiente de reflexión en amplitud con el coeficiente en intensidad. El coeficiente en intensidad es el cuadrado del de amplitud. Si se reporta un coeficiente de reflexión del 90 % en intensidad, la amplitud reflejada es solo el 95 %, no el 90 %."
          en: "Common error: confusing the amplitude reflection coefficient with the intensity reflection coefficient. The intensity coefficient is the square of the amplitude one. If a 90% intensity reflection coefficient is reported, the reflected amplitude is only 95%, not 90%."
    next_step_rules:
      - id: R_ac_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[R_ac]] evaluado, interpretar el tipo de defecto más probable: un valor próximo a 1 sugiere fisura o poro de aire; un valor intermedio puede indicar inclusión de material diferente. Combinar con la profundidad [[d_defecto]] para el informe de ensayo."
          en: "With [[R_ac]] evaluated, interpret the most probable defect type: a value close to 1 suggests an air-filled crack or pore; an intermediate value may indicate an inclusion of different material. Combine with depth [[d_defecto]] for the test report."

  rho_mat:
    magnitude_type: parameter
    semantic_role:
      es: "Densidad del material ensayado, parámetro de entrada para calcular la impedancia acústica"
      en: "Density of the tested material, input parameter for calculating acoustic impedance"
    summary_rules:
      - id: rho_mat_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_mat]] es el parámetro de material que, multiplicado por [[v_us]], determina la impedancia acústica [[Z_ac]]. Su valor depende de la aleación específica y del estado de tratamiento térmico, pero varía solo un 1–2 % entre variantes de la misma familia de materiales."
          en: "[[rho_mat]] is the material parameter that, multiplied by [[v_us]], determines acoustic impedance [[Z_ac]]. Its value depends on the specific alloy and heat treatment state, but varies only 1–2% between variants of the same material family."
    physical_reading_rules:
      - id: rho_mat_reading_default
        when: "true"
        status: ok
        text:
          es: "Un aumento de [[rho_mat]] con [[v_us]] constante aumenta [[Z_ac]] linealmente. En metales pesados como el plomo, la alta [[rho_mat]] produce [[Z_ac]] elevada a pesar de una [[v_us]] moderada. En polímeros, la baja densidad es la principal razón de la [[Z_ac]] baja."
          en: "An increase in [[rho_mat]] with constant [[v_us]] increases [[Z_ac]] linearly. In heavy metals like lead, high [[rho_mat]] produces high [[Z_ac]] despite moderate [[v_us]]. In polymers, low density is the main reason for low [[Z_ac]]."
    coherence_rules:
      - id: rho_mat_coherence_positive
        when: "rho_mat > 0"
        status: ok
        text:
          es: "[[rho_mat]] positiva, físicamente correcta para cualquier material sólido o líquido."
          en: "Positive [[rho_mat]], physically correct for any solid or liquid material."
      - id: rho_mat_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[rho_mat]] es consistente con el material declarado: acero aproximadamente 7800 kg/m³, aluminio aproximadamente 2700 kg/m³, titanio aproximadamente 4500 kg/m³."
          en: "Verify that [[rho_mat]] is consistent with the declared material: steel approximately 7800 kg/m³, aluminium approximately 2700 kg/m³, titanium approximately 4500 kg/m³."
    model_validity_rules:
      - id: rho_mat_validity_default
        when: "true"
        status: ok
        text:
          es: "[[rho_mat]] se toma como constante en el modelo de onda plana. En piezas con variaciones de densidad por porosidad o segregación química, la densidad local puede diferir del valor tabulado y generar errores en [[Z_ac]] calculada."
          en: "[[rho_mat]] is taken as constant in the plane wave model. In parts with density variations due to porosity or chemical segregation, local density may differ from the tabulated value and generate errors in the calculated [[Z_ac]]."
    graph_rules:
      - id: rho_mat_graph_default
        when: "true"
        status: ok
        text:
          es: "[[rho_mat]] no aparece directamente en el A-scan, pero su incertidumbre se refleja en la incertidumbre de [[Z_ac]] y, por tanto, en la predicción de la amplitud del eco de defecto."
          en: "[[rho_mat]] does not appear directly in the A-scan, but its uncertainty is reflected in the uncertainty of [[Z_ac]] and, therefore, in the prediction of the defect echo amplitude."
    likely_errors:
      - id: rho_mat_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar la densidad del material acoplante en lugar del material ensayado al calcular [[Z_ac]]. El acoplante tiene [[rho_mat]] próxima a la del agua (1000 kg/m³); usarla para acero daría [[Z_ac]] treinta veces menor que la real."
          en: "Common error: using the coupling agent density instead of the tested material density when calculating [[Z_ac]]. The coupling agent has [[rho_mat]] close to that of water (1000 kg/m³); using it for steel would give [[Z_ac]] thirty times lower than the real value."
    next_step_rules:
      - id: rho_mat_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho_mat]] y [[v_us]] determinadas, calcular [[Z_ac]] y, con ello, [[R_ac]] en cada interfaz de interés. Si hay incertidumbre en [[rho_mat]], propagar el error al resultado de [[Z_ac]] para cuantificar la precisión del ensayo."
          en: "With [[rho_mat]] and [[v_us]] determined, calculate [[Z_ac]] and, from this, [[R_ac]] at each interface of interest. If there is uncertainty in [[rho_mat]], propagate the error to the [[Z_ac]] result to quantify test precision."

cross_checks:
  - id: profundidad_no_excede_espesor
    when: "d_defecto > 0 && v_us > 0 && t_vuelo > 0"
    status: warning
    text:
      es: "Verificar que [[d_defecto]] calculada no excede el espesor nominal de la pieza. Si lo excede, el eco detectado puede ser una reflexión de la pared trasera interpretada como defecto."
      en: "Verify that the calculated [[d_defecto]] does not exceed the nominal part thickness. If it does, the detected echo may be a back-wall reflection misinterpreted as a defect."

error_patterns:
  - id: factor_dos_omitido
    description:
      es: "Omisión del factor 2 en la fórmula de profundidad: el alumno calcula d como v_us por t_vuelo sin dividir entre 2."
      en: "Omission of the factor 2 in the depth formula: the student calculates d as v_us times t_vuelo without dividing by 2."
  - id: velocidad_de_otro_material
    description:
      es: "Uso de [[v_us]] de un material distinto al ensayado, especialmente confundir velocidad en acero con velocidad en aluminio o titanio."
      en: "Using [[v_us]] of a material different from the one being tested, especially confusing steel speed with aluminium or titanium speed."

graph_binding:
  coord_axes:
    x: t_vuelo
    y: d_defecto
  svg_mapping:
    - magnitude: R_ac
      visual: echo_amplitude
    - magnitude: Z_ac
      visual: interface_color
  mini_graph:
    enabled: true
    preferred_type: Coord

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
