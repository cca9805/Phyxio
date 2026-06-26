# Errores comunes: sistemas de referencia [[frame_sigma]]

## Errores conceptuales

### Error 1: Creer que existe una posición "absoluta"

**Por qué parece correcto**
En la vida diaria se suele decir que un objeto está "en tal lugar" sin nombrar el origen desde el que se mide.

**Por qué es incorrecto**
La posición [[r_vec]] siempre se mide desde un origen [[O]] perteneciente a un marco [[frame_sigma]]. Cambiar el origen cambia la coordenada aunque el evento físico sea el mismo.

**Se?al de detección**
El alumno escribe una coordenada sin declarar observador, eje positivo ni origen.

**Corrección conceptual**
Antes de calcular, nombrar el marco fijo, el marco móvil y el origen usado por cada uno.

**Mini-ejemplo**
Una pasajera puede estar a 2 m de la puerta del vag?n y a 50 m de una marca del and?n al mismo tiempo.

## Errores de modelo

### Error 2: Mezclar coordenadas de marcos distintos

**Por qué parece correcto**
Las coordenadas tienen las mismas unidades y parecen sumables directamente.

**Por qué es incorrecto**
Una coordenada medida desde el vag?n y otra medida desde el and?n no pertenecen al mismo sistema hasta que se traduce el origen y el movimiento relativo.

**Se?al de detección**
Aparecen sumas de posiciones sin indicar de qué marco procede cada t?rmino.

**Corrección conceptual**
Usar la transformaci?n galileana de posición como puente entre ambos marcos.

**Mini-ejemplo**
Sumar 2 m dentro del tren con 48 m desde el and?n solo tiene sentido si se declara qué representa cada origen.

### Error 3: Ignorar la aceleración del marco

**Por qué parece correcto**
Durante intervalos cortos muchos marcos parecen moverse de forma uniforme.

**Por qué es incorrecto**
El modelo galileano simple exige [[v_frame]] constante. Si el tren frena o acelera, la relaci?n entre marcos deja de ser una traslaci?n uniforme.

**Se?al de detección**
El enunciado menciona arranque, frenado, curva o vibraci?n fuerte, pero se aplica una ?nica velocidad del marco.

**Corrección conceptual**
Comprobar si el marco es inercial o aproximadamente inercial antes de usar la traducci?n galileana.

**Mini-ejemplo**
Una c?mara sobre un coche que frena no describe igual la escena que una c?mara que se mueve con velocidad constante.

## Errores matemáticos

### Error 4: Error de signo en la velocidad del marco

**Por qué parece correcto**
La f?rmula conserva unidades aunque el signo elegido sea contrario al eje físico.

**Por qué es incorrecto**
El signo de [[v_frame]] indica hacia d?nde se desplaza el marco móvil. Cambiarlo desplaza la posición predicha al lado equivocado.

**Se?al de detección**
El resultado sit?a el móvil detr?s cuando el dibujo muestra que avanza, o viceversa.

**Corrección conceptual**
Dibujar el eje positivo y marcar el vector [[v_frame]] antes de sustituir números.

**Mini-ejemplo**
Si el tren avanza hacia la derecha y ese sentido es positivo, su velocidad del marco debe entrar con signo positivo.

## Errores de interpretación

### Error 5: Confundir velocidad propia con velocidad del marco

**Por qué parece correcto**
Ambas velocidades pueden aparecer en el mismo c?lculo y compartir unidades.

**Por qué es incorrecto**
[[v_prime]] describe el movimiento interno del móvil dentro del marco móvil; [[v_frame]] describe el movimiento del marco completo respecto al observador base.

**Se?al de detección**
El alumno atribuye al pasajero toda la velocidad observada desde el suelo.

**Corrección conceptual**
Separar la contribuci?n del móvil y la contribuci?n del marco antes de interpretar el resultado final [[v]].

**Mini-ejemplo**
Una persona que camina a 1,5 m/s dentro de un tren puede moverse a 13,5 m/s respecto al and?n si el tren aporta 12 m/s.

## Regla de autocontrol rápido

1. ?He nombrado el marco [[frame_sigma]] de cada coordenada?
2. ?He fijado el origen [[O]] y el eje positivo?
3. ?La velocidad del marco [[v_frame]] es constante?
4. ?He separado velocidad interna y velocidad del marco?
5. ?El resultado describe el mismo evento visto desde otro observador?
