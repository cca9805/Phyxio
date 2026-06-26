const e=`# Cifras significativas e incertidumbre\r
\r
## Que es\r
\r
Las cifras significativas indican cuanta informacion fiable contiene un numero medido. En fisica se usa para leer una relacion antes de sustituir numeros. La pregunta central no es solo cuanto vale una cantidad, sino que cambia cuando se modifica una condicion del problema.\r
\r
Esta herramienta convierte una expresion en criterio. Permite anticipar si un resultado debe crecer, disminuir, mantenerse o cambiar por factor. Asi el alumno puede detectar respuestas imposibles incluso antes de terminar el calculo.\r
\r
## Por que aparece en fisica\r
\r
Aparece porque las leyes fisicas relacionan magnitudes, no numeros aislados. Una fuerza depende de masa y aceleracion, una energia depende de posicion o velocidad, una presion depende de fuerza y area, y una senal puede crecer o decaer con el tiempo.\r
\r
Tambien aparece en laboratorio, donde muchas decisiones consisten en comprobar si una variacion observada es compatible con el modelo. La herramienta ayuda a separar la estructura matematica del ruido numerico.\r
\r
## Idea visual o geometrica\r
\r
La idea visual es esta: imagina una regla: no tiene sentido dar diez decimales si la marca mas pequena solo permite leer milimetros. Esa imagen evita tratar todas las formulas como listas de simbolos equivalentes.\r
\r
Cuando una grafica, una tabla o una formula muestran esa respuesta al cambio, la forma matematica ya esta dando informacion fisica. La pendiente, la curvatura, el cociente o el factor multiplicativo indican como se comporta el sistema.\r
\r
## Lenguaje simbolico minimo\r
\r
En simbolos, un resultado se expresa como valor mas incertidumbre; si x = 2.40 m con incertidumbre 0.05 m, no se debe escribir como si fuera exacto. Lo importante es leer la operacion como relacion entre magnitudes y no como decoracion algebraica.\r
\r
Antes de operar debes identificar variable independiente, variable dependiente, constantes y dominio. Si una constante cambia de experimento a experimento, ya no puede tratarse como fija.\r
\r
## Que significa el resultado\r
\r
El resultado significa una prediccion controlada: cuanto cambia una magnitud, que unidad conserva, que signo tiene sentido y que escala fisica representa. No basta con obtener un numero; hay que decir que mide.\r
\r
Si el resultado contradice la dependencia esperada, hay que revisar el modelo, las unidades o el despeje. En fisica, un calculo correcto aritmeticamente puede ser falso si destruye el significado de las variables.\r
\r
## Cuando no debes usarlo\r
\r
No debes usar esta herramienta cuando el fenomeno no cumple las condiciones del modelo que estas leyendo. Tampoco debes extrapolar una relacion fuera del intervalo donde fue medida o deducida.\r
\r
No reemplaza el razonamiento fisico. Sirve para controlar y aplicar una relacion, pero primero hay que saber si esa relacion describe el sistema real con suficiente aproximacion.\r
\r
## Resumen operativo\r
\r
Identifica la relacion, decide que cambia y que permanece fijo, conserva unidades y signos, calcula solo despues de entender la dependencia y lee el resultado como afirmacion fisica. Si no puedes decir que significa el numero, todavia no has terminado.\r
\r
<!-- algebra-depth-v2 -->\r
## Capa de profundidad: cifras significativas e incertidumbre\r
\r
Este leaf no debe funcionar como una lista corta de reglas, sino como una herramienta para pensar problemas fisicos. El objetivo es no prometer mas precision que la que permiten las medidas. Un alumno basico necesita reconocer la magnitud buscada y la unidad esperada; un alumno intermedio debe justificar la operacion elegida; un alumno avanzado debe anticipar limites, dependencias y casos donde el modelo deja de servir.\r
\r
Precision, exactitud e incertidumbre no son sinonimos: un numero con muchos decimales puede ser poco fiable.\r
\r
| Operacion | Criterio practico |\r
|---|---|\r
| suma/resta | manda la posicion decimal menos precisa |\r
| producto/cociente | mandan las cifras significativas relativas |\r
| potencia | la incertidumbre relativa se multiplica por el exponente |\r
| promedio | se informa valor central y dispersion |\r
\r
La prueba de comprension es comparar. Si una entrada se multiplica por \`2\`, por \`10\` o por \`1/2\`, el alumno debe poder decir que ocurre con la salida antes de usar la calculadora. Esa prediccion convierte el algebra en control fisico del resultado.\r
\r
`;export{e as default};
