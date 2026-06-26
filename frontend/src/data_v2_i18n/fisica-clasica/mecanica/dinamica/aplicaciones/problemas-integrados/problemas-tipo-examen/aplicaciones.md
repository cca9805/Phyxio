# Aplicaciones: Problemas tipo examen

## 1. Sistemas de poleas en construcción

Las grúas de construcción utilizan sistemas de poleas y contrapesos que son analíticamente equivalentes al sistema estudiado. Un bloque de hormigón prefabricado se eleva mediante un contrapeso más ligero sobre un raíl inclinado, reduciendo la energía consumida por el motor. Ingenieros civiles aplican exactamente las mismas ecuaciones de masa vinculada para calcular si el contrapeso puede iniciar el ascenso sin ayuda del motor o si este debe aportar una fuerza adicional. La [[aceleracion_sistema]] calculada determina la potencia mínima del motor y la [[tension_cuerda]] dicta el diámetro mínimo del cable de acero. En edificios de gran altura, este análisis se repite para cada tramo del recorrido porque el [[angulo_plano]] efectivo varía con la curvatura del raíl.

**Variable dominante:** [[aceleracion_sistema]] — determina la potencia que debe aportar el motor y los tiempos de ciclo de la grúa.

**Límite de validez:** El modelo ideal es aplicable cuando la masa del cable es inferior al 5% de [[masa_1]] y la velocidad de ascenso no supera 2 m/s; por encima de estos valores, la inercia del cable y la viscosidad del lubricante de los rodamientos requieren modelos más completos.

## 2. Frenos de emergencia en funiculares

Los funiculares de montaña funcionan mediante dos cabinas unidas por el mismo cable: cuando una sube, la otra baja. El sistema es energéticamente eficiente porque el peso de la cabina descendente financia parte del ascenso de la otra. En condiciones de emergencia (corte del cable principal), el sistema de frenos debe absorber la [[fuerza_rozamiento]] necesaria para detener el movimiento. Los ingenieros calculan la [[aceleracion_sistema]] máxima tolerable para los pasajeros (en general inferior a 0.3 g) y de ahí obtienen la [[fuerza_rozamiento]] mínima que deben proporcionar los frenos de emergencia. La [[fuerza_normal]] entre las zapatas de freno y el carril determina directamente esta fuerza a través del [[coeficiente_rozamiento]] de los materiales de fricción.

**Variable dominante:** [[fuerza_rozamiento]] — es la magnitud que los ingenieros ajustan mediante el diseño del sistema de frenos para controlar la [[aceleracion_sistema]] de frenado.

**Límite de validez:** El modelo es válido para frenadas a velocidades inferiores a 15 m/s; por encima, el calor generado modifica el [[coeficiente_rozamiento]] de forma no lineal y se requiere análisis termomecánico.

## 3. Cintas transportadoras en minería

Las minas subterráneas usan cintas transportadoras inclinadas para subir mineral desde la profundidad. El mineral forma la [[masa_1]] que debe subir por el plano inclinado; el motor actúa como la [[masa_2]] virtual que aporta la fuerza tractora a través del cable de la cinta. Si la [[aceleracion_sistema]] deseada es alta, la [[tension_cuerda]] en la cinta puede superar los límites estructurales del material. Los ingenieros dimensionan la resistencia a la tracción de la cinta calculando [[tension_cuerda]] para el peor caso: arranque en frío (con [[coeficiente_rozamiento]] estático, mayor que el dinámico) y carga máxima. La [[componente_tangencial_peso]] del mineral es la resistencia principal a vencer y determina directamente el consumo eléctrico del motor.

**Variable dominante:** [[tension_cuerda]] — su valor máximo durante el arranque determina la clase resistente de la cinta y su vida útil.

**Límite de validez:** El modelo es aplicable mientras la elongación elástica de la cinta sea inferior al 0.5% de su longitud; cintas muy largas (más de 500 m) requieren modelos de onda de tensión que consideran la propagación de la fuerza a lo largo de la cinta.

## 4. Rampas de acceso para sillas de ruedas

El diseño de rampas accesibles requiere conocer la fuerza que una persona debe ejercer para empujar una silla de ruedas cargada hacia arriba. El usuario ejerce la fuerza equivalente a una [[masa_2]] virtual; la silla con su ocupante es la [[masa_1]] sobre el plano inclinado. La normativa internacional (ISO 9999) limita el [[angulo_plano]] máximo a 5° para rampas de uso independiente, precisamente porque a ese ángulo la [[componente_tangencial_peso]] de una silla estándar (90 kg) es de unos 77 N, manejable para la mayoría de usuarios. El [[coeficiente_rozamiento]] de las ruedas de goma sobre pavimento seco (≈ 0.02) es tan bajo que la [[fuerza_rozamiento]] es despreciable, y el modelo se simplifica a una fuerza tractora que equilibra la [[componente_tangencial_peso]].

**Variable dominante:** [[angulo_plano]] — es la variable de diseño que regula la accesibilidad; pequeños cambios en el ángulo producen cambios proporcionales en la [[componente_tangencial_peso]] y el esfuerzo requerido.

**Límite de validez:** El modelo es válido para [[angulo_plano]] inferior a 10° y superficies pavimentadas con [[coeficiente_rozamiento]] menor a 0.05; en rampas más empinadas o superficies rugosas, la dinámica de las ruedas y la distribución de carga entre ejes del sillón requieren análisis adicional.

## 5. Ascensores con contrapeso

Los ascensores modernos incorporan un contrapeso de masa equivalente a la cabina vacía más el 40–50% de la carga útil nominal. El conjunto cabina-contrapeso reproduce exactamente el sistema de dos masas vinculadas: la [[masa_1]] (contrapeso) desciende cuando la [[masa_2]] (cabina con pasajeros) sube, y la [[aceleracion_sistema]] viene dada por el desequilibrio de fuerzas entre ambos. El motor solo debe aportar la diferencia de fuerzas. La [[tension_cuerda]] en los cables de suspensión bajo plena carga y plena [[aceleracion_sistema]] (típicamente 1 m/s²) determina el coeficiente de seguridad del cable, que por normativa debe ser mayor que 12. La [[fuerza_normal]] entre los zapatos de guía y el carril genera la [[fuerza_rozamiento]] de guiado, que consume una fracción pequeña (2–5%) de la energía del motor.

**Variable dominante:** [[masa_2]] (masa total de la cabina con carga) — determina el desequilibrio de fuerzas que el motor debe compensar y por tanto el consumo energético del edificio.

**Límite de validez:** El modelo de dos masas vinculadas es válido para velocidades inferiores a 4 m/s; ascensores de alta velocidad (más de 6 m/s) requieren incluir la dinámica de los cables como elementos elásticos distribuidos.

Por qué esta aplicación fue o es importante.

### Conexión con conceptos generales

Cómo este leaf se integra en una comprensión más amplia.

## Aplicación 5: Análisis y síntesis

Una reflexión crítica sobre límites, extensiones o implicaciones.

### Pregunta desafiante

Una pregunta que requiere aplicar el concepto de forma no trivial.

### Análisis y resolución

Abordar la pregunta utilizando el framework del leaf.

### Generalización

Cómo se extiende el resultado a otros contextos.
