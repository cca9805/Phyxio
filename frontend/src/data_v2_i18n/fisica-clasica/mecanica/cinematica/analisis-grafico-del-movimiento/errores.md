# Errores

## Errores conceptuales

### Error 1: Confundir la altura del gráfico v-t con la posición del móvil

**Por qué parece correcto**
El alumno asocia "estar arriba en el gráfico" con "estar lejos", por analogía visual directa: si el punto sube, el objeto avanza. Esta generalización funciona en el gráfico \(x\)-\(t\), pero se traslada por error al gráfico \(v\)-\(t\).

**Por qué es incorrecto**
La ordenada del gráfico \(v\)-\(t\) indica la [[velocidad]] en ese instante, no dónde está el objeto. La posición es el **área acumulada** bajo la curva, no la altura del punto.

**Señal de detección**
El alumno dice "está en 5 metros" señalando un punto en la coordenada de [[velocidad]] igual a 5 m/s del gráfico [[velocidad]] - [[tiempo]] .

**Corrección conceptual**
Leer la ordenada como "¿a qué [[velocidad]] va?" y reservar el cálculo de posición para el área bajo la curva \(v\)-\(t\).

**Mini-ejemplo de contraste**
Un gráfico [[velocidad]] - [[tiempo]] muestra [[velocidad]] constante de 10 m/s durante 3 s. El alumno dice "está a 10 m". Resultado correcto: la posición cambia en 10 × 3 = 30 m, no 10 m.

### Error 2: Creer que una recta horizontal en v-t implica objeto parado

**Por qué parece correcto**
"Horizontal = no cambia = no se mueve" es una regla intuitiva que funciona en la vida cotidiana (un ascensor que para queda horizontal en el display).

**Por qué es incorrecto**
Horizontal significa [[velocidad]] constante, no [[velocidad]] cero. Solo si la recta coincide con el eje \(t\) la [[velocidad]] es nula.

**Señal de detección**
El alumno afirma "no se mueve" ante una línea horizontal ubicada a [[velocidad]] constante de 5 m/s.

**Corrección conceptual**
Verificar el valor numérico de la ordenada: con [[velocidad]] de 5 m/s, el objeto avanza a ritmo constante.

**Mini-ejemplo de contraste**
Recta horizontal a [[velocidad]] 5 m/s durante 4 s. Si estuviera parado, el [[desplazamiento]] sería 0. Pero el área bajo la curva es 5 × 4 = 20 m. El objeto sí se mueve.

### Error 3: Pensar que un gráfico x-t descendente significa que el objeto frena

**Por qué parece correcto**
"Baja en la gráfica = frena" parece lógico por analogía con una cuesta. El alumno confunde dirección del movimiento con variación de rapidez.

**Por qué es incorrecto**
Una pendiente negativa en \(x\)-\(t\) indica [[velocidad]] negativa (retrocede), no necesariamente que desacelere. Puede retroceder con [[velocidad]] constante.

**Señal de detección**
El alumno escribe "deceleración" al ver una pendiente negativa constante en \(x\)-\(t\).

**Corrección conceptual**
Distinguir entre signo de la [[velocidad]] (dirección) y variación de \(|v|\) (aceleración/deceleración).

**Mini-ejemplo de contraste**
Gráfico \(x\)-\(t\) lineal con pendiente \(-3\; ext{m/s}\). La aceleración es \(0\) (la pendiente no cambia), pero el objeto retrocede a \(3\; ext{m/s}\) constantes. No frena.

## Errores de modelo

### Error 4: Asumir aceleración constante cuando la curva v-t cambia de pendiente

**Por qué parece correcto**
El problema dice "aceleración" y el alumno asume que es un solo valor para todo el gráfico, simplificando el análisis como en los ejercicios de MRU/MRUA simples.

**Por qué es incorrecto**
Si la pendiente cambia, la aceleración no es uniforme en todo el intervalo. Tratar todo como un solo tramo lineal genera áreas y pendientes erróneas.

**Señal de detección**
El alumno calcula un único \(\Delta v / \Delta t\) para todo el gráfico, ignorando las esquinas visibles.

**Corrección conceptual**
Dividir el gráfico en tantos tramos como cambios de pendiente haya y analizar cada uno por separado.

**Mini-ejemplo de contraste**
Un gráfico \(v\)-\(t\) sube linealmente de 0 a 10 m/s en 2 s y luego baja linealmente a 0 en otros 2 s. El alumno calcula [[aceleracion]] = (0−0)/4 = 0. Resultado correcto: primera fase +5 m/s², segunda fase −5 m/s².

### Error 5: Extrapolar la recta más allá del intervalo de datos

**Por qué parece correcto**
"La tendencia continuará" es una suposición razonable en muchos contextos cotidianos (si llueve una hora, seguirá lloviendo un rato más).

**Por qué es incorrecto**
El modelo lineal por tramos solo describe el comportamiento **dentro** de los datos. Fuera de ellos, las condiciones pueden ser completamente distintas.

**Señal de detección**
El alumno prolonga la recta del gráfico dibujando línea de puntos y lee valores fuera del intervalo temporal proporcionado.

**Corrección conceptual**
Limitar el análisis al intervalo temporal del gráfico proporcionado y no suponer que la tendencia continúa.

**Mini-ejemplo de contraste**
Gráfico \(v\)-\(t\) muestra [[velocidad]] creciente entre el inicio y los 5 s. El alumno extrapola a 10 s y predice [[velocidad]] de 100 m/s. En realidad, a los 5 s el objeto chocó contra un muro.

## Errores matemáticos

### Error 6: Calcular el área bajo v-t como rectángulo cuando es un trapecio

**Por qué parece correcto**
El rectángulo es la figura de área más simple; el alumno usa \(v \cdot \Delta t\) sin distinguir qué valor de \(v\) elegir.

**Por qué es incorrecto**
Un segmento con [[velocidad]] variable entre \(v_i\) y \(v_f\) forma un trapecio, no un rectángulo. Usar solo \(v_f \cdot \Delta t\) sobreestima o subestima el resultado.

**Señal de detección**
El alumno multiplica la [[velocidad]] final por el [[tiempo]] total sin promediar con la [[velocidad]] inicial.

**Corrección conceptual**
Aplicar la fórmula del trapecio para el [[desplazamiento]] (desplazamiento_area_v_t): promediar las velocidades inicial y final y multiplicar por el intervalo de [[tiempo]] .

**Mini-ejemplo de contraste**
 [[velocidad_inicial]] 0, [[velocidad_final]] 10 m/s, [[intervalo_tiempo]] 4 s. Rectángulo (incorrecto): 10 × 4 = 40 m. Trapecio (correcto): (0 + 10)/2 × 4 = 20 m. Diferencia del 100 %.

### Error 7: Olvidar el signo de la pendiente o del área

**Por qué parece correcto**
En aritmética escolar el "resultado" suele ser un número positivo. El alumno extrae el valor absoluto por costumbre.

**Por qué es incorrecto**
Una pendiente negativa en \(v\)-\(t\) indica deceleración (o aceleración en sentido opuesto). Ignorar el signo pierde la información de dirección.

**Señal de detección**
El alumno obtiene un valor de aceleración positivo cuando la curva \(v\)-\(t\) desciende claramente.

**Corrección conceptual**
Conservar los signos al calcular \(\Delta v / \Delta t\) y verificar que el resultado sea coherente con la subida o bajada de la curva.

**Mini-ejemplo de contraste**
 [[velocidad]] baja de 20 a 10 m/s en 5 s. Alumno: [[aceleracion]] = 10/5 = 2 m/s². Correcto: [[aceleracion]] = (10−20)/5 = −2 m/s². El objeto frena, no acelera.

### Error 8: Sumar áreas arriba y abajo del eje sin distinguir signo

**Por qué parece correcto**
"Área total = suma de todas las áreas" suena correcto si se piensa en "cuánto terreno cubre la figura".

**Por qué es incorrecto**
El área por debajo del eje \(t\) en un gráfico \(v\)-\(t\) representa [[desplazamiento]] negativo. Sumarlo como positivo da un [[desplazamiento]] total incorrecto.

**Señal de detección**
El alumno obtiene un [[desplazamiento]] neto anormalmente grande cuando el gráfico cruza el eje.

**Corrección conceptual**
Asignar signo negativo al área bajo el eje y sumar algebraicamente para obtener el [[desplazamiento]] neto.

**Mini-ejemplo de contraste**
Área sobre eje: +20 m. Área bajo eje: −8 m. Alumno suma 20 + 8 = 28 m. Correcto: [[desplazamiento]] neto = 20 + (−8) = 12 m; distancia total = 20 + 8 = 28 m.

## Errores de interpretación

### Error 9: Leer la pendiente de x-t y llamarla aceleración

**Por qué parece correcto**
El alumno sabe que "la pendiente da la derivada" y la confunde con la segunda derivada. Si pendiente = derivada y "derivada del movimiento = aceleración", parece razonable.

**Por qué es incorrecto**
La pendiente de \(x\)-\(t\) es la [[velocidad]] , no la aceleración. La aceleración es la pendiente de \(v\)-\(t\) o la curvatura de \(x\)-\(t\).

**Señal de detección**
El alumno confunde la fórmula de la [[velocidad]] media ( [[desplazamiento]] partido por [[tiempo]] ) con la de la aceleración.

**Corrección conceptual**
Identificar qué magnitudes están en cada eje antes de interpretar la pendiente: la pendiente de x-t proporciona la [[velocidad]] ; la pendiente de v-t proporciona la aceleración.

**Mini-ejemplo de contraste**
Gráfico posición- [[tiempo]] con pendiente de 4 m/s. El alumno dice [[aceleracion]] = 4 m/s². Pero la unidad de la pendiente es m/s, no m/s². Es [[velocidad]] , no aceleración.

### Error 10: Confundir distancia total recorrida con [[desplazamiento]] 

**Por qué parece correcto**
Ambas palabras suenan a "cuánto se ha movido", y en problemas sin retroceso coinciden numéricamente.

**Por qué es incorrecto**
El [[desplazamiento]] es el área neta (con signo) bajo \(v\)-\(t\); la distancia recorrida es la suma de valores absolutos de cada tramo. Si hay retroceso, las dos cantidades difieren.

**Señal de detección**
El alumno presenta un solo número como "respuesta" cuando el problema pide ambas magnitudes y el gráfico cruza el eje.

**Corrección conceptual**
Calcular ambas por separado cuando el gráfico \(v\)-\(t\) cruza el eje del [[tiempo]] .

**Mini-ejemplo de contraste**
Objeto avanza 30 m y retrocede 10 m. [[desplazamiento]] : 30 − 10 = 20 m. Distancia total: 30 + 10 = 40 m. Son diferentes.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado obtenido de un gráfico, aplica esta lista de comprobación:

1. **Unidades**: ¿la pendiente tiene unidades de la magnitud derivada (por ejemplo, \( ext{m/s}^2\) para pendiente de \(v\)-\(t\))?
2. **Signo**: ¿el signo de la pendiente es coherente con la subida o bajada de la curva? ¿El signo del área es coherente con la dirección del movimiento?
3. **Orden de magnitud**: ¿el [[desplazamiento]] calculado es razonable para los valores de [[velocidad]] y los tiempos del gráfico? Por ejemplo, si \(v pprox 5\; ext{m/s}\) durante \(10\; ext{s}\), el [[desplazamiento]] debería rondar los \(50\; ext{m}\), no \(500\) ni \(5\).
4. **Intervalo temporal**: ¿las bases de los tramos suman el intervalo total? Si faltan segundos, se ha omitido un segmento.
5. **Valor medio acotado**: la [[velocidad]] media tiene que estar entre los valores extremos de \(v\) en el intervalo. Si no lo está, hay un error aritmético.
