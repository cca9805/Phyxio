const e=`# Historia de resistencias en paralelo\r
\r
## Problema histórico\r
La ingeniería eléctrica temprana necesitó distribuir energía a múltiples receptores sin perder control de tensión en cada carga. En sistemas de iluminación y redes urbanas, conectar todo en serie degradaba desempeño porque cada cambio de una carga alteraba el resto. El problema histórico fue encontrar una arquitectura de conexión que permitiera independencia operativa relativa entre ramas y, al mismo tiempo, una contabilidad global de corriente en la fuente.\r
\r
Con la expansión de sistemas de corriente continua en ciudades y plantas, la pregunta dejó de ser solo matemática. Se volvió una pregunta de confiabilidad, mantenimiento y seguridad térmica. El arreglo paralelo ofrecía una solución práctica: mantener la misma diferencia de potencial en ramas distintas y permitir que cada rama ajustara su corriente según su resistencia efectiva.\r
\r
## Dificultad conceptual previa\r
La dificultad conceptual previa era doble. Primero, costaba aceptar que una conexión adicional pudiera aumentar corriente total y al mismo tiempo reducir resistencia equivalente [[Req]]. Segundo, se confundía la idea de reparto de corriente con una división arbitraria, en vez de reconocer que el reparto está gobernado por resistencias de rama bajo tensión común.\r
\r
Otra dificultad venía de mezclar magnitudes de distinta naturaleza. En muchos textos aplicados se alternaba entre resistencia y conductancia sin aclarar que ambas son representaciones del mismo fenómeno con conveniencias distintas. Esa ambigüedad generaba errores de signo, errores de unidad y conclusiones operativas débiles.\r
\r
## Qué cambió\r
Cambió el marco de interpretación y de diseño. Se consolidó la lectura nodal: en paralelo la tensión de rama es común, las corrientes se reparten por oposición local y la corriente total [[It]] se obtiene por suma coherente de corrientes de rama. También se consolidó la equivalencia entre dos rutas de análisis: la vía de [[Req]] y la vía de [[Geq]].\r
\r
Ese cambio permitió pasar de reglas heurísticas a procedimientos verificables. Se pudo diseñar, medir y corregir circuitos con criterios explícitos: cierre nodal, coherencia dimensional y análisis de sensibilidad por rama. A partir de allí, la arquitectura paralelo-serie se volvió lenguaje básico para instrumentación, energía distribuida y electrónica de potencia.\r
\r
## Impacto en la física\r
El impacto en la física aplicada fue profundo porque fortaleció la relación entre ley local y comportamiento de sistema. La relación corriente-tensión-resistencia dejó de verse como una igualdad aislada y pasó a entenderse como parte de una red con topología concreta. Esa transición elevó el valor de conceptos como dominio de validez, hipótesis de linealidad y criterio de consistencia.\r
\r
Además, el estudio de paralelos reforzó la necesidad de separar magnitudes de estado de parámetros de componente. Esta distinción, central en física experimental, mejoró el diseño de ensayos y la interpretación de desvíos por tolerancia, temperatura o contacto.\r
\r
## Conexión con física moderna\r
En física moderna e ingeniería contemporánea, la idea de ramas en paralelo aparece en redes de potencia, microelectrónica, sensores distribuidos y sistemas de almacenamiento energético. La lógica de balance local y cierre global se extiende a modelos más complejos, incluidos sistemas no lineales y redes inteligentes.\r
\r
La conexión conceptual más valiosa es metodológica: partir de un modelo ideal, validar con medición, detectar desvíos y escalar a un modelo extendido cuando la decisión operativa lo exige. Ese enfoque, nacido en problemas clásicos como resistencias en paralelo, sigue siendo una estrategia vigente para construir conocimiento físico usable.`;export{e as default};
