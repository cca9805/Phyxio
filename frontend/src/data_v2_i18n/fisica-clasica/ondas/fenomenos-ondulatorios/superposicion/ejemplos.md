# Ejemplo tipo examen

## Enunciado

Dos pulsos transversales se cruzan en una cuerda ideal. En un punto concreto, en el mismo instante, el primer pulso desplaza la cuerda 3.0 mm hacia arriba y el segundo la desplaza 1.8 mm hacia abajo. Despues se analiza el caso de dos pulsos en fase con amplitudes 3.0 mm y 1.8 mm.

Se pide determinar la perturbacion instantanea resultante, la amplitud resultante en fase y la intensidad relativa asociada a esa amplitud.

## Datos

- Perturbacion de la onda 1: 3.0 mm hacia arriba.
- Perturbacion de la onda 2: 1.8 mm hacia abajo.
- Amplitud de la onda 1: 3.0 mm.
- Amplitud de la onda 2: 1.8 mm.

## Definición del sistema

El sistema es un tramo pequeno de cuerda en un instante de cruce. La variable observable es el desplazamiento transversal local. Se toma hacia arriba como sentido positivo, de modo que [[y_1]] es positivo y [[y_2]] es negativo.

La segunda parte del ejemplo no usa perturbaciones instantaneas, sino amplitudes maximas en fase. Por eso se distingue entre [[y_resultante]] y [[A_resultante]].

## Modelo físico

Se aplica superposicion lineal: el medio responde proporcionalmente y cada pulso conserva su identidad al atravesar al otro. La cuerda no queda permanentemente deformada, y el resultado local se obtiene sumando aportes con signo.

Para la parte energetica se usa una lectura relativa: [[I_relativa]] es proporcional al cuadrado de la amplitud combinada. No representa potencia absoluta en W, sino comparacion de refuerzo.

## Justificación del modelo

El modelo vale porque las amplitudes son pequenas frente a la longitud de la cuerda y no hay indicios de deformacion plastica ni tension variable. Los pulsos se cruzan sin modificar las propiedades del medio.

Dejaria de valer si la cuerda se deformara de forma no lineal, si aparecieran choques, o si el desplazamiento fuera tan grande que la tension efectiva cambiara durante el cruce.

## Resolución simbólica

Primero se suma la perturbacion instantanea con signo:

{{f:superposicion_lineal}}

Para el caso en fase, la amplitud maxima combinada se obtiene como suma directa de amplitudes:

{{f:amplitud_en_fase}}

Finalmente, la lectura relativa de intensidad se obtiene desde la amplitud resultante:

{{f:intensidad_relativa}}

La separacion simbolica evita mezclar perturbacion instantanea, amplitud maxima e intensidad. Cada magnitud responde a una pregunta distinta.

## Sustitución numérica

Para la perturbacion instantanea, sumar 3.0 mm hacia arriba con 1.8 mm hacia abajo deja una perturbacion neta de 1.2 mm hacia arriba. Por tanto [[y_resultante]] es aproximadamente 1.2 mm en sentido positivo.

Para las amplitudes en fase, sumar 3.0 mm y 1.8 mm da 4.8 mm. Asi [[A_resultante]] es aproximadamente 4.8 mm. Si se toma la amplitud de 1 mm como referencia, elevar 4.8 al cuadrado da una lectura relativa de 23.0. Por tanto [[I_relativa]] es aproximadamente 23 en esa escala normalizada.

## Validación dimensional

- Perturbacion: sumar longitudes con signo conserva dimension de longitud, `[L]`.
- Amplitud: suma de amplitudes tambien conserva `[L]`.
- Intensidad relativa: al normalizar por una amplitud de referencia, el cociente cuadratico queda sin dimension, `[1]`.

Las unidades son coherentes porque no se han sumado longitudes con intensidades ni amplitudes con energia.

## Interpretación física

El resultado instantaneo muestra una cancelacion parcial: aunque el primer pulso eleva la cuerda 3.0 mm, el segundo tira en sentido contrario y reduce la perturbacion visible a 1.2 mm. La cuerda no "elige" un pulso; responde a la suma algebraica de ambos.

El caso en fase muestra otro regimen: las amplitudes maximas se refuerzan y la lectura relativa de intensidad crece mucho. Esto explica por que dos fuentes coherentes pueden producir zonas muy brillantes o muy sonoras aunque cada fuente individual sea moderada.

Si el segundo pulso hubiese tenido igual magnitud y sentido opuesto al primero, [[y_resultante]] habria sido nula en ese punto. Eso seria cancelacion local, no desaparicion global de las ondas.

# Ejemplo de aplicación real

## Contexto

En auriculares con cancelacion activa de ruido, un microfono mide una perturbacion acustica no deseada y el altavoz genera otra perturbacion casi opuesta. El objetivo no es destruir el sonido en todo el espacio, sino reducir [[y_resultante]] cerca del oido.

## Estimación física

Si el ruido produce una presion acustica relativa de 1.0 unidad y el altavoz genera una perturbacion de 0.8 unidades en sentido opuesto, la suma deja 0.2 unidades. La perturbacion local se reduce a una quinta parte de la original.

Como la intensidad relativa escala con el cuadrado de la amplitud, una amplitud residual de 0.2 implica una intensidad relativa aproximada de 0.04 frente a la referencia inicial. Es una reduccion de orden veinticinco veces en la lectura energetica local.

## Interpretación

La cancelacion activa funciona solo si fase, amplitud y posicion estan muy controladas. Si la onda generada llega tarde, deja de restar y puede incluso reforzar el ruido.

La estimacion muestra por que una reduccion moderada de amplitud puede percibirse como una reduccion fuerte de ruido. La superposicion actua sobre perturbaciones, pero el oido interpreta una respuesta energetica relacionada con intensidad.
