const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Se comparan dos sistemas con la misma estructura dinamica. El primero es un carro de 12 kilogramos que recibe una fuerza neta [[F_net]] horizontal de 18 newtons. El segundo es un disco montado sobre eje fijo con momento de inercia [[I]] de 0.60 kilogramo metro cuadrado y torque neto [[tau]] de 0.90 newton metro. Se pide calcular la aceleracion lineal [[a]] del carro y la aceleracion angular [[alpha]] del disco. Despues hay que comparar el estado dinamico alcanzado tras 4 segundos mediante el momento lineal del carro y el momento angular del disco.\r
\r
La consigna no pide solo numeros. Pide justificar por que la ley lineal, la ley rotacional y las dos definiciones de momento ocupan papeles analogos, y por que esa analogia no convierte fuerza y torque en la misma magnitud fisica.\r
\r
## Datos\r
\r
Datos del carro:\r
- masa [[m]] de 12 kilogramos\r
- fuerza neta horizontal de 18 newtons\r
- estado inicial en reposo\r
\r
Datos del disco:\r
- momento de inercia de 0.60 kilogramo metro cuadrado\r
- torque neto de 0.90 newton metro\r
- estado inicial en reposo\r
\r
Dato comun:\r
- tiempo de observacion de 4 segundos\r
\r
## Definicion del sistema\r
\r
El primer sistema es el carro completo, de modo que [[F_net]] represente la suma efectiva de fuerzas externas en la direccion elegida. El segundo sistema es el disco rigido alrededor del eje fijo, de modo que el torque neto [[tau]] represente la causa rotacional efectiva respecto a ese eje. La analogia solo es valida si ambas causas dinamicas han sido construidas correctamente.\r
\r
## Modelo fisico\r
\r
Para la rama lineal se usa la segunda ley traslacional:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
Para la rama rotacional se usa la segunda ley rotacional:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Para leer el estado alcanzado al final del intervalo se usan las definiciones de momento lineal [[p]] y momento angular [[L]]:\r
\r
{{f:momento_lineal}}\r
\r
{{f:momento_angular}}\r
\r
## Justificacion del modelo\r
\r
Los dos sistemas tienen una sola coordenada relevante y arrancan desde reposo. La masa del carro puede tratarse como constante y el momento de inercia del disco ya esta dado respecto al eje correcto. El ejercicio no busca detallar rozamientos ni deformaciones. Busca mostrar como una misma estructura dinamica aparece en lenguaje lineal y en lenguaje rotacional.\r
\r
## Resolucion simbolica\r
\r
Ruta lineal:\r
\r
{{f:momento_lineal}}\r
\r
{{f:segunda_ley_traslacional}}\r
\r
{{f:momento_lineal}}\r
\r
Ruta rotacional:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
{{f:segunda_ley_rotacional}}\r
\r
{{f:momento_angular}}\r
\r
La comparacion importante es estructural. En un lado aparece la razon entre [[F_net]] e inercia lineal [[m]]. En el otro aparece la razon entre torque [[tau]] e inercia rotacional [[I]]. Despues, en cada rama, el momento resume el estado dinamico acumulado.\r
\r
## Sustitucion numerica\r
\r
Con los datos del enunciado, la sustitucion explicita confirma el paralelismo entre causa e inercia en ambas ramas. En la rama lineal, el cociente entre [[F_net]] y [[m]] fija [[a]], y luego ese valor determina [[v]] y [[p]] al final de los 4 s.\r
\r
Para el carro:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
{{f:momento_lineal}}\r
\r
{{f:momento_lineal}}\r
\r
Al evaluar ese bloque se obtiene [[a]] = 1.5 m/s^2, [[v]] = 6 m/s y [[p]] = 72 kg*m/s.\r
\r
Para el disco:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
{{f:momento_angular}}\r
\r
{{f:momento_angular}}\r
\r
En la rama rotacional, la sustitucion da [[alpha]] = 1.5 rad/s^2, [[omega]] = 6 rad/s y [[L]] = 3.6 kg*m^2/s. La igualdad numerica de [[a]] y [[alpha]] aqui es una coincidencia del escenario elegido, no una identidad fisica entre magnitudes.\r
\r
## Validacion dimensional\r
\r
En la rama lineal, la razon entre fuerza neta y masa produce unidades de aceleracion lineal. En la rama rotacional, la razon entre torque y momento de inercia produce unidades de aceleracion angular. Los momentos finales tienen unidades distintas, pero en ambos casos describen estado dinamico acumulado.\r
\r
## Interpretacion fisica\r
\r
El resultado ofrece una coincidencia didactica util: el valor numerico de la aceleracion lineal y el de la aceleracion angular son iguales en este ejemplo. Esa igualdad no dice que traslacion y rotacion sean lo mismo. Solo indica que ambas ramas han sido elegidas con la misma proporcion entre causa neta e inercia.\r
\r
La segunda lectura importante es la del estado dinamico. Tras cuatro segundos, el carro acumula momento lineal y el disco acumula momento angular. Esa comparacion muestra por que el leaf no se agota en la pareja fuerza y torque, sino que necesita tambien la pareja formada por ambos momentos.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
Una linea de produccion coordina dos subsistemas. Un carro lineal mueve cajas en un tramo corto y una mesa giratoria las orienta antes del empaquetado. El equipo tecnico quiere hacer una estimacion rapida para saber si ambos actuadores trabajan con exigencia dinamica comparable. La analogia no sirve aqui para mezclar unidades, sino para comparar estructura fisica.\r
\r
## Estimacion fisica\r
\r
Supongamos que el carro tiene una masa efectiva de 40 kilogramos y dispone de una fuerza neta util de 80 newtons. La mesa giratoria tiene un momento de inercia de 5.0 kilogramo metro cuadrado y un torque neto util de 10 newton metro. No se trata de un diseño definitivo; es una estimacion inicial para decidir si el reparto de actuacion esta bien balanceado.\r
\r
Con esos datos, la aceleracion lineal esperada es:\r
\r
{{f:momento_lineal}}\r
\r
La aceleracion angular esperada es:\r
\r
{{f:momento_angular}}\r
\r
El primer diagnostico es claro. Ambas ramas trabajan con una razon entre causa e inercia del mismo orden. Eso sugiere que, durante el arranque, ninguno de los dos subsistemas esta claramente sobredimensionado o claramente subalimentado respecto al otro.\r
\r
Si ambos operan durante 3 segundos desde reposo, las velocidades esperadas son:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Y los estados dinamicos acumulados quedan:\r
\r
{{f:momento_lineal}}\r
\r
{{f:momento_angular}}\r
\r
## Interpretacion\r
\r
La lectura correcta no consiste en preguntar si ochenta newtons son mas o menos que diez newton metro. Esa comparacion carece de sentido directo. La lectura correcta es comparar la respuesta esperada en cada coordenada y el estado que cada actuador deja acumulado al final del intervalo util.\r
\r
Eso tiene valor practico inmediato. Si la mesa giratoria pareciera lenta, el equipo no deberia concluir automaticamente que falta "fuerza". Deberia revisar si el torque disponible es bajo para la inercia rotacional que realmente tiene la mesa. Del mismo modo, si el carro responde peor de lo esperado, la pregunta relevante no es cuanto vale el torque del otro subsistema, sino si la fuerza neta del carro es suficiente para su masa efectiva.\r
\r
Esta estimacion tambien sirve para planificar frenado y control. Un subsistema puede no acelerar demasiado y, sin embargo, almacenar bastante estado dinamico al final del movimiento. En la mesa eso aparece como momento angular; en el carro, como momento lineal. La analogia permite recordar que ambos estados importan cuando se quiere detener, sincronizar o corregir una trayectoria.\r
\r
La conclusion operativa es que este leaf transfiere criterio, no unidades. Sirve para preguntar si la proporcion entre causa e inercia es razonable en cada rama, si el estado acumulado sera facil de disipar y si una diferencia de comportamiento proviene de la ley dinamica o de una mala construccion del modelo.`;export{a as default};
