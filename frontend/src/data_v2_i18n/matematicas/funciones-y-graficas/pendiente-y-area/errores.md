# Errores frecuentes

## Error 1: elegir la operacion equivocada

Parece razonable calcular siempre pendiente o siempre area cuando aparece una grafica. Falla porque cada operacion responde una pregunta distinta. En `v-t`, la pendiente da aceleracion, pero el area da desplazamiento. Se detecta leyendo el verbo del enunciado: ritmo de cambio pide pendiente; total acumulado pide area. Se corrige escribiendo primero la pregunta fisica.

## Error 2: perder el significado de la variable

El error aparece al tratar `x` e `y` como letras vacias. Si el eje vertical cambia de posicion a velocidad, la misma operacion cambia de significado. Se detecta revisando etiquetas y unidades antes de calcular. Se corrige escribiendo una linea: "vertical dividido por horizontal significa..." o "vertical por horizontal significa...".

## Error 3: ignorar unidades

Una pendiente sin unidades queda desconectada de la fisica. Por ejemplo, `Delta x / Delta t = 5` debe leerse como `5 m/s` si los ejes son metros y segundos. En un area `F-t`, la unidad es `N s`, no `N`. Se detecta comprobando si la unidad final es cociente o producto. Se corrige operando tambien con unidades.

## Error 4: confundir signo con modulo

Un area negativa o una pendiente negativa no significa "cantidad imposible". Significa sentido contrario, disminucion o acumulacion con signo. En una grafica velocidad-tiempo, area negativa es desplazamiento hacia el sentido negativo. Se detecta comparando la curva con el eje horizontal. Se corrige separando modulo, signo y significado fisico.

## Error 5: aplicar una regla fuera de dominio

Calcular pendiente con dos puntos lejanos de una curva y llamarla instantanea es un error de dominio. Tambien lo es extrapolar un area fuera del intervalo medido. Se detecta preguntando si el resultado describe un punto, un tramo o una extension no observada. Se corrige declarando intervalo y tipo de aproximacion.

## Regla rapida de deteccion

Si el resultado tiene unidad vertical dividida por horizontal, debe interpretarse como tasa. Si tiene unidad vertical multiplicada por horizontal, debe interpretarse como acumulacion. Si la unidad final no coincide con la pregunta fisica, casi seguro se eligio mal la operacion.
