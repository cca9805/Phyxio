# Análisis gráfico del movimiento

## Contexto conceptual

Las gráficas son una herramienta fundamental en cinemática porque permiten visualizar de un solo vistazo cómo cambian posición [[posicion_final]] [[posicion_inicial]] [[posicion]] , [[velocidad]] [[velocidad]] y aceleración [[aceleracion]] a lo largo del [[tiempo]] [[tiempo]] . Muchos problemas que resultan complejos algebraicamente se vuelven evidentes cuando se representan gráficamente: identificar fases de aceleración, reposo o retroceso es inmediato mirando la forma de la curva. Además, las relaciones entre gráficas están gobernadas por derivadas e integrales, lo que convierte el análisis gráfico en un puente poderoso entre la intuición visual y el formalismo matemático.

Tres tipos de gráficas dominan la cinemática unidimensional: posición- [[tiempo]] ($x$-$t$), [[velocidad]] - [[tiempo]] ($v$-$t$) y aceleración- [[tiempo]] ($a$-$t$). Cada una codifica información diferente, pero están encadenadas: la pendiente de una proporciona la siguiente, y el área bajo una proporciona la anterior. Aprender a leer y traducir entre ellas es una habilidad esencial que reaparece en termodinámica, circuitos eléctricos y mecánica de fluidos.

## 🟢 Nivel esencial

Imagina que grabas con el móvil a un amigo que corre por un pasillo recto. Si anotas su posición cada segundo y unes los puntos, obtienes una gráfica $x$-$t$. Cuando la línea sube con pendiente constante, tu amigo avanza a [[velocidad]] constante. Si la línea se curva hacia arriba, está ganando rapidez. Si se aplana, se ha detenido. Y si baja, está volviendo hacia atrás.

La clave para la gráfica $v$-$t$ es pensar en el cuentakilómetros del coche. Un tramo horizontal significa ritmo constante; una línea ascendente, que pisa el acelerador; una línea descendente, que frena. El área encerrada entre la curva y el eje del [[tiempo]] mide cuántos metros se han recorrido (con signo). Si el tramo es horizontal, el área es un rectángulo cuya altura es la lectura del marcador y cuya base es el intervalo de [[tiempo]] [[intervalo_tiempo]] : base por altura te da los metros avanzados.

Para la gráfica $a$-$t$, el razonamiento es similar: el área bajo la curva te dice cuántos metros por segundo ha ganado o perdido el objeto. Cuanto más intensa sea la variación y más [[tiempo]] dure, mayor será el cambio de rapidez.

> [!WARNING]
> Cuidado con las áreas «bajo el eje»: si la curva $v$-$t$ baja por debajo de cero, esa área representa retroceso (metros recorridos en sentido contrario). La distancia total requiere sumar los valores absolutos de cada trozo.

## 🔵 Nivel formal

**Gráfica posición- [[tiempo]] ($x$-$t$).** La [[velocidad]] instantánea es la pendiente de la tangente a la curva:

{{f:velocidad_inst_pendiente_x_t}}

Para movimiento rectilíneo uniforme (MRU), la posición [[posicion]] en función del [[tiempo]] describe una recta cuya pendiente es la [[velocidad]] [[velocidad]] . Para movimiento rectilíneo uniformemente acelerado (MRUA), la posición describe una parábola cuya concavidad depende del signo de la aceleración [[aceleracion]] .

**Gráfica [[velocidad]] - [[tiempo]] ($v$-$t$).** La aceleración instantánea es la pendiente:

{{f:aceleracion_inst_pendiente_v_t}}

El [[desplazamiento]] entre $t_1$ y $t_2$ se calcula como el área con signo bajo la curva:

{{f:desplazamiento_area_v_t}}

Cuando la [[velocidad]] es una función lineal del [[tiempo]] , el área bajo la curva es un trapecio (o triángulo), y la integral se reduce a fórmulas geométricas elementales. La [[velocidad]] media [[velocidad_media]] en un intervalo se obtiene como el cociente entre el [[desplazamiento]] y el intervalo de [[tiempo]] [[intervalo_tiempo]] ; gráficamente, es la altura del rectángulo de igual área que la curva v-t en ese tramo.

{{f:velocidad_media_intervalo}}

**Gráfica aceleración- [[tiempo]] ($a$-$t$).** El cambio de [[velocidad]] [[cambio_velocidad]] es el área bajo la curva de aceleración:

{{f:cambio_velocidad_area_a_t}}

Si la aceleración es constante, la gráfica es una recta horizontal y el área es simplemente $a \cdot \Delta t$. La aceleración media [[aceleracion_media]] en un intervalo se obtiene como el cociente entre el [[cambio_velocidad]] y el [[intervalo_tiempo]]; gráficamente, es la pendiente de la secante en v-t entre los puntos extremos del tramo.

{{f:aceleracion_media_intervalo}}

Estas tres relaciones forman un ciclo completo: derivar permite bajar de $x$ a $v$ y de $v$ a $a$; integrar permite subir de $a$ a $v$ y de $v$ a $x$, siempre con una constante de integración que fija la condición inicial. En resumen, las relaciones gráficas del tema son: velocidad_inst_pendiente_x_t (pendiente de $x$-$t$), velocidad_media_intervalo (cociente $\Delta x / \Delta t$), desplazamiento_area_v_t (área bajo $v$-$t$), aceleracion_inst_pendiente_v_t (pendiente de $v$-$t$), aceleracion_media_intervalo (cociente $\Delta v / \Delta t$) y cambio_velocidad_area_a_t (área bajo $a$-$t$).

## 🔴 Nivel estructural

El análisis gráfico revela la dualidad derivada-integral de forma visual e inmediata. Desde el punto de vista del análisis dimensional, la pendiente de $x$-$t$ tiene dimensiones $[L]/[T] = [LT^{-1}]$ ( [[velocidad]] ), y el área bajo $v$-$t$ tiene dimensiones $[LT^{-1}] \times [T] = [L]$ ( [[desplazamiento]] ). Esta consistencia dimensional es una prueba interna de que el método es correcto y no un simple truco geométrico.

Uno de los límites del modelo gráfico es que supone continuidad. Un salto vertical en la gráfica $x$-$t$ implicaría teletransportación, y una discontinuidad en $v$-$t$ implicaría aceleración infinita. En la realidad, las transiciones siempre son suaves, aunque puedan ocurrir en escalas de [[tiempo]] muy cortas. Cuando modelamos un rebote de una pelota como un cambio instantáneo de [[velocidad]] , estamos haciendo una idealización: la fuerza de contacto actúa durante milisegundos, generando una aceleración enorme pero finita.

La lectura gráfica conecta con la integral de Riemann: el área bajo $v$-$t$ se construye como suma de rectángulos infinitesimales $v(t_i)\,\Delta t$, que es exactamente la definición de integral. Así, la cinemática gráfica proporciona motivación física para conceptos del cálculo integral. También permite detectar simetrías: un movimiento cuya gráfica $v$-$t$ es simétrica respecto a un eje vertical tiene velocidades medias iguales antes y después del eje, lo que puede simplificar cálculos.

Desde la perspectiva energética, el área bajo una gráfica $F$-$x$ (fuerza contra posición) da el trabajo. Aunque esa gráfica no es estrictamente cinemática, el hábito de leer «área = magnitud física» se entrena primero con las gráficas cinemáticas y luego se transfiere al contexto dinámico y termodinámico, lo que demuestra la potencia transversal del método gráfico.

## Interpretación física profunda

Cada punto de una gráfica $x$-$t$ codifica un evento: un lugar y un instante. La curva completa es la «historia» de la partícula en el espacio- [[tiempo]] unidimensional. Dos rectas que se cruzan indican que los objetos se encuentran en el mismo lugar al mismo [[tiempo]] : un encuentro. La pendiente relativa en ese punto indica si se acercan o se alejan después del cruce.

Una gráfica $v$-$t$ con un cambio brusco de pendiente (un «codo») señala un cambio repentino de aceleración, lo que físicamente corresponde a la aparición o desaparición súbita de una fuerza. Identificar estos puntos en datos experimentales reales es clave para entender qué fuerzas actuaron durante el movimiento.

## Orden de magnitud

| Situación | Gráfica típica | Característica |
|---|---|---|
| Persona caminando 5 min | x-t recta con pendiente ≈ 1,4 m/s | Avance de ≈ 420 m |
| Coche frenando en ciudad | v-t recta descendente con a ≈ −4 m/s² | De 50 km/h a 0 en ≈ 3,5 s |
| Caída libre 2 s | v-t recta ascendente con pendiente 9,8 m/s² | [[velocidad_final]] ≈ 19,6 m/s, Δx ≈ 19,6 m |
| Pasajero Metro acelerando | a-t horizontal ≈ 1,2 m/s² durante 10 s | Ganancia de 12 m/s |

## Método de resolución personalizado

1. **Identifica qué gráfica tienes** ($x$-$t$, $v$-$t$ o $a$-$t$) y qué te piden obtener.
2. **Si necesitas «bajar» un nivel** (de $x$ a $v$, o de $v$ a $a$), calcula la pendiente punto a punto o, si la curva es lineal, usa $\Delta y / \Delta x$.
3. **Si necesitas «subir» un nivel** (de $a$ a $v$, o de $v$ a $x$), calcula el área bajo la curva en el intervalo pedido. Usa figuras geométricas (rectángulos, triángulos, trapecios) para áreas simples.
4. **Vigila el signo**: áreas por debajo del eje temporal son negativas. Pendiente negativa indica [[velocidad]] o aceleración negativa.
5. **Reconstruye la gráfica derivada/integral** punto a punto para movimientos compuestos con varias fases. Cada fase genera un segmento diferente.

## Casos especiales y ejemplo extendido

**Caso especial — Movimiento compuesto.** Un ciclista acelera, luego mantiene [[velocidad]] constante y finalmente frena. La gráfica $v$-$t$ es un trapecio: rampa ascendente, meseta horizontal y rampa descendente. El [[desplazamiento]] total es el área del trapecio.

**Ejemplo extendido.** Un tren parte del reposo, acelera uniformemente durante $20\;\text{s}$ hasta alcanzar $30\;\text{m/s}$, mantiene esa [[velocidad]] durante $60\;\text{s}$ y frena uniformemente durante $15\;\text{s}$ hasta detenerse.

- Fase 1 (aceleración): aceleración 30/20 = 1,5 m/s². Área: triángulo de base 20 s y altura 30 m/s → [[desplazamiento]] parcial = ½ × 20 × 30 = 300 m.
- Fase 2 (crucero): Área: rectángulo 30 × 60 = 1 800 m.
- Fase 3 (frenado): aceleración −30/15 = −2 m/s². Área: triángulo ½ × 15 × 30 = 225 m.
- **Distancia total:** 300 + 1 800 + 225 = 2 325 m.

## Preguntas reales del alumno

**¿Puedo obtener la aceleración directamente de la gráfica $x$-$t$?**
Sí, pero no como pendiente. La aceleración está relacionada con la curvatura (segunda derivada). Si $x$-$t$ es una parábola, la aceleración es constante e igual al doble del coeficiente del término cuadrático. Sin embargo, es mucho más sencillo pasar primero a $v$-$t$ y luego leer la pendiente.

**¿Qué pasa si la gráfica $v$-$t$ tiene un tramo curvo?**
El área ya no es un rectángulo o triángulo sencillo. Hay que estimar el área contando cuadraditos de la cuadrícula o usar cálculo integral. La pendiente en cada punto sigue dando la aceleración instantánea, que ahora varía con el [[tiempo]] .

**¿Distancia y [[desplazamiento]] se leen igual en la gráfica?**
No. El [[desplazamiento]] es el área neta (con signo), y la distancia es la suma de las áreas absolutas. Si la curva $v$-$t$ cruza el eje de [[tiempo]] , hay tramos positivos y negativos que se cancelan en el [[desplazamiento]] pero se suman en la distancia.

## Conexiones transversales y rutas de estudio

- **Hacia magnitudes cinemáticas:** Las gráficas son la representación visual de las definiciones de [[velocidad]] y aceleración como derivadas.
- **Hacia MRUA:** La gráfica $v$-$t$ del MRUA es una recta, la más fácil de analizar y el primer ejemplo de integración gráfica.
- **Hacia cálculo integral:** El cómputo de áreas bajo curvas es exactamente la motivación geométrica de la integral de Riemann.
- **Hacia termodinámica:** La lectura de trabajos en gráficas $P$-$V$ sigue la misma lógica de «área bajo la curva».

## Síntesis final

Leer gráficas cinemáticas es traducir entre imágenes y ecuaciones. La pendiente de $x$-$t$ da la [[velocidad]] ; la pendiente de $v$-$t$ da la aceleración; el área bajo $v$-$t$ da el [[desplazamiento]] . Dominar esta traducción permite resolver problemas complejos de movimientos con varias fases sin necesidad de ecuaciones algebraicas, y prepara al estudiante para aplicar la misma lógica gráfica en contextos más avanzados de la física.
