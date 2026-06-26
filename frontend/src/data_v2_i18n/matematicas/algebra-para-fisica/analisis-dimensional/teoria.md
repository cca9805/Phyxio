# Analisis dimensional

## Que es

El analisis dimensional estudia que tipo fisico tiene cada cantidad, no solo que unidad se ha escrito. En fisica se usa para leer una relacion antes de sustituir numeros. La pregunta central no es solo cuanto vale una cantidad, sino que cambia cuando se modifica una condicion del problema.

Esta herramienta convierte una expresion en criterio. Permite anticipar si un resultado debe crecer, disminuir, mantenerse o cambiar por factor. Asi el alumno puede detectar respuestas imposibles incluso antes de terminar el calculo.

## Por que aparece en fisica

Aparece porque las leyes fisicas relacionan magnitudes, no numeros aislados. Una fuerza depende de masa y aceleracion, una energia depende de posicion o velocidad, una presion depende de fuerza y area, y una senal puede crecer o decaer con el tiempo.

Tambien aparece en laboratorio, donde muchas decisiones consisten en comprobar si una variacion observada es compatible con el modelo. La herramienta ayuda a separar la estructura matematica del ruido numerico.

## Idea visual o geometrica

La idea visual es esta: imagina cada magnitud como una etiqueta de naturaleza: longitud, masa, tiempo, corriente o combinaciones que no se pueden sumar si son distintas. Esa imagen evita tratar todas las formulas como listas de simbolos equivalentes.

Cuando una grafica, una tabla o una formula muestran esa respuesta al cambio, la forma matematica ya esta dando informacion fisica. La pendiente, la curvatura, el cociente o el factor multiplicativo indican como se comporta el sistema.

## Lenguaje simbolico minimo

En simbolos, una velocidad tiene dimension L/T, una fuerza M L/T^2 y una energia M L^2/T^2; una igualdad solo puede ser valida si ambos lados tienen la misma dimension. Lo importante es leer la operacion como relacion entre magnitudes y no como decoracion algebraica.

Antes de operar debes identificar variable independiente, variable dependiente, constantes y dominio. Si una constante cambia de experimento a experimento, ya no puede tratarse como fija.

## Que significa el resultado

El resultado significa una prediccion controlada: cuanto cambia una magnitud, que unidad conserva, que signo tiene sentido y que escala fisica representa. No basta con obtener un numero; hay que decir que mide.

Si el resultado contradice la dependencia esperada, hay que revisar el modelo, las unidades o el despeje. En fisica, un calculo correcto aritmeticamente puede ser falso si destruye el significado de las variables.

## Cuando no debes usarlo

No debes usar esta herramienta cuando el fenomeno no cumple las condiciones del modelo que estas leyendo. Tampoco debes extrapolar una relacion fuera del intervalo donde fue medida o deducida.

No reemplaza el razonamiento fisico. Sirve para controlar y aplicar una relacion, pero primero hay que saber si esa relacion describe el sistema real con suficiente aproximacion.

## Resumen operativo

Identifica la relacion, decide que cambia y que permanece fijo, conserva unidades y signos, calcula solo despues de entender la dependencia y lee el resultado como afirmacion fisica. Si no puedes decir que significa el numero, todavia no has terminado.

<!-- algebra-depth-v2 -->
## Capa de profundidad: analisis dimensional

Este leaf no debe funcionar como una lista corta de reglas, sino como una herramienta para pensar problemas fisicos. El objetivo es comprobar si una expresion puede representar la magnitud que afirma representar. Un alumno basico necesita reconocer la magnitud buscada y la unidad esperada; un alumno intermedio debe justificar la operacion elegida; un alumno avanzado debe anticipar limites, dependencias y casos donde el modelo deja de servir.

Una formula dimensionalmente imposible esta mal; una formula dimensionalmente posible aun necesita modelo fisico.

| Magnitud | Dimension | Lectura |
|---|---|---|
| velocidad | `L T^-1` | longitud por tiempo |
| aceleracion | `L T^-2` | cambio de velocidad por tiempo |
| fuerza | `M L T^-2` | masa por aceleracion |
| energia | `M L^2 T^-2` | fuerza por distancia |
| presion | `M L^-1 T^-2` | fuerza por area |

La prueba de comprension es comparar. Si una entrada se multiplica por `2`, por `10` o por `1/2`, el alumno debe poder decir que ocurre con la salida antes de usar la calculadora. Esa prediccion convierte el algebra en control fisico del resultado.

