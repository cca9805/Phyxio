# Concepto De Onda

## Idea clave
Una onda es una perturbacion que se propaga y transporta energia e informacion, pero no transporta materia de forma neta.

## 1- Que fenomeno estudia este tema
Este tema responde a una pregunta fundamental: cuando "algo vibra" en un punto, como llega ese efecto a otros puntos sin que el medio viaje entero?

Ejemplo intuitivo:
- Sacudes una cuerda por un extremo.
- El bulto se desplaza a lo largo de la cuerda.
- Las particulas de la cuerda no viajan con el bulto: solo oscilan alrededor de su posicion de equilibrio.

Esa diferencia entre oscilacion local y propagacion global es la base de todo el bloque de ondas.

## 2- Base conceptual: que se mueve y que no se mueve
Para no confundirte desde el inicio, separa siempre estas dos ideas:

1. Movimiento local del medio:
- Cada punto del medio sube y baja, o se comprime y descomprime.
- Ese movimiento suele ser oscilatorio.

2. Propagacion de la perturbacion:
- El patron de la onda avanza por el espacio.
- Lo que "viaja" es el estado de perturbacion, no un trozo de materia.

Consecuencia clave:
- Si hay transporte de energia.
- No hay transporte neto de masa en el sentido del avance de la onda.

## 3- Elementos de una onda (identificacion correcta)
En una onda periodica debes identificar con precision:

- Amplitud \(A\): maxima separacion respecto al equilibrio.
- Longitud de onda \(\lambda\): distancia entre dos puntos consecutivos en fase.
- Frecuencia \(f\): ciclos por segundo.
- Periodo \(T\): tiempo de un ciclo.
- Velocidad de propagacion \(v\): rapidez de avance del patron.
- Frecuencia angular \(\omega\): ritmo angular temporal.
- Numero de onda \(k\): ritmo angular espacial.

Si no identificas bien estas magnitudes, cualquier calculo posterior falla.

## 4- Formulacion matematica minima (y que significa cada ecuacion)
Relaciones basicas:

$$
v=\lambda f
$$

Interpretacion:
- Si una onda recorre una longitud de onda por ciclo y hay \(f\) ciclos por segundo, su velocidad es \(\lambda f\).

$$
T=\frac{1}{f}
$$

Interpretacion:
- Frecuencia y periodo son inversos: mas ciclos por segundo implican menos tiempo por ciclo.

$$
\omega=2\pi f
$$

Interpretacion:
- Convierte frecuencia en Hz a frecuencia angular en rad/s.

$$
k=\frac{2\pi}{\lambda}
$$

Interpretacion:
- Cuanto menor es \(\lambda\), mayor es el cambio de fase por unidad de distancia.

Modelo armonico tipico:

$$
y(x,t)=A\sin(kx-\omega t+\phi_0)
$$

Lectura fisica:
- \(A\) fija la escala de oscilacion.
- \(kx\) describe variacion espacial.
- \(\omega t\) describe variacion temporal.
- \(\phi_0\) fija el estado inicial de fase.

## 5- Cuando aplican estas relaciones (modelo y validez)
Estas ecuaciones funcionan bien cuando:
- El medio puede modelarse de forma lineal.
- La onda es periodica o casi periodica.
- Las perturbaciones no son extremas.

Debes tener cuidado cuando:
- Hay no linealidades fuertes.
- El medio cambia bruscamente y domina la disipacion.
- Hay fronteras complejas no incluidas en el modelo basico.

Regla de oro: antes de calcular, confirma que el modelo elegido representa el fenomeno real.

## 6- Metodo de resolucion para problemas de concepto de onda
1. Identifica que te piden realmente (v, \(\lambda\), \(f\), \(T\), \(\omega\), \(k\)).
2. Pasa todos los datos a SI.
3. Elige la relacion minima necesaria (no uses formulas de mas).
4. Despeja simbolicamente antes de sustituir.
5. Calcula y verifica unidades.
6. Interpreta el resultado: que significa fisicamente ese numero?

## 7- Errores frecuentes que bloquean el aprendizaje
- Confundir amplitud con longitud de onda.
- Mezclar Hz y rad/s sin convertir.
- Pensar que "la materia viaja con la onda".
- Cambiar frecuencia al pasar de medio sin justificacion.
- Quedarte con el numero final sin interpretar su sentido fisico.

## 8- Ejemplo guia (de principio a fin)
Problema:
Una onda tiene \(f=5\ \text{Hz}\) y \(\lambda=0.8\ \text{m}\). Hallar \(v\), \(T\), \(\omega\) y \(k\).

Paso 1. Velocidad:

$$
v=\lambda f=0.8\cdot 5=4\ \text{m/s}
$$

Paso 2. Periodo:

$$
T=\frac{1}{f}=\frac{1}{5}=0.2\ \text{s}
$$

Paso 3. Frecuencia angular:

$$
\omega=2\pi f=10\pi\ \text{rad/s}
$$

Paso 4. Numero de onda:

$$
k=\frac{2\pi}{\lambda}=\frac{2\pi}{0.8}=2.5\pi\ \text{rad/m}
$$

Interpretacion final:
- La onda avanza 4 m cada segundo.
- Cada ciclo dura 0.2 s.
- Su ritmo angular temporal y espacial es coherente con los valores de \(f\) y \(\lambda\).

## 9- Aplicaciones reales
Este concepto no es teorico "de relleno". Es la base de:
- Sonido (acustica, altavoces, aislamiento).
- Telecomunicaciones (radio, microondas, fibra).
- Imagen medica y ultrasonidos.
- Sismologia y analisis de materiales.
- Optica y tecnologias basadas en luz.

## 10- Sintesis final
Dominar el concepto de onda significa poder explicar con claridad:
- Que se propaga.
- Que no se propaga.
- Que magnitudes describen el fenomeno.
- Que ecuaciones usar y por que.

Si logras eso, ya tienes el fundamento para resolver con solvencia el resto de temas de ondas.

