const e=`# Errores Comunes en Ondas Longitudinales\r
\r
El estudio de las ondas longitudinales presenta desafíos conceptuales significativos. A continuación, se detallan los malentendidos más frecuentes siguiendo la estructura de blindaje Nivel 5.\r
\r
## Errores conceptuales\r
\r
### Error\r
**Confundir la dirección de oscilación con la de propagación**\r
**Por qué parece correcto:** En las ondas más comunes (cuerdas, agua), el movimiento es hacia arriba y abajo mientras la onda avanza, lo que facilita la visualización.\r
**Por qué es incorrecto:** En fluidos, el medio no tiene rigidez para "tirar" de las partículas hacia los lados; solo puede empujarlas en la línea de avance.\r
**Señal de detección:** Intentar dibujar una "cresta" física alta en una onda de aire.\r
**Corrección conceptual:** Visualice un muelle que se estira y encoge; las partículas solo se mueven en la misma recta que la energía.\r
**Mini-ejemplo:** Al hablar, sus cuerdas vocales empujan el aire hacia adelante, no hacia el techo.\r
\r
### Error\r
**Creer que el aire viaja desde la fuente hasta el receptor**\r
**Por qué parece correcto:** Sentimos el "viento" de un ventilador o una explosión, lo que sugiere un flujo de aire.\r
**Por qué es incorrecto:** El sonido es una oscilación de energía, no un flujo masivo. Las partículas regresan a su sitio.\r
**Señal de detección:** Pensar que el sonido se detendría si hubiera un viento suave en contra.\r
**Corrección conceptual:** El aire es el mensajero, no el mensaje. El mensajero oscila en su puesto.\r
**Mini-ejemplo:** En una "ola" de estadio, la gente sube y baja pero nadie cambia de asiento.\r
\r
### Error\r
**Identificar nodos de desplazamiento como nodos de presión**\r
**Por qué parece correcto:** Se asume que si nada se mueve, "no pasa nada" y la presión debe ser normal.\r
**Por qué es incorrecto:** Donde las partículas no se mueven es donde más se aprietan o se alejan entre sí.\r
**Señal de detección:** Dibujar los picos de presión coincidiendo con los picos de desplazamiento.\r
**Corrección conceptual:** Hay un desfase de 90°. La presión es máxima donde el cambio de posición es nulo pero convergente.\r
**Mini-ejemplo:** En un atasco de tráfico, el punto donde los coches están parados es donde hay más "presión" de parachoques.\r
\r
## Errores de modelo\r
\r
### Error\r
**Usar el modelo isotérmico para el sonido en gases**\r
**Por qué parece correcto:** El aire parece estar a temperatura constante mientras hablamos.\r
**Por qué es incorrecto:** Las oscilaciones son tan rápidas que el calor no tiene tiempo de fluir (proceso adiabático).\r
**Señal de detección:** Obtener una velocidad del sonido de ~290 m/s en lugar de ~340 m/s.\r
**Corrección conceptual:** Use modulo adiabatico de compresibilidad, no presion isoterma en lugar de modulo de compresibilidad igual a la presion.\r
**Mini-ejemplo:** El error de Newton fue precisamente ignorar este carácter adiabático.\r
\r
### Error\r
**Asumir que la densidad mayor siempre frena el sonido**\r
**Por qué parece correcto:** La fórmula la relacion de velocidad entre [[c]], [[B]] y [[rho]] pone la densidad en el denominador.\r
**Por qué es incorrecto:** Los medios densos suelen ser órdenes de magnitud más rígidos (alto B), compensando la inercia.\r
**Señal de detección:** Predecir que el sonido es más lento en el acero que en el aire.\r
**Corrección conceptual:** La rigidez domina sobre la masa en la mayoría de los sólidos y líquidos.\r
**Mini-ejemplo:** El sonido viaja a >5000 m/s en el acero pese a ser mucho más denso que el aire.\r
\r
## Errores matemáticos\r
\r
### Error\r
**Error de signo en la ley de Hooke para fluidos**\r
**Por qué parece correcto:** Solemos pensar que más desplazamiento implica más presión.\r
**Por qué es incorrecto:** Un aumento de volumen (gradiente de desplazamiento positivo) reduce la presión.\r
**Señal de detección:** Obtener presiones negativas en zonas de compresión.\r
**Corrección conceptual:** La fórmula correcta es la relacion entre presion y gradiente de desplazamiento.\r
**Mini-ejemplo:** Si estira un gas (aumenta s con x), la presión baja.\r
\r
## Errores de interpretación\r
\r
### Error\r
**Interpretar el gráfico s(x) como la forma física de la onda**\r
**Por qué parece correcto:** El cerebro está entrenado para ver curvas como formas materiales.\r
**Por qué es incorrecto:** El eje vertical en s(x) representa desplazamiento longitudinal mapeado a vertical por conveniencia gráfica.\r
**Señal de detección:** Pensar que el aire "sube" físicamente en los picos del gráfico.\r
**Corrección conceptual:** La curva es un mapa de estados, no una fotografía de la geometría del aire.\r
**Mini-ejemplo:** Un termómetro sube cuando hace calor, pero el calor no se mueve "hacia arriba" físicamente.\r
\r
## Regla de autocontrol rápido\r
Si al graficar la presión y el desplazamiento en un mismo eje, los picos coinciden en la misma posición de x, **su modelo está mal**. Los picos de presión [[p_hat]] deben coincidir con los puntos donde el desplazamiento [[s_hat]] cruza el eje horizontal (valor cero). Recuerde: Máxima compresión ocurre donde el desplazamiento está cambiando de sentido.`;export{e as default};
