## Errores conceptuales


### Error 1: Creer que la polarizacion filtra colores

**Por que parece correcto**
El alumno observa que las gafas de sol oscurecen la imagen y lo asocia con el filtrado de longitudes de onda, igual que un filtro de color. La analogia con filtros de color refuerza la creencia porque ambos reducen la intensidad visible.

**Por que es incorrecto**
Un polarizador actua sobre la **orientacion del campo electrico**, no sobre la longitud de onda. Todas las frecuencias del espectro visible se atenuan por igual segun la ley de Malus, siempre que el filtro sea acromatico. La reduccion de brillo no implica seleccion cromatica.

**Senal de deteccion**
El alumno afirma que cambiar el angulo del polarizador cambia el color de la luz transmitida, o que los polarizadores solo dejan pasar "ciertos colores".

**Correccion conceptual**
La polarizacion controla la **direccion de oscilacion** del campo electrico, no su frecuencia. La intensidad varia con [[theta_p]] segun el coseno cuadrado, de forma independiente del color.

**Mini-ejemplo de contraste**
Iluminar un polarizador con luz blanca y girar el analizador: el color no cambia, solo la luminosidad. Si fuera un filtro de color, distintos angulos mostrarian distintos tonos.


### Error 2: Suponer que un polarizador siempre bloquea exactamente la mitad de la luz

**Por que parece correcto**
El alumno aprende que la luz natural tiene campo electrico en todas las direcciones y deduce que proyectar sobre un eje elimina la mitad "de golpe" en cualquier circunstancia.

**Por que es incorrecto**
La regla del 50 por ciento solo aplica cuando la luz incidente es completamente **no polarizada**. Si la luz ya esta parcialmente polarizada, la fraccion transmitida depende de su grado de polarizacion y del angulo relativo.

**Senal de deteccion**
El alumno aplica el factor un medio antes de cada polarizador en una cadena, incluso cuando la luz ya esta polarizada por el polarizador anterior.

**Correccion conceptual**
El primer polarizador reduce la intensidad a la mitad **solo** si la fuente es natural. A partir de ahi, cada etapa se rige por la ley de Malus con [[intensidad_incidente]] igual a la intensidad de salida de la etapa previa.

**Mini-ejemplo de contraste**
Si la luz ya esta linealmente polarizada y alineada con el analizador, el analizador transmite el total; aplicar el factor un medio daria la mitad de la intensidad real, un error del 100 por ciento.

## Errores de modelo


### Error 3: Aplicar la ley de Brewster a metales

**Por que parece correcto**
El alumno generaliza la ley de Brewster a cualquier superficie reflectante, porque en clase se presenta como "el angulo al que la reflexion se polariza".

**Por que es incorrecto**
La ley de Brewster supone medios dielectricos sin absorcion. En un metal el indice de refraccion tiene una parte imaginaria grande, las ecuaciones de Fresnel generan reflectancias distintas de cero para ambas componentes y la luz reflejada **nunca** queda completamente polarizada.

**Senal de deteccion**
El alumno calcula un angulo de Brewster para aluminio, cobre o acero y obtiene un valor numerico sin advertir que la prediccion es incorrecta.

**Correccion conceptual**
La ley de Brewster solo se aplica entre medios **transparentes** (parte imaginaria del indice inferior a 0.01). Para metales se deben usar las ecuaciones de Fresnel completas con indice complejo.

**Mini-ejemplo de contraste**
Calcular el "angulo de Brewster" para aluminio ([[n_2]] cercano a 1.4 con parte imaginaria cercana a 7.6) da un angulo que, al medirse experimentalmente, muestra reflexion parcialmente polarizada en todos los angulos, nunca nula en la componente paralela.

## Errores matemáticos


### Error 4: Usar coseno en lugar de coseno cuadrado en la ley de Malus

**Por que parece correcto**
El alumno recuerda que la proyeccion del campo electrico usa el coseno y no diferencia entre proyectar la amplitud y calcular la intensidad, que depende del cuadrado de la amplitud.

**Por que es incorrecto**
La [[intensidad_transmitida]] es proporcional al cuadrado de la amplitud del campo. Proyectar el campo da un factor coseno, pero al elevar al cuadrado aparece el coseno cuadrado. Usar solo el coseno sobrestima la intensidad transmitida en los angulos intermedios.

**Senal de deteccion**
A 60 grados el alumno obtiene una intensidad de la mitad de [[intensidad_incidente]] (coseno de 60 grados igual a 0.5) cuando el valor correcto es un cuarto de [[intensidad_incidente]] (coseno cuadrado de 60 grados igual a 0.25).

**Correccion conceptual**
La ley de Malus establece que [[intensidad_transmitida]] es igual a [[intensidad_incidente]] multiplicado por el coseno cuadrado de [[theta_p]]. El exponente dos no es opcional: refleja que la intensidad es cuadratica en la amplitud del campo.

**Mini-ejemplo de contraste**
A 60 grados, con coseno da 0.5 veces [[intensidad_incidente]]; con coseno cuadrado da 0.25 veces [[intensidad_incidente]]. La diferencia es del doble, facilmente detectable al comparar con la medida experimental.

## Errores de interpretación


### Error 5: Confundir el angulo de Brewster con el angulo critico

**Por que parece correcto**
Ambos angulos dependen de los indices de refraccion y ambos producen efectos singulares en la interfase. El alumno asocia ambos como "angulos especiales" sin distinguir el fenomeno subyacente.

**Por que es incorrecto**
El angulo de Brewster es el angulo al que la reflexion se polariza completamente; existe para cualquier par de medios (tanto cuando la luz va de menor a mayor indice como al reves). El angulo critico es el angulo a partir del cual la refraccion desaparece (reflexion total interna) y solo existe cuando la luz viaja del medio mas denso al menos denso.

**Senal de deteccion**
El alumno afirma que por encima del angulo de Brewster se produce reflexion total interna, o intenta calcular un angulo critico para la transicion aire-vidrio (donde la reflexion total no existe).

**Correccion conceptual**
El angulo de Brewster se refiere a la **polarizacion** de la luz reflejada. El angulo critico se refiere a la **desaparicion** de la refraccion. Son fenomenos independientes que coinciden en depender de los indices, pero tienen condiciones de existencia y significados fisicos distintos.

**Mini-ejemplo de contraste**
Para aire-vidrio ([[n_1]] menor que [[n_2]]), el angulo de Brewster existe (aproximadamente 56 grados) pero el angulo critico no existe porque la luz va del medio menos denso al mas denso. Si fueran el mismo fenomeno, ambos deberian existir simultaneamente.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado de polarizacion, verificar tres puntos clave:

1. **[[intensidad_transmitida]] no supera [[intensidad_incidente]]**: si la intensidad transmitida supera la incidente, hay un error de datos o de formula.
2. **Polarizadores cruzados dan [[intensidad_transmitida]] nula**: si el angulo es 90 grados y la intensidad no se anula, revisar si se uso coseno en lugar de coseno cuadrado o si la fuente no es completamente polarizada.
3. **[[angulo_de_brewster]] esta en rango razonable**: para interfases comunes (aire-vidrio, aire-agua), el angulo de Brewster cae entre 50 y 60 grados. Un valor fuera de 40 a 70 grados debe revisarse.