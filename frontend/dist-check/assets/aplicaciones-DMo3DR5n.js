const a=`# Aplicaciones de las Ondas Longitudinales\r
\r
Las ondas longitudinales, especialmente en forma de sonido y ultrasonido, son herramientas fundamentales en la ciencia moderna, la medicina y la industria. Su capacidad para viajar a través de medios opacos y transportar información sobre la estructura interna de los materiales las hace indispensables para la civilización tecnológica actual. Al ser la única forma de onda mecánica que puede propagarse en fluidos, su estudio abarca desde la microescala de los capilares sanguíneos hasta la escala planetaria de los océanos.\r
\r
## 1. Ecografía Médica (Diagnóstico por imagen)\r
La ecografía utiliza pulsos de ondas longitudinales de alta frecuencia (ultrasonido) que se reflejan en las interfaces entre diferentes tejidos corporales. Al medir el tiempo de retorno de los ecos, el sistema construye una imagen en tiempo real de los órganos internos. Esta técnica es preferida en obstetricia y cardiología debido a que no utiliza radiación ionizante, lo que la hace segura para el feto y para estudios repetitivos. La resolución de la imagen depende directamente de la longitud de onda [[lambda]]; a mayores frecuencias, obtenemos mayor detalle pero menor profundidad de penetración debido a la absorción.\r
- **Variable dominante:** La amplitud de presión [[p_hat]], la impedancia acústica del tejido (impedancia acustica, densidad por velocidad sonora) y la frecuencia [[f]] que determina la resolución.\r
- **Límite de validez:** Frecuencias en el rango de 2-15 MHz; por debajo de este rango la resolución es insuficiente para fines médicos, y por encima, la atenuación en el tejido humano es tan alta que la onda se disipa antes de alcanzar órganos profundos.\r
\r
## 2. SONAR y Exploración Submarina\r
El SONAR (Sound Navigation and Ranging) emite ondas longitudinales en el agua para detectar objetos o mapear el fondo marino. Debido a que la luz se absorbe rápidamente en el mar (la zona fótica apenas alcanza los 200 metros), el sonido es el único medio eficaz de "visión" a larga distancia bajo el agua. Los sistemas modernos de SONAR de barrido lateral pueden crear mapas tridimensionales del lecho marino con una precisión asombrosa, permitiendo la localización de pecios, yacimientos de gas o el seguimiento de la fauna marina.\r
- **Variable dominante:** La velocidad de propagación [[c]], que varía con la temperatura y salinidad, y la potencia de emisión que determina el alcance.\r
- **Límite de validez:** El modelo de propagación lineal falla en presencia de burbujas masivas (cavitación) o en la superficie del agua, donde las variaciones de densidad son extremas y la compresibilidad del medio deja de ser predecible mediante el módulo [[B]] estándar.\r
\r
## 3. Ensayos No Destructivos (NDT) en Ingeniería\r
En la industria aeronáutica y civil, se envían ondas longitudinales a través de piezas metálicas, soldaduras o vigas de hormigón para detectar grietas internas, porosidades o defectos de fabricación sin destruir la pieza. Cualquier discontinuidad en el material provoca una reflexión parcial de la onda. Mediante el análisis del "tiempo de vuelo" (ToF) de estas reflexiones, los ingenieros pueden certificar la seguridad estructural de un ala de avión o de un puente de alta velocidad.\r
- **Variable dominante:** El módulo de compresibilidad [[B]] y la densidad [[rho]] del material, que definen la "firma" acústica de una pieza sana.\r
- **Límite de validez:** Válido mientras el defecto sea de un tamaño comparable o mayor a la longitud de onda [[lambda]] utilizada. En materiales altamente granulares, como algunos tipos de fundición, la dispersión de la onda en los granos del metal puede enmascarar los defectos reales.\r
\r
## 4. Sismología: Ondas P (Primarias)\r
Las ondas P son las primeras ondas longitudinales que viajan a través del interior de la Tierra tras un sismo. Al ser ondas de compresión, pueden viajar tanto por sólidos (manto) como por líquidos (núcleo externo). Su estudio ha permitido a los científicos "radiografiar" el interior del planeta. La diferencia de tiempo entre la llegada de la onda P y la onda S (transversal) permite localizar el epicentro del terremoto con gran precisión. Además, el cambio de velocidad de las ondas P al entrar en el núcleo terrestre fue la clave para descubrir que el núcleo externo de la Tierra es líquido.\r
- **Variable dominante:** La elasticidad volumétrica y la densidad de las capas geológicas a profundidades de miles de kilómetros.\r
- **Límite de validez:** Se asume un medio elástico lineal; el modelo falla en zonas de fractura extrema o cerca del hipocentro, donde las deformaciones son plásticas y no elásticas.\r
\r
## 5. Acústica Arquitectónica y Diseño de Espacios\r
El control de las reflexiones de ondas longitudinales en espacios cerrados es crítico para la inteligibilidad de la voz y la calidad de la música. En un teatro o auditorio, se diseñan las superficies para que las ondas longitudinales se distribuyan uniformemente sin crear ecos o puntos muertos. Se utilizan materiales absorbentes para gestionar la energía de la onda y materiales difusores para romper los frentes de onda planos y crear un campo sonoro difuso y envolvente.\r
- **Variable dominante:** La longitud de onda [[lambda]] en relación con las dimensiones geométricas de los obstáculos y la sala.\r
- **Límite de validez:** El modelo de acústica de rayos (geométrica) es válido solo para frecuencias cuyas longitudes de onda son mucho menores que las dimensiones de la sala. Para frecuencias bajas (graves), la sala se comporta como un resonador de cavidad, requiriendo un análisis de modos propios.\r
\r
## 6. Limpieza por Ultrasonidos\r
En joyería y mantenimiento industrial, se sumergen piezas en un fluido donde se generan ondas longitudinales de alta intensidad. Las rápidas variaciones de presión crean millones de microburbujas que implosionan (cavitación controlada) contra la superficie de la pieza, arrancando la suciedad incluso en los huecos más microscópicos donde un cepillo no podría llegar.\r
- **Variable dominante:** La amplitud de presión [[p_hat]] y la frecuencia ultrasónica.\r
- **Límite de validez:** La pieza debe ser capaz de soportar las micro-ondas de choque de la cavitación sin sufrir erosión superficial.`;export{a as default};
