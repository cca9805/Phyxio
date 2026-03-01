# Modelos Y Suposiciones Del Tema

## 1- Modelo base
Cuerda homogenea, tension uniforme y extremos fijos. Bajo estas condiciones surgen modos discretos con:

$$
f_n=\frac{nv}{2L}
$$

## 2- Conexion con el medio
La velocidad modal no se impone externamente; viene del medio:

$$
v=\sqrt{\frac{F_t}{\mu_l}}
$$

Por eso la serie armonica cambia cuando cambian tension o densidad lineal.

## 3- Modelo de forma espacial
Cada modo tiene patron espacial propio:

$$
y_n(x,t)=2A_n\sin\!\left(\frac{n\pi x}{L}\right)\cos(\omega_n t+\phi_n)
$$

Este modelo describe nodos y antinodos, pero no es una salida escalar unica de calculadora.

## 4- Modelo de sintesis temporal
El movimiento real puede verse como suma de armonicos:

$$
y(t)=\sum_{n=1}^{\infty}A_n\sin(2\pi nf_1t+\phi_n)
$$

Se usa para interpretar timbre y espectro, no como formula cerrada unica.

## 5- Dominio de validez
El modelo funciona bien cuando:
- deformaciones pequenas,
- cuerda aproximadamente lineal,
- amortiguamiento moderado,
- frontera cercana a fija-fija ideal.

Si estas condiciones fallan, la serie ideal puede correrse o ensancharse.
