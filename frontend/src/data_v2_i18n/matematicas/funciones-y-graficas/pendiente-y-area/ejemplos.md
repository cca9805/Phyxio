# Ejemplo guiado

## Situacion fisica

Un carrito se mueve en linea recta. La grafica posicion-tiempo pasa por los puntos `(t = 2 s, x = 4 m)` y `(t = 6 s, x = 16 m)`. Despues, otra grafica velocidad-tiempo muestra `v = 3 m/s` constante entre `t = 0 s` y `t = 5 s`.

La primera pregunta es a que ritmo cambia la posicion. La segunda pregunta es cuanto desplazamiento se acumula durante cinco segundos.

## Traduccion matematica

En la grafica posicion-tiempo se necesita pendiente, porque se pregunta por una tasa de cambio. La operacion es `Delta x / Delta t` y la unidad esperada es `m/s`.

En la grafica velocidad-tiempo se necesita area, porque se pregunta por desplazamiento acumulado. La operacion es base por altura y la unidad esperada es `(m/s) s = m`.

## Calculo paso a paso

Para la pendiente: `Delta x = 16 m - 4 m = 12 m` y `Delta t = 6 s - 2 s = 4 s`. Por tanto, la pendiente media es `12 m / 4 s = 3 m/s`.

Para el area: la region bajo `v = 3 m/s` entre `0 s` y `5 s` es un rectangulo. Su base es `5 s` y su altura es `3 m/s`, asi que el area vale `15 m`.

## Lectura del resultado

La pendiente de `3 m/s` significa que, en ese tramo, la posicion aumenta tres metros por cada segundo. El area de `15 m` significa que el carrito acumula quince metros de desplazamiento en el intervalo.

La igualdad numerica no debe confundir: una pendiente `3 m/s` y un area `15 m` son objetos fisicos distintos. Una mide ritmo; la otra mide acumulacion.

## Error comun evitado

El error evitado es usar pendiente en la grafica velocidad-tiempo para responder desplazamiento. La pendiente de esa grafica seria aceleracion, y aqui seria cero porque la velocidad es constante. Pero aceleracion cero no significa desplazamiento cero: el carrito se mueve con velocidad constante y acumula area.

# Ejemplo inverso

## Resultado dado

En una grafica fuerza-tiempo se calcula un area con signo de `-8 N s` entre `t = 1 s` y `t = 3 s`. El signo negativo aparece porque la fuerza esta por debajo del eje horizontal durante ese intervalo.

## Que pregunta fisica permite responder

Ese resultado permite responder que impulso actua sobre el cuerpo en ese intervalo y en que sentido. La pregunta fisica seria: "que cambio de cantidad de movimiento produce la fuerza entre `1 s` y `3 s`?". No permite responder cual fue la fuerza instantanea maxima ni si la energia aumento; esas preguntas requieren otros datos u otra grafica.
