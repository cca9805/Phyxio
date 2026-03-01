# Peso: Definicion Y Expresion

## Idea clave
El peso es la fuerza gravitatoria que la Tierra (u otro astro) ejerce sobre un cuerpo con masa. No es una propiedad fija del objeto, sino una interaccion fisica con el campo gravitatorio.

## 1- Que estudia este tema y por que es clave
Este tema responde una confusion muy habitual: masa y peso no son lo mismo.

Muchos errores en dinamica vienen de tratar el peso como "cantidad de materia" en lugar de fuerza. Entender esta diferencia es imprescindible para diagramas de fuerzas, equilibrio y segunda ley.

## 2- Definicion fisica exacta del peso
El peso es una fuerza de campo:

$$
\vec P = m\vec g
$$

donde:
- \(m\) es la masa del cuerpo,
- \(\vec g\) es la aceleracion gravitatoria local.

Su modulo cerca de la superficie terrestre:

$$
P = mg
$$

## 3- Variables y unidades que debes dominar
- \(m\): masa, en kilogramos \((\text{kg})\),
- \(g\): aceleracion gravitatoria, en \((\text{m/s}^2)\),
- \(P\): modulo del peso, en newtons \((\text{N})\).

Comprobacion dimensional:

$$
[P]=[m][g]=\text{kg}\cdot\text{m/s}^2=\text{N}
$$

Esta verificacion evita errores de unidades en calculadora.

## 4- Direccion, sentido y punto de aplicacion
El vector peso:
- tiene direccion vertical local,
- apunta hacia el centro del astro,
- se aplica en el centro de masas para modelos de cuerpo rigido basicos.

En DCL se representa con flecha hacia abajo si trabajas cerca de la Tierra.

## 5- Diferencia profunda entre masa y peso
Masa:
- escalar,
- mide inercia,
- no depende del lugar (en mecanica clasica no relativista).

Peso:
- vector,
- mide interaccion gravitatoria,
- cambia si cambia \(g\).

Conclusiones practicas:
- mismo objeto en Luna y Tierra: misma masa, distinto peso.
- una balanza de resorte mide peso; una balanza comparativa estima masa.

## 6- Relacion con la segunda ley y con la normal
En vertical, muchas veces aparece:

$$
\sum F_y = N - P = ma_y
$$

Esto muestra que peso y normal no son "la misma fuerza":
- \(P\) la ejerce la Tierra sobre el cuerpo,
- \(N\) la ejerce la superficie sobre el cuerpo.

Pueden tener igual modulo en equilibrio, pero tienen origen fisico distinto.

## 7- Que se calcula en este leaf
Calculable de forma directa:
- \(P\) si conoces \(m\) y \(g\),
- \(m\) si conoces \(P\) y \(g\),
- \(g\) experimental si conoces \(P\) y \(m\).

Despejes utiles:

$$
P=mg,\quad m=\frac{P}{g},\quad g=\frac{P}{m}
$$

## 8- Ejemplo guiado
Un cuerpo de \(m=12\,\text{kg}\) en Tierra con \(g=9.81\,\text{m/s}^2\).

$$
P=mg=12\cdot 9.81=117.72\ \text{N}
$$

Interpretacion:
- el cuerpo recibe una fuerza gravitatoria de \(117.72\ \text{N}\) hacia abajo.
- este valor no dice aun si sube, baja o queda quieto: eso depende de la fuerza neta total.

## 9- Errores tipicos y correccion
- Error: "peso = masa".
  Correccion: masa en kg, peso en N.
- Error: usar \(g=9.81\) sin unidades.
  Correccion: siempre \(\text{m/s}^2\).
- Error: pensar que en caida libre no hay peso.
  Correccion: el peso sigue actuando; lo que puede faltar es normal.
- Error: asumir que peso y normal son accion-reaccion.
  Correccion: no lo son, ambas actuan sobre el mismo cuerpo.

## 10- Sintesis final
El peso es una fuerza real de origen gravitatorio y se modela con \(\vec P=m\vec g\). Distinguirlo de la masa y ubicarlo bien en el DCL es una condicion basica para resolver correctamente cualquier problema de dinamica.

