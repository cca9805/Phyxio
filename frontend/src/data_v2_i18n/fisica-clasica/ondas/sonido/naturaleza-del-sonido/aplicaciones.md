## 1. Ecografía y ecografía Doppler en medicina

La ecografía médica utiliza ultrasonidos de entre 1 y 20 MHz para obtener imágenes de tejidos internos. La elección de la [[f_son]] determina directamente la [[lambda_son]] en los tejidos (cuya [[v_son]] es de aproximadamente 1540 m/s), y por tanto la resolución espacial de la imagen: a 5 MHz, [[lambda_son]] es de unos 0.31 mm; a 1 MHz, es de unos 1.54 mm. Una frecuencia más alta produce imágenes más detalladas, pero la [[p0_ac]] se atenúa más rápidamente con la profundidad, limitando el alcance.

La [[I_ac]] de los ultrasonidos diagnósticos es cuidadosamente controlada para mantenerse por debajo de los límites de seguridad (típicamente inferior a 720 mW/cm²). Por encima de estos valores, los efectos térmicos y de cavitación pueden dañar los tejidos. La relación entre [[I_ac]] y [[p0_ac]] explica por qué duplicar la penetración sin cambiar la frecuencia requiere aumentar la [[p0_ac]] de forma significativa: la atenuación en los tejidos crece exponencialmente con la distancia.

Variable dominante: la frecuencia [[f_son]], que determina el compromiso entre resolución (alta frecuencia, [[lambda_son]] pequeña) y penetración (baja frecuencia, menor atenuación).
Límite de validez: el modelo de onda plana es una aproximación; en ecografía, los haces son enfocados con transductores curvos, y la geometría no es estrictamente plana. A profundidades mayores de unos 20 cm la atenuación es tan alta que la imagen se degrada independientemente de la [[p0_ac]] del transductor.

## 2. Acondicionamiento acústico de recintos

El diseño acústico de salas de música, teatros y estudios de grabación se basa en controlar cómo la [[I_ac]] de cada frecuencia se distribuye en el espacio. Materiales absorbentes reducen la [[p0_ac]] de las reflexiones; paneles difusores dispersan la energía sin disiparla. La eficacia de cada tratamiento depende de la relación entre la [[lambda_son]] de la frecuencia objetivo y las dimensiones físicas del tratamiento.

Para bajas frecuencias (125 Hz en el aire, [[lambda_son]] de unos 2.75 m), los paneles absorbentes necesitan tener un espesor comparable a [[lambda_son]]/4, es decir, unos 0.7 m, para ser efectivos. Para altas frecuencias (4000 Hz, [[lambda_son]] de unos 8.6 cm), paneles de espesor centimétrico son suficientes. Este hecho explica por qué el control de bajas frecuencias es el problema más costoso y complejo del acondicionamiento acústico.

Variable dominante: la longitud de onda [[lambda_son]] de la frecuencia problemática, que determina el tamaño físico mínimo de los tratamientos acústicos necesarios.
Límite de validez: el modelo de onda plana describe bien el comportamiento en campo lejano, pero en la zona de campo cercano (distancias menores que [[lambda_son]]) los patrones de presión son complejos y requieren análisis de elementos finitos.

## 3. Exploración sísmica del subsuelo

Las empresas de exploración petrolera y minera utilizan ondas sonoras de baja frecuencia (entre 10 y 200 Hz) generadas por fuentes de aire comprimido o explosivos para sondear la estructura del subsuelo. La [[v_son]] en las rocas (entre 2000 y 6000 m/s según la litología) determina la [[lambda_son]] de las señales, que puede ir de decenas a cientos de metros.

Las reflexiones de las ondas en las interfaces entre capas de distinta impedancia acústica (producto de densidad por velocidad) llegan a la superficie con distintos tiempos de tránsito. Analizando esos tiempos y las [[p0_ac]] reflejadas, los geofísicos reconstruyen la geometría del subsuelo. La [[I_ac]] de las fuentes debe ser suficientemente alta para que la señal llegue con [[p0_ac]] medible después de penetrar kilómetros de roca absorbente.

Variable dominante: la velocidad de propagación [[v_son]] en cada capa, que determina la [[lambda_son]] y el tiempo de llegada de las reflexiones.
Límite de validez: el modelo de onda plana falla cuando las capas tienen variaciones laterales de propiedades a escalas menores que [[lambda_son]]. A profundidades muy grandes, la señal se atenúa por debajo del umbral de detección de los geófonos.

## 4. Control de ruido industrial y protección auditiva

En entornos industriales como fundiciones, imprentas o talleres de mecanizado, la [[I_ac]] puede superar los umbrales de riesgo auditivo (por encima de 85 dB, equivalente a [[I_ac]] de 3.2×10⁻⁴ W/m²). El diseño de protección auditiva y de aislamientos requiere conocer la [[p0_ac]] y la [[f_son]] de las fuentes de ruido para seleccionar el tratamiento adecuado.

Los tapones y orejeras están diseñados para atenuar [[p0_ac]] en distintas bandas de frecuencia. Su eficacia se mide como la reducción de [[I_ac]] en decibelios en cada banda. Para ruidos de baja frecuencia (motores, compresores), la atenuación es menor porque [[lambda_son]] es comparable al tamaño del protector; para ruidos de alta frecuencia (rectificadoras, sierras), la atenuación es mayor porque [[lambda_son]] es pequeña respecto al protector.

Variable dominante: la frecuencia [[f_son]] del ruido dominante, que determina la eficacia de los distintos tipos de protección auditiva y la facilidad o dificultad de aislar acústicamente la fuente.
Límite de validez: el modelo de onda plana armónica describe bien tonos puros. El ruido industrial es en realidad una superposición de muchas frecuencias (ruido de banda ancha), y la [[I_ac]] de protección debe calcularse para todo el espectro, no solo para una frecuencia.

## 5. Sonares marinos y detección submarina

Los sistemas sonar (Sound Navigation And Ranging) emiten pulsos acústicos de [[f_son]] entre 1 kHz y 100 kHz en agua de mar, donde [[v_son]] es de aproximadamente 1500 m/s. La [[lambda_son]] resultante (entre 15 mm y 1.5 m) determina tanto la resolución del sistema como su capacidad de detectar objetos de distintos tamaños.

La [[I_ac]] emitida debe ser suficientemente alta para que la señal reflejada por el objetivo lleve suficiente [[p0_ac]] cuando llega al receptor, tras haber viajado dos veces la distancia fuente-objetivo y haber sido atenuada por el coeficiente de absorción del agua (que crece con [[f_son]]). El compromiso entre alcance (baja [[f_son]], menor absorción, mayor [[lambda_son]], menor resolución) y resolución (alta [[f_son]], mayor absorción, menor [[lambda_son]], mayor resolución) define la [[f_son]] operativa del sonar para cada aplicación.

Variable dominante: la frecuencia de emisión [[f_son]], que controla simultáneamente la resolución espacial (a través de [[lambda_son]]) y el alcance máximo (a través de la absorción acústica, que crece con [[f_son]]).
Límite de validez: el modelo de onda plana es una aproximación; los sonares reales emiten haces enfocados. A grandes distancias, la curvatura de la Tierra y los gradientes de temperatura del agua modifican [[v_son]] con la profundidad, creando canales acústicos submarinos que requieren modelos de propagación más complejos.
