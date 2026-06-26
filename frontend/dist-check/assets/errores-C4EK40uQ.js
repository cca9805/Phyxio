const e=`# Errores comunes en la analogia traslacional\r
\r
## Errores conceptuales\r
\r
### Error 1. Creer que la analogia significa identidad\r
#### Por que parece correcto\r
Porque las ecuaciones tienen la misma forma estructural y eso invita a intercambiar palabras sin pensar.\r
#### Por que es incorrecto\r
La fuerza neta y el torque ocupan papeles analogos, pero no son la misma magnitud fisica. Lo mismo ocurre con la masa y el momento de inercia.\r
#### Señal de deteccion\r
El alumno compara newtons con newton metro como si fueran cantidades directamente equivalentes.\r
#### Correccion conceptual\r
Insistir en que la analogia conserva estructura, no unidades ni geometria.\r
#### Mini-ejemplo\r
Un torque pequeño puede producir gran respuesta angular si la inercia rotacional es pequeña, pero eso no autoriza a decir que vale lo mismo que una fuerza pequeña.\r
\r
### Error 2. Traducir simbolos sin traducir el papel fisico\r
#### Por que parece correcto\r
Porque reemplazar letras parece una forma rapida de pasar de un problema lineal a uno rotacional.\r
#### Por que es incorrecto\r
La analogia solo funciona si cada magnitud conserva su funcion: causa neta, resistencia inercial o estado dinamico.\r
#### Señal de deteccion\r
Se usa el momento angular como si fuera torque o el momento lineal como si fuera fuerza.\r
#### Correccion conceptual\r
Separar siempre ley dinamica de definicion de estado.\r
#### Mini-ejemplo\r
La ley rotacional describe cambio del movimiento. La definicion de momento angular describe estado acumulado del movimiento.\r
\r
## Errores de modelo\r
\r
### Error 3. Olvidar que el eje importa en rotacion\r
#### Por que parece correcto\r
Porque en traslacion la masa no obliga a pensar en ejes de giro.\r
#### Por que es incorrecto\r
El momento de inercia depende del eje, y sin eje bien definido la analogia con la masa se rompe.\r
#### Señal de deteccion\r
Aparece un valor de inercia tomado de memoria sin especificar respecto a que eje se usa.\r
#### Correccion conceptual\r
Declarar el eje antes de usar la rama rotacional del mapa analogico.\r
#### Mini-ejemplo\r
Una barra no tiene la misma inercia respecto al centro que respecto a un extremo, aunque la masa sea la misma.\r
\r
### Error 4. Construir el torque como si fuera solo una fuerza\r
#### Por que parece correcto\r
Porque el estudiante ve una fuerza y quiere trasladarla de inmediato al lado rotacional.\r
#### Por que es incorrecto\r
El torque requiere brazo de palanca, sentido de giro y referencia axial.\r
#### Señal de deteccion\r
Se usa la fuerza aplicada sin geometria asociada.\r
#### Correccion conceptual\r
Recordar que la analogia entre fuerza neta y torque solo vale despues de construir correctamente el torque neto.\r
#### Mini-ejemplo\r
Dos fuerzas iguales aplicadas a radios distintos producen torques distintos.\r
\r
## Errores matematicos\r
\r
### Error 5. Suponer que igual estructura implica igual unidad\r
#### Por que parece correcto\r
Porque ambas expresiones tienen forma de causa dividida por inercia.\r
#### Por que es incorrecto\r
La respuesta lineal y la respuesta angular tienen unidades distintas.\r
#### Señal de deteccion\r
Se intenta sumar aceleracion lineal y aceleracion angular o compararlas como si fueran la misma magnitud.\r
#### Correccion conceptual\r
Usar la analogia para entender dependencia funcional, no para fusionar dimensiones distintas.\r
#### Mini-ejemplo\r
Que dos respuestas tengan el mismo valor numerico no significa que describan el mismo fenomeno.\r
\r
### Error 6. Mezclar ley dinamica con estado dinamico\r
#### Por que parece correcto\r
Porque las cuatro formulas del leaf aparecen juntas y el alumno cree que todas responden la misma pregunta.\r
#### Por que es incorrecto\r
Una cosa es calcular cambio instantaneo y otra distinta describir estado acumulado.\r
#### Señal de deteccion\r
Se usa una magnitud de estado para justificar directamente una aceleracion sin pasar por la ley correspondiente.\r
#### Correccion conceptual\r
Preguntar siempre si la incognita es una respuesta instantanea o un estado acumulado.\r
#### Mini-ejemplo\r
Un sistema puede tener mucho momento angular y, sin embargo, una respuesta angular pequeña si la causa neta disponible tambien es pequeña.\r
\r
## Errores de interpretacion\r
\r
### Error 7. Pensar que la analogia resuelve el problema por si sola\r
#### Por que parece correcto\r
Porque el paralelismo ofrece una guia rapida y comoda.\r
#### Por que es incorrecto\r
La analogia orienta, pero el calculo real sigue dependiendo de geometria, eje y construccion correcta de magnitudes.\r
#### Señal de deteccion\r
El alumno traduce el problema sin revisar el montaje fisico del torque.\r
#### Correccion conceptual\r
Usar la analogia como mapa inicial y no como sustituto del modelado.\r
#### Mini-ejemplo\r
Saber que masa e inercia ocupan papeles analogos no evita tener que calcular la inercia del cuerpo real.\r
\r
### Error 8. Borrar las diferencias entre traslacion y rotacion\r
#### Por que parece correcto\r
Porque una buena analogia produce sensacion de unidad.\r
#### Por que es incorrecto\r
La unidad estructural del modelo no elimina la dependencia del eje ni la construccion espacial del torque.\r
#### Señal de deteccion\r
La explicacion final no menciona eje, brazo o sentido de giro en ningun momento.\r
#### Correccion conceptual\r
Cerrar siempre la resolucion explicando que parte del razonamiento fue transferible y que parte siguio siendo especifica de la rotacion.\r
#### Mini-ejemplo\r
Dos problemas pueden compartir estructura dinamica y aun asi exigir geometria fisica muy distinta.\r
\r
## Regla de autocontrol rápido\r
\r
### Error de cierre apresurado\r
#### Por que parece correcto\r
Porque una analogia bien elegida da sensacion de haber entendido todo el problema.\r
#### Por que es incorrecto\r
Todavia falta comprobar si el eje, la geometria y la magnitud de estado fueron tratados de manera coherente.\r
#### Señal de deteccion\r
La resolucion termina con una comparacion verbal bonita, pero sin revisar que causa, inercia y estado correspondan al mismo sistema.\r
#### Correccion conceptual\r
Antes de cerrar, comprobar siempre tres cosas: que la causa neta este bien construida, que la inercia pertenezca al sistema correcto y que el estado final no se haya confundido con la ley de cambio.\r
#### Mini-ejemplo\r
Si el torque esta bien calculado pero la inercia corresponde a otro eje, la analogia parece limpia y aun asi la solucion fisica esta mal.`;export{e as default};
