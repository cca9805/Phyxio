# Aplicaciones — Ciclo Diesel

## 1. Evaluación del rendimiento de motores de camión de larga distancia

Los motores Diesel de camiones pesados operan con relaciones de compresión [[r]] de 16 a 20 y relaciones de corte [[r_c]] de 2 a 3, alcanzando rendimientos teóricos del 55 al 65 %. Los motores reales modernos con inyección electrónica common-rail alcanzan rendimientos del 42 al 46 %, representando un 70 a 75 % del límite teórico. El ingeniero de flotas utiliza la comparación con el ciclo Diesel ideal para cuantificar el margen de mejora disponible mediante tecnologías como la recirculación de gases de escape, la sobrealimentación de dos etapas y la optimización de la inyección de combustible. Un motor de 12 litros con [[r]] de 18 y [[r_c]] de 2.5 tiene un rendimiento Diesel teórico de 57.4 %, y cada punto porcentual de acercamiento al ideal ahorra aproximadamente 2500 litros de gasóleo anuales en rutas de larga distancia.

Variable dominante: [[r]] del motor, determinada por el diseño geométrico del cilindro y limitada por la resistencia mecánica del bloque.
Límite de validez: cuando las temperaturas de combustión superan 2200 K y las emisiones de óxidos de nitrógeno obligan a reducir la relación de compresión para cumplir normativas de emisiones.

## 2. Diseño de motores marinos de dos tiempos

Los motores Diesel marinos de dos tiempos son las máquinas térmicas más eficientes del mundo, con rendimientos reales del 50 al 55 % y relaciones de compresión [[r]] de 18 a 22. Operan con relaciones de corte [[r_c]] bajas (1.8 a 2.5) porque la inyección es lenta y controlada en cilindros de gran diámetro (hasta 960 mm de carrera). El ciclo Diesel ideal proporciona la referencia termodinámica contra la que se evalúa cada mejora incremental en el diseño del inyector, la geometría de la cámara de combustión y el sistema de barrido. Un motor Wärtsilä-Sulzer de 80 MW con [[r]] de 20 y [[r_c]] de 2 tiene un rendimiento teórico de 64.7 %, y su rendimiento real del 52 % representa un 80 % del ideal, lo que sitúa a estos motores entre los más cercanos al límite termodinámico.

Variable dominante: [[r_c]] de la inyección, controlada electrónicamente para optimizar el balance entre potencia y emisiones.
Límite de validez: cuando el combustible pesado residual HFO produce combustión incompleta con formación de partículas que invalida el modelo isobárico ideal.

## 3. Dimensionamiento de generadores Diesel de emergencia

Los hospitales, centros de datos y plantas industriales utilizan generadores Diesel como respaldo eléctrico. Estos motores operan con [[r]] de 14 a 18 y [[r_c]] de 2 a 3, con rendimientos reales del 35 al 40 % a carga parcial. El ciclo Diesel ideal permite calcular el consumo específico de combustible mínimo teórico y dimensionar el tanque de almacenamiento para la autonomía requerida. Para un generador de 500 kW eléctricos con rendimiento Diesel teórico del 58 % y rendimiento real del 37 %, el ingeniero calcula que se necesitan 1351 kW térmicos de entrada, equivalentes a 135 litros por hora de gasóleo. El análisis del ciclo determina que mejorar la inyección y el turbo puede elevar el rendimiento al 40 %, reduciendo el consumo a 125 litros por hora y extendiendo la autonomía del tanque un 8 %.

Variable dominante: [[r]] del motor, que determina la base del rendimiento y condiciona la elección entre motores de alta velocidad (r menor) y media velocidad (r mayor).
Límite de validez: cuando el generador opera a carga inferior al 30 % y la relación de corte se vuelve tan pequeña que la combustión se asemeja más a un proceso isocórico, invalidando el modelo Diesel puro.

## 4. Optimización de motores Diesel para maquinaria de construcción

Las excavadoras, bulldozers y grúas de obra utilizan motores Diesel que operan en condiciones transitorias extremas, con variaciones rápidas de carga y velocidad. Los motores típicos tienen [[r]] de 16 a 19 y [[r_c]] variable entre 1.5 y 4 según la demanda instantánea de potencia. El análisis del ciclo Diesel ideal a diferentes [[r_c]] permite mapear la curva de rendimiento en función de la carga y determinar los regímenes de operación óptimos. Un motor de excavadora de 7 litros con [[r]] de 17 y [[r_c]] medio de 2.8 tiene un rendimiento teórico de 55.3 %. El sistema de gestión electrónica ajusta [[r_c]] continuamente para mantener el rendimiento real por encima del 38 %, priorizando la eficiencia en condiciones de carga parcial que representan el 60 % del tiempo de operación.

Variable dominante: [[r_c]] instantánea, controlada por la presión y duración de inyección del sistema common-rail.
Límite de validez: cuando las transiciones de carga son tan rápidas que el motor no alcanza condiciones cuasiestáticas y la combustión es significativamente no uniforme en el cilindro.

## 5. Análisis termodinámico de locomotoras Diesel-eléctricas

Las locomotoras Diesel-eléctricas utilizan un motor Diesel acoplado a un generador eléctrico que alimenta motores de tracción. Los motores típicos tienen [[r]] de 14 a 16 y [[r_c]] de 2.5 a 3.5, con rendimientos reales del 38 al 43 %. El ciclo Diesel ideal proporciona la referencia para evaluar la cadena completa de conversión energética: del calor del combustible al trabajo mecánico del motor, de este a electricidad en el generador, y de la electricidad al par motor en las ruedas. Un motor de locomotora de 3000 kW con [[r]] de 15 y [[r_c]] de 3 tiene un rendimiento Diesel teórico de 53.2 %. El rendimiento real del motor es 41 %, al que se aplica un rendimiento del generador del 96 % y de los motores de tracción del 94 %, dando un rendimiento global del 37 %. La comparación con el límite teórico de cada etapa permite identificar dónde invertir para maximizar la eficiencia de la cadena completa.

Variable dominante: [[r_c]] a cada régimen de velocidad del motor, que define el mapa de rendimiento en función de las revoluciones y la carga.
Límite de validez: cuando la locomotora opera en regímenes de ralentí prolongado donde la combustión es tan pobre que el modelo de adición de calor isobárica deja de ser representativo.
