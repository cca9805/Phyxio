# Ondas Longitudinales en Fluidos

## Contexto conceptual
El sonido es, en esencia, la respuesta elástica de la materia a una perturbación de presión. En los fluidos, esta respuesta se manifiesta exclusivamente a través de ondas longitudinales, ya que el medio carece de la rigidez necesaria para soportar ondas transversales. Entender las ondas longitudinales es entender cómo la energía se "empuja" a través del espacio mediante colisiones y fuerzas intermoleculares en una escala microscópica que se traduce en fenómenos acústicos macroscópicos. Este estudio constituye la piedra angular de la acústica clásica y tiene implicaciones que van desde la comunicación biológica hasta el diagnóstico médico avanzado y la exploración sónica de las profundidades oceánicas.

## 🟢 Nivel esencial
Una onda longitudinal ocurre cuando las partículas de un medio oscilan en la misma dirección en la que viaja la onda. Imagine una fila de personas donde cada una empuja suavemente a la que tiene delante y luego regresa a su lugar original. Ese "empujón" viaja por toda la fila, aunque ninguna persona se desplace permanentemente de su sitio. 

En el aire, esto crea zonas de **compresión** (donde las moléculas están más juntas y la presión es mayor) y **rarefacción** (donde están más separadas y la presión es menor). Es importante notar que no hay un "viento" que viaje con el sonido; el aire que sale de un altavoz no llega a su oído, solo llega la energía de su movimiento. Esta distinción entre el transporte de energía y el transporte de materia es fundamental para comprender la física de ondas. Sin ella, sería imposible explicar cómo el sonido puede viajar a miles de kilómetros por hora sin desplazar físicamente las masas de aire a esas velocidades.

**Conceptos clave:**
- **Propagación:** El movimiento de la perturbación o la "noticia" del empujón a través del medio.
- **Oscilación local:** El movimiento de ida y vuelta de las moléculas alrededor de un punto fijo de equilibrio.
- **Medio material:** Las ondas longitudinales necesitan materia (gas, líquido o sólido) para existir, ya que dependen de los choques entre partículas.
- **Centros de compresión:** Puntos de máxima densidad donde las partículas están más apretadas.
- **Centros de rarefacción:** Puntos de mínima densidad donde las partículas se alejan entre sí.

## 🔵 Nivel formal
Para describir matemáticamente este fenómeno, definimos el desplazamiento s(x, t) de una partícula respecto a su equilibrio. Si la onda es armónica y viaja hacia la derecha:

Una onda longitudinal armonica representa el desplazamiento local de las particulas como una oscilacion cuya fase combina posicion y tiempo.

Donde [[s_hat]] es la amplitud de desplazamiento, [[k]] es el número de onda (2pi/[[[[lambda]]]]) y [[omega]] es la frecuencia angular (2pi [[f]]). 

La presión acústica p(x, t) se deriva de la deformación volumétrica del medio. Usando el módulo de compresibilidad [[B]], se demuestra que la presión es proporcional al gradiente negativo del desplazamiento. Esto se debe a que un gradiente de desplazamiento negativo indica que las partículas se están acercando, lo que aumenta la presión. Al derivar obtenemos:

La presion acustica procede de la compresion espacial del campo de desplazamientos y alcanza sus extremos donde las particulas convergen o se separan con mas intensidad.

La amplitud de presión [[p_hat]] se relaciona con el desplazamiento mediante:

La descripcion formal usa estas relaciones operativas:

{{f:velocidad_fluido}}

{{f:onda_fundamental}}

{{f:numero_onda_def}}

{{f:omega_def}}

{{f:relacion_amplitudes}}

**Relación de Fase:** Observe que el desplazamiento usa un coseno y la presión un seno. Esto implica un **desfase de 90° (pi/2 radianes)**. Físicamente, esto significa que en los puntos donde las partículas están en su posición de máximo desplazamiento (extremos del vaivén), la presión es igual a la presión de equilibrio (variación nula). La presión es máxima donde el desplazamiento es cero pero las partículas están "convergiendo" hacia ese punto desde ambos lados (máxima compresión). Esta relación es crucial para entender cómo los sensores de presión (micrófonos) captan el sonido de forma distinta a como lo haría un sensor de posición de partículas.

## 🔴 Nivel estructural
La velocidad de estas ondas [[c]] es una propiedad intrínseca del balance entre la elasticidad (fuerza de restauración) y la densidad (resistencia al movimiento o inercia). A nivel estructural, la onda longitudinal es una competencia entre la capacidad del medio para oponerse a un cambio de volumen y la inercia de sus constituyentes:

Esta dependencia corresponde a la relacion de velocidad del medio ya introducida en el nivel formal.

Este modelo asume que el fluido es un **medio continuo** y elástico lineal. En gases, el proceso es **adiabatico**: las compresiones son tan rapidas que el intercambio de calor local es despreciable, por lo que se usa el modulo adiabatico de compresibilidad. La validez de este modelo lineal se mantiene siempre que las variaciones de presión [[p_hat]] sean pequeñas comparadas con la presión atmosférica ambiente. Si las amplitudes aumentan excesivamente, como en el caso de explosiones o aviones supersónicos, aparecen efectos no lineales donde el perfil de la onda se distorsiona hasta formar frentes de choque, donde las leyes de la acústica lineal ya no son aplicables.

Ademas, la intensidad de la onda depende de forma cuadratica de la amplitud de presion y tambien de la respuesta inercial del medio. Para una intensidad sonora constante, una frecuencia [[f]] mayor exige una amplitud de desplazamiento [[s_hat]] menor. Esto explica por que los sonidos agudos pueden percibirse claramente incluso con movimientos moleculares extremadamente pequenos.

## Interpretación física profunda
La onda longitudinal es una danza de energía potencial y cinética en un escenario macroscópico. Cuando las partículas se comprimen en una región, el medio almacena energía potencial elástica debido a la repulsión mutua entre las moléculas que han sido forzadas a acercarse. Al expandirse, esa energía potencial se convierte en energía cinética de las partículas que, al ganar velocidad, empujan a sus vecinas, transfiriendo así el ímpetu. El desfase de 90° entre presión y desplazamiento es la firma matemática de esta transferencia continua: la presión (representando la energía potencial máxima) es máxima precisamente donde la velocidad de partícula (energía cinética) es cero antes de cambiar de sentido. Este ciclo de intercambio energético es el que permite que la onda se propague sin que el medio se desplace de forma neta.

## Orden de magnitud
Para poner estas ecuaciones en perspectiva, consideremos los siguientes valores típicos en nuestro entorno:
- **Velocidad en el aire (20^ grados C):** [[c]] aprox. 343  m/s (más de 1200  km/h).
- **Velocidad en el agua:** [[c]] aprox. 1500  m/s, debido a que el agua es mucho más difícil de comprimir que el aire (mayor [[B]]).
- **Desplazamiento [[s_hat]] para una conversación normal:** aprox. 10^-8  m. Esto es diez veces menor que el tamaño de un virus común, demostrando la increíble sensibilidad de nuestro sistema auditivo.
- **Variación de presión [[p_hat]] para el umbral de dolor:** aprox. 30  Pa. Es asombroso que una variación de apenas el 0.03% respecto a la presión atmosférica (101,325  Pa) sea suficiente para causar dolor físico en el oído humano.

## Método de resolución personalizado
Al enfrentarse a un problema de ondas longitudinales, siga estos pasos estratégicos:
1. **Identificar la variable de estado conocida:** ¿El problema proporciona la amplitud de presión [[p_hat]] o la de desplazamiento [[s_hat]]? Recuerde que están vinculadas por el módulo elástico y el número de onda.
2. **Caracterizar el medio de propagación:** Obtenga [[c]] a partir de [[B]] y [[rho]]. Si el medio es un gas ideal, a menudo deberá usar la temperatura y la constante adiabática para hallar [[c]].
3. **Construir la coherencia espacio-temporal:** Use la relación de dispersión [[k]] = [[[[omega]]]]/[[c]] para asegurar que la frecuencia temporal [[f]] y la longitud de onda [[lambda]] sean consistentes.
4. **Validar el régimen de trabajo:** Asegúrese de que las amplitudes sean coherentes con la aproximación lineal. Si [[s_hat]] resulta ser del orden de metros en un fluido, probablemente haya un error de cálculo o de modelo.
5. **Conversión de unidades:** Es vital trabajar en el Sistema Internacional (Pascales, metros, segundos, kg) para evitar errores de magnitud de 10 o más en la velocidad del sonido.

## Casos especiales y ejemplo extendido
**El fenómeno de la refracción acústica:** Cuando una onda sonora pasa del aire al agua (por ejemplo, el sonido de una voz penetrando en una piscina), su frecuencia [[f]] permanece inalterada porque está dictada por la fuente emisora. Sin embargo, como la velocidad [[c]] aumenta casi cinco veces, la longitud de onda [[lambda]] debe aumentar en la misma proporción para satisfacer [[c]] = [[[[lambda]]]] [[f]]. Esto significa que la "forma" espacial de la onda se estira enormemente dentro del agua. Además, debido a la enorme diferencia de impedancia (impedancia acustica, densidad por velocidad sonora) entre el aire y el agua, la mayor parte de la energía se refleja en la superficie, lo que explica por qué es difícil escuchar lo que sucede fuera de la piscina mientras estamos sumergidos.

## Preguntas reales del alumno
- **¿Por qué el sonido no viaja en el vacío?** Porque las ondas longitudinales son ondas mecánicas que dependen de la interacción física (choques) entre partículas. Sin partículas, no hay nada que comprimir ni nada que transmita la fuerza de restauración.
- **¿La humedad afecta la velocidad del sonido?** Sí. Contrario a la intuición, el aire húmedo es menos denso que el aire seco (las moléculas de H_2O son más ligeras que las de N_2 u O_2). Al reducirse la densidad [[rho]], la velocidad [[c]] aumenta ligeramente.
- **¿Es lo mismo la rapidez de la onda que la rapidez de las partículas?** No. La rapidez de la onda [[c]] es la velocidad de la "noticia" o perturbación. La rapidez de la partícula es la velocidad instantánea de su oscilación local, que suele ser órdenes de magnitud menor que [[c]].

## Conexiones transversales y rutas de estudio
- **Sismología:** Las ondas P (Primarias) son las primeras en llegar tras un seísmo porque son ondas longitudinales de alta velocidad.
- **Medicina:** La ecografía y el ultrasonido industrial se basan en la reflexión y transmisión de estas ondas para "ver" a través de materiales opacos.
- **Termodinámica:** La determinación de la velocidad del sonido es una técnica estándar para medir la capacidad calorífica de gases desconocidos.
- **Acústica Arquitectónica:** El diseño de teatros busca controlar el camino de estas ondas para evitar interferencias destructivas que "borren" el sonido.

## Síntesis final
Las ondas longitudinales representan el modo fundamental en que la materia fluida comunica sus cambios de estado mecánico a distancia. Son el resultado de un equilibrio dinámico entre la inercia de la masa y la elasticidad de los enlaces químicos. Sin ellas, el universo sería un lugar silencioso e incomunicado a nivel mecánico, privándonos de la capacidad de percibir el entorno a través del sonido y de innumerables tecnologías que hoy definen nuestra civilización.