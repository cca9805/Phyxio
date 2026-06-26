const e=`# Errores comunes: Momento Lineal [[p]]

## Errores conceptuales

### Error 1: Confundir momento lineal [[p]] con energía cinética [[K]]

**Por qué parece correcto**
Ambas magnitudes dependen exclusivamente de la masa[[m]]y la velocidad[[v]]. Para un alumno que se inicia en la dinámica, parece que ambas están describiendo "lo mismo": el estado de un objeto en movimiento. La confusión se agrava porque cuando una crece, la otra también suele hacerlo.

Es habitual creer que si se conserva el momento lineal, también debe conservarse la energía cinética, o viceversa. Se perciben como dos nombres para la misma "cantidad de vigor" que lleva el cuerpo.

**Por qué es incorrecto**
El momento[[p]]es una magnitud **vectorial** que depende linealmente de la velocidad. Su conservación está ligada a la simetría del espacio. En cambio, la energía[[K]]es un **escalar** que depende del cuadrado de la velocidad y está ligada a la simetría del tiempo.

En la mayoría de los choques reales (inelásticos), el momento se conserva perfectamente mientras que la energía cinética se transforma en calor o deformación. Ignorar esta distinción impide entender por qué un coche puede quedar destrozado (pérdida de energía) mientras sigue moviéndose tras el impacto (conservación de momento).

**Señal de detección**
Intentar sumar momentos de cuerpos que se mueven en distintas direcciones como si fueran números simples (escalares), o intentar aplicar la conservación de la energía cinética en un choque donde los objetos quedan pegados (choque plástico).

**Corrección conceptual**
Recuerda: El momento[[p]]mide la persistencia de la **trayectoria** (vector), mientras que la energía[[K]]mide la **capacidad de transformación** (escalar). Para el momento, la dirección lo es todo; para la energía, la dirección es irrelevante.

**Mini-ejemplo de contraste**
Si duplicas la velocidad de un coche, su momento lineal[[p]]se duplica (es el doble de difícil de desviar), pero su energía cinética[[K]]se cuadruplica. Esto explica por qué un accidente a 100 km/h es mucho más de "dos veces" peor que uno a 50 km/h: el momento lineal se dobla, pero la capacidad de destrucción energética se multiplica por cuatro.

---

## Errores de modelo

### Error 2: Ignorar el carácter vectorial en análisis bidimensionales

**Por qué parece correcto**
Operar solo con los módulos de los vectores simplifica drásticamente el álgebra. El cerebro tiende a buscar la solución más rápida y "sumar números" es más intuitivo que "sumar flechas" mediante componentes o trigonometría.

A menudo se piensa que si el sistema tiene una "cantidad total de movimiento", esta se puede hallar sumando los valores absolutos de lo que lleva cada parte, ignorando que el movimiento en un eje no puede compensar al del otro.

**Por qué es incorrecto**
La dirección es una propiedad intrínseca del momento lineal. Dos cuerpos masivos que chocan de frente pueden tener momentos individuales enormes, pero el momento total del sistema puede ser cero si sus vectores son opuestos. 

Al ignorar los vectores, se violan las leyes de Newton. Un impulso aplicado en el eje X no puede, bajo ninguna circunstancia, generar momento lineal en el eje Y. Sin vectores, el analista pierde la capacidad de predecir la dirección final del sistema tras un impacto oblicuo.

**Señal de detección**
Obtener un momento final total mayor que el inicial en un sistema aislado simplemente por haber sumado los "valores" de los momentos sin considerar que algunos cuerpos se movían en sentidos opuestos o en ejes distintos.

**Corrección conceptual**
Descompón siempre el análisis en componentes independientes:

{{f:momentum_x}}

y

{{f:momentum_y}}

Trata cada eje como un problema de balance separado. El vector total solo se recompone al final mediante el módulo:

{{f:momentum_magnitude}}

**Mini-ejemplo de contraste**
Dos bolas de billar de 0.2 kg que chocan frontalmente a 1 m/s tienen, cada una, un momento de 0.2 kg·m/s. Si ignoras los vectores, dirías que el sistema tiene 0.4 kg·m/s de momento. Sin embargo, tras el choque, si quedan paradas, el momento es 0. La física real nos dice que el momento inicial ya era 0 (0.2 - 0.2), no 0.4.

---

## Errores matemáticos

### Error 3: Error de signo en el cálculo de la variación [[DeltaP]]

**Por qué parece correcto**
Restar la magnitud menor de la mayor para evitar manejar signos negativos es una tentación constante. Se cree que un cambio de momento "negativo" no tiene sentido físico o que el signo es solo una formalidad matemática que se puede añadir al final "por sentido común".

En problemas de rebote, el alumno suele ver que la rapidez no cambia y concluye erróneamente que el cambio de momento es cero, ya que "resta" la rapidez final de la inicial sin considerar el cambio de sentido.

**Por qué es incorrecto**
La variación se define estrictamente como estado final menos estado inicial:

{{f:momentum_change}}

Un cambio de signo en [[DeltaP]] invierte la dirección de la fuerza [[Fnet]] calculada.
En física, el signo es la dirección; ignorarlo es ignorar hacia dónde empuja la fuerza.

En un rebote, la velocidad cambia de sentido (de \\(+v\\) a \\(-v\\)). La resta \\((-v) - (+v)\\) da \\(-2v\\), un cambio enorme. Si se ignora el signo, la resta daría cero, lo cual implicaría que la pared no ha hecho ninguna fuerza sobre el objeto para hacerlo rebotar, una imposibilidad física.

**Señal de detección**
Obtener un valor de variación nulo o muy pequeño en situaciones donde hay un cambio evidente de trayectoria o un frenado violento. También, obtener fuerzas medias [[Fnet]] que apuntan en el sentido de la marcha durante una frenada.

**Corrección conceptual**
Mantén rigurosamente el orden operativo: Final menos Inicial. Si el objeto rebota, el estado final DEBE llevar un signo opuesto al inicial en tus ecuaciones de balance.

**Mini-ejemplo de contraste**
Una pelota choca contra el suelo con [[Pinicial]] = 10 kg·m/s (hacia abajo) y rebota con [[Pfinal]] = 10 kg·m/s (hacia arriba). Si eliges "arriba" como positivo, entonces [[Pinicial]] = -10 y [[Pfinal]] = +10. La variación es 10 - (-10) = 20 kg·m/s. Si haces 10 - 10 = 0, estarías diciendo que el suelo no ha tenido que empujar la pelota para lanzarla hacia arriba.

---

## Errores de interpretación

### Error 4: Confundir rapidez con cantidad de movimiento

**Por qué parece correcto**
En el lenguaje cotidiano, "llevar mucho momento" o tener "mucha inercia" se asocia casi exclusivamente a ir muy rápido. El cerebro prioriza la información visual de la velocidad[[v]]sobre la información menos evidente de la masa[[m]].

Se tiende a pensar que un objeto muy pequeño a gran velocidad es siempre más difícil de detener que un objeto masivo que se mueve lentamente, basándose en la impresión visual del "peligro" de la rapidez.

**Por qué es incorrecto**
El momento lineal[[p]]es una magnitud proporcional a ambos factores. La masa es el factor de escala: un aumento del 10% en la masa tiene exactamente el mismo efecto sobre el momento que un aumento del 10% en la velocidad.

Subestimar la masa lleva a errores fatales en la interpretación de riesgos industriales o náuticos. Un buque mercante a solo 1 km/h tiene una cantidad de movimiento tan masiva que ninguna fuerza humana puede detenerlo en un intervalo corto, a pesar de que su velocidad parezca "insignificante".

**Señal de detección**
Concluir que un objeto es inofensivo en una colisión basándose solo en que su velocidad es baja, o no entender por qué se necesita tanta fuerza para desviar la trayectoria de un objeto pesado aunque este apenas se mueva.

**Corrección conceptual**
Integra siempre ambos factores en tu análisis. Pregúntate: "¿Cuánto pesa lo que se mueve?". El momento lineal es la "masa en movimiento", no solo la rapidez.

**Mini-ejemplo de contraste**
Un mosquito volando a 50 m/s (muy rápido) tiene un momento lineal de unos 0.001 kg·m/s; puedes detenerlo con un hilo. Un camión de 20 toneladas moviéndose a solo 0.01 m/s (casi imperceptible) tiene un momento de 200 kg·m/s. El camión, aunque parezca "parado", tiene 200,000 veces más capacidad de arrastre que el mosquito.

---

## Regla de autocontrol rápido

Antes de entregar tu resultado, aplica esta auditoría de tres pasos:

1.  **Auditoría Vectorial**: ¿Tu resultado final tiene el signo correcto según el eje que elegiste? Si el objeto frena o rebota,[[DeltaP]]debe apuntar en sentido contrario al movimiento inicial.
2.  **Auditoría de Masa**: ¿Has verificado que la masa[[m]]está incluida? Un resultado de momento lineal que solo dependa de la velocidad es, por definición, incorrecto.
3.  **Auditoría de Unidades**: ¿El resultado está en kg·m/s? Si has usado fuerza y tiempo, comprueba que N·s da la misma dimensión: $[M L T^{-2} \\cdot T] = [M L T^{-1}]$.
4.  **Coherencia de Causa**: ¿La fuerza media[[Fnet]]que has calculado apunta en la misma dirección que el cambio de momento[[DeltaP]]? Si no es así, hay un error de signo en el balance.
`;export{e as default};
