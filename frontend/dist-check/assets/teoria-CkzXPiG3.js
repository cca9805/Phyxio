const e=`# Teoría del amortiguamiento crítico

## Contexto conceptual

El amortiguamiento crítico describe la frontera entre dos respuestas de un oscilador disipativo: la respuesta que todavía cruza el equilibrio y oscila, y la respuesta que vuelve sin oscilación pero con lentitud creciente si se amortigua demasiado. No es ausencia de movimiento, sino un transitorio muy concreto. El sistema se mueve, pierde energía y se aproxima al equilibrio con una forma temporal que permite diseñar instrumentos, suspensiones, sensores y mecanismos de cierre.

En este leaf, [[gamma]], [[omega0]], [[tau]], [[x]], [[t]] y [[A]] forman una cadena de lectura. [[gamma]] mide disipación efectiva, [[omega0]] fija la escala natural, [[tau]] traduce esa escala a tiempo observable, [[x]] es la salida que queremos controlar, [[t]] ordena la evolución y [[A]] fija el tamaño inicial de la perturbación. La pregunta física central es decidir cuándo la disipación queda justo en el umbral crítico y qué implica eso para la curva temporal.

## 🟢 Nivel esencial

La idea esencial es que un sistema amortiguado puede fallar por dos extremos. Si tiene poco amortiguamiento, vuelve al equilibrio pero lo cruza y genera rebotes. Si tiene demasiado, evita el rebote pero tarda más de lo necesario en estabilizarse. El amortiguamiento crítico es el punto de referencia que separa esos comportamientos y permite buscar retorno rápido sin oscilación sostenida.

La lectura de una curva crítica no debe limitarse a decir “no oscila”. Debe observarse cómo cae [[x]] con el tiempo, en qué escala se aproxima al equilibrio y si esa escala sirve para el objetivo del sistema. Un cierre de puerta, una aguja de medición o un soporte vibratorio no solo necesitan estabilidad final: necesitan una forma de transitorio adecuada.

También es importante separar régimen y amplitud. Cambiar [[A]] modifica el tamaño de la respuesta, pero no define por sí solo si el sistema es crítico. La clasificación depende de comparar disipación efectiva con escala natural. Por eso una respuesta grande puede ser crítica si conserva la misma forma normalizada, y una respuesta pequeña puede no serlo si muestra oscilación residual o lentitud excesiva.

## 🔵 Nivel formal

La condición que define la frontera crítica compara el amortiguamiento efectivo con la pulsación natural:

{{f:condicion_critica}}

Esta igualdad no es un adorno algebraico. Clasifica el régimen. Si [[gamma]] queda por debajo de [[omega0]], el sistema conserva tendencia oscilatoria; si queda por encima, desaparece la oscilación pero puede aumentar la lentitud. La igualdad define el caso ideal de frontera.

La escala temporal asociada al régimen se expresa mediante:

{{f:tiempo_caracteristico}}

Esta relación convierte la escala natural en un tiempo operativo. Un [[omega0]] grande produce un [[tau]] pequeño y, por tanto, una caída más rápida. Un [[omega0]] pequeño produce un transitorio más largo. Esta lectura permite comparar diseños aunque tengan unidades, masas o rigideces distintas.

La respuesta temporal crítica para una perturbación inicial compatible se representa con:

{{f:solucion_critica}}

La forma formal combina dos rasgos. El factor que depende de [[t]] recoge la pendiente inicial propia del caso crítico; el decaimiento exponencial impone pérdida progresiva de la respuesta. El resultado es una curva de [[x]] que se aproxima al equilibrio sin oscilación sostenida ideal. Antes de usarla, se debe haber verificado la condición de régimen; después de usarla, se debe interpretar si el valor calculado es útil para el tiempo de decisión.

El orden formal recomendado es: clasificar con [[gamma]] y [[omega0]], traducir la escala a [[tau]], y solo después evaluar [[x]] para un [[t]] concreto. Ese orden evita usar una solución crítica cuando el sistema realmente está subamortiguado o sobreamortiguado.

## 🔴 Nivel estructural

Estructuralmente, el amortiguamiento crítico pertenece a los modelos lineales de segundo orden con disipación equivalente. La palabra “equivalente” importa: muchos sistemas reales no tienen un amortiguamiento puramente viscoso, pero pueden aproximarse así en una ventana de amplitudes, velocidades y tiempos. El modelo es útil si esa ventana está justificada.

El régimen crítico se rompe cuando los parámetros cambian durante el transitorio. Si [[gamma]] depende de temperatura, velocidad o desgaste, la igualdad con [[omega0]] puede cumplirse solo al inicio y fallar después. Si [[omega0]] cambia por rigidez no lineal o por masa efectiva variable, la escala [[tau]] deja de representar un reloj estable. En esos casos, la curva de [[x]] puede parecer crítica en una zona y no en otra.

También debe distinguirse respuesta libre y respuesta forzada. Este leaf describe el retorno tras una perturbación o una condición inicial, no una respuesta dominada por una fuerza periódica externa. Si el sistema recibe excitación continua, el gráfico observado puede contener componentes que no proceden del amortiguamiento crítico. Separar esas contribuciones es parte del criterio físico.

## Interpretación física profunda

La potencia del concepto está en convertir una frontera matemática en una decisión física. El caso crítico no maximiza todos los criterios posibles; maximiza una idea concreta: retorno rápido sin rebote ideal. En diseño, esa referencia permite preguntar si conviene aceptar un poco de oscilación para ganar rapidez, o aceptar más lentitud para ganar robustez frente a incertidumbre.

La curva de [[x]] debe leerse como una historia de disipación. Al principio conserva información de [[A]], porque el sistema recuerda la perturbación inicial. Al avanzar [[t]], el decaimiento controlado por [[omega0]] domina y la salida se aproxima al equilibrio. La escala [[tau]] permite convertir esa historia en una expectativa medible.

## Orden de magnitud

Si [[omega0]] está alrededor de 10 rad/s, [[tau]] está alrededor de una décima de segundo. Si [[omega0]] sube a 100 rad/s, [[tau]] cae a centésimas de segundo. Esta relación inversa permite detectar errores de unidades: usar milisegundos como segundos o confundir hertz con radianes por segundo desplaza el tiempo calculado por factores grandes.

Para [[x]], el orden inicial lo fija [[A]]. Una respuesta crítica razonable no debería crecer varios órdenes de magnitud respecto a [[A]] sin forzamiento externo. Si eso ocurre, hay que revisar unidades, signo, ventana temporal o uso incorrecto del modelo. El orden de magnitud no sustituye al cálculo, pero protege contra conclusiones físicamente absurdas.

## Método de resolución personalizado

Primero identifica si el problema pide clasificar régimen, estimar rapidez de asentamiento o calcular una salida temporal. Si pide régimen, compara [[gamma]] y [[omega0]]. Si pide tiempo característico, calcula [[tau]] después de comprobar que [[omega0]] está en unidades coherentes. Si pide [[x]] en un instante, confirma antes que el sistema está en régimen crítico.

Después interpreta. Un número aislado no basta: debe decir si el retorno es rápido o lento respecto al requisito, si la curva evita rebote y si las hipótesis lineales son creíbles. En problemas reales conviene evaluar más de un tiempo, por ejemplo en torno a uno, tres y cinco múltiplos de [[tau]], para ver la evolución completa del transitorio.

## Casos especiales y ejemplo extendido

Un caso especial aparece cuando [[gamma]] está muy cerca de [[omega0]] pero no coincide exactamente. En laboratorio, la igualdad exacta rara vez se observa. Lo importante es decidir si la diferencia es pequeña frente a la tolerancia del problema. Una desviación mínima puede ser irrelevante para un cierre mecánico, pero crítica para un sensor de alta precisión.

Otro caso aparece cuando [[A]] es grande. Aunque la condición entre [[gamma]] y [[omega0]] parezca correcta, una amplitud grande puede activar rozamiento no lineal, topes o cambios de rigidez. Entonces la respuesta de [[x]] deja de ser la del modelo lineal. La lectura correcta no es “el cálculo falla”, sino “el dominio del modelo fue superado”.

## Preguntas reales del alumno

Una pregunta habitual es si crítico significa “sin movimiento”. No: significa retorno no oscilatorio ideal con transitorio activo. Otra pregunta frecuente es si más amortiguamiento siempre es mejor. Tampoco: demasiado amortiguamiento puede volver lenta la respuesta. Una tercera duda es si [[tau]] es un periodo; no lo es, porque el régimen crítico no describe ciclos repetidos.

También suele preguntarse por qué aparece [[A]] en la respuesta pero no en la condición crítica. La razón es que [[A]] fija la escala de la salida, mientras la condición crítica clasifica el sistema. Son niveles distintos: estado inicial frente a estructura dinámica.

## Conexiones transversales y rutas de estudio

Este leaf conecta con subamortiguado y sobreamortiguado porque los tres forman el mapa de regímenes de un oscilador disipativo. También conecta con oscilador masa-muelle, donde se introduce la escala natural, y con sistemas forzados, donde la respuesta ya no depende solo del transitorio libre.

En una ruta de estudio, conviene dominar primero la lectura de [[omega0]] en oscilaciones libres, después comparar el efecto de [[gamma]] en distintos regímenes y finalmente usar el caso crítico como referencia de diseño. Esa ruta evita memorizar fórmulas sin entender qué decisión física representan.

## Síntesis final

El amortiguamiento crítico enseña a leer un transitorio como equilibrio entre rapidez y ausencia de rebote. La competencia entre [[gamma]] y [[omega0]] clasifica el régimen, [[tau]] traduce esa clasificación a escala temporal y [[x]] muestra si la respuesta cumple el objetivo físico.

Dominar este leaf significa poder decidir si un sistema retorna al equilibrio de forma crítica, si el modelo lineal es válido y si el tiempo de respuesta es adecuado para una aplicación real. La síntesis no es repetir ecuaciones, sino usar cada magnitud para justificar una decisión de análisis o diseño.
`;export{e as default};
