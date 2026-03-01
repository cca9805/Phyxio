# Ejemplos Tipicos De Fuerza Centripeta

## Idea clave
En todos los casos de trayectoria circular, la ecuacion radial es:

$$
\sum F_{rad}=m\frac{v^2}{r}
$$

La "fuerza centripeta" no se agrega como fuerza extra: se identifica que fuerzas reales aportan la resultante radial hacia el centro.

## 1- Que se aprende en este tema
Aqui no solo memorizas formulas: aprendes a reconocer patrones de resolucion.

Pregunta guia universal:
Que fuerza real (o combinacion) apunta hacia el centro en este problema

## 2- Procedimiento comun para cualquier ejemplo
1. Dibuja DCL.
2. Define eje radial con sentido hacia el centro.
3. Proyecta fuerzas sobre eje radial.
4. Plantea:

$$
\sum F_{rad}=m\frac{v^2}{r}
$$

5. Usa datos de \(v\), \(r\), \(\omega\) o \(T\) segun convenga.
6. Verifica signo y resultado fisico.

## 3- Caso A: masa en cuerda (movimiento circular horizontal idealizado)
Fuerza radial principal: tension.

$$
T = m\frac{v^2}{r}
$$

Si piden rapidez maxima admisible por cuerda de tension limite \(T_{max}\):

$$
v_{max}=\sqrt{\frac{T_{max}r}{m}}
$$

Interpretacion: aumentar radio o tension permitida aumenta la rapidez admisible.

## 4- Caso B: coche en curva plana sin peralte
La centripeta la aporta el rozamiento estatico lateral:

$$
f_s = m\frac{v^2}{r}
$$

Condicion de no derrape:

$$
f_s \le \mu_s N,\quad N=mg
$$

Por tanto:

$$
m\frac{v^2}{r}\le \mu_s mg
$$

$$
v\le \sqrt{\mu_s g r}
$$

## 5- Caso C: curva peraltada ideal (sin rozamiento)
Si el peralte tiene angulo \(\theta\), la componente horizontal de la normal aporta centripeta:

$$
N\sin\theta = m\frac{v^2}{r}
$$

y vertical:

$$
N\cos\theta = mg
$$

Dividiendo:

$$
\tan\theta = \frac{v^2}{rg}
$$

Este caso muestra como la geometria puede sustituir al rozamiento.

## 6- Caso D: loop vertical
### Punto mas bajo
Hacia el centro es hacia arriba:

$$
T-mg = m\frac{v^2}{r}
$$

### Punto mas alto
Hacia el centro es hacia abajo:

$$
T+mg = m\frac{v^2}{r}
$$

Condicion minima de contacto en punto alto (\(T\ge 0\)):

$$
v_{top}\ge \sqrt{gr}
$$

## 7- Caso E: orbita circular
La fuerza gravitatoria aporta toda la centripeta:

$$
\frac{GMm}{r^2}=m\frac{v^2}{r}
$$

Se simplifica \(m\):

$$
v=\sqrt{\frac{GM}{r}}
$$

Mensaje clave: la rapidez orbital no depende de la masa del satelite en el modelo ideal.

## 8- Ejemplo comparativo rapido
Datos: \(m=1000\,\text{kg}\), \(r=50\,\text{m}\), \(v=15\,\text{m/s}\).

Fuerza radial requerida:

$$
F_c=m\frac{v^2}{r}=1000\cdot\frac{225}{50}=4500\ \text{N}
$$

Interpretacion:
- en cuerda: tension radial requerida \(4500\ \text{N}\),
- en curva plana: rozamiento lateral requerido \(4500\ \text{N}\).

Misma demanda radial, distinto agente fisico.

## 9- Errores tipicos
- Anadir \(F_c\) como fuerza adicional al DCL.
- Elegir eje radial con signo inconsistente.
- Olvidar que \(v^2/r\) usa \(v\) en m/s.
- Mezclar marco inercial con centrifuga en el mismo planteo.
- No verificar condicion de contacto/derrape.

## 10- Sintesis final
Todos los ejemplos de centripeta se resuelven con la misma arquitectura: DCL, eje radial, proyeccion y segunda ley. Lo que cambia de un problema a otro no es la ecuacion radial, sino la fuerza real que la satisface.

