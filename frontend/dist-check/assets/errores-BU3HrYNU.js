const e=`\uFEFF# Poleas - Errores comunes y malentendidos

## Errores conceptuales

### Error 1: Contar el tramo del operador como tramo efectivo

**Por qué parece correcto**
El estudiante observa que la cuerda tiene varios segmentos visibles, incluyendo aquel donde él mismo tira. El razonamiento intuitivo es: «si yo hago fuerza en esta cuerda, este segmento también me ayuda». La confusión nace de no distinguir entre los tramos que ejercen fuerza sobre la polea móvil y el tramo de entrada de energía del operador.

**Por qué es incorrecto**
Solo los tramos que ejercen fuerza ascendente directa sobre el bloque móvil (o sobre la carga) contribuyen a la ventaja mecánica [[n]]. El tramo donde el operador tira es la entrada del sistema; no puede ser a la vez entrada y ventaja.

**Señal de detección**
El estudiante obtiene un valor de n igual a 3 en un aparejo donde solo hay 2 tramos que sostienen la carga, más el tramo del operador. El correcto es [[n]] de valor 2.

**Corrección conceptual**
Contar solo los segmentos que pasan por encima de la polea móvil o la carga y terminan en un punto fijo o en otra polea fija.

**Mini-ejemplo de contraste**
Una polea móvil simple tiene dos tramos que sostienen la carga: [[n]] vale 2 y el esfuerzo P es la mitad de W. Si se cuenta el tramo del operador, n aparente es 3 y el esfuerzo calculado es W entre 3, lo que equivale a afirmar que se puede mantener 300 N con 100 N en un sistema que físicamente solo tiene dos tramos de soporte. El resultado es incorrecto y fácilmente refutado midiendo la fuerza real.

## Errores de modelo

### Error 2: Suponer eficiencia perfecta en sistemas reales

**Por qué parece correcto**
El modelo ideal es sencillo y se trabaja con él durante la mayor parte del curso. Al pasar a problemas de ingeniería, el estudiante sigue usando [[n]] sin incluir [[eta]], porque «nadie ha dicho que hay que cambiar».

**Por qué es incorrecto**
Cualquier sistema real tiene rozamiento en los ejes y rigidez en la cuerda. Ignorar [[eta]] subestima sistemáticamente el esfuerzo real y puede derivar en el sobredimensionamiento de la carga o en el subdimensionamiento del motor.

**Señal de detección**
El esfuerzo calculado es claramente menor que el medido en la práctica. El calor generado en los ejes durante la operación es un indicador físico visible de que la energía se disipa.

**Corrección conceptual**
Usar siempre la ley real para sistemas reales:

{{f:ley_polea_real}}

Estimar [[eta]] entre 0,80 y 0,95 según el estado de la lubricación y la rigidez del cable.

**Mini-ejemplo de contraste**
Considera un polipasto con [[n]] de valor 4 y una carga [[W]] de 800 N. El modelo ideal da P de 200 N. Con rendimiento [[eta]] del 80 %, P real sube a 250 N: diferencia del 25 %. En una aplicación de seguridad industrial, diseñar para 200 N cuando se necesitan 250 N puede provocar un accidente.

## Errores matemáticos

### Error 3: Confundir la relación de desplazamientos con la longitud de la cuerda

**Por qué parece correcto**
El estudiante calcula correctamente [[n]] y [[W]], pero al aplicar la restricción cinemática escribe el desplazamiento del extremo igual al de la carga, en lugar de multiplicar el desplazamiento de la carga por [[n]]. La confusión viene de no visualizar que cada uno de los [[n]] tramos debe acortarse la distancia que sube la carga.

**Por qué es incorrecto**
Cada tramo de cuerda que sostiene la carga móvil se acorta cuando la carga sube. La longitud total de cuerda liberada en el extremo del operador es la suma de todos esos acortamientos: [[n]] tramos multiplicado por [[sW]].

**Señal de detección**
El trabajo calculado P por [[sP]] es menor que el trabajo útil W por [[sW]], lo que viola la conservación de la energía.

**Corrección conceptual**
La relación correcta es:

{{f:relacion_desplazamientos}}

El trabajo de entrada igual al trabajo útil en el modelo ideal confirma la coherencia energética.

**Mini-ejemplo de contraste**
Sistema con [[n]] de valor 4. El alumno calcula: subo la carga 1 m, recojo 1 m de cuerda. Trabajo de entrada es 200 por 1 igual 200 J. Pero la carga de 800 N sube 1 m: trabajo útil es 800 J. Contradicción directa con la conservación de la energía. Respuesta correcta: se recogen 4 m de cuerda.

## Errores de interpretación

### Error 4: Creer que más poleas siempre significa menos esfuerzo real

**Por qué parece correcto**
El modelo potencial muestra que la ventaja crece exponencialmente con [[Np]]. El estudiante concluye que añadir poleas indefinidamente reduce el esfuerzo hasta cero.

**Por qué es incorrecto**
Cada polea adicional añade peso propio al sistema y un eje más de rozamiento. A partir de un número crítico de poleas, las pérdidas superan la ganancia geométrica: el esfuerzo real [[P]] empieza a crecer aunque la ventaja teórica [[n]] siga aumentando.

**Señal de detección**
Al añadir una polea móvil adicional al sistema real, el esfuerzo medido en el extremo de la cuerda no disminuye, sino que se mantiene o aumenta.

**Corrección conceptual**
La ventaja real combina [[n]] con [[eta]]: a más poleas, menor [[eta]]. Como [[eta]] disminuye con cada polea añadida, existe un óptimo práctico. Los polispastos industriales raramente superan [[n]] de valor 8 de forma eficiente.

**Mini-ejemplo de contraste**
Con [[n]] de valor 8 y [[eta]] de 0,88: P real es W entre 7,04. Con [[n]] de valor 10 y [[eta]] de 0,75 por las 2 poleas extra: P real es W entre 7,50. La ventaja real mejora solo marginalmente a pesar de añadir dos poleas y aumentar el coste, el peso y el mantenimiento del sistema.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado de poleas, aplica estas tres comprobaciones:

1. **Regla de oro**: ¿El producto P por [[sP]] coincide con W por [[sW]] en el modelo ideal? Si no, hay un error en [[n]] o en los desplazamientos. En el modelo real debe incluirse [[eta]].
2. **Línea de sentido físico**: ¿Es [[P]] menor que [[W]]? Si el esfuerzo es igual o mayor que la carga en un sistema con más de un tramo, el cálculo está mal o el rendimiento [[eta]] es extremadamente bajo.
3. **Conteo visual**: Dibuja el aparejo y cuenta solo los segmentos de cuerda que pasan directamente sobre la polea móvil o la carga. Ese número debe coincidir con el valor de [[n]] usado en la fórmula.\r
`;export{e as default};
