# Producto vectorial

## Que es

El producto vectorial combina dos vectores y devuelve otro vector perpendicular a ambos. Su modulo mide el area del paralelogramo formado por los vectores y su direccion se fija con la regla de la mano derecha.

## Por que aparece en fisica

Aparece en torque, momento angular, fuerza magnetica y areas orientadas. En todos esos casos importa no solo cuanto se gira, sino alrededor de que eje y con que sentido de rotacion.

## Idea visual o geometrica

La imagen visual es una puerta que gira o un paralelogramo orientado. Si la fuerza empuja lejos del eje y perpendicular al brazo, produce mas torque. Si empuja alineada con el brazo, no produce giro.

![Producto escalar y producto vectorial con direccion perpendicular](/graphs/matematicas/vectores-matematicos/producto-escalar-vectorial.svg)

## Lenguaje simbolico minimo

Se escribe `vec A cross vec B` y su modulo es `A B sin(theta)`. Por componentes se calcula con determinante formal. La direccion es perpendicular al plano de `A` y `B`, no una direccion cualquiera.

## Que significa el resultado

El resultado significa perpendicularidad orientada. En `vec tau = vec r cross vec F`, el vector torque indica eje y sentido de giro. El signo depende del convenio de orientacion y de la regla de la mano derecha.

## Cuando no debes usarlo

No debes usar producto vectorial para medir alineacion; para eso esta el producto escalar. Tampoco debes olvidar que el orden importa: `A cross B = - B cross A`.

## Resumen operativo

Identifica plano, angulo, modulo y sentido con mano derecha. Nivel basico: perpendicularidad. Intermedio: torque y area. Avanzado: orientacion, bases y productos vectoriales en campos.
