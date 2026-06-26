# Ejemplo guiado

## Situacion fisica

Se comparan dos sonidos. Uno tiene nivel `40 dB` y otro `70 dB`. La pregunta no es cuanto se suma en intensidad, sino por que factor cambia la razon de intensidades respecto a la referencia.

## Traduccion matematica

Para intensidad sonora, `L = 10 log10(I/I0)`. Una diferencia de niveles cumple `Delta L = 10 log10(I2/I1)`. Por tanto, una diferencia de `30 dB` implica una razon de intensidades.

## Calculo paso a paso

Si `Delta L = 70 dB - 40 dB = 30 dB`, entonces `30 = 10 log10(I2/I1)`. Dividimos por `10`: `3 = log10(I2/I1)`. Por tanto, `I2/I1 = 10^3 = 1000`.

## Lectura del resultado

El segundo sonido tiene intensidad mil veces mayor que el primero. No significa que sea "30 unidades lineales" mas intenso. La escala comprime razones grandes en diferencias manejables.

## Error comun evitado

El error evitado es tratar dB como escala lineal. Una diferencia de `30 dB` no suma una cantidad fija de intensidad; multiplica por un factor determinado por la definicion logaritmica.

# Ejemplo inverso

## Resultado dado

En una grafica log-log, la pendiente de campo frente a distancia es aproximadamente `-2` durante el intervalo medido, desde `1 m` hasta `10 m`, con datos positivos y escala coherente.

## Que pregunta fisica permite responder

Permite preguntar si al duplicar distancia el campo se reduce a la cuarta parte. Esa es la lectura de una ley de potencia con exponente `-2`, habitual en modelos de fuentes puntuales dentro de su dominio.
