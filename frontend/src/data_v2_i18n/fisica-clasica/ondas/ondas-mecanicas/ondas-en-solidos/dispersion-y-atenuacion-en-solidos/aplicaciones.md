# Aplicaciones

## 1. Ensayos no destructivos en industrias aeroespaciales

Inspección de componentes estructurales críticos de aleaciones de aluminio y titanio en aeronaves comerciales, aviones de combate y cohetes espaciales. La detección temprana de fisuras submilimétricas y delaminaciones es fundamental para prevenir fallos catastróficos y garantizar la seguridad operativa durante misiones de larga duración.

Se implementan sistemas ultrasónicos de alta [[frecuencia]] (5-15 MHz) con transductores phased-array para detectar defectos internos con resolución submilimétrica. La atenuación del material establece la **profundidad máxima de inspección** efectiva, mientras que la dispersión determina la capacidad para resolver defectos adyacentes. El coeficiente [[alpha]] varía significativamente con el tratamiento térmico del material y la orientación cristalográfica, requiriendo calibración específica para cada lote de componentes.

En aluminio aeronáutico 7075-T6, valores típicos de [[alpha]] son 1-5 Np/m a 5 MHz; en titanio Ti-6Al-4V, 10-50 Np/m a la misma [[frecuencia]]. La anisotropía en componentes forjados puede causar variaciones de hasta 300% en [[alpha]] según la dirección de inspección.

Variable dominante: coeficiente de atenuación [[alpha]], que exhibe fuerte dependencia con la microestructura, [[frecuencia]] y temperatura
Límite de validez: espesores inferiores a 3×[[longitud_de_atenuacion]] con relación señal/ruido superior a 10 dB; no válido en regiones con gradientes de propiedades sin análisis direccional completo

## 2. Caracterización de materiales biomédicos

Evaluación no invasiva de propiedades mecánicas y estructurales de huesos, cartílagos y tejidos blandos para diagnóstico médico y seguimiento terapéutico. La caracterización ultrasónica permite detectar osteoporosis, degeneración tisular y monitorizar procesos de curación con alta sensibilidad.

La propagación de ondas ultrasónicas en medios biológicos complejos involucra múltiples mecanismos de atenuación: **absorción molecular**, scattering por estructuras celulares y dispersión por interfaces tisulares. En hueso cortical, la atenuación (200-500 Np/m a 1 MHz) está dominada por la microestructura porosa y la mineralización, mientras que en tejidos blandos (5-20 Np/m) prevalecen los mecanismos viscoelásticos y el contenido acuoso.

En hueso cortical sano, [[longitud_de_atenuacion]] ≈ 2-5 mm; en hueso osteoporótico puede aumentar hasta 10 mm. En tejidos musculares, [[longitud_de_atenuacion]] ≈ 50-100 mm; en tejido adiposo, [[longitud_de_atenuacion]] ≈ 150-200 mm. La variación con la [[frecuencia]] sigue ley de potencia con exponente [[exponente_de_frecuencia]] ≈ 1.1-1.3.

Variable dominante: longitud de atenuación [[longitud_de_atenuacion]], que correlaciona directamente con densidad mineral ósea y elasticidad tisular
Límite de validez: diagnóstico clínico hasta profundidades con relación señal/ruido > 6 dB; no válido en presencia de gas intestinal o calcificaciones severas que causen scattering excesivo

## 3. Monitorización de integridad estructural en tiempo real

Implementación de sistemas avanzados de salud estructural (SHM) en puentes de gran vano, rascacielos, presas hidroeléctricas y plataformas offshore. Se instalan redes de transductores ultrasónicos permanentes para monitoreo continuo de la integridad estructural y detección temprana de deterioro progresivo.

Los sistemas SHM utilizan mediciones ultrasónicas repetitivas para caracterizar la **evolución temporal de la atenuación** en puntos críticos de la estructura. El aumento progresivo del coeficiente [[alpha]] indica degradación material por corrosión, fatiga o microfisuración. La dispersión temporal permite identificar cambios en las propiedades elásticas y detectar la formación de nuevas interfaces internas.

Incrementos del 10-20% en [[alpha]] sobre valores baseline típicamente correlacionan con daño significativo que requiere intervención. La sensibilidad del sistema permite detectar cambios tan pequeños como 2-3% en condiciones controladas.

Variable dominante: variación temporal del coeficiente de atenuación Δ[[alpha]]/Δt, como indicador temprano de daño estructural
Límite de validez: estructuras con acceso permanente para transductores y condiciones ambientales compensables; no válido con geometría altamente variable o vibraciones excesivas

## 4. Procesamiento industrial de alimentos

Control de calidad avanzado en la industria alimentaria mediante ultrasonido de alta potencia y baja [[frecuencia]]. La caracterización de atenuación permite evaluar propiedades texturales, detectar contaminantes y optimizar procesos de pasteurización y homogeneización en tiempo real.

Las ondas ultrasónicas industriales (20 kHz - 1 MHz) se aplican para múltiples procesos: esterilización por cavitación, homogeneización de emulsiones, ablandamiento de tejidos y detección no destructiva de cuerpos extraños. La atenuación varía significativamente con la composición del producto: **contenido graso**, humedad, presencia de aire y estructura celular determinan los valores de [[alpha]].

En líquidos acuosos, valores típicos de [[perdida_en_decibelios]] son 1-10 dB/cm; en productos cárnicos, 15-30 dB/cm; en productos horneados, 25-50 dB/cm. La dependencia con la temperatura sigue un coeficiente térmico de -0.2 a -0.5%/°C según el tipo de alimento.

Variable dominante: pérdida en decibelios [[perdida_en_decibelios]] por unidad de espesor, que correlaciona con composición y textura del alimento
Límite de validez: productos relativamente homogéneos con temperaturas controladas entre 4-80°C; no válido con alta heterogeneidad estructural o burbujas atrapadas excesivas

## 5. Geofísica y exploración sísmica

Caracterización detallada del subsuelo para exploración petrolera, geotecnia y estudios geológicos estructurales. Las ondas sísmicas naturales e inducidas experimentan atenuación y dispersión significativas al propagarse a través de formaciones rocosas complejas con diferentes propiedades elásticas y fluidos intersticiales.

La atenuación sísmica, expresada mediante el factor de calidad Q (inversamente proporcional a [[alpha]]), permite inferir propiedades petrofísicas de rocas, detectar presencia de hidrocarburos, agua y gas, y caracterizar la estructura estratigráfica del subsuelo. La dispersión sísmica causa que diferentes componentes de [[frecuencia]] viajen a velocidades distintas, afectando la resolución de imágenes sísmicas y requiriendo correcciones para interpretación precisa.

En sedimentos no consolidados, Q típicamente varía entre 10-100, indicando alta atenuación. En areniscas y calizas consolidadas, Q alcanza 100-500. En rocas cristalinas ígneas, Q puede superar 1000, indicando baja atenuación y **alta calidad de propagación**.

Variable dominante: factor de calidad Q, que correlaciona con [[alpha]] mediante Q , donde [[frecuencia]] es la [[frecuencia]] y v la velocidad de propagación
Límite de validez: ondas sísmicas de baja [[frecuencia]] (1-100 Hz) con dispersión moderada y aproximación de medio lineal; no válido cerca de fuentes sísmicas donde las amplitudes exceden el régimen elástico