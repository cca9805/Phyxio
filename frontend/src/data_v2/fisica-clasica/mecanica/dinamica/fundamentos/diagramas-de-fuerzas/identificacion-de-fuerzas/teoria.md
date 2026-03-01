# Identificacion De Fuerzas

## Idea clave
Resolver dinamica empieza por identificar bien las fuerzas reales que actuan sobre el cuerpo. Si una fuerza no esta bien identificada, cualquier ecuacion posterior queda mal desde el origen.

## 1- Que se aprende en este tema y por que importa
Este tema no es "solo dibujar flechas". Es aprender a pasar de una situacion fisica real a un modelo dinamico correcto.

Cuando un estudiante falla en dinamica, casi siempre falla antes en este paso:
- olvida una fuerza,
- inventa una fuerza inexistente,
- coloca mal direccion o sentido.

## 2- Regla central: toda fuerza tiene agente
Cada fuerza debe responder esta pregunta:

Quien ejerce esa fuerza sobre el cuerpo

Si no puedes nombrar agente y receptor, esa fuerza no puede entrar al modelo.

Ejemplos validos:
- Tierra sobre bloque (peso),
- superficie sobre bloque (normal y rozamiento),
- cuerda sobre masa (tension),
- muelle sobre bloque (elastica).

## 3- Catalogo minimo de fuerzas que debes reconocer
Peso:

$$
\vec P = m\vec g
$$

Normal (contacto perpendicular):

$$
\vec N \perp \text{superficie}
$$

Rozamiento dinamico:

$$
f_k=\mu_k N
$$

Rozamiento estatico:

$$
f_s \le \mu_s N
$$

Tension:

$$
\vec T \parallel \text{cuerda}
$$

Fuerza elastica (modelo lineal):

$$
F_{el}=kx
$$

## 4- Direccion y sentido: donde se suelen cometer errores
Peso: siempre hacia el centro de la Tierra.

Normal: perpendicular a la superficie, no "siempre vertical".

Rozamiento: se opone al movimiento relativo o a su tendencia.

Tension: la cuerda tira, no empuja.

Elastica: apunta hacia la posicion de equilibrio.

La magnitud puede variar por problema; la direccion fisica no es arbitraria.

## 5- Diferencia entre fuerza real y fuerza de dibujo
No son fuerzas reales:
- "fuerza de la velocidad",
- "fuerza de inercia" en marcos inerciales,
- "fuerza porque se mueve hacia la derecha".

La velocidad describe estado de movimiento, no una interaccion.

## 6- Relacion con la tercera ley sin mezclar diagramas
En accion-reaccion:

$$
\vec F_{A\to B}=-\vec F_{B\to A}
$$

Pero esas dos fuerzas actuan en cuerpos distintos.

En el diagrama de un cuerpo solo dibujas fuerzas sobre ese cuerpo. No dibujas su reaccion sobre otros.

## 7- Metodo practico de identificacion
1. Elige el cuerpo a estudiar.
2. Enumera contactos y campos externos.
3. Por cada interaccion, escribe una fuerza con agente claro.
4. Asigna direccion fisica correcta.
5. Revisa si hay fuerzas duplicadas o inventadas.
6. Solo entonces pasa a ejes y ecuaciones.

## 8- Ejemplo guiado
Bloque sobre plano inclinado con rozamiento.

Fuerzas sobre el bloque:
- peso \(\vec P\),
- normal \(\vec N\),
- rozamiento \(\vec f\) paralelo al plano y opuesto al deslizamiento,
- tension \(\vec T\) si hay cuerda.

No aparece "fuerza por bajar" ni "fuerza de gravedad paralela" como fuerza nueva: eso es componente del peso.

## 9- Errores mas frecuentes y como evitarlos
- Error: poner \(f_s=\mu_s N\) siempre.
  Correccion: en estatico es una desigualdad y se ajusta hasta maximo.
- Error: olvidar la normal en un plano.
  Correccion: todo contacto con superficie impone reaccion normal.
- Error: confundir componente con fuerza independiente.
  Correccion: primero identifica fuerzas, luego descompon.

## 10- Sintesis final
Identificar fuerzas es modelar interacciones, no decorar un dibujo. Si este paso queda limpio, la segunda ley se aplica de forma directa y la resolucion se vuelve consistente.

