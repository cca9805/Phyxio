# Aplicaciones

## 1. Diseño de sistemas de sonorización y PA

En instalaciones de audio profesional (conciertos, conferencias, eventos deportivos), los ingenieros de sonido deben calcular la distribución de intensidad acústica para garantizar que todos los asistentes reciban nivel sonoro adecuado sin exceder límites de seguridad. La ley del inverso del cuadrado determina cuántos altavoces se requieren y dónde posicionarlos.

Un sistema de sonorización para un concierto al aire libre debe proporcionar intensidades de al menos 0.1 W/m² (100 dB) en la zona de audiencia frontal, mientras que en zonas residenciales cercanas la intensidad debe mantenerse por debajo de 0.001 W/m² (90 dB) para cumplir normativas de ruido urbano. Calculando la potencia de cada altavoz y su distancia a estas zonas críticas, los ingenieros diseñan arreglos direccionales que concentran la energía hacia la audiencia minimizando la dispersión hacia vecindarios.

Variable dominante: la directividad de los altavoces y su patrón de radiación, que permite concentrar intensidad en direcciones deseadas.

Límite de validez: a distancias mayores que 500 metros, la absorción atmosférica reduce la intensidad adicionalmente a la predicción geométrica, lo cual debe considerarse en la planificación de eventos masivos.

## 2. Medición de ruido ambiental y normativas

Las autoridades ambientales y de salud pública utilizan mediciones de intensidad acústica (expresadas en decibelios) para establecer zonas de ruido, emitir licencias de actividad y proteger la salud de trabajadores y residentes. La exposición laboral a intensidades superiores a 85 dB (aproximadamente 3×10⁻⁴ W/m²) durante 8 horas exige protección auditiva según normativas internacionales (OSHA, EU-OSHA).

Sonómetros calibrados miden la presión acústica instantánea y calculan la intensidad equivalente mediante la relación entre presión acústica e intensidad, promediada en el tiempo. Cartografías de ruido urbano representan la intensidad acústica en diferentes zonas de una ciudad, identificando "islas de ruido" donde la intensidad excede límites saludables (generalmente 70 dB durante el día, 55 dB durante la noche).

Los ingenieros acústicos utilizan modelos de propagación basados en la ley del inverso del cuadrado modificada por absorción atmosférica para predecir el impacto acústico de nuevas infraestructuras (autopistas, aeropuertos, plantas industriales).

Variable dominante: el nivel equivalente de intensidad acústica (Leq) medido en dB, que integra la exposición temporal.

Límite de validez: en entornos urbanos con múltiples reflexiones en edificios, la intensidad no sigue la ley del inverso del cuadrado pura; debe usarse modelos de propagación compleja considerando reverberación.

## 3. Irradiancia solar y paneles fotovoltaicos

La irradiancia solar (intensidad de radiación electromagnética del Sol) en la superficie terrestre es de aproximadamente 1000 W/m² en condiciones de cielo despejado (conocida como "sol estándar" AM1.5). Esta intensidad determina la potencia máxima que pueden generar los paneles fotovoltaicos.

Los diseñadores de instalaciones solares calculan la intensidad disponible a lo largo del año considerando la geometría del movimiento solar y la inclinación de los paneles. La potencia generada resulta del producto de la irradiancia incidente por el área del panel y por la eficiencia de conversión (típicamente 15-20% para silicio cristalino).

En grandes plantas solares fotovoltaicas, la intensidad solar se considera constante sobre extensiones de varios kilómetros (la distancia al Sol es tan grande que la variación por el inverso del cuadrado es despreciable en la superficie terrestre). Sin embargo, la sombra mutua entre paneles adyacentes reduce localmente la intensidad efectiva recibida, requiriendo espaciado cuidadoso.

Variable dominante: el ángulo de incidencia de la radiación solar sobre el panel, que determina la componente perpendicular de la intensidad según la ley del coseno.

Límite de validez: en días nublados, la radiación se vuelve difusa (procedente de todo el hemisferio celeste) y la intensidad directa perpendicular pierde significado; se debe usar irradiancia hemisférica total.

## 4. Seguridad radiométrica y protección contra radiación

En instalaciones médicas (radiología, oncología radiante) e industriales (radiografía no destructiva), la intensidad de radiación ionizante (medida en W/m² o equivalente en sieverts para dosis biológica) determina las zonas de exclusión y los requisitos de blindaje. La ley del inverso del cuadrado es fundamental para establecer perímetros de seguridad alrededor de fuentes radiactivas.

Para una fuente de radiación gamma de 1 curie emitiendo aproximadamente 3.7×10¹⁰ desintegraciones por segundo, la intensidad de radiación a 1 metro puede alcanzar niveles peligrosos. El blindaje de plomo o concreto reduce adicionalmente la intensidad transmitida según leyes exponenciales de atenuación, complementando la disminución geométrica.

Los proteccionistas radiológicos calculan la "distancia de seguridad" para diferentes tiempos de exposición, asegurando que la dosis acumulada (proporcional a intensidad × tiempo) permanezca por debajo de límites anuales (típicamente 20 mSv para trabajadores, 1 mSv para público general).

Variable dominante: la constante de tiempo de exposición, que junto con la intensidad determina la dosis total recibida.

Límite de validez: para radiación de partículas cargadas (alfa, beta), el alcance en aire es limitado y la ley del inverso del cuadrado no aplica; la atenuación es casi total en distancias cortas por ionización del medio.

## 5. Telecomunicaciones y diseño de antenas

En sistemas de comunicación inalámbrica (radio, televisión, telefonía móvil, WiFi), la intensidad de la señal electromagnética recibida determina la calidad de la comunicación y la tasa de transferencia de datos. Los ingenieros de telecomunicaciones calculan la "intensidad de campo" (relacionada con la intensidad de potencia) para diseñar cobertura de antenas y evitar interferencias.

La potencia efectiva radiada (ERP) de una antena se distribuye sobre el área esférica de la onda electromagnética, reduciéndose con la distancia según la ley del inverso del cuadrado. Los operadores de telefonía móvil posicionan antenas repetidoras para mantener la intensidad recibida por los teléfonos dentro del rango operativo (típicamente entre 10⁻⁶ y 10⁻¹⁰ W/m², equivalente a -30 dBm a -70 dBm).

Las antenas direccionales (parabólicas, Yagi, paneles sectoriales) concentran la intensidad en ángulos sólidos reducidos, multiplicando la intensidad en el eje principal por factores de directividad que pueden alcanzar 1000× o más comparado con una fuente isotrópica.

Variable dominante: la frecuencia de la señal, que determina tanto la atenuación atmosférica como la difracción alrededor de obstáculos, complementando la atenuación geométrica.

Límite de validez: en entornos urbanos con múltiples trayectos (multipath), la intensidad recibida fluctúa por interferencia constructiva y destructiva entre ondas directas y reflejadas, desviándose significativamente de la predicción del modelo de espacio libre.