const e=`# Aplicaciones de la energía ondulatoria

## 1. Transmisión de sonido en auditorios

Los principios de transporte energético ondulatorio son fundamentales para el diseño acústico de espacios. Cuando una onda sonora se propaga desde el escenario hacia la audiencia, la energía se distribuye en función de la geometría del recinto. Los materiales de las paredes actúan como sumideros o reflectores de energía, modificando la potencia que llega a cada oyente.

En un auditorio bien diseñado, la energía directa (que llega sin reflexiones) debe equilibrarse con la energía reverberante (reflejada) para crear claridad sin sequedad excesiva. La densidad de energía acústica en el espacio determina el nivel de presión sonora percibido. Materiales absorbentes como espumas o cortinas reducen la densidad de energía reflejada, mientras que superficies rígidas la mantienen.

Variable dominante: la densidad de energía acústica en la posición del receptor, que depende de la potencia de la fuente, la distancia, y los coeficientes de absorción de las superficies.

Límite de validez: cuando la densidad de energía es tan alta que la respuesta del aire deja de ser lineal (presiones sonoras mayores de 150 dB), o cuando las frecuencias son tan bajas que la longitud de onda es comparable a las dimensiones del recinto, invalidando la aproximación de campo difuso.

## 2. Detección de fallos estructurales mediante ultrasonido

El análisis de la energía reflejada por ondas ultrasónicas permite detectar grietas, inclusiones o deslaminaciones en estructuras metálicas y compuestas. Una onda ultrasónica de alta frecuencia (típicamente 1-10 MHz) se inyecta en la estructura y la energía reflejada por discontinuidades internas se analiza para localizar defectos.

La energía de la onda incidente se particiona entre la transmitida (que continúa), la reflejada (que regresa), y la disipada (convertida en calor por fricción interna). En una estructura sana, la mayor parte de la energía se transmite. Una grierta perpendicular a la dirección de propagación refleja significativamente más energía, creando un eco detectable.

La sensibilidad del método depende de cuánta energía vuelve al transductor. Grietas menores de la longitud de onda (típicamente < 0.1 mm para 10 MHz en acero) reflejan energía proporcional al cuadrado de su área, haciendo que defectos pequeños sean detectables si la energía incidente es suficiente.

Variable dominante: el coeficiente de reflexión de energía en la discontinuidad, que determina la fracción de potencia incidente que retorna al detector.

Límite de validez: cuando la estructura es muy absorbente (materiales poliméricos con alto amortiguamiento interno) o cuando la rugosidad superficial es comparable a la longitud de onda, dispersando la energía incidente de manera no controlada.

## 3. Telecomunicaciones por fibra óptica

En fibras ópticas, la energía de la onda electromagnética (luz) se confina en el núcleo de la fibra guiándose por reflexión total interna. La potencia transportada, típicamente de milivatios, se atenúa exponencialmente con la distancia debido a absorción y dispersión, fenómenos que el modelo ideal no considera.

La densidad de energía electromagnética en el núcleo (proporcional al cuadrado del campo eléctrico) debe mantenerse por encima de un umbral de detección en el receptor. Para fibras de sílice estándar, la atenuación es aproximadamente 0.2 dB/km en la ventana de 1550 nm, equivalente a una pérdida del 4.5% de potencia por kilómetro.

En sistemas modernos de comunicación óptica, la potencia de entrada se limita típicamente a 1-10 mW para evitar efectos no lineales (autofase modulada, mezcla de cuatro ondas) que distorsionarían la señal. A 100 km de distancia, con atenuación de 20 dB, la potencia recibida será aproximadamente 1/100 de la transmitida, requiriendo amplificación óptica (amplificadores EDFA) en trayectos largos.

Variable dominante: la potencia óptica recibida tras la atenuación del enlace, que debe superar la sensibilidad del receptor fotodetector (típicamente -30 dBm para tasas de error aceptables).

Límite de validez: cuando la potencia óptica es suficientemente alta para inducir efectos no lineales en el índice de refracción del sílice (aproximadamente > 100 mW en fibras monomodo estándar), o cuando la distancia es tal que la atenuación acumulada reduce la señal por debajo del nivel de ruido cuántico.

## 4. Captación de energía undimotriz

Los sistemas de conversión de energía de olas transforman la energía cinética y potencial del movimiento ondulatorio oceánico en electricidad. Un dispositivo tipo columna de agua oscilante (CAO) utiliza la presión dinámica de las olas para comprimir aire en una cámara, extrayendo energía del flujo alternativo.

La potencia capturable está limitada físicamente por el ancho del dispositivo perpendicular al frente de onda y su capacidad de responder a las frecuencias del espectro marino. Dispositivos resonantes, diseñados para oscilar naturalmente a la frecuencia dominante de las olas del emplazamiento, pueden capturar hasta el 50% de la potencia incidente teórica.

En el Atlántico Norte, donde la potencia específica promedio es de 50-70 kW/m, un dispositivo de 20 m de ancho podría acceder teóricamente a 1-1.4 MW. Con factores de captura prácticos del 20-30%, la potencia neta sería de 200-400 kW.

La viabilidad comercial depende del factor de capacidad: el porcentaje de tiempo que el dispositivo genera cerca de su potencia nominal. En emplazamientos excelentes, este factor puede alcanzar el 25-35%, comparado con el 90%+ de centrales térmicas convencionales.

Variable dominante: el ancho del dispositivo interceptado al frente de onda y su respuesta en frecuencia respecto al espectro de olas local, que determinan la fracción de potencia oceánica convertida en potencia mecánica.

Límite de validez: cuando las olas son tan grandes (tormentas) que exceden las tensiones de diseño estructural del dispositivo, o tan pequeñas que la fricción mecánica interna consume más energía que la capturada del movimiento ondulatorio.

## 5. Tratamiento médico por ultrasonido focalizado

La concentración de energía ultrasónica en un punto focal permite tratamientos no invasivos como la litotricia (destrucción de cálculos renales) o la ablación de tejido tumoral. Un transductor emite ondas ultrasónicas de alta potencia (decenas de vatios) que convergen mediante lentes acústicas o geometría curva del emisor.

En el foco, la densidad de energía ultrasónica puede alcanzar 10³-10⁴ W/cm², suficiente para generar cavitación (formación y colapso de burbujas de vapor) que destruye mecánicamente el tejido objetivo sin dañar los tejidos intermedios. La energía atraviesa la piel y grasa (que absorben mínimamente) para concentrarse en el blanco.

La planificación del tratamiento requiere calcular la energía depositada en el volumen focal (aproximadamente un elipsoide de 1-3 mm de diámetro) para alcanzar temperaturas de 56°C o más que causan coagulación térmica irreversible. La dosis energética acumulada determina el volumen de tejido destruido.

Variable dominante: la densidad de energía ultrasónica en el punto focal, que debe superar el umbral de cavitación o ablación térmica (típicamente > 1000 W/cm² para cavitación, > 50 W/cm² para ablación térmica acumulada).

Límite de validez: cuando la energía es tan alta que causa efectos no térmicos no deseados en tejidos intermedios (por ejemplo, cavitación en la piel durante el trayecto hacia un cálculo renal profundo), o cuando la atenuación en tejidos densos (hueso) desvía o absorbe excesivamente la energía antes de alcanzar el objetivo.
`;export{e as default};
