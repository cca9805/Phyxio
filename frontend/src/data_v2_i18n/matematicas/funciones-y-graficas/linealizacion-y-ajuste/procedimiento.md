# Procedimiento

## Antes de calcular

Escribe el modelo fisico esperado y no solo la forma de los datos. Pregunta si la relacion deberia ser lineal directamente o si necesita una transformacion como `ln(y)`, `1/x`, `x^2` o `log(x)`.

Revisa unidades, rango de datos e incertidumbre. Un ajuste con datos fuera del regimen fisico produce parametros numericamente precisos pero conceptualmente falsos.

## Paso 1: identifica el objeto matematico

El objeto es una tabla de datos experimentales con una variable controlada y una medida. Identifica variable independiente, variable dependiente y parametro fisico que se quiere extraer.

Si el modelo es `F = kx`, ajustas `F` frente a `x`. Si es `y = A e^(kt)`, ajustas `ln(y)` frente a `t`. Si es `y = C x^n`, ajustas `log(y)` frente a `log(x)`.

## Paso 2: elige la operacion

Elige transformacion segun el modelo, no segun la apariencia. Para proporcionalidad directa, usa grafica lineal. Para exponencial, usa semilog. Para potencia, usa log-log. Para dependencia cuadratica, prueba graficar frente a `x^2`.

Despues ajusta una recta y calcula pendiente y corte. Si la transformacion no produce una recta razonable, no fuerces el modelo.

## Paso 3: conserva unidades y signos

La pendiente de la recta transformada puede tener unidades distintas a la pendiente original. En `ln(y)` frente a `t`, la pendiente tiene unidad `1/s`. En `F` frente a `x`, la pendiente tiene unidad `N/m`.

El signo del parametro tambien tiene significado. Un `k` negativo en una exponencial indica decaimiento; uno positivo indica crecimiento. Un corte no nulo puede tener significado fisico o revelar offset.

## Paso 4: calcula

Selecciona puntos o usa ajuste estadistico. Calcula `m = Delta Y / Delta X` como primera estimacion y luego compara con el ajuste global si existe. Calcula tambien el corte `b` con `b = Y - mX`.

Revisa residuos: diferencia entre dato y recta ajustada. Residuos aleatorios sugieren modelo compatible; residuos con forma indican curvatura, cambio de regimen o variable omitida.

## Paso 5: interpreta el resultado

Traduce `m` y `b` al modelo original. Si ajustaste `ln(y) = ln(A) + kt`, la pendiente es `k` y el corte es `ln(A)`, no `A`. Debes volver de la transformacion para leer el parametro fisico.

Escribe una conclusion con dominio: "en este intervalo, los datos apoyan una relacion lineal..." o "la transformacion log-log sugiere exponente...". Evita afirmaciones universales.

## Checklist de autocontrol

Modelo antes que ajuste, transformacion justificada, unidades de pendiente y corte, residuos revisados, intervalo declarado, incertidumbre considerada y conclusion fisica escrita. Si falta uno de estos puntos, el ajuste aun no esta cerrado.
