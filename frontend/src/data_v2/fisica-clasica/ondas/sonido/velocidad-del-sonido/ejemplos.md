# Velocidad Del Sonido - Ejemplos Guiados

## Idea clave
La resolucion correcta depende de elegir el modelo de velocidad adecuado al medio y al dato disponible.

## 1- Ejemplo basico: aproximacion en aire
Datos: \(T_c=20\,\mathrm{degC}\).

$$
v\approx331+0.6\cdot20=343\,\mathrm{m/s}
$$

Lectura: valor tipico de referencia en aire ambiente.

## 2- Ejemplo intermedio: longitud de onda en aire
Con \(v=343\,\mathrm{m/s}\) y \(f=686\,\mathrm{Hz}\):

$$
\lambda=\frac{v}{f}=\frac{343}{686}=0.50\,\mathrm{m}
$$

Lectura: misma fuente, misma frecuencia; \(\lambda\) viene determinada por \(v\) del medio.

## 3- Ejemplo integrado: modelo de gas ideal
Datos: aire ideal con \(\gamma=1.4\), \(R=8.314\,\mathrm{J/(mol\,K)}\), \(M=0.02897\,\mathrm{kg/mol}\), \(T_K=293\,\mathrm{K}\).

$$
v=\sqrt{\frac{\gamma R T_K}{M}}=\sqrt{\frac{1.4\cdot8.314\cdot293}{0.02897}}\approx343\,\mathrm{m/s}
$$

Lectura: coherente con la aproximacion lineal en aire para temperatura cercana a 20 degC.

## 4- Preguntas de control rapido
- Que pasa con \(v\) en aire si sube \(T\)?
- Que cambia al pasar de aire a agua para la misma fuente?
- Cuando usar \(T_c\) y cuando usar \(T_K\)?

## 5- Checklist final de revision
- Medio identificado y formula adecuada.
- Temperatura en escala correcta para la ecuacion usada.
- Unidades SI consistentes.
- Interpretacion fisica final clara.

## 6- Siguiente paso
Comprueba estos casos en `Calculadora` y valida en `Graficas` que las tendencias coinciden con los resultados numericos.
