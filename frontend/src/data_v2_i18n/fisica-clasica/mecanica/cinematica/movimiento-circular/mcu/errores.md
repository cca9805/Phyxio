## Errores conceptuales

### Error 1: Confundir rapidez constante con aceleración nula

**Por qué parece correcto**
El alumno asocia erróneamente la aceleración únicamente con el cambio en el "valor numérico" de la velocidad (la rapidez). Como en el MCU la [[v]] no cambia, la intuición lineal heredada del MRU sugiere que no debería haber aceleración.

**Por qué es incorrecto**
La aceleración es una magnitud vectorial que mide el cambio del vector velocidad. En el MCU, aunque el módulo se mantiene, la dirección cambia constantemente. Este cambio de dirección es, por definición, una aceleración (centrípeta).

**Señal de detección**
Si el alumno dibuja un diagrama de fuerzas sin ninguna fuerza neta hacia el centro, o si afirma que la partícula se movería en círculo de forma espontánea por "inercia circular".

**Corrección conceptual**
Todo cambio en el vector velocidad (ya sea en módulo, dirección o sentido) implica la existencia de una aceleración. En curvas, la aceleración es innegociable.

**Mini-ejemplo de contraste**
Imagina una piedra atada a una cuerda. Si la aceleración fuera nula, la fuerza neta sería cero y la cuerda no tendría tensión, según establece la segunda ley de Newton:

{{f:segunda_ley_newton}}

Sin embargo, al soltar la cuerda, la piedra sale recta, lo que demuestra que antes había algo (aceleración/fuerza) obligándola a girar.

## Errores de modelo

### Error 2: Suponer que la aceleración centrípeta es una fuerza externa más

**Por qué parece correcto**
En muchos problemas, el alumno trata la "fuerza centrípeta" como si fuera una interacción física adicional (como la gravedad o el rozamiento) que debe añadirse al sumatorio de fuerzas.

**Por qué es incorrecto**
La "fuerza centrípeta" no es una fuerza nueva, sino el rol que desempeña la fuerza neta en un movimiento curvo. Es el nombre que le damos a la componente de la fuerza total que apunta al centro.

**Señal de detección**
Presencia de una etiqueta Fc o [[ac]] en un Diagrama de Cuerpo Libre (DCL) como si fuera una flecha independiente de las interacciones reales.

**Corrección conceptual**
La aceleración centrípeta es el resultado cinemático de las fuerzas reales (tensión, normal, peso). No se suma a ellas, sino que es igual a su resultante radial.

**Mini-ejemplo de contraste**
En un coche tomando una curva, la fuerza de rozamiento es la fuerza centrípeta. Si las sumaras como dos fuerzas distintas, estarías duplicando la realidad física y prediciendo una aceleración el doble de grande de la real.

## Errores matemáticos

### Error 3: Mezclar radianes con grados en el cálculo de la rapidez lineal

**Por qué parece correcto**
Los alumnos están acostumbrados a medir ángulos en grados sexagesimales (360°). Al calcular la velocidad, multiplican directamente los grados por el radio porque "el ángulo es el ángulo".

**Por qué es incorrecto**
La fórmula lineal se deriva de la definición geométrica de radián (arco/radio). Si se usan grados, el resultado estará desfasado por un factor de pi / 180, lo que dará un valor físicamente erróneo.

**Señal de detección**
Resultados de velocidad lineal extremadamente grandes (por ejemplo, 180 m/s para un giro lento) o dimensiones que no cancelan correctamente.

**Corrección conceptual**
Para cualquier cálculo que vincule magnitudes angulares con magnitudes lineales (metros), el [[theta]] debe estar obligatoriamente en radianes.

**Mini-ejemplo de contraste**
Si un objeto gira 1° en un círculo de 1 m, el [[s]] recorrido es apenas 1.7 cm. Si usaras la fórmula con grados (1 * 1), ¡obtendrías un arco de 1 metro! Una discrepancia de casi 60 veces.

## Errores de interpretación

### Error 4: Creer que la aceleración centrípeta apunta hacia afuera

**Por qué parece correcto**
Debido a la sensación de "tirón" hacia afuera que experimentamos en un coche o una atracción de feria, el alumno interpreta que la aceleración del objeto es hacia el exterior del círculo (confusión con la fuerza centrífuga).

**Por qué es incorrecto**
La sensación hacia afuera es un efecto de la inercia del observador (fuerza ficticia). Desde un punto de vista inercial (fijo fuera del sistema), la partícula está siendo "empujada" hacia adentro para evitar que escape por la tangente.

**Señal de detección**
Vectores de aceleración dibujados hacia afuera del círculo o uso de signos negativos incorrectos en la segunda ley de Newton.

**Corrección conceptual**
La [[ac]] siempre, sin excepción, apunta hacia el centro de rotación. Es una aceleración "buscadora de centro".

**Mini-ejemplo de contraste**
Si la aceleración fuera hacia afuera, al cortar la cuerda de una honda, la piedra debería salir disparada radialmente lejos del lanzador. Sin embargo, sale tangencialmente, demostrando que antes la [[ac]] la mantenía "sujeta" hacia el centro.

## Regla de autocontrol rápido

Para verificar si tu análisis del MCU es coherente, aplica la **Prueba de la Tangente**: imagina que en este preciso instante desaparecen todas las fuerzas. Si tu modelo predice que el objeto sigue moviéndose en círculo o que sale volando hacia afuera, tu modelo está mal. En un MCU correcto, al desaparecer las fuerzas, el objeto debe moverse en **línea recta tangente** con la misma rapidez que tenía.
