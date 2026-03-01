# Cuerdas - Ejemplos Guiados

## Idea clave
Resolver bien no es sustituir datos: es justificar el modelo, elegir el modo correcto y validar el resultado en terminos fisicos y espaciales.

## 1- Ejemplo basico: frecuencia fundamental
Datos:
- \(F_t=81\,\mathrm{N}\)
- \(\mu_l=4.0\times10^{-3}\,\mathrm{kg/m}\)
- \(L=0.75\,\mathrm{m}\)

Paso 1- velocidad:

$$
v=\sqrt{\frac{81}{0.004}}\approx142.3\,\mathrm{m/s}
$$

Paso 2- fundamental:

$$
f_1=\frac{v}{2L}=\frac{142.3}{1.5}\approx94.9\,\mathrm{Hz}
$$

Lectura: esta cuerda vibra cerca de 95 Hz en su modo fundamental.

## 2- Ejemplo intermedio: armonico alto
Si \(f_1=94.9\,\mathrm{Hz}\), hallar \(f_5\).

$$
f_5=5f_1=474.5\,\mathrm{Hz}
$$

Lectura: el quinto armonico multiplica por 5 la frecuencia base.

## 3- Ejemplo integrado: modo + geometria nodal
Datos: \(L=0.75\,\mathrm{m}\), \(n=4\).

$$
\lambda_4=\frac{2L}{4}=0.375\,\mathrm{m}
$$

$$
d_{NN}=\frac{\lambda_4}{2}=0.1875\,\mathrm{m},\qquad d_{NA}=\frac{\lambda_4}{4}=0.09375\,\mathrm{m}
$$

Lectura: al subir el modo, crece la densidad de nodos y se acorta la escala espacial del patron.

## 4- Preguntas de control rapido
- Si duplicas \(F_t\) y mantienes \(\mu_l\), que pasa con \(v\)?
- Si duplicas \(L\), que pasa con \(f_1\)?
- Por que \(n\) debe ser entero positivo en extremos fijos?

## 5- Checklist de revision final
- Datos en SI.
- Formula modal correcta para el objetivo.
- Unidades coherentes.
- Interpretacion fisica y patron espacial consistentes.

## 6- Siguiente paso
Repite estos casos en `Calculadora` y verifica en `Graficas` que el modo mostrado coincide con tus resultados.
