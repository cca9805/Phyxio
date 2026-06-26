# Conservación del momento [[Lf]] [[Li]] angular [[L]]

## Contexto conceptual

La conservación del momento angular es una de las tres grandes leyes de conservación de la mecánica clásica, junto con la energía y el momento lineal. Surge de una propiedad profunda del universo: la **isotropía del espacio** (simetría rotacional). Si las leyes físicas no cambian al rotar el sistema, el momento angular se conserva. Esta ley explica desde por qué los planetas no caen hacia el Sol hasta por qué es más fácil mantener el equilibrio en una bicicleta en marcha que en una parada.

## 🟢 Nivel esencial

La idea clave es la **persistencia del giro**. Así como un objeto en movimiento rectilíneo tiende a seguir moviéndose en línea recta, un objeto que gira tiende a seguir girando con la misma intensidad y en la misma dirección. Esta "testarudez" rotacional solo cambia si algo desde fuera aplica un "empujón circular" llamado torque [[tau]].

Imagina a un bailarín girando sobre el hielo. Si no hay rozamiento (torque externo nulo), su momento angular total no puede cambiar. Sin embargo, el bailarín puede controlar su **velocidad de giro** cambiando su forma. Al encoger los brazos, concentra su masa cerca del eje, lo que facilita el giro y le hace acelerar. Al extenderlos, "pesa" más para la rotación y se frena. El momento angular es el producto de esa "dificultad para girar" (inercia) y la rapidez de giro; si uno baja, el otro sube para mantener el total constante.

> [!TIP]
> No pienses en la conservación como una fórmula, sino como un balance: el sistema puede cambiar de forma o de velocidad, pero el "contenido de giro" total es una herencia que se mantiene mientras el entorno no interfiera.

## 🔵 Nivel formal

### La ley de cambio y el estado nulo

La dinámica rotacional se rige por la relación entre el torque neto y el ritmo de cambio del momento angular:

{{f:tau}}

. Cuando el torque externo es despreciable, el cambio es nulo (

{{f:tau}}

), lo que implica que el momento angular es una constante del movimiento:

{{f:tau}}

En situaciones donde existe un torque neto, el sistema experimenta una variación de momento angular [[DeltaL]] durante un intervalo de tiempo [[DeltaT]], siguiendo la relación

{{f:tau}}

. Si ese par es nulo, entramos en el régimen de conservación ideal.

En el caso de un sólido rígido que rota sobre un eje fijo, el momento angular se expresa como

{{f:cons}}

. La conservación se traduce entonces en la ecuación operativa:

{{f:Iomega_solve_omegaf}}

La forma despejada para el estado final también se usa de manera explícita:

{{f:cons_solve_Lf}}

Y, para el caso de eje fijo, el balance completo puede escribirse como:

{{f:Iomega}}

### El carácter vectorial

Es fundamental recordar que L es un vector. Esto significa que no solo se conserva su magnitud, sino también su **dirección en el espacio**. Un objeto que gira actúa como un giroscopio: resiste cualquier intento de cambiar la orientación de su eje. Si el torque externo es nulo solo en una dirección (por ejemplo, el eje vertical), entonces solo se conservará la componente vertical del momento angular, aunque las demás varíen.

### Aplicación: La segunda ley de Kepler

Un planeta en órbita siente una fuerza gravitatoria dirigida siempre hacia el Sol (fuerza central). Como la fuerza es paralela al radio vector (

[[tau]] = 0

), el torque es nulo. Esto garantiza que el momento angular orbital se conserve y que el balance entre [[Li]] y [[Lf]] permanezca válido.

Este hecho obliga al planeta a barrer áreas iguales en tiempos iguales, moviéndose más rápido cuando está más cerca del Sol para compensar el brazo de palanca menor.

## 🔴 Nivel estructural

### Simetría de Noether e Isotropía

A nivel estructural, la conservación del momento angular no es un postulado independiente, sino una consecuencia del **Teorema de Noether**. Si el espacio es isótropo (no tiene direcciones preferentes), la descripción física de un sistema no debe cambiar al rotarlo. Esta simetría matemática impone la existencia de una cantidad conservada: el momento angular. Si un sistema se encuentra en un entorno que rompe esta simetría (como un campo magnético direccional o una red cristalina), el momento angular puede dejar de ser una constante.

### Límites de validez y fallos del modelo

El uso del modelo ideal de conservación tiene fronteras críticas:

1.  **Deformación no rígida**: Si el cuerpo se deforma de manera que no se puede definir un único momento de inercia I (como un fluido o una nube de gas colapsando), el balance debe hacerse partícula a partícula, lo que puede revelar transferencias de momento angular complejas entre diferentes partes del sistema.
2.  **Sistemas no inerciales**: En un sistema de referencia en rotación, aparecen torques ficticios (como el asociado a la fuerza de Coriolis) que pueden hacer que el momento angular parezca no conservarse si no se contabilizan correctamente estas fuerzas de inercia.
3.  **El Problema de la Energía**: Es común confundir conservación de momento angular con conservación de energía cinética. En el ejemplo del bailarín, la energía cinética **aumenta** al encoger los brazos porque los músculos realizan un trabajo interno positivo. El momento se conserva, pero la energía se transforma.
4.  **Límite Cuántico y Relativista**: A escalas atómicas, el momento angular está cuantizado y aparece el "espín", una forma intrínseca de momento angular que no se debe a una rotación física de masa. A velocidades cercanas a la de la luz, la masa deja de ser constante y el balance requiere el uso de tensores de momento angular relativistas.

### Estabilidad y Efecto Giroscópico

La conservación de la dirección de L es lo que da estabilidad a los proyectiles rayados, a los frisbees y a los satélites. Para desviar el eje de giro de un objeto con gran L, se requiere un torque externo enorme aplicado durante un tiempo prolongado. Esta "inercia direccional" es la base de toda la tecnología de navegación inercial moderna.

## Interpretación física profunda

La conservación del momento angular nos enseña que el giro es una propiedad fundamental del estado de movimiento, no un efecto secundario. La persistencia de la rotación en ausencia de torque es el análogo rotacional de la inercia de Galileo. Entender esta ley significa reconocer que el universo "premia" la simetría con permanencia: porque el espacio no tiene dirección, el giro se vuelve eterno.

## Orden de magnitud

*   **Púlsares**: Una estrella que colapsa de un radio de 10^6 km a 10 km puede pasar de rotar una vez al mes a rotar 30 veces por segundo debido a la conservación de L.
*   **Bicicletas**: Una rueda de bicicleta a 20 km/h tiene suficiente momento angular para que los torques gravitatorios de pequeñas inclinaciones se compensen con la precesión, ayudando a mantener la verticalidad.
*   **Kepler**: La Tierra se mueve a 30.3 km/s en el perihelio y a 29.3 km/s en el afelio. Esa pequeña diferencia es el ajuste exacto necesario para que su momento angular sea constante.

## Método de resolución personalizado

1.  **Elegir el origen**: El momento angular depende del punto elegido. Busca el punto donde el torque de las fuerzas externas sea nulo.
2.  **Verificar el torque**: ¿Hay fuerzas externas? Si las hay, ¿pasan por el origen elegido? Si pasan por el origen, el torque es cero y hay conservación.
3.  **Definir estados**: Calcula L antes y después del cambio.
4.  **Aplicar la igualdad**:

entre estado inicial y final. Si es un sólido rígido, usa la forma con [[Ii]], [[I_final]], [[omegai]] y [[omegaf]]

.
5.  **Revisar la energía**: Si la velocidad angular cambió debido a un cambio de forma, calcula la variación de energía cinética e identifica la fuente de trabajo (usualmente interno).

## Casos especiales y ejemplo extendido

**El choque de la partícula y la barra.** Si una partícula impacta contra una barra libre en el espacio, no solo se conserva el momento lineal, sino también el angular respecto al centro de masa de la barra. Esto permite calcular tanto la velocidad de traslación como la de rotación final de la barra, resolviendo un sistema que de otro modo sería indeterminado.

## Preguntas reales del alumno

*   **¿Si se conserva el momento, por qué los planetas no se van en línea recta?** Porque la gravedad los mantiene unidos, pero la conservación angular les impide caer al centro; es el equilibrio entre "querer seguir recto" y "ser atraído".
*   **¿Es el momento angular siempre paralelo a la velocidad angular?** No. En objetos asimétricos o con rotación fuera de sus ejes principales, L y omega pueden apuntar en direcciones distintas, lo que genera vibraciones y torques internos.
*   **¿Por qué un gato siempre cae de pie?** Porque usa la conservación del momento angular para rotar diferentes partes de su cuerpo en direcciones opuestas, logrando reorientarse sin torque externo neto.

## Conexiones transversales y rutas de estudio

*   **Base**: [Definición de momento angular](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/definicion-momento-angular).
*   **Análogo lineal**: [Conservación del momento lineal](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
*   **Extensión**: [Estabilidad giroscópica y Precesión](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/precesion).

## Síntesis final

La conservación del momento angular es la ley de la persistencia rotacional. Nos dice que, en ausencia de torque externo, el "giro" de un sistema se mantiene constante en magnitud y dirección. Esta ley es una consecuencia de la isotropía del espacio y constituye una herramienta esencial para entender desde la estabilidad de un juguete hasta la evolución de las galaxias.
Su valor didáctico y físico está en distinguir un simple cambio interno de inercia de una ruptura real causada por el entorno.