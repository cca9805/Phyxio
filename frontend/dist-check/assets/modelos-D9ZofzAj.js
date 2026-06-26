const e=`# Modelos físicos implicados en la analogía lineal-angular\r
\r
## Modelo ideal\r
\r
La analogía entre dinámica traslacional y rotacional no introduce un nuevo modelo físico, sino que conecta dos modelos ya existentes mediante una misma estructura matemática.\r
\r
Por un lado, el modelo traslacional describe cómo una fuerza produce aceleración en un sistema con masa. Por otro, el modelo rotacional describe cómo un torque produce aceleración angular en un sistema con momento de inercia.\r
\r
La analogía permite ver ambos como instancias de un mismo esquema dinámico.\r
\r
---\r
\r
## Hipótesis\r
\r
El modelo rotacional no es independiente: se construye reinterpretando las magnitudes del modelo traslacional.\r
\r
La fuerza [[F]] se sustituye por el torque [[tau]], la masa [[m]] por el momento de inercia [[I]], y la aceleración [[a]] por la aceleración angular [[alpha]].\r
\r
Este proceso no es un cambio simbólico superficial. Cada sustitución implica una reinterpretación física profunda: el movimiento ya no es lineal, sino angular, y depende de un eje de referencia.\r
\r
---\r
\r
## Dominio de validez cuantitativo\r
\r
Lo que se conserva es la estructura de la ley dinámica:\r
\r
- Existe una causa (fuerza o torque)\r
- Existe una respuesta (aceleración lineal o angular)\r
- Existe una resistencia al cambio (masa o momento de inercia)\r
\r
Esto permite aplicar los mismos esquemas de resolución en ambos contextos. Como criterio cuantitativo mínimo, el modelo ideal es razonable si el eje está definido, la deformación relativa del cuerpo es pequeña, la masa se mantiene constante y las velocidades son muy inferiores a la velocidad de la luz. En ese rango, la \r
{{f:correspondencia_lineal_angular}}\r
 es una herramienta fiable antes de recurrir a modelos complejos, elásticos o disipativos detallados.\r
\r
Criterios cuantitativos explícitos para usar el modelo ideal:\r
\r
- deformación relativa: |ΔL|/L <= 0.01\r
- variación de masa durante el intervalo: |Δm|/m <= 0.01\r
- pérdidas disipativas en el balance: E_disipada/E_transferida <= 0.10\r
- régimen clásico: v < 0.1c\r
- eje cuasi fijo: |Δeje|/L_característica <= 0.05\r
\r
Orden de magnitud orientativo: para sistemas educativos de laboratorio, suele ser consistente trabajar con torques entre 10^-2 y 10^1 N·m y momentos de inercia entre 10^-4 y 10^-1 kg·m^2, siempre que el eje y la geometría estén bien definidos.\r
\r
---\r
\r
## Señales de fallo del modelo\r
\r
El cambio fundamental es que el movimiento rotacional introduce dependencia geométrica.\r
\r
El momento de inercia [[I]] no es una propiedad simple como la masa [[m]], sino que depende de cómo está distribuida la masa respecto al eje de giro.\r
\r
Además, el torque [[tau]] depende del punto de aplicación de la fuerza, lo que no ocurre en el modelo traslacional. Señales observables de fallo aparecen cuando el eje se desplaza durante el fenómeno, el cuerpo se deforma de forma apreciable, el rozamiento disipa una fracción grande de la energía, o la distribución de masa cambia mientras gira. En esos casos, la misma tabla de correspondencias deja de predecir correctamente la respuesta.\r
\r
---\r
\r
## Modelo extendido o alternativo\r
\r
La analogía deja de ser útil cuando se ignoran estas diferencias.\r
\r
En problemas donde la geometría, el eje de rotación o la distribución de masa son relevantes, el modelo rotacional no puede tratarse como una simple extensión del traslacional.\r
\r
El modelo alternativo consiste en abandonar la correspondencia simple y escribir la dinámica completa respecto al eje real: torques externos, momento de inercia dependiente del tiempo si procede, pérdidas por rozamiento y posibles restricciones cinemáticas. Conviene cambiar a ese modelo cuando el eje no sea fijo, cuando [[I]] no pueda considerarse constante o cuando la fuerza aplicada no tenga un brazo de palanca bien definido.\r
\r
---\r
\r
## Comparación operativa\r
\r
El principal valor de esta analogía es operativo: permite reutilizar estrategias de resolución.\r
\r
Un problema que en traslación se resolvería con \r
{{f:segunda_ley_newton}}\r
puede abordarse en rotación mediante \r
{{f:segunda_ley_rotacional}}\r
gracias a la \r
{{f:correspondencia_lineal_angular}}\r
siempre que se identifiquen correctamente las magnitudes implicadas.\r
\r
---\r
\r
## Síntesis\r
\r
La analogía lineal-angular no define un modelo nuevo, sino una correspondencia estructural entre dos modelos distintos. Su uso correcto requiere entender qué se mantiene y qué cambia al pasar de uno a otro.`;export{e as default};
