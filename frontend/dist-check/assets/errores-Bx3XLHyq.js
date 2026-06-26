const e=`# Errores comunes: sistemas de referencia [[frame_sigma]]\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que existe una posición "absoluta"\r
\r
**Por qué parece correcto**\r
En la vida diaria se suele decir que un objeto está "en tal lugar" sin nombrar el origen desde el que se mide.\r
\r
**Por qué es incorrecto**\r
La posición [[r_vec]] siempre se mide desde un origen [[O]] perteneciente a un marco [[frame_sigma]]. Cambiar el origen cambia la coordenada aunque el evento físico sea el mismo.\r
\r
**Se?al de detección**\r
El alumno escribe una coordenada sin declarar observador, eje positivo ni origen.\r
\r
**Corrección conceptual**\r
Antes de calcular, nombrar el marco fijo, el marco móvil y el origen usado por cada uno.\r
\r
**Mini-ejemplo**\r
Una pasajera puede estar a 2 m de la puerta del vag?n y a 50 m de una marca del and?n al mismo tiempo.\r
\r
## Errores de modelo\r
\r
### Error 2: Mezclar coordenadas de marcos distintos\r
\r
**Por qué parece correcto**\r
Las coordenadas tienen las mismas unidades y parecen sumables directamente.\r
\r
**Por qué es incorrecto**\r
Una coordenada medida desde el vag?n y otra medida desde el and?n no pertenecen al mismo sistema hasta que se traduce el origen y el movimiento relativo.\r
\r
**Se?al de detección**\r
Aparecen sumas de posiciones sin indicar de qué marco procede cada t?rmino.\r
\r
**Corrección conceptual**\r
Usar la transformaci?n galileana de posición como puente entre ambos marcos.\r
\r
**Mini-ejemplo**\r
Sumar 2 m dentro del tren con 48 m desde el and?n solo tiene sentido si se declara qué representa cada origen.\r
\r
### Error 3: Ignorar la aceleración del marco\r
\r
**Por qué parece correcto**\r
Durante intervalos cortos muchos marcos parecen moverse de forma uniforme.\r
\r
**Por qué es incorrecto**\r
El modelo galileano simple exige [[v_frame]] constante. Si el tren frena o acelera, la relaci?n entre marcos deja de ser una traslaci?n uniforme.\r
\r
**Se?al de detección**\r
El enunciado menciona arranque, frenado, curva o vibraci?n fuerte, pero se aplica una ?nica velocidad del marco.\r
\r
**Corrección conceptual**\r
Comprobar si el marco es inercial o aproximadamente inercial antes de usar la traducci?n galileana.\r
\r
**Mini-ejemplo**\r
Una c?mara sobre un coche que frena no describe igual la escena que una c?mara que se mueve con velocidad constante.\r
\r
## Errores matemáticos\r
\r
### Error 4: Error de signo en la velocidad del marco\r
\r
**Por qué parece correcto**\r
La f?rmula conserva unidades aunque el signo elegido sea contrario al eje físico.\r
\r
**Por qué es incorrecto**\r
El signo de [[v_frame]] indica hacia d?nde se desplaza el marco móvil. Cambiarlo desplaza la posición predicha al lado equivocado.\r
\r
**Se?al de detección**\r
El resultado sit?a el móvil detr?s cuando el dibujo muestra que avanza, o viceversa.\r
\r
**Corrección conceptual**\r
Dibujar el eje positivo y marcar el vector [[v_frame]] antes de sustituir números.\r
\r
**Mini-ejemplo**\r
Si el tren avanza hacia la derecha y ese sentido es positivo, su velocidad del marco debe entrar con signo positivo.\r
\r
## Errores de interpretación\r
\r
### Error 5: Confundir velocidad propia con velocidad del marco\r
\r
**Por qué parece correcto**\r
Ambas velocidades pueden aparecer en el mismo c?lculo y compartir unidades.\r
\r
**Por qué es incorrecto**\r
[[v_prime]] describe el movimiento interno del móvil dentro del marco móvil; [[v_frame]] describe el movimiento del marco completo respecto al observador base.\r
\r
**Se?al de detección**\r
El alumno atribuye al pasajero toda la velocidad observada desde el suelo.\r
\r
**Corrección conceptual**\r
Separar la contribuci?n del móvil y la contribuci?n del marco antes de interpretar el resultado final [[v]].\r
\r
**Mini-ejemplo**\r
Una persona que camina a 1,5 m/s dentro de un tren puede moverse a 13,5 m/s respecto al and?n si el tren aporta 12 m/s.\r
\r
## Regla de autocontrol rápido\r
\r
1. ?He nombrado el marco [[frame_sigma]] de cada coordenada?\r
2. ?He fijado el origen [[O]] y el eje positivo?\r
3. ?La velocidad del marco [[v_frame]] es constante?\r
4. ?He separado velocidad interna y velocidad del marco?\r
5. ?El resultado describe el mismo evento visto desde otro observador?\r
`;export{e as default};
