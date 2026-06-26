# Errores frecuentes

## Error 1: elegir la operacion equivocada

Parece razonable ajustar una recta a cualquier nube de puntos porque es sencillo. Falla cuando la curvatura o la escala muestran otra familia. Se detecta mirando residuos, concavidad y unidades. Se corrige comparando forma visual con significado fisico antes de calcular parametros.

## Error 2: perder el significado de la variable

El mismo dibujo puede representar posicion, energia, campo o intensidad. Si se olvida que magnitud hay en cada eje, se interpreta mal la funcion. Se detecta preguntando que representa `x` y que representa `y`. Se corrige escribiendo las unidades junto a cada parametro.

## Error 3: ignorar unidades

Un parametro sin unidad puede parecer correcto y ser fisicamente imposible. En `y = ax + b`, `a` no tiene la misma unidad que `b`. Se detecta revisando si cada termino de la ecuacion tiene la unidad de `y`. Se corrige haciendo analisis dimensional basico.

## Error 4: confundir signo con modulo

Una pendiente negativa, un exponente negativo o una fase negativa no son errores automaticos. Indican disminucion, decaimiento o desplazamiento respecto a una referencia. Se detecta conectando el signo con el fenomeno. Se corrige explicando sentido, no borrando el signo.

## Error 5: aplicar una regla fuera de dominio

Una funcion puede describir bien un intervalo y fallar fuera de el. Un resorte no es lineal para cualquier estiramiento, y una ley inversa puede fallar cerca de la fuente real. Se detecta revisando hipotesis e intervalo medido. Se corrige declarando dominio de validez.

## Regla rapida de deteccion

Si no puedes decir que parametro fisico representa la funcion elegida, probablemente solo has reconocido una forma superficial. La clasificacion debe terminar con unidad, dominio y frase fisica.
