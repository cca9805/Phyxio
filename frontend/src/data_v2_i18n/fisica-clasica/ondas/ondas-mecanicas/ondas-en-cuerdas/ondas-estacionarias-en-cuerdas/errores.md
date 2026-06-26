## Errores conceptuales


### Error 1: Confundir nodos con puntos de minima velocidad transversal

**Por que parece correcto**: Los nodos no se desplazan, lo que parece indicar que tienen velocidad nula en todo momento, como un objeto en reposo.

**Por que es incorrecto**

En un nodo, el desplazamiento transversal es cero para todo tiempo, pero la velocidad transversal es maxima cuando todos los puntos vecinos pasan por el equilibrio. El nodo es un punto de amplitud nula, no de movimiento lento.

**Señal de deteccion**: El alumno describe que "los nodos apenas se mueven" o que "vibran muy despacio". Tambien puede calcular incorrectamente la energia cinetica asumiendo velocidad cero en nodos.

**Correccion conceptual**: Los nodos son puntos donde dos ondas viajeras llegan siempre con fase opuesta, cancelandose permanentemente. La amplitud de oscilacion es nula, pero la tension varia periodicamente y el punto experimenta esfuerzos maximos de cizalla.

**Mini-ejemplo de contraste**: En el modo fundamental, el punto central (vientre) tiene velocidad transversal maxima al cruzar el equilibrio y velocidad nula al alcanzar su maxima excursion. El extremo fijo (nodo) tiene desplazamiento nulo siempre, pero la tension interna de la cuerda en ese punto varia periodicamente.


### Error 2: Incluir los extremos como vientres al contar el numero de modo

**Por que parece correcto**: Los extremos son los puntos visibles y destacados de la cuerda; al contar todos los puntos especiales (extremos incluidos) parece que el numero de modo deberia incluirlos.

**Por que es incorrecto**: Los extremos de una cuerda con fijacion perfecta son siempre nodos, nunca vientres. El numero de vientres es exactamente igual al numero de modo [[numero_armonico]], mientras que el numero de nodos es [[numero_armonico]] mas 1 (incluyendo ambos extremos).

**Señal de deteccion**: El alumno afirma que el modo fundamental tiene dos vientres (confundiendo extremos con vientres) o que el segundo modo tiene solo un vientre central.

**Correccion conceptual**: Los extremos de una cuerda fija son siempre nodos, nunca vientres. En el modo [[numero_armonico]] hay exactamente [[numero_armonico]] vientres separados por [[numero_armonico]] menos 1 nodos internos, mas los dos nodos extremos.

**Mini-ejemplo de contraste**: Para [[numero_armonico]] igual a 3, hay tres vientres ubicados a 1/6, 3/6 y 5/6 de [[longitud_cuerda]] desde el extremo, con nodos en las posiciones 0, 2/6, 4/6 y 1 de [[longitud_cuerda]]. Contar cuatro vientres incluyendo un extremo es incorrecto.

## Errores de modelo


### Error 3: Confundir la velocidad de propagacion con la velocidad del patron estacionario

**Por que parece correcto**: Visualmente, el patron de nodos y vientres no avanza a lo largo de la cuerda, lo que sugiere velocidad de propagacion nula para la onda estacionaria.

**Por que es incorrecto**: La onda estacionaria no tiene velocidad de grupo ni de fase como una onda viajera, pero las ondas viajeras que la forman si tienen velocidad [[velocidad_propagacion]]. Esta velocidad [[velocidad_propagacion]] es la que aparece en la formula de frecuencias y determina el espectro del sistema. Afirmar que la velocidad es cero lleva a predecir frecuencias nulas para todos los modos.

**Senal de deteccion**: El alumno establece la velocidad igual a cero en la formula de frecuencias, obteniendo frecuencias de cero para todos los modos del sistema.

**Correccion conceptual**: La velocidad [[velocidad_propagacion]] en la formula de frecuencias es la velocidad de propagacion de las ondas viajeras componentes, no la velocidad de desplazamiento del patron estacionario. El patron no viaja, pero las ondas que lo producen si lo hacen a velocidad [[velocidad_propagacion]].

**Mini-ejemplo de contraste**: Una cuerda con [[velocidad_propagacion]] igual a 200 m/s y [[longitud_cuerda]] igual a 0.5 m tiene frecuencia fundamental de 200 Hz aunque el patron estacionario observado no se desplace a lo largo de la cuerda.

## Errores matemáticos


### Error 4: Aplicar condiciones de contorno de extremo libre a una cuerda con ambos extremos fijos

**Por que parece correcto**: Las formulas de tubos de viento con un extremo cerrado y uno abierto parecen similares. Si no se distingue el sistema, se aplica la formula de cuartos de onda.

**Por que es incorrecto**: Para extremo fijo y libre la condicion en el extremo libre permite vientres, produciendo frecuencias proporcionales a 1, 3, 5... en lugar de 1, 2, 3, 4... El sistema cuerda fija-fija exige nodos en ambos extremos y admite todos los armonicos enteros.

**Señal de deteccion**: Los calculos de frecuencia dan valores que no son multiplos enteros del fundamental. Por ejemplo, el segundo modo calculado tiene frecuencia triple en lugar de doble, lo que corresponde al sistema fijo-libre.

**Correccion conceptual**: Dos extremos fijos imponen nodos en ambos extremos. Esto fuerza un numero entero de medias longitudes de onda en la longitud total de la cuerda, produciendo la serie armonica completa con todos los enteros positivos.

**Mini-ejemplo de contraste**: Para una cuerda de 1 m con [[velocidad_propagacion]] igual a 100 m/s, el segundo modo fijo-fijo tiene frecuencia de 100 Hz. Aplicar erroneamente la formula de extremo libre daria 75 Hz para el siguiente modo, que no existe en el sistema fijo-fijo.


### Error 5: Olvidar el factor 2 en la formula de la longitud de onda cuantizada

**Por que parece correcto**: Si [[numero_armonico]] longitudes de onda caben en [[longitud_cuerda]], parece natural que la longitud de onda sea [[longitud_cuerda]] dividida por [[numero_armonico]]. La division directa parece logica.

**Por que es incorrecto**: La condicion de contorno exige que [[numero_armonico]] medias longitudes de onda quepan en [[longitud_cuerda]], no [[numero_armonico]] longitudes de onda completas. La relacion es [[longitud_onda_estacionaria]] igual a dos veces [[longitud_cuerda]] dividido entre [[numero_armonico]]. Omitir el factor 2 produce longitudes de onda a la mitad y frecuencias al doble del valor correcto.

**Señal de deteccion**: El alumno obtiene longitudes de onda que son la mitad del valor correcto para cada modo, o frecuencias que son el doble del valor correcto. El conteo de vientres no coincide con [[numero_armonico]].

**Correccion conceptual**: La condicion de contorno exige que [[numero_armonico]] medias longitudes de onda quepan en [[longitud_cuerda]], no [[numero_armonico]] longitudes de onda completas. La relacion correcta es [[longitud_onda_estacionaria]] igual a dos veces [[longitud_cuerda]] dividido entre [[numero_armonico]].

**Mini-ejemplo de contraste**: Para [[numero_armonico]] igual a 2 y [[longitud_cuerda]] igual a 0.6 m, la longitud de onda correcta es dos por 0.6 dividido entre 2, que da 0.6 m. El error comun de dividir directamente daria 0.3 m, lo que corresponderia a cuatro vientres en lugar de dos.

## Errores de interpretación


### Error 6: Interpretar la amplitud maxima en los vientres como A en lugar de 2A

**Por que parece correcto**: La amplitud de cada onda viajera es [[amplitud_maxima]]. Parece razonable que el resultado de la superposicion tenga tambien amplitud [[amplitud_maxima]] en los vientres.

**Por que es incorrecto**: Cuando dos ondas de amplitud [[amplitud_maxima]] se superponen en fase, las amplitudes se suman algebraicamente. El desplazamiento maximo en un vientre es dos veces [[amplitud_maxima]], no [[amplitud_maxima]]. Subestimar la amplitud a la mitad afecta directamente los calculos de energia y presion sonora.

**Señal de deteccion**: El alumno calcula la energia de la onda estacionaria usando [[amplitud_maxima]] como amplitud en los vientres, obteniendo un cuarto de la energia real. O reporta amplitud maxima de [[amplitud_maxima]] cuando el correcto es 2[[amplitud_maxima]].

**Correccion conceptual**: La funcion de onda estacionaria tiene factor 2[[amplitud_maxima]] como amplitud maxima en los vientres. Cuando dos ondas de amplitud [[amplitud_maxima]] se superponen en fase, las amplitudes se suman: el resultado es 2[[amplitud_maxima]], no [[amplitud_maxima]].

**Mini-ejemplo de contraste**: Si cada onda viajera tiene amplitud de 2 mm, los vientres de la onda estacionaria alcanzan amplitudes de 4 mm. El nodo mas proximo tiene amplitud cero en todo momento.

## Regla de autocontrol rápido

Antes de dar por buena la solucion a un problema de ondas estacionarias, verificar:

1. **Conteo de nodos**: el numero de nodos debe ser [[numero_armonico]] mas 1, incluyendo los dos extremos fijos
2. **Conteo de vientres**: el numero de vientres debe ser exactamente [[numero_armonico]]
3. **Factor 2 en la longitud de onda**: [[longitud_onda_estacionaria]] es dos veces [[longitud_cuerda]] dividido entre [[numero_armonico]], no [[longitud_cuerda]] dividido entre [[numero_armonico]]
4. **Armonicos completos**: para cuerda fija-fija existen todos los modos enteros positivos, no solo los impares
5. **Amplitud en vientres**: la amplitud maxima en los vientres es 2[[amplitud_maxima]], no [[amplitud_maxima]]