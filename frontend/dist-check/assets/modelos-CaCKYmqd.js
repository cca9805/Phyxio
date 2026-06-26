const e=`# Modelos y validez\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf considera una fuerza de modulo [[F]] aproximadamente constante que actua sobre un sistema definido a lo largo de un desplazamiento [[d]] tambien bien definido. La transferencia se lee con [[W]] y la orientacion con [[theta]]. Esta formulacion no busca describir toda la dinamica interna del sistema, sino la parte energetica directamente asociada a la proyeccion de la fuerza sobre el desplazamiento.\r
\r
En este modelo, el sistema conserva una geometria de analisis simple. El tramo estudiado puede ser corto o segmentado, pero dentro de cada segmento la interaccion dominante se trata como constante. El beneficio es una lectura causal clara y rapida del signo y la escala de la transferencia energetica.\r
\r
## Hipótesis\r
\r
Primera hipotesis: [[F]] puede tratarse como estable dentro del tramo analizado. Segunda hipotesis: el desplazamiento [[d]] representa de forma coherente el cambio de posicion relevante para esa fuerza. Tercera hipotesis: el angulo [[theta]] esta definido en el mismo marco que fuerza y desplazamiento, sin mezclar ejes incompatibles. Cuarta hipotesis: la pregunta principal es de transferencia mecanica, no de evolucion temporal fina.\r
\r
Tambien se asume que el sistema no requiere un modelo de deformacion compleja para explicar el resultado principal. Si los efectos internos dominan la energia intercambiada, este leaf deja de ser suficiente por si solo.\r
\r
## Dominio de validez cuantitativo\r
\r
Como regla operativa, el modelo suele funcionar con robustez cuando la variacion relativa de la fuerza en el tramo cumple error_relativo_fuerza <= 0.10 y la incertidumbre de orientacion se mantiene en una banda estrecha alrededor del valor medido. Si ademas el tramo es corto y la direccion de avance no cambia abruptamente, la estimacion de [[W]] es estable.\r
\r
Criterio cuantitativo explicito: si DeltaF/F < 0.10 y DeltaTheta <= 10 grados, el uso de [[F]] constante suele conservar el signo correcto de [[W]] y un error de escala aceptable para toma de decisiones inicial.\r
\r
Otra regla util: cuando el objetivo es estimar transferencia por una interaccion dominante y la diferencia esperada entre contribuciones principales supera alrededor de 15 por ciento, el modelo de fuerza constante suele distinguir bien signo y escala. Cuando esa diferencia cae por debajo de ruido experimental o de modelado, conviene enriquecer el esquema.\r
\r
Cuando conviene cambiar de modelo es cuando variacion_fuerza >= 0.20 en el tramo o cuando curvatura de trayectoria impide representar [[d]] con una direccion efectiva unica. En esas condiciones la lectura simplificada pierde fidelidad.\r
\r
Regla de salida: si DeltaF/F > 0.20, si el signo esperado de [[W]] cambia entre subtramos, o si la diferencia entre estimaciones simplificada y segmentada supera 15 por ciento, se recomienda migrar al modelo de fuerza variable.\r
\r
## Señales de fallo del modelo\r
\r
Una señal de fallo aparece cuando el resultado de [[W]] contradice de forma sistematica el comportamiento observado del sistema en repetidas mediciones equivalentes. Otra señal aparece cuando pequeñas correcciones de [[theta]] producen saltos grandes y no fisicos en la interpretacion final.\r
\r
Tambien falla si el sistema presenta fuerte dependencia de posicion o velocidad y el problema exige capturar esa variacion para explicar el fenomeno central. En esos casos, el modelo puede seguir dando un numero, pero ese numero deja de ser una representacion fiable del mecanismo dominante.\r
\r
## Modelo extendido o alternativo\r
\r
El primer escalado natural es el modelo de trabajo de fuerza variable, donde el aporte se integra sobre la trayectoria y no se reduce a un solo valor de fuerza. Otro escalado frecuente combina este leaf con teorema trabajo-energia para contrastar transferencia local por fuerza con cierre global por estados.\r
\r
En problemas con disipacion compleja, contactos no ideales o conversiones internas relevantes, conviene pasar a un modelo energetico ampliado que explicite canales de perdida o almacenamiento no capturados por el producto escalar elemental.\r
\r
## Comparación operativa\r
\r
Comparado con modelos variables, el modelo ideal de este leaf es mas rapido y mas transparente para lectura de signo. Comparado con marcos energeticos completos, es menos general, pero ofrece una herramienta didactica muy eficiente cuando la pregunta principal es geometria de transferencia por una fuerza concreta.\r
\r
En la practica, si el problema pide interpretar como la orientacion entre fuerza y desplazamiento controla el resultado, este modelo es la mejor entrada. Si la pregunta pide precision de trayectoria, dependencia funcional de la fuerza o balance multi-canal detallado, hay que migrar al modelo extendido.`;export{e as default};
