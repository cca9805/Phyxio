## Errores conceptuales

### Error 1: creer que sobreamortiguado significa respuesta óptima

#### Por qué parece correcto
Como el sistema no rebota, parece que aumentar [[gamma]] siempre mejora el comportamiento.
#### Por qué es incorrecto
El exceso de amortiguamiento puede acercar [[r1]] a cero y producir una cola lenta en [[x]].
#### Señal de detección
La curva no oscila, pero tarda demasiado en entrar en la tolerancia pedida.
#### Corrección conceptual
Separar ausencia de oscilación y rapidez. El objetivo físico decide si el régimen es útil.
#### Mini-ejemplo
Un cierre no golpea la puerta, pero tarda ocho segundos en cerrar el último tramo.

### Error 2: interpretar [[r1]] y [[r2]] como frecuencias

#### Por qué parece correcto
Las raíces tienen unidades de tiempo inverso, como una frecuencia angular.
#### Por qué es incorrecto
En este régimen son reales y describen decaimiento, no ciclos.
#### Señal de detección
El alumno intenta calcular un periodo a partir de [[r1]].
#### Corrección conceptual
Leer [[r1]] y [[r2]] como tasas exponenciales negativas.
#### Mini-ejemplo
Si [[r1]] = -2 s^-1, no hay periodo de 0,5 s; hay un decaimiento característico.

## Errores de modelo

### Error 3: aplicar el leaf sin comprobar [[gamma]] > [[omega0]]

#### Por qué parece correcto
La solución parece una fórmula general para cualquier amortiguamiento.
#### Por qué es incorrecto
Solo corresponde al caso con dos raíces reales negativas.
#### Señal de detección
Aparece una raíz cuadrada de cantidad negativa o una curva oscilatoria.
#### Corrección conceptual
Clasificar siempre el régimen antes de calcular [[x]].
#### Mini-ejemplo
Con [[gamma]] = 8 s^-1 y [[omega0]] = 10 s^-1, usar este leaf sería un cambio de modelo.

### Error 4: ignorar rozamiento no lineal

#### Por qué parece correcto
Muchos rozamientos reducen movimiento y parecen equivalentes.
#### Por qué es incorrecto
Rozamiento seco, topes o disipación variable no producen necesariamente dos exponenciales.
#### Señal de detección
La curva se atasca, tiene tramos rectos o cambia de forma al repetir el ensayo.
#### Corrección conceptual
Usar el modelo viscoso solo en una ventana donde los parámetros sean constantes.
#### Mini-ejemplo
Un mecanismo con fricción estática se queda parado antes de seguir la cola exponencial.

## Errores matemáticos

### Error 5: cambiar el signo de la raíz rápida

#### Por qué parece correcto
Las dos raíces se parecen y es fácil intercambiar el signo delante de la raíz cuadrada.
#### Por qué es incorrecto
El signo decide cuál modo desaparece rápido y cuál domina la cola.
#### Señal de detección
No se cumple [[r2]] < [[r1]] < 0.
#### Corrección conceptual
Comprobar signos y orden antes de sustituir en la solución.
#### Mini-ejemplo
Si [[r2]] sale menos negativa que [[r1]], se han intercambiado los modos.

### Error 6: olvidar que el exponente debe ser adimensional

#### Por qué parece correcto
La calculadora acepta cualquier número en la exponencial.
#### Por qué es incorrecto
Físicamente, [[r1]][[t]] y [[r2]][[t]] no pueden conservar unidades.
#### Señal de detección
El resultado cambia por factores grandes al convertir milisegundos a segundos.
#### Corrección conceptual
Unificar unidades antes de evaluar exponenciales.
#### Mini-ejemplo
Usar 400 ms como 400 s hace desaparecer artificialmente toda la respuesta.

## Errores de interpretación

### Error 7: mirar solo el inicio de la curva

#### Por qué parece correcto
El primer tramo suele mostrar una caída clara y parece resolver el problema.
#### Por qué es incorrecto
El tramo final puede estar dominado por [[r1]] y ser mucho más lento.
#### Señal de detección
El valor de [[x]] sigue fuera de tolerancia cuando el modo rápido ya desapareció.
#### Corrección conceptual
Evaluar varios tiempos y leer la cola, no solo la pendiente inicial.
#### Mini-ejemplo
Un sensor cae rápido de 4 mm a 1 mm, pero tarda demasiado en bajar de 0,1 mm.

## Regla de autocontrol rápido

Antes de aceptar una respuesta, comprueba cinco puntos: [[gamma]] > [[omega0]], [[r1]] y [[r2]] son negativos, [[r2]] es más negativa que [[r1]], [[C1]] y [[C2]] tienen la unidad de [[x]], y la curva no muestra oscilación sostenida.
