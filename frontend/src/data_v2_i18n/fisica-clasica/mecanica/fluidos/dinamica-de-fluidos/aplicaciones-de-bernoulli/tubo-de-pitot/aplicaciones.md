# Tubo de Pitot — Aplicaciones

## 1. Aplicación principal: medición de velocidad aerodinámica en aviación
**Variable dominante:** [[v]], velocidad aerodínamica de la aeronave respecto al aire.

**Límite de validez:** Flujo incompresible (Ma < 0,3); a velocidades superiores se aplica la ecuación de Rayleigh-Pitot con corrección de compresibilidad.
La aplicación más crítica y extendida del tubo de Pitot es la medición de la velocidad aerodinámica (airspeed) en aeronaves. Todos los aviones comerciales, militares y drones de altas prestaciones llevan al menos una sonda Pitot-estática como sensor primario de velocidad del sistema de datos de aire (Air Data System, ADS).

**Flujo de trabajo para calcular la velocidad indicada (IAS):**

1. **Medir la diferencia de presión**: el transductor de presión diferencial de la sonda convierte [[dp]] en una señal eléctrica en tiempo real.
2. **Obtener la densidad**: el altímetro barométrico da la presión estática [[p]]; con la temperatura exterior medida por una sonda TAT, se calcula [[rho]].
3. **Calcular la velocidad**: se aplica la relación de velocidad del leaf con [[dp]] y [[rho]].
4. **Corrección por compresibilidad**: para velocidades sobre Mach 0,3, el ordenador de vuelo aplica la fórmula de Bernoulli compresible para obtener la velocidad verdadera (TAS).
5. **Contrastar con GPS/INS**: la velocidad respecto al suelo (GS) se obtiene del GPS; la diferencia entre GS y TAS da la componente de viento de cara/cola, un dato crítico para el plan de vuelo y el consumo de combustible.

**Parámetro de referencia**: un Boeing 737 en crucero a 10 700 m de altitud con temperatura exterior baja y [[rho]] cercana a 0,38 kg/m^3 vuela a TAS cercana a 900 km/h. La presión dinámica correspondiente es del orden de 11,9 kPa.

un 11,7 % de la presión atmosférica a esa altitud.

**Riesgo de diseño**: el enmascaramiento de la sonda (por hielo, aves o protección de transporte olvidada) produce lecturas de velocidad erróneas o nulas. Es una de las causas directas de accidentes de aviación de mayor gravedad. Los sistemas modernos incorporan calefactores eléctricos en la sonda, redundancia triple y algoritmos de detección de discrepancias entre sondas.

---

## 2. Aplicación técnica industrial: perfil de velocidades en conductos mediante traversal Pitot

**Variable dominante:** [[dp]], diferencia de presión en cada punto de la malla; integrada con el área representativa para obtener caudal.

**Límite de validez:** Flujo turbulento desarrollado con sección circular o rectangular regular; para conductos con obstrucciones o soportes próximos, la malla de medición debe estar al menos 10 diámetros aguas abajo de cualquier perturbación.

En sistemas de ventilación, climatización (HVAC), ductos de proceso industrial y torres de refrigeración, la medición del caudal másico de aire con precisión es esencial para el balance energético y la puesta en marcha de la instalación. El método estándar es el **traversal de Pitot**: se realizan lecturas de [[dp]] en una malla de puntos distribuidos regularmente sobre la sección transversal del conducto e integra numéricamente el perfil de velocidades.

**Cálculo del caudal por integración del perfil:**

El caudal se obtiene integrando el perfil de velocidades en la sección. En discretización práctica se suma la contribución de cada punto de la malla como velocidad local por área representativa.

**Normas aplicables**: ISO 7145 (caudal en conductos circulares), ASHRAE Standard 111 (medición en sistemas HVAC).

**Decisión de ingeniería típica**: en la puesta en marcha de un sistema de extracción de humos de una planta química, el traversal de Pitot permite detectar que el ventilador centrifugal opera en la zona de inestabilidad de su curva característica porque el caudal real es un 15 % inferior al diseño. Ajustando la posición de la compuerta de regulación se desplaza el punto de trabajo a la zona estable, reduciendo el nivel de ruido y el consumo eléctrico en un 8 %.

---

## 3. Aplicación cotidiana e interdisciplinar: espirómetros y ciclismo

**Variable dominante:** flujo volumétrico de aire inhalado/exhalado (espirómetro) o [[dp]] frontal para estimar resistencia aerodínamica (ciclismo).

**Límite de validez:** En espirómetros, flujo laminado de baja velocidad (Reynolds < 2 000 en la pieza bucal); en ciclismo, instabilidades térmicas y vuelta rápida pueden degradar la precisión.

### 3a. Espirómetros médicos

Los espirómetros de turbina y muchos de los de tipo diferencial de presión incorporan una variante del tubo de Pitot para medir el flujo de aire inhalado y exhalado durante las pruebas de función pulmonar. El dispositivo mide [[dp]] generado por el paso del aire a través de una resistencia calibrada; conociendo la resistencia del sistema se obtiene el flujo.

El diagnóstico de EPOC, asma y otras patologías respiratorias depende de la precisión de esta medición: una incertidumbre del 5 % en el pico de flujo espiratorio (PEF) puede cambiar la clasificación de la gravedad de la enfermedad y el tratamiento farmacológico.

### 3b. Ciclismo y aerodinámica personal

Los medidores de potencia para ciclismo de alta competición (Garmin, Wahoo, CMetric) utilizan sensores de presión diferencial tipo Pitot integrados en el manillar o en la horquilla para estimar el coeficiente de arrastre aerodinámico del ciclista en tiempo real. Combinando [[v]] (del GPS) con [[dp]] (de la sonda frontal), se puede calcular la potencia aerodinámica sin necesidad de un velódromo ni de un túnel de viento, permitiendo al corredor optimizar su posición en carretera.

**Puente interdisciplinar**: la transición del tubo de Pitot de la aviación a la medicina y al deporte de competición ilustra cómo un principio físico elemental —convertir velocidad en presión en un punto de estancamiento— se convierte en una plataforma de medición universal cuando el contexto de aplicación tiene densidades, escalas de velocidad y tolerancias de error diferentes.

---

## 4. Aplicación ambiental: medición de velocidad del viento en estaciones meteorológicas

**Variable dominante:** [[v]], velocidad del viento; la presión dinámica asociada se registra con transductores piezoeléctricos de alta resolución.

**Límite de validez:** Flujo de aire exterior aproximadamente paralelo al eje del sensor; para vientos con componente vertical significativa (flujo orrográfico en montaña), se requieren sondas de tres ejes.

Las estaciones meteorológicas de alta prestación (por ejemplo, los mástiles de medición de parques eólicos o los observatorios de altura) utilizan sondas Pitot-estáticas para registrar la velocidad del viento con incertidumbre baja. La densidad del aire [[rho]] se corrige en tiempo real a partir de temperatura y presión atmosférica, y esa corrección se inyecta en la conversión de [[dp]] a [[v]]. Estos datos son esenciales para los modelos de recurso eólico que determinan la viabilidad económica de un parque eólico.

---

## 5. Aplicación en ingeniería de procesos: monitoreo de caudal de gas en chimeneas industriales

**Variable dominante:** caudal másico de gas en la chimenea, calculado a partir de un traversal Pitot con corrección de temperatura.

**Límite de validez:** Gas limpio y fluiîdo; si el gas contiene partículas en suspensión (>10 mg/m³) o condensados, el orificio del Pitot puede obstruirse. En ese caso se usan sondas Pitot con purga de aire o analizadores de presión ultrasónicos.

La normativa europea EN ISO 10780 y la americana EPA Method 2 obligan a las instalaciones industriales a medir el caudal de gases en chimeneas para calcular las emisiones contaminantes reportadas al registro EPER/E-PRTR. El procedimiento estándar es un traversal Pitot en la sección de la chimenea, operado con gases a temperaturas de hasta 400 °C. A esas temperaturas, la densidad del gas se recalcula con la ecuación de estado y se usa para convertir [[dp]] en [[v]]. Sin esa corrección de [[rho]], las emisiones pueden quedar subestimadas.