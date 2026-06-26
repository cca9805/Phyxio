const e=`\uFEFF# Movimiento Rectilíneo Uniformemente Acelerado (MRUA) \r
\r
## Contexto conceptual \r
\r
El Movimiento Rectilíneo Uniformemente Acelerado (MRUA) introduce la idea de cambio constante. Se define como el movimiento de un cuerpo en trayectoria recta con una aceleración [[a]] constante. Esto implica que la velocidad [[v]] aumenta o disminuye de forma uniforme con el paso del tiempo. \r
\r
Este modelo es fundamental para entender la física real. Casi todos los movimientos implican aceleración, desde un coche arrancando hasta un objeto cayendo por la gravedad [[g]] . Galileo Galilei demostró que los cuerpos caen con aceleración constante independientemente de su masa, sentando las bases de la mecánica moderna y permitiendo una descripción matemática precisa del cambio. \r
\r
## 🟢 Nivel esencial \r
\r
Imagina una carrera de 100 metros. Al sonar el disparo, tu velocidad es nula, pero cada segundo vas más rápido. Ese incremento regular es el MRUA. En el MRUA, el ritmo al que cambia la velocidad es siempre el mismo. \r
\r
La clave es la aceleración constante. Si en cada segundo tu velocidad aumenta en 2 m/s, ese ritmo se mantiene siempre igual. Necesitamos tres datos básicos para definir el estado inicial del móvil: la posición inicial [[x0]] , la rapidez de partida [[v0]] y el ritmo de aceleración [[a]] . \r
\r
A diferencia del MRU, aquí las distancias recorridas no son iguales en tiempos iguales. Como vas cada vez más rápido, en cada segundo recorres más distancia que en el anterior. Es un movimiento donde el espacio ganado crece de forma acelerada conforme pasa el tiempo. \r
\r
> [!TIP] \r
> La aceleración [[a]] es la magnitud que define el cambio. Si tiene el mismo signo que la velocidad, el objeto acelera. Si tienen signos opuestos, el objeto pierde rapidez. \r
\r
## 🔵 Nivel formal \r
\r
En el MRUA, la aceleración [[a]] es constante, lo que genera una velocidad [[v]] que cambia linealmente y una posición [[x]] que cambia de forma cuadrática conforme a las leyes del movimiento. El análisis formal requiere integrar estas variaciones en un sistema de ecuaciones consistente que relacione el espacio, el tiempo y el ritmo de cambio. \r
\r
### Las Ecuaciones Fundamentales \r
Disponemos de cuatro ecuaciones núcleo para describir el movimiento en cualquier instante [[t]] partiendo de los valores de [[x0]] y [[v0]] : \r
\r
1.  **Ecuación de la Velocidad**: \r
    La velocidad [[v]] final es una función lineal del tiempo [[t]] . La pendiente de esta función es la aceleración [[a]] . \r
\r
2.  **Ecuación Horaria de la Posición**: \r
    Es una función cuadrática donde el término con el tiempo [[t]] al cuadrado hace que la posición [[x]] se curve formando una parábola. \r
\r
3.  **Ecuación de Torricelli**: \r
    Relaciona velocidades y el desplazamiento [[dx]] sin necesidad de conocer el intervalo temporal [[t]] . \r
\r
4.  **Cálculo por Velocidad Promedio**: \r
    Permite hallar el desplazamiento [[dx]] basándose en la media aritmética de las velocidades. \r
\r
### Representación Gráfica \r
1.  **Posición (x vs t)**: Es una parábola. Si la aceleración [[a]] es positiva la curva se abre hacia arriba; si es negativa se abre hacia abajo. \r
2.  **Velocidad (v vs t)**: Una línea recta inclinada cuya pendiente representa el valor constante de la aceleración [[a]] . \r
3.  **Aceleración (a vs t)**: Una línea horizontal de valor constante, indicando que el ritmo de cambio no varía. \r
\r
\r
Relaciones formales adicionales del leaf:\r
\r
{{f:mrua_velocidad}}\r
\r
{{f:mrua_posicion}}\r
\r
{{f:mrua_torricelli}}\r
\r
{{f:mrua_desplazamiento_medio}}\r
\r
## 🔴 Nivel estructural \r
\r
El MRUA es la consecuencia cinemática de la aplicación de una fuerza neta constante sobre \r
Relaciones formales adicionales del leaf:\r
\r
\r
\r
\r
\r
una masa, según la Segunda Ley de Newton. Desde un punto de vista estructural, este movimiento representa el primer nivel de alejamiento del equilibrio inercial, donde el sistema ya no conserva su cantidad de movimiento, sino que la altera de manera uniforme. \r
\r
### Fundamentación Dinámica y Energética \r
La estructura del MRUA está intrínsecamente ligada al concepto de campo de fuerza uniforme. El ejemplo más puro es la gravedad terrestre [[g]] . En este escenario, el cuerpo experimenta una aceleración constante porque el gradiente del potencial es lineal. Energéticamente, el MRUA describe un proceso de transferencia sostenida: el trabajo realizado por la fuerza constante se traduce en una variación cuadrática de la energía cinética. Esto explica por qué el desplazamiento [[dx]] depende del cuadrado del tiempo [[t]] : la energía acumulada crece más rápido a medida que el cuerpo gana velocidad. \r
\r
### Análisis de la Curvatura y Simetría \r
Matemáticamente, el MRUA es el resultado de una doble integración temporal. La aceleración [[a]] es la que dicta la curvatura de la trayectoria en el espacio-tiempo. Esta curvatura parabólica posee una simetría fundamental respecto al vértice (punto de velocidad nula). En un sistema ideal sin fricción, si lanzamos un objeto hacia arriba, la trayectoria de ascenso es una imagen especular de la de descenso. Esta reversibilidad temporal es una propiedad estructural que permite predecir el comportamiento del sistema tanto hacia adelante como hacia atrás con absoluta precisión. \r
\r
### Límites y Validez Estructural \r
1.  **Saturación por Rozamiento**: En entornos fluidos reales, el MRUA es transitorio. La resistencia del aire aumenta con el cuadrado de la velocidad [[v]] , lo que eventualmente estabiliza el movimiento en una velocidad terminal constante. \r
2.  **Efectos Relativistas**: Según la Relatividad Especial, ningún objeto con masa puede mantener un MRUA indefinidamente. A medida que la velocidad [[v]] se aproxima a [[c]] , la masa inercial aparente aumenta, exigiendo fuerzas infinitas para mantener la aceleración [[a]] constante. \r
3.  **Límite Cuántico**: A escalas atómicas, la trayectoria parabólica se desvanece ante la naturaleza probabilística, donde la posición [[x]] no puede definirse con precisión absoluta simultáneamente con la velocidad. \r
\r
## Interpretación física profunda \r
\r
La esencia del MRUA reside en la respuesta de la materia a una interacción constante. Mientras que el MRU es el estado basal de la inercia, el MRUA representa el primer nivel de perturbación organizada. Un objeto en MRUA experimenta un cambio constante en su energía cinética, lo que implica que hay un trabajo realizándose sobre él de manera sostenida. \r
\r
Esta interpretación muestra que el MRUA es el lenguaje mediante el cual las fuerzas constantes, como la gravedad terrestre [[g]] , esculpen el movimiento. En el tejido del espacio-tiempo, la aceleración constante es una manifestación de la curvatura o de la presencia de un campo de fuerza uniforme. La parábola en la gráfica de posición es el reflejo de cómo el tiempo [[t]] y el espacio se entrelazan cuando la velocidad [[v]] no es fija. El MRUA es el puente entre la estática de la inercia y la dinámica compleja del universo acelerado. \r
\r
## Orden de magnitud \r
\r
Aceleraciones típicas observadas en diferentes contextos: \r
\r
| Fenómeno | Aceleración aproximada (m/s²) | Contexto | \r
| :--- | :--- | :--- | \r
| Ascensor de pasajeros | 1.2 | Aceleración suave para evitar molestias físicas. | \r
| Coche familiar | 2.8 | Ritmo de aceleración normal al arrancar. | \r
| Gravedad terrestre [[g]] | 9.81 | La aceleración de caída libre estándar en la Tierra. | \r
| Coche de Fórmula 1 | 25 | Alcanza velocidades asombrosas en pocos segundos. | \r
| Despegue de aeronave | 29 | Aumento notable del peso aparente de los ocupantes. | \r
| Atrapada de béisbol | 3000 | Deceleración extrema al detener la bola. | \r
| Pulga saltando | 2000 | Uno de los movimientos más explosivos de la naturaleza. | \r
| Luz en el vacío | 299792458 | El límite de velocidad universal absoluto [[c]] . | \r
\r
## Método de resolución personalizado \r
\r
Usa el Protocolo de la Parábola para resolver problemas con rigor: \r
1.  **Ejes**: Define el origen y el sentido positivo. El signo de [[a]] es crítico. \r
2.  **Variables**: Anota los valores de [[x0]] , [[v0]] , [[v]] , [[a]] y el tiempo [[t]] . \r
3.  **Herramienta**: Si no dispones de [[t]] , usa Torricelli. Si buscas [[x]] , usa la Ecuación Horaria. \r
4.  **Unidades**: Verifica que todo esté en metros, segundos y m/s². \r
5.  **Cálculo**: Resuelve con cuidado, especialmente con las raíces cuadradas. \r
6.  **Validación**: Comprueba si el resultado tiene sentido físico real. \r
\r
## Casos especiales y ejemplo extendido \r
\r
### Frenado de Emergencia \r
Un coche a 30 m/s aplica los frenos con una deceleración de 5 m/s². Usando Torricelli, encontramos que el vehículo recorre exactamente 90 metros antes de detenerse totalmente. \r
\r
### Encuentro MRU y MRUA \r
Un policía parte desde el reposo con una aceleración [[a]] de 3 m/s² cuando un coche le adelanta a una velocidad constante de 20 m/s. La posición del policía se define por 1.5 por el tiempo [[t]] al cuadrado. Al igualar las trayectorias, el tiempo de alcance es de 13.33 segundos. \r
\r
### Aterrizaje de una Aeronave \r
Un avión aterriza a una velocidad [[v0]] de 69.4 m/s y aplica una deceleración de 3 m/s². Mediante Torricelli, necesita 802.7 metros para detenerse. Una pista de 1,500 metros resulta suficiente. \r
\r
## Preguntas reales del alumno \r
\r
*   **¿Aceleración negativa significa frenar?** No. Solo si la velocidad es positiva. Si ambos son negativos, el objeto gana rapidez hacia la izquierda. \r
*   **¿Por qué el tiempo aparece al cuadrado?** Porque el desplazamiento [[dx]] es el área de un triángulo en la gráfica de velocidad, donde base y altura crecen con el tiempo [[t]] . \r
*   **¿Puede la velocidad ser cero con aceleración?** Sí, en el punto más alto de un lanzamiento vertical bajo [[g]] . La aceleración sigue actuando. \r
\r
## Conexiones transversales y rutas de estudio \r
\r
*   **Matemáticas**: Relación entre una función y su segunda derivada. \r
*   **Seguridad Vial**: Diseño de sistemas ABS y distancias de seguridad. \r
*   **Balística**: El comportamiento vertical de proyectiles es un MRUA regido por [[g]] . \r
*   **Rutas**: Tras dominar el MRUA, estudia la **Caída Libre** y el **Tiro Parabólico**. \r
\r
## Síntesis final \r
\r
El MRUA nos enseña que el cambio en la naturaleza puede ser predecible si el ritmo de dicho cambio es constante. A través de la aceleración [[a]] , anticipamos cómo las fuerzas transforman el reposo en movimiento. Es el puente necesario para comprender que el universo es un escenario en perpetua transformación reglamentada. \r
`;export{e as default};
