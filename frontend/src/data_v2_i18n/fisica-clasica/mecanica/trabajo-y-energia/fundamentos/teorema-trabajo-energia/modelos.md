# Modelos y validez

## Modelo ideal

El modelo ideal del teorema trabajo-energia describe un sistema mecanico de masa [[m]] aproximadamente constante cuyo estado puede resumirse por una rapidez inicial [[vi]] y una rapidez final [[vf]], o de forma equivalente por una energia cinetica inicial [[Ki]] y una energia cinetica final [[Kf]]. El foco no esta en conocer la fuerza exacta en cada instante, sino en representar el efecto global de todas las interacciones mediante un trabajo neto [[Wnet]] que explique la variacion [[dK]] del presupuesto cinetico.

En este modelo, el movimiento es clasico, la descripcion traslacional es suficiente y el sistema permanece bien definido desde el inicio hasta el final. Esto significa que [[Ki]], [[Kf]], [[dK]] y [[Wnet]] se refieren siempre al mismo objeto fisico. Cuando esas condiciones se cumplen, el leaf permite cerrar muchos problemas comparando estados sin reconstruir toda la historia temporal de la trayectoria.

## Hipótesis

La primera hipotesis es que la masa [[m]] no cambia de forma apreciable durante el proceso. La segunda es que la energia cinetica traslacional es la magnitud relevante para leer el cambio mecanico. La tercera es que el conjunto de interacciones externas puede resumirse de manera coherente en un saldo global [[Wnet]]. La cuarta es que el problema pregunta por el cambio entre estados, no por la tasa temporal con la que ocurre ese cambio.

Tambien se supone que el sistema no atraviesa una situacion donde deformaciones internas, rotacion dominante o transferencia termica detallada sean la variable central del analisis. Esas contribuciones pueden existir, pero si dominan la lectura del problema entonces el leaf necesita ampliarse con otro modelo. La hipotesis clave es que el balance global entre [[Wnet]] y [[dK]] sigue siendo la descripcion mecanica decisiva.

## Dominio de validez cuantitativo

El modelo suele funcionar muy bien cuando la masa [[m]] permanece esencialmente constante y la diferencia entre estados puede describirse con una rapidez inicial [[vi]] y una final [[vf]] medidas con incertidumbre moderada. Como regla operativa, si la incertidumbre relativa de velocidad es <= 5 por ciento y la masa puede tratarse como estable, el cierre por estados suele ser suficiente para interpretar [[Wnet]] y [[dK]] con buena robustez didactica.

En formato de control simple, puede leerse asi: error_relativo_velocidad <= 0.05 y contribucion_no_traslacional < 0.10 del balance total.

Tambien conviene cuando el problema pide un balance global entre el inicio y el final, sin necesidad de reconstruir tiempos intermedios. Si el objetivo es estimar si el proceso gano o perdio presupuesto cinetico, o comparar escalas de frenado y aceleracion, el leaf trabaja bien. Cuando conviene cambiar de modelo es justo cuando el error de ignorar detalles internos supera el beneficio del cierre global. Una regla util es esta: si una contribucion rotacional, deformacional o termica esperada supera aproximadamente el 10 por ciento del balance total, ya no basta leer solo [[Wnet]] y [[dK]] en clave traslacional.

Dicho de forma operativa, cuando conviene cambiar de modelo es cuando contribucion_rotacional >= 0.10 o contribucion_termica >= 0.10 del balance mecanico estimado.

## Señales de fallo del modelo

Una señal clara de fallo aparece cuando el problema exige explicar lo que ocurre en cada instante y no solo entre el principio y el final. Otra aparece cuando dos sistemas distintos se mezclan sin advertirlo, de modo que [[Ki]] se calcula para un objeto y [[Wnet]] para otro. Tambien falla si la masa [[m]] cambia durante el proceso o si la rotacion almacena una parte importante del presupuesto mecanico y no esta siendo modelada.

Hay una señal practica adicional: el resultado numérico parece limpio, pero la historia fisica no encaja. Si [[vf]] resulta menor que [[vi]] y aun asi el balance arroja [[Wnet]] positiva, o si la escala del cambio es absurda para el sistema real, el problema no esta en la calculadora. El fallo suele estar en las hipotesis, en la definicion del sistema o en haber elegido un modelo demasiado simple para el fenomeno.

## Modelo extendido o alternativo

Cuando el proceso incluye rotacion relevante, puede ser necesario ampliar el modelo para combinar energia cinetica traslacional con energia cinetica de giro. Si hay disipacion interna dominante, deformacion o conversion termica detallada, conviene pasar a un balance de energia mas amplio. Si la pregunta exige fuerza instantanea, potencia o tiempos de evolucion, el modelo alternativo ya no es este leaf aislado, sino una combinacion con dinamica de Newton o con hojas de tasa temporal.

El criterio util no es abandonar el teorema trabajo-energia demasiado pronto, sino saber cuando deja de ser suficiente por si solo. Cuando conviene cambiar de modelo es cuando el balance global ya no distingue la causa fisica dominante que el problema pide interpretar.

## Comparación operativa

Frente a un modelo dinamico detallado, este leaf gana rapidez conceptual: permite pasar de [[vi]] a [[vf]], o de [[Ki]] a [[Kf]], sin resolver toda la trayectoria. Frente a un enfoque puramente descriptivo, gana rigor causal porque obliga a interpretar [[Wnet]] como saldo fisico real. Frente a modelos mas amplios de conservacion de la energia, pierde generalidad, pero gana precision didactica cuando la pregunta central es especificamente el cambio de energia cinetica.

En la practica, la comparacion operativa puede resumirse asi. Si la pregunta central es cuanto cambia el movimiento de un sistema entre dos estados y que trabajo neto explica ese cambio, el modelo ideal del leaf es la mejor puerta de entrada. Si la pregunta central es como cambia el sistema a lo largo del tiempo, o que parte del presupuesto va a otras formas de energia de modo dominante, entonces toca escalar a un modelo alternativo.