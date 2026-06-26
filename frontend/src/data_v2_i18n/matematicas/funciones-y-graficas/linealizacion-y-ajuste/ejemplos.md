# Ejemplo guiado

## Situacion fisica

Se mide el enfriamiento de un sensor y se sospecha que la diferencia de temperatura con el ambiente sigue `Delta T = Delta T0 e^(-kt)`. Los datos curvos no deben ajustarse con una recta en `Delta T` frente a `t` sin transformar.

## Traduccion matematica

Tomamos logaritmo: `ln(Delta T) = ln(Delta T0) - kt`. La grafica correcta para comprobar el modelo es `ln(Delta T)` frente a `t`. La pendiente esperada es `-k` y el corte es `ln(Delta T0)`.

## Calculo paso a paso

Si dos puntos transformados son `(0 s, 3.40)` y `(20 s, 2.40)`, la pendiente es `(2.40 - 3.40) / 20 s = -0.050 1/s`. Por tanto, `k = 0.050 1/s`.

El corte `3.40` no es temperatura inicial directa. Como representa `ln(Delta T0)`, entonces `Delta T0 = e^3.40`, aproximadamente `30 K`.

## Lectura del resultado

El sensor reduce su diferencia de temperatura con tasa relativa `0.050 1/s` dentro del intervalo medido. El ajuste apoya un decaimiento exponencial solo si los residuos no muestran patron sistematico.

## Error comun evitado

El error evitado es ajustar una recta a la curva original y leer una pendiente en `K/s` como si el enfriamiento perdiera la misma cantidad cada segundo. El modelo exponencial pierde una fraccion proporcional al estado actual.

# Ejemplo inverso

## Resultado dado

Una grafica log-log de intensidad frente a distancia da pendiente `-2.02` al ajustar datos entre `0.5 m` y `5 m`, despues de restar el fondo experimental.

## Que pregunta fisica permite responder

Permite preguntar si la intensidad sigue una ley inversa cuadratica con la distancia. No demuestra por si sola el mecanismo, pero apoya que el exponente fisico es cercano a `-2` en el rango medido.
