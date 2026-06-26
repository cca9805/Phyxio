# Ecuacion de onda

## Contexto conceptual

La **ecuacion de onda** no es una formula para sustituir datos de forma directa. Es una ley diferencial que dice cuando una perturbacion puede propagarse como onda en un medio lineal. Su idea central es comparar la forma espacial de la perturbacion con su cambio temporal.

En el bloque de ondas, esta ecuacion ocupa un lugar estructural: conecta el concepto de perturbacion con modelos concretos de cuerda, sonido, luz o senales. Permite entender por que ciertas formas viajan, por que la velocidad del medio importa y por que una solucion armonica no es un dibujo decorativo.

## 🟢 Nivel esencial

Una onda viajera tiene forma y cambio. La forma se observa mirando como varia [[y]] a lo largo de [[x]]. El cambio se observa mirando como evoluciona [[y]] con [[t]]. La ecuacion de onda une esas dos lecturas.

Si una cuerda esta muy curvada en una zona, el movimiento local cambia con mas rapidez. La velocidad [[v]] mide como se transmite ese cambio por el medio. La amplitud [[A]] solo escala el tamano visible de la perturbacion.

La idea esencial es local: no hace falta imaginar toda la cuerda a la vez. Basta mirar un pequeno entorno y preguntar si la forma que se ve puede producir el cambio que se observa despues.

> [!TIP]
> La pregunta esencial no es "que numero sale", sino si la forma espacial de la perturbacion es compatible con la evolucion temporal observada.

## 🔵 Nivel formal

La forma unidimensional de la ley relaciona derivada temporal segunda y derivada espacial segunda:

{{f:ecuacion_onda_1d}}

La parte temporal mide aceleracion local de la perturbacion. La parte espacial mide curvatura. La constante [[v]] aparece al cuadrado porque convierte una curvatura espacial en una aceleracion temporal con unidades coherentes.

El salto formal consiste en dejar de mirar solo la altura del perfil. La ley compara operadores aplicados a [[y]]: uno observa como cambia el movimiento en el tiempo y otro observa como cambia la forma en el espacio. Dos puntos con el mismo desplazamiento pueden tener evoluciones distintas si pertenecen a zonas con distinta vecindad espacial. Esta es la diferencia entre describir una grafica y aplicar una ley dinamica.

Una familia importante de soluciones es la onda armonica viajera:

{{f:solucion_armonica}}

Esta expresion no define todas las ondas posibles, pero sirve como solucion base. [[A]] fija la escala vertical, [[k]] fija la repeticion espacial y [[omega]] fija el ritmo temporal de fase. Sustituir esta forma en la ley conduce a la relacion de velocidad de fase:

{{f:velocidad_fase}}

La lectura formal es clara: [[v]] no nace de la amplitud, sino del cociente entre ritmo temporal de fase y repeticion espacial. Por eso dos soluciones con distinta amplitud pueden propagarse con la misma rapidez si comparten medio y relacion de fase.

El control formal consiste en leer cada simbolo con su papel fisico. [[A]] modifica el tamano de la perturbacion, [[k]] comprime o dilata el perfil en el espacio y [[omega]] marca el ritmo temporal de fase. La ecuacion exige que esas elecciones sean compatibles con una misma [[v]]. Si el cociente entre escala temporal y escala espacial no coincide con la rapidez del medio, la expresion escrita no representa una solucion fisica de ese sistema.

## 🔴 Nivel estructural

La ecuacion de onda expresa una arquitectura de acoplamiento local. Cada punto del medio no evoluciona aislado: su estado queda condicionado por la forma que presentan las regiones vecinas. En una cuerda, la tension transmite esa informacion mecanica; en un fluido, lo hacen compresiones y rarefacciones; en campos electromagneticos, las ecuaciones de campo producen una estructura equivalente.

El punto profundo es que la ley selecciona evoluciones admisibles, no dibujos aislados. Una fotografia de [[y]] frente a [[x]] puede ser compatible con muchas historias temporales distintas. Para aceptar una como onda del modelo, hace falta que la dependencia con [[t]] cierre con la dependencia espacial y con la rapidez [[v]] del medio.

Tambien hay limites estructurales. La forma escrita aqui supone medio lineal, homogeneidad aproximada y velocidad [[v]] estable. Linealidad significa que duplicar la perturbacion no cambia la respuesta del medio. Homogeneidad significa que zonas equivalentes obedecen la misma rapidez. Velocidad estable significa que las componentes del perfil no se separan por tener escalas distintas.

El analisis de validez compara observaciones con esas hipotesis. Si la velocidad depende de la frecuencia, aparece dispersion y el pulso se ensancha. Si [[A]] baja con la distancia, hace falta perdida. Si la perturbacion modifica tension, densidad o rigidez, aparece no linealidad. Si hay extremos cercanos, las fronteras seleccionan modos y reflexiones. Entonces la ecuacion simple sigue siendo referencia, pero debe ceder ante un modelo con perdidas, dispersion, fronteras o no linealidad.

En una lectura estructural completa tambien entran superposicion y fronteras. La superposicion depende de la linealidad del operador, no de una regla grafica. Un extremo fijo, una union entre medios o una cavidad no cambian la ley local, pero restringen que soluciones pueden existir. La profundidad del modelo esta en combinar ley local, condiciones de borde y propiedades del medio sin confundir esos tres niveles.

La senal practica de cambio de modelo es clara: si la forma viaja casi sin deformarse, la ecuacion ideal sirve; si el pulso se abre, se apaga o genera nuevas frecuencias, hace falta mas estructura fisica.

> [!WARNING]
> La ecuacion de onda no dice que toda curva sea una onda. Solo son soluciones las perturbaciones cuya evolucion temporal mantiene el balance con la curvatura espacial.

## Interpretación física profunda

La ecuacion de onda enseña a leer una perturbacion como proceso, no como dibujo. La curvatura espacial es una pista de como "empuja" la forma al sistema para cambiar. Donde la curva se dobla mas, el modelo exige una respuesta temporal mas intensa.

Esto explica por que una solucion armonica es tan util. La funcion sinusoidal conserva su forma al avanzar: cambia de posicion de fase, pero mantiene una relacion estable entre curvatura y aceleracion. Esa estabilidad permite hablar de velocidad de fase sin seguir punto por punto cada elemento del medio.

## Orden de magnitud

En una cuerda de aula, [[v]] puede estar entre 1 m/s y 100 m/s. En sonido en aire, la rapidez es de orden cientos de m/s. En luz, la escala es de cientos de millones de m/s. Estas diferencias muestran que la misma estructura matematica puede representar dominios fisicos muy distintos.

Un resultado absurdo se detecta comparando escalas. Si una cuerda de laboratorio da una rapidez comparable a la de la luz, se han mezclado unidades o se ha usado una relacion fuera de su dominio. Si [[k]] es enorme para una longitud de onda visible en una cuerda, probablemente se midio mal la escala espacial.

## Método de resolución personalizado

Primero identifica si el problema pide verificar una ley o usar una solucion. Si pide verificar, compara curvatura espacial y cambio temporal. Si pide una perturbacion concreta, usa la solucion armonica y fija [[x]] y [[t]].

Segundo separa parametros: [[A]] escala la altura, [[k]] controla estructura espacial, [[omega]] controla ritmo temporal y [[v]] conecta ambos ritmos de fase. Tercero revisa el dominio: medio lineal, velocidad estable y amplitud suficientemente pequeña.

## Casos especiales y ejemplo extendido

Un pulso puede satisfacer la ecuacion de onda aunque no sea sinusoidal. La solucion armonica es una pieza elemental, no el unico caso posible. Muchas formas se pueden construir como combinacion de componentes armonicas si el medio es lineal.

Caso sutil: una onda estacionaria puede provenir de dos ondas viajeras opuestas y tambien obedecer la ecuacion. En ella no hay avance neto de crestas, pero el balance entre curvatura espacial y cambio temporal sigue siendo la clave.

Ejemplo extendido: si una cuerda admite una solucion con [[k]] grande y [[omega]] proporcionalmente grande, [[v]] puede mantenerse igual. La onda se ve mas comprimida en el espacio y oscila mas deprisa, pero la fase avanza con la misma rapidez si el cociente de fase se conserva.

## Preguntas reales del alumno

**¿Por que aparece una derivada segunda?** Porque la ley relaciona aceleracion temporal con curvatura espacial, no solo posicion con tiempo.

**¿La amplitud cambia la velocidad de la onda?** En el modelo lineal ideal, [[A]] escala la perturbacion, pero [[v]] depende de propiedades del medio y de la relacion de fase.

**¿Toda sinusoide es automaticamente una solucion?** Solo si sus parametros [[k]], [[omega]] y [[v]] respetan la relacion de fase exigida por la ley.

**¿Por que sirve para tantas ondas distintas?** Porque muchos sistemas lineales comparten la misma estructura: una variable local cambia en el tiempo segun como esta curvada en el espacio.

## Conexiones transversales y rutas de estudio

Antes de este leaf conviene dominar [concepto de onda](leaf:fisica-clasica/ondas/fundamentos/concepto-de-onda), [fase](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/fase) y [velocidad de propagacion](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion). Despues, la ecuacion prepara ondas estacionarias, superposicion, dispersion y energia transportada.

Tambien conecta con mecanica de medios continuos y electromagnetismo. En cada dominio cambian las magnitudes materiales, pero se mantiene la pregunta central: que relacion impone la dinamica entre forma espacial y evolucion temporal.

## Síntesis final

La ecuacion de onda es la ley que convierte una forma espacial en una evolucion temporal compatible. Su lectura central es el balance entre curvatura, cambio temporal y velocidad de propagacion; sus soluciones armonicas son ejemplos privilegiados, no simples dibujos.
