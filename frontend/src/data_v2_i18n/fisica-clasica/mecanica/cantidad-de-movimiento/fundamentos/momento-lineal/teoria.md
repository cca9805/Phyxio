# Momento lineal [[p]]

## Contexto conceptual

El **momento lineal**[[p]], a menudo denominado "cantidad de movimiento", es la magnitud física que describe la **persistencia direccional** de un objeto en movimiento. Mientras que la masa[[m]]nos dice cuánta materia hay y la velocidad[[v]]nos dice cuán rápido se mueve, el momento lineal unifica ambas para determinar la "fuerza de voluntad" dinámica de un cuerpo: cuán difícil es sacarlo de su trayectoria o detenerlo por completo.

Es la magnitud fundamental de la **dinámica traslacional**. En la física profunda, el momento lineal se considera incluso más esencial que la fuerza, ya que está vinculado directamente a la **homogeneidad del espacio**: el hecho de que las leyes de la física sean las mismas aquí que un metro más allá garantiza que el momento lineal sea una cantidad que el universo se esfuerza en conservar.

> [!NOTE]
> En un sistema aislado, el momento lineal total es una **constante del movimiento**. Esta propiedad permite resolver choques galácticos o colisiones subatómicas sin conocer las complejísimas fuerzas instantáneas que actúan durante el contacto.

---

## 🟢 Nivel esencial

A nivel intuitivo, el momento lineal es lo que comúnmente llamamos "inercia en movimiento". Todos comprendemos que no es lo mismo detener una pelota de tenis que un camión, aunque ambos se muevan a la misma velocidad. El camión posee una "cantidad de movimiento" inmensamente superior debido a su masa[[m]].

La idea clave es que el momento lineal [[p]] es matemáticamente el producto directo de la masa por la velocidad.

Esta relación nos enseña que el efecto dinámico depende de dos factores que pueden compensarse entre sí. Una bala de pocos gramos disparada a gran velocidad puede tener el mismo momento lineal que un pesado bloque de piedra moviéndose lentamente. En términos de impacto, ambos representarían el mismo desafío para ser detenidos.

> [!TIP]
> Piensa en el momento lineal como el "poder de impacto". Para cambiar este poder, no basta con aplicar una fuerza; esa fuerza debe actuar durante un intervalo de tiempo[[DeltaT]].

---

## 🔵 Nivel formal

En el nivel formal, el momento lineal se define rigurosamente como el producto de la masa escalar por el vector velocidad. Esta es la expresión constitutiva que da sentido matemático a la magnitud:

{{f:momentum_definition}}

Se revela así como una **magnitud vectorial**. Esto significa que la dirección y el sentido son tan importantes como el valor numérico. La inercia dinámica no solo fluye, sino que lo hace hacia una dirección concreta. Para un análisis analítico preciso en dos dimensiones, no basta con operar magnitudes escalares; debemos descomponer el vector geométricamente en sus proyecciones ortogonales sobre los ejes cartesianos:

{{f:momentum_x}}
{{f:momentum_y}}

Estas componentes,[[px]]y[[py]], nos permiten analizar el movimiento horizontal y vertical de forma independiente mediante las velocidades[[vx]]y[[vy]]. Esta técnica de **desacoplamiento** es vital para entender fenómenos como el retroceso de un arma o el rebote de una pelota contra una pared. Cuando calculamos el módulo total del vector, estamos hallando la intensidad neta de la carga dinámica:

{{f:momentum_magnitude}}

Si el estado de movimiento cambia, hablamos de una **variación de momento lineal**[[DeltaP]]. Este cambio es el resultado final de la interacción y se calcula como la diferencia entre el estado final[[Pfinal]]y el inicial[[Pinicial]]:

{{f:momentum_change}}

---

{{f:instantaneous_force}}

{{f:kinetic_energy_momentum}}

{{f:average_force_definition}}

## 🔴 Nivel estructural

Estructuralmente, el momento lineal es la medida de la **simetría de traslación**. Según el Teorema de Noether, toda simetría en la naturaleza da lugar a una ley de conservación. La conservación del momento lineal es la prueba de que el espacio es uniforme.

Desde el punto de vista de las leyes de Newton, la Segunda Ley encuentra su expresión más pura y general a través del momento. Newton no definió originalmente la fuerza[[Fnet]]como masa por aceleración (que solo vale para masa constante), sino como la rapidez con la que cambia el momento lineal:


Esta formulación estructural es la única capaz de explicar sistemas de **masa variable**, como un cohete que pierde combustible para ganar velocidad o una cinta transportadora que se carga de arena. En estos sistemas, la aceleración no es proporcional a la fuerza de forma directa, sino que depende de cómo se redistribuye el momento entre la masa que queda y la masa que sale.

Asimismo, la conexión entre el momento y la energía cinética[[K]]se establece estructuralmente como:


> [!WARNING]
> En colisiones a velocidades cercanas a la de la luz, el modelo estructural debe transicionar a la relatividad especial, donde la masa ya no es una constante inercial y el momento lineal crece de forma asintótica hacia el infinito.

---

## Interpretación física profunda

La interpretación profunda nos dice que el momento lineal es el **portador de la identidad dinámica**. Un objeto no "está" simplemente en movimiento; "lleva" una cantidad de movimiento consigo. 

Cuando una fuerza actúa, lo que ocurre es una **negociación temporal**. Para conseguir un cambio determinado[[DeltaP]], podemos usar una fuerza enorme en un tiempo mínimo (un choque seco) o una fuerza pequeña en un tiempo prolongado (una frenada suave). El resultado sobre el momento es el mismo, pero el esfuerzo medio[[Fnet]]necesario cambia drásticamente:


Esta dualidad es la base de toda la ingeniería de seguridad moderna. Los materiales deformables no están ahí para "eliminar" el momento lineal (que debe cambiar sí o si para detener el vehículo), sino para gestionar el intervalo[[DeltaT]]y así minimizar la fuerza de impacto sobre los ocupantes.

---

## Orden de magnitud

Para detectar resultados absurdos en tus cálculos, ten en mente estas escalas de referencia de momento lineal[[p]]:

*   **Escala Humana (Baja)**: Un caminante de 70 kg a 1.5 m/s posee unos **100 kg·m/s**.
*   **Escala Deportiva**: Un saque de tenis profesional (bola de 57g a 60 m/s) tiene apenas **3.4 kg·m/s**, pero su peligro reside en que se transfiere en milisegundos.
*   **Escala Vehicular**: Un coche medio (1500 kg) a 100 km/h (28 m/s) transporta **42,000 kg·m/s**.
*   **Escala Industrial**: Un tren de carga de 5,000 toneladas a solo 10 km/h tiene un momento de **14,000,000 kg·m/s**.

> [!NOTE]
> Un error de un orden de magnitud (confundir 42,000 con 4,200) en ingeniería de seguridad significaría la diferencia entre un parachoques funcional y un fallo estructural catastrófico.

---

## Método de resolución personalizado

Para resolver cualquier problema de momento lineal con éxito, sigue este protocolo operativo:

1.  **Definición del Sistema**: Aísla el cuerpo o conjunto de cuerpos. Decide si lo tratarás como masa puntual[[m]].
2.  **Convenio de Signos**: Establece un eje positivo. En este leaf, un signo negativo en[[p]]no significa "menos movimiento", sino movimiento hacia la izquierda o hacia abajo.
3.  **Balance de Estados**: Identifica el momento inicial[[Pinicial]]y el final[[Pfinal]]. Si hay varias dimensiones, calcula[[px]],[[vx]],[[px]]y[[vx]]por separado, considerando también el estado vertical final[[vy]]si aplica.
4.  **Cálculo del Cambio**: Halla la variación[[DeltaP]]restando siempre final menos inicial.
5.  **Relación Dinámica**: Si interviene el tiempo de contacto[[DeltaT]], calcula la fuerza neta media[[Fnet]]usando la relación de causa-efecto.
6.  **Cierre Energético**: Si el problema lo requiere, vincula el momento con la energía cinética[[K]]para verificar si el choque ha sido elástico o inelástico.

---

## Casos especiales y ejemplo extendido

### El Rebote Infinito
En un rebote elástico contra una pared, la rapidez se mantiene pero el sentido cambia. Si entras con[[p]]y sales con -[[p]], el cambio total es **2p**, no cero. Este "factor 2" es el responsable de que los rebotes generen el doble de fuerza que los impactos donde el objeto simplemente se detiene.

### Ejemplo extendido: El Salto desde una Barca
Imagina a una persona de 80 kg sobre una barca de 120 kg en reposo total (momento inicial del sistema = 0). Al saltar hacia la orilla a 3 m/s, la persona adquiere un momento de **240 kg·m/s**. Para que el momento total siga siendo cero (conservación), la barca debe adquirir un momento de **-240 kg·m/s** (hacia atrás). Esto obligará a la barca a retroceder a 2 m/s. 

Este ejemplo demuestra que no se puede crear momento lineal de la nada; para moverte hacia adelante, debes empujar algo hacia atrás.

---

## Preguntas reales del alumno

*   **¿Es lo mismo que la fuerza?** No. La fuerza es la causa del cambio, el momento lineal es la medida del estado de movimiento.
*   **¿Puede ser negativo?** Sí, el signo indica la dirección. Un momento de -50 kg·m/s es igual de intenso que uno de +50 kg·m/s, solo que va en sentido contrario.
*   **¿Por qué se conserva?** Porque el espacio no tiene puntos preferentes (homogeneidad). Si el universo fuera distinto en cada metro, el momento no se conservaría.
*   **¿Qué pasa si la masa cambia?** Debes usar la definición general de Newton. El momento sigue conservándose si consideras la masa que entra y sale del sistema.

---

## Conexiones transversales y rutas de estudio

*   **[Impulso](leaf:mecanica/cantidad-de-movimiento/fundamentos/impulso)**: La continuación natural para profundizar en la gestión del tiempo y la fuerza en los impactos.
*   **[Colisiones en 1D](leaf:mecanica/cantidad-de-movimiento/choques/choques-unidimensionales)**: Aplicación práctica de la conservación del momento en choques frontales.
*   **[Centro de Masas](leaf:mecanica/cantidad-de-movimiento/centro-de-masas/definicion-centro-de-masas)**: Cómo el momento total de un sistema complejo se resume en un solo punto.
*   **[Relatividad Especial](leaf:relatividad/fundamentos)**: El límite donde la fórmula clásica de momento lineal debe ser sustituida por el factor de Lorentz.

---

## Síntesis final

El **momento lineal**[[p]]es la brújula de la dinámica. Su capacidad para unificar masa y velocidad en una magnitud vectorial conservada nos permite predecir el destino de cualquier sistema en movimiento, desde el choque de dos partículas hasta la trayectoria de un cohete en el vacío del espacio. Recordar su naturaleza vectorial y su relación con el tiempo es la clave para dominar la mecánica traslacional.







