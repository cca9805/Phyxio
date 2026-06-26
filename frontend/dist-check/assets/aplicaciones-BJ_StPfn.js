const e=`## 1. Inspección de soldaduras en tuberías de centrales nucleares

En la industria nuclear, la integridad de las soldaduras en tuberías del circuito primario es un requisito de seguridad crítico. Las soldaduras presentan con frecuencia defectos de fusión incompleta, porosidades o fisuras de solidificación que no son visibles desde el exterior. El ensayo ultrasónico permite inspeccionar el volumen completo de la soldadura desde el exterior de la tubería, cumpliendo la normativa ASME Section XI sin interrumpir el servicio.

El transductor se desplaza a lo largo del cordón de soldadura con un ángulo de 45° para que el haz de cizalladura impacte frontalmente sobre las interfaces de fusión. [[v_us]] en cizalladura para el acero inoxidable austenítico es aproximadamente 3100 m/s. La detección de un eco de defecto en [[t_vuelo]] inferior al del eco de la pared trasera indica una discontinuidad cuya posición se calcula como [[d_defecto]]. Las amplitudes se comparan con reflectores de referencia calibrados (entallas de fondo plano) para evaluar la extensión del defecto.

Variable dominante: [[t_vuelo]] del eco de defecto, que fija la localización axial y profunda de cualquier discontinuidad en la zona de soldadura.
Límite de validez: el método asume incidencia oblicua controlada; defectos orientados paralelamente al haz pueden producir ecos muy débiles o nulos.

## 2. Medición de espesor en intercambiadores de calor con acceso unilateral

Los intercambiadores de calor de la industria química y petroquímica están sometidos a erosión-corrosión interior que reduce el espesor de sus tubos. La cara interna es inaccesible durante la operación; el técnico solo puede colocar el transductor en la cara exterior. El método de eco de pared trasera convierte el equipo de ultrasonidos en un medidor de espesor de alta precisión.

Con [[v_us]] de 5900 m/s para el acero al carbono, un tubo de espesor nominal de 4 mm produce un eco trasero a aproximadamente 1.36 µs. Si la corrosión ha reducido el espesor a 2.5 mm, el eco trasero aparece a 0.85 µs. La diferencia de [[t_vuelo]] de 0.51 µs corresponde a una pérdida de espesor de 1.5 mm. La vigilancia periódica de [[t_vuelo]] del eco trasero permite trazar curvas de velocidad de desgaste y predecir cuándo el espesor llegará al valor mínimo admisible según el código de diseño.

Variable dominante: [[t_vuelo]] del eco de pared trasera, cuya variación temporal entre campañas de inspección mide directamente la pérdida de espesor por corrosión.
Límite de validez: la resolución axial del equipo limita la detección de espesores inferiores a la longitud de onda; por debajo de 1 mm de espesor se requieren transductores de alta frecuencia superiores a 15 MHz.

## 3. Control de calidad de piezas forjadas en la industria aeroespacial

Las piezas forjadas para aeronaves (discos de turbina, largueros de ala, bloques de motor) deben inspeccionarse al cien por cien para garantizar la ausencia de inclusiones no metálicas, laminaciones o pliegues de forja que podrían iniciar una fisura por fatiga en servicio. El ensayo ultrasónico de inmersión en agua permite automatizar la inspección con alta repetibilidad.

La pieza se sumerge en un baño de agua que actúa como acoplante de baja [[Z_ac]] (1.5 MRayl frente a los 17 MRayl del aluminio aeronáutico). El [[R_ac]] en la interfaz agua-aluminio es aproximadamente 0.84, lo que implica pérdidas de transmisión de alrededor del 29 % en amplitud. La exploración se realiza con transductores de 10 MHz que producen longitudes de onda de 0.6 mm en aluminio, suficientes para detectar inclusiones mayores de 0.3 mm. [[d_defecto]] de cada reflector detectado se calcula con la fórmula de tiempo de vuelo usando [[v_us]] de 6300 m/s para el aluminio aeronáutico.

Variable dominante: la relación entre la longitud de onda (determinada por [[v_us]] y la frecuencia del transductor) y el tamaño mínimo de defecto a detectar.
Límite de validez: en zonas de curvatura fuerte o sección variable, el haz puede no incidir perpendicularmente sobre el defecto, reduciendo la amplitud del eco por debajo del umbral de detección.

## 4. Evaluación de la unión adhesiva en estructuras de composite

En la industria aeronáutica y de energía eólica, los composites de fibra de carbono se unen entre sí y a estructuras metálicas mediante adhesivos estructurales. Un despegue parcial de la junta (defecto de tipo delaminación superficial) debilita la estructura sin señal visible externa. El ensayo ultrasónico detecta estas zonas de adhesivo ausente o degradado.

El contraste acústico entre un adhesivo bien adherido ([[Z_ac]] de 2–3 MRayl) y el aire de un despegue ([[Z_ac]] de 400 Rayl) produce [[R_ac]] próximo a 1 en la zona de despegue, frente a un [[R_ac]] de aproximadamente 0.3 en la zona de adhesión correcta. La presencia de la reflexión intensa en [[t_vuelo]] correspondiente a la interfaz adhesivo-composite señala un despegue. La amplitud del eco de la segunda interfaz (interior del panel) desaparece en zonas de despegue porque la energía es casi completamente reflejada en la primera interfaz.

Variable dominante: [[R_ac]] en la interfaz adhesivo-substrate, que determina si el eco de primer interfaz es alto (despegue, [[R_ac]] próximo a 1) o bajo (adhesión correcta, [[R_ac]] bajo).
Límite de validez: si la capa de adhesivo tiene un espesor inferior a la mitad de la longitud de onda, los ecos de las dos interfaces de la capa adhesiva no se resuelven temporalmente y el análisis requiere técnicas espectrales.

## 5. Diagnóstico de corrosión bajo aislamiento en tuberías de proceso

Las tuberías de proceso a alta temperatura se recubren con aislamiento térmico que impide el acceso visual a la superficie metálica. Bajo el aislamiento puede desarrollarse corrosión húmeda (corrosión bajo aislamiento, CUI) que adelgaza la pared sin ser visible. Retirar el aislamiento para inspeccionarlo es costoso; los ultrasonidos de ángulo largo permiten inspeccionar desde los extremos de los tramos aislados.

Las ondas guiadas de baja frecuencia (entre 20 y 100 kHz) se propagan a lo largo del tubo con [[v_us]] dependiente del modo y del diámetro, recorriendo distancias de hasta 50 metros desde el transductor. Una reducción localizada del espesor de pared actúa como reflector que modifica [[t_vuelo]] y [[R_ac]] del eco recibido. El análisis de la señal permite estimar [[d_defecto]] axial (la distancia al punto corroído a lo largo del tubo) con una precisión de aproximadamente el 1 % de la distancia recorrida.

Variable dominante: [[t_vuelo]] del eco de reflexión de la zona corroída, que da la distancia axial al defecto a lo largo del eje del tubo.
Límite de validez: el método pierde sensibilidad cuando la longitud de la zona corroída es inferior al 5 % de la longitud de onda guiada; además, codos, válvulas y soportes reflejan parte de la energía y pueden enmascarar ecos de defectos situados más allá de esos obstáculos.
`;export{e as default};
