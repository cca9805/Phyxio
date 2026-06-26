# Aplicaciones

## 1. Ecografía médica diagnóstica

El transductor ultrasónico emite pulsos de alta [[frecuencia]] que se propagan como ondas longitudinales a través del tejido blando del paciente. Cada interfaz entre tejidos con distinta [[impedancia_acustica]] (músculo-grasa, hígado-riñón, tejido-hueso) refleja una fracción de la energía que el transductor recoge como eco. A partir del tiempo de vuelo y la rapidez [[rapidez_de_propagacion]] conocida del tejido, el equipo reconstruye una imagen bidimensional o tridimensional de las estructuras internas.

La resolución axial del ecógrafo es proporcional a [[lambda]], que a su vez depende del cociente entre [[rapidez_de_propagacion]] y [[frecuencia]]. Frecuencias de 2 a 5 MHz permiten explorar órganos profundos con longitudes de onda de 0.3 a 0.8 mm, mientras que frecuencias de 12 a 18 MHz ofrecen resoluciones inferiores a 0.15 mm para estructuras superficiales como tiroides o vasos sanguíneos.

Variable dominante: la [[frecuencia]] del transductor, que fija la resolución espacial mediante su relación inversa con [[lambda]].
Límite de validez: cuando la atenuación por absorción viscosa del tejido supera la capacidad del equipo para detectar ecos a la profundidad deseada, típicamente por encima de 20 MHz para exploraciones más allá de un centímetro.

## 2. Sónar submarino de detección

Los buques y submarinos emplean transductores que emiten pulsos acústicos de frecuencias entre 1 kHz y 500 kHz en agua de mar. La onda longitudinal viaja a una rapidez [[rapidez_de_propagacion]] cercana a 1500 m/s y se refleja al encontrar un objeto cuya [[impedancia_acustica]] difiere de la del agua circundante (casco metálico, fondo rocoso, banco de peces). Midiendo el retardo del eco y la dirección de llegada, el sistema determina la posición del objetivo.

La impedancia acústica del agua de mar es aproximadamente 1.5×10⁶ kg/(m²·s), mientras que la del acero supera 4.5×10⁷ kg/(m²·s). Esta diferencia garantiza una reflexión fuerte en la superficie del casco de un submarino. Sin embargo, la propagación real depende de perfiles de temperatura y salinidad que crean capas con distintos [[rapidez_de_propagacion]], curvando los rayos acústicos y generando zonas de sombra.

Variable dominante: la rapidez [[rapidez_de_propagacion]], que varía con temperatura, salinidad y profundidad, determinando la curvatura de los rayos acústicos y la precisión de localización.
Límite de validez: cuando los gradientes térmicos verticales generan canales acústicos que atrapan o desvían la energía, invalidando la suposición de medio homogéneo del modelo ideal.

## 3. Exploración sísmica de hidrocarburos

En prospección petrolera, camiones vibradores o cargas explosivas generan ondas longitudinales (ondas P) que penetran en la corteza terrestre. Al encontrar fronteras entre estratos geológicos con distinta [[impedancia_acustica]] (arenisca-arcilla, roca-petróleo), parte de la energía se refleja hacia la superficie, donde geófonos registran los ecos. La diferencia de tiempos de llegada entre capas permite reconstruir la geometría del subsuelo.

La rapidez [[rapidez_de_propagacion]] en rocas sedimentarias varía entre 2000 m/s y 6000 m/s según la porosidad, la saturación de fluidos y la presión litostática. La impedancia [[impedancia_acustica]] de cada estrato resulta del producto de su densidad y rapidez locales. Contrastes de impedancia de al menos un 5 % son necesarios para generar reflexiones detectables con la instrumentación convencional.

Variable dominante: el módulo de compresibilidad [[modulo_de_compresibilidad_volumetrica]] del estrato, que determina la rapidez local y, junto con la densidad, la impedancia que produce las reflexiones.
Límite de validez: cuando la porosidad y la fracturación de la roca introducen anisotropía y dispersión que el modelo isótropo homogéneo no puede capturar, requiriendo modelos elásticos anisotrópicos completos.

## 4. Control de calidad industrial por ultrasonidos

En la inspección no destructiva de piezas metálicas y cerámicas, un transductor de contacto emite pulsos ultrasónicos de 0.5 a 25 MHz que recorren la pieza como ondas longitudinales. Cualquier discontinuidad interna (grieta, poro, inclusión) presenta una [[impedancia_acustica]] diferente a la del material base, generando un eco que el equipo detecta. La profundidad del defecto se calcula a partir del tiempo de vuelo y la rapidez [[rapidez_de_propagacion]] del material.

En acero, [[rapidez_de_propagacion]] es aproximadamente 5900 m/s, lo que a 5 MHz produce una [[lambda]] cercana a 1.2 mm. Defectos de tamaño inferior a [[lambda]] son difíciles de detectar; por ello, inspecciones de alta resolución emplean frecuencias más elevadas. La impedancia del acero ronda 4.6×10⁷ kg/(m²·s), mientras que la del aire atrapado en un poro es solo 415 kg/(m²·s), creando una reflexión prácticamente total que identifica claramente el defecto.

Variable dominante: la longitud de onda [[lambda]], que establece el tamaño mínimo detectable del defecto y depende directamente de la [[frecuencia]] del transductor.
Límite de validez: cuando la microestructura granular del material (tamaño de grano comparable a [[lambda]]) dispersa la onda, generando ruido de fondo que enmascara los ecos de defectos reales.

## 5. Limpieza ultrasónica de componentes

Los baños de limpieza ultrasónica emplean transductores piezoeléctricos que operan entre 20 kHz y 80 kHz, generando ondas longitudinales intensas en un líquido de limpieza (agua con detergente o disolvente). Las variaciones de presión producidas por la onda crean microburbujas de cavitación que implosionan violentamente en las superficies de la pieza, desprendiendo contaminantes adheridos.

La rapidez [[rapidez_de_propagacion]] en el líquido del baño (típicamente agua) es cercana a 1480 m/s, produciendo longitudes de onda de varios centímetros a las frecuencias habituales de operación. La impedancia [[impedancia_acustica]] del líquido debe ser compatible con la del material de la pieza para maximizar la transmisión de energía acústica hacia la superficie. Frecuencias bajas (20 a 40 kHz) generan burbujas de cavitación grandes con implosiones energéticas, adecuadas para contaminantes resistentes; frecuencias altas (40 a 80 kHz) producen cavitación fina, más suave y apropiada para piezas delicadas.

Variable dominante: la [[frecuencia]], que controla el tamaño de las burbujas de cavitación y la agresividad mecánica de la limpieza sobre la superficie.
Límite de validez: cuando la potencia acústica supera el umbral de erosión del material base, la limpieza ultrasónica puede dañar la pieza, saliendo del régimen de uso seguro del modelo acústico lineal.