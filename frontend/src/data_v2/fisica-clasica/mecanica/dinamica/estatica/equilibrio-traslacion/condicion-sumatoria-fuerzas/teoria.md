# Condicion De Sumatoria De Fuerzas (Equilibrio Traslacional)

## Idea clave
Un cuerpo esta en equilibrio traslacional cuando la fuerza resultante sobre el es cero. Eso implica aceleracion nula y, por tanto, reposo o velocidad constante.

## 1- Que significa realmente "equilibrio traslacional"
Equilibrio traslacional no significa "sin fuerzas". Significa que las fuerzas se compensan vectorialmente.

Puedes tener muchas fuerzas actuando y aun asi:

$$
\sum \vec F = \vec 0
$$

Si esto se cumple, no hay cambio del estado de movimiento traslacional.

## 2- Conexion con la segunda ley de Newton
Partimos de:

$$
\sum \vec F = m\vec a
$$

Si hay equilibrio traslacional:

$$
\vec a=\vec 0
$$

entonces:

$$
\sum \vec F = \vec 0
$$

Esta es la condicion dinamica de equilibrio en traslacion.

## 3- Paso de vectorial a escalar por componentes
En 2D, la condicion vectorial equivale a:

$$
\sum F_x = 0
$$

$$
\sum F_y = 0
$$

En 3D se anade:

$$
\sum F_z = 0
$$

Resolver equilibrio es resolver este sistema de ecuaciones con signos correctos.

## 4- Interpretacion geometrica util
Si colocas las fuerzas punta con cola:
- si el poligono de fuerzas cierra, la resultante es cero,
- si no cierra, existe resultante no nula.

Esta vision ayuda a detectar errores de direccion o magnitud antes de entrar en algebra.

## 5- Fuerza equilibrante
Dada una resultante parcial \(\vec R\), la fuerza equilibrante es:

$$
\vec F_{eq} = -\vec R
$$

Si:

$$
\vec R = \vec F_1 + \vec F_2 + \cdots
$$

entonces:

$$
\vec F_{eq}=-(\vec F_1+\vec F_2+\cdots)
$$

No es una fuerza "especial", solo la que anula la resultante.

## 6- Metodo de resolucion paso a paso
1. Elige el cuerpo/sistema.
2. Dibuja DCL con fuerzas reales.
3. Define ejes y signos.
4. Proyecta fuerzas en cada eje.
5. Escribe \(\sum F_x=0\), \(\sum F_y=0\) (y \(\sum F_z=0\) si aplica).
6. Resuelve incognitas.
7. Verifica coherencia fisica y unidades.

Este orden evita la mayoria de errores de planteamiento.

## 7- Ejemplo guiado simple
Bloque sobre mesa horizontal con:
- fuerza aplicada \(F\) hacia la derecha,
- rozamiento estatico \(f_s\) hacia la izquierda,
- peso \(mg\) hacia abajo,
- normal \(N\) hacia arriba.

Equilibrio:

$$
\sum F_x = F-f_s=0 \Rightarrow f_s=F
$$

$$
\sum F_y = N-mg=0 \Rightarrow N=mg
$$

Interpretacion: el cuerpo puede estar en reposo aunque existan fuerzas no nulas individuales.

## 8- Errores tipicos
- Confundir "resultante cero" con "no hay fuerzas".
- Olvidar descomponer fuerzas oblicuas.
- Mezclar signos por no fijar ejes.
- Incluir pares accion-reaccion en el mismo DCL.
- Resolver solo un eje y asumir equilibrio total.

## 9- Que es calculable en este leaf
Calculable:
- fuerzas desconocidas en equilibrio traslacional,
- fuerza equilibrante,
- reacciones de apoyo simples.

No cubre por completo:
- equilibrio rotacional (sumatoria de momentos),
- estructuras con varios cuerpos sin separar DCL individuales.

## 10- Sintesis final
La condicion \(\sum \vec F=\vec 0\) es la base operativa del equilibrio traslacional. Su dominio real esta en la combinacion de DCL correcto, descomposicion por ejes y control de signos.

