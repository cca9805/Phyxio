# Errores frecuentes

## Error 1: elegir la operacion equivocada

Parece razonable ajustar una recta directamente porque es el metodo mas conocido. Falla si el modelo esperado es exponencial, cuadratico o de potencia. Se detecta comparando la ecuacion fisica con los ejes usados. Se corrige transformando las variables antes del ajuste.

## Error 2: perder el significado de la variable

Tras linealizar, `X` e `Y` pueden ser `ln(y)`, `x^2` o `log(x)`. El error es interpretar la pendiente como si viniera de los ejes originales. Se detecta escribiendo la ecuacion transformada. Se corrige traduciendo pendiente y corte al modelo original.

## Error 3: ignorar unidades

El ajuste puede devolver una pendiente numerica sin unidad visible. En fisica eso es incompleto. Se detecta calculando unidades desde los ejes transformados. Se corrige anotando si la pendiente esta en `N/m`, `1/s`, `Pa/K` u otra unidad coherente.

## Error 4: confundir signo con modulo

Un coeficiente negativo en un decaimiento no es fallo: indica disminucion. Un corte negativo puede indicar offset o que el modelo no vale cerca del origen. Se detecta interpretando el signo dentro del fenomeno. Se corrige explicando sentido fisico o revisando calibracion.

## Error 5: aplicar una regla fuera de dominio

Una recta ajustada puede funcionar solo dentro del intervalo medido. Usarla fuera para predecir temperaturas, deformaciones o intensidades puede romper el modelo. Se detecta marcando el rango experimental. Se corrige limitando la conclusion.

## Regla rapida de deteccion

Si no puedes explicar que significan pendiente, corte y residuos, el ajuste todavia no es fisico. Un ajuste cerrado debe decir que calcula, que significa y donde deja de ser fiable.
