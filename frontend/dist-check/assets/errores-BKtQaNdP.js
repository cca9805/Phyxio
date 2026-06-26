const e=`## Errores conceptuales

### Error 1: Creer que el aumento total del microscopio es la suma de los aumentos individuales

**Por que parece correcto**

El alumno asocia "combinacion" con "suma" por analogia con otras magnitudes aditivas como fuerzas o resistencias en serie. Parece logico que un objetivo de 40 aumentos mas un ocular de 10 aumentos den 50 aumentos.

**Por que es incorrecto**

El objetivo produce una imagen intermedia ampliada lateralmente; el ocular amplifica angularmente esa imagen intermedia. Cada lente multiplica el efecto de la anterior, no lo suma. El aumento total es el producto de ambos factores.

**Senal de deteccion**

El resultado numerico del aumento total es mucho menor que el valor esperado para el microscopio. Un objetivo 40x con ocular 10x que da 50 en lugar de 400 delata este error.

**Correccion conceptual**

El aumento total de un instrumento de varias etapas es siempre el **producto** de los aumentos parciales. Para el microscopio, [[M_micro]] resulta de multiplicar el aumento lateral del objetivo por el aumento angular del ocular.

**Mini-ejemplo de contraste**

Con un objetivo 40x y un ocular 10x, sumar da 50; multiplicar da 400. Si una celula mide 10 micrometros y se observa con aumento 50, su imagen mediria 0.5 mm, apenas visible. Con aumento 400 la imagen mide 4 mm, claramente distinguible. Solo el producto reproduce lo que se observa al microscopio.

## Errores de modelo

### Error 2: Aplicar la formula paraxial a un objetivo de gran apertura numerica

**Por que parece correcto**

La ecuacion de la lente delgada funciona tan bien para lupas y microscopios escolares que el alumno generaliza su validez a cualquier situacion, incluyendo microscopios de investigacion con objetivos de inmersion.

**Por que es incorrecto**

Cuando la apertura numerica supera aproximadamente 0.65, los angulos de los rayos marginales dejan de ser pequenos y la aproximacion paraxial falla. Las aberraciones de tercer orden (esferica, coma, astigmatismo) distorsionan la imagen y el aumento predicho no coincide con el observado.

**Senal de deteccion**

La imagen pierde nitidez en los bordes del campo visual mientras el centro permanece enfocado, o aparecen halos cromaticos que no deberian existir segun el modelo ideal.

**Correccion conceptual**

Para objetivos de alta apertura numerica (por encima de 0.65), utilizar modelos que incluyan coeficientes de aberracion de Seidel y, si es necesario, trazado de rayos numerico. La formula paraxial es solo una primera aproximacion valida para instrumentos de baja potencia.

**Mini-ejemplo de contraste**

Un objetivo de inmersion con apertura numerica de 1.25 produce, segun el modelo paraxial, una imagen perfecta. En realidad, las aberraciones reducen la resolucion real un 30 % respecto al limite de difraccion si no se corrigen con lentes acromaticas.

## Errores matematicos

### Error 3: Intercambiar la focal del objetivo con la del ocular en la formula del microscopio

**Por que parece correcto**

Ambas son distancias focales positivas y su posicion en la formula no parece obvia a primera vista. El alumno puede invertirlas por descuido al no distinguir que magnitud esta en el numerador y cual en el denominador de cada factor.

**Por que es incorrecto**

El factor del objetivo es [[L]] dividido entre [[f_obj]] y el factor del ocular es [[d_pp]] dividido entre [[f_oc]]. Intercambiar las focales altera drasticamente el resultado porque las focales del objetivo suelen ser un orden de magnitud menores que las del ocular.

**Senal de deteccion**

El aumento calculado resulta mucho menor o mucho mayor que lo esperado. Por ejemplo, con [[f_obj]] de 4 mm y [[f_oc]] de 25 mm, invertirlas da un factor 6.25 en vez de 40 para la parte del objetivo, reduciendo el aumento total a la sexta parte del valor correcto.

**Correccion conceptual**

Recordar que el **objetivo** divide la longitud del tubo [[L]] entre su focal [[f_obj]], y el **ocular** divide la distancia del punto proximo [[d_pp]] entre su focal [[f_oc]]. El objetivo produce aumento lateral; el ocular, aumento angular.

**Mini-ejemplo de contraste**

Con [[f_obj]] de 0.004 m, [[f_oc]] de 0.025 m, [[L]] de 0.16 m y [[d_pp]] de 0.25 m, el resultado correcto es (0.16/0.004) por (0.25/0.025), igual a 40 por 10, que da 400. Intercambiando las focales se obtiene (0.16/0.025) por (0.25/0.004), igual a 6.4 por 62.5, que da 400 tambien por coincidencia algebraica. Pero si las focales fuesen 0.004 m y 0.050 m, el intercambio daria un resultado erroneo.

## Errores de interpretacion

### Error 4: Suponer que mayor aumento siempre implica mejor imagen

**Por que parece correcto**

La experiencia cotidiana sugiere que hacer algo mas grande facilita su observacion. El alumno extrapola que un aumento de 2000 sera mejor que uno de 400 para cualquier muestra.

**Por que es incorrecto**

Mas alla del aumento util, la difraccion impone un limite a la resolucion angular. Aumentar por encima de ese limite solo amplifica la mancha de difraccion sin revelar detalle adicional. La imagen se agranda pero se vuelve borrosa: es el llamado **aumento vacio**.

**Senal de deteccion**

Al subir el aumento la imagen se ve mas grande pero no mas nitida; los bordes de las estructuras se difuminan en lugar de definirse mejor.

**Correccion conceptual**

El aumento util maximo depende de la apertura numerica del objetivo y de la longitud de onda de la luz. Para luz visible y un objetivo de inmersion, el aumento util maximo es de aproximadamente 1000. Superar ese valor solo empeora la calidad de la imagen.

**Mini-ejemplo de contraste**

Un microscopio con objetivo de apertura numerica 0.25 tiene aumento util maximo de aproximadamente 250. Forzar un aumento de 1000 (ocular 25x con objetivo 40x) solo muestra una mancha borrosa cuatro veces mas grande que la imagen nitida a 250 aumentos, sin ningun detalle adicional.

## Regla de autocontrol rapido

Antes de dar por bueno el calculo del aumento de un instrumento optico, comprobar estos tres puntos:

- El aumento total se obtuvo **multiplicando** los factores parciales, nunca sumandolos.
- Las focales del objetivo y del ocular se asignaron correctamente: [[f_obj]] en el factor con [[L]] y [[f_oc]] en el factor con [[d_pp]].
- El resultado numerico esta dentro del rango esperable: entre 2 y 25 para una lupa, entre 40 y 1000 para un microscopio escolar. Si el valor cae fuera de estos rangos, revisar los datos de entrada.
`;export{e as default};
